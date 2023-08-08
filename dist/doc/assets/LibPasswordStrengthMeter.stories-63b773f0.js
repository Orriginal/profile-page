import{d as T,f as d,o as r,c as t,a as s,n as p,F as v,g as m,h as j,t as q}from"./vue.esm-bundler-caa660e7.js";const z={class:"p-3 space-y-2"},A={class:"grid grid-cols-4 gap-2"},F=s("p",null,"It’s better to have:",-1),$={key:0,class:"w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12"},D=s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5.917 5.724 10.5 15 1.5"},null,-1),E=[D],I={key:1,class:"w-3 h-3 mr-2.5 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},O=s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"},null,-1),U=[O],N=T({__name:"LibPasswordStrengthMeter",props:{show:{type:Boolean,default:!1},value:{},relative:{type:Boolean,default:!1}},setup(L){const e=L,o=d(()=>[{label:"Upper & lower case letters",isSucceeded:/[A-Z]/.test(e.value)&&/[a-z]/.test(e.value)},{label:"A symbol (#$&!_-.)",isSucceeded:/[#$&!_\-.]/.test(e.value)},{label:"A longer password (min. 12 chars.)",isSucceeded:e.value.length>=12}]),c=d(()=>o.value.filter(g=>g.isSucceeded).length),h=d(()=>c.value===0?"bg-red-500":c.value<o.value.length?"bg-orange-500":"bg-green-500");return(g,Z)=>(r(),t("div",{role:"tooltip",class:p([{"opacity-1":e.show,"opacity-0":!e.show,"absolute -translate-y-1/2":!e.relative,relative:e.relative},"z-10 inline-block text-sm text-gray-500 duration-300 bg-white border border-gray-200 rounded-md shadow-lg w-72 transition-opacity top-0 pointer-events-none"])},[s("div",z,[s("div",A,[s("div",{class:p([`${h.value}`,"h-1"])},null,2),(r(!0),t(v,null,m(o.value.length,a=>(r(),t("div",{key:a,class:p([a<=c.value?h.value:"bg-gray-200","h-1"])},null,2))),128))]),F,s("ul",null,[(r(!0),t(v,null,m(o.value,(a,V)=>(r(),t("li",{key:V,class:"flex items-center mb-1"},[a.isSucceeded?(r(),t("svg",$,E)):(r(),t("svg",I,U)),j(" "+q(a.label),1)]))),128))])])],2))}});N.__docgenInfo={exportName:"default",displayName:"LibPasswordStrengthMeter",description:"",tags:{},props:[{name:"show",description:"Show the password strength meter",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",description:"Value to show how strong it is",required:!0,type:{name:"string"}},{name:"relative",description:"Make it position relative to its content",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["D:/Projects/profile-page/src/library/LibPasswordStrengthMeter/LibPasswordStrengthMeter.vue"]};const H={title:"library/lib-password-strength-meter",component:N,tags:["autodocs"],argTypes:{show:{control:"boolean"},value:{control:"text"}},args:{}},n={args:{show:!0,value:"Password123!",relative:!0}},l={args:{show:!0,value:"",relative:!0}},i={args:{show:!0,value:"Pass",relative:!0}},u={args:{show:!0,value:"Pass!",relative:!0}};var w,_,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    show: true,
    value: 'Password123!',
    relative: true
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,y,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    show: true,
    value: '',
    relative: true
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,P,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    show: true,
    value: 'Pass',
    relative: true
  }
}`,...(x=(P=i.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var S,M,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    show: true,
    value: 'Pass!',
    relative: true
  }
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const J=["CompletePassword","PasswordNonCriteriaChecked","CriteriaPartialChecked","TwoChecks"];export{n as CompletePassword,i as CriteriaPartialChecked,l as PasswordNonCriteriaChecked,u as TwoChecks,J as __namedExportsOrder,H as default};
//# sourceMappingURL=LibPasswordStrengthMeter.stories-63b773f0.js.map
