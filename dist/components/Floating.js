import { jsxs as mt, jsx as ne, Fragment as zt } from "react/jsx-runtime";
import * as m from "react";
import { useLayoutEffect as gt, useEffect as pt, useRef as Xt, useState as Gt, isValidElement as Zt, cloneElement as Jt } from "react";
import * as ht from "react-dom";
import { classes as Qt } from "../common/react.js";
function Te() {
  return typeof window < "u";
}
function ce(e) {
  return vt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
  var t;
  return (t = (vt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vt(e) {
  return Te() ? e instanceof Node || e instanceof K(e).Node : !1;
}
function k(e) {
  return Te() ? e instanceof Element || e instanceof K(e).Element : !1;
}
function _(e) {
  return Te() ? e instanceof HTMLElement || e instanceof K(e).HTMLElement : !1;
}
function Ve(e) {
  return !Te() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
function ge(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = U(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function en(e) {
  return ["table", "td", "th"].includes(ce(e));
}
function Oe(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ue(e) {
  const t = Pe(), n = k(e) ? U(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tn(e) {
  let t = ee(e);
  for (; _(t) && !Q(t); ) {
    if (Ue(t))
      return t;
    if (Oe(t))
      return null;
    t = ee(t);
  }
  return null;
}
function Pe() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(e) {
  return ["html", "body", "#document"].includes(ce(e));
}
function U(e) {
  return K(e).getComputedStyle(e);
}
function Ae(e) {
  return k(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ee(e) {
  if (ce(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ve(e) && e.host || // Fallback.
    X(e)
  );
  return Ve(t) ? t.host : t;
}
function bt(e) {
  const t = ee(e);
  return Q(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(t) && ge(t) ? t : bt(t);
}
function te(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bt(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = K(o);
  if (s) {
    const c = _e(i);
    return t.concat(i, i.visualViewport || [], ge(o) ? o : [], c && n ? te(c) : []);
  }
  return t.concat(o, te(o, [], n));
}
function _e(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ye(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ve(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function rn() {
  return /apple/i.test(navigator.vendor);
}
function fe(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function on(e) {
  return "nativeEvent" in e;
}
function sn(e) {
  return e.matches("html,body");
}
function J(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Le(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ue(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const cn = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ln(e) {
  return _(e) && e.matches(cn);
}
const de = Math.min, Y = Math.max, we = Math.round, ve = Math.floor, z = (e) => ({
  x: e,
  y: e
}), an = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, un = {
  start: "end",
  end: "start"
};
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function re(e) {
  return e.split("-")[0];
}
function pe(e) {
  return e.split("-")[1];
}
function fn(e) {
  return e === "x" ? "y" : "x";
}
function yt(e) {
  return e === "y" ? "height" : "width";
}
function se(e) {
  return ["top", "bottom"].includes(re(e)) ? "y" : "x";
}
function wt(e) {
  return fn(se(e));
}
function dn(e, t, n) {
  n === void 0 && (n = !1);
  const r = pe(e), o = wt(e), s = yt(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = xe(i)), [i, xe(i)];
}
function mn(e) {
  const t = xe(e);
  return [He(e), t, He(t)];
}
function He(e) {
  return e.replace(/start|end/g, (t) => un[t]);
}
function gn(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function pn(e, t, n, r) {
  const o = pe(e);
  let s = gn(re(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(He)))), s;
}
function xe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => an[t]);
}
function hn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vn(e) {
  return typeof e != "number" ? hn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Re(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var bn = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Ke = /* @__PURE__ */ bn.join(","), xt = typeof Element > "u", me = xt ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ee = !xt && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Ce = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = o === "" || o === "true", i = s || n && t && e(t.parentNode);
  return i;
}, yn = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, wn = function(t, n, r) {
  if (Ce(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Ke));
  return n && me.call(t, Ke) && o.unshift(t), o = o.filter(r), o;
}, xn = function e(t, n, r) {
  for (var o = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!Ce(i, !1))
      if (i.tagName === "SLOT") {
        var c = i.assignedElements(), l = c.length ? c : i.children, a = e(l, !0, r);
        r.flatten ? o.push.apply(o, a) : o.push({
          scopeParent: i,
          candidates: a
        });
      } else {
        var u = me.call(i, Ke);
        u && r.filter(i) && (n || !t.includes(i)) && o.push(i);
        var g = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), h = !Ce(g, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (g && h) {
          var d = e(g === !0 ? i.children : g.children, !0, r);
          r.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: i,
            candidates: d
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return o;
}, Rt = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Et = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || yn(t)) && !Rt(t) ? 0 : t.tabIndex;
}, Rn = function(t, n) {
  var r = Et(t);
  return r < 0 && n && !Rt(t) ? 0 : r;
}, En = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Ct = function(t) {
  return t.tagName === "INPUT";
}, Cn = function(t) {
  return Ct(t) && t.type === "hidden";
}, Sn = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Tn = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, On = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ee(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = Tn(o, t.form);
  return !s || s === t;
}, Pn = function(t) {
  return Ct(t) && t.type === "radio";
}, An = function(t) {
  return Pn(t) && !On(t);
}, Mn = function(t) {
  var n, r = t && Ee(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var i, c, l;
    for (s = !!((i = o) !== null && i !== void 0 && (c = i.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !s && o; ) {
      var a, u, g;
      r = Ee(o), o = (a = r) === null || a === void 0 ? void 0 : a.host, s = !!((u = o) !== null && u !== void 0 && (g = u.ownerDocument) !== null && g !== void 0 && g.contains(o));
    }
  }
  return s;
}, Ge = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Dn = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = me.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (me.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var l = t.parentElement, a = Ee(t);
        if (l && !l.shadowRoot && o(l) === !0)
          return Ge(t);
        t.assignedSlot ? t = t.assignedSlot : !l && a !== t.ownerDocument ? t = a.host : t = l;
      }
      t = c;
    }
    if (Mn(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ge(t);
  return !1;
}, Ln = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return me.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, In = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Ce(n) || Cn(n) || Dn(n, t) || // For a details element with a summary, the summary element gets the focus
  Sn(n) || Ln(n));
}, Ze = function(t, n) {
  return !(An(n) || Et(n) < 0 || !In(t, n));
}, kn = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Fn = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, s) {
    var i = !!o.scopeParent, c = i ? o.scopeParent : o, l = Rn(c, i), a = i ? e(o.candidates) : c;
    l === 0 ? i ? n.push.apply(n, a) : n.push(c) : r.push({
      documentOrder: s,
      tabIndex: l,
      item: o,
      isScope: i,
      content: a
    });
  }), r.sort(En).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, St = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = xn([t], n.includeContainer, {
    filter: Ze.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: kn
  }) : r = wn(t, n.includeContainer, Ze.bind(null, n)), Fn(r);
};
function Je(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = se(t), i = wt(t), c = yt(i), l = re(t), a = s === "y", u = r.x + r.width / 2 - o.width / 2, g = r.y + r.height / 2 - o.height / 2, h = r[c] / 2 - o[c] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: g
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: g
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (pe(t)) {
    case "start":
      d[i] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      d[i] += h * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const Nn = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let a = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: g
  } = Je(a, r, l), h = r, d = {}, x = 0;
  for (let f = 0; f < c.length; f++) {
    const {
      name: y,
      fn: R
    } = c[f], {
      x: E,
      y: w,
      data: T,
      reset: C
    } = await R({
      x: u,
      y: g,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: d,
      rects: a,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = E ?? u, g = w ?? g, d = {
      ...d,
      [y]: {
        ...d[y],
        ...T
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (a = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: g
    } = Je(a, h, l)), f = -1);
  }
  return {
    x: u,
    y: g,
    placement: h,
    strategy: o,
    middlewareData: d
  };
};
async function Tt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: c,
    strategy: l
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: g = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = Me(t, e), x = vn(d), y = c[h ? g === "floating" ? "reference" : "floating" : g], R = Re(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: l
  })), E = g === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), T = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Re(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: E,
    offsetParent: w,
    strategy: l
  }) : E);
  return {
    top: (R.top - C.top + x.top) / T.y,
    bottom: (C.bottom - R.bottom + x.bottom) / T.y,
    left: (R.left - C.left + x.left) / T.x,
    right: (C.right - R.right + x.right) / T.x
  };
}
const Bn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: l,
        elements: a
      } = t, {
        mainAxis: u = !0,
        crossAxis: g = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: f = !0,
        ...y
      } = Me(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const R = re(o), E = se(c), w = re(c) === c, T = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), C = h || (w || !f ? [xe(c)] : mn(c)), D = x !== "none";
      !h && D && C.push(...pn(c, f, x, T));
      const M = [c, ...C], W = await Tt(t, y), L = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && L.push(W[R]), g) {
        const I = dn(o, i, T);
        L.push(W[I[0]], W[I[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: L
      }], !L.every((I) => I <= 0)) {
        var B, $;
        const I = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, S = M[I];
        if (S)
          return {
            data: {
              index: I,
              overflows: N
            },
            reset: {
              placement: S
            }
          };
        let A = ($ = N.filter((b) => b.overflows[0] <= 0).sort((b, p) => b.overflows[1] - p.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!A)
          switch (d) {
            case "bestFit": {
              var F;
              const b = (F = N.filter((p) => {
                if (D) {
                  const v = se(p.placement);
                  return v === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  v === "y";
                }
                return !0;
              }).map((p) => [p.placement, p.overflows.filter((v) => v > 0).reduce((v, P) => v + P, 0)]).sort((p, v) => p[1] - v[1])[0]) == null ? void 0 : F[0];
              b && (A = b);
              break;
            }
            case "initialPlacement":
              A = c;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Wn(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = re(n), c = pe(n), l = se(n) === "y", a = ["left", "top"].includes(i) ? -1 : 1, u = s && l ? -1 : 1, g = Me(t, e);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: x
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return c && typeof x == "number" && (d = c === "end" ? x * -1 : x), l ? {
    x: d * u,
    y: h * a
  } : {
    x: h * a,
    y: d * u
  };
}
const $n = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: c
      } = t, l = await Wn(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Vn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...a
      } = Me(e, t), u = await Tt(t, a), g = re(o), h = pe(o), d = se(o) === "y", {
        width: x,
        height: f
      } = s.floating;
      let y, R;
      g === "top" || g === "bottom" ? (y = g, R = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (R = g, y = h === "end" ? "top" : "bottom");
      const E = f - u.top - u.bottom, w = x - u.left - u.right, T = de(f - u[y], E), C = de(x - u[R], w), D = !t.middlewareData.shift;
      let M = T, W = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = w), (r = t.middlewareData.shift) != null && r.enabled.y && (M = E), D && !h) {
        const N = Y(u.left, 0), B = Y(u.right, 0), $ = Y(u.top, 0), F = Y(u.bottom, 0);
        d ? W = x - 2 * (N !== 0 || B !== 0 ? N + B : Y(u.left, u.right)) : M = f - 2 * ($ !== 0 || F !== 0 ? $ + F : Y(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: W,
        availableHeight: M
      });
      const L = await i.getDimensions(c.floating);
      return x !== L.width || f !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ot(e) {
  const t = U(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, c = we(n) !== s || we(r) !== i;
  return c && (n = s, r = i), {
    width: n,
    height: r,
    $: c
  };
}
function je(e) {
  return k(e) ? e : e.contextElement;
}
function ie(e) {
  const t = je(e);
  if (!_(t))
    return z(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ot(t);
  let i = (s ? we(n.width) : n.width) / r, c = (s ? we(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const _n = /* @__PURE__ */ z(0);
function Pt(e) {
  const t = K(e);
  return !Pe() || !t.visualViewport ? _n : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== K(e) ? !1 : t;
}
function oe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = je(e);
  let i = z(1);
  t && (r ? k(r) && (i = ie(r)) : i = ie(e));
  const c = Hn(s, n, r) ? Pt(s) : z(0);
  let l = (o.left + c.x) / i.x, a = (o.top + c.y) / i.y, u = o.width / i.x, g = o.height / i.y;
  if (s) {
    const h = K(s), d = r && k(r) ? K(r) : r;
    let x = h, f = _e(x);
    for (; f && r && d !== x; ) {
      const y = ie(f), R = f.getBoundingClientRect(), E = U(f), w = R.left + (f.clientLeft + parseFloat(E.paddingLeft)) * y.x, T = R.top + (f.clientTop + parseFloat(E.paddingTop)) * y.y;
      l *= y.x, a *= y.y, u *= y.x, g *= y.y, l += w, a += T, x = K(f), f = _e(x);
    }
  }
  return Re({
    width: u,
    height: g,
    x: l,
    y: a
  });
}
function qe(e, t) {
  const n = Ae(e).scrollLeft;
  return t ? t.left + n : oe(X(e)).left + n;
}
function At(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    qe(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Kn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = X(r), c = t ? Oe(t.floating) : !1;
  if (r === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = z(1);
  const u = z(0), g = _(r);
  if ((g || !g && !s) && ((ce(r) !== "body" || ge(i)) && (l = Ae(r)), _(r))) {
    const d = oe(r);
    a = ie(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  const h = i && !g && !s ? At(i, l, !0) : z(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + u.x + h.x,
    y: n.y * a.y - l.scrollTop * a.y + u.y + h.y
  };
}
function Yn(e) {
  return Array.from(e.getClientRects());
}
function Un(e) {
  const t = X(e), n = Ae(e), r = e.ownerDocument.body, o = Y(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Y(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + qe(e);
  const c = -n.scrollTop;
  return U(r).direction === "rtl" && (i += Y(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
function jn(e, t) {
  const n = K(e), r = X(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, c = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const a = Pe();
    (!a || a && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function qn(e, t) {
  const n = oe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = _(e) ? ie(e) : z(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = o * s.x, a = r * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: a
  };
}
function Qe(e, t, n) {
  let r;
  if (t === "viewport")
    r = jn(e, n);
  else if (t === "document")
    r = Un(X(e));
  else if (k(t))
    r = qn(t, n);
  else {
    const o = Pt(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Re(r);
}
function Mt(e, t) {
  const n = ee(e);
  return n === t || !k(n) || Q(n) ? !1 : U(n).position === "fixed" || Mt(n, t);
}
function zn(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = te(e, [], !1).filter((c) => k(c) && ce(c) !== "body"), o = null;
  const s = U(e).position === "fixed";
  let i = s ? ee(e) : e;
  for (; k(i) && !Q(i); ) {
    const c = U(i), l = Ue(i);
    !l && c.position === "fixed" && (o = null), (s ? !l && !o : !l && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ge(i) && !l && Mt(e, i)) ? r = r.filter((u) => u !== i) : o = c, i = ee(i);
  }
  return t.set(e, r), r;
}
function Xn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Oe(t) ? [] : zn(t, this._c) : [].concat(n), r], c = i[0], l = i.reduce((a, u) => {
    const g = Qe(t, u, o);
    return a.top = Y(g.top, a.top), a.right = de(g.right, a.right), a.bottom = de(g.bottom, a.bottom), a.left = Y(g.left, a.left), a;
  }, Qe(t, c, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gn(e) {
  const {
    width: t,
    height: n
  } = Ot(e);
  return {
    width: t,
    height: n
  };
}
function Zn(e, t, n) {
  const r = _(t), o = X(t), s = n === "fixed", i = oe(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = z(0);
  if (r || !r && !s)
    if ((ce(t) !== "body" || ge(o)) && (c = Ae(t)), r) {
      const h = oe(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && (l.x = qe(o));
  const a = o && !r && !s ? At(o, c) : z(0), u = i.left + c.scrollLeft - l.x - a.x, g = i.top + c.scrollTop - l.y - a.y;
  return {
    x: u,
    y: g,
    width: i.width,
    height: i.height
  };
}
function Ie(e) {
  return U(e).position === "static";
}
function et(e, t) {
  if (!_(e) || U(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return X(e) === n && (n = n.ownerDocument.body), n;
}
function Dt(e, t) {
  const n = K(e);
  if (Oe(e))
    return n;
  if (!_(e)) {
    let o = ee(e);
    for (; o && !Q(o); ) {
      if (k(o) && !Ie(o))
        return o;
      o = ee(o);
    }
    return n;
  }
  let r = et(e, t);
  for (; r && en(r) && Ie(r); )
    r = et(r, t);
  return r && Q(r) && Ie(r) && !Ue(r) ? n : r || tn(e) || n;
}
const Jn = async function(e) {
  const t = this.getOffsetParent || Dt, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Zn(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Qn(e) {
  return U(e).direction === "rtl";
}
const er = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kn,
  getDocumentElement: X,
  getClippingRect: Xn,
  getOffsetParent: Dt,
  getElementRects: Jn,
  getClientRects: Yn,
  getDimensions: Gn,
  getScale: ie,
  isElement: k,
  isRTL: Qn
};
function Lt(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tr(e, t) {
  let n = null, r;
  const o = X(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), s();
    const a = e.getBoundingClientRect(), {
      left: u,
      top: g,
      width: h,
      height: d
    } = a;
    if (c || t(), !h || !d)
      return;
    const x = ve(g), f = ve(o.clientWidth - (u + h)), y = ve(o.clientHeight - (g + d)), R = ve(u), w = {
      rootMargin: -x + "px " + -f + "px " + -y + "px " + -R + "px",
      threshold: Y(0, de(1, l)) || 1
    };
    let T = !0;
    function C(D) {
      const M = D[0].intersectionRatio;
      if (M !== l) {
        if (!T)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Lt(a, e.getBoundingClientRect()) && i(), T = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function nr(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, a = je(e), u = o || s ? [...a ? te(a) : [], ...te(t)] : [];
  u.forEach((R) => {
    o && R.addEventListener("scroll", n, {
      passive: !0
    }), s && R.addEventListener("resize", n);
  });
  const g = a && c ? tr(a, n) : null;
  let h = -1, d = null;
  i && (d = new ResizeObserver((R) => {
    let [E] = R;
    E && E.target === a && d && (d.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(t);
    })), n();
  }), a && !l && d.observe(a), d.observe(t));
  let x, f = l ? oe(e) : null;
  l && y();
  function y() {
    const R = oe(e);
    f && !Lt(f, R) && n(), f = R, x = requestAnimationFrame(y);
  }
  return n(), () => {
    var R;
    u.forEach((E) => {
      o && E.removeEventListener("scroll", n), s && E.removeEventListener("resize", n);
    }), g == null || g(), (R = d) == null || R.disconnect(), d = null, l && cancelAnimationFrame(x);
  };
}
const rr = $n, or = Bn, ir = Vn, sr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: er,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Nn(e, t, {
    ...o,
    platform: s
  });
};
var be = typeof document < "u" ? gt : pt;
function Se(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Se(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Se(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function It(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tt(e, t) {
  const n = It(e);
  return Math.round(t * n) / n;
}
function ke(e) {
  const t = m.useRef(e);
  return be(() => {
    t.current = e;
  }), t;
}
function cr(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: a
  } = e, [u, g] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, d] = m.useState(r);
  Se(h, r) || d(r);
  const [x, f] = m.useState(null), [y, R] = m.useState(null), E = m.useCallback((p) => {
    p !== D.current && (D.current = p, f(p));
  }, []), w = m.useCallback((p) => {
    p !== M.current && (M.current = p, R(p));
  }, []), T = s || x, C = i || y, D = m.useRef(null), M = m.useRef(null), W = m.useRef(u), L = l != null, N = ke(l), B = ke(o), $ = ke(a), F = m.useCallback(() => {
    if (!D.current || !M.current)
      return;
    const p = {
      placement: t,
      strategy: n,
      middleware: h
    };
    B.current && (p.platform = B.current), sr(D.current, M.current, p).then((v) => {
      const P = {
        ...v,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      I.current && !Se(W.current, P) && (W.current = P, ht.flushSync(() => {
        g(P);
      }));
    });
  }, [h, t, n, B, $]);
  be(() => {
    a === !1 && W.current.isPositioned && (W.current.isPositioned = !1, g((p) => ({
      ...p,
      isPositioned: !1
    })));
  }, [a]);
  const I = m.useRef(!1);
  be(() => (I.current = !0, () => {
    I.current = !1;
  }), []), be(() => {
    if (T && (D.current = T), C && (M.current = C), T && C) {
      if (N.current)
        return N.current(T, C, F);
      F();
    }
  }, [T, C, F, N, L]);
  const S = m.useMemo(() => ({
    reference: D,
    floating: M,
    setReference: E,
    setFloating: w
  }), [E, w]), A = m.useMemo(() => ({
    reference: T,
    floating: C
  }), [T, C]), b = m.useMemo(() => {
    const p = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return p;
    const v = tt(A.floating, u.x), P = tt(A.floating, u.y);
    return c ? {
      ...p,
      transform: "translate(" + v + "px, " + P + "px)",
      ...It(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: v,
      top: P
    };
  }, [n, c, A.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: F,
    refs: S,
    elements: A,
    floatingStyles: b
  }), [u, F, S, A, b]);
}
const lr = (e, t) => ({
  ...rr(e),
  options: [e, t]
}), ar = (e, t) => ({
  ...or(e),
  options: [e, t]
}), ur = (e, t) => ({
  ...ir(e),
  options: [e, t]
}), kt = {
  ...m
}, fr = kt.useInsertionEffect, dr = fr || ((e) => e());
function Z(e) {
  const t = m.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return dr(() => {
    t.current = e;
  }), m.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var q = typeof document < "u" ? gt : pt;
let nt = !1, mr = 0;
const rt = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + mr++
);
function gr() {
  const [e, t] = m.useState(() => nt ? rt() : void 0);
  return q(() => {
    e == null && t(rt());
  }, []), m.useEffect(() => {
    nt = !0;
  }, []), e;
}
const pr = kt.useId, Ft = pr || gr;
let Ye;
process.env.NODE_ENV !== "production" && (Ye = /* @__PURE__ */ new Set());
function hr() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Ye) != null && e.has(o))) {
    var s;
    (s = Ye) == null || s.add(o), console.error(o);
  }
}
function vr() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const br = /* @__PURE__ */ m.createContext(null), yr = /* @__PURE__ */ m.createContext(null), Nt = () => {
  var e;
  return ((e = m.useContext(br)) == null ? void 0 : e.id) || null;
}, ze = () => m.useContext(yr);
function De(e) {
  return "data-floating-ui-" + e;
}
function j(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
function Fe(e) {
  const t = Xt(e);
  return q(() => {
    t.current = e;
  }), t;
}
const ot = /* @__PURE__ */ De("safe-polygon");
function Ne(e, t, n) {
  return n && !fe(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function wr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: s,
    elements: i
  } = e, {
    enabled: c = !0,
    delay: l = 0,
    handleClose: a = null,
    mouseOnly: u = !1,
    restMs: g = 0,
    move: h = !0
  } = t, d = ze(), x = Nt(), f = Fe(a), y = Fe(l), R = Fe(n), E = m.useRef(), w = m.useRef(-1), T = m.useRef(), C = m.useRef(-1), D = m.useRef(!0), M = m.useRef(!1), W = m.useRef(() => {
  }), L = m.useRef(!1), N = m.useCallback(() => {
    var b;
    const p = (b = o.current.openEvent) == null ? void 0 : b.type;
    return (p == null ? void 0 : p.includes("mouse")) && p !== "mousedown";
  }, [o]);
  m.useEffect(() => {
    if (!c) return;
    function b(p) {
      let {
        open: v
      } = p;
      v || (j(w), j(C), D.current = !0, L.current = !1);
    }
    return s.on("openchange", b), () => {
      s.off("openchange", b);
    };
  }, [c, s]), m.useEffect(() => {
    if (!c || !f.current || !n) return;
    function b(v) {
      N() && r(!1, v, "hover");
    }
    const p = J(i.floating).documentElement;
    return p.addEventListener("mouseleave", b), () => {
      p.removeEventListener("mouseleave", b);
    };
  }, [i.floating, n, r, c, f, N]);
  const B = m.useCallback(function(b, p, v) {
    p === void 0 && (p = !0), v === void 0 && (v = "hover");
    const P = Ne(y.current, "close", E.current);
    P && !T.current ? (j(w), w.current = window.setTimeout(() => r(!1, b, v), P)) : p && (j(w), r(!1, b, v));
  }, [y, r]), $ = Z(() => {
    W.current(), T.current = void 0;
  }), F = Z(() => {
    if (M.current) {
      const b = J(i.floating).body;
      b.style.pointerEvents = "", b.removeAttribute(ot), M.current = !1;
    }
  }), I = Z(() => o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1);
  m.useEffect(() => {
    if (!c) return;
    function b(O) {
      if (j(w), D.current = !1, u && !fe(E.current) || g > 0 && !Ne(y.current, "open"))
        return;
      const V = Ne(y.current, "open", E.current);
      V ? w.current = window.setTimeout(() => {
        R.current || r(!0, O, "hover");
      }, V) : n || r(!0, O, "hover");
    }
    function p(O) {
      if (I()) return;
      W.current();
      const V = J(i.floating);
      if (j(C), L.current = !1, f.current && o.current.floatingContext) {
        n || j(w), T.current = f.current({
          ...o.current.floatingContext,
          tree: d,
          x: O.clientX,
          y: O.clientY,
          onClose() {
            F(), $(), I() || B(O, !0, "safe-polygon");
          }
        });
        const he = T.current;
        V.addEventListener("mousemove", he), W.current = () => {
          V.removeEventListener("mousemove", he);
        };
        return;
      }
      (E.current === "touch" ? !ye(i.floating, O.relatedTarget) : !0) && B(O);
    }
    function v(O) {
      I() || o.current.floatingContext && (f.current == null || f.current({
        ...o.current.floatingContext,
        tree: d,
        x: O.clientX,
        y: O.clientY,
        onClose() {
          F(), $(), I() || B(O);
        }
      })(O));
    }
    if (k(i.domReference)) {
      var P;
      const O = i.domReference;
      return n && O.addEventListener("mouseleave", v), (P = i.floating) == null || P.addEventListener("mouseleave", v), h && O.addEventListener("mousemove", b, {
        once: !0
      }), O.addEventListener("mouseenter", b), O.addEventListener("mouseleave", p), () => {
        var V;
        n && O.removeEventListener("mouseleave", v), (V = i.floating) == null || V.removeEventListener("mouseleave", v), h && O.removeEventListener("mousemove", b), O.removeEventListener("mouseenter", b), O.removeEventListener("mouseleave", p);
      };
    }
  }, [i, c, e, u, g, h, B, $, F, r, n, R, d, y, f, o, I]), q(() => {
    var b;
    if (c && n && (b = f.current) != null && b.__options.blockPointerEvents && N()) {
      M.current = !0;
      const v = i.floating;
      if (k(i.domReference) && v) {
        var p;
        const P = J(i.floating).body;
        P.setAttribute(ot, "");
        const O = i.domReference, V = d == null || (p = d.nodesRef.current.find((le) => le.id === x)) == null || (p = p.context) == null ? void 0 : p.elements.floating;
        return V && (V.style.pointerEvents = ""), P.style.pointerEvents = "none", O.style.pointerEvents = "auto", v.style.pointerEvents = "auto", () => {
          P.style.pointerEvents = "", O.style.pointerEvents = "", v.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, x, i, d, f, N]), q(() => {
    n || (E.current = void 0, L.current = !1, $(), F());
  }, [n, $, F]), m.useEffect(() => () => {
    $(), j(w), j(C), F();
  }, [c, i.domReference, $, F]);
  const S = m.useMemo(() => {
    function b(p) {
      E.current = p.pointerType;
    }
    return {
      onPointerDown: b,
      onPointerEnter: b,
      onMouseMove(p) {
        const {
          nativeEvent: v
        } = p;
        function P() {
          !D.current && !R.current && r(!0, v, "hover");
        }
        u && !fe(E.current) || n || g === 0 || L.current && p.movementX ** 2 + p.movementY ** 2 < 2 || (j(C), E.current === "touch" ? P() : (L.current = !0, C.current = window.setTimeout(P, g)));
      }
    };
  }, [u, r, n, R, g]), A = m.useMemo(() => ({
    onMouseEnter() {
      j(w);
    },
    onMouseLeave(b) {
      I() || B(b.nativeEvent, !1);
    }
  }), [B, I]);
  return m.useMemo(() => c ? {
    reference: S,
    floating: A
  } : {}, [c, S, A]);
}
function Be(e, t) {
  let n = e.filter((o) => {
    var s;
    return o.parentId === t && ((s = o.context) == null ? void 0 : s.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var s;
      return (s = r) == null ? void 0 : s.some((i) => {
        var c;
        return o.parentId === i.id && ((c = o.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(r);
  return n;
}
const Bt = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Wt(e, t) {
  const n = St(e, Bt());
  t === "prev" && n.reverse();
  const r = n.indexOf(nn(J(e)));
  return n.slice(r + 1)[0];
}
function xr(e) {
  return Wt(J(e).body, "next") || e;
}
function Rr(e) {
  return Wt(J(e).body, "prev") || e;
}
function We(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !ye(n, r);
}
function Er(e) {
  St(e, Bt()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function it(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
const $t = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, st = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const [r, o] = m.useState();
  q(() => {
    rn() && o("button");
  }, []);
  const s = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [De("focus-guard")]: "",
    style: $t
  };
  return /* @__PURE__ */ ne("span", {
    ...t,
    ...s
  });
}), Vt = /* @__PURE__ */ m.createContext(null), ct = /* @__PURE__ */ De("portal");
function Cr(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = Ft(), o = Tr(), [s, i] = m.useState(null), c = m.useRef(null);
  return q(() => () => {
    s == null || s.remove(), queueMicrotask(() => {
      c.current = null;
    });
  }, [s]), q(() => {
    if (!r || c.current) return;
    const l = t ? document.getElementById(t) : null;
    if (!l) return;
    const a = document.createElement("div");
    a.id = r, a.setAttribute(ct, ""), l.appendChild(a), c.current = a, i(a);
  }, [t, r]), q(() => {
    if (n === null || !r || c.current) return;
    let l = n || (o == null ? void 0 : o.portalNode);
    l && !k(l) && (l = l.current), l = l || document.body;
    let a = null;
    t && (a = document.createElement("div"), a.id = t, l.appendChild(a));
    const u = document.createElement("div");
    u.id = r, u.setAttribute(ct, ""), l = a || l, l.appendChild(u), c.current = u, i(u);
  }, [t, n, r, o]), s;
}
function Sr(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: o = !0
  } = e, s = Cr({
    id: n,
    root: r
  }), [i, c] = m.useState(null), l = m.useRef(null), a = m.useRef(null), u = m.useRef(null), g = m.useRef(null), h = i == null ? void 0 : i.modal, d = i == null ? void 0 : i.open, x = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!i && // Guards are only for non-modal focus management.
    !i.modal && // Don't render if unmount is transitioning.
    i.open && o && !!(r || s)
  );
  return m.useEffect(() => {
    if (!s || !o || h)
      return;
    function f(y) {
      s && We(y) && (y.type === "focusin" ? it : Er)(s);
    }
    return s.addEventListener("focusin", f, !0), s.addEventListener("focusout", f, !0), () => {
      s.removeEventListener("focusin", f, !0), s.removeEventListener("focusout", f, !0);
    };
  }, [s, o, h]), m.useEffect(() => {
    s && (d || it(s));
  }, [d, s]), /* @__PURE__ */ mt(Vt.Provider, {
    value: m.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: l,
      afterOutsideRef: a,
      beforeInsideRef: u,
      afterInsideRef: g,
      portalNode: s,
      setFocusManagerState: c
    }), [o, s]),
    children: [x && s && /* @__PURE__ */ ne(st, {
      "data-type": "outside",
      ref: l,
      onFocus: (f) => {
        if (We(f, s)) {
          var y;
          (y = u.current) == null || y.focus();
        } else {
          const R = i ? i.domReference : null, E = Rr(R);
          E == null || E.focus();
        }
      }
    }), x && s && /* @__PURE__ */ ne("span", {
      "aria-owns": s.id,
      style: $t
    }), s && /* @__PURE__ */ ht.createPortal(t, s), x && s && /* @__PURE__ */ ne(st, {
      "data-type": "outside",
      ref: a,
      onFocus: (f) => {
        if (We(f, s)) {
          var y;
          (y = g.current) == null || y.focus();
        } else {
          const R = i ? i.domReference : null, E = xr(R);
          E == null || E.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, f.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const Tr = () => m.useContext(Vt), Or = "data-floating-ui-focusable";
function lt(e) {
  return _(e.target) && e.target.tagName === "BUTTON";
}
function Pr(e) {
  return _(e.target) && e.target.tagName === "A";
}
function at(e) {
  return ln(e);
}
function Ar(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    elements: {
      domReference: s
    }
  } = e, {
    enabled: i = !0,
    event: c = "click",
    toggle: l = !0,
    ignoreMouse: a = !1,
    keyboardHandlers: u = !0,
    stickIfOpen: g = !0
  } = t, h = m.useRef(), d = m.useRef(!1), x = m.useMemo(() => ({
    onPointerDown(f) {
      h.current = f.pointerType;
    },
    onMouseDown(f) {
      const y = h.current;
      f.button === 0 && c !== "click" && (fe(y, !0) && a || (n && l && (!(o.current.openEvent && g) || o.current.openEvent.type === "mousedown") ? r(!1, f.nativeEvent, "click") : (f.preventDefault(), r(!0, f.nativeEvent, "click"))));
    },
    onClick(f) {
      const y = h.current;
      if (c === "mousedown" && h.current) {
        h.current = void 0;
        return;
      }
      fe(y, !0) && a || (n && l && (!(o.current.openEvent && g) || o.current.openEvent.type === "click") ? r(!1, f.nativeEvent, "click") : r(!0, f.nativeEvent, "click"));
    },
    onKeyDown(f) {
      h.current = void 0, !(f.defaultPrevented || !u || lt(f)) && (f.key === " " && !at(s) && (f.preventDefault(), d.current = !0), !Pr(f) && f.key === "Enter" && r(!(n && l), f.nativeEvent, "click"));
    },
    onKeyUp(f) {
      f.defaultPrevented || !u || lt(f) || at(s) || f.key === " " && d.current && (d.current = !1, r(!(n && l), f.nativeEvent, "click"));
    }
  }), [o, s, c, a, u, r, n, g, l]);
  return m.useMemo(() => i ? {
    reference: x
  } : {}, [i, x]);
}
const Mr = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Dr = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ut = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Lr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: s
  } = e, {
    enabled: i = !0,
    escapeKey: c = !0,
    outsidePress: l = !0,
    outsidePressEvent: a = "pointerdown",
    referencePress: u = !1,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: d,
    capture: x
  } = t, f = ze(), y = Z(typeof l == "function" ? l : () => !1), R = typeof l == "function" ? y : l, E = m.useRef(!1), w = m.useRef(!1), {
    escapeKey: T,
    outsidePress: C
  } = ut(d), {
    escapeKey: D,
    outsidePress: M
  } = ut(x), W = m.useRef(!1), L = Z((S) => {
    var A;
    if (!n || !i || !c || S.key !== "Escape" || W.current)
      return;
    const b = (A = s.current.floatingContext) == null ? void 0 : A.nodeId, p = f ? Be(f.nodesRef.current, b) : [];
    if (!T && (S.stopPropagation(), p.length > 0)) {
      let v = !0;
      if (p.forEach((P) => {
        var O;
        if ((O = P.context) != null && O.open && !P.context.dataRef.current.__escapeKeyBubbles) {
          v = !1;
          return;
        }
      }), !v)
        return;
    }
    r(!1, on(S) ? S.nativeEvent : S, "escape-key");
  }), N = Z((S) => {
    var A;
    const b = () => {
      var p;
      L(S), (p = ue(S)) == null || p.removeEventListener("keydown", b);
    };
    (A = ue(S)) == null || A.addEventListener("keydown", b);
  }), B = Z((S) => {
    var A;
    const b = E.current;
    E.current = !1;
    const p = w.current;
    if (w.current = !1, a === "click" && p || b || typeof R == "function" && !R(S))
      return;
    const v = ue(S), P = "[" + De("inert") + "]", O = J(o.floating).querySelectorAll(P);
    let V = k(v) ? v : null;
    for (; V && !Q(V); ) {
      const H = ee(V);
      if (Q(H) || !k(H))
        break;
      V = H;
    }
    if (O.length && k(v) && !sn(v) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ye(v, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(O).every((H) => !ye(V, H)))
      return;
    if (_(v) && I) {
      const H = Q(v), G = U(v), ae = /auto|scroll/, _t = H || ae.test(G.overflowX), Ht = H || ae.test(G.overflowY), Kt = _t && v.clientWidth > 0 && v.scrollWidth > v.clientWidth, Yt = Ht && v.clientHeight > 0 && v.scrollHeight > v.clientHeight, Ut = G.direction === "rtl", jt = Yt && (Ut ? S.offsetX <= v.offsetWidth - v.clientWidth : S.offsetX > v.clientWidth), qt = Kt && S.offsetY > v.clientHeight;
      if (jt || qt)
        return;
    }
    const le = (A = s.current.floatingContext) == null ? void 0 : A.nodeId, he = f && Be(f.nodesRef.current, le).some((H) => {
      var G;
      return Le(S, (G = H.context) == null ? void 0 : G.elements.floating);
    });
    if (Le(S, o.floating) || Le(S, o.domReference) || he)
      return;
    const Xe = f ? Be(f.nodesRef.current, le) : [];
    if (Xe.length > 0) {
      let H = !0;
      if (Xe.forEach((G) => {
        var ae;
        if ((ae = G.context) != null && ae.open && !G.context.dataRef.current.__outsidePressBubbles) {
          H = !1;
          return;
        }
      }), !H)
        return;
    }
    r(!1, S, "outside-press");
  }), $ = Z((S) => {
    var A;
    const b = () => {
      var p;
      B(S), (p = ue(S)) == null || p.removeEventListener(a, b);
    };
    (A = ue(S)) == null || A.addEventListener(a, b);
  });
  m.useEffect(() => {
    if (!n || !i)
      return;
    s.current.__escapeKeyBubbles = T, s.current.__outsidePressBubbles = C;
    let S = -1;
    function A(O) {
      r(!1, O, "ancestor-scroll");
    }
    function b() {
      window.clearTimeout(S), W.current = !0;
    }
    function p() {
      S = window.setTimeout(
        () => {
          W.current = !1;
        },
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        Pe() ? 5 : 0
      );
    }
    const v = J(o.floating);
    c && (v.addEventListener("keydown", D ? N : L, D), v.addEventListener("compositionstart", b), v.addEventListener("compositionend", p)), R && v.addEventListener(a, M ? $ : B, M);
    let P = [];
    return h && (k(o.domReference) && (P = te(o.domReference)), k(o.floating) && (P = P.concat(te(o.floating))), !k(o.reference) && o.reference && o.reference.contextElement && (P = P.concat(te(o.reference.contextElement)))), P = P.filter((O) => {
      var V;
      return O !== ((V = v.defaultView) == null ? void 0 : V.visualViewport);
    }), P.forEach((O) => {
      O.addEventListener("scroll", A, {
        passive: !0
      });
    }), () => {
      c && (v.removeEventListener("keydown", D ? N : L, D), v.removeEventListener("compositionstart", b), v.removeEventListener("compositionend", p)), R && v.removeEventListener(a, M ? $ : B, M), P.forEach((O) => {
        O.removeEventListener("scroll", A);
      }), window.clearTimeout(S);
    };
  }, [s, o, c, R, a, n, r, h, i, T, C, L, D, N, B, M, $]), m.useEffect(() => {
    E.current = !1;
  }, [R, a]);
  const F = m.useMemo(() => ({
    onKeyDown: L,
    ...u && {
      [Mr[g]]: (S) => {
        r(!1, S.nativeEvent, "reference-press");
      },
      ...g !== "click" && {
        onClick(S) {
          r(!1, S.nativeEvent, "reference-press");
        }
      }
    }
  }), [L, r, u, g]), I = m.useMemo(() => ({
    onKeyDown: L,
    onMouseDown() {
      w.current = !0;
    },
    onMouseUp() {
      w.current = !0;
    },
    [Dr[a]]: () => {
      E.current = !0;
    }
  }), [L, a]);
  return m.useMemo(() => i ? {
    reference: F,
    floating: I
  } : {}, [i, F, I]);
}
function Ir(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Ft(), s = m.useRef({}), [i] = m.useState(() => vr()), c = Nt() != null;
  if (process.env.NODE_ENV !== "production") {
    const d = r.reference;
    d && !k(d) && hr("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, a] = m.useState(r.reference), u = Z((d, x, f) => {
    s.current.openEvent = d ? x : void 0, i.emit("openchange", {
      open: d,
      event: x,
      reason: f,
      nested: c
    }), n == null || n(d, x, f);
  }), g = m.useMemo(() => ({
    setPositionReference: a
  }), []), h = m.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return m.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: u,
    elements: h,
    events: i,
    floatingId: o,
    refs: g
  }), [t, u, h, i, o, g]);
}
function kr(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Ir({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [s, i] = m.useState(null), [c, l] = m.useState(null), u = (o == null ? void 0 : o.domReference) || s, g = m.useRef(null), h = ze();
  q(() => {
    u && (g.current = u);
  }, [u]);
  const d = cr({
    ...e,
    elements: {
      ...o,
      ...c && {
        reference: c
      }
    }
  }), x = m.useCallback((w) => {
    const T = k(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      getClientRects: () => w.getClientRects(),
      contextElement: w
    } : w;
    l(T), d.refs.setReference(T);
  }, [d.refs]), f = m.useCallback((w) => {
    (k(w) || w === null) && (g.current = w, i(w)), (k(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !k(w)) && d.refs.setReference(w);
  }, [d.refs]), y = m.useMemo(() => ({
    ...d.refs,
    setReference: f,
    setPositionReference: x,
    domReference: g
  }), [d.refs, f, x]), R = m.useMemo(() => ({
    ...d.elements,
    domReference: u
  }), [d.elements, u]), E = m.useMemo(() => ({
    ...d,
    ...r,
    refs: y,
    elements: R,
    nodeId: t
  }), [d, y, R, t, r]);
  return q(() => {
    r.dataRef.current.floatingContext = E;
    const w = h == null ? void 0 : h.nodesRef.current.find((T) => T.id === t);
    w && (w.context = E);
  }), m.useMemo(() => ({
    ...d,
    context: E,
    refs: y,
    elements: R
  }), [d, y, R, E]);
}
const ft = "active", dt = "selected";
function $e(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let s = e;
  if (o && e) {
    const {
      [ft]: i,
      [dt]: c,
      ...l
    } = e;
    s = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Or]: ""
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((l) => {
      let [a, u] = l;
      if (!(o && [ft, dt].includes(a)))
        if (a.indexOf("on") === 0) {
          if (r.has(a) || r.set(a, []), typeof u == "function") {
            var g;
            (g = r.get(a)) == null || g.push(u), i[a] = function() {
              for (var h, d = arguments.length, x = new Array(d), f = 0; f < d; f++)
                x[f] = arguments[f];
              return (h = r.get(a)) == null ? void 0 : h.map((y) => y(...x)).find((y) => y !== void 0);
            };
          }
        } else
          i[a] = u;
    }), i), {})
  };
}
function Fr(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), o = m.useCallback(
    (c) => $e(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = m.useCallback(
    (c) => $e(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = m.useCallback(
    (c) => $e(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return m.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: s,
    getItemProps: i
  }), [o, s, i]);
}
function Nr(e, t) {
  const [n, r] = m.useState(e);
  return e && !n && r(!0), m.useEffect(() => {
    if (!e && n) {
      const o = setTimeout(() => r(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, n, t]), n;
}
function Br(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, i = (typeof o == "number" ? o : o.close) || 0, [c, l] = m.useState("unmounted"), a = Nr(n, i);
  return !a && c === "close" && l("unmounted"), q(() => {
    if (r) {
      if (n) {
        l("initial");
        const u = requestAnimationFrame(() => {
          l("open");
        });
        return () => {
          cancelAnimationFrame(u);
        };
      }
      l("close");
    }
  }, [n, r]), {
    isMounted: a,
    status: c
  };
}
function _r(e) {
  const {
    allowedOutsideClasses: t,
    animationDuration: n,
    children: r,
    closeAfterInteract: o,
    content: s,
    contentAutoWidth: i,
    contentClasses: c,
    contentOffset: l = 6,
    contentStyles: a,
    disabled: u,
    hoverDelay: g,
    hoverOpen: h,
    onMounted: d,
    placement: x,
    stopChildPropagation: f,
    onOpenChange: y
  } = e, [R, E] = Gt(!1), { refs: w, floatingStyles: T, context: C } = kr({
    open: R,
    onOpenChange(b) {
      E(b), y == null || y(b);
    },
    whileElementsMounted: (b, p, v) => (d !== void 0 && d(), nr(b, p, v)),
    placement: x || "bottom",
    transform: !1,
    // More expensive but allows to use transform for animations
    middleware: [
      lr(l),
      ar({
        padding: 6,
        fallbackPlacements: [
          "bottom-start",
          "bottom-end",
          "top",
          "top-start",
          "top-end"
        ]
      }),
      i && ur({
        apply({ rects: b, elements: p }) {
          p.floating.style.width = `${b.reference.width}px`;
        }
      })
    ]
  }), { isMounted: D, status: M } = Br(C, {
    duration: n || 200
  }), W = Lr(C, {
    ancestorScroll: !0,
    outsidePress: (b) => t && b.target instanceof Element && !b.target.closest(t) || !1
  }), L = Ar(C, { enabled: !u }), N = wr(C, {
    enabled: !u,
    restMs: g || 200
  }), B = h ? N : L, { getReferenceProps: $, getFloatingProps: F } = Fr([
    W,
    B
  ]), I = $({
    ref: w.setReference,
    ...f && {
      onClick: (b) => b.stopPropagation()
    }
  }), S = F({
    onClick: () => {
      o && C.onOpenChange(!1);
    }
  });
  let A;
  return Zt(r) ? A = Jt(r, I) : A = /* @__PURE__ */ ne("div", { ...I, children: r }), /* @__PURE__ */ mt(zt, { children: [
    A,
    D && !!s && /* @__PURE__ */ ne(Sr, { children: /* @__PURE__ */ ne(
      "div",
      {
        ref: w.setFloating,
        className: Qt([
          "Floating",
          !n && "Floating--animated",
          c
        ]),
        "data-position": C.placement,
        "data-transition": M,
        style: { ...T, ...a },
        ...S,
        children: s
      }
    ) })
  ] });
}
export {
  _r as Floating
};
