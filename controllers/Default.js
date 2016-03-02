'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.chargeOfSalesGET = function chargeOfSalesGET (req, res, next) {
  Default.chargeOfSalesGET(req.swagger.params, res, next);
};

module.exports.companyGET = function companyGET (req, res, next) {
  Default.companyGET(req.swagger.params, res, next);
};

module.exports.companyListGET = function companyListGET (req, res, next) {
  Default.companyListGET(req.swagger.params, res, next);
};

module.exports.customerGET = function customerGET (req, res, next) {
  Default.customerGET(req.swagger.params, res, next);
};

module.exports.mContractGET = function mContractGET (req, res, next) {
  Default.mContractGET(req.swagger.params, res, next);
};

module.exports.mContractListGET = function mContractListGET (req, res, next) {
  Default.mContractListGET(req.swagger.params, res, next);
};

module.exports.productGET = function productGET (req, res, next) {
  Default.productGET(req.swagger.params, res, next);
};

module.exports.productListGET = function productListGET (req, res, next) {
  Default.productListGET(req.swagger.params, res, next);
};
