"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("vue-functional-data-merge"),e=["xs","sm","md","lg","xl"],s=["container","page"],a={circle:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"as-loader-circle",attrs:{width:"38",height:"38",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2",fill:"none","fill-rule":"evenodd"}},[e("circle",{attrs:{cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}})])])}},dots:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"as-loader-dots",attrs:{width:"120",height:"30",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}}),e("circle",{attrs:{cx:"60",cy:"15",r:"9"}}),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}})])}}},r={name:"AsLoader",functional:!0,props:{tag:{type:String,default:"div"},size:{type:String,default:"md",validator:function(t){return e.includes(t)}},overlay:{type:String,default:void 0,validator:function(t){return!t||s.includes(t)}},shape:{type:String,default:"circle",validator:function(t){return Object.keys(a).includes(t)}}},render:function(e,s){var r=s.data,i=s.props,n=i.overlay,l=a[i.shape],o={class:["as-loader","is-"+i.size,{"is-container-overlay":"container"===n,"is-page-overlay":"page"===n}]};return e(i.tag,t.mergeData(r,o),[e(l)])}},i={name:"AsButton",functional:!0,props:{tag:{type:String,default:"button"},href:{type:String,default:void 0},to:{type:[Object,String],default:void 0},theme:{type:String,default:"primary"},size:{type:String,default:"md",validator:function(t){return e.includes(t)}},loader:{type:String,validator:function(t){return Object.keys(a).includes(t)}},outline:Boolean,rounded:Boolean,circle:Boolean,loading:Boolean,disabled:Boolean,block:Boolean,pressed:Boolean,nuxt:Boolean},render:function(e,s){var a=s.data,i=s.props,n=s.slots,l=i.tag,o=i.href,d=i.to,u=i.loading,c=i.disabled,f=i.nuxt,g=n(),p=g.prepend,h=g.append,m=g.default;o?l="a":d&&!f?l="router-link":d&&f&&(l="nuxt-link");var y={class:["as-button","is-"+i.theme,"is-"+i.size,{"is-outline":i.outline,"is-rounded":i.rounded,"is-circle":i.circle,"is-disabled":c,"is-loading":u,"is-pressed":i.pressed,"is-block":i.block}],attrs:{disabled:"button"===l&&(c||u),href:o||void 0,to:d||void 0}};return e(l,t.mergeData(a,y),[u&&e(r,{props:{shape:i.loader}}),p&&e("span",{class:"as-button-prepend"},[p]),m,h&&e("span",{class:"as-button-append"},[h])])}},n=["space-between","space-around","center","left","right","stretch","end","start","flex-end","flex-start"],l=["center","flex-end","flex-start","baseline","stretch"],o=["column","column-reverse","row","row-reverse"],d={type:String,default:"",validator:function(t){return!t||n.includes(t)}},u={type:String,default:"",validator:function(t){return!t||l.includes(t)}},c={type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||e.includes(t)}},f=function(t,e){return void 0===e&&(e=null),!!t&&(e?e+":":"")+"has-"+(t="boolean"==typeof t?"md":t)+"-gutters"},g={name:"AsRow",functional:!0,props:{tag:{type:String,default:"div"},justify:d,justifySm:d,justifyMd:d,justifyLg:d,justifyXl:d,align:u,alignSm:u,alignMd:u,alignLg:u,alignXl:u,direction:{type:String,default:"",validator:function(t){return!t||o.includes(t)}},nowrap:Boolean,gutters:c,guttersSm:c,guttersMd:c,guttersLg:c,guttersXl:c},render:function(e,s){var a,r=s.data,i=s.props,n=s.children,l={class:["as-row",(a={},a["is-justify-"+i.justify]=i.justify,a["sm:is-justify-"+i.justifySm]=i.justifySm,a["md:is-justify-"+i.justifyMd]=i.justifyMd,a["lg:is-justify-"+i.justifyLg]=i.justifyLg,a["xl:is-justify-"+i.justifyXl]=i.justifyXl,a["is-align-"+i.align]=i.align,a["sm:is-align-"+i.alignSm]=i.alignSm,a["md:is-align-"+i.alignMd]=i.alignMd,a["lg:is-align-"+i.alignLg]=i.alignLg,a["xl:is-align-"+i.alignXl]=i.alignXl,a["is-direction-"+i.direction]=i.direction,a["is-nowrap"]=i.nowrap,a),f(i.gutters),f(i.guttersSm,"sm"),f(i.guttersMd,"md"),f(i.guttersLg,"lg"),f(i.guttersXl,"xl")]};return e(i.tag,t.mergeData(r,l),n)}},p={type:[Number,String],default:0,validate:function(t){return t=Number(t),isNaN(t)||t>12||t<0}},h={name:"AsCol",functional:!0,props:{tag:{type:String,default:"div"},cols:p,sm:p,md:p,lg:p,xl:p,offset:p,offsetSm:p,offsetMd:p,offsetLg:p,offsetXl:p,first:Boolean,firstSm:Boolean,firstMd:Boolean,firstLg:Boolean,firstXl:Boolean,last:Boolean,lastSm:Boolean,lastMd:Boolean,lastLg:Boolean,lastXl:Boolean},render:function(e,s){var a,r=s.data,i=s.props,n=s.children,l={class:["as-col",(a={},a["is-"+i.cols]=i.cols,a["sm:is-"+i.sm]=i.sm,a["md:is-"+i.md]=i.md,a["lg:is-"+i.lg]=i.lg,a["xl:is-"+i.xl]=i.xl,a["has-offset-"+i.offset]=i.offset,a["sm:has-offset-"+i.offsetSm]=i.offsetSm,a["md:has-offset-"+i.offsetMd]=i.offsetMd,a["lg:has-offset-"+i.offsetLg]=i.offsetLg,a["xl:has-offset-"+i.offsetXl]=i.offsetXl,a["is-first"]=i.first,a["sm:is-first"]=i.firstSm,a["md:is-first"]=i.firstMd,a["lg:is-first"]=i.firstLg,a["xl:is-first"]=i.firstXl,a["is-last"]=i.last,a["sm:is-last"]=i.lastSm,a["md:is-last"]=i.lastMd,a["lg:is-last"]=i.lastLg,a["xl:is-last"]=i.lastXl,a)]};return e(i.tag,t.mergeData(r,l),n)}},m=function(){return(m=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var y={name:"AsCheckbox",inheritAttrs:!1,model:{prop:"checked",event:"input"},props:{tag:{type:String,default:"label"},checked:{type:[Boolean,Array],default:!1},trueValue:{type:[Boolean,Number,String],default:!0},falseValue:{type:[Boolean,Number,String],default:!1},disabled:Boolean,readonly:Boolean,hasError:Boolean,indeterminate:Boolean},computed:{classes:function(){return["as-checkbox",{"is-checked":this.isChecked,"is-disabled":this.disabled,"is-readonly":this.readonly,"has-error":this.hasError}]},isChecked:function(){return Array.isArray(this.checked)?this.checked.includes(this.trueValue):this.checked===this.trueValue}},methods:{onInput:function(t){var e=t.target.checked?this.trueValue:this.falseValue,s=Array.isArray(this.checked)?function(t,e){var s=t.slice();return s.includes(e)?s=s.filter((function(t){return t!==e})):s.push(e),s}(this.checked,e):e;this.$emit("input",s)}},render:function(t){var e=this.tag,s=this.$slots.default,a={staticClass:"as-checkbox-input",attrs:m(m({},this.$attrs),{type:"checkbox",checked:this.isChecked}),on:{input:this.onInput}};return t(e,{class:this.classes},[t("input",a),t("span",{class:"as-checkbox-icon"}),t("span",{class:"as-checkbox-text"},[s])])}},v={AsButton:i,AsRow:g,AsCol:h,AsLoader:r,AsCheckbox:y},x={install:function(t){Object.keys(v).forEach((function(e){t.component(v[e].name,v[e])}))}};exports.AsButton=i,exports.AsCheckbox=y,exports.AsCol=h,exports.AsLoader=r,exports.AsRow=g,exports.default=x;
