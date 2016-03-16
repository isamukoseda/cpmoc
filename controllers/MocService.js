'use strict';

var customer_data = {
  "customerId" : "CPY9101",
  "firstname" : "太郎",
  "lastname" : "山田",
  "companyId" : "CUS9101-0001",
  "email" : "taro.yamada@marumaru.com",
  "phone" : "03-9101-0001",
  "mobile" : "080-9101-0001",
  "fax" : "03-9101-0002",
  "active" : true
};

var customers_data = {
  "totalEntries" : 1,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 1,
  "Customers" : [ customer_data]
};
    

var company_data901 = {
  "companyId" : "CPY9101",
  "companyName" : "株式会社９１０１",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "address3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};
var company_data902 = {
  "companyId" : "CPY9102",
  "companyName" : "株式会社９１０２",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "address3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};
var company_data903 = {
  "companyId" : "CPY9103",
  "companyName" : "株式会社９１０３",
  "zip" : "111-1111",
  "pref" : "東京都",
  "address1" : "千代田区",
  "address2" : "丸の内",
  "address3" : "丸々ビルディング",
  "phone" : "03-1111-1111",
  "fax" : "03-1111-1112",
  "active" : true
};

var companies_data1 = {
  "totalEntries" : 1,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 20,
  "email" : "taro@example.com",
  "Companies" : [company_data901]
};

var companies_data2 = {
  "totalEntries" : 2,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 20,
  "email" : "jiro@example.com",
  "Companies" : [company_data902, company_data903]
};

var companies_data3 = {
  "totalEntries" : 3,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 20,
  "email" : "saburo@example.com",
  "Companies" : [company_data901, company_data902, company_data903]
};


var sales_data = {
    "salesId" : "9000101",
    "email" : "taro.yamada@example.com",
    "firstname" : "太郎",
    "lastname" : "山田"
};

var saleses_data = {
  "totalEntries" : 1,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 10,
  "Saleses" : [sales_data]
};


var product_data = {
  "productId" : "製品ID",
  "productName" : "製品テキスト",
  "modelNo" : "メーカー型番",
  "serial" : "シリアル番号",
  "contract" : "個別契約番号",
  "individualContract" : "製品／個別条件書",
  "dedicatedMaintenanceNo" : "専用保守部材管理番号",
  "typeOfService" : "サービス種別",
  "serviceTypeCode" : "サービス種別コード",
  "serviceType" : "サービス種別",
  "serviceMenu" : "メニュー名",
  "serviceModelNo" : "サービス型番",
  "sla" : "SLA",
  "moniteringType" : "モニタリング種別",
  "accountMgmtNo" : "アカウント管理番号",
  "address" : "設置場所：東京都",
  "shippingNo" : "出荷番号",
  "shippingDate" : "出荷日時",
  "startDate" : "2015/04/01",
  "endDate" : "保守終了日",
  "eos" : true,
  "eol" : true,
  "qa" : true,
  "productListPrice" : "製品定価"
};

var products_data = {
  "totalEntries" : 1,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 20,
  "Products" : [product_data ]
};


var contract_data = {
    "note" : "契約締結に関する特記事項およびメモ：",
    "chargeOfEnginner" : "9001101",
    "eol" : false,
    "subject" : "サブジェクト：",
    "amountOf" : 10000000,
    "type" : "契約種別：製品保守",
    "startDate" : "2015/04/01",
    "emergencyCaller" : "緊急連絡先：",
    "typeCode" : 1001,
    "companyId" : "会社ID",
    "chargeOfSales" : "9000101",
    "automaticRenewal" : true,
    "enteringDate" : "2015/04/01",
    "masterContract" : "BC9101-00000-000001",
    "endUser" : "エンドユーザー情報：",
    "contract" : "DISC9101-0000-00001",
    "customerContractNo" : "顧客契約番号：",
    "orderBy" : "発注元：",
    "responsibleParty" : "顧客担当：",
    "caller" : "コール元会社名",
    "endDate" : "2017/03/31",
    "fixedDate" : "2015/03/01",
    "contractId" : "CONT00009101",
    "typeOfConstraction" : "構築区分：",
    "status" : "契約中"
};

var contracts_data = {
  "companyId" : "CPY9101",
  "totalEntries" : 1,
  "rowNumber" : 1,
  "currentPage" : 1,
  "pageLimit" : 20,
  "Contracts" : [contract_data]
};

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
  // console.log(args);
  
  var examples = {};
    var email = args["email"]["value"];
    if(email != null) {
        if(email.match(/taro/i)) {
            examples['application/json'] = companies_data1;
        } else if(email.match(/jiro/i)) {
            examples['application/json'] = companies_data2;
        } else {
            examples['application/json'] = companies_data3;
        }
    } else {
        examples['application/json'] = companies_data3;
    }
  
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
  examples['application/json'] = company_data901;
  
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
  examples['application/json'] = contracts_data;
  
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
  examples['application/json'] = contract_data;
  
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
  examples['application/json'] = customers_data;
  
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
  examples['application/json'] = customer_data;
  
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
  examples['application/json'] = products_data;
  
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
  examples['application/json'] = product_data;
  
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
  examples['application/json'] = saleses_data;
  
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
  examples['application/json'] = sales_data;
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

