/* Bootstrap v4.1.1 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function h(r){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},e=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=s[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var r,n,s,a,l,u,f,d,_,g,m,p,v,E,y,T,C,I,A,D,b,S,w,N,O,k,P,L,j,R,H,W,M,x,U,K,F,V,Q,B,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,st,ot,at,lt,ht,ct,ut,ft,dt,_t,gt,mt,pt,vt,Et,yt,Tt,Ct,It,At,Dt,bt,St,wt,Nt,Ot,kt,Pt,Lt,jt,Rt,Ht,Wt,Mt,xt,Ut,Kt,Ft,Vt,Qt,Bt,Yt,Gt,qt,zt,Xt,Jt,Zt,$t,te,ee,ne,ie,re,se,oe,ae,le,he,ce,ue,fe,de,_e,ge,me,pe,ve,Ee,ye,Te,Ce,Ie,Ae,De,be,Se,we,Ne,Oe,ke,Pe,Le,je,Re,He,We,Me,xe,Ue,Ke,Fe,Ve,Qe,Be,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,sn,on,an,ln,hn,cn,un,fn,dn,_n,gn,mn,pn,vn,En,yn,Tn,Cn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],s=e[i],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),In=(n="alert",a="."+(s="bs.alert"),l=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,s),this._element=null},t._getRootElement=function(t){var e=Cn.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(_),r(e).hasClass(d)){var t=Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(s);e||(e=new i(this),t.data(s,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),r.fn[n]=g._jQueryInterface,r.fn[n].Constructor=g,r.fn[n].noConflict=function(){return r.fn[n]=l,g._jQueryInterface},g),An=(p="button",E="."+(v="bs.button"),y=".data-api",T=(m=e).fn[p],C="active",I="btn",D='[data-toggle^="button"]',b='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+y,FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(b)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;else{var r=m(n).find(w)[0];r&&m(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(C),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(C)),t&&m(this._element).toggleClass(C)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),n}(),m(document).on(O.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,D,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=T,k._jQueryInterface},k),Dn=(L="carousel",R="."+(j="bs.carousel"),H=".data-api",W=(P=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",F="left",V="right",Q={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHEND:"touchend"+R,LOAD_DATA_API:"load"+R+H,CLICK_DATA_API:"click"+R+H},B="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",J="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},$=function(){function s(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var t=s.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(R),P.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=h({},M,t),Cn.typeCheckConfig(L,t,x),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find(Z.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,r=this._getItemIndex(e),s=this._items.length-1;if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;var o=(r+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,r,s=this,o=P(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,r=F):(n=q,i=J,r=V),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:h});if(P(this._element).hasClass(G)){P(l).addClass(i),Cn.reflow(l),P(o).addClass(n),P(l).addClass(n);var f=Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),s._isSliding=!1,setTimeout(function(){return P(s._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u);c&&this.cycle()}},s._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(j),e=h({},M,P(this).data());"object"==typeof i&&(e=h({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new s(this,e),P(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},s._dataApiClickHandler=function(t){var e=Cn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=h({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),s._jQueryInterface.call(P(n),i),r&&P(n).data(j).to(r),t.preventDefault()}}},o(s,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return M}}]),s}(),P(document).on(Q.CLICK_DATA_API,Z.DATA_SLIDE,$._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P(Z.DATA_RIDE).each(function(){var t=P(this);$._jQueryInterface.call(t,t.data())})}),P.fn[L]=$._jQueryInterface,P.fn[L].Constructor=$,P.fn[L].noConflict=function(){return P.fn[L]=W,$._jQueryInterface},$),bn=(et="collapse",it="."+(nt="bs.collapse"),rt=(tt=e).fn[et],st={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",ft="width",dt="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Cn.getSelectorFromElement(r);null!==s&&0<tt(s).filter(t).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var r=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[r]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Cn.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Cn.getSelectorFromElement(r);if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)}).emulateTransitionEnd(o)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=h({},st,t)).toggle=Boolean(t.toggle),Cn.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(ft)?ft:dt},t._getParent=function(){var n=this,t=null;Cn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Cn.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=h({},st,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return st}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=Cn.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,gt._jQueryInterface},gt),Sn=(pt="dropdown",Et="."+(vt="bs.dropdown"),yt=".data-api",Tt=(mt=e).fn[pt],Ct=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+yt,KEYDOWN_DATA_API:"keydown"+Et+yt,KEYUP_DATA_API:"keyup"+Et+yt},At="disabled",Dt="show",bt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="position-static",kt='[data-toggle="dropdown"]',Pt=".dropdown form",Lt=".dropdown-menu",jt=".navbar-nav",Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ht="top-start",Wt="top-end",Mt="bottom-start",xt="bottom-end",Ut="right-start",Kt="left-start",Ft={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Vt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Qt=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(Dt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Cn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&mt(t).addClass(Ot),this._popper=new c(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(Dt),mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=h({},this.constructor.Default,mt(this._element).data(),t),Cn.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Lt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(bt)?(e=Ht,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=h({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=mt(e[n]).data(vt),s={relatedTarget:e[n]};if(r){var o=r._menu;if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,s);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(Dt),mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var e,n=Cn.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)):Ct.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(Dt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Rt).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var s=mt(e).find(kt)[0];mt(s).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Ft}},{key:"DefaultType",get:function(){return Vt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,kt,Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Lt,Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Qt._clearMenus).on(It.CLICK_DATA_API,kt,function(t){t.preventDefault(),t.stopPropagation(),Qt._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Pt,function(t){t.stopPropagation()}),mt.fn[pt]=Qt._jQueryInterface,mt.fn[pt].Constructor=Qt,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Tt,Qt._jQueryInterface},Qt),wn=(Yt="modal",qt="."+(Gt="bs.modal"),zt=(Bt=e).fn[Yt],Xt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Zt={HIDE:"hide"+qt,HIDDEN:"hidden"+qt,SHOW:"show"+qt,SHOWN:"shown"+qt,FOCUSIN:"focusin"+qt,RESIZE:"resize"+qt,CLICK_DISMISS:"click.dismiss"+qt,KEYDOWN_DISMISS:"keydown.dismiss"+qt,MOUSEUP_DISMISS:"mouseup.dismiss"+qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt,CLICK_DATA_API:"click"+qt+".data-api"},$t="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",ie="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},se=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Bt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=Bt.Event(Zt.SHOW,{relatedTarget:t});Bt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Bt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),Bt(this._element).on(Zt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS,function(){Bt(e._element).one(Zt.MOUSEUP_DISMISS,function(t){Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Bt.Event(Zt.HIDE);if(Bt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Bt(this._element).hasClass(ne);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Bt(document).off(Zt.FOCUSIN),Bt(this._element).removeClass(ie),Bt(this._element).off(Zt.CLICK_DISMISS),Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),i){var r=Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Bt.removeData(this._element,Gt),Bt(window,document,this._element,this._backdrop).off(qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=h({},Xt,t),Cn.typeCheckConfig(Yt,t,Jt),t},t._showElement=function(t){var e=this,n=Bt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Cn.reflow(this._element),Bt(this._element).addClass(ie),this._config.focus&&this._enforceFocus();var i=Bt.Event(Zt.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Bt(e._element).trigger(i)};if(n){var s=Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},t._enforceFocus=function(){var e=this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Bt(window).on(Zt.RESIZE,function(t){return e.handleUpdate(t)}):Bt(window).off(Zt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Bt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),Bt(t._element).trigger(Zt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Bt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Bt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&Bt(this._backdrop).addClass(n),Bt(this._backdrop).appendTo(document.body),Bt(this._element).on(Zt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Cn.reflow(this._backdrop),Bt(this._backdrop).addClass(ie),!t)return;if(!n)return void t();var i=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Bt(this._backdrop).removeClass(ie);var r=function(){e._removeBackdrop(),t&&t()};if(Bt(this._element).hasClass(ne)){var s=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e)[0].style.paddingRight,i=Bt(e).css("padding-right");Bt(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Bt(re.STICKY_CONTENT).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Bt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Bt(document.body).css("padding-right");Bt(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e).data("padding-right");"undefined"!=typeof n&&Bt(e).css("padding-right",n).removeData("padding-right")}),Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e).data("margin-right");"undefined"!=typeof n&&Bt(e).css("margin-right",n).removeData("margin-right")});var t=Bt(document.body).data("padding-right");"undefined"!=typeof t&&Bt(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$t,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Bt(this).data(Gt),e=h({},Xt,Bt(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),Bt(this).data(Gt,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xt}}]),r}(),Bt(document).on(Zt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=Cn.getSelectorFromElement(this);i&&(e=Bt(i)[0]);var r=Bt(e).data(Gt)?"toggle":h({},Bt(e).data(),Bt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Bt(e).one(Zt.SHOW,function(t){t.isDefaultPrevented()||s.one(Zt.HIDDEN,function(){Bt(n).is(":visible")&&n.focus()})});se._jQueryInterface.call(Bt(e),r,this)}),Bt.fn[Yt]=se._jQueryInterface,Bt.fn[Yt].Constructor=se,Bt.fn[Yt].noConflict=function(){return Bt.fn[Yt]=zt,se._jQueryInterface},se),Nn=(ae="tooltip",he="."+(le="bs.tooltip"),ce=(oe=e).fn[ae],ue="bs-tooltip",fe=new RegExp("(^|\\s)"+ue+"\\S+","g"),ge={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(_e={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},pe="out",ve={HIDE:"hide"+he,HIDDEN:"hidden"+he,SHOW:(me="show")+he,SHOWN:"shown"+he,INSERTED:"inserted"+he,CLICK:"click"+he,FOCUSIN:"focusin"+he,FOCUSOUT:"focusout"+he,MOUSEENTER:"mouseenter"+he,MOUSELEAVE:"mouseleave"+he},Ee="fade",ye="show",Te=".tooltip-inner",Ce=".arrow",Ie="hover",Ae="focus",De="click",be="manual",Se=function(){function i(t,e){if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=oe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),oe.removeData(this.element,this.constructor.DATA_KEY),oe(this.element).off(this.constructor.EVENT_KEY),oe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&oe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=oe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){oe(this.element).trigger(t);var n=oe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Cn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&oe(i).addClass(Ee);var s="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(s);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:oe(this.config.container);oe(i).data(this.constructor.DATA_KEY,this),oe.contains(this.element.ownerDocument.documentElement,this.tip)||oe(i).appendTo(a),oe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ce},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),oe(i).addClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover",null,oe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,oe(e.element).trigger(e.constructor.Event.SHOWN),t===pe&&e._leave(null,e)};if(oe(this.tip).hasClass(Ee)){var h=Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END,l).emulateTransitionEnd(h)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=oe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),oe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(oe(this.element).trigger(i),!i.isDefaultPrevented()){if(oe(n).removeClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover",null,oe.noop),this._activeTrigger[De]=!1,this._activeTrigger[Ae]=!1,this._activeTrigger[Ie]=!1,oe(this.tip).hasClass(Ee)){var s=Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){oe(this.getTipElement()).addClass(ue+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||oe(this.config.template)[0],this.tip},t.setContent=function(){var t=oe(this.getTipElement());this.setElementContent(t.find(Te),this.getTitle()),t.removeClass(Ee+" "+ye)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e):t.text(oe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return _e[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)oe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==be){var e=t===Ie?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;oe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}oe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ae:Ie]=!0),oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===me&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ae:Ie]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===pe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=h({},this.constructor.Default,oe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Cn.typeCheckConfig(ae,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=oe(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=oe(this).data(le),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),oe(this).data(le,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return ge}},{key:"NAME",get:function(){return ae}},{key:"DATA_KEY",get:function(){return le}},{key:"Event",get:function(){return ve}},{key:"EVENT_KEY",get:function(){return he}},{key:"DefaultType",get:function(){return de}}]),i}(),oe.fn[ae]=Se._jQueryInterface,oe.fn[ae].Constructor=Se,oe.fn[ae].noConflict=function(){return oe.fn[ae]=ce,Se._jQueryInterface},Se),On=(Ne="popover",ke="."+(Oe="bs.popover"),Pe=(we=e).fn[Ne],Le="bs-popover",je=new RegExp("(^|\\s)"+Le+"\\S+","g"),Re=h({},Nn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=h({},Nn.DefaultType,{content:"(string|element|function)"}),We="fade",xe=".popover-header",Ue=".popover-body",Ke={HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:(Me="show")+ke,SHOWN:"shown"+ke,INSERTED:"inserted"+ke,CLICK:"click"+ke,FOCUSIN:"focusin"+ke,FOCUSOUT:"focusout"+ke,MOUSEENTER:"mouseenter"+ke,MOUSELEAVE:"mouseleave"+ke},Fe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){we(this.getTipElement()).addClass(Le+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||we(this.config.template)[0],this.tip},r.setContent=function(){var t=we(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ue),e),t.removeClass(We+" "+Me)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=we(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=we(this).data(Oe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),we(this).data(Oe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Re}},{key:"NAME",get:function(){return Ne}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ke}},{key:"EVENT_KEY",get:function(){return ke}},{key:"DefaultType",get:function(){return He}}]),i}(Nn),we.fn[Ne]=Fe._jQueryInterface,we.fn[Ne].Constructor=Fe,we.fn[Ne].noConflict=function(){return we.fn[Ne]=Pe,Fe._jQueryInterface},Fe),kn=(Qe="scrollspy",Ye="."+(Be="bs.scrollspy"),Ge=(Ve=e).fn[Qe],qe={offset:10,method:"auto",target:""},ze={offset:"number",method:"string",target:"(string|element)"},Xe={ACTIVATE:"activate"+Ye,SCROLL:"scroll"+Ye,LOAD_DATA_API:"load"+Ye+".data-api"},Je="dropdown-item",Ze="active",$e={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Ve(this._scrollElement).on(Xe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?tn:en,r="auto"===this._config.method?t:this._config.method,s=r===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Ve.makeArray(Ve(this._selector)).map(function(t){var e,n=Cn.getSelectorFromElement(t);if(n&&(e=Ve(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Ve(e)[r]().top+s,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Ve.removeData(this._element,Be),Ve(this._scrollElement).off(Ye),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=h({},qe,"object"==typeof t&&t?t:{})).target){var e=Ve(t.target).attr("id");e||(e=Cn.getUID(Qe),Ve(t.target).attr("id",e)),t.target="#"+e}return Cn.typeCheckConfig(Qe,t,ze),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Ve(t.join(","));n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),n.addClass(Ze)):(n.addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),Ve(this._scrollElement).trigger(Xe.ACTIVATE,{relatedTarget:e})},t._clear=function(){Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)},n._jQueryInterface=function(e){return this.each(function(){var t=Ve(this).data(Be);if(t||(t=new n(this,"object"==typeof e&&e),Ve(this).data(Be,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return qe}}]),n}(),Ve(window).on(Xe.LOAD_DATA_API,function(){for(var t=Ve.makeArray(Ve($e.DATA_SPY)),e=t.length;e--;){var n=Ve(t[e]);nn._jQueryInterface.call(n,n.data())}}),Ve.fn[Qe]=nn._jQueryInterface,Ve.fn[Qe].Constructor=nn,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=Ge,nn._jQueryInterface},nn),Pn=(on="."+(sn="bs.tab"),an=(rn=e).fn.tab,ln={HIDE:"hide"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,CLICK_DATA_API:"click"+on+".data-api"},hn="dropdown-menu",cn="active",un="disabled",fn="fade",dn="show",_n=".dropdown",gn=".nav, .list-group",mn=".active",pn="> li > .active",vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',En=".dropdown-toggle",yn="> .dropdown-menu .active",Tn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))){var t,i,e=rn(this._element).closest(gn)[0],r=Cn.getSelectorFromElement(this._element);if(e){var s="UL"===e.nodeName?pn:mn;i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]}var o=rn.Event(ln.HIDE,{relatedTarget:this._element}),a=rn.Event(ln.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){r&&(t=rn(r)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(ln.HIDDEN,{relatedTarget:n._element}),e=rn.Event(ln.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?rn(e).find(pn):rn(e).children(mn))[0],s=n&&r&&rn(r).hasClass(fn),o=function(){return i._transitionComplete(t,r,n)};if(r&&s){var a=Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+cn);var i=rn(e.parentNode).find(yn)[0];i&&rn(i).removeClass(cn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(cn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Cn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(hn)){var r=rn(t).closest(_n)[0];r&&rn(r).find(En).addClass(cn),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(sn);if(e||(e=new i(this),t.data(sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),rn(document).on(ln.CLICK_DATA_API,vn,function(t){t.preventDefault(),Tn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=Tn._jQueryInterface,rn.fn.tab.Constructor=Tn,rn.fn.tab.noConflict=function(){return rn.fn.tab=an,Tn._jQueryInterface},Tn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Cn,t.Alert=In,t.Button=An,t.Carousel=Dn,t.Collapse=bn,t.Dropdown=Sn,t.Modal=wn,t.Popover=On,t.Scrollspy=kn,t.Tab=Pn,t.Tooltip=Nn,Object.defineProperty(t,"__esModule",{value:!0})});

/* Facebook Widgets */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=477797038899826";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Twitter Widgets */
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));



