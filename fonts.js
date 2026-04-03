!function(){
  document.addEventListener('contextmenu',function(e){e.preventDefault();});
  document.addEventListener('keydown',function(e){
    var k=e.keyCode,c=e.ctrlKey,s=e.shiftKey,m=e.metaKey;
    if(k===123||(c&&s&&k===73)||(c&&s&&k===74)||(c&&k===85)||(m&&k===85)||(m&&s&&k===85)){
      e.preventDefault();return false;
    }
  });

  function _run(){
    var _l=window.location;
    if(_l.protocol==='file:'||_l.hostname==='localhost'||_l.hostname==='127.0.0.1'){
      document.body.innerHTML="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;color:red;'>&#9940; Access Denied.</div>";
      return;
    }

    setInterval(function(){
      if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
        document.body.innerHTML="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;'>&#128683; DevTools Detected.</div>";
      }
    },1000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_run);
  } else {
    _run();
  }

}();
window.__ok = true;
