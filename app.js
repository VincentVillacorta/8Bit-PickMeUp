document.addEventListener('DOMContentLoaded', function() {  

  var text;
  function reqListener () {
      var jsonResponse = JSON.parse(this.responseText);
      text = jsonResponse.compliment;
      }
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://complimentr.com/api");
      oReq.send();
  
      var checkPageButton = document.getElementById('checkPage');
      checkPageButton.addEventListener('click', function() {
      checkPageButton.innerHTML = text;
      
    }, false);
  }, false);