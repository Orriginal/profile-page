import{o as a,c as s,r as n,d as h,a as i,i as C,F as u}from"./vue.esm-bundler-caa660e7.js";import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as L}from"./LibHeader-010df7ca.js";import{_ as y}from"./LibButton-bd53f089.js";import{_ as $}from"./EditIcon-aa0b4d43.js";const m={},v={class:"bg-brand-white rounded w-full"};function x(e,r){return a(),s("div",v,[n(e.$slots,"default")])}const p=o(m,[["render",x]]);m.__docgenInfo={displayName:"LibCard",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Projects/profile-page/src/library/LibCard/LibCard.vue"]};const F={class:"p-4 flex place-content-between items-center"},q=i("hr",null,null,-1),b=h({__name:"LibCardHeader",props:{label:{}},setup(e){const r=e;return(g,B)=>(a(),s(u,null,[i("div",F,[C(L,{class:"whitespace-nowrap",label:r.label},null,8,["label"]),n(g.$slots,"default")]),q],64))}});b.__docgenInfo={exportName:"default",displayName:"LibCardHeader",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Projects/profile-page/src/library/LibCard/LibCardHeader.vue"]};const _={},N={class:"p-4"};function j(e,r){return a(),s("div",N,[n(e.$slots,"default")])}const P=o(_,[["render",j]]);_.__docgenInfo={displayName:"LibCardContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Projects/profile-page/src/library/LibCard/LibCardContent.vue"]};const f={},w=i("hr",null,null,-1),I={class:"p-4 flex place-content-between items-center"};function D(e,r){return a(),s(u,null,[w,i("div",I,[n(e.$slots,"default")])],64)}const H=o(f,[["render",D]]);f.__docgenInfo={displayName:"LibCardFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Projects/profile-page/src/library/LibCard/LibCardFooter.vue"]};const O={title:"Library/LibCard",component:p,tags:["autodocs"],argTypes:{header:{control:"text"},content:{control:"text"}}},S=e=>({components:{LibCard:p,LibCardHeader:b,LibCardContent:P,LibCardFooter:H,LibButton:y,EditIcon:$},setup(){return{args:e}},template:`
        <lib-card>
            <lib-card-header :label='args.header'>
                <lib-button icon>
                    <edit-icon color-class='fill-gray-200' />
                </lib-button>
            </lib-card-header>
            <lib-card-content>
                {{ args.content }}
            </lib-card-content>
            <lib-card-footer>
                <lib-button type='error'>Cancel</lib-button>
                <lib-button type='secondary'>Update</lib-button>
            </lib-card-footer>
        </lib-card>
    `}),t=S.bind({});t.args={header:"Header title",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan dictum nulla in aliquam. Suspendisse feugiat dui a ex sollicitudin maximus. Maecenas scelerisque neque non lacinia euismod. Mauris laoreet vulputate elit at interdum. Sed tempus enim nec justo venenatis, eget bibendum mauris vulputate. Quisque tincidunt ut enim non scelerisque. Nam mattis fermentum diam in hendrerit. Pellentesque eget nibh vehicula, feugiat eros sit amet, euismod nisl. Integer vitae ipsum rutrum turpis commodo maximus in eget felis. Fusce nisi dolor, ullamcorper in hendrerit et, pharetra ut ligula. Sed quis luctus diam, vitae cursus mauris."};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`Template.bind({}) as object & {
  args: object;
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Q=["Primary"];export{t as Primary,Q as __namedExportsOrder,O as default};
//# sourceMappingURL=LibCard.stories-b57cb850.js.map
