webpackJsonp([11],{42:function(t,e,o){"use strict";function n(t,e,o,n,a,l,i,r,d){t.openSideNav=function(t){e(t).toggle()},t.closeSideNav=function(t){e(t).close()},t.currentYear=(new Date).getFullYear(),t.lang=l.lang=i,t.sidenav=l.sidenav=r,t.assetsUrl=c.baseUrl,t.content={fold:o.params.category,category:o.params.category,categoryName:"",item:o.params.item,itemName:""},t.title="",t.titleType=null,t.switchLang=function(t){var e=a.$$url.replace(/\/[^\/]+\//,"/"+t.id+"/");a.replace().path(e)},t.unfold=function(e,o){e.child&&e.child.length&&e.child.length>0&&(t.content.fold===e.id?t.content.fold=null:t.content.fold=e.id)},t.goItem=function(e,n){o.go("root.blog.content",{category:e.id,item:n.id}),t.content={fold:e.id,category:e.id,item:n.id}},t.isSelect=function(e,o){var n=!1;return t.content.item===o.id&&t.content.category===e.id&&(t.content.itemName=o.name,t.content.categoryName=e.name,n=!0),n},t.$on("$stateChangeSuccess",function(e,o,n,a,l){var c=o.name;"root.blog.content"===c?t.titleType="content":t.title="root.blog.home"===c?t.lang.site.home.name:"root.blog.author"===c?t.lang.site.author.title:t.lang.site._404.name,"root.blog.content"!==c&&(t.content={fold:null,category:null,categoryName:"",item:null,itemName:""},t.titleType=null)})}var a=o(0),l=function(t){return t&&t.__esModule?t:{default:t}}(a),c=o(3);n.$inject=["$scope","$mdSidenav","$state","$stateParams","$location","$rootScope","loadLang","loadSidenav","$timeout"],t.exports=l.default.module("blog.root",[]).controller("RootCtrl",n)}});