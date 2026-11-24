function Bh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ps = { exports: {} }, Sl = {};
var Zp;
function l_() {
  if (Zp) return Sl;
  Zp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, s, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      d = {};
      for (var m in s)
        m !== "key" && (d[m] = s[m]);
    } else d = s;
    return s = d.ref, {
      $$typeof: n,
      type: r,
      key: f,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Sl.Fragment = i, Sl.jsx = o, Sl.jsxs = o, Sl;
}
var Rp;
function o_() {
  return Rp || (Rp = 1, Ps.exports = l_()), Ps.exports;
}
var g = o_(), Fs = { exports: {} }, wl = {}, Is = { exports: {} }, ec = {};
var Up;
function r_() {
  return Up || (Up = 1, (function(n) {
    function i(k, Z) {
      var G = k.length;
      k.push(Z);
      e: for (; 0 < G; ) {
        var le = G - 1 >>> 1, ue = k[le];
        if (0 < s(ue, Z))
          k[le] = Z, k[G] = ue, G = le;
        else break e;
      }
    }
    function o(k) {
      return k.length === 0 ? null : k[0];
    }
    function r(k) {
      if (k.length === 0) return null;
      var Z = k[0], G = k.pop();
      if (G !== Z) {
        k[0] = G;
        e: for (var le = 0, ue = k.length, S = ue >>> 1; le < S; ) {
          var D = 2 * (le + 1) - 1, Q = k[D], P = D + 1, de = k[P];
          if (0 > s(Q, G))
            P < ue && 0 > s(de, Q) ? (k[le] = de, k[P] = G, le = P) : (k[le] = Q, k[D] = G, le = D);
          else if (P < ue && 0 > s(de, G))
            k[le] = de, k[P] = G, le = P;
          else break e;
        }
      }
      return Z;
    }
    function s(k, Z) {
      var G = k.sortIndex - Z.sortIndex;
      return G !== 0 ? G : k.id - Z.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      n.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var v = [], h = [], _ = 1, w = null, z = 3, E = !1, N = !1, X = !1, V = !1, K = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function q(k) {
      for (var Z = o(h); Z !== null; ) {
        if (Z.callback === null) r(h);
        else if (Z.startTime <= k)
          r(h), Z.sortIndex = Z.expirationTime, i(v, Z);
        else break;
        Z = o(h);
      }
    }
    function W(k) {
      if (X = !1, q(k), !N)
        if (o(v) !== null)
          N = !0, te || (te = !0, _e());
        else {
          var Z = o(h);
          Z !== null && Ve(W, Z.startTime - k);
        }
    }
    var te = !1, M = -1, J = 5, ge = -1;
    function ce() {
      return V ? !0 : !(n.unstable_now() - ge < J);
    }
    function ve() {
      if (V = !1, te) {
        var k = n.unstable_now();
        ge = k;
        var Z = !0;
        try {
          e: {
            N = !1, X && (X = !1, ee(M), M = -1), E = !0;
            var G = z;
            try {
              t: {
                for (q(k), w = o(v); w !== null && !(w.expirationTime > k && ce()); ) {
                  var le = w.callback;
                  if (typeof le == "function") {
                    w.callback = null, z = w.priorityLevel;
                    var ue = le(
                      w.expirationTime <= k
                    );
                    if (k = n.unstable_now(), typeof ue == "function") {
                      w.callback = ue, q(k), Z = !0;
                      break t;
                    }
                    w === o(v) && r(v), q(k);
                  } else r(v);
                  w = o(v);
                }
                if (w !== null) Z = !0;
                else {
                  var S = o(h);
                  S !== null && Ve(
                    W,
                    S.startTime - k
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              w = null, z = G, E = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? _e() : te = !1;
        }
      }
    }
    var _e;
    if (typeof $ == "function")
      _e = function() {
        $(ve);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), Oe = me.port2;
      me.port1.onmessage = ve, _e = function() {
        Oe.postMessage(null);
      };
    } else
      _e = function() {
        K(ve, 0);
      };
    function Ve(k, Z) {
      M = K(function() {
        k(n.unstable_now());
      }, Z);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, n.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < k ? Math.floor(1e3 / k) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, n.unstable_next = function(k) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = z;
      }
      var G = z;
      z = Z;
      try {
        return k();
      } finally {
        z = G;
      }
    }, n.unstable_requestPaint = function() {
      V = !0;
    }, n.unstable_runWithPriority = function(k, Z) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var G = z;
      z = k;
      try {
        return Z();
      } finally {
        z = G;
      }
    }, n.unstable_scheduleCallback = function(k, Z, G) {
      var le = n.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? le + G : le) : G = le, k) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = G + ue, k = {
        id: _++,
        callback: Z,
        priorityLevel: k,
        startTime: G,
        expirationTime: ue,
        sortIndex: -1
      }, G > le ? (k.sortIndex = G, i(h, k), o(v) === null && k === o(h) && (X ? (ee(M), M = -1) : X = !0, Ve(W, G - le))) : (k.sortIndex = ue, i(v, k), N || E || (N = !0, te || (te = !0, _e()))), k;
    }, n.unstable_shouldYield = ce, n.unstable_wrapCallback = function(k) {
      var Z = z;
      return function() {
        var G = z;
        z = Z;
        try {
          return k.apply(this, arguments);
        } finally {
          z = G;
        }
      };
    };
  })(ec)), ec;
}
var Yp;
function u_() {
  return Yp || (Yp = 1, Is.exports = r_()), Is.exports;
}
var tc = { exports: {} }, fe = {};
var Bp;
function s_() {
  if (Bp) return fe;
  Bp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), z = Symbol.iterator;
  function E(S) {
    return S === null || typeof S != "object" ? null : (S = z && S[z] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var N = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, V = {};
  function K(S, D, Q) {
    this.props = S, this.context = D, this.refs = V, this.updater = Q || N;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(S, D) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, D, "setState");
  }, K.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = K.prototype;
  function $(S, D, Q) {
    this.props = S, this.context = D, this.refs = V, this.updater = Q || N;
  }
  var q = $.prototype = new ee();
  q.constructor = $, X(q, K.prototype), q.isPureReactComponent = !0;
  var W = Array.isArray;
  function te() {
  }
  var M = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function ge(S, D, Q) {
    var P = Q.ref;
    return {
      $$typeof: n,
      type: S,
      key: D,
      ref: P !== void 0 ? P : null,
      props: Q
    };
  }
  function ce(S, D) {
    return ge(S.type, D, S.props);
  }
  function ve(S) {
    return typeof S == "object" && S !== null && S.$$typeof === n;
  }
  function _e(S) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Q) {
      return D[Q];
    });
  }
  var me = /\/+/g;
  function Oe(S, D) {
    return typeof S == "object" && S !== null && S.key != null ? _e("" + S.key) : D.toString(36);
  }
  function Ve(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(te, te) : (S.status = "pending", S.then(
          function(D) {
            S.status === "pending" && (S.status = "fulfilled", S.value = D);
          },
          function(D) {
            S.status === "pending" && (S.status = "rejected", S.reason = D);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function k(S, D, Q, P, de) {
    var pe = typeof S;
    (pe === "undefined" || pe === "boolean") && (S = null);
    var xe = !1;
    if (S === null) xe = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case n:
            case i:
              xe = !0;
              break;
            case _:
              return xe = S._init, k(
                xe(S._payload),
                D,
                Q,
                P,
                de
              );
          }
      }
    if (xe)
      return de = de(S), xe = P === "" ? "." + Oe(S, 0) : P, W(de) ? (Q = "", xe != null && (Q = xe.replace(me, "$&/") + "/"), k(de, D, Q, "", function(tn) {
        return tn;
      })) : de != null && (ve(de) && (de = ce(
        de,
        Q + (de.key == null || S && S.key === de.key ? "" : ("" + de.key).replace(
          me,
          "$&/"
        ) + "/") + xe
      )), D.push(de)), 1;
    xe = 0;
    var Ge = P === "" ? "." : P + ":";
    if (W(S))
      for (var De = 0; De < S.length; De++)
        P = S[De], pe = Ge + Oe(P, De), xe += k(
          P,
          D,
          Q,
          pe,
          de
        );
    else if (De = E(S), typeof De == "function")
      for (S = De.call(S), De = 0; !(P = S.next()).done; )
        P = P.value, pe = Ge + Oe(P, De++), xe += k(
          P,
          D,
          Q,
          pe,
          de
        );
    else if (pe === "object") {
      if (typeof S.then == "function")
        return k(
          Ve(S),
          D,
          Q,
          P,
          de
        );
      throw D = String(S), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xe;
  }
  function Z(S, D, Q) {
    if (S == null) return S;
    var P = [], de = 0;
    return k(S, P, "", "", function(pe) {
      return D.call(Q, pe, de++);
    }), P;
  }
  function G(S) {
    if (S._status === -1) {
      var D = S._result;
      D = D(), D.then(
        function(Q) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = Q);
        },
        function(Q) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = Q);
        }
      ), S._status === -1 && (S._status = 0, S._result = D);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var le = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, ue = {
    map: Z,
    forEach: function(S, D, Q) {
      Z(
        S,
        function() {
          D.apply(this, arguments);
        },
        Q
      );
    },
    count: function(S) {
      var D = 0;
      return Z(S, function() {
        D++;
      }), D;
    },
    toArray: function(S) {
      return Z(S, function(D) {
        return D;
      }) || [];
    },
    only: function(S) {
      if (!ve(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return fe.Activity = w, fe.Children = ue, fe.Component = K, fe.Fragment = o, fe.Profiler = s, fe.PureComponent = $, fe.StrictMode = r, fe.Suspense = v, fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, fe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return M.H.useMemoCache(S);
    }
  }, fe.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, fe.cacheSignal = function() {
    return null;
  }, fe.cloneElement = function(S, D, Q) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var P = X({}, S.props), de = S.key;
    if (D != null)
      for (pe in D.key !== void 0 && (de = "" + D.key), D)
        !J.call(D, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && D.ref === void 0 || (P[pe] = D[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) P.children = Q;
    else if (1 < pe) {
      for (var xe = Array(pe), Ge = 0; Ge < pe; Ge++)
        xe[Ge] = arguments[Ge + 2];
      P.children = xe;
    }
    return ge(S.type, de, P);
  }, fe.createContext = function(S) {
    return S = {
      $$typeof: f,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, fe.createElement = function(S, D, Q) {
    var P, de = {}, pe = null;
    if (D != null)
      for (P in D.key !== void 0 && (pe = "" + D.key), D)
        J.call(D, P) && P !== "key" && P !== "__self" && P !== "__source" && (de[P] = D[P]);
    var xe = arguments.length - 2;
    if (xe === 1) de.children = Q;
    else if (1 < xe) {
      for (var Ge = Array(xe), De = 0; De < xe; De++)
        Ge[De] = arguments[De + 2];
      de.children = Ge;
    }
    if (S && S.defaultProps)
      for (P in xe = S.defaultProps, xe)
        de[P] === void 0 && (de[P] = xe[P]);
    return ge(S, pe, de);
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(S) {
    return { $$typeof: m, render: S };
  }, fe.isValidElement = ve, fe.lazy = function(S) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: S },
      _init: G
    };
  }, fe.memo = function(S, D) {
    return {
      $$typeof: h,
      type: S,
      compare: D === void 0 ? null : D
    };
  }, fe.startTransition = function(S) {
    var D = M.T, Q = {};
    M.T = Q;
    try {
      var P = S(), de = M.S;
      de !== null && de(Q, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(te, le);
    } catch (pe) {
      le(pe);
    } finally {
      D !== null && Q.types !== null && (D.types = Q.types), M.T = D;
    }
  }, fe.unstable_useCacheRefresh = function() {
    return M.H.useCacheRefresh();
  }, fe.use = function(S) {
    return M.H.use(S);
  }, fe.useActionState = function(S, D, Q) {
    return M.H.useActionState(S, D, Q);
  }, fe.useCallback = function(S, D) {
    return M.H.useCallback(S, D);
  }, fe.useContext = function(S) {
    return M.H.useContext(S);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(S, D) {
    return M.H.useDeferredValue(S, D);
  }, fe.useEffect = function(S, D) {
    return M.H.useEffect(S, D);
  }, fe.useEffectEvent = function(S) {
    return M.H.useEffectEvent(S);
  }, fe.useId = function() {
    return M.H.useId();
  }, fe.useImperativeHandle = function(S, D, Q) {
    return M.H.useImperativeHandle(S, D, Q);
  }, fe.useInsertionEffect = function(S, D) {
    return M.H.useInsertionEffect(S, D);
  }, fe.useLayoutEffect = function(S, D) {
    return M.H.useLayoutEffect(S, D);
  }, fe.useMemo = function(S, D) {
    return M.H.useMemo(S, D);
  }, fe.useOptimistic = function(S, D) {
    return M.H.useOptimistic(S, D);
  }, fe.useReducer = function(S, D, Q) {
    return M.H.useReducer(S, D, Q);
  }, fe.useRef = function(S) {
    return M.H.useRef(S);
  }, fe.useState = function(S) {
    return M.H.useState(S);
  }, fe.useSyncExternalStore = function(S, D, Q) {
    return M.H.useSyncExternalStore(
      S,
      D,
      Q
    );
  }, fe.useTransition = function() {
    return M.H.useTransition();
  }, fe.version = "19.2.8", fe;
}
var Hp;
function wc() {
  return Hp || (Hp = 1, tc.exports = s_()), tc.exports;
}
var nc = { exports: {} }, gt = {};
var Xp;
function c_() {
  if (Xp) return gt;
  Xp = 1;
  var n = wc();
  function i(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        h += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function d(v, h, _) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: w == null ? null : "" + w,
      children: v,
      containerInfo: h,
      implementation: _
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, gt.createPortal = function(v, h) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return d(v, h, null, _);
  }, gt.flushSync = function(v) {
    var h = f.T, _ = r.p;
    try {
      if (f.T = null, r.p = 2, v) return v();
    } finally {
      f.T = h, r.p = _, r.d.f();
    }
  }, gt.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(v, h));
  }, gt.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, gt.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var _ = h.as, w = m(_, h.crossOrigin), z = typeof h.integrity == "string" ? h.integrity : void 0, E = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      _ === "style" ? r.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: w,
          integrity: z,
          fetchPriority: E
        }
      ) : _ === "script" && r.d.X(v, {
        crossOrigin: w,
        integrity: z,
        fetchPriority: E,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, gt.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var _ = m(
            h.as,
            h.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: _,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(v);
  }, gt.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var _ = h.as, w = m(_, h.crossOrigin);
      r.d.L(v, _, {
        crossOrigin: w,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, gt.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var _ = m(h.as, h.crossOrigin);
        r.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: _,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(v);
  }, gt.requestFormReset = function(v) {
    r.d.r(v);
  }, gt.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, gt.useFormState = function(v, h, _) {
    return f.H.useFormState(v, h, _);
  }, gt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, gt.version = "19.2.8", gt;
}
var qp;
function d_() {
  if (qp) return nc.exports;
  qp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), nc.exports = c_(), nc.exports;
}
var $p;
function f_() {
  if ($p) return wl;
  $p = 1;
  var n = u_(), i = wc(), o = d_();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (d(e) !== e)
      throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (l = u.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === a) return v(u), e;
          if (c === l) return v(u), t;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) a = u, l = c;
      else {
        for (var p = !1, y = u.child; y; ) {
          if (y === a) {
            p = !0, a = u, l = c;
            break;
          }
          if (y === l) {
            p = !0, l = u, a = c;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = c.child; y; ) {
            if (y === a) {
              p = !0, a = c, l = u;
              break;
            }
            if (y === l) {
              p = !0, l = c, a = u;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign, z = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), ee = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.suspense_list"), M = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), ge = /* @__PURE__ */ Symbol.for("react.activity"), ce = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var me = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case K:
        return "Profiler";
      case V:
        return "StrictMode";
      case W:
        return "Suspense";
      case te:
        return "SuspenseList";
      case ge:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case N:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case M:
          return t = e.displayName || null, t !== null ? t : Oe(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return Oe(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ve = Array.isArray, k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, le = [], ue = -1;
  function S(e) {
    return { current: e };
  }
  function D(e) {
    0 > ue || (e.current = le[ue], le[ue] = null, ue--);
  }
  function Q(e, t) {
    ue++, le[ue] = e.current, e.current = t;
  }
  var P = S(null), de = S(null), pe = S(null), xe = S(null);
  function Ge(e, t) {
    switch (Q(pe, t), Q(de, e), Q(P, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ip(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = ip(t), e = lp(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    D(P), Q(P, e);
  }
  function De() {
    D(P), D(de), D(pe);
  }
  function tn(e) {
    e.memoizedState !== null && Q(xe, e);
    var t = P.current, a = lp(t, e.type);
    t !== a && (Q(de, e), Q(P, a));
  }
  function nn(e) {
    de.current === e && (D(P), D(de)), xe.current === e && (D(xe), yl._currentValue = G);
  }
  var an, An;
  function Mt(e) {
    if (an === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        an = t && t[1] || "", An = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + an + e + An;
  }
  var ia = !1;
  function Ei(e, t) {
    if (!e || ia) return "";
    ia = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (O) {
                  var C = O;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  C = O;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                C = O;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (O) {
            if (O && C && typeof O.stack == "string")
              return [O.stack, C.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), p = c[0], y = c[1];
      if (p && y) {
        var b = p.split(`
`), j = y.split(`
`);
        for (u = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < j.length && !j[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === b.length || u === j.length)
          for (l = b.length - 1, u = j.length - 1; 1 <= l && 0 <= u && b[l] !== j[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (b[l] !== j[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || b[l] !== j[u]) {
                  var R = `
` + b[l].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ia = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Mt(a) : "";
  }
  function Nr(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Mt(e.type);
      case 16:
        return Mt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Mt("Suspense Fallback") : Mt("Suspense");
      case 19:
        return Mt("SuspenseList");
      case 0:
      case 15:
        return Ei(e.type, !1);
      case 11:
        return Ei(e.type.render, !1);
      case 1:
        return Ei(e.type, !0);
      case 31:
        return Mt("Activity");
      default:
        return "";
    }
  }
  function Ai(e) {
    try {
      var t = "", a = null;
      do
        t += Nr(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ji = Object.prototype.hasOwnProperty, Ma = n.unstable_scheduleCallback, Ca = n.unstable_cancelCallback, Dr = n.unstable_shouldYield, Zr = n.unstable_requestPaint, ot = n.unstable_now, Rr = n.unstable_getCurrentPriorityLevel, ql = n.unstable_ImmediatePriority, $l = n.unstable_UserBlockingPriority, Oa = n.unstable_NormalPriority, Ur = n.unstable_LowPriority, Ll = n.unstable_IdlePriority, Na = n.log, Yr = n.unstable_setDisableYieldValue, la = null, _t = null;
  function L(e) {
    if (typeof Na == "function" && Yr(e), _t && typeof _t.setStrictMode == "function")
      try {
        _t.setStrictMode(la, e);
      } catch {
      }
  }
  var ne = Math.clz32 ? Math.clz32 : Vv, ie = Math.log, ut = Math.LN2;
  function Vv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ie(e) / ut | 0) | 0;
  }
  var Vl = 256, Gl = 262144, Ql = 4194304;
  function oa(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kl(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~c, l !== 0 ? u = oa(l) : (p &= y, p !== 0 ? u = oa(p) : a || (a = y & ~e, a !== 0 && (u = oa(a))))) : (y = l & ~c, y !== 0 ? u = oa(y) : p !== 0 ? u = oa(p) : a || (a = l & ~e, a !== 0 && (u = oa(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Mi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Gv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yc() {
    var e = Ql;
    return Ql <<= 1, (Ql & 62914560) === 0 && (Ql = 4194304), e;
  }
  function Br(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ci(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Qv(e, t, a, l, u, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, b = e.expirationTimes, j = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var R = 31 - ne(a), B = 1 << R;
      y[R] = 0, b[R] = -1;
      var C = j[R];
      if (C !== null)
        for (j[R] = null, R = 0; R < C.length; R++) {
          var O = C[R];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~B;
    }
    l !== 0 && Bc(e, l, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Bc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - ne(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Hc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - ne(a), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), a &= ~u;
    }
  }
  function Xc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Hr(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Hr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Xr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qc() {
    var e = Z.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ap(e.type));
  }
  function $c(e, t) {
    var a = Z.p;
    try {
      return Z.p = e, t();
    } finally {
      Z.p = a;
    }
  }
  var jn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + jn, wt = "__reactProps$" + jn, Da = "__reactContainer$" + jn, qr = "__reactEvents$" + jn, Kv = "__reactListeners$" + jn, Jv = "__reactHandles$" + jn, Lc = "__reactResources$" + jn, Oi = "__reactMarker$" + jn;
  function $r(e) {
    delete e[dt], delete e[wt], delete e[qr], delete e[Kv], delete e[Jv];
  }
  function Za(e) {
    var t = e[dt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Da] || a[dt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = fp(e); e !== null; ) {
            if (a = e[dt]) return a;
            e = fp(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ra(e) {
    if (e = e[dt] || e[Da]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ni(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ua(e) {
    var t = e[Lc];
    return t || (t = e[Lc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function st(e) {
    e[Oi] = !0;
  }
  var Vc = /* @__PURE__ */ new Set(), Gc = {};
  function ra(e, t) {
    Ya(e, t), Ya(e + "Capture", t);
  }
  function Ya(e, t) {
    for (Gc[e] = t, e = 0; e < t.length; e++)
      Vc.add(t[e]);
  }
  var Wv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Qc = {}, Kc = {};
  function Pv(e) {
    return ji.call(Kc, e) ? !0 : ji.call(Qc, e) ? !1 : Wv.test(e) ? Kc[e] = !0 : (Qc[e] = !0, !1);
  }
  function Jl(e, t, a) {
    if (Pv(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Wl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function sn(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Fv(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(p) {
          a = "" + p, c.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(p) {
          a = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Lr(e) {
    if (!e._valueTracker) {
      var t = Jc(e) ? "checked" : "value";
      e._valueTracker = Fv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Wc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Jc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Pl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Iv = /[\n"\\]/g;
  function Bt(e) {
    return e.replace(
      Iv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vr(e, t, a, l, u, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Gr(e, p, Yt(t)) : a != null ? Gr(e, p, Yt(a)) : l != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Yt(y) : e.removeAttribute("name");
  }
  function Pc(e, t, a, l, u, c, p, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Lr(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Lr(e);
  }
  function Gr(e, t, a) {
    t === "number" && Pl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ba(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fc(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function Ic(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Ve(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Lr(e);
  }
  function Ha(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ey = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ed(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ey.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function td(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && a[u] !== l && ed(e, u, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && ed(e, c, t[c]);
  }
  function Qr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ty = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ny = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fl(e) {
    return ny.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function cn() {
  }
  var Kr = null;
  function Jr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, qa = null;
  function nd(e) {
    var t = Ra(e);
    if (t && (e = t.stateNode)) {
      var a = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Vr(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[wt] || null;
                if (!u) throw Error(r(90));
                Vr(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Wc(l);
          }
          break e;
        case "textarea":
          Fc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ba(e, !!a.multiple, t, !1);
      }
    }
  }
  var Wr = !1;
  function ad(e, t, a) {
    if (Wr) return e(t, a);
    Wr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Wr = !1, (Xa !== null || qa !== null) && (Ho(), Xa && (t = Xa, e = qa, qa = Xa = null, nd(t), e)))
        for (t = 0; t < e.length; t++) nd(e[t]);
    }
  }
  function Di(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[wt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pr = !1;
  if (dn)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          Pr = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      Pr = !1;
    }
  var Mn = null, Fr = null, Il = null;
  function id() {
    if (Il) return Il;
    var e, t = Fr, a = t.length, l, u = "value" in Mn ? Mn.value : Mn.textContent, c = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var p = a - e;
    for (l = 1; l <= p && t[a - l] === u[c - l]; l++) ;
    return Il = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function eo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function to() {
    return !0;
  }
  function ld() {
    return !1;
  }
  function zt(e) {
    function t(a, l, u, c, p) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? to : ld, this.isPropagationStopped = ld, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = to);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = to);
      },
      persist: function() {
      },
      isPersistent: to
    }), t;
  }
  var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, no = zt(ua), Ri = w({}, ua, { view: 0, detail: 0 }), ay = zt(Ri), Ir, eu, Ui, ao = w({}, Ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ui && (Ui && e.type === "mousemove" ? (Ir = e.screenX - Ui.screenX, eu = e.screenY - Ui.screenY) : eu = Ir = 0, Ui = e), Ir);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : eu;
    }
  }), od = zt(ao), iy = w({}, ao, { dataTransfer: 0 }), ly = zt(iy), oy = w({}, Ri, { relatedTarget: 0 }), tu = zt(oy), ry = w({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uy = zt(ry), sy = w({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), cy = zt(sy), dy = w({}, ua, { data: 0 }), rd = zt(dy), fy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, my = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, py = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = py[e]) ? !!t[e] : !1;
  }
  function nu() {
    return hy;
  }
  var vy = w({}, Ri, {
    key: function(e) {
      if (e.key) {
        var t = fy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? my[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nu,
    charCode: function(e) {
      return e.type === "keypress" ? eo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), yy = zt(vy), gy = w({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ud = zt(gy), _y = w({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nu
  }), by = zt(_y), Sy = w({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wy = zt(Sy), zy = w({}, ao, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), xy = zt(zy), ky = w({}, ua, {
    newState: 0,
    oldState: 0
  }), Ty = zt(ky), Ey = [9, 13, 27, 32], au = dn && "CompositionEvent" in window, Yi = null;
  dn && "documentMode" in document && (Yi = document.documentMode);
  var Ay = dn && "TextEvent" in window && !Yi, sd = dn && (!au || Yi && 8 < Yi && 11 >= Yi), cd = " ", dd = !1;
  function fd(e, t) {
    switch (e) {
      case "keyup":
        return Ey.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function md(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function jy(e, t) {
    switch (e) {
      case "compositionend":
        return md(t);
      case "keypress":
        return t.which !== 32 ? null : (dd = !0, cd);
      case "textInput":
        return e = t.data, e === cd && dd ? null : e;
      default:
        return null;
    }
  }
  function My(e, t) {
    if ($a)
      return e === "compositionend" || !au && fd(e, t) ? (e = id(), Il = Fr = Mn = null, $a = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return sd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cy[e.type] : t === "textarea";
  }
  function hd(e, t, a, l) {
    Xa ? qa ? qa.push(l) : qa = [l] : Xa = l, t = Qo(t, "onChange"), 0 < t.length && (a = new no(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Bi = null, Hi = null;
  function Oy(e) {
    Fm(e, 0);
  }
  function io(e) {
    var t = Ni(e);
    if (Wc(t)) return e;
  }
  function vd(e, t) {
    if (e === "change") return t;
  }
  var yd = !1;
  if (dn) {
    var iu;
    if (dn) {
      var lu = "oninput" in document;
      if (!lu) {
        var gd = document.createElement("div");
        gd.setAttribute("oninput", "return;"), lu = typeof gd.oninput == "function";
      }
      iu = lu;
    } else iu = !1;
    yd = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function _d() {
    Bi && (Bi.detachEvent("onpropertychange", bd), Hi = Bi = null);
  }
  function bd(e) {
    if (e.propertyName === "value" && io(Hi)) {
      var t = [];
      hd(
        t,
        Hi,
        e,
        Jr(e)
      ), ad(Oy, t);
    }
  }
  function Ny(e, t, a) {
    e === "focusin" ? (_d(), Bi = t, Hi = a, Bi.attachEvent("onpropertychange", bd)) : e === "focusout" && _d();
  }
  function Dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return io(Hi);
  }
  function Zy(e, t) {
    if (e === "click") return io(t);
  }
  function Ry(e, t) {
    if (e === "input" || e === "change")
      return io(t);
  }
  function Uy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : Uy;
  function Xi(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!ji.call(t, u) || !Ct(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function Sd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wd(e, t) {
    var a = Sd(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Sd(a);
    }
  }
  function zd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Pl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Pl(e.document);
    }
    return t;
  }
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Yy = dn && "documentMode" in document && 11 >= document.documentMode, La = null, ru = null, qi = null, uu = !1;
  function kd(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    uu || La == null || La !== Pl(l) || (l = La, "selectionStart" in l && ou(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), qi && Xi(qi, l) || (qi = l, l = Qo(ru, "onSelect"), 0 < l.length && (t = new no(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = La)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Va = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, su = {}, Td = {};
  dn && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete Va.animationend.animation, delete Va.animationiteration.animation, delete Va.animationstart.animation), "TransitionEvent" in window || delete Va.transitionend.transition);
  function ca(e) {
    if (su[e]) return su[e];
    if (!Va[e]) return e;
    var t = Va[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Td)
        return su[e] = t[a];
    return e;
  }
  var Ed = ca("animationend"), Ad = ca("animationiteration"), jd = ca("animationstart"), By = ca("transitionrun"), Hy = ca("transitionstart"), Xy = ca("transitioncancel"), Md = ca("transitionend"), Cd = /* @__PURE__ */ new Map(), cu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cu.push("scrollEnd");
  function Wt(e, t) {
    Cd.set(e, t), ra(t, [e]);
  }
  var lo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Ht = [], Ga = 0, du = 0;
  function oo() {
    for (var e = Ga, t = du = Ga = 0; t < e; ) {
      var a = Ht[t];
      Ht[t++] = null;
      var l = Ht[t];
      Ht[t++] = null;
      var u = Ht[t];
      Ht[t++] = null;
      var c = Ht[t];
      if (Ht[t++] = null, l !== null && u !== null) {
        var p = l.pending;
        p === null ? u.next = u : (u.next = p.next, p.next = u), l.pending = u;
      }
      c !== 0 && Od(a, u, c);
    }
  }
  function ro(e, t, a, l) {
    Ht[Ga++] = e, Ht[Ga++] = t, Ht[Ga++] = a, Ht[Ga++] = l, du |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function fu(e, t, a, l) {
    return ro(e, t, a, l), uo(e);
  }
  function da(e, t) {
    return ro(e, null, null, t), uo(e);
  }
  function Od(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - ne(a), e = c.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function uo(e) {
    if (50 < cl)
      throw cl = 0, Ss = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Qa = {};
  function qy(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new qy(e, t, a, l);
  }
  function mu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function fn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Nd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function so(e, t, a, l, u, c) {
    var p = 0;
    if (l = e, typeof e == "function") mu(e) && (p = 1);
    else if (typeof e == "string")
      p = Qg(
        e,
        a,
        P.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ge:
          return e = Ot(31, a, t, u), e.elementType = ge, e.lanes = c, e;
        case X:
          return fa(a.children, u, c, t);
        case V:
          p = 8, u |= 24;
          break;
        case K:
          return e = Ot(12, a, t, u | 2), e.elementType = K, e.lanes = c, e;
        case W:
          return e = Ot(13, a, t, u), e.elementType = W, e.lanes = c, e;
        case te:
          return e = Ot(19, a, t, u), e.elementType = te, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                p = 10;
                break e;
              case ee:
                p = 9;
                break e;
              case q:
                p = 11;
                break e;
              case M:
                p = 14;
                break e;
              case J:
                p = 16, l = null;
                break e;
            }
          p = 29, a = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ot(p, a, t, u), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function fa(e, t, a, l) {
    return e = Ot(7, e, l, t), e.lanes = a, e;
  }
  function pu(e, t, a) {
    return e = Ot(6, e, null, t), e.lanes = a, e;
  }
  function Dd(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function hu(e, t, a) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Zd = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Zd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Ai(t)
      }, Zd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ai(t)
    };
  }
  var Ka = [], Ja = 0, co = null, $i = 0, qt = [], $t = 0, Cn = null, ln = 1, on = "";
  function mn(e, t) {
    Ka[Ja++] = $i, Ka[Ja++] = co, co = e, $i = t;
  }
  function Rd(e, t, a) {
    qt[$t++] = ln, qt[$t++] = on, qt[$t++] = Cn, Cn = e;
    var l = ln;
    e = on;
    var u = 32 - ne(l) - 1;
    l &= ~(1 << u), a += 1;
    var c = 32 - ne(t) + u;
    if (30 < c) {
      var p = u - u % 5;
      c = (l & (1 << p) - 1).toString(32), l >>= p, u -= p, ln = 1 << 32 - ne(t) + u | a << u | l, on = c + e;
    } else
      ln = 1 << c | a << u | l, on = e;
  }
  function vu(e) {
    e.return !== null && (mn(e, 1), Rd(e, 1, 0));
  }
  function yu(e) {
    for (; e === co; )
      co = Ka[--Ja], Ka[Ja] = null, $i = Ka[--Ja], Ka[Ja] = null;
    for (; e === Cn; )
      Cn = qt[--$t], qt[$t] = null, on = qt[--$t], qt[$t] = null, ln = qt[--$t], qt[$t] = null;
  }
  function Ud(e, t) {
    qt[$t++] = ln, qt[$t++] = on, qt[$t++] = Cn, ln = t.id, on = t.overflow, Cn = e;
  }
  var ft = null, $e = null, ke = !1, On = null, Lt = !1, gu = Error(r(519));
  function Nn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Li(Xt(t, e)), gu;
  }
  function Yd(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[dt] = e, t[wt] = l, a) {
      case "dialog":
        Se("cancel", t), Se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fl.length; a++)
          Se(fl[a], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Se("error", t), Se("load", t);
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        Se("invalid", t), Pc(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        Se("invalid", t), Ic(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || np(t.textContent, a) ? (l.popover != null && (Se("beforetoggle", t), Se("toggle", t)), l.onScroll != null && Se("scroll", t), l.onScrollEnd != null && Se("scrollend", t), l.onClick != null && (t.onclick = cn), t = !0) : t = !1, t || Nn(e, !0);
  }
  function Bd(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          ft = ft.return;
      }
  }
  function Wa(e) {
    if (e !== ft) return !1;
    if (!ke) return Bd(e), ke = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Rs(e.type, e.memoizedProps)), a = !a), a && $e && Nn(e), Bd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      $e = dp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      $e = dp(e);
    } else
      t === 27 ? (t = $e, Qn(e.type) ? (e = Xs, Xs = null, $e = e) : $e = t) : $e = ft ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ma() {
    $e = ft = null, ke = !1;
  }
  function _u() {
    var e = On;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), On = null), e;
  }
  function Li(e) {
    On === null ? On = [e] : On.push(e);
  }
  var bu = S(null), pa = null, pn = null;
  function Dn(e, t, a) {
    Q(bu, t._currentValue), t._currentValue = a;
  }
  function hn(e) {
    e._currentValue = bu.current, D(bu);
  }
  function Su(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function wu(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var p = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = u;
          for (var b = 0; b < t.length; b++)
            if (y.context === t[b]) {
              c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), Su(
                c.return,
                a,
                e
              ), l || (p = null);
              break e;
            }
          c = y.next;
        }
      } else if (u.tag === 18) {
        if (p = u.return, p === null) throw Error(r(341));
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), Su(p, a, e), p = null;
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (u = p.sibling, u !== null) {
            u.return = p.return, p = u;
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function Pa(e, t, a, l) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(r(387));
        if (p = p.memoizedProps, p !== null) {
          var y = u.type;
          Ct(u.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (u === xe.current) {
        if (p = u.alternate, p === null) throw Error(r(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(yl) : e = [yl]);
      }
      u = u.return;
    }
    e !== null && wu(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function fo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ct(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ha(e) {
    pa = e, pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return Hd(pa, e);
  }
  function mo(e, t) {
    return pa === null && ha(e), Hd(e, t);
  }
  function Hd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, pn === null) {
      if (e === null) throw Error(r(308));
      pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else pn = pn.next = t;
    return a;
  }
  var $y = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Ly = n.unstable_scheduleCallback, Vy = n.unstable_NormalPriority, nt = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zu() {
    return {
      controller: new $y(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vi(e) {
    e.refCount--, e.refCount === 0 && Ly(Vy, function() {
      e.controller.abort();
    });
  }
  var Gi = null, xu = 0, Fa = 0, Ia = null;
  function Gy(e, t) {
    if (Gi === null) {
      var a = Gi = [];
      xu = 0, Fa = Es(), Ia = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return xu++, t.then(Xd, Xd), t;
  }
  function Xd() {
    if (--xu === 0 && Gi !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var e = Gi;
      Gi = null, Fa = 0, Ia = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Qy(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), l;
  }
  var qd = k.S;
  k.S = function(e, t) {
    Tm = ot(), typeof t == "object" && t !== null && typeof t.then == "function" && Gy(e, t), qd !== null && qd(e, t);
  };
  var va = S(null);
  function ku() {
    var e = va.current;
    return e !== null ? e : qe.pooledCache;
  }
  function po(e, t) {
    t === null ? Q(va, va.current) : Q(va, t.pool);
  }
  function $d() {
    var e = ku();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var ei = Error(r(460)), Tu = Error(r(474)), ho = Error(r(542)), vo = { then: function() {
  } };
  function Ld(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Vd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(cn, cn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Qd(e), e;
      default:
        if (typeof t.status == "string") t.then(cn, cn);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Qd(e), e;
        }
        throw ga = t, ei;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, ei) : a;
    }
  }
  var ga = null;
  function Gd() {
    if (ga === null) throw Error(r(459));
    var e = ga;
    return ga = null, e;
  }
  function Qd(e) {
    if (e === ei || e === ho)
      throw Error(r(483));
  }
  var ti = null, Qi = 0;
  function yo(e) {
    var t = Qi;
    return Qi += 1, ti === null && (ti = []), Vd(ti, e, t);
  }
  function Ki(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function go(e, t) {
    throw t.$$typeof === z ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Kd(e) {
    function t(T, x) {
      if (e) {
        var A = T.deletions;
        A === null ? (T.deletions = [x], T.flags |= 16) : A.push(x);
      }
    }
    function a(T, x) {
      if (!e) return null;
      for (; x !== null; )
        t(T, x), x = x.sibling;
      return null;
    }
    function l(T) {
      for (var x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function u(T, x) {
      return T = fn(T, x), T.index = 0, T.sibling = null, T;
    }
    function c(T, x, A) {
      return T.index = A, e ? (A = T.alternate, A !== null ? (A = A.index, A < x ? (T.flags |= 67108866, x) : A) : (T.flags |= 67108866, x)) : (T.flags |= 1048576, x);
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, x, A, U) {
      return x === null || x.tag !== 6 ? (x = pu(A, T.mode, U), x.return = T, x) : (x = u(x, A), x.return = T, x);
    }
    function b(T, x, A, U) {
      var oe = A.type;
      return oe === X ? R(
        T,
        x,
        A.props.children,
        U,
        A.key
      ) : x !== null && (x.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === J && ya(oe) === x.type) ? (x = u(x, A.props), Ki(x, A), x.return = T, x) : (x = so(
        A.type,
        A.key,
        A.props,
        null,
        T.mode,
        U
      ), Ki(x, A), x.return = T, x);
    }
    function j(T, x, A, U) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== A.containerInfo || x.stateNode.implementation !== A.implementation ? (x = hu(A, T.mode, U), x.return = T, x) : (x = u(x, A.children || []), x.return = T, x);
    }
    function R(T, x, A, U, oe) {
      return x === null || x.tag !== 7 ? (x = fa(
        A,
        T.mode,
        U,
        oe
      ), x.return = T, x) : (x = u(x, A), x.return = T, x);
    }
    function B(T, x, A) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = pu(
          "" + x,
          T.mode,
          A
        ), x.return = T, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return A = so(
              x.type,
              x.key,
              x.props,
              null,
              T.mode,
              A
            ), Ki(A, x), A.return = T, A;
          case N:
            return x = hu(
              x,
              T.mode,
              A
            ), x.return = T, x;
          case J:
            return x = ya(x), B(T, x, A);
        }
        if (Ve(x) || _e(x))
          return x = fa(
            x,
            T.mode,
            A,
            null
          ), x.return = T, x;
        if (typeof x.then == "function")
          return B(T, yo(x), A);
        if (x.$$typeof === $)
          return B(
            T,
            mo(T, x),
            A
          );
        go(T, x);
      }
      return null;
    }
    function C(T, x, A, U) {
      var oe = x !== null ? x.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return oe !== null ? null : y(T, x, "" + A, U);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return A.key === oe ? b(T, x, A, U) : null;
          case N:
            return A.key === oe ? j(T, x, A, U) : null;
          case J:
            return A = ya(A), C(T, x, A, U);
        }
        if (Ve(A) || _e(A))
          return oe !== null ? null : R(T, x, A, U, null);
        if (typeof A.then == "function")
          return C(
            T,
            x,
            yo(A),
            U
          );
        if (A.$$typeof === $)
          return C(
            T,
            x,
            mo(T, A),
            U
          );
        go(T, A);
      }
      return null;
    }
    function O(T, x, A, U, oe) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return T = T.get(A) || null, y(x, T, "" + U, oe);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case E:
            return T = T.get(
              U.key === null ? A : U.key
            ) || null, b(x, T, U, oe);
          case N:
            return T = T.get(
              U.key === null ? A : U.key
            ) || null, j(x, T, U, oe);
          case J:
            return U = ya(U), O(
              T,
              x,
              A,
              U,
              oe
            );
        }
        if (Ve(U) || _e(U))
          return T = T.get(A) || null, R(x, T, U, oe, null);
        if (typeof U.then == "function")
          return O(
            T,
            x,
            A,
            yo(U),
            oe
          );
        if (U.$$typeof === $)
          return O(
            T,
            x,
            A,
            mo(x, U),
            oe
          );
        go(x, U);
      }
      return null;
    }
    function I(T, x, A, U) {
      for (var oe = null, Ae = null, ae = x, ye = x = 0, ze = null; ae !== null && ye < A.length; ye++) {
        ae.index > ye ? (ze = ae, ae = null) : ze = ae.sibling;
        var je = C(
          T,
          ae,
          A[ye],
          U
        );
        if (je === null) {
          ae === null && (ae = ze);
          break;
        }
        e && ae && je.alternate === null && t(T, ae), x = c(je, x, ye), Ae === null ? oe = je : Ae.sibling = je, Ae = je, ae = ze;
      }
      if (ye === A.length)
        return a(T, ae), ke && mn(T, ye), oe;
      if (ae === null) {
        for (; ye < A.length; ye++)
          ae = B(T, A[ye], U), ae !== null && (x = c(
            ae,
            x,
            ye
          ), Ae === null ? oe = ae : Ae.sibling = ae, Ae = ae);
        return ke && mn(T, ye), oe;
      }
      for (ae = l(ae); ye < A.length; ye++)
        ze = O(
          ae,
          T,
          ye,
          A[ye],
          U
        ), ze !== null && (e && ze.alternate !== null && ae.delete(
          ze.key === null ? ye : ze.key
        ), x = c(
          ze,
          x,
          ye
        ), Ae === null ? oe = ze : Ae.sibling = ze, Ae = ze);
      return e && ae.forEach(function(Fn) {
        return t(T, Fn);
      }), ke && mn(T, ye), oe;
    }
    function se(T, x, A, U) {
      if (A == null) throw Error(r(151));
      for (var oe = null, Ae = null, ae = x, ye = x = 0, ze = null, je = A.next(); ae !== null && !je.done; ye++, je = A.next()) {
        ae.index > ye ? (ze = ae, ae = null) : ze = ae.sibling;
        var Fn = C(T, ae, je.value, U);
        if (Fn === null) {
          ae === null && (ae = ze);
          break;
        }
        e && ae && Fn.alternate === null && t(T, ae), x = c(Fn, x, ye), Ae === null ? oe = Fn : Ae.sibling = Fn, Ae = Fn, ae = ze;
      }
      if (je.done)
        return a(T, ae), ke && mn(T, ye), oe;
      if (ae === null) {
        for (; !je.done; ye++, je = A.next())
          je = B(T, je.value, U), je !== null && (x = c(je, x, ye), Ae === null ? oe = je : Ae.sibling = je, Ae = je);
        return ke && mn(T, ye), oe;
      }
      for (ae = l(ae); !je.done; ye++, je = A.next())
        je = O(ae, T, ye, je.value, U), je !== null && (e && je.alternate !== null && ae.delete(je.key === null ? ye : je.key), x = c(je, x, ye), Ae === null ? oe = je : Ae.sibling = je, Ae = je);
      return e && ae.forEach(function(i_) {
        return t(T, i_);
      }), ke && mn(T, ye), oe;
    }
    function He(T, x, A, U) {
      if (typeof A == "object" && A !== null && A.type === X && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            e: {
              for (var oe = A.key; x !== null; ) {
                if (x.key === oe) {
                  if (oe = A.type, oe === X) {
                    if (x.tag === 7) {
                      a(
                        T,
                        x.sibling
                      ), U = u(
                        x,
                        A.props.children
                      ), U.return = T, T = U;
                      break e;
                    }
                  } else if (x.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === J && ya(oe) === x.type) {
                    a(
                      T,
                      x.sibling
                    ), U = u(x, A.props), Ki(U, A), U.return = T, T = U;
                    break e;
                  }
                  a(T, x);
                  break;
                } else t(T, x);
                x = x.sibling;
              }
              A.type === X ? (U = fa(
                A.props.children,
                T.mode,
                U,
                A.key
              ), U.return = T, T = U) : (U = so(
                A.type,
                A.key,
                A.props,
                null,
                T.mode,
                U
              ), Ki(U, A), U.return = T, T = U);
            }
            return p(T);
          case N:
            e: {
              for (oe = A.key; x !== null; ) {
                if (x.key === oe)
                  if (x.tag === 4 && x.stateNode.containerInfo === A.containerInfo && x.stateNode.implementation === A.implementation) {
                    a(
                      T,
                      x.sibling
                    ), U = u(x, A.children || []), U.return = T, T = U;
                    break e;
                  } else {
                    a(T, x);
                    break;
                  }
                else t(T, x);
                x = x.sibling;
              }
              U = hu(A, T.mode, U), U.return = T, T = U;
            }
            return p(T);
          case J:
            return A = ya(A), He(
              T,
              x,
              A,
              U
            );
        }
        if (Ve(A))
          return I(
            T,
            x,
            A,
            U
          );
        if (_e(A)) {
          if (oe = _e(A), typeof oe != "function") throw Error(r(150));
          return A = oe.call(A), se(
            T,
            x,
            A,
            U
          );
        }
        if (typeof A.then == "function")
          return He(
            T,
            x,
            yo(A),
            U
          );
        if (A.$$typeof === $)
          return He(
            T,
            x,
            mo(T, A),
            U
          );
        go(T, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, x !== null && x.tag === 6 ? (a(T, x.sibling), U = u(x, A), U.return = T, T = U) : (a(T, x), U = pu(A, T.mode, U), U.return = T, T = U), p(T)) : a(T, x);
    }
    return function(T, x, A, U) {
      try {
        Qi = 0;
        var oe = He(
          T,
          x,
          A,
          U
        );
        return ti = null, oe;
      } catch (ae) {
        if (ae === ei || ae === ho) throw ae;
        var Ae = Ot(29, ae, null, T.mode);
        return Ae.lanes = U, Ae.return = T, Ae;
      }
    };
  }
  var _a = Kd(!0), Jd = Kd(!1), Zn = !1;
  function Eu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Au(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Rn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ne & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = uo(e), Od(e, null, a), t;
    }
    return ro(e, l, t, a), uo(e);
  }
  function Ji(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Hc(e, a);
    }
  }
  function ju(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var u = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = p : c = c.next = p, a = a.next;
        } while (a !== null);
        c === null ? u = c = t : c = c.next = t;
      } else u = c = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Mu = !1;
  function Wi() {
    if (Mu) {
      var e = Ia;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, a, l) {
    Mu = !1;
    var u = e.updateQueue;
    Zn = !1;
    var c = u.firstBaseUpdate, p = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var b = y, j = b.next;
      b.next = null, p === null ? c = j : p.next = j, p = b;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, y = R.lastBaseUpdate, y !== p && (y === null ? R.firstBaseUpdate = j : y.next = j, R.lastBaseUpdate = b));
    }
    if (c !== null) {
      var B = u.baseState;
      p = 0, R = j = b = null, y = c;
      do {
        var C = y.lane & -536870913, O = C !== y.lane;
        if (O ? (we & C) === C : (l & C) === C) {
          C !== 0 && C === Fa && (Mu = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var I = e, se = y;
            C = t;
            var He = a;
            switch (se.tag) {
              case 1:
                if (I = se.payload, typeof I == "function") {
                  B = I.call(He, B, C);
                  break e;
                }
                B = I;
                break e;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = se.payload, C = typeof I == "function" ? I.call(He, B, C) : I, C == null) break e;
                B = w({}, B, C);
                break e;
              case 2:
                Zn = !0;
            }
          }
          C = y.callback, C !== null && (e.flags |= 64, O && (e.flags |= 8192), O = u.callbacks, O === null ? u.callbacks = [C] : O.push(C));
        } else
          O = {
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, R === null ? (j = R = O, b = B) : R = R.next = O, p |= C;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          O = y, y = O.next, O.next = null, u.lastBaseUpdate = O, u.shared.pending = null;
        }
      } while (!0);
      R === null && (b = B), u.baseState = b, u.firstBaseUpdate = j, u.lastBaseUpdate = R, c === null && (u.shared.lanes = 0), qn |= p, e.lanes = p, e.memoizedState = B;
    }
  }
  function Wd(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Pd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Wd(a[e], t);
  }
  var ni = S(null), _o = S(0);
  function Fd(e, t) {
    e = xn, Q(_o, e), Q(ni, t), xn = e | t.baseLanes;
  }
  function Cu() {
    Q(_o, xn), Q(ni, ni.current);
  }
  function Ou() {
    xn = _o.current, D(ni), D(_o);
  }
  var Nt = S(null), Vt = null;
  function Yn(e) {
    var t = e.alternate;
    Q(et, et.current & 1), Q(Nt, e), Vt === null && (t === null || ni.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function Nu(e) {
    Q(et, et.current), Q(Nt, e), Vt === null && (Vt = e);
  }
  function Id(e) {
    e.tag === 22 ? (Q(et, et.current), Q(Nt, e), Vt === null && (Vt = e)) : Bn();
  }
  function Bn() {
    Q(et, et.current), Q(Nt, Nt.current);
  }
  function Dt(e) {
    D(Nt), Vt === e && (Vt = null), D(et);
  }
  var et = S(0);
  function bo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Bs(a) || Hs(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var vn = 0, he = null, Ye = null, at = null, So = !1, ai = !1, ba = !1, wo = 0, Fi = 0, ii = null, Ky = 0;
  function We() {
    throw Error(r(321));
  }
  function Du(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ct(e[a], t[a])) return !1;
    return !0;
  }
  function Zu(e, t, a, l, u, c) {
    return vn = c, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? Uf : Wu, ba = !1, c = a(l, u), ba = !1, ai && (c = tf(
      t,
      a,
      l,
      u
    )), ef(e), c;
  }
  function ef(e) {
    k.H = tl;
    var t = Ye !== null && Ye.next !== null;
    if (vn = 0, at = Ye = he = null, So = !1, Fi = 0, ii = null, t) throw Error(r(300));
    e === null || it || (e = e.dependencies, e !== null && fo(e) && (it = !0));
  }
  function tf(e, t, a, l) {
    he = e;
    var u = 0;
    do {
      if (ai && (ii = null), Fi = 0, ai = !1, 25 <= u) throw Error(r(301));
      if (u += 1, at = Ye = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      k.H = Yf, c = t(a, l);
    } while (ai);
    return c;
  }
  function Jy() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function Ru() {
    var e = wo !== 0;
    return wo = 0, e;
  }
  function Uu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Yu(e) {
    if (So) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      So = !1;
    }
    vn = 0, at = Ye = he = null, ai = !1, Fi = wo = 0, ii = null;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? he.memoizedState = at = e : at = at.next = e, at;
  }
  function tt() {
    if (Ye === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = at === null ? he.memoizedState : at.next;
    if (t !== null)
      at = t, Ye = e;
    else {
      if (e === null)
        throw he.alternate === null ? Error(r(467)) : Error(r(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, at === null ? he.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function zo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ii(e) {
    var t = Fi;
    return Fi += 1, ii === null && (ii = []), e = Vd(ii, e, t), t = he, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? Uf : Wu), e;
  }
  function xo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ii(e);
      if (e.$$typeof === $) return mt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Bu(e) {
    var t = null, a = he.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = he.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = zo(), he.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = ce;
    return t.index++, a;
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ko(e) {
    var t = tt();
    return Hu(t, Ye, e);
  }
  function Hu(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (u !== null) {
        var p = u.next;
        u.next = c.next, c.next = p;
      }
      t.baseQueue = u = c, l.pending = null;
    }
    if (c = e.baseState, u === null) e.memoizedState = c;
    else {
      t = u.next;
      var y = p = null, b = null, j = t, R = !1;
      do {
        var B = j.lane & -536870913;
        if (B !== j.lane ? (we & B) === B : (vn & B) === B) {
          var C = j.revertLane;
          if (C === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), B === Fa && (R = !0);
          else if ((vn & C) === C) {
            j = j.next, C === Fa && (R = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, b === null ? (y = b = B, p = c) : b = b.next = B, he.lanes |= C, qn |= C;
          B = j.action, ba && a(c, B), c = j.hasEagerState ? j.eagerState : a(c, B);
        } else
          C = {
            lane: B,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, b === null ? (y = b = C, p = c) : b = b.next = C, he.lanes |= B, qn |= B;
        j = j.next;
      } while (j !== null && j !== t);
      if (b === null ? p = c : b.next = y, !Ct(c, e.memoizedState) && (it = !0, R && (a = Ia, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = b, l.lastRenderedState = c;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Xu(e) {
    var t = tt(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, u = a.pending, c = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var p = u = u.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== u);
      Ct(c, t.memoizedState) || (it = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, l];
  }
  function nf(e, t, a) {
    var l = he, u = tt(), c = ke;
    if (c) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var p = !Ct(
      (Ye || u).memoizedState,
      a
    );
    if (p && (u.memoizedState = a, it = !0), u = u.queue, Lu(of.bind(null, l, u, e), [
      e
    ]), u.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, li(
        9,
        { destroy: void 0 },
        lf.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), qe === null) throw Error(r(349));
      c || (vn & 127) !== 0 || af(l, t, a);
    }
    return a;
  }
  function af(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = he.updateQueue, t === null ? (t = zo(), he.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function lf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, rf(t) && uf(e);
  }
  function of(e, t, a) {
    return a(function() {
      rf(t) && uf(e);
    });
  }
  function rf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ct(e, a);
    } catch {
      return !0;
    }
  }
  function uf(e) {
    var t = da(e, 2);
    t !== null && At(t, e, 2);
  }
  function qu(e) {
    var t = bt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        L(!0);
        try {
          a();
        } finally {
          L(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yn,
      lastRenderedState: e
    }, t;
  }
  function sf(e, t, a, l) {
    return e.baseState = a, Hu(
      e,
      Ye,
      typeof l == "function" ? l : yn
    );
  }
  function Wy(e, t, a, l, u) {
    if (Ao(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          c.listeners.push(p);
        }
      };
      k.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, cf(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function cf(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var c = k.T, p = {};
      k.T = p;
      try {
        var y = a(u, l), b = k.S;
        b !== null && b(p, y), df(e, t, y);
      } catch (j) {
        $u(e, t, j);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), k.T = c;
      }
    } else
      try {
        c = a(u, l), df(e, t, c);
      } catch (j) {
        $u(e, t, j);
      }
  }
  function df(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        ff(e, t, l);
      },
      function(l) {
        return $u(e, t, l);
      }
    ) : ff(e, t, a);
  }
  function ff(e, t, a) {
    t.status = "fulfilled", t.value = a, mf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, cf(e, a)));
  }
  function $u(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, mf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function mf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function pf(e, t) {
    return t;
  }
  function hf(e, t) {
    if (ke) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var l = he;
          if (ke) {
            if ($e) {
              t: {
                for (var u = $e, c = Lt; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break t;
                  }
                  if (u = Gt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                $e = Gt(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Nn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = bt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pf,
      lastRenderedState: t
    }, a.queue = l, a = Df.bind(
      null,
      he,
      l
    ), l.dispatch = a, l = qu(!1), c = Ju.bind(
      null,
      he,
      !1,
      l.queue
    ), l = bt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = Wy.bind(
      null,
      he,
      u,
      c,
      a
    ), u.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function vf(e) {
    var t = tt();
    return yf(t, Ye, e);
  }
  function yf(e, t, a) {
    if (t = Hu(
      e,
      t,
      pf
    )[0], e = ko(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ii(t);
      } catch (p) {
        throw p === ei ? ho : p;
      }
    else l = t;
    t = tt();
    var u = t.queue, c = u.dispatch;
    return a !== t.memoizedState && (he.flags |= 2048, li(
      9,
      { destroy: void 0 },
      Py.bind(null, u, a),
      null
    )), [l, c, e];
  }
  function Py(e, t) {
    e.action = t;
  }
  function gf(e) {
    var t = tt(), a = Ye;
    if (a !== null)
      return yf(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function li(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = he.updateQueue, t === null && (t = zo(), he.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function _f() {
    return tt().memoizedState;
  }
  function To(e, t, a, l) {
    var u = bt();
    he.flags |= e, u.memoizedState = li(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Eo(e, t, a, l) {
    var u = tt();
    l = l === void 0 ? null : l;
    var c = u.memoizedState.inst;
    Ye !== null && l !== null && Du(l, Ye.memoizedState.deps) ? u.memoizedState = li(t, c, a, l) : (he.flags |= e, u.memoizedState = li(
      1 | t,
      c,
      a,
      l
    ));
  }
  function bf(e, t) {
    To(8390656, 8, e, t);
  }
  function Lu(e, t) {
    Eo(2048, 8, e, t);
  }
  function Fy(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null)
      t = zo(), he.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Sf(e) {
    var t = tt().memoizedState;
    return Fy({ ref: t, nextImpl: e }), function() {
      if ((Ne & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function wf(e, t) {
    return Eo(4, 2, e, t);
  }
  function zf(e, t) {
    return Eo(4, 4, e, t);
  }
  function xf(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function kf(e, t, a) {
    a = a != null ? a.concat([e]) : null, Eo(4, 4, xf.bind(null, t, e), a);
  }
  function Vu() {
  }
  function Tf(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Du(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Ef(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Du(t, l[1]))
      return l[0];
    if (l = e(), ba) {
      L(!0);
      try {
        e();
      } finally {
        L(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Gu(e, t, a) {
    return a === void 0 || (vn & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Am(), he.lanes |= e, qn |= e, a);
  }
  function Af(e, t, a, l) {
    return Ct(a, t) ? a : ni.current !== null ? (e = Gu(e, a, l), Ct(e, t) || (it = !0), e) : (vn & 42) === 0 || (vn & 1073741824) !== 0 && (we & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = Am(), he.lanes |= e, qn |= e, t);
  }
  function jf(e, t, a, l, u) {
    var c = Z.p;
    Z.p = c !== 0 && 8 > c ? c : 8;
    var p = k.T, y = {};
    k.T = y, Ju(e, !1, t, a);
    try {
      var b = u(), j = k.S;
      if (j !== null && j(y, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var R = Qy(
          b,
          l
        );
        el(
          e,
          t,
          R,
          Ut(e)
        );
      } else
        el(
          e,
          t,
          l,
          Ut(e)
        );
    } catch (B) {
      el(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Ut()
      );
    } finally {
      Z.p = c, p !== null && y.types !== null && (p.types = y.types), k.T = p;
    }
  }
  function Iy() {
  }
  function Qu(e, t, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Mf(e).queue;
    jf(
      e,
      u,
      t,
      G,
      a === null ? Iy : function() {
        return Cf(e), a(l);
      }
    );
  }
  function Mf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: G
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Cf(e) {
    var t = Mf(e);
    t.next === null && (t = e.alternate.memoizedState), el(
      e,
      t.next.queue,
      {},
      Ut()
    );
  }
  function Ku() {
    return mt(yl);
  }
  function Of() {
    return tt().memoizedState;
  }
  function Nf() {
    return tt().memoizedState;
  }
  function eg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ut();
          e = Rn(a);
          var l = Un(t, e, a);
          l !== null && (At(l, t, a), Ji(l, t, a)), t = { cache: zu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function tg(e, t, a) {
    var l = Ut();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ao(e) ? Zf(t, a) : (a = fu(e, t, a, l), a !== null && (At(a, e, l), Rf(a, t, l)));
  }
  function Df(e, t, a) {
    var l = Ut();
    el(e, t, a, l);
  }
  function el(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ao(e)) Zf(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (u.hasEagerState = !0, u.eagerState = y, Ct(y, p))
            return ro(e, t, u, 0), qe === null && oo(), !1;
        } catch {
        }
      if (a = fu(e, t, u, l), a !== null)
        return At(a, e, l), Rf(a, t, l), !0;
    }
    return !1;
  }
  function Ju(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Es(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ao(e)) {
      if (t) throw Error(r(479));
    } else
      t = fu(
        e,
        a,
        l,
        2
      ), t !== null && At(t, e, 2);
  }
  function Ao(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function Zf(e, t) {
    ai = So = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Rf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Hc(e, a);
    }
  }
  var tl = {
    readContext: mt,
    use: xo,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  };
  tl.useEffectEvent = We;
  var Uf = {
    readContext: mt,
    use: xo,
    useCallback: function(e, t) {
      return bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: bf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, To(
        4194308,
        4,
        xf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return To(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      To(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = bt();
      t = t === void 0 ? null : t;
      var l = e();
      if (ba) {
        L(!0);
        try {
          e();
        } finally {
          L(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = bt();
      if (a !== void 0) {
        var u = a(t);
        if (ba) {
          L(!0);
          try {
            a(t);
          } finally {
            L(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = tg.bind(
        null,
        he,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = bt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = qu(e);
      var t = e.queue, a = Df.bind(null, he, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = bt();
      return Gu(a, e, t);
    },
    useTransition: function() {
      var e = qu(!1);
      return e = jf.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), bt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = he, u = bt();
      if (ke) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), qe === null)
          throw Error(r(349));
        (we & 127) !== 0 || af(l, t, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return u.queue = c, bf(of.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, li(
        9,
        { destroy: void 0 },
        lf.bind(
          null,
          l,
          c,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = bt(), t = qe.identifierPrefix;
      if (ke) {
        var a = on, l = ln;
        a = (l & ~(1 << 32 - ne(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = wo++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Ky++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ku,
    useFormState: hf,
    useActionState: hf,
    useOptimistic: function(e) {
      var t = bt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ju.bind(
        null,
        he,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Bu,
    useCacheRefresh: function() {
      return bt().memoizedState = eg.bind(
        null,
        he
      );
    },
    useEffectEvent: function(e) {
      var t = bt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ne & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Wu = {
    readContext: mt,
    use: xo,
    useCallback: Tf,
    useContext: mt,
    useEffect: Lu,
    useImperativeHandle: kf,
    useInsertionEffect: wf,
    useLayoutEffect: zf,
    useMemo: Ef,
    useReducer: ko,
    useRef: _f,
    useState: function() {
      return ko(yn);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Af(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ko(yn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    },
    useSyncExternalStore: nf,
    useId: Of,
    useHostTransitionStatus: Ku,
    useFormState: vf,
    useActionState: vf,
    useOptimistic: function(e, t) {
      var a = tt();
      return sf(a, Ye, e, t);
    },
    useMemoCache: Bu,
    useCacheRefresh: Nf
  };
  Wu.useEffectEvent = Sf;
  var Yf = {
    readContext: mt,
    use: xo,
    useCallback: Tf,
    useContext: mt,
    useEffect: Lu,
    useImperativeHandle: kf,
    useInsertionEffect: wf,
    useLayoutEffect: zf,
    useMemo: Ef,
    useReducer: Xu,
    useRef: _f,
    useState: function() {
      return Xu(yn);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Ye === null ? Gu(a, e, t) : Af(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(yn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    },
    useSyncExternalStore: nf,
    useId: Of,
    useHostTransitionStatus: Ku,
    useFormState: gf,
    useActionState: gf,
    useOptimistic: function(e, t) {
      var a = tt();
      return Ye !== null ? sf(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Bu,
    useCacheRefresh: Nf
  };
  Yf.useEffectEvent = Sf;
  function Pu(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : w({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Fu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ut(), u = Rn(l);
      u.payload = t, a != null && (u.callback = a), t = Un(e, u, l), t !== null && (At(t, e, l), Ji(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Ut(), u = Rn(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Un(e, u, l), t !== null && (At(t, e, l), Ji(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Ut(), l = Rn(a);
      l.tag = 2, t != null && (l.callback = t), t = Un(e, l, a), t !== null && (At(t, e, a), Ji(t, e, a));
    }
  };
  function Bf(e, t, a, l, u, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, l) || !Xi(u, c) : !0;
  }
  function Hf(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Fu.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = w({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function Xf(e) {
    lo(e);
  }
  function qf(e) {
    console.error(e);
  }
  function $f(e) {
    lo(e);
  }
  function jo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Lf(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Iu(e, t, a) {
    return a = Rn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      jo(e, t);
    }, a;
  }
  function Vf(e) {
    return e = Rn(e), e.tag = 3, e;
  }
  function Gf(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = l.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        Lf(t, a, l);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Lf(t, a, l), typeof u != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function ng(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Pa(
        t,
        a,
        u,
        !0
      ), a = Nt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? Xo() : a.alternate === null && Pe === 0 && (Pe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === vo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), xs(e, l, u)), !1;
          case 22:
            return a.flags |= 65536, l === vo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), xs(e, l, u)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return xs(e, l, u), Xo(), !1;
    }
    if (ke)
      return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== gu && (e = Error(r(422), { cause: l }), Li(Xt(e, a)))) : (l !== gu && (t = Error(r(423), {
        cause: l
      }), Li(
        Xt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Xt(l, a), u = Iu(
        e.stateNode,
        l,
        u
      ), ju(e, u), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(r(520), { cause: l });
    if (c = Xt(c, a), sl === null ? sl = [c] : sl.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    l = Xt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Iu(a.stateNode, l, e), ju(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && ($n === null || !$n.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Vf(u), Gf(
              u,
              e,
              a,
              l
            ), ju(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var es = Error(r(461)), it = !1;
  function pt(e, t, a, l) {
    t.child = e === null ? Jd(t, null, a, l) : _a(
      t,
      e.child,
      a,
      l
    );
  }
  function Qf(e, t, a, l, u) {
    a = a.render;
    var c = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var y in l)
        y !== "ref" && (p[y] = l[y]);
    } else p = l;
    return ha(t), l = Zu(
      e,
      t,
      a,
      p,
      c,
      u
    ), y = Ru(), e !== null && !it ? (Uu(e, t, u), gn(e, t, u)) : (ke && y && vu(t), t.flags |= 1, pt(e, t, l, u), t.child);
  }
  function Kf(e, t, a, l, u) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !mu(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Jf(
        e,
        t,
        c,
        l,
        u
      )) : (e = so(
        a.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !us(e, u)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(p, l) && e.ref === t.ref)
        return gn(e, t, u);
    }
    return t.flags |= 1, e = fn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jf(e, t, a, l, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Xi(c, l) && e.ref === t.ref)
        if (it = !1, t.pendingProps = l = c, us(e, u))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, gn(e, t, u);
    }
    return ts(
      e,
      t,
      a,
      l,
      u
    );
  }
  function Wf(e, t, a, l) {
    var u = l.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~c;
        } else l = 0, t.child = null;
        return Pf(
          e,
          t,
          c,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && po(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Fd(t, c) : Cu(), Id(t);
      else
        return l = t.lanes = 536870912, Pf(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          l
        );
    } else
      c !== null ? (po(t, c.cachePool), Fd(t, c), Bn(), t.memoizedState = null) : (e !== null && po(t, null), Cu(), Bn());
    return pt(e, t, u, a), t.child;
  }
  function nl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Pf(e, t, a, l, u) {
    var c = ku();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && po(t, null), Cu(), Id(t), e !== null && Pa(e, t, l, !0), t.childLanes = u, null;
  }
  function Mo(e, t) {
    return t = Oo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ff(e, t, a) {
    return _a(t, e.child, null, a), e = Mo(t, t.pendingProps), e.flags |= 2, Dt(t), t.memoizedState = null, e;
  }
  function ag(e, t, a) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ke) {
        if (l.mode === "hidden")
          return e = Mo(t, l), t.lanes = 536870912, nl(null, e);
        if (Nu(t), (e = $e) ? (e = cp(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cn !== null ? { id: ln, overflow: on } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Dd(e), a.return = t, t.child = a, ft = t, $e = null)) : e = null, e === null) throw Nn(t);
        return t.lanes = 536870912, null;
      }
      return Mo(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (Nu(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ff(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (it || Pa(e, t, a, !1), u = (a & e.childLanes) !== 0, it || u) {
        if (l = qe, l !== null && (p = Xc(l, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, da(e, p), At(l, e, p), es;
        Xo(), t = Ff(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, $e = Gt(p.nextSibling), ft = t, ke = !0, On = null, Lt = !1, e !== null && Ud(t, e), t = Mo(t, l), t.flags |= 4096;
      return t;
    }
    return e = fn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Co(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ts(e, t, a, l, u) {
    return ha(t), a = Zu(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = Ru(), e !== null && !it ? (Uu(e, t, u), gn(e, t, u)) : (ke && l && vu(t), t.flags |= 1, pt(e, t, a, u), t.child);
  }
  function If(e, t, a, l, u, c) {
    return ha(t), t.updateQueue = null, a = tf(
      t,
      l,
      a,
      u
    ), ef(e), l = Ru(), e !== null && !it ? (Uu(e, t, c), gn(e, t, c)) : (ke && l && vu(t), t.flags |= 1, pt(e, t, a, c), t.child);
  }
  function em(e, t, a, l, u) {
    if (ha(t), t.stateNode === null) {
      var c = Qa, p = a.contextType;
      typeof p == "object" && p !== null && (c = mt(p)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Fu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, Eu(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? mt(p) : Qa, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Pu(
        t,
        a,
        p,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Fu.enqueueReplaceState(c, c.state, null), Pi(t, l, c, u), Wi(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, b = Sa(a, y);
      c.props = b;
      var j = c.context, R = a.contextType;
      p = Qa, typeof R == "object" && R !== null && (p = mt(R));
      var B = a.getDerivedStateFromProps;
      R = typeof B == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, R || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || j !== p) && Hf(
        t,
        c,
        l,
        p
      ), Zn = !1;
      var C = t.memoizedState;
      c.state = C, Pi(t, l, c, u), Wi(), j = t.memoizedState, y || C !== j || Zn ? (typeof B == "function" && (Pu(
        t,
        a,
        B,
        l
      ), j = t.memoizedState), (b = Zn || Bf(
        t,
        a,
        b,
        l,
        C,
        j,
        p
      )) ? (R || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = j), c.props = l, c.state = j, c.context = p, l = b) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, Au(e, t), p = t.memoizedProps, R = Sa(a, p), c.props = R, B = t.pendingProps, C = c.context, j = a.contextType, b = Qa, typeof j == "object" && j !== null && (b = mt(j)), y = a.getDerivedStateFromProps, (j = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== B || C !== b) && Hf(
        t,
        c,
        l,
        b
      ), Zn = !1, C = t.memoizedState, c.state = C, Pi(t, l, c, u), Wi();
      var O = t.memoizedState;
      p !== B || C !== O || Zn || e !== null && e.dependencies !== null && fo(e.dependencies) ? (typeof y == "function" && (Pu(
        t,
        a,
        y,
        l
      ), O = t.memoizedState), (R = Zn || Bf(
        t,
        a,
        R,
        l,
        C,
        O,
        b
      ) || e !== null && e.dependencies !== null && fo(e.dependencies)) ? (j || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, O, b), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        O,
        b
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), c.props = l, c.state = O, c.context = b, l = R) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Co(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = _a(
      t,
      e.child,
      null,
      u
    ), t.child = _a(
      t,
      null,
      a,
      u
    )) : pt(e, t, a, u), t.memoizedState = c.state, e = t.child) : e = gn(
      e,
      t,
      u
    ), e;
  }
  function tm(e, t, a, l) {
    return ma(), t.flags |= 256, pt(e, t, a, l), t.child;
  }
  var ns = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function as(e) {
    return { baseLanes: e, cachePool: $d() };
  }
  function is(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rt), e;
  }
  function nm(e, t, a) {
    var l = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (u = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ke) {
        if (u ? Yn(t) : Bn(), (e = $e) ? (e = cp(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cn !== null ? { id: ln, overflow: on } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Dd(e), a.return = t, t.child = a, ft = t, $e = null)) : e = null, e === null) throw Nn(t);
        return Hs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, u ? (Bn(), u = t.mode, y = Oo(
        { mode: "hidden", children: y },
        u
      ), l = fa(
        l,
        u,
        a,
        null
      ), y.return = t, l.return = t, y.sibling = l, t.child = y, l = t.child, l.memoizedState = as(a), l.childLanes = is(
        e,
        p,
        a
      ), t.memoizedState = ns, nl(null, l)) : (Yn(t), ls(t, y));
    }
    var b = e.memoizedState;
    if (b !== null && (y = b.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Yn(t), t.flags &= -257, t = os(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Bn(), t.child = e.child, t.flags |= 128, t = null) : (Bn(), y = l.fallback, u = t.mode, l = Oo(
          { mode: "visible", children: l.children },
          u
        ), y = fa(
          y,
          u,
          a,
          null
        ), y.flags |= 2, l.return = t, y.return = t, l.sibling = y, t.child = l, _a(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = as(a), l.childLanes = is(
          e,
          p,
          a
        ), t.memoizedState = ns, t = nl(null, l));
      else if (Yn(t), Hs(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var j = p.dgst;
        p = j, l = Error(r(419)), l.stack = "", l.digest = p, Li({ value: l, source: null, stack: null }), t = os(
          e,
          t,
          a
        );
      } else if (it || Pa(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = qe, p !== null && (l = Xc(p, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, da(e, l), At(p, e, l), es;
        Bs(y) || Xo(), t = os(
          e,
          t,
          a
        );
      } else
        Bs(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, $e = Gt(
          y.nextSibling
        ), ft = t, ke = !0, On = null, Lt = !1, e !== null && Ud(t, e), t = ls(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Bn(), y = l.fallback, u = t.mode, b = e.child, j = b.sibling, l = fn(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, j !== null ? y = fn(
      j,
      y
    ) : (y = fa(
      y,
      u,
      a,
      null
    ), y.flags |= 2), y.return = t, l.return = t, l.sibling = y, t.child = l, nl(null, l), l = t.child, y = e.child.memoizedState, y === null ? y = as(a) : (u = y.cachePool, u !== null ? (b = nt._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = $d(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: u
    }), l.memoizedState = y, l.childLanes = is(
      e,
      p,
      a
    ), t.memoizedState = ns, nl(e.child, l)) : (Yn(t), a = e.child, e = a.sibling, a = fn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ls(e, t) {
    return t = Oo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Oo(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function os(e, t, a) {
    return _a(t, e.child, null, a), e = ls(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function am(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Su(e.return, t, a);
  }
  function rs(e, t, a, l, u, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: u,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = a, p.tailMode = u, p.treeForkCount = c);
  }
  function im(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, c = l.tail;
    l = l.children;
    var p = et.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, Q(et, p), pt(e, t, l, a), l = ke ? $i : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && am(e, a, t);
        else if (e.tag === 19)
          am(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && bo(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), rs(
          t,
          !1,
          u,
          a,
          c,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && bo(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        rs(
          t,
          !0,
          a,
          null,
          c,
          l
        );
        break;
      case "together":
        rs(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function gn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), qn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Pa(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, a = fn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = fn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function us(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fo(e)));
  }
  function ig(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), Dn(t, nt, e.memoizedState.cache), ma();
        break;
      case 27:
      case 5:
        tn(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Dn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Nu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Yn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? nm(e, t, a) : (Yn(t), e = gn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Pa(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), u) {
          if (l)
            return im(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Q(et, et.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Dn(t, nt, e.memoizedState.cache);
    }
    return gn(e, t, a);
  }
  function lm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!us(e, a) && (t.flags & 128) === 0)
          return it = !1, ig(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, ke && (t.flags & 1048576) !== 0 && Rd(t, $i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            mu(e) ? (l = Sa(e, l), t.tag = 1, t = em(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = ts(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === q) {
                t.tag = 11, t = Qf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (u === M) {
                t.tag = 14, t = Kf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Oe(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return ts(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, u = Sa(
          l,
          t.pendingProps
        ), em(
          e,
          t,
          l,
          u,
          a
        );
      case 3:
        e: {
          if (Ge(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          u = c.element, Au(e, t), Pi(t, l, null, a);
          var p = t.memoizedState;
          if (l = p.cache, Dn(t, nt, l), l !== c.cache && wu(
            t,
            [nt],
            a,
            !0
          ), Wi(), l = p.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = tm(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== u) {
              u = Xt(
                Error(r(424)),
                t
              ), Li(u), t = tm(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, $e = Gt(e.firstChild), ft = t, ke = !0, On = null, Lt = !0, a = Jd(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ma(), l === u) {
              t = gn(
                e,
                t,
                a
              );
              break e;
            }
            pt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Co(e, t), e === null ? (a = vp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : ke || (a = t.type, e = t.pendingProps, l = Ko(
          pe.current
        ).createElement(a), l[dt] = t, l[wt] = e, ht(l, a, e), st(l), t.stateNode = l) : t.memoizedState = vp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return tn(t), e === null && ke && (l = t.stateNode = mp(
          t.type,
          t.pendingProps,
          pe.current
        ), ft = t, Lt = !0, u = $e, Qn(t.type) ? (Xs = u, $e = Gt(l.firstChild)) : $e = u), pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Co(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ke && ((u = l = $e) && (l = Dg(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, ft = t, $e = Gt(l.firstChild), Lt = !1, u = !0) : u = !1), u || Nn(t)), tn(t), u = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = c.children, Rs(u, c) ? l = null : p !== null && Rs(u, p) && (t.flags |= 32), t.memoizedState !== null && (u = Zu(
          e,
          t,
          Jy,
          null,
          null,
          a
        ), yl._currentValue = u), Co(e, t), pt(e, t, l, a), t.child;
      case 6:
        return e === null && ke && ((e = a = $e) && (a = Zg(
          a,
          t.pendingProps,
          Lt
        ), a !== null ? (t.stateNode = a, ft = t, $e = null, e = !0) : e = !1), e || Nn(t)), null;
      case 13:
        return nm(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = _a(
          t,
          null,
          l,
          a
        ) : pt(e, t, l, a), t.child;
      case 11:
        return Qf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return pt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Dn(t, t.type, l.value), pt(e, t, l.children, a), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, ha(t), u = mt(u), l = l(u), t.flags |= 1, pt(e, t, l, a), t.child;
      case 14:
        return Kf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Jf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return im(e, t, a);
      case 31:
        return ag(e, t, a);
      case 22:
        return Wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ha(t), l = mt(nt), e === null ? (u = ku(), u === null && (u = qe, c = zu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), t.memoizedState = { parent: l, cache: u }, Eu(t), Dn(t, nt, u)) : ((e.lanes & a) !== 0 && (Au(e, t), Pi(t, null, null, a), Wi()), u = e.memoizedState, c = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Dn(t, nt, l)) : (l = c.cache, Dn(t, nt, l), l !== u.cache && wu(
          t,
          [nt],
          a,
          !0
        ))), pt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function _n(e) {
    e.flags |= 4;
  }
  function ss(e, t, a, l, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Om()) e.flags |= 8192;
        else
          throw ga = vo, Tu;
    } else e.flags &= -16777217;
  }
  function om(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Sp(t))
      if (Om()) e.flags |= 8192;
      else
        throw ga = vo, Tu;
  }
  function No(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Yc() : 536870912, e.lanes |= t, si |= t);
  }
  function al(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function lg(e, t, a) {
    var l = t.pendingProps;
    switch (yu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Le(t), null;
      case 1:
        return Le(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), hn(nt), De(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wa(t) ? _n(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _u())), Le(t), null;
      case 26:
        var u = t.type, c = t.memoizedState;
        return e === null ? (_n(t), c !== null ? (Le(t), om(t, c)) : (Le(t), ss(
          t,
          u,
          null,
          l,
          a
        ))) : c ? c !== e.memoizedState ? (_n(t), Le(t), om(t, c)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && _n(t), Le(t), ss(
          t,
          u,
          e,
          l,
          a
        )), null;
      case 27:
        if (nn(t), a = pe.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _n(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Le(t), null;
          }
          e = P.current, Wa(t) ? Yd(t) : (e = mp(u, l, a), t.stateNode = e, _n(t));
        }
        return Le(t), null;
      case 5:
        if (nn(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _n(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Le(t), null;
          }
          if (c = P.current, Wa(t))
            Yd(t);
          else {
            var p = Ko(
              pe.current
            );
            switch (c) {
              case 1:
                c = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                c = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    c = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    c = p.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof l.is == "string" ? p.createElement("select", {
                      is: l.is
                    }) : p.createElement("select"), l.multiple ? c.multiple = !0 : l.size && (c.size = l.size);
                    break;
                  default:
                    c = typeof l.is == "string" ? p.createElement(u, { is: l.is }) : p.createElement(u);
                }
            }
            c[dt] = t, c[wt] = l;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                c.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = c;
            e: switch (ht(c, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && _n(t);
          }
        }
        return Le(t), ss(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && _n(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = pe.current, Wa(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = ft, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || np(e.nodeValue, a)), e || Nn(t, !0);
          } else
            e = Ko(e).createTextNode(
              l
            ), e[dt] = t, t.stateNode = e;
        }
        return Le(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Wa(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[dt] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), e = !1;
          } else
            a = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Le(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Wa(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[dt] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), u = !1;
          } else
            u = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
        }
        return Dt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== u && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), No(t, t.updateQueue), Le(t), null);
      case 4:
        return De(), e === null && Cs(t.stateNode.containerInfo), Le(t), null;
      case 10:
        return hn(t.type), Le(t), null;
      case 19:
        if (D(et), l = t.memoizedState, l === null) return Le(t), null;
        if (u = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (u) al(l, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = bo(e), c !== null) {
                  for (t.flags |= 128, al(l, !1), e = c.updateQueue, t.updateQueue = e, No(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Nd(a, e), a = a.sibling;
                  return Q(
                    et,
                    et.current & 1 | 2
                  ), ke && mn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && ot() > Yo && (t.flags |= 128, u = !0, al(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = bo(c), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, No(t, e), al(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !ke)
                return Le(t), null;
            } else
              2 * ot() - l.renderingStartTime > Yo && a !== 536870912 && (t.flags |= 128, u = !0, al(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = ot(), e.sibling = null, a = et.current, Q(
          et,
          u ? a & 1 | 2 : a & 1
        ), ke && mn(t, l.treeForkCount), e) : (Le(t), null);
      case 22:
      case 23:
        return Dt(t), Ou(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), a = t.updateQueue, a !== null && No(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && D(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), hn(nt), Le(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function og(e, t) {
    switch (yu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return hn(nt), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return nn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Dt(t), t.alternate === null)
            throw Error(r(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Dt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(et), null;
      case 4:
        return De(), null;
      case 10:
        return hn(t.type), null;
      case 22:
      case 23:
        return Dt(t), Ou(), e !== null && D(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return hn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rm(e, t) {
    switch (yu(t), t.tag) {
      case 3:
        hn(nt), De();
        break;
      case 26:
      case 27:
      case 5:
        nn(t);
        break;
      case 4:
        De();
        break;
      case 31:
        t.memoizedState !== null && Dt(t);
        break;
      case 13:
        Dt(t);
        break;
      case 19:
        D(et);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        Dt(t), Ou(), e !== null && D(va);
        break;
      case 24:
        hn(nt);
    }
  }
  function il(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var c = a.create, p = a.inst;
            l = c(), p.destroy = l;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (y) {
      Ue(t, t.return, y);
    }
  }
  function Hn(e, t, a) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst, y = p.destroy;
            if (y !== void 0) {
              p.destroy = void 0, u = t;
              var b = a, j = y;
              try {
                j();
              } catch (R) {
                Ue(
                  u,
                  b,
                  R
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (R) {
      Ue(t, t.return, R);
    }
  }
  function um(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Pd(t, a);
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
  }
  function sm(e, t, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ue(e, t, l);
    }
  }
  function ll(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (u) {
      Ue(e, t, u);
    }
  }
  function rn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ue(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Ue(e, t, u);
        }
      else a.current = null;
  }
  function cm(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function cs(e, t, a) {
    try {
      var l = e.stateNode;
      Ag(l, e.type, a, t), l[wt] = t;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function dm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qn(e.type) || e.tag === 4;
  }
  function ds(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || dm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Qn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = cn));
    else if (l !== 4 && (l === 27 && Qn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (fs(e, t, a), e = e.sibling; e !== null; )
        fs(e, t, a), e = e.sibling;
  }
  function Do(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Qn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Do(e, t, a), e = e.sibling; e !== null; )
        Do(e, t, a), e = e.sibling;
  }
  function fm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      ht(t, l, a), t[dt] = e, t[wt] = a;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var bn = !1, lt = !1, ms = !1, mm = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function rg(e, t) {
    if (e = e.containerInfo, Ds = tr, e = xd(e), ou(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0, y = -1, b = -1, j = 0, R = 0, B = e, C = null;
            t: for (; ; ) {
              for (var O; B !== a || u !== 0 && B.nodeType !== 3 || (y = p + u), B !== c || l !== 0 && B.nodeType !== 3 || (b = p + l), B.nodeType === 3 && (p += B.nodeValue.length), (O = B.firstChild) !== null; )
                C = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (C === a && ++j === u && (y = p), C === c && ++R === l && (b = p), (O = B.nextSibling) !== null) break;
                B = C, C = B.parentNode;
              }
              B = O;
            }
            a = y === -1 || b === -1 ? null : { start: y, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zs = { focusedElem: e, selectionRange: a }, tr = !1, ct = t; ct !== null; )
      if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ct = e;
      else
        for (; ct !== null; ) {
          switch (t = ct, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  u = e[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, a = t, u = c.memoizedProps, c = c.memoizedState, l = a.stateNode;
                try {
                  var I = Sa(
                    a.type,
                    u
                  );
                  e = l.getSnapshotBeforeUpdate(
                    I,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (se) {
                  Ue(
                    a,
                    a.return,
                    se
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Ys(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ys(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ct = e;
            break;
          }
          ct = t.return;
        }
  }
  function pm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        wn(e, a), l & 4 && il(5, a);
        break;
      case 1:
        if (wn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Ue(a, a.return, p);
            }
          else {
            var u = Sa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              Ue(
                a,
                a.return,
                p
              );
            }
          }
        l & 64 && um(a), l & 512 && ll(a, a.return);
        break;
      case 3:
        if (wn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Pd(e, t);
          } catch (p) {
            Ue(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && fm(a);
      case 26:
      case 5:
        wn(e, a), t === null && l & 4 && cm(a), l & 512 && ll(a, a.return);
        break;
      case 12:
        wn(e, a);
        break;
      case 31:
        wn(e, a), l & 4 && ym(e, a);
        break;
      case 13:
        wn(e, a), l & 4 && gm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = vg.bind(
          null,
          a
        ), Rg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || bn, !l) {
          t = t !== null && t.memoizedState !== null || lt, u = bn;
          var c = lt;
          bn = l, (lt = t) && !c ? zn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : wn(e, a), bn = u, lt = c;
        }
        break;
      case 30:
        break;
      default:
        wn(e, a);
    }
  }
  function hm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $r(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, xt = !1;
  function Sn(e, t, a) {
    for (a = a.child; a !== null; )
      vm(e, t, a), a = a.sibling;
  }
  function vm(e, t, a) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
      try {
        _t.onCommitFiberUnmount(la, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || rn(a, t), Sn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || rn(a, t);
        var l = Qe, u = xt;
        Qn(a.type) && (Qe = a.stateNode, xt = !1), Sn(
          e,
          t,
          a
        ), pl(a.stateNode), Qe = l, xt = u;
        break;
      case 5:
        lt || rn(a, t);
      case 6:
        if (l = Qe, u = xt, Qe = null, Sn(
          e,
          t,
          a
        ), Qe = l, xt = u, Qe !== null)
          if (xt)
            try {
              (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(a.stateNode);
            } catch (c) {
              Ue(
                a,
                t,
                c
              );
            }
          else
            try {
              Qe.removeChild(a.stateNode);
            } catch (c) {
              Ue(
                a,
                t,
                c
              );
            }
        break;
      case 18:
        Qe !== null && (xt ? (e = Qe, up(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), yi(e)) : up(Qe, a.stateNode));
        break;
      case 4:
        l = Qe, u = xt, Qe = a.stateNode.containerInfo, xt = !0, Sn(
          e,
          t,
          a
        ), Qe = l, xt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hn(2, a, t), lt || Hn(4, a, t), Sn(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (rn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && sm(
          a,
          t,
          l
        )), Sn(
          e,
          t,
          a
        );
        break;
      case 21:
        Sn(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, Sn(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        Sn(
          e,
          t,
          a
        );
    }
  }
  function ym(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        yi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function gm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        yi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
  }
  function ug(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mm()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Zo(e, t) {
    var a = ug(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var u = yg.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function kt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], c = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Qn(y.type)) {
                Qe = y.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Qe = y.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Qe = y.stateNode.containerInfo, xt = !0;
              break e;
          }
          y = y.return;
        }
        if (Qe === null) throw Error(r(160));
        vm(c, p, u), Qe = null, xt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        _m(t, e), t = t.sibling;
  }
  var Pt = null;
  function _m(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kt(t, e), Tt(e), l & 4 && (Hn(3, e, e.return), il(3, e), Hn(5, e, e.return));
        break;
      case 1:
        kt(t, e), Tt(e), l & 512 && (lt || a === null || rn(a, a.return)), l & 64 && bn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = Pt;
        if (kt(t, e), Tt(e), l & 512 && (lt || a === null || rn(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Oi] || c[dt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(l), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), ht(c, l, a), c[dt] = e, st(c), l = c;
                      break e;
                    case "link":
                      var p = _p(
                        "link",
                        "href",
                        u
                      ).get(l + (a.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), ht(c, l, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = _p(
                        "meta",
                        "content",
                        u
                      ).get(l + (a.content || ""))) {
                        for (y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(l), ht(c, l, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  c[dt] = e, st(c), l = c;
                }
                e.stateNode = l;
              } else
                bp(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = gp(
                u,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? bp(
              u,
              e.type,
              e.stateNode
            ) : gp(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && cs(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        kt(t, e), Tt(e), l & 512 && (lt || a === null || rn(a, a.return)), a !== null && l & 4 && cs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (kt(t, e), Tt(e), l & 512 && (lt || a === null || rn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ha(u, "");
          } catch (I) {
            Ue(e, e.return, I);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, cs(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), l & 1024 && (ms = !0);
        break;
      case 6:
        if (kt(t, e), Tt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (I) {
            Ue(e, e.return, I);
          }
        }
        break;
      case 3:
        if (Po = null, u = Pt, Pt = Jo(t.containerInfo), kt(t, e), Pt = u, Tt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yi(t.containerInfo);
          } catch (I) {
            Ue(e, e.return, I);
          }
        ms && (ms = !1, bm(e));
        break;
      case 4:
        l = Pt, Pt = Jo(
          e.stateNode.containerInfo
        ), kt(t, e), Tt(e), Pt = l;
        break;
      case 12:
        kt(t, e), Tt(e);
        break;
      case 31:
        kt(t, e), Tt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Zo(e, l)));
        break;
      case 13:
        kt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Uo = ot()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Zo(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, j = bn, R = lt;
        if (bn = j || u, lt = R || b, kt(t, e), lt = R, bn = j, Tt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || b || bn || lt || wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
                try {
                  if (c = b.stateNode, u)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = b.stateNode;
                    var B = b.memoizedProps.style, C = B != null && B.hasOwnProperty("display") ? B.display : null;
                    y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (I) {
                  Ue(b, b.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = u ? "" : b.memoizedProps;
                } catch (I) {
                  Ue(b, b.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var O = b.stateNode;
                  u ? sp(O, !0) : sp(b.stateNode, !1);
                } catch (I) {
                  Ue(b, b.return, I);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Zo(e, a))));
        break;
      case 19:
        kt(t, e), Tt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Zo(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kt(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (dm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, c = ds(e);
            Do(e, c, u);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ha(p, ""), a.flags &= -33);
            var y = ds(e);
            Do(e, y, p);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, j = ds(e);
            fs(
              e,
              j,
              b
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        Ue(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        bm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function wn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        pm(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hn(4, t, t.return), wa(t);
          break;
        case 1:
          rn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && sm(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          pl(t.stateNode);
        case 26:
        case 5:
          rn(t, t.return), wa(t);
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      e = e.sibling;
    }
  }
  function zn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            u,
            c,
            a
          ), il(4, c);
          break;
        case 1:
          if (zn(
            u,
            c,
            a
          ), l = c, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (j) {
              Ue(l, l.return, j);
            }
          if (l = c, u = l.updateQueue, u !== null) {
            var y = l.stateNode;
            try {
              var b = u.shared.hiddenCallbacks;
              if (b !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < b.length; u++)
                  Wd(b[u], y);
            } catch (j) {
              Ue(l, l.return, j);
            }
          }
          a && p & 64 && um(c), ll(c, c.return);
          break;
        case 27:
          fm(c);
        case 26:
        case 5:
          zn(
            u,
            c,
            a
          ), a && l === null && p & 4 && cm(c), ll(c, c.return);
          break;
        case 12:
          zn(
            u,
            c,
            a
          );
          break;
        case 31:
          zn(
            u,
            c,
            a
          ), a && p & 4 && ym(u, c);
          break;
        case 13:
          zn(
            u,
            c,
            a
          ), a && p & 4 && gm(u, c);
          break;
        case 22:
          c.memoizedState === null && zn(
            u,
            c,
            a
          ), ll(c, c.return);
          break;
        case 30:
          break;
        default:
          zn(
            u,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ps(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Vi(a));
  }
  function hs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Vi(e));
  }
  function Ft(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Sm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Sm(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ft(
          e,
          t,
          a,
          l
        ), u & 2048 && il(9, t);
        break;
      case 1:
        Ft(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Ft(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Vi(e)));
        break;
      case 12:
        if (u & 2048) {
          Ft(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, p = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Ue(t, t.return, b);
          }
        } else
          Ft(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Ft(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Ft(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? Ft(
          e,
          t,
          a,
          l
        ) : ol(e, t) : c._visibility & 2 ? Ft(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, oi(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && ps(p, t);
        break;
      case 24:
        Ft(
          e,
          t,
          a,
          l
        ), u & 2048 && hs(t.alternate, t);
        break;
      default:
        Ft(
          e,
          t,
          a,
          l
        );
    }
  }
  function oi(e, t, a, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, b = l, j = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            c,
            p,
            y,
            b,
            u
          ), il(8, p);
          break;
        case 23:
          break;
        case 22:
          var R = p.stateNode;
          p.memoizedState !== null ? R._visibility & 2 ? oi(
            c,
            p,
            y,
            b,
            u
          ) : ol(
            c,
            p
          ) : (R._visibility |= 2, oi(
            c,
            p,
            y,
            b,
            u
          )), u && j & 2048 && ps(
            p.alternate,
            p
          );
          break;
        case 24:
          oi(
            c,
            p,
            y,
            b,
            u
          ), u && j & 2048 && hs(p.alternate, p);
          break;
        default:
          oi(
            c,
            p,
            y,
            b,
            u
          );
      }
      t = t.sibling;
    }
  }
  function ol(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            ol(a, l), u & 2048 && ps(
              l.alternate,
              l
            );
            break;
          case 24:
            ol(a, l), u & 2048 && hs(l.alternate, l);
            break;
          default:
            ol(a, l);
        }
        t = t.sibling;
      }
  }
  var rl = 8192;
  function ri(e, t, a) {
    if (e.subtreeFlags & rl)
      for (e = e.child; e !== null; )
        wm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function wm(e, t, a) {
    switch (e.tag) {
      case 26:
        ri(
          e,
          t,
          a
        ), e.flags & rl && e.memoizedState !== null && Kg(
          a,
          Pt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ri(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Pt;
        Pt = Jo(e.stateNode.containerInfo), ri(
          e,
          t,
          a
        ), Pt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = rl, rl = 16777216, ri(
          e,
          t,
          a
        ), rl = l) : ri(
          e,
          t,
          a
        ));
        break;
      default:
        ri(
          e,
          t,
          a
        );
    }
  }
  function zm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ul(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, km(
            l,
            e
          );
        }
      zm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        xm(e), e = e.sibling;
  }
  function xm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ul(e), e.flags & 2048 && Hn(9, e, e.return);
        break;
      case 3:
        ul(e);
        break;
      case 12:
        ul(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ro(e)) : ul(e);
        break;
      default:
        ul(e);
    }
  }
  function Ro(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ct = l, km(
            l,
            e
          );
        }
      zm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Hn(8, t, t.return), Ro(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ro(t));
          break;
        default:
          Ro(t);
      }
      e = e.sibling;
    }
  }
  function km(e, t) {
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Hn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Vi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ct = l;
      else
        e: for (a = e; ct !== null; ) {
          l = ct;
          var u = l.sibling, c = l.return;
          if (hm(l), l === a) {
            ct = null;
            break e;
          }
          if (u !== null) {
            u.return = c, ct = u;
            break e;
          }
          ct = c;
        }
    }
  }
  var sg = {
    getCacheForType: function(e) {
      var t = mt(nt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return mt(nt).controller.signal;
    }
  }, cg = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, qe = null, be = null, we = 0, Re = 0, Zt = null, Xn = !1, ui = !1, vs = !1, xn = 0, Pe = 0, qn = 0, za = 0, ys = 0, Rt = 0, si = 0, sl = null, Et = null, gs = !1, Uo = 0, Tm = 0, Yo = 1 / 0, Bo = null, $n = null, rt = 0, Ln = null, ci = null, kn = 0, _s = 0, bs = null, Em = null, cl = 0, Ss = null;
  function Ut() {
    return (Ne & 2) !== 0 && we !== 0 ? we & -we : k.T !== null ? Es() : qc();
  }
  function Am() {
    if (Rt === 0)
      if ((we & 536870912) === 0 || ke) {
        var e = Gl;
        Gl <<= 1, (Gl & 3932160) === 0 && (Gl = 262144), Rt = e;
      } else Rt = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), Rt;
  }
  function At(e, t, a) {
    (e === qe && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (di(e, 0), Vn(
      e,
      we,
      Rt,
      !1
    )), Ci(e, a), ((Ne & 2) === 0 || e !== qe) && (e === qe && ((Ne & 2) === 0 && (za |= a), Pe === 4 && Vn(
      e,
      we,
      Rt,
      !1
    )), un(e));
  }
  function jm(e, t, a) {
    if ((Ne & 6) !== 0) throw Error(r(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Mi(e, t), u = l ? mg(e, t) : zs(e, t, !0), c = l;
    do {
      if (u === 0) {
        ui && !l && Vn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !dg(a)) {
          u = zs(e, t, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var y = e;
              u = sl;
              var b = y.current.memoizedState.isDehydrated;
              if (b && (di(y, p).flags |= 256), p = zs(
                y,
                p,
                !1
              ), p !== 2) {
                if (vs && !b) {
                  y.errorRecoveryDisabledLanes |= c, za |= c, u = 4;
                  break e;
                }
                c = Et, Et = u, c !== null && (Et === null ? Et = c : Et.push.apply(
                  Et,
                  c
                ));
              }
              u = p;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          di(e, 0), Vn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = u, c) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Vn(
                l,
                t,
                Rt,
                !Xn
              );
              break e;
            case 2:
              Et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (u = Uo + 300 - ot(), 10 < u)) {
            if (Vn(
              l,
              t,
              Rt,
              !Xn
            ), Kl(l, 0, !0) !== 0) break e;
            kn = t, l.timeoutHandle = op(
              Mm.bind(
                null,
                l,
                a,
                Et,
                Bo,
                gs,
                t,
                Rt,
                za,
                si,
                Xn,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Mm(
            l,
            a,
            Et,
            Bo,
            gs,
            t,
            Rt,
            za,
            si,
            Xn,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    un(e);
  }
  function Mm(e, t, a, l, u, c, p, y, b, j, R, B, C, O) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: cn
      }, wm(
        t,
        c,
        B
      );
      var I = (c & 62914560) === c ? Uo - ot() : (c & 4194048) === c ? Tm - ot() : 0;
      if (I = Jg(
        B,
        I
      ), I !== null) {
        kn = c, e.cancelPendingCommit = I(
          Ym.bind(
            null,
            e,
            t,
            c,
            a,
            l,
            u,
            p,
            y,
            b,
            R,
            B,
            null,
            C,
            O
          )
        ), Vn(e, c, p, !j);
        return;
      }
    }
    Ym(
      e,
      t,
      c,
      a,
      l,
      u,
      p,
      y,
      b
    );
  }
  function dg(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Ct(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Vn(e, t, a, l) {
    t &= ~ys, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - ne(u), p = 1 << c;
      l[c] = -1, u &= ~p;
    }
    a !== 0 && Bc(e, a, t);
  }
  function Ho() {
    return (Ne & 6) === 0 ? (dl(0), !1) : !0;
  }
  function ws() {
    if (be !== null) {
      if (Re === 0)
        var e = be.return;
      else
        e = be, pn = pa = null, Yu(e), ti = null, Qi = 0, e = be;
      for (; e !== null; )
        rm(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function di(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Cg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), kn = 0, ws(), qe = e, be = a = fn(e.current, null), we = t, Re = 0, Zt = null, Xn = !1, ui = Mi(e, t), vs = !1, si = Rt = ys = za = qn = Pe = 0, Et = sl = null, gs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ne(l), c = 1 << u;
        t |= e[u], l &= ~c;
      }
    return xn = t, oo(), a;
  }
  function Cm(e, t) {
    he = null, k.H = tl, t === ei || t === ho ? (t = Gd(), Re = 3) : t === Tu ? (t = Gd(), Re = 4) : Re = t === es ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, be === null && (Pe = 1, jo(
      e,
      Xt(t, e.current)
    ));
  }
  function Om() {
    var e = Nt.current;
    return e === null ? !0 : (we & 4194048) === we ? Vt === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === Vt : !1;
  }
  function Nm() {
    var e = k.H;
    return k.H = tl, e === null ? tl : e;
  }
  function Dm() {
    var e = k.A;
    return k.A = sg, e;
  }
  function Xo() {
    Pe = 4, Xn || (we & 4194048) !== we && Nt.current !== null || (ui = !0), (qn & 134217727) === 0 && (za & 134217727) === 0 || qe === null || Vn(
      qe,
      we,
      Rt,
      !1
    );
  }
  function zs(e, t, a) {
    var l = Ne;
    Ne |= 2;
    var u = Nm(), c = Dm();
    (qe !== e || we !== t) && (Bo = null, di(e, t)), t = !1;
    var p = Pe;
    e: do
      try {
        if (Re !== 0 && be !== null) {
          var y = be, b = Zt;
          switch (Re) {
            case 8:
              ws(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var j = Re;
              if (Re = 0, Zt = null, fi(e, y, b, j), a && ui) {
                p = 0;
                break e;
              }
              break;
            default:
              j = Re, Re = 0, Zt = null, fi(e, y, b, j);
          }
        }
        fg(), p = Pe;
        break;
      } catch (R) {
        Cm(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, pn = pa = null, Ne = l, k.H = u, k.A = c, be === null && (qe = null, we = 0, oo()), p;
  }
  function fg() {
    for (; be !== null; ) Zm(be);
  }
  function mg(e, t) {
    var a = Ne;
    Ne |= 2;
    var l = Nm(), u = Dm();
    qe !== e || we !== t ? (Bo = null, Yo = ot() + 500, di(e, t)) : ui = Mi(
      e,
      t
    );
    e: do
      try {
        if (Re !== 0 && be !== null) {
          t = be;
          var c = Zt;
          t: switch (Re) {
            case 1:
              Re = 0, Zt = null, fi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Ld(c)) {
                Re = 0, Zt = null, Rm(t);
                break;
              }
              t = function() {
                Re !== 2 && Re !== 9 || qe !== e || (Re = 7), un(e);
              }, c.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              Ld(c) ? (Re = 0, Zt = null, Rm(t)) : (Re = 0, Zt = null, fi(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (be.tag) {
                case 26:
                  p = be.memoizedState;
                case 5:
                case 27:
                  var y = be;
                  if (p ? Sp(p) : y.stateNode.complete) {
                    Re = 0, Zt = null;
                    var b = y.sibling;
                    if (b !== null) be = b;
                    else {
                      var j = y.return;
                      j !== null ? (be = j, qo(j)) : be = null;
                    }
                    break t;
                  }
              }
              Re = 0, Zt = null, fi(e, t, c, 5);
              break;
            case 6:
              Re = 0, Zt = null, fi(e, t, c, 6);
              break;
            case 8:
              ws(), Pe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        pg();
        break;
      } catch (R) {
        Cm(e, R);
      }
    while (!0);
    return pn = pa = null, k.H = l, k.A = u, Ne = a, be !== null ? 0 : (qe = null, we = 0, oo(), Pe);
  }
  function pg() {
    for (; be !== null && !Dr(); )
      Zm(be);
  }
  function Zm(e) {
    var t = lm(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? qo(e) : be = t;
  }
  function Rm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = If(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          we
        );
        break;
      case 11:
        t = If(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          we
        );
        break;
      case 5:
        Yu(t);
      default:
        rm(a, t), t = be = Nd(t, xn), t = lm(a, t, xn);
    }
    e.memoizedProps = e.pendingProps, t === null ? qo(e) : be = t;
  }
  function fi(e, t, a, l) {
    pn = pa = null, Yu(t), ti = null, Qi = 0;
    var u = t.return;
    try {
      if (ng(
        e,
        u,
        t,
        a,
        we
      )) {
        Pe = 1, jo(
          e,
          Xt(a, e.current)
        ), be = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw be = u, c;
      Pe = 1, jo(
        e,
        Xt(a, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (ke || l === 1 ? e = !0 : ui || (we & 536870912) !== 0 ? e = !1 : (Xn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Nt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Um(t, e)) : qo(t);
  }
  function qo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Um(
          t,
          Xn
        );
        return;
      }
      e = t.return;
      var a = lg(
        t.alternate,
        t,
        xn
      );
      if (a !== null) {
        be = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Um(e, t) {
    do {
      var a = og(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, be = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        be = e;
        return;
      }
      be = e = a;
    } while (e !== null);
    Pe = 6, be = null;
  }
  function Ym(e, t, a, l, u, c, p, y, b) {
    e.cancelPendingCommit = null;
    do
      $o();
    while (rt !== 0);
    if ((Ne & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (c = t.lanes | t.childLanes, c |= du, Qv(
        e,
        a,
        c,
        p,
        y,
        b
      ), e === qe && (be = qe = null, we = 0), ci = t, Ln = e, kn = a, _s = c, bs = u, Em = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, gg(Oa, function() {
        return $m(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = k.T, k.T = null, u = Z.p, Z.p = 2, p = Ne, Ne |= 4;
        try {
          rg(e, t, a);
        } finally {
          Ne = p, Z.p = u, k.T = l;
        }
      }
      rt = 1, Bm(), Hm(), Xm();
    }
  }
  function Bm() {
    if (rt === 1) {
      rt = 0;
      var e = Ln, t = ci, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = k.T, k.T = null;
        var l = Z.p;
        Z.p = 2;
        var u = Ne;
        Ne |= 4;
        try {
          _m(t, e);
          var c = Zs, p = xd(e.containerInfo), y = c.focusedElem, b = c.selectionRange;
          if (p !== y && y && y.ownerDocument && zd(
            y.ownerDocument.documentElement,
            y
          )) {
            if (b !== null && ou(y)) {
              var j = b.start, R = b.end;
              if (R === void 0 && (R = j), "selectionStart" in y)
                y.selectionStart = j, y.selectionEnd = Math.min(
                  R,
                  y.value.length
                );
              else {
                var B = y.ownerDocument || document, C = B && B.defaultView || window;
                if (C.getSelection) {
                  var O = C.getSelection(), I = y.textContent.length, se = Math.min(b.start, I), He = b.end === void 0 ? se : Math.min(b.end, I);
                  !O.extend && se > He && (p = He, He = se, se = p);
                  var T = wd(
                    y,
                    se
                  ), x = wd(
                    y,
                    He
                  );
                  if (T && x && (O.rangeCount !== 1 || O.anchorNode !== T.node || O.anchorOffset !== T.offset || O.focusNode !== x.node || O.focusOffset !== x.offset)) {
                    var A = B.createRange();
                    A.setStart(T.node, T.offset), O.removeAllRanges(), se > He ? (O.addRange(A), O.extend(x.node, x.offset)) : (A.setEnd(x.node, x.offset), O.addRange(A));
                  }
                }
              }
            }
            for (B = [], O = y; O = O.parentNode; )
              O.nodeType === 1 && B.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < B.length; y++) {
              var U = B[y];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          tr = !!Ds, Zs = Ds = null;
        } finally {
          Ne = u, Z.p = l, k.T = a;
        }
      }
      e.current = t, rt = 2;
    }
  }
  function Hm() {
    if (rt === 2) {
      rt = 0;
      var e = Ln, t = ci, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = k.T, k.T = null;
        var l = Z.p;
        Z.p = 2;
        var u = Ne;
        Ne |= 4;
        try {
          pm(e, t.alternate, t);
        } finally {
          Ne = u, Z.p = l, k.T = a;
        }
      }
      rt = 3;
    }
  }
  function Xm() {
    if (rt === 4 || rt === 3) {
      rt = 0, Zr();
      var e = Ln, t = ci, a = kn, l = Em;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, ci = Ln = null, qm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && ($n = null), Xr(a), t = t.stateNode, _t && typeof _t.onCommitFiberRoot == "function")
        try {
          _t.onCommitFiberRoot(
            la,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = k.T, u = Z.p, Z.p = 2, k.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          k.T = t, Z.p = u;
        }
      }
      (kn & 3) !== 0 && $o(), un(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === Ss ? cl++ : (cl = 0, Ss = e) : cl = 0, dl(0);
    }
  }
  function qm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Vi(t)));
  }
  function $o() {
    return Bm(), Hm(), Xm(), $m();
  }
  function $m() {
    if (rt !== 5) return !1;
    var e = Ln, t = _s;
    _s = 0;
    var a = Xr(kn), l = k.T, u = Z.p;
    try {
      Z.p = 32 > a ? 32 : a, k.T = null, a = bs, bs = null;
      var c = Ln, p = kn;
      if (rt = 0, ci = Ln = null, kn = 0, (Ne & 6) !== 0) throw Error(r(331));
      var y = Ne;
      if (Ne |= 4, xm(c.current), Sm(
        c,
        c.current,
        p,
        a
      ), Ne = y, dl(0, !1), _t && typeof _t.onPostCommitFiberRoot == "function")
        try {
          _t.onPostCommitFiberRoot(la, c);
        } catch {
        }
      return !0;
    } finally {
      Z.p = u, k.T = l, qm(e, t);
    }
  }
  function Lm(e, t, a) {
    t = Xt(a, t), t = Iu(e.stateNode, t, 2), e = Un(e, t, 2), e !== null && (Ci(e, 2), un(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3)
      Lm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Lm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && ($n === null || !$n.has(l))) {
            e = Xt(a, e), a = Vf(2), l = Un(t, a, 2), l !== null && (Gf(
              a,
              l,
              t,
              e
            ), Ci(l, 2), un(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function xs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new cg();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (vs = !0, u.add(a), e = hg.bind(null, e, t, a), t.then(e, e));
  }
  function hg(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, qe === e && (we & a) === a && (Pe === 4 || Pe === 3 && (we & 62914560) === we && 300 > ot() - Uo ? (Ne & 2) === 0 && di(e, 0) : ys |= a, si === we && (si = 0)), un(e);
  }
  function Vm(e, t) {
    t === 0 && (t = Yc()), e = da(e, t), e !== null && (Ci(e, t), un(e));
  }
  function vg(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Vm(e, a);
  }
  function yg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), Vm(e, a);
  }
  function gg(e, t) {
    return Ma(e, t);
  }
  var Lo = null, mi = null, ks = !1, Vo = !1, Ts = !1, Gn = 0;
  function un(e) {
    e !== mi && e.next === null && (mi === null ? Lo = mi = e : mi = mi.next = e), Vo = !0, ks || (ks = !0, bg());
  }
  function dl(e, t) {
    if (!Ts && Vo) {
      Ts = !0;
      do
        for (var a = !1, l = Lo; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              c = (1 << 31 - ne(42 | e) + 1) - 1, c &= u & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Jm(l, c));
          } else
            c = we, c = Kl(
              l,
              l === qe ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || Mi(l, c) || (a = !0, Jm(l, c));
          l = l.next;
        }
      while (a);
      Ts = !1;
    }
  }
  function _g() {
    Gm();
  }
  function Gm() {
    Vo = ks = !1;
    var e = 0;
    Gn !== 0 && Mg() && (e = Gn);
    for (var t = ot(), a = null, l = Lo; l !== null; ) {
      var u = l.next, c = Qm(l, t);
      c === 0 ? (l.next = null, a === null ? Lo = u : a.next = u, u === null && (mi = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && (Vo = !0)), l = u;
    }
    rt !== 0 && rt !== 5 || dl(e), Gn !== 0 && (Gn = 0);
  }
  function Qm(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - ne(c), y = 1 << p, b = u[p];
      b === -1 ? ((y & a) === 0 || (y & l) !== 0) && (u[p] = Gv(y, t)) : b <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = qe, a = we, a = Kl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ca(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Mi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ca(l), Xr(a)) {
        case 2:
        case 8:
          a = $l;
          break;
        case 32:
          a = Oa;
          break;
        case 268435456:
          a = Ll;
          break;
        default:
          a = Oa;
      }
      return l = Km.bind(null, e), a = Ma(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ca(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Km(e, t) {
    if (rt !== 0 && rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if ($o() && e.callbackNode !== a)
      return null;
    var l = we;
    return l = Kl(
      e,
      e === qe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (jm(e, l, t), Qm(e, ot()), e.callbackNode != null && e.callbackNode === a ? Km.bind(null, e) : null);
  }
  function Jm(e, t) {
    if ($o()) return null;
    jm(e, t, !0);
  }
  function bg() {
    Og(function() {
      (Ne & 6) !== 0 ? Ma(
        ql,
        _g
      ) : Gm();
    });
  }
  function Es() {
    if (Gn === 0) {
      var e = Fa;
      e === 0 && (e = Vl, Vl <<= 1, (Vl & 261888) === 0 && (Vl = 256)), Gn = e;
    }
    return Gn;
  }
  function Wm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Fl("" + e);
  }
  function Pm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Sg(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var c = Wm(
        (u[wt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[wt] || null) ? Wm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new no(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Gn !== 0) {
                  var b = p ? Pm(u, p) : new FormData(u);
                  Qu(
                    a,
                    {
                      pending: !0,
                      data: b,
                      method: u.method,
                      action: c
                    },
                    null,
                    b
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), b = p ? Pm(u, p) : new FormData(u), Qu(
                  a,
                  {
                    pending: !0,
                    data: b,
                    method: u.method,
                    action: c
                  },
                  c,
                  b
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var As = 0; As < cu.length; As++) {
    var js = cu[As], wg = js.toLowerCase(), zg = js[0].toUpperCase() + js.slice(1);
    Wt(
      wg,
      "on" + zg
    );
  }
  Wt(Ed, "onAnimationEnd"), Wt(Ad, "onAnimationIteration"), Wt(jd, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(By, "onTransitionRun"), Wt(Hy, "onTransitionStart"), Wt(Xy, "onTransitionCancel"), Wt(Md, "onTransitionEnd"), Ya("onMouseEnter", ["mouseout", "mouseover"]), Ya("onMouseLeave", ["mouseout", "mouseover"]), Ya("onPointerEnter", ["pointerout", "pointerover"]), Ya("onPointerLeave", ["pointerout", "pointerover"]), ra(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ra(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ra("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ra(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ra(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ra(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl)
  );
  function Fm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var y = l[p], b = y.instance, j = y.currentTarget;
            if (y = y.listener, b !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = j;
            try {
              c(u);
            } catch (R) {
              lo(R);
            }
            u.currentTarget = null, c = b;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (y = l[p], b = y.instance, j = y.currentTarget, y = y.listener, b !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = j;
            try {
              c(u);
            } catch (R) {
              lo(R);
            }
            u.currentTarget = null, c = b;
          }
      }
    }
  }
  function Se(e, t) {
    var a = t[qr];
    a === void 0 && (a = t[qr] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Im(t, e, 2, !1), a.add(l));
  }
  function Ms(e, t, a) {
    var l = 0;
    t && (l |= 4), Im(
      a,
      e,
      l,
      t
    );
  }
  var Go = "_reactListening" + Math.random().toString(36).slice(2);
  function Cs(e) {
    if (!e[Go]) {
      e[Go] = !0, Vc.forEach(function(a) {
        a !== "selectionchange" && (xg.has(a) || Ms(a, !1, e), Ms(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Go] || (t[Go] = !0, Ms("selectionchange", !1, t));
    }
  }
  function Im(e, t, a, l) {
    switch (Ap(t)) {
      case 2:
        var u = Fg;
        break;
      case 8:
        u = Ig;
        break;
      default:
        u = Gs;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function Os(e, t, a, l, u) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var y = l.stateNode.containerInfo;
          if (y === u) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var b = p.tag;
              if ((b === 3 || b === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = Za(y), p === null) return;
            if (b = p.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    ad(function() {
      var j = c, R = Jr(a), B = [];
      e: {
        var C = Cd.get(e);
        if (C !== void 0) {
          var O = no, I = e;
          switch (e) {
            case "keypress":
              if (eo(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = yy;
              break;
            case "focusin":
              I = "focus", O = tu;
              break;
            case "focusout":
              I = "blur", O = tu;
              break;
            case "beforeblur":
            case "afterblur":
              O = tu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = od;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = ly;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = by;
              break;
            case Ed:
            case Ad:
            case jd:
              O = uy;
              break;
            case Md:
              O = wy;
              break;
            case "scroll":
            case "scrollend":
              O = ay;
              break;
            case "wheel":
              O = xy;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = cy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = ud;
              break;
            case "toggle":
            case "beforetoggle":
              O = Ty;
          }
          var se = (t & 4) !== 0, He = !se && (e === "scroll" || e === "scrollend"), T = se ? C !== null ? C + "Capture" : null : C;
          se = [];
          for (var x = j, A; x !== null; ) {
            var U = x;
            if (A = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || A === null || T === null || (U = Di(x, T), U != null && se.push(
              ml(x, U, A)
            )), He) break;
            x = x.return;
          }
          0 < se.length && (C = new O(
            C,
            I,
            null,
            a,
            R
          ), B.push({ event: C, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", C && a !== Kr && (I = a.relatedTarget || a.fromElement) && (Za(I) || I[Da]))
            break e;
          if ((O || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, O ? (I = a.relatedTarget || a.toElement, O = j, I = I ? Za(I) : null, I !== null && (He = d(I), se = I.tag, I !== He || se !== 5 && se !== 27 && se !== 6) && (I = null)) : (O = null, I = j), O !== I)) {
            if (se = od, U = "onMouseLeave", T = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (se = ud, U = "onPointerLeave", T = "onPointerEnter", x = "pointer"), He = O == null ? C : Ni(O), A = I == null ? C : Ni(I), C = new se(
              U,
              x + "leave",
              O,
              a,
              R
            ), C.target = He, C.relatedTarget = A, U = null, Za(R) === j && (se = new se(
              T,
              x + "enter",
              I,
              a,
              R
            ), se.target = A, se.relatedTarget = He, U = se), He = U, O && I)
              t: {
                for (se = kg, T = O, x = I, A = 0, U = T; U; U = se(U))
                  A++;
                U = 0;
                for (var oe = x; oe; oe = se(oe))
                  U++;
                for (; 0 < A - U; )
                  T = se(T), A--;
                for (; 0 < U - A; )
                  x = se(x), U--;
                for (; A--; ) {
                  if (T === x || x !== null && T === x.alternate) {
                    se = T;
                    break t;
                  }
                  T = se(T), x = se(x);
                }
                se = null;
              }
            else se = null;
            O !== null && ep(
              B,
              C,
              O,
              se,
              !1
            ), I !== null && He !== null && ep(
              B,
              He,
              I,
              se,
              !0
            );
          }
        }
        e: {
          if (C = j ? Ni(j) : window, O = C.nodeName && C.nodeName.toLowerCase(), O === "select" || O === "input" && C.type === "file")
            var Ae = vd;
          else if (pd(C))
            if (yd)
              Ae = Ry;
            else {
              Ae = Dy;
              var ae = Ny;
            }
          else
            O = C.nodeName, !O || O.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? j && Qr(j.elementType) && (Ae = vd) : Ae = Zy;
          if (Ae && (Ae = Ae(e, j))) {
            hd(
              B,
              Ae,
              a,
              R
            );
            break e;
          }
          ae && ae(e, C, j), e === "focusout" && j && C.type === "number" && j.memoizedProps.value != null && Gr(C, "number", C.value);
        }
        switch (ae = j ? Ni(j) : window, e) {
          case "focusin":
            (pd(ae) || ae.contentEditable === "true") && (La = ae, ru = j, qi = null);
            break;
          case "focusout":
            qi = ru = La = null;
            break;
          case "mousedown":
            uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            uu = !1, kd(B, a, R);
            break;
          case "selectionchange":
            if (Yy) break;
          case "keydown":
          case "keyup":
            kd(B, a, R);
        }
        var ye;
        if (au)
          e: {
            switch (e) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          $a ? fd(e, a) && (ze = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ze = "onCompositionStart");
        ze && (sd && a.locale !== "ko" && ($a || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && $a && (ye = id()) : (Mn = R, Fr = "value" in Mn ? Mn.value : Mn.textContent, $a = !0)), ae = Qo(j, ze), 0 < ae.length && (ze = new rd(
          ze,
          e,
          null,
          a,
          R
        ), B.push({ event: ze, listeners: ae }), ye ? ze.data = ye : (ye = md(a), ye !== null && (ze.data = ye)))), (ye = Ay ? jy(e, a) : My(e, a)) && (ze = Qo(j, "onBeforeInput"), 0 < ze.length && (ae = new rd(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          R
        ), B.push({
          event: ae,
          listeners: ze
        }), ae.data = ye)), Sg(
          B,
          e,
          j,
          a,
          R
        );
      }
      Fm(B, t);
    });
  }
  function ml(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Qo(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Di(e, a), u != null && l.unshift(
        ml(e, u, c)
      ), u = Di(e, t), u != null && l.push(
        ml(e, u, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function kg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ep(e, t, a, l, u) {
    for (var c = t._reactName, p = []; a !== null && a !== l; ) {
      var y = a, b = y.alternate, j = y.stateNode;
      if (y = y.tag, b !== null && b === l) break;
      y !== 5 && y !== 26 && y !== 27 || j === null || (b = j, u ? (j = Di(a, c), j != null && p.unshift(
        ml(a, j, b)
      )) : u || (j = Di(a, c), j != null && p.push(
        ml(a, j, b)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Tg = /\r\n?/g, Eg = /\u0000|\uFFFD/g;
  function tp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tg, `
`).replace(Eg, "");
  }
  function np(e, t) {
    return t = tp(t), tp(e) === t;
  }
  function Be(e, t, a, l, u, c) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ha(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ha(e, "" + l);
        break;
      case "className":
        Wl(e, "class", l);
        break;
      case "tabIndex":
        Wl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wl(e, a, l);
        break;
      case "style":
        td(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Wl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Fl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (t !== "input" && Be(e, t, "name", u.name, u, null), Be(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Be(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Be(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Be(e, t, "encType", u.encType, u, null), Be(e, t, "method", u.method, u, null), Be(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Fl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Fl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), Jl(e, "popover", l);
        break;
      case "xlinkActuate":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Jl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ty.get(a) || a, Jl(e, a, l));
    }
  }
  function Ns(e, t, a, l, u, c) {
    switch (a) {
      case "style":
        td(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ha(e, l) : (typeof l == "number" || typeof l == "bigint") && Ha(e, "" + l);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Jl(e, a, l);
          }
    }
  }
  function ht(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Se("error", e), Se("load", e);
        var l = !1, u = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var p = a[c];
            if (p != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Be(e, t, c, p, a, null);
              }
          }
        u && Be(e, t, "srcSet", a.srcSet, a, null), l && Be(e, t, "src", a.src, a, null);
        return;
      case "input":
        Se("invalid", e);
        var y = c = p = u = null, b = null, j = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var R = a[l];
            if (R != null)
              switch (l) {
                case "name":
                  u = R;
                  break;
                case "type":
                  p = R;
                  break;
                case "checked":
                  b = R;
                  break;
                case "defaultChecked":
                  j = R;
                  break;
                case "value":
                  c = R;
                  break;
                case "defaultValue":
                  y = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Be(e, t, l, R, a, null);
              }
          }
        Pc(
          e,
          c,
          y,
          b,
          j,
          p,
          u,
          !1
        );
        return;
      case "select":
        Se("invalid", e), l = p = c = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (y = a[u], y != null))
            switch (u) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                l = y;
              default:
                Be(e, t, u, y, a, null);
            }
        t = c, a = p, e.multiple = !!l, t != null ? Ba(e, !!l, t, !1) : a != null && Ba(e, !!l, a, !0);
        return;
      case "textarea":
        Se("invalid", e), c = u = l = null;
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null))
            switch (p) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(r(91));
                break;
              default:
                Be(e, t, p, y, a, null);
            }
        Ic(e, l, u, c);
        return;
      case "option":
        for (b in a)
          a.hasOwnProperty(b) && (l = a[b], l != null) && (b === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Be(e, t, b, l, a, null));
        return;
      case "dialog":
        Se("beforetoggle", e), Se("toggle", e), Se("cancel", e), Se("close", e);
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < fl.length; l++)
          Se(fl[l], e);
        break;
      case "image":
        Se("error", e), Se("load", e);
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Se("error", e), Se("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in a)
          if (a.hasOwnProperty(j) && (l = a[j], l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Be(e, t, j, l, a, null);
            }
        return;
      default:
        if (Qr(t)) {
          for (R in a)
            a.hasOwnProperty(R) && (l = a[R], l !== void 0 && Ns(
              e,
              t,
              R,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && (l = a[y], l != null && Be(e, t, y, l, a, null));
  }
  function Ag(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, c = null, p = null, y = null, b = null, j = null, R = null;
        for (O in a) {
          var B = a[O];
          if (a.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = B;
              default:
                l.hasOwnProperty(O) || Be(e, t, O, null, l, B);
            }
        }
        for (var C in l) {
          var O = l[C];
          if (B = a[C], l.hasOwnProperty(C) && (O != null || B != null))
            switch (C) {
              case "type":
                c = O;
                break;
              case "name":
                u = O;
                break;
              case "checked":
                j = O;
                break;
              case "defaultChecked":
                R = O;
                break;
              case "value":
                p = O;
                break;
              case "defaultValue":
                y = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== B && Be(
                  e,
                  t,
                  C,
                  O,
                  l,
                  B
                );
            }
        }
        Vr(
          e,
          p,
          y,
          b,
          j,
          R,
          c,
          u
        );
        return;
      case "select":
        O = p = y = C = null;
        for (c in a)
          if (b = a[c], a.hasOwnProperty(c) && b != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                O = b;
              default:
                l.hasOwnProperty(c) || Be(
                  e,
                  t,
                  c,
                  null,
                  l,
                  b
                );
            }
        for (u in l)
          if (c = l[u], b = a[u], l.hasOwnProperty(u) && (c != null || b != null))
            switch (u) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== b && Be(
                  e,
                  t,
                  u,
                  c,
                  l,
                  b
                );
            }
        t = y, a = p, l = O, C != null ? Ba(e, !!a, C, !1) : !!l != !!a && (t != null ? Ba(e, !!a, t, !0) : Ba(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (y in a)
          if (u = a[y], a.hasOwnProperty(y) && u != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, y, null, l, u);
            }
        for (p in l)
          if (u = l[p], c = a[p], l.hasOwnProperty(p) && (u != null || c != null))
            switch (p) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                O = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && Be(e, t, p, u, l, c);
            }
        Fc(e, C, O);
        return;
      case "option":
        for (var I in a)
          C = a[I], a.hasOwnProperty(I) && C != null && !l.hasOwnProperty(I) && (I === "selected" ? e.selected = !1 : Be(
            e,
            t,
            I,
            null,
            l,
            C
          ));
        for (b in l)
          C = l[b], O = a[b], l.hasOwnProperty(b) && C !== O && (C != null || O != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Be(
            e,
            t,
            b,
            C,
            l,
            O
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in a)
          C = a[se], a.hasOwnProperty(se) && C != null && !l.hasOwnProperty(se) && Be(e, t, se, null, l, C);
        for (j in l)
          if (C = l[j], O = a[j], l.hasOwnProperty(j) && C !== O && (C != null || O != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  j,
                  C,
                  l,
                  O
                );
            }
        return;
      default:
        if (Qr(t)) {
          for (var He in a)
            C = a[He], a.hasOwnProperty(He) && C !== void 0 && !l.hasOwnProperty(He) && Ns(
              e,
              t,
              He,
              void 0,
              l,
              C
            );
          for (R in l)
            C = l[R], O = a[R], !l.hasOwnProperty(R) || C === O || C === void 0 && O === void 0 || Ns(
              e,
              t,
              R,
              C,
              l,
              O
            );
          return;
        }
    }
    for (var T in a)
      C = a[T], a.hasOwnProperty(T) && C != null && !l.hasOwnProperty(T) && Be(e, t, T, null, l, C);
    for (B in l)
      C = l[B], O = a[B], !l.hasOwnProperty(B) || C === O || C == null && O == null || Be(e, t, B, C, l, O);
  }
  function ap(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function jg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var u = a[l], c = u.transferSize, p = u.initiatorType, y = u.duration;
        if (c && y && ap(p)) {
          for (p = 0, y = u.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], j = b.startTime;
            if (j > y) break;
            var R = b.transferSize, B = b.initiatorType;
            R && ap(B) && (b = b.responseEnd, p += R * (b < y ? 1 : (y - j) / (b - j)));
          }
          if (--l, t += 8 * (c + p) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ds = null, Zs = null;
  function Ko(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ip(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Rs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Us = null;
  function Mg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Us ? !1 : (Us = e, !0) : (Us = null, !1);
  }
  var op = typeof setTimeout == "function" ? setTimeout : void 0, Cg = typeof clearTimeout == "function" ? clearTimeout : void 0, rp = typeof Promise == "function" ? Promise : void 0, Og = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp < "u" ? function(e) {
    return rp.resolve(null).then(e).catch(Ng);
  } : op;
  function Ng(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qn(e) {
    return e === "head";
  }
  function up(e, t) {
    var a = t, l = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(u), yi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          pl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, pl(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[Oi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && pl(e.ownerDocument.body);
      a = u;
    } while (a);
    yi(t);
  }
  function sp(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function Ys(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ys(a), $r(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Dg(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Oi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Zg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function cp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Rg(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Xs = null;
  function dp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Gt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function fp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function mp(e, t, a) {
    switch (t = Ko(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function pl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    $r(e);
  }
  var Qt = /* @__PURE__ */ new Map(), pp = /* @__PURE__ */ new Set();
  function Jo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Tn = Z.d;
  Z.d = {
    f: Ug,
    r: Yg,
    D: Bg,
    C: Hg,
    L: Xg,
    m: qg,
    X: Lg,
    S: $g,
    M: Vg
  };
  function Ug() {
    var e = Tn.f(), t = Ho();
    return e || t;
  }
  function Yg(e) {
    var t = Ra(e);
    t !== null && t.tag === 5 && t.type === "form" ? Cf(t) : Tn.r(e);
  }
  var pi = typeof document > "u" ? null : document;
  function hp(e, t, a) {
    var l = pi;
    if (l && typeof t == "string" && t) {
      var u = Bt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), pp.has(u) || (pp.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), ht(t, "link", e), st(t), l.head.appendChild(t)));
    }
  }
  function Bg(e) {
    Tn.D(e), hp("dns-prefetch", e, null);
  }
  function Hg(e, t) {
    Tn.C(e, t), hp("preconnect", e, t);
  }
  function Xg(e, t, a) {
    Tn.L(e, t, a);
    var l = pi;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Bt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Bt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Bt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Bt(e) + '"]';
      var c = u;
      switch (t) {
        case "style":
          c = hi(e);
          break;
        case "script":
          c = vi(e);
      }
      Qt.has(c) || (e = w(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Qt.set(c, e), l.querySelector(u) !== null || t === "style" && l.querySelector(hl(c)) || t === "script" && l.querySelector(vl(c)) || (t = l.createElement("link"), ht(t, "link", e), st(t), l.head.appendChild(t)));
    }
  }
  function qg(e, t) {
    Tn.m(e, t);
    var a = pi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Bt(l) + '"][href="' + Bt(e) + '"]', c = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = vi(e);
      }
      if (!Qt.has(c) && (e = w({ rel: "modulepreload", href: e }, t), Qt.set(c, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vl(c)))
              return;
        }
        l = a.createElement("link"), ht(l, "link", e), st(l), a.head.appendChild(l);
      }
    }
  }
  function $g(e, t, a) {
    Tn.S(e, t, a);
    var l = pi;
    if (l && e) {
      var u = Ua(l).hoistableStyles, c = hi(e);
      t = t || "default";
      var p = u.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          hl(c)
        ))
          y.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Qt.get(c)) && qs(e, a);
          var b = p = l.createElement("link");
          st(b), ht(b, "link", e), b._p = new Promise(function(j, R) {
            b.onload = j, b.onerror = R;
          }), b.addEventListener("load", function() {
            y.loading |= 1;
          }), b.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Wo(p, t, l);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: y
        }, u.set(c, p);
      }
    }
  }
  function Lg(e, t) {
    Tn.X(e, t);
    var a = pi;
    if (a && e) {
      var l = Ua(a).hoistableScripts, u = vi(e), c = l.get(u);
      c || (c = a.querySelector(vl(u)), c || (e = w({ src: e, async: !0 }, t), (t = Qt.get(u)) && $s(e, t), c = a.createElement("script"), st(c), ht(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function Vg(e, t) {
    Tn.M(e, t);
    var a = pi;
    if (a && e) {
      var l = Ua(a).hoistableScripts, u = vi(e), c = l.get(u);
      c || (c = a.querySelector(vl(u)), c || (e = w({ src: e, async: !0, type: "module" }, t), (t = Qt.get(u)) && $s(e, t), c = a.createElement("script"), st(c), ht(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function vp(e, t, a, l) {
    var u = (u = pe.current) ? Jo(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = hi(a.href), a = Ua(
          u
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = hi(a.href);
          var c = Ua(
            u
          ).hoistableStyles, p = c.get(e);
          if (p || (u = u.ownerDocument || u, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = u.querySelector(
            hl(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Qt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qt.set(e, a), c || Gg(
            u,
            e,
            a,
            p.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return p;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = vi(a), a = Ua(
          u
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function hi(e) {
    return 'href="' + Bt(e) + '"';
  }
  function hl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function yp(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Gg(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ht(t, "link", a), st(t), e.head.appendChild(t));
  }
  function vi(e) {
    return '[src="' + Bt(e) + '"]';
  }
  function vl(e) {
    return "script[async]" + e;
  }
  function gp(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Bt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, st(l), l;
          var u = w({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), st(l), ht(l, "style", u), Wo(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = hi(a.href);
          var c = e.querySelector(
            hl(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, st(c), c;
          l = yp(a), (u = Qt.get(u)) && qs(l, u), c = (e.ownerDocument || e).createElement("link"), st(c);
          var p = c;
          return p._p = new Promise(function(y, b) {
            p.onload = y, p.onerror = b;
          }), ht(c, "link", l), t.state.loading |= 4, Wo(c, a.precedence, e), t.instance = c;
        case "script":
          return c = vi(a.src), (u = e.querySelector(
            vl(c)
          )) ? (t.instance = u, st(u), u) : (l = a, (u = Qt.get(c)) && (l = w({}, a), $s(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), st(u), ht(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Wo(l, a.precedence, e));
    return t.instance;
  }
  function Wo(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, c = u, p = 0; p < l.length; p++) {
      var y = l[p];
      if (y.dataset.precedence === t) c = y;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function $s(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Po = null;
  function _p(e, t, a) {
    if (Po === null) {
      var l = /* @__PURE__ */ new Map(), u = Po = /* @__PURE__ */ new Map();
      u.set(a, l);
    } else
      u = Po, l = u.get(a), l || (l = /* @__PURE__ */ new Map(), u.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Oi] || c[dt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(c) : l.set(p, [c]);
      }
    }
    return l;
  }
  function bp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Qg(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Sp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Kg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = hi(l.href), c = t.querySelector(
          hl(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Fo.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, st(c);
          return;
        }
        c = t.ownerDocument || t, l = yp(l), (u = Qt.get(u)) && qs(l, u), c = c.createElement("link"), st(c);
        var p = c;
        p._p = new Promise(function(y, b) {
          p.onload = y, p.onerror = b;
        }), ht(c, "link", l), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Fo.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ls = 0;
  function Jg(e, t) {
    return e.stylesheets && e.count === 0 && er(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && er(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ls === 0 && (Ls = 62500 * jg());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && er(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Ls ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Fo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) er(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Io = null;
  function er(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Io = /* @__PURE__ */ new Map(), t.forEach(Wg, e), Io = null, Fo.call(e));
  }
  function Wg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Io.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Io.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var p = u[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), l = p);
        }
        l && a.set(null, l);
      }
      u = t.instance, p = u.getAttribute("data-precedence"), c = a.get(p) || l, c === l && a.set(null, u), a.set(p, u), this.count++, l = Fo.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var yl = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0
  };
  function Pg(e, t, a, l, u, c, p, y, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Br(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Br(0), this.hiddenUpdates = Br(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wp(e, t, a, l, u, c, p, y, b, j, R, B) {
    return e = new Pg(
      e,
      t,
      a,
      p,
      b,
      j,
      R,
      B,
      y
    ), t = 1, c === !0 && (t |= 24), c = Ot(3, null, null, t), e.current = c, c.stateNode = e, t = zu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Eu(c), e;
  }
  function zp(e) {
    return e ? (e = Qa, e) : Qa;
  }
  function xp(e, t, a, l, u, c) {
    u = zp(u), l.context === null ? l.context = u : l.pendingContext = u, l = Rn(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Un(e, l, t), a !== null && (At(a, e, t), Ji(a, e, t));
  }
  function kp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Vs(e, t) {
    kp(e, t), (e = e.alternate) && kp(e, t);
  }
  function Tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = da(e, 67108864);
      t !== null && At(t, e, 67108864), Vs(e, 67108864);
    }
  }
  function Ep(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ut();
      t = Hr(t);
      var a = da(e, t);
      a !== null && At(a, e, t), Vs(e, t);
    }
  }
  var tr = !0;
  function Fg(e, t, a, l) {
    var u = k.T;
    k.T = null;
    var c = Z.p;
    try {
      Z.p = 2, Gs(e, t, a, l);
    } finally {
      Z.p = c, k.T = u;
    }
  }
  function Ig(e, t, a, l) {
    var u = k.T;
    k.T = null;
    var c = Z.p;
    try {
      Z.p = 8, Gs(e, t, a, l);
    } finally {
      Z.p = c, k.T = u;
    }
  }
  function Gs(e, t, a, l) {
    if (tr) {
      var u = Qs(l);
      if (u === null)
        Os(
          e,
          t,
          l,
          nr,
          a
        ), jp(e, l);
      else if (t_(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (jp(e, l), t & 4 && -1 < e_.indexOf(e)) {
        for (; u !== null; ) {
          var c = Ra(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = oa(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var b = 1 << 31 - ne(p);
                      y.entanglements[1] |= b, p &= ~b;
                    }
                    un(c), (Ne & 6) === 0 && (Yo = ot() + 500, dl(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = da(c, 2), y !== null && At(y, c, 2), Ho(), Vs(c, 2);
            }
          if (c = Qs(l), c === null && Os(
            e,
            t,
            l,
            nr,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && l.stopPropagation();
      } else
        Os(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Qs(e) {
    return e = Jr(e), Ks(e);
  }
  var nr = null;
  function Ks(e) {
    if (nr = null, e = Za(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return nr = e, null;
  }
  function Ap(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rr()) {
          case ql:
            return 2;
          case $l:
            return 8;
          case Oa:
          case Ur:
            return 32;
          case Ll:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Js = !1, Kn = null, Jn = null, Wn = null, gl = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Map(), Pn = [], e_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _l.delete(t.pointerId);
    }
  }
  function bl(e, t, a, l, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = Ra(t), t !== null && Tp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function t_(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return Kn = bl(
          Kn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return Jn = bl(
          Jn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return Wn = bl(
          Wn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return gl.set(
          c,
          bl(
            gl.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, _l.set(
          c,
          bl(
            _l.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Mp(e) {
    var t = Za(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, $c(e.priority, function() {
              Ep(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, $c(e.priority, function() {
              Ep(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Qs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Kr = l, a.target.dispatchEvent(l), Kr = null;
      } else
        return t = Ra(a), t !== null && Tp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Cp(e, t, a) {
    ar(e) && a.delete(t);
  }
  function n_() {
    Js = !1, Kn !== null && ar(Kn) && (Kn = null), Jn !== null && ar(Jn) && (Jn = null), Wn !== null && ar(Wn) && (Wn = null), gl.forEach(Cp), _l.forEach(Cp);
  }
  function ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Js || (Js = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      n_
    )));
  }
  var lr = null;
  function Op(e) {
    lr !== e && (lr = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        lr === e && (lr = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (Ks(l || a) === null)
              continue;
            break;
          }
          var c = Ra(a);
          c !== null && (e.splice(t, 3), t -= 3, Qu(
            c,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function yi(e) {
    function t(b) {
      return ir(b, e);
    }
    Kn !== null && ir(Kn, e), Jn !== null && ir(Jn, e), Wn !== null && ir(Wn, e), gl.forEach(t), _l.forEach(t);
    for (var a = 0; a < Pn.length; a++) {
      var l = Pn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Pn.length && (a = Pn[0], a.blockedOn === null); )
      Mp(a), a.blockedOn === null && Pn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], c = a[l + 1], p = u[wt] || null;
        if (typeof c == "function")
          p || Op(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, p = c[wt] || null)
              y = p.formAction;
            else if (Ks(u) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), Op(a);
        }
      }
  }
  function Np() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(p) {
            return u = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  or.prototype.render = Ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, l = Ut();
    xp(a, l, e, t, null, null);
  }, or.prototype.unmount = Ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xp(e.current, 2, null, e, null, null), Ho(), t[Da] = null;
    }
  };
  function or(e) {
    this._internalRoot = e;
  }
  or.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = qc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Pn.length && t !== 0 && t < Pn[a].priority; a++) ;
      Pn.splice(a, 0, e), a === 0 && Mp(e);
    }
  };
  var Dp = i.version;
  if (Dp !== "19.2.8")
    throw Error(
      r(
        527,
        Dp,
        "19.2.8"
      )
    );
  Z.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = h(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var a_ = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        la = rr.inject(
          a_
        ), _t = rr;
      } catch {
      }
  }
  return wl.createRoot = function(e, t) {
    if (!s(e)) throw Error(r(299));
    var a = !1, l = "", u = Xf, c = qf, p = $f;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = wp(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      u,
      c,
      p,
      Np
    ), e[Da] = t.current, Cs(e), new Ws(t);
  }, wl.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(r(299));
    var l = !1, u = "", c = Xf, p = qf, y = $f, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = wp(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      b,
      c,
      p,
      y,
      Np
    ), t.context = zp(null), a = t.current, l = Ut(), l = Hr(l), u = Rn(l), u.callback = null, Un(a, u, l), a = l, t.current.lanes = a, Ci(t, a), un(t), e[Da] = t.current, Cs(e), new or(t);
  }, wl.version = "19.2.8", wl;
}
var Lp;
function m_() {
  if (Lp) return Fs.exports;
  Lp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Fs.exports = f_(), Fs.exports;
}
var p_ = m_();
const h_ = /* @__PURE__ */ Bh(p_);
var F = wc();
const Ar = /* @__PURE__ */ Bh(F);
const Hh = (...n) => n.filter((i, o, r) => !!i && i.trim() !== "" && r.indexOf(i) === o).join(" ").trim();
const v_ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const y_ = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, r) => r ? r.toUpperCase() : o.toLowerCase()
);
const Vp = (n) => {
  const i = y_(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var g_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const __ = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const b_ = F.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: d,
    iconNode: f,
    ...m
  }, v) => F.createElement(
    "svg",
    {
      ref: v,
      ...g_,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: r ? Number(o) * 24 / Number(i) : o,
      className: Hh("lucide", s),
      ...!d && !__(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([h, _]) => F.createElement(h, _)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const Ze = (n, i) => {
  const o = F.forwardRef(
    ({ className: r, ...s }, d) => F.createElement(b_, {
      ref: d,
      iconNode: i,
      className: Hh(
        `lucide-${v_(Vp(n))}`,
        `lucide-${n}`,
        r
      ),
      ...s
    })
  );
  return o.displayName = Vp(n), o;
};
const S_ = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Xh = Ze("arrow-down-to-line", S_);
const w_ = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Gp = Ze("arrow-down", w_);
const z_ = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], x_ = Ze("arrow-up-from-line", z_);
const k_ = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Qp = Ze("arrow-up", k_);
const T_ = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], E_ = Ze("battery", T_);
const A_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], j_ = Ze("check", A_);
const M_ = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], C_ = Ze("clock-3", M_);
const O_ = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], N_ = Ze("droplets", O_);
const D_ = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Z_ = Ze("eraser", D_);
const R_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], U_ = Ze("history", R_);
const Y_ = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Kp = Ze("house", Y_);
const B_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Jp = Ze("loader-circle", B_);
const H_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], X_ = Ze("lock-open", H_);
const q_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], qh = Ze("lock", q_);
const $_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], L_ = Ze("map-pin", $_);
const V_ = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], G_ = Ze("pause", V_);
const Q_ = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], $h = Ze("play", Q_);
const K_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Wp = Ze("plus", K_);
const J_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], zc = Ze("rotate-ccw", J_);
const W_ = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], P_ = Ze("scan-line", W_);
const F_ = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], I_ = Ze("sliders-horizontal", F_);
const e0 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], mc = Ze("sparkles", e0);
const t0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], n0 = Ze("square", t0);
const a0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], i0 = Ze("timer", a0);
const l0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], _r = Ze("trash-2", l0);
const o0 = [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
], Pp = Ze("waves", o0);
const r0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Fp = Ze("wind", r0);
const u0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xc = Ze("x", u0);
const s0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], c0 = Ze("zoom-in", s0);
const d0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], f0 = Ze("zoom-out", d0);
var Ip;
function Y(n, i, o) {
  function r(m, v) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: v,
        constr: f,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n))
      return;
    m._zod.traits.add(n), i(m, v);
    const h = f.prototype, _ = Object.keys(h);
    for (let w = 0; w < _.length; w++) {
      const z = _[w];
      z in m || (m[z] = h[z].bind(m));
    }
  }
  const s = o?.Parent ?? Object;
  class d extends s {
  }
  Object.defineProperty(d, "name", { value: n });
  function f(m) {
    var v;
    const h = o?.Parent ? new d() : this;
    r(h, m), (v = h._zod).deferred ?? (v.deferred = []);
    for (const _ of h._zod.deferred)
      _();
    return h;
  }
  return Object.defineProperty(f, "init", { value: r }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Si extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Lh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Ip = globalThis).__zod_globalConfig ?? (Ip.__zod_globalConfig = {});
const kc = globalThis.__zod_globalConfig;
function Ea(n) {
  return kc;
}
function Vh(n) {
  const i = Object.values(n).filter((r) => typeof r == "number");
  return Object.entries(n).filter(([r, s]) => i.indexOf(+r) === -1).map(([r, s]) => s);
}
function pc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Tc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Ec(n) {
  return n == null;
}
function Ac(n) {
  const i = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, o);
}
function m0(n, i) {
  const o = n / i, r = Math.round(o), s = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - r) < s ? 0 : o - r;
}
const eh = /* @__PURE__ */ Symbol("evaluating");
function Xe(n, i, o) {
  let r;
  Object.defineProperty(n, i, {
    get() {
      if (r !== eh)
        return r === void 0 && (r = eh, r = o()), r;
    },
    set(s) {
      Object.defineProperty(n, i, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ja(n, i, o) {
  Object.defineProperty(n, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ta(...n) {
  const i = {};
  for (const o of n) {
    const r = Object.getOwnPropertyDescriptors(o);
    Object.assign(i, r);
  }
  return Object.defineProperties({}, i);
}
function th(n) {
  return JSON.stringify(n);
}
function p0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Gh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function br(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const h0 = /* @__PURE__ */ Tc(() => {
  if (kc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Ol(n) {
  if (br(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const o = i.prototype;
  return !(br(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Qh(n) {
  return Ol(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const v0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function zi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function na(n, i, o) {
  const r = new n._zod.constr(i ?? n._zod.def);
  return (!i || o?.parent) && (r._zod.parent = n), r;
}
function re(n) {
  const i = n;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function y0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const g0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function _0(n, i) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = ta(n._zod.def, {
    get shape() {
      const f = {};
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (f[m] = o.shape[m]);
      }
      return ja(this, "shape", f), f;
    },
    checks: []
  });
  return na(n, d);
}
function b0(n, i) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = ta(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete f[m];
      }
      return ja(this, "shape", f), f;
    },
    checks: []
  });
  return na(n, d);
}
function S0(n, i) {
  if (!Ol(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const d = n._zod.def.shape;
    for (const f in i)
      if (Object.getOwnPropertyDescriptor(d, f) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = ta(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape, ...i };
      return ja(this, "shape", d), d;
    }
  });
  return na(n, s);
}
function w0(n, i) {
  if (!Ol(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = ta(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i };
      return ja(this, "shape", r), r;
    }
  });
  return na(n, o);
}
function z0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const o = ta(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i._zod.def.shape };
      return ja(this, "shape", r), r;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return na(n, o);
}
function x0(n, i, o) {
  const s = i._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const f = ta(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, v = { ...m };
      if (o)
        for (const h in o) {
          if (!(h in m))
            throw new Error(`Unrecognized key: "${h}"`);
          o[h] && (v[h] = n ? new n({
            type: "optional",
            innerType: m[h]
          }) : m[h]);
        }
      else
        for (const h in m)
          v[h] = n ? new n({
            type: "optional",
            innerType: m[h]
          }) : m[h];
      return ja(this, "shape", v), v;
    },
    checks: []
  });
  return na(i, f);
}
function k0(n, i, o) {
  const r = ta(i._zod.def, {
    get shape() {
      const s = i._zod.def.shape, d = { ...s };
      if (o)
        for (const f in o) {
          if (!(f in d))
            throw new Error(`Unrecognized key: "${f}"`);
          o[f] && (d[f] = new n({
            type: "nonoptional",
            innerType: s[f]
          }));
        }
      else
        for (const f in s)
          d[f] = new n({
            type: "nonoptional",
            innerType: s[f]
          });
      return ja(this, "shape", d), d;
    }
  });
  return na(i, r);
}
function gi(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function T0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue === !1)
      return !0;
  return !1;
}
function Kh(n, i) {
  return i.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(n), o;
  });
}
function ur(n) {
  return typeof n == "string" ? n : n?.message;
}
function Aa(n, i, o) {
  const r = n.message ? n.message : ur(n.inst?._zod.def?.error?.(n)) ?? ur(i?.error?.(n)) ?? ur(o.customError?.(n)) ?? ur(o.localeError?.(n)) ?? "Invalid input", { inst: s, continue: d, input: f, ...m } = n;
  return m.path ?? (m.path = []), m.message = r, i?.reportInput && (m.input = f), m;
}
function jc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Nl(...n) {
  const [i, o, r] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: o,
    inst: r
  } : { ...i };
}
const Jh = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, pc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Wh = Y("$ZodError", Jh), Ph = Y("$ZodError", Jh, { Parent: Error });
function E0(n, i = (o) => o.message) {
  const o = {}, r = [];
  for (const s of n.issues)
    s.path.length > 0 ? (o[s.path[0]] = o[s.path[0]] || [], o[s.path[0]].push(i(s))) : r.push(i(s));
  return { formErrors: r, fieldErrors: o };
}
function A0(n, i = (o) => o.message) {
  const o = { _errors: [] }, r = (s, d = []) => {
    for (const f of s.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((m) => r({ issues: m }, [...d, ...f.path]));
      else if (f.code === "invalid_key")
        r({ issues: f.issues }, [...d, ...f.path]);
      else if (f.code === "invalid_element")
        r({ issues: f.issues }, [...d, ...f.path]);
      else {
        const m = [...d, ...f.path];
        if (m.length === 0)
          o._errors.push(i(f));
        else {
          let v = o, h = 0;
          for (; h < m.length; ) {
            const _ = m[h];
            h === m.length - 1 ? (v[_] = v[_] || { _errors: [] }, v[_]._errors.push(i(f))) : v[_] = v[_] || { _errors: [] }, v = v[_], h++;
          }
        }
      }
  };
  return r(n), o;
}
const Mc = (n) => (i, o, r, s) => {
  const d = r ? { ...r, async: !1 } : { async: !1 }, f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise)
    throw new Si();
  if (f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((v) => Aa(v, d, Ea())));
    throw Gh(m, s?.callee), m;
  }
  return f.value;
}, Cc = (n) => async (i, o, r, s) => {
  const d = r ? { ...r, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((v) => Aa(v, d, Ea())));
    throw Gh(m, s?.callee), m;
  }
  return f.value;
}, jr = (n) => (i, o, r) => {
  const s = r ? { ...r, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, s);
  if (d instanceof Promise)
    throw new Si();
  return d.issues.length ? {
    success: !1,
    error: new (n ?? Wh)(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, j0 = /* @__PURE__ */ jr(Ph), Mr = (n) => async (i, o, r) => {
  const s = r ? { ...r, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: o, issues: [] }, s);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new n(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, M0 = /* @__PURE__ */ Mr(Ph), C0 = (n) => (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Mc(n)(i, o, s);
}, O0 = (n) => (i, o, r) => Mc(n)(i, o, r), N0 = (n) => async (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Cc(n)(i, o, s);
}, D0 = (n) => async (i, o, r) => Cc(n)(i, o, r), Z0 = (n) => (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return jr(n)(i, o, s);
}, R0 = (n) => (i, o, r) => jr(n)(i, o, r), U0 = (n) => async (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Mr(n)(i, o, s);
}, Y0 = (n) => async (i, o, r) => Mr(n)(i, o, r), B0 = /^[cC][0-9a-z]{6,}$/, H0 = /^[0-9a-z]+$/, X0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, q0 = /^[0-9a-vA-V]{20}$/, $0 = /^[A-Za-z0-9]{27}$/, L0 = /^[a-zA-Z0-9_-]{21}$/, V0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, G0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, nh = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Q0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, K0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function J0() {
  return new RegExp(K0, "u");
}
const W0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, P0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, F0 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, I0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, eb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Fh = /^[A-Za-z0-9_-]*$/, tb = /^https?$/, nb = /^\+[1-9]\d{6,14}$/, Ih = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ab = /* @__PURE__ */ new RegExp(`^${Ih}$`);
function ev(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ib(n) {
  return new RegExp(`^${ev(n)}$`);
}
function lb(n) {
  const i = ev({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${i}(?:${o.join("|")})`;
  return new RegExp(`^${Ih}T(?:${r})$`);
}
const ob = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, rb = /^-?\d+$/, ub = /^-?\d+(?:\.\d+)?$/, sb = /^(?:true|false)$/i, cb = /^[^A-Z]*$/, db = /^[^a-z]*$/, jt = /* @__PURE__ */ Y("$ZodCheck", (n, i) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = i, (o = n._zod).onattach ?? (o.onattach = []);
}), tv = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, nv = /* @__PURE__ */ Y("$ZodCheckLessThan", (n, i) => {
  jt.init(n, i);
  const o = tv[typeof i.value];
  n._zod.onattach.push((r) => {
    const s = r._zod.bag, d = (i.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < d && (i.inclusive ? s.maximum = i.value : s.exclusiveMaximum = i.value);
  }), n._zod.check = (r) => {
    (i.inclusive ? r.value <= i.value : r.value < i.value) || r.issues.push({
      origin: o,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: r.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), av = /* @__PURE__ */ Y("$ZodCheckGreaterThan", (n, i) => {
  jt.init(n, i);
  const o = tv[typeof i.value];
  n._zod.onattach.push((r) => {
    const s = r._zod.bag, d = (i.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > d && (i.inclusive ? s.minimum = i.value : s.exclusiveMinimum = i.value);
  }), n._zod.check = (r) => {
    (i.inclusive ? r.value >= i.value : r.value > i.value) || r.issues.push({
      origin: o,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: r.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), fb = /* @__PURE__ */ Y("$ZodCheckMultipleOf", (n, i) => {
  jt.init(n, i), n._zod.onattach.push((o) => {
    var r;
    (r = o._zod.bag).multipleOf ?? (r.multipleOf = i.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % i.value === BigInt(0) : m0(o.value, i.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), mb = /* @__PURE__ */ Y("$ZodCheckNumberFormat", (n, i) => {
  jt.init(n, i), i.format = i.format || "float64";
  const o = i.format?.includes("int"), r = o ? "int" : "number", [s, d] = g0[i.format];
  n._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = d, o && (m.pattern = rb);
  }), n._zod.check = (f) => {
    const m = f.value;
    if (o) {
      if (!Number.isInteger(m)) {
        f.issues.push({
          expected: r,
          format: i.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? f.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !i.abort
        }) : f.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    m < s && f.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    }), m > d && f.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: d,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    });
  };
}), pb = /* @__PURE__ */ Y("$ZodCheckMaxLength", (n, i) => {
  var o;
  jt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ec(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < s && (r._zod.bag.maximum = i.maximum);
  }), n._zod.check = (r) => {
    const s = r.value;
    if (s.length <= i.maximum)
      return;
    const f = jc(s);
    r.issues.push({
      origin: f,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), hb = /* @__PURE__ */ Y("$ZodCheckMinLength", (n, i) => {
  var o;
  jt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ec(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > s && (r._zod.bag.minimum = i.minimum);
  }), n._zod.check = (r) => {
    const s = r.value;
    if (s.length >= i.minimum)
      return;
    const f = jc(s);
    r.issues.push({
      origin: f,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), vb = /* @__PURE__ */ Y("$ZodCheckLengthEquals", (n, i) => {
  var o;
  jt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ec(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.minimum = i.length, s.maximum = i.length, s.length = i.length;
  }), n._zod.check = (r) => {
    const s = r.value, d = s.length;
    if (d === i.length)
      return;
    const f = jc(s), m = d > i.length;
    r.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Cr = /* @__PURE__ */ Y("$ZodCheckStringFormat", (n, i) => {
  var o, r;
  jt.init(n, i), n._zod.onattach.push((s) => {
    const d = s._zod.bag;
    d.format = i.format, i.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(i.pattern));
  }), i.pattern ? (o = n._zod).check ?? (o.check = (s) => {
    i.pattern.lastIndex = 0, !i.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: s.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: n,
      continue: !i.abort
    });
  }) : (r = n._zod).check ?? (r.check = () => {
  });
}), yb = /* @__PURE__ */ Y("$ZodCheckRegex", (n, i) => {
  Cr.init(n, i), n._zod.check = (o) => {
    i.pattern.lastIndex = 0, !i.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: i.pattern.toString(),
      inst: n,
      continue: !i.abort
    });
  };
}), gb = /* @__PURE__ */ Y("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = cb), Cr.init(n, i);
}), _b = /* @__PURE__ */ Y("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = db), Cr.init(n, i);
}), bb = /* @__PURE__ */ Y("$ZodCheckIncludes", (n, i) => {
  jt.init(n, i);
  const o = zi(i.includes), r = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${o}` : o);
  i.pattern = r, n._zod.onattach.push((s) => {
    const d = s._zod.bag;
    d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(r);
  }), n._zod.check = (s) => {
    s.value.includes(i.includes, i.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: s.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Sb = /* @__PURE__ */ Y("$ZodCheckStartsWith", (n, i) => {
  jt.init(n, i);
  const o = new RegExp(`^${zi(i.prefix)}.*`);
  i.pattern ?? (i.pattern = o), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), n._zod.check = (r) => {
    r.value.startsWith(i.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), wb = /* @__PURE__ */ Y("$ZodCheckEndsWith", (n, i) => {
  jt.init(n, i);
  const o = new RegExp(`.*${zi(i.suffix)}$`);
  i.pattern ?? (i.pattern = o), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), n._zod.check = (r) => {
    r.value.endsWith(i.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), zb = /* @__PURE__ */ Y("$ZodCheckOverwrite", (n, i) => {
  jt.init(n, i), n._zod.check = (o) => {
    o.value = i.tx(o.value);
  };
});
class xb {
  constructor(i = []) {
    this.content = [], this.indent = 0, this && (this.args = i);
  }
  indented(i) {
    this.indent += 1, i(this), this.indent -= 1;
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const r = i.split(`
`).filter((f) => f), s = Math.min(...r.map((f) => f.length - f.trimStart().length)), d = r.map((f) => f.slice(s)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of d)
      this.content.push(f);
  }
  compile() {
    const i = Function, o = this?.args, s = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new i(...o, s.join(`
`));
  }
}
const kb = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ Y("$ZodType", (n, i) => {
  var o;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = kb;
  const r = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && r.unshift(n);
  for (const s of r)
    for (const d of s._zod.onattach)
      d(n);
  if (r.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const s = (f, m, v) => {
      let h = gi(f), _;
      for (const w of m) {
        if (w._zod.def.when) {
          if (T0(f) || !w._zod.def.when(f))
            continue;
        } else if (h)
          continue;
        const z = f.issues.length, E = w._zod.check(f);
        if (E instanceof Promise && v?.async === !1)
          throw new Si();
        if (_ || E instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await E, f.issues.length !== z && (h || (h = gi(f, z)));
          });
        else {
          if (f.issues.length === z)
            continue;
          h || (h = gi(f, z));
        }
      }
      return _ ? _.then(() => f) : f;
    }, d = (f, m, v) => {
      if (gi(f))
        return f.aborted = !0, f;
      const h = s(m, r, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new Si();
        return h.then((_) => n._zod.parse(_, v));
      }
      return n._zod.parse(h, v);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const h = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return h instanceof Promise ? h.then((_) => d(_, f, m)) : d(h, f, m);
      }
      const v = n._zod.parse(f, m);
      if (v instanceof Promise) {
        if (m.async === !1)
          throw new Si();
        return v.then((h) => s(h, r, m));
      }
      return s(v, r, m);
    };
  }
  Xe(n, "~standard", () => ({
    validate: (s) => {
      try {
        const d = j0(n, s);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return M0(n, s).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Oc = /* @__PURE__ */ Y("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? ob(n._zod.bag), n._zod.parse = (o, r) => {
    if (i.coerce)
      try {
        o.value = String(o.value);
      } catch {
      }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: n
    }), o;
  };
}), Ke = /* @__PURE__ */ Y("$ZodStringFormat", (n, i) => {
  Cr.init(n, i), Oc.init(n, i);
}), Tb = /* @__PURE__ */ Y("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = G0), Ke.init(n, i);
}), Eb = /* @__PURE__ */ Y("$ZodUUID", (n, i) => {
  if (i.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = nh(r));
  } else
    i.pattern ?? (i.pattern = nh());
  Ke.init(n, i);
}), Ab = /* @__PURE__ */ Y("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = Q0), Ke.init(n, i);
}), jb = /* @__PURE__ */ Y("$ZodURL", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    try {
      const r = o.value.trim();
      if (!i.normalize && i.protocol?.source === tb.source && !/^https?:\/\//i.test(r)) {
        o.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: o.value,
          inst: n,
          continue: !i.abort
        });
        return;
      }
      const s = new URL(r);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(s.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: o.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: o.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? o.value = s.href : o.value = r;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), Mb = /* @__PURE__ */ Y("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = J0()), Ke.init(n, i);
}), Cb = /* @__PURE__ */ Y("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = L0), Ke.init(n, i);
}), Ob = /* @__PURE__ */ Y("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = B0), Ke.init(n, i);
}), Nb = /* @__PURE__ */ Y("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = H0), Ke.init(n, i);
}), Db = /* @__PURE__ */ Y("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = X0), Ke.init(n, i);
}), Zb = /* @__PURE__ */ Y("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = q0), Ke.init(n, i);
}), Rb = /* @__PURE__ */ Y("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = $0), Ke.init(n, i);
}), Ub = /* @__PURE__ */ Y("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = lb(i)), Ke.init(n, i);
}), Yb = /* @__PURE__ */ Y("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = ab), Ke.init(n, i);
}), Bb = /* @__PURE__ */ Y("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = ib(i)), Ke.init(n, i);
}), Hb = /* @__PURE__ */ Y("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = V0), Ke.init(n, i);
}), Xb = /* @__PURE__ */ Y("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = W0), Ke.init(n, i), n._zod.bag.format = "ipv4";
}), qb = /* @__PURE__ */ Y("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = P0), Ke.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), $b = /* @__PURE__ */ Y("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = F0), Ke.init(n, i);
}), Lb = /* @__PURE__ */ Y("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = I0), Ke.init(n, i), n._zod.check = (o) => {
    const r = o.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [s, d] = r;
      if (!d)
        throw new Error();
      const f = Number(d);
      if (`${f}` !== d)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
});
function iv(n) {
  if (n === "")
    return !0;
  if (/\s/.test(n) || n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const Vb = /* @__PURE__ */ Y("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = eb), Ke.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    iv(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function Gb(n) {
  if (!Fh.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), o = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return iv(o);
}
const Qb = /* @__PURE__ */ Y("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = Fh), Ke.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    Gb(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Kb = /* @__PURE__ */ Y("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = nb), Ke.init(n, i);
});
function Jb(n, i = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3)
      return !1;
    const [r] = o;
    if (!r)
      return !1;
    const s = JSON.parse(atob(r));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const Wb = /* @__PURE__ */ Y("$ZodJWT", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    Jb(o.value, i.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), lv = /* @__PURE__ */ Y("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? ub, n._zod.parse = (o, r) => {
    if (i.coerce)
      try {
        o.value = Number(o.value);
      } catch {
      }
    const s = o.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return o;
    const d = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: n,
      ...d ? { received: d } : {}
    }), o;
  };
}), Pb = /* @__PURE__ */ Y("$ZodNumberFormat", (n, i) => {
  mb.init(n, i), lv.init(n, i);
}), Fb = /* @__PURE__ */ Y("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = sb, n._zod.parse = (o, r) => {
    if (i.coerce)
      try {
        o.value = !!o.value;
      } catch {
      }
    const s = o.value;
    return typeof s == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: n
    }), o;
  };
}), Ib = /* @__PURE__ */ Y("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o) => o;
}), e1 = /* @__PURE__ */ Y("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, r) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
});
function ah(n, i, o) {
  n.issues.length && i.issues.push(...Kh(o, n.issues)), i.value[o] = n.value;
}
const t1 = /* @__PURE__ */ Y("$ZodArray", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, r) => {
    const s = o.value;
    if (!Array.isArray(s))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: n
      }), o;
    o.value = Array(s.length);
    const d = [];
    for (let f = 0; f < s.length; f++) {
      const m = s[f], v = i.element._zod.run({
        value: m,
        issues: []
      }, r);
      v instanceof Promise ? d.push(v.then((h) => ah(h, o, f))) : ah(v, o, f);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function Sr(n, i, o, r, s, d) {
  const f = o in r;
  if (n.issues.length) {
    if (s && d && !f)
      return;
    i.issues.push(...Kh(o, n.issues));
  }
  if (!f && !s) {
    n.issues.length || i.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [o]
    });
    return;
  }
  n.value === void 0 ? f && (i.value[o] = void 0) : i.value[o] = n.value;
}
function ov(n) {
  const i = Object.keys(n.shape);
  for (const r of i)
    if (!n.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const o = y0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(o)
  };
}
function rv(n, i, o, r, s, d) {
  const f = [], m = s.keySet, v = s.catchall._zod, h = v.def.type, _ = v.optin === "optional", w = v.optout === "optional";
  for (const z in i) {
    if (z === "__proto__" || m.has(z))
      continue;
    if (h === "never") {
      f.push(z);
      continue;
    }
    const E = v.run({ value: i[z], issues: [] }, r);
    E instanceof Promise ? n.push(E.then((N) => Sr(N, o, z, i, _, w))) : Sr(E, o, z, i, _, w);
  }
  return f.length && o.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: i,
    inst: d
  }), n.length ? Promise.all(n).then(() => o) : o;
}
const n1 = /* @__PURE__ */ Y("$ZodObject", (n, i) => {
  if (Fe.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const m = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const v = { ...m };
        return Object.defineProperty(i, "shape", {
          value: v
        }), v;
      }
    });
  }
  const r = Tc(() => ov(i));
  Xe(n._zod, "propValues", () => {
    const m = i.shape, v = {};
    for (const h in m) {
      const _ = m[h]._zod;
      if (_.values) {
        v[h] ?? (v[h] = /* @__PURE__ */ new Set());
        for (const w of _.values)
          v[h].add(w);
      }
    }
    return v;
  });
  const s = br, d = i.catchall;
  let f;
  n._zod.parse = (m, v) => {
    f ?? (f = r.value);
    const h = m.value;
    if (!s(h))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: n
      }), m;
    m.value = {};
    const _ = [], w = f.shape;
    for (const z of f.keys) {
      const E = w[z], N = E._zod.optin === "optional", X = E._zod.optout === "optional", V = E._zod.run({ value: h[z], issues: [] }, v);
      V instanceof Promise ? _.push(V.then((K) => Sr(K, m, z, h, N, X))) : Sr(V, m, z, h, N, X);
    }
    return d ? rv(_, h, m, v, r.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), a1 = /* @__PURE__ */ Y("$ZodObjectJIT", (n, i) => {
  n1.init(n, i);
  const o = n._zod.parse, r = Tc(() => ov(i)), s = (z) => {
    const E = new xb(["shape", "payload", "ctx"]), N = r.value, X = ($) => {
      const q = th($);
      return `shape[${q}]._zod.run({ value: input[${q}], issues: [] }, ctx)`;
    };
    E.write("const input = payload.value;");
    const V = /* @__PURE__ */ Object.create(null);
    let K = 0;
    for (const $ of N.keys)
      V[$] = `key_${K++}`;
    E.write("const newResult = {};");
    for (const $ of N.keys) {
      const q = V[$], W = th($), te = z[$], M = te?._zod?.optin === "optional", J = te?._zod?.optout === "optional";
      E.write(`const ${q} = ${X($)};`), M && J ? E.write(`
        if (${q}.issues.length) {
          if (${W} in input) {
            payload.issues = payload.issues.concat(${q}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${W}, ...iss.path] : [${W}]
            })));
          }
        }
        
        if (${q}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${q}.value;
        }
        
      `) : M ? E.write(`
        if (${q}.issues.length) {
          payload.issues = payload.issues.concat(${q}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        
        if (${q}.value === undefined) {
          if (${W} in input) {
            newResult[${W}] = undefined;
          }
        } else {
          newResult[${W}] = ${q}.value;
        }
        
      `) : E.write(`
        const ${q}_present = ${W} in input;
        if (${q}.issues.length) {
          payload.issues = payload.issues.concat(${q}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${W}, ...iss.path] : [${W}]
          })));
        }
        if (!${q}_present && !${q}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${W}]
          });
        }

        if (${q}_present) {
          if (${q}.value === undefined) {
            newResult[${W}] = undefined;
          } else {
            newResult[${W}] = ${q}.value;
          }
        }

      `);
    }
    E.write("payload.value = newResult;"), E.write("return payload;");
    const ee = E.compile();
    return ($, q) => ee(z, $, q);
  };
  let d;
  const f = br, m = !kc.jitless, h = m && h0.value, _ = i.catchall;
  let w;
  n._zod.parse = (z, E) => {
    w ?? (w = r.value);
    const N = z.value;
    return f(N) ? m && h && E?.async === !1 && E.jitless !== !0 ? (d || (d = s(i.shape)), z = d(z, E), _ ? rv([], N, z, E, w, n) : z) : o(z, E) : (z.issues.push({
      expected: "object",
      code: "invalid_type",
      input: N,
      inst: n
    }), z);
  };
});
function ih(n, i, o, r) {
  for (const d of n)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const s = n.filter((d) => !gi(d));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: o,
    errors: n.map((d) => d.issues.map((f) => Aa(f, r, Ea())))
  }), i);
}
const i1 = /* @__PURE__ */ Y("$ZodUnion", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Xe(n._zod, "optout", () => i.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Xe(n._zod, "values", () => {
    if (i.options.every((r) => r._zod.values))
      return new Set(i.options.flatMap((r) => Array.from(r._zod.values)));
  }), Xe(n._zod, "pattern", () => {
    if (i.options.every((r) => r._zod.pattern)) {
      const r = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => Ac(s.source)).join("|")})$`);
    }
  });
  const o = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (r, s) => {
    if (o)
      return o(r, s);
    let d = !1;
    const f = [];
    for (const m of i.options) {
      const v = m._zod.run({
        value: r.value,
        issues: []
      }, s);
      if (v instanceof Promise)
        f.push(v), d = !0;
      else {
        if (v.issues.length === 0)
          return v;
        f.push(v);
      }
    }
    return d ? Promise.all(f).then((m) => ih(m, r, n, s)) : ih(f, r, n, s);
  };
}), l1 = /* @__PURE__ */ Y("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, r) => {
    const s = o.value, d = i.left._zod.run({ value: s, issues: [] }, r), f = i.right._zod.run({ value: s, issues: [] }, r);
    return d instanceof Promise || f instanceof Promise ? Promise.all([d, f]).then(([v, h]) => lh(o, v, h)) : lh(o, d, f);
  };
});
function hc(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (Ol(n) && Ol(i)) {
    const o = Object.keys(i), r = Object.keys(n).filter((d) => o.indexOf(d) !== -1), s = { ...n, ...i };
    for (const d of r) {
      const f = hc(n[d], i[d]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [d, ...f.mergeErrorPath]
        };
      s[d] = f.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let r = 0; r < n.length; r++) {
      const s = n[r], d = i[r], f = hc(s, d);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...f.mergeErrorPath]
        };
      o.push(f.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function lh(n, i, o) {
  const r = /* @__PURE__ */ new Map();
  let s;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const v of m.keys)
        r.has(v) || r.set(v, {}), r.get(v).l = !0;
    } else
      n.issues.push(m);
  for (const m of o.issues)
    if (m.code === "unrecognized_keys")
      for (const v of m.keys)
        r.has(v) || r.set(v, {}), r.get(v).r = !0;
    else
      n.issues.push(m);
  const d = [...r].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && s && n.issues.push({ ...s, keys: d }), gi(n))
    return n;
  const f = hc(i.value, o.value);
  if (!f.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
  return n.value = f.data, n;
}
const o1 = /* @__PURE__ */ Y("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const o = Vh(i.entries), r = new Set(o);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${o.filter((s) => v0.has(typeof s)).map((s) => typeof s == "string" ? zi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, d) => {
    const f = s.value;
    return r.has(f) || s.issues.push({
      code: "invalid_value",
      values: o,
      input: f,
      inst: n
    }), s;
  };
}), r1 = /* @__PURE__ */ Y("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(i.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${i.values.map((r) => typeof r == "string" ? zi(r) : r ? zi(r.toString()) : String(r)).join("|")})$`), n._zod.parse = (r, s) => {
    const d = r.value;
    return o.has(d) || r.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: n
    }), r;
  };
}), u1 = /* @__PURE__ */ Y("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Lh(n.constructor.name);
    const s = i.transform(o.value, o);
    if (r.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (o.value = f, o.fallback = !0, o));
    if (s instanceof Promise)
      throw new Si();
    return o.value = s, o.fallback = !0, o;
  };
});
function oh(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const uv = /* @__PURE__ */ Y("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Xe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ac(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, r) => {
    if (i.innerType._zod.optin === "optional") {
      const s = o.value, d = i.innerType._zod.run(o, r);
      return d instanceof Promise ? d.then((f) => oh(f, s)) : oh(d, s);
    }
    return o.value === void 0 ? o : i.innerType._zod.run(o, r);
  };
}), s1 = /* @__PURE__ */ Y("$ZodExactOptional", (n, i) => {
  uv.init(n, i), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (o, r) => i.innerType._zod.run(o, r);
}), c1 = /* @__PURE__ */ Y("$ZodNullable", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.innerType._zod.optin), Xe(n._zod, "optout", () => i.innerType._zod.optout), Xe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ac(o.source)}|null)$`) : void 0;
  }), Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (o, r) => o.value === null ? o : i.innerType._zod.run(o, r);
}), d1 = /* @__PURE__ */ Y("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(o, r);
    if (o.value === void 0)
      return o.value = i.defaultValue, o;
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => rh(d, i)) : rh(s, i);
  };
});
function rh(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const f1 = /* @__PURE__ */ Y("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, r) => (r.direction === "backward" || o.value === void 0 && (o.value = i.defaultValue), i.innerType._zod.run(o, r));
}), m1 = /* @__PURE__ */ Y("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => {
    const o = i.innerType._zod.values;
    return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
  }), n._zod.parse = (o, r) => {
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => uh(d, n)) : uh(s, n);
  };
});
function uh(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const p1 = /* @__PURE__ */ Y("$ZodCatch", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "optout", () => i.innerType._zod.optout), Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(o, r);
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => (o.value = d.value, d.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: d.issues.map((f) => Aa(f, r, Ea()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = s.value, s.issues.length && (o.value = i.catchValue({
      ...o,
      error: {
        issues: s.issues.map((d) => Aa(d, r, Ea()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), h1 = /* @__PURE__ */ Y("$ZodPipe", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => i.in._zod.values), Xe(n._zod, "optin", () => i.in._zod.optin), Xe(n._zod, "optout", () => i.out._zod.optout), Xe(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (o, r) => {
    if (r.direction === "backward") {
      const d = i.out._zod.run(o, r);
      return d instanceof Promise ? d.then((f) => sr(f, i.in, r)) : sr(d, i.in, r);
    }
    const s = i.in._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => sr(d, i.out, r)) : sr(s, i.out, r);
  };
});
function sr(n, i, o) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, o);
}
const v1 = /* @__PURE__ */ Y("$ZodReadonly", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "propValues", () => i.innerType._zod.propValues), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "optin", () => i.innerType?._zod?.optin), Xe(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(o, r);
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then(sh) : sh(s);
  };
});
function sh(n) {
  return n.value = Object.freeze(n.value), n;
}
const y1 = /* @__PURE__ */ Y("$ZodCustom", (n, i) => {
  jt.init(n, i), Fe.init(n, i), n._zod.parse = (o, r) => o, n._zod.check = (o) => {
    const r = o.value, s = i.fn(r);
    if (s instanceof Promise)
      return s.then((d) => ch(d, o, r, n));
    ch(s, o, r, n);
  };
});
function ch(n, i, o, r) {
  if (!n) {
    const s = {
      code: "custom",
      input: o,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (s.params = r._zod.def.params), i.issues.push(Nl(s));
  }
}
var dh;
class g1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...o) {
    const r = o[0];
    return this._map.set(i, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const o = this._map.get(i);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(i), this;
  }
  get(i) {
    const o = i._zod.parent;
    if (o) {
      const r = { ...this.get(o) ?? {} };
      delete r.id;
      const s = { ...r, ...this._map.get(i) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function _1() {
  return new g1();
}
(dh = globalThis).__zod_globalRegistry ?? (dh.__zod_globalRegistry = _1());
const Tl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function b1(n, i) {
  return new n({
    type: "string",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fh(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function w1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function z1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function k1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function E1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function B1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function H1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function q1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function $1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K1(n, i) {
  return new n({
    type: "boolean",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function W1(n, i) {
  return new n({
    type: "never",
    ...re(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mh(n, i) {
  return new nv({
    check: "less_than",
    ...re(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ac(n, i) {
  return new nv({
    check: "less_than",
    ...re(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function ph(n, i) {
  return new av({
    check: "greater_than",
    ...re(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ic(n, i) {
  return new av({
    check: "greater_than",
    ...re(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function hh(n, i) {
  return new fb({
    check: "multiple_of",
    ...re(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function sv(n, i) {
  return new pb({
    check: "max_length",
    ...re(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function wr(n, i) {
  return new hb({
    check: "min_length",
    ...re(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function cv(n, i) {
  return new vb({
    check: "length_equals",
    ...re(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function P1(n, i) {
  return new yb({
    check: "string_format",
    format: "regex",
    ...re(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function F1(n) {
  return new gb({
    check: "string_format",
    format: "lowercase",
    ...re(n)
  });
}
// @__NO_SIDE_EFFECTS__
function I1(n) {
  return new _b({
    check: "string_format",
    format: "uppercase",
    ...re(n)
  });
}
// @__NO_SIDE_EFFECTS__
function eS(n, i) {
  return new bb({
    check: "string_format",
    format: "includes",
    ...re(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function tS(n, i) {
  return new Sb({
    check: "string_format",
    format: "starts_with",
    ...re(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function nS(n, i) {
  return new wb({
    check: "string_format",
    format: "ends_with",
    ...re(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ti(n) {
  return new zb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function aS(n) {
  return /* @__PURE__ */ Ti((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function iS() {
  return /* @__PURE__ */ Ti((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function lS() {
  return /* @__PURE__ */ Ti((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function oS() {
  return /* @__PURE__ */ Ti((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function rS() {
  return /* @__PURE__ */ Ti((n) => p0(n));
}
// @__NO_SIDE_EFFECTS__
function uS(n, i, o) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...re(o)
  });
}
// @__NO_SIDE_EFFECTS__
function sS(n, i, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...re(o)
  });
}
// @__NO_SIDE_EFFECTS__
function cS(n, i) {
  const o = /* @__PURE__ */ dS((r) => (r.addIssue = (s) => {
    if (typeof s == "string")
      r.issues.push(Nl(s, r.value, o._zod.def));
    else {
      const d = s;
      d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = o), d.continue ?? (d.continue = !o._zod.def.abort), r.issues.push(Nl(d));
    }
  }, n(r.value, r)), i);
  return o;
}
// @__NO_SIDE_EFFECTS__
function dS(n, i) {
  const o = new jt({
    check: "custom",
    ...re(i)
  });
  return o._zod.check = n, o;
}
function dv(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? Tl,
    target: i,
    unrepresentable: n?.unrepresentable ?? "throw",
    override: n?.override ?? (() => {
    }),
    io: n?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: n?.cycles ?? "ref",
    reused: n?.reused ?? "inline",
    external: n?.external ?? void 0
  };
}
function yt(n, i, o = { path: [], schemaPath: [] }) {
  var r;
  const s = n._zod.def, d = i.seen.get(n);
  if (d)
    return d.count++, o.schemaPath.includes(n) && (d.cycle = o.path), d.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: o.path };
  i.seen.set(n, f);
  const m = n._zod.toJSONSchema?.();
  if (m)
    f.schema = m;
  else {
    const _ = {
      ...o,
      schemaPath: [...o.schemaPath, n],
      path: o.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, f.schema, _);
    else {
      const z = f.schema, E = i.processors[s.type];
      if (!E)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      E(n, i, z, _);
    }
    const w = n._zod.parent;
    w && (f.ref || (f.ref = w), yt(w, i, _), i.seen.get(w).isParent = !0);
  }
  const v = i.metadataRegistry.get(n);
  return v && Object.assign(f.schema, v), i.io === "input" && St(n) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((r = f.schema).default ?? (r.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(n).schema;
}
function fv(n, i) {
  const o = n.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const f of n.seen.entries()) {
    const m = n.metadataRegistry.get(f[0])?.id;
    if (m) {
      const v = r.get(m);
      if (v && v !== f[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(m, f[0]);
    }
  }
  const s = (f) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const w = n.external.registry.get(f[0])?.id, z = n.external.uri ?? ((N) => N);
      if (w)
        return { ref: z(w) };
      const E = f[1].defId ?? f[1].schema.id ?? `schema${n.counter++}`;
      return f[1].defId = E, { defId: E, ref: `${z("__shared")}#/${m}/${E}` };
    }
    if (f[1] === o)
      return { ref: "#" };
    const h = `#/${m}/`, _ = f[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: _, ref: h + _ };
  }, d = (f) => {
    if (f[1].schema.$ref)
      return;
    const m = f[1], { ref: v, defId: h } = s(f);
    m.def = { ...m.schema }, h && (m.defId = h);
    const _ = m.schema;
    for (const w in _)
      delete _[w];
    _.$ref = v;
  };
  if (n.cycles === "throw")
    for (const f of n.seen.entries()) {
      const m = f[1];
      if (m.cycle)
        throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const f of n.seen.entries()) {
    const m = f[1];
    if (i === f[0]) {
      d(f);
      continue;
    }
    if (n.external) {
      const h = n.external.registry.get(f[0])?.id;
      if (i !== f[0] && h) {
        d(f);
        continue;
      }
    }
    if (n.metadataRegistry.get(f[0])?.id) {
      d(f);
      continue;
    }
    if (m.cycle) {
      d(f);
      continue;
    }
    if (m.count > 1 && n.reused === "ref") {
      d(f);
      continue;
    }
  }
}
function mv(n, i) {
  const o = n.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (m) => {
    const v = n.seen.get(m);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, _ = { ...h }, w = v.ref;
    if (v.ref = null, w) {
      r(w);
      const E = n.seen.get(w), N = E.schema;
      if (N.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(N)) : Object.assign(h, N), Object.assign(h, _), m._zod.parent === w)
        for (const V in h)
          V === "$ref" || V === "allOf" || V in _ || delete h[V];
      if (N.$ref && E.def)
        for (const V in h)
          V === "$ref" || V === "allOf" || V in E.def && JSON.stringify(h[V]) === JSON.stringify(E.def[V]) && delete h[V];
    }
    const z = m._zod.parent;
    if (z && z !== w) {
      r(z);
      const E = n.seen.get(z);
      if (E?.schema.$ref && (h.$ref = E.schema.$ref, E.def))
        for (const N in h)
          N === "$ref" || N === "allOf" || N in E.def && JSON.stringify(h[N]) === JSON.stringify(E.def[N]) && delete h[N];
    }
    n.override({
      zodSchema: m,
      jsonSchema: h,
      path: v.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse())
    r(m[0]);
  const s = {};
  if (n.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(i)?.id;
    if (!m)
      throw new Error("Schema is missing an `id` property");
    s.$id = n.external.uri(m);
  }
  Object.assign(s, o.def ?? o.schema);
  const d = n.metadataRegistry.get(i)?.id;
  d !== void 0 && s.id === d && delete s.id;
  const f = n.external?.defs ?? {};
  for (const m of n.seen.entries()) {
    const v = m[1];
    v.def && v.defId && (v.def.id === v.defId && delete v.def.id, f[v.defId] = v.def);
  }
  n.external || Object.keys(f).length > 0 && (n.target === "draft-2020-12" ? s.$defs = f : s.definitions = f);
  try {
    const m = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: zr(i, "input", n.processors),
          output: zr(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function St(n, i) {
  const o = i ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n))
    return !1;
  o.seen.add(n);
  const r = n._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return St(r.element, o);
  if (r.type === "set")
    return St(r.valueType, o);
  if (r.type === "lazy")
    return St(r.getter(), o);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return St(r.innerType, o);
  if (r.type === "intersection")
    return St(r.left, o) || St(r.right, o);
  if (r.type === "record" || r.type === "map")
    return St(r.keyType, o) || St(r.valueType, o);
  if (r.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : St(r.in, o) || St(r.out, o);
  if (r.type === "object") {
    for (const s in r.shape)
      if (St(r.shape[s], o))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const s of r.options)
      if (St(s, o))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const s of r.items)
      if (St(s, o))
        return !0;
    return !!(r.rest && St(r.rest, o));
  }
  return !1;
}
const fS = (n, i = {}) => (o) => {
  const r = dv({ ...o, processors: i });
  return yt(n, r), fv(r, n), mv(r, n);
}, zr = (n, i, o = {}) => (r) => {
  const { libraryOptions: s, target: d } = r ?? {}, f = dv({ ...s ?? {}, target: d, io: i, processors: o });
  return yt(n, f), fv(f, n), mv(f, n);
}, mS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, pS = (n, i, o, r) => {
  const s = o;
  s.type = "string";
  const { minimum: d, maximum: f, format: m, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof d == "number" && (s.minLength = d), typeof f == "number" && (s.maxLength = f), m && (s.format = mS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), h && (s.contentEncoding = h), v && v.size > 0) {
    const _ = [...v];
    _.length === 1 ? s.pattern = _[0].source : _.length > 1 && (s.allOf = [
      ..._.map((w) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, hS = (n, i, o, r) => {
  const s = o, { minimum: d, maximum: f, format: m, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: _ } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const w = typeof _ == "number" && _ >= (d ?? Number.NEGATIVE_INFINITY), z = typeof h == "number" && h <= (f ?? Number.POSITIVE_INFINITY), E = i.target === "draft-04" || i.target === "openapi-3.0";
  w ? E ? (s.minimum = _, s.exclusiveMinimum = !0) : s.exclusiveMinimum = _ : typeof d == "number" && (s.minimum = d), z ? E ? (s.maximum = h, s.exclusiveMaximum = !0) : s.exclusiveMaximum = h : typeof f == "number" && (s.maximum = f), typeof v == "number" && (s.multipleOf = v);
}, vS = (n, i, o, r) => {
  o.type = "boolean";
}, yS = (n, i, o, r) => {
  o.not = {};
}, gS = (n, i, o, r) => {
}, _S = (n, i, o, r) => {
  const s = n._zod.def, d = Vh(s.entries);
  d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), o.enum = d;
}, bS = (n, i, o, r) => {
  const s = n._zod.def, d = [];
  for (const f of s.values)
    if (f === void 0) {
      if (i.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof f == "bigint") {
      if (i.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      d.push(Number(f));
    } else
      d.push(f);
  if (d.length !== 0) if (d.length === 1) {
    const f = d[0];
    o.type = f === null ? "null" : typeof f, i.target === "draft-04" || i.target === "openapi-3.0" ? o.enum = [f] : o.const = f;
  } else
    d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), d.every((f) => typeof f == "boolean") && (o.type = "boolean"), d.every((f) => f === null) && (o.type = "null"), o.enum = d;
}, SS = (n, i, o, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, wS = (n, i, o, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, zS = (n, i, o, r) => {
  const s = o, d = n._zod.def, { minimum: f, maximum: m } = n._zod.bag;
  typeof f == "number" && (s.minItems = f), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = yt(d.element, i, {
    ...r,
    path: [...r.path, "items"]
  });
}, xS = (n, i, o, r) => {
  const s = o, d = n._zod.def;
  s.type = "object", s.properties = {};
  const f = d.shape;
  for (const h in f)
    s.properties[h] = yt(f[h], i, {
      ...r,
      path: [...r.path, "properties", h]
    });
  const m = new Set(Object.keys(f)), v = new Set([...m].filter((h) => {
    const _ = d.shape[h]._zod;
    return i.io === "input" ? _.optin === void 0 : _.optout === void 0;
  }));
  v.size > 0 && (s.required = Array.from(v)), d.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : d.catchall ? d.catchall && (s.additionalProperties = yt(d.catchall, i, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, kS = (n, i, o, r) => {
  const s = n._zod.def, d = s.inclusive === !1, f = s.options.map((m, v) => yt(m, i, {
    ...r,
    path: [...r.path, d ? "oneOf" : "anyOf", v]
  }));
  d ? o.oneOf = f : o.anyOf = f;
}, TS = (n, i, o, r) => {
  const s = n._zod.def, d = yt(s.left, i, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), f = yt(s.right, i, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), m = (h) => "allOf" in h && Object.keys(h).length === 1, v = [
    ...m(d) ? d.allOf : [d],
    ...m(f) ? f.allOf : [f]
  ];
  o.allOf = v;
}, ES = (n, i, o, r) => {
  const s = n._zod.def, d = yt(s.innerType, i, r), f = i.seen.get(n);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, AS = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, jS = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, o.default = JSON.parse(JSON.stringify(s.defaultValue));
}, MS = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, i.io === "input" && (o._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, CS = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = f;
}, OS = (n, i, o, r) => {
  const s = n._zod.def, d = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? d ? s.out : s.in : s.out;
  yt(f, i, r);
  const m = i.seen.get(n);
  m.ref = f;
}, NS = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, o.readOnly = !0;
}, pv = (n, i, o, r) => {
  const s = n._zod.def;
  yt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, DS = /* @__PURE__ */ Y("ZodISODateTime", (n, i) => {
  Ub.init(n, i), Je.init(n, i);
});
function ZS(n) {
  return /* @__PURE__ */ q1(DS, n);
}
const RS = /* @__PURE__ */ Y("ZodISODate", (n, i) => {
  Yb.init(n, i), Je.init(n, i);
});
function US(n) {
  return /* @__PURE__ */ $1(RS, n);
}
const YS = /* @__PURE__ */ Y("ZodISOTime", (n, i) => {
  Bb.init(n, i), Je.init(n, i);
});
function BS(n) {
  return /* @__PURE__ */ L1(YS, n);
}
const HS = /* @__PURE__ */ Y("ZodISODuration", (n, i) => {
  Hb.init(n, i), Je.init(n, i);
});
function XS(n) {
  return /* @__PURE__ */ V1(HS, n);
}
const qS = (n, i) => {
  Wh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (o) => A0(n, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => E0(n, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        n.issues.push(o), n.message = JSON.stringify(n.issues, pc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        n.issues.push(...o), n.message = JSON.stringify(n.issues, pc, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Jt = /* @__PURE__ */ Y("ZodError", qS, {
  Parent: Error
}), $S = /* @__PURE__ */ Mc(Jt), LS = /* @__PURE__ */ Cc(Jt), VS = /* @__PURE__ */ jr(Jt), GS = /* @__PURE__ */ Mr(Jt), QS = /* @__PURE__ */ C0(Jt), KS = /* @__PURE__ */ O0(Jt), JS = /* @__PURE__ */ N0(Jt), WS = /* @__PURE__ */ D0(Jt), PS = /* @__PURE__ */ Z0(Jt), FS = /* @__PURE__ */ R0(Jt), IS = /* @__PURE__ */ U0(Jt), e2 = /* @__PURE__ */ Y0(Jt), vh = /* @__PURE__ */ new WeakMap();
function Ul(n, i, o) {
  const r = Object.getPrototypeOf(n);
  let s = vh.get(r);
  if (s || (s = /* @__PURE__ */ new Set(), vh.set(r, s)), !s.has(i)) {
    s.add(i);
    for (const d in o) {
      const f = o[d];
      Object.defineProperty(r, d, {
        configurable: !0,
        enumerable: !1,
        get() {
          const m = f.bind(this);
          return Object.defineProperty(this, d, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          }), m;
        },
        set(m) {
          Object.defineProperty(this, d, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          });
        }
      });
    }
  }
}
const Ie = /* @__PURE__ */ Y("ZodType", (n, i) => (Fe.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: zr(n, "input"),
    output: zr(n, "output")
  }
}), n.toJSONSchema = fS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (o, r) => $S(n, o, r, { callee: n.parse }), n.safeParse = (o, r) => VS(n, o, r), n.parseAsync = async (o, r) => LS(n, o, r, { callee: n.parseAsync }), n.safeParseAsync = async (o, r) => GS(n, o, r), n.spa = n.safeParseAsync, n.encode = (o, r) => QS(n, o, r), n.decode = (o, r) => KS(n, o, r), n.encodeAsync = async (o, r) => JS(n, o, r), n.decodeAsync = async (o, r) => WS(n, o, r), n.safeEncode = (o, r) => PS(n, o, r), n.safeDecode = (o, r) => FS(n, o, r), n.safeEncodeAsync = async (o, r) => IS(n, o, r), n.safeDecodeAsync = async (o, r) => e2(n, o, r), Ul(n, "ZodType", {
  check(...o) {
    const r = this.def;
    return this.clone(ta(r, {
      checks: [
        ...r.checks ?? [],
        ...o.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, r) {
    return na(this, o, r);
  },
  brand() {
    return this;
  },
  register(o, r) {
    return o.add(this, r), this;
  },
  refine(o, r) {
    return this.check(Q2(o, r));
  },
  superRefine(o, r) {
    return this.check(K2(o, r));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ Ti(o));
  },
  optional() {
    return bh(this);
  },
  exactOptional() {
    return D2(this);
  },
  nullable() {
    return Sh(this);
  },
  nullish() {
    return bh(Sh(this));
  },
  nonoptional(o) {
    return H2(this, o);
  },
  array() {
    return _i(this);
  },
  or(o) {
    return yv([this, o]);
  },
  and(o) {
    return j2(this, o);
  },
  transform(o) {
    return wh(this, O2(o));
  },
  default(o) {
    return U2(this, o);
  },
  prefault(o) {
    return B2(this, o);
  },
  catch(o) {
    return q2(this, o);
  },
  pipe(o) {
    return wh(this, o);
  },
  readonly() {
    return V2(this);
  },
  describe(o) {
    const r = this.clone();
    return Tl.add(r, { description: o }), r;
  },
  meta(...o) {
    if (o.length === 0)
      return Tl.get(this);
    const r = this.clone();
    return Tl.add(r, o[0]), r;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(o) {
    return o(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return Tl.get(n)?.description;
  },
  configurable: !0
}), n)), hv = /* @__PURE__ */ Y("_ZodString", (n, i) => {
  Oc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => pS(n, r, s);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Ul(n, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ P1(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ eS(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ tS(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ nS(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ wr(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ sv(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ cv(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ wr(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ F1(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ I1(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ iS());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ aS(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ lS());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ oS());
    },
    slugify() {
      return this.check(/* @__PURE__ */ rS());
    }
  });
}), t2 = /* @__PURE__ */ Y("ZodString", (n, i) => {
  Oc.init(n, i), hv.init(n, i), n.email = (o) => n.check(/* @__PURE__ */ S1(n2, o)), n.url = (o) => n.check(/* @__PURE__ */ T1(a2, o)), n.jwt = (o) => n.check(/* @__PURE__ */ X1(g2, o)), n.emoji = (o) => n.check(/* @__PURE__ */ E1(i2, o)), n.guid = (o) => n.check(/* @__PURE__ */ fh(yh, o)), n.uuid = (o) => n.check(/* @__PURE__ */ w1(cr, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ z1(cr, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ x1(cr, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ k1(cr, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ A1(l2, o)), n.guid = (o) => n.check(/* @__PURE__ */ fh(yh, o)), n.cuid = (o) => n.check(/* @__PURE__ */ j1(o2, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ M1(r2, o)), n.ulid = (o) => n.check(/* @__PURE__ */ C1(u2, o)), n.base64 = (o) => n.check(/* @__PURE__ */ Y1(h2, o)), n.base64url = (o) => n.check(/* @__PURE__ */ B1(v2, o)), n.xid = (o) => n.check(/* @__PURE__ */ O1(s2, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ N1(c2, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ D1(d2, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ Z1(f2, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ R1(m2, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ U1(p2, o)), n.e164 = (o) => n.check(/* @__PURE__ */ H1(y2, o)), n.datetime = (o) => n.check(ZS(o)), n.date = (o) => n.check(US(o)), n.time = (o) => n.check(BS(o)), n.duration = (o) => n.check(XS(o));
});
function vt(n) {
  return /* @__PURE__ */ b1(t2, n);
}
const Je = /* @__PURE__ */ Y("ZodStringFormat", (n, i) => {
  Ke.init(n, i), hv.init(n, i);
}), n2 = /* @__PURE__ */ Y("ZodEmail", (n, i) => {
  Ab.init(n, i), Je.init(n, i);
}), yh = /* @__PURE__ */ Y("ZodGUID", (n, i) => {
  Tb.init(n, i), Je.init(n, i);
}), cr = /* @__PURE__ */ Y("ZodUUID", (n, i) => {
  Eb.init(n, i), Je.init(n, i);
}), a2 = /* @__PURE__ */ Y("ZodURL", (n, i) => {
  jb.init(n, i), Je.init(n, i);
}), i2 = /* @__PURE__ */ Y("ZodEmoji", (n, i) => {
  Mb.init(n, i), Je.init(n, i);
}), l2 = /* @__PURE__ */ Y("ZodNanoID", (n, i) => {
  Cb.init(n, i), Je.init(n, i);
}), o2 = /* @__PURE__ */ Y("ZodCUID", (n, i) => {
  Ob.init(n, i), Je.init(n, i);
}), r2 = /* @__PURE__ */ Y("ZodCUID2", (n, i) => {
  Nb.init(n, i), Je.init(n, i);
}), u2 = /* @__PURE__ */ Y("ZodULID", (n, i) => {
  Db.init(n, i), Je.init(n, i);
}), s2 = /* @__PURE__ */ Y("ZodXID", (n, i) => {
  Zb.init(n, i), Je.init(n, i);
}), c2 = /* @__PURE__ */ Y("ZodKSUID", (n, i) => {
  Rb.init(n, i), Je.init(n, i);
}), d2 = /* @__PURE__ */ Y("ZodIPv4", (n, i) => {
  Xb.init(n, i), Je.init(n, i);
}), f2 = /* @__PURE__ */ Y("ZodIPv6", (n, i) => {
  qb.init(n, i), Je.init(n, i);
}), m2 = /* @__PURE__ */ Y("ZodCIDRv4", (n, i) => {
  $b.init(n, i), Je.init(n, i);
}), p2 = /* @__PURE__ */ Y("ZodCIDRv6", (n, i) => {
  Lb.init(n, i), Je.init(n, i);
}), h2 = /* @__PURE__ */ Y("ZodBase64", (n, i) => {
  Vb.init(n, i), Je.init(n, i);
}), v2 = /* @__PURE__ */ Y("ZodBase64URL", (n, i) => {
  Qb.init(n, i), Je.init(n, i);
}), y2 = /* @__PURE__ */ Y("ZodE164", (n, i) => {
  Kb.init(n, i), Je.init(n, i);
}), g2 = /* @__PURE__ */ Y("ZodJWT", (n, i) => {
  Wb.init(n, i), Je.init(n, i);
}), vv = /* @__PURE__ */ Y("ZodNumber", (n, i) => {
  lv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => hS(n, r, s), Ul(n, "ZodNumber", {
    gt(r, s) {
      return this.check(/* @__PURE__ */ ph(r, s));
    },
    gte(r, s) {
      return this.check(/* @__PURE__ */ ic(r, s));
    },
    min(r, s) {
      return this.check(/* @__PURE__ */ ic(r, s));
    },
    lt(r, s) {
      return this.check(/* @__PURE__ */ mh(r, s));
    },
    lte(r, s) {
      return this.check(/* @__PURE__ */ ac(r, s));
    },
    max(r, s) {
      return this.check(/* @__PURE__ */ ac(r, s));
    },
    int(r) {
      return this.check(gh(r));
    },
    safe(r) {
      return this.check(gh(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ ph(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ ic(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ mh(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ ac(0, r));
    },
    multipleOf(r, s) {
      return this.check(/* @__PURE__ */ hh(r, s));
    },
    step(r, s) {
      return this.check(/* @__PURE__ */ hh(r, s));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function _2(n) {
  return /* @__PURE__ */ G1(vv, n);
}
const b2 = /* @__PURE__ */ Y("ZodNumberFormat", (n, i) => {
  Pb.init(n, i), vv.init(n, i);
});
function gh(n) {
  return /* @__PURE__ */ Q1(b2, n);
}
const S2 = /* @__PURE__ */ Y("ZodBoolean", (n, i) => {
  Fb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => vS(n, o, r);
});
function Nc(n) {
  return /* @__PURE__ */ K1(S2, n);
}
const w2 = /* @__PURE__ */ Y("ZodUnknown", (n, i) => {
  Ib.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => gS();
});
function _h() {
  return /* @__PURE__ */ J1(w2);
}
const z2 = /* @__PURE__ */ Y("ZodNever", (n, i) => {
  e1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => yS(n, o, r);
});
function x2(n) {
  return /* @__PURE__ */ W1(z2, n);
}
const k2 = /* @__PURE__ */ Y("ZodArray", (n, i) => {
  t1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => zS(n, o, r, s), n.element = i.element, Ul(n, "ZodArray", {
    min(o, r) {
      return this.check(/* @__PURE__ */ wr(o, r));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ wr(1, o));
    },
    max(o, r) {
      return this.check(/* @__PURE__ */ sv(o, r));
    },
    length(o, r) {
      return this.check(/* @__PURE__ */ cv(o, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function _i(n, i) {
  return /* @__PURE__ */ uS(k2, n, i);
}
const T2 = /* @__PURE__ */ Y("ZodObject", (n, i) => {
  a1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => xS(n, o, r, s), Xe(n, "shape", () => i.shape), Ul(n, "ZodObject", {
    keyof() {
      return xr(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({ ...this._zod.def, catchall: o });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: _h() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: _h() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: x2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(o) {
      return S0(this, o);
    },
    safeExtend(o) {
      return w0(this, o);
    },
    merge(o) {
      return z0(this, o);
    },
    pick(o) {
      return _0(this, o);
    },
    omit(o) {
      return b0(this, o);
    },
    partial(...o) {
      return x0(gv, this, o[0]);
    },
    required(...o) {
      return k0(_v, this, o[0]);
    }
  });
});
function wi(n, i) {
  const o = {
    type: "object",
    shape: n ?? {},
    ...re(i)
  };
  return new T2(o);
}
const E2 = /* @__PURE__ */ Y("ZodUnion", (n, i) => {
  i1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => kS(n, o, r, s), n.options = i.options;
});
function yv(n, i) {
  return new E2({
    type: "union",
    options: n,
    ...re(i)
  });
}
const A2 = /* @__PURE__ */ Y("ZodIntersection", (n, i) => {
  l1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => TS(n, o, r, s);
});
function j2(n, i) {
  return new A2({
    type: "intersection",
    left: n,
    right: i
  });
}
const vc = /* @__PURE__ */ Y("ZodEnum", (n, i) => {
  o1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => _S(n, r, s), n.enum = i.entries, n.options = Object.values(i.entries);
  const o = new Set(Object.keys(i.entries));
  n.extract = (r, s) => {
    const d = {};
    for (const f of r)
      if (o.has(f))
        d[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new vc({
      ...i,
      checks: [],
      ...re(s),
      entries: d
    });
  }, n.exclude = (r, s) => {
    const d = { ...i.entries };
    for (const f of r)
      if (o.has(f))
        delete d[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new vc({
      ...i,
      checks: [],
      ...re(s),
      entries: d
    });
  };
});
function xr(n, i) {
  const o = Array.isArray(n) ? Object.fromEntries(n.map((r) => [r, r])) : n;
  return new vc({
    type: "enum",
    entries: o,
    ...re(i)
  });
}
const M2 = /* @__PURE__ */ Y("ZodLiteral", (n, i) => {
  r1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => bS(n, o, r), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function kr(n, i) {
  return new M2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...re(i)
  });
}
const C2 = /* @__PURE__ */ Y("ZodTransform", (n, i) => {
  u1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => wS(n, o), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Lh(n.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(Nl(d, o.value, i));
      else {
        const f = d;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = n), o.issues.push(Nl(f));
      }
    };
    const s = i.transform(o.value, o);
    return s instanceof Promise ? s.then((d) => (o.value = d, o.fallback = !0, o)) : (o.value = s, o.fallback = !0, o);
  };
});
function O2(n) {
  return new C2({
    type: "transform",
    transform: n
  });
}
const gv = /* @__PURE__ */ Y("ZodOptional", (n, i) => {
  uv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => pv(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function bh(n) {
  return new gv({
    type: "optional",
    innerType: n
  });
}
const N2 = /* @__PURE__ */ Y("ZodExactOptional", (n, i) => {
  s1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => pv(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function D2(n) {
  return new N2({
    type: "optional",
    innerType: n
  });
}
const Z2 = /* @__PURE__ */ Y("ZodNullable", (n, i) => {
  c1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => ES(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function Sh(n) {
  return new Z2({
    type: "nullable",
    innerType: n
  });
}
const R2 = /* @__PURE__ */ Y("ZodDefault", (n, i) => {
  d1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => jS(n, o, r, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function U2(n, i) {
  return new R2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Qh(i);
    }
  });
}
const Y2 = /* @__PURE__ */ Y("ZodPrefault", (n, i) => {
  f1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => MS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function B2(n, i) {
  return new Y2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Qh(i);
    }
  });
}
const _v = /* @__PURE__ */ Y("ZodNonOptional", (n, i) => {
  m1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => AS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function H2(n, i) {
  return new _v({
    type: "nonoptional",
    innerType: n,
    ...re(i)
  });
}
const X2 = /* @__PURE__ */ Y("ZodCatch", (n, i) => {
  p1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => CS(n, o, r, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function q2(n, i) {
  return new X2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const $2 = /* @__PURE__ */ Y("ZodPipe", (n, i) => {
  h1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => OS(n, o, r, s), n.in = i.in, n.out = i.out;
});
function wh(n, i) {
  return new $2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const L2 = /* @__PURE__ */ Y("ZodReadonly", (n, i) => {
  v1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => NS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function V2(n) {
  return new L2({
    type: "readonly",
    innerType: n
  });
}
const G2 = /* @__PURE__ */ Y("ZodCustom", (n, i) => {
  y1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => SS(n, o);
});
function Q2(n, i = {}) {
  return /* @__PURE__ */ sS(G2, n, i);
}
function K2(n, i) {
  return /* @__PURE__ */ cS(n, i);
}
const Tr = vt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Me = Tr.optional(), J2 = wi({
  segment_id: _2().int().nonnegative(),
  area_id: vt().min(1).optional(),
  name: vt().min(1),
  icon: vt().optional(),
  include_in_floor_clean: Nc().optional().default(!0)
}).passthrough(), W2 = wi({
  id: vt().min(1),
  name: vt().min(1),
  map_entity: Tr,
  map_select_option: vt().min(1).optional(),
  vacuum_then_mop_routine: Tr.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: Nc().optional().default(!1),
  rooms: _i(J2).min(1)
}).passthrough(), P2 = wi({
  id: vt().min(1),
  name: vt().min(1),
  icon: vt().optional(),
  strategy: xr(["custom", "smartplan"]),
  cleaning_type: xr(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: vt().optional(),
  mop_mode: vt().optional(),
  mop_intensity: vt().optional(),
  cleaning_count: yv([kr(1), kr(2)]).optional()
}).passthrough(), bv = wi({
  type: kr("custom:roborock-vacuum-map-card").optional(),
  entity: Tr.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: vt().optional(),
  language: xr(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: wi({
    map_select: Me,
    cleaning_mode: Me,
    vacuum_then_mop_script: Me,
    mop_mode: Me,
    mop_intensity: Me,
    dock_mop_drying: Me,
    dock_mop_drying_remaining_time: Me,
    dock_child_lock: Me,
    dock_mop_wash_frequency: Me,
    dock_wash_mode: Me,
    dock_wash_temperature: Me,
    dock_auto_empty: Me,
    dock_empty_mode: Me,
    dock_auto_dry: Me,
    dock_dry_duration: Me,
    assisted_carry_stage: Me,
    assisted_carry_job: Me,
    assisted_carry_prepare_script: Me,
    assisted_carry_start_script: Me,
    assisted_carry_finish_script: Me,
    water_shortage: Me,
    mop_attached: Me,
    water_box_attached: Me,
    do_not_disturb: Me,
    battery: Me,
    current_room: Me,
    cleaning_area: Me,
    cleaning_time: Me,
    cleaning_progress: Me,
    status: Me,
    error: Me,
    last_clean_end: Me
  }).passthrough().optional().default({}),
  floors: _i(W2).min(1),
  presets: _i(P2).optional().default([]),
  default_preset: vt().optional().default("vacuum_only"),
  vacuum_mode_fallback: kr("set_clean_motor_mode").optional(),
  enable_mop_only: Nc().optional().default(!1),
  mop_routes: wi({
    vacuum_and_mop: _i(vt().min(1)).min(1).optional(),
    mop: _i(vt().min(1)).min(1).optional()
  }).optional()
}).passthrough().superRefine((n, i) => {
  if (n.floors.length > 1 && !n.entities.map_select && i.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" }), n.floors.filter((d) => d.assisted_carry).length > 0) {
    const d = [
      "assisted_carry_stage",
      "assisted_carry_job",
      "assisted_carry_prepare_script",
      "assisted_carry_start_script",
      "assisted_carry_finish_script"
    ];
    for (const f of d)
      n.entities[f] || i.addIssue({ code: "custom", path: ["entities", f], message: "Assisted carry requires this entity" });
  }
  const r = /* @__PURE__ */ new Set();
  for (const [d, f] of n.floors.entries()) {
    r.has(f.id) && i.addIssue({ code: "custom", path: ["floors", d, "id"], message: "Floor IDs must be unique" }), r.add(f.id);
    const m = /* @__PURE__ */ new Set();
    for (const [v, h] of f.rooms.entries())
      m.has(h.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", d, "rooms", v, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(h.segment_id);
  }
  const s = /* @__PURE__ */ new Set(["vacuum_only", "mop_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [d, f] of n.presets.entries())
    s.has(f.id) && i.addIssue({ code: "custom", path: ["presets", d, "id"], message: "Preset IDs must be unique" }), s.add(f.id);
  n.default_preset && !s.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function F2(n) {
  return bv.parse(n);
}
function I2(n) {
  const i = bv.safeParse(n);
  return i.success ? [] : i.error.issues.map((o) => `${o.path.join(".") || "config"}: ${o.message}`);
}
function Sv() {
  return {
    type: "custom:roborock-vacuum-map-card",
    entity: "vacuum.roborock",
    language: "en",
    entities: {},
    floors: [
      {
        id: "floor",
        name: "Floor",
        map_entity: "image.roborock_custom_map",
        rooms: [{ segment_id: 1, name: "Room", include_in_floor_clean: !0 }]
      }
    ],
    default_preset: "vacuum_only"
  };
}
function dr(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function wv(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((o) => {
    const r = o;
    return !dr(r.vacuum?.x) || !dr(r.vacuum?.y) || !dr(r.map?.x) || !dr(r.map?.y) ? [] : [r];
  }) : [];
}
function zv(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((r, s) => [String(s), r]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([r, s]) => {
    if (!s || typeof s != "object") return [];
    const d = s, f = d.number ?? d.room_id ?? d.segment_id ?? r, m = Number(f), v = Number(d.x0), h = Number(d.y0), _ = Number(d.x1), w = Number(d.y1);
    return [m, v, h, _, w].every(Number.isFinite) ? [
      {
        segment_id: m,
        source_name: typeof d.name == "string" ? d.name : `Room ${m}`,
        x0: v,
        y0: h,
        x1: _,
        y1: w
      }
    ] : [];
  }) : [];
}
function El(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = o, f = s.vacuum.x - r.vacuum.x, m = s.vacuum.y - r.vacuum.y, v = d.vacuum.x - r.vacuum.x, h = d.vacuum.y - r.vacuum.y, _ = f * h - m * v;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const w = n - r.vacuum.x, z = i - r.vacuum.y, E = (w * h - z * v) / _, N = (f * z - m * w) / _;
  return {
    x: r.map.x + E * (s.map.x - r.map.x) + N * (d.map.x - r.map.x),
    y: r.map.y + E * (s.map.y - r.map.y) + N * (d.map.y - r.map.y)
  };
}
function fr(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = o, f = s.map.x - r.map.x, m = s.map.y - r.map.y, v = d.map.x - r.map.x, h = d.map.y - r.map.y, _ = f * h - m * v;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const w = n - r.map.x, z = i - r.map.y, E = (w * h - z * v) / _, N = (f * z - m * w) / _;
  return {
    x: r.vacuum.x + E * (s.vacuum.x - r.vacuum.x) + N * (d.vacuum.x - r.vacuum.x),
    y: r.vacuum.y + E * (s.vacuum.y - r.vacuum.y) + N * (d.vacuum.y - r.vacuum.y)
  };
}
function Ml(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function yc(n, i, o) {
  const r = Ml(n), s = r.x2 - r.x1, d = r.y2 - r.y1, f = Math.min(Math.max(0, r.x1), Math.max(0, i - s)), m = Math.min(Math.max(0, r.y1), Math.max(0, o - d));
  return { x1: f, y1: m, x2: f + s, y2: m + d };
}
function ew(n, i) {
  const o = Ml(n), r = [
    fr(o.x1, o.y1, i),
    fr(o.x2, o.y1, i),
    fr(o.x2, o.y2, i),
    fr(o.x1, o.y2, i)
  ], s = r.map(({ x: f }) => f), d = r.map(({ y: f }) => f);
  return {
    x1: Math.round(Math.min(...s)),
    y1: Math.round(Math.min(...d)),
    x2: Math.round(Math.max(...s)),
    y2: Math.round(Math.max(...d))
  };
}
function tw(n, i) {
  return `${[
    El(n.x0, n.y0, i),
    El(n.x1, n.y0, i),
    El(n.x1, n.y1, i),
    El(n.x0, n.y1, i)
  ].map((r, s) => `${s === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function nw(n, i) {
  return El((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function aw(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function mr(n, i, o) {
  const r = [...n], [s] = r.splice(i, 1);
  return r.splice(o, 0, s), r;
}
function iw(n, i) {
  return Object.keys(n.states).filter((o) => o.startsWith(`${i}.`)).sort();
}
function pr({
  hass: n,
  domain: i,
  value: o,
  optional: r,
  onChange: s
}) {
  return /* @__PURE__ */ g.jsxs("select", { value: o ?? "", onChange: (d) => s(d.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: r ? "Not configured" : `Select ${i}` }),
    iw(n, i).map((d) => /* @__PURE__ */ g.jsx("option", { children: d }, d))
  ] });
}
function lw({
  areas: n,
  value: i,
  onChange: o
}) {
  const r = F.useRef(null), [s, d] = F.useState(() => !!customElements.get("ha-area-picker"));
  return F.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => d(!0));
  }, [s]), F.useEffect(() => {
    const f = r.current;
    if (!f) return;
    f.value = i, f.noAdd = !0;
    const m = (v) => o(v.detail.value || void 0);
    return f.addEventListener("value-changed", m), () => f.removeEventListener("value-changed", m);
  }, [s, o, i]), s ? /* @__PURE__ */ g.jsx("ha-area-picker", { ref: r, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ g.jsxs("select", { value: i ?? "", onChange: (f) => o(f.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: "Unmapped" }),
    n.map((f) => /* @__PURE__ */ g.jsxs("option", { value: f.area_id, children: [
      f.name,
      " (",
      f.area_id,
      ")"
    ] }, f.area_id)),
    i && !n.some((f) => f.area_id === i) && /* @__PURE__ */ g.jsx("option", { value: i, children: i })
  ] });
}
function ow({ hass: n, config: i, onChange: o }) {
  const r = I2(i), s = (m, v) => {
    const h = [...i.floors];
    h[m] = v, o({ ...i, floors: h });
  }, d = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], f = Object.values(n.areas ?? {}).sort((m, v) => m.name.localeCompare(v.name));
  return /* @__PURE__ */ g.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ g.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ g.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    r.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "editor-errors", role: "alert", children: r.map((m) => /* @__PURE__ */ g.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ g.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (m) => o({ ...i, name: m.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ g.jsxs("select", { value: i.language ?? "en", onChange: (m) => o({ ...i, language: m.target.value }), children: [
          /* @__PURE__ */ g.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ g.jsx("option", { value: "nl", children: "Nederlands" }),
          /* @__PURE__ */ g.jsx("option", { value: "pl", children: "Polski" }),
          /* @__PURE__ */ g.jsx("option", { value: "tr", children: "Türkçe" })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ g.jsx(pr, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && o({ ...i, entity: m }) })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["vacuum_then_mop_script", "script", "Legacy Vac followed by Mop script"],
        ["mop_mode", "select", "Mop mode"],
        ["mop_intensity", "select", "Mop intensity"],
        ["dock_mop_drying", "binary_sensor", "Dock mop drying"],
        ["dock_mop_drying_remaining_time", "sensor", "Dock mop drying remaining time"],
        ["dock_child_lock", "switch", "Dock child lock"],
        ["dock_mop_wash_frequency", "input_select", "Dock mop wash frequency"],
        ["dock_wash_mode", "input_select", "Dock washing mode"],
        ["dock_wash_temperature", "input_select", "Dock wash temperature"],
        ["dock_auto_empty", "input_boolean", "Dock auto-empty"],
        ["dock_empty_mode", "input_select", "Dock empty mode"],
        ["dock_auto_dry", "input_boolean", "Dock auto-drying"],
        ["dock_dry_duration", "input_select", "Dock drying duration"],
        ["assisted_carry_stage", "input_select", "Assisted carry stage"],
        ["assisted_carry_job", "input_text", "Assisted carry saved job"],
        ["assisted_carry_prepare_script", "script", "Assisted carry prepare script"],
        ["assisted_carry_start_script", "script", "Assisted carry start script"],
        ["assisted_carry_finish_script", "script", "Assisted carry finish script"],
        ["water_shortage", "binary_sensor", "Water shortage"],
        ["mop_attached", "binary_sensor", "Mop attached"],
        ["water_box_attached", "binary_sensor", "Water box attached"],
        ["do_not_disturb", "switch", "Do not disturb"],
        ["battery", "sensor", "Battery"],
        ["current_room", "sensor", "Current room"],
        ["cleaning_area", "sensor", "Cleaning area"],
        ["cleaning_time", "sensor", "Cleaning time"],
        ["cleaning_progress", "sensor", "Cleaning progress"],
        ["status", "sensor", "Status"],
        ["error", "sensor", "Error"],
        ["last_clean_end", "sensor", "Last clean end"]
      ].map(([m, v, h]) => /* @__PURE__ */ g.jsxs("label", { children: [
        h,
        /* @__PURE__ */ g.jsx(pr, { hass: n, domain: v, optional: !0, value: i.entities?.[m], onChange: (_) => o({ ...i, entities: { ...i.entities, [m]: _ } }) })
      ] }, m)),
      /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => o({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: i.enable_mop_only === !0, onChange: (m) => o({ ...i, enable_mop_only: m.target.checked || void 0 }) }),
        " Enable Mop only (only for models whose Roborock app offers it, e.g. Saros 10R)"
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ g.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => o({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ g.jsx(Wp, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => o({ ...i, floors: mr(i.floors, v, v - 1) }), children: /* @__PURE__ */ g.jsx(Qp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === i.floors.length - 1, onClick: () => o({ ...i, floors: mr(i.floors, v, v + 1) }), children: /* @__PURE__ */ g.jsx(Gp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => o({ ...i, floors: i.floors.filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(_r, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ g.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ g.jsx("input", { value: m.id, onChange: (h) => s(v, { ...m, id: h.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: m.name, onChange: (h) => s(v, { ...m, name: h.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ g.jsx(pr, { hass: n, domain: "image", value: m.map_entity, onChange: (h) => {
              if (!h) return;
              const _ = zv(n.states[h]), w = new Map(m.rooms.map((E) => [E.segment_id, E])), z = _.map((E) => ({
                ...w.get(E.segment_id),
                segment_id: E.segment_id,
                name: w.get(E.segment_id)?.name ?? E.source_name,
                include_in_floor_clean: w.get(E.segment_id)?.include_in_floor_clean ?? !0
              }));
              s(v, { ...m, map_entity: h, rooms: z });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ g.jsxs("select", { value: m.map_select_option ?? "", onChange: (h) => s(v, { ...m, map_select_option: h.target.value || void 0 }), children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "Not configured" }),
              d.map((h) => /* @__PURE__ */ g.jsx("option", { children: h }, h))
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ g.jsx(pr, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (h) => s(v, { ...m, vacuum_then_mop_routine: h }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (h) => s(v, { ...m, assisted_carry: h.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ g.jsx("h4", { children: "Discovered rooms" }),
        m.rooms.length === 0 ? /* @__PURE__ */ g.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ g.jsx("div", { className: "room-editor-list", children: m.rooms.map((h, _) => /* @__PURE__ */ g.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ g.jsxs("strong", { children: [
            "Segment ",
            h.segment_id
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: h.name, onChange: (w) => {
              const z = [...m.rooms];
              z[_] = { ...h, name: w.target.value }, s(v, { ...m, rooms: z });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ g.jsx(lw, { areas: f, value: h.area_id, onChange: (w) => {
              const z = [...m.rooms];
              z[_] = { ...h, area_id: w }, s(v, { ...m, rooms: z });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ g.jsx("input", { value: h.icon ?? "", placeholder: "mdi:floor-plan", onChange: (w) => {
              const z = [...m.rooms];
              z[_] = { ...h, icon: w.target.value || void 0 }, s(v, { ...m, rooms: z });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: h.include_in_floor_clean !== !1, onChange: (w) => {
              const z = [...m.rooms];
              z[_] = { ...h, include_in_floor_clean: w.target.checked }, s(v, { ...m, rooms: z });
            } }),
            " Include in Entire floor"
          ] })
        ] }, h.segment_id)) })
      ] }, `${m.id}-${v}`))
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ g.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => {
          const m = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          o({ ...i, presets: [...i.presets ?? [], m] });
        }, children: [
          /* @__PURE__ */ g.jsx(Wp, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => o({ ...i, presets: mr(i.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ g.jsx(Qp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (i.presets?.length ?? 0) - 1, onClick: () => o({ ...i, presets: mr(i.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ g.jsx(Gp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => o({ ...i, presets: (i.presets ?? []).filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(_r, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((h) => /* @__PURE__ */ g.jsxs("label", { children: [
            h.replaceAll("_", " "),
            /* @__PURE__ */ g.jsx("input", { value: m[h] ?? "", onChange: (_) => {
              const w = [...i.presets ?? []];
              w[v] = { ...m, [h]: _.target.value || void 0 }, o({ ...i, presets: w });
            } })
          ] }, h)),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ g.jsxs("select", { value: m.strategy, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, strategy: h.target.value }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, cleaning_type: h.target.value }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ g.jsx("option", { value: "mop", children: "Mop only" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, cleaning_count: Number(h.target.value) }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ g.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${v}`)),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ g.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (m) => o({ ...i, default_preset: m.target.value }), children: [
          /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ g.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((m) => /* @__PURE__ */ g.jsx("option", { value: m.id, children: m.name }, m.id))
        ] })
      ] })
    ] })
  ] });
}
const rw = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Dl extends Error {
  constructor(i, o, r) {
    super(o, r), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function uw(n, i) {
  return n.floors.find((o) => o.assisted_carry && o.id === i?.floor_id) ?? n.floors.find((o) => o.assisted_carry);
}
function sw(n, i) {
  const o = i.entities?.assisted_carry_stage, r = o ? n.states[o]?.state : void 0;
  return r && rw.has(r) ? r : "idle";
}
function cw(n) {
  return !["idle", "complete", "error"].includes(n);
}
function dw(n, i, o) {
  const r = o.cleaning_type === "vacuum_then_mop", s = o.cleaning_type === "mop";
  if (o.strategy !== "smartplan" && !r && !s && !o.fan_speed)
    throw new Dl("prepare", "Suction is required");
  if (o.strategy !== "smartplan" && !r && o.cleaning_type !== "vacuum" && (!o.mop_mode || !o.mop_intensity))
    throw new Dl("prepare", "Water flow and route are required");
  const d = [...new Set(i)], f = n.rooms.filter((v) => d.includes(v.segment_id)), m = n.rooms.filter((v) => v.include_in_floor_clean !== !1 && v.area_id).map((v) => v.segment_id);
  return {
    segment_ids: d,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: f.map((v) => v.area_id).filter((v) => !!v),
    whole_floor: d.length === m.length && m.every((v) => d.includes(v)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: o.strategy,
    cleaning_type: o.cleaning_type,
    fan_speed: o.strategy === "smartplan" || r || s ? void 0 : o.fan_speed,
    mop_mode: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_mode,
    mop_intensity: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_intensity,
    cleaning_count: o.strategy === "smartplan" || o.cleaning_type === "vacuum_then_mop" ? 1 : o.cleaning_count
  };
}
function fw(n) {
  return JSON.stringify({
    s: n.segment_ids,
    d: n.floor_id,
    o: n.map_select_option,
    a: n.area_ids,
    e: n.whole_floor ? 1 : void 0,
    r: n.vacuum_then_mop_routine,
    g: n.strategy,
    t: n.cleaning_type,
    f: n.fan_speed,
    m: n.mop_mode,
    w: n.mop_intensity,
    c: n.cleaning_count
  });
}
function mw(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((v) => Number.isInteger(v)) || ![1, 2].includes(Number(i.c))) return;
      const o = i.g === void 0 ? "custom" : i.g, r = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(o)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(r))) return;
      const s = typeof i.f == "string" ? i.f : void 0, d = typeof i.m == "string" ? i.m : void 0, f = typeof i.w == "string" ? i.w : void 0, m = r === "vacuum_then_mop";
      return o === "custom" && !m && r !== "mop" && !s || o === "custom" && !m && r !== "vacuum" && (!d || !f) ? void 0 : {
        segment_ids: i.s,
        floor_id: typeof i.d == "string" ? i.d : void 0,
        map_select_option: typeof i.o == "string" ? i.o : void 0,
        area_ids: Array.isArray(i.a) && i.a.every((v) => typeof v == "string") ? i.a : void 0,
        whole_floor: i.e === 1,
        vacuum_then_mop_routine: typeof i.r == "string" ? i.r : void 0,
        strategy: o,
        cleaning_type: r,
        fan_speed: s,
        mop_mode: d,
        mop_intensity: f,
        cleaning_count: Number(i.c)
      };
    } catch {
      return;
    }
}
function xi(n, i, o) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new Dl(o, `${i ?? "entity"} is unavailable`);
  return i;
}
async function bi(n, i, o) {
  const r = xi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: o }, { entity_id: r });
}
async function pw(n, i, o) {
  const r = xi(n, i.entities?.assisted_carry_job, "save_job"), s = xi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: fw(o) }, { entity_id: r }), await bi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function hw(n, i, o, r) {
  const s = xi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), d = o.rooms.filter((m) => r.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (d.length === 0) throw new Dl("start_upstairs", "No mapped rooms were saved");
  const f = {
    cleaning_area_id: d,
    strategy: r.strategy,
    cleaning_type: r.cleaning_type,
    cleaning_count: r.cleaning_count
  };
  r.fan_speed && (f.fan_speed = r.fan_speed), r.mop_mode && (f.mop_mode = r.mop_mode), r.mop_intensity && (f.mop_intensity = r.mop_intensity), await n.callService("script", "turn_on", {
    variables: f
  }, { entity_id: s });
}
async function vw(n, i) {
  const o = xi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: o });
}
async function zh(n, i) {
  await bi(n, i, "idle");
  const o = xi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: o });
}
const hr = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function vr(n, i) {
  if (!i) return [];
  const o = n.states[i];
  return !o || o.state === "unavailable" ? [] : Array.isArray(o.attributes.options) ? o.attributes.options.map(String) : [];
}
function yw(n, i) {
  const o = n.states[i.entity], r = Number(o?.attributes.supported_features ?? 0), s = Array.isArray(o?.attributes.fan_speed_list) ? o.attributes.fan_speed_list.map(String) : [], d = vr(n, i.entities?.map_select), f = vr(n, i.entities?.cleaning_mode), m = vr(n, i.entities?.mop_mode), v = vr(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: s,
    mapOptions: d,
    cleaningModes: f,
    mopModes: m,
    mopIntensities: v,
    canStart: !!(r & hr.start),
    canPause: !!(r & hr.pause),
    canStop: !!(r & hr.stop),
    canDock: !!(r & hr.returnHome),
    hasMapSelect: d.length > 0,
    hasCleaningMode: f.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function gw(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function _w(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const bw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, Sw = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, ww = {
  normal: 0,
  warm: 1,
  hot: 2
}, zw = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, xw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class En extends Error {
  constructor(i, o, r) {
    super(o, r), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function It(n, i, o, r) {
  const s = { command: o };
  r !== void 0 && (s.params = r), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function yr(n, i, o) {
  const r = n[i];
  if (r === void 0) throw new En(o, `Unsupported value: ${i}`);
  return r;
}
function kw(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new En("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function Tw(n, i, o, r) {
  const s = i.entities?.[bw[o]];
  if (!s) return;
  const d = s.split(".")[0];
  if (typeof r == "boolean") {
    if (!["input_boolean", "switch"].includes(d))
      throw new En(o, `${s} is not a boolean helper`);
    await n.callService(d, r ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(d))
    throw new En(o, `${s} is not a select helper`);
  await n.callService(d, "select_option", { option: r }, { entity_id: s });
}
async function Ew(n, i, o, r) {
  try {
    switch (o) {
      case "mop_wash_frequency":
        await It(n, i, "set_smart_wash_params", kw(String(r)));
        break;
      case "wash_mode":
        await It(n, i, "set_wash_towel_mode", {
          wash_mode: yr(Sw, String(r), o)
        });
        break;
      case "wash_temperature":
        await It(n, i, "set_wash_water_temperature", {
          values: yr(ww, String(r), o)
        });
        break;
      case "auto_empty":
        await It(n, i, "set_dust_collection_switch_status", { status: r ? 1 : 0 });
        break;
      case "empty_mode":
        await It(n, i, "set_dust_collection_mode", {
          mode: yr(zw, String(r), o)
        });
        break;
      case "auto_dry":
        await It(n, i, "app_set_dryer_setting", { status: r ? 1 : 0 });
        break;
      case "dry_duration":
        await It(n, i, "app_set_dryer_setting", {
          on: { dry_time: yr(xw, String(r), o) }
        });
        break;
    }
    await Tw(n, i, o, r);
  } catch (s) {
    throw s instanceof En ? s : new En(o, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function lc(n, i, o, r = !1) {
  const s = `${r ? "stop" : "start"}_${o}`;
  try {
    o === "empty" && await It(n, i, r ? "app_stop_collect_dust" : "app_start_collect_dust"), o === "wash" && await It(n, i, r ? "app_stop_wash" : "app_start_wash"), o === "dry" && await It(n, i, "app_set_dryer_status", { status: r ? 0 : 1 }), o === "drain" && await It(n, i, "app_empty_rinse_tank_water");
  } catch (d) {
    throw new En(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
const Aw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), gc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), jw = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Ee extends Error {
  constructor(i, o, r) {
    super(o, r), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function Mw(n, i, o, r, s, d) {
  const f = Date.now();
  for (; Date.now() - f < r; ) {
    if (n().states[i]?.state === o) return;
    await d(s);
  }
  throw new Ee("wait_for_state", `${i} did not become “${o}” within ${r / 1e3}s`);
}
function Al(n, i, o, r) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new Ee(r, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(o)) throw new Ee(r, `${i} does not support “${o}”`);
}
async function zl(n, i, o, r, s, d, f, m = !0) {
  const v = n();
  if (Al(v, i, o, r), v.states[i]?.state !== o)
    try {
      if (await v.callService("select", "select_option", { option: o }, { entity_id: i }), !m) return;
      await Mw(n, i, o, s, d, f);
    } catch (h) {
      throw h instanceof Ee ? new Ee(r, h.message, { cause: h }) : new Ee(r, h instanceof Error ? h.message : String(h), { cause: h });
    }
}
async function Cw(n, i) {
  const o = {
    fan_power: 102,
    water_box_mode: 200
  };
  i.entities?.mop_mode && (o.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [o] },
      { entity_id: i.entity }
    );
  } catch (r) {
    throw new Ee("set_cleaning_mode", r instanceof Error ? r.message : String(r), { cause: r });
  }
}
async function xv(n, i, o, r, s) {
  try {
    await n.callService("vacuum", "send_command", { command: o, params: r }, { entity_id: i.entity });
  } catch (d) {
    throw new Ee(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
async function xh(n, i, o) {
  await xv(n, i, "set_clean_repeat_times", { repeat: o }, "set_cleaning_count");
}
async function Ow(n, i) {
  await xv(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function kh(n, i, o) {
  const r = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(r) ? r.map(String) : []).includes(o))
    throw new Ee("set_fan_speed", `${i} does not support “${o}”`);
}
async function Nw({
  getHass: n,
  config: i,
  floor: o,
  rooms: r,
  draft: s,
  zone: d,
  timeoutMs: f = 1e4,
  pollMs: m = 150,
  sleep: v = (h) => new Promise((_) => setTimeout(_, h))
}) {
  const h = n(), _ = h.states[i.entity];
  if (!_ || _.state === "unavailable") throw new Ee("preflight", `${i.entity} is unavailable`);
  if (gw(_.state)) throw new Ee("preflight", `Vacuum is ${_.state}`);
  const w = i.entities?.error ? h.states[i.entities.error] : void 0;
  if (w && !["none", "unknown", "unavailable", ""].includes(w.state))
    throw new Ee("preflight", `Vacuum error: ${w.state}`);
  const z = [...new Set(r.map(($) => $.area_id).filter(($) => !!$))];
  if (!d && z.length === 0) throw new Ee("preflight", "Select at least one room mapped to a Home Assistant area");
  if (s.cleaning_type === "mop" && !i.enable_mop_only)
    throw new Ee("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const E = s.cleaning_type === "mop" ? "mop" : s.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, N = E ? i.mop_routes?.[E] : void 0;
  if (s.mop_mode && N && !N.includes(s.mop_mode))
    throw new Ee("preflight", `Mop route “${s.mop_mode}” is not allowed for ${E}`);
  if (d && (s.strategy !== "custom" || !gc.has(s.cleaning_type)))
    throw new Ee("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (d && (![d.x1, d.y1, d.x2, d.y2].every(Number.isFinite) || d.x2 <= d.x1 || d.y2 <= d.y1))
    throw new Ee("preflight", "The selected zone is invalid");
  const X = i.entities?.map_select, V = async () => {
    if (!(i.floors.length <= 1)) {
      if (!X || !o.map_select_option) throw new Ee("select_floor", "This floor has no map selector mapping");
      if (await zl(n, X, o.map_select_option, "select_floor", f, m, v), m > 0 && await v(m), n().states[X]?.state !== o.map_select_option)
        throw new Ee("select_floor", `${X} did not stay on “${o.map_select_option}”`);
    }
  };
  if (await V(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const $ = o.vacuum_then_mop_routine;
    if ($) {
      const M = n().states[$];
      if (!M || M.state === "unavailable")
        throw new Ee("start_vacuum_then_mop", `${$} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: $ });
      } catch (J) {
        throw new Ee("start_vacuum_then_mop", J instanceof Error ? J.message : String(J), { cause: J });
      }
      return o.rooms.filter((J) => J.include_in_floor_clean !== !1).map((J) => J.area_id).filter((J) => !!J);
    }
    const q = i.entities?.vacuum_then_mop_script, W = q ? n().states[q] : void 0;
    if (!q || !W || W.state === "unavailable")
      throw new Ee("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const te = i.entities?.cleaning_mode;
    if (!te)
      throw new Ee("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (Al(n(), te, "vacuum", "set_cleaning_mode"), Al(n(), te, "mop", "set_cleaning_mode"), s.mop_mode) {
      const M = i.entities?.mop_mode;
      if (!M) throw new Ee("set_mop_mode", "The selected profile requires a mop-mode entity");
      Al(n(), M, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const M = i.entities?.mop_intensity;
      if (!M) throw new Ee("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      Al(n(), M, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && kh(n(), i.entity, s.fan_speed), await V();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: z,
            fan_speed: s.fan_speed,
            mop_mode: s.mop_mode,
            mop_intensity: s.mop_intensity
          }
        },
        { entity_id: q }
      );
    } catch (M) {
      throw new Ee("start_vacuum_then_mop", M instanceof Error ? M.message : String(M), { cause: M });
    }
    return z;
  }
  if (s.strategy === "smartplan")
    await Ow(n(), i), await xh(n(), i, 1);
  else {
    const $ = i.entities?.cleaning_mode, q = jw[s.cleaning_type], W = $ && n().states[$]?.attributes.options;
    if ($ && Array.isArray(W) && W.map(String).includes(q))
      await zl(
        n,
        $,
        q,
        "set_cleaning_mode",
        f,
        m,
        v,
        q === "vacuum"
      );
    else if (s.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await Cw(n(), i);
    else {
      if (s.cleaning_type === "vacuum")
        throw new Ee("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (s.cleaning_type === "mop")
        throw new Ee("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const te = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!te) throw new Ee("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[te]?.state === "smart_mode" && Aw.has(s.mop_mode) && await zl(n, te, "custom", "leave_smartplan", f, m, v), await zl(n, te, s.mop_mode, "set_mop_mode", f, m, v);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const M = i.entities?.mop_intensity;
      if (!M) throw new Ee("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await zl(n, M, s.mop_intensity, "set_mop_intensity", f, m, v);
    }
    if (s.fan_speed && s.cleaning_type !== "mop") {
      const M = n();
      kh(M, i.entity, s.fan_speed);
      try {
        await M.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch (J) {
        throw new Ee("set_fan_speed", J instanceof Error ? J.message : String(J), { cause: J });
      }
    }
    d || await xh(n(), i, s.cleaning_count);
  }
  await V();
  const K = new Set(r.map(($) => $.segment_id)), ee = r.length === o.rooms.length && o.rooms.every(($) => K.has($.segment_id));
  try {
    d ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...d, repeats: s.cleaning_count },
      { entity_id: i.entity }
    ) : ee ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: z },
      { entity_id: i.entity }
    );
  } catch ($) {
    const q = d ? "clean_zone" : ee ? "start_floor" : "clean_area";
    throw new Ee(q, $ instanceof Error ? $.message : String($), { cause: $ });
  }
  return z;
}
const Dw = {
  status: "Status",
  battery: "Battery",
  room: "Room",
  area: "Area",
  duration: "Duration",
  progress: "Progress",
  entireFloor: "Entire floor",
  configureJob: "Configure job",
  selectionMode: "Map selection mode",
  rooms: "Rooms",
  zone: "Zone",
  selectedRooms: "Selected rooms",
  noRoomsSelected: "Tap one or more rooms on the map",
  selectedZone: "Selected zone",
  noZoneSelected: "Drag on the map to draw a cleaning zone",
  zoneReady: "Drag to move or use the corners to resize",
  customZone: "Custom zone",
  clearZone: "Clear zone",
  resizeZone: "Resize zone",
  pause: "Pause",
  resume: "Resume",
  stop: "Stop",
  dock: "Dock",
  dryingMop: "Drying mop",
  washingMop: "Washing mop",
  remaining: "remaining",
  configureTitle: "Configure cleaning job",
  presets: "Presets",
  cleaningType: "Cleaning type",
  smartPlan: "AI SmartPlan",
  vacuumOnly: "Vacuum only",
  vacuumAndMop: "Vac & Mop",
  vacuumThenMop: "Vac followed by Mop",
  smartPlanDescription: "Roborock AI chooses suction, water flow, and route for every selected room.",
  vacuumDescription: "Vacuum only. The mop stays raised.",
  mopOnly: "Mop only",
  mopOnlyDescription: "Mop only. Suction stays off.",
  vacuumAndMopDescription: "Vacuum and mop together for a daily clean.",
  vacuumThenMopDescription: "Runs the saved Roborock routine for this floor. Rooms, suction, water flow, passes, and route are defined in the Roborock app.",
  suction: "Suction",
  waterFlow: "Water flow",
  cleaningCount: "Cleaning count",
  savedProfiles: "Saved profiles",
  mopRoute: "Mop route",
  mopIntensity: "Mop intensity",
  cancel: "Cancel",
  start: "Start",
  starting: "Starting…",
  unsupported: "Unavailable",
  mapMissing: "The configured map entity is unavailable.",
  imageMissing: "The map entity does not expose an image.",
  calibrationMissing: "Roborock Custom Map calibration is missing. Install and configure Roborock Custom Map.",
  roomsMissing: "Roborock Custom Map room metadata is missing. No hitboxes were guessed.",
  roomUnmapped: "This segment is not mapped to a Home Assistant area.",
  launched: "Cleaning job sent",
  floor: "Floor",
  close: "Close",
  dockStation: "Dock station",
  dockOverview: "Wash, empty, dry, and dock settings",
  empty: "Empty",
  wash: "Wash",
  dry: "Dry",
  dockSettings: "Dock settings",
  mopWashFrequency: "Mop wash frequency",
  washingMode: "Washing mode",
  washTemperature: "Water temperature",
  dustbin: "Dustbin",
  autoEmpty: "Auto-empty",
  emptyMode: "Empty mode",
  drying: "Drying",
  autoDry: "Auto-drying",
  dryDuration: "Duration",
  safetyMaintenance: "Safety & maintenance",
  childLock: "Dock child lock",
  drainWaterTank: "Drain onboard dirty-water tank",
  drainWarning: "Unavailable through the current Home Assistant Roborock integration. Use the Roborock app.",
  confirmEmpty: "Start dock emptying? This will make noise.",
  confirmWash: "Start washing the mop? This will run the dock pump.",
  confirmDry: "Start drying the mop? This will run the dock fan.",
  confirmDrain: "Drain the onboard dirty-water tank now?",
  drainRejected: "Home Assistant cannot currently encode this Roborock command correctly. Use the Roborock app.",
  settingSaved: "Dock setting saved",
  dockActionSent: "Dock command sent",
  active: "Active",
  inactive: "Off",
  prepareUpstairs: "Prepare upstairs",
  preparingUpstairs: "Preparing…",
  startUpstairs: "Start upstairs",
  dockAndFinish: "Dock & finish",
  newUpstairsJob: "New upstairs job",
  assistedCarryTitle: "Upstairs assisted clean",
  assistedCarryDescription: "The dock prepares the mop, then the card guides both carries and finishes dock maintenance.",
  assisted_preparing_title: "Preparing at the dock",
  assisted_preparing_description: "Stopping drying, washing the mop, and moving the robot to its pickup point.",
  assisted_carry_upstairs_title: "Carry the robot upstairs",
  assisted_carry_upstairs_description: "Place it at a clear starting point, then start the saved Vac & Mop job.",
  assisted_cleaning_upstairs_title: "Cleaning upstairs",
  assisted_cleaning_upstairs_description: "The robot will return to this upstairs starting point when it is finished.",
  assisted_carry_downstairs_title: "Carry the robot downstairs",
  assisted_carry_downstairs_description: "Place it on the downstairs floor near the dock, or directly onto the dock.",
  assisted_finishing_title: "Finishing at the dock",
  assisted_finishing_description: "Docking, emptying, washing the mop, and verifying automatic drying.",
  assisted_complete_title: "Upstairs cleaning complete",
  assisted_complete_description: "The robot is docked, the mop is washed, and drying has started when configured.",
  assisted_error_title: "Assistant needs attention",
  assisted_error_description: "Check the robot and dock, then reset the workflow to try again.",
  lastClean: "Last clean",
  justNow: "just now",
  yesterday: "yesterday",
  ago: "ago",
  daysAgo: "days ago",
  hourShort: "h",
  minuteShort: "min"
}, Zw = {
  status: "Status",
  battery: "Batterij",
  room: "Ruimte",
  area: "Oppervlak",
  duration: "Duur",
  progress: "Voortgang",
  entireFloor: "Hele verdieping",
  configureJob: "Taak instellen",
  selectionMode: "Kaartselectiemodus",
  rooms: "Kamers",
  zone: "Zone",
  selectedRooms: "Geselecteerde kamers",
  noRoomsSelected: "Tik één of meer kamers op de kaart aan",
  selectedZone: "Geselecteerde zone",
  noZoneSelected: "Sleep op de kaart om een schoonmaakzone te tekenen",
  zoneReady: "Sleep om te verplaatsen of gebruik de hoeken om het formaat aan te passen",
  customZone: "Aangepaste zone",
  clearZone: "Zone wissen",
  resizeZone: "Zone aanpassen",
  pause: "Pauze",
  resume: "Hervatten",
  stop: "Stop",
  dock: "Naar dock",
  dryingMop: "Dweil drogen",
  washingMop: "Dweil wassen",
  remaining: "resterend",
  configureTitle: "Schoonmaaktaak instellen",
  presets: "Presets",
  cleaningType: "Schoonmaaktype",
  smartPlan: "AI SmartPlan",
  vacuumOnly: "Alleen stofzuigen",
  vacuumAndMop: "Stofzuigen en dweilen",
  vacuumThenMop: "Stofzuigen, daarna dweilen",
  smartPlanDescription: "Roborock AI kiest per geselecteerde kamer de zuigkracht, waterhoeveelheid en route.",
  vacuumDescription: "Alleen stofzuigen. De dweil blijft opgetild.",
  mopOnly: "Alleen dweilen",
  mopOnlyDescription: "Alleen dweilen. De zuigkracht blijft uit.",
  vacuumAndMopDescription: "Tegelijk stofzuigen en dweilen voor de dagelijkse schoonmaak.",
  vacuumThenMopDescription: "Start de opgeslagen Roborock-routine voor deze verdieping. Kamers, zuigkracht, waterhoeveelheid, rondes en route zijn ingesteld in de Roborock-app.",
  suction: "Zuigkracht",
  waterFlow: "Waterhoeveelheid",
  cleaningCount: "Aantal keer",
  savedProfiles: "Opgeslagen profielen",
  mopRoute: "Dweilroute",
  mopIntensity: "Dweilintensiteit",
  cancel: "Annuleren",
  start: "Start",
  starting: "Starten…",
  unsupported: "Niet beschikbaar",
  mapMissing: "De ingestelde kaartentiteit is niet beschikbaar.",
  imageMissing: "De kaartentiteit bevat geen afbeelding.",
  calibrationMissing: "Roborock Custom Map-kalibratie ontbreekt. Installeer en configureer Roborock Custom Map.",
  roomsMissing: "Kamergegevens van Roborock Custom Map ontbreken. Er worden geen hitboxes gegokt.",
  roomUnmapped: "Dit segment is niet gekoppeld aan een Home Assistant-ruimte.",
  launched: "Schoonmaaktaak verzonden",
  floor: "Verdieping",
  close: "Sluiten",
  dockStation: "Dockstation",
  dockOverview: "Wassen, legen, drogen en dockinstellingen",
  empty: "Legen",
  wash: "Wassen",
  dry: "Drogen",
  dockSettings: "Dockinstellingen",
  mopWashFrequency: "Dweilwasfrequentie",
  washingMode: "Wasstand",
  washTemperature: "Watertemperatuur",
  dustbin: "Stofbak",
  autoEmpty: "Automatisch legen",
  emptyMode: "Leegstand",
  drying: "Drogen",
  autoDry: "Automatisch drogen",
  dryDuration: "Duur",
  safetyMaintenance: "Veiligheid en onderhoud",
  childLock: "Dock kinderslot",
  drainWaterTank: "Vuilwatertank in robot legen",
  drainWarning: "Niet beschikbaar via de huidige Roborock-integratie van Home Assistant. Gebruik de Roborock-app.",
  confirmEmpty: "Dock legen starten? Dit maakt geluid.",
  confirmWash: "Dweil wassen starten? Dit activeert de dockpomp.",
  confirmDry: "Dweil drogen starten? Dit activeert de dockventilator.",
  confirmDrain: "Vuilwatertank in de robot nu legen?",
  drainRejected: "Home Assistant kan deze Roborock-opdracht momenteel niet correct coderen. Gebruik de Roborock-app.",
  settingSaved: "Dockinstelling opgeslagen",
  dockActionSent: "Dockopdracht verzonden",
  active: "Actief",
  inactive: "Uit",
  prepareUpstairs: "Boven voorbereiden",
  preparingUpstairs: "Voorbereiden…",
  startUpstairs: "Start boven",
  dockAndFinish: "Docken en afronden",
  newUpstairsJob: "Nieuwe boventaak",
  assistedCarryTitle: "Begeleid boven schoonmaken",
  assistedCarryDescription: "Het dock bereidt de dweil voor; daarna begeleidt de kaart beide draagmomenten en de dockreiniging.",
  assisted_preparing_title: "Voorbereiden bij het dock",
  assisted_preparing_description: "Drogen stoppen, de dweil wassen en de robot naar het ophaalpunt rijden.",
  assisted_carry_upstairs_title: "Draag de robot naar boven",
  assisted_carry_upstairs_description: "Zet hem op een vrije startplek en start daarna de opgeslagen stofzuig- en dweiltaak.",
  assisted_cleaning_upstairs_title: "Boven wordt schoongemaakt",
  assisted_cleaning_upstairs_description: "Na afloop keert de robot terug naar deze startplek boven.",
  assisted_carry_downstairs_title: "Draag de robot naar beneden",
  assisted_carry_downstairs_description: "Zet hem beneden in de buurt van het dock, of plaats hem rechtstreeks op het dock.",
  assisted_finishing_title: "Afronden bij het dock",
  assisted_finishing_description: "Docken, stofbak legen, dweil wassen en automatisch drogen controleren.",
  assisted_complete_title: "Boven is klaar",
  assisted_complete_description: "De robot staat in het dock, de dweil is gewassen en drogen is gestart wanneer ingesteld.",
  assisted_error_title: "Assistent heeft aandacht nodig",
  assisted_error_description: "Controleer de robot en het dock en reset daarna de workflow.",
  lastClean: "Laatste schoonmaak",
  justNow: "zojuist",
  yesterday: "gisteren",
  ago: "geleden",
  daysAgo: "dagen geleden",
  hourShort: "u",
  minuteShort: "min"
}, Rw = {
  status: "Durum",
  battery: "Pil",
  room: "Oda",
  area: "Alan",
  duration: "Süre",
  progress: "İlerleme",
  entireFloor: "Tam Temizlik",
  configureJob: "Temizliği Ayarla",
  selectionMode: "Harita seçim modu",
  rooms: "Oda",
  zone: "Bölge",
  selectedRooms: "Seçilen odalar",
  noRoomsSelected: "Temizlenecek odaları seçin",
  selectedZone: "Seçilen bölge",
  noZoneSelected: "Temizlenecek bölgeyi çizmek için harita üzerinde sürükleyin",
  zoneReady: "Taşımak için sürükleyin veya boyutlandırmak için köşeleri kullanın",
  customZone: "Özel bölge",
  clearZone: "Bölgeyi temizle",
  resizeZone: "Bölgeyi yeniden boyutlandır",
  pause: "Duraklat",
  resume: "Devam Et",
  stop: "Durdur",
  dock: "İstasyon",
  dryingMop: "Paspas kurutuluyor",
  washingMop: "Paspas yıkanıyor",
  remaining: "kaldı",
  configureTitle: "Temizlik Ayarları",
  presets: "Ön Ayarlar",
  cleaningType: "Temizlik türü",
  smartPlan: "AI SmartPlan",
  vacuumOnly: "Sadece Süpürme",
  vacuumAndMop: "Süpürme ve Paspas",
  vacuumThenMop: "Vakum, sonra Paspas",
  smartPlanDescription: "Roborock AI, seçilen her oda için vakum gücünü, su akışını ve rotayı otomatik olarak belirler.",
  vacuumDescription: "Sadece süpürme yapar. Paspas bezi kaldırılmış durumda kalır.",
  mopOnly: "Sadece Paspas",
  mopOnlyDescription: "Sadece paspaslama yapar. Vakum kapalı kalır.",
  vacuumAndMopDescription: "Günlük temizlik için aynı anda süpürür ve paspaslar.",
  vacuumThenMopDescription: "Önce süpürme, sonra paspaslama yapar. Ayarlar Roborock uygulamasındaki kayıtlı iş akışından alınır.",
  suction: "Vakum Gücü",
  waterFlow: "Su Akışı",
  cleaningCount: "Temizlik sayısı",
  savedProfiles: "Kayıtlı profiller",
  mopRoute: "Rota",
  mopIntensity: "Silme Yoğunluğu",
  cancel: "İptal",
  start: "Başlat",
  starting: "Başlatılıyor…",
  unsupported: "Kullanılamıyor",
  mapMissing: "Ayarlanan harita kullanılamıyor.",
  imageMissing: "Harita görüntüsü kullanılamıyor.",
  calibrationMissing: "Roborock Custom Map kalibrasyonu bulunamadı. Roborock Custom Map entegrasyonunu kurup yapılandırın.",
  roomsMissing: "Roborock Custom Map oda bilgileri bulunamadı.",
  roomUnmapped: "Bu oda Home Assistant alanlarından biriyle eşleştirilmemiş.",
  launched: "Temizlik görevi gönderildi",
  floor: "Kat",
  close: "Kapat",
  dockStation: "Bağlantı İstasyonu",
  dockOverview: "Yıkama, boşaltma, kurutma ve istasyon ayarları",
  empty: "Boşalt",
  wash: "Yıka",
  dry: "Kurut",
  dockSettings: "Bağlantı İstasyonu Ayarları",
  mopWashFrequency: "Paspas yıkama sıklığı",
  washingMode: "Yıkama modu",
  washTemperature: "Su sıcaklığı",
  dustbin: "Toz Haznesi",
  autoEmpty: "Otomatik Boşaltma",
  emptyMode: "Boşaltma modu",
  drying: "Kurutma",
  autoDry: "Otomatik Kurutma",
  dryDuration: "Süre",
  safetyMaintenance: "Güvenlik ve Bakım",
  childLock: "İstasyon çocuk kilidi",
  drainWaterTank: "Robotun kirli su tankını boşalt",
  drainWarning: "Bu özellik mevcut Home Assistant Roborock entegrasyonu üzerinden kullanılamıyor. Roborock uygulamasını kullanın.",
  confirmEmpty: "Toz haznesi boşaltılsın mı? Bu işlem ses çıkaracaktır.",
  confirmWash: "Paspas yıkama başlatılsın mı?",
  confirmDry: "Paspas kurutma başlatılsın mı?",
  confirmDrain: "Robotun kirli su tankı şimdi boşaltılsın mı?",
  drainRejected: "Home Assistant şu anda bu Roborock komutunu doğru şekilde gönderemiyor. Roborock uygulamasını kullanın.",
  settingSaved: "İstasyon ayarı kaydedildi",
  dockActionSent: "İstasyon komutu gönderildi",
  active: "Aktif",
  inactive: "Kapalı",
  prepareUpstairs: "Üst katı hazırla",
  preparingUpstairs: "Hazırlanıyor…",
  startUpstairs: "Üst katta başlat",
  dockAndFinish: "İstasyona dön ve bitir",
  newUpstairsJob: "Yeni üst kat temizliği",
  assistedCarryTitle: "Üst Kat Destekli Temizlik",
  assistedCarryDescription: "İstasyon paspası hazırlar. Ardından robotu üst kata taşımanız ve temizlik tamamlandığında tekrar istasyona getirmeniz için yönlendirilirsiniz.",
  assisted_preparing_title: "İstasyonda hazırlanıyor",
  assisted_preparing_description: "Kurutma durduruluyor, paspas yıkanıyor ve robot taşınmaya hazırlanıyor.",
  assisted_carry_upstairs_title: "Robotu üst kata taşıyın",
  assisted_carry_upstairs_description: "Robotu üst katta uygun bir başlangıç noktasına yerleştirin ve ardından temizliği başlatın.",
  assisted_cleaning_upstairs_title: "Üst kat temizleniyor",
  assisted_cleaning_upstairs_description: "Temizlik tamamlandığında robot üst kattaki başlangıç noktasına geri dönecektir.",
  assisted_carry_downstairs_title: "Robotu alt kata taşıyın",
  assisted_carry_downstairs_description: "Robotu istasyonun yakınına veya doğrudan istasyona yerleştirin.",
  assisted_finishing_title: "İstasyonda tamamlanıyor",
  assisted_finishing_description: "Robot istasyona dönüyor, toz haznesi boşaltılıyor, paspas yıkanıyor ve otomatik kurutma kontrol ediliyor.",
  assisted_complete_title: "Üst kat temizliği tamamlandı",
  assisted_complete_description: "Robot istasyonda. Paspas yıkandı ve ayarlanmışsa kurutma başlatıldı.",
  assisted_error_title: "İşlem kontrol edilmeli",
  assisted_error_description: "Robotu ve istasyonu kontrol edin, ardından işlemi yeniden başlatın.",
  lastClean: "Son temizlik",
  justNow: "az önce",
  yesterday: "dün",
  ago: "önce",
  daysAgo: "gün önce",
  hourShort: "sa",
  minuteShort: "dk"
}, Uw = {
  status: "Status",
  battery: "Bateria",
  room: "Pomieszczenie",
  area: "Powierzchnia",
  duration: "Czas",
  progress: "Postęp",
  entireFloor: "Całe piętro",
  configureJob: "Ustaw sprzątanie",
  selectionMode: "Tryb wyboru na mapie",
  rooms: "Pomieszczenia",
  zone: "Strefa",
  selectedRooms: "Wybrane pomieszczenia",
  noRoomsSelected: "Dotknij jednego lub kilku pomieszczeń na mapie",
  selectedZone: "Wybrana strefa",
  noZoneSelected: "Przeciągnij po mapie, aby narysować strefę sprzątania",
  zoneReady: "Przeciągnij, aby przesunąć, lub użyj narożników, aby zmienić rozmiar",
  customZone: "Własna strefa",
  clearZone: "Usuń strefę",
  resizeZone: "Zmień rozmiar strefy",
  pause: "Pauza",
  resume: "Wznów",
  stop: "Zatrzymaj",
  dock: "Do stacji",
  dryingMop: "Suszenie mopa",
  washingMop: "Mycie mopa",
  remaining: "pozostało",
  configureTitle: "Ustawienia sprzątania",
  presets: "Profile",
  cleaningType: "Rodzaj sprzątania",
  smartPlan: "AI SmartPlan",
  vacuumOnly: "Odkurz",
  vacuumAndMop: "Odkurz i mop",
  vacuumThenMop: "Odkurz, potem mopuj",
  smartPlanDescription: "Uczy się i dostosowuje do Twojej przestrzeni, zwyczajów oraz preferencji, aby dobierać optymalną ścieżkę sprzątania.",
  vacuumDescription: "Tylko odkurzanie, jeden raz.",
  mopOnly: "Mopuj",
  mopOnlyDescription: "Tylko mopowanie, jeden raz.",
  vacuumAndMopDescription: "Dzienne odkurzanie i mopowanie.",
  vacuumThenMopDescription: "Uruchamia zapisaną procedurę Roborock dla tego piętra. Pomieszczenia, siłę ssania, przepływ wody, liczbę przejść i trasę ustawia się w aplikacji Roborock.",
  suction: "Siła ssania",
  waterFlow: "Przepływ wody",
  cleaningCount: "Liczba przejść",
  savedProfiles: "Zapisane profile",
  mopRoute: "Trasa mopowania",
  mopIntensity: "Intensywność mopowania",
  cancel: "Anuluj",
  start: "Start",
  starting: "Uruchamianie…",
  unsupported: "Niedostępne",
  mapMissing: "Skonfigurowana encja mapy jest niedostępna.",
  imageMissing: "Encja mapy nie udostępnia obrazu.",
  calibrationMissing: "Brak kalibracji Roborock Custom Map. Zainstaluj i skonfiguruj Roborock Custom Map.",
  roomsMissing: "Brak danych o pomieszczeniach z Roborock Custom Map. Obszary nie zostały zgadnięte.",
  roomUnmapped: "Ten segment nie jest przypisany do obszaru Home Assistant.",
  launched: "Wysłano zadanie sprzątania",
  floor: "Piętro",
  close: "Zamknij",
  dockStation: "Stacja",
  dockOverview: "Mycie, opróżnianie, suszenie i ustawienia stacji",
  empty: "Opróżnij",
  wash: "Umyj",
  dry: "Susz",
  dockSettings: "Ustawienia stacji",
  mopWashFrequency: "Częstotliwość mycia mopa",
  washingMode: "Tryb mycia",
  washTemperature: "Temperatura wody",
  dustbin: "Pojemnik na kurz",
  autoEmpty: "Automatyczne opróżnianie",
  emptyMode: "Tryb opróżniania",
  drying: "Suszenie",
  autoDry: "Automatyczne suszenie",
  dryDuration: "Czas suszenia",
  safetyMaintenance: "Bezpieczeństwo i konserwacja",
  childLock: "Blokada rodzicielska stacji",
  drainWaterTank: "Opróżnij zbiornik brudnej wody w robocie",
  drainWarning: "Niedostępne w obecnej integracji Roborock dla Home Assistant. Użyj aplikacji Roborock.",
  confirmEmpty: "Rozpocząć opróżnianie w stacji? Będzie głośno.",
  confirmWash: "Rozpocząć mycie mopa? Uruchomi to pompę stacji.",
  confirmDry: "Rozpocząć suszenie mopa? Uruchomi to wentylator stacji.",
  confirmDrain: "Opróżnić teraz zbiornik brudnej wody w robocie?",
  drainRejected: "Home Assistant nie potrafi obecnie poprawnie wysłać tej komendy Roborock. Użyj aplikacji Roborock.",
  settingSaved: "Zapisano ustawienie stacji",
  dockActionSent: "Wysłano komendę do stacji",
  active: "Aktywne",
  inactive: "Wyłączone",
  prepareUpstairs: "Przygotuj piętro",
  preparingUpstairs: "Przygotowywanie…",
  startUpstairs: "Start na piętrze",
  dockAndFinish: "Do stacji i zakończ",
  newUpstairsJob: "Nowe sprzątanie piętra",
  assistedCarryTitle: "Sprzątanie piętra z przenoszeniem",
  assistedCarryDescription: "Stacja przygotowuje mopa, a karta prowadzi przez oba przeniesienia robota i kończy obsługę w stacji.",
  assisted_preparing_title: "Przygotowanie w stacji",
  assisted_preparing_description: "Zatrzymywanie suszenia, mycie mopa i przejazd robota do punktu odbioru.",
  assisted_carry_upstairs_title: "Zanieś robota na piętro",
  assisted_carry_upstairs_description: "Postaw go w wolnym miejscu startowym, a potem uruchom zapisane sprzątanie.",
  assisted_cleaning_upstairs_title: "Sprzątanie piętra",
  assisted_cleaning_upstairs_description: "Po zakończeniu robot wróci do tego miejsca startowego na piętrze.",
  assisted_carry_downstairs_title: "Znieś robota na dół",
  assisted_carry_downstairs_description: "Postaw go na dolnym piętrze blisko stacji albo bezpośrednio na stacji.",
  assisted_finishing_title: "Kończenie w stacji",
  assisted_finishing_description: "Dokowanie, opróżnianie, mycie mopa i sprawdzenie automatycznego suszenia.",
  assisted_complete_title: "Sprzątanie piętra zakończone",
  assisted_complete_description: "Robot jest w stacji, mop umyty, a suszenie uruchomione, jeśli jest skonfigurowane.",
  assisted_error_title: "Wymagana uwaga",
  assisted_error_description: "Sprawdź robota i stację, a potem zresetuj procedurę, aby spróbować ponownie.",
  lastClean: "Ostatnie sprzątanie",
  justNow: "przed chwilą",
  yesterday: "wczoraj",
  ago: "temu",
  daysAgo: "dni temu",
  hourShort: "godz.",
  minuteShort: "min"
};
function H(n, i) {
  return n === "nl" ? Zw[i] : n === "pl" ? Uw[i] : n === "tr" ? Rw[i] : Dw[i];
}
const Th = {
  en: { deep_plus: "Deep+" },
  pl: {
    quiet: "Cichy",
    balanced: "Zrównoważony",
    turbo: "Turbo",
    max: "Max",
    max_plus: "Max+",
    slight: "Minimalny",
    low: "Niski",
    medium: "Średni",
    moderate: "Umiarkowany",
    high: "Wysoki",
    extreme: "Ekstremalny",
    fast: "Szybko",
    standard: "Ogólne",
    deep: "Intensywny",
    deep_plus: "Intensywny+"
  }
};
function kv(n, i) {
  return Th[n ?? "en"]?.[i] ?? Th.en?.[i] ?? i.replaceAll("_", " ").replace(/\b\w/g, (o) => o.toUpperCase());
}
const Eh = [
  {
    id: "smartplan",
    name: "SmartPlan",
    icon: "mdi:creation",
    strategy: "smartplan",
    cleaning_type: "vacuum_and_mop",
    cleaning_count: 1
  },
  {
    id: "vacuum_then_mop",
    name: "Vac followed by Mop",
    icon: "mdi:vacuum-outline",
    strategy: "custom",
    cleaning_type: "vacuum_then_mop",
    fan_speed: "balanced",
    mop_mode: "standard",
    mop_intensity: "medium",
    cleaning_count: 1
  },
  {
    id: "vacuum_and_mop",
    name: "Vac & Mop",
    icon: "mdi:water-plus",
    strategy: "custom",
    cleaning_type: "vacuum_and_mop",
    fan_speed: "balanced",
    mop_mode: "standard",
    mop_intensity: "medium",
    cleaning_count: 1
  },
  {
    id: "vacuum_only",
    name: "Vacuum only",
    icon: "mdi:vacuum",
    strategy: "custom",
    cleaning_type: "vacuum",
    fan_speed: "balanced",
    mop_mode: "standard",
    cleaning_count: 1
  },
  {
    id: "mop_only",
    name: "Mop only",
    icon: "mdi:water",
    strategy: "custom",
    cleaning_type: "mop",
    mop_mode: "standard",
    mop_intensity: "medium",
    cleaning_count: 1
  }
];
function Yw(n, i, o, r) {
  const s = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (o.cleaning_type === "vacuum" && !s)
    return "cleaning mode “vacuum”";
  if (o.cleaning_type === "mop" && !n.enable_mop_only)
    return "Mop only (set enable_mop_only: true)";
  if (o.cleaning_type === "mop" && !i.cleaningModes.includes("mop"))
    return "cleaning mode “mop”";
  if (o.cleaning_type === "vacuum_then_mop") {
    if (r?.vacuum_then_mop_routine || r?.assisted_carry && n.entities?.assisted_carry_start_script) return;
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!i.cleaningModes.includes("vacuum") || !i.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (o.fan_speed && !i.fanSpeeds.includes(o.fan_speed)) return `fan speed “${o.fan_speed}”`;
  if (o.cleaning_type !== "vacuum" && o.mop_mode && !i.mopModes.includes(o.mop_mode))
    return `mop mode “${o.mop_mode}”`;
  if (o.cleaning_type !== "vacuum" && o.mop_intensity && !i.mopIntensities.includes(o.mop_intensity))
    return `mop intensity “${o.mop_intensity}”`;
}
function Bw(n, i, o) {
  return [...n.enable_mop_only ? Eh : Eh.filter((s) => s.cleaning_type !== "mop"), ...n.presets ?? []].map((s) => {
    const d = Yw(n, i, s, o);
    return {
      preset: s,
      available: !d,
      reason: d ? `Unsupported ${d}` : void 0
    };
  });
}
function Cl(n) {
  return {
    preset_id: n.id,
    strategy: n.strategy,
    cleaning_type: n.cleaning_type ?? "vacuum_and_mop",
    fan_speed: n.fan_speed,
    mop_mode: n.mop_mode,
    mop_intensity: n.mop_intensity,
    cleaning_count: n.cleaning_count ?? 1
  };
}
const Hw = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Xw = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, qw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function xa(n, i, o) {
  const r = i.entities?.[qw[o]], s = r ? n.states[r]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? Xw[o] : o === "auto_empty" || o === "auto_dry" ? s === "on" : s;
}
function jl(n, i) {
  const o = {
    smart: ["Smart", "Slim", "Akıllı", "Inteligentny"],
    light: ["Light", "Licht", "Hafif", "Lekki"],
    balanced: ["Balanced", "Gebalanceerd", "Dengeli", "Zrównoważony"],
    deep: ["Deep", "Diep", "Derin", "Głęboki"],
    max: ["Max", "Max", "Maksimum", "Maks."],
    normal: ["Normal", "Normaal", "Normal", "Normalna"],
    warm: ["Warm", "Warm", "Ilık", "Ciepła"],
    hot: ["High temperature", "Hoge temperatuur", "Yüksek sıcaklık", "Wysoka temperatura"],
    "2h": ["2 hours", "2 uur", "2 saat", "2 godziny"],
    "3h": ["3 hours · Standard", "3 uur · Standaard", "3 saat · Standart", "3 godziny · Standard"],
    "4h": ["4 hours", "4 uur", "4 saat", "4 godziny"]
  };
  if (i.endsWith("_min"))
    return `${i.replace("_min", "")} ${H(n, "minuteShort")}`;
  const r = n === "nl" ? 1 : n === "tr" ? 2 : n === "pl" ? 3 : 0;
  return o[i]?.[r] ?? i;
}
function xl({
  label: n,
  setting: i,
  value: o,
  language: r,
  disabled: s,
  onChange: d
}) {
  return /* @__PURE__ */ g.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx("select", { "aria-label": n, value: o, disabled: s, onChange: (f) => d(f.target.value), children: Hw[i].map((f) => /* @__PURE__ */ g.jsx("option", { value: f, children: jl(r, f) }, f)) })
  ] });
}
function oc({
  label: n,
  checked: i,
  disabled: o,
  onChange: r
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": i,
        className: `dock-toggle ${i ? "active" : ""}`,
        disabled: o,
        onClick: () => r(!i),
        children: /* @__PURE__ */ g.jsx("span", {})
      }
    )
  ] });
}
function $w({
  hass: n,
  config: i,
  language: o,
  washing: r,
  emptying: s,
  drying: d,
  dryingRemaining: f,
  pending: m,
  onClose: v,
  onAction: h,
  onSetting: _,
  onChildLock: w
}) {
  const z = !!m, E = i.entities?.dock_child_lock, N = E ? n.states[E]?.state === "on" : !1, X = String(xa(n, i, "mop_wash_frequency")), V = String(xa(n, i, "wash_mode")), K = String(xa(n, i, "wash_temperature")), ee = !!xa(n, i, "auto_empty"), $ = String(xa(n, i, "empty_mode")), q = !!xa(n, i, "auto_dry"), W = String(xa(n, i, "dry_duration")), te = [
    { action: "empty", label: H(o, "empty"), active: s, icon: /* @__PURE__ */ g.jsx(_r, {}), detail: jl(o, $) },
    { action: "wash", label: H(o, "wash"), active: r, icon: /* @__PURE__ */ g.jsx(Pp, {}), detail: `${jl(o, V)} · ${jl(o, K)}` },
    { action: "dry", label: H(o, "dry"), active: d, icon: /* @__PURE__ */ g.jsx(Fp, {}), detail: d ? f : jl(o, W) }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": H(o, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "dock-sheet-title", children: H(o, "dockStation") }),
          /* @__PURE__ */ g.jsx("p", { children: H(o, "dockOverview") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": H(o, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(xc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "dock-actions", children: te.map((M) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: M.active ? "active" : "",
            disabled: z,
            onClick: () => h(M.action, M.active),
            children: [
              /* @__PURE__ */ g.jsx("span", { className: "dock-action-icon", children: M.icon }),
              /* @__PURE__ */ g.jsx("strong", { children: M.active ? H(o, "stop") : M.label }),
              /* @__PURE__ */ g.jsx("small", { children: M.active ? H(o, "active") : M.detail })
            ]
          },
          M.action
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Pp, {}),
            H(o, "dockSettings")
          ] }),
          /* @__PURE__ */ g.jsx(xl, { label: H(o, "mopWashFrequency"), setting: "mop_wash_frequency", value: X, language: o, disabled: z, onChange: (M) => _("mop_wash_frequency", M) }),
          /* @__PURE__ */ g.jsx(xl, { label: H(o, "washingMode"), setting: "wash_mode", value: V, language: o, disabled: z, onChange: (M) => _("wash_mode", M) }),
          /* @__PURE__ */ g.jsx(xl, { label: H(o, "washTemperature"), setting: "wash_temperature", value: K, language: o, disabled: z, onChange: (M) => _("wash_temperature", M) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(_r, {}),
            H(o, "dustbin")
          ] }),
          /* @__PURE__ */ g.jsx(oc, { label: H(o, "autoEmpty"), checked: ee, disabled: z, onChange: (M) => _("auto_empty", M) }),
          /* @__PURE__ */ g.jsx(xl, { label: H(o, "emptyMode"), setting: "empty_mode", value: $, language: o, disabled: z, onChange: (M) => _("empty_mode", M) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Fp, {}),
            H(o, "drying")
          ] }),
          /* @__PURE__ */ g.jsx(oc, { label: H(o, "autoDry"), checked: q, disabled: z, onChange: (M) => _("auto_dry", M) }),
          /* @__PURE__ */ g.jsx(xl, { label: H(o, "dryDuration"), setting: "dry_duration", value: W, language: o, disabled: z, onChange: (M) => _("dry_duration", M) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(qh, {}),
            H(o, "safetyMaintenance")
          ] }),
          E && /* @__PURE__ */ g.jsx(oc, { label: H(o, "childLock"), checked: N, disabled: z, onChange: w }),
          /* @__PURE__ */ g.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ g.jsx(N_, {}),
            /* @__PURE__ */ g.jsxs("span", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: H(o, "drainWaterTank") }),
              /* @__PURE__ */ g.jsx("small", { children: H(o, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ g.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function _c({ icon: n, className: i }) {
  return n ? F.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const Ah = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], Lw = ["vacuum_only", "vacuum_and_mop", "mop_only"], Vw = ["quiet", "balanced", "turbo", "max", "max_plus"], Gw = ["quiet", "balanced", "turbo", "max"], Qw = ["fast", "standard", "deep"], Kw = ["slight", "low", "medium", "moderate", "high", "extreme"], Jw = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, Ww = {
  smartplan: "smartPlan",
  vacuum_then_mop: "vacuumThenMop",
  vacuum_and_mop: "vacuumAndMop",
  vacuum_only: "vacuumOnly",
  mop_only: "mopOnly"
};
function rc({
  value: n,
  options: i,
  onChange: o,
  title: r,
  language: s
}) {
  return i.length === 0 ? null : /* @__PURE__ */ g.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ g.jsx("span", { children: r }),
    /* @__PURE__ */ g.jsx("div", { className: "option-strip", children: i.map((d) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        className: n === d ? "active" : "",
        onClick: () => o(d),
        children: kv(s, d)
      },
      d
    )) })
  ] });
}
function jh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : i === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function Pw({
  language: n,
  draft: i,
  capabilities: o,
  presets: r,
  selectedRoomNames: s,
  submitting: d,
  assistedCarry: f = !1,
  zoneCleaning: m = !1,
  mopRoutes: v,
  onDraftChange: h,
  onClose: _,
  onStart: w
}) {
  const E = (m ? Lw : Ah).map((M) => r.find(({ preset: J }) => J.id === M)).filter(
    (M) => !!M
  ), N = r.filter(
    ({ preset: M }) => !Ah.includes(M.id) && (!m || M.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(M.cleaning_type ?? "vacuum"))
  ), V = (i.cleaning_type === "vacuum" ? Vw : Gw).filter((M) => o.fanSpeeds.includes(M)), ee = ((i.cleaning_type === "mop" ? v?.mop : v?.vacuum_and_mop) ?? Qw).filter((M) => o.mopModes.includes(M)), $ = ee.includes(i.mop_mode ?? "") ? i.mop_mode : ee[0], q = Kw.filter((M) => o.mopIntensities.includes(M)), W = Math.max(0, q.indexOf(i.mop_intensity ?? "medium")), te = i.strategy === "smartplan" ? H(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? H(n, "vacuumDescription") : i.cleaning_type === "mop" ? H(n, "mopOnlyDescription") : i.cleaning_type === "vacuum_then_mop" ? H(n, "vacuumThenMopDescription") : H(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": H(n, "close"), onClick: _ }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "job-sheet-title", children: f ? H(n, "assistedCarryTitle") : H(n, "configureTitle") }),
          /* @__PURE__ */ g.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": H(n, "close"), onClick: _, children: /* @__PURE__ */ g.jsx(xc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": H(n, "cleaningType"), children: E.map(({ preset: M, available: J, reason: ge }) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": jh(i, M.id),
            className: jh(i, M.id) ? "active" : "",
            disabled: !J || d,
            title: ge,
            onClick: () => h(Cl(M)),
            children: [
              /* @__PURE__ */ g.jsx(_c, { icon: M.icon }),
              /* @__PURE__ */ g.jsx("span", { children: H(n, Ww[M.id]) })
            ]
          },
          M.id
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ g.jsx("p", { className: "mode-description", children: te }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            i.cleaning_type !== "mop" && /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: H(n, "suction"),
                value: i.fan_speed,
                options: V,
                onChange: (M) => h({ ...i, preset_id: "custom_draft", fan_speed: M })
              }
            ),
            i.cleaning_type !== "vacuum" && q.length > 0 && /* @__PURE__ */ g.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ g.jsx("span", { children: H(n, "waterFlow") }),
              /* @__PURE__ */ g.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ g.jsx("strong", { children: kv(n, q[W]) }),
                /* @__PURE__ */ g.jsx("output", { children: Jw[q[W]] })
              ] }),
              /* @__PURE__ */ g.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: q.length - 1,
                  step: "1",
                  value: W,
                  "aria-label": H(n, "waterFlow"),
                  onChange: (M) => h({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: q[Number(M.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: H(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: ["1", "2"],
                onChange: (M) => h({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(M)
                })
              }
            ),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: H(n, "mopRoute"),
                value: $,
                options: ee,
                onChange: (M) => h({ ...i, preset_id: "custom_draft", mop_mode: M })
              }
            )
          ] })
        ] }),
        !f && N.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ g.jsx("span", { children: H(n, "savedProfiles") }),
          /* @__PURE__ */ g.jsx("div", { children: N.map(({ preset: M, available: J, reason: ge }) => /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              disabled: !J || d,
              title: ge,
              className: i.preset_id === M.id ? "active" : "",
              onClick: () => h(Cl(M)),
              children: [
                /* @__PURE__ */ g.jsx(_c, { icon: M.icon }),
                " ",
                M.name
              ]
            },
            M.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("footer", { children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: d, onClick: _, children: H(n, "cancel") }),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            disabled: d,
            onClick: () => w($ && i.strategy === "custom" && ["mop", "vacuum_and_mop"].includes(i.cleaning_type) ? { ...i, mop_mode: $ } : i),
            children: d ? f ? H(n, "preparingUpstairs") : H(n, "starting") : f ? H(n, "prepareUpstairs") : H(n, "start")
          }
        )
      ] })
    ] })
  ] });
}
var Ta = function(n, i) {
  return Number(n.toFixed(i));
}, Fw = function(n, i) {
  return i;
}, Ce = function(n, i, o) {
  o && typeof o == "function" && o(n, i);
}, Iw = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, ez = function(n) {
  return n;
}, tz = function(n) {
  return n * n;
}, nz = function(n) {
  return n * (2 - n);
}, az = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, iz = function(n) {
  return n * n * n;
}, lz = function(n) {
  return --n * n * n + 1;
}, oz = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, rz = function(n) {
  return n * n * n * n;
}, uz = function(n) {
  return 1 - --n * n * n * n;
}, sz = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, cz = function(n) {
  return n * n * n * n * n;
}, dz = function(n) {
  return 1 + --n * n * n * n * n;
}, fz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Tv = {
  easeOut: Iw,
  linear: ez,
  easeInQuad: tz,
  easeOutQuad: nz,
  easeInOutQuad: az,
  easeInCubic: iz,
  easeOutCubic: lz,
  easeInOutCubic: oz,
  easeInQuart: rz,
  easeOutQuart: uz,
  easeInOutQuart: sz,
  easeInQuint: cz,
  easeOutQuint: dz,
  easeInOutQuint: fz
}, Ev = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, en = function(n) {
  n.mounted && (Ev(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Av(n, i, o, r) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    en(n), n.animation = function() {
      if (!n.mounted)
        return Ev(n.animation);
      var f = (/* @__PURE__ */ new Date()).getTime() - s, m = f / o, v = Tv[i], h = v(m);
      f >= o ? (r(d), n.animation = null) : n.animation && (r(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function mz(n) {
  var i = n.scale, o = n.positionX, r = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(o) || Number.isNaN(r));
}
function aa(n, i, o, r) {
  var s = mz(i);
  if (!(!n.mounted || !s)) {
    var d = n.setState, f = n.state, m = f.scale, v = f.positionX, h = f.positionY, _ = i.scale - m, w = i.positionX - v, z = i.positionY - h;
    o === 0 ? d(i.scale, i.positionX, i.positionY) : Av(n, r, o, function(E) {
      E !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var N = m + _ * E, X = v + w * E, V = h + z * E;
      d(N, X, V);
    });
  }
}
function pz(n, i, o) {
  var r = n.offsetWidth, s = n.offsetHeight, d = i.offsetWidth, f = i.offsetHeight, m = d * o, v = f * o, h = r - m, _ = s - v;
  return {
    wrapperWidth: r,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: _
  };
}
var hz = function(n, i, o, r, s, d, f) {
  var m = n > i ? o * (f ? 0.5 : 1) : 0, v = r > s ? d * (f ? 0.5 : 1) : 0, h = n - i - m, _ = m, w = r - s - v, z = v;
  return {
    minPositionX: h,
    maxPositionX: _,
    minPositionY: w,
    maxPositionY: z,
    scaleWidthFactor: m,
    scaleHeightFactor: v
  };
}, Dc = function(n, i) {
  var o = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.centerZoomedOut, f = s.disablePadding;
  if (!o || !r)
    throw new Error("Components are not mounted");
  var m = pz(o, r, i), v = m.wrapperWidth, h = m.wrapperHeight, _ = m.newContentWidth, w = m.newContentHeight, z = m.newDiffWidth, E = m.newDiffHeight, N = hz(v, _, z, h, w, E, !!d), X = v >= _ && h >= w;
  f && X && !d && (N.minPositionX = 0, N.maxPositionX = 0, N.minPositionY = 0, N.maxPositionY = 0);
  var V = n.setup, K = V.minPositionX, ee = V.maxPositionX, $ = V.minPositionY, q = V.maxPositionY;
  return K != null && (N.minPositionX = v * (1 - i) + K * i), ee != null && (N.maxPositionX = ee * i), $ != null && (N.minPositionY = h * (1 - i) + $ * i), q != null && (N.maxPositionY = q * i), N;
}, Zl = function(n, i, o, r) {
  return r ? n < i ? Ta(i, 2) : n > o ? Ta(o, 2) : Ta(n, 2) : Ta(n, 2);
}, ki = function(n, i) {
  var o = Dc(n, i);
  return n.bounds = o, o;
};
function Yl(n, i, o, r, s, d, f) {
  var m = o.minPositionX, v = o.minPositionY, h = o.maxPositionX, _ = o.maxPositionY, w = 0, z = 0;
  f && (w = s, z = d);
  var E = Zl(n, m - w, h + w, r), N = Zl(i, v - z, _ + z, r);
  return { x: E, y: N };
}
function Or(n, i, o, r, s, d) {
  var f = n.state, m = f.scale, v = f.positionX, h = f.positionY, _ = r - m;
  if (typeof i != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var w = v - i * _, z = h - o * _, E = Yl(w, z, s, d, 0, 0, null);
  return E;
}
var Mh = 1e-7;
function Bl(n, i, o, r, s) {
  var d = s ? r : 0, f = Math.max(i - d, Mh), m = o + d;
  return !Number.isNaN(o) && n >= m ? m : !Number.isNaN(i) && n <= f ? f : Math.max(n, Mh);
}
var Ch = function(n, i) {
  var o = n.setup.panning.excluded, r = n.isInitialized, s = n.wrapperComponent, d = i.target, f = "shadowRoot" in d && "composedPath" in i, m = f ? i.composedPath().some(function(_) {
    return _ instanceof Element ? s?.contains(_) : !1;
  }) : s?.contains(d), v = r && d && m;
  if (!v)
    return !1;
  var h = Hl(d, o);
  return !(h || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, Oh = function(n) {
  var i = n.isInitialized, o = n.isPanning, r = n.setup, s = r.panning.disabled, d = i && o && !s;
  return !!d;
}, vz = function(n, i) {
  var o = n.state, r = o.positionX, s = o.positionY;
  n.isPanning = !0;
  var d = i.clientX, f = i.clientY;
  n.startCoords = { x: d - r, y: f - s };
}, yz = function(n, i) {
  var o = i.touches, r = n.state, s = r.positionX, d = r.positionY;
  n.isPanning = !0;
  var f = o.length === 1;
  if (f) {
    var m = o[0].clientX, v = o[0].clientY;
    n.startCoords = { x: m - s, y: v - d };
  }
};
function gz(n) {
  var i = n.state, o = i.positionX, r = i.positionY, s = i.scale, d = n.setup, f = d.disabled, m = d.limitToBounds, v = d.centerZoomedOut, h = n.wrapperComponent;
  if (!(f || !h || !n.bounds)) {
    var _ = n.bounds, w = _.maxPositionX, z = _.minPositionX, E = _.maxPositionY, N = _.minPositionY, X = o > w || o < z, V = r > E || r < N, K = o > w ? h.offsetWidth : n.setup.minPositionX || 0, ee = r > E ? h.offsetHeight : n.setup.minPositionY || 0, $ = Or(n, K, ee, s, n.bounds, m || v), q = $.x, W = $.y;
    return {
      scale: s,
      positionX: X ? q : o,
      positionY: V ? W : r
    };
  }
}
function jv(n, i, o, r, s) {
  var d = n.setup.limitToBounds, f = n.wrapperComponent, m = n.bounds, v = n.state, h = v.scale, _ = v.positionX, w = v.positionY;
  if (!(f === null || m === null || i === _ && o === w)) {
    var z = Yl(i, o, m, d, r, s, f), E = z.x, N = z.y;
    n.setState(h, E, N);
  }
}
var _z = function(n, i, o) {
  var r = n.startCoords, s = n.state, d = n.setup.panning, f = d.lockAxisX, m = d.lockAxisY, v = s.positionX, h = s.positionY;
  if (!r)
    return { x: v, y: h };
  var _ = i - r.x, w = o - r.y, z = f ? v : _, E = m ? h : w;
  return { x: z, y: E };
}, ea = function(n, i, o) {
  var r = n.setup, s = n.state, d = r.minScale, f = r.disablePadding, m = r.centerZoomedOut, v = o ?? s.scale;
  return i > 0 && v >= d && !f && !m ? i : 0;
}, In;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(In || (In = {}));
var bz = function(n) {
  var i = n.mounted, o = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = s.limitToBounds, v = n.state.scale, h = f.disabled;
  if (h || d || !i || !o || !r)
    return !1;
  if (!m)
    return !0;
  var _ = o.offsetWidth < r.offsetWidth * v || o.offsetHeight < r.offsetHeight * v;
  return _;
}, Sz = function(n) {
  var i = n.mounted, o = n.velocity, r = n.bounds, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = f.disabled, v = !m && !d && i;
  return !(!v || !o || !r);
};
function wz(n, i) {
  var o = n.setup.velocityAnimation, r = o.animationTime, s = o.maxAnimationTime, d = o.inertia;
  return Math.min(r * Math.max(1, Math.abs(i / d)), s);
}
function Nh(n, i, o, r, s, d, f, m, v, h) {
  if (s) {
    if (i > f && o > f) {
      var _ = f + (n - f) * h;
      return _ > v ? v : _ < f ? f : _;
    }
    if (i < d && o < d) {
      var _ = d + (n - d) * h;
      return _ < m ? m : _ > d ? d : _;
    }
  }
  return r ? i : Zl(n, d, f, s);
}
function zz(n) {
  var i = 1, o = n.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? i : Math.min(i, o);
}
var uc = function(n, i, o) {
  var r = 0, s = n * o;
  return Number.isNaN(s) ? r : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function xz(n, i, o) {
  var r, s, d = bz(n);
  if (d) {
    var f = n.lastMousePosition, m = n.velocityTime, v = n.setup, h = n.wrapperComponent, _ = v.velocityAnimation, w = _.maxStrengthMouse, z = _.maxStrengthTouch, E = _.sensitivityTouch, N = _.sensitivityMouse, X = Date.now();
    if (f && m && h) {
      var V = zz(h), K = (r = {}, r[In.TOUCH] = E, r[In.MOUSE] = N, r)[o], ee = (s = {}, s[In.TOUCH] = z, s[In.MOUSE] = w, s)[o], $ = i.x - f.x, q = i.y - f.y, W = uc($ / V, ee, K), te = uc(q / V, ee, K), M = X - m, J = $ * $ + q * q, ge = uc(Math.sqrt(J) / M, ee, K);
      n.velocity = { velocityX: W, velocityY: te, total: ge };
    }
    n.lastMousePosition = i, n.velocityTime = X;
  }
}
function kz(n) {
  var i = n.velocity, o = n.bounds, r = n.setup, s = n.wrapperComponent, d = Sz(n);
  if (!(!d || !i || !o || !s)) {
    var f = i.velocityX, m = i.velocityY, v = i.total, h = o.maxPositionX, _ = o.minPositionX, w = o.maxPositionY, z = o.minPositionY, E = r.limitToBounds, N = r.autoAlignment, X = r.zoomAnimation, V = r.panning, K = V.lockAxisY, ee = V.lockAxisX, $ = X.animationType, q = N.sizeX, W = N.sizeY, te = N.velocityAlignmentTime, M = te, J = wz(n, v), ge = Math.max(J, M), ce = ea(n, q), ve = ea(n, W), _e = ce * s.offsetWidth / 100, me = ve * s.offsetHeight / 100, Oe = h + _e, Ve = _ - _e, k = w + me, Z = z - me, G = n.state, le = (/* @__PURE__ */ new Date()).getTime();
    Av(n, $, ge, function(ue) {
      var S = n.state, D = S.scale, Q = S.positionX, P = S.positionY, de = (/* @__PURE__ */ new Date()).getTime() - le, pe = de / M, xe = Tv[N.animationType], Ge = 1 - xe(Math.min(1, pe)), De = 1 - ue, tn = Q + f * De, nn = P + m * De, an = Nh(tn, G.positionX, Q, ee, E, _, h, Ve, Oe, Ge), An = Nh(nn, G.positionY, P, K, E, z, w, Z, k, Ge);
      if (Q !== tn || P !== nn) {
        n.setState(D, an, An);
        var Mt = n.props.onPanning;
        Mt && Mt(Te(n), {});
      }
    });
  }
}
function Dh(n, i) {
  var o = n.state, r = o.scale, s = o.positionX, d = o.positionY;
  n.panStartPosition = { x: s, y: d }, en(n), ki(n, r), window.TouchEvent !== void 0 && i instanceof TouchEvent ? yz(n, i) : vz(n, i);
}
function Mv(n, i) {
  var o = n.state.scale, r = n.setup, s = r.minScale, d = r.autoAlignment, f = d.disabled, m = d.sizeX, v = d.sizeY, h = d.animationTime, _ = d.animationType, w = f || o < s || !m && !v;
  if (!w) {
    var z = gz(n);
    z && aa(n, z, h, _);
  }
}
function Zh(n, i, o, r) {
  var s = n.startCoords, d = n.setup, f = d.autoAlignment, m = f.sizeX, v = f.sizeY;
  if (s) {
    var h = _z(n, i, o), _ = h.x, w = h.y, z = ea(n, m), E = ea(n, v);
    xz(n, { x: _, y: w }, r), jv(n, _, w, z, E);
  }
}
function Tz(n, i) {
  if (n.isPanning) {
    var o = n.velocity, r = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var d = n.state, f = d.positionX, m = d.positionY, v = d.scale, h = n.panStartPosition;
    if (n.panStartPosition = null, h) {
      var _ = f - h.x, w = m - h.y;
      if (_ * _ + w * w <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var z = r?.offsetWidth || 0, E = r?.offsetHeight || 0, N = (s?.offsetWidth || 0) * v, X = (s?.offsetHeight || 0) * v, V = !n.setup.limitToBounds || z < N || E < X, K = !i && o && o.total > 0.1 && V;
    K ? kz(n) : Mv(n);
  }
}
function Zc(n, i, o, r) {
  var s = n.setup, d = s.minScale, f = s.maxScale, m = s.limitToBounds, v = Bl(Ta(i, 2), d, f, 0, !1), h = ki(n, v), _ = Or(n, o, r, v, h, m), w = _.x, z = _.y;
  return { scale: v, positionX: w, positionY: z };
}
function Rc(n, i, o) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.minScale, m = d.maxScale, v = d.limitToBounds, h = d.zoomAnimation, _ = h.disabled, w = h.animationTime, z = h.animationType, E = r >= f && r <= m, N = _ || E;
  if ((r >= 1 || v) && Mv(n), !(N || !s || !n.mounted)) {
    var X = i || s.offsetWidth / 2, V = o || s.offsetHeight / 2, K = r < f ? f : m, ee = Zc(n, K, X, V);
    ee && aa(n, ee, w, z);
  }
}
var Kt = function() {
  return Kt = Object.assign || function(i) {
    for (var o, r = 1, s = arguments.length; r < s; r++) {
      o = arguments[r];
      for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (i[d] = o[d]);
    }
    return i;
  }, Kt.apply(this, arguments);
};
function Rh(n, i, o) {
  for (var r = 0, s = i.length, d; r < s; r++)
    (d || !(r in i)) && (d || (d = Array.prototype.slice.call(i, 0, r)), d[r] = i[r]);
  return n.concat(d || Array.prototype.slice.call(i));
}
var sc = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, ka = {
  disabled: !1,
  minPositionX: null,
  maxPositionX: null,
  minPositionY: null,
  maxPositionY: null,
  minScale: 1,
  maxScale: 8,
  limitToBounds: !0,
  centerZoomedOut: !1,
  centerOnInit: !1,
  disablePadding: !1,
  smooth: !0,
  detached: !1,
  wheel: {
    step: 0.015,
    disabled: !1,
    wheelDisabled: !1,
    touchPadDisabled: !1,
    activationKeys: [],
    excluded: []
  },
  trackPadPanning: {
    disabled: !0,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    activationKeys: [],
    excluded: []
  },
  panning: {
    disabled: !1,
    velocityDisabled: !1,
    lockAxisX: !1,
    lockAxisY: !1,
    allowLeftClickPan: !0,
    allowMiddleClickPan: !0,
    allowRightClickPan: !0,
    activationKeys: [],
    excluded: []
  },
  pinch: {
    step: 5,
    disabled: !1,
    allowPanning: !0,
    excluded: []
  },
  doubleClick: {
    disabled: !1,
    step: 0.7,
    mode: "zoomIn",
    animationType: "easeOut",
    animationTime: 200,
    excluded: []
  },
  zoomAnimation: {
    disabled: !1,
    size: 0.4,
    animationTime: 200,
    animationType: "easeOut"
  },
  autoAlignment: {
    disabled: !1,
    sizeX: 100,
    sizeY: 100,
    animationTime: 200,
    velocityAlignmentTime: 400,
    animationType: "easeOut"
  },
  velocityAnimation: {
    disabled: !1,
    sensitivityMouse: 1,
    sensitivityTouch: 1.2,
    maxStrengthMouse: 20,
    maxStrengthTouch: 40,
    inertia: 1,
    animationTime: 300,
    maxAnimationTime: 800,
    animationType: "easeOut"
  }
}, bc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Cv = function(n) {
  var i, o, r, s, d, f, m, v, h, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : ka.minScale, 1e-7), w = (o = n.maxScale) !== null && o !== void 0 ? o : ka.maxScale, z = (r = n.initialScale) !== null && r !== void 0 ? r : sc.scale, E = Math.min(Math.max(z, _), w), N = Zl((s = n.initialPositionX) !== null && s !== void 0 ? s : sc.positionX, (d = n.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (f = n.maxPositionX) !== null && f !== void 0 ? f : 1 / 0, n.minPositionX != null || n.maxPositionX != null), X = Zl((m = n.initialPositionY) !== null && m !== void 0 ? m : sc.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: E,
    scale: E,
    positionX: N,
    positionY: X
  };
}, Uh = function(n) {
  var i = Kt({}, ka);
  return Object.keys(n).forEach(function(o) {
    var r = o, s = typeof n[r] < "u", d = typeof ka[r] < "u";
    if (d && s) {
      var f = Object.prototype.toString.call(ka[r]), m = f === "[object Object]", v = f === "[object Array]";
      m ? i[r] = Kt(Kt({}, ka[r]), n[r]) : v ? i[r] = Rh(Rh([], ka[r], !0), n[r]) : i[r] = n[r];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Ov = function(n, i, o) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.maxScale, m = d.minScale, v = d.zoomAnimation, h = d.smooth, _ = v.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var w = h ? r * Math.exp(i * o) : r + i * o, z = Bl(Ta(w, 3), m, f, _, !1);
  return z;
};
function Nv(n, i, o, r, s) {
  var d, f, m = n.wrapperComponent, v = n.state, h = v.scale, _ = v.positionX, w = v.positionY, z = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var E = z.disabled ? 0 : r, N = m.offsetWidth, X = m.offsetHeight, V = (N / 2 - _) / h, K = (X / 2 - w) / h, ee = Ov(n, i, o), $ = Zc(n, ee, V, K);
  if (!$)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var q = n.props, W = q.onZoomStart, te = q.onZoom, M = q.onZoomStop, J = new MouseEvent("mousemove", { bubbles: !0 }), ge = Te(n);
  Ce(ge, J, W), Ce(ge, J, te), aa(n, $, E, s);
  var ce = (f = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
  ce && ce.setTimeout(function() {
    n.mounted && Ce(Te(n), J, M);
  }, E);
}
function Dv(n, i, o, r) {
  var s, d, f = n.setup, m = n.wrapperComponent, v = n.contentComponent, h = f.limitToBounds, _ = f.centerOnInit, w = Cv(n.props), z = n.state, E = z.scale, N = z.positionX, X = z.positionY;
  if (m) {
    var V = w.positionX, K = w.positionY;
    if (_ && v) {
      var ee = Uc(w.scale, m, v);
      V = ee.positionX, K = ee.positionY;
    }
    var $ = Dc(n, w.scale), q = Yl(V, K, $, h, 0, 0, m), W = {
      scale: w.scale,
      positionX: q.x,
      positionY: q.y
    };
    if (!(E === w.scale && N === w.positionX && X === w.positionY)) {
      r?.();
      var te = n.props, M = te.onZoomStart, J = te.onZoom, ge = te.onZoomStop, ce = new MouseEvent("mousemove", { bubbles: !0 }), ve = Te(n);
      Ce(ve, ce, M), Ce(ve, ce, J), aa(n, W, i, o);
      var _e = (d = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      _e && _e.setTimeout(function() {
        n.mounted && Ce(Te(n), ce, ge);
      }, i);
    }
  }
}
function Ez(n, i, o, r) {
  var s = n.getBoundingClientRect(), d = i.getBoundingClientRect(), f = o.getBoundingClientRect(), m = d.x * r.scale, v = d.y * r.scale;
  return {
    x: (s.x - f.x + m) / r.scale,
    y: (s.y - f.y + v) / r.scale
  };
}
function Az(n, i, o, r, s) {
  r === void 0 && (r = 0), s === void 0 && (s = 0);
  var d = n.wrapperComponent, f = n.contentComponent, m = n.state, v = n.setup, h = v.limitToBounds, _ = v.minScale, w = v.maxScale;
  if (!d || !f)
    return m;
  var z = d.getBoundingClientRect(), E = i.getBoundingClientRect(), N = Ez(i, d, f, m), X = N.x, V = N.y, K = E.width / m.scale, ee = E.height / m.scale, $ = d.offsetWidth / K, q = d.offsetHeight / ee, W = Bl(o || Math.min($, q), _, w, 0, !1), te = (z.width - K * W) / 2, M = (z.height - ee * W) / 2, J = (z.left - X) * W + te + r, ge = (z.top - V) * W + M + s, ce = Dc(n, W), ve = Yl(J, ge, ce, h, 0, 0, d), _e = ve.x, me = ve.y;
  return { positionX: _e, positionY: me, scale: W };
}
var jz = function(n) {
  return function(i, o, r) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Nv(n, 1, i, o, r);
  };
}, Mz = function(n) {
  return function(i, o, r) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Nv(n, -1, i, o, r);
  };
}, Cz = function(n) {
  return function(i, o, r, s, d) {
    s === void 0 && (s = 300), d === void 0 && (d = "easeOut");
    var f = n.state, m = f.positionX, v = f.positionY, h = f.scale, _ = n.wrapperComponent, w = n.contentComponent, z = n.setup.disabled;
    if (!(z || !_ || !w)) {
      var E = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(o) ? v : o,
        scale: Number.isNaN(r) ? h : r
      };
      aa(n, E, s, d);
    }
  };
}, Oz = function(n) {
  return function(i, o) {
    i === void 0 && (i = 200), o === void 0 && (o = "easeOut"), Dv(n, i, o);
  };
}, Nz = function(n) {
  return function(i, o, r) {
    o === void 0 && (o = 200), r === void 0 && (r = "easeOut");
    var s = n.state, d = n.wrapperComponent, f = n.contentComponent;
    if (d && f) {
      var m = Uc(i || s.scale, d, f);
      aa(n, m, o, r);
    }
  };
}, Dz = function(n) {
  return function(i, o, r, s, d, f) {
    r === void 0 && (r = 600), s === void 0 && (s = "easeOut"), d === void 0 && (d = 0), f === void 0 && (f = 0), en(n);
    var m = n.wrapperComponent, v = typeof i == "string" ? document.getElementById(i) : i;
    if (m && v && m.contains(v)) {
      var h = Az(n, v, o, d, f);
      aa(n, h, r, s);
    }
  };
}, Er = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: jz(n),
    zoomOut: Mz(n),
    setTransform: Cz(n),
    resetTransform: Oz(n),
    centerView: Nz(n),
    zoomToElement: Dz(n)
  };
}, Zz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, Te = function(n) {
  var i = {};
  return Object.assign(i, Zz(n)), Object.assign(i, Er(n)), i;
}, cc = !1;
function dc() {
  try {
    var n = {
      get passive() {
        return cc = !0, !1;
      }
    };
    return n;
  } catch {
    return cc = !1, cc;
  }
}
var gr = ".".concat(bc.wrapperClass), Hl = function(n, i) {
  return i.some(function(o) {
    return n.matches("".concat(gr, " ").concat(o, ", ").concat(gr, " .").concat(o, ", ").concat(gr, " ").concat(o, " *, ").concat(gr, " .").concat(o, " *"));
  });
}, Rl = function(n) {
  n && clearTimeout(n);
}, Rz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Zv = function(n, i, o) {
  var r = Rz(o);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(r, ")");
}, Uc = function(n, i, o) {
  var r = o.offsetWidth * n, s = o.offsetHeight * n, d = (i.offsetWidth - r) / 2, f = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: d,
    positionY: f
  };
};
function Uz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Yz(n) {
  return function(i) {
    n.forEach(function(o) {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Rv = function(n, i) {
  var o = n.setup.wheel, r = o.disabled, s = o.wheelDisabled, d = o.touchPadDisabled, f = o.excluded, m = n.isInitialized, v = n.isPanning, h = i.target, _ = m && !v && !r && h;
  if (!_ || s && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var w = Hl(h, f);
  if (w)
    return !1;
  var z = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!z;
}, Bz = function(n, i) {
  var o = n.setup, r = o.disabled, s = o.trackPadPanning, d = s.activationKeys, f = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || r || s.disabled || i.ctrlKey)
    return !1;
  var m = Rv(n, i);
  if (m)
    return !1;
  var v = i.target, h = Hl(v, f);
  if (h)
    return !1;
  var _ = n.isPressingKeys(d);
  return !!_;
}, Hz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Xz(n, i) {
  var o = Hz(n), r = Fw(i, o);
  return r;
}
function Uv(n, i, o) {
  var r = i.getBoundingClientRect(), s = 0, d = 0;
  if ("clientX" in n)
    s = (n.clientX - r.left) / o, d = (n.clientY - r.top) / o;
  else {
    var f = n.touches[0];
    s = (f.clientX - r.left) / o, d = (f.clientY - r.top) / o;
  }
  return (Number.isNaN(s) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: s,
    y: d
  };
}
var qz = function(n, i, o, r, s) {
  var d = n.state.scale, f = n.wrapperComponent, m = n.setup, v = m.maxScale, h = m.minScale, _ = m.zoomAnimation, w = m.disablePadding, z = _.size, E = _.disabled;
  if (!f)
    throw new Error("Wrapper is not mounted");
  var N = d + i * o, X = r ? !1 : !E, V = Bl(N, h, v, z, X && !w);
  return V;
}, Yv = function(n, i) {
  var o = n.previousWheelEvent, r = n.state.scale, s = n.setup, d = s.maxScale, f = s.minScale;
  return o ? r < d || r > f || Math.sign(o.deltaY) !== Math.sign(i.deltaY) || o.deltaY > 0 && o.deltaY < i.deltaY || o.deltaY < 0 && o.deltaY > i.deltaY || Math.sign(o.deltaY) !== Math.sign(i.deltaY) : !1;
}, $z = function(n, i) {
  var o = n.setup.pinch, r = o.disabled, s = o.excluded, d = n.isInitialized, f = i.target, m = d && !r && f;
  if (!m)
    return !1;
  var v = Hl(f, s);
  return !v;
}, Lz = function(n) {
  var i = n.setup.pinch.disabled, o = n.isInitialized, r = n.pinchStartDistance, s = o && !i && r !== null;
  return !!s;
}, Vz = function(n, i, o) {
  var r = o.getBoundingClientRect(), s = n.touches, d = s[0].clientX - r.left, f = s[0].clientY - r.top, m = s[1].clientX - r.left, v = s[1].clientY - r.top;
  return {
    x: (d + m) / 2 / i,
    y: (f + v) / 2 / i
  };
}, Bv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Gz = 5, Qz = function(n, i) {
  var o = n.pinchStartScale, r = n.pinchStartDistance, s = n.setup, d = s.maxScale, f = s.minScale, m = s.zoomAnimation, v = s.disablePadding, h = s.pinch, _ = m.size, w = m.disabled, z = h.step;
  if (!o || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var E = i / r, N = E * o, X = (N - o) * (z / Gz), V = o + X, K = V === 1 / 0 ? 0 : Ta(V, 10);
  return Bl(K, f, d, _, !w && !v);
}, Hv = 160, Xv = 100, Kz = function(n, i) {
  var o = n.props, r = o.onWheelStart, s = o.onZoomStart;
  n.wheelStopEventTimer || (en(n), Ce(Te(n), i, r), Ce(Te(n), i, s));
}, Jz = function(n, i) {
  var o = n.props, r = o.onWheel, s = o.onZoom, d = n.contentComponent, f = n.setup, m = n.state, v = m.scale, h = f.limitToBounds, _ = f.centerZoomedOut, w = f.zoomAnimation, z = f.wheel, E = f.disablePadding, N = f.smooth, X = w.size, V = w.disabled, K = z.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var ee = Xz(i, null), $ = N ? K * Math.abs(i.deltaY) : K, q = qz(n, ee, $, !i.ctrlKey);
  if (v !== q) {
    var W = ki(n, q), te = Uv(i, d, v), M = V || X === 0 || _ || E, J = h && M, ge = Or(n, te.x, te.y, q, W, J), ce = ge.x, ve = ge.y;
    n.previousWheelEvent = i, n.setState(q, ce, ve), Ce(Te(n), i, r), Ce(Te(n), i, s);
  }
}, Wz = function(n, i) {
  var o = n.props, r = o.onWheelStop, s = o.onZoomStop;
  Rl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Rc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Xv);
  var d = Yv(n, i);
  d && (Rl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ce(Te(n), i, r), Ce(Te(n), i, s));
  }, Hv));
}, Pz = function(n, i) {
  var o = n.props, r = o.onWheelStart, s = o.onPanningStart;
  n.wheelStopEventTimer || (en(n), Ce(Te(n), i, r), Ce(Te(n), i, s));
}, Fz = function(n, i) {
  var o = n.props, r = o.onWheelStop, s = o.onPanningStop;
  Rl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Rc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Xv);
  var d = Yv(n, i);
  d && (Rl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ce(Te(n), i, r), Ce(Te(n), i, s));
  }, Hv));
}, qv = function(n) {
  for (var i = 0, o = 0, r = 0; r < 2; r += 1)
    i += n.touches[r].clientX, o += n.touches[r].clientY;
  var s = i / 2, d = o / 2;
  return { x: s, y: d };
}, Iz = function(n, i) {
  var o = Bv(i);
  n.pinchStartDistance = o, n.lastDistance = o, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = qv(i), en(n);
}, ex = function(n, i) {
  var o = n.contentComponent, r = n.pinchStartDistance, s = n.wrapperComponent, d = n.pinchPreviousCenter, f = n.state.scale, m = n.setup, v = m.limitToBounds, h = m.centerZoomedOut, _ = m.zoomAnimation, w = m.autoAlignment, z = m.pinch, E = m.panning, N = _.disabled, X = _.size, V = z.allowPanning;
  if (!(r === null || !o)) {
    var K = Vz(i, f, o);
    if (!(!Number.isFinite(K.x) || !Number.isFinite(K.y))) {
      var ee = Bv(i), $ = Qz(n, ee), q = qv(i), W = f / $, te = (q.x - (d?.x || 0)) * W, M = (q.y - (d?.y || 0)) * W;
      if (!($ === f && te === 0 && M === 0)) {
        n.pinchPreviousCenter = q;
        var J = ki(n, $), ge = N || X === 0 || h, ce = v && ge, ve = Or(n, K.x, K.y, $, J, ce), _e = ve.x, me = ve.y;
        if (n.pinchMidpoint = K, n.lastDistance = ee, E.disabled || !V)
          n.setState($, _e, me);
        else {
          var Oe = w.sizeX, Ve = w.sizeY, k = ea(n, Oe, $), Z = ea(n, Ve, $), G = _e + te, le = me + M, ue = Yl(G, le, J, v, k, Z, s), S = ue.x, D = ue.y;
          n.setState($, S, D);
        }
      }
    }
  }
}, tx = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Rc(n, i?.x, i?.y);
}, $v = function(n, i) {
  var o = n.props.onZoomStop, r = n.setup.doubleClick.animationTime;
  Rl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ce(Te(n), i, o);
  }, r);
}, nx = function(n, i) {
  var o = n.props, r = o.onZoomStart, s = o.onZoom, d = n.setup.doubleClick, f = d.animationTime, m = d.animationType;
  Ce(Te(n), i, r), Dv(n, f, m, function() {
    return Ce(Te(n), i, s);
  }), $v(n, i);
};
function ax(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function ix(n, i) {
  var o = n.setup, r = n.doubleClickStopEventTimer, s = n.state, d = n.contentComponent, f = s.scale, m = n.props, v = m.onZoomStart, h = m.onZoom, _ = o.doubleClick, w = _.disabled, z = _.mode, E = _.step, N = _.animationTime, X = _.animationType;
  if (!w && !r) {
    if (z === "reset")
      return nx(n, i);
    if (!d)
      return console.error("No ContentComponent found");
    var V = ax(z, n.state.scale), K = Ov(n, V, E);
    if (f !== K) {
      Ce(Te(n), i, v);
      var ee = Uv(i, d, f), $ = Zc(n, K, ee.x, ee.y);
      if (!$)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ce(Te(n), i, h), aa(n, $, N, X), $v(n, i);
    }
  }
}
var lx = function(n, i) {
  var o = n.isInitialized, r = n.setup, s = n.wrapperComponent, d = r.doubleClick, f = d.disabled, m = d.excluded, v = i.target, h = s?.contains(v), _ = o && v && h && !f;
  if (!_)
    return !1;
  var w = Hl(v, m);
  return !w;
}, ox = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(r) {
        o.props = r, o.wrapperComponent && o.contentComponent && ki(o, o.state.scale), o.setup = Uh(r);
      }, this.initializeWindowEvents = function() {
        var r, s, d, f, m = dc(), v = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, h = v?.defaultView;
        (s = o.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (f = o.wrapperComponent) === null || f === void 0 || f.addEventListener("keydown", o.setKeyPressed, m), h?.addEventListener("mousedown", o.onPanningStart, m), h?.addEventListener("mousemove", o.onPanning, m), h?.addEventListener("mouseup", o.onPanningStop, m), v?.addEventListener("mouseleave", o.clearPanning, m), h?.addEventListener("keyup", o.setKeyUnPressed, m), h?.addEventListener("keydown", o.setKeyPressed, m), h?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, s, d, f, m, v = dc(), h = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, _ = h?.defaultView;
        _?.removeEventListener("mousedown", o.onPanningStart, v), _?.removeEventListener("mousemove", o.onPanning, v), _?.removeEventListener("mouseup", o.onPanningStop, v), h?.removeEventListener("mouseleave", o.clearPanning, v), _?.removeEventListener("keyup", o.setKeyUnPressed, v), _?.removeEventListener("keydown", o.setKeyPressed, v), _?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, v), (s = o.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", o.onWheelPanning, v), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, v), (f = o.wrapperComponent) === null || f === void 0 || f.removeEventListener("keydown", o.setKeyPressed, v), en(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var s = dc();
        r.addEventListener("wheel", o.onWheelZoom, s), r.addEventListener("dblclick", o.onDoubleClick, s), r.addEventListener("touchstart", o.onTouchPanningStart, s), r.addEventListener("touchmove", o.onTouchPanning, s), r.addEventListener("touchend", o.onTouchPanningStop, s);
      }, this.handleInitialize = function(r) {
        var s = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(Te(o));
        }), s && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, f = r.offsetWidth, m = r.offsetHeight;
          (f > 0 || m > 0) && (o.onInitCallbacks.forEach(function(v) {
            return v(Te(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var s = o.setup.disabled;
        if (!s) {
          o.syncModifierKeys(r);
          var d = Rv(o, r);
          d && (Kz(o, r), Jz(o, r), Wz(o, r));
        }
      }, this.onWheelPanning = function(r) {
        var s = o.props.onPanning, d = o.setup.trackPadPanning, f = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(r);
        var v = Bz(o, r);
        if (v) {
          r.preventDefault(), r.stopPropagation();
          var h = o.state, _ = h.positionX, w = h.positionY, z = _ - r.deltaX, E = w - r.deltaY, N = f ? _ : z, X = m ? w : E, V = o.setup.autoAlignment, K = V.sizeX, ee = V.sizeY, $ = ea(o, K), q = ea(o, ee);
          N === _ && X === w || (Pz(o, r), jv(o, N, X, $, q), Ce(Te(o), r, s), Fz(o, r));
        }
      }, this.onPanningStart = function(r) {
        var s = o.setup.disabled, d = o.props.onPanningStart;
        if (!s) {
          o.syncModifierKeys(r);
          var f = Ch(o, r);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (r.button === 0 && !o.setup.panning.allowLeftClickPan || r.button === 1 && !o.setup.panning.allowMiddleClickPan || r.button === 2 && !o.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), en(o), Dh(o, r), Ce(Te(o), r, d)));
          }
        }
      }, this.onPanning = function(r) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (!s) {
          if (o.syncModifierKeys(r), o.isPanning && r.buttons === 0) {
            o.clearPanning(r);
            return;
          }
          var f = Oh(o);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (r.preventDefault(), r.stopPropagation(), Zh(o, r.clientX, r.clientY, In.MOUSE), Ce(Te(o), r, d));
          }
        }
      }, this.onPanningStop = function(r) {
        var s = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (Tz(o, s), Ce(Te(o), r, d));
      }, this.onPinchStart = function(r) {
        var s = o.setup.disabled, d = o.props.onPinchStart;
        if (!s) {
          var f = $z(o, r);
          f && (Iz(o, r), en(o), Ce(Te(o), r, d));
        }
      }, this.onPinch = function(r) {
        var s = o.setup.disabled, d = o.props.onPinch;
        if (!s) {
          var f = Lz(o);
          f && (r.preventDefault(), r.stopPropagation(), ex(o, r), Ce(Te(o), r, d));
        }
      }, this.onPinchStop = function(r) {
        var s = o.props.onPinchStop;
        o.pinchStartScale && (tx(o), Ce(Te(o), r, s));
      }, this.onTouchPanningStart = function(r) {
        var s = o.setup, d = s.disabled, f = s.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var v = !f?.disabled, h = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (v && h && r.touches.length === 1)
            o.onDoubleClick(r);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), en(o);
            var _ = r.touches, w = _.length === 1, z = _.length === 2, E = Ch(o, r);
            if (w) {
              if (!E)
                return;
              en(o), Dh(o, r), Ce(Te(o), r, m);
            }
            z && o.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && r.touches.length === 1) {
          if (s)
            return;
          var f = Oh(o);
          if (!f)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var m = r.touches[0];
          Zh(o, m.clientX, m.clientY, In.TOUCH), Ce(Te(o), r, d);
        } else r.touches.length > 1 && o.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        o.onPanningStop(r), o.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var s = o.setup.disabled;
        if (!s) {
          var d = lx(o, r);
          d && ix(o, r);
        }
      }, this.clearPanning = function(r) {
        o.isPanning && o.onPanningStop(r);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(r) {
        var s = r.ctrlKey, d = r.metaKey, f = r.shiftKey, m = r.altKey;
        typeof s == "boolean" && (o.pressedKeys.Control = s), typeof d == "boolean" && (o.pressedKeys.Meta = d), typeof f == "boolean" && (o.pressedKeys.Shift = f), typeof m == "boolean" && (o.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(r) {
        o.pressedKeys[r.key] = !0;
      }, this.setKeyUnPressed = function(r) {
        o.pressedKeys[r.key] = !1;
      }, this.isPressingKeys = function(r) {
        return typeof r == "function" ? r(Object.entries(o.pressedKeys).filter(function(s) {
          var d = s[1];
          return d;
        }).map(function(s) {
          var d = s[0];
          return d;
        })) : r.length ? !!r.every(function(s) {
          return o.pressedKeys[s];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var r = Uc(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(r.scale, r.positionX, r.positionY);
        }
      }, this.handleTransformStyles = function(r, s, d) {
        return o.props.customTransform ? o.props.customTransform(r, s, d) : Zv(r, s, d);
      }, this.getContext = function() {
        return Te(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var r = o.state, s = r.scale, d = r.positionX, f = r.positionY, m = o.handleTransformStyles(d, f, s);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(v) {
            return v({
              scale: s,
              positionX: d,
              positionY: f,
              previousScale: o.state.previousScale,
              ref: Te(o)
            });
          });
        }
      }, this.setState = function(r, s, d) {
        var f = o.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(s) && !Number.isNaN(d)) {
          var m = Math.max(r, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = s, o.state.positionY = d, o.applyTransformation();
          var v = Te(o);
          o.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), Ce(v, { scale: o.state.scale, positionX: s, positionY: d }, f);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(r) {
        return o.onTransformCallbacks.has(r) || o.onTransformCallbacks.add(r), function() {
          o.onTransformCallbacks.delete(r);
        };
      }, this.onChange = function(r) {
        return o.onChangeCallbacks.has(r) || o.onChangeCallbacks.add(r), function() {
          o.onChangeCallbacks.delete(r);
        };
      }, this.onInit = function(r) {
        return o.onInitCallbacks.has(r) || o.onInitCallbacks.add(r), function() {
          o.onInitCallbacks.delete(r);
        };
      }, this.init = function(r, s) {
        o.cleanupWindowEvents(), o.wrapperComponent = r, o.contentComponent = s, ki(o, o.state.scale), o.handleInitializeWrapperEvents(r), o.handleInitialize(s), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = Te(o);
        Ce(d, void 0, o.props.onInit), Uz(o.props.ref, d);
      }, this.props = i, this.setup = Uh(this.props), this.state = Cv(this.props);
    }
    return n;
  })()
), Xl = Ar.createContext(null), rx = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, ux = Ar.forwardRef(function(n, i) {
  var o = F.useRef(new ox(n)).current, r = rx(n.children, Er(o));
  return F.useImperativeHandle(i, function() {
    return Er(o);
  }, [o]), F.useEffect(function() {
    o.update(n);
  }, [o, n]), g.jsx(Xl.Provider, Kt({ value: o }, { children: r }));
});
Ar.forwardRef(function(n, i) {
  var o = F.useRef(null), r = F.useContext(Xl);
  return F.useEffect(function() {
    return r.onChange(function(s) {
      if (o.current) {
        var d = 0, f = 0;
        o.current.style.transform = r.handleTransformStyles(d, f, 1 / s.instance.state.scale);
      }
    });
  }, [r]), g.jsx("div", Kt({}, n, { ref: Yz([o, i]) }));
});
function sx(n, i) {
  i === void 0 && (i = {});
  var o = i.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var cx = `.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
.transform-component-module_infiniteGrid__Z-aP3 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.12) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  background-position: 0 0;
}
`, fc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
sx(cx);
var dx = function(n) {
  var i = n.children, o = n.wrapperClass, r = o === void 0 ? "" : o, s = n.contentClass, d = s === void 0 ? "" : s, f = n.wrapperStyle, m = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, _ = n.contentProps, w = _ === void 0 ? {} : _, z = n.infinite, E = z === void 0 ? !1 : z, N = F.useContext(Xl), X = N.init, V = N.cleanupWindowEvents, K = F.useRef(null), ee = F.useRef(null), $ = F.useRef(null);
  return F.useEffect(function() {
    var q = K.current, W = ee.current;
    return q !== null && W !== null && X && X?.(q, W), function() {
      V?.();
    };
  }, []), F.useEffect(function() {
    if (E) {
      var q = $.current;
      if (q) {
        var W = function() {
          var te = N.state, M = te.positionX, J = te.positionY;
          q.style.backgroundPosition = "".concat(M, "px ").concat(J, "px");
        };
        return W(), N.onChange(W);
      }
    }
  }, [E, N]), g.jsxs("div", Kt({}, h, { ref: K, className: "".concat(bc.wrapperClass, " ").concat(fc.wrapper, " ").concat(r), style: f }, { children: [E && g.jsx("div", { ref: $, className: fc.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", Kt({}, w, { ref: ee, className: "".concat(bc.contentClass, " ").concat(fc.content, " ").concat(d), style: Kt(Kt({}, m), { transform: Zv(N.state.positionX, N.state.positionY, N.state.scale) }) }, { children: i }))] }));
};
function fx(n, i) {
  var o = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), r = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return o * r;
}
function mx(n) {
  var i = n.elementX, o = n.elementY, r = n.elementWidth, s = n.elementHeight, d = n.scale, f = n.positionX, m = n.positionY, v = n.viewportWidth, h = n.viewportHeight, _ = n.margin, w = _ === void 0 ? 0 : _, z = n.threshold, E = z === void 0 ? 0 : z, N = {
    x: -w,
    y: -w,
    width: v + 2 * w,
    height: h + 2 * w
  }, X = {
    x: i * d + f,
    y: o * d + m,
    width: r * d,
    height: s * d
  };
  if (E <= 0) {
    var V = X.x < N.x + N.width && X.x + X.width > N.x, K = X.y < N.y + N.height && X.y + X.height > N.y;
    return V && K;
  }
  var ee = X.width * X.height;
  if (ee <= 0)
    return !1;
  var $ = fx(N, X);
  return $ / ee >= E;
}
Ar.forwardRef(function(n, i) {
  var o = n.x, r = n.y, s = n.width, d = n.height, f = n.margin, m = f === void 0 ? 0 : f, v = n.threshold, h = v === void 0 ? 0 : v, _ = n.placeholder, w = _ === void 0 ? null : _, z = n.onShow, E = n.onHide, N = n.children, X = n.className, V = n.style, K = F.useContext(Xl), ee = F.useState(!1), $ = ee[0], q = ee[1], W = F.useRef(!1), te = F.useRef(z), M = F.useRef(E);
  return te.current = z, M.current = E, F.useEffect(function() {
    var J = function() {
      var ve, _e, me = K.wrapperComponent;
      if (me) {
        var Oe = mx({
          elementX: o,
          elementY: r,
          elementWidth: s,
          elementHeight: d,
          scale: K.state.scale,
          positionX: K.state.positionX,
          positionY: K.state.positionY,
          viewportWidth: me.offsetWidth,
          viewportHeight: me.offsetHeight,
          margin: m,
          threshold: h
        });
        Oe !== W.current && (W.current = Oe, q(Oe), Oe ? (ve = te.current) === null || ve === void 0 || ve.call(te) : (_e = M.current) === null || _e === void 0 || _e.call(M));
      }
    };
    J();
    var ge = K.onChange(J), ce;
    return K.wrapperComponent || (ce = K.onInit(function() {
      return J();
    })), function() {
      ge(), ce?.();
    };
  }, [K, o, r, s, d, m, h]), $ ? g.jsx("div", Kt({ ref: i, className: X, style: V }, { children: N })) : w ? g.jsx(g.Fragment, { children: w }) : null;
});
var px = function() {
  var n = F.useContext(Xl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, hx = function() {
  var n = px();
  return Er(n);
};
const Sc = 24;
function vx({ locked: n, zoneMode: i, hasZone: o, disabled: r, clearZoneLabel: s, onToggleLock: d, onClearZone: f }) {
  const { zoomIn: m, zoomOut: v, resetTransform: h } = hx();
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || i, children: /* @__PURE__ */ g.jsx(c0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => v(), disabled: n || i, children: /* @__PURE__ */ g.jsx(f0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => h(), children: /* @__PURE__ */ g.jsx(zc, {}) }),
    i ? /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": s, onClick: f, disabled: !o || r, children: /* @__PURE__ */ g.jsx(Z_, {}) }) : /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: d, children: n ? /* @__PURE__ */ g.jsx(qh, {}) : /* @__PURE__ */ g.jsx(X_, {}) })
  ] });
}
function yx(n, i, o) {
  const r = Math.min(Math.min(i, o), Math.max(Sc, Math.min(i, o) * 0.22));
  return yc({
    x1: n.x - r / 2,
    y1: n.y - r / 2,
    x2: n.x + r / 2,
    y2: n.y + r / 2
  }, i, o);
}
function gx({
  hass: n,
  floor: i,
  language: o,
  selected: r,
  launched: s,
  active: d,
  connected: f = !0,
  disabled: m,
  selectionMode: v,
  zone: h,
  zoneLaunched: _,
  onToggle: w,
  onZoneChange: z
}) {
  const [E, N] = F.useState(!0), [X, V] = F.useState({ width: 0, height: 0 }), [K, ee] = F.useState({ width: 0, height: 0 }), [$, q] = F.useState(0), W = F.useRef(null), te = F.useRef(void 0), M = F.useRef(h), J = n.states[i.map_entity], ge = F.useMemo(() => zv(J), [J]), ce = F.useMemo(() => wv(J), [J]), ve = F.useMemo(() => aw(i), [i]), _e = typeof J?.attributes.entity_picture == "string" ? J.attributes.entity_picture : void 0, me = h ? Ml(h) : void 0;
  F.useEffect(() => {
    M.current = h;
  }, [h]);
  const Oe = !!d && f && n.connected !== !1;
  F.useEffect(() => {
    if (!Oe) return;
    const k = setInterval(() => q((Z) => Z + 1), 5e3);
    return () => clearInterval(k);
  }, [Oe]), F.useEffect(() => {
    if (d)
      return () => q(0);
  }, [d]), F.useEffect(() => {
    const k = W.current;
    if (!k) return;
    const Z = new ResizeObserver(([G]) => {
      ee({ width: G.contentRect.width, height: G.contentRect.height });
    });
    return Z.observe(k), () => Z.disconnect();
  }, []);
  let Ve;
  return !J || J.state === "unavailable" ? Ve = H(o, "mapMissing") : _e ? ce.length < 3 ? Ve = H(o, "calibrationMissing") : v === "rooms" && ge.length === 0 && (Ve = H(o, "roomsMissing")) : Ve = H(o, "imageMissing"), Ve ? /* @__PURE__ */ g.jsx("div", { className: "map-error", role: "alert", children: Ve }) : /* @__PURE__ */ g.jsx("div", { className: `map-shell ${v === "zone" ? "zone-mode" : ""}`, ref: W, children: /* @__PURE__ */ g.jsxs(
    ux,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: E || v === "zone", step: 0.08 },
      pinch: { disabled: E || v === "zone" },
      panning: { disabled: E || v === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ g.jsx(
          vx,
          {
            locked: E,
            zoneMode: v === "zone",
            hasZone: !!h,
            disabled: m,
            clearZoneLabel: H(o, "clearZone"),
            onToggleLock: () => N((k) => !k),
            onClearZone: () => z(void 0)
          }
        ),
        /* @__PURE__ */ g.jsx(dx, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!X.width || !X.height || !K.width || !K.height) return;
              const k = Math.min(K.width / X.width, K.height / X.height);
              return { width: X.width * k, height: X.height * k };
            })(),
            children: [
              /* @__PURE__ */ g.jsx(
                "img",
                {
                  src: (() => {
                    const k = n.hassUrl(_e);
                    if (k.startsWith("data:")) return k;
                    const Z = k.includes("?") ? "&" : "?", G = J?.last_updated ?? J?.state ?? "";
                    return `${k}${Z}v=${encodeURIComponent(G)}${d ? `&r=${$}` : ""}`;
                  })(),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (k) => V({ width: k.currentTarget.naturalWidth, height: k.currentTarget.naturalHeight })
                }
              ),
              X.width > 0 && X.height > 0 && /* @__PURE__ */ g.jsxs(
                "svg",
                {
                  className: `room-overlay ${v === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${X.width} ${X.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": v === "zone" ? `${i.name} zone map` : `${i.name} rooms`,
                  onPointerDown: (k) => {
                    if (v !== "zone" || m) return;
                    const Z = k.currentTarget.getBoundingClientRect();
                    if (!Z.width || !Z.height) return;
                    const G = {
                      x: Math.min(X.width, Math.max(0, (k.clientX - Z.left) / Z.width * X.width)),
                      y: Math.min(X.height, Math.max(0, (k.clientY - Z.top) / Z.height * X.height))
                    }, le = k.target, ue = le.dataset.zoneHandle, S = ue ? "resize" : le.dataset.zoneMove === "true" && h ? "move" : "create";
                    if (te.current = { pointerId: k.pointerId, kind: S, origin: G, initial: h, handle: ue }, k.currentTarget.setPointerCapture?.(k.pointerId), S === "create") {
                      const D = { x1: G.x, y1: G.y, x2: G.x, y2: G.y };
                      M.current = D, z(D);
                    }
                    k.preventDefault();
                  },
                  onPointerMove: (k) => {
                    const Z = te.current;
                    if (!Z || Z.pointerId !== k.pointerId || m) return;
                    const G = k.currentTarget.getBoundingClientRect();
                    if (!G.width || !G.height) return;
                    const le = {
                      x: Math.min(X.width, Math.max(0, (k.clientX - G.left) / G.width * X.width)),
                      y: Math.min(X.height, Math.max(0, (k.clientY - G.top) / G.height * X.height))
                    };
                    let ue;
                    if (Z.kind === "create")
                      ue = Ml({ x1: Z.origin.x, y1: Z.origin.y, x2: le.x, y2: le.y });
                    else if (Z.kind === "move" && Z.initial) {
                      const S = le.x - Z.origin.x, D = le.y - Z.origin.y;
                      ue = yc({
                        x1: Z.initial.x1 + S,
                        y1: Z.initial.y1 + D,
                        x2: Z.initial.x2 + S,
                        y2: Z.initial.y2 + D
                      }, X.width, X.height);
                    } else if (Z.initial && Z.handle)
                      ue = { ...Z.initial }, Z.handle.includes("w") && (ue.x1 = le.x), Z.handle.includes("e") && (ue.x2 = le.x), Z.handle.includes("n") && (ue.y1 = le.y), Z.handle.includes("s") && (ue.y2 = le.y), ue = yc(ue, X.width, X.height);
                    else return;
                    M.current = ue, z(ue), k.preventDefault();
                  },
                  onPointerUp: (k) => {
                    const Z = te.current;
                    if (!Z || Z.pointerId !== k.pointerId) return;
                    const G = M.current && Ml(M.current);
                    if (Z.kind === "create" && G && (G.x2 - G.x1 < Sc || G.y2 - G.y1 < Sc)) {
                      const le = yx(Z.origin, X.width, X.height);
                      M.current = le, z(le);
                    }
                    te.current = void 0, k.currentTarget.releasePointerCapture?.(k.pointerId), k.preventDefault();
                  },
                  onPointerCancel: (k) => {
                    te.current = void 0, k.currentTarget.releasePointerCapture?.(k.pointerId);
                  },
                  children: [
                    ge.map((k) => {
                      const Z = ve.get(k.segment_id), G = !!Z?.area_id, le = r.has(k.segment_id), ue = s.has(k.segment_id), S = nw(k, ce), D = Z?.name || k.source_name, Q = m || v === "zone" || !G;
                      return /* @__PURE__ */ g.jsxs("g", { className: `room ${le ? "selected" : ""} ${ue ? "launched" : ""} ${G ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ g.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: tw(k, ce),
                            role: "button",
                            tabIndex: Q ? -1 : 0,
                            "aria-label": `${D}${G ? "" : ` — ${H(o, "roomUnmapped")}`}`,
                            "aria-pressed": le,
                            "aria-disabled": Q,
                            onClick: () => !Q && w(k.segment_id),
                            onKeyDown: (P) => {
                              !Q && (P.key === "Enter" || P.key === " ") && (P.preventDefault(), w(k.segment_id));
                            },
                            children: /* @__PURE__ */ g.jsx("title", { children: G ? D : `${D}: ${H(o, "roomUnmapped")}` })
                          }
                        ),
                        /* @__PURE__ */ g.jsxs("g", { className: "room-label", transform: `translate(${S.x} ${S.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ g.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ g.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ g.jsx(_c, { icon: Z?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ g.jsx("text", { y: "39", textAnchor: "middle", children: D })
                        ] })
                      ] }, k.segment_id);
                    }),
                    v === "zone" && me && /* @__PURE__ */ g.jsxs("g", { className: `zone-selection ${_ ? "launched" : ""}`, children: [
                      /* @__PURE__ */ g.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: me.x1,
                          y: me.y1,
                          width: me.x2 - me.x1,
                          height: me.y2 - me.y1,
                          role: "img",
                          "aria-label": H(o, "selectedZone")
                        }
                      ),
                      [
                        ["nw", me.x1, me.y1],
                        ["ne", me.x2, me.y1],
                        ["se", me.x2, me.y2],
                        ["sw", me.x1, me.y2]
                      ].map(([k, Z, G]) => /* @__PURE__ */ g.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": k,
                          cx: Z,
                          cy: G,
                          r: "12",
                          "aria-label": `${H(o, "resizeZone")} ${k}`
                        },
                        k
                      ))
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}
const _x = {
  preparing: /* @__PURE__ */ g.jsx(Jp, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ g.jsx(x_, {}),
  cleaning_upstairs: /* @__PURE__ */ g.jsx(mc, {}),
  carry_downstairs: /* @__PURE__ */ g.jsx(Xh, {}),
  finishing: /* @__PURE__ */ g.jsx(Jp, { className: "spin" }),
  complete: /* @__PURE__ */ g.jsx(j_, {}),
  error: /* @__PURE__ */ g.jsx(zc, {}),
  idle: /* @__PURE__ */ g.jsx(mc, {})
}, Yh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function bx({
  language: n,
  stage: i,
  roomNames: o,
  pending: r,
  onStart: s,
  onFinish: d,
  onReset: f,
  onCancel: m
}) {
  if (i === "idle") return null;
  const v = H(n, Yh[i].title), h = H(n, Yh[i].description), _ = !["complete", "error"].includes(i);
  return /* @__PURE__ */ g.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ g.jsx("div", { className: "assisted-icon", children: _x[i] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ g.jsx("strong", { children: v }),
      /* @__PURE__ */ g.jsx("p", { children: h }),
      o.length > 0 && /* @__PURE__ */ g.jsx("small", { children: o.join(" · ") })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: s, children: [
        /* @__PURE__ */ g.jsx($h, {}),
        H(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: d, children: [
        /* @__PURE__ */ g.jsx(Xh, {}),
        H(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", disabled: r, onClick: f, children: [
        /* @__PURE__ */ g.jsx(zc, {}),
        H(n, "newUpstairsJob")
      ] }),
      _ && /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: r, onClick: m, children: H(n, "cancel") })
    ] })
  ] });
}
function kl(n, i) {
  if (!i) return;
  const o = n.states[i];
  return !o || ["unknown", "unavailable"].includes(o.state) ? void 0 : `${o.attributes.device_class === "duration" && !isNaN(Number(o.state)) ? String(Math.round(Number(o.state))) : o.state}${o.attributes.unit_of_measurement ? ` ${o.attributes.unit_of_measurement}` : ""}`;
}
function Sx(n, i, o) {
  if (!i) return;
  const r = n.states[i];
  if (!r || ["unknown", "unavailable"].includes(r.state)) return;
  const s = Number(r.state);
  if (!Number.isFinite(s) || s < 0) return;
  const d = String(r.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[d];
  if (m === void 0) return;
  const v = s * m, h = Math.max(0, Math.round(v)), _ = Math.floor(h / 60), w = h % 60;
  return `${[
    _ > 0 ? `${_} ${H(o, "hourShort")}` : void 0,
    w > 0 || _ === 0 ? `${w} ${H(o, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${H(o, "remaining")}`;
}
function wx(n, i) {
  if (i === "washing_the_mop") return H(n, "washingMop");
}
function zx(n, i) {
  const o = new Date(n);
  if (isNaN(o.getTime())) return;
  const r = Date.now() - o.getTime();
  if (r < 0) return;
  const s = Math.floor(r / 6e4);
  if (s < 1) return H(i, "justNow");
  if (s < 60) return `${s} ${H(i, "minuteShort")} ${H(i, "ago")}`;
  const d = Math.floor(s / 60);
  if (d < 24) return `${d} ${H(i, "hourShort")} ${H(i, "ago")}`;
  const f = Math.floor(d / 24);
  return f === 1 ? H(i, "yesterday") : `${f} ${H(i, "daysAgo")}`;
}
function xx(n, i) {
  const o = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((r) => r.map_select_option === o) ?? n.floors[0];
}
function kx({ hass: n, config: i, connected: o = !0 }) {
  const r = F.useRef(n), s = F.useRef(!1), d = i.language, [f, m] = F.useState(() => xx(i, n).id), v = i.floors.find((L) => L.id === f) ?? i.floors[0], [h, _] = F.useState("rooms"), [w, z] = F.useState(/* @__PURE__ */ new Set()), [E, N] = F.useState(), [X, V] = F.useState(!1), [K, ee] = F.useState(!1), [$, q] = F.useState(!1), [W, te] = F.useState(!1), [M, J] = F.useState(), [ge, ce] = F.useState(), [ve, _e] = F.useState({ phase: "idle" }), me = F.useMemo(() => yw(n, i), [n, i]), Oe = F.useMemo(() => Bw(i, me, v), [i, me, v]), Ve = Oe.find(({ preset: L, available: ne }) => L.id === i.default_preset && ne)?.preset ?? Oe.find(({ available: L }) => L)?.preset, [k, Z] = F.useState(
    () => Cl(Ve ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), G = n.states[i.entity], le = sw(n, i), ue = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, S = F.useMemo(() => mw(ue), [ue]), D = uw(i, S), Q = cw(le), P = i.entities?.map_select ? n.states[i.entities.map_select]?.state : void 0;
  F.useEffect(() => {
    r.current = n;
  }, [n]), F.useEffect(() => {
    !Q || !D || !S || (m(D.id), _("rooms"), N(void 0), z(new Set(S.segment_ids)), Z({
      preset_id: "assisted_carry",
      strategy: S.strategy,
      cleaning_type: S.cleaning_type,
      fan_speed: S.fan_speed,
      mop_mode: S.mop_mode,
      mop_intensity: S.mop_intensity,
      cleaning_count: S.cleaning_count
    }));
  }, [Q, D, S]), F.useEffect(() => {
    if (Q || !P) return;
    const L = i.floors.find((ne) => ne.map_select_option === P);
    L && (m(L.id), z(/* @__PURE__ */ new Set()), N(void 0), L.assisted_carry && _("rooms"), V(!1));
  }, [Q, i.floors, P]);
  const de = i.entities?.status ? n.states[i.entities.status]?.state : void 0, pe = ["washing_the_mop", "washing_the_mop_2"].includes(de ?? ""), xe = [G?.state, de].includes("emptying_the_bin"), Ge = _w(G?.state) || pe, De = Q || ["submitting", "starting", "active"].includes(ve.phase);
  F.useEffect(() => {
    ve.phase === "starting" && Ge ? _e((L) => ({ ...L, phase: "active" })) : ve.phase === "active" && !Ge && (_e({ phase: "idle" }), z(/* @__PURE__ */ new Set()), N(void 0));
  }, [ve.phase, Ge]), F.useEffect(() => {
    if (!ge) return;
    const L = setTimeout(() => ce(void 0), 5e3);
    return () => clearTimeout(L);
  }, [ge]);
  const tn = new Set(ve.floor_id === v.id ? ve.segment_ids ?? [] : []), nn = v.rooms.filter((L) => w.has(L.segment_id)), an = nn.map((L) => L.name), An = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, Mt = An ? Sx(n, i.entities?.dock_mop_drying_remaining_time, d) : void 0, ia = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, Ei = !Ge && ia && !["unknown", "unavailable"].includes(ia) ? zx(ia, d) : void 0, Nr = [
    wx(d, de),
    An ? H(d, "dryingMop") : void 0,
    Mt
  ].filter((L) => !!L), Ai = [
    { icon: /* @__PURE__ */ g.jsx(E_, {}), label: H(d, "battery"), value: kl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ g.jsx(L_, {}), label: H(d, "room"), value: kl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ g.jsx(P_, {}), label: H(d, "area"), value: kl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ g.jsx(C_, {}), label: H(d, "duration"), value: kl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ g.jsx(i0, {}), label: H(d, "progress"), value: kl(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ g.jsx(U_, {}), label: H(d, "lastClean"), value: Ei }
  ].filter((L) => L.value), ji = (L) => {
    if (Q) return;
    const ne = i.floors.find((ie) => ie.id === L);
    m(L), z(/* @__PURE__ */ new Set()), N(void 0), ne?.assisted_carry && _("rooms"), V(!1);
  }, Ma = (L) => {
    L === "zone" && v.assisted_carry || (_(L), z(/* @__PURE__ */ new Set()), N(void 0), V(!1));
  }, Ca = (L) => {
    if (L) {
      const ne = Oe.find(({ preset: ie, available: ut }) => ie.id === i.default_preset && ut)?.preset ?? Oe.find(({ preset: ie, available: ut }) => ie.id === "vacuum_only" && ut)?.preset ?? Oe.find(({ available: ie }) => ie)?.preset;
      if (!ne) {
        ce(H(d, "unsupported"));
        return;
      }
      Z(Cl(ne));
    }
    if (h === "zone" && (k.strategy !== "custom" || !gc.has(k.cleaning_type))) {
      const ne = Oe.find(({ preset: ie, available: ut }) => ie.id === "vacuum_only" && ut)?.preset ?? Oe.find(({ preset: ie, available: ut }) => ie.id === "vacuum_and_mop" && ut)?.preset ?? Oe.find(({ preset: ie, available: ut }) => ut && ie.strategy === "custom" && gc.has(ie.cleaning_type ?? "vacuum"))?.preset;
      if (!ne) {
        ce(H(d, "unsupported"));
        return;
      }
      Z(Cl(ne));
    }
    if (!L && k.cleaning_type === "vacuum_then_mop" && v.vacuum_then_mop_routine) {
      const ne = v.rooms.filter((ie) => ie.include_in_floor_clean !== !1 && ie.area_id).map((ie) => ie.segment_id);
      z(new Set(ne));
    }
    ee(L), V(!0);
  }, Dr = () => {
    const L = v.rooms.filter((ne) => ne.include_in_floor_clean !== !1 && ne.area_id).map((ne) => ne.segment_id);
    z(new Set(L)), Ca(!!v.assisted_carry);
  }, Zr = (L) => {
    if (L.cleaning_type === "vacuum_then_mop" && v.vacuum_then_mop_routine) {
      const ne = v.rooms.filter((ie) => ie.include_in_floor_clean !== !1 && ie.area_id).map((ie) => ie.segment_id);
      z(new Set(ne));
    }
    Z(L);
  }, ot = (L) => L instanceof Dl ? `${L.operation}: ${L.message}` : L instanceof Error ? L.message : String(L), Rr = async (L = k) => {
    if (!s.current) {
      s.current = !0, q(!0);
      try {
        const ne = dw(v, [...w], L);
        await pw(r.current, i, ne), V(!1), ce(H(d, "preparingUpstairs"));
      } catch (ne) {
        ce(ot(ne));
        try {
          await bi(r.current, i, "error");
        } catch {
        }
      } finally {
        s.current = !1, q(!1);
      }
    }
  }, ql = async () => {
    if (!(s.current || !D || !S)) {
      s.current = !0, q(!0);
      try {
        await hw(r.current, i, D, S);
      } catch (L) {
        ce(ot(L));
        try {
          await bi(r.current, i, "error");
        } catch {
        }
      } finally {
        s.current = !1, q(!1);
      }
    }
  }, $l = async () => {
    if (!s.current) {
      s.current = !0, q(!0);
      try {
        await vw(r.current, i);
      } catch (L) {
        ce(ot(L));
        try {
          await bi(r.current, i, "error");
        } catch {
        }
      } finally {
        s.current = !1, q(!1);
      }
    }
  }, Oa = async () => {
    if (!$) {
      q(!0);
      try {
        await zh(r.current, i), z(/* @__PURE__ */ new Set());
      } catch (L) {
        ce(ot(L));
      } finally {
        q(!1);
      }
    }
  }, Ur = async () => {
    if (!$) {
      q(!0);
      try {
        const L = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((ne) => !!(ne && r.current.states[ne]));
        L.length > 0 && await r.current.callService("script", "turn_off", {}, { entity_id: L }), le === "cleaning_upstairs" && await r.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), pe && await lc(r.current, i, "wash", !0), xe && await lc(r.current, i, "empty", !0), await zh(r.current, i), z(/* @__PURE__ */ new Set());
      } catch (L) {
        ce(ot(L));
      } finally {
        q(!1);
      }
    }
  }, Ll = async (L = k) => {
    if (K) {
      await Rr(L);
      return;
    }
    if (s.current) return;
    s.current = !0;
    const ne = {
      floor_id: v.id,
      segment_ids: h === "rooms" ? [...w] : void 0,
      selection_mode: h,
      zone: h === "zone" ? E : void 0
    };
    _e({ phase: "submitting", ...ne });
    try {
      const ie = h === "zone" && E ? ew(E, wv(r.current.states[v.map_entity])) : void 0;
      await Nw({
        getHass: () => r.current,
        config: i,
        floor: v,
        rooms: h === "rooms" ? nn : [],
        draft: L,
        zone: ie
      }), _e({ phase: "starting", ...ne }), V(!1), ce(H(d, "launched"));
    } catch (ie) {
      const ut = ie instanceof Ee ? `${ie.operation}: ${ie.message}` : String(ie);
      _e({ phase: "failed", ...ne, error: ut }), ce(ut);
    } finally {
      s.current = !1;
    }
  }, Na = async (L) => {
    try {
      if (L === "stop" || L === "return_to_base") {
        const ne = i.entities?.vacuum_then_mop_script;
        ne && r.current.states[ne] && r.current.states[ne].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: ne });
        const ie = i.entities?.assisted_carry_start_script;
        Q && ie && r.current.states[ie] && r.current.states[ie].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: ie });
      }
      await r.current.callService("vacuum", L, {}, { entity_id: i.entity }), L === "stop" && le === "cleaning_upstairs" && await bi(r.current, i, "carry_downstairs");
    } catch (ne) {
      ce(`${L}: ${ne instanceof Error ? ne.message : String(ne)}`);
    }
  }, Yr = async (L, ne) => {
    if (!M) {
      J(H(d, "settingSaved"));
      try {
        await Ew(r.current, i, L, ne), ce(H(d, "settingSaved"));
      } catch (ie) {
        const ut = ie instanceof En ? `${ie.operation}: ${ie.message}` : String(ie);
        ce(ut);
      } finally {
        J(void 0);
      }
    }
  }, la = async (L, ne) => {
    if (!M) {
      if (!ne) {
        const ie = L === "empty" ? H(d, "confirmEmpty") : L === "wash" ? H(d, "confirmWash") : L === "dry" ? H(d, "confirmDry") : H(d, "confirmDrain");
        if (!window.confirm(ie)) return;
      }
      J(H(d, "dockActionSent"));
      try {
        await lc(r.current, i, L, ne), ce(H(d, "dockActionSent"));
      } catch (ie) {
        const ut = L === "drain" ? H(d, "drainRejected") : ie instanceof En ? `${ie.operation}: ${ie.message}` : String(ie);
        ce(ut);
      } finally {
        J(void 0);
      }
    }
  }, _t = async (L) => {
    const ne = i.entities?.dock_child_lock;
    if (!(!ne || M)) {
      J(H(d, "settingSaved"));
      try {
        await r.current.callService("switch", L ? "turn_on" : "turn_off", {}, { entity_id: ne }), ce(H(d, "settingSaved"));
      } catch (ie) {
        ce(`child_lock: ${ie instanceof Error ? ie.message : String(ie)}`);
      } finally {
        J(void 0);
      }
    }
  };
  return /* @__PURE__ */ g.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("h1", { children: i.name ?? G?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ g.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ g.jsx("span", { className: `state-dot state-${G?.state ?? "unavailable"}` }),
          /* @__PURE__ */ g.jsx("span", { children: G?.state?.replaceAll("_", " ") ?? "unavailable" }),
          Nr.map((L) => /* @__PURE__ */ g.jsx("span", { className: "state-detail", children: ` · ${L}` }, L))
        ] })
      ] }),
      Ai.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "status-strip", children: Ai.map((L) => /* @__PURE__ */ g.jsxs("div", { title: L.label, children: [
        L.icon,
        /* @__PURE__ */ g.jsx("strong", { children: L.value })
      ] }, L.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": H(d, "floor"), children: i.floors.map((L) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": v.id === L.id,
        className: v.id === L.id ? "active" : "",
        disabled: Q && v.id !== L.id,
        onClick: () => ji(L.id),
        children: L.name
      },
      L.id
    )) }),
    !v.assisted_carry && /* @__PURE__ */ g.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": H(d, "selectionMode"), children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "rooms",
          className: h === "rooms" ? "active" : "",
          disabled: De,
          onClick: () => Ma("rooms"),
          children: H(d, "rooms")
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "zone",
          className: h === "zone" ? "active" : "",
          disabled: De,
          onClick: () => Ma("zone"),
          children: H(d, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx(
      gx,
      {
        hass: n,
        floor: v,
        language: d,
        selected: w,
        launched: tn,
        active: Ge,
        connected: o,
        disabled: De,
        selectionMode: h,
        zone: E,
        zoneLaunched: ve.floor_id === v.id && ve.selection_mode === "zone" && ["starting", "active"].includes(ve.phase),
        onToggle: (L) => z((ne) => {
          const ie = new Set(ne);
          return ie.has(L) ? ie.delete(L) : ie.add(L), ie;
        }),
        onZoneChange: N
      }
    ),
    v.assisted_carry && /* @__PURE__ */ g.jsx(
      bx,
      {
        language: d,
        stage: le,
        roomNames: an,
        pending: $,
        onStart: ql,
        onFinish: $l,
        onReset: Oa,
        onCancel: Ur
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("strong", { children: h === "zone" ? H(d, "selectedZone") : H(d, "selectedRooms") }),
        /* @__PURE__ */ g.jsx("span", { children: h === "zone" ? E ? H(d, "zoneReady") : H(d, "noZoneSelected") : an.length ? an.join(" · ") : H(d, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: h === "zone" ? +!!E : w.size })
    ] }),
    !Q && /* @__PURE__ */ g.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", onClick: Dr, disabled: De, children: [
        /* @__PURE__ */ g.jsx(Kp, {}),
        " ",
        H(d, "entireFloor")
      ] }),
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Ca(!!v.assisted_carry),
          disabled: (h === "zone" ? !E : w.size === 0) || De,
          children: [
            v.assisted_carry && /* @__PURE__ */ g.jsx(mc, {}),
            v.assisted_carry ? H(d, "prepareUpstairs") : H(d, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      G?.state === "paused" && me.canStart && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => Na("start"), children: [
        /* @__PURE__ */ g.jsx($h, {}),
        H(d, "resume")
      ] }),
      G?.state === "cleaning" && me.canPause && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => Na("pause"), children: [
        /* @__PURE__ */ g.jsx(G_, {}),
        H(d, "pause")
      ] }),
      me.canStop && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => Na("stop"), children: [
        /* @__PURE__ */ g.jsx(n0, {}),
        H(d, "stop")
      ] }),
      me.canDock && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => Na("return_to_base"), children: [
        /* @__PURE__ */ g.jsx(Kp, {}),
        H(d, "dock")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => te(!0), children: [
        /* @__PURE__ */ g.jsx(I_, {}),
        H(d, "dockStation")
      ] })
    ] }),
    X && /* @__PURE__ */ g.jsx(
      Pw,
      {
        language: d,
        draft: k,
        capabilities: me,
        presets: Oe,
        selectedRoomNames: h === "zone" ? [H(d, "customZone")] : an,
        submitting: ve.phase === "submitting" || $,
        assistedCarry: K,
        zoneCleaning: h === "zone",
        mopRoutes: i.mop_routes,
        onDraftChange: Zr,
        onClose: () => ve.phase !== "submitting" && !$ && V(!1),
        onStart: Ll
      }
    ),
    W && /* @__PURE__ */ g.jsx(
      $w,
      {
        hass: n,
        config: i,
        language: d,
        washing: pe,
        emptying: xe,
        drying: An,
        dryingRemaining: Mt,
        pending: M,
        onClose: () => !M && te(!1),
        onAction: la,
        onSetting: Yr,
        onChildLock: _t
      }
    ),
    ge && /* @__PURE__ */ g.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ g.jsx("span", { children: ge }),
      /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": H(d, "close"), onClick: () => ce(void 0), children: /* @__PURE__ */ g.jsx(xc, {}) })
    ] })
  ] });
}
const Tx = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', Ex = "0.8.1";
class Lv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), o = document.createElement("style");
    o.textContent = Tx, i.append(o), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= h_.createRoot(this.container), this.root.render(i);
  }
}
class Ax extends Lv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = F2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  // Lovelace keeps left views detached in memory and stops sending them hass,
  // so the card has to stop its own background work while it is off the page.
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ g.jsx(kx, { hass: this.homeAssistant, config: this.config, connected: this.isConnected }));
  }
  getCardSize() {
    return 10;
  }
  getGridOptions() {
    return { columns: 12, rows: "auto", min_rows: 10 };
  }
  static getConfigElement() {
    return document.createElement("roborock-vacuum-map-card-editor");
  }
  static getStubConfig() {
    return Sv();
  }
}
class jx extends Lv {
  config = Sv();
  homeAssistant;
  setConfig(i) {
    this.config = structuredClone(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ g.jsx(
        ow,
        {
          hass: this.homeAssistant,
          config: this.config,
          onChange: (i) => {
            this.config = i, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: i }, bubbles: !0, composed: !0 })), this.render();
          }
        }
      )
    );
  }
}
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Ax);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", jx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Ex} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Ax as RoborockVacuumMapCard,
  jx as RoborockVacuumMapCardEditor
};
