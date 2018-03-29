"use strict";

const rootPrefix = '../..'
  , coreConstants = require(rootPrefix + '/config/core_constants')
  , ModelBaseKlass = require(rootPrefix + '/app/models/base')
;

const BrandedTokenTransactionTypesKlass = function (chainId) {
  const oThis = this
  ;

  oThis.chainId = chainId;
  ModelBaseKlass.call(oThis, {chainId: chainId});
};

BrandedTokenTransactionTypesKlass.prototype = Object.create(ModelBaseKlass.prototype);

/*
 * Public methods
 */
const BrandedTokenTransactionTypesSpecificPrototype = {

  tableName: coreConstants.BRANDED_TOKEN_TRANSACTION_TYPES_TABLE_NAME

};

Object.assign(BrandedTokenTransactionTypesKlass.prototype, BrandedTokenTransactionTypesSpecificPrototype);

module.exports = BrandedTokenTransactionTypesKlass;


// ttk = require('./app/models/address_details')
// new ttk().select('*').where('id>1').limit('10').fire().then(console.log);
