document.addEventListener('DOMContentLoaded', function() {  

    var text;

    function reqListener () {
        var jsonResponse = JSON.parse(this.responseText);
        text = jsonResponse.compliment;
        firstLetter = text[0].toUpperCase();
        restOfWord = text.slice(1);
        text = firstLetter + restOfWord;
    }
    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://complimentr.com/api");
    oReq.send();

    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
      setTimeout(() => {checkPageButton.innerHTML = text;},350);
    
  }, false);
}, false);