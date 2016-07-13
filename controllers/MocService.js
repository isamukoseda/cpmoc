'use strict';

var company_data1001 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "name1" : "ネットワンシステムズ株式会社"
  }
};

var company_data2001 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0002-0001-00000-0101010"
    },
    "name1" : "ユニグラブ・ジャパン株式会社"
  }
};

var company_data5585 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0005-0585-00000-0101010"
    },
    "name1" : "株式会社エクシード"
  }
};

/*
  examples['application/json'] = {
  "d" : {
    "__metadata" : {
      "etag" : "aeiou",
      "id" : "aeiou",
      "type" : "aeiou",
      "url" : "aeiou"
    },
    "name1" : "aeiou"
  }
};
 */

/*
 *
 */
exports.companiesCompanyIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * companyId (String)
  * requester (String)
  **/
  console.log("[GET >> Companies/{companyId} --- function ---");
  console.log(args);

  var examples = {};

  try{
    var companyid = args["companyId"]["value"];
    if(companyid != null) {
      if(companyid == "1001" || companyid == "CPY1001") {
        examples['application/json'] = company_data1001;
      } else if(companyid == "2001" || companyid == "CPY2001") {
        examples['application/json'] = company_data2001;
      } else if(companyid == "5585" || companyid == "105585" || companyid == "CPY9101") {
        examples['application/json'] = company_data5585;
      }
    }
  } catch(err) {
  }

  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.companiesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * requester (String)
  * companyName (String)
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


/*
 *
 *
 *
 */

var contract_data0005121286 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "保守",
    "Zurl" : "",
    "ZcontNo" : "D509008",
    "ZcntrctNo" : "0005121286",
    "Zguid" : "0050568E-2C1B-1ED5-AAD9-5533223C17E1",
    "Zconid" : "5121286",
    "ZibIbase" : "000000000000116589",
    "Ztext" : "1月満了保守更新",
    "ZdeliDest" : "",
    "ZcustReptive" : "鈴木",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "0-030-15-151203",
    "Zstatus" : "30 リリース",
    "ZofferedPrice" : "395,286 JPY",
    "ZupdateFlg" : "なし",
    "ZcontStartDate" : "2016/02/01",
    "ZcontEndDate" : "2017/01/31",
    "ZexecuteDate" : "2015/12/24",
    "ZcontFixDate" : "2015/12/24",
    "Zeolmainte" : "無",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005121287 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "保守",
    "Zurl" : "",
    "ZcontNo" : "FC1100282",
    "ZcntrctNo" : "5121287",
    "Zguid" : "0050568E-2C1B-1ED5-AAD9-55A58BF357E1",
    "Zconid" : "0005121287",
    "ZibIbase" : "000000000000115797",
    "Ztext" : "Cisco ASA5500シリーズ保守費用",
    "ZdeliDest" : "ーーーーー　株式会社",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "32 契約期間内",
    "ZofferedPrice" : "111,644 JPY",
    "ZupdateFlg" : "なし",
    "ZcontStartDate" : "2015/12/01",
    "ZcontEndDate" : "2016/10/31",
    "ZexecuteDate" : "2015/11/19",
    "ZcontFixDate" : "2015/11/19",
    "Zeolmainte" : "無",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005121289 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "保守",
    "Zurl" : "",
    "ZcontNo" : "D509008",
    "ZcntrctNo" : "5121289",
    "Zguid" : "0050568E-2C1B-1ED5-AAD9-5664E105F7E1",
    "Zconid" : "0005121289",
    "ZibIbase" : "000000000000099239",
    "Ztext" : "12月満了保守更新",
    "ZdeliDest" : "ーーーーー　株式会社",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "0-030-15-151202",
    "Zstatus" : "30 リリース",
    "ZofferedPrice" : "62,910 JPY",
    "ZupdateFlg" : "なし",
    "ZcontStartDate" : "2016/01/01",
    "ZcontEndDate" : "2017/12/31",
    "ZexecuteDate" : "2015/12/15",
    "ZcontFixDate" : "2015/12/15",
    "Zeolmainte" : "無",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005114215 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "保守",
    "Zurl" : "",
    "ZcontNo" : "D509008",
    "ZcntrctNo" : "5114215",
    "Zguid" : "0050568E-2C1B-1EE5-A795-A8FB14CBAD3A",
    "Zconid" : "0005114215",
    "ZibIbase" : "000000000000085565",
    "Ztext" : "2015/11月保守更新_鈴木様_SSG5",
    "ZdeliDest" : "ーーーーー　株式会社",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "0-030-15-151201",
    "Zstatus" : "30 リリース",
    "ZofferedPrice" : "21,000 JPY",
    "ZupdateFlg" : "なし",
    "ZcontStartDate" : "2015/12/01",
    "ZcontEndDate" : "2016/11/30",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "2015/12/18",
    "Zeolmainte" : "無",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005072449 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "",
    "Zurl" : "",
    "ZcontNo" : "",
    "ZcntrctNo" : "5072449",
    "Zguid" : "0050568E-0EFE-1EE4-B3DC-A54E456A484D",
    "Zconid" : "0005072449",
    "ZibIbase" : "000000000000000000",
    "Ztext" : "Applogicﾗｲｾﾝｽ更新(4-6月)",
    "ZdeliDest" : "ーーーーー　株式会社",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "40 完了",
    "ZofferedPrice" : "2,982,000 JPY",
    "ZupdateFlg" : "",
    "ZcontStartDate" : "2015/04/01",
    "ZcontEndDate" : "2015/06/30",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "",
    "Zeolmainte" : "無",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005100576 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "保守",
    "Zurl" : "",
    "ZcontNo" : "5191016",
    "ZcntrctNo" : "SC15013874-00",
    "Zguid" : "0050568E-2C1B-1ED5-9782-10CC2091CEAF",
    "Zconid" : "0005100576",
    "ZibIbase" : "000000000000114037",
    "Ztext" : "BIG-IP GTM1500リプレイス作業（保守費）_社内用",
    "ZdeliDest" : "株式会社ーーーーー",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "30 リリース",
    "ZofferedPrice" : "1,469,376 JPY",
    "ZupdateFlg" : "なし",
    "ZcontStartDate" : "2015/10/01",
    "ZcontEndDate" : "2017/03/31",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "2015/10/28",
    "Zeolmainte" : "",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005074306 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "",
    "Zurl" : "",
    "ZcontNo" : "",
    "ZcntrctNo" : "5074306",
    "Zguid" : "0050568E-0829-1EE4-B58A-6411C181EEC7",
    "Zconid" : "0005074306",
    "ZibIbase" : "000000000000000000",
    "Ztext" : "2015年度_年間保守契約（IT部門以外）",
    "ZdeliDest" : "株式会社ーーーーー",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "34 期限切れ",
    "ZofferedPrice" : "1,212,324 JPY",
    "ZupdateFlg" : "",
    "ZcontStartDate" : "2015/04/01",
    "ZcontEndDate" : "2016/03/31",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "",
    "Zeolmainte" : "",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};

