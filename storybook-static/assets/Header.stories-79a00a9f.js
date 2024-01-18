import{a,j as n}from"./jsx-runtime-673517be.js";import"./index-c013ead5.js";import{B as s}from"./Button-adea64da.js";import"./_commonjsHelpers-725317a4.js";const y="_header_nd6cv_3",h="_buttonContainer_nd6cv_47",B="_primary_nd6cv_55",v="_secondary_nd6cv_67",b="_error_nd6cv_79",C="_transparent_nd6cv_89",H="_warning_nd6cv_99",S="_button_nd6cv_47",r={header:y,buttonContainer:h,primary:B,secondary:v,error:b,transparent:C,warning:H,button:S},l=({title:g,headerBgColor:e})=>{const u=e=="secondary"?r.secondary:e=="error"?r.error:e=="transparent"?r.transparent:e=="warning"?r.warning:r.primaryButton;return a("header",{className:`${r.header} ${u}`,children:[n("div",{children:n("h1",{children:g})}),a("div",{className:r.buttonContainer,children:[n(s,{buttonBgColor:"transparent",styles:{marginRight:"10px"},children:"Home"}),n(s,{buttonBgColor:"transparent",children:"Sign Up"})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"Header"};const j={component:l,tags:["autodocs"],argTypes:{headerBgColor:{options:["inherit","primary","secondary","transparent","error","warning"],control:{type:"select"}}}},t={args:{title:"StoryBook",headerBgColor:"error"}},o={args:{title:"StoryBook",headerBgColor:"transparent"}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'StoryBook',
    headerBgColor: 'error'
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,_,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'StoryBook',
    headerBgColor: 'transparent'
  }
}`,...(m=(_=o.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const N=["errorHeader","transparentHeader"];export{N as __namedExportsOrder,j as default,t as errorHeader,o as transparentHeader};
