function Wp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ss = { exports: {} }, il = {};
var tp;
function zy() {
  if (tp) return il;
  tp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(r, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: n,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return il.Fragment = l, il.jsx = u, il.jsxs = u, il;
}
var np;
function Ty() {
  return np || (np = 1, Ss.exports = zy()), Ss.exports;
}
var S = Ty(), zs = { exports: {} }, ll = {}, Ts = { exports: {} }, Es = {};
var ap;
function Ey() {
  return ap || (ap = 1, (function(n) {
    function l(j, q) {
      var Y = j.length;
      j.push(q);
      e: for (; 0 < Y; ) {
        var ae = Y - 1 >>> 1, fe = j[ae];
        if (0 < c(fe, q))
          j[ae] = q, j[Y] = fe, Y = ae;
        else break e;
      }
    }
    function u(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0) return null;
      var q = j[0], Y = j.pop();
      if (Y !== q) {
        j[0] = Y;
        e: for (var ae = 0, fe = j.length, T = fe >>> 1; ae < T; ) {
          var U = 2 * (ae + 1) - 1, L = j[U], K = U + 1, ie = j[K];
          if (0 > c(L, Y))
            K < fe && 0 > c(ie, L) ? (j[ae] = ie, j[K] = Y, ae = K) : (j[ae] = L, j[U] = Y, ae = U);
          else if (K < fe && 0 > c(ie, Y))
            j[ae] = ie, j[K] = Y, ae = K;
          else break e;
        }
      }
      return q;
    }
    function c(j, q) {
      var Y = j.sortIndex - q.sortIndex;
      return Y !== 0 ? Y : j.id - q.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var v = [], h = [], y = 1, _ = null, A = 3, w = !1, M = !1, H = !1, B = !1, V = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function X(j) {
      for (var q = u(h); q !== null; ) {
        if (q.callback === null) r(h);
        else if (q.startTime <= j)
          r(h), q.sortIndex = q.expirationTime, l(v, q);
        else break;
        q = u(h);
      }
    }
    function G(j) {
      if (H = !1, X(j), !M)
        if (u(v) !== null)
          M = !0, ee || (ee = !0, ye());
        else {
          var q = u(h);
          q !== null && it(G, q.startTime - j);
        }
    }
    var ee = !1, Q = -1, ue = 5, Se = -1;
    function ve() {
      return B ? !0 : !(n.unstable_now() - Se < ue);
    }
    function ge() {
      if (B = !1, ee) {
        var j = n.unstable_now();
        Se = j;
        var q = !0;
        try {
          e: {
            M = !1, H && (H = !1, W(Q), Q = -1), w = !0;
            var Y = A;
            try {
              t: {
                for (X(j), _ = u(v); _ !== null && !(_.expirationTime > j && ve()); ) {
                  var ae = _.callback;
                  if (typeof ae == "function") {
                    _.callback = null, A = _.priorityLevel;
                    var fe = ae(
                      _.expirationTime <= j
                    );
                    if (j = n.unstable_now(), typeof fe == "function") {
                      _.callback = fe, X(j), q = !0;
                      break t;
                    }
                    _ === u(v) && r(v), X(j);
                  } else r(v);
                  _ = u(v);
                }
                if (_ !== null) q = !0;
                else {
                  var T = u(h);
                  T !== null && it(
                    G,
                    T.startTime - j
                  ), q = !1;
                }
              }
              break e;
            } finally {
              _ = null, A = Y, w = !1;
            }
            q = void 0;
          }
        } finally {
          q ? ye() : ee = !1;
        }
      }
    }
    var ye;
    if (typeof $ == "function")
      ye = function() {
        $(ge);
      };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Qe = He.port2;
      He.port1.onmessage = ge, ye = function() {
        Qe.postMessage(null);
      };
    } else
      ye = function() {
        V(ge, 0);
      };
    function it(j, q) {
      Q = V(function() {
        j(n.unstable_now());
      }, q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, n.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ue = 0 < j ? Math.floor(1e3 / j) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, n.unstable_next = function(j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = A;
      }
      var Y = A;
      A = q;
      try {
        return j();
      } finally {
        A = Y;
      }
    }, n.unstable_requestPaint = function() {
      B = !0;
    }, n.unstable_runWithPriority = function(j, q) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var Y = A;
      A = j;
      try {
        return q();
      } finally {
        A = Y;
      }
    }, n.unstable_scheduleCallback = function(j, q, Y) {
      var ae = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? ae + Y : ae) : Y = ae, j) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return fe = Y + fe, j = {
        id: y++,
        callback: q,
        priorityLevel: j,
        startTime: Y,
        expirationTime: fe,
        sortIndex: -1
      }, Y > ae ? (j.sortIndex = Y, l(h, j), u(v) === null && j === u(h) && (H ? (W(Q), Q = -1) : H = !0, it(G, Y - ae))) : (j.sortIndex = fe, l(v, j), M || w || (M = !0, ee || (ee = !0, ye()))), j;
    }, n.unstable_shouldYield = ve, n.unstable_wrapCallback = function(j) {
      var q = A;
      return function() {
        var Y = A;
        A = q;
        try {
          return j.apply(this, arguments);
        } finally {
          A = Y;
        }
      };
    };
  })(Es)), Es;
}
var ip;
function Ay() {
  return ip || (ip = 1, Ts.exports = Ey()), Ts.exports;
}
var As = { exports: {} }, le = {};
var lp;
function wy() {
  if (lp) return le;
  lp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function w(T) {
    return T === null || typeof T != "object" ? null : (T = A && T[A] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, B = {};
  function V(T, U, L) {
    this.props = T, this.context = U, this.refs = B, this.updater = L || M;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(T, U) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, U, "setState");
  }, V.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function W() {
  }
  W.prototype = V.prototype;
  function $(T, U, L) {
    this.props = T, this.context = U, this.refs = B, this.updater = L || M;
  }
  var X = $.prototype = new W();
  X.constructor = $, H(X, V.prototype), X.isPureReactComponent = !0;
  var G = Array.isArray;
  function ee() {
  }
  var Q = { H: null, A: null, T: null, S: null }, ue = Object.prototype.hasOwnProperty;
  function Se(T, U, L) {
    var K = L.ref;
    return {
      $$typeof: n,
      type: T,
      key: U,
      ref: K !== void 0 ? K : null,
      props: L
    };
  }
  function ve(T, U) {
    return Se(T.type, U, T.props);
  }
  function ge(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function ye(T) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(L) {
      return U[L];
    });
  }
  var He = /\/+/g;
  function Qe(T, U) {
    return typeof T == "object" && T !== null && T.key != null ? ye("" + T.key) : U.toString(36);
  }
  function it(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(ee, ee) : (T.status = "pending", T.then(
          function(U) {
            T.status === "pending" && (T.status = "fulfilled", T.value = U);
          },
          function(U) {
            T.status === "pending" && (T.status = "rejected", T.reason = U);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function j(T, U, L, K, ie) {
    var se = typeof T;
    (se === "undefined" || se === "boolean") && (T = null);
    var ze = !1;
    if (T === null) ze = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ze = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case l:
              ze = !0;
              break;
            case y:
              return ze = T._init, j(
                ze(T._payload),
                U,
                L,
                K,
                ie
              );
          }
      }
    if (ze)
      return ie = ie(T), ze = K === "" ? "." + Qe(T, 0) : K, G(ie) ? (L = "", ze != null && (L = ze.replace(He, "$&/") + "/"), j(ie, U, L, "", function(_n) {
        return _n;
      })) : ie != null && (ge(ie) && (ie = ve(
        ie,
        L + (ie.key == null || T && T.key === ie.key ? "" : ("" + ie.key).replace(
          He,
          "$&/"
        ) + "/") + ze
      )), U.push(ie)), 1;
    ze = 0;
    var tt = K === "" ? "." : K + ":";
    if (G(T))
      for (var Ue = 0; Ue < T.length; Ue++)
        K = T[Ue], se = tt + Qe(K, Ue), ze += j(
          K,
          U,
          L,
          se,
          ie
        );
    else if (Ue = w(T), typeof Ue == "function")
      for (T = Ue.call(T), Ue = 0; !(K = T.next()).done; )
        K = K.value, se = tt + Qe(K, Ue++), ze += j(
          K,
          U,
          L,
          se,
          ie
        );
    else if (se === "object") {
      if (typeof T.then == "function")
        return j(
          it(T),
          U,
          L,
          K,
          ie
        );
      throw U = String(T), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ze;
  }
  function q(T, U, L) {
    if (T == null) return T;
    var K = [], ie = 0;
    return j(T, K, "", "", function(se) {
      return U.call(L, se, ie++);
    }), K;
  }
  function Y(T) {
    if (T._status === -1) {
      var U = T._result;
      U = U(), U.then(
        function(L) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = L);
        },
        function(L) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = L);
        }
      ), T._status === -1 && (T._status = 0, T._result = U);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ae = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  }, fe = {
    map: q,
    forEach: function(T, U, L) {
      q(
        T,
        function() {
          U.apply(this, arguments);
        },
        L
      );
    },
    count: function(T) {
      var U = 0;
      return q(T, function() {
        U++;
      }), U;
    },
    toArray: function(T) {
      return q(T, function(U) {
        return U;
      }) || [];
    },
    only: function(T) {
      if (!ge(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return le.Activity = _, le.Children = fe, le.Component = V, le.Fragment = u, le.Profiler = c, le.PureComponent = $, le.StrictMode = r, le.Suspense = v, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return Q.H.useMemoCache(T);
    }
  }, le.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(T, U, L) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var K = H({}, T.props), ie = T.key;
    if (U != null)
      for (se in U.key !== void 0 && (ie = "" + U.key), U)
        !ue.call(U, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && U.ref === void 0 || (K[se] = U[se]);
    var se = arguments.length - 2;
    if (se === 1) K.children = L;
    else if (1 < se) {
      for (var ze = Array(se), tt = 0; tt < se; tt++)
        ze[tt] = arguments[tt + 2];
      K.children = ze;
    }
    return Se(T.type, ie, K);
  }, le.createContext = function(T) {
    return T = {
      $$typeof: d,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: f,
      _context: T
    }, T;
  }, le.createElement = function(T, U, L) {
    var K, ie = {}, se = null;
    if (U != null)
      for (K in U.key !== void 0 && (se = "" + U.key), U)
        ue.call(U, K) && K !== "key" && K !== "__self" && K !== "__source" && (ie[K] = U[K]);
    var ze = arguments.length - 2;
    if (ze === 1) ie.children = L;
    else if (1 < ze) {
      for (var tt = Array(ze), Ue = 0; Ue < ze; Ue++)
        tt[Ue] = arguments[Ue + 2];
      ie.children = tt;
    }
    if (T && T.defaultProps)
      for (K in ze = T.defaultProps, ze)
        ie[K] === void 0 && (ie[K] = ze[K]);
    return Se(T, se, ie);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(T) {
    return { $$typeof: p, render: T };
  }, le.isValidElement = ge, le.lazy = function(T) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: T },
      _init: Y
    };
  }, le.memo = function(T, U) {
    return {
      $$typeof: h,
      type: T,
      compare: U === void 0 ? null : U
    };
  }, le.startTransition = function(T) {
    var U = Q.T, L = {};
    Q.T = L;
    try {
      var K = T(), ie = Q.S;
      ie !== null && ie(L, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(ee, ae);
    } catch (se) {
      ae(se);
    } finally {
      U !== null && L.types !== null && (U.types = L.types), Q.T = U;
    }
  }, le.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, le.use = function(T) {
    return Q.H.use(T);
  }, le.useActionState = function(T, U, L) {
    return Q.H.useActionState(T, U, L);
  }, le.useCallback = function(T, U) {
    return Q.H.useCallback(T, U);
  }, le.useContext = function(T) {
    return Q.H.useContext(T);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(T, U) {
    return Q.H.useDeferredValue(T, U);
  }, le.useEffect = function(T, U) {
    return Q.H.useEffect(T, U);
  }, le.useEffectEvent = function(T) {
    return Q.H.useEffectEvent(T);
  }, le.useId = function() {
    return Q.H.useId();
  }, le.useImperativeHandle = function(T, U, L) {
    return Q.H.useImperativeHandle(T, U, L);
  }, le.useInsertionEffect = function(T, U) {
    return Q.H.useInsertionEffect(T, U);
  }, le.useLayoutEffect = function(T, U) {
    return Q.H.useLayoutEffect(T, U);
  }, le.useMemo = function(T, U) {
    return Q.H.useMemo(T, U);
  }, le.useOptimistic = function(T, U) {
    return Q.H.useOptimistic(T, U);
  }, le.useReducer = function(T, U, L) {
    return Q.H.useReducer(T, U, L);
  }, le.useRef = function(T) {
    return Q.H.useRef(T);
  }, le.useState = function(T) {
    return Q.H.useState(T);
  }, le.useSyncExternalStore = function(T, U, L) {
    return Q.H.useSyncExternalStore(
      T,
      U,
      L
    );
  }, le.useTransition = function() {
    return Q.H.useTransition();
  }, le.version = "19.2.8", le;
}
var up;
function Hs() {
  return up || (up = 1, As.exports = wy()), As.exports;
}
var ws = { exports: {} }, ft = {};
var rp;
function xy() {
  if (rp) return ft;
  rp = 1;
  var n = Hs();
  function l(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var r = {
    d: {
      f: u,
      r: function() {
        throw Error(l(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function f(v, h, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: _ == null ? null : "" + _,
      children: v,
      containerInfo: h,
      implementation: y
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ft.createPortal = function(v, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(l(299));
    return f(v, h, null, y);
  }, ft.flushSync = function(v) {
    var h = d.T, y = r.p;
    try {
      if (d.T = null, r.p = 2, v) return v();
    } finally {
      d.T = h, r.p = y, r.d.f();
    }
  }, ft.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(v, h));
  }, ft.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, ft.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var y = h.as, _ = p(y, h.crossOrigin), A = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? r.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: _,
          integrity: A,
          fetchPriority: w
        }
      ) : y === "script" && r.d.X(v, {
        crossOrigin: _,
        integrity: A,
        fetchPriority: w,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, ft.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = p(
            h.as,
            h.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && r.d.M(v);
  }, ft.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, _ = p(y, h.crossOrigin);
      r.d.L(v, y, {
        crossOrigin: _,
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
  }, ft.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var y = p(h.as, h.crossOrigin);
        r.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else r.d.m(v);
  }, ft.requestFormReset = function(v) {
    r.d.r(v);
  }, ft.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, ft.useFormState = function(v, h, y) {
    return d.H.useFormState(v, h, y);
  }, ft.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ft.version = "19.2.8", ft;
}
var op;
function Oy() {
  if (op) return ws.exports;
  op = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), ws.exports = xy(), ws.exports;
}
var sp;
function Cy() {
  if (sp) return ll;
  sp = 1;
  var n = Ay(), l = Hs(), u = Oy();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
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
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (f(e) !== e)
      throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, i = t; ; ) {
      var o = a.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (i = o.return, i !== null) {
          a = i;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === a) return v(o), e;
          if (s === i) return v(o), t;
          s = s.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== i.return) a = o, i = s;
      else {
        for (var m = !1, g = o.child; g; ) {
          if (g === a) {
            m = !0, a = o, i = s;
            break;
          }
          if (g === i) {
            m = !0, i = o, a = s;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = s.child; g; ) {
            if (g === a) {
              m = !0, a = s, i = o;
              break;
            }
            if (g === i) {
              m = !0, i = s, a = o;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(r(189));
        }
      }
      if (a.alternate !== i) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), Se = /* @__PURE__ */ Symbol.for("react.activity"), ve = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var He = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === He ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case V:
        return "Profiler";
      case B:
        return "StrictMode";
      case G:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case Se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case X:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case ue:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var it = Array.isArray, j = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], fe = -1;
  function T(e) {
    return { current: e };
  }
  function U(e) {
    0 > fe || (e.current = ae[fe], ae[fe] = null, fe--);
  }
  function L(e, t) {
    fe++, ae[fe] = e.current, e.current = t;
  }
  var K = T(null), ie = T(null), se = T(null), ze = T(null);
  function tt(e, t) {
    switch (L(se, t), L(ie, e), L(K, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Em(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Em(t), e = Am(t, e);
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
    U(K), L(K, e);
  }
  function Ue() {
    U(K), U(ie), U(se);
  }
  function _n(e) {
    e.memoizedState !== null && L(ze, e);
    var t = K.current, a = Am(t, e.type);
    t !== a && (L(ie, e), L(K, a));
  }
  function Pn(e) {
    ie.current === e && (U(K), U(ie)), ze.current === e && (U(ze), el._currentValue = Y);
  }
  var fi, bl;
  function Wt(e) {
    if (fi === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        fi = t && t[1] || "", bl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fi + e + bl;
  }
  var ar = !1;
  function ir(e, t) {
    if (!e || ar) return "";
    ar = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (N) {
                  var C = N;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (N) {
                  C = N;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                C = N;
              }
              (k = e()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (N) {
            if (N && C && typeof N.stack == "string")
              return [N.stack, C.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = i.DetermineComponentFrameRoot(), m = s[0], g = s[1];
      if (m && g) {
        var b = m.split(`
`), O = g.split(`
`);
        for (o = i = 0; i < b.length && !b[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < O.length && !O[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === b.length || o === O.length)
          for (i = b.length - 1, o = O.length - 1; 1 <= i && 0 <= o && b[i] !== O[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (b[i] !== O[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || b[i] !== O[o]) {
                  var D = `
` + b[i].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ar = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Wt(a) : "";
  }
  function Ih(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wt(e.type);
      case 16:
        return Wt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Wt("Suspense Fallback") : Wt("Suspense");
      case 19:
        return Wt("SuspenseList");
      case 0:
      case 15:
        return ir(e.type, !1);
      case 11:
        return ir(e.type.render, !1);
      case 1:
        return ir(e.type, !0);
      case 31:
        return Wt("Activity");
      default:
        return "";
    }
  }
  function ec(e) {
    try {
      var t = "", a = null;
      do
        t += Ih(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var lr = Object.prototype.hasOwnProperty, ur = n.unstable_scheduleCallback, rr = n.unstable_cancelCallback, ev = n.unstable_shouldYield, tv = n.unstable_requestPaint, Tt = n.unstable_now, nv = n.unstable_getCurrentPriorityLevel, tc = n.unstable_ImmediatePriority, nc = n.unstable_UserBlockingPriority, _l = n.unstable_NormalPriority, av = n.unstable_LowPriority, ac = n.unstable_IdlePriority, iv = n.log, lv = n.unstable_setDisableYieldValue, di = null, Et = null;
  function Sn(e) {
    if (typeof iv == "function" && lv(e), Et && typeof Et.setStrictMode == "function")
      try {
        Et.setStrictMode(di, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : ov, uv = Math.log, rv = Math.LN2;
  function ov(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (uv(e) / rv | 0) | 0;
  }
  var Sl = 256, zl = 262144, Tl = 4194304;
  function Fn(e) {
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
  function El(e, t, a) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = i & 134217727;
    return g !== 0 ? (i = g & ~s, i !== 0 ? o = Fn(i) : (m &= g, m !== 0 ? o = Fn(m) : a || (a = g & ~e, a !== 0 && (o = Fn(a))))) : (g = i & ~s, g !== 0 ? o = Fn(g) : m !== 0 ? o = Fn(m) : a || (a = i & ~e, a !== 0 && (o = Fn(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : o;
  }
  function mi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function sv(e, t) {
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
  function ic() {
    var e = Tl;
    return Tl <<= 1, (Tl & 62914560) === 0 && (Tl = 4194304), e;
  }
  function or(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function pi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function cv(e, t, a, i, o, s) {
    var m = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var g = e.entanglements, b = e.expirationTimes, O = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var D = 31 - At(a), k = 1 << D;
      g[D] = 0, b[D] = -1;
      var C = O[D];
      if (C !== null)
        for (O[D] = null, D = 0; D < C.length; D++) {
          var N = C[D];
          N !== null && (N.lane &= -536870913);
        }
      a &= ~k;
    }
    i !== 0 && lc(e, i, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function lc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
  }
  function uc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var i = 31 - At(a), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), a &= ~o;
    }
  }
  function rc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : sr(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function sr(e) {
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
  function cr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function oc() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Km(e.type));
  }
  function sc(e, t) {
    var a = q.p;
    try {
      return q.p = e, t();
    } finally {
      q.p = a;
    }
  }
  var zn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + zn, ht = "__reactProps$" + zn, Sa = "__reactContainer$" + zn, fr = "__reactEvents$" + zn, fv = "__reactListeners$" + zn, dv = "__reactHandles$" + zn, cc = "__reactResources$" + zn, hi = "__reactMarker$" + zn;
  function dr(e) {
    delete e[lt], delete e[ht], delete e[fr], delete e[fv], delete e[dv];
  }
  function za(e) {
    var t = e[lt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Sa] || a[lt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = jm(e); e !== null; ) {
            if (a = e[lt]) return a;
            e = jm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ta(e) {
    if (e = e[lt] || e[Sa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function vi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ea(e) {
    var t = e[cc];
    return t || (t = e[cc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[hi] = !0;
  }
  var fc = /* @__PURE__ */ new Set(), dc = {};
  function In(e, t) {
    Aa(e, t), Aa(e + "Capture", t);
  }
  function Aa(e, t) {
    for (dc[e] = t, e = 0; e < t.length; e++)
      fc.add(t[e]);
  }
  var mv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mc = {}, pc = {};
  function pv(e) {
    return lr.call(pc, e) ? !0 : lr.call(mc, e) ? !1 : mv.test(e) ? pc[e] = !0 : (mc[e] = !0, !1);
  }
  function Al(e, t, a) {
    if (pv(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function wl(e, t, a) {
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
  function tn(e, t, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + i);
    }
  }
  function Zt(e) {
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
  function hc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function hv(e, t, a) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, s = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(m) {
          a = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(m) {
          a = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function mr(e) {
    if (!e._valueTracker) {
      var t = hc(e) ? "checked" : "value";
      e._valueTracker = hv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function vc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), i = "";
    return e && (i = hc(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
  }
  function xl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var vv = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(
      vv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function pr(e, t, a, i, o, s, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? hr(e, m, Zt(t)) : a != null ? hr(e, m, Zt(a)) : i != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Zt(g) : e.removeAttribute("name");
  }
  function gc(e, t, a, i, o, s, m, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        mr(e);
        return;
      }
      a = a != null ? "" + Zt(a) : "", t = t != null ? "" + Zt(t) : a, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = g ? e.checked : !!i, e.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), mr(e);
  }
  function hr(e, t, a) {
    t === "number" && xl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function wa(e, t, a, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < a.length; o++)
        t["$" + a[o]] = !0;
      for (a = 0; a < e.length; a++)
        o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Zt(a), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === a) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yc(e, t, a) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Zt(a) : "";
  }
  function bc(e, t, a, i) {
    if (t == null) {
      if (i != null) {
        if (a != null) throw Error(r(92));
        if (it(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        a = i;
      }
      a == null && (a = ""), t = a;
    }
    a = Zt(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), mr(e);
  }
  function xa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var gv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _c(e, t, a) {
    var i = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || gv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Sc(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var i in a)
        !a.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && a[o] !== i && _c(e, o, i);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && _c(e, s, t[s]);
  }
  function vr(e) {
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
  var yv = /* @__PURE__ */ new Map([
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
  ]), bv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ol(e) {
    return bv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function nn() {
  }
  var gr = null;
  function yr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Oa = null, Ca = null;
  function zc(e) {
    var t = Ta(e);
    if (t && (e = t.stateNode)) {
      var a = e[ht] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (pr(
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
              'input[name="' + Rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var i = a[t];
              if (i !== e && i.form === e.form) {
                var o = i[ht] || null;
                if (!o) throw Error(r(90));
                pr(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              i = a[t], i.form === e.form && vc(i);
          }
          break e;
        case "textarea":
          yc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && wa(e, !!a.multiple, t, !1);
      }
    }
  }
  var br = !1;
  function Tc(e, t, a) {
    if (br) return e(t, a);
    br = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (br = !1, (Oa !== null || Ca !== null) && (hu(), Oa && (t = Oa, e = Ca, Ca = Oa = null, zc(t), e)))
        for (t = 0; t < e.length; t++) zc(e[t]);
    }
  }
  function gi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var i = a[ht] || null;
    if (i === null) return null;
    a = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
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
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _r = !1;
  if (an)
    try {
      var yi = {};
      Object.defineProperty(yi, "passive", {
        get: function() {
          _r = !0;
        }
      }), window.addEventListener("test", yi, yi), window.removeEventListener("test", yi, yi);
    } catch {
      _r = !1;
    }
  var Tn = null, Sr = null, Cl = null;
  function Ec() {
    if (Cl) return Cl;
    var e, t = Sr, a = t.length, i, o = "value" in Tn ? Tn.value : Tn.textContent, s = o.length;
    for (e = 0; e < a && t[e] === o[e]; e++) ;
    var m = a - e;
    for (i = 1; i <= m && t[a - i] === o[s - i]; i++) ;
    return Cl = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Ml(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Nl() {
    return !0;
  }
  function Ac() {
    return !1;
  }
  function vt(e) {
    function t(a, i, o, s, m) {
      this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (a = e[g], this[g] = a ? a(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Nl : Ac, this.isPropagationStopped = Ac, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Nl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Nl);
      },
      persist: function() {
      },
      isPersistent: Nl
    }), t;
  }
  var ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jl = vt(ea), bi = _({}, ea, { view: 0, detail: 0 }), _v = vt(bi), zr, Tr, _i, Dl = _({}, bi, {
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
    getModifierState: Ar,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== _i && (_i && e.type === "mousemove" ? (zr = e.screenX - _i.screenX, Tr = e.screenY - _i.screenY) : Tr = zr = 0, _i = e), zr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Tr;
    }
  }), wc = vt(Dl), Sv = _({}, Dl, { dataTransfer: 0 }), zv = vt(Sv), Tv = _({}, bi, { relatedTarget: 0 }), Er = vt(Tv), Ev = _({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Av = vt(Ev), wv = _({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), xv = vt(wv), Ov = _({}, ea, { data: 0 }), xc = vt(Ov), Cv = {
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
  }, Mv = {
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
  }, Nv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nv[e]) ? !!t[e] : !1;
  }
  function Ar() {
    return jv;
  }
  var Dv = _({}, bi, {
    key: function(e) {
      if (e.key) {
        var t = Cv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ar,
    charCode: function(e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Zv = vt(Dv), Rv = _({}, Dl, {
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
  }), Oc = vt(Rv), Uv = _({}, bi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ar
  }), kv = vt(Uv), Yv = _({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xv = vt(Yv), Hv = _({}, Dl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bv = vt(Hv), qv = _({}, ea, {
    newState: 0,
    oldState: 0
  }), $v = vt(qv), Vv = [9, 13, 27, 32], wr = an && "CompositionEvent" in window, Si = null;
  an && "documentMode" in document && (Si = document.documentMode);
  var Lv = an && "TextEvent" in window && !Si, Cc = an && (!wr || Si && 8 < Si && 11 >= Si), Mc = " ", Nc = !1;
  function jc(e, t) {
    switch (e) {
      case "keyup":
        return Vv.indexOf(t.keyCode) !== -1;
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
  function Dc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ma = !1;
  function Gv(e, t) {
    switch (e) {
      case "compositionend":
        return Dc(t);
      case "keypress":
        return t.which !== 32 ? null : (Nc = !0, Mc);
      case "textInput":
        return e = t.data, e === Mc && Nc ? null : e;
      default:
        return null;
    }
  }
  function Qv(e, t) {
    if (Ma)
      return e === "compositionend" || !wr && jc(e, t) ? (e = Ec(), Cl = Sr = Tn = null, Ma = !1, e) : null;
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
        return Cc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Kv = {
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
  function Zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Kv[e.type] : t === "textarea";
  }
  function Rc(e, t, a, i) {
    Oa ? Ca ? Ca.push(i) : Ca = [i] : Oa = i, t = zu(t, "onChange"), 0 < t.length && (a = new jl(
      "onChange",
      "change",
      null,
      a,
      i
    ), e.push({ event: a, listeners: t }));
  }
  var zi = null, Ti = null;
  function Jv(e) {
    ym(e, 0);
  }
  function Zl(e) {
    var t = vi(e);
    if (vc(t)) return e;
  }
  function Uc(e, t) {
    if (e === "change") return t;
  }
  var kc = !1;
  if (an) {
    var xr;
    if (an) {
      var Or = "oninput" in document;
      if (!Or) {
        var Yc = document.createElement("div");
        Yc.setAttribute("oninput", "return;"), Or = typeof Yc.oninput == "function";
      }
      xr = Or;
    } else xr = !1;
    kc = xr && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    zi && (zi.detachEvent("onpropertychange", Hc), Ti = zi = null);
  }
  function Hc(e) {
    if (e.propertyName === "value" && Zl(Ti)) {
      var t = [];
      Rc(
        t,
        Ti,
        e,
        yr(e)
      ), Tc(Jv, t);
    }
  }
  function Wv(e, t, a) {
    e === "focusin" ? (Xc(), zi = t, Ti = a, zi.attachEvent("onpropertychange", Hc)) : e === "focusout" && Xc();
  }
  function Pv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zl(Ti);
  }
  function Fv(e, t) {
    if (e === "click") return Zl(t);
  }
  function Iv(e, t) {
    if (e === "input" || e === "change")
      return Zl(t);
  }
  function eg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var wt = typeof Object.is == "function" ? Object.is : eg;
  function Ei(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), i = Object.keys(t);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      if (!lr.call(t, o) || !wt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Bc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qc(e, t) {
    var a = Bc(e);
    e = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (i = e + a.textContent.length, e <= t && i >= t)
          return { node: a, offset: t - e };
        e = i;
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
      a = Bc(a);
    }
  }
  function $c(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $c(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Vc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = xl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = xl(e.document);
    }
    return t;
  }
  function Cr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var tg = an && "documentMode" in document && 11 >= document.documentMode, Na = null, Mr = null, Ai = null, Nr = !1;
  function Lc(e, t, a) {
    var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Nr || Na == null || Na !== xl(i) || (i = Na, "selectionStart" in i && Cr(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ai && Ei(Ai, i) || (Ai = i, i = zu(Mr, "onSelect"), 0 < i.length && (t = new jl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: i }), t.target = Na)));
  }
  function ta(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var ja = {
    animationend: ta("Animation", "AnimationEnd"),
    animationiteration: ta("Animation", "AnimationIteration"),
    animationstart: ta("Animation", "AnimationStart"),
    transitionrun: ta("Transition", "TransitionRun"),
    transitionstart: ta("Transition", "TransitionStart"),
    transitioncancel: ta("Transition", "TransitionCancel"),
    transitionend: ta("Transition", "TransitionEnd")
  }, jr = {}, Gc = {};
  an && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function na(e) {
    if (jr[e]) return jr[e];
    if (!ja[e]) return e;
    var t = ja[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Gc)
        return jr[e] = t[a];
    return e;
  }
  var Qc = na("animationend"), Kc = na("animationiteration"), Jc = na("animationstart"), ng = na("transitionrun"), ag = na("transitionstart"), ig = na("transitioncancel"), Wc = na("transitionend"), Pc = /* @__PURE__ */ new Map(), Dr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dr.push("scrollEnd");
  function Gt(e, t) {
    Pc.set(e, t), In(t, [e]);
  }
  var Rl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ut = [], Da = 0, Zr = 0;
  function Ul() {
    for (var e = Da, t = Zr = Da = 0; t < e; ) {
      var a = Ut[t];
      Ut[t++] = null;
      var i = Ut[t];
      Ut[t++] = null;
      var o = Ut[t];
      Ut[t++] = null;
      var s = Ut[t];
      if (Ut[t++] = null, i !== null && o !== null) {
        var m = i.pending;
        m === null ? o.next = o : (o.next = m.next, m.next = o), i.pending = o;
      }
      s !== 0 && Fc(a, o, s);
    }
  }
  function kl(e, t, a, i) {
    Ut[Da++] = e, Ut[Da++] = t, Ut[Da++] = a, Ut[Da++] = i, Zr |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Rr(e, t, a, i) {
    return kl(e, t, a, i), Yl(e);
  }
  function aa(e, t) {
    return kl(e, null, null, t), Yl(e);
  }
  function Fc(e, t, a) {
    e.lanes |= a;
    var i = e.alternate;
    i !== null && (i.lanes |= a);
    for (var o = !1, s = e.return; s !== null; )
      s.childLanes |= a, i = s.alternate, i !== null && (i.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (o = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - At(a), e = s.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), s) : null;
  }
  function Yl(e) {
    if (50 < Qi)
      throw Qi = 0, Lo = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Za = {};
  function lg(e, t, a, i) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, a, i) {
    return new lg(e, t, a, i);
  }
  function Ur(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ln(e, t) {
    var a = e.alternate;
    return a === null ? (a = xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Ic(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Xl(e, t, a, i, o, s) {
    var m = 0;
    if (i = e, typeof e == "function") Ur(e) && (m = 1);
    else if (typeof e == "string")
      m = cy(
        e,
        a,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Se:
          return e = xt(31, a, t, o), e.elementType = Se, e.lanes = s, e;
        case H:
          return ia(a.children, o, s, t);
        case B:
          m = 8, o |= 24;
          break;
        case V:
          return e = xt(12, a, t, o | 2), e.elementType = V, e.lanes = s, e;
        case G:
          return e = xt(13, a, t, o), e.elementType = G, e.lanes = s, e;
        case ee:
          return e = xt(19, a, t, o), e.elementType = ee, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                m = 10;
                break e;
              case W:
                m = 9;
                break e;
              case X:
                m = 11;
                break e;
              case Q:
                m = 14;
                break e;
              case ue:
                m = 16, i = null;
                break e;
            }
          m = 29, a = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = xt(m, a, t, o), t.elementType = e, t.type = i, t.lanes = s, t;
  }
  function ia(e, t, a, i) {
    return e = xt(7, e, i, t), e.lanes = a, e;
  }
  function kr(e, t, a) {
    return e = xt(6, e, null, t), e.lanes = a, e;
  }
  function ef(e) {
    var t = xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Yr(e, t, a) {
    return t = xt(
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
  var tf = /* @__PURE__ */ new WeakMap();
  function kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = tf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: ec(t)
      }, tf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ec(t)
    };
  }
  var Ra = [], Ua = 0, Hl = null, wi = 0, Yt = [], Xt = 0, En = null, Pt = 1, Ft = "";
  function un(e, t) {
    Ra[Ua++] = wi, Ra[Ua++] = Hl, Hl = e, wi = t;
  }
  function nf(e, t, a) {
    Yt[Xt++] = Pt, Yt[Xt++] = Ft, Yt[Xt++] = En, En = e;
    var i = Pt;
    e = Ft;
    var o = 32 - At(i) - 1;
    i &= ~(1 << o), a += 1;
    var s = 32 - At(t) + o;
    if (30 < s) {
      var m = o - o % 5;
      s = (i & (1 << m) - 1).toString(32), i >>= m, o -= m, Pt = 1 << 32 - At(t) + o | a << o | i, Ft = s + e;
    } else
      Pt = 1 << s | a << o | i, Ft = e;
  }
  function Xr(e) {
    e.return !== null && (un(e, 1), nf(e, 1, 0));
  }
  function Hr(e) {
    for (; e === Hl; )
      Hl = Ra[--Ua], Ra[Ua] = null, wi = Ra[--Ua], Ra[Ua] = null;
    for (; e === En; )
      En = Yt[--Xt], Yt[Xt] = null, Ft = Yt[--Xt], Yt[Xt] = null, Pt = Yt[--Xt], Yt[Xt] = null;
  }
  function af(e, t) {
    Yt[Xt++] = Pt, Yt[Xt++] = Ft, Yt[Xt++] = En, Pt = t.id, Ft = t.overflow, En = e;
  }
  var ut = null, Ze = null, be = !1, An = null, Ht = !1, Br = Error(r(519));
  function wn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xi(kt(t, e)), Br;
  }
  function lf(e) {
    var t = e.stateNode, a = e.type, i = e.memoizedProps;
    switch (t[lt] = e, t[ht] = i, a) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ji.length; a++)
          me(Ji[a], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), gc(
          t,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), bc(t, i.value, i.defaultValue, i.children);
    }
    a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || zm(t.textContent, a) ? (i.popover != null && (me("beforetoggle", t), me("toggle", t)), i.onScroll != null && me("scroll", t), i.onScrollEnd != null && me("scrollend", t), i.onClick != null && (t.onclick = nn), t = !0) : t = !1, t || wn(e, !0);
  }
  function uf(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          Ht = !1;
          return;
        case 27:
        case 3:
          Ht = !0;
          return;
        default:
          ut = ut.return;
      }
  }
  function ka(e) {
    if (e !== ut) return !1;
    if (!be) return uf(e), be = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || us(e.type, e.memoizedProps)), a = !a), a && Ze && wn(e), uf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ze = Nm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ze = Nm(e);
    } else
      t === 27 ? (t = Ze, Hn(e.type) ? (e = fs, fs = null, Ze = e) : Ze = t) : Ze = ut ? qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function la() {
    Ze = ut = null, be = !1;
  }
  function qr() {
    var e = An;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), An = null), e;
  }
  function xi(e) {
    An === null ? An = [e] : An.push(e);
  }
  var $r = T(null), ua = null, rn = null;
  function xn(e, t, a) {
    L($r, t._currentValue), t._currentValue = a;
  }
  function on(e) {
    e._currentValue = $r.current, U($r);
  }
  function Vr(e, t, a) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Lr(e, t, a, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var m = o.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = o;
          for (var b = 0; b < t.length; b++)
            if (g.context === t[b]) {
              s.lanes |= a, g = s.alternate, g !== null && (g.lanes |= a), Vr(
                s.return,
                a,
                e
              ), i || (m = null);
              break e;
            }
          s = g.next;
        }
      } else if (o.tag === 18) {
        if (m = o.return, m === null) throw Error(r(341));
        m.lanes |= a, s = m.alternate, s !== null && (s.lanes |= a), Vr(m, a, e), m = null;
      } else m = o.child;
      if (m !== null) m.return = o;
      else
        for (m = o; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (o = m.sibling, o !== null) {
            o.return = m.return, m = o;
            break;
          }
          m = m.return;
        }
      o = m;
    }
  }
  function Ya(e, t, a, i) {
    e = null;
    for (var o = t, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var m = o.alternate;
        if (m === null) throw Error(r(387));
        if (m = m.memoizedProps, m !== null) {
          var g = o.type;
          wt(o.pendingProps.value, m.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (o === ze.current) {
        if (m = o.alternate, m === null) throw Error(r(387));
        m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(el) : e = [el]);
      }
      o = o.return;
    }
    e !== null && Lr(
      t,
      e,
      a,
      i
    ), t.flags |= 262144;
  }
  function Bl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ra(e) {
    ua = e, rn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function rt(e) {
    return rf(ua, e);
  }
  function ql(e, t) {
    return ua === null && ra(e), rf(e, t);
  }
  function rf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, rn === null) {
      if (e === null) throw Error(r(308));
      rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else rn = rn.next = t;
    return a;
  }
  var ug = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, rg = n.unstable_scheduleCallback, og = n.unstable_NormalPriority, Ke = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gr() {
    return {
      controller: new ug(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oi(e) {
    e.refCount--, e.refCount === 0 && rg(og, function() {
      e.controller.abort();
    });
  }
  var Ci = null, Qr = 0, Xa = 0, Ha = null;
  function sg(e, t) {
    if (Ci === null) {
      var a = Ci = [];
      Qr = 0, Xa = Po(), Ha = {
        status: "pending",
        value: void 0,
        then: function(i) {
          a.push(i);
        }
      };
    }
    return Qr++, t.then(of, of), t;
  }
  function of() {
    if (--Qr === 0 && Ci !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var e = Ci;
      Ci = null, Xa = 0, Ha = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function cg(e, t) {
    var a = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        a.push(o);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var o = 0; o < a.length; o++) (0, a[o])(t);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
          (0, a[o])(void 0);
      }
    ), i;
  }
  var sf = j.S;
  j.S = function(e, t) {
    Gd = Tt(), typeof t == "object" && t !== null && typeof t.then == "function" && sg(e, t), sf !== null && sf(e, t);
  };
  var oa = T(null);
  function Kr() {
    var e = oa.current;
    return e !== null ? e : De.pooledCache;
  }
  function $l(e, t) {
    t === null ? L(oa, oa.current) : L(oa, t.pool);
  }
  function cf() {
    var e = Kr();
    return e === null ? null : { parent: Ke._currentValue, pool: e };
  }
  var Ba = Error(r(460)), Jr = Error(r(474)), Vl = Error(r(542)), Ll = { then: function() {
  } };
  function ff(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function df(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(nn, nn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, pf(e), e;
      default:
        if (typeof t.status == "string") t.then(nn, nn);
        else {
          if (e = De, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, pf(e), e;
        }
        throw ca = t, Ba;
    }
  }
  function sa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ca = a, Ba) : a;
    }
  }
  var ca = null;
  function mf() {
    if (ca === null) throw Error(r(459));
    var e = ca;
    return ca = null, e;
  }
  function pf(e) {
    if (e === Ba || e === Vl)
      throw Error(r(483));
  }
  var qa = null, Mi = 0;
  function Gl(e) {
    var t = Mi;
    return Mi += 1, qa === null && (qa = []), df(qa, e, t);
  }
  function Ni(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ql(e, t) {
    throw t.$$typeof === A ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function hf(e) {
    function t(E, z) {
      if (e) {
        var x = E.deletions;
        x === null ? (E.deletions = [z], E.flags |= 16) : x.push(z);
      }
    }
    function a(E, z) {
      if (!e) return null;
      for (; z !== null; )
        t(E, z), z = z.sibling;
      return null;
    }
    function i(E) {
      for (var z = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? z.set(E.key, E) : z.set(E.index, E), E = E.sibling;
      return z;
    }
    function o(E, z) {
      return E = ln(E, z), E.index = 0, E.sibling = null, E;
    }
    function s(E, z, x) {
      return E.index = x, e ? (x = E.alternate, x !== null ? (x = x.index, x < z ? (E.flags |= 67108866, z) : x) : (E.flags |= 67108866, z)) : (E.flags |= 1048576, z);
    }
    function m(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function g(E, z, x, Z) {
      return z === null || z.tag !== 6 ? (z = kr(x, E.mode, Z), z.return = E, z) : (z = o(z, x), z.return = E, z);
    }
    function b(E, z, x, Z) {
      var F = x.type;
      return F === H ? D(
        E,
        z,
        x.props.children,
        Z,
        x.key
      ) : z !== null && (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ue && sa(F) === z.type) ? (z = o(z, x.props), Ni(z, x), z.return = E, z) : (z = Xl(
        x.type,
        x.key,
        x.props,
        null,
        E.mode,
        Z
      ), Ni(z, x), z.return = E, z);
    }
    function O(E, z, x, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== x.containerInfo || z.stateNode.implementation !== x.implementation ? (z = Yr(x, E.mode, Z), z.return = E, z) : (z = o(z, x.children || []), z.return = E, z);
    }
    function D(E, z, x, Z, F) {
      return z === null || z.tag !== 7 ? (z = ia(
        x,
        E.mode,
        Z,
        F
      ), z.return = E, z) : (z = o(z, x), z.return = E, z);
    }
    function k(E, z, x) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = kr(
          "" + z,
          E.mode,
          x
        ), z.return = E, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            return x = Xl(
              z.type,
              z.key,
              z.props,
              null,
              E.mode,
              x
            ), Ni(x, z), x.return = E, x;
          case M:
            return z = Yr(
              z,
              E.mode,
              x
            ), z.return = E, z;
          case ue:
            return z = sa(z), k(E, z, x);
        }
        if (it(z) || ye(z))
          return z = ia(
            z,
            E.mode,
            x,
            null
          ), z.return = E, z;
        if (typeof z.then == "function")
          return k(E, Gl(z), x);
        if (z.$$typeof === $)
          return k(
            E,
            ql(E, z),
            x
          );
        Ql(E, z);
      }
      return null;
    }
    function C(E, z, x, Z) {
      var F = z !== null ? z.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return F !== null ? null : g(E, z, "" + x, Z);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            return x.key === F ? b(E, z, x, Z) : null;
          case M:
            return x.key === F ? O(E, z, x, Z) : null;
          case ue:
            return x = sa(x), C(E, z, x, Z);
        }
        if (it(x) || ye(x))
          return F !== null ? null : D(E, z, x, Z, null);
        if (typeof x.then == "function")
          return C(
            E,
            z,
            Gl(x),
            Z
          );
        if (x.$$typeof === $)
          return C(
            E,
            z,
            ql(E, x),
            Z
          );
        Ql(E, x);
      }
      return null;
    }
    function N(E, z, x, Z, F) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return E = E.get(x) || null, g(z, E, "" + Z, F);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case w:
            return E = E.get(
              Z.key === null ? x : Z.key
            ) || null, b(z, E, Z, F);
          case M:
            return E = E.get(
              Z.key === null ? x : Z.key
            ) || null, O(z, E, Z, F);
          case ue:
            return Z = sa(Z), N(
              E,
              z,
              x,
              Z,
              F
            );
        }
        if (it(Z) || ye(Z))
          return E = E.get(x) || null, D(z, E, Z, F, null);
        if (typeof Z.then == "function")
          return N(
            E,
            z,
            x,
            Gl(Z),
            F
          );
        if (Z.$$typeof === $)
          return N(
            E,
            z,
            x,
            ql(z, Z),
            F
          );
        Ql(z, Z);
      }
      return null;
    }
    function J(E, z, x, Z) {
      for (var F = null, Te = null, P = z, oe = z = 0, he = null; P !== null && oe < x.length; oe++) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Ee = C(
          E,
          P,
          x[oe],
          Z
        );
        if (Ee === null) {
          P === null && (P = he);
          break;
        }
        e && P && Ee.alternate === null && t(E, P), z = s(Ee, z, oe), Te === null ? F = Ee : Te.sibling = Ee, Te = Ee, P = he;
      }
      if (oe === x.length)
        return a(E, P), be && un(E, oe), F;
      if (P === null) {
        for (; oe < x.length; oe++)
          P = k(E, x[oe], Z), P !== null && (z = s(
            P,
            z,
            oe
          ), Te === null ? F = P : Te.sibling = P, Te = P);
        return be && un(E, oe), F;
      }
      for (P = i(P); oe < x.length; oe++)
        he = N(
          P,
          E,
          oe,
          x[oe],
          Z
        ), he !== null && (e && he.alternate !== null && P.delete(
          he.key === null ? oe : he.key
        ), z = s(
          he,
          z,
          oe
        ), Te === null ? F = he : Te.sibling = he, Te = he);
      return e && P.forEach(function(Ln) {
        return t(E, Ln);
      }), be && un(E, oe), F;
    }
    function te(E, z, x, Z) {
      if (x == null) throw Error(r(151));
      for (var F = null, Te = null, P = z, oe = z = 0, he = null, Ee = x.next(); P !== null && !Ee.done; oe++, Ee = x.next()) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Ln = C(E, P, Ee.value, Z);
        if (Ln === null) {
          P === null && (P = he);
          break;
        }
        e && P && Ln.alternate === null && t(E, P), z = s(Ln, z, oe), Te === null ? F = Ln : Te.sibling = Ln, Te = Ln, P = he;
      }
      if (Ee.done)
        return a(E, P), be && un(E, oe), F;
      if (P === null) {
        for (; !Ee.done; oe++, Ee = x.next())
          Ee = k(E, Ee.value, Z), Ee !== null && (z = s(Ee, z, oe), Te === null ? F = Ee : Te.sibling = Ee, Te = Ee);
        return be && un(E, oe), F;
      }
      for (P = i(P); !Ee.done; oe++, Ee = x.next())
        Ee = N(P, E, oe, Ee.value, Z), Ee !== null && (e && Ee.alternate !== null && P.delete(Ee.key === null ? oe : Ee.key), z = s(Ee, z, oe), Te === null ? F = Ee : Te.sibling = Ee, Te = Ee);
      return e && P.forEach(function(Sy) {
        return t(E, Sy);
      }), be && un(E, oe), F;
    }
    function Ne(E, z, x, Z) {
      if (typeof x == "object" && x !== null && x.type === H && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            e: {
              for (var F = x.key; z !== null; ) {
                if (z.key === F) {
                  if (F = x.type, F === H) {
                    if (z.tag === 7) {
                      a(
                        E,
                        z.sibling
                      ), Z = o(
                        z,
                        x.props.children
                      ), Z.return = E, E = Z;
                      break e;
                    }
                  } else if (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ue && sa(F) === z.type) {
                    a(
                      E,
                      z.sibling
                    ), Z = o(z, x.props), Ni(Z, x), Z.return = E, E = Z;
                    break e;
                  }
                  a(E, z);
                  break;
                } else t(E, z);
                z = z.sibling;
              }
              x.type === H ? (Z = ia(
                x.props.children,
                E.mode,
                Z,
                x.key
              ), Z.return = E, E = Z) : (Z = Xl(
                x.type,
                x.key,
                x.props,
                null,
                E.mode,
                Z
              ), Ni(Z, x), Z.return = E, E = Z);
            }
            return m(E);
          case M:
            e: {
              for (F = x.key; z !== null; ) {
                if (z.key === F)
                  if (z.tag === 4 && z.stateNode.containerInfo === x.containerInfo && z.stateNode.implementation === x.implementation) {
                    a(
                      E,
                      z.sibling
                    ), Z = o(z, x.children || []), Z.return = E, E = Z;
                    break e;
                  } else {
                    a(E, z);
                    break;
                  }
                else t(E, z);
                z = z.sibling;
              }
              Z = Yr(x, E.mode, Z), Z.return = E, E = Z;
            }
            return m(E);
          case ue:
            return x = sa(x), Ne(
              E,
              z,
              x,
              Z
            );
        }
        if (it(x))
          return J(
            E,
            z,
            x,
            Z
          );
        if (ye(x)) {
          if (F = ye(x), typeof F != "function") throw Error(r(150));
          return x = F.call(x), te(
            E,
            z,
            x,
            Z
          );
        }
        if (typeof x.then == "function")
          return Ne(
            E,
            z,
            Gl(x),
            Z
          );
        if (x.$$typeof === $)
          return Ne(
            E,
            z,
            ql(E, x),
            Z
          );
        Ql(E, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, z !== null && z.tag === 6 ? (a(E, z.sibling), Z = o(z, x), Z.return = E, E = Z) : (a(E, z), Z = kr(x, E.mode, Z), Z.return = E, E = Z), m(E)) : a(E, z);
    }
    return function(E, z, x, Z) {
      try {
        Mi = 0;
        var F = Ne(
          E,
          z,
          x,
          Z
        );
        return qa = null, F;
      } catch (P) {
        if (P === Ba || P === Vl) throw P;
        var Te = xt(29, P, null, E.mode);
        return Te.lanes = Z, Te.return = E, Te;
      }
    };
  }
  var fa = hf(!0), vf = hf(!1), On = !1;
  function Wr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Pr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Cn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(e, t, a) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (we & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Yl(e), Fc(e, null, a), t;
    }
    return kl(e, i, t, a), Yl(e);
  }
  function ji(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, a |= i, t.lanes = a, uc(e, a);
    }
  }
  function Fr(e, t) {
    var a = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, a === i)) {
      var o = null, s = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var m = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = m : s = s.next = m, a = a.next;
        } while (a !== null);
        s === null ? o = s = t : s = s.next = t;
      } else o = s = t;
      a = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Ir = !1;
  function Di() {
    if (Ir) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function Zi(e, t, a, i) {
    Ir = !1;
    var o = e.updateQueue;
    On = !1;
    var s = o.firstBaseUpdate, m = o.lastBaseUpdate, g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var b = g, O = b.next;
      b.next = null, m === null ? s = O : m.next = O, m = b;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, g = D.lastBaseUpdate, g !== m && (g === null ? D.firstBaseUpdate = O : g.next = O, D.lastBaseUpdate = b));
    }
    if (s !== null) {
      var k = o.baseState;
      m = 0, D = O = b = null, g = s;
      do {
        var C = g.lane & -536870913, N = C !== g.lane;
        if (N ? (pe & C) === C : (i & C) === C) {
          C !== 0 && C === Xa && (Ir = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, te = g;
            C = t;
            var Ne = a;
            switch (te.tag) {
              case 1:
                if (J = te.payload, typeof J == "function") {
                  k = J.call(Ne, k, C);
                  break e;
                }
                k = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = te.payload, C = typeof J == "function" ? J.call(Ne, k, C) : J, C == null) break e;
                k = _({}, k, C);
                break e;
              case 2:
                On = !0;
            }
          }
          C = g.callback, C !== null && (e.flags |= 64, N && (e.flags |= 8192), N = o.callbacks, N === null ? o.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, D === null ? (O = D = N, b = k) : D = D.next = N, m |= C;
        if (g = g.next, g === null) {
          if (g = o.shared.pending, g === null)
            break;
          N = g, g = N.next, N.next = null, o.lastBaseUpdate = N, o.shared.pending = null;
        }
      } while (!0);
      D === null && (b = k), o.baseState = b, o.firstBaseUpdate = O, o.lastBaseUpdate = D, s === null && (o.shared.lanes = 0), Rn |= m, e.lanes = m, e.memoizedState = k;
    }
  }
  function gf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function yf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        gf(a[e], t);
  }
  var $a = T(null), Kl = T(0);
  function bf(e, t) {
    e = gn, L(Kl, e), L($a, t), gn = e | t.baseLanes;
  }
  function eo() {
    L(Kl, gn), L($a, $a.current);
  }
  function to() {
    gn = Kl.current, U($a), U(Kl);
  }
  var Ot = T(null), Bt = null;
  function Nn(e) {
    var t = e.alternate;
    L(Le, Le.current & 1), L(Ot, e), Bt === null && (t === null || $a.current !== null || t.memoizedState !== null) && (Bt = e);
  }
  function no(e) {
    L(Le, Le.current), L(Ot, e), Bt === null && (Bt = e);
  }
  function _f(e) {
    e.tag === 22 ? (L(Le, Le.current), L(Ot, e), Bt === null && (Bt = e)) : jn();
  }
  function jn() {
    L(Le, Le.current), L(Ot, Ot.current);
  }
  function Ct(e) {
    U(Ot), Bt === e && (Bt = null), U(Le);
  }
  var Le = T(0);
  function Jl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || ss(a) || cs(a)))
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
  var sn = 0, re = null, Ce = null, Je = null, Wl = !1, Va = !1, da = !1, Pl = 0, Ri = 0, La = null, fg = 0;
  function Be() {
    throw Error(r(321));
  }
  function ao(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!wt(e[a], t[a])) return !1;
    return !0;
  }
  function io(e, t, a, i, o, s) {
    return sn = s, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? ad : _o, da = !1, s = a(i, o), da = !1, Va && (s = zf(
      t,
      a,
      i,
      o
    )), Sf(e), s;
  }
  function Sf(e) {
    j.H = Yi;
    var t = Ce !== null && Ce.next !== null;
    if (sn = 0, Je = Ce = re = null, Wl = !1, Ri = 0, La = null, t) throw Error(r(300));
    e === null || We || (e = e.dependencies, e !== null && Bl(e) && (We = !0));
  }
  function zf(e, t, a, i) {
    re = e;
    var o = 0;
    do {
      if (Va && (La = null), Ri = 0, Va = !1, 25 <= o) throw Error(r(301));
      if (o += 1, Je = Ce = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      j.H = id, s = t(a, i);
    } while (Va);
    return s;
  }
  function dg() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ui(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function lo() {
    var e = Pl !== 0;
    return Pl = 0, e;
  }
  function uo(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function ro(e) {
    if (Wl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Wl = !1;
    }
    sn = 0, Je = Ce = re = null, Va = !1, Ri = Pl = 0, La = null;
  }
  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? re.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Ge() {
    if (Ce === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Je === null ? re.memoizedState : Je.next;
    if (t !== null)
      Je = t, Ce = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(r(467)) : Error(r(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Je === null ? re.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function Fl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ui(e) {
    var t = Ri;
    return Ri += 1, La === null && (La = []), e = df(La, e, t), t = re, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? ad : _o), e;
  }
  function Il(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ui(e);
      if (e.$$typeof === $) return rt(e);
    }
    throw Error(r(438, String(e)));
  }
  function oo(e) {
    var t = null, a = re.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var i = re.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Fl(), re.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
        a[i] = ve;
    return t.index++, a;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function eu(e) {
    var t = Ge();
    return so(t, Ce, e);
  }
  function so(e, t, a) {
    var i = e.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = a;
    var o = e.baseQueue, s = i.pending;
    if (s !== null) {
      if (o !== null) {
        var m = o.next;
        o.next = s.next, s.next = m;
      }
      t.baseQueue = o = s, i.pending = null;
    }
    if (s = e.baseState, o === null) e.memoizedState = s;
    else {
      t = o.next;
      var g = m = null, b = null, O = t, D = !1;
      do {
        var k = O.lane & -536870913;
        if (k !== O.lane ? (pe & k) === k : (sn & k) === k) {
          var C = O.revertLane;
          if (C === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), k === Xa && (D = !0);
          else if ((sn & C) === C) {
            O = O.next, C === Xa && (D = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, b === null ? (g = b = k, m = s) : b = b.next = k, re.lanes |= C, Rn |= C;
          k = O.action, da && a(s, k), s = O.hasEagerState ? O.eagerState : a(s, k);
        } else
          C = {
            lane: k,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, b === null ? (g = b = C, m = s) : b = b.next = C, re.lanes |= k, Rn |= k;
        O = O.next;
      } while (O !== null && O !== t);
      if (b === null ? m = s : b.next = g, !wt(s, e.memoizedState) && (We = !0, D && (a = Ha, a !== null)))
        throw a;
      e.memoizedState = s, e.baseState = m, e.baseQueue = b, i.lastRenderedState = s;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function co(e) {
    var t = Ge(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var i = a.dispatch, o = a.pending, s = t.memoizedState;
    if (o !== null) {
      a.pending = null;
      var m = o = o.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== o);
      wt(s, t.memoizedState) || (We = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s;
    }
    return [s, i];
  }
  function Tf(e, t, a) {
    var i = re, o = Ge(), s = be;
    if (s) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var m = !wt(
      (Ce || o).memoizedState,
      a
    );
    if (m && (o.memoizedState = a, We = !0), o = o.queue, po(wf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || m || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Af.bind(
          null,
          i,
          o,
          a,
          t
        ),
        null
      ), De === null) throw Error(r(349));
      s || (sn & 127) !== 0 || Ef(i, t, a);
    }
    return a;
  }
  function Ef(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = re.updateQueue, t === null ? (t = Fl(), re.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Af(e, t, a, i) {
    t.value = a, t.getSnapshot = i, xf(t) && Of(e);
  }
  function wf(e, t, a) {
    return a(function() {
      xf(t) && Of(e);
    });
  }
  function xf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !wt(e, a);
    } catch {
      return !0;
    }
  }
  function Of(e) {
    var t = aa(e, 2);
    t !== null && St(t, e, 2);
  }
  function fo(e) {
    var t = dt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), da) {
        Sn(!0);
        try {
          a();
        } finally {
          Sn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cn,
      lastRenderedState: e
    }, t;
  }
  function Cf(e, t, a, i) {
    return e.baseState = a, so(
      e,
      Ce,
      typeof i == "function" ? i : cn
    );
  }
  function mg(e, t, a, i, o) {
    if (au(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      j.T !== null ? a(!0) : s.isTransition = !1, i(s), a = t.pending, a === null ? (s.next = t.pending = s, Mf(t, s)) : (s.next = a.next, t.pending = a.next = s);
    }
  }
  function Mf(e, t) {
    var a = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var s = j.T, m = {};
      j.T = m;
      try {
        var g = a(o, i), b = j.S;
        b !== null && b(m, g), Nf(e, t, g);
      } catch (O) {
        mo(e, t, O);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), j.T = s;
      }
    } else
      try {
        s = a(o, i), Nf(e, t, s);
      } catch (O) {
        mo(e, t, O);
      }
  }
  function Nf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(i) {
        jf(e, t, i);
      },
      function(i) {
        return mo(e, t, i);
      }
    ) : jf(e, t, a);
  }
  function jf(e, t, a) {
    t.status = "fulfilled", t.value = a, Df(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Mf(e, a)));
  }
  function mo(e, t, a) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = a, Df(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Df(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zf(e, t) {
    return t;
  }
  function Rf(e, t) {
    if (be) {
      var a = De.formState;
      if (a !== null) {
        e: {
          var i = re;
          if (be) {
            if (Ze) {
              t: {
                for (var o = Ze, s = Ht; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break t;
                  }
                  if (o = qt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Ze = qt(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            wn(i);
          }
          i = !1;
        }
        i && (t = a[0]);
      }
    }
    return a = dt(), a.memoizedState = a.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zf,
      lastRenderedState: t
    }, a.queue = i, a = ed.bind(
      null,
      re,
      i
    ), i.dispatch = a, i = fo(!1), s = bo.bind(
      null,
      re,
      !1,
      i.queue
    ), i = dt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, a = mg.bind(
      null,
      re,
      o,
      s,
      a
    ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
  }
  function Uf(e) {
    var t = Ge();
    return kf(t, Ce, e);
  }
  function kf(e, t, a) {
    if (t = so(
      e,
      t,
      Zf
    )[0], e = eu(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Ui(t);
      } catch (m) {
        throw m === Ba ? Vl : m;
      }
    else i = t;
    t = Ge();
    var o = t.queue, s = o.dispatch;
    return a !== t.memoizedState && (re.flags |= 2048, Ga(
      9,
      { destroy: void 0 },
      pg.bind(null, o, a),
      null
    )), [i, s, e];
  }
  function pg(e, t) {
    e.action = t;
  }
  function Yf(e) {
    var t = Ge(), a = Ce;
    if (a !== null)
      return kf(t, a, e);
    Ge(), t = t.memoizedState, a = Ge();
    var i = a.queue.dispatch;
    return a.memoizedState = e, [t, i, !1];
  }
  function Ga(e, t, a, i) {
    return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = re.updateQueue, t === null && (t = Fl(), re.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Xf() {
    return Ge().memoizedState;
  }
  function tu(e, t, a, i) {
    var o = dt();
    re.flags |= e, o.memoizedState = Ga(
      1 | t,
      { destroy: void 0 },
      a,
      i === void 0 ? null : i
    );
  }
  function nu(e, t, a, i) {
    var o = Ge();
    i = i === void 0 ? null : i;
    var s = o.memoizedState.inst;
    Ce !== null && i !== null && ao(i, Ce.memoizedState.deps) ? o.memoizedState = Ga(t, s, a, i) : (re.flags |= e, o.memoizedState = Ga(
      1 | t,
      s,
      a,
      i
    ));
  }
  function Hf(e, t) {
    tu(8390656, 8, e, t);
  }
  function po(e, t) {
    nu(2048, 8, e, t);
  }
  function hg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = Fl(), re.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Bf(e) {
    var t = Ge().memoizedState;
    return hg({ ref: t, nextImpl: e }), function() {
      if ((we & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function qf(e, t) {
    return nu(4, 2, e, t);
  }
  function $f(e, t) {
    return nu(4, 4, e, t);
  }
  function Vf(e, t) {
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
  function Lf(e, t, a) {
    a = a != null ? a.concat([e]) : null, nu(4, 4, Vf.bind(null, t, e), a);
  }
  function ho() {
  }
  function Gf(e, t) {
    var a = Ge();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    return t !== null && ao(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
  }
  function Qf(e, t) {
    var a = Ge();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    if (t !== null && ao(t, i[1]))
      return i[0];
    if (i = e(), da) {
      Sn(!0);
      try {
        e();
      } finally {
        Sn(!1);
      }
    }
    return a.memoizedState = [i, t], i;
  }
  function vo(e, t, a) {
    return a === void 0 || (sn & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Kd(), re.lanes |= e, Rn |= e, a);
  }
  function Kf(e, t, a, i) {
    return wt(a, t) ? a : $a.current !== null ? (e = vo(e, a, i), wt(e, t) || (We = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (pe & 261930) === 0 ? (We = !0, e.memoizedState = a) : (e = Kd(), re.lanes |= e, Rn |= e, t);
  }
  function Jf(e, t, a, i, o) {
    var s = q.p;
    q.p = s !== 0 && 8 > s ? s : 8;
    var m = j.T, g = {};
    j.T = g, bo(e, !1, t, a);
    try {
      var b = o(), O = j.S;
      if (O !== null && O(g, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var D = cg(
          b,
          i
        );
        ki(
          e,
          t,
          D,
          jt(e)
        );
      } else
        ki(
          e,
          t,
          i,
          jt(e)
        );
    } catch (k) {
      ki(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: k },
        jt()
      );
    } finally {
      q.p = s, m !== null && g.types !== null && (m.types = g.types), j.T = m;
    }
  }
  function vg() {
  }
  function go(e, t, a, i) {
    if (e.tag !== 5) throw Error(r(476));
    var o = Wf(e).queue;
    Jf(
      e,
      o,
      t,
      Y,
      a === null ? vg : function() {
        return Pf(e), a(i);
      }
    );
  }
  function Wf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: Y
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
        lastRenderedReducer: cn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Pf(e) {
    var t = Wf(e);
    t.next === null && (t = e.alternate.memoizedState), ki(
      e,
      t.next.queue,
      {},
      jt()
    );
  }
  function yo() {
    return rt(el);
  }
  function Ff() {
    return Ge().memoizedState;
  }
  function If() {
    return Ge().memoizedState;
  }
  function gg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = jt();
          e = Cn(a);
          var i = Mn(t, e, a);
          i !== null && (St(i, t, a), ji(i, t, a)), t = { cache: Gr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function yg(e, t, a) {
    var i = jt();
    a = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, au(e) ? td(t, a) : (a = Rr(e, t, a, i), a !== null && (St(a, e, i), nd(a, t, i)));
  }
  function ed(e, t, a) {
    var i = jt();
    ki(e, t, a, i);
  }
  function ki(e, t, a, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (au(e)) td(t, o);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, g = s(m, a);
          if (o.hasEagerState = !0, o.eagerState = g, wt(g, m))
            return kl(e, t, o, 0), De === null && Ul(), !1;
        } catch {
        }
      if (a = Rr(e, t, o, i), a !== null)
        return St(a, e, i), nd(a, t, i), !0;
    }
    return !1;
  }
  function bo(e, t, a, i) {
    if (i = {
      lane: 2,
      revertLane: Po(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, au(e)) {
      if (t) throw Error(r(479));
    } else
      t = Rr(
        e,
        a,
        i,
        2
      ), t !== null && St(t, e, 2);
  }
  function au(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function td(e, t) {
    Va = Wl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function nd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, a |= i, t.lanes = a, uc(e, a);
    }
  }
  var Yi = {
    readContext: rt,
    use: Il,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  Yi.useEffectEvent = Be;
  var ad = {
    readContext: rt,
    use: Il,
    useCallback: function(e, t) {
      return dt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: rt,
    useEffect: Hf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, tu(
        4194308,
        4,
        Vf.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return tu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      tu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = dt();
      t = t === void 0 ? null : t;
      var i = e();
      if (da) {
        Sn(!0);
        try {
          e();
        } finally {
          Sn(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, a) {
      var i = dt();
      if (a !== void 0) {
        var o = a(t);
        if (da) {
          Sn(!0);
          try {
            a(t);
          } finally {
            Sn(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = yg.bind(
        null,
        re,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = dt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = fo(e);
      var t = e.queue, a = ed.bind(null, re, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: ho,
    useDeferredValue: function(e, t) {
      var a = dt();
      return vo(a, e, t);
    },
    useTransition: function() {
      var e = fo(!1);
      return e = Jf.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), dt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var i = re, o = dt();
      if (be) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), De === null)
          throw Error(r(349));
        (pe & 127) !== 0 || Ef(i, t, a);
      }
      o.memoizedState = a;
      var s = { value: a, getSnapshot: t };
      return o.queue = s, Hf(wf.bind(null, i, s, e), [
        e
      ]), i.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Af.bind(
          null,
          i,
          s,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = dt(), t = De.identifierPrefix;
      if (be) {
        var a = Ft, i = Pt;
        a = (i & ~(1 << 32 - At(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pl++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = fg++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: yo,
    useFormState: Rf,
    useActionState: Rf,
    useOptimistic: function(e) {
      var t = dt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = bo.bind(
        null,
        re,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: oo,
    useCacheRefresh: function() {
      return dt().memoizedState = gg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = dt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((we & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, _o = {
    readContext: rt,
    use: Il,
    useCallback: Gf,
    useContext: rt,
    useEffect: po,
    useImperativeHandle: Lf,
    useInsertionEffect: qf,
    useLayoutEffect: $f,
    useMemo: Qf,
    useReducer: eu,
    useRef: Xf,
    useState: function() {
      return eu(cn);
    },
    useDebugValue: ho,
    useDeferredValue: function(e, t) {
      var a = Ge();
      return Kf(
        a,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = eu(cn)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ui(e),
        t
      ];
    },
    useSyncExternalStore: Tf,
    useId: Ff,
    useHostTransitionStatus: yo,
    useFormState: Uf,
    useActionState: Uf,
    useOptimistic: function(e, t) {
      var a = Ge();
      return Cf(a, Ce, e, t);
    },
    useMemoCache: oo,
    useCacheRefresh: If
  };
  _o.useEffectEvent = Bf;
  var id = {
    readContext: rt,
    use: Il,
    useCallback: Gf,
    useContext: rt,
    useEffect: po,
    useImperativeHandle: Lf,
    useInsertionEffect: qf,
    useLayoutEffect: $f,
    useMemo: Qf,
    useReducer: co,
    useRef: Xf,
    useState: function() {
      return co(cn);
    },
    useDebugValue: ho,
    useDeferredValue: function(e, t) {
      var a = Ge();
      return Ce === null ? vo(a, e, t) : Kf(
        a,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = co(cn)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ui(e),
        t
      ];
    },
    useSyncExternalStore: Tf,
    useId: Ff,
    useHostTransitionStatus: yo,
    useFormState: Yf,
    useActionState: Yf,
    useOptimistic: function(e, t) {
      var a = Ge();
      return Ce !== null ? Cf(a, Ce, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: oo,
    useCacheRefresh: If
  };
  id.useEffectEvent = Bf;
  function So(e, t, a, i) {
    t = e.memoizedState, a = a(i, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var zo = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var i = jt(), o = Cn(i);
      o.payload = t, a != null && (o.callback = a), t = Mn(e, o, i), t !== null && (St(t, e, i), ji(t, e, i));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var i = jt(), o = Cn(i);
      o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Mn(e, o, i), t !== null && (St(t, e, i), ji(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = jt(), i = Cn(a);
      i.tag = 2, t != null && (i.callback = t), t = Mn(e, i, a), t !== null && (St(t, e, a), ji(t, e, a));
    }
  };
  function ld(e, t, a, i, o, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, m) : t.prototype && t.prototype.isPureReactComponent ? !Ei(a, i) || !Ei(o, s) : !0;
  }
  function ud(e, t, a, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function ma(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var i in t)
        i !== "ref" && (a[i] = t[i]);
    }
    if (e = e.defaultProps) {
      a === t && (a = _({}, a));
      for (var o in e)
        a[o] === void 0 && (a[o] = e[o]);
    }
    return a;
  }
  function rd(e) {
    Rl(e);
  }
  function od(e) {
    console.error(e);
  }
  function sd(e) {
    Rl(e);
  }
  function iu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function cd(e, t, a) {
    try {
      var i = e.onCaughtError;
      i(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function To(e, t, a) {
    return a = Cn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      iu(e, t);
    }, a;
  }
  function fd(e) {
    return e = Cn(e), e.tag = 3, e;
  }
  function dd(e, t, a, i) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = i.value;
      e.payload = function() {
        return o(s);
      }, e.callback = function() {
        cd(t, a, i);
      };
    }
    var m = a.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      cd(t, a, i), typeof o != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var g = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function bg(e, t, a, i, o) {
    if (a.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = a.alternate, t !== null && Ya(
        t,
        a,
        o,
        !0
      ), a = Ot.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Bt === null ? vu() : a.alternate === null && qe === 0 && (qe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Ll ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ko(e, i, o)), !1;
          case 22:
            return a.flags |= 65536, i === Ll ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ko(e, i, o)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Ko(e, i, o), vu(), !1;
    }
    if (be)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Br && (e = Error(r(422), { cause: i }), xi(kt(e, a)))) : (i !== Br && (t = Error(r(423), {
        cause: i
      }), xi(
        kt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = kt(i, a), o = To(
        e.stateNode,
        i,
        o
      ), Fr(e, o), qe !== 4 && (qe = 2)), !1;
    var s = Error(r(520), { cause: i });
    if (s = kt(s, a), Gi === null ? Gi = [s] : Gi.push(s), qe !== 4 && (qe = 2), t === null) return !0;
    i = kt(i, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = o & -o, a.lanes |= e, e = To(a.stateNode, i, e), Fr(a, e), !1;
        case 1:
          if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Un === null || !Un.has(s))))
            return a.flags |= 65536, o &= -o, a.lanes |= o, o = fd(o), dd(
              o,
              e,
              a,
              i
            ), Fr(a, o), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Eo = Error(r(461)), We = !1;
  function ot(e, t, a, i) {
    t.child = e === null ? vf(t, null, a, i) : fa(
      t,
      e.child,
      a,
      i
    );
  }
  function md(e, t, a, i, o) {
    a = a.render;
    var s = t.ref;
    if ("ref" in i) {
      var m = {};
      for (var g in i)
        g !== "ref" && (m[g] = i[g]);
    } else m = i;
    return ra(t), i = io(
      e,
      t,
      a,
      m,
      s,
      o
    ), g = lo(), e !== null && !We ? (uo(e, t, o), fn(e, t, o)) : (be && g && Xr(t), t.flags |= 1, ot(e, t, i, o), t.child);
  }
  function pd(e, t, a, i, o) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" && !Ur(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = s, hd(
        e,
        t,
        s,
        i,
        o
      )) : (e = Xl(
        a.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !jo(e, o)) {
      var m = s.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ei, a(m, i) && e.ref === t.ref)
        return fn(e, t, o);
    }
    return t.flags |= 1, e = ln(s, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hd(e, t, a, i, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ei(s, i) && e.ref === t.ref)
        if (We = !1, t.pendingProps = i = s, jo(e, o))
          (e.flags & 131072) !== 0 && (We = !0);
        else
          return t.lanes = e.lanes, fn(e, t, o);
    }
    return Ao(
      e,
      t,
      a,
      i,
      o
    );
  }
  function vd(e, t, a, i) {
    var o = i.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | a : a, e !== null) {
          for (i = t.child = e.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~s;
        } else i = 0, t.child = null;
        return gd(
          e,
          t,
          s,
          a,
          i
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $l(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? bf(t, s) : eo(), _f(t);
      else
        return i = t.lanes = 536870912, gd(
          e,
          t,
          s !== null ? s.baseLanes | a : a,
          a,
          i
        );
    } else
      s !== null ? ($l(t, s.cachePool), bf(t, s), jn(), t.memoizedState = null) : (e !== null && $l(t, null), eo(), jn());
    return ot(e, t, o, a), t.child;
  }
  function Xi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function gd(e, t, a, i, o) {
    var s = Kr();
    return s = s === null ? null : { parent: Ke._currentValue, pool: s }, t.memoizedState = {
      baseLanes: a,
      cachePool: s
    }, e !== null && $l(t, null), eo(), _f(t), e !== null && Ya(e, t, i, !0), t.childLanes = o, null;
  }
  function lu(e, t) {
    return t = ru(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function yd(e, t, a) {
    return fa(t, e.child, null, a), e = lu(t, t.pendingProps), e.flags |= 2, Ct(t), t.memoizedState = null, e;
  }
  function _g(e, t, a) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (i.mode === "hidden")
          return e = lu(t, i), t.lanes = 536870912, Xi(null, e);
        if (no(t), (e = Ze) ? (e = Mm(
          e,
          Ht
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: En !== null ? { id: Pt, overflow: Ft } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ef(e), a.return = t, t.child = a, ut = t, Ze = null)) : e = null, e === null) throw wn(t);
        return t.lanes = 536870912, null;
      }
      return lu(t, i);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (no(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = yd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (We || Ya(e, t, a, !1), o = (a & e.childLanes) !== 0, We || o) {
        if (i = De, i !== null && (m = rc(i, a), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, aa(e, m), St(i, e, m), Eo;
        vu(), t = yd(
          e,
          t,
          a
        );
      } else
        e = s.treeContext, Ze = qt(m.nextSibling), ut = t, be = !0, An = null, Ht = !1, e !== null && af(t, e), t = lu(t, i), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function uu(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ao(e, t, a, i, o) {
    return ra(t), a = io(
      e,
      t,
      a,
      i,
      void 0,
      o
    ), i = lo(), e !== null && !We ? (uo(e, t, o), fn(e, t, o)) : (be && i && Xr(t), t.flags |= 1, ot(e, t, a, o), t.child);
  }
  function bd(e, t, a, i, o, s) {
    return ra(t), t.updateQueue = null, a = zf(
      t,
      i,
      a,
      o
    ), Sf(e), i = lo(), e !== null && !We ? (uo(e, t, s), fn(e, t, s)) : (be && i && Xr(t), t.flags |= 1, ot(e, t, a, s), t.child);
  }
  function _d(e, t, a, i, o) {
    if (ra(t), t.stateNode === null) {
      var s = Za, m = a.contextType;
      typeof m == "object" && m !== null && (s = rt(m)), s = new a(i, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = zo, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = i, s.state = t.memoizedState, s.refs = {}, Wr(t), m = a.contextType, s.context = typeof m == "object" && m !== null ? rt(m) : Za, s.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (So(
        t,
        a,
        m,
        i
      ), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && zo.enqueueReplaceState(s, s.state, null), Zi(t, i, s, o), Di(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, b = ma(a, g);
      s.props = b;
      var O = s.context, D = a.contextType;
      m = Za, typeof D == "object" && D !== null && (m = rt(D));
      var k = a.getDerivedStateFromProps;
      D = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, D || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || O !== m) && ud(
        t,
        s,
        i,
        m
      ), On = !1;
      var C = t.memoizedState;
      s.state = C, Zi(t, i, s, o), Di(), O = t.memoizedState, g || C !== O || On ? (typeof k == "function" && (So(
        t,
        a,
        k,
        i
      ), O = t.memoizedState), (b = On || ld(
        t,
        a,
        b,
        i,
        C,
        O,
        m
      )) ? (D || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = O), s.props = i, s.state = O, s.context = m, i = b) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      s = t.stateNode, Pr(e, t), m = t.memoizedProps, D = ma(a, m), s.props = D, k = t.pendingProps, C = s.context, O = a.contextType, b = Za, typeof O == "object" && O !== null && (b = rt(O)), g = a.getDerivedStateFromProps, (O = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== k || C !== b) && ud(
        t,
        s,
        i,
        b
      ), On = !1, C = t.memoizedState, s.state = C, Zi(t, i, s, o), Di();
      var N = t.memoizedState;
      m !== k || C !== N || On || e !== null && e.dependencies !== null && Bl(e.dependencies) ? (typeof g == "function" && (So(
        t,
        a,
        g,
        i
      ), N = t.memoizedState), (D = On || ld(
        t,
        a,
        D,
        i,
        C,
        N,
        b
      ) || e !== null && e.dependencies !== null && Bl(e.dependencies)) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, N, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        N,
        b
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = N), s.props = i, s.state = N, s.context = b, i = D) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return s = i, uu(e, t), i = (t.flags & 128) !== 0, s || i ? (s = t.stateNode, a = i && typeof a.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && i ? (t.child = fa(
      t,
      e.child,
      null,
      o
    ), t.child = fa(
      t,
      null,
      a,
      o
    )) : ot(e, t, a, o), t.memoizedState = s.state, e = t.child) : e = fn(
      e,
      t,
      o
    ), e;
  }
  function Sd(e, t, a, i) {
    return la(), t.flags |= 256, ot(e, t, a, i), t.child;
  }
  var wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xo(e) {
    return { baseLanes: e, cachePool: cf() };
  }
  function Oo(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Nt), e;
  }
  function zd(e, t, a) {
    var i = t.pendingProps, o = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0), m && (o = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (o ? Nn(t) : jn(), (e = Ze) ? (e = Mm(
          e,
          Ht
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: En !== null ? { id: Pt, overflow: Ft } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ef(e), a.return = t, t.child = a, ut = t, Ze = null)) : e = null, e === null) throw wn(t);
        return cs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = i.children;
      return i = i.fallback, o ? (jn(), o = t.mode, g = ru(
        { mode: "hidden", children: g },
        o
      ), i = ia(
        i,
        o,
        a,
        null
      ), g.return = t, i.return = t, g.sibling = i, t.child = g, i = t.child, i.memoizedState = xo(a), i.childLanes = Oo(
        e,
        m,
        a
      ), t.memoizedState = wo, Xi(null, i)) : (Nn(t), Co(t, g));
    }
    var b = e.memoizedState;
    if (b !== null && (g = b.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = Mo(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (jn(), t.child = e.child, t.flags |= 128, t = null) : (jn(), g = i.fallback, o = t.mode, i = ru(
          { mode: "visible", children: i.children },
          o
        ), g = ia(
          g,
          o,
          a,
          null
        ), g.flags |= 2, i.return = t, g.return = t, i.sibling = g, t.child = i, fa(
          t,
          e.child,
          null,
          a
        ), i = t.child, i.memoizedState = xo(a), i.childLanes = Oo(
          e,
          m,
          a
        ), t.memoizedState = wo, t = Xi(null, i));
      else if (Nn(t), cs(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var O = m.dgst;
        m = O, i = Error(r(419)), i.stack = "", i.digest = m, xi({ value: i, source: null, stack: null }), t = Mo(
          e,
          t,
          a
        );
      } else if (We || Ya(e, t, a, !1), m = (a & e.childLanes) !== 0, We || m) {
        if (m = De, m !== null && (i = rc(m, a), i !== 0 && i !== b.retryLane))
          throw b.retryLane = i, aa(e, i), St(m, e, i), Eo;
        ss(g) || vu(), t = Mo(
          e,
          t,
          a
        );
      } else
        ss(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Ze = qt(
          g.nextSibling
        ), ut = t, be = !0, An = null, Ht = !1, e !== null && af(t, e), t = Co(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (jn(), g = i.fallback, o = t.mode, b = e.child, O = b.sibling, i = ln(b, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = b.subtreeFlags & 65011712, O !== null ? g = ln(
      O,
      g
    ) : (g = ia(
      g,
      o,
      a,
      null
    ), g.flags |= 2), g.return = t, i.return = t, i.sibling = g, t.child = i, Xi(null, i), i = t.child, g = e.child.memoizedState, g === null ? g = xo(a) : (o = g.cachePool, o !== null ? (b = Ke._currentValue, o = o.parent !== b ? { parent: b, pool: b } : o) : o = cf(), g = {
      baseLanes: g.baseLanes | a,
      cachePool: o
    }), i.memoizedState = g, i.childLanes = Oo(
      e,
      m,
      a
    ), t.memoizedState = wo, Xi(e.child, i)) : (Nn(t), a = e.child, e = a.sibling, a = ln(a, {
      mode: "visible",
      children: i.children
    }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Co(e, t) {
    return t = ru(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ru(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e;
  }
  function Mo(e, t, a) {
    return fa(t, e.child, null, a), e = Co(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Td(e, t, a) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Vr(e.return, t, a);
  }
  function No(e, t, a, i, o, s) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: a,
      tailMode: o,
      treeForkCount: s
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = a, m.tailMode = o, m.treeForkCount = s);
  }
  function Ed(e, t, a) {
    var i = t.pendingProps, o = i.revealOrder, s = i.tail;
    i = i.children;
    var m = Le.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, L(Le, m), ot(e, t, i, a), i = be ? wi : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Td(e, a, t);
        else if (e.tag === 19)
          Td(e, a, t);
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
    switch (o) {
      case "forwards":
        for (a = t.child, o = null; a !== null; )
          e = a.alternate, e !== null && Jl(e) === null && (o = a), a = a.sibling;
        a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), No(
          t,
          !1,
          o,
          a,
          s,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Jl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = a, a = o, o = e;
        }
        No(
          t,
          !0,
          a,
          null,
          s,
          i
        );
        break;
      case "together":
        No(
          t,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ya(
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
      for (e = t.child, a = ln(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ln(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function jo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bl(e)));
  }
  function Sg(e, t, a) {
    switch (t.tag) {
      case 3:
        tt(t, t.stateNode.containerInfo), xn(t, Ke, e.memoizedState.cache), la();
        break;
      case 27:
      case 5:
        _n(t);
        break;
      case 4:
        tt(t, t.stateNode.containerInfo);
        break;
      case 10:
        xn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, no(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? zd(e, t, a) : (Nn(t), e = fn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (a & t.childLanes) !== 0, i || (Ya(
          e,
          t,
          a,
          !1
        ), i = (a & t.childLanes) !== 0), o) {
          if (i)
            return Ed(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), L(Le, Le.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, vd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        xn(t, Ke, e.memoizedState.cache);
    }
    return fn(e, t, a);
  }
  function Ad(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        We = !0;
      else {
        if (!jo(e, a) && (t.flags & 128) === 0)
          return We = !1, Sg(
            e,
            t,
            a
          );
        We = (e.flags & 131072) !== 0;
      }
    else
      We = !1, be && (t.flags & 1048576) !== 0 && nf(t, wi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = sa(t.elementType), t.type = e, typeof e == "function")
            Ur(e) ? (i = ma(e, i), t.tag = 1, t = _d(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, t = Ao(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === X) {
                t.tag = 11, t = md(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Q) {
                t.tag = 14, t = pd(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ao(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return i = t.type, o = ma(
          i,
          t.pendingProps
        ), _d(
          e,
          t,
          i,
          o,
          a
        );
      case 3:
        e: {
          if (tt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          i = t.pendingProps;
          var s = t.memoizedState;
          o = s.element, Pr(e, t), Zi(t, i, null, a);
          var m = t.memoizedState;
          if (i = m.cache, xn(t, Ke, i), i !== s.cache && Lr(
            t,
            [Ke],
            a,
            !0
          ), Di(), i = m.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = Sd(
                e,
                t,
                i,
                a
              );
              break e;
            } else if (i !== o) {
              o = kt(
                Error(r(424)),
                t
              ), xi(o), t = Sd(
                e,
                t,
                i,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ze = qt(e.firstChild), ut = t, be = !0, An = null, Ht = !0, a = vf(
                t,
                null,
                i,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (la(), i === o) {
              t = fn(
                e,
                t,
                a
              );
              break e;
            }
            ot(e, t, i, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return uu(e, t), e === null ? (a = Um(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : be || (a = t.type, e = t.pendingProps, i = Tu(
          se.current
        ).createElement(a), i[lt] = t, i[ht] = e, st(i, a, e), nt(i), t.stateNode = i) : t.memoizedState = Um(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _n(t), e === null && be && (i = t.stateNode = Dm(
          t.type,
          t.pendingProps,
          se.current
        ), ut = t, Ht = !0, o = Ze, Hn(t.type) ? (fs = o, Ze = qt(i.firstChild)) : Ze = o), ot(
          e,
          t,
          t.pendingProps.children,
          a
        ), uu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((o = i = Ze) && (i = Pg(
          i,
          t.type,
          t.pendingProps,
          Ht
        ), i !== null ? (t.stateNode = i, ut = t, Ze = qt(i.firstChild), Ht = !1, o = !0) : o = !1), o || wn(t)), _n(t), o = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, i = s.children, us(o, s) ? i = null : m !== null && us(o, m) && (t.flags |= 32), t.memoizedState !== null && (o = io(
          e,
          t,
          dg,
          null,
          null,
          a
        ), el._currentValue = o), uu(e, t), ot(e, t, i, a), t.child;
      case 6:
        return e === null && be && ((e = a = Ze) && (a = Fg(
          a,
          t.pendingProps,
          Ht
        ), a !== null ? (t.stateNode = a, ut = t, Ze = null, e = !0) : e = !1), e || wn(t)), null;
      case 13:
        return zd(e, t, a);
      case 4:
        return tt(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = fa(
          t,
          null,
          i,
          a
        ) : ot(e, t, i, a), t.child;
      case 11:
        return md(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return ot(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return i = t.pendingProps, xn(t, t.type, i.value), ot(e, t, i.children, a), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, ra(t), o = rt(o), i = i(o), t.flags |= 1, ot(e, t, i, a), t.child;
      case 14:
        return pd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return hd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ed(e, t, a);
      case 31:
        return _g(e, t, a);
      case 22:
        return vd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ra(t), i = rt(Ke), e === null ? (o = Kr(), o === null && (o = De, s = Gr(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= a), o = s), t.memoizedState = { parent: i, cache: o }, Wr(t), xn(t, Ke, o)) : ((e.lanes & a) !== 0 && (Pr(e, t), Zi(t, null, null, a), Di()), o = e.memoizedState, s = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), xn(t, Ke, i)) : (i = s.cache, xn(t, Ke, i), i !== o.cache && Lr(
          t,
          [Ke],
          a,
          !0
        ))), ot(
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
  function dn(e) {
    e.flags |= 4;
  }
  function Do(e, t, a, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Fd()) e.flags |= 8192;
        else
          throw ca = Ll, Jr;
    } else e.flags &= -16777217;
  }
  function wd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bm(t))
      if (Fd()) e.flags |= 8192;
      else
        throw ca = Ll, Jr;
  }
  function ou(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ic() : 536870912, e.lanes |= t, Wa |= t);
  }
  function Hi(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), a = a.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = a, t;
  }
  function zg(e, t, a) {
    var i = t.pendingProps;
    switch (Hr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(t), null;
      case 1:
        return Re(t), null;
      case 3:
        return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), on(Ke), Ue(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ka(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qr())), Re(t), null;
      case 26:
        var o = t.type, s = t.memoizedState;
        return e === null ? (dn(t), s !== null ? (Re(t), wd(t, s)) : (Re(t), Do(
          t,
          o,
          null,
          i,
          a
        ))) : s ? s !== e.memoizedState ? (dn(t), Re(t), wd(t, s)) : (Re(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && dn(t), Re(t), Do(
          t,
          o,
          e,
          i,
          a
        )), null;
      case 27:
        if (Pn(t), a = se.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Re(t), null;
          }
          e = K.current, ka(t) ? lf(t) : (e = Dm(o, i, a), t.stateNode = e, dn(t));
        }
        return Re(t), null;
      case 5:
        if (Pn(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Re(t), null;
          }
          if (s = K.current, ka(t))
            lf(t);
          else {
            var m = Tu(
              se.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? s.multiple = !0 : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? m.createElement(o, { is: i.is }) : m.createElement(o);
                }
            }
            s[lt] = t, s[ht] = i;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = s;
            e: switch (st(s, o, i), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && dn(t);
          }
        }
        return Re(t), Do(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = se.current, ka(t)) {
            if (e = t.stateNode, a = t.memoizedProps, i = null, o = ut, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[lt] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || zm(e.nodeValue, a)), e || wn(t, !0);
          } else
            e = Tu(e).createTextNode(
              i
            ), e[lt] = t, t.stateNode = e;
        }
        return Re(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = ka(t), a !== null) {
            if (e === null) {
              if (!i) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), e = !1;
          } else
            a = qr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Re(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = ka(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Re(t), o = !1;
          } else
            o = qr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
        }
        return Ct(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ou(t, t.updateQueue), Re(t), null);
      case 4:
        return Ue(), e === null && ts(t.stateNode.containerInfo), Re(t), null;
      case 10:
        return on(t.type), Re(t), null;
      case 19:
        if (U(Le), i = t.memoizedState, i === null) return Re(t), null;
        if (o = (t.flags & 128) !== 0, s = i.rendering, s === null)
          if (o) Hi(i, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Jl(e), s !== null) {
                  for (t.flags |= 128, Hi(i, !1), e = s.updateQueue, t.updateQueue = e, ou(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Ic(a, e), a = a.sibling;
                  return L(
                    Le,
                    Le.current & 1 | 2
                  ), be && un(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Tt() > mu && (t.flags |= 128, o = !0, Hi(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Jl(s), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ou(t, e), Hi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !be)
                return Re(t), null;
            } else
              2 * Tt() - i.renderingStartTime > mu && a !== 536870912 && (t.flags |= 128, o = !0, Hi(i, !1), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (e = i.last, e !== null ? e.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Tt(), e.sibling = null, a = Le.current, L(
          Le,
          o ? a & 1 | 2 : a & 1
        ), be && un(t, i.treeForkCount), e) : (Re(t), null);
      case 22:
      case 23:
        return Ct(t), to(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), a = t.updateQueue, a !== null && ou(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && U(oa), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), on(Ke), Re(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Tg(e, t) {
    switch (Hr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return on(Ke), Ue(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Pn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ct(t), t.alternate === null)
            throw Error(r(340));
          la();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ct(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          la();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(Le), null;
      case 4:
        return Ue(), null;
      case 10:
        return on(t.type), null;
      case 22:
      case 23:
        return Ct(t), to(), e !== null && U(oa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return on(Ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xd(e, t) {
    switch (Hr(t), t.tag) {
      case 3:
        on(Ke), Ue();
        break;
      case 26:
      case 27:
      case 5:
        Pn(t);
        break;
      case 4:
        Ue();
        break;
      case 31:
        t.memoizedState !== null && Ct(t);
        break;
      case 13:
        Ct(t);
        break;
      case 19:
        U(Le);
        break;
      case 10:
        on(t.type);
        break;
      case 22:
      case 23:
        Ct(t), to(), e !== null && U(oa);
        break;
      case 24:
        on(Ke);
    }
  }
  function Bi(e, t) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            i = void 0;
            var s = a.create, m = a.inst;
            i = s(), m.destroy = i;
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (g) {
      Oe(t, t.return, g);
    }
  }
  function Dn(e, t, a) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & e) === e) {
            var m = i.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, o = t;
              var b = a, O = g;
              try {
                O();
              } catch (D) {
                Oe(
                  o,
                  b,
                  D
                );
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (D) {
      Oe(t, t.return, D);
    }
  }
  function Od(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        yf(t, a);
      } catch (i) {
        Oe(e, e.return, i);
      }
    }
  }
  function Cd(e, t, a) {
    a.props = ma(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (i) {
      Oe(e, t, i);
    }
  }
  function qi(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(i) : a.current = i;
      }
    } catch (o) {
      Oe(e, t, o);
    }
  }
  function It(e, t) {
    var a = e.ref, i = e.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Oe(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Oe(e, t, o);
        }
      else a.current = null;
  }
  function Md(e) {
    var t = e.type, a = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? i.src = a.src : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (o) {
      Oe(e, e.return, o);
    }
  }
  function Zo(e, t, a) {
    try {
      var i = e.stateNode;
      Lg(i, e.type, a, t), i[ht] = t;
    } catch (o) {
      Oe(e, e.return, o);
    }
  }
  function Nd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
  }
  function Ro(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uo(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = nn));
    else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Uo(e, t, a), e = e.sibling; e !== null; )
        Uo(e, t, a), e = e.sibling;
  }
  function su(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (su(e, t, a), e = e.sibling; e !== null; )
        su(e, t, a), e = e.sibling;
  }
  function jd(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      st(t, i, a), t[lt] = e, t[ht] = a;
    } catch (s) {
      Oe(e, e.return, s);
    }
  }
  var mn = !1, Pe = !1, ko = !1, Dd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Eg(e, t) {
    if (e = e.containerInfo, is = Mu, e = Vc(e), Cr(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var o = i.anchorOffset, s = i.focusNode;
            i = i.focusOffset;
            try {
              a.nodeType, s.nodeType;
            } catch {
              a = null;
              break e;
            }
            var m = 0, g = -1, b = -1, O = 0, D = 0, k = e, C = null;
            t: for (; ; ) {
              for (var N; k !== a || o !== 0 && k.nodeType !== 3 || (g = m + o), k !== s || i !== 0 && k.nodeType !== 3 || (b = m + i), k.nodeType === 3 && (m += k.nodeValue.length), (N = k.firstChild) !== null; )
                C = k, k = N;
              for (; ; ) {
                if (k === e) break t;
                if (C === a && ++O === o && (g = m), C === s && ++D === i && (b = m), (N = k.nextSibling) !== null) break;
                k = C, C = k.parentNode;
              }
              k = N;
            }
            a = g === -1 || b === -1 ? null : { start: g, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ls = { focusedElem: e, selectionRange: a }, Mu = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  o = e[a], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, a = t, o = s.memoizedProps, s = s.memoizedState, i = a.stateNode;
                try {
                  var J = ma(
                    a.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    J,
                    s
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (te) {
                  Oe(
                    a,
                    a.return,
                    te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  os(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      os(e);
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function Zd(e, t, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, a), i & 4 && Bi(5, a);
        break;
      case 1:
        if (hn(e, a), i & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Oe(a, a.return, m);
            }
          else {
            var o = ma(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Oe(
                a,
                a.return,
                m
              );
            }
          }
        i & 64 && Od(a), i & 512 && qi(a, a.return);
        break;
      case 3:
        if (hn(e, a), i & 64 && (e = a.updateQueue, e !== null)) {
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
            yf(e, t);
          } catch (m) {
            Oe(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && i & 4 && jd(a);
      case 26:
      case 5:
        hn(e, a), t === null && i & 4 && Md(a), i & 512 && qi(a, a.return);
        break;
      case 12:
        hn(e, a);
        break;
      case 31:
        hn(e, a), i & 4 && kd(e, a);
        break;
      case 13:
        hn(e, a), i & 4 && Yd(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Dg.bind(
          null,
          a
        ), Ig(e, a))));
        break;
      case 22:
        if (i = a.memoizedState !== null || mn, !i) {
          t = t !== null && t.memoizedState !== null || Pe, o = mn;
          var s = Pe;
          mn = i, (Pe = t) && !s ? vn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : hn(e, a), mn = o, Pe = s;
        }
        break;
      case 30:
        break;
      default:
        hn(e, a);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && dr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ke = null, gt = !1;
  function pn(e, t, a) {
    for (a = a.child; a !== null; )
      Ud(e, t, a), a = a.sibling;
  }
  function Ud(e, t, a) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(di, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Pe || It(a, t), pn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Pe || It(a, t);
        var i = ke, o = gt;
        Hn(a.type) && (ke = a.stateNode, gt = !1), pn(
          e,
          t,
          a
        ), Pi(a.stateNode), ke = i, gt = o;
        break;
      case 5:
        Pe || It(a, t);
      case 6:
        if (i = ke, o = gt, ke = null, pn(
          e,
          t,
          a
        ), ke = i, gt = o, ke !== null)
          if (gt)
            try {
              (ke.nodeType === 9 ? ke.body : ke.nodeName === "HTML" ? ke.ownerDocument.body : ke).removeChild(a.stateNode);
            } catch (s) {
              Oe(
                a,
                t,
                s
              );
            }
          else
            try {
              ke.removeChild(a.stateNode);
            } catch (s) {
              Oe(
                a,
                t,
                s
              );
            }
        break;
      case 18:
        ke !== null && (gt ? (e = ke, Om(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), ii(e)) : Om(ke, a.stateNode));
        break;
      case 4:
        i = ke, o = gt, ke = a.stateNode.containerInfo, gt = !0, pn(
          e,
          t,
          a
        ), ke = i, gt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dn(2, a, t), Pe || Dn(4, a, t), pn(
          e,
          t,
          a
        );
        break;
      case 1:
        Pe || (It(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Cd(
          a,
          t,
          i
        )), pn(
          e,
          t,
          a
        );
        break;
      case 21:
        pn(
          e,
          t,
          a
        );
        break;
      case 22:
        Pe = (i = Pe) || a.memoizedState !== null, pn(
          e,
          t,
          a
        ), Pe = i;
        break;
      default:
        pn(
          e,
          t,
          a
        );
    }
  }
  function kd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ii(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
    }
  }
  function Yd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ii(e);
      } catch (a) {
        Oe(t, t.return, a);
      }
  }
  function Ag(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Dd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dd()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function cu(e, t) {
    var a = Ag(e);
    t.forEach(function(i) {
      if (!a.has(i)) {
        a.add(i);
        var o = Zg.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function yt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var o = a[i], s = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Hn(g.type)) {
                ke = g.stateNode, gt = !1;
                break e;
              }
              break;
            case 5:
              ke = g.stateNode, gt = !1;
              break e;
            case 3:
            case 4:
              ke = g.stateNode.containerInfo, gt = !0;
              break e;
          }
          g = g.return;
        }
        if (ke === null) throw Error(r(160));
        Ud(s, m, o), ke = null, gt = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Xd(t, e), t = t.sibling;
  }
  var Qt = null;
  function Xd(e, t) {
    var a = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yt(t, e), bt(e), i & 4 && (Dn(3, e, e.return), Bi(3, e), Dn(5, e, e.return));
        break;
      case 1:
        yt(t, e), bt(e), i & 512 && (Pe || a === null || It(a, a.return)), i & 64 && mn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
        break;
      case 26:
        var o = Qt;
        if (yt(t, e), bt(e), i & 512 && (Pe || a === null || It(a, a.return)), i & 4) {
          var s = a !== null ? a.memoizedState : null;
          if (i = e.memoizedState, a === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      s = o.getElementsByTagName("title")[0], (!s || s[hi] || s[lt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(i), o.head.insertBefore(
                        s,
                        o.querySelector("head > title")
                      )), st(s, i, a), s[lt] = e, nt(s), i = s;
                      break e;
                    case "link":
                      var m = Xm(
                        "link",
                        "href",
                        o
                      ).get(i + (a.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), st(s, i, a), o.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Xm(
                        "meta",
                        "content",
                        o
                      ).get(i + (a.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), st(s, i, a), o.head.appendChild(s);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  s[lt] = e, nt(s), i = s;
                }
                e.stateNode = i;
              } else
                Hm(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ym(
                o,
                i,
                e.memoizedProps
              );
          else
            s !== i ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, i === null ? Hm(
              o,
              e.type,
              e.stateNode
            ) : Ym(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Zo(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        yt(t, e), bt(e), i & 512 && (Pe || a === null || It(a, a.return)), a !== null && i & 4 && Zo(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (yt(t, e), bt(e), i & 512 && (Pe || a === null || It(a, a.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            xa(o, "");
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, Zo(
          e,
          o,
          a !== null ? a.memoizedProps : o
        )), i & 1024 && (ko = !0);
        break;
      case 6:
        if (yt(t, e), bt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          i = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = i;
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        break;
      case 3:
        if (wu = null, o = Qt, Qt = Eu(t.containerInfo), yt(t, e), Qt = o, bt(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ii(t.containerInfo);
          } catch (J) {
            Oe(e, e.return, J);
          }
        ko && (ko = !1, Hd(e));
        break;
      case 4:
        i = Qt, Qt = Eu(
          e.stateNode.containerInfo
        ), yt(t, e), bt(e), Qt = i;
        break;
      case 12:
        yt(t, e), bt(e);
        break;
      case 31:
        yt(t, e), bt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, cu(e, i)));
        break;
      case 13:
        yt(t, e), bt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (du = Tt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, cu(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, O = mn, D = Pe;
        if (mn = O || o, Pe = D || b, yt(t, e), Pe = D, mn = O, bt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || b || mn || Pe || pa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
                try {
                  if (s = b.stateNode, o)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = b.stateNode;
                    var k = b.memoizedProps.style, C = k != null && k.hasOwnProperty("display") ? k.display : null;
                    g.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (J) {
                  Oe(b, b.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = o ? "" : b.memoizedProps;
                } catch (J) {
                  Oe(b, b.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var N = b.stateNode;
                  o ? Cm(N, !0) : Cm(b.stateNode, !1);
                } catch (J) {
                  Oe(b, b.return, J);
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
        i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, cu(e, a))));
        break;
      case 19:
        yt(t, e), bt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, cu(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yt(t, e), bt(e);
    }
  }
  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, i = e.return; i !== null; ) {
          if (Nd(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode, s = Ro(e);
            su(e, s, o);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (xa(m, ""), a.flags &= -33);
            var g = Ro(e);
            su(e, g, m);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, O = Ro(e);
            Uo(
              e,
              O,
              b
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (D) {
        Oe(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Zd(e, t.alternate, t), t = t.sibling;
  }
  function pa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dn(4, t, t.return), pa(t);
          break;
        case 1:
          It(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Cd(
            t,
            t.return,
            a
          ), pa(t);
          break;
        case 27:
          Pi(t.stateNode);
        case 26:
        case 5:
          It(t, t.return), pa(t);
          break;
        case 22:
          t.memoizedState === null && pa(t);
          break;
        case 30:
          pa(t);
          break;
        default:
          pa(t);
      }
      e = e.sibling;
    }
  }
  function vn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, s = t, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          vn(
            o,
            s,
            a
          ), Bi(4, s);
          break;
        case 1:
          if (vn(
            o,
            s,
            a
          ), i = s, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (O) {
              Oe(i, i.return, O);
            }
          if (i = s, o = i.updateQueue, o !== null) {
            var g = i.stateNode;
            try {
              var b = o.shared.hiddenCallbacks;
              if (b !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < b.length; o++)
                  gf(b[o], g);
            } catch (O) {
              Oe(i, i.return, O);
            }
          }
          a && m & 64 && Od(s), qi(s, s.return);
          break;
        case 27:
          jd(s);
        case 26:
        case 5:
          vn(
            o,
            s,
            a
          ), a && i === null && m & 4 && Md(s), qi(s, s.return);
          break;
        case 12:
          vn(
            o,
            s,
            a
          );
          break;
        case 31:
          vn(
            o,
            s,
            a
          ), a && m & 4 && kd(o, s);
          break;
        case 13:
          vn(
            o,
            s,
            a
          ), a && m & 4 && Yd(o, s);
          break;
        case 22:
          s.memoizedState === null && vn(
            o,
            s,
            a
          ), qi(s, s.return);
          break;
        case 30:
          break;
        default:
          vn(
            o,
            s,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Yo(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Oi(a));
  }
  function Xo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e));
  }
  function Kt(e, t, a, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bd(
          e,
          t,
          a,
          i
        ), t = t.sibling;
  }
  function Bd(e, t, a, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kt(
          e,
          t,
          a,
          i
        ), o & 2048 && Bi(9, t);
        break;
      case 1:
        Kt(
          e,
          t,
          a,
          i
        );
        break;
      case 3:
        Kt(
          e,
          t,
          a,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e)));
        break;
      case 12:
        if (o & 2048) {
          Kt(
            e,
            t,
            a,
            i
          ), e = t.stateNode;
          try {
            var s = t.memoizedProps, m = s.id, g = s.onPostCommit;
            typeof g == "function" && g(
              m,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Oe(t, t.return, b);
          }
        } else
          Kt(
            e,
            t,
            a,
            i
          );
        break;
      case 31:
        Kt(
          e,
          t,
          a,
          i
        );
        break;
      case 13:
        Kt(
          e,
          t,
          a,
          i
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, m = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Kt(
          e,
          t,
          a,
          i
        ) : $i(e, t) : s._visibility & 2 ? Kt(
          e,
          t,
          a,
          i
        ) : (s._visibility |= 2, Qa(
          e,
          t,
          a,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Yo(m, t);
        break;
      case 24:
        Kt(
          e,
          t,
          a,
          i
        ), o & 2048 && Xo(t.alternate, t);
        break;
      default:
        Kt(
          e,
          t,
          a,
          i
        );
    }
  }
  function Qa(e, t, a, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, g = a, b = i, O = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Qa(
            s,
            m,
            g,
            b,
            o
          ), Bi(8, m);
          break;
        case 23:
          break;
        case 22:
          var D = m.stateNode;
          m.memoizedState !== null ? D._visibility & 2 ? Qa(
            s,
            m,
            g,
            b,
            o
          ) : $i(
            s,
            m
          ) : (D._visibility |= 2, Qa(
            s,
            m,
            g,
            b,
            o
          )), o && O & 2048 && Yo(
            m.alternate,
            m
          );
          break;
        case 24:
          Qa(
            s,
            m,
            g,
            b,
            o
          ), o && O & 2048 && Xo(m.alternate, m);
          break;
        default:
          Qa(
            s,
            m,
            g,
            b,
            o
          );
      }
      t = t.sibling;
    }
  }
  function $i(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            $i(a, i), o & 2048 && Yo(
              i.alternate,
              i
            );
            break;
          case 24:
            $i(a, i), o & 2048 && Xo(i.alternate, i);
            break;
          default:
            $i(a, i);
        }
        t = t.sibling;
      }
  }
  var Vi = 8192;
  function Ka(e, t, a) {
    if (e.subtreeFlags & Vi)
      for (e = e.child; e !== null; )
        qd(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function qd(e, t, a) {
    switch (e.tag) {
      case 26:
        Ka(
          e,
          t,
          a
        ), e.flags & Vi && e.memoizedState !== null && fy(
          a,
          Qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ka(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var i = Qt;
        Qt = Eu(e.stateNode.containerInfo), Ka(
          e,
          t,
          a
        ), Qt = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Vi, Vi = 16777216, Ka(
          e,
          t,
          a
        ), Vi = i) : Ka(
          e,
          t,
          a
        ));
        break;
      default:
        Ka(
          e,
          t,
          a
        );
    }
  }
  function $d(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          at = i, Ld(
            i,
            e
          );
        }
      $d(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vd(e), e = e.sibling;
  }
  function Vd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Li(e), e.flags & 2048 && Dn(9, e, e.return);
        break;
      case 3:
        Li(e);
        break;
      case 12:
        Li(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fu(e)) : Li(e);
        break;
      default:
        Li(e);
    }
  }
  function fu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          at = i, Ld(
            i,
            e
          );
        }
      $d(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, t, t.return), fu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, fu(t));
          break;
        default:
          fu(t);
      }
      e = e.sibling;
    }
  }
  function Ld(e, t) {
    for (; at !== null; ) {
      var a = at;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Oi(a.memoizedState.cache);
      }
      if (i = a.child, i !== null) i.return = a, at = i;
      else
        e: for (a = e; at !== null; ) {
          i = at;
          var o = i.sibling, s = i.return;
          if (Rd(i), i === a) {
            at = null;
            break e;
          }
          if (o !== null) {
            o.return = s, at = o;
            break e;
          }
          at = s;
        }
    }
  }
  var wg = {
    getCacheForType: function(e) {
      var t = rt(Ke), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return rt(Ke).controller.signal;
    }
  }, xg = typeof WeakMap == "function" ? WeakMap : Map, we = 0, De = null, de = null, pe = 0, xe = 0, Mt = null, Zn = !1, Ja = !1, Ho = !1, gn = 0, qe = 0, Rn = 0, ha = 0, Bo = 0, Nt = 0, Wa = 0, Gi = null, _t = null, qo = !1, du = 0, Gd = 0, mu = 1 / 0, pu = null, Un = null, Ie = 0, kn = null, Pa = null, yn = 0, $o = 0, Vo = null, Qd = null, Qi = 0, Lo = null;
  function jt() {
    return (we & 2) !== 0 && pe !== 0 ? pe & -pe : j.T !== null ? Po() : oc();
  }
  function Kd() {
    if (Nt === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = zl;
        zl <<= 1, (zl & 3932160) === 0 && (zl = 262144), Nt = e;
      } else Nt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), Nt;
  }
  function St(e, t, a) {
    (e === De && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Fa(e, 0), Yn(
      e,
      pe,
      Nt,
      !1
    )), pi(e, a), ((we & 2) === 0 || e !== De) && (e === De && ((we & 2) === 0 && (ha |= a), qe === 4 && Yn(
      e,
      pe,
      Nt,
      !1
    )), en(e));
  }
  function Jd(e, t, a) {
    if ((we & 6) !== 0) throw Error(r(327));
    var i = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || mi(e, t), o = i ? Mg(e, t) : Qo(e, t, !0), s = i;
    do {
      if (o === 0) {
        Ja && !i && Yn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, s && !Og(a)) {
          o = Qo(e, t, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var g = e;
              o = Gi;
              var b = g.current.memoizedState.isDehydrated;
              if (b && (Fa(g, m).flags |= 256), m = Qo(
                g,
                m,
                !1
              ), m !== 2) {
                if (Ho && !b) {
                  g.errorRecoveryDisabledLanes |= s, ha |= s, o = 4;
                  break e;
                }
                s = _t, _t = o, s !== null && (_t === null ? _t = s : _t.push.apply(
                  _t,
                  s
                ));
              }
              o = m;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Fa(e, 0), Yn(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, s = o, s) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Yn(
                i,
                t,
                Nt,
                !Zn
              );
              break e;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (o = du + 300 - Tt(), 10 < o)) {
            if (Yn(
              i,
              t,
              Nt,
              !Zn
            ), El(i, 0, !0) !== 0) break e;
            yn = t, i.timeoutHandle = wm(
              Wd.bind(
                null,
                i,
                a,
                _t,
                pu,
                qo,
                t,
                Nt,
                ha,
                Wa,
                Zn,
                s,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          Wd(
            i,
            a,
            _t,
            pu,
            qo,
            t,
            Nt,
            ha,
            Wa,
            Zn,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    en(e);
  }
  function Wd(e, t, a, i, o, s, m, g, b, O, D, k, C, N) {
    if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn
      }, qd(
        t,
        s,
        k
      );
      var J = (s & 62914560) === s ? du - Tt() : (s & 4194048) === s ? Gd - Tt() : 0;
      if (J = dy(
        k,
        J
      ), J !== null) {
        yn = s, e.cancelPendingCommit = J(
          im.bind(
            null,
            e,
            t,
            s,
            a,
            i,
            o,
            m,
            g,
            b,
            D,
            k,
            null,
            C,
            N
          )
        ), Yn(e, s, m, !O);
        return;
      }
    }
    im(
      e,
      t,
      s,
      a,
      i,
      o,
      m,
      g,
      b
    );
  }
  function Og(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var i = 0; i < a.length; i++) {
          var o = a[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(s(), o)) return !1;
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
  function Yn(e, t, a, i) {
    t &= ~Bo, t &= ~ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var s = 31 - At(o), m = 1 << s;
      i[s] = -1, o &= ~m;
    }
    a !== 0 && lc(e, a, t);
  }
  function hu() {
    return (we & 6) === 0 ? (Ki(0), !1) : !0;
  }
  function Go() {
    if (de !== null) {
      if (xe === 0)
        var e = de.return;
      else
        e = de, rn = ua = null, ro(e), qa = null, Mi = 0, e = de;
      for (; e !== null; )
        xd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Fa(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Kg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), yn = 0, Go(), De = e, de = a = ln(e.current, null), pe = t, xe = 0, Mt = null, Zn = !1, Ja = mi(e, t), Ho = !1, Wa = Nt = Bo = ha = Rn = qe = 0, _t = Gi = null, qo = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - At(i), s = 1 << o;
        t |= e[o], i &= ~s;
      }
    return gn = t, Ul(), a;
  }
  function Pd(e, t) {
    re = null, j.H = Yi, t === Ba || t === Vl ? (t = mf(), xe = 3) : t === Jr ? (t = mf(), xe = 4) : xe = t === Eo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, de === null && (qe = 1, iu(
      e,
      kt(t, e.current)
    ));
  }
  function Fd() {
    var e = Ot.current;
    return e === null ? !0 : (pe & 4194048) === pe ? Bt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Bt : !1;
  }
  function Id() {
    var e = j.H;
    return j.H = Yi, e === null ? Yi : e;
  }
  function em() {
    var e = j.A;
    return j.A = wg, e;
  }
  function vu() {
    qe = 4, Zn || (pe & 4194048) !== pe && Ot.current !== null || (Ja = !0), (Rn & 134217727) === 0 && (ha & 134217727) === 0 || De === null || Yn(
      De,
      pe,
      Nt,
      !1
    );
  }
  function Qo(e, t, a) {
    var i = we;
    we |= 2;
    var o = Id(), s = em();
    (De !== e || pe !== t) && (pu = null, Fa(e, t)), t = !1;
    var m = qe;
    e: do
      try {
        if (xe !== 0 && de !== null) {
          var g = de, b = Mt;
          switch (xe) {
            case 8:
              Go(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var O = xe;
              if (xe = 0, Mt = null, Ia(e, g, b, O), a && Ja) {
                m = 0;
                break e;
              }
              break;
            default:
              O = xe, xe = 0, Mt = null, Ia(e, g, b, O);
          }
        }
        Cg(), m = qe;
        break;
      } catch (D) {
        Pd(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, rn = ua = null, we = i, j.H = o, j.A = s, de === null && (De = null, pe = 0, Ul()), m;
  }
  function Cg() {
    for (; de !== null; ) tm(de);
  }
  function Mg(e, t) {
    var a = we;
    we |= 2;
    var i = Id(), o = em();
    De !== e || pe !== t ? (pu = null, mu = Tt() + 500, Fa(e, t)) : Ja = mi(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && de !== null) {
          t = de;
          var s = Mt;
          t: switch (xe) {
            case 1:
              xe = 0, Mt = null, Ia(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (ff(s)) {
                xe = 0, Mt = null, nm(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || De !== e || (xe = 7), en(e);
              }, s.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              ff(s) ? (xe = 0, Mt = null, nm(t)) : (xe = 0, Mt = null, Ia(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (de.tag) {
                case 26:
                  m = de.memoizedState;
                case 5:
                case 27:
                  var g = de;
                  if (m ? Bm(m) : g.stateNode.complete) {
                    xe = 0, Mt = null;
                    var b = g.sibling;
                    if (b !== null) de = b;
                    else {
                      var O = g.return;
                      O !== null ? (de = O, gu(O)) : de = null;
                    }
                    break t;
                  }
              }
              xe = 0, Mt = null, Ia(e, t, s, 5);
              break;
            case 6:
              xe = 0, Mt = null, Ia(e, t, s, 6);
              break;
            case 8:
              Go(), qe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Ng();
        break;
      } catch (D) {
        Pd(e, D);
      }
    while (!0);
    return rn = ua = null, j.H = i, j.A = o, we = a, de !== null ? 0 : (De = null, pe = 0, Ul(), qe);
  }
  function Ng() {
    for (; de !== null && !ev(); )
      tm(de);
  }
  function tm(e) {
    var t = Ad(e.alternate, e, gn);
    e.memoizedProps = e.pendingProps, t === null ? gu(e) : de = t;
  }
  function nm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = bd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        ro(t);
      default:
        xd(a, t), t = de = Ic(t, gn), t = Ad(a, t, gn);
    }
    e.memoizedProps = e.pendingProps, t === null ? gu(e) : de = t;
  }
  function Ia(e, t, a, i) {
    rn = ua = null, ro(t), qa = null, Mi = 0;
    var o = t.return;
    try {
      if (bg(
        e,
        o,
        t,
        a,
        pe
      )) {
        qe = 1, iu(
          e,
          kt(a, e.current)
        ), de = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw de = o, s;
      qe = 1, iu(
        e,
        kt(a, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (be || i === 1 ? e = !0 : Ja || (pe & 536870912) !== 0 ? e = !1 : (Zn = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Ot.current, i !== null && i.tag === 13 && (i.flags |= 16384))), am(t, e)) : gu(t);
  }
  function gu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(
          t,
          Zn
        );
        return;
      }
      e = t.return;
      var a = zg(
        t.alternate,
        t,
        gn
      );
      if (a !== null) {
        de = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function am(e, t) {
    do {
      var a = Tg(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, de = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = a;
    } while (e !== null);
    qe = 6, de = null;
  }
  function im(e, t, a, i, o, s, m, g, b) {
    e.cancelPendingCommit = null;
    do
      yu();
    while (Ie !== 0);
    if ((we & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (s = t.lanes | t.childLanes, s |= Zr, cv(
        e,
        a,
        s,
        m,
        g,
        b
      ), e === De && (de = De = null, pe = 0), Pa = t, kn = e, yn = a, $o = s, Vo = o, Qd = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Rg(_l, function() {
        return sm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = j.T, j.T = null, o = q.p, q.p = 2, m = we, we |= 4;
        try {
          Eg(e, t, a);
        } finally {
          we = m, q.p = o, j.T = i;
        }
      }
      Ie = 1, lm(), um(), rm();
    }
  }
  function lm() {
    if (Ie === 1) {
      Ie = 0;
      var e = kn, t = Pa, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null;
        var i = q.p;
        q.p = 2;
        var o = we;
        we |= 4;
        try {
          Xd(t, e);
          var s = ls, m = Vc(e.containerInfo), g = s.focusedElem, b = s.selectionRange;
          if (m !== g && g && g.ownerDocument && $c(
            g.ownerDocument.documentElement,
            g
          )) {
            if (b !== null && Cr(g)) {
              var O = b.start, D = b.end;
              if (D === void 0 && (D = O), "selectionStart" in g)
                g.selectionStart = O, g.selectionEnd = Math.min(
                  D,
                  g.value.length
                );
              else {
                var k = g.ownerDocument || document, C = k && k.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), J = g.textContent.length, te = Math.min(b.start, J), Ne = b.end === void 0 ? te : Math.min(b.end, J);
                  !N.extend && te > Ne && (m = Ne, Ne = te, te = m);
                  var E = qc(
                    g,
                    te
                  ), z = qc(
                    g,
                    Ne
                  );
                  if (E && z && (N.rangeCount !== 1 || N.anchorNode !== E.node || N.anchorOffset !== E.offset || N.focusNode !== z.node || N.focusOffset !== z.offset)) {
                    var x = k.createRange();
                    x.setStart(E.node, E.offset), N.removeAllRanges(), te > Ne ? (N.addRange(x), N.extend(z.node, z.offset)) : (x.setEnd(z.node, z.offset), N.addRange(x));
                  }
                }
              }
            }
            for (k = [], N = g; N = N.parentNode; )
              N.nodeType === 1 && k.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < k.length; g++) {
              var Z = k[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Mu = !!is, ls = is = null;
        } finally {
          we = o, q.p = i, j.T = a;
        }
      }
      e.current = t, Ie = 2;
    }
  }
  function um() {
    if (Ie === 2) {
      Ie = 0;
      var e = kn, t = Pa, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = j.T, j.T = null;
        var i = q.p;
        q.p = 2;
        var o = we;
        we |= 4;
        try {
          Zd(e, t.alternate, t);
        } finally {
          we = o, q.p = i, j.T = a;
        }
      }
      Ie = 3;
    }
  }
  function rm() {
    if (Ie === 4 || Ie === 3) {
      Ie = 0, tv();
      var e = kn, t = Pa, a = yn, i = Qd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ie = 5 : (Ie = 0, Pa = kn = null, om(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Un = null), cr(a), t = t.stateNode, Et && typeof Et.onCommitFiberRoot == "function")
        try {
          Et.onCommitFiberRoot(
            di,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = j.T, o = q.p, q.p = 2, j.T = null;
        try {
          for (var s = e.onRecoverableError, m = 0; m < i.length; m++) {
            var g = i[m];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          j.T = t, q.p = o;
        }
      }
      (yn & 3) !== 0 && yu(), en(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Lo ? Qi++ : (Qi = 0, Lo = e) : Qi = 0, Ki(0);
    }
  }
  function om(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Oi(t)));
  }
  function yu() {
    return lm(), um(), rm(), sm();
  }
  function sm() {
    if (Ie !== 5) return !1;
    var e = kn, t = $o;
    $o = 0;
    var a = cr(yn), i = j.T, o = q.p;
    try {
      q.p = 32 > a ? 32 : a, j.T = null, a = Vo, Vo = null;
      var s = kn, m = yn;
      if (Ie = 0, Pa = kn = null, yn = 0, (we & 6) !== 0) throw Error(r(331));
      var g = we;
      if (we |= 4, Vd(s.current), Bd(
        s,
        s.current,
        m,
        a
      ), we = g, Ki(0, !1), Et && typeof Et.onPostCommitFiberRoot == "function")
        try {
          Et.onPostCommitFiberRoot(di, s);
        } catch {
        }
      return !0;
    } finally {
      q.p = o, j.T = i, om(e, t);
    }
  }
  function cm(e, t, a) {
    t = kt(a, t), t = To(e.stateNode, t, 2), e = Mn(e, t, 2), e !== null && (pi(e, 2), en(e));
  }
  function Oe(e, t, a) {
    if (e.tag === 3)
      cm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Un === null || !Un.has(i))) {
            e = kt(a, e), a = fd(2), i = Mn(t, a, 2), i !== null && (dd(
              a,
              i,
              t,
              e
            ), pi(i, 2), en(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ko(e, t, a) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new xg();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(a) || (Ho = !0, o.add(a), e = jg.bind(null, e, t, a), t.then(e, e));
  }
  function jg(e, t, a) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, De === e && (pe & a) === a && (qe === 4 || qe === 3 && (pe & 62914560) === pe && 300 > Tt() - du ? (we & 2) === 0 && Fa(e, 0) : Bo |= a, Wa === pe && (Wa = 0)), en(e);
  }
  function fm(e, t) {
    t === 0 && (t = ic()), e = aa(e, t), e !== null && (pi(e, t), en(e));
  }
  function Dg(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), fm(e, a);
  }
  function Zg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(t), fm(e, a);
  }
  function Rg(e, t) {
    return ur(e, t);
  }
  var bu = null, ei = null, Jo = !1, _u = !1, Wo = !1, Xn = 0;
  function en(e) {
    e !== ei && e.next === null && (ei === null ? bu = ei = e : ei = ei.next = e), _u = !0, Jo || (Jo = !0, kg());
  }
  function Ki(e, t) {
    if (!Wo && _u) {
      Wo = !0;
      do
        for (var a = !1, i = bu; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var m = i.suspendedLanes, g = i.pingedLanes;
              s = (1 << 31 - At(42 | e) + 1) - 1, s &= o & ~(m & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (a = !0, hm(i, s));
          } else
            s = pe, s = El(
              i,
              i === De ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || mi(i, s) || (a = !0, hm(i, s));
          i = i.next;
        }
      while (a);
      Wo = !1;
    }
  }
  function Ug() {
    dm();
  }
  function dm() {
    _u = Jo = !1;
    var e = 0;
    Xn !== 0 && Qg() && (e = Xn);
    for (var t = Tt(), a = null, i = bu; i !== null; ) {
      var o = i.next, s = mm(i, t);
      s === 0 ? (i.next = null, a === null ? bu = o : a.next = o, o === null && (ei = a)) : (a = i, (e !== 0 || (s & 3) !== 0) && (_u = !0)), i = o;
    }
    Ie !== 0 && Ie !== 5 || Ki(e), Xn !== 0 && (Xn = 0);
  }
  function mm(e, t) {
    for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - At(s), g = 1 << m, b = o[m];
      b === -1 ? ((g & a) === 0 || (g & i) !== 0) && (o[m] = sv(g, t)) : b <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = De, a = pe, a = El(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, a === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && rr(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || mi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (i !== null && rr(i), cr(a)) {
        case 2:
        case 8:
          a = nc;
          break;
        case 32:
          a = _l;
          break;
        case 268435456:
          a = ac;
          break;
        default:
          a = _l;
      }
      return i = pm.bind(null, e), a = ur(a, i), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return i !== null && i !== null && rr(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pm(e, t) {
    if (Ie !== 0 && Ie !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (yu() && e.callbackNode !== a)
      return null;
    var i = pe;
    return i = El(
      e,
      e === De ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (Jd(e, i, t), mm(e, Tt()), e.callbackNode != null && e.callbackNode === a ? pm.bind(null, e) : null);
  }
  function hm(e, t) {
    if (yu()) return null;
    Jd(e, t, !0);
  }
  function kg() {
    Jg(function() {
      (we & 6) !== 0 ? ur(
        tc,
        Ug
      ) : dm();
    });
  }
  function Po() {
    if (Xn === 0) {
      var e = Xa;
      e === 0 && (e = Sl, Sl <<= 1, (Sl & 261888) === 0 && (Sl = 256)), Xn = e;
    }
    return Xn;
  }
  function vm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ol("" + e);
  }
  function gm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Yg(e, t, a, i, o) {
    if (t === "submit" && a && a.stateNode === o) {
      var s = vm(
        (o[ht] || null).action
      ), m = i.submitter;
      m && (t = (t = m[ht] || null) ? vm(t.formAction) : m.getAttribute("formAction"), t !== null && (s = t, m = null));
      var g = new jl(
        "action",
        "action",
        null,
        i,
        o
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Xn !== 0) {
                  var b = m ? gm(o, m) : new FormData(o);
                  go(
                    a,
                    {
                      pending: !0,
                      data: b,
                      method: o.method,
                      action: s
                    },
                    null,
                    b
                  );
                }
              } else
                typeof s == "function" && (g.preventDefault(), b = m ? gm(o, m) : new FormData(o), go(
                  a,
                  {
                    pending: !0,
                    data: b,
                    method: o.method,
                    action: s
                  },
                  s,
                  b
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Fo = 0; Fo < Dr.length; Fo++) {
    var Io = Dr[Fo], Xg = Io.toLowerCase(), Hg = Io[0].toUpperCase() + Io.slice(1);
    Gt(
      Xg,
      "on" + Hg
    );
  }
  Gt(Qc, "onAnimationEnd"), Gt(Kc, "onAnimationIteration"), Gt(Jc, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(ng, "onTransitionRun"), Gt(ag, "onTransitionStart"), Gt(ig, "onTransitionCancel"), Gt(Wc, "onTransitionEnd"), Aa("onMouseEnter", ["mouseout", "mouseover"]), Aa("onMouseLeave", ["mouseout", "mouseover"]), Aa("onPointerEnter", ["pointerout", "pointerover"]), Aa("onPointerLeave", ["pointerout", "pointerover"]), In(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), In(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), In("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), In(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), In(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), In(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ji)
  );
  function ym(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var i = e[a], o = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var m = i.length - 1; 0 <= m; m--) {
            var g = i[m], b = g.instance, O = g.currentTarget;
            if (g = g.listener, b !== s && o.isPropagationStopped())
              break e;
            s = g, o.currentTarget = O;
            try {
              s(o);
            } catch (D) {
              Rl(D);
            }
            o.currentTarget = null, s = b;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (g = i[m], b = g.instance, O = g.currentTarget, g = g.listener, b !== s && o.isPropagationStopped())
              break e;
            s = g, o.currentTarget = O;
            try {
              s(o);
            } catch (D) {
              Rl(D);
            }
            o.currentTarget = null, s = b;
          }
      }
    }
  }
  function me(e, t) {
    var a = t[fr];
    a === void 0 && (a = t[fr] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    a.has(i) || (bm(t, e, 2, !1), a.add(i));
  }
  function es(e, t, a) {
    var i = 0;
    t && (i |= 4), bm(
      a,
      e,
      i,
      t
    );
  }
  var Su = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(e) {
    if (!e[Su]) {
      e[Su] = !0, fc.forEach(function(a) {
        a !== "selectionchange" && (Bg.has(a) || es(a, !1, e), es(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Su] || (t[Su] = !0, es("selectionchange", !1, t));
    }
  }
  function bm(e, t, a, i) {
    switch (Km(t)) {
      case 2:
        var o = hy;
        break;
      case 8:
        o = vy;
        break;
      default:
        o = vs;
    }
    a = o.bind(
      null,
      t,
      a,
      e
    ), o = void 0, !_r || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
      passive: o
    }) : e.addEventListener(t, a, !1);
  }
  function ns(e, t, a, i, o) {
    var s = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var g = i.stateNode.containerInfo;
          if (g === o) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var b = m.tag;
              if ((b === 3 || b === 4) && m.stateNode.containerInfo === o)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = za(g), m === null) return;
            if (b = m.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              i = s = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Tc(function() {
      var O = s, D = yr(a), k = [];
      e: {
        var C = Pc.get(e);
        if (C !== void 0) {
          var N = jl, J = e;
          switch (e) {
            case "keypress":
              if (Ml(a) === 0) break e;
            case "keydown":
            case "keyup":
              N = Zv;
              break;
            case "focusin":
              J = "focus", N = Er;
              break;
            case "focusout":
              J = "blur", N = Er;
              break;
            case "beforeblur":
            case "afterblur":
              N = Er;
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
              N = wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = zv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = kv;
              break;
            case Qc:
            case Kc:
            case Jc:
              N = Av;
              break;
            case Wc:
              N = Xv;
              break;
            case "scroll":
            case "scrollend":
              N = _v;
              break;
            case "wheel":
              N = Bv;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = xv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Oc;
              break;
            case "toggle":
            case "beforetoggle":
              N = $v;
          }
          var te = (t & 4) !== 0, Ne = !te && (e === "scroll" || e === "scrollend"), E = te ? C !== null ? C + "Capture" : null : C;
          te = [];
          for (var z = O, x; z !== null; ) {
            var Z = z;
            if (x = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || x === null || E === null || (Z = gi(z, E), Z != null && te.push(
              Wi(z, Z, x)
            )), Ne) break;
            z = z.return;
          }
          0 < te.length && (C = new N(
            C,
            J,
            null,
            a,
            D
          ), k.push({ event: C, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", C && a !== gr && (J = a.relatedTarget || a.fromElement) && (za(J) || J[Sa]))
            break e;
          if ((N || C) && (C = D.window === D ? D : (C = D.ownerDocument) ? C.defaultView || C.parentWindow : window, N ? (J = a.relatedTarget || a.toElement, N = O, J = J ? za(J) : null, J !== null && (Ne = f(J), te = J.tag, J !== Ne || te !== 5 && te !== 27 && te !== 6) && (J = null)) : (N = null, J = O), N !== J)) {
            if (te = wc, Z = "onMouseLeave", E = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (te = Oc, Z = "onPointerLeave", E = "onPointerEnter", z = "pointer"), Ne = N == null ? C : vi(N), x = J == null ? C : vi(J), C = new te(
              Z,
              z + "leave",
              N,
              a,
              D
            ), C.target = Ne, C.relatedTarget = x, Z = null, za(D) === O && (te = new te(
              E,
              z + "enter",
              J,
              a,
              D
            ), te.target = x, te.relatedTarget = Ne, Z = te), Ne = Z, N && J)
              t: {
                for (te = qg, E = N, z = J, x = 0, Z = E; Z; Z = te(Z))
                  x++;
                Z = 0;
                for (var F = z; F; F = te(F))
                  Z++;
                for (; 0 < x - Z; )
                  E = te(E), x--;
                for (; 0 < Z - x; )
                  z = te(z), Z--;
                for (; x--; ) {
                  if (E === z || z !== null && E === z.alternate) {
                    te = E;
                    break t;
                  }
                  E = te(E), z = te(z);
                }
                te = null;
              }
            else te = null;
            N !== null && _m(
              k,
              C,
              N,
              te,
              !1
            ), J !== null && Ne !== null && _m(
              k,
              Ne,
              J,
              te,
              !0
            );
          }
        }
        e: {
          if (C = O ? vi(O) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var Te = Uc;
          else if (Zc(C))
            if (kc)
              Te = Iv;
            else {
              Te = Pv;
              var P = Wv;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && vr(O.elementType) && (Te = Uc) : Te = Fv;
          if (Te && (Te = Te(e, O))) {
            Rc(
              k,
              Te,
              a,
              D
            );
            break e;
          }
          P && P(e, C, O), e === "focusout" && O && C.type === "number" && O.memoizedProps.value != null && hr(C, "number", C.value);
        }
        switch (P = O ? vi(O) : window, e) {
          case "focusin":
            (Zc(P) || P.contentEditable === "true") && (Na = P, Mr = O, Ai = null);
            break;
          case "focusout":
            Ai = Mr = Na = null;
            break;
          case "mousedown":
            Nr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nr = !1, Lc(k, a, D);
            break;
          case "selectionchange":
            if (tg) break;
          case "keydown":
          case "keyup":
            Lc(k, a, D);
        }
        var oe;
        if (wr)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Ma ? jc(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (he = "onCompositionStart");
        he && (Cc && a.locale !== "ko" && (Ma || he !== "onCompositionStart" ? he === "onCompositionEnd" && Ma && (oe = Ec()) : (Tn = D, Sr = "value" in Tn ? Tn.value : Tn.textContent, Ma = !0)), P = zu(O, he), 0 < P.length && (he = new xc(
          he,
          e,
          null,
          a,
          D
        ), k.push({ event: he, listeners: P }), oe ? he.data = oe : (oe = Dc(a), oe !== null && (he.data = oe)))), (oe = Lv ? Gv(e, a) : Qv(e, a)) && (he = zu(O, "onBeforeInput"), 0 < he.length && (P = new xc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          D
        ), k.push({
          event: P,
          listeners: he
        }), P.data = oe)), Yg(
          k,
          e,
          O,
          a,
          D
        );
      }
      ym(k, t);
    });
  }
  function Wi(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function zu(e, t) {
    for (var a = t + "Capture", i = []; e !== null; ) {
      var o = e, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = gi(e, a), o != null && i.unshift(
        Wi(e, o, s)
      ), o = gi(e, t), o != null && i.push(
        Wi(e, o, s)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function qg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _m(e, t, a, i, o) {
    for (var s = t._reactName, m = []; a !== null && a !== i; ) {
      var g = a, b = g.alternate, O = g.stateNode;
      if (g = g.tag, b !== null && b === i) break;
      g !== 5 && g !== 26 && g !== 27 || O === null || (b = O, o ? (O = gi(a, s), O != null && m.unshift(
        Wi(a, O, b)
      )) : o || (O = gi(a, s), O != null && m.push(
        Wi(a, O, b)
      ))), a = a.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var $g = /\r\n?/g, Vg = /\u0000|\uFFFD/g;
  function Sm(e) {
    return (typeof e == "string" ? e : "" + e).replace($g, `
`).replace(Vg, "");
  }
  function zm(e, t) {
    return t = Sm(t), Sm(e) === t;
  }
  function Me(e, t, a, i, o, s) {
    switch (a) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || xa(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && xa(e, "" + i);
        break;
      case "className":
        wl(e, "class", i);
        break;
      case "tabIndex":
        wl(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wl(e, a, i);
        break;
      case "style":
        Sc(e, i, s);
        break;
      case "data":
        if (t !== "object") {
          wl(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        i = Ol("" + i), e.setAttribute(a, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (a === "formAction" ? (t !== "input" && Me(e, t, "name", o.name, o, null), Me(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Me(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Me(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Me(e, t, "encType", o.encType, o, null), Me(e, t, "method", o.method, o, null), Me(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        i = Ol("" + i), e.setAttribute(a, i);
        break;
      case "onClick":
        i != null && (e.onclick = nn);
        break;
      case "onScroll":
        i != null && me("scroll", e);
        break;
      case "onScrollEnd":
        i != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (a = i.__html, a != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Ol("" + i), e.setAttributeNS(
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
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "" + i) : e.removeAttribute(a);
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
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, i) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(a, i) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : e.setAttribute(a, i);
        break;
      case "popover":
        me("beforetoggle", e), me("toggle", e), Al(e, "popover", i);
        break;
      case "xlinkActuate":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Al(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = yv.get(a) || a, Al(e, a, i));
    }
  }
  function as(e, t, a, i, o, s) {
    switch (a) {
      case "style":
        Sc(e, i, s);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (a = i.__html, a != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string" ? xa(e, i) : (typeof i == "number" || typeof i == "bigint") && xa(e, "" + i);
        break;
      case "onScroll":
        i != null && me("scroll", e);
        break;
      case "onScrollEnd":
        i != null && me("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = nn);
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
        if (!dc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), s = e[ht] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, o), typeof i == "function")) {
              typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
              break e;
            }
            a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Al(e, a, i);
          }
    }
  }
  function st(e, t, a) {
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
        me("error", e), me("load", e);
        var i = !1, o = !1, s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var m = a[s];
            if (m != null)
              switch (s) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Me(e, t, s, m, a, null);
              }
          }
        o && Me(e, t, "srcSet", a.srcSet, a, null), i && Me(e, t, "src", a.src, a, null);
        return;
      case "input":
        me("invalid", e);
        var g = s = m = o = null, b = null, O = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var D = a[i];
            if (D != null)
              switch (i) {
                case "name":
                  o = D;
                  break;
                case "type":
                  m = D;
                  break;
                case "checked":
                  b = D;
                  break;
                case "defaultChecked":
                  O = D;
                  break;
                case "value":
                  s = D;
                  break;
                case "defaultValue":
                  g = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Me(e, t, i, D, a, null);
              }
          }
        gc(
          e,
          s,
          g,
          b,
          O,
          m,
          o,
          !1
        );
        return;
      case "select":
        me("invalid", e), i = m = s = null;
        for (o in a)
          if (a.hasOwnProperty(o) && (g = a[o], g != null))
            switch (o) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                i = g;
              default:
                Me(e, t, o, g, a, null);
            }
        t = s, a = m, e.multiple = !!i, t != null ? wa(e, !!i, t, !1) : a != null && wa(e, !!i, a, !0);
        return;
      case "textarea":
        me("invalid", e), s = o = i = null;
        for (m in a)
          if (a.hasOwnProperty(m) && (g = a[m], g != null))
            switch (m) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                o = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Me(e, t, m, g, a, null);
            }
        bc(e, i, o, s);
        return;
      case "option":
        for (b in a)
          a.hasOwnProperty(b) && (i = a[b], i != null) && (b === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Me(e, t, b, i, a, null));
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ji.length; i++)
          me(Ji[i], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
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
        for (O in a)
          if (a.hasOwnProperty(O) && (i = a[O], i != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Me(e, t, O, i, a, null);
            }
        return;
      default:
        if (vr(t)) {
          for (D in a)
            a.hasOwnProperty(D) && (i = a[D], i !== void 0 && as(
              e,
              t,
              D,
              i,
              a,
              void 0
            ));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && (i = a[g], i != null && Me(e, t, g, i, a, null));
  }
  function Lg(e, t, a, i) {
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
        var o = null, s = null, m = null, g = null, b = null, O = null, D = null;
        for (N in a) {
          var k = a[N];
          if (a.hasOwnProperty(N) && k != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = k;
              default:
                i.hasOwnProperty(N) || Me(e, t, N, null, i, k);
            }
        }
        for (var C in i) {
          var N = i[C];
          if (k = a[C], i.hasOwnProperty(C) && (N != null || k != null))
            switch (C) {
              case "type":
                s = N;
                break;
              case "name":
                o = N;
                break;
              case "checked":
                O = N;
                break;
              case "defaultChecked":
                D = N;
                break;
              case "value":
                m = N;
                break;
              case "defaultValue":
                g = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, t));
                break;
              default:
                N !== k && Me(
                  e,
                  t,
                  C,
                  N,
                  i,
                  k
                );
            }
        }
        pr(
          e,
          m,
          g,
          b,
          O,
          D,
          s,
          o
        );
        return;
      case "select":
        N = m = g = C = null;
        for (s in a)
          if (b = a[s], a.hasOwnProperty(s) && b != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                N = b;
              default:
                i.hasOwnProperty(s) || Me(
                  e,
                  t,
                  s,
                  null,
                  i,
                  b
                );
            }
        for (o in i)
          if (s = i[o], b = a[o], i.hasOwnProperty(o) && (s != null || b != null))
            switch (o) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== b && Me(
                  e,
                  t,
                  o,
                  s,
                  i,
                  b
                );
            }
        t = g, a = m, i = N, C != null ? wa(e, !!a, C, !1) : !!i != !!a && (t != null ? wa(e, !!a, t, !0) : wa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (g in a)
          if (o = a[g], a.hasOwnProperty(g) && o != null && !i.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(e, t, g, null, i, o);
            }
        for (m in i)
          if (o = i[m], s = a[m], i.hasOwnProperty(m) && (o != null || s != null))
            switch (m) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                N = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== s && Me(e, t, m, o, i, s);
            }
        yc(e, C, N);
        return;
      case "option":
        for (var J in a)
          C = a[J], a.hasOwnProperty(J) && C != null && !i.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Me(
            e,
            t,
            J,
            null,
            i,
            C
          ));
        for (b in i)
          C = i[b], N = a[b], i.hasOwnProperty(b) && C !== N && (C != null || N != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Me(
            e,
            t,
            b,
            C,
            i,
            N
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
        for (var te in a)
          C = a[te], a.hasOwnProperty(te) && C != null && !i.hasOwnProperty(te) && Me(e, t, te, null, i, C);
        for (O in i)
          if (C = i[O], N = a[O], i.hasOwnProperty(O) && C !== N && (C != null || N != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, t));
                break;
              default:
                Me(
                  e,
                  t,
                  O,
                  C,
                  i,
                  N
                );
            }
        return;
      default:
        if (vr(t)) {
          for (var Ne in a)
            C = a[Ne], a.hasOwnProperty(Ne) && C !== void 0 && !i.hasOwnProperty(Ne) && as(
              e,
              t,
              Ne,
              void 0,
              i,
              C
            );
          for (D in i)
            C = i[D], N = a[D], !i.hasOwnProperty(D) || C === N || C === void 0 && N === void 0 || as(
              e,
              t,
              D,
              C,
              i,
              N
            );
          return;
        }
    }
    for (var E in a)
      C = a[E], a.hasOwnProperty(E) && C != null && !i.hasOwnProperty(E) && Me(e, t, E, null, i, C);
    for (k in i)
      C = i[k], N = a[k], !i.hasOwnProperty(k) || C === N || C == null && N == null || Me(e, t, k, C, i, N);
  }
  function Tm(e) {
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
  function Gg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
        var o = a[i], s = o.transferSize, m = o.initiatorType, g = o.duration;
        if (s && g && Tm(m)) {
          for (m = 0, g = o.responseEnd, i += 1; i < a.length; i++) {
            var b = a[i], O = b.startTime;
            if (O > g) break;
            var D = b.transferSize, k = b.initiatorType;
            D && Tm(k) && (b = b.responseEnd, m += D * (b < g ? 1 : (g - O) / (b - O)));
          }
          if (--i, t += 8 * (s + m) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var is = null, ls = null;
  function Tu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Em(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, t) {
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
  function us(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rs = null;
  function Qg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === rs ? !1 : (rs = e, !0) : (rs = null, !1);
  }
  var wm = typeof setTimeout == "function" ? setTimeout : void 0, Kg = typeof clearTimeout == "function" ? clearTimeout : void 0, xm = typeof Promise == "function" ? Promise : void 0, Jg = typeof queueMicrotask == "function" ? queueMicrotask : typeof xm < "u" ? function(e) {
    return xm.resolve(null).then(e).catch(Wg);
  } : wm;
  function Wg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hn(e) {
    return e === "head";
  }
  function Om(e, t) {
    var a = t, i = 0;
    do {
      var o = a.nextSibling;
      if (e.removeChild(a), o && o.nodeType === 8)
        if (a = o.data, a === "/$" || a === "/&") {
          if (i === 0) {
            e.removeChild(o), ii(t);
            return;
          }
          i--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          i++;
        else if (a === "html")
          Pi(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, Pi(a);
          for (var s = a.firstChild; s; ) {
            var m = s.nextSibling, g = s.nodeName;
            s[hi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || a.removeChild(s), s = m;
          }
        } else
          a === "body" && Pi(e.ownerDocument.body);
      a = o;
    } while (a);
    ii(t);
  }
  function Cm(e, t) {
    var a = e;
    e = 0;
    do {
      var i = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
        if (a = i.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = i;
    } while (a);
  }
  function os(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          os(a), dr(a);
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
  function Pg(e, t, a, i) {
    for (; e.nodeType === 1; ) {
      var o = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[hi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === s)
          return e;
      } else return e;
      if (e = qt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Fg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ss(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function cs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ig(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), a.removeEventListener("DOMContentLoaded", i);
      };
      a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function qt(e) {
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
  var fs = null;
  function Nm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return qt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function jm(e) {
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
  function Dm(e, t, a) {
    switch (t = Tu(a), e) {
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
  function Pi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    dr(e);
  }
  var $t = /* @__PURE__ */ new Map(), Zm = /* @__PURE__ */ new Set();
  function Eu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var bn = q.d;
  q.d = {
    f: ey,
    r: ty,
    D: ny,
    C: ay,
    L: iy,
    m: ly,
    X: ry,
    S: uy,
    M: oy
  };
  function ey() {
    var e = bn.f(), t = hu();
    return e || t;
  }
  function ty(e) {
    var t = Ta(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pf(t) : bn.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function Rm(e, t, a) {
    var i = ti;
    if (i && typeof t == "string" && t) {
      var o = Rt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Zm.has(o) || (Zm.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), st(t, "link", e), nt(t), i.head.appendChild(t)));
    }
  }
  function ny(e) {
    bn.D(e), Rm("dns-prefetch", e, null);
  }
  function ay(e, t) {
    bn.C(e, t), Rm("preconnect", e, t);
  }
  function iy(e, t, a) {
    bn.L(e, t, a);
    var i = ti;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Rt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Rt(
        a.imageSizes
      ) + '"]')) : o += '[href="' + Rt(e) + '"]';
      var s = o;
      switch (t) {
        case "style":
          s = ni(e);
          break;
        case "script":
          s = ai(e);
      }
      $t.has(s) || (e = _(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), $t.set(s, e), i.querySelector(o) !== null || t === "style" && i.querySelector(Fi(s)) || t === "script" && i.querySelector(Ii(s)) || (t = i.createElement("link"), st(t, "link", e), nt(t), i.head.appendChild(t)));
    }
  }
  function ly(e, t) {
    bn.m(e, t);
    var a = ti;
    if (a && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Rt(i) + '"][href="' + Rt(e) + '"]', s = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ai(e);
      }
      if (!$t.has(s) && (e = _({ rel: "modulepreload", href: e }, t), $t.set(s, e), a.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ii(s)))
              return;
        }
        i = a.createElement("link"), st(i, "link", e), nt(i), a.head.appendChild(i);
      }
    }
  }
  function uy(e, t, a) {
    bn.S(e, t, a);
    var i = ti;
    if (i && e) {
      var o = Ea(i).hoistableStyles, s = ni(e);
      t = t || "default";
      var m = o.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = i.querySelector(
          Fi(s)
        ))
          g.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = $t.get(s)) && ds(e, a);
          var b = m = i.createElement("link");
          nt(b), st(b, "link", e), b._p = new Promise(function(O, D) {
            b.onload = O, b.onerror = D;
          }), b.addEventListener("load", function() {
            g.loading |= 1;
          }), b.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Au(m, t, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, o.set(s, m);
      }
    }
  }
  function ry(e, t) {
    bn.X(e, t);
    var a = ti;
    if (a && e) {
      var i = Ea(a).hoistableScripts, o = ai(e), s = i.get(o);
      s || (s = a.querySelector(Ii(o)), s || (e = _({ src: e, async: !0 }, t), (t = $t.get(o)) && ms(e, t), s = a.createElement("script"), nt(s), st(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function oy(e, t) {
    bn.M(e, t);
    var a = ti;
    if (a && e) {
      var i = Ea(a).hoistableScripts, o = ai(e), s = i.get(o);
      s || (s = a.querySelector(Ii(o)), s || (e = _({ src: e, async: !0, type: "module" }, t), (t = $t.get(o)) && ms(e, t), s = a.createElement("script"), nt(s), st(s, "link", e), a.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function Um(e, t, a, i) {
    var o = (o = se.current) ? Eu(o) : null;
    if (!o) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ni(a.href), a = Ea(
          o
        ).hoistableStyles, i = a.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ni(a.href);
          var s = Ea(
            o
          ).hoistableStyles, m = s.get(e);
          if (m || (o = o.ownerDocument || o, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = o.querySelector(
            Fi(e)
          )) && !s._p && (m.instance = s, m.state.loading = 5), $t.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, $t.set(e, a), s || sy(
            o,
            e,
            a,
            m.state
          ))), t && i === null)
            throw Error(r(528, ""));
          return m;
        }
        if (t && i !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ai(a), a = Ea(
          o
        ).hoistableScripts, i = a.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function ni(e) {
    return 'href="' + Rt(e) + '"';
  }
  function Fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function km(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function sy(e, t, a, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), st(t, "link", a), nt(t), e.head.appendChild(t));
  }
  function ai(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function Ii(e) {
    return "script[async]" + e;
  }
  function Ym(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Rt(a.href) + '"]'
          );
          if (i)
            return t.instance = i, nt(i), i;
          var o = _({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), nt(i), st(i, "style", o), Au(i, a.precedence, e), t.instance = i;
        case "stylesheet":
          o = ni(a.href);
          var s = e.querySelector(
            Fi(o)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, nt(s), s;
          i = km(a), (o = $t.get(o)) && ds(i, o), s = (e.ownerDocument || e).createElement("link"), nt(s);
          var m = s;
          return m._p = new Promise(function(g, b) {
            m.onload = g, m.onerror = b;
          }), st(s, "link", i), t.state.loading |= 4, Au(s, a.precedence, e), t.instance = s;
        case "script":
          return s = ai(a.src), (o = e.querySelector(
            Ii(s)
          )) ? (t.instance = o, nt(o), o) : (i = a, (o = $t.get(s)) && (i = _({}, a), ms(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nt(o), st(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Au(i, a.precedence, e));
    return t.instance;
  }
  function Au(e, t, a) {
    for (var i = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, s = o, m = 0; m < i.length; m++) {
      var g = i[m];
      if (g.dataset.precedence === t) s = g;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function ds(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ms(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var wu = null;
  function Xm(e, t, a) {
    if (wu === null) {
      var i = /* @__PURE__ */ new Map(), o = wu = /* @__PURE__ */ new Map();
      o.set(a, i);
    } else
      o = wu, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
    if (i.has(e)) return i;
    for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
      var s = a[o];
      if (!(s[hi] || s[lt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var g = i.get(m);
        g ? g.push(s) : i.set(m, [s]);
      }
    }
    return i;
  }
  function Hm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function cy(e, t, a) {
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
  function Bm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function fy(e, t, a, i) {
    if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = ni(i.href), s = t.querySelector(
          Fi(o)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = xu.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = s, nt(s);
          return;
        }
        s = t.ownerDocument || t, i = km(i), (o = $t.get(o)) && ds(i, o), s = s.createElement("link"), nt(s);
        var m = s;
        m._p = new Promise(function(g, b) {
          m.onload = g, m.onerror = b;
        }), st(s, "link", i), a.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = xu.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var ps = 0;
  function dy(e, t) {
    return e.stylesheets && e.count === 0 && Cu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var i = setTimeout(function() {
        if (e.stylesheets && Cu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ps === 0 && (ps = 62500 * Gg());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Cu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > ps ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function xu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Cu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ou = null;
  function Cu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ou = /* @__PURE__ */ new Map(), t.forEach(my, e), Ou = null, xu.call(e));
  }
  function my(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ou.get(e);
      if (a) var i = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ou.set(e, a);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var m = o[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), i = m);
        }
        i && a.set(null, i);
      }
      o = t.instance, m = o.getAttribute("data-precedence"), s = a.get(m) || i, s === i && a.set(null, o), a.set(m, o), this.count++, i = xu.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var el = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function py(e, t, a, i, o, s, m, g, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = or(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = or(0), this.hiddenUpdates = or(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qm(e, t, a, i, o, s, m, g, b, O, D, k) {
    return e = new py(
      e,
      t,
      a,
      m,
      b,
      O,
      D,
      k,
      g
    ), t = 1, s === !0 && (t |= 24), s = xt(3, null, null, t), e.current = s, s.stateNode = e, t = Gr(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: a,
      cache: t
    }, Wr(s), e;
  }
  function $m(e) {
    return e ? (e = Za, e) : Za;
  }
  function Vm(e, t, a, i, o, s) {
    o = $m(o), i.context === null ? i.context = o : i.pendingContext = o, i = Cn(t), i.payload = { element: a }, s = s === void 0 ? null : s, s !== null && (i.callback = s), a = Mn(e, i, t), a !== null && (St(a, e, t), ji(a, e, t));
  }
  function Lm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function hs(e, t) {
    Lm(e, t), (e = e.alternate) && Lm(e, t);
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && St(t, e, 67108864), hs(e, 67108864);
    }
  }
  function Qm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jt();
      t = sr(t);
      var a = aa(e, t);
      a !== null && St(a, e, t), hs(e, t);
    }
  }
  var Mu = !0;
  function hy(e, t, a, i) {
    var o = j.T;
    j.T = null;
    var s = q.p;
    try {
      q.p = 2, vs(e, t, a, i);
    } finally {
      q.p = s, j.T = o;
    }
  }
  function vy(e, t, a, i) {
    var o = j.T;
    j.T = null;
    var s = q.p;
    try {
      q.p = 8, vs(e, t, a, i);
    } finally {
      q.p = s, j.T = o;
    }
  }
  function vs(e, t, a, i) {
    if (Mu) {
      var o = gs(i);
      if (o === null)
        ns(
          e,
          t,
          i,
          Nu,
          a
        ), Jm(e, i);
      else if (yy(
        o,
        e,
        t,
        a,
        i
      ))
        i.stopPropagation();
      else if (Jm(e, i), t & 4 && -1 < gy.indexOf(e)) {
        for (; o !== null; ) {
          var s = Ta(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = Fn(s.pendingLanes);
                  if (m !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var b = 1 << 31 - At(m);
                      g.entanglements[1] |= b, m &= ~b;
                    }
                    en(s), (we & 6) === 0 && (mu = Tt() + 500, Ki(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = aa(s, 2), g !== null && St(g, s, 2), hu(), hs(s, 2);
            }
          if (s = gs(i), s === null && ns(
            e,
            t,
            i,
            Nu,
            a
          ), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else
        ns(
          e,
          t,
          i,
          null,
          a
        );
    }
  }
  function gs(e) {
    return e = yr(e), ys(e);
  }
  var Nu = null;
  function ys(e) {
    if (Nu = null, e = za(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Nu = e, null;
  }
  function Km(e) {
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
        switch (nv()) {
          case tc:
            return 2;
          case nc:
            return 8;
          case _l:
          case av:
            return 32;
          case ac:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bs = !1, Bn = null, qn = null, $n = null, tl = /* @__PURE__ */ new Map(), nl = /* @__PURE__ */ new Map(), Vn = [], gy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        tl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nl.delete(t.pointerId);
    }
  }
  function al(e, t, a, i, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [o]
    }, t !== null && (t = Ta(t), t !== null && Gm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function yy(e, t, a, i, o) {
    switch (t) {
      case "focusin":
        return Bn = al(
          Bn,
          e,
          t,
          a,
          i,
          o
        ), !0;
      case "dragenter":
        return qn = al(
          qn,
          e,
          t,
          a,
          i,
          o
        ), !0;
      case "mouseover":
        return $n = al(
          $n,
          e,
          t,
          a,
          i,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return tl.set(
          s,
          al(
            tl.get(s) || null,
            e,
            t,
            a,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, nl.set(
          s,
          al(
            nl.get(s) || null,
            e,
            t,
            a,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Wm(e) {
    var t = za(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, sc(e.priority, function() {
              Qm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, sc(e.priority, function() {
              Qm(a);
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
  function ju(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = gs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var i = new a.constructor(
          a.type,
          a
        );
        gr = i, a.target.dispatchEvent(i), gr = null;
      } else
        return t = Ta(a), t !== null && Gm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Pm(e, t, a) {
    ju(e) && a.delete(t);
  }
  function by() {
    bs = !1, Bn !== null && ju(Bn) && (Bn = null), qn !== null && ju(qn) && (qn = null), $n !== null && ju($n) && ($n = null), tl.forEach(Pm), nl.forEach(Pm);
  }
  function Du(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bs || (bs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      by
    )));
  }
  var Zu = null;
  function Fm(e) {
    Zu !== e && (Zu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Zu === e && (Zu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (ys(i || a) === null)
              continue;
            break;
          }
          var s = Ta(a);
          s !== null && (e.splice(t, 3), t -= 3, go(
            s,
            {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            },
            i,
            o
          ));
        }
      }
    ));
  }
  function ii(e) {
    function t(b) {
      return Du(b, e);
    }
    Bn !== null && Du(Bn, e), qn !== null && Du(qn, e), $n !== null && Du($n, e), tl.forEach(t), nl.forEach(t);
    for (var a = 0; a < Vn.length; a++) {
      var i = Vn[a];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Vn.length && (a = Vn[0], a.blockedOn === null); )
      Wm(a), a.blockedOn === null && Vn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (i = 0; i < a.length; i += 3) {
        var o = a[i], s = a[i + 1], m = o[ht] || null;
        if (typeof s == "function")
          m || Fm(a);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, m = s[ht] || null)
              g = m.formAction;
            else if (ys(o) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? a[i + 1] = g : (a.splice(i, 3), i -= 3), Fm(a);
        }
      }
  }
  function Im() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return o = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), i || setTimeout(a, 20);
    }
    function a() {
      if (!i && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function _s(e) {
    this._internalRoot = e;
  }
  Ru.prototype.render = _s.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, i = jt();
    Vm(a, i, e, t, null, null);
  }, Ru.prototype.unmount = _s.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vm(e.current, 2, null, e, null, null), hu(), t[Sa] = null;
    }
  };
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = oc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Vn.length && t !== 0 && t < Vn[a].priority; a++) ;
      Vn.splice(a, 0, e), a === 0 && Wm(e);
    }
  };
  var ep = l.version;
  if (ep !== "19.2.8")
    throw Error(
      r(
        527,
        ep,
        "19.2.8"
      )
    );
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = h(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var _y = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uu.isDisabled && Uu.supportsFiber)
      try {
        di = Uu.inject(
          _y
        ), Et = Uu;
      } catch {
      }
  }
  return ll.createRoot = function(e, t) {
    if (!c(e)) throw Error(r(299));
    var a = !1, i = "", o = rd, s = od, m = sd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = qm(
      e,
      1,
      !1,
      null,
      null,
      a,
      i,
      null,
      o,
      s,
      m,
      Im
    ), e[Sa] = t.current, ts(e), new _s(t);
  }, ll.hydrateRoot = function(e, t, a) {
    if (!c(e)) throw Error(r(299));
    var i = !1, o = "", s = rd, m = od, g = sd, b = null;
    return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (m = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = qm(
      e,
      1,
      !0,
      t,
      a ?? null,
      i,
      o,
      b,
      s,
      m,
      g,
      Im
    ), t.context = $m(null), a = t.current, i = jt(), i = sr(i), o = Cn(i), o.callback = null, Mn(a, o, i), a = i, t.current.lanes = a, pi(t, a), en(t), e[Sa] = t.current, ts(e), new Ru(t);
  }, ll.version = "19.2.8", ll;
}
var cp;
function My() {
  if (cp) return zs.exports;
  cp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), zs.exports = Cy(), zs.exports;
}
var Ny = My();
const jy = /* @__PURE__ */ Wp(Ny);
var ne = Hs();
const Fu = /* @__PURE__ */ Wp(ne);
const Pp = (...n) => n.filter((l, u, r) => !!l && l.trim() !== "" && r.indexOf(l) === u).join(" ").trim();
const Dy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Zy = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, u, r) => r ? r.toUpperCase() : u.toLowerCase()
);
const fp = (n) => {
  const l = Zy(n);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var Ry = {
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
const Uy = (n) => {
  for (const l in n)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
};
const ky = ne.forwardRef(
  ({
    color: n = "currentColor",
    size: l = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => ne.createElement(
    "svg",
    {
      ref: v,
      ...Ry,
      width: l,
      height: l,
      stroke: n,
      strokeWidth: r ? Number(u) * 24 / Number(l) : u,
      className: Pp("lucide", c),
      ...!f && !Uy(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, y]) => ne.createElement(h, y)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const et = (n, l) => {
  const u = ne.forwardRef(
    ({ className: r, ...c }, f) => ne.createElement(ky, {
      ref: f,
      iconNode: l,
      className: Pp(
        `lucide-${Dy(fp(n))}`,
        `lucide-${n}`,
        r
      ),
      ...c
    })
  );
  return u.displayName = fp(n), u;
};
const Yy = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], dp = et("arrow-down", Yy);
const Xy = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], mp = et("arrow-up", Xy);
const Hy = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], By = et("battery", Hy);
const qy = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], $y = et("clock-3", qy);
const Vy = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], pp = et("house", Vy);
const Ly = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Gy = et("lock-open", Ly);
const Qy = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Ky = et("lock", Qy);
const Jy = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Wy = et("map-pin", Jy);
const Py = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Fy = et("pause", Py);
const Iy = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], e0 = et("play", Iy);
const t0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], hp = et("plus", t0);
const n0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], a0 = et("rotate-ccw", n0);
const i0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], l0 = et("scan-line", i0);
const u0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], r0 = et("square", u0);
const o0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], s0 = et("timer", o0);
const c0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], vp = et("trash-2", c0);
const f0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Fp = et("x", f0);
const d0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], m0 = et("zoom-in", d0);
const p0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], h0 = et("zoom-out", p0);
var gp;
function R(n, l, u) {
  function r(p, v) {
    if (p._zod || Object.defineProperty(p, "_zod", {
      value: {
        def: v,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), p._zod.traits.has(n))
      return;
    p._zod.traits.add(n), l(p, v);
    const h = d.prototype, y = Object.keys(h);
    for (let _ = 0; _ < y.length; _++) {
      const A = y[_];
      A in p || (p[A] = h[A].bind(p));
    }
  }
  const c = u?.Parent ?? Object;
  class f extends c {
  }
  Object.defineProperty(f, "name", { value: n });
  function d(p) {
    var v;
    const h = u?.Parent ? new f() : this;
    r(h, p), (v = h._zod).deferred ?? (v.deferred = []);
    for (const y of h._zod.deferred)
      y();
    return h;
  }
  return Object.defineProperty(d, "init", { value: r }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (p) => u?.Parent && p instanceof u.Parent ? !0 : p?._zod?.traits?.has(n)
  }), Object.defineProperty(d, "name", { value: n }), d;
}
class ri extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ip extends Error {
  constructor(l) {
    super(`Encountered unidirectional transform during encode: ${l}`), this.name = "ZodEncodeError";
  }
}
(gp = globalThis).__zod_globalConfig ?? (gp.__zod_globalConfig = {});
const Bs = globalThis.__zod_globalConfig;
function ya(n) {
  return Bs;
}
function eh(n) {
  const l = Object.values(n).filter((r) => typeof r == "number");
  return Object.entries(n).filter(([r, c]) => l.indexOf(+r) === -1).map(([r, c]) => c);
}
function Us(n, l) {
  return typeof l == "bigint" ? l.toString() : l;
}
function qs(n) {
  return {
    get value() {
      {
        const l = n();
        return Object.defineProperty(this, "value", { value: l }), l;
      }
    }
  };
}
function $s(n) {
  return n == null;
}
function Vs(n) {
  const l = n.startsWith("^") ? 1 : 0, u = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(l, u);
}
function v0(n, l) {
  const u = n / l, r = Math.round(u), c = Number.EPSILON * Math.max(Math.abs(u), 1);
  return Math.abs(u - r) < c ? 0 : u - r;
}
const yp = /* @__PURE__ */ Symbol("evaluating");
function je(n, l, u) {
  let r;
  Object.defineProperty(n, l, {
    get() {
      if (r !== yp)
        return r === void 0 && (r = yp, r = u()), r;
    },
    set(c) {
      Object.defineProperty(n, l, {
        value: c
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function _a(n, l, u) {
  Object.defineProperty(n, l, {
    value: u,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Kn(...n) {
  const l = {};
  for (const u of n) {
    const r = Object.getOwnPropertyDescriptors(u);
    Object.assign(l, r);
  }
  return Object.defineProperties({}, l);
}
function bp(n) {
  return JSON.stringify(n);
}
function g0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const th = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Lu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const y0 = /* @__PURE__ */ qs(() => {
  if (Bs.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function sl(n) {
  if (Lu(n) === !1)
    return !1;
  const l = n.constructor;
  if (l === void 0 || typeof l != "function")
    return !0;
  const u = l.prototype;
  return !(Lu(u) === !1 || Object.prototype.hasOwnProperty.call(u, "isPrototypeOf") === !1);
}
function nh(n) {
  return sl(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const b0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function oi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Jn(n, l, u) {
  const r = new n._zod.constr(l ?? n._zod.def);
  return (!l || u?.parent) && (r._zod.parent = n), r;
}
function I(n) {
  const l = n;
  if (!l)
    return {};
  if (typeof l == "string")
    return { error: () => l };
  if (l?.message !== void 0) {
    if (l?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    l.error = l.message;
  }
  return delete l.message, typeof l.error == "string" ? { ...l, error: () => l.error } : l;
}
function _0(n) {
  return Object.keys(n).filter((l) => n[l]._zod.optin === "optional" && n[l]._zod.optout === "optional");
}
const S0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function z0(n, l) {
  const u = n._zod.def, r = u.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = Kn(n._zod.def, {
    get shape() {
      const d = {};
      for (const p in l) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        l[p] && (d[p] = u.shape[p]);
      }
      return _a(this, "shape", d), d;
    },
    checks: []
  });
  return Jn(n, f);
}
function T0(n, l) {
  const u = n._zod.def, r = u.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = Kn(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape };
      for (const p in l) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        l[p] && delete d[p];
      }
      return _a(this, "shape", d), d;
    },
    checks: []
  });
  return Jn(n, f);
}
function E0(n, l) {
  if (!sl(l))
    throw new Error("Invalid input to extend: expected a plain object");
  const u = n._zod.def.checks;
  if (u && u.length > 0) {
    const f = n._zod.def.shape;
    for (const d in l)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = Kn(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape, ...l };
      return _a(this, "shape", f), f;
    }
  });
  return Jn(n, c);
}
function A0(n, l) {
  if (!sl(l))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const u = Kn(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...l };
      return _a(this, "shape", r), r;
    }
  });
  return Jn(n, u);
}
function w0(n, l) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const u = Kn(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...l._zod.def.shape };
      return _a(this, "shape", r), r;
    },
    get catchall() {
      return l._zod.def.catchall;
    },
    checks: l._zod.def.checks ?? []
  });
  return Jn(n, u);
}
function x0(n, l, u) {
  const c = l._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = Kn(l._zod.def, {
    get shape() {
      const p = l._zod.def.shape, v = { ...p };
      if (u)
        for (const h in u) {
          if (!(h in p))
            throw new Error(`Unrecognized key: "${h}"`);
          u[h] && (v[h] = n ? new n({
            type: "optional",
            innerType: p[h]
          }) : p[h]);
        }
      else
        for (const h in p)
          v[h] = n ? new n({
            type: "optional",
            innerType: p[h]
          }) : p[h];
      return _a(this, "shape", v), v;
    },
    checks: []
  });
  return Jn(l, d);
}
function O0(n, l, u) {
  const r = Kn(l._zod.def, {
    get shape() {
      const c = l._zod.def.shape, f = { ...c };
      if (u)
        for (const d in u) {
          if (!(d in f))
            throw new Error(`Unrecognized key: "${d}"`);
          u[d] && (f[d] = new n({
            type: "nonoptional",
            innerType: c[d]
          }));
        }
      else
        for (const d in c)
          f[d] = new n({
            type: "nonoptional",
            innerType: c[d]
          });
      return _a(this, "shape", f), f;
    }
  });
  return Jn(l, r);
}
function ui(n, l = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = l; u < n.issues.length; u++)
    if (n.issues[u]?.continue !== !0)
      return !0;
  return !1;
}
function C0(n, l = 0) {
  if (n.aborted === !0)
    return !0;
  for (let u = l; u < n.issues.length; u++)
    if (n.issues[u]?.continue === !1)
      return !0;
  return !1;
}
function ah(n, l) {
  return l.map((u) => {
    var r;
    return (r = u).path ?? (r.path = []), u.path.unshift(n), u;
  });
}
function ku(n) {
  return typeof n == "string" ? n : n?.message;
}
function ba(n, l, u) {
  const r = n.message ? n.message : ku(n.inst?._zod.def?.error?.(n)) ?? ku(l?.error?.(n)) ?? ku(u.customError?.(n)) ?? ku(u.localeError?.(n)) ?? "Invalid input", { inst: c, continue: f, input: d, ...p } = n;
  return p.path ?? (p.path = []), p.message = r, l?.reportInput && (p.input = d), p;
}
function Ls(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function cl(...n) {
  const [l, u, r] = n;
  return typeof l == "string" ? {
    message: l,
    code: "custom",
    input: u,
    inst: r
  } : { ...l };
}
const ih = (n, l) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: l,
    enumerable: !1
  }), n.message = JSON.stringify(l, Us, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, lh = R("$ZodError", ih), uh = R("$ZodError", ih, { Parent: Error });
function M0(n, l = (u) => u.message) {
  const u = {}, r = [];
  for (const c of n.issues)
    c.path.length > 0 ? (u[c.path[0]] = u[c.path[0]] || [], u[c.path[0]].push(l(c))) : r.push(l(c));
  return { formErrors: r, fieldErrors: u };
}
function N0(n, l = (u) => u.message) {
  const u = { _errors: [] }, r = (c, f = []) => {
    for (const d of c.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((p) => r({ issues: p }, [...f, ...d.path]));
      else if (d.code === "invalid_key")
        r({ issues: d.issues }, [...f, ...d.path]);
      else if (d.code === "invalid_element")
        r({ issues: d.issues }, [...f, ...d.path]);
      else {
        const p = [...f, ...d.path];
        if (p.length === 0)
          u._errors.push(l(d));
        else {
          let v = u, h = 0;
          for (; h < p.length; ) {
            const y = p[h];
            h === p.length - 1 ? (v[y] = v[y] || { _errors: [] }, v[y]._errors.push(l(d))) : v[y] = v[y] || { _errors: [] }, v = v[y], h++;
          }
        }
      }
  };
  return r(n), u;
}
const Gs = (n) => (l, u, r, c) => {
  const f = r ? { ...r, async: !1 } : { async: !1 }, d = l._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise)
    throw new ri();
  if (d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => ba(v, f, ya())));
    throw th(p, c?.callee), p;
  }
  return d.value;
}, Qs = (n) => async (l, u, r, c) => {
  const f = r ? { ...r, async: !0 } : { async: !0 };
  let d = l._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const p = new (c?.Err ?? n)(d.issues.map((v) => ba(v, f, ya())));
    throw th(p, c?.callee), p;
  }
  return d.value;
}, Iu = (n) => (l, u, r) => {
  const c = r ? { ...r, async: !1 } : { async: !1 }, f = l._zod.run({ value: u, issues: [] }, c);
  if (f instanceof Promise)
    throw new ri();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? lh)(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, j0 = /* @__PURE__ */ Iu(uh), er = (n) => async (l, u, r) => {
  const c = r ? { ...r, async: !0 } : { async: !0 };
  let f = l._zod.run({ value: u, issues: [] }, c);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, D0 = /* @__PURE__ */ er(uh), Z0 = (n) => (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Gs(n)(l, u, c);
}, R0 = (n) => (l, u, r) => Gs(n)(l, u, r), U0 = (n) => async (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Qs(n)(l, u, c);
}, k0 = (n) => async (l, u, r) => Qs(n)(l, u, r), Y0 = (n) => (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Iu(n)(l, u, c);
}, X0 = (n) => (l, u, r) => Iu(n)(l, u, r), H0 = (n) => async (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return er(n)(l, u, c);
}, B0 = (n) => async (l, u, r) => er(n)(l, u, r), q0 = /^[cC][0-9a-z]{6,}$/, $0 = /^[0-9a-z]+$/, V0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, L0 = /^[0-9a-vA-V]{20}$/, G0 = /^[A-Za-z0-9]{27}$/, Q0 = /^[a-zA-Z0-9_-]{21}$/, K0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, J0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, _p = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, W0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, P0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function F0() {
  return new RegExp(P0, "u");
}
const I0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, eb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, tb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, nb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ab = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, rh = /^[A-Za-z0-9_-]*$/, ib = /^https?$/, lb = /^\+[1-9]\d{6,14}$/, oh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ub = /* @__PURE__ */ new RegExp(`^${oh}$`);
function sh(n) {
  const l = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${l}` : n.precision === 0 ? `${l}:[0-5]\\d` : `${l}:[0-5]\\d\\.\\d{${n.precision}}` : `${l}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function rb(n) {
  return new RegExp(`^${sh(n)}$`);
}
function ob(n) {
  const l = sh({ precision: n.precision }), u = ["Z"];
  n.local && u.push(""), n.offset && u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${l}(?:${u.join("|")})`;
  return new RegExp(`^${oh}T(?:${r})$`);
}
const sb = (n) => {
  const l = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${l}$`);
}, cb = /^-?\d+$/, fb = /^-?\d+(?:\.\d+)?$/, db = /^(?:true|false)$/i, mb = /^[^A-Z]*$/, pb = /^[^a-z]*$/, zt = /* @__PURE__ */ R("$ZodCheck", (n, l) => {
  var u;
  n._zod ?? (n._zod = {}), n._zod.def = l, (u = n._zod).onattach ?? (u.onattach = []);
}), ch = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, fh = /* @__PURE__ */ R("$ZodCheckLessThan", (n, l) => {
  zt.init(n, l);
  const u = ch[typeof l.value];
  n._zod.onattach.push((r) => {
    const c = r._zod.bag, f = (l.inclusive ? c.maximum : c.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    l.value < f && (l.inclusive ? c.maximum = l.value : c.exclusiveMaximum = l.value);
  }), n._zod.check = (r) => {
    (l.inclusive ? r.value <= l.value : r.value < l.value) || r.issues.push({
      origin: u,
      code: "too_big",
      maximum: typeof l.value == "object" ? l.value.getTime() : l.value,
      input: r.value,
      inclusive: l.inclusive,
      inst: n,
      continue: !l.abort
    });
  };
}), dh = /* @__PURE__ */ R("$ZodCheckGreaterThan", (n, l) => {
  zt.init(n, l);
  const u = ch[typeof l.value];
  n._zod.onattach.push((r) => {
    const c = r._zod.bag, f = (l.inclusive ? c.minimum : c.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    l.value > f && (l.inclusive ? c.minimum = l.value : c.exclusiveMinimum = l.value);
  }), n._zod.check = (r) => {
    (l.inclusive ? r.value >= l.value : r.value > l.value) || r.issues.push({
      origin: u,
      code: "too_small",
      minimum: typeof l.value == "object" ? l.value.getTime() : l.value,
      input: r.value,
      inclusive: l.inclusive,
      inst: n,
      continue: !l.abort
    });
  };
}), hb = /* @__PURE__ */ R("$ZodCheckMultipleOf", (n, l) => {
  zt.init(n, l), n._zod.onattach.push((u) => {
    var r;
    (r = u._zod.bag).multipleOf ?? (r.multipleOf = l.value);
  }), n._zod.check = (u) => {
    if (typeof u.value != typeof l.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof u.value == "bigint" ? u.value % l.value === BigInt(0) : v0(u.value, l.value) === 0) || u.issues.push({
      origin: typeof u.value,
      code: "not_multiple_of",
      divisor: l.value,
      input: u.value,
      inst: n,
      continue: !l.abort
    });
  };
}), vb = /* @__PURE__ */ R("$ZodCheckNumberFormat", (n, l) => {
  zt.init(n, l), l.format = l.format || "float64";
  const u = l.format?.includes("int"), r = u ? "int" : "number", [c, f] = S0[l.format];
  n._zod.onattach.push((d) => {
    const p = d._zod.bag;
    p.format = l.format, p.minimum = c, p.maximum = f, u && (p.pattern = cb);
  }), n._zod.check = (d) => {
    const p = d.value;
    if (u) {
      if (!Number.isInteger(p)) {
        d.issues.push({
          expected: r,
          format: l.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? d.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !l.abort
        }) : d.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !l.abort
        });
        return;
      }
    }
    p < c && d.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: c,
      inclusive: !0,
      inst: n,
      continue: !l.abort
    }), p > f && d.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: f,
      inclusive: !0,
      inst: n,
      continue: !l.abort
    });
  };
}), gb = /* @__PURE__ */ R("$ZodCheckMaxLength", (n, l) => {
  var u;
  zt.init(n, l), (u = n._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const c = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    l.maximum < c && (r._zod.bag.maximum = l.maximum);
  }), n._zod.check = (r) => {
    const c = r.value;
    if (c.length <= l.maximum)
      return;
    const d = Ls(c);
    r.issues.push({
      origin: d,
      code: "too_big",
      maximum: l.maximum,
      inclusive: !0,
      input: c,
      inst: n,
      continue: !l.abort
    });
  };
}), yb = /* @__PURE__ */ R("$ZodCheckMinLength", (n, l) => {
  var u;
  zt.init(n, l), (u = n._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const c = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    l.minimum > c && (r._zod.bag.minimum = l.minimum);
  }), n._zod.check = (r) => {
    const c = r.value;
    if (c.length >= l.minimum)
      return;
    const d = Ls(c);
    r.issues.push({
      origin: d,
      code: "too_small",
      minimum: l.minimum,
      inclusive: !0,
      input: c,
      inst: n,
      continue: !l.abort
    });
  };
}), bb = /* @__PURE__ */ R("$ZodCheckLengthEquals", (n, l) => {
  var u;
  zt.init(n, l), (u = n._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.minimum = l.length, c.maximum = l.length, c.length = l.length;
  }), n._zod.check = (r) => {
    const c = r.value, f = c.length;
    if (f === l.length)
      return;
    const d = Ls(c), p = f > l.length;
    r.issues.push({
      origin: d,
      ...p ? { code: "too_big", maximum: l.length } : { code: "too_small", minimum: l.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: n,
      continue: !l.abort
    });
  };
}), tr = /* @__PURE__ */ R("$ZodCheckStringFormat", (n, l) => {
  var u, r;
  zt.init(n, l), n._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.format = l.format, l.pattern && (f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(l.pattern));
  }), l.pattern ? (u = n._zod).check ?? (u.check = (c) => {
    l.pattern.lastIndex = 0, !l.pattern.test(c.value) && c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: l.format,
      input: c.value,
      ...l.pattern ? { pattern: l.pattern.toString() } : {},
      inst: n,
      continue: !l.abort
    });
  }) : (r = n._zod).check ?? (r.check = () => {
  });
}), _b = /* @__PURE__ */ R("$ZodCheckRegex", (n, l) => {
  tr.init(n, l), n._zod.check = (u) => {
    l.pattern.lastIndex = 0, !l.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: u.value,
      pattern: l.pattern.toString(),
      inst: n,
      continue: !l.abort
    });
  };
}), Sb = /* @__PURE__ */ R("$ZodCheckLowerCase", (n, l) => {
  l.pattern ?? (l.pattern = mb), tr.init(n, l);
}), zb = /* @__PURE__ */ R("$ZodCheckUpperCase", (n, l) => {
  l.pattern ?? (l.pattern = pb), tr.init(n, l);
}), Tb = /* @__PURE__ */ R("$ZodCheckIncludes", (n, l) => {
  zt.init(n, l);
  const u = oi(l.includes), r = new RegExp(typeof l.position == "number" ? `^.{${l.position}}${u}` : u);
  l.pattern = r, n._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(r);
  }), n._zod.check = (c) => {
    c.value.includes(l.includes, l.position) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: l.includes,
      input: c.value,
      inst: n,
      continue: !l.abort
    });
  };
}), Eb = /* @__PURE__ */ R("$ZodCheckStartsWith", (n, l) => {
  zt.init(n, l);
  const u = new RegExp(`^${oi(l.prefix)}.*`);
  l.pattern ?? (l.pattern = u), n._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), n._zod.check = (r) => {
    r.value.startsWith(l.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: l.prefix,
      input: r.value,
      inst: n,
      continue: !l.abort
    });
  };
}), Ab = /* @__PURE__ */ R("$ZodCheckEndsWith", (n, l) => {
  zt.init(n, l);
  const u = new RegExp(`.*${oi(l.suffix)}$`);
  l.pattern ?? (l.pattern = u), n._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), n._zod.check = (r) => {
    r.value.endsWith(l.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: l.suffix,
      input: r.value,
      inst: n,
      continue: !l.abort
    });
  };
}), wb = /* @__PURE__ */ R("$ZodCheckOverwrite", (n, l) => {
  zt.init(n, l), n._zod.check = (u) => {
    u.value = l.tx(u.value);
  };
});
class xb {
  constructor(l = []) {
    this.content = [], this.indent = 0, this && (this.args = l);
  }
  indented(l) {
    this.indent += 1, l(this), this.indent -= 1;
  }
  write(l) {
    if (typeof l == "function") {
      l(this, { execution: "sync" }), l(this, { execution: "async" });
      return;
    }
    const r = l.split(`
`).filter((d) => d), c = Math.min(...r.map((d) => d.length - d.trimStart().length)), f = r.map((d) => d.slice(c)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of f)
      this.content.push(d);
  }
  compile() {
    const l = Function, u = this?.args, c = [...(this?.content ?? [""]).map((f) => `  ${f}`)];
    return new l(...u, c.join(`
`));
  }
}
const Ob = {
  major: 4,
  minor: 4,
  patch: 3
}, $e = /* @__PURE__ */ R("$ZodType", (n, l) => {
  var u;
  n ?? (n = {}), n._zod.def = l, n._zod.bag = n._zod.bag || {}, n._zod.version = Ob;
  const r = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && r.unshift(n);
  for (const c of r)
    for (const f of c._zod.onattach)
      f(n);
  if (r.length === 0)
    (u = n._zod).deferred ?? (u.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const c = (d, p, v) => {
      let h = ui(d), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (C0(d) || !_._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const A = d.issues.length, w = _._zod.check(d);
        if (w instanceof Promise && v?.async === !1)
          throw new ri();
        if (y || w instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await w, d.issues.length !== A && (h || (h = ui(d, A)));
          });
        else {
          if (d.issues.length === A)
            continue;
          h || (h = ui(d, A));
        }
      }
      return y ? y.then(() => d) : d;
    }, f = (d, p, v) => {
      if (ui(d))
        return d.aborted = !0, d;
      const h = c(p, r, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new ri();
        return h.then((y) => n._zod.parse(y, v));
      }
      return n._zod.parse(h, v);
    };
    n._zod.run = (d, p) => {
      if (p.skipChecks)
        return n._zod.parse(d, p);
      if (p.direction === "backward") {
        const h = n._zod.parse({ value: d.value, issues: [] }, { ...p, skipChecks: !0 });
        return h instanceof Promise ? h.then((y) => f(y, d, p)) : f(h, d, p);
      }
      const v = n._zod.parse(d, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new ri();
        return v.then((h) => c(h, r, p));
      }
      return c(v, r, p);
    };
  }
  je(n, "~standard", () => ({
    validate: (c) => {
      try {
        const f = j0(n, c);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return D0(n, c).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ks = /* @__PURE__ */ R("$ZodString", (n, l) => {
  $e.init(n, l), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? sb(n._zod.bag), n._zod.parse = (u, r) => {
    if (l.coerce)
      try {
        u.value = String(u.value);
      } catch {
      }
    return typeof u.value == "string" || u.issues.push({
      expected: "string",
      code: "invalid_type",
      input: u.value,
      inst: n
    }), u;
  };
}), Ye = /* @__PURE__ */ R("$ZodStringFormat", (n, l) => {
  tr.init(n, l), Ks.init(n, l);
}), Cb = /* @__PURE__ */ R("$ZodGUID", (n, l) => {
  l.pattern ?? (l.pattern = J0), Ye.init(n, l);
}), Mb = /* @__PURE__ */ R("$ZodUUID", (n, l) => {
  if (l.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[l.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${l.version}"`);
    l.pattern ?? (l.pattern = _p(r));
  } else
    l.pattern ?? (l.pattern = _p());
  Ye.init(n, l);
}), Nb = /* @__PURE__ */ R("$ZodEmail", (n, l) => {
  l.pattern ?? (l.pattern = W0), Ye.init(n, l);
}), jb = /* @__PURE__ */ R("$ZodURL", (n, l) => {
  Ye.init(n, l), n._zod.check = (u) => {
    try {
      const r = u.value.trim();
      if (!l.normalize && l.protocol?.source === ib.source && !/^https?:\/\//i.test(r)) {
        u.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: u.value,
          inst: n,
          continue: !l.abort
        });
        return;
      }
      const c = new URL(r);
      l.hostname && (l.hostname.lastIndex = 0, l.hostname.test(c.hostname) || u.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: l.hostname.source,
        input: u.value,
        inst: n,
        continue: !l.abort
      })), l.protocol && (l.protocol.lastIndex = 0, l.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || u.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: l.protocol.source,
        input: u.value,
        inst: n,
        continue: !l.abort
      })), l.normalize ? u.value = c.href : u.value = r;
      return;
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "url",
        input: u.value,
        inst: n,
        continue: !l.abort
      });
    }
  };
}), Db = /* @__PURE__ */ R("$ZodEmoji", (n, l) => {
  l.pattern ?? (l.pattern = F0()), Ye.init(n, l);
}), Zb = /* @__PURE__ */ R("$ZodNanoID", (n, l) => {
  l.pattern ?? (l.pattern = Q0), Ye.init(n, l);
}), Rb = /* @__PURE__ */ R("$ZodCUID", (n, l) => {
  l.pattern ?? (l.pattern = q0), Ye.init(n, l);
}), Ub = /* @__PURE__ */ R("$ZodCUID2", (n, l) => {
  l.pattern ?? (l.pattern = $0), Ye.init(n, l);
}), kb = /* @__PURE__ */ R("$ZodULID", (n, l) => {
  l.pattern ?? (l.pattern = V0), Ye.init(n, l);
}), Yb = /* @__PURE__ */ R("$ZodXID", (n, l) => {
  l.pattern ?? (l.pattern = L0), Ye.init(n, l);
}), Xb = /* @__PURE__ */ R("$ZodKSUID", (n, l) => {
  l.pattern ?? (l.pattern = G0), Ye.init(n, l);
}), Hb = /* @__PURE__ */ R("$ZodISODateTime", (n, l) => {
  l.pattern ?? (l.pattern = ob(l)), Ye.init(n, l);
}), Bb = /* @__PURE__ */ R("$ZodISODate", (n, l) => {
  l.pattern ?? (l.pattern = ub), Ye.init(n, l);
}), qb = /* @__PURE__ */ R("$ZodISOTime", (n, l) => {
  l.pattern ?? (l.pattern = rb(l)), Ye.init(n, l);
}), $b = /* @__PURE__ */ R("$ZodISODuration", (n, l) => {
  l.pattern ?? (l.pattern = K0), Ye.init(n, l);
}), Vb = /* @__PURE__ */ R("$ZodIPv4", (n, l) => {
  l.pattern ?? (l.pattern = I0), Ye.init(n, l), n._zod.bag.format = "ipv4";
}), Lb = /* @__PURE__ */ R("$ZodIPv6", (n, l) => {
  l.pattern ?? (l.pattern = eb), Ye.init(n, l), n._zod.bag.format = "ipv6", n._zod.check = (u) => {
    try {
      new URL(`http://[${u.value}]`);
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: u.value,
        inst: n,
        continue: !l.abort
      });
    }
  };
}), Gb = /* @__PURE__ */ R("$ZodCIDRv4", (n, l) => {
  l.pattern ?? (l.pattern = tb), Ye.init(n, l);
}), Qb = /* @__PURE__ */ R("$ZodCIDRv6", (n, l) => {
  l.pattern ?? (l.pattern = nb), Ye.init(n, l), n._zod.check = (u) => {
    const r = u.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [c, f] = r;
      if (!f)
        throw new Error();
      const d = Number(f);
      if (`${d}` !== f)
        throw new Error();
      if (d < 0 || d > 128)
        throw new Error();
      new URL(`http://[${c}]`);
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: u.value,
        inst: n,
        continue: !l.abort
      });
    }
  };
});
function mh(n) {
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
const Kb = /* @__PURE__ */ R("$ZodBase64", (n, l) => {
  l.pattern ?? (l.pattern = ab), Ye.init(n, l), n._zod.bag.contentEncoding = "base64", n._zod.check = (u) => {
    mh(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64",
      input: u.value,
      inst: n,
      continue: !l.abort
    });
  };
});
function Jb(n) {
  if (!rh.test(n))
    return !1;
  const l = n.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), u = l.padEnd(Math.ceil(l.length / 4) * 4, "=");
  return mh(u);
}
const Wb = /* @__PURE__ */ R("$ZodBase64URL", (n, l) => {
  l.pattern ?? (l.pattern = rh), Ye.init(n, l), n._zod.bag.contentEncoding = "base64url", n._zod.check = (u) => {
    Jb(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: u.value,
      inst: n,
      continue: !l.abort
    });
  };
}), Pb = /* @__PURE__ */ R("$ZodE164", (n, l) => {
  l.pattern ?? (l.pattern = lb), Ye.init(n, l);
});
function Fb(n, l = null) {
  try {
    const u = n.split(".");
    if (u.length !== 3)
      return !1;
    const [r] = u;
    if (!r)
      return !1;
    const c = JSON.parse(atob(r));
    return !("typ" in c && c?.typ !== "JWT" || !c.alg || l && (!("alg" in c) || c.alg !== l));
  } catch {
    return !1;
  }
}
const Ib = /* @__PURE__ */ R("$ZodJWT", (n, l) => {
  Ye.init(n, l), n._zod.check = (u) => {
    Fb(u.value, l.alg) || u.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: u.value,
      inst: n,
      continue: !l.abort
    });
  };
}), ph = /* @__PURE__ */ R("$ZodNumber", (n, l) => {
  $e.init(n, l), n._zod.pattern = n._zod.bag.pattern ?? fb, n._zod.parse = (u, r) => {
    if (l.coerce)
      try {
        u.value = Number(u.value);
      } catch {
      }
    const c = u.value;
    if (typeof c == "number" && !Number.isNaN(c) && Number.isFinite(c))
      return u;
    const f = typeof c == "number" ? Number.isNaN(c) ? "NaN" : Number.isFinite(c) ? void 0 : "Infinity" : void 0;
    return u.issues.push({
      expected: "number",
      code: "invalid_type",
      input: c,
      inst: n,
      ...f ? { received: f } : {}
    }), u;
  };
}), e_ = /* @__PURE__ */ R("$ZodNumberFormat", (n, l) => {
  vb.init(n, l), ph.init(n, l);
}), t_ = /* @__PURE__ */ R("$ZodBoolean", (n, l) => {
  $e.init(n, l), n._zod.pattern = db, n._zod.parse = (u, r) => {
    if (l.coerce)
      try {
        u.value = !!u.value;
      } catch {
      }
    const c = u.value;
    return typeof c == "boolean" || u.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: c,
      inst: n
    }), u;
  };
}), n_ = /* @__PURE__ */ R("$ZodUnknown", (n, l) => {
  $e.init(n, l), n._zod.parse = (u) => u;
}), a_ = /* @__PURE__ */ R("$ZodNever", (n, l) => {
  $e.init(n, l), n._zod.parse = (u, r) => (u.issues.push({
    expected: "never",
    code: "invalid_type",
    input: u.value,
    inst: n
  }), u);
});
function Sp(n, l, u) {
  n.issues.length && l.issues.push(...ah(u, n.issues)), l.value[u] = n.value;
}
const i_ = /* @__PURE__ */ R("$ZodArray", (n, l) => {
  $e.init(n, l), n._zod.parse = (u, r) => {
    const c = u.value;
    if (!Array.isArray(c))
      return u.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: n
      }), u;
    u.value = Array(c.length);
    const f = [];
    for (let d = 0; d < c.length; d++) {
      const p = c[d], v = l.element._zod.run({
        value: p,
        issues: []
      }, r);
      v instanceof Promise ? f.push(v.then((h) => Sp(h, u, d))) : Sp(v, u, d);
    }
    return f.length ? Promise.all(f).then(() => u) : u;
  };
});
function Gu(n, l, u, r, c, f) {
  const d = u in r;
  if (n.issues.length) {
    if (c && f && !d)
      return;
    l.issues.push(...ah(u, n.issues));
  }
  if (!d && !c) {
    n.issues.length || l.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [u]
    });
    return;
  }
  n.value === void 0 ? d && (l.value[u] = void 0) : l.value[u] = n.value;
}
function hh(n) {
  const l = Object.keys(n.shape);
  for (const r of l)
    if (!n.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const u = _0(n.shape);
  return {
    ...n,
    keys: l,
    keySet: new Set(l),
    numKeys: l.length,
    optionalKeys: new Set(u)
  };
}
function vh(n, l, u, r, c, f) {
  const d = [], p = c.keySet, v = c.catchall._zod, h = v.def.type, y = v.optin === "optional", _ = v.optout === "optional";
  for (const A in l) {
    if (A === "__proto__" || p.has(A))
      continue;
    if (h === "never") {
      d.push(A);
      continue;
    }
    const w = v.run({ value: l[A], issues: [] }, r);
    w instanceof Promise ? n.push(w.then((M) => Gu(M, u, A, l, y, _))) : Gu(w, u, A, l, y, _);
  }
  return d.length && u.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: l,
    inst: f
  }), n.length ? Promise.all(n).then(() => u) : u;
}
const l_ = /* @__PURE__ */ R("$ZodObject", (n, l) => {
  if ($e.init(n, l), !Object.getOwnPropertyDescriptor(l, "shape")?.get) {
    const p = l.shape;
    Object.defineProperty(l, "shape", {
      get: () => {
        const v = { ...p };
        return Object.defineProperty(l, "shape", {
          value: v
        }), v;
      }
    });
  }
  const r = qs(() => hh(l));
  je(n._zod, "propValues", () => {
    const p = l.shape, v = {};
    for (const h in p) {
      const y = p[h]._zod;
      if (y.values) {
        v[h] ?? (v[h] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          v[h].add(_);
      }
    }
    return v;
  });
  const c = Lu, f = l.catchall;
  let d;
  n._zod.parse = (p, v) => {
    d ?? (d = r.value);
    const h = p.value;
    if (!c(h))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: n
      }), p;
    p.value = {};
    const y = [], _ = d.shape;
    for (const A of d.keys) {
      const w = _[A], M = w._zod.optin === "optional", H = w._zod.optout === "optional", B = w._zod.run({ value: h[A], issues: [] }, v);
      B instanceof Promise ? y.push(B.then((V) => Gu(V, p, A, h, M, H))) : Gu(B, p, A, h, M, H);
    }
    return f ? vh(y, h, p, v, r.value, n) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), u_ = /* @__PURE__ */ R("$ZodObjectJIT", (n, l) => {
  l_.init(n, l);
  const u = n._zod.parse, r = qs(() => hh(l)), c = (A) => {
    const w = new xb(["shape", "payload", "ctx"]), M = r.value, H = ($) => {
      const X = bp($);
      return `shape[${X}]._zod.run({ value: input[${X}], issues: [] }, ctx)`;
    };
    w.write("const input = payload.value;");
    const B = /* @__PURE__ */ Object.create(null);
    let V = 0;
    for (const $ of M.keys)
      B[$] = `key_${V++}`;
    w.write("const newResult = {};");
    for (const $ of M.keys) {
      const X = B[$], G = bp($), ee = A[$], Q = ee?._zod?.optin === "optional", ue = ee?._zod?.optout === "optional";
      w.write(`const ${X} = ${H($)};`), Q && ue ? w.write(`
        if (${X}.issues.length) {
          if (${G} in input) {
            payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${G}, ...iss.path] : [${G}]
            })));
          }
        }
        
        if (${X}.value === undefined) {
          if (${G} in input) {
            newResult[${G}] = undefined;
          }
        } else {
          newResult[${G}] = ${X}.value;
        }
        
      `) : Q ? w.write(`
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${G}, ...iss.path] : [${G}]
          })));
        }
        
        if (${X}.value === undefined) {
          if (${G} in input) {
            newResult[${G}] = undefined;
          }
        } else {
          newResult[${G}] = ${X}.value;
        }
        
      `) : w.write(`
        const ${X}_present = ${G} in input;
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${G}, ...iss.path] : [${G}]
          })));
        }
        if (!${X}_present && !${X}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${G}]
          });
        }

        if (${X}_present) {
          if (${X}.value === undefined) {
            newResult[${G}] = undefined;
          } else {
            newResult[${G}] = ${X}.value;
          }
        }

      `);
    }
    w.write("payload.value = newResult;"), w.write("return payload;");
    const W = w.compile();
    return ($, X) => W(A, $, X);
  };
  let f;
  const d = Lu, p = !Bs.jitless, h = p && y0.value, y = l.catchall;
  let _;
  n._zod.parse = (A, w) => {
    _ ?? (_ = r.value);
    const M = A.value;
    return d(M) ? p && h && w?.async === !1 && w.jitless !== !0 ? (f || (f = c(l.shape)), A = f(A, w), y ? vh([], M, A, w, _, n) : A) : u(A, w) : (A.issues.push({
      expected: "object",
      code: "invalid_type",
      input: M,
      inst: n
    }), A);
  };
});
function zp(n, l, u, r) {
  for (const f of n)
    if (f.issues.length === 0)
      return l.value = f.value, l;
  const c = n.filter((f) => !ui(f));
  return c.length === 1 ? (l.value = c[0].value, c[0]) : (l.issues.push({
    code: "invalid_union",
    input: l.value,
    inst: u,
    errors: n.map((f) => f.issues.map((d) => ba(d, r, ya())))
  }), l);
}
const r_ = /* @__PURE__ */ R("$ZodUnion", (n, l) => {
  $e.init(n, l), je(n._zod, "optin", () => l.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), je(n._zod, "optout", () => l.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), je(n._zod, "values", () => {
    if (l.options.every((r) => r._zod.values))
      return new Set(l.options.flatMap((r) => Array.from(r._zod.values)));
  }), je(n._zod, "pattern", () => {
    if (l.options.every((r) => r._zod.pattern)) {
      const r = l.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${r.map((c) => Vs(c.source)).join("|")})$`);
    }
  });
  const u = l.options.length === 1 ? l.options[0]._zod.run : null;
  n._zod.parse = (r, c) => {
    if (u)
      return u(r, c);
    let f = !1;
    const d = [];
    for (const p of l.options) {
      const v = p._zod.run({
        value: r.value,
        issues: []
      }, c);
      if (v instanceof Promise)
        d.push(v), f = !0;
      else {
        if (v.issues.length === 0)
          return v;
        d.push(v);
      }
    }
    return f ? Promise.all(d).then((p) => zp(p, r, n, c)) : zp(d, r, n, c);
  };
}), o_ = /* @__PURE__ */ R("$ZodIntersection", (n, l) => {
  $e.init(n, l), n._zod.parse = (u, r) => {
    const c = u.value, f = l.left._zod.run({ value: c, issues: [] }, r), d = l.right._zod.run({ value: c, issues: [] }, r);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => Tp(u, v, h)) : Tp(u, f, d);
  };
});
function ks(n, l) {
  if (n === l)
    return { valid: !0, data: n };
  if (n instanceof Date && l instanceof Date && +n == +l)
    return { valid: !0, data: n };
  if (sl(n) && sl(l)) {
    const u = Object.keys(l), r = Object.keys(n).filter((f) => u.indexOf(f) !== -1), c = { ...n, ...l };
    for (const f of r) {
      const d = ks(n[f], l[f]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [f, ...d.mergeErrorPath]
        };
      c[f] = d.data;
    }
    return { valid: !0, data: c };
  }
  if (Array.isArray(n) && Array.isArray(l)) {
    if (n.length !== l.length)
      return { valid: !1, mergeErrorPath: [] };
    const u = [];
    for (let r = 0; r < n.length; r++) {
      const c = n[r], f = l[r], d = ks(c, f);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...d.mergeErrorPath]
        };
      u.push(d.data);
    }
    return { valid: !0, data: u };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Tp(n, l, u) {
  const r = /* @__PURE__ */ new Map();
  let c;
  for (const p of l.issues)
    if (p.code === "unrecognized_keys") {
      c ?? (c = p);
      for (const v of p.keys)
        r.has(v) || r.set(v, {}), r.get(v).l = !0;
    } else
      n.issues.push(p);
  for (const p of u.issues)
    if (p.code === "unrecognized_keys")
      for (const v of p.keys)
        r.has(v) || r.set(v, {}), r.get(v).r = !0;
    else
      n.issues.push(p);
  const f = [...r].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (f.length && c && n.issues.push({ ...c, keys: f }), ui(n))
    return n;
  const d = ks(l.value, u.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const s_ = /* @__PURE__ */ R("$ZodEnum", (n, l) => {
  $e.init(n, l);
  const u = eh(l.entries), r = new Set(u);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${u.filter((c) => b0.has(typeof c)).map((c) => typeof c == "string" ? oi(c) : c.toString()).join("|")})$`), n._zod.parse = (c, f) => {
    const d = c.value;
    return r.has(d) || c.issues.push({
      code: "invalid_value",
      values: u,
      input: d,
      inst: n
    }), c;
  };
}), c_ = /* @__PURE__ */ R("$ZodLiteral", (n, l) => {
  if ($e.init(n, l), l.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const u = new Set(l.values);
  n._zod.values = u, n._zod.pattern = new RegExp(`^(${l.values.map((r) => typeof r == "string" ? oi(r) : r ? oi(r.toString()) : String(r)).join("|")})$`), n._zod.parse = (r, c) => {
    const f = r.value;
    return u.has(f) || r.issues.push({
      code: "invalid_value",
      values: l.values,
      input: f,
      inst: n
    }), r;
  };
}), f_ = /* @__PURE__ */ R("$ZodTransform", (n, l) => {
  $e.init(n, l), n._zod.optin = "optional", n._zod.parse = (u, r) => {
    if (r.direction === "backward")
      throw new Ip(n.constructor.name);
    const c = l.transform(u.value, u);
    if (r.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((d) => (u.value = d, u.fallback = !0, u));
    if (c instanceof Promise)
      throw new ri();
    return u.value = c, u.fallback = !0, u;
  };
});
function Ep(n, l) {
  return l === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const gh = /* @__PURE__ */ R("$ZodOptional", (n, l) => {
  $e.init(n, l), n._zod.optin = "optional", n._zod.optout = "optional", je(n._zod, "values", () => l.innerType._zod.values ? /* @__PURE__ */ new Set([...l.innerType._zod.values, void 0]) : void 0), je(n._zod, "pattern", () => {
    const u = l.innerType._zod.pattern;
    return u ? new RegExp(`^(${Vs(u.source)})?$`) : void 0;
  }), n._zod.parse = (u, r) => {
    if (l.innerType._zod.optin === "optional") {
      const c = u.value, f = l.innerType._zod.run(u, r);
      return f instanceof Promise ? f.then((d) => Ep(d, c)) : Ep(f, c);
    }
    return u.value === void 0 ? u : l.innerType._zod.run(u, r);
  };
}), d_ = /* @__PURE__ */ R("$ZodExactOptional", (n, l) => {
  gh.init(n, l), je(n._zod, "values", () => l.innerType._zod.values), je(n._zod, "pattern", () => l.innerType._zod.pattern), n._zod.parse = (u, r) => l.innerType._zod.run(u, r);
}), m_ = /* @__PURE__ */ R("$ZodNullable", (n, l) => {
  $e.init(n, l), je(n._zod, "optin", () => l.innerType._zod.optin), je(n._zod, "optout", () => l.innerType._zod.optout), je(n._zod, "pattern", () => {
    const u = l.innerType._zod.pattern;
    return u ? new RegExp(`^(${Vs(u.source)}|null)$`) : void 0;
  }), je(n._zod, "values", () => l.innerType._zod.values ? /* @__PURE__ */ new Set([...l.innerType._zod.values, null]) : void 0), n._zod.parse = (u, r) => u.value === null ? u : l.innerType._zod.run(u, r);
}), p_ = /* @__PURE__ */ R("$ZodDefault", (n, l) => {
  $e.init(n, l), n._zod.optin = "optional", je(n._zod, "values", () => l.innerType._zod.values), n._zod.parse = (u, r) => {
    if (r.direction === "backward")
      return l.innerType._zod.run(u, r);
    if (u.value === void 0)
      return u.value = l.defaultValue, u;
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => Ap(f, l)) : Ap(c, l);
  };
});
function Ap(n, l) {
  return n.value === void 0 && (n.value = l.defaultValue), n;
}
const h_ = /* @__PURE__ */ R("$ZodPrefault", (n, l) => {
  $e.init(n, l), n._zod.optin = "optional", je(n._zod, "values", () => l.innerType._zod.values), n._zod.parse = (u, r) => (r.direction === "backward" || u.value === void 0 && (u.value = l.defaultValue), l.innerType._zod.run(u, r));
}), v_ = /* @__PURE__ */ R("$ZodNonOptional", (n, l) => {
  $e.init(n, l), je(n._zod, "values", () => {
    const u = l.innerType._zod.values;
    return u ? new Set([...u].filter((r) => r !== void 0)) : void 0;
  }), n._zod.parse = (u, r) => {
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => wp(f, n)) : wp(c, n);
  };
});
function wp(n, l) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: l
  }), n;
}
const g_ = /* @__PURE__ */ R("$ZodCatch", (n, l) => {
  $e.init(n, l), n._zod.optin = "optional", je(n._zod, "optout", () => l.innerType._zod.optout), je(n._zod, "values", () => l.innerType._zod.values), n._zod.parse = (u, r) => {
    if (r.direction === "backward")
      return l.innerType._zod.run(u, r);
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => (u.value = f.value, f.issues.length && (u.value = l.catchValue({
      ...u,
      error: {
        issues: f.issues.map((d) => ba(d, r, ya()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u)) : (u.value = c.value, c.issues.length && (u.value = l.catchValue({
      ...u,
      error: {
        issues: c.issues.map((f) => ba(f, r, ya()))
      },
      input: u.value
    }), u.issues = [], u.fallback = !0), u);
  };
}), y_ = /* @__PURE__ */ R("$ZodPipe", (n, l) => {
  $e.init(n, l), je(n._zod, "values", () => l.in._zod.values), je(n._zod, "optin", () => l.in._zod.optin), je(n._zod, "optout", () => l.out._zod.optout), je(n._zod, "propValues", () => l.in._zod.propValues), n._zod.parse = (u, r) => {
    if (r.direction === "backward") {
      const f = l.out._zod.run(u, r);
      return f instanceof Promise ? f.then((d) => Yu(d, l.in, r)) : Yu(f, l.in, r);
    }
    const c = l.in._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => Yu(f, l.out, r)) : Yu(c, l.out, r);
  };
});
function Yu(n, l, u) {
  return n.issues.length ? (n.aborted = !0, n) : l._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, u);
}
const b_ = /* @__PURE__ */ R("$ZodReadonly", (n, l) => {
  $e.init(n, l), je(n._zod, "propValues", () => l.innerType._zod.propValues), je(n._zod, "values", () => l.innerType._zod.values), je(n._zod, "optin", () => l.innerType?._zod?.optin), je(n._zod, "optout", () => l.innerType?._zod?.optout), n._zod.parse = (u, r) => {
    if (r.direction === "backward")
      return l.innerType._zod.run(u, r);
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then(xp) : xp(c);
  };
});
function xp(n) {
  return n.value = Object.freeze(n.value), n;
}
const __ = /* @__PURE__ */ R("$ZodCustom", (n, l) => {
  zt.init(n, l), $e.init(n, l), n._zod.parse = (u, r) => u, n._zod.check = (u) => {
    const r = u.value, c = l.fn(r);
    if (c instanceof Promise)
      return c.then((f) => Op(f, u, r, n));
    Op(c, u, r, n);
  };
});
function Op(n, l, u, r) {
  if (!n) {
    const c = {
      code: "custom",
      input: u,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (c.params = r._zod.def.params), l.issues.push(cl(c));
  }
}
var Cp;
class S_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(l, ...u) {
    const r = u[0];
    return this._map.set(l, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, l), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(l) {
    const u = this._map.get(l);
    return u && typeof u == "object" && "id" in u && this._idmap.delete(u.id), this._map.delete(l), this;
  }
  get(l) {
    const u = l._zod.parent;
    if (u) {
      const r = { ...this.get(u) ?? {} };
      delete r.id;
      const c = { ...r, ...this._map.get(l) };
      return Object.keys(c).length ? c : void 0;
    }
    return this._map.get(l);
  }
  has(l) {
    return this._map.has(l);
  }
}
function z_() {
  return new S_();
}
(Cp = globalThis).__zod_globalRegistry ?? (Cp.__zod_globalRegistry = z_());
const rl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function T_(n, l) {
  return new n({
    type: "string",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function E_(n, l) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Mp(n, l) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function A_(n, l) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function w_(n, l) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function x_(n, l) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function O_(n, l) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function C_(n, l) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function M_(n, l) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function N_(n, l) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function j_(n, l) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function D_(n, l) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Z_(n, l) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function R_(n, l) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function U_(n, l) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function k_(n, l) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Y_(n, l) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function X_(n, l) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function H_(n, l) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function B_(n, l) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function q_(n, l) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function $_(n, l) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function V_(n, l) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function L_(n, l) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function G_(n, l) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Q_(n, l) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function K_(n, l) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function J_(n, l) {
  return new n({
    type: "number",
    checks: [],
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function W_(n, l) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function P_(n, l) {
  return new n({
    type: "boolean",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function F_(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function I_(n, l) {
  return new n({
    type: "never",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Np(n, l) {
  return new fh({
    check: "less_than",
    ...I(l),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function xs(n, l) {
  return new fh({
    check: "less_than",
    ...I(l),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function jp(n, l) {
  return new dh({
    check: "greater_than",
    ...I(l),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Os(n, l) {
  return new dh({
    check: "greater_than",
    ...I(l),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Dp(n, l) {
  return new hb({
    check: "multiple_of",
    ...I(l),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function yh(n, l) {
  return new gb({
    check: "max_length",
    ...I(l),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Qu(n, l) {
  return new yb({
    check: "min_length",
    ...I(l),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function bh(n, l) {
  return new bb({
    check: "length_equals",
    ...I(l),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function e1(n, l) {
  return new _b({
    check: "string_format",
    format: "regex",
    ...I(l),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function t1(n) {
  return new Sb({
    check: "string_format",
    format: "lowercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function n1(n) {
  return new zb({
    check: "string_format",
    format: "uppercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function a1(n, l) {
  return new Tb({
    check: "string_format",
    format: "includes",
    ...I(l),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function i1(n, l) {
  return new Eb({
    check: "string_format",
    format: "starts_with",
    ...I(l),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function l1(n, l) {
  return new Ab({
    check: "string_format",
    format: "ends_with",
    ...I(l),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function ci(n) {
  return new wb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function u1(n) {
  return /* @__PURE__ */ ci((l) => l.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function r1() {
  return /* @__PURE__ */ ci((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function o1() {
  return /* @__PURE__ */ ci((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function s1() {
  return /* @__PURE__ */ ci((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function c1() {
  return /* @__PURE__ */ ci((n) => g0(n));
}
// @__NO_SIDE_EFFECTS__
function f1(n, l, u) {
  return new n({
    type: "array",
    element: l,
    // get element() {
    //   return element;
    // },
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function d1(n, l, u) {
  return new n({
    type: "custom",
    check: "custom",
    fn: l,
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function m1(n, l) {
  const u = /* @__PURE__ */ p1((r) => (r.addIssue = (c) => {
    if (typeof c == "string")
      r.issues.push(cl(c, r.value, u._zod.def));
    else {
      const f = c;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = r.value), f.inst ?? (f.inst = u), f.continue ?? (f.continue = !u._zod.def.abort), r.issues.push(cl(f));
    }
  }, n(r.value, r)), l);
  return u;
}
// @__NO_SIDE_EFFECTS__
function p1(n, l) {
  const u = new zt({
    check: "custom",
    ...I(l)
  });
  return u._zod.check = n, u;
}
function _h(n) {
  let l = n?.target ?? "draft-2020-12";
  return l === "draft-4" && (l = "draft-04"), l === "draft-7" && (l = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? rl,
    target: l,
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
function ct(n, l, u = { path: [], schemaPath: [] }) {
  var r;
  const c = n._zod.def, f = l.seen.get(n);
  if (f)
    return f.count++, u.schemaPath.includes(n) && (f.cycle = u.path), f.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: u.path };
  l.seen.set(n, d);
  const p = n._zod.toJSONSchema?.();
  if (p)
    d.schema = p;
  else {
    const y = {
      ...u,
      schemaPath: [...u.schemaPath, n],
      path: u.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(l, d.schema, y);
    else {
      const A = d.schema, w = l.processors[c.type];
      if (!w)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      w(n, l, A, y);
    }
    const _ = n._zod.parent;
    _ && (d.ref || (d.ref = _), ct(_, l, y), l.seen.get(_).isParent = !0);
  }
  const v = l.metadataRegistry.get(n);
  return v && Object.assign(d.schema, v), l.io === "input" && mt(n) && (delete d.schema.examples, delete d.schema.default), l.io === "input" && "_prefault" in d.schema && ((r = d.schema).default ?? (r.default = d.schema._prefault)), delete d.schema._prefault, l.seen.get(n).schema;
}
function Sh(n, l) {
  const u = n.seen.get(l);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const d of n.seen.entries()) {
    const p = n.metadataRegistry.get(d[0])?.id;
    if (p) {
      const v = r.get(p);
      if (v && v !== d[0])
        throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(p, d[0]);
    }
  }
  const c = (d) => {
    const p = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const _ = n.external.registry.get(d[0])?.id, A = n.external.uri ?? ((M) => M);
      if (_)
        return { ref: A(_) };
      const w = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = w, { defId: w, ref: `${A("__shared")}#/${p}/${w}` };
    }
    if (d[1] === u)
      return { ref: "#" };
    const h = `#/${p}/`, y = d[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: y, ref: h + y };
  }, f = (d) => {
    if (d[1].schema.$ref)
      return;
    const p = d[1], { ref: v, defId: h } = c(d);
    p.def = { ...p.schema }, h && (p.defId = h);
    const y = p.schema;
    for (const _ in y)
      delete y[_];
    y.$ref = v;
  };
  if (n.cycles === "throw")
    for (const d of n.seen.entries()) {
      const p = d[1];
      if (p.cycle)
        throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const d of n.seen.entries()) {
    const p = d[1];
    if (l === d[0]) {
      f(d);
      continue;
    }
    if (n.external) {
      const h = n.external.registry.get(d[0])?.id;
      if (l !== d[0] && h) {
        f(d);
        continue;
      }
    }
    if (n.metadataRegistry.get(d[0])?.id) {
      f(d);
      continue;
    }
    if (p.cycle) {
      f(d);
      continue;
    }
    if (p.count > 1 && n.reused === "ref") {
      f(d);
      continue;
    }
  }
}
function zh(n, l) {
  const u = n.seen.get(l);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (p) => {
    const v = n.seen.get(p);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, y = { ...h }, _ = v.ref;
    if (v.ref = null, _) {
      r(_);
      const w = n.seen.get(_), M = w.schema;
      if (M.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(M)) : Object.assign(h, M), Object.assign(h, y), p._zod.parent === _)
        for (const B in h)
          B === "$ref" || B === "allOf" || B in y || delete h[B];
      if (M.$ref && w.def)
        for (const B in h)
          B === "$ref" || B === "allOf" || B in w.def && JSON.stringify(h[B]) === JSON.stringify(w.def[B]) && delete h[B];
    }
    const A = p._zod.parent;
    if (A && A !== _) {
      r(A);
      const w = n.seen.get(A);
      if (w?.schema.$ref && (h.$ref = w.schema.$ref, w.def))
        for (const M in h)
          M === "$ref" || M === "allOf" || M in w.def && JSON.stringify(h[M]) === JSON.stringify(w.def[M]) && delete h[M];
    }
    n.override({
      zodSchema: p,
      jsonSchema: h,
      path: v.path ?? []
    });
  };
  for (const p of [...n.seen.entries()].reverse())
    r(p[0]);
  const c = {};
  if (n.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? c.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? c.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const p = n.external.registry.get(l)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    c.$id = n.external.uri(p);
  }
  Object.assign(c, u.def ?? u.schema);
  const f = n.metadataRegistry.get(l)?.id;
  f !== void 0 && c.id === f && delete c.id;
  const d = n.external?.defs ?? {};
  for (const p of n.seen.entries()) {
    const v = p[1];
    v.def && v.defId && (v.def.id === v.defId && delete v.def.id, d[v.defId] = v.def);
  }
  n.external || Object.keys(d).length > 0 && (n.target === "draft-2020-12" ? c.$defs = d : c.definitions = d);
  try {
    const p = JSON.parse(JSON.stringify(c));
    return Object.defineProperty(p, "~standard", {
      value: {
        ...l["~standard"],
        jsonSchema: {
          input: Ku(l, "input", n.processors),
          output: Ku(l, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function mt(n, l) {
  const u = l ?? { seen: /* @__PURE__ */ new Set() };
  if (u.seen.has(n))
    return !1;
  u.seen.add(n);
  const r = n._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return mt(r.element, u);
  if (r.type === "set")
    return mt(r.valueType, u);
  if (r.type === "lazy")
    return mt(r.getter(), u);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return mt(r.innerType, u);
  if (r.type === "intersection")
    return mt(r.left, u) || mt(r.right, u);
  if (r.type === "record" || r.type === "map")
    return mt(r.keyType, u) || mt(r.valueType, u);
  if (r.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : mt(r.in, u) || mt(r.out, u);
  if (r.type === "object") {
    for (const c in r.shape)
      if (mt(r.shape[c], u))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const c of r.options)
      if (mt(c, u))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const c of r.items)
      if (mt(c, u))
        return !0;
    return !!(r.rest && mt(r.rest, u));
  }
  return !1;
}
const h1 = (n, l = {}) => (u) => {
  const r = _h({ ...u, processors: l });
  return ct(n, r), Sh(r, n), zh(r, n);
}, Ku = (n, l, u = {}) => (r) => {
  const { libraryOptions: c, target: f } = r ?? {}, d = _h({ ...c ?? {}, target: f, io: l, processors: u });
  return ct(n, d), Sh(d, n), zh(d, n);
}, v1 = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, g1 = (n, l, u, r) => {
  const c = u;
  c.type = "string";
  const { minimum: f, maximum: d, format: p, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof f == "number" && (c.minLength = f), typeof d == "number" && (c.maxLength = d), p && (c.format = v1[p] ?? p, c.format === "" && delete c.format, p === "time" && delete c.format), h && (c.contentEncoding = h), v && v.size > 0) {
    const y = [...v];
    y.length === 1 ? c.pattern = y[0].source : y.length > 1 && (c.allOf = [
      ...y.map((_) => ({
        ...l.target === "draft-07" || l.target === "draft-04" || l.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: _.source
      }))
    ]);
  }
}, y1 = (n, l, u, r) => {
  const c = u, { minimum: f, maximum: d, format: p, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: y } = n._zod.bag;
  typeof p == "string" && p.includes("int") ? c.type = "integer" : c.type = "number";
  const _ = typeof y == "number" && y >= (f ?? Number.NEGATIVE_INFINITY), A = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), w = l.target === "draft-04" || l.target === "openapi-3.0";
  _ ? w ? (c.minimum = y, c.exclusiveMinimum = !0) : c.exclusiveMinimum = y : typeof f == "number" && (c.minimum = f), A ? w ? (c.maximum = h, c.exclusiveMaximum = !0) : c.exclusiveMaximum = h : typeof d == "number" && (c.maximum = d), typeof v == "number" && (c.multipleOf = v);
}, b1 = (n, l, u, r) => {
  u.type = "boolean";
}, _1 = (n, l, u, r) => {
  u.not = {};
}, S1 = (n, l, u, r) => {
}, z1 = (n, l, u, r) => {
  const c = n._zod.def, f = eh(c.entries);
  f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), u.enum = f;
}, T1 = (n, l, u, r) => {
  const c = n._zod.def, f = [];
  for (const d of c.values)
    if (d === void 0) {
      if (l.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof d == "bigint") {
      if (l.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      f.push(Number(d));
    } else
      f.push(d);
  if (f.length !== 0) if (f.length === 1) {
    const d = f[0];
    u.type = d === null ? "null" : typeof d, l.target === "draft-04" || l.target === "openapi-3.0" ? u.enum = [d] : u.const = d;
  } else
    f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), f.every((d) => typeof d == "boolean") && (u.type = "boolean"), f.every((d) => d === null) && (u.type = "null"), u.enum = f;
}, E1 = (n, l, u, r) => {
  if (l.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, A1 = (n, l, u, r) => {
  if (l.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, w1 = (n, l, u, r) => {
  const c = u, f = n._zod.def, { minimum: d, maximum: p } = n._zod.bag;
  typeof d == "number" && (c.minItems = d), typeof p == "number" && (c.maxItems = p), c.type = "array", c.items = ct(f.element, l, {
    ...r,
    path: [...r.path, "items"]
  });
}, x1 = (n, l, u, r) => {
  const c = u, f = n._zod.def;
  c.type = "object", c.properties = {};
  const d = f.shape;
  for (const h in d)
    c.properties[h] = ct(d[h], l, {
      ...r,
      path: [...r.path, "properties", h]
    });
  const p = new Set(Object.keys(d)), v = new Set([...p].filter((h) => {
    const y = f.shape[h]._zod;
    return l.io === "input" ? y.optin === void 0 : y.optout === void 0;
  }));
  v.size > 0 && (c.required = Array.from(v)), f.catchall?._zod.def.type === "never" ? c.additionalProperties = !1 : f.catchall ? f.catchall && (c.additionalProperties = ct(f.catchall, l, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : l.io === "output" && (c.additionalProperties = !1);
}, O1 = (n, l, u, r) => {
  const c = n._zod.def, f = c.inclusive === !1, d = c.options.map((p, v) => ct(p, l, {
    ...r,
    path: [...r.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? u.oneOf = d : u.anyOf = d;
}, C1 = (n, l, u, r) => {
  const c = n._zod.def, f = ct(c.left, l, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), d = ct(c.right, l, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), p = (h) => "allOf" in h && Object.keys(h).length === 1, v = [
    ...p(f) ? f.allOf : [f],
    ...p(d) ? d.allOf : [d]
  ];
  u.allOf = v;
}, M1 = (n, l, u, r) => {
  const c = n._zod.def, f = ct(c.innerType, l, r), d = l.seen.get(n);
  l.target === "openapi-3.0" ? (d.ref = c.innerType, u.nullable = !0) : u.anyOf = [f, { type: "null" }];
}, N1 = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType;
}, j1 = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType, u.default = JSON.parse(JSON.stringify(c.defaultValue));
}, D1 = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType, l.io === "input" && (u._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, Z1 = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType;
  let d;
  try {
    d = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  u.default = d;
}, R1 = (n, l, u, r) => {
  const c = n._zod.def, f = c.in._zod.traits.has("$ZodTransform"), d = l.io === "input" ? f ? c.out : c.in : c.out;
  ct(d, l, r);
  const p = l.seen.get(n);
  p.ref = d;
}, U1 = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType, u.readOnly = !0;
}, Th = (n, l, u, r) => {
  const c = n._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(n);
  f.ref = c.innerType;
}, k1 = /* @__PURE__ */ R("ZodISODateTime", (n, l) => {
  Hb.init(n, l), Xe.init(n, l);
});
function Y1(n) {
  return /* @__PURE__ */ L_(k1, n);
}
const X1 = /* @__PURE__ */ R("ZodISODate", (n, l) => {
  Bb.init(n, l), Xe.init(n, l);
});
function H1(n) {
  return /* @__PURE__ */ G_(X1, n);
}
const B1 = /* @__PURE__ */ R("ZodISOTime", (n, l) => {
  qb.init(n, l), Xe.init(n, l);
});
function q1(n) {
  return /* @__PURE__ */ Q_(B1, n);
}
const $1 = /* @__PURE__ */ R("ZodISODuration", (n, l) => {
  $b.init(n, l), Xe.init(n, l);
});
function V1(n) {
  return /* @__PURE__ */ K_($1, n);
}
const L1 = (n, l) => {
  lh.init(n, l), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (u) => N0(n, u)
      // enumerable: false,
    },
    flatten: {
      value: (u) => M0(n, u)
      // enumerable: false,
    },
    addIssue: {
      value: (u) => {
        n.issues.push(u), n.message = JSON.stringify(n.issues, Us, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (u) => {
        n.issues.push(...u), n.message = JSON.stringify(n.issues, Us, 2);
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
}, Lt = /* @__PURE__ */ R("ZodError", L1, {
  Parent: Error
}), G1 = /* @__PURE__ */ Gs(Lt), Q1 = /* @__PURE__ */ Qs(Lt), K1 = /* @__PURE__ */ Iu(Lt), J1 = /* @__PURE__ */ er(Lt), W1 = /* @__PURE__ */ Z0(Lt), P1 = /* @__PURE__ */ R0(Lt), F1 = /* @__PURE__ */ U0(Lt), I1 = /* @__PURE__ */ k0(Lt), eS = /* @__PURE__ */ Y0(Lt), tS = /* @__PURE__ */ X0(Lt), nS = /* @__PURE__ */ H0(Lt), aS = /* @__PURE__ */ B0(Lt), Zp = /* @__PURE__ */ new WeakMap();
function pl(n, l, u) {
  const r = Object.getPrototypeOf(n);
  let c = Zp.get(r);
  if (c || (c = /* @__PURE__ */ new Set(), Zp.set(r, c)), !c.has(l)) {
    c.add(l);
    for (const f in u) {
      const d = u[f];
      Object.defineProperty(r, f, {
        configurable: !0,
        enumerable: !1,
        get() {
          const p = d.bind(this);
          return Object.defineProperty(this, f, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: p
          }), p;
        },
        set(p) {
          Object.defineProperty(this, f, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: p
          });
        }
      });
    }
  }
}
const Ve = /* @__PURE__ */ R("ZodType", (n, l) => ($e.init(n, l), Object.assign(n["~standard"], {
  jsonSchema: {
    input: Ku(n, "input"),
    output: Ku(n, "output")
  }
}), n.toJSONSchema = h1(n, {}), n.def = l, n.type = l.type, Object.defineProperty(n, "_def", { value: l }), n.parse = (u, r) => G1(n, u, r, { callee: n.parse }), n.safeParse = (u, r) => K1(n, u, r), n.parseAsync = async (u, r) => Q1(n, u, r, { callee: n.parseAsync }), n.safeParseAsync = async (u, r) => J1(n, u, r), n.spa = n.safeParseAsync, n.encode = (u, r) => W1(n, u, r), n.decode = (u, r) => P1(n, u, r), n.encodeAsync = async (u, r) => F1(n, u, r), n.decodeAsync = async (u, r) => I1(n, u, r), n.safeEncode = (u, r) => eS(n, u, r), n.safeDecode = (u, r) => tS(n, u, r), n.safeEncodeAsync = async (u, r) => nS(n, u, r), n.safeDecodeAsync = async (u, r) => aS(n, u, r), pl(n, "ZodType", {
  check(...u) {
    const r = this.def;
    return this.clone(Kn(r, {
      checks: [
        ...r.checks ?? [],
        ...u.map((c) => typeof c == "function" ? { _zod: { check: c, def: { check: "custom" }, onattach: [] } } : c)
      ]
    }), { parent: !0 });
  },
  with(...u) {
    return this.check(...u);
  },
  clone(u, r) {
    return Jn(this, u, r);
  },
  brand() {
    return this;
  },
  register(u, r) {
    return u.add(this, r), this;
  },
  refine(u, r) {
    return this.check(FS(u, r));
  },
  superRefine(u, r) {
    return this.check(IS(u, r));
  },
  overwrite(u) {
    return this.check(/* @__PURE__ */ ci(u));
  },
  optional() {
    return Xp(this);
  },
  exactOptional() {
    return XS(this);
  },
  nullable() {
    return Hp(this);
  },
  nullish() {
    return Xp(Hp(this));
  },
  nonoptional(u) {
    return LS(this, u);
  },
  array() {
    return Ju(this);
  },
  or(u) {
    return jS([this, u]);
  },
  and(u) {
    return ZS(this, u);
  },
  transform(u) {
    return Bp(this, kS(u));
  },
  default(u) {
    return qS(this, u);
  },
  prefault(u) {
    return VS(this, u);
  },
  catch(u) {
    return QS(this, u);
  },
  pipe(u) {
    return Bp(this, u);
  },
  readonly() {
    return WS(this);
  },
  describe(u) {
    const r = this.clone();
    return rl.add(r, { description: u }), r;
  },
  meta(...u) {
    if (u.length === 0)
      return rl.get(this);
    const r = this.clone();
    return rl.add(r, u[0]), r;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(u) {
    return u(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return rl.get(n)?.description;
  },
  configurable: !0
}), n)), Eh = /* @__PURE__ */ R("_ZodString", (n, l) => {
  Ks.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (r, c, f) => g1(n, r, c);
  const u = n._zod.bag;
  n.format = u.format ?? null, n.minLength = u.minimum ?? null, n.maxLength = u.maximum ?? null, pl(n, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ e1(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ a1(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ i1(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ l1(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ Qu(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ yh(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ bh(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ Qu(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ t1(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ n1(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ r1());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ u1(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ o1());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ s1());
    },
    slugify() {
      return this.check(/* @__PURE__ */ c1());
    }
  });
}), iS = /* @__PURE__ */ R("ZodString", (n, l) => {
  Ks.init(n, l), Eh.init(n, l), n.email = (u) => n.check(/* @__PURE__ */ E_(lS, u)), n.url = (u) => n.check(/* @__PURE__ */ C_(uS, u)), n.jwt = (u) => n.check(/* @__PURE__ */ V_(SS, u)), n.emoji = (u) => n.check(/* @__PURE__ */ M_(rS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Mp(Rp, u)), n.uuid = (u) => n.check(/* @__PURE__ */ A_(Xu, u)), n.uuidv4 = (u) => n.check(/* @__PURE__ */ w_(Xu, u)), n.uuidv6 = (u) => n.check(/* @__PURE__ */ x_(Xu, u)), n.uuidv7 = (u) => n.check(/* @__PURE__ */ O_(Xu, u)), n.nanoid = (u) => n.check(/* @__PURE__ */ N_(oS, u)), n.guid = (u) => n.check(/* @__PURE__ */ Mp(Rp, u)), n.cuid = (u) => n.check(/* @__PURE__ */ j_(sS, u)), n.cuid2 = (u) => n.check(/* @__PURE__ */ D_(cS, u)), n.ulid = (u) => n.check(/* @__PURE__ */ Z_(fS, u)), n.base64 = (u) => n.check(/* @__PURE__ */ B_(yS, u)), n.base64url = (u) => n.check(/* @__PURE__ */ q_(bS, u)), n.xid = (u) => n.check(/* @__PURE__ */ R_(dS, u)), n.ksuid = (u) => n.check(/* @__PURE__ */ U_(mS, u)), n.ipv4 = (u) => n.check(/* @__PURE__ */ k_(pS, u)), n.ipv6 = (u) => n.check(/* @__PURE__ */ Y_(hS, u)), n.cidrv4 = (u) => n.check(/* @__PURE__ */ X_(vS, u)), n.cidrv6 = (u) => n.check(/* @__PURE__ */ H_(gS, u)), n.e164 = (u) => n.check(/* @__PURE__ */ $_(_S, u)), n.datetime = (u) => n.check(Y1(u)), n.date = (u) => n.check(H1(u)), n.time = (u) => n.check(q1(u)), n.duration = (u) => n.check(V1(u));
});
function pt(n) {
  return /* @__PURE__ */ T_(iS, n);
}
const Xe = /* @__PURE__ */ R("ZodStringFormat", (n, l) => {
  Ye.init(n, l), Eh.init(n, l);
}), lS = /* @__PURE__ */ R("ZodEmail", (n, l) => {
  Nb.init(n, l), Xe.init(n, l);
}), Rp = /* @__PURE__ */ R("ZodGUID", (n, l) => {
  Cb.init(n, l), Xe.init(n, l);
}), Xu = /* @__PURE__ */ R("ZodUUID", (n, l) => {
  Mb.init(n, l), Xe.init(n, l);
}), uS = /* @__PURE__ */ R("ZodURL", (n, l) => {
  jb.init(n, l), Xe.init(n, l);
}), rS = /* @__PURE__ */ R("ZodEmoji", (n, l) => {
  Db.init(n, l), Xe.init(n, l);
}), oS = /* @__PURE__ */ R("ZodNanoID", (n, l) => {
  Zb.init(n, l), Xe.init(n, l);
}), sS = /* @__PURE__ */ R("ZodCUID", (n, l) => {
  Rb.init(n, l), Xe.init(n, l);
}), cS = /* @__PURE__ */ R("ZodCUID2", (n, l) => {
  Ub.init(n, l), Xe.init(n, l);
}), fS = /* @__PURE__ */ R("ZodULID", (n, l) => {
  kb.init(n, l), Xe.init(n, l);
}), dS = /* @__PURE__ */ R("ZodXID", (n, l) => {
  Yb.init(n, l), Xe.init(n, l);
}), mS = /* @__PURE__ */ R("ZodKSUID", (n, l) => {
  Xb.init(n, l), Xe.init(n, l);
}), pS = /* @__PURE__ */ R("ZodIPv4", (n, l) => {
  Vb.init(n, l), Xe.init(n, l);
}), hS = /* @__PURE__ */ R("ZodIPv6", (n, l) => {
  Lb.init(n, l), Xe.init(n, l);
}), vS = /* @__PURE__ */ R("ZodCIDRv4", (n, l) => {
  Gb.init(n, l), Xe.init(n, l);
}), gS = /* @__PURE__ */ R("ZodCIDRv6", (n, l) => {
  Qb.init(n, l), Xe.init(n, l);
}), yS = /* @__PURE__ */ R("ZodBase64", (n, l) => {
  Kb.init(n, l), Xe.init(n, l);
}), bS = /* @__PURE__ */ R("ZodBase64URL", (n, l) => {
  Wb.init(n, l), Xe.init(n, l);
}), _S = /* @__PURE__ */ R("ZodE164", (n, l) => {
  Pb.init(n, l), Xe.init(n, l);
}), SS = /* @__PURE__ */ R("ZodJWT", (n, l) => {
  Ib.init(n, l), Xe.init(n, l);
}), Ah = /* @__PURE__ */ R("ZodNumber", (n, l) => {
  ph.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (r, c, f) => y1(n, r, c), pl(n, "ZodNumber", {
    gt(r, c) {
      return this.check(/* @__PURE__ */ jp(r, c));
    },
    gte(r, c) {
      return this.check(/* @__PURE__ */ Os(r, c));
    },
    min(r, c) {
      return this.check(/* @__PURE__ */ Os(r, c));
    },
    lt(r, c) {
      return this.check(/* @__PURE__ */ Np(r, c));
    },
    lte(r, c) {
      return this.check(/* @__PURE__ */ xs(r, c));
    },
    max(r, c) {
      return this.check(/* @__PURE__ */ xs(r, c));
    },
    int(r) {
      return this.check(Up(r));
    },
    safe(r) {
      return this.check(Up(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ jp(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ Os(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ Np(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ xs(0, r));
    },
    multipleOf(r, c) {
      return this.check(/* @__PURE__ */ Dp(r, c));
    },
    step(r, c) {
      return this.check(/* @__PURE__ */ Dp(r, c));
    },
    finite() {
      return this;
    }
  });
  const u = n._zod.bag;
  n.minValue = Math.max(u.minimum ?? Number.NEGATIVE_INFINITY, u.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(u.maximum ?? Number.POSITIVE_INFINITY, u.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (u.format ?? "").includes("int") || Number.isSafeInteger(u.multipleOf ?? 0.5), n.isFinite = !0, n.format = u.format ?? null;
});
function zS(n) {
  return /* @__PURE__ */ J_(Ah, n);
}
const TS = /* @__PURE__ */ R("ZodNumberFormat", (n, l) => {
  e_.init(n, l), Ah.init(n, l);
});
function Up(n) {
  return /* @__PURE__ */ W_(TS, n);
}
const ES = /* @__PURE__ */ R("ZodBoolean", (n, l) => {
  t_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => b1(n, u, r);
});
function AS(n) {
  return /* @__PURE__ */ P_(ES, n);
}
const wS = /* @__PURE__ */ R("ZodUnknown", (n, l) => {
  n_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => S1();
});
function kp() {
  return /* @__PURE__ */ F_(wS);
}
const xS = /* @__PURE__ */ R("ZodNever", (n, l) => {
  a_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => _1(n, u, r);
});
function OS(n) {
  return /* @__PURE__ */ I_(xS, n);
}
const CS = /* @__PURE__ */ R("ZodArray", (n, l) => {
  i_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => w1(n, u, r, c), n.element = l.element, pl(n, "ZodArray", {
    min(u, r) {
      return this.check(/* @__PURE__ */ Qu(u, r));
    },
    nonempty(u) {
      return this.check(/* @__PURE__ */ Qu(1, u));
    },
    max(u, r) {
      return this.check(/* @__PURE__ */ yh(u, r));
    },
    length(u, r) {
      return this.check(/* @__PURE__ */ bh(u, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Ju(n, l) {
  return /* @__PURE__ */ f1(CS, n, l);
}
const MS = /* @__PURE__ */ R("ZodObject", (n, l) => {
  u_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => x1(n, u, r, c), je(n, "shape", () => l.shape), pl(n, "ZodObject", {
    keyof() {
      return Wu(Object.keys(this._zod.def.shape));
    },
    catchall(u) {
      return this.clone({ ...this._zod.def, catchall: u });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: kp() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: kp() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: OS() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(u) {
      return E0(this, u);
    },
    safeExtend(u) {
      return A0(this, u);
    },
    merge(u) {
      return w0(this, u);
    },
    pick(u) {
      return z0(this, u);
    },
    omit(u) {
      return T0(this, u);
    },
    partial(...u) {
      return x0(wh, this, u[0]);
    },
    required(...u) {
      return O0(xh, this, u[0]);
    }
  });
});
function fl(n, l) {
  const u = {
    type: "object",
    shape: n ?? {},
    ...I(l)
  };
  return new MS(u);
}
const NS = /* @__PURE__ */ R("ZodUnion", (n, l) => {
  r_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => O1(n, u, r, c), n.options = l.options;
});
function jS(n, l) {
  return new NS({
    type: "union",
    options: n,
    ...I(l)
  });
}
const DS = /* @__PURE__ */ R("ZodIntersection", (n, l) => {
  o_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => C1(n, u, r, c);
});
function ZS(n, l) {
  return new DS({
    type: "intersection",
    left: n,
    right: l
  });
}
const Ys = /* @__PURE__ */ R("ZodEnum", (n, l) => {
  s_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (r, c, f) => z1(n, r, c), n.enum = l.entries, n.options = Object.values(l.entries);
  const u = new Set(Object.keys(l.entries));
  n.extract = (r, c) => {
    const f = {};
    for (const d of r)
      if (u.has(d))
        f[d] = l.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Ys({
      ...l,
      checks: [],
      ...I(c),
      entries: f
    });
  }, n.exclude = (r, c) => {
    const f = { ...l.entries };
    for (const d of r)
      if (u.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Ys({
      ...l,
      checks: [],
      ...I(c),
      entries: f
    });
  };
});
function Wu(n, l) {
  const u = Array.isArray(n) ? Object.fromEntries(n.map((r) => [r, r])) : n;
  return new Ys({
    type: "enum",
    entries: u,
    ...I(l)
  });
}
const RS = /* @__PURE__ */ R("ZodLiteral", (n, l) => {
  c_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => T1(n, u, r), n.values = new Set(l.values), Object.defineProperty(n, "value", {
    get() {
      if (l.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return l.values[0];
    }
  });
});
function Yp(n, l) {
  return new RS({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...I(l)
  });
}
const US = /* @__PURE__ */ R("ZodTransform", (n, l) => {
  f_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => A1(n, u), n._zod.parse = (u, r) => {
    if (r.direction === "backward")
      throw new Ip(n.constructor.name);
    u.addIssue = (f) => {
      if (typeof f == "string")
        u.issues.push(cl(f, u.value, l));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = u.value), d.inst ?? (d.inst = n), u.issues.push(cl(d));
      }
    };
    const c = l.transform(u.value, u);
    return c instanceof Promise ? c.then((f) => (u.value = f, u.fallback = !0, u)) : (u.value = c, u.fallback = !0, u);
  };
});
function kS(n) {
  return new US({
    type: "transform",
    transform: n
  });
}
const wh = /* @__PURE__ */ R("ZodOptional", (n, l) => {
  gh.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => Th(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function Xp(n) {
  return new wh({
    type: "optional",
    innerType: n
  });
}
const YS = /* @__PURE__ */ R("ZodExactOptional", (n, l) => {
  d_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => Th(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function XS(n) {
  return new YS({
    type: "optional",
    innerType: n
  });
}
const HS = /* @__PURE__ */ R("ZodNullable", (n, l) => {
  m_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => M1(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function Hp(n) {
  return new HS({
    type: "nullable",
    innerType: n
  });
}
const BS = /* @__PURE__ */ R("ZodDefault", (n, l) => {
  p_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => j1(n, u, r, c), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function qS(n, l) {
  return new BS({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof l == "function" ? l() : nh(l);
    }
  });
}
const $S = /* @__PURE__ */ R("ZodPrefault", (n, l) => {
  h_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => D1(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function VS(n, l) {
  return new $S({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof l == "function" ? l() : nh(l);
    }
  });
}
const xh = /* @__PURE__ */ R("ZodNonOptional", (n, l) => {
  v_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => N1(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function LS(n, l) {
  return new xh({
    type: "nonoptional",
    innerType: n,
    ...I(l)
  });
}
const GS = /* @__PURE__ */ R("ZodCatch", (n, l) => {
  g_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => Z1(n, u, r, c), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function QS(n, l) {
  return new GS({
    type: "catch",
    innerType: n,
    catchValue: typeof l == "function" ? l : () => l
  });
}
const KS = /* @__PURE__ */ R("ZodPipe", (n, l) => {
  y_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => R1(n, u, r, c), n.in = l.in, n.out = l.out;
});
function Bp(n, l) {
  return new KS({
    type: "pipe",
    in: n,
    out: l
    // ...util.normalizeParams(params),
  });
}
const JS = /* @__PURE__ */ R("ZodReadonly", (n, l) => {
  b_.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => U1(n, u, r, c), n.unwrap = () => n._zod.def.innerType;
});
function WS(n) {
  return new JS({
    type: "readonly",
    innerType: n
  });
}
const PS = /* @__PURE__ */ R("ZodCustom", (n, l) => {
  __.init(n, l), Ve.init(n, l), n._zod.processJSONSchema = (u, r, c) => E1(n, u);
});
function FS(n, l = {}) {
  return /* @__PURE__ */ d1(PS, n, l);
}
function IS(n, l) {
  return /* @__PURE__ */ m1(n, l);
}
const Js = pt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Dt = Js.optional(), e2 = fl({
  segment_id: zS().int().nonnegative(),
  area_id: pt().min(1).optional(),
  name: pt().min(1),
  icon: pt().optional(),
  include_in_floor_clean: AS().optional().default(!0)
}).passthrough(), t2 = fl({
  id: pt().min(1),
  name: pt().min(1),
  map_entity: Js,
  map_select_option: pt().min(1).optional(),
  rooms: Ju(e2).min(1)
}).passthrough(), n2 = fl({
  id: pt().min(1),
  name: pt().min(1),
  icon: pt().optional(),
  strategy: Wu(["custom", "smartplan"]),
  cleaning_type: Wu(["vacuum", "vacuum_and_mop"]).optional(),
  fan_speed: pt().optional(),
  mop_mode: pt().optional(),
  mop_intensity: pt().optional()
}).passthrough(), Oh = fl({
  type: Yp("custom:roborock-vacuum-map-card").optional(),
  entity: Js.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: pt().optional(),
  language: Wu(["en", "nl"]).optional().default("en"),
  entities: fl({
    map_select: Dt,
    cleaning_mode: Dt,
    mop_mode: Dt,
    mop_intensity: Dt,
    dock_mop_drying: Dt,
    dock_mop_drying_remaining_time: Dt,
    battery: Dt,
    current_room: Dt,
    cleaning_area: Dt,
    cleaning_time: Dt,
    cleaning_progress: Dt,
    status: Dt,
    error: Dt
  }).passthrough().optional().default({}),
  floors: Ju(t2).min(1),
  presets: Ju(n2).optional().default([]),
  default_preset: pt().optional().default("vacuum_only"),
  vacuum_mode_fallback: Yp("set_clean_motor_mode").optional()
}).passthrough().superRefine((n, l) => {
  n.floors.length > 1 && !n.entities.map_select && l.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" });
  const u = /* @__PURE__ */ new Set();
  for (const [c, f] of n.floors.entries()) {
    u.has(f.id) && l.addIssue({ code: "custom", path: ["floors", c, "id"], message: "Floor IDs must be unique" }), u.add(f.id);
    const d = /* @__PURE__ */ new Set();
    for (const [p, v] of f.rooms.entries())
      d.has(v.segment_id) && l.addIssue({
        code: "custom",
        path: ["floors", c, "rooms", p, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), d.add(v.segment_id);
  }
  const r = /* @__PURE__ */ new Set(["vacuum_only", "vacuum_and_mop", "smartplan"]);
  for (const [c, f] of n.presets.entries())
    r.has(f.id) && l.addIssue({ code: "custom", path: ["presets", c, "id"], message: "Preset IDs must be unique" }), r.add(f.id);
  n.default_preset && !r.has(n.default_preset) && l.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function a2(n) {
  return Oh.parse(n);
}
function i2(n) {
  const l = Oh.safeParse(n);
  return l.success ? [] : l.error.issues.map((u) => `${u.path.join(".") || "config"}: ${u.message}`);
}
function Ch() {
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
function Hu(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function l2(n) {
  const l = n?.attributes.calibration_points;
  return Array.isArray(l) ? l.flatMap((u) => {
    const r = u;
    return !Hu(r.vacuum?.x) || !Hu(r.vacuum?.y) || !Hu(r.map?.x) || !Hu(r.map?.y) ? [] : [r];
  }) : [];
}
function Mh(n) {
  const l = n?.attributes.rooms;
  return l ? (Array.isArray(l) ? l.map((r, c) => [String(c), r]) : typeof l == "object" ? Object.entries(l) : []).flatMap(([r, c]) => {
    if (!c || typeof c != "object") return [];
    const f = c, d = f.number ?? f.room_id ?? f.segment_id ?? r, p = Number(d), v = Number(f.x0), h = Number(f.y0), y = Number(f.x1), _ = Number(f.y1);
    return [p, v, h, y, _].every(Number.isFinite) ? [
      {
        segment_id: p,
        source_name: typeof f.name == "string" ? f.name : `Room ${p}`,
        x0: v,
        y0: h,
        x1: y,
        y1: _
      }
    ] : [];
  }) : [];
}
function ol(n, l, u) {
  if (u.length < 3) throw new Error("At least three calibration points are required");
  const [r, c, f] = u, d = c.vacuum.x - r.vacuum.x, p = c.vacuum.y - r.vacuum.y, v = f.vacuum.x - r.vacuum.x, h = f.vacuum.y - r.vacuum.y, y = d * h - p * v;
  if (y === 0) throw new Error("Calibration points are degenerate");
  const _ = n - r.vacuum.x, A = l - r.vacuum.y, w = (_ * h - A * v) / y, M = (d * A - p * _) / y;
  return {
    x: r.map.x + w * (c.map.x - r.map.x) + M * (f.map.x - r.map.x),
    y: r.map.y + w * (c.map.y - r.map.y) + M * (f.map.y - r.map.y)
  };
}
function u2(n, l) {
  return `${[
    ol(n.x0, n.y0, l),
    ol(n.x1, n.y0, l),
    ol(n.x1, n.y1, l),
    ol(n.x0, n.y1, l)
  ].map((r, c) => `${c === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function r2(n, l) {
  return ol((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, l);
}
function o2(n) {
  return new Map(n.rooms.map((l) => [l.segment_id, l]));
}
function Bu(n, l, u) {
  const r = [...n], [c] = r.splice(l, 1);
  return r.splice(u, 0, c), r;
}
function s2(n, l) {
  return Object.keys(n.states).filter((u) => u.startsWith(`${l}.`)).sort();
}
function Cs({
  hass: n,
  domain: l,
  value: u,
  optional: r,
  onChange: c
}) {
  return /* @__PURE__ */ S.jsxs("select", { value: u ?? "", onChange: (f) => c(f.target.value || void 0), children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: r ? "Not configured" : `Select ${l}` }),
    s2(n, l).map((f) => /* @__PURE__ */ S.jsx("option", { children: f }, f))
  ] });
}
function c2({
  areas: n,
  value: l,
  onChange: u
}) {
  const r = ne.useRef(null), [c, f] = ne.useState(() => !!customElements.get("ha-area-picker"));
  return ne.useEffect(() => {
    c || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [c]), ne.useEffect(() => {
    const d = r.current;
    if (!d) return;
    d.value = l, d.noAdd = !0;
    const p = (v) => u(v.detail.value || void 0);
    return d.addEventListener("value-changed", p), () => d.removeEventListener("value-changed", p);
  }, [c, u, l]), c ? /* @__PURE__ */ S.jsx("ha-area-picker", { ref: r, value: l ?? "", "no-add": !0 }) : /* @__PURE__ */ S.jsxs("select", { value: l ?? "", onChange: (d) => u(d.target.value || void 0), children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: "Unmapped" }),
    n.map((d) => /* @__PURE__ */ S.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    l && !n.some((d) => d.area_id === l) && /* @__PURE__ */ S.jsx("option", { value: l, children: l })
  ] });
}
function f2({ hass: n, config: l, onChange: u }) {
  const r = i2(l), c = (p, v) => {
    const h = [...l.floors];
    h[p] = v, u({ ...l, floors: h });
  }, f = l.entities?.map_select ? n.states[l.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(n.areas ?? {}).sort((p, v) => p.name.localeCompare(v.name));
  return /* @__PURE__ */ S.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ S.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    r.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "editor-errors", role: "alert", children: r.map((p) => /* @__PURE__ */ S.jsx("div", { children: p }, p)) }),
    /* @__PURE__ */ S.jsxs("section", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ S.jsx("input", { value: l.name ?? "", placeholder: "Use vacuum name", onChange: (p) => u({ ...l, name: p.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ S.jsxs("select", { value: l.language ?? "en", onChange: (p) => u({ ...l, language: p.target.value }), children: [
          /* @__PURE__ */ S.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ S.jsx("option", { value: "nl", children: "Nederlands" })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ S.jsx(Cs, { hass: n, domain: "vacuum", value: l.entity, onChange: (p) => p && u({ ...l, entity: p }) })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("section", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["mop_mode", "select", "Mop mode"],
        ["mop_intensity", "select", "Mop intensity"],
        ["dock_mop_drying", "binary_sensor", "Dock mop drying"],
        ["dock_mop_drying_remaining_time", "sensor", "Dock mop drying remaining time"],
        ["battery", "sensor", "Battery"],
        ["current_room", "sensor", "Current room"],
        ["cleaning_area", "sensor", "Cleaning area"],
        ["cleaning_time", "sensor", "Cleaning time"],
        ["cleaning_progress", "sensor", "Cleaning progress"],
        ["status", "sensor", "Status"],
        ["error", "sensor", "Error"]
      ].map(([p, v, h]) => /* @__PURE__ */ S.jsxs("label", { children: [
        h,
        /* @__PURE__ */ S.jsx(Cs, { hass: n, domain: v, optional: !0, value: l.entities?.[p], onChange: (y) => u({ ...l, entities: { ...l.entities, [p]: y } }) })
      ] }, p)),
      /* @__PURE__ */ S.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: l.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (p) => u({ ...l, vacuum_mode_fallback: p.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("section", { children: [
      /* @__PURE__ */ S.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ S.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => u({ ...l, floors: [...l.floors, { id: `floor_${l.floors.length + 1}`, name: `Floor ${l.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ S.jsx(hp, {}),
          " Add floor"
        ] })
      ] }),
      l.floors.map((p, v) => /* @__PURE__ */ S.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ S.jsx("strong", { children: p.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ S.jsxs("div", { children: [
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => u({ ...l, floors: Bu(l.floors, v, v - 1) }), children: /* @__PURE__ */ S.jsx(mp, {}) }),
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === l.floors.length - 1, onClick: () => u({ ...l, floors: Bu(l.floors, v, v + 1) }), children: /* @__PURE__ */ S.jsx(dp, {}) }),
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: l.floors.length === 1, onClick: () => u({ ...l, floors: l.floors.filter((h, y) => y !== v) }), children: /* @__PURE__ */ S.jsx(vp, {}) })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ S.jsx("input", { value: p.id, onChange: (h) => c(v, { ...p, id: h.target.value }) })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ S.jsx("input", { value: p.name, onChange: (h) => c(v, { ...p, name: h.target.value }) })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ S.jsx(Cs, { hass: n, domain: "image", value: p.map_entity, onChange: (h) => {
              if (!h) return;
              const y = Mh(n.states[h]), _ = new Map(p.rooms.map((w) => [w.segment_id, w])), A = y.map((w) => ({
                ..._.get(w.segment_id),
                segment_id: w.segment_id,
                name: _.get(w.segment_id)?.name ?? w.source_name,
                include_in_floor_clean: _.get(w.segment_id)?.include_in_floor_clean ?? !0
              }));
              c(v, { ...p, map_entity: h, rooms: A });
            } })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ S.jsxs("select", { value: p.map_select_option ?? "", onChange: (h) => c(v, { ...p, map_select_option: h.target.value || void 0 }), children: [
              /* @__PURE__ */ S.jsx("option", { value: "", children: "Not configured" }),
              f.map((h) => /* @__PURE__ */ S.jsx("option", { children: h }, h))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsx("h4", { children: "Discovered rooms" }),
        p.rooms.length === 0 ? /* @__PURE__ */ S.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ S.jsx("div", { className: "room-editor-list", children: p.rooms.map((h, y) => /* @__PURE__ */ S.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ S.jsxs("strong", { children: [
            "Segment ",
            h.segment_id
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ S.jsx("input", { value: h.name, onChange: (_) => {
              const A = [...p.rooms];
              A[y] = { ...h, name: _.target.value }, c(v, { ...p, rooms: A });
            } })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ S.jsx(c2, { areas: d, value: h.area_id, onChange: (_) => {
              const A = [...p.rooms];
              A[y] = { ...h, area_id: _ }, c(v, { ...p, rooms: A });
            } })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ S.jsx("input", { value: h.icon ?? "", placeholder: "mdi:floor-plan", onChange: (_) => {
              const A = [...p.rooms];
              A[y] = { ...h, icon: _.target.value || void 0 }, c(v, { ...p, rooms: A });
            } })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: h.include_in_floor_clean !== !1, onChange: (_) => {
              const A = [...p.rooms];
              A[y] = { ...h, include_in_floor_clean: _.target.checked }, c(v, { ...p, rooms: A });
            } }),
            " Include in Entire floor"
          ] })
        ] }, h.segment_id)) })
      ] }, `${p.id}-${v}`))
    ] }),
    /* @__PURE__ */ S.jsxs("section", { children: [
      /* @__PURE__ */ S.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ S.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => {
          const p = { id: `preset_${(l.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop" };
          u({ ...l, presets: [...l.presets ?? [], p] });
        }, children: [
          /* @__PURE__ */ S.jsx(hp, {}),
          " Add preset"
        ] })
      ] }),
      (l.presets ?? []).map((p, v) => /* @__PURE__ */ S.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ S.jsx("strong", { children: p.name }),
          /* @__PURE__ */ S.jsxs("div", { children: [
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => u({ ...l, presets: Bu(l.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ S.jsx(mp, {}) }),
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (l.presets?.length ?? 0) - 1, onClick: () => u({ ...l, presets: Bu(l.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ S.jsx(dp, {}) }),
            /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => u({ ...l, presets: (l.presets ?? []).filter((h, y) => y !== v) }), children: /* @__PURE__ */ S.jsx(vp, {}) })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((h) => /* @__PURE__ */ S.jsxs("label", { children: [
            h.replaceAll("_", " "),
            /* @__PURE__ */ S.jsx("input", { value: p[h] ?? "", onChange: (y) => {
              const _ = [...l.presets ?? []];
              _[v] = { ...p, [h]: y.target.value || void 0 }, u({ ...l, presets: _ });
            } })
          ] }, h)),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ S.jsxs("select", { value: p.strategy, onChange: (h) => {
              const y = [...l.presets ?? []];
              y[v] = { ...p, strategy: h.target.value }, u({ ...l, presets: y });
            }, children: [
              /* @__PURE__ */ S.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ S.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ S.jsxs("select", { value: p.cleaning_type ?? "vacuum_and_mop", onChange: (h) => {
              const y = [...l.presets ?? []];
              y[v] = { ...p, cleaning_type: h.target.value }, u({ ...l, presets: y });
            }, children: [
              /* @__PURE__ */ S.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ S.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" })
            ] })
          ] })
        ] })
      ] }, `${p.id}-${v}`)),
      /* @__PURE__ */ S.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ S.jsxs("select", { value: l.default_preset ?? "vacuum_only", onChange: (p) => u({ ...l, default_preset: p.target.value }), children: [
          /* @__PURE__ */ S.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          /* @__PURE__ */ S.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ S.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          (l.presets ?? []).map((p) => /* @__PURE__ */ S.jsx("option", { value: p.id, children: p.name }, p.id))
        ] })
      ] })
    ] })
  ] });
}
const qu = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function $u(n, l) {
  if (!l) return [];
  const u = n.states[l];
  return !u || u.state === "unavailable" ? [] : Array.isArray(u.attributes.options) ? u.attributes.options.map(String) : [];
}
function d2(n, l) {
  const u = n.states[l.entity], r = Number(u?.attributes.supported_features ?? 0), c = Array.isArray(u?.attributes.fan_speed_list) ? u.attributes.fan_speed_list.map(String) : [], f = $u(n, l.entities?.map_select), d = $u(n, l.entities?.cleaning_mode), p = $u(n, l.entities?.mop_mode), v = $u(n, l.entities?.mop_intensity);
  return {
    fanSpeeds: c,
    mapOptions: f,
    cleaningModes: d,
    mopModes: p,
    mopIntensities: v,
    canStart: !!(r & qu.start),
    canPause: !!(r & qu.pause),
    canStop: !!(r & qu.stop),
    canDock: !!(r & qu.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: p.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function Nh(n, l) {
  if (!l) return !1;
  const u = n.states[l]?.state;
  return !!(u && u !== "unavailable" && u !== "unknown");
}
function m2(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function p2(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const h2 = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class Fe extends Error {
  constructor(l, u, r) {
    super(u, r), this.operation = l, this.name = "JobExecutionError";
  }
  operation;
}
async function v2(n, l, u, r, c, f) {
  const d = Date.now();
  for (; Date.now() - d < r; ) {
    if (n().states[l]?.state === u) return;
    await f(c);
  }
  throw new Fe("wait_for_state", `${l} did not become “${u}” within ${r / 1e3}s`);
}
function g2(n, l, u, r) {
  const c = n.states[l];
  if (!Nh(n, l)) throw new Fe(r, `${l} is unavailable`);
  if (!(Array.isArray(c.attributes.options) ? c.attributes.options.map(String) : []).includes(u)) throw new Fe(r, `${l} does not support “${u}”`);
}
async function li(n, l, u, r, c, f, d) {
  const p = n();
  if (g2(p, l, u, r), p.states[l]?.state !== u)
    try {
      await p.callService("select", "select_option", { option: u }, { entity_id: l }), await v2(n, l, u, c, f, d);
    } catch (v) {
      throw v instanceof Fe ? new Fe(r, v.message, { cause: v }) : new Fe(r, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function y2(n, l) {
  const u = {
    fan_power: 102,
    water_box_mode: 200
  };
  l.entities?.mop_mode && (u.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [u] },
      { entity_id: l.entity }
    );
  } catch (r) {
    throw new Fe("set_cleaning_mode", r instanceof Error ? r.message : String(r), { cause: r });
  }
}
async function b2({
  getHass: n,
  config: l,
  floor: u,
  rooms: r,
  draft: c,
  timeoutMs: f = 1e4,
  pollMs: d = 150,
  sleep: p = (v) => new Promise((h) => setTimeout(h, v))
}) {
  const v = n(), h = v.states[l.entity];
  if (!h || h.state === "unavailable") throw new Fe("preflight", `${l.entity} is unavailable`);
  if (m2(h.state)) throw new Fe("preflight", `Vacuum is ${h.state}`);
  const y = l.entities?.error ? v.states[l.entities.error] : void 0;
  if (y && !["none", "unknown", "unavailable", ""].includes(y.state))
    throw new Fe("preflight", `Vacuum error: ${y.state}`);
  const _ = [...new Set(r.map((w) => w.area_id).filter((w) => !!w))];
  if (_.length === 0) throw new Fe("preflight", "Select at least one room mapped to a Home Assistant area");
  const A = l.entities?.map_select;
  if (l.floors.length > 1) {
    if (!A || !u.map_select_option) throw new Fe("select_floor", "This floor has no map selector mapping");
    await li(n, A, u.map_select_option, "select_floor", f, d, p);
  }
  if (c.strategy === "smartplan") {
    const w = l.entities?.mop_mode;
    if (!w) throw new Fe("set_smartplan", "SmartPlan requires a mop-mode entity");
    await li(n, w, "smart_mode", "set_smartplan", f, d, p);
  } else {
    const w = l.entities?.cleaning_mode;
    if (w && Nh(n(), w)) {
      const H = c.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop";
      await li(n, w, H, "set_cleaning_mode", f, d, p);
    } else if (c.cleaning_type === "vacuum" && l.vacuum_mode_fallback === "set_clean_motor_mode")
      await y2(n(), l);
    else if (c.cleaning_type === "vacuum")
      throw new Fe("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const M = l.entities?.mop_mode;
    if (c.mop_mode) {
      if (!M) throw new Fe("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[M]?.state === "smart_mode" && h2.has(c.mop_mode) && await li(n, M, "custom", "leave_smartplan", f, d, p), await li(n, M, c.mop_mode, "set_mop_mode", f, d, p);
    }
    if (c.cleaning_type !== "vacuum" && c.mop_intensity) {
      const H = l.entities?.mop_intensity;
      if (!H) throw new Fe("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await li(n, H, c.mop_intensity, "set_mop_intensity", f, d, p);
    }
    if (c.fan_speed) {
      const H = n(), B = H.states[l.entity]?.attributes.fan_speed_list;
      if (!(Array.isArray(B) ? B.map(String) : []).includes(c.fan_speed))
        throw new Fe("set_fan_speed", `${l.entity} does not support “${c.fan_speed}”`);
      try {
        await H.callService("vacuum", "set_fan_speed", { fan_speed: c.fan_speed }, { entity_id: l.entity });
      } catch (W) {
        throw new Fe("set_fan_speed", W instanceof Error ? W.message : String(W), { cause: W });
      }
    }
  }
  try {
    await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: _ },
      { entity_id: l.entity }
    );
  } catch (w) {
    throw new Fe("clean_area", w instanceof Error ? w.message : String(w), { cause: w });
  }
  return _;
}
const _2 = {
  status: "Status",
  battery: "Battery",
  room: "Room",
  area: "Area",
  duration: "Duration",
  progress: "Progress",
  entireFloor: "Entire floor",
  configureJob: "Configure job",
  selectedRooms: "Selected rooms",
  noRoomsSelected: "Tap one or more rooms on the map",
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
  vacuumOnly: "Vacuum only",
  vacuumAndMop: "Vacuum and mop",
  suction: "Suction",
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
  close: "Close"
}, S2 = {
  status: "Status",
  battery: "Batterij",
  room: "Ruimte",
  area: "Oppervlak",
  duration: "Duur",
  progress: "Voortgang",
  entireFloor: "Hele verdieping",
  configureJob: "Taak instellen",
  selectedRooms: "Geselecteerde kamers",
  noRoomsSelected: "Tik één of meer kamers op de kaart aan",
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
  vacuumOnly: "Alleen stofzuigen",
  vacuumAndMop: "Stofzuigen en dweilen",
  suction: "Zuigkracht",
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
  close: "Sluiten"
};
function ce(n, l) {
  return (n === "nl" ? S2 : _2)[l];
}
const z2 = [
  {
    id: "vacuum_only",
    name: "Vacuum only",
    icon: "mdi:vacuum",
    strategy: "custom",
    cleaning_type: "vacuum",
    fan_speed: "balanced",
    mop_mode: "standard"
  },
  {
    id: "vacuum_and_mop",
    name: "Vacuum and mop",
    icon: "mdi:water-plus",
    strategy: "custom",
    cleaning_type: "vacuum_and_mop",
    fan_speed: "balanced",
    mop_mode: "standard",
    mop_intensity: "medium"
  },
  {
    id: "smartplan",
    name: "SmartPlan",
    icon: "mdi:creation",
    strategy: "smartplan",
    cleaning_type: "vacuum_and_mop",
    mop_mode: "smart_mode"
  }
];
function T2(n, l, u) {
  const r = l.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (u.cleaning_type === "vacuum" && !r)
    return "cleaning mode “vacuum”";
  if (u.fan_speed && !l.fanSpeeds.includes(u.fan_speed)) return `fan speed “${u.fan_speed}”`;
  if (u.mop_mode && !l.mopModes.includes(u.mop_mode)) return `mop mode “${u.mop_mode}”`;
  if (u.mop_intensity && !l.mopIntensities.includes(u.mop_intensity))
    return `mop intensity “${u.mop_intensity}”`;
}
function E2(n, l) {
  return [...z2, ...n.presets ?? []].map((u) => {
    const r = T2(n, l, u);
    return {
      preset: u,
      available: !r,
      reason: r ? `Unsupported ${r}` : void 0
    };
  });
}
function jh(n) {
  return {
    preset_id: n.id,
    strategy: n.strategy,
    cleaning_type: n.cleaning_type ?? "vacuum_and_mop",
    fan_speed: n.fan_speed,
    mop_mode: n.mop_mode,
    mop_intensity: n.mop_intensity
  };
}
function Dh({ icon: n, className: l }) {
  return n ? ne.createElement("ha-icon", { icon: n, class: l, "aria-hidden": "true" }) : null;
}
function Ms({
  value: n,
  options: l,
  onChange: u,
  label: r
}) {
  return l.length === 0 ? null : /* @__PURE__ */ S.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ S.jsx("span", { children: r }),
    /* @__PURE__ */ S.jsx("select", { value: n ?? "", onChange: (c) => u(c.target.value), children: l.map((c) => /* @__PURE__ */ S.jsx("option", { value: c, children: c.replaceAll("_", " ") }, c)) })
  ] });
}
function A2({
  language: n,
  draft: l,
  capabilities: u,
  presets: r,
  selectedRoomNames: c,
  submitting: f,
  onDraftChange: d,
  onClose: p,
  onStart: v
}) {
  const h = r.find(({ preset: y }) => y.id === "vacuum_only")?.available ?? !1;
  return /* @__PURE__ */ S.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ S.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": ce(n, "close"), onClick: p }),
    /* @__PURE__ */ S.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ S.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ S.jsxs("header", { children: [
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("h2", { id: "job-sheet-title", children: ce(n, "configureTitle") }),
          /* @__PURE__ */ S.jsx("p", { children: c.join(" · ") })
        ] }),
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "icon-button", "aria-label": ce(n, "close"), onClick: p, children: /* @__PURE__ */ S.jsx(Fp, {}) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ S.jsx("h3", { children: ce(n, "presets") }),
        /* @__PURE__ */ S.jsx("div", { className: "preset-grid", children: r.map(({ preset: y, available: _, reason: A }) => /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            className: l.preset_id === y.id ? "active" : "",
            disabled: !_ || f,
            title: A,
            onClick: () => d(jh(y)),
            children: [
              /* @__PURE__ */ S.jsx(Dh, { icon: y.icon }),
              /* @__PURE__ */ S.jsx("span", { children: y.name }),
              !_ && /* @__PURE__ */ S.jsx("small", { children: A ?? ce(n, "unsupported") })
            ]
          },
          y.id
        )) }),
        l.strategy !== "smartplan" && /* @__PURE__ */ S.jsxs("div", { className: "job-fields", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ S.jsx("span", { children: ce(n, "cleaningType") }),
            /* @__PURE__ */ S.jsx("div", { className: "segmented", children: ["vacuum", "vacuum_and_mop"].map((y) => /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: l.cleaning_type === y ? "active" : "",
                disabled: f || y === "vacuum" && !h,
                title: y === "vacuum" && !h ? ce(n, "unsupported") : void 0,
                onClick: () => d({
                  ...l,
                  preset_id: "custom_draft",
                  cleaning_type: y,
                  mop_mode: y === "vacuum" && u.mopModes.includes("standard") ? "standard" : l.mop_mode
                }),
                children: ce(n, y === "vacuum" ? "vacuumOnly" : "vacuumAndMop")
              },
              y
            )) })
          ] }),
          /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ce(n, "suction"),
              value: l.fan_speed,
              options: u.fanSpeeds,
              onChange: (y) => d({ ...l, preset_id: "custom_draft", fan_speed: y })
            }
          ),
          u.hasMopMode && /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ce(n, "mopRoute"),
              value: l.mop_mode,
              options: u.mopModes,
              onChange: (y) => d({ ...l, preset_id: "custom_draft", mop_mode: y })
            }
          ),
          l.cleaning_type !== "vacuum" && u.hasMopIntensity && /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ce(n, "mopIntensity"),
              value: l.mop_intensity,
              options: u.mopIntensities,
              onChange: (y) => d({ ...l, preset_id: "custom_draft", mop_intensity: y })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("footer", { children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: p, children: ce(n, "cancel") }),
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", disabled: f, onClick: v, children: f ? ce(n, "starting") : ce(n, "start") })
      ] })
    ] })
  ] });
}
var ga = function(n, l) {
  return Number(n.toFixed(l));
}, w2 = function(n, l) {
  return l;
}, Ae = function(n, l, u) {
  u && typeof u == "function" && u(n, l);
}, x2 = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, O2 = function(n) {
  return n;
}, C2 = function(n) {
  return n * n;
}, M2 = function(n) {
  return n * (2 - n);
}, N2 = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, j2 = function(n) {
  return n * n * n;
}, D2 = function(n) {
  return --n * n * n + 1;
}, Z2 = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, R2 = function(n) {
  return n * n * n * n;
}, U2 = function(n) {
  return 1 - --n * n * n * n;
}, k2 = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, Y2 = function(n) {
  return n * n * n * n * n;
}, X2 = function(n) {
  return 1 + --n * n * n * n * n;
}, H2 = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Zh = {
  easeOut: x2,
  linear: O2,
  easeInQuad: C2,
  easeOutQuad: M2,
  easeInOutQuad: N2,
  easeInCubic: j2,
  easeOutCubic: D2,
  easeInOutCubic: Z2,
  easeInQuart: R2,
  easeOutQuart: U2,
  easeInOutQuart: k2,
  easeInQuint: Y2,
  easeOutQuint: X2,
  easeInOutQuint: H2
}, Rh = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, Jt = function(n) {
  n.mounted && (Rh(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Uh(n, l, u, r) {
  if (n.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    Jt(n), n.animation = function() {
      if (!n.mounted)
        return Rh(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - c, p = d / u, v = Zh[l], h = v(p);
      d >= u ? (r(f), n.animation = null) : n.animation && (r(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function B2(n) {
  var l = n.scale, u = n.positionX, r = n.positionY;
  return !(Number.isNaN(l) || Number.isNaN(u) || Number.isNaN(r));
}
function Wn(n, l, u, r) {
  var c = B2(l);
  if (!(!n.mounted || !c)) {
    var f = n.setState, d = n.state, p = d.scale, v = d.positionX, h = d.positionY, y = l.scale - p, _ = l.positionX - v, A = l.positionY - h;
    u === 0 ? f(l.scale, l.positionX, l.positionY) : Uh(n, r, u, function(w) {
      w !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var M = p + y * w, H = v + _ * w, B = h + A * w;
      f(M, H, B);
    });
  }
}
function q2(n, l, u) {
  var r = n.offsetWidth, c = n.offsetHeight, f = l.offsetWidth, d = l.offsetHeight, p = f * u, v = d * u, h = r - p, y = c - v;
  return {
    wrapperWidth: r,
    wrapperHeight: c,
    newContentWidth: p,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: y
  };
}
var $2 = function(n, l, u, r, c, f, d) {
  var p = n > l ? u * (d ? 0.5 : 1) : 0, v = r > c ? f * (d ? 0.5 : 1) : 0, h = n - l - p, y = p, _ = r - c - v, A = v;
  return {
    minPositionX: h,
    maxPositionX: y,
    minPositionY: _,
    maxPositionY: A,
    scaleWidthFactor: p,
    scaleHeightFactor: v
  };
}, Ws = function(n, l) {
  var u = n.wrapperComponent, r = n.contentComponent, c = n.setup, f = c.centerZoomedOut, d = c.disablePadding;
  if (!u || !r)
    throw new Error("Components are not mounted");
  var p = q2(u, r, l), v = p.wrapperWidth, h = p.wrapperHeight, y = p.newContentWidth, _ = p.newContentHeight, A = p.newDiffWidth, w = p.newDiffHeight, M = $2(v, y, A, h, _, w, !!f), H = v >= y && h >= _;
  d && H && !f && (M.minPositionX = 0, M.maxPositionX = 0, M.minPositionY = 0, M.maxPositionY = 0);
  var B = n.setup, V = B.minPositionX, W = B.maxPositionX, $ = B.minPositionY, X = B.maxPositionY;
  return V != null && (M.minPositionX = v * (1 - l) + V * l), W != null && (M.maxPositionX = W * l), $ != null && (M.minPositionY = h * (1 - l) + $ * l), X != null && (M.maxPositionY = X * l), M;
}, dl = function(n, l, u, r) {
  return r ? n < l ? ga(l, 2) : n > u ? ga(u, 2) : ga(n, 2) : ga(n, 2);
}, si = function(n, l) {
  var u = Ws(n, l);
  return n.bounds = u, u;
};
function hl(n, l, u, r, c, f, d) {
  var p = u.minPositionX, v = u.minPositionY, h = u.maxPositionX, y = u.maxPositionY, _ = 0, A = 0;
  d && (_ = c, A = f);
  var w = dl(n, p - _, h + _, r), M = dl(l, v - A, y + A, r);
  return { x: w, y: M };
}
function nr(n, l, u, r, c, f) {
  var d = n.state, p = d.scale, v = d.positionX, h = d.positionY, y = r - p;
  if (typeof l != "number" || typeof u != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var _ = v - l * y, A = h - u * y, w = hl(_, A, c, f, 0, 0, null);
  return w;
}
var qp = 1e-7;
function vl(n, l, u, r, c) {
  var f = c ? r : 0, d = Math.max(l - f, qp), p = u + f;
  return !Number.isNaN(u) && n >= p ? p : !Number.isNaN(l) && n <= d ? d : Math.max(n, qp);
}
var $p = function(n, l) {
  var u = n.setup.panning.excluded, r = n.isInitialized, c = n.wrapperComponent, f = l.target, d = "shadowRoot" in f && "composedPath" in l, p = d ? l.composedPath().some(function(y) {
    return y instanceof Element ? c?.contains(y) : !1;
  }) : c?.contains(f), v = r && f && p;
  if (!v)
    return !1;
  var h = gl(f, u);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, Vp = function(n) {
  var l = n.isInitialized, u = n.isPanning, r = n.setup, c = r.panning.disabled, f = l && u && !c;
  return !!f;
}, V2 = function(n, l) {
  var u = n.state, r = u.positionX, c = u.positionY;
  n.isPanning = !0;
  var f = l.clientX, d = l.clientY;
  n.startCoords = { x: f - r, y: d - c };
}, L2 = function(n, l) {
  var u = l.touches, r = n.state, c = r.positionX, f = r.positionY;
  n.isPanning = !0;
  var d = u.length === 1;
  if (d) {
    var p = u[0].clientX, v = u[0].clientY;
    n.startCoords = { x: p - c, y: v - f };
  }
};
function G2(n) {
  var l = n.state, u = l.positionX, r = l.positionY, c = l.scale, f = n.setup, d = f.disabled, p = f.limitToBounds, v = f.centerZoomedOut, h = n.wrapperComponent;
  if (!(d || !h || !n.bounds)) {
    var y = n.bounds, _ = y.maxPositionX, A = y.minPositionX, w = y.maxPositionY, M = y.minPositionY, H = u > _ || u < A, B = r > w || r < M, V = u > _ ? h.offsetWidth : n.setup.minPositionX || 0, W = r > w ? h.offsetHeight : n.setup.minPositionY || 0, $ = nr(n, V, W, c, n.bounds, p || v), X = $.x, G = $.y;
    return {
      scale: c,
      positionX: H ? X : u,
      positionY: B ? G : r
    };
  }
}
function kh(n, l, u, r, c) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, p = n.bounds, v = n.state, h = v.scale, y = v.positionX, _ = v.positionY;
  if (!(d === null || p === null || l === y && u === _)) {
    var A = hl(l, u, p, f, r, c, d), w = A.x, M = A.y;
    n.setState(h, w, M);
  }
}
var Q2 = function(n, l, u) {
  var r = n.startCoords, c = n.state, f = n.setup.panning, d = f.lockAxisX, p = f.lockAxisY, v = c.positionX, h = c.positionY;
  if (!r)
    return { x: v, y: h };
  var y = l - r.x, _ = u - r.y, A = d ? v : y, w = p ? h : _;
  return { x: A, y: w };
}, Qn = function(n, l, u) {
  var r = n.setup, c = n.state, f = r.minScale, d = r.disablePadding, p = r.centerZoomedOut, v = u ?? c.scale;
  return l > 0 && v >= f && !d && !p ? l : 0;
}, Gn;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(Gn || (Gn = {}));
var K2 = function(n) {
  var l = n.mounted, u = n.wrapperComponent, r = n.contentComponent, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = c.limitToBounds, v = n.state.scale, h = d.disabled;
  if (h || f || !l || !u || !r)
    return !1;
  if (!p)
    return !0;
  var y = u.offsetWidth < r.offsetWidth * v || u.offsetHeight < r.offsetHeight * v;
  return y;
}, J2 = function(n) {
  var l = n.mounted, u = n.velocity, r = n.bounds, c = n.setup, f = c.disabled, d = c.velocityAnimation, p = d.disabled, v = !p && !f && l;
  return !(!v || !u || !r);
};
function W2(n, l) {
  var u = n.setup.velocityAnimation, r = u.animationTime, c = u.maxAnimationTime, f = u.inertia;
  return Math.min(r * Math.max(1, Math.abs(l / f)), c);
}
function Lp(n, l, u, r, c, f, d, p, v, h) {
  if (c) {
    if (l > d && u > d) {
      var y = d + (n - d) * h;
      return y > v ? v : y < d ? d : y;
    }
    if (l < f && u < f) {
      var y = f + (n - f) * h;
      return y < p ? p : y > f ? f : y;
    }
  }
  return r ? l : dl(n, f, d, c);
}
function P2(n) {
  var l = 1, u = n.offsetWidth / window.innerWidth;
  return Number.isNaN(u) ? l : Math.min(l, u);
}
var Ns = function(n, l, u) {
  var r = 0, c = n * u;
  return Number.isNaN(c) ? r : n < 0 ? Math.max(c, -l) : Math.min(c, l);
};
function F2(n, l, u) {
  var r, c, f = K2(n);
  if (f) {
    var d = n.lastMousePosition, p = n.velocityTime, v = n.setup, h = n.wrapperComponent, y = v.velocityAnimation, _ = y.maxStrengthMouse, A = y.maxStrengthTouch, w = y.sensitivityTouch, M = y.sensitivityMouse, H = Date.now();
    if (d && p && h) {
      var B = P2(h), V = (r = {}, r[Gn.TOUCH] = w, r[Gn.MOUSE] = M, r)[u], W = (c = {}, c[Gn.TOUCH] = A, c[Gn.MOUSE] = _, c)[u], $ = l.x - d.x, X = l.y - d.y, G = Ns($ / B, W, V), ee = Ns(X / B, W, V), Q = H - p, ue = $ * $ + X * X, Se = Ns(Math.sqrt(ue) / Q, W, V);
      n.velocity = { velocityX: G, velocityY: ee, total: Se };
    }
    n.lastMousePosition = l, n.velocityTime = H;
  }
}
function I2(n) {
  var l = n.velocity, u = n.bounds, r = n.setup, c = n.wrapperComponent, f = J2(n);
  if (!(!f || !l || !u || !c)) {
    var d = l.velocityX, p = l.velocityY, v = l.total, h = u.maxPositionX, y = u.minPositionX, _ = u.maxPositionY, A = u.minPositionY, w = r.limitToBounds, M = r.autoAlignment, H = r.zoomAnimation, B = r.panning, V = B.lockAxisY, W = B.lockAxisX, $ = H.animationType, X = M.sizeX, G = M.sizeY, ee = M.velocityAlignmentTime, Q = ee, ue = W2(n, v), Se = Math.max(ue, Q), ve = Qn(n, X), ge = Qn(n, G), ye = ve * c.offsetWidth / 100, He = ge * c.offsetHeight / 100, Qe = h + ye, it = y - ye, j = _ + He, q = A - He, Y = n.state, ae = (/* @__PURE__ */ new Date()).getTime();
    Uh(n, $, Se, function(fe) {
      var T = n.state, U = T.scale, L = T.positionX, K = T.positionY, ie = (/* @__PURE__ */ new Date()).getTime() - ae, se = ie / Q, ze = Zh[M.animationType], tt = 1 - ze(Math.min(1, se)), Ue = 1 - fe, _n = L + d * Ue, Pn = K + p * Ue, fi = Lp(_n, Y.positionX, L, W, w, y, h, it, Qe, tt), bl = Lp(Pn, Y.positionY, K, V, w, A, _, q, j, tt);
      if (L !== _n || K !== Pn) {
        n.setState(U, fi, bl);
        var Wt = n.props.onPanning;
        Wt && Wt(_e(n), {});
      }
    });
  }
}
function Gp(n, l) {
  var u = n.state, r = u.scale, c = u.positionX, f = u.positionY;
  n.panStartPosition = { x: c, y: f }, Jt(n), si(n, r), window.TouchEvent !== void 0 && l instanceof TouchEvent ? L2(n, l) : V2(n, l);
}
function Yh(n, l) {
  var u = n.state.scale, r = n.setup, c = r.minScale, f = r.autoAlignment, d = f.disabled, p = f.sizeX, v = f.sizeY, h = f.animationTime, y = f.animationType, _ = d || u < c || !p && !v;
  if (!_) {
    var A = G2(n);
    A && Wn(n, A, h, y);
  }
}
function Qp(n, l, u, r) {
  var c = n.startCoords, f = n.setup, d = f.autoAlignment, p = d.sizeX, v = d.sizeY;
  if (c) {
    var h = Q2(n, l, u), y = h.x, _ = h.y, A = Qn(n, p), w = Qn(n, v);
    F2(n, { x: y, y: _ }, r), kh(n, y, _, A, w);
  }
}
function ez(n, l) {
  if (n.isPanning) {
    var u = n.velocity, r = n.wrapperComponent, c = n.contentComponent;
    n.isPanning = !1;
    var f = n.state, d = f.positionX, p = f.positionY, v = f.scale, h = n.panStartPosition;
    if (n.panStartPosition = null, h) {
      var y = d - h.x, _ = p - h.y;
      if (y * y + _ * _ <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var A = r?.offsetWidth || 0, w = r?.offsetHeight || 0, M = (c?.offsetWidth || 0) * v, H = (c?.offsetHeight || 0) * v, B = !n.setup.limitToBounds || A < M || w < H, V = !l && u && u.total > 0.1 && B;
    V ? I2(n) : Yh(n);
  }
}
function Ps(n, l, u, r) {
  var c = n.setup, f = c.minScale, d = c.maxScale, p = c.limitToBounds, v = vl(ga(l, 2), f, d, 0, !1), h = si(n, v), y = nr(n, u, r, v, h, p), _ = y.x, A = y.y;
  return { scale: v, positionX: _, positionY: A };
}
function Fs(n, l, u) {
  var r = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.minScale, p = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, y = h.disabled, _ = h.animationTime, A = h.animationType, w = r >= d && r <= p, M = y || w;
  if ((r >= 1 || v) && Yh(n), !(M || !c || !n.mounted)) {
    var H = l || c.offsetWidth / 2, B = u || c.offsetHeight / 2, V = r < d ? d : p, W = Ps(n, V, H, B);
    W && Wn(n, W, _, A);
  }
}
var Vt = function() {
  return Vt = Object.assign || function(l) {
    for (var u, r = 1, c = arguments.length; r < c; r++) {
      u = arguments[r];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (l[f] = u[f]);
    }
    return l;
  }, Vt.apply(this, arguments);
};
function Kp(n, l, u) {
  for (var r = 0, c = l.length, f; r < c; r++)
    (f || !(r in l)) && (f || (f = Array.prototype.slice.call(l, 0, r)), f[r] = l[r]);
  return n.concat(f || Array.prototype.slice.call(l));
}
var js = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, va = {
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
}, Xs = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Xh = function(n) {
  var l, u, r, c, f, d, p, v, h, y = Math.max((l = n.minScale) !== null && l !== void 0 ? l : va.minScale, 1e-7), _ = (u = n.maxScale) !== null && u !== void 0 ? u : va.maxScale, A = (r = n.initialScale) !== null && r !== void 0 ? r : js.scale, w = Math.min(Math.max(A, y), _), M = dl((c = n.initialPositionX) !== null && c !== void 0 ? c : js.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), H = dl((p = n.initialPositionY) !== null && p !== void 0 ? p : js.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: w,
    scale: w,
    positionX: M,
    positionY: H
  };
}, Jp = function(n) {
  var l = Vt({}, va);
  return Object.keys(n).forEach(function(u) {
    var r = u, c = typeof n[r] < "u", f = typeof va[r] < "u";
    if (f && c) {
      var d = Object.prototype.toString.call(va[r]), p = d === "[object Object]", v = d === "[object Array]";
      p ? l[r] = Vt(Vt({}, va[r]), n[r]) : v ? l[r] = Kp(Kp([], va[r], !0), n[r]) : l[r] = n[r];
    }
  }), l.minScale <= 0 && (l.minScale = 1e-7), l;
}, Hh = function(n, l, u) {
  var r = n.state.scale, c = n.wrapperComponent, f = n.setup, d = f.maxScale, p = f.minScale, v = f.zoomAnimation, h = f.smooth, y = v.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var _ = h ? r * Math.exp(l * u) : r + l * u, A = vl(ga(_, 3), p, d, y, !1);
  return A;
};
function Bh(n, l, u, r, c) {
  var f, d, p = n.wrapperComponent, v = n.state, h = v.scale, y = v.positionX, _ = v.positionY, A = n.setup.zoomAnimation;
  if (!p)
    return console.error("No WrapperComponent found");
  var w = A.disabled ? 0 : r, M = p.offsetWidth, H = p.offsetHeight, B = (M / 2 - y) / h, V = (H / 2 - _) / h, W = Hh(n, l, u), $ = Ps(n, W, B, V);
  if (!$)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var X = n.props, G = X.onZoomStart, ee = X.onZoom, Q = X.onZoomStop, ue = new MouseEvent("mousemove", { bubbles: !0 }), Se = _e(n);
  Ae(Se, ue, G), Ae(Se, ue, ee), Wn(n, $, w, c);
  var ve = (d = (f = p.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  ve && ve.setTimeout(function() {
    n.mounted && Ae(_e(n), ue, Q);
  }, w);
}
function qh(n, l, u, r) {
  var c, f, d = n.setup, p = n.wrapperComponent, v = n.contentComponent, h = d.limitToBounds, y = d.centerOnInit, _ = Xh(n.props), A = n.state, w = A.scale, M = A.positionX, H = A.positionY;
  if (p) {
    var B = _.positionX, V = _.positionY;
    if (y && v) {
      var W = Is(_.scale, p, v);
      B = W.positionX, V = W.positionY;
    }
    var $ = Ws(n, _.scale), X = hl(B, V, $, h, 0, 0, p), G = {
      scale: _.scale,
      positionX: X.x,
      positionY: X.y
    };
    if (!(w === _.scale && M === _.positionX && H === _.positionY)) {
      r?.();
      var ee = n.props, Q = ee.onZoomStart, ue = ee.onZoom, Se = ee.onZoomStop, ve = new MouseEvent("mousemove", { bubbles: !0 }), ge = _e(n);
      Ae(ge, ve, Q), Ae(ge, ve, ue), Wn(n, G, l, u);
      var ye = (f = (c = p.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      ye && ye.setTimeout(function() {
        n.mounted && Ae(_e(n), ve, Se);
      }, l);
    }
  }
}
function tz(n, l, u, r) {
  var c = n.getBoundingClientRect(), f = l.getBoundingClientRect(), d = u.getBoundingClientRect(), p = f.x * r.scale, v = f.y * r.scale;
  return {
    x: (c.x - d.x + p) / r.scale,
    y: (c.y - d.y + v) / r.scale
  };
}
function nz(n, l, u, r, c) {
  r === void 0 && (r = 0), c === void 0 && (c = 0);
  var f = n.wrapperComponent, d = n.contentComponent, p = n.state, v = n.setup, h = v.limitToBounds, y = v.minScale, _ = v.maxScale;
  if (!f || !d)
    return p;
  var A = f.getBoundingClientRect(), w = l.getBoundingClientRect(), M = tz(l, f, d, p), H = M.x, B = M.y, V = w.width / p.scale, W = w.height / p.scale, $ = f.offsetWidth / V, X = f.offsetHeight / W, G = vl(u || Math.min($, X), y, _, 0, !1), ee = (A.width - V * G) / 2, Q = (A.height - W * G) / 2, ue = (A.left - H) * G + ee + r, Se = (A.top - B) * G + Q + c, ve = Ws(n, G), ge = hl(ue, Se, ve, h, 0, 0, f), ye = ge.x, He = ge.y;
  return { positionX: ye, positionY: He, scale: G };
}
var az = function(n) {
  return function(l, u, r) {
    l === void 0 && (l = 0.5), u === void 0 && (u = 300), r === void 0 && (r = "easeOut"), Bh(n, 1, l, u, r);
  };
}, iz = function(n) {
  return function(l, u, r) {
    l === void 0 && (l = 0.5), u === void 0 && (u = 300), r === void 0 && (r = "easeOut"), Bh(n, -1, l, u, r);
  };
}, lz = function(n) {
  return function(l, u, r, c, f) {
    c === void 0 && (c = 300), f === void 0 && (f = "easeOut");
    var d = n.state, p = d.positionX, v = d.positionY, h = d.scale, y = n.wrapperComponent, _ = n.contentComponent, A = n.setup.disabled;
    if (!(A || !y || !_)) {
      var w = {
        positionX: Number.isNaN(l) ? p : l,
        positionY: Number.isNaN(u) ? v : u,
        scale: Number.isNaN(r) ? h : r
      };
      Wn(n, w, c, f);
    }
  };
}, uz = function(n) {
  return function(l, u) {
    l === void 0 && (l = 200), u === void 0 && (u = "easeOut"), qh(n, l, u);
  };
}, rz = function(n) {
  return function(l, u, r) {
    u === void 0 && (u = 200), r === void 0 && (r = "easeOut");
    var c = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var p = Is(l || c.scale, f, d);
      Wn(n, p, u, r);
    }
  };
}, oz = function(n) {
  return function(l, u, r, c, f, d) {
    r === void 0 && (r = 600), c === void 0 && (c = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), Jt(n);
    var p = n.wrapperComponent, v = typeof l == "string" ? document.getElementById(l) : l;
    if (p && v && p.contains(v)) {
      var h = nz(n, v, u, f, d);
      Wn(n, h, r, c);
    }
  };
}, Pu = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: az(n),
    zoomOut: iz(n),
    setTransform: lz(n),
    resetTransform: uz(n),
    centerView: rz(n),
    zoomToElement: oz(n)
  };
}, sz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, _e = function(n) {
  var l = {};
  return Object.assign(l, sz(n)), Object.assign(l, Pu(n)), l;
}, Ds = !1;
function Zs() {
  try {
    var n = {
      get passive() {
        return Ds = !0, !1;
      }
    };
    return n;
  } catch {
    return Ds = !1, Ds;
  }
}
var Vu = ".".concat(Xs.wrapperClass), gl = function(n, l) {
  return l.some(function(u) {
    return n.matches("".concat(Vu, " ").concat(u, ", ").concat(Vu, " .").concat(u, ", ").concat(Vu, " ").concat(u, " *, ").concat(Vu, " .").concat(u, " *"));
  });
}, ml = function(n) {
  n && clearTimeout(n);
}, cz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, $h = function(n, l, u) {
  var r = cz(u);
  return "translate(".concat(n, "px, ").concat(l, "px) scale(").concat(r, ")");
}, Is = function(n, l, u) {
  var r = u.offsetWidth * n, c = u.offsetHeight * n, f = (l.offsetWidth - r) / 2, d = (l.offsetHeight - c) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function fz(n, l) {
  n != null && (typeof n == "function" ? n(l) : n.current = l);
}
function dz(n) {
  return function(l) {
    n.forEach(function(u) {
      typeof u == "function" ? u(l) : u != null && (u.current = l);
    });
  };
}
var Vh = function(n, l) {
  var u = n.setup.wheel, r = u.disabled, c = u.wheelDisabled, f = u.touchPadDisabled, d = u.excluded, p = n.isInitialized, v = n.isPanning, h = l.target, y = p && !v && !r && h;
  if (!y || c && !l.ctrlKey || f && l.ctrlKey)
    return !1;
  var _ = gl(h, d);
  if (_)
    return !1;
  var A = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!A;
}, mz = function(n, l) {
  var u = n.setup, r = u.disabled, c = u.trackPadPanning, f = c.activationKeys, d = c.excluded;
  if (!n.wrapperComponent || !n.contentComponent || r || c.disabled || l.ctrlKey)
    return !1;
  var p = Vh(n, l);
  if (p)
    return !1;
  var v = l.target, h = gl(v, d);
  if (h)
    return !1;
  var y = n.isPressingKeys(f);
  return !!y;
}, pz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function hz(n, l) {
  var u = pz(n), r = w2(l, u);
  return r;
}
function Lh(n, l, u) {
  var r = l.getBoundingClientRect(), c = 0, f = 0;
  if ("clientX" in n)
    c = (n.clientX - r.left) / u, f = (n.clientY - r.top) / u;
  else {
    var d = n.touches[0];
    c = (d.clientX - r.left) / u, f = (d.clientY - r.top) / u;
  }
  return (Number.isNaN(c) || Number.isNaN(f)) && console.error("No mouse or touch offset found"), {
    x: c,
    y: f
  };
}
var vz = function(n, l, u, r, c) {
  var f = n.state.scale, d = n.wrapperComponent, p = n.setup, v = p.maxScale, h = p.minScale, y = p.zoomAnimation, _ = p.disablePadding, A = y.size, w = y.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var M = f + l * u, H = r ? !1 : !w, B = vl(M, h, v, A, H && !_);
  return B;
}, Gh = function(n, l) {
  var u = n.previousWheelEvent, r = n.state.scale, c = n.setup, f = c.maxScale, d = c.minScale;
  return u ? r < f || r > d || Math.sign(u.deltaY) !== Math.sign(l.deltaY) || u.deltaY > 0 && u.deltaY < l.deltaY || u.deltaY < 0 && u.deltaY > l.deltaY || Math.sign(u.deltaY) !== Math.sign(l.deltaY) : !1;
}, gz = function(n, l) {
  var u = n.setup.pinch, r = u.disabled, c = u.excluded, f = n.isInitialized, d = l.target, p = f && !r && d;
  if (!p)
    return !1;
  var v = gl(d, c);
  return !v;
}, yz = function(n) {
  var l = n.setup.pinch.disabled, u = n.isInitialized, r = n.pinchStartDistance, c = u && !l && r !== null;
  return !!c;
}, bz = function(n, l, u) {
  var r = u.getBoundingClientRect(), c = n.touches, f = c[0].clientX - r.left, d = c[0].clientY - r.top, p = c[1].clientX - r.left, v = c[1].clientY - r.top;
  return {
    x: (f + p) / 2 / l,
    y: (d + v) / 2 / l
  };
}, Qh = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, _z = 5, Sz = function(n, l) {
  var u = n.pinchStartScale, r = n.pinchStartDistance, c = n.setup, f = c.maxScale, d = c.minScale, p = c.zoomAnimation, v = c.disablePadding, h = c.pinch, y = p.size, _ = p.disabled, A = h.step;
  if (!u || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (l < 0)
    return n.state.scale;
  var w = l / r, M = w * u, H = (M - u) * (A / _z), B = u + H, V = B === 1 / 0 ? 0 : ga(B, 10);
  return vl(V, d, f, y, !_ && !v);
}, Kh = 160, Jh = 100, zz = function(n, l) {
  var u = n.props, r = u.onWheelStart, c = u.onZoomStart;
  n.wheelStopEventTimer || (Jt(n), Ae(_e(n), l, r), Ae(_e(n), l, c));
}, Tz = function(n, l) {
  var u = n.props, r = u.onWheel, c = u.onZoom, f = n.contentComponent, d = n.setup, p = n.state, v = p.scale, h = d.limitToBounds, y = d.centerZoomedOut, _ = d.zoomAnimation, A = d.wheel, w = d.disablePadding, M = d.smooth, H = _.size, B = _.disabled, V = A.step;
  if (!f)
    throw new Error("Component not mounted");
  l.preventDefault(), l.stopPropagation();
  var W = hz(l, null), $ = M ? V * Math.abs(l.deltaY) : V, X = vz(n, W, $, !l.ctrlKey);
  if (v !== X) {
    var G = si(n, X), ee = Lh(l, f, v), Q = B || H === 0 || y || w, ue = h && Q, Se = nr(n, ee.x, ee.y, X, G, ue), ve = Se.x, ge = Se.y;
    n.previousWheelEvent = l, n.setState(X, ve, ge), Ae(_e(n), l, r), Ae(_e(n), l, c);
  }
}, Ez = function(n, l) {
  var u = n.props, r = u.onWheelStop, c = u.onZoomStop;
  ml(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Fs(n, l.x, l.y), n.wheelAnimationTimer = null);
  }, Jh);
  var f = Gh(n, l);
  f && (ml(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ae(_e(n), l, r), Ae(_e(n), l, c));
  }, Kh));
}, Az = function(n, l) {
  var u = n.props, r = u.onWheelStart, c = u.onPanningStart;
  n.wheelStopEventTimer || (Jt(n), Ae(_e(n), l, r), Ae(_e(n), l, c));
}, wz = function(n, l) {
  var u = n.props, r = u.onWheelStop, c = u.onPanningStop;
  ml(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Fs(n, l.x, l.y), n.wheelAnimationTimer = null);
  }, Jh);
  var f = Gh(n, l);
  f && (ml(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ae(_e(n), l, r), Ae(_e(n), l, c));
  }, Kh));
}, Wh = function(n) {
  for (var l = 0, u = 0, r = 0; r < 2; r += 1)
    l += n.touches[r].clientX, u += n.touches[r].clientY;
  var c = l / 2, f = u / 2;
  return { x: c, y: f };
}, xz = function(n, l) {
  var u = Qh(l);
  n.pinchStartDistance = u, n.lastDistance = u, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Wh(l), Jt(n);
}, Oz = function(n, l) {
  var u = n.contentComponent, r = n.pinchStartDistance, c = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, p = n.setup, v = p.limitToBounds, h = p.centerZoomedOut, y = p.zoomAnimation, _ = p.autoAlignment, A = p.pinch, w = p.panning, M = y.disabled, H = y.size, B = A.allowPanning;
  if (!(r === null || !u)) {
    var V = bz(l, d, u);
    if (!(!Number.isFinite(V.x) || !Number.isFinite(V.y))) {
      var W = Qh(l), $ = Sz(n, W), X = Wh(l), G = d / $, ee = (X.x - (f?.x || 0)) * G, Q = (X.y - (f?.y || 0)) * G;
      if (!($ === d && ee === 0 && Q === 0)) {
        n.pinchPreviousCenter = X;
        var ue = si(n, $), Se = M || H === 0 || h, ve = v && Se, ge = nr(n, V.x, V.y, $, ue, ve), ye = ge.x, He = ge.y;
        if (n.pinchMidpoint = V, n.lastDistance = W, w.disabled || !B)
          n.setState($, ye, He);
        else {
          var Qe = _.sizeX, it = _.sizeY, j = Qn(n, Qe, $), q = Qn(n, it, $), Y = ye + ee, ae = He + Q, fe = hl(Y, ae, ue, v, j, q, c), T = fe.x, U = fe.y;
          n.setState($, T, U);
        }
      }
    }
  }
}, Cz = function(n) {
  var l = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Fs(n, l?.x, l?.y);
}, Ph = function(n, l) {
  var u = n.props.onZoomStop, r = n.setup.doubleClick.animationTime;
  ml(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ae(_e(n), l, u);
  }, r);
}, Mz = function(n, l) {
  var u = n.props, r = u.onZoomStart, c = u.onZoom, f = n.setup.doubleClick, d = f.animationTime, p = f.animationType;
  Ae(_e(n), l, r), qh(n, d, p, function() {
    return Ae(_e(n), l, c);
  }), Ph(n, l);
};
function Nz(n, l) {
  return n === "toggle" ? l === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function jz(n, l) {
  var u = n.setup, r = n.doubleClickStopEventTimer, c = n.state, f = n.contentComponent, d = c.scale, p = n.props, v = p.onZoomStart, h = p.onZoom, y = u.doubleClick, _ = y.disabled, A = y.mode, w = y.step, M = y.animationTime, H = y.animationType;
  if (!_ && !r) {
    if (A === "reset")
      return Mz(n, l);
    if (!f)
      return console.error("No ContentComponent found");
    var B = Nz(A, n.state.scale), V = Hh(n, B, w);
    if (d !== V) {
      Ae(_e(n), l, v);
      var W = Lh(l, f, d), $ = Ps(n, V, W.x, W.y);
      if (!$)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ae(_e(n), l, h), Wn(n, $, M, H), Ph(n, l);
    }
  }
}
var Dz = function(n, l) {
  var u = n.isInitialized, r = n.setup, c = n.wrapperComponent, f = r.doubleClick, d = f.disabled, p = f.excluded, v = l.target, h = c?.contains(v), y = u && v && h && !d;
  if (!y)
    return !1;
  var _ = gl(v, p);
  return !_;
}, Zz = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(l) {
      var u = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        u.initializeWindowEvents();
      }, this.unmount = function() {
        u.cleanupWindowEvents();
      }, this.update = function(r) {
        u.props = r, u.wrapperComponent && u.contentComponent && si(u, u.state.scale), u.setup = Jp(r);
      }, this.initializeWindowEvents = function() {
        var r, c, f, d, p = Zs(), v = (r = u.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, h = v?.defaultView;
        (c = u.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", u.onWheelPanning, p), (f = u.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", u.setKeyUnPressed, p), (d = u.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("mousedown", u.onPanningStart, p), h?.addEventListener("mousemove", u.onPanning, p), h?.addEventListener("mouseup", u.onPanningStop, p), v?.addEventListener("mouseleave", u.clearPanning, p), h?.addEventListener("keyup", u.setKeyUnPressed, p), h?.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("blur", u.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, c, f, d, p, v = Zs(), h = (r = u.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, y = h?.defaultView;
        y?.removeEventListener("mousedown", u.onPanningStart, v), y?.removeEventListener("mousemove", u.onPanning, v), y?.removeEventListener("mouseup", u.onPanningStop, v), h?.removeEventListener("mouseleave", u.clearPanning, v), y?.removeEventListener("keyup", u.setKeyUnPressed, v), y?.removeEventListener("keydown", u.setKeyPressed, v), y?.removeEventListener("blur", u.handleWindowBlur), document.removeEventListener("mouseleave", u.clearPanning, v), (c = u.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", u.onWheelPanning, v), (f = u.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", u.setKeyUnPressed, v), (d = u.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", u.setKeyPressed, v), Jt(u), (p = u.observer) === null || p === void 0 || p.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var c = Zs();
        r.addEventListener("wheel", u.onWheelZoom, c), r.addEventListener("dblclick", u.onDoubleClick, c), r.addEventListener("touchstart", u.onTouchPanningStart, c), r.addEventListener("touchmove", u.onTouchPanning, c), r.addEventListener("touchend", u.onTouchPanningStop, c);
      }, this.handleInitialize = function(r) {
        var c = u.setup.centerOnInit;
        u.applyTransformation(), u.onInitCallbacks.forEach(function(f) {
          return f(_e(u));
        }), c && (u.setCenter(), u.observer = new ResizeObserver(function() {
          var f, d = r.offsetWidth, p = r.offsetHeight;
          (d > 0 || p > 0) && (u.onInitCallbacks.forEach(function(v) {
            return v(_e(u));
          }), u.setCenter(), (f = u.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = u.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), u.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var c = u.setup.disabled;
        if (!c) {
          u.syncModifierKeys(r);
          var f = Vh(u, r);
          f && (zz(u, r), Tz(u, r), Ez(u, r));
        }
      }, this.onWheelPanning = function(r) {
        var c = u.props.onPanning, f = u.setup.trackPadPanning, d = f.lockAxisX, p = f.lockAxisY;
        u.syncModifierKeys(r);
        var v = mz(u, r);
        if (v) {
          r.preventDefault(), r.stopPropagation();
          var h = u.state, y = h.positionX, _ = h.positionY, A = y - r.deltaX, w = _ - r.deltaY, M = d ? y : A, H = p ? _ : w, B = u.setup.autoAlignment, V = B.sizeX, W = B.sizeY, $ = Qn(u, V), X = Qn(u, W);
          M === y && H === _ || (Az(u, r), kh(u, M, H, $, X), Ae(_e(u), r, c), wz(u, r));
        }
      }, this.onPanningStart = function(r) {
        var c = u.setup.disabled, f = u.props.onPanningStart;
        if (!c) {
          u.syncModifierKeys(r);
          var d = $p(u, r);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (r.button === 0 && !u.setup.panning.allowLeftClickPan || r.button === 1 && !u.setup.panning.allowMiddleClickPan || r.button === 2 && !u.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), Jt(u), Gp(u, r), Ae(_e(u), r, f)));
          }
        }
      }, this.onPanning = function(r) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (!c) {
          if (u.syncModifierKeys(r), u.isPanning && r.buttons === 0) {
            u.clearPanning(r);
            return;
          }
          var d = Vp(u);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (r.preventDefault(), r.stopPropagation(), Qp(u, r.clientX, r.clientY, Gn.MOUSE), Ae(_e(u), r, f));
          }
        }
      }, this.onPanningStop = function(r) {
        var c = u.setup.panning.velocityDisabled, f = u.props.onPanningStop;
        u.isPanning && (ez(u, c), Ae(_e(u), r, f));
      }, this.onPinchStart = function(r) {
        var c = u.setup.disabled, f = u.props.onPinchStart;
        if (!c) {
          var d = gz(u, r);
          d && (xz(u, r), Jt(u), Ae(_e(u), r, f));
        }
      }, this.onPinch = function(r) {
        var c = u.setup.disabled, f = u.props.onPinch;
        if (!c) {
          var d = yz(u);
          d && (r.preventDefault(), r.stopPropagation(), Oz(u, r), Ae(_e(u), r, f));
        }
      }, this.onPinchStop = function(r) {
        var c = u.props.onPinchStop;
        u.pinchStartScale && (Cz(u), Ae(_e(u), r, c));
      }, this.onTouchPanningStart = function(r) {
        var c = u.setup, f = c.disabled, d = c.doubleClick, p = u.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = u.lastTouch && +/* @__PURE__ */ new Date() - u.lastTouch < 200;
          if (v && h && r.touches.length === 1)
            u.onDoubleClick(r);
          else {
            u.lastTouch = +/* @__PURE__ */ new Date(), Jt(u);
            var y = r.touches, _ = y.length === 1, A = y.length === 2, w = $p(u, r);
            if (_) {
              if (!w)
                return;
              Jt(u), Gp(u, r), Ae(_e(u), r, p);
            }
            A && u.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (u.isPanning && r.touches.length === 1) {
          if (c)
            return;
          var d = Vp(u);
          if (!d)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var p = r.touches[0];
          Qp(u, p.clientX, p.clientY, Gn.TOUCH), Ae(_e(u), r, f);
        } else r.touches.length > 1 && u.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        u.onPanningStop(r), u.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var c = u.setup.disabled;
        if (!c) {
          var f = Dz(u, r);
          f && jz(u, r);
        }
      }, this.clearPanning = function(r) {
        u.isPanning && u.onPanningStop(r);
      }, this.handleWindowBlur = function() {
        u.pressedKeys = {}, u.isPanning && (u.isPanning = !1, u.startCoords = null);
      }, this.syncModifierKeys = function(r) {
        var c = r.ctrlKey, f = r.metaKey, d = r.shiftKey, p = r.altKey;
        typeof c == "boolean" && (u.pressedKeys.Control = c), typeof f == "boolean" && (u.pressedKeys.Meta = f), typeof d == "boolean" && (u.pressedKeys.Shift = d), typeof p == "boolean" && (u.pressedKeys.Alt = p);
      }, this.setKeyPressed = function(r) {
        u.pressedKeys[r.key] = !0;
      }, this.setKeyUnPressed = function(r) {
        u.pressedKeys[r.key] = !1;
      }, this.isPressingKeys = function(r) {
        return typeof r == "function" ? r(Object.entries(u.pressedKeys).filter(function(c) {
          var f = c[1];
          return f;
        }).map(function(c) {
          var f = c[0];
          return f;
        })) : r.length ? !!r.every(function(c) {
          return u.pressedKeys[c];
        }) : !0;
      }, this.setCenter = function() {
        if (u.wrapperComponent && u.contentComponent) {
          var r = Is(u.state.scale, u.wrapperComponent, u.contentComponent);
          u.setState(r.scale, r.positionX, r.positionY);
        }
      }, this.handleTransformStyles = function(r, c, f) {
        return u.props.customTransform ? u.props.customTransform(r, c, f) : $h(r, c, f);
      }, this.getContext = function() {
        return _e(u);
      }, this.applyTransformation = function() {
        if (!(!u.mounted || !u.contentComponent)) {
          var r = u.state, c = r.scale, f = r.positionX, d = r.positionY, p = u.handleTransformStyles(f, d, c);
          u.props.detached || (u.contentComponent.style.transform = p), u.onTransformCallbacks.forEach(function(v) {
            return v({
              scale: c,
              positionX: f,
              positionY: d,
              previousScale: u.state.previousScale,
              ref: _e(u)
            });
          });
        }
      }, this.setState = function(r, c, f) {
        var d = u.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(c) && !Number.isNaN(f)) {
          var p = Math.max(r, 1e-7);
          p !== u.state.scale && (u.state.previousScale = u.state.scale, u.state.scale = p), u.state.positionX = c, u.state.positionY = f, u.applyTransformation();
          var v = _e(u);
          u.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), Ae(v, { scale: u.state.scale, positionX: c, positionY: f }, d);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(r) {
        return u.onTransformCallbacks.has(r) || u.onTransformCallbacks.add(r), function() {
          u.onTransformCallbacks.delete(r);
        };
      }, this.onChange = function(r) {
        return u.onChangeCallbacks.has(r) || u.onChangeCallbacks.add(r), function() {
          u.onChangeCallbacks.delete(r);
        };
      }, this.onInit = function(r) {
        return u.onInitCallbacks.has(r) || u.onInitCallbacks.add(r), function() {
          u.onInitCallbacks.delete(r);
        };
      }, this.init = function(r, c) {
        u.cleanupWindowEvents(), u.wrapperComponent = r, u.contentComponent = c, si(u, u.state.scale), u.handleInitializeWrapperEvents(r), u.handleInitialize(c), u.initializeWindowEvents(), u.isInitialized = !0;
        var f = _e(u);
        Ae(f, void 0, u.props.onInit), fz(u.props.ref, f);
      }, this.props = l, this.setup = Jp(this.props), this.state = Xh(this.props);
    }
    return n;
  })()
), yl = Fu.createContext(null), Rz = function(n, l) {
  return typeof n == "function" ? n(l) : n;
}, Uz = Fu.forwardRef(function(n, l) {
  var u = ne.useRef(new Zz(n)).current, r = Rz(n.children, Pu(u));
  return ne.useImperativeHandle(l, function() {
    return Pu(u);
  }, [u]), ne.useEffect(function() {
    u.update(n);
  }, [u, n]), S.jsx(yl.Provider, Vt({ value: u }, { children: r }));
});
Fu.forwardRef(function(n, l) {
  var u = ne.useRef(null), r = ne.useContext(yl);
  return ne.useEffect(function() {
    return r.onChange(function(c) {
      if (u.current) {
        var f = 0, d = 0;
        u.current.style.transform = r.handleTransformStyles(f, d, 1 / c.instance.state.scale);
      }
    });
  }, [r]), S.jsx("div", Vt({}, n, { ref: dz([u, l]) }));
});
function kz(n, l) {
  l === void 0 && (l = {});
  var u = l.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", u === "top" && r.firstChild ? r.insertBefore(c, r.firstChild) : r.appendChild(c), c.styleSheet ? c.styleSheet.cssText = n : c.appendChild(document.createTextNode(n));
  }
}
var Yz = `.transform-component-module_wrapper__SPB86 {
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
`, Rs = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
kz(Yz);
var Xz = function(n) {
  var l = n.children, u = n.wrapperClass, r = u === void 0 ? "" : u, c = n.contentClass, f = c === void 0 ? "" : c, d = n.wrapperStyle, p = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, y = n.contentProps, _ = y === void 0 ? {} : y, A = n.infinite, w = A === void 0 ? !1 : A, M = ne.useContext(yl), H = M.init, B = M.cleanupWindowEvents, V = ne.useRef(null), W = ne.useRef(null), $ = ne.useRef(null);
  return ne.useEffect(function() {
    var X = V.current, G = W.current;
    return X !== null && G !== null && H && H?.(X, G), function() {
      B?.();
    };
  }, []), ne.useEffect(function() {
    if (w) {
      var X = $.current;
      if (X) {
        var G = function() {
          var ee = M.state, Q = ee.positionX, ue = ee.positionY;
          X.style.backgroundPosition = "".concat(Q, "px ").concat(ue, "px");
        };
        return G(), M.onChange(G);
      }
    }
  }, [w, M]), S.jsxs("div", Vt({}, h, { ref: V, className: "".concat(Xs.wrapperClass, " ").concat(Rs.wrapper, " ").concat(r), style: d }, { children: [w && S.jsx("div", { ref: $, className: Rs.infiniteGrid, "aria-hidden": !0 }), S.jsx("div", Vt({}, _, { ref: W, className: "".concat(Xs.contentClass, " ").concat(Rs.content, " ").concat(f), style: Vt(Vt({}, p), { transform: $h(M.state.positionX, M.state.positionY, M.state.scale) }) }, { children: l }))] }));
};
function Hz(n, l) {
  var u = Math.max(0, Math.min(n.x + n.width, l.x + l.width) - Math.max(n.x, l.x)), r = Math.max(0, Math.min(n.y + n.height, l.y + l.height) - Math.max(n.y, l.y));
  return u * r;
}
function Bz(n) {
  var l = n.elementX, u = n.elementY, r = n.elementWidth, c = n.elementHeight, f = n.scale, d = n.positionX, p = n.positionY, v = n.viewportWidth, h = n.viewportHeight, y = n.margin, _ = y === void 0 ? 0 : y, A = n.threshold, w = A === void 0 ? 0 : A, M = {
    x: -_,
    y: -_,
    width: v + 2 * _,
    height: h + 2 * _
  }, H = {
    x: l * f + d,
    y: u * f + p,
    width: r * f,
    height: c * f
  };
  if (w <= 0) {
    var B = H.x < M.x + M.width && H.x + H.width > M.x, V = H.y < M.y + M.height && H.y + H.height > M.y;
    return B && V;
  }
  var W = H.width * H.height;
  if (W <= 0)
    return !1;
  var $ = Hz(M, H);
  return $ / W >= w;
}
Fu.forwardRef(function(n, l) {
  var u = n.x, r = n.y, c = n.width, f = n.height, d = n.margin, p = d === void 0 ? 0 : d, v = n.threshold, h = v === void 0 ? 0 : v, y = n.placeholder, _ = y === void 0 ? null : y, A = n.onShow, w = n.onHide, M = n.children, H = n.className, B = n.style, V = ne.useContext(yl), W = ne.useState(!1), $ = W[0], X = W[1], G = ne.useRef(!1), ee = ne.useRef(A), Q = ne.useRef(w);
  return ee.current = A, Q.current = w, ne.useEffect(function() {
    var ue = function() {
      var ge, ye, He = V.wrapperComponent;
      if (He) {
        var Qe = Bz({
          elementX: u,
          elementY: r,
          elementWidth: c,
          elementHeight: f,
          scale: V.state.scale,
          positionX: V.state.positionX,
          positionY: V.state.positionY,
          viewportWidth: He.offsetWidth,
          viewportHeight: He.offsetHeight,
          margin: p,
          threshold: h
        });
        Qe !== G.current && (G.current = Qe, X(Qe), Qe ? (ge = ee.current) === null || ge === void 0 || ge.call(ee) : (ye = Q.current) === null || ye === void 0 || ye.call(Q));
      }
    };
    ue();
    var Se = V.onChange(ue), ve;
    return V.wrapperComponent || (ve = V.onInit(function() {
      return ue();
    })), function() {
      Se(), ve?.();
    };
  }, [V, u, r, c, f, p, h]), $ ? S.jsx("div", Vt({ ref: l, className: H, style: B }, { children: M })) : _ ? S.jsx(S.Fragment, { children: _ }) : null;
});
var qz = function() {
  var n = ne.useContext(yl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, $z = function() {
  var n = qz();
  return Pu(n);
};
function Vz({ locked: n, onToggleLock: l }) {
  const { zoomIn: u, zoomOut: r, resetTransform: c } = $z();
  return /* @__PURE__ */ S.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => u(), disabled: n, children: /* @__PURE__ */ S.jsx(m0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => r(), disabled: n, children: /* @__PURE__ */ S.jsx(h0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => c(), children: /* @__PURE__ */ S.jsx(a0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: l, children: n ? /* @__PURE__ */ S.jsx(Ky, {}) : /* @__PURE__ */ S.jsx(Gy, {}) })
  ] });
}
function Lz({ hass: n, floor: l, language: u, selected: r, launched: c, disabled: f, onToggle: d }) {
  const [p, v] = ne.useState(!0), [h, y] = ne.useState({ width: 0, height: 0 }), [_, A] = ne.useState({ width: 0, height: 0 }), w = ne.useRef(null), M = n.states[l.map_entity], H = ne.useMemo(() => Mh(M), [M]), B = ne.useMemo(() => l2(M), [M]), V = ne.useMemo(() => o2(l), [l]), W = typeof M?.attributes.entity_picture == "string" ? M.attributes.entity_picture : void 0;
  ne.useEffect(() => {
    const X = w.current;
    if (!X) return;
    const G = new ResizeObserver(([ee]) => {
      A({ width: ee.contentRect.width, height: ee.contentRect.height });
    });
    return G.observe(X), () => G.disconnect();
  }, []);
  let $;
  return !M || M.state === "unavailable" ? $ = ce(u, "mapMissing") : W ? B.length < 3 ? $ = ce(u, "calibrationMissing") : H.length === 0 && ($ = ce(u, "roomsMissing")) : $ = ce(u, "imageMissing"), $ ? /* @__PURE__ */ S.jsx("div", { className: "map-error", role: "alert", children: $ }) : /* @__PURE__ */ S.jsx("div", { className: "map-shell", ref: w, children: /* @__PURE__ */ S.jsxs(
    Uz,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: p, step: 0.08 },
      pinch: { disabled: p },
      panning: { disabled: p, excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ S.jsx(Vz, { locked: p, onToggleLock: () => v((X) => !X) }),
        /* @__PURE__ */ S.jsx(Xz, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!h.width || !h.height || !_.width || !_.height) return;
              const X = Math.min(_.width / h.width, _.height / h.height);
              return { width: h.width * X, height: h.height * X };
            })(),
            children: [
              /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: n.hassUrl(W),
                  alt: `${l.name} vacuum map`,
                  draggable: !1,
                  onLoad: (X) => y({ width: X.currentTarget.naturalWidth, height: X.currentTarget.naturalHeight })
                }
              ),
              h.width > 0 && h.height > 0 && /* @__PURE__ */ S.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${h.width} ${h.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${l.name} rooms`,
                  children: H.map((X) => {
                    const G = V.get(X.segment_id), ee = !!G?.area_id, Q = r.has(X.segment_id), ue = c.has(X.segment_id), Se = r2(X, B), ve = G?.name || X.source_name, ge = f || !ee;
                    return /* @__PURE__ */ S.jsxs("g", { className: `room ${Q ? "selected" : ""} ${ue ? "launched" : ""} ${ee ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ S.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: u2(X, B),
                          role: "button",
                          tabIndex: ge ? -1 : 0,
                          "aria-label": `${ve}${ee ? "" : ` — ${ce(u, "roomUnmapped")}`}`,
                          "aria-pressed": Q,
                          "aria-disabled": ge,
                          onClick: () => !ge && d(X.segment_id),
                          onKeyDown: (ye) => {
                            !ge && (ye.key === "Enter" || ye.key === " ") && (ye.preventDefault(), d(X.segment_id));
                          },
                          children: /* @__PURE__ */ S.jsx("title", { children: ee ? ve : `${ve}: ${ce(u, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ S.jsxs("g", { className: "room-label", transform: `translate(${Se.x} ${Se.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ S.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ S.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ S.jsx(Dh, { icon: G?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ S.jsx("text", { y: "39", textAnchor: "middle", children: ve })
                      ] })
                    ] }, X.segment_id);
                  })
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}
function ul(n, l) {
  if (!l) return;
  const u = n.states[l];
  if (!(!u || ["unknown", "unavailable"].includes(u.state)))
    return `${u.state}${u.attributes.unit_of_measurement ? ` ${u.attributes.unit_of_measurement}` : ""}`;
}
function Gz(n, l, u) {
  if (!l) return;
  const r = n.states[l];
  if (!r || ["unknown", "unavailable"].includes(r.state)) return;
  const c = Number(r.state);
  if (!Number.isFinite(c) || c < 0) return;
  const f = String(r.attributes.unit_of_measurement ?? ""), d = f === "s" ? c / 60 : f === "min" ? c : f === "d" ? c * 24 * 60 : c * 60, p = Math.max(0, Math.round(d)), v = Math.floor(p / 60), h = p % 60;
  return `${[
    v > 0 ? `${v} ${u === "nl" ? "u" : "h"}` : void 0,
    h > 0 || v === 0 ? `${h} min` : void 0
  ].filter(Boolean).join(" ")} ${ce(u, "remaining")}`;
}
function Qz(n, l) {
  if (l === "washing_the_mop") return ce(n, "washingMop");
}
function Kz(n, l) {
  const u = n.entities?.map_select ? l.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((r) => r.map_select_option === u) ?? n.floors[0];
}
function Jz({ hass: n, config: l }) {
  const u = ne.useRef(n), r = ne.useRef(!1), c = l.language, [f, d] = ne.useState(() => Kz(l, n).id), p = l.floors.find((Y) => Y.id === f) ?? l.floors[0], [v, h] = ne.useState(/* @__PURE__ */ new Set()), [y, _] = ne.useState(!1), [A, w] = ne.useState(), [M, H] = ne.useState({ phase: "idle" }), B = ne.useMemo(() => d2(n, l), [n, l]), V = ne.useMemo(() => E2(l, B), [l, B]), W = V.find(({ preset: Y, available: ae }) => Y.id === l.default_preset && ae)?.preset ?? V.find(({ available: Y }) => Y)?.preset, [$, X] = ne.useState(
    () => jh(W ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), G = n.states[l.entity];
  ne.useEffect(() => {
    u.current = n;
  }, [n]);
  const ee = l.entities?.status ? n.states[l.entities.status]?.state : void 0, Q = p2(G?.state) || ee === "washing_the_mop";
  ne.useEffect(() => {
    M.phase === "starting" && Q ? H((Y) => ({ ...Y, phase: "active" })) : M.phase === "active" && !Q && (H({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [M.phase, Q]);
  const ue = new Set(M.floor_id === p.id ? M.segment_ids ?? [] : []), Se = p.rooms.filter((Y) => v.has(Y.segment_id)), ve = Se.map((Y) => Y.name), ge = l.entities?.dock_mop_drying ? n.states[l.entities.dock_mop_drying]?.state === "on" : !1, ye = [
    Qz(c, ee),
    ge ? ce(c, "dryingMop") : void 0,
    ge ? Gz(n, l.entities?.dock_mop_drying_remaining_time, c) : void 0
  ].filter((Y) => !!Y), He = [
    { icon: /* @__PURE__ */ S.jsx(By, {}), label: ce(c, "battery"), value: ul(n, l.entities?.battery) },
    { icon: /* @__PURE__ */ S.jsx(Wy, {}), label: ce(c, "room"), value: ul(n, l.entities?.current_room) },
    { icon: /* @__PURE__ */ S.jsx(l0, {}), label: ce(c, "area"), value: ul(n, l.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ S.jsx($y, {}), label: ce(c, "duration"), value: ul(n, l.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ S.jsx(s0, {}), label: ce(c, "progress"), value: ul(n, l.entities?.cleaning_progress) }
  ].filter((Y) => Y.value), Qe = (Y) => {
    d(Y), h(/* @__PURE__ */ new Set()), _(!1);
  }, it = () => {
    const Y = p.rooms.filter((ae) => ae.include_in_floor_clean !== !1 && ae.area_id).map((ae) => ae.segment_id);
    h(new Set(Y)), _(!0);
  }, j = async () => {
    if (!r.current) {
      r.current = !0, H({ phase: "submitting", floor_id: p.id, segment_ids: [...v] });
      try {
        await b2({ getHass: () => u.current, config: l, floor: p, rooms: Se, draft: $ }), H({ phase: "starting", floor_id: p.id, segment_ids: [...v] }), _(!1), w(ce(c, "launched"));
      } catch (Y) {
        const ae = Y instanceof Fe ? `${Y.operation}: ${Y.message}` : String(Y);
        H({ phase: "failed", floor_id: p.id, segment_ids: [...v], error: ae }), w(ae);
      } finally {
        r.current = !1;
      }
    }
  }, q = async (Y) => {
    try {
      await u.current.callService("vacuum", Y, {}, { entity_id: l.entity });
    } catch (ae) {
      w(`${Y}: ${ae instanceof Error ? ae.message : String(ae)}`);
    }
  };
  return /* @__PURE__ */ S.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ S.jsxs("div", { children: [
        /* @__PURE__ */ S.jsx("h1", { children: l.name ?? G?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ S.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ S.jsx("span", { className: `state-dot state-${G?.state ?? "unavailable"}` }),
          /* @__PURE__ */ S.jsx("span", { children: G?.state?.replaceAll("_", " ") ?? "unavailable" }),
          ye.map((Y) => /* @__PURE__ */ S.jsx("span", { className: "state-detail", children: ` · ${Y}` }, Y))
        ] })
      ] }),
      He.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "status-strip", children: He.map((Y) => /* @__PURE__ */ S.jsxs("div", { title: Y.label, children: [
        Y.icon,
        /* @__PURE__ */ S.jsx("strong", { children: Y.value })
      ] }, Y.label)) })
    ] }),
    l.floors.length > 1 && /* @__PURE__ */ S.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": ce(c, "floor"), children: l.floors.map((Y) => /* @__PURE__ */ S.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": p.id === Y.id,
        className: p.id === Y.id ? "active" : "",
        onClick: () => Qe(Y.id),
        children: Y.name
      },
      Y.id
    )) }),
    /* @__PURE__ */ S.jsx(
      Lz,
      {
        hass: n,
        floor: p,
        language: c,
        selected: v,
        launched: ue,
        disabled: M.phase === "submitting" || M.phase === "starting" || M.phase === "active",
        onToggle: (Y) => h((ae) => {
          const fe = new Set(ae);
          return fe.has(Y) ? fe.delete(Y) : fe.add(Y), fe;
        })
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ S.jsxs("div", { children: [
        /* @__PURE__ */ S.jsx("strong", { children: ce(c, "selectedRooms") }),
        /* @__PURE__ */ S.jsx("span", { children: ve.length ? ve.join(" · ") : ce(c, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ S.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ S.jsxs("button", { type: "button", className: "secondary", onClick: it, disabled: M.phase === "submitting", children: [
        /* @__PURE__ */ S.jsx(pp, {}),
        " ",
        ce(c, "entireFloor")
      ] }),
      /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => _(!0), disabled: v.size === 0 || M.phase === "submitting", children: ce(c, "configureJob") })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      G?.state === "paused" && B.canStart && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => q("start"), children: [
        /* @__PURE__ */ S.jsx(e0, {}),
        ce(c, "resume")
      ] }),
      G?.state === "cleaning" && B.canPause && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => q("pause"), children: [
        /* @__PURE__ */ S.jsx(Fy, {}),
        ce(c, "pause")
      ] }),
      B.canStop && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => q("stop"), children: [
        /* @__PURE__ */ S.jsx(r0, {}),
        ce(c, "stop")
      ] }),
      B.canDock && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => q("return_to_base"), children: [
        /* @__PURE__ */ S.jsx(pp, {}),
        ce(c, "dock")
      ] })
    ] }),
    y && /* @__PURE__ */ S.jsx(
      A2,
      {
        language: c,
        draft: $,
        capabilities: B,
        presets: V,
        selectedRoomNames: ve,
        submitting: M.phase === "submitting",
        onDraftChange: X,
        onClose: () => M.phase !== "submitting" && _(!1),
        onStart: j
      }
    ),
    A && /* @__PURE__ */ S.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ S.jsx("span", { children: A }),
      /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": ce(c, "close"), onClick: () => w(void 0), children: /* @__PURE__ */ S.jsx(Fp, {}) })
    ] })
  ] });
}
const Wz = ":host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.preset-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px}.preset-grid button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;min-height:92px;padding:10px;border:1px solid var(--rvm-border);border-radius:15px;background:transparent;cursor:pointer}.preset-grid button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.preset-grid ha-icon{width:25px;height:25px}.preset-grid small{color:var(--rvm-danger);font-size:10px;line-height:1.2}.job-fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.preset-grid{grid-template-columns:1fr 1fr}.job-fields,.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}", Pz = "0.1.1";
class Fh extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const l = this.attachShadow({ mode: "open" }), u = document.createElement("style");
    u.textContent = Wz, l.append(u), this.container = document.createElement("div"), l.append(this.container);
  }
  renderReact(l) {
    this.root ??= jy.createRoot(this.container), this.root.render(l);
  }
}
class Fz extends Fh {
  config;
  homeAssistant;
  setConfig(l) {
    this.config = a2(l), this.render();
  }
  set hass(l) {
    this.homeAssistant = l, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ S.jsx(Jz, { hass: this.homeAssistant, config: this.config }));
  }
  getCardSize() {
    return 10;
  }
  getGridOptions() {
    return { columns: 12, min_rows: 8 };
  }
  static getConfigElement() {
    return document.createElement("roborock-vacuum-map-card-editor");
  }
  static getStubConfig() {
    return Ch();
  }
}
class Iz extends Fh {
  config = Ch();
  homeAssistant;
  setConfig(l) {
    this.config = structuredClone(l), this.render();
  }
  set hass(l) {
    this.homeAssistant = l, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ S.jsx(
        f2,
        {
          hass: this.homeAssistant,
          config: this.config,
          onChange: (l) => {
            this.config = l, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: l }, bubbles: !0, composed: !0 })), this.render();
          }
        }
      )
    );
  }
}
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Fz);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", Iz);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Pz} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Fz as RoborockVacuumMapCard,
  Iz as RoborockVacuumMapCardEditor
};
