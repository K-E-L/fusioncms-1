(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{KyKy:function(t,e,n){"use strict";var s={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0},submit:{required:!0}},computed:{sections:function(){var t=[],e=[];return this.collection.fieldset&&(t=_.filter(this.collection.fieldset.sections,(function(t){return"body"==t.placement})),e=_.filter(this.collection.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}}},a=n("KHd+"),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[n("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",watch:t.form.name,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}),t._v(" "),n("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),t._l(t.sections.sidebar,(function(e){return n("div",{key:e.handle,staticClass:"card"},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"card__title"},[t._v(t._s(e.name))]),t._v(" "),e.description?n("p",{staticClass:"card__subtitle"},[t._v(t._s(e.description))]):t._e()]),t._v(" "),n("div",{staticClass:"card__body"},t._l(e.fields,(function(e){return n(e.type.id+"-fieldtype",{key:e.handle,tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})})),1)])})),t._v(" "),t.entry?n("p-definition-list",[n("p-definition",{attrs:{name:"Status"}},[n("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":t.entry.status,"text-danger-500":!t.entry.status},attrs:{icon:["fas","circle"]}}),t._v(" "+t._s(t.entry.status?"Enabled":"Disabled")+"\n            ")],1),t._v(" "),n("p-definition",{attrs:{name:"Created At"}},[t._v("\n                "+t._s(t.$moment(t.entry.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),t._v(" "),n("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                "+t._s(t.$moment(t.entry.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):t._e()]},proxy:!0}])},[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[t.collection.slug?n("router-link",{staticClass:"button",attrs:{to:{name:"entries.index",params:{collection:t.collection.slug}}}},[t._v("Go Back")]):t._e(),t._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[t.collection.show_name_field?n("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}):t._e(),t._v(" "),t.sections.body.length>0?n("p-tabs",t._l(t.sections.body,(function(e){return n("p-tab",{key:e.handle,attrs:{name:e.name}},t._l(e.fields,(function(e){return n("div",{key:e.handle,staticClass:"form__group"},[n(e.type.id+"-fieldtype",{tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})],1)})),0)})),1):n("div",{staticClass:"text-center"},[n("p",[t._v("Things are looking a little empty here!")]),t._v(" "),n("router-link",{staticClass:"button",attrs:{to:"/matrices/"+t.collection.id+"/edit"}},[t._v("Configure your collection")])],1)],1)])],1)}),[],!1,null,null,null);e.a=o.exports},MxYC:function(t,e,n){"use strict";n.r(e),n.d(e,"getEntry",(function(){return a}));var s=n("ke3Z");function a(t,e,n){axios.get("/api/collections/"+t+"/"+e).then((function(t){var e=t.data.data.matrix,s=t.data.data.entry,a={name:s.name,slug:s.slug,status:s.status};e.fieldset&&_.forEach(e.fieldset.sections,(function(t){_.forEach(t.fields,(function(t){a[t.handle]=s[t.handle]}))})),n(null,s,e,a)})).catch((function(t){n(new Error("The requested entry could not be found"))}))}var o={head:{title:function(){return{inner:this.entry.name||"Loading..."}}},data:function(){return{collection:{},entry:{},form:new s.a({})}},components:{"shared-form":n("KyKy").a},methods:{submit:function(){var t=this;this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(e){toast("Entry saved successfully","success"),t.$router.push("/collections/"+t.collection.slug)})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,e,n){a(t.params.collection,t.params.id,(function(t,e,a,o){n(t?function(e){e.$router.push("/collections/"+e.$router.currentRoute.params.collection),toast(t.toString(),"danger")}:function(t){t.collection=a,t.entry=e,t.form=new s.a(o,!0),t.$emit("updateHead"),t.form.resetChangeListener()})}))},beforeRouteUpdate:function(t,e,n){var o=this;a(t.params.collection,t.params.id,(function(t,e,n,a){t?(o.$router.push("/collections/"+o.$router.currentRoute.params.collection),toast(t.toString(),"danger")):(o.collection=n,o.entry=e,o.form=new s.a(a,!0),o.$emit("updateHead"),o.form.resetChangeListener())})),n()}},r=n("KHd+"),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:t.collection.icon||"pencil-alt"}},[t._v("Edit "+t._s(t.collection.reference_singular))])],1),t._v(" "),n("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.collection.description))]),t._v(" "),n("shared-form",{attrs:{form:t.form,submit:t.submit,entry:t.entry,collection:t.collection}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);