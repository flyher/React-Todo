define(["exports","module","react","redux","react-redux","reducer","todoApp","react-dom"],function(e,t,r,l,n,u,a,c){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=i(r),s=i(u),d=i(a),f=i(c),h=l.createStore(s["default"]);f["default"].render(o["default"].createElement(n.Provider,{store:h},o["default"].createElement(d["default"],null)),document.getElementById("app"),function(){console.log("render done! ")});var p={subscribe:function(e,t){var t=this._call||(this._call={});return(this._call[e]||(this._call[e]=[])).push(t),this},publish:function(){var e,t,r,l,n,u=Array.prototype.slice.call(arguments);if(e=u.shift(),!(t=this._call))return!1;if(!(r=this._call[e]))return!1;for(n=0,l=r.length;l>n;n++)r[n].apply(this,u);return this},text:function(){alert(123)}};t.exports=p});