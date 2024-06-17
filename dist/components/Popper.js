import { jsxs as M, Fragment as P, jsx as S } from "react/jsx-runtime";
import * as l from "react";
import { useState as E, useRef as g, useEffect as F } from "react";
import * as _ from "react-dom";
import { c as A } from "../popper-Dm3m9eeZ.js";
var j = function(r) {
  return r.reduce(function(n, t) {
    var o = t[0], u = t[1];
    return n[o] = u, n;
  }, {});
}, R = typeof window < "u" && window.document && window.document.createElement ? l.useLayoutEffect : l.useEffect;
function I(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var U = typeof Element < "u", x = typeof Map == "function", z = typeof Set == "function", B = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function w(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, t, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (t = n; t-- !== 0; )
        if (!w(e[t], r[t]))
          return !1;
      return !0;
    }
    var u;
    if (x && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(t = u.next()).done; )
        if (!r.has(t.value[0]))
          return !1;
      for (u = e.entries(); !(t = u.next()).done; )
        if (!w(t.value[1], r.get(t.value[0])))
          return !1;
      return !0;
    }
    if (z && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(t = u.next()).done; )
        if (!r.has(t.value[0]))
          return !1;
      return !0;
    }
    if (B && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (n = e.length, n != r.length)
        return !1;
      for (t = n; t-- !== 0; )
        if (e[t] !== r[t])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function")
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function")
      return e.toString() === r.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (t = n; t-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[t]))
        return !1;
    if (U && e instanceof Element)
      return !1;
    for (t = n; t-- !== 0; )
      if (!((o[t] === "_owner" || o[t] === "__v" || o[t] === "__o") && e.$$typeof) && !w(e[o[t]], r[o[t]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var L = function(r, n) {
  try {
    return w(r, n);
  } catch (t) {
    if ((t.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw t;
  }
};
const q = /* @__PURE__ */ I(L);
var D = [], $ = function(r, n, t) {
  t === void 0 && (t = {});
  var o = l.useRef(null), u = {
    onFirstUpdate: t.onFirstUpdate,
    placement: t.placement || "bottom",
    strategy: t.strategy || "absolute",
    modifiers: t.modifiers || D
  }, m = l.useState({
    styles: {
      popper: {
        position: u.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), y = m[0], O = m[1], v = l.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(d) {
        var i = d.state, f = Object.keys(i.elements);
        _.flushSync(function() {
          O({
            styles: j(f.map(function(c) {
              return [c, i.styles[c] || {}];
            })),
            attributes: j(f.map(function(c) {
              return [c, i.attributes[c]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), p = l.useMemo(function() {
    var a = {
      onFirstUpdate: u.onFirstUpdate,
      placement: u.placement,
      strategy: u.strategy,
      modifiers: [].concat(u.modifiers, [v, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return q(o.current, a) ? o.current || a : (o.current = a, a);
  }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, v]), s = l.useRef();
  return R(function() {
    s.current && s.current.setOptions(p);
  }, [p]), R(function() {
    if (!(r == null || n == null)) {
      var a = t.createPopper || A, d = a(r, n, p);
      return s.current = d, function() {
        d.destroy(), s.current = null;
      };
    }
  }, [r, n, t.createPopper]), {
    state: s.current ? s.current.state : null,
    styles: y.styles,
    attributes: y.attributes,
    update: s.current ? s.current.update : null,
    forceUpdate: s.current ? s.current.forceUpdate : null
  };
};
function W(e) {
  const { children: r, content: n, isOpen: t, onClickOutside: o, placement: u } = e, [m, y] = E(null), [O, v] = E(
    null
  ), p = g(null), s = g(null), { styles: a, attributes: d } = $(m, O, {
    placement: u
  });
  function i(f) {
    var c, h;
    !((c = p.current) != null && c.contains(f.target)) && !((h = s.current) != null && h.contains(f.target)) && (o == null || o());
  }
  return F(() => (t ? document.addEventListener("mousedown", i) : document.removeEventListener("mousedown", i), () => {
    document.removeEventListener("mousedown", i);
  }), [t]), /* @__PURE__ */ M(P, { children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: (f) => {
          y(f), s.current = f;
        },
        children: r
      }
    ),
    t && /* @__PURE__ */ S(
      "div",
      {
        ref: (f) => {
          v(f), p.current = f;
        },
        style: { ...a.popper, zIndex: e.baseZIndex ?? 5 },
        ...d.popper,
        children: n
      }
    )
  ] });
}
export {
  W as Popper
};
