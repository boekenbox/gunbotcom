(this["webpackJsonpGunbot.com"]=this["webpackJsonpGunbot.com"]||[]).push([[13],{58:function(t,e,n){"use strict";var o,i,r,u,s,c,a,p;o=n(30),i=n(1),r=n.n(i),u=n(15),s=n(13),c=n.n(s),a=1073741823,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:{},e.a=r.a.createContext||function(t,e){var n,o,r="__create-react-context-"+(p["__global_unique_id__"]=(p.__global_unique_id__||0)+1)+"__",s=function(t){function n(){var e,n,o=t.apply(this,arguments)||this;return o.emitter=(e=o.props.value,n=[],{on:function(t){n.push(t)},off:function(t){n=n.filter((function(e){return e!==t}))},get:function(){return e},set:function(t,o){e=t,n.forEach((function(t){return t(e,o)}))}}),o}Object(u.a)(n,t);var o=n.prototype;return o.getChildContext=function(){var t={};return t[r]=this.emitter,t},o.componentWillReceiveProps=function(t){var n,o,i,r,u;this.props.value!==t.value&&(((r=n=this.props.value)===(u=o=t.value)?0!==r||1/r==1/u:r!=r&&u!=u)?i=0:(i="function"==typeof e?e(n,o):a,0!==(i|=0)&&this.emitter.set(t.value,i)))},o.render=function(){return this.props.children},n}(i.Component);s.childContextTypes=((n={})[r]=c.a.object.isRequired,n);var l=function(e){function n(){var t=e.apply(this,arguments)||this;return t.state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(u.a)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?a:e},o.componentDidMount=function(){this.context[r]&&this.context[r].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?a:t},o.componentWillUnmount=function(){this.context[r]&&this.context[r].off(this.onUpdate)},o.getValue=function(){return this.context[r]?this.context[r].get():t},o.render=function(){return(Array.isArray(t=this.props.children)?t[0]:t)(this.state.value);var t},n}(i.Component);return l.contextTypes=((o={})[r]=c.a.object,o),{Provider:s,Consumer:l}}}}]);