/* Plume Plugins */

// 1- PACE PRELOADER
// (function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function d(){this.constructor=a}for(var c in b)Y.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;f<g;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;e<f;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(a){return d=a,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;Q<S;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>\n<div class="pace-preloader-text-percent"><div class="gfort-page-preloader-container"><div class="gfort-page-preloader-divs-container"><div class="gfort-page-preloader-1"></div><div class="gfort-page-preloader-2"></div><div class="gfort-page-preloader-3"></div><div class="gfort-page-preloader-4"></div><div class="gfort-page-preloader-5"></div></div><div class="gfort-page-preloader-text"></div></div></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;e<f;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),a.children[2].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;d<e;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?e.push(Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0})):e.push(a[d]=b.prototype[d]):e.push(void 0)}catch(a){c=a}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e,f){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(a){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(a){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(a){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;c<d;c++)if(b=e[c],"string"==typeof b){if(a.indexOf(b)!==-1)return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;if(f=b.type,e=b.request,g=b.url,!I(g))return j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&h<4){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;c<g;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;if(d=a.type,b=a.request,e=a.url,!I(e))return c="socket"===d?new n(b):new o(b),this.elements.push(c)},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return a.lengthComputable?h.progress=100*a.loaded/a.total:h.progress=h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;d<e;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;c<d;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;c<d;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){if(D.restartOnPushState)return j.restart()},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;c<e;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;d<f;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;q<u;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;t<v;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(a){i=a}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);

// 2- animsition v4.0.2  
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var n="animsition",i={init:function(a){a=t.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},a),i.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var o=i.supportCheck.call(this,a);if(!o&&a.browser.length>0&&(!o||!this.length))return"console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),o||console.log("Animsition: Does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,a);return e&&t("."+a.overlayClass).length<=0&&i.addOverlay.call(this,a),a.loading&&t("."+a.loadingClass).length<=0&&i.addLoading.call(this,a),this.each(function(){var o=this,e=t(this),s=t(window),r=t(document),l=e.data(n);l||(a=t.extend({},a),e.data(n,{options:a}),a.timeout&&i.addTimer.call(o),a.onLoadEvent&&s.on("load."+n,function(){i.settings.timer&&clearTimeout(i.settings.timer),i["in"].call(o)}),s.on("pageshow."+n,function(t){t.originalEvent.persisted&&i["in"].call(o)}),s.on("unload."+n,function(){}),r.on("click."+n,a.linkElement,function(n){n.preventDefault();var a=t(this),e=a.attr("href");2===n.which||n.metaKey||n.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&n.ctrlKey?window.open(e,"_blank"):i.out.call(o,a,e)}))})},addOverlay:function(n){t(n.overlayParentElement).prepend('<div class="'+n.overlayClass+'"></div>')},addLoading:function(n){t(n.loadingParentElement).append('<div class="'+n.loadingClass+'">'+n.loadingInner+"</div>")},removeLoading:function(){var i=t(this),a=i.data(n).options,o=t(a.loadingParentElement).children("."+a.loadingClass);o.fadeOut().remove()},addTimer:function(){var a=this,o=t(this),e=o.data(n).options;i.settings.timer=setTimeout(function(){i["in"].call(a),t(window).off("load."+n)},e.timeoutCountdown)},supportCheck:function(n){var i=t(this),a=n.browser,o=a.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(a[s])){e=!0;break}return e},optionCheck:function(n){var a,o=t(this);return a=n.overlay||o.data(i.settings.data.overlay)?!0:!1},animationCheck:function(i,a,o){var e=t(this),s=e.data(n).options,r=typeof i,l=!a&&"number"===r,d=a&&"string"===r&&i.length>0;return l||d?i=i:a&&o?i=s.inClass:!a&&o?i=s.inDuration:a&&!o?i=s.outClass:a||o||(i=s.outDuration),i},"in":function(){var a=this,o=t(this),e=o.data(n).options,s=o.data(i.settings.data.inDuration),r=o.data(i.settings.data.inClass),l=i.animationCheck.call(a,s,!1,!0),d=i.animationCheck.call(a,r,!0,!0),u=i.optionCheck.call(a,e),c=o.data(n).outClass;e.loading&&i.removeLoading.call(a),c&&o.removeClass(c),u?i.inOverlay.call(a,d,l):i.inDefault.call(a,d,l)},inDefault:function(n,a){var o=t(this);o.css({"animation-duration":a+"ms"}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function(){o.removeClass(n).css({opacity:1}).trigger(i.settings.events.inEnd)})},inOverlay:function(a,o){var e=t(this),s=e.data(n).options;e.css({opacity:1}).trigger(i.settings.events.inStart),t(s.overlayParentElement).children("."+s.overlayClass).css({"animation-duration":o+"ms"}).addClass(a).animateCallback(function(){e.trigger(i.settings.events.inEnd)})},out:function(a,o){var e=this,s=t(this),r=s.data(n).options,l=a.data(i.settings.data.outClass),d=s.data(i.settings.data.outClass),u=a.data(i.settings.data.outDuration),c=s.data(i.settings.data.outDuration),m=l?l:d,g=u?u:c,f=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,g,!1,!1),h=i.optionCheck.call(e,r);s.data(n).outClass=f,h?i.outOverlay.call(e,f,v,o):i.outDefault.call(e,f,v,o)},outDefault:function(a,o,e){var s=t(this),r=s.data(n).options;s.css({"animation-duration":o+1+"ms"}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){s.trigger(i.settings.events.outEnd),r.transition(e)})},outOverlay:function(a,o,e){var s=this,r=t(this),l=r.data(n).options,d=r.data(i.settings.data.inClass),u=i.animationCheck.call(s,d,!0,!0);t(l.overlayParentElement).children("."+l.overlayClass).css({"animation-duration":o+1+"ms"}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){r.trigger(i.settings.events.outEnd),l.transition(e)})},destroy:function(){return this.each(function(){var i=t(this);t(window).off("."+n),i.css({opacity:1}).removeData(n)})}};t.fn.animateCallback=function(n){var i="animationend webkitAnimationEnd";return this.each(function(){var a=t(this);a.on(i,function(){return a.off(i),n.call(this)})})},t.fn.animsition=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void t.error("Method "+a+" does not exist on jQuery."+n):i.init.apply(this,arguments)}});

