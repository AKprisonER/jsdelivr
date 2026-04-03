!function(){

  // 1. Disable right-click
  document.addEventListener('contextmenu',function(e){e.preventDefault();});

  // 2. Block F12, Ctrl+Shift+I/J, Ctrl+U, Cmd+U
  document.addEventListener('keydown',function(e){
    var k=e.keyCode,c=e.ctrlKey,s=e.shiftKey,m=e.metaKey;
    if(k===123||(c&&s&&k===73)||(c&&s&&k===74)||(c&&k===85)||(m&&k===85)||(m&&s&&k===85)){
      e.preventDefault();return false;
    }
  });

  // 3. Block local access + devtools — run immediately if DOM ready, else wait
  function _run(){

    // Local access block
    var _l=window.location;
    if(_l.protocol==='file:'||_l.hostname==='localhost'||_l.hostname==='127.0.0.1'){
      document.body.innerHTML="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;color:red;'>&#9940; Access Denied.</div>";
      return;
    }

    // DevTools size detection
    setInterval(function(){
      if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
        document.body.innerHTML="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;'>&#128683; DevTools Detected.</div>";
      }
    },1000);
  }

  // DOM already loaded? Run now. Else wait.
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_run);
  } else {
    _run();
  }

}();
