(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{nUfQ:function(e,t,r){"use strict";r.r(t);var s=r("L2JU");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={head:{title:function(){return{inner:"Users"}}},data:function(){return{roles:[],role:this.$route.params.role||null}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(s.c)({user:"user/getUser"}),{filteredRoles:function(){return _.filter(this.roles,(function(e){return"guest"!==e.slug}))},endpoint:function(){return this.role?"/datatable/users/"+this.role:"/datatable/users"}}),watch:{$route:function(e,t){this.role=e.params.role||null}},beforeRouteEnter:function(e,t,r){axios.get("/api/roles").then((function(e){r((function(t){return t.setRoles(e.data.data)}))})).catch((function(e){r((function(t){return t.setError(e)}))}))},methods:{setRoles:function(e){this.roles=e},setError:function(e){console.log(e)},destroy:function(e){axios.delete("/api/users/"+e).then((function(e){toast("User successfully deleted.","success"),proton().$emit("refresh-datatable-users")}))}}},i=r("KHd+"),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"users"}},[e._v("Users")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button",attrs:{to:{name:"users.create"}}},[e._v("Create User")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"side-container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("div",{staticClass:"list"},[r("router-link",{staticClass:"list--item",attrs:{to:{name:"users"},exact:""}},[e._v("All Users")]),e._v(" "),r("span",{staticClass:"list--separator"},[e._v("Roles")]),e._v(" "),e._l(e.filteredRoles,(function(t){return r("router-link",{key:t.id,staticClass:"list--item",attrs:{to:{name:"users.role",params:{role:t.slug}},exact:""}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}))],2)])])]),e._v(" "),r("div",{staticClass:"content-container"},[r("p-table",{key:"users_table",attrs:{id:"users",endpoint:e.endpoint,"sort-by":"name"},scopedSlots:e._u([{key:"name",fn:function(t){return[r("router-link",{attrs:{to:{name:"users.edit",params:{user:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"email",fn:function(t){return[e._v("\n                    "+e._s(t.record.email)+"\n                ")]}},{key:"role",fn:function(t){return[r("span",{staticClass:"badge"},[e._v(e._s(t.record.role.name))])]}},{key:"actions",fn:function(t){return[r("p-actions",{key:"user_"+t.record.id+"_actions",attrs:{id:"user_"+t.record.id+"_actions"}},[r("p-dropdown-link",{attrs:{to:{name:"users.edit",params:{user:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),t.record.id!=e.user.id?r("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-user",value:t.record,expression:"table.record",arg:"delete-user"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)]),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("p-modal",{attrs:{name:"delete-user",title:"Delete User"},scopedSlots:e._u([{key:"footer",fn:function(t){return[r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}]},[e._v("Cancel")])]}}])},[r("p",[e._v("Are you sure you want to permenantly delete this user?")])])],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);