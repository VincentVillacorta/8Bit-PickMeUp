function reqListener () {
    var jsonResponse = JSON.parse(this.responseText);
    console.log(jsonResponse.compliment);
}
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://complimentr.com/api");
  var x = oReq.send();

