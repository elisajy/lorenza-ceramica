"use strict";(self.webpackChunklorenza_ceramica=self.webpackChunklorenza_ceramica||[]).push([[380],{6380:(e,c,a)=>{a.r(c),a.d(c,{default:()=>f});var s=a(3169),l=a(6201),i=a(8846),t=a(2107),n=a(972),r=a(9904),o=a(4330),d=a(9081),p=a(2527),h=a(9301),m=a(3212),x=a(5043),j=a(3216),u=a(4501),g=a(579);const f=()=>{const[e,c]=(0,x.useState)([]),[a,f]=(0,x.useState)("commercial"),[k,C]=(0,x.useState)(1),[N,$]=(0,x.useState)([]),b=(0,x.useMemo)((()=>Math.ceil(N.length/6)),[N]),E=(0,j.Zp)();(0,x.useEffect)((()=>{S("projects-commercial")}),[]),(0,x.useEffect)((()=>{c(N.slice(6*(k-1),6*k))}),[k]);const S=e=>{fetch(`https://api.lorenzaceramica.com/${e}`).then((e=>e.json())).then((e=>{c(e.slice(6*(k-1),6*k)),$(e)}))};return(0,g.jsxs)(t.a,{display:"flex",flexDirection:"column",children:[(0,g.jsx)("div",{style:{height:"140px",backgroundColor:"#33557b"}}),(0,g.jsxs)(i.D,{className:"title",size:"lg",alignSelf:"center",marginTop:"30px",children:[(0,g.jsx)(h.$,{variant:"link",className:"commercial"===a?"title":"unselected",onClick:()=>{S("projects-commercial"),f("commercial")},children:"COMMERCIAL"})," ","|"," ",(0,g.jsx)(h.$,{variant:"link",className:"residential"===a?"title":"unselected",onClick:()=>{S("projects-residential"),f("residential")},children:"RESIDENTIAL"})]}),(0,g.jsxs)(t.a,{maxWidth:"8xl",margin:"40px 80px",alignSelf:"center",children:[e.length>0?(0,g.jsx)(m.r,{className:"card-grid",rowGap:"50px",columnGap:"80px",columns:2,children:e.map((e=>(0,g.jsxs)(s.Z,{variant:"unstyled",gap:"10px",className:"card-box",children:[(0,g.jsx)(l.a,{display:"flex",justifyContent:"start",children:(0,g.jsx)(i.D,{className:"title card-title",size:"md",children:e.title})}),(0,g.jsxs)(t.a,{className:"card-container",children:[(0,g.jsx)(n._,{className:"card-thumbnail",objectFit:"cover",src:e.thumbnail,alt:"post",onClick:()=>E(`/projects/${e.path}?origin=${a}`)}),(0,g.jsxs)(r.B,{className:"card-content",padding:"10px",children:[(0,g.jsx)(o.b,{onClick:()=>E(`/projects/${e.path}?origin=${a}`),children:(0,g.jsx)(d.E,{className:"card-desc",fontSize:{sm:"12px",md:"14px",lg:"16px"},py:"2",color:"white",children:e.description})}),(0,g.jsx)(p.w,{alignSelf:"flex-end",children:(0,g.jsx)(h.$,{variant:"link",color:"white",onClick:()=>E(`/projects/${e.path}?origin=${a}`),children:"READ MORE"})})]})]})]},e.id)))}):(0,g.jsx)(d.E,{children:"No post yet."}),(0,g.jsx)(u.Ay,{total:b,current:k,onPageChange:e=>(e=>{C(e)})(e)})]})]})}}}]);
//# sourceMappingURL=380.a280e45a.chunk.js.map