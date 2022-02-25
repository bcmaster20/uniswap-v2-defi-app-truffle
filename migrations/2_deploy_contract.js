const ERC20Mock = artifacts.require("ERC20Mock");

module.exports = function (deployer) {
  deployer.deploy(ERC20Mock);
};
