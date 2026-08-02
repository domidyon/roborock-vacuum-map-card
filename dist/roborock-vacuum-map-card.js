function Wp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var _s = { exports: {} }, al = {};
var tp;
function Sy() {
  if (tp) return al;
  tp = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(r, c, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: a,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return al.Fragment = l, al.jsx = u, al.jsxs = u, al;
}
var np;
function zy() {
  return np || (np = 1, _s.exports = Sy()), _s.exports;
}
var S = zy(), Ss = { exports: {} }, il = {}, zs = { exports: {} }, Ts = {};
var ap;
function Ty() {
  return ap || (ap = 1, (function(a) {
    function l(j, $) {
      var ee = j.length;
      j.push($);
      e: for (; 0 < ee; ) {
        var Se = ee - 1 >>> 1, ze = j[Se];
        if (0 < c(ze, $))
          j[Se] = $, j[ee] = ze, ee = Se;
        else break e;
      }
    }
    function u(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0) return null;
      var $ = j[0], ee = j.pop();
      if (ee !== $) {
        j[0] = ee;
        e: for (var Se = 0, ze = j.length, T = ze >>> 1; Se < T; ) {
          var U = 2 * (Se + 1) - 1, L = j[U], Q = U + 1, le = j[Q];
          if (0 > c(L, ee))
            Q < ze && 0 > c(le, L) ? (j[Se] = le, j[Q] = ee, Se = Q) : (j[Se] = L, j[U] = ee, Se = U);
          else if (Q < ze && 0 > c(le, ee))
            j[Se] = le, j[Q] = ee, Se = Q;
          else break e;
        }
      }
      return $;
    }
    function c(j, $) {
      var ee = j.sortIndex - $.sortIndex;
      return ee !== 0 ? ee : j.id - $.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, p = d.now();
      a.unstable_now = function() {
        return d.now() - p;
      };
    }
    var v = [], h = [], y = 1, _ = null, A = 3, w = !1, M = !1, H = !1, X = !1, B = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function k(j) {
      for (var $ = u(h); $ !== null; ) {
        if ($.callback === null) r(h);
        else if ($.startTime <= j)
          r(h), $.sortIndex = $.expirationTime, l(v, $);
        else break;
        $ = u(h);
      }
    }
    function V(j) {
      if (H = !1, k(j), !M)
        if (u(v) !== null)
          M = !0, te || (te = !0, pe());
        else {
          var $ = u(h);
          $ !== null && Oe(V, $.startTime - j);
        }
    }
    var te = !1, G = -1, ie = 5, ye = -1;
    function _e() {
      return X ? !0 : !(a.unstable_now() - ye < ie);
    }
    function be() {
      if (X = !1, te) {
        var j = a.unstable_now();
        ye = j;
        var $ = !0;
        try {
          e: {
            M = !1, H && (H = !1, P(G), G = -1), w = !0;
            var ee = A;
            try {
              t: {
                for (k(j), _ = u(v); _ !== null && !(_.expirationTime > j && _e()); ) {
                  var Se = _.callback;
                  if (typeof Se == "function") {
                    _.callback = null, A = _.priorityLevel;
                    var ze = Se(
                      _.expirationTime <= j
                    );
                    if (j = a.unstable_now(), typeof ze == "function") {
                      _.callback = ze, k(j), $ = !0;
                      break t;
                    }
                    _ === u(v) && r(v), k(j);
                  } else r(v);
                  _ = u(v);
                }
                if (_ !== null) $ = !0;
                else {
                  var T = u(h);
                  T !== null && Oe(
                    V,
                    T.startTime - j
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              _ = null, A = ee, w = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? pe() : te = !1;
        }
      }
    }
    var pe;
    if (typeof q == "function")
      pe = function() {
        q(be);
      };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), W = ke.port2;
      ke.port1.onmessage = be, pe = function() {
        W.postMessage(null);
      };
    } else
      pe = function() {
        B(be, 0);
      };
    function Oe(j, $) {
      G = B(function() {
        j(a.unstable_now());
      }, $);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, a.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ie = 0 < j ? Math.floor(1e3 / j) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, a.unstable_next = function(j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = A;
      }
      var ee = A;
      A = $;
      try {
        return j();
      } finally {
        A = ee;
      }
    }, a.unstable_requestPaint = function() {
      X = !0;
    }, a.unstable_runWithPriority = function(j, $) {
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
      var ee = A;
      A = j;
      try {
        return $();
      } finally {
        A = ee;
      }
    }, a.unstable_scheduleCallback = function(j, $, ee) {
      var Se = a.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? Se + ee : Se) : ee = Se, j) {
        case 1:
          var ze = -1;
          break;
        case 2:
          ze = 250;
          break;
        case 5:
          ze = 1073741823;
          break;
        case 4:
          ze = 1e4;
          break;
        default:
          ze = 5e3;
      }
      return ze = ee + ze, j = {
        id: y++,
        callback: $,
        priorityLevel: j,
        startTime: ee,
        expirationTime: ze,
        sortIndex: -1
      }, ee > Se ? (j.sortIndex = ee, l(h, j), u(v) === null && j === u(h) && (H ? (P(G), G = -1) : H = !0, Oe(V, ee - Se))) : (j.sortIndex = ze, l(v, j), M || w || (M = !0, te || (te = !0, pe()))), j;
    }, a.unstable_shouldYield = _e, a.unstable_wrapCallback = function(j) {
      var $ = A;
      return function() {
        var ee = A;
        A = $;
        try {
          return j.apply(this, arguments);
        } finally {
          A = ee;
        }
      };
    };
  })(Ts)), Ts;
}
var ip;
function Ey() {
  return ip || (ip = 1, zs.exports = Ty()), zs.exports;
}
var Es = { exports: {} }, ue = {};
var lp;
function Ay() {
  if (lp) return ue;
  lp = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
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
  }, H = Object.assign, X = {};
  function B(T, U, L) {
    this.props = T, this.context = U, this.refs = X, this.updater = L || M;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(T, U) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, U, "setState");
  }, B.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function P() {
  }
  P.prototype = B.prototype;
  function q(T, U, L) {
    this.props = T, this.context = U, this.refs = X, this.updater = L || M;
  }
  var k = q.prototype = new P();
  k.constructor = q, H(k, B.prototype), k.isPureReactComponent = !0;
  var V = Array.isArray;
  function te() {
  }
  var G = { H: null, A: null, T: null, S: null }, ie = Object.prototype.hasOwnProperty;
  function ye(T, U, L) {
    var Q = L.ref;
    return {
      $$typeof: a,
      type: T,
      key: U,
      ref: Q !== void 0 ? Q : null,
      props: L
    };
  }
  function _e(T, U) {
    return ye(T.type, U, T.props);
  }
  function be(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function pe(T) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(L) {
      return U[L];
    });
  }
  var ke = /\/+/g;
  function W(T, U) {
    return typeof T == "object" && T !== null && T.key != null ? pe("" + T.key) : U.toString(36);
  }
  function Oe(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(te, te) : (T.status = "pending", T.then(
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
  function j(T, U, L, Q, le) {
    var se = typeof T;
    (se === "undefined" || se === "boolean") && (T = null);
    var Te = !1;
    if (T === null) Te = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case l:
              Te = !0;
              break;
            case y:
              return Te = T._init, j(
                Te(T._payload),
                U,
                L,
                Q,
                le
              );
          }
      }
    if (Te)
      return le = le(T), Te = Q === "" ? "." + W(T, 0) : Q, V(le) ? (L = "", Te != null && (L = Te.replace(ke, "$&/") + "/"), j(le, U, L, "", function(_n) {
        return _n;
      })) : le != null && (be(le) && (le = _e(
        le,
        L + (le.key == null || T && T.key === le.key ? "" : ("" + le.key).replace(
          ke,
          "$&/"
        ) + "/") + Te
      )), U.push(le)), 1;
    Te = 0;
    var tt = Q === "" ? "." : Q + ":";
    if (V(T))
      for (var Xe = 0; Xe < T.length; Xe++)
        Q = T[Xe], se = tt + W(Q, Xe), Te += j(
          Q,
          U,
          L,
          se,
          le
        );
    else if (Xe = w(T), typeof Xe == "function")
      for (T = Xe.call(T), Xe = 0; !(Q = T.next()).done; )
        Q = Q.value, se = tt + W(Q, Xe++), Te += j(
          Q,
          U,
          L,
          se,
          le
        );
    else if (se === "object") {
      if (typeof T.then == "function")
        return j(
          Oe(T),
          U,
          L,
          Q,
          le
        );
      throw U = String(T), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function $(T, U, L) {
    if (T == null) return T;
    var Q = [], le = 0;
    return j(T, Q, "", "", function(se) {
      return U.call(L, se, le++);
    }), Q;
  }
  function ee(T) {
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
  var Se = typeof reportError == "function" ? reportError : function(T) {
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
  }, ze = {
    map: $,
    forEach: function(T, U, L) {
      $(
        T,
        function() {
          U.apply(this, arguments);
        },
        L
      );
    },
    count: function(T) {
      var U = 0;
      return $(T, function() {
        U++;
      }), U;
    },
    toArray: function(T) {
      return $(T, function(U) {
        return U;
      }) || [];
    },
    only: function(T) {
      if (!be(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return ue.Activity = _, ue.Children = ze, ue.Component = B, ue.Fragment = u, ue.Profiler = c, ue.PureComponent = q, ue.StrictMode = r, ue.Suspense = v, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return G.H.useMemoCache(T);
    }
  }, ue.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(T, U, L) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var Q = H({}, T.props), le = T.key;
    if (U != null)
      for (se in U.key !== void 0 && (le = "" + U.key), U)
        !ie.call(U, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && U.ref === void 0 || (Q[se] = U[se]);
    var se = arguments.length - 2;
    if (se === 1) Q.children = L;
    else if (1 < se) {
      for (var Te = Array(se), tt = 0; tt < se; tt++)
        Te[tt] = arguments[tt + 2];
      Q.children = Te;
    }
    return ye(T.type, le, Q);
  }, ue.createContext = function(T) {
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
  }, ue.createElement = function(T, U, L) {
    var Q, le = {}, se = null;
    if (U != null)
      for (Q in U.key !== void 0 && (se = "" + U.key), U)
        ie.call(U, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (le[Q] = U[Q]);
    var Te = arguments.length - 2;
    if (Te === 1) le.children = L;
    else if (1 < Te) {
      for (var tt = Array(Te), Xe = 0; Xe < Te; Xe++)
        tt[Xe] = arguments[Xe + 2];
      le.children = tt;
    }
    if (T && T.defaultProps)
      for (Q in Te = T.defaultProps, Te)
        le[Q] === void 0 && (le[Q] = Te[Q]);
    return ye(T, se, le);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(T) {
    return { $$typeof: p, render: T };
  }, ue.isValidElement = be, ue.lazy = function(T) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: T },
      _init: ee
    };
  }, ue.memo = function(T, U) {
    return {
      $$typeof: h,
      type: T,
      compare: U === void 0 ? null : U
    };
  }, ue.startTransition = function(T) {
    var U = G.T, L = {};
    G.T = L;
    try {
      var Q = T(), le = G.S;
      le !== null && le(L, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(te, Se);
    } catch (se) {
      Se(se);
    } finally {
      U !== null && L.types !== null && (U.types = L.types), G.T = U;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, ue.use = function(T) {
    return G.H.use(T);
  }, ue.useActionState = function(T, U, L) {
    return G.H.useActionState(T, U, L);
  }, ue.useCallback = function(T, U) {
    return G.H.useCallback(T, U);
  }, ue.useContext = function(T) {
    return G.H.useContext(T);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(T, U) {
    return G.H.useDeferredValue(T, U);
  }, ue.useEffect = function(T, U) {
    return G.H.useEffect(T, U);
  }, ue.useEffectEvent = function(T) {
    return G.H.useEffectEvent(T);
  }, ue.useId = function() {
    return G.H.useId();
  }, ue.useImperativeHandle = function(T, U, L) {
    return G.H.useImperativeHandle(T, U, L);
  }, ue.useInsertionEffect = function(T, U) {
    return G.H.useInsertionEffect(T, U);
  }, ue.useLayoutEffect = function(T, U) {
    return G.H.useLayoutEffect(T, U);
  }, ue.useMemo = function(T, U) {
    return G.H.useMemo(T, U);
  }, ue.useOptimistic = function(T, U) {
    return G.H.useOptimistic(T, U);
  }, ue.useReducer = function(T, U, L) {
    return G.H.useReducer(T, U, L);
  }, ue.useRef = function(T) {
    return G.H.useRef(T);
  }, ue.useState = function(T) {
    return G.H.useState(T);
  }, ue.useSyncExternalStore = function(T, U, L) {
    return G.H.useSyncExternalStore(
      T,
      U,
      L
    );
  }, ue.useTransition = function() {
    return G.H.useTransition();
  }, ue.version = "19.2.8", ue;
}
var up;
function Hs() {
  return up || (up = 1, Es.exports = Ay()), Es.exports;
}
var As = { exports: {} }, ft = {};
var rp;
function wy() {
  if (rp) return ft;
  rp = 1;
  var a = Hs();
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
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
  if (op) return As.exports;
  op = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), As.exports = wy(), As.exports;
}
var sp;
function xy() {
  if (sp) return il;
  sp = 1;
  var a = Ey(), l = Hs(), u = Oy();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
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
    for (var n = e, i = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (i = o.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === n) return v(o), e;
          if (s === i) return v(o), t;
          s = s.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) n = o, i = s;
      else {
        for (var m = !1, g = o.child; g; ) {
          if (g === n) {
            m = !0, n = o, i = s;
            break;
          }
          if (g === i) {
            m = !0, i = o, n = s;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = s.child; g; ) {
            if (g === n) {
              m = !0, n = s, i = o;
              break;
            }
            if (g === i) {
              m = !0, i = s, n = o;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
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
  var _ = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), ie = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.activity"), _e = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), be = Symbol.iterator;
  function pe(e) {
    return e === null || typeof e != "object" ? null : (e = be && e[be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ke = /* @__PURE__ */ Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case B:
        return "Profiler";
      case X:
        return "StrictMode";
      case V:
        return "Suspense";
      case te:
        return "SuspenseList";
      case ye:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case P:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : W(e.type) || "Memo";
        case ie:
          t = e._payload, e = e._init;
          try {
            return W(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, j = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Se = [], ze = -1;
  function T(e) {
    return { current: e };
  }
  function U(e) {
    0 > ze || (e.current = Se[ze], Se[ze] = null, ze--);
  }
  function L(e, t) {
    ze++, Se[ze] = e.current, e.current = t;
  }
  var Q = T(null), le = T(null), se = T(null), Te = T(null);
  function tt(e, t) {
    switch (L(se, t), L(le, e), L(Q, null), t.nodeType) {
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
    U(Q), L(Q, e);
  }
  function Xe() {
    U(Q), U(le), U(se);
  }
  function _n(e) {
    e.memoizedState !== null && L(Te, e);
    var t = Q.current, n = Am(t, e.type);
    t !== n && (L(le, e), L(Q, n));
  }
  function Pn(e) {
    le.current === e && (U(Q), U(le)), Te.current === e && (U(Te), Ii._currentValue = ee);
  }
  var ci, bl;
  function Jt(e) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ci = t && t[1] || "", bl = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ci + e + bl;
  }
  var nr = !1;
  function ar(e, t) {
    if (!e || nr) return "";
    nr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (N) {
                  var C = N;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (N) {
                  C = N;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                C = N;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
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
`), x = g.split(`
`);
        for (o = i = 0; i < b.length && !b[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < x.length && !x[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === b.length || o === x.length)
          for (i = b.length - 1, o = x.length - 1; 1 <= i && 0 <= o && b[i] !== x[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (b[i] !== x[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || b[i] !== x[o]) {
                  var D = `
` + b[i].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      nr = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Jt(n) : "";
  }
  function Fh(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Jt(e.type);
      case 16:
        return Jt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Jt("Suspense Fallback") : Jt("Suspense");
      case 19:
        return Jt("SuspenseList");
      case 0:
      case 15:
        return ar(e.type, !1);
      case 11:
        return ar(e.type.render, !1);
      case 1:
        return ar(e.type, !0);
      case 31:
        return Jt("Activity");
      default:
        return "";
    }
  }
  function ec(e) {
    try {
      var t = "", n = null;
      do
        t += Fh(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var ir = Object.prototype.hasOwnProperty, lr = a.unstable_scheduleCallback, ur = a.unstable_cancelCallback, Ih = a.unstable_shouldYield, ev = a.unstable_requestPaint, Tt = a.unstable_now, tv = a.unstable_getCurrentPriorityLevel, tc = a.unstable_ImmediatePriority, nc = a.unstable_UserBlockingPriority, _l = a.unstable_NormalPriority, nv = a.unstable_LowPriority, ac = a.unstable_IdlePriority, av = a.log, iv = a.unstable_setDisableYieldValue, fi = null, Et = null;
  function Sn(e) {
    if (typeof av == "function" && iv(e), Et && typeof Et.setStrictMode == "function")
      try {
        Et.setStrictMode(fi, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : rv, lv = Math.log, uv = Math.LN2;
  function rv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (lv(e) / uv | 0) | 0;
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
  function El(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, s = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var g = i & 134217727;
    return g !== 0 ? (i = g & ~s, i !== 0 ? o = Fn(i) : (m &= g, m !== 0 ? o = Fn(m) : n || (n = g & ~e, n !== 0 && (o = Fn(n))))) : (g = i & ~s, g !== 0 ? o = Fn(g) : m !== 0 ? o = Fn(m) : n || (n = i & ~e, n !== 0 && (o = Fn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function di(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ov(e, t) {
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
  function rr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function mi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function sv(e, t, n, i, o, s) {
    var m = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, b = e.expirationTimes, x = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var D = 31 - At(n), Y = 1 << D;
      g[D] = 0, b[D] = -1;
      var C = x[D];
      if (C !== null)
        for (x[D] = null, D = 0; D < C.length; D++) {
          var N = C[D];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~Y;
    }
    i !== 0 && lc(e, i, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(m & ~t));
  }
  function lc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function uc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - At(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function rc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : or(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function or(e) {
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
  function sr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function oc() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Km(e.type));
  }
  function sc(e, t) {
    var n = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = n;
    }
  }
  var zn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + zn, ht = "__reactProps$" + zn, Sa = "__reactContainer$" + zn, cr = "__reactEvents$" + zn, cv = "__reactListeners$" + zn, fv = "__reactHandles$" + zn, cc = "__reactResources$" + zn, pi = "__reactMarker$" + zn;
  function fr(e) {
    delete e[lt], delete e[ht], delete e[cr], delete e[cv], delete e[fv];
  }
  function za(e) {
    var t = e[lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Sa] || n[lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = jm(e); e !== null; ) {
            if (n = e[lt]) return n;
            e = jm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
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
  function hi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ea(e) {
    var t = e[cc];
    return t || (t = e[cc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[pi] = !0;
  }
  var fc = /* @__PURE__ */ new Set(), dc = {};
  function In(e, t) {
    Aa(e, t), Aa(e + "Capture", t);
  }
  function Aa(e, t) {
    for (dc[e] = t, e = 0; e < t.length; e++)
      fc.add(t[e]);
  }
  var dv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), mc = {}, pc = {};
  function mv(e) {
    return ir.call(pc, e) ? !0 : ir.call(mc, e) ? !1 : dv.test(e) ? pc[e] = !0 : (mc[e] = !0, !1);
  }
  function Al(e, t, n) {
    if (mv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
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
        e.setAttribute(t, "" + n);
      }
  }
  function wl(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function tn(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function Dt(e) {
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
  function pv(e, t, n) {
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
          n = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(m) {
          n = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function dr(e) {
    if (!e._valueTracker) {
      var t = hc(e) ? "checked" : "value";
      e._valueTracker = pv(
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
    var n = t.getValue(), i = "";
    return e && (i = hc(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var hv = /[\n"\\]/g;
  function Zt(e) {
    return e.replace(
      hv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mr(e, t, n, i, o, s, m, g) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Dt(t)) : e.value !== "" + Dt(t) && (e.value = "" + Dt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? pr(e, m, Dt(t)) : n != null ? pr(e, m, Dt(n)) : i != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Dt(g) : e.removeAttribute("name");
  }
  function gc(e, t, n, i, o, s, m, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        dr(e);
        return;
      }
      n = n != null ? "" + Dt(n) : "", t = t != null ? "" + Dt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = g ? e.checked : !!i, e.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), dr(e);
  }
  function pr(e, t, n) {
    t === "number" && Ol(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function wa(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Dt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yc(e, t, n) {
    if (t != null && (t = "" + Dt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Dt(n) : "";
  }
  function bc(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (Oe(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = Dt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), dr(e);
  }
  function Oa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _c(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || vv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Sc(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && n[o] !== i && _c(e, o, i);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && _c(e, s, t[s]);
  }
  function hr(e) {
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
  var gv = /* @__PURE__ */ new Map([
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
  ]), yv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xl(e) {
    return yv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function nn() {
  }
  var vr = null;
  function gr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var xa = null, Ca = null;
  function zc(e) {
    var t = Ta(e);
    if (t && (e = t.stateNode)) {
      var n = e[ht] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (mr(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Zt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[ht] || null;
                if (!o) throw Error(r(90));
                mr(
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
            for (t = 0; t < n.length; t++)
              i = n[t], i.form === e.form && vc(i);
          }
          break e;
        case "textarea":
          yc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && wa(e, !!n.multiple, t, !1);
      }
    }
  }
  var yr = !1;
  function Tc(e, t, n) {
    if (yr) return e(t, n);
    yr = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (yr = !1, (xa !== null || Ca !== null) && (hu(), xa && (t = xa, e = Ca, Ca = xa = null, zc(t), e)))
        for (t = 0; t < e.length; t++) zc(e[t]);
    }
  }
  function vi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[ht] || null;
    if (i === null) return null;
    n = i[t];
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
    if (n && typeof n != "function")
      throw Error(
        r(231, t, typeof n)
      );
    return n;
  }
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), br = !1;
  if (an)
    try {
      var gi = {};
      Object.defineProperty(gi, "passive", {
        get: function() {
          br = !0;
        }
      }), window.addEventListener("test", gi, gi), window.removeEventListener("test", gi, gi);
    } catch {
      br = !1;
    }
  var Tn = null, _r = null, Cl = null;
  function Ec() {
    if (Cl) return Cl;
    var e, t = _r, n = t.length, i, o = "value" in Tn ? Tn.value : Tn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var m = n - e;
    for (i = 1; i <= m && t[n - i] === o[s - i]; i++) ;
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
    function t(n, i, o, s, m) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Nl : Ac, this.isPropagationStopped = Ac, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nl);
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
  }, jl = vt(ea), yi = _({}, ea, { view: 0, detail: 0 }), bv = vt(yi), Sr, zr, bi, Dl = _({}, yi, {
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
    getModifierState: Er,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== bi && (bi && e.type === "mousemove" ? (Sr = e.screenX - bi.screenX, zr = e.screenY - bi.screenY) : zr = Sr = 0, bi = e), Sr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zr;
    }
  }), wc = vt(Dl), _v = _({}, Dl, { dataTransfer: 0 }), Sv = vt(_v), zv = _({}, yi, { relatedTarget: 0 }), Tr = vt(zv), Tv = _({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ev = vt(Tv), Av = _({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), wv = vt(Av), Ov = _({}, ea, { data: 0 }), Oc = vt(Ov), xv = {
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
  }, Cv = {
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
  }, Mv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Nv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mv[e]) ? !!t[e] : !1;
  }
  function Er() {
    return Nv;
  }
  var jv = _({}, yi, {
    key: function(e) {
      if (e.key) {
        var t = xv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Er,
    charCode: function(e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Dv = vt(jv), Zv = _({}, Dl, {
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
  }), xc = vt(Zv), Rv = _({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Er
  }), Uv = vt(Rv), Yv = _({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = vt(Yv), Xv = _({}, Dl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hv = vt(Xv), Bv = _({}, ea, {
    newState: 0,
    oldState: 0
  }), qv = vt(Bv), $v = [9, 13, 27, 32], Ar = an && "CompositionEvent" in window, _i = null;
  an && "documentMode" in document && (_i = document.documentMode);
  var Lv = an && "TextEvent" in window && !_i, Cc = an && (!Ar || _i && 8 < _i && 11 >= _i), Mc = " ", Nc = !1;
  function jc(e, t) {
    switch (e) {
      case "keyup":
        return $v.indexOf(t.keyCode) !== -1;
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
  function Vv(e, t) {
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
  function Gv(e, t) {
    if (Ma)
      return e === "compositionend" || !Ar && jc(e, t) ? (e = Ec(), Cl = _r = Tn = null, Ma = !1, e) : null;
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
  var Qv = {
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
    return t === "input" ? !!Qv[e.type] : t === "textarea";
  }
  function Rc(e, t, n, i) {
    xa ? Ca ? Ca.push(i) : Ca = [i] : xa = i, t = zu(t, "onChange"), 0 < t.length && (n = new jl(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var Si = null, zi = null;
  function Kv(e) {
    ym(e, 0);
  }
  function Zl(e) {
    var t = hi(e);
    if (vc(t)) return e;
  }
  function Uc(e, t) {
    if (e === "change") return t;
  }
  var Yc = !1;
  if (an) {
    var wr;
    if (an) {
      var Or = "oninput" in document;
      if (!Or) {
        var kc = document.createElement("div");
        kc.setAttribute("oninput", "return;"), Or = typeof kc.oninput == "function";
      }
      wr = Or;
    } else wr = !1;
    Yc = wr && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    Si && (Si.detachEvent("onpropertychange", Hc), zi = Si = null);
  }
  function Hc(e) {
    if (e.propertyName === "value" && Zl(zi)) {
      var t = [];
      Rc(
        t,
        zi,
        e,
        gr(e)
      ), Tc(Kv, t);
    }
  }
  function Jv(e, t, n) {
    e === "focusin" ? (Xc(), Si = t, zi = n, Si.attachEvent("onpropertychange", Hc)) : e === "focusout" && Xc();
  }
  function Wv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zl(zi);
  }
  function Pv(e, t) {
    if (e === "click") return Zl(t);
  }
  function Fv(e, t) {
    if (e === "input" || e === "change")
      return Zl(t);
  }
  function Iv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var wt = typeof Object.is == "function" ? Object.is : Iv;
  function Ti(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!ir.call(t, o) || !wt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Bc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qc(e, t) {
    var n = Bc(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t)
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Bc(n);
    }
  }
  function $c(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $c(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ol(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ol(e.document);
    }
    return t;
  }
  function xr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var eg = an && "documentMode" in document && 11 >= document.documentMode, Na = null, Cr = null, Ei = null, Mr = !1;
  function Vc(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Mr || Na == null || Na !== Ol(i) || (i = Na, "selectionStart" in i && xr(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ei && Ti(Ei, i) || (Ei = i, i = zu(Cr, "onSelect"), 0 < i.length && (t = new jl(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = Na)));
  }
  function ta(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ja = {
    animationend: ta("Animation", "AnimationEnd"),
    animationiteration: ta("Animation", "AnimationIteration"),
    animationstart: ta("Animation", "AnimationStart"),
    transitionrun: ta("Transition", "TransitionRun"),
    transitionstart: ta("Transition", "TransitionStart"),
    transitioncancel: ta("Transition", "TransitionCancel"),
    transitionend: ta("Transition", "TransitionEnd")
  }, Nr = {}, Gc = {};
  an && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function na(e) {
    if (Nr[e]) return Nr[e];
    if (!ja[e]) return e;
    var t = ja[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Gc)
        return Nr[e] = t[n];
    return e;
  }
  var Qc = na("animationend"), Kc = na("animationiteration"), Jc = na("animationstart"), tg = na("transitionrun"), ng = na("transitionstart"), ag = na("transitioncancel"), Wc = na("transitionend"), Pc = /* @__PURE__ */ new Map(), jr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  jr.push("scrollEnd");
  function Vt(e, t) {
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
  }, Rt = [], Da = 0, Dr = 0;
  function Ul() {
    for (var e = Da, t = Dr = Da = 0; t < e; ) {
      var n = Rt[t];
      Rt[t++] = null;
      var i = Rt[t];
      Rt[t++] = null;
      var o = Rt[t];
      Rt[t++] = null;
      var s = Rt[t];
      if (Rt[t++] = null, i !== null && o !== null) {
        var m = i.pending;
        m === null ? o.next = o : (o.next = m.next, m.next = o), i.pending = o;
      }
      s !== 0 && Fc(n, o, s);
    }
  }
  function Yl(e, t, n, i) {
    Rt[Da++] = e, Rt[Da++] = t, Rt[Da++] = n, Rt[Da++] = i, Dr |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Zr(e, t, n, i) {
    return Yl(e, t, n, i), kl(e);
  }
  function aa(e, t) {
    return Yl(e, null, null, t), kl(e);
  }
  function Fc(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, s = e.return; s !== null; )
      s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (o = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - At(n), e = s.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), s) : null;
  }
  function kl(e) {
    if (50 < Gi)
      throw Gi = 0, Lo = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Za = {};
  function ig(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, n, i) {
    return new ig(e, t, n, i);
  }
  function Rr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Ic(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Xl(e, t, n, i, o, s) {
    var m = 0;
    if (i = e, typeof e == "function") Rr(e) && (m = 1);
    else if (typeof e == "string")
      m = sy(
        e,
        n,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ye:
          return e = Ot(31, n, t, o), e.elementType = ye, e.lanes = s, e;
        case H:
          return ia(n.children, o, s, t);
        case X:
          m = 8, o |= 24;
          break;
        case B:
          return e = Ot(12, n, t, o | 2), e.elementType = B, e.lanes = s, e;
        case V:
          return e = Ot(13, n, t, o), e.elementType = V, e.lanes = s, e;
        case te:
          return e = Ot(19, n, t, o), e.elementType = te, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                m = 10;
                break e;
              case P:
                m = 9;
                break e;
              case k:
                m = 11;
                break e;
              case G:
                m = 14;
                break e;
              case ie:
                m = 16, i = null;
                break e;
            }
          m = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Ot(m, n, t, o), t.elementType = e, t.type = i, t.lanes = s, t;
  }
  function ia(e, t, n, i) {
    return e = Ot(7, e, i, t), e.lanes = n, e;
  }
  function Ur(e, t, n) {
    return e = Ot(6, e, null, t), e.lanes = n, e;
  }
  function ef(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Yr(e, t, n) {
    return t = Ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var tf = /* @__PURE__ */ new WeakMap();
  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = tf.get(e);
      return n !== void 0 ? n : (t = {
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
  var Ra = [], Ua = 0, Hl = null, Ai = 0, Yt = [], kt = 0, En = null, Wt = 1, Pt = "";
  function un(e, t) {
    Ra[Ua++] = Ai, Ra[Ua++] = Hl, Hl = e, Ai = t;
  }
  function nf(e, t, n) {
    Yt[kt++] = Wt, Yt[kt++] = Pt, Yt[kt++] = En, En = e;
    var i = Wt;
    e = Pt;
    var o = 32 - At(i) - 1;
    i &= ~(1 << o), n += 1;
    var s = 32 - At(t) + o;
    if (30 < s) {
      var m = o - o % 5;
      s = (i & (1 << m) - 1).toString(32), i >>= m, o -= m, Wt = 1 << 32 - At(t) + o | n << o | i, Pt = s + e;
    } else
      Wt = 1 << s | n << o | i, Pt = e;
  }
  function kr(e) {
    e.return !== null && (un(e, 1), nf(e, 1, 0));
  }
  function Xr(e) {
    for (; e === Hl; )
      Hl = Ra[--Ua], Ra[Ua] = null, Ai = Ra[--Ua], Ra[Ua] = null;
    for (; e === En; )
      En = Yt[--kt], Yt[kt] = null, Pt = Yt[--kt], Yt[kt] = null, Wt = Yt[--kt], Yt[kt] = null;
  }
  function af(e, t) {
    Yt[kt++] = Wt, Yt[kt++] = Pt, Yt[kt++] = En, Wt = t.id, Pt = t.overflow, En = e;
  }
  var ut = null, Ue = null, he = !1, An = null, Xt = !1, Hr = Error(r(519));
  function wn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw wi(Ut(t, e)), Hr;
  }
  function lf(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[lt] = e, t[ht] = i, n) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ki.length; n++)
          fe(Ki[n], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), gc(
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
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), bc(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || zm(t.textContent, n) ? (i.popover != null && (fe("beforetoggle", t), fe("toggle", t)), i.onScroll != null && fe("scroll", t), i.onScrollEnd != null && fe("scrollend", t), i.onClick != null && (t.onclick = nn), t = !0) : t = !1, t || wn(e, !0);
  }
  function uf(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          Xt = !1;
          return;
        case 27:
        case 3:
          Xt = !0;
          return;
        default:
          ut = ut.return;
      }
  }
  function Ya(e) {
    if (e !== ut) return !1;
    if (!he) return uf(e), he = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || ls(e.type, e.memoizedProps)), n = !n), n && Ue && wn(e), uf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Nm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Nm(e);
    } else
      t === 27 ? (t = Ue, Hn(e.type) ? (e = cs, cs = null, Ue = e) : Ue = t) : Ue = ut ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function la() {
    Ue = ut = null, he = !1;
  }
  function Br() {
    var e = An;
    return e !== null && (_t === null ? _t = e : _t.push.apply(
      _t,
      e
    ), An = null), e;
  }
  function wi(e) {
    An === null ? An = [e] : An.push(e);
  }
  var qr = T(null), ua = null, rn = null;
  function On(e, t, n) {
    L(qr, t._currentValue), t._currentValue = n;
  }
  function on(e) {
    e._currentValue = qr.current, U(qr);
  }
  function $r(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Lr(e, t, n, i) {
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
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), $r(
                s.return,
                n,
                e
              ), i || (m = null);
              break e;
            }
          s = g.next;
        }
      } else if (o.tag === 18) {
        if (m = o.return, m === null) throw Error(r(341));
        m.lanes |= n, s = m.alternate, s !== null && (s.lanes |= n), $r(m, n, e), m = null;
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
  function ka(e, t, n, i) {
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
      } else if (o === Te.current) {
        if (m = o.alternate, m === null) throw Error(r(387));
        m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Ii) : e = [Ii]);
      }
      o = o.return;
    }
    e !== null && Lr(
      t,
      e,
      n,
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
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, rn === null) {
      if (e === null) throw Error(r(308));
      rn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else rn = rn.next = t;
    return n;
  }
  var lg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, ug = a.unstable_scheduleCallback, rg = a.unstable_NormalPriority, Je = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Vr() {
    return {
      controller: new lg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oi(e) {
    e.refCount--, e.refCount === 0 && ug(rg, function() {
      e.controller.abort();
    });
  }
  var xi = null, Gr = 0, Xa = 0, Ha = null;
  function og(e, t) {
    if (xi === null) {
      var n = xi = [];
      Gr = 0, Xa = Wo(), Ha = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Gr++, t.then(of, of), t;
  }
  function of() {
    if (--Gr === 0 && xi !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var e = xi;
      xi = null, Xa = 0, Ha = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sg(e, t) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), i;
  }
  var sf = j.S;
  j.S = function(e, t) {
    Gd = Tt(), typeof t == "object" && t !== null && typeof t.then == "function" && og(e, t), sf !== null && sf(e, t);
  };
  var oa = T(null);
  function Qr() {
    var e = oa.current;
    return e !== null ? e : Re.pooledCache;
  }
  function $l(e, t) {
    t === null ? L(oa, oa.current) : L(oa, t.pool);
  }
  function cf() {
    var e = Qr();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Ba = Error(r(460)), Kr = Error(r(474)), Ll = Error(r(542)), Vl = { then: function() {
  } };
  function ff(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function df(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, pf(e), e;
      default:
        if (typeof t.status == "string") t.then(nn, nn);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
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
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ca = n, Ba) : n;
    }
  }
  var ca = null;
  function mf() {
    if (ca === null) throw Error(r(459));
    var e = ca;
    return ca = null, e;
  }
  function pf(e) {
    if (e === Ba || e === Ll)
      throw Error(r(483));
  }
  var qa = null, Ci = 0;
  function Gl(e) {
    var t = Ci;
    return Ci += 1, qa === null && (qa = []), df(qa, e, t);
  }
  function Mi(e, t) {
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
        var O = E.deletions;
        O === null ? (E.deletions = [z], E.flags |= 16) : O.push(z);
      }
    }
    function n(E, z) {
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
    function s(E, z, O) {
      return E.index = O, e ? (O = E.alternate, O !== null ? (O = O.index, O < z ? (E.flags |= 67108866, z) : O) : (E.flags |= 67108866, z)) : (E.flags |= 1048576, z);
    }
    function m(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function g(E, z, O, Z) {
      return z === null || z.tag !== 6 ? (z = Ur(O, E.mode, Z), z.return = E, z) : (z = o(z, O), z.return = E, z);
    }
    function b(E, z, O, Z) {
      var F = O.type;
      return F === H ? D(
        E,
        z,
        O.props.children,
        Z,
        O.key
      ) : z !== null && (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ie && sa(F) === z.type) ? (z = o(z, O.props), Mi(z, O), z.return = E, z) : (z = Xl(
        O.type,
        O.key,
        O.props,
        null,
        E.mode,
        Z
      ), Mi(z, O), z.return = E, z);
    }
    function x(E, z, O, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== O.containerInfo || z.stateNode.implementation !== O.implementation ? (z = Yr(O, E.mode, Z), z.return = E, z) : (z = o(z, O.children || []), z.return = E, z);
    }
    function D(E, z, O, Z, F) {
      return z === null || z.tag !== 7 ? (z = ia(
        O,
        E.mode,
        Z,
        F
      ), z.return = E, z) : (z = o(z, O), z.return = E, z);
    }
    function Y(E, z, O) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ur(
          "" + z,
          E.mode,
          O
        ), z.return = E, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            return O = Xl(
              z.type,
              z.key,
              z.props,
              null,
              E.mode,
              O
            ), Mi(O, z), O.return = E, O;
          case M:
            return z = Yr(
              z,
              E.mode,
              O
            ), z.return = E, z;
          case ie:
            return z = sa(z), Y(E, z, O);
        }
        if (Oe(z) || pe(z))
          return z = ia(
            z,
            E.mode,
            O,
            null
          ), z.return = E, z;
        if (typeof z.then == "function")
          return Y(E, Gl(z), O);
        if (z.$$typeof === q)
          return Y(
            E,
            ql(E, z),
            O
          );
        Ql(E, z);
      }
      return null;
    }
    function C(E, z, O, Z) {
      var F = z !== null ? z.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return F !== null ? null : g(E, z, "" + O, Z);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case w:
            return O.key === F ? b(E, z, O, Z) : null;
          case M:
            return O.key === F ? x(E, z, O, Z) : null;
          case ie:
            return O = sa(O), C(E, z, O, Z);
        }
        if (Oe(O) || pe(O))
          return F !== null ? null : D(E, z, O, Z, null);
        if (typeof O.then == "function")
          return C(
            E,
            z,
            Gl(O),
            Z
          );
        if (O.$$typeof === q)
          return C(
            E,
            z,
            ql(E, O),
            Z
          );
        Ql(E, O);
      }
      return null;
    }
    function N(E, z, O, Z, F) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return E = E.get(O) || null, g(z, E, "" + Z, F);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case w:
            return E = E.get(
              Z.key === null ? O : Z.key
            ) || null, b(z, E, Z, F);
          case M:
            return E = E.get(
              Z.key === null ? O : Z.key
            ) || null, x(z, E, Z, F);
          case ie:
            return Z = sa(Z), N(
              E,
              z,
              O,
              Z,
              F
            );
        }
        if (Oe(Z) || pe(Z))
          return E = E.get(O) || null, D(z, E, Z, F, null);
        if (typeof Z.then == "function")
          return N(
            E,
            z,
            O,
            Gl(Z),
            F
          );
        if (Z.$$typeof === q)
          return N(
            E,
            z,
            O,
            ql(z, Z),
            F
          );
        Ql(z, Z);
      }
      return null;
    }
    function K(E, z, O, Z) {
      for (var F = null, Ee = null, J = z, oe = z = 0, me = null; J !== null && oe < O.length; oe++) {
        J.index > oe ? (me = J, J = null) : me = J.sibling;
        var Ae = C(
          E,
          J,
          O[oe],
          Z
        );
        if (Ae === null) {
          J === null && (J = me);
          break;
        }
        e && J && Ae.alternate === null && t(E, J), z = s(Ae, z, oe), Ee === null ? F = Ae : Ee.sibling = Ae, Ee = Ae, J = me;
      }
      if (oe === O.length)
        return n(E, J), he && un(E, oe), F;
      if (J === null) {
        for (; oe < O.length; oe++)
          J = Y(E, O[oe], Z), J !== null && (z = s(
            J,
            z,
            oe
          ), Ee === null ? F = J : Ee.sibling = J, Ee = J);
        return he && un(E, oe), F;
      }
      for (J = i(J); oe < O.length; oe++)
        me = N(
          J,
          E,
          oe,
          O[oe],
          Z
        ), me !== null && (e && me.alternate !== null && J.delete(
          me.key === null ? oe : me.key
        ), z = s(
          me,
          z,
          oe
        ), Ee === null ? F = me : Ee.sibling = me, Ee = me);
      return e && J.forEach(function(Vn) {
        return t(E, Vn);
      }), he && un(E, oe), F;
    }
    function ne(E, z, O, Z) {
      if (O == null) throw Error(r(151));
      for (var F = null, Ee = null, J = z, oe = z = 0, me = null, Ae = O.next(); J !== null && !Ae.done; oe++, Ae = O.next()) {
        J.index > oe ? (me = J, J = null) : me = J.sibling;
        var Vn = C(E, J, Ae.value, Z);
        if (Vn === null) {
          J === null && (J = me);
          break;
        }
        e && J && Vn.alternate === null && t(E, J), z = s(Vn, z, oe), Ee === null ? F = Vn : Ee.sibling = Vn, Ee = Vn, J = me;
      }
      if (Ae.done)
        return n(E, J), he && un(E, oe), F;
      if (J === null) {
        for (; !Ae.done; oe++, Ae = O.next())
          Ae = Y(E, Ae.value, Z), Ae !== null && (z = s(Ae, z, oe), Ee === null ? F = Ae : Ee.sibling = Ae, Ee = Ae);
        return he && un(E, oe), F;
      }
      for (J = i(J); !Ae.done; oe++, Ae = O.next())
        Ae = N(J, E, oe, Ae.value, Z), Ae !== null && (e && Ae.alternate !== null && J.delete(Ae.key === null ? oe : Ae.key), z = s(Ae, z, oe), Ee === null ? F = Ae : Ee.sibling = Ae, Ee = Ae);
      return e && J.forEach(function(_y) {
        return t(E, _y);
      }), he && un(E, oe), F;
    }
    function De(E, z, O, Z) {
      if (typeof O == "object" && O !== null && O.type === H && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case w:
            e: {
              for (var F = O.key; z !== null; ) {
                if (z.key === F) {
                  if (F = O.type, F === H) {
                    if (z.tag === 7) {
                      n(
                        E,
                        z.sibling
                      ), Z = o(
                        z,
                        O.props.children
                      ), Z.return = E, E = Z;
                      break e;
                    }
                  } else if (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ie && sa(F) === z.type) {
                    n(
                      E,
                      z.sibling
                    ), Z = o(z, O.props), Mi(Z, O), Z.return = E, E = Z;
                    break e;
                  }
                  n(E, z);
                  break;
                } else t(E, z);
                z = z.sibling;
              }
              O.type === H ? (Z = ia(
                O.props.children,
                E.mode,
                Z,
                O.key
              ), Z.return = E, E = Z) : (Z = Xl(
                O.type,
                O.key,
                O.props,
                null,
                E.mode,
                Z
              ), Mi(Z, O), Z.return = E, E = Z);
            }
            return m(E);
          case M:
            e: {
              for (F = O.key; z !== null; ) {
                if (z.key === F)
                  if (z.tag === 4 && z.stateNode.containerInfo === O.containerInfo && z.stateNode.implementation === O.implementation) {
                    n(
                      E,
                      z.sibling
                    ), Z = o(z, O.children || []), Z.return = E, E = Z;
                    break e;
                  } else {
                    n(E, z);
                    break;
                  }
                else t(E, z);
                z = z.sibling;
              }
              Z = Yr(O, E.mode, Z), Z.return = E, E = Z;
            }
            return m(E);
          case ie:
            return O = sa(O), De(
              E,
              z,
              O,
              Z
            );
        }
        if (Oe(O))
          return K(
            E,
            z,
            O,
            Z
          );
        if (pe(O)) {
          if (F = pe(O), typeof F != "function") throw Error(r(150));
          return O = F.call(O), ne(
            E,
            z,
            O,
            Z
          );
        }
        if (typeof O.then == "function")
          return De(
            E,
            z,
            Gl(O),
            Z
          );
        if (O.$$typeof === q)
          return De(
            E,
            z,
            ql(E, O),
            Z
          );
        Ql(E, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, z !== null && z.tag === 6 ? (n(E, z.sibling), Z = o(z, O), Z.return = E, E = Z) : (n(E, z), Z = Ur(O, E.mode, Z), Z.return = E, E = Z), m(E)) : n(E, z);
    }
    return function(E, z, O, Z) {
      try {
        Ci = 0;
        var F = De(
          E,
          z,
          O,
          Z
        );
        return qa = null, F;
      } catch (J) {
        if (J === Ba || J === Ll) throw J;
        var Ee = Ot(29, J, null, E.mode);
        return Ee.lanes = Z, Ee.return = E, Ee;
      }
    };
  }
  var fa = hf(!0), vf = hf(!1), xn = !1;
  function Jr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wr(e, t) {
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
  function Mn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (xe & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = kl(e), Fc(e, null, n), t;
    }
    return Yl(e, i, t, n), kl(e);
  }
  function Ni(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, uc(e, n);
    }
  }
  function Pr(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var o = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = m : s = s.next = m, n = n.next;
        } while (n !== null);
        s === null ? o = s = t : s = s.next = t;
      } else o = s = t;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Fr = !1;
  function ji() {
    if (Fr) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function Di(e, t, n, i) {
    Fr = !1;
    var o = e.updateQueue;
    xn = !1;
    var s = o.firstBaseUpdate, m = o.lastBaseUpdate, g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var b = g, x = b.next;
      b.next = null, m === null ? s = x : m.next = x, m = b;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, g = D.lastBaseUpdate, g !== m && (g === null ? D.firstBaseUpdate = x : g.next = x, D.lastBaseUpdate = b));
    }
    if (s !== null) {
      var Y = o.baseState;
      m = 0, D = x = b = null, g = s;
      do {
        var C = g.lane & -536870913, N = C !== g.lane;
        if (N ? (de & C) === C : (i & C) === C) {
          C !== 0 && C === Xa && (Fr = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var K = e, ne = g;
            C = t;
            var De = n;
            switch (ne.tag) {
              case 1:
                if (K = ne.payload, typeof K == "function") {
                  Y = K.call(De, Y, C);
                  break e;
                }
                Y = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = ne.payload, C = typeof K == "function" ? K.call(De, Y, C) : K, C == null) break e;
                Y = _({}, Y, C);
                break e;
              case 2:
                xn = !0;
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
          }, D === null ? (x = D = N, b = Y) : D = D.next = N, m |= C;
        if (g = g.next, g === null) {
          if (g = o.shared.pending, g === null)
            break;
          N = g, g = N.next, N.next = null, o.lastBaseUpdate = N, o.shared.pending = null;
        }
      } while (!0);
      D === null && (b = Y), o.baseState = b, o.firstBaseUpdate = x, o.lastBaseUpdate = D, s === null && (o.shared.lanes = 0), Rn |= m, e.lanes = m, e.memoizedState = Y;
    }
  }
  function gf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function yf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        gf(n[e], t);
  }
  var $a = T(null), Kl = T(0);
  function bf(e, t) {
    e = gn, L(Kl, e), L($a, t), gn = e | t.baseLanes;
  }
  function Ir() {
    L(Kl, gn), L($a, $a.current);
  }
  function eo() {
    gn = Kl.current, U($a), U(Kl);
  }
  var xt = T(null), Ht = null;
  function Nn(e) {
    var t = e.alternate;
    L(Qe, Qe.current & 1), L(xt, e), Ht === null && (t === null || $a.current !== null || t.memoizedState !== null) && (Ht = e);
  }
  function to(e) {
    L(Qe, Qe.current), L(xt, e), Ht === null && (Ht = e);
  }
  function _f(e) {
    e.tag === 22 ? (L(Qe, Qe.current), L(xt, e), Ht === null && (Ht = e)) : jn();
  }
  function jn() {
    L(Qe, Qe.current), L(xt, xt.current);
  }
  function Ct(e) {
    U(xt), Ht === e && (Ht = null), U(Qe);
  }
  var Qe = T(0);
  function Jl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || os(n) || ss(n)))
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
  var sn = 0, re = null, Ne = null, We = null, Wl = !1, La = !1, da = !1, Pl = 0, Zi = 0, Va = null, cg = 0;
  function $e() {
    throw Error(r(321));
  }
  function no(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function ao(e, t, n, i, o, s) {
    return sn = s, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? ad : bo, da = !1, s = n(i, o), da = !1, La && (s = zf(
      t,
      n,
      i,
      o
    )), Sf(e), s;
  }
  function Sf(e) {
    j.H = Yi;
    var t = Ne !== null && Ne.next !== null;
    if (sn = 0, We = Ne = re = null, Wl = !1, Zi = 0, Va = null, t) throw Error(r(300));
    e === null || Pe || (e = e.dependencies, e !== null && Bl(e) && (Pe = !0));
  }
  function zf(e, t, n, i) {
    re = e;
    var o = 0;
    do {
      if (La && (Va = null), Zi = 0, La = !1, 25 <= o) throw Error(r(301));
      if (o += 1, We = Ne = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      j.H = id, s = t(n, i);
    } while (La);
    return s;
  }
  function fg() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ri(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function io() {
    var e = Pl !== 0;
    return Pl = 0, e;
  }
  function lo(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function uo(e) {
    if (Wl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Wl = !1;
    }
    sn = 0, We = Ne = re = null, La = !1, Zi = Pl = 0, Va = null;
  }
  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? re.memoizedState = We = e : We = We.next = e, We;
  }
  function Ke() {
    if (Ne === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = We === null ? re.memoizedState : We.next;
    if (t !== null)
      We = t, Ne = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(r(467)) : Error(r(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, We === null ? re.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function Fl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ri(e) {
    var t = Zi;
    return Zi += 1, Va === null && (Va = []), e = df(Va, e, t), t = re, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? ad : bo), e;
  }
  function Il(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ri(e);
      if (e.$$typeof === q) return rt(e);
    }
    throw Error(r(438, String(e)));
  }
  function ro(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = re.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Fl(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = _e;
    return t.index++, n;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function eu(e) {
    var t = Ke();
    return oo(t, Ne, e);
  }
  function oo(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
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
      var g = m = null, b = null, x = t, D = !1;
      do {
        var Y = x.lane & -536870913;
        if (Y !== x.lane ? (de & Y) === Y : (sn & Y) === Y) {
          var C = x.revertLane;
          if (C === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), Y === Xa && (D = !0);
          else if ((sn & C) === C) {
            x = x.next, C === Xa && (D = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, b === null ? (g = b = Y, m = s) : b = b.next = Y, re.lanes |= C, Rn |= C;
          Y = x.action, da && n(s, Y), s = x.hasEagerState ? x.eagerState : n(s, Y);
        } else
          C = {
            lane: Y,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, b === null ? (g = b = C, m = s) : b = b.next = C, re.lanes |= Y, Rn |= Y;
        x = x.next;
      } while (x !== null && x !== t);
      if (b === null ? m = s : b.next = g, !wt(s, e.memoizedState) && (Pe = !0, D && (n = Ha, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = m, e.baseQueue = b, i.lastRenderedState = s;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function so(e) {
    var t = Ke(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, s = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var m = o = o.next;
      do
        s = e(s, m.action), m = m.next;
      while (m !== o);
      wt(s, t.memoizedState) || (Pe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, i];
  }
  function Tf(e, t, n) {
    var i = re, o = Ke(), s = he;
    if (s) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var m = !wt(
      (Ne || o).memoizedState,
      n
    );
    if (m && (o.memoizedState = n, Pe = !0), o = o.queue, mo(wf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || m || We !== null && We.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Af.bind(
          null,
          i,
          o,
          n,
          t
        ),
        null
      ), Re === null) throw Error(r(349));
      s || (sn & 127) !== 0 || Ef(i, t, n);
    }
    return n;
  }
  function Ef(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = Fl(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Af(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Of(t) && xf(e);
  }
  function wf(e, t, n) {
    return n(function() {
      Of(t) && xf(e);
    });
  }
  function Of(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function xf(e) {
    var t = aa(e, 2);
    t !== null && St(t, e, 2);
  }
  function co(e) {
    var t = dt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), da) {
        Sn(!0);
        try {
          n();
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
  function Cf(e, t, n, i) {
    return e.baseState = n, oo(
      e,
      Ne,
      typeof i == "function" ? i : cn
    );
  }
  function dg(e, t, n, i, o) {
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
      j.T !== null ? n(!0) : s.isTransition = !1, i(s), n = t.pending, n === null ? (s.next = t.pending = s, Mf(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function Mf(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var s = j.T, m = {};
      j.T = m;
      try {
        var g = n(o, i), b = j.S;
        b !== null && b(m, g), Nf(e, t, g);
      } catch (x) {
        fo(e, t, x);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), j.T = s;
      }
    } else
      try {
        s = n(o, i), Nf(e, t, s);
      } catch (x) {
        fo(e, t, x);
      }
  }
  function Nf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        jf(e, t, i);
      },
      function(i) {
        return fo(e, t, i);
      }
    ) : jf(e, t, n);
  }
  function jf(e, t, n) {
    t.status = "fulfilled", t.value = n, Df(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Mf(e, n)));
  }
  function fo(e, t, n) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = n, Df(t), t = t.next;
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
    if (he) {
      var n = Re.formState;
      if (n !== null) {
        e: {
          var i = re;
          if (he) {
            if (Ue) {
              t: {
                for (var o = Ue, s = Xt; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break t;
                  }
                  if (o = Bt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Ue = Bt(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            wn(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return n = dt(), n.memoizedState = n.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zf,
      lastRenderedState: t
    }, n.queue = i, n = ed.bind(
      null,
      re,
      i
    ), i.dispatch = n, i = co(!1), s = yo.bind(
      null,
      re,
      !1,
      i.queue
    ), i = dt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = dg.bind(
      null,
      re,
      o,
      s,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function Uf(e) {
    var t = Ke();
    return Yf(t, Ne, e);
  }
  function Yf(e, t, n) {
    if (t = oo(
      e,
      t,
      Zf
    )[0], e = eu(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Ri(t);
      } catch (m) {
        throw m === Ba ? Ll : m;
      }
    else i = t;
    t = Ke();
    var o = t.queue, s = o.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, Ga(
      9,
      { destroy: void 0 },
      mg.bind(null, o, n),
      null
    )), [i, s, e];
  }
  function mg(e, t) {
    e.action = t;
  }
  function kf(e) {
    var t = Ke(), n = Ne;
    if (n !== null)
      return Yf(t, n, e);
    Ke(), t = t.memoizedState, n = Ke();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Ga(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = re.updateQueue, t === null && (t = Fl(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Xf() {
    return Ke().memoizedState;
  }
  function tu(e, t, n, i) {
    var o = dt();
    re.flags |= e, o.memoizedState = Ga(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function nu(e, t, n, i) {
    var o = Ke();
    i = i === void 0 ? null : i;
    var s = o.memoizedState.inst;
    Ne !== null && i !== null && no(i, Ne.memoizedState.deps) ? o.memoizedState = Ga(t, s, n, i) : (re.flags |= e, o.memoizedState = Ga(
      1 | t,
      s,
      n,
      i
    ));
  }
  function Hf(e, t) {
    tu(8390656, 8, e, t);
  }
  function mo(e, t) {
    nu(2048, 8, e, t);
  }
  function pg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = Fl(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Bf(e) {
    var t = Ke().memoizedState;
    return pg({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function qf(e, t) {
    return nu(4, 2, e, t);
  }
  function $f(e, t) {
    return nu(4, 4, e, t);
  }
  function Lf(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Vf(e, t, n) {
    n = n != null ? n.concat([e]) : null, nu(4, 4, Lf.bind(null, t, e), n);
  }
  function po() {
  }
  function Gf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && no(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function Qf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && no(t, i[1]))
      return i[0];
    if (i = e(), da) {
      Sn(!0);
      try {
        e();
      } finally {
        Sn(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function ho(e, t, n) {
    return n === void 0 || (sn & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Kd(), re.lanes |= e, Rn |= e, n);
  }
  function Kf(e, t, n, i) {
    return wt(n, t) ? n : $a.current !== null ? (e = ho(e, n, i), wt(e, t) || (Pe = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (de & 261930) === 0 ? (Pe = !0, e.memoizedState = n) : (e = Kd(), re.lanes |= e, Rn |= e, t);
  }
  function Jf(e, t, n, i, o) {
    var s = $.p;
    $.p = s !== 0 && 8 > s ? s : 8;
    var m = j.T, g = {};
    j.T = g, yo(e, !1, t, n);
    try {
      var b = o(), x = j.S;
      if (x !== null && x(g, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var D = sg(
          b,
          i
        );
        Ui(
          e,
          t,
          D,
          jt(e)
        );
      } else
        Ui(
          e,
          t,
          i,
          jt(e)
        );
    } catch (Y) {
      Ui(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        jt()
      );
    } finally {
      $.p = s, m !== null && g.types !== null && (m.types = g.types), j.T = m;
    }
  }
  function hg() {
  }
  function vo(e, t, n, i) {
    if (e.tag !== 5) throw Error(r(476));
    var o = Wf(e).queue;
    Jf(
      e,
      o,
      t,
      ee,
      n === null ? hg : function() {
        return Pf(e), n(i);
      }
    );
  }
  function Wf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: ee
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Pf(e) {
    var t = Wf(e);
    t.next === null && (t = e.alternate.memoizedState), Ui(
      e,
      t.next.queue,
      {},
      jt()
    );
  }
  function go() {
    return rt(Ii);
  }
  function Ff() {
    return Ke().memoizedState;
  }
  function If() {
    return Ke().memoizedState;
  }
  function vg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = jt();
          e = Cn(n);
          var i = Mn(t, e, n);
          i !== null && (St(i, t, n), Ni(i, t, n)), t = { cache: Vr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function gg(e, t, n) {
    var i = jt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, au(e) ? td(t, n) : (n = Zr(e, t, n, i), n !== null && (St(n, e, i), nd(n, t, i)));
  }
  function ed(e, t, n) {
    var i = jt();
    Ui(e, t, n, i);
  }
  function Ui(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (au(e)) td(t, o);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var m = t.lastRenderedState, g = s(m, n);
          if (o.hasEagerState = !0, o.eagerState = g, wt(g, m))
            return Yl(e, t, o, 0), Re === null && Ul(), !1;
        } catch {
        }
      if (n = Zr(e, t, o, i), n !== null)
        return St(n, e, i), nd(n, t, i), !0;
    }
    return !1;
  }
  function yo(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: Wo(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, au(e)) {
      if (t) throw Error(r(479));
    } else
      t = Zr(
        e,
        n,
        i,
        2
      ), t !== null && St(t, e, 2);
  }
  function au(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function td(e, t) {
    La = Wl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function nd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, uc(e, n);
    }
  }
  var Yi = {
    readContext: rt,
    use: Il,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e
  };
  Yi.useEffectEvent = $e;
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
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, tu(
        4194308,
        4,
        Lf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return tu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      tu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = dt();
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
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = dt();
      if (n !== void 0) {
        var o = n(t);
        if (da) {
          Sn(!0);
          try {
            n(t);
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
      }, i.queue = e, e = e.dispatch = gg.bind(
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
      e = co(e);
      var t = e.queue, n = ed.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: po,
    useDeferredValue: function(e, t) {
      var n = dt();
      return ho(n, e, t);
    },
    useTransition: function() {
      var e = co(!1);
      return e = Jf.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), dt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = re, o = dt();
      if (he) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), Re === null)
          throw Error(r(349));
        (de & 127) !== 0 || Ef(i, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return o.queue = s, Hf(wf.bind(null, i, s, e), [
        e
      ]), i.flags |= 2048, Ga(
        9,
        { destroy: void 0 },
        Af.bind(
          null,
          i,
          s,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = dt(), t = Re.identifierPrefix;
      if (he) {
        var n = Pt, i = Wt;
        n = (i & ~(1 << 32 - At(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Pl++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = cg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: go,
    useFormState: Rf,
    useActionState: Rf,
    useOptimistic: function(e) {
      var t = dt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = yo.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: ro,
    useCacheRefresh: function() {
      return dt().memoizedState = vg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = dt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((xe & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, bo = {
    readContext: rt,
    use: Il,
    useCallback: Gf,
    useContext: rt,
    useEffect: mo,
    useImperativeHandle: Vf,
    useInsertionEffect: qf,
    useLayoutEffect: $f,
    useMemo: Qf,
    useReducer: eu,
    useRef: Xf,
    useState: function() {
      return eu(cn);
    },
    useDebugValue: po,
    useDeferredValue: function(e, t) {
      var n = Ke();
      return Kf(
        n,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = eu(cn)[0], t = Ke().memoizedState;
      return [
        typeof e == "boolean" ? e : Ri(e),
        t
      ];
    },
    useSyncExternalStore: Tf,
    useId: Ff,
    useHostTransitionStatus: go,
    useFormState: Uf,
    useActionState: Uf,
    useOptimistic: function(e, t) {
      var n = Ke();
      return Cf(n, Ne, e, t);
    },
    useMemoCache: ro,
    useCacheRefresh: If
  };
  bo.useEffectEvent = Bf;
  var id = {
    readContext: rt,
    use: Il,
    useCallback: Gf,
    useContext: rt,
    useEffect: mo,
    useImperativeHandle: Vf,
    useInsertionEffect: qf,
    useLayoutEffect: $f,
    useMemo: Qf,
    useReducer: so,
    useRef: Xf,
    useState: function() {
      return so(cn);
    },
    useDebugValue: po,
    useDeferredValue: function(e, t) {
      var n = Ke();
      return Ne === null ? ho(n, e, t) : Kf(
        n,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = so(cn)[0], t = Ke().memoizedState;
      return [
        typeof e == "boolean" ? e : Ri(e),
        t
      ];
    },
    useSyncExternalStore: Tf,
    useId: Ff,
    useHostTransitionStatus: go,
    useFormState: kf,
    useActionState: kf,
    useOptimistic: function(e, t) {
      var n = Ke();
      return Ne !== null ? Cf(n, Ne, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: ro,
    useCacheRefresh: If
  };
  id.useEffectEvent = Bf;
  function _o(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var So = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = jt(), o = Cn(i);
      o.payload = t, n != null && (o.callback = n), t = Mn(e, o, i), t !== null && (St(t, e, i), Ni(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = jt(), o = Cn(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Mn(e, o, i), t !== null && (St(t, e, i), Ni(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = jt(), i = Cn(n);
      i.tag = 2, t != null && (i.callback = t), t = Mn(e, i, n), t !== null && (St(t, e, n), Ni(t, e, n));
    }
  };
  function ld(e, t, n, i, o, s, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, s, m) : t.prototype && t.prototype.isPureReactComponent ? !Ti(n, i) || !Ti(o, s) : !0;
  }
  function ud(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && So.enqueueReplaceState(t, t.state, null);
  }
  function ma(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t)
        i !== "ref" && (n[i] = t[i]);
    }
    if (e = e.defaultProps) {
      n === t && (n = _({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
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
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function cd(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function zo(e, t, n) {
    return n = Cn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      iu(e, t);
    }, n;
  }
  function fd(e) {
    return e = Cn(e), e.tag = 3, e;
  }
  function dd(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = i.value;
      e.payload = function() {
        return o(s);
      }, e.callback = function() {
        cd(t, n, i);
      };
    }
    var m = n.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      cd(t, n, i), typeof o != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var g = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function yg(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && ka(
        t,
        n,
        o,
        !0
      ), n = xt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ht === null ? vu() : n.alternate === null && Le === 0 && (Le = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Vl ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Qo(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === Vl ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), Qo(e, i, o)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Qo(e, i, o), vu(), !1;
    }
    if (he)
      return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Hr && (e = Error(r(422), { cause: i }), wi(Ut(e, n)))) : (i !== Hr && (t = Error(r(423), {
        cause: i
      }), wi(
        Ut(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ut(i, n), o = zo(
        e.stateNode,
        i,
        o
      ), Pr(e, o), Le !== 4 && (Le = 2)), !1;
    var s = Error(r(520), { cause: i });
    if (s = Ut(s, n), Vi === null ? Vi = [s] : Vi.push(s), Le !== 4 && (Le = 2), t === null) return !0;
    i = Ut(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = zo(n.stateNode, i, e), Pr(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Un === null || !Un.has(s))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = fd(o), dd(
              o,
              e,
              n,
              i
            ), Pr(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var To = Error(r(461)), Pe = !1;
  function ot(e, t, n, i) {
    t.child = e === null ? vf(t, null, n, i) : fa(
      t,
      e.child,
      n,
      i
    );
  }
  function md(e, t, n, i, o) {
    n = n.render;
    var s = t.ref;
    if ("ref" in i) {
      var m = {};
      for (var g in i)
        g !== "ref" && (m[g] = i[g]);
    } else m = i;
    return ra(t), i = ao(
      e,
      t,
      n,
      m,
      s,
      o
    ), g = io(), e !== null && !Pe ? (lo(e, t, o), fn(e, t, o)) : (he && g && kr(t), t.flags |= 1, ot(e, t, i, o), t.child);
  }
  function pd(e, t, n, i, o) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !Rr(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, hd(
        e,
        t,
        s,
        i,
        o
      )) : (e = Xl(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !No(e, o)) {
      var m = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ti, n(m, i) && e.ref === t.ref)
        return fn(e, t, o);
    }
    return t.flags |= 1, e = ln(s, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hd(e, t, n, i, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ti(s, i) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = i = s, No(e, o))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, fn(e, t, o);
    }
    return Eo(
      e,
      t,
      n,
      i,
      o
    );
  }
  function vd(e, t, n, i) {
    var o = i.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~s;
        } else i = 0, t.child = null;
        return gd(
          e,
          t,
          s,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $l(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? bf(t, s) : Ir(), _f(t);
      else
        return i = t.lanes = 536870912, gd(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          i
        );
    } else
      s !== null ? ($l(t, s.cachePool), bf(t, s), jn(), t.memoizedState = null) : (e !== null && $l(t, null), Ir(), jn());
    return ot(e, t, o, n), t.child;
  }
  function ki(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function gd(e, t, n, i, o) {
    var s = Qr();
    return s = s === null ? null : { parent: Je._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && $l(t, null), Ir(), _f(t), e !== null && ka(e, t, i, !0), t.childLanes = o, null;
  }
  function lu(e, t) {
    return t = ru(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function yd(e, t, n) {
    return fa(t, e.child, null, n), e = lu(t, t.pendingProps), e.flags |= 2, Ct(t), t.memoizedState = null, e;
  }
  function bg(e, t, n) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (he) {
        if (i.mode === "hidden")
          return e = lu(t, i), t.lanes = 536870912, ki(null, e);
        if (to(t), (e = Ue) ? (e = Mm(
          e,
          Xt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: En !== null ? { id: Wt, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ef(e), n.return = t, t.child = n, ut = t, Ue = null)) : e = null, e === null) throw wn(t);
        return t.lanes = 536870912, null;
      }
      return lu(t, i);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (to(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = yd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Pe || ka(e, t, n, !1), o = (n & e.childLanes) !== 0, Pe || o) {
        if (i = Re, i !== null && (m = rc(i, n), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, aa(e, m), St(i, e, m), To;
        vu(), t = yd(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Ue = Bt(m.nextSibling), ut = t, he = !0, An = null, Xt = !1, e !== null && af(t, e), t = lu(t, i), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function uu(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Eo(e, t, n, i, o) {
    return ra(t), n = ao(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = io(), e !== null && !Pe ? (lo(e, t, o), fn(e, t, o)) : (he && i && kr(t), t.flags |= 1, ot(e, t, n, o), t.child);
  }
  function bd(e, t, n, i, o, s) {
    return ra(t), t.updateQueue = null, n = zf(
      t,
      i,
      n,
      o
    ), Sf(e), i = io(), e !== null && !Pe ? (lo(e, t, s), fn(e, t, s)) : (he && i && kr(t), t.flags |= 1, ot(e, t, n, s), t.child);
  }
  function _d(e, t, n, i, o) {
    if (ra(t), t.stateNode === null) {
      var s = Za, m = n.contextType;
      typeof m == "object" && m !== null && (s = rt(m)), s = new n(i, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = So, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = i, s.state = t.memoizedState, s.refs = {}, Jr(t), m = n.contextType, s.context = typeof m == "object" && m !== null ? rt(m) : Za, s.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (_o(
        t,
        n,
        m,
        i
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && So.enqueueReplaceState(s, s.state, null), Di(t, i, s, o), ji(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, b = ma(n, g);
      s.props = b;
      var x = s.context, D = n.contextType;
      m = Za, typeof D == "object" && D !== null && (m = rt(D));
      var Y = n.getDerivedStateFromProps;
      D = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, D || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || x !== m) && ud(
        t,
        s,
        i,
        m
      ), xn = !1;
      var C = t.memoizedState;
      s.state = C, Di(t, i, s, o), ji(), x = t.memoizedState, g || C !== x || xn ? (typeof Y == "function" && (_o(
        t,
        n,
        Y,
        i
      ), x = t.memoizedState), (b = xn || ld(
        t,
        n,
        b,
        i,
        C,
        x,
        m
      )) ? (D || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = x), s.props = i, s.state = x, s.context = m, i = b) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      s = t.stateNode, Wr(e, t), m = t.memoizedProps, D = ma(n, m), s.props = D, Y = t.pendingProps, C = s.context, x = n.contextType, b = Za, typeof x == "object" && x !== null && (b = rt(x)), g = n.getDerivedStateFromProps, (x = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== Y || C !== b) && ud(
        t,
        s,
        i,
        b
      ), xn = !1, C = t.memoizedState, s.state = C, Di(t, i, s, o), ji();
      var N = t.memoizedState;
      m !== Y || C !== N || xn || e !== null && e.dependencies !== null && Bl(e.dependencies) ? (typeof g == "function" && (_o(
        t,
        n,
        g,
        i
      ), N = t.memoizedState), (D = xn || ld(
        t,
        n,
        D,
        i,
        C,
        N,
        b
      ) || e !== null && e.dependencies !== null && Bl(e.dependencies)) ? (x || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, N, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        N,
        b
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = N), s.props = i, s.state = N, s.context = b, i = D) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return s = i, uu(e, t), i = (t.flags & 128) !== 0, s || i ? (s = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && i ? (t.child = fa(
      t,
      e.child,
      null,
      o
    ), t.child = fa(
      t,
      null,
      n,
      o
    )) : ot(e, t, n, o), t.memoizedState = s.state, e = t.child) : e = fn(
      e,
      t,
      o
    ), e;
  }
  function Sd(e, t, n, i) {
    return la(), t.flags |= 256, ot(e, t, n, i), t.child;
  }
  var Ao = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function wo(e) {
    return { baseLanes: e, cachePool: cf() };
  }
  function Oo(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Nt), e;
  }
  function zd(e, t, n) {
    var i = t.pendingProps, o = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), m && (o = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (o ? Nn(t) : jn(), (e = Ue) ? (e = Mm(
          e,
          Xt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: En !== null ? { id: Wt, overflow: Pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ef(e), n.return = t, t.child = n, ut = t, Ue = null)) : e = null, e === null) throw wn(t);
        return ss(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = i.children;
      return i = i.fallback, o ? (jn(), o = t.mode, g = ru(
        { mode: "hidden", children: g },
        o
      ), i = ia(
        i,
        o,
        n,
        null
      ), g.return = t, i.return = t, g.sibling = i, t.child = g, i = t.child, i.memoizedState = wo(n), i.childLanes = Oo(
        e,
        m,
        n
      ), t.memoizedState = Ao, ki(null, i)) : (Nn(t), xo(t, g));
    }
    var b = e.memoizedState;
    if (b !== null && (g = b.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = Co(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (jn(), t.child = e.child, t.flags |= 128, t = null) : (jn(), g = i.fallback, o = t.mode, i = ru(
          { mode: "visible", children: i.children },
          o
        ), g = ia(
          g,
          o,
          n,
          null
        ), g.flags |= 2, i.return = t, g.return = t, i.sibling = g, t.child = i, fa(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = wo(n), i.childLanes = Oo(
          e,
          m,
          n
        ), t.memoizedState = Ao, t = ki(null, i));
      else if (Nn(t), ss(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var x = m.dgst;
        m = x, i = Error(r(419)), i.stack = "", i.digest = m, wi({ value: i, source: null, stack: null }), t = Co(
          e,
          t,
          n
        );
      } else if (Pe || ka(e, t, n, !1), m = (n & e.childLanes) !== 0, Pe || m) {
        if (m = Re, m !== null && (i = rc(m, n), i !== 0 && i !== b.retryLane))
          throw b.retryLane = i, aa(e, i), St(m, e, i), To;
        os(g) || vu(), t = Co(
          e,
          t,
          n
        );
      } else
        os(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Ue = Bt(
          g.nextSibling
        ), ut = t, he = !0, An = null, Xt = !1, e !== null && af(t, e), t = xo(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (jn(), g = i.fallback, o = t.mode, b = e.child, x = b.sibling, i = ln(b, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = b.subtreeFlags & 65011712, x !== null ? g = ln(
      x,
      g
    ) : (g = ia(
      g,
      o,
      n,
      null
    ), g.flags |= 2), g.return = t, i.return = t, i.sibling = g, t.child = i, ki(null, i), i = t.child, g = e.child.memoizedState, g === null ? g = wo(n) : (o = g.cachePool, o !== null ? (b = Je._currentValue, o = o.parent !== b ? { parent: b, pool: b } : o) : o = cf(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: o
    }), i.memoizedState = g, i.childLanes = Oo(
      e,
      m,
      n
    ), t.memoizedState = Ao, ki(e.child, i)) : (Nn(t), n = e.child, e = n.sibling, n = ln(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function xo(e, t) {
    return t = ru(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ru(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function Co(e, t, n) {
    return fa(t, e.child, null, n), e = xo(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Td(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), $r(e.return, t, n);
  }
  function Mo(e, t, n, i, o, s) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: o,
      treeForkCount: s
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = n, m.tailMode = o, m.treeForkCount = s);
  }
  function Ed(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, s = i.tail;
    i = i.children;
    var m = Qe.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, L(Qe, m), ot(e, t, i, n), i = he ? Ai : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Td(e, n, t);
        else if (e.tag === 19)
          Td(e, n, t);
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
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Jl(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Mo(
          t,
          !1,
          o,
          n,
          s,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Jl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Mo(
          t,
          !0,
          n,
          null,
          s,
          i
        );
        break;
      case "together":
        Mo(
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
  function fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ka(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function No(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bl(e)));
  }
  function _g(e, t, n) {
    switch (t.tag) {
      case 3:
        tt(t, t.stateNode.containerInfo), On(t, Je, e.memoizedState.cache), la();
        break;
      case 27:
      case 5:
        _n(t);
        break;
      case 4:
        tt(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, to(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? zd(e, t, n) : (Nn(t), e = fn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (ka(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), o) {
          if (i)
            return Ed(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), L(Qe, Qe.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        On(t, Je, e.memoizedState.cache);
    }
    return fn(e, t, n);
  }
  function Ad(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!No(e, n) && (t.flags & 128) === 0)
          return Pe = !1, _g(
            e,
            t,
            n
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, he && (t.flags & 1048576) !== 0 && nf(t, Ai, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = sa(t.elementType), t.type = e, typeof e == "function")
            Rr(e) ? (i = ma(e, i), t.tag = 1, t = _d(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, t = Eo(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === k) {
                t.tag = 11, t = md(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === G) {
                t.tag = 14, t = pd(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = W(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Eo(
          e,
          t,
          t.type,
          t.pendingProps,
          n
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
          n
        );
      case 3:
        e: {
          if (tt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          i = t.pendingProps;
          var s = t.memoizedState;
          o = s.element, Wr(e, t), Di(t, i, null, n);
          var m = t.memoizedState;
          if (i = m.cache, On(t, Je, i), i !== s.cache && Lr(
            t,
            [Je],
            n,
            !0
          ), ji(), i = m.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = Sd(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== o) {
              o = Ut(
                Error(r(424)),
                t
              ), wi(o), t = Sd(
                e,
                t,
                i,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ue = Bt(e.firstChild), ut = t, he = !0, An = null, Xt = !0, n = vf(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (la(), i === o) {
              t = fn(
                e,
                t,
                n
              );
              break e;
            }
            ot(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return uu(e, t), e === null ? (n = Um(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : he || (n = t.type, e = t.pendingProps, i = Tu(
          se.current
        ).createElement(n), i[lt] = t, i[ht] = e, st(i, n, e), nt(i), t.stateNode = i) : t.memoizedState = Um(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _n(t), e === null && he && (i = t.stateNode = Dm(
          t.type,
          t.pendingProps,
          se.current
        ), ut = t, Xt = !0, o = Ue, Hn(t.type) ? (cs = o, Ue = Bt(i.firstChild)) : Ue = o), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), uu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && he && ((o = i = Ue) && (i = Wg(
          i,
          t.type,
          t.pendingProps,
          Xt
        ), i !== null ? (t.stateNode = i, ut = t, Ue = Bt(i.firstChild), Xt = !1, o = !0) : o = !1), o || wn(t)), _n(t), o = t.type, s = t.pendingProps, m = e !== null ? e.memoizedProps : null, i = s.children, ls(o, s) ? i = null : m !== null && ls(o, m) && (t.flags |= 32), t.memoizedState !== null && (o = ao(
          e,
          t,
          fg,
          null,
          null,
          n
        ), Ii._currentValue = o), uu(e, t), ot(e, t, i, n), t.child;
      case 6:
        return e === null && he && ((e = n = Ue) && (n = Pg(
          n,
          t.pendingProps,
          Xt
        ), n !== null ? (t.stateNode = n, ut = t, Ue = null, e = !0) : e = !1), e || wn(t)), null;
      case 13:
        return zd(e, t, n);
      case 4:
        return tt(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = fa(
          t,
          null,
          i,
          n
        ) : ot(e, t, i, n), t.child;
      case 11:
        return md(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ot(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, On(t, t.type, i.value), ot(e, t, i.children, n), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, ra(t), o = rt(o), i = i(o), t.flags |= 1, ot(e, t, i, n), t.child;
      case 14:
        return pd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return hd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Ed(e, t, n);
      case 31:
        return bg(e, t, n);
      case 22:
        return vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ra(t), i = rt(Je), e === null ? (o = Qr(), o === null && (o = Re, s = Vr(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= n), o = s), t.memoizedState = { parent: i, cache: o }, Jr(t), On(t, Je, o)) : ((e.lanes & n) !== 0 && (Wr(e, t), Di(t, null, null, n), ji()), o = e.memoizedState, s = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), On(t, Je, i)) : (i = s.cache, On(t, Je, i), i !== o.cache && Lr(
          t,
          [Je],
          n,
          !0
        ))), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function dn(e) {
    e.flags |= 4;
  }
  function jo(e, t, n, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Fd()) e.flags |= 8192;
        else
          throw ca = Vl, Kr;
    } else e.flags &= -16777217;
  }
  function wd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bm(t))
      if (Fd()) e.flags |= 8192;
      else
        throw ca = Vl, Kr;
  }
  function ou(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ic() : 536870912, e.lanes |= t, Wa |= t);
  }
  function Xi(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Sg(e, t, n) {
    var i = t.pendingProps;
    switch (Xr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), on(Je), Xe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ya(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Br())), Ye(t), null;
      case 26:
        var o = t.type, s = t.memoizedState;
        return e === null ? (dn(t), s !== null ? (Ye(t), wd(t, s)) : (Ye(t), jo(
          t,
          o,
          null,
          i,
          n
        ))) : s ? s !== e.memoizedState ? (dn(t), Ye(t), wd(t, s)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && dn(t), Ye(t), jo(
          t,
          o,
          e,
          i,
          n
        )), null;
      case 27:
        if (Pn(t), n = se.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ye(t), null;
          }
          e = Q.current, Ya(t) ? lf(t) : (e = Dm(o, i, n), t.stateNode = e, dn(t));
        }
        return Ye(t), null;
      case 5:
        if (Pn(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ye(t), null;
          }
          if (s = Q.current, Ya(t))
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
        return Ye(t), jo(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && dn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = se.current, Ya(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = ut, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[lt] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || zm(e.nodeValue, n)), e || wn(t, !0);
          } else
            e = Tu(e).createTextNode(
              i
            ), e[lt] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = Ya(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            n = Br(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ye(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ya(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[lt] = t;
            } else
              la(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), o = !1;
          } else
            o = Br(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
        }
        return Ct(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ou(t, t.updateQueue), Ye(t), null);
      case 4:
        return Xe(), e === null && es(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return on(t.type), Ye(t), null;
      case 19:
        if (U(Qe), i = t.memoizedState, i === null) return Ye(t), null;
        if (o = (t.flags & 128) !== 0, s = i.rendering, s === null)
          if (o) Xi(i, !1);
          else {
            if (Le !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Jl(e), s !== null) {
                  for (t.flags |= 128, Xi(i, !1), e = s.updateQueue, t.updateQueue = e, ou(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Ic(n, e), n = n.sibling;
                  return L(
                    Qe,
                    Qe.current & 1 | 2
                  ), he && un(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Tt() > mu && (t.flags |= 128, o = !0, Xi(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Jl(s), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ou(t, e), Xi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
                return Ye(t), null;
            } else
              2 * Tt() - i.renderingStartTime > mu && n !== 536870912 && (t.flags |= 128, o = !0, Xi(i, !1), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (e = i.last, e !== null ? e.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Tt(), e.sibling = null, n = Qe.current, L(
          Qe,
          o ? n & 1 | 2 : n & 1
        ), he && un(t, i.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return Ct(t), eo(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), n = t.updateQueue, n !== null && ou(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && U(oa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), on(Je), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function zg(e, t) {
    switch (Xr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return on(Je), Xe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return U(Qe), null;
      case 4:
        return Xe(), null;
      case 10:
        return on(t.type), null;
      case 22:
      case 23:
        return Ct(t), eo(), e !== null && U(oa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return on(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Od(e, t) {
    switch (Xr(t), t.tag) {
      case 3:
        on(Je), Xe();
        break;
      case 26:
      case 27:
      case 5:
        Pn(t);
        break;
      case 4:
        Xe();
        break;
      case 31:
        t.memoizedState !== null && Ct(t);
        break;
      case 13:
        Ct(t);
        break;
      case 19:
        U(Qe);
        break;
      case 10:
        on(t.type);
        break;
      case 22:
      case 23:
        Ct(t), eo(), e !== null && U(oa);
        break;
      case 24:
        on(Je);
    }
  }
  function Hi(e, t) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var s = n.create, m = n.inst;
            i = s(), m.destroy = i;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (g) {
      Me(t, t.return, g);
    }
  }
  function Dn(e, t, n) {
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
              var b = n, x = g;
              try {
                x();
              } catch (D) {
                Me(
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
      Me(t, t.return, D);
    }
  }
  function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        yf(t, n);
      } catch (i) {
        Me(e, e.return, i);
      }
    }
  }
  function Cd(e, t, n) {
    n.props = ma(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Me(e, t, i);
    }
  }
  function Bi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
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
        typeof n == "function" ? e.refCleanup = n(i) : n.current = i;
      }
    } catch (o) {
      Me(e, t, o);
    }
  }
  function Ft(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Me(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Me(e, t, o);
        }
      else n.current = null;
  }
  function Md(e) {
    var t = e.type, n = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (o) {
      Me(e, e.return, o);
    }
  }
  function Do(e, t, n) {
    try {
      var i = e.stateNode;
      Lg(i, e.type, n, t), i[ht] = t;
    } catch (o) {
      Me(e, e.return, o);
    }
  }
  function Nd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
  }
  function Zo(e) {
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
  function Ro(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nn));
    else if (i !== 4 && (i === 27 && Hn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Ro(e, t, n), e = e.sibling; e !== null; )
        Ro(e, t, n), e = e.sibling;
  }
  function su(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Hn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (su(e, t, n), e = e.sibling; e !== null; )
        su(e, t, n), e = e.sibling;
  }
  function jd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      st(t, i, n), t[lt] = e, t[ht] = n;
    } catch (s) {
      Me(e, e.return, s);
    }
  }
  var mn = !1, Fe = !1, Uo = !1, Dd = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Tg(e, t) {
    if (e = e.containerInfo, as = Mu, e = Lc(e), xr(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var o = i.anchorOffset, s = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var m = 0, g = -1, b = -1, x = 0, D = 0, Y = e, C = null;
            t: for (; ; ) {
              for (var N; Y !== n || o !== 0 && Y.nodeType !== 3 || (g = m + o), Y !== s || i !== 0 && Y.nodeType !== 3 || (b = m + i), Y.nodeType === 3 && (m += Y.nodeValue.length), (N = Y.firstChild) !== null; )
                C = Y, Y = N;
              for (; ; ) {
                if (Y === e) break t;
                if (C === n && ++x === o && (g = m), C === s && ++D === i && (b = m), (N = Y.nextSibling) !== null) break;
                Y = C, C = Y.parentNode;
              }
              Y = N;
            }
            n = g === -1 || b === -1 ? null : { start: g, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (is = { focusedElem: e, selectionRange: n }, Mu = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  o = e[n], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, n = t, o = s.memoizedProps, s = s.memoizedState, i = n.stateNode;
                try {
                  var K = ma(
                    n.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    K,
                    s
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ne) {
                  Me(
                    n,
                    n.return,
                    ne
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  rs(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rs(e);
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
  function Zd(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, n), i & 4 && Hi(5, n);
        break;
      case 1:
        if (hn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              Me(n, n.return, m);
            }
          else {
            var o = ma(
              n.type,
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
              Me(
                n,
                n.return,
                m
              );
            }
          }
        i & 64 && xd(n), i & 512 && Bi(n, n.return);
        break;
      case 3:
        if (hn(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            yf(e, t);
          } catch (m) {
            Me(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && i & 4 && jd(n);
      case 26:
      case 5:
        hn(e, n), t === null && i & 4 && Md(n), i & 512 && Bi(n, n.return);
        break;
      case 12:
        hn(e, n);
        break;
      case 31:
        hn(e, n), i & 4 && Yd(e, n);
        break;
      case 13:
        hn(e, n), i & 4 && kd(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = jg.bind(
          null,
          n
        ), Fg(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || mn, !i) {
          t = t !== null && t.memoizedState !== null || Fe, o = mn;
          var s = Fe;
          mn = i, (Fe = t) && !s ? vn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : hn(e, n), mn = o, Fe = s;
        }
        break;
      case 30:
        break;
      default:
        hn(e, n);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && fr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var He = null, gt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; )
      Ud(e, t, n), n = n.sibling;
  }
  function Ud(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(fi, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Fe || Ft(n, t), pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Fe || Ft(n, t);
        var i = He, o = gt;
        Hn(n.type) && (He = n.stateNode, gt = !1), pn(
          e,
          t,
          n
        ), Wi(n.stateNode), He = i, gt = o;
        break;
      case 5:
        Fe || Ft(n, t);
      case 6:
        if (i = He, o = gt, He = null, pn(
          e,
          t,
          n
        ), He = i, gt = o, He !== null)
          if (gt)
            try {
              (He.nodeType === 9 ? He.body : He.nodeName === "HTML" ? He.ownerDocument.body : He).removeChild(n.stateNode);
            } catch (s) {
              Me(
                n,
                t,
                s
              );
            }
          else
            try {
              He.removeChild(n.stateNode);
            } catch (s) {
              Me(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        He !== null && (gt ? (e = He, xm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ii(e)) : xm(He, n.stateNode));
        break;
      case 4:
        i = He, o = gt, He = n.stateNode.containerInfo, gt = !0, pn(
          e,
          t,
          n
        ), He = i, gt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dn(2, n, t), Fe || Dn(4, n, t), pn(
          e,
          t,
          n
        );
        break;
      case 1:
        Fe || (Ft(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Cd(
          n,
          t,
          i
        )), pn(
          e,
          t,
          n
        );
        break;
      case 21:
        pn(
          e,
          t,
          n
        );
        break;
      case 22:
        Fe = (i = Fe) || n.memoizedState !== null, pn(
          e,
          t,
          n
        ), Fe = i;
        break;
      default:
        pn(
          e,
          t,
          n
        );
    }
  }
  function Yd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ii(e);
      } catch (n) {
        Me(t, t.return, n);
      }
    }
  }
  function kd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ii(e);
      } catch (n) {
        Me(t, t.return, n);
      }
  }
  function Eg(e) {
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
    var n = Eg(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = Dg.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], s = e, m = t, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Hn(g.type)) {
                He = g.stateNode, gt = !1;
                break e;
              }
              break;
            case 5:
              He = g.stateNode, gt = !1;
              break e;
            case 3:
            case 4:
              He = g.stateNode.containerInfo, gt = !0;
              break e;
          }
          g = g.return;
        }
        if (He === null) throw Error(r(160));
        Ud(s, m, o), He = null, gt = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Xd(t, e), t = t.sibling;
  }
  var Gt = null;
  function Xd(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yt(t, e), bt(e), i & 4 && (Dn(3, e, e.return), Hi(3, e), Dn(5, e, e.return));
        break;
      case 1:
        yt(t, e), bt(e), i & 512 && (Fe || n === null || Ft(n, n.return)), i & 64 && mn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = Gt;
        if (yt(t, e), bt(e), i & 512 && (Fe || n === null || Ft(n, n.return)), i & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      s = o.getElementsByTagName("title")[0], (!s || s[pi] || s[lt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = o.createElement(i), o.head.insertBefore(
                        s,
                        o.querySelector("head > title")
                      )), st(s, i, n), s[lt] = e, nt(s), i = s;
                      break e;
                    case "link":
                      var m = Xm(
                        "link",
                        "href",
                        o
                      ).get(i + (n.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), st(s, i, n), o.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Xm(
                        "meta",
                        "content",
                        o
                      ).get(i + (n.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = o.createElement(i), st(s, i, n), o.head.appendChild(s);
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
              e.stateNode = km(
                o,
                i,
                e.memoizedProps
              );
          else
            s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, i === null ? Hm(
              o,
              e.type,
              e.stateNode
            ) : km(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Do(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        yt(t, e), bt(e), i & 512 && (Fe || n === null || Ft(n, n.return)), n !== null && i & 4 && Do(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (yt(t, e), bt(e), i & 512 && (Fe || n === null || Ft(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Oa(o, "");
          } catch (K) {
            Me(e, e.return, K);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, Do(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Uo = !0);
        break;
      case 6:
        if (yt(t, e), bt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (K) {
            Me(e, e.return, K);
          }
        }
        break;
      case 3:
        if (wu = null, o = Gt, Gt = Eu(t.containerInfo), yt(t, e), Gt = o, bt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ii(t.containerInfo);
          } catch (K) {
            Me(e, e.return, K);
          }
        Uo && (Uo = !1, Hd(e));
        break;
      case 4:
        i = Gt, Gt = Eu(
          e.stateNode.containerInfo
        ), yt(t, e), bt(e), Gt = i;
        break;
      case 12:
        yt(t, e), bt(e);
        break;
      case 31:
        yt(t, e), bt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, cu(e, i)));
        break;
      case 13:
        yt(t, e), bt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (du = Tt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, cu(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null, x = mn, D = Fe;
        if (mn = x || o, Fe = D || b, yt(t, e), Fe = D, mn = x, bt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || b || mn || Fe || pa(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                b = n = t;
                try {
                  if (s = b.stateNode, o)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = b.stateNode;
                    var Y = b.memoizedProps.style, C = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    g.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (K) {
                  Me(b, b.return, K);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = o ? "" : b.memoizedProps;
                } catch (K) {
                  Me(b, b.return, K);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                b = t;
                try {
                  var N = b.stateNode;
                  o ? Cm(N, !0) : Cm(b.stateNode, !1);
                } catch (K) {
                  Me(b, b.return, K);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, cu(e, n))));
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
        for (var n, i = e.return; i !== null; ) {
          if (Nd(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, s = Zo(e);
            su(e, s, o);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Oa(m, ""), n.flags &= -33);
            var g = Zo(e);
            su(e, g, m);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo, x = Zo(e);
            Ro(
              e,
              x,
              b
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (D) {
        Me(e, e.return, D);
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
          Ft(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Cd(
            t,
            t.return,
            n
          ), pa(t);
          break;
        case 27:
          Wi(t.stateNode);
        case 26:
        case 5:
          Ft(t, t.return), pa(t);
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
  function vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, s = t, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          vn(
            o,
            s,
            n
          ), Hi(4, s);
          break;
        case 1:
          if (vn(
            o,
            s,
            n
          ), i = s, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (x) {
              Me(i, i.return, x);
            }
          if (i = s, o = i.updateQueue, o !== null) {
            var g = i.stateNode;
            try {
              var b = o.shared.hiddenCallbacks;
              if (b !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < b.length; o++)
                  gf(b[o], g);
            } catch (x) {
              Me(i, i.return, x);
            }
          }
          n && m & 64 && xd(s), Bi(s, s.return);
          break;
        case 27:
          jd(s);
        case 26:
        case 5:
          vn(
            o,
            s,
            n
          ), n && i === null && m & 4 && Md(s), Bi(s, s.return);
          break;
        case 12:
          vn(
            o,
            s,
            n
          );
          break;
        case 31:
          vn(
            o,
            s,
            n
          ), n && m & 4 && Yd(o, s);
          break;
        case 13:
          vn(
            o,
            s,
            n
          ), n && m & 4 && kd(o, s);
          break;
        case 22:
          s.memoizedState === null && vn(
            o,
            s,
            n
          ), Bi(s, s.return);
          break;
        case 30:
          break;
        default:
          vn(
            o,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Yo(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Oi(n));
  }
  function ko(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e));
  }
  function Qt(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bd(
          e,
          t,
          n,
          i
        ), t = t.sibling;
  }
  function Bd(e, t, n, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qt(
          e,
          t,
          n,
          i
        ), o & 2048 && Hi(9, t);
        break;
      case 1:
        Qt(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        Qt(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e)));
        break;
      case 12:
        if (o & 2048) {
          Qt(
            e,
            t,
            n,
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
            Me(t, t.return, b);
          }
        } else
          Qt(
            e,
            t,
            n,
            i
          );
        break;
      case 31:
        Qt(
          e,
          t,
          n,
          i
        );
        break;
      case 13:
        Qt(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, m = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Qt(
          e,
          t,
          n,
          i
        ) : qi(e, t) : s._visibility & 2 ? Qt(
          e,
          t,
          n,
          i
        ) : (s._visibility |= 2, Qa(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Yo(m, t);
        break;
      case 24:
        Qt(
          e,
          t,
          n,
          i
        ), o & 2048 && ko(t.alternate, t);
        break;
      default:
        Qt(
          e,
          t,
          n,
          i
        );
    }
  }
  function Qa(e, t, n, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, m = t, g = n, b = i, x = m.flags;
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
          ), Hi(8, m);
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
          ) : qi(
            s,
            m
          ) : (D._visibility |= 2, Qa(
            s,
            m,
            g,
            b,
            o
          )), o && x & 2048 && Yo(
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
          ), o && x & 2048 && ko(m.alternate, m);
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
  function qi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            qi(n, i), o & 2048 && Yo(
              i.alternate,
              i
            );
            break;
          case 24:
            qi(n, i), o & 2048 && ko(i.alternate, i);
            break;
          default:
            qi(n, i);
        }
        t = t.sibling;
      }
  }
  var $i = 8192;
  function Ka(e, t, n) {
    if (e.subtreeFlags & $i)
      for (e = e.child; e !== null; )
        qd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function qd(e, t, n) {
    switch (e.tag) {
      case 26:
        Ka(
          e,
          t,
          n
        ), e.flags & $i && e.memoizedState !== null && cy(
          n,
          Gt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ka(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = Gt;
        Gt = Eu(e.stateNode.containerInfo), Ka(
          e,
          t,
          n
        ), Gt = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = $i, $i = 16777216, Ka(
          e,
          t,
          n
        ), $i = i) : Ka(
          e,
          t,
          n
        ));
        break;
      default:
        Ka(
          e,
          t,
          n
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
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          at = i, Vd(
            i,
            e
          );
        }
      $d(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ld(e), e = e.sibling;
  }
  function Ld(e) {
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
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          at = i, Vd(
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
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fu(t));
          break;
        default:
          fu(t);
      }
      e = e.sibling;
    }
  }
  function Vd(e, t) {
    for (; at !== null; ) {
      var n = at;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Oi(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, at = i;
      else
        e: for (n = e; at !== null; ) {
          i = at;
          var o = i.sibling, s = i.return;
          if (Rd(i), i === n) {
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
  var Ag = {
    getCacheForType: function(e) {
      var t = rt(Je), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return rt(Je).controller.signal;
    }
  }, wg = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Re = null, ce = null, de = 0, Ce = 0, Mt = null, Zn = !1, Ja = !1, Xo = !1, gn = 0, Le = 0, Rn = 0, ha = 0, Ho = 0, Nt = 0, Wa = 0, Vi = null, _t = null, Bo = !1, du = 0, Gd = 0, mu = 1 / 0, pu = null, Un = null, Ie = 0, Yn = null, Pa = null, yn = 0, qo = 0, $o = null, Qd = null, Gi = 0, Lo = null;
  function jt() {
    return (xe & 2) !== 0 && de !== 0 ? de & -de : j.T !== null ? Wo() : oc();
  }
  function Kd() {
    if (Nt === 0)
      if ((de & 536870912) === 0 || he) {
        var e = zl;
        zl <<= 1, (zl & 3932160) === 0 && (zl = 262144), Nt = e;
      } else Nt = 536870912;
    return e = xt.current, e !== null && (e.flags |= 32), Nt;
  }
  function St(e, t, n) {
    (e === Re && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null) && (Fa(e, 0), kn(
      e,
      de,
      Nt,
      !1
    )), mi(e, n), ((xe & 2) === 0 || e !== Re) && (e === Re && ((xe & 2) === 0 && (ha |= n), Le === 4 && kn(
      e,
      de,
      Nt,
      !1
    )), It(e));
  }
  function Jd(e, t, n) {
    if ((xe & 6) !== 0) throw Error(r(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || di(e, t), o = i ? Cg(e, t) : Go(e, t, !0), s = i;
    do {
      if (o === 0) {
        Ja && !i && kn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !Og(n)) {
          o = Go(e, t, !1), s = !1;
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
              o = Vi;
              var b = g.current.memoizedState.isDehydrated;
              if (b && (Fa(g, m).flags |= 256), m = Go(
                g,
                m,
                !1
              ), m !== 2) {
                if (Xo && !b) {
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
          Fa(e, 0), kn(e, t, 0, !0);
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
              kn(
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
            if (kn(
              i,
              t,
              Nt,
              !Zn
            ), El(i, 0, !0) !== 0) break e;
            yn = t, i.timeoutHandle = wm(
              Wd.bind(
                null,
                i,
                n,
                _t,
                pu,
                Bo,
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
            n,
            _t,
            pu,
            Bo,
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
    It(e);
  }
  function Wd(e, t, n, i, o, s, m, g, b, x, D, Y, C, N) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
      Y = {
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
        Y
      );
      var K = (s & 62914560) === s ? du - Tt() : (s & 4194048) === s ? Gd - Tt() : 0;
      if (K = fy(
        Y,
        K
      ), K !== null) {
        yn = s, e.cancelPendingCommit = K(
          im.bind(
            null,
            e,
            t,
            s,
            n,
            i,
            o,
            m,
            g,
            b,
            D,
            Y,
            null,
            C,
            N
          )
        ), kn(e, s, m, !x);
        return;
      }
    }
    im(
      e,
      t,
      s,
      n,
      i,
      o,
      m,
      g,
      b
    );
  }
  function Og(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
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
  function kn(e, t, n, i) {
    t &= ~Ho, t &= ~ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var s = 31 - At(o), m = 1 << s;
      i[s] = -1, o &= ~m;
    }
    n !== 0 && lc(e, n, t);
  }
  function hu() {
    return (xe & 6) === 0 ? (Qi(0), !1) : !0;
  }
  function Vo() {
    if (ce !== null) {
      if (Ce === 0)
        var e = ce.return;
      else
        e = ce, rn = ua = null, uo(e), qa = null, Ci = 0, e = ce;
      for (; e !== null; )
        Od(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function Fa(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Qg(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), yn = 0, Vo(), Re = e, ce = n = ln(e.current, null), de = t, Ce = 0, Mt = null, Zn = !1, Ja = di(e, t), Xo = !1, Wa = Nt = Ho = ha = Rn = Le = 0, _t = Vi = null, Bo = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - At(i), s = 1 << o;
        t |= e[o], i &= ~s;
      }
    return gn = t, Ul(), n;
  }
  function Pd(e, t) {
    re = null, j.H = Yi, t === Ba || t === Ll ? (t = mf(), Ce = 3) : t === Kr ? (t = mf(), Ce = 4) : Ce = t === To ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, ce === null && (Le = 1, iu(
      e,
      Ut(t, e.current)
    ));
  }
  function Fd() {
    var e = xt.current;
    return e === null ? !0 : (de & 4194048) === de ? Ht === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === Ht : !1;
  }
  function Id() {
    var e = j.H;
    return j.H = Yi, e === null ? Yi : e;
  }
  function em() {
    var e = j.A;
    return j.A = Ag, e;
  }
  function vu() {
    Le = 4, Zn || (de & 4194048) !== de && xt.current !== null || (Ja = !0), (Rn & 134217727) === 0 && (ha & 134217727) === 0 || Re === null || kn(
      Re,
      de,
      Nt,
      !1
    );
  }
  function Go(e, t, n) {
    var i = xe;
    xe |= 2;
    var o = Id(), s = em();
    (Re !== e || de !== t) && (pu = null, Fa(e, t)), t = !1;
    var m = Le;
    e: do
      try {
        if (Ce !== 0 && ce !== null) {
          var g = ce, b = Mt;
          switch (Ce) {
            case 8:
              Vo(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var x = Ce;
              if (Ce = 0, Mt = null, Ia(e, g, b, x), n && Ja) {
                m = 0;
                break e;
              }
              break;
            default:
              x = Ce, Ce = 0, Mt = null, Ia(e, g, b, x);
          }
        }
        xg(), m = Le;
        break;
      } catch (D) {
        Pd(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, rn = ua = null, xe = i, j.H = o, j.A = s, ce === null && (Re = null, de = 0, Ul()), m;
  }
  function xg() {
    for (; ce !== null; ) tm(ce);
  }
  function Cg(e, t) {
    var n = xe;
    xe |= 2;
    var i = Id(), o = em();
    Re !== e || de !== t ? (pu = null, mu = Tt() + 500, Fa(e, t)) : Ja = di(
      e,
      t
    );
    e: do
      try {
        if (Ce !== 0 && ce !== null) {
          t = ce;
          var s = Mt;
          t: switch (Ce) {
            case 1:
              Ce = 0, Mt = null, Ia(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (ff(s)) {
                Ce = 0, Mt = null, nm(t);
                break;
              }
              t = function() {
                Ce !== 2 && Ce !== 9 || Re !== e || (Ce = 7), It(e);
              }, s.then(t, t);
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              ff(s) ? (Ce = 0, Mt = null, nm(t)) : (Ce = 0, Mt = null, Ia(e, t, s, 7));
              break;
            case 5:
              var m = null;
              switch (ce.tag) {
                case 26:
                  m = ce.memoizedState;
                case 5:
                case 27:
                  var g = ce;
                  if (m ? Bm(m) : g.stateNode.complete) {
                    Ce = 0, Mt = null;
                    var b = g.sibling;
                    if (b !== null) ce = b;
                    else {
                      var x = g.return;
                      x !== null ? (ce = x, gu(x)) : ce = null;
                    }
                    break t;
                  }
              }
              Ce = 0, Mt = null, Ia(e, t, s, 5);
              break;
            case 6:
              Ce = 0, Mt = null, Ia(e, t, s, 6);
              break;
            case 8:
              Vo(), Le = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Mg();
        break;
      } catch (D) {
        Pd(e, D);
      }
    while (!0);
    return rn = ua = null, j.H = i, j.A = o, xe = n, ce !== null ? 0 : (Re = null, de = 0, Ul(), Le);
  }
  function Mg() {
    for (; ce !== null && !Ih(); )
      tm(ce);
  }
  function tm(e) {
    var t = Ad(e.alternate, e, gn);
    e.memoizedProps = e.pendingProps, t === null ? gu(e) : ce = t;
  }
  function nm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = bd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        uo(t);
      default:
        Od(n, t), t = ce = Ic(t, gn), t = Ad(n, t, gn);
    }
    e.memoizedProps = e.pendingProps, t === null ? gu(e) : ce = t;
  }
  function Ia(e, t, n, i) {
    rn = ua = null, uo(t), qa = null, Ci = 0;
    var o = t.return;
    try {
      if (yg(
        e,
        o,
        t,
        n,
        de
      )) {
        Le = 1, iu(
          e,
          Ut(n, e.current)
        ), ce = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw ce = o, s;
      Le = 1, iu(
        e,
        Ut(n, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (he || i === 1 ? e = !0 : Ja || (de & 536870912) !== 0 ? e = !1 : (Zn = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = xt.current, i !== null && i.tag === 13 && (i.flags |= 16384))), am(t, e)) : gu(t);
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
      var n = Sg(
        t.alternate,
        t,
        gn
      );
      if (n !== null) {
        ce = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function am(e, t) {
    do {
      var n = zg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ce = e;
        return;
      }
      ce = e = n;
    } while (e !== null);
    Le = 6, ce = null;
  }
  function im(e, t, n, i, o, s, m, g, b) {
    e.cancelPendingCommit = null;
    do
      yu();
    while (Ie !== 0);
    if ((xe & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (s = t.lanes | t.childLanes, s |= Dr, sv(
        e,
        n,
        s,
        m,
        g,
        b
      ), e === Re && (ce = Re = null, de = 0), Pa = t, Yn = e, yn = n, qo = s, $o = o, Qd = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Zg(_l, function() {
        return sm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = j.T, j.T = null, o = $.p, $.p = 2, m = xe, xe |= 4;
        try {
          Tg(e, t, n);
        } finally {
          xe = m, $.p = o, j.T = i;
        }
      }
      Ie = 1, lm(), um(), rm();
    }
  }
  function lm() {
    if (Ie === 1) {
      Ie = 0;
      var e = Yn, t = Pa, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null;
        var i = $.p;
        $.p = 2;
        var o = xe;
        xe |= 4;
        try {
          Xd(t, e);
          var s = is, m = Lc(e.containerInfo), g = s.focusedElem, b = s.selectionRange;
          if (m !== g && g && g.ownerDocument && $c(
            g.ownerDocument.documentElement,
            g
          )) {
            if (b !== null && xr(g)) {
              var x = b.start, D = b.end;
              if (D === void 0 && (D = x), "selectionStart" in g)
                g.selectionStart = x, g.selectionEnd = Math.min(
                  D,
                  g.value.length
                );
              else {
                var Y = g.ownerDocument || document, C = Y && Y.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), K = g.textContent.length, ne = Math.min(b.start, K), De = b.end === void 0 ? ne : Math.min(b.end, K);
                  !N.extend && ne > De && (m = De, De = ne, ne = m);
                  var E = qc(
                    g,
                    ne
                  ), z = qc(
                    g,
                    De
                  );
                  if (E && z && (N.rangeCount !== 1 || N.anchorNode !== E.node || N.anchorOffset !== E.offset || N.focusNode !== z.node || N.focusOffset !== z.offset)) {
                    var O = Y.createRange();
                    O.setStart(E.node, E.offset), N.removeAllRanges(), ne > De ? (N.addRange(O), N.extend(z.node, z.offset)) : (O.setEnd(z.node, z.offset), N.addRange(O));
                  }
                }
              }
            }
            for (Y = [], N = g; N = N.parentNode; )
              N.nodeType === 1 && Y.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < Y.length; g++) {
              var Z = Y[g];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Mu = !!as, is = as = null;
        } finally {
          xe = o, $.p = i, j.T = n;
        }
      }
      e.current = t, Ie = 2;
    }
  }
  function um() {
    if (Ie === 2) {
      Ie = 0;
      var e = Yn, t = Pa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = j.T, j.T = null;
        var i = $.p;
        $.p = 2;
        var o = xe;
        xe |= 4;
        try {
          Zd(e, t.alternate, t);
        } finally {
          xe = o, $.p = i, j.T = n;
        }
      }
      Ie = 3;
    }
  }
  function rm() {
    if (Ie === 4 || Ie === 3) {
      Ie = 0, ev();
      var e = Yn, t = Pa, n = yn, i = Qd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ie = 5 : (Ie = 0, Pa = Yn = null, om(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Un = null), sr(n), t = t.stateNode, Et && typeof Et.onCommitFiberRoot == "function")
        try {
          Et.onCommitFiberRoot(
            fi,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = j.T, o = $.p, $.p = 2, j.T = null;
        try {
          for (var s = e.onRecoverableError, m = 0; m < i.length; m++) {
            var g = i[m];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          j.T = t, $.p = o;
        }
      }
      (yn & 3) !== 0 && yu(), It(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === Lo ? Gi++ : (Gi = 0, Lo = e) : Gi = 0, Qi(0);
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
    var e = Yn, t = qo;
    qo = 0;
    var n = sr(yn), i = j.T, o = $.p;
    try {
      $.p = 32 > n ? 32 : n, j.T = null, n = $o, $o = null;
      var s = Yn, m = yn;
      if (Ie = 0, Pa = Yn = null, yn = 0, (xe & 6) !== 0) throw Error(r(331));
      var g = xe;
      if (xe |= 4, Ld(s.current), Bd(
        s,
        s.current,
        m,
        n
      ), xe = g, Qi(0, !1), Et && typeof Et.onPostCommitFiberRoot == "function")
        try {
          Et.onPostCommitFiberRoot(fi, s);
        } catch {
        }
      return !0;
    } finally {
      $.p = o, j.T = i, om(e, t);
    }
  }
  function cm(e, t, n) {
    t = Ut(n, t), t = zo(e.stateNode, t, 2), e = Mn(e, t, 2), e !== null && (mi(e, 2), It(e));
  }
  function Me(e, t, n) {
    if (e.tag === 3)
      cm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Un === null || !Un.has(i))) {
            e = Ut(n, e), n = fd(2), i = Mn(t, n, 2), i !== null && (dd(
              n,
              i,
              t,
              e
            ), mi(i, 2), It(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qo(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new wg();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Xo = !0, o.add(n), e = Ng.bind(null, e, t, n), t.then(e, e));
  }
  function Ng(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Re === e && (de & n) === n && (Le === 4 || Le === 3 && (de & 62914560) === de && 300 > Tt() - du ? (xe & 2) === 0 && Fa(e, 0) : Ho |= n, Wa === de && (Wa = 0)), It(e);
  }
  function fm(e, t) {
    t === 0 && (t = ic()), e = aa(e, t), e !== null && (mi(e, t), It(e));
  }
  function jg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), fm(e, n);
  }
  function Dg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
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
    i !== null && i.delete(t), fm(e, n);
  }
  function Zg(e, t) {
    return lr(e, t);
  }
  var bu = null, ei = null, Ko = !1, _u = !1, Jo = !1, Xn = 0;
  function It(e) {
    e !== ei && e.next === null && (ei === null ? bu = ei = e : ei = ei.next = e), _u = !0, Ko || (Ko = !0, Ug());
  }
  function Qi(e, t) {
    if (!Jo && _u) {
      Jo = !0;
      do
        for (var n = !1, i = bu; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var m = i.suspendedLanes, g = i.pingedLanes;
              s = (1 << 31 - At(42 | e) + 1) - 1, s &= o & ~(m & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, hm(i, s));
          } else
            s = de, s = El(
              i,
              i === Re ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || di(i, s) || (n = !0, hm(i, s));
          i = i.next;
        }
      while (n);
      Jo = !1;
    }
  }
  function Rg() {
    dm();
  }
  function dm() {
    _u = Ko = !1;
    var e = 0;
    Xn !== 0 && Gg() && (e = Xn);
    for (var t = Tt(), n = null, i = bu; i !== null; ) {
      var o = i.next, s = mm(i, t);
      s === 0 ? (i.next = null, n === null ? bu = o : n.next = o, o === null && (ei = n)) : (n = i, (e !== 0 || (s & 3) !== 0) && (_u = !0)), i = o;
    }
    Ie !== 0 && Ie !== 5 || Qi(e), Xn !== 0 && (Xn = 0);
  }
  function mm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - At(s), g = 1 << m, b = o[m];
      b === -1 ? ((g & n) === 0 || (g & i) !== 0) && (o[m] = ov(g, t)) : b <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = Re, n = de, n = El(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ce === 2 || Ce === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && ur(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || di(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && ur(i), sr(n)) {
        case 2:
        case 8:
          n = nc;
          break;
        case 32:
          n = _l;
          break;
        case 268435456:
          n = ac;
          break;
        default:
          n = _l;
      }
      return i = pm.bind(null, e), n = lr(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && ur(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pm(e, t) {
    if (Ie !== 0 && Ie !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (yu() && e.callbackNode !== n)
      return null;
    var i = de;
    return i = El(
      e,
      e === Re ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (Jd(e, i, t), mm(e, Tt()), e.callbackNode != null && e.callbackNode === n ? pm.bind(null, e) : null);
  }
  function hm(e, t) {
    if (yu()) return null;
    Jd(e, t, !0);
  }
  function Ug() {
    Kg(function() {
      (xe & 6) !== 0 ? lr(
        tc,
        Rg
      ) : dm();
    });
  }
  function Wo() {
    if (Xn === 0) {
      var e = Xa;
      e === 0 && (e = Sl, Sl <<= 1, (Sl & 261888) === 0 && (Sl = 256)), Xn = e;
    }
    return Xn;
  }
  function vm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xl("" + e);
  }
  function gm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Yg(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
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
                  vo(
                    n,
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
                typeof s == "function" && (g.preventDefault(), b = m ? gm(o, m) : new FormData(o), vo(
                  n,
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
  for (var Po = 0; Po < jr.length; Po++) {
    var Fo = jr[Po], kg = Fo.toLowerCase(), Xg = Fo[0].toUpperCase() + Fo.slice(1);
    Vt(
      kg,
      "on" + Xg
    );
  }
  Vt(Qc, "onAnimationEnd"), Vt(Kc, "onAnimationIteration"), Vt(Jc, "onAnimationStart"), Vt("dblclick", "onDoubleClick"), Vt("focusin", "onFocus"), Vt("focusout", "onBlur"), Vt(tg, "onTransitionRun"), Vt(ng, "onTransitionStart"), Vt(ag, "onTransitionCancel"), Vt(Wc, "onTransitionEnd"), Aa("onMouseEnter", ["mouseout", "mouseover"]), Aa("onMouseLeave", ["mouseout", "mouseover"]), Aa("onPointerEnter", ["pointerout", "pointerover"]), Aa("onPointerLeave", ["pointerout", "pointerover"]), In(
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
  var Ki = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Hg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki)
  );
  function ym(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var m = i.length - 1; 0 <= m; m--) {
            var g = i[m], b = g.instance, x = g.currentTarget;
            if (g = g.listener, b !== s && o.isPropagationStopped())
              break e;
            s = g, o.currentTarget = x;
            try {
              s(o);
            } catch (D) {
              Rl(D);
            }
            o.currentTarget = null, s = b;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (g = i[m], b = g.instance, x = g.currentTarget, g = g.listener, b !== s && o.isPropagationStopped())
              break e;
            s = g, o.currentTarget = x;
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
  function fe(e, t) {
    var n = t[cr];
    n === void 0 && (n = t[cr] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (bm(t, e, 2, !1), n.add(i));
  }
  function Io(e, t, n) {
    var i = 0;
    t && (i |= 4), bm(
      n,
      e,
      i,
      t
    );
  }
  var Su = "_reactListening" + Math.random().toString(36).slice(2);
  function es(e) {
    if (!e[Su]) {
      e[Su] = !0, fc.forEach(function(n) {
        n !== "selectionchange" && (Hg.has(n) || Io(n, !1, e), Io(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Su] || (t[Su] = !0, Io("selectionchange", !1, t));
    }
  }
  function bm(e, t, n, i) {
    switch (Km(t)) {
      case 2:
        var o = py;
        break;
      case 8:
        o = hy;
        break;
      default:
        o = hs;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !br || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function ts(e, t, n, i, o) {
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
      var x = s, D = gr(n), Y = [];
      e: {
        var C = Pc.get(e);
        if (C !== void 0) {
          var N = jl, K = e;
          switch (e) {
            case "keypress":
              if (Ml(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Dv;
              break;
            case "focusin":
              K = "focus", N = Tr;
              break;
            case "focusout":
              K = "blur", N = Tr;
              break;
            case "beforeblur":
            case "afterblur":
              N = Tr;
              break;
            case "click":
              if (n.button === 2) break e;
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
              N = Sv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Uv;
              break;
            case Qc:
            case Kc:
            case Jc:
              N = Ev;
              break;
            case Wc:
              N = kv;
              break;
            case "scroll":
            case "scrollend":
              N = bv;
              break;
            case "wheel":
              N = Hv;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = wv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = xc;
              break;
            case "toggle":
            case "beforetoggle":
              N = qv;
          }
          var ne = (t & 4) !== 0, De = !ne && (e === "scroll" || e === "scrollend"), E = ne ? C !== null ? C + "Capture" : null : C;
          ne = [];
          for (var z = x, O; z !== null; ) {
            var Z = z;
            if (O = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || O === null || E === null || (Z = vi(z, E), Z != null && ne.push(
              Ji(z, Z, O)
            )), De) break;
            z = z.return;
          }
          0 < ne.length && (C = new N(
            C,
            K,
            null,
            n,
            D
          ), Y.push({ event: C, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", C && n !== vr && (K = n.relatedTarget || n.fromElement) && (za(K) || K[Sa]))
            break e;
          if ((N || C) && (C = D.window === D ? D : (C = D.ownerDocument) ? C.defaultView || C.parentWindow : window, N ? (K = n.relatedTarget || n.toElement, N = x, K = K ? za(K) : null, K !== null && (De = f(K), ne = K.tag, K !== De || ne !== 5 && ne !== 27 && ne !== 6) && (K = null)) : (N = null, K = x), N !== K)) {
            if (ne = wc, Z = "onMouseLeave", E = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ne = xc, Z = "onPointerLeave", E = "onPointerEnter", z = "pointer"), De = N == null ? C : hi(N), O = K == null ? C : hi(K), C = new ne(
              Z,
              z + "leave",
              N,
              n,
              D
            ), C.target = De, C.relatedTarget = O, Z = null, za(D) === x && (ne = new ne(
              E,
              z + "enter",
              K,
              n,
              D
            ), ne.target = O, ne.relatedTarget = De, Z = ne), De = Z, N && K)
              t: {
                for (ne = Bg, E = N, z = K, O = 0, Z = E; Z; Z = ne(Z))
                  O++;
                Z = 0;
                for (var F = z; F; F = ne(F))
                  Z++;
                for (; 0 < O - Z; )
                  E = ne(E), O--;
                for (; 0 < Z - O; )
                  z = ne(z), Z--;
                for (; O--; ) {
                  if (E === z || z !== null && E === z.alternate) {
                    ne = E;
                    break t;
                  }
                  E = ne(E), z = ne(z);
                }
                ne = null;
              }
            else ne = null;
            N !== null && _m(
              Y,
              C,
              N,
              ne,
              !1
            ), K !== null && De !== null && _m(
              Y,
              De,
              K,
              ne,
              !0
            );
          }
        }
        e: {
          if (C = x ? hi(x) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var Ee = Uc;
          else if (Zc(C))
            if (Yc)
              Ee = Fv;
            else {
              Ee = Wv;
              var J = Jv;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? x && hr(x.elementType) && (Ee = Uc) : Ee = Pv;
          if (Ee && (Ee = Ee(e, x))) {
            Rc(
              Y,
              Ee,
              n,
              D
            );
            break e;
          }
          J && J(e, C, x), e === "focusout" && x && C.type === "number" && x.memoizedProps.value != null && pr(C, "number", C.value);
        }
        switch (J = x ? hi(x) : window, e) {
          case "focusin":
            (Zc(J) || J.contentEditable === "true") && (Na = J, Cr = x, Ei = null);
            break;
          case "focusout":
            Ei = Cr = Na = null;
            break;
          case "mousedown":
            Mr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mr = !1, Vc(Y, n, D);
            break;
          case "selectionchange":
            if (eg) break;
          case "keydown":
          case "keyup":
            Vc(Y, n, D);
        }
        var oe;
        if (Ar)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ma ? jc(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (Cc && n.locale !== "ko" && (Ma || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ma && (oe = Ec()) : (Tn = D, _r = "value" in Tn ? Tn.value : Tn.textContent, Ma = !0)), J = zu(x, me), 0 < J.length && (me = new Oc(
          me,
          e,
          null,
          n,
          D
        ), Y.push({ event: me, listeners: J }), oe ? me.data = oe : (oe = Dc(n), oe !== null && (me.data = oe)))), (oe = Lv ? Vv(e, n) : Gv(e, n)) && (me = zu(x, "onBeforeInput"), 0 < me.length && (J = new Oc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          D
        ), Y.push({
          event: J,
          listeners: me
        }), J.data = oe)), Yg(
          Y,
          e,
          x,
          n,
          D
        );
      }
      ym(Y, t);
    });
  }
  function Ji(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function zu(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = vi(e, n), o != null && i.unshift(
        Ji(e, o, s)
      ), o = vi(e, t), o != null && i.push(
        Ji(e, o, s)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function Bg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _m(e, t, n, i, o) {
    for (var s = t._reactName, m = []; n !== null && n !== i; ) {
      var g = n, b = g.alternate, x = g.stateNode;
      if (g = g.tag, b !== null && b === i) break;
      g !== 5 && g !== 26 && g !== 27 || x === null || (b = x, o ? (x = vi(n, s), x != null && m.unshift(
        Ji(n, x, b)
      )) : o || (x = vi(n, s), x != null && m.push(
        Ji(n, x, b)
      ))), n = n.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var qg = /\r\n?/g, $g = /\u0000|\uFFFD/g;
  function Sm(e) {
    return (typeof e == "string" ? e : "" + e).replace(qg, `
`).replace($g, "");
  }
  function zm(e, t) {
    return t = Sm(t), Sm(e) === t;
  }
  function je(e, t, n, i, o, s) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Oa(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Oa(e, "" + i);
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
        wl(e, n, i);
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
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = xl("" + i), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (t !== "input" && je(e, t, "name", o.name, o, null), je(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), je(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), je(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (je(e, t, "encType", o.encType, o, null), je(e, t, "method", o.method, o, null), je(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = xl("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = nn);
        break;
      case "onScroll":
        i != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        i != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = n;
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
        n = xl("" + i), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
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
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), Al(e, "popover", i);
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
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = gv.get(n) || n, Al(e, n, i));
    }
  }
  function ns(e, t, n, i, o, s) {
    switch (n) {
      case "style":
        Sc(e, i, s);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Oa(e, i) : (typeof i == "number" || typeof i == "bigint") && Oa(e, "" + i);
        break;
      case "onScroll":
        i != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        i != null && fe("scrollend", e);
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
        if (!dc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), s = e[ht] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, o), typeof i == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Al(e, n, i);
          }
    }
  }
  function st(e, t, n) {
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
        fe("error", e), fe("load", e);
        var i = !1, o = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var m = n[s];
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
                  je(e, t, s, m, n, null);
              }
          }
        o && je(e, t, "srcSet", n.srcSet, n, null), i && je(e, t, "src", n.src, n, null);
        return;
      case "input":
        fe("invalid", e);
        var g = s = m = o = null, b = null, x = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var D = n[i];
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
                  x = D;
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
                  je(e, t, i, D, n, null);
              }
          }
        gc(
          e,
          s,
          g,
          b,
          x,
          m,
          o,
          !1
        );
        return;
      case "select":
        fe("invalid", e), i = m = s = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (g = n[o], g != null))
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
                je(e, t, o, g, n, null);
            }
        t = s, n = m, e.multiple = !!i, t != null ? wa(e, !!i, t, !1) : n != null && wa(e, !!i, n, !0);
        return;
      case "textarea":
        fe("invalid", e), s = o = i = null;
        for (m in n)
          if (n.hasOwnProperty(m) && (g = n[m], g != null))
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
                je(e, t, m, g, n, null);
            }
        bc(e, i, o, s);
        return;
      case "option":
        for (b in n)
          n.hasOwnProperty(b) && (i = n[b], i != null) && (b === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : je(e, t, b, i, n, null));
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ki.length; i++)
          fe(Ki[i], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
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
        for (x in n)
          if (n.hasOwnProperty(x) && (i = n[x], i != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                je(e, t, x, i, n, null);
            }
        return;
      default:
        if (hr(t)) {
          for (D in n)
            n.hasOwnProperty(D) && (i = n[D], i !== void 0 && ns(
              e,
              t,
              D,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (i = n[g], i != null && je(e, t, g, i, n, null));
  }
  function Lg(e, t, n, i) {
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
        var o = null, s = null, m = null, g = null, b = null, x = null, D = null;
        for (N in n) {
          var Y = n[N];
          if (n.hasOwnProperty(N) && Y != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Y;
              default:
                i.hasOwnProperty(N) || je(e, t, N, null, i, Y);
            }
        }
        for (var C in i) {
          var N = i[C];
          if (Y = n[C], i.hasOwnProperty(C) && (N != null || Y != null))
            switch (C) {
              case "type":
                s = N;
                break;
              case "name":
                o = N;
                break;
              case "checked":
                x = N;
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
                N !== Y && je(
                  e,
                  t,
                  C,
                  N,
                  i,
                  Y
                );
            }
        }
        mr(
          e,
          m,
          g,
          b,
          x,
          D,
          s,
          o
        );
        return;
      case "select":
        N = m = g = C = null;
        for (s in n)
          if (b = n[s], n.hasOwnProperty(s) && b != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                N = b;
              default:
                i.hasOwnProperty(s) || je(
                  e,
                  t,
                  s,
                  null,
                  i,
                  b
                );
            }
        for (o in i)
          if (s = i[o], b = n[o], i.hasOwnProperty(o) && (s != null || b != null))
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
                s !== b && je(
                  e,
                  t,
                  o,
                  s,
                  i,
                  b
                );
            }
        t = g, n = m, i = N, C != null ? wa(e, !!n, C, !1) : !!i != !!n && (t != null ? wa(e, !!n, t, !0) : wa(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (g in n)
          if (o = n[g], n.hasOwnProperty(g) && o != null && !i.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                je(e, t, g, null, i, o);
            }
        for (m in i)
          if (o = i[m], s = n[m], i.hasOwnProperty(m) && (o != null || s != null))
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
                o !== s && je(e, t, m, o, i, s);
            }
        yc(e, C, N);
        return;
      case "option":
        for (var K in n)
          C = n[K], n.hasOwnProperty(K) && C != null && !i.hasOwnProperty(K) && (K === "selected" ? e.selected = !1 : je(
            e,
            t,
            K,
            null,
            i,
            C
          ));
        for (b in i)
          C = i[b], N = n[b], i.hasOwnProperty(b) && C !== N && (C != null || N != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : je(
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
        for (var ne in n)
          C = n[ne], n.hasOwnProperty(ne) && C != null && !i.hasOwnProperty(ne) && je(e, t, ne, null, i, C);
        for (x in i)
          if (C = i[x], N = n[x], i.hasOwnProperty(x) && C !== N && (C != null || N != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, t));
                break;
              default:
                je(
                  e,
                  t,
                  x,
                  C,
                  i,
                  N
                );
            }
        return;
      default:
        if (hr(t)) {
          for (var De in n)
            C = n[De], n.hasOwnProperty(De) && C !== void 0 && !i.hasOwnProperty(De) && ns(
              e,
              t,
              De,
              void 0,
              i,
              C
            );
          for (D in i)
            C = i[D], N = n[D], !i.hasOwnProperty(D) || C === N || C === void 0 && N === void 0 || ns(
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
    for (var E in n)
      C = n[E], n.hasOwnProperty(E) && C != null && !i.hasOwnProperty(E) && je(e, t, E, null, i, C);
    for (Y in i)
      C = i[Y], N = n[Y], !i.hasOwnProperty(Y) || C === N || C == null && N == null || je(e, t, Y, C, i, N);
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
  function Vg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], s = o.transferSize, m = o.initiatorType, g = o.duration;
        if (s && g && Tm(m)) {
          for (m = 0, g = o.responseEnd, i += 1; i < n.length; i++) {
            var b = n[i], x = b.startTime;
            if (x > g) break;
            var D = b.transferSize, Y = b.initiatorType;
            D && Tm(Y) && (b = b.responseEnd, m += D * (b < g ? 1 : (g - x) / (b - x)));
          }
          if (--i, t += 8 * (s + m) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var as = null, is = null;
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
  function ls(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var us = null;
  function Gg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === us ? !1 : (us = e, !0) : (us = null, !1);
  }
  var wm = typeof setTimeout == "function" ? setTimeout : void 0, Qg = typeof clearTimeout == "function" ? clearTimeout : void 0, Om = typeof Promise == "function" ? Promise : void 0, Kg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Om < "u" ? function(e) {
    return Om.resolve(null).then(e).catch(Jg);
  } : wm;
  function Jg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hn(e) {
    return e === "head";
  }
  function xm(e, t) {
    var n = t, i = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (i === 0) {
            e.removeChild(o), ii(t);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Wi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Wi(n);
          for (var s = n.firstChild; s; ) {
            var m = s.nextSibling, g = s.nodeName;
            s[pi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = m;
          }
        } else
          n === "body" && Wi(e.ownerDocument.body);
      n = o;
    } while (n);
    ii(t);
  }
  function Cm(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = i;
    } while (n);
  }
  function rs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rs(n), fr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Wg(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[pi])
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
      if (e = Bt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Pg(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function os(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ss(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Fg(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function Bt(e) {
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
  var cs = null;
  function Nm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Bt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function jm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dm(e, t, n) {
    switch (t = Tu(n), e) {
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
  function Wi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    fr(e);
  }
  var qt = /* @__PURE__ */ new Map(), Zm = /* @__PURE__ */ new Set();
  function Eu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var bn = $.d;
  $.d = {
    f: Ig,
    r: ey,
    D: ty,
    C: ny,
    L: ay,
    m: iy,
    X: uy,
    S: ly,
    M: ry
  };
  function Ig() {
    var e = bn.f(), t = hu();
    return e || t;
  }
  function ey(e) {
    var t = Ta(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pf(t) : bn.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function Rm(e, t, n) {
    var i = ti;
    if (i && typeof t == "string" && t) {
      var o = Zt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Zm.has(o) || (Zm.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), st(t, "link", e), nt(t), i.head.appendChild(t)));
    }
  }
  function ty(e) {
    bn.D(e), Rm("dns-prefetch", e, null);
  }
  function ny(e, t) {
    bn.C(e, t), Rm("preconnect", e, t);
  }
  function ay(e, t, n) {
    bn.L(e, t, n);
    var i = ti;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Zt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Zt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Zt(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Zt(e) + '"]';
      var s = o;
      switch (t) {
        case "style":
          s = ni(e);
          break;
        case "script":
          s = ai(e);
      }
      qt.has(s) || (e = _(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), qt.set(s, e), i.querySelector(o) !== null || t === "style" && i.querySelector(Pi(s)) || t === "script" && i.querySelector(Fi(s)) || (t = i.createElement("link"), st(t, "link", e), nt(t), i.head.appendChild(t)));
    }
  }
  function iy(e, t) {
    bn.m(e, t);
    var n = ti;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Zt(i) + '"][href="' + Zt(e) + '"]', s = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ai(e);
      }
      if (!qt.has(s) && (e = _({ rel: "modulepreload", href: e }, t), qt.set(s, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Fi(s)))
              return;
        }
        i = n.createElement("link"), st(i, "link", e), nt(i), n.head.appendChild(i);
      }
    }
  }
  function ly(e, t, n) {
    bn.S(e, t, n);
    var i = ti;
    if (i && e) {
      var o = Ea(i).hoistableStyles, s = ni(e);
      t = t || "default";
      var m = o.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = i.querySelector(
          Pi(s)
        ))
          g.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = qt.get(s)) && fs(e, n);
          var b = m = i.createElement("link");
          nt(b), st(b, "link", e), b._p = new Promise(function(x, D) {
            b.onload = x, b.onerror = D;
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
  function uy(e, t) {
    bn.X(e, t);
    var n = ti;
    if (n && e) {
      var i = Ea(n).hoistableScripts, o = ai(e), s = i.get(o);
      s || (s = n.querySelector(Fi(o)), s || (e = _({ src: e, async: !0 }, t), (t = qt.get(o)) && ds(e, t), s = n.createElement("script"), nt(s), st(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function ry(e, t) {
    bn.M(e, t);
    var n = ti;
    if (n && e) {
      var i = Ea(n).hoistableScripts, o = ai(e), s = i.get(o);
      s || (s = n.querySelector(Fi(o)), s || (e = _({ src: e, async: !0, type: "module" }, t), (t = qt.get(o)) && ds(e, t), s = n.createElement("script"), nt(s), st(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function Um(e, t, n, i) {
    var o = (o = se.current) ? Eu(o) : null;
    if (!o) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ni(n.href), n = Ea(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ni(n.href);
          var s = Ea(
            o
          ).hoistableStyles, m = s.get(e);
          if (m || (o = o.ownerDocument || o, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, m), (s = o.querySelector(
            Pi(e)
          )) && !s._p && (m.instance = s, m.state.loading = 5), qt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, qt.set(e, n), s || oy(
            o,
            e,
            n,
            m.state
          ))), t && i === null)
            throw Error(r(528, ""));
          return m;
        }
        if (t && i !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ai(n), n = Ea(
          o
        ).hoistableScripts, i = n.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function ni(e) {
    return 'href="' + Zt(e) + '"';
  }
  function Pi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ym(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function oy(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), st(t, "link", n), nt(t), e.head.appendChild(t));
  }
  function ai(e) {
    return '[src="' + Zt(e) + '"]';
  }
  function Fi(e) {
    return "script[async]" + e;
  }
  function km(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Zt(n.href) + '"]'
          );
          if (i)
            return t.instance = i, nt(i), i;
          var o = _({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), nt(i), st(i, "style", o), Au(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = ni(n.href);
          var s = e.querySelector(
            Pi(o)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, nt(s), s;
          i = Ym(n), (o = qt.get(o)) && fs(i, o), s = (e.ownerDocument || e).createElement("link"), nt(s);
          var m = s;
          return m._p = new Promise(function(g, b) {
            m.onload = g, m.onerror = b;
          }), st(s, "link", i), t.state.loading |= 4, Au(s, n.precedence, e), t.instance = s;
        case "script":
          return s = ai(n.src), (o = e.querySelector(
            Fi(s)
          )) ? (t.instance = o, nt(o), o) : (i = n, (o = qt.get(s)) && (i = _({}, n), ds(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), nt(o), st(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Au(i, n.precedence, e));
    return t.instance;
  }
  function Au(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, s = o, m = 0; m < i.length; m++) {
      var g = i[m];
      if (g.dataset.precedence === t) s = g;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function fs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ds(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var wu = null;
  function Xm(e, t, n) {
    if (wu === null) {
      var i = /* @__PURE__ */ new Map(), o = wu = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = wu, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var s = n[o];
      if (!(s[pi] || s[lt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(t) || "";
        m = e + m;
        var g = i.get(m);
        g ? g.push(s) : i.set(m, [s]);
      }
    }
    return i;
  }
  function Hm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function sy(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
  function cy(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = ni(i.href), s = t.querySelector(
          Pi(o)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ou.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, nt(s);
          return;
        }
        s = t.ownerDocument || t, i = Ym(i), (o = qt.get(o)) && fs(i, o), s = s.createElement("link"), nt(s);
        var m = s;
        m._p = new Promise(function(g, b) {
          m.onload = g, m.onerror = b;
        }), st(s, "link", i), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ou.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var ms = 0;
  function fy(e, t) {
    return e.stylesheets && e.count === 0 && Cu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Cu(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ms === 0 && (ms = 62500 * Vg());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Cu(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > ms ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function Ou() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Cu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xu = null;
  function Cu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xu = /* @__PURE__ */ new Map(), t.forEach(dy, e), xu = null, Ou.call(e));
  }
  function dy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = xu.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xu.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var m = o[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), i = m);
        }
        i && n.set(null, i);
      }
      o = t.instance, m = o.getAttribute("data-precedence"), s = n.get(m) || i, s === i && n.set(null, o), n.set(m, o), this.count++, i = Ou.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ii = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function my(e, t, n, i, o, s, m, g, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = rr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rr(0), this.hiddenUpdates = rr(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qm(e, t, n, i, o, s, m, g, b, x, D, Y) {
    return e = new my(
      e,
      t,
      n,
      m,
      b,
      x,
      D,
      Y,
      g
    ), t = 1, s === !0 && (t |= 24), s = Ot(3, null, null, t), e.current = s, s.stateNode = e, t = Vr(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, Jr(s), e;
  }
  function $m(e) {
    return e ? (e = Za, e) : Za;
  }
  function Lm(e, t, n, i, o, s) {
    o = $m(o), i.context === null ? i.context = o : i.pendingContext = o, i = Cn(t), i.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = Mn(e, i, t), n !== null && (St(n, e, t), Ni(n, e, t));
  }
  function Vm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ps(e, t) {
    Vm(e, t), (e = e.alternate) && Vm(e, t);
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = aa(e, 67108864);
      t !== null && St(t, e, 67108864), ps(e, 67108864);
    }
  }
  function Qm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jt();
      t = or(t);
      var n = aa(e, t);
      n !== null && St(n, e, t), ps(e, t);
    }
  }
  var Mu = !0;
  function py(e, t, n, i) {
    var o = j.T;
    j.T = null;
    var s = $.p;
    try {
      $.p = 2, hs(e, t, n, i);
    } finally {
      $.p = s, j.T = o;
    }
  }
  function hy(e, t, n, i) {
    var o = j.T;
    j.T = null;
    var s = $.p;
    try {
      $.p = 8, hs(e, t, n, i);
    } finally {
      $.p = s, j.T = o;
    }
  }
  function hs(e, t, n, i) {
    if (Mu) {
      var o = vs(i);
      if (o === null)
        ts(
          e,
          t,
          i,
          Nu,
          n
        ), Jm(e, i);
      else if (gy(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (Jm(e, i), t & 4 && -1 < vy.indexOf(e)) {
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
                    It(s), (xe & 6) === 0 && (mu = Tt() + 500, Qi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = aa(s, 2), g !== null && St(g, s, 2), hu(), ps(s, 2);
            }
          if (s = vs(i), s === null && ts(
            e,
            t,
            i,
            Nu,
            n
          ), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else
        ts(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function vs(e) {
    return e = gr(e), gs(e);
  }
  var Nu = null;
  function gs(e) {
    if (Nu = null, e = za(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
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
        switch (tv()) {
          case tc:
            return 2;
          case nc:
            return 8;
          case _l:
          case nv:
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
  var ys = !1, Bn = null, qn = null, $n = null, el = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Map(), Ln = [], vy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        el.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tl.delete(t.pointerId);
    }
  }
  function nl(e, t, n, i, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [o]
    }, t !== null && (t = Ta(t), t !== null && Gm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function gy(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Bn = nl(
          Bn,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return qn = nl(
          qn,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return $n = nl(
          $n,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return el.set(
          s,
          nl(
            el.get(s) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, tl.set(
          s,
          nl(
            tl.get(s) || null,
            e,
            t,
            n,
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
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = d(n), t !== null) {
            e.blockedOn = t, sc(e.priority, function() {
              Qm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, sc(e.priority, function() {
              Qm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ju(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = vs(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        vr = i, n.target.dispatchEvent(i), vr = null;
      } else
        return t = Ta(n), t !== null && Gm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Pm(e, t, n) {
    ju(e) && n.delete(t);
  }
  function yy() {
    ys = !1, Bn !== null && ju(Bn) && (Bn = null), qn !== null && ju(qn) && (qn = null), $n !== null && ju($n) && ($n = null), el.forEach(Pm), tl.forEach(Pm);
  }
  function Du(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ys || (ys = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      yy
    )));
  }
  var Zu = null;
  function Fm(e) {
    Zu !== e && (Zu = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Zu === e && (Zu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (gs(i || n) === null)
              continue;
            break;
          }
          var s = Ta(n);
          s !== null && (e.splice(t, 3), t -= 3, vo(
            s,
            {
              pending: !0,
              data: o,
              method: n.method,
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
    Bn !== null && Du(Bn, e), qn !== null && Du(qn, e), $n !== null && Du($n, e), el.forEach(t), tl.forEach(t);
    for (var n = 0; n < Ln.length; n++) {
      var i = Ln[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Ln.length && (n = Ln[0], n.blockedOn === null); )
      Wm(n), n.blockedOn === null && Ln.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], s = n[i + 1], m = o[ht] || null;
        if (typeof s == "function")
          m || Fm(n);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, m = s[ht] || null)
              g = m.formAction;
            else if (gs(o) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? n[i + 1] = g : (n.splice(i, 3), i -= 3), Fm(n);
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
      o !== null && (o(), o = null), i || setTimeout(n, 20);
    }
    function n() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function bs(e) {
    this._internalRoot = e;
  }
  Ru.prototype.render = bs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, i = jt();
    Lm(n, i, e, t, null, null);
  }, Ru.prototype.unmount = bs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Lm(e.current, 2, null, e, null, null), hu(), t[Sa] = null;
    }
  };
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = oc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++) ;
      Ln.splice(n, 0, e), n === 0 && Wm(e);
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
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = h(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var by = {
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
        fi = Uu.inject(
          by
        ), Et = Uu;
      } catch {
      }
  }
  return il.createRoot = function(e, t) {
    if (!c(e)) throw Error(r(299));
    var n = !1, i = "", o = rd, s = od, m = sd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = qm(
      e,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      o,
      s,
      m,
      Im
    ), e[Sa] = t.current, es(e), new bs(t);
  }, il.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(r(299));
    var i = !1, o = "", s = rd, m = od, g = sd, b = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (b = n.formState)), t = qm(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      b,
      s,
      m,
      g,
      Im
    ), t.context = $m(null), n = t.current, i = jt(), i = or(i), o = Cn(i), o.callback = null, Mn(n, o, i), n = i, t.current.lanes = n, mi(t, n), It(t), e[Sa] = t.current, es(e), new Ru(t);
  }, il.version = "19.2.8", il;
}
var cp;
function Cy() {
  if (cp) return Ss.exports;
  cp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), Ss.exports = xy(), Ss.exports;
}
var My = Cy();
const Ny = /* @__PURE__ */ Wp(My);
var ae = Hs();
const Pu = /* @__PURE__ */ Wp(ae);
const Pp = (...a) => a.filter((l, u, r) => !!l && l.trim() !== "" && r.indexOf(l) === u).join(" ").trim();
const jy = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Dy = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, u, r) => r ? r.toUpperCase() : u.toLowerCase()
);
const fp = (a) => {
  const l = Dy(a);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var Zy = {
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
const Ry = (a) => {
  for (const l in a)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
};
const Uy = ae.forwardRef(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: f,
    iconNode: d,
    ...p
  }, v) => ae.createElement(
    "svg",
    {
      ref: v,
      ...Zy,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: r ? Number(u) * 24 / Number(l) : u,
      className: Pp("lucide", c),
      ...!f && !Ry(p) && { "aria-hidden": "true" },
      ...p
    },
    [
      ...d.map(([h, y]) => ae.createElement(h, y)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const et = (a, l) => {
  const u = ae.forwardRef(
    ({ className: r, ...c }, f) => ae.createElement(Uy, {
      ref: f,
      iconNode: l,
      className: Pp(
        `lucide-${jy(fp(a))}`,
        `lucide-${a}`,
        r
      ),
      ...c
    })
  );
  return u.displayName = fp(a), u;
};
const Yy = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], dp = et("arrow-down", Yy);
const ky = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], mp = et("arrow-up", ky);
const Xy = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Hy = et("battery", Xy);
const By = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], qy = et("clock-3", By);
const $y = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], pp = et("house", $y);
const Ly = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Vy = et("lock-open", Ly);
const Gy = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Qy = et("lock", Gy);
const Ky = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Jy = et("map-pin", Ky);
const Wy = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Py = et("pause", Wy);
const Fy = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Iy = et("play", Fy);
const e0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], hp = et("plus", e0);
const t0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], n0 = et("rotate-ccw", t0);
const a0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], i0 = et("scan-line", a0);
const l0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], u0 = et("square", l0);
const r0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], o0 = et("timer", r0);
const s0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], vp = et("trash-2", s0);
const c0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Fp = et("x", c0);
const f0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], d0 = et("zoom-in", f0);
const m0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], p0 = et("zoom-out", m0);
var gp;
function R(a, l, u) {
  function r(p, v) {
    if (p._zod || Object.defineProperty(p, "_zod", {
      value: {
        def: v,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), p._zod.traits.has(a))
      return;
    p._zod.traits.add(a), l(p, v);
    const h = d.prototype, y = Object.keys(h);
    for (let _ = 0; _ < y.length; _++) {
      const A = y[_];
      A in p || (p[A] = h[A].bind(p));
    }
  }
  const c = u?.Parent ?? Object;
  class f extends c {
  }
  Object.defineProperty(f, "name", { value: a });
  function d(p) {
    var v;
    const h = u?.Parent ? new f() : this;
    r(h, p), (v = h._zod).deferred ?? (v.deferred = []);
    for (const y of h._zod.deferred)
      y();
    return h;
  }
  return Object.defineProperty(d, "init", { value: r }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (p) => u?.Parent && p instanceof u.Parent ? !0 : p?._zod?.traits?.has(a)
  }), Object.defineProperty(d, "name", { value: a }), d;
}
class ui extends Error {
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
function ya(a) {
  return Bs;
}
function eh(a) {
  const l = Object.values(a).filter((r) => typeof r == "number");
  return Object.entries(a).filter(([r, c]) => l.indexOf(+r) === -1).map(([r, c]) => c);
}
function Us(a, l) {
  return typeof l == "bigint" ? l.toString() : l;
}
function qs(a) {
  return {
    get value() {
      {
        const l = a();
        return Object.defineProperty(this, "value", { value: l }), l;
      }
    }
  };
}
function $s(a) {
  return a == null;
}
function Ls(a) {
  const l = a.startsWith("^") ? 1 : 0, u = a.endsWith("$") ? a.length - 1 : a.length;
  return a.slice(l, u);
}
function h0(a, l) {
  const u = a / l, r = Math.round(u), c = Number.EPSILON * Math.max(Math.abs(u), 1);
  return Math.abs(u - r) < c ? 0 : u - r;
}
const yp = /* @__PURE__ */ Symbol("evaluating");
function Ze(a, l, u) {
  let r;
  Object.defineProperty(a, l, {
    get() {
      if (r !== yp)
        return r === void 0 && (r = yp, r = u()), r;
    },
    set(c) {
      Object.defineProperty(a, l, {
        value: c
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function _a(a, l, u) {
  Object.defineProperty(a, l, {
    value: u,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Kn(...a) {
  const l = {};
  for (const u of a) {
    const r = Object.getOwnPropertyDescriptors(u);
    Object.assign(l, r);
  }
  return Object.defineProperties({}, l);
}
function bp(a) {
  return JSON.stringify(a);
}
function v0(a) {
  return a.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const th = "captureStackTrace" in Error ? Error.captureStackTrace : (...a) => {
};
function Lu(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
const g0 = /* @__PURE__ */ qs(() => {
  if (Bs.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const a = Function;
    return new a(""), !0;
  } catch {
    return !1;
  }
});
function sl(a) {
  if (Lu(a) === !1)
    return !1;
  const l = a.constructor;
  if (l === void 0 || typeof l != "function")
    return !0;
  const u = l.prototype;
  return !(Lu(u) === !1 || Object.prototype.hasOwnProperty.call(u, "isPrototypeOf") === !1);
}
function nh(a) {
  return sl(a) ? { ...a } : Array.isArray(a) ? [...a] : a instanceof Map ? new Map(a) : a instanceof Set ? new Set(a) : a;
}
const y0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ri(a) {
  return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Jn(a, l, u) {
  const r = new a._zod.constr(l ?? a._zod.def);
  return (!l || u?.parent) && (r._zod.parent = a), r;
}
function I(a) {
  const l = a;
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
function b0(a) {
  return Object.keys(a).filter((l) => a[l]._zod.optin === "optional" && a[l]._zod.optout === "optional");
}
const _0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function S0(a, l) {
  const u = a._zod.def, r = u.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = Kn(a._zod.def, {
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
  return Jn(a, f);
}
function z0(a, l) {
  const u = a._zod.def, r = u.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = Kn(a._zod.def, {
    get shape() {
      const d = { ...a._zod.def.shape };
      for (const p in l) {
        if (!(p in u.shape))
          throw new Error(`Unrecognized key: "${p}"`);
        l[p] && delete d[p];
      }
      return _a(this, "shape", d), d;
    },
    checks: []
  });
  return Jn(a, f);
}
function T0(a, l) {
  if (!sl(l))
    throw new Error("Invalid input to extend: expected a plain object");
  const u = a._zod.def.checks;
  if (u && u.length > 0) {
    const f = a._zod.def.shape;
    for (const d in l)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const c = Kn(a._zod.def, {
    get shape() {
      const f = { ...a._zod.def.shape, ...l };
      return _a(this, "shape", f), f;
    }
  });
  return Jn(a, c);
}
function E0(a, l) {
  if (!sl(l))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const u = Kn(a._zod.def, {
    get shape() {
      const r = { ...a._zod.def.shape, ...l };
      return _a(this, "shape", r), r;
    }
  });
  return Jn(a, u);
}
function A0(a, l) {
  if (a._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const u = Kn(a._zod.def, {
    get shape() {
      const r = { ...a._zod.def.shape, ...l._zod.def.shape };
      return _a(this, "shape", r), r;
    },
    get catchall() {
      return l._zod.def.catchall;
    },
    checks: l._zod.def.checks ?? []
  });
  return Jn(a, u);
}
function w0(a, l, u) {
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
          u[h] && (v[h] = a ? new a({
            type: "optional",
            innerType: p[h]
          }) : p[h]);
        }
      else
        for (const h in p)
          v[h] = a ? new a({
            type: "optional",
            innerType: p[h]
          }) : p[h];
      return _a(this, "shape", v), v;
    },
    checks: []
  });
  return Jn(l, d);
}
function O0(a, l, u) {
  const r = Kn(l._zod.def, {
    get shape() {
      const c = l._zod.def.shape, f = { ...c };
      if (u)
        for (const d in u) {
          if (!(d in f))
            throw new Error(`Unrecognized key: "${d}"`);
          u[d] && (f[d] = new a({
            type: "nonoptional",
            innerType: c[d]
          }));
        }
      else
        for (const d in c)
          f[d] = new a({
            type: "nonoptional",
            innerType: c[d]
          });
      return _a(this, "shape", f), f;
    }
  });
  return Jn(l, r);
}
function li(a, l = 0) {
  if (a.aborted === !0)
    return !0;
  for (let u = l; u < a.issues.length; u++)
    if (a.issues[u]?.continue !== !0)
      return !0;
  return !1;
}
function x0(a, l = 0) {
  if (a.aborted === !0)
    return !0;
  for (let u = l; u < a.issues.length; u++)
    if (a.issues[u]?.continue === !1)
      return !0;
  return !1;
}
function ah(a, l) {
  return l.map((u) => {
    var r;
    return (r = u).path ?? (r.path = []), u.path.unshift(a), u;
  });
}
function Yu(a) {
  return typeof a == "string" ? a : a?.message;
}
function ba(a, l, u) {
  const r = a.message ? a.message : Yu(a.inst?._zod.def?.error?.(a)) ?? Yu(l?.error?.(a)) ?? Yu(u.customError?.(a)) ?? Yu(u.localeError?.(a)) ?? "Invalid input", { inst: c, continue: f, input: d, ...p } = a;
  return p.path ?? (p.path = []), p.message = r, l?.reportInput && (p.input = d), p;
}
function Vs(a) {
  return Array.isArray(a) ? "array" : typeof a == "string" ? "string" : "unknown";
}
function cl(...a) {
  const [l, u, r] = a;
  return typeof l == "string" ? {
    message: l,
    code: "custom",
    input: u,
    inst: r
  } : { ...l };
}
const ih = (a, l) => {
  a.name = "$ZodError", Object.defineProperty(a, "_zod", {
    value: a._zod,
    enumerable: !1
  }), Object.defineProperty(a, "issues", {
    value: l,
    enumerable: !1
  }), a.message = JSON.stringify(l, Us, 2), Object.defineProperty(a, "toString", {
    value: () => a.message,
    enumerable: !1
  });
}, lh = R("$ZodError", ih), uh = R("$ZodError", ih, { Parent: Error });
function C0(a, l = (u) => u.message) {
  const u = {}, r = [];
  for (const c of a.issues)
    c.path.length > 0 ? (u[c.path[0]] = u[c.path[0]] || [], u[c.path[0]].push(l(c))) : r.push(l(c));
  return { formErrors: r, fieldErrors: u };
}
function M0(a, l = (u) => u.message) {
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
  return r(a), u;
}
const Gs = (a) => (l, u, r, c) => {
  const f = r ? { ...r, async: !1 } : { async: !1 }, d = l._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise)
    throw new ui();
  if (d.issues.length) {
    const p = new (c?.Err ?? a)(d.issues.map((v) => ba(v, f, ya())));
    throw th(p, c?.callee), p;
  }
  return d.value;
}, Qs = (a) => async (l, u, r, c) => {
  const f = r ? { ...r, async: !0 } : { async: !0 };
  let d = l._zod.run({ value: u, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const p = new (c?.Err ?? a)(d.issues.map((v) => ba(v, f, ya())));
    throw th(p, c?.callee), p;
  }
  return d.value;
}, Fu = (a) => (l, u, r) => {
  const c = r ? { ...r, async: !1 } : { async: !1 }, f = l._zod.run({ value: u, issues: [] }, c);
  if (f instanceof Promise)
    throw new ui();
  return f.issues.length ? {
    success: !1,
    error: new (a ?? lh)(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, N0 = /* @__PURE__ */ Fu(uh), Iu = (a) => async (l, u, r) => {
  const c = r ? { ...r, async: !0 } : { async: !0 };
  let f = l._zod.run({ value: u, issues: [] }, c);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new a(f.issues.map((d) => ba(d, c, ya())))
  } : { success: !0, data: f.value };
}, j0 = /* @__PURE__ */ Iu(uh), D0 = (a) => (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Gs(a)(l, u, c);
}, Z0 = (a) => (l, u, r) => Gs(a)(l, u, r), R0 = (a) => async (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Qs(a)(l, u, c);
}, U0 = (a) => async (l, u, r) => Qs(a)(l, u, r), Y0 = (a) => (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Fu(a)(l, u, c);
}, k0 = (a) => (l, u, r) => Fu(a)(l, u, r), X0 = (a) => async (l, u, r) => {
  const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Iu(a)(l, u, c);
}, H0 = (a) => async (l, u, r) => Iu(a)(l, u, r), B0 = /^[cC][0-9a-z]{6,}$/, q0 = /^[0-9a-z]+$/, $0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, L0 = /^[0-9a-vA-V]{20}$/, V0 = /^[A-Za-z0-9]{27}$/, G0 = /^[a-zA-Z0-9_-]{21}$/, Q0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, K0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, _p = (a) => a ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${a}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, J0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, W0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function P0() {
  return new RegExp(W0, "u");
}
const F0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, I0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, eb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, tb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, nb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, rh = /^[A-Za-z0-9_-]*$/, ab = /^https?$/, ib = /^\+[1-9]\d{6,14}$/, oh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", lb = /* @__PURE__ */ new RegExp(`^${oh}$`);
function sh(a) {
  const l = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof a.precision == "number" ? a.precision === -1 ? `${l}` : a.precision === 0 ? `${l}:[0-5]\\d` : `${l}:[0-5]\\d\\.\\d{${a.precision}}` : `${l}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ub(a) {
  return new RegExp(`^${sh(a)}$`);
}
function rb(a) {
  const l = sh({ precision: a.precision }), u = ["Z"];
  a.local && u.push(""), a.offset && u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${l}(?:${u.join("|")})`;
  return new RegExp(`^${oh}T(?:${r})$`);
}
const ob = (a) => {
  const l = a ? `[\\s\\S]{${a?.minimum ?? 0},${a?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${l}$`);
}, sb = /^-?\d+$/, cb = /^-?\d+(?:\.\d+)?$/, fb = /^(?:true|false)$/i, db = /^[^A-Z]*$/, mb = /^[^a-z]*$/, zt = /* @__PURE__ */ R("$ZodCheck", (a, l) => {
  var u;
  a._zod ?? (a._zod = {}), a._zod.def = l, (u = a._zod).onattach ?? (u.onattach = []);
}), ch = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, fh = /* @__PURE__ */ R("$ZodCheckLessThan", (a, l) => {
  zt.init(a, l);
  const u = ch[typeof l.value];
  a._zod.onattach.push((r) => {
    const c = r._zod.bag, f = (l.inclusive ? c.maximum : c.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    l.value < f && (l.inclusive ? c.maximum = l.value : c.exclusiveMaximum = l.value);
  }), a._zod.check = (r) => {
    (l.inclusive ? r.value <= l.value : r.value < l.value) || r.issues.push({
      origin: u,
      code: "too_big",
      maximum: typeof l.value == "object" ? l.value.getTime() : l.value,
      input: r.value,
      inclusive: l.inclusive,
      inst: a,
      continue: !l.abort
    });
  };
}), dh = /* @__PURE__ */ R("$ZodCheckGreaterThan", (a, l) => {
  zt.init(a, l);
  const u = ch[typeof l.value];
  a._zod.onattach.push((r) => {
    const c = r._zod.bag, f = (l.inclusive ? c.minimum : c.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    l.value > f && (l.inclusive ? c.minimum = l.value : c.exclusiveMinimum = l.value);
  }), a._zod.check = (r) => {
    (l.inclusive ? r.value >= l.value : r.value > l.value) || r.issues.push({
      origin: u,
      code: "too_small",
      minimum: typeof l.value == "object" ? l.value.getTime() : l.value,
      input: r.value,
      inclusive: l.inclusive,
      inst: a,
      continue: !l.abort
    });
  };
}), pb = /* @__PURE__ */ R("$ZodCheckMultipleOf", (a, l) => {
  zt.init(a, l), a._zod.onattach.push((u) => {
    var r;
    (r = u._zod.bag).multipleOf ?? (r.multipleOf = l.value);
  }), a._zod.check = (u) => {
    if (typeof u.value != typeof l.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof u.value == "bigint" ? u.value % l.value === BigInt(0) : h0(u.value, l.value) === 0) || u.issues.push({
      origin: typeof u.value,
      code: "not_multiple_of",
      divisor: l.value,
      input: u.value,
      inst: a,
      continue: !l.abort
    });
  };
}), hb = /* @__PURE__ */ R("$ZodCheckNumberFormat", (a, l) => {
  zt.init(a, l), l.format = l.format || "float64";
  const u = l.format?.includes("int"), r = u ? "int" : "number", [c, f] = _0[l.format];
  a._zod.onattach.push((d) => {
    const p = d._zod.bag;
    p.format = l.format, p.minimum = c, p.maximum = f, u && (p.pattern = sb);
  }), a._zod.check = (d) => {
    const p = d.value;
    if (u) {
      if (!Number.isInteger(p)) {
        d.issues.push({
          expected: r,
          format: l.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: a
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? d.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: a,
          origin: r,
          inclusive: !0,
          continue: !l.abort
        }) : d.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: a,
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
      inst: a,
      continue: !l.abort
    }), p > f && d.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: f,
      inclusive: !0,
      inst: a,
      continue: !l.abort
    });
  };
}), vb = /* @__PURE__ */ R("$ZodCheckMaxLength", (a, l) => {
  var u;
  zt.init(a, l), (u = a._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), a._zod.onattach.push((r) => {
    const c = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    l.maximum < c && (r._zod.bag.maximum = l.maximum);
  }), a._zod.check = (r) => {
    const c = r.value;
    if (c.length <= l.maximum)
      return;
    const d = Vs(c);
    r.issues.push({
      origin: d,
      code: "too_big",
      maximum: l.maximum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !l.abort
    });
  };
}), gb = /* @__PURE__ */ R("$ZodCheckMinLength", (a, l) => {
  var u;
  zt.init(a, l), (u = a._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), a._zod.onattach.push((r) => {
    const c = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    l.minimum > c && (r._zod.bag.minimum = l.minimum);
  }), a._zod.check = (r) => {
    const c = r.value;
    if (c.length >= l.minimum)
      return;
    const d = Vs(c);
    r.issues.push({
      origin: d,
      code: "too_small",
      minimum: l.minimum,
      inclusive: !0,
      input: c,
      inst: a,
      continue: !l.abort
    });
  };
}), yb = /* @__PURE__ */ R("$ZodCheckLengthEquals", (a, l) => {
  var u;
  zt.init(a, l), (u = a._zod.def).when ?? (u.when = (r) => {
    const c = r.value;
    return !$s(c) && c.length !== void 0;
  }), a._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.minimum = l.length, c.maximum = l.length, c.length = l.length;
  }), a._zod.check = (r) => {
    const c = r.value, f = c.length;
    if (f === l.length)
      return;
    const d = Vs(c), p = f > l.length;
    r.issues.push({
      origin: d,
      ...p ? { code: "too_big", maximum: l.length } : { code: "too_small", minimum: l.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: a,
      continue: !l.abort
    });
  };
}), er = /* @__PURE__ */ R("$ZodCheckStringFormat", (a, l) => {
  var u, r;
  zt.init(a, l), a._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.format = l.format, l.pattern && (f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(l.pattern));
  }), l.pattern ? (u = a._zod).check ?? (u.check = (c) => {
    l.pattern.lastIndex = 0, !l.pattern.test(c.value) && c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: l.format,
      input: c.value,
      ...l.pattern ? { pattern: l.pattern.toString() } : {},
      inst: a,
      continue: !l.abort
    });
  }) : (r = a._zod).check ?? (r.check = () => {
  });
}), bb = /* @__PURE__ */ R("$ZodCheckRegex", (a, l) => {
  er.init(a, l), a._zod.check = (u) => {
    l.pattern.lastIndex = 0, !l.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: u.value,
      pattern: l.pattern.toString(),
      inst: a,
      continue: !l.abort
    });
  };
}), _b = /* @__PURE__ */ R("$ZodCheckLowerCase", (a, l) => {
  l.pattern ?? (l.pattern = db), er.init(a, l);
}), Sb = /* @__PURE__ */ R("$ZodCheckUpperCase", (a, l) => {
  l.pattern ?? (l.pattern = mb), er.init(a, l);
}), zb = /* @__PURE__ */ R("$ZodCheckIncludes", (a, l) => {
  zt.init(a, l);
  const u = ri(l.includes), r = new RegExp(typeof l.position == "number" ? `^.{${l.position}}${u}` : u);
  l.pattern = r, a._zod.onattach.push((c) => {
    const f = c._zod.bag;
    f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(r);
  }), a._zod.check = (c) => {
    c.value.includes(l.includes, l.position) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: l.includes,
      input: c.value,
      inst: a,
      continue: !l.abort
    });
  };
}), Tb = /* @__PURE__ */ R("$ZodCheckStartsWith", (a, l) => {
  zt.init(a, l);
  const u = new RegExp(`^${ri(l.prefix)}.*`);
  l.pattern ?? (l.pattern = u), a._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), a._zod.check = (r) => {
    r.value.startsWith(l.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: l.prefix,
      input: r.value,
      inst: a,
      continue: !l.abort
    });
  };
}), Eb = /* @__PURE__ */ R("$ZodCheckEndsWith", (a, l) => {
  zt.init(a, l);
  const u = new RegExp(`.*${ri(l.suffix)}$`);
  l.pattern ?? (l.pattern = u), a._zod.onattach.push((r) => {
    const c = r._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(u);
  }), a._zod.check = (r) => {
    r.value.endsWith(l.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: l.suffix,
      input: r.value,
      inst: a,
      continue: !l.abort
    });
  };
}), Ab = /* @__PURE__ */ R("$ZodCheckOverwrite", (a, l) => {
  zt.init(a, l), a._zod.check = (u) => {
    u.value = l.tx(u.value);
  };
});
class wb {
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
}, Ve = /* @__PURE__ */ R("$ZodType", (a, l) => {
  var u;
  a ?? (a = {}), a._zod.def = l, a._zod.bag = a._zod.bag || {}, a._zod.version = Ob;
  const r = [...a._zod.def.checks ?? []];
  a._zod.traits.has("$ZodCheck") && r.unshift(a);
  for (const c of r)
    for (const f of c._zod.onattach)
      f(a);
  if (r.length === 0)
    (u = a._zod).deferred ?? (u.deferred = []), a._zod.deferred?.push(() => {
      a._zod.run = a._zod.parse;
    });
  else {
    const c = (d, p, v) => {
      let h = li(d), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (x0(d) || !_._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const A = d.issues.length, w = _._zod.check(d);
        if (w instanceof Promise && v?.async === !1)
          throw new ui();
        if (y || w instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await w, d.issues.length !== A && (h || (h = li(d, A)));
          });
        else {
          if (d.issues.length === A)
            continue;
          h || (h = li(d, A));
        }
      }
      return y ? y.then(() => d) : d;
    }, f = (d, p, v) => {
      if (li(d))
        return d.aborted = !0, d;
      const h = c(p, r, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new ui();
        return h.then((y) => a._zod.parse(y, v));
      }
      return a._zod.parse(h, v);
    };
    a._zod.run = (d, p) => {
      if (p.skipChecks)
        return a._zod.parse(d, p);
      if (p.direction === "backward") {
        const h = a._zod.parse({ value: d.value, issues: [] }, { ...p, skipChecks: !0 });
        return h instanceof Promise ? h.then((y) => f(y, d, p)) : f(h, d, p);
      }
      const v = a._zod.parse(d, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new ui();
        return v.then((h) => c(h, r, p));
      }
      return c(v, r, p);
    };
  }
  Ze(a, "~standard", () => ({
    validate: (c) => {
      try {
        const f = N0(a, c);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return j0(a, c).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ks = /* @__PURE__ */ R("$ZodString", (a, l) => {
  Ve.init(a, l), a._zod.pattern = [...a?._zod.bag?.patterns ?? []].pop() ?? ob(a._zod.bag), a._zod.parse = (u, r) => {
    if (l.coerce)
      try {
        u.value = String(u.value);
      } catch {
      }
    return typeof u.value == "string" || u.issues.push({
      expected: "string",
      code: "invalid_type",
      input: u.value,
      inst: a
    }), u;
  };
}), Be = /* @__PURE__ */ R("$ZodStringFormat", (a, l) => {
  er.init(a, l), Ks.init(a, l);
}), xb = /* @__PURE__ */ R("$ZodGUID", (a, l) => {
  l.pattern ?? (l.pattern = K0), Be.init(a, l);
}), Cb = /* @__PURE__ */ R("$ZodUUID", (a, l) => {
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
  Be.init(a, l);
}), Mb = /* @__PURE__ */ R("$ZodEmail", (a, l) => {
  l.pattern ?? (l.pattern = J0), Be.init(a, l);
}), Nb = /* @__PURE__ */ R("$ZodURL", (a, l) => {
  Be.init(a, l), a._zod.check = (u) => {
    try {
      const r = u.value.trim();
      if (!l.normalize && l.protocol?.source === ab.source && !/^https?:\/\//i.test(r)) {
        u.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: u.value,
          inst: a,
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
        inst: a,
        continue: !l.abort
      })), l.protocol && (l.protocol.lastIndex = 0, l.protocol.test(c.protocol.endsWith(":") ? c.protocol.slice(0, -1) : c.protocol) || u.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: l.protocol.source,
        input: u.value,
        inst: a,
        continue: !l.abort
      })), l.normalize ? u.value = c.href : u.value = r;
      return;
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "url",
        input: u.value,
        inst: a,
        continue: !l.abort
      });
    }
  };
}), jb = /* @__PURE__ */ R("$ZodEmoji", (a, l) => {
  l.pattern ?? (l.pattern = P0()), Be.init(a, l);
}), Db = /* @__PURE__ */ R("$ZodNanoID", (a, l) => {
  l.pattern ?? (l.pattern = G0), Be.init(a, l);
}), Zb = /* @__PURE__ */ R("$ZodCUID", (a, l) => {
  l.pattern ?? (l.pattern = B0), Be.init(a, l);
}), Rb = /* @__PURE__ */ R("$ZodCUID2", (a, l) => {
  l.pattern ?? (l.pattern = q0), Be.init(a, l);
}), Ub = /* @__PURE__ */ R("$ZodULID", (a, l) => {
  l.pattern ?? (l.pattern = $0), Be.init(a, l);
}), Yb = /* @__PURE__ */ R("$ZodXID", (a, l) => {
  l.pattern ?? (l.pattern = L0), Be.init(a, l);
}), kb = /* @__PURE__ */ R("$ZodKSUID", (a, l) => {
  l.pattern ?? (l.pattern = V0), Be.init(a, l);
}), Xb = /* @__PURE__ */ R("$ZodISODateTime", (a, l) => {
  l.pattern ?? (l.pattern = rb(l)), Be.init(a, l);
}), Hb = /* @__PURE__ */ R("$ZodISODate", (a, l) => {
  l.pattern ?? (l.pattern = lb), Be.init(a, l);
}), Bb = /* @__PURE__ */ R("$ZodISOTime", (a, l) => {
  l.pattern ?? (l.pattern = ub(l)), Be.init(a, l);
}), qb = /* @__PURE__ */ R("$ZodISODuration", (a, l) => {
  l.pattern ?? (l.pattern = Q0), Be.init(a, l);
}), $b = /* @__PURE__ */ R("$ZodIPv4", (a, l) => {
  l.pattern ?? (l.pattern = F0), Be.init(a, l), a._zod.bag.format = "ipv4";
}), Lb = /* @__PURE__ */ R("$ZodIPv6", (a, l) => {
  l.pattern ?? (l.pattern = I0), Be.init(a, l), a._zod.bag.format = "ipv6", a._zod.check = (u) => {
    try {
      new URL(`http://[${u.value}]`);
    } catch {
      u.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: u.value,
        inst: a,
        continue: !l.abort
      });
    }
  };
}), Vb = /* @__PURE__ */ R("$ZodCIDRv4", (a, l) => {
  l.pattern ?? (l.pattern = eb), Be.init(a, l);
}), Gb = /* @__PURE__ */ R("$ZodCIDRv6", (a, l) => {
  l.pattern ?? (l.pattern = tb), Be.init(a, l), a._zod.check = (u) => {
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
        inst: a,
        continue: !l.abort
      });
    }
  };
});
function mh(a) {
  if (a === "")
    return !0;
  if (/\s/.test(a) || a.length % 4 !== 0)
    return !1;
  try {
    return atob(a), !0;
  } catch {
    return !1;
  }
}
const Qb = /* @__PURE__ */ R("$ZodBase64", (a, l) => {
  l.pattern ?? (l.pattern = nb), Be.init(a, l), a._zod.bag.contentEncoding = "base64", a._zod.check = (u) => {
    mh(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64",
      input: u.value,
      inst: a,
      continue: !l.abort
    });
  };
});
function Kb(a) {
  if (!rh.test(a))
    return !1;
  const l = a.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), u = l.padEnd(Math.ceil(l.length / 4) * 4, "=");
  return mh(u);
}
const Jb = /* @__PURE__ */ R("$ZodBase64URL", (a, l) => {
  l.pattern ?? (l.pattern = rh), Be.init(a, l), a._zod.bag.contentEncoding = "base64url", a._zod.check = (u) => {
    Kb(u.value) || u.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: u.value,
      inst: a,
      continue: !l.abort
    });
  };
}), Wb = /* @__PURE__ */ R("$ZodE164", (a, l) => {
  l.pattern ?? (l.pattern = ib), Be.init(a, l);
});
function Pb(a, l = null) {
  try {
    const u = a.split(".");
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
const Fb = /* @__PURE__ */ R("$ZodJWT", (a, l) => {
  Be.init(a, l), a._zod.check = (u) => {
    Pb(u.value, l.alg) || u.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: u.value,
      inst: a,
      continue: !l.abort
    });
  };
}), ph = /* @__PURE__ */ R("$ZodNumber", (a, l) => {
  Ve.init(a, l), a._zod.pattern = a._zod.bag.pattern ?? cb, a._zod.parse = (u, r) => {
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
      inst: a,
      ...f ? { received: f } : {}
    }), u;
  };
}), Ib = /* @__PURE__ */ R("$ZodNumberFormat", (a, l) => {
  hb.init(a, l), ph.init(a, l);
}), e1 = /* @__PURE__ */ R("$ZodBoolean", (a, l) => {
  Ve.init(a, l), a._zod.pattern = fb, a._zod.parse = (u, r) => {
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
      inst: a
    }), u;
  };
}), t1 = /* @__PURE__ */ R("$ZodUnknown", (a, l) => {
  Ve.init(a, l), a._zod.parse = (u) => u;
}), n1 = /* @__PURE__ */ R("$ZodNever", (a, l) => {
  Ve.init(a, l), a._zod.parse = (u, r) => (u.issues.push({
    expected: "never",
    code: "invalid_type",
    input: u.value,
    inst: a
  }), u);
});
function Sp(a, l, u) {
  a.issues.length && l.issues.push(...ah(u, a.issues)), l.value[u] = a.value;
}
const a1 = /* @__PURE__ */ R("$ZodArray", (a, l) => {
  Ve.init(a, l), a._zod.parse = (u, r) => {
    const c = u.value;
    if (!Array.isArray(c))
      return u.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: a
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
function Vu(a, l, u, r, c, f) {
  const d = u in r;
  if (a.issues.length) {
    if (c && f && !d)
      return;
    l.issues.push(...ah(u, a.issues));
  }
  if (!d && !c) {
    a.issues.length || l.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [u]
    });
    return;
  }
  a.value === void 0 ? d && (l.value[u] = void 0) : l.value[u] = a.value;
}
function hh(a) {
  const l = Object.keys(a.shape);
  for (const r of l)
    if (!a.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const u = b0(a.shape);
  return {
    ...a,
    keys: l,
    keySet: new Set(l),
    numKeys: l.length,
    optionalKeys: new Set(u)
  };
}
function vh(a, l, u, r, c, f) {
  const d = [], p = c.keySet, v = c.catchall._zod, h = v.def.type, y = v.optin === "optional", _ = v.optout === "optional";
  for (const A in l) {
    if (A === "__proto__" || p.has(A))
      continue;
    if (h === "never") {
      d.push(A);
      continue;
    }
    const w = v.run({ value: l[A], issues: [] }, r);
    w instanceof Promise ? a.push(w.then((M) => Vu(M, u, A, l, y, _))) : Vu(w, u, A, l, y, _);
  }
  return d.length && u.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: l,
    inst: f
  }), a.length ? Promise.all(a).then(() => u) : u;
}
const i1 = /* @__PURE__ */ R("$ZodObject", (a, l) => {
  if (Ve.init(a, l), !Object.getOwnPropertyDescriptor(l, "shape")?.get) {
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
  Ze(a._zod, "propValues", () => {
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
  a._zod.parse = (p, v) => {
    d ?? (d = r.value);
    const h = p.value;
    if (!c(h))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: a
      }), p;
    p.value = {};
    const y = [], _ = d.shape;
    for (const A of d.keys) {
      const w = _[A], M = w._zod.optin === "optional", H = w._zod.optout === "optional", X = w._zod.run({ value: h[A], issues: [] }, v);
      X instanceof Promise ? y.push(X.then((B) => Vu(B, p, A, h, M, H))) : Vu(X, p, A, h, M, H);
    }
    return f ? vh(y, h, p, v, r.value, a) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), l1 = /* @__PURE__ */ R("$ZodObjectJIT", (a, l) => {
  i1.init(a, l);
  const u = a._zod.parse, r = qs(() => hh(l)), c = (A) => {
    const w = new wb(["shape", "payload", "ctx"]), M = r.value, H = (q) => {
      const k = bp(q);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    w.write("const input = payload.value;");
    const X = /* @__PURE__ */ Object.create(null);
    let B = 0;
    for (const q of M.keys)
      X[q] = `key_${B++}`;
    w.write("const newResult = {};");
    for (const q of M.keys) {
      const k = X[q], V = bp(q), te = A[q], G = te?._zod?.optin === "optional", ie = te?._zod?.optout === "optional";
      w.write(`const ${k} = ${H(q)};`), G && ie ? w.write(`
        if (${k}.issues.length) {
          if (${V} in input) {
            payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${V}, ...iss.path] : [${V}]
            })));
          }
        }
        
        if (${k}.value === undefined) {
          if (${V} in input) {
            newResult[${V}] = undefined;
          }
        } else {
          newResult[${V}] = ${k}.value;
        }
        
      `) : G ? w.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${V}, ...iss.path] : [${V}]
          })));
        }
        
        if (${k}.value === undefined) {
          if (${V} in input) {
            newResult[${V}] = undefined;
          }
        } else {
          newResult[${V}] = ${k}.value;
        }
        
      `) : w.write(`
        const ${k}_present = ${V} in input;
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${V}, ...iss.path] : [${V}]
          })));
        }
        if (!${k}_present && !${k}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${V}]
          });
        }

        if (${k}_present) {
          if (${k}.value === undefined) {
            newResult[${V}] = undefined;
          } else {
            newResult[${V}] = ${k}.value;
          }
        }

      `);
    }
    w.write("payload.value = newResult;"), w.write("return payload;");
    const P = w.compile();
    return (q, k) => P(A, q, k);
  };
  let f;
  const d = Lu, p = !Bs.jitless, h = p && g0.value, y = l.catchall;
  let _;
  a._zod.parse = (A, w) => {
    _ ?? (_ = r.value);
    const M = A.value;
    return d(M) ? p && h && w?.async === !1 && w.jitless !== !0 ? (f || (f = c(l.shape)), A = f(A, w), y ? vh([], M, A, w, _, a) : A) : u(A, w) : (A.issues.push({
      expected: "object",
      code: "invalid_type",
      input: M,
      inst: a
    }), A);
  };
});
function zp(a, l, u, r) {
  for (const f of a)
    if (f.issues.length === 0)
      return l.value = f.value, l;
  const c = a.filter((f) => !li(f));
  return c.length === 1 ? (l.value = c[0].value, c[0]) : (l.issues.push({
    code: "invalid_union",
    input: l.value,
    inst: u,
    errors: a.map((f) => f.issues.map((d) => ba(d, r, ya())))
  }), l);
}
const u1 = /* @__PURE__ */ R("$ZodUnion", (a, l) => {
  Ve.init(a, l), Ze(a._zod, "optin", () => l.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Ze(a._zod, "optout", () => l.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Ze(a._zod, "values", () => {
    if (l.options.every((r) => r._zod.values))
      return new Set(l.options.flatMap((r) => Array.from(r._zod.values)));
  }), Ze(a._zod, "pattern", () => {
    if (l.options.every((r) => r._zod.pattern)) {
      const r = l.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${r.map((c) => Ls(c.source)).join("|")})$`);
    }
  });
  const u = l.options.length === 1 ? l.options[0]._zod.run : null;
  a._zod.parse = (r, c) => {
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
    return f ? Promise.all(d).then((p) => zp(p, r, a, c)) : zp(d, r, a, c);
  };
}), r1 = /* @__PURE__ */ R("$ZodIntersection", (a, l) => {
  Ve.init(a, l), a._zod.parse = (u, r) => {
    const c = u.value, f = l.left._zod.run({ value: c, issues: [] }, r), d = l.right._zod.run({ value: c, issues: [] }, r);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => Tp(u, v, h)) : Tp(u, f, d);
  };
});
function Ys(a, l) {
  if (a === l)
    return { valid: !0, data: a };
  if (a instanceof Date && l instanceof Date && +a == +l)
    return { valid: !0, data: a };
  if (sl(a) && sl(l)) {
    const u = Object.keys(l), r = Object.keys(a).filter((f) => u.indexOf(f) !== -1), c = { ...a, ...l };
    for (const f of r) {
      const d = Ys(a[f], l[f]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [f, ...d.mergeErrorPath]
        };
      c[f] = d.data;
    }
    return { valid: !0, data: c };
  }
  if (Array.isArray(a) && Array.isArray(l)) {
    if (a.length !== l.length)
      return { valid: !1, mergeErrorPath: [] };
    const u = [];
    for (let r = 0; r < a.length; r++) {
      const c = a[r], f = l[r], d = Ys(c, f);
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
function Tp(a, l, u) {
  const r = /* @__PURE__ */ new Map();
  let c;
  for (const p of l.issues)
    if (p.code === "unrecognized_keys") {
      c ?? (c = p);
      for (const v of p.keys)
        r.has(v) || r.set(v, {}), r.get(v).l = !0;
    } else
      a.issues.push(p);
  for (const p of u.issues)
    if (p.code === "unrecognized_keys")
      for (const v of p.keys)
        r.has(v) || r.set(v, {}), r.get(v).r = !0;
    else
      a.issues.push(p);
  const f = [...r].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (f.length && c && a.issues.push({ ...c, keys: f }), li(a))
    return a;
  const d = Ys(l.value, u.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return a.value = d.data, a;
}
const o1 = /* @__PURE__ */ R("$ZodEnum", (a, l) => {
  Ve.init(a, l);
  const u = eh(l.entries), r = new Set(u);
  a._zod.values = r, a._zod.pattern = new RegExp(`^(${u.filter((c) => y0.has(typeof c)).map((c) => typeof c == "string" ? ri(c) : c.toString()).join("|")})$`), a._zod.parse = (c, f) => {
    const d = c.value;
    return r.has(d) || c.issues.push({
      code: "invalid_value",
      values: u,
      input: d,
      inst: a
    }), c;
  };
}), s1 = /* @__PURE__ */ R("$ZodLiteral", (a, l) => {
  if (Ve.init(a, l), l.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const u = new Set(l.values);
  a._zod.values = u, a._zod.pattern = new RegExp(`^(${l.values.map((r) => typeof r == "string" ? ri(r) : r ? ri(r.toString()) : String(r)).join("|")})$`), a._zod.parse = (r, c) => {
    const f = r.value;
    return u.has(f) || r.issues.push({
      code: "invalid_value",
      values: l.values,
      input: f,
      inst: a
    }), r;
  };
}), c1 = /* @__PURE__ */ R("$ZodTransform", (a, l) => {
  Ve.init(a, l), a._zod.optin = "optional", a._zod.parse = (u, r) => {
    if (r.direction === "backward")
      throw new Ip(a.constructor.name);
    const c = l.transform(u.value, u);
    if (r.async)
      return (c instanceof Promise ? c : Promise.resolve(c)).then((d) => (u.value = d, u.fallback = !0, u));
    if (c instanceof Promise)
      throw new ui();
    return u.value = c, u.fallback = !0, u;
  };
});
function Ep(a, l) {
  return l === void 0 && (a.issues.length || a.fallback) ? { issues: [], value: void 0 } : a;
}
const gh = /* @__PURE__ */ R("$ZodOptional", (a, l) => {
  Ve.init(a, l), a._zod.optin = "optional", a._zod.optout = "optional", Ze(a._zod, "values", () => l.innerType._zod.values ? /* @__PURE__ */ new Set([...l.innerType._zod.values, void 0]) : void 0), Ze(a._zod, "pattern", () => {
    const u = l.innerType._zod.pattern;
    return u ? new RegExp(`^(${Ls(u.source)})?$`) : void 0;
  }), a._zod.parse = (u, r) => {
    if (l.innerType._zod.optin === "optional") {
      const c = u.value, f = l.innerType._zod.run(u, r);
      return f instanceof Promise ? f.then((d) => Ep(d, c)) : Ep(f, c);
    }
    return u.value === void 0 ? u : l.innerType._zod.run(u, r);
  };
}), f1 = /* @__PURE__ */ R("$ZodExactOptional", (a, l) => {
  gh.init(a, l), Ze(a._zod, "values", () => l.innerType._zod.values), Ze(a._zod, "pattern", () => l.innerType._zod.pattern), a._zod.parse = (u, r) => l.innerType._zod.run(u, r);
}), d1 = /* @__PURE__ */ R("$ZodNullable", (a, l) => {
  Ve.init(a, l), Ze(a._zod, "optin", () => l.innerType._zod.optin), Ze(a._zod, "optout", () => l.innerType._zod.optout), Ze(a._zod, "pattern", () => {
    const u = l.innerType._zod.pattern;
    return u ? new RegExp(`^(${Ls(u.source)}|null)$`) : void 0;
  }), Ze(a._zod, "values", () => l.innerType._zod.values ? /* @__PURE__ */ new Set([...l.innerType._zod.values, null]) : void 0), a._zod.parse = (u, r) => u.value === null ? u : l.innerType._zod.run(u, r);
}), m1 = /* @__PURE__ */ R("$ZodDefault", (a, l) => {
  Ve.init(a, l), a._zod.optin = "optional", Ze(a._zod, "values", () => l.innerType._zod.values), a._zod.parse = (u, r) => {
    if (r.direction === "backward")
      return l.innerType._zod.run(u, r);
    if (u.value === void 0)
      return u.value = l.defaultValue, u;
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => Ap(f, l)) : Ap(c, l);
  };
});
function Ap(a, l) {
  return a.value === void 0 && (a.value = l.defaultValue), a;
}
const p1 = /* @__PURE__ */ R("$ZodPrefault", (a, l) => {
  Ve.init(a, l), a._zod.optin = "optional", Ze(a._zod, "values", () => l.innerType._zod.values), a._zod.parse = (u, r) => (r.direction === "backward" || u.value === void 0 && (u.value = l.defaultValue), l.innerType._zod.run(u, r));
}), h1 = /* @__PURE__ */ R("$ZodNonOptional", (a, l) => {
  Ve.init(a, l), Ze(a._zod, "values", () => {
    const u = l.innerType._zod.values;
    return u ? new Set([...u].filter((r) => r !== void 0)) : void 0;
  }), a._zod.parse = (u, r) => {
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => wp(f, a)) : wp(c, a);
  };
});
function wp(a, l) {
  return !a.issues.length && a.value === void 0 && a.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: a.value,
    inst: l
  }), a;
}
const v1 = /* @__PURE__ */ R("$ZodCatch", (a, l) => {
  Ve.init(a, l), a._zod.optin = "optional", Ze(a._zod, "optout", () => l.innerType._zod.optout), Ze(a._zod, "values", () => l.innerType._zod.values), a._zod.parse = (u, r) => {
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
}), g1 = /* @__PURE__ */ R("$ZodPipe", (a, l) => {
  Ve.init(a, l), Ze(a._zod, "values", () => l.in._zod.values), Ze(a._zod, "optin", () => l.in._zod.optin), Ze(a._zod, "optout", () => l.out._zod.optout), Ze(a._zod, "propValues", () => l.in._zod.propValues), a._zod.parse = (u, r) => {
    if (r.direction === "backward") {
      const f = l.out._zod.run(u, r);
      return f instanceof Promise ? f.then((d) => ku(d, l.in, r)) : ku(f, l.in, r);
    }
    const c = l.in._zod.run(u, r);
    return c instanceof Promise ? c.then((f) => ku(f, l.out, r)) : ku(c, l.out, r);
  };
});
function ku(a, l, u) {
  return a.issues.length ? (a.aborted = !0, a) : l._zod.run({ value: a.value, issues: a.issues, fallback: a.fallback }, u);
}
const y1 = /* @__PURE__ */ R("$ZodReadonly", (a, l) => {
  Ve.init(a, l), Ze(a._zod, "propValues", () => l.innerType._zod.propValues), Ze(a._zod, "values", () => l.innerType._zod.values), Ze(a._zod, "optin", () => l.innerType?._zod?.optin), Ze(a._zod, "optout", () => l.innerType?._zod?.optout), a._zod.parse = (u, r) => {
    if (r.direction === "backward")
      return l.innerType._zod.run(u, r);
    const c = l.innerType._zod.run(u, r);
    return c instanceof Promise ? c.then(Op) : Op(c);
  };
});
function Op(a) {
  return a.value = Object.freeze(a.value), a;
}
const b1 = /* @__PURE__ */ R("$ZodCustom", (a, l) => {
  zt.init(a, l), Ve.init(a, l), a._zod.parse = (u, r) => u, a._zod.check = (u) => {
    const r = u.value, c = l.fn(r);
    if (c instanceof Promise)
      return c.then((f) => xp(f, u, r, a));
    xp(c, u, r, a);
  };
});
function xp(a, l, u, r) {
  if (!a) {
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
class _1 {
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
function S1() {
  return new _1();
}
(Cp = globalThis).__zod_globalRegistry ?? (Cp.__zod_globalRegistry = S1());
const rl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function z1(a, l) {
  return new a({
    type: "string",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(a, l) {
  return new a({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Mp(a, l) {
  return new a({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function E1(a, l) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function A1(a, l) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function w1(a, l) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(a, l) {
  return new a({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(a, l) {
  return new a({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(a, l) {
  return new a({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(a, l) {
  return new a({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(a, l) {
  return new a({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(a, l) {
  return new a({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(a, l) {
  return new a({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(a, l) {
  return new a({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(a, l) {
  return new a({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(a, l) {
  return new a({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(a, l) {
  return new a({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function k1(a, l) {
  return new a({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function X1(a, l) {
  return new a({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function H1(a, l) {
  return new a({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function B1(a, l) {
  return new a({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function q1(a, l) {
  return new a({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function $1(a, l) {
  return new a({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(a, l) {
  return new a({
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
function V1(a, l) {
  return new a({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function G1(a, l) {
  return new a({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Q1(a, l) {
  return new a({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function K1(a, l) {
  return new a({
    type: "number",
    checks: [],
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function J1(a, l) {
  return new a({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function W1(a, l) {
  return new a({
    type: "boolean",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function P1(a) {
  return new a({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function F1(a, l) {
  return new a({
    type: "never",
    ...I(l)
  });
}
// @__NO_SIDE_EFFECTS__
function Np(a, l) {
  return new fh({
    check: "less_than",
    ...I(l),
    value: a,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ws(a, l) {
  return new fh({
    check: "less_than",
    ...I(l),
    value: a,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function jp(a, l) {
  return new dh({
    check: "greater_than",
    ...I(l),
    value: a,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Os(a, l) {
  return new dh({
    check: "greater_than",
    ...I(l),
    value: a,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Dp(a, l) {
  return new pb({
    check: "multiple_of",
    ...I(l),
    value: a
  });
}
// @__NO_SIDE_EFFECTS__
function yh(a, l) {
  return new vb({
    check: "max_length",
    ...I(l),
    maximum: a
  });
}
// @__NO_SIDE_EFFECTS__
function Gu(a, l) {
  return new gb({
    check: "min_length",
    ...I(l),
    minimum: a
  });
}
// @__NO_SIDE_EFFECTS__
function bh(a, l) {
  return new yb({
    check: "length_equals",
    ...I(l),
    length: a
  });
}
// @__NO_SIDE_EFFECTS__
function I1(a, l) {
  return new bb({
    check: "string_format",
    format: "regex",
    ...I(l),
    pattern: a
  });
}
// @__NO_SIDE_EFFECTS__
function e_(a) {
  return new _b({
    check: "string_format",
    format: "lowercase",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function t_(a) {
  return new Sb({
    check: "string_format",
    format: "uppercase",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function n_(a, l) {
  return new zb({
    check: "string_format",
    format: "includes",
    ...I(l),
    includes: a
  });
}
// @__NO_SIDE_EFFECTS__
function a_(a, l) {
  return new Tb({
    check: "string_format",
    format: "starts_with",
    ...I(l),
    prefix: a
  });
}
// @__NO_SIDE_EFFECTS__
function i_(a, l) {
  return new Eb({
    check: "string_format",
    format: "ends_with",
    ...I(l),
    suffix: a
  });
}
// @__NO_SIDE_EFFECTS__
function si(a) {
  return new Ab({
    check: "overwrite",
    tx: a
  });
}
// @__NO_SIDE_EFFECTS__
function l_(a) {
  return /* @__PURE__ */ si((l) => l.normalize(a));
}
// @__NO_SIDE_EFFECTS__
function u_() {
  return /* @__PURE__ */ si((a) => a.trim());
}
// @__NO_SIDE_EFFECTS__
function r_() {
  return /* @__PURE__ */ si((a) => a.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function o_() {
  return /* @__PURE__ */ si((a) => a.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function s_() {
  return /* @__PURE__ */ si((a) => v0(a));
}
// @__NO_SIDE_EFFECTS__
function c_(a, l, u) {
  return new a({
    type: "array",
    element: l,
    // get element() {
    //   return element;
    // },
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function f_(a, l, u) {
  return new a({
    type: "custom",
    check: "custom",
    fn: l,
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function d_(a, l) {
  const u = /* @__PURE__ */ m_((r) => (r.addIssue = (c) => {
    if (typeof c == "string")
      r.issues.push(cl(c, r.value, u._zod.def));
    else {
      const f = c;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = r.value), f.inst ?? (f.inst = u), f.continue ?? (f.continue = !u._zod.def.abort), r.issues.push(cl(f));
    }
  }, a(r.value, r)), l);
  return u;
}
// @__NO_SIDE_EFFECTS__
function m_(a, l) {
  const u = new zt({
    check: "custom",
    ...I(l)
  });
  return u._zod.check = a, u;
}
function _h(a) {
  let l = a?.target ?? "draft-2020-12";
  return l === "draft-4" && (l = "draft-04"), l === "draft-7" && (l = "draft-07"), {
    processors: a.processors ?? {},
    metadataRegistry: a?.metadata ?? rl,
    target: l,
    unrepresentable: a?.unrepresentable ?? "throw",
    override: a?.override ?? (() => {
    }),
    io: a?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: a?.cycles ?? "ref",
    reused: a?.reused ?? "inline",
    external: a?.external ?? void 0
  };
}
function ct(a, l, u = { path: [], schemaPath: [] }) {
  var r;
  const c = a._zod.def, f = l.seen.get(a);
  if (f)
    return f.count++, u.schemaPath.includes(a) && (f.cycle = u.path), f.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: u.path };
  l.seen.set(a, d);
  const p = a._zod.toJSONSchema?.();
  if (p)
    d.schema = p;
  else {
    const y = {
      ...u,
      schemaPath: [...u.schemaPath, a],
      path: u.path
    };
    if (a._zod.processJSONSchema)
      a._zod.processJSONSchema(l, d.schema, y);
    else {
      const A = d.schema, w = l.processors[c.type];
      if (!w)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${c.type}`);
      w(a, l, A, y);
    }
    const _ = a._zod.parent;
    _ && (d.ref || (d.ref = _), ct(_, l, y), l.seen.get(_).isParent = !0);
  }
  const v = l.metadataRegistry.get(a);
  return v && Object.assign(d.schema, v), l.io === "input" && mt(a) && (delete d.schema.examples, delete d.schema.default), l.io === "input" && "_prefault" in d.schema && ((r = d.schema).default ?? (r.default = d.schema._prefault)), delete d.schema._prefault, l.seen.get(a).schema;
}
function Sh(a, l) {
  const u = a.seen.get(l);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const d of a.seen.entries()) {
    const p = a.metadataRegistry.get(d[0])?.id;
    if (p) {
      const v = r.get(p);
      if (v && v !== d[0])
        throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(p, d[0]);
    }
  }
  const c = (d) => {
    const p = a.target === "draft-2020-12" ? "$defs" : "definitions";
    if (a.external) {
      const _ = a.external.registry.get(d[0])?.id, A = a.external.uri ?? ((M) => M);
      if (_)
        return { ref: A(_) };
      const w = d[1].defId ?? d[1].schema.id ?? `schema${a.counter++}`;
      return d[1].defId = w, { defId: w, ref: `${A("__shared")}#/${p}/${w}` };
    }
    if (d[1] === u)
      return { ref: "#" };
    const h = `#/${p}/`, y = d[1].schema.id ?? `__schema${a.counter++}`;
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
  if (a.cycles === "throw")
    for (const d of a.seen.entries()) {
      const p = d[1];
      if (p.cycle)
        throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const d of a.seen.entries()) {
    const p = d[1];
    if (l === d[0]) {
      f(d);
      continue;
    }
    if (a.external) {
      const h = a.external.registry.get(d[0])?.id;
      if (l !== d[0] && h) {
        f(d);
        continue;
      }
    }
    if (a.metadataRegistry.get(d[0])?.id) {
      f(d);
      continue;
    }
    if (p.cycle) {
      f(d);
      continue;
    }
    if (p.count > 1 && a.reused === "ref") {
      f(d);
      continue;
    }
  }
}
function zh(a, l) {
  const u = a.seen.get(l);
  if (!u)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (p) => {
    const v = a.seen.get(p);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, y = { ...h }, _ = v.ref;
    if (v.ref = null, _) {
      r(_);
      const w = a.seen.get(_), M = w.schema;
      if (M.$ref && (a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(M)) : Object.assign(h, M), Object.assign(h, y), p._zod.parent === _)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in y || delete h[X];
      if (M.$ref && w.def)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in w.def && JSON.stringify(h[X]) === JSON.stringify(w.def[X]) && delete h[X];
    }
    const A = p._zod.parent;
    if (A && A !== _) {
      r(A);
      const w = a.seen.get(A);
      if (w?.schema.$ref && (h.$ref = w.schema.$ref, w.def))
        for (const M in h)
          M === "$ref" || M === "allOf" || M in w.def && JSON.stringify(h[M]) === JSON.stringify(w.def[M]) && delete h[M];
    }
    a.override({
      zodSchema: p,
      jsonSchema: h,
      path: v.path ?? []
    });
  };
  for (const p of [...a.seen.entries()].reverse())
    r(p[0]);
  const c = {};
  if (a.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : a.target === "draft-07" ? c.$schema = "http://json-schema.org/draft-07/schema#" : a.target === "draft-04" ? c.$schema = "http://json-schema.org/draft-04/schema#" : a.target, a.external?.uri) {
    const p = a.external.registry.get(l)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    c.$id = a.external.uri(p);
  }
  Object.assign(c, u.def ?? u.schema);
  const f = a.metadataRegistry.get(l)?.id;
  f !== void 0 && c.id === f && delete c.id;
  const d = a.external?.defs ?? {};
  for (const p of a.seen.entries()) {
    const v = p[1];
    v.def && v.defId && (v.def.id === v.defId && delete v.def.id, d[v.defId] = v.def);
  }
  a.external || Object.keys(d).length > 0 && (a.target === "draft-2020-12" ? c.$defs = d : c.definitions = d);
  try {
    const p = JSON.parse(JSON.stringify(c));
    return Object.defineProperty(p, "~standard", {
      value: {
        ...l["~standard"],
        jsonSchema: {
          input: Qu(l, "input", a.processors),
          output: Qu(l, "output", a.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function mt(a, l) {
  const u = l ?? { seen: /* @__PURE__ */ new Set() };
  if (u.seen.has(a))
    return !1;
  u.seen.add(a);
  const r = a._zod.def;
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
    return a._zod.traits.has("$ZodCodec") ? !0 : mt(r.in, u) || mt(r.out, u);
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
const p_ = (a, l = {}) => (u) => {
  const r = _h({ ...u, processors: l });
  return ct(a, r), Sh(r, a), zh(r, a);
}, Qu = (a, l, u = {}) => (r) => {
  const { libraryOptions: c, target: f } = r ?? {}, d = _h({ ...c ?? {}, target: f, io: l, processors: u });
  return ct(a, d), Sh(d, a), zh(d, a);
}, h_ = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, v_ = (a, l, u, r) => {
  const c = u;
  c.type = "string";
  const { minimum: f, maximum: d, format: p, patterns: v, contentEncoding: h } = a._zod.bag;
  if (typeof f == "number" && (c.minLength = f), typeof d == "number" && (c.maxLength = d), p && (c.format = h_[p] ?? p, c.format === "" && delete c.format, p === "time" && delete c.format), h && (c.contentEncoding = h), v && v.size > 0) {
    const y = [...v];
    y.length === 1 ? c.pattern = y[0].source : y.length > 1 && (c.allOf = [
      ...y.map((_) => ({
        ...l.target === "draft-07" || l.target === "draft-04" || l.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: _.source
      }))
    ]);
  }
}, g_ = (a, l, u, r) => {
  const c = u, { minimum: f, maximum: d, format: p, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: y } = a._zod.bag;
  typeof p == "string" && p.includes("int") ? c.type = "integer" : c.type = "number";
  const _ = typeof y == "number" && y >= (f ?? Number.NEGATIVE_INFINITY), A = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), w = l.target === "draft-04" || l.target === "openapi-3.0";
  _ ? w ? (c.minimum = y, c.exclusiveMinimum = !0) : c.exclusiveMinimum = y : typeof f == "number" && (c.minimum = f), A ? w ? (c.maximum = h, c.exclusiveMaximum = !0) : c.exclusiveMaximum = h : typeof d == "number" && (c.maximum = d), typeof v == "number" && (c.multipleOf = v);
}, y_ = (a, l, u, r) => {
  u.type = "boolean";
}, b_ = (a, l, u, r) => {
  u.not = {};
}, __ = (a, l, u, r) => {
}, S_ = (a, l, u, r) => {
  const c = a._zod.def, f = eh(c.entries);
  f.every((d) => typeof d == "number") && (u.type = "number"), f.every((d) => typeof d == "string") && (u.type = "string"), u.enum = f;
}, z_ = (a, l, u, r) => {
  const c = a._zod.def, f = [];
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
}, T_ = (a, l, u, r) => {
  if (l.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, E_ = (a, l, u, r) => {
  if (l.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, A_ = (a, l, u, r) => {
  const c = u, f = a._zod.def, { minimum: d, maximum: p } = a._zod.bag;
  typeof d == "number" && (c.minItems = d), typeof p == "number" && (c.maxItems = p), c.type = "array", c.items = ct(f.element, l, {
    ...r,
    path: [...r.path, "items"]
  });
}, w_ = (a, l, u, r) => {
  const c = u, f = a._zod.def;
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
}, O_ = (a, l, u, r) => {
  const c = a._zod.def, f = c.inclusive === !1, d = c.options.map((p, v) => ct(p, l, {
    ...r,
    path: [...r.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? u.oneOf = d : u.anyOf = d;
}, x_ = (a, l, u, r) => {
  const c = a._zod.def, f = ct(c.left, l, {
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
}, C_ = (a, l, u, r) => {
  const c = a._zod.def, f = ct(c.innerType, l, r), d = l.seen.get(a);
  l.target === "openapi-3.0" ? (d.ref = c.innerType, u.nullable = !0) : u.anyOf = [f, { type: "null" }];
}, M_ = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType;
}, N_ = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType, u.default = JSON.parse(JSON.stringify(c.defaultValue));
}, j_ = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType, l.io === "input" && (u._prefault = JSON.parse(JSON.stringify(c.defaultValue)));
}, D_ = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType;
  let d;
  try {
    d = c.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  u.default = d;
}, Z_ = (a, l, u, r) => {
  const c = a._zod.def, f = c.in._zod.traits.has("$ZodTransform"), d = l.io === "input" ? f ? c.out : c.in : c.out;
  ct(d, l, r);
  const p = l.seen.get(a);
  p.ref = d;
}, R_ = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType, u.readOnly = !0;
}, Th = (a, l, u, r) => {
  const c = a._zod.def;
  ct(c.innerType, l, r);
  const f = l.seen.get(a);
  f.ref = c.innerType;
}, U_ = /* @__PURE__ */ R("ZodISODateTime", (a, l) => {
  Xb.init(a, l), qe.init(a, l);
});
function Y_(a) {
  return /* @__PURE__ */ L1(U_, a);
}
const k_ = /* @__PURE__ */ R("ZodISODate", (a, l) => {
  Hb.init(a, l), qe.init(a, l);
});
function X_(a) {
  return /* @__PURE__ */ V1(k_, a);
}
const H_ = /* @__PURE__ */ R("ZodISOTime", (a, l) => {
  Bb.init(a, l), qe.init(a, l);
});
function B_(a) {
  return /* @__PURE__ */ G1(H_, a);
}
const q_ = /* @__PURE__ */ R("ZodISODuration", (a, l) => {
  qb.init(a, l), qe.init(a, l);
});
function $_(a) {
  return /* @__PURE__ */ Q1(q_, a);
}
const L_ = (a, l) => {
  lh.init(a, l), a.name = "ZodError", Object.defineProperties(a, {
    format: {
      value: (u) => M0(a, u)
      // enumerable: false,
    },
    flatten: {
      value: (u) => C0(a, u)
      // enumerable: false,
    },
    addIssue: {
      value: (u) => {
        a.issues.push(u), a.message = JSON.stringify(a.issues, Us, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (u) => {
        a.issues.push(...u), a.message = JSON.stringify(a.issues, Us, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return a.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Lt = /* @__PURE__ */ R("ZodError", L_, {
  Parent: Error
}), V_ = /* @__PURE__ */ Gs(Lt), G_ = /* @__PURE__ */ Qs(Lt), Q_ = /* @__PURE__ */ Fu(Lt), K_ = /* @__PURE__ */ Iu(Lt), J_ = /* @__PURE__ */ D0(Lt), W_ = /* @__PURE__ */ Z0(Lt), P_ = /* @__PURE__ */ R0(Lt), F_ = /* @__PURE__ */ U0(Lt), I_ = /* @__PURE__ */ Y0(Lt), eS = /* @__PURE__ */ k0(Lt), tS = /* @__PURE__ */ X0(Lt), nS = /* @__PURE__ */ H0(Lt), Zp = /* @__PURE__ */ new WeakMap();
function pl(a, l, u) {
  const r = Object.getPrototypeOf(a);
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
const Ge = /* @__PURE__ */ R("ZodType", (a, l) => (Ve.init(a, l), Object.assign(a["~standard"], {
  jsonSchema: {
    input: Qu(a, "input"),
    output: Qu(a, "output")
  }
}), a.toJSONSchema = p_(a, {}), a.def = l, a.type = l.type, Object.defineProperty(a, "_def", { value: l }), a.parse = (u, r) => V_(a, u, r, { callee: a.parse }), a.safeParse = (u, r) => Q_(a, u, r), a.parseAsync = async (u, r) => G_(a, u, r, { callee: a.parseAsync }), a.safeParseAsync = async (u, r) => K_(a, u, r), a.spa = a.safeParseAsync, a.encode = (u, r) => J_(a, u, r), a.decode = (u, r) => W_(a, u, r), a.encodeAsync = async (u, r) => P_(a, u, r), a.decodeAsync = async (u, r) => F_(a, u, r), a.safeEncode = (u, r) => I_(a, u, r), a.safeDecode = (u, r) => eS(a, u, r), a.safeEncodeAsync = async (u, r) => tS(a, u, r), a.safeDecodeAsync = async (u, r) => nS(a, u, r), pl(a, "ZodType", {
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
    return this.check(/* @__PURE__ */ si(u));
  },
  optional() {
    return kp(this);
  },
  exactOptional() {
    return XS(this);
  },
  nullable() {
    return Xp(this);
  },
  nullish() {
    return kp(Xp(this));
  },
  nonoptional(u) {
    return VS(this, u);
  },
  array() {
    return Ku(this);
  },
  or(u) {
    return NS([this, u]);
  },
  and(u) {
    return DS(this, u);
  },
  transform(u) {
    return Hp(this, YS(u));
  },
  default(u) {
    return qS(this, u);
  },
  prefault(u) {
    return LS(this, u);
  },
  catch(u) {
    return QS(this, u);
  },
  pipe(u) {
    return Hp(this, u);
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
}), Object.defineProperty(a, "description", {
  get() {
    return rl.get(a)?.description;
  },
  configurable: !0
}), a)), Eh = /* @__PURE__ */ R("_ZodString", (a, l) => {
  Ks.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (r, c, f) => v_(a, r, c);
  const u = a._zod.bag;
  a.format = u.format ?? null, a.minLength = u.minimum ?? null, a.maxLength = u.maximum ?? null, pl(a, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ I1(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ n_(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ a_(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ i_(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ Gu(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ yh(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ bh(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ Gu(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ e_(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ t_(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ u_());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ l_(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ r_());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ o_());
    },
    slugify() {
      return this.check(/* @__PURE__ */ s_());
    }
  });
}), aS = /* @__PURE__ */ R("ZodString", (a, l) => {
  Ks.init(a, l), Eh.init(a, l), a.email = (u) => a.check(/* @__PURE__ */ T1(iS, u)), a.url = (u) => a.check(/* @__PURE__ */ x1(lS, u)), a.jwt = (u) => a.check(/* @__PURE__ */ $1(_S, u)), a.emoji = (u) => a.check(/* @__PURE__ */ C1(uS, u)), a.guid = (u) => a.check(/* @__PURE__ */ Mp(Rp, u)), a.uuid = (u) => a.check(/* @__PURE__ */ E1(Xu, u)), a.uuidv4 = (u) => a.check(/* @__PURE__ */ A1(Xu, u)), a.uuidv6 = (u) => a.check(/* @__PURE__ */ w1(Xu, u)), a.uuidv7 = (u) => a.check(/* @__PURE__ */ O1(Xu, u)), a.nanoid = (u) => a.check(/* @__PURE__ */ M1(rS, u)), a.guid = (u) => a.check(/* @__PURE__ */ Mp(Rp, u)), a.cuid = (u) => a.check(/* @__PURE__ */ N1(oS, u)), a.cuid2 = (u) => a.check(/* @__PURE__ */ j1(sS, u)), a.ulid = (u) => a.check(/* @__PURE__ */ D1(cS, u)), a.base64 = (u) => a.check(/* @__PURE__ */ H1(gS, u)), a.base64url = (u) => a.check(/* @__PURE__ */ B1(yS, u)), a.xid = (u) => a.check(/* @__PURE__ */ Z1(fS, u)), a.ksuid = (u) => a.check(/* @__PURE__ */ R1(dS, u)), a.ipv4 = (u) => a.check(/* @__PURE__ */ U1(mS, u)), a.ipv6 = (u) => a.check(/* @__PURE__ */ Y1(pS, u)), a.cidrv4 = (u) => a.check(/* @__PURE__ */ k1(hS, u)), a.cidrv6 = (u) => a.check(/* @__PURE__ */ X1(vS, u)), a.e164 = (u) => a.check(/* @__PURE__ */ q1(bS, u)), a.datetime = (u) => a.check(Y_(u)), a.date = (u) => a.check(X_(u)), a.time = (u) => a.check(B_(u)), a.duration = (u) => a.check($_(u));
});
function pt(a) {
  return /* @__PURE__ */ z1(aS, a);
}
const qe = /* @__PURE__ */ R("ZodStringFormat", (a, l) => {
  Be.init(a, l), Eh.init(a, l);
}), iS = /* @__PURE__ */ R("ZodEmail", (a, l) => {
  Mb.init(a, l), qe.init(a, l);
}), Rp = /* @__PURE__ */ R("ZodGUID", (a, l) => {
  xb.init(a, l), qe.init(a, l);
}), Xu = /* @__PURE__ */ R("ZodUUID", (a, l) => {
  Cb.init(a, l), qe.init(a, l);
}), lS = /* @__PURE__ */ R("ZodURL", (a, l) => {
  Nb.init(a, l), qe.init(a, l);
}), uS = /* @__PURE__ */ R("ZodEmoji", (a, l) => {
  jb.init(a, l), qe.init(a, l);
}), rS = /* @__PURE__ */ R("ZodNanoID", (a, l) => {
  Db.init(a, l), qe.init(a, l);
}), oS = /* @__PURE__ */ R("ZodCUID", (a, l) => {
  Zb.init(a, l), qe.init(a, l);
}), sS = /* @__PURE__ */ R("ZodCUID2", (a, l) => {
  Rb.init(a, l), qe.init(a, l);
}), cS = /* @__PURE__ */ R("ZodULID", (a, l) => {
  Ub.init(a, l), qe.init(a, l);
}), fS = /* @__PURE__ */ R("ZodXID", (a, l) => {
  Yb.init(a, l), qe.init(a, l);
}), dS = /* @__PURE__ */ R("ZodKSUID", (a, l) => {
  kb.init(a, l), qe.init(a, l);
}), mS = /* @__PURE__ */ R("ZodIPv4", (a, l) => {
  $b.init(a, l), qe.init(a, l);
}), pS = /* @__PURE__ */ R("ZodIPv6", (a, l) => {
  Lb.init(a, l), qe.init(a, l);
}), hS = /* @__PURE__ */ R("ZodCIDRv4", (a, l) => {
  Vb.init(a, l), qe.init(a, l);
}), vS = /* @__PURE__ */ R("ZodCIDRv6", (a, l) => {
  Gb.init(a, l), qe.init(a, l);
}), gS = /* @__PURE__ */ R("ZodBase64", (a, l) => {
  Qb.init(a, l), qe.init(a, l);
}), yS = /* @__PURE__ */ R("ZodBase64URL", (a, l) => {
  Jb.init(a, l), qe.init(a, l);
}), bS = /* @__PURE__ */ R("ZodE164", (a, l) => {
  Wb.init(a, l), qe.init(a, l);
}), _S = /* @__PURE__ */ R("ZodJWT", (a, l) => {
  Fb.init(a, l), qe.init(a, l);
}), Ah = /* @__PURE__ */ R("ZodNumber", (a, l) => {
  ph.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (r, c, f) => g_(a, r, c), pl(a, "ZodNumber", {
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
      return this.check(/* @__PURE__ */ ws(r, c));
    },
    max(r, c) {
      return this.check(/* @__PURE__ */ ws(r, c));
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
      return this.check(/* @__PURE__ */ ws(0, r));
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
  const u = a._zod.bag;
  a.minValue = Math.max(u.minimum ?? Number.NEGATIVE_INFINITY, u.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, a.maxValue = Math.min(u.maximum ?? Number.POSITIVE_INFINITY, u.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, a.isInt = (u.format ?? "").includes("int") || Number.isSafeInteger(u.multipleOf ?? 0.5), a.isFinite = !0, a.format = u.format ?? null;
});
function SS(a) {
  return /* @__PURE__ */ K1(Ah, a);
}
const zS = /* @__PURE__ */ R("ZodNumberFormat", (a, l) => {
  Ib.init(a, l), Ah.init(a, l);
});
function Up(a) {
  return /* @__PURE__ */ J1(zS, a);
}
const TS = /* @__PURE__ */ R("ZodBoolean", (a, l) => {
  e1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => y_(a, u, r);
});
function ES(a) {
  return /* @__PURE__ */ W1(TS, a);
}
const AS = /* @__PURE__ */ R("ZodUnknown", (a, l) => {
  t1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => __();
});
function Yp() {
  return /* @__PURE__ */ P1(AS);
}
const wS = /* @__PURE__ */ R("ZodNever", (a, l) => {
  n1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => b_(a, u, r);
});
function OS(a) {
  return /* @__PURE__ */ F1(wS, a);
}
const xS = /* @__PURE__ */ R("ZodArray", (a, l) => {
  a1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => A_(a, u, r, c), a.element = l.element, pl(a, "ZodArray", {
    min(u, r) {
      return this.check(/* @__PURE__ */ Gu(u, r));
    },
    nonempty(u) {
      return this.check(/* @__PURE__ */ Gu(1, u));
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
function Ku(a, l) {
  return /* @__PURE__ */ c_(xS, a, l);
}
const CS = /* @__PURE__ */ R("ZodObject", (a, l) => {
  l1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => w_(a, u, r, c), Ze(a, "shape", () => l.shape), pl(a, "ZodObject", {
    keyof() {
      return Ju(Object.keys(this._zod.def.shape));
    },
    catchall(u) {
      return this.clone({ ...this._zod.def, catchall: u });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Yp() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Yp() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: OS() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(u) {
      return T0(this, u);
    },
    safeExtend(u) {
      return E0(this, u);
    },
    merge(u) {
      return A0(this, u);
    },
    pick(u) {
      return S0(this, u);
    },
    omit(u) {
      return z0(this, u);
    },
    partial(...u) {
      return w0(wh, this, u[0]);
    },
    required(...u) {
      return O0(Oh, this, u[0]);
    }
  });
});
function fl(a, l) {
  const u = {
    type: "object",
    shape: a ?? {},
    ...I(l)
  };
  return new CS(u);
}
const MS = /* @__PURE__ */ R("ZodUnion", (a, l) => {
  u1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => O_(a, u, r, c), a.options = l.options;
});
function NS(a, l) {
  return new MS({
    type: "union",
    options: a,
    ...I(l)
  });
}
const jS = /* @__PURE__ */ R("ZodIntersection", (a, l) => {
  r1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => x_(a, u, r, c);
});
function DS(a, l) {
  return new jS({
    type: "intersection",
    left: a,
    right: l
  });
}
const ks = /* @__PURE__ */ R("ZodEnum", (a, l) => {
  o1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (r, c, f) => S_(a, r, c), a.enum = l.entries, a.options = Object.values(l.entries);
  const u = new Set(Object.keys(l.entries));
  a.extract = (r, c) => {
    const f = {};
    for (const d of r)
      if (u.has(d))
        f[d] = l.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new ks({
      ...l,
      checks: [],
      ...I(c),
      entries: f
    });
  }, a.exclude = (r, c) => {
    const f = { ...l.entries };
    for (const d of r)
      if (u.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new ks({
      ...l,
      checks: [],
      ...I(c),
      entries: f
    });
  };
});
function Ju(a, l) {
  const u = Array.isArray(a) ? Object.fromEntries(a.map((r) => [r, r])) : a;
  return new ks({
    type: "enum",
    entries: u,
    ...I(l)
  });
}
const ZS = /* @__PURE__ */ R("ZodLiteral", (a, l) => {
  s1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => z_(a, u, r), a.values = new Set(l.values), Object.defineProperty(a, "value", {
    get() {
      if (l.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return l.values[0];
    }
  });
});
function RS(a, l) {
  return new ZS({
    type: "literal",
    values: Array.isArray(a) ? a : [a],
    ...I(l)
  });
}
const US = /* @__PURE__ */ R("ZodTransform", (a, l) => {
  c1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => E_(a, u), a._zod.parse = (u, r) => {
    if (r.direction === "backward")
      throw new Ip(a.constructor.name);
    u.addIssue = (f) => {
      if (typeof f == "string")
        u.issues.push(cl(f, u.value, l));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = u.value), d.inst ?? (d.inst = a), u.issues.push(cl(d));
      }
    };
    const c = l.transform(u.value, u);
    return c instanceof Promise ? c.then((f) => (u.value = f, u.fallback = !0, u)) : (u.value = c, u.fallback = !0, u);
  };
});
function YS(a) {
  return new US({
    type: "transform",
    transform: a
  });
}
const wh = /* @__PURE__ */ R("ZodOptional", (a, l) => {
  gh.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => Th(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function kp(a) {
  return new wh({
    type: "optional",
    innerType: a
  });
}
const kS = /* @__PURE__ */ R("ZodExactOptional", (a, l) => {
  f1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => Th(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function XS(a) {
  return new kS({
    type: "optional",
    innerType: a
  });
}
const HS = /* @__PURE__ */ R("ZodNullable", (a, l) => {
  d1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => C_(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function Xp(a) {
  return new HS({
    type: "nullable",
    innerType: a
  });
}
const BS = /* @__PURE__ */ R("ZodDefault", (a, l) => {
  m1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => N_(a, u, r, c), a.unwrap = () => a._zod.def.innerType, a.removeDefault = a.unwrap;
});
function qS(a, l) {
  return new BS({
    type: "default",
    innerType: a,
    get defaultValue() {
      return typeof l == "function" ? l() : nh(l);
    }
  });
}
const $S = /* @__PURE__ */ R("ZodPrefault", (a, l) => {
  p1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => j_(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function LS(a, l) {
  return new $S({
    type: "prefault",
    innerType: a,
    get defaultValue() {
      return typeof l == "function" ? l() : nh(l);
    }
  });
}
const Oh = /* @__PURE__ */ R("ZodNonOptional", (a, l) => {
  h1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => M_(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function VS(a, l) {
  return new Oh({
    type: "nonoptional",
    innerType: a,
    ...I(l)
  });
}
const GS = /* @__PURE__ */ R("ZodCatch", (a, l) => {
  v1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => D_(a, u, r, c), a.unwrap = () => a._zod.def.innerType, a.removeCatch = a.unwrap;
});
function QS(a, l) {
  return new GS({
    type: "catch",
    innerType: a,
    catchValue: typeof l == "function" ? l : () => l
  });
}
const KS = /* @__PURE__ */ R("ZodPipe", (a, l) => {
  g1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => Z_(a, u, r, c), a.in = l.in, a.out = l.out;
});
function Hp(a, l) {
  return new KS({
    type: "pipe",
    in: a,
    out: l
    // ...util.normalizeParams(params),
  });
}
const JS = /* @__PURE__ */ R("ZodReadonly", (a, l) => {
  y1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => R_(a, u, r, c), a.unwrap = () => a._zod.def.innerType;
});
function WS(a) {
  return new JS({
    type: "readonly",
    innerType: a
  });
}
const PS = /* @__PURE__ */ R("ZodCustom", (a, l) => {
  b1.init(a, l), Ge.init(a, l), a._zod.processJSONSchema = (u, r, c) => T_(a, u);
});
function FS(a, l = {}) {
  return /* @__PURE__ */ f_(PS, a, l);
}
function IS(a, l) {
  return /* @__PURE__ */ d_(a, l);
}
const Js = pt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), en = Js.optional(), e2 = fl({
  segment_id: SS().int().nonnegative(),
  area_id: pt().min(1).optional(),
  name: pt().min(1),
  icon: pt().optional(),
  include_in_floor_clean: ES().optional().default(!0)
}).passthrough(), t2 = fl({
  id: pt().min(1),
  name: pt().min(1),
  map_entity: Js,
  map_select_option: pt().min(1).optional(),
  rooms: Ku(e2).min(1)
}).passthrough(), n2 = fl({
  id: pt().min(1),
  name: pt().min(1),
  icon: pt().optional(),
  strategy: Ju(["custom", "smartplan"]),
  cleaning_type: Ju(["vacuum", "vacuum_and_mop"]).optional(),
  fan_speed: pt().optional(),
  mop_mode: pt().optional(),
  mop_intensity: pt().optional()
}).passthrough(), xh = fl({
  type: RS("custom:roborock-vacuum-map-card").optional(),
  entity: Js.refine((a) => a.startsWith("vacuum."), "Entity must be a vacuum"),
  name: pt().optional(),
  language: Ju(["en", "nl"]).optional().default("en"),
  entities: fl({
    map_select: en,
    mop_mode: en,
    mop_intensity: en,
    battery: en,
    current_room: en,
    cleaning_area: en,
    cleaning_time: en,
    cleaning_progress: en,
    status: en,
    error: en
  }).passthrough().optional().default({}),
  floors: Ku(t2).min(1),
  presets: Ku(n2).optional().default([]),
  default_preset: pt().optional().default("vacuum_only")
}).passthrough().superRefine((a, l) => {
  a.floors.length > 1 && !a.entities.map_select && l.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" });
  const u = /* @__PURE__ */ new Set();
  for (const [c, f] of a.floors.entries()) {
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
  for (const [c, f] of a.presets.entries())
    r.has(f.id) && l.addIssue({ code: "custom", path: ["presets", c, "id"], message: "Preset IDs must be unique" }), r.add(f.id);
  a.default_preset && !r.has(a.default_preset) && l.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function a2(a) {
  return xh.parse(a);
}
function i2(a) {
  const l = xh.safeParse(a);
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
function Hu(a) {
  return typeof a == "number" && Number.isFinite(a);
}
function l2(a) {
  const l = a?.attributes.calibration_points;
  return Array.isArray(l) ? l.flatMap((u) => {
    const r = u;
    return !Hu(r.vacuum?.x) || !Hu(r.vacuum?.y) || !Hu(r.map?.x) || !Hu(r.map?.y) ? [] : [r];
  }) : [];
}
function Mh(a) {
  const l = a?.attributes.rooms;
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
function ol(a, l, u) {
  if (u.length < 3) throw new Error("At least three calibration points are required");
  const [r, c, f] = u, d = c.vacuum.x - r.vacuum.x, p = c.vacuum.y - r.vacuum.y, v = f.vacuum.x - r.vacuum.x, h = f.vacuum.y - r.vacuum.y, y = d * h - p * v;
  if (y === 0) throw new Error("Calibration points are degenerate");
  const _ = a - r.vacuum.x, A = l - r.vacuum.y, w = (_ * h - A * v) / y, M = (d * A - p * _) / y;
  return {
    x: r.map.x + w * (c.map.x - r.map.x) + M * (f.map.x - r.map.x),
    y: r.map.y + w * (c.map.y - r.map.y) + M * (f.map.y - r.map.y)
  };
}
function u2(a, l) {
  return `${[
    ol(a.x0, a.y0, l),
    ol(a.x1, a.y0, l),
    ol(a.x1, a.y1, l),
    ol(a.x0, a.y1, l)
  ].map((r, c) => `${c === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function r2(a, l) {
  return ol((a.x0 + a.x1) / 2, (a.y0 + a.y1) / 2, l);
}
function o2(a) {
  return new Map(a.rooms.map((l) => [l.segment_id, l]));
}
function Bu(a, l, u) {
  const r = [...a], [c] = r.splice(l, 1);
  return r.splice(u, 0, c), r;
}
function s2(a, l) {
  return Object.keys(a.states).filter((u) => u.startsWith(`${l}.`)).sort();
}
function xs({
  hass: a,
  domain: l,
  value: u,
  optional: r,
  onChange: c
}) {
  return /* @__PURE__ */ S.jsxs("select", { value: u ?? "", onChange: (f) => c(f.target.value || void 0), children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: r ? "Not configured" : `Select ${l}` }),
    s2(a, l).map((f) => /* @__PURE__ */ S.jsx("option", { children: f }, f))
  ] });
}
function c2({
  areas: a,
  value: l,
  onChange: u
}) {
  const r = ae.useRef(null), [c, f] = ae.useState(() => !!customElements.get("ha-area-picker"));
  return ae.useEffect(() => {
    c || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [c]), ae.useEffect(() => {
    const d = r.current;
    if (!d) return;
    d.value = l, d.noAdd = !0;
    const p = (v) => u(v.detail.value || void 0);
    return d.addEventListener("value-changed", p), () => d.removeEventListener("value-changed", p);
  }, [c, u, l]), c ? /* @__PURE__ */ S.jsx("ha-area-picker", { ref: r, value: l ?? "", "no-add": !0 }) : /* @__PURE__ */ S.jsxs("select", { value: l ?? "", onChange: (d) => u(d.target.value || void 0), children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: "Unmapped" }),
    a.map((d) => /* @__PURE__ */ S.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    l && !a.some((d) => d.area_id === l) && /* @__PURE__ */ S.jsx("option", { value: l, children: l })
  ] });
}
function f2({ hass: a, config: l, onChange: u }) {
  const r = i2(l), c = (p, v) => {
    const h = [...l.floors];
    h[p] = v, u({ ...l, floors: h });
  }, f = l.entities?.map_select ? a.states[l.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(a.areas ?? {}).sort((p, v) => p.name.localeCompare(v.name));
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
        /* @__PURE__ */ S.jsx(xs, { hass: a, domain: "vacuum", value: l.entity, onChange: (p) => p && u({ ...l, entity: p }) })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("section", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["mop_mode", "select", "Mop mode"],
        ["mop_intensity", "select", "Mop intensity"],
        ["battery", "sensor", "Battery"],
        ["current_room", "sensor", "Current room"],
        ["cleaning_area", "sensor", "Cleaning area"],
        ["cleaning_time", "sensor", "Cleaning time"],
        ["cleaning_progress", "sensor", "Cleaning progress"],
        ["status", "sensor", "Status"],
        ["error", "sensor", "Error"]
      ].map(([p, v, h]) => /* @__PURE__ */ S.jsxs("label", { children: [
        h,
        /* @__PURE__ */ S.jsx(xs, { hass: a, domain: v, optional: !0, value: l.entities?.[p], onChange: (y) => u({ ...l, entities: { ...l.entities, [p]: y } }) })
      ] }, p))
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
            /* @__PURE__ */ S.jsx(xs, { hass: a, domain: "image", value: p.map_entity, onChange: (h) => {
              if (!h) return;
              const y = Mh(a.states[h]), _ = new Map(p.rooms.map((w) => [w.segment_id, w])), A = y.map((w) => ({
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
function Cs(a, l) {
  if (!l) return [];
  const u = a.states[l];
  return !u || u.state === "unavailable" ? [] : Array.isArray(u.attributes.options) ? u.attributes.options.map(String) : [];
}
function d2(a, l) {
  const u = a.states[l.entity], r = Number(u?.attributes.supported_features ?? 0), c = Array.isArray(u?.attributes.fan_speed_list) ? u.attributes.fan_speed_list.map(String) : [], f = Cs(a, l.entities?.map_select), d = Cs(a, l.entities?.mop_mode), p = Cs(a, l.entities?.mop_intensity);
  return {
    fanSpeeds: c,
    mapOptions: f,
    mopModes: d,
    mopIntensities: p,
    canStart: !!(r & qu.start),
    canPause: !!(r & qu.pause),
    canStop: !!(r & qu.stop),
    canDock: !!(r & qu.returnHome),
    hasMapSelect: f.length > 0,
    hasMopMode: d.length > 0,
    hasMopIntensity: p.length > 0
  };
}
function m2(a, l) {
  if (!l) return !1;
  const u = a.states[l]?.state;
  return !!(u && u !== "unavailable" && u !== "unknown");
}
function p2(a) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(a ?? "unavailable");
}
function Bp(a) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(a ?? "");
}
const h2 = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class it extends Error {
  constructor(l, u, r) {
    super(u, r), this.operation = l, this.name = "JobExecutionError";
  }
  operation;
}
async function v2(a, l, u, r, c, f) {
  const d = Date.now();
  for (; Date.now() - d < r; ) {
    if (a().states[l]?.state === u) return;
    await f(c);
  }
  throw new it("wait_for_state", `${l} did not become “${u}” within ${r / 1e3}s`);
}
function g2(a, l, u, r) {
  const c = a.states[l];
  if (!m2(a, l)) throw new it(r, `${l} is unavailable`);
  if (!(Array.isArray(c.attributes.options) ? c.attributes.options.map(String) : []).includes(u)) throw new it(r, `${l} does not support “${u}”`);
}
async function ll(a, l, u, r, c, f, d) {
  const p = a();
  if (g2(p, l, u, r), p.states[l]?.state !== u)
    try {
      await p.callService("select", "select_option", { option: u }, { entity_id: l }), await v2(a, l, u, c, f, d);
    } catch (v) {
      throw v instanceof it ? new it(r, v.message, { cause: v }) : new it(r, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function y2({
  getHass: a,
  config: l,
  floor: u,
  rooms: r,
  draft: c,
  timeoutMs: f = 1e4,
  pollMs: d = 150,
  sleep: p = (v) => new Promise((h) => setTimeout(h, v))
}) {
  const v = a(), h = v.states[l.entity];
  if (!h || h.state === "unavailable") throw new it("preflight", `${l.entity} is unavailable`);
  if (p2(h.state)) throw new it("preflight", `Vacuum is ${h.state}`);
  const y = l.entities?.error ? v.states[l.entities.error] : void 0;
  if (y && !["none", "unknown", "unavailable", ""].includes(y.state))
    throw new it("preflight", `Vacuum error: ${y.state}`);
  const _ = [...new Set(r.map((w) => w.area_id).filter((w) => !!w))];
  if (_.length === 0) throw new it("preflight", "Select at least one room mapped to a Home Assistant area");
  const A = l.entities?.map_select;
  if (l.floors.length > 1) {
    if (!A || !u.map_select_option) throw new it("select_floor", "This floor has no map selector mapping");
    await ll(a, A, u.map_select_option, "select_floor", f, d, p);
  }
  if (c.strategy === "smartplan") {
    const w = l.entities?.mop_mode;
    if (!w) throw new it("set_smartplan", "SmartPlan requires a mop-mode entity");
    await ll(a, w, "smart_mode", "set_smartplan", f, d, p);
  } else {
    const w = l.entities?.mop_mode;
    if (c.mop_mode) {
      if (!w) throw new it("set_mop_mode", "The selected profile requires a mop-mode entity");
      a().states[w]?.state === "smart_mode" && h2.has(c.mop_mode) && await ll(a, w, "custom", "leave_smartplan", f, d, p), await ll(a, w, c.mop_mode, "set_mop_mode", f, d, p);
    }
    if (c.mop_intensity) {
      const M = l.entities?.mop_intensity;
      if (!M) throw new it("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await ll(a, M, c.mop_intensity, "set_mop_intensity", f, d, p);
    }
    if (c.fan_speed) {
      const M = a(), H = M.states[l.entity]?.attributes.fan_speed_list;
      if (!(Array.isArray(H) ? H.map(String) : []).includes(c.fan_speed))
        throw new it("set_fan_speed", `${l.entity} does not support “${c.fan_speed}”`);
      try {
        await M.callService("vacuum", "set_fan_speed", { fan_speed: c.fan_speed }, { entity_id: l.entity });
      } catch (B) {
        throw new it("set_fan_speed", B instanceof Error ? B.message : String(B), { cause: B });
      }
    }
  }
  try {
    await a().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: _ },
      { entity_id: l.entity }
    );
  } catch (w) {
    throw new it("clean_area", w instanceof Error ? w.message : String(w), { cause: w });
  }
  return _;
}
const b2 = {
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
}, _2 = {
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
function ve(a, l) {
  return (a === "nl" ? _2 : b2)[l];
}
const S2 = [
  {
    id: "vacuum_only",
    name: "Vacuum only",
    icon: "mdi:vacuum",
    strategy: "custom",
    cleaning_type: "vacuum",
    fan_speed: "balanced",
    mop_mode: "custom",
    mop_intensity: "off"
  },
  {
    id: "vacuum_and_mop",
    name: "Vacuum and mop",
    icon: "mdi:water-plus",
    strategy: "custom",
    cleaning_type: "vacuum_and_mop",
    fan_speed: "balanced",
    mop_mode: "custom",
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
function z2(a, l) {
  if (l.fan_speed && !a.fanSpeeds.includes(l.fan_speed)) return `fan speed “${l.fan_speed}”`;
  if (l.mop_mode && !a.mopModes.includes(l.mop_mode)) return `mop mode “${l.mop_mode}”`;
  if (l.mop_intensity && !a.mopIntensities.includes(l.mop_intensity))
    return `mop intensity “${l.mop_intensity}”`;
}
function T2(a, l) {
  return [...S2, ...a.presets ?? []].map((u) => {
    const r = z2(l, u);
    return {
      preset: u,
      available: !r,
      reason: r ? `Unsupported ${r}` : void 0
    };
  });
}
function Nh(a) {
  return {
    preset_id: a.id,
    strategy: a.strategy,
    cleaning_type: a.cleaning_type ?? "vacuum_and_mop",
    fan_speed: a.fan_speed,
    mop_mode: a.mop_mode,
    mop_intensity: a.mop_intensity
  };
}
function jh({ icon: a, className: l }) {
  return a ? ae.createElement("ha-icon", { icon: a, class: l, "aria-hidden": "true" }) : null;
}
function Ms({
  value: a,
  options: l,
  onChange: u,
  label: r
}) {
  return l.length === 0 ? null : /* @__PURE__ */ S.jsxs("label", { className: "field", children: [
    /* @__PURE__ */ S.jsx("span", { children: r }),
    /* @__PURE__ */ S.jsx("select", { value: a ?? "", onChange: (c) => u(c.target.value), children: l.map((c) => /* @__PURE__ */ S.jsx("option", { value: c, children: c.replaceAll("_", " ") }, c)) })
  ] });
}
function E2({
  language: a,
  draft: l,
  capabilities: u,
  presets: r,
  selectedRoomNames: c,
  submitting: f,
  onDraftChange: d,
  onClose: p,
  onStart: v
}) {
  return /* @__PURE__ */ S.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ S.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": ve(a, "close"), onClick: p }),
    /* @__PURE__ */ S.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ S.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ S.jsxs("header", { children: [
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("h2", { id: "job-sheet-title", children: ve(a, "configureTitle") }),
          /* @__PURE__ */ S.jsx("p", { children: c.join(" · ") })
        ] }),
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "icon-button", "aria-label": ve(a, "close"), onClick: p, children: /* @__PURE__ */ S.jsx(Fp, {}) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ S.jsx("h3", { children: ve(a, "presets") }),
        /* @__PURE__ */ S.jsx("div", { className: "preset-grid", children: r.map(({ preset: h, available: y, reason: _ }) => /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            className: l.preset_id === h.id ? "active" : "",
            disabled: !y || f,
            title: _,
            onClick: () => d(Nh(h)),
            children: [
              /* @__PURE__ */ S.jsx(jh, { icon: h.icon }),
              /* @__PURE__ */ S.jsx("span", { children: h.name }),
              !y && /* @__PURE__ */ S.jsx("small", { children: _ ?? ve(a, "unsupported") })
            ]
          },
          h.id
        )) }),
        l.strategy !== "smartplan" && /* @__PURE__ */ S.jsxs("div", { className: "job-fields", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ S.jsx("span", { children: ve(a, "cleaningType") }),
            /* @__PURE__ */ S.jsx("div", { className: "segmented", children: ["vacuum", "vacuum_and_mop"].map((h) => /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: l.cleaning_type === h ? "active" : "",
                onClick: () => d({
                  ...l,
                  preset_id: "custom_draft",
                  cleaning_type: h,
                  mop_mode: h === "vacuum" && u.mopModes.includes("custom") ? "custom" : l.mop_mode,
                  mop_intensity: h === "vacuum" && u.mopIntensities.includes("off") ? "off" : l.mop_intensity
                }),
                children: ve(a, h === "vacuum" ? "vacuumOnly" : "vacuumAndMop")
              },
              h
            )) })
          ] }),
          /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ve(a, "suction"),
              value: l.fan_speed,
              options: u.fanSpeeds,
              onChange: (h) => d({ ...l, preset_id: "custom_draft", fan_speed: h })
            }
          ),
          u.hasMopMode && /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ve(a, "mopRoute"),
              value: l.mop_mode,
              options: u.mopModes,
              onChange: (h) => d({ ...l, preset_id: "custom_draft", mop_mode: h })
            }
          ),
          u.hasMopIntensity && /* @__PURE__ */ S.jsx(
            Ms,
            {
              label: ve(a, "mopIntensity"),
              value: l.mop_intensity,
              options: u.mopIntensities,
              onChange: (h) => d({ ...l, preset_id: "custom_draft", mop_intensity: h })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("footer", { children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: p, children: ve(a, "cancel") }),
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", disabled: f, onClick: v, children: f ? ve(a, "starting") : ve(a, "start") })
      ] })
    ] })
  ] });
}
var ga = function(a, l) {
  return Number(a.toFixed(l));
}, A2 = function(a, l) {
  return l;
}, we = function(a, l, u) {
  u && typeof u == "function" && u(a, l);
}, w2 = function(a) {
  return -Math.cos(a * Math.PI) / 2 + 0.5;
}, O2 = function(a) {
  return a;
}, x2 = function(a) {
  return a * a;
}, C2 = function(a) {
  return a * (2 - a);
}, M2 = function(a) {
  return a < 0.5 ? 2 * a * a : -1 + (4 - 2 * a) * a;
}, N2 = function(a) {
  return a * a * a;
}, j2 = function(a) {
  return --a * a * a + 1;
}, D2 = function(a) {
  return a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
}, Z2 = function(a) {
  return a * a * a * a;
}, R2 = function(a) {
  return 1 - --a * a * a * a;
}, U2 = function(a) {
  return a < 0.5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
}, Y2 = function(a) {
  return a * a * a * a * a;
}, k2 = function(a) {
  return 1 + --a * a * a * a * a;
}, X2 = function(a) {
  return a < 0.5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
}, Dh = {
  easeOut: w2,
  linear: O2,
  easeInQuad: x2,
  easeOutQuad: C2,
  easeInOutQuad: M2,
  easeInCubic: N2,
  easeOutCubic: j2,
  easeInOutCubic: D2,
  easeInQuart: Z2,
  easeOutQuart: R2,
  easeInOutQuart: U2,
  easeInQuint: Y2,
  easeOutQuint: k2,
  easeInOutQuint: X2
}, Zh = function(a) {
  typeof a == "number" && cancelAnimationFrame(a);
}, Kt = function(a) {
  a.mounted && (Zh(a.animation), a.isAnimating = !1, a.animation = null, a.velocity = null);
};
function Rh(a, l, u, r) {
  if (a.mounted) {
    var c = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    Kt(a), a.animation = function() {
      if (!a.mounted)
        return Zh(a.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - c, p = d / u, v = Dh[l], h = v(p);
      d >= u ? (r(f), a.animation = null) : a.animation && (r(h), requestAnimationFrame(a.animation));
    }, requestAnimationFrame(a.animation);
  }
}
function H2(a) {
  var l = a.scale, u = a.positionX, r = a.positionY;
  return !(Number.isNaN(l) || Number.isNaN(u) || Number.isNaN(r));
}
function Wn(a, l, u, r) {
  var c = H2(l);
  if (!(!a.mounted || !c)) {
    var f = a.setState, d = a.state, p = d.scale, v = d.positionX, h = d.positionY, y = l.scale - p, _ = l.positionX - v, A = l.positionY - h;
    u === 0 ? f(l.scale, l.positionX, l.positionY) : Rh(a, r, u, function(w) {
      w !== 1 ? a.isAnimating = !0 : a.isAnimating = !1;
      var M = p + y * w, H = v + _ * w, X = h + A * w;
      f(M, H, X);
    });
  }
}
function B2(a, l, u) {
  var r = a.offsetWidth, c = a.offsetHeight, f = l.offsetWidth, d = l.offsetHeight, p = f * u, v = d * u, h = r - p, y = c - v;
  return {
    wrapperWidth: r,
    wrapperHeight: c,
    newContentWidth: p,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: y
  };
}
var q2 = function(a, l, u, r, c, f, d) {
  var p = a > l ? u * (d ? 0.5 : 1) : 0, v = r > c ? f * (d ? 0.5 : 1) : 0, h = a - l - p, y = p, _ = r - c - v, A = v;
  return {
    minPositionX: h,
    maxPositionX: y,
    minPositionY: _,
    maxPositionY: A,
    scaleWidthFactor: p,
    scaleHeightFactor: v
  };
}, Ws = function(a, l) {
  var u = a.wrapperComponent, r = a.contentComponent, c = a.setup, f = c.centerZoomedOut, d = c.disablePadding;
  if (!u || !r)
    throw new Error("Components are not mounted");
  var p = B2(u, r, l), v = p.wrapperWidth, h = p.wrapperHeight, y = p.newContentWidth, _ = p.newContentHeight, A = p.newDiffWidth, w = p.newDiffHeight, M = q2(v, y, A, h, _, w, !!f), H = v >= y && h >= _;
  d && H && !f && (M.minPositionX = 0, M.maxPositionX = 0, M.minPositionY = 0, M.maxPositionY = 0);
  var X = a.setup, B = X.minPositionX, P = X.maxPositionX, q = X.minPositionY, k = X.maxPositionY;
  return B != null && (M.minPositionX = v * (1 - l) + B * l), P != null && (M.maxPositionX = P * l), q != null && (M.minPositionY = h * (1 - l) + q * l), k != null && (M.maxPositionY = k * l), M;
}, dl = function(a, l, u, r) {
  return r ? a < l ? ga(l, 2) : a > u ? ga(u, 2) : ga(a, 2) : ga(a, 2);
}, oi = function(a, l) {
  var u = Ws(a, l);
  return a.bounds = u, u;
};
function hl(a, l, u, r, c, f, d) {
  var p = u.minPositionX, v = u.minPositionY, h = u.maxPositionX, y = u.maxPositionY, _ = 0, A = 0;
  d && (_ = c, A = f);
  var w = dl(a, p - _, h + _, r), M = dl(l, v - A, y + A, r);
  return { x: w, y: M };
}
function tr(a, l, u, r, c, f) {
  var d = a.state, p = d.scale, v = d.positionX, h = d.positionY, y = r - p;
  if (typeof l != "number" || typeof u != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var _ = v - l * y, A = h - u * y, w = hl(_, A, c, f, 0, 0, null);
  return w;
}
var qp = 1e-7;
function vl(a, l, u, r, c) {
  var f = c ? r : 0, d = Math.max(l - f, qp), p = u + f;
  return !Number.isNaN(u) && a >= p ? p : !Number.isNaN(l) && a <= d ? d : Math.max(a, qp);
}
var $p = function(a, l) {
  var u = a.setup.panning.excluded, r = a.isInitialized, c = a.wrapperComponent, f = l.target, d = "shadowRoot" in f && "composedPath" in l, p = d ? l.composedPath().some(function(y) {
    return y instanceof Element ? c?.contains(y) : !1;
  }) : c?.contains(f), v = r && f && p;
  if (!v)
    return !1;
  var h = gl(f, u);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, Lp = function(a) {
  var l = a.isInitialized, u = a.isPanning, r = a.setup, c = r.panning.disabled, f = l && u && !c;
  return !!f;
}, $2 = function(a, l) {
  var u = a.state, r = u.positionX, c = u.positionY;
  a.isPanning = !0;
  var f = l.clientX, d = l.clientY;
  a.startCoords = { x: f - r, y: d - c };
}, L2 = function(a, l) {
  var u = l.touches, r = a.state, c = r.positionX, f = r.positionY;
  a.isPanning = !0;
  var d = u.length === 1;
  if (d) {
    var p = u[0].clientX, v = u[0].clientY;
    a.startCoords = { x: p - c, y: v - f };
  }
};
function V2(a) {
  var l = a.state, u = l.positionX, r = l.positionY, c = l.scale, f = a.setup, d = f.disabled, p = f.limitToBounds, v = f.centerZoomedOut, h = a.wrapperComponent;
  if (!(d || !h || !a.bounds)) {
    var y = a.bounds, _ = y.maxPositionX, A = y.minPositionX, w = y.maxPositionY, M = y.minPositionY, H = u > _ || u < A, X = r > w || r < M, B = u > _ ? h.offsetWidth : a.setup.minPositionX || 0, P = r > w ? h.offsetHeight : a.setup.minPositionY || 0, q = tr(a, B, P, c, a.bounds, p || v), k = q.x, V = q.y;
    return {
      scale: c,
      positionX: H ? k : u,
      positionY: X ? V : r
    };
  }
}
function Uh(a, l, u, r, c) {
  var f = a.setup.limitToBounds, d = a.wrapperComponent, p = a.bounds, v = a.state, h = v.scale, y = v.positionX, _ = v.positionY;
  if (!(d === null || p === null || l === y && u === _)) {
    var A = hl(l, u, p, f, r, c, d), w = A.x, M = A.y;
    a.setState(h, w, M);
  }
}
var G2 = function(a, l, u) {
  var r = a.startCoords, c = a.state, f = a.setup.panning, d = f.lockAxisX, p = f.lockAxisY, v = c.positionX, h = c.positionY;
  if (!r)
    return { x: v, y: h };
  var y = l - r.x, _ = u - r.y, A = d ? v : y, w = p ? h : _;
  return { x: A, y: w };
}, Qn = function(a, l, u) {
  var r = a.setup, c = a.state, f = r.minScale, d = r.disablePadding, p = r.centerZoomedOut, v = u ?? c.scale;
  return l > 0 && v >= f && !d && !p ? l : 0;
}, Gn;
(function(a) {
  a.TRACK_PAD = "track_pad", a.MOUSE = "mouse", a.TOUCH = "touch";
})(Gn || (Gn = {}));
var Q2 = function(a) {
  var l = a.mounted, u = a.wrapperComponent, r = a.contentComponent, c = a.setup, f = c.disabled, d = c.velocityAnimation, p = c.limitToBounds, v = a.state.scale, h = d.disabled;
  if (h || f || !l || !u || !r)
    return !1;
  if (!p)
    return !0;
  var y = u.offsetWidth < r.offsetWidth * v || u.offsetHeight < r.offsetHeight * v;
  return y;
}, K2 = function(a) {
  var l = a.mounted, u = a.velocity, r = a.bounds, c = a.setup, f = c.disabled, d = c.velocityAnimation, p = d.disabled, v = !p && !f && l;
  return !(!v || !u || !r);
};
function J2(a, l) {
  var u = a.setup.velocityAnimation, r = u.animationTime, c = u.maxAnimationTime, f = u.inertia;
  return Math.min(r * Math.max(1, Math.abs(l / f)), c);
}
function Vp(a, l, u, r, c, f, d, p, v, h) {
  if (c) {
    if (l > d && u > d) {
      var y = d + (a - d) * h;
      return y > v ? v : y < d ? d : y;
    }
    if (l < f && u < f) {
      var y = f + (a - f) * h;
      return y < p ? p : y > f ? f : y;
    }
  }
  return r ? l : dl(a, f, d, c);
}
function W2(a) {
  var l = 1, u = a.offsetWidth / window.innerWidth;
  return Number.isNaN(u) ? l : Math.min(l, u);
}
var Ns = function(a, l, u) {
  var r = 0, c = a * u;
  return Number.isNaN(c) ? r : a < 0 ? Math.max(c, -l) : Math.min(c, l);
};
function P2(a, l, u) {
  var r, c, f = Q2(a);
  if (f) {
    var d = a.lastMousePosition, p = a.velocityTime, v = a.setup, h = a.wrapperComponent, y = v.velocityAnimation, _ = y.maxStrengthMouse, A = y.maxStrengthTouch, w = y.sensitivityTouch, M = y.sensitivityMouse, H = Date.now();
    if (d && p && h) {
      var X = W2(h), B = (r = {}, r[Gn.TOUCH] = w, r[Gn.MOUSE] = M, r)[u], P = (c = {}, c[Gn.TOUCH] = A, c[Gn.MOUSE] = _, c)[u], q = l.x - d.x, k = l.y - d.y, V = Ns(q / X, P, B), te = Ns(k / X, P, B), G = H - p, ie = q * q + k * k, ye = Ns(Math.sqrt(ie) / G, P, B);
      a.velocity = { velocityX: V, velocityY: te, total: ye };
    }
    a.lastMousePosition = l, a.velocityTime = H;
  }
}
function F2(a) {
  var l = a.velocity, u = a.bounds, r = a.setup, c = a.wrapperComponent, f = K2(a);
  if (!(!f || !l || !u || !c)) {
    var d = l.velocityX, p = l.velocityY, v = l.total, h = u.maxPositionX, y = u.minPositionX, _ = u.maxPositionY, A = u.minPositionY, w = r.limitToBounds, M = r.autoAlignment, H = r.zoomAnimation, X = r.panning, B = X.lockAxisY, P = X.lockAxisX, q = H.animationType, k = M.sizeX, V = M.sizeY, te = M.velocityAlignmentTime, G = te, ie = J2(a, v), ye = Math.max(ie, G), _e = Qn(a, k), be = Qn(a, V), pe = _e * c.offsetWidth / 100, ke = be * c.offsetHeight / 100, W = h + pe, Oe = y - pe, j = _ + ke, $ = A - ke, ee = a.state, Se = (/* @__PURE__ */ new Date()).getTime();
    Rh(a, q, ye, function(ze) {
      var T = a.state, U = T.scale, L = T.positionX, Q = T.positionY, le = (/* @__PURE__ */ new Date()).getTime() - Se, se = le / G, Te = Dh[M.animationType], tt = 1 - Te(Math.min(1, se)), Xe = 1 - ze, _n = L + d * Xe, Pn = Q + p * Xe, ci = Vp(_n, ee.positionX, L, P, w, y, h, Oe, W, tt), bl = Vp(Pn, ee.positionY, Q, B, w, A, _, $, j, tt);
      if (L !== _n || Q !== Pn) {
        a.setState(U, ci, bl);
        var Jt = a.props.onPanning;
        Jt && Jt(ge(a), {});
      }
    });
  }
}
function Gp(a, l) {
  var u = a.state, r = u.scale, c = u.positionX, f = u.positionY;
  a.panStartPosition = { x: c, y: f }, Kt(a), oi(a, r), window.TouchEvent !== void 0 && l instanceof TouchEvent ? L2(a, l) : $2(a, l);
}
function Yh(a, l) {
  var u = a.state.scale, r = a.setup, c = r.minScale, f = r.autoAlignment, d = f.disabled, p = f.sizeX, v = f.sizeY, h = f.animationTime, y = f.animationType, _ = d || u < c || !p && !v;
  if (!_) {
    var A = V2(a);
    A && Wn(a, A, h, y);
  }
}
function Qp(a, l, u, r) {
  var c = a.startCoords, f = a.setup, d = f.autoAlignment, p = d.sizeX, v = d.sizeY;
  if (c) {
    var h = G2(a, l, u), y = h.x, _ = h.y, A = Qn(a, p), w = Qn(a, v);
    P2(a, { x: y, y: _ }, r), Uh(a, y, _, A, w);
  }
}
function I2(a, l) {
  if (a.isPanning) {
    var u = a.velocity, r = a.wrapperComponent, c = a.contentComponent;
    a.isPanning = !1;
    var f = a.state, d = f.positionX, p = f.positionY, v = f.scale, h = a.panStartPosition;
    if (a.panStartPosition = null, h) {
      var y = d - h.x, _ = p - h.y;
      if (y * y + _ * _ <= 25)
        return;
    }
    a.isAnimating = !1, a.animation = null;
    var A = r?.offsetWidth || 0, w = r?.offsetHeight || 0, M = (c?.offsetWidth || 0) * v, H = (c?.offsetHeight || 0) * v, X = !a.setup.limitToBounds || A < M || w < H, B = !l && u && u.total > 0.1 && X;
    B ? F2(a) : Yh(a);
  }
}
function Ps(a, l, u, r) {
  var c = a.setup, f = c.minScale, d = c.maxScale, p = c.limitToBounds, v = vl(ga(l, 2), f, d, 0, !1), h = oi(a, v), y = tr(a, u, r, v, h, p), _ = y.x, A = y.y;
  return { scale: v, positionX: _, positionY: A };
}
function Fs(a, l, u) {
  var r = a.state.scale, c = a.wrapperComponent, f = a.setup, d = f.minScale, p = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, y = h.disabled, _ = h.animationTime, A = h.animationType, w = r >= d && r <= p, M = y || w;
  if ((r >= 1 || v) && Yh(a), !(M || !c || !a.mounted)) {
    var H = l || c.offsetWidth / 2, X = u || c.offsetHeight / 2, B = r < d ? d : p, P = Ps(a, B, H, X);
    P && Wn(a, P, _, A);
  }
}
var $t = function() {
  return $t = Object.assign || function(l) {
    for (var u, r = 1, c = arguments.length; r < c; r++) {
      u = arguments[r];
      for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (l[f] = u[f]);
    }
    return l;
  }, $t.apply(this, arguments);
};
function Kp(a, l, u) {
  for (var r = 0, c = l.length, f; r < c; r++)
    (f || !(r in l)) && (f || (f = Array.prototype.slice.call(l, 0, r)), f[r] = l[r]);
  return a.concat(f || Array.prototype.slice.call(l));
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
}, kh = function(a) {
  var l, u, r, c, f, d, p, v, h, y = Math.max((l = a.minScale) !== null && l !== void 0 ? l : va.minScale, 1e-7), _ = (u = a.maxScale) !== null && u !== void 0 ? u : va.maxScale, A = (r = a.initialScale) !== null && r !== void 0 ? r : js.scale, w = Math.min(Math.max(A, y), _), M = dl((c = a.initialPositionX) !== null && c !== void 0 ? c : js.positionX, (f = a.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = a.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, a.minPositionX != null || a.maxPositionX != null), H = dl((p = a.initialPositionY) !== null && p !== void 0 ? p : js.positionY, (v = a.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = a.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, a.minPositionY != null || a.maxPositionY != null);
  return {
    previousScale: w,
    scale: w,
    positionX: M,
    positionY: H
  };
}, Jp = function(a) {
  var l = $t({}, va);
  return Object.keys(a).forEach(function(u) {
    var r = u, c = typeof a[r] < "u", f = typeof va[r] < "u";
    if (f && c) {
      var d = Object.prototype.toString.call(va[r]), p = d === "[object Object]", v = d === "[object Array]";
      p ? l[r] = $t($t({}, va[r]), a[r]) : v ? l[r] = Kp(Kp([], va[r], !0), a[r]) : l[r] = a[r];
    }
  }), l.minScale <= 0 && (l.minScale = 1e-7), l;
}, Xh = function(a, l, u) {
  var r = a.state.scale, c = a.wrapperComponent, f = a.setup, d = f.maxScale, p = f.minScale, v = f.zoomAnimation, h = f.smooth, y = v.size;
  if (!c)
    throw new Error("Wrapper is not mounted");
  var _ = h ? r * Math.exp(l * u) : r + l * u, A = vl(ga(_, 3), p, d, y, !1);
  return A;
};
function Hh(a, l, u, r, c) {
  var f, d, p = a.wrapperComponent, v = a.state, h = v.scale, y = v.positionX, _ = v.positionY, A = a.setup.zoomAnimation;
  if (!p)
    return console.error("No WrapperComponent found");
  var w = A.disabled ? 0 : r, M = p.offsetWidth, H = p.offsetHeight, X = (M / 2 - y) / h, B = (H / 2 - _) / h, P = Xh(a, l, u), q = Ps(a, P, X, B);
  if (!q)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var k = a.props, V = k.onZoomStart, te = k.onZoom, G = k.onZoomStop, ie = new MouseEvent("mousemove", { bubbles: !0 }), ye = ge(a);
  we(ye, ie, V), we(ye, ie, te), Wn(a, q, w, c);
  var _e = (d = (f = p.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  _e && _e.setTimeout(function() {
    a.mounted && we(ge(a), ie, G);
  }, w);
}
function Bh(a, l, u, r) {
  var c, f, d = a.setup, p = a.wrapperComponent, v = a.contentComponent, h = d.limitToBounds, y = d.centerOnInit, _ = kh(a.props), A = a.state, w = A.scale, M = A.positionX, H = A.positionY;
  if (p) {
    var X = _.positionX, B = _.positionY;
    if (y && v) {
      var P = Is(_.scale, p, v);
      X = P.positionX, B = P.positionY;
    }
    var q = Ws(a, _.scale), k = hl(X, B, q, h, 0, 0, p), V = {
      scale: _.scale,
      positionX: k.x,
      positionY: k.y
    };
    if (!(w === _.scale && M === _.positionX && H === _.positionY)) {
      r?.();
      var te = a.props, G = te.onZoomStart, ie = te.onZoom, ye = te.onZoomStop, _e = new MouseEvent("mousemove", { bubbles: !0 }), be = ge(a);
      we(be, _e, G), we(be, _e, ie), Wn(a, V, l, u);
      var pe = (f = (c = p.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      pe && pe.setTimeout(function() {
        a.mounted && we(ge(a), _e, ye);
      }, l);
    }
  }
}
function ez(a, l, u, r) {
  var c = a.getBoundingClientRect(), f = l.getBoundingClientRect(), d = u.getBoundingClientRect(), p = f.x * r.scale, v = f.y * r.scale;
  return {
    x: (c.x - d.x + p) / r.scale,
    y: (c.y - d.y + v) / r.scale
  };
}
function tz(a, l, u, r, c) {
  r === void 0 && (r = 0), c === void 0 && (c = 0);
  var f = a.wrapperComponent, d = a.contentComponent, p = a.state, v = a.setup, h = v.limitToBounds, y = v.minScale, _ = v.maxScale;
  if (!f || !d)
    return p;
  var A = f.getBoundingClientRect(), w = l.getBoundingClientRect(), M = ez(l, f, d, p), H = M.x, X = M.y, B = w.width / p.scale, P = w.height / p.scale, q = f.offsetWidth / B, k = f.offsetHeight / P, V = vl(u || Math.min(q, k), y, _, 0, !1), te = (A.width - B * V) / 2, G = (A.height - P * V) / 2, ie = (A.left - H) * V + te + r, ye = (A.top - X) * V + G + c, _e = Ws(a, V), be = hl(ie, ye, _e, h, 0, 0, f), pe = be.x, ke = be.y;
  return { positionX: pe, positionY: ke, scale: V };
}
var nz = function(a) {
  return function(l, u, r) {
    l === void 0 && (l = 0.5), u === void 0 && (u = 300), r === void 0 && (r = "easeOut"), Hh(a, 1, l, u, r);
  };
}, az = function(a) {
  return function(l, u, r) {
    l === void 0 && (l = 0.5), u === void 0 && (u = 300), r === void 0 && (r = "easeOut"), Hh(a, -1, l, u, r);
  };
}, iz = function(a) {
  return function(l, u, r, c, f) {
    c === void 0 && (c = 300), f === void 0 && (f = "easeOut");
    var d = a.state, p = d.positionX, v = d.positionY, h = d.scale, y = a.wrapperComponent, _ = a.contentComponent, A = a.setup.disabled;
    if (!(A || !y || !_)) {
      var w = {
        positionX: Number.isNaN(l) ? p : l,
        positionY: Number.isNaN(u) ? v : u,
        scale: Number.isNaN(r) ? h : r
      };
      Wn(a, w, c, f);
    }
  };
}, lz = function(a) {
  return function(l, u) {
    l === void 0 && (l = 200), u === void 0 && (u = "easeOut"), Bh(a, l, u);
  };
}, uz = function(a) {
  return function(l, u, r) {
    u === void 0 && (u = 200), r === void 0 && (r = "easeOut");
    var c = a.state, f = a.wrapperComponent, d = a.contentComponent;
    if (f && d) {
      var p = Is(l || c.scale, f, d);
      Wn(a, p, u, r);
    }
  };
}, rz = function(a) {
  return function(l, u, r, c, f, d) {
    r === void 0 && (r = 600), c === void 0 && (c = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), Kt(a);
    var p = a.wrapperComponent, v = typeof l == "string" ? document.getElementById(l) : l;
    if (p && v && p.contains(v)) {
      var h = tz(a, v, u, f, d);
      Wn(a, h, r, c);
    }
  };
}, Wu = function(a) {
  return {
    instance: a,
    state: a.state,
    zoomIn: nz(a),
    zoomOut: az(a),
    setTransform: iz(a),
    resetTransform: lz(a),
    centerView: uz(a),
    zoomToElement: rz(a)
  };
}, oz = function(a) {
  return {
    instance: a,
    state: a.state
  };
}, ge = function(a) {
  var l = {};
  return Object.assign(l, oz(a)), Object.assign(l, Wu(a)), l;
}, Ds = !1;
function Zs() {
  try {
    var a = {
      get passive() {
        return Ds = !0, !1;
      }
    };
    return a;
  } catch {
    return Ds = !1, Ds;
  }
}
var $u = ".".concat(Xs.wrapperClass), gl = function(a, l) {
  return l.some(function(u) {
    return a.matches("".concat($u, " ").concat(u, ", ").concat($u, " .").concat(u, ", ").concat($u, " ").concat(u, " *, ").concat($u, " .").concat(u, " *"));
  });
}, ml = function(a) {
  a && clearTimeout(a);
}, sz = function(a) {
  return Number.parseFloat(a.toFixed(8));
}, qh = function(a, l, u) {
  var r = sz(u);
  return "translate(".concat(a, "px, ").concat(l, "px) scale(").concat(r, ")");
}, Is = function(a, l, u) {
  var r = u.offsetWidth * a, c = u.offsetHeight * a, f = (l.offsetWidth - r) / 2, d = (l.offsetHeight - c) / 2;
  return {
    scale: a,
    positionX: f,
    positionY: d
  };
};
function cz(a, l) {
  a != null && (typeof a == "function" ? a(l) : a.current = l);
}
function fz(a) {
  return function(l) {
    a.forEach(function(u) {
      typeof u == "function" ? u(l) : u != null && (u.current = l);
    });
  };
}
var $h = function(a, l) {
  var u = a.setup.wheel, r = u.disabled, c = u.wheelDisabled, f = u.touchPadDisabled, d = u.excluded, p = a.isInitialized, v = a.isPanning, h = l.target, y = p && !v && !r && h;
  if (!y || c && !l.ctrlKey || f && l.ctrlKey)
    return !1;
  var _ = gl(h, d);
  if (_)
    return !1;
  var A = a.isPressingKeys(a.setup.wheel.activationKeys);
  return !!A;
}, dz = function(a, l) {
  var u = a.setup, r = u.disabled, c = u.trackPadPanning, f = c.activationKeys, d = c.excluded;
  if (!a.wrapperComponent || !a.contentComponent || r || c.disabled || l.ctrlKey)
    return !1;
  var p = $h(a, l);
  if (p)
    return !1;
  var v = l.target, h = gl(v, d);
  if (h)
    return !1;
  var y = a.isPressingKeys(f);
  return !!y;
}, mz = function(a) {
  return a ? a.deltaY < 0 ? 1 : -1 : 0;
};
function pz(a, l) {
  var u = mz(a), r = A2(l, u);
  return r;
}
function Lh(a, l, u) {
  var r = l.getBoundingClientRect(), c = 0, f = 0;
  if ("clientX" in a)
    c = (a.clientX - r.left) / u, f = (a.clientY - r.top) / u;
  else {
    var d = a.touches[0];
    c = (d.clientX - r.left) / u, f = (d.clientY - r.top) / u;
  }
  return (Number.isNaN(c) || Number.isNaN(f)) && console.error("No mouse or touch offset found"), {
    x: c,
    y: f
  };
}
var hz = function(a, l, u, r, c) {
  var f = a.state.scale, d = a.wrapperComponent, p = a.setup, v = p.maxScale, h = p.minScale, y = p.zoomAnimation, _ = p.disablePadding, A = y.size, w = y.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var M = f + l * u, H = r ? !1 : !w, X = vl(M, h, v, A, H && !_);
  return X;
}, Vh = function(a, l) {
  var u = a.previousWheelEvent, r = a.state.scale, c = a.setup, f = c.maxScale, d = c.minScale;
  return u ? r < f || r > d || Math.sign(u.deltaY) !== Math.sign(l.deltaY) || u.deltaY > 0 && u.deltaY < l.deltaY || u.deltaY < 0 && u.deltaY > l.deltaY || Math.sign(u.deltaY) !== Math.sign(l.deltaY) : !1;
}, vz = function(a, l) {
  var u = a.setup.pinch, r = u.disabled, c = u.excluded, f = a.isInitialized, d = l.target, p = f && !r && d;
  if (!p)
    return !1;
  var v = gl(d, c);
  return !v;
}, gz = function(a) {
  var l = a.setup.pinch.disabled, u = a.isInitialized, r = a.pinchStartDistance, c = u && !l && r !== null;
  return !!c;
}, yz = function(a, l, u) {
  var r = u.getBoundingClientRect(), c = a.touches, f = c[0].clientX - r.left, d = c[0].clientY - r.top, p = c[1].clientX - r.left, v = c[1].clientY - r.top;
  return {
    x: (f + p) / 2 / l,
    y: (d + v) / 2 / l
  };
}, Gh = function(a) {
  return Math.sqrt(Math.pow(a.touches[0].pageX - a.touches[1].pageX, 2) + Math.pow(a.touches[0].pageY - a.touches[1].pageY, 2));
}, bz = 5, _z = function(a, l) {
  var u = a.pinchStartScale, r = a.pinchStartDistance, c = a.setup, f = c.maxScale, d = c.minScale, p = c.zoomAnimation, v = c.disablePadding, h = c.pinch, y = p.size, _ = p.disabled, A = h.step;
  if (!u || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (l < 0)
    return a.state.scale;
  var w = l / r, M = w * u, H = (M - u) * (A / bz), X = u + H, B = X === 1 / 0 ? 0 : ga(X, 10);
  return vl(B, d, f, y, !_ && !v);
}, Qh = 160, Kh = 100, Sz = function(a, l) {
  var u = a.props, r = u.onWheelStart, c = u.onZoomStart;
  a.wheelStopEventTimer || (Kt(a), we(ge(a), l, r), we(ge(a), l, c));
}, zz = function(a, l) {
  var u = a.props, r = u.onWheel, c = u.onZoom, f = a.contentComponent, d = a.setup, p = a.state, v = p.scale, h = d.limitToBounds, y = d.centerZoomedOut, _ = d.zoomAnimation, A = d.wheel, w = d.disablePadding, M = d.smooth, H = _.size, X = _.disabled, B = A.step;
  if (!f)
    throw new Error("Component not mounted");
  l.preventDefault(), l.stopPropagation();
  var P = pz(l, null), q = M ? B * Math.abs(l.deltaY) : B, k = hz(a, P, q, !l.ctrlKey);
  if (v !== k) {
    var V = oi(a, k), te = Lh(l, f, v), G = X || H === 0 || y || w, ie = h && G, ye = tr(a, te.x, te.y, k, V, ie), _e = ye.x, be = ye.y;
    a.previousWheelEvent = l, a.setState(k, _e, be), we(ge(a), l, r), we(ge(a), l, c);
  }
}, Tz = function(a, l) {
  var u = a.props, r = u.onWheelStop, c = u.onZoomStop;
  ml(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (Fs(a, l.x, l.y), a.wheelAnimationTimer = null);
  }, Kh);
  var f = Vh(a, l);
  f && (ml(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, we(ge(a), l, r), we(ge(a), l, c));
  }, Qh));
}, Ez = function(a, l) {
  var u = a.props, r = u.onWheelStart, c = u.onPanningStart;
  a.wheelStopEventTimer || (Kt(a), we(ge(a), l, r), we(ge(a), l, c));
}, Az = function(a, l) {
  var u = a.props, r = u.onWheelStop, c = u.onPanningStop;
  ml(a.wheelAnimationTimer), a.wheelAnimationTimer = setTimeout(function() {
    a.mounted && (Fs(a, l.x, l.y), a.wheelAnimationTimer = null);
  }, Kh);
  var f = Vh(a, l);
  f && (ml(a.wheelStopEventTimer), a.wheelStopEventTimer = setTimeout(function() {
    a.mounted && (a.wheelStopEventTimer = null, we(ge(a), l, r), we(ge(a), l, c));
  }, Qh));
}, Jh = function(a) {
  for (var l = 0, u = 0, r = 0; r < 2; r += 1)
    l += a.touches[r].clientX, u += a.touches[r].clientY;
  var c = l / 2, f = u / 2;
  return { x: c, y: f };
}, wz = function(a, l) {
  var u = Gh(l);
  a.pinchStartDistance = u, a.lastDistance = u, a.pinchStartScale = a.state.scale, a.isPanning = !1, a.isPinching = !0, a.pinchPreviousCenter = Jh(l), Kt(a);
}, Oz = function(a, l) {
  var u = a.contentComponent, r = a.pinchStartDistance, c = a.wrapperComponent, f = a.pinchPreviousCenter, d = a.state.scale, p = a.setup, v = p.limitToBounds, h = p.centerZoomedOut, y = p.zoomAnimation, _ = p.autoAlignment, A = p.pinch, w = p.panning, M = y.disabled, H = y.size, X = A.allowPanning;
  if (!(r === null || !u)) {
    var B = yz(l, d, u);
    if (!(!Number.isFinite(B.x) || !Number.isFinite(B.y))) {
      var P = Gh(l), q = _z(a, P), k = Jh(l), V = d / q, te = (k.x - (f?.x || 0)) * V, G = (k.y - (f?.y || 0)) * V;
      if (!(q === d && te === 0 && G === 0)) {
        a.pinchPreviousCenter = k;
        var ie = oi(a, q), ye = M || H === 0 || h, _e = v && ye, be = tr(a, B.x, B.y, q, ie, _e), pe = be.x, ke = be.y;
        if (a.pinchMidpoint = B, a.lastDistance = P, w.disabled || !X)
          a.setState(q, pe, ke);
        else {
          var W = _.sizeX, Oe = _.sizeY, j = Qn(a, W, q), $ = Qn(a, Oe, q), ee = pe + te, Se = ke + G, ze = hl(ee, Se, ie, v, j, $, c), T = ze.x, U = ze.y;
          a.setState(q, T, U);
        }
      }
    }
  }
}, xz = function(a) {
  var l = a.pinchMidpoint;
  a.velocity = null, a.lastDistance = null, a.pinchMidpoint = null, a.pinchStartScale = null, a.pinchStartDistance = null, a.isPinching = !1, Fs(a, l?.x, l?.y);
}, Wh = function(a, l) {
  var u = a.props.onZoomStop, r = a.setup.doubleClick.animationTime;
  ml(a.doubleClickStopEventTimer), a.doubleClickStopEventTimer = setTimeout(function() {
    a.doubleClickStopEventTimer = null, we(ge(a), l, u);
  }, r);
}, Cz = function(a, l) {
  var u = a.props, r = u.onZoomStart, c = u.onZoom, f = a.setup.doubleClick, d = f.animationTime, p = f.animationType;
  we(ge(a), l, r), Bh(a, d, p, function() {
    return we(ge(a), l, c);
  }), Wh(a, l);
};
function Mz(a, l) {
  return a === "toggle" ? l === 1 ? 1 : -1 : a === "zoomOut" ? -1 : 1;
}
function Nz(a, l) {
  var u = a.setup, r = a.doubleClickStopEventTimer, c = a.state, f = a.contentComponent, d = c.scale, p = a.props, v = p.onZoomStart, h = p.onZoom, y = u.doubleClick, _ = y.disabled, A = y.mode, w = y.step, M = y.animationTime, H = y.animationType;
  if (!_ && !r) {
    if (A === "reset")
      return Cz(a, l);
    if (!f)
      return console.error("No ContentComponent found");
    var X = Mz(A, a.state.scale), B = Xh(a, X, w);
    if (d !== B) {
      we(ge(a), l, v);
      var P = Lh(l, f, d), q = Ps(a, B, P.x, P.y);
      if (!q)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      we(ge(a), l, h), Wn(a, q, M, H), Wh(a, l);
    }
  }
}
var jz = function(a, l) {
  var u = a.isInitialized, r = a.setup, c = a.wrapperComponent, f = r.doubleClick, d = f.disabled, p = f.excluded, v = l.target, h = c?.contains(v), y = u && v && h && !d;
  if (!y)
    return !1;
  var _ = gl(v, p);
  return !_;
}, Dz = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(l) {
      var u = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        u.initializeWindowEvents();
      }, this.unmount = function() {
        u.cleanupWindowEvents();
      }, this.update = function(r) {
        u.props = r, u.wrapperComponent && u.contentComponent && oi(u, u.state.scale), u.setup = Jp(r);
      }, this.initializeWindowEvents = function() {
        var r, c, f, d, p = Zs(), v = (r = u.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, h = v?.defaultView;
        (c = u.wrapperComponent) === null || c === void 0 || c.addEventListener("wheel", u.onWheelPanning, p), (f = u.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", u.setKeyUnPressed, p), (d = u.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("mousedown", u.onPanningStart, p), h?.addEventListener("mousemove", u.onPanning, p), h?.addEventListener("mouseup", u.onPanningStop, p), v?.addEventListener("mouseleave", u.clearPanning, p), h?.addEventListener("keyup", u.setKeyUnPressed, p), h?.addEventListener("keydown", u.setKeyPressed, p), h?.addEventListener("blur", u.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, c, f, d, p, v = Zs(), h = (r = u.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, y = h?.defaultView;
        y?.removeEventListener("mousedown", u.onPanningStart, v), y?.removeEventListener("mousemove", u.onPanning, v), y?.removeEventListener("mouseup", u.onPanningStop, v), h?.removeEventListener("mouseleave", u.clearPanning, v), y?.removeEventListener("keyup", u.setKeyUnPressed, v), y?.removeEventListener("keydown", u.setKeyPressed, v), y?.removeEventListener("blur", u.handleWindowBlur), document.removeEventListener("mouseleave", u.clearPanning, v), (c = u.wrapperComponent) === null || c === void 0 || c.removeEventListener("wheel", u.onWheelPanning, v), (f = u.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", u.setKeyUnPressed, v), (d = u.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", u.setKeyPressed, v), Kt(u), (p = u.observer) === null || p === void 0 || p.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var c = Zs();
        r.addEventListener("wheel", u.onWheelZoom, c), r.addEventListener("dblclick", u.onDoubleClick, c), r.addEventListener("touchstart", u.onTouchPanningStart, c), r.addEventListener("touchmove", u.onTouchPanning, c), r.addEventListener("touchend", u.onTouchPanningStop, c);
      }, this.handleInitialize = function(r) {
        var c = u.setup.centerOnInit;
        u.applyTransformation(), u.onInitCallbacks.forEach(function(f) {
          return f(ge(u));
        }), c && (u.setCenter(), u.observer = new ResizeObserver(function() {
          var f, d = r.offsetWidth, p = r.offsetHeight;
          (d > 0 || p > 0) && (u.onInitCallbacks.forEach(function(v) {
            return v(ge(u));
          }), u.setCenter(), (f = u.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = u.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), u.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var c = u.setup.disabled;
        if (!c) {
          u.syncModifierKeys(r);
          var f = $h(u, r);
          f && (Sz(u, r), zz(u, r), Tz(u, r));
        }
      }, this.onWheelPanning = function(r) {
        var c = u.props.onPanning, f = u.setup.trackPadPanning, d = f.lockAxisX, p = f.lockAxisY;
        u.syncModifierKeys(r);
        var v = dz(u, r);
        if (v) {
          r.preventDefault(), r.stopPropagation();
          var h = u.state, y = h.positionX, _ = h.positionY, A = y - r.deltaX, w = _ - r.deltaY, M = d ? y : A, H = p ? _ : w, X = u.setup.autoAlignment, B = X.sizeX, P = X.sizeY, q = Qn(u, B), k = Qn(u, P);
          M === y && H === _ || (Ez(u, r), Uh(u, M, H, q, k), we(ge(u), r, c), Az(u, r));
        }
      }, this.onPanningStart = function(r) {
        var c = u.setup.disabled, f = u.props.onPanningStart;
        if (!c) {
          u.syncModifierKeys(r);
          var d = $p(u, r);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (r.button === 0 && !u.setup.panning.allowLeftClickPan || r.button === 1 && !u.setup.panning.allowMiddleClickPan || r.button === 2 && !u.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), Kt(u), Gp(u, r), we(ge(u), r, f)));
          }
        }
      }, this.onPanning = function(r) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (!c) {
          if (u.syncModifierKeys(r), u.isPanning && r.buttons === 0) {
            u.clearPanning(r);
            return;
          }
          var d = Lp(u);
          if (d) {
            var p = u.isPressingKeys(u.setup.panning.activationKeys);
            p && (r.preventDefault(), r.stopPropagation(), Qp(u, r.clientX, r.clientY, Gn.MOUSE), we(ge(u), r, f));
          }
        }
      }, this.onPanningStop = function(r) {
        var c = u.setup.panning.velocityDisabled, f = u.props.onPanningStop;
        u.isPanning && (I2(u, c), we(ge(u), r, f));
      }, this.onPinchStart = function(r) {
        var c = u.setup.disabled, f = u.props.onPinchStart;
        if (!c) {
          var d = vz(u, r);
          d && (wz(u, r), Kt(u), we(ge(u), r, f));
        }
      }, this.onPinch = function(r) {
        var c = u.setup.disabled, f = u.props.onPinch;
        if (!c) {
          var d = gz(u);
          d && (r.preventDefault(), r.stopPropagation(), Oz(u, r), we(ge(u), r, f));
        }
      }, this.onPinchStop = function(r) {
        var c = u.props.onPinchStop;
        u.pinchStartScale && (xz(u), we(ge(u), r, c));
      }, this.onTouchPanningStart = function(r) {
        var c = u.setup, f = c.disabled, d = c.doubleClick, p = u.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = u.lastTouch && +/* @__PURE__ */ new Date() - u.lastTouch < 200;
          if (v && h && r.touches.length === 1)
            u.onDoubleClick(r);
          else {
            u.lastTouch = +/* @__PURE__ */ new Date(), Kt(u);
            var y = r.touches, _ = y.length === 1, A = y.length === 2, w = $p(u, r);
            if (_) {
              if (!w)
                return;
              Kt(u), Gp(u, r), we(ge(u), r, p);
            }
            A && u.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var c = u.setup.disabled, f = u.props.onPanning;
        if (u.isPanning && r.touches.length === 1) {
          if (c)
            return;
          var d = Lp(u);
          if (!d)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var p = r.touches[0];
          Qp(u, p.clientX, p.clientY, Gn.TOUCH), we(ge(u), r, f);
        } else r.touches.length > 1 && u.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        u.onPanningStop(r), u.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var c = u.setup.disabled;
        if (!c) {
          var f = jz(u, r);
          f && Nz(u, r);
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
        return u.props.customTransform ? u.props.customTransform(r, c, f) : qh(r, c, f);
      }, this.getContext = function() {
        return ge(u);
      }, this.applyTransformation = function() {
        if (!(!u.mounted || !u.contentComponent)) {
          var r = u.state, c = r.scale, f = r.positionX, d = r.positionY, p = u.handleTransformStyles(f, d, c);
          u.props.detached || (u.contentComponent.style.transform = p), u.onTransformCallbacks.forEach(function(v) {
            return v({
              scale: c,
              positionX: f,
              positionY: d,
              previousScale: u.state.previousScale,
              ref: ge(u)
            });
          });
        }
      }, this.setState = function(r, c, f) {
        var d = u.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(c) && !Number.isNaN(f)) {
          var p = Math.max(r, 1e-7);
          p !== u.state.scale && (u.state.previousScale = u.state.scale, u.state.scale = p), u.state.positionX = c, u.state.positionY = f, u.applyTransformation();
          var v = ge(u);
          u.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), we(v, { scale: u.state.scale, positionX: c, positionY: f }, d);
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
        u.cleanupWindowEvents(), u.wrapperComponent = r, u.contentComponent = c, oi(u, u.state.scale), u.handleInitializeWrapperEvents(r), u.handleInitialize(c), u.initializeWindowEvents(), u.isInitialized = !0;
        var f = ge(u);
        we(f, void 0, u.props.onInit), cz(u.props.ref, f);
      }, this.props = l, this.setup = Jp(this.props), this.state = kh(this.props);
    }
    return a;
  })()
), yl = Pu.createContext(null), Zz = function(a, l) {
  return typeof a == "function" ? a(l) : a;
}, Rz = Pu.forwardRef(function(a, l) {
  var u = ae.useRef(new Dz(a)).current, r = Zz(a.children, Wu(u));
  return ae.useImperativeHandle(l, function() {
    return Wu(u);
  }, [u]), ae.useEffect(function() {
    u.update(a);
  }, [u, a]), S.jsx(yl.Provider, $t({ value: u }, { children: r }));
});
Pu.forwardRef(function(a, l) {
  var u = ae.useRef(null), r = ae.useContext(yl);
  return ae.useEffect(function() {
    return r.onChange(function(c) {
      if (u.current) {
        var f = 0, d = 0;
        u.current.style.transform = r.handleTransformStyles(f, d, 1 / c.instance.state.scale);
      }
    });
  }, [r]), S.jsx("div", $t({}, a, { ref: fz([u, l]) }));
});
function Uz(a, l) {
  l === void 0 && (l = {});
  var u = l.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css", u === "top" && r.firstChild ? r.insertBefore(c, r.firstChild) : r.appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
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
Uz(Yz);
var kz = function(a) {
  var l = a.children, u = a.wrapperClass, r = u === void 0 ? "" : u, c = a.contentClass, f = c === void 0 ? "" : c, d = a.wrapperStyle, p = a.contentStyle, v = a.wrapperProps, h = v === void 0 ? {} : v, y = a.contentProps, _ = y === void 0 ? {} : y, A = a.infinite, w = A === void 0 ? !1 : A, M = ae.useContext(yl), H = M.init, X = M.cleanupWindowEvents, B = ae.useRef(null), P = ae.useRef(null), q = ae.useRef(null);
  return ae.useEffect(function() {
    var k = B.current, V = P.current;
    return k !== null && V !== null && H && H?.(k, V), function() {
      X?.();
    };
  }, []), ae.useEffect(function() {
    if (w) {
      var k = q.current;
      if (k) {
        var V = function() {
          var te = M.state, G = te.positionX, ie = te.positionY;
          k.style.backgroundPosition = "".concat(G, "px ").concat(ie, "px");
        };
        return V(), M.onChange(V);
      }
    }
  }, [w, M]), S.jsxs("div", $t({}, h, { ref: B, className: "".concat(Xs.wrapperClass, " ").concat(Rs.wrapper, " ").concat(r), style: d }, { children: [w && S.jsx("div", { ref: q, className: Rs.infiniteGrid, "aria-hidden": !0 }), S.jsx("div", $t({}, _, { ref: P, className: "".concat(Xs.contentClass, " ").concat(Rs.content, " ").concat(f), style: $t($t({}, p), { transform: qh(M.state.positionX, M.state.positionY, M.state.scale) }) }, { children: l }))] }));
};
function Xz(a, l) {
  var u = Math.max(0, Math.min(a.x + a.width, l.x + l.width) - Math.max(a.x, l.x)), r = Math.max(0, Math.min(a.y + a.height, l.y + l.height) - Math.max(a.y, l.y));
  return u * r;
}
function Hz(a) {
  var l = a.elementX, u = a.elementY, r = a.elementWidth, c = a.elementHeight, f = a.scale, d = a.positionX, p = a.positionY, v = a.viewportWidth, h = a.viewportHeight, y = a.margin, _ = y === void 0 ? 0 : y, A = a.threshold, w = A === void 0 ? 0 : A, M = {
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
    var X = H.x < M.x + M.width && H.x + H.width > M.x, B = H.y < M.y + M.height && H.y + H.height > M.y;
    return X && B;
  }
  var P = H.width * H.height;
  if (P <= 0)
    return !1;
  var q = Xz(M, H);
  return q / P >= w;
}
Pu.forwardRef(function(a, l) {
  var u = a.x, r = a.y, c = a.width, f = a.height, d = a.margin, p = d === void 0 ? 0 : d, v = a.threshold, h = v === void 0 ? 0 : v, y = a.placeholder, _ = y === void 0 ? null : y, A = a.onShow, w = a.onHide, M = a.children, H = a.className, X = a.style, B = ae.useContext(yl), P = ae.useState(!1), q = P[0], k = P[1], V = ae.useRef(!1), te = ae.useRef(A), G = ae.useRef(w);
  return te.current = A, G.current = w, ae.useEffect(function() {
    var ie = function() {
      var be, pe, ke = B.wrapperComponent;
      if (ke) {
        var W = Hz({
          elementX: u,
          elementY: r,
          elementWidth: c,
          elementHeight: f,
          scale: B.state.scale,
          positionX: B.state.positionX,
          positionY: B.state.positionY,
          viewportWidth: ke.offsetWidth,
          viewportHeight: ke.offsetHeight,
          margin: p,
          threshold: h
        });
        W !== V.current && (V.current = W, k(W), W ? (be = te.current) === null || be === void 0 || be.call(te) : (pe = G.current) === null || pe === void 0 || pe.call(G));
      }
    };
    ie();
    var ye = B.onChange(ie), _e;
    return B.wrapperComponent || (_e = B.onInit(function() {
      return ie();
    })), function() {
      ye(), _e?.();
    };
  }, [B, u, r, c, f, p, h]), q ? S.jsx("div", $t({ ref: l, className: H, style: X }, { children: M })) : _ ? S.jsx(S.Fragment, { children: _ }) : null;
});
var Bz = function() {
  var a = ae.useContext(yl);
  if (!a)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return a;
}, qz = function() {
  var a = Bz();
  return Wu(a);
};
function $z({ locked: a, onToggleLock: l }) {
  const { zoomIn: u, zoomOut: r, resetTransform: c } = qz();
  return /* @__PURE__ */ S.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => u(), disabled: a, children: /* @__PURE__ */ S.jsx(d0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => r(), disabled: a, children: /* @__PURE__ */ S.jsx(p0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => c(), children: /* @__PURE__ */ S.jsx(n0, {}) }),
    /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": a ? "Unlock map" : "Lock map", onClick: l, children: a ? /* @__PURE__ */ S.jsx(Qy, {}) : /* @__PURE__ */ S.jsx(Vy, {}) })
  ] });
}
function Lz({ hass: a, floor: l, language: u, selected: r, launched: c, disabled: f, onToggle: d }) {
  const [p, v] = ae.useState(!0), [h, y] = ae.useState({ width: 0, height: 0 }), [_, A] = ae.useState({ width: 0, height: 0 }), w = ae.useRef(null), M = a.states[l.map_entity], H = ae.useMemo(() => Mh(M), [M]), X = ae.useMemo(() => l2(M), [M]), B = ae.useMemo(() => o2(l), [l]), P = typeof M?.attributes.entity_picture == "string" ? M.attributes.entity_picture : void 0;
  ae.useEffect(() => {
    const k = w.current;
    if (!k) return;
    const V = new ResizeObserver(([te]) => {
      A({ width: te.contentRect.width, height: te.contentRect.height });
    });
    return V.observe(k), () => V.disconnect();
  }, []);
  let q;
  return !M || M.state === "unavailable" ? q = ve(u, "mapMissing") : P ? X.length < 3 ? q = ve(u, "calibrationMissing") : H.length === 0 && (q = ve(u, "roomsMissing")) : q = ve(u, "imageMissing"), q ? /* @__PURE__ */ S.jsx("div", { className: "map-error", role: "alert", children: q }) : /* @__PURE__ */ S.jsx("div", { className: "map-shell", ref: w, children: /* @__PURE__ */ S.jsxs(
    Rz,
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
        /* @__PURE__ */ S.jsx($z, { locked: p, onToggleLock: () => v((k) => !k) }),
        /* @__PURE__ */ S.jsx(kz, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!h.width || !h.height || !_.width || !_.height) return;
              const k = Math.min(_.width / h.width, _.height / h.height);
              return { width: h.width * k, height: h.height * k };
            })(),
            children: [
              /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: a.hassUrl(P),
                  alt: `${l.name} vacuum map`,
                  draggable: !1,
                  onLoad: (k) => y({ width: k.currentTarget.naturalWidth, height: k.currentTarget.naturalHeight })
                }
              ),
              h.width > 0 && h.height > 0 && /* @__PURE__ */ S.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${h.width} ${h.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${l.name} rooms`,
                  children: H.map((k) => {
                    const V = B.get(k.segment_id), te = !!V?.area_id, G = r.has(k.segment_id), ie = c.has(k.segment_id), ye = r2(k, X), _e = V?.name || k.source_name, be = f || !te;
                    return /* @__PURE__ */ S.jsxs("g", { className: `room ${G ? "selected" : ""} ${ie ? "launched" : ""} ${te ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ S.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: u2(k, X),
                          role: "button",
                          tabIndex: be ? -1 : 0,
                          "aria-label": `${_e}${te ? "" : ` — ${ve(u, "roomUnmapped")}`}`,
                          "aria-pressed": G,
                          "aria-disabled": be,
                          onClick: () => !be && d(k.segment_id),
                          onKeyDown: (pe) => {
                            !be && (pe.key === "Enter" || pe.key === " ") && (pe.preventDefault(), d(k.segment_id));
                          },
                          children: /* @__PURE__ */ S.jsx("title", { children: te ? _e : `${_e}: ${ve(u, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ S.jsxs("g", { className: "room-label", transform: `translate(${ye.x} ${ye.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ S.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ S.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ S.jsx(jh, { icon: V?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ S.jsx("text", { y: "39", textAnchor: "middle", children: _e })
                      ] })
                    ] }, k.segment_id);
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
function ul(a, l) {
  if (!l) return;
  const u = a.states[l];
  if (!(!u || ["unknown", "unavailable"].includes(u.state)))
    return `${u.state}${u.attributes.unit_of_measurement ? ` ${u.attributes.unit_of_measurement}` : ""}`;
}
function Vz(a, l) {
  const u = a.entities?.map_select ? l.states[a.entities.map_select]?.state : void 0;
  return a.floors.find((r) => r.map_select_option === u) ?? a.floors[0];
}
function Gz({ hass: a, config: l }) {
  const u = ae.useRef(a), r = ae.useRef(!1), c = l.language, [f, d] = ae.useState(() => Vz(l, a).id), p = l.floors.find((W) => W.id === f) ?? l.floors[0], [v, h] = ae.useState(/* @__PURE__ */ new Set()), [y, _] = ae.useState(!1), [A, w] = ae.useState(), [M, H] = ae.useState({ phase: "idle" }), X = ae.useMemo(() => d2(a, l), [a, l]), B = ae.useMemo(() => T2(l, X), [l, X]), P = B.find(({ preset: W, available: Oe }) => W.id === l.default_preset && Oe)?.preset ?? B.find(({ available: W }) => W)?.preset, [q, k] = ae.useState(
    () => Nh(P ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), V = a.states[l.entity];
  ae.useEffect(() => {
    u.current = a;
  }, [a]), ae.useEffect(() => {
    M.phase === "starting" && Bp(V?.state) ? H((W) => ({ ...W, phase: "active" })) : M.phase === "active" && !Bp(V?.state) && (H({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [M.phase, V?.state]);
  const te = new Set(M.floor_id === p.id ? M.segment_ids ?? [] : []), G = p.rooms.filter((W) => v.has(W.segment_id)), ie = G.map((W) => W.name), ye = [
    { icon: /* @__PURE__ */ S.jsx(Hy, {}), label: ve(c, "battery"), value: ul(a, l.entities?.battery) },
    { icon: /* @__PURE__ */ S.jsx(Jy, {}), label: ve(c, "room"), value: ul(a, l.entities?.current_room) },
    { icon: /* @__PURE__ */ S.jsx(i0, {}), label: ve(c, "area"), value: ul(a, l.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ S.jsx(qy, {}), label: ve(c, "duration"), value: ul(a, l.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ S.jsx(o0, {}), label: ve(c, "progress"), value: ul(a, l.entities?.cleaning_progress) }
  ].filter((W) => W.value), _e = (W) => {
    d(W), h(/* @__PURE__ */ new Set()), _(!1);
  }, be = () => {
    const W = p.rooms.filter((Oe) => Oe.include_in_floor_clean !== !1 && Oe.area_id).map((Oe) => Oe.segment_id);
    h(new Set(W)), _(!0);
  }, pe = async () => {
    if (!r.current) {
      r.current = !0, H({ phase: "submitting", floor_id: p.id, segment_ids: [...v] });
      try {
        await y2({ getHass: () => u.current, config: l, floor: p, rooms: G, draft: q }), H({ phase: "starting", floor_id: p.id, segment_ids: [...v] }), _(!1), w(ve(c, "launched"));
      } catch (W) {
        const Oe = W instanceof it ? `${W.operation}: ${W.message}` : String(W);
        H({ phase: "failed", floor_id: p.id, segment_ids: [...v], error: Oe }), w(Oe);
      } finally {
        r.current = !1;
      }
    }
  }, ke = async (W) => {
    try {
      await u.current.callService("vacuum", W, {}, { entity_id: l.entity });
    } catch (Oe) {
      w(`${W}: ${Oe instanceof Error ? Oe.message : String(Oe)}`);
    }
  };
  return /* @__PURE__ */ S.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ S.jsxs("div", { children: [
        /* @__PURE__ */ S.jsx("h1", { children: l.name ?? V?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ S.jsx("span", { className: `state-dot state-${V?.state ?? "unavailable"}` }),
        /* @__PURE__ */ S.jsx("span", { children: V?.state?.replaceAll("_", " ") ?? "unavailable" })
      ] }),
      ye.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "status-strip", children: ye.map((W) => /* @__PURE__ */ S.jsxs("div", { title: W.label, children: [
        W.icon,
        /* @__PURE__ */ S.jsx("strong", { children: W.value })
      ] }, W.label)) })
    ] }),
    l.floors.length > 1 && /* @__PURE__ */ S.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": ve(c, "floor"), children: l.floors.map((W) => /* @__PURE__ */ S.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": p.id === W.id,
        className: p.id === W.id ? "active" : "",
        onClick: () => _e(W.id),
        children: W.name
      },
      W.id
    )) }),
    /* @__PURE__ */ S.jsx(
      Lz,
      {
        hass: a,
        floor: p,
        language: c,
        selected: v,
        launched: te,
        disabled: M.phase === "submitting" || M.phase === "starting" || M.phase === "active",
        onToggle: (W) => h((Oe) => {
          const j = new Set(Oe);
          return j.has(W) ? j.delete(W) : j.add(W), j;
        })
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ S.jsxs("div", { children: [
        /* @__PURE__ */ S.jsx("strong", { children: ve(c, "selectedRooms") }),
        /* @__PURE__ */ S.jsx("span", { children: ie.length ? ie.join(" · ") : ve(c, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ S.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ S.jsxs("button", { type: "button", className: "secondary", onClick: be, disabled: M.phase === "submitting", children: [
        /* @__PURE__ */ S.jsx(pp, {}),
        " ",
        ve(c, "entireFloor")
      ] }),
      /* @__PURE__ */ S.jsx("button", { type: "button", className: "primary", onClick: () => _(!0), disabled: v.size === 0 || M.phase === "submitting", children: ve(c, "configureJob") })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      V?.state === "paused" && X.canStart && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => ke("start"), children: [
        /* @__PURE__ */ S.jsx(Iy, {}),
        ve(c, "resume")
      ] }),
      V?.state === "cleaning" && X.canPause && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => ke("pause"), children: [
        /* @__PURE__ */ S.jsx(Py, {}),
        ve(c, "pause")
      ] }),
      X.canStop && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => ke("stop"), children: [
        /* @__PURE__ */ S.jsx(u0, {}),
        ve(c, "stop")
      ] }),
      X.canDock && /* @__PURE__ */ S.jsxs("button", { type: "button", onClick: () => ke("return_to_base"), children: [
        /* @__PURE__ */ S.jsx(pp, {}),
        ve(c, "dock")
      ] })
    ] }),
    y && /* @__PURE__ */ S.jsx(
      E2,
      {
        language: c,
        draft: q,
        capabilities: X,
        presets: B,
        selectedRoomNames: ie,
        submitting: M.phase === "submitting",
        onDraftChange: k,
        onClose: () => M.phase !== "submitting" && _(!1),
        onStart: pe
      }
    ),
    A && /* @__PURE__ */ S.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ S.jsx("span", { children: A }),
      /* @__PURE__ */ S.jsx("button", { type: "button", "aria-label": ve(c, "close"), onClick: () => w(void 0), children: /* @__PURE__ */ S.jsx(Fp, {}) })
    ] })
  ] });
}
const Qz = ":host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.card-header>div:first-child>span{color:var(--rvm-muted);font-size:14px;text-transform:capitalize;vertical-align:middle}.state-dot{display:inline-block;width:8px;height:8px;margin-right:7px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.preset-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px}.preset-grid button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;min-height:92px;padding:10px;border:1px solid var(--rvm-border);border-radius:15px;background:transparent;cursor:pointer}.preset-grid button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.preset-grid ha-icon{width:25px;height:25px}.preset-grid small{color:var(--rvm-danger);font-size:10px;line-height:1.2}.job-fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.preset-grid{grid-template-columns:1fr 1fr}.job-fields,.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}", Kz = "0.1.1";
class Ph extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const l = this.attachShadow({ mode: "open" }), u = document.createElement("style");
    u.textContent = Qz, l.append(u), this.container = document.createElement("div"), l.append(this.container);
  }
  renderReact(l) {
    this.root ??= Ny.createRoot(this.container), this.root.render(l);
  }
}
class Jz extends Ph {
  config;
  homeAssistant;
  setConfig(l) {
    this.config = a2(l), this.render();
  }
  set hass(l) {
    this.homeAssistant = l, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ S.jsx(Gz, { hass: this.homeAssistant, config: this.config }));
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
class Wz extends Ph {
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", Jz);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", Wz);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${Kz} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  Jz as RoborockVacuumMapCard,
  Wz as RoborockVacuumMapCardEditor
};
