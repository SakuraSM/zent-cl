(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[6834],{31846:(e,t,o)=>{"use strict";o.d(t,{D:()=>w,Z:()=>h});var n=o(59312),r=o(24246),i=o(60042),l=o.n(i),s=o(27378),u=o(32415),c=o(36831),a=o(79352),p=o(17127),f=window.ResizeObserver,v=o(14322),d=o(27468),w=(0,s.forwardRef)((function(e,t){var o=e.className,i=e.placeholderClassName,w=e.children,h=e.offsetTop,m=e.offsetBottom,b=e.getAffixContainer,y=e.zIndex,T=void 0===y?10:y,B=e.onPin,g=e.onUnpin,x=(0,s.useState)(1),P=x[0],C=x[1],k=(0,s.useState)(),z=k[0],E=k[1],R=(0,s.useState)(),S=R[0],N=R[1],O=(0,s.useRef)((0,s.createRef)()),Z=(0,c.W)(B),A=(0,c.W)(g),j="number"==typeof h,M="number"==typeof m,W=(0,s.useState)(null),L=W[0],U=W[1],D=(0,s.useState)(0),F=D[0],H=D[1],I=(0,s.useState)(0),V=I[0],X=I[1],Y=(0,s.useState)(0),_=Y[0],$=Y[1],q=(0,s.useCallback)((function(e){var t=e.getBoundingClientRect();j&&H(t.top),M&&X(t.bottom)}),[j,M]),G=function(e){var t=(0,s.useRef)(null),o=(0,s.useCallback)((function(){return f&&new f((0,p.$j)(e))}),[e]);(0,s.useEffect)((function(){t.current=o()}),[o]);var n=(0,s.useCallback)((function(e,o){var n;e&&(null===(n=t.current)||void 0===n||n.observe(e,o))}),[t]),r=(0,s.useCallback)((function(e){var o;null===(o=t.current)||void 0===o||o.unobserve(e)}),[t]),i=(0,s.useCallback)((function(){var e;null===(e=t.current)||void 0===e||e.disconnect()}),[t]);return{observer:t,observe:n,unobserve:r,disconnect:i}}((0,s.useCallback)((function(e){var t=e[0],o=t.borderBoxSize,n=t.contentRect;if(o&&o.length>0){var r=o[0],i=r.inlineSize,l=r.blockSize;E(i),N(l)}else{var s=n.width,u=n.height;E(s),N(u)}}),[])),J=G.observe,K=G.disconnect,Q=(0,s.useCallback)((function(e){return function(t){var o,n,r=t.currentPosition;if(r===e){var i=null===(o=O.current)||void 0===o?void 0:o.current;i&&(E(i.offsetWidth),N(i.offsetHeight)),J(i),C(r),null===(n=Z.current)||void 0===n||n.call(Z)}}}),[Z,J]),ee=(0,s.useCallback)((function(e){return function(t){var o,n=t.currentPosition;t.previousPosition===e&&(E(void 0),N(void 0),K(),C(n),null===(o=A.current)||void 0===o||o.call(A))}}),[A,K]),te=(0,s.useMemo)((function(){return[Q(0),ee(0)]}),[Q,ee]),oe=te[0],ne=te[1],re=(0,s.useMemo)((function(){return[Q(2),ee(2)]}),[Q,ee]),ie=re[0],le=re[1],se=(0,s.useMemo)((function(){return 1===P?{}:{height:S}}),[S,P]),ue=(0,s.useMemo)((function(){if(0===P||2===P){var e={position:"fixed",zIndex:T,width:z};return L?0===P?e.top=h+F:e.bottom=m+(_-V):0===P?e.top=h:e.bottom=m,e}return{position:"static"}}),[L,m,h,F,V,_,P,z,T]),ce=(0,s.useCallback)((function(){L&&q(L)}),[L,q]);(0,s.useEffect)((function(){var e=null==b?void 0:b();e&&(U(e),q(e),$((0,d.mP)()))}),[b,q]);var ae=(0,s.useCallback)((function(){$((0,d.mP)())}),[]);(0,s.useImperativeHandle)(t,(function(){return{updatePosition:ce}}));var pe=(0,s.useMemo)((function(){return null!=L?L:a.Z?window:void 0}),[L]);return(0,r.jsxs)(r.Fragment,{children:[j&&(0,r.jsx)(u.h,{scrollableAncestor:pe,onEnter:ne,onLeave:oe,topOffset:h},void 0),(0,r.jsx)("div",(0,n.pi)({className:l()("zent-affix-placeholder",i),style:se,ref:O.current,"data-zv":"9.9.0"},{children:(0,r.jsx)("div",(0,n.pi)({className:l()("zent-affix",o),style:ue,"data-zv":"9.9.0"},{children:w}),void 0)}),void 0),M&&(0,r.jsx)(u.h,{scrollableAncestor:pe,onEnter:le,onLeave:ie,bottomOffset:m},void 0),L&&(0,r.jsx)(v.w,{onResize:ae,disableThrottle:!0},void 0)]},void 0)}));w.displayName="ZentAffix";var h=w},14322:(e,t,o)=>{"use strict";o.d(t,{w:()=>c});var n=o(24246),r=o(27378),i=o(27468),l=o(80186),s=o(17127),u={passive:!0},c=function(e){var t=e.disableThrottle,o=void 0!==t&&t,c=e.onResize,a=(0,r.useRef)(null),p=(0,r.useRef)(c);p.current=c;var f=(0,r.useCallback)((function(e){var t=(0,i.ZP)();a.current||(a.current=t);var o=a.current,n={deltaX:t.width-o.width,deltaY:t.height-o.height};0===n.deltaX&&0===n.deltaY||(p.current(e,n),a.current=t)}),[]),v=(0,s.BN)(f,o);return(0,r.useEffect)((function(){return a.current=(0,i.ZP)(),v.cancel}),[v]),(0,n.jsx)(l.ZP,{eventName:"resize",listener:v,options:u},void 0)}},25120:(e,t,o)=>{"use strict";o.d(t,{f:()=>c});var n=o(59312),r=o(24246),i=o(27378),l=o(80186),s=o(17127),u={passive:!0},c=function(e){var t=e.disableThrottle,o=void 0!==t&&t,c=e.options,a=e.onScroll,p=(0,i.useRef)(a);p.current=a;var f=(0,i.useCallback)((function(e){p.current(e)}),[]),v=(0,s.BN)(f,o);return(0,i.useEffect)((function(){return v.cancel}),[v]),(0,r.jsx)(l.ZM,{eventName:"scroll",listener:v,options:(0,n.pi)((0,n.pi)({},u),c)},void 0)}},55978:(e,t,o)=>{"use strict";function n(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];var n=setTimeout((function(){return e.apply(void 0,t)}),1);return{cancel:function(){clearTimeout(n)}}}o.d(t,{Z:()=>n})},36831:(e,t,o)=>{"use strict";o.d(t,{W:()=>r});var n=o(27378);function r(e){var t=(0,n.useRef)(e);return t.current=e,t}},32415:(e,t,o)=>{"use strict";o.d(t,{h:()=>v});var n=o(59312),r=o(24246),i=o(27378),l=o(49744),s=o(19185);function u(e,t){var o=function(e){var t;if(t="number"==typeof e?e:parseFloat(e),!Number.isNaN(t)&&Number.isFinite(t))return t}(e);if("number"==typeof o)return o;if("string"==typeof e){var n=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);if("number"==typeof n)return n*t}}function c(e){return(0,s.isElement)(e)&&"string"==typeof e.type}function a(e){return e.viewportBottom-e.viewportTop==0?3:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?1:e.viewportBottom<e.waypointTop?2:e.waypointTop<e.viewportTop?0:3}var p=o(79352),f=o(55978),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refElement=(0,i.createRef)(),t.previousPosition=4,t.handleScroll=function(e){if(t.refElement.current){var o=t.getBounds(),n=a(o),r=t.previousPosition,i=t.props,l=i.onPositionChange,s=i.onEnter,u=i.onLeave,c=i.fireOnRapidScroll;if(t.previousPosition=n,r!==n){var p={currentPosition:n,previousPosition:r,event:e,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};null==l||l(p),1===n?null==s||s(p):1!==r&&4!==r||null==u||u(p),c&&(2===r&&0===n||0===r&&2===n)&&(null==s||s({currentPosition:1,previousPosition:r,event:e,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),null==u||u({currentPosition:n,previousPosition:1,event:e,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}},t}return(0,n.ZT)(t,e),t.prototype.componentDidMount=function(){var e=this;p.Z&&(this.cancelOnNextTick=(0,f.Z)((function(){e.cancelOnNextTick=null,function(e,t){if(e&&!c(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n")}(e.props.children,e.refElement.current),e.scrollableAncestor=e.findScrollableAncestor(),e.scrollEventListenerUnsubscribe=(0,l.Oo)(e.scrollableAncestor,"scroll",e.handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=(0,l.Oo)(window,"resize",e.handleScroll,{passive:!0}),e.handleScroll(null)})))},t.prototype.componentDidUpdate=function(){var e=this;p.Z&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=(0,f.Z)((function(){e.cancelOnNextTick=null,e.handleScroll(null)}))))},t.prototype.componentWillUnmount=function(){var e,t,o;p.Z&&(null===(e=this.scrollEventListenerUnsubscribe)||void 0===e||e.call(this),null===(t=this.resizeEventListenerUnsubscribe)||void 0===t||t.call(this),null===(o=this.cancelOnNextTick)||void 0===o||o.cancel())},t.prototype.findScrollableAncestor=function(){var e=this.props,t=e.horizontal,o=e.scrollableAncestor;if(o)return o;for(var n=this.refElement.current;n.parentNode;){if((n=n.parentNode)===document.body)return window;var r=getComputedStyle(n),i=(t?r.getPropertyValue("overflow-x"):r.getPropertyValue("overflow-y"))||r.getPropertyValue("overflow");if("auto"===i||"scroll"===i)return n}return window},t.prototype.getBounds=function(){var e,t,o=this.props.horizontal,n=this.refElement.current.getBoundingClientRect(),r=n.left,i=n.top,l=n.right,s=n.bottom,c=o?r:i,a=o?l:s;if(this.scrollableAncestor===window)e=o?window.innerWidth:window.innerHeight,t=0;else{var p=this.scrollableAncestor;e=o?p.offsetWidth:p.offsetHeight,t=o?p.getBoundingClientRect().left:p.getBoundingClientRect().top}var f=this.props,v=f.bottomOffset;return{waypointTop:c,waypointBottom:a,viewportTop:t+u(f.topOffset,e),viewportBottom:t+e-u(v,e)}},t.prototype.render=function(){var e=this,t=this.props.children;if(!t)return(0,r.jsx)("span",{ref:this.refElement,style:{fontSize:0},"data-zv":"9.9.0"},void 0);var o=i.Children.only(t);return c(o)||(0,s.isForwardRef)(o)?(0,i.cloneElement)(o,{ref:function(t){e.refElement.current=t;var n=o.ref;n&&("function"==typeof n?n(t):n.current=t)}}):(0,i.cloneElement)(o,{innerRef:this.refElement})},t.defaultProps={topOffset:"0px",bottomOffset:"0px",horizontal:!1,fireOnRapidScroll:!0},t}(i.PureComponent)}}]);