webpackJsonp([148],{EGoI:function(n,t,a){t=n.exports=a("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ZRFF:function(n,t,a){"use strict";function e(n){a("tb6I")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("hRKE"),o=a.n(s),i=a("lcoF"),l=a("2sCs"),r=a.n(l),c=(a("x1ym"),{mixins:[i.a],data:function(){return{params:{},map:[],rules:{}}},methods:{add:function(){var n={key:"",value:""};this.map.push(n)},del:function(n){this.map.splice(n,1)},getPath:function(n){this.dataInfo.imagePath=n},getDataInfo:function(){var n=this,t=this.$api;r.a.all([r.a.post(t.apiSSOGet)]).then(r.a.spread(function(t){n.dataInfo=t.body,n.map=t.body.attrs,n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){for(var n in this.dataInfo.attrs){var t="attr_sso_"+(n+1);this.dataInfo[t]=this.dataInfo.attrs[n].value}for(var a in this.dataInfo)"object"==o()(this.dataInfo[a])&&delete this.dataInfo[a];this.updateDataInfo(this.$api.apiSSOupdate,this.dataInfo,"")},updateDataInfo:function(n,t,a){var e=this;this.$refs.form.validate(function(s){if(!s)return!1;e.loading=!0,r.a.post(n,t).then(function(n){if(e.loading=!1,"200"==n.code){if(e.successMessage("修改成功"),e.getDataInfo(),""==a)return!1;setTimeout(function(){e.routerLink(a)},1e3)}}).catch(function(n){e.loading=!1})})}},created:function(){this.getDataInfo()}}),f=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},nativeOn:{click:function(t){return n.add(t)}}},[n._v("添加")])],1),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-100",attrs:{label:"是否开启单点登录",prop:"attr_ssoEnable"}},[a("el-radio",{attrs:{label:!0},model:{value:n.dataInfo.attr_ssoEnable,callback:function(t){n.$set(n.dataInfo,"attr_ssoEnable",t)},expression:"dataInfo.attr_ssoEnable"}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1},model:{value:n.dataInfo.attr_ssoEnable,callback:function(t){n.$set(n.dataInfo,"attr_ssoEnable",t)},expression:"dataInfo.attr_ssoEnable"}},[n._v("否")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"认证地址",prop:"attrs"}},n._l(n.dataInfo.attrs,function(t,e){return a("span",{key:e},[a("el-input",{staticClass:"cms-width",staticStyle:{"margin-bottom":"22px"},model:{value:t.value,callback:function(a){n.$set(t,"value",a)},expression:"item.value"}}),n._v(" "),a("cms-button",{attrs:{type:"delete"},nativeOn:{click:function(t){n.del(e)}}})],1)})),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiSSOupdate",expression:"'/apiManage/apiSSOupdate'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},d=[],u={render:f,staticRenderFns:d},p=u,m=a("Z0/y"),v=e,h=m(c,p,!1,v,null,null);t.default=h.exports},tb6I:function(n,t,a){var e=a("EGoI");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("FIqI")("0093fbfb",e,!0,{})}});