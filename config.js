"use strict"

/*
 * OpenST Explorer configuration file:
 *
 * Explorer is built to work with multiple OpenST utility chains
 */

//Chain config
const chain_config = {
  '141': {
    chainId: 141,
    database_type: "mysql",
    web_rpc: "http://localhost:8545",
    poll_interval: 2000,
    db_config: {
      chainId: 141,
      driver: 'mysql',
      user: 'root',
      password: 'root',
      host: 'localhost',
      database: 'ost_staging_explorer',
      blockAttributes: ['miner', 'difficulty', 'totalDifficulty', 'gasLimit', 'gasUsed'],
      txnAttributes: ['gas', 'gasPrice', 'input', 'nonce', 'contractAddress']
    }
  },

  '142': {
    chainId: 142,
    database_type: "mysql",
    web_rpc: "http://localhost:9546",
    poll_interval: 2000,
    db_config: {
      chainId: 142,
      driver: 'mysql',
      user: 'root',
      password: 'root',
      host: 'localhost',
      database: 'ost_explorer_142',
      blockAttributes: ['miner', 'difficulty', 'totalDifficulty', 'gasLimit', 'gasUsed'],
      txnAttributes: ['gas', 'gasPrice', 'input', 'nonce', 'contractAddress']
    }
  }
}

module.exports = {

  getChainConfig: function(chainId) {
    return chain_config[chainId];
  },

  getChainDbConfig: function(chainId) {
    if (this.getChainConfig(chainId)) {
      return this.getChainConfig(chainId).db_config;
    }
  },

  getWebRpcUrl: function(chainId) {
    if (this.getChainConfig(chainId)) {
      return this.getChainConfig(chainId).web_rpc;
    }
  },

  getAllChainIDs: function() {
    return Object.keys(chain_config);
  }
};