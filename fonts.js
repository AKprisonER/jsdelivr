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

    // Password gate
    if(sessionStorage.getItem('__auth')!=='yes'){
      document.body.style.display='none';
      var _ov=document.createElement('div');
      _ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;display:flex;align-items:center;justify-content:center;z-index:999999;font-family:sans-serif;';
      _ov.innerHTML='<div style="text-align:center;padding:40px;border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,0.1);max-width:360px;width:90%;"><h2 style="margin:0 0 8px;font-size:22px;">Protected Page</h2><p style="color:#666;margin:0 0 24px;font-size:14px;">Enter the access key to continue</p><input id="__pin" type="password" placeholder="Access key" style="width:100%;padding:12px;font-size:16px;border:1px solid #ddd;border-radius:8px;box-sizing:border-box;outline:none;"/><button id="__btn" style="margin-top:12px;width:100%;padding:12px;background:#111;color:#fff;border:none;border-radius:8px;font-size:16px;cursor:pointer;">Unlock</button><p id="__err" style="color:red;font-size:13px;margin-top:12px;display:none;">Incorrect key. Try again.</p></div>';
      document.body.appendChild(_ov);
      document.body.style.display='block';
      Array.from(document.body.children).forEach(function(el){if(el!==_ov)el.style.display='none';});
      function _check(){
        
        if(document.getElementById('__pin').value==='0mistakebefast'){
          sessionStorage.setItem('__auth','yes');
          _ov.remove();
          Array.from(document.body.children).forEach(function(el){el.style.display='';});
        } else {
          document.getElementById('__err').style.display='block';
        }
      }
      document.getElementById('__btn').addEventListener('click',_check);
      document.getElementById('__pin').addEventListener('keydown',function(e){if(e.keyCode===13)_check();});
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
window.__ok=true;
