(this["webpackJsonpGunbot.com"]=this["webpackJsonpGunbot.com"]||[]).push([[38],{53:function(t,e,r){"use strict";function n(t,e){return v.set(t,c(e))}r.d(e,"a",(function(){return D})),r.d(e,"b",(function(){return W})),r.d(e,"c",(function(){return u})),r.d(e,"e",(function(){return y})),r.d(e,"f",(function(){return j}));var o,i=r(11),a=r(12),s=r(10),d=r(9),u=function(t){var e=t.onRead,r=t.onRender,n=t.uncachedValues,o=void 0===n?new Set:n,s=t.useCache,d=void 0===s||s;return function(t){void 0===t&&(t={});var n=Object(i.c)(t,[]),s={},u=[],f=!1;function c(t,e){t.startsWith("--")&&(n.hasCSSVariable=!0);var r=s[t];s[t]=e,s[t]!==r&&(~u.indexOf(t)||u.push(t),f||(f=!0,a.b.render(l.render)))}var l={get:function(t,r){return void 0===r&&(r=!1),r||!d||o.has(t)||void 0===s[t]?e(t,n):s[t]},set:function(t,e){if("string"==typeof t)c(t,e);else for(var r in t)c(r,t[r]);return this},render:function(t){return void 0===t&&(t=!1),!f&&!0!==t||(r(s,n,u),f=!1,u.length=0),this}};return l}},f=/([a-z])([A-Z])/g,c=function(t){return t.replace(f,"$1-$2").toLowerCase()},l=new Map,v=new Map,h=["Webkit","Moz","O","ms",""],g=h.length,p="undefined"!=typeof document,m=function(t,e){void 0===e&&(e=!1);var r,i=e?v:l;return i.has(t)||(p?function(t){o=o||document.createElement("div");for(var e=0;e<g;e++){var r=h[e],i=""===r,a=i?t:r+t[0].toUpperCase()+t.slice(1);if(a in o.style||i){if(i&&"clipPath"===t&&v.has(t))return;l.set(t,a),n(t,(i?"":"-")+c(a))}}}(t):n(r=t,r)),i.get(t)||t},b=["","X","Y","Z"],j=["translate","scale","rotate","skew","transformPerspective"].reduce((function(t,e){return b.reduce((function(t,r){return t.push(e+r),t}),t)}),["x","y","z"]),w=j.reduce((function(t,e){return t[e]=!0,t}),{});function y(t){return!0===w[t]}function O(t,e){return j.indexOf(t)-j.indexOf(e)}var k=new Set(["originX","originY","originZ"]),C=Object(i.a)(Object(i.a)({},s.g),{transform:Math.round}),R={color:s.b,backgroundColor:s.b,outlineColor:s.b,fill:s.b,stroke:s.b,borderColor:s.b,borderTopColor:s.b,borderRightColor:s.b,borderBottomColor:s.b,borderLeftColor:s.b,borderWidth:s.j,borderTopWidth:s.j,borderRightWidth:s.j,borderBottomWidth:s.j,borderLeftWidth:s.j,borderRadius:s.j,radius:s.j,borderTopLeftRadius:s.j,borderTopRightRadius:s.j,borderBottomRightRadius:s.j,borderBottomLeftRadius:s.j,width:s.j,maxWidth:s.j,height:s.j,maxHeight:s.j,size:s.j,top:s.j,right:s.j,bottom:s.j,left:s.j,padding:s.j,paddingTop:s.j,paddingRight:s.j,paddingBottom:s.j,paddingLeft:s.j,margin:s.j,marginTop:s.j,marginRight:s.j,marginBottom:s.j,marginLeft:s.j,rotate:s.d,rotateX:s.d,rotateY:s.d,rotateZ:s.d,scale:s.l,scaleX:s.l,scaleY:s.l,scaleZ:s.l,skew:s.d,skewX:s.d,skewY:s.d,distance:s.j,translateX:s.j,translateY:s.j,translateZ:s.j,x:s.j,y:s.j,z:s.j,perspective:s.j,opacity:s.a,originX:s.i,originY:s.i,originZ:s.j,zIndex:C,fillOpacity:s.a,strokeOpacity:s.a,numOctaves:C},S=function(t){return R[t]},x=function(t,e){return e&&"number"==typeof t?e.transform(t):t},T="scrollLeft",L="scrollTop",X=new Set([T,L]),Y=new Set([T,L,"transform"]),A={x:"translateX",y:"translateY",z:"translateZ"};function B(t){return"function"==typeof t}function W(t,e,r,n,o,i,a,s){void 0===e&&(e=!0),void 0===r&&(r={}),void 0===n&&(n={}),void 0===o&&(o={}),void 0===i&&(i=[]),void 0===a&&(a=!1),void 0===s&&(s=!0);var d,u=!0,f=!1,c=!1;for(d in t){var l=t[d],v=S(d),h=x(l,v);y(d)?(f=!0,n[d]=h,i.push(d),u&&(v.default&&l!==v.default||!v.default&&0!==l)&&(u=!1)):k.has(d)?(o[d]=h,c=!0):Y.has(d)&&B(h)||(r[m(d,a)]=h)}return!f&&"function"!=typeof t.transform||(r.transform=function(t,e,r,n,o,i){void 0===i&&(i=!0);var a="",s=!1;r.sort(O);for(var d=r.length,u=0;u<d;u++){var f=r[u];a+=(A[f]||f)+"("+e[f]+") ",s="z"===f||s}return!s&&o?a+="translateZ(0)":a=a.trim(),B(t.transform)?a=t.transform(e,n?"":a):i&&n&&(a="none"),a}(t,n,i,u,e,s)),c&&(r.transformOrigin=(o.originX||"50%")+" "+(o.originY||"50%")+" "+(o.originZ||0)),r}function Z(t){var e=void 0===t?{}:t,r=e.enableHardwareAcceleration,n=void 0===r||r,o=e.isDashCase,i=void 0===o||o,a=e.allowTransformNone,s=void 0===a||a,d={},u={},f={},c=[];return function(t){return c.length=0,W(t,n,d,u,f,c,i,s),d}}var H=u({onRead:function(t,e){var r=e.element,n=e.preparseOutput,o=S(t);if(y(t))return o&&o.default||0;if(X.has(t))return r[t];var i=window.getComputedStyle(r,null).getPropertyValue(m(t,!0))||0;return n&&o&&o.test(i)&&o.parse?o.parse(i):i},onRender:function(t,e,r){var n=e.element,o=e.hasCSSVariable;if(Object.assign(n.style,(0,e.buildStyles)(t)),o)for(var i=r.length,a=0;a<i;a++){var s=r[a];s.startsWith("--")&&n.style.setProperty(s,t[s])}~r.indexOf(T)&&(n[T]=t[T]),~r.indexOf(L)&&(n[L]=t[L])},uncachedValues:X}),V=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues"]),z=function(t,e){return s.j.transform(t*e)},M={x:0,y:0,width:0,height:0};function E(t,e,r){return"string"==typeof t?t:s.j.transform(e+r*t)}var N={enableHardwareAcceleration:!1,isDashCase:!1};function D(t,e,r,n,o,a){void 0===e&&(e=M),void 0===n&&(n=Z(N)),void 0===o&&(o={style:{}}),void 0===a&&(a=!0);var s,d,u,f=t.attrX,l=t.attrY,v=t.originX,h=t.originY,g=t.pathLength,p=t.pathSpacing,m=void 0===p?1:p,b=t.pathOffset,j=void 0===b?0:b,w=n(Object(i.c)(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]));for(s in w)"transform"===s?o.style.transform=w[s]:o[a&&!V.has(s)?c(s):s]=w[s];return void 0===v&&void 0===h&&!w.transform||(o.style.transformOrigin=(u=void 0!==h?h:.5,E(void 0!==v?v:.5,(d=e).x,d.width)+" "+E(u,d.y,d.height))),void 0!==f&&(o.x=f),void 0!==l&&(o.y=l),void 0!==r&&void 0!==g&&(o[a?"stroke-dashoffset":"strokeDashoffset"]=z(-j,r),o[a?"stroke-dasharray":"strokeDasharray"]=z(g,r)+" "+z(m,r)),o}function G(t,e){var r,n,o;return t===window?r=q(t):(o=t)instanceof HTMLElement||"function"==typeof o.click?r=function(t,e){void 0===e&&(e={});var r=e.enableHardwareAcceleration,n=e.allowTransformNone,o=Object(i.c)(e,["enableHardwareAcceleration","allowTransformNone"]);return H(Object(i.a)({element:t,buildStyles:Z({enableHardwareAcceleration:r,allowTransformNone:n}),preparseOutput:!0},o))}(t,e):((n=t)instanceof SVGElement||"ownerSVGElement"in n)&&(r=function(t){var e=function(t){try{return"function"==typeof(e=t).getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){return{x:0,y:0,width:0,height:0}}var e}(t),r="path"===t.tagName&&t.getTotalLength?t.getTotalLength():void 0;return P({element:t,buildAttrs:function(t,e,r){void 0===r&&(r=!0);var n={style:{}},o=Z(N);return function(i){return D(i,t,e,o,n,r)}}(e,r)})}(t)),Object(d.a)(void 0!==r,"No valid node provided. Node must be HTMLElement, SVGElement or window."),J.set(t,r),r}var P=u({onRead:function(t,e){var r=e.element;if(y(t=V.has(t)?t:c(t))){var n=S(t);return n&&n.default||0}return r.getAttribute(t)},onRender:function(t,e){var r,n=e.element,o=(0,e.buildAttrs)(t);for(r in o)"style"===r?Object.assign(n.style,o.style):n.setAttribute(r,o[r])}}),q=u({useCache:!1,onRead:function(t){return"scrollTop"===t?window.pageYOffset:window.pageXOffset},onRender:function(t){var e=t.scrollTop,r=t.scrollLeft;return window.scrollTo(void 0===r?0:r,void 0===e?0:e)}}),J=new WeakMap;e.d=function(t,e){var r,n,o="string"==typeof t?document.querySelector(t):t;return n=e,J.has(r=o)?J.get(r):G(r,n)}}}]);