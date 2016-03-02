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
  "total" : 1,
  "Sales" : [ {
    "firstname" : "山田",
    "salesid" : "9000101",
    "email" : "taro.yamada@netone.com",
    "lastname" : "太郎"
  } ],
  "id" : "CPY9101"
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
  "zip" : "111-1111",
  "addresss3" : "丸丸ビルディング",
  "address2" : "丸の内",
  "phone" : "03-1111-1111",
  "address1" : "千代田区",
  "pref" : "東京都",
  "name" : "株式会社丸丸丸丸",
  "active" : true,
  "id" : "CPY9101",
  "fax" : "03-1111-1112"
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
  "total" : 1,
  "Companies" : [ {
    "name" : "株式会社丸丸丸丸",
    "id" : "CPY9101"
  } ],
  "email" : "requester@netone.com"
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
  "companyid" : "CPY9101",
  "phone" : "03-9101-0001",
  "mobile" : "080-9101-0001",
  "active" : true,
  "id" : "CUS9101-0001",
  "fax" : "03-9101-0002",
  "email" : "taro.yamada@marumaru.com",
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
  "note" : "契約締結に関する特記事項およびメモ：",
  "chargeofenginner" : "9001101",
  "eol" : false,
  "contract" : "DISC9101-0000-00001",
  "customercontractno" : "顧客契約番号",
  "amountof" : 10000000,
  "orderby" : "発注元：",
  "responsibleparty" : "顧客担当：",
  "type" : "契約種別：製品保守",
  "startdate" : "aeiou",
  "emergencycaller" : "aeiou",
  "typecode" : 1001,
  "caller" : "コール元会社名",
  "enddate" : "2017.3.31",
  "fixeddate" : "2015.4.1",
  "chargeofsales" : "9000101",
  "contractid" : "CONT00009101",
  "typeofconstraction" : "構築区分：",
  "id" : "CPY9101",
  "automaticrenewal" : true,
  "enteringdate" : "2015.4.1",
  "mastercontract" : "BC9101-00000-000001",
  "status" : "契約中"
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
  "total" : 1,
  "index" : 0,
  "numof" : 1,
  "id" : "CPY9101",
  "Contracts" : [ {
    "chargeofenginner" : "9001101",
    "enddate" : "2017.3.31",
    "enduser" : "株式会社丸丸丸丸",
    "subject" : "契約名称：機器保守《》",
    "contract" : "DISC9101-0000-00001",
    "chargeofsales" : "9000101",
    "customercontractno" : "顧客契約番号",
    "startdate" : "2015.4.1"
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
  "eol" : false,
  "productid" : "製品ID",
  "dedicatedmaintenanceno" : "専用保守部材管理番号",
  "contract" : "個別契約番号",
  "eos" : false,
  "sla" : "SLA",
  "modelno" : "メーカー型番",
  "servicetypecode" : "サービス種別コード",
  "moniteringtype" : "モニタリング種別",
  "startdate" : "保守開始日",
  "servicemenu" : "メニュー名",
  "qa" : true,
  "servicetype" : "サービス種別",
  "enddate" : "保守終了日",
  "accountmgmtno" : "アカウント管理番号",
  "shippingno" : "出荷番号",
  "serial" : "シリアル番号",
  "productname" : "製品テキスト",
  "shippingdate" : "出荷日時",
  "individualcontract" : "製品／個別条件書",
  "servicemodelno" : "サービス型番",
  "productlistprice" : "製品定価"
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
  "total" : 1,
  "index" : 0,
  "numof" : 1,
  "Product" : [ {
    "typeofservice" : "サービス種別",
    "address" : "住所",
    "enddate" : "契約終了日",
    "eol" : false,
    "productid" : "製品ID",
    "serial" : "シリアル番号",
    "eos" : false,
    "productname" : "製品テキスト",
    "sla" : "SLA",
    "startdate" : "契約開始日"
  } ],
  "id" : "CPY9101"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

