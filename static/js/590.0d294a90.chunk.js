"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[590],{8126:function(n,e,r){r.d(e,{Z:function(){return I}});var i,t,a,l,c,d,s,o,x,h,p=r(9439),u=r(2791),f=r(9434),j=r(4805),m=function(n){return n.currency.data},g=function(n){return n.currency.isLoading},w=r(4400),y=r(168),v=r(8881),Z=r(5867),b=Z.ZP.div(i||(i=(0,y.Z)(["\n  /* font-family: 'Poppins Regular', sans-serif; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: ",";\n"])),(function(n){return n.maxw||"480px"})),S=Z.ZP.div(t||(t=(0,y.Z)(["\n  max-height: 170px;\n  width: 100%;\n"]))),P=Z.ZP.div(a||(a=(0,y.Z)(["\n  background: rgba(82, 59, 126, 0.6);\n  padding-left: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.padL||"62px"}),(function(n){return n.marB||"24px"})),k=Z.ZP.div(l||(l=(0,y.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  padding: 16px 0;\n"]))),C=Z.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  flex-direction: row;\n  text-align: start;\n  gap: 50px;\n"]))),L=Z.ZP.div(d||(d=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: ",";\n  gap: ",";\n  margin-bottom: 6px;\n"])),(function(n){return n.padL||"62px"}),(function(n){return n.gap||"24px"})),W=Z.ZP.span(s||(s=(0,y.Z)(["\n  color: var(--white, #fbfbfb);\n  /* font-family: 'Poppins SemiBold'; */\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: calc(16 / 24);\n  text-align: center;\n  &:last-child {\n  }\n  &:first-child {\n  }\n"]))),B=Z.ZP.span(o||(o=(0,y.Z)(["\n  display: inline-block;\n  color: var(--white, #fbfbfb);\n  /* font-family: 'Poppins Regular'; */\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: calc(24 / 16);\n  text-align: center;\n  width: 62px;\n  &:last-child {\n    width: 42px;\n  }\n  &:first-child {\n    width: 65px;\n  }\n"]))),F=(0,Z.ZP)(v.fe)(x||(x=(0,y.Z)(["\n  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));\n"]))),N=Z.ZP.img(h||(h=(0,y.Z)(["\n  display: inline-block;\n  width: ",";\n"])),(function(n){return n.w||"480px"})),_=r(184),I=function(){var n=(0,u.useState)([]),e=(0,p.Z)(n,2),i=e[0],t=e[1],a=(0,f.I0)(),l=(0,f.v9)(m),c=(0,f.v9)(g),d=(0,f.v9)((function(n){return n.auth.token}));(0,u.useEffect)((function(){if(d){var n=localStorage.getItem("lastUpdatedTime");Date.now()-Number(n)>=36e5||!n?(a((0,w.X)()),t(l),function(){var n=Date.now();localStorage.setItem("lastUpdatedTime",n)}()):t(l)}}),[a,l,d]);var s=(0,j.useMediaQuery)({maxWidth:767}),o=(0,j.useMediaQuery)({minWidth:768,maxWidth:1279}),x=(0,j.useMediaQuery)({minWidth:1280});return(0,_.jsxs)("div",{children:[x&&(0,_.jsx)(b,{ai:"center",jc:"center",children:c?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(F,{height:40,width:40,color:"#4a56e2",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4a56e2",strokeWidth:4,strokeWidthSecondary:4})}):(0,_.jsxs)(b,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)(P,{children:(0,_.jsxs)(k,{children:[(0,_.jsx)(W,{children:"Currency"}),(0,_.jsx)(W,{children:"Purchase"}),(0,_.jsx)(W,{children:"Sale"})]})}),(0,_.jsx)(L,{children:(null===i||void 0===i?void 0:i.length)&&i.map((function(n){return(0,_.jsxs)(C,{children:[(0,_.jsx)(B,{children:n.currencyName}),(0,_.jsx)(B,{children:n.rateBuy}),(0,_.jsx)(B,{children:n.rateSell.toString().slice(0,-2)})]})}))})]}),(0,_.jsx)("img",{src:r(1342),alt:"chart"})]})}),o&&(0,_.jsx)(b,{maxw:"336px",children:c?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(F,{height:40,width:40,color:"#4a56e2",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4a56e2",strokeWidth:4,strokeWidthSecondary:4})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)(P,{padL:"20px",marB:"8px",children:(0,_.jsxs)(k,{children:[(0,_.jsx)(W,{children:"Currency"}),(0,_.jsx)(W,{children:"Purchase"}),(0,_.jsx)(W,{children:"Sale"})]})}),(0,_.jsx)(L,{padL:"20px",gap:"12px",children:(null===i||void 0===i?void 0:i.length)&&i.map((function(n){return(0,_.jsxs)(C,{children:[(0,_.jsx)(B,{children:n.currencyName}),(0,_.jsx)(B,{children:n.rateBuy}),(0,_.jsx)(B,{children:n.rateSell.toString().slice(0,-2)})]})}))})]}),(0,_.jsx)(N,{src:r(7629),alt:"chart",w:"336px"})]})}),s&&(0,_.jsx)(b,{maxw:"336px",children:c?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(F,{height:40,width:40,color:"#4a56e2",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4a56e2",strokeWidth:4,strokeWidthSecondary:4})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)(P,{padL:"20px",marB:"8px",children:(0,_.jsxs)(k,{children:[(0,_.jsx)(W,{children:"Currency"}),(0,_.jsx)(W,{children:"Purchase"}),(0,_.jsx)(W,{children:"Sale"})]})}),(0,_.jsx)(L,{padL:"20px",gap:"12px",children:(null===i||void 0===i?void 0:i.length)&&i.map((function(n){return(0,_.jsxs)(C,{children:[(0,_.jsx)(B,{children:n.currencyName}),(0,_.jsx)(B,{children:n.rateBuy}),(0,_.jsx)(B,{children:n.rateSell.toString().slice(0,-2)})]})}))})]}),(0,_.jsx)(N,{src:r(7629),alt:"chart",w:"336px"})]})})]})}},4590:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var i,t=r(8126),a=r(168),l=r(5867).ZP.div(i||(i=(0,a.Z)(["\n  max-width: 480px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),c=r(184),d=function(){return(0,c.jsxs)("div",{children:[" ",(0,c.jsx)(l,{children:(0,c.jsx)(t.Z,{})})]})}},7629:function(n,e,r){n.exports=r.p+"static/media/chart-tablet.6fa2624dedd57a709426.png"},1342:function(n,e,r){n.exports=r.p+"static/media/chart-web.181fdd0a7d3dcaa073e4.png"}}]);
//# sourceMappingURL=590.0d294a90.chunk.js.map