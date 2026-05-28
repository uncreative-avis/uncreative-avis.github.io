// https://petrapixel.neocities.org/coding/cachebusting

document.addEventListener("DOMContentLoaded", function () {

    // Path to your CSS file (like usual), or empty ("") if you don't have one:
    const CSS_FILE_PATH = "style.css"; 
    
    // Path to your JS file (like usual), or empty ("") if you don't have one:
    const JS_FILE_PATH = "autoload.js"; 
    
    function loadScript(src) {
      const script = document.createElement("script");
      script.src = src + "?nocache=" + new Date().getTime();
      script.async = true;
      document.head.appendChild(script);
    }
    function loadCSS(href) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href + "?nocache=" + new Date().getTime();
      document.head.appendChild(link);
    }
    if (JS_FILE_PATH) loadScript(JS_FILE_PATH);
    if (CSS_FILE_PATH) loadCSS(CSS_FILE_PATH);
});