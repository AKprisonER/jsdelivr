!function(){var _0x4a=["file:","localhost","127.0.0.1","contextmenu","preventDefault","keydown","keyCode","ctrlKey","shiftKey","metaKey","body","innerHTML","protocol","hostname","referrer","yourdomain.github.io"];

// 1. Block local access
var _0xl=window.location;
if(_0xl[_0x4a[12]]===_0x4a[0]||_0xl[_0x4a[13]]===_0x4a[1]||_0xl[_0x4a[13]]===_0x4a[2]){
document.addEventListener("DOMContentLoaded",function(){
document[_0x4a[10]][_0x4a[11]]="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;color:red;'>\u26D4 Access Denied. Open via web server only.</div>";
});
}

// 2. Block wrong domain (referrer check)
// ⚠️ Replace yourdomain.github.io below with your actual GitHub Pages domain
if(document[_0x4a[14]]&&document[_0x4a[14]]!==''&&document[_0x4a[14]].indexOf(_0x4a[15])===-1){
document.addEventListener("DOMContentLoaded",function(){
document[_0x4a[10]][_0x4a[11]]="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;color:red;'>\u26D4 Unauthorized.</div>";
});
}

// 3. Disable right-click
document.addEventListener(_0x4a[3],function(_0xe){_0xe[_0x4a[4]]();});

// 4. Block F12, Ctrl+Shift+I/J, Ctrl+U, Cmd+U, Cmd+Option+U
document.addEventListener(_0x4a[5],function(_0xe){
var _0xk=_0xe[_0x4a[6]],_0xc=_0xe[_0x4a[7]],_0xs=_0xe[_0x4a[8]],_0xm=_0xe[_0x4a[9]];
if(
_0xk===123||
(_0xc&&_0xs&&_0xk===73)||
(_0xc&&_0xs&&_0xk===74)||
(_0xc&&_0xk===85)||
(_0xm&&_0xk===85)||
(_0xm&&_0xs&&_0xk===85)
){_0xe[_0x4a[4]]();return false;}
});

// 5. DevTools window size detection
setInterval(function(){
if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
document[_0x4a[10]][_0x4a[11]]="<div style='text-align:center;margin-top:20vh;font-family:sans-serif;font-size:24px;'>\uD83D\uDEAB DevTools Detected.</div>";
}
},1000);

}();