var contract_data0005074307 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "",
    "Zurl" : "",
    "ZcontNo" : "",
    "ZcntrctNo" : "5074307",
    "Zguid" : "0050568E-0829-1EE4-B58A-6411C181EEC7",
    "Zconid" : "0005074307",
    "ZibIbase" : "000000000000000000",
    "Ztext" : "2015年度_年間保守契約（社内用）",
    "ZdeliDest" : "株式会社ーーーーー",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "34 期限切れ",
    "ZofferedPrice" : "25,301,676 JPY",
    "ZupdateFlg" : "",
    "ZcontStartDate" : "2015/04/01",
    "ZcontEndDate" : "2016/03/31",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "",
    "Zeolmainte" : "",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};


var contract_data0005100679 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZcontType" : "",
    "Zurl" : "",
    "ZcontNo" : "",
    "ZcntrctNo" : "5100679",
    "Zguid" : "",
    "Zconid" : "0005100679",
    "ZibIbase" : "",
    "Ztext" : "WS-C3560CG-8TC-S x2（5年保守）",
    "ZdeliDest" : "株式会社ーーーーー",
    "ZcustReptive" : "",
    "ZcallCompName" : "",
    "ZnhCallerInfo" : "",
    "ZsalesReptive" : "山田　太郎",
    "ZtechReptive" : "",
    "ZcustContNo" : "",
    "Zstatus" : "10",
    "ZofferedPrice" : "68,324 JPY",
    "ZupdateFlg" : "",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndDate" : "2020/01/31",
    "ZexecuteDate" : "",
    "ZcontFixDate" : "",
    "Zeolmainte" : "",
    "ZconstDiv" : "",
    "ZsalesOrg" : "1001"
  }
};


/*
 *
  examples['application/json'] = contract_data0005121286;	// Xseed
  examples['application/json'] = contract_data0005121287;
  examples['application/json'] = contract_data0005121289;	// Xseed
  examples['application/json'] = contract_data0005114215;	// Xseed
  examples['application/json'] = contract_data0005072449;	// Xseed
  examples['application/json'] = contract_data0005100576;	// Shin
  examples['application/json'] = contract_data0005074306;	// Shin
  examples['application/json'] = contract_data0005074307;	// Shin
var contract_data0005100679 = {	// Xseed (機器情報あり）
 */
exports.contractsContractIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contractId (String)
  **/
  console.log("[GET >> Contracts/{contractId} --- function ---");
  console.log(args);

  var examples = {};

  try {
    var contractid = args["contractId"]["value"];

    if(contractid == "5121286" || contractid == "0005121286") {
      examples['application/json'] = contract_data0005121286;
    } else if(contractid == "5121287" || contractid == "0005121287") {
      examples['application/json'] = contract_data0005121287;
    } else if(contractid == "5121289" || contractid == "0005121289") {
      examples['application/json'] = contract_data0005121289;
    } else if(contractid == "5114215" || contractid == "0005114215") {
      examples['application/json'] = contract_data0005114215;
    } else if(contractid == "5072449" || contractid == "0005072449") {
      examples['application/json'] = contract_data0005072449;
    } else if(contractid == "5100576" || contractid == "0005100576") {
      examples['application/json'] = contract_data0005100576;
    } else if(contractid == "5074306" || contractid == "0005074306") {
      examples['application/json'] = contract_data0005074306;
    } else if(contractid == "5074307" || contractid == "0005074307") {
      examples['application/json'] = contract_data0005074307;
    } else if(contractid == "5100679" || contractid == "0005100679") {
      examples['application/json'] = contract_data0005100679;
    }
  } catch(err) {
  }

  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


