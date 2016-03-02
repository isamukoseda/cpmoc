'use strict';

exports.chargeOfSalesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * customerid (String)
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "Sales" : [ {
    "firstname" : "aeiou",
    "salesid" : "aeiou",
    "email" : "aeiou",
    "lastname" : "aeiou"
  } ],
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

exports.companyGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * customerid (String)
  * email (String)
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

exports.companyListGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 123,
  "Companies" : [ {
    "name" : "aeiou",
    "id" : "aeiou"
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

exports.customerGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "firstname" : "aeiou",
  "companyid" : "aeiou",
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

exports.mContractGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * contract (String)
  * customerid (String)
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "note" : "aeiou",
  "chargeofenginner" : "aeiou",
  "eol" : true,
  "contract" : "aeiou",
  "customercontractno" : "aeiou",
  "amountof" : "",
  "orderby" : "aeiou",
  "responsibleparty" : "aeiou",
  "type" : "aeiou",
  "startdate" : "aeiou",
  "emergencycaller" : "aeiou",
  "typecode" : "",
  "caller" : "aeiou",
  "enddate" : "aeiou",
  "fixeddate" : "aeiou",
  "chargeofsales" : "aeiou",
  "contractid" : "aeiou",
  "typeofconstraction" : "aeiou",
  "id" : "aeiou",
  "automaticrenewal" : true,
  "enteringdate" : "aeiou",
  "mastercontract" : "aeiou",
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

exports.mContractListGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * customerid (String)
  * email (String)
  * contract (String)
  * serial (String)
  * contractor (String)
  * customerContractNo (String)
  * enduser (String)
  * startdate (String)
  * enddate (String)
  * index (Integer)
  * max (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "index" : "",
  "numof" : "",
  "id" : "aeiou",
  "Contracts" : [ {
    "chargeofenginner" : "aeiou",
    "enddate" : "aeiou",
    "enduser" : "aeiou",
    "subject" : "aeiou",
    "contract" : "aeiou",
    "chargeofsales" : "aeiou",
    "customercontractno" : "aeiou",
    "startdate" : "aeiou"
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

exports.productGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * productid (String)
  * customerid (String)
  * email (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "eol" : true,
  "productid" : "aeiou",
  "dedicatedmaintenanceno" : "aeiou",
  "contract" : "aeiou",
  "eos" : true,
  "sla" : "aeiou",
  "modelno" : "aeiou",
  "servicetypecode" : "aeiou",
  "moniteringtype" : "aeiou",
  "startdate" : "aeiou",
  "servicemenu" : "aeiou",
  "qa" : true,
  "servicetype" : "aeiou",
  "enddate" : "aeiou",
  "accountmgmtno" : "aeiou",
  "shippingno" : "aeiou",
  "serial" : "aeiou",
  "productname" : "aeiou",
  "shippingdate" : "aeiou",
  "individualcontract" : "aeiou",
  "servicemodelno" : "aeiou",
  "productlistprice" : "aeiou"
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
  * id (String)
  * customerid (String)
  * email (String)
  * contract (String)
  * serial (String)
  * startdate (String)
  * enddate (String)
  * productid (String)
  * productname (String)
  * index (Integer)
  * max (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : "",
  "index" : "",
  "numof" : "",
  "Product" : [ {
    "typeofservice" : "aeiou",
    "address" : "aeiou",
    "enddate" : "aeiou",
    "eol" : true,
    "productid" : "aeiou",
    "serial" : "aeiou",
    "eos" : true,
    "productname" : "aeiou",
    "sla" : "aeiou",
    "startdate" : "aeiou"
  } ],
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

