(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Ayh0:function(e,a,r){"use strict";r.r(a);var t=r("uYI7"),o=r("ke3Z"),s=r("dhqo"),i=r.n(s),n=r("5fFP"),l={head:{title:function(){return{inner:this.form.name||"Loading..."}}},data:function(){return{id:null,parent_id:"",fieldsets:[],matrices:[],matrix:{},form:new o.a({parent_id:0,name:"",handle:"",description:"",type:"collection",fieldset:null,reference_singular:"",reference_plural:"",sidebar:"1",quicklink:"1",icon:"",show_name_field:!0,name_label:"",name_format:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"},!0)}},components:{"shared-form":t.a},methods:{submit:function(){var e=this;""==this.form.reference_singular&&(this.form.reference_singular=i.a.singular(this.form.name)),""==this.form.reference_plural&&(this.form.reference_plural=i()(this.form.name)),this.form.patch("/api/matrices/"+this.id).then((function(a){n.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully updated","success"),e.$router.push("/matrices")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,a,r){axios.all([axios.get("/api/matrices/"+e.params.matrix),axios.get("/api/fieldsets"),axios.get("/api/matrices")]).then(axios.spread((function(e,a,t){r((function(r){r.matrix=e.data.data,r.fieldsets=_.map(a.data.data,(function(e){return{label:e.name,value:e.id}})),r.fieldsets.unshift({label:"None",value:null}),r.matrices=_.map(t.data.data,(function(e){return{label:e.name,value:e.id}})),r.matrices.unshift({label:"None",value:0}),_.remove(r.matrices,(function(a){return a.label==e.data.data.name})),r.id=e.data.data.id,r.form.parent_id=e.data.data.parent_id,r.form.name=e.data.data.name,r.form.handle=e.data.data.handle,r.form.description=e.data.data.description,r.form.type=e.data.data.type,r.form.fieldset=e.data.data.fieldset&&e.data.data.fieldset.id?e.data.data.fieldset.id:null,r.form.reference_singular=e.data.data.reference_singular,r.form.reference_plural=e.data.data.reference_plural,r.form.sidebar=e.data.data.sidebar?"1":"0",r.form.quicklink=e.data.data.quicklink?"1":"0",r.form.icon=e.data.data.icon,r.form.show_name_field=e.data.data.show_name_field,r.form.name_label=e.data.data.name_label,r.form.name_format=e.data.data.name_format,r.form.route=e.data.data.route,r.form.template=e.data.data.template,r.form.revision_control=e.data.data.revision_control?"1":"0",r.form.categorizable=e.data.data.categorizable?"1":"0",r.form.creditable=e.data.data.creditable?"1":"0",r.form.publishable=e.data.data.publishable?"1":"0",r.form.seoable=e.data.data.seoable?"1":"0",r.form.status=e.data.data.status?"1":"0",r.$emit("updateHead"),r.$nextTick((function(){r.form.resetChangeListener()}))}))}))).catch((function(e){r("/matrices"),toast("The requested matrix could not be found","warning")}))}},m=r("KHd+"),u=Object(m.a)(l,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"hashtag"}},[e._v("Edit Matrix")])],1),e._v(" "),r("shared-form",{attrs:{id:e.id,form:e.form,matrix:e.matrix,submit:e.submit,fieldsets:e.fieldsets,matrices:e.matrices}})],1)}),[],!1,null,null,null);a.default=u.exports},dhqo:function(e,a,r){e.exports=function(){var e=[],a=[],r={},t={},o={};function s(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,r){return a[r]||""}))}function l(e,a){return e.replace(a[0],(function(r,t){var o=n(a[1],arguments);return i(""===r?e[t-1]:r,o)}))}function m(e,a,t){if(!e.length||r.hasOwnProperty(e))return a;for(var o=t.length;o--;){var s=t[o];if(s[0].test(a))return l(a,s)}return a}function u(e,a,r){return function(t){var o=t.toLowerCase();return a.hasOwnProperty(o)?i(t,o):e.hasOwnProperty(o)?i(t,e[o]):m(o,t,r)}}function c(e,a,r,t){return function(t){var o=t.toLowerCase();return!!a.hasOwnProperty(o)||!e.hasOwnProperty(o)&&m(o,o,r)===o}}function f(e,a,r){return(r?a+" ":"")+(1===a?f.singular(e):f.plural(e))}return f.plural=u(o,t,e),f.isPlural=c(o,t,e),f.singular=u(t,o,a),f.isSingular=c(t,o,a),f.addPluralRule=function(a,r){e.push([s(a),r])},f.addSingularRule=function(e,r){a.push([s(e),r])},f.addUncountableRule=function(e){"string"!=typeof e?(f.addPluralRule(e,"$0"),f.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},f.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),o[e]=a,t[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return f.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return f.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return f.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(f.addUncountableRule),f}()},uYI7:function(e,a,r){"use strict";var t=r("dhqo"),o=r.n(t),s={props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},matrix:{type:Object,required:!1},submit:{required:!0},fieldsets:{required:!0},matrices:{required:!0}},computed:{singularReference:function(){return o.a.singular(this.form.name)},pluralReference:function(){return o()(this.form.name)}},watch:{"$parent.form.type":function(e){"page"==e&&(this.$parent.form.show_name_field=!0)}}},i=r("KHd+"),n=Object(i.a)(s,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("p-slug",{attrs:{name:"handle",label:"Handle",monospaced:"",autocomplete:"off",required:"",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(a){e.$set(e.form,"handle",a)},expression:"form.handle"}}),e._v(" "),r("p-select",{attrs:{name:"parent_id",label:"Parent Matrix",help:"Should this matrix belong to another?",options:e.matrices,"has-error":e.form.errors.has("parent_id"),"error-message":e.form.errors.get("parent_id")},model:{value:e.form.parent_id,callback:function(a){e.$set(e.form,"parent_id",a)},expression:"form.parent_id"}}),e._v(" "),r("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(a){e.$set(e.form,"status",a)},expression:"form.status"}})],1)]),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your matrix.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(a){e.$set(e.form,"icon",a)},expression:"form.icon"}}),e._v(" "),r("p-toggle",{attrs:{name:"sidebar",label:"Show in Sidebar","true-value":1,"false-value":0},model:{value:e.form.sidebar,callback:function(a){e.$set(e.form,"sidebar",a)},expression:"form.sidebar"}}),e._v(" "),r("p-toggle",{attrs:{name:"quicklink",label:"Show as Quicklink","true-value":1,"false-value":0},model:{value:e.form.quicklink,callback:function(a){e.$set(e.form,"quicklink",a)},expression:"form.quicklink"}}),e._v(" "),"collection"==e.form.type?r("p-toggle",{attrs:{name:"show_name_field",label:"Show name field","true-value":1,"false-value":0},model:{value:e.form.show_name_field,callback:function(a){e.$set(e.form,"show_name_field",a)},expression:"form.show_name_field"}}):e._e()],1)]),e._v(" "),e.matrix?r("p-definition-list",[r("p-definition",{attrs:{name:"Status"}},[r("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.matrix.status,"text-danger-500":!e.matrix.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.matrix.status?"Enabled":"Disabled")+"\n            ")],1),e._v(" "),r("p-definition",{attrs:{name:"Created At"}},[e._v("\n                "+e._s(e.$moment(e.matrix.created_at).format("Y-MM-DD, hh:mm a"))+"\n            ")]),e._v(" "),r("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                "+e._s(e.$moment(e.matrix.updated_at).format("Y-MM-DD, hh:mm a"))+"\n            ")])],1):e._e()]},proxy:!0}])},[r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("router-link",{staticClass:"button",attrs:{to:{name:"matrices"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(a){return a.preventDefault(),e.submit(a)}}},[e._v("Save")])],1)]),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),e._v(" "),r("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this matrix will manage and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(a){e.$set(e.form,"description",a)},expression:"form.description"}}),e._v(" "),r("p-tabs",[r("p-tab",{attrs:{name:"General"}},[r("p-select",{attrs:{name:"type",label:"Type",help:"What type of matrix will this be?",options:[{label:"Collection",value:"collection"},{label:"Page",value:"page"}],"has-error":e.form.errors.has("type"),"error-message":e.form.errors.get("type")},model:{value:e.form.type,callback:function(a){e.$set(e.form,"type",a)},expression:"form.type"}}),e._v(" "),r("p-select",{attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(a){e.$set(e.form,"fieldset",a)},expression:"form.fieldset"}})],1),e._v(" "),r("p-tab",{attrs:{name:"Customize"}},[e.form.show_name_field?r("p-input",{attrs:{name:"name_label",label:"Name Label",placeholder:"Name",help:"If you'd like, you may customize the label used for your entry names.","has-error":e.form.errors.has("name_label"),"error-message":e.form.errors.get("name_label")},model:{value:e.form.name_label,callback:function(a){e.$set(e.form,"name_label",a)},expression:"form.name_label"}}):r("p-input",{attrs:{monospaced:"",name:"name_format",label:"Name Format",help:"What format would you like your generated names and slugs to follow?","has-error":e.form.errors.has("name_format"),"error-message":e.form.errors.get("name_format")},model:{value:e.form.name_format,callback:function(a){e.$set(e.form,"name_format",a)},expression:"form.name_format"}}),e._v(" "),r("p-input",{attrs:{name:"reference_singular",label:"Singular Reference",placeholder:e.singularReference,help:"What would you like to reference this as in singular form? By default will try to guess from the name. Results may vary.","has-error":e.form.errors.has("reference_singular"),"error-message":e.form.errors.get("reference_singular")},model:{value:e.form.reference_singular,callback:function(a){e.$set(e.form,"reference_singular",a)},expression:"form.reference_singular"}}),e._v(" "),r("p-input",{attrs:{name:"reference_plural",label:"Plural Reference",placeholder:e.pluralReference,help:"What would you like to reference this as in plural form? By default will try to guess from the name. Results may vary.","has-error":e.form.errors.has("reference_plural"),"error-message":e.form.errors.get("reference_plural")},model:{value:e.form.reference_plural,callback:function(a){e.$set(e.form,"reference_plural",a)},expression:"form.reference_plural"}})],1),e._v(" "),r("p-tab",{attrs:{name:"Route"}},[r("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(a){e.$set(e.form,"route",a)},expression:"form.route"}}),e._v(" "),r("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(a){e.$set(e.form,"template",a)},expression:"form.template"}})],1)],1)],1)])],1)}),[],!1,null,null,null);a.a=n.exports}}]);