/*
 *
 *
 *
 */

/*
 *
  examples['application/json'] = {
  "d" : {
    "results" : [ {
      "ZcontEndDateLow" : "aeiou",
      "ZserialNo" : "aeiou",
      "ZcontEndDateHigh" : "aeiou",
      "ZtechReptive" : "aeiou",
      "ZcontEndDate" : "aeiou",
      "ZcntrctNo" : "aeiou",
      "ZcontorsName" : "aeiou",
      "ZcontStartDateLow" : "aeiou",
      "Zuser" : "aeiou",
      "ZsalesReptive" : "aeiou",
      "Zoverflg" : "aeiou",
      "ZcontStartDateHigh" : "aeiou",
      "ZcontText" : "aeiou",
      "ZcallerName" : "aeiou",
      "ZcustContNo" : "aeiou",
      "ZcontStartDate" : "aeiou",
      "Zconid" : "aeiou",
      "__metadata" : {
        "etag" : "aeiou",
        "id" : "aeiou",
        "type" : "aeiou",
        "url" : "aeiou"
      },
      "Zurl" : "aeiou"
    } ]
  }
};
 */

var contracts_data105585 = {
  "d" : {
    "results" : [ {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5100679",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005100679",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2020/01/31",
      "ZcontText" : "WS-C3560CG-8TC-S x2（5年保守）",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5121286",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005121286",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2016/02/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2017/01/31",
      "ZcontText" : "1月満了保守更新",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "株式会社エクシード",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "0-030-15-151203",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5121289",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005121289",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2016/01/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/12/31",
      "ZcontText" : "12月満了保守更新",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "株式会社エクシード",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "0-030-15-151202",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15014187-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005106998",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/11/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/10/31",
      "ZcontText" : "10月満了保守更新",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "株式会社エクシード",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "0-030-15-151202",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15015545-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005114215",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/12/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/11/30",
      "ZcontText" : "11月満了保守更新",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "株式会社エクシード",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "0-030-15-151201",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5072449",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005072449",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/04/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2015/06/30",
      "ZcontText" : "Applogicﾗｲｾﾝｽ更新(4-6月)",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15009353-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005088781",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/07/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2015/09/30",
      "ZcontText" : "Applogicﾗｲｾﾝｽ販売",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15014252-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005107272",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/10/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2015/12/31",
      "ZcontText" : "Applogicﾗｲｾﾝｽ販売",
      "ZcontorsName" : "株式会社エクシード",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    } ]
  }
};

var contracts_data100309 = {
  "d" : {
    "results" : [ {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15013874-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005100576",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/10/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2017/03/31",
      "ZcontText" : "BIG-IP GTM1500リプレイス作業（保守費）_社内用",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5074306",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005074306",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/04/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/03/31",
      "ZcontText" : "2015年度_年間保守契約（IT部門以外）",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "5074307",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005074307",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/04/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/03/31",
      "ZcontText" : "2015年度_年間保守契約(社内用)",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15013573-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005102382",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/10/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/03/31",
      "ZcontText" : "Ciscoスイッチ老朽化対応",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15013574-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005102386",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/10/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2015/03/31",
      "ZcontText" : "Ciscoスイッチ老朽化対応",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZcontStartDateLow" : "",
      "ZcntrctNo" : "SC15013581-00",
      "ZcontStartDateHigh" : "",
      "Zconid" : "0005102385",
      "ZcontEndDateLow" : "",
      "ZcontStartDate" : "2015/10/01",
      "ZcontEndDateHigh" : "",
      "ZcontEndDate" : "2016/03/31",
      "ZcontText" : "Ciscoスイッチ老朽化対応",
      "ZcontorsName" : "株式会社　ーーーーー",
      "Zuser" : "",
      "ZcallerName" : "",
      "ZsalesReptive" : "山田　太郎",
      "ZtechReptive" : "",
      "ZcustContNo" : "",
      "ZserialNo" : "",
      "Zoverflg" : "",
      "Zurl" : ""
    } ]
  }
};

/*
 *
 */
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
  console.log("[GET >> Contracts --- function ---");
  console.log(args);

  var examples = {};
  try {
    var companyid = args["companyId"]["value"];
    if(companyid == "1001" || companyid == "CPY1001") {
      examples['application/json'] = contracts_data100309;
    } else if(companyid == "2001" || companyid == "CPY2001") {
      examples['application/json'] = contracts_data100309;
    } else if(companyid == "5585" || companyid == "105585" || companyid == "CPY9101") {
      examples['application/json'] = contracts_data105585;
    }
  } catch (err) {
  }

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



/*
 *
 *
 *
 */


