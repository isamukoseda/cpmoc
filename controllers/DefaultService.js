'use strict';

exports.companiesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyName (String)
  * email (String)
  * rowNumber (Long)
  * currentPage (Long)
  * pageLimit (Long)
  * searchLimit (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "pageLimit" : 123456789,
  "Companies" : [ {
    "zip" : "aeiou",
    "companyId" : "aeiou",
    "address3" : "aeiou",
    "address2" : "aeiou",
    "phone" : "aeiou",
    "address1" : "aeiou",
    "companyName" : "aeiou",
    "pref" : "aeiou",
    "active" : true,
    "fax" : "aeiou"
  } ],
  "totalEntries" : 123456789,
  "rowNumber" : 123456789,
  "currentPage" : 123456789,
  "email" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.companiesCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "zip" : "aeiou",
  "companyId" : "aeiou",
  "address3" : "aeiou",
  "address2" : "aeiou",
  "phone" : "aeiou",
  "address1" : "aeiou",
  "companyName" : "aeiou",
  "pref" : "aeiou",
  "active" : true,
  "fax" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contractsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  * serial (String)
  * customerContractNo (String)
  * endUser (String)
  * startDate (String)
  * endDate (String)
  * rowNumber (Long)
  * currentPage (Long)
  * pageLimit (Long)
  * searchLimit (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "companyId" : "aeiou",
  "pageLimit" : 123456789,
  "totalEntries" : "",
  "rowNumber" : "",
  "currentPage" : 123456789,
  "Contracts" : [ {
    "note" : "aeiou",
    "eol" : true,
    "fixedDate" : "aeiou",
    "endDate" : "aeiou",
    "subject" : "aeiou",
    "responsibleParty" : "aeiou",
    "orderBy" : "aeiou",
    "emergencyCaller" : "aeiou",
    "type" : "aeiou",
    "chargeOfSales" : "aeiou",
    "enteringDate" : "aeiou",
    "masterContract" : "aeiou",
    "customerContractNo" : "aeiou",
    "contract" : "aeiou",
    "automaticRenewal" : true,
    "amountOf" : "",
    "typeOfConstraction" : "aeiou",
    "chargeOfEnginner" : "aeiou",
    "typeCode" : "",
    "companyId" : "aeiou",
    "caller" : "aeiou",
    "endUser" : "aeiou",
    "contractId" : "aeiou",
    "startDate" : "aeiou",
    "status" : "aeiou"
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contractsContractIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contractId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "note" : "aeiou",
  "eol" : true,
  "fixedDate" : "aeiou",
  "endDate" : "aeiou",
  "subject" : "aeiou",
  "responsibleParty" : "aeiou",
  "orderBy" : "aeiou",
  "emergencyCaller" : "aeiou",
  "type" : "aeiou",
  "chargeOfSales" : "aeiou",
  "enteringDate" : "aeiou",
  "masterContract" : "aeiou",
  "customerContractNo" : "aeiou",
  "contract" : "aeiou",
  "automaticRenewal" : true,
  "amountOf" : "",
  "typeOfConstraction" : "aeiou",
  "chargeOfEnginner" : "aeiou",
  "typeCode" : "",
  "companyId" : "aeiou",
  "caller" : "aeiou",
  "endUser" : "aeiou",
  "contractId" : "aeiou",
  "startDate" : "aeiou",
  "status" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.customersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  * rowNumber (Long)
  * currentPage (Long)
  * pageLimit (Long)
  * searchLimit (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "pageLimit" : 123456789,
  "Customers" : [ {
    "firstname" : "aeiou",
    "companyId" : "aeiou",
    "phone" : "aeiou",
    "customerId" : "aeiou",
    "mobile" : "aeiou",
    "active" : true,
    "fax" : "aeiou",
    "email" : "aeiou",
    "lastname" : "aeiou"
  } ],
  "totalEntries" : 123456789,
  "rowNumber" : 123456789,
  "currentPage" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.customersCustomerIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * customerId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstname" : "aeiou",
  "companyId" : "aeiou",
  "phone" : "aeiou",
  "customerId" : "aeiou",
  "mobile" : "aeiou",
  "active" : true,
  "fax" : "aeiou",
  "email" : "aeiou",
  "lastname" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.productsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  * email (String)
  * customerId (String)
  * serial (String)
  * startDate (String)
  * endDate (String)
  * productId (String)
  * productName (String)
  * rowNumber (Long)
  * currentPage (Long)
  * pageLimit (Long)
  * searchLimit (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "pageLimit" : 123456789,
  "Products" : [ {
    "serviceType" : "aeiou",
    "eol" : true,
    "address" : "aeiou",
    "productId" : "aeiou",
    "dedicatedMaintenanceNo" : "aeiou",
    "shippingDate" : "aeiou",
    "endDate" : "aeiou",
    "contract" : "aeiou",
    "eos" : true,
    "sla" : "aeiou",
    "modelNo" : "aeiou",
    "productListPrice" : "aeiou",
    "productName" : "aeiou",
    "accountMgmtNo" : "aeiou",
    "qa" : true,
    "typeOfService" : "aeiou",
    "serviceModelNo" : "aeiou",
    "shippingNo" : "aeiou",
    "serial" : "aeiou",
    "individualContract" : "aeiou",
    "moniteringType" : "aeiou",
    "startDate" : "aeiou",
    "serviceMenu" : "aeiou",
    "serviceTypeCode" : "aeiou"
  } ],
  "totalEntries" : 123456789,
  "rowNumber" : 123456789,
  "currentPage" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.productsProductIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * productId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "serviceType" : "aeiou",
  "eol" : true,
  "address" : "aeiou",
  "productId" : "aeiou",
  "dedicatedMaintenanceNo" : "aeiou",
  "shippingDate" : "aeiou",
  "endDate" : "aeiou",
  "contract" : "aeiou",
  "eos" : true,
  "sla" : "aeiou",
  "modelNo" : "aeiou",
  "productListPrice" : "aeiou",
  "productName" : "aeiou",
  "accountMgmtNo" : "aeiou",
  "qa" : true,
  "typeOfService" : "aeiou",
  "serviceModelNo" : "aeiou",
  "shippingNo" : "aeiou",
  "serial" : "aeiou",
  "individualContract" : "aeiou",
  "moniteringType" : "aeiou",
  "startDate" : "aeiou",
  "serviceMenu" : "aeiou",
  "serviceTypeCode" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.salesesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  * rowNumber (Long)
  * currentPage (Long)
  * pageLimit (Long)
  * searchLimit (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "pageLimit" : 123456789,
  "Saleses" : [ {
    "firstname" : "aeiou",
    "salesId" : "aeiou",
    "email" : "aeiou",
    "lastname" : "aeiou"
  } ],
  "totalEntries" : 123456789,
  "rowNumber" : 123456789,
  "currentPage" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.salesesUserIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstname" : "aeiou",
  "salesId" : "aeiou",
  "email" : "aeiou",
  "lastname" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

