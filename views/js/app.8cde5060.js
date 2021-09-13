(function(t){function e(e){for(var r,s,o=e[0],i=e[1],d=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(f.length)f.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(l.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},l=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=i;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b25":function(t,e,n){},5064:function(t,e,n){"use strict";n("3b25")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("bc3a"),l=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),d={},c=Object(i["a"])(d,s,o,!1,null,null,null),u=c.exports,f=(n("a766"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 rounded bg-300 mx-6 lg:mx-36"},[n("div",{staticClass:"flex flex-row ml-8 pt-5"},[n("button",{staticClass:"modal-open bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded",on:{click:function(e){return t.triggerModal("add")}}},[t._v("Add new client")])]),n("div",{staticClass:"container"},[n("h1",{staticClass:"font-bold text-center text-2xl"},[t._v("Clients")]),n("table",{staticClass:" ml-9 w-11/12 flex flex-col flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"},[t._m(0),t._l(t.clients,(function(e){return n("tbody",{key:e._id,staticClass:"flex-1 sm:flex-none"},[n("tr",{staticClass:"flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"},[n("td",{staticClass:"border-grey-light border hover:bg-gray-100 p-3"},[t._v(t._s(e.name))]),n("td",{staticClass:"border-grey-light border hover:bg-gray-100 p-3 truncate"},[t._v(t._s(e.email))]),n("td",{staticClass:"border-grey-light border hover:bg-gray-100 p-3 truncate"},[t._v(t._s(e.phone))]),n("td",{staticClass:"border-grey-light border hover:bg-gray-100 p-3 truncate"},[t._v(t._s(e.providers))]),n("td",{staticClass:"border-grey-light border hover:bg-gray-100 p-3 truncate"},[n("button",{staticClass:"bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded",on:{click:function(n){return t.triggerModal("edit",e._id)}}},[t._v("Edit")]),n("button",{staticClass:"bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 ml-2 rounded",on:{click:function(n){return t.promptDelete(e._id)}}},[t._v("Delete")])])])])}))],2)]),n("div",{staticClass:"modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"},[n("div",{staticClass:"modal-overlay absolute w-full h-full bg-gray-900 opacity-50"}),n("div",{staticClass:"modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},[n("div",{staticClass:"modal-content py-4 text-left px-6"},[n("div",{staticClass:"flex justify-between items-center pb-3"},[n("p",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.modalTitle))])]),n("hr"),n("div",[t.clientAdded?n("div",{staticClass:"bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-green-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(1)])]):t._e(),t.noClientAdded?n("div",{staticClass:"bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-red-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(2)])]):t._e()]),n("div",{staticClass:"mt-5 mb-5"},[n("form",[n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"name"}},[t._v("Name: ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"name"}},[t._v("Email: ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text",name:"name"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"name"}},[t._v("Phone: ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],attrs:{type:"text",name:"name"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})]),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"name"}},[t._v("Providers: ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.provider,expression:"provider"}],attrs:{type:"text",name:"name"},domProps:{value:t.provider},on:{input:function(e){e.target.composing||(t.provider=e.target.value)}}}),n("button",{staticClass:"ml-2 bg-green-500 p-1 rounded-lg text-white hover:bg-green-400",on:{click:function(e){return t.addNewProvider()}}},[t._v(" Add Provider")])]),n("div",{staticClass:"w-60 form-group providers mb-3"},[n("div",{staticClass:"grid ml-2 mt-2 mb-2"},t._l(t.providers,(function(e){return n("div",{key:e.id,staticClass:"flex flex-row gap-x-4 gap-y-2"},[n("input",{staticClass:"mt-1",attrs:{type:"checkbox",id:"check"},domProps:{value:e.id},on:{click:function(n){return t.getcheckboxval(e.id,e.name)}}}),n("span",{staticClass:"text-sm w-32"},[t._v(t._s(e.name))]),n("div",[n("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M 12.03125 2.023438 C 11.535156 2.023438 11.066406 2.269531 10.675781 2.65625 L 2.5625 10.726563 L 1.207031 14.785156 L 5.265625 13.433594 L 5.351563 13.351563 L 13.386719 5.367188 C 13.773438 4.976563 14.015625 4.507813 14.015625 4.011719 C 14.015625 3.515625 13.773438 3.046875 13.386719 2.65625 C 12.996094 2.269531 12.527344 2.023438 12.03125 2.023438 Z M 10.027344 4.710938 L 11.320313 6.007813 L 4.726563 12.5625 L 2.789063 13.207031 L 3.4375 11.265625 Z"}})])]),n("div",[n("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"}})])])])})),0)])])]),n("hr"),n("div",{staticClass:"flex justify-end pt-2"},[n("button",{staticClass:"px-4 bg-red p-3 rounded-lg bg-red-500 hover:bg-red-100 hover:text-white-400 mr-2",on:{click:t.closeModalOfAddClient}},[t._v("Cancel")]),t.add?n("button",{staticClass:"modal-close px-4 bg-green-500 p-3 rounded-lg text-white hover:bg-green-400",on:{click:function(e){return e.preventDefault(),t.addClient.apply(null,arguments)}}},[t._v("Add Client")]):n("button",{staticClass:"modal-close px-4 bg-green-500 p-3 rounded-lg text-white hover:bg-green-400",on:{click:function(e){return e.preventDefault(),t.updateClient.apply(null,arguments)}}},[t._v("Update Client")])])])])]),n("div",{staticClass:"modal2 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"},[n("div",{staticClass:"modal-overlay absolute w-full h-full bg-gray-900 opacity-50"}),n("div",{staticClass:"modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},[n("div",{staticClass:"modal-content py-4 text-left px-6"},[t._m(3),n("hr"),n("div",[t.clientAdded?n("div",{staticClass:"bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-green-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(4)])]):t._e(),t.noClientAdded?n("div",{staticClass:"bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-red-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(5)])]):t._e()]),t._m(6),n("hr"),n("div",{staticClass:"flex justify-end pt-2"},[n("button",{staticClass:"px-4 bg-red p-3 rounded-lg bg-red-500 hover:bg-red-100 hover:text-white-400 mr-2",on:{click:t.closeModalOfDeleteClient}},[t._v("Cancel")]),n("button",{staticClass:"modal-close px-4 bg-green-500 p-3 rounded-lg text-white hover:bg-green-400",on:{click:function(e){return e.preventDefault(),t.deleteClient.apply(null,arguments)}}},[t._v("Delete Client")])])])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"text-green"},[n("tr",{staticClass:"bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"},[n("th",{staticClass:"p-3 text-left"},[t._v("Name")]),n("th",{staticClass:"p-3 text-left"},[t._v("Email")]),n("th",{staticClass:"p-3 text-left"},[t._v("Phone")]),n("th",{staticClass:"p-3 text-left"},[t._v("Providers")]),n("th",{staticClass:"p-3 text-left",attrs:{width:"110px"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-bold"},[t._v("Client added successfully")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-bold"},[t._v("Unable to add client")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center pb-3"},[n("p",{staticClass:"text-2xl font-bold"},[t._v("Delete Client")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-bold"},[t._v("Client deleted successfully")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-bold"},[t._v("Unable to delete client")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5 mb-5"},[n("h2",{staticClass:"text-center"},[t._v("Are you sure you want to delete Client ?")])])}],m={name:"Home",data:function(){return{modalTitle:"",providers:[],clients:[],form:{name:"",email:"",phone:"",providers:[]},clientAdded:!1,noClientAdded:!1,selectedClientId:"",add:!0,provider:""}},methods:{triggerModal:function(t,e){"add"===t?(this.add=!0,this.modalTitle="New Client",this.toggleModal()):(this.add=!1,this.selectedClientId=e,this.getOneClientDetails(e),this.modalTitle="Edit Client",this.toggleModal())},triggerDeleteModal:function(){this.toggleDeleteModal()},closeModalOfAddClient:function(){this.form={},this.toggleModal()},closeModalOfDeleteClient:function(){this.toggleDeleteModal()},toggleModal:function(){var t=document.querySelector("body"),e=document.querySelector(".modal");e.classList.toggle("opacity-0"),e.classList.toggle("pointer-events-none"),t.classList.toggle("modal-active")},toggleDeleteModal:function(){var t=document.querySelector("body"),e=document.querySelector(".modal2");e.classList.toggle("opacity-0"),e.classList.toggle("pointer-events-none"),t.classList.toggle("modal-active")},fetchProviders:function(){var t=this;l.a.get("/get-providers").then((function(e){t.providers=e.data.response})).catch((function(){t.providers=[]}))},getcheckboxval:function(t,e){var n={id:t,name:e};this.form.providers.push(n)},addClient:function(){var t=this;l.a.post("/create-client",this.form).then((function(){t.clientAdded=!0,t.fetchClients(),setTimeout((function(){t.clientAdded=!1}),2e3)})).catch((function(){t.noClientAdded=!0,setTimeout((function(){t.noClientAdded=!1}),2e3)}))},fetchClients:function(){var t=this;l.a.get("/clients").then((function(e){t.clients=e.data.arr})).catch((function(t){console.log(t)}))},promptDelete:function(t){this.selectedClientId=t,this.triggerDeleteModal()},deleteClient:function(){var t=this;l.a.delete("/clients/".concat(this.selectedClientId)).then((function(){t.clientAdded=!0,t.fetchClients(),setTimeout((function(){t.clientAdded=!1}),2e3)})).catch((function(){t.noClientAdded=!0,setTimeout((function(){t.noClientAdded=!1}),2e3)}))},getOneClientDetails:function(t){var e=this;l.a.get("/clients/".concat(t)).then((function(t){e.form=t.data.arr[0],e.form.providers=[]})).catch((function(t){console.log(t)}))},updateClient:function(){var t=this;l.a.patch("/clients/".concat(this.selectedClientId),this.form).then((function(){alert("Client details updated successfully"),t.form={},t.fetchClients()})).catch((function(){alert("Unable to update details")}))},addNewProvider:function(){alert(this.provider)}},mounted:function(){this.fetchProviders(),this.fetchClients()}},g=m,h=(n("5064"),Object(i["a"])(g,v,p,!1,null,"06fadbf9",null)),b=h.exports;r["a"].use(f["a"]);var C=[{path:"/",name:"Home",component:b}],x=new f["a"]({mode:"history",base:"/",routes:C}),w=x;r["a"].config.productionTip=!1,r["a"].use(l.a),l.a.defaults.baseURL="http://localhost:2000/v1/api",l.a.defaults.headers.common["Content-Type"]="application/json",new r["a"]({router:w,render:function(t){return t(u)}}).$mount("#app")},a766:function(t,e,n){}});
//# sourceMappingURL=app.8cde5060.js.map