/*
  examples['application/json'] = {
  "d" : {
    "results" : [ {
      "ZposnrVl" : "aeiou",
      "ZprodSlaText" : "aeiou",
      "ZproductMdlNo" : "aeiou",
      "ZprodPrice" : 123456789,
      "ZfyearStartDate" : "aeiou",
      "ZsalesGroupName" : "aeiou",
      "ZnyearEndDate" : "aeiou",
      "ZsalesOfficeName" : "aeiou",
      "Zposnr" : "aeiou",
      "ZnyearStartDate" : "aeiou",
      "ZshipDate" : "aeiou",
      "ZkikiQuotPosnr" : "aeiou",
      "Zmenge" : 123456789,
      "ZcustConstId" : "aeiou",
      "__metadata" : {
        "etag" : "aeiou",
        "id" : "aeiou",
        "type" : "aeiou",
        "url" : "aeiou"
      },
      "Zmemo2" : "aeiou",
      "Zmemo1" : "aeiou",
      "ZmanufacMdlNo" : "aeiou",
      "ZfyearEndDate" : "aeiou",
      "ZserialNo" : "aeiou",
      "ZprodEosData" : "aeiou",
      "Zhost" : "aeiou",
      "ZcontEndData" : "aeiou",
      "ZvbelnVa" : "aeiou",
      "ZmenuName" : "aeiou",
      "ZcntrctNo" : "aeiou",
      "ZproductId" : "aeiou",
      "ZsalesOrgName" : "aeiou",
      "ZcontStartDate" : "aeiou",
      "ZserviceType" : "aeiou",
      "Zconid" : "aeiou",
      "ZproductTxt" : "aeiou",
      "ZcustSys02" : "aeiou",
      "ZcustSys01" : "aeiou",
      "ZprodEolDate" : "aeiou",
      "ZsrvMdlNo" : "aeiou"
    } ]
  }
};
 */

var products_data0005100679 = {
  "d" : {
    "results" : [ {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0001",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-C6504-E-F",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat6504 Enhanced chassis",
      "ZserialNo" : "FOX1111111Z",
      "ZprodEolDate" : "2020/4/30",
      "ZprodEosData" : "2014/3/5",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 587000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431793",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0002",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-C6504-E-F",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat6504 Enhanced chassis",
      "ZserialNo" : "FOX1111111B",
      "ZprodEolDate" : "2020/4/30",
      "ZprodEosData" : "2014/3/5",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 587000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431794",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0003",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-SUP720-3B",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "SUP720 Fabric MSFC3 PFC3B",
      "ZserialNo" : "FOX1111111QYU",
      "ZprodEolDate" : "2018/1/31",
      "ZprodEosData" : "2013/1/30",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 5479000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431803",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0004",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-SUP720-3B",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "SUP720 Fabric MSFC3 PFC3B",
      "ZserialNo" : "FOX1111111AZG",
      "ZprodEolDate" : "2018/1/31",
      "ZprodEosData" : "2013/1/30",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 5479000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431804",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0011",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "PWR2700AC/4",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "2700W AC for Cisco 7604",
      "ZserialNo" : "APQ1111111GY",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 587000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431799",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0012",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "PWR2700AC/4",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "2700W AC for Cisco 7604",
      "ZserialNo" : "APQ1111111G2",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 587000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077431800",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0014",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "PWR2700AC/4=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "2700W AC for Cisco 7604",
      "ZserialNo" : "APQ11111110M",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 587000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U077438458",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0019",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-X67724-SFP",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "24 port GE mod x-bar Req. SFP",
      "ZserialNo" : "SAL1111111QZ3",
      "ZprodEolDate" : "2020/07/31",
      "ZprodEosData" : "2015/07/31",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 2935000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00B0703310491",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0020",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "WS-X67724-SFP",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "24 port GE mod x-bar Req. SFP",
      "ZserialNo" : "SAL1111111UDK",
      "ZprodEolDate" : "2020/07/31",
      "ZprodEosData" : "2015/07/31",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 2935000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00B0703310493",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0021",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111111M7D",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355865",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0022",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111111M8V",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355866",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0023",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111111M8F",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355867",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0024",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS111112CSE",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355868",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0025",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112DYN",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355869",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0026",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112FFK",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355870",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0027",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112C47",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355871",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0028",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112DG7",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355872",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0029",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112B0H",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355873",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0030",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112DHQ",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355874",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0031",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112DJW",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355875",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0032",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BHY",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355876",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0033",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BTW",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355877",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0034",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BR2",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355878",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0035",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BSS",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355879",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0036",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BCV",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355880",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0037",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BGC",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355881",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0038",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BTA",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355882",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0039",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-SX-MM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC SX transceiver",
      "ZserialNo" : "FNS1111112BTQ",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0706355884",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0041",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115DAL",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413117",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0042",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115D9K",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413118",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0043",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115Q4G",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413119",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0044",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115ECQ",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413120",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0045",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154JK",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413121",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0046",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154GY",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413122",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0047",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154H5",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413123",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0048",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154KQ",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413124",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0049",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154K3",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413125",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0050",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154JR",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413126",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0051",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS11111154J7",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413127",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0052",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS111111532E",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413128",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0053",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115LRA",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413129",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0054",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115MK5",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413130",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0055",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-LH-SM",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "GE SFP, LC LH transceiver",
      "ZserialNo" : "FNS1111115LR5",
      "ZprodEolDate" : "2018/03/31",
      "ZprodEosData" : "2013/03/08",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 98000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707413131",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0057",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211114W5",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412678",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0058",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211113QZ",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412679",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0059",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211114Y5",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412680",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0060",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211114HU",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412681",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0061",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211114HJ",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412682",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0062",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM11211114N7",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412683",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0063",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM112111100C",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412684",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0064",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "GLC-T=",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "1000BASE-T SFP",
      "ZserialNo" : "AGM112111102F",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 77000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412685",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0065",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "3750G-24TSS1",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "3750 24 10/100/1000+4SFP SMI 1RU",
      "ZserialNo" : "FOC17111112AB",
      "ZprodEolDate" : "2018/01/31",
      "ZprodEosData" : "2013/01/30",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 1369000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0707412874",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0071",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "2960G-24TC-L",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
      "ZserialNo" : "FOC1911114JZ",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 532000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0705039484",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0072",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "2960G-24TC-L",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
      "ZserialNo" : "FOC1911114J2",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 532000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0705039485",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0073",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "2960G-24TC-L",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
      "ZserialNo" : "FOC1911114HX",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 532000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0705039486",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0074",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "2960G-24TC-L",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
      "ZserialNo" : "FOC1911114KU",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 532000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0705039487",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    },
    {
      "__metadata" : {
        "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
        "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
        "etag" : "Z0001-0001-00000-0101010"
      },
      "ZproductId" : "5100679-0075",
      "Zconid" : "0005100679",
      "ZcntrctNo" : "5100679",
      "ZcontStartDate" : "2015/02/01",
      "ZcontEndData" : "2020/01/31",
      "ZsalesOrgName" : "ネットワンシステムズ株式会社",
      "ZsalesOfficeName" : "東日本事業本部 第9営業部",
      "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
      "ZproductMdlNo" : "2960G-24TC-L",
      "ZmanufacMdlNo" : "",
      "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
      "ZserialNo" : "FOC1911114KP",
      "ZprodEolDate" : "",
      "ZprodEosData" : "",
      "ZsrvMdlNo" : "ZEMN010P",
      "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
      "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
      "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
      "Zmenge" : 1,
      "ZprodPrice" : 532000,
      "ZfyearStartDate" : "2007/10/1",
      "ZfyearEndDate" : "2008/9/30",
      "ZnyearStartDate" : "2015/4/1",
      "ZnyearEndDate" : "2016/3/31",
      "Zhost" : "",
      "ZcustSys01" : "",
      "ZcustSys02" : "",
      "ZshipDate" : "2007/7/27",
      "ZcustConstId" : "00U0705039488",
      "ZkikiQuotPosnr" : "",
      "Zposnr" : "",
      "ZposnrVl" : "",
      "ZvbelnVa" : "",
      "Zmemo1" : "",
      "Zmemo2" : ""
    } ]
  }
};

exports.productsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * conId (String)
  * companyId (String)
  * requester (String)
  * contStartDate (String)
  * contEndDate (String)
  * eolDate (String)
  * eosDate (String)
  * searchLimit (Long)
  **/
  console.log("[GET >> Products --- function ---");
  console.log(args);

  var examples = {};

  try{
    var conid = args["conId"]["value"];
    if(conid != null) {
      if(conid == "5100679" || conid == "0005100679") {
        examples['application/json'] = products_data0005100679;
      } else if(conid == "5585" || conid == "105585") {
        examples['application/json'] = products_data0005100679;
      }
    }
  } catch(err) {
  }

  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  var examples = {};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}



