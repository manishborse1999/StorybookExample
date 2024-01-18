import{j as r}from"./jsx-runtime-673517be.js";import{r as a}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const l=({data:s})=>{const[o,i]=a.useState(0),m=()=>o===s.length-1?i(0):i(o+1);return a.useEffect(()=>{const e=setInterval(()=>{m()},3e3);return()=>clearInterval(e)}),r("div",{className:"carousel-container ",children:s.map((e,f)=>r("img",{className:"carousel-item",style:{transform:`translate(-${o*100}%)`},src:e.img},f))})},w={component:l,tags:["autodocs"]},t={args:{data:[{img:"https://plus.unsplash.com/premium_photo-1676479611869-9eb759c37749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",title:"Dog"},{img:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww",title:"Lion"},{img:"https://media.istockphoto.com/id/1253898581/photo/dog-celebrating-with-red-party-hat-and-blow-out.jpg?s=612x612&w=0&k=20&c=ny3b2B4_v_9FHFKQVBiXf9n2I6wGJqrvfW_AMFBVfaY=",title:"Dog"},{img:"https://media.istockphoto.com/id/1272454526/photo/funny-dog-with-birthday-cake.jpg?s=612x612&w=0&k=20&c=biZNwkjK4wwSkAfKpmsgnusCJZbbmRFuz25A6Hb59Os=",title:"Dog"}]}};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: [{
      img: 'https://plus.unsplash.com/premium_photo-1676479611869-9eb759c37749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Dog'
    }, {
      img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww',
      title: 'Lion'
    }, {
      img: 'https://media.istockphoto.com/id/1253898581/photo/dog-celebrating-with-red-party-hat-and-blow-out.jpg?s=612x612&w=0&k=20&c=ny3b2B4_v_9FHFKQVBiXf9n2I6wGJqrvfW_AMFBVfaY=',
      title: 'Dog'
    }, {
      img: 'https://media.istockphoto.com/id/1272454526/photo/funny-dog-with-birthday-cake.jpg?s=612x612&w=0&k=20&c=biZNwkjK4wwSkAfKpmsgnusCJZbbmRFuz25A6Hb59Os=',
      title: 'Dog'
    }]
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const g=["CarouselSlides"];export{t as CarouselSlides,g as __namedExportsOrder,w as default};
