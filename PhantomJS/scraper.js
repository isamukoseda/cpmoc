/**
 * @fileoverview SAP/Fiori APIの動作結果を保存する為のツール
 * @version 0.1
 * @auther koseda@netone.co.jp (Isamu Kosseda)
 */
var fs = require('fs');
var jsonobj = JSON.parse(fs.read("targetpage.json"));


/**
 *
 * @param (array) targetArray 作業対象となるuriが含まれる行全体
 */
function scraper(targetArray) {
  // debug info
  console.log("target URI:", targetArray.url);

  // create web-page
  var page = require('webpage').create();
  page.settings = {
    "userName" : "",
    "password" : ""
  }

  cosole.info("opening URL: "+targetArray.url);
  page.open(targetArray.url, function(status) {
    console.log(" open status: "+status);
    if(status === 'success') {
      // take ScreenShot
      takeScreenshot(page, targetArray);

      // take Reply Message
      takeReplyMessage(page, targetArray);

    } else {
      console.error("Error could not open the page!");
      page.close();
      console.info("The page is closing. URL: " + targetArray.url);
    }
  });
  console.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

/**
 *
 */
function takeScreenshot(page, targetArray) {
  var filename = targetArray.testno;
  page.render("images/" + filename + ".png");
  console.info("rendered images/"+filename+".png");
}

/**
 *
 */
function takeReplyMessage(page, targetArray) {
  var filename = targetArray.testno;
  var fs = required('fs');
  var path = "logs/"+filename+".log";
  fs.write(path, page.content, 'w');
}

/**
 * 全ての作業対象を読み込む処理
 */
for (var i in jsonobj) {
  scraper(jsonobj[i]);
}

/**
 * PhantomJSの実行を終了する
 */
phantom.exit();