/*
 *
 *
 *
 */
var product_data5100679_0001 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0001",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-C6504-E-F",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat6504 Enhanced chassis",
    "ZserialNo" : "FOX1111111Z",
    "ZprodEolDate" : "2020/4/30",
    "ZprodEosData" : "2014/3/5",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 587000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431793",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0002 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0002",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-C6504-E-F",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat6504 Enhanced chassis",
    "ZserialNo" : "FOX1111111B",
    "ZprodEolDate" : "2020/4/30",
    "ZprodEosData" : "2014/3/5",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 587000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431794",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0003 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0003",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-SUP720-3B",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "SUP720 Fabric MSFC3 PFC3B",
    "ZserialNo" : "FOX1111111QYU",
    "ZprodEolDate" : "2018/1/31",
    "ZprodEosData" : "2013/1/30",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 5479000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431803",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0004 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0004",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-SUP720-3B",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "SUP720 Fabric MSFC3 PFC3B",
    "ZserialNo" : "FOX1111111AZG",
    "ZprodEolDate" : "2018/1/31",
    "ZprodEosData" : "2013/1/30",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 5479000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431804",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0011 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0011",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "PWR2700AC/4",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "2700W AC for Cisco 7604",
    "ZserialNo" : "APQ1111111GY",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 587000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431799",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0012 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0012",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "PWR2700AC/4",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "2700W AC for Cisco 7604",
    "ZserialNo" : "APQ1111111G2",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 587000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077431800",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0014 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0014",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "PWR2700AC/4=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "2700W AC for Cisco 7604",
    "ZserialNo" : "APQ11111110M",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 587000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U077438458",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0019 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0019",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-X67724-SFP",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "24 port GE mod x-bar Req. SFP",
    "ZserialNo" : "SAL1111111QZ3",
    "ZprodEolDate" : "2020/07/31",
    "ZprodEosData" : "2015/07/31",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 2935000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00B0703310491",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0020 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0020",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "WS-X67724-SFP",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "24 port GE mod x-bar Req. SFP",
    "ZserialNo" : "SAL1111111UDK",
    "ZprodEolDate" : "2020/07/31",
    "ZprodEosData" : "2015/07/31",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 2935000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00B0703310493",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0021 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0021",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111111M7D",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355865",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0022 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0022",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111111M8V",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355866",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0023 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0023",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111111M8F",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355867",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0024 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0024",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS111112CSE",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355868",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0025 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0025",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112DYN",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355869",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0026 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0026",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112FFK",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355870",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0027 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0027",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112C47",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355871",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0028 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0028",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112DG7",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355872",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0029 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0029",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112B0H",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355873",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0030 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0030",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112DHQ",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355874",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0031 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0031",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112DJW",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355875",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0032 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0032",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BHY",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355876",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0033 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0033",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BTW",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355877",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0034 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0034",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BR2",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355878",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0035 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0035",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BSS",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355879",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0036 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0036",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BCV",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355880",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0037 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0037",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BGC",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355881",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0038 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0038",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BTA",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355882",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0039 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0039",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-SX-MM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC SX transceiver",
    "ZserialNo" : "FNS1111112BTQ",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0706355884",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0041 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0041",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115DAL",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413117",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0042 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0042",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115D9K",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413118",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0043 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0043",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115Q4G",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413119",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0044 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0044",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115ECQ",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413120",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0045 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0045",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154JK",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413121",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0046 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0046",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154GY",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413122",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0047 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0047",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154H5",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413123",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0048 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0048",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154KQ",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413124",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0049 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0049",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154K3",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413125",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0050 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0050",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154JR",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413126",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0051 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0051",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS11111154J7",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413127",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0052 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0052",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS111111532E",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413128",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0053 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0053",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115LRA",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413129",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0054 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0054",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115MK5",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413130",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0055 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0055",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-LH-SM",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "GE SFP, LC LH transceiver",
    "ZserialNo" : "FNS1111115LR5",
    "ZprodEolDate" : "2018/03/31",
    "ZprodEosData" : "2013/03/08",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 98000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707413131",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0057 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0057",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211114W5",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412678",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0058 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0058",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211113QZ",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412679",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0059 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0059",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211114Y5",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412680",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0060 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0060",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211114HU",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412681",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0061 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0061",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211114HJ",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412682",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0062 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0062",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM11211114N7",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412683",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0063 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0063",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM112111100C",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412684",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0064 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0064",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "GLC-T=",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "1000BASE-T SFP",
    "ZserialNo" : "AGM112111102F",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 77000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412685",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0065 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0065",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "3750G-24TSS1",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "3750 24 10/100/1000+4SFP SMI 1RU",
    "ZserialNo" : "FOC17111112AB",
    "ZprodEolDate" : "2018/01/31",
    "ZprodEosData" : "2013/01/30",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 1369000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0707412874",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};


