import { jsxs as wt, Fragment as bt, jsx as Ne } from "react/jsx-runtime";
import * as G from "react";
import { useState as Ue, useRef as ze, useEffect as Ot } from "react";
import * as xt from "react-dom";
var Xe = function(t) {
  return t.reduce(function(r, n) {
    var a = n[0], o = n[1];
    return r[a] = o, r;
  }, {});
}, Ye = typeof window < "u" && window.document && window.document.createElement ? G.useLayoutEffect : G.useEffect, D = "top", L = "bottom", T = "right", B = "left", je = "auto", ue = [D, L, T, B], Q = "start", se = "end", Et = "clippingParents", at = "viewport", ae = "popper", At = "reference", Ge = /* @__PURE__ */ ue.reduce(function(e, t) {
  return e.concat([t + "-" + Q, t + "-" + se]);
}, []), ot = /* @__PURE__ */ [].concat(ue, [je]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Q, t + "-" + se]);
}, []), Pt = "beforeRead", Rt = "read", jt = "afterRead", St = "beforeMain", Dt = "main", Bt = "afterMain", Ct = "beforeWrite", $t = "write", Mt = "afterWrite", Lt = [Pt, Rt, jt, St, Dt, Bt, Ct, $t, Mt];
function H(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function J(e) {
  var t = $(e).Element;
  return e instanceof t || e instanceof Element;
}
function M(e) {
  var t = $(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Se(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = $(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Tt(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !M(o) || !H(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(s) {
      var f = a[s];
      f === !1 ? o.removeAttribute(s) : o.setAttribute(s, f === !0 ? "" : f);
    }));
  });
}
function kt(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], o = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), f = s.reduce(function(i, c) {
        return i[c] = "", i;
      }, {});
      !M(a) || !H(a) || (Object.assign(a.style, f), Object.keys(o).forEach(function(i) {
        a.removeAttribute(i);
      }));
    });
  };
}
const Wt = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Tt,
  effect: kt,
  requires: ["computeStyles"]
};
function F(e) {
  return e.split("-")[0];
}
var Z = Math.max, ge = Math.min, _ = Math.round;
function Pe() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function it() {
  return !/^((?!chrome|android).)*safari/i.test(Pe());
}
function ee(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && M(e) && (a = e.offsetWidth > 0 && _(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && _(n.height) / e.offsetHeight || 1);
  var s = J(e) ? $(e) : window, f = s.visualViewport, i = !it() && r, c = (n.left + (i && f ? f.offsetLeft : 0)) / a, u = (n.top + (i && f ? f.offsetTop : 0)) / o, l = n.width / a, m = n.height / o;
  return {
    width: l,
    height: m,
    top: u,
    right: c + l,
    bottom: u + m,
    left: c,
    x: c,
    y: u
  };
}
function De(e) {
  var t = ee(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function st(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Se(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function V(e) {
  return $(e).getComputedStyle(e);
}
function Ft(e) {
  return ["table", "td", "th"].indexOf(H(e)) >= 0;
}
function I(e) {
  return ((J(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function we(e) {
  return H(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Se(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    I(e)
  );
}
function Ze(e) {
  return !M(e) || // https://github.com/popperjs/popper-core/issues/837
  V(e).position === "fixed" ? null : e.offsetParent;
}
function Ht(e) {
  var t = /firefox/i.test(Pe()), r = /Trident/i.test(Pe());
  if (r && M(e)) {
    var n = V(e);
    if (n.position === "fixed")
      return null;
  }
  var a = we(e);
  for (Se(a) && (a = a.host); M(a) && ["html", "body"].indexOf(H(a)) < 0; ) {
    var o = V(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ce(e) {
  for (var t = $(e), r = Ze(e); r && Ft(r) && V(r).position === "static"; )
    r = Ze(r);
  return r && (H(r) === "html" || H(r) === "body" && V(r).position === "static") ? t : r || Ht(e) || t;
}
function Be(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function oe(e, t, r) {
  return Z(e, ge(t, r));
}
function Vt(e, t, r) {
  var n = oe(e, t, r);
  return n > r ? r : n;
}
function ft() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ut(e) {
  return Object.assign({}, ft(), e);
}
function ct(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var qt = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ut(typeof t != "number" ? t : ct(t, ue));
};
function It(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, s = r.modifiersData.popperOffsets, f = F(r.placement), i = Be(f), c = [B, T].indexOf(f) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var l = qt(a.padding, r), m = De(o), p = i === "y" ? D : B, y = i === "y" ? L : T, v = r.rects.reference[u] + r.rects.reference[i] - s[i] - r.rects.popper[u], d = s[i] - r.rects.reference[i], g = ce(o), x = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, E = v / 2 - d / 2, h = l[p], w = x - m[u] - l[y], b = x / 2 - m[u] / 2 + E, O = oe(h, b, w), R = i;
    r.modifiersData[n] = (t = {}, t[R] = O, t.centerOffset = O - b, t);
  }
}
function Nt(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || st(t.elements.popper, a) && (t.elements.arrow = a));
}
const Ut = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: It,
  effect: Nt,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function te(e) {
  return e.split("-")[1];
}
var zt = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xt(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: _(r * a) / a || 0,
    y: _(n * a) / a || 0
  };
}
function Je(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, f = e.position, i = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, l = e.isFixed, m = s.x, p = m === void 0 ? 0 : m, y = s.y, v = y === void 0 ? 0 : y, d = typeof u == "function" ? u({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = d.x, v = d.y;
  var g = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), E = B, h = D, w = window;
  if (c) {
    var b = ce(r), O = "clientHeight", R = "clientWidth";
    if (b === $(r) && (b = I(r), V(b).position !== "static" && f === "absolute" && (O = "scrollHeight", R = "scrollWidth")), b = b, a === D || (a === B || a === T) && o === se) {
      h = L;
      var P = l && b === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[O]
      );
      v -= P - n.height, v *= i ? 1 : -1;
    }
    if (a === B || (a === D || a === L) && o === se) {
      E = T;
      var A = l && b === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[R]
      );
      p -= A - n.width, p *= i ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: f
  }, c && zt), k = u === !0 ? Xt({
    x: p,
    y: v
  }, $(r)) : {
    x: p,
    y: v
  };
  if (p = k.x, v = k.y, i) {
    var S;
    return Object.assign({}, j, (S = {}, S[h] = x ? "0" : "", S[E] = g ? "0" : "", S.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", S));
  }
  return Object.assign({}, j, (t = {}, t[h] = x ? v + "px" : "", t[E] = g ? p + "px" : "", t.transform = "", t));
}
function Yt(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, o = r.adaptive, s = o === void 0 ? !0 : o, f = r.roundOffsets, i = f === void 0 ? !0 : f, c = {
    placement: F(t.placement),
    variation: te(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Je(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: i
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Je(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: i
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Gt = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Yt,
  data: {}
};
var he = {
  passive: !0
};
function Zt(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? !0 : a, s = n.resize, f = s === void 0 ? !0 : s, i = $(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, he);
  }), f && i.addEventListener("resize", r.update, he), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, he);
    }), f && i.removeEventListener("resize", r.update, he);
  };
}
const Jt = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zt,
  data: {}
};
var Kt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ye(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Kt[t];
  });
}
var Qt = {
  start: "end",
  end: "start"
};
function Ke(e) {
  return e.replace(/start|end/g, function(t) {
    return Qt[t];
  });
}
function Ce(e) {
  var t = $(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function $e(e) {
  return ee(I(e)).left + Ce(e).scrollLeft;
}
function _t(e, t) {
  var r = $(e), n = I(e), a = r.visualViewport, o = n.clientWidth, s = n.clientHeight, f = 0, i = 0;
  if (a) {
    o = a.width, s = a.height;
    var c = it();
    (c || !c && t === "fixed") && (f = a.offsetLeft, i = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: f + $e(e),
    y: i
  };
}
function er(e) {
  var t, r = I(e), n = Ce(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Z(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Z(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), f = -n.scrollLeft + $e(e), i = -n.scrollTop;
  return V(a || r).direction === "rtl" && (f += Z(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: f,
    y: i
  };
}
function Me(e) {
  var t = V(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function pt(e) {
  return ["html", "body", "#document"].indexOf(H(e)) >= 0 ? e.ownerDocument.body : M(e) && Me(e) ? e : pt(we(e));
}
function ie(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pt(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = $(n), s = a ? [o].concat(o.visualViewport || [], Me(n) ? n : []) : n, f = t.concat(s);
  return a ? f : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    f.concat(ie(we(s)))
  );
}
function Re(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tr(e, t) {
  var r = ee(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Qe(e, t, r) {
  return t === at ? Re(_t(e, r)) : J(t) ? tr(t, r) : Re(er(I(e)));
}
function rr(e) {
  var t = ie(we(e)), r = ["absolute", "fixed"].indexOf(V(e).position) >= 0, n = r && M(e) ? ce(e) : e;
  return J(n) ? t.filter(function(a) {
    return J(a) && st(a, n) && H(a) !== "body";
  }) : [];
}
function nr(e, t, r, n) {
  var a = t === "clippingParents" ? rr(e) : [].concat(t), o = [].concat(a, [r]), s = o[0], f = o.reduce(function(i, c) {
    var u = Qe(e, c, n);
    return i.top = Z(u.top, i.top), i.right = ge(u.right, i.right), i.bottom = ge(u.bottom, i.bottom), i.left = Z(u.left, i.left), i;
  }, Qe(e, s, n));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
function lt(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? F(n) : null, o = n ? te(n) : null, s = t.x + t.width / 2 - r.width / 2, f = t.y + t.height / 2 - r.height / 2, i;
  switch (a) {
    case D:
      i = {
        x: s,
        y: t.y - r.height
      };
      break;
    case L:
      i = {
        x: s,
        y: t.y + t.height
      };
      break;
    case T:
      i = {
        x: t.x + t.width,
        y: f
      };
      break;
    case B:
      i = {
        x: t.x - r.width,
        y: f
      };
      break;
    default:
      i = {
        x: t.x,
        y: t.y
      };
  }
  var c = a ? Be(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case Q:
        i[c] = i[c] - (t[u] / 2 - r[u] / 2);
        break;
      case se:
        i[c] = i[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return i;
}
function fe(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, s = o === void 0 ? e.strategy : o, f = r.boundary, i = f === void 0 ? Et : f, c = r.rootBoundary, u = c === void 0 ? at : c, l = r.elementContext, m = l === void 0 ? ae : l, p = r.altBoundary, y = p === void 0 ? !1 : p, v = r.padding, d = v === void 0 ? 0 : v, g = ut(typeof d != "number" ? d : ct(d, ue)), x = m === ae ? At : ae, E = e.rects.popper, h = e.elements[y ? x : m], w = nr(J(h) ? h : h.contextElement || I(e.elements.popper), i, u, s), b = ee(e.elements.reference), O = lt({
    reference: b,
    element: E,
    placement: a
  }), R = Re(Object.assign({}, E, O)), P = m === ae ? R : b, A = {
    top: w.top - P.top + g.top,
    bottom: P.bottom - w.bottom + g.bottom,
    left: w.left - P.left + g.left,
    right: P.right - w.right + g.right
  }, j = e.modifiersData.offset;
  if (m === ae && j) {
    var k = j[a];
    Object.keys(A).forEach(function(S) {
      var N = [T, L].indexOf(S) >= 0 ? 1 : -1, U = [D, L].indexOf(S) >= 0 ? "y" : "x";
      A[S] += k[U] * N;
    });
  }
  return A;
}
function ar(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, s = r.padding, f = r.flipVariations, i = r.allowedAutoPlacements, c = i === void 0 ? ot : i, u = te(n), l = u ? f ? Ge : Ge.filter(function(y) {
    return te(y) === u;
  }) : ue, m = l.filter(function(y) {
    return c.indexOf(y) >= 0;
  });
  m.length === 0 && (m = l);
  var p = m.reduce(function(y, v) {
    return y[v] = fe(e, {
      placement: v,
      boundary: a,
      rootBoundary: o,
      padding: s
    })[F(v)], y;
  }, {});
  return Object.keys(p).sort(function(y, v) {
    return p[y] - p[v];
  });
}
function or(e) {
  if (F(e) === je)
    return [];
  var t = ye(e);
  return [Ke(e), t, Ke(t)];
}
function ir(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, f = s === void 0 ? !0 : s, i = r.fallbackPlacements, c = r.padding, u = r.boundary, l = r.rootBoundary, m = r.altBoundary, p = r.flipVariations, y = p === void 0 ? !0 : p, v = r.allowedAutoPlacements, d = t.options.placement, g = F(d), x = g === d, E = i || (x || !y ? [ye(d)] : or(d)), h = [d].concat(E).reduce(function(K, q) {
      return K.concat(F(q) === je ? ar(t, {
        placement: q,
        boundary: u,
        rootBoundary: l,
        padding: c,
        flipVariations: y,
        allowedAutoPlacements: v
      }) : q);
    }, []), w = t.rects.reference, b = t.rects.popper, O = /* @__PURE__ */ new Map(), R = !0, P = h[0], A = 0; A < h.length; A++) {
      var j = h[A], k = F(j), S = te(j) === Q, N = [D, L].indexOf(k) >= 0, U = N ? "width" : "height", C = fe(t, {
        placement: j,
        boundary: u,
        rootBoundary: l,
        altBoundary: m,
        padding: c
      }), W = N ? S ? T : B : S ? L : D;
      w[U] > b[U] && (W = ye(W));
      var pe = ye(W), z = [];
      if (o && z.push(C[k] <= 0), f && z.push(C[W] <= 0, C[pe] <= 0), z.every(function(K) {
        return K;
      })) {
        P = j, R = !1;
        break;
      }
      O.set(j, z);
    }
    if (R)
      for (var le = y ? 3 : 1, be = function(q) {
        var ne = h.find(function(de) {
          var X = O.get(de);
          if (X)
            return X.slice(0, q).every(function(Oe) {
              return Oe;
            });
        });
        if (ne)
          return P = ne, "break";
      }, re = le; re > 0; re--) {
        var ve = be(re);
        if (ve === "break") break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const sr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ir,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _e(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function et(e) {
  return [D, T, L, B].some(function(t) {
    return e[t] >= 0;
  });
}
function fr(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = fe(t, {
    elementContext: "reference"
  }), f = fe(t, {
    altBoundary: !0
  }), i = _e(s, n), c = _e(f, a, o), u = et(i), l = et(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: l
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": l
  });
}
const ur = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fr
};
function cr(e, t, r) {
  var n = F(e), a = [B, D].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = o[0], f = o[1];
  return s = s || 0, f = (f || 0) * a, [B, T].indexOf(n) >= 0 ? {
    x: f,
    y: s
  } : {
    x: s,
    y: f
  };
}
function pr(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, s = ot.reduce(function(u, l) {
    return u[l] = cr(l, t.rects, o), u;
  }, {}), f = s[t.placement], i = f.x, c = f.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const lr = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pr
};
function vr(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = lt({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const dr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vr,
  data: {}
};
function mr(e) {
  return e === "x" ? "y" : "x";
}
function hr(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, f = s === void 0 ? !1 : s, i = r.boundary, c = r.rootBoundary, u = r.altBoundary, l = r.padding, m = r.tether, p = m === void 0 ? !0 : m, y = r.tetherOffset, v = y === void 0 ? 0 : y, d = fe(t, {
    boundary: i,
    rootBoundary: c,
    padding: l,
    altBoundary: u
  }), g = F(t.placement), x = te(t.placement), E = !x, h = Be(g), w = mr(h), b = t.modifiersData.popperOffsets, O = t.rects.reference, R = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, A = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var S, N = h === "y" ? D : B, U = h === "y" ? L : T, C = h === "y" ? "height" : "width", W = b[h], pe = W + d[N], z = W - d[U], le = p ? -R[C] / 2 : 0, be = x === Q ? O[C] : R[C], re = x === Q ? -R[C] : -O[C], ve = t.elements.arrow, K = p && ve ? De(ve) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ft(), ne = q[N], de = q[U], X = oe(0, O[C], K[C]), Oe = E ? O[C] / 2 - le - X - ne - A.mainAxis : be - X - ne - A.mainAxis, vt = E ? -O[C] / 2 + le + X + de + A.mainAxis : re + X + de + A.mainAxis, xe = t.elements.arrow && ce(t.elements.arrow), dt = xe ? h === "y" ? xe.clientTop || 0 : xe.clientLeft || 0 : 0, Le = (S = j == null ? void 0 : j[h]) != null ? S : 0, mt = W + Oe - Le - dt, ht = W + vt - Le, Te = oe(p ? ge(pe, mt) : pe, W, p ? Z(z, ht) : z);
      b[h] = Te, k[h] = Te - W;
    }
    if (f) {
      var ke, yt = h === "x" ? D : B, gt = h === "x" ? L : T, Y = b[w], me = w === "y" ? "height" : "width", We = Y + d[yt], Fe = Y - d[gt], Ee = [D, B].indexOf(g) !== -1, He = (ke = j == null ? void 0 : j[w]) != null ? ke : 0, Ve = Ee ? We : Y - O[me] - R[me] - He + A.altAxis, qe = Ee ? Y + O[me] + R[me] - He - A.altAxis : Fe, Ie = p && Ee ? Vt(Ve, Y, qe) : oe(p ? Ve : We, Y, p ? qe : Fe);
      b[w] = Ie, k[w] = Ie - Y;
    }
    t.modifiersData[n] = k;
  }
}
const yr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hr,
  requiresIfExists: ["offset"]
};
function gr(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wr(e) {
  return e === $(e) || !M(e) ? Ce(e) : gr(e);
}
function br(e) {
  var t = e.getBoundingClientRect(), r = _(t.width) / e.offsetWidth || 1, n = _(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Or(e, t, r) {
  r === void 0 && (r = !1);
  var n = M(t), a = M(t) && br(t), o = I(t), s = ee(e, a, r), f = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((H(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Me(o)) && (f = wr(t)), M(t) ? (i = ee(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : o && (i.x = $e(o))), {
    x: s.left + f.scrollLeft - i.x,
    y: s.top + f.scrollTop - i.y,
    width: s.width,
    height: s.height
  };
}
function xr(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(f) {
      if (!r.has(f)) {
        var i = t.get(f);
        i && a(i);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Er(e) {
  var t = xr(e);
  return Lt.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Ar(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Pr(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var tt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Rr(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? tt : a;
  return function(f, i, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, tt, o),
      modifiersData: {},
      elements: {
        reference: f,
        popper: i
      },
      attributes: {},
      styles: {}
    }, l = [], m = !1, p = {
      state: u,
      setOptions: function(g) {
        var x = typeof g == "function" ? g(u.options) : g;
        v(), u.options = Object.assign({}, o, u.options, x), u.scrollParents = {
          reference: J(f) ? ie(f) : f.contextElement ? ie(f.contextElement) : [],
          popper: ie(i)
        };
        var E = Er(Pr([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = E.filter(function(h) {
          return h.enabled;
        }), y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var g = u.elements, x = g.reference, E = g.popper;
          if (rt(x, E)) {
            u.rects = {
              reference: Or(x, ce(E), u.options.strategy === "fixed"),
              popper: De(E)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
              return u.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var h = 0; h < u.orderedModifiers.length; h++) {
              if (u.reset === !0) {
                u.reset = !1, h = -1;
                continue;
              }
              var w = u.orderedModifiers[h], b = w.fn, O = w.options, R = O === void 0 ? {} : O, P = w.name;
              typeof b == "function" && (u = b({
                state: u,
                options: R,
                name: P,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ar(function() {
        return new Promise(function(d) {
          p.forceUpdate(), d(u);
        });
      }),
      destroy: function() {
        v(), m = !0;
      }
    };
    if (!rt(f, i))
      return p;
    p.setOptions(c).then(function(d) {
      !m && c.onFirstUpdate && c.onFirstUpdate(d);
    });
    function y() {
      u.orderedModifiers.forEach(function(d) {
        var g = d.name, x = d.options, E = x === void 0 ? {} : x, h = d.effect;
        if (typeof h == "function") {
          var w = h({
            state: u,
            name: g,
            instance: p,
            options: E
          }), b = function() {
          };
          l.push(w || b);
        }
      });
    }
    function v() {
      l.forEach(function(d) {
        return d();
      }), l = [];
    }
    return p;
  };
}
var jr = [Jt, dr, Gt, Wt, lr, sr, yr, Ut, ur], Sr = /* @__PURE__ */ Rr({
  defaultModifiers: jr
});
function Dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae, nt;
function Br() {
  if (nt) return Ae;
  nt = 1;
  var e = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(o, s) {
    if (o === s) return !0;
    if (o && s && typeof o == "object" && typeof s == "object") {
      if (o.constructor !== s.constructor) return !1;
      var f, i, c;
      if (Array.isArray(o)) {
        if (f = o.length, f != s.length) return !1;
        for (i = f; i-- !== 0; )
          if (!a(o[i], s[i])) return !1;
        return !0;
      }
      var u;
      if (t && o instanceof Map && s instanceof Map) {
        if (o.size !== s.size) return !1;
        for (u = o.entries(); !(i = u.next()).done; )
          if (!s.has(i.value[0])) return !1;
        for (u = o.entries(); !(i = u.next()).done; )
          if (!a(i.value[1], s.get(i.value[0]))) return !1;
        return !0;
      }
      if (r && o instanceof Set && s instanceof Set) {
        if (o.size !== s.size) return !1;
        for (u = o.entries(); !(i = u.next()).done; )
          if (!s.has(i.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(s)) {
        if (f = o.length, f != s.length) return !1;
        for (i = f; i-- !== 0; )
          if (o[i] !== s[i]) return !1;
        return !0;
      }
      if (o.constructor === RegExp) return o.source === s.source && o.flags === s.flags;
      if (o.valueOf !== Object.prototype.valueOf && typeof o.valueOf == "function" && typeof s.valueOf == "function") return o.valueOf() === s.valueOf();
      if (o.toString !== Object.prototype.toString && typeof o.toString == "function" && typeof s.toString == "function") return o.toString() === s.toString();
      if (c = Object.keys(o), f = c.length, f !== Object.keys(s).length) return !1;
      for (i = f; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, c[i])) return !1;
      if (e && o instanceof Element) return !1;
      for (i = f; i-- !== 0; )
        if (!((c[i] === "_owner" || c[i] === "__v" || c[i] === "__o") && o.$$typeof) && !a(o[c[i]], s[c[i]]))
          return !1;
      return !0;
    }
    return o !== o && s !== s;
  }
  return Ae = function(s, f) {
    try {
      return a(s, f);
    } catch (i) {
      if ((i.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw i;
    }
  }, Ae;
}
var Cr = Br();
const $r = /* @__PURE__ */ Dr(Cr);
var Mr = [], Lr = function(t, r, n) {
  n === void 0 && (n = {});
  var a = G.useRef(null), o = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || Mr
  }, s = G.useState({
    styles: {
      popper: {
        position: o.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), f = s[0], i = s[1], c = G.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(p) {
        var y = p.state, v = Object.keys(y.elements);
        xt.flushSync(function() {
          i({
            styles: Xe(v.map(function(d) {
              return [d, y.styles[d] || {}];
            })),
            attributes: Xe(v.map(function(d) {
              return [d, y.attributes[d]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = G.useMemo(function() {
    var m = {
      onFirstUpdate: o.onFirstUpdate,
      placement: o.placement,
      strategy: o.strategy,
      modifiers: [].concat(o.modifiers, [c, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return $r(a.current, m) ? a.current || m : (a.current = m, m);
  }, [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, c]), l = G.useRef();
  return Ye(function() {
    l.current && l.current.setOptions(u);
  }, [u]), Ye(function() {
    if (!(t == null || r == null)) {
      var m = n.createPopper || Sr, p = m(t, r, u);
      return l.current = p, function() {
        p.destroy(), l.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: l.current ? l.current.state : null,
    styles: f.styles,
    attributes: f.attributes,
    update: l.current ? l.current.update : null,
    forceUpdate: l.current ? l.current.forceUpdate : null
  };
};
function Wr(e) {
  const { children: t, content: r, isOpen: n, onClickOutside: a, placement: o } = e, [s, f] = Ue(null), [i, c] = Ue(
    null
  ), u = ze(null), l = ze(null), { styles: m, attributes: p } = Lr(s, i, {
    placement: o
  });
  function y(v) {
    var d, g;
    !((d = u.current) != null && d.contains(v.target)) && !((g = l.current) != null && g.contains(v.target)) && (a == null || a());
  }
  return Ot(() => (n ? document.addEventListener("mousedown", y) : document.removeEventListener("mousedown", y), () => {
    document.removeEventListener("mousedown", y);
  }), [n]), /* @__PURE__ */ wt(bt, { children: [
    /* @__PURE__ */ Ne(
      "div",
      {
        ref: (v) => {
          f(v), l.current = v;
        },
        children: t
      }
    ),
    n && /* @__PURE__ */ Ne(
      "div",
      {
        ref: (v) => {
          c(v), u.current = v;
        },
        style: { ...m.popper, zIndex: e.baseZIndex ?? 5 },
        ...p.popper,
        children: r
      }
    )
  ] });
}
export {
  Wr as Popper
};
