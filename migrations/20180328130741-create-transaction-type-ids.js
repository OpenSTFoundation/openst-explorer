'use strict';

var dbm;
var type;
var seed;

const rootPrefix = '..'
  , constants = require(rootPrefix + '/config/core_constants.js')
;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return createTransactionTypeIdTable(db)
    .then(function () {
      return createIndexOnTransactionTypeIdTable(db);
    });
};

exports.down = function(db) {
  return null;
};

//address_token_transfer
//id, contract_address_id, transaction_type
const createTransactionTypeIdTable = function (db) {
  return db.createTable(constants.TRANSACTION_TYPE_ID_TABLE_NAME, {
    id: {type: 'bigint', notNull: true, primaryKey: true, autoIncrement: true},
    contract_address_id: {type: 'bigint', notNull: true},
    transaction_type: {type: 'string', notNull: true},
    created_at:{type: 'datetime', notNull: true},
    updated_at:{type: 'datetime', notNull: true}
  });
}

const createIndexOnTransactionTypeIdTable = function (db) {
  db.addIndex(constants.TRANSACTION_TYPE_ID_TABLE_NAME, 'tti_ca_tt_index', ['contract_address_id', 'transaction_type'], false);
};