var product_data5100679_0071 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0071",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "2960G-24TC-L",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
    "ZserialNo" : "FOC1911114JZ",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 532000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0705039484",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0072 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0072",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "2960G-24TC-L",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
    "ZserialNo" : "FOC1911114J2",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 532000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0705039485",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0073 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0073",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "2960G-24TC-L",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
    "ZserialNo" : "FOC1911114HX",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 532000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0705039486",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0074 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0074",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "2960G-24TC-L",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
    "ZserialNo" : "FOC1911114KU",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 532000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0705039487",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

var product_data5100679_0075 = {
  "d" : {
    "__metadata" : {
      "id" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "url" : "http://demodemo.gw.com/Z0001_CONTRACT_EQUIP_INFO/SEARCH_COMPANYINFO",
      "type" : "Z0001_CONTRACT_EQUIPMENT_INFO_SRV.SEARCH_COMPANYINFO",
      "etag" : "Z0001-0001-00000-0101010"
    },
    "ZproductId" : "5100679-0075",
    "Zconid" : "0005100679",
    "ZcntrctNo" : "5100679",
    "ZcontStartDate" : "2015/02/01",
    "ZcontEndData" : "2020/01/31",
    "ZsalesOrgName" : "ネットワンシステムズ株式会社",
    "ZsalesOfficeName" : "東日本事業本部 第9営業部",
    "ZsalesGroupName" : "東日本事業本部 第9営業部 第4ﾁｰﾑ",
    "ZproductMdlNo" : "2960G-24TC-L",
    "ZmanufacMdlNo" : "",
    "ZproductTxt" : "Cat2960 20 10/100/1000 + 4T/SFP",
    "ZserialNo" : "FOC1911114KP",
    "ZprodEolDate" : "",
    "ZprodEosData" : "",
    "ZsrvMdlNo" : "ZEMN010P",
    "ZmenuName" : "EOS:センドバック保守（代替品先出し）",
    "ZserviceType" : "HS02:ﾊｰﾄﾞｳｪｱｻﾎﾟｰﾄ（先）",
    "ZprodSlaText" : "5X8　：月-金 9:00〜17:30 ＊祝日,年末年始を除く",
    "Zmenge" : 1,
    "ZprodPrice" : 532000,
    "ZfyearStartDate" : "2007/10/1",
    "ZfyearEndDate" : "2008/9/30",
    "ZnyearStartDate" : "2015/4/1",
    "ZnyearEndDate" : "2016/3/31",
    "Zhost" : "",
    "ZcustSys01" : "",
    "ZcustSys02" : "",
    "ZshipDate" : "2007/7/27",
    "ZcustConstId" : "00U0705039488",
    "ZkikiQuotPosnr" : "",
    "Zposnr" : "",
    "ZposnrVl" : "",
    "ZvbelnVa" : "",
    "Zmemo1" : "",
    "Zmemo2" : ""
  }
};

