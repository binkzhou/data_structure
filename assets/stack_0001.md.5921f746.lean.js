import{d as C,h as F,a0 as _,j as m,o as D,c as d,k as i,_ as v,H as f,Q as g}from"./chunks/framework.91000686.js";const T="/data_structure/assets/image-20231116152720657.ccfb2bf1.png",R="/data_structure/assets/image-20231116152649440.e11af1a5.png",L="/data_structure/assets/image-20231116152616608.fbac6178.png",B="/data_structure/assets/image-20231116152807476.7406898c.png",N="/data_structure/assets/image-20231116152855540.c28d1dc7.png",q="/data_structure/assets/image-20231116152956853.f8a0db95.png",I="/data_structure/assets/image-20231116153120273.41f8d616.png",P="/data_structure/assets/image-20231116153213217.0e848ec8.png",O="/data_structure/assets/image-20231116153331033.e5248b46.png",U={class:"container"},e=5,K=C({__name:"Stack",setup(h){const r=F(),S=F(null);let c=_([]);function u(s,o,a,p,l,n,t){s.fillStyle="#82ba81",s.beginPath(),s.moveTo(o+n,a),s.lineTo(o+p-n,a),s.arc(o+p-n,a+n,n,1.5*Math.PI,2*Math.PI),s.lineTo(o+p,a+l-n),s.arc(o+p-n,a+l-n,n,0,.5*Math.PI),s.lineTo(o+n,a+l),s.arc(o+n,a+l-n,n,.5*Math.PI,Math.PI),s.lineTo(o,a+n),s.arc(o+n,a+n,n,Math.PI,1.5*Math.PI),s.closePath(),s.fill(),s.fillStyle="black",s.textAlign="center",s.textBaseline="middle",s.font="16px Arial",s.fillText(t,o+p/2,a+l/2)}function E(s,o,a,p,l,n){var t=10,y=Math.atan2(l-a,p-o);s.beginPath(),s.moveTo(o,a),s.lineTo(p,l),s.lineTo(p-t*Math.cos(y-Math.PI/6),l-t*Math.sin(y-Math.PI/6)),s.moveTo(p,l),s.lineTo(p-t*Math.cos(y+Math.PI/6),l-t*Math.sin(y+Math.PI/6)),s.stroke(),s.fillStyle="black",s.textAlign="center",s.textBaseline="middle",s.font="16px Arial",s.fillText(n,(o+p)/2,(a+l)/2-10)}function A(){const s=S.value,o=r.value;if(!s||!o)return;s.clearRect(0,0,o.width,o.height);const a=120,p=30,l=40;s.strokeStyle="black",s.beginPath(),s.moveTo(a,p),s.lineTo(a,p+e*l+l),s.moveTo(a,p+e*l+l),s.lineTo(a+120,p+e*l+l),s.moveTo(a+120,p+e*l+l),s.lineTo(a+120,p),s.stroke(),s.setLineDash([5,2]),s.beginPath();for(let n=1;n<=e;n++)s.moveTo(a,p+n*l),s.lineTo(a+120,p+n*l);if(s.stroke(),s.fillStyle="#82ba81",console.log("list.length",c.length),console.log("STACK_INIT_SIZE",e),s.setLineDash([]),c.length==0){const n=p+e*l;E(s,a-80,n+5,a-5,n+5,"top"),E(s,a-80,n+35,a-5,n+35,"base")}else{const n=p+e*l,t=p+(e-c.length)*l;E(s,a-80,t+20,a-5,t+20,"top"),E(s,a-80,n+35,a-5,n+35,"base")}for(let n=0;n<c.length;n++)s.fillStyle="#82ba81",u(s,a+2,p+l*(e-n)+2,116,36,3,`${c[n]}`)}function b(){let s=Math.floor(Math.random()*100)+1;c.length<e&&c.push(s),A()}function k(){c.length>0&&(c.pop(),A())}return m(()=>{r.value&&(console.log("canvasRef.value",r.value),S.value=r.value.getContext("2d"),A())}),(s,o)=>(D(),d("div",U,[i("canvas",{ref_key:"canvasRef",ref:r,height:"280",width:"500"},null,512),i("div",{class:"btns"},[i("button",{onClick:b},"入栈"),i("button",{onClick:k},"出栈")])]))}});const M=v(K,[["__scopeId","data-v-65c9da7e"]]),z=g("",4),V=g("",32),$=JSON.parse('{"title":"栈的顺序存储结构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"stack/0001.md","filePath":"stack/0001.md"}'),Z={name:"stack/0001.md"},j=Object.assign(Z,{setup(h){return(r,S)=>(D(),d("div",null,[z,f(M),V]))}});export{$ as __pageData,j as default};
