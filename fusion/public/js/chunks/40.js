(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{MwC5:function(e,t,a){"use strict";a.r(t);var i=a("dhqo"),o=a.n(i),n={head:{title:function(){return{inner:this.collection.name}}},data:function(){return{collection:{}}},computed:{endpoint:function(){return this.collection.id?"/datatable/collections/"+this.collection.id:null},singular:function(){return this.collection.name?o.a.singular(this.collection.name):""}},methods:{destroy:function(e){axios.delete("/api/collections/"+this.collection.slug+"/"+e).then((function(e){toast("Entry successfully deleted.","success"),proton().$emit("refresh-datatable-entries")}))}},beforeRouteEnter:function(e,t,a){axios.get("/api/matrices/slug/"+e.params.collection).then((function(e){a((function(t){t.collection=e.data.data,t.$emit("updateHead")}))})).catch((function(e){a("/"),toast("The requested collection could not be found","warning")}))},beforeRouteUpdate:function(e,t,a){var i=this;axios.get("/api/matrices/slug/"+e.params.collection).then((function(e){i.collection=e.data.data,i.$emit("updateHead")})),a()}},r=a("KHd+"),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:e.collection.icon||"pencil-alt"}},[e._v(e._s(e.collection.name))])],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[e.collection.slug?a("router-link",{staticClass:"button",attrs:{to:{name:"entries.create",params:{collection:e.collection.slug}}}},[e._v("Create "+e._s(e.collection.reference_singular))]):e._e()],1),e._v(" "),e.endpoint?a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-table",{key:e.collection.handle+"_table",attrs:{id:"entries",endpoint:e.endpoint,"sort-by":"name","per-page":10},scopedSlots:e._u([{key:"name",fn:function(t){return[a("p-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),a("router-link",{attrs:{to:{name:"entries.edit",params:{collection:e.collection.slug,id:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"slug",fn:function(t){return[a("code",[e._v(e._s(t.record.slug))])]}},{key:"actions",fn:function(t){return[a("p-actions",{key:"entry_"+t.record.id+"_actions",attrs:{id:"entry_"+t.record.id+"_actions"}},[a("p-dropdown-link",{attrs:{to:{name:"entries.edit",params:{collection:e.collection.slug,id:t.record.id}}}},[e._v("Edit")]),e._v(" "),a("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-entry",value:t.record,expression:"table.record",arg:"delete-entry"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")])],1)]}}],null,!1,895774133)})],1)]):e._e(),e._v(" "),a("portal",{attrs:{to:"modals"}},[a("p-modal",{key:"delete_entry",attrs:{name:"delete-entry",title:"Delete Entry"},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-entry",arg:"delete-entry"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-entry",arg:"delete-entry"}]},[e._v("Cancel")])]}}])},[a("p",[e._v("Are you sure you want to permenantly delete this entry?")])])],1)],1)}),[],!1,null,null,null);t.default=s.exports},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},i={},o={};function n(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,i){var o=s(t[1],arguments);return r(""===a?e[i-1]:a,o)}))}function c(e,t,i){if(!e.length||a.hasOwnProperty(e))return t;for(var o=i.length;o--;){var n=i[o];if(n[0].test(t))return l(t,n)}return t}function u(e,t,a){return function(i){var o=i.toLowerCase();return t.hasOwnProperty(o)?r(i,o):e.hasOwnProperty(o)?r(i,e[o]):c(o,i,a)}}function d(e,t,a,i){return function(i){var o=i.toLowerCase();return!!t.hasOwnProperty(o)||!e.hasOwnProperty(o)&&c(o,o,a)===o}}function m(e,t,a){return(a?t+" ":"")+(1===t?m.singular(e):m.plural(e))}return m.plural=u(o,i,e),m.isPlural=d(o,i,e),m.singular=u(i,o,t),m.isSingular=d(i,o,t),m.addPluralRule=function(t,a){e.push([n(t),a])},m.addSingularRule=function(e,a){t.push([n(e),a])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},m.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),o[e]=t,i[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return m.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return m.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return m.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}()}}]);