/*
  examples['application/json'] = {
  "d" : {
    "ZposnrVl" : "aeiou",
    "ZprodSlaText" : "aeiou",
    "ZproductMdlNo" : "aeiou",
    "ZprodPrice" : 123456789,
    "ZfyearStartDate" : "aeiou",
    "ZsalesGroupName" : "aeiou",
    "ZnyearEndDate" : "aeiou",
    "ZsalesOfficeName" : "aeiou",
    "Zposnr" : "aeiou",
    "ZnyearStartDate" : "aeiou",
    "ZshipDate" : "aeiou",
    "ZkikiQuotPosnr" : "aeiou",
    "Zmenge" : 123456789,
    "ZcustConstId" : "aeiou",
    "__metadata" : {
      "etag" : "aeiou",
      "id" : "aeiou",
      "type" : "aeiou",
      "url" : "aeiou"
    },
    "Zmemo2" : "aeiou",
    "Zmemo1" : "aeiou",
    "ZmanufacMdlNo" : "aeiou",
    "ZfyearEndDate" : "aeiou",
    "ZserialNo" : "aeiou",
    "ZprodEosData" : "aeiou",
    "Zhost" : "aeiou",
    "ZcontEndData" : "aeiou",
    "ZvbelnVa" : "aeiou",
    "ZmenuName" : "aeiou",
    "ZcntrctNo" : "aeiou",
    "ZproductId" : "aeiou",
    "ZsalesOrgName" : "aeiou",
    "ZcontStartDate" : "aeiou",
    "ZserviceType" : "aeiou",
    "Zconid" : "aeiou",
    "ZproductTxt" : "aeiou",
    "ZcustSys02" : "aeiou",
    "ZcustSys01" : "aeiou",
    "ZprodEolDate" : "aeiou",
    "ZsrvMdlNo" : "aeiou"
  }
};
 */

/*
 *
 */
