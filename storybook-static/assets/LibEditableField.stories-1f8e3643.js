import{d as V,m as x,u as f,c as t,t as d,b as _,i as F,o as a}from"./vue.esm-bundler-caa660e7.js";import{_ as L}from"./LibTextField-1ffe0d03.js";const v={key:0,class:"block text-sm font-medium text-gray-900"},E={key:1,class:"mt-1"},S={key:2,class:"text-sm text-brand-text-secondary leading-4 py-2.75"},y=V({__name:"LibEditableField",props:x({label:{},edit:{type:Boolean},type:{default:"text"}},{modelValue:{local:!0}}),emits:["update:modelValue"],setup(i){const e=i,s=f(i,"modelValue",{local:!0});return(k,r)=>(a(),t("div",null,[e.label?(a(),t("div",v,d(e.label),1)):_("",!0),e.edit?(a(),t("div",E,[F(L,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=g=>s.value=g),type:e.type},null,8,["modelValue","type"])])):(a(),t("div",S,d(s.value),1))]))}});y.__docgenInfo={exportName:"default",displayName:"LibEditableField",description:"",tags:{},props:[{name:"label",description:"Label text above the input",required:!0,type:{name:"string"}},{name:"edit",description:"Change from static data to input",required:!0,type:{name:"boolean"}},{name:"type",description:"Type of input",required:!1,type:{name:"union",elements:[{name:'"email"'},{name:'"password"'},{name:'"text"'}]}}],sourceFiles:["D:/Projects/profile-page/src/library/LibEditableField/LibEditableField.vue"]};const q={title:"library/LibEditableField",component:y,tags:["autodocs"],argTypes:{label:{control:"text"},edit:{control:"boolean"},type:{control:"select",options:["email","password","text"]},modelValue:{control:"text"}},args:{}},l={args:{label:"Field Label",edit:!0,type:"text",modelValue:"Initial Value"}},o={args:{label:"Field Label",edit:!1,modelValue:"Static Value"}};var n,m,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Field Label',
    edit: true,
    type: 'text',
    modelValue: 'Initial Value'
  }
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Field Label',
    edit: false,
    modelValue: 'Static Value'
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const B=["EditableField","StaticField"];export{l as EditableField,o as StaticField,B as __namedExportsOrder,q as default};
//# sourceMappingURL=LibEditableField.stories-1f8e3643.js.map
