const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts) {
  it("should assert true", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });

  it("initial value is 0", async () => {
    const ssInstance = await SimpleStorage.deployed();
    const storedData = await ssInstance.getStoredData.call();
    assert.equal(storedData, 0, `Initial state should be zero`);
  });

  describe("Functionality", () => {
    const dataExpected = 42;
    it(`should store the value ${dataExpected}`, async () => {
      const ssInstance = await SimpleStorage.deployed();
      await ssInstance.setStoredData(dataExpected, { from: accounts[0] });
      const storedData = await ssInstance.getStoredData.call();
      assert.equal(storedData, dataExpected, `${dataExpected} was not stored!`);
    });
  });
});