exports.productsProductIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * productId (String)
  **/
  console.log("[GET >> Products/{productid} --- function ---");
  console.log(args);

  var examples = {};

  try{
    var productid = args["productId"]["value"];
    if(productid != null) {
      if(productid == "5100679-0001" || productid == "0005100679-0001") {
        examples['application/json'] = product_data5100679_0001;
      } else if(productid == "5100679-0002" || productid == "0005100679-0002") {
        examples['application/json'] = product_data5100679_0002;
      } else if(productid == "5100679-0003" || productid == "0005100679-0003") {
        examples['application/json'] = product_data5100679_0003;
      } else if(productid == "5100679-0004" || productid == "0005100679-0004") {
        examples['application/json'] = product_data5100679_0004;
      } else if(productid == "5100679-0011" || productid == "0005100679-0011") {
        examples['application/json'] = product_data5100679_0011;
      } else if(productid == "5100679-0012" || productid == "0005100679-0012") {
        examples['application/json'] = product_data5100679_0012;
      } else if(productid == "5100679-0014" || productid == "0005100679-0014") {
        examples['application/json'] = product_data5100679_0014;
      } else if(productid == "5100679-0019" || productid == "0005100679-0019") {
        examples['application/json'] = product_data5100679_0019;
      } else if(productid == "5100679-0020" || productid == "0005100679-0020") {
        examples['application/json'] = product_data5100679_0020;
      } else if(productid == "5100679-0021" || productid == "0005100679-0021") {
        examples['application/json'] = product_data5100679_0021;
      } else if(productid == "5100679-0022" || productid == "0005100679-0022") {
        examples['application/json'] = product_data5100679_0022;
      } else if(productid == "5100679-0023" || productid == "0005100679-0023") {
        examples['application/json'] = product_data5100679_0023;
      } else if(productid == "5100679-0024" || productid == "0005100679-0024") {
        examples['application/json'] = product_data5100679_0024;
      } else if(productid == "5100679-0025" || productid == "0005100679-0025") {
        examples['application/json'] = product_data5100679_0025;
      } else if(productid == "5100679-0026" || productid == "0005100679-0026") {
        examples['application/json'] = product_data5100679_0026;
      } else if(productid == "5100679-0027" || productid == "0005100679-0027") {
        examples['application/json'] = product_data5100679_0027;
      } else if(productid == "5100679-0028" || productid == "0005100679-0028") {
        examples['application/json'] = product_data5100679_0028;
      } else if(productid == "5100679-0029" || productid == "0005100679-0029") {
        examples['application/json'] = product_data5100679_0029;
      } else if(productid == "5100679-0030" || productid == "0005100679-0030") {
        examples['application/json'] = product_data5100679_0030;
      } else if(productid == "5100679-0031" || productid == "0005100679-0031") {
        examples['application/json'] = product_data5100679_0031;
      } else if(productid == "5100679-0032" || productid == "0005100679-0032") {
        examples['application/json'] = product_data5100679_0032;
      } else if(productid == "5100679-0033" || productid == "0005100679-0033") {
        examples['application/json'] = product_data5100679_0033;
      } else if(productid == "5100679-0034" || productid == "0005100679-0034") {
        examples['application/json'] = product_data5100679_0034;
      } else if(productid == "5100679-0035" || productid == "0005100679-0035") {
        examples['application/json'] = product_data5100679_0035;
      } else if(productid == "5100679-0036" || productid == "0005100679-0036") {
        examples['application/json'] = product_data5100679_0036;
      } else if(productid == "5100679-0037" || productid == "0005100679-0037") {
        examples['application/json'] = product_data5100679_0037;
      } else if(productid == "5100679-0038" || productid == "0005100679-0038") {
        examples['application/json'] = product_data5100679_0038;
      } else if(productid == "5100679-0039" || productid == "0005100679-0039") {
        examples['application/json'] = product_data5100679_0039;
      } else if(productid == "5100679-0041" || productid == "0005100679-0041") {
        examples['application/json'] = product_data5100679_0041;
      } else if(productid == "5100679-0042" || productid == "0005100679-0042") {
        examples['application/json'] = product_data5100679_0042;
      } else if(productid == "5100679-0043" || productid == "0005100679-0043") {
        examples['application/json'] = product_data5100679_0043;
      } else if(productid == "5100679-0044" || productid == "0005100679-0044") {
        examples['application/json'] = product_data5100679_0044;
      } else if(productid == "5100679-0045" || productid == "0005100679-0045") {
        examples['application/json'] = product_data5100679_0045;
      } else if(productid == "5100679-0046" || productid == "0005100679-0046") {
        examples['application/json'] = product_data5100679_0046;
      } else if(productid == "5100679-0047" || productid == "0005100679-0047") {
        examples['application/json'] = product_data5100679_0047;
      } else if(productid == "5100679-0048" || productid == "0005100679-0048") {
        examples['application/json'] = product_data5100679_0048;
      } else if(productid == "5100679-0049" || productid == "0005100679-0049") {
        examples['application/json'] = product_data5100679_0049;
      } else if(productid == "5100679-0050" || productid == "0005100679-0050") {
        examples['application/json'] = product_data5100679_0050;
      } else if(productid == "5100679-0051" || productid == "0005100679-0051") {
        examples['application/json'] = product_data5100679_0051;
      } else if(productid == "5100679-0052" || productid == "0005100679-0052") {
        examples['application/json'] = product_data5100679_0052;
      } else if(productid == "5100679-0053" || productid == "0005100679-0053") {
        examples['application/json'] = product_data5100679_0053;
      } else if(productid == "5100679-0054" || productid == "0005100679-0054") {
        examples['application/json'] = product_data5100679_0054;
      } else if(productid == "5100679-0055" || productid == "0005100679-0055") {
        examples['application/json'] = product_data5100679_0055;
      } else if(productid == "5100679-0057" || productid == "0005100679-0057") {
        examples['application/json'] = product_data5100679_0057;
      } else if(productid == "5100679-0058" || productid == "0005100679-0058") {
        examples['application/json'] = product_data5100679_0058;
      } else if(productid == "5100679-0059" || productid == "0005100679-0059") {
        examples['application/json'] = product_data5100679_0059;
      } else if(productid == "5100679-0060" || productid == "0005100679-0060") {
        examples['application/json'] = product_data5100679_0060;
      } else if(productid == "5100679-0061" || productid == "0005100679-0061") {
        examples['application/json'] = product_data5100679_0061;
      } else if(productid == "5100679-0062" || productid == "0005100679-0062") {
        examples['application/json'] = product_data5100679_0062;
      } else if(productid == "5100679-0063" || productid == "0005100679-0063") {
        examples['application/json'] = product_data5100679_0063;
      } else if(productid == "5100679-0064" || productid == "0005100679-0064") {
        examples['application/json'] = product_data5100679_0064;
      } else if(productid == "5100679-0065" || productid == "0005100679-0065") {
        examples['application/json'] = product_data5100679_0065;
      } else if(productid == "5100679-0071" || productid == "0005100679-0071") {
        examples['application/json'] = product_data5100679_0071;
      } else if(productid == "5100679-0072" || productid == "0005100679-0072") {
        examples['application/json'] = product_data5100679_0072;
      } else if(productid == "5100679-0073" || productid == "0005100679-0073") {
        examples['application/json'] = product_data5100679_0073;
      } else if(productid == "5100679-0074" || productid == "0005100679-0074") {
        examples['application/json'] = product_data5100679_0074;
      } else if(productid == "5100679-0075" || productid == "0005100679-0075") {
        examples['application/json'] = product_data5100679_0075;
      }
    }
  } catch(err) {
  }

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

