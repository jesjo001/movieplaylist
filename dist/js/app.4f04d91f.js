(function(e){function t(t){for(var n,o,l=t[0],i=t[1],u=t[2],b=0,p=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0907":function(e,t,a){"use strict";a("0a70")},"0a70":function(e,t,a){},"10fd":function(e,t,a){},cd40:function(e,t,a){"use strict";a("f1c1")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"app"},c=Object(n["h"])("div",{class:"userArea"},[Object(n["h"])("h2",{class:"text-light"},"Movie List")],-1),o={class:"navContainer"},l={class:"ulist"},i=Object(n["h"])("button",{class:"btn btn-outline-success",type:"submit"},"Search",-1),u={class:"navContainer"},s=Object(n["h"])("div",{class:"sideTitle"}," Sort By",-1),b={class:"ulist"},p=Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#"},"Favorite")],-1),v={class:"main"},d={class:"navbar navbar-expand-md navbar-dark bg-dark mb-4 topNav",id:"topNav2"},f={class:"container-fluid"},h=Object(n["h"])("a",{class:"navbar-brand",href:"#"},"Movie List",-1),j=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),O={class:"collapse navbar-collapse",id:"navbarScroll"},g={class:"navbar-nav me-auto my-2 my-lg-0",style:{"--bs-scroll-height":"100px"}},m=Object(n["h"])("li",{class:"nav-item"},[Object(n["h"])("a",{class:"nav-link active","aria-current":"page",href:"/"},"Home")],-1),y={class:"nav-item"},k={class:"nav-item"},w=Object(n["h"])("button",{class:"btn btn-outline-success",type:"submit"},"Search",-1),T={class:"pagination",id:"sectionColor"};function S(e,t,a,S,C,x){var P=Object(n["q"])("MovieList"),A=Object(n["q"])("VueTailwindPagination");return Object(n["l"])(),Object(n["g"])("div",r,[Object(n["h"])("header",null,[c,Object(n["h"])("div",o,[Object(n["h"])("ul",l,[Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[0]||(t[0]=function(){return e.getAll&&e.getAll.apply(e,arguments)})},"All")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[1]||(t[1]=function(){return e.showFavourites&&e.showFavourites.apply(e,arguments)})},"Favorite")])]),Object(n["h"])("form",{class:"d-flex flex-column px-4",onSubmit:t[3]||(t[3]=Object(n["v"])((function(){return e.searchApi&&e.searchApi.apply(e,arguments)}),["prevent"]))},[Object(n["u"])(Object(n["h"])("input",{class:"form-control me-2 mb-4",type:"search",placeholder:"Search","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.searchTerm=t}),"aria-label":"Search"},null,512),[[n["s"],e.searchTerm]]),i],32)]),Object(n["h"])("div",u,[s,Object(n["h"])("ul",b,[Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[4]||(t[4]=function(t){return e.handleClick("Title")})},"Title")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[5]||(t[5]=function(t){return e.handleClick("Year")})},"Year")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[6]||(t[6]=function(t){return e.handleClick("imdbID")})},"imdbID")]),p])])]),Object(n["h"])("div",v,[Object(n["h"])("nav",d,[Object(n["h"])("div",f,[h,j,Object(n["h"])("div",O,[Object(n["h"])("ul",g,[m,Object(n["h"])("li",y,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[7]||(t[7]=function(){return e.getAll&&e.getAll.apply(e,arguments)})},"All")]),Object(n["h"])("li",k,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[8]||(t[8]=function(){return e.showFavourites&&e.showFavourites.apply(e,arguments)})},"Favourite")])]),Object(n["h"])("form",{class:"d-flex",onSubmit:t[10]||(t[10]=Object(n["v"])((function(){return e.searchApi&&e.searchApi.apply(e,arguments)}),["prevent"]))},[Object(n["u"])(Object(n["h"])("input",{class:"form-control me-2",type:"search",placeholder:"Search","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.searchTerm=t}),"aria-label":"Search"},null,512),[[n["s"],e.searchTerm]]),w],32)])])]),Object(n["j"])(P,{movies:e.movies,order:e.order,page:e.page,favourite:e.favourite},null,8,["movies","order","page","favourite"]),Object(n["h"])("div",T,[Object(n["j"])(A,{current:e.page,total:e.totalPages,"per-page":e.perPage,onPageChanged:t[11]||(t[11]=function(t){return e.getpaginated(t)})},null,8,["current","total","per-page"])])])])}var C=a("2909"),x=(a("fb6a"),a("f361")),P=a.n(x),A=function(e){return Object(n["n"])("data-v-3b2a8d0a"),e=e(),Object(n["m"])(),e},M=["onClick"],_=A((function(){return Object(n["h"])("img",{src:P.a},null,-1)})),F=A((function(){return Object(n["h"])("b",{class:"text-light"},"Title: ",-1)})),I=A((function(){return Object(n["h"])("b",{class:"text-light"},"imdbID:",-1)})),D=A((function(){return Object(n["h"])("p",null,"Loading movies...",-1)}));function L(e,t,a,r,c,o){return e.movies.length?(Object(n["l"])(),Object(n["e"])(n["b"],{key:0,name:"list",tag:"div",class:"row movieContainer justify-content-center"},{default:Object(n["t"])((function(){return[(Object(n["l"])(!0),Object(n["g"])(n["a"],null,Object(n["p"])(e.orderedMovies,(function(t){return Object(n["l"])(),Object(n["g"])("div",{class:"col-sm-6 col-md-4 col-lg-3 my-5 mx-auto",key:t.imdbID,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Click to add to favourite list"},[Object(n["h"])("section",{onClick:function(a){return e.saveFavourite(t)}},[_,Object(n["h"])("span",null,Object(n["r"])(t.Year),1),Object(n["h"])("h3",null,[F,Object(n["i"])(Object(n["r"])(t.Title.slice(0,25)),1)]),Object(n["h"])("h3",null,[I,Object(n["i"])(" "+Object(n["r"])(t.imdbID),1)])],8,M)])})),128))]})),_:1})):(Object(n["l"])(),Object(n["e"])(n["b"],{key:1,name:"list",tag:"div",class:"row movieContainer justify-content-center"},{default:Object(n["t"])((function(){return[D]})),_:1}))}a("a9e3"),a("4e82"),a("4de4"),a("d3b7"),a("e9c4"),a("84a7");var q=Object(n["k"])({name:"MovieList",components:{},props:{movies:{required:!0,type:Array},order:{required:!0,type:String},page:{required:!0,type:Number},favourite:{required:!0,type:Boolean}},setup:function(e){var t=Object(n["o"])([]),a=Object(n["c"])((function(){if(1==e.favourite){var a=Object(C["a"])(t.value);return Object(C["a"])(a).sort((function(t,a){return t[e.order]>a[e.order]?1:-1}))}return Object(C["a"])(e.movies).sort((function(t,a){return t[e.order]>a[e.order]?1:-1}))})),r=function(e){var a=t.value.filter((function(t){return t.imdbID==e.imdbID}));if(a.length<1)t.value.push(e);else{var n=t.value.filter((function(t){return t.imdbID!==e.imdbID}));t.value=Object(C["a"])(n)}localStorage.favourite=JSON.stringify(t.value)};return{orderedMovies:a,saveFavourite:r,favouriteMovies:t}},mounted:function(){localStorage.favourite&&(this.favouriteMovies=JSON.parse(localStorage.favourite))}}),N=(a("0907"),a("6b0d")),J=a.n(N);const V=J()(q,[["render",L],["__scopeId","data-v-3b2a8d0a"]]);var U=V,Y=a("a242"),B=(a("99af"),a("bc3a")),H=a.n(B),R=H.a.create({baseURL:"https://jsonmock.hackerrank.com/api/movies",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),z={getMovies:function(){return R.get("/")},searchTitle:function(e,t){return R.get("/search/?Title=".concat(e,"&page=").concat(t))},getPaginated:function(e){return R.get("/?page=".concat(e))}},E=Object(n["k"])({name:"App",components:{MovieList:U,VueTailwindPagination:Y["a"]},props:{},setup:function(){var e=Object(n["o"])([]),t=Object(n["o"])("Title"),a=Object(n["o"])(""),r=Object(n["o"])(!1),c=Object(n["o"])(1),o=Object(n["o"])(10),l=(Object(n["o"])(10),function(e){t.value=e}),i=function(){r.value=!r.value},u=function(e){s(a.value,c.value)},s=function(t,n){r.value=!1,e.value=[],z.searchTitle(t,n).then((function(t){e.value=Object(C["a"])(t.data.data),n=t.data.page,o.value=t.data.total_pages,a.value=""})).catch((function(e){console.log("There was an error",e.response)}))},b=function(){r.value=!1,e.value=[],z.getPaginated(c).then((function(t){e.value=Object(C["a"])(t.data.data),a.value="",c.value=t.data.page})).catch((function(e){console.log("There was an error",e.response)}))},p=function(t){z.getPaginated(t).then((function(t){e.value=Object(C["a"])(t.data.data),a.value="",c.value=t.data.page})).catch((function(e){console.log("There was an error",e.response)}))};return{movies:e,handleClick:l,favourite:r,searchApi:u,order:t,searchTerm:a,page:c,totalPages:o,getAll:b,getpaginated:p,showFavourites:i}},mounted:function(){var e=this;z.getMovies().then((function(t){console.log(t.data),e.movies=Object(C["a"])(t.data.data),e.page=t.data.page,e.totalPages=t.data.total_pages,console.log("movei ",e.movies),console.log("page ",e.page),console.log("total page ",e.totalPages)})).catch((function(e){console.log("There was an error",e.response)}))}});a("cd40");const G=J()(E,[["render",S]]);var K=G;a("10fd"),a("f9e3"),a("2dd8");Object(n["d"])(K).mount("#app")},f1c1:function(e,t,a){},f361:function(e,t,a){e.exports=a.p+"img/ade5.d1ab0dc6.jpg"}});
//# sourceMappingURL=app.4f04d91f.js.map