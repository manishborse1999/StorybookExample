"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),o=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),a=r(o);function l(e,o){void 0===o&&(o={});var r=o.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}l(".carousel-container{background:#f1f1f1;display:flex;flex-wrap:nowrap;overflow:hidden}.carousel-item{align-items:center;display:flex;height:28rem;justify-content:center;min-width:100%;transition:1s cubic-bezier(.39,.575,.565,1);width:100%}");const n=({data:o})=>{const[r,a]=e.useState(0);return e.useEffect((()=>{const e=setInterval((()=>{r===o.length-1?a(0):a(r+1)}),3e3);return()=>clearInterval(e)})),t.default.createElement("div",{className:"carousel-container "},o.map(((e,o)=>t.default.createElement("img",{className:"carousel-item",style:{transform:`translate(-${100*r}%)`},src:e.img,key:o}))))};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}n.propTypes={data:a.default.array},n.defaultProps={data:[]};var i="Button-module_button__2ZuB7",s="Button-module_small__l39oh",c="Button-module_medium__KTxdk",u="Button-module_large__6bsb7",_="Button-module_primary__s1sM6",p="Button-module_secondary__R0waJ",m="Button-module_success__w6qB6",f="Button-module_danger__V4fX8",g="Button-module_transparent__IN8oW";l('.Button-module_button__2ZuB7{border:none;border-radius:5px;cursor:pointer}.Button-module_small__l39oh{font-size:14px;padding:8px 12px}.Button-module_medium__KTxdk{font-size:16px;padding:12px 18px}.Button-module_large__6bsb7{font-size:18px;padding:16px 24px}.Button-module_primary__s1sM6{background-color:#007bff;color:#fff}.Button-module_secondary__R0waJ{background-color:#6c757d;color:#fff}.Button-module_success__w6qB6{background-color:#28a745;color:#fff}.Button-module_danger__V4fX8{background-color:#dc3545;color:#fff}.Button-module_transparent__IN8oW{background-color:transparent;color:inherit}.Button-module_small__l39oh{font-size:"14px";padding:"8px 12px"}.Button-module_medium__KTxdk{font-size:"16px";padding:"12px 18px"}.Button-module_large__6bsb7{font-size:"18px";padding:"16px 24px"}');const h=({children:e,backgroundColor:o,onClick:r,size:a,...l})=>{const n="secondary"==o?p:"success"==o?m:"danger"==o?f:"transparent"==o?g:_,h="small"==a?s:"large"==a?u:c;return t.default.createElement("button",d({className:`${i} ${n} ${h}`},l,{onClick:r}),e)};h.propTypes={backgroundColor:a.default.string,size:a.default.oneOf(["small","medium","large"]),children:a.default.string,onClick:a.default.func},h.defaultProps={backgroundColor:"primary",children:null,size:"medium",onClick:void 0};var b="Card-module_card__Cb1o4",x="Card-module_cardImage__WV4Pj",y="Card-module_cardContent__7Ca2E",k="Card-module_cardTitle__9eyJg",B="Card-module_cardDescription__opJvR",C="Card-module_alignButton__byRUx";l(".Card-module_card__Cb1o4{border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:10px;overflow:hidden}.Card-module_cardImage__WV4Pj{height:auto;object-fit:cover;width:100%}.Card-module_cardContent__7Ca2E{padding:16px}.Card-module_cardTitle__9eyJg{font-size:18px;margin:0}.Card-module_cardDescription__opJvR{color:#555;margin:8px 0}.Card-module_alignButton__byRUx{display:flex;justify-content:space-around}");const w=({title:e="Card Title",imageUrl:o,description:r="Card Description",firstButtonTitle:a="Learn More",secondButtonTitle:l="Share",onButtonOneClick:n,onButtonTwoClick:d})=>t.default.createElement("div",{className:b},t.default.createElement("img",{className:x,src:o,alt:e}),t.default.createElement("div",{className:y},t.default.createElement("h2",{className:k},e),t.default.createElement("p",{className:B},r),t.default.createElement("div",{className:C},t.default.createElement(h,{onClick:n},a),t.default.createElement(h,{onClick:d},l))));w.propTypes={title:a.default.string,imageUrl:a.default.string,description:a.default.string,firstButtonTitle:a.default.string,secondButtonTitle:a.default.string},w.defaultProps={title:"Card Title",imageUrl:null,description:"Card Description",firstButtonTitle:"Learn More",secondButtonTitle:"Share"};var v="Header-module_header__RUooH",T="Header-module_buttonContainer__diFJA",H="Header-module_primary__C-ViM",E="Header-module_secondary__9HNLx",N="Header-module_error__bgYWl",A="Header-module_transparent__z-IdN",F="Header-module_warning__Eljq-";l(".Header-module_header__RUooH{align-items:center;background-color:#333;color:#fff;display:flex;justify-content:space-between;padding:10px}h1{margin:0}.Header-module_buttonContainer__diFJA{display:flex}.Header-module_primary__C-ViM{background-color:#3498db;color:#fff}.Header-module_secondary__9HNLx{background-color:#2ecc71;color:#fff}.Header-module_error__bgYWl{background-color:#d32f2f;color:#fff}.Header-module_transparent__z-IdN{background-color:transparent;color:inherit}.Header-module_warning__Eljq-{background-color:#ed6c02}.Header-module_button__4q0ft:hover{background-color:#2980b9}");const z=({title:e="Storybook Header",headerBgColor:o="primary",onHomeButtonClick:r,onSignupButtonClick:a})=>{const l="secondary"==o?E:"error"==o?N:"transparent"==o?A:"warning"==o?F:H;return t.default.createElement("header",{className:`${v} ${l}`},t.default.createElement("div",null,t.default.createElement("h1",null,e)),t.default.createElement("div",{className:T},t.default.createElement(h,{onClick:r,backgroundColor:"transparent",style:{marginRight:"10px"}},"Home"),t.default.createElement(h,{onClick:a,backgroundColor:"transparent"},"Sign Up")))};z.propTypes={title:a.default.string,headerBgColor:a.default.string},z.defaultProps={title:"Storybook Header",headerBgColor:"transparent"};var S="Typography-module_typography__ZANXY",D="Typography-module_heading__V2-XT",M="Typography-module_subheading__a9d6v",j="Typography-module_body__s-YlR",R="Typography-module_caption__K-n4O";l(".Typography-module_heading__V2-XT{font-size:24px;font-weight:700}.Typography-module_subheading__a9d6v{font-size:20px;font-weight:700}.Typography-module_body__s-YlR{font-size:16px}.Typography-module_caption__K-n4O{color:#666;font-size:14px}");const q=({variant:e,children:o})=>{const r="heading"==e?D:"subheading"==e?M:"caption"==e?R:j;return t.default.createElement("div",{className:`${S} ${r}`},o)};q.propTypes={variant:a.default.oneOf(["heading","subheading","body","caption"]),children:a.default.node.isRequired};var Z="Footer-module_footerContainer__geYdG",P="Footer-module_footerContent__xLy7a",O="Footer-module_socialLinks__N4Al8",Y="Footer-module_primary__SA9kT",I="Footer-module_secondary__MuvTK",W="Footer-module_error__hRIsj",J="Footer-module_transparent__PrRZa",K="Footer-module_warning__MQZzc";l(".Footer-module_footerContainer__geYdG{padding:20px 0;text-align:center}.Footer-module_footerContent__xLy7a{align-items:center;display:flex;flex-direction:column}.Footer-module_socialLinks__N4Al8{margin-top:10px}.Footer-module_socialLinks__N4Al8 a{color:inherit;margin:0 10px;text-decoration:none}.Footer-module_primary__SA9kT{background-color:#3498db;color:#fff}.Footer-module_secondary__MuvTK{background-color:#333;color:#fff}.Footer-module_error__hRIsj{background-color:#d32f2f;color:#fff}.Footer-module_transparent__PrRZa{background-color:transparent;color:#000}.Footer-module_warning__MQZzc{background-color:#ed6c02}");var L={alert:"Alert-module_alert__7cYyI",success:"Alert-module_success__1bzoB",error:"Alert-module_error__xKhJP",warning:"Alert-module_warning__q-j1Q",info:"Alert-module_info__9r3r1",icon:"Alert-module_icon__Zg6SB"};l(".Alert-module_alert__7cYyI{align-items:center;border-radius:5px;display:flex;margin-bottom:10px;padding:10px}.Alert-module_success__1bzoB{background-color:#d4edda;color:#155724}.Alert-module_error__xKhJP{background-color:#f8d7da;color:#721c24}.Alert-module_warning__q-j1Q{background-color:#fff3cd;color:#856404}.Alert-module_info__9r3r1{background-color:#d1ecf1;color:#0c5460}.Alert-module_icon__Zg6SB{font-size:20px;margin-right:10px}");var $="Dialog-module_backdrop__19q1d",V="Dialog-module_dialog__gyl5p",U="Dialog-module_closeButton__-Z3o-";l(".Dialog-module_backdrop__19q1d{align-items:center;background:rgba(0,0,0,.2);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%}.Dialog-module_dialog__gyl5p{background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.2);max-width:600px;padding:20px;position:relative;width:100%}.Dialog-module_closeButton__-Z3o-{color:#333;cursor:pointer;font-size:20px;position:absolute;right:10px;top:10px}");const G=({isOpen:e,onClose:o,children:r})=>t.default.createElement(t.default.Fragment,null,e&&t.default.createElement("div",{className:$,onClick:o},t.default.createElement("div",{className:V,onClick:e=>e.stopPropagation()},t.default.createElement("div",{className:U,onClick:o},"×"),r)));G.propTypes={isOpen:a.default.bool.isRequired,onClose:a.default.func.isRequired,children:a.default.node.isRequired};const X={args:{children:"Secondary Button",backgroundColor:"secondary",size:"small",onClick:()=>alert("Seconary btn clicked.")}},Q={args:{title:"Butterfly",description:"Butterfly are the most specialized group of reptiles. Many species of snake are found all over the world.",imageUrl:"https://images.unsplash.com/photo-1475809913362-28a064062ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",firstButtonTitle:"Learn More",secondButtonTitle:"Show Details",onButtonOneClick:()=>alert("btn 1 clicked"),onButtonTwoClick:()=>alert("btn 2 clicked")}},ee={args:{title:"StoryBook",headerBgColor:"error",onHomeButtonClick:()=>alert("Home Button click"),onSignupButtonClick:()=>alert("Signup Button click")}},oe={args:{title:"StoryBook",headerBgColor:"transparent",onHomeButtonClick:()=>alert("Home Button click"),onSignupButtonClick:()=>alert("Signup Button click")}},re={args:{isOpen:!1,onClose:()=>alert("Dialog Closed"),children:"Your Dialog Content Goes Here"}};exports.Alert=({type:e,message:o})=>t.default.createElement("div",{className:`${L.alert} ${L[e]}`},t.default.createElement("span",{className:L.icon},"!"),t.default.createElement("p",null,o)),exports.Button=h,exports.Card=w,exports.CardComponent=Q,exports.Carousel=n,exports.CarouselSlides={args:{data:[{img:"https://plus.unsplash.com/premium_photo-1676479611869-9eb759c37749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",title:"Dog"},{img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww",title:"Lion"},{img:"https://media.istockphoto.com/id/1253898581/photo/dog-celebrating-with-red-party-hat-and-blow-out.jpg?s=612x612&w=0&k=20&c=ny3b2B4_v_9FHFKQVBiXf9n2I6wGJqrvfW_AMFBVfaY=",title:"Dog"},{img:"https://media.istockphoto.com/id/1272454526/photo/funny-dog-with-birthday-cake.jpg?s=612x612&w=0&k=20&c=biZNwkjK4wwSkAfKpmsgnusCJZbbmRFuz25A6Hb59Os=",title:"Dog"}]}},exports.ClosedDialog=re,exports.Dialog=G,exports.Footer=({BgColor:e,year:o,companyName:r})=>{const a="secondary"==e?I:"error"==e?W:"transparent"==e?J:"warning"==e?K:Y;return t.default.createElement("footer",{className:`${Z} ${a}`},t.default.createElement("div",{className:P},t.default.createElement("p",null,"© ",o," ",r," All rights reserved."),t.default.createElement("div",{className:O},t.default.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Facebook"),t.default.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Twitter"),t.default.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"))))},exports.Header=z,exports.PrimaryButton={args:{children:"Primary Button",backgroundColor:"primary",size:"large"}},exports.SecondaryButton=X,exports.Typography=q,exports.body={args:{children:"Body text",variant:"body"}},exports.errorAlert={args:{type:"error",message:"Error! This is a error message."}},exports.errorHeader=ee,exports.footerPrimaryStory={args:{BgColor:"primary",year:2024,companyName:"Storybook."}},exports.heading={args:{children:"Heading Text",variant:"heading"}},exports.successAlert={args:{type:"success",message:"Success! This is a success message."}},exports.transparentHeader=oe;
