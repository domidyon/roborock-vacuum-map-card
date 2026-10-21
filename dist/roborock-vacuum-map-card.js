function qh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ws = { exports: {} }, bl = {};
var Zp;
function u_() {
  if (Zp) return bl;
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
  return bl.Fragment = i, bl.jsx = o, bl.jsxs = o, bl;
}
var Up;
function s_() {
  return Up || (Up = 1, Ws.exports = u_()), Ws.exports;
}
var g = s_(), Fs = { exports: {} }, Sl = {}, Is = { exports: {} }, ec = {};
var Yp;
function c_() {
  return Yp || (Yp = 1, (function(n) {
    function i(E, X) {
      var F = E.length;
      E.push(X);
      e: for (; 0 < F; ) {
        var he = F - 1 >>> 1, se = E[he];
        if (0 < s(se, X))
          E[he] = X, E[F] = se, F = he;
        else break e;
      }
    }
    function o(E) {
      return E.length === 0 ? null : E[0];
    }
    function r(E) {
      if (E.length === 0) return null;
      var X = E[0], F = E.pop();
      if (F !== X) {
        E[0] = F;
        e: for (var he = 0, se = E.length, w = se >>> 1; he < w; ) {
          var N = 2 * (he + 1) - 1, P = E[N], te = N + 1, pe = E[te];
          if (0 > s(P, F))
            te < se && 0 > s(pe, P) ? (E[he] = pe, E[te] = F, he = te) : (E[he] = P, E[N] = F, he = N);
          else if (te < se && 0 > s(pe, F))
            E[he] = pe, E[te] = F, he = te;
          else break e;
        }
      }
      return X;
    }
    function s(E, X) {
      var F = E.sortIndex - X.sortIndex;
      return F !== 0 ? F : E.id - X.id;
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
    var h = [], v = [], _ = 1, b = null, x = 3, T = !1, j = !1, Q = !1, $ = !1, K = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function G(E) {
      for (var X = o(v); X !== null; ) {
        if (X.callback === null) r(v);
        else if (X.startTime <= E)
          r(v), X.sortIndex = X.expirationTime, i(h, X);
        else break;
        X = o(v);
      }
    }
    function q(E) {
      if (Q = !1, G(E), !j)
        if (o(h) !== null)
          j = !0, I || (I = !0, fe());
        else {
          var X = o(v);
          X !== null && ne(q, X.startTime - E);
        }
    }
    var I = !1, B = -1, V = 5, J = -1;
    function re() {
      return $ ? !0 : !(n.unstable_now() - J < V);
    }
    function ze() {
      if ($ = !1, I) {
        var E = n.unstable_now();
        J = E;
        var X = !0;
        try {
          e: {
            j = !1, Q && (Q = !1, ae(B), B = -1), T = !0;
            var F = x;
            try {
              t: {
                for (G(E), b = o(h); b !== null && !(b.expirationTime > E && re()); ) {
                  var he = b.callback;
                  if (typeof he == "function") {
                    b.callback = null, x = b.priorityLevel;
                    var se = he(
                      b.expirationTime <= E
                    );
                    if (E = n.unstable_now(), typeof se == "function") {
                      b.callback = se, G(E), X = !0;
                      break t;
                    }
                    b === o(h) && r(h), G(E);
                  } else r(h);
                  b = o(h);
                }
                if (b !== null) X = !0;
                else {
                  var w = o(v);
                  w !== null && ne(
                    q,
                    w.startTime - E
                  ), X = !1;
                }
              }
              break e;
            } finally {
              b = null, x = F, T = !1;
            }
            X = void 0;
          }
        } finally {
          X ? fe() : I = !1;
        }
      }
    }
    var fe;
    if (typeof L == "function")
      fe = function() {
        L(ze);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), W = xe.port2;
      xe.port1.onmessage = ze, fe = function() {
        W.postMessage(null);
      };
    } else
      fe = function() {
        K(ze, 0);
      };
    function ne(E, X) {
      B = K(function() {
        E(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, n.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < E ? Math.floor(1e3 / E) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(E) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = x;
      }
      var F = x;
      x = X;
      try {
        return E();
      } finally {
        x = F;
      }
    }, n.unstable_requestPaint = function() {
      $ = !0;
    }, n.unstable_runWithPriority = function(E, X) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var F = x;
      x = E;
      try {
        return X();
      } finally {
        x = F;
      }
    }, n.unstable_scheduleCallback = function(E, X, F) {
      var he = n.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? he + F : he) : F = he, E) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = F + se, E = {
        id: _++,
        callback: X,
        priorityLevel: E,
        startTime: F,
        expirationTime: se,
        sortIndex: -1
      }, F > he ? (E.sortIndex = F, i(v, E), o(h) === null && E === o(v) && (Q ? (ae(B), B = -1) : Q = !0, ne(q, F - he))) : (E.sortIndex = se, i(h, E), j || T || (j = !0, I || (I = !0, fe()))), E;
    }, n.unstable_shouldYield = re, n.unstable_wrapCallback = function(E) {
      var X = x;
      return function() {
        var F = x;
        x = X;
        try {
          return E.apply(this, arguments);
        } finally {
          x = F;
        }
      };
    };
  })(ec)), ec;
}
var Bp;
function d_() {
  return Bp || (Bp = 1, Is.exports = c_()), Is.exports;
}
var tc = { exports: {} }, ve = {};
var Hp;
function f_() {
  if (Hp) return ve;
  Hp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function T(w) {
    return w === null || typeof w != "object" ? null : (w = x && w[x] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, $ = {};
  function K(w, N, P) {
    this.props = w, this.context = N, this.refs = $, this.updater = P || j;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(w, N) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, N, "setState");
  }, K.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = K.prototype;
  function L(w, N, P) {
    this.props = w, this.context = N, this.refs = $, this.updater = P || j;
  }
  var G = L.prototype = new ae();
  G.constructor = L, Q(G, K.prototype), G.isPureReactComponent = !0;
  var q = Array.isArray;
  function I() {
  }
  var B = { H: null, A: null, T: null, S: null }, V = Object.prototype.hasOwnProperty;
  function J(w, N, P) {
    var te = P.ref;
    return {
      $$typeof: n,
      type: w,
      key: N,
      ref: te !== void 0 ? te : null,
      props: P
    };
  }
  function re(w, N) {
    return J(w.type, N, w.props);
  }
  function ze(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function fe(w) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(P) {
      return N[P];
    });
  }
  var xe = /\/+/g;
  function W(w, N) {
    return typeof w == "object" && w !== null && w.key != null ? fe("" + w.key) : N.toString(36);
  }
  function ne(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(I, I) : (w.status = "pending", w.then(
          function(N) {
            w.status === "pending" && (w.status = "fulfilled", w.value = N);
          },
          function(N) {
            w.status === "pending" && (w.status = "rejected", w.reason = N);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function E(w, N, P, te, pe) {
    var ye = typeof w;
    (ye === "undefined" || ye === "boolean") && (w = null);
    var be = !1;
    if (w === null) be = !0;
    else
      switch (ye) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case i:
              be = !0;
              break;
            case _:
              return be = w._init, E(
                be(w._payload),
                N,
                P,
                te,
                pe
              );
          }
      }
    if (be)
      return pe = pe(w), be = te === "" ? "." + W(w, 0) : te, q(pe) ? (P = "", be != null && (P = be.replace(xe, "$&/") + "/"), E(pe, N, P, "", function(Pt) {
        return Pt;
      })) : pe != null && (ze(pe) && (pe = re(
        pe,
        P + (pe.key == null || w && w.key === pe.key ? "" : ("" + pe.key).replace(
          xe,
          "$&/"
        ) + "/") + be
      )), N.push(pe)), 1;
    be = 0;
    var Ge = te === "" ? "." : te + ":";
    if (q(w))
      for (var $e = 0; $e < w.length; $e++)
        te = w[$e], ye = Ge + W(te, $e), be += E(
          te,
          N,
          P,
          ye,
          pe
        );
    else if ($e = T(w), typeof $e == "function")
      for (w = $e.call(w), $e = 0; !(te = w.next()).done; )
        te = te.value, ye = Ge + W(te, $e++), be += E(
          te,
          N,
          P,
          ye,
          pe
        );
    else if (ye === "object") {
      if (typeof w.then == "function")
        return E(
          ne(w),
          N,
          P,
          te,
          pe
        );
      throw N = String(w), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function X(w, N, P) {
    if (w == null) return w;
    var te = [], pe = 0;
    return E(w, te, "", "", function(ye) {
      return N.call(P, ye, pe++);
    }), te;
  }
  function F(w) {
    if (w._status === -1) {
      var N = w._result;
      N = N(), N.then(
        function(P) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = P);
        },
        function(P) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = P);
        }
      ), w._status === -1 && (w._status = 0, w._result = N);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var he = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, se = {
    map: X,
    forEach: function(w, N, P) {
      X(
        w,
        function() {
          N.apply(this, arguments);
        },
        P
      );
    },
    count: function(w) {
      var N = 0;
      return X(w, function() {
        N++;
      }), N;
    },
    toArray: function(w) {
      return X(w, function(N) {
        return N;
      }) || [];
    },
    only: function(w) {
      if (!ze(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ve.Activity = b, ve.Children = se, ve.Component = K, ve.Fragment = o, ve.Profiler = s, ve.PureComponent = L, ve.StrictMode = r, ve.Suspense = h, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return B.H.useMemoCache(w);
    }
  }, ve.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(w, N, P) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var te = Q({}, w.props), pe = w.key;
    if (N != null)
      for (ye in N.key !== void 0 && (pe = "" + N.key), N)
        !V.call(N, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && N.ref === void 0 || (te[ye] = N[ye]);
    var ye = arguments.length - 2;
    if (ye === 1) te.children = P;
    else if (1 < ye) {
      for (var be = Array(ye), Ge = 0; Ge < ye; Ge++)
        be[Ge] = arguments[Ge + 2];
      te.children = be;
    }
    return J(w.type, pe, te);
  }, ve.createContext = function(w) {
    return w = {
      $$typeof: f,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: d,
      _context: w
    }, w;
  }, ve.createElement = function(w, N, P) {
    var te, pe = {}, ye = null;
    if (N != null)
      for (te in N.key !== void 0 && (ye = "" + N.key), N)
        V.call(N, te) && te !== "key" && te !== "__self" && te !== "__source" && (pe[te] = N[te]);
    var be = arguments.length - 2;
    if (be === 1) pe.children = P;
    else if (1 < be) {
      for (var Ge = Array(be), $e = 0; $e < be; $e++)
        Ge[$e] = arguments[$e + 2];
      pe.children = Ge;
    }
    if (w && w.defaultProps)
      for (te in be = w.defaultProps, be)
        pe[te] === void 0 && (pe[te] = be[te]);
    return J(w, ye, pe);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, ve.isValidElement = ze, ve.lazy = function(w) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: w },
      _init: F
    };
  }, ve.memo = function(w, N) {
    return {
      $$typeof: v,
      type: w,
      compare: N === void 0 ? null : N
    };
  }, ve.startTransition = function(w) {
    var N = B.T, P = {};
    B.T = P;
    try {
      var te = w(), pe = B.S;
      pe !== null && pe(P, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(I, he);
    } catch (ye) {
      he(ye);
    } finally {
      N !== null && P.types !== null && (N.types = P.types), B.T = N;
    }
  }, ve.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, ve.use = function(w) {
    return B.H.use(w);
  }, ve.useActionState = function(w, N, P) {
    return B.H.useActionState(w, N, P);
  }, ve.useCallback = function(w, N) {
    return B.H.useCallback(w, N);
  }, ve.useContext = function(w) {
    return B.H.useContext(w);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(w, N) {
    return B.H.useDeferredValue(w, N);
  }, ve.useEffect = function(w, N) {
    return B.H.useEffect(w, N);
  }, ve.useEffectEvent = function(w) {
    return B.H.useEffectEvent(w);
  }, ve.useId = function() {
    return B.H.useId();
  }, ve.useImperativeHandle = function(w, N, P) {
    return B.H.useImperativeHandle(w, N, P);
  }, ve.useInsertionEffect = function(w, N) {
    return B.H.useInsertionEffect(w, N);
  }, ve.useLayoutEffect = function(w, N) {
    return B.H.useLayoutEffect(w, N);
  }, ve.useMemo = function(w, N) {
    return B.H.useMemo(w, N);
  }, ve.useOptimistic = function(w, N) {
    return B.H.useOptimistic(w, N);
  }, ve.useReducer = function(w, N, P) {
    return B.H.useReducer(w, N, P);
  }, ve.useRef = function(w) {
    return B.H.useRef(w);
  }, ve.useState = function(w) {
    return B.H.useState(w);
  }, ve.useSyncExternalStore = function(w, N, P) {
    return B.H.useSyncExternalStore(
      w,
      N,
      P
    );
  }, ve.useTransition = function() {
    return B.H.useTransition();
  }, ve.version = "19.2.8", ve;
}
var Xp;
function wc() {
  return Xp || (Xp = 1, tc.exports = f_()), tc.exports;
}
var nc = { exports: {} }, yt = {};
var qp;
function m_() {
  if (qp) return yt;
  qp = 1;
  var n = wc();
  function i(h) {
    var v = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        v += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function d(h, v, _) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: v,
      implementation: _
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, v) {
    if (h === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, yt.createPortal = function(h, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return d(h, v, null, _);
  }, yt.flushSync = function(h) {
    var v = f.T, _ = r.p;
    try {
      if (f.T = null, r.p = 2, h) return h();
    } finally {
      f.T = v, r.p = _, r.d.f();
    }
  }, yt.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, r.d.C(h, v));
  }, yt.prefetchDNS = function(h) {
    typeof h == "string" && r.d.D(h);
  }, yt.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin), x = typeof v.integrity == "string" ? v.integrity : void 0, T = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? r.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: T
        }
      ) : _ === "script" && r.d.X(h, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: T,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, yt.preinitModule = function(h, v) {
    if (typeof h == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var _ = m(
            v.as,
            v.crossOrigin
          );
          r.d.M(h, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && r.d.M(h);
  }, yt.preload = function(h, v) {
    if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin);
      r.d.L(h, _, {
        crossOrigin: b,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, yt.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var _ = m(v.as, v.crossOrigin);
        r.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else r.d.m(h);
  }, yt.requestFormReset = function(h) {
    r.d.r(h);
  }, yt.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, yt.useFormState = function(h, v, _) {
    return f.H.useFormState(h, v, _);
  }, yt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, yt.version = "19.2.8", yt;
}
var $p;
function p_() {
  if ($p) return nc.exports;
  $p = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), nc.exports = m_(), nc.exports;
}
var Lp;
function h_() {
  if (Lp) return Sl;
  Lp = 1;
  var n = d_(), i = wc(), o = p_();
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
  function h(e) {
    if (d(e) !== e)
      throw Error(r(188));
  }
  function v(e) {
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
          if (c === a) return h(u), e;
          if (c === l) return h(u), t;
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
  var b = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), J = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ze = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : (e = ze && e[ze] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case K:
        return "Profiler";
      case $:
        return "StrictMode";
      case q:
        return "Suspense";
      case I:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case ae:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case B:
          return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
        case V:
          t = e._payload, e = e._init;
          try {
            return W(e(t));
          } catch {
          }
      }
    return null;
  }
  var ne = Array.isArray, E = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, he = [], se = -1;
  function w(e) {
    return { current: e };
  }
  function N(e) {
    0 > se || (e.current = he[se], he[se] = null, se--);
  }
  function P(e, t) {
    se++, he[se] = e.current, e.current = t;
  }
  var te = w(null), pe = w(null), ye = w(null), be = w(null);
  function Ge(e, t) {
    switch (P(ye, t), P(pe, e), P(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? lp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = lp(t), e = op(t, e);
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
    N(te), P(te, e);
  }
  function $e() {
    N(te), N(pe), N(ye);
  }
  function Pt(e) {
    e.memoizedState !== null && P(be, e);
    var t = te.current, a = op(t, e.type);
    t !== a && (P(pe, e), P(te, a));
  }
  function Ut(e) {
    pe.current === e && (N(te), N(pe)), be.current === e && (N(be), vl._currentValue = F);
  }
  var rn, na;
  function St(e) {
    if (rn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        rn = t && t[1] || "", na = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + rn + e + na;
  }
  var Ti = !1;
  function Ei(e, t) {
    if (!e || Ti) return "";
    Ti = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (C) {
                  var O = C;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (C) {
                  O = C;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                O = C;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (C) {
            if (C && O && typeof C.stack == "string")
              return [C.stack, O.stack];
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
        var S = p.split(`
`), M = y.split(`
`);
        for (u = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < M.length && !M[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === S.length || u === M.length)
          for (l = S.length - 1, u = M.length - 1; 1 <= l && 0 <= u && S[l] !== M[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (S[l] !== M[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || S[l] !== M[u]) {
                  var D = `
` + S[l].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Ti = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? St(a) : "";
  }
  function ql(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return St(e.type);
      case 16:
        return St("Lazy");
      case 13:
        return e.child !== t && t !== null ? St("Suspense Fallback") : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return Ei(e.type, !1);
      case 11:
        return Ei(e.type.render, !1);
      case 1:
        return Ei(e.type, !0);
      case 31:
        return St("Activity");
      default:
        return "";
    }
  }
  function $l(e) {
    try {
      var t = "", a = null;
      do
        t += ql(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ja = Object.prototype.hasOwnProperty, Oa = n.unstable_scheduleCallback, Ai = n.unstable_cancelCallback, Dr = n.unstable_shouldYield, aa = n.unstable_requestPaint, gt = n.unstable_now, Rr = n.unstable_getCurrentPriorityLevel, Ll = n.unstable_ImmediatePriority, Vl = n.unstable_UserBlockingPriority, Ca = n.unstable_NormalPriority, Zr = n.unstable_LowPriority, ia = n.unstable_IdlePriority, Ur = n.log, Yr = n.unstable_setDisableYieldValue, la = null, H = null;
  function ue(e) {
    if (typeof Ur == "function" && Yr(e), H && typeof H.setStrictMode == "function")
      try {
        H.setStrictMode(la, e);
      } catch {
      }
  }
  var ee = Math.clz32 ? Math.clz32 : Kv, rt = Math.log, Qv = Math.LN2;
  function Kv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (rt(e) / Qv | 0) | 0;
  }
  var Gl = 256, Ql = 262144, Kl = 4194304;
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
  function Jl(e, t, a) {
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
  function Jv(e, t) {
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
  function Bc() {
    var e = Kl;
    return Kl <<= 1, (Kl & 62914560) === 0 && (Kl = 4194304), e;
  }
  function Br(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ji(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Pv(e, t, a, l, u, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var D = 31 - ee(a), U = 1 << D;
      y[D] = 0, S[D] = -1;
      var O = M[D];
      if (O !== null)
        for (M[D] = null, D = 0; D < O.length; D++) {
          var C = O[D];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~U;
    }
    l !== 0 && Hc(e, l, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Hc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - ee(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Xc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - ee(a), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), a &= ~u;
    }
  }
  function qc(e, t) {
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
  function $c() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Mp(e.type));
  }
  function Lc(e, t) {
    var a = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = a;
    }
  }
  var En = Math.random().toString(36).slice(2), ct = "__reactFiber$" + En, wt = "__reactProps$" + En, Na = "__reactContainer$" + En, qr = "__reactEvents$" + En, Wv = "__reactListeners$" + En, Fv = "__reactHandles$" + En, Vc = "__reactResources$" + En, Oi = "__reactMarker$" + En;
  function $r(e) {
    delete e[ct], delete e[wt], delete e[qr], delete e[Wv], delete e[Fv];
  }
  function Da(e) {
    var t = e[ct];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Na] || a[ct]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = mp(e); e !== null; ) {
            if (a = e[ct]) return a;
            e = mp(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ra(e) {
    if (e = e[ct] || e[Na]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ci(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Za(e) {
    var t = e[Vc];
    return t || (t = e[Vc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Oi] = !0;
  }
  var Gc = /* @__PURE__ */ new Set(), Qc = {};
  function ra(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for (Qc[e] = t, e = 0; e < t.length; e++)
      Gc.add(t[e]);
  }
  var Iv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Kc = {}, Jc = {};
  function ey(e) {
    return ja.call(Jc, e) ? !0 : ja.call(Kc, e) ? !1 : Iv.test(e) ? Jc[e] = !0 : (Kc[e] = !0, !1);
  }
  function Pl(e, t, a) {
    if (ey(t))
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
  function un(e, t, a, l) {
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
  function Pc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ty(e, t, a) {
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
      var t = Pc(e) ? "checked" : "value";
      e._valueTracker = ty(
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
    return e && (l = Pc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Fl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ny = /[\n"\\]/g;
  function Bt(e) {
    return e.replace(
      ny,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vr(e, t, a, l, u, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Gr(e, p, Yt(t)) : a != null ? Gr(e, p, Yt(a)) : l != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Yt(y) : e.removeAttribute("name");
  }
  function Fc(e, t, a, l, u, c, p, y) {
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
    t === "number" && Fl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, t, a, l) {
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
  function Ic(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function ed(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (ne(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Lr(e);
  }
  function Ba(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ay = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function td(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ay.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function nd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && a[u] !== l && td(e, u, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && td(e, c, t[c]);
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
  var iy = /* @__PURE__ */ new Map([
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
  ]), ly = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Il(e) {
    return ly.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sn() {
  }
  var Kr = null;
  function Jr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, Xa = null;
  function ad(e) {
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
          Ic(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ya(e, !!a.multiple, t, !1);
      }
    }
  }
  var Pr = !1;
  function id(e, t, a) {
    if (Pr) return e(t, a);
    Pr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Pr = !1, (Ha !== null || Xa !== null) && (Xo(), Ha && (t = Ha, e = Xa, Xa = Ha = null, ad(t), e)))
        for (t = 0; t < e.length; t++) ad(e[t]);
    }
  }
  function Ni(e, t) {
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
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = !1;
  if (cn)
    try {
      var Di = {};
      Object.defineProperty(Di, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
    } catch {
      Wr = !1;
    }
  var An = null, Fr = null, eo = null;
  function ld() {
    if (eo) return eo;
    var e, t = Fr, a = t.length, l, u = "value" in An ? An.value : An.textContent, c = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var p = a - e;
    for (l = 1; l <= p && t[a - l] === u[c - l]; l++) ;
    return eo = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function to(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function no() {
    return !0;
  }
  function od() {
    return !1;
  }
  function zt(e) {
    function t(a, l, u, c, p) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? no : od, this.isPropagationStopped = od, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = no);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = no);
      },
      persist: function() {
      },
      isPersistent: no
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
  }, ao = zt(ua), Ri = b({}, ua, { view: 0, detail: 0 }), oy = zt(Ri), Ir, eu, Zi, io = b({}, Ri, {
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
      return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? (Ir = e.screenX - Zi.screenX, eu = e.screenY - Zi.screenY) : eu = Ir = 0, Zi = e), Ir);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : eu;
    }
  }), rd = zt(io), ry = b({}, io, { dataTransfer: 0 }), uy = zt(ry), sy = b({}, Ri, { relatedTarget: 0 }), tu = zt(sy), cy = b({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dy = zt(cy), fy = b({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), my = zt(fy), py = b({}, ua, { data: 0 }), ud = zt(py), hy = {
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
  }, vy = {
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
  }, yy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yy[e]) ? !!t[e] : !1;
  }
  function nu() {
    return gy;
  }
  var _y = b({}, Ri, {
    key: function(e) {
      if (e.key) {
        var t = hy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = to(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vy[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? to(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? to(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), by = zt(_y), Sy = b({}, io, {
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
  }), sd = zt(Sy), wy = b({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nu
  }), zy = zt(wy), xy = b({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ky = zt(xy), Ty = b({}, io, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ey = zt(Ty), Ay = b({}, ua, {
    newState: 0,
    oldState: 0
  }), My = zt(Ay), jy = [9, 13, 27, 32], au = cn && "CompositionEvent" in window, Ui = null;
  cn && "documentMode" in document && (Ui = document.documentMode);
  var Oy = cn && "TextEvent" in window && !Ui, cd = cn && (!au || Ui && 8 < Ui && 11 >= Ui), dd = " ", fd = !1;
  function md(e, t) {
    switch (e) {
      case "keyup":
        return jy.indexOf(t.keyCode) !== -1;
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
  function pd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qa = !1;
  function Cy(e, t) {
    switch (e) {
      case "compositionend":
        return pd(t);
      case "keypress":
        return t.which !== 32 ? null : (fd = !0, dd);
      case "textInput":
        return e = t.data, e === dd && fd ? null : e;
      default:
        return null;
    }
  }
  function Ny(e, t) {
    if (qa)
      return e === "compositionend" || !au && md(e, t) ? (e = ld(), eo = Fr = An = null, qa = !1, e) : null;
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
        return cd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dy = {
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
  function hd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dy[e.type] : t === "textarea";
  }
  function vd(e, t, a, l) {
    Ha ? Xa ? Xa.push(l) : Xa = [l] : Ha = l, t = Ko(t, "onChange"), 0 < t.length && (a = new ao(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, Bi = null;
  function Ry(e) {
    Im(e, 0);
  }
  function lo(e) {
    var t = Ci(e);
    if (Wc(t)) return e;
  }
  function yd(e, t) {
    if (e === "change") return t;
  }
  var gd = !1;
  if (cn) {
    var iu;
    if (cn) {
      var lu = "oninput" in document;
      if (!lu) {
        var _d = document.createElement("div");
        _d.setAttribute("oninput", "return;"), lu = typeof _d.oninput == "function";
      }
      iu = lu;
    } else iu = !1;
    gd = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function bd() {
    Yi && (Yi.detachEvent("onpropertychange", Sd), Bi = Yi = null);
  }
  function Sd(e) {
    if (e.propertyName === "value" && lo(Bi)) {
      var t = [];
      vd(
        t,
        Bi,
        e,
        Jr(e)
      ), id(Ry, t);
    }
  }
  function Zy(e, t, a) {
    e === "focusin" ? (bd(), Yi = t, Bi = a, Yi.attachEvent("onpropertychange", Sd)) : e === "focusout" && bd();
  }
  function Uy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return lo(Bi);
  }
  function Yy(e, t) {
    if (e === "click") return lo(t);
  }
  function By(e, t) {
    if (e === "input" || e === "change")
      return lo(t);
  }
  function Hy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : Hy;
  function Hi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!ja.call(t, u) || !jt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zd(e, t) {
    var a = wd(e);
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
      a = wd(a);
    }
  }
  function xd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function kd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Fl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Fl(e.document);
    }
    return t;
  }
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Xy = cn && "documentMode" in document && 11 >= document.documentMode, $a = null, ru = null, Xi = null, uu = !1;
  function Td(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    uu || $a == null || $a !== Fl(l) || (l = $a, "selectionStart" in l && ou(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Xi && Hi(Xi, l) || (Xi = l, l = Ko(ru, "onSelect"), 0 < l.length && (t = new ao(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = $a)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var La = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, su = {}, Ed = {};
  cn && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ca(e) {
    if (su[e]) return su[e];
    if (!La[e]) return e;
    var t = La[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ed)
        return su[e] = t[a];
    return e;
  }
  var Ad = ca("animationend"), Md = ca("animationiteration"), jd = ca("animationstart"), qy = ca("transitionrun"), $y = ca("transitionstart"), Ly = ca("transitioncancel"), Od = ca("transitionend"), Cd = /* @__PURE__ */ new Map(), cu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cu.push("scrollEnd");
  function Wt(e, t) {
    Cd.set(e, t), ra(t, [e]);
  }
  var oo = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ht = [], Va = 0, du = 0;
  function ro() {
    for (var e = Va, t = du = Va = 0; t < e; ) {
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
      c !== 0 && Nd(a, u, c);
    }
  }
  function uo(e, t, a, l) {
    Ht[Va++] = e, Ht[Va++] = t, Ht[Va++] = a, Ht[Va++] = l, du |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function fu(e, t, a, l) {
    return uo(e, t, a, l), so(e);
  }
  function da(e, t) {
    return uo(e, null, null, t), so(e);
  }
  function Nd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - ee(a), e = c.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function so(e) {
    if (50 < sl)
      throw sl = 0, Ss = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ga = {};
  function Vy(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, a, l) {
    return new Vy(e, t, a, l);
  }
  function mu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function dn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Dd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function co(e, t, a, l, u, c) {
    var p = 0;
    if (l = e, typeof e == "function") mu(e) && (p = 1);
    else if (typeof e == "string")
      p = Pg(
        e,
        a,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case J:
          return e = Ot(31, a, t, u), e.elementType = J, e.lanes = c, e;
        case Q:
          return fa(a.children, u, c, t);
        case $:
          p = 8, u |= 24;
          break;
        case K:
          return e = Ot(12, a, t, u | 2), e.elementType = K, e.lanes = c, e;
        case q:
          return e = Ot(13, a, t, u), e.elementType = q, e.lanes = c, e;
        case I:
          return e = Ot(19, a, t, u), e.elementType = I, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                p = 10;
                break e;
              case ae:
                p = 9;
                break e;
              case G:
                p = 11;
                break e;
              case B:
                p = 14;
                break e;
              case V:
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
  function Rd(e) {
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
        stack: $l(t)
      }, Zd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: $l(t)
    };
  }
  var Qa = [], Ka = 0, fo = null, qi = 0, qt = [], $t = 0, Mn = null, nn = 1, an = "";
  function fn(e, t) {
    Qa[Ka++] = qi, Qa[Ka++] = fo, fo = e, qi = t;
  }
  function Ud(e, t, a) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Mn, Mn = e;
    var l = nn;
    e = an;
    var u = 32 - ee(l) - 1;
    l &= ~(1 << u), a += 1;
    var c = 32 - ee(t) + u;
    if (30 < c) {
      var p = u - u % 5;
      c = (l & (1 << p) - 1).toString(32), l >>= p, u -= p, nn = 1 << 32 - ee(t) + u | a << u | l, an = c + e;
    } else
      nn = 1 << c | a << u | l, an = e;
  }
  function vu(e) {
    e.return !== null && (fn(e, 1), Ud(e, 1, 0));
  }
  function yu(e) {
    for (; e === fo; )
      fo = Qa[--Ka], Qa[Ka] = null, qi = Qa[--Ka], Qa[Ka] = null;
    for (; e === Mn; )
      Mn = qt[--$t], qt[$t] = null, an = qt[--$t], qt[$t] = null, nn = qt[--$t], qt[$t] = null;
  }
  function Yd(e, t) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Mn, nn = t.id, an = t.overflow, Mn = e;
  }
  var dt = null, Le = null, Ee = !1, jn = null, Lt = !1, gu = Error(r(519));
  function On(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $i(Xt(t, e)), gu;
  }
  function Bd(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[ct] = e, t[wt] = l, a) {
      case "dialog":
        we("cancel", t), we("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        we("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < dl.length; a++)
          we(dl[a], t);
        break;
      case "source":
        we("error", t);
        break;
      case "img":
      case "image":
      case "link":
        we("error", t), we("load", t);
        break;
      case "details":
        we("toggle", t);
        break;
      case "input":
        we("invalid", t), Fc(
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
        we("invalid", t);
        break;
      case "textarea":
        we("invalid", t), ed(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || ap(t.textContent, a) ? (l.popover != null && (we("beforetoggle", t), we("toggle", t)), l.onScroll != null && we("scroll", t), l.onScrollEnd != null && we("scrollend", t), l.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || On(e, !0);
  }
  function Hd(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
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
          dt = dt.return;
      }
  }
  function Ja(e) {
    if (e !== dt) return !1;
    if (!Ee) return Hd(e), Ee = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Zs(e.type, e.memoizedProps)), a = !a), a && Le && On(e), Hd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Le = fp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Le = fp(e);
    } else
      t === 27 ? (t = Le, Vn(e.type) ? (e = Xs, Xs = null, Le = e) : Le = t) : Le = dt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ma() {
    Le = dt = null, Ee = !1;
  }
  function _u() {
    var e = jn;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), jn = null), e;
  }
  function $i(e) {
    jn === null ? jn = [e] : jn.push(e);
  }
  var bu = w(null), pa = null, mn = null;
  function Cn(e, t, a) {
    P(bu, t._currentValue), t._currentValue = a;
  }
  function pn(e) {
    e._currentValue = bu.current, N(bu);
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
          for (var S = 0; S < t.length; S++)
            if (y.context === t[S]) {
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
          jt(u.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (u === be.current) {
        if (p = u.alternate, p === null) throw Error(r(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(vl) : e = [vl]);
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
  function mo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!jt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ha(e) {
    pa = e, mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return Xd(pa, e);
  }
  function po(e, t) {
    return pa === null && ha(e), Xd(e, t);
  }
  function Xd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, mn === null) {
      if (e === null) throw Error(r(308));
      mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else mn = mn.next = t;
    return a;
  }
  var Gy = typeof AbortController < "u" ? AbortController : function() {
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
  }, Qy = n.unstable_scheduleCallback, Ky = n.unstable_NormalPriority, nt = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zu() {
    return {
      controller: new Gy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Li(e) {
    e.refCount--, e.refCount === 0 && Qy(Ky, function() {
      e.controller.abort();
    });
  }
  var Vi = null, xu = 0, Wa = 0, Fa = null;
  function Jy(e, t) {
    if (Vi === null) {
      var a = Vi = [];
      xu = 0, Wa = Es(), Fa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return xu++, t.then(qd, qd), t;
  }
  function qd() {
    if (--xu === 0 && Vi !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var e = Vi;
      Vi = null, Wa = 0, Fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Py(e, t) {
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
  var $d = E.S;
  E.S = function(e, t) {
    Em = gt(), typeof t == "object" && t !== null && typeof t.then == "function" && Jy(e, t), $d !== null && $d(e, t);
  };
  var va = w(null);
  function ku() {
    var e = va.current;
    return e !== null ? e : qe.pooledCache;
  }
  function ho(e, t) {
    t === null ? P(va, va.current) : P(va, t.pool);
  }
  function Ld() {
    var e = ku();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Ia = Error(r(460)), Tu = Error(r(474)), vo = Error(r(542)), yo = { then: function() {
  } };
  function Vd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Gd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(sn, sn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Kd(e), e;
      default:
        if (typeof t.status == "string") t.then(sn, sn);
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
            throw e = t.reason, Kd(e), e;
        }
        throw ga = t, Ia;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, Ia) : a;
    }
  }
  var ga = null;
  function Qd() {
    if (ga === null) throw Error(r(459));
    var e = ga;
    return ga = null, e;
  }
  function Kd(e) {
    if (e === Ia || e === vo)
      throw Error(r(483));
  }
  var ei = null, Gi = 0;
  function go(e) {
    var t = Gi;
    return Gi += 1, ei === null && (ei = []), Gd(ei, e, t);
  }
  function Qi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function _o(e, t) {
    throw t.$$typeof === x ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Jd(e) {
    function t(k, z) {
      if (e) {
        var A = k.deletions;
        A === null ? (k.deletions = [z], k.flags |= 16) : A.push(z);
      }
    }
    function a(k, z) {
      if (!e) return null;
      for (; z !== null; )
        t(k, z), z = z.sibling;
      return null;
    }
    function l(k) {
      for (var z = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? z.set(k.key, k) : z.set(k.index, k), k = k.sibling;
      return z;
    }
    function u(k, z) {
      return k = dn(k, z), k.index = 0, k.sibling = null, k;
    }
    function c(k, z, A) {
      return k.index = A, e ? (A = k.alternate, A !== null ? (A = A.index, A < z ? (k.flags |= 67108866, z) : A) : (k.flags |= 67108866, z)) : (k.flags |= 1048576, z);
    }
    function p(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function y(k, z, A, R) {
      return z === null || z.tag !== 6 ? (z = pu(A, k.mode, R), z.return = k, z) : (z = u(z, A), z.return = k, z);
    }
    function S(k, z, A, R) {
      var ce = A.type;
      return ce === Q ? D(
        k,
        z,
        A.props.children,
        R,
        A.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && ya(ce) === z.type) ? (z = u(z, A.props), Qi(z, A), z.return = k, z) : (z = co(
        A.type,
        A.key,
        A.props,
        null,
        k.mode,
        R
      ), Qi(z, A), z.return = k, z);
    }
    function M(k, z, A, R) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== A.containerInfo || z.stateNode.implementation !== A.implementation ? (z = hu(A, k.mode, R), z.return = k, z) : (z = u(z, A.children || []), z.return = k, z);
    }
    function D(k, z, A, R, ce) {
      return z === null || z.tag !== 7 ? (z = fa(
        A,
        k.mode,
        R,
        ce
      ), z.return = k, z) : (z = u(z, A), z.return = k, z);
    }
    function U(k, z, A) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = pu(
          "" + z,
          k.mode,
          A
        ), z.return = k, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return A = co(
              z.type,
              z.key,
              z.props,
              null,
              k.mode,
              A
            ), Qi(A, z), A.return = k, A;
          case j:
            return z = hu(
              z,
              k.mode,
              A
            ), z.return = k, z;
          case V:
            return z = ya(z), U(k, z, A);
        }
        if (ne(z) || fe(z))
          return z = fa(
            z,
            k.mode,
            A,
            null
          ), z.return = k, z;
        if (typeof z.then == "function")
          return U(k, go(z), A);
        if (z.$$typeof === L)
          return U(
            k,
            po(k, z),
            A
          );
        _o(k, z);
      }
      return null;
    }
    function O(k, z, A, R) {
      var ce = z !== null ? z.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return ce !== null ? null : y(k, z, "" + A, R);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            return A.key === ce ? S(k, z, A, R) : null;
          case j:
            return A.key === ce ? M(k, z, A, R) : null;
          case V:
            return A = ya(A), O(k, z, A, R);
        }
        if (ne(A) || fe(A))
          return ce !== null ? null : D(k, z, A, R, null);
        if (typeof A.then == "function")
          return O(
            k,
            z,
            go(A),
            R
          );
        if (A.$$typeof === L)
          return O(
            k,
            z,
            po(k, A),
            R
          );
        _o(k, A);
      }
      return null;
    }
    function C(k, z, A, R, ce) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return k = k.get(A) || null, y(z, k, "" + R, ce);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case T:
            return k = k.get(
              R.key === null ? A : R.key
            ) || null, S(z, k, R, ce);
          case j:
            return k = k.get(
              R.key === null ? A : R.key
            ) || null, M(z, k, R, ce);
          case V:
            return R = ya(R), C(
              k,
              z,
              A,
              R,
              ce
            );
        }
        if (ne(R) || fe(R))
          return k = k.get(A) || null, D(z, k, R, ce, null);
        if (typeof R.then == "function")
          return C(
            k,
            z,
            A,
            go(R),
            ce
          );
        if (R.$$typeof === L)
          return C(
            k,
            z,
            A,
            po(z, R),
            ce
          );
        _o(z, R);
      }
      return null;
    }
    function ie(k, z, A, R) {
      for (var ce = null, je = null, oe = z, _e = z = 0, Te = null; oe !== null && _e < A.length; _e++) {
        oe.index > _e ? (Te = oe, oe = null) : Te = oe.sibling;
        var Oe = O(
          k,
          oe,
          A[_e],
          R
        );
        if (Oe === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Oe.alternate === null && t(k, oe), z = c(Oe, z, _e), je === null ? ce = Oe : je.sibling = Oe, je = Oe, oe = Te;
      }
      if (_e === A.length)
        return a(k, oe), Ee && fn(k, _e), ce;
      if (oe === null) {
        for (; _e < A.length; _e++)
          oe = U(k, A[_e], R), oe !== null && (z = c(
            oe,
            z,
            _e
          ), je === null ? ce = oe : je.sibling = oe, je = oe);
        return Ee && fn(k, _e), ce;
      }
      for (oe = l(oe); _e < A.length; _e++)
        Te = C(
          oe,
          k,
          _e,
          A[_e],
          R
        ), Te !== null && (e && Te.alternate !== null && oe.delete(
          Te.key === null ? _e : Te.key
        ), z = c(
          Te,
          z,
          _e
        ), je === null ? ce = Te : je.sibling = Te, je = Te);
      return e && oe.forEach(function(Pn) {
        return t(k, Pn);
      }), Ee && fn(k, _e), ce;
    }
    function me(k, z, A, R) {
      if (A == null) throw Error(r(151));
      for (var ce = null, je = null, oe = z, _e = z = 0, Te = null, Oe = A.next(); oe !== null && !Oe.done; _e++, Oe = A.next()) {
        oe.index > _e ? (Te = oe, oe = null) : Te = oe.sibling;
        var Pn = O(k, oe, Oe.value, R);
        if (Pn === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Pn.alternate === null && t(k, oe), z = c(Pn, z, _e), je === null ? ce = Pn : je.sibling = Pn, je = Pn, oe = Te;
      }
      if (Oe.done)
        return a(k, oe), Ee && fn(k, _e), ce;
      if (oe === null) {
        for (; !Oe.done; _e++, Oe = A.next())
          Oe = U(k, Oe.value, R), Oe !== null && (z = c(Oe, z, _e), je === null ? ce = Oe : je.sibling = Oe, je = Oe);
        return Ee && fn(k, _e), ce;
      }
      for (oe = l(oe); !Oe.done; _e++, Oe = A.next())
        Oe = C(oe, k, _e, Oe.value, R), Oe !== null && (e && Oe.alternate !== null && oe.delete(Oe.key === null ? _e : Oe.key), z = c(Oe, z, _e), je === null ? ce = Oe : je.sibling = Oe, je = Oe);
      return e && oe.forEach(function(r_) {
        return t(k, r_);
      }), Ee && fn(k, _e), ce;
    }
    function He(k, z, A, R) {
      if (typeof A == "object" && A !== null && A.type === Q && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            e: {
              for (var ce = A.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = A.type, ce === Q) {
                    if (z.tag === 7) {
                      a(
                        k,
                        z.sibling
                      ), R = u(
                        z,
                        A.props.children
                      ), R.return = k, k = R;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && ya(ce) === z.type) {
                    a(
                      k,
                      z.sibling
                    ), R = u(z, A.props), Qi(R, A), R.return = k, k = R;
                    break e;
                  }
                  a(k, z);
                  break;
                } else t(k, z);
                z = z.sibling;
              }
              A.type === Q ? (R = fa(
                A.props.children,
                k.mode,
                R,
                A.key
              ), R.return = k, k = R) : (R = co(
                A.type,
                A.key,
                A.props,
                null,
                k.mode,
                R
              ), Qi(R, A), R.return = k, k = R);
            }
            return p(k);
          case j:
            e: {
              for (ce = A.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === A.containerInfo && z.stateNode.implementation === A.implementation) {
                    a(
                      k,
                      z.sibling
                    ), R = u(z, A.children || []), R.return = k, k = R;
                    break e;
                  } else {
                    a(k, z);
                    break;
                  }
                else t(k, z);
                z = z.sibling;
              }
              R = hu(A, k.mode, R), R.return = k, k = R;
            }
            return p(k);
          case V:
            return A = ya(A), He(
              k,
              z,
              A,
              R
            );
        }
        if (ne(A))
          return ie(
            k,
            z,
            A,
            R
          );
        if (fe(A)) {
          if (ce = fe(A), typeof ce != "function") throw Error(r(150));
          return A = ce.call(A), me(
            k,
            z,
            A,
            R
          );
        }
        if (typeof A.then == "function")
          return He(
            k,
            z,
            go(A),
            R
          );
        if (A.$$typeof === L)
          return He(
            k,
            z,
            po(k, A),
            R
          );
        _o(k, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, z !== null && z.tag === 6 ? (a(k, z.sibling), R = u(z, A), R.return = k, k = R) : (a(k, z), R = pu(A, k.mode, R), R.return = k, k = R), p(k)) : a(k, z);
    }
    return function(k, z, A, R) {
      try {
        Gi = 0;
        var ce = He(
          k,
          z,
          A,
          R
        );
        return ei = null, ce;
      } catch (oe) {
        if (oe === Ia || oe === vo) throw oe;
        var je = Ot(29, oe, null, k.mode);
        return je.lanes = R, je.return = k, je;
      }
    };
  }
  var _a = Jd(!0), Pd = Jd(!1), Nn = !1;
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
  function Dn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (De & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = so(e), Nd(e, null, a), t;
    }
    return uo(e, l, t, a), so(e);
  }
  function Ki(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Xc(e, a);
    }
  }
  function Mu(e, t) {
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
  var ju = !1;
  function Ji() {
    if (ju) {
      var e = Fa;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, a, l) {
    ju = !1;
    var u = e.updateQueue;
    Nn = !1;
    var c = u.firstBaseUpdate, p = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var S = y, M = S.next;
      S.next = null, p === null ? c = M : p.next = M, p = S;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, y = D.lastBaseUpdate, y !== p && (y === null ? D.firstBaseUpdate = M : y.next = M, D.lastBaseUpdate = S));
    }
    if (c !== null) {
      var U = u.baseState;
      p = 0, D = M = S = null, y = c;
      do {
        var O = y.lane & -536870913, C = O !== y.lane;
        if (C ? (ke & O) === O : (l & O) === O) {
          O !== 0 && O === Wa && (ju = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var ie = e, me = y;
            O = t;
            var He = a;
            switch (me.tag) {
              case 1:
                if (ie = me.payload, typeof ie == "function") {
                  U = ie.call(He, U, O);
                  break e;
                }
                U = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = me.payload, O = typeof ie == "function" ? ie.call(He, U, O) : ie, O == null) break e;
                U = b({}, U, O);
                break e;
              case 2:
                Nn = !0;
            }
          }
          O = y.callback, O !== null && (e.flags |= 64, C && (e.flags |= 8192), C = u.callbacks, C === null ? u.callbacks = [O] : C.push(O));
        } else
          C = {
            lane: O,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, D === null ? (M = D = C, S = U) : D = D.next = C, p |= O;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          C = y, y = C.next, C.next = null, u.lastBaseUpdate = C, u.shared.pending = null;
        }
      } while (!0);
      D === null && (S = U), u.baseState = S, u.firstBaseUpdate = M, u.lastBaseUpdate = D, c === null && (u.shared.lanes = 0), Hn |= p, e.lanes = p, e.memoizedState = U;
    }
  }
  function Wd(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Fd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Wd(a[e], t);
  }
  var ti = w(null), bo = w(0);
  function Id(e, t) {
    e = zn, P(bo, e), P(ti, t), zn = e | t.baseLanes;
  }
  function Ou() {
    P(bo, zn), P(ti, ti.current);
  }
  function Cu() {
    zn = bo.current, N(ti), N(bo);
  }
  var Ct = w(null), Vt = null;
  function Zn(e) {
    var t = e.alternate;
    P(et, et.current & 1), P(Ct, e), Vt === null && (t === null || ti.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function Nu(e) {
    P(et, et.current), P(Ct, e), Vt === null && (Vt = e);
  }
  function ef(e) {
    e.tag === 22 ? (P(et, et.current), P(Ct, e), Vt === null && (Vt = e)) : Un();
  }
  function Un() {
    P(et, et.current), P(Ct, Ct.current);
  }
  function Nt(e) {
    N(Ct), Vt === e && (Vt = null), N(et);
  }
  var et = w(0);
  function So(e) {
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
  var hn = 0, ge = null, Ye = null, at = null, wo = !1, ni = !1, ba = !1, zo = 0, Wi = 0, ai = null, Wy = 0;
  function Pe() {
    throw Error(r(321));
  }
  function Du(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!jt(e[a], t[a])) return !1;
    return !0;
  }
  function Ru(e, t, a, l, u, c) {
    return hn = c, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? Yf : Pu, ba = !1, c = a(l, u), ba = !1, ni && (c = nf(
      t,
      a,
      l,
      u
    )), tf(e), c;
  }
  function tf(e) {
    E.H = el;
    var t = Ye !== null && Ye.next !== null;
    if (hn = 0, at = Ye = ge = null, wo = !1, Wi = 0, ai = null, t) throw Error(r(300));
    e === null || it || (e = e.dependencies, e !== null && mo(e) && (it = !0));
  }
  function nf(e, t, a, l) {
    ge = e;
    var u = 0;
    do {
      if (ni && (ai = null), Wi = 0, ni = !1, 25 <= u) throw Error(r(301));
      if (u += 1, at = Ye = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      E.H = Bf, c = t(a, l);
    } while (ni);
    return c;
  }
  function Fy() {
    var e = E.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fi(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function Zu() {
    var e = zo !== 0;
    return zo = 0, e;
  }
  function Uu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Yu(e) {
    if (wo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wo = !1;
    }
    hn = 0, at = Ye = ge = null, ni = !1, Wi = zo = 0, ai = null;
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? ge.memoizedState = at = e : at = at.next = e, at;
  }
  function tt() {
    if (Ye === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = at === null ? ge.memoizedState : at.next;
    if (t !== null)
      at = t, Ye = e;
    else {
      if (e === null)
        throw ge.alternate === null ? Error(r(467)) : Error(r(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, at === null ? ge.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function xo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fi(e) {
    var t = Wi;
    return Wi += 1, ai === null && (ai = []), e = Gd(ai, e, t), t = ge, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? Yf : Pu), e;
  }
  function ko(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fi(e);
      if (e.$$typeof === L) return ft(e);
    }
    throw Error(r(438, String(e)));
  }
  function Bu(e) {
    var t = null, a = ge.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ge.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = xo(), ge.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = re;
    return t.index++, a;
  }
  function vn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function To(e) {
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
      var y = p = null, S = null, M = t, D = !1;
      do {
        var U = M.lane & -536870913;
        if (U !== M.lane ? (ke & U) === U : (hn & U) === U) {
          var O = M.revertLane;
          if (O === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), U === Wa && (D = !0);
          else if ((hn & O) === O) {
            M = M.next, O === Wa && (D = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, S === null ? (y = S = U, p = c) : S = S.next = U, ge.lanes |= O, Hn |= O;
          U = M.action, ba && a(c, U), c = M.hasEagerState ? M.eagerState : a(c, U);
        } else
          O = {
            lane: U,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, S === null ? (y = S = O, p = c) : S = S.next = O, ge.lanes |= U, Hn |= U;
        M = M.next;
      } while (M !== null && M !== t);
      if (S === null ? p = c : S.next = y, !jt(c, e.memoizedState) && (it = !0, D && (a = Fa, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = S, l.lastRenderedState = c;
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
      jt(c, t.memoizedState) || (it = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, l];
  }
  function af(e, t, a) {
    var l = ge, u = tt(), c = Ee;
    if (c) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var p = !jt(
      (Ye || u).memoizedState,
      a
    );
    if (p && (u.memoizedState = a, it = !0), u = u.queue, Lu(rf.bind(null, l, u, e), [
      e
    ]), u.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        of.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), qe === null) throw Error(r(349));
      c || (hn & 127) !== 0 || lf(l, t, a);
    }
    return a;
  }
  function lf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ge.updateQueue, t === null ? (t = xo(), ge.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function of(e, t, a, l) {
    t.value = a, t.getSnapshot = l, uf(t) && sf(e);
  }
  function rf(e, t, a) {
    return a(function() {
      uf(t) && sf(e);
    });
  }
  function uf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !jt(e, a);
    } catch {
      return !0;
    }
  }
  function sf(e) {
    var t = da(e, 2);
    t !== null && At(t, e, 2);
  }
  function qu(e) {
    var t = _t();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        ue(!0);
        try {
          a();
        } finally {
          ue(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vn,
      lastRenderedState: e
    }, t;
  }
  function cf(e, t, a, l) {
    return e.baseState = a, Hu(
      e,
      Ye,
      typeof l == "function" ? l : vn
    );
  }
  function Iy(e, t, a, l, u) {
    if (Mo(e)) throw Error(r(485));
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
      E.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, df(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function df(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var c = E.T, p = {};
      E.T = p;
      try {
        var y = a(u, l), S = E.S;
        S !== null && S(p, y), ff(e, t, y);
      } catch (M) {
        $u(e, t, M);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), E.T = c;
      }
    } else
      try {
        c = a(u, l), ff(e, t, c);
      } catch (M) {
        $u(e, t, M);
      }
  }
  function ff(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        mf(e, t, l);
      },
      function(l) {
        return $u(e, t, l);
      }
    ) : mf(e, t, a);
  }
  function mf(e, t, a) {
    t.status = "fulfilled", t.value = a, pf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, df(e, a)));
  }
  function $u(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, pf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function pf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hf(e, t) {
    return t;
  }
  function vf(e, t) {
    if (Ee) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var l = ge;
          if (Ee) {
            if (Le) {
              t: {
                for (var u = Le, c = Lt; u.nodeType !== 8; ) {
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
                Le = Gt(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            On(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = _t(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hf,
      lastRenderedState: t
    }, a.queue = l, a = Rf.bind(
      null,
      ge,
      l
    ), l.dispatch = a, l = qu(!1), c = Ju.bind(
      null,
      ge,
      !1,
      l.queue
    ), l = _t(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = Iy.bind(
      null,
      ge,
      u,
      c,
      a
    ), u.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function yf(e) {
    var t = tt();
    return gf(t, Ye, e);
  }
  function gf(e, t, a) {
    if (t = Hu(
      e,
      t,
      hf
    )[0], e = To(vn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Fi(t);
      } catch (p) {
        throw p === Ia ? vo : p;
      }
    else l = t;
    t = tt();
    var u = t.queue, c = u.dispatch;
    return a !== t.memoizedState && (ge.flags |= 2048, ii(
      9,
      { destroy: void 0 },
      eg.bind(null, u, a),
      null
    )), [l, c, e];
  }
  function eg(e, t) {
    e.action = t;
  }
  function _f(e) {
    var t = tt(), a = Ye;
    if (a !== null)
      return gf(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ii(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ge.updateQueue, t === null && (t = xo(), ge.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function bf() {
    return tt().memoizedState;
  }
  function Eo(e, t, a, l) {
    var u = _t();
    ge.flags |= e, u.memoizedState = ii(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function Ao(e, t, a, l) {
    var u = tt();
    l = l === void 0 ? null : l;
    var c = u.memoizedState.inst;
    Ye !== null && l !== null && Du(l, Ye.memoizedState.deps) ? u.memoizedState = ii(t, c, a, l) : (ge.flags |= e, u.memoizedState = ii(
      1 | t,
      c,
      a,
      l
    ));
  }
  function Sf(e, t) {
    Eo(8390656, 8, e, t);
  }
  function Lu(e, t) {
    Ao(2048, 8, e, t);
  }
  function tg(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = xo(), ge.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function wf(e) {
    var t = tt().memoizedState;
    return tg({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function zf(e, t) {
    return Ao(4, 2, e, t);
  }
  function xf(e, t) {
    return Ao(4, 4, e, t);
  }
  function kf(e, t) {
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
  function Tf(e, t, a) {
    a = a != null ? a.concat([e]) : null, Ao(4, 4, kf.bind(null, t, e), a);
  }
  function Vu() {
  }
  function Ef(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Du(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Af(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Du(t, l[1]))
      return l[0];
    if (l = e(), ba) {
      ue(!0);
      try {
        e();
      } finally {
        ue(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Gu(e, t, a) {
    return a === void 0 || (hn & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Mm(), ge.lanes |= e, Hn |= e, a);
  }
  function Mf(e, t, a, l) {
    return jt(a, t) ? a : ti.current !== null ? (e = Gu(e, a, l), jt(e, t) || (it = !0), e) : (hn & 42) === 0 || (hn & 1073741824) !== 0 && (ke & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = Mm(), ge.lanes |= e, Hn |= e, t);
  }
  function jf(e, t, a, l, u) {
    var c = X.p;
    X.p = c !== 0 && 8 > c ? c : 8;
    var p = E.T, y = {};
    E.T = y, Ju(e, !1, t, a);
    try {
      var S = u(), M = E.S;
      if (M !== null && M(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var D = Py(
          S,
          l
        );
        Ii(
          e,
          t,
          D,
          Zt(e)
        );
      } else
        Ii(
          e,
          t,
          l,
          Zt(e)
        );
    } catch (U) {
      Ii(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        Zt()
      );
    } finally {
      X.p = c, p !== null && y.types !== null && (p.types = y.types), E.T = p;
    }
  }
  function ng() {
  }
  function Qu(e, t, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Of(e).queue;
    jf(
      e,
      u,
      t,
      F,
      a === null ? ng : function() {
        return Cf(e), a(l);
      }
    );
  }
  function Of(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: F
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
        lastRenderedReducer: vn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Cf(e) {
    var t = Of(e);
    t.next === null && (t = e.alternate.memoizedState), Ii(
      e,
      t.next.queue,
      {},
      Zt()
    );
  }
  function Ku() {
    return ft(vl);
  }
  function Nf() {
    return tt().memoizedState;
  }
  function Df() {
    return tt().memoizedState;
  }
  function ag(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Zt();
          e = Dn(a);
          var l = Rn(t, e, a);
          l !== null && (At(l, t, a), Ki(l, t, a)), t = { cache: zu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ig(e, t, a) {
    var l = Zt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mo(e) ? Zf(t, a) : (a = fu(e, t, a, l), a !== null && (At(a, e, l), Uf(a, t, l)));
  }
  function Rf(e, t, a) {
    var l = Zt();
    Ii(e, t, a, l);
  }
  function Ii(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Mo(e)) Zf(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (u.hasEagerState = !0, u.eagerState = y, jt(y, p))
            return uo(e, t, u, 0), qe === null && ro(), !1;
        } catch {
        }
      if (a = fu(e, t, u, l), a !== null)
        return At(a, e, l), Uf(a, t, l), !0;
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
    }, Mo(e)) {
      if (t) throw Error(r(479));
    } else
      t = fu(
        e,
        a,
        l,
        2
      ), t !== null && At(t, e, 2);
  }
  function Mo(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function Zf(e, t) {
    ni = wo = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Uf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Xc(e, a);
    }
  }
  var el = {
    readContext: ft,
    use: ko,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useLayoutEffect: Pe,
    useInsertionEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    useHostTransitionStatus: Pe,
    useFormState: Pe,
    useActionState: Pe,
    useOptimistic: Pe,
    useMemoCache: Pe,
    useCacheRefresh: Pe
  };
  el.useEffectEvent = Pe;
  var Yf = {
    readContext: ft,
    use: ko,
    useCallback: function(e, t) {
      return _t().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: Sf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Eo(
        4194308,
        4,
        kf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Eo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Eo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = _t();
      t = t === void 0 ? null : t;
      var l = e();
      if (ba) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = _t();
      if (a !== void 0) {
        var u = a(t);
        if (ba) {
          ue(!0);
          try {
            a(t);
          } finally {
            ue(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = ig.bind(
        null,
        ge,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = _t();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = qu(e);
      var t = e.queue, a = Rf.bind(null, ge, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = _t();
      return Gu(a, e, t);
    },
    useTransition: function() {
      var e = qu(!1);
      return e = jf.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), _t().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = ge, u = _t();
      if (Ee) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), qe === null)
          throw Error(r(349));
        (ke & 127) !== 0 || lf(l, t, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return u.queue = c, Sf(rf.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        of.bind(
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
      var e = _t(), t = qe.identifierPrefix;
      if (Ee) {
        var a = an, l = nn;
        a = (l & ~(1 << 32 - ee(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = zo++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Wy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ku,
    useFormState: vf,
    useActionState: vf,
    useOptimistic: function(e) {
      var t = _t();
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
        ge,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Bu,
    useCacheRefresh: function() {
      return _t().memoizedState = ag.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = _t(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((De & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Pu = {
    readContext: ft,
    use: ko,
    useCallback: Ef,
    useContext: ft,
    useEffect: Lu,
    useImperativeHandle: Tf,
    useInsertionEffect: zf,
    useLayoutEffect: xf,
    useMemo: Af,
    useReducer: To,
    useRef: bf,
    useState: function() {
      return To(vn);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Mf(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = To(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    },
    useSyncExternalStore: af,
    useId: Nf,
    useHostTransitionStatus: Ku,
    useFormState: yf,
    useActionState: yf,
    useOptimistic: function(e, t) {
      var a = tt();
      return cf(a, Ye, e, t);
    },
    useMemoCache: Bu,
    useCacheRefresh: Df
  };
  Pu.useEffectEvent = wf;
  var Bf = {
    readContext: ft,
    use: ko,
    useCallback: Ef,
    useContext: ft,
    useEffect: Lu,
    useImperativeHandle: Tf,
    useInsertionEffect: zf,
    useLayoutEffect: xf,
    useMemo: Af,
    useReducer: Xu,
    useRef: bf,
    useState: function() {
      return Xu(vn);
    },
    useDebugValue: Vu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Ye === null ? Gu(a, e, t) : Mf(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    },
    useSyncExternalStore: af,
    useId: Nf,
    useHostTransitionStatus: Ku,
    useFormState: _f,
    useActionState: _f,
    useOptimistic: function(e, t) {
      var a = tt();
      return Ye !== null ? cf(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Bu,
    useCacheRefresh: Df
  };
  Bf.useEffectEvent = wf;
  function Wu(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : b({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Fu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Zt(), u = Dn(l);
      u.payload = t, a != null && (u.callback = a), t = Rn(e, u, l), t !== null && (At(t, e, l), Ki(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Zt(), u = Dn(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Rn(e, u, l), t !== null && (At(t, e, l), Ki(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Zt(), l = Dn(a);
      l.tag = 2, t != null && (l.callback = t), t = Rn(e, l, a), t !== null && (At(t, e, a), Ki(t, e, a));
    }
  };
  function Hf(e, t, a, l, u, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Hi(a, l) || !Hi(u, c) : !0;
  }
  function Xf(e, t, a, l) {
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
      a === t && (a = b({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function qf(e) {
    oo(e);
  }
  function $f(e) {
    console.error(e);
  }
  function Lf(e) {
    oo(e);
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
  function Vf(e, t, a) {
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
    return a = Dn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      jo(e, t);
    }, a;
  }
  function Gf(e) {
    return e = Dn(e), e.tag = 3, e;
  }
  function Qf(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = l.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        Vf(t, a, l);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Vf(t, a, l), typeof u != "function" && (Xn === null ? Xn = /* @__PURE__ */ new Set([this]) : Xn.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function lg(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Pa(
        t,
        a,
        u,
        !0
      ), a = Ct.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? qo() : a.alternate === null && We === 0 && (We = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === yo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), xs(e, l, u)), !1;
          case 22:
            return a.flags |= 65536, l === yo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), xs(e, l, u)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return xs(e, l, u), qo(), !1;
    }
    if (Ee)
      return t = Ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== gu && (e = Error(r(422), { cause: l }), $i(Xt(e, a)))) : (l !== gu && (t = Error(r(423), {
        cause: l
      }), $i(
        Xt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Xt(l, a), u = Iu(
        e.stateNode,
        l,
        u
      ), Mu(e, u), We !== 4 && (We = 2)), !1;
    var c = Error(r(520), { cause: l });
    if (c = Xt(c, a), ul === null ? ul = [c] : ul.push(c), We !== 4 && (We = 2), t === null) return !0;
    l = Xt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Iu(a.stateNode, l, e), Mu(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Xn === null || !Xn.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Gf(u), Qf(
              u,
              e,
              a,
              l
            ), Mu(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var es = Error(r(461)), it = !1;
  function mt(e, t, a, l) {
    t.child = e === null ? Pd(t, null, a, l) : _a(
      t,
      e.child,
      a,
      l
    );
  }
  function Kf(e, t, a, l, u) {
    a = a.render;
    var c = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var y in l)
        y !== "ref" && (p[y] = l[y]);
    } else p = l;
    return ha(t), l = Ru(
      e,
      t,
      a,
      p,
      c,
      u
    ), y = Zu(), e !== null && !it ? (Uu(e, t, u), yn(e, t, u)) : (Ee && y && vu(t), t.flags |= 1, mt(e, t, l, u), t.child);
  }
  function Jf(e, t, a, l, u) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !mu(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Pf(
        e,
        t,
        c,
        l,
        u
      )) : (e = co(
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
      if (a = a.compare, a = a !== null ? a : Hi, a(p, l) && e.ref === t.ref)
        return yn(e, t, u);
    }
    return t.flags |= 1, e = dn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pf(e, t, a, l, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Hi(c, l) && e.ref === t.ref)
        if (it = !1, t.pendingProps = l = c, us(e, u))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, yn(e, t, u);
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
        return Ff(
          e,
          t,
          c,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ho(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Id(t, c) : Ou(), ef(t);
      else
        return l = t.lanes = 536870912, Ff(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          l
        );
    } else
      c !== null ? (ho(t, c.cachePool), Id(t, c), Un(), t.memoizedState = null) : (e !== null && ho(t, null), Ou(), Un());
    return mt(e, t, u, a), t.child;
  }
  function tl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ff(e, t, a, l, u) {
    var c = ku();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && ho(t, null), Ou(), ef(t), e !== null && Pa(e, t, l, !0), t.childLanes = u, null;
  }
  function Oo(e, t) {
    return t = No(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function If(e, t, a) {
    return _a(t, e.child, null, a), e = Oo(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e;
  }
  function og(e, t, a) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ee) {
        if (l.mode === "hidden")
          return e = Oo(t, l), t.lanes = 536870912, tl(null, e);
        if (Nu(t), (e = Le) ? (e = dp(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Rd(e), a.return = t, t.child = a, dt = t, Le = null)) : e = null, e === null) throw On(t);
        return t.lanes = 536870912, null;
      }
      return Oo(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (Nu(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = If(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (it || Pa(e, t, a, !1), u = (a & e.childLanes) !== 0, it || u) {
        if (l = qe, l !== null && (p = qc(l, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, da(e, p), At(l, e, p), es;
        qo(), t = If(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, Le = Gt(p.nextSibling), dt = t, Ee = !0, jn = null, Lt = !1, e !== null && Yd(t, e), t = Oo(t, l), t.flags |= 4096;
      return t;
    }
    return e = dn(e.child, {
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
    return ha(t), a = Ru(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = Zu(), e !== null && !it ? (Uu(e, t, u), yn(e, t, u)) : (Ee && l && vu(t), t.flags |= 1, mt(e, t, a, u), t.child);
  }
  function em(e, t, a, l, u, c) {
    return ha(t), t.updateQueue = null, a = nf(
      t,
      l,
      a,
      u
    ), tf(e), l = Zu(), e !== null && !it ? (Uu(e, t, c), yn(e, t, c)) : (Ee && l && vu(t), t.flags |= 1, mt(e, t, a, c), t.child);
  }
  function tm(e, t, a, l, u) {
    if (ha(t), t.stateNode === null) {
      var c = Ga, p = a.contextType;
      typeof p == "object" && p !== null && (c = ft(p)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Fu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, Eu(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? ft(p) : Ga, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Wu(
        t,
        a,
        p,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Fu.enqueueReplaceState(c, c.state, null), Pi(t, l, c, u), Ji(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, S = Sa(a, y);
      c.props = S;
      var M = c.context, D = a.contextType;
      p = Ga, typeof D == "object" && D !== null && (p = ft(D));
      var U = a.getDerivedStateFromProps;
      D = typeof U == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, D || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || M !== p) && Xf(
        t,
        c,
        l,
        p
      ), Nn = !1;
      var O = t.memoizedState;
      c.state = O, Pi(t, l, c, u), Ji(), M = t.memoizedState, y || O !== M || Nn ? (typeof U == "function" && (Wu(
        t,
        a,
        U,
        l
      ), M = t.memoizedState), (S = Nn || Hf(
        t,
        a,
        S,
        l,
        O,
        M,
        p
      )) ? (D || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = M), c.props = l, c.state = M, c.context = p, l = S) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, Au(e, t), p = t.memoizedProps, D = Sa(a, p), c.props = D, U = t.pendingProps, O = c.context, M = a.contextType, S = Ga, typeof M == "object" && M !== null && (S = ft(M)), y = a.getDerivedStateFromProps, (M = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== U || O !== S) && Xf(
        t,
        c,
        l,
        S
      ), Nn = !1, O = t.memoizedState, c.state = O, Pi(t, l, c, u), Ji();
      var C = t.memoizedState;
      p !== U || O !== C || Nn || e !== null && e.dependencies !== null && mo(e.dependencies) ? (typeof y == "function" && (Wu(
        t,
        a,
        y,
        l
      ), C = t.memoizedState), (D = Nn || Hf(
        t,
        a,
        D,
        l,
        O,
        C,
        S
      ) || e !== null && e.dependencies !== null && mo(e.dependencies)) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, C, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        C,
        S
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), c.props = l, c.state = C, c.context = S, l = D) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), l = !1);
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
    )) : mt(e, t, a, u), t.memoizedState = c.state, e = t.child) : e = yn(
      e,
      t,
      u
    ), e;
  }
  function nm(e, t, a, l) {
    return ma(), t.flags |= 256, mt(e, t, a, l), t.child;
  }
  var ns = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function as(e) {
    return { baseLanes: e, cachePool: Ld() };
  }
  function is(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rt), e;
  }
  function am(e, t, a) {
    var l = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (u = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ee) {
        if (u ? Zn(t) : Un(), (e = Le) ? (e = dp(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Rd(e), a.return = t, t.child = a, dt = t, Le = null)) : e = null, e === null) throw On(t);
        return Hs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, u ? (Un(), u = t.mode, y = No(
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
      ), t.memoizedState = ns, tl(null, l)) : (Zn(t), ls(t, y));
    }
    var S = e.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Zn(t), t.flags &= -257, t = os(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Un(), t.child = e.child, t.flags |= 128, t = null) : (Un(), y = l.fallback, u = t.mode, l = No(
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
        ), t.memoizedState = ns, t = tl(null, l));
      else if (Zn(t), Hs(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var M = p.dgst;
        p = M, l = Error(r(419)), l.stack = "", l.digest = p, $i({ value: l, source: null, stack: null }), t = os(
          e,
          t,
          a
        );
      } else if (it || Pa(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = qe, p !== null && (l = qc(p, a), l !== 0 && l !== S.retryLane))
          throw S.retryLane = l, da(e, l), At(p, e, l), es;
        Bs(y) || qo(), t = os(
          e,
          t,
          a
        );
      } else
        Bs(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Le = Gt(
          y.nextSibling
        ), dt = t, Ee = !0, jn = null, Lt = !1, e !== null && Yd(t, e), t = ls(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Un(), y = l.fallback, u = t.mode, S = e.child, M = S.sibling, l = dn(S, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? y = dn(
      M,
      y
    ) : (y = fa(
      y,
      u,
      a,
      null
    ), y.flags |= 2), y.return = t, l.return = t, l.sibling = y, t.child = l, tl(null, l), l = t.child, y = e.child.memoizedState, y === null ? y = as(a) : (u = y.cachePool, u !== null ? (S = nt._currentValue, u = u.parent !== S ? { parent: S, pool: S } : u) : u = Ld(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: u
    }), l.memoizedState = y, l.childLanes = is(
      e,
      p,
      a
    ), t.memoizedState = ns, tl(e.child, l)) : (Zn(t), a = e.child, e = a.sibling, a = dn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ls(e, t) {
    return t = No(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function No(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function os(e, t, a) {
    return _a(t, e.child, null, a), e = ls(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function im(e, t, a) {
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
  function lm(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, c = l.tail;
    l = l.children;
    var p = et.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, P(et, p), mt(e, t, l, a), l = Ee ? qi : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && im(e, a, t);
        else if (e.tag === 19)
          im(e, a, t);
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
          e = a.alternate, e !== null && So(e) === null && (u = a), a = a.sibling;
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
          if (e = u.alternate, e !== null && So(e) === null) {
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
  function yn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Hn |= t.lanes, (a & t.childLanes) === 0)
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
      for (e = t.child, a = dn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = dn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function us(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && mo(e)));
  }
  function rg(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), Cn(t, nt, e.memoizedState.cache), ma();
        break;
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Cn(
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
          return l.dehydrated !== null ? (Zn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? am(e, t, a) : (Zn(t), e = yn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Zn(t);
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
            return lm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), P(et, et.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Cn(t, nt, e.memoizedState.cache);
    }
    return yn(e, t, a);
  }
  function om(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!us(e, a) && (t.flags & 128) === 0)
          return it = !1, rg(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Ee && (t.flags & 1048576) !== 0 && Ud(t, qi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            mu(e) ? (l = Sa(e, l), t.tag = 1, t = tm(
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
              if (u === G) {
                t.tag = 11, t = Kf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (u === B) {
                t.tag = 14, t = Jf(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = W(e) || e, Error(r(306, t, ""));
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
        ), tm(
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
          if (l = p.cache, Cn(t, nt, l), l !== c.cache && wu(
            t,
            [nt],
            a,
            !0
          ), Ji(), l = p.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = nm(
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
              ), $i(u), t = nm(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Gt(e.firstChild), dt = t, Ee = !0, jn = null, Lt = !0, a = Pd(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ma(), l === u) {
              t = yn(
                e,
                t,
                a
              );
              break e;
            }
            mt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Co(e, t), e === null ? (a = yp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ee || (a = t.type, e = t.pendingProps, l = Jo(
          ye.current
        ).createElement(a), l[ct] = t, l[wt] = e, pt(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = yp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Pt(t), e === null && Ee && (l = t.stateNode = pp(
          t.type,
          t.pendingProps,
          ye.current
        ), dt = t, Lt = !0, u = Le, Vn(t.type) ? (Xs = u, Le = Gt(l.firstChild)) : Le = u), mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Co(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ee && ((u = l = Le) && (l = Ug(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, dt = t, Le = Gt(l.firstChild), Lt = !1, u = !0) : u = !1), u || On(t)), Pt(t), u = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = c.children, Zs(u, c) ? l = null : p !== null && Zs(u, p) && (t.flags |= 32), t.memoizedState !== null && (u = Ru(
          e,
          t,
          Fy,
          null,
          null,
          a
        ), vl._currentValue = u), Co(e, t), mt(e, t, l, a), t.child;
      case 6:
        return e === null && Ee && ((e = a = Le) && (a = Yg(
          a,
          t.pendingProps,
          Lt
        ), a !== null ? (t.stateNode = a, dt = t, Le = null, e = !0) : e = !1), e || On(t)), null;
      case 13:
        return am(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = _a(
          t,
          null,
          l,
          a
        ) : mt(e, t, l, a), t.child;
      case 11:
        return Kf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Cn(t, t.type, l.value), mt(e, t, l.children, a), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, ha(t), u = ft(u), l = l(u), t.flags |= 1, mt(e, t, l, a), t.child;
      case 14:
        return Jf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Pf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return lm(e, t, a);
      case 31:
        return og(e, t, a);
      case 22:
        return Wf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ha(t), l = ft(nt), e === null ? (u = ku(), u === null && (u = qe, c = zu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), t.memoizedState = { parent: l, cache: u }, Eu(t), Cn(t, nt, u)) : ((e.lanes & a) !== 0 && (Au(e, t), Pi(t, null, null, a), Ji()), u = e.memoizedState, c = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Cn(t, nt, l)) : (l = c.cache, Cn(t, nt, l), l !== u.cache && wu(
          t,
          [nt],
          a,
          !0
        ))), mt(
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
  function gn(e) {
    e.flags |= 4;
  }
  function ss(e, t, a, l, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nm()) e.flags |= 8192;
        else
          throw ga = yo, Tu;
    } else e.flags &= -16777217;
  }
  function rm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !wp(t))
      if (Nm()) e.flags |= 8192;
      else
        throw ga = yo, Tu;
  }
  function Do(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Bc() : 536870912, e.lanes |= t, ui |= t);
  }
  function nl(e, t) {
    if (!Ee)
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
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function ug(e, t, a) {
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
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), pn(nt), $e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ja(t) ? gn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _u())), Ve(t), null;
      case 26:
        var u = t.type, c = t.memoizedState;
        return e === null ? (gn(t), c !== null ? (Ve(t), rm(t, c)) : (Ve(t), ss(
          t,
          u,
          null,
          l,
          a
        ))) : c ? c !== e.memoizedState ? (gn(t), Ve(t), rm(t, c)) : (Ve(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && gn(t), Ve(t), ss(
          t,
          u,
          e,
          l,
          a
        )), null;
      case 27:
        if (Ut(t), a = ye.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ve(t), null;
          }
          e = te.current, Ja(t) ? Bd(t) : (e = pp(u, l, a), t.stateNode = e, gn(t));
        }
        return Ve(t), null;
      case 5:
        if (Ut(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ve(t), null;
          }
          if (c = te.current, Ja(t))
            Bd(t);
          else {
            var p = Jo(
              ye.current
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
            c[ct] = t, c[wt] = l;
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
            e: switch (pt(c, u, l), u) {
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
            l && gn(t);
          }
        }
        return Ve(t), ss(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && gn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = ye.current, Ja(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = dt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[ct] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || ap(e.nodeValue, a)), e || On(t, !0);
          } else
            e = Jo(e).createTextNode(
              l
            ), e[ct] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ja(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ct] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), e = !1;
          } else
            a = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ve(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ja(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[ct] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), u = !1;
          } else
            u = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
        }
        return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== u && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Do(t, t.updateQueue), Ve(t), null);
      case 4:
        return $e(), e === null && Os(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return pn(t.type), Ve(t), null;
      case 19:
        if (N(et), l = t.memoizedState, l === null) return Ve(t), null;
        if (u = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (u) nl(l, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = So(e), c !== null) {
                  for (t.flags |= 128, nl(l, !1), e = c.updateQueue, t.updateQueue = e, Do(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Dd(a, e), a = a.sibling;
                  return P(
                    et,
                    et.current & 1 | 2
                  ), Ee && fn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && gt() > Bo && (t.flags |= 128, u = !0, nl(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = So(c), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Do(t, e), nl(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !Ee)
                return Ve(t), null;
            } else
              2 * gt() - l.renderingStartTime > Bo && a !== 536870912 && (t.flags |= 128, u = !0, nl(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = gt(), e.sibling = null, a = et.current, P(
          et,
          u ? a & 1 | 2 : a & 1
        ), Ee && fn(t, l.treeForkCount), e) : (Ve(t), null);
      case 22:
      case 23:
        return Nt(t), Cu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), a = t.updateQueue, a !== null && Do(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && N(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pn(nt), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function sg(e, t) {
    switch (yu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pn(nt), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ut(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Nt(t), t.alternate === null)
            throw Error(r(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(et), null;
      case 4:
        return $e(), null;
      case 10:
        return pn(t.type), null;
      case 22:
      case 23:
        return Nt(t), Cu(), e !== null && N(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function um(e, t) {
    switch (yu(t), t.tag) {
      case 3:
        pn(nt), $e();
        break;
      case 26:
      case 27:
      case 5:
        Ut(t);
        break;
      case 4:
        $e();
        break;
      case 31:
        t.memoizedState !== null && Nt(t);
        break;
      case 13:
        Nt(t);
        break;
      case 19:
        N(et);
        break;
      case 10:
        pn(t.type);
        break;
      case 22:
      case 23:
        Nt(t), Cu(), e !== null && N(va);
        break;
      case 24:
        pn(nt);
    }
  }
  function al(e, t) {
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
  function Yn(e, t, a) {
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
              var S = a, M = y;
              try {
                M();
              } catch (D) {
                Ue(
                  u,
                  S,
                  D
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (D) {
      Ue(t, t.return, D);
    }
  }
  function sm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Fd(t, a);
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
  }
  function cm(e, t, a) {
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
  function il(e, t) {
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
  function ln(e, t) {
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
  function dm(e) {
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
      Og(l, e.type, a, t), l[wt] = t;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function fm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4;
  }
  function ds(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = sn));
    else if (l !== 4 && (l === 27 && Vn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (fs(e, t, a), e = e.sibling; e !== null; )
        fs(e, t, a), e = e.sibling;
  }
  function Ro(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Vn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ro(e, t, a), e = e.sibling; e !== null; )
        Ro(e, t, a), e = e.sibling;
  }
  function mm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      pt(t, l, a), t[ct] = e, t[wt] = a;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var _n = !1, lt = !1, ms = !1, pm = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function cg(e, t) {
    if (e = e.containerInfo, Ds = nr, e = kd(e), ou(e)) {
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
            var p = 0, y = -1, S = -1, M = 0, D = 0, U = e, O = null;
            t: for (; ; ) {
              for (var C; U !== a || u !== 0 && U.nodeType !== 3 || (y = p + u), U !== c || l !== 0 && U.nodeType !== 3 || (S = p + l), U.nodeType === 3 && (p += U.nodeValue.length), (C = U.firstChild) !== null; )
                O = U, U = C;
              for (; ; ) {
                if (U === e) break t;
                if (O === a && ++M === u && (y = p), O === c && ++D === l && (S = p), (C = U.nextSibling) !== null) break;
                U = O, O = U.parentNode;
              }
              U = C;
            }
            a = y === -1 || S === -1 ? null : { start: y, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Rs = { focusedElem: e, selectionRange: a }, nr = !1, st = t; st !== null; )
      if (t = st, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, st = e;
      else
        for (; st !== null; ) {
          switch (t = st, c = t.alternate, e = t.flags, t.tag) {
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
                  var ie = Sa(
                    a.type,
                    u
                  );
                  e = l.getSnapshotBeforeUpdate(
                    ie,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  Ue(
                    a,
                    a.return,
                    me
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
            e.return = t.return, st = e;
            break;
          }
          st = t.return;
        }
  }
  function hm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Sn(e, a), l & 4 && al(5, a);
        break;
      case 1:
        if (Sn(e, a), l & 4)
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
        l & 64 && sm(a), l & 512 && il(a, a.return);
        break;
      case 3:
        if (Sn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            Fd(e, t);
          } catch (p) {
            Ue(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && mm(a);
      case 26:
      case 5:
        Sn(e, a), t === null && l & 4 && dm(a), l & 512 && il(a, a.return);
        break;
      case 12:
        Sn(e, a);
        break;
      case 31:
        Sn(e, a), l & 4 && gm(e, a);
        break;
      case 13:
        Sn(e, a), l & 4 && _m(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = _g.bind(
          null,
          a
        ), Bg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || _n, !l) {
          t = t !== null && t.memoizedState !== null || lt, u = _n;
          var c = lt;
          _n = l, (lt = t) && !c ? wn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Sn(e, a), _n = u, lt = c;
        }
        break;
      case 30:
        break;
      default:
        Sn(e, a);
    }
  }
  function vm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, vm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $r(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, xt = !1;
  function bn(e, t, a) {
    for (a = a.child; a !== null; )
      ym(e, t, a), a = a.sibling;
  }
  function ym(e, t, a) {
    if (H && typeof H.onCommitFiberUnmount == "function")
      try {
        H.onCommitFiberUnmount(la, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || ln(a, t), bn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || ln(a, t);
        var l = Qe, u = xt;
        Vn(a.type) && (Qe = a.stateNode, xt = !1), bn(
          e,
          t,
          a
        ), ml(a.stateNode), Qe = l, xt = u;
        break;
      case 5:
        lt || ln(a, t);
      case 6:
        if (l = Qe, u = xt, Qe = null, bn(
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
        Qe !== null && (xt ? (e = Qe, sp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), vi(e)) : sp(Qe, a.stateNode));
        break;
      case 4:
        l = Qe, u = xt, Qe = a.stateNode.containerInfo, xt = !0, bn(
          e,
          t,
          a
        ), Qe = l, xt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, a, t), lt || Yn(4, a, t), bn(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (ln(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && cm(
          a,
          t,
          l
        )), bn(
          e,
          t,
          a
        );
        break;
      case 21:
        bn(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, bn(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        bn(
          e,
          t,
          a
        );
    }
  }
  function gm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function _m(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
  }
  function dg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new pm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pm()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Zo(e, t) {
    var a = dg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var u = bg.bind(null, e, l);
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
              if (Vn(y.type)) {
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
        ym(c, p, u), Qe = null, xt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        bm(t, e), t = t.sibling;
  }
  var Ft = null;
  function bm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kt(t, e), Tt(e), l & 4 && (Yn(3, e, e.return), al(3, e), Yn(5, e, e.return));
        break;
      case 1:
        kt(t, e), Tt(e), l & 512 && (lt || a === null || ln(a, a.return)), l & 64 && _n && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = Ft;
        if (kt(t, e), Tt(e), l & 512 && (lt || a === null || ln(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Oi] || c[ct] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(l), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), pt(c, l, a), c[ct] = e, ut(c), l = c;
                      break e;
                    case "link":
                      var p = bp(
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
                      c = u.createElement(l), pt(c, l, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = bp(
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
                      c = u.createElement(l), pt(c, l, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  c[ct] = e, ut(c), l = c;
                }
                e.stateNode = l;
              } else
                Sp(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = _p(
                u,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? Sp(
              u,
              e.type,
              e.stateNode
            ) : _p(
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
        kt(t, e), Tt(e), l & 512 && (lt || a === null || ln(a, a.return)), a !== null && l & 4 && cs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (kt(t, e), Tt(e), l & 512 && (lt || a === null || ln(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ba(u, "");
          } catch (ie) {
            Ue(e, e.return, ie);
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
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (Fo = null, u = Ft, Ft = Po(t.containerInfo), kt(t, e), Ft = u, Tt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            vi(t.containerInfo);
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        ms && (ms = !1, Sm(e));
        break;
      case 4:
        l = Ft, Ft = Po(
          e.stateNode.containerInfo
        ), kt(t, e), Tt(e), Ft = l;
        break;
      case 12:
        kt(t, e), Tt(e);
        break;
      case 31:
        kt(t, e), Tt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Zo(e, l)));
        break;
      case 13:
        kt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Yo = gt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Zo(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, M = _n, D = lt;
        if (_n = M || u, lt = D || S, kt(t, e), lt = D, _n = M, Tt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || S || _n || lt || wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (c = S.stateNode, u)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = S.stateNode;
                    var U = S.memoizedProps.style, O = U != null && U.hasOwnProperty("display") ? U.display : null;
                    y.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (ie) {
                  Ue(S, S.return, ie);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (ie) {
                  Ue(S, S.return, ie);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                S = t;
                try {
                  var C = S.stateNode;
                  u ? cp(C, !0) : cp(S.stateNode, !1);
                } catch (ie) {
                  Ue(S, S.return, ie);
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
          if (fm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, c = ds(e);
            Ro(e, c, u);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ba(p, ""), a.flags &= -33);
            var y = ds(e);
            Ro(e, y, p);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, M = ds(e);
            fs(
              e,
              M,
              S
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (D) {
        Ue(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Sm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        hm(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, t, t.return), wa(t);
          break;
        case 1:
          ln(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && cm(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          ml(t.stateNode);
        case 26:
        case 5:
          ln(t, t.return), wa(t);
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
  function wn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            u,
            c,
            a
          ), al(4, c);
          break;
        case 1:
          if (wn(
            u,
            c,
            a
          ), l = c, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (M) {
              Ue(l, l.return, M);
            }
          if (l = c, u = l.updateQueue, u !== null) {
            var y = l.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  Wd(S[u], y);
            } catch (M) {
              Ue(l, l.return, M);
            }
          }
          a && p & 64 && sm(c), il(c, c.return);
          break;
        case 27:
          mm(c);
        case 26:
        case 5:
          wn(
            u,
            c,
            a
          ), a && l === null && p & 4 && dm(c), il(c, c.return);
          break;
        case 12:
          wn(
            u,
            c,
            a
          );
          break;
        case 31:
          wn(
            u,
            c,
            a
          ), a && p & 4 && gm(u, c);
          break;
        case 13:
          wn(
            u,
            c,
            a
          ), a && p & 4 && _m(u, c);
          break;
        case 22:
          c.memoizedState === null && wn(
            u,
            c,
            a
          ), il(c, c.return);
          break;
        case 30:
          break;
        default:
          wn(
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Li(a));
  }
  function hs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e));
  }
  function It(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function wm(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && al(9, t);
        break;
      case 1:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e)));
        break;
      case 12:
        if (u & 2048) {
          It(
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
          } catch (S) {
            Ue(t, t.return, S);
          }
        } else
          It(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        It(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : ll(e, t) : c._visibility & 2 ? It(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, li(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && ps(p, t);
        break;
      case 24:
        It(
          e,
          t,
          a,
          l
        ), u & 2048 && hs(t.alternate, t);
        break;
      default:
        It(
          e,
          t,
          a,
          l
        );
    }
  }
  function li(e, t, a, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, S = l, M = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          li(
            c,
            p,
            y,
            S,
            u
          ), al(8, p);
          break;
        case 23:
          break;
        case 22:
          var D = p.stateNode;
          p.memoizedState !== null ? D._visibility & 2 ? li(
            c,
            p,
            y,
            S,
            u
          ) : ll(
            c,
            p
          ) : (D._visibility |= 2, li(
            c,
            p,
            y,
            S,
            u
          )), u && M & 2048 && ps(
            p.alternate,
            p
          );
          break;
        case 24:
          li(
            c,
            p,
            y,
            S,
            u
          ), u && M & 2048 && hs(p.alternate, p);
          break;
        default:
          li(
            c,
            p,
            y,
            S,
            u
          );
      }
      t = t.sibling;
    }
  }
  function ll(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            ll(a, l), u & 2048 && ps(
              l.alternate,
              l
            );
            break;
          case 24:
            ll(a, l), u & 2048 && hs(l.alternate, l);
            break;
          default:
            ll(a, l);
        }
        t = t.sibling;
      }
  }
  var ol = 8192;
  function oi(e, t, a) {
    if (e.subtreeFlags & ol)
      for (e = e.child; e !== null; )
        zm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function zm(e, t, a) {
    switch (e.tag) {
      case 26:
        oi(
          e,
          t,
          a
        ), e.flags & ol && e.memoizedState !== null && Wg(
          a,
          Ft,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        oi(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Ft;
        Ft = Po(e.stateNode.containerInfo), oi(
          e,
          t,
          a
        ), Ft = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ol, ol = 16777216, oi(
          e,
          t,
          a
        ), ol = l) : oi(
          e,
          t,
          a
        ));
        break;
      default:
        oi(
          e,
          t,
          a
        );
    }
  }
  function xm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function rl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          st = l, Tm(
            l,
            e
          );
        }
      xm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        km(e), e = e.sibling;
  }
  function km(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        rl(e), e.flags & 2048 && Yn(9, e, e.return);
        break;
      case 3:
        rl(e);
        break;
      case 12:
        rl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Uo(e)) : rl(e);
        break;
      default:
        rl(e);
    }
  }
  function Uo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          st = l, Tm(
            l,
            e
          );
        }
      xm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, t, t.return), Uo(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Uo(t));
          break;
        default:
          Uo(t);
      }
      e = e.sibling;
    }
  }
  function Tm(e, t) {
    for (; st !== null; ) {
      var a = st;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Li(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, st = l;
      else
        e: for (a = e; st !== null; ) {
          l = st;
          var u = l.sibling, c = l.return;
          if (vm(l), l === a) {
            st = null;
            break e;
          }
          if (u !== null) {
            u.return = c, st = u;
            break e;
          }
          st = c;
        }
    }
  }
  var fg = {
    getCacheForType: function(e) {
      var t = ft(nt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(nt).controller.signal;
    }
  }, mg = typeof WeakMap == "function" ? WeakMap : Map, De = 0, qe = null, Se = null, ke = 0, Ze = 0, Dt = null, Bn = !1, ri = !1, vs = !1, zn = 0, We = 0, Hn = 0, za = 0, ys = 0, Rt = 0, ui = 0, ul = null, Et = null, gs = !1, Yo = 0, Em = 0, Bo = 1 / 0, Ho = null, Xn = null, ot = 0, qn = null, si = null, xn = 0, _s = 0, bs = null, Am = null, sl = 0, Ss = null;
  function Zt() {
    return (De & 2) !== 0 && ke !== 0 ? ke & -ke : E.T !== null ? Es() : $c();
  }
  function Mm() {
    if (Rt === 0)
      if ((ke & 536870912) === 0 || Ee) {
        var e = Ql;
        Ql <<= 1, (Ql & 3932160) === 0 && (Ql = 262144), Rt = e;
      } else Rt = 536870912;
    return e = Ct.current, e !== null && (e.flags |= 32), Rt;
  }
  function At(e, t, a) {
    (e === qe && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (ci(e, 0), $n(
      e,
      ke,
      Rt,
      !1
    )), ji(e, a), ((De & 2) === 0 || e !== qe) && (e === qe && ((De & 2) === 0 && (za |= a), We === 4 && $n(
      e,
      ke,
      Rt,
      !1
    )), on(e));
  }
  function jm(e, t, a) {
    if ((De & 6) !== 0) throw Error(r(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Mi(e, t), u = l ? vg(e, t) : zs(e, t, !0), c = l;
    do {
      if (u === 0) {
        ri && !l && $n(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !pg(a)) {
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
              u = ul;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (ci(y, p).flags |= 256), p = zs(
                y,
                p,
                !1
              ), p !== 2) {
                if (vs && !S) {
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
          ci(e, 0), $n(e, t, 0, !0);
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
              $n(
                l,
                t,
                Rt,
                !Bn
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
          if ((t & 62914560) === t && (u = Yo + 300 - gt(), 10 < u)) {
            if ($n(
              l,
              t,
              Rt,
              !Bn
            ), Jl(l, 0, !0) !== 0) break e;
            xn = t, l.timeoutHandle = rp(
              Om.bind(
                null,
                l,
                a,
                Et,
                Ho,
                gs,
                t,
                Rt,
                za,
                ui,
                Bn,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Om(
            l,
            a,
            Et,
            Ho,
            gs,
            t,
            Rt,
            za,
            ui,
            Bn,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    on(e);
  }
  function Om(e, t, a, l, u, c, p, y, S, M, D, U, O, C) {
    if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn
      }, zm(
        t,
        c,
        U
      );
      var ie = (c & 62914560) === c ? Yo - gt() : (c & 4194048) === c ? Em - gt() : 0;
      if (ie = Fg(
        U,
        ie
      ), ie !== null) {
        xn = c, e.cancelPendingCommit = ie(
          Bm.bind(
            null,
            e,
            t,
            c,
            a,
            l,
            u,
            p,
            y,
            S,
            D,
            U,
            null,
            O,
            C
          )
        ), $n(e, c, p, !M);
        return;
      }
    }
    Bm(
      e,
      t,
      c,
      a,
      l,
      u,
      p,
      y,
      S
    );
  }
  function pg(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], c = u.getSnapshot;
          u = u.value;
          try {
            if (!jt(c(), u)) return !1;
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
  function $n(e, t, a, l) {
    t &= ~ys, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - ee(u), p = 1 << c;
      l[c] = -1, u &= ~p;
    }
    a !== 0 && Hc(e, a, t);
  }
  function Xo() {
    return (De & 6) === 0 ? (cl(0), !1) : !0;
  }
  function ws() {
    if (Se !== null) {
      if (Ze === 0)
        var e = Se.return;
      else
        e = Se, mn = pa = null, Yu(e), ei = null, Gi = 0, e = Se;
      for (; e !== null; )
        um(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function ci(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Dg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xn = 0, ws(), qe = e, Se = a = dn(e.current, null), ke = t, Ze = 0, Dt = null, Bn = !1, ri = Mi(e, t), vs = !1, ui = Rt = ys = za = Hn = We = 0, Et = ul = null, gs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ee(l), c = 1 << u;
        t |= e[u], l &= ~c;
      }
    return zn = t, ro(), a;
  }
  function Cm(e, t) {
    ge = null, E.H = el, t === Ia || t === vo ? (t = Qd(), Ze = 3) : t === Tu ? (t = Qd(), Ze = 4) : Ze = t === es ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Dt = t, Se === null && (We = 1, jo(
      e,
      Xt(t, e.current)
    ));
  }
  function Nm() {
    var e = Ct.current;
    return e === null ? !0 : (ke & 4194048) === ke ? Vt === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === Vt : !1;
  }
  function Dm() {
    var e = E.H;
    return E.H = el, e === null ? el : e;
  }
  function Rm() {
    var e = E.A;
    return E.A = fg, e;
  }
  function qo() {
    We = 4, Bn || (ke & 4194048) !== ke && Ct.current !== null || (ri = !0), (Hn & 134217727) === 0 && (za & 134217727) === 0 || qe === null || $n(
      qe,
      ke,
      Rt,
      !1
    );
  }
  function zs(e, t, a) {
    var l = De;
    De |= 2;
    var u = Dm(), c = Rm();
    (qe !== e || ke !== t) && (Ho = null, ci(e, t)), t = !1;
    var p = We;
    e: do
      try {
        if (Ze !== 0 && Se !== null) {
          var y = Se, S = Dt;
          switch (Ze) {
            case 8:
              ws(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ct.current === null && (t = !0);
              var M = Ze;
              if (Ze = 0, Dt = null, di(e, y, S, M), a && ri) {
                p = 0;
                break e;
              }
              break;
            default:
              M = Ze, Ze = 0, Dt = null, di(e, y, S, M);
          }
        }
        hg(), p = We;
        break;
      } catch (D) {
        Cm(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, mn = pa = null, De = l, E.H = u, E.A = c, Se === null && (qe = null, ke = 0, ro()), p;
  }
  function hg() {
    for (; Se !== null; ) Zm(Se);
  }
  function vg(e, t) {
    var a = De;
    De |= 2;
    var l = Dm(), u = Rm();
    qe !== e || ke !== t ? (Ho = null, Bo = gt() + 500, ci(e, t)) : ri = Mi(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && Se !== null) {
          t = Se;
          var c = Dt;
          t: switch (Ze) {
            case 1:
              Ze = 0, Dt = null, di(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Vd(c)) {
                Ze = 0, Dt = null, Um(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || qe !== e || (Ze = 7), on(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              Vd(c) ? (Ze = 0, Dt = null, Um(t)) : (Ze = 0, Dt = null, di(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Se.tag) {
                case 26:
                  p = Se.memoizedState;
                case 5:
                case 27:
                  var y = Se;
                  if (p ? wp(p) : y.stateNode.complete) {
                    Ze = 0, Dt = null;
                    var S = y.sibling;
                    if (S !== null) Se = S;
                    else {
                      var M = y.return;
                      M !== null ? (Se = M, $o(M)) : Se = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Dt = null, di(e, t, c, 5);
              break;
            case 6:
              Ze = 0, Dt = null, di(e, t, c, 6);
              break;
            case 8:
              ws(), We = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        yg();
        break;
      } catch (D) {
        Cm(e, D);
      }
    while (!0);
    return mn = pa = null, E.H = l, E.A = u, De = a, Se !== null ? 0 : (qe = null, ke = 0, ro(), We);
  }
  function yg() {
    for (; Se !== null && !Dr(); )
      Zm(Se);
  }
  function Zm(e) {
    var t = om(e.alternate, e, zn);
    e.memoizedProps = e.pendingProps, t === null ? $o(e) : Se = t;
  }
  function Um(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = em(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ke
        );
        break;
      case 11:
        t = em(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ke
        );
        break;
      case 5:
        Yu(t);
      default:
        um(a, t), t = Se = Dd(t, zn), t = om(a, t, zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? $o(e) : Se = t;
  }
  function di(e, t, a, l) {
    mn = pa = null, Yu(t), ei = null, Gi = 0;
    var u = t.return;
    try {
      if (lg(
        e,
        u,
        t,
        a,
        ke
      )) {
        We = 1, jo(
          e,
          Xt(a, e.current)
        ), Se = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw Se = u, c;
      We = 1, jo(
        e,
        Xt(a, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Ee || l === 1 ? e = !0 : ri || (ke & 536870912) !== 0 ? e = !1 : (Bn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Ct.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Ym(t, e)) : $o(t);
  }
  function $o(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ym(
          t,
          Bn
        );
        return;
      }
      e = t.return;
      var a = ug(
        t.alternate,
        t,
        zn
      );
      if (a !== null) {
        Se = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function Ym(e, t) {
    do {
      var a = sg(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Se = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Se = e;
        return;
      }
      Se = e = a;
    } while (e !== null);
    We = 6, Se = null;
  }
  function Bm(e, t, a, l, u, c, p, y, S) {
    e.cancelPendingCommit = null;
    do
      Lo();
    while (ot !== 0);
    if ((De & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (c = t.lanes | t.childLanes, c |= du, Pv(
        e,
        a,
        c,
        p,
        y,
        S
      ), e === qe && (Se = qe = null, ke = 0), si = t, qn = e, xn = a, _s = c, bs = u, Am = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sg(Ca, function() {
        return Lm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = E.T, E.T = null, u = X.p, X.p = 2, p = De, De |= 4;
        try {
          cg(e, t, a);
        } finally {
          De = p, X.p = u, E.T = l;
        }
      }
      ot = 1, Hm(), Xm(), qm();
    }
  }
  function Hm() {
    if (ot === 1) {
      ot = 0;
      var e = qn, t = si, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var l = X.p;
        X.p = 2;
        var u = De;
        De |= 4;
        try {
          bm(t, e);
          var c = Rs, p = kd(e.containerInfo), y = c.focusedElem, S = c.selectionRange;
          if (p !== y && y && y.ownerDocument && xd(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && ou(y)) {
              var M = S.start, D = S.end;
              if (D === void 0 && (D = M), "selectionStart" in y)
                y.selectionStart = M, y.selectionEnd = Math.min(
                  D,
                  y.value.length
                );
              else {
                var U = y.ownerDocument || document, O = U && U.defaultView || window;
                if (O.getSelection) {
                  var C = O.getSelection(), ie = y.textContent.length, me = Math.min(S.start, ie), He = S.end === void 0 ? me : Math.min(S.end, ie);
                  !C.extend && me > He && (p = He, He = me, me = p);
                  var k = zd(
                    y,
                    me
                  ), z = zd(
                    y,
                    He
                  );
                  if (k && z && (C.rangeCount !== 1 || C.anchorNode !== k.node || C.anchorOffset !== k.offset || C.focusNode !== z.node || C.focusOffset !== z.offset)) {
                    var A = U.createRange();
                    A.setStart(k.node, k.offset), C.removeAllRanges(), me > He ? (C.addRange(A), C.extend(z.node, z.offset)) : (A.setEnd(z.node, z.offset), C.addRange(A));
                  }
                }
              }
            }
            for (U = [], C = y; C = C.parentNode; )
              C.nodeType === 1 && U.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < U.length; y++) {
              var R = U[y];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          nr = !!Ds, Rs = Ds = null;
        } finally {
          De = u, X.p = l, E.T = a;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function Xm() {
    if (ot === 2) {
      ot = 0;
      var e = qn, t = si, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var l = X.p;
        X.p = 2;
        var u = De;
        De |= 4;
        try {
          hm(e, t.alternate, t);
        } finally {
          De = u, X.p = l, E.T = a;
        }
      }
      ot = 3;
    }
  }
  function qm() {
    if (ot === 4 || ot === 3) {
      ot = 0, aa();
      var e = qn, t = si, a = xn, l = Am;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, si = qn = null, $m(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Xn = null), Xr(a), t = t.stateNode, H && typeof H.onCommitFiberRoot == "function")
        try {
          H.onCommitFiberRoot(
            la,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = E.T, u = X.p, X.p = 2, E.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          E.T = t, X.p = u;
        }
      }
      (xn & 3) !== 0 && Lo(), on(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === Ss ? sl++ : (sl = 0, Ss = e) : sl = 0, cl(0);
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Li(t)));
  }
  function Lo() {
    return Hm(), Xm(), qm(), Lm();
  }
  function Lm() {
    if (ot !== 5) return !1;
    var e = qn, t = _s;
    _s = 0;
    var a = Xr(xn), l = E.T, u = X.p;
    try {
      X.p = 32 > a ? 32 : a, E.T = null, a = bs, bs = null;
      var c = qn, p = xn;
      if (ot = 0, si = qn = null, xn = 0, (De & 6) !== 0) throw Error(r(331));
      var y = De;
      if (De |= 4, km(c.current), wm(
        c,
        c.current,
        p,
        a
      ), De = y, cl(0, !1), H && typeof H.onPostCommitFiberRoot == "function")
        try {
          H.onPostCommitFiberRoot(la, c);
        } catch {
        }
      return !0;
    } finally {
      X.p = u, E.T = l, $m(e, t);
    }
  }
  function Vm(e, t, a) {
    t = Xt(a, t), t = Iu(e.stateNode, t, 2), e = Rn(e, t, 2), e !== null && (ji(e, 2), on(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3)
      Vm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Xn === null || !Xn.has(l))) {
            e = Xt(a, e), a = Gf(2), l = Rn(t, a, 2), l !== null && (Qf(
              a,
              l,
              t,
              e
            ), ji(l, 2), on(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function xs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new mg();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (vs = !0, u.add(a), e = gg.bind(null, e, t, a), t.then(e, e));
  }
  function gg(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, qe === e && (ke & a) === a && (We === 4 || We === 3 && (ke & 62914560) === ke && 300 > gt() - Yo ? (De & 2) === 0 && ci(e, 0) : ys |= a, ui === ke && (ui = 0)), on(e);
  }
  function Gm(e, t) {
    t === 0 && (t = Bc()), e = da(e, t), e !== null && (ji(e, t), on(e));
  }
  function _g(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Gm(e, a);
  }
  function bg(e, t) {
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
    l !== null && l.delete(t), Gm(e, a);
  }
  function Sg(e, t) {
    return Oa(e, t);
  }
  var Vo = null, fi = null, ks = !1, Go = !1, Ts = !1, Ln = 0;
  function on(e) {
    e !== fi && e.next === null && (fi === null ? Vo = fi = e : fi = fi.next = e), Go = !0, ks || (ks = !0, zg());
  }
  function cl(e, t) {
    if (!Ts && Go) {
      Ts = !0;
      do
        for (var a = !1, l = Vo; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              c = (1 << 31 - ee(42 | e) + 1) - 1, c &= u & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Pm(l, c));
          } else
            c = ke, c = Jl(
              l,
              l === qe ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || Mi(l, c) || (a = !0, Pm(l, c));
          l = l.next;
        }
      while (a);
      Ts = !1;
    }
  }
  function wg() {
    Qm();
  }
  function Qm() {
    Go = ks = !1;
    var e = 0;
    Ln !== 0 && Ng() && (e = Ln);
    for (var t = gt(), a = null, l = Vo; l !== null; ) {
      var u = l.next, c = Km(l, t);
      c === 0 ? (l.next = null, a === null ? Vo = u : a.next = u, u === null && (fi = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && (Go = !0)), l = u;
    }
    ot !== 0 && ot !== 5 || cl(e), Ln !== 0 && (Ln = 0);
  }
  function Km(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - ee(c), y = 1 << p, S = u[p];
      S === -1 ? ((y & a) === 0 || (y & l) !== 0) && (u[p] = Jv(y, t)) : S <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = qe, a = ke, a = Jl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ai(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Mi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ai(l), Xr(a)) {
        case 2:
        case 8:
          a = Vl;
          break;
        case 32:
          a = Ca;
          break;
        case 268435456:
          a = ia;
          break;
        default:
          a = Ca;
      }
      return l = Jm.bind(null, e), a = Oa(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ai(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Jm(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Lo() && e.callbackNode !== a)
      return null;
    var l = ke;
    return l = Jl(
      e,
      e === qe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (jm(e, l, t), Km(e, gt()), e.callbackNode != null && e.callbackNode === a ? Jm.bind(null, e) : null);
  }
  function Pm(e, t) {
    if (Lo()) return null;
    jm(e, t, !0);
  }
  function zg() {
    Rg(function() {
      (De & 6) !== 0 ? Oa(
        Ll,
        wg
      ) : Qm();
    });
  }
  function Es() {
    if (Ln === 0) {
      var e = Wa;
      e === 0 && (e = Gl, Gl <<= 1, (Gl & 261888) === 0 && (Gl = 256)), Ln = e;
    }
    return Ln;
  }
  function Wm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Il("" + e);
  }
  function Fm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function xg(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var c = Wm(
        (u[wt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[wt] || null) ? Wm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new ao(
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
                if (Ln !== 0) {
                  var S = p ? Fm(u, p) : new FormData(u);
                  Qu(
                    a,
                    {
                      pending: !0,
                      data: S,
                      method: u.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), S = p ? Fm(u, p) : new FormData(u), Qu(
                  a,
                  {
                    pending: !0,
                    data: S,
                    method: u.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var As = 0; As < cu.length; As++) {
    var Ms = cu[As], kg = Ms.toLowerCase(), Tg = Ms[0].toUpperCase() + Ms.slice(1);
    Wt(
      kg,
      "on" + Tg
    );
  }
  Wt(Ad, "onAnimationEnd"), Wt(Md, "onAnimationIteration"), Wt(jd, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(qy, "onTransitionRun"), Wt($y, "onTransitionStart"), Wt(Ly, "onTransitionCancel"), Wt(Od, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), ra(
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
  var dl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Eg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl)
  );
  function Im(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var y = l[p], S = y.instance, M = y.currentTarget;
            if (y = y.listener, S !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = M;
            try {
              c(u);
            } catch (D) {
              oo(D);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (y = l[p], S = y.instance, M = y.currentTarget, y = y.listener, S !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = M;
            try {
              c(u);
            } catch (D) {
              oo(D);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function we(e, t) {
    var a = t[qr];
    a === void 0 && (a = t[qr] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (ep(t, e, 2, !1), a.add(l));
  }
  function js(e, t, a) {
    var l = 0;
    t && (l |= 4), ep(
      a,
      e,
      l,
      t
    );
  }
  var Qo = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(e) {
    if (!e[Qo]) {
      e[Qo] = !0, Gc.forEach(function(a) {
        a !== "selectionchange" && (Eg.has(a) || js(a, !1, e), js(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qo] || (t[Qo] = !0, js("selectionchange", !1, t));
    }
  }
  function ep(e, t, a, l) {
    switch (Mp(t)) {
      case 2:
        var u = t_;
        break;
      case 8:
        u = n_;
        break;
      default:
        u = Gs;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Wr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function Cs(e, t, a, l, u) {
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
              var S = p.tag;
              if ((S === 3 || S === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = Da(y), p === null) return;
            if (S = p.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              l = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    id(function() {
      var M = c, D = Jr(a), U = [];
      e: {
        var O = Cd.get(e);
        if (O !== void 0) {
          var C = ao, ie = e;
          switch (e) {
            case "keypress":
              if (to(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = by;
              break;
            case "focusin":
              ie = "focus", C = tu;
              break;
            case "focusout":
              ie = "blur", C = tu;
              break;
            case "beforeblur":
            case "afterblur":
              C = tu;
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
              C = rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = uy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = zy;
              break;
            case Ad:
            case Md:
            case jd:
              C = dy;
              break;
            case Od:
              C = ky;
              break;
            case "scroll":
            case "scrollend":
              C = oy;
              break;
            case "wheel":
              C = Ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = my;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = sd;
              break;
            case "toggle":
            case "beforetoggle":
              C = My;
          }
          var me = (t & 4) !== 0, He = !me && (e === "scroll" || e === "scrollend"), k = me ? O !== null ? O + "Capture" : null : O;
          me = [];
          for (var z = M, A; z !== null; ) {
            var R = z;
            if (A = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || A === null || k === null || (R = Ni(z, k), R != null && me.push(
              fl(z, R, A)
            )), He) break;
            z = z.return;
          }
          0 < me.length && (O = new C(
            O,
            ie,
            null,
            a,
            D
          ), U.push({ event: O, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", O && a !== Kr && (ie = a.relatedTarget || a.fromElement) && (Da(ie) || ie[Na]))
            break e;
          if ((C || O) && (O = D.window === D ? D : (O = D.ownerDocument) ? O.defaultView || O.parentWindow : window, C ? (ie = a.relatedTarget || a.toElement, C = M, ie = ie ? Da(ie) : null, ie !== null && (He = d(ie), me = ie.tag, ie !== He || me !== 5 && me !== 27 && me !== 6) && (ie = null)) : (C = null, ie = M), C !== ie)) {
            if (me = rd, R = "onMouseLeave", k = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (me = sd, R = "onPointerLeave", k = "onPointerEnter", z = "pointer"), He = C == null ? O : Ci(C), A = ie == null ? O : Ci(ie), O = new me(
              R,
              z + "leave",
              C,
              a,
              D
            ), O.target = He, O.relatedTarget = A, R = null, Da(D) === M && (me = new me(
              k,
              z + "enter",
              ie,
              a,
              D
            ), me.target = A, me.relatedTarget = He, R = me), He = R, C && ie)
              t: {
                for (me = Ag, k = C, z = ie, A = 0, R = k; R; R = me(R))
                  A++;
                R = 0;
                for (var ce = z; ce; ce = me(ce))
                  R++;
                for (; 0 < A - R; )
                  k = me(k), A--;
                for (; 0 < R - A; )
                  z = me(z), R--;
                for (; A--; ) {
                  if (k === z || z !== null && k === z.alternate) {
                    me = k;
                    break t;
                  }
                  k = me(k), z = me(z);
                }
                me = null;
              }
            else me = null;
            C !== null && tp(
              U,
              O,
              C,
              me,
              !1
            ), ie !== null && He !== null && tp(
              U,
              He,
              ie,
              me,
              !0
            );
          }
        }
        e: {
          if (O = M ? Ci(M) : window, C = O.nodeName && O.nodeName.toLowerCase(), C === "select" || C === "input" && O.type === "file")
            var je = yd;
          else if (hd(O))
            if (gd)
              je = By;
            else {
              je = Uy;
              var oe = Zy;
            }
          else
            C = O.nodeName, !C || C.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? M && Qr(M.elementType) && (je = yd) : je = Yy;
          if (je && (je = je(e, M))) {
            vd(
              U,
              je,
              a,
              D
            );
            break e;
          }
          oe && oe(e, O, M), e === "focusout" && M && O.type === "number" && M.memoizedProps.value != null && Gr(O, "number", O.value);
        }
        switch (oe = M ? Ci(M) : window, e) {
          case "focusin":
            (hd(oe) || oe.contentEditable === "true") && ($a = oe, ru = M, Xi = null);
            break;
          case "focusout":
            Xi = ru = $a = null;
            break;
          case "mousedown":
            uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            uu = !1, Td(U, a, D);
            break;
          case "selectionchange":
            if (Xy) break;
          case "keydown":
          case "keyup":
            Td(U, a, D);
        }
        var _e;
        if (au)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          qa ? md(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Te = "onCompositionStart");
        Te && (cd && a.locale !== "ko" && (qa || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && qa && (_e = ld()) : (An = D, Fr = "value" in An ? An.value : An.textContent, qa = !0)), oe = Ko(M, Te), 0 < oe.length && (Te = new ud(
          Te,
          e,
          null,
          a,
          D
        ), U.push({ event: Te, listeners: oe }), _e ? Te.data = _e : (_e = pd(a), _e !== null && (Te.data = _e)))), (_e = Oy ? Cy(e, a) : Ny(e, a)) && (Te = Ko(M, "onBeforeInput"), 0 < Te.length && (oe = new ud(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          D
        ), U.push({
          event: oe,
          listeners: Te
        }), oe.data = _e)), xg(
          U,
          e,
          M,
          a,
          D
        );
      }
      Im(U, t);
    });
  }
  function fl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ko(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ni(e, a), u != null && l.unshift(
        fl(e, u, c)
      ), u = Ni(e, t), u != null && l.push(
        fl(e, u, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ag(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function tp(e, t, a, l, u) {
    for (var c = t._reactName, p = []; a !== null && a !== l; ) {
      var y = a, S = y.alternate, M = y.stateNode;
      if (y = y.tag, S !== null && S === l) break;
      y !== 5 && y !== 26 && y !== 27 || M === null || (S = M, u ? (M = Ni(a, c), M != null && p.unshift(
        fl(a, M, S)
      )) : u || (M = Ni(a, c), M != null && p.push(
        fl(a, M, S)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Mg = /\r\n?/g, jg = /\u0000|\uFFFD/g;
  function np(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mg, `
`).replace(jg, "");
  }
  function ap(e, t) {
    return t = np(t), np(e) === t;
  }
  function Be(e, t, a, l, u, c) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ba(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ba(e, "" + l);
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
        nd(e, l, c);
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
        l = Il("" + l), e.setAttribute(a, l);
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
        l = Il("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
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
        a = Il("" + l), e.setAttributeNS(
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
        we("beforetoggle", e), we("toggle", e), Pl(e, "popover", l);
        break;
      case "xlinkActuate":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Pl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = iy.get(a) || a, Pl(e, a, l));
    }
  }
  function Ns(e, t, a, l, u, c) {
    switch (a) {
      case "style":
        nd(e, l, c);
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
        typeof l == "string" ? Ba(e, l) : (typeof l == "number" || typeof l == "bigint") && Ba(e, "" + l);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
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
        if (!Qc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Pl(e, a, l);
          }
    }
  }
  function pt(e, t, a) {
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
        we("error", e), we("load", e);
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
        we("invalid", e);
        var y = c = p = u = null, S = null, M = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var D = a[l];
            if (D != null)
              switch (l) {
                case "name":
                  u = D;
                  break;
                case "type":
                  p = D;
                  break;
                case "checked":
                  S = D;
                  break;
                case "defaultChecked":
                  M = D;
                  break;
                case "value":
                  c = D;
                  break;
                case "defaultValue":
                  y = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Be(e, t, l, D, a, null);
              }
          }
        Fc(
          e,
          c,
          y,
          S,
          M,
          p,
          u,
          !1
        );
        return;
      case "select":
        we("invalid", e), l = p = c = null;
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
        t = c, a = p, e.multiple = !!l, t != null ? Ya(e, !!l, t, !1) : a != null && Ya(e, !!l, a, !0);
        return;
      case "textarea":
        we("invalid", e), c = u = l = null;
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
        ed(e, l, u, c);
        return;
      case "option":
        for (S in a)
          a.hasOwnProperty(S) && (l = a[S], l != null) && (S === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Be(e, t, S, l, a, null));
        return;
      case "dialog":
        we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
        break;
      case "iframe":
      case "object":
        we("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < dl.length; l++)
          we(dl[l], e);
        break;
      case "image":
        we("error", e), we("load", e);
        break;
      case "details":
        we("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        we("error", e), we("load", e);
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
        for (M in a)
          if (a.hasOwnProperty(M) && (l = a[M], l != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Be(e, t, M, l, a, null);
            }
        return;
      default:
        if (Qr(t)) {
          for (D in a)
            a.hasOwnProperty(D) && (l = a[D], l !== void 0 && Ns(
              e,
              t,
              D,
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
  function Og(e, t, a, l) {
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
        var u = null, c = null, p = null, y = null, S = null, M = null, D = null;
        for (C in a) {
          var U = a[C];
          if (a.hasOwnProperty(C) && U != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                l.hasOwnProperty(C) || Be(e, t, C, null, l, U);
            }
        }
        for (var O in l) {
          var C = l[O];
          if (U = a[O], l.hasOwnProperty(O) && (C != null || U != null))
            switch (O) {
              case "type":
                c = C;
                break;
              case "name":
                u = C;
                break;
              case "checked":
                M = C;
                break;
              case "defaultChecked":
                D = C;
                break;
              case "value":
                p = C;
                break;
              case "defaultValue":
                y = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, t));
                break;
              default:
                C !== U && Be(
                  e,
                  t,
                  O,
                  C,
                  l,
                  U
                );
            }
        }
        Vr(
          e,
          p,
          y,
          S,
          M,
          D,
          c,
          u
        );
        return;
      case "select":
        C = p = y = O = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                C = S;
              default:
                l.hasOwnProperty(c) || Be(
                  e,
                  t,
                  c,
                  null,
                  l,
                  S
                );
            }
        for (u in l)
          if (c = l[u], S = a[u], l.hasOwnProperty(u) && (c != null || S != null))
            switch (u) {
              case "value":
                O = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== S && Be(
                  e,
                  t,
                  u,
                  c,
                  l,
                  S
                );
            }
        t = y, a = p, l = C, O != null ? Ya(e, !!a, O, !1) : !!l != !!a && (t != null ? Ya(e, !!a, t, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        C = O = null;
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
                O = u;
                break;
              case "defaultValue":
                C = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && Be(e, t, p, u, l, c);
            }
        Ic(e, O, C);
        return;
      case "option":
        for (var ie in a)
          O = a[ie], a.hasOwnProperty(ie) && O != null && !l.hasOwnProperty(ie) && (ie === "selected" ? e.selected = !1 : Be(
            e,
            t,
            ie,
            null,
            l,
            O
          ));
        for (S in l)
          O = l[S], C = a[S], l.hasOwnProperty(S) && O !== C && (O != null || C != null) && (S === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Be(
            e,
            t,
            S,
            O,
            l,
            C
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
        for (var me in a)
          O = a[me], a.hasOwnProperty(me) && O != null && !l.hasOwnProperty(me) && Be(e, t, me, null, l, O);
        for (M in l)
          if (O = l[M], C = a[M], l.hasOwnProperty(M) && O !== C && (O != null || C != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  M,
                  O,
                  l,
                  C
                );
            }
        return;
      default:
        if (Qr(t)) {
          for (var He in a)
            O = a[He], a.hasOwnProperty(He) && O !== void 0 && !l.hasOwnProperty(He) && Ns(
              e,
              t,
              He,
              void 0,
              l,
              O
            );
          for (D in l)
            O = l[D], C = a[D], !l.hasOwnProperty(D) || O === C || O === void 0 && C === void 0 || Ns(
              e,
              t,
              D,
              O,
              l,
              C
            );
          return;
        }
    }
    for (var k in a)
      O = a[k], a.hasOwnProperty(k) && O != null && !l.hasOwnProperty(k) && Be(e, t, k, null, l, O);
    for (U in l)
      O = l[U], C = a[U], !l.hasOwnProperty(U) || O === C || O == null && C == null || Be(e, t, U, O, l, C);
  }
  function ip(e) {
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
  function Cg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var u = a[l], c = u.transferSize, p = u.initiatorType, y = u.duration;
        if (c && y && ip(p)) {
          for (p = 0, y = u.responseEnd, l += 1; l < a.length; l++) {
            var S = a[l], M = S.startTime;
            if (M > y) break;
            var D = S.transferSize, U = S.initiatorType;
            D && ip(U) && (S = S.responseEnd, p += D * (S < y ? 1 : (y - M) / (S - M)));
          }
          if (--l, t += 8 * (c + p) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ds = null, Rs = null;
  function Jo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function lp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function op(e, t) {
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
  function Zs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Us = null;
  function Ng() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Us ? !1 : (Us = e, !0) : (Us = null, !1);
  }
  var rp = typeof setTimeout == "function" ? setTimeout : void 0, Dg = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, Rg = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(e) {
    return up.resolve(null).then(e).catch(Zg);
  } : rp;
  function Zg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vn(e) {
    return e === "head";
  }
  function sp(e, t) {
    var a = t, l = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(u), vi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          ml(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, ml(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[Oi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && ml(e.ownerDocument.body);
      a = u;
    } while (a);
    vi(t);
  }
  function cp(e, t) {
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
  function Ug(e, t, a, l) {
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
  function Yg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function dp(e, t) {
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
  function Bg(e, t) {
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
  function fp(e) {
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
  function mp(e) {
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
  function pp(e, t, a) {
    switch (t = Jo(a), e) {
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
  function ml(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    $r(e);
  }
  var Qt = /* @__PURE__ */ new Map(), hp = /* @__PURE__ */ new Set();
  function Po(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var kn = X.d;
  X.d = {
    f: Hg,
    r: Xg,
    D: qg,
    C: $g,
    L: Lg,
    m: Vg,
    X: Qg,
    S: Gg,
    M: Kg
  };
  function Hg() {
    var e = kn.f(), t = Xo();
    return e || t;
  }
  function Xg(e) {
    var t = Ra(e);
    t !== null && t.tag === 5 && t.type === "form" ? Cf(t) : kn.r(e);
  }
  var mi = typeof document > "u" ? null : document;
  function vp(e, t, a) {
    var l = mi;
    if (l && typeof t == "string" && t) {
      var u = Bt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), hp.has(u) || (hp.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), pt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function qg(e) {
    kn.D(e), vp("dns-prefetch", e, null);
  }
  function $g(e, t) {
    kn.C(e, t), vp("preconnect", e, t);
  }
  function Lg(e, t, a) {
    kn.L(e, t, a);
    var l = mi;
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
          c = pi(e);
          break;
        case "script":
          c = hi(e);
      }
      Qt.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Qt.set(c, e), l.querySelector(u) !== null || t === "style" && l.querySelector(pl(c)) || t === "script" && l.querySelector(hl(c)) || (t = l.createElement("link"), pt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Vg(e, t) {
    kn.m(e, t);
    var a = mi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Bt(l) + '"][href="' + Bt(e) + '"]', c = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = hi(e);
      }
      if (!Qt.has(c) && (e = b({ rel: "modulepreload", href: e }, t), Qt.set(c, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hl(c)))
              return;
        }
        l = a.createElement("link"), pt(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Gg(e, t, a) {
    kn.S(e, t, a);
    var l = mi;
    if (l && e) {
      var u = Za(l).hoistableStyles, c = pi(e);
      t = t || "default";
      var p = u.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          pl(c)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Qt.get(c)) && qs(e, a);
          var S = p = l.createElement("link");
          ut(S), pt(S, "link", e), S._p = new Promise(function(M, D) {
            S.onload = M, S.onerror = D;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
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
  function Qg(e, t) {
    kn.X(e, t);
    var a = mi;
    if (a && e) {
      var l = Za(a).hoistableScripts, u = hi(e), c = l.get(u);
      c || (c = a.querySelector(hl(u)), c || (e = b({ src: e, async: !0 }, t), (t = Qt.get(u)) && $s(e, t), c = a.createElement("script"), ut(c), pt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function Kg(e, t) {
    kn.M(e, t);
    var a = mi;
    if (a && e) {
      var l = Za(a).hoistableScripts, u = hi(e), c = l.get(u);
      c || (c = a.querySelector(hl(u)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = Qt.get(u)) && $s(e, t), c = a.createElement("script"), ut(c), pt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(u, c));
    }
  }
  function yp(e, t, a, l) {
    var u = (u = ye.current) ? Po(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = pi(a.href), a = Za(
          u
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = pi(a.href);
          var c = Za(
            u
          ).hoistableStyles, p = c.get(e);
          if (p || (u = u.ownerDocument || u, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = u.querySelector(
            pl(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Qt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qt.set(e, a), c || Jg(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hi(a), a = Za(
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
  function pi(e) {
    return 'href="' + Bt(e) + '"';
  }
  function pl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function gp(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Jg(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), pt(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function hi(e) {
    return '[src="' + Bt(e) + '"]';
  }
  function hl(e) {
    return "script[async]" + e;
  }
  function _p(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Bt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ut(l), l;
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ut(l), pt(l, "style", u), Wo(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = pi(a.href);
          var c = e.querySelector(
            pl(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          l = gp(a), (u = Qt.get(u)) && qs(l, u), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var p = c;
          return p._p = new Promise(function(y, S) {
            p.onload = y, p.onerror = S;
          }), pt(c, "link", l), t.state.loading |= 4, Wo(c, a.precedence, e), t.instance = c;
        case "script":
          return c = hi(a.src), (u = e.querySelector(
            hl(c)
          )) ? (t.instance = u, ut(u), u) : (l = a, (u = Qt.get(c)) && (l = b({}, a), $s(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), ut(u), pt(u, "link", l), e.head.appendChild(u), t.instance = u);
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
  var Fo = null;
  function bp(e, t, a) {
    if (Fo === null) {
      var l = /* @__PURE__ */ new Map(), u = Fo = /* @__PURE__ */ new Map();
      u.set(a, l);
    } else
      u = Fo, l = u.get(a), l || (l = /* @__PURE__ */ new Map(), u.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Oi] || c[ct] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(c) : l.set(p, [c]);
      }
    }
    return l;
  }
  function Sp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Pg(e, t, a) {
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
  function wp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = pi(l.href), c = t.querySelector(
          pl(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Io.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ut(c);
          return;
        }
        c = t.ownerDocument || t, l = gp(l), (u = Qt.get(u)) && qs(l, u), c = c.createElement("link"), ut(c);
        var p = c;
        p._p = new Promise(function(y, S) {
          p.onload = y, p.onerror = S;
        }), pt(c, "link", l), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Io.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ls = 0;
  function Fg(e, t) {
    return e.stylesheets && e.count === 0 && tr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && tr(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ls === 0 && (Ls = 62500 * Cg());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && tr(e, e.stylesheets), e.unsuspend)) {
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
  function Io() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) tr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var er = null;
  function tr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, er = /* @__PURE__ */ new Map(), t.forEach(Ig, e), er = null, Io.call(e));
  }
  function Ig(e, t) {
    if (!(t.state.loading & 4)) {
      var a = er.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), er.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var p = u[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), l = p);
        }
        l && a.set(null, l);
      }
      u = t.instance, p = u.getAttribute("data-precedence"), c = a.get(p) || l, c === l && a.set(null, u), a.set(p, u), this.count++, l = Io.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var vl = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function e_(e, t, a, l, u, c, p, y, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Br(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Br(0), this.hiddenUpdates = Br(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function zp(e, t, a, l, u, c, p, y, S, M, D, U) {
    return e = new e_(
      e,
      t,
      a,
      p,
      S,
      M,
      D,
      U,
      y
    ), t = 1, c === !0 && (t |= 24), c = Ot(3, null, null, t), e.current = c, c.stateNode = e, t = zu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Eu(c), e;
  }
  function xp(e) {
    return e ? (e = Ga, e) : Ga;
  }
  function kp(e, t, a, l, u, c) {
    u = xp(u), l.context === null ? l.context = u : l.pendingContext = u, l = Dn(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Rn(e, l, t), a !== null && (At(a, e, t), Ki(a, e, t));
  }
  function Tp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Vs(e, t) {
    Tp(e, t), (e = e.alternate) && Tp(e, t);
  }
  function Ep(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = da(e, 67108864);
      t !== null && At(t, e, 67108864), Vs(e, 67108864);
    }
  }
  function Ap(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zt();
      t = Hr(t);
      var a = da(e, t);
      a !== null && At(a, e, t), Vs(e, t);
    }
  }
  var nr = !0;
  function t_(e, t, a, l) {
    var u = E.T;
    E.T = null;
    var c = X.p;
    try {
      X.p = 2, Gs(e, t, a, l);
    } finally {
      X.p = c, E.T = u;
    }
  }
  function n_(e, t, a, l) {
    var u = E.T;
    E.T = null;
    var c = X.p;
    try {
      X.p = 8, Gs(e, t, a, l);
    } finally {
      X.p = c, E.T = u;
    }
  }
  function Gs(e, t, a, l) {
    if (nr) {
      var u = Qs(l);
      if (u === null)
        Cs(
          e,
          t,
          l,
          ar,
          a
        ), jp(e, l);
      else if (i_(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (jp(e, l), t & 4 && -1 < a_.indexOf(e)) {
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
                      var S = 1 << 31 - ee(p);
                      y.entanglements[1] |= S, p &= ~S;
                    }
                    on(c), (De & 6) === 0 && (Bo = gt() + 500, cl(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = da(c, 2), y !== null && At(y, c, 2), Xo(), Vs(c, 2);
            }
          if (c = Qs(l), c === null && Cs(
            e,
            t,
            l,
            ar,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && l.stopPropagation();
      } else
        Cs(
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
  var ar = null;
  function Ks(e) {
    if (ar = null, e = Da(e), e !== null) {
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
    return ar = e, null;
  }
  function Mp(e) {
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
          case Ll:
            return 2;
          case Vl:
            return 8;
          case Ca:
          case Zr:
            return 32;
          case ia:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Js = !1, Gn = null, Qn = null, Kn = null, yl = /* @__PURE__ */ new Map(), gl = /* @__PURE__ */ new Map(), Jn = [], a_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        yl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gl.delete(t.pointerId);
    }
  }
  function _l(e, t, a, l, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = Ra(t), t !== null && Ep(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function i_(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return Gn = _l(
          Gn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return Qn = _l(
          Qn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return Kn = _l(
          Kn,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return yl.set(
          c,
          _l(
            yl.get(c) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, gl.set(
          c,
          _l(
            gl.get(c) || null,
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
  function Op(e) {
    var t = Da(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, Lc(e.priority, function() {
              Ap(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Lc(e.priority, function() {
              Ap(a);
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
  function ir(e) {
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
        return t = Ra(a), t !== null && Ep(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Cp(e, t, a) {
    ir(e) && a.delete(t);
  }
  function l_() {
    Js = !1, Gn !== null && ir(Gn) && (Gn = null), Qn !== null && ir(Qn) && (Qn = null), Kn !== null && ir(Kn) && (Kn = null), yl.forEach(Cp), gl.forEach(Cp);
  }
  function lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Js || (Js = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      l_
    )));
  }
  var or = null;
  function Np(e) {
    or !== e && (or = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        or === e && (or = null);
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
  function vi(e) {
    function t(S) {
      return lr(S, e);
    }
    Gn !== null && lr(Gn, e), Qn !== null && lr(Qn, e), Kn !== null && lr(Kn, e), yl.forEach(t), gl.forEach(t);
    for (var a = 0; a < Jn.length; a++) {
      var l = Jn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Jn.length && (a = Jn[0], a.blockedOn === null); )
      Op(a), a.blockedOn === null && Jn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], c = a[l + 1], p = u[wt] || null;
        if (typeof c == "function")
          p || Np(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, p = c[wt] || null)
              y = p.formAction;
            else if (Ks(u) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), Np(a);
        }
      }
  }
  function Dp() {
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
  function Ps(e) {
    this._internalRoot = e;
  }
  rr.prototype.render = Ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, l = Zt();
    kp(a, l, e, t, null, null);
  }, rr.prototype.unmount = Ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      kp(e.current, 2, null, e, null, null), Xo(), t[Na] = null;
    }
  };
  function rr(e) {
    this._internalRoot = e;
  }
  rr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = $c();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Jn.length && t !== 0 && t < Jn[a].priority; a++) ;
      Jn.splice(a, 0, e), a === 0 && Op(e);
    }
  };
  var Rp = i.version;
  if (Rp !== "19.2.8")
    throw Error(
      r(
        527,
        Rp,
        "19.2.8"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = v(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var o_ = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ur.isDisabled && ur.supportsFiber)
      try {
        la = ur.inject(
          o_
        ), H = ur;
      } catch {
      }
  }
  return Sl.createRoot = function(e, t) {
    if (!s(e)) throw Error(r(299));
    var a = !1, l = "", u = qf, c = $f, p = Lf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = zp(
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
      Dp
    ), e[Na] = t.current, Os(e), new Ps(t);
  }, Sl.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(r(299));
    var l = !1, u = "", c = qf, p = $f, y = Lf, S = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (S = a.formState)), t = zp(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      S,
      c,
      p,
      y,
      Dp
    ), t.context = xp(null), a = t.current, l = Zt(), l = Hr(l), u = Dn(l), u.callback = null, Rn(a, u, l), a = l, t.current.lanes = a, ji(t, a), on(t), e[Na] = t.current, Os(e), new rr(t);
  }, Sl.version = "19.2.8", Sl;
}
var Vp;
function v_() {
  if (Vp) return Fs.exports;
  Vp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Fs.exports = h_(), Fs.exports;
}
var y_ = v_();
const g_ = /* @__PURE__ */ qh(y_);
var le = wc();
const Mr = /* @__PURE__ */ qh(le);
const $h = (...n) => n.filter((i, o, r) => !!i && i.trim() !== "" && r.indexOf(i) === o).join(" ").trim();
const __ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const b_ = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, o, r) => r ? r.toUpperCase() : o.toLowerCase()
);
const Gp = (n) => {
  const i = b_(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var S_ = {
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
const w_ = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const z_ = le.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: d,
    iconNode: f,
    ...m
  }, h) => le.createElement(
    "svg",
    {
      ref: h,
      ...S_,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: r ? Number(o) * 24 / Number(i) : o,
      className: $h("lucide", s),
      ...!d && !w_(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([v, _]) => le.createElement(v, _)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const Re = (n, i) => {
  const o = le.forwardRef(
    ({ className: r, ...s }, d) => le.createElement(z_, {
      ref: d,
      iconNode: i,
      className: $h(
        `lucide-${__(Gp(n))}`,
        `lucide-${n}`,
        r
      ),
      ...s
    })
  );
  return o.displayName = Gp(n), o;
};
const x_ = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Lh = Re("arrow-down-to-line", x_);
const k_ = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Qp = Re("arrow-down", k_);
const T_ = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], E_ = Re("arrow-up-from-line", T_);
const A_ = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Kp = Re("arrow-up", A_);
const M_ = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], j_ = Re("battery", M_);
const O_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], C_ = Re("check", O_);
const N_ = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], D_ = Re("clock-3", N_);
const R_ = [
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
], Z_ = Re("droplets", R_);
const U_ = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Y_ = Re("eraser", U_);
const B_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], H_ = Re("history", B_);
const X_ = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Jp = Re("house", X_);
const q_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Pp = Re("loader-circle", q_);
const $_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], L_ = Re("lock-open", $_);
const V_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Vh = Re("lock", V_);
const G_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Q_ = Re("map-pin", G_);
const K_ = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], J_ = Re("pause", K_);
const P_ = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Gh = Re("play", P_);
const W_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Wp = Re("plus", W_);
const F_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], zc = Re("rotate-ccw", F_);
const I_ = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], e0 = Re("scan-line", I_);
const t0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], n0 = Re("sliders-horizontal", t0);
const a0 = [
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
], mc = Re("sparkles", a0);
const i0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], l0 = Re("square", i0);
const o0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], r0 = Re("timer", o0);
const u0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], br = Re("trash-2", u0);
const s0 = [
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
], Fp = Re("waves", s0);
const c0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Ip = Re("wind", c0);
const d0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xc = Re("x", d0);
const f0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], m0 = Re("zoom-in", f0);
const p0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], h0 = Re("zoom-out", p0), eh = "python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)", v0 = [
  {
    models: ["roborock.vacuum.a245"],
    label: "Qrevo Curv 2 Flow",
    status: "tested",
    sources: ["Maintainer's daily driver (Home Assistant 2026.10)"],
    // HA lists `mop` as a Cleaning mode, but the app has no Mop-only mode.
    mop_only: !1,
    repeat: "set_clean_repeat_times",
    smartplan: !0,
    dock: { auto_empty: !0, mop_wash: !0, hot_water: !0, mop_dry: !0 }
  },
  {
    models: ["roborock.vacuum.a144"],
    label: "Saros 10R",
    status: "community",
    sources: [eh, "Real-device test by @infy1995 (PR #4)"],
    mop_only: !0,
    // Vac & Mop only offers Fast/Standard in the app; Mop offers all four routes.
    mop_routes: { vacuum_and_mop: ["fast", "standard"], mop: ["fast", "standard", "deep", "deep_plus"] },
    repeat: "set_clean_repeat_times",
    smartplan: !0,
    dock: { auto_empty: !0, mop_wash: !0, hot_water: !0, mop_dry: !0 }
  },
  {
    models: ["roborock.vacuum.a15"],
    label: "S7 / S7+",
    status: "experimental",
    sources: [eh, "Issue #2 (S7+, Home Assistant core integration)"],
    notes: "No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2).",
    // is_clean_count_setting_supported and is_smart_clean_mode_set_supported are absent.
    repeat: "app_segment_clean",
    smartplan: !1,
    // The S7+ auto-empty dock is optional hardware; the S7 has no washing or drying dock.
    dock: { mop_wash: !1, hot_water: !1, mop_dry: !1 }
  }
];
function y0(n, i) {
  const o = n.entities?.[i]?.device_id, r = o ? n.devices?.[o] : void 0;
  return r?.model_id ?? r?.model ?? void 0;
}
function g0(n) {
  return n ? v0.find((i) => i.models.includes(n)) : void 0;
}
const sr = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function cr(n, i) {
  if (!i) return [];
  const o = n.states[i];
  return !o || o.state === "unavailable" ? [] : Array.isArray(o.attributes.options) ? o.attributes.options.map(String) : [];
}
function kc(n, i) {
  const o = n.states[i.entity], r = Number(o?.attributes.supported_features ?? 0), s = Array.isArray(o?.attributes.fan_speed_list) ? o.attributes.fan_speed_list.map(String) : [], d = cr(n, i.entities?.map_select), f = cr(n, i.entities?.cleaning_mode), m = cr(n, i.entities?.mop_mode), h = cr(n, i.entities?.mop_intensity), v = y0(n, i.entity), _ = g0(v), b = s.includes("smart_mode") && m.includes("smart_mode"), x = b || h.some((T) => ["slight", "moderate", "extreme"].includes(T)) ? "set_clean_repeat_times" : "app_segment_clean";
  return {
    fanSpeeds: s,
    mapOptions: d,
    cleaningModes: f,
    mopModes: m,
    mopIntensities: h,
    canStart: !!(r & sr.start),
    canPause: !!(r & sr.pause),
    canStop: !!(r & sr.stop),
    canDock: !!(r & sr.returnHome),
    hasMapSelect: d.length > 0,
    hasCleaningMode: f.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: h.length > 0,
    hasSmartPlan: i.enable_smartplan ?? _?.smartplan ?? b,
    roomRepeatStrategy: i.cleaning_count_command ?? _?.repeat ?? x,
    mopRoutes: i.mop_routes ?? _?.mop_routes,
    profile: _ ? { label: _.label, status: _.status } : void 0,
    model: v
  };
}
function _0(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function b0(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
var th;
function Z(n, i, o) {
  function r(m, h) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: h,
        constr: f,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n))
      return;
    m._zod.traits.add(n), i(m, h);
    const v = f.prototype, _ = Object.keys(v);
    for (let b = 0; b < _.length; b++) {
      const x = _[b];
      x in m || (m[x] = v[x].bind(m));
    }
  }
  const s = o?.Parent ?? Object;
  class d extends s {
  }
  Object.defineProperty(d, "name", { value: n });
  function f(m) {
    var h;
    const v = o?.Parent ? new d() : this;
    r(v, m), (h = v._zod).deferred ?? (h.deferred = []);
    for (const _ of v._zod.deferred)
      _();
    return v;
  }
  return Object.defineProperty(f, "init", { value: r }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class bi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Qh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(th = globalThis).__zod_globalConfig ?? (th.__zod_globalConfig = {});
const Tc = globalThis.__zod_globalConfig;
function Ea(n) {
  return Tc;
}
function Kh(n) {
  const i = Object.values(n).filter((r) => typeof r == "number");
  return Object.entries(n).filter(([r, s]) => i.indexOf(+r) === -1).map(([r, s]) => s);
}
function pc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function Ec(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Ac(n) {
  return n == null;
}
function Mc(n) {
  const i = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, o);
}
function S0(n, i) {
  const o = n / i, r = Math.round(o), s = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - r) < s ? 0 : o - r;
}
const nh = /* @__PURE__ */ Symbol("evaluating");
function Xe(n, i, o) {
  let r;
  Object.defineProperty(n, i, {
    get() {
      if (r !== nh)
        return r === void 0 && (r = nh, r = o()), r;
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
function Ma(n, i, o) {
  Object.defineProperty(n, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function In(...n) {
  const i = {};
  for (const o of n) {
    const r = Object.getOwnPropertyDescriptors(o);
    Object.assign(i, r);
  }
  return Object.defineProperties({}, i);
}
function ah(n) {
  return JSON.stringify(n);
}
function w0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Jh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Sr(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const z0 = /* @__PURE__ */ Ec(() => {
  if (Tc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Ol(n) {
  if (Sr(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const o = i.prototype;
  return !(Sr(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Ph(n) {
  return Ol(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const x0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function wi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ea(n, i, o) {
  const r = new n._zod.constr(i ?? n._zod.def);
  return (!i || o?.parent) && (r._zod.parent = n), r;
}
function de(n) {
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
function k0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const T0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function E0(n, i) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = In(n._zod.def, {
    get shape() {
      const f = {};
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (f[m] = o.shape[m]);
      }
      return Ma(this, "shape", f), f;
    },
    checks: []
  });
  return ea(n, d);
}
function A0(n, i) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = In(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete f[m];
      }
      return Ma(this, "shape", f), f;
    },
    checks: []
  });
  return ea(n, d);
}
function M0(n, i) {
  if (!Ol(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const d = n._zod.def.shape;
    for (const f in i)
      if (Object.getOwnPropertyDescriptor(d, f) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = In(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape, ...i };
      return Ma(this, "shape", d), d;
    }
  });
  return ea(n, s);
}
function j0(n, i) {
  if (!Ol(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = In(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i };
      return Ma(this, "shape", r), r;
    }
  });
  return ea(n, o);
}
function O0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const o = In(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i._zod.def.shape };
      return Ma(this, "shape", r), r;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return ea(n, o);
}
function C0(n, i, o) {
  const s = i._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const f = In(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, h = { ...m };
      if (o)
        for (const v in o) {
          if (!(v in m))
            throw new Error(`Unrecognized key: "${v}"`);
          o[v] && (h[v] = n ? new n({
            type: "optional",
            innerType: m[v]
          }) : m[v]);
        }
      else
        for (const v in m)
          h[v] = n ? new n({
            type: "optional",
            innerType: m[v]
          }) : m[v];
      return Ma(this, "shape", h), h;
    },
    checks: []
  });
  return ea(i, f);
}
function N0(n, i, o) {
  const r = In(i._zod.def, {
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
      return Ma(this, "shape", d), d;
    }
  });
  return ea(i, r);
}
function yi(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function D0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = i; o < n.issues.length; o++)
    if (n.issues[o]?.continue === !1)
      return !0;
  return !1;
}
function Wh(n, i) {
  return i.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(n), o;
  });
}
function dr(n) {
  return typeof n == "string" ? n : n?.message;
}
function Aa(n, i, o) {
  const r = n.message ? n.message : dr(n.inst?._zod.def?.error?.(n)) ?? dr(i?.error?.(n)) ?? dr(o.customError?.(n)) ?? dr(o.localeError?.(n)) ?? "Invalid input", { inst: s, continue: d, input: f, ...m } = n;
  return m.path ?? (m.path = []), m.message = r, i?.reportInput && (m.input = f), m;
}
function jc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Cl(...n) {
  const [i, o, r] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: o,
    inst: r
  } : { ...i };
}
const Fh = (n, i) => {
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
}, Ih = Z("$ZodError", Fh), ev = Z("$ZodError", Fh, { Parent: Error });
function R0(n, i = (o) => o.message) {
  const o = {}, r = [];
  for (const s of n.issues)
    s.path.length > 0 ? (o[s.path[0]] = o[s.path[0]] || [], o[s.path[0]].push(i(s))) : r.push(i(s));
  return { formErrors: r, fieldErrors: o };
}
function Z0(n, i = (o) => o.message) {
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
          let h = o, v = 0;
          for (; v < m.length; ) {
            const _ = m[v];
            v === m.length - 1 ? (h[_] = h[_] || { _errors: [] }, h[_]._errors.push(i(f))) : h[_] = h[_] || { _errors: [] }, h = h[_], v++;
          }
        }
      }
  };
  return r(n), o;
}
const Oc = (n) => (i, o, r, s) => {
  const d = r ? { ...r, async: !1 } : { async: !1 }, f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise)
    throw new bi();
  if (f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Aa(h, d, Ea())));
    throw Jh(m, s?.callee), m;
  }
  return f.value;
}, Cc = (n) => async (i, o, r, s) => {
  const d = r ? { ...r, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Aa(h, d, Ea())));
    throw Jh(m, s?.callee), m;
  }
  return f.value;
}, jr = (n) => (i, o, r) => {
  const s = r ? { ...r, async: !1 } : { async: !1 }, d = i._zod.run({ value: o, issues: [] }, s);
  if (d instanceof Promise)
    throw new bi();
  return d.issues.length ? {
    success: !1,
    error: new (n ?? Ih)(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, U0 = /* @__PURE__ */ jr(ev), Or = (n) => async (i, o, r) => {
  const s = r ? { ...r, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: o, issues: [] }, s);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new n(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, Y0 = /* @__PURE__ */ Or(ev), B0 = (n) => (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Oc(n)(i, o, s);
}, H0 = (n) => (i, o, r) => Oc(n)(i, o, r), X0 = (n) => async (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Cc(n)(i, o, s);
}, q0 = (n) => async (i, o, r) => Cc(n)(i, o, r), $0 = (n) => (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return jr(n)(i, o, s);
}, L0 = (n) => (i, o, r) => jr(n)(i, o, r), V0 = (n) => async (i, o, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Or(n)(i, o, s);
}, G0 = (n) => async (i, o, r) => Or(n)(i, o, r), Q0 = /^[cC][0-9a-z]{6,}$/, K0 = /^[0-9a-z]+$/, J0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, P0 = /^[0-9a-vA-V]{20}$/, W0 = /^[A-Za-z0-9]{27}$/, F0 = /^[a-zA-Z0-9_-]{21}$/, I0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, eb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ih = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, tb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, nb = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ab() {
  return new RegExp(nb, "u");
}
const ib = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, lb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ob = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, rb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ub = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, tv = /^[A-Za-z0-9_-]*$/, sb = /^https?$/, cb = /^\+[1-9]\d{6,14}$/, nv = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", db = /* @__PURE__ */ new RegExp(`^${nv}$`);
function av(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function fb(n) {
  return new RegExp(`^${av(n)}$`);
}
function mb(n) {
  const i = av({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${i}(?:${o.join("|")})`;
  return new RegExp(`^${nv}T(?:${r})$`);
}
const pb = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, hb = /^-?\d+$/, vb = /^-?\d+(?:\.\d+)?$/, yb = /^(?:true|false)$/i, gb = /^[^A-Z]*$/, _b = /^[^a-z]*$/, Mt = /* @__PURE__ */ Z("$ZodCheck", (n, i) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = i, (o = n._zod).onattach ?? (o.onattach = []);
}), iv = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, lv = /* @__PURE__ */ Z("$ZodCheckLessThan", (n, i) => {
  Mt.init(n, i);
  const o = iv[typeof i.value];
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
}), ov = /* @__PURE__ */ Z("$ZodCheckGreaterThan", (n, i) => {
  Mt.init(n, i);
  const o = iv[typeof i.value];
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
}), bb = /* @__PURE__ */ Z("$ZodCheckMultipleOf", (n, i) => {
  Mt.init(n, i), n._zod.onattach.push((o) => {
    var r;
    (r = o._zod.bag).multipleOf ?? (r.multipleOf = i.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % i.value === BigInt(0) : S0(o.value, i.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Sb = /* @__PURE__ */ Z("$ZodCheckNumberFormat", (n, i) => {
  Mt.init(n, i), i.format = i.format || "float64";
  const o = i.format?.includes("int"), r = o ? "int" : "number", [s, d] = T0[i.format];
  n._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = d, o && (m.pattern = hb);
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
}), wb = /* @__PURE__ */ Z("$ZodCheckMaxLength", (n, i) => {
  var o;
  Mt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ac(s) && s.length !== void 0;
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
}), zb = /* @__PURE__ */ Z("$ZodCheckMinLength", (n, i) => {
  var o;
  Mt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ac(s) && s.length !== void 0;
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
}), xb = /* @__PURE__ */ Z("$ZodCheckLengthEquals", (n, i) => {
  var o;
  Mt.init(n, i), (o = n._zod.def).when ?? (o.when = (r) => {
    const s = r.value;
    return !Ac(s) && s.length !== void 0;
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
}), Cr = /* @__PURE__ */ Z("$ZodCheckStringFormat", (n, i) => {
  var o, r;
  Mt.init(n, i), n._zod.onattach.push((s) => {
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
}), kb = /* @__PURE__ */ Z("$ZodCheckRegex", (n, i) => {
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
}), Tb = /* @__PURE__ */ Z("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = gb), Cr.init(n, i);
}), Eb = /* @__PURE__ */ Z("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = _b), Cr.init(n, i);
}), Ab = /* @__PURE__ */ Z("$ZodCheckIncludes", (n, i) => {
  Mt.init(n, i);
  const o = wi(i.includes), r = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${o}` : o);
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
}), Mb = /* @__PURE__ */ Z("$ZodCheckStartsWith", (n, i) => {
  Mt.init(n, i);
  const o = new RegExp(`^${wi(i.prefix)}.*`);
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
}), jb = /* @__PURE__ */ Z("$ZodCheckEndsWith", (n, i) => {
  Mt.init(n, i);
  const o = new RegExp(`.*${wi(i.suffix)}$`);
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
}), Ob = /* @__PURE__ */ Z("$ZodCheckOverwrite", (n, i) => {
  Mt.init(n, i), n._zod.check = (o) => {
    o.value = i.tx(o.value);
  };
});
class Cb {
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
const Nb = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ Z("$ZodType", (n, i) => {
  var o;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = Nb;
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
    const s = (f, m, h) => {
      let v = yi(f), _;
      for (const b of m) {
        if (b._zod.def.when) {
          if (D0(f) || !b._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const x = f.issues.length, T = b._zod.check(f);
        if (T instanceof Promise && h?.async === !1)
          throw new bi();
        if (_ || T instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await T, f.issues.length !== x && (v || (v = yi(f, x)));
          });
        else {
          if (f.issues.length === x)
            continue;
          v || (v = yi(f, x));
        }
      }
      return _ ? _.then(() => f) : f;
    }, d = (f, m, h) => {
      if (yi(f))
        return f.aborted = !0, f;
      const v = s(m, r, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new bi();
        return v.then((_) => n._zod.parse(_, h));
      }
      return n._zod.parse(v, h);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const v = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((_) => d(_, f, m)) : d(v, f, m);
      }
      const h = n._zod.parse(f, m);
      if (h instanceof Promise) {
        if (m.async === !1)
          throw new bi();
        return h.then((v) => s(v, r, m));
      }
      return s(h, r, m);
    };
  }
  Xe(n, "~standard", () => ({
    validate: (s) => {
      try {
        const d = U0(n, s);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return Y0(n, s).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Nc = /* @__PURE__ */ Z("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? pb(n._zod.bag), n._zod.parse = (o, r) => {
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
}), Ke = /* @__PURE__ */ Z("$ZodStringFormat", (n, i) => {
  Cr.init(n, i), Nc.init(n, i);
}), Db = /* @__PURE__ */ Z("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = eb), Ke.init(n, i);
}), Rb = /* @__PURE__ */ Z("$ZodUUID", (n, i) => {
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
    i.pattern ?? (i.pattern = ih(r));
  } else
    i.pattern ?? (i.pattern = ih());
  Ke.init(n, i);
}), Zb = /* @__PURE__ */ Z("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = tb), Ke.init(n, i);
}), Ub = /* @__PURE__ */ Z("$ZodURL", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    try {
      const r = o.value.trim();
      if (!i.normalize && i.protocol?.source === sb.source && !/^https?:\/\//i.test(r)) {
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
}), Yb = /* @__PURE__ */ Z("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = ab()), Ke.init(n, i);
}), Bb = /* @__PURE__ */ Z("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = F0), Ke.init(n, i);
}), Hb = /* @__PURE__ */ Z("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = Q0), Ke.init(n, i);
}), Xb = /* @__PURE__ */ Z("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = K0), Ke.init(n, i);
}), qb = /* @__PURE__ */ Z("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = J0), Ke.init(n, i);
}), $b = /* @__PURE__ */ Z("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = P0), Ke.init(n, i);
}), Lb = /* @__PURE__ */ Z("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = W0), Ke.init(n, i);
}), Vb = /* @__PURE__ */ Z("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = mb(i)), Ke.init(n, i);
}), Gb = /* @__PURE__ */ Z("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = db), Ke.init(n, i);
}), Qb = /* @__PURE__ */ Z("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = fb(i)), Ke.init(n, i);
}), Kb = /* @__PURE__ */ Z("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = I0), Ke.init(n, i);
}), Jb = /* @__PURE__ */ Z("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = ib), Ke.init(n, i), n._zod.bag.format = "ipv4";
}), Pb = /* @__PURE__ */ Z("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = lb), Ke.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
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
}), Wb = /* @__PURE__ */ Z("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = ob), Ke.init(n, i);
}), Fb = /* @__PURE__ */ Z("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = rb), Ke.init(n, i), n._zod.check = (o) => {
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
function rv(n) {
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
const Ib = /* @__PURE__ */ Z("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = ub), Ke.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    rv(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function e1(n) {
  if (!tv.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), o = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return rv(o);
}
const t1 = /* @__PURE__ */ Z("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = tv), Ke.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    e1(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), n1 = /* @__PURE__ */ Z("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = cb), Ke.init(n, i);
});
function a1(n, i = null) {
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
const i1 = /* @__PURE__ */ Z("$ZodJWT", (n, i) => {
  Ke.init(n, i), n._zod.check = (o) => {
    a1(o.value, i.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !i.abort
    });
  };
}), uv = /* @__PURE__ */ Z("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? vb, n._zod.parse = (o, r) => {
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
}), l1 = /* @__PURE__ */ Z("$ZodNumberFormat", (n, i) => {
  Sb.init(n, i), uv.init(n, i);
}), o1 = /* @__PURE__ */ Z("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = yb, n._zod.parse = (o, r) => {
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
}), r1 = /* @__PURE__ */ Z("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o) => o;
}), u1 = /* @__PURE__ */ Z("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, r) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
});
function lh(n, i, o) {
  n.issues.length && i.issues.push(...Wh(o, n.issues)), i.value[o] = n.value;
}
const s1 = /* @__PURE__ */ Z("$ZodArray", (n, i) => {
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
      const m = s[f], h = i.element._zod.run({
        value: m,
        issues: []
      }, r);
      h instanceof Promise ? d.push(h.then((v) => lh(v, o, f))) : lh(h, o, f);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function wr(n, i, o, r, s, d) {
  const f = o in r;
  if (n.issues.length) {
    if (s && d && !f)
      return;
    i.issues.push(...Wh(o, n.issues));
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
function sv(n) {
  const i = Object.keys(n.shape);
  for (const r of i)
    if (!n.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const o = k0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(o)
  };
}
function cv(n, i, o, r, s, d) {
  const f = [], m = s.keySet, h = s.catchall._zod, v = h.def.type, _ = h.optin === "optional", b = h.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || m.has(x))
      continue;
    if (v === "never") {
      f.push(x);
      continue;
    }
    const T = h.run({ value: i[x], issues: [] }, r);
    T instanceof Promise ? n.push(T.then((j) => wr(j, o, x, i, _, b))) : wr(T, o, x, i, _, b);
  }
  return f.length && o.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: i,
    inst: d
  }), n.length ? Promise.all(n).then(() => o) : o;
}
const c1 = /* @__PURE__ */ Z("$ZodObject", (n, i) => {
  if (Fe.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
    const m = i.shape;
    Object.defineProperty(i, "shape", {
      get: () => {
        const h = { ...m };
        return Object.defineProperty(i, "shape", {
          value: h
        }), h;
      }
    });
  }
  const r = Ec(() => sv(i));
  Xe(n._zod, "propValues", () => {
    const m = i.shape, h = {};
    for (const v in m) {
      const _ = m[v]._zod;
      if (_.values) {
        h[v] ?? (h[v] = /* @__PURE__ */ new Set());
        for (const b of _.values)
          h[v].add(b);
      }
    }
    return h;
  });
  const s = Sr, d = i.catchall;
  let f;
  n._zod.parse = (m, h) => {
    f ?? (f = r.value);
    const v = m.value;
    if (!s(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: n
      }), m;
    m.value = {};
    const _ = [], b = f.shape;
    for (const x of f.keys) {
      const T = b[x], j = T._zod.optin === "optional", Q = T._zod.optout === "optional", $ = T._zod.run({ value: v[x], issues: [] }, h);
      $ instanceof Promise ? _.push($.then((K) => wr(K, m, x, v, j, Q))) : wr($, m, x, v, j, Q);
    }
    return d ? cv(_, v, m, h, r.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), d1 = /* @__PURE__ */ Z("$ZodObjectJIT", (n, i) => {
  c1.init(n, i);
  const o = n._zod.parse, r = Ec(() => sv(i)), s = (x) => {
    const T = new Cb(["shape", "payload", "ctx"]), j = r.value, Q = (L) => {
      const G = ah(L);
      return `shape[${G}]._zod.run({ value: input[${G}], issues: [] }, ctx)`;
    };
    T.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let K = 0;
    for (const L of j.keys)
      $[L] = `key_${K++}`;
    T.write("const newResult = {};");
    for (const L of j.keys) {
      const G = $[L], q = ah(L), I = x[L], B = I?._zod?.optin === "optional", V = I?._zod?.optout === "optional";
      T.write(`const ${G} = ${Q(L)};`), B && V ? T.write(`
        if (${G}.issues.length) {
          if (${q} in input) {
            payload.issues = payload.issues.concat(${G}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${q}, ...iss.path] : [${q}]
            })));
          }
        }
        
        if (${G}.value === undefined) {
          if (${q} in input) {
            newResult[${q}] = undefined;
          }
        } else {
          newResult[${q}] = ${G}.value;
        }
        
      `) : B ? T.write(`
        if (${G}.issues.length) {
          payload.issues = payload.issues.concat(${G}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${q}, ...iss.path] : [${q}]
          })));
        }
        
        if (${G}.value === undefined) {
          if (${q} in input) {
            newResult[${q}] = undefined;
          }
        } else {
          newResult[${q}] = ${G}.value;
        }
        
      `) : T.write(`
        const ${G}_present = ${q} in input;
        if (${G}.issues.length) {
          payload.issues = payload.issues.concat(${G}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${q}, ...iss.path] : [${q}]
          })));
        }
        if (!${G}_present && !${G}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${q}]
          });
        }

        if (${G}_present) {
          if (${G}.value === undefined) {
            newResult[${q}] = undefined;
          } else {
            newResult[${q}] = ${G}.value;
          }
        }

      `);
    }
    T.write("payload.value = newResult;"), T.write("return payload;");
    const ae = T.compile();
    return (L, G) => ae(x, L, G);
  };
  let d;
  const f = Sr, m = !Tc.jitless, v = m && z0.value, _ = i.catchall;
  let b;
  n._zod.parse = (x, T) => {
    b ?? (b = r.value);
    const j = x.value;
    return f(j) ? m && v && T?.async === !1 && T.jitless !== !0 ? (d || (d = s(i.shape)), x = d(x, T), _ ? cv([], j, x, T, b, n) : x) : o(x, T) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: n
    }), x);
  };
});
function oh(n, i, o, r) {
  for (const d of n)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const s = n.filter((d) => !yi(d));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: o,
    errors: n.map((d) => d.issues.map((f) => Aa(f, r, Ea())))
  }), i);
}
const f1 = /* @__PURE__ */ Z("$ZodUnion", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Xe(n._zod, "optout", () => i.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Xe(n._zod, "values", () => {
    if (i.options.every((r) => r._zod.values))
      return new Set(i.options.flatMap((r) => Array.from(r._zod.values)));
  }), Xe(n._zod, "pattern", () => {
    if (i.options.every((r) => r._zod.pattern)) {
      const r = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => Mc(s.source)).join("|")})$`);
    }
  });
  const o = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (r, s) => {
    if (o)
      return o(r, s);
    let d = !1;
    const f = [];
    for (const m of i.options) {
      const h = m._zod.run({
        value: r.value,
        issues: []
      }, s);
      if (h instanceof Promise)
        f.push(h), d = !0;
      else {
        if (h.issues.length === 0)
          return h;
        f.push(h);
      }
    }
    return d ? Promise.all(f).then((m) => oh(m, r, n, s)) : oh(f, r, n, s);
  };
}), m1 = /* @__PURE__ */ Z("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (o, r) => {
    const s = o.value, d = i.left._zod.run({ value: s, issues: [] }, r), f = i.right._zod.run({ value: s, issues: [] }, r);
    return d instanceof Promise || f instanceof Promise ? Promise.all([d, f]).then(([h, v]) => rh(o, h, v)) : rh(o, d, f);
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
function rh(n, i, o) {
  const r = /* @__PURE__ */ new Map();
  let s;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const h of m.keys)
        r.has(h) || r.set(h, {}), r.get(h).l = !0;
    } else
      n.issues.push(m);
  for (const m of o.issues)
    if (m.code === "unrecognized_keys")
      for (const h of m.keys)
        r.has(h) || r.set(h, {}), r.get(h).r = !0;
    else
      n.issues.push(m);
  const d = [...r].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && s && n.issues.push({ ...s, keys: d }), yi(n))
    return n;
  const f = hc(i.value, o.value);
  if (!f.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
  return n.value = f.data, n;
}
const p1 = /* @__PURE__ */ Z("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const o = Kh(i.entries), r = new Set(o);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${o.filter((s) => x0.has(typeof s)).map((s) => typeof s == "string" ? wi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, d) => {
    const f = s.value;
    return r.has(f) || s.issues.push({
      code: "invalid_value",
      values: o,
      input: f,
      inst: n
    }), s;
  };
}), h1 = /* @__PURE__ */ Z("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(i.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${i.values.map((r) => typeof r == "string" ? wi(r) : r ? wi(r.toString()) : String(r)).join("|")})$`), n._zod.parse = (r, s) => {
    const d = r.value;
    return o.has(d) || r.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: n
    }), r;
  };
}), v1 = /* @__PURE__ */ Z("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Qh(n.constructor.name);
    const s = i.transform(o.value, o);
    if (r.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (o.value = f, o.fallback = !0, o));
    if (s instanceof Promise)
      throw new bi();
    return o.value = s, o.fallback = !0, o;
  };
});
function uh(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const dv = /* @__PURE__ */ Z("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Xe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Mc(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, r) => {
    if (i.innerType._zod.optin === "optional") {
      const s = o.value, d = i.innerType._zod.run(o, r);
      return d instanceof Promise ? d.then((f) => uh(f, s)) : uh(d, s);
    }
    return o.value === void 0 ? o : i.innerType._zod.run(o, r);
  };
}), y1 = /* @__PURE__ */ Z("$ZodExactOptional", (n, i) => {
  dv.init(n, i), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (o, r) => i.innerType._zod.run(o, r);
}), g1 = /* @__PURE__ */ Z("$ZodNullable", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.innerType._zod.optin), Xe(n._zod, "optout", () => i.innerType._zod.optout), Xe(n._zod, "pattern", () => {
    const o = i.innerType._zod.pattern;
    return o ? new RegExp(`^(${Mc(o.source)}|null)$`) : void 0;
  }), Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (o, r) => o.value === null ? o : i.innerType._zod.run(o, r);
}), _1 = /* @__PURE__ */ Z("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(o, r);
    if (o.value === void 0)
      return o.value = i.defaultValue, o;
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => sh(d, i)) : sh(s, i);
  };
});
function sh(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const b1 = /* @__PURE__ */ Z("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (o, r) => (r.direction === "backward" || o.value === void 0 && (o.value = i.defaultValue), i.innerType._zod.run(o, r));
}), S1 = /* @__PURE__ */ Z("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => {
    const o = i.innerType._zod.values;
    return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
  }), n._zod.parse = (o, r) => {
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => ch(d, n)) : ch(s, n);
  };
});
function ch(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const w1 = /* @__PURE__ */ Z("$ZodCatch", (n, i) => {
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
}), z1 = /* @__PURE__ */ Z("$ZodPipe", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => i.in._zod.values), Xe(n._zod, "optin", () => i.in._zod.optin), Xe(n._zod, "optout", () => i.out._zod.optout), Xe(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (o, r) => {
    if (r.direction === "backward") {
      const d = i.out._zod.run(o, r);
      return d instanceof Promise ? d.then((f) => fr(f, i.in, r)) : fr(d, i.in, r);
    }
    const s = i.in._zod.run(o, r);
    return s instanceof Promise ? s.then((d) => fr(d, i.out, r)) : fr(s, i.out, r);
  };
});
function fr(n, i, o) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, o);
}
const x1 = /* @__PURE__ */ Z("$ZodReadonly", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "propValues", () => i.innerType._zod.propValues), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "optin", () => i.innerType?._zod?.optin), Xe(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(o, r);
    const s = i.innerType._zod.run(o, r);
    return s instanceof Promise ? s.then(dh) : dh(s);
  };
});
function dh(n) {
  return n.value = Object.freeze(n.value), n;
}
const k1 = /* @__PURE__ */ Z("$ZodCustom", (n, i) => {
  Mt.init(n, i), Fe.init(n, i), n._zod.parse = (o, r) => o, n._zod.check = (o) => {
    const r = o.value, s = i.fn(r);
    if (s instanceof Promise)
      return s.then((d) => fh(d, o, r, n));
    fh(s, o, r, n);
  };
});
function fh(n, i, o, r) {
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
    r._zod.def.params && (s.params = r._zod.def.params), i.issues.push(Cl(s));
  }
}
var mh;
class T1 {
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
function E1() {
  return new T1();
}
(mh = globalThis).__zod_globalRegistry ?? (mh.__zod_globalRegistry = E1());
const kl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new n({
    type: "string",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ph(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function B1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function H1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function q1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function $1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function I1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function eS(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tS(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nS(n, i) {
  return new n({
    type: "boolean",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aS(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function iS(n, i) {
  return new n({
    type: "never",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hh(n, i) {
  return new lv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ac(n, i) {
  return new lv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function vh(n, i) {
  return new ov({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ic(n, i) {
  return new ov({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function yh(n, i) {
  return new bb({
    check: "multiple_of",
    ...de(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function fv(n, i) {
  return new wb({
    check: "max_length",
    ...de(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function zr(n, i) {
  return new zb({
    check: "min_length",
    ...de(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function mv(n, i) {
  return new xb({
    check: "length_equals",
    ...de(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function lS(n, i) {
  return new kb({
    check: "string_format",
    format: "regex",
    ...de(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function oS(n) {
  return new Tb({
    check: "string_format",
    format: "lowercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function rS(n) {
  return new Eb({
    check: "string_format",
    format: "uppercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function uS(n, i) {
  return new Ab({
    check: "string_format",
    format: "includes",
    ...de(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function sS(n, i) {
  return new Mb({
    check: "string_format",
    format: "starts_with",
    ...de(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function cS(n, i) {
  return new jb({
    check: "string_format",
    format: "ends_with",
    ...de(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function ki(n) {
  return new Ob({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function dS(n) {
  return /* @__PURE__ */ ki((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function fS() {
  return /* @__PURE__ */ ki((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function mS() {
  return /* @__PURE__ */ ki((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function pS() {
  return /* @__PURE__ */ ki((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function hS() {
  return /* @__PURE__ */ ki((n) => w0(n));
}
// @__NO_SIDE_EFFECTS__
function vS(n, i, o) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function yS(n, i, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...de(o)
  });
}
// @__NO_SIDE_EFFECTS__
function gS(n, i) {
  const o = /* @__PURE__ */ _S((r) => (r.addIssue = (s) => {
    if (typeof s == "string")
      r.issues.push(Cl(s, r.value, o._zod.def));
    else {
      const d = s;
      d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = o), d.continue ?? (d.continue = !o._zod.def.abort), r.issues.push(Cl(d));
    }
  }, n(r.value, r)), i);
  return o;
}
// @__NO_SIDE_EFFECTS__
function _S(n, i) {
  const o = new Mt({
    check: "custom",
    ...de(i)
  });
  return o._zod.check = n, o;
}
function pv(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? kl,
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
function vt(n, i, o = { path: [], schemaPath: [] }) {
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
      const x = f.schema, T = i.processors[s.type];
      if (!T)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      T(n, i, x, _);
    }
    const b = n._zod.parent;
    b && (f.ref || (f.ref = b), vt(b, i, _), i.seen.get(b).isParent = !0);
  }
  const h = i.metadataRegistry.get(n);
  return h && Object.assign(f.schema, h), i.io === "input" && bt(n) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((r = f.schema).default ?? (r.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(n).schema;
}
function hv(n, i) {
  const o = n.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const f of n.seen.entries()) {
    const m = n.metadataRegistry.get(f[0])?.id;
    if (m) {
      const h = r.get(m);
      if (h && h !== f[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(m, f[0]);
    }
  }
  const s = (f) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const b = n.external.registry.get(f[0])?.id, x = n.external.uri ?? ((j) => j);
      if (b)
        return { ref: x(b) };
      const T = f[1].defId ?? f[1].schema.id ?? `schema${n.counter++}`;
      return f[1].defId = T, { defId: T, ref: `${x("__shared")}#/${m}/${T}` };
    }
    if (f[1] === o)
      return { ref: "#" };
    const v = `#/${m}/`, _ = f[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: _, ref: v + _ };
  }, d = (f) => {
    if (f[1].schema.$ref)
      return;
    const m = f[1], { ref: h, defId: v } = s(f);
    m.def = { ...m.schema }, v && (m.defId = v);
    const _ = m.schema;
    for (const b in _)
      delete _[b];
    _.$ref = h;
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
      const v = n.external.registry.get(f[0])?.id;
      if (i !== f[0] && v) {
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
function vv(n, i) {
  const o = n.seen.get(i);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (m) => {
    const h = n.seen.get(m);
    if (h.ref === null)
      return;
    const v = h.def ?? h.schema, _ = { ...v }, b = h.ref;
    if (h.ref = null, b) {
      r(b);
      const T = n.seen.get(b), j = T.schema;
      if (j.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(j)) : Object.assign(v, j), Object.assign(v, _), m._zod.parent === b)
        for (const $ in v)
          $ === "$ref" || $ === "allOf" || $ in _ || delete v[$];
      if (j.$ref && T.def)
        for (const $ in v)
          $ === "$ref" || $ === "allOf" || $ in T.def && JSON.stringify(v[$]) === JSON.stringify(T.def[$]) && delete v[$];
    }
    const x = m._zod.parent;
    if (x && x !== b) {
      r(x);
      const T = n.seen.get(x);
      if (T?.schema.$ref && (v.$ref = T.schema.$ref, T.def))
        for (const j in v)
          j === "$ref" || j === "allOf" || j in T.def && JSON.stringify(v[j]) === JSON.stringify(T.def[j]) && delete v[j];
    }
    n.override({
      zodSchema: m,
      jsonSchema: v,
      path: h.path ?? []
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
    const h = m[1];
    h.def && h.defId && (h.def.id === h.defId && delete h.def.id, f[h.defId] = h.def);
  }
  n.external || Object.keys(f).length > 0 && (n.target === "draft-2020-12" ? s.$defs = f : s.definitions = f);
  try {
    const m = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: xr(i, "input", n.processors),
          output: xr(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function bt(n, i) {
  const o = i ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n))
    return !1;
  o.seen.add(n);
  const r = n._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return bt(r.element, o);
  if (r.type === "set")
    return bt(r.valueType, o);
  if (r.type === "lazy")
    return bt(r.getter(), o);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return bt(r.innerType, o);
  if (r.type === "intersection")
    return bt(r.left, o) || bt(r.right, o);
  if (r.type === "record" || r.type === "map")
    return bt(r.keyType, o) || bt(r.valueType, o);
  if (r.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : bt(r.in, o) || bt(r.out, o);
  if (r.type === "object") {
    for (const s in r.shape)
      if (bt(r.shape[s], o))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const s of r.options)
      if (bt(s, o))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const s of r.items)
      if (bt(s, o))
        return !0;
    return !!(r.rest && bt(r.rest, o));
  }
  return !1;
}
const bS = (n, i = {}) => (o) => {
  const r = pv({ ...o, processors: i });
  return vt(n, r), hv(r, n), vv(r, n);
}, xr = (n, i, o = {}) => (r) => {
  const { libraryOptions: s, target: d } = r ?? {}, f = pv({ ...s ?? {}, target: d, io: i, processors: o });
  return vt(n, f), hv(f, n), vv(f, n);
}, SS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, wS = (n, i, o, r) => {
  const s = o;
  s.type = "string";
  const { minimum: d, maximum: f, format: m, patterns: h, contentEncoding: v } = n._zod.bag;
  if (typeof d == "number" && (s.minLength = d), typeof f == "number" && (s.maxLength = f), m && (s.format = SS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), v && (s.contentEncoding = v), h && h.size > 0) {
    const _ = [...h];
    _.length === 1 ? s.pattern = _[0].source : _.length > 1 && (s.allOf = [
      ..._.map((b) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, zS = (n, i, o, r) => {
  const s = o, { minimum: d, maximum: f, format: m, multipleOf: h, exclusiveMaximum: v, exclusiveMinimum: _ } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const b = typeof _ == "number" && _ >= (d ?? Number.NEGATIVE_INFINITY), x = typeof v == "number" && v <= (f ?? Number.POSITIVE_INFINITY), T = i.target === "draft-04" || i.target === "openapi-3.0";
  b ? T ? (s.minimum = _, s.exclusiveMinimum = !0) : s.exclusiveMinimum = _ : typeof d == "number" && (s.minimum = d), x ? T ? (s.maximum = v, s.exclusiveMaximum = !0) : s.exclusiveMaximum = v : typeof f == "number" && (s.maximum = f), typeof h == "number" && (s.multipleOf = h);
}, xS = (n, i, o, r) => {
  o.type = "boolean";
}, kS = (n, i, o, r) => {
  o.not = {};
}, TS = (n, i, o, r) => {
}, ES = (n, i, o, r) => {
  const s = n._zod.def, d = Kh(s.entries);
  d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), o.enum = d;
}, AS = (n, i, o, r) => {
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
}, MS = (n, i, o, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, jS = (n, i, o, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, OS = (n, i, o, r) => {
  const s = o, d = n._zod.def, { minimum: f, maximum: m } = n._zod.bag;
  typeof f == "number" && (s.minItems = f), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = vt(d.element, i, {
    ...r,
    path: [...r.path, "items"]
  });
}, CS = (n, i, o, r) => {
  const s = o, d = n._zod.def;
  s.type = "object", s.properties = {};
  const f = d.shape;
  for (const v in f)
    s.properties[v] = vt(f[v], i, {
      ...r,
      path: [...r.path, "properties", v]
    });
  const m = new Set(Object.keys(f)), h = new Set([...m].filter((v) => {
    const _ = d.shape[v]._zod;
    return i.io === "input" ? _.optin === void 0 : _.optout === void 0;
  }));
  h.size > 0 && (s.required = Array.from(h)), d.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : d.catchall ? d.catchall && (s.additionalProperties = vt(d.catchall, i, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, NS = (n, i, o, r) => {
  const s = n._zod.def, d = s.inclusive === !1, f = s.options.map((m, h) => vt(m, i, {
    ...r,
    path: [...r.path, d ? "oneOf" : "anyOf", h]
  }));
  d ? o.oneOf = f : o.anyOf = f;
}, DS = (n, i, o, r) => {
  const s = n._zod.def, d = vt(s.left, i, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), f = vt(s.right, i, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), m = (v) => "allOf" in v && Object.keys(v).length === 1, h = [
    ...m(d) ? d.allOf : [d],
    ...m(f) ? f.allOf : [f]
  ];
  o.allOf = h;
}, RS = (n, i, o, r) => {
  const s = n._zod.def, d = vt(s.innerType, i, r), f = i.seen.get(n);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, ZS = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, US = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, o.default = JSON.parse(JSON.stringify(s.defaultValue));
}, YS = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, i.io === "input" && (o._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, BS = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = f;
}, HS = (n, i, o, r) => {
  const s = n._zod.def, d = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? d ? s.out : s.in : s.out;
  vt(f, i, r);
  const m = i.seen.get(n);
  m.ref = f;
}, XS = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, o.readOnly = !0;
}, yv = (n, i, o, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, qS = /* @__PURE__ */ Z("ZodISODateTime", (n, i) => {
  Vb.init(n, i), Je.init(n, i);
});
function $S(n) {
  return /* @__PURE__ */ P1(qS, n);
}
const LS = /* @__PURE__ */ Z("ZodISODate", (n, i) => {
  Gb.init(n, i), Je.init(n, i);
});
function VS(n) {
  return /* @__PURE__ */ W1(LS, n);
}
const GS = /* @__PURE__ */ Z("ZodISOTime", (n, i) => {
  Qb.init(n, i), Je.init(n, i);
});
function QS(n) {
  return /* @__PURE__ */ F1(GS, n);
}
const KS = /* @__PURE__ */ Z("ZodISODuration", (n, i) => {
  Kb.init(n, i), Je.init(n, i);
});
function JS(n) {
  return /* @__PURE__ */ I1(KS, n);
}
const PS = (n, i) => {
  Ih.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (o) => Z0(n, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => R0(n, o)
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
}, Jt = /* @__PURE__ */ Z("ZodError", PS, {
  Parent: Error
}), WS = /* @__PURE__ */ Oc(Jt), FS = /* @__PURE__ */ Cc(Jt), IS = /* @__PURE__ */ jr(Jt), e2 = /* @__PURE__ */ Or(Jt), t2 = /* @__PURE__ */ B0(Jt), n2 = /* @__PURE__ */ H0(Jt), a2 = /* @__PURE__ */ X0(Jt), i2 = /* @__PURE__ */ q0(Jt), l2 = /* @__PURE__ */ $0(Jt), o2 = /* @__PURE__ */ L0(Jt), r2 = /* @__PURE__ */ V0(Jt), u2 = /* @__PURE__ */ G0(Jt), gh = /* @__PURE__ */ new WeakMap();
function Ul(n, i, o) {
  const r = Object.getPrototypeOf(n);
  let s = gh.get(r);
  if (s || (s = /* @__PURE__ */ new Set(), gh.set(r, s)), !s.has(i)) {
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
const Ie = /* @__PURE__ */ Z("ZodType", (n, i) => (Fe.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: xr(n, "input"),
    output: xr(n, "output")
  }
}), n.toJSONSchema = bS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (o, r) => WS(n, o, r, { callee: n.parse }), n.safeParse = (o, r) => IS(n, o, r), n.parseAsync = async (o, r) => FS(n, o, r, { callee: n.parseAsync }), n.safeParseAsync = async (o, r) => e2(n, o, r), n.spa = n.safeParseAsync, n.encode = (o, r) => t2(n, o, r), n.decode = (o, r) => n2(n, o, r), n.encodeAsync = async (o, r) => a2(n, o, r), n.decodeAsync = async (o, r) => i2(n, o, r), n.safeEncode = (o, r) => l2(n, o, r), n.safeDecode = (o, r) => o2(n, o, r), n.safeEncodeAsync = async (o, r) => r2(n, o, r), n.safeDecodeAsync = async (o, r) => u2(n, o, r), Ul(n, "ZodType", {
  check(...o) {
    const r = this.def;
    return this.clone(In(r, {
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
    return ea(this, o, r);
  },
  brand() {
    return this;
  },
  register(o, r) {
    return o.add(this, r), this;
  },
  refine(o, r) {
    return this.check(tw(o, r));
  },
  superRefine(o, r) {
    return this.check(nw(o, r));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ ki(o));
  },
  optional() {
    return wh(this);
  },
  exactOptional() {
    return q2(this);
  },
  nullable() {
    return zh(this);
  },
  nullish() {
    return wh(zh(this));
  },
  nonoptional(o) {
    return K2(this, o);
  },
  array() {
    return gi(this);
  },
  or(o) {
    return bv([this, o]);
  },
  and(o) {
    return U2(this, o);
  },
  transform(o) {
    return xh(this, H2(o));
  },
  default(o) {
    return V2(this, o);
  },
  prefault(o) {
    return Q2(this, o);
  },
  catch(o) {
    return P2(this, o);
  },
  pipe(o) {
    return xh(this, o);
  },
  readonly() {
    return I2(this);
  },
  describe(o) {
    const r = this.clone();
    return kl.add(r, { description: o }), r;
  },
  meta(...o) {
    if (o.length === 0)
      return kl.get(this);
    const r = this.clone();
    return kl.add(r, o[0]), r;
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
    return kl.get(n)?.description;
  },
  configurable: !0
}), n)), gv = /* @__PURE__ */ Z("_ZodString", (n, i) => {
  Nc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => wS(n, r, s);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Ul(n, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ lS(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ uS(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ sS(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ cS(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ zr(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ fv(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ mv(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ zr(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ oS(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ rS(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ fS());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ dS(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ mS());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ pS());
    },
    slugify() {
      return this.check(/* @__PURE__ */ hS());
    }
  });
}), s2 = /* @__PURE__ */ Z("ZodString", (n, i) => {
  Nc.init(n, i), gv.init(n, i), n.email = (o) => n.check(/* @__PURE__ */ M1(c2, o)), n.url = (o) => n.check(/* @__PURE__ */ D1(d2, o)), n.jwt = (o) => n.check(/* @__PURE__ */ J1(T2, o)), n.emoji = (o) => n.check(/* @__PURE__ */ R1(f2, o)), n.guid = (o) => n.check(/* @__PURE__ */ ph(_h, o)), n.uuid = (o) => n.check(/* @__PURE__ */ j1(mr, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ O1(mr, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ C1(mr, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ N1(mr, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ Z1(m2, o)), n.guid = (o) => n.check(/* @__PURE__ */ ph(_h, o)), n.cuid = (o) => n.check(/* @__PURE__ */ U1(p2, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ Y1(h2, o)), n.ulid = (o) => n.check(/* @__PURE__ */ B1(v2, o)), n.base64 = (o) => n.check(/* @__PURE__ */ G1(z2, o)), n.base64url = (o) => n.check(/* @__PURE__ */ Q1(x2, o)), n.xid = (o) => n.check(/* @__PURE__ */ H1(y2, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ X1(g2, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ q1(_2, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ $1(b2, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ L1(S2, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ V1(w2, o)), n.e164 = (o) => n.check(/* @__PURE__ */ K1(k2, o)), n.datetime = (o) => n.check($S(o)), n.date = (o) => n.check(VS(o)), n.time = (o) => n.check(QS(o)), n.duration = (o) => n.check(JS(o));
});
function ht(n) {
  return /* @__PURE__ */ A1(s2, n);
}
const Je = /* @__PURE__ */ Z("ZodStringFormat", (n, i) => {
  Ke.init(n, i), gv.init(n, i);
}), c2 = /* @__PURE__ */ Z("ZodEmail", (n, i) => {
  Zb.init(n, i), Je.init(n, i);
}), _h = /* @__PURE__ */ Z("ZodGUID", (n, i) => {
  Db.init(n, i), Je.init(n, i);
}), mr = /* @__PURE__ */ Z("ZodUUID", (n, i) => {
  Rb.init(n, i), Je.init(n, i);
}), d2 = /* @__PURE__ */ Z("ZodURL", (n, i) => {
  Ub.init(n, i), Je.init(n, i);
}), f2 = /* @__PURE__ */ Z("ZodEmoji", (n, i) => {
  Yb.init(n, i), Je.init(n, i);
}), m2 = /* @__PURE__ */ Z("ZodNanoID", (n, i) => {
  Bb.init(n, i), Je.init(n, i);
}), p2 = /* @__PURE__ */ Z("ZodCUID", (n, i) => {
  Hb.init(n, i), Je.init(n, i);
}), h2 = /* @__PURE__ */ Z("ZodCUID2", (n, i) => {
  Xb.init(n, i), Je.init(n, i);
}), v2 = /* @__PURE__ */ Z("ZodULID", (n, i) => {
  qb.init(n, i), Je.init(n, i);
}), y2 = /* @__PURE__ */ Z("ZodXID", (n, i) => {
  $b.init(n, i), Je.init(n, i);
}), g2 = /* @__PURE__ */ Z("ZodKSUID", (n, i) => {
  Lb.init(n, i), Je.init(n, i);
}), _2 = /* @__PURE__ */ Z("ZodIPv4", (n, i) => {
  Jb.init(n, i), Je.init(n, i);
}), b2 = /* @__PURE__ */ Z("ZodIPv6", (n, i) => {
  Pb.init(n, i), Je.init(n, i);
}), S2 = /* @__PURE__ */ Z("ZodCIDRv4", (n, i) => {
  Wb.init(n, i), Je.init(n, i);
}), w2 = /* @__PURE__ */ Z("ZodCIDRv6", (n, i) => {
  Fb.init(n, i), Je.init(n, i);
}), z2 = /* @__PURE__ */ Z("ZodBase64", (n, i) => {
  Ib.init(n, i), Je.init(n, i);
}), x2 = /* @__PURE__ */ Z("ZodBase64URL", (n, i) => {
  t1.init(n, i), Je.init(n, i);
}), k2 = /* @__PURE__ */ Z("ZodE164", (n, i) => {
  n1.init(n, i), Je.init(n, i);
}), T2 = /* @__PURE__ */ Z("ZodJWT", (n, i) => {
  i1.init(n, i), Je.init(n, i);
}), _v = /* @__PURE__ */ Z("ZodNumber", (n, i) => {
  uv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => zS(n, r, s), Ul(n, "ZodNumber", {
    gt(r, s) {
      return this.check(/* @__PURE__ */ vh(r, s));
    },
    gte(r, s) {
      return this.check(/* @__PURE__ */ ic(r, s));
    },
    min(r, s) {
      return this.check(/* @__PURE__ */ ic(r, s));
    },
    lt(r, s) {
      return this.check(/* @__PURE__ */ hh(r, s));
    },
    lte(r, s) {
      return this.check(/* @__PURE__ */ ac(r, s));
    },
    max(r, s) {
      return this.check(/* @__PURE__ */ ac(r, s));
    },
    int(r) {
      return this.check(bh(r));
    },
    safe(r) {
      return this.check(bh(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ vh(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ ic(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ hh(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ ac(0, r));
    },
    multipleOf(r, s) {
      return this.check(/* @__PURE__ */ yh(r, s));
    },
    step(r, s) {
      return this.check(/* @__PURE__ */ yh(r, s));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function E2(n) {
  return /* @__PURE__ */ eS(_v, n);
}
const A2 = /* @__PURE__ */ Z("ZodNumberFormat", (n, i) => {
  l1.init(n, i), _v.init(n, i);
});
function bh(n) {
  return /* @__PURE__ */ tS(A2, n);
}
const M2 = /* @__PURE__ */ Z("ZodBoolean", (n, i) => {
  o1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => xS(n, o, r);
});
function kr(n) {
  return /* @__PURE__ */ nS(M2, n);
}
const j2 = /* @__PURE__ */ Z("ZodUnknown", (n, i) => {
  r1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => TS();
});
function Sh() {
  return /* @__PURE__ */ aS(j2);
}
const O2 = /* @__PURE__ */ Z("ZodNever", (n, i) => {
  u1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => kS(n, o, r);
});
function C2(n) {
  return /* @__PURE__ */ iS(O2, n);
}
const N2 = /* @__PURE__ */ Z("ZodArray", (n, i) => {
  s1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => OS(n, o, r, s), n.element = i.element, Ul(n, "ZodArray", {
    min(o, r) {
      return this.check(/* @__PURE__ */ zr(o, r));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ zr(1, o));
    },
    max(o, r) {
      return this.check(/* @__PURE__ */ fv(o, r));
    },
    length(o, r) {
      return this.check(/* @__PURE__ */ mv(o, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function gi(n, i) {
  return /* @__PURE__ */ vS(N2, n, i);
}
const D2 = /* @__PURE__ */ Z("ZodObject", (n, i) => {
  d1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => CS(n, o, r, s), Xe(n, "shape", () => i.shape), Ul(n, "ZodObject", {
    keyof() {
      return Nl(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({ ...this._zod.def, catchall: o });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Sh() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Sh() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: C2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(o) {
      return M0(this, o);
    },
    safeExtend(o) {
      return j0(this, o);
    },
    merge(o) {
      return O0(this, o);
    },
    pick(o) {
      return E0(this, o);
    },
    omit(o) {
      return A0(this, o);
    },
    partial(...o) {
      return C0(Sv, this, o[0]);
    },
    required(...o) {
      return N0(wv, this, o[0]);
    }
  });
});
function Si(n, i) {
  const o = {
    type: "object",
    shape: n ?? {},
    ...de(i)
  };
  return new D2(o);
}
const R2 = /* @__PURE__ */ Z("ZodUnion", (n, i) => {
  f1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => NS(n, o, r, s), n.options = i.options;
});
function bv(n, i) {
  return new R2({
    type: "union",
    options: n,
    ...de(i)
  });
}
const Z2 = /* @__PURE__ */ Z("ZodIntersection", (n, i) => {
  m1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => DS(n, o, r, s);
});
function U2(n, i) {
  return new Z2({
    type: "intersection",
    left: n,
    right: i
  });
}
const vc = /* @__PURE__ */ Z("ZodEnum", (n, i) => {
  p1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => ES(n, r, s), n.enum = i.entries, n.options = Object.values(i.entries);
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
      ...de(s),
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
      ...de(s),
      entries: d
    });
  };
});
function Nl(n, i) {
  const o = Array.isArray(n) ? Object.fromEntries(n.map((r) => [r, r])) : n;
  return new vc({
    type: "enum",
    entries: o,
    ...de(i)
  });
}
const Y2 = /* @__PURE__ */ Z("ZodLiteral", (n, i) => {
  h1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => AS(n, o, r), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function Tr(n, i) {
  return new Y2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...de(i)
  });
}
const B2 = /* @__PURE__ */ Z("ZodTransform", (n, i) => {
  v1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => jS(n, o), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Qh(n.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(Cl(d, o.value, i));
      else {
        const f = d;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = n), o.issues.push(Cl(f));
      }
    };
    const s = i.transform(o.value, o);
    return s instanceof Promise ? s.then((d) => (o.value = d, o.fallback = !0, o)) : (o.value = s, o.fallback = !0, o);
  };
});
function H2(n) {
  return new B2({
    type: "transform",
    transform: n
  });
}
const Sv = /* @__PURE__ */ Z("ZodOptional", (n, i) => {
  dv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => yv(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function wh(n) {
  return new Sv({
    type: "optional",
    innerType: n
  });
}
const X2 = /* @__PURE__ */ Z("ZodExactOptional", (n, i) => {
  y1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => yv(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function q2(n) {
  return new X2({
    type: "optional",
    innerType: n
  });
}
const $2 = /* @__PURE__ */ Z("ZodNullable", (n, i) => {
  g1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => RS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function zh(n) {
  return new $2({
    type: "nullable",
    innerType: n
  });
}
const L2 = /* @__PURE__ */ Z("ZodDefault", (n, i) => {
  _1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => US(n, o, r, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function V2(n, i) {
  return new L2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Ph(i);
    }
  });
}
const G2 = /* @__PURE__ */ Z("ZodPrefault", (n, i) => {
  b1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => YS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function Q2(n, i) {
  return new G2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Ph(i);
    }
  });
}
const wv = /* @__PURE__ */ Z("ZodNonOptional", (n, i) => {
  S1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => ZS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function K2(n, i) {
  return new wv({
    type: "nonoptional",
    innerType: n,
    ...de(i)
  });
}
const J2 = /* @__PURE__ */ Z("ZodCatch", (n, i) => {
  w1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => BS(n, o, r, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function P2(n, i) {
  return new J2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const W2 = /* @__PURE__ */ Z("ZodPipe", (n, i) => {
  z1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => HS(n, o, r, s), n.in = i.in, n.out = i.out;
});
function xh(n, i) {
  return new W2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const F2 = /* @__PURE__ */ Z("ZodReadonly", (n, i) => {
  x1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => XS(n, o, r, s), n.unwrap = () => n._zod.def.innerType;
});
function I2(n) {
  return new F2({
    type: "readonly",
    innerType: n
  });
}
const ew = /* @__PURE__ */ Z("ZodCustom", (n, i) => {
  k1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (o, r, s) => MS(n, o);
});
function tw(n, i = {}) {
  return /* @__PURE__ */ yS(ew, n, i);
}
function nw(n, i) {
  return /* @__PURE__ */ gS(n, i);
}
const Er = ht().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Ce = Er.optional(), aw = Si({
  segment_id: E2().int().nonnegative(),
  area_id: ht().min(1).optional(),
  name: ht().min(1),
  icon: ht().optional(),
  include_in_floor_clean: kr().optional().default(!0)
}).passthrough(), iw = Si({
  id: ht().min(1),
  name: ht().min(1),
  map_entity: Er,
  map_select_option: ht().min(1).optional(),
  vacuum_then_mop_routine: Er.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: kr().optional().default(!1),
  rooms: gi(aw).min(1)
}).passthrough(), lw = Si({
  id: ht().min(1),
  name: ht().min(1),
  icon: ht().optional(),
  strategy: Nl(["custom", "smartplan"]),
  cleaning_type: Nl(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: ht().optional(),
  mop_mode: ht().optional(),
  mop_intensity: ht().optional(),
  cleaning_count: bv([Tr(1), Tr(2)]).optional()
}).passthrough(), zv = Si({
  type: Tr("custom:roborock-vacuum-map-card").optional(),
  entity: Er.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: ht().optional(),
  language: Nl(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: Si({
    map_select: Ce,
    cleaning_mode: Ce,
    vacuum_then_mop_script: Ce,
    mop_mode: Ce,
    mop_intensity: Ce,
    dock_mop_drying: Ce,
    dock_mop_drying_remaining_time: Ce,
    dock_child_lock: Ce,
    dock_mop_wash_frequency: Ce,
    dock_wash_mode: Ce,
    dock_wash_temperature: Ce,
    dock_auto_empty: Ce,
    dock_empty_mode: Ce,
    dock_auto_dry: Ce,
    dock_dry_duration: Ce,
    assisted_carry_stage: Ce,
    assisted_carry_job: Ce,
    assisted_carry_prepare_script: Ce,
    assisted_carry_start_script: Ce,
    assisted_carry_finish_script: Ce,
    water_shortage: Ce,
    mop_attached: Ce,
    water_box_attached: Ce,
    do_not_disturb: Ce,
    battery: Ce,
    current_room: Ce,
    cleaning_area: Ce,
    cleaning_time: Ce,
    cleaning_progress: Ce,
    status: Ce,
    error: Ce,
    last_clean_end: Ce
  }).passthrough().optional().default({}),
  floors: gi(iw).min(1),
  presets: gi(lw).optional().default([]),
  default_preset: ht().optional().default("vacuum_only"),
  vacuum_mode_fallback: Tr("set_clean_motor_mode").optional(),
  enable_mop_only: kr().optional().default(!1),
  mop_routes: Si({
    vacuum_and_mop: gi(ht().min(1)).min(1).optional(),
    mop: gi(ht().min(1)).min(1).optional()
  }).optional(),
  enable_smartplan: kr().optional(),
  cleaning_count_command: Nl(["set_clean_repeat_times", "app_segment_clean"]).optional()
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
    for (const [h, v] of f.rooms.entries())
      m.has(v.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", d, "rooms", h, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(v.segment_id);
  }
  const s = /* @__PURE__ */ new Set(["vacuum_only", "mop_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [d, f] of n.presets.entries())
    s.has(f.id) && i.addIssue({ code: "custom", path: ["presets", d, "id"], message: "Preset IDs must be unique" }), s.add(f.id);
  n.default_preset && !s.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function ow(n) {
  return zv.parse(n);
}
function rw(n) {
  const i = zv.safeParse(n);
  return i.success ? [] : i.error.issues.map((o) => `${o.path.join(".") || "config"}: ${o.message}`);
}
function xv() {
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
function pr(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function kv(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((o) => {
    const r = o;
    return !pr(r.vacuum?.x) || !pr(r.vacuum?.y) || !pr(r.map?.x) || !pr(r.map?.y) ? [] : [r];
  }) : [];
}
function Tv(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((r, s) => [String(s), r]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([r, s]) => {
    if (!s || typeof s != "object") return [];
    const d = s, f = d.number ?? d.room_id ?? d.segment_id ?? r, m = Number(f), h = Number(d.x0), v = Number(d.y0), _ = Number(d.x1), b = Number(d.y1);
    return [m, h, v, _, b].every(Number.isFinite) ? [
      {
        segment_id: m,
        source_name: typeof d.name == "string" ? d.name : `Room ${m}`,
        x0: h,
        y0: v,
        x1: _,
        y1: b
      }
    ] : [];
  }) : [];
}
function Tl(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = o, f = s.vacuum.x - r.vacuum.x, m = s.vacuum.y - r.vacuum.y, h = d.vacuum.x - r.vacuum.x, v = d.vacuum.y - r.vacuum.y, _ = f * v - m * h;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.vacuum.x, x = i - r.vacuum.y, T = (b * v - x * h) / _, j = (f * x - m * b) / _;
  return {
    x: r.map.x + T * (s.map.x - r.map.x) + j * (d.map.x - r.map.x),
    y: r.map.y + T * (s.map.y - r.map.y) + j * (d.map.y - r.map.y)
  };
}
function hr(n, i, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = o, f = s.map.x - r.map.x, m = s.map.y - r.map.y, h = d.map.x - r.map.x, v = d.map.y - r.map.y, _ = f * v - m * h;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.map.x, x = i - r.map.y, T = (b * v - x * h) / _, j = (f * x - m * b) / _;
  return {
    x: r.vacuum.x + T * (s.vacuum.x - r.vacuum.x) + j * (d.vacuum.x - r.vacuum.x),
    y: r.vacuum.y + T * (s.vacuum.y - r.vacuum.y) + j * (d.vacuum.y - r.vacuum.y)
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
function uw(n, i) {
  const o = Ml(n), r = [
    hr(o.x1, o.y1, i),
    hr(o.x2, o.y1, i),
    hr(o.x2, o.y2, i),
    hr(o.x1, o.y2, i)
  ], s = r.map(({ x: f }) => f), d = r.map(({ y: f }) => f);
  return {
    x1: Math.round(Math.min(...s)),
    y1: Math.round(Math.min(...d)),
    x2: Math.round(Math.max(...s)),
    y2: Math.round(Math.max(...d))
  };
}
function sw(n, i) {
  return `${[
    Tl(n.x0, n.y0, i),
    Tl(n.x1, n.y0, i),
    Tl(n.x1, n.y1, i),
    Tl(n.x0, n.y1, i)
  ].map((r, s) => `${s === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function cw(n, i) {
  return Tl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function dw(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
const fw = "https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml", mw = { tested: "tested", community: "community-tested", experimental: "experimental, please report results" };
function pw({ hass: n, config: i }) {
  const { profile: o, model: r } = kc(n, i);
  return o ? /* @__PURE__ */ g.jsxs("p", { className: "editor-hint", children: [
    "Model profile: ",
    o.label,
    " (",
    mw[o.status],
    ")."
  ] }) : r ? /* @__PURE__ */ g.jsxs("p", { className: "editor-hint", children: [
    "No profile for ",
    r,
    " yet; options are detected from Home Assistant. ",
    /* @__PURE__ */ g.jsx("a", { href: fw, target: "_blank", rel: "noreferrer", children: "Report your model" })
  ] }) : null;
}
function vr(n, i, o) {
  const r = [...n], [s] = r.splice(i, 1);
  return r.splice(o, 0, s), r;
}
function hw(n, i) {
  return Object.keys(n.states).filter((o) => o.startsWith(`${i}.`)).sort();
}
function yr({
  hass: n,
  domain: i,
  value: o,
  optional: r,
  onChange: s
}) {
  return /* @__PURE__ */ g.jsxs("select", { value: o ?? "", onChange: (d) => s(d.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: r ? "Not configured" : `Select ${i}` }),
    hw(n, i).map((d) => /* @__PURE__ */ g.jsx("option", { children: d }, d))
  ] });
}
function vw({
  areas: n,
  value: i,
  onChange: o
}) {
  const r = le.useRef(null), [s, d] = le.useState(() => !!customElements.get("ha-area-picker"));
  return le.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => d(!0));
  }, [s]), le.useEffect(() => {
    const f = r.current;
    if (!f) return;
    f.value = i, f.noAdd = !0;
    const m = (h) => o(h.detail.value || void 0);
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
function yw({ hass: n, config: i, onChange: o }) {
  const r = rw(i), s = (m, h) => {
    const v = [...i.floors];
    v[m] = h, o({ ...i, floors: v });
  }, d = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], f = Object.values(n.areas ?? {}).sort((m, h) => m.name.localeCompare(h.name));
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
        /* @__PURE__ */ g.jsx(yr, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && o({ ...i, entity: m }) })
      ] }),
      /* @__PURE__ */ g.jsx(pw, { hass: n, config: i })
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
      ].map(([m, h, v]) => /* @__PURE__ */ g.jsxs("label", { children: [
        v,
        /* @__PURE__ */ g.jsx(yr, { hass: n, domain: h, optional: !0, value: i.entities?.[m], onChange: (_) => o({ ...i, entities: { ...i.entities, [m]: _ } }) })
      ] }, m)),
      i.vacuum_mode_fallback && /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => o({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use deprecated Vacuum-mode fallback (Home Assistant 2026.7 and older; untick to remove)"
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
      i.floors.map((m, h) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name || `Floor ${h + 1}` }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: h === 0, onClick: () => o({ ...i, floors: vr(i.floors, h, h - 1) }), children: /* @__PURE__ */ g.jsx(Kp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: h === i.floors.length - 1, onClick: () => o({ ...i, floors: vr(i.floors, h, h + 1) }), children: /* @__PURE__ */ g.jsx(Qp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => o({ ...i, floors: i.floors.filter((v, _) => _ !== h) }), children: /* @__PURE__ */ g.jsx(br, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ g.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ g.jsx("input", { value: m.id, onChange: (v) => s(h, { ...m, id: v.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: m.name, onChange: (v) => s(h, { ...m, name: v.target.value }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ g.jsx(yr, { hass: n, domain: "image", value: m.map_entity, onChange: (v) => {
              if (!v) return;
              const _ = Tv(n.states[v]), b = new Map(m.rooms.map((T) => [T.segment_id, T])), x = _.map((T) => ({
                ...b.get(T.segment_id),
                segment_id: T.segment_id,
                name: b.get(T.segment_id)?.name ?? T.source_name,
                include_in_floor_clean: b.get(T.segment_id)?.include_in_floor_clean ?? !0
              }));
              s(h, { ...m, map_entity: v, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ g.jsxs("select", { value: m.map_select_option ?? "", onChange: (v) => s(h, { ...m, map_select_option: v.target.value || void 0 }), children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "Not configured" }),
              d.map((v) => /* @__PURE__ */ g.jsx("option", { children: v }, v))
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ g.jsx(yr, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (v) => s(h, { ...m, vacuum_then_mop_routine: v }) })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (v) => s(h, { ...m, assisted_carry: v.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ g.jsx("h4", { children: "Discovered rooms" }),
        m.rooms.length === 0 ? /* @__PURE__ */ g.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ g.jsx("div", { className: "room-editor-list", children: m.rooms.map((v, _) => /* @__PURE__ */ g.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ g.jsxs("strong", { children: [
            "Segment ",
            v.segment_id
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ g.jsx("input", { value: v.name, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, name: b.target.value }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ g.jsx(vw, { areas: f, value: v.area_id, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, area_id: b }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ g.jsx("input", { value: v.icon ?? "", placeholder: "mdi:floor-plan", onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, icon: b.target.value || void 0 }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: v.include_in_floor_clean !== !1, onChange: (b) => {
              const x = [...m.rooms];
              x[_] = { ...v, include_in_floor_clean: b.target.checked }, s(h, { ...m, rooms: x });
            } }),
            " Include in Entire floor"
          ] })
        ] }, v.segment_id)) })
      ] }, `${m.id}-${h}`))
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
      (i.presets ?? []).map((m, h) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: h === 0, onClick: () => o({ ...i, presets: vr(i.presets ?? [], h, h - 1) }), children: /* @__PURE__ */ g.jsx(Kp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: h === (i.presets?.length ?? 0) - 1, onClick: () => o({ ...i, presets: vr(i.presets ?? [], h, h + 1) }), children: /* @__PURE__ */ g.jsx(Qp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => o({ ...i, presets: (i.presets ?? []).filter((v, _) => _ !== h) }), children: /* @__PURE__ */ g.jsx(br, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((v) => /* @__PURE__ */ g.jsxs("label", { children: [
            v.replaceAll("_", " "),
            /* @__PURE__ */ g.jsx("input", { value: m[v] ?? "", onChange: (_) => {
              const b = [...i.presets ?? []];
              b[h] = { ...m, [v]: _.target.value || void 0 }, o({ ...i, presets: b });
            } })
          ] }, v)),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ g.jsxs("select", { value: m.strategy, onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, strategy: v.target.value }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, cleaning_type: v.target.value }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ g.jsx("option", { value: "mop", children: "Mop only" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (v) => {
              const _ = [...i.presets ?? []];
              _[h] = { ...m, cleaning_count: Number(v.target.value) }, o({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ g.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${h}`)),
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
const gw = /* @__PURE__ */ new Set([
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
function _w(n, i) {
  return n.floors.find((o) => o.assisted_carry && o.id === i?.floor_id) ?? n.floors.find((o) => o.assisted_carry);
}
function bw(n, i) {
  const o = i.entities?.assisted_carry_stage, r = o ? n.states[o]?.state : void 0;
  return r && gw.has(r) ? r : "idle";
}
function Sw(n) {
  return !["idle", "complete", "error"].includes(n);
}
function ww(n, i, o) {
  const r = o.cleaning_type === "vacuum_then_mop", s = o.cleaning_type === "mop";
  if (o.strategy !== "smartplan" && !r && !s && !o.fan_speed)
    throw new Dl("prepare", "Suction is required");
  if (o.strategy !== "smartplan" && !r && o.cleaning_type !== "vacuum" && (!o.mop_mode || !o.mop_intensity))
    throw new Dl("prepare", "Water flow and route are required");
  const d = [...new Set(i)], f = n.rooms.filter((h) => d.includes(h.segment_id)), m = n.rooms.filter((h) => h.include_in_floor_clean !== !1 && h.area_id).map((h) => h.segment_id);
  return {
    segment_ids: d,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: f.map((h) => h.area_id).filter((h) => !!h),
    whole_floor: d.length === m.length && m.every((h) => d.includes(h)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: o.strategy,
    cleaning_type: o.cleaning_type,
    fan_speed: o.strategy === "smartplan" || r || s ? void 0 : o.fan_speed,
    mop_mode: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_mode,
    mop_intensity: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_intensity,
    cleaning_count: o.strategy === "smartplan" || o.cleaning_type === "vacuum_then_mop" ? 1 : o.cleaning_count
  };
}
function zw(n) {
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
function xw(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((h) => Number.isInteger(h)) || ![1, 2].includes(Number(i.c))) return;
      const o = i.g === void 0 ? "custom" : i.g, r = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(o)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(r))) return;
      const s = typeof i.f == "string" ? i.f : void 0, d = typeof i.m == "string" ? i.m : void 0, f = typeof i.w == "string" ? i.w : void 0, m = r === "vacuum_then_mop";
      return o === "custom" && !m && r !== "mop" && !s || o === "custom" && !m && r !== "vacuum" && (!d || !f) ? void 0 : {
        segment_ids: i.s,
        floor_id: typeof i.d == "string" ? i.d : void 0,
        map_select_option: typeof i.o == "string" ? i.o : void 0,
        area_ids: Array.isArray(i.a) && i.a.every((h) => typeof h == "string") ? i.a : void 0,
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
function zi(n, i, o) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new Dl(o, `${i ?? "entity"} is unavailable`);
  return i;
}
async function _i(n, i, o) {
  const r = zi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: o }, { entity_id: r });
}
async function kw(n, i, o) {
  const r = zi(n, i.entities?.assisted_carry_job, "save_job"), s = zi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: zw(o) }, { entity_id: r }), await _i(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function Tw(n, i, o, r) {
  const s = zi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), d = o.rooms.filter((m) => r.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
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
async function Ew(n, i) {
  const o = zi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: o });
}
async function kh(n, i) {
  await _i(n, i, "idle");
  const o = zi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: o });
}
const Aw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, Mw = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, jw = {
  normal: 0,
  warm: 1,
  hot: 2
}, Ow = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, Cw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class Tn extends Error {
  constructor(i, o, r) {
    super(o, r), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function en(n, i, o, r) {
  const s = { command: o };
  r !== void 0 && (s.params = r), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function gr(n, i, o) {
  const r = n[i];
  if (r === void 0) throw new Tn(o, `Unsupported value: ${i}`);
  return r;
}
function Nw(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new Tn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function Dw(n, i, o, r) {
  const s = i.entities?.[Aw[o]];
  if (!s) return;
  const d = s.split(".")[0];
  if (typeof r == "boolean") {
    if (!["input_boolean", "switch"].includes(d))
      throw new Tn(o, `${s} is not a boolean helper`);
    await n.callService(d, r ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(d))
    throw new Tn(o, `${s} is not a select helper`);
  await n.callService(d, "select_option", { option: r }, { entity_id: s });
}
async function Rw(n, i, o, r) {
  try {
    switch (o) {
      case "mop_wash_frequency":
        await en(n, i, "set_smart_wash_params", Nw(String(r)));
        break;
      case "wash_mode":
        await en(n, i, "set_wash_towel_mode", {
          wash_mode: gr(Mw, String(r), o)
        });
        break;
      case "wash_temperature":
        await en(n, i, "set_wash_water_temperature", {
          values: gr(jw, String(r), o)
        });
        break;
      case "auto_empty":
        await en(n, i, "set_dust_collection_switch_status", { status: r ? 1 : 0 });
        break;
      case "empty_mode":
        await en(n, i, "set_dust_collection_mode", {
          mode: gr(Ow, String(r), o)
        });
        break;
      case "auto_dry":
        await en(n, i, "app_set_dryer_setting", { status: r ? 1 : 0 });
        break;
      case "dry_duration":
        await en(n, i, "app_set_dryer_setting", {
          on: { dry_time: gr(Cw, String(r), o) }
        });
        break;
    }
    await Dw(n, i, o, r);
  } catch (s) {
    throw s instanceof Tn ? s : new Tn(o, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function lc(n, i, o, r = !1) {
  const s = `${r ? "stop" : "start"}_${o}`;
  try {
    o === "empty" && await en(n, i, r ? "app_stop_collect_dust" : "app_start_collect_dust"), o === "wash" && await en(n, i, r ? "app_stop_wash" : "app_start_wash"), o === "dry" && await en(n, i, "app_set_dryer_status", { status: r ? 0 : 1 }), o === "drain" && await en(n, i, "app_empty_rinse_tank_water");
  } catch (d) {
    throw new Tn(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
const Zw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), gc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), Uw = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Me extends Error {
  constructor(i, o, r) {
    super(o, r), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function Yw(n, i, o, r, s, d) {
  const f = Date.now();
  for (; Date.now() - f < r; ) {
    if (n().states[i]?.state === o) return;
    await d(s);
  }
  throw new Me("wait_for_state", `${i} did not become “${o}” within ${r / 1e3}s`);
}
function El(n, i, o, r) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new Me(r, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(o)) throw new Me(r, `${i} does not support “${o}”`);
}
async function wl(n, i, o, r, s, d, f, m = !0) {
  const h = n();
  if (El(h, i, o, r), h.states[i]?.state !== o)
    try {
      if (await h.callService("select", "select_option", { option: o }, { entity_id: i }), !m) return;
      await Yw(n, i, o, s, d, f);
    } catch (v) {
      throw v instanceof Me ? new Me(r, v.message, { cause: v }) : new Me(r, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function Bw(n, i) {
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
    throw new Me("set_cleaning_mode", r instanceof Error ? r.message : String(r), { cause: r });
  }
}
async function Dc(n, i, o, r, s) {
  try {
    await n.callService("vacuum", "send_command", { command: o, params: r }, { entity_id: i.entity });
  } catch (d) {
    throw new Me(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
async function Th(n, i, o) {
  await Dc(n, i, "set_clean_repeat_times", { repeat: o }, "set_cleaning_count");
}
async function Hw(n, i) {
  await Dc(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function Eh(n, i, o) {
  const r = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(r) ? r.map(String) : []).includes(o))
    throw new Me("set_fan_speed", `${i} does not support “${o}”`);
}
async function Xw({
  getHass: n,
  config: i,
  floor: o,
  rooms: r,
  draft: s,
  zone: d,
  timeoutMs: f = 1e4,
  pollMs: m = 150,
  sleep: h = (v) => new Promise((_) => setTimeout(_, v))
}) {
  const v = n(), _ = kc(v, i), b = v.states[i.entity];
  if (!b || b.state === "unavailable") throw new Me("preflight", `${i.entity} is unavailable`);
  if (_0(b.state)) throw new Me("preflight", `Vacuum is ${b.state}`);
  const x = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (x && !["none", "unknown", "unavailable", ""].includes(x.state))
    throw new Me("preflight", `Vacuum error: ${x.state}`);
  const T = [...new Set(r.map((q) => q.area_id).filter((q) => !!q))];
  if (!d && T.length === 0) throw new Me("preflight", "Select at least one room mapped to a Home Assistant area");
  if (s.cleaning_type === "mop" && !i.enable_mop_only)
    throw new Me("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const j = s.cleaning_type === "mop" ? "mop" : s.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, Q = j ? _.mopRoutes?.[j] : void 0;
  if (s.mop_mode && Q && !Q.includes(s.mop_mode))
    throw new Me("preflight", `Mop route “${s.mop_mode}” is not allowed for ${j}`);
  if (s.strategy === "smartplan" && !_.hasSmartPlan)
    throw new Me("preflight", "This model does not offer AI SmartPlan");
  if (d && (s.strategy !== "custom" || !gc.has(s.cleaning_type)))
    throw new Me("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (d && (![d.x1, d.y1, d.x2, d.y2].every(Number.isFinite) || d.x2 <= d.x1 || d.y2 <= d.y1))
    throw new Me("preflight", "The selected zone is invalid");
  const $ = i.entities?.map_select, K = async () => {
    if (!(i.floors.length <= 1)) {
      if (!$ || !o.map_select_option) throw new Me("select_floor", "This floor has no map selector mapping");
      if (await wl(n, $, o.map_select_option, "select_floor", f, m, h), m > 0 && await h(m), n().states[$]?.state !== o.map_select_option)
        throw new Me("select_floor", `${$} did not stay on “${o.map_select_option}”`);
    }
  };
  if (await K(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const q = o.vacuum_then_mop_routine;
    if (q) {
      const J = n().states[q];
      if (!J || J.state === "unavailable")
        throw new Me("start_vacuum_then_mop", `${q} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: q });
      } catch (re) {
        throw new Me("start_vacuum_then_mop", re instanceof Error ? re.message : String(re), { cause: re });
      }
      return o.rooms.filter((re) => re.include_in_floor_clean !== !1).map((re) => re.area_id).filter((re) => !!re);
    }
    const I = i.entities?.vacuum_then_mop_script, B = I ? n().states[I] : void 0;
    if (!I || !B || B.state === "unavailable")
      throw new Me("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const V = i.entities?.cleaning_mode;
    if (!V)
      throw new Me("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (El(n(), V, "vacuum", "set_cleaning_mode"), El(n(), V, "mop", "set_cleaning_mode"), s.mop_mode) {
      const J = i.entities?.mop_mode;
      if (!J) throw new Me("set_mop_mode", "The selected profile requires a mop-mode entity");
      El(n(), J, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const J = i.entities?.mop_intensity;
      if (!J) throw new Me("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      El(n(), J, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && Eh(n(), i.entity, s.fan_speed), await K();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: T,
            fan_speed: s.fan_speed,
            mop_mode: s.mop_mode,
            mop_intensity: s.mop_intensity
          }
        },
        { entity_id: I }
      );
    } catch (J) {
      throw new Me("start_vacuum_then_mop", J instanceof Error ? J.message : String(J), { cause: J });
    }
    return T;
  }
  if (s.strategy === "smartplan")
    await Hw(n(), i), _.roomRepeatStrategy === "set_clean_repeat_times" && await Th(n(), i, 1);
  else {
    const q = i.entities?.cleaning_mode, I = Uw[s.cleaning_type], B = q && n().states[q]?.attributes.options;
    if (q && Array.isArray(B) && B.map(String).includes(I))
      await wl(
        n,
        q,
        I,
        "set_cleaning_mode",
        f,
        m,
        h,
        I === "vacuum"
      );
    else if (s.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await Bw(n(), i);
    else {
      if (s.cleaning_type === "vacuum")
        throw new Me("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (s.cleaning_type === "mop")
        throw new Me("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const V = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!V) throw new Me("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[V]?.state === "smart_mode" && Zw.has(s.mop_mode) && await wl(n, V, "custom", "leave_smartplan", f, m, h), await wl(n, V, s.mop_mode, "set_mop_mode", f, m, h);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const J = i.entities?.mop_intensity;
      if (!J) throw new Me("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await wl(n, J, s.mop_intensity, "set_mop_intensity", f, m, h);
    }
    if (s.fan_speed && s.cleaning_type !== "mop") {
      const J = n();
      Eh(J, i.entity, s.fan_speed);
      try {
        await J.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch (re) {
        throw new Me("set_fan_speed", re instanceof Error ? re.message : String(re), { cause: re });
      }
    }
    !d && _.roomRepeatStrategy === "set_clean_repeat_times" && await Th(n(), i, s.cleaning_count);
  }
  await K();
  const ae = new Set(r.map((q) => q.segment_id)), L = r.length === o.rooms.length && o.rooms.every((q) => ae.has(q.segment_id)), G = !d && s.cleaning_count === 2 && _.roomRepeatStrategy === "app_segment_clean";
  try {
    d ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...d, repeats: s.cleaning_count },
      { entity_id: i.entity }
    ) : G ? await Dc(
      n(),
      i,
      "app_segment_clean",
      [{ segments: r.map((q) => q.segment_id), repeat: s.cleaning_count }],
      "clean_segments"
    ) : L ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: T },
      { entity_id: i.entity }
    );
  } catch (q) {
    const I = d ? "clean_zone" : G ? "clean_segments" : L ? "start_floor" : "clean_area";
    throw new Me(I, q instanceof Error ? q.message : String(q), { cause: q });
  }
  return T;
}
const qw = {
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
}, $w = {
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
}, Lw = {
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
}, Vw = {
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
function Y(n, i) {
  return n === "nl" ? $w[i] : n === "pl" ? Vw[i] : n === "tr" ? Lw[i] : qw[i];
}
const Ah = {
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
function Ev(n, i) {
  return Ah[n ?? "en"]?.[i] ?? Ah.en?.[i] ?? i.replaceAll("_", " ").replace(/\b\w/g, (o) => o.toUpperCase());
}
const Mh = [
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
], Gw = ["medium", "standard", "mild", "low", "intense", "high", "slight", "moderate", "extreme"];
function Qw(n, i) {
  if (n.cleaning_type === "vacuum" || !n.mop_intensity || i.mopIntensities.includes(n.mop_intensity))
    return n;
  const o = Gw.find((r) => i.mopIntensities.includes(r));
  return o ? { ...n, mop_intensity: o } : n;
}
function Kw(n, i, o, r) {
  if (o.strategy === "smartplan" && !i.hasSmartPlan) return "SmartPlan";
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
function Jw(n, i, o) {
  return [...(n.enable_mop_only ? Mh : Mh.filter((s) => s.cleaning_type !== "mop")).map((s) => Qw(s, i)), ...n.presets ?? []].map((s) => {
    const d = Kw(n, i, s, o);
    return {
      preset: s,
      available: !d,
      reason: d ? `Unsupported ${d}` : void 0
    };
  });
}
function jl(n) {
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
const Pw = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Ww = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Fw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function xa(n, i, o) {
  const r = i.entities?.[Fw[o]], s = r ? n.states[r]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? Ww[o] : o === "auto_empty" || o === "auto_dry" ? s === "on" : s;
}
function Al(n, i) {
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
    return `${i.replace("_min", "")} ${Y(n, "minuteShort")}`;
  const r = n === "nl" ? 1 : n === "tr" ? 2 : n === "pl" ? 3 : 0;
  return o[i]?.[r] ?? i;
}
function zl({
  label: n,
  setting: i,
  value: o,
  language: r,
  disabled: s,
  onChange: d
}) {
  return /* @__PURE__ */ g.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx("select", { "aria-label": n, value: o, disabled: s, onChange: (f) => d(f.target.value), children: Pw[i].map((f) => /* @__PURE__ */ g.jsx("option", { value: f, children: Al(r, f) }, f)) })
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
function Iw({
  hass: n,
  config: i,
  language: o,
  washing: r,
  emptying: s,
  drying: d,
  dryingRemaining: f,
  pending: m,
  onClose: h,
  onAction: v,
  onSetting: _,
  onChildLock: b
}) {
  const x = !!m, T = i.entities?.dock_child_lock, j = T ? n.states[T]?.state === "on" : !1, Q = String(xa(n, i, "mop_wash_frequency")), $ = String(xa(n, i, "wash_mode")), K = String(xa(n, i, "wash_temperature")), ae = !!xa(n, i, "auto_empty"), L = String(xa(n, i, "empty_mode")), G = !!xa(n, i, "auto_dry"), q = String(xa(n, i, "dry_duration")), I = [
    { action: "empty", label: Y(o, "empty"), active: s, icon: /* @__PURE__ */ g.jsx(br, {}), detail: Al(o, L) },
    { action: "wash", label: Y(o, "wash"), active: r, icon: /* @__PURE__ */ g.jsx(Fp, {}), detail: `${Al(o, $)} · ${Al(o, K)}` },
    { action: "dry", label: Y(o, "dry"), active: d, icon: /* @__PURE__ */ g.jsx(Ip, {}), detail: d ? f : Al(o, q) }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Y(o, "close"), onClick: h }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "dock-sheet-title", children: Y(o, "dockStation") }),
          /* @__PURE__ */ g.jsx("p", { children: Y(o, "dockOverview") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": Y(o, "close"), onClick: h, children: /* @__PURE__ */ g.jsx(xc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "dock-actions", children: I.map((B) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: B.active ? "active" : "",
            disabled: x,
            onClick: () => v(B.action, B.active),
            children: [
              /* @__PURE__ */ g.jsx("span", { className: "dock-action-icon", children: B.icon }),
              /* @__PURE__ */ g.jsx("strong", { children: B.active ? Y(o, "stop") : B.label }),
              /* @__PURE__ */ g.jsx("small", { children: B.active ? Y(o, "active") : B.detail })
            ]
          },
          B.action
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Fp, {}),
            Y(o, "dockSettings")
          ] }),
          /* @__PURE__ */ g.jsx(zl, { label: Y(o, "mopWashFrequency"), setting: "mop_wash_frequency", value: Q, language: o, disabled: x, onChange: (B) => _("mop_wash_frequency", B) }),
          /* @__PURE__ */ g.jsx(zl, { label: Y(o, "washingMode"), setting: "wash_mode", value: $, language: o, disabled: x, onChange: (B) => _("wash_mode", B) }),
          /* @__PURE__ */ g.jsx(zl, { label: Y(o, "washTemperature"), setting: "wash_temperature", value: K, language: o, disabled: x, onChange: (B) => _("wash_temperature", B) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(br, {}),
            Y(o, "dustbin")
          ] }),
          /* @__PURE__ */ g.jsx(oc, { label: Y(o, "autoEmpty"), checked: ae, disabled: x, onChange: (B) => _("auto_empty", B) }),
          /* @__PURE__ */ g.jsx(zl, { label: Y(o, "emptyMode"), setting: "empty_mode", value: L, language: o, disabled: x, onChange: (B) => _("empty_mode", B) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Ip, {}),
            Y(o, "drying")
          ] }),
          /* @__PURE__ */ g.jsx(oc, { label: Y(o, "autoDry"), checked: G, disabled: x, onChange: (B) => _("auto_dry", B) }),
          /* @__PURE__ */ g.jsx(zl, { label: Y(o, "dryDuration"), setting: "dry_duration", value: q, language: o, disabled: x, onChange: (B) => _("dry_duration", B) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Vh, {}),
            Y(o, "safetyMaintenance")
          ] }),
          T && /* @__PURE__ */ g.jsx(oc, { label: Y(o, "childLock"), checked: j, disabled: x, onChange: b }),
          /* @__PURE__ */ g.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ g.jsx(Z_, {}),
            /* @__PURE__ */ g.jsxs("span", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: Y(o, "drainWaterTank") }),
              /* @__PURE__ */ g.jsx("small", { children: Y(o, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ g.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function _c({ icon: n, className: i }) {
  return n ? le.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const jh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], ez = ["vacuum_only", "vacuum_and_mop", "mop_only"], tz = ["quiet", "balanced", "turbo", "max", "max_plus"], nz = ["quiet", "balanced", "turbo", "max"], az = ["fast", "standard", "deep"], iz = ["mild", "standard", "intense", "slight", "low", "medium", "moderate", "high", "extreme"], lz = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, oz = {
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
        children: Ev(s, d)
      },
      d
    )) })
  ] });
}
function Oh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : i === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function rz({
  language: n,
  draft: i,
  capabilities: o,
  presets: r,
  selectedRoomNames: s,
  submitting: d,
  assistedCarry: f = !1,
  zoneCleaning: m = !1,
  mopRoutes: h,
  onDraftChange: v,
  onClose: _,
  onStart: b
}) {
  const T = (m ? ez : jh).map((V) => r.find(({ preset: J }) => J.id === V)).filter((V) => !!V).filter(({ preset: V, available: J }) => V.id !== "smartplan" || J), j = r.filter(
    ({ preset: V }) => !jh.includes(V.id) && (!m || V.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(V.cleaning_type ?? "vacuum"))
  ), $ = (i.cleaning_type === "vacuum" ? tz : nz).filter((V) => o.fanSpeeds.includes(V)), ae = ((i.cleaning_type === "mop" ? h?.mop : h?.vacuum_and_mop) ?? az).filter((V) => o.mopModes.includes(V)), L = ae.includes(i.mop_mode ?? "") ? i.mop_mode : ae[0], G = iz.filter((V) => o.mopIntensities.includes(V)), q = Math.max(0, G.indexOf(i.mop_intensity ?? "medium")), I = lz[G[q]], B = i.strategy === "smartplan" ? Y(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? Y(n, "vacuumDescription") : i.cleaning_type === "mop" ? Y(n, "mopOnlyDescription") : i.cleaning_type === "vacuum_then_mop" ? Y(n, "vacuumThenMopDescription") : Y(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Y(n, "close"), onClick: _ }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "job-sheet-title", children: f ? Y(n, "assistedCarryTitle") : Y(n, "configureTitle") }),
          /* @__PURE__ */ g.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": Y(n, "close"), onClick: _, children: /* @__PURE__ */ g.jsx(xc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ g.jsx(
          "div",
          {
            className: "cleaning-mode-tabs",
            role: "tablist",
            "aria-label": Y(n, "cleaningType"),
            style: { "--mode-count": Math.min(T.length, 4) },
            children: T.map(({ preset: V, available: J, reason: re }) => /* @__PURE__ */ g.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": Oh(i, V.id),
                className: Oh(i, V.id) ? "active" : "",
                disabled: !J || d,
                title: re,
                onClick: () => v(jl(V)),
                children: [
                  /* @__PURE__ */ g.jsx(_c, { icon: V.icon }),
                  /* @__PURE__ */ g.jsx("span", { children: Y(n, oz[V.id]) })
                ]
              },
              V.id
            ))
          }
        ),
        /* @__PURE__ */ g.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ g.jsx("p", { className: "mode-description", children: B }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            i.cleaning_type !== "mop" && /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: Y(n, "suction"),
                value: i.fan_speed,
                options: $,
                onChange: (V) => v({ ...i, preset_id: "custom_draft", fan_speed: V })
              }
            ),
            i.cleaning_type !== "vacuum" && G.length > 0 && /* @__PURE__ */ g.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ g.jsx("span", { children: Y(n, "waterFlow") }),
              /* @__PURE__ */ g.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ g.jsx("strong", { children: Ev(n, G[q]) }),
                I !== void 0 && /* @__PURE__ */ g.jsx("output", { children: I })
              ] }),
              /* @__PURE__ */ g.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: G.length - 1,
                  step: "1",
                  value: q,
                  "aria-label": Y(n, "waterFlow"),
                  onChange: (V) => v({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: G[Number(V.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: Y(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: ["1", "2"],
                onChange: (V) => v({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(V)
                })
              }
            ),
            /* @__PURE__ */ g.jsx(
              rc,
              {
                language: n,
                title: Y(n, "mopRoute"),
                value: L,
                options: ae,
                onChange: (V) => v({ ...i, preset_id: "custom_draft", mop_mode: V })
              }
            )
          ] })
        ] }),
        !f && j.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ g.jsx("span", { children: Y(n, "savedProfiles") }),
          /* @__PURE__ */ g.jsx("div", { children: j.map(({ preset: V, available: J, reason: re }) => /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              disabled: !J || d,
              title: re,
              className: i.preset_id === V.id ? "active" : "",
              onClick: () => v(jl(V)),
              children: [
                /* @__PURE__ */ g.jsx(_c, { icon: V.icon }),
                " ",
                V.name
              ]
            },
            V.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("footer", { children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: d, onClick: _, children: Y(n, "cancel") }),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            disabled: d,
            onClick: () => b(L && i.strategy === "custom" && ["mop", "vacuum_and_mop"].includes(i.cleaning_type) ? { ...i, mop_mode: L } : i),
            children: d ? f ? Y(n, "preparingUpstairs") : Y(n, "starting") : f ? Y(n, "prepareUpstairs") : Y(n, "start")
          }
        )
      ] })
    ] })
  ] });
}
var Ta = function(n, i) {
  return Number(n.toFixed(i));
}, uz = function(n, i) {
  return i;
}, Ne = function(n, i, o) {
  o && typeof o == "function" && o(n, i);
}, sz = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, cz = function(n) {
  return n;
}, dz = function(n) {
  return n * n;
}, fz = function(n) {
  return n * (2 - n);
}, mz = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, pz = function(n) {
  return n * n * n;
}, hz = function(n) {
  return --n * n * n + 1;
}, vz = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, yz = function(n) {
  return n * n * n * n;
}, gz = function(n) {
  return 1 - --n * n * n * n;
}, _z = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, bz = function(n) {
  return n * n * n * n * n;
}, Sz = function(n) {
  return 1 + --n * n * n * n * n;
}, wz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Av = {
  easeOut: sz,
  linear: cz,
  easeInQuad: dz,
  easeOutQuad: fz,
  easeInOutQuad: mz,
  easeInCubic: pz,
  easeOutCubic: hz,
  easeInOutCubic: vz,
  easeInQuart: yz,
  easeOutQuart: gz,
  easeInOutQuart: _z,
  easeInQuint: bz,
  easeOutQuint: Sz,
  easeInOutQuint: wz
}, Mv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, tn = function(n) {
  n.mounted && (Mv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function jv(n, i, o, r) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    tn(n), n.animation = function() {
      if (!n.mounted)
        return Mv(n.animation);
      var f = (/* @__PURE__ */ new Date()).getTime() - s, m = f / o, h = Av[i], v = h(m);
      f >= o ? (r(d), n.animation = null) : n.animation && (r(v), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function zz(n) {
  var i = n.scale, o = n.positionX, r = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(o) || Number.isNaN(r));
}
function ta(n, i, o, r) {
  var s = zz(i);
  if (!(!n.mounted || !s)) {
    var d = n.setState, f = n.state, m = f.scale, h = f.positionX, v = f.positionY, _ = i.scale - m, b = i.positionX - h, x = i.positionY - v;
    o === 0 ? d(i.scale, i.positionX, i.positionY) : jv(n, r, o, function(T) {
      T !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var j = m + _ * T, Q = h + b * T, $ = v + x * T;
      d(j, Q, $);
    });
  }
}
function xz(n, i, o) {
  var r = n.offsetWidth, s = n.offsetHeight, d = i.offsetWidth, f = i.offsetHeight, m = d * o, h = f * o, v = r - m, _ = s - h;
  return {
    wrapperWidth: r,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: v,
    newContentHeight: h,
    newDiffHeight: _
  };
}
var kz = function(n, i, o, r, s, d, f) {
  var m = n > i ? o * (f ? 0.5 : 1) : 0, h = r > s ? d * (f ? 0.5 : 1) : 0, v = n - i - m, _ = m, b = r - s - h, x = h;
  return {
    minPositionX: v,
    maxPositionX: _,
    minPositionY: b,
    maxPositionY: x,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, Rc = function(n, i) {
  var o = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.centerZoomedOut, f = s.disablePadding;
  if (!o || !r)
    throw new Error("Components are not mounted");
  var m = xz(o, r, i), h = m.wrapperWidth, v = m.wrapperHeight, _ = m.newContentWidth, b = m.newContentHeight, x = m.newDiffWidth, T = m.newDiffHeight, j = kz(h, _, x, v, b, T, !!d), Q = h >= _ && v >= b;
  f && Q && !d && (j.minPositionX = 0, j.maxPositionX = 0, j.minPositionY = 0, j.maxPositionY = 0);
  var $ = n.setup, K = $.minPositionX, ae = $.maxPositionX, L = $.minPositionY, G = $.maxPositionY;
  return K != null && (j.minPositionX = h * (1 - i) + K * i), ae != null && (j.maxPositionX = ae * i), L != null && (j.minPositionY = v * (1 - i) + L * i), G != null && (j.maxPositionY = G * i), j;
}, Rl = function(n, i, o, r) {
  return r ? n < i ? Ta(i, 2) : n > o ? Ta(o, 2) : Ta(n, 2) : Ta(n, 2);
}, xi = function(n, i) {
  var o = Rc(n, i);
  return n.bounds = o, o;
};
function Yl(n, i, o, r, s, d, f) {
  var m = o.minPositionX, h = o.minPositionY, v = o.maxPositionX, _ = o.maxPositionY, b = 0, x = 0;
  f && (b = s, x = d);
  var T = Rl(n, m - b, v + b, r), j = Rl(i, h - x, _ + x, r);
  return { x: T, y: j };
}
function Nr(n, i, o, r, s, d) {
  var f = n.state, m = f.scale, h = f.positionX, v = f.positionY, _ = r - m;
  if (typeof i != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: v };
  var b = h - i * _, x = v - o * _, T = Yl(b, x, s, d, 0, 0, null);
  return T;
}
var Ch = 1e-7;
function Bl(n, i, o, r, s) {
  var d = s ? r : 0, f = Math.max(i - d, Ch), m = o + d;
  return !Number.isNaN(o) && n >= m ? m : !Number.isNaN(i) && n <= f ? f : Math.max(n, Ch);
}
var Nh = function(n, i) {
  var o = n.setup.panning.excluded, r = n.isInitialized, s = n.wrapperComponent, d = i.target, f = "shadowRoot" in d && "composedPath" in i, m = f ? i.composedPath().some(function(_) {
    return _ instanceof Element ? s?.contains(_) : !1;
  }) : s?.contains(d), h = r && d && m;
  if (!h)
    return !1;
  var v = Hl(d, o);
  return !(v || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, Dh = function(n) {
  var i = n.isInitialized, o = n.isPanning, r = n.setup, s = r.panning.disabled, d = i && o && !s;
  return !!d;
}, Tz = function(n, i) {
  var o = n.state, r = o.positionX, s = o.positionY;
  n.isPanning = !0;
  var d = i.clientX, f = i.clientY;
  n.startCoords = { x: d - r, y: f - s };
}, Ez = function(n, i) {
  var o = i.touches, r = n.state, s = r.positionX, d = r.positionY;
  n.isPanning = !0;
  var f = o.length === 1;
  if (f) {
    var m = o[0].clientX, h = o[0].clientY;
    n.startCoords = { x: m - s, y: h - d };
  }
};
function Az(n) {
  var i = n.state, o = i.positionX, r = i.positionY, s = i.scale, d = n.setup, f = d.disabled, m = d.limitToBounds, h = d.centerZoomedOut, v = n.wrapperComponent;
  if (!(f || !v || !n.bounds)) {
    var _ = n.bounds, b = _.maxPositionX, x = _.minPositionX, T = _.maxPositionY, j = _.minPositionY, Q = o > b || o < x, $ = r > T || r < j, K = o > b ? v.offsetWidth : n.setup.minPositionX || 0, ae = r > T ? v.offsetHeight : n.setup.minPositionY || 0, L = Nr(n, K, ae, s, n.bounds, m || h), G = L.x, q = L.y;
    return {
      scale: s,
      positionX: Q ? G : o,
      positionY: $ ? q : r
    };
  }
}
function Ov(n, i, o, r, s) {
  var d = n.setup.limitToBounds, f = n.wrapperComponent, m = n.bounds, h = n.state, v = h.scale, _ = h.positionX, b = h.positionY;
  if (!(f === null || m === null || i === _ && o === b)) {
    var x = Yl(i, o, m, d, r, s, f), T = x.x, j = x.y;
    n.setState(v, T, j);
  }
}
var Mz = function(n, i, o) {
  var r = n.startCoords, s = n.state, d = n.setup.panning, f = d.lockAxisX, m = d.lockAxisY, h = s.positionX, v = s.positionY;
  if (!r)
    return { x: h, y: v };
  var _ = i - r.x, b = o - r.y, x = f ? h : _, T = m ? v : b;
  return { x, y: T };
}, Fn = function(n, i, o) {
  var r = n.setup, s = n.state, d = r.minScale, f = r.disablePadding, m = r.centerZoomedOut, h = o ?? s.scale;
  return i > 0 && h >= d && !f && !m ? i : 0;
}, Wn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Wn || (Wn = {}));
var jz = function(n) {
  var i = n.mounted, o = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = s.limitToBounds, h = n.state.scale, v = f.disabled;
  if (v || d || !i || !o || !r)
    return !1;
  if (!m)
    return !0;
  var _ = o.offsetWidth < r.offsetWidth * h || o.offsetHeight < r.offsetHeight * h;
  return _;
}, Oz = function(n) {
  var i = n.mounted, o = n.velocity, r = n.bounds, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = f.disabled, h = !m && !d && i;
  return !(!h || !o || !r);
};
function Cz(n, i) {
  var o = n.setup.velocityAnimation, r = o.animationTime, s = o.maxAnimationTime, d = o.inertia;
  return Math.min(r * Math.max(1, Math.abs(i / d)), s);
}
function Rh(n, i, o, r, s, d, f, m, h, v) {
  if (s) {
    if (i > f && o > f) {
      var _ = f + (n - f) * v;
      return _ > h ? h : _ < f ? f : _;
    }
    if (i < d && o < d) {
      var _ = d + (n - d) * v;
      return _ < m ? m : _ > d ? d : _;
    }
  }
  return r ? i : Rl(n, d, f, s);
}
function Nz(n) {
  var i = 1, o = n.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? i : Math.min(i, o);
}
var uc = function(n, i, o) {
  var r = 0, s = n * o;
  return Number.isNaN(s) ? r : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function Dz(n, i, o) {
  var r, s, d = jz(n);
  if (d) {
    var f = n.lastMousePosition, m = n.velocityTime, h = n.setup, v = n.wrapperComponent, _ = h.velocityAnimation, b = _.maxStrengthMouse, x = _.maxStrengthTouch, T = _.sensitivityTouch, j = _.sensitivityMouse, Q = Date.now();
    if (f && m && v) {
      var $ = Nz(v), K = (r = {}, r[Wn.TOUCH] = T, r[Wn.MOUSE] = j, r)[o], ae = (s = {}, s[Wn.TOUCH] = x, s[Wn.MOUSE] = b, s)[o], L = i.x - f.x, G = i.y - f.y, q = uc(L / $, ae, K), I = uc(G / $, ae, K), B = Q - m, V = L * L + G * G, J = uc(Math.sqrt(V) / B, ae, K);
      n.velocity = { velocityX: q, velocityY: I, total: J };
    }
    n.lastMousePosition = i, n.velocityTime = Q;
  }
}
function Rz(n) {
  var i = n.velocity, o = n.bounds, r = n.setup, s = n.wrapperComponent, d = Oz(n);
  if (!(!d || !i || !o || !s)) {
    var f = i.velocityX, m = i.velocityY, h = i.total, v = o.maxPositionX, _ = o.minPositionX, b = o.maxPositionY, x = o.minPositionY, T = r.limitToBounds, j = r.autoAlignment, Q = r.zoomAnimation, $ = r.panning, K = $.lockAxisY, ae = $.lockAxisX, L = Q.animationType, G = j.sizeX, q = j.sizeY, I = j.velocityAlignmentTime, B = I, V = Cz(n, h), J = Math.max(V, B), re = Fn(n, G), ze = Fn(n, q), fe = re * s.offsetWidth / 100, xe = ze * s.offsetHeight / 100, W = v + fe, ne = _ - fe, E = b + xe, X = x - xe, F = n.state, he = (/* @__PURE__ */ new Date()).getTime();
    jv(n, L, J, function(se) {
      var w = n.state, N = w.scale, P = w.positionX, te = w.positionY, pe = (/* @__PURE__ */ new Date()).getTime() - he, ye = pe / B, be = Av[j.animationType], Ge = 1 - be(Math.min(1, ye)), $e = 1 - se, Pt = P + f * $e, Ut = te + m * $e, rn = Rh(Pt, F.positionX, P, ae, T, _, v, ne, W, Ge), na = Rh(Ut, F.positionY, te, K, T, x, b, X, E, Ge);
      if (P !== Pt || te !== Ut) {
        n.setState(N, rn, na);
        var St = n.props.onPanning;
        St && St(Ae(n), {});
      }
    });
  }
}
function Zh(n, i) {
  var o = n.state, r = o.scale, s = o.positionX, d = o.positionY;
  n.panStartPosition = { x: s, y: d }, tn(n), xi(n, r), window.TouchEvent !== void 0 && i instanceof TouchEvent ? Ez(n, i) : Tz(n, i);
}
function Cv(n, i) {
  var o = n.state.scale, r = n.setup, s = r.minScale, d = r.autoAlignment, f = d.disabled, m = d.sizeX, h = d.sizeY, v = d.animationTime, _ = d.animationType, b = f || o < s || !m && !h;
  if (!b) {
    var x = Az(n);
    x && ta(n, x, v, _);
  }
}
function Uh(n, i, o, r) {
  var s = n.startCoords, d = n.setup, f = d.autoAlignment, m = f.sizeX, h = f.sizeY;
  if (s) {
    var v = Mz(n, i, o), _ = v.x, b = v.y, x = Fn(n, m), T = Fn(n, h);
    Dz(n, { x: _, y: b }, r), Ov(n, _, b, x, T);
  }
}
function Zz(n, i) {
  if (n.isPanning) {
    var o = n.velocity, r = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var d = n.state, f = d.positionX, m = d.positionY, h = d.scale, v = n.panStartPosition;
    if (n.panStartPosition = null, v) {
      var _ = f - v.x, b = m - v.y;
      if (_ * _ + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var x = r?.offsetWidth || 0, T = r?.offsetHeight || 0, j = (s?.offsetWidth || 0) * h, Q = (s?.offsetHeight || 0) * h, $ = !n.setup.limitToBounds || x < j || T < Q, K = !i && o && o.total > 0.1 && $;
    K ? Rz(n) : Cv(n);
  }
}
function Zc(n, i, o, r) {
  var s = n.setup, d = s.minScale, f = s.maxScale, m = s.limitToBounds, h = Bl(Ta(i, 2), d, f, 0, !1), v = xi(n, h), _ = Nr(n, o, r, h, v, m), b = _.x, x = _.y;
  return { scale: h, positionX: b, positionY: x };
}
function Uc(n, i, o) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.minScale, m = d.maxScale, h = d.limitToBounds, v = d.zoomAnimation, _ = v.disabled, b = v.animationTime, x = v.animationType, T = r >= f && r <= m, j = _ || T;
  if ((r >= 1 || h) && Cv(n), !(j || !s || !n.mounted)) {
    var Q = i || s.offsetWidth / 2, $ = o || s.offsetHeight / 2, K = r < f ? f : m, ae = Zc(n, K, Q, $);
    ae && ta(n, ae, b, x);
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
function Yh(n, i, o) {
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
}, Nv = function(n) {
  var i, o, r, s, d, f, m, h, v, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : ka.minScale, 1e-7), b = (o = n.maxScale) !== null && o !== void 0 ? o : ka.maxScale, x = (r = n.initialScale) !== null && r !== void 0 ? r : sc.scale, T = Math.min(Math.max(x, _), b), j = Rl((s = n.initialPositionX) !== null && s !== void 0 ? s : sc.positionX, (d = n.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (f = n.maxPositionX) !== null && f !== void 0 ? f : 1 / 0, n.minPositionX != null || n.maxPositionX != null), Q = Rl((m = n.initialPositionY) !== null && m !== void 0 ? m : sc.positionY, (h = n.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (v = n.maxPositionY) !== null && v !== void 0 ? v : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: T,
    scale: T,
    positionX: j,
    positionY: Q
  };
}, Bh = function(n) {
  var i = Kt({}, ka);
  return Object.keys(n).forEach(function(o) {
    var r = o, s = typeof n[r] < "u", d = typeof ka[r] < "u";
    if (d && s) {
      var f = Object.prototype.toString.call(ka[r]), m = f === "[object Object]", h = f === "[object Array]";
      m ? i[r] = Kt(Kt({}, ka[r]), n[r]) : h ? i[r] = Yh(Yh([], ka[r], !0), n[r]) : i[r] = n[r];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Dv = function(n, i, o) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.maxScale, m = d.minScale, h = d.zoomAnimation, v = d.smooth, _ = h.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var b = v ? r * Math.exp(i * o) : r + i * o, x = Bl(Ta(b, 3), m, f, _, !1);
  return x;
};
function Rv(n, i, o, r, s) {
  var d, f, m = n.wrapperComponent, h = n.state, v = h.scale, _ = h.positionX, b = h.positionY, x = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var T = x.disabled ? 0 : r, j = m.offsetWidth, Q = m.offsetHeight, $ = (j / 2 - _) / v, K = (Q / 2 - b) / v, ae = Dv(n, i, o), L = Zc(n, ae, $, K);
  if (!L)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var G = n.props, q = G.onZoomStart, I = G.onZoom, B = G.onZoomStop, V = new MouseEvent("mousemove", { bubbles: !0 }), J = Ae(n);
  Ne(J, V, q), Ne(J, V, I), ta(n, L, T, s);
  var re = (f = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
  re && re.setTimeout(function() {
    n.mounted && Ne(Ae(n), V, B);
  }, T);
}
function Zv(n, i, o, r) {
  var s, d, f = n.setup, m = n.wrapperComponent, h = n.contentComponent, v = f.limitToBounds, _ = f.centerOnInit, b = Nv(n.props), x = n.state, T = x.scale, j = x.positionX, Q = x.positionY;
  if (m) {
    var $ = b.positionX, K = b.positionY;
    if (_ && h) {
      var ae = Yc(b.scale, m, h);
      $ = ae.positionX, K = ae.positionY;
    }
    var L = Rc(n, b.scale), G = Yl($, K, L, v, 0, 0, m), q = {
      scale: b.scale,
      positionX: G.x,
      positionY: G.y
    };
    if (!(T === b.scale && j === b.positionX && Q === b.positionY)) {
      r?.();
      var I = n.props, B = I.onZoomStart, V = I.onZoom, J = I.onZoomStop, re = new MouseEvent("mousemove", { bubbles: !0 }), ze = Ae(n);
      Ne(ze, re, B), Ne(ze, re, V), ta(n, q, i, o);
      var fe = (d = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      fe && fe.setTimeout(function() {
        n.mounted && Ne(Ae(n), re, J);
      }, i);
    }
  }
}
function Uz(n, i, o, r) {
  var s = n.getBoundingClientRect(), d = i.getBoundingClientRect(), f = o.getBoundingClientRect(), m = d.x * r.scale, h = d.y * r.scale;
  return {
    x: (s.x - f.x + m) / r.scale,
    y: (s.y - f.y + h) / r.scale
  };
}
function Yz(n, i, o, r, s) {
  r === void 0 && (r = 0), s === void 0 && (s = 0);
  var d = n.wrapperComponent, f = n.contentComponent, m = n.state, h = n.setup, v = h.limitToBounds, _ = h.minScale, b = h.maxScale;
  if (!d || !f)
    return m;
  var x = d.getBoundingClientRect(), T = i.getBoundingClientRect(), j = Uz(i, d, f, m), Q = j.x, $ = j.y, K = T.width / m.scale, ae = T.height / m.scale, L = d.offsetWidth / K, G = d.offsetHeight / ae, q = Bl(o || Math.min(L, G), _, b, 0, !1), I = (x.width - K * q) / 2, B = (x.height - ae * q) / 2, V = (x.left - Q) * q + I + r, J = (x.top - $) * q + B + s, re = Rc(n, q), ze = Yl(V, J, re, v, 0, 0, d), fe = ze.x, xe = ze.y;
  return { positionX: fe, positionY: xe, scale: q };
}
var Bz = function(n) {
  return function(i, o, r) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Rv(n, 1, i, o, r);
  };
}, Hz = function(n) {
  return function(i, o, r) {
    i === void 0 && (i = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Rv(n, -1, i, o, r);
  };
}, Xz = function(n) {
  return function(i, o, r, s, d) {
    s === void 0 && (s = 300), d === void 0 && (d = "easeOut");
    var f = n.state, m = f.positionX, h = f.positionY, v = f.scale, _ = n.wrapperComponent, b = n.contentComponent, x = n.setup.disabled;
    if (!(x || !_ || !b)) {
      var T = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(o) ? h : o,
        scale: Number.isNaN(r) ? v : r
      };
      ta(n, T, s, d);
    }
  };
}, qz = function(n) {
  return function(i, o) {
    i === void 0 && (i = 200), o === void 0 && (o = "easeOut"), Zv(n, i, o);
  };
}, $z = function(n) {
  return function(i, o, r) {
    o === void 0 && (o = 200), r === void 0 && (r = "easeOut");
    var s = n.state, d = n.wrapperComponent, f = n.contentComponent;
    if (d && f) {
      var m = Yc(i || s.scale, d, f);
      ta(n, m, o, r);
    }
  };
}, Lz = function(n) {
  return function(i, o, r, s, d, f) {
    r === void 0 && (r = 600), s === void 0 && (s = "easeOut"), d === void 0 && (d = 0), f === void 0 && (f = 0), tn(n);
    var m = n.wrapperComponent, h = typeof i == "string" ? document.getElementById(i) : i;
    if (m && h && m.contains(h)) {
      var v = Yz(n, h, o, d, f);
      ta(n, v, r, s);
    }
  };
}, Ar = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: Bz(n),
    zoomOut: Hz(n),
    setTransform: Xz(n),
    resetTransform: qz(n),
    centerView: $z(n),
    zoomToElement: Lz(n)
  };
}, Vz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, Ae = function(n) {
  var i = {};
  return Object.assign(i, Vz(n)), Object.assign(i, Ar(n)), i;
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
var _r = ".".concat(bc.wrapperClass), Hl = function(n, i) {
  return i.some(function(o) {
    return n.matches("".concat(_r, " ").concat(o, ", ").concat(_r, " .").concat(o, ", ").concat(_r, " ").concat(o, " *, ").concat(_r, " .").concat(o, " *"));
  });
}, Zl = function(n) {
  n && clearTimeout(n);
}, Gz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Uv = function(n, i, o) {
  var r = Gz(o);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(r, ")");
}, Yc = function(n, i, o) {
  var r = o.offsetWidth * n, s = o.offsetHeight * n, d = (i.offsetWidth - r) / 2, f = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: d,
    positionY: f
  };
};
function Qz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Kz(n) {
  return function(i) {
    n.forEach(function(o) {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Yv = function(n, i) {
  var o = n.setup.wheel, r = o.disabled, s = o.wheelDisabled, d = o.touchPadDisabled, f = o.excluded, m = n.isInitialized, h = n.isPanning, v = i.target, _ = m && !h && !r && v;
  if (!_ || s && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var b = Hl(v, f);
  if (b)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, Jz = function(n, i) {
  var o = n.setup, r = o.disabled, s = o.trackPadPanning, d = s.activationKeys, f = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || r || s.disabled || i.ctrlKey)
    return !1;
  var m = Yv(n, i);
  if (m)
    return !1;
  var h = i.target, v = Hl(h, f);
  if (v)
    return !1;
  var _ = n.isPressingKeys(d);
  return !!_;
}, Pz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Wz(n, i) {
  var o = Pz(n), r = uz(i, o);
  return r;
}
function Bv(n, i, o) {
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
var Fz = function(n, i, o, r, s) {
  var d = n.state.scale, f = n.wrapperComponent, m = n.setup, h = m.maxScale, v = m.minScale, _ = m.zoomAnimation, b = m.disablePadding, x = _.size, T = _.disabled;
  if (!f)
    throw new Error("Wrapper is not mounted");
  var j = d + i * o, Q = r ? !1 : !T, $ = Bl(j, v, h, x, Q && !b);
  return $;
}, Hv = function(n, i) {
  var o = n.previousWheelEvent, r = n.state.scale, s = n.setup, d = s.maxScale, f = s.minScale;
  return o ? r < d || r > f || Math.sign(o.deltaY) !== Math.sign(i.deltaY) || o.deltaY > 0 && o.deltaY < i.deltaY || o.deltaY < 0 && o.deltaY > i.deltaY || Math.sign(o.deltaY) !== Math.sign(i.deltaY) : !1;
}, Iz = function(n, i) {
  var o = n.setup.pinch, r = o.disabled, s = o.excluded, d = n.isInitialized, f = i.target, m = d && !r && f;
  if (!m)
    return !1;
  var h = Hl(f, s);
  return !h;
}, ex = function(n) {
  var i = n.setup.pinch.disabled, o = n.isInitialized, r = n.pinchStartDistance, s = o && !i && r !== null;
  return !!s;
}, tx = function(n, i, o) {
  var r = o.getBoundingClientRect(), s = n.touches, d = s[0].clientX - r.left, f = s[0].clientY - r.top, m = s[1].clientX - r.left, h = s[1].clientY - r.top;
  return {
    x: (d + m) / 2 / i,
    y: (f + h) / 2 / i
  };
}, Xv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, nx = 5, ax = function(n, i) {
  var o = n.pinchStartScale, r = n.pinchStartDistance, s = n.setup, d = s.maxScale, f = s.minScale, m = s.zoomAnimation, h = s.disablePadding, v = s.pinch, _ = m.size, b = m.disabled, x = v.step;
  if (!o || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var T = i / r, j = T * o, Q = (j - o) * (x / nx), $ = o + Q, K = $ === 1 / 0 ? 0 : Ta($, 10);
  return Bl(K, f, d, _, !b && !h);
}, qv = 160, $v = 100, ix = function(n, i) {
  var o = n.props, r = o.onWheelStart, s = o.onZoomStart;
  n.wheelStopEventTimer || (tn(n), Ne(Ae(n), i, r), Ne(Ae(n), i, s));
}, lx = function(n, i) {
  var o = n.props, r = o.onWheel, s = o.onZoom, d = n.contentComponent, f = n.setup, m = n.state, h = m.scale, v = f.limitToBounds, _ = f.centerZoomedOut, b = f.zoomAnimation, x = f.wheel, T = f.disablePadding, j = f.smooth, Q = b.size, $ = b.disabled, K = x.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var ae = Wz(i, null), L = j ? K * Math.abs(i.deltaY) : K, G = Fz(n, ae, L, !i.ctrlKey);
  if (h !== G) {
    var q = xi(n, G), I = Bv(i, d, h), B = $ || Q === 0 || _ || T, V = v && B, J = Nr(n, I.x, I.y, G, q, V), re = J.x, ze = J.y;
    n.previousWheelEvent = i, n.setState(G, re, ze), Ne(Ae(n), i, r), Ne(Ae(n), i, s);
  }
}, ox = function(n, i) {
  var o = n.props, r = o.onWheelStop, s = o.onZoomStop;
  Zl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Uc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, $v);
  var d = Hv(n, i);
  d && (Zl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ne(Ae(n), i, r), Ne(Ae(n), i, s));
  }, qv));
}, rx = function(n, i) {
  var o = n.props, r = o.onWheelStart, s = o.onPanningStart;
  n.wheelStopEventTimer || (tn(n), Ne(Ae(n), i, r), Ne(Ae(n), i, s));
}, ux = function(n, i) {
  var o = n.props, r = o.onWheelStop, s = o.onPanningStop;
  Zl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Uc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, $v);
  var d = Hv(n, i);
  d && (Zl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ne(Ae(n), i, r), Ne(Ae(n), i, s));
  }, qv));
}, Lv = function(n) {
  for (var i = 0, o = 0, r = 0; r < 2; r += 1)
    i += n.touches[r].clientX, o += n.touches[r].clientY;
  var s = i / 2, d = o / 2;
  return { x: s, y: d };
}, sx = function(n, i) {
  var o = Xv(i);
  n.pinchStartDistance = o, n.lastDistance = o, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Lv(i), tn(n);
}, cx = function(n, i) {
  var o = n.contentComponent, r = n.pinchStartDistance, s = n.wrapperComponent, d = n.pinchPreviousCenter, f = n.state.scale, m = n.setup, h = m.limitToBounds, v = m.centerZoomedOut, _ = m.zoomAnimation, b = m.autoAlignment, x = m.pinch, T = m.panning, j = _.disabled, Q = _.size, $ = x.allowPanning;
  if (!(r === null || !o)) {
    var K = tx(i, f, o);
    if (!(!Number.isFinite(K.x) || !Number.isFinite(K.y))) {
      var ae = Xv(i), L = ax(n, ae), G = Lv(i), q = f / L, I = (G.x - (d?.x || 0)) * q, B = (G.y - (d?.y || 0)) * q;
      if (!(L === f && I === 0 && B === 0)) {
        n.pinchPreviousCenter = G;
        var V = xi(n, L), J = j || Q === 0 || v, re = h && J, ze = Nr(n, K.x, K.y, L, V, re), fe = ze.x, xe = ze.y;
        if (n.pinchMidpoint = K, n.lastDistance = ae, T.disabled || !$)
          n.setState(L, fe, xe);
        else {
          var W = b.sizeX, ne = b.sizeY, E = Fn(n, W, L), X = Fn(n, ne, L), F = fe + I, he = xe + B, se = Yl(F, he, V, h, E, X, s), w = se.x, N = se.y;
          n.setState(L, w, N);
        }
      }
    }
  }
}, dx = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Uc(n, i?.x, i?.y);
}, Vv = function(n, i) {
  var o = n.props.onZoomStop, r = n.setup.doubleClick.animationTime;
  Zl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ne(Ae(n), i, o);
  }, r);
}, fx = function(n, i) {
  var o = n.props, r = o.onZoomStart, s = o.onZoom, d = n.setup.doubleClick, f = d.animationTime, m = d.animationType;
  Ne(Ae(n), i, r), Zv(n, f, m, function() {
    return Ne(Ae(n), i, s);
  }), Vv(n, i);
};
function mx(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function px(n, i) {
  var o = n.setup, r = n.doubleClickStopEventTimer, s = n.state, d = n.contentComponent, f = s.scale, m = n.props, h = m.onZoomStart, v = m.onZoom, _ = o.doubleClick, b = _.disabled, x = _.mode, T = _.step, j = _.animationTime, Q = _.animationType;
  if (!b && !r) {
    if (x === "reset")
      return fx(n, i);
    if (!d)
      return console.error("No ContentComponent found");
    var $ = mx(x, n.state.scale), K = Dv(n, $, T);
    if (f !== K) {
      Ne(Ae(n), i, h);
      var ae = Bv(i, d, f), L = Zc(n, K, ae.x, ae.y);
      if (!L)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ne(Ae(n), i, v), ta(n, L, j, Q), Vv(n, i);
    }
  }
}
var hx = function(n, i) {
  var o = n.isInitialized, r = n.setup, s = n.wrapperComponent, d = r.doubleClick, f = d.disabled, m = d.excluded, h = i.target, v = s?.contains(h), _ = o && h && v && !f;
  if (!_)
    return !1;
  var b = Hl(h, m);
  return !b;
}, vx = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(r) {
        o.props = r, o.wrapperComponent && o.contentComponent && xi(o, o.state.scale), o.setup = Bh(r);
      }, this.initializeWindowEvents = function() {
        var r, s, d, f, m = dc(), h = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, v = h?.defaultView;
        (s = o.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (f = o.wrapperComponent) === null || f === void 0 || f.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("mousedown", o.onPanningStart, m), v?.addEventListener("mousemove", o.onPanning, m), v?.addEventListener("mouseup", o.onPanningStop, m), h?.addEventListener("mouseleave", o.clearPanning, m), v?.addEventListener("keyup", o.setKeyUnPressed, m), v?.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, s, d, f, m, h = dc(), v = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, _ = v?.defaultView;
        _?.removeEventListener("mousedown", o.onPanningStart, h), _?.removeEventListener("mousemove", o.onPanning, h), _?.removeEventListener("mouseup", o.onPanningStop, h), v?.removeEventListener("mouseleave", o.clearPanning, h), _?.removeEventListener("keyup", o.setKeyUnPressed, h), _?.removeEventListener("keydown", o.setKeyPressed, h), _?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, h), (s = o.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", o.onWheelPanning, h), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, h), (f = o.wrapperComponent) === null || f === void 0 || f.removeEventListener("keydown", o.setKeyPressed, h), tn(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var s = dc();
        r.addEventListener("wheel", o.onWheelZoom, s), r.addEventListener("dblclick", o.onDoubleClick, s), r.addEventListener("touchstart", o.onTouchPanningStart, s), r.addEventListener("touchmove", o.onTouchPanning, s), r.addEventListener("touchend", o.onTouchPanningStop, s);
      }, this.handleInitialize = function(r) {
        var s = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(Ae(o));
        }), s && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, f = r.offsetWidth, m = r.offsetHeight;
          (f > 0 || m > 0) && (o.onInitCallbacks.forEach(function(h) {
            return h(Ae(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var s = o.setup.disabled;
        if (!s) {
          o.syncModifierKeys(r);
          var d = Yv(o, r);
          d && (ix(o, r), lx(o, r), ox(o, r));
        }
      }, this.onWheelPanning = function(r) {
        var s = o.props.onPanning, d = o.setup.trackPadPanning, f = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(r);
        var h = Jz(o, r);
        if (h) {
          r.preventDefault(), r.stopPropagation();
          var v = o.state, _ = v.positionX, b = v.positionY, x = _ - r.deltaX, T = b - r.deltaY, j = f ? _ : x, Q = m ? b : T, $ = o.setup.autoAlignment, K = $.sizeX, ae = $.sizeY, L = Fn(o, K), G = Fn(o, ae);
          j === _ && Q === b || (rx(o, r), Ov(o, j, Q, L, G), Ne(Ae(o), r, s), ux(o, r));
        }
      }, this.onPanningStart = function(r) {
        var s = o.setup.disabled, d = o.props.onPanningStart;
        if (!s) {
          o.syncModifierKeys(r);
          var f = Nh(o, r);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (r.button === 0 && !o.setup.panning.allowLeftClickPan || r.button === 1 && !o.setup.panning.allowMiddleClickPan || r.button === 2 && !o.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), tn(o), Zh(o, r), Ne(Ae(o), r, d)));
          }
        }
      }, this.onPanning = function(r) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (!s) {
          if (o.syncModifierKeys(r), o.isPanning && r.buttons === 0) {
            o.clearPanning(r);
            return;
          }
          var f = Dh(o);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (r.preventDefault(), r.stopPropagation(), Uh(o, r.clientX, r.clientY, Wn.MOUSE), Ne(Ae(o), r, d));
          }
        }
      }, this.onPanningStop = function(r) {
        var s = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (Zz(o, s), Ne(Ae(o), r, d));
      }, this.onPinchStart = function(r) {
        var s = o.setup.disabled, d = o.props.onPinchStart;
        if (!s) {
          var f = Iz(o, r);
          f && (sx(o, r), tn(o), Ne(Ae(o), r, d));
        }
      }, this.onPinch = function(r) {
        var s = o.setup.disabled, d = o.props.onPinch;
        if (!s) {
          var f = ex(o);
          f && (r.preventDefault(), r.stopPropagation(), cx(o, r), Ne(Ae(o), r, d));
        }
      }, this.onPinchStop = function(r) {
        var s = o.props.onPinchStop;
        o.pinchStartScale && (dx(o), Ne(Ae(o), r, s));
      }, this.onTouchPanningStart = function(r) {
        var s = o.setup, d = s.disabled, f = s.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var h = !f?.disabled, v = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (h && v && r.touches.length === 1)
            o.onDoubleClick(r);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), tn(o);
            var _ = r.touches, b = _.length === 1, x = _.length === 2, T = Nh(o, r);
            if (b) {
              if (!T)
                return;
              tn(o), Zh(o, r), Ne(Ae(o), r, m);
            }
            x && o.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && r.touches.length === 1) {
          if (s)
            return;
          var f = Dh(o);
          if (!f)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var m = r.touches[0];
          Uh(o, m.clientX, m.clientY, Wn.TOUCH), Ne(Ae(o), r, d);
        } else r.touches.length > 1 && o.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        o.onPanningStop(r), o.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var s = o.setup.disabled;
        if (!s) {
          var d = hx(o, r);
          d && px(o, r);
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
          var r = Yc(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(r.scale, r.positionX, r.positionY);
        }
      }, this.handleTransformStyles = function(r, s, d) {
        return o.props.customTransform ? o.props.customTransform(r, s, d) : Uv(r, s, d);
      }, this.getContext = function() {
        return Ae(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var r = o.state, s = r.scale, d = r.positionX, f = r.positionY, m = o.handleTransformStyles(d, f, s);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: s,
              positionX: d,
              positionY: f,
              previousScale: o.state.previousScale,
              ref: Ae(o)
            });
          });
        }
      }, this.setState = function(r, s, d) {
        var f = o.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(s) && !Number.isNaN(d)) {
          var m = Math.max(r, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = s, o.state.positionY = d, o.applyTransformation();
          var h = Ae(o);
          o.onChangeCallbacks.forEach(function(v) {
            return v(h);
          }), Ne(h, { scale: o.state.scale, positionX: s, positionY: d }, f);
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
        o.cleanupWindowEvents(), o.wrapperComponent = r, o.contentComponent = s, xi(o, o.state.scale), o.handleInitializeWrapperEvents(r), o.handleInitialize(s), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = Ae(o);
        Ne(d, void 0, o.props.onInit), Qz(o.props.ref, d);
      }, this.props = i, this.setup = Bh(this.props), this.state = Nv(this.props);
    }
    return n;
  })()
), Xl = Mr.createContext(null), yx = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, gx = Mr.forwardRef(function(n, i) {
  var o = le.useRef(new vx(n)).current, r = yx(n.children, Ar(o));
  return le.useImperativeHandle(i, function() {
    return Ar(o);
  }, [o]), le.useEffect(function() {
    o.update(n);
  }, [o, n]), g.jsx(Xl.Provider, Kt({ value: o }, { children: r }));
});
Mr.forwardRef(function(n, i) {
  var o = le.useRef(null), r = le.useContext(Xl);
  return le.useEffect(function() {
    return r.onChange(function(s) {
      if (o.current) {
        var d = 0, f = 0;
        o.current.style.transform = r.handleTransformStyles(d, f, 1 / s.instance.state.scale);
      }
    });
  }, [r]), g.jsx("div", Kt({}, n, { ref: Kz([o, i]) }));
});
function _x(n, i) {
  i === void 0 && (i = {});
  var o = i.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var bx = `.transform-component-module_wrapper__SPB86 {
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
_x(bx);
var Sx = function(n) {
  var i = n.children, o = n.wrapperClass, r = o === void 0 ? "" : o, s = n.contentClass, d = s === void 0 ? "" : s, f = n.wrapperStyle, m = n.contentStyle, h = n.wrapperProps, v = h === void 0 ? {} : h, _ = n.contentProps, b = _ === void 0 ? {} : _, x = n.infinite, T = x === void 0 ? !1 : x, j = le.useContext(Xl), Q = j.init, $ = j.cleanupWindowEvents, K = le.useRef(null), ae = le.useRef(null), L = le.useRef(null);
  return le.useEffect(function() {
    var G = K.current, q = ae.current;
    return G !== null && q !== null && Q && Q?.(G, q), function() {
      $?.();
    };
  }, []), le.useEffect(function() {
    if (T) {
      var G = L.current;
      if (G) {
        var q = function() {
          var I = j.state, B = I.positionX, V = I.positionY;
          G.style.backgroundPosition = "".concat(B, "px ").concat(V, "px");
        };
        return q(), j.onChange(q);
      }
    }
  }, [T, j]), g.jsxs("div", Kt({}, v, { ref: K, className: "".concat(bc.wrapperClass, " ").concat(fc.wrapper, " ").concat(r), style: f }, { children: [T && g.jsx("div", { ref: L, className: fc.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", Kt({}, b, { ref: ae, className: "".concat(bc.contentClass, " ").concat(fc.content, " ").concat(d), style: Kt(Kt({}, m), { transform: Uv(j.state.positionX, j.state.positionY, j.state.scale) }) }, { children: i }))] }));
};
function wx(n, i) {
  var o = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), r = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return o * r;
}
function zx(n) {
  var i = n.elementX, o = n.elementY, r = n.elementWidth, s = n.elementHeight, d = n.scale, f = n.positionX, m = n.positionY, h = n.viewportWidth, v = n.viewportHeight, _ = n.margin, b = _ === void 0 ? 0 : _, x = n.threshold, T = x === void 0 ? 0 : x, j = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: v + 2 * b
  }, Q = {
    x: i * d + f,
    y: o * d + m,
    width: r * d,
    height: s * d
  };
  if (T <= 0) {
    var $ = Q.x < j.x + j.width && Q.x + Q.width > j.x, K = Q.y < j.y + j.height && Q.y + Q.height > j.y;
    return $ && K;
  }
  var ae = Q.width * Q.height;
  if (ae <= 0)
    return !1;
  var L = wx(j, Q);
  return L / ae >= T;
}
Mr.forwardRef(function(n, i) {
  var o = n.x, r = n.y, s = n.width, d = n.height, f = n.margin, m = f === void 0 ? 0 : f, h = n.threshold, v = h === void 0 ? 0 : h, _ = n.placeholder, b = _ === void 0 ? null : _, x = n.onShow, T = n.onHide, j = n.children, Q = n.className, $ = n.style, K = le.useContext(Xl), ae = le.useState(!1), L = ae[0], G = ae[1], q = le.useRef(!1), I = le.useRef(x), B = le.useRef(T);
  return I.current = x, B.current = T, le.useEffect(function() {
    var V = function() {
      var ze, fe, xe = K.wrapperComponent;
      if (xe) {
        var W = zx({
          elementX: o,
          elementY: r,
          elementWidth: s,
          elementHeight: d,
          scale: K.state.scale,
          positionX: K.state.positionX,
          positionY: K.state.positionY,
          viewportWidth: xe.offsetWidth,
          viewportHeight: xe.offsetHeight,
          margin: m,
          threshold: v
        });
        W !== q.current && (q.current = W, G(W), W ? (ze = I.current) === null || ze === void 0 || ze.call(I) : (fe = B.current) === null || fe === void 0 || fe.call(B));
      }
    };
    V();
    var J = K.onChange(V), re;
    return K.wrapperComponent || (re = K.onInit(function() {
      return V();
    })), function() {
      J(), re?.();
    };
  }, [K, o, r, s, d, m, v]), L ? g.jsx("div", Kt({ ref: i, className: Q, style: $ }, { children: j })) : b ? g.jsx(g.Fragment, { children: b }) : null;
});
var xx = function() {
  var n = le.useContext(Xl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, kx = function() {
  var n = xx();
  return Ar(n);
};
const Sc = 24;
function Tx({ locked: n, zoneMode: i, hasZone: o, disabled: r, clearZoneLabel: s, onToggleLock: d, onClearZone: f }) {
  const { zoomIn: m, zoomOut: h, resetTransform: v } = kx();
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || i, children: /* @__PURE__ */ g.jsx(m0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => h(), disabled: n || i, children: /* @__PURE__ */ g.jsx(h0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => v(), children: /* @__PURE__ */ g.jsx(zc, {}) }),
    i ? /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": s, onClick: f, disabled: !o || r, children: /* @__PURE__ */ g.jsx(Y_, {}) }) : /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: d, children: n ? /* @__PURE__ */ g.jsx(Vh, {}) : /* @__PURE__ */ g.jsx(L_, {}) })
  ] });
}
function Ex(n, i, o) {
  const r = Math.min(Math.min(i, o), Math.max(Sc, Math.min(i, o) * 0.22));
  return yc({
    x1: n.x - r / 2,
    y1: n.y - r / 2,
    x2: n.x + r / 2,
    y2: n.y + r / 2
  }, i, o);
}
function Ax({
  hass: n,
  floor: i,
  language: o,
  selected: r,
  launched: s,
  active: d,
  disabled: f,
  selectionMode: m,
  zone: h,
  zoneLaunched: v,
  onToggle: _,
  onZoneChange: b
}) {
  const [x, T] = le.useState(!0), [j, Q] = le.useState({ width: 0, height: 0 }), [$, K] = le.useState({ width: 0, height: 0 }), [ae, L] = le.useState(0), G = le.useRef(null), q = le.useRef(void 0), I = le.useRef(h), B = n.states[i.map_entity], V = le.useMemo(() => Tv(B), [B]), J = le.useMemo(() => kv(B), [B]), re = le.useMemo(() => dw(i), [i]), ze = typeof B?.attributes.entity_picture == "string" ? B.attributes.entity_picture : void 0, fe = h ? Ml(h) : void 0;
  le.useEffect(() => {
    I.current = h;
  }, [h]), le.useEffect(() => {
    if (!d) return;
    const W = setInterval(() => L((ne) => ne + 1), 5e3);
    return () => {
      clearInterval(W), L(0);
    };
  }, [d]), le.useEffect(() => {
    const W = G.current;
    if (!W) return;
    const ne = new ResizeObserver(([E]) => {
      K({ width: E.contentRect.width, height: E.contentRect.height });
    });
    return ne.observe(W), () => ne.disconnect();
  }, []);
  let xe;
  return !B || B.state === "unavailable" ? xe = Y(o, "mapMissing") : ze ? J.length < 3 ? xe = Y(o, "calibrationMissing") : m === "rooms" && V.length === 0 && (xe = Y(o, "roomsMissing")) : xe = Y(o, "imageMissing"), xe ? /* @__PURE__ */ g.jsx("div", { className: "map-error", role: "alert", children: xe }) : /* @__PURE__ */ g.jsx("div", { className: `map-shell ${m === "zone" ? "zone-mode" : ""}`, ref: G, children: /* @__PURE__ */ g.jsxs(
    gx,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: x || m === "zone", step: 0.08 },
      pinch: { disabled: x || m === "zone" },
      panning: { disabled: x || m === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ g.jsx(
          Tx,
          {
            locked: x,
            zoneMode: m === "zone",
            hasZone: !!h,
            disabled: f,
            clearZoneLabel: Y(o, "clearZone"),
            onToggleLock: () => T((W) => !W),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ g.jsx(Sx, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!j.width || !j.height || !$.width || !$.height) return;
              const W = Math.min($.width / j.width, $.height / j.height);
              return { width: j.width * W, height: j.height * W };
            })(),
            children: [
              /* @__PURE__ */ g.jsx(
                "img",
                {
                  src: (() => {
                    const W = n.hassUrl(ze);
                    if (W.startsWith("data:")) return W;
                    const ne = W.includes("?") ? "&" : "?", E = B?.last_updated ?? B?.state ?? "";
                    return `${W}${ne}v=${encodeURIComponent(E)}${d ? `&r=${ae}` : ""}`;
                  })(),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (W) => Q({ width: W.currentTarget.naturalWidth, height: W.currentTarget.naturalHeight })
                }
              ),
              j.width > 0 && j.height > 0 && /* @__PURE__ */ g.jsxs(
                "svg",
                {
                  className: `room-overlay ${m === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${j.width} ${j.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": m === "zone" ? `${i.name} zone map` : `${i.name} rooms`,
                  onPointerDown: (W) => {
                    if (m !== "zone" || f) return;
                    const ne = W.currentTarget.getBoundingClientRect();
                    if (!ne.width || !ne.height) return;
                    const E = {
                      x: Math.min(j.width, Math.max(0, (W.clientX - ne.left) / ne.width * j.width)),
                      y: Math.min(j.height, Math.max(0, (W.clientY - ne.top) / ne.height * j.height))
                    }, X = W.target, F = X.dataset.zoneHandle, he = F ? "resize" : X.dataset.zoneMove === "true" && h ? "move" : "create";
                    if (q.current = { pointerId: W.pointerId, kind: he, origin: E, initial: h, handle: F }, W.currentTarget.setPointerCapture?.(W.pointerId), he === "create") {
                      const se = { x1: E.x, y1: E.y, x2: E.x, y2: E.y };
                      I.current = se, b(se);
                    }
                    W.preventDefault();
                  },
                  onPointerMove: (W) => {
                    const ne = q.current;
                    if (!ne || ne.pointerId !== W.pointerId || f) return;
                    const E = W.currentTarget.getBoundingClientRect();
                    if (!E.width || !E.height) return;
                    const X = {
                      x: Math.min(j.width, Math.max(0, (W.clientX - E.left) / E.width * j.width)),
                      y: Math.min(j.height, Math.max(0, (W.clientY - E.top) / E.height * j.height))
                    };
                    let F;
                    if (ne.kind === "create")
                      F = Ml({ x1: ne.origin.x, y1: ne.origin.y, x2: X.x, y2: X.y });
                    else if (ne.kind === "move" && ne.initial) {
                      const he = X.x - ne.origin.x, se = X.y - ne.origin.y;
                      F = yc({
                        x1: ne.initial.x1 + he,
                        y1: ne.initial.y1 + se,
                        x2: ne.initial.x2 + he,
                        y2: ne.initial.y2 + se
                      }, j.width, j.height);
                    } else if (ne.initial && ne.handle)
                      F = { ...ne.initial }, ne.handle.includes("w") && (F.x1 = X.x), ne.handle.includes("e") && (F.x2 = X.x), ne.handle.includes("n") && (F.y1 = X.y), ne.handle.includes("s") && (F.y2 = X.y), F = yc(F, j.width, j.height);
                    else return;
                    I.current = F, b(F), W.preventDefault();
                  },
                  onPointerUp: (W) => {
                    const ne = q.current;
                    if (!ne || ne.pointerId !== W.pointerId) return;
                    const E = I.current && Ml(I.current);
                    if (ne.kind === "create" && E && (E.x2 - E.x1 < Sc || E.y2 - E.y1 < Sc)) {
                      const X = Ex(ne.origin, j.width, j.height);
                      I.current = X, b(X);
                    }
                    q.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId), W.preventDefault();
                  },
                  onPointerCancel: (W) => {
                    q.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId);
                  },
                  children: [
                    V.map((W) => {
                      const ne = re.get(W.segment_id), E = !!ne?.area_id, X = r.has(W.segment_id), F = s.has(W.segment_id), he = cw(W, J), se = ne?.name || W.source_name, w = f || m === "zone" || !E;
                      return /* @__PURE__ */ g.jsxs("g", { className: `room ${X ? "selected" : ""} ${F ? "launched" : ""} ${E ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ g.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: sw(W, J),
                            role: "button",
                            tabIndex: w ? -1 : 0,
                            "aria-label": `${se}${E ? "" : ` — ${Y(o, "roomUnmapped")}`}`,
                            "aria-pressed": X,
                            "aria-disabled": w,
                            onClick: () => !w && _(W.segment_id),
                            onKeyDown: (N) => {
                              !w && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), _(W.segment_id));
                            },
                            children: /* @__PURE__ */ g.jsx("title", { children: E ? se : `${se}: ${Y(o, "roomUnmapped")}` })
                          }
                        ),
                        /* @__PURE__ */ g.jsxs("g", { className: "room-label", transform: `translate(${he.x} ${he.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ g.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ g.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ g.jsx(_c, { icon: ne?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ g.jsx("text", { y: "39", textAnchor: "middle", children: se })
                        ] })
                      ] }, W.segment_id);
                    }),
                    m === "zone" && fe && /* @__PURE__ */ g.jsxs("g", { className: `zone-selection ${v ? "launched" : ""}`, children: [
                      /* @__PURE__ */ g.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: fe.x1,
                          y: fe.y1,
                          width: fe.x2 - fe.x1,
                          height: fe.y2 - fe.y1,
                          role: "img",
                          "aria-label": Y(o, "selectedZone")
                        }
                      ),
                      [
                        ["nw", fe.x1, fe.y1],
                        ["ne", fe.x2, fe.y1],
                        ["se", fe.x2, fe.y2],
                        ["sw", fe.x1, fe.y2]
                      ].map(([W, ne, E]) => /* @__PURE__ */ g.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": W,
                          cx: ne,
                          cy: E,
                          r: "12",
                          "aria-label": `${Y(o, "resizeZone")} ${W}`
                        },
                        W
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
const Mx = {
  preparing: /* @__PURE__ */ g.jsx(Pp, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ g.jsx(E_, {}),
  cleaning_upstairs: /* @__PURE__ */ g.jsx(mc, {}),
  carry_downstairs: /* @__PURE__ */ g.jsx(Lh, {}),
  finishing: /* @__PURE__ */ g.jsx(Pp, { className: "spin" }),
  complete: /* @__PURE__ */ g.jsx(C_, {}),
  error: /* @__PURE__ */ g.jsx(zc, {}),
  idle: /* @__PURE__ */ g.jsx(mc, {})
}, Hh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function jx({
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
  const h = Y(n, Hh[i].title), v = Y(n, Hh[i].description), _ = !["complete", "error"].includes(i);
  return /* @__PURE__ */ g.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ g.jsx("div", { className: "assisted-icon", children: Mx[i] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ g.jsx("strong", { children: h }),
      /* @__PURE__ */ g.jsx("p", { children: v }),
      o.length > 0 && /* @__PURE__ */ g.jsx("small", { children: o.join(" · ") })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: s, children: [
        /* @__PURE__ */ g.jsx(Gh, {}),
        Y(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: d, children: [
        /* @__PURE__ */ g.jsx(Lh, {}),
        Y(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", disabled: r, onClick: f, children: [
        /* @__PURE__ */ g.jsx(zc, {}),
        Y(n, "newUpstairsJob")
      ] }),
      _ && /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: r, onClick: m, children: Y(n, "cancel") })
    ] })
  ] });
}
function xl(n, i) {
  if (!i) return;
  const o = n.states[i];
  return !o || ["unknown", "unavailable"].includes(o.state) ? void 0 : `${o.attributes.device_class === "duration" && !isNaN(Number(o.state)) ? String(Math.round(Number(o.state))) : o.state}${o.attributes.unit_of_measurement ? ` ${o.attributes.unit_of_measurement}` : ""}`;
}
function Ox(n, i, o) {
  if (!i) return;
  const r = n.states[i];
  if (!r || ["unknown", "unavailable"].includes(r.state)) return;
  const s = Number(r.state);
  if (!Number.isFinite(s) || s < 0) return;
  const d = String(r.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[d];
  if (m === void 0) return;
  const h = s * m, v = Math.max(0, Math.round(h)), _ = Math.floor(v / 60), b = v % 60;
  return `${[
    _ > 0 ? `${_} ${Y(o, "hourShort")}` : void 0,
    b > 0 || _ === 0 ? `${b} ${Y(o, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${Y(o, "remaining")}`;
}
function Cx(n, i) {
  if (i === "washing_the_mop") return Y(n, "washingMop");
}
function Nx(n, i) {
  const o = new Date(n);
  if (isNaN(o.getTime())) return;
  const r = Date.now() - o.getTime();
  if (r < 0) return;
  const s = Math.floor(r / 6e4);
  if (s < 1) return Y(i, "justNow");
  if (s < 60) return `${s} ${Y(i, "minuteShort")} ${Y(i, "ago")}`;
  const d = Math.floor(s / 60);
  if (d < 24) return `${d} ${Y(i, "hourShort")} ${Y(i, "ago")}`;
  const f = Math.floor(d / 24);
  return f === 1 ? Y(i, "yesterday") : `${f} ${Y(i, "daysAgo")}`;
}
function Dx(n, i) {
  const o = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((r) => r.map_select_option === o) ?? n.floors[0];
}
function Rx({ hass: n, config: i }) {
  const o = le.useRef(n), r = le.useRef(!1), s = i.language, [d, f] = le.useState(() => Dx(i, n).id), m = i.floors.find((H) => H.id === d) ?? i.floors[0], [h, v] = le.useState("rooms"), [_, b] = le.useState(/* @__PURE__ */ new Set()), [x, T] = le.useState(), [j, Q] = le.useState(!1), [$, K] = le.useState(!1), [ae, L] = le.useState(!1), [G, q] = le.useState(!1), [I, B] = le.useState(), [V, J] = le.useState(), [re, ze] = le.useState({ phase: "idle" }), fe = le.useMemo(() => kc(n, i), [n, i]), xe = le.useMemo(() => Jw(i, fe, m), [i, fe, m]), W = xe.find(({ preset: H, available: ue }) => H.id === i.default_preset && ue)?.preset ?? xe.find(({ available: H }) => H)?.preset, [ne, E] = le.useState(
    () => jl(W ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), X = n.states[i.entity], F = bw(n, i), he = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, se = le.useMemo(() => xw(he), [he]), w = _w(i, se), N = Sw(F), P = i.entities?.map_select ? n.states[i.entities.map_select]?.state : void 0;
  le.useEffect(() => {
    o.current = n;
  }, [n]), le.useEffect(() => {
    !N || !w || !se || (f(w.id), v("rooms"), T(void 0), b(new Set(se.segment_ids)), E({
      preset_id: "assisted_carry",
      strategy: se.strategy,
      cleaning_type: se.cleaning_type,
      fan_speed: se.fan_speed,
      mop_mode: se.mop_mode,
      mop_intensity: se.mop_intensity,
      cleaning_count: se.cleaning_count
    }));
  }, [N, w, se]), le.useEffect(() => {
    if (N || !P) return;
    const H = i.floors.find((ue) => ue.map_select_option === P);
    H && (f(H.id), b(/* @__PURE__ */ new Set()), T(void 0), H.assisted_carry && v("rooms"), Q(!1));
  }, [N, i.floors, P]);
  const te = i.entities?.status ? n.states[i.entities.status]?.state : void 0, pe = ["washing_the_mop", "washing_the_mop_2"].includes(te ?? ""), ye = [X?.state, te].includes("emptying_the_bin"), be = b0(X?.state) || pe, Ge = N || ["submitting", "starting", "active"].includes(re.phase);
  le.useEffect(() => {
    re.phase === "starting" && be ? ze((H) => ({ ...H, phase: "active" })) : re.phase === "active" && !be && (ze({ phase: "idle" }), b(/* @__PURE__ */ new Set()), T(void 0));
  }, [re.phase, be]), le.useEffect(() => {
    if (!V) return;
    const H = setTimeout(() => J(void 0), 5e3);
    return () => clearTimeout(H);
  }, [V]);
  const $e = new Set(re.floor_id === m.id ? re.segment_ids ?? [] : []), Pt = m.rooms.filter((H) => _.has(H.segment_id)), Ut = Pt.map((H) => H.name), rn = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, na = rn ? Ox(n, i.entities?.dock_mop_drying_remaining_time, s) : void 0, St = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, Ti = !be && St && !["unknown", "unavailable"].includes(St) ? Nx(St, s) : void 0, Ei = [
    Cx(s, te),
    rn ? Y(s, "dryingMop") : void 0,
    na
  ].filter((H) => !!H), ql = [
    { icon: /* @__PURE__ */ g.jsx(j_, {}), label: Y(s, "battery"), value: xl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ g.jsx(Q_, {}), label: Y(s, "room"), value: xl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ g.jsx(e0, {}), label: Y(s, "area"), value: xl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ g.jsx(D_, {}), label: Y(s, "duration"), value: xl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ g.jsx(r0, {}), label: Y(s, "progress"), value: xl(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ g.jsx(H_, {}), label: Y(s, "lastClean"), value: Ti }
  ].filter((H) => H.value), $l = (H) => {
    if (N) return;
    const ue = i.floors.find((ee) => ee.id === H);
    f(H), b(/* @__PURE__ */ new Set()), T(void 0), ue?.assisted_carry && v("rooms"), Q(!1);
  }, ja = (H) => {
    H === "zone" && m.assisted_carry || (v(H), b(/* @__PURE__ */ new Set()), T(void 0), Q(!1));
  }, Oa = (H) => {
    if (H) {
      const ue = xe.find(({ preset: ee, available: rt }) => ee.id === i.default_preset && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_only" && rt)?.preset ?? xe.find(({ available: ee }) => ee)?.preset;
      if (!ue) {
        J(Y(s, "unsupported"));
        return;
      }
      E(jl(ue));
    }
    if (h === "zone" && (ne.strategy !== "custom" || !gc.has(ne.cleaning_type))) {
      const ue = xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_only" && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_and_mop" && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => rt && ee.strategy === "custom" && gc.has(ee.cleaning_type ?? "vacuum"))?.preset;
      if (!ue) {
        J(Y(s, "unsupported"));
        return;
      }
      E(jl(ue));
    }
    if (!H && ne.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((ee) => ee.include_in_floor_clean !== !1 && ee.area_id).map((ee) => ee.segment_id);
      b(new Set(ue));
    }
    K(H), Q(!0);
  }, Ai = () => {
    const H = m.rooms.filter((ue) => ue.include_in_floor_clean !== !1 && ue.area_id).map((ue) => ue.segment_id);
    b(new Set(H)), Oa(!!m.assisted_carry);
  }, Dr = (H) => {
    if (H.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((ee) => ee.include_in_floor_clean !== !1 && ee.area_id).map((ee) => ee.segment_id);
      b(new Set(ue));
    }
    E(H);
  }, aa = (H) => H instanceof Dl ? `${H.operation}: ${H.message}` : H instanceof Error ? H.message : String(H), gt = async (H = ne) => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        const ue = ww(m, [..._], H);
        await kw(o.current, i, ue), Q(!1), J(Y(s, "preparingUpstairs"));
      } catch (ue) {
        J(aa(ue));
        try {
          await _i(o.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Rr = async () => {
    if (!(r.current || !w || !se)) {
      r.current = !0, L(!0);
      try {
        await Tw(o.current, i, w, se);
      } catch (H) {
        J(aa(H));
        try {
          await _i(o.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Ll = async () => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        await Ew(o.current, i);
      } catch (H) {
        J(aa(H));
        try {
          await _i(o.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Vl = async () => {
    if (!ae) {
      L(!0);
      try {
        await kh(o.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        J(aa(H));
      } finally {
        L(!1);
      }
    }
  }, Ca = async () => {
    if (!ae) {
      L(!0);
      try {
        const H = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((ue) => !!(ue && o.current.states[ue]));
        H.length > 0 && await o.current.callService("script", "turn_off", {}, { entity_id: H }), F === "cleaning_upstairs" && await o.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), pe && await lc(o.current, i, "wash", !0), ye && await lc(o.current, i, "empty", !0), await kh(o.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        J(aa(H));
      } finally {
        L(!1);
      }
    }
  }, Zr = async (H = ne) => {
    if ($) {
      await gt(H);
      return;
    }
    if (r.current) return;
    r.current = !0;
    const ue = {
      floor_id: m.id,
      segment_ids: h === "rooms" ? [..._] : void 0,
      selection_mode: h,
      zone: h === "zone" ? x : void 0
    };
    ze({ phase: "submitting", ...ue });
    try {
      const ee = h === "zone" && x ? uw(x, kv(o.current.states[m.map_entity])) : void 0;
      await Xw({
        getHass: () => o.current,
        config: i,
        floor: m,
        rooms: h === "rooms" ? Pt : [],
        draft: H,
        zone: ee
      }), ze({ phase: "starting", ...ue }), Q(!1), J(Y(s, "launched"));
    } catch (ee) {
      const rt = ee instanceof Me ? `${ee.operation}: ${ee.message}` : String(ee);
      ze({ phase: "failed", ...ue, error: rt }), J(rt);
    } finally {
      r.current = !1;
    }
  }, ia = async (H) => {
    try {
      if (H === "stop" || H === "return_to_base") {
        const ue = i.entities?.vacuum_then_mop_script;
        ue && o.current.states[ue] && o.current.states[ue].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: ue });
        const ee = i.entities?.assisted_carry_start_script;
        N && ee && o.current.states[ee] && o.current.states[ee].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: ee });
      }
      await o.current.callService("vacuum", H, {}, { entity_id: i.entity }), H === "stop" && F === "cleaning_upstairs" && await _i(o.current, i, "carry_downstairs");
    } catch (ue) {
      J(`${H}: ${ue instanceof Error ? ue.message : String(ue)}`);
    }
  }, Ur = async (H, ue) => {
    if (!I) {
      B(Y(s, "settingSaved"));
      try {
        await Rw(o.current, i, H, ue), J(Y(s, "settingSaved"));
      } catch (ee) {
        const rt = ee instanceof Tn ? `${ee.operation}: ${ee.message}` : String(ee);
        J(rt);
      } finally {
        B(void 0);
      }
    }
  }, Yr = async (H, ue) => {
    if (!I) {
      if (!ue) {
        const ee = H === "empty" ? Y(s, "confirmEmpty") : H === "wash" ? Y(s, "confirmWash") : H === "dry" ? Y(s, "confirmDry") : Y(s, "confirmDrain");
        if (!window.confirm(ee)) return;
      }
      B(Y(s, "dockActionSent"));
      try {
        await lc(o.current, i, H, ue), J(Y(s, "dockActionSent"));
      } catch (ee) {
        const rt = H === "drain" ? Y(s, "drainRejected") : ee instanceof Tn ? `${ee.operation}: ${ee.message}` : String(ee);
        J(rt);
      } finally {
        B(void 0);
      }
    }
  }, la = async (H) => {
    const ue = i.entities?.dock_child_lock;
    if (!(!ue || I)) {
      B(Y(s, "settingSaved"));
      try {
        await o.current.callService("switch", H ? "turn_on" : "turn_off", {}, { entity_id: ue }), J(Y(s, "settingSaved"));
      } catch (ee) {
        J(`child_lock: ${ee instanceof Error ? ee.message : String(ee)}`);
      } finally {
        B(void 0);
      }
    }
  };
  return /* @__PURE__ */ g.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("h1", { children: i.name ?? X?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ g.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ g.jsx("span", { className: `state-dot state-${X?.state ?? "unavailable"}` }),
          /* @__PURE__ */ g.jsx("span", { children: X?.state?.replaceAll("_", " ") ?? "unavailable" }),
          Ei.map((H) => /* @__PURE__ */ g.jsx("span", { className: "state-detail", children: ` · ${H}` }, H))
        ] })
      ] }),
      ql.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "status-strip", children: ql.map((H) => /* @__PURE__ */ g.jsxs("div", { title: H.label, children: [
        H.icon,
        /* @__PURE__ */ g.jsx("strong", { children: H.value })
      ] }, H.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": Y(s, "floor"), children: i.floors.map((H) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === H.id,
        className: m.id === H.id ? "active" : "",
        disabled: N && m.id !== H.id,
        onClick: () => $l(H.id),
        children: H.name
      },
      H.id
    )) }),
    !m.assisted_carry && /* @__PURE__ */ g.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": Y(s, "selectionMode"), children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "rooms",
          className: h === "rooms" ? "active" : "",
          disabled: Ge,
          onClick: () => ja("rooms"),
          children: Y(s, "rooms")
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "zone",
          className: h === "zone" ? "active" : "",
          disabled: Ge,
          onClick: () => ja("zone"),
          children: Y(s, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx(
      Ax,
      {
        hass: n,
        floor: m,
        language: s,
        selected: _,
        launched: $e,
        active: be,
        disabled: Ge,
        selectionMode: h,
        zone: x,
        zoneLaunched: re.floor_id === m.id && re.selection_mode === "zone" && ["starting", "active"].includes(re.phase),
        onToggle: (H) => b((ue) => {
          const ee = new Set(ue);
          return ee.has(H) ? ee.delete(H) : ee.add(H), ee;
        }),
        onZoneChange: T
      }
    ),
    m.assisted_carry && /* @__PURE__ */ g.jsx(
      jx,
      {
        language: s,
        stage: F,
        roomNames: Ut,
        pending: ae,
        onStart: Rr,
        onFinish: Ll,
        onReset: Vl,
        onCancel: Ca
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("strong", { children: h === "zone" ? Y(s, "selectedZone") : Y(s, "selectedRooms") }),
        /* @__PURE__ */ g.jsx("span", { children: h === "zone" ? x ? Y(s, "zoneReady") : Y(s, "noZoneSelected") : Ut.length ? Ut.join(" · ") : Y(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: h === "zone" ? +!!x : _.size })
    ] }),
    !N && /* @__PURE__ */ g.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", onClick: Ai, disabled: Ge, children: [
        /* @__PURE__ */ g.jsx(Jp, {}),
        " ",
        Y(s, "entireFloor")
      ] }),
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Oa(!!m.assisted_carry),
          disabled: (h === "zone" ? !x : _.size === 0) || Ge,
          children: [
            m.assisted_carry && /* @__PURE__ */ g.jsx(mc, {}),
            m.assisted_carry ? Y(s, "prepareUpstairs") : Y(s, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      X?.state === "paused" && fe.canStart && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("start"), children: [
        /* @__PURE__ */ g.jsx(Gh, {}),
        Y(s, "resume")
      ] }),
      X?.state === "cleaning" && fe.canPause && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("pause"), children: [
        /* @__PURE__ */ g.jsx(J_, {}),
        Y(s, "pause")
      ] }),
      fe.canStop && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("stop"), children: [
        /* @__PURE__ */ g.jsx(l0, {}),
        Y(s, "stop")
      ] }),
      fe.canDock && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ia("return_to_base"), children: [
        /* @__PURE__ */ g.jsx(Jp, {}),
        Y(s, "dock")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => q(!0), children: [
        /* @__PURE__ */ g.jsx(n0, {}),
        Y(s, "dockStation")
      ] })
    ] }),
    j && /* @__PURE__ */ g.jsx(
      rz,
      {
        language: s,
        draft: ne,
        capabilities: fe,
        presets: xe,
        selectedRoomNames: h === "zone" ? [Y(s, "customZone")] : Ut,
        submitting: re.phase === "submitting" || ae,
        assistedCarry: $,
        zoneCleaning: h === "zone",
        mopRoutes: fe.mopRoutes,
        onDraftChange: Dr,
        onClose: () => re.phase !== "submitting" && !ae && Q(!1),
        onStart: Zr
      }
    ),
    G && /* @__PURE__ */ g.jsx(
      Iw,
      {
        hass: n,
        config: i,
        language: s,
        washing: pe,
        emptying: ye,
        drying: rn,
        dryingRemaining: na,
        pending: I,
        onClose: () => !I && q(!1),
        onAction: Yr,
        onSetting: Ur,
        onChildLock: la
      }
    ),
    V && /* @__PURE__ */ g.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ g.jsx("span", { children: V }),
      /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": Y(s, "close"), onClick: () => J(void 0), children: /* @__PURE__ */ g.jsx(xc, {}) })
    ] })
  ] });
}
const Zx = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(var(--mode-count, 4),minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-hint{margin:-4px 0 12px;color:var(--rvm-muted);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', Ux = "0.9.0-dev";
let Xh = !1;
function Yx() {
  Xh || (Xh = !0, console.warn(
    "roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead."
  ));
}
class Gv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), o = document.createElement("style");
    o.textContent = Zx, i.append(o), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= g_.createRoot(this.container), this.root.render(i);
  }
}
class Bx extends Gv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = ow(i), this.config.vacuum_mode_fallback && Yx(), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ g.jsx(Rx, { hass: this.homeAssistant, config: this.config }));
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
    return xv();
  }
}
class Hx extends Gv {
  config = xv();
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
        yw,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Bx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", Hx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Ux} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Bx as RoborockVacuumMapCard,
  Hx as RoborockVacuumMapCardEditor
};
