'use strict';

var customer_data = {
  "id" : "CUS9101-0001",
  "firstname" : "太郎",
  "lastname" : "山田",
  "email" : "taro.yamada@marumaru.com",
  "phone" : "03-9101-0001",
  "mobile" : "080-9101-0001",
  "fax" : "03-9101-0002",
  "companyid" : "CPY9101",
  "active" : true
};

var company_data901 = {
  "id" : "CPY9101",
  "name" : "株式会社９１０１",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "addresss3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};
var company_data902 = {
  "id" : "CPY9102",
  "name" : "株式会社９１０２",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "addresss3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};
var company_data903 = {
  "id" : "CPY9103",
  "name" : "株式会社９１０３",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "addresss3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};

var sales_data = {
    "salesid" : "9000101",
    "email" : "taro.yamada@example.com",
    "firstname" : "太郎",
    "lastname" : "山田"
};

var product_data = {
  "productid" : "製品ID",
  "productName" : "製品テキスト",
  "modelNo" : "メーカー型番",
  "serial" : "シリアル番号",
  "contract" : "個別契約番号",
  "servicemenu" : "メニュー名",
  "typeofservice" : "サービス種別",
  "servicetype" : "サービス種別",
  "sla" : "SLA",
  "servicemodelno" : "サービス型番",
  "servicetypecode" : "サービス種別コード",
  "moniteringtype" : "モニタリング種別",
  "accountmgmtno" : "アカウント管理番号",
  "dedicatedmaintenanceno" : "専用保守部材管理番号",
  "individualcontract" : "製品／個別条件書",
  "address" : "設置場所：東京都",
  "shippingno" : "出荷番号",
  "shippingdate" : "出荷日時",
  "startDate" : "2015.4.1",
  "endDate" : "保守終了日",
  "eos" : true,
  "eol" : true,
  "qa" : true,
  "productlistprice" : "製品定価"
};

var contract_data = {
    "note" : "契約締結に関する特記事項およびメモ：",
    "chargeofenginner" : "9001101",
    "eol" : false,
    "subject" : "サブジェクト：",
    "amountof" : 10000000,
    "type" : "契約種別：製品保守",
    "startdate" : "2015.4.1",
    "emergencycaller" : "緊急連絡先：",
    "typecode" : 1001,
    "companyid" : "会社ID",
    "chargeofsales" : "9000101",
    "automaticrenewal" : true,
    "enteringdate" : "2015.4.1",
    "mastercontract" : "BC9101-00000-000001",
    "enduser" : "エンドユーザー情報：",
    "contract" : "DISC9101-0000-00001",
    "customercontractno" : "顧客契約番号：",
    "orderby" : "発注元：",
    "responsibleparty" : "顧客担当：",
    "caller" : "コール元会社名",
    "enddate" : "2017.3.31",
    "fixeddate" : "2015.3.1",
    "contractId" : "CONT00009101",
    "typeofconstraction" : "構築区分：",
    "status" : "契約中"
};

exports.companyGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * id (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = company_data901;
  
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
  // console.log(args);
  var examples = {};
  var email = args["email"]["value"];
  if(email.match(/taro/i)) {
    examples['application/json'] = {
      "total" : 1,
      "email" : "requester@example.com",
      "Companies" : [company_data901]
    };
  } else if(email.match(/jiro/i)) {
    examples['application/json'] = {
      "total" : 1,
      "email" : "requester@example.com",
      "Companies" : [company_data902]
    };
  } else{
    examples['application/json'] = {
      "total" : 3,
      "email" : "requester@example.com",
      "Companies" : [company_data901, company_data902, company_data903]
    };
    
  }

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
  examples['application/json'] = company_data901;
    
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
  "total" : 1,
  "index" : 1,
  "numOf" : 1,
  "id" : "CPY9101",
  "Contracts" : [contract_data]
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
  "total" : 1,
  "index" : 1,
  "numOf" : 1,
  "id" : "CPY9101",
  "Contracts" : [contract_data]
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
  examples['application/json'] = contract_data;
  
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
  examples['application/json'] = customer_data;
  
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
  examples['application/json'] = customer_data;
  
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
  examples['application/json'] = product_data;
  
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
  "index" : 1,
  "numOf" : 1,
  "total" : 1,
  "Products" : [product_data]
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
  "index" : 1,
  "numOf" : 1,
  "total" : 1,
  "Products" : [product_data]
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
  examples['application/json'] = product_data;
  
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
  "id" : "CPY9101",
  "total" : 1,
  "Sales" : sales_data
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
  "id" : "CPY9101",
  "total" : 1,
  "Sales" : sales_data
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

