(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iydT:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("tyNb"),s=n("fXoL"),a=function(e){return e.landscape="landpage-kazuend-unsplash-cut-sub.jpg",e.portrait="landpage-kazuend-unsplash-portrait-sub.jpg",e}({});const m=[{path:"",component:(()=>{class e{constructor(){this.homeImage=a.landscape}ngOnInit(){this.updateHomeImage()}onResize(){this.updateHomeImage()}updateHomeImage(){const e=this.getHomeImage();this.homeImage!==e&&(this.homeImage=e)}getHomeImage(){return window.innerWidth/window.innerHeight<1?a.portrait:a.landscape}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-home"]],hostBindings:function(e,t){1&e&&s.Xb("resize",(function(e){return t.onResize(e)}),!1,s.lc)},decls:6,vars:1,consts:[[1,"home"],[1,"home--text"],[1,"home--image"],["alt","Home image",3,"src"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"h2"),s.sc(3,"Sky is the limit."),s.Ob(),s.Ob(),s.Pb(4,"div",2),s.Nb(5,"img",3),s.Ob(),s.Ob()),2&e&&(s.Bb(5),s.gc("src","assets/img/",t.homeImage,"",s.nc))},styles:[".home[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.home[_ngcontent-%COMP%]{overflow:hidden;align-items:flex-end}.home--text[_ngcontent-%COMP%]{position:absolute;top:40px;left:30px;color:#efedec}.home--image[_ngcontent-%COMP%]{display:flex;overflow:hidden;align-items:flex-end}.home--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;max-width:100%}"]}),e})()}];let c=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(m)],i.g]}),e})();n.d(t,"HomeModule",(function(){return r}));let r=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[o.c,c]]}),e})()}}]);