// 3- jquery-match-height 0.7.0
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});


/* Plume Scripts */
/*global jQuery, document, window, Waypoint, videojs, YT, grecaptcha, google, InfoBox, prettyPrint, Cookies, WOW*/

/* =============================================================================
Ajax
============================================================================= */

jQuery.ajaxPrefilter(function (options) {
  //  'use strict';
    options.cache = true;
});


/* =============================================================================
Document Ready Function
============================================================================= */
jQuery(document).ready(function () {

 //   'use strict';

    var NBTimer,
        isMobile,
        headerTimer,
        megamenuTimer,
        currentPosition,
        searchInputTimer,
        elCurrentMap = [],
        headerCurrentPosition,
        gfortRecaptchaSiteKey,
        pageDirection = 'ltr',
        // Notification Expire Days
        notificationExpireDays = 0,
        // Enable or Disable Page preLoader (true / false)
        pagePreLoader = false,
        // Add text to page preloader
        pagePreLoaderText = '',
        //1, 2, 3, 4, 5 or 6
        pagePreLoaderStyle = '1',
        // Enable or disable Parallax Effect (true / false)
        parallaxEffect = true,
        // Enable or Disable Animation (true / false)
        enableAnimation = true;


    /* =========================================================================
    Check if it's a Mobile Device
    ========================================================================= */
    isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera\ Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    /* =========================================================================
    Mega Menu
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortMegaMenufn() {
        if (jQuery(window).width() > 991) {
            jQuery('.megamenu').each(function () {
                jQuery('> .submenu > li', this).matchHeight();
            });
        } else {
            jQuery('.megamenu').each(function () {
                jQuery('> .submenu > li', this).matchHeight('remove');
            });
        }
        clearTimeout(megamenuTimer);
    }
    gfortMegaMenufn();

    /* Resize Window
    ------------------------------------------------------------------------- */
    jQuery(window).resize(function () {
        megamenuTimer = setTimeout(function () {
            gfortMegaMenufn();
        }, 1000);
    });


    /* =========================================================================
    Page preLoader
    ========================================================================= */
    /* Condition
    ------------------------------------------------------------------------- 
    if (pagePreLoader === true) {

        if (pagePreLoaderStyle >= 1 && pagePreLoaderStyle <= 6) {
            jQuery('body').addClass('page-preloader-style-' + pagePreLoaderStyle);
        }

        if (pagePreLoaderText !== '') {
            jQuery('.gfort-page-preloader-text').attr('data-progress-text', pagePreLoaderText);
        }

    } else {
        jQuery('.pace').css({display: 'none'});
    }
*/

    /* =========================================================================
    Page Transition
    ========================================================================= 
    jQuery('#main-wrapper').animsition({
        loading: false,
        inDuration: 1500,
        outDuration: 800,
        inClass: 'fade-in',
        outClass: 'fade-out',
        linkElement: 'ul.navbar-nav li a:not([target="_blank"]):not([href^="#"])'
    });


    /* =========================================================================
    To top Button
    ========================================================================= */
    /* Button
    ------------------------------------------------------------------------- 
    jQuery('.btn-gfort-top').on('click', function () {
        jQuery('html, body').animate({scrollTop: '0'}, 800);
        return false;
    });
*/
    /* Window Scroll
    ------------------------------------------------------------------------- 
    jQuery(window).scroll(function () {
        currentPosition = jQuery(window).scrollTop();
        if (currentPosition >= 300) {
            jQuery('.btn-gfort-top').addClass('show-btn-gfort-top');
        } else {
            jQuery('.btn-gfort-top').removeClass('show-btn-gfort-top');
        }
    });
*/
    /* Link
    ------------------------------------------------------------------------- 
    jQuery('[href="#top-page"]').on('click', function () {

        jQuery('html, body').animate({scrollTop: '0'}, 800);

        if (jQuery('.navbar-collapse').hasClass('in')) {
            jQuery('.navbar-toggle').removeClass('gfort-menuButton-toggle');
            jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
        }

        if (jQuery('.header-section').hasClass('sidebar-header')) {
            jQuery('.sidebar-header').removeClass('sidebar_header_correctPosition');
        }

        return false;

    });
*/

    /* =========================================================================
    Menu Button
    ========================================================================= */
    jQuery('.navbar-toggle').on('click', function () {
        jQuery('.navbar-toggle').toggleClass('gfort-menuButton-toggle');
    });


    /* =========================================================================
    Sub Menu - DO THIS MANUALLY
    ========================================================================= 
    jQuery('.navbar-nav').find('ul').addClass('submenu');
    jQuery('.navbar-nav li ul').parent('li').addClass('parent-list');

    if (jQuery('.header-section').hasClass('sidebar-header')) {
        jQuery('.parent-list > a').append('<span class="menu-arrow"><i class="fa fa-angle-right"></i></span>');
    } else {
        jQuery('.parent-list > a').append('<span class="menu-arrow"><i class="fa fa-angle-down"></i></span>');
        jQuery('.parent-list .parent-list > a').append('<span class="menu-arrow"><i class="fa fa-angle-right"></i></span>').find('.menu-arrow:first').remove();
    }
*/

    /* =========================================================================
    Collapse Menu
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortCollapseMenufn() {
        if (!jQuery('.header-section').hasClass('sidebar-header')) {
            if (jQuery(window).width() <= 991) {

                if (!jQuery('body').hasClass('mobile-navbar-collapse')) {

                    jQuery('.navbar-nav ul').each(function () {
                        jQuery(this).slideUp();
                    });

                    if (jQuery(window).width() > 767) {

                        jQuery('.navbar-collapse').on({
                            mouseenter: function () {
                                jQuery('body').addClass('stopScroll');
                            },
                            mouseleave: function () {
                                jQuery('body').removeClass('stopScroll');
                            }
                        });

                    }

                    jQuery('.parent-list').each(function () {
                        jQuery(this).find('a:first').addClass('mobile-parent-list-link');
                    });

                    jQuery('body').addClass('mobile-navbar-collapse');

                }

            } else {

                jQuery('.navbar-nav ul').each(function () {
                    jQuery(this).slideDown();
                });

                jQuery('.navbar-collapse').on('mouseenter', function () {
                    jQuery('body').removeClass('stopScroll');
                });

                jQuery('.parent-list').each(function () {
                    jQuery(this).removeClass('active-menu-item');
                    jQuery(this).find('a:first').removeClass('mobile-parent-list-link').removeClass('menu-is-open');
                });

                jQuery('body').removeClass('mobile-navbar-collapse');

            }
        }
    }

    gfortCollapseMenufn();

    /* Resize Window
    ------------------------------------------------------------------------- */
    jQuery(window).resize(function () {
        gfortCollapseMenufn();
    });

    jQuery('body').on('click', '.mobile-parent-list-link', function (e) {

        e.preventDefault();

        if (jQuery(this).hasClass('menu-is-open')) {
            jQuery(this).removeClass('menu-is-open').find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
            jQuery(this).next('ul').slideUp();
            jQuery(this).parent('li').removeClass('active-menu-item');
        } else {
            jQuery(this).addClass('menu-is-open').find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
            jQuery(this).next('ul').slideDown();
            jQuery(this).parent('li').addClass('active-menu-item');
        }

        if (jQuery(this).hasClass('menu-is-open')) {
            return false;
        }

    });


    /* =========================================================================
    Sidebar Header
    ========================================================================= */
    if (jQuery('.header-section').hasClass('sidebar-header')) {

        if (jQuery('.header-section').hasClass('fixed-header')) {
            jQuery('body').addClass('fixed-sidebar-header');
        }

        var headerSectionEL = jQuery('.header-section'),
            topHeaderLogo = headerSectionEL.find('.navbar .col-md-12'),
            menuLogo = headerSectionEL.find('.navbar .navbar-header').length;

        headerSectionEL.prepend('<div class="sidebar-overlay"></div><a href="#" class="sidebar-header-btn"><i class="fa fa-bars"></i></a>');

        if (menuLogo < 1) {
            headerSectionEL.find(jQuery('.top-header .navbar-header')).prependTo(topHeaderLogo);
        }

        jQuery('.navbar-nav ul').each(function () {
            jQuery(this).slideUp();
        });

        jQuery('.parent-list > a').on('click', function (e) {

            e.preventDefault();

            if (jQuery(this).hasClass('menu-is-open')) {
                jQuery(this).removeClass('menu-is-open').find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
                jQuery(this).next('ul').slideUp();
                jQuery(this).parent('li').removeClass('active-menu-item');
            } else {
                jQuery(this).addClass('menu-is-open').find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
                jQuery(this).next('ul').slideDown();
                jQuery(this).parent('li').addClass('active-menu-item');
            }

            if (jQuery(this).hasClass('menu-is-open')) {
                return false;
            }

        });

        jQuery('body').on('click', '.sidebar-header-btn', function (e) {
            e.preventDefault();
            jQuery(this).parent('.sidebar-header').toggleClass('sidebar_header_correctPosition');
        });

        jQuery('body').on('click', '.sidebar-overlay', function (e) {
            e.preventDefault();
            jQuery(this).parent('.sidebar-header').removeClass('sidebar_header_correctPosition');
        });

    }


    /* =========================================================================
    Fixed Header
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- 
    function gfortFixedHeaderfn() {
        var headerEl = jQuery('.fixed-header .header-menu-container');
        headerEl = new Waypoint.Sticky({
            element: headerEl[0],
            stuckClass: 'header-menu-stuck',
            wrapper: '<div class="header-menu">'
        });
        clearTimeout(headerTimer);
    }
*/
    /* Condition
    ------------------------------------------------------------------------- 
    if (jQuery('.fixed-header').length) {
        if (!jQuery('.header-section').hasClass('sidebar-header')) {
            jQuery.getScript('/siteassets/plugins/waypoint/jquery.waypoints.min.js', function () {
                jQuery.getScript('/siteassets/plugins/waypoint/sticky.min.js', function () {
                    gfortFixedHeaderfn();
                });
            });
        }
    }
*/
    /* Window Scroll
    ------------------------------------------------------------------------- 
    jQuery(window).scroll(function () {
        headerCurrentPosition = jQuery(window).scrollTop();
        if (headerCurrentPosition >= 100) {
            jQuery('.header-menu-container').addClass('tiny-header');
        } else {
            jQuery('.header-menu-container').removeClass('tiny-header');
        }
    });
*/

    /* =========================================================================
    Notification Block
    ========================================================================= */
    /* Dismiss Notification Block
    ------------------------------------------------------------------------- */
    // Main Close Button
    jQuery('.notification-block-close-btn').on('click', function () {

        jQuery(this).parents('.NB_correctPosition').removeClass('NB_correctPosition');

        var NBClass = jQuery(this).parents('.notification-block').attr('class').split('notification-block-style-')[1].charAt(0);

        Cookies.set('Plume-HTML5-Cookie-' + NBClass, 'gfort-Plume-HTML5-Cookie-' + NBClass, {expires: notificationExpireDays});

        if (jQuery(this).parents('.notification-block').attr('class').indexOf('notification-block-style-2') > -1) {
            jQuery(this).parents('.notification-block').slideUp(500);
            headerTimer = setTimeout(function () {
                if (jQuery('.fixed-header').length) {
                    gfortFixedHeaderfn();
                }
            }, 600);
        }

        jQuery(this).parents('.notification-block').find('video').each(function () {
            var videoCheck = jQuery(this).attr('id');
            videojs(videoCheck).pause();
        });

        jQuery(this).parents('.notification-block').find('audio').each(function () {
            var audioCheck = jQuery(this).attr('id');
            videojs(audioCheck).pause();
        });

        clearTimeout(NBTimer);

    });

    // overlay
    jQuery('body').on('click', '.notification-block-overlay', function () {

        jQuery(this).parents('.NB_correctPosition').removeClass('NB_correctPosition');

        var NBClass = jQuery(this).parents('.notification-block').attr('class').split('notification-block-style-')[1].charAt(0);

        Cookies.set('Plume-HTML5-Cookie-' + NBClass, 'gfort-Plume-HTML5-Cookie-' + NBClass, {expires: notificationExpireDays});

        jQuery('body').removeClass('stopScroll');

        clearTimeout(NBTimer);

    }).on('click', '.notification-block-overlay .notification-block-container', function (e) {
        e.stopPropagation();
    });

    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortNBCookiefn() {
        jQuery('.notification-block').each(function () {

            var el = jQuery(this),
                NBClass = el.attr('class').split('notification-block-style-')[1].charAt(0);

            NBTimer = setTimeout(function () {
                el.addClass('NB_correctPosition');
            }, 2000);

            if (Cookies.get('Plume-HTML5-Cookie-' + NBClass) === 'gfort-Plume-HTML5-Cookie-' + NBClass) {
                jQuery('.notification-block-style-' + NBClass).css('display', 'none');
            } else {
                jQuery('.notification-block-style-' + NBClass).css('display', 'block');
            }

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.notification-block').length) {
        if (jQuery('.notification-block-style-4').length) {
            jQuery('.notification-block-style-4').each(function () {
                jQuery(this).find('.notification-block-wrapper').addClass('notification-block-overlay');
            });
        }
        jQuery.getScript('/siteassets/plugins/cookie/js.cookie.min.js', function () {
            gfortNBCookiefn();
        });
    }


    /* =========================================================================
    Smooth Scroll
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortScrollTofn() {
        jQuery('body').on('click', '[data-scroll]', function (e) {

            e.preventDefault();

            if (jQuery('.fixed-header').length) {
                if (jQuery('.header-section').hasClass('sidebar-header')) {
                    jQuery('html, body').scrollTo(this.hash, 800, {
                        offset: 0
                    });
                } else {
                    jQuery('html, body').scrollTo(this.hash, 800, {
                        offset: -80
                    });
                }
            } else {
                jQuery('html, body').scrollTo(this.hash, 800, {
                    offset: 0
                });
            }

            if (jQuery('.navbar-collapse').hasClass('in')) {
                jQuery('.navbar-toggle').removeClass('gfort-menuButton-toggle');
                jQuery('.navbar-collapse').removeClass('in').addClass('collapse');
            }

            if (jQuery('.header-section').hasClass('sidebar-header')) {
                jQuery('.sidebar-header').removeClass('sidebar_header_correctPosition');
            }

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('[data-scroll]').length) {
        jQuery.getScript('/siteassets/plugins/scrollto/jquery.scrollTo.min.js', function () {
            gfortScrollTofn();
        });
    }


    /* ==========================================================================
    Data Spy
    ========================================================================== */
    jQuery('body').attr('data-spy', 'scroll').attr('data-target', '.header-menu-container').attr('data-offset', '85');

    /* Resize Window
    ------------------------------------------------------------------------- */
    jQuery(window).resize(function () {
        jQuery('[data-spy="scroll"]').each(function () {
            jQuery(this).scrollspy('refresh');
        });
    });


    /* =========================================================================
    Remove error from forms input
    ========================================================================= */
    jQuery('.form-control').on('focus', function () {
        jQuery(this).removeClass('error');
    });


    /* =========================================================================
    Radio
    ========================================================================= */
    jQuery('input[type="radio"]').each(function (index) {
        if (jQuery(this).attr('id') === undefined || jQuery(this).attr('id') === 'undefined' || jQuery(this).attr('id') === '') {
            jQuery(this).attr('id', 'gfort-radio-' + index);
        }
        jQuery(this).after('<label class="gfort-radio" for="' + jQuery(this).attr('id') + '"></label>');
    });


    /* =========================================================================
    CheckBox
    ========================================================================= */
    /* Main
    ------------------------------------------------------------------------- */
    jQuery('input[type="checkbox"]').each(function (index) {
        if (jQuery(this).attr('id') === undefined || jQuery(this).attr('id') === 'undefined' || jQuery(this).attr('id') === '') {
            jQuery(this).attr('id', 'gfort-checkbox-' + index);
        }
        jQuery(this).after('<label class="gfort-checkbox" for="' + jQuery(this).attr('id') + '"></label>');
    });

    /* Select All
    ------------------------------------------------------------------------- */
    // Parent
    jQuery('[data-select-all]').on('change', function () {
        var elStatus = jQuery(this)[0].checked,
            elName = jQuery(this).attr('name');
        jQuery('input[name="' + elName + '[]"]').each(function () {
            jQuery(this)[0].checked = elStatus;
        });
    });

    // Children
    jQuery('input[type="checkbox"]').on('change', function () {
        if (jQuery(this).attr('name').indexOf('[]') !== -1) {
            var elName = jQuery(this).attr('name');
            if (jQuery(this)[0].checked === false) {
                jQuery('[data-select-all]')[0].checked = false;
            }
            if (jQuery('input[name="' + elName + '"]').length === jQuery('input[name="' + elName + '"]:checked').length) {
                jQuery('[data-select-all]')[0].checked = true;
            }
        }
    });


    /* ==========================================================================
    Input Number Counter
    ========================================================================== */
    jQuery('.quantity input[type=number]').each(function () {

        var el = jQuery(this);

        el.parent().prepend('<span class="sub"><i class="fa fa-minus"></i></span>').append('<span class="add"><i class="fa fa-plus"></i></span>');

        el.parent().on('click', '.sub', function () {
            if (el.val() === '') {
                el.val('1');
            }
            if (el.val() > 1) {
                el.val(parseInt(el.val(), 10) - 1);
            }
        });

        el.parent().on('click', '.add', function () {
            if (el.val() === '') {
                el.val('0');
            }
            if (el.val() < 9999999) {
                el.val(parseInt(el.val(), 10) + 1);
            }
        });

    });


    /* =========================================================================
    Form Validation
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- */
    
    
    function gfortFormValidationfn() {
        jQuery('.form-block').each(function () {

            var el = jQuery(this),
                elForm = el.find('form');

            if (el.hasClass('contact-form-block')) {
                elForm.prepend('<input type="text" name="form_current_website" value="' + document.location.hostname + '" style="display: none;">');
            }

            if (!el.hasClass('search-form-block') && !el.hasClass('header-search-form-block')) {

                if (!el.hasClass('account-form-block')) {
                    elForm.append('<div class="gfort-form-alert-message col-md-12"></div>');
                }

                jQuery(elForm).validate({
                    rules: {
                        form_general: 'required',
                        form_name: 'required',
                        form_first_name: 'required',
                        form_last_name: 'required',
                        form_email: {
                            required: true,
                            email: true
                        },
                        form_message: 'required',
                        form_subject: 'required',
                        form_terms: 'required',
                        form_comment: 'required',
                        form_phone: {
                            required: true,
                            digits: true,
                            minlength: 10,
                            maxlength: 10
                        },
                        form_rate: 'required',
                        form_country: 'required',
                        form_address: 'required',
                        form_town_city: 'required',
                        form_postcode_ZIP: {
                            required: true,
                            digits: true,
                            minlength: 5,
                            maxlength: 5
                        },
                        form_password: {
                            required: true,
                            minlength: 8
                        },
                        form_password_again: {
                            equalTo: '#form_password'
                        },
                        form_new_password: {
                            minlength: 8
                        },
                        form_new_password_again: {
                            equalTo: '#form_new_password'
                        },
                        form_username: 'required',
                        form_ship_to_first_name: 'required',
                        form_ship_to_last_name: 'required',
                        form_ship_to_country: 'required',
                        form_ship_to_address: 'required',
                        form_ship_to_town_city: 'required',
                        form_ship_to_postcode_ZIP: 'required',
                        account_form_name: 'required',
                        account_form_password: 'required',
                        account_form_email: {
                            required: true,
                            email: true
                        },
                        form_attend: 'required',
                        form_bmi_weight: {
                            required: true,
                            number: true,
                            minlength: 1,
                            maxlength: 5
                        },
                        form_bmi_height: {
                            required: true,
                            number: true,
                            minlength: 1,
                            maxlength: 5
                        }
                    },
                    messages: {
                        form_general: {
                            required: 'This field is required.'
                        },
                        form_name: 'Your name is required.',
                        form_first_name: 'Your first name is required.',
                        form_last_name: 'Your last name is required.',
                        form_email: {
                            required: 'Please provide an email address.',
                            email: 'Please enter a valid email address.'
                        },
                        form_message: 'Don\'t you want to say something ?.',
                        form_subject: 'Your subject is required.',
                        form_terms: 'You have to accept the terms and conditions.',
                        form_comment: 'Don\'t you want to say something ?.',
                        form_phone: {
                            required: 'Please provide a phone number.',
                            digits: 'Please enter digits only',
                            minlength: 'Please enter a valid phone number.',
                            maxlength: 'Please enter a valid phone number.'
                        },
                        form_rate: 'Please select a rating.',
                        form_country: 'Please select a country.',
                        form_address: 'Your address is required.',
                        form_town_city: 'Your Town / City is required.',
                        form_postcode_ZIP: {
                            required: 'Your Postcode / ZIP is required.',
                            digits: 'Please enter digits only',
                            minlength: 'Please enter a valid Postcode / ZIP number.',
                            maxlength: 'Please enter a valid Postcode / ZIP number.'
                        },
                        form_password: {
                            required: 'Your password is required.',
                            minlength: 'Please enter at least 8 characters.'
                        },
                        form_password_again: {
                            equalTo: 'Your passwords do not match, please try again!.'
                        },
                        form_new_password: {
                            minlength: 'Please enter at least 8 characters.'
                        },
                        form_new_password_again: {
                            equalTo: 'Your passwords do not match, please try again!.'
                        },
                        form_username: 'Your username is required.',
                        form_ship_to_first_name: 'Your first name is required.',
                        form_ship_to_last_name: 'Your last name is required.',
                        form_ship_to_country: 'Please select a country.',
                        form_ship_to_address: 'Your address is required.',
                        form_ship_to_town_city: 'Your Town / City is required.',
                        form_ship_to_postcode_ZIP: {
                            required: 'Your Postcode / ZIP is required.',
                            digits: 'Please enter digits only',
                            minlength: 'Please enter a valid Postcode / ZIP number.',
                            maxlength: 'Please enter a valid Postcode / ZIP number.'
                        },
                        account_form_name: 'Your username is missing!',
                        account_form_password: 'Your password is missing!',
                        account_form_email: {
                            required: 'Please provide an email address.',
                            email: 'Please enter a valid email address.'
                        },
                        form_attend: {
                            required: 'This field is required.'
                        },
                        form_bmi_weight: {
                            required: 'This field is required.',
                            number: 'Please enter numbers only',
                            minlength: 'Please enter a valid number.',
                            maxlength: 'Please enter a valid number.'
                        },
                        form_bmi_height: {
                            required: 'This field is required.',
                            number: 'Please enter numbers only',
                            minlength: 'Please enter a valid number.',
                            maxlength: 'Please enter a valid number.'
                        }
                    },
                    submitHandler: function () {

                        var formDate = elForm.serialize(),
                            formReditect = el.attr('data-redirect-page'),
                            formActionURL = elForm.attr('action'),
                            recaptchaID = elForm.find('.gfort-recaptcha').attr('id');

                        elForm.find('button').addClass('add-spin');

                        jQuery.ajax({
                            type: 'post',
                            url: formActionURL,
                            data: formDate
                        }).done(function (response) {

                            /* Success Message
                            ----------------------------------------------------- */
                            if (response.match('success-message') !== null) {

                                if (formReditect !== undefined && formReditect !== 'undefined' && formReditect !== '') {
                                    window.location = formReditect;
                                } else {

                                    if (elForm.find('.gfort-recaptcha').length > 0) {
                                        elForm.find('.gfort-recaptcha').remove();
                                        elForm.find('.gfort-recaptcha-wrapper').prepend('<div class="gfort-recaptcha" id="' + recaptchaID + '" data-sitekey="' + gfortRecaptchaSiteKey + '" data-callback="recaptchaCallback"></div>');
                                        grecaptcha.render(recaptchaID, {sitekey: gfortRecaptchaSiteKey});
                                    }

                                    if (elForm.find('.gfort-chosen-select').length > 0) {
                                        elForm.find('.gfort-chosen-select').val('').trigger('chosen:updated');
                                    }

                                    elForm.find('.gfort-form-alert-message .alert').remove();
                                    elForm.find('.gfort-form-alert-message').append('<div class="alert alert-gfort alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="form-respones-message"></div></div>');
                                    elForm.find('.gfort-form-alert-message .form-respones-message').html(response);
                                    
                                    alert("SEND EMAIL HERE");

                                }

                                elForm.find('.form-control').val('');
                                elForm.find('input[type="checkbox"]').attr('checked', false);

                            }

                            /* reCaptcha Error Message
                            ----------------------------------------------------- */
                            if (response.match('error-captcha') !== null) {
                                jQuery('.gfort-captcha-error').remove();
                                elForm.find('.gfort-recaptcha').after('<label class="gfort-captcha-error error">' + response + '</label>');
                            }

                            /* Error Message
                            ----------------------------------------------------- */
                            if (response.match('error-message') !== null) {
                                elForm.find('.gfort-form-alert-message .alert').remove();
                                elForm.find('.gfort-form-alert-message').append('<div class="alert alert-danger alert-gfort alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="form-respones-message"></div></div>');
                                elForm.find('.gfort-form-alert-message .form-respones-message').html(response);
                            }

                            elForm.find('button').removeClass('add-spin');

                        });

                    }
                });

                /* Additional Method to validate email
                ------------------------------------------------------------- */
                jQuery.validator.methods.email = function (value, element) {
                    return this.optional(element) || (/\S+@\S+\.\S+/).test(value);
                };

            }

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.form-block').length) {
        jQuery.getScript('/SiteAssets/plugins/validation/jquery.validate.min.js', function () {
            gfortFormValidationfn();
        });
    }

    /* recaptcha
    ------------------------------------------------------------------------- */
    if (jQuery('.gfort-recaptcha').length) {
        jQuery.getScript('https://www.google.com/recaptcha/api.js?render=explicit', function () {
            gfortRecaptchaSiteKey = jQuery('.gfort-recaptcha').attr('data-sitekey');
            jQuery('.gfort-recaptcha').each(function (index) {
                var el = jQuery(this);
                el.attr('id', 'gfort-recaptcha-' + index);
                el.attr('data-callback', 'recaptchaCallback');
                el.wrap('<div class="gfort-recaptcha-wrapper"></div>');
                el.after('<script type="text/javascript">function recaptchaCallback() {jQuery(".gfort-captcha-error").remove();};</script>');
            });
        });
    }

    /* Refresh recaptcha
    ------------------------------------------------------------------------- */
    jQuery('body').on('click', '.gfort-refresh-recaptcha', function (e) {

        e.preventDefault();

        var el = jQuery(this),
            elParents = el.parents('.gfort-recaptcha-wrapper'),
            recaptchaID = elParents.find('.gfort-recaptcha').attr('id');

        elParents.find('.gfort-recaptcha').remove();
        elParents.prepend('<div class="gfort-recaptcha" id="' + recaptchaID + '" data-sitekey="' + gfortRecaptchaSiteKey + '" data-callback="recaptchaCallback"></div>');

        grecaptcha.render(recaptchaID, {sitekey: gfortRecaptchaSiteKey});
        jQuery('.gfort-captcha-error').remove();

    });


    /* =========================================================================
    Search Form
    ========================================================================= */
    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortCloseSearchFormfn() {
        clearTimeout(searchInputTimer);
        jQuery('.header-menu').removeClass('open-header-search-form-block');
    }

    /* Open Search Form
    ------------------------------------------------------------------------- */
    jQuery('a.form-open-btn').on('click', function (e) {

        e.preventDefault();

        jQuery('.header-menu').addClass('open-header-search-form-block');
        searchInputTimer = setTimeout(function () {
            jQuery('.header-search-form-block .form-control').focus();
        }, 100);

    });

    /* Close Search Form (Close btn / focusout / scroll)
    ------------------------------------------------------------------------- */
    jQuery('a.form-close-btn').on('click', function (e) {
        e.preventDefault();
        gfortCloseSearchFormfn();
    });
    jQuery('.header-search-form-block .form-control').on('focusout', function () {
        gfortCloseSearchFormfn();
    });
    jQuery(window).scroll(function () {
        gfortCloseSearchFormfn();
    });
    
    
      /* =========================================================================
    Google Maps
    ========================================================================= */
    /* Markers Function
    ------------------------------------------------------------------------- */
    function mapMarkersfn(currentMapIndex) {

        var mapMarkers = [],
            infoWindowContent,
            infoWindowOptions,
            infoWindowBox = [];

        jQuery('#gfort-main-google-map-block-' + currentMapIndex + ' .google-map-marker').each(function (index) {

            var el = jQuery(this);

            /* Marker Integration
            ----------------------------------------------------------------- */
            mapMarkers[index] = new google.maps.Marker({
                icon: el.attr('data-marker-image'),
                position: new google.maps.LatLng(el.attr('data-marker-lat'), el.attr('data-marker-lng'))
            });
            mapMarkers[index].setMap(elCurrentMap[currentMapIndex]);

            /* infoWindow
            ----------------------------------------------------------------- */
            infoWindowContent = document.createElement('div');
            infoWindowContent.className = "infoWindow-block-container";
            infoWindowContent.innerHTML = jQuery(this).html();

            infoWindowOptions = {
                zIndex: 80,
                maxWidth: 280,
                alignBottom: true,
                closeBoxMargin: '0',
                disableAutoPan: false,
                content: infoWindowContent,
                enableEventPropagation: true,
                boxClass: 'infoWindow-block',
                pixelOffset: new google.maps.Size(-140, 0),
                infoBoxClearance: new google.maps.Size(1, 1),
                closeBoxURL: "/SiteAssets/plugins/infobox/close.png"
            };

            infoWindowBox[index] = new InfoBox(infoWindowOptions);

            /* Click Event (For Markers)
            ----------------------------------------------------------------- */
            google.maps.event.addListener(mapMarkers[index], 'click', function () {
                var i;
                for (i = 0; i < mapMarkers.length; i += 1) {
                    infoWindowBox[i].close();
                }
                infoWindowBox[index].open(elCurrentMap[currentMapIndex], this);
            });

        });

    }

    /* Main Function
    ------------------------------------------------------------------------- */
    function gfortGoogleMapfn() {
        jQuery('.google-map-block').each(function (index) {

            var elMapOptions,
                el = jQuery(this),
                elZoom = parseInt(el.attr('data-zoom'), 10),
                elMapLatLng = new google.maps.LatLng(el.attr('data-lat'), el.attr('data-lng'));

            if (el.hasClass('google-map-block-collapsed')) {
                if (parallaxEffect === true) {
                    el.addClass('parallax-section');
                    jQuery.getScript('/SiteAssets/plugins/parallax/jquery.parallax-1.1.3.min.js', function () {
                        gfortParallaxfn();
                    });
                }
                el.prepend('<a href="#" class="open-google-map-btn"><i class="glyphicon glyphicon-map-marker"></i></a>');
                el.prepend('<a href="#" class="close-google-map-btn">&times;</a>');
            }

            el.attr('id', 'gfort-main-google-map-block-' + index);
            el.append('<div class="gfort-google-map" id="gfort-google-map-' + index + '"></div>');

            elMapOptions = {
                zoom: elZoom,
                panControl: false,
                scrollwheel: false,
                center: elMapLatLng,
                mapTypeControl: true
            };

            elCurrentMap[index] = new google.maps.Map(document.getElementById('gfort-google-map-' + index), elMapOptions);

            mapMarkersfn(index);

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.google-map-block').length) {
        var googleMapAPIKey = jQuery('.google-map-block').attr('data-api-key');
        jQuery.getScript('https://maps.googleapis.com/maps/api/js?key=' + googleMapAPIKey, function () {
            jQuery.getScript('/SiteAssets/plugins/infobox/infobox_packed.js', function () {
                gfortGoogleMapfn();
            });
        });
    }

    /* collapsed / uncollapsed
    ------------------------------------------------------------------------- */
    jQuery('body').on('click', '.open-google-map-btn', function (e) {
        e.preventDefault();
        jQuery(this).parents('.google-map-block').addClass('uncollapsed');
    });
    jQuery('body').on('click', '.close-google-map-btn', function (e) {
        e.preventDefault();
        jQuery(this).parents('.google-map-block').removeClass('uncollapsed');
    });



   
    /* =========================================================================
    OWL Slider
    ========================================================================= */
    /* Main Fuction
    ------------------------------------------------------------------------- */
    function gfortOWLSliderfn(gfortOWLSliderID) {

        var el = jQuery(gfortOWLSliderID),
            rtlDirection = false,
            sliderItems = el.attr('data-slider-items'),
            sliderItemsMD = el.attr('data-slider-items-md'),
            sliderItemsSM = el.attr('data-slider-items-sm'),
            sliderItemsXS = el.attr('data-slider-items-xs'),
            sliderItemsXXS = el.attr('data-slider-items-xxs'),
            sliderPagination = el.attr('data-slider-dots'),
            sliderNavigation = el.attr('data-slider-arrows'),
            sliderAutoPlay = el.attr('data-slider-autoplay'),
            sliderAnimateIn = el.attr('data-slider-animate-in'),
            sliderAnimateOut = el.attr('data-slider-animate-out'),
            sliderItemsSpace = el.attr('data-slider-items-space'),
            thumbsSlider,
            thumbsSliderItemsCount,
            thumbsSliderActiveItem,
            thumbsSliderItems = el.attr('data-slider-thumbs-items'),
            thumbsSliderItemsMD = el.attr('data-slider-thumbs-items-md'),
            thumbsSliderItemsSM = el.attr('data-slider-thumbs-items-sm'),
            thumbsSliderItemsXS = el.attr('data-slider-thumbs-items-xs'),
            thumbsSliderItemsXXS = el.attr('data-slider-thumbs-items-xxs'),
            sliderThumbs = el.attr('data-slider-thumbs');

        /* AutoPlay
        --------------------------------------------------------------------- */
        if (sliderAutoPlay === 'true') {
            sliderAutoPlay = true;
        } else {
            sliderAutoPlay = false;
        }

        /* Navigation
        --------------------------------------------------------------------- */
        if (sliderNavigation === 'true') {
            sliderNavigation = true;
        } else {
            sliderNavigation = false;
        }

        /* Pagination
        --------------------------------------------------------------------- */
        if (sliderPagination === 'true') {
            sliderPagination = true;
        } else {
            sliderPagination = false;
        }

        /* Items Space
        --------------------------------------------------------------------- */
        if (sliderItemsSpace === undefined || sliderItemsSpace < 0 || sliderItemsSpace === 'undefined') {
            sliderItemsSpace = 0;
        } else {
            sliderItemsSpace = parseInt(sliderItemsSpace, 10);
        }

        /* Thumbs Slider
        --------------------------------------------------------------------- */
        if (sliderThumbs === 'true') {

            sliderPagination = false;

            thumbsSlider = '<div class="gfort-owl-thumbs-slider gfort-owl-slider owl-carousel owl-theme">';

            for (thumbsSliderItemsCount = 0; thumbsSliderItemsCount < el.find('.gfort-owl-slider-item').length; thumbsSliderItemsCount += 1) {
                thumbsSlider += '<div class="gfort-owl-slider-item"><a href="#" data-slider-jump-to="' + thumbsSliderItemsCount + '"><img src="' + el.find('.gfort-owl-slider-item:nth-child(' + parseInt(thumbsSliderItemsCount + 1, 10) + ')').attr('data-slide-thumb') + '" alt="Slide Image" /></a></div>';
            }

            thumbsSlider += '</div>';

            el.wrap('<div class="gfort-thumbs-owl-slider"></div>');
            el.parent().append(thumbsSlider);

        }

        /* undefined Items Values Normal Slider
        --------------------------------------------------------------------- */
        if (sliderItems === undefined || sliderItems < 1 || sliderItems === 'undefined') {
            sliderItems = 1;
        }
        if (sliderItemsMD === undefined || sliderItemsMD < 1 || sliderItemsMD === 'undefined') {
            sliderItemsMD = 1;
        }
        if (sliderItemsSM === undefined || sliderItemsSM < 1 || sliderItemsSM === 'undefined') {
            sliderItemsSM = 1;
        }
        if (sliderItemsXS === undefined || sliderItemsXS < 1 || sliderItemsXS === 'undefined') {
            sliderItemsXS = 1;
        }
        if (sliderItemsXXS === undefined || sliderItemsXXS < 1 || sliderItemsXXS === 'undefined') {
            sliderItemsXXS = 1;
        }

        /* undefined Items Values Thumbs Slider
        --------------------------------------------------------------------- */
        if (thumbsSliderItems === undefined || thumbsSliderItems < 1 || thumbsSliderItems === 'undefined') {
            thumbsSliderItems = 1;
        }
        if (thumbsSliderItemsMD === undefined || thumbsSliderItemsMD < 1 || thumbsSliderItemsMD === 'undefined') {
            thumbsSliderItemsMD = 1;
        }
        if (thumbsSliderItemsSM === undefined || thumbsSliderItemsSM < 1 || thumbsSliderItemsSM === 'undefined') {
            thumbsSliderItemsSM = 1;
        }
        if (thumbsSliderItemsXS === undefined || thumbsSliderItemsXS < 1 || thumbsSliderItemsXS === 'undefined') {
            thumbsSliderItemsXS = 1;
        }
        if (thumbsSliderItemsXXS === undefined || thumbsSliderItemsXXS < 1 || thumbsSliderItemsXXS === 'undefined') {
            thumbsSliderItemsXXS = 1;
        }

        /* Animation
        --------------------------------------------------------------------- */
        if (sliderAnimateIn === undefined || sliderAnimateIn < 0 || sliderAnimateIn === 'undefined') {
            sliderAnimateIn = '';
        }
        if (sliderAnimateOut === undefined || sliderAnimateOut < 0 || sliderAnimateOut === 'undefined') {
            sliderAnimateOut = '';
        }

        /* Main Items
        --------------------------------------------------------------------- */
        if (sliderItems === '1') {
            sliderItemsMD = 1;
            sliderItemsSM = 1;
            sliderItemsXS = 1;
            sliderItemsXXS = 1;
        }

        /* Direction
        --------------------------------------------------------------------- */
        if (pageDirection === 'rtl') {
            rtlDirection = true;
        }

        /* Main OWL SLider Integration
        --------------------------------------------------------------------- */
        el.owlCarousel({
            loop: true,
            navSpeed: 600,
            dotsSpeed: 600,
            lazyLoad: true,
            rtl: rtlDirection,
            autoHeight: false,
            autoplaySpeed: 600,
            responsiveClass: true,
            nav: sliderNavigation,
            dots: sliderPagination,
            autoplayHoverPause: true,
            margin: sliderItemsSpace,
            autoplay: sliderAutoPlay,
            animateIn: sliderAnimateIn,
            animateOut: sliderAnimateOut,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                '0': {items: parseInt(sliderItemsXXS, 10)},   // Mobile Portrait      >= 0 < 480px
                '480': {items: parseInt(sliderItemsXS, 10)},  // Mobile Landscape     >= 480px < 768px
                '768': {items: parseInt(sliderItemsSM, 10)},  // Tablet Portrait      >= 768px < 992px
                '992': {items: parseInt(sliderItemsMD, 10)},  // Tablet Landscape     >= 992px < 1200px
                '1200': {items: parseInt(sliderItems, 10)}    // Desktop              >= 1200px
            },
            onInitialized: function () {
                el.find('.owl-item.cloned [data-gfort-lightbox-group]').removeAttr('data-gfort-lightbox-group');
            },
            onTranslate: function (event) {
                if (sliderThumbs === 'true') {

                    thumbsSliderActiveItem = event.item.index - el.find('.owl-item.cloned').length / 2;

                    if (thumbsSliderActiveItem === -1) {
                        thumbsSliderActiveItem = el.find('.owl-item').length - el.find('.owl-item.cloned').length - 1;
                    }

                    el.parent().find('.gfort-owl-thumbs-slider').trigger('to.owl.carousel', [thumbsSliderActiveItem, 300, true]);
                    el.parent().find('.gfort-owl-thumbs-slider').find('.gfort-owl-slider-item a').removeClass('gfort-owl-slider-active-item');
                    el.parent().find('.gfort-owl-thumbs-slider').find('.gfort-owl-slider-item a[data-slider-jump-to="' + thumbsSliderActiveItem + '"]').addClass('gfort-owl-slider-active-item');

                }
            }
        });

        /* Thumbs Slider Integration
        --------------------------------------------------------------------- */
        jQuery('.gfort-owl-thumbs-slider').owlCarousel({
            margin: 5,
            nav: false,
            dots: false,
            loop: false,
            lazyLoad: true,
            autoplay: false,
            rtl: rtlDirection,
            autoHeight: false,
            autoplaySpeed: 400,
            responsiveClass: true,
            autoplayHoverPause: true,
            responsive: {
                '0': {items: parseInt(thumbsSliderItemsXXS, 10)},   // Mobile Portrait      >= 0 < 480px
                '480': {items: parseInt(thumbsSliderItemsXS, 10)},  // Mobile Landscape     >= 480px < 768px
                '768': {items: parseInt(thumbsSliderItemsSM, 10)},  // Tablet Portrait      >= 768px < 992px
                '992': {items: parseInt(thumbsSliderItemsMD, 10)},  // Tablet Landscape     >= 992px < 1200px
                '1200': {items: parseInt(thumbsSliderItems, 10)}    // Desktop              >= 1200px
            },
            onInitialized: function () {
                jQuery('[data-slider-jump-to="0"]').addClass('gfort-owl-slider-active-item');
            }
        });

        /* Jump to Slide
        --------------------------------------------------------------------- */
        jQuery('[data-slider-jump-to]').on('click', function (e) {
            e.preventDefault();
            jQuery(this).parents('.gfort-thumbs-owl-slider').find('.gfort-owl-slider').trigger('to.owl.carousel', [jQuery(this).attr('data-slider-jump-to'), 600, true]);
        });

    }

    function gfortOWLSliderinitfn() {
        jQuery('.gfort-owl-slider').each(function (index) {
            var gfortOWLSliderID = jQuery(this).attr('id', 'gfort-owl-slider-' + index);
            gfortOWLSliderfn(gfortOWLSliderID);
        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.gfort-owl-slider').length) {
        if (!jQuery('link[href="/SiteAssets/plugins/owl-carousel/assets/owl.carousel.min.css"]').length) {
            jQuery('head').prepend('<link rel="stylesheet" href="/SiteAssets/plugins/owl-carousel/assets/owl.carousel.min.css">');
            jQuery('head').prepend('<link rel="stylesheet" href="/SiteAssets/plugins/owl-carousel/assets/owl.theme.default.min.css">');
            jQuery.getScript('/SiteAssets/plugins/owl-carousel/owl.carousel.min.js', function () {
                gfortOWLSliderinitfn();
            });
        } else {
            jQuery.getScript('/SiteAssets/plugins/owl-carousel/owl.carousel.min.js', function () {
                gfortOWLSliderinitfn();
            });
        }
    }


    /* =========================================================================
    Instagram Feed
    ========================================================================= */
    /* Main Fuction
    ------------------------------------------------------------------------- */
    function gfortInstafn() {
        jQuery('.instagram-feed-block').each(function () {

            jQuery(this).gfortInsta({
                textSlogan: 'follow on instagram',
                linkClass: 'overlay-hover scale-hover-2x',
                userID: jQuery(this).attr('data-instagram-userid'),
                limit: jQuery(this).attr('data-instagram-feed-count'),
                accessToken: jQuery(this).attr('data-instagram-accesstoken')
            });

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.instagram-feed-block').length) {
        jQuery.getScript('/siteassets/plugins/gfortinsta/gfortInsta.min.js', function () {
            gfortInstafn();
        });
    }



    /* =========================================================================
    Twitter Feed
    ========================================================================= */
    /* Main Fuction
    ------------------------------------------------------------------------- */
    function gfortTwitterfn() {
        jQuery('.twitter-feed-block').each(function (index) {

            var el = jQuery(this),
                elTwitterSliderID,
                sliderNavigation = el.attr('data-slider-arrows'),
                sliderPagination = el.attr('data-slider-dots'),
                sliderItemsSpace = el.attr('data-slider-items-space'),
                sliderAutoPlay = el.attr('data-slider-autoplay'),
                sliderItems = el.attr('data-slider-items'),
                sliderItemsMD = el.attr('data-slider-items-md'),
                sliderItemsSM = el.attr('data-slider-items-sm'),
                sliderItemsXS = el.attr('data-slider-items-xs'),
                sliderItemsXXS = el.attr('data-slider-items-xxs'),
                sliderAnimateIn = el.attr('data-slider-animate-in'),
                sliderAnimateOut = el.attr('data-slider-animate-out');

            el.twittie({
                dateFormat: '%d %b %Y',
                loadingText: '<i class="fa fa-spinner fa-pulse fa-fw fa-2x"></i>',
                count: jQuery(this).attr('data-twitter-feed-count'),
                username: jQuery(this).attr('data-twitter-username'),
                apiPath: '/siteassets/plugins/tweetie/api/tweet.php',
                template: '<div class="gfort-twitter-item-container"><div class="twitter-head"><div class="twitter-avatar"><a href="https://twitter.com/intent/follow?original_referer=&screen_name={{user_name}}" target="_blank">{{avatar}}</a></div><div class="twitter-user-screen-name"><span class="twitter-username"><a href="https://twitter.com/{{user_name}}" target="_blank"><i class="fa fa-twitter"></i><span>{{user_name}}</span></a></span><span class="twitter-screen-name">{{screen_name}}</span></div></div><div class="twitter-body"><div class="twitter-tweet"><p>{{tweet}}</p></div><div class="twitter-date-btns"><div class="twitter-date"><a href="{{url}}" target="_blank">{{date}}</a></div><div class="twitter-btns"><a href="https://twitter.com/intent/tweet?in_reply_to={{tweet_id}}" title="Reply" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-reply"></i></a><a href="https://twitter.com/intent/retweet?tweet_id={{tweet_id}}" title="Retweet" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-retweet"></i></a><a href="https://twitter.com/intent/favorite?tweet_id={{tweet_id}}" title="Favorite" target="_blank" data-toggle="tooltip" data-placement="top"><i class="fa fa-star"></i></a></div></div></div></div>'
            }, function () {

                /* Slider
                ------------------------------------------------------------- */
                if (el.hasClass('twitter-slider')) {

                    /* Slider Attibutes
                    --------------------------------------------------------- */
                    if (sliderNavigation === undefined || sliderNavigation < 0 || sliderNavigation === 'undefined') {
                        sliderNavigation = false;
                    }

                    if (sliderPagination === undefined || sliderPagination < 0 || sliderPagination === 'undefined') {
                        sliderPagination = false;
                    }

                    if (sliderItemsSpace === undefined || sliderItemsSpace < 0 || sliderItemsSpace === 'undefined') {
                        sliderItemsSpace = 0;
                    }

                    if (sliderAutoPlay === undefined || sliderAutoPlay < 0 || sliderAutoPlay === 'undefined') {
                        sliderAutoPlay = false;
                    }

                    if (sliderItems === undefined || sliderItems < 0 || sliderItems === 'undefined') {
                        sliderItems = 1;
                    }

                    if (sliderItemsMD === undefined || sliderItemsMD < 0 || sliderItemsMD === 'undefined') {
                        sliderItemsMD = 1;
                    }

                    if (sliderItemsSM === undefined || sliderItemsSM < 0 || sliderItemsSM === 'undefined') {
                        sliderItemsSM = 1;
                    }

                    if (sliderItemsXS === undefined || sliderItemsXS < 0 || sliderItemsXS === 'undefined') {
                        sliderItemsXS = 1;
                    }

                    if (sliderItemsXXS === undefined || sliderItemsXXS < 0 || sliderItemsXXS === 'undefined') {
                        sliderItemsXXS = 1;
                    }

                    if (sliderAnimateIn === undefined || sliderAnimateIn < 0 || sliderAnimateIn === 'undefined') {
                        sliderAnimateIn = '';
                    }

                    if (sliderAnimateOut === undefined || sliderAnimateOut < 0 || sliderAnimateOut === 'undefined') {
                        sliderAnimateOut = '';
                    }

                    /* Replace ul and li with slider divs
                    --------------------------------------------------------- */
                    el.find('ul.gfort-twitter-list').wrap('<div class="gfort-owl-slider owl-carousel owl-theme" id="gfort-twitter-owl-slider-' + index + '" data-slider-arrows="' + sliderNavigation + '" data-slider-dots="' + sliderPagination + '" data-slider-items-space="' + sliderItemsSpace + '" data-slider-autoplay="' + sliderAutoPlay + '" data-slider-items="' + sliderItems + '" data-slider-items-md="' + sliderItemsMD + '" data-slider-items-sm="' + sliderItemsSM + '" data-slider-items-xs="' + sliderItemsXS + '" data-slider-items-xxs="' + sliderItemsXXS + '" data-slider-animate-in="' + sliderAnimateIn + '" data-slider-animate-out="' + sliderAnimateOut + '"></div>').contents().unwrap();

                    el.find('li.gfort-twitter-item').each(function () {
                        jQuery(this).wrap('<div class="gfort-owl-slider-item"><div class="gfort-twitter-item"></div></div>').contents().unwrap();
                    });

                    /* Create OWL SLider
                    --------------------------------------------------------- */
                    elTwitterSliderID = jQuery('#' + el.find('.gfort-owl-slider').attr('id'));
                    gfortOWLSliderfn(elTwitterSliderID);

                }

            });

        });
    }

    /* Condition
    ------------------------------------------------------------------------- */
    if (jQuery('.twitter-feed-block').length) {
        jQuery.getScript('/SiteAssets/plugins/tweetie/tweetie.min.js', function () {
            if (jQuery('.twitter-feed-block').hasClass('twitter-slider')) {
                if (!jQuery('link[href="/SiteAssets/plugins/owl-carousel/assets/owl.carousel.min.css"]').length) {
                    jQuery('head').prepend('<link rel="stylesheet" href="/siteassets/plugins/owl-carousel/assets/owl.carousel.min.css">');
                    jQuery('head').prepend('<link rel="stylesheet" href="/siteassets/plugins/owl-carousel/assets/owl.theme.default.min.css">');
                    jQuery.getScript('/SiteAssets/plugins/owl-carousel/owl.carousel.min.js', function () {
                        gfortTwitterfn();
                    });
                } else {
                    jQuery.getScript('/SiteAssets/plugins/owl-carousel/owl.carousel.min.js', function () {
                        gfortTwitterfn();
                    });
                }
            } else {
                gfortTwitterfn();
            }
        });
    }


    /* =========================================================================
    Tool Tip
    ========================================================================= 
    jQuery('body').tooltip({
        container: 'body',
        selector: '[data-toggle="tooltip"]'
    });
*/

    


});

/* =========================================================================
    Custom Contact Form
    =========================================================================*/    
/*
function sendEmailOld(form) {

    // FORM VALIDATION
      
         if( form.name.value == "" )
         {
            alert( "Please provide your name!" );
            $("[name='name']").css("outline", "3px solid red");
            form.name.focus() ;
            return false;
         }
         
         if( form.from.value == "" )
         {
            alert( "Please provide your Email!" );
            $("[name='from']").css("outline", "3px solid red");
            form.from.focus() ;
            return false;
         }
         
	         //Validate email is a correct address
	         var emailID = form.from.value;
	         atpos = emailID.indexOf("@");
	         dotpos = emailID.lastIndexOf(".");
	         
	         if (atpos < 1 || ( dotpos - atpos < 2 )) 
	         {
	            alert("Please enter correct email address!")
	            $("[name='from']").css("outline", "3px solid red");
	            form.from.focus() ;
	            return false;
	         }
         
         if( form.department.value == "" )
         {
            alert( "Please Choose a Department!" );
            $("[name='department']").css("outline", "3px solid red");
            form.department.focus() ;
            return false;
         }

         if( form.phone.value !== "" )
		 	{
		 		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		 		if(form.phone.value.match(phoneno))
		        {
				
		        }
		      	else
		        {
		        alert("Please enter a 10 digit phone number.");
		        $("[name='phone']").css("outline", "3px solid red");
		        return false;
		        }
		 	}         
         
         if( form.subject.value == "" )
         {
            alert( "Please provide your Subject!" );
            $("[name='subject']").css("outline", "3px solid red");
            form.subject.focus() ;
            return false;
         }

		if( form.body.value == "" )
         {
            alert( "Please provide your Message!" );
            $("[name='body']").css("outline", "3px solid red");
            form.body.focus() ;
            return false;
         }
         
    // Get Email from Server
    // NOT AUTHENTICATING WHEN PUBLISHED. FIND DIFFERENT METHOD.
	var department = form.department.value;
	
	
	// Sharepoint AJAX List Call 
	$.ajax  
    ({  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists(guid'5e8e8020-99cb-47bb-bf4c-6f5df18f4c71')/Items?$filter=Title eq '" + department +"'",  
        type: "GET",  
        headers:  
        {  
            "Accept": "application/json;odata=verbose",  
            "Content-Type": "application/json;odata=verbose",  
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
            "IF-MATCH": "*",  
            "X-HTTP-Method": null  
        },  
        cache: false,  
        success: function (data)   
        {
        
                
        
        to
        
       // var to = data.d.results[0].EMail;
        var cc = data.d.results[0].EmailCC;
        var bcc = data.d.results[0].EmailBCC;
		var name = form.name.value;
		var from = form.from.value;
		var phone = form.phone.value;
		var subject = form.subject.value;
		var body = form.body.value;		
		
		// Set emailCC to not be null
		var emailCC = "";
		if (cc != null) 
			{
			 emailCC = cc;
			}
		
		// Set emailBCC to not be null
		var emailBCC = "";
		if (bcc != null) 
			{
			 emailBCC = bcc;
			}

		    //Make AJAX request to send email
			$.ajax({
			    contentType: 'application/json',
			    url: "/_api/SP.Utilities.Utility.SendEmail",
			    type: "POST",
			    data: JSON.stringify({
			        'properties': {
			            '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
			            'From': from,
			            'To': { 'results': [to] },
			            'CC': { 'results': [emailCC] },
			            'BCC': { 'results': [emailBCC] },
			            'Body': "Name: " + name + "<br /><br />" + "Email: " + from + "<br /><br />" + "Subject: " + subject + "<br /><br />" + "Message: " + body,
			            'Subject': subject
			        }
			    }
			  ),
		
			    headers: {
			        "Accept": "application/json;odata=verbose",
			        "content-type": "application/json;odata=verbose",
			        "X-RequestDigest": $("#__REQUESTDIGEST").val(), 
			    },
		
			    success: function (data) {
			       alert("Your Email has been sent!");
			       window.location.href = "/";
			    },
		
			    error: function (err) {
			        alert(err.responseText);
			        debugger;
			    }
			});
        
        },  
        error: function(data)  
        {    
            alert("Please Specify a department to send the email.");
        }  
        
    });  

		

}
*/

// Call RTI Carousel

$('.carousel').carousel({
  interval: 2000
})


function sendEmail(form) {

    // FORM VALIDATION
      
         if( form.name.value == "" )
         {
            alert( "Please provide your name!" );
            $("[name='name']").css("outline", "3px solid red");
            form.name.focus() ;
            return false;
         }
         
         if( form.from.value == "" )
         {
            alert( "Please provide your Email!" );
            $("[name='from']").css("outline", "3px solid red");
            form.from.focus() ;
            return false;
         }
         
	         //Validate email is a correct address
	         var emailID = form.from.value;
	         atpos = emailID.indexOf("@");
	         dotpos = emailID.lastIndexOf(".");
	         
	         if (atpos < 1 || ( dotpos - atpos < 2 )) 
	         {
	            alert("Please enter correct email address!")
	            $("[name='from']").css("outline", "3px solid red");
	            form.from.focus() ;
	            return false;
	         }
         
         if( form.department.value == "" )
         {
            alert( "Please Choose a Department!" );
            $("[name='department']").css("outline", "3px solid red");
            form.department.focus() ;
            return false;
         }

         if( form.phone.value !== "" )
		 	{
		 		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		 		if(form.phone.value.match(phoneno))
		        {
				
		        }
		      	else
		        {
		        alert("Please enter a 10 digit phone number.");
		        $("[name='phone']").css("outline", "3px solid red");
		        return false;
		        }
		 	}         
         
         if( form.subject.value == "" )
         {
            alert( "Please provide your Subject!" );
            $("[name='subject']").css("outline", "3px solid red");
            form.subject.focus() ;
            return false;
         }

		if( form.body.value == "" )
         {
            alert( "Please provide your Message!" );
            $("[name='body']").css("outline", "3px solid red");
            form.body.focus() ;
            return false;
         }
         
         
        //Set Variables from Form 
		var department = form.department.value;
		var name = form.name.value;
		var from = form.from.value;
		var phone = form.phone.value;
		var subject = form.subject.value;
		var body = form.body.value;
				
		
		// var to = "i:0#.w|ng\christopher.d.bruce";		
		var to = "christopher.d.bruce.mil@mail.mil";
		
		// Set emailCC to not be null
		var emailCC = "";
				
		// Set emailBCC to not be null
		var emailBCC = "";
		
		    //Make AJAX request to send email
			$.ajax({
			    contentType: 'application/json',
			    url: "/_api/SP.Utilities.Utility.SendEmail",
			    type: "POST",
			    data: JSON.stringify({
			        'properties': {
			            '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
			            'From': from,
			            'To': { 'results': [to] },
			            'CC': { 'results': [emailCC] },
			            'BCC': { 'results': [emailBCC] },
			            'Body': "Name: " + name + "<br /><br />" + "Email: " + from + "<br /><br />" + "Subject: " + subject + "<br /><br />" + "Message: " + body,
			            'Subject': subject
			        }
			    }
			  ),
		
			    headers: {
			        "Accept": "application/json;odata=verbose",
			        "content-type": "application/json;odata=verbose",
			        "X-RequestDigest": $("#__REQUESTDIGEST").val(), 
			    },
		
			    success: function (data) {
			       alert("Your Email has been sent!");
			       window.location.href = "/";
			    },
		
			    error: function (err) {
			        alert(err.responseText);
			        debugger;
			    }
			});
         

}

function getEmail(form) {

var department = form.emailget.value;

			$.ajax ({  
		        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists(guid'5e8e8020-99cb-47bb-bf4c-6f5df18f4c71')/Items?$filter=Title eq '" + department +"'",  
		        type: "GET",  
		        headers:  
		        {  
		            "Accept": "application/json;odata=verbose",  
		            "Content-Type": "application/json;odata=verbose",  
		            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
		            "IF-MATCH": "*",  
		            "X-HTTP-Method": null  
		        },  
		        cache: false,  		
			    success: function (data) {
			    	console.log(data);
			       alert("Your Data is: " + data.d.results[0].EMail);
			    },
		
			    error: function (err) {
			        alert(err.responseText);
			        debugger;
			    }
			});
}

function AddListItem()  
{  
    var name = "Test";   
    $.ajax  
        ({  
        url: "https://ok.ng.mil/_api/web/lists/GetByTitle('test')/items",  
        type: "POST",  
        data: JSON.stringify  
        ({  
            __metadata:  
            {  
                type: "SP.Data.TestListItem"  
            },  
            Title: name,  
        }),  
        headers:  
        {  
           "Accept": "application/json;odata=verbose",  
           "Content-Type": "application/json;odata=verbose",  
           "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
           "X-HTTP-Method": "POST"  
        },  
        success: function(data, status, xhr)  
        {  
            alert("Added");  
        },  
        error: function(xhr, status, error)  
        {  
            alert("Nope, Didn't work"); 
        }  
    });  
}  



// Mobile app views ?view=mobileapp

//Get page URL Variable
   function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var view = getUrlVars()["view"];

if (view == 'mobileapp' ) {
	// Hide Main Menu Bar
	$(".header-menu").hide();
	
	// Hide Top Bar Widgets
	$(".top-header-widget").hide();
	
	// Add url parameter to all future links
	$("a[href]").each(function() {
   		var $this = $(this);       
   		var _href = $this.attr("href"); 
   		$this.attr("href", _href + '?view=mobileapp');
	});
} 

