'use strict';

exports.companyGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * id (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "zip" : "aeiou",
  "addresss3" : "aeiou",
  "address2" : "aeiou",
  "phone" : "aeiou",
  "address1" : "aeiou",
  "pref" : "aeiou",
  "name" : "aeiou",
  "active" : true,
  "id" : "aeiou",
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

exports.companyListEmailGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 123,
  "Companies" : [ {
    "zip" : "aeiou",
    "addresss3" : "aeiou",
    "address2" : "aeiou",
    "phone" : "aeiou",
    "address1" : "aeiou",
    "pref" : "aeiou",
    "name" : "aeiou",
    "active" : true,
    "id" : "aeiou",
    "fax" : "aeiou"
  } ],
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

exports.companyCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "zip" : "aeiou",
  "addresss3" : "aeiou",
  "address2" : "aeiou",
  "phone" : "aeiou",
  "address1" : "aeiou",
  "pref" : "aeiou",
  "name" : "aeiou",
  "active" : true,
  "id" : "aeiou",
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

exports.contractListGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * serial (String)
  * customerContractNo (String)
  * endUser (String)
  * startDate (String)
  * endDate (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "index" : "",
  "numOf" : 123456789,
  "id" : "aeiou",
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
    "customerContractno" : "aeiou",
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

exports.contractListCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "index" : "",
  "numOf" : 123456789,
  "id" : "aeiou",
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
    "customerContractno" : "aeiou",
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

exports.contractContractIdGET = function(args, res, next) {
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
  "customerContractno" : "aeiou",
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

exports.customerGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstname" : "aeiou",
  "companyId" : "aeiou",
  "phone" : "aeiou",
  "mobile" : "aeiou",
  "active" : true,
  "id" : "aeiou",
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

exports.customerCustomerIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * customerId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstname" : "aeiou",
  "companyId" : "aeiou",
  "phone" : "aeiou",
  "mobile" : "aeiou",
  "active" : true,
  "id" : "aeiou",
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

exports.productGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * customerId (String)
  * email (String)
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

exports.productListGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  * serial (String)
  * startDate (String)
  * endDate (String)
  * productId (String)
  * productName (String)
  * index (Integer)
  * max (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
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
  "index" : 123456789,
  "numOf" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.productListCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
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
  "index" : 123456789,
  "numOf" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.productProductIdGET = function(args, res, next) {
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

exports.salesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "Sales" : {
    "firstname" : "aeiou",
    "salesId" : "aeiou",
    "email" : "aeiou",
    "lastname" : "aeiou"
  },
  "id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.salesCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "Sales" : {
    "firstname" : "aeiou",
    "salesId" : "aeiou",
    "email" : "aeiou",
    "lastname" : "aeiou"
  },
  "id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

