(this["webpackJsonpGunbot.com"]=this["webpackJsonpGunbot.com"]||[]).push([[17],{108:function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function o(e){if(""+e=="[object Window]")return e;var t=e.ownerDocument;return t?t.defaultView:window}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(a(e)?e.ownerDocument:e.document).documentElement}function p(e){return r(f(e)).left+i(e).scrollLeft}function u(e){return o(e).getComputedStyle(e)}function l(e){var t=u(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function d(e,t,n){void 0===n&&(n=!1);var a,u,d=f(t),m=r(e),h=s(t),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return!h&&(h||n)||("body"===c(t)&&!l(d)||(g=(a=t)!==o(a)&&s(a)?{scrollLeft:(u=a).scrollLeft,scrollTop:u.scrollTop}:i(a)),s(t)?((b=r(t)).x+=t.clientLeft,b.y+=t.clientTop):d&&(b.x=p(d))),{x:m.left+g.scrollLeft-b.x,y:m.top+g.scrollTop-b.y,width:m.width,height:m.height}}function m(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function h(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function g(e,t){void 0===t&&(t=[]);var n=function e(t){return~["html","body","#document"].indexOf(c(t))?t.ownerDocument.body:s(t)&&l(t)?t:e(h(t))}(e),r="body"===c(n),i=o(n),a=r?[i].concat(i.visualViewport||[],l(n)?n:[]):n,f=t.concat(a);return r?f:f.concat(g(h(a)))}function b(e){if(!s(e)||"fixed"===u(e).position)return null;var t=e.offsetParent;if(t){var n=f(t);if("body"===c(t)&&"static"===u(t).position&&"static"!==u(n).position)return n}return t}function v(e){for(var t=o(e),n=b(e);n&&~["table","td","th"].indexOf(c(n))&&"static"===u(n).position;)n=b(n);return(!n||"body"!==c(n)||"static"!==u(n).position)&&(n||function(e){for(var t=h(e);s(t)&&!~["html","body"].indexOf(c(t));){var n=u(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e))||t}n.d(t,"a",(function(){return te}));var y="top",O="bottom",w="right",x="left",j="auto",E=[y,O,w,x],M="start",D="end",k="viewport",L="popper",P=E.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+D])}),[]),B=[].concat(E,[j]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+D])}),[]),W=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var A={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var T={passive:!0};function R(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function C(e){return~["top","bottom"].indexOf(e)?"x":"y"}function S(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?R(o):null,a=o?q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case y:t={x:s,y:n.y-r.height};break;case O:t={x:s,y:n.y+n.height};break;case w:t={x:n.x+n.width,y:c};break;case x:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?C(i):null;if(null!=f){var p="y"===f?"height":"width";switch(a){case M:t[f]=Math.floor(t[f])-Math.floor(n[p]/2-r[p]/2);break;case D:t[f]=Math.floor(t[f])+Math.ceil(n[p]/2-r[p]/2)}}return t}var N={top:"auto",right:"auto",bottom:"auto",left:"auto"};function V(e){var t,n,r,i,a,s=e.popper,c=e.popperRect,p=e.placement,u=e.offsets,l=e.position,d=e.gpuAcceleration,m=e.adaptive,h=(r=(n=u).y,i=window.devicePixelRatio||1,{x:Math.round(n.x*i)/i||0,y:Math.round(r*i)/i||0}),g=h.x,b=h.y,j=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),M=x,D=y,k=window;m&&((a=v(s))===o(s)&&(a=f(s)),p===y&&(D=O,b-=a.clientHeight-c.height,b*=d?1:-1),p===x&&(M=w,g-=a.clientWidth-c.width,g*=d?1:-1));var L,P=Object.assign({position:l},m&&N);return Object.assign(Object.assign({},P),{},d?((L={})[D]=E?"0":"",L[M]=j?"0":"",L.transform=(k.devicePixelRatio||1)<2?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",L):((t={})[D]=E?b+"px":"",t[M]=j?g+"px":"",t.transform="",t))}var I={left:"right",right:"left",bottom:"top",top:"bottom"};function U(e){return e.replace(/left|right|bottom|top/g,(function(e){return I[e]}))}var z={start:"end",end:"start"};function _(e){return e.replace(/start|end/g,(function(e){return z[e]}))}function F(e,t){var n=!(!t.getRootNode||!t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function G(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function J(e,t){return t===k?G((O=o(y=e),j=(w=f(y)).clientWidth,E=w.clientHeight,D=M=0,(x=O.visualViewport)&&(j=x.width,E=x.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(M=x.offsetLeft,D=x.offsetTop)),{width:j,height:E,x:M+p(y),y:D})):s(t)?((v=r(b=t)).top=v.top+b.clientTop,v.left=v.left+b.clientLeft,v.bottom=v.top+b.clientHeight,v.right=v.left+b.clientWidth,v.width=b.clientWidth,v.height=b.clientHeight,v.x=v.left,v.y=v.top,v):G((n=f(e),a=f(n),c=i(n),d=Math.max(a.scrollWidth,a.clientWidth,(l=n.ownerDocument.body)?l.scrollWidth:0,l?l.clientWidth:0),m=Math.max(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),h=-c.scrollLeft+p(n),g=-c.scrollTop,"rtl"===u(l||a).direction&&(h+=Math.max(a.clientWidth,l?l.clientWidth:0)-d),{width:d,height:m,x:h,y:g}));var n,a,c,l,d,m,h,g,b,v,y,O,w,x,j,E,M,D}function X(e,t,n){var r,o,i,f="clippingParents"===t?(o=g(h(r=e)),a(i=~["absolute","fixed"].indexOf(u(r).position)&&s(r)?v(r):r)?o.filter((function(e){return a(e)&&F(e,i)&&"body"!==c(e)})):[]):[].concat(t),p=[].concat(f,[n]),l=p.reduce((function(t,n){var r=J(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),J(e,p[0]));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Y(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function K(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Q(e,t){void 0===t&&(t={});var n,o=t.placement,i=void 0===o?e.placement:o,s=t.boundary,c=void 0===s?"clippingParents":s,p=t.rootBoundary,u=void 0===p?k:p,l=t.elementContext,d=void 0===l?L:l,m=t.altBoundary,h=void 0!==m&&m,g=t.padding,b=void 0===g?0:g,v=Y("number"!=typeof b?b:K(b,E)),x=e.elements.reference,j=e.rects.popper,M=e.elements[h?d===L?"reference":L:d],D=X(a(M)?M:M.contextElement||f(e.elements.popper),c,u),P=r(x),B=S({reference:P,element:j,strategy:"absolute",placement:i}),W=G(Object.assign(Object.assign({},j),B)),A=d===L?W:P,H={top:D.top-A.top+v.top,bottom:A.bottom-D.bottom+v.bottom,left:D.left-A.left+v.left,right:A.right-D.right+v.right},T=e.modifiersData.offset;return d===L&&T&&(n=T[i],Object.keys(H).forEach((function(e){var t=~[w,O].indexOf(e)?1:-1;H[e]+=n[~[y,O].indexOf(e)?"y":"x"]*t}))),H}function Z(e,t,n){return Math.max(e,Math.min(t,n))}function $(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ee(e){return[y,w,O,x].some((function(t){return 0<=e[t]}))}var te=function(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=e.defaultOptions,o=void 0===r?A:r;return function(e,t,r){void 0===r&&(r=o);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},A),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],p=!1,u={state:c,setOptions:function(r){l(),c.options=Object.assign(Object.assign(Object.assign({},o),c.options),r),c.scrollParents={reference:a(e)?g(e):e.contextElement?g(e.contextElement):[],popper:g(t)};var i,s,p,d,m=(p=[].concat(n,c.options.modifiers),d=p.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{}),i=Object.keys(d).map((function(e){return d[e]})),s=function(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){var o;n.has(r)||(o=t.get(r))&&e(o)})),r.push(o)}(e)})),r}(i),W.reduce((function(e,t){return e.concat(s.filter((function(e){return e.phase===t})))}),[]));return c.orderedModifiers=m.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t,n=e.options,r=e.effect;"function"==typeof r&&(t=r({state:c,name:e.name,instance:u,options:void 0===n?{}:n}),f.push(t||function(){}))})),u.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(H(t,n)){c.rects={reference:d(t,v(n),"fixed"===c.options.strategy),popper:m(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r,o,i,a=0;a<c.orderedModifiers.length;a++)!0!==c.reset?(i=(r=c.orderedModifiers[a]).options,"function"==typeof(o=r.fn)&&(c=o({state:c,options:void 0===i?{}:i,name:r.name,instance:u})||c)):(c.reset=!1,a=-1)}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(c)}))},function(){return s=s||new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))}),destroy:function(){l(),p=!0}};if(!H(e,t))return u;function l(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,f=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,T)})),c&&f.addEventListener("resize",n.update,T),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,T)})),c&&f.removeEventListener("resize",n.update,T)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=S({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:R(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),V(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),V(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&c(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=e.options.offset,o=void 0===r?[0,0]:r,i=B.reduce((function(e,n){var r,i,a,s,c,f,p,u;return e[n]=(i=t.rects,a=o,s=R(r=n),c=~[x,y].indexOf(s)?-1:1,p=(p=(f="function"==typeof a?a(Object.assign(Object.assign({},i),{},{placement:r})):a)[0])||0,u=((u=f[1])||0)*c,~[x,w].indexOf(s)?{x:u,y:p}:{x:p,y:u}),e}),{}),a=i[t.placement],s=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=a.x,t.modifiersData.popperOffsets.y+=s),t.modifiersData[n]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,g=t.options.placement,b=R(g),v=c||(b!==g&&m?function(e){if(R(e)===j)return[];var t=U(e);return[_(e),t,_(t)]}(g):[U(g)]),D=[g].concat(v).reduce((function(e,n){return e.concat(R(n)===j?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?B:a,c=q(t.placement),f=c?i?P:P.filter((function(e){return q(e)===c})):E,p=f.filter((function(e){return!!~s.indexOf(e)}));0===p.length&&(p=f);var u=p.reduce((function(t,i){return t[i]=Q(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[R(i)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),k=t.rects.reference,L=t.rects.popper,W=new Map,A=!0,H=D[0],T=0;T<D.length;T++){var C=D[T],S=R(C),N=q(C)===M,V=!!~[y,O].indexOf(S),I=V?"width":"height",z=Q(t,{placement:C,boundary:p,rootBoundary:u,altBoundary:l,padding:f}),F=V?N?w:x:N?O:y;L[I]<k[I]&&(F=U(F));var G=U(F),J=[];if(i&&J.push(z[S]<=0),s&&J.push(z[F]<=0,z[G]<=0),J.every((function(e){return e}))){H=C,A=!1;break}W.set(C,J)}if(A)for(var X=m?3:1;0<X&&"break"!==function(e){var t=D.find((function(t){var n=W.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"}(X);X--);t.placement!==H&&(t.modifiersData[r]._skip=!0,t.placement=H,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t,n,r,o,i,a,s,c,f,p,u,l,d,h,g,b,j,E,D,k,L,P,B,W=e.state,A=e.options,H=e.name,T=A.mainAxis,S=void 0===T||T,N=A.altAxis,V=void 0!==N&&N,I=A.tether,U=void 0===I||I,z=A.tetherOffset,_=void 0===z?0:z,F=Q(W,{boundary:A.boundary,rootBoundary:A.rootBoundary,padding:A.padding,altBoundary:A.altBoundary}),G=R(W.placement),J=q(W.placement),X=!J,Y=C(G),K="x"===Y?"y":"x",$=W.modifiersData.popperOffsets,ee=W.rects.reference,te=W.rects.popper,ne="function"==typeof _?_(Object.assign(Object.assign({},W.rects),{},{placement:W.placement})):_,re={x:0,y:0};$&&(S&&(r="y"===Y?"height":"width",i=(o=$[Y])+F[t="y"===Y?y:x],a=$[Y]-F[n="y"===Y?O:w],s=U?-te[r]/2:0,c=J===M?ee[r]:te[r],f=J===M?-te[r]:-ee[r],p=W.elements.arrow,u=U&&p?m(p):{width:0,height:0},d=(l=W.modifiersData["arrow#persistent"]?W.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0})[t],h=l[n],g=Z(0,ee[r],u[r]),b=X?ee[r]/2-s-g-d-ne:c-g-d-ne,j=X?-ee[r]/2+s+g+h+ne:f+g+h+ne,E=W.elements.arrow&&v(W.elements.arrow),k=$[Y]+j-(D=W.modifiersData.offset?W.modifiersData.offset[W.placement][Y]:0),L=Z(U?Math.min(i,$[Y]+b-D-(E?"y"===Y?E.clientTop||0:E.clientLeft||0:0)):i,o,U?Math.max(a,k):a),re[Y]=($[Y]=L)-o),V&&(B=Z((P=$[K])+F["x"===Y?y:x],P,P-F["x"===Y?O:w]),re[K]=($[K]=B)-P),W.modifiersData[H]=re)},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r,o,i,a,s,c,f,p,u,l=e.state,d=e.name,h=l.elements.arrow,g=l.modifiersData.popperOffsets,b=R(l.placement),j=C(b),E=~[x,w].indexOf(b)?"height":"width";h&&g&&(n=l.modifiersData[d+"#persistent"].padding,r=m(h),o="y"===j?y:x,i="y"===j?O:w,a=l.rects.reference[E]+l.rects.reference[j]-g[j]-l.rects.popper[E],s=g[j]-l.rects.reference[j],c=v(h),u=Z(n[o],p=(f=c?"y"===j?c.clientHeight||0:c.clientWidth||0:0)/2-r[E]/2+(a/2-s/2),f-r[E]-n[i]),l.modifiersData[d]=((t={})[j]=u,t.centerOffset=u-p,t))},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&F(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:Y("number"!=typeof s?s:K(s,E))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Q(t,{elementContext:"reference"}),s=Q(t,{altBoundary:!0}),c=$(a,r),f=$(s,o,i),p=ee(c),u=ee(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]})}}]);