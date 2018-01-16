"use strict";

/*
 * Constants file: Load constants
 * Author: Sachin
 */


const constants = {}

function define(key, value) {
	constants[key] = value;
}

define("BLOCK_TABLE_NAME", 'blocks');
define("TRANSACTION_TABLE_NAME", 'transactions');
define("ADDRESS_TRANSACTION_TABLE_NAME", 'address_transactions');
define("TOKEN_TRANSACTION_TABLE_NAME", 'token_transactions');
define("ADDRESS_TOKEN_TRANSACTION_TABLE_NAME", 'address_token_transactions');


// define("blocks_format", '(?,?,?,?,?,?,?,?,?,?)');
define("BLOCKS_DATA_SEQUENCE", '(number, hash, parent_hash, miner, difficulty, total_difficulty, gas_limit, gas_used, total_transactions, timestamp)');
define("TRANSACTION_DATA_SEQUENCE", '(hash, block_number, transaction_index, contract_address, t_from, t_to, tokens, gas_used, gas_price, nounce, input_data, logs, timestamp)');
define("ADDRESS_TRANSACTION_DATA_SEQUENCE", '(address, corresponding_address, tokens, transaction_hash, transaction_fees, inflow, timestamp)');
define("TOKEN_TRANSACTION_DATA_SEQUENCE", '(hash, contract_address, t_from, t_to, tokens, timestamp)');
define("ADDRESS_TOKEN_TRANSACTION_DATA_SEQUENCE", '(address, corresponding_address, tokens, contract_address, transaction_hash, inflow, timestamp)')

// Index Map
define("TRANSACTION_INDEX_MAP", {'hash':0, 'block_number':1, 'transaction_index':2, 'contract_address':3, 't_from':4, 't_to':5, 'tokens':6, 'gas_used':7, 'gas_price':8, 'nounce':9, 'input_data': 10, 'logs':11, 'timestamp':12});
define("TOKEN_TRANSACTION_INDEX_MAP", {'hash':0, 'contract_address':1, 't_from':2, 't_to':3, 'tokens':4, 'timestamp':5});

//define("ENVIRONMENT", process.env.ENVIRONMENT);


define('OSTE_GETH_UTILITY_RPC_PROVIDER', process.env.OSTE_GETH_UTILITY_RPC_PROVIDER);
define('OSTE_GETH_VALUE_RPC_PROVIDER', process.env.OSTE_GETH_VALUE_RPC_PROVIDER);

module.exports = constants;