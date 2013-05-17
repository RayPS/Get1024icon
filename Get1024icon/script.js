$(function () {
  if(window.top != window) return;
  function sendRequest(message, cb){
      window.chrome.extension.sendMessage(message, cb);
  }

  function drawButton() {
      doDrawButton($('#left-stack>div:first>a:first')); //find the place to draw
  }

  function doDrawButton(entry) {
    var icon;

    icon = $('<div id="button_1024"><a href="javascript:void(0)" >Get 1024 icon</a></div>');
    entry.after(icon);

    icon.bind('click', function () {
      var itunesIconURL = $('#left-stack>div:first>a:first>div:first>img:first')[0].src
      var BigSizeIconURL = itunesIconURL.replace("175x175-75.jpg","png")
      window.open(BigSizeIconURL);
    });

  }

  function init() {
    drawButton();
  }

  init();

});