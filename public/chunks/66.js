(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"84Ca":function(t,e,n){"use strict";n.r(e);var s={data:function(){return{theme:{},preview:"",url:""}},computed:{hash:function(){return this.encode(JSON.stringify(this.theme.setting))},previewUrl:function(){return this.baseUrl+this.url+"?preview="+this.hash},baseUrl:function(){return this.setting("site_url")+"/"}},watch:{"theme.setting":{handler:_.debounce(function(t){this.reload()},500),deep:!0},url:{handler:_.debounce(function(t){this.reload()},500)}},methods:{submit:function(){this.theme.setting._method="PATCH",axios.post("/api/themes/".concat(this.theme.slug),this.theme.setting).then(function(){toast("Settings have been updated.","success")})},encode:function(t){return encodeURIComponent(t).replace(/[!'()*]/g,escape)},reload:function(){this.preview=this.previewUrl},reset:function(){this.url="",this.reload()}},beforeRouteEnter:function(t,e,n){axios.all([axios.get("/api/theme")]).then(axios.spread(function(t){n(function(e){e.theme=t.data.data})}))}},a=n("KHd+"),i=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"paint-roller"}},[t._v("Theme")])],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"side-container"},[n("p-card",{staticClass:"mb-6 flex flex-col items-center justify-center"},[n("div",{staticClass:"text-center mb-3"},[t._v("\n                    Your currently set theme is "),n("span",{staticClass:"font-bold"},[t._v(t._s(t.theme.name))]),t._v(".\n                ")]),t._v(" "),n("button",{directives:[{name:"modal",rawName:"v-modal:learn-more",arg:"learn-more"}],staticClass:"button w-full"},[t._v("Learn More")])]),t._v(" "),n("p-card",[n("h3",{staticClass:"font-bold text-lg"},[t._v("Theme Settings")]),t._v(" "),t._l(t.theme.settings,function(e,s){return n(e.fieldtype+"-fieldtype",{key:s,tag:"component",staticClass:"mb-8",attrs:{field:{name:e.name,handle:s,help:e.help,settings:{}}},model:{value:t.theme.setting[s],callback:function(e){t.$set(t.theme.setting,s,e)},expression:"theme.setting[handle]"}})})],2)],1),t._v(" "),n("div",{staticClass:"content-container"},[n("p-card",{attrs:{"no-body":""}},[n("div",{staticClass:"w-full p-2 bg-gray-700 rounded-t flex"},[n("button",{staticClass:"ml-2 mr-4 focus:outline-none focus:bg-gray-800",on:{click:function(e){return e.preventDefault(),t.reload(e)}}},[n("fa-icon",{staticClass:"fa-fw text-white",attrs:{icon:["far","redo"]}})],1),t._v(" "),n("button",{staticClass:"mr-4 focus:outline-none focus:bg-gray-800",on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[n("fa-icon",{staticClass:"fa-fw text-white",attrs:{icon:["far","home"]}})],1),t._v(" "),n("div",{staticClass:"px-6 bg-gray-800 rounded-full text-gray-400 flex flex-1"},[n("span",[t._v(t._s(t.baseUrl))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"flex flex-1 tracking-wide text-white font-bold bg-transparent focus:outline-none",attrs:{type:"text",name:"url"},domProps:{value:t.url},on:{enter:function(e){return e.preventDefault(),t.reload(e)},input:function(e){e.target.composing||(t.url=e.target.value)}}})])]),t._v(" "),t.preview?n("p-frame",{attrs:{src:t.preview,width:"100%",height:"1080px",border:"0"}}):t._e()],1)],1)]),t._v(" "),n("portal",{attrs:{to:"actions"}},[n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"themes.index"}}},[t._v("Browse")]),t._v(" "),n("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save Settings")])],1),t._v(" "),n("portal",{attrs:{to:"modals"}},[n("p-modal",{attrs:{name:"learn-more",large:"","no-header":""}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"font-bold text-5xl mb-2 leading-none"},[t._v(t._s(t.theme.name))]),t._v(" "),n("h3",{staticClass:"text-sm font-semibold text-gray-800"},[t._v("v"+t._s(t.theme.version)+", "+t._s(t.theme.author))]),t._v(" "),n("p",[t._v(t._s(t.theme.description))])])])],1)],1)},[],!1,null,null,null);e.default=i.exports}}]);