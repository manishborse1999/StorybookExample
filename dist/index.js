"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function a(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}a(".carousel-container{background:#f1f1f1;display:flex;flex-wrap:nowrap;overflow:hidden}.carousel-item{align-items:center;display:flex;height:28rem;justify-content:center;min-width:100%;transition:1s cubic-bezier(.39,.575,.565,1);width:100%}");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}var n="Button-module_button__2ZuB7",d="Button-module_primaryButton__8rOq9",l="Button-module_secondaryButton__Cie7g",u="Button-module_transparent__IN8oW";a(".Button-module_button__2ZuB7{border:none;border-radius:5px;cursor:pointer;font-size:16px;padding:10px 20px}.Button-module_primaryButton__8rOq9{background-color:#3498db;color:#fff}.Button-module_secondaryButton__Cie7g{background-color:#2ecc71;color:#fff}.Button-module_transparent__IN8oW{background-color:transparent;color:inherit}");const c=({children:e,buttonBgColor:t,...a})=>{const c="secondary"==t?l:"transparent"==t?u:d;return r.default.createElement("button",o({className:`${n} ${c}`},a),e)};var i="Card-module_card__Cb1o4",s="Card-module_cardImage__WV4Pj",_="Card-module_cardContent__7Ca2E",m="Card-module_cardTitle__9eyJg",f="Card-module_cardDescription__opJvR",p="Card-module_alignButton__byRUx";a(".Card-module_card__Cb1o4{border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:10px;overflow:hidden}.Card-module_cardImage__WV4Pj{height:auto;object-fit:cover;width:100%}.Card-module_cardContent__7Ca2E{padding:16px}.Card-module_cardTitle__9eyJg{fontSize:18px;margin:0}.Card-module_cardDescription__opJvR{color:#555;margin:8px 0}.Card-module_alignButton__byRUx{display:flex;justify-content:space-around}");var g={header:"Header-module_header__RUooH",buttonContainer:"Header-module_buttonContainer__diFJA",primary:"Header-module_primary__C-ViM",secondary:"Header-module_secondary__9HNLx",error:"Header-module_error__bgYWl",transparent:"Header-module_transparent__z-IdN",warning:"Header-module_warning__Eljq-",button:"Header-module_button__4q0ft"};a(".Header-module_header__RUooH{align-items:center;background-color:#333;color:#fff;display:flex;justify-content:space-between;padding:10px}h1{margin:0}.Header-module_buttonContainer__diFJA{display:flex}.Header-module_primary__C-ViM{background-color:#3498db;color:#fff}.Header-module_secondary__9HNLx{background-color:#2ecc71;color:#fff}.Header-module_error__bgYWl{background-color:#d32f2f;color:#fff}.Header-module_transparent__z-IdN{background-color:transparent;color:inherit}.Header-module_warning__Eljq-{background-color:#ed6c02}.Header-module_button__4q0ft:hover{background-color:#2980b9}");exports.Button=c,exports.Card=({title:e,imageUrl:t,description:a,firstButtonTitle:o,secondButtonTitle:n})=>r.default.createElement("div",{className:i},r.default.createElement("img",{className:s,src:t,alt:e}),r.default.createElement("div",{className:_},r.default.createElement("h2",{className:m},e),r.default.createElement("p",{className:f},a),r.default.createElement("div",{className:p},r.default.createElement(c,null,o),r.default.createElement(c,{style:{margin:"2px"}},n)))),exports.Carousel=({data:t})=>{const[a,o]=e.useState(0);return e.useEffect((()=>{const e=setInterval((()=>{a===t.length-1?o(0):o(a+1)}),3e3);return()=>clearInterval(e)})),r.default.createElement("div",{className:"carousel-container "},t.map(((e,t)=>r.default.createElement("img",{className:"carousel-item",style:{transform:`translate(-${100*a}%)`},src:e.img,key:t}))))},exports.Header=({title:e,headerBgColor:t})=>{const a="secondary"==t?g.secondary:"error"==t?g.error:"transparent"==t?g.transparent:"warning"==t?g.warning:g.primaryButton;return r.default.createElement("header",{className:`${g.header} ${a}`},r.default.createElement("div",null,r.default.createElement("h1",null,e)),r.default.createElement("div",{className:g.buttonContainer},r.default.createElement(c,{buttonBgColor:"transparent",styles:{marginRight:"10px"}},"Home"),r.default.createElement(c,{buttonBgColor:"transparent"},"Sign Up")))};
