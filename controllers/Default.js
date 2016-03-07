'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.companyGET = function companyGET (req, res, next) {
  Default.companyGET(req.swagger.params, res, next);
};

module.exports.companyListEmailGET = function companyListEmailGET (req, res, next) {
  Default.companyListEmailGET(req.swagger.params, res, next);
};

module.exports.companyCompanyidGET = function companyCompanyidGET (req, res, next) {
  Default.companyCompanyidGET(req.swagger.params, res, next);
};

module.exports.contractListGET = function contractListGET (req, res, next) {
  Default.contractListGET(req.swagger.params, res, next);
};

module.exports.contractListCompanyIdGET = function contractListCompanyIdGET (req, res, next) {
  Default.contractListCompanyIdGET(req.swagger.params, res, next);
};

module.exports.contractContractIdGET = function contractContractIdGET (req, res, next) {
  Default.contractContractIdGET(req.swagger.params, res, next);
};

module.exports.customerGET = function customerGET (req, res, next) {
  Default.customerGET(req.swagger.params, res, next);
};

module.exports.customerCustomeridGET = function customerCustomeridGET (req, res, next) {
  Default.customerCustomeridGET(req.swagger.params, res, next);
};

module.exports.productGET = function productGET (req, res, next) {
  Default.productGET(req.swagger.params, res, next);
};

module.exports.productListGET = function productListGET (req, res, next) {
  Default.productListGET(req.swagger.params, res, next);
};

module.exports.productListCompanyIdGET = function productListCompanyIdGET (req, res, next) {
  Default.productListCompanyIdGET(req.swagger.params, res, next);
};

module.exports.productProductIdGET = function productProductIdGET (req, res, next) {
  Default.productProductIdGET(req.swagger.params, res, next);
};

module.exports.salesGET = function salesGET (req, res, next) {
  Default.salesGET(req.swagger.params, res, next);
};

module.exports.salesCompanyidGET = function salesCompanyidGET (req, res, next) {
  Default.salesCompanyidGET(req.swagger.params, res, next);
};
