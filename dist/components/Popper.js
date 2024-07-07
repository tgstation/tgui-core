import { jsxs as M, Fragment as j, jsx as E } from "react/jsx-runtime";
import * as c from "react";
import { useState as O, useRef as R, useEffect as N } from "react";
import * as x from "react-dom";
import { c as A } from "../index-jLZg_duJ.js";
var W = c.createContext(), Y = c.createContext();
var P = function(r) {
  return r.reduce(function(n, e) {
    var o = e[0], a = e[1];
    return n[o] = a, n;
  }, {});
}, S = typeof window < "u" && window.document && window.document.createElement ? c.useLayoutEffect : c.useEffect;
function I(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _ = typeof Element < "u", F = typeof Map == "function", b = typeof Set == "function", D = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function g(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, e, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length) return !1;
      for (e = n; e-- !== 0; )
        if (!g(t[e], r[e])) return !1;
      return !0;
    }
    var a;
    if (F && t instanceof Map && r instanceof Map) {
      if (t.size !== r.size) return !1;
      for (a = t.entries(); !(e = a.next()).done; )
        if (!r.has(e.value[0])) return !1;
      for (a = t.entries(); !(e = a.next()).done; )
        if (!g(e.value[1], r.get(e.value[0]))) return !1;
      return !0;
    }
    if (b && t instanceof Set && r instanceof Set) {
      if (t.size !== r.size) return !1;
      for (a = t.entries(); !(e = a.next()).done; )
        if (!r.has(e.value[0])) return !1;
      return !0;
    }
    if (D && ArrayBuffer.isView(t) && ArrayBuffer.isView(r)) {
      if (n = t.length, n != r.length) return !1;
      for (e = n; e-- !== 0; )
        if (t[e] !== r[e]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf && typeof t.valueOf == "function" && typeof r.valueOf == "function") return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString && typeof t.toString == "function" && typeof r.toString == "function") return t.toString() === r.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length) return !1;
    for (e = n; e-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[e])) return !1;
    if (_ && t instanceof Element) return !1;
    for (e = n; e-- !== 0; )
      if (!((o[e] === "_owner" || o[e] === "__v" || o[e] === "__o") && t.$$typeof) && !g(t[o[e]], r[o[e]]))
        return !1;
    return !0;
  }
  return t !== t && r !== r;
}
var U = function(r, n) {
  try {
    return g(r, n);
  } catch (e) {
    if ((e.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw e;
  }
};
const $ = /* @__PURE__ */ I(U);
var C = [], B = function(r, n, e) {
  e === void 0 && (e = {});
  var o = c.useRef(null), a = {
    onFirstUpdate: e.onFirstUpdate,
    placement: e.placement || "bottom",
    strategy: e.strategy || "absolute",
    modifiers: e.modifiers || C
  }, l = c.useState({
    styles: {
      popper: {
        position: a.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), v = l[0], h = l[1], y = c.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(m) {
        var p = m.state, f = Object.keys(p.elements);
        x.flushSync(function() {
          h({
            styles: P(f.map(function(i) {
              return [i, p.styles[i] || {}];
            })),
            attributes: P(f.map(function(i) {
              return [i, p.attributes[i]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), d = c.useMemo(function() {
    var s = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [y, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return $(o.current, s) ? o.current || s : (o.current = s, s);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, y]), u = c.useRef();
  return S(function() {
    u.current && u.current.setOptions(d);
  }, [d]), S(function() {
    if (!(r == null || n == null)) {
      var s = e.createPopper || A, m = s(r, n, d);
      return u.current = m, function() {
        m.destroy(), u.current = null;
      };
    }
  }, [r, n, e.createPopper]), {
    state: u.current ? u.current.state : null,
    styles: v.styles,
    attributes: v.attributes,
    update: u.current ? u.current.update : null,
    forceUpdate: u.current ? u.current.forceUpdate : null
  };
};
var q = process.env.NODE_ENV !== "production", z = function() {
};
if (q) {
  var L = function(r, n) {
    var e = arguments.length;
    n = new Array(e > 1 ? e - 1 : 0);
    for (var o = 1; o < e; o++)
      n[o - 1] = arguments[o];
    var a = 0, l = "Warning: " + r.replace(/%s/g, function() {
      return n[a++];
    });
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  };
  z = function(t, r, n) {
    var e = arguments.length;
    n = new Array(e > 2 ? e - 2 : 0);
    for (var o = 2; o < e; o++)
      n[o - 2] = arguments[o];
    if (r === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    t || L.apply(null, [r].concat(n));
  };
}
function G(t) {
  const { children: r, content: n, isOpen: e, onClickOutside: o, placement: a } = t, [l, v] = O(null), [h, y] = O(
    null
  ), d = R(null), u = R(null), { styles: s, attributes: m } = B(l, h, {
    placement: a
  });
  function p(f) {
    var i, w;
    !((i = d.current) != null && i.contains(f.target)) && !((w = u.current) != null && w.contains(f.target)) && (o == null || o());
  }
  return N(() => (e ? document.addEventListener("mousedown", p) : document.removeEventListener("mousedown", p), () => {
    document.removeEventListener("mousedown", p);
  }), [e]), /* @__PURE__ */ M(j, { children: [
    /* @__PURE__ */ E(
      "div",
      {
        ref: (f) => {
          v(f), u.current = f;
        },
        children: r
      }
    ),
    e && /* @__PURE__ */ E(
      "div",
      {
        ref: (f) => {
          y(f), d.current = f;
        },
        style: { ...s.popper, zIndex: t.baseZIndex ?? 5 },
        ...m.popper,
        children: n
      }
    )
  ] });
}
export {
  G as Popper
};
