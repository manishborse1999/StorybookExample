import e,{useState as r,useEffect as t}from"react";function o(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}o(".carousel-container{background:#f1f1f1;display:flex;flex-wrap:nowrap;overflow:hidden}.carousel-item{align-items:center;display:flex;height:28rem;justify-content:center;min-width:100%;transition:1s cubic-bezier(.39,.575,.565,1);width:100%}");const a=({data:o})=>{const[a,n]=r(0);return t((()=>{const e=setInterval((()=>{a===o.length-1?n(0):n(a+1)}),3e3);return()=>clearInterval(e)})),e.createElement("div",{className:"carousel-container "},o.map(((r,t)=>e.createElement("img",{className:"carousel-item",style:{transform:`translate(-${100*a}%)`},src:r.img,key:t}))))};function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}var d="Button-module_button__2ZuB7",l="Button-module_primaryButton__8rOq9",c="Button-module_secondaryButton__Cie7g",i="Button-module_transparent__IN8oW";o(".Button-module_button__2ZuB7{border:none;border-radius:5px;cursor:pointer;font-size:16px;padding:10px 20px}.Button-module_primaryButton__8rOq9{background-color:#3498db;color:#fff}.Button-module_secondaryButton__Cie7g{background-color:#2ecc71;color:#fff}.Button-module_transparent__IN8oW{background-color:transparent;color:inherit}");const u=({children:r,buttonBgColor:t,...o})=>{const a="secondary"==t?c:"transparent"==t?i:l;return e.createElement("button",n({className:`${d} ${a}`},o),r)};var _="Card-module_card__Cb1o4",s="Card-module_cardImage__WV4Pj",m="Card-module_cardContent__7Ca2E",p="Card-module_cardTitle__9eyJg",g="Card-module_cardDescription__opJvR",f="Card-module_alignButton__byRUx";o(".Card-module_card__Cb1o4{border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:10px;overflow:hidden}.Card-module_cardImage__WV4Pj{height:auto;object-fit:cover;width:100%}.Card-module_cardContent__7Ca2E{padding:16px}.Card-module_cardTitle__9eyJg{fontSize:18px;margin:0}.Card-module_cardDescription__opJvR{color:#555;margin:8px 0}.Card-module_alignButton__byRUx{display:flex;justify-content:space-around}");const b=({title:r,imageUrl:t,description:o,firstButtonTitle:a,secondButtonTitle:n})=>e.createElement("div",{className:_},e.createElement("img",{className:s,src:t,alt:r}),e.createElement("div",{className:m},e.createElement("h2",{className:p},r),e.createElement("p",{className:g},o),e.createElement("div",{className:f},e.createElement(u,null,a),e.createElement(u,{style:{margin:"2px"}},n))));var y={header:"Header-module_header__RUooH",buttonContainer:"Header-module_buttonContainer__diFJA",primary:"Header-module_primary__C-ViM",secondary:"Header-module_secondary__9HNLx",error:"Header-module_error__bgYWl",transparent:"Header-module_transparent__z-IdN",warning:"Header-module_warning__Eljq-",button:"Header-module_button__4q0ft"};o(".Header-module_header__RUooH{align-items:center;background-color:#333;color:#fff;display:flex;justify-content:space-between;padding:10px}h1{margin:0}.Header-module_buttonContainer__diFJA{display:flex}.Header-module_primary__C-ViM{background-color:#3498db;color:#fff}.Header-module_secondary__9HNLx{background-color:#2ecc71;color:#fff}.Header-module_error__bgYWl{background-color:#d32f2f;color:#fff}.Header-module_transparent__z-IdN{background-color:transparent;color:inherit}.Header-module_warning__Eljq-{background-color:#ed6c02}.Header-module_button__4q0ft:hover{background-color:#2980b9}");const h=({title:r,headerBgColor:t})=>{const o="secondary"==t?y.secondary:"error"==t?y.error:"transparent"==t?y.transparent:"warning"==t?y.warning:y.primaryButton;return e.createElement("header",{className:`${y.header} ${o}`},e.createElement("div",null,e.createElement("h1",null,r)),e.createElement("div",{className:y.buttonContainer},e.createElement(u,{buttonBgColor:"transparent",styles:{marginRight:"10px"}},"Home"),e.createElement(u,{buttonBgColor:"transparent"},"Sign Up")))};export{u as Button,b as Card,a as Carousel,h as Header};