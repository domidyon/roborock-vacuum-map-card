function Gh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Fs = { exports: {} }, So = {};
var Bp;
function mg() {
  if (Bp) return So;
  Bp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(r, s, d) {
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
  return So.Fragment = i, So.jsx = l, So.jsxs = l, So;
}
var Hp;
function pg() {
  return Hp || (Hp = 1, Fs.exports = mg()), Fs.exports;
}
var y = pg(), Is = { exports: {} }, wo = {}, ec = { exports: {} }, tc = {};
var Xp;
function hg() {
  return Xp || (Xp = 1, (function(n) {
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
    function l(E) {
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
    var h = [], v = [], g = 1, b = null, x = 3, T = !1, j = !1, Q = !1, $ = !1, K = typeof setTimeout == "function" ? setTimeout : null, ae = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function G(E) {
      for (var X = l(v); X !== null; ) {
        if (X.callback === null) r(v);
        else if (X.startTime <= E)
          r(v), X.sortIndex = X.expirationTime, i(h, X);
        else break;
        X = l(v);
      }
    }
    function q(E) {
      if (Q = !1, G(E), !j)
        if (l(h) !== null)
          j = !0, I || (I = !0, fe());
        else {
          var X = l(v);
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
                for (G(E), b = l(h); b !== null && !(b.expirationTime > E && re()); ) {
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
                    b === l(h) && r(h), G(E);
                  } else r(h);
                  b = l(h);
                }
                if (b !== null) X = !0;
                else {
                  var w = l(v);
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
        id: g++,
        callback: X,
        priorityLevel: E,
        startTime: F,
        expirationTime: se,
        sortIndex: -1
      }, F > he ? (E.sortIndex = F, i(v, E), l(h) === null && E === l(v) && (Q ? (ae(B), B = -1) : Q = !0, ne(q, F - he))) : (E.sortIndex = se, i(h, E), j || T || (j = !0, I || (I = !0, fe()))), E;
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
  })(tc)), tc;
}
var qp;
function vg() {
  return qp || (qp = 1, ec.exports = hg()), ec.exports;
}
var nc = { exports: {} }, ve = {};
var $p;
function _g() {
  if ($p) return ve;
  $p = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
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
    var _e = typeof w;
    (_e === "undefined" || _e === "boolean") && (w = null);
    var be = !1;
    if (w === null) be = !0;
    else
      switch (_e) {
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
            case g:
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
        te = w[$e], _e = Ge + W(te, $e), be += E(
          te,
          N,
          P,
          _e,
          pe
        );
    else if ($e = T(w), typeof $e == "function")
      for (w = $e.call(w), $e = 0; !(te = w.next()).done; )
        te = te.value, _e = Ge + W(te, $e++), be += E(
          te,
          N,
          P,
          _e,
          pe
        );
    else if (_e === "object") {
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
    return E(w, te, "", "", function(_e) {
      return N.call(P, _e, pe++);
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
  return ve.Activity = b, ve.Children = se, ve.Component = K, ve.Fragment = l, ve.Profiler = s, ve.PureComponent = L, ve.StrictMode = r, ve.Suspense = h, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, ve.__COMPILER_RUNTIME = {
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
      for (_e in N.key !== void 0 && (pe = "" + N.key), N)
        !V.call(N, _e) || _e === "key" || _e === "__self" || _e === "__source" || _e === "ref" && N.ref === void 0 || (te[_e] = N[_e]);
    var _e = arguments.length - 2;
    if (_e === 1) te.children = P;
    else if (1 < _e) {
      for (var be = Array(_e), Ge = 0; Ge < _e; Ge++)
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
    var te, pe = {}, _e = null;
    if (N != null)
      for (te in N.key !== void 0 && (_e = "" + N.key), N)
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
    return J(w, _e, pe);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, ve.isValidElement = ze, ve.lazy = function(w) {
    return {
      $$typeof: g,
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
    } catch (_e) {
      he(_e);
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
var Lp;
function xc() {
  return Lp || (Lp = 1, nc.exports = _g()), nc.exports;
}
var ac = { exports: {} }, _t = {};
var Vp;
function yg() {
  if (Vp) return _t;
  Vp = 1;
  var n = xc();
  function i(h) {
    var v = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var r = {
    d: {
      f: l,
      r: function() {
        throw Error(i(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function d(h, v, g) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: v,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, v) {
    if (h === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, _t.createPortal = function(h, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return d(h, v, null, g);
  }, _t.flushSync = function(h) {
    var v = f.T, g = r.p;
    try {
      if (f.T = null, r.p = 2, h) return h();
    } finally {
      f.T = v, r.p = g, r.d.f();
    }
  }, _t.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, r.d.C(h, v));
  }, _t.prefetchDNS = function(h) {
    typeof h == "string" && r.d.D(h);
  }, _t.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var g = v.as, b = m(g, v.crossOrigin), x = typeof v.integrity == "string" ? v.integrity : void 0, T = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? r.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: x,
          fetchPriority: T
        }
      ) : g === "script" && r.d.X(h, {
        crossOrigin: b,
        integrity: x,
        fetchPriority: T,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, _t.preinitModule = function(h, v) {
    if (typeof h == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var g = m(
            v.as,
            v.crossOrigin
          );
          r.d.M(h, {
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && r.d.M(h);
  }, _t.preload = function(h, v) {
    if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var g = v.as, b = m(g, v.crossOrigin);
      r.d.L(h, g, {
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
  }, _t.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var g = m(v.as, v.crossOrigin);
        r.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else r.d.m(h);
  }, _t.requestFormReset = function(h) {
    r.d.r(h);
  }, _t.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, _t.useFormState = function(h, v, g) {
    return f.H.useFormState(h, v, g);
  }, _t.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, _t.version = "19.2.8", _t;
}
var Gp;
function gg() {
  if (Gp) return ac.exports;
  Gp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), ac.exports = yg(), ac.exports;
}
var Qp;
function bg() {
  if (Qp) return wo;
  Qp = 1;
  var n = vg(), i = xc(), l = gg();
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
    for (var a = e, o = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (o = u.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === a) return h(u), e;
          if (c === o) return h(u), t;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== o.return) a = u, o = c;
      else {
        for (var p = !1, _ = u.child; _; ) {
          if (_ === a) {
            p = !0, a = u, o = c;
            break;
          }
          if (_ === o) {
            p = !0, o = u, a = c;
            break;
          }
          _ = _.sibling;
        }
        if (!p) {
          for (_ = c.child; _; ) {
            if (_ === a) {
              p = !0, a = c, o = u;
              break;
            }
            if (_ === o) {
              p = !0, o = c, a = u;
              break;
            }
            _ = _.sibling;
          }
          if (!p) throw Error(r(189));
        }
      }
      if (a.alternate !== o) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = g(e), t !== null) return t;
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
  var ne = Array.isArray, E = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
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
  var te = w(null), pe = w(null), _e = w(null), be = w(null);
  function Ge(e, t) {
    switch (P(_e, t), P(pe, e), P(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = up(t), e = sp(t, e);
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
    N(te), N(pe), N(_e);
  }
  function Pt(e) {
    e.memoizedState !== null && P(be, e);
    var t = te.current, a = sp(t, e.type);
    t !== a && (P(pe, e), P(te, a));
  }
  function Ut(e) {
    pe.current === e && (N(te), N(pe)), be.current === e && (N(be), _o._currentValue = F);
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
      var o = {
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
                } catch (O) {
                  var C = O;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (O) {
                  C = O;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                C = O;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (O) {
            if (O && C && typeof O.stack == "string")
              return [O.stack, C.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = o.DetermineComponentFrameRoot(), p = c[0], _ = c[1];
      if (p && _) {
        var S = p.split(`
`), M = _.split(`
`);
        for (u = o = 0; o < S.length && !S[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; u < M.length && !M[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (o === S.length || u === M.length)
          for (o = S.length - 1, u = M.length - 1; 1 <= o && 0 <= u && S[o] !== M[u]; )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (S[o] !== M[u]) {
            if (o !== 1 || u !== 1)
              do
                if (o--, u--, 0 > u || S[o] !== M[u]) {
                  var D = `
` + S[o].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      Ti = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? St(a) : "";
  }
  function $o(e, t) {
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
  function Lo(e) {
    try {
      var t = "", a = null;
      do
        t += $o(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var ja = Object.prototype.hasOwnProperty, Ca = n.unstable_scheduleCallback, Ai = n.unstable_cancelCallback, Rr = n.unstable_shouldYield, aa = n.unstable_requestPaint, yt = n.unstable_now, Zr = n.unstable_getCurrentPriorityLevel, Vo = n.unstable_ImmediatePriority, Go = n.unstable_UserBlockingPriority, Oa = n.unstable_NormalPriority, Ur = n.unstable_LowPriority, ia = n.unstable_IdlePriority, Yr = n.log, Br = n.unstable_setDisableYieldValue, oa = null, H = null;
  function ue(e) {
    if (typeof Yr == "function" && Br(e), H && typeof H.setStrictMode == "function")
      try {
        H.setStrictMode(oa, e);
      } catch {
      }
  }
  var ee = Math.clz32 ? Math.clz32 : Iv, rt = Math.log, Fv = Math.LN2;
  function Iv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (rt(e) / Fv | 0) | 0;
  }
  var Qo = 256, Ko = 262144, Jo = 4194304;
  function la(e) {
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
  function Po(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var _ = o & 134217727;
    return _ !== 0 ? (o = _ & ~c, o !== 0 ? u = la(o) : (p &= _, p !== 0 ? u = la(p) : a || (a = _ & ~e, a !== 0 && (u = la(a))))) : (_ = o & ~c, _ !== 0 ? u = la(_) : p !== 0 ? u = la(p) : a || (a = o & ~e, a !== 0 && (u = la(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Mi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function e_(e, t) {
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
  function qc() {
    var e = Jo;
    return Jo <<= 1, (Jo & 62914560) === 0 && (Jo = 4194304), e;
  }
  function Hr(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ji(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function t_(e, t, a, o, u, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var _ = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var D = 31 - ee(a), U = 1 << D;
      _[D] = 0, S[D] = -1;
      var C = M[D];
      if (C !== null)
        for (M[D] = null, D = 0; D < C.length; D++) {
          var O = C[D];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~U;
    }
    o !== 0 && $c(e, o, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function $c(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - ee(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 261930;
  }
  function Lc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var o = 31 - ee(a), u = 1 << o;
      u & t | e[o] & t && (e[o] |= t), a &= ~u;
    }
  }
  function Vc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Xr(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Xr(e) {
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
  function qr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Gc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Op(e.type));
  }
  function Qc(e, t) {
    var a = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = a;
    }
  }
  var En = Math.random().toString(36).slice(2), ct = "__reactFiber$" + En, wt = "__reactProps$" + En, Na = "__reactContainer$" + En, $r = "__reactEvents$" + En, n_ = "__reactListeners$" + En, a_ = "__reactHandles$" + En, Kc = "__reactResources$" + En, Ci = "__reactMarker$" + En;
  function Lr(e) {
    delete e[ct], delete e[wt], delete e[$r], delete e[n_], delete e[a_];
  }
  function Da(e) {
    var t = e[ct];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Na] || a[ct]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = vp(e); e !== null; ) {
            if (a = e[ct]) return a;
            e = vp(e);
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
  function Oi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Za(e) {
    var t = e[Kc];
    return t || (t = e[Kc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Ci] = !0;
  }
  var Jc = /* @__PURE__ */ new Set(), Pc = {};
  function ra(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for (Pc[e] = t, e = 0; e < t.length; e++)
      Jc.add(t[e]);
  }
  var i_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wc = {}, Fc = {};
  function o_(e) {
    return ja.call(Fc, e) ? !0 : ja.call(Wc, e) ? !1 : i_.test(e) ? Fc[e] = !0 : (Wc[e] = !0, !1);
  }
  function Wo(e, t, a) {
    if (o_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Fo(e, t, a) {
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
  function un(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
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
  function Ic(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function l_(e, t, a) {
    var o = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var u = o.get, c = o.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(p) {
          a = "" + p, c.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: o.enumerable
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
  function Vr(e) {
    if (!e._valueTracker) {
      var t = Ic(e) ? "checked" : "value";
      e._valueTracker = l_(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ed(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), o = "";
    return e && (o = Ic(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Io(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var r_ = /[\n"\\]/g;
  function Bt(e) {
    return e.replace(
      r_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gr(e, t, a, o, u, c, p, _) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Qr(e, p, Yt(t)) : a != null ? Qr(e, p, Yt(a)) : o != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Yt(_) : e.removeAttribute("name");
  }
  function td(e, t, a, o, u, c, p, _) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Vr(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? u, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = _ ? e.checked : !!o, e.defaultChecked = !!o, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Vr(e);
  }
  function Qr(e, t, a) {
    t === "number" && Io(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, t, a, o) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function nd(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function ad(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(r(92));
        if (ne(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o), Vr(e);
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
  var u_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function id(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || u_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function od(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var u in t)
        o = t[u], t.hasOwnProperty(u) && a[u] !== o && id(e, u, o);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && id(e, c, t[c]);
  }
  function Kr(e) {
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
  var s_ = /* @__PURE__ */ new Map([
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
  ]), c_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function el(e) {
    return c_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sn() {
  }
  var Jr = null;
  function Pr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, Xa = null;
  function ld(e) {
    var t = Ra(e);
    if (t && (e = t.stateNode)) {
      var a = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gr(
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
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var u = o[wt] || null;
                if (!u) throw Error(r(90));
                Gr(
                  o,
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
              o = a[t], o.form === e.form && ed(o);
          }
          break e;
        case "textarea":
          nd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ya(e, !!a.multiple, t, !1);
      }
    }
  }
  var Wr = !1;
  function rd(e, t, a) {
    if (Wr) return e(t, a);
    Wr = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Wr = !1, (Ha !== null || Xa !== null) && (Xl(), Ha && (t = Ha, e = Xa, Xa = Ha = null, ld(t), e)))
        for (t = 0; t < e.length; t++) ld(e[t]);
    }
  }
  function Ni(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[wt] || null;
    if (o === null) return null;
    a = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
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
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fr = !1;
  if (cn)
    try {
      var Di = {};
      Object.defineProperty(Di, "passive", {
        get: function() {
          Fr = !0;
        }
      }), window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
    } catch {
      Fr = !1;
    }
  var An = null, Ir = null, tl = null;
  function ud() {
    if (tl) return tl;
    var e, t = Ir, a = t.length, o, u = "value" in An ? An.value : An.textContent, c = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var p = a - e;
    for (o = 1; o <= p && t[a - o] === u[c - o]; o++) ;
    return tl = u.slice(e, 1 < o ? 1 - o : void 0);
  }
  function nl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function al() {
    return !0;
  }
  function sd() {
    return !1;
  }
  function zt(e) {
    function t(a, o, u, c, p) {
      this._reactName = a, this._targetInst = u, this.type = o, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var _ in e)
        e.hasOwnProperty(_) && (a = e[_], this[_] = a ? a(c) : c[_]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? al : sd, this.isPropagationStopped = sd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = al);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = al);
      },
      persist: function() {
      },
      isPersistent: al
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
  }, il = zt(ua), Ri = b({}, ua, { view: 0, detail: 0 }), d_ = zt(Ri), eu, tu, Zi, ol = b({}, Ri, {
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
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? (eu = e.screenX - Zi.screenX, tu = e.screenY - Zi.screenY) : tu = eu = 0, Zi = e), eu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tu;
    }
  }), cd = zt(ol), f_ = b({}, ol, { dataTransfer: 0 }), m_ = zt(f_), p_ = b({}, Ri, { relatedTarget: 0 }), nu = zt(p_), h_ = b({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), v_ = zt(h_), __ = b({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), y_ = zt(__), g_ = b({}, ua, { data: 0 }), dd = zt(g_), b_ = {
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
  }, S_ = {
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
  }, w_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function z_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = w_[e]) ? !!t[e] : !1;
  }
  function au() {
    return z_;
  }
  var x_ = b({}, Ri, {
    key: function(e) {
      if (e.key) {
        var t = b_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? S_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function(e) {
      return e.type === "keypress" ? nl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), k_ = zt(x_), T_ = b({}, ol, {
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
  }), fd = zt(T_), E_ = b({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au
  }), A_ = zt(E_), M_ = b({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), j_ = zt(M_), C_ = b({}, ol, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), O_ = zt(C_), N_ = b({}, ua, {
    newState: 0,
    oldState: 0
  }), D_ = zt(N_), R_ = [9, 13, 27, 32], iu = cn && "CompositionEvent" in window, Ui = null;
  cn && "documentMode" in document && (Ui = document.documentMode);
  var Z_ = cn && "TextEvent" in window && !Ui, md = cn && (!iu || Ui && 8 < Ui && 11 >= Ui), pd = " ", hd = !1;
  function vd(e, t) {
    switch (e) {
      case "keyup":
        return R_.indexOf(t.keyCode) !== -1;
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
  function _d(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qa = !1;
  function U_(e, t) {
    switch (e) {
      case "compositionend":
        return _d(t);
      case "keypress":
        return t.which !== 32 ? null : (hd = !0, pd);
      case "textInput":
        return e = t.data, e === pd && hd ? null : e;
      default:
        return null;
    }
  }
  function Y_(e, t) {
    if (qa)
      return e === "compositionend" || !iu && vd(e, t) ? (e = ud(), tl = Ir = An = null, qa = !1, e) : null;
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
        return md && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var B_ = {
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
  function yd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!B_[e.type] : t === "textarea";
  }
  function gd(e, t, a, o) {
    Ha ? Xa ? Xa.push(o) : Xa = [o] : Ha = o, t = Kl(t, "onChange"), 0 < t.length && (a = new il(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, Bi = null;
  function H_(e) {
    np(e, 0);
  }
  function ll(e) {
    var t = Oi(e);
    if (ed(t)) return e;
  }
  function bd(e, t) {
    if (e === "change") return t;
  }
  var Sd = !1;
  if (cn) {
    var ou;
    if (cn) {
      var lu = "oninput" in document;
      if (!lu) {
        var wd = document.createElement("div");
        wd.setAttribute("oninput", "return;"), lu = typeof wd.oninput == "function";
      }
      ou = lu;
    } else ou = !1;
    Sd = ou && (!document.documentMode || 9 < document.documentMode);
  }
  function zd() {
    Yi && (Yi.detachEvent("onpropertychange", xd), Bi = Yi = null);
  }
  function xd(e) {
    if (e.propertyName === "value" && ll(Bi)) {
      var t = [];
      gd(
        t,
        Bi,
        e,
        Pr(e)
      ), rd(H_, t);
    }
  }
  function X_(e, t, a) {
    e === "focusin" ? (zd(), Yi = t, Bi = a, Yi.attachEvent("onpropertychange", xd)) : e === "focusout" && zd();
  }
  function q_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ll(Bi);
  }
  function $_(e, t) {
    if (e === "click") return ll(t);
  }
  function L_(e, t) {
    if (e === "input" || e === "change")
      return ll(t);
  }
  function V_(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : V_;
  function Hi(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var u = a[o];
      if (!ja.call(t, u) || !jt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function kd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Td(e, t) {
    var a = kd(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= t && o >= t)
          return { node: a, offset: t - e };
        e = o;
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
      a = kd(a);
    }
  }
  function Ed(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ad(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Io(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Io(e.document);
    }
    return t;
  }
  function ru(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var G_ = cn && "documentMode" in document && 11 >= document.documentMode, $a = null, uu = null, Xi = null, su = !1;
  function Md(e, t, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    su || $a == null || $a !== Io(o) || (o = $a, "selectionStart" in o && ru(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Xi && Hi(Xi, o) || (Xi = o, o = Kl(uu, "onSelect"), 0 < o.length && (t = new il(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: o }), t.target = $a)));
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
  }, cu = {}, jd = {};
  cn && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ca(e) {
    if (cu[e]) return cu[e];
    if (!La[e]) return e;
    var t = La[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in jd)
        return cu[e] = t[a];
    return e;
  }
  var Cd = ca("animationend"), Od = ca("animationiteration"), Nd = ca("animationstart"), Q_ = ca("transitionrun"), K_ = ca("transitionstart"), J_ = ca("transitioncancel"), Dd = ca("transitionend"), Rd = /* @__PURE__ */ new Map(), du = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  du.push("scrollEnd");
  function Wt(e, t) {
    Rd.set(e, t), ra(t, [e]);
  }
  var rl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ht = [], Va = 0, fu = 0;
  function ul() {
    for (var e = Va, t = fu = Va = 0; t < e; ) {
      var a = Ht[t];
      Ht[t++] = null;
      var o = Ht[t];
      Ht[t++] = null;
      var u = Ht[t];
      Ht[t++] = null;
      var c = Ht[t];
      if (Ht[t++] = null, o !== null && u !== null) {
        var p = o.pending;
        p === null ? u.next = u : (u.next = p.next, p.next = u), o.pending = u;
      }
      c !== 0 && Zd(a, u, c);
    }
  }
  function sl(e, t, a, o) {
    Ht[Va++] = e, Ht[Va++] = t, Ht[Va++] = a, Ht[Va++] = o, fu |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function mu(e, t, a, o) {
    return sl(e, t, a, o), cl(e);
  }
  function da(e, t) {
    return sl(e, null, null, t), cl(e);
  }
  function Zd(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= a, o = c.alternate, o !== null && (o.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - ee(a), e = c.hiddenUpdates, o = e[u], o === null ? e[u] = [t] : o.push(t), t.lane = a | 536870912), c) : null;
  }
  function cl(e) {
    if (50 < so)
      throw so = 0, ws = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ga = {};
  function P_(e, t, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, a, o) {
    return new P_(e, t, a, o);
  }
  function pu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function dn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ct(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Ud(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function dl(e, t, a, o, u, c) {
    var p = 0;
    if (o = e, typeof e == "function") pu(e) && (p = 1);
    else if (typeof e == "string")
      p = tg(
        e,
        a,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case J:
          return e = Ct(31, a, t, u), e.elementType = J, e.lanes = c, e;
        case Q:
          return fa(a.children, u, c, t);
        case $:
          p = 8, u |= 24;
          break;
        case K:
          return e = Ct(12, a, t, u | 2), e.elementType = K, e.lanes = c, e;
        case q:
          return e = Ct(13, a, t, u), e.elementType = q, e.lanes = c, e;
        case I:
          return e = Ct(19, a, t, u), e.elementType = I, e.lanes = c, e;
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
                p = 16, o = null;
                break e;
            }
          p = 29, a = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = Ct(p, a, t, u), t.elementType = e, t.type = o, t.lanes = c, t;
  }
  function fa(e, t, a, o) {
    return e = Ct(7, e, o, t), e.lanes = a, e;
  }
  function hu(e, t, a) {
    return e = Ct(6, e, null, t), e.lanes = a, e;
  }
  function Yd(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function vu(e, t, a) {
    return t = Ct(
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
  var Bd = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Bd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Lo(t)
      }, Bd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Lo(t)
    };
  }
  var Qa = [], Ka = 0, fl = null, qi = 0, qt = [], $t = 0, Mn = null, nn = 1, an = "";
  function fn(e, t) {
    Qa[Ka++] = qi, Qa[Ka++] = fl, fl = e, qi = t;
  }
  function Hd(e, t, a) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Mn, Mn = e;
    var o = nn;
    e = an;
    var u = 32 - ee(o) - 1;
    o &= ~(1 << u), a += 1;
    var c = 32 - ee(t) + u;
    if (30 < c) {
      var p = u - u % 5;
      c = (o & (1 << p) - 1).toString(32), o >>= p, u -= p, nn = 1 << 32 - ee(t) + u | a << u | o, an = c + e;
    } else
      nn = 1 << c | a << u | o, an = e;
  }
  function _u(e) {
    e.return !== null && (fn(e, 1), Hd(e, 1, 0));
  }
  function yu(e) {
    for (; e === fl; )
      fl = Qa[--Ka], Qa[Ka] = null, qi = Qa[--Ka], Qa[Ka] = null;
    for (; e === Mn; )
      Mn = qt[--$t], qt[$t] = null, an = qt[--$t], qt[$t] = null, nn = qt[--$t], qt[$t] = null;
  }
  function Xd(e, t) {
    qt[$t++] = nn, qt[$t++] = an, qt[$t++] = Mn, nn = t.id, an = t.overflow, Mn = e;
  }
  var dt = null, Le = null, Ee = !1, jn = null, Lt = !1, gu = Error(r(519));
  function Cn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $i(Xt(t, e)), gu;
  }
  function qd(e) {
    var t = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (t[ct] = e, t[wt] = o, a) {
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
        for (a = 0; a < fo.length; a++)
          we(fo[a], t);
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
        we("invalid", t), td(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        );
        break;
      case "select":
        we("invalid", t);
        break;
      case "textarea":
        we("invalid", t), ad(t, o.value, o.defaultValue, o.children);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || lp(t.textContent, a) ? (o.popover != null && (we("beforetoggle", t), we("toggle", t)), o.onScroll != null && we("scroll", t), o.onScrollEnd != null && we("scrollend", t), o.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || Cn(e, !0);
  }
  function $d(e) {
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
    if (!Ee) return $d(e), Ee = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Us(e.type, e.memoizedProps)), a = !a), a && Le && Cn(e), $d(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Le = hp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Le = hp(e);
    } else
      t === 27 ? (t = Le, Vn(e.type) ? (e = qs, qs = null, Le = e) : Le = t) : Le = dt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ma() {
    Le = dt = null, Ee = !1;
  }
  function bu() {
    var e = jn;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), jn = null), e;
  }
  function $i(e) {
    jn === null ? jn = [e] : jn.push(e);
  }
  var Su = w(null), pa = null, mn = null;
  function On(e, t, a) {
    P(Su, t._currentValue), t._currentValue = a;
  }
  function pn(e) {
    e._currentValue = Su.current, N(Su);
  }
  function wu(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function zu(e, t, a, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var p = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var _ = c;
          c = u;
          for (var S = 0; S < t.length; S++)
            if (_.context === t[S]) {
              c.lanes |= a, _ = c.alternate, _ !== null && (_.lanes |= a), wu(
                c.return,
                a,
                e
              ), o || (p = null);
              break e;
            }
          c = _.next;
        }
      } else if (u.tag === 18) {
        if (p = u.return, p === null) throw Error(r(341));
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), wu(p, a, e), p = null;
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
  function Pa(e, t, a, o) {
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
          var _ = u.type;
          jt(u.pendingProps.value, p.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (u === be.current) {
        if (p = u.alternate, p === null) throw Error(r(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(_o) : e = [_o]);
      }
      u = u.return;
    }
    e !== null && zu(
      t,
      e,
      a,
      o
    ), t.flags |= 262144;
  }
  function ml(e) {
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
    return Ld(pa, e);
  }
  function pl(e, t) {
    return pa === null && ha(e), Ld(e, t);
  }
  function Ld(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, mn === null) {
      if (e === null) throw Error(r(308));
      mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else mn = mn.next = t;
    return a;
  }
  var W_ = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, F_ = n.unstable_scheduleCallback, I_ = n.unstable_NormalPriority, nt = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xu() {
    return {
      controller: new W_(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Li(e) {
    e.refCount--, e.refCount === 0 && F_(I_, function() {
      e.controller.abort();
    });
  }
  var Vi = null, ku = 0, Wa = 0, Fa = null;
  function ey(e, t) {
    if (Vi === null) {
      var a = Vi = [];
      ku = 0, Wa = As(), Fa = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return ku++, t.then(Vd, Vd), t;
  }
  function Vd() {
    if (--ku === 0 && Vi !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var e = Vi;
      Vi = null, Wa = 0, Fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ty(e, t) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), o;
  }
  var Gd = E.S;
  E.S = function(e, t) {
    jm = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && ey(e, t), Gd !== null && Gd(e, t);
  };
  var va = w(null);
  function Tu() {
    var e = va.current;
    return e !== null ? e : qe.pooledCache;
  }
  function hl(e, t) {
    t === null ? P(va, va.current) : P(va, t.pool);
  }
  function Qd() {
    var e = Tu();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Ia = Error(r(460)), Eu = Error(r(474)), vl = Error(r(542)), _l = { then: function() {
  } };
  function Kd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Jd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(sn, sn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Wd(e), e;
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(o) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = o;
              }
            },
            function(o) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = o;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Wd(e), e;
        }
        throw ya = t, Ia;
    }
  }
  function _a(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ya = a, Ia) : a;
    }
  }
  var ya = null;
  function Pd() {
    if (ya === null) throw Error(r(459));
    var e = ya;
    return ya = null, e;
  }
  function Wd(e) {
    if (e === Ia || e === vl)
      throw Error(r(483));
  }
  var ei = null, Gi = 0;
  function yl(e) {
    var t = Gi;
    return Gi += 1, ei === null && (ei = []), Jd(ei, e, t);
  }
  function Qi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function gl(e, t) {
    throw t.$$typeof === x ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Fd(e) {
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
    function o(k) {
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
    function _(k, z, A, R) {
      return z === null || z.tag !== 6 ? (z = hu(A, k.mode, R), z.return = k, z) : (z = u(z, A), z.return = k, z);
    }
    function S(k, z, A, R) {
      var ce = A.type;
      return ce === Q ? D(
        k,
        z,
        A.props.children,
        R,
        A.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && _a(ce) === z.type) ? (z = u(z, A.props), Qi(z, A), z.return = k, z) : (z = dl(
        A.type,
        A.key,
        A.props,
        null,
        k.mode,
        R
      ), Qi(z, A), z.return = k, z);
    }
    function M(k, z, A, R) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== A.containerInfo || z.stateNode.implementation !== A.implementation ? (z = vu(A, k.mode, R), z.return = k, z) : (z = u(z, A.children || []), z.return = k, z);
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
        return z = hu(
          "" + z,
          k.mode,
          A
        ), z.return = k, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return A = dl(
              z.type,
              z.key,
              z.props,
              null,
              k.mode,
              A
            ), Qi(A, z), A.return = k, A;
          case j:
            return z = vu(
              z,
              k.mode,
              A
            ), z.return = k, z;
          case V:
            return z = _a(z), U(k, z, A);
        }
        if (ne(z) || fe(z))
          return z = fa(
            z,
            k.mode,
            A,
            null
          ), z.return = k, z;
        if (typeof z.then == "function")
          return U(k, yl(z), A);
        if (z.$$typeof === L)
          return U(
            k,
            pl(k, z),
            A
          );
        gl(k, z);
      }
      return null;
    }
    function C(k, z, A, R) {
      var ce = z !== null ? z.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return ce !== null ? null : _(k, z, "" + A, R);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            return A.key === ce ? S(k, z, A, R) : null;
          case j:
            return A.key === ce ? M(k, z, A, R) : null;
          case V:
            return A = _a(A), C(k, z, A, R);
        }
        if (ne(A) || fe(A))
          return ce !== null ? null : D(k, z, A, R, null);
        if (typeof A.then == "function")
          return C(
            k,
            z,
            yl(A),
            R
          );
        if (A.$$typeof === L)
          return C(
            k,
            z,
            pl(k, A),
            R
          );
        gl(k, A);
      }
      return null;
    }
    function O(k, z, A, R, ce) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return k = k.get(A) || null, _(z, k, "" + R, ce);
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
            return R = _a(R), O(
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
          return O(
            k,
            z,
            A,
            yl(R),
            ce
          );
        if (R.$$typeof === L)
          return O(
            k,
            z,
            A,
            pl(z, R),
            ce
          );
        gl(z, R);
      }
      return null;
    }
    function ie(k, z, A, R) {
      for (var ce = null, je = null, le = z, ge = z = 0, Te = null; le !== null && ge < A.length; ge++) {
        le.index > ge ? (Te = le, le = null) : Te = le.sibling;
        var Ce = C(
          k,
          le,
          A[ge],
          R
        );
        if (Ce === null) {
          le === null && (le = Te);
          break;
        }
        e && le && Ce.alternate === null && t(k, le), z = c(Ce, z, ge), je === null ? ce = Ce : je.sibling = Ce, je = Ce, le = Te;
      }
      if (ge === A.length)
        return a(k, le), Ee && fn(k, ge), ce;
      if (le === null) {
        for (; ge < A.length; ge++)
          le = U(k, A[ge], R), le !== null && (z = c(
            le,
            z,
            ge
          ), je === null ? ce = le : je.sibling = le, je = le);
        return Ee && fn(k, ge), ce;
      }
      for (le = o(le); ge < A.length; ge++)
        Te = O(
          le,
          k,
          ge,
          A[ge],
          R
        ), Te !== null && (e && Te.alternate !== null && le.delete(
          Te.key === null ? ge : Te.key
        ), z = c(
          Te,
          z,
          ge
        ), je === null ? ce = Te : je.sibling = Te, je = Te);
      return e && le.forEach(function(Pn) {
        return t(k, Pn);
      }), Ee && fn(k, ge), ce;
    }
    function me(k, z, A, R) {
      if (A == null) throw Error(r(151));
      for (var ce = null, je = null, le = z, ge = z = 0, Te = null, Ce = A.next(); le !== null && !Ce.done; ge++, Ce = A.next()) {
        le.index > ge ? (Te = le, le = null) : Te = le.sibling;
        var Pn = C(k, le, Ce.value, R);
        if (Pn === null) {
          le === null && (le = Te);
          break;
        }
        e && le && Pn.alternate === null && t(k, le), z = c(Pn, z, ge), je === null ? ce = Pn : je.sibling = Pn, je = Pn, le = Te;
      }
      if (Ce.done)
        return a(k, le), Ee && fn(k, ge), ce;
      if (le === null) {
        for (; !Ce.done; ge++, Ce = A.next())
          Ce = U(k, Ce.value, R), Ce !== null && (z = c(Ce, z, ge), je === null ? ce = Ce : je.sibling = Ce, je = Ce);
        return Ee && fn(k, ge), ce;
      }
      for (le = o(le); !Ce.done; ge++, Ce = A.next())
        Ce = O(le, k, ge, Ce.value, R), Ce !== null && (e && Ce.alternate !== null && le.delete(Ce.key === null ? ge : Ce.key), z = c(Ce, z, ge), je === null ? ce = Ce : je.sibling = Ce, je = Ce);
      return e && le.forEach(function(fg) {
        return t(k, fg);
      }), Ee && fn(k, ge), ce;
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
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === V && _a(ce) === z.type) {
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
              ), R.return = k, k = R) : (R = dl(
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
              R = vu(A, k.mode, R), R.return = k, k = R;
            }
            return p(k);
          case V:
            return A = _a(A), He(
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
            yl(A),
            R
          );
        if (A.$$typeof === L)
          return He(
            k,
            z,
            pl(k, A),
            R
          );
        gl(k, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, z !== null && z.tag === 6 ? (a(k, z.sibling), R = u(z, A), R.return = k, k = R) : (a(k, z), R = hu(A, k.mode, R), R.return = k, k = R), p(k)) : a(k, z);
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
      } catch (le) {
        if (le === Ia || le === vl) throw le;
        var je = Ct(29, le, null, k.mode);
        return je.lanes = R, je.return = k, je;
      }
    };
  }
  var ga = Fd(!0), Id = Fd(!1), Nn = !1;
  function Au(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mu(e, t) {
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
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (De & 2) !== 0) {
      var u = o.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), o.pending = t, t = cl(e), Zd(e, null, a), t;
    }
    return sl(e, o, t, a), cl(e);
  }
  function Ki(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, Lc(e, a);
    }
  }
  function ju(e, t) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
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
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Cu = !1;
  function Ji() {
    if (Cu) {
      var e = Fa;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, a, o) {
    Cu = !1;
    var u = e.updateQueue;
    Nn = !1;
    var c = u.firstBaseUpdate, p = u.lastBaseUpdate, _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var S = _, M = S.next;
      S.next = null, p === null ? c = M : p.next = M, p = S;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, _ = D.lastBaseUpdate, _ !== p && (_ === null ? D.firstBaseUpdate = M : _.next = M, D.lastBaseUpdate = S));
    }
    if (c !== null) {
      var U = u.baseState;
      p = 0, D = M = S = null, _ = c;
      do {
        var C = _.lane & -536870913, O = C !== _.lane;
        if (O ? (ke & C) === C : (o & C) === C) {
          C !== 0 && C === Wa && (Cu = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var ie = e, me = _;
            C = t;
            var He = a;
            switch (me.tag) {
              case 1:
                if (ie = me.payload, typeof ie == "function") {
                  U = ie.call(He, U, C);
                  break e;
                }
                U = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = me.payload, C = typeof ie == "function" ? ie.call(He, U, C) : ie, C == null) break e;
                U = b({}, U, C);
                break e;
              case 2:
                Nn = !0;
            }
          }
          C = _.callback, C !== null && (e.flags |= 64, O && (e.flags |= 8192), O = u.callbacks, O === null ? u.callbacks = [C] : O.push(C));
        } else
          O = {
            lane: C,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, D === null ? (M = D = O, S = U) : D = D.next = O, p |= C;
        if (_ = _.next, _ === null) {
          if (_ = u.shared.pending, _ === null)
            break;
          O = _, _ = O.next, O.next = null, u.lastBaseUpdate = O, u.shared.pending = null;
        }
      } while (!0);
      D === null && (S = U), u.baseState = S, u.firstBaseUpdate = M, u.lastBaseUpdate = D, c === null && (u.shared.lanes = 0), Hn |= p, e.lanes = p, e.memoizedState = U;
    }
  }
  function ef(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function tf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        ef(a[e], t);
  }
  var ti = w(null), bl = w(0);
  function nf(e, t) {
    e = zn, P(bl, e), P(ti, t), zn = e | t.baseLanes;
  }
  function Ou() {
    P(bl, zn), P(ti, ti.current);
  }
  function Nu() {
    zn = bl.current, N(ti), N(bl);
  }
  var Ot = w(null), Vt = null;
  function Zn(e) {
    var t = e.alternate;
    P(et, et.current & 1), P(Ot, e), Vt === null && (t === null || ti.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function Du(e) {
    P(et, et.current), P(Ot, e), Vt === null && (Vt = e);
  }
  function af(e) {
    e.tag === 22 ? (P(et, et.current), P(Ot, e), Vt === null && (Vt = e)) : Un();
  }
  function Un() {
    P(et, et.current), P(Ot, Ot.current);
  }
  function Nt(e) {
    N(Ot), Vt === e && (Vt = null), N(et);
  }
  var et = w(0);
  function Sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Hs(a) || Xs(a)))
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
  var hn = 0, ye = null, Ye = null, at = null, wl = !1, ni = !1, ba = !1, zl = 0, Wi = 0, ai = null, ny = 0;
  function Pe() {
    throw Error(r(321));
  }
  function Ru(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!jt(e[a], t[a])) return !1;
    return !0;
  }
  function Zu(e, t, a, o, u, c) {
    return hn = c, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, E.H = e === null || e.memoizedState === null ? Xf : Wu, ba = !1, c = a(o, u), ba = !1, ni && (c = lf(
      t,
      a,
      o,
      u
    )), of(e), c;
  }
  function of(e) {
    E.H = eo;
    var t = Ye !== null && Ye.next !== null;
    if (hn = 0, at = Ye = ye = null, wl = !1, Wi = 0, ai = null, t) throw Error(r(300));
    e === null || it || (e = e.dependencies, e !== null && ml(e) && (it = !0));
  }
  function lf(e, t, a, o) {
    ye = e;
    var u = 0;
    do {
      if (ni && (ai = null), Wi = 0, ni = !1, 25 <= u) throw Error(r(301));
      if (u += 1, at = Ye = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      E.H = qf, c = t(a, o);
    } while (ni);
    return c;
  }
  function ay() {
    var e = E.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Fi(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (ye.flags |= 1024), t;
  }
  function Uu() {
    var e = zl !== 0;
    return zl = 0, e;
  }
  function Yu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Bu(e) {
    if (wl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wl = !1;
    }
    hn = 0, at = Ye = ye = null, ni = !1, Wi = zl = 0, ai = null;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? ye.memoizedState = at = e : at = at.next = e, at;
  }
  function tt() {
    if (Ye === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = at === null ? ye.memoizedState : at.next;
    if (t !== null)
      at = t, Ye = e;
    else {
      if (e === null)
        throw ye.alternate === null ? Error(r(467)) : Error(r(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, at === null ? ye.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function xl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fi(e) {
    var t = Wi;
    return Wi += 1, ai === null && (ai = []), e = Jd(ai, e, t), t = ye, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, E.H = t === null || t.memoizedState === null ? Xf : Wu), e;
  }
  function kl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Fi(e);
      if (e.$$typeof === L) return ft(e);
    }
    throw Error(r(438, String(e)));
  }
  function Hu(e) {
    var t = null, a = ye.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var o = ye.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = xl(), ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++)
        a[o] = re;
    return t.index++, a;
  }
  function vn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Tl(e) {
    var t = tt();
    return Xu(t, Ye, e);
  }
  function Xu(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = a;
    var u = e.baseQueue, c = o.pending;
    if (c !== null) {
      if (u !== null) {
        var p = u.next;
        u.next = c.next, c.next = p;
      }
      t.baseQueue = u = c, o.pending = null;
    }
    if (c = e.baseState, u === null) e.memoizedState = c;
    else {
      t = u.next;
      var _ = p = null, S = null, M = t, D = !1;
      do {
        var U = M.lane & -536870913;
        if (U !== M.lane ? (ke & U) === U : (hn & U) === U) {
          var C = M.revertLane;
          if (C === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), U === Wa && (D = !0);
          else if ((hn & C) === C) {
            M = M.next, C === Wa && (D = !0);
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
            }, S === null ? (_ = S = U, p = c) : S = S.next = U, ye.lanes |= C, Hn |= C;
          U = M.action, ba && a(c, U), c = M.hasEagerState ? M.eagerState : a(c, U);
        } else
          C = {
            lane: U,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, S === null ? (_ = S = C, p = c) : S = S.next = C, ye.lanes |= U, Hn |= U;
        M = M.next;
      } while (M !== null && M !== t);
      if (S === null ? p = c : S.next = _, !jt(c, e.memoizedState) && (it = !0, D && (a = Fa, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = S, o.lastRenderedState = c;
    }
    return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function qu(e) {
    var t = tt(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, u = a.pending, c = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var p = u = u.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== u);
      jt(c, t.memoizedState) || (it = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, o];
  }
  function rf(e, t, a) {
    var o = ye, u = tt(), c = Ee;
    if (c) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var p = !jt(
      (Ye || u).memoizedState,
      a
    );
    if (p && (u.memoizedState = a, it = !0), u = u.queue, Vu(cf.bind(null, o, u, e), [
      e
    ]), u.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (o.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        sf.bind(
          null,
          o,
          u,
          a,
          t
        ),
        null
      ), qe === null) throw Error(r(349));
      c || (hn & 127) !== 0 || uf(o, t, a);
    }
    return a;
  }
  function uf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ye.updateQueue, t === null ? (t = xl(), ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function sf(e, t, a, o) {
    t.value = a, t.getSnapshot = o, df(t) && ff(e);
  }
  function cf(e, t, a) {
    return a(function() {
      df(t) && ff(e);
    });
  }
  function df(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !jt(e, a);
    } catch {
      return !0;
    }
  }
  function ff(e) {
    var t = da(e, 2);
    t !== null && At(t, e, 2);
  }
  function $u(e) {
    var t = gt();
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
  function mf(e, t, a, o) {
    return e.baseState = a, Xu(
      e,
      Ye,
      typeof o == "function" ? o : vn
    );
  }
  function iy(e, t, a, o, u) {
    if (Ml(e)) throw Error(r(485));
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
      E.T !== null ? a(!0) : c.isTransition = !1, o(c), a = t.pending, a === null ? (c.next = t.pending = c, pf(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function pf(e, t) {
    var a = t.action, o = t.payload, u = e.state;
    if (t.isTransition) {
      var c = E.T, p = {};
      E.T = p;
      try {
        var _ = a(u, o), S = E.S;
        S !== null && S(p, _), hf(e, t, _);
      } catch (M) {
        Lu(e, t, M);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), E.T = c;
      }
    } else
      try {
        c = a(u, o), hf(e, t, c);
      } catch (M) {
        Lu(e, t, M);
      }
  }
  function hf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        vf(e, t, o);
      },
      function(o) {
        return Lu(e, t, o);
      }
    ) : vf(e, t, a);
  }
  function vf(e, t, a) {
    t.status = "fulfilled", t.value = a, _f(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, pf(e, a)));
  }
  function Lu(e, t, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = a, _f(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function _f(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function yf(e, t) {
    return t;
  }
  function gf(e, t) {
    if (Ee) {
      var a = qe.formState;
      if (a !== null) {
        e: {
          var o = ye;
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
                ), o = u.data === "F!";
                break e;
              }
            }
            Cn(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return a = gt(), a.memoizedState = a.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yf,
      lastRenderedState: t
    }, a.queue = o, a = Yf.bind(
      null,
      ye,
      o
    ), o.dispatch = a, o = $u(!1), c = Pu.bind(
      null,
      ye,
      !1,
      o.queue
    ), o = gt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = u, a = iy.bind(
      null,
      ye,
      u,
      c,
      a
    ), u.dispatch = a, o.memoizedState = e, [t, a, !1];
  }
  function bf(e) {
    var t = tt();
    return Sf(t, Ye, e);
  }
  function Sf(e, t, a) {
    if (t = Xu(
      e,
      t,
      yf
    )[0], e = Tl(vn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = Fi(t);
      } catch (p) {
        throw p === Ia ? vl : p;
      }
    else o = t;
    t = tt();
    var u = t.queue, c = u.dispatch;
    return a !== t.memoizedState && (ye.flags |= 2048, ii(
      9,
      { destroy: void 0 },
      oy.bind(null, u, a),
      null
    )), [o, c, e];
  }
  function oy(e, t) {
    e.action = t;
  }
  function wf(e) {
    var t = tt(), a = Ye;
    if (a !== null)
      return Sf(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [t, o, !1];
  }
  function ii(e, t, a, o) {
    return e = { tag: e, create: a, deps: o, inst: t, next: null }, t = ye.updateQueue, t === null && (t = xl(), ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, t.lastEffect = e), e;
  }
  function zf() {
    return tt().memoizedState;
  }
  function El(e, t, a, o) {
    var u = gt();
    ye.flags |= e, u.memoizedState = ii(
      1 | t,
      { destroy: void 0 },
      a,
      o === void 0 ? null : o
    );
  }
  function Al(e, t, a, o) {
    var u = tt();
    o = o === void 0 ? null : o;
    var c = u.memoizedState.inst;
    Ye !== null && o !== null && Ru(o, Ye.memoizedState.deps) ? u.memoizedState = ii(t, c, a, o) : (ye.flags |= e, u.memoizedState = ii(
      1 | t,
      c,
      a,
      o
    ));
  }
  function xf(e, t) {
    El(8390656, 8, e, t);
  }
  function Vu(e, t) {
    Al(2048, 8, e, t);
  }
  function ly(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null)
      t = xl(), ye.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function kf(e) {
    var t = tt().memoizedState;
    return ly({ ref: t, nextImpl: e }), function() {
      if ((De & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Tf(e, t) {
    return Al(4, 2, e, t);
  }
  function Ef(e, t) {
    return Al(4, 4, e, t);
  }
  function Af(e, t) {
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
  function Mf(e, t, a) {
    a = a != null ? a.concat([e]) : null, Al(4, 4, Af.bind(null, t, e), a);
  }
  function Gu() {
  }
  function jf(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Ru(t, o[1]) ? o[0] : (a.memoizedState = [e, t], e);
  }
  function Cf(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && Ru(t, o[1]))
      return o[0];
    if (o = e(), ba) {
      ue(!0);
      try {
        e();
      } finally {
        ue(!1);
      }
    }
    return a.memoizedState = [o, t], o;
  }
  function Qu(e, t, a) {
    return a === void 0 || (hn & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Om(), ye.lanes |= e, Hn |= e, a);
  }
  function Of(e, t, a, o) {
    return jt(a, t) ? a : ti.current !== null ? (e = Qu(e, a, o), jt(e, t) || (it = !0), e) : (hn & 42) === 0 || (hn & 1073741824) !== 0 && (ke & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = Om(), ye.lanes |= e, Hn |= e, t);
  }
  function Nf(e, t, a, o, u) {
    var c = X.p;
    X.p = c !== 0 && 8 > c ? c : 8;
    var p = E.T, _ = {};
    E.T = _, Pu(e, !1, t, a);
    try {
      var S = u(), M = E.S;
      if (M !== null && M(_, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var D = ty(
          S,
          o
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
          o,
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
      X.p = c, p !== null && _.types !== null && (p.types = _.types), E.T = p;
    }
  }
  function ry() {
  }
  function Ku(e, t, a, o) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Df(e).queue;
    Nf(
      e,
      u,
      t,
      F,
      a === null ? ry : function() {
        return Rf(e), a(o);
      }
    );
  }
  function Df(e) {
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
  function Rf(e) {
    var t = Df(e);
    t.next === null && (t = e.alternate.memoizedState), Ii(
      e,
      t.next.queue,
      {},
      Zt()
    );
  }
  function Ju() {
    return ft(_o);
  }
  function Zf() {
    return tt().memoizedState;
  }
  function Uf() {
    return tt().memoizedState;
  }
  function uy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Zt();
          e = Dn(a);
          var o = Rn(t, e, a);
          o !== null && (At(o, t, a), Ki(o, t, a)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function sy(e, t, a) {
    var o = Zt();
    a = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ml(e) ? Bf(t, a) : (a = mu(e, t, a, o), a !== null && (At(a, e, o), Hf(a, t, o)));
  }
  function Yf(e, t, a) {
    var o = Zt();
    Ii(e, t, a, o);
  }
  function Ii(e, t, a, o) {
    var u = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ml(e)) Bf(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, _ = c(p, a);
          if (u.hasEagerState = !0, u.eagerState = _, jt(_, p))
            return sl(e, t, u, 0), qe === null && ul(), !1;
        } catch {
        }
      if (a = mu(e, t, u, o), a !== null)
        return At(a, e, o), Hf(a, t, o), !0;
    }
    return !1;
  }
  function Pu(e, t, a, o) {
    if (o = {
      lane: 2,
      revertLane: As(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ml(e)) {
      if (t) throw Error(r(479));
    } else
      t = mu(
        e,
        a,
        o,
        2
      ), t !== null && At(t, e, 2);
  }
  function Ml(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye;
  }
  function Bf(e, t) {
    ni = wl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Hf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, Lc(e, a);
    }
  }
  var eo = {
    readContext: ft,
    use: kl,
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
  eo.useEffectEvent = Pe;
  var Xf = {
    readContext: ft,
    use: kl,
    useCallback: function(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: xf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, El(
        4194308,
        4,
        Af.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return El(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      El(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = gt();
      t = t === void 0 ? null : t;
      var o = e();
      if (ba) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, a) {
      var o = gt();
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
      return o.memoizedState = o.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, o.queue = e, e = e.dispatch = sy.bind(
        null,
        ye,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = $u(e);
      var t = e.queue, a = Yf.bind(null, ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = gt();
      return Qu(a, e, t);
    },
    useTransition: function() {
      var e = $u(!1);
      return e = Nf.bind(
        null,
        ye,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var o = ye, u = gt();
      if (Ee) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), qe === null)
          throw Error(r(349));
        (ke & 127) !== 0 || uf(o, t, a);
      }
      u.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return u.queue = c, xf(cf.bind(null, o, c, e), [
        e
      ]), o.flags |= 2048, ii(
        9,
        { destroy: void 0 },
        sf.bind(
          null,
          o,
          c,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = gt(), t = qe.identifierPrefix;
      if (Ee) {
        var a = an, o = nn;
        a = (o & ~(1 << 32 - ee(o) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = zl++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = ny++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ju,
    useFormState: gf,
    useActionState: gf,
    useOptimistic: function(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Pu.bind(
        null,
        ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Hu,
    useCacheRefresh: function() {
      return gt().memoizedState = uy.bind(
        null,
        ye
      );
    },
    useEffectEvent: function(e) {
      var t = gt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((De & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Wu = {
    readContext: ft,
    use: kl,
    useCallback: jf,
    useContext: ft,
    useEffect: Vu,
    useImperativeHandle: Mf,
    useInsertionEffect: Tf,
    useLayoutEffect: Ef,
    useMemo: Cf,
    useReducer: Tl,
    useRef: zf,
    useState: function() {
      return Tl(vn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Of(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Tl(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Zf,
    useHostTransitionStatus: Ju,
    useFormState: bf,
    useActionState: bf,
    useOptimistic: function(e, t) {
      var a = tt();
      return mf(a, Ye, e, t);
    },
    useMemoCache: Hu,
    useCacheRefresh: Uf
  };
  Wu.useEffectEvent = kf;
  var qf = {
    readContext: ft,
    use: kl,
    useCallback: jf,
    useContext: ft,
    useEffect: Vu,
    useImperativeHandle: Mf,
    useInsertionEffect: Tf,
    useLayoutEffect: Ef,
    useMemo: Cf,
    useReducer: qu,
    useRef: zf,
    useState: function() {
      return qu(vn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Ye === null ? Qu(a, e, t) : Of(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qu(vn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fi(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Zf,
    useHostTransitionStatus: Ju,
    useFormState: wf,
    useActionState: wf,
    useOptimistic: function(e, t) {
      var a = tt();
      return Ye !== null ? mf(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Hu,
    useCacheRefresh: Uf
  };
  qf.useEffectEvent = kf;
  function Fu(e, t, a, o) {
    t = e.memoizedState, a = a(o, t), a = a == null ? t : b({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Iu = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var o = Zt(), u = Dn(o);
      u.payload = t, a != null && (u.callback = a), t = Rn(e, u, o), t !== null && (At(t, e, o), Ki(t, e, o));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var o = Zt(), u = Dn(o);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = Rn(e, u, o), t !== null && (At(t, e, o), Ki(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Zt(), o = Dn(a);
      o.tag = 2, t != null && (o.callback = t), t = Rn(e, o, a), t !== null && (At(t, e, a), Ki(t, e, a));
    }
  };
  function $f(e, t, a, o, u, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Hi(a, o) || !Hi(u, c) : !0;
  }
  function Lf(e, t, a, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== e && Iu.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t)
        o !== "ref" && (a[o] = t[o]);
    }
    if (e = e.defaultProps) {
      a === t && (a = b({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function Vf(e) {
    rl(e);
  }
  function Gf(e) {
    console.error(e);
  }
  function Qf(e) {
    rl(e);
  }
  function jl(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Kf(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function es(e, t, a) {
    return a = Dn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      jl(e, t);
    }, a;
  }
  function Jf(e) {
    return e = Dn(e), e.tag = 3, e;
  }
  function Pf(e, t, a, o) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = o.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        Kf(t, a, o);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Kf(t, a, o), typeof u != "function" && (Xn === null ? Xn = /* @__PURE__ */ new Set([this]) : Xn.add(this));
      var _ = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function cy(e, t, a, o, u) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = a.alternate, t !== null && Pa(
        t,
        a,
        u,
        !0
      ), a = Ot.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? ql() : a.alternate === null && We === 0 && (We = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, o === _l ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), ks(e, o, u)), !1;
          case 22:
            return a.flags |= 65536, o === _l ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), ks(e, o, u)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return ks(e, o, u), ql(), !1;
    }
    if (Ee)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, o !== gu && (e = Error(r(422), { cause: o }), $i(Xt(e, a)))) : (o !== gu && (t = Error(r(423), {
        cause: o
      }), $i(
        Xt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, o = Xt(o, a), u = es(
        e.stateNode,
        o,
        u
      ), ju(e, u), We !== 4 && (We = 2)), !1;
    var c = Error(r(520), { cause: o });
    if (c = Xt(c, a), uo === null ? uo = [c] : uo.push(c), We !== 4 && (We = 2), t === null) return !0;
    o = Xt(o, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = es(a.stateNode, o, e), ju(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Xn === null || !Xn.has(c))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Jf(u), Pf(
              u,
              e,
              a,
              o
            ), ju(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ts = Error(r(461)), it = !1;
  function mt(e, t, a, o) {
    t.child = e === null ? Id(t, null, a, o) : ga(
      t,
      e.child,
      a,
      o
    );
  }
  function Wf(e, t, a, o, u) {
    a = a.render;
    var c = t.ref;
    if ("ref" in o) {
      var p = {};
      for (var _ in o)
        _ !== "ref" && (p[_] = o[_]);
    } else p = o;
    return ha(t), o = Zu(
      e,
      t,
      a,
      p,
      c,
      u
    ), _ = Uu(), e !== null && !it ? (Yu(e, t, u), _n(e, t, u)) : (Ee && _ && _u(t), t.flags |= 1, mt(e, t, o, u), t.child);
  }
  function Ff(e, t, a, o, u) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !pu(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, If(
        e,
        t,
        c,
        o,
        u
      )) : (e = dl(
        a.type,
        null,
        o,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !ss(e, u)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Hi, a(p, o) && e.ref === t.ref)
        return _n(e, t, u);
    }
    return t.flags |= 1, e = dn(c, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function If(e, t, a, o, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Hi(c, o) && e.ref === t.ref)
        if (it = !1, t.pendingProps = o = c, ss(e, u))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, _n(e, t, u);
    }
    return ns(
      e,
      t,
      a,
      o,
      u
    );
  }
  function em(e, t, a, o) {
    var u = o.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, e !== null) {
          for (o = t.child = e.child, u = 0; o !== null; )
            u = u | o.lanes | o.childLanes, o = o.sibling;
          o = u & ~c;
        } else o = 0, t.child = null;
        return tm(
          e,
          t,
          c,
          a,
          o
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && hl(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? nf(t, c) : Ou(), af(t);
      else
        return o = t.lanes = 536870912, tm(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          o
        );
    } else
      c !== null ? (hl(t, c.cachePool), nf(t, c), Un(), t.memoizedState = null) : (e !== null && hl(t, null), Ou(), Un());
    return mt(e, t, u, a), t.child;
  }
  function to(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function tm(e, t, a, o, u) {
    var c = Tu();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && hl(t, null), Ou(), af(t), e !== null && Pa(e, t, o, !0), t.childLanes = u, null;
  }
  function Cl(e, t) {
    return t = Nl(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function nm(e, t, a) {
    return ga(t, e.child, null, a), e = Cl(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e;
  }
  function dy(e, t, a) {
    var o = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ee) {
        if (o.mode === "hidden")
          return e = Cl(t, o), t.lanes = 536870912, to(null, e);
        if (Du(t), (e = Le) ? (e = pp(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Yd(e), a.return = t, t.child = a, dt = t, Le = null)) : e = null, e === null) throw Cn(t);
        return t.lanes = 536870912, null;
      }
      return Cl(t, o);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (Du(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = nm(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (it || Pa(e, t, a, !1), u = (a & e.childLanes) !== 0, it || u) {
        if (o = qe, o !== null && (p = Vc(o, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, da(e, p), At(o, e, p), ts;
        ql(), t = nm(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, Le = Gt(p.nextSibling), dt = t, Ee = !0, jn = null, Lt = !1, e !== null && Xd(t, e), t = Cl(t, o), t.flags |= 4096;
      return t;
    }
    return e = dn(e.child, {
      mode: o.mode,
      children: o.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ol(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ns(e, t, a, o, u) {
    return ha(t), a = Zu(
      e,
      t,
      a,
      o,
      void 0,
      u
    ), o = Uu(), e !== null && !it ? (Yu(e, t, u), _n(e, t, u)) : (Ee && o && _u(t), t.flags |= 1, mt(e, t, a, u), t.child);
  }
  function am(e, t, a, o, u, c) {
    return ha(t), t.updateQueue = null, a = lf(
      t,
      o,
      a,
      u
    ), of(e), o = Uu(), e !== null && !it ? (Yu(e, t, c), _n(e, t, c)) : (Ee && o && _u(t), t.flags |= 1, mt(e, t, a, c), t.child);
  }
  function im(e, t, a, o, u) {
    if (ha(t), t.stateNode === null) {
      var c = Ga, p = a.contextType;
      typeof p == "object" && p !== null && (c = ft(p)), c = new a(o, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Iu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = o, c.state = t.memoizedState, c.refs = {}, Au(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? ft(p) : Ga, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Fu(
        t,
        a,
        p,
        o
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Iu.enqueueReplaceState(c, c.state, null), Pi(t, o, c, u), Ji(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      c = t.stateNode;
      var _ = t.memoizedProps, S = Sa(a, _);
      c.props = S;
      var M = c.context, D = a.contextType;
      p = Ga, typeof D == "object" && D !== null && (p = ft(D));
      var U = a.getDerivedStateFromProps;
      D = typeof U == "function" || typeof c.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, D || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (_ || M !== p) && Lf(
        t,
        c,
        o,
        p
      ), Nn = !1;
      var C = t.memoizedState;
      c.state = C, Pi(t, o, c, u), Ji(), M = t.memoizedState, _ || C !== M || Nn ? (typeof U == "function" && (Fu(
        t,
        a,
        U,
        o
      ), M = t.memoizedState), (S = Nn || $f(
        t,
        a,
        S,
        o,
        C,
        M,
        p
      )) ? (D || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = M), c.props = o, c.state = M, c.context = p, o = S) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      c = t.stateNode, Mu(e, t), p = t.memoizedProps, D = Sa(a, p), c.props = D, U = t.pendingProps, C = c.context, M = a.contextType, S = Ga, typeof M == "object" && M !== null && (S = ft(M)), _ = a.getDerivedStateFromProps, (M = typeof _ == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== U || C !== S) && Lf(
        t,
        c,
        o,
        S
      ), Nn = !1, C = t.memoizedState, c.state = C, Pi(t, o, c, u), Ji();
      var O = t.memoizedState;
      p !== U || C !== O || Nn || e !== null && e.dependencies !== null && ml(e.dependencies) ? (typeof _ == "function" && (Fu(
        t,
        a,
        _,
        o
      ), O = t.memoizedState), (D = Nn || $f(
        t,
        a,
        D,
        o,
        C,
        O,
        S
      ) || e !== null && e.dependencies !== null && ml(e.dependencies)) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(o, O, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        o,
        O,
        S
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = O), c.props = o, c.state = O, c.context = S, o = D) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return c = o, Ol(e, t), o = (t.flags & 128) !== 0, c || o ? (c = t.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && o ? (t.child = ga(
      t,
      e.child,
      null,
      u
    ), t.child = ga(
      t,
      null,
      a,
      u
    )) : mt(e, t, a, u), t.memoizedState = c.state, e = t.child) : e = _n(
      e,
      t,
      u
    ), e;
  }
  function om(e, t, a, o) {
    return ma(), t.flags |= 256, mt(e, t, a, o), t.child;
  }
  var as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function is(e) {
    return { baseLanes: e, cachePool: Qd() };
  }
  function os(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rt), e;
  }
  function lm(e, t, a) {
    var o = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (u = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ee) {
        if (u ? Zn(t) : Un(), (e = Le) ? (e = pp(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Yd(e), a.return = t, t.child = a, dt = t, Le = null)) : e = null, e === null) throw Cn(t);
        return Xs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = o.children;
      return o = o.fallback, u ? (Un(), u = t.mode, _ = Nl(
        { mode: "hidden", children: _ },
        u
      ), o = fa(
        o,
        u,
        a,
        null
      ), _.return = t, o.return = t, _.sibling = o, t.child = _, o = t.child, o.memoizedState = is(a), o.childLanes = os(
        e,
        p,
        a
      ), t.memoizedState = as, to(null, o)) : (Zn(t), ls(t, _));
    }
    var S = e.memoizedState;
    if (S !== null && (_ = S.dehydrated, _ !== null)) {
      if (c)
        t.flags & 256 ? (Zn(t), t.flags &= -257, t = rs(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Un(), t.child = e.child, t.flags |= 128, t = null) : (Un(), _ = o.fallback, u = t.mode, o = Nl(
          { mode: "visible", children: o.children },
          u
        ), _ = fa(
          _,
          u,
          a,
          null
        ), _.flags |= 2, o.return = t, _.return = t, o.sibling = _, t.child = o, ga(
          t,
          e.child,
          null,
          a
        ), o = t.child, o.memoizedState = is(a), o.childLanes = os(
          e,
          p,
          a
        ), t.memoizedState = as, t = to(null, o));
      else if (Zn(t), Xs(_)) {
        if (p = _.nextSibling && _.nextSibling.dataset, p) var M = p.dgst;
        p = M, o = Error(r(419)), o.stack = "", o.digest = p, $i({ value: o, source: null, stack: null }), t = rs(
          e,
          t,
          a
        );
      } else if (it || Pa(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = qe, p !== null && (o = Vc(p, a), o !== 0 && o !== S.retryLane))
          throw S.retryLane = o, da(e, o), At(p, e, o), ts;
        Hs(_) || ql(), t = rs(
          e,
          t,
          a
        );
      } else
        Hs(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Le = Gt(
          _.nextSibling
        ), dt = t, Ee = !0, jn = null, Lt = !1, e !== null && Xd(t, e), t = ls(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Un(), _ = o.fallback, u = t.mode, S = e.child, M = S.sibling, o = dn(S, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? _ = dn(
      M,
      _
    ) : (_ = fa(
      _,
      u,
      a,
      null
    ), _.flags |= 2), _.return = t, o.return = t, o.sibling = _, t.child = o, to(null, o), o = t.child, _ = e.child.memoizedState, _ === null ? _ = is(a) : (u = _.cachePool, u !== null ? (S = nt._currentValue, u = u.parent !== S ? { parent: S, pool: S } : u) : u = Qd(), _ = {
      baseLanes: _.baseLanes | a,
      cachePool: u
    }), o.memoizedState = _, o.childLanes = os(
      e,
      p,
      a
    ), t.memoizedState = as, to(e.child, o)) : (Zn(t), a = e.child, e = a.sibling, a = dn(a, {
      mode: "visible",
      children: o.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ls(e, t) {
    return t = Nl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Nl(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function rs(e, t, a) {
    return ga(t, e.child, null, a), e = ls(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function rm(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), wu(e.return, t, a);
  }
  function us(e, t, a, o, u, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: u,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = a, p.tailMode = u, p.treeForkCount = c);
  }
  function um(e, t, a) {
    var o = t.pendingProps, u = o.revealOrder, c = o.tail;
    o = o.children;
    var p = et.current, _ = (p & 2) !== 0;
    if (_ ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, P(et, p), mt(e, t, o, a), o = Ee ? qi : 0, !_ && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && rm(e, a, t);
        else if (e.tag === 19)
          rm(e, a, t);
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
          e = a.alternate, e !== null && Sl(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), us(
          t,
          !1,
          u,
          a,
          c,
          o
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Sl(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        us(
          t,
          !0,
          a,
          null,
          c,
          o
        );
        break;
      case "together":
        us(
          t,
          !1,
          null,
          null,
          void 0,
          o
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function _n(e, t, a) {
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
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ml(e)));
  }
  function fy(e, t, a) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), On(t, nt, e.memoizedState.cache), ma();
        break;
      case 27:
      case 5:
        Pt(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        On(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Du(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Zn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? lm(e, t, a) : (Zn(t), e = _n(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Zn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (o = (a & t.childLanes) !== 0, o || (Pa(
          e,
          t,
          a,
          !1
        ), o = (a & t.childLanes) !== 0), u) {
          if (o)
            return um(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), P(et, et.current), o) break;
        return null;
      case 22:
        return t.lanes = 0, em(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        On(t, nt, e.memoizedState.cache);
    }
    return _n(e, t, a);
  }
  function sm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!ss(e, a) && (t.flags & 128) === 0)
          return it = !1, fy(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Ee && (t.flags & 1048576) !== 0 && Hd(t, qi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (e = _a(t.elementType), t.type = e, typeof e == "function")
            pu(e) ? (o = Sa(e, o), t.tag = 1, t = im(
              null,
              t,
              e,
              o,
              a
            )) : (t.tag = 0, t = ns(
              null,
              t,
              e,
              o,
              a
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === G) {
                t.tag = 11, t = Wf(
                  null,
                  t,
                  e,
                  o,
                  a
                );
                break e;
              } else if (u === B) {
                t.tag = 14, t = Ff(
                  null,
                  t,
                  e,
                  o,
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
        return ns(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return o = t.type, u = Sa(
          o,
          t.pendingProps
        ), im(
          e,
          t,
          o,
          u,
          a
        );
      case 3:
        e: {
          if (Ge(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          o = t.pendingProps;
          var c = t.memoizedState;
          u = c.element, Mu(e, t), Pi(t, o, null, a);
          var p = t.memoizedState;
          if (o = p.cache, On(t, nt, o), o !== c.cache && zu(
            t,
            [nt],
            a,
            !0
          ), Ji(), o = p.element, c.isDehydrated)
            if (c = {
              element: o,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = om(
                e,
                t,
                o,
                a
              );
              break e;
            } else if (o !== u) {
              u = Xt(
                Error(r(424)),
                t
              ), $i(u), t = om(
                e,
                t,
                o,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Gt(e.firstChild), dt = t, Ee = !0, jn = null, Lt = !0, a = Id(
                t,
                null,
                o,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ma(), o === u) {
              t = _n(
                e,
                t,
                a
              );
              break e;
            }
            mt(e, t, o, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ol(e, t), e === null ? (a = bp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ee || (a = t.type, e = t.pendingProps, o = Jl(
          _e.current
        ).createElement(a), o[ct] = t, o[wt] = e, pt(o, a, e), ut(o), t.stateNode = o) : t.memoizedState = bp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Pt(t), e === null && Ee && (o = t.stateNode = _p(
          t.type,
          t.pendingProps,
          _e.current
        ), dt = t, Lt = !0, u = Le, Vn(t.type) ? (qs = u, Le = Gt(o.firstChild)) : Le = u), mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Ol(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ee && ((u = o = Le) && (o = qy(
          o,
          t.type,
          t.pendingProps,
          Lt
        ), o !== null ? (t.stateNode = o, dt = t, Le = Gt(o.firstChild), Lt = !1, u = !0) : u = !1), u || Cn(t)), Pt(t), u = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, o = c.children, Us(u, c) ? o = null : p !== null && Us(u, p) && (t.flags |= 32), t.memoizedState !== null && (u = Zu(
          e,
          t,
          ay,
          null,
          null,
          a
        ), _o._currentValue = u), Ol(e, t), mt(e, t, o, a), t.child;
      case 6:
        return e === null && Ee && ((e = a = Le) && (a = $y(
          a,
          t.pendingProps,
          Lt
        ), a !== null ? (t.stateNode = a, dt = t, Le = null, e = !0) : e = !1), e || Cn(t)), null;
      case 13:
        return lm(e, t, a);
      case 4:
        return Ge(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = ga(
          t,
          null,
          o,
          a
        ) : mt(e, t, o, a), t.child;
      case 11:
        return Wf(
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
        return o = t.pendingProps, On(t, t.type, o.value), mt(e, t, o.children, a), t.child;
      case 9:
        return u = t.type._context, o = t.pendingProps.children, ha(t), u = ft(u), o = o(u), t.flags |= 1, mt(e, t, o, a), t.child;
      case 14:
        return Ff(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return If(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return um(e, t, a);
      case 31:
        return dy(e, t, a);
      case 22:
        return em(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ha(t), o = ft(nt), e === null ? (u = Tu(), u === null && (u = qe, c = xu(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= a), u = c), t.memoizedState = { parent: o, cache: u }, Au(t), On(t, nt, u)) : ((e.lanes & a) !== 0 && (Mu(e, t), Pi(t, null, null, a), Ji()), u = e.memoizedState, c = t.memoizedState, u.parent !== o ? (u = { parent: o, cache: o }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), On(t, nt, o)) : (o = c.cache, On(t, nt, o), o !== u.cache && zu(
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
  function yn(e) {
    e.flags |= 4;
  }
  function cs(e, t, a, o, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zm()) e.flags |= 8192;
        else
          throw ya = _l, Eu;
    } else e.flags &= -16777217;
  }
  function cm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !kp(t))
      if (Zm()) e.flags |= 8192;
      else
        throw ya = _l, Eu;
  }
  function Dl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? qc() : 536870912, e.lanes |= t, ui |= t);
  }
  function no(e, t) {
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
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, t;
  }
  function my(e, t, a) {
    var o = t.pendingProps;
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
        return a = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), pn(nt), $e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ja(t) ? yn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bu())), Ve(t), null;
      case 26:
        var u = t.type, c = t.memoizedState;
        return e === null ? (yn(t), c !== null ? (Ve(t), cm(t, c)) : (Ve(t), cs(
          t,
          u,
          null,
          o,
          a
        ))) : c ? c !== e.memoizedState ? (yn(t), Ve(t), cm(t, c)) : (Ve(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== o && yn(t), Ve(t), cs(
          t,
          u,
          e,
          o,
          a
        )), null;
      case 27:
        if (Ut(t), a = _e.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && yn(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ve(t), null;
          }
          e = te.current, Ja(t) ? qd(t) : (e = _p(u, o, a), t.stateNode = e, yn(t));
        }
        return Ve(t), null;
      case 5:
        if (Ut(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && yn(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ve(t), null;
          }
          if (c = te.current, Ja(t))
            qd(t);
          else {
            var p = Jl(
              _e.current
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
                    c = typeof o.is == "string" ? p.createElement("select", {
                      is: o.is
                    }) : p.createElement("select"), o.multiple ? c.multiple = !0 : o.size && (c.size = o.size);
                    break;
                  default:
                    c = typeof o.is == "string" ? p.createElement(u, { is: o.is }) : p.createElement(u);
                }
            }
            c[ct] = t, c[wt] = o;
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
            e: switch (pt(c, u, o), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && yn(t);
          }
        }
        return Ve(t), cs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && yn(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = _e.current, Ja(t)) {
            if (e = t.stateNode, a = t.memoizedProps, o = null, u = dt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            e[ct] = t, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || lp(e.nodeValue, a)), e || Cn(t, !0);
          } else
            e = Jl(e).createTextNode(
              o
            ), e[ct] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (o = Ja(t), a !== null) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ct] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), e = !1;
          } else
            a = bu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ve(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ja(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[ct] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), u = !1;
          } else
            u = bu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
        }
        return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = o !== null, e = e !== null && e.memoizedState !== null, a && (o = t.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool), c = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (c = o.memoizedState.cachePool.pool), c !== u && (o.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Dl(t, t.updateQueue), Ve(t), null);
      case 4:
        return $e(), e === null && Os(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return pn(t.type), Ve(t), null;
      case 19:
        if (N(et), o = t.memoizedState, o === null) return Ve(t), null;
        if (u = (t.flags & 128) !== 0, c = o.rendering, c === null)
          if (u) no(o, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Sl(e), c !== null) {
                  for (t.flags |= 128, no(o, !1), e = c.updateQueue, t.updateQueue = e, Dl(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Ud(a, e), a = a.sibling;
                  return P(
                    et,
                    et.current & 1 | 2
                  ), Ee && fn(t, o.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && yt() > Bl && (t.flags |= 128, u = !0, no(o, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Sl(c), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Dl(t, e), no(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Ee)
                return Ve(t), null;
            } else
              2 * yt() - o.renderingStartTime > Bl && a !== 536870912 && (t.flags |= 128, u = !0, no(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = yt(), e.sibling = null, a = et.current, P(
          et,
          u ? a & 1 | 2 : a & 1
        ), Ee && fn(t, o.treeForkCount), e) : (Ve(t), null);
      case 22:
      case 23:
        return Nt(t), Nu(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), a = t.updateQueue, a !== null && Dl(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== a && (t.flags |= 2048), e !== null && N(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pn(nt), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function py(e, t) {
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
        return Nt(t), Nu(), e !== null && N(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dm(e, t) {
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
        Nt(t), Nu(), e !== null && N(va);
        break;
      case 24:
        pn(nt);
    }
  }
  function ao(e, t) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var c = a.create, p = a.inst;
            o = c(), p.destroy = o;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      Ue(t, t.return, _);
    }
  }
  function Yn(e, t, a) {
    try {
      var o = t.updateQueue, u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        o = c;
        do {
          if ((o.tag & e) === e) {
            var p = o.inst, _ = p.destroy;
            if (_ !== void 0) {
              p.destroy = void 0, u = t;
              var S = a, M = _;
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
          o = o.next;
        } while (o !== c);
      }
    } catch (D) {
      Ue(t, t.return, D);
    }
  }
  function fm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        tf(t, a);
      } catch (o) {
        Ue(e, e.return, o);
      }
    }
  }
  function mm(e, t, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      Ue(e, t, o);
    }
  }
  function io(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (u) {
      Ue(e, t, u);
    }
  }
  function on(e, t) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
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
  function pm(e) {
    var t = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function ds(e, t, a) {
    try {
      var o = e.stateNode;
      Zy(o, e.type, a, t), o[wt] = t;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function hm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4;
  }
  function fs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ms(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = sn));
    else if (o !== 4 && (o === 27 && Vn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (ms(e, t, a), e = e.sibling; e !== null; )
        ms(e, t, a), e = e.sibling;
  }
  function Rl(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Vn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Rl(e, t, a), e = e.sibling; e !== null; )
        Rl(e, t, a), e = e.sibling;
  }
  function vm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      pt(t, o, a), t[ct] = e, t[wt] = a;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var gn = !1, ot = !1, ps = !1, _m = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function hy(e, t) {
    if (e = e.containerInfo, Rs = nr, e = Ad(e), ru(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset, c = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0, _ = -1, S = -1, M = 0, D = 0, U = e, C = null;
            t: for (; ; ) {
              for (var O; U !== a || u !== 0 && U.nodeType !== 3 || (_ = p + u), U !== c || o !== 0 && U.nodeType !== 3 || (S = p + o), U.nodeType === 3 && (p += U.nodeValue.length), (O = U.firstChild) !== null; )
                C = U, U = O;
              for (; ; ) {
                if (U === e) break t;
                if (C === a && ++M === u && (_ = p), C === c && ++D === o && (S = p), (O = U.nextSibling) !== null) break;
                U = C, C = U.parentNode;
              }
              U = O;
            }
            a = _ === -1 || S === -1 ? null : { start: _, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zs = { focusedElem: e, selectionRange: a }, nr = !1, st = t; st !== null; )
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
                e = void 0, a = t, u = c.memoizedProps, c = c.memoizedState, o = a.stateNode;
                try {
                  var ie = Sa(
                    a.type,
                    u
                  );
                  e = o.getSnapshotBeforeUpdate(
                    ie,
                    c
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
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
                  Bs(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bs(e);
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
  function ym(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Sn(e, a), o & 4 && ao(5, a);
        break;
      case 1:
        if (Sn(e, a), o & 4)
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
        o & 64 && fm(a), o & 512 && io(a, a.return);
        break;
      case 3:
        if (Sn(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
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
            tf(e, t);
          } catch (p) {
            Ue(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && o & 4 && vm(a);
      case 26:
      case 5:
        Sn(e, a), t === null && o & 4 && pm(a), o & 512 && io(a, a.return);
        break;
      case 12:
        Sn(e, a);
        break;
      case 31:
        Sn(e, a), o & 4 && Sm(e, a);
        break;
      case 13:
        Sn(e, a), o & 4 && wm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = xy.bind(
          null,
          a
        ), Ly(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || gn, !o) {
          t = t !== null && t.memoizedState !== null || ot, u = gn;
          var c = ot;
          gn = o, (ot = t) && !c ? wn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Sn(e, a), gn = u, ot = c;
        }
        break;
      case 30:
        break;
      default:
        Sn(e, a);
    }
  }
  function gm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, xt = !1;
  function bn(e, t, a) {
    for (a = a.child; a !== null; )
      bm(e, t, a), a = a.sibling;
  }
  function bm(e, t, a) {
    if (H && typeof H.onCommitFiberUnmount == "function")
      try {
        H.onCommitFiberUnmount(oa, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        ot || on(a, t), bn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ot || on(a, t);
        var o = Qe, u = xt;
        Vn(a.type) && (Qe = a.stateNode, xt = !1), bn(
          e,
          t,
          a
        ), po(a.stateNode), Qe = o, xt = u;
        break;
      case 5:
        ot || on(a, t);
      case 6:
        if (o = Qe, u = xt, Qe = null, bn(
          e,
          t,
          a
        ), Qe = o, xt = u, Qe !== null)
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
        Qe !== null && (xt ? (e = Qe, fp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), vi(e)) : fp(Qe, a.stateNode));
        break;
      case 4:
        o = Qe, u = xt, Qe = a.stateNode.containerInfo, xt = !0, bn(
          e,
          t,
          a
        ), Qe = o, xt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, a, t), ot || Yn(4, a, t), bn(
          e,
          t,
          a
        );
        break;
      case 1:
        ot || (on(a, t), o = a.stateNode, typeof o.componentWillUnmount == "function" && mm(
          a,
          t,
          o
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
        ot = (o = ot) || a.memoizedState !== null, bn(
          e,
          t,
          a
        ), ot = o;
        break;
      default:
        bn(
          e,
          t,
          a
        );
    }
  }
  function Sm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function wm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vi(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
  }
  function vy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new _m()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new _m()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Zl(e, t) {
    var a = vy(e);
    t.forEach(function(o) {
      if (!a.has(o)) {
        a.add(o);
        var u = ky.bind(null, e, o);
        o.then(u, u);
      }
    });
  }
  function kt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o], c = e, p = t, _ = p;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Vn(_.type)) {
                Qe = _.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Qe = _.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Qe = _.stateNode.containerInfo, xt = !0;
              break e;
          }
          _ = _.return;
        }
        if (Qe === null) throw Error(r(160));
        bm(c, p, u), Qe = null, xt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        zm(t, e), t = t.sibling;
  }
  var Ft = null;
  function zm(e, t) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kt(t, e), Tt(e), o & 4 && (Yn(3, e, e.return), ao(3, e), Yn(5, e, e.return));
        break;
      case 1:
        kt(t, e), Tt(e), o & 512 && (ot || a === null || on(a, a.return)), o & 64 && gn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var u = Ft;
        if (kt(t, e), Tt(e), o & 512 && (ot || a === null || on(a, a.return)), o & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (o) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Ci] || c[ct] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(o), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), pt(c, o, a), c[ct] = e, ut(c), o = c;
                      break e;
                    case "link":
                      var p = zp(
                        "link",
                        "href",
                        u
                      ).get(o + (a.href || ""));
                      if (p) {
                        for (var _ = 0; _ < p.length; _++)
                          if (c = p[_], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            p.splice(_, 1);
                            break t;
                          }
                      }
                      c = u.createElement(o), pt(c, o, a), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = zp(
                        "meta",
                        "content",
                        u
                      ).get(o + (a.content || ""))) {
                        for (_ = 0; _ < p.length; _++)
                          if (c = p[_], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            p.splice(_, 1);
                            break t;
                          }
                      }
                      c = u.createElement(o), pt(c, o, a), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, o));
                  }
                  c[ct] = e, ut(c), o = c;
                }
                e.stateNode = o;
              } else
                xp(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = wp(
                u,
                o,
                e.memoizedProps
              );
          else
            c !== o ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, o === null ? xp(
              u,
              e.type,
              e.stateNode
            ) : wp(
              u,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && ds(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        kt(t, e), Tt(e), o & 512 && (ot || a === null || on(a, a.return)), a !== null && o & 4 && ds(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (kt(t, e), Tt(e), o & 512 && (ot || a === null || on(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ba(u, "");
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        o & 4 && e.stateNode != null && (u = e.memoizedProps, ds(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), o & 1024 && (ps = !0);
        break;
      case 6:
        if (kt(t, e), Tt(e), o & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (Fl = null, u = Ft, Ft = Pl(t.containerInfo), kt(t, e), Ft = u, Tt(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            vi(t.containerInfo);
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        ps && (ps = !1, xm(e));
        break;
      case 4:
        o = Ft, Ft = Pl(
          e.stateNode.containerInfo
        ), kt(t, e), Tt(e), Ft = o;
        break;
      case 12:
        kt(t, e), Tt(e);
        break;
      case 31:
        kt(t, e), Tt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Zl(e, o)));
        break;
      case 13:
        kt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Yl = yt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Zl(e, o)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = a !== null && a.memoizedState !== null, M = gn, D = ot;
        if (gn = M || u, ot = D || S, kt(t, e), ot = D, gn = M, Tt(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || S || gn || ot || wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                S = a = t;
                try {
                  if (c = S.stateNode, u)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    _ = S.stateNode;
                    var U = S.memoizedProps.style, C = U != null && U.hasOwnProperty("display") ? U.display : null;
                    _.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
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
                  var O = S.stateNode;
                  u ? mp(O, !0) : mp(S.stateNode, !1);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, Zl(e, a))));
        break;
      case 19:
        kt(t, e), Tt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, Zl(e, o)));
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
        for (var a, o = e.return; o !== null; ) {
          if (hm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, c = fs(e);
            Rl(e, c, u);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ba(p, ""), a.flags &= -33);
            var _ = fs(e);
            Rl(e, _, p);
            break;
          case 3:
          case 4:
            var S = a.stateNode.containerInfo, M = fs(e);
            ms(
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
  function xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        xm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ym(e, t.alternate, t), t = t.sibling;
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
          on(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && mm(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          po(t.stateNode);
        case 26:
        case 5:
          on(t, t.return), wa(t);
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
      var o = t.alternate, u = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            u,
            c,
            a
          ), ao(4, c);
          break;
        case 1:
          if (wn(
            u,
            c,
            a
          ), o = c, u = o.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (M) {
              Ue(o, o.return, M);
            }
          if (o = c, u = o.updateQueue, u !== null) {
            var _ = o.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  ef(S[u], _);
            } catch (M) {
              Ue(o, o.return, M);
            }
          }
          a && p & 64 && fm(c), io(c, c.return);
          break;
        case 27:
          vm(c);
        case 26:
        case 5:
          wn(
            u,
            c,
            a
          ), a && o === null && p & 4 && pm(c), io(c, c.return);
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
          ), a && p & 4 && Sm(u, c);
          break;
        case 13:
          wn(
            u,
            c,
            a
          ), a && p & 4 && wm(u, c);
          break;
        case 22:
          c.memoizedState === null && wn(
            u,
            c,
            a
          ), io(c, c.return);
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
  function hs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Li(a));
  }
  function vs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e));
  }
  function It(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        km(
          e,
          t,
          a,
          o
        ), t = t.sibling;
  }
  function km(e, t, a, o) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        It(
          e,
          t,
          a,
          o
        ), u & 2048 && ao(9, t);
        break;
      case 1:
        It(
          e,
          t,
          a,
          o
        );
        break;
      case 3:
        It(
          e,
          t,
          a,
          o
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e)));
        break;
      case 12:
        if (u & 2048) {
          It(
            e,
            t,
            a,
            o
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, p = c.id, _ = c.onPostCommit;
            typeof _ == "function" && _(
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
            o
          );
        break;
      case 31:
        It(
          e,
          t,
          a,
          o
        );
        break;
      case 13:
        It(
          e,
          t,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? It(
          e,
          t,
          a,
          o
        ) : oo(e, t) : c._visibility & 2 ? It(
          e,
          t,
          a,
          o
        ) : (c._visibility |= 2, oi(
          e,
          t,
          a,
          o,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && hs(p, t);
        break;
      case 24:
        It(
          e,
          t,
          a,
          o
        ), u & 2048 && vs(t.alternate, t);
        break;
      default:
        It(
          e,
          t,
          a,
          o
        );
    }
  }
  function oi(e, t, a, o, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, _ = a, S = o, M = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          oi(
            c,
            p,
            _,
            S,
            u
          ), ao(8, p);
          break;
        case 23:
          break;
        case 22:
          var D = p.stateNode;
          p.memoizedState !== null ? D._visibility & 2 ? oi(
            c,
            p,
            _,
            S,
            u
          ) : oo(
            c,
            p
          ) : (D._visibility |= 2, oi(
            c,
            p,
            _,
            S,
            u
          )), u && M & 2048 && hs(
            p.alternate,
            p
          );
          break;
        case 24:
          oi(
            c,
            p,
            _,
            S,
            u
          ), u && M & 2048 && vs(p.alternate, p);
          break;
        default:
          oi(
            c,
            p,
            _,
            S,
            u
          );
      }
      t = t.sibling;
    }
  }
  function oo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, o = t, u = o.flags;
        switch (o.tag) {
          case 22:
            oo(a, o), u & 2048 && hs(
              o.alternate,
              o
            );
            break;
          case 24:
            oo(a, o), u & 2048 && vs(o.alternate, o);
            break;
          default:
            oo(a, o);
        }
        t = t.sibling;
      }
  }
  var lo = 8192;
  function li(e, t, a) {
    if (e.subtreeFlags & lo)
      for (e = e.child; e !== null; )
        Tm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Tm(e, t, a) {
    switch (e.tag) {
      case 26:
        li(
          e,
          t,
          a
        ), e.flags & lo && e.memoizedState !== null && ng(
          a,
          Ft,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        li(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var o = Ft;
        Ft = Pl(e.stateNode.containerInfo), li(
          e,
          t,
          a
        ), Ft = o;
        break;
      case 22:
        e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = lo, lo = 16777216, li(
          e,
          t,
          a
        ), lo = o) : li(
          e,
          t,
          a
        ));
        break;
      default:
        li(
          e,
          t,
          a
        );
    }
  }
  function Em(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ro(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          st = o, Mm(
            o,
            e
          );
        }
      Em(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Am(e), e = e.sibling;
  }
  function Am(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ro(e), e.flags & 2048 && Yn(9, e, e.return);
        break;
      case 3:
        ro(e);
        break;
      case 12:
        ro(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ul(e)) : ro(e);
        break;
      default:
        ro(e);
    }
  }
  function Ul(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          st = o, Mm(
            o,
            e
          );
        }
      Em(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, t, t.return), Ul(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ul(t));
          break;
        default:
          Ul(t);
      }
      e = e.sibling;
    }
  }
  function Mm(e, t) {
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
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Li(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, st = o;
      else
        e: for (a = e; st !== null; ) {
          o = st;
          var u = o.sibling, c = o.return;
          if (gm(o), o === a) {
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
  var _y = {
    getCacheForType: function(e) {
      var t = ft(nt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(nt).controller.signal;
    }
  }, yy = typeof WeakMap == "function" ? WeakMap : Map, De = 0, qe = null, Se = null, ke = 0, Ze = 0, Dt = null, Bn = !1, ri = !1, _s = !1, zn = 0, We = 0, Hn = 0, za = 0, ys = 0, Rt = 0, ui = 0, uo = null, Et = null, gs = !1, Yl = 0, jm = 0, Bl = 1 / 0, Hl = null, Xn = null, lt = 0, qn = null, si = null, xn = 0, bs = 0, Ss = null, Cm = null, so = 0, ws = null;
  function Zt() {
    return (De & 2) !== 0 && ke !== 0 ? ke & -ke : E.T !== null ? As() : Gc();
  }
  function Om() {
    if (Rt === 0)
      if ((ke & 536870912) === 0 || Ee) {
        var e = Ko;
        Ko <<= 1, (Ko & 3932160) === 0 && (Ko = 262144), Rt = e;
      } else Rt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), Rt;
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
    )), ln(e));
  }
  function Nm(e, t, a) {
    if ((De & 6) !== 0) throw Error(r(327));
    var o = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Mi(e, t), u = o ? Sy(e, t) : xs(e, t, !0), c = o;
    do {
      if (u === 0) {
        ri && !o && $n(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !gy(a)) {
          u = xs(e, t, !1), c = !1;
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
              var _ = e;
              u = uo;
              var S = _.current.memoizedState.isDehydrated;
              if (S && (ci(_, p).flags |= 256), p = xs(
                _,
                p,
                !1
              ), p !== 2) {
                if (_s && !S) {
                  _.errorRecoveryDisabledLanes |= c, za |= c, u = 4;
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
          switch (o = e, c = u, c) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              $n(
                o,
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
          if ((t & 62914560) === t && (u = Yl + 300 - yt(), 10 < u)) {
            if ($n(
              o,
              t,
              Rt,
              !Bn
            ), Po(o, 0, !0) !== 0) break e;
            xn = t, o.timeoutHandle = cp(
              Dm.bind(
                null,
                o,
                a,
                Et,
                Hl,
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
          Dm(
            o,
            a,
            Et,
            Hl,
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
    ln(e);
  }
  function Dm(e, t, a, o, u, c, p, _, S, M, D, U, C, O) {
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
      }, Tm(
        t,
        c,
        U
      );
      var ie = (c & 62914560) === c ? Yl - yt() : (c & 4194048) === c ? jm - yt() : 0;
      if (ie = ag(
        U,
        ie
      ), ie !== null) {
        xn = c, e.cancelPendingCommit = ie(
          qm.bind(
            null,
            e,
            t,
            c,
            a,
            o,
            u,
            p,
            _,
            S,
            D,
            U,
            null,
            C,
            O
          )
        ), $n(e, c, p, !M);
        return;
      }
    }
    qm(
      e,
      t,
      c,
      a,
      o,
      u,
      p,
      _,
      S
    );
  }
  function gy(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var u = a[o], c = u.getSnapshot;
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
  function $n(e, t, a, o) {
    t &= ~ys, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - ee(u), p = 1 << c;
      o[c] = -1, u &= ~p;
    }
    a !== 0 && $c(e, a, t);
  }
  function Xl() {
    return (De & 6) === 0 ? (co(0), !1) : !0;
  }
  function zs() {
    if (Se !== null) {
      if (Ze === 0)
        var e = Se.return;
      else
        e = Se, mn = pa = null, Bu(e), ei = null, Gi = 0, e = Se;
      for (; e !== null; )
        dm(e.alternate, e), e = e.return;
      Se = null;
    }
  }
  function ci(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, By(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xn = 0, zs(), qe = e, Se = a = dn(e.current, null), ke = t, Ze = 0, Dt = null, Bn = !1, ri = Mi(e, t), _s = !1, ui = Rt = ys = za = Hn = We = 0, Et = uo = null, gs = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var u = 31 - ee(o), c = 1 << u;
        t |= e[u], o &= ~c;
      }
    return zn = t, ul(), a;
  }
  function Rm(e, t) {
    ye = null, E.H = eo, t === Ia || t === vl ? (t = Pd(), Ze = 3) : t === Eu ? (t = Pd(), Ze = 4) : Ze = t === ts ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Dt = t, Se === null && (We = 1, jl(
      e,
      Xt(t, e.current)
    ));
  }
  function Zm() {
    var e = Ot.current;
    return e === null ? !0 : (ke & 4194048) === ke ? Vt === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === Vt : !1;
  }
  function Um() {
    var e = E.H;
    return E.H = eo, e === null ? eo : e;
  }
  function Ym() {
    var e = E.A;
    return E.A = _y, e;
  }
  function ql() {
    We = 4, Bn || (ke & 4194048) !== ke && Ot.current !== null || (ri = !0), (Hn & 134217727) === 0 && (za & 134217727) === 0 || qe === null || $n(
      qe,
      ke,
      Rt,
      !1
    );
  }
  function xs(e, t, a) {
    var o = De;
    De |= 2;
    var u = Um(), c = Ym();
    (qe !== e || ke !== t) && (Hl = null, ci(e, t)), t = !1;
    var p = We;
    e: do
      try {
        if (Ze !== 0 && Se !== null) {
          var _ = Se, S = Dt;
          switch (Ze) {
            case 8:
              zs(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var M = Ze;
              if (Ze = 0, Dt = null, di(e, _, S, M), a && ri) {
                p = 0;
                break e;
              }
              break;
            default:
              M = Ze, Ze = 0, Dt = null, di(e, _, S, M);
          }
        }
        by(), p = We;
        break;
      } catch (D) {
        Rm(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, mn = pa = null, De = o, E.H = u, E.A = c, Se === null && (qe = null, ke = 0, ul()), p;
  }
  function by() {
    for (; Se !== null; ) Bm(Se);
  }
  function Sy(e, t) {
    var a = De;
    De |= 2;
    var o = Um(), u = Ym();
    qe !== e || ke !== t ? (Hl = null, Bl = yt() + 500, ci(e, t)) : ri = Mi(
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
              if (Kd(c)) {
                Ze = 0, Dt = null, Hm(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || qe !== e || (Ze = 7), ln(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              Kd(c) ? (Ze = 0, Dt = null, Hm(t)) : (Ze = 0, Dt = null, di(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Se.tag) {
                case 26:
                  p = Se.memoizedState;
                case 5:
                case 27:
                  var _ = Se;
                  if (p ? kp(p) : _.stateNode.complete) {
                    Ze = 0, Dt = null;
                    var S = _.sibling;
                    if (S !== null) Se = S;
                    else {
                      var M = _.return;
                      M !== null ? (Se = M, $l(M)) : Se = null;
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
              zs(), We = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        wy();
        break;
      } catch (D) {
        Rm(e, D);
      }
    while (!0);
    return mn = pa = null, E.H = o, E.A = u, De = a, Se !== null ? 0 : (qe = null, ke = 0, ul(), We);
  }
  function wy() {
    for (; Se !== null && !Rr(); )
      Bm(Se);
  }
  function Bm(e) {
    var t = sm(e.alternate, e, zn);
    e.memoizedProps = e.pendingProps, t === null ? $l(e) : Se = t;
  }
  function Hm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = am(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ke
        );
        break;
      case 11:
        t = am(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ke
        );
        break;
      case 5:
        Bu(t);
      default:
        dm(a, t), t = Se = Ud(t, zn), t = sm(a, t, zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? $l(e) : Se = t;
  }
  function di(e, t, a, o) {
    mn = pa = null, Bu(t), ei = null, Gi = 0;
    var u = t.return;
    try {
      if (cy(
        e,
        u,
        t,
        a,
        ke
      )) {
        We = 1, jl(
          e,
          Xt(a, e.current)
        ), Se = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw Se = u, c;
      We = 1, jl(
        e,
        Xt(a, e.current)
      ), Se = null;
      return;
    }
    t.flags & 32768 ? (Ee || o === 1 ? e = !0 : ri || (ke & 536870912) !== 0 ? e = !1 : (Bn = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Ot.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Xm(t, e)) : $l(t);
  }
  function $l(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Xm(
          t,
          Bn
        );
        return;
      }
      e = t.return;
      var a = my(
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
  function Xm(e, t) {
    do {
      var a = py(e.alternate, e);
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
  function qm(e, t, a, o, u, c, p, _, S) {
    e.cancelPendingCommit = null;
    do
      Ll();
    while (lt !== 0);
    if ((De & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (c = t.lanes | t.childLanes, c |= fu, t_(
        e,
        a,
        c,
        p,
        _,
        S
      ), e === qe && (Se = qe = null, ke = 0), si = t, qn = e, xn = a, bs = c, Ss = u, Cm = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ty(Oa, function() {
        return Qm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = E.T, E.T = null, u = X.p, X.p = 2, p = De, De |= 4;
        try {
          hy(e, t, a);
        } finally {
          De = p, X.p = u, E.T = o;
        }
      }
      lt = 1, $m(), Lm(), Vm();
    }
  }
  function $m() {
    if (lt === 1) {
      lt = 0;
      var e = qn, t = si, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null;
        var o = X.p;
        X.p = 2;
        var u = De;
        De |= 4;
        try {
          zm(t, e);
          var c = Zs, p = Ad(e.containerInfo), _ = c.focusedElem, S = c.selectionRange;
          if (p !== _ && _ && _.ownerDocument && Ed(
            _.ownerDocument.documentElement,
            _
          )) {
            if (S !== null && ru(_)) {
              var M = S.start, D = S.end;
              if (D === void 0 && (D = M), "selectionStart" in _)
                _.selectionStart = M, _.selectionEnd = Math.min(
                  D,
                  _.value.length
                );
              else {
                var U = _.ownerDocument || document, C = U && U.defaultView || window;
                if (C.getSelection) {
                  var O = C.getSelection(), ie = _.textContent.length, me = Math.min(S.start, ie), He = S.end === void 0 ? me : Math.min(S.end, ie);
                  !O.extend && me > He && (p = He, He = me, me = p);
                  var k = Td(
                    _,
                    me
                  ), z = Td(
                    _,
                    He
                  );
                  if (k && z && (O.rangeCount !== 1 || O.anchorNode !== k.node || O.anchorOffset !== k.offset || O.focusNode !== z.node || O.focusOffset !== z.offset)) {
                    var A = U.createRange();
                    A.setStart(k.node, k.offset), O.removeAllRanges(), me > He ? (O.addRange(A), O.extend(z.node, z.offset)) : (A.setEnd(z.node, z.offset), O.addRange(A));
                  }
                }
              }
            }
            for (U = [], O = _; O = O.parentNode; )
              O.nodeType === 1 && U.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < U.length; _++) {
              var R = U[_];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          nr = !!Rs, Zs = Rs = null;
        } finally {
          De = u, X.p = o, E.T = a;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function Lm() {
    if (lt === 2) {
      lt = 0;
      var e = qn, t = si, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = E.T, E.T = null;
        var o = X.p;
        X.p = 2;
        var u = De;
        De |= 4;
        try {
          ym(e, t.alternate, t);
        } finally {
          De = u, X.p = o, E.T = a;
        }
      }
      lt = 3;
    }
  }
  function Vm() {
    if (lt === 4 || lt === 3) {
      lt = 0, aa();
      var e = qn, t = si, a = xn, o = Cm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, si = qn = null, Gm(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Xn = null), qr(a), t = t.stateNode, H && typeof H.onCommitFiberRoot == "function")
        try {
          H.onCommitFiberRoot(
            oa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = E.T, u = X.p, X.p = 2, E.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < o.length; p++) {
            var _ = o[p];
            c(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          E.T = t, X.p = u;
        }
      }
      (xn & 3) !== 0 && Ll(), ln(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === ws ? so++ : (so = 0, ws = e) : so = 0, co(0);
    }
  }
  function Gm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Li(t)));
  }
  function Ll() {
    return $m(), Lm(), Vm(), Qm();
  }
  function Qm() {
    if (lt !== 5) return !1;
    var e = qn, t = bs;
    bs = 0;
    var a = qr(xn), o = E.T, u = X.p;
    try {
      X.p = 32 > a ? 32 : a, E.T = null, a = Ss, Ss = null;
      var c = qn, p = xn;
      if (lt = 0, si = qn = null, xn = 0, (De & 6) !== 0) throw Error(r(331));
      var _ = De;
      if (De |= 4, Am(c.current), km(
        c,
        c.current,
        p,
        a
      ), De = _, co(0, !1), H && typeof H.onPostCommitFiberRoot == "function")
        try {
          H.onPostCommitFiberRoot(oa, c);
        } catch {
        }
      return !0;
    } finally {
      X.p = u, E.T = o, Gm(e, t);
    }
  }
  function Km(e, t, a) {
    t = Xt(a, t), t = es(e.stateNode, t, 2), e = Rn(e, t, 2), e !== null && (ji(e, 2), ln(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3)
      Km(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Km(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Xn === null || !Xn.has(o))) {
            e = Xt(a, e), a = Jf(2), o = Rn(t, a, 2), o !== null && (Pf(
              a,
              o,
              t,
              e
            ), ji(o, 2), ln(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function ks(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new yy();
      var u = /* @__PURE__ */ new Set();
      o.set(t, u);
    } else
      u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u));
    u.has(a) || (_s = !0, u.add(a), e = zy.bind(null, e, t, a), t.then(e, e));
  }
  function zy(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, qe === e && (ke & a) === a && (We === 4 || We === 3 && (ke & 62914560) === ke && 300 > yt() - Yl ? (De & 2) === 0 && ci(e, 0) : ys |= a, ui === ke && (ui = 0)), ln(e);
  }
  function Jm(e, t) {
    t === 0 && (t = qc()), e = da(e, t), e !== null && (ji(e, t), ln(e));
  }
  function xy(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Jm(e, a);
  }
  function ky(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    o !== null && o.delete(t), Jm(e, a);
  }
  function Ty(e, t) {
    return Ca(e, t);
  }
  var Vl = null, fi = null, Ts = !1, Gl = !1, Es = !1, Ln = 0;
  function ln(e) {
    e !== fi && e.next === null && (fi === null ? Vl = fi = e : fi = fi.next = e), Gl = !0, Ts || (Ts = !0, Ay());
  }
  function co(e, t) {
    if (!Es && Gl) {
      Es = !0;
      do
        for (var a = !1, o = Vl; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var p = o.suspendedLanes, _ = o.pingedLanes;
              c = (1 << 31 - ee(42 | e) + 1) - 1, c &= u & ~(p & ~_), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Im(o, c));
          } else
            c = ke, c = Po(
              o,
              o === qe ? c : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (c & 3) === 0 || Mi(o, c) || (a = !0, Im(o, c));
          o = o.next;
        }
      while (a);
      Es = !1;
    }
  }
  function Ey() {
    Pm();
  }
  function Pm() {
    Gl = Ts = !1;
    var e = 0;
    Ln !== 0 && Yy() && (e = Ln);
    for (var t = yt(), a = null, o = Vl; o !== null; ) {
      var u = o.next, c = Wm(o, t);
      c === 0 ? (o.next = null, a === null ? Vl = u : a.next = u, u === null && (fi = a)) : (a = o, (e !== 0 || (c & 3) !== 0) && (Gl = !0)), o = u;
    }
    lt !== 0 && lt !== 5 || co(e), Ln !== 0 && (Ln = 0);
  }
  function Wm(e, t) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - ee(c), _ = 1 << p, S = u[p];
      S === -1 ? ((_ & a) === 0 || (_ & o) !== 0) && (u[p] = e_(_, t)) : S <= t && (e.expiredLanes |= _), c &= ~_;
    }
    if (t = qe, a = ke, a = Po(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && Ai(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Mi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (o !== null && Ai(o), qr(a)) {
        case 2:
        case 8:
          a = Go;
          break;
        case 32:
          a = Oa;
          break;
        case 268435456:
          a = ia;
          break;
        default:
          a = Oa;
      }
      return o = Fm.bind(null, e), a = Ca(a, o), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return o !== null && o !== null && Ai(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Fm(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ll() && e.callbackNode !== a)
      return null;
    var o = ke;
    return o = Po(
      e,
      e === qe ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Nm(e, o, t), Wm(e, yt()), e.callbackNode != null && e.callbackNode === a ? Fm.bind(null, e) : null);
  }
  function Im(e, t) {
    if (Ll()) return null;
    Nm(e, t, !0);
  }
  function Ay() {
    Hy(function() {
      (De & 6) !== 0 ? Ca(
        Vo,
        Ey
      ) : Pm();
    });
  }
  function As() {
    if (Ln === 0) {
      var e = Wa;
      e === 0 && (e = Qo, Qo <<= 1, (Qo & 261888) === 0 && (Qo = 256)), Ln = e;
    }
    return Ln;
  }
  function ep(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : el("" + e);
  }
  function tp(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function My(e, t, a, o, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var c = ep(
        (u[wt] || null).action
      ), p = o.submitter;
      p && (t = (t = p[wt] || null) ? ep(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var _ = new il(
        "action",
        "action",
        null,
        o,
        u
      );
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Ln !== 0) {
                  var S = p ? tp(u, p) : new FormData(u);
                  Ku(
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
                typeof c == "function" && (_.preventDefault(), S = p ? tp(u, p) : new FormData(u), Ku(
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
  for (var Ms = 0; Ms < du.length; Ms++) {
    var js = du[Ms], jy = js.toLowerCase(), Cy = js[0].toUpperCase() + js.slice(1);
    Wt(
      jy,
      "on" + Cy
    );
  }
  Wt(Cd, "onAnimationEnd"), Wt(Od, "onAnimationIteration"), Wt(Nd, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(Q_, "onTransitionRun"), Wt(K_, "onTransitionStart"), Wt(J_, "onTransitionCancel"), Wt(Dd, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), ra(
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
  var fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Oy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo)
  );
  function np(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], u = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = o.length - 1; 0 <= p; p--) {
            var _ = o[p], S = _.instance, M = _.currentTarget;
            if (_ = _.listener, S !== c && u.isPropagationStopped())
              break e;
            c = _, u.currentTarget = M;
            try {
              c(u);
            } catch (D) {
              rl(D);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (p = 0; p < o.length; p++) {
            if (_ = o[p], S = _.instance, M = _.currentTarget, _ = _.listener, S !== c && u.isPropagationStopped())
              break e;
            c = _, u.currentTarget = M;
            try {
              c(u);
            } catch (D) {
              rl(D);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function we(e, t) {
    var a = t[$r];
    a === void 0 && (a = t[$r] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (ap(t, e, 2, !1), a.add(o));
  }
  function Cs(e, t, a) {
    var o = 0;
    t && (o |= 4), ap(
      a,
      e,
      o,
      t
    );
  }
  var Ql = "_reactListening" + Math.random().toString(36).slice(2);
  function Os(e) {
    if (!e[Ql]) {
      e[Ql] = !0, Jc.forEach(function(a) {
        a !== "selectionchange" && (Oy.has(a) || Cs(a, !1, e), Cs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ql] || (t[Ql] = !0, Cs("selectionchange", !1, t));
    }
  }
  function ap(e, t, a, o) {
    switch (Op(t)) {
      case 2:
        var u = lg;
        break;
      case 8:
        u = rg;
        break;
      default:
        u = Qs;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Fr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), o ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function Ns(e, t, a, o, u) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var _ = o.stateNode.containerInfo;
          if (_ === u) break;
          if (p === 4)
            for (p = o.return; p !== null; ) {
              var S = p.tag;
              if ((S === 3 || S === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; _ !== null; ) {
            if (p = Da(_), p === null) return;
            if (S = p.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              o = c = p;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        o = o.return;
      }
    rd(function() {
      var M = c, D = Pr(a), U = [];
      e: {
        var C = Rd.get(e);
        if (C !== void 0) {
          var O = il, ie = e;
          switch (e) {
            case "keypress":
              if (nl(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = k_;
              break;
            case "focusin":
              ie = "focus", O = nu;
              break;
            case "focusout":
              ie = "blur", O = nu;
              break;
            case "beforeblur":
            case "afterblur":
              O = nu;
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
              O = cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = m_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = A_;
              break;
            case Cd:
            case Od:
            case Nd:
              O = v_;
              break;
            case Dd:
              O = j_;
              break;
            case "scroll":
            case "scrollend":
              O = d_;
              break;
            case "wheel":
              O = O_;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = y_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = fd;
              break;
            case "toggle":
            case "beforetoggle":
              O = D_;
          }
          var me = (t & 4) !== 0, He = !me && (e === "scroll" || e === "scrollend"), k = me ? C !== null ? C + "Capture" : null : C;
          me = [];
          for (var z = M, A; z !== null; ) {
            var R = z;
            if (A = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || A === null || k === null || (R = Ni(z, k), R != null && me.push(
              mo(z, R, A)
            )), He) break;
            z = z.return;
          }
          0 < me.length && (C = new O(
            C,
            ie,
            null,
            a,
            D
          ), U.push({ event: C, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", C && a !== Jr && (ie = a.relatedTarget || a.fromElement) && (Da(ie) || ie[Na]))
            break e;
          if ((O || C) && (C = D.window === D ? D : (C = D.ownerDocument) ? C.defaultView || C.parentWindow : window, O ? (ie = a.relatedTarget || a.toElement, O = M, ie = ie ? Da(ie) : null, ie !== null && (He = d(ie), me = ie.tag, ie !== He || me !== 5 && me !== 27 && me !== 6) && (ie = null)) : (O = null, ie = M), O !== ie)) {
            if (me = cd, R = "onMouseLeave", k = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (me = fd, R = "onPointerLeave", k = "onPointerEnter", z = "pointer"), He = O == null ? C : Oi(O), A = ie == null ? C : Oi(ie), C = new me(
              R,
              z + "leave",
              O,
              a,
              D
            ), C.target = He, C.relatedTarget = A, R = null, Da(D) === M && (me = new me(
              k,
              z + "enter",
              ie,
              a,
              D
            ), me.target = A, me.relatedTarget = He, R = me), He = R, O && ie)
              t: {
                for (me = Ny, k = O, z = ie, A = 0, R = k; R; R = me(R))
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
            O !== null && ip(
              U,
              C,
              O,
              me,
              !1
            ), ie !== null && He !== null && ip(
              U,
              He,
              ie,
              me,
              !0
            );
          }
        }
        e: {
          if (C = M ? Oi(M) : window, O = C.nodeName && C.nodeName.toLowerCase(), O === "select" || O === "input" && C.type === "file")
            var je = bd;
          else if (yd(C))
            if (Sd)
              je = L_;
            else {
              je = q_;
              var le = X_;
            }
          else
            O = C.nodeName, !O || O.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && Kr(M.elementType) && (je = bd) : je = $_;
          if (je && (je = je(e, M))) {
            gd(
              U,
              je,
              a,
              D
            );
            break e;
          }
          le && le(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && Qr(C, "number", C.value);
        }
        switch (le = M ? Oi(M) : window, e) {
          case "focusin":
            (yd(le) || le.contentEditable === "true") && ($a = le, uu = M, Xi = null);
            break;
          case "focusout":
            Xi = uu = $a = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            su = !1, Md(U, a, D);
            break;
          case "selectionchange":
            if (G_) break;
          case "keydown":
          case "keyup":
            Md(U, a, D);
        }
        var ge;
        if (iu)
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
          qa ? vd(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Te = "onCompositionStart");
        Te && (md && a.locale !== "ko" && (qa || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && qa && (ge = ud()) : (An = D, Ir = "value" in An ? An.value : An.textContent, qa = !0)), le = Kl(M, Te), 0 < le.length && (Te = new dd(
          Te,
          e,
          null,
          a,
          D
        ), U.push({ event: Te, listeners: le }), ge ? Te.data = ge : (ge = _d(a), ge !== null && (Te.data = ge)))), (ge = Z_ ? U_(e, a) : Y_(e, a)) && (Te = Kl(M, "onBeforeInput"), 0 < Te.length && (le = new dd(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          D
        ), U.push({
          event: le,
          listeners: Te
        }), le.data = ge)), My(
          U,
          e,
          M,
          a,
          D
        );
      }
      np(U, t);
    });
  }
  function mo(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Kl(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ni(e, a), u != null && o.unshift(
        mo(e, u, c)
      ), u = Ni(e, t), u != null && o.push(
        mo(e, u, c)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Ny(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ip(e, t, a, o, u) {
    for (var c = t._reactName, p = []; a !== null && a !== o; ) {
      var _ = a, S = _.alternate, M = _.stateNode;
      if (_ = _.tag, S !== null && S === o) break;
      _ !== 5 && _ !== 26 && _ !== 27 || M === null || (S = M, u ? (M = Ni(a, c), M != null && p.unshift(
        mo(a, M, S)
      )) : u || (M = Ni(a, c), M != null && p.push(
        mo(a, M, S)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Dy = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
  function op(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dy, `
`).replace(Ry, "");
  }
  function lp(e, t) {
    return t = op(t), op(e) === t;
  }
  function Be(e, t, a, o, u, c) {
    switch (a) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Ba(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Ba(e, "" + o);
        break;
      case "className":
        Fo(e, "class", o);
        break;
      case "tabIndex":
        Fo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fo(e, a, o);
        break;
      case "style":
        od(e, o, c);
        break;
      case "data":
        if (t !== "object") {
          Fo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = el("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
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
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = el("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = sn);
        break;
      case "onScroll":
        o != null && we("scroll", e);
        break;
      case "onScrollEnd":
        o != null && we("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(r(61));
          if (a = o.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = el("" + o), e.setAttributeNS(
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        we("beforetoggle", e), we("toggle", e), Wo(e, "popover", o);
        break;
      case "xlinkActuate":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        un(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        un(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Wo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = s_.get(a) || a, Wo(e, a, o));
    }
  }
  function Ds(e, t, a, o, u, c) {
    switch (a) {
      case "style":
        od(e, o, c);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(r(61));
          if (a = o.__html, a != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Ba(e, o) : (typeof o == "number" || typeof o == "bigint") && Ba(e, "" + o);
        break;
      case "onScroll":
        o != null && we("scroll", e);
        break;
      case "onScrollEnd":
        o != null && we("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = sn);
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
        if (!Pc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), c = e[wt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof o == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, o, u);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : Wo(e, a, o);
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
        var o = !1, u = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var p = a[c];
            if (p != null)
              switch (c) {
                case "src":
                  o = !0;
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
        u && Be(e, t, "srcSet", a.srcSet, a, null), o && Be(e, t, "src", a.src, a, null);
        return;
      case "input":
        we("invalid", e);
        var _ = c = p = u = null, S = null, M = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var D = a[o];
            if (D != null)
              switch (o) {
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
                  _ = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Be(e, t, o, D, a, null);
              }
          }
        td(
          e,
          c,
          _,
          S,
          M,
          p,
          u,
          !1
        );
        return;
      case "select":
        we("invalid", e), o = p = c = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (_ = a[u], _ != null))
            switch (u) {
              case "value":
                c = _;
                break;
              case "defaultValue":
                p = _;
                break;
              case "multiple":
                o = _;
              default:
                Be(e, t, u, _, a, null);
            }
        t = c, a = p, e.multiple = !!o, t != null ? Ya(e, !!o, t, !1) : a != null && Ya(e, !!o, a, !0);
        return;
      case "textarea":
        we("invalid", e), c = u = o = null;
        for (p in a)
          if (a.hasOwnProperty(p) && (_ = a[p], _ != null))
            switch (p) {
              case "value":
                o = _;
                break;
              case "defaultValue":
                u = _;
                break;
              case "children":
                c = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(91));
                break;
              default:
                Be(e, t, p, _, a, null);
            }
        ad(e, o, u, c);
        return;
      case "option":
        for (S in a)
          a.hasOwnProperty(S) && (o = a[S], o != null) && (S === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : Be(e, t, S, o, a, null));
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
        for (o = 0; o < fo.length; o++)
          we(fo[o], e);
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
          if (a.hasOwnProperty(M) && (o = a[M], o != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Be(e, t, M, o, a, null);
            }
        return;
      default:
        if (Kr(t)) {
          for (D in a)
            a.hasOwnProperty(D) && (o = a[D], o !== void 0 && Ds(
              e,
              t,
              D,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (_ in a)
      a.hasOwnProperty(_) && (o = a[_], o != null && Be(e, t, _, o, a, null));
  }
  function Zy(e, t, a, o) {
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
        var u = null, c = null, p = null, _ = null, S = null, M = null, D = null;
        for (O in a) {
          var U = a[O];
          if (a.hasOwnProperty(O) && U != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                o.hasOwnProperty(O) || Be(e, t, O, null, o, U);
            }
        }
        for (var C in o) {
          var O = o[C];
          if (U = a[C], o.hasOwnProperty(C) && (O != null || U != null))
            switch (C) {
              case "type":
                c = O;
                break;
              case "name":
                u = O;
                break;
              case "checked":
                M = O;
                break;
              case "defaultChecked":
                D = O;
                break;
              case "value":
                p = O;
                break;
              case "defaultValue":
                _ = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== U && Be(
                  e,
                  t,
                  C,
                  O,
                  o,
                  U
                );
            }
        }
        Gr(
          e,
          p,
          _,
          S,
          M,
          D,
          c,
          u
        );
        return;
      case "select":
        O = p = _ = C = null;
        for (c in a)
          if (S = a[c], a.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                o.hasOwnProperty(c) || Be(
                  e,
                  t,
                  c,
                  null,
                  o,
                  S
                );
            }
        for (u in o)
          if (c = o[u], S = a[u], o.hasOwnProperty(u) && (c != null || S != null))
            switch (u) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                _ = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== S && Be(
                  e,
                  t,
                  u,
                  c,
                  o,
                  S
                );
            }
        t = _, a = p, o = O, C != null ? Ya(e, !!a, C, !1) : !!o != !!a && (t != null ? Ya(e, !!a, t, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (_ in a)
          if (u = a[_], a.hasOwnProperty(_) && u != null && !o.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, _, null, o, u);
            }
        for (p in o)
          if (u = o[p], c = a[p], o.hasOwnProperty(p) && (u != null || c != null))
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
                u !== c && Be(e, t, p, u, o, c);
            }
        nd(e, C, O);
        return;
      case "option":
        for (var ie in a)
          C = a[ie], a.hasOwnProperty(ie) && C != null && !o.hasOwnProperty(ie) && (ie === "selected" ? e.selected = !1 : Be(
            e,
            t,
            ie,
            null,
            o,
            C
          ));
        for (S in o)
          C = o[S], O = a[S], o.hasOwnProperty(S) && C !== O && (C != null || O != null) && (S === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Be(
            e,
            t,
            S,
            C,
            o,
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
        for (var me in a)
          C = a[me], a.hasOwnProperty(me) && C != null && !o.hasOwnProperty(me) && Be(e, t, me, null, o, C);
        for (M in o)
          if (C = o[M], O = a[M], o.hasOwnProperty(M) && C !== O && (C != null || O != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, t));
                break;
              default:
                Be(
                  e,
                  t,
                  M,
                  C,
                  o,
                  O
                );
            }
        return;
      default:
        if (Kr(t)) {
          for (var He in a)
            C = a[He], a.hasOwnProperty(He) && C !== void 0 && !o.hasOwnProperty(He) && Ds(
              e,
              t,
              He,
              void 0,
              o,
              C
            );
          for (D in o)
            C = o[D], O = a[D], !o.hasOwnProperty(D) || C === O || C === void 0 && O === void 0 || Ds(
              e,
              t,
              D,
              C,
              o,
              O
            );
          return;
        }
    }
    for (var k in a)
      C = a[k], a.hasOwnProperty(k) && C != null && !o.hasOwnProperty(k) && Be(e, t, k, null, o, C);
    for (U in o)
      C = o[U], O = a[U], !o.hasOwnProperty(U) || C === O || C == null && O == null || Be(e, t, U, C, o, O);
  }
  function rp(e) {
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
  function Uy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), o = 0; o < a.length; o++) {
        var u = a[o], c = u.transferSize, p = u.initiatorType, _ = u.duration;
        if (c && _ && rp(p)) {
          for (p = 0, _ = u.responseEnd, o += 1; o < a.length; o++) {
            var S = a[o], M = S.startTime;
            if (M > _) break;
            var D = S.transferSize, U = S.initiatorType;
            D && rp(U) && (S = S.responseEnd, p += D * (S < _ ? 1 : (_ - M) / (S - M)));
          }
          if (--o, t += 8 * (c + p) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Rs = null, Zs = null;
  function Jl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function up(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sp(e, t) {
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
  function Us(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ys = null;
  function Yy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ys ? !1 : (Ys = e, !0) : (Ys = null, !1);
  }
  var cp = typeof setTimeout == "function" ? setTimeout : void 0, By = typeof clearTimeout == "function" ? clearTimeout : void 0, dp = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof dp < "u" ? function(e) {
    return dp.resolve(null).then(e).catch(Xy);
  } : cp;
  function Xy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vn(e) {
    return e === "head";
  }
  function fp(e, t) {
    var a = t, o = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (o === 0) {
            e.removeChild(u), vi(t);
            return;
          }
          o--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          o++;
        else if (a === "html")
          po(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, po(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, _ = c.nodeName;
            c[Ci] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && po(e.ownerDocument.body);
      a = u;
    } while (a);
    vi(t);
  }
  function mp(e, t) {
    var a = e;
    e = 0;
    do {
      var o = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), o && o.nodeType === 8)
        if (a = o.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = o;
    } while (a);
  }
  function Bs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bs(a), Lr(a);
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
  function qy(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Ci])
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
  function $y(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function pp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ly(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var o = function() {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
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
  var qs = null;
  function hp(e) {
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
  function vp(e) {
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
  function _p(e, t, a) {
    switch (t = Jl(a), e) {
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
  function po(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Lr(e);
  }
  var Qt = /* @__PURE__ */ new Map(), yp = /* @__PURE__ */ new Set();
  function Pl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var kn = X.d;
  X.d = {
    f: Vy,
    r: Gy,
    D: Qy,
    C: Ky,
    L: Jy,
    m: Py,
    X: Fy,
    S: Wy,
    M: Iy
  };
  function Vy() {
    var e = kn.f(), t = Xl();
    return e || t;
  }
  function Gy(e) {
    var t = Ra(e);
    t !== null && t.tag === 5 && t.type === "form" ? Rf(t) : kn.r(e);
  }
  var mi = typeof document > "u" ? null : document;
  function gp(e, t, a) {
    var o = mi;
    if (o && typeof t == "string" && t) {
      var u = Bt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), yp.has(u) || (yp.add(u), e = { rel: e, crossOrigin: a, href: t }, o.querySelector(u) === null && (t = o.createElement("link"), pt(t, "link", e), ut(t), o.head.appendChild(t)));
    }
  }
  function Qy(e) {
    kn.D(e), gp("dns-prefetch", e, null);
  }
  function Ky(e, t) {
    kn.C(e, t), gp("preconnect", e, t);
  }
  function Jy(e, t, a) {
    kn.L(e, t, a);
    var o = mi;
    if (o && e && t) {
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
      ), Qt.set(c, e), o.querySelector(u) !== null || t === "style" && o.querySelector(ho(c)) || t === "script" && o.querySelector(vo(c)) || (t = o.createElement("link"), pt(t, "link", e), ut(t), o.head.appendChild(t)));
    }
  }
  function Py(e, t) {
    kn.m(e, t);
    var a = mi;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Bt(o) + '"][href="' + Bt(e) + '"]', c = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = hi(e);
      }
      if (!Qt.has(c) && (e = b({ rel: "modulepreload", href: e }, t), Qt.set(c, e), a.querySelector(u) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vo(c)))
              return;
        }
        o = a.createElement("link"), pt(o, "link", e), ut(o), a.head.appendChild(o);
      }
    }
  }
  function Wy(e, t, a) {
    kn.S(e, t, a);
    var o = mi;
    if (o && e) {
      var u = Za(o).hoistableStyles, c = pi(e);
      t = t || "default";
      var p = u.get(c);
      if (!p) {
        var _ = { loading: 0, preload: null };
        if (p = o.querySelector(
          ho(c)
        ))
          _.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Qt.get(c)) && $s(e, a);
          var S = p = o.createElement("link");
          ut(S), pt(S, "link", e), S._p = new Promise(function(M, D) {
            S.onload = M, S.onerror = D;
          }), S.addEventListener("load", function() {
            _.loading |= 1;
          }), S.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, Wl(p, t, o);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: _
        }, u.set(c, p);
      }
    }
  }
  function Fy(e, t) {
    kn.X(e, t);
    var a = mi;
    if (a && e) {
      var o = Za(a).hoistableScripts, u = hi(e), c = o.get(u);
      c || (c = a.querySelector(vo(u)), c || (e = b({ src: e, async: !0 }, t), (t = Qt.get(u)) && Ls(e, t), c = a.createElement("script"), ut(c), pt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, o.set(u, c));
    }
  }
  function Iy(e, t) {
    kn.M(e, t);
    var a = mi;
    if (a && e) {
      var o = Za(a).hoistableScripts, u = hi(e), c = o.get(u);
      c || (c = a.querySelector(vo(u)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = Qt.get(u)) && Ls(e, t), c = a.createElement("script"), ut(c), pt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, o.set(u, c));
    }
  }
  function bp(e, t, a, o) {
    var u = (u = _e.current) ? Pl(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = pi(a.href), a = Za(
          u
        ).hoistableStyles, o = a.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
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
            ho(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Qt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qt.set(e, a), c || eg(
            u,
            e,
            a,
            p.state
          ))), t && o === null)
            throw Error(r(528, ""));
          return p;
        }
        if (t && o !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hi(a), a = Za(
          u
        ).hoistableScripts, o = a.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function pi(e) {
    return 'href="' + Bt(e) + '"';
  }
  function ho(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Sp(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function eg(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), pt(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function hi(e) {
    return '[src="' + Bt(e) + '"]';
  }
  function vo(e) {
    return "script[async]" + e;
  }
  function wp(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + Bt(a.href) + '"]'
          );
          if (o)
            return t.instance = o, ut(o), o;
          var u = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), ut(o), pt(o, "style", u), Wl(o, a.precedence, e), t.instance = o;
        case "stylesheet":
          u = pi(a.href);
          var c = e.querySelector(
            ho(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          o = Sp(a), (u = Qt.get(u)) && $s(o, u), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var p = c;
          return p._p = new Promise(function(_, S) {
            p.onload = _, p.onerror = S;
          }), pt(c, "link", o), t.state.loading |= 4, Wl(c, a.precedence, e), t.instance = c;
        case "script":
          return c = hi(a.src), (u = e.querySelector(
            vo(c)
          )) ? (t.instance = u, ut(u), u) : (o = a, (u = Qt.get(c)) && (o = b({}, a), Ls(o, u)), e = e.ownerDocument || e, u = e.createElement("script"), ut(u), pt(u, "link", o), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, Wl(o, a.precedence, e));
    return t.instance;
  }
  function Wl(e, t, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = o.length ? o[o.length - 1] : null, c = u, p = 0; p < o.length; p++) {
      var _ = o[p];
      if (_.dataset.precedence === t) c = _;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function $s(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ls(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Fl = null;
  function zp(e, t, a) {
    if (Fl === null) {
      var o = /* @__PURE__ */ new Map(), u = Fl = /* @__PURE__ */ new Map();
      u.set(a, o);
    } else
      u = Fl, o = u.get(a), o || (o = /* @__PURE__ */ new Map(), u.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var c = a[u];
      if (!(c[Ci] || c[ct] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var _ = o.get(p);
        _ ? _.push(c) : o.set(p, [c]);
      }
    }
    return o;
  }
  function xp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function tg(e, t, a) {
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
  function kp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ng(e, t, a, o) {
    if (a.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = pi(o.href), c = t.querySelector(
          ho(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Il.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ut(c);
          return;
        }
        c = t.ownerDocument || t, o = Sp(o), (u = Qt.get(u)) && $s(o, u), c = c.createElement("link"), ut(c);
        var p = c;
        p._p = new Promise(function(_, S) {
          p.onload = _, p.onerror = S;
        }), pt(c, "link", o), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Il.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Vs = 0;
  function ag(e, t) {
    return e.stylesheets && e.count === 0 && tr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var o = setTimeout(function() {
        if (e.stylesheets && tr(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Vs === 0 && (Vs = 62500 * Uy());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && tr(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Vs ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(o), clearTimeout(u);
      };
    } : null;
  }
  function Il() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, er = /* @__PURE__ */ new Map(), t.forEach(ig, e), er = null, Il.call(e));
  }
  function ig(e, t) {
    if (!(t.state.loading & 4)) {
      var a = er.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), er.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var p = u[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), o = p);
        }
        o && a.set(null, o);
      }
      u = t.instance, p = u.getAttribute("data-precedence"), c = a.get(p) || o, c === o && a.set(null, u), a.set(p, u), this.count++, o = Il.bind(this), u.addEventListener("load", o), u.addEventListener("error", o), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var _o = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function og(e, t, a, o, u, c, p, _, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hr(0), this.hiddenUpdates = Hr(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tp(e, t, a, o, u, c, p, _, S, M, D, U) {
    return e = new og(
      e,
      t,
      a,
      p,
      S,
      M,
      D,
      U,
      _
    ), t = 1, c === !0 && (t |= 24), c = Ct(3, null, null, t), e.current = c, c.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: t
    }, Au(c), e;
  }
  function Ep(e) {
    return e ? (e = Ga, e) : Ga;
  }
  function Ap(e, t, a, o, u, c) {
    u = Ep(u), o.context === null ? o.context = u : o.pendingContext = u, o = Dn(t), o.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (o.callback = c), a = Rn(e, o, t), a !== null && (At(a, e, t), Ki(a, e, t));
  }
  function Mp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Gs(e, t) {
    Mp(e, t), (e = e.alternate) && Mp(e, t);
  }
  function jp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = da(e, 67108864);
      t !== null && At(t, e, 67108864), Gs(e, 67108864);
    }
  }
  function Cp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zt();
      t = Xr(t);
      var a = da(e, t);
      a !== null && At(a, e, t), Gs(e, t);
    }
  }
  var nr = !0;
  function lg(e, t, a, o) {
    var u = E.T;
    E.T = null;
    var c = X.p;
    try {
      X.p = 2, Qs(e, t, a, o);
    } finally {
      X.p = c, E.T = u;
    }
  }
  function rg(e, t, a, o) {
    var u = E.T;
    E.T = null;
    var c = X.p;
    try {
      X.p = 8, Qs(e, t, a, o);
    } finally {
      X.p = c, E.T = u;
    }
  }
  function Qs(e, t, a, o) {
    if (nr) {
      var u = Ks(o);
      if (u === null)
        Ns(
          e,
          t,
          o,
          ar,
          a
        ), Np(e, o);
      else if (sg(
        u,
        e,
        t,
        a,
        o
      ))
        o.stopPropagation();
      else if (Np(e, o), t & 4 && -1 < ug.indexOf(e)) {
        for (; u !== null; ) {
          var c = Ra(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = la(c.pendingLanes);
                  if (p !== 0) {
                    var _ = c;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; p; ) {
                      var S = 1 << 31 - ee(p);
                      _.entanglements[1] |= S, p &= ~S;
                    }
                    ln(c), (De & 6) === 0 && (Bl = yt() + 500, co(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = da(c, 2), _ !== null && At(_, c, 2), Xl(), Gs(c, 2);
            }
          if (c = Ks(o), c === null && Ns(
            e,
            t,
            o,
            ar,
            a
          ), c === u) break;
          u = c;
        }
        u !== null && o.stopPropagation();
      } else
        Ns(
          e,
          t,
          o,
          null,
          a
        );
    }
  }
  function Ks(e) {
    return e = Pr(e), Js(e);
  }
  var ar = null;
  function Js(e) {
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
  function Op(e) {
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
        switch (Zr()) {
          case Vo:
            return 2;
          case Go:
            return 8;
          case Oa:
          case Ur:
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
  var Ps = !1, Gn = null, Qn = null, Kn = null, yo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Jn = [], ug = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Np(e, t) {
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
        yo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        go.delete(t.pointerId);
    }
  }
  function bo(e, t, a, o, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = Ra(t), t !== null && jp(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function sg(e, t, a, o, u) {
    switch (t) {
      case "focusin":
        return Gn = bo(
          Gn,
          e,
          t,
          a,
          o,
          u
        ), !0;
      case "dragenter":
        return Qn = bo(
          Qn,
          e,
          t,
          a,
          o,
          u
        ), !0;
      case "mouseover":
        return Kn = bo(
          Kn,
          e,
          t,
          a,
          o,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return yo.set(
          c,
          bo(
            yo.get(c) || null,
            e,
            t,
            a,
            o,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, go.set(
          c,
          bo(
            go.get(c) || null,
            e,
            t,
            a,
            o,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Dp(e) {
    var t = Da(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, Qc(e.priority, function() {
              Cp(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Qc(e.priority, function() {
              Cp(a);
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
      var a = Ks(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Jr = o, a.target.dispatchEvent(o), Jr = null;
      } else
        return t = Ra(a), t !== null && jp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Rp(e, t, a) {
    ir(e) && a.delete(t);
  }
  function cg() {
    Ps = !1, Gn !== null && ir(Gn) && (Gn = null), Qn !== null && ir(Qn) && (Qn = null), Kn !== null && ir(Kn) && (Kn = null), yo.forEach(Rp), go.forEach(Rp);
  }
  function or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ps || (Ps = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      cg
    )));
  }
  var lr = null;
  function Zp(e) {
    lr !== e && (lr = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        lr === e && (lr = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], o = e[t + 1], u = e[t + 2];
          if (typeof o != "function") {
            if (Js(o || a) === null)
              continue;
            break;
          }
          var c = Ra(a);
          c !== null && (e.splice(t, 3), t -= 3, Ku(
            c,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: o
            },
            o,
            u
          ));
        }
      }
    ));
  }
  function vi(e) {
    function t(S) {
      return or(S, e);
    }
    Gn !== null && or(Gn, e), Qn !== null && or(Qn, e), Kn !== null && or(Kn, e), yo.forEach(t), go.forEach(t);
    for (var a = 0; a < Jn.length; a++) {
      var o = Jn[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Jn.length && (a = Jn[0], a.blockedOn === null); )
      Dp(a), a.blockedOn === null && Jn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var u = a[o], c = a[o + 1], p = u[wt] || null;
        if (typeof c == "function")
          p || Zp(a);
        else if (p) {
          var _ = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, p = c[wt] || null)
              _ = p.formAction;
            else if (Js(u) !== null) continue;
          } else _ = p.action;
          typeof _ == "function" ? a[o + 1] = _ : (a.splice(o, 3), o -= 3), Zp(a);
        }
      }
  }
  function Up() {
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
      u !== null && (u(), u = null), o || setTimeout(a, 20);
    }
    function a() {
      if (!o && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        o = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  rr.prototype.render = Ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, o = Zt();
    Ap(a, o, e, t, null, null);
  }, rr.prototype.unmount = Ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ap(e.current, 2, null, e, null, null), Xl(), t[Na] = null;
    }
  };
  function rr(e) {
    this._internalRoot = e;
  }
  rr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Jn.length && t !== 0 && t < Jn[a].priority; a++) ;
      Jn.splice(a, 0, e), a === 0 && Dp(e);
    }
  };
  var Yp = i.version;
  if (Yp !== "19.2.8")
    throw Error(
      r(
        527,
        Yp,
        "19.2.8"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = v(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var dg = {
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
        oa = ur.inject(
          dg
        ), H = ur;
      } catch {
      }
  }
  return wo.createRoot = function(e, t) {
    if (!s(e)) throw Error(r(299));
    var a = !1, o = "", u = Vf, c = Gf, p = Qf;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = Tp(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      null,
      u,
      c,
      p,
      Up
    ), e[Na] = t.current, Os(e), new Ws(t);
  }, wo.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(r(299));
    var o = !1, u = "", c = Vf, p = Gf, _ = Qf, S = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError), a.formState !== void 0 && (S = a.formState)), t = Tp(
      e,
      1,
      !0,
      t,
      a ?? null,
      o,
      u,
      S,
      c,
      p,
      _,
      Up
    ), t.context = Ep(null), a = t.current, o = Zt(), o = Xr(o), u = Dn(o), u.callback = null, Rn(a, u, o), a = o, t.current.lanes = a, ji(t, a), ln(t), e[Na] = t.current, Os(e), new rr(t);
  }, wo.version = "19.2.8", wo;
}
var Kp;
function Sg() {
  if (Kp) return Is.exports;
  Kp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Is.exports = bg(), Is.exports;
}
var wg = Sg();
const zg = /* @__PURE__ */ Gh(wg);
var oe = xc();
const Mr = /* @__PURE__ */ Gh(oe);
const Qh = (...n) => n.filter((i, l, r) => !!i && i.trim() !== "" && r.indexOf(i) === l).join(" ").trim();
const xg = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const kg = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, l, r) => r ? r.toUpperCase() : l.toLowerCase()
);
const Jp = (n) => {
  const i = kg(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var Tg = {
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
const Eg = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const Ag = oe.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: d,
    iconNode: f,
    ...m
  }, h) => oe.createElement(
    "svg",
    {
      ref: h,
      ...Tg,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: r ? Number(l) * 24 / Number(i) : l,
      className: Qh("lucide", s),
      ...!d && !Eg(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([v, g]) => oe.createElement(v, g)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const Re = (n, i) => {
  const l = oe.forwardRef(
    ({ className: r, ...s }, d) => oe.createElement(Ag, {
      ref: d,
      iconNode: i,
      className: Qh(
        `lucide-${xg(Jp(n))}`,
        `lucide-${n}`,
        r
      ),
      ...s
    })
  );
  return l.displayName = Jp(n), l;
};
const Mg = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Kh = Re("arrow-down-to-line", Mg);
const jg = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Pp = Re("arrow-down", jg);
const Cg = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Og = Re("arrow-up-from-line", Cg);
const Ng = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Wp = Re("arrow-up", Ng);
const Dg = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Rg = Re("battery", Dg);
const Zg = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ug = Re("check", Zg);
const Yg = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Bg = Re("clock-3", Yg);
const Hg = [
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
], Xg = Re("droplets", Hg);
const qg = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], $g = Re("eraser", qg);
const Lg = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Vg = Re("history", Lg);
const Gg = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Fp = Re("house", Gg);
const Qg = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ip = Re("loader-circle", Qg);
const Kg = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Jg = Re("lock-open", Kg);
const Pg = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Jh = Re("lock", Pg);
const Wg = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Fg = Re("map-pin", Wg);
const Ig = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], e0 = Re("pause", Ig);
const t0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Ph = Re("play", t0);
const n0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], eh = Re("plus", n0);
const a0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], kc = Re("rotate-ccw", a0);
const i0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], o0 = Re("scan-line", i0);
const l0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], r0 = Re("sliders-horizontal", l0);
const u0 = [
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
], hc = Re("sparkles", u0);
const s0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], c0 = Re("square", s0);
const d0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], f0 = Re("timer", d0);
const m0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], br = Re("trash-2", m0);
const p0 = [
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
], th = Re("waves", p0);
const h0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], nh = Re("wind", h0);
const v0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Tc = Re("x", v0);
const _0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], y0 = Re("zoom-in", _0);
const g0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], b0 = Re("zoom-out", g0), S0 = "https://github.com/domidyon/roborock-vacuum-map-card/blob/beta/blueprints/script/roborock_vacuum_map_card", w0 = {
  vacuum_then_mop: { file: "vacuum_then_mop.yaml", label: "Vac followed by Mop" },
  assisted_carry_prepare: { file: "assisted_carry_prepare.yaml", label: "Assisted carry: prepare" },
  assisted_carry_start: { file: "assisted_carry_start.yaml", label: "Assisted carry: start" },
  assisted_carry_finish: { file: "assisted_carry_finish.yaml", label: "Assisted carry: finish" }
};
function z0(n) {
  return `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(`${S0}/${n}`)}`;
}
const ah = "python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)", x0 = [
  {
    models: ["roborock.vacuum.a245"],
    label: "Qrevo Curv 2 Flow",
    status: "tested",
    sources: ["Maintainer's daily driver (Home Assistant 2026.10)", "Live device_features from HA diagnostics"],
    // Not derivable: the robot reports is_pure_clean_mop_supported, yet its app has no Mop only.
    mop_only: !1,
    // This model is not in the python-roborock catalog yet, so the card cannot derive
    // these at runtime; they match the robot's own flags (see the device-features fixture).
    mop_routes: { vacuum_and_mop: ["fast", "standard", "deep_plus"] },
    repeat: "set_clean_repeat_times",
    smartplan: !0,
    dock: { auto_empty: !0, mop_wash: !0, hot_water: !0, mop_dry: !0 }
  },
  {
    models: ["roborock.vacuum.a144"],
    label: "Saros 10R",
    status: "community",
    sources: [ah, "Real-device test by @infy1995 (PR #4)"],
    // Not derivable from flags: Mop only availability and the per-mode route split
    // (Vac & Mop offers only Fast/Standard; Mop offers all four). The cleaning count and
    // SmartPlan come from the catalog flags.
    mop_only: !0,
    mop_routes: { vacuum_and_mop: ["fast", "standard"], mop: ["fast", "standard", "deep", "deep_plus"] }
  },
  {
    models: ["roborock.vacuum.a15"],
    label: "S7 / S7+",
    status: "experimental",
    sources: [ah, "Issue #2 (S7+, Home Assistant core integration)"],
    notes: "No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2)."
    // Kept for its status and notes; the cleaning count, SmartPlan and routes come from
    // the catalog flags (no is_clean_count_setting_supported or is_smart_clean_mode_set_supported).
  }
];
function k0(n, i) {
  const l = n.entities?.[i]?.device_id, r = l ? n.devices?.[l] : void 0;
  return r?.model_id ?? r?.model ?? void 0;
}
function Ec(n) {
  return n ? x0.find((i) => i.models.includes(n)) : void 0;
}
function T0(n) {
  const i = (r) => n.has(r);
  if (!i("is_clean_route_setting_supported")) return [];
  if (i("is_none_pure_clean_mop_with_max_plus")) return ["fast", "standard"];
  const l = ["standard"];
  return i("is_clean_efficiency_supported") || l.push("deep"), i("is_careful_slow_mop_supported") && l.push("deep_plus"), i("is_clean_route_fast_mode_supported") && l.push("fast"), l;
}
function E0(n) {
  const i = (l) => n.has(l);
  return {
    // Without the cleaning-count setting the app sends the repeat with the segments (issue #2).
    repeat: i("is_clean_count_setting_supported") ? "set_clean_repeat_times" : "app_segment_clean",
    smartplan: i("is_smart_clean_mode_set_supported"),
    mop_routes: T0(n),
    vac_then_mop: i("is_clean_then_mop_mode_supported"),
    multi_floor: i("is_multi_floor_supported"),
    dock: {
      auto_empty: i("is_dust_collection_setting_supported"),
      mop_wash: i("is_back_charge_auto_wash_supported") || i("is_wash_then_charge_cmd_supported"),
      hot_water: i("is_hot_wash_towel_supported"),
      mop_dry: i("is_supported_drying")
    }
  };
}
const A0 = /* @__PURE__ */ JSON.parse('[{"model":"roborock.vacuum.a01","names":["E4"]},{"model":"roborock.vacuum.a05","family":"RubySLite"},{"model":"roborock.vacuum.a08","names":["S6 Pure"],"family":"RubySC"},{"model":"roborock.vacuum.a09","family":"TanosV"},{"model":"roborock.vacuum.a10","names":["S6 MaxV"],"family":"TanosV","protocol":"1.0","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.a100","family":"PearlS"},{"model":"roborock.vacuum.a101","names":["Qrevo Pro"],"family":"PearlS"},{"model":"roborock.vacuum.a103","family":"PearlC"},{"model":"roborock.vacuum.a104","names":["Qrevo S"],"family":"PearlC"},{"model":"roborock.vacuum.a11","names":["T7"],"family":"TanosE"},{"model":"roborock.vacuum.a116","family":"PearlPlusS"},{"model":"roborock.vacuum.a117","names":["Qrevo Master"],"family":"PearlPlusS","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a122","family":"PearlSLite"},{"model":"roborock.vacuum.a123","family":"PearlSLite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_back_charge_auto_wash_supported"]},{"model":"roborock.vacuum.a124","family":"UltronSE"},{"model":"roborock.vacuum.a125","names":["Q5 Max+"],"family":"UltronSE","protocol":"1.0","features":["is_clean_route_setting_supported","is_none_pure_clean_mop_with_max_plus","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a134","family":"Vivian"},{"model":"roborock.vacuum.a135","names":["Qrevo Curv"],"family":"Vivian"},{"model":"roborock.vacuum.a136","family":"PearlPlusS"},{"model":"roborock.vacuum.a139","family":"UltronSE"},{"model":"roborock.vacuum.a14","names":["T7S"],"family":"TanosS"},{"model":"roborock.vacuum.a140","family":"UltronSE"},{"model":"roborock.vacuum.a143","family":"CoralPro"},{"model":"roborock.vacuum.a144","names":["Saros 10R"],"family":"CoralPro","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a146","family":"Verdelite"},{"model":"roborock.vacuum.a147","names":["Saros 10"],"family":"Verdelite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a15","names":["S7"],"family":"TanosS","protocol":"1.0","features":["is_clean_route_setting_supported","is_careful_slow_mop_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_multi_floor_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a155","family":"Vivian"},{"model":"roborock.vacuum.a156","family":"Vivian"},{"model":"roborock.vacuum.a158","family":"VivianC"},{"model":"roborock.vacuum.a159","family":"VivianC"},{"model":"roborock.vacuum.a167","family":"PearlE"},{"model":"roborock.vacuum.a168","family":"PearlE"},{"model":"roborock.vacuum.a169","family":"PearlELite"},{"model":"roborock.vacuum.a170","family":"PearlELite"},{"model":"roborock.vacuum.a187","names":["Qrevo Edge Series"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a19","names":["S4 Max"],"family":"RubySE"},{"model":"roborock.vacuum.a20","family":"Coral"},{"model":"roborock.vacuum.a21","family":"Coral"},{"model":"roborock.vacuum.a23","names":["T7S+"],"family":"TanosSPlus"},{"model":"roborock.vacuum.a24","family":"TanosSPlus"},{"model":"roborock.vacuum.a26","names":["G10S Pro"],"family":"TopazSV"},{"model":"roborock.vacuum.a27","names":["S7 MaxV"],"family":"TopazSV","protocol":"1.0"},{"model":"roborock.vacuum.a288","names":["Saros 20"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a29","names":["G10"],"family":"TopazS"},{"model":"roborock.vacuum.a30","family":"TopazS"},{"model":"roborock.vacuum.a306","names":["P30 Pro"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a33","family":"TanosSE"},{"model":"roborock.vacuum.a34","names":["Q5"],"family":"TanosSE"},{"model":"roborock.vacuum.a37","family":"TanosSLite"},{"model":"roborock.vacuum.a38","names":["Q7 Max"],"family":"TanosSLite"},{"model":"roborock.vacuum.a39","family":"TanosSC"},{"model":"roborock.vacuum.a40","names":["Q7","Q7+"],"family":"TanosSC"},{"model":"roborock.vacuum.a46","names":["G10S"],"family":"TopazSPlus"},{"model":"roborock.vacuum.a47","family":"TopazSPlus"},{"model":"roborock.vacuum.a50","family":"Ultron"},{"model":"roborock.vacuum.a51","names":["S8"],"family":"Ultron"},{"model":"roborock.vacuum.a52","family":"TanosSMax"},{"model":"roborock.vacuum.a62","names":["S7 Pro Ultra"],"family":"TopazSPower"},{"model":"roborock.vacuum.a64","family":"TopazSC"},{"model":"roborock.vacuum.a65","names":["S7 MaxV Ultra"],"family":"TopazSC"},{"model":"roborock.vacuum.a66","family":"TopazSPlus"},{"model":"roborock.vacuum.a68","family":"UltronSPlus"},{"model":"roborock.vacuum.a69","family":"UltronSPlus"},{"model":"roborock.vacuum.a70","names":["S8 Pro Ultra"],"family":"UltronSPlus"},{"model":"roborock.vacuum.a72","names":["Q5 Pro"],"family":"UltronE"},{"model":"roborock.vacuum.a73","names":["Q8 Max"],"family":"UltronLite"},{"model":"roborock.vacuum.a74","family":"Pearl"},{"model":"roborock.vacuum.a75","names":["P10"],"family":"Pearl","protocol":"1.0","features":["is_clean_count_setting_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a76","family":"TopazS"},{"model":"roborock.vacuum.a84","family":"UltronE"},{"model":"roborock.vacuum.a85","family":"UltronLite"},{"model":"roborock.vacuum.a86","family":"PearlPlus"},{"model":"roborock.vacuum.a87","names":["Qrevo MaxV"],"family":"PearlPlus","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a94","family":"UltronSC"},{"model":"roborock.vacuum.a95","family":"UltronSC"},{"model":"roborock.vacuum.a96","family":"UltronSV"},{"model":"roborock.vacuum.a97","names":["S8 MaxV Ultra"],"family":"UltronSV"},{"model":"roborock.vacuum.c1","names":["C1"]},{"model":"roborock.vacuum.e2","names":["E2"]},{"model":"roborock.vacuum.m1s","names":["1S"]},{"model":"roborock.vacuum.p5","family":"RubySC"},{"model":"roborock.vacuum.p6","family":"RubySLite"},{"model":"roborock.vacuum.s4","names":["S4"],"family":"RubyPlus"},{"model":"roborock.vacuum.s5","names":["S5"]},{"model":"roborock.vacuum.s5e","names":["S5 Max"],"family":"RubySLite","protocol":"1.0","features":["is_collect_dust_mode_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.s6","names":["S6"],"family":"Tanos"},{"model":"roborock.vacuum.sc01","names":["Q7 Series"],"protocol":"B01","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.sc05","names":["Q7 Series"],"protocol":"B01"},{"model":"roborock.vacuum.ss07","names":["Q10"],"protocol":"B01"},{"model":"roborock.vacuum.t4","family":"RubyPlus"},{"model":"roborock.vacuum.t6","names":["T6"],"family":"Tanos"},{"model":"roborock.vacuum.t7","family":"TanosE"},{"model":"roborock.vacuum.t7p","family":"TanosV"},{"model":"roborock.wetdryvac.a107","names":["Dyad Air"]},{"model":"roborock.wetdryvac.a56","names":["Dyad Pro"]},{"model":"roborock.wetdryvac.a83","names":["Dyad Pro Combo"]},{"model":"roborock.wm.a102","names":["Zeo One"],"protocol":"A01","features":["is_collect_dust_mode_supported"]}]'), M0 = {
  models: A0
}, j0 = M0.models;
function jr(n) {
  return n ? j0.find((i) => i.model === n) : void 0;
}
function ih(n) {
  return Ec(n)?.label ?? jr(n)?.names?.join(" / ");
}
function C0(n, i) {
  const l = Ec(n), r = jr(n)?.features, s = [];
  r && s.push(["catalog", new Set(r)]);
  const d = s[0] ? { source: s[0][0], caps: E0(s[0][1]) } : void 0, f = { sources: {}, profile: l }, m = (v, g, b) => {
    g !== void 0 ? (f[v] = g, f.sources[v] = "profile") : b !== void 0 && d && (f[v] = b, f.sources[v] = d.source);
  };
  m("repeat", l?.repeat, d?.caps.repeat), m("smartplan", l?.smartplan, d?.caps.smartplan), m("mop_only", l?.mop_only);
  const h = d?.caps.mop_routes;
  return m("mop_routes", l?.mop_routes, h && h.length > 0 ? { vacuum_and_mop: h, mop: h } : void 0), f;
}
const ic = [2026, 8];
function O0(n) {
  if (!n) return !1;
  const [i, l] = n.split(".").map(Number);
  return !Number.isFinite(i) || !Number.isFinite(l) ? !1 : i < ic[0] || i === ic[0] && l < ic[1];
}
function N0(n) {
  const i = jr(n.model), l = n.protocol ?? i?.protocol, r = [];
  return n.model && !n.model.startsWith("roborock.vacuum.") && r.push("not_a_robot_vacuum"), l && l !== "1.0" && r.push("protocol_unsupported"), O0(n.haVersion) && r.push("home_assistant_too_old"), r.length > 0 ? { verdict: "unsupported", reasons: r, name: ih(n.model), protocol: l } : (n.hasCustomMap === !1 && r.push("custom_map_missing"), !Ec(n.model) && !i?.features && !n.hasDeviceFlags && r.push("unknown_model"), {
    verdict: r.length > 0 ? "limited" : "supported",
    reasons: r,
    name: ih(n.model),
    protocol: l
  });
}
const sr = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function cr(n, i) {
  if (!i) return [];
  const l = n.states[i];
  return !l || l.state === "unavailable" ? [] : Array.isArray(l.attributes.options) ? l.attributes.options.map(String) : [];
}
function Ac(n, i) {
  const l = n.states[i.entity], r = Number(l?.attributes.supported_features ?? 0), s = Array.isArray(l?.attributes.fan_speed_list) ? l.attributes.fan_speed_list.map(String) : [], d = cr(n, i.entities?.map_select), f = cr(n, i.entities?.cleaning_mode), m = cr(n, i.entities?.mop_mode), h = cr(n, i.entities?.mop_intensity), v = k0(n, i.entity), g = C0(v), b = g.profile, x = s.includes("smart_mode") && m.includes("smart_mode"), T = x || h.some((j) => ["slight", "moderate", "extreme"].includes(j)) ? "set_clean_repeat_times" : "app_segment_clean";
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
    hasSmartPlan: i.enable_smartplan ?? g.smartplan ?? x,
    roomRepeatStrategy: i.cleaning_count_command ?? g.repeat ?? T,
    mopRoutes: i.mop_routes ?? g.mop_routes,
    profile: b ? { label: b.label, status: b.status } : void 0,
    model: v
  };
}
function D0(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function R0(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
var oh;
function Z(n, i, l) {
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
    const v = f.prototype, g = Object.keys(v);
    for (let b = 0; b < g.length; b++) {
      const x = g[b];
      x in m || (m[x] = v[x].bind(m));
    }
  }
  const s = l?.Parent ?? Object;
  class d extends s {
  }
  Object.defineProperty(d, "name", { value: n });
  function f(m) {
    var h;
    const v = l?.Parent ? new d() : this;
    r(v, m), (h = v._zod).deferred ?? (h.deferred = []);
    for (const g of v._zod.deferred)
      g();
    return v;
  }
  return Object.defineProperty(f, "init", { value: r }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => l?.Parent && m instanceof l.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class bi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Wh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(oh = globalThis).__zod_globalConfig ?? (oh.__zod_globalConfig = {});
const Mc = globalThis.__zod_globalConfig;
function Ea(n) {
  return Mc;
}
function Fh(n) {
  const i = Object.values(n).filter((r) => typeof r == "number");
  return Object.entries(n).filter(([r, s]) => i.indexOf(+r) === -1).map(([r, s]) => s);
}
function vc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function jc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function Cc(n) {
  return n == null;
}
function Oc(n) {
  const i = n.startsWith("^") ? 1 : 0, l = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, l);
}
function Z0(n, i) {
  const l = n / i, r = Math.round(l), s = Number.EPSILON * Math.max(Math.abs(l), 1);
  return Math.abs(l - r) < s ? 0 : l - r;
}
const lh = /* @__PURE__ */ Symbol("evaluating");
function Xe(n, i, l) {
  let r;
  Object.defineProperty(n, i, {
    get() {
      if (r !== lh)
        return r === void 0 && (r = lh, r = l()), r;
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
function Ma(n, i, l) {
  Object.defineProperty(n, i, {
    value: l,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function In(...n) {
  const i = {};
  for (const l of n) {
    const r = Object.getOwnPropertyDescriptors(l);
    Object.assign(i, r);
  }
  return Object.defineProperties({}, i);
}
function rh(n) {
  return JSON.stringify(n);
}
function U0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ih = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Sr(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const Y0 = /* @__PURE__ */ jc(() => {
  if (Mc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Oo(n) {
  if (Sr(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const l = i.prototype;
  return !(Sr(l) === !1 || Object.prototype.hasOwnProperty.call(l, "isPrototypeOf") === !1);
}
function ev(n) {
  return Oo(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const B0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function wi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ea(n, i, l) {
  const r = new n._zod.constr(i ?? n._zod.def);
  return (!i || l?.parent) && (r._zod.parent = n), r;
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
function H0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const X0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function q0(n, i) {
  const l = n._zod.def, r = l.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = In(n._zod.def, {
    get shape() {
      const f = {};
      for (const m in i) {
        if (!(m in l.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (f[m] = l.shape[m]);
      }
      return Ma(this, "shape", f), f;
    },
    checks: []
  });
  return ea(n, d);
}
function $0(n, i) {
  const l = n._zod.def, r = l.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = In(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in l.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete f[m];
      }
      return Ma(this, "shape", f), f;
    },
    checks: []
  });
  return ea(n, d);
}
function L0(n, i) {
  if (!Oo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const l = n._zod.def.checks;
  if (l && l.length > 0) {
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
function V0(n, i) {
  if (!Oo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const l = In(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i };
      return Ma(this, "shape", r), r;
    }
  });
  return ea(n, l);
}
function G0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const l = In(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...i._zod.def.shape };
      return Ma(this, "shape", r), r;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return ea(n, l);
}
function Q0(n, i, l) {
  const s = i._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const f = In(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, h = { ...m };
      if (l)
        for (const v in l) {
          if (!(v in m))
            throw new Error(`Unrecognized key: "${v}"`);
          l[v] && (h[v] = n ? new n({
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
function K0(n, i, l) {
  const r = In(i._zod.def, {
    get shape() {
      const s = i._zod.def.shape, d = { ...s };
      if (l)
        for (const f in l) {
          if (!(f in d))
            throw new Error(`Unrecognized key: "${f}"`);
          l[f] && (d[f] = new n({
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
function _i(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let l = i; l < n.issues.length; l++)
    if (n.issues[l]?.continue !== !0)
      return !0;
  return !1;
}
function J0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let l = i; l < n.issues.length; l++)
    if (n.issues[l]?.continue === !1)
      return !0;
  return !1;
}
function tv(n, i) {
  return i.map((l) => {
    var r;
    return (r = l).path ?? (r.path = []), l.path.unshift(n), l;
  });
}
function dr(n) {
  return typeof n == "string" ? n : n?.message;
}
function Aa(n, i, l) {
  const r = n.message ? n.message : dr(n.inst?._zod.def?.error?.(n)) ?? dr(i?.error?.(n)) ?? dr(l.customError?.(n)) ?? dr(l.localeError?.(n)) ?? "Invalid input", { inst: s, continue: d, input: f, ...m } = n;
  return m.path ?? (m.path = []), m.message = r, i?.reportInput && (m.input = f), m;
}
function Nc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function No(...n) {
  const [i, l, r] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: l,
    inst: r
  } : { ...i };
}
const nv = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, vc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, av = Z("$ZodError", nv), iv = Z("$ZodError", nv, { Parent: Error });
function P0(n, i = (l) => l.message) {
  const l = {}, r = [];
  for (const s of n.issues)
    s.path.length > 0 ? (l[s.path[0]] = l[s.path[0]] || [], l[s.path[0]].push(i(s))) : r.push(i(s));
  return { formErrors: r, fieldErrors: l };
}
function W0(n, i = (l) => l.message) {
  const l = { _errors: [] }, r = (s, d = []) => {
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
          l._errors.push(i(f));
        else {
          let h = l, v = 0;
          for (; v < m.length; ) {
            const g = m[v];
            v === m.length - 1 ? (h[g] = h[g] || { _errors: [] }, h[g]._errors.push(i(f))) : h[g] = h[g] || { _errors: [] }, h = h[g], v++;
          }
        }
      }
  };
  return r(n), l;
}
const Dc = (n) => (i, l, r, s) => {
  const d = r ? { ...r, async: !1 } : { async: !1 }, f = i._zod.run({ value: l, issues: [] }, d);
  if (f instanceof Promise)
    throw new bi();
  if (f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Aa(h, d, Ea())));
    throw Ih(m, s?.callee), m;
  }
  return f.value;
}, Rc = (n) => async (i, l, r, s) => {
  const d = r ? { ...r, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: l, issues: [] }, d);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Aa(h, d, Ea())));
    throw Ih(m, s?.callee), m;
  }
  return f.value;
}, Cr = (n) => (i, l, r) => {
  const s = r ? { ...r, async: !1 } : { async: !1 }, d = i._zod.run({ value: l, issues: [] }, s);
  if (d instanceof Promise)
    throw new bi();
  return d.issues.length ? {
    success: !1,
    error: new (n ?? av)(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, F0 = /* @__PURE__ */ Cr(iv), Or = (n) => async (i, l, r) => {
  const s = r ? { ...r, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: l, issues: [] }, s);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new n(d.issues.map((f) => Aa(f, s, Ea())))
  } : { success: !0, data: d.value };
}, I0 = /* @__PURE__ */ Or(iv), eb = (n) => (i, l, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Dc(n)(i, l, s);
}, tb = (n) => (i, l, r) => Dc(n)(i, l, r), nb = (n) => async (i, l, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Rc(n)(i, l, s);
}, ab = (n) => async (i, l, r) => Rc(n)(i, l, r), ib = (n) => (i, l, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Cr(n)(i, l, s);
}, ob = (n) => (i, l, r) => Cr(n)(i, l, r), lb = (n) => async (i, l, r) => {
  const s = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Or(n)(i, l, s);
}, rb = (n) => async (i, l, r) => Or(n)(i, l, r), ub = /^[cC][0-9a-z]{6,}$/, sb = /^[0-9a-z]+$/, cb = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, db = /^[0-9a-vA-V]{20}$/, fb = /^[A-Za-z0-9]{27}$/, mb = /^[a-zA-Z0-9_-]{21}$/, pb = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, hb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uh = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, vb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, _b = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function yb() {
  return new RegExp(_b, "u");
}
const gb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, bb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Sb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, wb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, zb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ov = /^[A-Za-z0-9_-]*$/, xb = /^https?$/, kb = /^\+[1-9]\d{6,14}$/, lv = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Tb = /* @__PURE__ */ new RegExp(`^${lv}$`);
function rv(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Eb(n) {
  return new RegExp(`^${rv(n)}$`);
}
function Ab(n) {
  const i = rv({ precision: n.precision }), l = ["Z"];
  n.local && l.push(""), n.offset && l.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${i}(?:${l.join("|")})`;
  return new RegExp(`^${lv}T(?:${r})$`);
}
const Mb = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, jb = /^-?\d+$/, Cb = /^-?\d+(?:\.\d+)?$/, Ob = /^(?:true|false)$/i, Nb = /^[^A-Z]*$/, Db = /^[^a-z]*$/, Mt = /* @__PURE__ */ Z("$ZodCheck", (n, i) => {
  var l;
  n._zod ?? (n._zod = {}), n._zod.def = i, (l = n._zod).onattach ?? (l.onattach = []);
}), uv = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, sv = /* @__PURE__ */ Z("$ZodCheckLessThan", (n, i) => {
  Mt.init(n, i);
  const l = uv[typeof i.value];
  n._zod.onattach.push((r) => {
    const s = r._zod.bag, d = (i.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < d && (i.inclusive ? s.maximum = i.value : s.exclusiveMaximum = i.value);
  }), n._zod.check = (r) => {
    (i.inclusive ? r.value <= i.value : r.value < i.value) || r.issues.push({
      origin: l,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: r.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), cv = /* @__PURE__ */ Z("$ZodCheckGreaterThan", (n, i) => {
  Mt.init(n, i);
  const l = uv[typeof i.value];
  n._zod.onattach.push((r) => {
    const s = r._zod.bag, d = (i.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > d && (i.inclusive ? s.minimum = i.value : s.exclusiveMinimum = i.value);
  }), n._zod.check = (r) => {
    (i.inclusive ? r.value >= i.value : r.value > i.value) || r.issues.push({
      origin: l,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: r.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), Rb = /* @__PURE__ */ Z("$ZodCheckMultipleOf", (n, i) => {
  Mt.init(n, i), n._zod.onattach.push((l) => {
    var r;
    (r = l._zod.bag).multipleOf ?? (r.multipleOf = i.value);
  }), n._zod.check = (l) => {
    if (typeof l.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof l.value == "bigint" ? l.value % i.value === BigInt(0) : Z0(l.value, i.value) === 0) || l.issues.push({
      origin: typeof l.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Zb = /* @__PURE__ */ Z("$ZodCheckNumberFormat", (n, i) => {
  Mt.init(n, i), i.format = i.format || "float64";
  const l = i.format?.includes("int"), r = l ? "int" : "number", [s, d] = X0[i.format];
  n._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = d, l && (m.pattern = jb);
  }), n._zod.check = (f) => {
    const m = f.value;
    if (l) {
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
}), Ub = /* @__PURE__ */ Z("$ZodCheckMaxLength", (n, i) => {
  var l;
  Mt.init(n, i), (l = n._zod.def).when ?? (l.when = (r) => {
    const s = r.value;
    return !Cc(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < s && (r._zod.bag.maximum = i.maximum);
  }), n._zod.check = (r) => {
    const s = r.value;
    if (s.length <= i.maximum)
      return;
    const f = Nc(s);
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
}), Yb = /* @__PURE__ */ Z("$ZodCheckMinLength", (n, i) => {
  var l;
  Mt.init(n, i), (l = n._zod.def).when ?? (l.when = (r) => {
    const s = r.value;
    return !Cc(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > s && (r._zod.bag.minimum = i.minimum);
  }), n._zod.check = (r) => {
    const s = r.value;
    if (s.length >= i.minimum)
      return;
    const f = Nc(s);
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
}), Bb = /* @__PURE__ */ Z("$ZodCheckLengthEquals", (n, i) => {
  var l;
  Mt.init(n, i), (l = n._zod.def).when ?? (l.when = (r) => {
    const s = r.value;
    return !Cc(s) && s.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.minimum = i.length, s.maximum = i.length, s.length = i.length;
  }), n._zod.check = (r) => {
    const s = r.value, d = s.length;
    if (d === i.length)
      return;
    const f = Nc(s), m = d > i.length;
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
}), Nr = /* @__PURE__ */ Z("$ZodCheckStringFormat", (n, i) => {
  var l, r;
  Mt.init(n, i), n._zod.onattach.push((s) => {
    const d = s._zod.bag;
    d.format = i.format, i.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(i.pattern));
  }), i.pattern ? (l = n._zod).check ?? (l.check = (s) => {
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
}), Hb = /* @__PURE__ */ Z("$ZodCheckRegex", (n, i) => {
  Nr.init(n, i), n._zod.check = (l) => {
    i.pattern.lastIndex = 0, !i.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: l.value,
      pattern: i.pattern.toString(),
      inst: n,
      continue: !i.abort
    });
  };
}), Xb = /* @__PURE__ */ Z("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = Nb), Nr.init(n, i);
}), qb = /* @__PURE__ */ Z("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = Db), Nr.init(n, i);
}), $b = /* @__PURE__ */ Z("$ZodCheckIncludes", (n, i) => {
  Mt.init(n, i);
  const l = wi(i.includes), r = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${l}` : l);
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
}), Lb = /* @__PURE__ */ Z("$ZodCheckStartsWith", (n, i) => {
  Mt.init(n, i);
  const l = new RegExp(`^${wi(i.prefix)}.*`);
  i.pattern ?? (i.pattern = l), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(l);
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
}), Vb = /* @__PURE__ */ Z("$ZodCheckEndsWith", (n, i) => {
  Mt.init(n, i);
  const l = new RegExp(`.*${wi(i.suffix)}$`);
  i.pattern ?? (i.pattern = l), n._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(l);
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
}), Gb = /* @__PURE__ */ Z("$ZodCheckOverwrite", (n, i) => {
  Mt.init(n, i), n._zod.check = (l) => {
    l.value = i.tx(l.value);
  };
});
class Qb {
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
    const i = Function, l = this?.args, s = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new i(...l, s.join(`
`));
  }
}
const Kb = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ Z("$ZodType", (n, i) => {
  var l;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = Kb;
  const r = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && r.unshift(n);
  for (const s of r)
    for (const d of s._zod.onattach)
      d(n);
  if (r.length === 0)
    (l = n._zod).deferred ?? (l.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const s = (f, m, h) => {
      let v = _i(f), g;
      for (const b of m) {
        if (b._zod.def.when) {
          if (J0(f) || !b._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const x = f.issues.length, T = b._zod.check(f);
        if (T instanceof Promise && h?.async === !1)
          throw new bi();
        if (g || T instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await T, f.issues.length !== x && (v || (v = _i(f, x)));
          });
        else {
          if (f.issues.length === x)
            continue;
          v || (v = _i(f, x));
        }
      }
      return g ? g.then(() => f) : f;
    }, d = (f, m, h) => {
      if (_i(f))
        return f.aborted = !0, f;
      const v = s(m, r, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new bi();
        return v.then((g) => n._zod.parse(g, h));
      }
      return n._zod.parse(v, h);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const v = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((g) => d(g, f, m)) : d(v, f, m);
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
        const d = F0(n, s);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return I0(n, s).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Zc = /* @__PURE__ */ Z("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Mb(n._zod.bag), n._zod.parse = (l, r) => {
    if (i.coerce)
      try {
        l.value = String(l.value);
      } catch {
      }
    return typeof l.value == "string" || l.issues.push({
      expected: "string",
      code: "invalid_type",
      input: l.value,
      inst: n
    }), l;
  };
}), Ke = /* @__PURE__ */ Z("$ZodStringFormat", (n, i) => {
  Nr.init(n, i), Zc.init(n, i);
}), Jb = /* @__PURE__ */ Z("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = hb), Ke.init(n, i);
}), Pb = /* @__PURE__ */ Z("$ZodUUID", (n, i) => {
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
    i.pattern ?? (i.pattern = uh(r));
  } else
    i.pattern ?? (i.pattern = uh());
  Ke.init(n, i);
}), Wb = /* @__PURE__ */ Z("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = vb), Ke.init(n, i);
}), Fb = /* @__PURE__ */ Z("$ZodURL", (n, i) => {
  Ke.init(n, i), n._zod.check = (l) => {
    try {
      const r = l.value.trim();
      if (!i.normalize && i.protocol?.source === xb.source && !/^https?:\/\//i.test(r)) {
        l.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: l.value,
          inst: n,
          continue: !i.abort
        });
        return;
      }
      const s = new URL(r);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(s.hostname) || l.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: l.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || l.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: l.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? l.value = s.href : l.value = r;
      return;
    } catch {
      l.issues.push({
        code: "invalid_format",
        format: "url",
        input: l.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), Ib = /* @__PURE__ */ Z("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = yb()), Ke.init(n, i);
}), e1 = /* @__PURE__ */ Z("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = mb), Ke.init(n, i);
}), t1 = /* @__PURE__ */ Z("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = ub), Ke.init(n, i);
}), n1 = /* @__PURE__ */ Z("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = sb), Ke.init(n, i);
}), a1 = /* @__PURE__ */ Z("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = cb), Ke.init(n, i);
}), i1 = /* @__PURE__ */ Z("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = db), Ke.init(n, i);
}), o1 = /* @__PURE__ */ Z("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = fb), Ke.init(n, i);
}), l1 = /* @__PURE__ */ Z("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = Ab(i)), Ke.init(n, i);
}), r1 = /* @__PURE__ */ Z("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = Tb), Ke.init(n, i);
}), u1 = /* @__PURE__ */ Z("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = Eb(i)), Ke.init(n, i);
}), s1 = /* @__PURE__ */ Z("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = pb), Ke.init(n, i);
}), c1 = /* @__PURE__ */ Z("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = gb), Ke.init(n, i), n._zod.bag.format = "ipv4";
}), d1 = /* @__PURE__ */ Z("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = bb), Ke.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (l) => {
    try {
      new URL(`http://[${l.value}]`);
    } catch {
      l.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: l.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), f1 = /* @__PURE__ */ Z("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = Sb), Ke.init(n, i);
}), m1 = /* @__PURE__ */ Z("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = wb), Ke.init(n, i), n._zod.check = (l) => {
    const r = l.value.split("/");
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
      l.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: l.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
});
function dv(n) {
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
const p1 = /* @__PURE__ */ Z("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = zb), Ke.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (l) => {
    dv(l.value) || l.issues.push({
      code: "invalid_format",
      format: "base64",
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function h1(n) {
  if (!ov.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), l = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return dv(l);
}
const v1 = /* @__PURE__ */ Z("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = ov), Ke.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (l) => {
    h1(l.value) || l.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), _1 = /* @__PURE__ */ Z("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = kb), Ke.init(n, i);
});
function y1(n, i = null) {
  try {
    const l = n.split(".");
    if (l.length !== 3)
      return !1;
    const [r] = l;
    if (!r)
      return !1;
    const s = JSON.parse(atob(r));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const g1 = /* @__PURE__ */ Z("$ZodJWT", (n, i) => {
  Ke.init(n, i), n._zod.check = (l) => {
    y1(l.value, i.alg) || l.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: l.value,
      inst: n,
      continue: !i.abort
    });
  };
}), fv = /* @__PURE__ */ Z("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? Cb, n._zod.parse = (l, r) => {
    if (i.coerce)
      try {
        l.value = Number(l.value);
      } catch {
      }
    const s = l.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return l;
    const d = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return l.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: n,
      ...d ? { received: d } : {}
    }), l;
  };
}), b1 = /* @__PURE__ */ Z("$ZodNumberFormat", (n, i) => {
  Zb.init(n, i), fv.init(n, i);
}), S1 = /* @__PURE__ */ Z("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = Ob, n._zod.parse = (l, r) => {
    if (i.coerce)
      try {
        l.value = !!l.value;
      } catch {
      }
    const s = l.value;
    return typeof s == "boolean" || l.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: n
    }), l;
  };
}), w1 = /* @__PURE__ */ Z("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (l) => l;
}), z1 = /* @__PURE__ */ Z("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (l, r) => (l.issues.push({
    expected: "never",
    code: "invalid_type",
    input: l.value,
    inst: n
  }), l);
});
function sh(n, i, l) {
  n.issues.length && i.issues.push(...tv(l, n.issues)), i.value[l] = n.value;
}
const x1 = /* @__PURE__ */ Z("$ZodArray", (n, i) => {
  Fe.init(n, i), n._zod.parse = (l, r) => {
    const s = l.value;
    if (!Array.isArray(s))
      return l.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: n
      }), l;
    l.value = Array(s.length);
    const d = [];
    for (let f = 0; f < s.length; f++) {
      const m = s[f], h = i.element._zod.run({
        value: m,
        issues: []
      }, r);
      h instanceof Promise ? d.push(h.then((v) => sh(v, l, f))) : sh(h, l, f);
    }
    return d.length ? Promise.all(d).then(() => l) : l;
  };
});
function wr(n, i, l, r, s, d) {
  const f = l in r;
  if (n.issues.length) {
    if (s && d && !f)
      return;
    i.issues.push(...tv(l, n.issues));
  }
  if (!f && !s) {
    n.issues.length || i.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [l]
    });
    return;
  }
  n.value === void 0 ? f && (i.value[l] = void 0) : i.value[l] = n.value;
}
function mv(n) {
  const i = Object.keys(n.shape);
  for (const r of i)
    if (!n.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const l = H0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(l)
  };
}
function pv(n, i, l, r, s, d) {
  const f = [], m = s.keySet, h = s.catchall._zod, v = h.def.type, g = h.optin === "optional", b = h.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || m.has(x))
      continue;
    if (v === "never") {
      f.push(x);
      continue;
    }
    const T = h.run({ value: i[x], issues: [] }, r);
    T instanceof Promise ? n.push(T.then((j) => wr(j, l, x, i, g, b))) : wr(T, l, x, i, g, b);
  }
  return f.length && l.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: i,
    inst: d
  }), n.length ? Promise.all(n).then(() => l) : l;
}
const k1 = /* @__PURE__ */ Z("$ZodObject", (n, i) => {
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
  const r = jc(() => mv(i));
  Xe(n._zod, "propValues", () => {
    const m = i.shape, h = {};
    for (const v in m) {
      const g = m[v]._zod;
      if (g.values) {
        h[v] ?? (h[v] = /* @__PURE__ */ new Set());
        for (const b of g.values)
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
    const g = [], b = f.shape;
    for (const x of f.keys) {
      const T = b[x], j = T._zod.optin === "optional", Q = T._zod.optout === "optional", $ = T._zod.run({ value: v[x], issues: [] }, h);
      $ instanceof Promise ? g.push($.then((K) => wr(K, m, x, v, j, Q))) : wr($, m, x, v, j, Q);
    }
    return d ? pv(g, v, m, h, r.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), T1 = /* @__PURE__ */ Z("$ZodObjectJIT", (n, i) => {
  k1.init(n, i);
  const l = n._zod.parse, r = jc(() => mv(i)), s = (x) => {
    const T = new Qb(["shape", "payload", "ctx"]), j = r.value, Q = (L) => {
      const G = rh(L);
      return `shape[${G}]._zod.run({ value: input[${G}], issues: [] }, ctx)`;
    };
    T.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let K = 0;
    for (const L of j.keys)
      $[L] = `key_${K++}`;
    T.write("const newResult = {};");
    for (const L of j.keys) {
      const G = $[L], q = rh(L), I = x[L], B = I?._zod?.optin === "optional", V = I?._zod?.optout === "optional";
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
  const f = Sr, m = !Mc.jitless, v = m && Y0.value, g = i.catchall;
  let b;
  n._zod.parse = (x, T) => {
    b ?? (b = r.value);
    const j = x.value;
    return f(j) ? m && v && T?.async === !1 && T.jitless !== !0 ? (d || (d = s(i.shape)), x = d(x, T), g ? pv([], j, x, T, b, n) : x) : l(x, T) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: n
    }), x);
  };
});
function ch(n, i, l, r) {
  for (const d of n)
    if (d.issues.length === 0)
      return i.value = d.value, i;
  const s = n.filter((d) => !_i(d));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: l,
    errors: n.map((d) => d.issues.map((f) => Aa(f, r, Ea())))
  }), i);
}
const E1 = /* @__PURE__ */ Z("$ZodUnion", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Xe(n._zod, "optout", () => i.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Xe(n._zod, "values", () => {
    if (i.options.every((r) => r._zod.values))
      return new Set(i.options.flatMap((r) => Array.from(r._zod.values)));
  }), Xe(n._zod, "pattern", () => {
    if (i.options.every((r) => r._zod.pattern)) {
      const r = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => Oc(s.source)).join("|")})$`);
    }
  });
  const l = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (r, s) => {
    if (l)
      return l(r, s);
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
    return d ? Promise.all(f).then((m) => ch(m, r, n, s)) : ch(f, r, n, s);
  };
}), A1 = /* @__PURE__ */ Z("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (l, r) => {
    const s = l.value, d = i.left._zod.run({ value: s, issues: [] }, r), f = i.right._zod.run({ value: s, issues: [] }, r);
    return d instanceof Promise || f instanceof Promise ? Promise.all([d, f]).then(([h, v]) => dh(l, h, v)) : dh(l, d, f);
  };
});
function _c(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (Oo(n) && Oo(i)) {
    const l = Object.keys(i), r = Object.keys(n).filter((d) => l.indexOf(d) !== -1), s = { ...n, ...i };
    for (const d of r) {
      const f = _c(n[d], i[d]);
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
    const l = [];
    for (let r = 0; r < n.length; r++) {
      const s = n[r], d = i[r], f = _c(s, d);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...f.mergeErrorPath]
        };
      l.push(f.data);
    }
    return { valid: !0, data: l };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function dh(n, i, l) {
  const r = /* @__PURE__ */ new Map();
  let s;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const h of m.keys)
        r.has(h) || r.set(h, {}), r.get(h).l = !0;
    } else
      n.issues.push(m);
  for (const m of l.issues)
    if (m.code === "unrecognized_keys")
      for (const h of m.keys)
        r.has(h) || r.set(h, {}), r.get(h).r = !0;
    else
      n.issues.push(m);
  const d = [...r].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && s && n.issues.push({ ...s, keys: d }), _i(n))
    return n;
  const f = _c(i.value, l.value);
  if (!f.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
  return n.value = f.data, n;
}
const M1 = /* @__PURE__ */ Z("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const l = Fh(i.entries), r = new Set(l);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${l.filter((s) => B0.has(typeof s)).map((s) => typeof s == "string" ? wi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, d) => {
    const f = s.value;
    return r.has(f) || s.issues.push({
      code: "invalid_value",
      values: l,
      input: f,
      inst: n
    }), s;
  };
}), j1 = /* @__PURE__ */ Z("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const l = new Set(i.values);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${i.values.map((r) => typeof r == "string" ? wi(r) : r ? wi(r.toString()) : String(r)).join("|")})$`), n._zod.parse = (r, s) => {
    const d = r.value;
    return l.has(d) || r.issues.push({
      code: "invalid_value",
      values: i.values,
      input: d,
      inst: n
    }), r;
  };
}), C1 = /* @__PURE__ */ Z("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (l, r) => {
    if (r.direction === "backward")
      throw new Wh(n.constructor.name);
    const s = i.transform(l.value, l);
    if (r.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (l.value = f, l.fallback = !0, l));
    if (s instanceof Promise)
      throw new bi();
    return l.value = s, l.fallback = !0, l;
  };
});
function fh(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const hv = /* @__PURE__ */ Z("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Xe(n._zod, "pattern", () => {
    const l = i.innerType._zod.pattern;
    return l ? new RegExp(`^(${Oc(l.source)})?$`) : void 0;
  }), n._zod.parse = (l, r) => {
    if (i.innerType._zod.optin === "optional") {
      const s = l.value, d = i.innerType._zod.run(l, r);
      return d instanceof Promise ? d.then((f) => fh(f, s)) : fh(d, s);
    }
    return l.value === void 0 ? l : i.innerType._zod.run(l, r);
  };
}), O1 = /* @__PURE__ */ Z("$ZodExactOptional", (n, i) => {
  hv.init(n, i), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (l, r) => i.innerType._zod.run(l, r);
}), N1 = /* @__PURE__ */ Z("$ZodNullable", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "optin", () => i.innerType._zod.optin), Xe(n._zod, "optout", () => i.innerType._zod.optout), Xe(n._zod, "pattern", () => {
    const l = i.innerType._zod.pattern;
    return l ? new RegExp(`^(${Oc(l.source)}|null)$`) : void 0;
  }), Xe(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (l, r) => l.value === null ? l : i.innerType._zod.run(l, r);
}), D1 = /* @__PURE__ */ Z("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (l, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(l, r);
    if (l.value === void 0)
      return l.value = i.defaultValue, l;
    const s = i.innerType._zod.run(l, r);
    return s instanceof Promise ? s.then((d) => mh(d, i)) : mh(s, i);
  };
});
function mh(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const R1 = /* @__PURE__ */ Z("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (l, r) => (r.direction === "backward" || l.value === void 0 && (l.value = i.defaultValue), i.innerType._zod.run(l, r));
}), Z1 = /* @__PURE__ */ Z("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => {
    const l = i.innerType._zod.values;
    return l ? new Set([...l].filter((r) => r !== void 0)) : void 0;
  }), n._zod.parse = (l, r) => {
    const s = i.innerType._zod.run(l, r);
    return s instanceof Promise ? s.then((d) => ph(d, n)) : ph(s, n);
  };
});
function ph(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const U1 = /* @__PURE__ */ Z("$ZodCatch", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", Xe(n._zod, "optout", () => i.innerType._zod.optout), Xe(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (l, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(l, r);
    const s = i.innerType._zod.run(l, r);
    return s instanceof Promise ? s.then((d) => (l.value = d.value, d.issues.length && (l.value = i.catchValue({
      ...l,
      error: {
        issues: d.issues.map((f) => Aa(f, r, Ea()))
      },
      input: l.value
    }), l.issues = [], l.fallback = !0), l)) : (l.value = s.value, s.issues.length && (l.value = i.catchValue({
      ...l,
      error: {
        issues: s.issues.map((d) => Aa(d, r, Ea()))
      },
      input: l.value
    }), l.issues = [], l.fallback = !0), l);
  };
}), Y1 = /* @__PURE__ */ Z("$ZodPipe", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "values", () => i.in._zod.values), Xe(n._zod, "optin", () => i.in._zod.optin), Xe(n._zod, "optout", () => i.out._zod.optout), Xe(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (l, r) => {
    if (r.direction === "backward") {
      const d = i.out._zod.run(l, r);
      return d instanceof Promise ? d.then((f) => fr(f, i.in, r)) : fr(d, i.in, r);
    }
    const s = i.in._zod.run(l, r);
    return s instanceof Promise ? s.then((d) => fr(d, i.out, r)) : fr(s, i.out, r);
  };
});
function fr(n, i, l) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, l);
}
const B1 = /* @__PURE__ */ Z("$ZodReadonly", (n, i) => {
  Fe.init(n, i), Xe(n._zod, "propValues", () => i.innerType._zod.propValues), Xe(n._zod, "values", () => i.innerType._zod.values), Xe(n._zod, "optin", () => i.innerType?._zod?.optin), Xe(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (l, r) => {
    if (r.direction === "backward")
      return i.innerType._zod.run(l, r);
    const s = i.innerType._zod.run(l, r);
    return s instanceof Promise ? s.then(hh) : hh(s);
  };
});
function hh(n) {
  return n.value = Object.freeze(n.value), n;
}
const H1 = /* @__PURE__ */ Z("$ZodCustom", (n, i) => {
  Mt.init(n, i), Fe.init(n, i), n._zod.parse = (l, r) => l, n._zod.check = (l) => {
    const r = l.value, s = i.fn(r);
    if (s instanceof Promise)
      return s.then((d) => vh(d, l, r, n));
    vh(s, l, r, n);
  };
});
function vh(n, i, l, r) {
  if (!n) {
    const s = {
      code: "custom",
      input: l,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (s.params = r._zod.def.params), i.issues.push(No(s));
  }
}
var _h;
class X1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...l) {
    const r = l[0];
    return this._map.set(i, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const l = this._map.get(i);
    return l && typeof l == "object" && "id" in l && this._idmap.delete(l.id), this._map.delete(i), this;
  }
  get(i) {
    const l = i._zod.parent;
    if (l) {
      const r = { ...this.get(l) ?? {} };
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
function q1() {
  return new X1();
}
(_h = globalThis).__zod_globalRegistry ?? (_h.__zod_globalRegistry = q1());
const To = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function $1(n, i) {
  return new n({
    type: "string",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yh(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G1(n, i) {
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
function Q1(n, i) {
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
function K1(n, i) {
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
function J1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function I1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function eS(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tS(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nS(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aS(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function iS(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oS(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lS(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rS(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uS(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sS(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cS(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dS(n, i) {
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
function fS(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mS(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pS(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hS(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vS(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _S(n, i) {
  return new n({
    type: "boolean",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yS(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function gS(n, i) {
  return new n({
    type: "never",
    ...de(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gh(n, i) {
  return new sv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function oc(n, i) {
  return new sv({
    check: "less_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function bh(n, i) {
  return new cv({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function lc(n, i) {
  return new cv({
    check: "greater_than",
    ...de(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Sh(n, i) {
  return new Rb({
    check: "multiple_of",
    ...de(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function vv(n, i) {
  return new Ub({
    check: "max_length",
    ...de(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function zr(n, i) {
  return new Yb({
    check: "min_length",
    ...de(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function _v(n, i) {
  return new Bb({
    check: "length_equals",
    ...de(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function bS(n, i) {
  return new Hb({
    check: "string_format",
    format: "regex",
    ...de(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function SS(n) {
  return new Xb({
    check: "string_format",
    format: "lowercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function wS(n) {
  return new qb({
    check: "string_format",
    format: "uppercase",
    ...de(n)
  });
}
// @__NO_SIDE_EFFECTS__
function zS(n, i) {
  return new $b({
    check: "string_format",
    format: "includes",
    ...de(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function xS(n, i) {
  return new Lb({
    check: "string_format",
    format: "starts_with",
    ...de(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function kS(n, i) {
  return new Vb({
    check: "string_format",
    format: "ends_with",
    ...de(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function ki(n) {
  return new Gb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function TS(n) {
  return /* @__PURE__ */ ki((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function ES() {
  return /* @__PURE__ */ ki((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function AS() {
  return /* @__PURE__ */ ki((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function MS() {
  return /* @__PURE__ */ ki((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function jS() {
  return /* @__PURE__ */ ki((n) => U0(n));
}
// @__NO_SIDE_EFFECTS__
function CS(n, i, l) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...de(l)
  });
}
// @__NO_SIDE_EFFECTS__
function OS(n, i, l) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...de(l)
  });
}
// @__NO_SIDE_EFFECTS__
function NS(n, i) {
  const l = /* @__PURE__ */ DS((r) => (r.addIssue = (s) => {
    if (typeof s == "string")
      r.issues.push(No(s, r.value, l._zod.def));
    else {
      const d = s;
      d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = l), d.continue ?? (d.continue = !l._zod.def.abort), r.issues.push(No(d));
    }
  }, n(r.value, r)), i);
  return l;
}
// @__NO_SIDE_EFFECTS__
function DS(n, i) {
  const l = new Mt({
    check: "custom",
    ...de(i)
  });
  return l._zod.check = n, l;
}
function yv(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? To,
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
function vt(n, i, l = { path: [], schemaPath: [] }) {
  var r;
  const s = n._zod.def, d = i.seen.get(n);
  if (d)
    return d.count++, l.schemaPath.includes(n) && (d.cycle = l.path), d.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: l.path };
  i.seen.set(n, f);
  const m = n._zod.toJSONSchema?.();
  if (m)
    f.schema = m;
  else {
    const g = {
      ...l,
      schemaPath: [...l.schemaPath, n],
      path: l.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, f.schema, g);
    else {
      const x = f.schema, T = i.processors[s.type];
      if (!T)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      T(n, i, x, g);
    }
    const b = n._zod.parent;
    b && (f.ref || (f.ref = b), vt(b, i, g), i.seen.get(b).isParent = !0);
  }
  const h = i.metadataRegistry.get(n);
  return h && Object.assign(f.schema, h), i.io === "input" && bt(n) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((r = f.schema).default ?? (r.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(n).schema;
}
function gv(n, i) {
  const l = n.seen.get(i);
  if (!l)
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
    if (f[1] === l)
      return { ref: "#" };
    const v = `#/${m}/`, g = f[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: g, ref: v + g };
  }, d = (f) => {
    if (f[1].schema.$ref)
      return;
    const m = f[1], { ref: h, defId: v } = s(f);
    m.def = { ...m.schema }, v && (m.defId = v);
    const g = m.schema;
    for (const b in g)
      delete g[b];
    g.$ref = h;
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
function bv(n, i) {
  const l = n.seen.get(i);
  if (!l)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (m) => {
    const h = n.seen.get(m);
    if (h.ref === null)
      return;
    const v = h.def ?? h.schema, g = { ...v }, b = h.ref;
    if (h.ref = null, b) {
      r(b);
      const T = n.seen.get(b), j = T.schema;
      if (j.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(j)) : Object.assign(v, j), Object.assign(v, g), m._zod.parent === b)
        for (const $ in v)
          $ === "$ref" || $ === "allOf" || $ in g || delete v[$];
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
  Object.assign(s, l.def ?? l.schema);
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
  const l = i ?? { seen: /* @__PURE__ */ new Set() };
  if (l.seen.has(n))
    return !1;
  l.seen.add(n);
  const r = n._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return bt(r.element, l);
  if (r.type === "set")
    return bt(r.valueType, l);
  if (r.type === "lazy")
    return bt(r.getter(), l);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return bt(r.innerType, l);
  if (r.type === "intersection")
    return bt(r.left, l) || bt(r.right, l);
  if (r.type === "record" || r.type === "map")
    return bt(r.keyType, l) || bt(r.valueType, l);
  if (r.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : bt(r.in, l) || bt(r.out, l);
  if (r.type === "object") {
    for (const s in r.shape)
      if (bt(r.shape[s], l))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const s of r.options)
      if (bt(s, l))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const s of r.items)
      if (bt(s, l))
        return !0;
    return !!(r.rest && bt(r.rest, l));
  }
  return !1;
}
const RS = (n, i = {}) => (l) => {
  const r = yv({ ...l, processors: i });
  return vt(n, r), gv(r, n), bv(r, n);
}, xr = (n, i, l = {}) => (r) => {
  const { libraryOptions: s, target: d } = r ?? {}, f = yv({ ...s ?? {}, target: d, io: i, processors: l });
  return vt(n, f), gv(f, n), bv(f, n);
}, ZS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, US = (n, i, l, r) => {
  const s = l;
  s.type = "string";
  const { minimum: d, maximum: f, format: m, patterns: h, contentEncoding: v } = n._zod.bag;
  if (typeof d == "number" && (s.minLength = d), typeof f == "number" && (s.maxLength = f), m && (s.format = ZS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), v && (s.contentEncoding = v), h && h.size > 0) {
    const g = [...h];
    g.length === 1 ? s.pattern = g[0].source : g.length > 1 && (s.allOf = [
      ...g.map((b) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, YS = (n, i, l, r) => {
  const s = l, { minimum: d, maximum: f, format: m, multipleOf: h, exclusiveMaximum: v, exclusiveMinimum: g } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const b = typeof g == "number" && g >= (d ?? Number.NEGATIVE_INFINITY), x = typeof v == "number" && v <= (f ?? Number.POSITIVE_INFINITY), T = i.target === "draft-04" || i.target === "openapi-3.0";
  b ? T ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof d == "number" && (s.minimum = d), x ? T ? (s.maximum = v, s.exclusiveMaximum = !0) : s.exclusiveMaximum = v : typeof f == "number" && (s.maximum = f), typeof h == "number" && (s.multipleOf = h);
}, BS = (n, i, l, r) => {
  l.type = "boolean";
}, HS = (n, i, l, r) => {
  l.not = {};
}, XS = (n, i, l, r) => {
}, qS = (n, i, l, r) => {
  const s = n._zod.def, d = Fh(s.entries);
  d.every((f) => typeof f == "number") && (l.type = "number"), d.every((f) => typeof f == "string") && (l.type = "string"), l.enum = d;
}, $S = (n, i, l, r) => {
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
    l.type = f === null ? "null" : typeof f, i.target === "draft-04" || i.target === "openapi-3.0" ? l.enum = [f] : l.const = f;
  } else
    d.every((f) => typeof f == "number") && (l.type = "number"), d.every((f) => typeof f == "string") && (l.type = "string"), d.every((f) => typeof f == "boolean") && (l.type = "boolean"), d.every((f) => f === null) && (l.type = "null"), l.enum = d;
}, LS = (n, i, l, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, VS = (n, i, l, r) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, GS = (n, i, l, r) => {
  const s = l, d = n._zod.def, { minimum: f, maximum: m } = n._zod.bag;
  typeof f == "number" && (s.minItems = f), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = vt(d.element, i, {
    ...r,
    path: [...r.path, "items"]
  });
}, QS = (n, i, l, r) => {
  const s = l, d = n._zod.def;
  s.type = "object", s.properties = {};
  const f = d.shape;
  for (const v in f)
    s.properties[v] = vt(f[v], i, {
      ...r,
      path: [...r.path, "properties", v]
    });
  const m = new Set(Object.keys(f)), h = new Set([...m].filter((v) => {
    const g = d.shape[v]._zod;
    return i.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  h.size > 0 && (s.required = Array.from(h)), d.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : d.catchall ? d.catchall && (s.additionalProperties = vt(d.catchall, i, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, KS = (n, i, l, r) => {
  const s = n._zod.def, d = s.inclusive === !1, f = s.options.map((m, h) => vt(m, i, {
    ...r,
    path: [...r.path, d ? "oneOf" : "anyOf", h]
  }));
  d ? l.oneOf = f : l.anyOf = f;
}, JS = (n, i, l, r) => {
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
  l.allOf = h;
}, PS = (n, i, l, r) => {
  const s = n._zod.def, d = vt(s.innerType, i, r), f = i.seen.get(n);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, l.nullable = !0) : l.anyOf = [d, { type: "null" }];
}, WS = (n, i, l, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, FS = (n, i, l, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, l.default = JSON.parse(JSON.stringify(s.defaultValue));
}, IS = (n, i, l, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, i.io === "input" && (l._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, e2 = (n, i, l, r) => {
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
  l.default = f;
}, t2 = (n, i, l, r) => {
  const s = n._zod.def, d = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? d ? s.out : s.in : s.out;
  vt(f, i, r);
  const m = i.seen.get(n);
  m.ref = f;
}, n2 = (n, i, l, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType, l.readOnly = !0;
}, Sv = (n, i, l, r) => {
  const s = n._zod.def;
  vt(s.innerType, i, r);
  const d = i.seen.get(n);
  d.ref = s.innerType;
}, a2 = /* @__PURE__ */ Z("ZodISODateTime", (n, i) => {
  l1.init(n, i), Je.init(n, i);
});
function i2(n) {
  return /* @__PURE__ */ dS(a2, n);
}
const o2 = /* @__PURE__ */ Z("ZodISODate", (n, i) => {
  r1.init(n, i), Je.init(n, i);
});
function l2(n) {
  return /* @__PURE__ */ fS(o2, n);
}
const r2 = /* @__PURE__ */ Z("ZodISOTime", (n, i) => {
  u1.init(n, i), Je.init(n, i);
});
function u2(n) {
  return /* @__PURE__ */ mS(r2, n);
}
const s2 = /* @__PURE__ */ Z("ZodISODuration", (n, i) => {
  s1.init(n, i), Je.init(n, i);
});
function c2(n) {
  return /* @__PURE__ */ pS(s2, n);
}
const d2 = (n, i) => {
  av.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (l) => W0(n, l)
      // enumerable: false,
    },
    flatten: {
      value: (l) => P0(n, l)
      // enumerable: false,
    },
    addIssue: {
      value: (l) => {
        n.issues.push(l), n.message = JSON.stringify(n.issues, vc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (l) => {
        n.issues.push(...l), n.message = JSON.stringify(n.issues, vc, 2);
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
}, Jt = /* @__PURE__ */ Z("ZodError", d2, {
  Parent: Error
}), f2 = /* @__PURE__ */ Dc(Jt), m2 = /* @__PURE__ */ Rc(Jt), p2 = /* @__PURE__ */ Cr(Jt), h2 = /* @__PURE__ */ Or(Jt), v2 = /* @__PURE__ */ eb(Jt), _2 = /* @__PURE__ */ tb(Jt), y2 = /* @__PURE__ */ nb(Jt), g2 = /* @__PURE__ */ ab(Jt), b2 = /* @__PURE__ */ ib(Jt), S2 = /* @__PURE__ */ ob(Jt), w2 = /* @__PURE__ */ lb(Jt), z2 = /* @__PURE__ */ rb(Jt), wh = /* @__PURE__ */ new WeakMap();
function Yo(n, i, l) {
  const r = Object.getPrototypeOf(n);
  let s = wh.get(r);
  if (s || (s = /* @__PURE__ */ new Set(), wh.set(r, s)), !s.has(i)) {
    s.add(i);
    for (const d in l) {
      const f = l[d];
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
}), n.toJSONSchema = RS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (l, r) => f2(n, l, r, { callee: n.parse }), n.safeParse = (l, r) => p2(n, l, r), n.parseAsync = async (l, r) => m2(n, l, r, { callee: n.parseAsync }), n.safeParseAsync = async (l, r) => h2(n, l, r), n.spa = n.safeParseAsync, n.encode = (l, r) => v2(n, l, r), n.decode = (l, r) => _2(n, l, r), n.encodeAsync = async (l, r) => y2(n, l, r), n.decodeAsync = async (l, r) => g2(n, l, r), n.safeEncode = (l, r) => b2(n, l, r), n.safeDecode = (l, r) => S2(n, l, r), n.safeEncodeAsync = async (l, r) => w2(n, l, r), n.safeDecodeAsync = async (l, r) => z2(n, l, r), Yo(n, "ZodType", {
  check(...l) {
    const r = this.def;
    return this.clone(In(r, {
      checks: [
        ...r.checks ?? [],
        ...l.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...l) {
    return this.check(...l);
  },
  clone(l, r) {
    return ea(this, l, r);
  },
  brand() {
    return this;
  },
  register(l, r) {
    return l.add(this, r), this;
  },
  refine(l, r) {
    return this.check(vw(l, r));
  },
  superRefine(l, r) {
    return this.check(_w(l, r));
  },
  overwrite(l) {
    return this.check(/* @__PURE__ */ ki(l));
  },
  optional() {
    return Th(this);
  },
  exactOptional() {
    return aw(this);
  },
  nullable() {
    return Eh(this);
  },
  nullish() {
    return Th(Eh(this));
  },
  nonoptional(l) {
    return sw(this, l);
  },
  array() {
    return yi(this);
  },
  or(l) {
    return xv([this, l]);
  },
  and(l) {
    return F2(this, l);
  },
  transform(l) {
    return Ah(this, tw(l));
  },
  default(l) {
    return lw(this, l);
  },
  prefault(l) {
    return uw(this, l);
  },
  catch(l) {
    return dw(this, l);
  },
  pipe(l) {
    return Ah(this, l);
  },
  readonly() {
    return pw(this);
  },
  describe(l) {
    const r = this.clone();
    return To.add(r, { description: l }), r;
  },
  meta(...l) {
    if (l.length === 0)
      return To.get(this);
    const r = this.clone();
    return To.add(r, l[0]), r;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(l) {
    return l(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return To.get(n)?.description;
  },
  configurable: !0
}), n)), wv = /* @__PURE__ */ Z("_ZodString", (n, i) => {
  Zc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => US(n, r, s);
  const l = n._zod.bag;
  n.format = l.format ?? null, n.minLength = l.minimum ?? null, n.maxLength = l.maximum ?? null, Yo(n, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ bS(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ zS(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ xS(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ kS(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ zr(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ vv(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ _v(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ zr(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ SS(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ wS(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ ES());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ TS(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ AS());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ MS());
    },
    slugify() {
      return this.check(/* @__PURE__ */ jS());
    }
  });
}), x2 = /* @__PURE__ */ Z("ZodString", (n, i) => {
  Zc.init(n, i), wv.init(n, i), n.email = (l) => n.check(/* @__PURE__ */ L1(k2, l)), n.url = (l) => n.check(/* @__PURE__ */ J1(T2, l)), n.jwt = (l) => n.check(/* @__PURE__ */ cS(X2, l)), n.emoji = (l) => n.check(/* @__PURE__ */ P1(E2, l)), n.guid = (l) => n.check(/* @__PURE__ */ yh(zh, l)), n.uuid = (l) => n.check(/* @__PURE__ */ V1(mr, l)), n.uuidv4 = (l) => n.check(/* @__PURE__ */ G1(mr, l)), n.uuidv6 = (l) => n.check(/* @__PURE__ */ Q1(mr, l)), n.uuidv7 = (l) => n.check(/* @__PURE__ */ K1(mr, l)), n.nanoid = (l) => n.check(/* @__PURE__ */ W1(A2, l)), n.guid = (l) => n.check(/* @__PURE__ */ yh(zh, l)), n.cuid = (l) => n.check(/* @__PURE__ */ F1(M2, l)), n.cuid2 = (l) => n.check(/* @__PURE__ */ I1(j2, l)), n.ulid = (l) => n.check(/* @__PURE__ */ eS(C2, l)), n.base64 = (l) => n.check(/* @__PURE__ */ rS(Y2, l)), n.base64url = (l) => n.check(/* @__PURE__ */ uS(B2, l)), n.xid = (l) => n.check(/* @__PURE__ */ tS(O2, l)), n.ksuid = (l) => n.check(/* @__PURE__ */ nS(N2, l)), n.ipv4 = (l) => n.check(/* @__PURE__ */ aS(D2, l)), n.ipv6 = (l) => n.check(/* @__PURE__ */ iS(R2, l)), n.cidrv4 = (l) => n.check(/* @__PURE__ */ oS(Z2, l)), n.cidrv6 = (l) => n.check(/* @__PURE__ */ lS(U2, l)), n.e164 = (l) => n.check(/* @__PURE__ */ sS(H2, l)), n.datetime = (l) => n.check(i2(l)), n.date = (l) => n.check(l2(l)), n.time = (l) => n.check(u2(l)), n.duration = (l) => n.check(c2(l));
});
function ht(n) {
  return /* @__PURE__ */ $1(x2, n);
}
const Je = /* @__PURE__ */ Z("ZodStringFormat", (n, i) => {
  Ke.init(n, i), wv.init(n, i);
}), k2 = /* @__PURE__ */ Z("ZodEmail", (n, i) => {
  Wb.init(n, i), Je.init(n, i);
}), zh = /* @__PURE__ */ Z("ZodGUID", (n, i) => {
  Jb.init(n, i), Je.init(n, i);
}), mr = /* @__PURE__ */ Z("ZodUUID", (n, i) => {
  Pb.init(n, i), Je.init(n, i);
}), T2 = /* @__PURE__ */ Z("ZodURL", (n, i) => {
  Fb.init(n, i), Je.init(n, i);
}), E2 = /* @__PURE__ */ Z("ZodEmoji", (n, i) => {
  Ib.init(n, i), Je.init(n, i);
}), A2 = /* @__PURE__ */ Z("ZodNanoID", (n, i) => {
  e1.init(n, i), Je.init(n, i);
}), M2 = /* @__PURE__ */ Z("ZodCUID", (n, i) => {
  t1.init(n, i), Je.init(n, i);
}), j2 = /* @__PURE__ */ Z("ZodCUID2", (n, i) => {
  n1.init(n, i), Je.init(n, i);
}), C2 = /* @__PURE__ */ Z("ZodULID", (n, i) => {
  a1.init(n, i), Je.init(n, i);
}), O2 = /* @__PURE__ */ Z("ZodXID", (n, i) => {
  i1.init(n, i), Je.init(n, i);
}), N2 = /* @__PURE__ */ Z("ZodKSUID", (n, i) => {
  o1.init(n, i), Je.init(n, i);
}), D2 = /* @__PURE__ */ Z("ZodIPv4", (n, i) => {
  c1.init(n, i), Je.init(n, i);
}), R2 = /* @__PURE__ */ Z("ZodIPv6", (n, i) => {
  d1.init(n, i), Je.init(n, i);
}), Z2 = /* @__PURE__ */ Z("ZodCIDRv4", (n, i) => {
  f1.init(n, i), Je.init(n, i);
}), U2 = /* @__PURE__ */ Z("ZodCIDRv6", (n, i) => {
  m1.init(n, i), Je.init(n, i);
}), Y2 = /* @__PURE__ */ Z("ZodBase64", (n, i) => {
  p1.init(n, i), Je.init(n, i);
}), B2 = /* @__PURE__ */ Z("ZodBase64URL", (n, i) => {
  v1.init(n, i), Je.init(n, i);
}), H2 = /* @__PURE__ */ Z("ZodE164", (n, i) => {
  _1.init(n, i), Je.init(n, i);
}), X2 = /* @__PURE__ */ Z("ZodJWT", (n, i) => {
  g1.init(n, i), Je.init(n, i);
}), zv = /* @__PURE__ */ Z("ZodNumber", (n, i) => {
  fv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => YS(n, r, s), Yo(n, "ZodNumber", {
    gt(r, s) {
      return this.check(/* @__PURE__ */ bh(r, s));
    },
    gte(r, s) {
      return this.check(/* @__PURE__ */ lc(r, s));
    },
    min(r, s) {
      return this.check(/* @__PURE__ */ lc(r, s));
    },
    lt(r, s) {
      return this.check(/* @__PURE__ */ gh(r, s));
    },
    lte(r, s) {
      return this.check(/* @__PURE__ */ oc(r, s));
    },
    max(r, s) {
      return this.check(/* @__PURE__ */ oc(r, s));
    },
    int(r) {
      return this.check(xh(r));
    },
    safe(r) {
      return this.check(xh(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ bh(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ lc(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ gh(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ oc(0, r));
    },
    multipleOf(r, s) {
      return this.check(/* @__PURE__ */ Sh(r, s));
    },
    step(r, s) {
      return this.check(/* @__PURE__ */ Sh(r, s));
    },
    finite() {
      return this;
    }
  });
  const l = n._zod.bag;
  n.minValue = Math.max(l.minimum ?? Number.NEGATIVE_INFINITY, l.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(l.maximum ?? Number.POSITIVE_INFINITY, l.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (l.format ?? "").includes("int") || Number.isSafeInteger(l.multipleOf ?? 0.5), n.isFinite = !0, n.format = l.format ?? null;
});
function q2(n) {
  return /* @__PURE__ */ hS(zv, n);
}
const $2 = /* @__PURE__ */ Z("ZodNumberFormat", (n, i) => {
  b1.init(n, i), zv.init(n, i);
});
function xh(n) {
  return /* @__PURE__ */ vS($2, n);
}
const L2 = /* @__PURE__ */ Z("ZodBoolean", (n, i) => {
  S1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => BS(n, l, r);
});
function kr(n) {
  return /* @__PURE__ */ _S(L2, n);
}
const V2 = /* @__PURE__ */ Z("ZodUnknown", (n, i) => {
  w1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => XS();
});
function kh() {
  return /* @__PURE__ */ yS(V2);
}
const G2 = /* @__PURE__ */ Z("ZodNever", (n, i) => {
  z1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => HS(n, l, r);
});
function Q2(n) {
  return /* @__PURE__ */ gS(G2, n);
}
const K2 = /* @__PURE__ */ Z("ZodArray", (n, i) => {
  x1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => GS(n, l, r, s), n.element = i.element, Yo(n, "ZodArray", {
    min(l, r) {
      return this.check(/* @__PURE__ */ zr(l, r));
    },
    nonempty(l) {
      return this.check(/* @__PURE__ */ zr(1, l));
    },
    max(l, r) {
      return this.check(/* @__PURE__ */ vv(l, r));
    },
    length(l, r) {
      return this.check(/* @__PURE__ */ _v(l, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function yi(n, i) {
  return /* @__PURE__ */ CS(K2, n, i);
}
const J2 = /* @__PURE__ */ Z("ZodObject", (n, i) => {
  T1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => QS(n, l, r, s), Xe(n, "shape", () => i.shape), Yo(n, "ZodObject", {
    keyof() {
      return Do(Object.keys(this._zod.def.shape));
    },
    catchall(l) {
      return this.clone({ ...this._zod.def, catchall: l });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: kh() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: kh() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: Q2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(l) {
      return L0(this, l);
    },
    safeExtend(l) {
      return V0(this, l);
    },
    merge(l) {
      return G0(this, l);
    },
    pick(l) {
      return q0(this, l);
    },
    omit(l) {
      return $0(this, l);
    },
    partial(...l) {
      return Q0(kv, this, l[0]);
    },
    required(...l) {
      return K0(Tv, this, l[0]);
    }
  });
});
function Si(n, i) {
  const l = {
    type: "object",
    shape: n ?? {},
    ...de(i)
  };
  return new J2(l);
}
const P2 = /* @__PURE__ */ Z("ZodUnion", (n, i) => {
  E1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => KS(n, l, r, s), n.options = i.options;
});
function xv(n, i) {
  return new P2({
    type: "union",
    options: n,
    ...de(i)
  });
}
const W2 = /* @__PURE__ */ Z("ZodIntersection", (n, i) => {
  A1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => JS(n, l, r, s);
});
function F2(n, i) {
  return new W2({
    type: "intersection",
    left: n,
    right: i
  });
}
const yc = /* @__PURE__ */ Z("ZodEnum", (n, i) => {
  M1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, s, d) => qS(n, r, s), n.enum = i.entries, n.options = Object.values(i.entries);
  const l = new Set(Object.keys(i.entries));
  n.extract = (r, s) => {
    const d = {};
    for (const f of r)
      if (l.has(f))
        d[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new yc({
      ...i,
      checks: [],
      ...de(s),
      entries: d
    });
  }, n.exclude = (r, s) => {
    const d = { ...i.entries };
    for (const f of r)
      if (l.has(f))
        delete d[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new yc({
      ...i,
      checks: [],
      ...de(s),
      entries: d
    });
  };
});
function Do(n, i) {
  const l = Array.isArray(n) ? Object.fromEntries(n.map((r) => [r, r])) : n;
  return new yc({
    type: "enum",
    entries: l,
    ...de(i)
  });
}
const I2 = /* @__PURE__ */ Z("ZodLiteral", (n, i) => {
  j1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => $S(n, l, r), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function Tr(n, i) {
  return new I2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...de(i)
  });
}
const ew = /* @__PURE__ */ Z("ZodTransform", (n, i) => {
  C1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => VS(n, l), n._zod.parse = (l, r) => {
    if (r.direction === "backward")
      throw new Wh(n.constructor.name);
    l.addIssue = (d) => {
      if (typeof d == "string")
        l.issues.push(No(d, l.value, i));
      else {
        const f = d;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = l.value), f.inst ?? (f.inst = n), l.issues.push(No(f));
      }
    };
    const s = i.transform(l.value, l);
    return s instanceof Promise ? s.then((d) => (l.value = d, l.fallback = !0, l)) : (l.value = s, l.fallback = !0, l);
  };
});
function tw(n) {
  return new ew({
    type: "transform",
    transform: n
  });
}
const kv = /* @__PURE__ */ Z("ZodOptional", (n, i) => {
  hv.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => Sv(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function Th(n) {
  return new kv({
    type: "optional",
    innerType: n
  });
}
const nw = /* @__PURE__ */ Z("ZodExactOptional", (n, i) => {
  O1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => Sv(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function aw(n) {
  return new nw({
    type: "optional",
    innerType: n
  });
}
const iw = /* @__PURE__ */ Z("ZodNullable", (n, i) => {
  N1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => PS(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function Eh(n) {
  return new iw({
    type: "nullable",
    innerType: n
  });
}
const ow = /* @__PURE__ */ Z("ZodDefault", (n, i) => {
  D1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => FS(n, l, r, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function lw(n, i) {
  return new ow({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : ev(i);
    }
  });
}
const rw = /* @__PURE__ */ Z("ZodPrefault", (n, i) => {
  R1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => IS(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function uw(n, i) {
  return new rw({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : ev(i);
    }
  });
}
const Tv = /* @__PURE__ */ Z("ZodNonOptional", (n, i) => {
  Z1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => WS(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function sw(n, i) {
  return new Tv({
    type: "nonoptional",
    innerType: n,
    ...de(i)
  });
}
const cw = /* @__PURE__ */ Z("ZodCatch", (n, i) => {
  U1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => e2(n, l, r, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function dw(n, i) {
  return new cw({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const fw = /* @__PURE__ */ Z("ZodPipe", (n, i) => {
  Y1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => t2(n, l, r, s), n.in = i.in, n.out = i.out;
});
function Ah(n, i) {
  return new fw({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const mw = /* @__PURE__ */ Z("ZodReadonly", (n, i) => {
  B1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => n2(n, l, r, s), n.unwrap = () => n._zod.def.innerType;
});
function pw(n) {
  return new mw({
    type: "readonly",
    innerType: n
  });
}
const hw = /* @__PURE__ */ Z("ZodCustom", (n, i) => {
  H1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (l, r, s) => LS(n, l);
});
function vw(n, i = {}) {
  return /* @__PURE__ */ OS(hw, n, i);
}
function _w(n, i) {
  return /* @__PURE__ */ NS(n, i);
}
const Er = ht().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Oe = Er.optional(), yw = Si({
  segment_id: q2().int().nonnegative(),
  area_id: ht().min(1).optional(),
  name: ht().min(1),
  icon: ht().optional(),
  include_in_floor_clean: kr().optional().default(!0)
}).passthrough(), gw = Si({
  id: ht().min(1),
  name: ht().min(1),
  map_entity: Er,
  map_select_option: ht().min(1).optional(),
  vacuum_then_mop_routine: Er.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: kr().optional().default(!1),
  rooms: yi(yw).min(1)
}).passthrough(), bw = Si({
  id: ht().min(1),
  name: ht().min(1),
  icon: ht().optional(),
  strategy: Do(["custom", "smartplan"]),
  cleaning_type: Do(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: ht().optional(),
  mop_mode: ht().optional(),
  mop_intensity: ht().optional(),
  cleaning_count: xv([Tr(1), Tr(2)]).optional()
}).passthrough(), Ev = Si({
  type: Tr("custom:roborock-vacuum-map-card").optional(),
  entity: Er.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: ht().optional(),
  language: Do(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: Si({
    map_select: Oe,
    cleaning_mode: Oe,
    vacuum_then_mop_script: Oe,
    mop_mode: Oe,
    mop_intensity: Oe,
    dock_mop_drying: Oe,
    dock_mop_drying_remaining_time: Oe,
    dock_child_lock: Oe,
    dock_mop_wash_frequency: Oe,
    dock_wash_mode: Oe,
    dock_wash_temperature: Oe,
    dock_auto_empty: Oe,
    dock_empty_mode: Oe,
    dock_auto_dry: Oe,
    dock_dry_duration: Oe,
    assisted_carry_stage: Oe,
    assisted_carry_job: Oe,
    assisted_carry_prepare_script: Oe,
    assisted_carry_start_script: Oe,
    assisted_carry_finish_script: Oe,
    water_shortage: Oe,
    mop_attached: Oe,
    water_box_attached: Oe,
    do_not_disturb: Oe,
    battery: Oe,
    current_room: Oe,
    cleaning_area: Oe,
    cleaning_time: Oe,
    cleaning_progress: Oe,
    status: Oe,
    error: Oe,
    last_clean_end: Oe
  }).passthrough().optional().default({}),
  floors: yi(gw).min(1),
  presets: yi(bw).optional().default([]),
  default_preset: ht().optional().default("vacuum_only"),
  vacuum_mode_fallback: Tr("set_clean_motor_mode").optional(),
  enable_mop_only: kr().optional().default(!1),
  mop_routes: Si({
    vacuum_and_mop: yi(ht().min(1)).min(1).optional(),
    mop: yi(ht().min(1)).min(1).optional()
  }).optional(),
  enable_smartplan: kr().optional(),
  cleaning_count_command: Do(["set_clean_repeat_times", "app_segment_clean"]).optional()
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
function Sw(n) {
  return Ev.parse(n);
}
function ww(n) {
  const i = Ev.safeParse(n);
  return i.success ? [] : i.error.issues.map((l) => `${l.path.join(".") || "config"}: ${l.message}`);
}
function Av() {
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
function Mv(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((l) => {
    const r = l;
    return !pr(r.vacuum?.x) || !pr(r.vacuum?.y) || !pr(r.map?.x) || !pr(r.map?.y) ? [] : [r];
  }) : [];
}
function jv(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((r, s) => [String(s), r]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([r, s]) => {
    if (!s || typeof s != "object") return [];
    const d = s, f = d.number ?? d.room_id ?? d.segment_id ?? r, m = Number(f), h = Number(d.x0), v = Number(d.y0), g = Number(d.x1), b = Number(d.y1);
    return [m, h, v, g, b].every(Number.isFinite) ? [
      {
        segment_id: m,
        source_name: typeof d.name == "string" ? d.name : `Room ${m}`,
        x0: h,
        y0: v,
        x1: g,
        y1: b
      }
    ] : [];
  }) : [];
}
function Eo(n, i, l) {
  if (l.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = l, f = s.vacuum.x - r.vacuum.x, m = s.vacuum.y - r.vacuum.y, h = d.vacuum.x - r.vacuum.x, v = d.vacuum.y - r.vacuum.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.vacuum.x, x = i - r.vacuum.y, T = (b * v - x * h) / g, j = (f * x - m * b) / g;
  return {
    x: r.map.x + T * (s.map.x - r.map.x) + j * (d.map.x - r.map.x),
    y: r.map.y + T * (s.map.y - r.map.y) + j * (d.map.y - r.map.y)
  };
}
function hr(n, i, l) {
  if (l.length < 3) throw new Error("At least three calibration points are required");
  const [r, s, d] = l, f = s.map.x - r.map.x, m = s.map.y - r.map.y, h = d.map.x - r.map.x, v = d.map.y - r.map.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.map.x, x = i - r.map.y, T = (b * v - x * h) / g, j = (f * x - m * b) / g;
  return {
    x: r.vacuum.x + T * (s.vacuum.x - r.vacuum.x) + j * (d.vacuum.x - r.vacuum.x),
    y: r.vacuum.y + T * (s.vacuum.y - r.vacuum.y) + j * (d.vacuum.y - r.vacuum.y)
  };
}
function jo(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function gc(n, i, l) {
  const r = jo(n), s = r.x2 - r.x1, d = r.y2 - r.y1, f = Math.min(Math.max(0, r.x1), Math.max(0, i - s)), m = Math.min(Math.max(0, r.y1), Math.max(0, l - d));
  return { x1: f, y1: m, x2: f + s, y2: m + d };
}
function zw(n, i) {
  const l = jo(n), r = [
    hr(l.x1, l.y1, i),
    hr(l.x2, l.y1, i),
    hr(l.x2, l.y2, i),
    hr(l.x1, l.y2, i)
  ], s = r.map(({ x: f }) => f), d = r.map(({ y: f }) => f);
  return {
    x1: Math.round(Math.min(...s)),
    y1: Math.round(Math.min(...d)),
    x2: Math.round(Math.max(...s)),
    y2: Math.round(Math.max(...d))
  };
}
function xw(n, i) {
  return `${[
    Eo(n.x0, n.y0, i),
    Eo(n.x1, n.y0, i),
    Eo(n.x1, n.y1, i),
    Eo(n.x0, n.y1, i)
  ].map((r, s) => `${s === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function kw(n, i) {
  return Eo((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function Tw(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
const Ew = "https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml", Aw = { tested: "tested", community: "community-tested", experimental: "experimental, please report results" };
function Mw({ hass: n, config: i }) {
  const { profile: l, model: r } = Ac(n, i);
  if (l) return /* @__PURE__ */ y.jsxs("p", { className: "editor-hint", children: [
    "Model profile: ",
    l.label,
    " (",
    Aw[l.status],
    ")."
  ] });
  if (!r) return null;
  const { verdict: s, name: d, protocol: f } = N0({ model: r });
  return s === "unsupported" ? /* @__PURE__ */ y.jsxs("p", { className: "editor-hint", children: [
    d ?? r,
    " is not supported by this card",
    f ? ` (${f} protocol)` : "",
    "."
  ] }) : jr(r)?.features ? /* @__PURE__ */ y.jsxs("p", { className: "editor-hint", children: [
    "Recognised model: ",
    d ?? r,
    " (feature data from python-roborock)."
  ] }) : /* @__PURE__ */ y.jsxs("p", { className: "editor-hint", children: [
    "No profile for ",
    d ?? r,
    " yet; options are detected from Home Assistant. ",
    /* @__PURE__ */ y.jsx("a", { href: Ew, target: "_blank", rel: "noreferrer", children: "Report your model" })
  ] });
}
function vr(n, i, l) {
  const r = [...n], [s] = r.splice(i, 1);
  return r.splice(l, 0, s), r;
}
function jw(n, i) {
  return Object.keys(n.states).filter((l) => l.startsWith(`${i}.`)).sort();
}
function _r({
  hass: n,
  domain: i,
  value: l,
  optional: r,
  onChange: s
}) {
  return /* @__PURE__ */ y.jsxs("select", { value: l ?? "", onChange: (d) => s(d.target.value || void 0), children: [
    /* @__PURE__ */ y.jsx("option", { value: "", children: r ? "Not configured" : `Select ${i}` }),
    jw(n, i).map((d) => /* @__PURE__ */ y.jsx("option", { children: d }, d))
  ] });
}
function Cw({
  areas: n,
  value: i,
  onChange: l
}) {
  const r = oe.useRef(null), [s, d] = oe.useState(() => !!customElements.get("ha-area-picker"));
  return oe.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => d(!0));
  }, [s]), oe.useEffect(() => {
    const f = r.current;
    if (!f) return;
    f.value = i, f.noAdd = !0;
    const m = (h) => l(h.detail.value || void 0);
    return f.addEventListener("value-changed", m), () => f.removeEventListener("value-changed", m);
  }, [s, l, i]), s ? /* @__PURE__ */ y.jsx("ha-area-picker", { ref: r, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ y.jsxs("select", { value: i ?? "", onChange: (f) => l(f.target.value || void 0), children: [
    /* @__PURE__ */ y.jsx("option", { value: "", children: "Unmapped" }),
    n.map((f) => /* @__PURE__ */ y.jsxs("option", { value: f.area_id, children: [
      f.name,
      " (",
      f.area_id,
      ")"
    ] }, f.area_id)),
    i && !n.some((f) => f.area_id === i) && /* @__PURE__ */ y.jsx("option", { value: i, children: i })
  ] });
}
function Ow({ hass: n, config: i, onChange: l }) {
  const r = ww(i), s = (m, h) => {
    const v = [...i.floors];
    v[m] = h, l({ ...i, floors: v });
  }, d = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], f = Object.values(n.areas ?? {}).sort((m, h) => m.name.localeCompare(h.name));
  return /* @__PURE__ */ y.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ y.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ y.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    r.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "editor-errors", role: "alert", children: r.map((m) => /* @__PURE__ */ y.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ y.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (m) => l({ ...i, name: m.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ y.jsxs("select", { value: i.language ?? "en", onChange: (m) => l({ ...i, language: m.target.value }), children: [
          /* @__PURE__ */ y.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ y.jsx("option", { value: "nl", children: "Nederlands" }),
          /* @__PURE__ */ y.jsx("option", { value: "pl", children: "Polski" }),
          /* @__PURE__ */ y.jsx("option", { value: "tr", children: "Türkçe" })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ y.jsx(_r, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && l({ ...i, entity: m }) })
      ] }),
      /* @__PURE__ */ y.jsx(Mw, { hass: n, config: i })
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Entities" }),
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
      ].map(([m, h, v]) => /* @__PURE__ */ y.jsxs("label", { children: [
        v,
        /* @__PURE__ */ y.jsx(_r, { hass: n, domain: h, optional: !0, value: i.entities?.[m], onChange: (g) => l({ ...i, entities: { ...i.entities, [m]: g } }) })
      ] }, m)),
      /* @__PURE__ */ y.jsxs("p", { className: "editor-hint", children: [
        "Create the Vac followed by Mop and assisted-carry scripts from blueprints:",
        " ",
        Object.values(w0).map((m, h) => /* @__PURE__ */ y.jsxs("span", { children: [
          h > 0 && " · ",
          /* @__PURE__ */ y.jsx("a", { href: z0(m.file), target: "_blank", rel: "noreferrer", children: m.label })
        ] }, m.file))
      ] }),
      i.vacuum_mode_fallback && /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => l({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use deprecated Vacuum-mode fallback (Home Assistant 2026.7 and older; untick to remove)"
      ] }),
      /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: i.enable_mop_only === !0, onChange: (m) => l({ ...i, enable_mop_only: m.target.checked || void 0 }) }),
        " Enable Mop only (only for models whose Roborock app offers it, e.g. Saros 10R)"
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => l({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ y.jsx(eh, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, h) => /* @__PURE__ */ y.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ y.jsx("strong", { children: m.name || `Floor ${h + 1}` }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: h === 0, onClick: () => l({ ...i, floors: vr(i.floors, h, h - 1) }), children: /* @__PURE__ */ y.jsx(Wp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: h === i.floors.length - 1, onClick: () => l({ ...i, floors: vr(i.floors, h, h + 1) }), children: /* @__PURE__ */ y.jsx(Pp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => l({ ...i, floors: i.floors.filter((v, g) => g !== h) }), children: /* @__PURE__ */ y.jsx(br, {}) })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ y.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ y.jsx("input", { value: m.id, onChange: (v) => s(h, { ...m, id: v.target.value }) })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ y.jsx("input", { value: m.name, onChange: (v) => s(h, { ...m, name: v.target.value }) })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ y.jsx(_r, { hass: n, domain: "image", value: m.map_entity, onChange: (v) => {
              if (!v) return;
              const g = jv(n.states[v]), b = new Map(m.rooms.map((T) => [T.segment_id, T])), x = g.map((T) => ({
                ...b.get(T.segment_id),
                segment_id: T.segment_id,
                name: b.get(T.segment_id)?.name ?? T.source_name,
                include_in_floor_clean: b.get(T.segment_id)?.include_in_floor_clean ?? !0
              }));
              s(h, { ...m, map_entity: v, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ y.jsxs("select", { value: m.map_select_option ?? "", onChange: (v) => s(h, { ...m, map_select_option: v.target.value || void 0 }), children: [
              /* @__PURE__ */ y.jsx("option", { value: "", children: "Not configured" }),
              d.map((v) => /* @__PURE__ */ y.jsx("option", { children: v }, v))
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ y.jsx(_r, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (v) => s(h, { ...m, vacuum_then_mop_routine: v }) })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (v) => s(h, { ...m, assisted_carry: v.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ y.jsx("h4", { children: "Discovered rooms" }),
        m.rooms.length === 0 ? /* @__PURE__ */ y.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ y.jsx("div", { className: "room-editor-list", children: m.rooms.map((v, g) => /* @__PURE__ */ y.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ y.jsxs("strong", { children: [
            "Segment ",
            v.segment_id
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ y.jsx("input", { value: v.name, onChange: (b) => {
              const x = [...m.rooms];
              x[g] = { ...v, name: b.target.value }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ y.jsx(Cw, { areas: f, value: v.area_id, onChange: (b) => {
              const x = [...m.rooms];
              x[g] = { ...v, area_id: b }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ y.jsx("input", { value: v.icon ?? "", placeholder: "mdi:floor-plan", onChange: (b) => {
              const x = [...m.rooms];
              x[g] = { ...v, icon: b.target.value || void 0 }, s(h, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ y.jsx("input", { type: "checkbox", checked: v.include_in_floor_clean !== !1, onChange: (b) => {
              const x = [...m.rooms];
              x[g] = { ...v, include_in_floor_clean: b.target.checked }, s(h, { ...m, rooms: x });
            } }),
            " Include in Entire floor"
          ] })
        ] }, v.segment_id)) })
      ] }, `${m.id}-${h}`))
    ] }),
    /* @__PURE__ */ y.jsxs("section", { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => {
          const m = { id: `preset_${(i.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          l({ ...i, presets: [...i.presets ?? [], m] });
        }, children: [
          /* @__PURE__ */ y.jsx(eh, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, h) => /* @__PURE__ */ y.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ y.jsx("strong", { children: m.name }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: h === 0, onClick: () => l({ ...i, presets: vr(i.presets ?? [], h, h - 1) }), children: /* @__PURE__ */ y.jsx(Wp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: h === (i.presets?.length ?? 0) - 1, onClick: () => l({ ...i, presets: vr(i.presets ?? [], h, h + 1) }), children: /* @__PURE__ */ y.jsx(Pp, {}) }),
            /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => l({ ...i, presets: (i.presets ?? []).filter((v, g) => g !== h) }), children: /* @__PURE__ */ y.jsx(br, {}) })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((v) => /* @__PURE__ */ y.jsxs("label", { children: [
            v.replaceAll("_", " "),
            /* @__PURE__ */ y.jsx("input", { value: m[v] ?? "", onChange: (g) => {
              const b = [...i.presets ?? []];
              b[h] = { ...m, [v]: g.target.value || void 0 }, l({ ...i, presets: b });
            } })
          ] }, v)),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ y.jsxs("select", { value: m.strategy, onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, strategy: v.target.value }, l({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ y.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ y.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, cleaning_type: v.target.value }, l({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ y.jsx("option", { value: "mop", children: "Mop only" }),
              /* @__PURE__ */ y.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ y.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ y.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (v) => {
              const g = [...i.presets ?? []];
              g[h] = { ...m, cleaning_count: Number(v.target.value) }, l({ ...i, presets: g });
            }, children: [
              /* @__PURE__ */ y.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ y.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${h}`)),
      /* @__PURE__ */ y.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ y.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (m) => l({ ...i, default_preset: m.target.value }), children: [
          /* @__PURE__ */ y.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ y.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (i.presets ?? []).map((m) => /* @__PURE__ */ y.jsx("option", { value: m.id, children: m.name }, m.id))
        ] })
      ] })
    ] })
  ] });
}
const Nw = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Ro extends Error {
  constructor(i, l, r) {
    super(l, r), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function Dw(n, i) {
  return n.floors.find((l) => l.assisted_carry && l.id === i?.floor_id) ?? n.floors.find((l) => l.assisted_carry);
}
function Rw(n, i) {
  const l = i.entities?.assisted_carry_stage, r = l ? n.states[l]?.state : void 0;
  return r && Nw.has(r) ? r : "idle";
}
function Zw(n) {
  return !["idle", "complete", "error"].includes(n);
}
function Uw(n, i, l) {
  const r = l.cleaning_type === "vacuum_then_mop", s = l.cleaning_type === "mop";
  if (l.strategy !== "smartplan" && !r && !s && !l.fan_speed)
    throw new Ro("prepare", "Suction is required");
  if (l.strategy !== "smartplan" && !r && l.cleaning_type !== "vacuum" && (!l.mop_mode || !l.mop_intensity))
    throw new Ro("prepare", "Water flow and route are required");
  const d = [...new Set(i)], f = n.rooms.filter((h) => d.includes(h.segment_id)), m = n.rooms.filter((h) => h.include_in_floor_clean !== !1 && h.area_id).map((h) => h.segment_id);
  return {
    segment_ids: d,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: f.map((h) => h.area_id).filter((h) => !!h),
    whole_floor: d.length === m.length && m.every((h) => d.includes(h)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: l.strategy,
    cleaning_type: l.cleaning_type,
    fan_speed: l.strategy === "smartplan" || r || s ? void 0 : l.fan_speed,
    mop_mode: l.strategy === "smartplan" || l.cleaning_type === "vacuum" || r ? void 0 : l.mop_mode,
    mop_intensity: l.strategy === "smartplan" || l.cleaning_type === "vacuum" || r ? void 0 : l.mop_intensity,
    cleaning_count: l.strategy === "smartplan" || l.cleaning_type === "vacuum_then_mop" ? 1 : l.cleaning_count
  };
}
function Yw(n) {
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
function Bw(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((h) => Number.isInteger(h)) || ![1, 2].includes(Number(i.c))) return;
      const l = i.g === void 0 ? "custom" : i.g, r = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(l)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(r))) return;
      const s = typeof i.f == "string" ? i.f : void 0, d = typeof i.m == "string" ? i.m : void 0, f = typeof i.w == "string" ? i.w : void 0, m = r === "vacuum_then_mop";
      return l === "custom" && !m && r !== "mop" && !s || l === "custom" && !m && r !== "vacuum" && (!d || !f) ? void 0 : {
        segment_ids: i.s,
        floor_id: typeof i.d == "string" ? i.d : void 0,
        map_select_option: typeof i.o == "string" ? i.o : void 0,
        area_ids: Array.isArray(i.a) && i.a.every((h) => typeof h == "string") ? i.a : void 0,
        whole_floor: i.e === 1,
        vacuum_then_mop_routine: typeof i.r == "string" ? i.r : void 0,
        strategy: l,
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
function zi(n, i, l) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new Ro(l, `${i ?? "entity"} is unavailable`);
  return i;
}
async function gi(n, i, l) {
  const r = zi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: l }, { entity_id: r });
}
async function Hw(n, i, l) {
  const r = zi(n, i.entities?.assisted_carry_job, "save_job"), s = zi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: Yw(l) }, { entity_id: r }), await gi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function Xw(n, i, l, r) {
  const s = zi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), d = l.rooms.filter((m) => r.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (d.length === 0) throw new Ro("start_upstairs", "No mapped rooms were saved");
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
async function qw(n, i) {
  const l = zi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: l });
}
async function Mh(n, i) {
  await gi(n, i, "idle");
  const l = zi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: l });
}
const $w = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Lw = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Cv = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, Vw = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, Gw = {
  normal: 0,
  warm: 1,
  hot: 2
}, Qw = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, Kw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class Tn extends Error {
  constructor(i, l, r) {
    super(l, r), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function en(n, i, l, r) {
  const s = { command: l };
  r !== void 0 && (s.params = r), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function yr(n, i, l) {
  const r = n[i];
  if (r === void 0) throw new Tn(l, `Unsupported value: ${i}`);
  return r;
}
function Jw(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new Tn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function Pw(n, i, l, r) {
  const s = i.entities?.[Cv[l]];
  if (!s) return;
  const d = s.split(".")[0];
  if (typeof r == "boolean") {
    if (!["input_boolean", "switch"].includes(d))
      throw new Tn(l, `${s} is not a boolean helper`);
    await n.callService(d, r ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(d))
    throw new Tn(l, `${s} is not a select helper`);
  await n.callService(d, "select_option", { option: r }, { entity_id: s });
}
async function Ww(n, i, l, r) {
  try {
    switch (l) {
      case "mop_wash_frequency":
        await en(n, i, "set_smart_wash_params", Jw(String(r)));
        break;
      case "wash_mode":
        await en(n, i, "set_wash_towel_mode", {
          wash_mode: yr(Vw, String(r), l)
        });
        break;
      case "wash_temperature":
        await en(n, i, "set_wash_water_temperature", {
          values: yr(Gw, String(r), l)
        });
        break;
      case "auto_empty":
        await en(n, i, "set_dust_collection_switch_status", { status: r ? 1 : 0 });
        break;
      case "empty_mode":
        await en(n, i, "set_dust_collection_mode", {
          mode: yr(Qw, String(r), l)
        });
        break;
      case "auto_dry":
        await en(n, i, "app_set_dryer_setting", { status: r ? 1 : 0 });
        break;
      case "dry_duration":
        await en(n, i, "app_set_dryer_setting", {
          on: { dry_time: yr(Kw, String(r), l) }
        });
        break;
    }
    await Pw(n, i, l, r);
  } catch (s) {
    throw s instanceof Tn ? s : new Tn(l, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function rc(n, i, l, r = !1) {
  const s = `${r ? "stop" : "start"}_${l}`;
  try {
    l === "empty" && await en(n, i, r ? "app_stop_collect_dust" : "app_start_collect_dust"), l === "wash" && await en(n, i, r ? "app_stop_wash" : "app_start_wash"), l === "dry" && await en(n, i, "app_set_dryer_status", { status: r ? 0 : 1 }), l === "drain" && await en(n, i, "app_empty_rinse_tank_water");
  } catch (d) {
    throw new Tn(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
const Fw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), bc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), Iw = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Me extends Error {
  constructor(i, l, r) {
    super(l, r), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function ez(n, i, l, r, s, d) {
  const f = Date.now();
  for (; Date.now() - f < r; ) {
    if (n().states[i]?.state === l) return;
    await d(s);
  }
  throw new Me("wait_for_state", `${i} did not become “${l}” within ${r / 1e3}s`);
}
function Ao(n, i, l, r) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new Me(r, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(l)) throw new Me(r, `${i} does not support “${l}”`);
}
async function zo(n, i, l, r, s, d, f, m = !0) {
  const h = n();
  if (Ao(h, i, l, r), h.states[i]?.state !== l)
    try {
      if (await h.callService("select", "select_option", { option: l }, { entity_id: i }), !m) return;
      await ez(n, i, l, s, d, f);
    } catch (v) {
      throw v instanceof Me ? new Me(r, v.message, { cause: v }) : new Me(r, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function tz(n, i) {
  const l = {
    fan_power: 102,
    water_box_mode: 200
  };
  i.entities?.mop_mode && (l.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [l] },
      { entity_id: i.entity }
    );
  } catch (r) {
    throw new Me("set_cleaning_mode", r instanceof Error ? r.message : String(r), { cause: r });
  }
}
async function Uc(n, i, l, r, s) {
  try {
    await n.callService("vacuum", "send_command", { command: l, params: r }, { entity_id: i.entity });
  } catch (d) {
    throw new Me(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
async function jh(n, i, l) {
  await Uc(n, i, "set_clean_repeat_times", { repeat: l }, "set_cleaning_count");
}
async function nz(n, i) {
  await Uc(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function Ch(n, i, l) {
  const r = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(r) ? r.map(String) : []).includes(l))
    throw new Me("set_fan_speed", `${i} does not support “${l}”`);
}
async function az({
  getHass: n,
  config: i,
  floor: l,
  rooms: r,
  draft: s,
  zone: d,
  timeoutMs: f = 1e4,
  pollMs: m = 150,
  sleep: h = (v) => new Promise((g) => setTimeout(g, v))
}) {
  const v = n(), g = Ac(v, i), b = v.states[i.entity];
  if (!b || b.state === "unavailable") throw new Me("preflight", `${i.entity} is unavailable`);
  if (D0(b.state)) throw new Me("preflight", `Vacuum is ${b.state}`);
  const x = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (x && !["none", "unknown", "unavailable", ""].includes(x.state))
    throw new Me("preflight", `Vacuum error: ${x.state}`);
  const T = [...new Set(r.map((q) => q.area_id).filter((q) => !!q))];
  if (!d && T.length === 0) throw new Me("preflight", "Select at least one room mapped to a Home Assistant area");
  if (s.cleaning_type === "mop" && !i.enable_mop_only)
    throw new Me("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const j = s.cleaning_type === "mop" ? "mop" : s.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, Q = j ? g.mopRoutes?.[j] : void 0;
  if (s.mop_mode && Q && !Q.includes(s.mop_mode))
    throw new Me("preflight", `Mop route “${s.mop_mode}” is not allowed for ${j}`);
  if (s.strategy === "smartplan" && !g.hasSmartPlan)
    throw new Me("preflight", "This model does not offer AI SmartPlan");
  if (d && (s.strategy !== "custom" || !bc.has(s.cleaning_type)))
    throw new Me("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (d && (![d.x1, d.y1, d.x2, d.y2].every(Number.isFinite) || d.x2 <= d.x1 || d.y2 <= d.y1))
    throw new Me("preflight", "The selected zone is invalid");
  const $ = i.entities?.map_select, K = async () => {
    if (!(i.floors.length <= 1)) {
      if (!$ || !l.map_select_option) throw new Me("select_floor", "This floor has no map selector mapping");
      if (await zo(n, $, l.map_select_option, "select_floor", f, m, h), m > 0 && await h(m), n().states[$]?.state !== l.map_select_option)
        throw new Me("select_floor", `${$} did not stay on “${l.map_select_option}”`);
    }
  };
  if (await K(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const q = l.vacuum_then_mop_routine;
    if (q) {
      const J = n().states[q];
      if (!J || J.state === "unavailable")
        throw new Me("start_vacuum_then_mop", `${q} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: q });
      } catch (re) {
        throw new Me("start_vacuum_then_mop", re instanceof Error ? re.message : String(re), { cause: re });
      }
      return l.rooms.filter((re) => re.include_in_floor_clean !== !1).map((re) => re.area_id).filter((re) => !!re);
    }
    const I = i.entities?.vacuum_then_mop_script, B = I ? n().states[I] : void 0;
    if (!I || !B || B.state === "unavailable")
      throw new Me("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const V = i.entities?.cleaning_mode;
    if (!V)
      throw new Me("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (Ao(n(), V, "vacuum", "set_cleaning_mode"), Ao(n(), V, "mop", "set_cleaning_mode"), s.mop_mode) {
      const J = i.entities?.mop_mode;
      if (!J) throw new Me("set_mop_mode", "The selected profile requires a mop-mode entity");
      Ao(n(), J, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const J = i.entities?.mop_intensity;
      if (!J) throw new Me("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      Ao(n(), J, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && Ch(n(), i.entity, s.fan_speed), await K();
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
    await nz(n(), i), g.roomRepeatStrategy === "set_clean_repeat_times" && await jh(n(), i, 1);
  else {
    const q = i.entities?.cleaning_mode, I = Iw[s.cleaning_type], B = q && n().states[q]?.attributes.options;
    if (q && Array.isArray(B) && B.map(String).includes(I))
      await zo(
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
      await tz(n(), i);
    else {
      if (s.cleaning_type === "vacuum")
        throw new Me("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (s.cleaning_type === "mop")
        throw new Me("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const V = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!V) throw new Me("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[V]?.state === "smart_mode" && Fw.has(s.mop_mode) && await zo(n, V, "custom", "leave_smartplan", f, m, h), await zo(n, V, s.mop_mode, "set_mop_mode", f, m, h);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const J = i.entities?.mop_intensity;
      if (!J) throw new Me("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await zo(n, J, s.mop_intensity, "set_mop_intensity", f, m, h);
    }
    if (s.fan_speed && s.cleaning_type !== "mop") {
      const J = n();
      Ch(J, i.entity, s.fan_speed);
      try {
        await J.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch (re) {
        throw new Me("set_fan_speed", re instanceof Error ? re.message : String(re), { cause: re });
      }
    }
    !d && g.roomRepeatStrategy === "set_clean_repeat_times" && await jh(n(), i, s.cleaning_count);
  }
  await K();
  const ae = new Set(r.map((q) => q.segment_id)), L = r.length === l.rooms.length && l.rooms.every((q) => ae.has(q.segment_id)), G = !d && s.cleaning_count === 2 && g.roomRepeatStrategy === "app_segment_clean";
  try {
    d ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...d, repeats: s.cleaning_count },
      { entity_id: i.entity }
    ) : G ? await Uc(
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
const iz = {
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
}, oz = {
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
}, lz = {
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
}, rz = {
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
  return n === "nl" ? oz[i] : n === "pl" ? rz[i] : n === "tr" ? lz[i] : iz[i];
}
const Oh = {
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
function Ov(n, i) {
  return Oh[n ?? "en"]?.[i] ?? Oh.en?.[i] ?? i.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
const Nh = [
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
], uz = ["medium", "standard", "mild", "low", "intense", "high", "slight", "moderate", "extreme"];
function sz(n, i) {
  if (n.cleaning_type === "vacuum" || !n.mop_intensity || i.mopIntensities.includes(n.mop_intensity))
    return n;
  const l = uz.find((r) => i.mopIntensities.includes(r));
  return l ? { ...n, mop_intensity: l } : n;
}
function cz(n, i, l, r) {
  if (l.strategy === "smartplan" && !i.hasSmartPlan) return "SmartPlan";
  const s = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (l.cleaning_type === "vacuum" && !s)
    return "cleaning mode “vacuum”";
  if (l.cleaning_type === "mop" && !n.enable_mop_only)
    return "Mop only (set enable_mop_only: true)";
  if (l.cleaning_type === "mop" && !i.cleaningModes.includes("mop"))
    return "cleaning mode “mop”";
  if (l.cleaning_type === "vacuum_then_mop") {
    if (r?.vacuum_then_mop_routine || r?.assisted_carry && n.entities?.assisted_carry_start_script) return;
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!i.cleaningModes.includes("vacuum") || !i.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (l.fan_speed && !i.fanSpeeds.includes(l.fan_speed)) return `fan speed “${l.fan_speed}”`;
  if (l.cleaning_type !== "vacuum" && l.mop_mode && !i.mopModes.includes(l.mop_mode))
    return `mop mode “${l.mop_mode}”`;
  if (l.cleaning_type !== "vacuum" && l.mop_intensity && !i.mopIntensities.includes(l.mop_intensity))
    return `mop intensity “${l.mop_intensity}”`;
}
function dz(n, i, l) {
  return [...(n.enable_mop_only ? Nh : Nh.filter((s) => s.cleaning_type !== "mop")).map((s) => sz(s, i)), ...n.presets ?? []].map((s) => {
    const d = cz(n, i, s, l);
    return {
      preset: s,
      available: !d,
      reason: d ? `Unsupported ${d}` : void 0
    };
  });
}
function Co(n) {
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
function xa(n, i, l) {
  const r = i.entities?.[Cv[l]], s = r ? n.states[r]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? Lw[l] : l === "auto_empty" || l === "auto_dry" ? s === "on" : s;
}
function Mo(n, i) {
  const l = {
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
  return l[i]?.[r] ?? i;
}
function xo({
  label: n,
  setting: i,
  value: l,
  language: r,
  disabled: s,
  onChange: d
}) {
  return /* @__PURE__ */ y.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ y.jsx("span", { children: n }),
    /* @__PURE__ */ y.jsx("select", { "aria-label": n, value: l, disabled: s, onChange: (f) => d(f.target.value), children: $w[i].map((f) => /* @__PURE__ */ y.jsx("option", { value: f, children: Mo(r, f) }, f)) })
  ] });
}
function uc({
  label: n,
  checked: i,
  disabled: l,
  onChange: r
}) {
  return /* @__PURE__ */ y.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ y.jsx("span", { children: n }),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": i,
        className: `dock-toggle ${i ? "active" : ""}`,
        disabled: l,
        onClick: () => r(!i),
        children: /* @__PURE__ */ y.jsx("span", {})
      }
    )
  ] });
}
function fz({
  hass: n,
  config: i,
  language: l,
  washing: r,
  emptying: s,
  drying: d,
  dryingRemaining: f,
  pending: m,
  onClose: h,
  onAction: v,
  onSetting: g,
  onChildLock: b
}) {
  const x = !!m, T = i.entities?.dock_child_lock, j = T ? n.states[T]?.state === "on" : !1, Q = String(xa(n, i, "mop_wash_frequency")), $ = String(xa(n, i, "wash_mode")), K = String(xa(n, i, "wash_temperature")), ae = !!xa(n, i, "auto_empty"), L = String(xa(n, i, "empty_mode")), G = !!xa(n, i, "auto_dry"), q = String(xa(n, i, "dry_duration")), I = [
    { action: "empty", label: Y(l, "empty"), active: s, icon: /* @__PURE__ */ y.jsx(br, {}), detail: Mo(l, L) },
    { action: "wash", label: Y(l, "wash"), active: r, icon: /* @__PURE__ */ y.jsx(th, {}), detail: `${Mo(l, $)} · ${Mo(l, K)}` },
    { action: "dry", label: Y(l, "dry"), active: d, icon: /* @__PURE__ */ y.jsx(nh, {}), detail: d ? f : Mo(l, q) }
  ];
  return /* @__PURE__ */ y.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Y(l, "close"), onClick: h }),
    /* @__PURE__ */ y.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ y.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ y.jsxs("header", { children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("h2", { id: "dock-sheet-title", children: Y(l, "dockStation") }),
          /* @__PURE__ */ y.jsx("p", { children: Y(l, "dockOverview") })
        ] }),
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "icon-button", "aria-label": Y(l, "close"), onClick: h, children: /* @__PURE__ */ y.jsx(Tc, {}) })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ y.jsx("div", { className: "dock-actions", children: I.map((B) => /* @__PURE__ */ y.jsxs(
          "button",
          {
            type: "button",
            className: B.active ? "active" : "",
            disabled: x,
            onClick: () => v(B.action, B.active),
            children: [
              /* @__PURE__ */ y.jsx("span", { className: "dock-action-icon", children: B.icon }),
              /* @__PURE__ */ y.jsx("strong", { children: B.active ? Y(l, "stop") : B.label }),
              /* @__PURE__ */ y.jsx("small", { children: B.active ? Y(l, "active") : B.detail })
            ]
          },
          B.action
        )) }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(th, {}),
            Y(l, "dockSettings")
          ] }),
          /* @__PURE__ */ y.jsx(xo, { label: Y(l, "mopWashFrequency"), setting: "mop_wash_frequency", value: Q, language: l, disabled: x, onChange: (B) => g("mop_wash_frequency", B) }),
          /* @__PURE__ */ y.jsx(xo, { label: Y(l, "washingMode"), setting: "wash_mode", value: $, language: l, disabled: x, onChange: (B) => g("wash_mode", B) }),
          /* @__PURE__ */ y.jsx(xo, { label: Y(l, "washTemperature"), setting: "wash_temperature", value: K, language: l, disabled: x, onChange: (B) => g("wash_temperature", B) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(br, {}),
            Y(l, "dustbin")
          ] }),
          /* @__PURE__ */ y.jsx(uc, { label: Y(l, "autoEmpty"), checked: ae, disabled: x, onChange: (B) => g("auto_empty", B) }),
          /* @__PURE__ */ y.jsx(xo, { label: Y(l, "emptyMode"), setting: "empty_mode", value: L, language: l, disabled: x, onChange: (B) => g("empty_mode", B) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(nh, {}),
            Y(l, "drying")
          ] }),
          /* @__PURE__ */ y.jsx(uc, { label: Y(l, "autoDry"), checked: G, disabled: x, onChange: (B) => g("auto_dry", B) }),
          /* @__PURE__ */ y.jsx(xo, { label: Y(l, "dryDuration"), setting: "dry_duration", value: q, language: l, disabled: x, onChange: (B) => g("dry_duration", B) })
        ] }),
        /* @__PURE__ */ y.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ y.jsxs("h3", { children: [
            /* @__PURE__ */ y.jsx(Jh, {}),
            Y(l, "safetyMaintenance")
          ] }),
          T && /* @__PURE__ */ y.jsx(uc, { label: Y(l, "childLock"), checked: j, disabled: x, onChange: b }),
          /* @__PURE__ */ y.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ y.jsx(Xg, {}),
            /* @__PURE__ */ y.jsxs("span", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: Y(l, "drainWaterTank") }),
              /* @__PURE__ */ y.jsx("small", { children: Y(l, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ y.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function Sc({ icon: n, className: i }) {
  return n ? oe.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const Dh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], mz = ["vacuum_only", "vacuum_and_mop", "mop_only"], pz = ["quiet", "balanced", "turbo", "max", "max_plus"], hz = ["quiet", "balanced", "turbo", "max"], vz = ["fast", "standard", "deep"], _z = ["mild", "standard", "intense", "slight", "low", "medium", "moderate", "high", "extreme"], yz = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, gz = {
  smartplan: "smartPlan",
  vacuum_then_mop: "vacuumThenMop",
  vacuum_and_mop: "vacuumAndMop",
  vacuum_only: "vacuumOnly",
  mop_only: "mopOnly"
};
function sc({
  value: n,
  options: i,
  onChange: l,
  title: r,
  language: s
}) {
  return i.length === 0 ? null : /* @__PURE__ */ y.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ y.jsx("span", { children: r }),
    /* @__PURE__ */ y.jsx("div", { className: "option-strip", children: i.map((d) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        className: n === d ? "active" : "",
        onClick: () => l(d),
        children: Ov(s, d)
      },
      d
    )) })
  ] });
}
function Rh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : i === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function bz({
  language: n,
  draft: i,
  capabilities: l,
  presets: r,
  selectedRoomNames: s,
  submitting: d,
  assistedCarry: f = !1,
  zoneCleaning: m = !1,
  mopRoutes: h,
  onDraftChange: v,
  onClose: g,
  onStart: b
}) {
  const T = (m ? mz : Dh).map((V) => r.find(({ preset: J }) => J.id === V)).filter((V) => !!V).filter(({ preset: V, available: J }) => V.id !== "smartplan" || J), j = r.filter(
    ({ preset: V }) => !Dh.includes(V.id) && (!m || V.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(V.cleaning_type ?? "vacuum"))
  ), $ = (i.cleaning_type === "vacuum" ? pz : hz).filter((V) => l.fanSpeeds.includes(V)), ae = ((i.cleaning_type === "mop" ? h?.mop : h?.vacuum_and_mop) ?? vz).filter((V) => l.mopModes.includes(V)), L = ae.includes(i.mop_mode ?? "") ? i.mop_mode : ae[0], G = _z.filter((V) => l.mopIntensities.includes(V)), q = Math.max(0, G.indexOf(i.mop_intensity ?? "medium")), I = yz[G[q]], B = i.strategy === "smartplan" ? Y(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? Y(n, "vacuumDescription") : i.cleaning_type === "mop" ? Y(n, "mopOnlyDescription") : i.cleaning_type === "vacuum_then_mop" ? Y(n, "vacuumThenMopDescription") : Y(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ y.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Y(n, "close"), onClick: g }),
    /* @__PURE__ */ y.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ y.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ y.jsxs("header", { children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("h2", { id: "job-sheet-title", children: f ? Y(n, "assistedCarryTitle") : Y(n, "configureTitle") }),
          /* @__PURE__ */ y.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "icon-button", "aria-label": Y(n, "close"), onClick: g, children: /* @__PURE__ */ y.jsx(Tc, {}) })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            className: "cleaning-mode-tabs",
            role: "tablist",
            "aria-label": Y(n, "cleaningType"),
            style: { "--mode-count": Math.min(T.length, 4) },
            children: T.map(({ preset: V, available: J, reason: re }) => /* @__PURE__ */ y.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": Rh(i, V.id),
                className: Rh(i, V.id) ? "active" : "",
                disabled: !J || d,
                title: re,
                onClick: () => v(Co(V)),
                children: [
                  /* @__PURE__ */ y.jsx(Sc, { icon: V.icon }),
                  /* @__PURE__ */ y.jsx("span", { children: Y(n, gz[V.id]) })
                ]
              },
              V.id
            ))
          }
        ),
        /* @__PURE__ */ y.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ y.jsx("p", { className: "mode-description", children: B }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            i.cleaning_type !== "mop" && /* @__PURE__ */ y.jsx(
              sc,
              {
                language: n,
                title: Y(n, "suction"),
                value: i.fan_speed,
                options: $,
                onChange: (V) => v({ ...i, preset_id: "custom_draft", fan_speed: V })
              }
            ),
            i.cleaning_type !== "vacuum" && G.length > 0 && /* @__PURE__ */ y.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ y.jsx("span", { children: Y(n, "waterFlow") }),
              /* @__PURE__ */ y.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ y.jsx("strong", { children: Ov(n, G[q]) }),
                I !== void 0 && /* @__PURE__ */ y.jsx("output", { children: I })
              ] }),
              /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsx(
              sc,
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
            /* @__PURE__ */ y.jsx(
              sc,
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
        !f && j.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ y.jsx("span", { children: Y(n, "savedProfiles") }),
          /* @__PURE__ */ y.jsx("div", { children: j.map(({ preset: V, available: J, reason: re }) => /* @__PURE__ */ y.jsxs(
            "button",
            {
              type: "button",
              disabled: !J || d,
              title: re,
              className: i.preset_id === V.id ? "active" : "",
              onClick: () => v(Co(V)),
              children: [
                /* @__PURE__ */ y.jsx(Sc, { icon: V.icon }),
                " ",
                V.name
              ]
            },
            V.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("footer", { children: [
        /* @__PURE__ */ y.jsx("button", { type: "button", className: "secondary", disabled: d, onClick: g, children: Y(n, "cancel") }),
        /* @__PURE__ */ y.jsx(
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
}, Sz = function(n, i) {
  return i;
}, Ne = function(n, i, l) {
  l && typeof l == "function" && l(n, i);
}, wz = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, zz = function(n) {
  return n;
}, xz = function(n) {
  return n * n;
}, kz = function(n) {
  return n * (2 - n);
}, Tz = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, Ez = function(n) {
  return n * n * n;
}, Az = function(n) {
  return --n * n * n + 1;
}, Mz = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, jz = function(n) {
  return n * n * n * n;
}, Cz = function(n) {
  return 1 - --n * n * n * n;
}, Oz = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, Nz = function(n) {
  return n * n * n * n * n;
}, Dz = function(n) {
  return 1 + --n * n * n * n * n;
}, Rz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Nv = {
  easeOut: wz,
  linear: zz,
  easeInQuad: xz,
  easeOutQuad: kz,
  easeInOutQuad: Tz,
  easeInCubic: Ez,
  easeOutCubic: Az,
  easeInOutCubic: Mz,
  easeInQuart: jz,
  easeOutQuart: Cz,
  easeInOutQuart: Oz,
  easeInQuint: Nz,
  easeOutQuint: Dz,
  easeInOutQuint: Rz
}, Dv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, tn = function(n) {
  n.mounted && (Dv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Rv(n, i, l, r) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    tn(n), n.animation = function() {
      if (!n.mounted)
        return Dv(n.animation);
      var f = (/* @__PURE__ */ new Date()).getTime() - s, m = f / l, h = Nv[i], v = h(m);
      f >= l ? (r(d), n.animation = null) : n.animation && (r(v), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function Zz(n) {
  var i = n.scale, l = n.positionX, r = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(l) || Number.isNaN(r));
}
function ta(n, i, l, r) {
  var s = Zz(i);
  if (!(!n.mounted || !s)) {
    var d = n.setState, f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = i.scale - m, b = i.positionX - h, x = i.positionY - v;
    l === 0 ? d(i.scale, i.positionX, i.positionY) : Rv(n, r, l, function(T) {
      T !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var j = m + g * T, Q = h + b * T, $ = v + x * T;
      d(j, Q, $);
    });
  }
}
function Uz(n, i, l) {
  var r = n.offsetWidth, s = n.offsetHeight, d = i.offsetWidth, f = i.offsetHeight, m = d * l, h = f * l, v = r - m, g = s - h;
  return {
    wrapperWidth: r,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: v,
    newContentHeight: h,
    newDiffHeight: g
  };
}
var Yz = function(n, i, l, r, s, d, f) {
  var m = n > i ? l * (f ? 0.5 : 1) : 0, h = r > s ? d * (f ? 0.5 : 1) : 0, v = n - i - m, g = m, b = r - s - h, x = h;
  return {
    minPositionX: v,
    maxPositionX: g,
    minPositionY: b,
    maxPositionY: x,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, Yc = function(n, i) {
  var l = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.centerZoomedOut, f = s.disablePadding;
  if (!l || !r)
    throw new Error("Components are not mounted");
  var m = Uz(l, r, i), h = m.wrapperWidth, v = m.wrapperHeight, g = m.newContentWidth, b = m.newContentHeight, x = m.newDiffWidth, T = m.newDiffHeight, j = Yz(h, g, x, v, b, T, !!d), Q = h >= g && v >= b;
  f && Q && !d && (j.minPositionX = 0, j.maxPositionX = 0, j.minPositionY = 0, j.maxPositionY = 0);
  var $ = n.setup, K = $.minPositionX, ae = $.maxPositionX, L = $.minPositionY, G = $.maxPositionY;
  return K != null && (j.minPositionX = h * (1 - i) + K * i), ae != null && (j.maxPositionX = ae * i), L != null && (j.minPositionY = v * (1 - i) + L * i), G != null && (j.maxPositionY = G * i), j;
}, Zo = function(n, i, l, r) {
  return r ? n < i ? Ta(i, 2) : n > l ? Ta(l, 2) : Ta(n, 2) : Ta(n, 2);
}, xi = function(n, i) {
  var l = Yc(n, i);
  return n.bounds = l, l;
};
function Bo(n, i, l, r, s, d, f) {
  var m = l.minPositionX, h = l.minPositionY, v = l.maxPositionX, g = l.maxPositionY, b = 0, x = 0;
  f && (b = s, x = d);
  var T = Zo(n, m - b, v + b, r), j = Zo(i, h - x, g + x, r);
  return { x: T, y: j };
}
function Dr(n, i, l, r, s, d) {
  var f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = r - m;
  if (typeof i != "number" || typeof l != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: v };
  var b = h - i * g, x = v - l * g, T = Bo(b, x, s, d, 0, 0, null);
  return T;
}
var Zh = 1e-7;
function Ho(n, i, l, r, s) {
  var d = s ? r : 0, f = Math.max(i - d, Zh), m = l + d;
  return !Number.isNaN(l) && n >= m ? m : !Number.isNaN(i) && n <= f ? f : Math.max(n, Zh);
}
var Uh = function(n, i) {
  var l = n.setup.panning.excluded, r = n.isInitialized, s = n.wrapperComponent, d = i.target, f = "shadowRoot" in d && "composedPath" in i, m = f ? i.composedPath().some(function(g) {
    return g instanceof Element ? s?.contains(g) : !1;
  }) : s?.contains(d), h = r && d && m;
  if (!h)
    return !1;
  var v = Xo(d, l);
  return !(v || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, Yh = function(n) {
  var i = n.isInitialized, l = n.isPanning, r = n.setup, s = r.panning.disabled, d = i && l && !s;
  return !!d;
}, Bz = function(n, i) {
  var l = n.state, r = l.positionX, s = l.positionY;
  n.isPanning = !0;
  var d = i.clientX, f = i.clientY;
  n.startCoords = { x: d - r, y: f - s };
}, Hz = function(n, i) {
  var l = i.touches, r = n.state, s = r.positionX, d = r.positionY;
  n.isPanning = !0;
  var f = l.length === 1;
  if (f) {
    var m = l[0].clientX, h = l[0].clientY;
    n.startCoords = { x: m - s, y: h - d };
  }
};
function Xz(n) {
  var i = n.state, l = i.positionX, r = i.positionY, s = i.scale, d = n.setup, f = d.disabled, m = d.limitToBounds, h = d.centerZoomedOut, v = n.wrapperComponent;
  if (!(f || !v || !n.bounds)) {
    var g = n.bounds, b = g.maxPositionX, x = g.minPositionX, T = g.maxPositionY, j = g.minPositionY, Q = l > b || l < x, $ = r > T || r < j, K = l > b ? v.offsetWidth : n.setup.minPositionX || 0, ae = r > T ? v.offsetHeight : n.setup.minPositionY || 0, L = Dr(n, K, ae, s, n.bounds, m || h), G = L.x, q = L.y;
    return {
      scale: s,
      positionX: Q ? G : l,
      positionY: $ ? q : r
    };
  }
}
function Zv(n, i, l, r, s) {
  var d = n.setup.limitToBounds, f = n.wrapperComponent, m = n.bounds, h = n.state, v = h.scale, g = h.positionX, b = h.positionY;
  if (!(f === null || m === null || i === g && l === b)) {
    var x = Bo(i, l, m, d, r, s, f), T = x.x, j = x.y;
    n.setState(v, T, j);
  }
}
var qz = function(n, i, l) {
  var r = n.startCoords, s = n.state, d = n.setup.panning, f = d.lockAxisX, m = d.lockAxisY, h = s.positionX, v = s.positionY;
  if (!r)
    return { x: h, y: v };
  var g = i - r.x, b = l - r.y, x = f ? h : g, T = m ? v : b;
  return { x, y: T };
}, Fn = function(n, i, l) {
  var r = n.setup, s = n.state, d = r.minScale, f = r.disablePadding, m = r.centerZoomedOut, h = l ?? s.scale;
  return i > 0 && h >= d && !f && !m ? i : 0;
}, Wn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Wn || (Wn = {}));
var $z = function(n) {
  var i = n.mounted, l = n.wrapperComponent, r = n.contentComponent, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = s.limitToBounds, h = n.state.scale, v = f.disabled;
  if (v || d || !i || !l || !r)
    return !1;
  if (!m)
    return !0;
  var g = l.offsetWidth < r.offsetWidth * h || l.offsetHeight < r.offsetHeight * h;
  return g;
}, Lz = function(n) {
  var i = n.mounted, l = n.velocity, r = n.bounds, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = f.disabled, h = !m && !d && i;
  return !(!h || !l || !r);
};
function Vz(n, i) {
  var l = n.setup.velocityAnimation, r = l.animationTime, s = l.maxAnimationTime, d = l.inertia;
  return Math.min(r * Math.max(1, Math.abs(i / d)), s);
}
function Bh(n, i, l, r, s, d, f, m, h, v) {
  if (s) {
    if (i > f && l > f) {
      var g = f + (n - f) * v;
      return g > h ? h : g < f ? f : g;
    }
    if (i < d && l < d) {
      var g = d + (n - d) * v;
      return g < m ? m : g > d ? d : g;
    }
  }
  return r ? i : Zo(n, d, f, s);
}
function Gz(n) {
  var i = 1, l = n.offsetWidth / window.innerWidth;
  return Number.isNaN(l) ? i : Math.min(i, l);
}
var cc = function(n, i, l) {
  var r = 0, s = n * l;
  return Number.isNaN(s) ? r : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function Qz(n, i, l) {
  var r, s, d = $z(n);
  if (d) {
    var f = n.lastMousePosition, m = n.velocityTime, h = n.setup, v = n.wrapperComponent, g = h.velocityAnimation, b = g.maxStrengthMouse, x = g.maxStrengthTouch, T = g.sensitivityTouch, j = g.sensitivityMouse, Q = Date.now();
    if (f && m && v) {
      var $ = Gz(v), K = (r = {}, r[Wn.TOUCH] = T, r[Wn.MOUSE] = j, r)[l], ae = (s = {}, s[Wn.TOUCH] = x, s[Wn.MOUSE] = b, s)[l], L = i.x - f.x, G = i.y - f.y, q = cc(L / $, ae, K), I = cc(G / $, ae, K), B = Q - m, V = L * L + G * G, J = cc(Math.sqrt(V) / B, ae, K);
      n.velocity = { velocityX: q, velocityY: I, total: J };
    }
    n.lastMousePosition = i, n.velocityTime = Q;
  }
}
function Kz(n) {
  var i = n.velocity, l = n.bounds, r = n.setup, s = n.wrapperComponent, d = Lz(n);
  if (!(!d || !i || !l || !s)) {
    var f = i.velocityX, m = i.velocityY, h = i.total, v = l.maxPositionX, g = l.minPositionX, b = l.maxPositionY, x = l.minPositionY, T = r.limitToBounds, j = r.autoAlignment, Q = r.zoomAnimation, $ = r.panning, K = $.lockAxisY, ae = $.lockAxisX, L = Q.animationType, G = j.sizeX, q = j.sizeY, I = j.velocityAlignmentTime, B = I, V = Vz(n, h), J = Math.max(V, B), re = Fn(n, G), ze = Fn(n, q), fe = re * s.offsetWidth / 100, xe = ze * s.offsetHeight / 100, W = v + fe, ne = g - fe, E = b + xe, X = x - xe, F = n.state, he = (/* @__PURE__ */ new Date()).getTime();
    Rv(n, L, J, function(se) {
      var w = n.state, N = w.scale, P = w.positionX, te = w.positionY, pe = (/* @__PURE__ */ new Date()).getTime() - he, _e = pe / B, be = Nv[j.animationType], Ge = 1 - be(Math.min(1, _e)), $e = 1 - se, Pt = P + f * $e, Ut = te + m * $e, rn = Bh(Pt, F.positionX, P, ae, T, g, v, ne, W, Ge), na = Bh(Ut, F.positionY, te, K, T, x, b, X, E, Ge);
      if (P !== Pt || te !== Ut) {
        n.setState(N, rn, na);
        var St = n.props.onPanning;
        St && St(Ae(n), {});
      }
    });
  }
}
function Hh(n, i) {
  var l = n.state, r = l.scale, s = l.positionX, d = l.positionY;
  n.panStartPosition = { x: s, y: d }, tn(n), xi(n, r), window.TouchEvent !== void 0 && i instanceof TouchEvent ? Hz(n, i) : Bz(n, i);
}
function Uv(n, i) {
  var l = n.state.scale, r = n.setup, s = r.minScale, d = r.autoAlignment, f = d.disabled, m = d.sizeX, h = d.sizeY, v = d.animationTime, g = d.animationType, b = f || l < s || !m && !h;
  if (!b) {
    var x = Xz(n);
    x && ta(n, x, v, g);
  }
}
function Xh(n, i, l, r) {
  var s = n.startCoords, d = n.setup, f = d.autoAlignment, m = f.sizeX, h = f.sizeY;
  if (s) {
    var v = qz(n, i, l), g = v.x, b = v.y, x = Fn(n, m), T = Fn(n, h);
    Qz(n, { x: g, y: b }, r), Zv(n, g, b, x, T);
  }
}
function Jz(n, i) {
  if (n.isPanning) {
    var l = n.velocity, r = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var d = n.state, f = d.positionX, m = d.positionY, h = d.scale, v = n.panStartPosition;
    if (n.panStartPosition = null, v) {
      var g = f - v.x, b = m - v.y;
      if (g * g + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var x = r?.offsetWidth || 0, T = r?.offsetHeight || 0, j = (s?.offsetWidth || 0) * h, Q = (s?.offsetHeight || 0) * h, $ = !n.setup.limitToBounds || x < j || T < Q, K = !i && l && l.total > 0.1 && $;
    K ? Kz(n) : Uv(n);
  }
}
function Bc(n, i, l, r) {
  var s = n.setup, d = s.minScale, f = s.maxScale, m = s.limitToBounds, h = Ho(Ta(i, 2), d, f, 0, !1), v = xi(n, h), g = Dr(n, l, r, h, v, m), b = g.x, x = g.y;
  return { scale: h, positionX: b, positionY: x };
}
function Hc(n, i, l) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.minScale, m = d.maxScale, h = d.limitToBounds, v = d.zoomAnimation, g = v.disabled, b = v.animationTime, x = v.animationType, T = r >= f && r <= m, j = g || T;
  if ((r >= 1 || h) && Uv(n), !(j || !s || !n.mounted)) {
    var Q = i || s.offsetWidth / 2, $ = l || s.offsetHeight / 2, K = r < f ? f : m, ae = Bc(n, K, Q, $);
    ae && ta(n, ae, b, x);
  }
}
var Kt = function() {
  return Kt = Object.assign || function(i) {
    for (var l, r = 1, s = arguments.length; r < s; r++) {
      l = arguments[r];
      for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (i[d] = l[d]);
    }
    return i;
  }, Kt.apply(this, arguments);
};
function qh(n, i, l) {
  for (var r = 0, s = i.length, d; r < s; r++)
    (d || !(r in i)) && (d || (d = Array.prototype.slice.call(i, 0, r)), d[r] = i[r]);
  return n.concat(d || Array.prototype.slice.call(i));
}
var dc = {
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
}, wc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Yv = function(n) {
  var i, l, r, s, d, f, m, h, v, g = Math.max((i = n.minScale) !== null && i !== void 0 ? i : ka.minScale, 1e-7), b = (l = n.maxScale) !== null && l !== void 0 ? l : ka.maxScale, x = (r = n.initialScale) !== null && r !== void 0 ? r : dc.scale, T = Math.min(Math.max(x, g), b), j = Zo((s = n.initialPositionX) !== null && s !== void 0 ? s : dc.positionX, (d = n.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (f = n.maxPositionX) !== null && f !== void 0 ? f : 1 / 0, n.minPositionX != null || n.maxPositionX != null), Q = Zo((m = n.initialPositionY) !== null && m !== void 0 ? m : dc.positionY, (h = n.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (v = n.maxPositionY) !== null && v !== void 0 ? v : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: T,
    scale: T,
    positionX: j,
    positionY: Q
  };
}, $h = function(n) {
  var i = Kt({}, ka);
  return Object.keys(n).forEach(function(l) {
    var r = l, s = typeof n[r] < "u", d = typeof ka[r] < "u";
    if (d && s) {
      var f = Object.prototype.toString.call(ka[r]), m = f === "[object Object]", h = f === "[object Array]";
      m ? i[r] = Kt(Kt({}, ka[r]), n[r]) : h ? i[r] = qh(qh([], ka[r], !0), n[r]) : i[r] = n[r];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, Bv = function(n, i, l) {
  var r = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.maxScale, m = d.minScale, h = d.zoomAnimation, v = d.smooth, g = h.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var b = v ? r * Math.exp(i * l) : r + i * l, x = Ho(Ta(b, 3), m, f, g, !1);
  return x;
};
function Hv(n, i, l, r, s) {
  var d, f, m = n.wrapperComponent, h = n.state, v = h.scale, g = h.positionX, b = h.positionY, x = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var T = x.disabled ? 0 : r, j = m.offsetWidth, Q = m.offsetHeight, $ = (j / 2 - g) / v, K = (Q / 2 - b) / v, ae = Bv(n, i, l), L = Bc(n, ae, $, K);
  if (!L)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var G = n.props, q = G.onZoomStart, I = G.onZoom, B = G.onZoomStop, V = new MouseEvent("mousemove", { bubbles: !0 }), J = Ae(n);
  Ne(J, V, q), Ne(J, V, I), ta(n, L, T, s);
  var re = (f = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
  re && re.setTimeout(function() {
    n.mounted && Ne(Ae(n), V, B);
  }, T);
}
function Xv(n, i, l, r) {
  var s, d, f = n.setup, m = n.wrapperComponent, h = n.contentComponent, v = f.limitToBounds, g = f.centerOnInit, b = Yv(n.props), x = n.state, T = x.scale, j = x.positionX, Q = x.positionY;
  if (m) {
    var $ = b.positionX, K = b.positionY;
    if (g && h) {
      var ae = Xc(b.scale, m, h);
      $ = ae.positionX, K = ae.positionY;
    }
    var L = Yc(n, b.scale), G = Bo($, K, L, v, 0, 0, m), q = {
      scale: b.scale,
      positionX: G.x,
      positionY: G.y
    };
    if (!(T === b.scale && j === b.positionX && Q === b.positionY)) {
      r?.();
      var I = n.props, B = I.onZoomStart, V = I.onZoom, J = I.onZoomStop, re = new MouseEvent("mousemove", { bubbles: !0 }), ze = Ae(n);
      Ne(ze, re, B), Ne(ze, re, V), ta(n, q, i, l);
      var fe = (d = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      fe && fe.setTimeout(function() {
        n.mounted && Ne(Ae(n), re, J);
      }, i);
    }
  }
}
function Pz(n, i, l, r) {
  var s = n.getBoundingClientRect(), d = i.getBoundingClientRect(), f = l.getBoundingClientRect(), m = d.x * r.scale, h = d.y * r.scale;
  return {
    x: (s.x - f.x + m) / r.scale,
    y: (s.y - f.y + h) / r.scale
  };
}
function Wz(n, i, l, r, s) {
  r === void 0 && (r = 0), s === void 0 && (s = 0);
  var d = n.wrapperComponent, f = n.contentComponent, m = n.state, h = n.setup, v = h.limitToBounds, g = h.minScale, b = h.maxScale;
  if (!d || !f)
    return m;
  var x = d.getBoundingClientRect(), T = i.getBoundingClientRect(), j = Pz(i, d, f, m), Q = j.x, $ = j.y, K = T.width / m.scale, ae = T.height / m.scale, L = d.offsetWidth / K, G = d.offsetHeight / ae, q = Ho(l || Math.min(L, G), g, b, 0, !1), I = (x.width - K * q) / 2, B = (x.height - ae * q) / 2, V = (x.left - Q) * q + I + r, J = (x.top - $) * q + B + s, re = Yc(n, q), ze = Bo(V, J, re, v, 0, 0, d), fe = ze.x, xe = ze.y;
  return { positionX: fe, positionY: xe, scale: q };
}
var Fz = function(n) {
  return function(i, l, r) {
    i === void 0 && (i = 0.5), l === void 0 && (l = 300), r === void 0 && (r = "easeOut"), Hv(n, 1, i, l, r);
  };
}, Iz = function(n) {
  return function(i, l, r) {
    i === void 0 && (i = 0.5), l === void 0 && (l = 300), r === void 0 && (r = "easeOut"), Hv(n, -1, i, l, r);
  };
}, ex = function(n) {
  return function(i, l, r, s, d) {
    s === void 0 && (s = 300), d === void 0 && (d = "easeOut");
    var f = n.state, m = f.positionX, h = f.positionY, v = f.scale, g = n.wrapperComponent, b = n.contentComponent, x = n.setup.disabled;
    if (!(x || !g || !b)) {
      var T = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(l) ? h : l,
        scale: Number.isNaN(r) ? v : r
      };
      ta(n, T, s, d);
    }
  };
}, tx = function(n) {
  return function(i, l) {
    i === void 0 && (i = 200), l === void 0 && (l = "easeOut"), Xv(n, i, l);
  };
}, nx = function(n) {
  return function(i, l, r) {
    l === void 0 && (l = 200), r === void 0 && (r = "easeOut");
    var s = n.state, d = n.wrapperComponent, f = n.contentComponent;
    if (d && f) {
      var m = Xc(i || s.scale, d, f);
      ta(n, m, l, r);
    }
  };
}, ax = function(n) {
  return function(i, l, r, s, d, f) {
    r === void 0 && (r = 600), s === void 0 && (s = "easeOut"), d === void 0 && (d = 0), f === void 0 && (f = 0), tn(n);
    var m = n.wrapperComponent, h = typeof i == "string" ? document.getElementById(i) : i;
    if (m && h && m.contains(h)) {
      var v = Wz(n, h, l, d, f);
      ta(n, v, r, s);
    }
  };
}, Ar = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: Fz(n),
    zoomOut: Iz(n),
    setTransform: ex(n),
    resetTransform: tx(n),
    centerView: nx(n),
    zoomToElement: ax(n)
  };
}, ix = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, Ae = function(n) {
  var i = {};
  return Object.assign(i, ix(n)), Object.assign(i, Ar(n)), i;
}, fc = !1;
function mc() {
  try {
    var n = {
      get passive() {
        return fc = !0, !1;
      }
    };
    return n;
  } catch {
    return fc = !1, fc;
  }
}
var gr = ".".concat(wc.wrapperClass), Xo = function(n, i) {
  return i.some(function(l) {
    return n.matches("".concat(gr, " ").concat(l, ", ").concat(gr, " .").concat(l, ", ").concat(gr, " ").concat(l, " *, ").concat(gr, " .").concat(l, " *"));
  });
}, Uo = function(n) {
  n && clearTimeout(n);
}, ox = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, qv = function(n, i, l) {
  var r = ox(l);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(r, ")");
}, Xc = function(n, i, l) {
  var r = l.offsetWidth * n, s = l.offsetHeight * n, d = (i.offsetWidth - r) / 2, f = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: d,
    positionY: f
  };
};
function lx(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function rx(n) {
  return function(i) {
    n.forEach(function(l) {
      typeof l == "function" ? l(i) : l != null && (l.current = i);
    });
  };
}
var $v = function(n, i) {
  var l = n.setup.wheel, r = l.disabled, s = l.wheelDisabled, d = l.touchPadDisabled, f = l.excluded, m = n.isInitialized, h = n.isPanning, v = i.target, g = m && !h && !r && v;
  if (!g || s && !i.ctrlKey || d && i.ctrlKey)
    return !1;
  var b = Xo(v, f);
  if (b)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, ux = function(n, i) {
  var l = n.setup, r = l.disabled, s = l.trackPadPanning, d = s.activationKeys, f = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || r || s.disabled || i.ctrlKey)
    return !1;
  var m = $v(n, i);
  if (m)
    return !1;
  var h = i.target, v = Xo(h, f);
  if (v)
    return !1;
  var g = n.isPressingKeys(d);
  return !!g;
}, sx = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function cx(n, i) {
  var l = sx(n), r = Sz(i, l);
  return r;
}
function Lv(n, i, l) {
  var r = i.getBoundingClientRect(), s = 0, d = 0;
  if ("clientX" in n)
    s = (n.clientX - r.left) / l, d = (n.clientY - r.top) / l;
  else {
    var f = n.touches[0];
    s = (f.clientX - r.left) / l, d = (f.clientY - r.top) / l;
  }
  return (Number.isNaN(s) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: s,
    y: d
  };
}
var dx = function(n, i, l, r, s) {
  var d = n.state.scale, f = n.wrapperComponent, m = n.setup, h = m.maxScale, v = m.minScale, g = m.zoomAnimation, b = m.disablePadding, x = g.size, T = g.disabled;
  if (!f)
    throw new Error("Wrapper is not mounted");
  var j = d + i * l, Q = r ? !1 : !T, $ = Ho(j, v, h, x, Q && !b);
  return $;
}, Vv = function(n, i) {
  var l = n.previousWheelEvent, r = n.state.scale, s = n.setup, d = s.maxScale, f = s.minScale;
  return l ? r < d || r > f || Math.sign(l.deltaY) !== Math.sign(i.deltaY) || l.deltaY > 0 && l.deltaY < i.deltaY || l.deltaY < 0 && l.deltaY > i.deltaY || Math.sign(l.deltaY) !== Math.sign(i.deltaY) : !1;
}, fx = function(n, i) {
  var l = n.setup.pinch, r = l.disabled, s = l.excluded, d = n.isInitialized, f = i.target, m = d && !r && f;
  if (!m)
    return !1;
  var h = Xo(f, s);
  return !h;
}, mx = function(n) {
  var i = n.setup.pinch.disabled, l = n.isInitialized, r = n.pinchStartDistance, s = l && !i && r !== null;
  return !!s;
}, px = function(n, i, l) {
  var r = l.getBoundingClientRect(), s = n.touches, d = s[0].clientX - r.left, f = s[0].clientY - r.top, m = s[1].clientX - r.left, h = s[1].clientY - r.top;
  return {
    x: (d + m) / 2 / i,
    y: (f + h) / 2 / i
  };
}, Gv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, hx = 5, vx = function(n, i) {
  var l = n.pinchStartScale, r = n.pinchStartDistance, s = n.setup, d = s.maxScale, f = s.minScale, m = s.zoomAnimation, h = s.disablePadding, v = s.pinch, g = m.size, b = m.disabled, x = v.step;
  if (!l || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var T = i / r, j = T * l, Q = (j - l) * (x / hx), $ = l + Q, K = $ === 1 / 0 ? 0 : Ta($, 10);
  return Ho(K, f, d, g, !b && !h);
}, Qv = 160, Kv = 100, _x = function(n, i) {
  var l = n.props, r = l.onWheelStart, s = l.onZoomStart;
  n.wheelStopEventTimer || (tn(n), Ne(Ae(n), i, r), Ne(Ae(n), i, s));
}, yx = function(n, i) {
  var l = n.props, r = l.onWheel, s = l.onZoom, d = n.contentComponent, f = n.setup, m = n.state, h = m.scale, v = f.limitToBounds, g = f.centerZoomedOut, b = f.zoomAnimation, x = f.wheel, T = f.disablePadding, j = f.smooth, Q = b.size, $ = b.disabled, K = x.step;
  if (!d)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var ae = cx(i, null), L = j ? K * Math.abs(i.deltaY) : K, G = dx(n, ae, L, !i.ctrlKey);
  if (h !== G) {
    var q = xi(n, G), I = Lv(i, d, h), B = $ || Q === 0 || g || T, V = v && B, J = Dr(n, I.x, I.y, G, q, V), re = J.x, ze = J.y;
    n.previousWheelEvent = i, n.setState(G, re, ze), Ne(Ae(n), i, r), Ne(Ae(n), i, s);
  }
}, gx = function(n, i) {
  var l = n.props, r = l.onWheelStop, s = l.onZoomStop;
  Uo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Hc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Kv);
  var d = Vv(n, i);
  d && (Uo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ne(Ae(n), i, r), Ne(Ae(n), i, s));
  }, Qv));
}, bx = function(n, i) {
  var l = n.props, r = l.onWheelStart, s = l.onPanningStart;
  n.wheelStopEventTimer || (tn(n), Ne(Ae(n), i, r), Ne(Ae(n), i, s));
}, Sx = function(n, i) {
  var l = n.props, r = l.onWheelStop, s = l.onPanningStop;
  Uo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Hc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Kv);
  var d = Vv(n, i);
  d && (Uo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ne(Ae(n), i, r), Ne(Ae(n), i, s));
  }, Qv));
}, Jv = function(n) {
  for (var i = 0, l = 0, r = 0; r < 2; r += 1)
    i += n.touches[r].clientX, l += n.touches[r].clientY;
  var s = i / 2, d = l / 2;
  return { x: s, y: d };
}, wx = function(n, i) {
  var l = Gv(i);
  n.pinchStartDistance = l, n.lastDistance = l, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Jv(i), tn(n);
}, zx = function(n, i) {
  var l = n.contentComponent, r = n.pinchStartDistance, s = n.wrapperComponent, d = n.pinchPreviousCenter, f = n.state.scale, m = n.setup, h = m.limitToBounds, v = m.centerZoomedOut, g = m.zoomAnimation, b = m.autoAlignment, x = m.pinch, T = m.panning, j = g.disabled, Q = g.size, $ = x.allowPanning;
  if (!(r === null || !l)) {
    var K = px(i, f, l);
    if (!(!Number.isFinite(K.x) || !Number.isFinite(K.y))) {
      var ae = Gv(i), L = vx(n, ae), G = Jv(i), q = f / L, I = (G.x - (d?.x || 0)) * q, B = (G.y - (d?.y || 0)) * q;
      if (!(L === f && I === 0 && B === 0)) {
        n.pinchPreviousCenter = G;
        var V = xi(n, L), J = j || Q === 0 || v, re = h && J, ze = Dr(n, K.x, K.y, L, V, re), fe = ze.x, xe = ze.y;
        if (n.pinchMidpoint = K, n.lastDistance = ae, T.disabled || !$)
          n.setState(L, fe, xe);
        else {
          var W = b.sizeX, ne = b.sizeY, E = Fn(n, W, L), X = Fn(n, ne, L), F = fe + I, he = xe + B, se = Bo(F, he, V, h, E, X, s), w = se.x, N = se.y;
          n.setState(L, w, N);
        }
      }
    }
  }
}, xx = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Hc(n, i?.x, i?.y);
}, Pv = function(n, i) {
  var l = n.props.onZoomStop, r = n.setup.doubleClick.animationTime;
  Uo(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ne(Ae(n), i, l);
  }, r);
}, kx = function(n, i) {
  var l = n.props, r = l.onZoomStart, s = l.onZoom, d = n.setup.doubleClick, f = d.animationTime, m = d.animationType;
  Ne(Ae(n), i, r), Xv(n, f, m, function() {
    return Ne(Ae(n), i, s);
  }), Pv(n, i);
};
function Tx(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function Ex(n, i) {
  var l = n.setup, r = n.doubleClickStopEventTimer, s = n.state, d = n.contentComponent, f = s.scale, m = n.props, h = m.onZoomStart, v = m.onZoom, g = l.doubleClick, b = g.disabled, x = g.mode, T = g.step, j = g.animationTime, Q = g.animationType;
  if (!b && !r) {
    if (x === "reset")
      return kx(n, i);
    if (!d)
      return console.error("No ContentComponent found");
    var $ = Tx(x, n.state.scale), K = Bv(n, $, T);
    if (f !== K) {
      Ne(Ae(n), i, h);
      var ae = Lv(i, d, f), L = Bc(n, K, ae.x, ae.y);
      if (!L)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ne(Ae(n), i, v), ta(n, L, j, Q), Pv(n, i);
    }
  }
}
var Ax = function(n, i) {
  var l = n.isInitialized, r = n.setup, s = n.wrapperComponent, d = r.doubleClick, f = d.disabled, m = d.excluded, h = i.target, v = s?.contains(h), g = l && h && v && !f;
  if (!g)
    return !1;
  var b = Xo(h, m);
  return !b;
}, Mx = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var l = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        l.initializeWindowEvents();
      }, this.unmount = function() {
        l.cleanupWindowEvents();
      }, this.update = function(r) {
        l.props = r, l.wrapperComponent && l.contentComponent && xi(l, l.state.scale), l.setup = $h(r);
      }, this.initializeWindowEvents = function() {
        var r, s, d, f, m = mc(), h = (r = l.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, v = h?.defaultView;
        (s = l.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", l.onWheelPanning, m), (d = l.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", l.setKeyUnPressed, m), (f = l.wrapperComponent) === null || f === void 0 || f.addEventListener("keydown", l.setKeyPressed, m), v?.addEventListener("mousedown", l.onPanningStart, m), v?.addEventListener("mousemove", l.onPanning, m), v?.addEventListener("mouseup", l.onPanningStop, m), h?.addEventListener("mouseleave", l.clearPanning, m), v?.addEventListener("keyup", l.setKeyUnPressed, m), v?.addEventListener("keydown", l.setKeyPressed, m), v?.addEventListener("blur", l.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, s, d, f, m, h = mc(), v = (r = l.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, g = v?.defaultView;
        g?.removeEventListener("mousedown", l.onPanningStart, h), g?.removeEventListener("mousemove", l.onPanning, h), g?.removeEventListener("mouseup", l.onPanningStop, h), v?.removeEventListener("mouseleave", l.clearPanning, h), g?.removeEventListener("keyup", l.setKeyUnPressed, h), g?.removeEventListener("keydown", l.setKeyPressed, h), g?.removeEventListener("blur", l.handleWindowBlur), document.removeEventListener("mouseleave", l.clearPanning, h), (s = l.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", l.onWheelPanning, h), (d = l.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", l.setKeyUnPressed, h), (f = l.wrapperComponent) === null || f === void 0 || f.removeEventListener("keydown", l.setKeyPressed, h), tn(l), (m = l.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var s = mc();
        r.addEventListener("wheel", l.onWheelZoom, s), r.addEventListener("dblclick", l.onDoubleClick, s), r.addEventListener("touchstart", l.onTouchPanningStart, s), r.addEventListener("touchmove", l.onTouchPanning, s), r.addEventListener("touchend", l.onTouchPanningStop, s);
      }, this.handleInitialize = function(r) {
        var s = l.setup.centerOnInit;
        l.applyTransformation(), l.onInitCallbacks.forEach(function(d) {
          return d(Ae(l));
        }), s && (l.setCenter(), l.observer = new ResizeObserver(function() {
          var d, f = r.offsetWidth, m = r.offsetHeight;
          (f > 0 || m > 0) && (l.onInitCallbacks.forEach(function(h) {
            return h(Ae(l));
          }), l.setCenter(), (d = l.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = l.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), l.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var s = l.setup.disabled;
        if (!s) {
          l.syncModifierKeys(r);
          var d = $v(l, r);
          d && (_x(l, r), yx(l, r), gx(l, r));
        }
      }, this.onWheelPanning = function(r) {
        var s = l.props.onPanning, d = l.setup.trackPadPanning, f = d.lockAxisX, m = d.lockAxisY;
        l.syncModifierKeys(r);
        var h = ux(l, r);
        if (h) {
          r.preventDefault(), r.stopPropagation();
          var v = l.state, g = v.positionX, b = v.positionY, x = g - r.deltaX, T = b - r.deltaY, j = f ? g : x, Q = m ? b : T, $ = l.setup.autoAlignment, K = $.sizeX, ae = $.sizeY, L = Fn(l, K), G = Fn(l, ae);
          j === g && Q === b || (bx(l, r), Zv(l, j, Q, L, G), Ne(Ae(l), r, s), Sx(l, r));
        }
      }, this.onPanningStart = function(r) {
        var s = l.setup.disabled, d = l.props.onPanningStart;
        if (!s) {
          l.syncModifierKeys(r);
          var f = Uh(l, r);
          if (f) {
            var m = l.isPressingKeys(l.setup.panning.activationKeys);
            m && (r.button === 0 && !l.setup.panning.allowLeftClickPan || r.button === 1 && !l.setup.panning.allowMiddleClickPan || r.button === 2 && !l.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), tn(l), Hh(l, r), Ne(Ae(l), r, d)));
          }
        }
      }, this.onPanning = function(r) {
        var s = l.setup.disabled, d = l.props.onPanning;
        if (!s) {
          if (l.syncModifierKeys(r), l.isPanning && r.buttons === 0) {
            l.clearPanning(r);
            return;
          }
          var f = Yh(l);
          if (f) {
            var m = l.isPressingKeys(l.setup.panning.activationKeys);
            m && (r.preventDefault(), r.stopPropagation(), Xh(l, r.clientX, r.clientY, Wn.MOUSE), Ne(Ae(l), r, d));
          }
        }
      }, this.onPanningStop = function(r) {
        var s = l.setup.panning.velocityDisabled, d = l.props.onPanningStop;
        l.isPanning && (Jz(l, s), Ne(Ae(l), r, d));
      }, this.onPinchStart = function(r) {
        var s = l.setup.disabled, d = l.props.onPinchStart;
        if (!s) {
          var f = fx(l, r);
          f && (wx(l, r), tn(l), Ne(Ae(l), r, d));
        }
      }, this.onPinch = function(r) {
        var s = l.setup.disabled, d = l.props.onPinch;
        if (!s) {
          var f = mx(l);
          f && (r.preventDefault(), r.stopPropagation(), zx(l, r), Ne(Ae(l), r, d));
        }
      }, this.onPinchStop = function(r) {
        var s = l.props.onPinchStop;
        l.pinchStartScale && (xx(l), Ne(Ae(l), r, s));
      }, this.onTouchPanningStart = function(r) {
        var s = l.setup, d = s.disabled, f = s.doubleClick, m = l.props.onPanningStart;
        if (!d) {
          var h = !f?.disabled, v = l.lastTouch && +/* @__PURE__ */ new Date() - l.lastTouch < 200;
          if (h && v && r.touches.length === 1)
            l.onDoubleClick(r);
          else {
            l.lastTouch = +/* @__PURE__ */ new Date(), tn(l);
            var g = r.touches, b = g.length === 1, x = g.length === 2, T = Uh(l, r);
            if (b) {
              if (!T)
                return;
              tn(l), Hh(l, r), Ne(Ae(l), r, m);
            }
            x && l.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var s = l.setup.disabled, d = l.props.onPanning;
        if (l.isPanning && r.touches.length === 1) {
          if (s)
            return;
          var f = Yh(l);
          if (!f)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var m = r.touches[0];
          Xh(l, m.clientX, m.clientY, Wn.TOUCH), Ne(Ae(l), r, d);
        } else r.touches.length > 1 && l.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        l.onPanningStop(r), l.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var s = l.setup.disabled;
        if (!s) {
          var d = Ax(l, r);
          d && Ex(l, r);
        }
      }, this.clearPanning = function(r) {
        l.isPanning && l.onPanningStop(r);
      }, this.handleWindowBlur = function() {
        l.pressedKeys = {}, l.isPanning && (l.isPanning = !1, l.startCoords = null);
      }, this.syncModifierKeys = function(r) {
        var s = r.ctrlKey, d = r.metaKey, f = r.shiftKey, m = r.altKey;
        typeof s == "boolean" && (l.pressedKeys.Control = s), typeof d == "boolean" && (l.pressedKeys.Meta = d), typeof f == "boolean" && (l.pressedKeys.Shift = f), typeof m == "boolean" && (l.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(r) {
        l.pressedKeys[r.key] = !0;
      }, this.setKeyUnPressed = function(r) {
        l.pressedKeys[r.key] = !1;
      }, this.isPressingKeys = function(r) {
        return typeof r == "function" ? r(Object.entries(l.pressedKeys).filter(function(s) {
          var d = s[1];
          return d;
        }).map(function(s) {
          var d = s[0];
          return d;
        })) : r.length ? !!r.every(function(s) {
          return l.pressedKeys[s];
        }) : !0;
      }, this.setCenter = function() {
        if (l.wrapperComponent && l.contentComponent) {
          var r = Xc(l.state.scale, l.wrapperComponent, l.contentComponent);
          l.setState(r.scale, r.positionX, r.positionY);
        }
      }, this.handleTransformStyles = function(r, s, d) {
        return l.props.customTransform ? l.props.customTransform(r, s, d) : qv(r, s, d);
      }, this.getContext = function() {
        return Ae(l);
      }, this.applyTransformation = function() {
        if (!(!l.mounted || !l.contentComponent)) {
          var r = l.state, s = r.scale, d = r.positionX, f = r.positionY, m = l.handleTransformStyles(d, f, s);
          l.props.detached || (l.contentComponent.style.transform = m), l.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: s,
              positionX: d,
              positionY: f,
              previousScale: l.state.previousScale,
              ref: Ae(l)
            });
          });
        }
      }, this.setState = function(r, s, d) {
        var f = l.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(s) && !Number.isNaN(d)) {
          var m = Math.max(r, 1e-7);
          m !== l.state.scale && (l.state.previousScale = l.state.scale, l.state.scale = m), l.state.positionX = s, l.state.positionY = d, l.applyTransformation();
          var h = Ae(l);
          l.onChangeCallbacks.forEach(function(v) {
            return v(h);
          }), Ne(h, { scale: l.state.scale, positionX: s, positionY: d }, f);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(r) {
        return l.onTransformCallbacks.has(r) || l.onTransformCallbacks.add(r), function() {
          l.onTransformCallbacks.delete(r);
        };
      }, this.onChange = function(r) {
        return l.onChangeCallbacks.has(r) || l.onChangeCallbacks.add(r), function() {
          l.onChangeCallbacks.delete(r);
        };
      }, this.onInit = function(r) {
        return l.onInitCallbacks.has(r) || l.onInitCallbacks.add(r), function() {
          l.onInitCallbacks.delete(r);
        };
      }, this.init = function(r, s) {
        l.cleanupWindowEvents(), l.wrapperComponent = r, l.contentComponent = s, xi(l, l.state.scale), l.handleInitializeWrapperEvents(r), l.handleInitialize(s), l.initializeWindowEvents(), l.isInitialized = !0;
        var d = Ae(l);
        Ne(d, void 0, l.props.onInit), lx(l.props.ref, d);
      }, this.props = i, this.setup = $h(this.props), this.state = Yv(this.props);
    }
    return n;
  })()
), qo = Mr.createContext(null), jx = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, Cx = Mr.forwardRef(function(n, i) {
  var l = oe.useRef(new Mx(n)).current, r = jx(n.children, Ar(l));
  return oe.useImperativeHandle(i, function() {
    return Ar(l);
  }, [l]), oe.useEffect(function() {
    l.update(n);
  }, [l, n]), y.jsx(qo.Provider, Kt({ value: l }, { children: r }));
});
Mr.forwardRef(function(n, i) {
  var l = oe.useRef(null), r = oe.useContext(qo);
  return oe.useEffect(function() {
    return r.onChange(function(s) {
      if (l.current) {
        var d = 0, f = 0;
        l.current.style.transform = r.handleTransformStyles(d, f, 1 / s.instance.state.scale);
      }
    });
  }, [r]), y.jsx("div", Kt({}, n, { ref: rx([l, i]) }));
});
function Ox(n, i) {
  i === void 0 && (i = {});
  var l = i.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", l === "top" && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var Nx = `.transform-component-module_wrapper__SPB86 {
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
`, pc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
Ox(Nx);
var Dx = function(n) {
  var i = n.children, l = n.wrapperClass, r = l === void 0 ? "" : l, s = n.contentClass, d = s === void 0 ? "" : s, f = n.wrapperStyle, m = n.contentStyle, h = n.wrapperProps, v = h === void 0 ? {} : h, g = n.contentProps, b = g === void 0 ? {} : g, x = n.infinite, T = x === void 0 ? !1 : x, j = oe.useContext(qo), Q = j.init, $ = j.cleanupWindowEvents, K = oe.useRef(null), ae = oe.useRef(null), L = oe.useRef(null);
  return oe.useEffect(function() {
    var G = K.current, q = ae.current;
    return G !== null && q !== null && Q && Q?.(G, q), function() {
      $?.();
    };
  }, []), oe.useEffect(function() {
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
  }, [T, j]), y.jsxs("div", Kt({}, v, { ref: K, className: "".concat(wc.wrapperClass, " ").concat(pc.wrapper, " ").concat(r), style: f }, { children: [T && y.jsx("div", { ref: L, className: pc.infiniteGrid, "aria-hidden": !0 }), y.jsx("div", Kt({}, b, { ref: ae, className: "".concat(wc.contentClass, " ").concat(pc.content, " ").concat(d), style: Kt(Kt({}, m), { transform: qv(j.state.positionX, j.state.positionY, j.state.scale) }) }, { children: i }))] }));
};
function Rx(n, i) {
  var l = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), r = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return l * r;
}
function Zx(n) {
  var i = n.elementX, l = n.elementY, r = n.elementWidth, s = n.elementHeight, d = n.scale, f = n.positionX, m = n.positionY, h = n.viewportWidth, v = n.viewportHeight, g = n.margin, b = g === void 0 ? 0 : g, x = n.threshold, T = x === void 0 ? 0 : x, j = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: v + 2 * b
  }, Q = {
    x: i * d + f,
    y: l * d + m,
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
  var L = Rx(j, Q);
  return L / ae >= T;
}
Mr.forwardRef(function(n, i) {
  var l = n.x, r = n.y, s = n.width, d = n.height, f = n.margin, m = f === void 0 ? 0 : f, h = n.threshold, v = h === void 0 ? 0 : h, g = n.placeholder, b = g === void 0 ? null : g, x = n.onShow, T = n.onHide, j = n.children, Q = n.className, $ = n.style, K = oe.useContext(qo), ae = oe.useState(!1), L = ae[0], G = ae[1], q = oe.useRef(!1), I = oe.useRef(x), B = oe.useRef(T);
  return I.current = x, B.current = T, oe.useEffect(function() {
    var V = function() {
      var ze, fe, xe = K.wrapperComponent;
      if (xe) {
        var W = Zx({
          elementX: l,
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
  }, [K, l, r, s, d, m, v]), L ? y.jsx("div", Kt({ ref: i, className: Q, style: $ }, { children: j })) : b ? y.jsx(y.Fragment, { children: b }) : null;
});
var Ux = function() {
  var n = oe.useContext(qo);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, Yx = function() {
  var n = Ux();
  return Ar(n);
};
const zc = 24;
function Bx({ locked: n, zoneMode: i, hasZone: l, disabled: r, clearZoneLabel: s, onToggleLock: d, onClearZone: f }) {
  const { zoomIn: m, zoomOut: h, resetTransform: v } = Yx();
  return /* @__PURE__ */ y.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || i, children: /* @__PURE__ */ y.jsx(y0, {}) }),
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => h(), disabled: n || i, children: /* @__PURE__ */ y.jsx(b0, {}) }),
    /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => v(), children: /* @__PURE__ */ y.jsx(kc, {}) }),
    i ? /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": s, onClick: f, disabled: !l || r, children: /* @__PURE__ */ y.jsx($g, {}) }) : /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: d, children: n ? /* @__PURE__ */ y.jsx(Jh, {}) : /* @__PURE__ */ y.jsx(Jg, {}) })
  ] });
}
function Hx(n, i, l) {
  const r = Math.min(Math.min(i, l), Math.max(zc, Math.min(i, l) * 0.22));
  return gc({
    x1: n.x - r / 2,
    y1: n.y - r / 2,
    x2: n.x + r / 2,
    y2: n.y + r / 2
  }, i, l);
}
function Xx({
  hass: n,
  floor: i,
  language: l,
  selected: r,
  launched: s,
  active: d,
  disabled: f,
  selectionMode: m,
  zone: h,
  zoneLaunched: v,
  onToggle: g,
  onZoneChange: b
}) {
  const [x, T] = oe.useState(!0), [j, Q] = oe.useState({ width: 0, height: 0 }), [$, K] = oe.useState({ width: 0, height: 0 }), [ae, L] = oe.useState(0), G = oe.useRef(null), q = oe.useRef(void 0), I = oe.useRef(h), B = n.states[i.map_entity], V = oe.useMemo(() => jv(B), [B]), J = oe.useMemo(() => Mv(B), [B]), re = oe.useMemo(() => Tw(i), [i]), ze = typeof B?.attributes.entity_picture == "string" ? B.attributes.entity_picture : void 0, fe = h ? jo(h) : void 0;
  oe.useEffect(() => {
    I.current = h;
  }, [h]), oe.useEffect(() => {
    if (!d) return;
    const W = setInterval(() => L((ne) => ne + 1), 5e3);
    return () => {
      clearInterval(W), L(0);
    };
  }, [d]), oe.useEffect(() => {
    const W = G.current;
    if (!W) return;
    const ne = new ResizeObserver(([E]) => {
      K({ width: E.contentRect.width, height: E.contentRect.height });
    });
    return ne.observe(W), () => ne.disconnect();
  }, []);
  let xe;
  return !B || B.state === "unavailable" ? xe = Y(l, "mapMissing") : ze ? J.length < 3 ? xe = Y(l, "calibrationMissing") : m === "rooms" && V.length === 0 && (xe = Y(l, "roomsMissing")) : xe = Y(l, "imageMissing"), xe ? /* @__PURE__ */ y.jsx("div", { className: "map-error", role: "alert", children: xe }) : /* @__PURE__ */ y.jsx("div", { className: `map-shell ${m === "zone" ? "zone-mode" : ""}`, ref: G, children: /* @__PURE__ */ y.jsxs(
    Cx,
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
        /* @__PURE__ */ y.jsx(
          Bx,
          {
            locked: x,
            zoneMode: m === "zone",
            hasZone: !!h,
            disabled: f,
            clearZoneLabel: Y(l, "clearZone"),
            onToggleLock: () => T((W) => !W),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ y.jsx(Dx, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!j.width || !j.height || !$.width || !$.height) return;
              const W = Math.min($.width / j.width, $.height / j.height);
              return { width: j.width * W, height: j.height * W };
            })(),
            children: [
              /* @__PURE__ */ y.jsx(
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
              j.width > 0 && j.height > 0 && /* @__PURE__ */ y.jsxs(
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
                      F = jo({ x1: ne.origin.x, y1: ne.origin.y, x2: X.x, y2: X.y });
                    else if (ne.kind === "move" && ne.initial) {
                      const he = X.x - ne.origin.x, se = X.y - ne.origin.y;
                      F = gc({
                        x1: ne.initial.x1 + he,
                        y1: ne.initial.y1 + se,
                        x2: ne.initial.x2 + he,
                        y2: ne.initial.y2 + se
                      }, j.width, j.height);
                    } else if (ne.initial && ne.handle)
                      F = { ...ne.initial }, ne.handle.includes("w") && (F.x1 = X.x), ne.handle.includes("e") && (F.x2 = X.x), ne.handle.includes("n") && (F.y1 = X.y), ne.handle.includes("s") && (F.y2 = X.y), F = gc(F, j.width, j.height);
                    else return;
                    I.current = F, b(F), W.preventDefault();
                  },
                  onPointerUp: (W) => {
                    const ne = q.current;
                    if (!ne || ne.pointerId !== W.pointerId) return;
                    const E = I.current && jo(I.current);
                    if (ne.kind === "create" && E && (E.x2 - E.x1 < zc || E.y2 - E.y1 < zc)) {
                      const X = Hx(ne.origin, j.width, j.height);
                      I.current = X, b(X);
                    }
                    q.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId), W.preventDefault();
                  },
                  onPointerCancel: (W) => {
                    q.current = void 0, W.currentTarget.releasePointerCapture?.(W.pointerId);
                  },
                  children: [
                    V.map((W) => {
                      const ne = re.get(W.segment_id), E = !!ne?.area_id, X = r.has(W.segment_id), F = s.has(W.segment_id), he = kw(W, J), se = ne?.name || W.source_name, w = f || m === "zone" || !E;
                      return /* @__PURE__ */ y.jsxs("g", { className: `room ${X ? "selected" : ""} ${F ? "launched" : ""} ${E ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ y.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: xw(W, J),
                            role: "button",
                            tabIndex: w ? -1 : 0,
                            "aria-label": `${se}${E ? "" : ` — ${Y(l, "roomUnmapped")}`}`,
                            "aria-pressed": X,
                            "aria-disabled": w,
                            onClick: () => !w && g(W.segment_id),
                            onKeyDown: (N) => {
                              !w && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), g(W.segment_id));
                            },
                            children: /* @__PURE__ */ y.jsx("title", { children: E ? se : `${se}: ${Y(l, "roomUnmapped")}` })
                          }
                        ),
                        /* @__PURE__ */ y.jsxs("g", { className: "room-label", transform: `translate(${he.x} ${he.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ y.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ y.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ y.jsx(Sc, { icon: ne?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ y.jsx("text", { y: "39", textAnchor: "middle", children: se })
                        ] })
                      ] }, W.segment_id);
                    }),
                    m === "zone" && fe && /* @__PURE__ */ y.jsxs("g", { className: `zone-selection ${v ? "launched" : ""}`, children: [
                      /* @__PURE__ */ y.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: fe.x1,
                          y: fe.y1,
                          width: fe.x2 - fe.x1,
                          height: fe.y2 - fe.y1,
                          role: "img",
                          "aria-label": Y(l, "selectedZone")
                        }
                      ),
                      [
                        ["nw", fe.x1, fe.y1],
                        ["ne", fe.x2, fe.y1],
                        ["se", fe.x2, fe.y2],
                        ["sw", fe.x1, fe.y2]
                      ].map(([W, ne, E]) => /* @__PURE__ */ y.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": W,
                          cx: ne,
                          cy: E,
                          r: "12",
                          "aria-label": `${Y(l, "resizeZone")} ${W}`
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
const qx = {
  preparing: /* @__PURE__ */ y.jsx(Ip, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ y.jsx(Og, {}),
  cleaning_upstairs: /* @__PURE__ */ y.jsx(hc, {}),
  carry_downstairs: /* @__PURE__ */ y.jsx(Kh, {}),
  finishing: /* @__PURE__ */ y.jsx(Ip, { className: "spin" }),
  complete: /* @__PURE__ */ y.jsx(Ug, {}),
  error: /* @__PURE__ */ y.jsx(kc, {}),
  idle: /* @__PURE__ */ y.jsx(hc, {})
}, Lh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function $x({
  language: n,
  stage: i,
  roomNames: l,
  pending: r,
  onStart: s,
  onFinish: d,
  onReset: f,
  onCancel: m
}) {
  if (i === "idle") return null;
  const h = Y(n, Lh[i].title), v = Y(n, Lh[i].description), g = !["complete", "error"].includes(i);
  return /* @__PURE__ */ y.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ y.jsx("div", { className: "assisted-icon", children: qx[i] }),
    /* @__PURE__ */ y.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ y.jsx("strong", { children: h }),
      /* @__PURE__ */ y.jsx("p", { children: v }),
      l.length > 0 && /* @__PURE__ */ y.jsx("small", { children: l.join(" · ") })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ y.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: s, children: [
        /* @__PURE__ */ y.jsx(Ph, {}),
        Y(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ y.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: d, children: [
        /* @__PURE__ */ y.jsx(Kh, {}),
        Y(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ y.jsxs("button", { type: "button", className: "secondary", disabled: r, onClick: f, children: [
        /* @__PURE__ */ y.jsx(kc, {}),
        Y(n, "newUpstairsJob")
      ] }),
      g && /* @__PURE__ */ y.jsx("button", { type: "button", className: "secondary", disabled: r, onClick: m, children: Y(n, "cancel") })
    ] })
  ] });
}
function ko(n, i) {
  if (!i) return;
  const l = n.states[i];
  return !l || ["unknown", "unavailable"].includes(l.state) ? void 0 : `${l.attributes.device_class === "duration" && !isNaN(Number(l.state)) ? String(Math.round(Number(l.state))) : l.state}${l.attributes.unit_of_measurement ? ` ${l.attributes.unit_of_measurement}` : ""}`;
}
function Lx(n, i, l) {
  if (!i) return;
  const r = n.states[i];
  if (!r || ["unknown", "unavailable"].includes(r.state)) return;
  const s = Number(r.state);
  if (!Number.isFinite(s) || s < 0) return;
  const d = String(r.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[d];
  if (m === void 0) return;
  const h = s * m, v = Math.max(0, Math.round(h)), g = Math.floor(v / 60), b = v % 60;
  return `${[
    g > 0 ? `${g} ${Y(l, "hourShort")}` : void 0,
    b > 0 || g === 0 ? `${b} ${Y(l, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${Y(l, "remaining")}`;
}
function Vx(n, i) {
  if (i === "washing_the_mop") return Y(n, "washingMop");
}
function Gx(n, i) {
  const l = new Date(n);
  if (isNaN(l.getTime())) return;
  const r = Date.now() - l.getTime();
  if (r < 0) return;
  const s = Math.floor(r / 6e4);
  if (s < 1) return Y(i, "justNow");
  if (s < 60) return `${s} ${Y(i, "minuteShort")} ${Y(i, "ago")}`;
  const d = Math.floor(s / 60);
  if (d < 24) return `${d} ${Y(i, "hourShort")} ${Y(i, "ago")}`;
  const f = Math.floor(d / 24);
  return f === 1 ? Y(i, "yesterday") : `${f} ${Y(i, "daysAgo")}`;
}
function Qx(n, i) {
  const l = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((r) => r.map_select_option === l) ?? n.floors[0];
}
function Kx({ hass: n, config: i }) {
  const l = oe.useRef(n), r = oe.useRef(!1), s = i.language, [d, f] = oe.useState(() => Qx(i, n).id), m = i.floors.find((H) => H.id === d) ?? i.floors[0], [h, v] = oe.useState("rooms"), [g, b] = oe.useState(/* @__PURE__ */ new Set()), [x, T] = oe.useState(), [j, Q] = oe.useState(!1), [$, K] = oe.useState(!1), [ae, L] = oe.useState(!1), [G, q] = oe.useState(!1), [I, B] = oe.useState(), [V, J] = oe.useState(), [re, ze] = oe.useState({ phase: "idle" }), fe = oe.useMemo(() => Ac(n, i), [n, i]), xe = oe.useMemo(() => dz(i, fe, m), [i, fe, m]), W = xe.find(({ preset: H, available: ue }) => H.id === i.default_preset && ue)?.preset ?? xe.find(({ available: H }) => H)?.preset, [ne, E] = oe.useState(
    () => Co(W ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), X = n.states[i.entity], F = Rw(n, i), he = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, se = oe.useMemo(() => Bw(he), [he]), w = Dw(i, se), N = Zw(F), P = i.entities?.map_select ? n.states[i.entities.map_select]?.state : void 0;
  oe.useEffect(() => {
    l.current = n;
  }, [n]), oe.useEffect(() => {
    !N || !w || !se || (f(w.id), v("rooms"), T(void 0), b(new Set(se.segment_ids)), E({
      preset_id: "assisted_carry",
      strategy: se.strategy,
      cleaning_type: se.cleaning_type,
      fan_speed: se.fan_speed,
      mop_mode: se.mop_mode,
      mop_intensity: se.mop_intensity,
      cleaning_count: se.cleaning_count
    }));
  }, [N, w, se]), oe.useEffect(() => {
    if (N || !P) return;
    const H = i.floors.find((ue) => ue.map_select_option === P);
    H && (f(H.id), b(/* @__PURE__ */ new Set()), T(void 0), H.assisted_carry && v("rooms"), Q(!1));
  }, [N, i.floors, P]);
  const te = i.entities?.status ? n.states[i.entities.status]?.state : void 0, pe = ["washing_the_mop", "washing_the_mop_2"].includes(te ?? ""), _e = [X?.state, te].includes("emptying_the_bin"), be = R0(X?.state) || pe, Ge = N || ["submitting", "starting", "active"].includes(re.phase);
  oe.useEffect(() => {
    re.phase === "starting" && be ? ze((H) => ({ ...H, phase: "active" })) : re.phase === "active" && !be && (ze({ phase: "idle" }), b(/* @__PURE__ */ new Set()), T(void 0));
  }, [re.phase, be]), oe.useEffect(() => {
    if (!V) return;
    const H = setTimeout(() => J(void 0), 5e3);
    return () => clearTimeout(H);
  }, [V]);
  const $e = new Set(re.floor_id === m.id ? re.segment_ids ?? [] : []), Pt = m.rooms.filter((H) => g.has(H.segment_id)), Ut = Pt.map((H) => H.name), rn = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, na = rn ? Lx(n, i.entities?.dock_mop_drying_remaining_time, s) : void 0, St = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, Ti = !be && St && !["unknown", "unavailable"].includes(St) ? Gx(St, s) : void 0, Ei = [
    Vx(s, te),
    rn ? Y(s, "dryingMop") : void 0,
    na
  ].filter((H) => !!H), $o = [
    { icon: /* @__PURE__ */ y.jsx(Rg, {}), label: Y(s, "battery"), value: ko(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ y.jsx(Fg, {}), label: Y(s, "room"), value: ko(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ y.jsx(o0, {}), label: Y(s, "area"), value: ko(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ y.jsx(Bg, {}), label: Y(s, "duration"), value: ko(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ y.jsx(f0, {}), label: Y(s, "progress"), value: ko(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ y.jsx(Vg, {}), label: Y(s, "lastClean"), value: Ti }
  ].filter((H) => H.value), Lo = (H) => {
    if (N) return;
    const ue = i.floors.find((ee) => ee.id === H);
    f(H), b(/* @__PURE__ */ new Set()), T(void 0), ue?.assisted_carry && v("rooms"), Q(!1);
  }, ja = (H) => {
    H === "zone" && m.assisted_carry || (v(H), b(/* @__PURE__ */ new Set()), T(void 0), Q(!1));
  }, Ca = (H) => {
    if (H) {
      const ue = xe.find(({ preset: ee, available: rt }) => ee.id === i.default_preset && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_only" && rt)?.preset ?? xe.find(({ available: ee }) => ee)?.preset;
      if (!ue) {
        J(Y(s, "unsupported"));
        return;
      }
      E(Co(ue));
    }
    if (h === "zone" && (ne.strategy !== "custom" || !bc.has(ne.cleaning_type))) {
      const ue = xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_only" && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => ee.id === "vacuum_and_mop" && rt)?.preset ?? xe.find(({ preset: ee, available: rt }) => rt && ee.strategy === "custom" && bc.has(ee.cleaning_type ?? "vacuum"))?.preset;
      if (!ue) {
        J(Y(s, "unsupported"));
        return;
      }
      E(Co(ue));
    }
    if (!H && ne.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((ee) => ee.include_in_floor_clean !== !1 && ee.area_id).map((ee) => ee.segment_id);
      b(new Set(ue));
    }
    K(H), Q(!0);
  }, Ai = () => {
    const H = m.rooms.filter((ue) => ue.include_in_floor_clean !== !1 && ue.area_id).map((ue) => ue.segment_id);
    b(new Set(H)), Ca(!!m.assisted_carry);
  }, Rr = (H) => {
    if (H.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((ee) => ee.include_in_floor_clean !== !1 && ee.area_id).map((ee) => ee.segment_id);
      b(new Set(ue));
    }
    E(H);
  }, aa = (H) => H instanceof Ro ? `${H.operation}: ${H.message}` : H instanceof Error ? H.message : String(H), yt = async (H = ne) => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        const ue = Uw(m, [...g], H);
        await Hw(l.current, i, ue), Q(!1), J(Y(s, "preparingUpstairs"));
      } catch (ue) {
        J(aa(ue));
        try {
          await gi(l.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Zr = async () => {
    if (!(r.current || !w || !se)) {
      r.current = !0, L(!0);
      try {
        await Xw(l.current, i, w, se);
      } catch (H) {
        J(aa(H));
        try {
          await gi(l.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Vo = async () => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        await qw(l.current, i);
      } catch (H) {
        J(aa(H));
        try {
          await gi(l.current, i, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, Go = async () => {
    if (!ae) {
      L(!0);
      try {
        await Mh(l.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        J(aa(H));
      } finally {
        L(!1);
      }
    }
  }, Oa = async () => {
    if (!ae) {
      L(!0);
      try {
        const H = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((ue) => !!(ue && l.current.states[ue]));
        H.length > 0 && await l.current.callService("script", "turn_off", {}, { entity_id: H }), F === "cleaning_upstairs" && await l.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), pe && await rc(l.current, i, "wash", !0), _e && await rc(l.current, i, "empty", !0), await Mh(l.current, i), b(/* @__PURE__ */ new Set());
      } catch (H) {
        J(aa(H));
      } finally {
        L(!1);
      }
    }
  }, Ur = async (H = ne) => {
    if ($) {
      await yt(H);
      return;
    }
    if (r.current) return;
    r.current = !0;
    const ue = {
      floor_id: m.id,
      segment_ids: h === "rooms" ? [...g] : void 0,
      selection_mode: h,
      zone: h === "zone" ? x : void 0
    };
    ze({ phase: "submitting", ...ue });
    try {
      const ee = h === "zone" && x ? zw(x, Mv(l.current.states[m.map_entity])) : void 0;
      await az({
        getHass: () => l.current,
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
        ue && l.current.states[ue] && l.current.states[ue].state !== "unavailable" && await l.current.callService("script", "turn_off", {}, { entity_id: ue });
        const ee = i.entities?.assisted_carry_start_script;
        N && ee && l.current.states[ee] && l.current.states[ee].state !== "unavailable" && await l.current.callService("script", "turn_off", {}, { entity_id: ee });
      }
      await l.current.callService("vacuum", H, {}, { entity_id: i.entity }), H === "stop" && F === "cleaning_upstairs" && await gi(l.current, i, "carry_downstairs");
    } catch (ue) {
      J(`${H}: ${ue instanceof Error ? ue.message : String(ue)}`);
    }
  }, Yr = async (H, ue) => {
    if (!I) {
      B(Y(s, "settingSaved"));
      try {
        await Ww(l.current, i, H, ue), J(Y(s, "settingSaved"));
      } catch (ee) {
        const rt = ee instanceof Tn ? `${ee.operation}: ${ee.message}` : String(ee);
        J(rt);
      } finally {
        B(void 0);
      }
    }
  }, Br = async (H, ue) => {
    if (!I) {
      if (!ue) {
        const ee = H === "empty" ? Y(s, "confirmEmpty") : H === "wash" ? Y(s, "confirmWash") : H === "dry" ? Y(s, "confirmDry") : Y(s, "confirmDrain");
        if (!window.confirm(ee)) return;
      }
      B(Y(s, "dockActionSent"));
      try {
        await rc(l.current, i, H, ue), J(Y(s, "dockActionSent"));
      } catch (ee) {
        const rt = H === "drain" ? Y(s, "drainRejected") : ee instanceof Tn ? `${ee.operation}: ${ee.message}` : String(ee);
        J(rt);
      } finally {
        B(void 0);
      }
    }
  }, oa = async (H) => {
    const ue = i.entities?.dock_child_lock;
    if (!(!ue || I)) {
      B(Y(s, "settingSaved"));
      try {
        await l.current.callService("switch", H ? "turn_on" : "turn_off", {}, { entity_id: ue }), J(Y(s, "settingSaved"));
      } catch (ee) {
        J(`child_lock: ${ee instanceof Error ? ee.message : String(ee)}`);
      } finally {
        B(void 0);
      }
    }
  };
  return /* @__PURE__ */ y.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("h1", { children: i.name ?? X?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ y.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ y.jsx("span", { className: `state-dot state-${X?.state ?? "unavailable"}` }),
          /* @__PURE__ */ y.jsx("span", { children: X?.state?.replaceAll("_", " ") ?? "unavailable" }),
          Ei.map((H) => /* @__PURE__ */ y.jsx("span", { className: "state-detail", children: ` · ${H}` }, H))
        ] })
      ] }),
      $o.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "status-strip", children: $o.map((H) => /* @__PURE__ */ y.jsxs("div", { title: H.label, children: [
        H.icon,
        /* @__PURE__ */ y.jsx("strong", { children: H.value })
      ] }, H.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ y.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": Y(s, "floor"), children: i.floors.map((H) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === H.id,
        className: m.id === H.id ? "active" : "",
        disabled: N && m.id !== H.id,
        onClick: () => Lo(H.id),
        children: H.name
      },
      H.id
    )) }),
    !m.assisted_carry && /* @__PURE__ */ y.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": Y(s, "selectionMode"), children: [
      /* @__PURE__ */ y.jsx(
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
      /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsx(
      Xx,
      {
        hass: n,
        floor: m,
        language: s,
        selected: g,
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
    m.assisted_carry && /* @__PURE__ */ y.jsx(
      $x,
      {
        language: s,
        stage: F,
        roomNames: Ut,
        pending: ae,
        onStart: Zr,
        onFinish: Vo,
        onReset: Go,
        onCancel: Oa
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("strong", { children: h === "zone" ? Y(s, "selectedZone") : Y(s, "selectedRooms") }),
        /* @__PURE__ */ y.jsx("span", { children: h === "zone" ? x ? Y(s, "zoneReady") : Y(s, "noZoneSelected") : Ut.length ? Ut.join(" · ") : Y(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ y.jsx("span", { className: "selection-count", children: h === "zone" ? +!!x : g.size })
    ] }),
    !N && /* @__PURE__ */ y.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ y.jsxs("button", { type: "button", className: "secondary", onClick: Ai, disabled: Ge, children: [
        /* @__PURE__ */ y.jsx(Fp, {}),
        " ",
        Y(s, "entireFloor")
      ] }),
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Ca(!!m.assisted_carry),
          disabled: (h === "zone" ? !x : g.size === 0) || Ge,
          children: [
            m.assisted_carry && /* @__PURE__ */ y.jsx(hc, {}),
            m.assisted_carry ? Y(s, "prepareUpstairs") : Y(s, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      X?.state === "paused" && fe.canStart && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => ia("start"), children: [
        /* @__PURE__ */ y.jsx(Ph, {}),
        Y(s, "resume")
      ] }),
      X?.state === "cleaning" && fe.canPause && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => ia("pause"), children: [
        /* @__PURE__ */ y.jsx(e0, {}),
        Y(s, "pause")
      ] }),
      fe.canStop && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => ia("stop"), children: [
        /* @__PURE__ */ y.jsx(c0, {}),
        Y(s, "stop")
      ] }),
      fe.canDock && /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => ia("return_to_base"), children: [
        /* @__PURE__ */ y.jsx(Fp, {}),
        Y(s, "dock")
      ] }),
      /* @__PURE__ */ y.jsxs("button", { type: "button", onClick: () => q(!0), children: [
        /* @__PURE__ */ y.jsx(r0, {}),
        Y(s, "dockStation")
      ] })
    ] }),
    j && /* @__PURE__ */ y.jsx(
      bz,
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
        onDraftChange: Rr,
        onClose: () => re.phase !== "submitting" && !ae && Q(!1),
        onStart: Ur
      }
    ),
    G && /* @__PURE__ */ y.jsx(
      fz,
      {
        hass: n,
        config: i,
        language: s,
        washing: pe,
        emptying: _e,
        drying: rn,
        dryingRemaining: na,
        pending: I,
        onClose: () => !I && q(!1),
        onAction: Br,
        onSetting: Yr,
        onChildLock: oa
      }
    ),
    V && /* @__PURE__ */ y.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ y.jsx("span", { children: V }),
      /* @__PURE__ */ y.jsx("button", { type: "button", "aria-label": Y(s, "close"), onClick: () => J(void 0), children: /* @__PURE__ */ y.jsx(Tc, {}) })
    ] })
  ] });
}
const Jx = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(var(--mode-count, 4),minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-hint{margin:-4px 0 12px;color:var(--rvm-muted);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', Px = "0.9.0-dev";
let Vh = !1;
function Wx() {
  Vh || (Vh = !0, console.warn(
    "roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead."
  ));
}
class Wv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), l = document.createElement("style");
    l.textContent = Jx, i.append(l), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= zg.createRoot(this.container), this.root.render(i);
  }
}
class Fx extends Wv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = Sw(i), this.config.vacuum_mode_fallback && Wx(), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ y.jsx(Kx, { hass: this.homeAssistant, config: this.config }));
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
    return Av();
  }
}
class Ix extends Wv {
  config = Av();
  homeAssistant;
  setConfig(i) {
    this.config = structuredClone(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ y.jsx(
        Ow,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Fx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", Ix);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Px} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Fx as RoborockVacuumMapCard,
  Ix as RoborockVacuumMapCardEditor
};
