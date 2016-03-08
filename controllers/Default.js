'use strict';

var url = require('url');

// var Default = require('./DefaultService');
var Default = require('./MocService');

module.exports.companiesGET = function companiesGET (req, res, next) {
  Default.companiesGET(req.swagger.params, res, next);
};

module.exports.companiesCompanyIdGET = function companiesCompanyIdGET (req, res, next) {
  Default.companiesCompanyIdGET(req.swagger.params, res, next);
};

module.exports.contractsGET = function contractsGET (req, res, next) {
  Default.contractsGET(req.swagger.params, res, next);
};

module.exports.contractsContractIdGET = function contractsContractIdGET (req, res, next) {
  Default.contractsContractIdGET(req.swagger.params, res, next);
};

module.exports.customersGET = function customersGET (req, res, next) {
  Default.customersGET(req.swagger.params, res, next);
};

module.exports.customersCustomerIdGET = function customersCustomerIdGET (req, res, next) {
  Default.customersCustomerIdGET(req.swagger.params, res, next);
};

module.exports.productsGET = function productsGET (req, res, next) {
  Default.productsGET(req.swagger.params, res, next);
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next) {
  Default.productsProductIdGET(req.swagger.params, res, next);
};

module.exports.salesesGET = function salesesGET (req, res, next) {
  Default.salesesGET(req.swagger.params, res, next);
};

module.exports.salesesUserIdGET = function salesesUserIdGET (req, res, next) {
  Default.salesesUserIdGET(req.swagger.params, res, next);
};
