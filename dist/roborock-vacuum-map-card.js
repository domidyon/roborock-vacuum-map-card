function Rh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Sc = { exports: {} }, No = {};
var E_;
function kb() {
  if (E_) return No;
  E_ = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, l, c) {
    var m = null;
    if (c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), "key" in l) {
      c = {};
      for (var f in l)
        f !== "key" && (c[f] = l[f]);
    } else c = l;
    return l = c.ref, {
      $$typeof: n,
      type: r,
      key: m,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return No.Fragment = a, No.jsx = o, No.jsxs = o, No;
}
var C_;
function wb() {
  return C_ || (C_ = 1, Sc.exports = kb()), Sc.exports;
}
var _ = wb(), zc = { exports: {} }, Do = {}, xc = { exports: {} }, jc = {};
var M_;
function Sb() {
  return M_ || (M_ = 1, (function(n) {
    function a(T, V) {
      var ee = T.length;
      T.push(V);
      e: for (; 0 < ee; ) {
        var fe = ee - 1 >>> 1, ve = T[fe];
        if (0 < l(ve, V))
          T[fe] = V, T[ee] = ve, ee = fe;
        else break e;
      }
    }
    function o(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var V = T[0], ee = T.pop();
      if (ee !== V) {
        T[0] = ee;
        e: for (var fe = 0, ve = T.length, z = ve >>> 1; fe < z; ) {
          var Z = 2 * (fe + 1) - 1, W = T[Z], ne = Z + 1, he = T[ne];
          if (0 > l(W, ee))
            ne < ve && 0 > l(he, W) ? (T[fe] = he, T[ne] = ee, fe = ne) : (T[fe] = W, T[Z] = ee, fe = Z);
          else if (ne < ve && 0 > l(he, ee))
            T[fe] = he, T[ne] = ee, fe = ne;
          else break e;
        }
      }
      return V;
    }
    function l(T, V) {
      var ee = T.sortIndex - V.sortIndex;
      return ee !== 0 ? ee : T.id - V.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var m = Date, f = m.now();
      n.unstable_now = function() {
        return m.now() - f;
      };
    }
    var p = [], y = [], v = 1, b = null, w = 3, k = !1, x = !1, $ = !1, U = !1, B = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function J(T) {
      for (var V = o(y); V !== null; ) {
        if (V.callback === null) r(y);
        else if (V.startTime <= T)
          r(y), V.sortIndex = V.expirationTime, a(p, V);
        else break;
        V = o(y);
      }
    }
    function K(T) {
      if ($ = !1, J(T), !x)
        if (o(p) !== null)
          x = !0, X || (X = !0, ce());
        else {
          var V = o(y);
          V !== null && ae(K, V.startTime - T);
        }
    }
    var X = !1, P = -1, oe = 5, O = -1;
    function Q() {
      return U ? !0 : !(n.unstable_now() - O < oe);
    }
    function ie() {
      if (U = !1, X) {
        var T = n.unstable_now();
        O = T;
        var V = !0;
        try {
          e: {
            x = !1, $ && ($ = !1, I(P), P = -1), k = !0;
            var ee = w;
            try {
              t: {
                for (J(T), b = o(p); b !== null && !(b.expirationTime > T && Q()); ) {
                  var fe = b.callback;
                  if (typeof fe == "function") {
                    b.callback = null, w = b.priorityLevel;
                    var ve = fe(
                      b.expirationTime <= T
                    );
                    if (T = n.unstable_now(), typeof ve == "function") {
                      b.callback = ve, J(T), V = !0;
                      break t;
                    }
                    b === o(p) && r(p), J(T);
                  } else r(p);
                  b = o(p);
                }
                if (b !== null) V = !0;
                else {
                  var z = o(y);
                  z !== null && ae(
                    K,
                    z.startTime - T
                  ), V = !1;
                }
              }
              break e;
            } finally {
              b = null, w = ee, k = !1;
            }
            V = void 0;
          }
        } finally {
          V ? ce() : X = !1;
        }
      }
    }
    var ce;
    if (typeof L == "function")
      ce = function() {
        L(ie);
      };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), te = Oe.port2;
      Oe.port1.onmessage = ie, ce = function() {
        te.postMessage(null);
      };
    } else
      ce = function() {
        B(ie, 0);
      };
    function ae(T, V) {
      P = B(function() {
        T(n.unstable_now());
      }, V);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, n.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < T ? Math.floor(1e3 / T) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(T) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = w;
      }
      var ee = w;
      w = V;
      try {
        return T();
      } finally {
        w = ee;
      }
    }, n.unstable_requestPaint = function() {
      U = !0;
    }, n.unstable_runWithPriority = function(T, V) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var ee = w;
      w = T;
      try {
        return V();
      } finally {
        w = ee;
      }
    }, n.unstable_scheduleCallback = function(T, V, ee) {
      var fe = n.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? fe + ee : fe) : ee = fe, T) {
        case 1:
          var ve = -1;
          break;
        case 2:
          ve = 250;
          break;
        case 5:
          ve = 1073741823;
          break;
        case 4:
          ve = 1e4;
          break;
        default:
          ve = 5e3;
      }
      return ve = ee + ve, T = {
        id: v++,
        callback: V,
        priorityLevel: T,
        startTime: ee,
        expirationTime: ve,
        sortIndex: -1
      }, ee > fe ? (T.sortIndex = ee, a(y, T), o(p) === null && T === o(y) && ($ ? (I(P), P = -1) : $ = !0, ae(K, ee - fe))) : (T.sortIndex = ve, a(p, T), x || k || (x = !0, X || (X = !0, ce()))), T;
    }, n.unstable_shouldYield = Q, n.unstable_wrapCallback = function(T) {
      var V = w;
      return function() {
        var ee = w;
        w = V;
        try {
          return T.apply(this, arguments);
        } finally {
          w = ee;
        }
      };
    };
  })(jc)), jc;
}
var O_;
function zb() {
  return O_ || (O_ = 1, xc.exports = Sb()), xc.exports;
}
var Ac = { exports: {} }, ye = {};
var N_;
function xb() {
  if (N_) return ye;
  N_ = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), f = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function k(z) {
    return z === null || typeof z != "object" ? null : (z = w && z[w] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $ = Object.assign, U = {};
  function B(z, Z, W) {
    this.props = z, this.context = Z, this.refs = U, this.updater = W || x;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(z, Z) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, Z, "setState");
  }, B.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function I() {
  }
  I.prototype = B.prototype;
  function L(z, Z, W) {
    this.props = z, this.context = Z, this.refs = U, this.updater = W || x;
  }
  var J = L.prototype = new I();
  J.constructor = L, $(J, B.prototype), J.isPureReactComponent = !0;
  var K = Array.isArray;
  function X() {
  }
  var P = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function O(z, Z, W) {
    var ne = W.ref;
    return {
      $$typeof: n,
      type: z,
      key: Z,
      ref: ne !== void 0 ? ne : null,
      props: W
    };
  }
  function Q(z, Z) {
    return O(z.type, Z, z.props);
  }
  function ie(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }
  function ce(z) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(W) {
      return Z[W];
    });
  }
  var Oe = /\/+/g;
  function te(z, Z) {
    return typeof z == "object" && z !== null && z.key != null ? ce("" + z.key) : Z.toString(36);
  }
  function ae(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(X, X) : (z.status = "pending", z.then(
          function(Z) {
            z.status === "pending" && (z.status = "fulfilled", z.value = Z);
          },
          function(Z) {
            z.status === "pending" && (z.status = "rejected", z.reason = Z);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function T(z, Z, W, ne, he) {
    var pe = typeof z;
    (pe === "undefined" || pe === "boolean") && (z = null);
    var ke = !1;
    if (z === null) ke = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          ke = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case n:
            case a:
              ke = !0;
              break;
            case v:
              return ke = z._init, T(
                ke(z._payload),
                Z,
                W,
                ne,
                he
              );
          }
      }
    if (ke)
      return he = he(z), ke = ne === "" ? "." + te(z, 0) : ne, K(he) ? (W = "", ke != null && (W = ke.replace(Oe, "$&/") + "/"), T(he, Z, W, "", function($t) {
        return $t;
      })) : he != null && (ie(he) && (he = Q(
        he,
        W + (he.key == null || z && z.key === he.key ? "" : ("" + he.key).replace(
          Oe,
          "$&/"
        ) + "/") + ke
      )), Z.push(he)), 1;
    ke = 0;
    var Be = ne === "" ? "." : ne + ":";
    if (K(z))
      for (var Ye = 0; Ye < z.length; Ye++)
        ne = z[Ye], pe = Be + te(ne, Ye), ke += T(
          ne,
          Z,
          W,
          pe,
          he
        );
    else if (Ye = k(z), typeof Ye == "function")
      for (z = Ye.call(z), Ye = 0; !(ne = z.next()).done; )
        ne = ne.value, pe = Be + te(ne, Ye++), ke += T(
          ne,
          Z,
          W,
          pe,
          he
        );
    else if (pe === "object") {
      if (typeof z.then == "function")
        return T(
          ae(z),
          Z,
          W,
          ne,
          he
        );
      throw Z = String(z), Error(
        "Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ke;
  }
  function V(z, Z, W) {
    if (z == null) return z;
    var ne = [], he = 0;
    return T(z, ne, "", "", function(pe) {
      return Z.call(W, pe, he++);
    }), ne;
  }
  function ee(z) {
    if (z._status === -1) {
      var Z = z._result;
      Z = Z(), Z.then(
        function(W) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = W);
        },
        function(W) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = W);
        }
      ), z._status === -1 && (z._status = 0, z._result = Z);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var fe = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(Z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, ve = {
    map: V,
    forEach: function(z, Z, W) {
      V(
        z,
        function() {
          Z.apply(this, arguments);
        },
        W
      );
    },
    count: function(z) {
      var Z = 0;
      return V(z, function() {
        Z++;
      }), Z;
    },
    toArray: function(z) {
      return V(z, function(Z) {
        return Z;
      }) || [];
    },
    only: function(z) {
      if (!ie(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return ye.Activity = b, ye.Children = ve, ye.Component = B, ye.Fragment = o, ye.Profiler = l, ye.PureComponent = L, ye.StrictMode = r, ye.Suspense = p, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ye.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return P.H.useMemoCache(z);
    }
  }, ye.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, ye.cacheSignal = function() {
    return null;
  }, ye.cloneElement = function(z, Z, W) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var ne = $({}, z.props), he = z.key;
    if (Z != null)
      for (pe in Z.key !== void 0 && (he = "" + Z.key), Z)
        !oe.call(Z, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && Z.ref === void 0 || (ne[pe] = Z[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) ne.children = W;
    else if (1 < pe) {
      for (var ke = Array(pe), Be = 0; Be < pe; Be++)
        ke[Be] = arguments[Be + 2];
      ne.children = ke;
    }
    return O(z.type, he, ne);
  }, ye.createContext = function(z) {
    return z = {
      $$typeof: m,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: c,
      _context: z
    }, z;
  }, ye.createElement = function(z, Z, W) {
    var ne, he = {}, pe = null;
    if (Z != null)
      for (ne in Z.key !== void 0 && (pe = "" + Z.key), Z)
        oe.call(Z, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (he[ne] = Z[ne]);
    var ke = arguments.length - 2;
    if (ke === 1) he.children = W;
    else if (1 < ke) {
      for (var Be = Array(ke), Ye = 0; Ye < ke; Ye++)
        Be[Ye] = arguments[Ye + 2];
      he.children = Be;
    }
    if (z && z.defaultProps)
      for (ne in ke = z.defaultProps, ke)
        he[ne] === void 0 && (he[ne] = ke[ne]);
    return O(z, pe, he);
  }, ye.createRef = function() {
    return { current: null };
  }, ye.forwardRef = function(z) {
    return { $$typeof: f, render: z };
  }, ye.isValidElement = ie, ye.lazy = function(z) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: z },
      _init: ee
    };
  }, ye.memo = function(z, Z) {
    return {
      $$typeof: y,
      type: z,
      compare: Z === void 0 ? null : Z
    };
  }, ye.startTransition = function(z) {
    var Z = P.T, W = {};
    P.T = W;
    try {
      var ne = z(), he = P.S;
      he !== null && he(W, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(X, fe);
    } catch (pe) {
      fe(pe);
    } finally {
      Z !== null && W.types !== null && (Z.types = W.types), P.T = Z;
    }
  }, ye.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ye.use = function(z) {
    return P.H.use(z);
  }, ye.useActionState = function(z, Z, W) {
    return P.H.useActionState(z, Z, W);
  }, ye.useCallback = function(z, Z) {
    return P.H.useCallback(z, Z);
  }, ye.useContext = function(z) {
    return P.H.useContext(z);
  }, ye.useDebugValue = function() {
  }, ye.useDeferredValue = function(z, Z) {
    return P.H.useDeferredValue(z, Z);
  }, ye.useEffect = function(z, Z) {
    return P.H.useEffect(z, Z);
  }, ye.useEffectEvent = function(z) {
    return P.H.useEffectEvent(z);
  }, ye.useId = function() {
    return P.H.useId();
  }, ye.useImperativeHandle = function(z, Z, W) {
    return P.H.useImperativeHandle(z, Z, W);
  }, ye.useInsertionEffect = function(z, Z) {
    return P.H.useInsertionEffect(z, Z);
  }, ye.useLayoutEffect = function(z, Z) {
    return P.H.useLayoutEffect(z, Z);
  }, ye.useMemo = function(z, Z) {
    return P.H.useMemo(z, Z);
  }, ye.useOptimistic = function(z, Z) {
    return P.H.useOptimistic(z, Z);
  }, ye.useReducer = function(z, Z, W) {
    return P.H.useReducer(z, Z, W);
  }, ye.useRef = function(z) {
    return P.H.useRef(z);
  }, ye.useState = function(z) {
    return P.H.useState(z);
  }, ye.useSyncExternalStore = function(z, Z, W) {
    return P.H.useSyncExternalStore(
      z,
      Z,
      W
    );
  }, ye.useTransition = function() {
    return P.H.useTransition();
  }, ye.version = "19.2.8", ye;
}
var D_;
function td() {
  return D_ || (D_ = 1, Ac.exports = xb()), Ac.exports;
}
var Tc = { exports: {} }, kt = {};
var R_;
function jb() {
  if (R_) return kt;
  R_ = 1;
  var n = td();
  function a(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(a(522));
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
  }, l = /* @__PURE__ */ Symbol.for("react.portal");
  function c(p, y, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: y,
      implementation: v
    };
  }
  var m = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, kt.createPortal = function(p, y) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(a(299));
    return c(p, y, null, v);
  }, kt.flushSync = function(p) {
    var y = m.T, v = r.p;
    try {
      if (m.T = null, r.p = 2, p) return p();
    } finally {
      m.T = y, r.p = v, r.d.f();
    }
  }, kt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(p, y));
  }, kt.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, kt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var v = y.as, b = f(v, y.crossOrigin), w = typeof y.integrity == "string" ? y.integrity : void 0, k = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? r.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: b,
          integrity: w,
          fetchPriority: k
        }
      ) : v === "script" && r.d.X(p, {
        crossOrigin: b,
        integrity: w,
        fetchPriority: k,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, kt.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var v = f(
            y.as,
            y.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(p);
  }, kt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var v = y.as, b = f(v, y.crossOrigin);
      r.d.L(p, v, {
        crossOrigin: b,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, kt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var v = f(y.as, y.crossOrigin);
        r.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: v,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(p);
  }, kt.requestFormReset = function(p) {
    r.d.r(p);
  }, kt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, kt.useFormState = function(p, y, v) {
    return m.H.useFormState(p, y, v);
  }, kt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, kt.version = "19.2.8", kt;
}
var Z_;
function Ab() {
  if (Z_) return Tc.exports;
  Z_ = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Tc.exports = jb(), Tc.exports;
}
var U_;
function Tb() {
  if (U_) return Do;
  U_ = 1;
  var n = zb(), a = td(), o = Ab();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function f(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (c(e) !== e)
      throw Error(r(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (s = u.return, s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === i) return p(u), e;
          if (d === s) return p(u), t;
          d = d.sibling;
        }
        throw Error(r(188));
      }
      if (i.return !== s.return) i = u, s = d;
      else {
        for (var h = !1, g = u.child; g; ) {
          if (g === i) {
            h = !0, i = u, s = d;
            break;
          }
          if (g === s) {
            h = !0, s = u, i = d;
            break;
          }
          g = g.sibling;
        }
        if (!h) {
          for (g = d.child; g; ) {
            if (g === i) {
              h = !0, i = d, s = u;
              break;
            }
            if (g === s) {
              h = !0, s = d, i = u;
              break;
            }
            g = g.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (i.alternate !== s) throw Error(r(190));
    }
    if (i.tag !== 3) throw Error(r(188));
    return i.stateNode.current === i ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.transitional.element"), x = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Oe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case B:
        return "Profiler";
      case U:
        return "StrictMode";
      case K:
        return "Suspense";
      case X:
        return "SuspenseList";
      case O:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case J:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : te(e.type) || "Memo";
        case oe:
          t = e._payload, e = e._init;
          try {
            return te(e(t));
          } catch {
          }
      }
    return null;
  }
  var ae = Array.isArray, T = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fe = [], ve = -1;
  function z(e) {
    return { current: e };
  }
  function Z(e) {
    0 > ve || (e.current = fe[ve], fe[ve] = null, ve--);
  }
  function W(e, t) {
    ve++, fe[ve] = e.current, e.current = t;
  }
  var ne = z(null), he = z(null), pe = z(null), ke = z(null);
  function Be(e, t) {
    switch (W(pe, t), W(he, e), W(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Fp(t), e = Ip(t, e);
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
    Z(ne), W(ne, e);
  }
  function Ye() {
    Z(ne), Z(he), Z(pe);
  }
  function $t(e) {
    e.memoizedState !== null && W(ke, e);
    var t = ne.current, i = Ip(t, e.type);
    t !== i && (W(he, e), W(ne, i));
  }
  function en(e) {
    he.current === e && (Z(ne), Z(he)), ke.current === e && (Z(ke), Eo._currentValue = ee);
  }
  var Nn, sn;
  function bt(e) {
    if (Nn === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Nn = t && t[1] || "", sn = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Nn + e + sn;
  }
  var Hi = !1;
  function Ua(e, t) {
    if (!e || Hi) return "";
    Hi = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (D) {
                  var M = D;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (D) {
                  M = D;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                M = D;
              }
              (q = e()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (D) {
            if (D && M && typeof D.stack == "string")
              return [D.stack, M.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = s.DetermineComponentFrameRoot(), h = d[0], g = d[1];
      if (h && g) {
        var S = h.split(`
`), C = g.split(`
`);
        for (u = s = 0; s < S.length && !S[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (s === S.length || u === C.length)
          for (s = S.length - 1, u = C.length - 1; 1 <= s && 0 <= u && S[s] !== C[u]; )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (S[s] !== C[u]) {
            if (s !== 1 || u !== 1)
              do
                if (s--, u--, 0 > u || S[s] !== C[u]) {
                  var R = `
` + S[s].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      Hi = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? bt(i) : "";
  }
  function Ha(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return bt(e.type);
      case 16:
        return bt("Lazy");
      case 13:
        return e.child !== t && t !== null ? bt("Suspense Fallback") : bt("Suspense");
      case 19:
        return bt("SuspenseList");
      case 0:
      case 15:
        return Ua(e.type, !1);
      case 11:
        return Ua(e.type.render, !1);
      case 1:
        return Ua(e.type, !0);
      case 31:
        return bt("Activity");
      default:
        return "";
    }
  }
  function Ba(e) {
    try {
      var t = "", i = null;
      do
        t += Ha(e, i), i = e, e = e.return;
      while (e);
      return t;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var Ya = Object.prototype.hasOwnProperty, ua = n.unstable_scheduleCallback, Bi = n.unstable_cancelCallback, ol = n.unstable_shouldYield, or = n.unstable_requestPaint, wt = n.unstable_now, rr = n.unstable_getCurrentPriorityLevel, Yi = n.unstable_ImmediatePriority, sr = n.unstable_UserBlockingPriority, $a = n.unstable_NormalPriority, ca = n.unstable_LowPriority, lr = n.unstable_IdlePriority, rl = n.log, sl = n.unstable_setDisableYieldValue, da = null, St = null;
  function ln(e) {
    if (typeof rl == "function" && sl(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(da, e);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : cl, ll = Math.log, ul = Math.LN2;
  function cl(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ll(e) / ul | 0) | 0;
  }
  var qa = 256, G = 262144, ue = 4194304;
  function re(e) {
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
  function tt(e, t, i) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var u = 0, d = e.suspendedLanes, h = e.pingedLanes;
    e = e.warmLanes;
    var g = s & 134217727;
    return g !== 0 ? (s = g & ~d, s !== 0 ? u = re(s) : (h &= g, h !== 0 ? u = re(h) : i || (i = g & ~e, i !== 0 && (u = re(i))))) : (g = s & ~d, g !== 0 ? u = re(g) : h !== 0 ? u = re(h) : i || (i = s & ~e, i !== 0 && (u = re(i)))), u === 0 ? 0 : t !== 0 && t !== u && (t & d) === 0 && (d = u & -u, i = t & -t, d >= i || d === 32 && (i & 4194048) !== 0) ? t : u;
  }
  function $i(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function lv(e, t) {
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
  function Od() {
    var e = ue;
    return ue <<= 1, (ue & 62914560) === 0 && (ue = 4194304), e;
  }
  function dl(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function qi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function uv(e, t, i, s, u, d) {
    var h = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var g = e.entanglements, S = e.expirationTimes, C = e.hiddenUpdates;
    for (i = h & ~i; 0 < i; ) {
      var R = 31 - ct(i), q = 1 << R;
      g[R] = 0, S[R] = -1;
      var M = C[R];
      if (M !== null)
        for (C[R] = null, R = 0; R < M.length; R++) {
          var D = M[R];
          D !== null && (D.lane &= -536870913);
        }
      i &= ~q;
    }
    s !== 0 && Nd(e, s, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(h & ~t));
  }
  function Nd(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var s = 31 - ct(t);
    e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | i & 261930;
  }
  function Dd(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - ct(i), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), i &= ~u;
    }
  }
  function Rd(e, t) {
    var i = t & -t;
    return i = (i & 42) !== 0 ? 1 : ml(i), (i & (e.suspendedLanes | t)) !== 0 ? 0 : i;
  }
  function ml(e) {
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
  function fl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zd() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : w_(e.type));
  }
  function Ud(e, t) {
    var i = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = i;
    }
  }
  var Dn = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Dn, jt = "__reactProps$" + Dn, Xa = "__reactContainer$" + Dn, pl = "__reactEvents$" + Dn, cv = "__reactListeners$" + Dn, dv = "__reactHandles$" + Dn, Hd = "__reactResources$" + Dn, Xi = "__reactMarker$" + Dn;
  function _l(e) {
    delete e[ft], delete e[jt], delete e[pl], delete e[cv], delete e[dv];
  }
  function La(e) {
    var t = e[ft];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Xa] || i[ft]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = r_(e); e !== null; ) {
            if (i = e[ft]) return i;
            e = r_(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Va(e) {
    if (e = e[ft] || e[Xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Li(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Ga(e) {
    var t = e[Hd];
    return t || (t = e[Hd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function dt(e) {
    e[Xi] = !0;
  }
  var Bd = /* @__PURE__ */ new Set(), Yd = {};
  function ma(e, t) {
    Pa(e, t), Pa(e + "Capture", t);
  }
  function Pa(e, t) {
    for (Yd[e] = t, e = 0; e < t.length; e++)
      Bd.add(t[e]);
  }
  var mv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), $d = {}, qd = {};
  function fv(e) {
    return Ya.call(qd, e) ? !0 : Ya.call($d, e) ? !1 : mv.test(e) ? qd[e] = !0 : ($d[e] = !0, !1);
  }
  function ur(e, t, i) {
    if (fv(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var s = t.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function cr(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function fn(e, t, i, s) {
    if (s === null) e.removeAttribute(i);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + s);
    }
  }
  function qt(e) {
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
  function Xd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function pv(e, t, i) {
    var s = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var u = s.get, d = s.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(h) {
          i = "" + h, d.call(this, h);
        }
      }), Object.defineProperty(e, t, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return i;
        },
        setValue: function(h) {
          i = "" + h;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function hl(e) {
    if (!e._valueTracker) {
      var t = Xd(e) ? "checked" : "value";
      e._valueTracker = pv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ld(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), s = "";
    return e && (s = Xd(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1;
  }
  function dr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _v = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      _v,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function yl(e, t, i, s, u, d, h, g) {
    e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? vl(e, h, qt(t)) : i != null ? vl(e, h, qt(i)) : s != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + qt(g) : e.removeAttribute("name");
  }
  function Vd(e, t, i, s, u, d, h, g) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || i != null) {
      if (!(d !== "submit" && d !== "reset" || t != null)) {
        hl(e);
        return;
      }
      i = i != null ? "" + qt(i) : "", t = t != null ? "" + qt(t) : i, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = s ?? u, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = g ? e.checked : !!s, e.defaultChecked = !!s, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h), hl(e);
  }
  function vl(e, t, i) {
    t === "number" && dr(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ka(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++)
        t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + qt(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gd(e, t, i) {
    if (t != null && (t = "" + qt(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + qt(i) : "";
  }
  function Pd(e, t, i, s) {
    if (t == null) {
      if (s != null) {
        if (i != null) throw Error(r(92));
        if (ae(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ""), t = i;
    }
    i = qt(t), e.defaultValue = i, s = e.textContent, s === i && s !== "" && s !== null && (e.value = s), hl(e);
  }
  function Qa(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Kd(e, t, i) {
    var s = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, i) : typeof i != "number" || i === 0 || hv.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function Qd(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, i != null) {
      for (var s in i)
        !i.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
      for (var u in t)
        s = t[u], t.hasOwnProperty(u) && i[u] !== s && Kd(e, u, s);
    } else
      for (var d in t)
        t.hasOwnProperty(d) && Kd(e, d, t[d]);
  }
  function gl(e) {
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
  ]), vv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mr(e) {
    return vv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function pn() {
  }
  var bl = null;
  function kl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ja = null, Wa = null;
  function Jd(e) {
    var t = Va(e);
    if (t && (e = t.stateNode)) {
      var i = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (yl(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), t = i.name, i.type === "radio" && t != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + Xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < i.length; t++) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var u = s[jt] || null;
                if (!u) throw Error(r(90));
                yl(
                  s,
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
            for (t = 0; t < i.length; t++)
              s = i[t], s.form === e.form && Ld(s);
          }
          break e;
        case "textarea":
          Gd(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && Ka(e, !!i.multiple, t, !1);
      }
    }
  }
  var wl = !1;
  function Wd(e, t, i) {
    if (wl) return e(t, i);
    wl = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (wl = !1, (Ja !== null || Wa !== null) && (Ir(), Ja && (t = Ja, e = Wa, Wa = Ja = null, Jd(t), e)))
        for (t = 0; t < e.length; t++) Jd(e[t]);
    }
  }
  function Vi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = i[jt] || null;
    if (s === null) return null;
    i = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        r(231, t, typeof i)
      );
    return i;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Sl = !1;
  if (_n)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          Sl = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      Sl = !1;
    }
  var Rn = null, zl = null, fr = null;
  function Fd() {
    if (fr) return fr;
    var e, t = zl, i = t.length, s, u = "value" in Rn ? Rn.value : Rn.textContent, d = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var h = i - e;
    for (s = 1; s <= h && t[i - s] === u[d - s]; s++) ;
    return fr = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function pr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _r() {
    return !0;
  }
  function Id() {
    return !1;
  }
  function At(e) {
    function t(i, s, u, d, h) {
      this._reactName = i, this._targetInst = u, this.type = s, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (i = e[g], this[g] = i ? i(d) : d[g]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? _r : Id, this.isPropagationStopped = Id, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = _r);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = _r);
      },
      persist: function() {
      },
      isPersistent: _r
    }), t;
  }
  var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, hr = At(fa), Pi = b({}, fa, { view: 0, detail: 0 }), gv = At(Pi), xl, jl, Ki, yr = b({}, Pi, {
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
    getModifierState: Tl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ki && (Ki && e.type === "mousemove" ? (xl = e.screenX - Ki.screenX, jl = e.screenY - Ki.screenY) : jl = xl = 0, Ki = e), xl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : jl;
    }
  }), em = At(yr), bv = b({}, yr, { dataTransfer: 0 }), kv = At(bv), wv = b({}, Pi, { relatedTarget: 0 }), Al = At(wv), Sv = b({}, fa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zv = At(Sv), xv = b({}, fa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), jv = At(xv), Av = b({}, fa, { data: 0 }), tm = At(Av), Tv = {
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
  }, Ev = {
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
  }, Cv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Cv[e]) ? !!t[e] : !1;
  }
  function Tl() {
    return Mv;
  }
  var Ov = b({}, Pi, {
    key: function(e) {
      if (e.key) {
        var t = Tv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ev[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tl,
    charCode: function(e) {
      return e.type === "keypress" ? pr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Nv = At(Ov), Dv = b({}, yr, {
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
  }), nm = At(Dv), Rv = b({}, Pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tl
  }), Zv = At(Rv), Uv = b({}, fa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hv = At(Uv), Bv = b({}, yr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yv = At(Bv), $v = b({}, fa, {
    newState: 0,
    oldState: 0
  }), qv = At($v), Xv = [9, 13, 27, 32], El = _n && "CompositionEvent" in window, Qi = null;
  _n && "documentMode" in document && (Qi = document.documentMode);
  var Lv = _n && "TextEvent" in window && !Qi, am = _n && (!El || Qi && 8 < Qi && 11 >= Qi), im = " ", om = !1;
  function rm(e, t) {
    switch (e) {
      case "keyup":
        return Xv.indexOf(t.keyCode) !== -1;
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
  function sm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fa = !1;
  function Vv(e, t) {
    switch (e) {
      case "compositionend":
        return sm(t);
      case "keypress":
        return t.which !== 32 ? null : (om = !0, im);
      case "textInput":
        return e = t.data, e === im && om ? null : e;
      default:
        return null;
    }
  }
  function Gv(e, t) {
    if (Fa)
      return e === "compositionend" || !El && rm(e, t) ? (e = Fd(), fr = zl = Rn = null, Fa = !1, e) : null;
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
        return am && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Pv = {
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
  function lm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Pv[e.type] : t === "textarea";
  }
  function um(e, t, i, s) {
    Ja ? Wa ? Wa.push(s) : Wa = [s] : Ja = s, t = rs(t, "onChange"), 0 < t.length && (i = new hr(
      "onChange",
      "change",
      null,
      i,
      s
    ), e.push({ event: i, listeners: t }));
  }
  var Ji = null, Wi = null;
  function Kv(e) {
    Gp(e, 0);
  }
  function vr(e) {
    var t = Li(e);
    if (Ld(t)) return e;
  }
  function cm(e, t) {
    if (e === "change") return t;
  }
  var dm = !1;
  if (_n) {
    var Cl;
    if (_n) {
      var Ml = "oninput" in document;
      if (!Ml) {
        var mm = document.createElement("div");
        mm.setAttribute("oninput", "return;"), Ml = typeof mm.oninput == "function";
      }
      Cl = Ml;
    } else Cl = !1;
    dm = Cl && (!document.documentMode || 9 < document.documentMode);
  }
  function fm() {
    Ji && (Ji.detachEvent("onpropertychange", pm), Wi = Ji = null);
  }
  function pm(e) {
    if (e.propertyName === "value" && vr(Wi)) {
      var t = [];
      um(
        t,
        Wi,
        e,
        kl(e)
      ), Wd(Kv, t);
    }
  }
  function Qv(e, t, i) {
    e === "focusin" ? (fm(), Ji = t, Wi = i, Ji.attachEvent("onpropertychange", pm)) : e === "focusout" && fm();
  }
  function Jv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vr(Wi);
  }
  function Wv(e, t) {
    if (e === "click") return vr(t);
  }
  function Fv(e, t) {
    if (e === "input" || e === "change")
      return vr(t);
  }
  function Iv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : Iv;
  function Fi(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!Ya.call(t, u) || !Dt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function _m(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hm(e, t) {
    var i = _m(e);
    e = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (s = e + i.textContent.length, e <= t && s >= t)
          return { node: i, offset: t - e };
        e = s;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = _m(i);
    }
  }
  function ym(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ym(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = dr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = dr(e.document);
    }
    return t;
  }
  function Ol(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var eg = _n && "documentMode" in document && 11 >= document.documentMode, Ia = null, Nl = null, Ii = null, Dl = !1;
  function gm(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Dl || Ia == null || Ia !== dr(s) || (s = Ia, "selectionStart" in s && Ol(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Ii && Fi(Ii, s) || (Ii = s, s = rs(Nl, "onSelect"), 0 < s.length && (t = new hr(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: s }), t.target = Ia)));
  }
  function pa(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var ei = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, Rl = {}, bm = {};
  _n && (bm = document.createElement("div").style, "AnimationEvent" in window || (delete ei.animationend.animation, delete ei.animationiteration.animation, delete ei.animationstart.animation), "TransitionEvent" in window || delete ei.transitionend.transition);
  function _a(e) {
    if (Rl[e]) return Rl[e];
    if (!ei[e]) return e;
    var t = ei[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in bm)
        return Rl[e] = t[i];
    return e;
  }
  var km = _a("animationend"), wm = _a("animationiteration"), Sm = _a("animationstart"), tg = _a("transitionrun"), ng = _a("transitionstart"), ag = _a("transitioncancel"), zm = _a("transitionend"), xm = /* @__PURE__ */ new Map(), Zl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Zl.push("scrollEnd");
  function tn(e, t) {
    xm.set(e, t), ma(t, [e]);
  }
  var gr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Lt = [], ti = 0, Ul = 0;
  function br() {
    for (var e = ti, t = Ul = ti = 0; t < e; ) {
      var i = Lt[t];
      Lt[t++] = null;
      var s = Lt[t];
      Lt[t++] = null;
      var u = Lt[t];
      Lt[t++] = null;
      var d = Lt[t];
      if (Lt[t++] = null, s !== null && u !== null) {
        var h = s.pending;
        h === null ? u.next = u : (u.next = h.next, h.next = u), s.pending = u;
      }
      d !== 0 && jm(i, u, d);
    }
  }
  function kr(e, t, i, s) {
    Lt[ti++] = e, Lt[ti++] = t, Lt[ti++] = i, Lt[ti++] = s, Ul |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function Hl(e, t, i, s) {
    return kr(e, t, i, s), wr(e);
  }
  function ha(e, t) {
    return kr(e, null, null, t), wr(e);
  }
  function jm(e, t, i) {
    e.lanes |= i;
    var s = e.alternate;
    s !== null && (s.lanes |= i);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= i, s = d.alternate, s !== null && (s.childLanes |= i), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && t !== null && (u = 31 - ct(i), e = d.hiddenUpdates, s = e[u], s === null ? e[u] = [t] : s.push(t), t.lane = i | 536870912), d) : null;
  }
  function wr(e) {
    if (50 < wo)
      throw wo = 0, Pu = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function ig(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rt(e, t, i, s) {
    return new ig(e, t, i, s);
  }
  function Bl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hn(e, t) {
    var i = e.alternate;
    return i === null ? (i = Rt(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function Am(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Sr(e, t, i, s, u, d) {
    var h = 0;
    if (s = e, typeof e == "function") Bl(e) && (h = 1);
    else if (typeof e == "string")
      h = ub(
        e,
        i,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case O:
          return e = Rt(31, i, t, u), e.elementType = O, e.lanes = d, e;
        case $:
          return ya(i.children, u, d, t);
        case U:
          h = 8, u |= 24;
          break;
        case B:
          return e = Rt(12, i, t, u | 2), e.elementType = B, e.lanes = d, e;
        case K:
          return e = Rt(13, i, t, u), e.elementType = K, e.lanes = d, e;
        case X:
          return e = Rt(19, i, t, u), e.elementType = X, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                h = 10;
                break e;
              case I:
                h = 9;
                break e;
              case J:
                h = 11;
                break e;
              case P:
                h = 14;
                break e;
              case oe:
                h = 16, s = null;
                break e;
            }
          h = 29, i = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return t = Rt(h, i, t, u), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function ya(e, t, i, s) {
    return e = Rt(7, e, s, t), e.lanes = i, e;
  }
  function Yl(e, t, i) {
    return e = Rt(6, e, null, t), e.lanes = i, e;
  }
  function Tm(e) {
    var t = Rt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $l(e, t, i) {
    return t = Rt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = i, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Em = /* @__PURE__ */ new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = Em.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: Ba(t)
      }, Em.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ba(t)
    };
  }
  var ai = [], ii = 0, zr = null, eo = 0, Gt = [], Pt = 0, Zn = null, un = 1, cn = "";
  function yn(e, t) {
    ai[ii++] = eo, ai[ii++] = zr, zr = e, eo = t;
  }
  function Cm(e, t, i) {
    Gt[Pt++] = un, Gt[Pt++] = cn, Gt[Pt++] = Zn, Zn = e;
    var s = un;
    e = cn;
    var u = 32 - ct(s) - 1;
    s &= ~(1 << u), i += 1;
    var d = 32 - ct(t) + u;
    if (30 < d) {
      var h = u - u % 5;
      d = (s & (1 << h) - 1).toString(32), s >>= h, u -= h, un = 1 << 32 - ct(t) + u | i << u | s, cn = d + e;
    } else
      un = 1 << d | i << u | s, cn = e;
  }
  function ql(e) {
    e.return !== null && (yn(e, 1), Cm(e, 1, 0));
  }
  function Xl(e) {
    for (; e === zr; )
      zr = ai[--ii], ai[ii] = null, eo = ai[--ii], ai[ii] = null;
    for (; e === Zn; )
      Zn = Gt[--Pt], Gt[Pt] = null, cn = Gt[--Pt], Gt[Pt] = null, un = Gt[--Pt], Gt[Pt] = null;
  }
  function Mm(e, t) {
    Gt[Pt++] = un, Gt[Pt++] = cn, Gt[Pt++] = Zn, un = t.id, cn = t.overflow, Zn = e;
  }
  var pt = null, Ge = null, Ce = !1, Un = null, Kt = !1, Ll = Error(r(519));
  function Hn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw to(Vt(t, e)), Ll;
  }
  function Om(e) {
    var t = e.stateNode, i = e.type, s = e.memoizedProps;
    switch (t[ft] = e, t[jt] = s, i) {
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
        for (i = 0; i < zo.length; i++)
          Se(zo[i], t);
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
        Se("invalid", t), Vd(
          t,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        );
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        Se("invalid", t), Pd(t, s.value, s.defaultValue, s.children);
    }
    i = s.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || s.suppressHydrationWarning === !0 || Jp(t.textContent, i) ? (s.popover != null && (Se("beforetoggle", t), Se("toggle", t)), s.onScroll != null && Se("scroll", t), s.onScrollEnd != null && Se("scrollend", t), s.onClick != null && (t.onclick = pn), t = !0) : t = !1, t || Hn(e, !0);
  }
  function Nm(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          Kt = !1;
          return;
        case 27:
        case 3:
          Kt = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function oi(e) {
    if (e !== pt) return !1;
    if (!Ce) return Nm(e), Ce = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || lc(e.type, e.memoizedProps)), i = !i), i && Ge && Hn(e), Nm(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = o_(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = o_(e);
    } else
      t === 27 ? (t = Ge, Fn(e.type) ? (e = fc, fc = null, Ge = e) : Ge = t) : Ge = pt ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function va() {
    Ge = pt = null, Ce = !1;
  }
  function Vl() {
    var e = Un;
    return e !== null && (Mt === null ? Mt = e : Mt.push.apply(
      Mt,
      e
    ), Un = null), e;
  }
  function to(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  var Gl = z(null), ga = null, vn = null;
  function Bn(e, t, i) {
    W(Gl, t._currentValue), t._currentValue = i;
  }
  function gn(e) {
    e._currentValue = Gl.current, Z(Gl);
  }
  function Pl(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function Kl(e, t, i, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var h = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var g = d;
          d = u;
          for (var S = 0; S < t.length; S++)
            if (g.context === t[S]) {
              d.lanes |= i, g = d.alternate, g !== null && (g.lanes |= i), Pl(
                d.return,
                i,
                e
              ), s || (h = null);
              break e;
            }
          d = g.next;
        }
      } else if (u.tag === 18) {
        if (h = u.return, h === null) throw Error(r(341));
        h.lanes |= i, d = h.alternate, d !== null && (d.lanes |= i), Pl(h, i, e), h = null;
      } else h = u.child;
      if (h !== null) h.return = u;
      else
        for (h = u; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (u = h.sibling, u !== null) {
            u.return = h.return, h = u;
            break;
          }
          h = h.return;
        }
      u = h;
    }
  }
  function ri(e, t, i, s) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var h = u.alternate;
        if (h === null) throw Error(r(387));
        if (h = h.memoizedProps, h !== null) {
          var g = u.type;
          Dt(u.pendingProps.value, h.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (u === ke.current) {
        if (h = u.alternate, h === null) throw Error(r(387));
        h.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Eo) : e = [Eo]);
      }
      u = u.return;
    }
    e !== null && Kl(
      t,
      e,
      i,
      s
    ), t.flags |= 262144;
  }
  function xr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Dt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ba(e) {
    ga = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function _t(e) {
    return Dm(ga, e);
  }
  function jr(e, t) {
    return ga === null && ba(e), Dm(e, t);
  }
  function Dm(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, vn === null) {
      if (e === null) throw Error(r(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return i;
  }
  var og = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(i, s) {
        e.push(s);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, rg = n.unstable_scheduleCallback, sg = n.unstable_NormalPriority, ot = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ql() {
    return {
      controller: new og(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function no(e) {
    e.refCount--, e.refCount === 0 && rg(sg, function() {
      e.controller.abort();
    });
  }
  var ao = null, Jl = 0, si = 0, li = null;
  function lg(e, t) {
    if (ao === null) {
      var i = ao = [];
      Jl = 0, si = Iu(), li = {
        status: "pending",
        value: void 0,
        then: function(s) {
          i.push(s);
        }
      };
    }
    return Jl++, t.then(Rm, Rm), t;
  }
  function Rm() {
    if (--Jl === 0 && ao !== null) {
      li !== null && (li.status = "fulfilled");
      var e = ao;
      ao = null, si = 0, li = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ug(e, t) {
    var i = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        i.push(u);
      }
    };
    return e.then(
      function() {
        s.status = "fulfilled", s.value = t;
        for (var u = 0; u < i.length; u++) (0, i[u])(t);
      },
      function(u) {
        for (s.status = "rejected", s.reason = u, u = 0; u < i.length; u++)
          (0, i[u])(void 0);
      }
    ), s;
  }
  var Zm = T.S;
  T.S = function(e, t) {
    bp = wt(), typeof t == "object" && t !== null && typeof t.then == "function" && lg(e, t), Zm !== null && Zm(e, t);
  };
  var ka = z(null);
  function Wl() {
    var e = ka.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function Ar(e, t) {
    t === null ? W(ka, ka.current) : W(ka, t.pool);
  }
  function Um() {
    var e = Wl();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var ui = Error(r(460)), Fl = Error(r(474)), Tr = Error(r(542)), Er = { then: function() {
  } };
  function Hm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Bm(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(pn, pn), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, $m(e), e;
      default:
        if (typeof t.status == "string") t.then(pn, pn);
        else {
          if (e = Ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = s;
              }
            },
            function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = s;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, $m(e), e;
        }
        throw Sa = t, ui;
    }
  }
  function wa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Sa = i, ui) : i;
    }
  }
  var Sa = null;
  function Ym() {
    if (Sa === null) throw Error(r(459));
    var e = Sa;
    return Sa = null, e;
  }
  function $m(e) {
    if (e === ui || e === Tr)
      throw Error(r(483));
  }
  var ci = null, io = 0;
  function Cr(e) {
    var t = io;
    return io += 1, ci === null && (ci = []), Bm(ci, e, t);
  }
  function oo(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Mr(e, t) {
    throw t.$$typeof === w ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function qm(e) {
    function t(A, j) {
      if (e) {
        var E = A.deletions;
        E === null ? (A.deletions = [j], A.flags |= 16) : E.push(j);
      }
    }
    function i(A, j) {
      if (!e) return null;
      for (; j !== null; )
        t(A, j), j = j.sibling;
      return null;
    }
    function s(A) {
      for (var j = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? j.set(A.key, A) : j.set(A.index, A), A = A.sibling;
      return j;
    }
    function u(A, j) {
      return A = hn(A, j), A.index = 0, A.sibling = null, A;
    }
    function d(A, j, E) {
      return A.index = E, e ? (E = A.alternate, E !== null ? (E = E.index, E < j ? (A.flags |= 67108866, j) : E) : (A.flags |= 67108866, j)) : (A.flags |= 1048576, j);
    }
    function h(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function g(A, j, E, H) {
      return j === null || j.tag !== 6 ? (j = Yl(E, A.mode, H), j.return = A, j) : (j = u(j, E), j.return = A, j);
    }
    function S(A, j, E, H) {
      var de = E.type;
      return de === $ ? R(
        A,
        j,
        E.props.children,
        H,
        E.key
      ) : j !== null && (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && wa(de) === j.type) ? (j = u(j, E.props), oo(j, E), j.return = A, j) : (j = Sr(
        E.type,
        E.key,
        E.props,
        null,
        A.mode,
        H
      ), oo(j, E), j.return = A, j);
    }
    function C(A, j, E, H) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== E.containerInfo || j.stateNode.implementation !== E.implementation ? (j = $l(E, A.mode, H), j.return = A, j) : (j = u(j, E.children || []), j.return = A, j);
    }
    function R(A, j, E, H, de) {
      return j === null || j.tag !== 7 ? (j = ya(
        E,
        A.mode,
        H,
        de
      ), j.return = A, j) : (j = u(j, E), j.return = A, j);
    }
    function q(A, j, E) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Yl(
          "" + j,
          A.mode,
          E
        ), j.return = A, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case k:
            return E = Sr(
              j.type,
              j.key,
              j.props,
              null,
              A.mode,
              E
            ), oo(E, j), E.return = A, E;
          case x:
            return j = $l(
              j,
              A.mode,
              E
            ), j.return = A, j;
          case oe:
            return j = wa(j), q(A, j, E);
        }
        if (ae(j) || ce(j))
          return j = ya(
            j,
            A.mode,
            E,
            null
          ), j.return = A, j;
        if (typeof j.then == "function")
          return q(A, Cr(j), E);
        if (j.$$typeof === L)
          return q(
            A,
            jr(A, j),
            E
          );
        Mr(A, j);
      }
      return null;
    }
    function M(A, j, E, H) {
      var de = j !== null ? j.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return de !== null ? null : g(A, j, "" + E, H);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            return E.key === de ? S(A, j, E, H) : null;
          case x:
            return E.key === de ? C(A, j, E, H) : null;
          case oe:
            return E = wa(E), M(A, j, E, H);
        }
        if (ae(E) || ce(E))
          return de !== null ? null : R(A, j, E, H, null);
        if (typeof E.then == "function")
          return M(
            A,
            j,
            Cr(E),
            H
          );
        if (E.$$typeof === L)
          return M(
            A,
            j,
            jr(A, E),
            H
          );
        Mr(A, E);
      }
      return null;
    }
    function D(A, j, E, H, de) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return A = A.get(E) || null, g(j, A, "" + H, de);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case k:
            return A = A.get(
              H.key === null ? E : H.key
            ) || null, S(j, A, H, de);
          case x:
            return A = A.get(
              H.key === null ? E : H.key
            ) || null, C(j, A, H, de);
          case oe:
            return H = wa(H), D(
              A,
              j,
              E,
              H,
              de
            );
        }
        if (ae(H) || ce(H))
          return A = A.get(E) || null, R(j, A, H, de, null);
        if (typeof H.then == "function")
          return D(
            A,
            j,
            E,
            Cr(H),
            de
          );
        if (H.$$typeof === L)
          return D(
            A,
            j,
            E,
            jr(j, H),
            de
          );
        Mr(j, H);
      }
      return null;
    }
    function se(A, j, E, H) {
      for (var de = null, Ne = null, le = j, be = j = 0, Ae = null; le !== null && be < E.length; be++) {
        le.index > be ? (Ae = le, le = null) : Ae = le.sibling;
        var De = M(
          A,
          le,
          E[be],
          H
        );
        if (De === null) {
          le === null && (le = Ae);
          break;
        }
        e && le && De.alternate === null && t(A, le), j = d(De, j, be), Ne === null ? de = De : Ne.sibling = De, Ne = De, le = Ae;
      }
      if (be === E.length)
        return i(A, le), Ce && yn(A, be), de;
      if (le === null) {
        for (; be < E.length; be++)
          le = q(A, E[be], H), le !== null && (j = d(
            le,
            j,
            be
          ), Ne === null ? de = le : Ne.sibling = le, Ne = le);
        return Ce && yn(A, be), de;
      }
      for (le = s(le); be < E.length; be++)
        Ae = D(
          le,
          A,
          be,
          E[be],
          H
        ), Ae !== null && (e && Ae.alternate !== null && le.delete(
          Ae.key === null ? be : Ae.key
        ), j = d(
          Ae,
          j,
          be
        ), Ne === null ? de = Ae : Ne.sibling = Ae, Ne = Ae);
      return e && le.forEach(function(aa) {
        return t(A, aa);
      }), Ce && yn(A, be), de;
    }
    function _e(A, j, E, H) {
      if (E == null) throw Error(r(151));
      for (var de = null, Ne = null, le = j, be = j = 0, Ae = null, De = E.next(); le !== null && !De.done; be++, De = E.next()) {
        le.index > be ? (Ae = le, le = null) : Ae = le.sibling;
        var aa = M(A, le, De.value, H);
        if (aa === null) {
          le === null && (le = Ae);
          break;
        }
        e && le && aa.alternate === null && t(A, le), j = d(aa, j, be), Ne === null ? de = aa : Ne.sibling = aa, Ne = aa, le = Ae;
      }
      if (De.done)
        return i(A, le), Ce && yn(A, be), de;
      if (le === null) {
        for (; !De.done; be++, De = E.next())
          De = q(A, De.value, H), De !== null && (j = d(De, j, be), Ne === null ? de = De : Ne.sibling = De, Ne = De);
        return Ce && yn(A, be), de;
      }
      for (le = s(le); !De.done; be++, De = E.next())
        De = D(le, A, be, De.value, H), De !== null && (e && De.alternate !== null && le.delete(De.key === null ? be : De.key), j = d(De, j, be), Ne === null ? de = De : Ne.sibling = De, Ne = De);
      return e && le.forEach(function(bb) {
        return t(A, bb);
      }), Ce && yn(A, be), de;
    }
    function Xe(A, j, E, H) {
      if (typeof E == "object" && E !== null && E.type === $ && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            e: {
              for (var de = E.key; j !== null; ) {
                if (j.key === de) {
                  if (de = E.type, de === $) {
                    if (j.tag === 7) {
                      i(
                        A,
                        j.sibling
                      ), H = u(
                        j,
                        E.props.children
                      ), H.return = A, A = H;
                      break e;
                    }
                  } else if (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && wa(de) === j.type) {
                    i(
                      A,
                      j.sibling
                    ), H = u(j, E.props), oo(H, E), H.return = A, A = H;
                    break e;
                  }
                  i(A, j);
                  break;
                } else t(A, j);
                j = j.sibling;
              }
              E.type === $ ? (H = ya(
                E.props.children,
                A.mode,
                H,
                E.key
              ), H.return = A, A = H) : (H = Sr(
                E.type,
                E.key,
                E.props,
                null,
                A.mode,
                H
              ), oo(H, E), H.return = A, A = H);
            }
            return h(A);
          case x:
            e: {
              for (de = E.key; j !== null; ) {
                if (j.key === de)
                  if (j.tag === 4 && j.stateNode.containerInfo === E.containerInfo && j.stateNode.implementation === E.implementation) {
                    i(
                      A,
                      j.sibling
                    ), H = u(j, E.children || []), H.return = A, A = H;
                    break e;
                  } else {
                    i(A, j);
                    break;
                  }
                else t(A, j);
                j = j.sibling;
              }
              H = $l(E, A.mode, H), H.return = A, A = H;
            }
            return h(A);
          case oe:
            return E = wa(E), Xe(
              A,
              j,
              E,
              H
            );
        }
        if (ae(E))
          return se(
            A,
            j,
            E,
            H
          );
        if (ce(E)) {
          if (de = ce(E), typeof de != "function") throw Error(r(150));
          return E = de.call(E), _e(
            A,
            j,
            E,
            H
          );
        }
        if (typeof E.then == "function")
          return Xe(
            A,
            j,
            Cr(E),
            H
          );
        if (E.$$typeof === L)
          return Xe(
            A,
            j,
            jr(A, E),
            H
          );
        Mr(A, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, j !== null && j.tag === 6 ? (i(A, j.sibling), H = u(j, E), H.return = A, A = H) : (i(A, j), H = Yl(E, A.mode, H), H.return = A, A = H), h(A)) : i(A, j);
    }
    return function(A, j, E, H) {
      try {
        io = 0;
        var de = Xe(
          A,
          j,
          E,
          H
        );
        return ci = null, de;
      } catch (le) {
        if (le === ui || le === Tr) throw le;
        var Ne = Rt(29, le, null, A.mode);
        return Ne.lanes = H, Ne.return = A, Ne;
      }
    };
  }
  var za = qm(!0), Xm = qm(!1), Yn = !1;
  function Il(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function eu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function $n(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ze & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, t = wr(e), jm(e, null, i), t;
    }
    return kr(e, s, t, i), wr(e);
  }
  function ro(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, Dd(e, i);
    }
  }
  function tu(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var u = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var h = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = h : d = d.next = h, i = i.next;
        } while (i !== null);
        d === null ? u = d = t : d = d.next = t;
      } else u = d = t;
      i = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: s.shared,
        callbacks: s.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var nu = !1;
  function so() {
    if (nu) {
      var e = li;
      if (e !== null) throw e;
    }
  }
  function lo(e, t, i, s) {
    nu = !1;
    var u = e.updateQueue;
    Yn = !1;
    var d = u.firstBaseUpdate, h = u.lastBaseUpdate, g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var S = g, C = S.next;
      S.next = null, h === null ? d = C : h.next = C, h = S;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, g = R.lastBaseUpdate, g !== h && (g === null ? R.firstBaseUpdate = C : g.next = C, R.lastBaseUpdate = S));
    }
    if (d !== null) {
      var q = u.baseState;
      h = 0, R = C = S = null, g = d;
      do {
        var M = g.lane & -536870913, D = M !== g.lane;
        if (D ? (je & M) === M : (s & M) === M) {
          M !== 0 && M === si && (nu = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, _e = g;
            M = t;
            var Xe = i;
            switch (_e.tag) {
              case 1:
                if (se = _e.payload, typeof se == "function") {
                  q = se.call(Xe, q, M);
                  break e;
                }
                q = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = _e.payload, M = typeof se == "function" ? se.call(Xe, q, M) : se, M == null) break e;
                q = b({}, q, M);
                break e;
              case 2:
                Yn = !0;
            }
          }
          M = g.callback, M !== null && (e.flags |= 64, D && (e.flags |= 8192), D = u.callbacks, D === null ? u.callbacks = [M] : D.push(M));
        } else
          D = {
            lane: M,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, R === null ? (C = R = D, S = q) : R = R.next = D, h |= M;
        if (g = g.next, g === null) {
          if (g = u.shared.pending, g === null)
            break;
          D = g, g = D.next, D.next = null, u.lastBaseUpdate = D, u.shared.pending = null;
        }
      } while (!0);
      R === null && (S = q), u.baseState = S, u.firstBaseUpdate = C, u.lastBaseUpdate = R, d === null && (u.shared.lanes = 0), Pn |= h, e.lanes = h, e.memoizedState = q;
    }
  }
  function Lm(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Vm(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Lm(i[e], t);
  }
  var di = z(null), Or = z(0);
  function Gm(e, t) {
    e = Tn, W(Or, e), W(di, t), Tn = e | t.baseLanes;
  }
  function au() {
    W(Or, Tn), W(di, di.current);
  }
  function iu() {
    Tn = Or.current, Z(di), Z(Or);
  }
  var Zt = z(null), Qt = null;
  function Xn(e) {
    var t = e.alternate;
    W(nt, nt.current & 1), W(Zt, e), Qt === null && (t === null || di.current !== null || t.memoizedState !== null) && (Qt = e);
  }
  function ou(e) {
    W(nt, nt.current), W(Zt, e), Qt === null && (Qt = e);
  }
  function Pm(e) {
    e.tag === 22 ? (W(nt, nt.current), W(Zt, e), Qt === null && (Qt = e)) : Ln();
  }
  function Ln() {
    W(nt, nt.current), W(Zt, Zt.current);
  }
  function Ut(e) {
    Z(Zt), Qt === e && (Qt = null), Z(nt);
  }
  var nt = z(0);
  function Nr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || dc(i) || mc(i)))
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
  var bn = 0, ge = null, $e = null, rt = null, Dr = !1, mi = !1, xa = !1, Rr = 0, uo = 0, fi = null, cg = 0;
  function We() {
    throw Error(r(321));
  }
  function ru(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Dt(e[i], t[i])) return !1;
    return !0;
  }
  function su(e, t, i, s, u, d) {
    return bn = d, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = e === null || e.memoizedState === null ? Mf : wu, xa = !1, d = i(s, u), xa = !1, mi && (d = Qm(
      t,
      i,
      s,
      u
    )), Km(e), d;
  }
  function Km(e) {
    T.H = fo;
    var t = $e !== null && $e.next !== null;
    if (bn = 0, rt = $e = ge = null, Dr = !1, uo = 0, fi = null, t) throw Error(r(300));
    e === null || st || (e = e.dependencies, e !== null && xr(e) && (st = !0));
  }
  function Qm(e, t, i, s) {
    ge = e;
    var u = 0;
    do {
      if (mi && (fi = null), uo = 0, mi = !1, 25 <= u) throw Error(r(301));
      if (u += 1, rt = $e = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      T.H = Of, d = t(i, s);
    } while (mi);
    return d;
  }
  function dg() {
    var e = T.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? co(t) : t, e = e.useState()[0], ($e !== null ? $e.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function lu() {
    var e = Rr !== 0;
    return Rr = 0, e;
  }
  function uu(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function cu(e) {
    if (Dr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Dr = !1;
    }
    bn = 0, rt = $e = ge = null, mi = !1, uo = Rr = 0, fi = null;
  }
  function zt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return rt === null ? ge.memoizedState = rt = e : rt = rt.next = e, rt;
  }
  function at() {
    if ($e === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = rt === null ? ge.memoizedState : rt.next;
    if (t !== null)
      rt = t, $e = e;
    else {
      if (e === null)
        throw ge.alternate === null ? Error(r(467)) : Error(r(310));
      $e = e, e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null
      }, rt === null ? ge.memoizedState = rt = e : rt = rt.next = e;
    }
    return rt;
  }
  function Zr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function co(e) {
    var t = uo;
    return uo += 1, fi === null && (fi = []), e = Bm(fi, e, t), t = ge, (rt === null ? t.memoizedState : rt.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? Mf : wu), e;
  }
  function Ur(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return co(e);
      if (e.$$typeof === L) return _t(e);
    }
    throw Error(r(438, String(e)));
  }
  function du(e) {
    var t = null, i = ge.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var s = ge.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
        data: s.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = Zr(), ge.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), s = 0; s < e; s++)
        i[s] = Q;
    return t.index++, i;
  }
  function kn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hr(e) {
    var t = at();
    return mu(t, $e, e);
  }
  function mu(e, t, i) {
    var s = e.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = i;
    var u = e.baseQueue, d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var h = u.next;
        u.next = d.next, d.next = h;
      }
      t.baseQueue = u = d, s.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      t = u.next;
      var g = h = null, S = null, C = t, R = !1;
      do {
        var q = C.lane & -536870913;
        if (q !== C.lane ? (je & q) === q : (bn & q) === q) {
          var M = C.revertLane;
          if (M === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), q === si && (R = !0);
          else if ((bn & M) === M) {
            C = C.next, M === si && (R = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (g = S = q, h = d) : S = S.next = q, ge.lanes |= M, Pn |= M;
          q = C.action, xa && i(d, q), d = C.hasEagerState ? C.eagerState : i(d, q);
        } else
          M = {
            lane: q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (g = S = M, h = d) : S = S.next = M, ge.lanes |= q, Pn |= q;
        C = C.next;
      } while (C !== null && C !== t);
      if (S === null ? h = d : S.next = g, !Dt(d, e.memoizedState) && (st = !0, R && (i = li, i !== null)))
        throw i;
      e.memoizedState = d, e.baseState = h, e.baseQueue = S, s.lastRenderedState = d;
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function fu(e) {
    var t = at(), i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, u = i.pending, d = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var h = u = u.next;
      do
        d = e(d, h.action), h = h.next;
      while (h !== u);
      Dt(d, t.memoizedState) || (st = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), i.lastRenderedState = d;
    }
    return [d, s];
  }
  function Jm(e, t, i) {
    var s = ge, u = at(), d = Ce;
    if (d) {
      if (i === void 0) throw Error(r(407));
      i = i();
    } else i = t();
    var h = !Dt(
      ($e || u).memoizedState,
      i
    );
    if (h && (u.memoizedState = i, st = !0), u = u.queue, hu(Im.bind(null, s, u, e), [
      e
    ]), u.getSnapshot !== t || h || rt !== null && rt.memoizedState.tag & 1) {
      if (s.flags |= 2048, pi(
        9,
        { destroy: void 0 },
        Fm.bind(
          null,
          s,
          u,
          i,
          t
        ),
        null
      ), Ve === null) throw Error(r(349));
      d || (bn & 127) !== 0 || Wm(s, t, i);
    }
    return i;
  }
  function Wm(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = ge.updateQueue, t === null ? (t = Zr(), ge.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function Fm(e, t, i, s) {
    t.value = i, t.getSnapshot = s, ef(t) && tf(e);
  }
  function Im(e, t, i) {
    return i(function() {
      ef(t) && tf(e);
    });
  }
  function ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Dt(e, i);
    } catch {
      return !0;
    }
  }
  function tf(e) {
    var t = ha(e, 2);
    t !== null && Ot(t, e, 2);
  }
  function pu(e) {
    var t = zt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), xa) {
        ln(!0);
        try {
          i();
        } finally {
          ln(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kn,
      lastRenderedState: e
    }, t;
  }
  function nf(e, t, i, s) {
    return e.baseState = i, mu(
      e,
      $e,
      typeof s == "function" ? s : kn
    );
  }
  function mg(e, t, i, s, u) {
    if ($r(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          d.listeners.push(h);
        }
      };
      T.T !== null ? i(!0) : d.isTransition = !1, s(d), i = t.pending, i === null ? (d.next = t.pending = d, af(t, d)) : (d.next = i.next, t.pending = i.next = d);
    }
  }
  function af(e, t) {
    var i = t.action, s = t.payload, u = e.state;
    if (t.isTransition) {
      var d = T.T, h = {};
      T.T = h;
      try {
        var g = i(u, s), S = T.S;
        S !== null && S(h, g), of(e, t, g);
      } catch (C) {
        _u(e, t, C);
      } finally {
        d !== null && h.types !== null && (d.types = h.types), T.T = d;
      }
    } else
      try {
        d = i(u, s), of(e, t, d);
      } catch (C) {
        _u(e, t, C);
      }
  }
  function of(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(s) {
        rf(e, t, s);
      },
      function(s) {
        return _u(e, t, s);
      }
    ) : rf(e, t, i);
  }
  function rf(e, t, i) {
    t.status = "fulfilled", t.value = i, sf(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, af(e, i)));
  }
  function _u(e, t, i) {
    var s = e.pending;
    if (e.pending = null, s !== null) {
      s = s.next;
      do
        t.status = "rejected", t.reason = i, sf(t), t = t.next;
      while (t !== s);
    }
    e.action = null;
  }
  function sf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function lf(e, t) {
    return t;
  }
  function uf(e, t) {
    if (Ce) {
      var i = Ve.formState;
      if (i !== null) {
        e: {
          var s = ge;
          if (Ce) {
            if (Ge) {
              t: {
                for (var u = Ge, d = Kt; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = Jt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                Ge = Jt(
                  u.nextSibling
                ), s = u.data === "F!";
                break e;
              }
            }
            Hn(s);
          }
          s = !1;
        }
        s && (t = i[0]);
      }
    }
    return i = zt(), i.memoizedState = i.baseState = t, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lf,
      lastRenderedState: t
    }, i.queue = s, i = Tf.bind(
      null,
      ge,
      s
    ), s.dispatch = i, s = pu(!1), d = ku.bind(
      null,
      ge,
      !1,
      s.queue
    ), s = zt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = u, i = mg.bind(
      null,
      ge,
      u,
      d,
      i
    ), u.dispatch = i, s.memoizedState = e, [t, i, !1];
  }
  function cf(e) {
    var t = at();
    return df(t, $e, e);
  }
  function df(e, t, i) {
    if (t = mu(
      e,
      t,
      lf
    )[0], e = Hr(kn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var s = co(t);
      } catch (h) {
        throw h === ui ? Tr : h;
      }
    else s = t;
    t = at();
    var u = t.queue, d = u.dispatch;
    return i !== t.memoizedState && (ge.flags |= 2048, pi(
      9,
      { destroy: void 0 },
      fg.bind(null, u, i),
      null
    )), [s, d, e];
  }
  function fg(e, t) {
    e.action = t;
  }
  function mf(e) {
    var t = at(), i = $e;
    if (i !== null)
      return df(t, i, e);
    at(), t = t.memoizedState, i = at();
    var s = i.queue.dispatch;
    return i.memoizedState = e, [t, s, !1];
  }
  function pi(e, t, i, s) {
    return e = { tag: e, create: i, deps: s, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Zr(), ge.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e), e;
  }
  function ff() {
    return at().memoizedState;
  }
  function Br(e, t, i, s) {
    var u = zt();
    ge.flags |= e, u.memoizedState = pi(
      1 | t,
      { destroy: void 0 },
      i,
      s === void 0 ? null : s
    );
  }
  function Yr(e, t, i, s) {
    var u = at();
    s = s === void 0 ? null : s;
    var d = u.memoizedState.inst;
    $e !== null && s !== null && ru(s, $e.memoizedState.deps) ? u.memoizedState = pi(t, d, i, s) : (ge.flags |= e, u.memoizedState = pi(
      1 | t,
      d,
      i,
      s
    ));
  }
  function pf(e, t) {
    Br(8390656, 8, e, t);
  }
  function hu(e, t) {
    Yr(2048, 8, e, t);
  }
  function pg(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = Zr(), ge.updateQueue = t, t.events = [e];
    else {
      var i = t.events;
      i === null ? t.events = [e] : i.push(e);
    }
  }
  function _f(e) {
    var t = at().memoizedState;
    return pg({ ref: t, nextImpl: e }), function() {
      if ((Ze & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function hf(e, t) {
    return Yr(4, 2, e, t);
  }
  function yf(e, t) {
    return Yr(4, 4, e, t);
  }
  function vf(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function() {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function gf(e, t, i) {
    i = i != null ? i.concat([e]) : null, Yr(4, 4, vf.bind(null, t, e), i);
  }
  function yu() {
  }
  function bf(e, t) {
    var i = at();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return t !== null && ru(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function kf(e, t) {
    var i = at();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    if (t !== null && ru(t, s[1]))
      return s[0];
    if (s = e(), xa) {
      ln(!0);
      try {
        e();
      } finally {
        ln(!1);
      }
    }
    return i.memoizedState = [s, t], s;
  }
  function vu(e, t, i) {
    return i === void 0 || (bn & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i, e = wp(), ge.lanes |= e, Pn |= e, i);
  }
  function wf(e, t, i, s) {
    return Dt(i, t) ? i : di.current !== null ? (e = vu(e, i, s), Dt(e, t) || (st = !0), e) : (bn & 42) === 0 || (bn & 1073741824) !== 0 && (je & 261930) === 0 ? (st = !0, e.memoizedState = i) : (e = wp(), ge.lanes |= e, Pn |= e, t);
  }
  function Sf(e, t, i, s, u) {
    var d = V.p;
    V.p = d !== 0 && 8 > d ? d : 8;
    var h = T.T, g = {};
    T.T = g, ku(e, !1, t, i);
    try {
      var S = u(), C = T.S;
      if (C !== null && C(g, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var R = ug(
          S,
          s
        );
        mo(
          e,
          t,
          R,
          Yt(e)
        );
      } else
        mo(
          e,
          t,
          s,
          Yt(e)
        );
    } catch (q) {
      mo(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        Yt()
      );
    } finally {
      V.p = d, h !== null && g.types !== null && (h.types = g.types), T.T = h;
    }
  }
  function _g() {
  }
  function gu(e, t, i, s) {
    if (e.tag !== 5) throw Error(r(476));
    var u = zf(e).queue;
    Sf(
      e,
      u,
      t,
      ee,
      i === null ? _g : function() {
        return xf(e), i(s);
      }
    );
  }
  function zf(e) {
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
        lastRenderedReducer: kn,
        lastRenderedState: ee
      },
      next: null
    };
    var i = {};
    return t.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kn,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function xf(e) {
    var t = zf(e);
    t.next === null && (t = e.alternate.memoizedState), mo(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function bu() {
    return _t(Eo);
  }
  function jf() {
    return at().memoizedState;
  }
  function Af() {
    return at().memoizedState;
  }
  function hg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = Yt();
          e = $n(i);
          var s = qn(t, e, i);
          s !== null && (Ot(s, t, i), ro(s, t, i)), t = { cache: Ql() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function yg(e, t, i) {
    var s = Yt();
    i = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $r(e) ? Ef(t, i) : (i = Hl(e, t, i, s), i !== null && (Ot(i, e, s), Cf(i, t, s)));
  }
  function Tf(e, t, i) {
    var s = Yt();
    mo(e, t, i, s);
  }
  function mo(e, t, i, s) {
    var u = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($r(e)) Ef(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var h = t.lastRenderedState, g = d(h, i);
          if (u.hasEagerState = !0, u.eagerState = g, Dt(g, h))
            return kr(e, t, u, 0), Ve === null && br(), !1;
        } catch {
        }
      if (i = Hl(e, t, u, s), i !== null)
        return Ot(i, e, s), Cf(i, t, s), !0;
    }
    return !1;
  }
  function ku(e, t, i, s) {
    if (s = {
      lane: 2,
      revertLane: Iu(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $r(e)) {
      if (t) throw Error(r(479));
    } else
      t = Hl(
        e,
        i,
        s,
        2
      ), t !== null && Ot(t, e, 2);
  }
  function $r(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function Ef(e, t) {
    mi = Dr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function Cf(e, t, i) {
    if ((i & 4194048) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, Dd(e, i);
    }
  }
  var fo = {
    readContext: _t,
    use: Ur,
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
  fo.useEffectEvent = We;
  var Mf = {
    readContext: _t,
    use: Ur,
    useCallback: function(e, t) {
      return zt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: _t,
    useEffect: pf,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, Br(
        4194308,
        4,
        vf.bind(null, t, e),
        i
      );
    },
    useLayoutEffect: function(e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Br(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var i = zt();
      t = t === void 0 ? null : t;
      var s = e();
      if (xa) {
        ln(!0);
        try {
          e();
        } finally {
          ln(!1);
        }
      }
      return i.memoizedState = [s, t], s;
    },
    useReducer: function(e, t, i) {
      var s = zt();
      if (i !== void 0) {
        var u = i(t);
        if (xa) {
          ln(!0);
          try {
            i(t);
          } finally {
            ln(!1);
          }
        }
      } else u = t;
      return s.memoizedState = s.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, s.queue = e, e = e.dispatch = yg.bind(
        null,
        ge,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var t = zt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = pu(e);
      var t = e.queue, i = Tf.bind(null, ge, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: yu,
    useDeferredValue: function(e, t) {
      var i = zt();
      return vu(i, e, t);
    },
    useTransition: function() {
      var e = pu(!1);
      return e = Sf.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), zt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var s = ge, u = zt();
      if (Ce) {
        if (i === void 0)
          throw Error(r(407));
        i = i();
      } else {
        if (i = t(), Ve === null)
          throw Error(r(349));
        (je & 127) !== 0 || Wm(s, t, i);
      }
      u.memoizedState = i;
      var d = { value: i, getSnapshot: t };
      return u.queue = d, pf(Im.bind(null, s, d, e), [
        e
      ]), s.flags |= 2048, pi(
        9,
        { destroy: void 0 },
        Fm.bind(
          null,
          s,
          d,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = zt(), t = Ve.identifierPrefix;
      if (Ce) {
        var i = cn, s = un;
        i = (s & ~(1 << 32 - ct(s) - 1)).toString(32) + i, t = "_" + t + "R_" + i, i = Rr++, 0 < i && (t += "H" + i.toString(32)), t += "_";
      } else
        i = cg++, t = "_" + t + "r_" + i.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: bu,
    useFormState: uf,
    useActionState: uf,
    useOptimistic: function(e) {
      var t = zt();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = ku.bind(
        null,
        ge,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: du,
    useCacheRefresh: function() {
      return zt().memoizedState = hg.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = zt(), i = { impl: e };
      return t.memoizedState = i, function() {
        if ((Ze & 2) !== 0)
          throw Error(r(440));
        return i.impl.apply(void 0, arguments);
      };
    }
  }, wu = {
    readContext: _t,
    use: Ur,
    useCallback: bf,
    useContext: _t,
    useEffect: hu,
    useImperativeHandle: gf,
    useInsertionEffect: hf,
    useLayoutEffect: yf,
    useMemo: kf,
    useReducer: Hr,
    useRef: ff,
    useState: function() {
      return Hr(kn);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, t) {
      var i = at();
      return wf(
        i,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hr(kn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : co(e),
        t
      ];
    },
    useSyncExternalStore: Jm,
    useId: jf,
    useHostTransitionStatus: bu,
    useFormState: cf,
    useActionState: cf,
    useOptimistic: function(e, t) {
      var i = at();
      return nf(i, $e, e, t);
    },
    useMemoCache: du,
    useCacheRefresh: Af
  };
  wu.useEffectEvent = _f;
  var Of = {
    readContext: _t,
    use: Ur,
    useCallback: bf,
    useContext: _t,
    useEffect: hu,
    useImperativeHandle: gf,
    useInsertionEffect: hf,
    useLayoutEffect: yf,
    useMemo: kf,
    useReducer: fu,
    useRef: ff,
    useState: function() {
      return fu(kn);
    },
    useDebugValue: yu,
    useDeferredValue: function(e, t) {
      var i = at();
      return $e === null ? vu(i, e, t) : wf(
        i,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = fu(kn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : co(e),
        t
      ];
    },
    useSyncExternalStore: Jm,
    useId: jf,
    useHostTransitionStatus: bu,
    useFormState: mf,
    useActionState: mf,
    useOptimistic: function(e, t) {
      var i = at();
      return $e !== null ? nf(i, $e, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: du,
    useCacheRefresh: Af
  };
  Of.useEffectEvent = _f;
  function Su(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : b({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var zu = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var s = Yt(), u = $n(s);
      u.payload = t, i != null && (u.callback = i), t = qn(e, u, s), t !== null && (Ot(t, e, s), ro(t, e, s));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var s = Yt(), u = $n(s);
      u.tag = 1, u.payload = t, i != null && (u.callback = i), t = qn(e, u, s), t !== null && (Ot(t, e, s), ro(t, e, s));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = Yt(), s = $n(i);
      s.tag = 2, t != null && (s.callback = t), t = qn(e, s, i), t !== null && (Ot(t, e, i), ro(t, e, i));
    }
  };
  function Nf(e, t, i, s, u, d, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, h) : t.prototype && t.prototype.isPureReactComponent ? !Fi(i, s) || !Fi(u, d) : !0;
  }
  function Df(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && zu.enqueueReplaceState(t, t.state, null);
  }
  function ja(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var s in t)
        s !== "ref" && (i[s] = t[s]);
    }
    if (e = e.defaultProps) {
      i === t && (i = b({}, i));
      for (var u in e)
        i[u] === void 0 && (i[u] = e[u]);
    }
    return i;
  }
  function Rf(e) {
    gr(e);
  }
  function Zf(e) {
    console.error(e);
  }
  function Uf(e) {
    gr(e);
  }
  function qr(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Hf(e, t, i) {
    try {
      var s = e.onCaughtError;
      s(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function xu(e, t, i) {
    return i = $n(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      qr(e, t);
    }, i;
  }
  function Bf(e) {
    return e = $n(e), e.tag = 3, e;
  }
  function Yf(e, t, i, s) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = s.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        Hf(t, i, s);
      };
    }
    var h = i.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
      Hf(t, i, s), typeof u != "function" && (Kn === null ? Kn = /* @__PURE__ */ new Set([this]) : Kn.add(this));
      var g = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function vg(e, t, i, s, u) {
    if (i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (t = i.alternate, t !== null && ri(
        t,
        i,
        u,
        !0
      ), i = Zt.current, i !== null) {
        switch (i.tag) {
          case 31:
          case 13:
            return Qt === null ? es() : i.alternate === null && Fe === 0 && (Fe = 3), i.flags &= -257, i.flags |= 65536, i.lanes = u, s === Er ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), Ju(e, s, u)), !1;
          case 22:
            return i.flags |= 65536, s === Er ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : i.add(s)), Ju(e, s, u)), !1;
        }
        throw Error(r(435, i.tag));
      }
      return Ju(e, s, u), es(), !1;
    }
    if (Ce)
      return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, s !== Ll && (e = Error(r(422), { cause: s }), to(Vt(e, i)))) : (s !== Ll && (t = Error(r(423), {
        cause: s
      }), to(
        Vt(t, i)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, s = Vt(s, i), u = xu(
        e.stateNode,
        s,
        u
      ), tu(e, u), Fe !== 4 && (Fe = 2)), !1;
    var d = Error(r(520), { cause: s });
    if (d = Vt(d, i), ko === null ? ko = [d] : ko.push(d), Fe !== 4 && (Fe = 2), t === null) return !0;
    s = Vt(s, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = u & -u, i.lanes |= e, e = xu(i.stateNode, s, e), tu(i, e), !1;
        case 1:
          if (t = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Kn === null || !Kn.has(d))))
            return i.flags |= 65536, u &= -u, i.lanes |= u, u = Bf(u), Yf(
              u,
              e,
              i,
              s
            ), tu(i, u), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var ju = Error(r(461)), st = !1;
  function ht(e, t, i, s) {
    t.child = e === null ? Xm(t, null, i, s) : za(
      t,
      e.child,
      i,
      s
    );
  }
  function $f(e, t, i, s, u) {
    i = i.render;
    var d = t.ref;
    if ("ref" in s) {
      var h = {};
      for (var g in s)
        g !== "ref" && (h[g] = s[g]);
    } else h = s;
    return ba(t), s = su(
      e,
      t,
      i,
      h,
      d,
      u
    ), g = lu(), e !== null && !st ? (uu(e, t, u), wn(e, t, u)) : (Ce && g && ql(t), t.flags |= 1, ht(e, t, s, u), t.child);
  }
  function qf(e, t, i, s, u) {
    if (e === null) {
      var d = i.type;
      return typeof d == "function" && !Bl(d) && d.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = d, Xf(
        e,
        t,
        d,
        s,
        u
      )) : (e = Sr(
        i.type,
        null,
        s,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !Du(e, u)) {
      var h = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Fi, i(h, s) && e.ref === t.ref)
        return wn(e, t, u);
    }
    return t.flags |= 1, e = hn(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xf(e, t, i, s, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Fi(d, s) && e.ref === t.ref)
        if (st = !1, t.pendingProps = s = d, Du(e, u))
          (e.flags & 131072) !== 0 && (st = !0);
        else
          return t.lanes = e.lanes, wn(e, t, u);
    }
    return Au(
      e,
      t,
      i,
      s,
      u
    );
  }
  function Lf(e, t, i, s) {
    var u = s.children, d = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (d = d !== null ? d.baseLanes | i : i, e !== null) {
          for (s = t.child = e.child, u = 0; s !== null; )
            u = u | s.lanes | s.childLanes, s = s.sibling;
          s = u & ~d;
        } else s = 0, t.child = null;
        return Vf(
          e,
          t,
          d,
          i,
          s
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ar(
          t,
          d !== null ? d.cachePool : null
        ), d !== null ? Gm(t, d) : au(), Pm(t);
      else
        return s = t.lanes = 536870912, Vf(
          e,
          t,
          d !== null ? d.baseLanes | i : i,
          i,
          s
        );
    } else
      d !== null ? (Ar(t, d.cachePool), Gm(t, d), Ln(), t.memoizedState = null) : (e !== null && Ar(t, null), au(), Ln());
    return ht(e, t, u, i), t.child;
  }
  function po(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Vf(e, t, i, s, u) {
    var d = Wl();
    return d = d === null ? null : { parent: ot._currentValue, pool: d }, t.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && Ar(t, null), au(), Pm(t), e !== null && ri(e, t, s, !0), t.childLanes = u, null;
  }
  function Xr(e, t) {
    return t = Vr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Gf(e, t, i) {
    return za(t, e.child, null, i), e = Xr(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function gg(e, t, i) {
    var s = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ce) {
        if (s.mode === "hidden")
          return e = Xr(t, s), t.lanes = 536870912, po(null, e);
        if (ou(t), (e = Ge) ? (e = i_(
          e,
          Kt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Zn !== null ? { id: un, overflow: cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = Tm(e), i.return = t, t.child = i, pt = t, Ge = null)) : e = null, e === null) throw Hn(t);
        return t.lanes = 536870912, null;
      }
      return Xr(t, s);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var h = d.dehydrated;
      if (ou(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Gf(
            e,
            t,
            i
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (st || ri(e, t, i, !1), u = (i & e.childLanes) !== 0, st || u) {
        if (s = Ve, s !== null && (h = Rd(s, i), h !== 0 && h !== d.retryLane))
          throw d.retryLane = h, ha(e, h), Ot(s, e, h), ju;
        es(), t = Gf(
          e,
          t,
          i
        );
      } else
        e = d.treeContext, Ge = Jt(h.nextSibling), pt = t, Ce = !0, Un = null, Kt = !1, e !== null && Mm(t, e), t = Xr(t, s), t.flags |= 4096;
      return t;
    }
    return e = hn(e.child, {
      mode: s.mode,
      children: s.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Lr(e, t) {
    var i = t.ref;
    if (i === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(r(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function Au(e, t, i, s, u) {
    return ba(t), i = su(
      e,
      t,
      i,
      s,
      void 0,
      u
    ), s = lu(), e !== null && !st ? (uu(e, t, u), wn(e, t, u)) : (Ce && s && ql(t), t.flags |= 1, ht(e, t, i, u), t.child);
  }
  function Pf(e, t, i, s, u, d) {
    return ba(t), t.updateQueue = null, i = Qm(
      t,
      s,
      i,
      u
    ), Km(e), s = lu(), e !== null && !st ? (uu(e, t, d), wn(e, t, d)) : (Ce && s && ql(t), t.flags |= 1, ht(e, t, i, d), t.child);
  }
  function Kf(e, t, i, s, u) {
    if (ba(t), t.stateNode === null) {
      var d = ni, h = i.contextType;
      typeof h == "object" && h !== null && (d = _t(h)), d = new i(s, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = zu, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = s, d.state = t.memoizedState, d.refs = {}, Il(t), h = i.contextType, d.context = typeof h == "object" && h !== null ? _t(h) : ni, d.state = t.memoizedState, h = i.getDerivedStateFromProps, typeof h == "function" && (Su(
        t,
        i,
        h,
        s
      ), d.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && zu.enqueueReplaceState(d, d.state, null), lo(t, s, d, u), so(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
    } else if (e === null) {
      d = t.stateNode;
      var g = t.memoizedProps, S = ja(i, g);
      d.props = S;
      var C = d.context, R = i.contextType;
      h = ni, typeof R == "object" && R !== null && (h = _t(R));
      var q = i.getDerivedStateFromProps;
      R = typeof q == "function" || typeof d.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, R || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g || C !== h) && Df(
        t,
        d,
        s,
        h
      ), Yn = !1;
      var M = t.memoizedState;
      d.state = M, lo(t, s, d, u), so(), C = t.memoizedState, g || M !== C || Yn ? (typeof q == "function" && (Su(
        t,
        i,
        q,
        s
      ), C = t.memoizedState), (S = Yn || Nf(
        t,
        i,
        S,
        s,
        M,
        C,
        h
      )) ? (R || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), d.props = s, d.state = C, d.context = h, s = S) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      d = t.stateNode, eu(e, t), h = t.memoizedProps, R = ja(i, h), d.props = R, q = t.pendingProps, M = d.context, C = i.contextType, S = ni, typeof C == "object" && C !== null && (S = _t(C)), g = i.getDerivedStateFromProps, (C = typeof g == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== q || M !== S) && Df(
        t,
        d,
        s,
        S
      ), Yn = !1, M = t.memoizedState, d.state = M, lo(t, s, d, u), so();
      var D = t.memoizedState;
      h !== q || M !== D || Yn || e !== null && e.dependencies !== null && xr(e.dependencies) ? (typeof g == "function" && (Su(
        t,
        i,
        g,
        s
      ), D = t.memoizedState), (R = Yn || Nf(
        t,
        i,
        R,
        s,
        M,
        D,
        S
      ) || e !== null && e.dependencies !== null && xr(e.dependencies)) ? (C || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(s, D, S), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        s,
        D,
        S
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = D), d.props = s, d.state = D, d.context = S, s = R) : (typeof d.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return d = s, Lr(e, t), s = (t.flags & 128) !== 0, d || s ? (d = t.stateNode, i = s && typeof i.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && s ? (t.child = za(
      t,
      e.child,
      null,
      u
    ), t.child = za(
      t,
      null,
      i,
      u
    )) : ht(e, t, i, u), t.memoizedState = d.state, e = t.child) : e = wn(
      e,
      t,
      u
    ), e;
  }
  function Qf(e, t, i, s) {
    return va(), t.flags |= 256, ht(e, t, i, s), t.child;
  }
  var Tu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Eu(e) {
    return { baseLanes: e, cachePool: Um() };
  }
  function Cu(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= Bt), e;
  }
  function Jf(e, t, i) {
    var s = t.pendingProps, u = !1, d = (t.flags & 128) !== 0, h;
    if ((h = d) || (h = e !== null && e.memoizedState === null ? !1 : (nt.current & 2) !== 0), h && (u = !0, t.flags &= -129), h = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ce) {
        if (u ? Xn(t) : Ln(), (e = Ge) ? (e = i_(
          e,
          Kt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Zn !== null ? { id: un, overflow: cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = Tm(e), i.return = t, t.child = i, pt = t, Ge = null)) : e = null, e === null) throw Hn(t);
        return mc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = s.children;
      return s = s.fallback, u ? (Ln(), u = t.mode, g = Vr(
        { mode: "hidden", children: g },
        u
      ), s = ya(
        s,
        u,
        i,
        null
      ), g.return = t, s.return = t, g.sibling = s, t.child = g, s = t.child, s.memoizedState = Eu(i), s.childLanes = Cu(
        e,
        h,
        i
      ), t.memoizedState = Tu, po(null, s)) : (Xn(t), Mu(t, g));
    }
    var S = e.memoizedState;
    if (S !== null && (g = S.dehydrated, g !== null)) {
      if (d)
        t.flags & 256 ? (Xn(t), t.flags &= -257, t = Ou(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Ln(), t.child = e.child, t.flags |= 128, t = null) : (Ln(), g = s.fallback, u = t.mode, s = Vr(
          { mode: "visible", children: s.children },
          u
        ), g = ya(
          g,
          u,
          i,
          null
        ), g.flags |= 2, s.return = t, g.return = t, s.sibling = g, t.child = s, za(
          t,
          e.child,
          null,
          i
        ), s = t.child, s.memoizedState = Eu(i), s.childLanes = Cu(
          e,
          h,
          i
        ), t.memoizedState = Tu, t = po(null, s));
      else if (Xn(t), mc(g)) {
        if (h = g.nextSibling && g.nextSibling.dataset, h) var C = h.dgst;
        h = C, s = Error(r(419)), s.stack = "", s.digest = h, to({ value: s, source: null, stack: null }), t = Ou(
          e,
          t,
          i
        );
      } else if (st || ri(e, t, i, !1), h = (i & e.childLanes) !== 0, st || h) {
        if (h = Ve, h !== null && (s = Rd(h, i), s !== 0 && s !== S.retryLane))
          throw S.retryLane = s, ha(e, s), Ot(h, e, s), ju;
        dc(g) || es(), t = Ou(
          e,
          t,
          i
        );
      } else
        dc(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ge = Jt(
          g.nextSibling
        ), pt = t, Ce = !0, Un = null, Kt = !1, e !== null && Mm(t, e), t = Mu(
          t,
          s.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Ln(), g = s.fallback, u = t.mode, S = e.child, C = S.sibling, s = hn(S, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? g = hn(
      C,
      g
    ) : (g = ya(
      g,
      u,
      i,
      null
    ), g.flags |= 2), g.return = t, s.return = t, s.sibling = g, t.child = s, po(null, s), s = t.child, g = e.child.memoizedState, g === null ? g = Eu(i) : (u = g.cachePool, u !== null ? (S = ot._currentValue, u = u.parent !== S ? { parent: S, pool: S } : u) : u = Um(), g = {
      baseLanes: g.baseLanes | i,
      cachePool: u
    }), s.memoizedState = g, s.childLanes = Cu(
      e,
      h,
      i
    ), t.memoizedState = Tu, po(e.child, s)) : (Xn(t), i = e.child, e = i.sibling, i = hn(i, {
      mode: "visible",
      children: s.children
    }), i.return = t, i.sibling = null, e !== null && (h = t.deletions, h === null ? (t.deletions = [e], t.flags |= 16) : h.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function Mu(e, t) {
    return t = Vr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Vr(e, t) {
    return e = Rt(22, e, null, t), e.lanes = 0, e;
  }
  function Ou(e, t, i) {
    return za(t, e.child, null, i), e = Mu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Wf(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Pl(e.return, t, i);
  }
  function Nu(e, t, i, s, u, d) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: i,
      tailMode: u,
      treeForkCount: d
    } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = i, h.tailMode = u, h.treeForkCount = d);
  }
  function Ff(e, t, i) {
    var s = t.pendingProps, u = s.revealOrder, d = s.tail;
    s = s.children;
    var h = nt.current, g = (h & 2) !== 0;
    if (g ? (h = h & 1 | 2, t.flags |= 128) : h &= 1, W(nt, h), ht(e, t, s, i), s = Ce ? eo : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Wf(e, i, t);
        else if (e.tag === 19)
          Wf(e, i, t);
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
        for (i = t.child, u = null; i !== null; )
          e = i.alternate, e !== null && Nr(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), Nu(
          t,
          !1,
          u,
          i,
          d,
          s
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Nr(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
        }
        Nu(
          t,
          !0,
          i,
          null,
          d,
          s
        );
        break;
      case "together":
        Nu(
          t,
          !1,
          null,
          null,
          void 0,
          s
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, (i & t.childLanes) === 0)
      if (e !== null) {
        if (ri(
          e,
          t,
          i,
          !1
        ), (i & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, i = hn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        e = e.sibling, i = i.sibling = hn(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function Du(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xr(e)));
  }
  function bg(e, t, i) {
    switch (t.tag) {
      case 3:
        Be(t, t.stateNode.containerInfo), Bn(t, ot, e.memoizedState.cache), va();
        break;
      case 27:
      case 5:
        $t(t);
        break;
      case 4:
        Be(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ou(t), null;
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (Xn(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Jf(e, t, i) : (Xn(t), e = wn(
            e,
            t,
            i
          ), e !== null ? e.sibling : null);
        Xn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (s = (i & t.childLanes) !== 0, s || (ri(
          e,
          t,
          i,
          !1
        ), s = (i & t.childLanes) !== 0), u) {
          if (s)
            return Ff(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), W(nt, nt.current), s) break;
        return null;
      case 22:
        return t.lanes = 0, Lf(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        Bn(t, ot, e.memoizedState.cache);
    }
    return wn(e, t, i);
  }
  function If(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!Du(e, i) && (t.flags & 128) === 0)
          return st = !1, bg(
            e,
            t,
            i
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Ce && (t.flags & 1048576) !== 0 && Cm(t, eo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var s = t.pendingProps;
          if (e = wa(t.elementType), t.type = e, typeof e == "function")
            Bl(e) ? (s = ja(e, s), t.tag = 1, t = Kf(
              null,
              t,
              e,
              s,
              i
            )) : (t.tag = 0, t = Au(
              null,
              t,
              e,
              s,
              i
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === J) {
                t.tag = 11, t = $f(
                  null,
                  t,
                  e,
                  s,
                  i
                );
                break e;
              } else if (u === P) {
                t.tag = 14, t = qf(
                  null,
                  t,
                  e,
                  s,
                  i
                );
                break e;
              }
            }
            throw t = te(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Au(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return s = t.type, u = ja(
          s,
          t.pendingProps
        ), Kf(
          e,
          t,
          s,
          u,
          i
        );
      case 3:
        e: {
          if (Be(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          s = t.pendingProps;
          var d = t.memoizedState;
          u = d.element, eu(e, t), lo(t, s, null, i);
          var h = t.memoizedState;
          if (s = h.cache, Bn(t, ot, s), s !== d.cache && Kl(
            t,
            [ot],
            i,
            !0
          ), so(), s = h.element, d.isDehydrated)
            if (d = {
              element: s,
              isDehydrated: !1,
              cache: h.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = Qf(
                e,
                t,
                s,
                i
              );
              break e;
            } else if (s !== u) {
              u = Vt(
                Error(r(424)),
                t
              ), to(u), t = Qf(
                e,
                t,
                s,
                i
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ge = Jt(e.firstChild), pt = t, Ce = !0, Un = null, Kt = !0, i = Xm(
                t,
                null,
                s,
                i
              ), t.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (va(), s === u) {
              t = wn(
                e,
                t,
                i
              );
              break e;
            }
            ht(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Lr(e, t), e === null ? (i = c_(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : Ce || (i = t.type, e = t.pendingProps, s = ss(
          pe.current
        ).createElement(i), s[ft] = t, s[jt] = e, yt(s, i, e), dt(s), t.stateNode = s) : t.memoizedState = c_(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $t(t), e === null && Ce && (s = t.stateNode = s_(
          t.type,
          t.pendingProps,
          pe.current
        ), pt = t, Kt = !0, u = Ge, Fn(t.type) ? (fc = u, Ge = Jt(s.firstChild)) : Ge = u), ht(
          e,
          t,
          t.pendingProps.children,
          i
        ), Lr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ce && ((u = s = Ge) && (s = Jg(
          s,
          t.type,
          t.pendingProps,
          Kt
        ), s !== null ? (t.stateNode = s, pt = t, Ge = Jt(s.firstChild), Kt = !1, u = !0) : u = !1), u || Hn(t)), $t(t), u = t.type, d = t.pendingProps, h = e !== null ? e.memoizedProps : null, s = d.children, lc(u, d) ? s = null : h !== null && lc(u, h) && (t.flags |= 32), t.memoizedState !== null && (u = su(
          e,
          t,
          dg,
          null,
          null,
          i
        ), Eo._currentValue = u), Lr(e, t), ht(e, t, s, i), t.child;
      case 6:
        return e === null && Ce && ((e = i = Ge) && (i = Wg(
          i,
          t.pendingProps,
          Kt
        ), i !== null ? (t.stateNode = i, pt = t, Ge = null, e = !0) : e = !1), e || Hn(t)), null;
      case 13:
        return Jf(e, t, i);
      case 4:
        return Be(
          t,
          t.stateNode.containerInfo
        ), s = t.pendingProps, e === null ? t.child = za(
          t,
          null,
          s,
          i
        ) : ht(e, t, s, i), t.child;
      case 11:
        return $f(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 7:
        return ht(
          e,
          t,
          t.pendingProps,
          i
        ), t.child;
      case 8:
        return ht(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 12:
        return ht(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 10:
        return s = t.pendingProps, Bn(t, t.type, s.value), ht(e, t, s.children, i), t.child;
      case 9:
        return u = t.type._context, s = t.pendingProps.children, ba(t), u = _t(u), s = s(u), t.flags |= 1, ht(e, t, s, i), t.child;
      case 14:
        return qf(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return Xf(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return Ff(e, t, i);
      case 31:
        return gg(e, t, i);
      case 22:
        return Lf(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        return ba(t), s = _t(ot), e === null ? (u = Wl(), u === null && (u = Ve, d = Ql(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= i), u = d), t.memoizedState = { parent: s, cache: u }, Il(t), Bn(t, ot, u)) : ((e.lanes & i) !== 0 && (eu(e, t), lo(t, null, null, i), so()), u = e.memoizedState, d = t.memoizedState, u.parent !== s ? (u = { parent: s, cache: s }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Bn(t, ot, s)) : (s = d.cache, Bn(t, ot, s), s !== u.cache && Kl(
          t,
          [ot],
          i,
          !0
        ))), ht(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Sn(e) {
    e.flags |= 4;
  }
  function Ru(e, t, i, s, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jp()) e.flags |= 8192;
        else
          throw Sa = Er, Fl;
    } else e.flags &= -16777217;
  }
  function ep(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !__(t))
      if (jp()) e.flags |= 8192;
      else
        throw Sa = Er, Fl;
  }
  function Gr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Od() : 536870912, e.lanes |= t, vi |= t);
  }
  function _o(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), t = t.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), i = i.sibling;
          s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
  }
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        i |= u.lanes | u.childLanes, s |= u.subtreeFlags & 65011712, s |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        i |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= s, e.childLanes = i, t;
  }
  function kg(e, t, i) {
    var s = t.pendingProps;
    switch (Xl(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(t), null;
      case 1:
        return Pe(t), null;
      case 3:
        return i = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), gn(ot), Ye(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (oi(t) ? Sn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Vl())), Pe(t), null;
      case 26:
        var u = t.type, d = t.memoizedState;
        return e === null ? (Sn(t), d !== null ? (Pe(t), ep(t, d)) : (Pe(t), Ru(
          t,
          u,
          null,
          s,
          i
        ))) : d ? d !== e.memoizedState ? (Sn(t), Pe(t), ep(t, d)) : (Pe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== s && Sn(t), Pe(t), Ru(
          t,
          u,
          e,
          s,
          i
        )), null;
      case 27:
        if (en(t), i = pe.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== s && Sn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Pe(t), null;
          }
          e = ne.current, oi(t) ? Om(t) : (e = s_(u, s, i), t.stateNode = e, Sn(t));
        }
        return Pe(t), null;
      case 5:
        if (en(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== s && Sn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Pe(t), null;
          }
          if (d = ne.current, oi(t))
            Om(t);
          else {
            var h = ss(
              pe.current
            );
            switch (d) {
              case 1:
                d = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                d = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    d = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    d = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    d = h.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(
                      d.firstChild
                    );
                    break;
                  case "select":
                    d = typeof s.is == "string" ? h.createElement("select", {
                      is: s.is
                    }) : h.createElement("select"), s.multiple ? d.multiple = !0 : s.size && (d.size = s.size);
                    break;
                  default:
                    d = typeof s.is == "string" ? h.createElement(u, { is: s.is }) : h.createElement(u);
                }
            }
            d[ft] = t, d[jt] = s;
            e: for (h = t.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6)
                d.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === t) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === t)
                  break e;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            t.stateNode = d;
            e: switch (yt(d, u, s), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
            s && Sn(t);
          }
        }
        return Pe(t), Ru(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          i
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== s && Sn(t);
        else {
          if (typeof s != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = pe.current, oi(t)) {
            if (e = t.stateNode, i = t.memoizedProps, s = null, u = pt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === i || s !== null && s.suppressHydrationWarning === !0 || Jp(e.nodeValue, i)), e || Hn(t, !0);
          } else
            e = ss(e).createTextNode(
              s
            ), e[ft] = t, t.stateNode = e;
        }
        return Pe(t), null;
      case 31:
        if (i = t.memoizedState, e === null || e.memoizedState !== null) {
          if (s = oi(t), i !== null) {
            if (e === null) {
              if (!s) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ft] = t;
            } else
              va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), e = !1;
          } else
            i = Vl(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), e = !0;
          if (!e)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Pe(t), null;
      case 13:
        if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = oi(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[ft] = t;
            } else
              va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), u = !1;
          } else
            u = Vl(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = i, t) : (i = s !== null, e = e !== null && e.memoizedState !== null, i && (s = t.child, u = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (u = s.alternate.memoizedState.cachePool.pool), d = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (d = s.memoizedState.cachePool.pool), d !== u && (s.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), Gr(t, t.updateQueue), Pe(t), null);
      case 4:
        return Ye(), e === null && ac(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return gn(t.type), Pe(t), null;
      case 19:
        if (Z(nt), s = t.memoizedState, s === null) return Pe(t), null;
        if (u = (t.flags & 128) !== 0, d = s.rendering, d === null)
          if (u) _o(s, !1);
          else {
            if (Fe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = Nr(e), d !== null) {
                  for (t.flags |= 128, _o(s, !1), e = d.updateQueue, t.updateQueue = e, Gr(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    Am(i, e), i = i.sibling;
                  return W(
                    nt,
                    nt.current & 1 | 2
                  ), Ce && yn(t, s.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null && wt() > Wr && (t.flags |= 128, u = !0, _o(s, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Nr(d), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Gr(t, e), _o(s, !0), s.tail === null && s.tailMode === "hidden" && !d.alternate && !Ce)
                return Pe(t), null;
            } else
              2 * wt() - s.renderingStartTime > Wr && i !== 536870912 && (t.flags |= 128, u = !0, _o(s, !1), t.lanes = 4194304);
          s.isBackwards ? (d.sibling = t.child, t.child = d) : (e = s.last, e !== null ? e.sibling = d : t.child = d, s.last = d);
        }
        return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = wt(), e.sibling = null, i = nt.current, W(
          nt,
          u ? i & 1 | 2 : i & 1
        ), Ce && yn(t, s.treeForkCount), e) : (Pe(t), null);
      case 22:
      case 23:
        return Ut(t), iu(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), i = t.updateQueue, i !== null && Gr(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== i && (t.flags |= 2048), e !== null && Z(ka), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), gn(ot), Pe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function wg(e, t) {
    switch (Xl(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return gn(ot), Ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return en(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ut(t), t.alternate === null)
            throw Error(r(340));
          va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Z(nt), null;
      case 4:
        return Ye(), null;
      case 10:
        return gn(t.type), null;
      case 22:
      case 23:
        return Ut(t), iu(), e !== null && Z(ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return gn(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tp(e, t) {
    switch (Xl(t), t.tag) {
      case 3:
        gn(ot), Ye();
        break;
      case 26:
      case 27:
      case 5:
        en(t);
        break;
      case 4:
        Ye();
        break;
      case 31:
        t.memoizedState !== null && Ut(t);
        break;
      case 13:
        Ut(t);
        break;
      case 19:
        Z(nt);
        break;
      case 10:
        gn(t.type);
        break;
      case 22:
      case 23:
        Ut(t), iu(), e !== null && Z(ka);
        break;
      case 24:
        gn(ot);
    }
  }
  function ho(e, t) {
    try {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            s = void 0;
            var d = i.create, h = i.inst;
            s = d(), h.destroy = s;
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (g) {
      He(t, t.return, g);
    }
  }
  function Vn(e, t, i) {
    try {
      var s = t.updateQueue, u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        s = d;
        do {
          if ((s.tag & e) === e) {
            var h = s.inst, g = h.destroy;
            if (g !== void 0) {
              h.destroy = void 0, u = t;
              var S = i, C = g;
              try {
                C();
              } catch (R) {
                He(
                  u,
                  S,
                  R
                );
              }
            }
          }
          s = s.next;
        } while (s !== d);
      }
    } catch (R) {
      He(t, t.return, R);
    }
  }
  function np(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        Vm(t, i);
      } catch (s) {
        He(e, e.return, s);
      }
    }
  }
  function ap(e, t, i) {
    i.props = ja(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (s) {
      He(e, t, s);
    }
  }
  function yo(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(s) : i.current = s;
      }
    } catch (u) {
      He(e, t, u);
    }
  }
  function dn(e, t) {
    var i = e.ref, s = e.refCleanup;
    if (i !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (u) {
          He(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          He(e, t, u);
        }
      else i.current = null;
  }
  function ip(e) {
    var t = e.type, i = e.memoizedProps, s = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && s.focus();
          break e;
        case "img":
          i.src ? s.src = i.src : i.srcSet && (s.srcset = i.srcSet);
      }
    } catch (u) {
      He(e, e.return, u);
    }
  }
  function Zu(e, t, i) {
    try {
      var s = e.stateNode;
      Lg(s, e.type, i, t), s[jt] = t;
    } catch (u) {
      He(e, e.return, u);
    }
  }
  function op(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
  }
  function Uu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || op(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Hu(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = pn));
    else if (s !== 4 && (s === 27 && Fn(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (Hu(e, t, i), e = e.sibling; e !== null; )
        Hu(e, t, i), e = e.sibling;
  }
  function Pr(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (s === 27 && Fn(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Pr(e, t, i), e = e.sibling; e !== null; )
        Pr(e, t, i), e = e.sibling;
  }
  function rp(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var s = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      yt(t, s, i), t[ft] = e, t[jt] = i;
    } catch (d) {
      He(e, e.return, d);
    }
  }
  var zn = !1, lt = !1, Bu = !1, sp = typeof WeakSet == "function" ? WeakSet : Set, mt = null;
  function Sg(e, t) {
    if (e = e.containerInfo, rc = ps, e = vm(e), Ol(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset, d = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break e;
            }
            var h = 0, g = -1, S = -1, C = 0, R = 0, q = e, M = null;
            t: for (; ; ) {
              for (var D; q !== i || u !== 0 && q.nodeType !== 3 || (g = h + u), q !== d || s !== 0 && q.nodeType !== 3 || (S = h + s), q.nodeType === 3 && (h += q.nodeValue.length), (D = q.firstChild) !== null; )
                M = q, q = D;
              for (; ; ) {
                if (q === e) break t;
                if (M === i && ++C === u && (g = h), M === d && ++R === s && (S = h), (D = q.nextSibling) !== null) break;
                q = M, M = q.parentNode;
              }
              q = D;
            }
            i = g === -1 || S === -1 ? null : { start: g, end: S };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (sc = { focusedElem: e, selectionRange: i }, ps = !1, mt = t; mt !== null; )
      if (t = mt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, mt = e;
      else
        for (; mt !== null; ) {
          switch (t = mt, d = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (i = 0; i < e.length; i++)
                  u = e[i], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, i = t, u = d.memoizedProps, d = d.memoizedState, s = i.stateNode;
                try {
                  var se = ja(
                    i.type,
                    u
                  );
                  e = s.getSnapshotBeforeUpdate(
                    se,
                    d
                  ), s.__reactInternalSnapshotBeforeUpdate = e;
                } catch (_e) {
                  He(
                    i,
                    i.return,
                    _e
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  cc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cc(e);
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
            e.return = t.return, mt = e;
            break;
          }
          mt = t.return;
        }
  }
  function lp(e, t, i) {
    var s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        jn(e, i), s & 4 && ho(5, i);
        break;
      case 1:
        if (jn(e, i), s & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (h) {
              He(i, i.return, h);
            }
          else {
            var u = ja(
              i.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (h) {
              He(
                i,
                i.return,
                h
              );
            }
          }
        s & 64 && np(i), s & 512 && yo(i, i.return);
        break;
      case 3:
        if (jn(e, i), s & 64 && (e = i.updateQueue, e !== null)) {
          if (t = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            Vm(e, t);
          } catch (h) {
            He(i, i.return, h);
          }
        }
        break;
      case 27:
        t === null && s & 4 && rp(i);
      case 26:
      case 5:
        jn(e, i), t === null && s & 4 && ip(i), s & 512 && yo(i, i.return);
        break;
      case 12:
        jn(e, i);
        break;
      case 31:
        jn(e, i), s & 4 && dp(e, i);
        break;
      case 13:
        jn(e, i), s & 4 && mp(e, i), s & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = Og.bind(
          null,
          i
        ), Fg(e, i))));
        break;
      case 22:
        if (s = i.memoizedState !== null || zn, !s) {
          t = t !== null && t.memoizedState !== null || lt, u = zn;
          var d = lt;
          zn = s, (lt = t) && !d ? An(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : jn(e, i), zn = u, lt = d;
        }
        break;
      case 30:
        break;
      default:
        jn(e, i);
    }
  }
  function up(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, up(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _l(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, Tt = !1;
  function xn(e, t, i) {
    for (i = i.child; i !== null; )
      cp(e, t, i), i = i.sibling;
  }
  function cp(e, t, i) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(da, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        lt || dn(i, t), xn(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        lt || dn(i, t);
        var s = Ke, u = Tt;
        Fn(i.type) && (Ke = i.stateNode, Tt = !1), xn(
          e,
          t,
          i
        ), jo(i.stateNode), Ke = s, Tt = u;
        break;
      case 5:
        lt || dn(i, t);
      case 6:
        if (s = Ke, u = Tt, Ke = null, xn(
          e,
          t,
          i
        ), Ke = s, Tt = u, Ke !== null)
          if (Tt)
            try {
              (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(i.stateNode);
            } catch (d) {
              He(
                i,
                t,
                d
              );
            }
          else
            try {
              Ke.removeChild(i.stateNode);
            } catch (d) {
              He(
                i,
                t,
                d
              );
            }
        break;
      case 18:
        Ke !== null && (Tt ? (e = Ke, n_(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), ji(e)) : n_(Ke, i.stateNode));
        break;
      case 4:
        s = Ke, u = Tt, Ke = i.stateNode.containerInfo, Tt = !0, xn(
          e,
          t,
          i
        ), Ke = s, Tt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(2, i, t), lt || Vn(4, i, t), xn(
          e,
          t,
          i
        );
        break;
      case 1:
        lt || (dn(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function" && ap(
          i,
          t,
          s
        )), xn(
          e,
          t,
          i
        );
        break;
      case 21:
        xn(
          e,
          t,
          i
        );
        break;
      case 22:
        lt = (s = lt) || i.memoizedState !== null, xn(
          e,
          t,
          i
        ), lt = s;
        break;
      default:
        xn(
          e,
          t,
          i
        );
    }
  }
  function dp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ji(e);
      } catch (i) {
        He(t, t.return, i);
      }
    }
  }
  function mp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ji(e);
      } catch (i) {
        He(t, t.return, i);
      }
  }
  function zg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new sp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new sp()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Kr(e, t) {
    var i = zg(e);
    t.forEach(function(s) {
      if (!i.has(s)) {
        i.add(s);
        var u = Ng.bind(null, e, s);
        s.then(u, u);
      }
    });
  }
  function Et(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s], d = e, h = t, g = h;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Fn(g.type)) {
                Ke = g.stateNode, Tt = !1;
                break e;
              }
              break;
            case 5:
              Ke = g.stateNode, Tt = !1;
              break e;
            case 3:
            case 4:
              Ke = g.stateNode.containerInfo, Tt = !0;
              break e;
          }
          g = g.return;
        }
        if (Ke === null) throw Error(r(160));
        cp(d, h, u), Ke = null, Tt = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        fp(t, e), t = t.sibling;
  }
  var nn = null;
  function fp(e, t) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Et(t, e), Ct(e), s & 4 && (Vn(3, e, e.return), ho(3, e), Vn(5, e, e.return));
        break;
      case 1:
        Et(t, e), Ct(e), s & 512 && (lt || i === null || dn(i, i.return)), s & 64 && zn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? s : i.concat(s))));
        break;
      case 26:
        var u = nn;
        if (Et(t, e), Ct(e), s & 512 && (lt || i === null || dn(i, i.return)), s & 4) {
          var d = i !== null ? i.memoizedState : null;
          if (s = e.memoizedState, i === null)
            if (s === null)
              if (e.stateNode === null) {
                e: {
                  s = e.type, i = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (s) {
                    case "title":
                      d = u.getElementsByTagName("title")[0], (!d || d[Xi] || d[ft] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(s), u.head.insertBefore(
                        d,
                        u.querySelector("head > title")
                      )), yt(d, s, i), d[ft] = e, dt(d), s = d;
                      break e;
                    case "link":
                      var h = f_(
                        "link",
                        "href",
                        u
                      ).get(s + (i.href || ""));
                      if (h) {
                        for (var g = 0; g < h.length; g++)
                          if (d = h[g], d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            h.splice(g, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), yt(d, s, i), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (h = f_(
                        "meta",
                        "content",
                        u
                      ).get(s + (i.content || ""))) {
                        for (g = 0; g < h.length; g++)
                          if (d = h[g], d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            h.splice(g, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), yt(d, s, i), u.head.appendChild(d);
                      break;
                    default:
                      throw Error(r(468, s));
                  }
                  d[ft] = e, dt(d), s = d;
                }
                e.stateNode = s;
              } else
                p_(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = m_(
                u,
                s,
                e.memoizedProps
              );
          else
            d !== s ? (d === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : d.count--, s === null ? p_(
              u,
              e.type,
              e.stateNode
            ) : m_(
              u,
              s,
              e.memoizedProps
            )) : s === null && e.stateNode !== null && Zu(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        Et(t, e), Ct(e), s & 512 && (lt || i === null || dn(i, i.return)), i !== null && s & 4 && Zu(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (Et(t, e), Ct(e), s & 512 && (lt || i === null || dn(i, i.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Qa(u, "");
          } catch (se) {
            He(e, e.return, se);
          }
        }
        s & 4 && e.stateNode != null && (u = e.memoizedProps, Zu(
          e,
          u,
          i !== null ? i.memoizedProps : u
        )), s & 1024 && (Bu = !0);
        break;
      case 6:
        if (Et(t, e), Ct(e), s & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          s = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = s;
          } catch (se) {
            He(e, e.return, se);
          }
        }
        break;
      case 3:
        if (cs = null, u = nn, nn = ls(t.containerInfo), Et(t, e), nn = u, Ct(e), s & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            ji(t.containerInfo);
          } catch (se) {
            He(e, e.return, se);
          }
        Bu && (Bu = !1, pp(e));
        break;
      case 4:
        s = nn, nn = ls(
          e.stateNode.containerInfo
        ), Et(t, e), Ct(e), nn = s;
        break;
      case 12:
        Et(t, e), Ct(e);
        break;
      case 31:
        Et(t, e), Ct(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kr(e, s)));
        break;
      case 13:
        Et(t, e), Ct(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Jr = wt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kr(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = i !== null && i.memoizedState !== null, C = zn, R = lt;
        if (zn = C || u, lt = R || S, Et(t, e), lt = R, zn = C, Ct(e), s & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (i === null || S || zn || lt || Aa(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                S = i = t;
                try {
                  if (d = S.stateNode, u)
                    h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                  else {
                    g = S.stateNode;
                    var q = S.memoizedProps.style, M = q != null && q.hasOwnProperty("display") ? q.display : null;
                    g.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (se) {
                  He(S, S.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (se) {
                  He(S, S.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (i === null) {
                S = t;
                try {
                  var D = S.stateNode;
                  u ? a_(D, !0) : a_(S.stateNode, !1);
                } catch (se) {
                  He(S, S.return, se);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), t = t.return;
            }
            i === t && (i = null), t.sibling.return = t.return, t = t.sibling;
          }
        s & 4 && (s = e.updateQueue, s !== null && (i = s.retryQueue, i !== null && (s.retryQueue = null, Kr(e, i))));
        break;
      case 19:
        Et(t, e), Ct(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Kr(e, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Et(t, e), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, s = e.return; s !== null; ) {
          if (op(s)) {
            i = s;
            break;
          }
          s = s.return;
        }
        if (i == null) throw Error(r(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode, d = Uu(e);
            Pr(e, d, u);
            break;
          case 5:
            var h = i.stateNode;
            i.flags & 32 && (Qa(h, ""), i.flags &= -33);
            var g = Uu(e);
            Pr(e, g, h);
            break;
          case 3:
          case 4:
            var S = i.stateNode.containerInfo, C = Uu(e);
            Hu(
              e,
              C,
              S
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        He(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        pp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function jn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        lp(e, t.alternate, t), t = t.sibling;
  }
  function Aa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, t, t.return), Aa(t);
          break;
        case 1:
          dn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && ap(
            t,
            t.return,
            i
          ), Aa(t);
          break;
        case 27:
          jo(t.stateNode);
        case 26:
        case 5:
          dn(t, t.return), Aa(t);
          break;
        case 22:
          t.memoizedState === null && Aa(t);
          break;
        case 30:
          Aa(t);
          break;
        default:
          Aa(t);
      }
      e = e.sibling;
    }
  }
  function An(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate, u = e, d = t, h = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          An(
            u,
            d,
            i
          ), ho(4, d);
          break;
        case 1:
          if (An(
            u,
            d,
            i
          ), s = d, u = s.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (C) {
              He(s, s.return, C);
            }
          if (s = d, u = s.updateQueue, u !== null) {
            var g = s.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  Lm(S[u], g);
            } catch (C) {
              He(s, s.return, C);
            }
          }
          i && h & 64 && np(d), yo(d, d.return);
          break;
        case 27:
          rp(d);
        case 26:
        case 5:
          An(
            u,
            d,
            i
          ), i && s === null && h & 4 && ip(d), yo(d, d.return);
          break;
        case 12:
          An(
            u,
            d,
            i
          );
          break;
        case 31:
          An(
            u,
            d,
            i
          ), i && h & 4 && dp(u, d);
          break;
        case 13:
          An(
            u,
            d,
            i
          ), i && h & 4 && mp(u, d);
          break;
        case 22:
          d.memoizedState === null && An(
            u,
            d,
            i
          ), yo(d, d.return);
          break;
        case 30:
          break;
        default:
          An(
            u,
            d,
            i
          );
      }
      t = t.sibling;
    }
  }
  function Yu(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && no(i));
  }
  function $u(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && no(e));
  }
  function an(e, t, i, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        _p(
          e,
          t,
          i,
          s
        ), t = t.sibling;
  }
  function _p(e, t, i, s) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(
          e,
          t,
          i,
          s
        ), u & 2048 && ho(9, t);
        break;
      case 1:
        an(
          e,
          t,
          i,
          s
        );
        break;
      case 3:
        an(
          e,
          t,
          i,
          s
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && no(e)));
        break;
      case 12:
        if (u & 2048) {
          an(
            e,
            t,
            i,
            s
          ), e = t.stateNode;
          try {
            var d = t.memoizedProps, h = d.id, g = d.onPostCommit;
            typeof g == "function" && g(
              h,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            He(t, t.return, S);
          }
        } else
          an(
            e,
            t,
            i,
            s
          );
        break;
      case 31:
        an(
          e,
          t,
          i,
          s
        );
        break;
      case 13:
        an(
          e,
          t,
          i,
          s
        );
        break;
      case 23:
        break;
      case 22:
        d = t.stateNode, h = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? an(
          e,
          t,
          i,
          s
        ) : vo(e, t) : d._visibility & 2 ? an(
          e,
          t,
          i,
          s
        ) : (d._visibility |= 2, _i(
          e,
          t,
          i,
          s,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Yu(h, t);
        break;
      case 24:
        an(
          e,
          t,
          i,
          s
        ), u & 2048 && $u(t.alternate, t);
        break;
      default:
        an(
          e,
          t,
          i,
          s
        );
    }
  }
  function _i(e, t, i, s, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var d = e, h = t, g = i, S = s, C = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          _i(
            d,
            h,
            g,
            S,
            u
          ), ho(8, h);
          break;
        case 23:
          break;
        case 22:
          var R = h.stateNode;
          h.memoizedState !== null ? R._visibility & 2 ? _i(
            d,
            h,
            g,
            S,
            u
          ) : vo(
            d,
            h
          ) : (R._visibility |= 2, _i(
            d,
            h,
            g,
            S,
            u
          )), u && C & 2048 && Yu(
            h.alternate,
            h
          );
          break;
        case 24:
          _i(
            d,
            h,
            g,
            S,
            u
          ), u && C & 2048 && $u(h.alternate, h);
          break;
        default:
          _i(
            d,
            h,
            g,
            S,
            u
          );
      }
      t = t.sibling;
    }
  }
  function vo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, s = t, u = s.flags;
        switch (s.tag) {
          case 22:
            vo(i, s), u & 2048 && Yu(
              s.alternate,
              s
            );
            break;
          case 24:
            vo(i, s), u & 2048 && $u(s.alternate, s);
            break;
          default:
            vo(i, s);
        }
        t = t.sibling;
      }
  }
  var go = 8192;
  function hi(e, t, i) {
    if (e.subtreeFlags & go)
      for (e = e.child; e !== null; )
        hp(
          e,
          t,
          i
        ), e = e.sibling;
  }
  function hp(e, t, i) {
    switch (e.tag) {
      case 26:
        hi(
          e,
          t,
          i
        ), e.flags & go && e.memoizedState !== null && cb(
          i,
          nn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hi(
          e,
          t,
          i
        );
        break;
      case 3:
      case 4:
        var s = nn;
        nn = ls(e.stateNode.containerInfo), hi(
          e,
          t,
          i
        ), nn = s;
        break;
      case 22:
        e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = go, go = 16777216, hi(
          e,
          t,
          i
        ), go = s) : hi(
          e,
          t,
          i
        ));
        break;
      default:
        hi(
          e,
          t,
          i
        );
    }
  }
  function yp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function bo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          mt = s, gp(
            s,
            e
          );
        }
      yp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        vp(e), e = e.sibling;
  }
  function vp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bo(e), e.flags & 2048 && Vn(9, e, e.return);
        break;
      case 3:
        bo(e);
        break;
      case 12:
        bo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qr(e)) : bo(e);
        break;
      default:
        bo(e);
    }
  }
  function Qr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          mt = s, gp(
            s,
            e
          );
        }
      yp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, t, t.return), Qr(t);
          break;
        case 22:
          i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, Qr(t));
          break;
        default:
          Qr(t);
      }
      e = e.sibling;
    }
  }
  function gp(e, t) {
    for (; mt !== null; ) {
      var i = mt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var s = i.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          no(i.memoizedState.cache);
      }
      if (s = i.child, s !== null) s.return = i, mt = s;
      else
        e: for (i = e; mt !== null; ) {
          s = mt;
          var u = s.sibling, d = s.return;
          if (up(s), s === i) {
            mt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, mt = u;
            break e;
          }
          mt = d;
        }
    }
  }
  var xg = {
    getCacheForType: function(e) {
      var t = _t(ot), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    },
    cacheSignal: function() {
      return _t(ot).controller.signal;
    }
  }, jg = typeof WeakMap == "function" ? WeakMap : Map, Ze = 0, Ve = null, we = null, je = 0, Ue = 0, Ht = null, Gn = !1, yi = !1, qu = !1, Tn = 0, Fe = 0, Pn = 0, Ta = 0, Xu = 0, Bt = 0, vi = 0, ko = null, Mt = null, Lu = !1, Jr = 0, bp = 0, Wr = 1 / 0, Fr = null, Kn = null, ut = 0, Qn = null, gi = null, En = 0, Vu = 0, Gu = null, kp = null, wo = 0, Pu = null;
  function Yt() {
    return (Ze & 2) !== 0 && je !== 0 ? je & -je : T.T !== null ? Iu() : Zd();
  }
  function wp() {
    if (Bt === 0)
      if ((je & 536870912) === 0 || Ce) {
        var e = G;
        G <<= 1, (G & 3932160) === 0 && (G = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Zt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Ot(e, t, i) {
    (e === Ve && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (bi(e, 0), Jn(
      e,
      je,
      Bt,
      !1
    )), qi(e, i), ((Ze & 2) === 0 || e !== Ve) && (e === Ve && ((Ze & 2) === 0 && (Ta |= i), Fe === 4 && Jn(
      e,
      je,
      Bt,
      !1
    )), mn(e));
  }
  function Sp(e, t, i) {
    if ((Ze & 6) !== 0) throw Error(r(327));
    var s = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || $i(e, t), u = s ? Eg(e, t) : Qu(e, t, !0), d = s;
    do {
      if (u === 0) {
        yi && !s && Jn(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, d && !Ag(i)) {
          u = Qu(e, t, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = t, e.errorRecoveryDisabledLanes & d)
            var h = 0;
          else
            h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            t = h;
            e: {
              var g = e;
              u = ko;
              var S = g.current.memoizedState.isDehydrated;
              if (S && (bi(g, h).flags |= 256), h = Qu(
                g,
                h,
                !1
              ), h !== 2) {
                if (qu && !S) {
                  g.errorRecoveryDisabledLanes |= d, Ta |= d, u = 4;
                  break e;
                }
                d = Mt, Mt = u, d !== null && (Mt === null ? Mt = d : Mt.push.apply(
                  Mt,
                  d
                ));
              }
              u = h;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          bi(e, 0), Jn(e, t, 0, !0);
          break;
        }
        e: {
          switch (s = e, d = u, d) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Jn(
                s,
                t,
                Bt,
                !Gn
              );
              break e;
            case 2:
              Mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (u = Jr + 300 - wt(), 10 < u)) {
            if (Jn(
              s,
              t,
              Bt,
              !Gn
            ), tt(s, 0, !0) !== 0) break e;
            En = t, s.timeoutHandle = e_(
              zp.bind(
                null,
                s,
                i,
                Mt,
                Fr,
                Lu,
                t,
                Bt,
                Ta,
                vi,
                Gn,
                d,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          zp(
            s,
            i,
            Mt,
            Fr,
            Lu,
            t,
            Bt,
            Ta,
            vi,
            Gn,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mn(e);
  }
  function zp(e, t, i, s, u, d, h, g, S, C, R, q, M, D) {
    if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn
      }, hp(
        t,
        d,
        q
      );
      var se = (d & 62914560) === d ? Jr - wt() : (d & 4194048) === d ? bp - wt() : 0;
      if (se = db(
        q,
        se
      ), se !== null) {
        En = d, e.cancelPendingCommit = se(
          Op.bind(
            null,
            e,
            t,
            d,
            i,
            s,
            u,
            h,
            g,
            S,
            R,
            q,
            null,
            M,
            D
          )
        ), Jn(e, d, h, !C);
        return;
      }
    }
    Op(
      e,
      t,
      d,
      i,
      s,
      u,
      h,
      g,
      S
    );
  }
  function Ag(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var s = 0; s < i.length; s++) {
          var u = i[s], d = u.getSnapshot;
          u = u.value;
          try {
            if (!Dt(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null)
        i.return = t, t = i;
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
  function Jn(e, t, i, s) {
    t &= ~Xu, t &= ~Ta, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var d = 31 - ct(u), h = 1 << d;
      s[d] = -1, u &= ~h;
    }
    i !== 0 && Nd(e, i, t);
  }
  function Ir() {
    return (Ze & 6) === 0 ? (So(0), !1) : !0;
  }
  function Ku() {
    if (we !== null) {
      if (Ue === 0)
        var e = we.return;
      else
        e = we, vn = ga = null, cu(e), ci = null, io = 0, e = we;
      for (; e !== null; )
        tp(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function bi(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, Pg(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), En = 0, Ku(), Ve = e, we = i = hn(e.current, null), je = t, Ue = 0, Ht = null, Gn = !1, yi = $i(e, t), qu = !1, vi = Bt = Xu = Ta = Pn = Fe = 0, Mt = ko = null, Lu = !1, (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - ct(s), d = 1 << u;
        t |= e[u], s &= ~d;
      }
    return Tn = t, br(), i;
  }
  function xp(e, t) {
    ge = null, T.H = fo, t === ui || t === Tr ? (t = Ym(), Ue = 3) : t === Fl ? (t = Ym(), Ue = 4) : Ue = t === ju ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, we === null && (Fe = 1, qr(
      e,
      Vt(t, e.current)
    ));
  }
  function jp() {
    var e = Zt.current;
    return e === null ? !0 : (je & 4194048) === je ? Qt === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === Qt : !1;
  }
  function Ap() {
    var e = T.H;
    return T.H = fo, e === null ? fo : e;
  }
  function Tp() {
    var e = T.A;
    return T.A = xg, e;
  }
  function es() {
    Fe = 4, Gn || (je & 4194048) !== je && Zt.current !== null || (yi = !0), (Pn & 134217727) === 0 && (Ta & 134217727) === 0 || Ve === null || Jn(
      Ve,
      je,
      Bt,
      !1
    );
  }
  function Qu(e, t, i) {
    var s = Ze;
    Ze |= 2;
    var u = Ap(), d = Tp();
    (Ve !== e || je !== t) && (Fr = null, bi(e, t)), t = !1;
    var h = Fe;
    e: do
      try {
        if (Ue !== 0 && we !== null) {
          var g = we, S = Ht;
          switch (Ue) {
            case 8:
              Ku(), h = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (t = !0);
              var C = Ue;
              if (Ue = 0, Ht = null, ki(e, g, S, C), i && yi) {
                h = 0;
                break e;
              }
              break;
            default:
              C = Ue, Ue = 0, Ht = null, ki(e, g, S, C);
          }
        }
        Tg(), h = Fe;
        break;
      } catch (R) {
        xp(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = ga = null, Ze = s, T.H = u, T.A = d, we === null && (Ve = null, je = 0, br()), h;
  }
  function Tg() {
    for (; we !== null; ) Ep(we);
  }
  function Eg(e, t) {
    var i = Ze;
    Ze |= 2;
    var s = Ap(), u = Tp();
    Ve !== e || je !== t ? (Fr = null, Wr = wt() + 500, bi(e, t)) : yi = $i(
      e,
      t
    );
    e: do
      try {
        if (Ue !== 0 && we !== null) {
          t = we;
          var d = Ht;
          t: switch (Ue) {
            case 1:
              Ue = 0, Ht = null, ki(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (Hm(d)) {
                Ue = 0, Ht = null, Cp(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ve !== e || (Ue = 7), mn(e);
              }, d.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Hm(d) ? (Ue = 0, Ht = null, Cp(t)) : (Ue = 0, Ht = null, ki(e, t, d, 7));
              break;
            case 5:
              var h = null;
              switch (we.tag) {
                case 26:
                  h = we.memoizedState;
                case 5:
                case 27:
                  var g = we;
                  if (h ? __(h) : g.stateNode.complete) {
                    Ue = 0, Ht = null;
                    var S = g.sibling;
                    if (S !== null) we = S;
                    else {
                      var C = g.return;
                      C !== null ? (we = C, ts(C)) : we = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Ht = null, ki(e, t, d, 5);
              break;
            case 6:
              Ue = 0, Ht = null, ki(e, t, d, 6);
              break;
            case 8:
              Ku(), Fe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Cg();
        break;
      } catch (R) {
        xp(e, R);
      }
    while (!0);
    return vn = ga = null, T.H = s, T.A = u, Ze = i, we !== null ? 0 : (Ve = null, je = 0, br(), Fe);
  }
  function Cg() {
    for (; we !== null && !ol(); )
      Ep(we);
  }
  function Ep(e) {
    var t = If(e.alternate, e, Tn);
    e.memoizedProps = e.pendingProps, t === null ? ts(e) : we = t;
  }
  function Cp(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Pf(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          je
        );
        break;
      case 11:
        t = Pf(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          je
        );
        break;
      case 5:
        cu(t);
      default:
        tp(i, t), t = we = Am(t, Tn), t = If(i, t, Tn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ts(e) : we = t;
  }
  function ki(e, t, i, s) {
    vn = ga = null, cu(t), ci = null, io = 0;
    var u = t.return;
    try {
      if (vg(
        e,
        u,
        t,
        i,
        je
      )) {
        Fe = 1, qr(
          e,
          Vt(i, e.current)
        ), we = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw we = u, d;
      Fe = 1, qr(
        e,
        Vt(i, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ce || s === 1 ? e = !0 : yi || (je & 536870912) !== 0 ? e = !1 : (Gn = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Zt.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Mp(t, e)) : ts(t);
  }
  function ts(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Mp(
          t,
          Gn
        );
        return;
      }
      e = t.return;
      var i = kg(
        t.alternate,
        t,
        Tn
      );
      if (i !== null) {
        we = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function Mp(e, t) {
    do {
      var i = wg(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, we = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = i;
    } while (e !== null);
    Fe = 6, we = null;
  }
  function Op(e, t, i, s, u, d, h, g, S) {
    e.cancelPendingCommit = null;
    do
      ns();
    while (ut !== 0);
    if ((Ze & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (d = t.lanes | t.childLanes, d |= Ul, uv(
        e,
        i,
        d,
        h,
        g,
        S
      ), e === Ve && (we = Ve = null, je = 0), gi = t, Qn = e, En = i, Vu = d, Gu = u, kp = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Dg($a, function() {
        return Up(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
        s = T.T, T.T = null, u = V.p, V.p = 2, h = Ze, Ze |= 4;
        try {
          Sg(e, t, i);
        } finally {
          Ze = h, V.p = u, T.T = s;
        }
      }
      ut = 1, Np(), Dp(), Rp();
    }
  }
  function Np() {
    if (ut === 1) {
      ut = 0;
      var e = Qn, t = gi, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = T.T, T.T = null;
        var s = V.p;
        V.p = 2;
        var u = Ze;
        Ze |= 4;
        try {
          fp(t, e);
          var d = sc, h = vm(e.containerInfo), g = d.focusedElem, S = d.selectionRange;
          if (h !== g && g && g.ownerDocument && ym(
            g.ownerDocument.documentElement,
            g
          )) {
            if (S !== null && Ol(g)) {
              var C = S.start, R = S.end;
              if (R === void 0 && (R = C), "selectionStart" in g)
                g.selectionStart = C, g.selectionEnd = Math.min(
                  R,
                  g.value.length
                );
              else {
                var q = g.ownerDocument || document, M = q && q.defaultView || window;
                if (M.getSelection) {
                  var D = M.getSelection(), se = g.textContent.length, _e = Math.min(S.start, se), Xe = S.end === void 0 ? _e : Math.min(S.end, se);
                  !D.extend && _e > Xe && (h = Xe, Xe = _e, _e = h);
                  var A = hm(
                    g,
                    _e
                  ), j = hm(
                    g,
                    Xe
                  );
                  if (A && j && (D.rangeCount !== 1 || D.anchorNode !== A.node || D.anchorOffset !== A.offset || D.focusNode !== j.node || D.focusOffset !== j.offset)) {
                    var E = q.createRange();
                    E.setStart(A.node, A.offset), D.removeAllRanges(), _e > Xe ? (D.addRange(E), D.extend(j.node, j.offset)) : (E.setEnd(j.node, j.offset), D.addRange(E));
                  }
                }
              }
            }
            for (q = [], D = g; D = D.parentNode; )
              D.nodeType === 1 && q.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < q.length; g++) {
              var H = q[g];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          ps = !!rc, sc = rc = null;
        } finally {
          Ze = u, V.p = s, T.T = i;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function Dp() {
    if (ut === 2) {
      ut = 0;
      var e = Qn, t = gi, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = T.T, T.T = null;
        var s = V.p;
        V.p = 2;
        var u = Ze;
        Ze |= 4;
        try {
          lp(e, t.alternate, t);
        } finally {
          Ze = u, V.p = s, T.T = i;
        }
      }
      ut = 3;
    }
  }
  function Rp() {
    if (ut === 4 || ut === 3) {
      ut = 0, or();
      var e = Qn, t = gi, i = En, s = kp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, gi = Qn = null, Zp(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Kn = null), fl(i), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        t = T.T, u = V.p, V.p = 2, T.T = null;
        try {
          for (var d = e.onRecoverableError, h = 0; h < s.length; h++) {
            var g = s[h];
            d(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          T.T = t, V.p = u;
        }
      }
      (En & 3) !== 0 && ns(), mn(e), u = e.pendingLanes, (i & 261930) !== 0 && (u & 42) !== 0 ? e === Pu ? wo++ : (wo = 0, Pu = e) : wo = 0, So(0);
    }
  }
  function Zp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, no(t)));
  }
  function ns() {
    return Np(), Dp(), Rp(), Up();
  }
  function Up() {
    if (ut !== 5) return !1;
    var e = Qn, t = Vu;
    Vu = 0;
    var i = fl(En), s = T.T, u = V.p;
    try {
      V.p = 32 > i ? 32 : i, T.T = null, i = Gu, Gu = null;
      var d = Qn, h = En;
      if (ut = 0, gi = Qn = null, En = 0, (Ze & 6) !== 0) throw Error(r(331));
      var g = Ze;
      if (Ze |= 4, vp(d.current), _p(
        d,
        d.current,
        h,
        i
      ), Ze = g, So(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(da, d);
        } catch {
        }
      return !0;
    } finally {
      V.p = u, T.T = s, Zp(e, t);
    }
  }
  function Hp(e, t, i) {
    t = Vt(i, t), t = xu(e.stateNode, t, 2), e = qn(e, t, 2), e !== null && (qi(e, 2), mn(e));
  }
  function He(e, t, i) {
    if (e.tag === 3)
      Hp(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hp(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Kn === null || !Kn.has(s))) {
            e = Vt(i, e), i = Bf(2), s = qn(t, i, 2), s !== null && (Yf(
              i,
              s,
              t,
              e
            ), qi(s, 2), mn(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ju(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new jg();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else
      u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(i) || (qu = !0, u.add(i), e = Mg.bind(null, e, t, i), t.then(e, e));
  }
  function Mg(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, Ve === e && (je & i) === i && (Fe === 4 || Fe === 3 && (je & 62914560) === je && 300 > wt() - Jr ? (Ze & 2) === 0 && bi(e, 0) : Xu |= i, vi === je && (vi = 0)), mn(e);
  }
  function Bp(e, t) {
    t === 0 && (t = Od()), e = ha(e, t), e !== null && (qi(e, t), mn(e));
  }
  function Og(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Bp(e, i);
  }
  function Ng(e, t) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var s = e.stateNode, u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    s !== null && s.delete(t), Bp(e, i);
  }
  function Dg(e, t) {
    return ua(e, t);
  }
  var as = null, wi = null, Wu = !1, is = !1, Fu = !1, Wn = 0;
  function mn(e) {
    e !== wi && e.next === null && (wi === null ? as = wi = e : wi = wi.next = e), is = !0, Wu || (Wu = !0, Zg());
  }
  function So(e, t) {
    if (!Fu && is) {
      Fu = !0;
      do
        for (var i = !1, s = as; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var h = s.suspendedLanes, g = s.pingedLanes;
              d = (1 << 31 - ct(42 | e) + 1) - 1, d &= u & ~(h & ~g), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (i = !0, Xp(s, d));
          } else
            d = je, d = tt(
              s,
              s === Ve ? d : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (d & 3) === 0 || $i(s, d) || (i = !0, Xp(s, d));
          s = s.next;
        }
      while (i);
      Fu = !1;
    }
  }
  function Rg() {
    Yp();
  }
  function Yp() {
    is = Wu = !1;
    var e = 0;
    Wn !== 0 && Gg() && (e = Wn);
    for (var t = wt(), i = null, s = as; s !== null; ) {
      var u = s.next, d = $p(s, t);
      d === 0 ? (s.next = null, i === null ? as = u : i.next = u, u === null && (wi = i)) : (i = s, (e !== 0 || (d & 3) !== 0) && (is = !0)), s = u;
    }
    ut !== 0 && ut !== 5 || So(e), Wn !== 0 && (Wn = 0);
  }
  function $p(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var h = 31 - ct(d), g = 1 << h, S = u[h];
      S === -1 ? ((g & i) === 0 || (g & s) !== 0) && (u[h] = lv(g, t)) : S <= t && (e.expiredLanes |= g), d &= ~g;
    }
    if (t = Ve, i = je, i = tt(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, i === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && Bi(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || $i(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (s !== null && Bi(s), fl(i)) {
        case 2:
        case 8:
          i = sr;
          break;
        case 32:
          i = $a;
          break;
        case 268435456:
          i = lr;
          break;
        default:
          i = $a;
      }
      return s = qp.bind(null, e), i = ua(i, s), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return s !== null && s !== null && Bi(s), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function qp(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (ns() && e.callbackNode !== i)
      return null;
    var s = je;
    return s = tt(
      e,
      e === Ve ? s : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s === 0 ? null : (Sp(e, s, t), $p(e, wt()), e.callbackNode != null && e.callbackNode === i ? qp.bind(null, e) : null);
  }
  function Xp(e, t) {
    if (ns()) return null;
    Sp(e, t, !0);
  }
  function Zg() {
    Kg(function() {
      (Ze & 6) !== 0 ? ua(
        Yi,
        Rg
      ) : Yp();
    });
  }
  function Iu() {
    if (Wn === 0) {
      var e = si;
      e === 0 && (e = qa, qa <<= 1, (qa & 261888) === 0 && (qa = 256)), Wn = e;
    }
    return Wn;
  }
  function Lp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mr("" + e);
  }
  function Vp(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function Ug(e, t, i, s, u) {
    if (t === "submit" && i && i.stateNode === u) {
      var d = Lp(
        (u[jt] || null).action
      ), h = s.submitter;
      h && (t = (t = h[jt] || null) ? Lp(t.formAction) : h.getAttribute("formAction"), t !== null && (d = t, h = null));
      var g = new hr(
        "action",
        "action",
        null,
        s,
        u
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (Wn !== 0) {
                  var S = h ? Vp(u, h) : new FormData(u);
                  gu(
                    i,
                    {
                      pending: !0,
                      data: S,
                      method: u.method,
                      action: d
                    },
                    null,
                    S
                  );
                }
              } else
                typeof d == "function" && (g.preventDefault(), S = h ? Vp(u, h) : new FormData(u), gu(
                  i,
                  {
                    pending: !0,
                    data: S,
                    method: u.method,
                    action: d
                  },
                  d,
                  S
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var ec = 0; ec < Zl.length; ec++) {
    var tc = Zl[ec], Hg = tc.toLowerCase(), Bg = tc[0].toUpperCase() + tc.slice(1);
    tn(
      Hg,
      "on" + Bg
    );
  }
  tn(km, "onAnimationEnd"), tn(wm, "onAnimationIteration"), tn(Sm, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(tg, "onTransitionRun"), tn(ng, "onTransitionStart"), tn(ag, "onTransitionCancel"), tn(zm, "onTransitionEnd"), Pa("onMouseEnter", ["mouseout", "mouseover"]), Pa("onMouseLeave", ["mouseout", "mouseover"]), Pa("onPointerEnter", ["pointerout", "pointerover"]), Pa("onPointerLeave", ["pointerout", "pointerover"]), ma(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ma(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ma("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ma(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Yg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo)
  );
  function Gp(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], u = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var h = s.length - 1; 0 <= h; h--) {
            var g = s[h], S = g.instance, C = g.currentTarget;
            if (g = g.listener, S !== d && u.isPropagationStopped())
              break e;
            d = g, u.currentTarget = C;
            try {
              d(u);
            } catch (R) {
              gr(R);
            }
            u.currentTarget = null, d = S;
          }
        else
          for (h = 0; h < s.length; h++) {
            if (g = s[h], S = g.instance, C = g.currentTarget, g = g.listener, S !== d && u.isPropagationStopped())
              break e;
            d = g, u.currentTarget = C;
            try {
              d(u);
            } catch (R) {
              gr(R);
            }
            u.currentTarget = null, d = S;
          }
      }
    }
  }
  function Se(e, t) {
    var i = t[pl];
    i === void 0 && (i = t[pl] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (Pp(t, e, 2, !1), i.add(s));
  }
  function nc(e, t, i) {
    var s = 0;
    t && (s |= 4), Pp(
      i,
      e,
      s,
      t
    );
  }
  var os = "_reactListening" + Math.random().toString(36).slice(2);
  function ac(e) {
    if (!e[os]) {
      e[os] = !0, Bd.forEach(function(i) {
        i !== "selectionchange" && (Yg.has(i) || nc(i, !1, e), nc(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[os] || (t[os] = !0, nc("selectionchange", !1, t));
    }
  }
  function Pp(e, t, i, s) {
    switch (w_(t)) {
      case 2:
        var u = pb;
        break;
      case 8:
        u = _b;
        break;
      default:
        u = vc;
    }
    i = u.bind(
      null,
      t,
      i,
      e
    ), u = void 0, !Sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
      passive: u
    }) : e.addEventListener(t, i, !1);
  }
  function ic(e, t, i, s, u) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var h = s.tag;
        if (h === 3 || h === 4) {
          var g = s.stateNode.containerInfo;
          if (g === u) break;
          if (h === 4)
            for (h = s.return; h !== null; ) {
              var S = h.tag;
              if ((S === 3 || S === 4) && h.stateNode.containerInfo === u)
                return;
              h = h.return;
            }
          for (; g !== null; ) {
            if (h = La(g), h === null) return;
            if (S = h.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              s = d = h;
              continue e;
            }
            g = g.parentNode;
          }
        }
        s = s.return;
      }
    Wd(function() {
      var C = d, R = kl(i), q = [];
      e: {
        var M = xm.get(e);
        if (M !== void 0) {
          var D = hr, se = e;
          switch (e) {
            case "keypress":
              if (pr(i) === 0) break e;
            case "keydown":
            case "keyup":
              D = Nv;
              break;
            case "focusin":
              se = "focus", D = Al;
              break;
            case "focusout":
              se = "blur", D = Al;
              break;
            case "beforeblur":
            case "afterblur":
              D = Al;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = em;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Zv;
              break;
            case km:
            case wm:
            case Sm:
              D = zv;
              break;
            case zm:
              D = Hv;
              break;
            case "scroll":
            case "scrollend":
              D = gv;
              break;
            case "wheel":
              D = Yv;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = jv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = nm;
              break;
            case "toggle":
            case "beforetoggle":
              D = qv;
          }
          var _e = (t & 4) !== 0, Xe = !_e && (e === "scroll" || e === "scrollend"), A = _e ? M !== null ? M + "Capture" : null : M;
          _e = [];
          for (var j = C, E; j !== null; ) {
            var H = j;
            if (E = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || E === null || A === null || (H = Vi(j, A), H != null && _e.push(
              xo(j, H, E)
            )), Xe) break;
            j = j.return;
          }
          0 < _e.length && (M = new D(
            M,
            se,
            null,
            i,
            R
          ), q.push({ event: M, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", M && i !== bl && (se = i.relatedTarget || i.fromElement) && (La(se) || se[Xa]))
            break e;
          if ((D || M) && (M = R.window === R ? R : (M = R.ownerDocument) ? M.defaultView || M.parentWindow : window, D ? (se = i.relatedTarget || i.toElement, D = C, se = se ? La(se) : null, se !== null && (Xe = c(se), _e = se.tag, se !== Xe || _e !== 5 && _e !== 27 && _e !== 6) && (se = null)) : (D = null, se = C), D !== se)) {
            if (_e = em, H = "onMouseLeave", A = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (_e = nm, H = "onPointerLeave", A = "onPointerEnter", j = "pointer"), Xe = D == null ? M : Li(D), E = se == null ? M : Li(se), M = new _e(
              H,
              j + "leave",
              D,
              i,
              R
            ), M.target = Xe, M.relatedTarget = E, H = null, La(R) === C && (_e = new _e(
              A,
              j + "enter",
              se,
              i,
              R
            ), _e.target = E, _e.relatedTarget = Xe, H = _e), Xe = H, D && se)
              t: {
                for (_e = $g, A = D, j = se, E = 0, H = A; H; H = _e(H))
                  E++;
                H = 0;
                for (var de = j; de; de = _e(de))
                  H++;
                for (; 0 < E - H; )
                  A = _e(A), E--;
                for (; 0 < H - E; )
                  j = _e(j), H--;
                for (; E--; ) {
                  if (A === j || j !== null && A === j.alternate) {
                    _e = A;
                    break t;
                  }
                  A = _e(A), j = _e(j);
                }
                _e = null;
              }
            else _e = null;
            D !== null && Kp(
              q,
              M,
              D,
              _e,
              !1
            ), se !== null && Xe !== null && Kp(
              q,
              Xe,
              se,
              _e,
              !0
            );
          }
        }
        e: {
          if (M = C ? Li(C) : window, D = M.nodeName && M.nodeName.toLowerCase(), D === "select" || D === "input" && M.type === "file")
            var Ne = cm;
          else if (lm(M))
            if (dm)
              Ne = Fv;
            else {
              Ne = Jv;
              var le = Qv;
            }
          else
            D = M.nodeName, !D || D.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? C && gl(C.elementType) && (Ne = cm) : Ne = Wv;
          if (Ne && (Ne = Ne(e, C))) {
            um(
              q,
              Ne,
              i,
              R
            );
            break e;
          }
          le && le(e, M, C), e === "focusout" && C && M.type === "number" && C.memoizedProps.value != null && vl(M, "number", M.value);
        }
        switch (le = C ? Li(C) : window, e) {
          case "focusin":
            (lm(le) || le.contentEditable === "true") && (Ia = le, Nl = C, Ii = null);
            break;
          case "focusout":
            Ii = Nl = Ia = null;
            break;
          case "mousedown":
            Dl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dl = !1, gm(q, i, R);
            break;
          case "selectionchange":
            if (eg) break;
          case "keydown":
          case "keyup":
            gm(q, i, R);
        }
        var be;
        if (El)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          Fa ? rm(e, i) && (Ae = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (am && i.locale !== "ko" && (Fa || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Fa && (be = Fd()) : (Rn = R, zl = "value" in Rn ? Rn.value : Rn.textContent, Fa = !0)), le = rs(C, Ae), 0 < le.length && (Ae = new tm(
          Ae,
          e,
          null,
          i,
          R
        ), q.push({ event: Ae, listeners: le }), be ? Ae.data = be : (be = sm(i), be !== null && (Ae.data = be)))), (be = Lv ? Vv(e, i) : Gv(e, i)) && (Ae = rs(C, "onBeforeInput"), 0 < Ae.length && (le = new tm(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          R
        ), q.push({
          event: le,
          listeners: Ae
        }), le.data = be)), Ug(
          q,
          e,
          C,
          i,
          R
        );
      }
      Gp(q, t);
    });
  }
  function xo(e, t, i) {
    return {
      instance: e,
      listener: t,
      currentTarget: i
    };
  }
  function rs(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = Vi(e, i), u != null && s.unshift(
        xo(e, u, d)
      ), u = Vi(e, t), u != null && s.push(
        xo(e, u, d)
      )), e.tag === 3) return s;
      e = e.return;
    }
    return [];
  }
  function $g(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Kp(e, t, i, s, u) {
    for (var d = t._reactName, h = []; i !== null && i !== s; ) {
      var g = i, S = g.alternate, C = g.stateNode;
      if (g = g.tag, S !== null && S === s) break;
      g !== 5 && g !== 26 && g !== 27 || C === null || (S = C, u ? (C = Vi(i, d), C != null && h.unshift(
        xo(i, C, S)
      )) : u || (C = Vi(i, d), C != null && h.push(
        xo(i, C, S)
      ))), i = i.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var qg = /\r\n?/g, Xg = /\u0000|\uFFFD/g;
  function Qp(e) {
    return (typeof e == "string" ? e : "" + e).replace(qg, `
`).replace(Xg, "");
  }
  function Jp(e, t) {
    return t = Qp(t), Qp(e) === t;
  }
  function qe(e, t, i, s, u, d) {
    switch (i) {
      case "children":
        typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Qa(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Qa(e, "" + s);
        break;
      case "className":
        cr(e, "class", s);
        break;
      case "tabIndex":
        cr(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cr(e, i, s);
        break;
      case "style":
        Qd(e, s, d);
        break;
      case "data":
        if (t !== "object") {
          cr(e, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(i);
          break;
        }
        s = mr("" + s), e.setAttribute(i, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (i === "formAction" ? (t !== "input" && qe(e, t, "name", u.name, u, null), qe(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), qe(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), qe(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (qe(e, t, "encType", u.encType, u, null), qe(e, t, "method", u.method, u, null), qe(e, t, "target", u.target, u, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(i);
          break;
        }
        s = mr("" + s), e.setAttribute(i, s);
        break;
      case "onClick":
        s != null && (e.onclick = pn);
        break;
      case "onScroll":
        s != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (i = s.__html, i != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        e.muted = s && typeof s != "function" && typeof s != "symbol";
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
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = mr("" + s), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
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
        s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, "" + s) : e.removeAttribute(i);
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
        s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        s === !0 ? e.setAttribute(i, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(i, s) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(i, s) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(i) : e.setAttribute(i, s);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), ur(e, "popover", s);
        break;
      case "xlinkActuate":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        ur(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = yv.get(i) || i, ur(e, i, s));
    }
  }
  function oc(e, t, i, s, u, d) {
    switch (i) {
      case "style":
        Qd(e, s, d);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (i = s.__html, i != null) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof s == "string" ? Qa(e, s) : (typeof s == "number" || typeof s == "bigint") && Qa(e, "" + s);
        break;
      case "onScroll":
        s != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Se("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = pn);
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
        if (!Yd.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (u = i.endsWith("Capture"), t = i.slice(2, u ? i.length - 7 : void 0), d = e[jt] || null, d = d != null ? d[i] : null, typeof d == "function" && e.removeEventListener(t, d, u), typeof s == "function")) {
              typeof d != "function" && d !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, s, u);
              break e;
            }
            i in e ? e[i] = s : s === !0 ? e.setAttribute(i, "") : ur(e, i, s);
          }
    }
  }
  function yt(e, t, i) {
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
        var s = !1, u = !1, d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var h = i[d];
            if (h != null)
              switch (d) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  qe(e, t, d, h, i, null);
              }
          }
        u && qe(e, t, "srcSet", i.srcSet, i, null), s && qe(e, t, "src", i.src, i, null);
        return;
      case "input":
        Se("invalid", e);
        var g = d = h = u = null, S = null, C = null;
        for (s in i)
          if (i.hasOwnProperty(s)) {
            var R = i[s];
            if (R != null)
              switch (s) {
                case "name":
                  u = R;
                  break;
                case "type":
                  h = R;
                  break;
                case "checked":
                  S = R;
                  break;
                case "defaultChecked":
                  C = R;
                  break;
                case "value":
                  d = R;
                  break;
                case "defaultValue":
                  g = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(r(137, t));
                  break;
                default:
                  qe(e, t, s, R, i, null);
              }
          }
        Vd(
          e,
          d,
          g,
          S,
          C,
          h,
          u,
          !1
        );
        return;
      case "select":
        Se("invalid", e), s = h = d = null;
        for (u in i)
          if (i.hasOwnProperty(u) && (g = i[u], g != null))
            switch (u) {
              case "value":
                d = g;
                break;
              case "defaultValue":
                h = g;
                break;
              case "multiple":
                s = g;
              default:
                qe(e, t, u, g, i, null);
            }
        t = d, i = h, e.multiple = !!s, t != null ? Ka(e, !!s, t, !1) : i != null && Ka(e, !!s, i, !0);
        return;
      case "textarea":
        Se("invalid", e), d = u = s = null;
        for (h in i)
          if (i.hasOwnProperty(h) && (g = i[h], g != null))
            switch (h) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
                d = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                qe(e, t, h, g, i, null);
            }
        Pd(e, s, u, d);
        return;
      case "option":
        for (S in i)
          i.hasOwnProperty(S) && (s = i[S], s != null) && (S === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : qe(e, t, S, s, i, null));
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
        for (s = 0; s < zo.length; s++)
          Se(zo[s], e);
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
        for (C in i)
          if (i.hasOwnProperty(C) && (s = i[C], s != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                qe(e, t, C, s, i, null);
            }
        return;
      default:
        if (gl(t)) {
          for (R in i)
            i.hasOwnProperty(R) && (s = i[R], s !== void 0 && oc(
              e,
              t,
              R,
              s,
              i,
              void 0
            ));
          return;
        }
    }
    for (g in i)
      i.hasOwnProperty(g) && (s = i[g], s != null && qe(e, t, g, s, i, null));
  }
  function Lg(e, t, i, s) {
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
        var u = null, d = null, h = null, g = null, S = null, C = null, R = null;
        for (D in i) {
          var q = i[D];
          if (i.hasOwnProperty(D) && q != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                s.hasOwnProperty(D) || qe(e, t, D, null, s, q);
            }
        }
        for (var M in s) {
          var D = s[M];
          if (q = i[M], s.hasOwnProperty(M) && (D != null || q != null))
            switch (M) {
              case "type":
                d = D;
                break;
              case "name":
                u = D;
                break;
              case "checked":
                C = D;
                break;
              case "defaultChecked":
                R = D;
                break;
              case "value":
                h = D;
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
                D !== q && qe(
                  e,
                  t,
                  M,
                  D,
                  s,
                  q
                );
            }
        }
        yl(
          e,
          h,
          g,
          S,
          C,
          R,
          d,
          u
        );
        return;
      case "select":
        D = h = g = M = null;
        for (d in i)
          if (S = i[d], i.hasOwnProperty(d) && S != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                D = S;
              default:
                s.hasOwnProperty(d) || qe(
                  e,
                  t,
                  d,
                  null,
                  s,
                  S
                );
            }
        for (u in s)
          if (d = s[u], S = i[u], s.hasOwnProperty(u) && (d != null || S != null))
            switch (u) {
              case "value":
                M = d;
                break;
              case "defaultValue":
                g = d;
                break;
              case "multiple":
                h = d;
              default:
                d !== S && qe(
                  e,
                  t,
                  u,
                  d,
                  s,
                  S
                );
            }
        t = g, i = h, s = D, M != null ? Ka(e, !!i, M, !1) : !!s != !!i && (t != null ? Ka(e, !!i, t, !0) : Ka(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        D = M = null;
        for (g in i)
          if (u = i[g], i.hasOwnProperty(g) && u != null && !s.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, g, null, s, u);
            }
        for (h in s)
          if (u = s[h], d = i[h], s.hasOwnProperty(h) && (u != null || d != null))
            switch (h) {
              case "value":
                M = u;
                break;
              case "defaultValue":
                D = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== d && qe(e, t, h, u, s, d);
            }
        Gd(e, M, D);
        return;
      case "option":
        for (var se in i)
          M = i[se], i.hasOwnProperty(se) && M != null && !s.hasOwnProperty(se) && (se === "selected" ? e.selected = !1 : qe(
            e,
            t,
            se,
            null,
            s,
            M
          ));
        for (S in s)
          M = s[S], D = i[S], s.hasOwnProperty(S) && M !== D && (M != null || D != null) && (S === "selected" ? e.selected = M && typeof M != "function" && typeof M != "symbol" : qe(
            e,
            t,
            S,
            M,
            s,
            D
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
        for (var _e in i)
          M = i[_e], i.hasOwnProperty(_e) && M != null && !s.hasOwnProperty(_e) && qe(e, t, _e, null, s, M);
        for (C in s)
          if (M = s[C], D = i[C], s.hasOwnProperty(C) && M !== D && (M != null || D != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(r(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  C,
                  M,
                  s,
                  D
                );
            }
        return;
      default:
        if (gl(t)) {
          for (var Xe in i)
            M = i[Xe], i.hasOwnProperty(Xe) && M !== void 0 && !s.hasOwnProperty(Xe) && oc(
              e,
              t,
              Xe,
              void 0,
              s,
              M
            );
          for (R in s)
            M = s[R], D = i[R], !s.hasOwnProperty(R) || M === D || M === void 0 && D === void 0 || oc(
              e,
              t,
              R,
              M,
              s,
              D
            );
          return;
        }
    }
    for (var A in i)
      M = i[A], i.hasOwnProperty(A) && M != null && !s.hasOwnProperty(A) && qe(e, t, A, null, s, M);
    for (q in s)
      M = s[q], D = i[q], !s.hasOwnProperty(q) || M === D || M == null && D == null || qe(e, t, q, M, s, D);
  }
  function Wp(e) {
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
      for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), s = 0; s < i.length; s++) {
        var u = i[s], d = u.transferSize, h = u.initiatorType, g = u.duration;
        if (d && g && Wp(h)) {
          for (h = 0, g = u.responseEnd, s += 1; s < i.length; s++) {
            var S = i[s], C = S.startTime;
            if (C > g) break;
            var R = S.transferSize, q = S.initiatorType;
            R && Wp(q) && (S = S.responseEnd, h += R * (S < g ? 1 : (g - C) / (S - C)));
          }
          if (--s, t += 8 * (d + h) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var rc = null, sc = null;
  function ss(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ip(e, t) {
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
  function lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uc = null;
  function Gg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === uc ? !1 : (uc = e, !0) : (uc = null, !1);
  }
  var e_ = typeof setTimeout == "function" ? setTimeout : void 0, Pg = typeof clearTimeout == "function" ? clearTimeout : void 0, t_ = typeof Promise == "function" ? Promise : void 0, Kg = typeof queueMicrotask == "function" ? queueMicrotask : typeof t_ < "u" ? function(e) {
    return t_.resolve(null).then(e).catch(Qg);
  } : e_;
  function Qg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fn(e) {
    return e === "head";
  }
  function n_(e, t) {
    var i = t, s = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8)
        if (i = u.data, i === "/$" || i === "/&") {
          if (s === 0) {
            e.removeChild(u), ji(t);
            return;
          }
          s--;
        } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
          s++;
        else if (i === "html")
          jo(e.ownerDocument.documentElement);
        else if (i === "head") {
          i = e.ownerDocument.head, jo(i);
          for (var d = i.firstChild; d; ) {
            var h = d.nextSibling, g = d.nodeName;
            d[Xi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || i.removeChild(d), d = h;
          }
        } else
          i === "body" && jo(e.ownerDocument.body);
      i = u;
    } while (i);
    ji(t);
  }
  function a_(e, t) {
    var i = e;
    e = 0;
    do {
      var s = i.nextSibling;
      if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), s && s.nodeType === 8)
        if (i = s.data, i === "/$") {
          if (e === 0) break;
          e--;
        } else
          i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
      i = s;
    } while (i);
  }
  function cc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cc(i), _l(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function Jg(e, t, i, s) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (s) {
        if (!e[Xi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Wg(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function i_(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function dc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function mc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Fg(e, t) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || i.readyState !== "loading")
      t();
    else {
      var s = function() {
        t(), i.removeEventListener("DOMContentLoaded", s);
      };
      i.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
    }
  }
  function Jt(e) {
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
  var fc = null;
  function o_(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "/$" || i === "/&") {
          if (t === 0)
            return Jt(e.nextSibling);
          t--;
        } else
          i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function r_(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (t === 0) return e;
          t--;
        } else i !== "/$" && i !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function s_(e, t, i) {
    switch (t = ss(i), e) {
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
  function jo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    _l(e);
  }
  var Wt = /* @__PURE__ */ new Map(), l_ = /* @__PURE__ */ new Set();
  function ls(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Cn = V.d;
  V.d = {
    f: Ig,
    r: eb,
    D: tb,
    C: nb,
    L: ab,
    m: ib,
    X: rb,
    S: ob,
    M: sb
  };
  function Ig() {
    var e = Cn.f(), t = Ir();
    return e || t;
  }
  function eb(e) {
    var t = Va(e);
    t !== null && t.tag === 5 && t.type === "form" ? xf(t) : Cn.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function u_(e, t, i) {
    var s = Si;
    if (s && typeof t == "string" && t) {
      var u = Xt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof i == "string" && (u += '[crossorigin="' + i + '"]'), l_.has(u) || (l_.add(u), e = { rel: e, crossOrigin: i, href: t }, s.querySelector(u) === null && (t = s.createElement("link"), yt(t, "link", e), dt(t), s.head.appendChild(t)));
    }
  }
  function tb(e) {
    Cn.D(e), u_("dns-prefetch", e, null);
  }
  function nb(e, t) {
    Cn.C(e, t), u_("preconnect", e, t);
  }
  function ab(e, t, i) {
    Cn.L(e, t, i);
    var s = Si;
    if (s && e && t) {
      var u = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (u += '[imagesrcset="' + Xt(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (u += '[imagesizes="' + Xt(
        i.imageSizes
      ) + '"]')) : u += '[href="' + Xt(e) + '"]';
      var d = u;
      switch (t) {
        case "style":
          d = zi(e);
          break;
        case "script":
          d = xi(e);
      }
      Wt.has(d) || (e = b(
        {
          rel: "preload",
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), Wt.set(d, e), s.querySelector(u) !== null || t === "style" && s.querySelector(Ao(d)) || t === "script" && s.querySelector(To(d)) || (t = s.createElement("link"), yt(t, "link", e), dt(t), s.head.appendChild(t)));
    }
  }
  function ib(e, t) {
    Cn.m(e, t);
    var i = Si;
    if (i && e) {
      var s = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Xt(s) + '"][href="' + Xt(e) + '"]', d = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = xi(e);
      }
      if (!Wt.has(d) && (e = b({ rel: "modulepreload", href: e }, t), Wt.set(d, e), i.querySelector(u) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(To(d)))
              return;
        }
        s = i.createElement("link"), yt(s, "link", e), dt(s), i.head.appendChild(s);
      }
    }
  }
  function ob(e, t, i) {
    Cn.S(e, t, i);
    var s = Si;
    if (s && e) {
      var u = Ga(s).hoistableStyles, d = zi(e);
      t = t || "default";
      var h = u.get(d);
      if (!h) {
        var g = { loading: 0, preload: null };
        if (h = s.querySelector(
          Ao(d)
        ))
          g.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = Wt.get(d)) && pc(e, i);
          var S = h = s.createElement("link");
          dt(S), yt(S, "link", e), S._p = new Promise(function(C, R) {
            S.onload = C, S.onerror = R;
          }), S.addEventListener("load", function() {
            g.loading |= 1;
          }), S.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, us(h, t, s);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: g
        }, u.set(d, h);
      }
    }
  }
  function rb(e, t) {
    Cn.X(e, t);
    var i = Si;
    if (i && e) {
      var s = Ga(i).hoistableScripts, u = xi(e), d = s.get(u);
      d || (d = i.querySelector(To(u)), d || (e = b({ src: e, async: !0 }, t), (t = Wt.get(u)) && _c(e, t), d = i.createElement("script"), dt(d), yt(d, "link", e), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function sb(e, t) {
    Cn.M(e, t);
    var i = Si;
    if (i && e) {
      var s = Ga(i).hoistableScripts, u = xi(e), d = s.get(u);
      d || (d = i.querySelector(To(u)), d || (e = b({ src: e, async: !0, type: "module" }, t), (t = Wt.get(u)) && _c(e, t), d = i.createElement("script"), dt(d), yt(d, "link", e), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function c_(e, t, i, s) {
    var u = (u = pe.current) ? ls(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = zi(i.href), i = Ga(
          u
        ).hoistableStyles, s = i.get(t), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = zi(i.href);
          var d = Ga(
            u
          ).hoistableStyles, h = d.get(e);
          if (h || (u = u.ownerDocument || u, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, h), (d = u.querySelector(
            Ao(e)
          )) && !d._p && (h.instance = d, h.state.loading = 5), Wt.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Wt.set(e, i), d || lb(
            u,
            e,
            i,
            h.state
          ))), t && s === null)
            throw Error(r(528, ""));
          return h;
        }
        if (t && s !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(i), i = Ga(
          u
        ).hoistableScripts, s = i.get(t), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function zi(e) {
    return 'href="' + Xt(e) + '"';
  }
  function Ao(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function d_(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function lb(e, t, i, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
      return s.loading |= 1;
    }), t.addEventListener("error", function() {
      return s.loading |= 2;
    }), yt(t, "link", i), dt(t), e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function To(e) {
    return "script[async]" + e;
  }
  function m_(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var s = e.querySelector(
            'style[data-href~="' + Xt(i.href) + '"]'
          );
          if (s)
            return t.instance = s, dt(s), s;
          var u = b({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return s = (e.ownerDocument || e).createElement(
            "style"
          ), dt(s), yt(s, "style", u), us(s, i.precedence, e), t.instance = s;
        case "stylesheet":
          u = zi(i.href);
          var d = e.querySelector(
            Ao(u)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, dt(d), d;
          s = d_(i), (u = Wt.get(u)) && pc(s, u), d = (e.ownerDocument || e).createElement("link"), dt(d);
          var h = d;
          return h._p = new Promise(function(g, S) {
            h.onload = g, h.onerror = S;
          }), yt(d, "link", s), t.state.loading |= 4, us(d, i.precedence, e), t.instance = d;
        case "script":
          return d = xi(i.src), (u = e.querySelector(
            To(d)
          )) ? (t.instance = u, dt(u), u) : (s = i, (u = Wt.get(d)) && (s = b({}, i), _c(s, u)), e = e.ownerDocument || e, u = e.createElement("script"), dt(u), yt(u, "link", s), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, us(s, i.precedence, e));
    return t.instance;
  }
  function us(e, t, i) {
    for (var s = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = s.length ? s[s.length - 1] : null, d = u, h = 0; h < s.length; h++) {
      var g = s[h];
      if (g.dataset.precedence === t) d = g;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function pc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function _c(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var cs = null;
  function f_(e, t, i) {
    if (cs === null) {
      var s = /* @__PURE__ */ new Map(), u = cs = /* @__PURE__ */ new Map();
      u.set(i, s);
    } else
      u = cs, s = u.get(i), s || (s = /* @__PURE__ */ new Map(), u.set(i, s));
    if (s.has(e)) return s;
    for (s.set(e, null), i = i.getElementsByTagName(e), u = 0; u < i.length; u++) {
      var d = i[u];
      if (!(d[Xi] || d[ft] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = d.getAttribute(t) || "";
        h = e + h;
        var g = s.get(h);
        g ? g.push(d) : s.set(h, [d]);
      }
    }
    return s;
  }
  function p_(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ub(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
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
  function __(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function cb(e, t, i, s) {
    if (i.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (i.state.loading & 4) === 0) {
      if (i.instance === null) {
        var u = zi(s.href), d = t.querySelector(
          Ao(u)
        );
        if (d) {
          t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ds.bind(e), t.then(e, e)), i.state.loading |= 4, i.instance = d, dt(d);
          return;
        }
        d = t.ownerDocument || t, s = d_(s), (u = Wt.get(u)) && pc(s, u), d = d.createElement("link"), dt(d);
        var h = d;
        h._p = new Promise(function(g, S) {
          h.onload = g, h.onerror = S;
        }), yt(d, "link", s), i.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(i, t), (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++, i = ds.bind(e), t.addEventListener("load", i), t.addEventListener("error", i));
    }
  }
  var hc = 0;
  function db(e, t) {
    return e.stylesheets && e.count === 0 && fs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(i) {
      var s = setTimeout(function() {
        if (e.stylesheets && fs(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + t);
      0 < e.imgBytes && hc === 0 && (hc = 62500 * Vg());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && fs(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > hc ? 50 : 800) + t
      );
      return e.unsuspend = i, function() {
        e.unsuspend = null, clearTimeout(s), clearTimeout(u);
      };
    } : null;
  }
  function ds() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) fs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ms = null;
  function fs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ms = /* @__PURE__ */ new Map(), t.forEach(mb, e), ms = null, ds.call(e));
  }
  function mb(e, t) {
    if (!(t.state.loading & 4)) {
      var i = ms.get(e);
      if (i) var s = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), ms.set(e, i);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var h = u[d];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (i.set(h.dataset.precedence, h), s = h);
        }
        s && i.set(null, s);
      }
      u = t.instance, h = u.getAttribute("data-precedence"), d = i.get(h) || s, d === s && i.set(null, u), i.set(h, u), this.count++, s = ds.bind(this), u.addEventListener("load", s), u.addEventListener("error", s), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Eo = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function fb(e, t, i, s, u, d, h, g, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dl(0), this.hiddenUpdates = dl(null), this.identifierPrefix = s, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function h_(e, t, i, s, u, d, h, g, S, C, R, q) {
    return e = new fb(
      e,
      t,
      i,
      h,
      S,
      C,
      R,
      q,
      g
    ), t = 1, d === !0 && (t |= 24), d = Rt(3, null, null, t), e.current = d, d.stateNode = e, t = Ql(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: s,
      isDehydrated: i,
      cache: t
    }, Il(d), e;
  }
  function y_(e) {
    return e ? (e = ni, e) : ni;
  }
  function v_(e, t, i, s, u, d) {
    u = y_(u), s.context === null ? s.context = u : s.pendingContext = u, s = $n(t), s.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (s.callback = d), i = qn(e, s, t), i !== null && (Ot(i, e, t), ro(i, e, t));
  }
  function g_(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function yc(e, t) {
    g_(e, t), (e = e.alternate) && g_(e, t);
  }
  function b_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ha(e, 67108864);
      t !== null && Ot(t, e, 67108864), yc(e, 67108864);
    }
  }
  function k_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = ml(t);
      var i = ha(e, t);
      i !== null && Ot(i, e, t), yc(e, t);
    }
  }
  var ps = !0;
  function pb(e, t, i, s) {
    var u = T.T;
    T.T = null;
    var d = V.p;
    try {
      V.p = 2, vc(e, t, i, s);
    } finally {
      V.p = d, T.T = u;
    }
  }
  function _b(e, t, i, s) {
    var u = T.T;
    T.T = null;
    var d = V.p;
    try {
      V.p = 8, vc(e, t, i, s);
    } finally {
      V.p = d, T.T = u;
    }
  }
  function vc(e, t, i, s) {
    if (ps) {
      var u = gc(s);
      if (u === null)
        ic(
          e,
          t,
          s,
          _s,
          i
        ), S_(e, s);
      else if (yb(
        u,
        e,
        t,
        i,
        s
      ))
        s.stopPropagation();
      else if (S_(e, s), t & 4 && -1 < hb.indexOf(e)) {
        for (; u !== null; ) {
          var d = Va(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var h = re(d.pendingLanes);
                  if (h !== 0) {
                    var g = d;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; h; ) {
                      var S = 1 << 31 - ct(h);
                      g.entanglements[1] |= S, h &= ~S;
                    }
                    mn(d), (Ze & 6) === 0 && (Wr = wt() + 500, So(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ha(d, 2), g !== null && Ot(g, d, 2), Ir(), yc(d, 2);
            }
          if (d = gc(s), d === null && ic(
            e,
            t,
            s,
            _s,
            i
          ), d === u) break;
          u = d;
        }
        u !== null && s.stopPropagation();
      } else
        ic(
          e,
          t,
          s,
          null,
          i
        );
    }
  }
  function gc(e) {
    return e = kl(e), bc(e);
  }
  var _s = null;
  function bc(e) {
    if (_s = null, e = La(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (i === 31) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return _s = e, null;
  }
  function w_(e) {
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
        switch (rr()) {
          case Yi:
            return 2;
          case sr:
            return 8;
          case $a:
          case ca:
            return 32;
          case lr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1, In = null, ea = null, ta = null, Co = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), na = [], hb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function S_(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        Co.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mo.delete(t.pointerId);
    }
  }
  function Oo(e, t, i, s, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: s,
      nativeEvent: d,
      targetContainers: [u]
    }, t !== null && (t = Va(t), t !== null && b_(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function yb(e, t, i, s, u) {
    switch (t) {
      case "focusin":
        return In = Oo(
          In,
          e,
          t,
          i,
          s,
          u
        ), !0;
      case "dragenter":
        return ea = Oo(
          ea,
          e,
          t,
          i,
          s,
          u
        ), !0;
      case "mouseover":
        return ta = Oo(
          ta,
          e,
          t,
          i,
          s,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return Co.set(
          d,
          Oo(
            Co.get(d) || null,
            e,
            t,
            i,
            s,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, Mo.set(
          d,
          Oo(
            Mo.get(d) || null,
            e,
            t,
            i,
            s,
            u
          )
        ), !0;
    }
    return !1;
  }
  function z_(e) {
    var t = La(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = m(i), t !== null) {
            e.blockedOn = t, Ud(e.priority, function() {
              k_(i);
            });
            return;
          }
        } else if (t === 31) {
          if (t = f(i), t !== null) {
            e.blockedOn = t, Ud(e.priority, function() {
              k_(i);
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function hs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = gc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(
          i.type,
          i
        );
        bl = s, i.target.dispatchEvent(s), bl = null;
      } else
        return t = Va(i), t !== null && b_(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function x_(e, t, i) {
    hs(e) && i.delete(t);
  }
  function vb() {
    kc = !1, In !== null && hs(In) && (In = null), ea !== null && hs(ea) && (ea = null), ta !== null && hs(ta) && (ta = null), Co.forEach(x_), Mo.forEach(x_);
  }
  function ys(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kc || (kc = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      vb
    )));
  }
  var vs = null;
  function j_(e) {
    vs !== e && (vs = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        vs === e && (vs = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], s = e[t + 1], u = e[t + 2];
          if (typeof s != "function") {
            if (bc(s || i) === null)
              continue;
            break;
          }
          var d = Va(i);
          d !== null && (e.splice(t, 3), t -= 3, gu(
            d,
            {
              pending: !0,
              data: u,
              method: i.method,
              action: s
            },
            s,
            u
          ));
        }
      }
    ));
  }
  function ji(e) {
    function t(S) {
      return ys(S, e);
    }
    In !== null && ys(In, e), ea !== null && ys(ea, e), ta !== null && ys(ta, e), Co.forEach(t), Mo.forEach(t);
    for (var i = 0; i < na.length; i++) {
      var s = na[i];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < na.length && (i = na[0], i.blockedOn === null); )
      z_(i), i.blockedOn === null && na.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (s = 0; s < i.length; s += 3) {
        var u = i[s], d = i[s + 1], h = u[jt] || null;
        if (typeof d == "function")
          h || j_(i);
        else if (h) {
          var g = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, h = d[jt] || null)
              g = h.formAction;
            else if (bc(u) !== null) continue;
          } else g = h.action;
          typeof g == "function" ? i[s + 1] = g : (i.splice(s, 3), s -= 3), j_(i);
        }
      }
  }
  function A_() {
    function e(d) {
      d.canIntercept && d.info === "react-transition" && d.intercept({
        handler: function() {
          return new Promise(function(h) {
            return u = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), s || setTimeout(i, 20);
    }
    function i() {
      if (!s && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, {
          state: d.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(i, 100), function() {
        s = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function wc(e) {
    this._internalRoot = e;
  }
  gs.prototype.render = wc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var i = t.current, s = Yt();
    v_(i, s, e, t, null, null);
  }, gs.prototype.unmount = wc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      v_(e.current, 2, null, e, null, null), Ir(), t[Xa] = null;
    }
  };
  function gs(e) {
    this._internalRoot = e;
  }
  gs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Zd();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < na.length && t !== 0 && t < na[i].priority; i++) ;
      na.splice(i, 0, e), i === 0 && z_(e);
    }
  };
  var T_ = a.version;
  if (T_ !== "19.2.8")
    throw Error(
      r(
        527,
        T_,
        "19.2.8"
      )
    );
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var gb = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bs.isDisabled && bs.supportsFiber)
      try {
        da = bs.inject(
          gb
        ), St = bs;
      } catch {
      }
  }
  return Do.createRoot = function(e, t) {
    if (!l(e)) throw Error(r(299));
    var i = !1, s = "", u = Rf, d = Zf, h = Uf;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError)), t = h_(
      e,
      1,
      !1,
      null,
      null,
      i,
      s,
      null,
      u,
      d,
      h,
      A_
    ), e[Xa] = t.current, ac(e), new wc(t);
  }, Do.hydrateRoot = function(e, t, i) {
    if (!l(e)) throw Error(r(299));
    var s = !1, u = "", d = Rf, h = Zf, g = Uf, S = null;
    return i != null && (i.unstable_strictMode === !0 && (s = !0), i.identifierPrefix !== void 0 && (u = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (h = i.onCaughtError), i.onRecoverableError !== void 0 && (g = i.onRecoverableError), i.formState !== void 0 && (S = i.formState)), t = h_(
      e,
      1,
      !0,
      t,
      i ?? null,
      s,
      u,
      S,
      d,
      h,
      g,
      A_
    ), t.context = y_(null), i = t.current, s = Yt(), s = ml(s), u = $n(s), u.callback = null, qn(i, u, s), i = s, t.current.lanes = i, qi(t, i), mn(t), e[Xa] = t.current, ac(e), new gs(t);
  }, Do.version = "19.2.8", Do;
}
var H_;
function Eb() {
  if (H_) return zc.exports;
  H_ = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), zc.exports = Tb(), zc.exports;
}
var Cb = Eb();
const Mb = /* @__PURE__ */ Rh(Cb);
var F = td();
const Ws = /* @__PURE__ */ Rh(F);
const Zh = (...n) => n.filter((a, o, r) => !!a && a.trim() !== "" && r.indexOf(a) === o).join(" ").trim();
const Ob = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Nb = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, o, r) => r ? r.toUpperCase() : o.toLowerCase()
);
const B_ = (n) => {
  const a = Nb(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var Db = {
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
const Rb = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
};
const Zb = F.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: c,
    iconNode: m,
    ...f
  }, p) => F.createElement(
    "svg",
    {
      ref: p,
      ...Db,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: r ? Number(o) * 24 / Number(a) : o,
      className: Zh("lucide", l),
      ...!c && !Rb(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...m.map(([y, v]) => F.createElement(y, v)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
const Ee = (n, a) => {
  const o = F.forwardRef(
    ({ className: r, ...l }, c) => F.createElement(Zb, {
      ref: c,
      iconNode: a,
      className: Zh(
        `lucide-${Ob(B_(n))}`,
        `lucide-${n}`,
        r
      ),
      ...l
    })
  );
  return o.displayName = B_(n), o;
};
const Ub = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Uh = Ee("arrow-down-to-line", Ub);
const Hb = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Hh = Ee("arrow-down", Hb);
const Bb = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Yb = Ee("arrow-up-from-line", Bb);
const $b = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Bh = Ee("arrow-up", $b);
const qb = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Xb = Ee("battery", qb);
const Lb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Vb = Ee("check", Lb);
const Gb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Yh = Ee("circle-check", Gb);
const Pb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], $h = Ee("circle-x", Pb);
const Kb = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Qb = Ee("clock-3", Kb);
const Jb = [
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
], Wb = Ee("droplets", Jb);
const Fb = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Ib = Ee("eraser", Fb);
const e0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], t0 = Ee("history", e0);
const n0 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Y_ = Ee("house", n0);
const a0 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], $_ = Ee("loader-circle", a0);
const i0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], o0 = Ee("lock-open", i0);
const r0 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], qh = Ee("lock", r0);
const s0 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], l0 = Ee("map-pin", s0);
const u0 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], c0 = Ee("pause", u0);
const d0 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Xh = Ee("play", d0);
const m0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Lh = Ee("plus", m0);
const f0 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], p0 = Ee("refresh-cw", f0);
const _0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], nd = Ee("rotate-ccw", _0);
const h0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], y0 = Ee("scan-line", h0);
const v0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], g0 = Ee("sliders-horizontal", v0);
const b0 = [
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
], Lc = Ee("sparkles", b0);
const k0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], w0 = Ee("square", k0);
const S0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], z0 = Ee("timer", S0);
const x0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Us = Ee("trash-2", x0);
const j0 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Vh = Ee("triangle-alert", j0);
const A0 = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
], T0 = Ee("wand-sparkles", A0);
const E0 = [
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
], q_ = Ee("waves", E0);
const C0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], X_ = Ee("wind", C0);
const M0 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], O0 = Ee("wrench", M0);
const N0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ad = Ee("x", N0);
const D0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], R0 = Ee("zoom-in", D0);
const Z0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], U0 = Ee("zoom-out", Z0);
var L_;
function Y(n, a, o) {
  function r(f, p) {
    if (f._zod || Object.defineProperty(f, "_zod", {
      value: {
        def: p,
        constr: m,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), f._zod.traits.has(n))
      return;
    f._zod.traits.add(n), a(f, p);
    const y = m.prototype, v = Object.keys(y);
    for (let b = 0; b < v.length; b++) {
      const w = v[b];
      w in f || (f[w] = y[w].bind(f));
    }
  }
  const l = o?.Parent ?? Object;
  class c extends l {
  }
  Object.defineProperty(c, "name", { value: n });
  function m(f) {
    var p;
    const y = o?.Parent ? new c() : this;
    r(y, f), (p = y._zod).deferred ?? (p.deferred = []);
    for (const v of y._zod.deferred)
      v();
    return y;
  }
  return Object.defineProperty(m, "init", { value: r }), Object.defineProperty(m, Symbol.hasInstance, {
    value: (f) => o?.Parent && f instanceof o.Parent ? !0 : f?._zod?.traits?.has(n)
  }), Object.defineProperty(m, "name", { value: n }), m;
}
class Ei extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Gh extends Error {
  constructor(a) {
    super(`Encountered unidirectional transform during encode: ${a}`), this.name = "ZodEncodeError";
  }
}
(L_ = globalThis).__zod_globalConfig ?? (L_.__zod_globalConfig = {});
const id = globalThis.__zod_globalConfig;
function Da(n) {
  return id;
}
function Ph(n) {
  const a = Object.values(n).filter((r) => typeof r == "number");
  return Object.entries(n).filter(([r, l]) => a.indexOf(+r) === -1).map(([r, l]) => l);
}
function Vc(n, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function od(n) {
  return {
    get value() {
      {
        const a = n();
        return Object.defineProperty(this, "value", { value: a }), a;
      }
    }
  };
}
function rd(n) {
  return n == null;
}
function sd(n) {
  const a = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(a, o);
}
function H0(n, a) {
  const o = n / a, r = Math.round(o), l = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - r) < l ? 0 : o - r;
}
const V_ = /* @__PURE__ */ Symbol("evaluating");
function Le(n, a, o) {
  let r;
  Object.defineProperty(n, a, {
    get() {
      if (r !== V_)
        return r === void 0 && (r = V_, r = o()), r;
    },
    set(l) {
      Object.defineProperty(n, a, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Za(n, a, o) {
  Object.defineProperty(n, a, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ra(...n) {
  const a = {};
  for (const o of n) {
    const r = Object.getOwnPropertyDescriptors(o);
    Object.assign(a, r);
  }
  return Object.defineProperties({}, a);
}
function G_(n) {
  return JSON.stringify(n);
}
function B0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Kh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Hs(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const Y0 = /* @__PURE__ */ od(() => {
  if (id.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Vo(n) {
  if (Hs(n) === !1)
    return !1;
  const a = n.constructor;
  if (a === void 0 || typeof a != "function")
    return !0;
  const o = a.prototype;
  return !(Hs(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Qh(n) {
  return Vo(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const $0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ni(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function sa(n, a, o) {
  const r = new n._zod.constr(a ?? n._zod.def);
  return (!a || o?.parent) && (r._zod.parent = n), r;
}
function me(n) {
  const a = n;
  if (!a)
    return {};
  if (typeof a == "string")
    return { error: () => a };
  if (a?.message !== void 0) {
    if (a?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  return delete a.message, typeof a.error == "string" ? { ...a, error: () => a.error } : a;
}
function q0(n) {
  return Object.keys(n).filter((a) => n[a]._zod.optin === "optional" && n[a]._zod.optout === "optional");
}
const X0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function L0(n, a) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = ra(n._zod.def, {
    get shape() {
      const m = {};
      for (const f in a) {
        if (!(f in o.shape))
          throw new Error(`Unrecognized key: "${f}"`);
        a[f] && (m[f] = o.shape[f]);
      }
      return Za(this, "shape", m), m;
    },
    checks: []
  });
  return sa(n, c);
}
function V0(n, a) {
  const o = n._zod.def, r = o.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = ra(n._zod.def, {
    get shape() {
      const m = { ...n._zod.def.shape };
      for (const f in a) {
        if (!(f in o.shape))
          throw new Error(`Unrecognized key: "${f}"`);
        a[f] && delete m[f];
      }
      return Za(this, "shape", m), m;
    },
    checks: []
  });
  return sa(n, c);
}
function G0(n, a) {
  if (!Vo(a))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const c = n._zod.def.shape;
    for (const m in a)
      if (Object.getOwnPropertyDescriptor(c, m) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const l = ra(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...a };
      return Za(this, "shape", c), c;
    }
  });
  return sa(n, l);
}
function P0(n, a) {
  if (!Vo(a))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = ra(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...a };
      return Za(this, "shape", r), r;
    }
  });
  return sa(n, o);
}
function K0(n, a) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const o = ra(n._zod.def, {
    get shape() {
      const r = { ...n._zod.def.shape, ...a._zod.def.shape };
      return Za(this, "shape", r), r;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: a._zod.def.checks ?? []
  });
  return sa(n, o);
}
function Q0(n, a, o) {
  const l = a._zod.def.checks;
  if (l && l.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const m = ra(a._zod.def, {
    get shape() {
      const f = a._zod.def.shape, p = { ...f };
      if (o)
        for (const y in o) {
          if (!(y in f))
            throw new Error(`Unrecognized key: "${y}"`);
          o[y] && (p[y] = n ? new n({
            type: "optional",
            innerType: f[y]
          }) : f[y]);
        }
      else
        for (const y in f)
          p[y] = n ? new n({
            type: "optional",
            innerType: f[y]
          }) : f[y];
      return Za(this, "shape", p), p;
    },
    checks: []
  });
  return sa(a, m);
}
function J0(n, a, o) {
  const r = ra(a._zod.def, {
    get shape() {
      const l = a._zod.def.shape, c = { ...l };
      if (o)
        for (const m in o) {
          if (!(m in c))
            throw new Error(`Unrecognized key: "${m}"`);
          o[m] && (c[m] = new n({
            type: "nonoptional",
            innerType: l[m]
          }));
        }
      else
        for (const m in l)
          c[m] = new n({
            type: "nonoptional",
            innerType: l[m]
          });
      return Za(this, "shape", c), c;
    }
  });
  return sa(a, r);
}
function Ai(n, a = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = a; o < n.issues.length; o++)
    if (n.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function W0(n, a = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = a; o < n.issues.length; o++)
    if (n.issues[o]?.continue === !1)
      return !0;
  return !1;
}
function Jh(n, a) {
  return a.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(n), o;
  });
}
function ks(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ra(n, a, o) {
  const r = n.message ? n.message : ks(n.inst?._zod.def?.error?.(n)) ?? ks(a?.error?.(n)) ?? ks(o.customError?.(n)) ?? ks(o.localeError?.(n)) ?? "Invalid input", { inst: l, continue: c, input: m, ...f } = n;
  return f.path ?? (f.path = []), f.message = r, a?.reportInput && (f.input = m), f;
}
function ld(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Go(...n) {
  const [a, o, r] = n;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: o,
    inst: r
  } : { ...a };
}
const Wh = (n, a) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: a,
    enumerable: !1
  }), n.message = JSON.stringify(a, Vc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Fh = Y("$ZodError", Wh), Ih = Y("$ZodError", Wh, { Parent: Error });
function F0(n, a = (o) => o.message) {
  const o = {}, r = [];
  for (const l of n.issues)
    l.path.length > 0 ? (o[l.path[0]] = o[l.path[0]] || [], o[l.path[0]].push(a(l))) : r.push(a(l));
  return { formErrors: r, fieldErrors: o };
}
function I0(n, a = (o) => o.message) {
  const o = { _errors: [] }, r = (l, c = []) => {
    for (const m of l.issues)
      if (m.code === "invalid_union" && m.errors.length)
        m.errors.map((f) => r({ issues: f }, [...c, ...m.path]));
      else if (m.code === "invalid_key")
        r({ issues: m.issues }, [...c, ...m.path]);
      else if (m.code === "invalid_element")
        r({ issues: m.issues }, [...c, ...m.path]);
      else {
        const f = [...c, ...m.path];
        if (f.length === 0)
          o._errors.push(a(m));
        else {
          let p = o, y = 0;
          for (; y < f.length; ) {
            const v = f[y];
            y === f.length - 1 ? (p[v] = p[v] || { _errors: [] }, p[v]._errors.push(a(m))) : p[v] = p[v] || { _errors: [] }, p = p[v], y++;
          }
        }
      }
  };
  return r(n), o;
}
const ud = (n) => (a, o, r, l) => {
  const c = r ? { ...r, async: !1 } : { async: !1 }, m = a._zod.run({ value: o, issues: [] }, c);
  if (m instanceof Promise)
    throw new Ei();
  if (m.issues.length) {
    const f = new (l?.Err ?? n)(m.issues.map((p) => Ra(p, c, Da())));
    throw Kh(f, l?.callee), f;
  }
  return m.value;
}, cd = (n) => async (a, o, r, l) => {
  const c = r ? { ...r, async: !0 } : { async: !0 };
  let m = a._zod.run({ value: o, issues: [] }, c);
  if (m instanceof Promise && (m = await m), m.issues.length) {
    const f = new (l?.Err ?? n)(m.issues.map((p) => Ra(p, c, Da())));
    throw Kh(f, l?.callee), f;
  }
  return m.value;
}, Fs = (n) => (a, o, r) => {
  const l = r ? { ...r, async: !1 } : { async: !1 }, c = a._zod.run({ value: o, issues: [] }, l);
  if (c instanceof Promise)
    throw new Ei();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? Fh)(c.issues.map((m) => Ra(m, l, Da())))
  } : { success: !0, data: c.value };
}, e1 = /* @__PURE__ */ Fs(Ih), Is = (n) => async (a, o, r) => {
  const l = r ? { ...r, async: !0 } : { async: !0 };
  let c = a._zod.run({ value: o, issues: [] }, l);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((m) => Ra(m, l, Da())))
  } : { success: !0, data: c.value };
}, t1 = /* @__PURE__ */ Is(Ih), n1 = (n) => (a, o, r) => {
  const l = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return ud(n)(a, o, l);
}, a1 = (n) => (a, o, r) => ud(n)(a, o, r), i1 = (n) => async (a, o, r) => {
  const l = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return cd(n)(a, o, l);
}, o1 = (n) => async (a, o, r) => cd(n)(a, o, r), r1 = (n) => (a, o, r) => {
  const l = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Fs(n)(a, o, l);
}, s1 = (n) => (a, o, r) => Fs(n)(a, o, r), l1 = (n) => async (a, o, r) => {
  const l = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return Is(n)(a, o, l);
}, u1 = (n) => async (a, o, r) => Is(n)(a, o, r), c1 = /^[cC][0-9a-z]{6,}$/, d1 = /^[0-9a-z]+$/, m1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, f1 = /^[0-9a-vA-V]{20}$/, p1 = /^[A-Za-z0-9]{27}$/, _1 = /^[a-zA-Z0-9_-]{21}$/, h1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, y1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, P_ = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, v1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, g1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function b1() {
  return new RegExp(g1, "u");
}
const k1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, w1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, S1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, z1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, x1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ey = /^[A-Za-z0-9_-]*$/, j1 = /^https?$/, A1 = /^\+[1-9]\d{6,14}$/, ty = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", T1 = /* @__PURE__ */ new RegExp(`^${ty}$`);
function ny(n) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${a}` : n.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${n.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function E1(n) {
  return new RegExp(`^${ny(n)}$`);
}
function C1(n) {
  const a = ny({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${a}(?:${o.join("|")})`;
  return new RegExp(`^${ty}T(?:${r})$`);
}
const M1 = (n) => {
  const a = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, O1 = /^-?\d+$/, N1 = /^-?\d+(?:\.\d+)?$/, D1 = /^(?:true|false)$/i, R1 = /^[^A-Z]*$/, Z1 = /^[^a-z]*$/, Nt = /* @__PURE__ */ Y("$ZodCheck", (n, a) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = a, (o = n._zod).onattach ?? (o.onattach = []);
}), ay = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, iy = /* @__PURE__ */ Y("$ZodCheckLessThan", (n, a) => {
  Nt.init(n, a);
  const o = ay[typeof a.value];
  n._zod.onattach.push((r) => {
    const l = r._zod.bag, c = (a.inclusive ? l.maximum : l.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    a.value < c && (a.inclusive ? l.maximum = a.value : l.exclusiveMaximum = a.value);
  }), n._zod.check = (r) => {
    (a.inclusive ? r.value <= a.value : r.value < a.value) || r.issues.push({
      origin: o,
      code: "too_big",
      maximum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: r.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), oy = /* @__PURE__ */ Y("$ZodCheckGreaterThan", (n, a) => {
  Nt.init(n, a);
  const o = ay[typeof a.value];
  n._zod.onattach.push((r) => {
    const l = r._zod.bag, c = (a.inclusive ? l.minimum : l.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    a.value > c && (a.inclusive ? l.minimum = a.value : l.exclusiveMinimum = a.value);
  }), n._zod.check = (r) => {
    (a.inclusive ? r.value >= a.value : r.value > a.value) || r.issues.push({
      origin: o,
      code: "too_small",
      minimum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: r.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), U1 = /* @__PURE__ */ Y("$ZodCheckMultipleOf", (n, a) => {
  Nt.init(n, a), n._zod.onattach.push((o) => {
    var r;
    (r = o._zod.bag).multipleOf ?? (r.multipleOf = a.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof a.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % a.value === BigInt(0) : H0(o.value, a.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), H1 = /* @__PURE__ */ Y("$ZodCheckNumberFormat", (n, a) => {
  Nt.init(n, a), a.format = a.format || "float64";
  const o = a.format?.includes("int"), r = o ? "int" : "number", [l, c] = X0[a.format];
  n._zod.onattach.push((m) => {
    const f = m._zod.bag;
    f.format = a.format, f.minimum = l, f.maximum = c, o && (f.pattern = O1);
  }), n._zod.check = (m) => {
    const f = m.value;
    if (o) {
      if (!Number.isInteger(f)) {
        m.issues.push({
          expected: r,
          format: a.format,
          code: "invalid_type",
          continue: !1,
          input: f,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(f)) {
        f > 0 ? m.issues.push({
          input: f,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !a.abort
        }) : m.issues.push({
          input: f,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: r,
          inclusive: !0,
          continue: !a.abort
        });
        return;
      }
    }
    f < l && m.issues.push({
      origin: "number",
      input: f,
      code: "too_small",
      minimum: l,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    }), f > c && m.issues.push({
      origin: "number",
      input: f,
      code: "too_big",
      maximum: c,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    });
  };
}), B1 = /* @__PURE__ */ Y("$ZodCheckMaxLength", (n, a) => {
  var o;
  Nt.init(n, a), (o = n._zod.def).when ?? (o.when = (r) => {
    const l = r.value;
    return !rd(l) && l.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const l = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < l && (r._zod.bag.maximum = a.maximum);
  }), n._zod.check = (r) => {
    const l = r.value;
    if (l.length <= a.maximum)
      return;
    const m = ld(l);
    r.issues.push({
      origin: m,
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: l,
      inst: n,
      continue: !a.abort
    });
  };
}), Y1 = /* @__PURE__ */ Y("$ZodCheckMinLength", (n, a) => {
  var o;
  Nt.init(n, a), (o = n._zod.def).when ?? (o.when = (r) => {
    const l = r.value;
    return !rd(l) && l.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const l = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > l && (r._zod.bag.minimum = a.minimum);
  }), n._zod.check = (r) => {
    const l = r.value;
    if (l.length >= a.minimum)
      return;
    const m = ld(l);
    r.issues.push({
      origin: m,
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: l,
      inst: n,
      continue: !a.abort
    });
  };
}), $1 = /* @__PURE__ */ Y("$ZodCheckLengthEquals", (n, a) => {
  var o;
  Nt.init(n, a), (o = n._zod.def).when ?? (o.when = (r) => {
    const l = r.value;
    return !rd(l) && l.length !== void 0;
  }), n._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.minimum = a.length, l.maximum = a.length, l.length = a.length;
  }), n._zod.check = (r) => {
    const l = r.value, c = l.length;
    if (c === a.length)
      return;
    const m = ld(l), f = c > a.length;
    r.issues.push({
      origin: m,
      ...f ? { code: "too_big", maximum: a.length } : { code: "too_small", minimum: a.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: n,
      continue: !a.abort
    });
  };
}), el = /* @__PURE__ */ Y("$ZodCheckStringFormat", (n, a) => {
  var o, r;
  Nt.init(n, a), n._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.format = a.format, a.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a.pattern));
  }), a.pattern ? (o = n._zod).check ?? (o.check = (l) => {
    a.pattern.lastIndex = 0, !a.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: a.format,
      input: l.value,
      ...a.pattern ? { pattern: a.pattern.toString() } : {},
      inst: n,
      continue: !a.abort
    });
  }) : (r = n._zod).check ?? (r.check = () => {
  });
}), q1 = /* @__PURE__ */ Y("$ZodCheckRegex", (n, a) => {
  el.init(n, a), n._zod.check = (o) => {
    a.pattern.lastIndex = 0, !a.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: a.pattern.toString(),
      inst: n,
      continue: !a.abort
    });
  };
}), X1 = /* @__PURE__ */ Y("$ZodCheckLowerCase", (n, a) => {
  a.pattern ?? (a.pattern = R1), el.init(n, a);
}), L1 = /* @__PURE__ */ Y("$ZodCheckUpperCase", (n, a) => {
  a.pattern ?? (a.pattern = Z1), el.init(n, a);
}), V1 = /* @__PURE__ */ Y("$ZodCheckIncludes", (n, a) => {
  Nt.init(n, a);
  const o = Ni(a.includes), r = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${o}` : o);
  a.pattern = r, n._zod.onattach.push((l) => {
    const c = l._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r);
  }), n._zod.check = (l) => {
    l.value.includes(a.includes, a.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: a.includes,
      input: l.value,
      inst: n,
      continue: !a.abort
    });
  };
}), G1 = /* @__PURE__ */ Y("$ZodCheckStartsWith", (n, a) => {
  Nt.init(n, a);
  const o = new RegExp(`^${Ni(a.prefix)}.*`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(o);
  }), n._zod.check = (r) => {
    r.value.startsWith(a.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: a.prefix,
      input: r.value,
      inst: n,
      continue: !a.abort
    });
  };
}), P1 = /* @__PURE__ */ Y("$ZodCheckEndsWith", (n, a) => {
  Nt.init(n, a);
  const o = new RegExp(`.*${Ni(a.suffix)}$`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(o);
  }), n._zod.check = (r) => {
    r.value.endsWith(a.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: a.suffix,
      input: r.value,
      inst: n,
      continue: !a.abort
    });
  };
}), K1 = /* @__PURE__ */ Y("$ZodCheckOverwrite", (n, a) => {
  Nt.init(n, a), n._zod.check = (o) => {
    o.value = a.tx(o.value);
  };
});
class Q1 {
  constructor(a = []) {
    this.content = [], this.indent = 0, this && (this.args = a);
  }
  indented(a) {
    this.indent += 1, a(this), this.indent -= 1;
  }
  write(a) {
    if (typeof a == "function") {
      a(this, { execution: "sync" }), a(this, { execution: "async" });
      return;
    }
    const r = a.split(`
`).filter((m) => m), l = Math.min(...r.map((m) => m.length - m.trimStart().length)), c = r.map((m) => m.slice(l)).map((m) => " ".repeat(this.indent * 2) + m);
    for (const m of c)
      this.content.push(m);
  }
  compile() {
    const a = Function, o = this?.args, l = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new a(...o, l.join(`
`));
  }
}
const J1 = {
  major: 4,
  minor: 4,
  patch: 3
}, Ie = /* @__PURE__ */ Y("$ZodType", (n, a) => {
  var o;
  n ?? (n = {}), n._zod.def = a, n._zod.bag = n._zod.bag || {}, n._zod.version = J1;
  const r = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && r.unshift(n);
  for (const l of r)
    for (const c of l._zod.onattach)
      c(n);
  if (r.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const l = (m, f, p) => {
      let y = Ai(m), v;
      for (const b of f) {
        if (b._zod.def.when) {
          if (W0(m) || !b._zod.def.when(m))
            continue;
        } else if (y)
          continue;
        const w = m.issues.length, k = b._zod.check(m);
        if (k instanceof Promise && p?.async === !1)
          throw new Ei();
        if (v || k instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await k, m.issues.length !== w && (y || (y = Ai(m, w)));
          });
        else {
          if (m.issues.length === w)
            continue;
          y || (y = Ai(m, w));
        }
      }
      return v ? v.then(() => m) : m;
    }, c = (m, f, p) => {
      if (Ai(m))
        return m.aborted = !0, m;
      const y = l(f, r, p);
      if (y instanceof Promise) {
        if (p.async === !1)
          throw new Ei();
        return y.then((v) => n._zod.parse(v, p));
      }
      return n._zod.parse(y, p);
    };
    n._zod.run = (m, f) => {
      if (f.skipChecks)
        return n._zod.parse(m, f);
      if (f.direction === "backward") {
        const y = n._zod.parse({ value: m.value, issues: [] }, { ...f, skipChecks: !0 });
        return y instanceof Promise ? y.then((v) => c(v, m, f)) : c(y, m, f);
      }
      const p = n._zod.parse(m, f);
      if (p instanceof Promise) {
        if (f.async === !1)
          throw new Ei();
        return p.then((y) => l(y, r, f));
      }
      return l(p, r, f);
    };
  }
  Le(n, "~standard", () => ({
    validate: (l) => {
      try {
        const c = e1(n, l);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return t1(n, l).then((m) => m.success ? { value: m.data } : { issues: m.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), dd = /* @__PURE__ */ Y("$ZodString", (n, a) => {
  Ie.init(n, a), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? M1(n._zod.bag), n._zod.parse = (o, r) => {
    if (a.coerce)
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
}), Qe = /* @__PURE__ */ Y("$ZodStringFormat", (n, a) => {
  el.init(n, a), dd.init(n, a);
}), W1 = /* @__PURE__ */ Y("$ZodGUID", (n, a) => {
  a.pattern ?? (a.pattern = y1), Qe.init(n, a);
}), F1 = /* @__PURE__ */ Y("$ZodUUID", (n, a) => {
  if (a.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[a.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${a.version}"`);
    a.pattern ?? (a.pattern = P_(r));
  } else
    a.pattern ?? (a.pattern = P_());
  Qe.init(n, a);
}), I1 = /* @__PURE__ */ Y("$ZodEmail", (n, a) => {
  a.pattern ?? (a.pattern = v1), Qe.init(n, a);
}), ek = /* @__PURE__ */ Y("$ZodURL", (n, a) => {
  Qe.init(n, a), n._zod.check = (o) => {
    try {
      const r = o.value.trim();
      if (!a.normalize && a.protocol?.source === j1.source && !/^https?:\/\//i.test(r)) {
        o.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: o.value,
          inst: n,
          continue: !a.abort
        });
        return;
      }
      const l = new URL(r);
      a.hostname && (a.hostname.lastIndex = 0, a.hostname.test(l.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: a.hostname.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.protocol && (a.protocol.lastIndex = 0, a.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: a.protocol.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.normalize ? o.value = l.href : o.value = r;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
}), tk = /* @__PURE__ */ Y("$ZodEmoji", (n, a) => {
  a.pattern ?? (a.pattern = b1()), Qe.init(n, a);
}), nk = /* @__PURE__ */ Y("$ZodNanoID", (n, a) => {
  a.pattern ?? (a.pattern = _1), Qe.init(n, a);
}), ak = /* @__PURE__ */ Y("$ZodCUID", (n, a) => {
  a.pattern ?? (a.pattern = c1), Qe.init(n, a);
}), ik = /* @__PURE__ */ Y("$ZodCUID2", (n, a) => {
  a.pattern ?? (a.pattern = d1), Qe.init(n, a);
}), ok = /* @__PURE__ */ Y("$ZodULID", (n, a) => {
  a.pattern ?? (a.pattern = m1), Qe.init(n, a);
}), rk = /* @__PURE__ */ Y("$ZodXID", (n, a) => {
  a.pattern ?? (a.pattern = f1), Qe.init(n, a);
}), sk = /* @__PURE__ */ Y("$ZodKSUID", (n, a) => {
  a.pattern ?? (a.pattern = p1), Qe.init(n, a);
}), lk = /* @__PURE__ */ Y("$ZodISODateTime", (n, a) => {
  a.pattern ?? (a.pattern = C1(a)), Qe.init(n, a);
}), uk = /* @__PURE__ */ Y("$ZodISODate", (n, a) => {
  a.pattern ?? (a.pattern = T1), Qe.init(n, a);
}), ck = /* @__PURE__ */ Y("$ZodISOTime", (n, a) => {
  a.pattern ?? (a.pattern = E1(a)), Qe.init(n, a);
}), dk = /* @__PURE__ */ Y("$ZodISODuration", (n, a) => {
  a.pattern ?? (a.pattern = h1), Qe.init(n, a);
}), mk = /* @__PURE__ */ Y("$ZodIPv4", (n, a) => {
  a.pattern ?? (a.pattern = k1), Qe.init(n, a), n._zod.bag.format = "ipv4";
}), fk = /* @__PURE__ */ Y("$ZodIPv6", (n, a) => {
  a.pattern ?? (a.pattern = w1), Qe.init(n, a), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
}), pk = /* @__PURE__ */ Y("$ZodCIDRv4", (n, a) => {
  a.pattern ?? (a.pattern = S1), Qe.init(n, a);
}), _k = /* @__PURE__ */ Y("$ZodCIDRv6", (n, a) => {
  a.pattern ?? (a.pattern = z1), Qe.init(n, a), n._zod.check = (o) => {
    const r = o.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [l, c] = r;
      if (!c)
        throw new Error();
      const m = Number(c);
      if (`${m}` !== c)
        throw new Error();
      if (m < 0 || m > 128)
        throw new Error();
      new URL(`http://[${l}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
});
function ry(n) {
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
const hk = /* @__PURE__ */ Y("$ZodBase64", (n, a) => {
  a.pattern ?? (a.pattern = x1), Qe.init(n, a), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    ry(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
});
function yk(n) {
  if (!ey.test(n))
    return !1;
  const a = n.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), o = a.padEnd(Math.ceil(a.length / 4) * 4, "=");
  return ry(o);
}
const vk = /* @__PURE__ */ Y("$ZodBase64URL", (n, a) => {
  a.pattern ?? (a.pattern = ey), Qe.init(n, a), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    yk(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), gk = /* @__PURE__ */ Y("$ZodE164", (n, a) => {
  a.pattern ?? (a.pattern = A1), Qe.init(n, a);
});
function bk(n, a = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3)
      return !1;
    const [r] = o;
    if (!r)
      return !1;
    const l = JSON.parse(atob(r));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || a && (!("alg" in l) || l.alg !== a));
  } catch {
    return !1;
  }
}
const kk = /* @__PURE__ */ Y("$ZodJWT", (n, a) => {
  Qe.init(n, a), n._zod.check = (o) => {
    bk(o.value, a.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), sy = /* @__PURE__ */ Y("$ZodNumber", (n, a) => {
  Ie.init(n, a), n._zod.pattern = n._zod.bag.pattern ?? N1, n._zod.parse = (o, r) => {
    if (a.coerce)
      try {
        o.value = Number(o.value);
      } catch {
      }
    const l = o.value;
    if (typeof l == "number" && !Number.isNaN(l) && Number.isFinite(l))
      return o;
    const c = typeof l == "number" ? Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: l,
      inst: n,
      ...c ? { received: c } : {}
    }), o;
  };
}), wk = /* @__PURE__ */ Y("$ZodNumberFormat", (n, a) => {
  H1.init(n, a), sy.init(n, a);
}), Sk = /* @__PURE__ */ Y("$ZodBoolean", (n, a) => {
  Ie.init(n, a), n._zod.pattern = D1, n._zod.parse = (o, r) => {
    if (a.coerce)
      try {
        o.value = !!o.value;
      } catch {
      }
    const l = o.value;
    return typeof l == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: l,
      inst: n
    }), o;
  };
}), zk = /* @__PURE__ */ Y("$ZodUnknown", (n, a) => {
  Ie.init(n, a), n._zod.parse = (o) => o;
}), xk = /* @__PURE__ */ Y("$ZodNever", (n, a) => {
  Ie.init(n, a), n._zod.parse = (o, r) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
});
function K_(n, a, o) {
  n.issues.length && a.issues.push(...Jh(o, n.issues)), a.value[o] = n.value;
}
const jk = /* @__PURE__ */ Y("$ZodArray", (n, a) => {
  Ie.init(n, a), n._zod.parse = (o, r) => {
    const l = o.value;
    if (!Array.isArray(l))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: n
      }), o;
    o.value = Array(l.length);
    const c = [];
    for (let m = 0; m < l.length; m++) {
      const f = l[m], p = a.element._zod.run({
        value: f,
        issues: []
      }, r);
      p instanceof Promise ? c.push(p.then((y) => K_(y, o, m))) : K_(p, o, m);
    }
    return c.length ? Promise.all(c).then(() => o) : o;
  };
});
function Bs(n, a, o, r, l, c) {
  const m = o in r;
  if (n.issues.length) {
    if (l && c && !m)
      return;
    a.issues.push(...Jh(o, n.issues));
  }
  if (!m && !l) {
    n.issues.length || a.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [o]
    });
    return;
  }
  n.value === void 0 ? m && (a.value[o] = void 0) : a.value[o] = n.value;
}
function ly(n) {
  const a = Object.keys(n.shape);
  for (const r of a)
    if (!n.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const o = q0(n.shape);
  return {
    ...n,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(o)
  };
}
function uy(n, a, o, r, l, c) {
  const m = [], f = l.keySet, p = l.catchall._zod, y = p.def.type, v = p.optin === "optional", b = p.optout === "optional";
  for (const w in a) {
    if (w === "__proto__" || f.has(w))
      continue;
    if (y === "never") {
      m.push(w);
      continue;
    }
    const k = p.run({ value: a[w], issues: [] }, r);
    k instanceof Promise ? n.push(k.then((x) => Bs(x, o, w, a, v, b))) : Bs(k, o, w, a, v, b);
  }
  return m.length && o.issues.push({
    code: "unrecognized_keys",
    keys: m,
    input: a,
    inst: c
  }), n.length ? Promise.all(n).then(() => o) : o;
}
const Ak = /* @__PURE__ */ Y("$ZodObject", (n, a) => {
  if (Ie.init(n, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const f = a.shape;
    Object.defineProperty(a, "shape", {
      get: () => {
        const p = { ...f };
        return Object.defineProperty(a, "shape", {
          value: p
        }), p;
      }
    });
  }
  const r = od(() => ly(a));
  Le(n._zod, "propValues", () => {
    const f = a.shape, p = {};
    for (const y in f) {
      const v = f[y]._zod;
      if (v.values) {
        p[y] ?? (p[y] = /* @__PURE__ */ new Set());
        for (const b of v.values)
          p[y].add(b);
      }
    }
    return p;
  });
  const l = Hs, c = a.catchall;
  let m;
  n._zod.parse = (f, p) => {
    m ?? (m = r.value);
    const y = f.value;
    if (!l(y))
      return f.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: n
      }), f;
    f.value = {};
    const v = [], b = m.shape;
    for (const w of m.keys) {
      const k = b[w], x = k._zod.optin === "optional", $ = k._zod.optout === "optional", U = k._zod.run({ value: y[w], issues: [] }, p);
      U instanceof Promise ? v.push(U.then((B) => Bs(B, f, w, y, x, $))) : Bs(U, f, w, y, x, $);
    }
    return c ? uy(v, y, f, p, r.value, n) : v.length ? Promise.all(v).then(() => f) : f;
  };
}), Tk = /* @__PURE__ */ Y("$ZodObjectJIT", (n, a) => {
  Ak.init(n, a);
  const o = n._zod.parse, r = od(() => ly(a)), l = (w) => {
    const k = new Q1(["shape", "payload", "ctx"]), x = r.value, $ = (L) => {
      const J = G_(L);
      return `shape[${J}]._zod.run({ value: input[${J}], issues: [] }, ctx)`;
    };
    k.write("const input = payload.value;");
    const U = /* @__PURE__ */ Object.create(null);
    let B = 0;
    for (const L of x.keys)
      U[L] = `key_${B++}`;
    k.write("const newResult = {};");
    for (const L of x.keys) {
      const J = U[L], K = G_(L), X = w[L], P = X?._zod?.optin === "optional", oe = X?._zod?.optout === "optional";
      k.write(`const ${J} = ${$(L)};`), P && oe ? k.write(`
        if (${J}.issues.length) {
          if (${K} in input) {
            payload.issues = payload.issues.concat(${J}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${K}, ...iss.path] : [${K}]
            })));
          }
        }
        
        if (${J}.value === undefined) {
          if (${K} in input) {
            newResult[${K}] = undefined;
          }
        } else {
          newResult[${K}] = ${J}.value;
        }
        
      `) : P ? k.write(`
        if (${J}.issues.length) {
          payload.issues = payload.issues.concat(${J}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K}, ...iss.path] : [${K}]
          })));
        }
        
        if (${J}.value === undefined) {
          if (${K} in input) {
            newResult[${K}] = undefined;
          }
        } else {
          newResult[${K}] = ${J}.value;
        }
        
      `) : k.write(`
        const ${J}_present = ${K} in input;
        if (${J}.issues.length) {
          payload.issues = payload.issues.concat(${J}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K}, ...iss.path] : [${K}]
          })));
        }
        if (!${J}_present && !${J}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${K}]
          });
        }

        if (${J}_present) {
          if (${J}.value === undefined) {
            newResult[${K}] = undefined;
          } else {
            newResult[${K}] = ${J}.value;
          }
        }

      `);
    }
    k.write("payload.value = newResult;"), k.write("return payload;");
    const I = k.compile();
    return (L, J) => I(w, L, J);
  };
  let c;
  const m = Hs, f = !id.jitless, y = f && Y0.value, v = a.catchall;
  let b;
  n._zod.parse = (w, k) => {
    b ?? (b = r.value);
    const x = w.value;
    return m(x) ? f && y && k?.async === !1 && k.jitless !== !0 ? (c || (c = l(a.shape)), w = c(w, k), v ? uy([], x, w, k, b, n) : w) : o(w, k) : (w.issues.push({
      expected: "object",
      code: "invalid_type",
      input: x,
      inst: n
    }), w);
  };
});
function Q_(n, a, o, r) {
  for (const c of n)
    if (c.issues.length === 0)
      return a.value = c.value, a;
  const l = n.filter((c) => !Ai(c));
  return l.length === 1 ? (a.value = l[0].value, l[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((c) => c.issues.map((m) => Ra(m, r, Da())))
  }), a);
}
const Ek = /* @__PURE__ */ Y("$ZodUnion", (n, a) => {
  Ie.init(n, a), Le(n._zod, "optin", () => a.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), Le(n._zod, "optout", () => a.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), Le(n._zod, "values", () => {
    if (a.options.every((r) => r._zod.values))
      return new Set(a.options.flatMap((r) => Array.from(r._zod.values)));
  }), Le(n._zod, "pattern", () => {
    if (a.options.every((r) => r._zod.pattern)) {
      const r = a.options.map((l) => l._zod.pattern);
      return new RegExp(`^(${r.map((l) => sd(l.source)).join("|")})$`);
    }
  });
  const o = a.options.length === 1 ? a.options[0]._zod.run : null;
  n._zod.parse = (r, l) => {
    if (o)
      return o(r, l);
    let c = !1;
    const m = [];
    for (const f of a.options) {
      const p = f._zod.run({
        value: r.value,
        issues: []
      }, l);
      if (p instanceof Promise)
        m.push(p), c = !0;
      else {
        if (p.issues.length === 0)
          return p;
        m.push(p);
      }
    }
    return c ? Promise.all(m).then((f) => Q_(f, r, n, l)) : Q_(m, r, n, l);
  };
}), Ck = /* @__PURE__ */ Y("$ZodIntersection", (n, a) => {
  Ie.init(n, a), n._zod.parse = (o, r) => {
    const l = o.value, c = a.left._zod.run({ value: l, issues: [] }, r), m = a.right._zod.run({ value: l, issues: [] }, r);
    return c instanceof Promise || m instanceof Promise ? Promise.all([c, m]).then(([p, y]) => J_(o, p, y)) : J_(o, c, m);
  };
});
function Gc(n, a) {
  if (n === a)
    return { valid: !0, data: n };
  if (n instanceof Date && a instanceof Date && +n == +a)
    return { valid: !0, data: n };
  if (Vo(n) && Vo(a)) {
    const o = Object.keys(a), r = Object.keys(n).filter((c) => o.indexOf(c) !== -1), l = { ...n, ...a };
    for (const c of r) {
      const m = Gc(n[c], a[c]);
      if (!m.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...m.mergeErrorPath]
        };
      l[c] = m.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(n) && Array.isArray(a)) {
    if (n.length !== a.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let r = 0; r < n.length; r++) {
      const l = n[r], c = a[r], m = Gc(l, c);
      if (!m.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...m.mergeErrorPath]
        };
      o.push(m.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function J_(n, a, o) {
  const r = /* @__PURE__ */ new Map();
  let l;
  for (const f of a.issues)
    if (f.code === "unrecognized_keys") {
      l ?? (l = f);
      for (const p of f.keys)
        r.has(p) || r.set(p, {}), r.get(p).l = !0;
    } else
      n.issues.push(f);
  for (const f of o.issues)
    if (f.code === "unrecognized_keys")
      for (const p of f.keys)
        r.has(p) || r.set(p, {}), r.get(p).r = !0;
    else
      n.issues.push(f);
  const c = [...r].filter(([, f]) => f.l && f.r).map(([f]) => f);
  if (c.length && l && n.issues.push({ ...l, keys: c }), Ai(n))
    return n;
  const m = Gc(a.value, o.value);
  if (!m.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`);
  return n.value = m.data, n;
}
const Mk = /* @__PURE__ */ Y("$ZodEnum", (n, a) => {
  Ie.init(n, a);
  const o = Ph(a.entries), r = new Set(o);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${o.filter((l) => $0.has(typeof l)).map((l) => typeof l == "string" ? Ni(l) : l.toString()).join("|")})$`), n._zod.parse = (l, c) => {
    const m = l.value;
    return r.has(m) || l.issues.push({
      code: "invalid_value",
      values: o,
      input: m,
      inst: n
    }), l;
  };
}), Ok = /* @__PURE__ */ Y("$ZodLiteral", (n, a) => {
  if (Ie.init(n, a), a.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(a.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${a.values.map((r) => typeof r == "string" ? Ni(r) : r ? Ni(r.toString()) : String(r)).join("|")})$`), n._zod.parse = (r, l) => {
    const c = r.value;
    return o.has(c) || r.issues.push({
      code: "invalid_value",
      values: a.values,
      input: c,
      inst: n
    }), r;
  };
}), Nk = /* @__PURE__ */ Y("$ZodTransform", (n, a) => {
  Ie.init(n, a), n._zod.optin = "optional", n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Gh(n.constructor.name);
    const l = a.transform(o.value, o);
    if (r.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((m) => (o.value = m, o.fallback = !0, o));
    if (l instanceof Promise)
      throw new Ei();
    return o.value = l, o.fallback = !0, o;
  };
});
function W_(n, a) {
  return a === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const cy = /* @__PURE__ */ Y("$ZodOptional", (n, a) => {
  Ie.init(n, a), n._zod.optin = "optional", n._zod.optout = "optional", Le(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), Le(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${sd(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, r) => {
    if (a.innerType._zod.optin === "optional") {
      const l = o.value, c = a.innerType._zod.run(o, r);
      return c instanceof Promise ? c.then((m) => W_(m, l)) : W_(c, l);
    }
    return o.value === void 0 ? o : a.innerType._zod.run(o, r);
  };
}), Dk = /* @__PURE__ */ Y("$ZodExactOptional", (n, a) => {
  cy.init(n, a), Le(n._zod, "values", () => a.innerType._zod.values), Le(n._zod, "pattern", () => a.innerType._zod.pattern), n._zod.parse = (o, r) => a.innerType._zod.run(o, r);
}), Rk = /* @__PURE__ */ Y("$ZodNullable", (n, a) => {
  Ie.init(n, a), Le(n._zod, "optin", () => a.innerType._zod.optin), Le(n._zod, "optout", () => a.innerType._zod.optout), Le(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${sd(o.source)}|null)$`) : void 0;
  }), Le(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), n._zod.parse = (o, r) => o.value === null ? o : a.innerType._zod.run(o, r);
}), Zk = /* @__PURE__ */ Y("$ZodDefault", (n, a) => {
  Ie.init(n, a), n._zod.optin = "optional", Le(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return a.innerType._zod.run(o, r);
    if (o.value === void 0)
      return o.value = a.defaultValue, o;
    const l = a.innerType._zod.run(o, r);
    return l instanceof Promise ? l.then((c) => F_(c, a)) : F_(l, a);
  };
});
function F_(n, a) {
  return n.value === void 0 && (n.value = a.defaultValue), n;
}
const Uk = /* @__PURE__ */ Y("$ZodPrefault", (n, a) => {
  Ie.init(n, a), n._zod.optin = "optional", Le(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, r) => (r.direction === "backward" || o.value === void 0 && (o.value = a.defaultValue), a.innerType._zod.run(o, r));
}), Hk = /* @__PURE__ */ Y("$ZodNonOptional", (n, a) => {
  Ie.init(n, a), Le(n._zod, "values", () => {
    const o = a.innerType._zod.values;
    return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
  }), n._zod.parse = (o, r) => {
    const l = a.innerType._zod.run(o, r);
    return l instanceof Promise ? l.then((c) => I_(c, n)) : I_(l, n);
  };
});
function I_(n, a) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: a
  }), n;
}
const Bk = /* @__PURE__ */ Y("$ZodCatch", (n, a) => {
  Ie.init(n, a), n._zod.optin = "optional", Le(n._zod, "optout", () => a.innerType._zod.optout), Le(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return a.innerType._zod.run(o, r);
    const l = a.innerType._zod.run(o, r);
    return l instanceof Promise ? l.then((c) => (o.value = c.value, c.issues.length && (o.value = a.catchValue({
      ...o,
      error: {
        issues: c.issues.map((m) => Ra(m, r, Da()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = l.value, l.issues.length && (o.value = a.catchValue({
      ...o,
      error: {
        issues: l.issues.map((c) => Ra(c, r, Da()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), Yk = /* @__PURE__ */ Y("$ZodPipe", (n, a) => {
  Ie.init(n, a), Le(n._zod, "values", () => a.in._zod.values), Le(n._zod, "optin", () => a.in._zod.optin), Le(n._zod, "optout", () => a.out._zod.optout), Le(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, r) => {
    if (r.direction === "backward") {
      const c = a.out._zod.run(o, r);
      return c instanceof Promise ? c.then((m) => ws(m, a.in, r)) : ws(c, a.in, r);
    }
    const l = a.in._zod.run(o, r);
    return l instanceof Promise ? l.then((c) => ws(c, a.out, r)) : ws(l, a.out, r);
  };
});
function ws(n, a, o) {
  return n.issues.length ? (n.aborted = !0, n) : a._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, o);
}
const $k = /* @__PURE__ */ Y("$ZodReadonly", (n, a) => {
  Ie.init(n, a), Le(n._zod, "propValues", () => a.innerType._zod.propValues), Le(n._zod, "values", () => a.innerType._zod.values), Le(n._zod, "optin", () => a.innerType?._zod?.optin), Le(n._zod, "optout", () => a.innerType?._zod?.optout), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      return a.innerType._zod.run(o, r);
    const l = a.innerType._zod.run(o, r);
    return l instanceof Promise ? l.then(eh) : eh(l);
  };
});
function eh(n) {
  return n.value = Object.freeze(n.value), n;
}
const qk = /* @__PURE__ */ Y("$ZodCustom", (n, a) => {
  Nt.init(n, a), Ie.init(n, a), n._zod.parse = (o, r) => o, n._zod.check = (o) => {
    const r = o.value, l = a.fn(r);
    if (l instanceof Promise)
      return l.then((c) => th(c, o, r, n));
    th(l, o, r, n);
  };
});
function th(n, a, o, r) {
  if (!n) {
    const l = {
      code: "custom",
      input: o,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (l.params = r._zod.def.params), a.issues.push(Go(l));
  }
}
var nh;
class Xk {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(a, ...o) {
    const r = o[0];
    return this._map.set(a, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, a), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(a) {
    const o = this._map.get(a);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(a), this;
  }
  get(a) {
    const o = a._zod.parent;
    if (o) {
      const r = { ...this.get(o) ?? {} };
      delete r.id;
      const l = { ...r, ...this._map.get(a) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(a);
  }
  has(a) {
    return this._map.has(a);
  }
}
function Lk() {
  return new Xk();
}
(nh = globalThis).__zod_globalRegistry ?? (nh.__zod_globalRegistry = Lk());
const Bo = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Vk(n, a) {
  return new n({
    type: "string",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Gk(n, a) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ah(n, a) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Pk(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Kk(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Qk(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Jk(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Wk(n, a) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Fk(n, a) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Ik(n, a) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ew(n, a) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function tw(n, a) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function nw(n, a) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function aw(n, a) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function iw(n, a) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ow(n, a) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function rw(n, a) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function sw(n, a) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function lw(n, a) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function uw(n, a) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function cw(n, a) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function dw(n, a) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function mw(n, a) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function fw(n, a) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function pw(n, a) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function _w(n, a) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function hw(n, a) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function yw(n, a) {
  return new n({
    type: "number",
    checks: [],
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function vw(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function gw(n, a) {
  return new n({
    type: "boolean",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function bw(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function kw(n, a) {
  return new n({
    type: "never",
    ...me(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ih(n, a) {
  return new iy({
    check: "less_than",
    ...me(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ec(n, a) {
  return new iy({
    check: "less_than",
    ...me(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function oh(n, a) {
  return new oy({
    check: "greater_than",
    ...me(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Cc(n, a) {
  return new oy({
    check: "greater_than",
    ...me(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function rh(n, a) {
  return new U1({
    check: "multiple_of",
    ...me(a),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function dy(n, a) {
  return new B1({
    check: "max_length",
    ...me(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ys(n, a) {
  return new Y1({
    check: "min_length",
    ...me(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function my(n, a) {
  return new $1({
    check: "length_equals",
    ...me(a),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function ww(n, a) {
  return new q1({
    check: "string_format",
    format: "regex",
    ...me(a),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function Sw(n) {
  return new X1({
    check: "string_format",
    format: "lowercase",
    ...me(n)
  });
}
// @__NO_SIDE_EFFECTS__
function zw(n) {
  return new L1({
    check: "string_format",
    format: "uppercase",
    ...me(n)
  });
}
// @__NO_SIDE_EFFECTS__
function xw(n, a) {
  return new V1({
    check: "string_format",
    format: "includes",
    ...me(a),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function jw(n, a) {
  return new G1({
    check: "string_format",
    format: "starts_with",
    ...me(a),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Aw(n, a) {
  return new P1({
    check: "string_format",
    format: "ends_with",
    ...me(a),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ui(n) {
  return new K1({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function Tw(n) {
  return /* @__PURE__ */ Ui((a) => a.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function Ew() {
  return /* @__PURE__ */ Ui((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function Cw() {
  return /* @__PURE__ */ Ui((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Mw() {
  return /* @__PURE__ */ Ui((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Ow() {
  return /* @__PURE__ */ Ui((n) => B0(n));
}
// @__NO_SIDE_EFFECTS__
function Nw(n, a, o) {
  return new n({
    type: "array",
    element: a,
    // get element() {
    //   return element;
    // },
    ...me(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Dw(n, a, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...me(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Rw(n, a) {
  const o = /* @__PURE__ */ Zw((r) => (r.addIssue = (l) => {
    if (typeof l == "string")
      r.issues.push(Go(l, r.value, o._zod.def));
    else {
      const c = l;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), c.input ?? (c.input = r.value), c.inst ?? (c.inst = o), c.continue ?? (c.continue = !o._zod.def.abort), r.issues.push(Go(c));
    }
  }, n(r.value, r)), a);
  return o;
}
// @__NO_SIDE_EFFECTS__
function Zw(n, a) {
  const o = new Nt({
    check: "custom",
    ...me(a)
  });
  return o._zod.check = n, o;
}
function fy(n) {
  let a = n?.target ?? "draft-2020-12";
  return a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? Bo,
    target: a,
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
function gt(n, a, o = { path: [], schemaPath: [] }) {
  var r;
  const l = n._zod.def, c = a.seen.get(n);
  if (c)
    return c.count++, o.schemaPath.includes(n) && (c.cycle = o.path), c.schema;
  const m = { schema: {}, count: 1, cycle: void 0, path: o.path };
  a.seen.set(n, m);
  const f = n._zod.toJSONSchema?.();
  if (f)
    m.schema = f;
  else {
    const v = {
      ...o,
      schemaPath: [...o.schemaPath, n],
      path: o.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(a, m.schema, v);
    else {
      const w = m.schema, k = a.processors[l.type];
      if (!k)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${l.type}`);
      k(n, a, w, v);
    }
    const b = n._zod.parent;
    b && (m.ref || (m.ref = b), gt(b, a, v), a.seen.get(b).isParent = !0);
  }
  const p = a.metadataRegistry.get(n);
  return p && Object.assign(m.schema, p), a.io === "input" && xt(n) && (delete m.schema.examples, delete m.schema.default), a.io === "input" && "_prefault" in m.schema && ((r = m.schema).default ?? (r.default = m.schema._prefault)), delete m.schema._prefault, a.seen.get(n).schema;
}
function py(n, a) {
  const o = n.seen.get(a);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const m of n.seen.entries()) {
    const f = n.metadataRegistry.get(m[0])?.id;
    if (f) {
      const p = r.get(f);
      if (p && p !== m[0])
        throw new Error(`Duplicate schema id "${f}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(f, m[0]);
    }
  }
  const l = (m) => {
    const f = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const b = n.external.registry.get(m[0])?.id, w = n.external.uri ?? ((x) => x);
      if (b)
        return { ref: w(b) };
      const k = m[1].defId ?? m[1].schema.id ?? `schema${n.counter++}`;
      return m[1].defId = k, { defId: k, ref: `${w("__shared")}#/${f}/${k}` };
    }
    if (m[1] === o)
      return { ref: "#" };
    const y = `#/${f}/`, v = m[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: v, ref: y + v };
  }, c = (m) => {
    if (m[1].schema.$ref)
      return;
    const f = m[1], { ref: p, defId: y } = l(m);
    f.def = { ...f.schema }, y && (f.defId = y);
    const v = f.schema;
    for (const b in v)
      delete v[b];
    v.$ref = p;
  };
  if (n.cycles === "throw")
    for (const m of n.seen.entries()) {
      const f = m[1];
      if (f.cycle)
        throw new Error(`Cycle detected: #/${f.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const m of n.seen.entries()) {
    const f = m[1];
    if (a === m[0]) {
      c(m);
      continue;
    }
    if (n.external) {
      const y = n.external.registry.get(m[0])?.id;
      if (a !== m[0] && y) {
        c(m);
        continue;
      }
    }
    if (n.metadataRegistry.get(m[0])?.id) {
      c(m);
      continue;
    }
    if (f.cycle) {
      c(m);
      continue;
    }
    if (f.count > 1 && n.reused === "ref") {
      c(m);
      continue;
    }
  }
}
function _y(n, a) {
  const o = n.seen.get(a);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (f) => {
    const p = n.seen.get(f);
    if (p.ref === null)
      return;
    const y = p.def ?? p.schema, v = { ...y }, b = p.ref;
    if (p.ref = null, b) {
      r(b);
      const k = n.seen.get(b), x = k.schema;
      if (x.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (y.allOf = y.allOf ?? [], y.allOf.push(x)) : Object.assign(y, x), Object.assign(y, v), f._zod.parent === b)
        for (const U in y)
          U === "$ref" || U === "allOf" || U in v || delete y[U];
      if (x.$ref && k.def)
        for (const U in y)
          U === "$ref" || U === "allOf" || U in k.def && JSON.stringify(y[U]) === JSON.stringify(k.def[U]) && delete y[U];
    }
    const w = f._zod.parent;
    if (w && w !== b) {
      r(w);
      const k = n.seen.get(w);
      if (k?.schema.$ref && (y.$ref = k.schema.$ref, k.def))
        for (const x in y)
          x === "$ref" || x === "allOf" || x in k.def && JSON.stringify(y[x]) === JSON.stringify(k.def[x]) && delete y[x];
    }
    n.override({
      zodSchema: f,
      jsonSchema: y,
      path: p.path ?? []
    });
  };
  for (const f of [...n.seen.entries()].reverse())
    r(f[0]);
  const l = {};
  if (n.target === "draft-2020-12" ? l.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? l.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? l.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const f = n.external.registry.get(a)?.id;
    if (!f)
      throw new Error("Schema is missing an `id` property");
    l.$id = n.external.uri(f);
  }
  Object.assign(l, o.def ?? o.schema);
  const c = n.metadataRegistry.get(a)?.id;
  c !== void 0 && l.id === c && delete l.id;
  const m = n.external?.defs ?? {};
  for (const f of n.seen.entries()) {
    const p = f[1];
    p.def && p.defId && (p.def.id === p.defId && delete p.def.id, m[p.defId] = p.def);
  }
  n.external || Object.keys(m).length > 0 && (n.target === "draft-2020-12" ? l.$defs = m : l.definitions = m);
  try {
    const f = JSON.parse(JSON.stringify(l));
    return Object.defineProperty(f, "~standard", {
      value: {
        ...a["~standard"],
        jsonSchema: {
          input: $s(a, "input", n.processors),
          output: $s(a, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), f;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function xt(n, a) {
  const o = a ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n))
    return !1;
  o.seen.add(n);
  const r = n._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return xt(r.element, o);
  if (r.type === "set")
    return xt(r.valueType, o);
  if (r.type === "lazy")
    return xt(r.getter(), o);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return xt(r.innerType, o);
  if (r.type === "intersection")
    return xt(r.left, o) || xt(r.right, o);
  if (r.type === "record" || r.type === "map")
    return xt(r.keyType, o) || xt(r.valueType, o);
  if (r.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : xt(r.in, o) || xt(r.out, o);
  if (r.type === "object") {
    for (const l in r.shape)
      if (xt(r.shape[l], o))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const l of r.options)
      if (xt(l, o))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const l of r.items)
      if (xt(l, o))
        return !0;
    return !!(r.rest && xt(r.rest, o));
  }
  return !1;
}
const Uw = (n, a = {}) => (o) => {
  const r = fy({ ...o, processors: a });
  return gt(n, r), py(r, n), _y(r, n);
}, $s = (n, a, o = {}) => (r) => {
  const { libraryOptions: l, target: c } = r ?? {}, m = fy({ ...l ?? {}, target: c, io: a, processors: o });
  return gt(n, m), py(m, n), _y(m, n);
}, Hw = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Bw = (n, a, o, r) => {
  const l = o;
  l.type = "string";
  const { minimum: c, maximum: m, format: f, patterns: p, contentEncoding: y } = n._zod.bag;
  if (typeof c == "number" && (l.minLength = c), typeof m == "number" && (l.maxLength = m), f && (l.format = Hw[f] ?? f, l.format === "" && delete l.format, f === "time" && delete l.format), y && (l.contentEncoding = y), p && p.size > 0) {
    const v = [...p];
    v.length === 1 ? l.pattern = v[0].source : v.length > 1 && (l.allOf = [
      ...v.map((b) => ({
        ...a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, Yw = (n, a, o, r) => {
  const l = o, { minimum: c, maximum: m, format: f, multipleOf: p, exclusiveMaximum: y, exclusiveMinimum: v } = n._zod.bag;
  typeof f == "string" && f.includes("int") ? l.type = "integer" : l.type = "number";
  const b = typeof v == "number" && v >= (c ?? Number.NEGATIVE_INFINITY), w = typeof y == "number" && y <= (m ?? Number.POSITIVE_INFINITY), k = a.target === "draft-04" || a.target === "openapi-3.0";
  b ? k ? (l.minimum = v, l.exclusiveMinimum = !0) : l.exclusiveMinimum = v : typeof c == "number" && (l.minimum = c), w ? k ? (l.maximum = y, l.exclusiveMaximum = !0) : l.exclusiveMaximum = y : typeof m == "number" && (l.maximum = m), typeof p == "number" && (l.multipleOf = p);
}, $w = (n, a, o, r) => {
  o.type = "boolean";
}, qw = (n, a, o, r) => {
  o.not = {};
}, Xw = (n, a, o, r) => {
}, Lw = (n, a, o, r) => {
  const l = n._zod.def, c = Ph(l.entries);
  c.every((m) => typeof m == "number") && (o.type = "number"), c.every((m) => typeof m == "string") && (o.type = "string"), o.enum = c;
}, Vw = (n, a, o, r) => {
  const l = n._zod.def, c = [];
  for (const m of l.values)
    if (m === void 0) {
      if (a.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof m == "bigint") {
      if (a.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      c.push(Number(m));
    } else
      c.push(m);
  if (c.length !== 0) if (c.length === 1) {
    const m = c[0];
    o.type = m === null ? "null" : typeof m, a.target === "draft-04" || a.target === "openapi-3.0" ? o.enum = [m] : o.const = m;
  } else
    c.every((m) => typeof m == "number") && (o.type = "number"), c.every((m) => typeof m == "string") && (o.type = "string"), c.every((m) => typeof m == "boolean") && (o.type = "boolean"), c.every((m) => m === null) && (o.type = "null"), o.enum = c;
}, Gw = (n, a, o, r) => {
  if (a.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Pw = (n, a, o, r) => {
  if (a.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Kw = (n, a, o, r) => {
  const l = o, c = n._zod.def, { minimum: m, maximum: f } = n._zod.bag;
  typeof m == "number" && (l.minItems = m), typeof f == "number" && (l.maxItems = f), l.type = "array", l.items = gt(c.element, a, {
    ...r,
    path: [...r.path, "items"]
  });
}, Qw = (n, a, o, r) => {
  const l = o, c = n._zod.def;
  l.type = "object", l.properties = {};
  const m = c.shape;
  for (const y in m)
    l.properties[y] = gt(m[y], a, {
      ...r,
      path: [...r.path, "properties", y]
    });
  const f = new Set(Object.keys(m)), p = new Set([...f].filter((y) => {
    const v = c.shape[y]._zod;
    return a.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  p.size > 0 && (l.required = Array.from(p)), c.catchall?._zod.def.type === "never" ? l.additionalProperties = !1 : c.catchall ? c.catchall && (l.additionalProperties = gt(c.catchall, a, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : a.io === "output" && (l.additionalProperties = !1);
}, Jw = (n, a, o, r) => {
  const l = n._zod.def, c = l.inclusive === !1, m = l.options.map((f, p) => gt(f, a, {
    ...r,
    path: [...r.path, c ? "oneOf" : "anyOf", p]
  }));
  c ? o.oneOf = m : o.anyOf = m;
}, Ww = (n, a, o, r) => {
  const l = n._zod.def, c = gt(l.left, a, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), m = gt(l.right, a, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), f = (y) => "allOf" in y && Object.keys(y).length === 1, p = [
    ...f(c) ? c.allOf : [c],
    ...f(m) ? m.allOf : [m]
  ];
  o.allOf = p;
}, Fw = (n, a, o, r) => {
  const l = n._zod.def, c = gt(l.innerType, a, r), m = a.seen.get(n);
  a.target === "openapi-3.0" ? (m.ref = l.innerType, o.nullable = !0) : o.anyOf = [c, { type: "null" }];
}, Iw = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType;
}, eS = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType, o.default = JSON.parse(JSON.stringify(l.defaultValue));
}, tS = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType, a.io === "input" && (o._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
}, nS = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType;
  let m;
  try {
    m = l.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = m;
}, aS = (n, a, o, r) => {
  const l = n._zod.def, c = l.in._zod.traits.has("$ZodTransform"), m = a.io === "input" ? c ? l.out : l.in : l.out;
  gt(m, a, r);
  const f = a.seen.get(n);
  f.ref = m;
}, iS = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType, o.readOnly = !0;
}, hy = (n, a, o, r) => {
  const l = n._zod.def;
  gt(l.innerType, a, r);
  const c = a.seen.get(n);
  c.ref = l.innerType;
}, oS = /* @__PURE__ */ Y("ZodISODateTime", (n, a) => {
  lk.init(n, a), Je.init(n, a);
});
function rS(n) {
  return /* @__PURE__ */ fw(oS, n);
}
const sS = /* @__PURE__ */ Y("ZodISODate", (n, a) => {
  uk.init(n, a), Je.init(n, a);
});
function lS(n) {
  return /* @__PURE__ */ pw(sS, n);
}
const uS = /* @__PURE__ */ Y("ZodISOTime", (n, a) => {
  ck.init(n, a), Je.init(n, a);
});
function cS(n) {
  return /* @__PURE__ */ _w(uS, n);
}
const dS = /* @__PURE__ */ Y("ZodISODuration", (n, a) => {
  dk.init(n, a), Je.init(n, a);
});
function mS(n) {
  return /* @__PURE__ */ hw(dS, n);
}
const fS = (n, a) => {
  Fh.init(n, a), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (o) => I0(n, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => F0(n, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        n.issues.push(o), n.message = JSON.stringify(n.issues, Vc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        n.issues.push(...o), n.message = JSON.stringify(n.issues, Vc, 2);
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
}, It = /* @__PURE__ */ Y("ZodError", fS, {
  Parent: Error
}), pS = /* @__PURE__ */ ud(It), _S = /* @__PURE__ */ cd(It), hS = /* @__PURE__ */ Fs(It), yS = /* @__PURE__ */ Is(It), vS = /* @__PURE__ */ n1(It), gS = /* @__PURE__ */ a1(It), bS = /* @__PURE__ */ i1(It), kS = /* @__PURE__ */ o1(It), wS = /* @__PURE__ */ r1(It), SS = /* @__PURE__ */ s1(It), zS = /* @__PURE__ */ l1(It), xS = /* @__PURE__ */ u1(It), sh = /* @__PURE__ */ new WeakMap();
function Jo(n, a, o) {
  const r = Object.getPrototypeOf(n);
  let l = sh.get(r);
  if (l || (l = /* @__PURE__ */ new Set(), sh.set(r, l)), !l.has(a)) {
    l.add(a);
    for (const c in o) {
      const m = o[c];
      Object.defineProperty(r, c, {
        configurable: !0,
        enumerable: !1,
        get() {
          const f = m.bind(this);
          return Object.defineProperty(this, c, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: f
          }), f;
        },
        set(f) {
          Object.defineProperty(this, c, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: f
          });
        }
      });
    }
  }
}
const et = /* @__PURE__ */ Y("ZodType", (n, a) => (Ie.init(n, a), Object.assign(n["~standard"], {
  jsonSchema: {
    input: $s(n, "input"),
    output: $s(n, "output")
  }
}), n.toJSONSchema = Uw(n, {}), n.def = a, n.type = a.type, Object.defineProperty(n, "_def", { value: a }), n.parse = (o, r) => pS(n, o, r, { callee: n.parse }), n.safeParse = (o, r) => hS(n, o, r), n.parseAsync = async (o, r) => _S(n, o, r, { callee: n.parseAsync }), n.safeParseAsync = async (o, r) => yS(n, o, r), n.spa = n.safeParseAsync, n.encode = (o, r) => vS(n, o, r), n.decode = (o, r) => gS(n, o, r), n.encodeAsync = async (o, r) => bS(n, o, r), n.decodeAsync = async (o, r) => kS(n, o, r), n.safeEncode = (o, r) => wS(n, o, r), n.safeDecode = (o, r) => SS(n, o, r), n.safeEncodeAsync = async (o, r) => zS(n, o, r), n.safeDecodeAsync = async (o, r) => xS(n, o, r), Jo(n, "ZodType", {
  check(...o) {
    const r = this.def;
    return this.clone(ra(r, {
      checks: [
        ...r.checks ?? [],
        ...o.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
      ]
    }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, r) {
    return sa(this, o, r);
  },
  brand() {
    return this;
  },
  register(o, r) {
    return o.add(this, r), this;
  },
  refine(o, r) {
    return this.check(yz(o, r));
  },
  superRefine(o, r) {
    return this.check(vz(o, r));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ Ui(o));
  },
  optional() {
    return dh(this);
  },
  exactOptional() {
    return iz(this);
  },
  nullable() {
    return mh(this);
  },
  nullish() {
    return dh(mh(this));
  },
  nonoptional(o) {
    return cz(this, o);
  },
  array() {
    return Ca(this);
  },
  or(o) {
    return by([this, o]);
  },
  and(o) {
    return IS(this, o);
  },
  transform(o) {
    return fh(this, nz(o));
  },
  default(o) {
    return sz(this, o);
  },
  prefault(o) {
    return uz(this, o);
  },
  catch(o) {
    return mz(this, o);
  },
  pipe(o) {
    return fh(this, o);
  },
  readonly() {
    return _z(this);
  },
  describe(o) {
    const r = this.clone();
    return Bo.add(r, { description: o }), r;
  },
  meta(...o) {
    if (o.length === 0)
      return Bo.get(this);
    const r = this.clone();
    return Bo.add(r, o[0]), r;
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
    return Bo.get(n)?.description;
  },
  configurable: !0
}), n)), yy = /* @__PURE__ */ Y("_ZodString", (n, a) => {
  dd.init(n, a), et.init(n, a), n._zod.processJSONSchema = (r, l, c) => Bw(n, r, l);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Jo(n, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ ww(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ xw(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ jw(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ Aw(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ Ys(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ dy(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ my(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ Ys(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ Sw(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ zw(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ Ew());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ Tw(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Cw());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Mw());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Ow());
    }
  });
}), jS = /* @__PURE__ */ Y("ZodString", (n, a) => {
  dd.init(n, a), yy.init(n, a), n.email = (o) => n.check(/* @__PURE__ */ Gk(AS, o)), n.url = (o) => n.check(/* @__PURE__ */ Wk(TS, o)), n.jwt = (o) => n.check(/* @__PURE__ */ mw(XS, o)), n.emoji = (o) => n.check(/* @__PURE__ */ Fk(ES, o)), n.guid = (o) => n.check(/* @__PURE__ */ ah(lh, o)), n.uuid = (o) => n.check(/* @__PURE__ */ Pk(Ss, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ Kk(Ss, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ Qk(Ss, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ Jk(Ss, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ Ik(CS, o)), n.guid = (o) => n.check(/* @__PURE__ */ ah(lh, o)), n.cuid = (o) => n.check(/* @__PURE__ */ ew(MS, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ tw(OS, o)), n.ulid = (o) => n.check(/* @__PURE__ */ nw(NS, o)), n.base64 = (o) => n.check(/* @__PURE__ */ uw(YS, o)), n.base64url = (o) => n.check(/* @__PURE__ */ cw($S, o)), n.xid = (o) => n.check(/* @__PURE__ */ aw(DS, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ iw(RS, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ ow(ZS, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ rw(US, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ sw(HS, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ lw(BS, o)), n.e164 = (o) => n.check(/* @__PURE__ */ dw(qS, o)), n.datetime = (o) => n.check(rS(o)), n.date = (o) => n.check(lS(o)), n.time = (o) => n.check(cS(o)), n.duration = (o) => n.check(mS(o));
});
function vt(n) {
  return /* @__PURE__ */ Vk(jS, n);
}
const Je = /* @__PURE__ */ Y("ZodStringFormat", (n, a) => {
  Qe.init(n, a), yy.init(n, a);
}), AS = /* @__PURE__ */ Y("ZodEmail", (n, a) => {
  I1.init(n, a), Je.init(n, a);
}), lh = /* @__PURE__ */ Y("ZodGUID", (n, a) => {
  W1.init(n, a), Je.init(n, a);
}), Ss = /* @__PURE__ */ Y("ZodUUID", (n, a) => {
  F1.init(n, a), Je.init(n, a);
}), TS = /* @__PURE__ */ Y("ZodURL", (n, a) => {
  ek.init(n, a), Je.init(n, a);
}), ES = /* @__PURE__ */ Y("ZodEmoji", (n, a) => {
  tk.init(n, a), Je.init(n, a);
}), CS = /* @__PURE__ */ Y("ZodNanoID", (n, a) => {
  nk.init(n, a), Je.init(n, a);
}), MS = /* @__PURE__ */ Y("ZodCUID", (n, a) => {
  ak.init(n, a), Je.init(n, a);
}), OS = /* @__PURE__ */ Y("ZodCUID2", (n, a) => {
  ik.init(n, a), Je.init(n, a);
}), NS = /* @__PURE__ */ Y("ZodULID", (n, a) => {
  ok.init(n, a), Je.init(n, a);
}), DS = /* @__PURE__ */ Y("ZodXID", (n, a) => {
  rk.init(n, a), Je.init(n, a);
}), RS = /* @__PURE__ */ Y("ZodKSUID", (n, a) => {
  sk.init(n, a), Je.init(n, a);
}), ZS = /* @__PURE__ */ Y("ZodIPv4", (n, a) => {
  mk.init(n, a), Je.init(n, a);
}), US = /* @__PURE__ */ Y("ZodIPv6", (n, a) => {
  fk.init(n, a), Je.init(n, a);
}), HS = /* @__PURE__ */ Y("ZodCIDRv4", (n, a) => {
  pk.init(n, a), Je.init(n, a);
}), BS = /* @__PURE__ */ Y("ZodCIDRv6", (n, a) => {
  _k.init(n, a), Je.init(n, a);
}), YS = /* @__PURE__ */ Y("ZodBase64", (n, a) => {
  hk.init(n, a), Je.init(n, a);
}), $S = /* @__PURE__ */ Y("ZodBase64URL", (n, a) => {
  vk.init(n, a), Je.init(n, a);
}), qS = /* @__PURE__ */ Y("ZodE164", (n, a) => {
  gk.init(n, a), Je.init(n, a);
}), XS = /* @__PURE__ */ Y("ZodJWT", (n, a) => {
  kk.init(n, a), Je.init(n, a);
}), vy = /* @__PURE__ */ Y("ZodNumber", (n, a) => {
  sy.init(n, a), et.init(n, a), n._zod.processJSONSchema = (r, l, c) => Yw(n, r, l), Jo(n, "ZodNumber", {
    gt(r, l) {
      return this.check(/* @__PURE__ */ oh(r, l));
    },
    gte(r, l) {
      return this.check(/* @__PURE__ */ Cc(r, l));
    },
    min(r, l) {
      return this.check(/* @__PURE__ */ Cc(r, l));
    },
    lt(r, l) {
      return this.check(/* @__PURE__ */ ih(r, l));
    },
    lte(r, l) {
      return this.check(/* @__PURE__ */ Ec(r, l));
    },
    max(r, l) {
      return this.check(/* @__PURE__ */ Ec(r, l));
    },
    int(r) {
      return this.check(uh(r));
    },
    safe(r) {
      return this.check(uh(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ oh(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ Cc(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ ih(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ Ec(0, r));
    },
    multipleOf(r, l) {
      return this.check(/* @__PURE__ */ rh(r, l));
    },
    step(r, l) {
      return this.check(/* @__PURE__ */ rh(r, l));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function gy(n) {
  return /* @__PURE__ */ yw(vy, n);
}
const LS = /* @__PURE__ */ Y("ZodNumberFormat", (n, a) => {
  wk.init(n, a), vy.init(n, a);
});
function uh(n) {
  return /* @__PURE__ */ vw(LS, n);
}
const VS = /* @__PURE__ */ Y("ZodBoolean", (n, a) => {
  Sk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => $w(n, o, r);
});
function qs(n) {
  return /* @__PURE__ */ gw(VS, n);
}
const GS = /* @__PURE__ */ Y("ZodUnknown", (n, a) => {
  zk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Xw();
});
function ch() {
  return /* @__PURE__ */ bw(GS);
}
const PS = /* @__PURE__ */ Y("ZodNever", (n, a) => {
  xk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => qw(n, o, r);
});
function KS(n) {
  return /* @__PURE__ */ kw(PS, n);
}
const QS = /* @__PURE__ */ Y("ZodArray", (n, a) => {
  jk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Kw(n, o, r, l), n.element = a.element, Jo(n, "ZodArray", {
    min(o, r) {
      return this.check(/* @__PURE__ */ Ys(o, r));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ Ys(1, o));
    },
    max(o, r) {
      return this.check(/* @__PURE__ */ dy(o, r));
    },
    length(o, r) {
      return this.check(/* @__PURE__ */ my(o, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Ca(n, a) {
  return /* @__PURE__ */ Nw(QS, n, a);
}
const JS = /* @__PURE__ */ Y("ZodObject", (n, a) => {
  Tk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Qw(n, o, r, l), Le(n, "shape", () => a.shape), Jo(n, "ZodObject", {
    keyof() {
      return Ci(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({ ...this._zod.def, catchall: o });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: ch() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: ch() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: KS() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(o) {
      return G0(this, o);
    },
    safeExtend(o) {
      return P0(this, o);
    },
    merge(o) {
      return K0(this, o);
    },
    pick(o) {
      return L0(this, o);
    },
    omit(o) {
      return V0(this, o);
    },
    partial(...o) {
      return Q0(ky, this, o[0]);
    },
    required(...o) {
      return J0(wy, this, o[0]);
    }
  });
});
function Oa(n, a) {
  const o = {
    type: "object",
    shape: n ?? {},
    ...me(a)
  };
  return new JS(o);
}
const WS = /* @__PURE__ */ Y("ZodUnion", (n, a) => {
  Ek.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Jw(n, o, r, l), n.options = a.options;
});
function by(n, a) {
  return new WS({
    type: "union",
    options: n,
    ...me(a)
  });
}
const FS = /* @__PURE__ */ Y("ZodIntersection", (n, a) => {
  Ck.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Ww(n, o, r, l);
});
function IS(n, a) {
  return new FS({
    type: "intersection",
    left: n,
    right: a
  });
}
const Pc = /* @__PURE__ */ Y("ZodEnum", (n, a) => {
  Mk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (r, l, c) => Lw(n, r, l), n.enum = a.entries, n.options = Object.values(a.entries);
  const o = new Set(Object.keys(a.entries));
  n.extract = (r, l) => {
    const c = {};
    for (const m of r)
      if (o.has(m))
        c[m] = a.entries[m];
      else
        throw new Error(`Key ${m} not found in enum`);
    return new Pc({
      ...a,
      checks: [],
      ...me(l),
      entries: c
    });
  }, n.exclude = (r, l) => {
    const c = { ...a.entries };
    for (const m of r)
      if (o.has(m))
        delete c[m];
      else
        throw new Error(`Key ${m} not found in enum`);
    return new Pc({
      ...a,
      checks: [],
      ...me(l),
      entries: c
    });
  };
});
function Ci(n, a) {
  const o = Array.isArray(n) ? Object.fromEntries(n.map((r) => [r, r])) : n;
  return new Pc({
    type: "enum",
    entries: o,
    ...me(a)
  });
}
const ez = /* @__PURE__ */ Y("ZodLiteral", (n, a) => {
  Ok.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Vw(n, o, r), n.values = new Set(a.values), Object.defineProperty(n, "value", {
    get() {
      if (a.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return a.values[0];
    }
  });
});
function Xs(n, a) {
  return new ez({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...me(a)
  });
}
const tz = /* @__PURE__ */ Y("ZodTransform", (n, a) => {
  Nk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Pw(n, o), n._zod.parse = (o, r) => {
    if (r.direction === "backward")
      throw new Gh(n.constructor.name);
    o.addIssue = (c) => {
      if (typeof c == "string")
        o.issues.push(Go(c, o.value, a));
      else {
        const m = c;
        m.fatal && (m.continue = !1), m.code ?? (m.code = "custom"), m.input ?? (m.input = o.value), m.inst ?? (m.inst = n), o.issues.push(Go(m));
      }
    };
    const l = a.transform(o.value, o);
    return l instanceof Promise ? l.then((c) => (o.value = c, o.fallback = !0, o)) : (o.value = l, o.fallback = !0, o);
  };
});
function nz(n) {
  return new tz({
    type: "transform",
    transform: n
  });
}
const ky = /* @__PURE__ */ Y("ZodOptional", (n, a) => {
  cy.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => hy(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function dh(n) {
  return new ky({
    type: "optional",
    innerType: n
  });
}
const az = /* @__PURE__ */ Y("ZodExactOptional", (n, a) => {
  Dk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => hy(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function iz(n) {
  return new az({
    type: "optional",
    innerType: n
  });
}
const oz = /* @__PURE__ */ Y("ZodNullable", (n, a) => {
  Rk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Fw(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function mh(n) {
  return new oz({
    type: "nullable",
    innerType: n
  });
}
const rz = /* @__PURE__ */ Y("ZodDefault", (n, a) => {
  Zk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => eS(n, o, r, l), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function sz(n, a) {
  return new rz({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : Qh(a);
    }
  });
}
const lz = /* @__PURE__ */ Y("ZodPrefault", (n, a) => {
  Uk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => tS(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function uz(n, a) {
  return new lz({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : Qh(a);
    }
  });
}
const wy = /* @__PURE__ */ Y("ZodNonOptional", (n, a) => {
  Hk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Iw(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function cz(n, a) {
  return new wy({
    type: "nonoptional",
    innerType: n,
    ...me(a)
  });
}
const dz = /* @__PURE__ */ Y("ZodCatch", (n, a) => {
  Bk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => nS(n, o, r, l), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function mz(n, a) {
  return new dz({
    type: "catch",
    innerType: n,
    catchValue: typeof a == "function" ? a : () => a
  });
}
const fz = /* @__PURE__ */ Y("ZodPipe", (n, a) => {
  Yk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => aS(n, o, r, l), n.in = a.in, n.out = a.out;
});
function fh(n, a) {
  return new fz({
    type: "pipe",
    in: n,
    out: a
    // ...util.normalizeParams(params),
  });
}
const pz = /* @__PURE__ */ Y("ZodReadonly", (n, a) => {
  $k.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => iS(n, o, r, l), n.unwrap = () => n._zod.def.innerType;
});
function _z(n) {
  return new pz({
    type: "readonly",
    innerType: n
  });
}
const hz = /* @__PURE__ */ Y("ZodCustom", (n, a) => {
  qk.init(n, a), et.init(n, a), n._zod.processJSONSchema = (o, r, l) => Gw(n, o);
});
function yz(n, a = {}) {
  return /* @__PURE__ */ Dw(hz, n, a);
}
function vz(n, a) {
  return /* @__PURE__ */ Rw(n, a);
}
const Mi = vt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), ze = Mi.optional(), gz = Oa({
  segment_id: gy().int().nonnegative(),
  area_id: vt().min(1).optional(),
  name: vt().min(1),
  icon: vt().optional(),
  include_in_floor_clean: qs().optional().default(!0)
}).passthrough(), bz = Oa({
  id: vt().min(1),
  name: vt().min(1),
  map_entity: Mi,
  map_select_option: vt().min(1).optional(),
  vacuum_then_mop_routine: Mi.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: qs().optional().default(!1),
  rooms: Ca(gz).min(1)
}).passthrough(), kz = Oa({
  id: vt().min(1),
  name: vt().min(1),
  icon: vt().optional(),
  strategy: Ci(["custom", "smartplan"]),
  cleaning_type: Ci(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: vt().optional(),
  mop_mode: vt().optional(),
  mop_intensity: vt().optional(),
  cleaning_count: by([Xs(1), Xs(2)]).optional()
}).passthrough(), Sy = Oa({
  type: Xs("custom:roborock-vacuum-map-card").optional(),
  config_version: gy().int().positive().optional(),
  entity: Mi.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: vt().optional(),
  language: Ci(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: Oa({
    map_select: ze,
    cleaning_mode: ze,
    vacuum_then_mop_script: ze,
    mop_mode: ze,
    mop_intensity: ze,
    dock_mop_drying: ze,
    dock_mop_drying_remaining_time: ze,
    dock_child_lock: ze,
    dock_mop_wash_frequency: ze,
    dock_wash_mode: ze,
    dock_wash_temperature: ze,
    dock_auto_empty: ze,
    dock_empty_mode: ze,
    dock_auto_dry: ze,
    dock_dry_duration: ze,
    assisted_carry_stage: ze,
    assisted_carry_job: ze,
    assisted_carry_prepare_script: ze,
    assisted_carry_start_script: ze,
    assisted_carry_finish_script: ze,
    water_shortage: ze,
    mop_attached: ze,
    water_box_attached: ze,
    do_not_disturb: ze,
    battery: ze,
    current_room: ze,
    cleaning_area: ze,
    cleaning_time: ze,
    cleaning_progress: ze,
    status: ze,
    error: ze,
    last_clean_end: ze,
    dock_clean_water_empty: ze,
    dock_dirty_water_full: ze,
    dock_error: ze,
    dock_clean_fluid_empty: ze,
    dock_detergent_empty: ze
  }).passthrough().optional().default({}),
  floors: Ca(bz).min(1),
  presets: Ca(kz).optional().default([]),
  default_preset: vt().optional().default("vacuum_only"),
  vacuum_mode_fallback: Xs("set_clean_motor_mode").optional(),
  enable_mop_only: qs().optional().default(!1),
  mop_routes: Oa({
    vacuum_and_mop: Ca(vt().min(1)).min(1).optional(),
    mop: Ca(vt().min(1)).min(1).optional()
  }).optional(),
  consumables: Ca(
    Oa({
      kind: Ci(["main_brush", "side_brush", "filter", "sensors", "strainer", "mop", "roller", "cleaning_brush"]),
      sensor: Mi,
      reset_button: Mi.refine((n) => n.startsWith("button."), "Reset must be a button entity").optional()
    })
  ).optional(),
  enable_smartplan: qs().optional(),
  cleaning_count_command: Ci(["set_clean_repeat_times", "app_segment_clean"]).optional()
}).passthrough().superRefine((n, a) => {
  if (n.floors.length > 1 && !n.entities.map_select && a.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" }), n.floors.filter((c) => c.assisted_carry).length > 0) {
    const c = [
      "assisted_carry_stage",
      "assisted_carry_job",
      "assisted_carry_prepare_script",
      "assisted_carry_start_script",
      "assisted_carry_finish_script"
    ];
    for (const m of c)
      n.entities[m] || a.addIssue({ code: "custom", path: ["entities", m], message: "Assisted carry requires this entity" });
  }
  const r = /* @__PURE__ */ new Set();
  for (const [c, m] of n.floors.entries()) {
    r.has(m.id) && a.addIssue({ code: "custom", path: ["floors", c, "id"], message: "Floor IDs must be unique" }), r.add(m.id);
    const f = /* @__PURE__ */ new Set();
    for (const [p, y] of m.rooms.entries())
      f.has(y.segment_id) && a.addIssue({
        code: "custom",
        path: ["floors", c, "rooms", p, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), f.add(y.segment_id);
  }
  const l = /* @__PURE__ */ new Set(["vacuum_only", "mop_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [c, m] of n.presets.entries())
    l.has(m.id) && a.addIssue({ code: "custom", path: ["presets", c, "id"], message: "Preset IDs must be unique" }), l.add(m.id);
  n.default_preset && !l.has(n.default_preset) && a.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
}), wz = 1, Sz = [];
function zy(n, a = Sz) {
  if (!n || typeof n != "object") return { config: n, migrated: !1 };
  let o = n;
  const r = typeof o.config_version == "number" ? o.config_version : 1;
  for (let l = r; Number.isInteger(l) && l >= 1 && l - 1 < a.length; l += 1)
    o = { ...a[l - 1](structuredClone(o)), config_version: l + 1 };
  return { config: o, migrated: o !== n };
}
function zz(n) {
  return Sy.parse(zy(n).config);
}
function md(n) {
  const a = Sy.safeParse(zy(n).config);
  return a.success ? [] : a.error.issues.map((o) => `${o.path.join(".") || "config"}: ${o.message}`);
}
function xy() {
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
const ph = "python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)", xz = [
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
    sources: [ph, "Real-device test by @infy1995 (PR #4)"],
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
    sources: [ph, "Issue #2 (S7+, Home Assistant core integration)"],
    notes: "No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2)."
    // Kept for its status and notes; the cleaning count, SmartPlan and routes come from
    // the catalog flags (no is_clean_count_setting_supported or is_smart_clean_mode_set_supported).
  }
];
function jz(n, a) {
  const o = n.entities?.[a]?.device_id, r = o ? n.devices?.[o] : void 0;
  return r?.model_id ?? r?.model ?? void 0;
}
function tl(n) {
  return n ? xz.find((a) => a.models.includes(n)) : void 0;
}
function Az(n) {
  return n.replace(new RegExp("(?<=[a-z0-9])([A-Z])", "g"), "_$1").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-zA-Z])([0-9]+)/g, "$1_$2").toLowerCase();
}
function Tz(n) {
  return new Set(Object.entries(n).filter(([, a]) => a === !0).map(([a]) => Az(a)));
}
function Ez(n) {
  const a = (r) => n.has(r);
  if (!a("is_clean_route_setting_supported")) return [];
  if (a("is_none_pure_clean_mop_with_max_plus")) return ["fast", "standard"];
  const o = ["standard"];
  return a("is_clean_efficiency_supported") || o.push("deep"), a("is_careful_slow_mop_supported") && o.push("deep_plus"), a("is_clean_route_fast_mode_supported") && o.push("fast"), o;
}
function Ls(n) {
  const a = (o) => n.has(o);
  return {
    // Without the cleaning-count setting the app sends the repeat with the segments (issue #2).
    repeat: a("is_clean_count_setting_supported") ? "set_clean_repeat_times" : "app_segment_clean",
    smartplan: a("is_smart_clean_mode_set_supported"),
    mop_routes: Ez(n),
    vac_then_mop: a("is_clean_then_mop_mode_supported"),
    multi_floor: a("is_multi_floor_supported"),
    dock: {
      auto_empty: a("is_dust_collection_setting_supported"),
      mop_wash: a("is_back_charge_auto_wash_supported") || a("is_wash_then_charge_cmd_supported"),
      hot_water: a("is_hot_wash_towel_supported"),
      mop_dry: a("is_supported_drying")
    }
  };
}
const Cz = /* @__PURE__ */ JSON.parse('[{"model":"roborock.vacuum.a01","names":["E4"]},{"model":"roborock.vacuum.a05","family":"RubySLite"},{"model":"roborock.vacuum.a08","names":["S6 Pure"],"family":"RubySC"},{"model":"roborock.vacuum.a09","family":"TanosV"},{"model":"roborock.vacuum.a10","names":["S6 MaxV"],"family":"TanosV","protocol":"1.0","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.a100","family":"PearlS"},{"model":"roborock.vacuum.a101","names":["Qrevo Pro"],"family":"PearlS"},{"model":"roborock.vacuum.a103","family":"PearlC"},{"model":"roborock.vacuum.a104","names":["Qrevo S"],"family":"PearlC"},{"model":"roborock.vacuum.a11","names":["T7"],"family":"TanosE"},{"model":"roborock.vacuum.a116","family":"PearlPlusS"},{"model":"roborock.vacuum.a117","names":["Qrevo Master"],"family":"PearlPlusS","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a122","family":"PearlSLite"},{"model":"roborock.vacuum.a123","family":"PearlSLite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_back_charge_auto_wash_supported"]},{"model":"roborock.vacuum.a124","family":"UltronSE"},{"model":"roborock.vacuum.a125","names":["Q5 Max+"],"family":"UltronSE","protocol":"1.0","features":["is_clean_route_setting_supported","is_none_pure_clean_mop_with_max_plus","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a134","family":"Vivian"},{"model":"roborock.vacuum.a135","names":["Qrevo Curv"],"family":"Vivian"},{"model":"roborock.vacuum.a136","family":"PearlPlusS"},{"model":"roborock.vacuum.a139","family":"UltronSE"},{"model":"roborock.vacuum.a14","names":["T7S"],"family":"TanosS"},{"model":"roborock.vacuum.a140","family":"UltronSE"},{"model":"roborock.vacuum.a143","family":"CoralPro"},{"model":"roborock.vacuum.a144","names":["Saros 10R"],"family":"CoralPro","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a146","family":"Verdelite"},{"model":"roborock.vacuum.a147","names":["Saros 10"],"family":"Verdelite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a15","names":["S7"],"family":"TanosS","protocol":"1.0","features":["is_clean_route_setting_supported","is_careful_slow_mop_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_multi_floor_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a155","family":"Vivian"},{"model":"roborock.vacuum.a156","family":"Vivian"},{"model":"roborock.vacuum.a158","family":"VivianC"},{"model":"roborock.vacuum.a159","family":"VivianC"},{"model":"roborock.vacuum.a167","family":"PearlE"},{"model":"roborock.vacuum.a168","family":"PearlE"},{"model":"roborock.vacuum.a169","family":"PearlELite"},{"model":"roborock.vacuum.a170","family":"PearlELite"},{"model":"roborock.vacuum.a187","names":["Qrevo Edge Series"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a19","names":["S4 Max"],"family":"RubySE"},{"model":"roborock.vacuum.a20","family":"Coral"},{"model":"roborock.vacuum.a21","family":"Coral"},{"model":"roborock.vacuum.a23","names":["T7S+"],"family":"TanosSPlus"},{"model":"roborock.vacuum.a24","family":"TanosSPlus"},{"model":"roborock.vacuum.a26","names":["G10S Pro"],"family":"TopazSV"},{"model":"roborock.vacuum.a27","names":["S7 MaxV"],"family":"TopazSV","protocol":"1.0"},{"model":"roborock.vacuum.a288","names":["Saros 20"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a29","names":["G10"],"family":"TopazS"},{"model":"roborock.vacuum.a30","family":"TopazS"},{"model":"roborock.vacuum.a306","names":["P30 Pro"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a33","family":"TanosSE"},{"model":"roborock.vacuum.a34","names":["Q5"],"family":"TanosSE"},{"model":"roborock.vacuum.a37","family":"TanosSLite"},{"model":"roborock.vacuum.a38","names":["Q7 Max"],"family":"TanosSLite"},{"model":"roborock.vacuum.a39","family":"TanosSC"},{"model":"roborock.vacuum.a40","names":["Q7","Q7+"],"family":"TanosSC"},{"model":"roborock.vacuum.a46","names":["G10S"],"family":"TopazSPlus"},{"model":"roborock.vacuum.a47","family":"TopazSPlus"},{"model":"roborock.vacuum.a50","family":"Ultron"},{"model":"roborock.vacuum.a51","names":["S8"],"family":"Ultron"},{"model":"roborock.vacuum.a52","family":"TanosSMax"},{"model":"roborock.vacuum.a62","names":["S7 Pro Ultra"],"family":"TopazSPower"},{"model":"roborock.vacuum.a64","family":"TopazSC"},{"model":"roborock.vacuum.a65","names":["S7 MaxV Ultra"],"family":"TopazSC"},{"model":"roborock.vacuum.a66","family":"TopazSPlus"},{"model":"roborock.vacuum.a68","family":"UltronSPlus"},{"model":"roborock.vacuum.a69","family":"UltronSPlus"},{"model":"roborock.vacuum.a70","names":["S8 Pro Ultra"],"family":"UltronSPlus"},{"model":"roborock.vacuum.a72","names":["Q5 Pro"],"family":"UltronE"},{"model":"roborock.vacuum.a73","names":["Q8 Max"],"family":"UltronLite"},{"model":"roborock.vacuum.a74","family":"Pearl"},{"model":"roborock.vacuum.a75","names":["P10"],"family":"Pearl","protocol":"1.0","features":["is_clean_count_setting_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a76","family":"TopazS"},{"model":"roborock.vacuum.a84","family":"UltronE"},{"model":"roborock.vacuum.a85","family":"UltronLite"},{"model":"roborock.vacuum.a86","family":"PearlPlus"},{"model":"roborock.vacuum.a87","names":["Qrevo MaxV"],"family":"PearlPlus","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a94","family":"UltronSC"},{"model":"roborock.vacuum.a95","family":"UltronSC"},{"model":"roborock.vacuum.a96","family":"UltronSV"},{"model":"roborock.vacuum.a97","names":["S8 MaxV Ultra"],"family":"UltronSV"},{"model":"roborock.vacuum.c1","names":["C1"]},{"model":"roborock.vacuum.e2","names":["E2"]},{"model":"roborock.vacuum.m1s","names":["1S"]},{"model":"roborock.vacuum.p5","family":"RubySC"},{"model":"roborock.vacuum.p6","family":"RubySLite"},{"model":"roborock.vacuum.s4","names":["S4"],"family":"RubyPlus"},{"model":"roborock.vacuum.s5","names":["S5"]},{"model":"roborock.vacuum.s5e","names":["S5 Max"],"family":"RubySLite","protocol":"1.0","features":["is_collect_dust_mode_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.s6","names":["S6"],"family":"Tanos"},{"model":"roborock.vacuum.sc01","names":["Q7 Series"],"protocol":"B01","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.sc05","names":["Q7 Series"],"protocol":"B01"},{"model":"roborock.vacuum.ss07","names":["Q10"],"protocol":"B01"},{"model":"roborock.vacuum.t4","family":"RubyPlus"},{"model":"roborock.vacuum.t6","names":["T6"],"family":"Tanos"},{"model":"roborock.vacuum.t7","family":"TanosE"},{"model":"roborock.vacuum.t7p","family":"TanosV"},{"model":"roborock.wetdryvac.a107","names":["Dyad Air"]},{"model":"roborock.wetdryvac.a56","names":["Dyad Pro"]},{"model":"roborock.wetdryvac.a83","names":["Dyad Pro Combo"]},{"model":"roborock.wm.a102","names":["Zeo One"],"protocol":"A01","features":["is_collect_dust_mode_supported"]}]'), Mz = {
  models: Cz
}, Oz = Mz.models;
function Wo(n) {
  return n ? Oz.find((a) => a.model === n) : void 0;
}
function Kc(n) {
  return tl(n)?.label ?? Wo(n)?.names?.join(" / ");
}
function jy(n, a) {
  const o = tl(n), r = Wo(n)?.features, l = [];
  a && l.push(["device", a]), r && l.push(["catalog", new Set(r)]);
  const c = l[0] ? { source: l[0][0], caps: Ls(l[0][1]) } : void 0, m = { sources: {}, profile: o }, f = (y, v, b) => {
    v !== void 0 ? (m[y] = v, m.sources[y] = "profile") : b !== void 0 && c && (m[y] = b, m.sources[y] = c.source);
  };
  f("repeat", o?.repeat, c?.caps.repeat), f("smartplan", o?.smartplan, c?.caps.smartplan), f("mop_only", o?.mop_only);
  const p = c?.caps.mop_routes;
  return f("mop_routes", o?.mop_routes, p && p.length > 0 ? { vacuum_and_mop: p, mop: p } : void 0), m;
}
const Oi = [2026, 8];
function Nz(n) {
  if (!n) return !1;
  const [a, o] = n.split(".").map(Number);
  return !Number.isFinite(a) || !Number.isFinite(o) ? !1 : a < Oi[0] || a === Oi[0] && o < Oi[1];
}
function Ay(n) {
  const a = Wo(n.model), o = n.protocol ?? a?.protocol, r = [];
  return n.model && !n.model.startsWith("roborock.vacuum.") && r.push("not_a_robot_vacuum"), o && o !== "1.0" && r.push("protocol_unsupported"), Nz(n.haVersion) && r.push("home_assistant_too_old"), r.length > 0 ? { verdict: "unsupported", reasons: r, name: Kc(n.model), protocol: o } : (n.hasCustomMap === !1 && r.push("custom_map_missing"), !tl(n.model) && !a?.features && !n.hasDeviceFlags && r.push("unknown_model"), {
    verdict: r.length > 0 ? "limited" : "supported",
    reasons: r,
    name: Kc(n.model),
    protocol: o
  });
}
function fd(n, a) {
  if (a) return Ls(a).dock;
  const o = tl(n)?.dock;
  if (o) return o;
  const r = Wo(n)?.features;
  return r ? Ls(new Set(r)).dock : void 0;
}
const pd = "roborock", Ty = "roborock_custom_map";
function Vs(n) {
  return n.split(".")[0];
}
function _h(n) {
  return new Set((n.identifiers ?? []).map(([, a]) => a));
}
function _d(n) {
  return n.entities ? Object.values(n.entities).filter((a) => a.platform === pd && !a.hidden && Vs(a.entity_id) === "vacuum").map((a) => a.entity_id).sort() : Object.keys(n.states).filter((a) => Vs(a) === "vacuum").sort();
}
function Ey(n, a) {
  const o = n.entities?.[a]?.device_id, r = o ? n.devices?.[o] : void 0;
  if (!r) return { vacuum: a, companions: [] };
  const l = _h(r), c = Object.values(n.devices ?? {}).filter((p) => p.id !== r.id), m = c.find((p) => (p.identifiers ?? []).some(([, y]) => y.endsWith("_dock") && l.has(y.slice(0, -5)))) ?? c.find((p) => p.via_device_id === r.id && /\sDock$/.test(p.model ?? p.name ?? "")) ?? c.find((p) => r.name && p.name === `${r.name} Dock`) ?? c.find((p) => r.model && p.model === `${r.model} Dock`), f = c.filter((p) => p !== m && [..._h(p)].some((y) => l.has(y)));
  return { vacuum: a, robot: r, dock: m, companions: f };
}
function Fo(n, a) {
  const o = new Set(a.filter(Boolean));
  return Object.values(n.entities ?? {}).filter((r) => !r.hidden && r.device_id && o.has(r.device_id));
}
function Gs(n, a, o) {
  return a.find((r) => r.platform !== pd || Vs(r.entity_id) !== o.domain ? !1 : o.translation_key ? r.translation_key === o.translation_key : n.states[r.entity_id]?.attributes.device_class === o.device_class)?.entity_id;
}
function Dz(n, a) {
  return Fo(n, [a.robot?.id]).filter((o) => o.platform === pd && Vs(o.entity_id) === "button" && !o.translation_key).map((o) => ({ entity_id: o.entity_id, name: o.name ?? String(n.states[o.entity_id]?.attributes.friendly_name ?? o.entity_id) }));
}
const Rz = {
  map_select: [{ domain: "select", translation_key: "selected_map" }],
  cleaning_mode: [{ domain: "select", translation_key: "cleaning_mode" }],
  mop_mode: [{ domain: "select", translation_key: "mop_mode" }],
  mop_intensity: [{ domain: "select", translation_key: "mop_intensity" }],
  // The dock switch replaced the deprecated `mop_drying_status` binary sensor; both report `on` while drying.
  dock_mop_drying: [
    { domain: "switch", translation_key: "mop_drying" },
    { domain: "binary_sensor", translation_key: "mop_drying_status" }
  ],
  dock_mop_drying_remaining_time: [{ domain: "sensor", translation_key: "mop_drying_remaining_time" }],
  dock_child_lock: [{ domain: "switch", translation_key: "child_lock" }],
  water_shortage: [{ domain: "binary_sensor", translation_key: "water_shortage" }],
  mop_attached: [{ domain: "binary_sensor", translation_key: "mop_attached" }],
  water_box_attached: [{ domain: "binary_sensor", translation_key: "water_box_attached" }],
  do_not_disturb: [{ domain: "switch", translation_key: "dnd_switch" }],
  battery: [{ domain: "sensor", device_class: "battery" }],
  current_room: [{ domain: "sensor", translation_key: "current_room" }],
  cleaning_area: [{ domain: "sensor", translation_key: "cleaning_area" }],
  cleaning_time: [{ domain: "sensor", translation_key: "cleaning_time" }],
  cleaning_progress: [{ domain: "sensor", translation_key: "clean_percent" }],
  status: [{ domain: "sensor", translation_key: "status" }],
  error: [{ domain: "sensor", translation_key: "vacuum_error" }],
  last_clean_end: [{ domain: "sensor", translation_key: "last_clean_end" }],
  dock_clean_water_empty: [{ domain: "binary_sensor", translation_key: "clean_box_empty" }],
  dock_dirty_water_full: [{ domain: "binary_sensor", translation_key: "dirty_box_full" }],
  dock_error: [{ domain: "sensor", translation_key: "dock_error" }],
  dock_clean_fluid_empty: [{ domain: "binary_sensor", translation_key: "clean_fluid_empty" }],
  dock_detergent_empty: [{ domain: "binary_sensor", translation_key: "detergent_empty" }]
}, Zz = [
  { kind: "main_brush", sensor: "main_brush_time_left", reset: "reset_main_brush_consumable" },
  { kind: "side_brush", sensor: "side_brush_time_left", reset: "reset_side_brush_consumable" },
  { kind: "filter", sensor: "filter_time_left", reset: "reset_air_filter_consumable" },
  { kind: "sensors", sensor: "sensor_time_left", reset: "reset_sensor_consumable" },
  { kind: "strainer", sensor: "strainer_time_left", reset: "reset_dock_strainer_consumable" },
  { kind: "cleaning_brush", sensor: "cleaning_brush_time_left", reset: "reset_dock_cleaning_brush_consumable" },
  { kind: "mop", sensor: "mop_life_time_left" },
  { kind: "roller", sensor: "brush_remaining" },
  // Percentage variants on other protocols.
  { kind: "main_brush", sensor: "main_brush_life" },
  { kind: "side_brush", sensor: "side_brush_life" },
  { kind: "filter", sensor: "filter_life" },
  { kind: "sensors", sensor: "sensor_life" }
], Uz = {
  dust_collection_mode: { domain: "select", translation_key: "dust_collection_mode" },
  dust_emptying: { domain: "switch", translation_key: "dust_emptying" },
  mop_washing: { domain: "switch", translation_key: "mop_washing" },
  mop_drying: { domain: "switch", translation_key: "mop_drying" }
};
function zs(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function nl(n) {
  const a = n?.attributes.calibration_points;
  return Array.isArray(a) ? a.flatMap((o) => {
    const r = o;
    return !zs(r.vacuum?.x) || !zs(r.vacuum?.y) || !zs(r.map?.x) || !zs(r.map?.y) ? [] : [r];
  }) : [];
}
function hd(n) {
  const a = n?.attributes.rooms;
  return a ? (Array.isArray(a) ? a.map((r, l) => [String(l), r]) : typeof a == "object" ? Object.entries(a) : []).flatMap(([r, l]) => {
    if (!l || typeof l != "object") return [];
    const c = l, m = c.number ?? c.room_id ?? c.segment_id ?? r, f = Number(m), p = Number(c.x0), y = Number(c.y0), v = Number(c.x1), b = Number(c.y1);
    return [f, p, y, v, b].every(Number.isFinite) ? [
      {
        segment_id: f,
        source_name: typeof c.name == "string" ? c.name : `Room ${f}`,
        x0: p,
        y0: y,
        x1: v,
        y1: b
      }
    ] : [];
  }) : [];
}
function Yo(n, a, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, l, c] = o, m = l.vacuum.x - r.vacuum.x, f = l.vacuum.y - r.vacuum.y, p = c.vacuum.x - r.vacuum.x, y = c.vacuum.y - r.vacuum.y, v = m * y - f * p;
  if (v === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.vacuum.x, w = a - r.vacuum.y, k = (b * y - w * p) / v, x = (m * w - f * b) / v;
  return {
    x: r.map.x + k * (l.map.x - r.map.x) + x * (c.map.x - r.map.x),
    y: r.map.y + k * (l.map.y - r.map.y) + x * (c.map.y - r.map.y)
  };
}
function xs(n, a, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [r, l, c] = o, m = l.map.x - r.map.x, f = l.map.y - r.map.y, p = c.map.x - r.map.x, y = c.map.y - r.map.y, v = m * y - f * p;
  if (v === 0) throw new Error("Calibration points are degenerate");
  const b = n - r.map.x, w = a - r.map.y, k = (b * y - w * p) / v, x = (m * w - f * b) / v;
  return {
    x: r.vacuum.x + k * (l.vacuum.x - r.vacuum.x) + x * (c.vacuum.x - r.vacuum.x),
    y: r.vacuum.y + k * (l.vacuum.y - r.vacuum.y) + x * (c.vacuum.y - r.vacuum.y)
  };
}
function Xo(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function Qc(n, a, o) {
  const r = Xo(n), l = r.x2 - r.x1, c = r.y2 - r.y1, m = Math.min(Math.max(0, r.x1), Math.max(0, a - l)), f = Math.min(Math.max(0, r.y1), Math.max(0, o - c));
  return { x1: m, y1: f, x2: m + l, y2: f + c };
}
function Hz(n, a) {
  const o = Xo(n), r = [
    xs(o.x1, o.y1, a),
    xs(o.x2, o.y1, a),
    xs(o.x2, o.y2, a),
    xs(o.x1, o.y2, a)
  ], l = r.map(({ x: m }) => m), c = r.map(({ y: m }) => m);
  return {
    x1: Math.round(Math.min(...l)),
    y1: Math.round(Math.min(...c)),
    x2: Math.round(Math.max(...l)),
    y2: Math.round(Math.max(...c))
  };
}
function Bz(n, a) {
  return `${[
    Yo(n.x0, n.y0, a),
    Yo(n.x1, n.y0, a),
    Yo(n.x1, n.y1, a),
    Yo(n.x0, n.y1, a)
  ].map((r, l) => `${l === 0 ? "M" : "L"} ${r.x} ${r.y}`).join(" ")} Z`;
}
function Yz(n, a) {
  return Yo((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, a);
}
function $z(n) {
  return new Map(n.rooms.map((a) => [a.segment_id, a]));
}
const qz = /_custom$/i;
function it(n) {
  return n.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function Xz(n) {
  return it(n).replace(/ /g, "_") || "floor";
}
function Lz(n, a) {
  const o = a.robot?.name_by_user ?? a.robot?.name ?? "";
  return Fo(n, a.companions.map((r) => r.id)).filter((r) => r.platform === Ty && r.entity_id.startsWith("image.")).map((r) => {
    const l = n.states[r.entity_id], c = String(l?.attributes.friendly_name ?? ""), m = o && c.startsWith(`${o} `) ? c.slice(o.length + 1) : c;
    return {
      entity_id: r.entity_id,
      map_name: (r.name ?? m ?? r.entity_id).replace(qz, ""),
      rooms: hd(l),
      calibrated: nl(l).length >= 3
    };
  }).sort((r, l) => r.entity_id.localeCompare(l.entity_id));
}
function Vz(n) {
  const a = /^(\d+)_(\d+)$/.exec(n);
  return a ? { map_flag: Number(a[1]), segment_id: Number(a[2]) } : void 0;
}
function Gz(n) {
  return (n?.last_seen_segments ?? []).flatMap((a) => {
    const o = Vz(a.id);
    return o ? [{ ...o, name: a.name, group: a.group || void 0 }] : [];
  });
}
function Pz(n, a) {
  const o = /* @__PURE__ */ new Map(), r = [...new Set(n.map((c) => c.map_flag))].sort((c, m) => c - m);
  for (const c of r) {
    const m = n.find((f) => f.map_flag === c && f.group)?.group;
    m && o.set(c, m);
  }
  if (![...o].every(([c, m]) => it(a[c] ?? "") === it(m))) return o;
  for (const c of r)
    !o.has(c) && a[c] && o.set(c, a[c]);
  return o;
}
function Kz(n, a, o) {
  const r = a === void 0 ? [] : o.filter((l) => l.map_flag === a);
  return r.length > 0 ? { rooms: r.map((l) => ({ segment_id: l.segment_id, name: l.name })).sort((l, c) => l.segment_id - c.segment_id), source: "segments" } : { rooms: n.rooms.map((l) => ({ segment_id: l.segment_id, name: l.source_name })), source: "image" };
}
function Qz(n, a, o, r) {
  if (o?.area_mapping) {
    if (a === void 0) return;
    const m = `${a}_${n.segment_id}`, f = Object.entries(o.area_mapping).find(([, p]) => p.includes(m))?.[0];
    return f ? { area_id: f, source: "mapping" } : void 0;
  }
  const l = it(n.name), c = r.find((m) => it(m.name) === l);
  return c ? { area_id: c.area_id, source: "name" } : void 0;
}
const Jz = ["en", "nl", "pl", "tr"];
async function yd(n, a) {
  if (n.callWS)
    try {
      return (await n.callWS({ type: "config/entity_registry/get", entity_id: a })).options?.vacuum;
    } catch {
      return;
    }
}
function Wz(n, a) {
  const o = Fo(n, [a.robot?.id, a.dock?.id]), r = {};
  for (const [l, c] of Object.entries(Rz)) {
    const m = c?.map((f) => Gs(n, o, f)).find(Boolean);
    m && (r[l] = m);
  }
  return r;
}
function Fz(n, a) {
  const o = Fo(n, [a.robot?.id, a.dock?.id]), r = [];
  for (const l of Zz) {
    if (r.some((f) => f.kind === l.kind)) continue;
    const c = Gs(n, o, { domain: "sensor", translation_key: l.sensor });
    if (!c) continue;
    const m = l.reset ? Gs(n, o, { domain: "button", translation_key: l.reset }) : void 0;
    r.push({ kind: l.kind, sensor: c, ...m ? { reset_button: m } : {} });
  }
  return r;
}
function Iz(n, a) {
  const o = Fo(n, [a.dock?.id]);
  return Object.fromEntries(Object.entries(Uz).flatMap(([r, l]) => {
    const c = Gs(n, o, l);
    return c ? [[r, c]] : [];
  }));
}
function ex(n, a) {
  return a.find((o) => o === n) ?? a.find((o) => it(o) === it(n));
}
function tx(n, a) {
  const o = it(n);
  return a.find((r) => {
    const l = it(r.name);
    return l.includes(o) && /vac.*mop/.test(l.replace(/ /g, ""));
  })?.entity_id;
}
function nx(n, a) {
  let o = n;
  for (let r = 2; a.has(o); r += 1) o = `${n}_${r}`;
  return a.add(o), o;
}
function al(n, a, o, r) {
  const l = Ey(n, a), c = [];
  l.robot || c.push({ code: "robot_device_missing" });
  const m = Wz(n, l), f = m.map_select ? (n.states[m.map_select]?.attributes.options ?? []).map(String) : [], p = Lz(n, l);
  l.robot && p.length === 0 && c.push({ code: "custom_map_missing" }), o?.area_mapping || c.push({ code: "segment_mapping_unavailable" });
  const y = Gz(o), v = Pz(y, f), b = new Map([...v].map(([Q, ie]) => [it(ie), Q])), w = Dz(n, l), k = Object.values(n.areas ?? {}), x = [
    ...f.flatMap((Q) => p.filter((ie) => it(ie.map_name) === it(Q))),
    ...p.filter((Q) => !f.some((ie) => it(ie) === it(Q.map_name)))
  ];
  for (const Q of f)
    p.some((ie) => it(ie.map_name) === it(Q)) || c.push({ code: "map_without_image", map_name: Q });
  const $ = /* @__PURE__ */ new Set(), U = [], B = x.map((Q) => {
    Q.calibrated || c.push({ code: "map_not_calibrated", entity_id: Q.entity_id });
    const ie = nx(Xz(Q.map_name), $), ce = b.get(it(Q.map_name)), Oe = Kz(Q, ce, y);
    Oe.source === "image" && c.push({ code: "rooms_from_image", floor_id: ie });
    const te = Oe.rooms.map((V) => {
      const ee = Qz(V, ce, o, k);
      ee || c.push({ code: "room_unmapped", floor_id: ie, segment_id: V.segment_id, name: V.name });
      const fe = ee ? n.areas?.[ee.area_id]?.icon ?? void 0 : void 0;
      return {
        segment_id: V.segment_id,
        ...ee ? { area_id: ee.area_id } : {},
        name: V.name,
        ...fe ? { icon: fe } : {},
        include_in_floor_clean: !!ee
      };
    }), ae = tx(Q.map_name, w), T = ex(Q.map_name, f);
    return U.push({ floor_id: ie, map_entity: Q.entity_id, map_name: Q.map_name, ...ae ? { routine: ae } : {} }), {
      id: ie,
      name: Q.map_name,
      map_entity: Q.entity_id,
      ...T ? { map_select_option: T } : {},
      ...ae ? { vacuum_then_mop_routine: ae } : {},
      rooms: te
    };
  }), I = l.robot?.model_id ?? l.robot?.model ?? void 0, L = jy(I, r?.flags), J = L.profile, K = (Q) => L.sources[Q] === "profile" || L.sources[Q] === "device", X = Ay({
    model: I,
    protocol: r?.protocol,
    haVersion: n.config?.version,
    hasCustomMap: l.robot ? p.length > 0 : void 0,
    hasDeviceFlags: !!r
  });
  l.robot && X.reasons.includes("unknown_model") && c.push({ code: "unknown_model", model: I }), X.verdict === "unsupported" && c.push({ code: "unsupported", reasons: X.reasons });
  const P = Fz(n, l), oe = n.locale?.language?.split("-")[0];
  return {
    config: {
      type: "custom:roborock-vacuum-map-card",
      config_version: wz,
      entity: a,
      ...oe && Jz.includes(oe) && oe !== "en" ? { language: oe } : {},
      entities: m,
      floors: B,
      default_preset: "vacuum_only",
      ...P.length > 0 ? { consumables: P } : {},
      ...L.mop_only ? { enable_mop_only: !0 } : {},
      ...L.mop_routes && K("mop_routes") ? { mop_routes: structuredClone(L.mop_routes) } : {},
      ...L.repeat && L.sources.repeat === "device" ? { cleaning_count_command: L.repeat } : {},
      ...L.smartplan !== void 0 && L.sources.smartplan === "device" ? { enable_smartplan: L.smartplan } : {}
    },
    report: {
      vacuum: a,
      model: I,
      profile: J,
      compatibility: X,
      fact_sources: L.sources,
      devices: l,
      entities: m,
      floors: U,
      routines: w,
      native_dock: Iz(n, l),
      area_source: o?.area_mapping ? "mapping" : "name",
      issues: c
    }
  };
}
const Cy = {
  title: "Roborock Vacuum Map Card",
  intro: "Set up the vacuum, floors, rooms, dock and presets. Most fields are filled in for you.",
  setupAssistant: "Setup assistant",
  redetect: "Re-detect",
  close: "Close",
  back: "Back",
  next: "Next",
  fix: "Fix",
  notConfigured: "Not configured",
  notSet: "(not set)",
  moveUp: "Move up",
  moveDown: "Move down",
  remove: "Remove",
  id: "ID",
  name: "Name",
  icon: "Icon",
  area: "Area",
  unmapped: "Unmapped",
  sectionBasics: "Basics",
  sectionFloors: "Floors and rooms",
  sectionDock: "Dock",
  sectionPresets: "Presets",
  sectionAdvanced: "Advanced: entities",
  namePlaceholder: "Use the vacuum name",
  cardLanguage: "Card language",
  vacuum: "Vacuum",
  mopOnly: "Show Mop only (only if your Roborock app offers it)",
  vacuumModeFallback: "Use the deprecated Vacuum-mode fallback (Home Assistant 2026.7 and older; untick to remove)",
  profileNote: "Model profile: {label} ({status}).",
  status_tested: "tested",
  status_community: "community-tested",
  status_experimental: "experimental, please report results",
  unsupportedModel: "{name} is not supported by this card.",
  unsupportedProtocol: "{name} is not supported by this card ({protocol} protocol).",
  recognisedModel: "Recognised model: {name} (feature data from python-roborock).",
  unknownModel: "No profile for {name} yet; options are detected from Home Assistant.",
  reportModel: "Report your model",
  addFloor: "Add floor",
  floorNumber: "Floor {n}",
  customMap: "Custom map",
  mapOption: "Map selector option",
  routine: "Vac followed by Mop routine",
  noRoutine: "None",
  assistedCarry: "This floor has no dock (assisted carry)",
  rooms: "Rooms",
  roomsCount: "{n} rooms",
  noRooms: "Select a calibrated custom-map image to discover rooms.",
  segment: "Segment {n}",
  includeFloor: "Include in Entire floor",
  assistedScripts: "Assisted carry",
  assistedScriptsHint: "Assisted carry needs a stage and a job helper and three scripts. Create the scripts from the blueprints:",
  dockHelpers: "Remembered dock settings",
  dockHelpersHint: "Home Assistant can't read most dock settings back, so the card remembers the last accepted setting in these helpers. They are optional.",
  createHelpers: "Create {n} missing helpers",
  helpersCreated: "Created {n} helpers.",
  helpersFailed: "Could not create helpers: {error}",
  helpersYaml: "Ask an administrator to create them, or add this to configuration.yaml:",
  helpersInPlace: "All {n} helpers are in place.",
  helpersMissing: "{n} helpers are missing: {names}.",
  helperMismatch: "{entity} is missing the options {options}.",
  dockSensors: "Dock sensors",
  maintenanceParts: "Maintenance parts",
  noConsumables: "No parts configured yet. Re-detect adds them.",
  blueprintsHint: "Optional scripts can be created from blueprints:",
  addPreset: "Add preset",
  newPreset: "New preset",
  strategy: "Strategy",
  strategyCustom: "Custom",
  strategySmartPlan: "AI SmartPlan",
  cleaningType: "Cleaning type",
  type_vacuum: "Vacuum only",
  type_mop: "Mop only",
  type_vacuum_and_mop: "Vac & Mop",
  type_vacuum_then_mop: "Vac followed by Mop",
  suction: "Suction",
  route: "Mop route",
  water: "Water flow",
  count: "Cleaning count",
  defaultPreset: "Mode selected when the job sheet opens",
  scriptsTitle: "Presets as scripts",
  scriptsHint: "A script runs a preset on a floor or chosen areas, so automations, schedules and voice assistants can use it. Scripts are snapshots: create them again after changing a preset.",
  createScript: "Create script",
  showYaml: "Show YAML",
  scriptCreated: "Created {entity}",
  scriptExists: "{entity} already exists. Replace it?",
  advancedIntro: "These are filled in from your Roborock devices. Change them only if something is wrong.",
  autoDetected: "auto-detected",
  manual: "manual",
  useDetected: "Use {entity}",
  group_robot: "Robot",
  group_status: "Status",
  group_dock: "Dock",
  group_assisted: "Assisted carry",
  group_legacy: "Legacy",
  entity_map_select: "Selected map",
  entity_cleaning_mode: "Cleaning mode",
  entity_mop_mode: "Mop route",
  entity_mop_intensity: "Water flow",
  entity_water_shortage: "Water shortage",
  entity_mop_attached: "Mop attached",
  entity_water_box_attached: "Water tank attached",
  entity_do_not_disturb: "Do not disturb",
  entity_battery: "Battery",
  entity_status: "Status",
  entity_error: "Error",
  entity_current_room: "Current room",
  entity_cleaning_area: "Cleaning area",
  entity_cleaning_time: "Cleaning time",
  entity_cleaning_progress: "Cleaning progress",
  entity_last_clean_end: "Last clean end",
  entity_dock_mop_drying: "Mop drying",
  entity_dock_mop_drying_remaining_time: "Mop drying time left",
  entity_dock_child_lock: "Child lock",
  entity_dock_clean_water_empty: "Clean water tank empty",
  entity_dock_dirty_water_full: "Dirty water tank full",
  entity_dock_error: "Dock error",
  entity_dock_clean_fluid_empty: "Cleaning fluid empty",
  entity_dock_detergent_empty: "Detergent empty",
  entity_dock_mop_wash_frequency: "Mop wash frequency",
  entity_dock_wash_mode: "Washing mode",
  entity_dock_wash_temperature: "Wash temperature",
  entity_dock_auto_empty: "Auto-empty",
  entity_dock_empty_mode: "Empty mode",
  entity_dock_auto_dry: "Auto-drying",
  entity_dock_dry_duration: "Drying duration",
  entity_assisted_carry_stage: "Stage helper",
  entity_assisted_carry_job: "Saved job helper",
  entity_assisted_carry_prepare_script: "Prepare script",
  entity_assisted_carry_start_script: "Start script",
  entity_assisted_carry_finish_script: "Finish script",
  entity_vacuum_then_mop_script: "Vac followed by Mop script (legacy fallback)",
  wizardStep: "Setup assistant · step {n} of {total}",
  step_check: "Before you start",
  step_robot: "Your robot",
  step_floors: "Floors",
  step_rooms: "Rooms",
  step_dock: "Dock and helpers",
  step_presets: "Presets",
  step_review: "Review and save",
  prereq_home_assistant_version: "Home Assistant 2026.8 or newer",
  prereq_roborock_integration: "The Roborock integration with at least one vacuum",
  prereq_custom_map: "Roborock Custom Map, for calibrated maps with rooms",
  prereq_administrator: "An administrator account, to read room areas and create helpers",
  discovering: "Looking at your Roborock devices…",
  verdict_supported: "Supported",
  verdict_limited: "Supported with limits",
  verdict_unsupported: "Not supported",
  profileStatus: "{status} profile",
  reason_not_a_robot_vacuum: "This device is not a robot vacuum.",
  reason_protocol_unsupported: "This model uses a Roborock protocol the card does not support.",
  reason_home_assistant_too_old: "Home Assistant 2026.8 or newer is needed.",
  reason_custom_map_missing: "No Roborock Custom Map images were found for this vacuum.",
  reason_unknown_model: "This model is new to the card. Options are detected from Home Assistant; please send a model report.",
  fact_smartplan: "AI SmartPlan",
  fact_routes: "Mop routes",
  fact_passes: "Two passes",
  fact_passes_segment: "per room segment",
  fact_passes_setting: "cleaning-count setting",
  fact_native_routine: "Native Vac followed by Mop",
  fact_dock: "Dock",
  fact_flags: "Facts read from the robot",
  fact_flags_missing: "no (needs an administrator)",
  yes: "yes",
  no: "no",
  unknown: "unknown",
  none: "none",
  basicDock: "basic",
  floorsIntro: "Each Roborock map becomes a floor. Untick maps you don't want on the card.",
  notCalibrated: "not calibrated",
  mapsWithoutImage: "No Roborock Custom Map image for: {maps}. Reload Roborock Custom Map after switching to that map once.",
  roomsIntro: "Rooms need a Home Assistant area to be cleaned. Areas come from your Roborock settings in Home Assistant where possible.",
  nativeDockFound: "The dock's own Empty, Wash and Dry controls were found; the card's dock panel uses the same actions.",
  eveningPreset: "Add an Evening preset (quiet vacuum)",
  eveningName: "Evening",
  presetsScriptsHint: "Presets can be turned into Home Assistant scripts from the editor, for automations and voice assistants.",
  reviewIntro: "This is the card configuration the assistant will save. You can change everything later in the editor.",
  saveCard: "Save card",
  redetectIntro: "Looks for new entities, maps, rooms and areas, and for values that no longer exist. Nothing changes until you apply it.",
  checkNow: "Check now",
  checking: "Checking…",
  upToDate: "Everything is up to date.",
  applyChanges: "Apply {n} changes",
  change_entity_add: "Add {label}: {to}",
  change_entity_replace: "Replace missing {label} {from} with {to}",
  change_floor_added: "Add floor {name} ({n} rooms)",
  change_floor_map: "Floor {floor}: map image {from} → {to}",
  change_floor_option: "Floor {floor}: map {from} → {to}",
  change_room_area: "Room {room}: area {from} → {to}",
  change_room_added: "Add room {room} to floor {floor}",
  change_room_added_unmapped: "Add room {room} to floor {floor} (no area yet)",
  change_consumables: "Show {n} parts in the maintenance view",
  change_model_fact: "Set {key} from the robot's own feature flags",
  change_config_version: "Record config format version {n}"
}, ax = {
  title: "Roborock Vacuum Map Card",
  intro: "Stel de stofzuiger, verdiepingen, ruimtes, het station en presets in. De meeste velden worden voor je ingevuld.",
  setupAssistant: "Installatie-assistent",
  redetect: "Opnieuw detecteren",
  close: "Sluiten",
  back: "Terug",
  next: "Volgende",
  fix: "Oplossen",
  notConfigured: "Niet ingesteld",
  notSet: "(niet ingesteld)",
  moveUp: "Omhoog",
  moveDown: "Omlaag",
  remove: "Verwijderen",
  id: "ID",
  name: "Naam",
  icon: "Pictogram",
  area: "Gebied",
  unmapped: "Niet gekoppeld",
  sectionBasics: "Basis",
  sectionFloors: "Verdiepingen en ruimtes",
  sectionDock: "Station",
  sectionPresets: "Presets",
  sectionAdvanced: "Geavanceerd: entiteiten",
  namePlaceholder: "Naam van de stofzuiger gebruiken",
  cardLanguage: "Taal van de kaart",
  vacuum: "Stofzuiger",
  mopOnly: "Alleen dweilen tonen (alleen als je Roborock-app het aanbiedt)",
  vacuumModeFallback: "Verouderde stofzuigmodus-terugval gebruiken (Home Assistant 2026.7 en ouder; vink uit om te verwijderen)",
  profileNote: "Modelprofiel: {label} ({status}).",
  status_tested: "getest",
  status_community: "getest door de community",
  status_experimental: "experimenteel, meld je resultaten",
  unsupportedModel: "{name} wordt niet ondersteund door deze kaart.",
  unsupportedProtocol: "{name} wordt niet ondersteund door deze kaart ({protocol}-protocol).",
  recognisedModel: "Herkend model: {name} (functiegegevens van python-roborock).",
  unknownModel: "Nog geen profiel voor {name}; opties worden uit Home Assistant gehaald.",
  reportModel: "Meld je model",
  addFloor: "Verdieping toevoegen",
  floorNumber: "Verdieping {n}",
  customMap: "Aangepaste kaart",
  mapOption: "Optie in kaartkeuze",
  routine: "Routine voor eerst stofzuigen, dan dweilen",
  noRoutine: "Geen",
  assistedCarry: "Deze verdieping heeft geen station (begeleid dragen)",
  rooms: "Ruimtes",
  roomsCount: "{n} ruimtes",
  noRooms: "Kies een gekalibreerde aangepaste kaart om ruimtes te vinden.",
  segment: "Segment {n}",
  includeFloor: "Meenemen in Hele verdieping",
  assistedScripts: "Begeleid dragen",
  assistedScriptsHint: "Begeleid dragen heeft een fase- en een taakhelper en drie scripts nodig. Maak de scripts met de blueprints:",
  dockHelpers: "Onthouden stationsinstellingen",
  dockHelpersHint: "Home Assistant kan de meeste stationsinstellingen niet teruglezen, dus de kaart onthoudt de laatst geaccepteerde instelling in deze helpers. Ze zijn optioneel.",
  createHelpers: "{n} ontbrekende helpers aanmaken",
  helpersCreated: "{n} helpers aangemaakt.",
  helpersFailed: "Helpers aanmaken mislukt: {error}",
  helpersYaml: "Vraag een beheerder ze aan te maken, of zet dit in configuration.yaml:",
  helpersInPlace: "Alle {n} helpers zijn aanwezig.",
  helpersMissing: "{n} helpers ontbreken: {names}.",
  helperMismatch: "{entity} mist de opties {options}.",
  dockSensors: "Stationssensoren",
  maintenanceParts: "Onderhoudsonderdelen",
  noConsumables: "Nog geen onderdelen ingesteld. Opnieuw detecteren voegt ze toe.",
  blueprintsHint: "Optionele scripts kun je maken met blueprints:",
  addPreset: "Preset toevoegen",
  newPreset: "Nieuwe preset",
  strategy: "Strategie",
  strategyCustom: "Aangepast",
  strategySmartPlan: "AI SmartPlan",
  cleaningType: "Schoonmaaktype",
  type_vacuum: "Alleen stofzuigen",
  type_mop: "Alleen dweilen",
  type_vacuum_and_mop: "Stofzuigen en dweilen",
  type_vacuum_then_mop: "Eerst stofzuigen, dan dweilen",
  suction: "Zuigkracht",
  route: "Dweilroute",
  water: "Waterstroom",
  count: "Aantal rondes",
  defaultPreset: "Modus bij het openen van het taakvenster",
  scriptsTitle: "Presets als scripts",
  scriptsHint: "Een script voert een preset uit op een verdieping of gekozen gebieden, zodat automatiseringen, schema’s en spraakassistenten het kunnen gebruiken. Scripts zijn momentopnames: maak ze opnieuw na het wijzigen van een preset.",
  createScript: "Script maken",
  showYaml: "YAML tonen",
  scriptCreated: "{entity} aangemaakt",
  scriptExists: "{entity} bestaat al. Vervangen?",
  advancedIntro: "Deze worden ingevuld vanuit je Roborock-apparaten. Wijzig ze alleen als er iets niet klopt.",
  autoDetected: "automatisch gevonden",
  manual: "handmatig",
  useDetected: "{entity} gebruiken",
  group_robot: "Robot",
  group_status: "Status",
  group_dock: "Station",
  group_assisted: "Begeleid dragen",
  group_legacy: "Verouderd",
  entity_map_select: "Geselecteerde kaart",
  entity_cleaning_mode: "Schoonmaakmodus",
  entity_mop_mode: "Dweilroute",
  entity_mop_intensity: "Waterstroom",
  entity_water_shortage: "Watertekort",
  entity_mop_attached: "Mop bevestigd",
  entity_water_box_attached: "Waterreservoir geplaatst",
  entity_do_not_disturb: "Niet storen",
  entity_battery: "Batterij",
  entity_status: "Status",
  entity_error: "Fout",
  entity_current_room: "Huidige ruimte",
  entity_cleaning_area: "Schoongemaakt oppervlak",
  entity_cleaning_time: "Schoonmaaktijd",
  entity_cleaning_progress: "Voortgang",
  entity_last_clean_end: "Einde laatste beurt",
  entity_dock_mop_drying: "Mop drogen",
  entity_dock_mop_drying_remaining_time: "Resterende droogtijd",
  entity_dock_child_lock: "Kinderslot",
  entity_dock_clean_water_empty: "Schoonwaterreservoir leeg",
  entity_dock_dirty_water_full: "Vuilwaterreservoir vol",
  entity_dock_error: "Stationsfout",
  entity_dock_clean_fluid_empty: "Reinigingsmiddel leeg",
  entity_dock_detergent_empty: "Schoonmaakmiddel leeg",
  entity_dock_mop_wash_frequency: "Wasfrequentie mop",
  entity_dock_wash_mode: "Wasmodus",
  entity_dock_wash_temperature: "Wastemperatuur",
  entity_dock_auto_empty: "Automatisch legen",
  entity_dock_empty_mode: "Leegmodus",
  entity_dock_auto_dry: "Automatisch drogen",
  entity_dock_dry_duration: "Droogduur",
  entity_assisted_carry_stage: "Fasehelper",
  entity_assisted_carry_job: "Helper voor opgeslagen taak",
  entity_assisted_carry_prepare_script: "Voorbereidingsscript",
  entity_assisted_carry_start_script: "Startscript",
  entity_assisted_carry_finish_script: "Afrondscript",
  entity_vacuum_then_mop_script: "Script voor eerst stofzuigen, dan dweilen (verouderde terugval)",
  wizardStep: "Installatie-assistent · stap {n} van {total}",
  step_check: "Voordat je begint",
  step_robot: "Je robot",
  step_floors: "Verdiepingen",
  step_rooms: "Ruimtes",
  step_dock: "Station en helpers",
  step_presets: "Presets",
  step_review: "Controleren en opslaan",
  prereq_home_assistant_version: "Home Assistant 2026.8 of nieuwer",
  prereq_roborock_integration: "De Roborock-integratie met minstens één stofzuiger",
  prereq_custom_map: "Roborock Custom Map, voor gekalibreerde kaarten met ruimtes",
  prereq_administrator: "Een beheerdersaccount, om ruimtegebieden te lezen en helpers te maken",
  discovering: "Je Roborock-apparaten worden bekeken…",
  verdict_supported: "Ondersteund",
  verdict_limited: "Ondersteund met beperkingen",
  verdict_unsupported: "Niet ondersteund",
  profileStatus: "profiel: {status}",
  reason_not_a_robot_vacuum: "Dit apparaat is geen robotstofzuiger.",
  reason_protocol_unsupported: "Dit model gebruikt een Roborock-protocol dat de kaart niet ondersteunt.",
  reason_home_assistant_too_old: "Home Assistant 2026.8 of nieuwer is nodig.",
  reason_custom_map_missing: "Er zijn geen Roborock Custom Map-afbeeldingen gevonden voor deze stofzuiger.",
  reason_unknown_model: "Dit model is nieuw voor de kaart. Opties komen uit Home Assistant; stuur alsjeblieft een modelmelding.",
  fact_smartplan: "AI SmartPlan",
  fact_routes: "Dweilroutes",
  fact_passes: "Twee rondes",
  fact_passes_segment: "per ruimtesegment",
  fact_passes_setting: "instelling voor aantal rondes",
  fact_native_routine: "Eigen routine voor eerst stofzuigen, dan dweilen",
  fact_dock: "Station",
  fact_flags: "Gegevens van de robot zelf",
  fact_flags_missing: "nee (vereist een beheerder)",
  yes: "ja",
  no: "nee",
  unknown: "onbekend",
  none: "geen",
  basicDock: "basis",
  floorsIntro: "Elke Roborock-kaart wordt een verdieping. Vink kaarten uit die je niet op de kaart wilt.",
  notCalibrated: "niet gekalibreerd",
  mapsWithoutImage: "Geen Roborock Custom Map-afbeelding voor: {maps}. Herlaad Roborock Custom Map nadat je één keer naar die kaart bent gewisseld.",
  roomsIntro: "Ruimtes hebben een Home Assistant-gebied nodig om schoongemaakt te worden. Gebieden komen waar mogelijk uit je Roborock-instellingen in Home Assistant.",
  nativeDockFound: "De eigen knoppen van het station voor legen, wassen en drogen zijn gevonden; het stationspaneel van de kaart gebruikt dezelfde acties.",
  eveningPreset: "Avond-preset toevoegen (stil stofzuigen)",
  eveningName: "Avond",
  presetsScriptsHint: "In de editor kun je presets omzetten naar Home Assistant-scripts, voor automatiseringen en spraakassistenten.",
  reviewIntro: "Dit is de kaartconfiguratie die de assistent opslaat. Je kunt later alles in de editor aanpassen.",
  saveCard: "Kaart opslaan",
  redetectIntro: "Zoekt naar nieuwe entiteiten, kaarten, ruimtes en gebieden, en naar waarden die niet meer bestaan. Er verandert niets tot je het toepast.",
  checkNow: "Nu controleren",
  checking: "Bezig met controleren…",
  upToDate: "Alles is up-to-date.",
  applyChanges: "{n} wijzigingen toepassen",
  change_entity_add: "{label} toevoegen: {to}",
  change_entity_replace: "Ontbrekende {label} {from} vervangen door {to}",
  change_floor_added: "Verdieping {name} toevoegen ({n} ruimtes)",
  change_floor_map: "Verdieping {floor}: kaartafbeelding {from} → {to}",
  change_floor_option: "Verdieping {floor}: kaart {from} → {to}",
  change_room_area: "Ruimte {room}: gebied {from} → {to}",
  change_room_added: "Ruimte {room} toevoegen aan verdieping {floor}",
  change_room_added_unmapped: "Ruimte {room} toevoegen aan verdieping {floor} (nog geen gebied)",
  change_consumables: "{n} onderdelen tonen in het onderhoudsoverzicht",
  change_model_fact: "{key} instellen vanuit de gegevens van de robot zelf",
  change_config_version: "Configuratieversie {n} vastleggen"
}, ix = {
  title: "Roborock Vacuum Map Card",
  intro: "Skonfiguruj odkurzacz, piętra, pomieszczenia, stację i ustawienia wstępne. Większość pól jest wypełniana automatycznie.",
  setupAssistant: "Asystent konfiguracji",
  redetect: "Wykryj ponownie",
  close: "Zamknij",
  back: "Wstecz",
  next: "Dalej",
  fix: "Napraw",
  notConfigured: "Nie skonfigurowano",
  notSet: "(nie ustawiono)",
  moveUp: "W górę",
  moveDown: "W dół",
  remove: "Usuń",
  id: "ID",
  name: "Nazwa",
  icon: "Ikona",
  area: "Obszar",
  unmapped: "Nieprzypisane",
  sectionBasics: "Podstawy",
  sectionFloors: "Piętra i pomieszczenia",
  sectionDock: "Stacja",
  sectionPresets: "Ustawienia wstępne",
  sectionAdvanced: "Zaawansowane: encje",
  namePlaceholder: "Użyj nazwy odkurzacza",
  cardLanguage: "Język karty",
  vacuum: "Odkurzacz",
  mopOnly: "Pokaż tylko mopowanie (tylko jeśli aplikacja Roborock to oferuje)",
  vacuumModeFallback: "Użyj przestarzałego trybu zastępczego odkurzania (Home Assistant 2026.7 i starsze; odznacz, aby usunąć)",
  profileNote: "Profil modelu: {label} ({status}).",
  status_tested: "przetestowany",
  status_community: "przetestowany przez społeczność",
  status_experimental: "eksperymentalny, zgłoś wyniki",
  unsupportedModel: "{name} nie jest obsługiwany przez tę kartę.",
  unsupportedProtocol: "{name} nie jest obsługiwany przez tę kartę (protokół {protocol}).",
  recognisedModel: "Rozpoznany model: {name} (dane funkcji z python-roborock).",
  unknownModel: "Brak jeszcze profilu dla {name}; opcje są wykrywane z Home Assistant.",
  reportModel: "Zgłoś swój model",
  addFloor: "Dodaj piętro",
  floorNumber: "Piętro {n}",
  customMap: "Mapa niestandardowa",
  mapOption: "Opcja wyboru mapy",
  routine: "Rutyna: najpierw odkurzanie, potem mopowanie",
  noRoutine: "Brak",
  assistedCarry: "To piętro nie ma stacji (przenoszenie z asystą)",
  rooms: "Pomieszczenia",
  roomsCount: "Pomieszczenia: {n}",
  noRooms: "Wybierz skalibrowaną mapę niestandardową, aby wykryć pomieszczenia.",
  segment: "Segment {n}",
  includeFloor: "Uwzględnij w całym piętrze",
  assistedScripts: "Przenoszenie z asystą",
  assistedScriptsHint: "Przenoszenie z asystą wymaga pomocnika etapu, pomocnika zadania i trzech skryptów. Utwórz skrypty z planów (blueprints):",
  dockHelpers: "Zapamiętane ustawienia stacji",
  dockHelpersHint: "Home Assistant nie potrafi odczytać większości ustawień stacji, więc karta zapamiętuje ostatnie zaakceptowane ustawienie w tych pomocnikach. Są opcjonalne.",
  createHelpers: "Utwórz brakujących pomocników: {n}",
  helpersCreated: "Utworzono pomocników: {n}.",
  helpersFailed: "Nie udało się utworzyć pomocników: {error}",
  helpersYaml: "Poproś administratora o ich utworzenie lub dodaj to do configuration.yaml:",
  helpersInPlace: "Wszyscy pomocnicy ({n}) są na miejscu.",
  helpersMissing: "Brakuje pomocników ({n}): {names}.",
  helperMismatch: "{entity} nie ma opcji {options}.",
  dockSensors: "Czujniki stacji",
  maintenanceParts: "Części do konserwacji",
  noConsumables: "Nie skonfigurowano jeszcze części. Ponowne wykrycie je doda.",
  blueprintsHint: "Opcjonalne skrypty można utworzyć z planów (blueprints):",
  addPreset: "Dodaj ustawienie",
  newPreset: "Nowe ustawienie",
  strategy: "Strategia",
  strategyCustom: "Własna",
  strategySmartPlan: "AI SmartPlan",
  cleaningType: "Rodzaj sprzątania",
  type_vacuum: "Tylko odkurzanie",
  type_mop: "Tylko mopowanie",
  type_vacuum_and_mop: "Odkurzanie i mopowanie",
  type_vacuum_then_mop: "Najpierw odkurzanie, potem mopowanie",
  suction: "Siła ssania",
  route: "Trasa mopowania",
  water: "Przepływ wody",
  count: "Liczba przejść",
  defaultPreset: "Tryb wybrany po otwarciu okna zadania",
  scriptsTitle: "Ustawienia jako skrypty",
  scriptsHint: "Skrypt uruchamia ustawienie na piętrze lub wybranych obszarach, dzięki czemu automatyzacje, harmonogramy i asystenci głosowi mogą z niego korzystać. Skrypty to migawki: utwórz je ponownie po zmianie ustawienia.",
  createScript: "Utwórz skrypt",
  showYaml: "Pokaż YAML",
  scriptCreated: "Utworzono {entity}",
  scriptExists: "{entity} już istnieje. Zastąpić?",
  advancedIntro: "Te pola są wypełniane na podstawie urządzeń Roborock. Zmieniaj je tylko, gdy coś się nie zgadza.",
  autoDetected: "wykryto automatycznie",
  manual: "ręcznie",
  useDetected: "Użyj {entity}",
  group_robot: "Robot",
  group_status: "Stan",
  group_dock: "Stacja",
  group_assisted: "Przenoszenie z asystą",
  group_legacy: "Starsze",
  entity_map_select: "Wybrana mapa",
  entity_cleaning_mode: "Tryb sprzątania",
  entity_mop_mode: "Trasa mopowania",
  entity_mop_intensity: "Przepływ wody",
  entity_water_shortage: "Brak wody",
  entity_mop_attached: "Mop zamontowany",
  entity_water_box_attached: "Zbiornik na wodę zamontowany",
  entity_do_not_disturb: "Nie przeszkadzać",
  entity_battery: "Bateria",
  entity_status: "Stan",
  entity_error: "Błąd",
  entity_current_room: "Bieżące pomieszczenie",
  entity_cleaning_area: "Sprzątana powierzchnia",
  entity_cleaning_time: "Czas sprzątania",
  entity_cleaning_progress: "Postęp sprzątania",
  entity_last_clean_end: "Koniec ostatniego sprzątania",
  entity_dock_mop_drying: "Suszenie mopa",
  entity_dock_mop_drying_remaining_time: "Pozostały czas suszenia",
  entity_dock_child_lock: "Blokada rodzicielska",
  entity_dock_clean_water_empty: "Zbiornik na czystą wodę pusty",
  entity_dock_dirty_water_full: "Zbiornik na brudną wodę pełny",
  entity_dock_error: "Błąd stacji",
  entity_dock_clean_fluid_empty: "Brak płynu czyszczącego",
  entity_dock_detergent_empty: "Brak detergentu",
  entity_dock_mop_wash_frequency: "Częstotliwość mycia mopa",
  entity_dock_wash_mode: "Tryb mycia",
  entity_dock_wash_temperature: "Temperatura mycia",
  entity_dock_auto_empty: "Automatyczne opróżnianie",
  entity_dock_empty_mode: "Tryb opróżniania",
  entity_dock_auto_dry: "Automatyczne suszenie",
  entity_dock_dry_duration: "Czas suszenia",
  entity_assisted_carry_stage: "Pomocnik etapu",
  entity_assisted_carry_job: "Pomocnik zapisanego zadania",
  entity_assisted_carry_prepare_script: "Skrypt przygotowania",
  entity_assisted_carry_start_script: "Skrypt startu",
  entity_assisted_carry_finish_script: "Skrypt zakończenia",
  entity_vacuum_then_mop_script: "Skrypt „najpierw odkurzanie, potem mopowanie” (starsze rozwiązanie)",
  wizardStep: "Asystent konfiguracji · krok {n} z {total}",
  step_check: "Zanim zaczniesz",
  step_robot: "Twój robot",
  step_floors: "Piętra",
  step_rooms: "Pomieszczenia",
  step_dock: "Stacja i pomocnicy",
  step_presets: "Ustawienia wstępne",
  step_review: "Sprawdź i zapisz",
  prereq_home_assistant_version: "Home Assistant 2026.8 lub nowszy",
  prereq_roborock_integration: "Integracja Roborock z co najmniej jednym odkurzaczem",
  prereq_custom_map: "Roborock Custom Map, dla skalibrowanych map z pomieszczeniami",
  prereq_administrator: "Konto administratora, aby odczytać obszary pomieszczeń i tworzyć pomocników",
  discovering: "Sprawdzanie urządzeń Roborock…",
  verdict_supported: "Obsługiwany",
  verdict_limited: "Obsługiwany z ograniczeniami",
  verdict_unsupported: "Nieobsługiwany",
  profileStatus: "profil: {status}",
  reason_not_a_robot_vacuum: "To urządzenie nie jest robotem sprzątającym.",
  reason_protocol_unsupported: "Ten model używa protokołu Roborock, którego karta nie obsługuje.",
  reason_home_assistant_too_old: "Wymagany jest Home Assistant 2026.8 lub nowszy.",
  reason_custom_map_missing: "Nie znaleziono obrazów Roborock Custom Map dla tego odkurzacza.",
  reason_unknown_model: "Ten model jest nowy dla karty. Opcje są wykrywane z Home Assistant; wyślij zgłoszenie modelu.",
  fact_smartplan: "AI SmartPlan",
  fact_routes: "Trasy mopowania",
  fact_passes: "Dwa przejścia",
  fact_passes_segment: "na segment pomieszczenia",
  fact_passes_setting: "ustawienie liczby przejść",
  fact_native_routine: "Własna rutyna: najpierw odkurzanie, potem mopowanie",
  fact_dock: "Stacja",
  fact_flags: "Dane odczytane z robota",
  fact_flags_missing: "nie (wymaga administratora)",
  yes: "tak",
  no: "nie",
  unknown: "nieznane",
  none: "brak",
  basicDock: "podstawowa",
  floorsIntro: "Każda mapa Roborock staje się piętrem. Odznacz mapy, których nie chcesz na karcie.",
  notCalibrated: "nieskalibrowana",
  mapsWithoutImage: "Brak obrazu Roborock Custom Map dla: {maps}. Przeładuj Roborock Custom Map po jednorazowym przełączeniu na tę mapę.",
  roomsIntro: "Pomieszczenia potrzebują obszaru Home Assistant, aby można je było sprzątać. Obszary pochodzą, gdy to możliwe, z ustawień Roborock w Home Assistant.",
  nativeDockFound: "Znaleziono własne przyciski stacji do opróżniania, mycia i suszenia; panel stacji karty używa tych samych akcji.",
  eveningPreset: "Dodaj ustawienie Wieczór (ciche odkurzanie)",
  eveningName: "Wieczór",
  presetsScriptsHint: "W edytorze ustawienia można zamienić na skrypty Home Assistant dla automatyzacji i asystentów głosowych.",
  reviewIntro: "To konfiguracja karty, którą zapisze asystent. Wszystko możesz później zmienić w edytorze.",
  saveCard: "Zapisz kartę",
  redetectIntro: "Szuka nowych encji, map, pomieszczeń i obszarów oraz wartości, które już nie istnieją. Nic się nie zmieni, dopóki tego nie zastosujesz.",
  checkNow: "Sprawdź teraz",
  checking: "Sprawdzanie…",
  upToDate: "Wszystko jest aktualne.",
  applyChanges: "Zastosuj zmiany: {n}",
  change_entity_add: "Dodaj {label}: {to}",
  change_entity_replace: "Zastąp brakujące {label} {from} przez {to}",
  change_floor_added: "Dodaj piętro {name} (pomieszczenia: {n})",
  change_floor_map: "Piętro {floor}: obraz mapy {from} → {to}",
  change_floor_option: "Piętro {floor}: mapa {from} → {to}",
  change_room_area: "Pomieszczenie {room}: obszar {from} → {to}",
  change_room_added: "Dodaj pomieszczenie {room} do piętra {floor}",
  change_room_added_unmapped: "Dodaj pomieszczenie {room} do piętra {floor} (jeszcze bez obszaru)",
  change_consumables: "Pokaż części w widoku konserwacji: {n}",
  change_model_fact: "Ustaw {key} na podstawie danych robota",
  change_config_version: "Zapisz wersję formatu konfiguracji {n}"
}, ox = {
  title: "Roborock Vacuum Map Card",
  intro: "Süpürgeyi, katları, odaları, istasyonu ve ön ayarları kurun. Alanların çoğu sizin için doldurulur.",
  setupAssistant: "Kurulum asistanı",
  redetect: "Yeniden algıla",
  close: "Kapat",
  back: "Geri",
  next: "İleri",
  fix: "Düzelt",
  notConfigured: "Yapılandırılmadı",
  notSet: "(ayarlanmadı)",
  moveUp: "Yukarı taşı",
  moveDown: "Aşağı taşı",
  remove: "Kaldır",
  id: "Kimlik",
  name: "Ad",
  icon: "Simge",
  area: "Alan",
  unmapped: "Eşlenmedi",
  sectionBasics: "Temel",
  sectionFloors: "Katlar ve odalar",
  sectionDock: "İstasyon",
  sectionPresets: "Ön ayarlar",
  sectionAdvanced: "Gelişmiş: varlıklar",
  namePlaceholder: "Süpürgenin adını kullan",
  cardLanguage: "Kart dili",
  vacuum: "Süpürge",
  mopOnly: "Yalnızca paspas modunu göster (yalnızca Roborock uygulamanız sunuyorsa)",
  vacuumModeFallback: "Eski süpürme modu yedeğini kullan (Home Assistant 2026.7 ve öncesi; kaldırmak için işareti kaldırın)",
  profileNote: "Model profili: {label} ({status}).",
  status_tested: "test edildi",
  status_community: "topluluk tarafından test edildi",
  status_experimental: "deneysel, lütfen sonuçları bildirin",
  unsupportedModel: "{name} bu kart tarafından desteklenmiyor.",
  unsupportedProtocol: "{name} bu kart tarafından desteklenmiyor ({protocol} protokolü).",
  recognisedModel: "Tanınan model: {name} (python-roborock özellik verileri).",
  unknownModel: "{name} için henüz profil yok; seçenekler Home Assistant’tan algılanıyor.",
  reportModel: "Modelinizi bildirin",
  addFloor: "Kat ekle",
  floorNumber: "Kat {n}",
  customMap: "Özel harita",
  mapOption: "Harita seçici seçeneği",
  routine: "Önce süpür, sonra paspasla rutini",
  noRoutine: "Yok",
  assistedCarry: "Bu katta istasyon yok (destekli taşıma)",
  rooms: "Odalar",
  roomsCount: "{n} oda",
  noRooms: "Odaları bulmak için kalibre edilmiş bir özel harita seçin.",
  segment: "Bölüm {n}",
  includeFloor: "Tüm kata dahil et",
  assistedScripts: "Destekli taşıma",
  assistedScriptsHint: "Destekli taşıma bir aşama yardımcısı, bir görev yardımcısı ve üç betik gerektirir. Betikleri planlardan (blueprint) oluşturun:",
  dockHelpers: "Hatırlanan istasyon ayarları",
  dockHelpersHint: "Home Assistant istasyon ayarlarının çoğunu geri okuyamaz, bu yüzden kart son kabul edilen ayarı bu yardımcılarda hatırlar. İsteğe bağlıdırlar.",
  createHelpers: "{n} eksik yardımcıyı oluştur",
  helpersCreated: "{n} yardımcı oluşturuldu.",
  helpersFailed: "Yardımcılar oluşturulamadı: {error}",
  helpersYaml: "Bir yöneticiden oluşturmasını isteyin veya bunu configuration.yaml dosyasına ekleyin:",
  helpersInPlace: "{n} yardımcının tümü mevcut.",
  helpersMissing: "{n} yardımcı eksik: {names}.",
  helperMismatch: "{entity} şu seçeneklerden yoksun: {options}.",
  dockSensors: "İstasyon sensörleri",
  maintenanceParts: "Bakım parçaları",
  noConsumables: "Henüz parça yapılandırılmadı. Yeniden algılama bunları ekler.",
  blueprintsHint: "İsteğe bağlı betikler planlardan (blueprint) oluşturulabilir:",
  addPreset: "Ön ayar ekle",
  newPreset: "Yeni ön ayar",
  strategy: "Strateji",
  strategyCustom: "Özel",
  strategySmartPlan: "AI SmartPlan",
  cleaningType: "Temizlik türü",
  type_vacuum: "Yalnızca süpürme",
  type_mop: "Yalnızca paspas",
  type_vacuum_and_mop: "Süpürme ve paspas",
  type_vacuum_then_mop: "Önce süpür, sonra paspasla",
  suction: "Emiş gücü",
  route: "Paspas rotası",
  water: "Su akışı",
  count: "Temizlik sayısı",
  defaultPreset: "Görev penceresi açıldığında seçilen mod",
  scriptsTitle: "Betik olarak ön ayarlar",
  scriptsHint: "Bir betik, ön ayarı bir katta veya seçilen alanlarda çalıştırır; böylece otomasyonlar, zamanlamalar ve sesli asistanlar kullanabilir. Betikler anlık görüntülerdir: ön ayarı değiştirdikten sonra yeniden oluşturun.",
  createScript: "Betik oluştur",
  showYaml: "YAML göster",
  scriptCreated: "{entity} oluşturuldu",
  scriptExists: "{entity} zaten var. Değiştirilsin mi?",
  advancedIntro: "Bunlar Roborock cihazlarınızdan doldurulur. Yalnızca bir sorun varsa değiştirin.",
  autoDetected: "otomatik algılandı",
  manual: "elle",
  useDetected: "{entity} kullan",
  group_robot: "Robot",
  group_status: "Durum",
  group_dock: "İstasyon",
  group_assisted: "Destekli taşıma",
  group_legacy: "Eski",
  entity_map_select: "Seçili harita",
  entity_cleaning_mode: "Temizlik modu",
  entity_mop_mode: "Paspas rotası",
  entity_mop_intensity: "Su akışı",
  entity_water_shortage: "Su eksikliği",
  entity_mop_attached: "Paspas takılı",
  entity_water_box_attached: "Su tankı takılı",
  entity_do_not_disturb: "Rahatsız etme",
  entity_battery: "Pil",
  entity_status: "Durum",
  entity_error: "Hata",
  entity_current_room: "Mevcut oda",
  entity_cleaning_area: "Temizlenen alan",
  entity_cleaning_time: "Temizlik süresi",
  entity_cleaning_progress: "Temizlik ilerlemesi",
  entity_last_clean_end: "Son temizliğin bitişi",
  entity_dock_mop_drying: "Paspas kurutma",
  entity_dock_mop_drying_remaining_time: "Kalan kurutma süresi",
  entity_dock_child_lock: "Çocuk kilidi",
  entity_dock_clean_water_empty: "Temiz su tankı boş",
  entity_dock_dirty_water_full: "Kirli su tankı dolu",
  entity_dock_error: "İstasyon hatası",
  entity_dock_clean_fluid_empty: "Temizlik sıvısı bitti",
  entity_dock_detergent_empty: "Deterjan bitti",
  entity_dock_mop_wash_frequency: "Paspas yıkama sıklığı",
  entity_dock_wash_mode: "Yıkama modu",
  entity_dock_wash_temperature: "Yıkama sıcaklığı",
  entity_dock_auto_empty: "Otomatik boşaltma",
  entity_dock_empty_mode: "Boşaltma modu",
  entity_dock_auto_dry: "Otomatik kurutma",
  entity_dock_dry_duration: "Kurutma süresi",
  entity_assisted_carry_stage: "Aşama yardımcısı",
  entity_assisted_carry_job: "Kayıtlı görev yardımcısı",
  entity_assisted_carry_prepare_script: "Hazırlık betiği",
  entity_assisted_carry_start_script: "Başlatma betiği",
  entity_assisted_carry_finish_script: "Bitirme betiği",
  entity_vacuum_then_mop_script: "Önce süpür, sonra paspasla betiği (eski yedek)",
  wizardStep: "Kurulum asistanı · adım {n} / {total}",
  step_check: "Başlamadan önce",
  step_robot: "Robotunuz",
  step_floors: "Katlar",
  step_rooms: "Odalar",
  step_dock: "İstasyon ve yardımcılar",
  step_presets: "Ön ayarlar",
  step_review: "Gözden geçir ve kaydet",
  prereq_home_assistant_version: "Home Assistant 2026.8 veya daha yenisi",
  prereq_roborock_integration: "En az bir süpürge içeren Roborock entegrasyonu",
  prereq_custom_map: "Odalı, kalibre edilmiş haritalar için Roborock Custom Map",
  prereq_administrator: "Oda alanlarını okumak ve yardımcı oluşturmak için yönetici hesabı",
  discovering: "Roborock cihazlarınıza bakılıyor…",
  verdict_supported: "Destekleniyor",
  verdict_limited: "Sınırlı destekleniyor",
  verdict_unsupported: "Desteklenmiyor",
  profileStatus: "profil: {status}",
  reason_not_a_robot_vacuum: "Bu cihaz bir robot süpürge değil.",
  reason_protocol_unsupported: "Bu model, kartın desteklemediği bir Roborock protokolü kullanıyor.",
  reason_home_assistant_too_old: "Home Assistant 2026.8 veya daha yenisi gerekiyor.",
  reason_custom_map_missing: "Bu süpürge için Roborock Custom Map görüntüsü bulunamadı.",
  reason_unknown_model: "Bu model kart için yeni. Seçenekler Home Assistant’tan algılanıyor; lütfen model raporu gönderin.",
  fact_smartplan: "AI SmartPlan",
  fact_routes: "Paspas rotaları",
  fact_passes: "İki geçiş",
  fact_passes_segment: "oda bölümü başına",
  fact_passes_setting: "temizlik sayısı ayarı",
  fact_native_routine: "Yerleşik önce süpür, sonra paspasla",
  fact_dock: "İstasyon",
  fact_flags: "Robottan okunan bilgiler",
  fact_flags_missing: "hayır (yönetici gerekir)",
  yes: "evet",
  no: "hayır",
  unknown: "bilinmiyor",
  none: "yok",
  basicDock: "temel",
  floorsIntro: "Her Roborock haritası bir kat olur. Kartta istemediğiniz haritaların işaretini kaldırın.",
  notCalibrated: "kalibre edilmedi",
  mapsWithoutImage: "Şunlar için Roborock Custom Map görüntüsü yok: {maps}. O haritaya bir kez geçtikten sonra Roborock Custom Map’i yeniden yükleyin.",
  roomsIntro: "Odaların temizlenebilmesi için bir Home Assistant alanı gerekir. Alanlar mümkün olduğunda Home Assistant’taki Roborock ayarlarınızdan gelir.",
  nativeDockFound: "İstasyonun kendi boşaltma, yıkama ve kurutma kontrolleri bulundu; kartın istasyon paneli aynı işlemleri kullanır.",
  eveningPreset: "Akşam ön ayarı ekle (sessiz süpürme)",
  eveningName: "Akşam",
  presetsScriptsHint: "Ön ayarlar, otomasyonlar ve sesli asistanlar için düzenleyicide Home Assistant betiklerine dönüştürülebilir.",
  reviewIntro: "Bu, asistanın kaydedeceği kart yapılandırmasıdır. Her şeyi daha sonra düzenleyicide değiştirebilirsiniz.",
  saveCard: "Kartı kaydet",
  redetectIntro: "Yeni varlıkları, haritaları, odaları ve alanları ile artık mevcut olmayan değerleri arar. Siz uygulayana kadar hiçbir şey değişmez.",
  checkNow: "Şimdi kontrol et",
  checking: "Kontrol ediliyor…",
  upToDate: "Her şey güncel.",
  applyChanges: "{n} değişikliği uygula",
  change_entity_add: "{label} ekle: {to}",
  change_entity_replace: "Eksik {label} {from} yerine {to} kullan",
  change_floor_added: "{name} katını ekle ({n} oda)",
  change_floor_map: "Kat {floor}: harita görüntüsü {from} → {to}",
  change_floor_option: "Kat {floor}: harita {from} → {to}",
  change_room_area: "Oda {room}: alan {from} → {to}",
  change_room_added: "{room} odasını {floor} katına ekle",
  change_room_added_unmapped: "{room} odasını {floor} katına ekle (henüz alan yok)",
  change_consumables: "Bakım görünümünde {n} parça göster",
  change_model_fact: "{key} değerini robotun kendi bilgilerinden ayarla",
  change_config_version: "Yapılandırma biçimi sürümü {n} kaydet"
}, My = { en: Cy, nl: ax, pl: ix, tr: ox };
function Oy(n, a) {
  const o = n.locale?.language?.split("-")[0];
  return o && o in My ? o : a ?? "en";
}
function rx(n, a, o = {}) {
  return (My[n] ?? Cy)[a].replace(/\{(\w+)\}/g, (r, l) => o[l] !== void 0 ? String(o[l]) : r);
}
const Mc = {
  home_assistant_version: "https://my.home-assistant.io/redirect/updates/",
  roborock_integration: "https://my.home-assistant.io/redirect/config_flow_start/?domain=roborock",
  custom_map: "https://my.home-assistant.io/redirect/hacs_repository/?owner=Python-roborock&repository=RoborockCustomMap&category=integration"
};
function sx(n) {
  if (!n) return;
  const [a, o] = n.split(".").map(Number);
  if (!(!Number.isFinite(a) || !Number.isFinite(o)))
    return a > Oi[0] || a === Oi[0] && o >= Oi[1];
}
function Ny(n) {
  const o = !!n.entities ? Object.values(n.entities ?? {}).some((r) => r.platform === Ty) : Object.keys(n.states).some((r) => r.startsWith("image.") && r.endsWith("_custom"));
  return [
    { id: "home_assistant_version", ok: sx(n.config?.version) ?? !0, blocking: !0, fix_url: Mc.home_assistant_version },
    { id: "roborock_integration", ok: _d(n).length > 0, blocking: !0, fix_url: Mc.roborock_integration },
    { id: "custom_map", ok: o, blocking: !0, fix_url: Mc.custom_map },
    // Needed for Home Assistant's room-to-area mapping and creating helpers; setup works without.
    { id: "administrator", ok: n.user?.is_admin !== !1, blocking: !1 }
  ];
}
function lx(n) {
  return n.every((a) => a.ok || !a.blocking);
}
function ux(n, a) {
  return !n.states[a.entity] || !a.floors.some((o) => o.map_entity && n.states[o.map_entity]);
}
const cx = "https://github.com/domidyon/roborock-vacuum-map-card/blob/beta/blueprints/script/roborock_vacuum_map_card", Di = {
  vacuum_then_mop: { file: "vacuum_then_mop.yaml", label: "Vac followed by Mop" },
  assisted_carry_prepare: { file: "assisted_carry_prepare.yaml", label: "Assisted carry: prepare" },
  assisted_carry_start: { file: "assisted_carry_start.yaml", label: "Assisted carry: start" },
  assisted_carry_finish: { file: "assisted_carry_finish.yaml", label: "Assisted carry: finish" }
};
function vd(n) {
  return `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(`${cx}/${n}`)}`;
}
function gd(n) {
  const [a, o] = F.useState(() => !!customElements.get(n));
  return F.useEffect(() => {
    a || customElements.whenDefined(n).then(() => o(!0));
  }, [a, n]), a;
}
function bd(n, a, o) {
  const r = F.useRef(null);
  return F.useEffect(() => {
    const l = r.current;
    if (!l) return;
    Object.assign(l, a);
    const c = (m) => o(m.detail.value || void 0);
    return l.addEventListener("value-changed", c), () => l.removeEventListener("value-changed", c);
  }), n ? r : void 0;
}
function dx(n, a, o) {
  const r = typeof a == "string" ? [a] : a;
  return Object.keys(n.states).filter((l) => r.includes(l.split(".")[0]) && (!o || o(l))).sort();
}
function mx({
  hass: n,
  domain: a,
  value: o,
  optional: r,
  emptyLabel: l,
  filter: c,
  onChange: m
}) {
  const f = dx(n, a, c);
  return /* @__PURE__ */ _.jsxs("select", { value: o ?? "", onChange: (p) => m(p.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: l ?? (r ? "Not configured" : `Select ${typeof a == "string" ? a : a.join(" / ")}`) }),
    f.map((p) => /* @__PURE__ */ _.jsx("option", { children: p }, p)),
    o && !f.includes(o) && /* @__PURE__ */ _.jsx("option", { value: o, children: o })
  ] });
}
function Ps({
  hass: n,
  domains: a,
  value: o,
  deviceIds: r,
  emptyLabel: l,
  onChange: c
}) {
  const m = r && r.size > 0 && n.entities ? (y) => y === o || r.has(n.entities?.[y]?.device_id ?? "") : void 0, f = gd("ha-entity-picker"), p = bd(f, {
    hass: n,
    value: o ?? "",
    includeDomains: [...a],
    entityFilter: m ? (y) => m(y.entity_id) : void 0
  }, c);
  return p ? /* @__PURE__ */ _.jsx("ha-entity-picker", { ref: p }) : /* @__PURE__ */ _.jsx(mx, { hass: n, domain: a, value: o, optional: !0, emptyLabel: l, filter: m, onChange: c });
}
function kd({ hass: n, value: a, placeholder: o, onChange: r }) {
  const l = gd("ha-icon-picker"), c = bd(l, { hass: n, value: a ?? "", placeholder: o }, r);
  return c ? /* @__PURE__ */ _.jsx("ha-icon-picker", { ref: c }) : /* @__PURE__ */ _.jsx("input", { value: a ?? "", placeholder: o ?? "mdi:floor-plan", onChange: (m) => r(m.target.value || void 0) });
}
function Dy({
  hass: n,
  areas: a,
  value: o,
  emptyLabel: r = "Unmapped",
  onChange: l
}) {
  const c = gd("ha-area-picker"), m = bd(!!n && c, { hass: n, value: o ?? "", noAdd: !0 }, l);
  return m ? /* @__PURE__ */ _.jsx("ha-area-picker", { ref: m }) : /* @__PURE__ */ _.jsxs("select", { value: o ?? "", onChange: (f) => l(f.target.value || void 0), children: [
    /* @__PURE__ */ _.jsx("option", { value: "", children: r }),
    a.map((f) => /* @__PURE__ */ _.jsxs("option", { value: f.area_id, children: [
      f.name,
      " (",
      f.area_id,
      ")"
    ] }, f.area_id)),
    o && !a.some((f) => f.area_id === o) && /* @__PURE__ */ _.jsx("option", { value: o, children: o })
  ] });
}
function wd({ hass: n, config: a, t: o, onChange: r, fields: l, detected: c, deviceIds: m }) {
  const f = (p, y) => r({ ...a, entities: { ...a.entities, [p]: y } });
  return /* @__PURE__ */ _.jsx("div", { className: "entity-fields", children: l.map((p) => {
    const y = a.entities?.[p.key], v = c[p.key], b = y && v ? o(y === v ? "autoDetected" : "manual") : void 0;
    return /* @__PURE__ */ _.jsxs("div", { className: "entity-field", children: [
      /* @__PURE__ */ _.jsxs("label", { children: [
        /* @__PURE__ */ _.jsxs("span", { children: [
          o(`entity_${p.key}`),
          b && /* @__PURE__ */ _.jsx("small", { className: `entity-badge ${y === v ? "auto" : "manual"}`, children: b })
        ] }),
        /* @__PURE__ */ _.jsx(
          Ps,
          {
            hass: n,
            domains: p.domains,
            value: y,
            deviceIds: p.device ? m : void 0,
            emptyLabel: o("notConfigured"),
            onChange: (w) => f(p.key, w)
          }
        )
      ] }),
      !y && v && n.states[v] && /* @__PURE__ */ _.jsx("button", { type: "button", className: "link-button", onClick: () => f(p.key, v), children: o("useDetected", { entity: v }) })
    ] }, p.key);
  }) });
}
const xe = (n, a, o, r = !0) => ({ key: n, domains: typeof a == "string" ? [a] : a, group: o, device: r }), fx = [
  xe("map_select", "select", "robot"),
  xe("cleaning_mode", "select", "robot"),
  xe("mop_mode", "select", "robot"),
  xe("mop_intensity", "select", "robot"),
  xe("water_shortage", "binary_sensor", "robot"),
  xe("mop_attached", "binary_sensor", "robot"),
  xe("water_box_attached", "binary_sensor", "robot"),
  xe("do_not_disturb", "switch", "robot"),
  xe("battery", "sensor", "status"),
  xe("status", "sensor", "status"),
  xe("error", "sensor", "status"),
  xe("current_room", "sensor", "status"),
  xe("cleaning_area", "sensor", "status"),
  xe("cleaning_time", "sensor", "status"),
  xe("cleaning_progress", "sensor", "status"),
  xe("last_clean_end", "sensor", "status"),
  xe("dock_mop_drying", ["switch", "binary_sensor"], "dock"),
  xe("dock_mop_drying_remaining_time", "sensor", "dock"),
  xe("dock_child_lock", "switch", "dock"),
  xe("dock_clean_water_empty", "binary_sensor", "dock"),
  xe("dock_dirty_water_full", "binary_sensor", "dock"),
  xe("dock_error", "sensor", "dock"),
  xe("dock_clean_fluid_empty", "binary_sensor", "dock"),
  xe("dock_detergent_empty", "binary_sensor", "dock"),
  xe("dock_mop_wash_frequency", "input_select", "helpers", !1),
  xe("dock_wash_mode", "input_select", "helpers", !1),
  xe("dock_wash_temperature", "input_select", "helpers", !1),
  xe("dock_auto_empty", "input_boolean", "helpers", !1),
  xe("dock_empty_mode", "input_select", "helpers", !1),
  xe("dock_auto_dry", "input_boolean", "helpers", !1),
  xe("dock_dry_duration", "input_select", "helpers", !1),
  xe("assisted_carry_stage", "input_select", "assisted", !1),
  xe("assisted_carry_job", "input_text", "assisted", !1),
  xe("assisted_carry_prepare_script", "script", "assisted", !1),
  xe("assisted_carry_start_script", "script", "assisted", !1),
  xe("assisted_carry_finish_script", "script", "assisted", !1),
  xe("vacuum_then_mop_script", "script", "legacy", !1)
];
function Sd(n) {
  return fx.filter((a) => a.group === n);
}
function Ks(n, a, o) {
  const r = [...n], [l] = r.splice(a, 1);
  return r.splice(o, 0, l), r;
}
const px = ["robot", "status", "dock", "legacy"];
function _x(n) {
  const { t: a } = n;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: a("advancedIntro") }),
    px.map((o) => /* @__PURE__ */ _.jsxs("fieldset", { className: "entity-group", children: [
      /* @__PURE__ */ _.jsx("legend", { children: a(`group_${o}`) }),
      /* @__PURE__ */ _.jsx(wd, { ...n, fields: Sd(o) }),
      o === "legacy" && /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
        a("blueprintsHint"),
        " ",
        /* @__PURE__ */ _.jsx("a", { href: vd(Di.vacuum_then_mop.file), target: "_blank", rel: "noreferrer", children: Di.vacuum_then_mop.label })
      ] })
    ] }, o))
  ] });
}
const js = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function As(n, a) {
  if (!a) return [];
  const o = n.states[a];
  return !o || o.state === "unavailable" ? [] : Array.isArray(o.attributes.options) ? o.attributes.options.map(String) : [];
}
function On(n, a) {
  const o = n.states[a.entity], r = Number(o?.attributes.supported_features ?? 0), l = Array.isArray(o?.attributes.fan_speed_list) ? o.attributes.fan_speed_list.map(String) : [], c = As(n, a.entities?.map_select), m = As(n, a.entities?.cleaning_mode), f = As(n, a.entities?.mop_mode), p = As(n, a.entities?.mop_intensity), y = jz(n, a.entity), v = jy(y), b = v.profile, w = l.includes("smart_mode") && f.includes("smart_mode"), k = w || p.some((x) => ["slight", "moderate", "extreme"].includes(x)) ? "set_clean_repeat_times" : "app_segment_clean";
  return {
    fanSpeeds: l,
    mapOptions: c,
    cleaningModes: m,
    mopModes: f,
    mopIntensities: p,
    canStart: !!(r & js.start),
    canPause: !!(r & js.pause),
    canStop: !!(r & js.stop),
    canDock: !!(r & js.returnHome),
    hasMapSelect: c.length > 0,
    hasCleaningMode: m.length > 0,
    hasMopMode: f.length > 0,
    hasMopIntensity: p.length > 0,
    hasSmartPlan: a.enable_smartplan ?? v.smartplan ?? w,
    roomRepeatStrategy: a.cleaning_count_command ?? v.repeat ?? k,
    mopRoutes: a.mop_routes ?? v.mop_routes,
    profile: b ? { label: b.label, status: b.status } : void 0,
    model: y
  };
}
function hx(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function yx(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const vx = "https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml", gx = [["en", "English"], ["nl", "Nederlands"], ["pl", "Polski"], ["tr", "Türkçe"]];
function bx({ hass: n, config: a, t: o }) {
  const { profile: r, model: l } = On(n, a);
  if (r) return /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: o("profileNote", { label: r.label, status: o(`status_${r.status}`) }) });
  if (!l) return null;
  const { verdict: c, name: m, protocol: f } = Ay({ model: l }), p = m ?? l;
  return c === "unsupported" ? /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: f ? o("unsupportedProtocol", { name: p, protocol: f }) : o("unsupportedModel", { name: p }) }) : Wo(l)?.features ? /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: o("recognisedModel", { name: p }) }) : /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
    o("unknownModel", { name: p }),
    " ",
    /* @__PURE__ */ _.jsx("a", { href: vx, target: "_blank", rel: "noreferrer", children: o("reportModel") })
  ] });
}
function kx(n) {
  const { hass: a, config: o, t: r, onChange: l } = n;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsxs("label", { children: [
      r("name"),
      /* @__PURE__ */ _.jsx("input", { value: o.name ?? "", placeholder: r("namePlaceholder"), onChange: (c) => l({ ...o, name: c.target.value || void 0 }) })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { children: [
      r("cardLanguage"),
      /* @__PURE__ */ _.jsx("select", { value: o.language ?? "en", onChange: (c) => l({ ...o, language: c.target.value }), children: gx.map(([c, m]) => /* @__PURE__ */ _.jsx("option", { value: c, children: m }, c)) })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { children: [
      r("vacuum"),
      /* @__PURE__ */ _.jsx(Ps, { hass: a, domains: ["vacuum"], value: o.entity, onChange: (c) => c && l({ ...o, entity: c }) })
    ] }),
    /* @__PURE__ */ _.jsx(bx, { ...n }),
    /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: o.enable_mop_only === !0, onChange: (c) => l({ ...o, enable_mop_only: c.target.checked || void 0 }) }),
      " ",
      r("mopOnly")
    ] }),
    o.vacuum_mode_fallback && /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: o.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (c) => l({ ...o, vacuum_mode_fallback: c.target.checked ? "set_clean_motor_mode" : void 0 }) }),
      " ",
      r("vacuumModeFallback")
    ] })
  ] });
}
const Ry = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Zy = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, zd = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, wx = [
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
], Sx = [
  { setting: "mop_wash_frequency", label: "mop wash frequency", icon: "mdi:timer-sand", needs: "mop_wash" },
  { setting: "wash_mode", label: "washing mode", icon: "mdi:washing-machine", needs: "mop_wash" },
  { setting: "wash_temperature", label: "wash temperature", icon: "mdi:thermometer-water", needs: "hot_water" },
  { setting: "auto_empty", label: "auto-empty", icon: "mdi:delete-restore", needs: "auto_empty" },
  { setting: "empty_mode", label: "empty mode", icon: "mdi:delete-variant", needs: "auto_empty" },
  { setting: "auto_dry", label: "auto-drying", icon: "mdi:fan", needs: "mop_dry" },
  { setting: "dry_duration", label: "drying duration", icon: "mdi:timer-outline", needs: "mop_dry" }
];
function Oc(n, a) {
  return `rvmc_${n.split(".")[1]}_${a}`;
}
function Uy(n, a, o = {}) {
  const r = Sx.filter(({ needs: l }) => o.dock?.[l] !== !1).map(({ setting: l, label: c, icon: m }) => {
    const f = zd[l], p = l !== "auto_empty" && l !== "auto_dry";
    return {
      key: f,
      domain: p ? "input_select" : "input_boolean",
      object_id: Oc(n, f),
      name: `${a} dock ${c}`,
      icon: m,
      ...p ? { options: [...Ry[l]] } : {},
      start: Zy[l]
    };
  });
  return o.assistedCarry && r.push(
    { key: "assisted_carry_stage", domain: "input_select", object_id: Oc(n, "assisted_carry_stage"), name: `${a} assisted carry stage`, icon: "mdi:stairs", options: [...wx], start: "idle" },
    { key: "assisted_carry_job", domain: "input_text", object_id: Oc(n, "assisted_carry_job"), name: `${a} assisted carry job`, icon: "mdi:clipboard-text-outline", max: 255 }
  ), r;
}
function zx(n, a, o) {
  const r = { create: [], existing: {}, mismatched: [] };
  for (const l of o) {
    const f = [a.entities?.[l.key], `${l.domain}.${l.object_id}`].filter((y) => !!y).find((y) => n.states[y]);
    if (!f) {
      r.create.push(l);
      continue;
    }
    r.existing[l.key] = f;
    const p = n.states[f].attributes.options;
    if (l.options && Array.isArray(p)) {
      const y = l.options.filter((v) => !p.map(String).includes(v));
      y.length > 0 && r.mismatched.push({ key: l.key, entity_id: f, missing: y });
    }
  }
  return r;
}
class xx extends Error {
}
async function jx(n, a) {
  if (!n.callWS || n.user?.is_admin === !1) throw new xx("Creating helpers needs a Home Assistant administrator");
  const o = {};
  for (const r of a.create) {
    const l = {
      icon: r.icon,
      ...r.options ? { options: r.options } : {},
      ...r.max ? { max: r.max } : {}
    }, c = await n.callWS({ type: `${r.domain}/create`, name: r.object_id, ...l });
    await n.callWS({ type: `${r.domain}/update`, [`${r.domain}_id`]: c.id, name: r.name, ...l });
    const m = `${r.domain}.${c.id}`;
    typeof r.start == "string" ? await n.callService("input_select", "select_option", { option: r.start }, { entity_id: m }) : r.start !== void 0 && await n.callService("input_boolean", r.start ? "turn_on" : "turn_off", {}, { entity_id: m }), o[r.key] = m;
  }
  return { ...a.existing, ...o };
}
function Ax(n) {
  const a = [];
  for (const o of ["input_select", "input_boolean", "input_text"]) {
    const r = n.filter((l) => l.domain === o);
    if (r.length !== 0) {
      a.push(`${o}:`);
      for (const l of r)
        a.push(`  ${l.object_id}:`, `    name: ${l.name}`, `    icon: ${l.icon}`), l.options && a.push(`    options: [${l.options.join(", ")}]`), l.max && a.push(`    max: ${l.max}`);
    }
  }
  return `${a.join(`
`)}
`;
}
const Tx = {
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
  minuteShort: "min",
  preflightBlocked: "Can't start yet",
  preflightWarnings: "Check before starting",
  startAnyway: "Start anyway",
  check_clean_water_empty: "The clean water tank is empty.",
  check_water_shortage: "The robot reports a water shortage.",
  check_mop_detached: "The mop is not attached.",
  check_water_box_detached: "The water tank is not attached.",
  check_dirty_water_full: "The dirty water tank is full.",
  check_dock_error: "The dock reports an error:",
  check_low_battery: "The battery is low:",
  check_maintenance_overdue: "Parts are due for maintenance:",
  maintenance: "Maintenance",
  maintenanceOk: "OK",
  maintenanceDue: "Due soon",
  maintenanceOverdue: "Due now",
  maintenanceUnknown: "Unknown",
  resetConsumable: "Reset",
  confirmResetConsumable: "Reset this counter? Only do this after replacing or cleaning the part.",
  enableResetHint: "To reset counters from here, enable the reset buttons of the Roborock device in Home Assistant.",
  consumable_main_brush: "Main brush",
  consumable_side_brush: "Side brush",
  consumable_filter: "Filter",
  consumable_sensors: "Sensors",
  consumable_strainer: "Dock strainer",
  consumable_mop: "Mop",
  consumable_roller: "Roller brush",
  consumable_cleaning_brush: "Dock cleaning brush",
  setupAttention: "Setup needs attention",
  health_area_missing: "Room {room} uses area {area}, which no longer exists.",
  health_entity_missing: "{entity} no longer exists.",
  health_map_option_missing: "The map selector no longer offers {option}.",
  health_map_uncalibrated: "{entity} has no map calibration.",
  roomAreaMissing: "area no longer exists",
  dismiss: "Dismiss",
  maintenanceBadge: "Maintenance due",
  setupTitle: "Finish setting up the Roborock card",
  setupIntro: "A few things are needed before this card can control your vacuum.",
  prereq_home_assistant_version: "Home Assistant 2026.8 or newer",
  prereq_roborock_integration: "Roborock integration with a vacuum",
  prereq_custom_map: "Roborock Custom Map integration",
  prereq_administrator: "Administrator account (for room areas and helpers)",
  setupFix: "Fix",
  setupOpenEditor: "Then edit this card and choose Setup assistant.",
  setupConfigErrors: "The card configuration needs attention:",
  setupVacuumMissing: "The configured vacuum doesn't exist:"
}, Ex = {
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
  minuteShort: "min",
  preflightBlocked: "Kan nog niet starten",
  preflightWarnings: "Controleer voor het starten",
  startAnyway: "Toch starten",
  check_clean_water_empty: "Het schoonwaterreservoir is leeg.",
  check_water_shortage: "De robot meldt een watertekort.",
  check_mop_detached: "De mop is niet bevestigd.",
  check_water_box_detached: "Het waterreservoir is niet geplaatst.",
  check_dirty_water_full: "Het vuilwaterreservoir is vol.",
  check_dock_error: "Het station meldt een fout:",
  check_low_battery: "De batterij is bijna leeg:",
  check_maintenance_overdue: "Onderdelen hebben onderhoud nodig:",
  maintenance: "Onderhoud",
  maintenanceOk: "OK",
  maintenanceDue: "Binnenkort",
  maintenanceOverdue: "Nu nodig",
  maintenanceUnknown: "Onbekend",
  resetConsumable: "Resetten",
  confirmResetConsumable: "Deze teller resetten? Doe dit alleen na het vervangen of schoonmaken van het onderdeel.",
  enableResetHint: "Schakel de resetknoppen van het Roborock-apparaat in Home Assistant in om tellers hier te resetten.",
  consumable_main_brush: "Hoofdborstel",
  consumable_side_brush: "Zijborstel",
  consumable_filter: "Filter",
  consumable_sensors: "Sensoren",
  consumable_strainer: "Stationfilter",
  consumable_mop: "Mop",
  consumable_roller: "Rolborstel",
  consumable_cleaning_brush: "Reinigingsborstel station",
  setupAttention: "Instellingen vragen aandacht",
  health_area_missing: "Ruimte {room} gebruikt gebied {area}, dat niet meer bestaat.",
  health_entity_missing: "{entity} bestaat niet meer.",
  health_map_option_missing: "De kaartkeuze biedt {option} niet meer aan.",
  health_map_uncalibrated: "{entity} heeft geen kaartkalibratie.",
  roomAreaMissing: "gebied bestaat niet meer",
  dismiss: "Sluiten",
  maintenanceBadge: "Onderhoud nodig",
  setupTitle: "Rond de installatie van de Roborock-kaart af",
  setupIntro: "Er is nog iets nodig voordat deze kaart je stofzuiger kan bedienen.",
  prereq_home_assistant_version: "Home Assistant 2026.8 of nieuwer",
  prereq_roborock_integration: "Roborock-integratie met een stofzuiger",
  prereq_custom_map: "Roborock Custom Map-integratie",
  prereq_administrator: "Beheerdersaccount (voor ruimtegebieden en helpers)",
  setupFix: "Oplossen",
  setupOpenEditor: "Bewerk daarna deze kaart en kies Installatie-assistent.",
  setupConfigErrors: "De kaartconfiguratie vraagt aandacht:",
  setupVacuumMissing: "De ingestelde stofzuiger bestaat niet:"
}, Cx = {
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
  minuteShort: "dk",
  preflightBlocked: "Henüz başlatılamıyor",
  preflightWarnings: "Başlatmadan önce kontrol edin",
  startAnyway: "Yine de başlat",
  check_clean_water_empty: "Temiz su tankı boş.",
  check_water_shortage: "Robot su eksikliği bildiriyor.",
  check_mop_detached: "Paspas takılı değil.",
  check_water_box_detached: "Su tankı takılı değil.",
  check_dirty_water_full: "Kirli su tankı dolu.",
  check_dock_error: "İstasyon bir hata bildiriyor:",
  check_low_battery: "Pil seviyesi düşük:",
  check_maintenance_overdue: "Parçaların bakımı gerekiyor:",
  maintenance: "Bakım",
  maintenanceOk: "Tamam",
  maintenanceDue: "Yakında",
  maintenanceOverdue: "Şimdi",
  maintenanceUnknown: "Bilinmiyor",
  resetConsumable: "Sıfırla",
  confirmResetConsumable: "Bu sayaç sıfırlansın mı? Bunu yalnızca parçayı değiştirdikten veya temizledikten sonra yapın.",
  enableResetHint: "Sayaçları buradan sıfırlamak için Home Assistant'ta Roborock cihazının sıfırlama düğmelerini etkinleştirin.",
  consumable_main_brush: "Ana fırça",
  consumable_side_brush: "Yan fırça",
  consumable_filter: "Filtre",
  consumable_sensors: "Sensörler",
  consumable_strainer: "İstasyon süzgeci",
  consumable_mop: "Paspas",
  consumable_roller: "Silindir fırça",
  consumable_cleaning_brush: "İstasyon temizleme fırçası",
  setupAttention: "Kurulum ilgi gerektiriyor",
  health_area_missing: "{room} odası artık mevcut olmayan {area} alanını kullanıyor.",
  health_entity_missing: "{entity} artık mevcut değil.",
  health_map_option_missing: "Harita seçici artık {option} sunmuyor.",
  health_map_uncalibrated: "{entity} için harita kalibrasyonu yok.",
  roomAreaMissing: "alan artık mevcut değil",
  dismiss: "Kapat",
  maintenanceBadge: "Bakım gerekli",
  setupTitle: "Roborock kartının kurulumunu tamamlayın",
  setupIntro: "Bu kartın süpürgenizi kontrol edebilmesi için birkaç şey gerekiyor.",
  prereq_home_assistant_version: "Home Assistant 2026.8 veya daha yenisi",
  prereq_roborock_integration: "Süpürge içeren Roborock entegrasyonu",
  prereq_custom_map: "Roborock Custom Map entegrasyonu",
  prereq_administrator: "Yönetici hesabı (oda alanları ve yardımcılar için)",
  setupFix: "Düzelt",
  setupOpenEditor: "Ardından bu kartı düzenleyin ve Kurulum asistanını seçin.",
  setupConfigErrors: "Kart yapılandırması ilgi gerektiriyor:",
  setupVacuumMissing: "Yapılandırılan süpürge mevcut değil:"
}, Mx = {
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
  minuteShort: "min",
  preflightBlocked: "Nie można jeszcze rozpocząć",
  preflightWarnings: "Sprawdź przed startem",
  startAnyway: "Rozpocznij mimo to",
  check_clean_water_empty: "Zbiornik na czystą wodę jest pusty.",
  check_water_shortage: "Robot zgłasza brak wody.",
  check_mop_detached: "Mop nie jest zamontowany.",
  check_water_box_detached: "Zbiornik na wodę nie jest zamontowany.",
  check_dirty_water_full: "Zbiornik na brudną wodę jest pełny.",
  check_dock_error: "Stacja zgłasza błąd:",
  check_low_battery: "Niski poziom baterii:",
  check_maintenance_overdue: "Części wymagają konserwacji:",
  maintenance: "Konserwacja",
  maintenanceOk: "OK",
  maintenanceDue: "Wkrótce",
  maintenanceOverdue: "Teraz",
  maintenanceUnknown: "Nieznane",
  resetConsumable: "Resetuj",
  confirmResetConsumable: "Zresetować ten licznik? Zrób to tylko po wymianie lub wyczyszczeniu części.",
  enableResetHint: "Aby resetować liczniki tutaj, włącz przyciski resetu urządzenia Roborock w Home Assistant.",
  consumable_main_brush: "Szczotka główna",
  consumable_side_brush: "Szczotka boczna",
  consumable_filter: "Filtr",
  consumable_sensors: "Czujniki",
  consumable_strainer: "Sitko stacji",
  consumable_mop: "Mop",
  consumable_roller: "Szczotka wałkowa",
  consumable_cleaning_brush: "Szczotka czyszcząca stacji",
  setupAttention: "Konfiguracja wymaga uwagi",
  health_area_missing: "Pomieszczenie {room} używa obszaru {area}, który już nie istnieje.",
  health_entity_missing: "{entity} już nie istnieje.",
  health_map_option_missing: "Wybór mapy nie oferuje już {option}.",
  health_map_uncalibrated: "{entity} nie ma kalibracji mapy.",
  roomAreaMissing: "obszar już nie istnieje",
  dismiss: "Zamknij",
  maintenanceBadge: "Wymagana konserwacja",
  setupTitle: "Dokończ konfigurację karty Roborock",
  setupIntro: "Zanim ta karta będzie mogła sterować odkurzaczem, potrzeba jeszcze kilku rzeczy.",
  prereq_home_assistant_version: "Home Assistant 2026.8 lub nowszy",
  prereq_roborock_integration: "Integracja Roborock z odkurzaczem",
  prereq_custom_map: "Integracja Roborock Custom Map",
  prereq_administrator: "Konto administratora (dla obszarów pomieszczeń i pomocników)",
  setupFix: "Napraw",
  setupOpenEditor: "Następnie edytuj tę kartę i wybierz Asystenta konfiguracji.",
  setupConfigErrors: "Konfiguracja karty wymaga uwagi:",
  setupVacuumMissing: "Skonfigurowany odkurzacz nie istnieje:"
};
function Ts(n, a, o) {
  return N(n, a).replace(/\{(\w+)\}/g, (r, l) => o[l] ?? r);
}
function N(n, a) {
  return n === "nl" ? Ex[a] : n === "pl" ? Mx[a] : n === "tr" ? Cx[a] : Tx[a];
}
const hh = {
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
function xd(n, a) {
  return hh[n ?? "en"]?.[a] ?? hh.en?.[a] ?? a.replaceAll("_", " ").replace(/\b\w/g, (o) => o.toUpperCase());
}
function Hy({ hass: n, config: a, t: o, onChange: r, specs: l }) {
  const c = zx(n, a, l), [m, f] = F.useState(), [p, y] = F.useState(!1), v = n.user?.is_admin !== !1 && !!n.callWS, b = JSON.stringify(c.existing);
  F.useEffect(() => {
    const k = Object.entries(c.existing).filter(([x]) => !a.entities?.[x]);
    k.length > 0 && r({ ...a, entities: { ...a.entities, ...Object.fromEntries(k) } });
  }, [b]);
  const w = async () => {
    y(!0);
    try {
      const k = await jx(n, c);
      r({ ...a, entities: { ...a.entities, ...k } }), f(o("helpersCreated", { n: c.create.length }));
    } catch (k) {
      f(o("helpersFailed", { error: k instanceof Error ? k.message : String(k) }));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "helper-provisioner", children: [
    c.create.length === 0 ? /* @__PURE__ */ _.jsx("p", { children: o("helpersInPlace", { n: l.length }) }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("p", { children: o("helpersMissing", { n: c.create.length, names: c.create.map((k) => k.name).join(", ") }) }),
      v ? /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", disabled: p, onClick: w, children: o("createHelpers", { n: c.create.length }) }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx("p", { children: o("helpersYaml") }),
        /* @__PURE__ */ _.jsx("pre", { className: "yaml-preview", children: Ax(c.create) })
      ] })
    ] }),
    c.mismatched.map((k) => /* @__PURE__ */ _.jsx("p", { className: "wizard-warning", children: o("helperMismatch", { entity: k.entity_id, options: k.missing.join(", ") }) }, k.key)),
    m && /* @__PURE__ */ _.jsx("p", { role: "status", children: m })
  ] });
}
function Ox(n) {
  const { hass: a, config: o, language: r, t: l, model: c } = n, m = String(a.states[o.entity]?.attributes.friendly_name ?? o.name ?? "Roborock"), f = Uy(o.entity, m, { dock: fd(c) });
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx("h4", { children: l("dockHelpers") }),
    /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: l("dockHelpersHint") }),
    /* @__PURE__ */ _.jsx(wd, { ...n, fields: Sd("helpers") }),
    /* @__PURE__ */ _.jsx(Hy, { ...n, specs: f }),
    /* @__PURE__ */ _.jsx("h4", { children: l("maintenanceParts") }),
    o.consumables?.length ? /* @__PURE__ */ _.jsx("ul", { className: "consumable-list", children: o.consumables.map((p) => /* @__PURE__ */ _.jsxs("li", { children: [
      N(r, `consumable_${p.kind}`),
      " · ",
      /* @__PURE__ */ _.jsx("code", { children: p.sensor })
    ] }, p.kind)) }) : /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: l("noConsumables") })
  ] });
}
function Nx({ hass: n, t: a, room: o, onRoom: r }) {
  const l = Object.values(n.areas ?? {}).sort((c, m) => c.name.localeCompare(m.name));
  return /* @__PURE__ */ _.jsxs("div", { className: `room-editor ${o.area_id ? "" : "unmapped"}`, children: [
    /* @__PURE__ */ _.jsx("strong", { children: a("segment", { n: o.segment_id }) }),
    /* @__PURE__ */ _.jsxs("label", { children: [
      a("name"),
      /* @__PURE__ */ _.jsx("input", { value: o.name, onChange: (c) => r({ ...o, name: c.target.value }) })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { children: [
      a("area"),
      /* @__PURE__ */ _.jsx(Dy, { hass: n, areas: l, value: o.area_id, emptyLabel: a("unmapped"), onChange: (c) => r({ ...o, area_id: c }) })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { children: [
      a("icon"),
      /* @__PURE__ */ _.jsx(kd, { hass: n, value: o.icon, placeholder: n.areas?.[o.area_id ?? ""]?.icon ?? "mdi:floor-plan", onChange: (c) => r({ ...o, icon: c }) })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: o.include_in_floor_clean !== !1, onChange: (c) => r({ ...o, include_in_floor_clean: c.target.checked }) }),
      " ",
      a("includeFloor")
    ] })
  ] });
}
function Dx(n) {
  const { hass: a, config: o, t: r, onChange: l, floor: c, index: m } = n, f = (v) => l({ ...o, floors: o.floors.map((b, w) => w === m ? v : b) }), p = o.entities?.map_select ? a.states[o.entities.map_select]?.attributes.options ?? [] : [], y = (v) => {
    if (!v) return;
    const b = new Map(c.rooms.map((k) => [k.segment_id, k])), w = hd(a.states[v]).map((k) => ({
      ...b.get(k.segment_id),
      segment_id: k.segment_id,
      name: b.get(k.segment_id)?.name ?? k.source_name,
      include_in_floor_clean: b.get(k.segment_id)?.include_in_floor_clean ?? !0
    }));
    f({ ...c, map_entity: v, rooms: w });
  };
  return /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
      /* @__PURE__ */ _.jsx("strong", { children: c.name || r("floorNumber", { n: m + 1 }) }),
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("moveUp"), disabled: m === 0, onClick: () => l({ ...o, floors: Ks(o.floors, m, m - 1) }), children: /* @__PURE__ */ _.jsx(Bh, {}) }),
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("moveDown"), disabled: m === o.floors.length - 1, onClick: () => l({ ...o, floors: Ks(o.floors, m, m + 1) }), children: /* @__PURE__ */ _.jsx(Hh, {}) }),
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("remove"), disabled: o.floors.length === 1, onClick: () => l({ ...o, floors: o.floors.filter((v, b) => b !== m) }), children: /* @__PURE__ */ _.jsx(Us, {}) })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("id"),
        /* @__PURE__ */ _.jsx("input", { value: c.id, onChange: (v) => f({ ...c, id: v.target.value }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("name"),
        /* @__PURE__ */ _.jsx("input", { value: c.name, onChange: (v) => f({ ...c, name: v.target.value }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("customMap"),
        /* @__PURE__ */ _.jsx(Ps, { hass: a, domains: ["image"], value: c.map_entity || void 0, emptyLabel: r("notConfigured"), onChange: y })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("mapOption"),
        /* @__PURE__ */ _.jsxs("select", { value: c.map_select_option ?? "", onChange: (v) => f({ ...c, map_select_option: v.target.value || void 0 }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "", children: r("notConfigured") }),
          p.map((v) => /* @__PURE__ */ _.jsx("option", { children: v }, v))
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("routine"),
        /* @__PURE__ */ _.jsx(Ps, { hass: a, domains: ["button"], value: c.vacuum_then_mop_routine, emptyLabel: r("noRoutine"), onChange: (v) => f({ ...c, vacuum_then_mop_routine: v }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: c.assisted_carry === !0, onChange: (v) => f({ ...c, assisted_carry: v.target.checked }) }),
        " ",
        r("assistedCarry")
      ] })
    ] }),
    /* @__PURE__ */ _.jsx("h4", { children: r("rooms") }),
    c.rooms.length === 0 ? /* @__PURE__ */ _.jsx("p", { children: r("noRooms") }) : /* @__PURE__ */ _.jsx("div", { className: "room-editor-list", children: c.rooms.map((v) => /* @__PURE__ */ _.jsx(Nx, { hass: a, t: r, room: v, onRoom: (b) => f({ ...c, rooms: c.rooms.map((w) => w.segment_id === v.segment_id ? b : w) }) }, v.segment_id)) })
  ] });
}
function Rx(n) {
  const { config: a, t: o, onChange: r } = n, l = a.floors.some((m) => m.assisted_carry), c = () => r({
    ...a,
    floors: [...a.floors, { id: `floor_${a.floors.length + 1}`, name: o("floorNumber", { n: a.floors.length + 1 }), map_entity: "", rooms: [] }]
  });
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    a.floors.map((m, f) => /* @__PURE__ */ _.jsx(Dx, { ...n, floor: m, index: f }, `${m.id}-${f}`)),
    /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: c, children: [
      /* @__PURE__ */ _.jsx(Lh, {}),
      " ",
      o("addFloor")
    ] }),
    l && /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
      /* @__PURE__ */ _.jsx("strong", { children: o("assistedScripts") }),
      /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
        o("assistedScriptsHint"),
        " ",
        ["assisted_carry_prepare", "assisted_carry_start", "assisted_carry_finish"].map((m, f) => /* @__PURE__ */ _.jsxs("span", { children: [
          f > 0 && " · ",
          /* @__PURE__ */ _.jsx("a", { href: vd(Di[m].file), target: "_blank", rel: "noreferrer", children: Di[m].label })
        ] }, m))
      ] }),
      /* @__PURE__ */ _.jsx(wd, { ...n, fields: Sd("assisted") })
    ] })
  ] });
}
const Qs = [
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
], Zx = ["medium", "standard", "mild", "low", "intense", "high", "slight", "moderate", "extreme"];
function Ux(n, a) {
  if (n.cleaning_type === "vacuum" || !n.mop_intensity || a.mopIntensities.includes(n.mop_intensity))
    return n;
  const o = Zx.find((r) => a.mopIntensities.includes(r));
  return o ? { ...n, mop_intensity: o } : n;
}
function Hx(n, a, o, r) {
  if (o.strategy === "smartplan" && !a.hasSmartPlan) return "SmartPlan";
  const l = a.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (o.cleaning_type === "vacuum" && !l)
    return "cleaning mode “vacuum”";
  if (o.cleaning_type === "mop" && !n.enable_mop_only)
    return "Mop only (set enable_mop_only: true)";
  if (o.cleaning_type === "mop" && !a.cleaningModes.includes("mop"))
    return "cleaning mode “mop”";
  if (o.cleaning_type === "vacuum_then_mop") {
    if (r?.vacuum_then_mop_routine || r?.assisted_carry && n.entities?.assisted_carry_start_script) return;
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!a.cleaningModes.includes("vacuum") || !a.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (o.fan_speed && !a.fanSpeeds.includes(o.fan_speed)) return `fan speed “${o.fan_speed}”`;
  if (o.cleaning_type !== "vacuum" && o.mop_mode && !a.mopModes.includes(o.mop_mode))
    return `mop mode “${o.mop_mode}”`;
  if (o.cleaning_type !== "vacuum" && o.mop_intensity && !a.mopIntensities.includes(o.mop_intensity))
    return `mop intensity “${o.mop_intensity}”`;
}
function Io(n, a, o) {
  return [...(n.enable_mop_only ? Qs : Qs.filter((l) => l.cleaning_type !== "mop")).map((l) => Ux(l, a)), ...n.presets ?? []].map((l) => {
    const c = Hx(n, a, l, o);
    return {
      preset: l,
      available: !c,
      reason: c ? `Unsupported ${c}` : void 0
    };
  });
}
function Lo(n) {
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
function er(n, a) {
  return !!(a.area_id && n.areas && !n.areas[a.area_id]);
}
function Ds(n, a) {
  return !!a.area_id && !er(n, a);
}
function Bx(n, a) {
  const o = [], r = (m) => !!n.states[m];
  r(a.entity) || o.push({ code: "entity_missing", key: "entity", entity_id: a.entity });
  for (const [m, f] of Object.entries(a.entities ?? {}))
    typeof f == "string" && !r(f) && o.push({ code: "entity_missing", key: `entities.${m}`, entity_id: f });
  for (const m of a.consumables ?? [])
    r(m.sensor) || o.push({ code: "entity_missing", key: `consumables.${m.kind}`, entity_id: m.sensor });
  const l = a.entities?.map_select ? n.states[a.entities.map_select] : void 0, c = Array.isArray(l?.attributes.options) ? l.attributes.options.map(String) : void 0;
  for (const m of a.floors) {
    r(m.map_entity) ? nl(n.states[m.map_entity]).length < 3 && o.push({ code: "map_uncalibrated", floor_id: m.id, entity_id: m.map_entity }) : o.push({ code: "entity_missing", key: `floors.${m.id}.map_entity`, entity_id: m.map_entity }), m.vacuum_then_mop_routine && !r(m.vacuum_then_mop_routine) && o.push({ code: "entity_missing", key: `floors.${m.id}.vacuum_then_mop_routine`, entity_id: m.vacuum_then_mop_routine }), m.map_select_option && c && !c.includes(m.map_select_option) && o.push({ code: "map_option_missing", floor_id: m.id, option: m.map_select_option });
    for (const f of m.rooms)
      f.area_id && er(n, f) && o.push({ code: "area_missing", floor_id: m.id, segment_id: f.segment_id, room: f.name, area_id: f.area_id });
  }
  return o;
}
const Yx = { vacuum: "vacuum", mop: "mop", vacuum_and_mop: "vac_and_mop", vacuum_then_mop: "vac_and_mop" }, $x = "00:01:30", qx = new Set(Qs.map((n) => n.id));
class Rs extends Error {
}
function Nc(n, a, o) {
  return { action: "vacuum.send_command", target: { entity_id: n }, data: { command: a, params: o } };
}
function Es(n, a) {
  return { action: "select.select_option", target: { entity_id: n }, data: { option: a } };
}
function Xx(n, a, o) {
  const r = On(n, a), l = qx.has(o.id) ? a : { ...a, presets: [...(a.presets ?? []).filter((U) => U.id !== o.id), o] }, c = Io(l, r).find((U) => U.preset.id === o.id);
  if (!c?.available) throw new Rs(c?.reason ?? `Preset ${o.id} is not available`);
  const m = o.cleaning_type ?? "vacuum_and_mop", f = a.entity, p = a.entities?.map_select, y = m === "vacuum_then_mop", v = r.roomRepeatStrategy === "app_segment_clean", b = o.strategy === "smartplan" || y ? 1 : o.cleaning_count ?? 1, w = Object.fromEntries(a.floors.map((U) => {
    const B = U.rooms.filter((I) => I.include_in_floor_clean !== !1 && Ds(n, I));
    return [U.id, {
      option: U.map_select_option ?? "",
      routine: U.vacuum_then_mop_routine ?? "",
      areas: [...new Set(B.map((I) => I.area_id))],
      whole_map: B.length === U.rooms.length,
      segments: Object.fromEntries(B.map((I) => [I.area_id, I.segment_id]))
    }];
  }));
  if (y && !a.floors.some((U) => U.vacuum_then_mop_routine))
    throw new Rs("Vac followed by Mop presets need a floor with a native Roborock routine");
  const k = [];
  if (p && k.push({
    alias: "Select the floor map",
    if: [`{{ info.option != '' and not is_state('${p}', info.option) }}`],
    then: [
      { action: "select.select_option", target: { entity_id: p }, data: { option: "{{ info.option }}" } },
      { wait_template: `{{ is_state('${p}', info.option) }}`, timeout: $x, continue_on_timeout: !0 },
      { if: ["{{ not wait.completed }}"], then: [{ stop: "The floor map did not become active.", error: !0 }] }
    ]
  }), y)
    return k.push(
      { if: ["{{ info.routine == '' }}"], then: [{ stop: "This floor has no Vac followed by Mop routine.", error: !0 }] },
      { alias: "Run the saved Roborock routine", action: "button.press", target: { entity_id: "{{ info.routine }}" } }
    ), $();
  if (o.strategy === "smartplan")
    k.push({ alias: "AI SmartPlan", ...Nc(f, "set_clean_motor_mode", [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }]) });
  else {
    const U = a.entities?.cleaning_mode;
    if (!U) throw new Rs("Exporting presets needs the Cleaning mode entity");
    k.push({ alias: "Cleaning mode", ...Es(U, Yx[m]) });
    const B = a.entities?.mop_mode;
    m !== "vacuum" && o.mop_mode && B && k.push(
      { alias: "Leave SmartPlan routes", if: [{ condition: "state", entity_id: B, state: "smart_mode" }], then: [Es(B, "custom")] },
      { alias: "Mop route", ...Es(B, o.mop_mode) }
    ), m !== "vacuum" && o.mop_intensity && a.entities?.mop_intensity && k.push({ alias: "Water flow", ...Es(a.entities.mop_intensity, o.mop_intensity) }), o.fan_speed && m !== "mop" && k.push({ alias: "Suction", action: "vacuum.set_fan_speed", target: { entity_id: f }, data: { fan_speed: o.fan_speed } });
  }
  v || k.push({ alias: "Cleaning count", ...Nc(f, "set_clean_repeat_times", { repeat: b }) });
  const x = [
    { conditions: ["{{ whole_floor and info.whole_map }}"], sequence: [{ action: "vacuum.start", target: { entity_id: f } }] },
    { conditions: ["{{ true }}"], sequence: [{ action: "vacuum.clean_area", target: { entity_id: f }, data: { cleaning_area_id: "{{ target_areas }}" } }] }
  ];
  return v && b === 2 && x.unshift({
    conditions: ["{{ true }}"],
    sequence: [Nc(f, "app_segment_clean", [{ segments: '{{ target_areas | map("extract", info.segments) | list }}', repeat: 2 }])]
  }), k.push({ alias: "Start cleaning", choose: x }), $();
  function $() {
    return {
      id: `rvmc_${f.split(".")[1]}_${o.id}`,
      config: {
        alias: `${a.name ?? "Roborock"} ${o.name}`,
        description: `Runs the "${o.name}" preset of the Roborock Vacuum Map Card. Generated by the card; create it again after changing the preset.`,
        icon: o.icon ?? "mdi:robot-vacuum",
        mode: "single",
        fields: {
          floor: {
            name: "Floor",
            required: !0,
            default: a.floors[0].id,
            selector: { select: { options: a.floors.map((U) => ({ value: U.id, label: U.name })) } }
          },
          ...y ? {} : { areas: { name: "Areas", description: "Leave empty to clean the whole floor.", required: !1, selector: { area: { multiple: !0 } } } }
        },
        variables: {
          floors: w,
          info: "{{ floors[floor] }}",
          ...y ? {} : { whole_floor: "{{ not areas }}", target_areas: "{{ areas if areas else info.areas }}" }
        },
        sequence: k
      }
    };
  }
}
async function Lx(n, a) {
  if (!n.callApi || n.user?.is_admin === !1) throw new Rs("Creating scripts needs a Home Assistant administrator");
  return await n.callApi("POST", `config/script/config/${a.id}`, a.config), `script.${a.id}`;
}
const Vx = /^[A-Za-z_][\w./\- ]*$/, Gx = /^(?:true|false|yes|no|on|off|null|~|y|n)$/i;
function Cs(n) {
  if (n == null) return "null";
  if (typeof n == "number" || typeof n == "boolean") return String(n);
  const a = String(n);
  return Vx.test(a) && !Gx.test(a) && !a.endsWith(" ") && !a.includes(": ") ? a : JSON.stringify(a);
}
function Dc(n) {
  return Array.isArray(n) && n.length === 0 || typeof n == "object" && n !== null && !Array.isArray(n) && Object.keys(n).length === 0;
}
function Jc(n, a) {
  return Array.isArray(n) ? n.flatMap((o) => {
    if (typeof o == "object" && o !== null && !Dc(o)) {
      const [r, ...l] = Jc(o, `${a}  `);
      return [`${a}- ${r.trimStart()}`, ...l];
    }
    return [`${a}- ${Dc(o) ? Array.isArray(o) ? "[]" : "{}" : Cs(o)}`];
  }) : typeof n == "object" && n !== null ? Object.entries(n).filter(([, o]) => o !== void 0).flatMap(([o, r]) => {
    const l = Cs(o);
    return Dc(r) ? [`${a}${l}: ${Array.isArray(r) ? "[]" : "{}"}`] : typeof r == "object" && r !== null ? [`${a}${l}:`, ...Jc(r, Array.isArray(r) ? a : `${a}  `)] : [`${a}${l}: ${Cs(r)}`];
  }) : [`${a}${Cs(n)}`];
}
function By(n) {
  return `${Jc(n, "").join(`
`)}
`;
}
function Px({ hass: n, config: a, t: o }) {
  const [r, l] = F.useState({}), [c, m] = F.useState(), f = n.user?.is_admin !== !1 && !!n.callApi, p = Io(a, On(n, a)).filter((v) => v.available), y = async (v) => {
    try {
      const b = Xx(n, a, v);
      if (n.states[`script.${b.id}`] && !window.confirm(o("scriptExists", { entity: `script.${b.id}` }))) return;
      if (f) {
        const w = await Lx(n, b);
        l({ ...r, [v.id]: o("scriptCreated", { entity: w }) });
      } else
        m({ id: v.id, text: By({ [b.id]: b.config }) });
    } catch (b) {
      l({ ...r, [v.id]: b instanceof Error ? b.message : String(b) });
    }
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "preset-scripts", children: [
    /* @__PURE__ */ _.jsx("h4", { children: o("scriptsTitle") }),
    /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: o("scriptsHint") }),
    p.map(({ preset: v }) => /* @__PURE__ */ _.jsxs("div", { className: "preset-script-row", children: [
      /* @__PURE__ */ _.jsx("span", { children: v.name }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", onClick: () => y(v), children: o(f ? "createScript" : "showYaml") }),
      r[v.id] && /* @__PURE__ */ _.jsx("small", { role: "status", children: r[v.id] }),
      c?.id === v.id && /* @__PURE__ */ _.jsx("pre", { className: "yaml-preview", children: c.text })
    ] }, v.id))
  ] });
}
const yh = /* @__PURE__ */ new Set(["off", "custom", "smart_mode", "off_raise_main_brush", "custom_water_flow"]), Kx = ["fast", "standard", "deep", "deep_plus"], Qx = ["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"], Jx = {
  smartplan: "strategySmartPlan",
  vacuum_only: "type_vacuum",
  mop_only: "type_mop",
  vacuum_and_mop: "type_vacuum_and_mop",
  vacuum_then_mop: "type_vacuum_then_mop"
};
function Rc({ label: n, value: a, options: o, language: r, notSet: l, onChange: c }) {
  return /* @__PURE__ */ _.jsxs("label", { children: [
    n,
    /* @__PURE__ */ _.jsxs("select", { value: a ?? "", onChange: (m) => c(m.target.value || void 0), children: [
      /* @__PURE__ */ _.jsx("option", { value: "", children: l }),
      o.map((m) => /* @__PURE__ */ _.jsx("option", { value: m, children: xd(r, m) }, m)),
      a && !o.includes(a) && /* @__PURE__ */ _.jsx("option", { value: a, children: a })
    ] })
  ] });
}
function Wx({ hass: n, config: a, language: o, t: r, onChange: l, preset: c, index: m }) {
  const f = a.presets ?? [], p = On(n, a), y = (k) => l({ ...a, presets: f.map((x, $) => $ === m ? { ...c, ...k } : x) }), v = c.strategy === "custom", b = c.cleaning_type ?? "vacuum_and_mop", w = v && b !== "vacuum" && b !== "vacuum_then_mop";
  return /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
      /* @__PURE__ */ _.jsx("strong", { children: c.name }),
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("moveUp"), disabled: m === 0, onClick: () => l({ ...a, presets: Ks(f, m, m - 1) }), children: /* @__PURE__ */ _.jsx(Bh, {}) }),
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("moveDown"), disabled: m === f.length - 1, onClick: () => l({ ...a, presets: Ks(f, m, m + 1) }), children: /* @__PURE__ */ _.jsx(Hh, {}) }),
        /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": r("remove"), onClick: () => l({ ...a, presets: f.filter((k, x) => x !== m) }), children: /* @__PURE__ */ _.jsx(Us, {}) })
      ] })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("id"),
        /* @__PURE__ */ _.jsx("input", { value: c.id, onChange: (k) => y({ id: k.target.value }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("name"),
        /* @__PURE__ */ _.jsx("input", { value: c.name, onChange: (k) => y({ name: k.target.value }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("icon"),
        /* @__PURE__ */ _.jsx(kd, { hass: n, value: c.icon, onChange: (k) => y({ icon: k }) })
      ] }),
      /* @__PURE__ */ _.jsxs("label", { children: [
        r("strategy"),
        /* @__PURE__ */ _.jsxs("select", { value: c.strategy, onChange: (k) => y({ strategy: k.target.value }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "custom", children: r("strategyCustom") }),
          /* @__PURE__ */ _.jsx("option", { value: "smartplan", children: r("strategySmartPlan") })
        ] })
      ] }),
      v && /* @__PURE__ */ _.jsxs("label", { children: [
        r("cleaningType"),
        /* @__PURE__ */ _.jsx("select", { value: b, onChange: (k) => y({ cleaning_type: k.target.value }), children: Qx.map((k) => /* @__PURE__ */ _.jsx("option", { value: k, children: r(`type_${k}`) }, k)) })
      ] }),
      v && b !== "mop" && b !== "vacuum_then_mop" && /* @__PURE__ */ _.jsx(Rc, { label: r("suction"), value: c.fan_speed, options: p.fanSpeeds.filter((k) => !yh.has(k)), language: o, notSet: r("notSet"), onChange: (k) => y({ fan_speed: k }) }),
      w && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ _.jsx(Rc, { label: r("route"), value: c.mop_mode, options: Kx.filter((k) => p.mopModes.includes(k)), language: o, notSet: r("notSet"), onChange: (k) => y({ mop_mode: k }) }),
        /* @__PURE__ */ _.jsx(Rc, { label: r("water"), value: c.mop_intensity, options: p.mopIntensities.filter((k) => !yh.has(k)), language: o, notSet: r("notSet"), onChange: (k) => y({ mop_intensity: k }) })
      ] }),
      v && b !== "vacuum_then_mop" && /* @__PURE__ */ _.jsxs("label", { children: [
        r("count"),
        /* @__PURE__ */ _.jsxs("select", { value: c.cleaning_count ?? 1, onChange: (k) => y({ cleaning_count: Number(k.target.value) }), children: [
          /* @__PURE__ */ _.jsx("option", { value: "1", children: "1" }),
          /* @__PURE__ */ _.jsx("option", { value: "2", children: "2" })
        ] })
      ] })
    ] })
  ] });
}
function Fx(n) {
  const { hass: a, config: o, t: r, onChange: l } = n, c = o.presets ?? [], m = Io({ ...o, presets: [] }, On(a, o)), f = () => l({
    ...o,
    presets: [...c, { id: `preset_${c.length + 1}`, name: r("newPreset"), icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 }]
  });
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsxs("label", { children: [
      r("defaultPreset"),
      /* @__PURE__ */ _.jsxs("select", { value: o.default_preset ?? "vacuum_only", onChange: (p) => l({ ...o, default_preset: p.target.value }), children: [
        Qs.map((p) => {
          const y = m.find((b) => b.preset.id === p.id)?.available ?? !1, v = Jx[p.id];
          return /* @__PURE__ */ _.jsx("option", { value: p.id, disabled: !y, children: v ? r(v) : p.name }, p.id);
        }),
        c.map((p) => /* @__PURE__ */ _.jsx("option", { value: p.id, children: p.name }, p.id))
      ] })
    ] }),
    c.map((p, y) => /* @__PURE__ */ _.jsx(Wx, { ...n, preset: p, index: y }, `${p.id}-${y}`)),
    /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: f, children: [
      /* @__PURE__ */ _.jsx(Lh, {}),
      " ",
      r("addPreset")
    ] }),
    /* @__PURE__ */ _.jsx(Px, { ...n })
  ] });
}
const vh = /* @__PURE__ */ new WeakMap();
function jd(n, a) {
  const o = n.devices ?? n, r = vh.get(o) ?? /* @__PURE__ */ new Map();
  vh.set(o, r);
  const l = r.get(a);
  if (l) return l;
  const c = Ix(n, a).catch(() => {
  });
  return r.set(a, c), c;
}
async function Ix(n, a) {
  const o = n.entities?.[a]?.device_id, r = o ? n.devices?.[o] : void 0;
  if (!r || !n.callApi || n.user?.is_admin === !1) return;
  const l = new Set((r.identifiers ?? []).filter(([m]) => m === "roborock").map(([, m]) => m)), c = r.model_id ?? r.model ?? void 0;
  for (const m of r.config_entries ?? []) {
    const f = await n.callApi(
      "GET",
      `diagnostics/config_entry/${m}`
    ).catch(() => {
    }), p = Object.values(f?.data?.coordinators ?? {}), y = p.filter((w) => w.product?.model === c), v = p.find((w) => l.has(String(w.device?.duid))) ?? (y.length === 1 ? y[0] : void 0), b = v?.traits?.device_features;
    if (!(!v || !b))
      return {
        model: typeof v.product?.model == "string" ? v.product.model : c,
        protocol: typeof v.device?.pv == "string" ? v.device.pv : void 0,
        flags: Tz(b)
      };
  }
}
function e2({ hass: n, draft: a, result: o, deviceFlags: r, t: l, onDraft: c }) {
  const m = String(n.states[a.entity]?.attributes.friendly_name ?? a.name ?? "Roborock"), f = a.floors.some((y) => y.assisted_carry), p = F.useMemo(
    () => Uy(a.entity, m, { dock: fd(o.report.model, r?.flags), assistedCarry: f }),
    [a.entity, m, o.report.model, r, f]
  );
  return /* @__PURE__ */ _.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ _.jsx("p", { children: l("dockHelpersHint") }),
    /* @__PURE__ */ _.jsx(Hy, { hass: n, config: a, language: Oy(n, a.language), t: l, onChange: c, specs: p }),
    Object.keys(o.report.native_dock).length > 0 && /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: l("nativeDockFound") }),
    f && /* @__PURE__ */ _.jsxs("p", { className: "editor-hint", children: [
      l("assistedScriptsHint"),
      " ",
      ["assisted_carry_prepare", "assisted_carry_start", "assisted_carry_finish"].map((y, v) => /* @__PURE__ */ _.jsxs("span", { children: [
        v > 0 && " · ",
        /* @__PURE__ */ _.jsx("a", { href: vd(Di[y].file), target: "_blank", rel: "noreferrer", children: Di[y].label })
      ] }, y))
    ] })
  ] });
}
function t2({ hass: n, draft: a, t: o, onDraft: r }) {
  const l = On(n, a), c = Io(a, l).filter((p) => p.available), m = { id: "evening", name: o("eveningName"), icon: "mdi:weather-night", strategy: "custom", cleaning_type: "vacuum", fan_speed: "quiet", cleaning_count: 1 }, f = a.presets?.some((p) => p.id === m.id) ?? !1;
  return /* @__PURE__ */ _.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ _.jsxs("label", { children: [
      o("defaultPreset"),
      /* @__PURE__ */ _.jsx("select", { value: a.default_preset ?? "vacuum_only", onChange: (p) => r({ ...a, default_preset: p.target.value }), children: c.map(({ preset: p }) => /* @__PURE__ */ _.jsx("option", { value: p.id, children: p.name }, p.id)) })
    ] }),
    l.fanSpeeds.includes("quiet") && /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ _.jsx(
        "input",
        {
          type: "checkbox",
          checked: f,
          onChange: (p) => r({
            ...a,
            presets: p.target.checked ? [...a.presets ?? [], m] : (a.presets ?? []).filter((y) => y.id !== m.id)
          })
        }
      ),
      o("eveningPreset")
    ] }),
    /* @__PURE__ */ _.jsx("p", { className: "editor-hint", children: o("presetsScriptsHint") })
  ] });
}
function Zs(n, a, o) {
  n.onDraft({ ...n.draft, floors: n.draft.floors.map((r) => r.id === a ? { ...r, ...o } : r) });
}
function n2(n) {
  const { draft: a, result: o, t: r } = n, l = o.config.floors, c = (f, p) => {
    const y = a.floors.filter((b) => b.id !== f.id), v = p ? l.flatMap((b) => b.id === f.id ? [f] : y.filter((w) => w.id === b.id)) : y;
    n.onDraft({ ...a, floors: v });
  }, m = o.report.issues.flatMap((f) => f.code === "map_without_image" ? [f.map_name] : []);
  return /* @__PURE__ */ _.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ _.jsx("p", { children: n.t("floorsIntro") }),
    l.map((f) => {
      const p = a.floors.find((v) => v.id === f.id), y = o.report.issues.some((v) => v.code === "map_not_calibrated" && v.entity_id === f.map_entity);
      return /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
          /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: !!p, onChange: (v) => c(f, v.target.checked) }),
          /* @__PURE__ */ _.jsx("strong", { children: f.map_select_option ?? f.name }),
          " · ",
          r("roomsCount", { n: f.rooms.length }),
          y && /* @__PURE__ */ _.jsxs("span", { className: "wizard-warning", children: [
            " · ",
            r("notCalibrated")
          ] })
        ] }),
        p && /* @__PURE__ */ _.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ _.jsxs("label", { children: [
            r("name"),
            /* @__PURE__ */ _.jsx("input", { value: p.name, onChange: (v) => Zs(n, p.id, { name: v.target.value }) })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { children: [
            r("routine"),
            /* @__PURE__ */ _.jsxs("select", { value: p.vacuum_then_mop_routine ?? "", onChange: (v) => Zs(n, p.id, { vacuum_then_mop_routine: v.target.value || void 0 }), children: [
              /* @__PURE__ */ _.jsx("option", { value: "", children: r("noRoutine") }),
              o.report.routines.map((v) => /* @__PURE__ */ _.jsx("option", { value: v.entity_id, children: v.name }, v.entity_id))
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: p.assisted_carry === !0, onChange: (v) => Zs(n, p.id, { assisted_carry: v.target.checked || void 0 }) }),
            r("assistedCarry")
          ] })
        ] })
      ] }, f.id);
    }),
    m.length > 0 && /* @__PURE__ */ _.jsx("p", { className: "wizard-warning", children: r("mapsWithoutImage", { maps: m.join(", ") }) })
  ] });
}
function a2(n) {
  const { hass: a, draft: o, t: r } = n, l = Object.values(a.areas ?? {}).sort((m, f) => m.name.localeCompare(f.name)), c = (m, f, p) => Zs(n, m.id, { rooms: m.rooms.map((y) => y.segment_id === f ? { ...y, ...p } : y) });
  return /* @__PURE__ */ _.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ _.jsx("p", { children: r("roomsIntro") }),
    o.floors.map((m) => /* @__PURE__ */ _.jsxs("article", { className: "editor-card", children: [
      /* @__PURE__ */ _.jsx("strong", { children: m.name }),
      /* @__PURE__ */ _.jsx("div", { className: "room-editor-list", children: m.rooms.map((f) => /* @__PURE__ */ _.jsxs("div", { className: `room-editor ${f.area_id ? "" : "unmapped"}`, children: [
        /* @__PURE__ */ _.jsxs("label", { children: [
          r("name"),
          /* @__PURE__ */ _.jsx("input", { value: f.name, onChange: (p) => c(m, f.segment_id, { name: p.target.value }) })
        ] }),
        /* @__PURE__ */ _.jsxs("label", { children: [
          r("area"),
          /* @__PURE__ */ _.jsx(Dy, { hass: a, areas: l, emptyLabel: r("unmapped"), value: f.area_id, onChange: (p) => c(m, f.segment_id, { area_id: p, include_in_floor_clean: p ? f.include_in_floor_clean ?? !0 : !1 }) })
        ] }),
        /* @__PURE__ */ _.jsxs("label", { children: [
          r("icon"),
          /* @__PURE__ */ _.jsx(kd, { hass: a, value: f.icon, placeholder: a.areas?.[f.area_id ?? ""]?.icon ?? "mdi:floor-plan", onChange: (p) => c(m, f.segment_id, { icon: p }) })
        ] }),
        /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
          /* @__PURE__ */ _.jsx("input", { type: "checkbox", disabled: !f.area_id, checked: f.include_in_floor_clean !== !1 && !!f.area_id, onChange: (p) => c(m, f.segment_id, { include_in_floor_clean: p.target.checked }) }),
          r("includeFloor")
        ] })
      ] }, f.segment_id)) })
    ] }, m.id))
  ] });
}
function i2({ hass: n, draft: a, result: o, deviceFlags: r, t: l, onDraft: c, vacuums: m, vacuum: f, onVacuum: p }) {
  const { compatibility: y, model: v, profile: b } = o.report, w = On(n, a), k = fd(v, r?.flags), x = r ? Ls(r.flags) : void 0, $ = (B) => l(B === void 0 ? "unknown" : B ? "yes" : "no"), U = w.mopRoutes?.vacuum_and_mop ?? w.mopModes.filter((B) => ["fast", "standard", "deep", "deep_plus"].includes(B));
  return /* @__PURE__ */ _.jsxs("div", { className: "wizard-step", children: [
    m.length > 1 && /* @__PURE__ */ _.jsxs("label", { children: [
      l("vacuum"),
      /* @__PURE__ */ _.jsx("select", { value: f, onChange: (B) => p(B.target.value), children: m.map((B) => /* @__PURE__ */ _.jsx("option", { value: B, children: String(n.states[B]?.attributes.friendly_name ?? B) }, B)) })
    ] }),
    /* @__PURE__ */ _.jsxs("article", { className: `wizard-verdict verdict-${y.verdict}`, children: [
      /* @__PURE__ */ _.jsx("strong", { children: Kc(v) ?? v ?? a.entity }),
      /* @__PURE__ */ _.jsxs("span", { children: [
        l(`verdict_${y.verdict}`),
        b && ` · ${l("profileStatus", { status: l(`status_${b.status}`) })}`
      ] }),
      y.reasons.map((B) => /* @__PURE__ */ _.jsx("p", { children: l(`reason_${B}`) }, B))
    ] }),
    /* @__PURE__ */ _.jsxs("dl", { className: "wizard-facts", children: [
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_smartplan") }),
      /* @__PURE__ */ _.jsx("dd", { children: $(w.hasSmartPlan) }),
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_routes") }),
      /* @__PURE__ */ _.jsx("dd", { children: U.length > 0 ? U.join(", ") : l("none") }),
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_passes") }),
      /* @__PURE__ */ _.jsx("dd", { children: l(w.roomRepeatStrategy === "app_segment_clean" ? "fact_passes_segment" : "fact_passes_setting") }),
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_native_routine") }),
      /* @__PURE__ */ _.jsx("dd", { children: $(x?.vac_then_mop) }),
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_dock") }),
      /* @__PURE__ */ _.jsx("dd", { children: k ? Object.entries(k).filter(([, B]) => B).map(([B]) => B.replace("_", " ")).join(", ") || l("basicDock") : l("unknown") }),
      /* @__PURE__ */ _.jsx("dt", { children: l("fact_flags") }),
      /* @__PURE__ */ _.jsx("dd", { children: l(r ? "yes" : "fact_flags_missing") })
    ] }),
    /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: a.enable_mop_only === !0, onChange: (B) => c({ ...a, enable_mop_only: B.target.checked || void 0 }) }),
      l("mopOnly")
    ] })
  ] });
}
const Ms = ["check", "robot", "floors", "rooms", "dock", "presets", "review"];
function o2(n, a) {
  if (a.entity !== n.entity) return n;
  const o = Object.fromEntries(["name", "language", "presets", "default_preset"].flatMap((r) => a[r] !== void 0 ? [[r, a[r]]] : []));
  return { ...n, ...o };
}
function r2({ hass: n, current: a, t: o, onFinish: r, onCancel: l }) {
  const c = F.useMemo(() => _d(n), [n]), m = F.useMemo(() => Ny(n), [n]), [f, p] = F.useState("check"), [y, v] = F.useState(() => c.includes(a.entity) ? a.entity : c[0]), [b, w] = F.useState(), [k, x] = F.useState(), $ = !!y && b?.vacuum !== y, U = b?.result, B = b?.deviceFlags;
  F.useEffect(() => {
    if (!y) return;
    let X = !0;
    return Promise.all([yd(n, y), jd(n, y)]).then(([P, oe]) => {
      if (!X) return;
      const O = al(n, y, P, oe);
      w({ vacuum: y, result: O, deviceFlags: oe }), x(o2(O.config, a));
    }), () => {
      X = !1;
    };
  }, [y]);
  const I = Ms.indexOf(f), L = k ? md(k) : [], J = f === "check" ? !lx(m) : !k || !U || $, K = k && U ? { hass: n, draft: k, result: U, deviceFlags: B, t: o, onDraft: x } : void 0;
  return /* @__PURE__ */ _.jsxs("div", { className: "setup-wizard", children: [
    /* @__PURE__ */ _.jsxs("header", { className: "editor-heading", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("small", { children: o("wizardStep", { n: I + 1, total: Ms.length }) }),
        /* @__PURE__ */ _.jsx("h2", { children: o(`step_${f}`) })
      ] }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", onClick: l, children: o("close") })
    ] }),
    f === "check" && /* @__PURE__ */ _.jsx("ul", { className: "setup-checks", children: m.map((X) => /* @__PURE__ */ _.jsxs("li", { className: X.ok ? "ok" : X.blocking ? "missing" : "optional", children: [
      X.ok ? /* @__PURE__ */ _.jsx(Yh, {}) : /* @__PURE__ */ _.jsx($h, {}),
      /* @__PURE__ */ _.jsx("span", { children: o(`prereq_${X.id}`) }),
      !X.ok && X.fix_url && /* @__PURE__ */ _.jsx("a", { href: X.fix_url, target: "_blank", rel: "noreferrer", children: o("fix") })
    ] }, X.id)) }),
    f !== "check" && $ && /* @__PURE__ */ _.jsx("p", { role: "status", children: o("discovering") }),
    f === "robot" && K && /* @__PURE__ */ _.jsx(i2, { ...K, vacuums: c, vacuum: y, onVacuum: v }),
    f === "floors" && K && /* @__PURE__ */ _.jsx(n2, { ...K }),
    f === "rooms" && K && /* @__PURE__ */ _.jsx(a2, { ...K }),
    f === "dock" && K && /* @__PURE__ */ _.jsx(e2, { ...K }),
    f === "presets" && K && /* @__PURE__ */ _.jsx(t2, { ...K }),
    f === "review" && k && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      L.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "editor-errors", role: "alert", children: L.map((X) => /* @__PURE__ */ _.jsx("div", { children: X }, X)) }),
      /* @__PURE__ */ _.jsx("p", { children: o("reviewIntro") }),
      /* @__PURE__ */ _.jsx("pre", { className: "yaml-preview", children: By(k) })
    ] }),
    /* @__PURE__ */ _.jsxs("footer", { className: "wizard-nav", children: [
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: I === 0, onClick: () => p(Ms[I - 1]), children: o("back") }),
      f === "review" ? /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", disabled: !k || L.length > 0, onClick: () => k && r(k), children: o("saveCard") }) : /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", disabled: J, onClick: () => p(Ms[I + 1]), children: o("next") })
    ] })
  ] });
}
const s2 = {
  enable_mop_only: "mop_only",
  mop_routes: "mop_routes",
  cleaning_count_command: "repeat",
  enable_smartplan: "smartplan"
};
function l2(n, a) {
  return a.find((o) => o.map_entity === n.map_entity) ?? a.find((o) => n.map_select_option && it(o.map_select_option ?? "") === it(n.map_select_option)) ?? a.find((o) => it(o.name) === it(n.name));
}
function u2(n, a, o) {
  const r = [], l = (m) => !!(m && n.states[m]);
  for (const [m, f] of Object.entries(o.config.entities ?? {})) {
    const p = a.entities?.[m];
    f && p !== f && !l(p) && r.push({ id: `entity:${m}`, kind: "entity", key: m, from: p, to: f });
  }
  const c = /* @__PURE__ */ new Set();
  for (const m of a.floors) {
    const f = l2(m, o.config.floors);
    if (!f) continue;
    c.add(f), f.map_entity !== m.map_entity && !l(m.map_entity) && r.push({ id: `floor_map:${m.id}`, kind: "floor_map", floor_id: m.id, from: m.map_entity, to: f.map_entity });
    const p = a.entities?.map_select ? n.states[a.entities.map_select]?.attributes.options : void 0, y = m.map_select_option && Array.isArray(p) && p.includes(m.map_select_option);
    f.map_select_option && f.map_select_option !== m.map_select_option && !y && r.push({ id: `floor_option:${m.id}`, kind: "floor_option", floor_id: m.id, from: m.map_select_option, to: f.map_select_option });
    for (const v of f.rooms) {
      const b = m.rooms.find((w) => w.segment_id === v.segment_id);
      b ? v.area_id && v.area_id !== b.area_id && (!b.area_id || er(n, b)) && r.push({ id: `room_area:${m.id}:${v.segment_id}`, kind: "room_area", floor_id: m.id, segment_id: v.segment_id, room: b.name, from: b.area_id, to: v.area_id }) : r.push({ id: `room_added:${m.id}:${v.segment_id}`, kind: "room_added", floor_id: m.id, room: v });
    }
  }
  for (const m of o.config.floors)
    c.has(m) || r.push({ id: `floor_added:${m.id}`, kind: "floor_added", floor: m });
  !a.consumables?.length && o.config.consumables?.length && r.push({ id: "consumables", kind: "consumables", to: o.config.consumables });
  for (const [m, f] of Object.entries(s2)) {
    const p = o.config[m];
    p !== void 0 && a[m] === void 0 && o.report.fact_sources[f] === "device" && r.push({ id: `fact:${m}`, kind: "model_fact", key: m, to: p });
  }
  return o.config.config_version && a.config_version === void 0 && r.push({ id: "config_version", kind: "config_version", to: o.config.config_version }), r;
}
function c2(n, a) {
  const o = structuredClone(n), r = (l) => o.floors.find((c) => c.id === l);
  for (const l of a)
    switch (l.kind) {
      case "entity":
        o.entities = { ...o.entities, [l.key]: l.to };
        break;
      case "floor_added":
        o.floors.push(structuredClone(l.floor));
        break;
      case "floor_map": {
        const c = r(l.floor_id);
        c && (c.map_entity = l.to);
        break;
      }
      case "floor_option": {
        const c = r(l.floor_id);
        c && (c.map_select_option = l.to);
        break;
      }
      case "room_area": {
        const c = r(l.floor_id)?.rooms.find((m) => m.segment_id === l.segment_id);
        c && (c.area_id = l.to);
        break;
      }
      case "room_added": {
        const c = r(l.floor_id);
        c && (c.rooms = [...c.rooms, structuredClone(l.room)].sort((m, f) => m.segment_id - f.segment_id));
        break;
      }
      case "consumables":
        o.consumables = structuredClone(l.to);
        break;
      case "model_fact":
        o[l.key] = structuredClone(l.to);
        break;
      case "config_version":
        o.config_version = l.to;
        break;
    }
  return o;
}
function d2(n, a) {
  const o = a("none");
  switch (n.kind) {
    case "entity": {
      const r = a(`entity_${n.key}`);
      return n.from ? a("change_entity_replace", { label: r, from: n.from, to: n.to }) : a("change_entity_add", { label: r, to: n.to });
    }
    case "floor_added":
      return a("change_floor_added", { name: n.floor.name, n: n.floor.rooms.length });
    case "floor_map":
      return a("change_floor_map", { floor: n.floor_id, from: n.from, to: n.to });
    case "floor_option":
      return a("change_floor_option", { floor: n.floor_id, from: n.from ?? o, to: n.to });
    case "room_area":
      return a("change_room_area", { room: n.room, from: n.from ?? o, to: n.to });
    case "room_added":
      return a(n.room.area_id ? "change_room_added" : "change_room_added_unmapped", { room: n.room.name, floor: n.floor_id });
    case "consumables":
      return a("change_consumables", { n: n.to.length });
    case "model_fact":
      return a("change_model_fact", { key: n.key });
    case "config_version":
      return a("change_config_version", { n: n.to });
  }
}
function m2({ hass: n, config: a, t: o, onApply: r, onClose: l }) {
  const [c, m] = F.useState(), [f, p] = F.useState(/* @__PURE__ */ new Set()), [y, v] = F.useState(!1), b = async () => {
    v(!0);
    const [w, k] = await Promise.all([yd(n, a.entity), jd(n, a.entity)]), x = u2(n, a, al(n, a.entity, w, k));
    m(x), p(new Set(x.map(($) => $.id))), v(!1);
  };
  return /* @__PURE__ */ _.jsxs("section", { className: "editor-card redetect-panel", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "editor-heading", children: [
      /* @__PURE__ */ _.jsx("strong", { children: o("redetect") }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", onClick: l, children: o("close") })
    ] }),
    !c && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("p", { children: o("redetectIntro") }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "primary", disabled: y, onClick: b, children: o(y ? "checking" : "checkNow") })
    ] }),
    c?.length === 0 && /* @__PURE__ */ _.jsx("p", { role: "status", children: o("upToDate") }),
    c && c.length > 0 && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("ul", { className: "redetect-changes", children: c.map((w) => /* @__PURE__ */ _.jsx("li", { children: /* @__PURE__ */ _.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ _.jsx(
          "input",
          {
            type: "checkbox",
            checked: f.has(w.id),
            onChange: (k) => {
              const x = new Set(f);
              k.target.checked ? x.add(w.id) : x.delete(w.id), p(x);
            }
          }
        ),
        d2(w, o)
      ] }) }, w.id)) }),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          type: "button",
          className: "primary",
          disabled: f.size === 0,
          onClick: () => r(c2(a, c.filter((w) => f.has(w.id)))),
          children: o("applyChanges", { n: f.size })
        }
      )
    ] })
  ] });
}
function Ro({ title: n, open: a = !1, children: o }) {
  return /* @__PURE__ */ _.jsxs("details", { className: "editor-section", open: a, children: [
    /* @__PURE__ */ _.jsx("summary", { children: /* @__PURE__ */ _.jsx("h3", { children: n }) }),
    /* @__PURE__ */ _.jsx("div", { className: "editor-section-body", children: o })
  ] });
}
function f2({ hass: n, config: a, onChange: o }) {
  const [r, l] = F.useState(() => ux(n, a)), [c, m] = F.useState(!1), f = Oy(n, a.language), p = (x, $) => rx(f, x, $), y = md(a), v = F.useMemo(
    () => n.entities && n.states[a.entity] ? al(n, a.entity).report : void 0,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n.entities, n.devices, a.entity]
  ), b = F.useMemo(() => {
    const x = Ey(n, a.entity);
    return new Set([x.robot?.id, x.dock?.id, ...x.companions.map(($) => $.id)].filter(($) => !!$));
  }, [n.entities, n.devices, a.entity]);
  if (r)
    return /* @__PURE__ */ _.jsx("div", { className: "editor", children: /* @__PURE__ */ _.jsx(r2, { hass: n, current: a, t: p, onCancel: () => l(!1), onFinish: (x) => {
      o(x), l(!1);
    } }) });
  const w = { hass: n, config: a, language: f, t: p, onChange: o }, k = v?.entities ?? {};
  return /* @__PURE__ */ _.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ _.jsx("h2", { children: p("title") }),
    /* @__PURE__ */ _.jsx("p", { children: p("intro") }),
    /* @__PURE__ */ _.jsxs("div", { className: "editor-toolbar", children: [
      /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => l(!0), children: [
        /* @__PURE__ */ _.jsx(T0, {}),
        " ",
        p("setupAssistant")
      ] }),
      /* @__PURE__ */ _.jsxs("button", { type: "button", disabled: !n.states[a.entity], onClick: () => m(!0), children: [
        /* @__PURE__ */ _.jsx(p0, {}),
        " ",
        p("redetect")
      ] })
    ] }),
    c && /* @__PURE__ */ _.jsx(m2, { ...w, onApply: (x) => {
      o(x), m(!1);
    }, onClose: () => m(!1) }),
    y.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "editor-errors", role: "alert", children: y.map((x) => /* @__PURE__ */ _.jsx("div", { children: x }, x)) }),
    /* @__PURE__ */ _.jsx(Ro, { title: p("sectionBasics"), open: !0, children: /* @__PURE__ */ _.jsx(kx, { ...w }) }),
    /* @__PURE__ */ _.jsx(Ro, { title: p("sectionFloors"), open: !0, children: /* @__PURE__ */ _.jsx(Rx, { ...w, detected: k, deviceIds: b }) }),
    /* @__PURE__ */ _.jsx(Ro, { title: p("sectionDock"), children: /* @__PURE__ */ _.jsx(Ox, { ...w, model: v?.model, detected: k, deviceIds: b }) }),
    /* @__PURE__ */ _.jsx(Ro, { title: p("sectionPresets"), children: /* @__PURE__ */ _.jsx(Fx, { ...w }) }),
    /* @__PURE__ */ _.jsx(Ro, { title: p("sectionAdvanced"), children: /* @__PURE__ */ _.jsx(_x, { ...w, detected: k, deviceIds: b }) })
  ] });
}
function p2({ hass: n, language: a, errors: o = [], missingVacuum: r }) {
  const l = Ny(n);
  return /* @__PURE__ */ _.jsx("ha-card", { className: "roborock-card setup-state", children: /* @__PURE__ */ _.jsxs("div", { className: "setup-state-body", children: [
    /* @__PURE__ */ _.jsxs("h1", { children: [
      /* @__PURE__ */ _.jsx(Vh, {}),
      N(a, "setupTitle")
    ] }),
    /* @__PURE__ */ _.jsx("p", { children: N(a, "setupIntro") }),
    /* @__PURE__ */ _.jsx("ul", { className: "setup-checks", children: l.map((c) => /* @__PURE__ */ _.jsxs("li", { className: c.ok ? "ok" : c.blocking ? "missing" : "optional", children: [
      c.ok ? /* @__PURE__ */ _.jsx(Yh, { "aria-label": "OK" }) : /* @__PURE__ */ _.jsx($h, { "aria-label": "Missing" }),
      /* @__PURE__ */ _.jsx("span", { children: N(a, `prereq_${c.id}`) }),
      !c.ok && c.fix_url && /* @__PURE__ */ _.jsx("a", { href: c.fix_url, target: "_blank", rel: "noreferrer", children: N(a, "setupFix") })
    ] }, c.id)) }),
    r && /* @__PURE__ */ _.jsxs("p", { className: "setup-problem", children: [
      N(a, "setupVacuumMissing"),
      " ",
      /* @__PURE__ */ _.jsx("code", { children: r })
    ] }),
    o.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "setup-problem", children: [
      /* @__PURE__ */ _.jsx("p", { children: N(a, "setupConfigErrors") }),
      /* @__PURE__ */ _.jsx("ul", { children: o.map((c) => /* @__PURE__ */ _.jsx("li", { children: /* @__PURE__ */ _.jsx("code", { children: c }) }, c)) })
    ] }),
    /* @__PURE__ */ _.jsx("p", { className: "setup-next", children: N(a, "setupOpenEditor") })
  ] }) });
}
const _2 = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Po extends Error {
  constructor(a, o, r) {
    super(o, r), this.operation = a, this.name = "AssistedCarryError";
  }
  operation;
}
function h2(n, a) {
  return n.floors.find((o) => o.assisted_carry && o.id === a?.floor_id) ?? n.floors.find((o) => o.assisted_carry);
}
function y2(n, a) {
  const o = a.entities?.assisted_carry_stage, r = o ? n.states[o]?.state : void 0;
  return r && _2.has(r) ? r : "idle";
}
function v2(n) {
  return !["idle", "complete", "error"].includes(n);
}
function g2(n, a, o) {
  const r = o.cleaning_type === "vacuum_then_mop", l = o.cleaning_type === "mop";
  if (o.strategy !== "smartplan" && !r && !l && !o.fan_speed)
    throw new Po("prepare", "Suction is required");
  if (o.strategy !== "smartplan" && !r && o.cleaning_type !== "vacuum" && (!o.mop_mode || !o.mop_intensity))
    throw new Po("prepare", "Water flow and route are required");
  const c = [...new Set(a)], m = n.rooms.filter((p) => c.includes(p.segment_id)), f = n.rooms.filter((p) => p.include_in_floor_clean !== !1 && p.area_id).map((p) => p.segment_id);
  return {
    segment_ids: c,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: m.map((p) => p.area_id).filter((p) => !!p),
    whole_floor: c.length === f.length && f.every((p) => c.includes(p)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: o.strategy,
    cleaning_type: o.cleaning_type,
    fan_speed: o.strategy === "smartplan" || r || l ? void 0 : o.fan_speed,
    mop_mode: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_mode,
    mop_intensity: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || r ? void 0 : o.mop_intensity,
    cleaning_count: o.strategy === "smartplan" || o.cleaning_type === "vacuum_then_mop" ? 1 : o.cleaning_count
  };
}
function b2(n) {
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
function k2(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const a = JSON.parse(n);
      if (!Array.isArray(a.s) || !a.s.every((p) => Number.isInteger(p)) || ![1, 2].includes(Number(a.c))) return;
      const o = a.g === void 0 ? "custom" : a.g, r = a.t === void 0 ? "vacuum_and_mop" : a.t;
      if (!["custom", "smartplan"].includes(String(o)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(r))) return;
      const l = typeof a.f == "string" ? a.f : void 0, c = typeof a.m == "string" ? a.m : void 0, m = typeof a.w == "string" ? a.w : void 0, f = r === "vacuum_then_mop";
      return o === "custom" && !f && r !== "mop" && !l || o === "custom" && !f && r !== "vacuum" && (!c || !m) ? void 0 : {
        segment_ids: a.s,
        floor_id: typeof a.d == "string" ? a.d : void 0,
        map_select_option: typeof a.o == "string" ? a.o : void 0,
        area_ids: Array.isArray(a.a) && a.a.every((p) => typeof p == "string") ? a.a : void 0,
        whole_floor: a.e === 1,
        vacuum_then_mop_routine: typeof a.r == "string" ? a.r : void 0,
        strategy: o,
        cleaning_type: r,
        fan_speed: l,
        mop_mode: c,
        mop_intensity: m,
        cleaning_count: Number(a.c)
      };
    } catch {
      return;
    }
}
function Ri(n, a, o) {
  if (!a || !n.states[a] || n.states[a].state === "unavailable")
    throw new Po(o, `${a ?? "entity"} is unavailable`);
  return a;
}
async function Ti(n, a, o) {
  const r = Ri(n, a.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: o }, { entity_id: r });
}
async function w2(n, a, o) {
  const r = Ri(n, a.entities?.assisted_carry_job, "save_job"), l = Ri(n, a.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: b2(o) }, { entity_id: r }), await Ti(n, a, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: l });
}
async function S2(n, a, o, r) {
  const l = Ri(n, a.entities?.assisted_carry_start_script, "start_upstairs"), c = o.rooms.filter((f) => r.segment_ids.includes(f.segment_id)).map((f) => f.area_id).filter((f) => !!f);
  if (c.length === 0) throw new Po("start_upstairs", "No mapped rooms were saved");
  const m = {
    cleaning_area_id: c,
    strategy: r.strategy,
    cleaning_type: r.cleaning_type,
    cleaning_count: r.cleaning_count
  };
  r.fan_speed && (m.fan_speed = r.fan_speed), r.mop_mode && (m.mop_mode = r.mop_mode), r.mop_intensity && (m.mop_intensity = r.mop_intensity), await n.callService("script", "turn_on", {
    variables: m
  }, { entity_id: l });
}
async function z2(n, a) {
  const o = Ri(n, a.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: o });
}
async function gh(n, a) {
  await Ti(n, a, "idle");
  const o = Ri(n, a.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: o });
}
const x2 = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, j2 = {
  normal: 0,
  warm: 1,
  hot: 2
}, A2 = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, T2 = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class Mn extends Error {
  constructor(a, o, r) {
    super(o, r), this.operation = a, this.name = "DockExecutionError";
  }
  operation;
}
async function on(n, a, o, r) {
  const l = { command: o };
  r !== void 0 && (l.params = r), await n.callService("vacuum", "send_command", l, { entity_id: a.entity });
}
function Os(n, a, o) {
  const r = n[a];
  if (r === void 0) throw new Mn(o, `Unsupported value: ${a}`);
  return r;
}
function E2(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const a = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(a))
    throw new Mn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: a * 60 };
}
async function C2(n, a, o, r) {
  const l = a.entities?.[zd[o]];
  if (!l) return;
  const c = l.split(".")[0];
  if (typeof r == "boolean") {
    if (!["input_boolean", "switch"].includes(c))
      throw new Mn(o, `${l} is not a boolean helper`);
    await n.callService(c, r ? "turn_on" : "turn_off", {}, { entity_id: l });
    return;
  }
  if (!["input_select", "select"].includes(c))
    throw new Mn(o, `${l} is not a select helper`);
  await n.callService(c, "select_option", { option: r }, { entity_id: l });
}
async function M2(n, a, o, r) {
  try {
    switch (o) {
      case "mop_wash_frequency":
        await on(n, a, "set_smart_wash_params", E2(String(r)));
        break;
      case "wash_mode":
        await on(n, a, "set_wash_towel_mode", {
          wash_mode: Os(x2, String(r), o)
        });
        break;
      case "wash_temperature":
        await on(n, a, "set_wash_water_temperature", {
          values: Os(j2, String(r), o)
        });
        break;
      case "auto_empty":
        await on(n, a, "set_dust_collection_switch_status", { status: r ? 1 : 0 });
        break;
      case "empty_mode":
        await on(n, a, "set_dust_collection_mode", {
          mode: Os(A2, String(r), o)
        });
        break;
      case "auto_dry":
        await on(n, a, "app_set_dryer_setting", { status: r ? 1 : 0 });
        break;
      case "dry_duration":
        await on(n, a, "app_set_dryer_setting", {
          on: { dry_time: Os(T2, String(r), o) }
        });
        break;
    }
    await C2(n, a, o, r);
  } catch (l) {
    throw l instanceof Mn ? l : new Mn(o, l instanceof Error ? l.message : String(l), { cause: l });
  }
}
async function Zc(n, a, o, r = !1) {
  const l = `${r ? "stop" : "start"}_${o}`;
  try {
    o === "empty" && await on(n, a, r ? "app_stop_collect_dust" : "app_start_collect_dust"), o === "wash" && await on(n, a, r ? "app_stop_wash" : "app_start_wash"), o === "dry" && await on(n, a, "app_set_dryer_status", { status: r ? 0 : 1 }), o === "drain" && await on(n, a, "app_empty_rinse_tank_water");
  } catch (c) {
    throw new Mn(l, c instanceof Error ? c.message : String(c), { cause: c });
  }
}
const O2 = {
  main_brush: 300,
  side_brush: 200,
  filter: 150,
  sensors: 30
}, bh = 10;
function N2(n, a) {
  switch (n.attributes.unit_of_measurement) {
    case "h":
      return a;
    case "min":
      return a / 60;
    case "s":
      return a / 3600;
    case "d":
      return a * 24;
    default:
      return;
  }
}
function D2(n, a) {
  const o = n.states[a.sensor], r = a.reset_button ? n.states[a.reset_button] : void 0, l = !!(r && r.state !== "unavailable"), c = Number(o?.state);
  if (!o || o.state === "" || !Number.isFinite(c)) return { ...a, level: "unknown", can_reset: l };
  if (o.attributes.unit_of_measurement === "%") {
    const v = c <= 0 ? "overdue" : c < bh ? "due" : "ok";
    return { ...a, remaining: c, unit: "%", percent: c, level: v, can_reset: l };
  }
  const m = N2(o, c);
  if (m === void 0) return { ...a, level: "unknown", can_reset: l };
  const f = O2[a.kind], p = f ? Math.max(0, m / f * 100) : void 0, y = m <= 0 ? "overdue" : p !== void 0 && p < bh ? "due" : "ok";
  return { ...a, remaining: m, unit: "h", ...p !== void 0 ? { percent: p } : {}, level: y, can_reset: l };
}
function Yy(n, a) {
  return (a.consumables ?? []).map((o) => D2(n, o));
}
function $y(n) {
  return n.filter((a) => a.level === "overdue").length;
}
const R2 = 20, Z2 = /* @__PURE__ */ new Set(["ok", "none", "unknown", "unavailable", ""]);
function U2(n) {
  return n.strategy === "smartplan" || n.cleaning_type !== "vacuum";
}
function qy(n, a, o) {
  const r = { blocking: [], warnings: [] }, l = (y) => {
    const v = a.entities?.[y];
    return v ? { id: v, state: n.states[v]?.state } : void 0;
  }, c = (y, v, b, w) => {
    const k = l(y);
    k?.state === v && w.push({ code: b, entity_id: k.id });
  };
  U2(o) && (c("dock_clean_water_empty", "on", "clean_water_empty", r.blocking), c("water_shortage", "on", "water_shortage", r.blocking), c("mop_attached", "off", "mop_detached", r.blocking), c("water_box_attached", "off", "water_box_detached", r.blocking), c("dock_dirty_water_full", "on", "dirty_water_full", r.warnings));
  const m = l("dock_error");
  m?.state !== void 0 && !Z2.has(m.state) && r.warnings.push({ code: "dock_error", entity_id: m.id, detail: m.state });
  const f = l("battery");
  f?.state !== void 0 && f.state !== "" && Number(f.state) < R2 && r.warnings.push({ code: "low_battery", entity_id: f.id, detail: f.state });
  const p = $y(Yy(n, a));
  return p > 0 && r.warnings.push({ code: "maintenance_overdue", detail: String(p) }), r;
}
const H2 = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), Wc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), B2 = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Te extends Error {
  constructor(a, o, r) {
    super(o, r), this.operation = a, this.name = "JobExecutionError";
  }
  operation;
}
async function Y2(n, a, o, r, l, c) {
  const m = Date.now();
  for (; Date.now() - m < r; ) {
    if (n().states[a]?.state === o) return;
    await c(l);
  }
  throw new Te("wait_for_state", `${a} did not become “${o}” within ${r / 1e3}s`);
}
function $o(n, a, o, r) {
  const l = n.states[a];
  if (!l || l.state === "unavailable") throw new Te(r, `${a} is unavailable`);
  if (!(Array.isArray(l.attributes.options) ? l.attributes.options.map(String) : []).includes(o)) throw new Te(r, `${a} does not support “${o}”`);
}
async function Zo(n, a, o, r, l, c, m, f = !0) {
  const p = n();
  if ($o(p, a, o, r), p.states[a]?.state !== o)
    try {
      if (await p.callService("select", "select_option", { option: o }, { entity_id: a }), !f) return;
      await Y2(n, a, o, l, c, m);
    } catch (y) {
      throw y instanceof Te ? new Te(r, y.message, { cause: y }) : new Te(r, y instanceof Error ? y.message : String(y), { cause: y });
    }
}
async function $2(n, a) {
  const o = {
    fan_power: 102,
    water_box_mode: 200
  };
  a.entities?.mop_mode && (o.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [o] },
      { entity_id: a.entity }
    );
  } catch (r) {
    throw new Te("set_cleaning_mode", r instanceof Error ? r.message : String(r), { cause: r });
  }
}
async function Ad(n, a, o, r, l) {
  try {
    await n.callService("vacuum", "send_command", { command: o, params: r }, { entity_id: a.entity });
  } catch (c) {
    throw new Te(l, c instanceof Error ? c.message : String(c), { cause: c });
  }
}
async function kh(n, a, o) {
  await Ad(n, a, "set_clean_repeat_times", { repeat: o }, "set_cleaning_count");
}
async function q2(n, a) {
  await Ad(
    n,
    a,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function wh(n, a, o) {
  const r = n.states[a]?.attributes.fan_speed_list;
  if (!(Array.isArray(r) ? r.map(String) : []).includes(o))
    throw new Te("set_fan_speed", `${a} does not support “${o}”`);
}
async function X2({
  getHass: n,
  config: a,
  floor: o,
  rooms: r,
  draft: l,
  zone: c,
  timeoutMs: m = 1e4,
  pollMs: f = 150,
  sleep: p = (y) => new Promise((v) => setTimeout(v, y))
}) {
  const y = n(), v = On(y, a), b = y.states[a.entity];
  if (!b || b.state === "unavailable") throw new Te("preflight", `${a.entity} is unavailable`);
  if (hx(b.state)) throw new Te("preflight", `Vacuum is ${b.state}`);
  const w = a.entities?.error ? y.states[a.entities.error] : void 0;
  if (w && !["none", "unknown", "unavailable", ""].includes(w.state))
    throw new Te("preflight", `Vacuum error: ${w.state}`);
  const k = [...new Set(r.map((X) => X.area_id).filter((X) => !!X))];
  if (!c && k.length === 0) throw new Te("preflight", "Select at least one room mapped to a Home Assistant area");
  if (l.cleaning_type === "mop" && !a.enable_mop_only)
    throw new Te("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const x = l.cleaning_type === "mop" ? "mop" : l.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, $ = x ? v.mopRoutes?.[x] : void 0;
  if (l.mop_mode && $ && !$.includes(l.mop_mode))
    throw new Te("preflight", `Mop route “${l.mop_mode}” is not allowed for ${x}`);
  const U = qy(y, a, l).blocking;
  if (U.length > 0)
    throw new Te("preflight", `Not ready to clean: ${U.map((X) => X.code).join(", ")}`);
  if (r.some((X) => er(y, X)))
    throw new Te("preflight", "A selected room uses an area that no longer exists");
  if (l.strategy === "smartplan" && !v.hasSmartPlan)
    throw new Te("preflight", "This model does not offer AI SmartPlan");
  if (c && (l.strategy !== "custom" || !Wc.has(l.cleaning_type)))
    throw new Te("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (c && (![c.x1, c.y1, c.x2, c.y2].every(Number.isFinite) || c.x2 <= c.x1 || c.y2 <= c.y1))
    throw new Te("preflight", "The selected zone is invalid");
  const B = a.entities?.map_select, I = async () => {
    if (!(a.floors.length <= 1)) {
      if (!B || !o.map_select_option) throw new Te("select_floor", "This floor has no map selector mapping");
      if (await Zo(n, B, o.map_select_option, "select_floor", m, f, p), f > 0 && await p(f), n().states[B]?.state !== o.map_select_option)
        throw new Te("select_floor", `${B} did not stay on “${o.map_select_option}”`);
    }
  };
  if (await I(), l.cleaning_type === "vacuum_then_mop" && l.strategy !== "smartplan") {
    const X = o.vacuum_then_mop_routine;
    if (X) {
      const Q = n().states[X];
      if (!Q || Q.state === "unavailable")
        throw new Te("start_vacuum_then_mop", `${X} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: X });
      } catch (ie) {
        throw new Te("start_vacuum_then_mop", ie instanceof Error ? ie.message : String(ie), { cause: ie });
      }
      return o.rooms.filter((ie) => ie.include_in_floor_clean !== !1).map((ie) => ie.area_id).filter((ie) => !!ie);
    }
    const P = a.entities?.vacuum_then_mop_script, oe = P ? n().states[P] : void 0;
    if (!P || !oe || oe.state === "unavailable")
      throw new Te("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const O = a.entities?.cleaning_mode;
    if (!O)
      throw new Te("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if ($o(n(), O, "vacuum", "set_cleaning_mode"), $o(n(), O, "mop", "set_cleaning_mode"), l.mop_mode) {
      const Q = a.entities?.mop_mode;
      if (!Q) throw new Te("set_mop_mode", "The selected profile requires a mop-mode entity");
      $o(n(), Q, l.mop_mode, "set_mop_mode");
    }
    if (l.mop_intensity) {
      const Q = a.entities?.mop_intensity;
      if (!Q) throw new Te("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      $o(n(), Q, l.mop_intensity, "set_mop_intensity");
    }
    l.fan_speed && wh(n(), a.entity, l.fan_speed), await I();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: k,
            fan_speed: l.fan_speed,
            mop_mode: l.mop_mode,
            mop_intensity: l.mop_intensity
          }
        },
        { entity_id: P }
      );
    } catch (Q) {
      throw new Te("start_vacuum_then_mop", Q instanceof Error ? Q.message : String(Q), { cause: Q });
    }
    return k;
  }
  if (l.strategy === "smartplan")
    await q2(n(), a), v.roomRepeatStrategy === "set_clean_repeat_times" && await kh(n(), a, 1);
  else {
    const X = a.entities?.cleaning_mode, P = B2[l.cleaning_type], oe = X && n().states[X]?.attributes.options;
    if (X && Array.isArray(oe) && oe.map(String).includes(P))
      await Zo(
        n,
        X,
        P,
        "set_cleaning_mode",
        m,
        f,
        p,
        P === "vacuum"
      );
    else if (l.cleaning_type === "vacuum" && a.vacuum_mode_fallback === "set_clean_motor_mode")
      await $2(n(), a);
    else {
      if (l.cleaning_type === "vacuum")
        throw new Te("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (l.cleaning_type === "mop")
        throw new Te("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const O = a.entities?.mop_mode;
    if (l.cleaning_type !== "vacuum" && l.mop_mode) {
      if (!O) throw new Te("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[O]?.state === "smart_mode" && H2.has(l.mop_mode) && await Zo(n, O, "custom", "leave_smartplan", m, f, p), await Zo(n, O, l.mop_mode, "set_mop_mode", m, f, p);
    }
    if (l.cleaning_type !== "vacuum" && l.mop_intensity) {
      const Q = a.entities?.mop_intensity;
      if (!Q) throw new Te("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await Zo(n, Q, l.mop_intensity, "set_mop_intensity", m, f, p);
    }
    if (l.fan_speed && l.cleaning_type !== "mop") {
      const Q = n();
      wh(Q, a.entity, l.fan_speed);
      try {
        await Q.callService("vacuum", "set_fan_speed", { fan_speed: l.fan_speed }, { entity_id: a.entity });
      } catch (ie) {
        throw new Te("set_fan_speed", ie instanceof Error ? ie.message : String(ie), { cause: ie });
      }
    }
    !c && v.roomRepeatStrategy === "set_clean_repeat_times" && await kh(n(), a, l.cleaning_count);
  }
  await I();
  const L = new Set(r.map((X) => X.segment_id)), J = r.length === o.rooms.length && o.rooms.every((X) => L.has(X.segment_id)), K = !c && l.cleaning_count === 2 && v.roomRepeatStrategy === "app_segment_clean";
  try {
    c ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...c, repeats: l.cleaning_count },
      { entity_id: a.entity }
    ) : K ? await Ad(
      n(),
      a,
      "app_segment_clean",
      [{ segments: r.map((X) => X.segment_id), repeat: l.cleaning_count }],
      "clean_segments"
    ) : J ? await n().callService("vacuum", "start", void 0, { entity_id: a.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: k },
      { entity_id: a.entity }
    );
  } catch (X) {
    const P = c ? "clean_zone" : K ? "clean_segments" : J ? "start_floor" : "clean_area";
    throw new Te(P, X instanceof Error ? X.message : String(X), { cause: X });
  }
  return k;
}
function L2(n, a) {
  const o = N(n, `check_${a.code}`);
  return a.code === "dock_error" ? `${o} ${a.detail?.replaceAll("_", " ")}` : a.code === "low_battery" ? `${o} ${a.detail}%` : a.code === "maintenance_overdue" ? `${o} ${a.detail}` : o;
}
function V2(n, a) {
  switch (a.code) {
    case "area_missing":
      return Ts(n, "health_area_missing", { room: a.room, area: a.area_id });
    case "entity_missing":
      return Ts(n, "health_entity_missing", { entity: a.entity_id });
    case "map_option_missing":
      return Ts(n, "health_map_option_missing", { option: a.option });
    case "map_uncalibrated":
      return Ts(n, "health_map_uncalibrated", { entity: a.entity_id });
  }
}
function G2(n, a) {
  return a.remaining === void 0 ? N(n, "maintenanceUnknown") : a.unit === "%" ? `${Math.max(0, Math.round(a.remaining))}%` : a.remaining <= 0 ? `0 ${N(n, "hourShort")}` : a.remaining < 1 ? `${Math.round(a.remaining * 60)} ${N(n, "minuteShort")}` : `${Math.round(a.remaining)} ${N(n, "hourShort")}`;
}
const P2 = {
  ok: "maintenanceOk",
  due: "maintenanceDue",
  overdue: "maintenanceOverdue",
  unknown: "maintenanceUnknown"
};
function K2(n, a) {
  return N(n, P2[a.level]);
}
function Ea(n, a, o) {
  const r = a.entities?.[zd[o]], l = r ? n.states[r]?.state : void 0;
  return !l || ["unknown", "unavailable"].includes(l) ? Zy[o] : o === "auto_empty" || o === "auto_dry" ? l === "on" : l;
}
function qo(n, a) {
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
  if (a.endsWith("_min"))
    return `${a.replace("_min", "")} ${N(n, "minuteShort")}`;
  const r = n === "nl" ? 1 : n === "tr" ? 2 : n === "pl" ? 3 : 0;
  return o[a]?.[r] ?? a;
}
function Uo({
  label: n,
  setting: a,
  value: o,
  language: r,
  disabled: l,
  onChange: c
}) {
  return /* @__PURE__ */ _.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ _.jsx("span", { children: n }),
    /* @__PURE__ */ _.jsx("select", { "aria-label": n, value: o, disabled: l, onChange: (m) => c(m.target.value), children: Ry[a].map((m) => /* @__PURE__ */ _.jsx("option", { value: m, children: qo(r, m) }, m)) })
  ] });
}
function Uc({
  label: n,
  checked: a,
  disabled: o,
  onChange: r
}) {
  return /* @__PURE__ */ _.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ _.jsx("span", { children: n }),
    /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": a,
        className: `dock-toggle ${a ? "active" : ""}`,
        disabled: o,
        onClick: () => r(!a),
        children: /* @__PURE__ */ _.jsx("span", {})
      }
    )
  ] });
}
function Q2({
  hass: n,
  config: a,
  language: o,
  washing: r,
  emptying: l,
  drying: c,
  dryingRemaining: m,
  pending: f,
  onClose: p,
  onAction: y,
  onSetting: v,
  onChildLock: b,
  maintenance: w = [],
  onResetConsumable: k
}) {
  const x = !!f, $ = a.entities?.dock_child_lock, U = $ ? n.states[$]?.state === "on" : !1, B = String(Ea(n, a, "mop_wash_frequency")), I = String(Ea(n, a, "wash_mode")), L = String(Ea(n, a, "wash_temperature")), J = !!Ea(n, a, "auto_empty"), K = String(Ea(n, a, "empty_mode")), X = !!Ea(n, a, "auto_dry"), P = String(Ea(n, a, "dry_duration")), oe = [
    { action: "empty", label: N(o, "empty"), active: l, icon: /* @__PURE__ */ _.jsx(Us, {}), detail: qo(o, K) },
    { action: "wash", label: N(o, "wash"), active: r, icon: /* @__PURE__ */ _.jsx(q_, {}), detail: `${qo(o, I)} · ${qo(o, L)}` },
    { action: "dry", label: N(o, "dry"), active: c, icon: /* @__PURE__ */ _.jsx(X_, {}), detail: c ? m : qo(o, P) }
  ];
  return /* @__PURE__ */ _.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": N(o, "close"), onClick: p }),
    /* @__PURE__ */ _.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ _.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ _.jsxs("header", { children: [
        /* @__PURE__ */ _.jsxs("div", { children: [
          /* @__PURE__ */ _.jsx("h2", { id: "dock-sheet-title", children: N(o, "dockStation") }),
          /* @__PURE__ */ _.jsx("p", { children: N(o, "dockOverview") })
        ] }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "icon-button", "aria-label": N(o, "close"), onClick: p, children: /* @__PURE__ */ _.jsx(ad, {}) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ _.jsx("div", { className: "dock-actions", children: oe.map((O) => /* @__PURE__ */ _.jsxs(
          "button",
          {
            type: "button",
            className: O.active ? "active" : "",
            disabled: x,
            onClick: () => y(O.action, O.active),
            children: [
              /* @__PURE__ */ _.jsx("span", { className: "dock-action-icon", children: O.icon }),
              /* @__PURE__ */ _.jsx("strong", { children: O.active ? N(o, "stop") : O.label }),
              /* @__PURE__ */ _.jsx("small", { children: O.active ? N(o, "active") : O.detail })
            ]
          },
          O.action
        )) }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(q_, {}),
            N(o, "dockSettings")
          ] }),
          /* @__PURE__ */ _.jsx(Uo, { label: N(o, "mopWashFrequency"), setting: "mop_wash_frequency", value: B, language: o, disabled: x, onChange: (O) => v("mop_wash_frequency", O) }),
          /* @__PURE__ */ _.jsx(Uo, { label: N(o, "washingMode"), setting: "wash_mode", value: I, language: o, disabled: x, onChange: (O) => v("wash_mode", O) }),
          /* @__PURE__ */ _.jsx(Uo, { label: N(o, "washTemperature"), setting: "wash_temperature", value: L, language: o, disabled: x, onChange: (O) => v("wash_temperature", O) })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(Us, {}),
            N(o, "dustbin")
          ] }),
          /* @__PURE__ */ _.jsx(Uc, { label: N(o, "autoEmpty"), checked: J, disabled: x, onChange: (O) => v("auto_empty", O) }),
          /* @__PURE__ */ _.jsx(Uo, { label: N(o, "emptyMode"), setting: "empty_mode", value: K, language: o, disabled: x, onChange: (O) => v("empty_mode", O) })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(X_, {}),
            N(o, "drying")
          ] }),
          /* @__PURE__ */ _.jsx(Uc, { label: N(o, "autoDry"), checked: X, disabled: x, onChange: (O) => v("auto_dry", O) }),
          /* @__PURE__ */ _.jsx(Uo, { label: N(o, "dryDuration"), setting: "dry_duration", value: P, language: o, disabled: x, onChange: (O) => v("dry_duration", O) })
        ] }),
        w.length > 0 && /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group maintenance-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(O0, {}),
            N(o, "maintenance")
          ] }),
          w.map((O) => /* @__PURE__ */ _.jsxs("div", { className: `maintenance-row level-${O.level}`, children: [
            /* @__PURE__ */ _.jsx("span", { children: N(o, `consumable_${O.kind}`) }),
            /* @__PURE__ */ _.jsxs("span", { className: "maintenance-value", children: [
              /* @__PURE__ */ _.jsx("strong", { children: G2(o, O) }),
              /* @__PURE__ */ _.jsx("small", { children: K2(o, O) })
            ] }),
            O.can_reset && k && /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: x, onClick: () => k(O), children: N(o, "resetConsumable") })
          ] }, O.kind)),
          w.some((O) => !O.can_reset) && /* @__PURE__ */ _.jsx("p", { className: "maintenance-hint", children: N(o, "enableResetHint") })
        ] }),
        /* @__PURE__ */ _.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ _.jsxs("h3", { children: [
            /* @__PURE__ */ _.jsx(qh, {}),
            N(o, "safetyMaintenance")
          ] }),
          $ && /* @__PURE__ */ _.jsx(Uc, { label: N(o, "childLock"), checked: U, disabled: x, onChange: b }),
          /* @__PURE__ */ _.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ _.jsx(Wb, {}),
            /* @__PURE__ */ _.jsxs("span", { children: [
              /* @__PURE__ */ _.jsx("strong", { children: N(o, "drainWaterTank") }),
              /* @__PURE__ */ _.jsx("small", { children: N(o, "drainWarning") })
            ] })
          ] })
        ] }),
        f && /* @__PURE__ */ _.jsx("p", { className: "dock-pending", role: "status", children: f })
      ] })
    ] })
  ] });
}
function Fc({ icon: n, className: a }) {
  return n ? F.createElement("ha-icon", { icon: n, class: a, "aria-hidden": "true" }) : null;
}
const Sh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], J2 = ["vacuum_only", "vacuum_and_mop", "mop_only"], W2 = ["quiet", "balanced", "turbo", "max", "max_plus"], F2 = ["quiet", "balanced", "turbo", "max"], I2 = ["fast", "standard", "deep"], ej = ["mild", "standard", "intense", "slight", "low", "medium", "moderate", "high", "extreme"], tj = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, nj = {
  smartplan: "smartPlan",
  vacuum_then_mop: "vacuumThenMop",
  vacuum_and_mop: "vacuumAndMop",
  vacuum_only: "vacuumOnly",
  mop_only: "mopOnly"
};
function Hc({
  value: n,
  options: a,
  onChange: o,
  title: r,
  language: l
}) {
  return a.length === 0 ? null : /* @__PURE__ */ _.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ _.jsx("span", { children: r }),
    /* @__PURE__ */ _.jsx("div", { className: "option-strip", children: a.map((c) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: n === c ? "active" : "",
        onClick: () => o(c),
        children: xd(l, c)
      },
      c
    )) })
  ] });
}
function zh(n, a) {
  return a === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : a === "vacuum_only" ? n.cleaning_type === "vacuum" : a === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : a === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function aj({
  language: n,
  draft: a,
  capabilities: o,
  presets: r,
  selectedRoomNames: l,
  submitting: c,
  assistedCarry: m = !1,
  zoneCleaning: f = !1,
  mopRoutes: p,
  checks: y,
  onDraftChange: v,
  onClose: b,
  onStart: w
}) {
  const x = (f ? J2 : Sh).map((O) => r.find(({ preset: Q }) => Q.id === O)).filter((O) => !!O).filter(({ preset: O, available: Q }) => O.id !== "smartplan" || Q), $ = r.filter(
    ({ preset: O }) => !Sh.includes(O.id) && (!f || O.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(O.cleaning_type ?? "vacuum"))
  ), B = (a.cleaning_type === "vacuum" ? W2 : F2).filter((O) => o.fanSpeeds.includes(O)), L = ((a.cleaning_type === "mop" ? p?.mop : p?.vacuum_and_mop) ?? I2).filter((O) => o.mopModes.includes(O)), J = L.includes(a.mop_mode ?? "") ? a.mop_mode : L[0], K = ej.filter((O) => o.mopIntensities.includes(O)), X = Math.max(0, K.indexOf(a.mop_intensity ?? "medium")), P = tj[K[X]], oe = a.strategy === "smartplan" ? N(n, "smartPlanDescription") : a.cleaning_type === "vacuum" ? N(n, "vacuumDescription") : a.cleaning_type === "mop" ? N(n, "mopOnlyDescription") : a.cleaning_type === "vacuum_then_mop" ? N(n, "vacuumThenMopDescription") : N(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ _.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": N(n, "close"), onClick: b }),
    /* @__PURE__ */ _.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ _.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ _.jsxs("header", { children: [
        /* @__PURE__ */ _.jsxs("div", { children: [
          /* @__PURE__ */ _.jsx("h2", { id: "job-sheet-title", children: m ? N(n, "assistedCarryTitle") : N(n, "configureTitle") }),
          /* @__PURE__ */ _.jsx("p", { children: l.join(" · ") })
        ] }),
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "icon-button", "aria-label": N(n, "close"), onClick: b, children: /* @__PURE__ */ _.jsx(ad, {}) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ _.jsx(
          "div",
          {
            className: "cleaning-mode-tabs",
            role: "tablist",
            "aria-label": N(n, "cleaningType"),
            style: { "--mode-count": Math.min(x.length, 4) },
            children: x.map(({ preset: O, available: Q, reason: ie }) => /* @__PURE__ */ _.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": zh(a, O.id),
                className: zh(a, O.id) ? "active" : "",
                disabled: !Q || c,
                title: ie,
                onClick: () => v(Lo(O)),
                children: [
                  /* @__PURE__ */ _.jsx(Fc, { icon: O.icon }),
                  /* @__PURE__ */ _.jsx("span", { children: N(n, nj[O.id]) })
                ]
              },
              O.id
            ))
          }
        ),
        /* @__PURE__ */ _.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ _.jsx("p", { className: "mode-description", children: oe }),
          a.strategy !== "smartplan" && a.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            a.cleaning_type !== "mop" && /* @__PURE__ */ _.jsx(
              Hc,
              {
                language: n,
                title: N(n, "suction"),
                value: a.fan_speed,
                options: B,
                onChange: (O) => v({ ...a, preset_id: "custom_draft", fan_speed: O })
              }
            ),
            a.cleaning_type !== "vacuum" && K.length > 0 && /* @__PURE__ */ _.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ _.jsx("span", { children: N(n, "waterFlow") }),
              /* @__PURE__ */ _.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ _.jsx("strong", { children: xd(n, K[X]) }),
                P !== void 0 && /* @__PURE__ */ _.jsx("output", { children: P })
              ] }),
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: K.length - 1,
                  step: "1",
                  value: X,
                  "aria-label": N(n, "waterFlow"),
                  onChange: (O) => v({
                    ...a,
                    preset_id: "custom_draft",
                    mop_intensity: K[Number(O.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ _.jsx(
              Hc,
              {
                language: n,
                title: N(n, "cleaningCount"),
                value: String(a.cleaning_count),
                options: ["1", "2"],
                onChange: (O) => v({
                  ...a,
                  preset_id: "custom_draft",
                  cleaning_count: Number(O)
                })
              }
            ),
            /* @__PURE__ */ _.jsx(
              Hc,
              {
                language: n,
                title: N(n, "mopRoute"),
                value: J,
                options: L,
                onChange: (O) => v({ ...a, preset_id: "custom_draft", mop_mode: O })
              }
            )
          ] })
        ] }),
        !m && $.length > 0 && /* @__PURE__ */ _.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ _.jsx("span", { children: N(n, "savedProfiles") }),
          /* @__PURE__ */ _.jsx("div", { children: $.map(({ preset: O, available: Q, reason: ie }) => /* @__PURE__ */ _.jsxs(
            "button",
            {
              type: "button",
              disabled: !Q || c,
              title: ie,
              className: a.preset_id === O.id ? "active" : "",
              onClick: () => v(Lo(O)),
              children: [
                /* @__PURE__ */ _.jsx(Fc, { icon: O.icon }),
                " ",
                O.name
              ]
            },
            O.id
          )) })
        ] })
      ] }),
      y && (y.blocking.length > 0 || y.warnings.length > 0) && /* @__PURE__ */ _.jsxs("div", { className: `preflight ${y.blocking.length > 0 ? "blocking" : "warning"}`, role: "alert", children: [
        /* @__PURE__ */ _.jsx("strong", { children: N(n, y.blocking.length > 0 ? "preflightBlocked" : "preflightWarnings") }),
        /* @__PURE__ */ _.jsx("ul", { children: [...y.blocking, ...y.warnings].map((O) => /* @__PURE__ */ _.jsx("li", { children: L2(n, O) }, O.code)) })
      ] }),
      /* @__PURE__ */ _.jsxs("footer", { children: [
        /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: c, onClick: b, children: N(n, "cancel") }),
        /* @__PURE__ */ _.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            disabled: c || (y?.blocking.length ?? 0) > 0,
            onClick: () => w(J && a.strategy === "custom" && ["mop", "vacuum_and_mop"].includes(a.cleaning_type) ? { ...a, mop_mode: J } : a),
            children: c ? m ? N(n, "preparingUpstairs") : N(n, "starting") : m ? N(n, "prepareUpstairs") : (y?.warnings.length ?? 0) > 0 ? N(n, "startAnyway") : N(n, "start")
          }
        )
      ] })
    ] })
  ] });
}
var Na = function(n, a) {
  return Number(n.toFixed(a));
}, ij = function(n, a) {
  return a;
}, Re = function(n, a, o) {
  o && typeof o == "function" && o(n, a);
}, oj = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, rj = function(n) {
  return n;
}, sj = function(n) {
  return n * n;
}, lj = function(n) {
  return n * (2 - n);
}, uj = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, cj = function(n) {
  return n * n * n;
}, dj = function(n) {
  return --n * n * n + 1;
}, mj = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, fj = function(n) {
  return n * n * n * n;
}, pj = function(n) {
  return 1 - --n * n * n * n;
}, _j = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, hj = function(n) {
  return n * n * n * n * n;
}, yj = function(n) {
  return 1 + --n * n * n * n * n;
}, vj = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Xy = {
  easeOut: oj,
  linear: rj,
  easeInQuad: sj,
  easeOutQuad: lj,
  easeInOutQuad: uj,
  easeInCubic: cj,
  easeOutCubic: dj,
  easeInOutCubic: mj,
  easeInQuart: fj,
  easeOutQuart: pj,
  easeInOutQuart: _j,
  easeInQuint: hj,
  easeOutQuint: yj,
  easeInOutQuint: vj
}, Ly = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, rn = function(n) {
  n.mounted && (Ly(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Vy(n, a, o, r) {
  if (n.mounted) {
    var l = (/* @__PURE__ */ new Date()).getTime(), c = 1;
    rn(n), n.animation = function() {
      if (!n.mounted)
        return Ly(n.animation);
      var m = (/* @__PURE__ */ new Date()).getTime() - l, f = m / o, p = Xy[a], y = p(f);
      m >= o ? (r(c), n.animation = null) : n.animation && (r(y), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function gj(n) {
  var a = n.scale, o = n.positionX, r = n.positionY;
  return !(Number.isNaN(a) || Number.isNaN(o) || Number.isNaN(r));
}
function la(n, a, o, r) {
  var l = gj(a);
  if (!(!n.mounted || !l)) {
    var c = n.setState, m = n.state, f = m.scale, p = m.positionX, y = m.positionY, v = a.scale - f, b = a.positionX - p, w = a.positionY - y;
    o === 0 ? c(a.scale, a.positionX, a.positionY) : Vy(n, r, o, function(k) {
      k !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var x = f + v * k, $ = p + b * k, U = y + w * k;
      c(x, $, U);
    });
  }
}
function bj(n, a, o) {
  var r = n.offsetWidth, l = n.offsetHeight, c = a.offsetWidth, m = a.offsetHeight, f = c * o, p = m * o, y = r - f, v = l - p;
  return {
    wrapperWidth: r,
    wrapperHeight: l,
    newContentWidth: f,
    newDiffWidth: y,
    newContentHeight: p,
    newDiffHeight: v
  };
}
var kj = function(n, a, o, r, l, c, m) {
  var f = n > a ? o * (m ? 0.5 : 1) : 0, p = r > l ? c * (m ? 0.5 : 1) : 0, y = n - a - f, v = f, b = r - l - p, w = p;
  return {
    minPositionX: y,
    maxPositionX: v,
    minPositionY: b,
    maxPositionY: w,
    scaleWidthFactor: f,
    scaleHeightFactor: p
  };
}, Td = function(n, a) {
  var o = n.wrapperComponent, r = n.contentComponent, l = n.setup, c = l.centerZoomedOut, m = l.disablePadding;
  if (!o || !r)
    throw new Error("Components are not mounted");
  var f = bj(o, r, a), p = f.wrapperWidth, y = f.wrapperHeight, v = f.newContentWidth, b = f.newContentHeight, w = f.newDiffWidth, k = f.newDiffHeight, x = kj(p, v, w, y, b, k, !!c), $ = p >= v && y >= b;
  m && $ && !c && (x.minPositionX = 0, x.maxPositionX = 0, x.minPositionY = 0, x.maxPositionY = 0);
  var U = n.setup, B = U.minPositionX, I = U.maxPositionX, L = U.minPositionY, J = U.maxPositionY;
  return B != null && (x.minPositionX = p * (1 - a) + B * a), I != null && (x.maxPositionX = I * a), L != null && (x.minPositionY = y * (1 - a) + L * a), J != null && (x.maxPositionY = J * a), x;
}, Ko = function(n, a, o, r) {
  return r ? n < a ? Na(a, 2) : n > o ? Na(o, 2) : Na(n, 2) : Na(n, 2);
}, Zi = function(n, a) {
  var o = Td(n, a);
  return n.bounds = o, o;
};
function tr(n, a, o, r, l, c, m) {
  var f = o.minPositionX, p = o.minPositionY, y = o.maxPositionX, v = o.maxPositionY, b = 0, w = 0;
  m && (b = l, w = c);
  var k = Ko(n, f - b, y + b, r), x = Ko(a, p - w, v + w, r);
  return { x: k, y: x };
}
function il(n, a, o, r, l, c) {
  var m = n.state, f = m.scale, p = m.positionX, y = m.positionY, v = r - f;
  if (typeof a != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: p, y };
  var b = p - a * v, w = y - o * v, k = tr(b, w, l, c, 0, 0, null);
  return k;
}
var xh = 1e-7;
function nr(n, a, o, r, l) {
  var c = l ? r : 0, m = Math.max(a - c, xh), f = o + c;
  return !Number.isNaN(o) && n >= f ? f : !Number.isNaN(a) && n <= m ? m : Math.max(n, xh);
}
var jh = function(n, a) {
  var o = n.setup.panning.excluded, r = n.isInitialized, l = n.wrapperComponent, c = a.target, m = "shadowRoot" in c && "composedPath" in a, f = m ? a.composedPath().some(function(v) {
    return v instanceof Element ? l?.contains(v) : !1;
  }) : l?.contains(c), p = r && c && f;
  if (!p)
    return !1;
  var y = ar(c, o);
  return !(y || c.getAttribute("draggable") === "true" || c.getAttribute("contenteditable") === "true" || c.isContentEditable);
}, Ah = function(n) {
  var a = n.isInitialized, o = n.isPanning, r = n.setup, l = r.panning.disabled, c = a && o && !l;
  return !!c;
}, wj = function(n, a) {
  var o = n.state, r = o.positionX, l = o.positionY;
  n.isPanning = !0;
  var c = a.clientX, m = a.clientY;
  n.startCoords = { x: c - r, y: m - l };
}, Sj = function(n, a) {
  var o = a.touches, r = n.state, l = r.positionX, c = r.positionY;
  n.isPanning = !0;
  var m = o.length === 1;
  if (m) {
    var f = o[0].clientX, p = o[0].clientY;
    n.startCoords = { x: f - l, y: p - c };
  }
};
function zj(n) {
  var a = n.state, o = a.positionX, r = a.positionY, l = a.scale, c = n.setup, m = c.disabled, f = c.limitToBounds, p = c.centerZoomedOut, y = n.wrapperComponent;
  if (!(m || !y || !n.bounds)) {
    var v = n.bounds, b = v.maxPositionX, w = v.minPositionX, k = v.maxPositionY, x = v.minPositionY, $ = o > b || o < w, U = r > k || r < x, B = o > b ? y.offsetWidth : n.setup.minPositionX || 0, I = r > k ? y.offsetHeight : n.setup.minPositionY || 0, L = il(n, B, I, l, n.bounds, f || p), J = L.x, K = L.y;
    return {
      scale: l,
      positionX: $ ? J : o,
      positionY: U ? K : r
    };
  }
}
function Gy(n, a, o, r, l) {
  var c = n.setup.limitToBounds, m = n.wrapperComponent, f = n.bounds, p = n.state, y = p.scale, v = p.positionX, b = p.positionY;
  if (!(m === null || f === null || a === v && o === b)) {
    var w = tr(a, o, f, c, r, l, m), k = w.x, x = w.y;
    n.setState(y, k, x);
  }
}
var xj = function(n, a, o) {
  var r = n.startCoords, l = n.state, c = n.setup.panning, m = c.lockAxisX, f = c.lockAxisY, p = l.positionX, y = l.positionY;
  if (!r)
    return { x: p, y };
  var v = a - r.x, b = o - r.y, w = m ? p : v, k = f ? y : b;
  return { x: w, y: k };
}, oa = function(n, a, o) {
  var r = n.setup, l = n.state, c = r.minScale, m = r.disablePadding, f = r.centerZoomedOut, p = o ?? l.scale;
  return a > 0 && p >= c && !m && !f ? a : 0;
}, ia;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(ia || (ia = {}));
var jj = function(n) {
  var a = n.mounted, o = n.wrapperComponent, r = n.contentComponent, l = n.setup, c = l.disabled, m = l.velocityAnimation, f = l.limitToBounds, p = n.state.scale, y = m.disabled;
  if (y || c || !a || !o || !r)
    return !1;
  if (!f)
    return !0;
  var v = o.offsetWidth < r.offsetWidth * p || o.offsetHeight < r.offsetHeight * p;
  return v;
}, Aj = function(n) {
  var a = n.mounted, o = n.velocity, r = n.bounds, l = n.setup, c = l.disabled, m = l.velocityAnimation, f = m.disabled, p = !f && !c && a;
  return !(!p || !o || !r);
};
function Tj(n, a) {
  var o = n.setup.velocityAnimation, r = o.animationTime, l = o.maxAnimationTime, c = o.inertia;
  return Math.min(r * Math.max(1, Math.abs(a / c)), l);
}
function Th(n, a, o, r, l, c, m, f, p, y) {
  if (l) {
    if (a > m && o > m) {
      var v = m + (n - m) * y;
      return v > p ? p : v < m ? m : v;
    }
    if (a < c && o < c) {
      var v = c + (n - c) * y;
      return v < f ? f : v > c ? c : v;
    }
  }
  return r ? a : Ko(n, c, m, l);
}
function Ej(n) {
  var a = 1, o = n.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? a : Math.min(a, o);
}
var Bc = function(n, a, o) {
  var r = 0, l = n * o;
  return Number.isNaN(l) ? r : n < 0 ? Math.max(l, -a) : Math.min(l, a);
};
function Cj(n, a, o) {
  var r, l, c = jj(n);
  if (c) {
    var m = n.lastMousePosition, f = n.velocityTime, p = n.setup, y = n.wrapperComponent, v = p.velocityAnimation, b = v.maxStrengthMouse, w = v.maxStrengthTouch, k = v.sensitivityTouch, x = v.sensitivityMouse, $ = Date.now();
    if (m && f && y) {
      var U = Ej(y), B = (r = {}, r[ia.TOUCH] = k, r[ia.MOUSE] = x, r)[o], I = (l = {}, l[ia.TOUCH] = w, l[ia.MOUSE] = b, l)[o], L = a.x - m.x, J = a.y - m.y, K = Bc(L / U, I, B), X = Bc(J / U, I, B), P = $ - f, oe = L * L + J * J, O = Bc(Math.sqrt(oe) / P, I, B);
      n.velocity = { velocityX: K, velocityY: X, total: O };
    }
    n.lastMousePosition = a, n.velocityTime = $;
  }
}
function Mj(n) {
  var a = n.velocity, o = n.bounds, r = n.setup, l = n.wrapperComponent, c = Aj(n);
  if (!(!c || !a || !o || !l)) {
    var m = a.velocityX, f = a.velocityY, p = a.total, y = o.maxPositionX, v = o.minPositionX, b = o.maxPositionY, w = o.minPositionY, k = r.limitToBounds, x = r.autoAlignment, $ = r.zoomAnimation, U = r.panning, B = U.lockAxisY, I = U.lockAxisX, L = $.animationType, J = x.sizeX, K = x.sizeY, X = x.velocityAlignmentTime, P = X, oe = Tj(n, p), O = Math.max(oe, P), Q = oa(n, J), ie = oa(n, K), ce = Q * l.offsetWidth / 100, Oe = ie * l.offsetHeight / 100, te = y + ce, ae = v - ce, T = b + Oe, V = w - Oe, ee = n.state, fe = (/* @__PURE__ */ new Date()).getTime();
    Vy(n, L, O, function(ve) {
      var z = n.state, Z = z.scale, W = z.positionX, ne = z.positionY, he = (/* @__PURE__ */ new Date()).getTime() - fe, pe = he / P, ke = Xy[x.animationType], Be = 1 - ke(Math.min(1, pe)), Ye = 1 - ve, $t = W + m * Ye, en = ne + f * Ye, Nn = Th($t, ee.positionX, W, I, k, v, y, ae, te, Be), sn = Th(en, ee.positionY, ne, B, k, w, b, V, T, Be);
      if (W !== $t || ne !== en) {
        n.setState(Z, Nn, sn);
        var bt = n.props.onPanning;
        bt && bt(Me(n), {});
      }
    });
  }
}
function Eh(n, a) {
  var o = n.state, r = o.scale, l = o.positionX, c = o.positionY;
  n.panStartPosition = { x: l, y: c }, rn(n), Zi(n, r), window.TouchEvent !== void 0 && a instanceof TouchEvent ? Sj(n, a) : wj(n, a);
}
function Py(n, a) {
  var o = n.state.scale, r = n.setup, l = r.minScale, c = r.autoAlignment, m = c.disabled, f = c.sizeX, p = c.sizeY, y = c.animationTime, v = c.animationType, b = m || o < l || !f && !p;
  if (!b) {
    var w = zj(n);
    w && la(n, w, y, v);
  }
}
function Ch(n, a, o, r) {
  var l = n.startCoords, c = n.setup, m = c.autoAlignment, f = m.sizeX, p = m.sizeY;
  if (l) {
    var y = xj(n, a, o), v = y.x, b = y.y, w = oa(n, f), k = oa(n, p);
    Cj(n, { x: v, y: b }, r), Gy(n, v, b, w, k);
  }
}
function Oj(n, a) {
  if (n.isPanning) {
    var o = n.velocity, r = n.wrapperComponent, l = n.contentComponent;
    n.isPanning = !1;
    var c = n.state, m = c.positionX, f = c.positionY, p = c.scale, y = n.panStartPosition;
    if (n.panStartPosition = null, y) {
      var v = m - y.x, b = f - y.y;
      if (v * v + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var w = r?.offsetWidth || 0, k = r?.offsetHeight || 0, x = (l?.offsetWidth || 0) * p, $ = (l?.offsetHeight || 0) * p, U = !n.setup.limitToBounds || w < x || k < $, B = !a && o && o.total > 0.1 && U;
    B ? Mj(n) : Py(n);
  }
}
function Ed(n, a, o, r) {
  var l = n.setup, c = l.minScale, m = l.maxScale, f = l.limitToBounds, p = nr(Na(a, 2), c, m, 0, !1), y = Zi(n, p), v = il(n, o, r, p, y, f), b = v.x, w = v.y;
  return { scale: p, positionX: b, positionY: w };
}
function Cd(n, a, o) {
  var r = n.state.scale, l = n.wrapperComponent, c = n.setup, m = c.minScale, f = c.maxScale, p = c.limitToBounds, y = c.zoomAnimation, v = y.disabled, b = y.animationTime, w = y.animationType, k = r >= m && r <= f, x = v || k;
  if ((r >= 1 || p) && Py(n), !(x || !l || !n.mounted)) {
    var $ = a || l.offsetWidth / 2, U = o || l.offsetHeight / 2, B = r < m ? m : f, I = Ed(n, B, $, U);
    I && la(n, I, b, w);
  }
}
var Ft = function() {
  return Ft = Object.assign || function(a) {
    for (var o, r = 1, l = arguments.length; r < l; r++) {
      o = arguments[r];
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c]);
    }
    return a;
  }, Ft.apply(this, arguments);
};
function Mh(n, a, o) {
  for (var r = 0, l = a.length, c; r < l; r++)
    (c || !(r in a)) && (c || (c = Array.prototype.slice.call(a, 0, r)), c[r] = a[r]);
  return n.concat(c || Array.prototype.slice.call(a));
}
var Yc = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, Ma = {
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
}, Ic = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Ky = function(n) {
  var a, o, r, l, c, m, f, p, y, v = Math.max((a = n.minScale) !== null && a !== void 0 ? a : Ma.minScale, 1e-7), b = (o = n.maxScale) !== null && o !== void 0 ? o : Ma.maxScale, w = (r = n.initialScale) !== null && r !== void 0 ? r : Yc.scale, k = Math.min(Math.max(w, v), b), x = Ko((l = n.initialPositionX) !== null && l !== void 0 ? l : Yc.positionX, (c = n.minPositionX) !== null && c !== void 0 ? c : -1 / 0, (m = n.maxPositionX) !== null && m !== void 0 ? m : 1 / 0, n.minPositionX != null || n.maxPositionX != null), $ = Ko((f = n.initialPositionY) !== null && f !== void 0 ? f : Yc.positionY, (p = n.minPositionY) !== null && p !== void 0 ? p : -1 / 0, (y = n.maxPositionY) !== null && y !== void 0 ? y : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: k,
    scale: k,
    positionX: x,
    positionY: $
  };
}, Oh = function(n) {
  var a = Ft({}, Ma);
  return Object.keys(n).forEach(function(o) {
    var r = o, l = typeof n[r] < "u", c = typeof Ma[r] < "u";
    if (c && l) {
      var m = Object.prototype.toString.call(Ma[r]), f = m === "[object Object]", p = m === "[object Array]";
      f ? a[r] = Ft(Ft({}, Ma[r]), n[r]) : p ? a[r] = Mh(Mh([], Ma[r], !0), n[r]) : a[r] = n[r];
    }
  }), a.minScale <= 0 && (a.minScale = 1e-7), a;
}, Qy = function(n, a, o) {
  var r = n.state.scale, l = n.wrapperComponent, c = n.setup, m = c.maxScale, f = c.minScale, p = c.zoomAnimation, y = c.smooth, v = p.size;
  if (!l)
    throw new Error("Wrapper is not mounted");
  var b = y ? r * Math.exp(a * o) : r + a * o, w = nr(Na(b, 3), f, m, v, !1);
  return w;
};
function Jy(n, a, o, r, l) {
  var c, m, f = n.wrapperComponent, p = n.state, y = p.scale, v = p.positionX, b = p.positionY, w = n.setup.zoomAnimation;
  if (!f)
    return console.error("No WrapperComponent found");
  var k = w.disabled ? 0 : r, x = f.offsetWidth, $ = f.offsetHeight, U = (x / 2 - v) / y, B = ($ / 2 - b) / y, I = Qy(n, a, o), L = Ed(n, I, U, B);
  if (!L)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var J = n.props, K = J.onZoomStart, X = J.onZoom, P = J.onZoomStop, oe = new MouseEvent("mousemove", { bubbles: !0 }), O = Me(n);
  Re(O, oe, K), Re(O, oe, X), la(n, L, k, l);
  var Q = (m = (c = f.ownerDocument) === null || c === void 0 ? void 0 : c.defaultView) !== null && m !== void 0 ? m : typeof window < "u" ? window : null;
  Q && Q.setTimeout(function() {
    n.mounted && Re(Me(n), oe, P);
  }, k);
}
function Wy(n, a, o, r) {
  var l, c, m = n.setup, f = n.wrapperComponent, p = n.contentComponent, y = m.limitToBounds, v = m.centerOnInit, b = Ky(n.props), w = n.state, k = w.scale, x = w.positionX, $ = w.positionY;
  if (f) {
    var U = b.positionX, B = b.positionY;
    if (v && p) {
      var I = Md(b.scale, f, p);
      U = I.positionX, B = I.positionY;
    }
    var L = Td(n, b.scale), J = tr(U, B, L, y, 0, 0, f), K = {
      scale: b.scale,
      positionX: J.x,
      positionY: J.y
    };
    if (!(k === b.scale && x === b.positionX && $ === b.positionY)) {
      r?.();
      var X = n.props, P = X.onZoomStart, oe = X.onZoom, O = X.onZoomStop, Q = new MouseEvent("mousemove", { bubbles: !0 }), ie = Me(n);
      Re(ie, Q, P), Re(ie, Q, oe), la(n, K, a, o);
      var ce = (c = (l = f.ownerDocument) === null || l === void 0 ? void 0 : l.defaultView) !== null && c !== void 0 ? c : typeof window < "u" ? window : null;
      ce && ce.setTimeout(function() {
        n.mounted && Re(Me(n), Q, O);
      }, a);
    }
  }
}
function Nj(n, a, o, r) {
  var l = n.getBoundingClientRect(), c = a.getBoundingClientRect(), m = o.getBoundingClientRect(), f = c.x * r.scale, p = c.y * r.scale;
  return {
    x: (l.x - m.x + f) / r.scale,
    y: (l.y - m.y + p) / r.scale
  };
}
function Dj(n, a, o, r, l) {
  r === void 0 && (r = 0), l === void 0 && (l = 0);
  var c = n.wrapperComponent, m = n.contentComponent, f = n.state, p = n.setup, y = p.limitToBounds, v = p.minScale, b = p.maxScale;
  if (!c || !m)
    return f;
  var w = c.getBoundingClientRect(), k = a.getBoundingClientRect(), x = Nj(a, c, m, f), $ = x.x, U = x.y, B = k.width / f.scale, I = k.height / f.scale, L = c.offsetWidth / B, J = c.offsetHeight / I, K = nr(o || Math.min(L, J), v, b, 0, !1), X = (w.width - B * K) / 2, P = (w.height - I * K) / 2, oe = (w.left - $) * K + X + r, O = (w.top - U) * K + P + l, Q = Td(n, K), ie = tr(oe, O, Q, y, 0, 0, c), ce = ie.x, Oe = ie.y;
  return { positionX: ce, positionY: Oe, scale: K };
}
var Rj = function(n) {
  return function(a, o, r) {
    a === void 0 && (a = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Jy(n, 1, a, o, r);
  };
}, Zj = function(n) {
  return function(a, o, r) {
    a === void 0 && (a = 0.5), o === void 0 && (o = 300), r === void 0 && (r = "easeOut"), Jy(n, -1, a, o, r);
  };
}, Uj = function(n) {
  return function(a, o, r, l, c) {
    l === void 0 && (l = 300), c === void 0 && (c = "easeOut");
    var m = n.state, f = m.positionX, p = m.positionY, y = m.scale, v = n.wrapperComponent, b = n.contentComponent, w = n.setup.disabled;
    if (!(w || !v || !b)) {
      var k = {
        positionX: Number.isNaN(a) ? f : a,
        positionY: Number.isNaN(o) ? p : o,
        scale: Number.isNaN(r) ? y : r
      };
      la(n, k, l, c);
    }
  };
}, Hj = function(n) {
  return function(a, o) {
    a === void 0 && (a = 200), o === void 0 && (o = "easeOut"), Wy(n, a, o);
  };
}, Bj = function(n) {
  return function(a, o, r) {
    o === void 0 && (o = 200), r === void 0 && (r = "easeOut");
    var l = n.state, c = n.wrapperComponent, m = n.contentComponent;
    if (c && m) {
      var f = Md(a || l.scale, c, m);
      la(n, f, o, r);
    }
  };
}, Yj = function(n) {
  return function(a, o, r, l, c, m) {
    r === void 0 && (r = 600), l === void 0 && (l = "easeOut"), c === void 0 && (c = 0), m === void 0 && (m = 0), rn(n);
    var f = n.wrapperComponent, p = typeof a == "string" ? document.getElementById(a) : a;
    if (f && p && f.contains(p)) {
      var y = Dj(n, p, o, c, m);
      la(n, y, r, l);
    }
  };
}, Js = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: Rj(n),
    zoomOut: Zj(n),
    setTransform: Uj(n),
    resetTransform: Hj(n),
    centerView: Bj(n),
    zoomToElement: Yj(n)
  };
}, $j = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, Me = function(n) {
  var a = {};
  return Object.assign(a, $j(n)), Object.assign(a, Js(n)), a;
}, $c = !1;
function qc() {
  try {
    var n = {
      get passive() {
        return $c = !0, !1;
      }
    };
    return n;
  } catch {
    return $c = !1, $c;
  }
}
var Ns = ".".concat(Ic.wrapperClass), ar = function(n, a) {
  return a.some(function(o) {
    return n.matches("".concat(Ns, " ").concat(o, ", ").concat(Ns, " .").concat(o, ", ").concat(Ns, " ").concat(o, " *, ").concat(Ns, " .").concat(o, " *"));
  });
}, Qo = function(n) {
  n && clearTimeout(n);
}, qj = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Fy = function(n, a, o) {
  var r = qj(o);
  return "translate(".concat(n, "px, ").concat(a, "px) scale(").concat(r, ")");
}, Md = function(n, a, o) {
  var r = o.offsetWidth * n, l = o.offsetHeight * n, c = (a.offsetWidth - r) / 2, m = (a.offsetHeight - l) / 2;
  return {
    scale: n,
    positionX: c,
    positionY: m
  };
};
function Xj(n, a) {
  n != null && (typeof n == "function" ? n(a) : n.current = a);
}
function Lj(n) {
  return function(a) {
    n.forEach(function(o) {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var Iy = function(n, a) {
  var o = n.setup.wheel, r = o.disabled, l = o.wheelDisabled, c = o.touchPadDisabled, m = o.excluded, f = n.isInitialized, p = n.isPanning, y = a.target, v = f && !p && !r && y;
  if (!v || l && !a.ctrlKey || c && a.ctrlKey)
    return !1;
  var b = ar(y, m);
  if (b)
    return !1;
  var w = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!w;
}, Vj = function(n, a) {
  var o = n.setup, r = o.disabled, l = o.trackPadPanning, c = l.activationKeys, m = l.excluded;
  if (!n.wrapperComponent || !n.contentComponent || r || l.disabled || a.ctrlKey)
    return !1;
  var f = Iy(n, a);
  if (f)
    return !1;
  var p = a.target, y = ar(p, m);
  if (y)
    return !1;
  var v = n.isPressingKeys(c);
  return !!v;
}, Gj = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Pj(n, a) {
  var o = Gj(n), r = ij(a, o);
  return r;
}
function ev(n, a, o) {
  var r = a.getBoundingClientRect(), l = 0, c = 0;
  if ("clientX" in n)
    l = (n.clientX - r.left) / o, c = (n.clientY - r.top) / o;
  else {
    var m = n.touches[0];
    l = (m.clientX - r.left) / o, c = (m.clientY - r.top) / o;
  }
  return (Number.isNaN(l) || Number.isNaN(c)) && console.error("No mouse or touch offset found"), {
    x: l,
    y: c
  };
}
var Kj = function(n, a, o, r, l) {
  var c = n.state.scale, m = n.wrapperComponent, f = n.setup, p = f.maxScale, y = f.minScale, v = f.zoomAnimation, b = f.disablePadding, w = v.size, k = v.disabled;
  if (!m)
    throw new Error("Wrapper is not mounted");
  var x = c + a * o, $ = r ? !1 : !k, U = nr(x, y, p, w, $ && !b);
  return U;
}, tv = function(n, a) {
  var o = n.previousWheelEvent, r = n.state.scale, l = n.setup, c = l.maxScale, m = l.minScale;
  return o ? r < c || r > m || Math.sign(o.deltaY) !== Math.sign(a.deltaY) || o.deltaY > 0 && o.deltaY < a.deltaY || o.deltaY < 0 && o.deltaY > a.deltaY || Math.sign(o.deltaY) !== Math.sign(a.deltaY) : !1;
}, Qj = function(n, a) {
  var o = n.setup.pinch, r = o.disabled, l = o.excluded, c = n.isInitialized, m = a.target, f = c && !r && m;
  if (!f)
    return !1;
  var p = ar(m, l);
  return !p;
}, Jj = function(n) {
  var a = n.setup.pinch.disabled, o = n.isInitialized, r = n.pinchStartDistance, l = o && !a && r !== null;
  return !!l;
}, Wj = function(n, a, o) {
  var r = o.getBoundingClientRect(), l = n.touches, c = l[0].clientX - r.left, m = l[0].clientY - r.top, f = l[1].clientX - r.left, p = l[1].clientY - r.top;
  return {
    x: (c + f) / 2 / a,
    y: (m + p) / 2 / a
  };
}, nv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Fj = 5, Ij = function(n, a) {
  var o = n.pinchStartScale, r = n.pinchStartDistance, l = n.setup, c = l.maxScale, m = l.minScale, f = l.zoomAnimation, p = l.disablePadding, y = l.pinch, v = f.size, b = f.disabled, w = y.step;
  if (!o || r === null)
    throw new Error("Pinch touches distance was not provided");
  if (a < 0)
    return n.state.scale;
  var k = a / r, x = k * o, $ = (x - o) * (w / Fj), U = o + $, B = U === 1 / 0 ? 0 : Na(U, 10);
  return nr(B, m, c, v, !b && !p);
}, av = 160, iv = 100, eA = function(n, a) {
  var o = n.props, r = o.onWheelStart, l = o.onZoomStart;
  n.wheelStopEventTimer || (rn(n), Re(Me(n), a, r), Re(Me(n), a, l));
}, tA = function(n, a) {
  var o = n.props, r = o.onWheel, l = o.onZoom, c = n.contentComponent, m = n.setup, f = n.state, p = f.scale, y = m.limitToBounds, v = m.centerZoomedOut, b = m.zoomAnimation, w = m.wheel, k = m.disablePadding, x = m.smooth, $ = b.size, U = b.disabled, B = w.step;
  if (!c)
    throw new Error("Component not mounted");
  a.preventDefault(), a.stopPropagation();
  var I = Pj(a, null), L = x ? B * Math.abs(a.deltaY) : B, J = Kj(n, I, L, !a.ctrlKey);
  if (p !== J) {
    var K = Zi(n, J), X = ev(a, c, p), P = U || $ === 0 || v || k, oe = y && P, O = il(n, X.x, X.y, J, K, oe), Q = O.x, ie = O.y;
    n.previousWheelEvent = a, n.setState(J, Q, ie), Re(Me(n), a, r), Re(Me(n), a, l);
  }
}, nA = function(n, a) {
  var o = n.props, r = o.onWheelStop, l = o.onZoomStop;
  Qo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Cd(n, a.x, a.y), n.wheelAnimationTimer = null);
  }, iv);
  var c = tv(n, a);
  c && (Qo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Re(Me(n), a, r), Re(Me(n), a, l));
  }, av));
}, aA = function(n, a) {
  var o = n.props, r = o.onWheelStart, l = o.onPanningStart;
  n.wheelStopEventTimer || (rn(n), Re(Me(n), a, r), Re(Me(n), a, l));
}, iA = function(n, a) {
  var o = n.props, r = o.onWheelStop, l = o.onPanningStop;
  Qo(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Cd(n, a.x, a.y), n.wheelAnimationTimer = null);
  }, iv);
  var c = tv(n, a);
  c && (Qo(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Re(Me(n), a, r), Re(Me(n), a, l));
  }, av));
}, ov = function(n) {
  for (var a = 0, o = 0, r = 0; r < 2; r += 1)
    a += n.touches[r].clientX, o += n.touches[r].clientY;
  var l = a / 2, c = o / 2;
  return { x: l, y: c };
}, oA = function(n, a) {
  var o = nv(a);
  n.pinchStartDistance = o, n.lastDistance = o, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = ov(a), rn(n);
}, rA = function(n, a) {
  var o = n.contentComponent, r = n.pinchStartDistance, l = n.wrapperComponent, c = n.pinchPreviousCenter, m = n.state.scale, f = n.setup, p = f.limitToBounds, y = f.centerZoomedOut, v = f.zoomAnimation, b = f.autoAlignment, w = f.pinch, k = f.panning, x = v.disabled, $ = v.size, U = w.allowPanning;
  if (!(r === null || !o)) {
    var B = Wj(a, m, o);
    if (!(!Number.isFinite(B.x) || !Number.isFinite(B.y))) {
      var I = nv(a), L = Ij(n, I), J = ov(a), K = m / L, X = (J.x - (c?.x || 0)) * K, P = (J.y - (c?.y || 0)) * K;
      if (!(L === m && X === 0 && P === 0)) {
        n.pinchPreviousCenter = J;
        var oe = Zi(n, L), O = x || $ === 0 || y, Q = p && O, ie = il(n, B.x, B.y, L, oe, Q), ce = ie.x, Oe = ie.y;
        if (n.pinchMidpoint = B, n.lastDistance = I, k.disabled || !U)
          n.setState(L, ce, Oe);
        else {
          var te = b.sizeX, ae = b.sizeY, T = oa(n, te, L), V = oa(n, ae, L), ee = ce + X, fe = Oe + P, ve = tr(ee, fe, oe, p, T, V, l), z = ve.x, Z = ve.y;
          n.setState(L, z, Z);
        }
      }
    }
  }
}, sA = function(n) {
  var a = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Cd(n, a?.x, a?.y);
}, rv = function(n, a) {
  var o = n.props.onZoomStop, r = n.setup.doubleClick.animationTime;
  Qo(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Re(Me(n), a, o);
  }, r);
}, lA = function(n, a) {
  var o = n.props, r = o.onZoomStart, l = o.onZoom, c = n.setup.doubleClick, m = c.animationTime, f = c.animationType;
  Re(Me(n), a, r), Wy(n, m, f, function() {
    return Re(Me(n), a, l);
  }), rv(n, a);
};
function uA(n, a) {
  return n === "toggle" ? a === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function cA(n, a) {
  var o = n.setup, r = n.doubleClickStopEventTimer, l = n.state, c = n.contentComponent, m = l.scale, f = n.props, p = f.onZoomStart, y = f.onZoom, v = o.doubleClick, b = v.disabled, w = v.mode, k = v.step, x = v.animationTime, $ = v.animationType;
  if (!b && !r) {
    if (w === "reset")
      return lA(n, a);
    if (!c)
      return console.error("No ContentComponent found");
    var U = uA(w, n.state.scale), B = Qy(n, U, k);
    if (m !== B) {
      Re(Me(n), a, p);
      var I = ev(a, c, m), L = Ed(n, B, I.x, I.y);
      if (!L)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Re(Me(n), a, y), la(n, L, x, $), rv(n, a);
    }
  }
}
var dA = function(n, a) {
  var o = n.isInitialized, r = n.setup, l = n.wrapperComponent, c = r.doubleClick, m = c.disabled, f = c.excluded, p = a.target, y = l?.contains(p), v = o && p && y && !m;
  if (!v)
    return !1;
  var b = ar(p, f);
  return !b;
}, mA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(a) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(r) {
        o.props = r, o.wrapperComponent && o.contentComponent && Zi(o, o.state.scale), o.setup = Oh(r);
      }, this.initializeWindowEvents = function() {
        var r, l, c, m, f = qc(), p = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, y = p?.defaultView;
        (l = o.wrapperComponent) === null || l === void 0 || l.addEventListener("wheel", o.onWheelPanning, f), (c = o.wrapperComponent) === null || c === void 0 || c.addEventListener("keyup", o.setKeyUnPressed, f), (m = o.wrapperComponent) === null || m === void 0 || m.addEventListener("keydown", o.setKeyPressed, f), y?.addEventListener("mousedown", o.onPanningStart, f), y?.addEventListener("mousemove", o.onPanning, f), y?.addEventListener("mouseup", o.onPanningStop, f), p?.addEventListener("mouseleave", o.clearPanning, f), y?.addEventListener("keyup", o.setKeyUnPressed, f), y?.addEventListener("keydown", o.setKeyPressed, f), y?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var r, l, c, m, f, p = qc(), y = (r = o.wrapperComponent) === null || r === void 0 ? void 0 : r.ownerDocument, v = y?.defaultView;
        v?.removeEventListener("mousedown", o.onPanningStart, p), v?.removeEventListener("mousemove", o.onPanning, p), v?.removeEventListener("mouseup", o.onPanningStop, p), y?.removeEventListener("mouseleave", o.clearPanning, p), v?.removeEventListener("keyup", o.setKeyUnPressed, p), v?.removeEventListener("keydown", o.setKeyPressed, p), v?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, p), (l = o.wrapperComponent) === null || l === void 0 || l.removeEventListener("wheel", o.onWheelPanning, p), (c = o.wrapperComponent) === null || c === void 0 || c.removeEventListener("keyup", o.setKeyUnPressed, p), (m = o.wrapperComponent) === null || m === void 0 || m.removeEventListener("keydown", o.setKeyPressed, p), rn(o), (f = o.observer) === null || f === void 0 || f.disconnect();
      }, this.handleInitializeWrapperEvents = function(r) {
        var l = qc();
        r.addEventListener("wheel", o.onWheelZoom, l), r.addEventListener("dblclick", o.onDoubleClick, l), r.addEventListener("touchstart", o.onTouchPanningStart, l), r.addEventListener("touchmove", o.onTouchPanning, l), r.addEventListener("touchend", o.onTouchPanningStop, l);
      }, this.handleInitialize = function(r) {
        var l = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(c) {
          return c(Me(o));
        }), l && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var c, m = r.offsetWidth, f = r.offsetHeight;
          (m > 0 || f > 0) && (o.onInitCallbacks.forEach(function(p) {
            return p(Me(o));
          }), o.setCenter(), (c = o.observer) === null || c === void 0 || c.disconnect());
        }), setTimeout(function() {
          var c;
          (c = o.observer) === null || c === void 0 || c.disconnect();
        }, 5e3), o.observer.observe(r));
      }, this.onWheelZoom = function(r) {
        var l = o.setup.disabled;
        if (!l) {
          o.syncModifierKeys(r);
          var c = Iy(o, r);
          c && (eA(o, r), tA(o, r), nA(o, r));
        }
      }, this.onWheelPanning = function(r) {
        var l = o.props.onPanning, c = o.setup.trackPadPanning, m = c.lockAxisX, f = c.lockAxisY;
        o.syncModifierKeys(r);
        var p = Vj(o, r);
        if (p) {
          r.preventDefault(), r.stopPropagation();
          var y = o.state, v = y.positionX, b = y.positionY, w = v - r.deltaX, k = b - r.deltaY, x = m ? v : w, $ = f ? b : k, U = o.setup.autoAlignment, B = U.sizeX, I = U.sizeY, L = oa(o, B), J = oa(o, I);
          x === v && $ === b || (aA(o, r), Gy(o, x, $, L, J), Re(Me(o), r, l), iA(o, r));
        }
      }, this.onPanningStart = function(r) {
        var l = o.setup.disabled, c = o.props.onPanningStart;
        if (!l) {
          o.syncModifierKeys(r);
          var m = jh(o, r);
          if (m) {
            var f = o.isPressingKeys(o.setup.panning.activationKeys);
            f && (r.button === 0 && !o.setup.panning.allowLeftClickPan || r.button === 1 && !o.setup.panning.allowMiddleClickPan || r.button === 2 && !o.setup.panning.allowRightClickPan || (r.preventDefault(), r.stopPropagation(), rn(o), Eh(o, r), Re(Me(o), r, c)));
          }
        }
      }, this.onPanning = function(r) {
        var l = o.setup.disabled, c = o.props.onPanning;
        if (!l) {
          if (o.syncModifierKeys(r), o.isPanning && r.buttons === 0) {
            o.clearPanning(r);
            return;
          }
          var m = Ah(o);
          if (m) {
            var f = o.isPressingKeys(o.setup.panning.activationKeys);
            f && (r.preventDefault(), r.stopPropagation(), Ch(o, r.clientX, r.clientY, ia.MOUSE), Re(Me(o), r, c));
          }
        }
      }, this.onPanningStop = function(r) {
        var l = o.setup.panning.velocityDisabled, c = o.props.onPanningStop;
        o.isPanning && (Oj(o, l), Re(Me(o), r, c));
      }, this.onPinchStart = function(r) {
        var l = o.setup.disabled, c = o.props.onPinchStart;
        if (!l) {
          var m = Qj(o, r);
          m && (oA(o, r), rn(o), Re(Me(o), r, c));
        }
      }, this.onPinch = function(r) {
        var l = o.setup.disabled, c = o.props.onPinch;
        if (!l) {
          var m = Jj(o);
          m && (r.preventDefault(), r.stopPropagation(), rA(o, r), Re(Me(o), r, c));
        }
      }, this.onPinchStop = function(r) {
        var l = o.props.onPinchStop;
        o.pinchStartScale && (sA(o), Re(Me(o), r, l));
      }, this.onTouchPanningStart = function(r) {
        var l = o.setup, c = l.disabled, m = l.doubleClick, f = o.props.onPanningStart;
        if (!c) {
          var p = !m?.disabled, y = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (p && y && r.touches.length === 1)
            o.onDoubleClick(r);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), rn(o);
            var v = r.touches, b = v.length === 1, w = v.length === 2, k = jh(o, r);
            if (b) {
              if (!k)
                return;
              rn(o), Eh(o, r), Re(Me(o), r, f);
            }
            w && o.onPinchStart(r);
          }
        }
      }, this.onTouchPanning = function(r) {
        var l = o.setup.disabled, c = o.props.onPanning;
        if (o.isPanning && r.touches.length === 1) {
          if (l)
            return;
          var m = Ah(o);
          if (!m)
            return;
          r.cancelable && r.preventDefault(), r.stopPropagation();
          var f = r.touches[0];
          Ch(o, f.clientX, f.clientY, ia.TOUCH), Re(Me(o), r, c);
        } else r.touches.length > 1 && o.onPinch(r);
      }, this.onTouchPanningStop = function(r) {
        o.onPanningStop(r), o.onPinchStop(r);
      }, this.onDoubleClick = function(r) {
        var l = o.setup.disabled;
        if (!l) {
          var c = dA(o, r);
          c && cA(o, r);
        }
      }, this.clearPanning = function(r) {
        o.isPanning && o.onPanningStop(r);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(r) {
        var l = r.ctrlKey, c = r.metaKey, m = r.shiftKey, f = r.altKey;
        typeof l == "boolean" && (o.pressedKeys.Control = l), typeof c == "boolean" && (o.pressedKeys.Meta = c), typeof m == "boolean" && (o.pressedKeys.Shift = m), typeof f == "boolean" && (o.pressedKeys.Alt = f);
      }, this.setKeyPressed = function(r) {
        o.pressedKeys[r.key] = !0;
      }, this.setKeyUnPressed = function(r) {
        o.pressedKeys[r.key] = !1;
      }, this.isPressingKeys = function(r) {
        return typeof r == "function" ? r(Object.entries(o.pressedKeys).filter(function(l) {
          var c = l[1];
          return c;
        }).map(function(l) {
          var c = l[0];
          return c;
        })) : r.length ? !!r.every(function(l) {
          return o.pressedKeys[l];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var r = Md(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(r.scale, r.positionX, r.positionY);
        }
      }, this.handleTransformStyles = function(r, l, c) {
        return o.props.customTransform ? o.props.customTransform(r, l, c) : Fy(r, l, c);
      }, this.getContext = function() {
        return Me(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var r = o.state, l = r.scale, c = r.positionX, m = r.positionY, f = o.handleTransformStyles(c, m, l);
          o.props.detached || (o.contentComponent.style.transform = f), o.onTransformCallbacks.forEach(function(p) {
            return p({
              scale: l,
              positionX: c,
              positionY: m,
              previousScale: o.state.previousScale,
              ref: Me(o)
            });
          });
        }
      }, this.setState = function(r, l, c) {
        var m = o.props.onTransform;
        if (!Number.isNaN(r) && !Number.isNaN(l) && !Number.isNaN(c)) {
          var f = Math.max(r, 1e-7);
          f !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = f), o.state.positionX = l, o.state.positionY = c, o.applyTransformation();
          var p = Me(o);
          o.onChangeCallbacks.forEach(function(y) {
            return y(p);
          }), Re(p, { scale: o.state.scale, positionX: l, positionY: c }, m);
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
      }, this.init = function(r, l) {
        o.cleanupWindowEvents(), o.wrapperComponent = r, o.contentComponent = l, Zi(o, o.state.scale), o.handleInitializeWrapperEvents(r), o.handleInitialize(l), o.initializeWindowEvents(), o.isInitialized = !0;
        var c = Me(o);
        Re(c, void 0, o.props.onInit), Xj(o.props.ref, c);
      }, this.props = a, this.setup = Oh(this.props), this.state = Ky(this.props);
    }
    return n;
  })()
), ir = Ws.createContext(null), fA = function(n, a) {
  return typeof n == "function" ? n(a) : n;
}, pA = Ws.forwardRef(function(n, a) {
  var o = F.useRef(new mA(n)).current, r = fA(n.children, Js(o));
  return F.useImperativeHandle(a, function() {
    return Js(o);
  }, [o]), F.useEffect(function() {
    o.update(n);
  }, [o, n]), _.jsx(ir.Provider, Ft({ value: o }, { children: r }));
});
Ws.forwardRef(function(n, a) {
  var o = F.useRef(null), r = F.useContext(ir);
  return F.useEffect(function() {
    return r.onChange(function(l) {
      if (o.current) {
        var c = 0, m = 0;
        o.current.style.transform = r.handleTransformStyles(c, m, 1 / l.instance.state.scale);
      }
    });
  }, [r]), _.jsx("div", Ft({}, n, { ref: Lj([o, a]) }));
});
function _A(n, a) {
  a === void 0 && (a = {});
  var o = a.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
    l.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), l.styleSheet ? l.styleSheet.cssText = n : l.appendChild(document.createTextNode(n));
  }
}
var hA = `.transform-component-module_wrapper__SPB86 {
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
`, Xc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
_A(hA);
var yA = function(n) {
  var a = n.children, o = n.wrapperClass, r = o === void 0 ? "" : o, l = n.contentClass, c = l === void 0 ? "" : l, m = n.wrapperStyle, f = n.contentStyle, p = n.wrapperProps, y = p === void 0 ? {} : p, v = n.contentProps, b = v === void 0 ? {} : v, w = n.infinite, k = w === void 0 ? !1 : w, x = F.useContext(ir), $ = x.init, U = x.cleanupWindowEvents, B = F.useRef(null), I = F.useRef(null), L = F.useRef(null);
  return F.useEffect(function() {
    var J = B.current, K = I.current;
    return J !== null && K !== null && $ && $?.(J, K), function() {
      U?.();
    };
  }, []), F.useEffect(function() {
    if (k) {
      var J = L.current;
      if (J) {
        var K = function() {
          var X = x.state, P = X.positionX, oe = X.positionY;
          J.style.backgroundPosition = "".concat(P, "px ").concat(oe, "px");
        };
        return K(), x.onChange(K);
      }
    }
  }, [k, x]), _.jsxs("div", Ft({}, y, { ref: B, className: "".concat(Ic.wrapperClass, " ").concat(Xc.wrapper, " ").concat(r), style: m }, { children: [k && _.jsx("div", { ref: L, className: Xc.infiniteGrid, "aria-hidden": !0 }), _.jsx("div", Ft({}, b, { ref: I, className: "".concat(Ic.contentClass, " ").concat(Xc.content, " ").concat(c), style: Ft(Ft({}, f), { transform: Fy(x.state.positionX, x.state.positionY, x.state.scale) }) }, { children: a }))] }));
};
function vA(n, a) {
  var o = Math.max(0, Math.min(n.x + n.width, a.x + a.width) - Math.max(n.x, a.x)), r = Math.max(0, Math.min(n.y + n.height, a.y + a.height) - Math.max(n.y, a.y));
  return o * r;
}
function gA(n) {
  var a = n.elementX, o = n.elementY, r = n.elementWidth, l = n.elementHeight, c = n.scale, m = n.positionX, f = n.positionY, p = n.viewportWidth, y = n.viewportHeight, v = n.margin, b = v === void 0 ? 0 : v, w = n.threshold, k = w === void 0 ? 0 : w, x = {
    x: -b,
    y: -b,
    width: p + 2 * b,
    height: y + 2 * b
  }, $ = {
    x: a * c + m,
    y: o * c + f,
    width: r * c,
    height: l * c
  };
  if (k <= 0) {
    var U = $.x < x.x + x.width && $.x + $.width > x.x, B = $.y < x.y + x.height && $.y + $.height > x.y;
    return U && B;
  }
  var I = $.width * $.height;
  if (I <= 0)
    return !1;
  var L = vA(x, $);
  return L / I >= k;
}
Ws.forwardRef(function(n, a) {
  var o = n.x, r = n.y, l = n.width, c = n.height, m = n.margin, f = m === void 0 ? 0 : m, p = n.threshold, y = p === void 0 ? 0 : p, v = n.placeholder, b = v === void 0 ? null : v, w = n.onShow, k = n.onHide, x = n.children, $ = n.className, U = n.style, B = F.useContext(ir), I = F.useState(!1), L = I[0], J = I[1], K = F.useRef(!1), X = F.useRef(w), P = F.useRef(k);
  return X.current = w, P.current = k, F.useEffect(function() {
    var oe = function() {
      var ie, ce, Oe = B.wrapperComponent;
      if (Oe) {
        var te = gA({
          elementX: o,
          elementY: r,
          elementWidth: l,
          elementHeight: c,
          scale: B.state.scale,
          positionX: B.state.positionX,
          positionY: B.state.positionY,
          viewportWidth: Oe.offsetWidth,
          viewportHeight: Oe.offsetHeight,
          margin: f,
          threshold: y
        });
        te !== K.current && (K.current = te, J(te), te ? (ie = X.current) === null || ie === void 0 || ie.call(X) : (ce = P.current) === null || ce === void 0 || ce.call(P));
      }
    };
    oe();
    var O = B.onChange(oe), Q;
    return B.wrapperComponent || (Q = B.onInit(function() {
      return oe();
    })), function() {
      O(), Q?.();
    };
  }, [B, o, r, l, c, f, y]), L ? _.jsx("div", Ft({ ref: a, className: $, style: U }, { children: x })) : b ? _.jsx(_.Fragment, { children: b }) : null;
});
var bA = function() {
  var n = F.useContext(ir);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, kA = function() {
  var n = bA();
  return Js(n);
};
const ed = 24;
function wA({ locked: n, zoneMode: a, hasZone: o, disabled: r, clearZoneLabel: l, onToggleLock: c, onClearZone: m }) {
  const { zoomIn: f, zoomOut: p, resetTransform: y } = kA();
  return /* @__PURE__ */ _.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => f(), disabled: n || a, children: /* @__PURE__ */ _.jsx(R0, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => p(), disabled: n || a, children: /* @__PURE__ */ _.jsx(U0, {}) }),
    /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => y(), children: /* @__PURE__ */ _.jsx(nd, {}) }),
    a ? /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": l, onClick: m, disabled: !o || r, children: /* @__PURE__ */ _.jsx(Ib, {}) }) : /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: c, children: n ? /* @__PURE__ */ _.jsx(qh, {}) : /* @__PURE__ */ _.jsx(o0, {}) })
  ] });
}
function SA(n, a, o) {
  const r = Math.min(Math.min(a, o), Math.max(ed, Math.min(a, o) * 0.22));
  return Qc({
    x1: n.x - r / 2,
    y1: n.y - r / 2,
    x2: n.x + r / 2,
    y2: n.y + r / 2
  }, a, o);
}
function zA({
  hass: n,
  floor: a,
  language: o,
  selected: r,
  launched: l,
  active: c,
  disabled: m,
  selectionMode: f,
  zone: p,
  zoneLaunched: y,
  onToggle: v,
  onZoneChange: b
}) {
  const [w, k] = F.useState(!0), [x, $] = F.useState({ width: 0, height: 0 }), [U, B] = F.useState({ width: 0, height: 0 }), [I, L] = F.useState(0), J = F.useRef(null), K = F.useRef(void 0), X = F.useRef(p), P = n.states[a.map_entity], oe = F.useMemo(() => hd(P), [P]), O = F.useMemo(() => nl(P), [P]), Q = F.useMemo(() => $z(a), [a]), ie = typeof P?.attributes.entity_picture == "string" ? P.attributes.entity_picture : void 0, ce = p ? Xo(p) : void 0;
  F.useEffect(() => {
    X.current = p;
  }, [p]), F.useEffect(() => {
    if (!c) return;
    const te = setInterval(() => L((ae) => ae + 1), 5e3);
    return () => {
      clearInterval(te), L(0);
    };
  }, [c]), F.useEffect(() => {
    const te = J.current;
    if (!te) return;
    const ae = new ResizeObserver(([T]) => {
      B({ width: T.contentRect.width, height: T.contentRect.height });
    });
    return ae.observe(te), () => ae.disconnect();
  }, []);
  let Oe;
  return !P || P.state === "unavailable" ? Oe = N(o, "mapMissing") : ie ? O.length < 3 ? Oe = N(o, "calibrationMissing") : f === "rooms" && oe.length === 0 && (Oe = N(o, "roomsMissing")) : Oe = N(o, "imageMissing"), Oe ? /* @__PURE__ */ _.jsx("div", { className: "map-error", role: "alert", children: Oe }) : /* @__PURE__ */ _.jsx("div", { className: `map-shell ${f === "zone" ? "zone-mode" : ""}`, ref: J, children: /* @__PURE__ */ _.jsxs(
    pA,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: w || f === "zone", step: 0.08 },
      pinch: { disabled: w || f === "zone" },
      panning: { disabled: w || f === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ _.jsx(
          wA,
          {
            locked: w,
            zoneMode: f === "zone",
            hasZone: !!p,
            disabled: m,
            clearZoneLabel: N(o, "clearZone"),
            onToggleLock: () => k((te) => !te),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ _.jsx(yA, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!x.width || !x.height || !U.width || !U.height) return;
              const te = Math.min(U.width / x.width, U.height / x.height);
              return { width: x.width * te, height: x.height * te };
            })(),
            children: [
              /* @__PURE__ */ _.jsx(
                "img",
                {
                  src: (() => {
                    const te = n.hassUrl(ie);
                    if (te.startsWith("data:")) return te;
                    const ae = te.includes("?") ? "&" : "?", T = P?.last_updated ?? P?.state ?? "";
                    return `${te}${ae}v=${encodeURIComponent(T)}${c ? `&r=${I}` : ""}`;
                  })(),
                  alt: `${a.name} vacuum map`,
                  draggable: !1,
                  onLoad: (te) => $({ width: te.currentTarget.naturalWidth, height: te.currentTarget.naturalHeight })
                }
              ),
              x.width > 0 && x.height > 0 && /* @__PURE__ */ _.jsxs(
                "svg",
                {
                  className: `room-overlay ${f === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${x.width} ${x.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": f === "zone" ? `${a.name} zone map` : `${a.name} rooms`,
                  onPointerDown: (te) => {
                    if (f !== "zone" || m) return;
                    const ae = te.currentTarget.getBoundingClientRect();
                    if (!ae.width || !ae.height) return;
                    const T = {
                      x: Math.min(x.width, Math.max(0, (te.clientX - ae.left) / ae.width * x.width)),
                      y: Math.min(x.height, Math.max(0, (te.clientY - ae.top) / ae.height * x.height))
                    }, V = te.target, ee = V.dataset.zoneHandle, fe = ee ? "resize" : V.dataset.zoneMove === "true" && p ? "move" : "create";
                    if (K.current = { pointerId: te.pointerId, kind: fe, origin: T, initial: p, handle: ee }, te.currentTarget.setPointerCapture?.(te.pointerId), fe === "create") {
                      const ve = { x1: T.x, y1: T.y, x2: T.x, y2: T.y };
                      X.current = ve, b(ve);
                    }
                    te.preventDefault();
                  },
                  onPointerMove: (te) => {
                    const ae = K.current;
                    if (!ae || ae.pointerId !== te.pointerId || m) return;
                    const T = te.currentTarget.getBoundingClientRect();
                    if (!T.width || !T.height) return;
                    const V = {
                      x: Math.min(x.width, Math.max(0, (te.clientX - T.left) / T.width * x.width)),
                      y: Math.min(x.height, Math.max(0, (te.clientY - T.top) / T.height * x.height))
                    };
                    let ee;
                    if (ae.kind === "create")
                      ee = Xo({ x1: ae.origin.x, y1: ae.origin.y, x2: V.x, y2: V.y });
                    else if (ae.kind === "move" && ae.initial) {
                      const fe = V.x - ae.origin.x, ve = V.y - ae.origin.y;
                      ee = Qc({
                        x1: ae.initial.x1 + fe,
                        y1: ae.initial.y1 + ve,
                        x2: ae.initial.x2 + fe,
                        y2: ae.initial.y2 + ve
                      }, x.width, x.height);
                    } else if (ae.initial && ae.handle)
                      ee = { ...ae.initial }, ae.handle.includes("w") && (ee.x1 = V.x), ae.handle.includes("e") && (ee.x2 = V.x), ae.handle.includes("n") && (ee.y1 = V.y), ae.handle.includes("s") && (ee.y2 = V.y), ee = Qc(ee, x.width, x.height);
                    else return;
                    X.current = ee, b(ee), te.preventDefault();
                  },
                  onPointerUp: (te) => {
                    const ae = K.current;
                    if (!ae || ae.pointerId !== te.pointerId) return;
                    const T = X.current && Xo(X.current);
                    if (ae.kind === "create" && T && (T.x2 - T.x1 < ed || T.y2 - T.y1 < ed)) {
                      const V = SA(ae.origin, x.width, x.height);
                      X.current = V, b(V);
                    }
                    K.current = void 0, te.currentTarget.releasePointerCapture?.(te.pointerId), te.preventDefault();
                  },
                  onPointerCancel: (te) => {
                    K.current = void 0, te.currentTarget.releasePointerCapture?.(te.pointerId);
                  },
                  children: [
                    oe.map((te) => {
                      const ae = Q.get(te.segment_id), T = ae ? er(n, ae) : !1, V = !!ae?.area_id && !T, ee = T ? N(o, "roomAreaMissing") : N(o, "roomUnmapped"), fe = r.has(te.segment_id), ve = l.has(te.segment_id), z = Yz(te, O), Z = ae?.name || te.source_name, W = m || f === "zone" || !V;
                      return /* @__PURE__ */ _.jsxs("g", { className: `room ${fe ? "selected" : ""} ${ve ? "launched" : ""} ${V ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ _.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: Bz(te, O),
                            role: "button",
                            tabIndex: W ? -1 : 0,
                            "aria-label": `${Z}${V ? "" : ` — ${ee}`}`,
                            "aria-pressed": fe,
                            "aria-disabled": W,
                            onClick: () => !W && v(te.segment_id),
                            onKeyDown: (ne) => {
                              !W && (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), v(te.segment_id));
                            },
                            children: /* @__PURE__ */ _.jsx("title", { children: V ? Z : `${Z}: ${ee}` })
                          }
                        ),
                        /* @__PURE__ */ _.jsxs("g", { className: "room-label", transform: `translate(${z.x} ${z.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ _.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ _.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ _.jsx(Fc, { icon: ae?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ _.jsx("text", { y: "39", textAnchor: "middle", children: Z })
                        ] })
                      ] }, te.segment_id);
                    }),
                    f === "zone" && ce && /* @__PURE__ */ _.jsxs("g", { className: `zone-selection ${y ? "launched" : ""}`, children: [
                      /* @__PURE__ */ _.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: ce.x1,
                          y: ce.y1,
                          width: ce.x2 - ce.x1,
                          height: ce.y2 - ce.y1,
                          role: "img",
                          "aria-label": N(o, "selectedZone")
                        }
                      ),
                      [
                        ["nw", ce.x1, ce.y1],
                        ["ne", ce.x2, ce.y1],
                        ["se", ce.x2, ce.y2],
                        ["sw", ce.x1, ce.y2]
                      ].map(([te, ae, T]) => /* @__PURE__ */ _.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": te,
                          cx: ae,
                          cy: T,
                          r: "12",
                          "aria-label": `${N(o, "resizeZone")} ${te}`
                        },
                        te
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
const xA = {
  preparing: /* @__PURE__ */ _.jsx($_, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ _.jsx(Yb, {}),
  cleaning_upstairs: /* @__PURE__ */ _.jsx(Lc, {}),
  carry_downstairs: /* @__PURE__ */ _.jsx(Uh, {}),
  finishing: /* @__PURE__ */ _.jsx($_, { className: "spin" }),
  complete: /* @__PURE__ */ _.jsx(Vb, {}),
  error: /* @__PURE__ */ _.jsx(nd, {}),
  idle: /* @__PURE__ */ _.jsx(Lc, {})
}, Nh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function jA({
  language: n,
  stage: a,
  roomNames: o,
  pending: r,
  onStart: l,
  onFinish: c,
  onReset: m,
  onCancel: f
}) {
  if (a === "idle") return null;
  const p = N(n, Nh[a].title), y = N(n, Nh[a].description), v = !["complete", "error"].includes(a);
  return /* @__PURE__ */ _.jsxs("section", { className: `assisted-panel assisted-${a}`, "aria-live": "polite", children: [
    /* @__PURE__ */ _.jsx("div", { className: "assisted-icon", children: xA[a] }),
    /* @__PURE__ */ _.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ _.jsx("strong", { children: p }),
      /* @__PURE__ */ _.jsx("p", { children: y }),
      o.length > 0 && /* @__PURE__ */ _.jsx("small", { children: o.join(" · ") })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "assisted-actions", children: [
      a === "carry_upstairs" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: l, children: [
        /* @__PURE__ */ _.jsx(Xh, {}),
        N(n, "startUpstairs")
      ] }),
      a === "carry_downstairs" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "primary", disabled: r, onClick: c, children: [
        /* @__PURE__ */ _.jsx(Uh, {}),
        N(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(a) && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "secondary", disabled: r, onClick: m, children: [
        /* @__PURE__ */ _.jsx(nd, {}),
        N(n, "newUpstairsJob")
      ] }),
      v && /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", disabled: r, onClick: f, children: N(n, "cancel") })
    ] })
  ] });
}
function Ho(n, a) {
  if (!a) return;
  const o = n.states[a];
  return !o || ["unknown", "unavailable"].includes(o.state) ? void 0 : `${o.attributes.device_class === "duration" && !isNaN(Number(o.state)) ? String(Math.round(Number(o.state))) : o.state}${o.attributes.unit_of_measurement ? ` ${o.attributes.unit_of_measurement}` : ""}`;
}
function AA(n, a, o) {
  if (!a) return;
  const r = n.states[a];
  if (!r || ["unknown", "unavailable"].includes(r.state)) return;
  const l = Number(r.state);
  if (!Number.isFinite(l) || l < 0) return;
  const c = String(r.attributes.unit_of_measurement ?? ""), f = { s: 1 / 60, min: 1, h: 60, d: 1440 }[c];
  if (f === void 0) return;
  const p = l * f, y = Math.max(0, Math.round(p)), v = Math.floor(y / 60), b = y % 60;
  return `${[
    v > 0 ? `${v} ${N(o, "hourShort")}` : void 0,
    b > 0 || v === 0 ? `${b} ${N(o, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${N(o, "remaining")}`;
}
function TA(n, a) {
  if (a === "washing_the_mop") return N(n, "washingMop");
}
function EA(n, a) {
  const o = new Date(n);
  if (isNaN(o.getTime())) return;
  const r = Date.now() - o.getTime();
  if (r < 0) return;
  const l = Math.floor(r / 6e4);
  if (l < 1) return N(a, "justNow");
  if (l < 60) return `${l} ${N(a, "minuteShort")} ${N(a, "ago")}`;
  const c = Math.floor(l / 60);
  if (c < 24) return `${c} ${N(a, "hourShort")} ${N(a, "ago")}`;
  const m = Math.floor(c / 24);
  return m === 1 ? N(a, "yesterday") : `${m} ${N(a, "daysAgo")}`;
}
function CA(n, a) {
  const o = n.entities?.map_select ? a.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((r) => r.map_select_option === o) ?? n.floors[0];
}
function MA({ hass: n, config: a }) {
  const o = F.useRef(n), r = F.useRef(!1), l = a.language, [c, m] = F.useState(() => CA(a, n).id), f = a.floors.find((G) => G.id === c) ?? a.floors[0], [p, y] = F.useState("rooms"), [v, b] = F.useState(/* @__PURE__ */ new Set()), [w, k] = F.useState(), [x, $] = F.useState(!1), [U, B] = F.useState(!1), [I, L] = F.useState(!1), [J, K] = F.useState(!1), [X, P] = F.useState(), [oe, O] = F.useState(), [Q, ie] = F.useState({ phase: "idle" }), ce = F.useMemo(() => On(n, a), [n, a]), Oe = F.useMemo(() => Yy(n, a), [n, a]), te = $y(Oe), ae = F.useMemo(() => Bx(n, a), [n, a]), T = JSON.stringify(ae), [V, ee] = F.useState(), fe = F.useMemo(() => Io(a, ce, f), [a, ce, f]), ve = fe.find(({ preset: G, available: ue }) => G.id === a.default_preset && ue)?.preset ?? fe.find(({ available: G }) => G)?.preset, [z, Z] = F.useState(
    () => Lo(ve ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), W = n.states[a.entity], ne = y2(n, a), he = a.entities?.assisted_carry_job ? n.states[a.entities.assisted_carry_job]?.state : void 0, pe = F.useMemo(() => k2(he), [he]), ke = h2(a, pe), Be = v2(ne), Ye = a.entities?.map_select ? n.states[a.entities.map_select]?.state : void 0;
  F.useEffect(() => {
    o.current = n;
  }, [n]), F.useEffect(() => {
    !Be || !ke || !pe || (m(ke.id), y("rooms"), k(void 0), b(new Set(pe.segment_ids)), Z({
      preset_id: "assisted_carry",
      strategy: pe.strategy,
      cleaning_type: pe.cleaning_type,
      fan_speed: pe.fan_speed,
      mop_mode: pe.mop_mode,
      mop_intensity: pe.mop_intensity,
      cleaning_count: pe.cleaning_count
    }));
  }, [Be, ke, pe]), F.useEffect(() => {
    if (Be || !Ye) return;
    const G = a.floors.find((ue) => ue.map_select_option === Ye);
    G && (m(G.id), b(/* @__PURE__ */ new Set()), k(void 0), G.assisted_carry && y("rooms"), $(!1));
  }, [Be, a.floors, Ye]);
  const $t = a.entities?.status ? n.states[a.entities.status]?.state : void 0, en = ["washing_the_mop", "washing_the_mop_2"].includes($t ?? ""), Nn = [W?.state, $t].includes("emptying_the_bin"), sn = yx(W?.state) || en, bt = Be || ["submitting", "starting", "active"].includes(Q.phase);
  F.useEffect(() => {
    Q.phase === "starting" && sn ? ie((G) => ({ ...G, phase: "active" })) : Q.phase === "active" && !sn && (ie({ phase: "idle" }), b(/* @__PURE__ */ new Set()), k(void 0));
  }, [Q.phase, sn]), F.useEffect(() => {
    if (!oe) return;
    const G = setTimeout(() => O(void 0), 5e3);
    return () => clearTimeout(G);
  }, [oe]);
  const Hi = new Set(Q.floor_id === f.id ? Q.segment_ids ?? [] : []), Ua = f.rooms.filter((G) => v.has(G.segment_id)), Ha = Ua.map((G) => G.name), Ba = a.entities?.dock_mop_drying ? n.states[a.entities.dock_mop_drying]?.state === "on" : !1, Ya = Ba ? AA(n, a.entities?.dock_mop_drying_remaining_time, l) : void 0, ua = a.entities?.last_clean_end ? n.states[a.entities.last_clean_end]?.state : void 0, Bi = !sn && ua && !["unknown", "unavailable"].includes(ua) ? EA(ua, l) : void 0, ol = [
    TA(l, $t),
    Ba ? N(l, "dryingMop") : void 0,
    Ya
  ].filter((G) => !!G), or = [
    { icon: /* @__PURE__ */ _.jsx(Xb, {}), label: N(l, "battery"), value: Ho(n, a.entities?.battery) },
    { icon: /* @__PURE__ */ _.jsx(l0, {}), label: N(l, "room"), value: Ho(n, a.entities?.current_room) },
    { icon: /* @__PURE__ */ _.jsx(y0, {}), label: N(l, "area"), value: Ho(n, a.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ _.jsx(Qb, {}), label: N(l, "duration"), value: Ho(n, a.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ _.jsx(z0, {}), label: N(l, "progress"), value: Ho(n, a.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ _.jsx(t0, {}), label: N(l, "lastClean"), value: Bi }
  ].filter((G) => G.value), wt = (G) => {
    if (Be) return;
    const ue = a.floors.find((re) => re.id === G);
    m(G), b(/* @__PURE__ */ new Set()), k(void 0), ue?.assisted_carry && y("rooms"), $(!1);
  }, rr = (G) => {
    G === "zone" && f.assisted_carry || (y(G), b(/* @__PURE__ */ new Set()), k(void 0), $(!1));
  }, Yi = (G) => {
    if (G) {
      const ue = fe.find(({ preset: re, available: tt }) => re.id === a.default_preset && tt)?.preset ?? fe.find(({ preset: re, available: tt }) => re.id === "vacuum_only" && tt)?.preset ?? fe.find(({ available: re }) => re)?.preset;
      if (!ue) {
        O(N(l, "unsupported"));
        return;
      }
      Z(Lo(ue));
    }
    if (p === "zone" && (z.strategy !== "custom" || !Wc.has(z.cleaning_type))) {
      const ue = fe.find(({ preset: re, available: tt }) => re.id === "vacuum_only" && tt)?.preset ?? fe.find(({ preset: re, available: tt }) => re.id === "vacuum_and_mop" && tt)?.preset ?? fe.find(({ preset: re, available: tt }) => tt && re.strategy === "custom" && Wc.has(re.cleaning_type ?? "vacuum"))?.preset;
      if (!ue) {
        O(N(l, "unsupported"));
        return;
      }
      Z(Lo(ue));
    }
    if (!G && z.cleaning_type === "vacuum_then_mop" && f.vacuum_then_mop_routine) {
      const ue = f.rooms.filter((re) => re.include_in_floor_clean !== !1 && Ds(n, re)).map((re) => re.segment_id);
      b(new Set(ue));
    }
    B(G), $(!0);
  }, sr = () => {
    const G = f.rooms.filter((ue) => ue.include_in_floor_clean !== !1 && Ds(n, ue)).map((ue) => ue.segment_id);
    b(new Set(G)), Yi(!!f.assisted_carry);
  }, $a = (G) => {
    if (G.cleaning_type === "vacuum_then_mop" && f.vacuum_then_mop_routine) {
      const ue = f.rooms.filter((re) => re.include_in_floor_clean !== !1 && Ds(n, re)).map((re) => re.segment_id);
      b(new Set(ue));
    }
    Z(G);
  }, ca = (G) => G instanceof Po ? `${G.operation}: ${G.message}` : G instanceof Error ? G.message : String(G), lr = async (G = z) => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        const ue = g2(f, [...v], G);
        await w2(o.current, a, ue), $(!1), O(N(l, "preparingUpstairs"));
      } catch (ue) {
        O(ca(ue));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, rl = async () => {
    if (!(r.current || !ke || !pe)) {
      r.current = !0, L(!0);
      try {
        await S2(o.current, a, ke, pe);
      } catch (G) {
        O(ca(G));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, sl = async () => {
    if (!r.current) {
      r.current = !0, L(!0);
      try {
        await z2(o.current, a);
      } catch (G) {
        O(ca(G));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        r.current = !1, L(!1);
      }
    }
  }, da = async () => {
    if (!I) {
      L(!0);
      try {
        await gh(o.current, a), b(/* @__PURE__ */ new Set());
      } catch (G) {
        O(ca(G));
      } finally {
        L(!1);
      }
    }
  }, St = async () => {
    if (!I) {
      L(!0);
      try {
        const G = [
          a.entities?.assisted_carry_prepare_script,
          a.entities?.assisted_carry_start_script,
          a.entities?.assisted_carry_finish_script
        ].filter((ue) => !!(ue && o.current.states[ue]));
        G.length > 0 && await o.current.callService("script", "turn_off", {}, { entity_id: G }), ne === "cleaning_upstairs" && await o.current.callService("vacuum", "stop", {}, { entity_id: a.entity }), en && await Zc(o.current, a, "wash", !0), Nn && await Zc(o.current, a, "empty", !0), await gh(o.current, a), b(/* @__PURE__ */ new Set());
      } catch (G) {
        O(ca(G));
      } finally {
        L(!1);
      }
    }
  }, ln = async (G = z) => {
    if (U) {
      await lr(G);
      return;
    }
    if (r.current) return;
    r.current = !0;
    const ue = {
      floor_id: f.id,
      segment_ids: p === "rooms" ? [...v] : void 0,
      selection_mode: p,
      zone: p === "zone" ? w : void 0
    };
    ie({ phase: "submitting", ...ue });
    try {
      const re = p === "zone" && w ? Hz(w, nl(o.current.states[f.map_entity])) : void 0;
      await X2({
        getHass: () => o.current,
        config: a,
        floor: f,
        rooms: p === "rooms" ? Ua : [],
        draft: G,
        zone: re
      }), ie({ phase: "starting", ...ue }), $(!1), O(N(l, "launched"));
    } catch (re) {
      const tt = re instanceof Te ? `${re.operation}: ${re.message}` : String(re);
      ie({ phase: "failed", ...ue, error: tt }), O(tt);
    } finally {
      r.current = !1;
    }
  }, ct = async (G) => {
    try {
      if (G === "stop" || G === "return_to_base") {
        const ue = a.entities?.vacuum_then_mop_script;
        ue && o.current.states[ue] && o.current.states[ue].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: ue });
        const re = a.entities?.assisted_carry_start_script;
        Be && re && o.current.states[re] && o.current.states[re].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: re });
      }
      await o.current.callService("vacuum", G, {}, { entity_id: a.entity }), G === "stop" && ne === "cleaning_upstairs" && await Ti(o.current, a, "carry_downstairs");
    } catch (ue) {
      O(`${G}: ${ue instanceof Error ? ue.message : String(ue)}`);
    }
  }, ll = async (G, ue) => {
    if (!X) {
      P(N(l, "settingSaved"));
      try {
        await M2(o.current, a, G, ue), O(N(l, "settingSaved"));
      } catch (re) {
        const tt = re instanceof Mn ? `${re.operation}: ${re.message}` : String(re);
        O(tt);
      } finally {
        P(void 0);
      }
    }
  }, ul = async (G) => {
    if (!(X || !G.reset_button) && window.confirm(N(l, "confirmResetConsumable"))) {
      P(N(l, "dockActionSent"));
      try {
        await o.current.callService("button", "press", {}, { entity_id: G.reset_button }), O(N(l, "dockActionSent"));
      } catch (ue) {
        O(`reset_${G.kind}: ${ue instanceof Error ? ue.message : String(ue)}`);
      } finally {
        P(void 0);
      }
    }
  }, cl = async (G, ue) => {
    if (!X) {
      if (!ue) {
        const re = G === "empty" ? N(l, "confirmEmpty") : G === "wash" ? N(l, "confirmWash") : G === "dry" ? N(l, "confirmDry") : N(l, "confirmDrain");
        if (!window.confirm(re)) return;
      }
      P(N(l, "dockActionSent"));
      try {
        await Zc(o.current, a, G, ue), O(N(l, "dockActionSent"));
      } catch (re) {
        const tt = G === "drain" ? N(l, "drainRejected") : re instanceof Mn ? `${re.operation}: ${re.message}` : String(re);
        O(tt);
      } finally {
        P(void 0);
      }
    }
  }, qa = async (G) => {
    const ue = a.entities?.dock_child_lock;
    if (!(!ue || X)) {
      P(N(l, "settingSaved"));
      try {
        await o.current.callService("switch", G ? "turn_on" : "turn_off", {}, { entity_id: ue }), O(N(l, "settingSaved"));
      } catch (re) {
        O(`child_lock: ${re instanceof Error ? re.message : String(re)}`);
      } finally {
        P(void 0);
      }
    }
  };
  return /* @__PURE__ */ _.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ _.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("h1", { children: a.name ?? W?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ _.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ _.jsx("span", { className: `state-dot state-${W?.state ?? "unavailable"}` }),
          /* @__PURE__ */ _.jsx("span", { children: W?.state?.replaceAll("_", " ") ?? "unavailable" }),
          ol.map((G) => /* @__PURE__ */ _.jsx("span", { className: "state-detail", children: ` · ${G}` }, G))
        ] })
      ] }),
      or.length > 0 && /* @__PURE__ */ _.jsx("div", { className: "status-strip", children: or.map((G) => /* @__PURE__ */ _.jsxs("div", { title: G.label, children: [
        G.icon,
        /* @__PURE__ */ _.jsx("strong", { children: G.value })
      ] }, G.label)) })
    ] }),
    ae.length > 0 && V !== T && /* @__PURE__ */ _.jsxs("details", { className: "health-notice", children: [
      /* @__PURE__ */ _.jsxs("summary", { children: [
        /* @__PURE__ */ _.jsx(Vh, {}),
        N(l, "setupAttention"),
        " (",
        ae.length,
        ")"
      ] }),
      /* @__PURE__ */ _.jsx("ul", { children: ae.map((G) => /* @__PURE__ */ _.jsx("li", { children: V2(l, G) }, JSON.stringify(G))) }),
      /* @__PURE__ */ _.jsx("button", { type: "button", className: "secondary", onClick: () => ee(T), children: N(l, "dismiss") })
    ] }),
    a.floors.length > 1 && /* @__PURE__ */ _.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": N(l, "floor"), children: a.floors.map((G) => /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": f.id === G.id,
        className: f.id === G.id ? "active" : "",
        disabled: Be && f.id !== G.id,
        onClick: () => wt(G.id),
        children: G.name
      },
      G.id
    )) }),
    !f.assisted_carry && /* @__PURE__ */ _.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": N(l, "selectionMode"), children: [
      /* @__PURE__ */ _.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": p === "rooms",
          className: p === "rooms" ? "active" : "",
          disabled: bt,
          onClick: () => rr("rooms"),
          children: N(l, "rooms")
        }
      ),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": p === "zone",
          className: p === "zone" ? "active" : "",
          disabled: bt,
          onClick: () => rr("zone"),
          children: N(l, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ _.jsx(
      zA,
      {
        hass: n,
        floor: f,
        language: l,
        selected: v,
        launched: Hi,
        active: sn,
        disabled: bt,
        selectionMode: p,
        zone: w,
        zoneLaunched: Q.floor_id === f.id && Q.selection_mode === "zone" && ["starting", "active"].includes(Q.phase),
        onToggle: (G) => b((ue) => {
          const re = new Set(ue);
          return re.has(G) ? re.delete(G) : re.add(G), re;
        }),
        onZoneChange: k
      }
    ),
    f.assisted_carry && /* @__PURE__ */ _.jsx(
      jA,
      {
        language: l,
        stage: ne,
        roomNames: Ha,
        pending: I,
        onStart: rl,
        onFinish: sl,
        onReset: da,
        onCancel: St
      }
    ),
    /* @__PURE__ */ _.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("strong", { children: p === "zone" ? N(l, "selectedZone") : N(l, "selectedRooms") }),
        /* @__PURE__ */ _.jsx("span", { children: p === "zone" ? w ? N(l, "zoneReady") : N(l, "noZoneSelected") : Ha.length ? Ha.join(" · ") : N(l, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ _.jsx("span", { className: "selection-count", children: p === "zone" ? +!!w : v.size })
    ] }),
    !Be && /* @__PURE__ */ _.jsxs("div", { className: "primary-actions", children: [
      p === "rooms" && /* @__PURE__ */ _.jsxs("button", { type: "button", className: "secondary", onClick: sr, disabled: bt, children: [
        /* @__PURE__ */ _.jsx(Y_, {}),
        " ",
        N(l, "entireFloor")
      ] }),
      /* @__PURE__ */ _.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => Yi(!!f.assisted_carry),
          disabled: (p === "zone" ? !w : v.size === 0) || bt,
          children: [
            f.assisted_carry && /* @__PURE__ */ _.jsx(Lc, {}),
            f.assisted_carry ? N(l, "prepareUpstairs") : N(l, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      W?.state === "paused" && ce.canStart && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => ct("start"), children: [
        /* @__PURE__ */ _.jsx(Xh, {}),
        N(l, "resume")
      ] }),
      W?.state === "cleaning" && ce.canPause && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => ct("pause"), children: [
        /* @__PURE__ */ _.jsx(c0, {}),
        N(l, "pause")
      ] }),
      ce.canStop && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => ct("stop"), children: [
        /* @__PURE__ */ _.jsx(w0, {}),
        N(l, "stop")
      ] }),
      ce.canDock && /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => ct("return_to_base"), children: [
        /* @__PURE__ */ _.jsx(Y_, {}),
        N(l, "dock")
      ] }),
      /* @__PURE__ */ _.jsxs("button", { type: "button", onClick: () => K(!0), children: [
        /* @__PURE__ */ _.jsx(g0, {}),
        N(l, "dockStation"),
        te > 0 && /* @__PURE__ */ _.jsx("span", { className: "maintenance-badge", title: N(l, "maintenanceBadge"), "aria-label": N(l, "maintenanceBadge"), children: te })
      ] })
    ] }),
    x && /* @__PURE__ */ _.jsx(
      aj,
      {
        language: l,
        draft: z,
        capabilities: ce,
        presets: fe,
        selectedRoomNames: p === "zone" ? [N(l, "customZone")] : Ha,
        submitting: Q.phase === "submitting" || I,
        assistedCarry: U,
        zoneCleaning: p === "zone",
        mopRoutes: ce.mopRoutes,
        checks: U ? void 0 : qy(n, a, z),
        onDraftChange: $a,
        onClose: () => Q.phase !== "submitting" && !I && $(!1),
        onStart: ln
      }
    ),
    J && /* @__PURE__ */ _.jsx(
      Q2,
      {
        hass: n,
        config: a,
        language: l,
        washing: en,
        emptying: Nn,
        drying: Ba,
        dryingRemaining: Ya,
        pending: X,
        onClose: () => !X && K(!1),
        onAction: cl,
        onSetting: ll,
        onChildLock: qa,
        maintenance: Oe,
        onResetConsumable: ul
      }
    ),
    oe && /* @__PURE__ */ _.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ _.jsx("span", { children: oe }),
      /* @__PURE__ */ _.jsx("button", { type: "button", "aria-label": N(l, "close"), onClick: () => O(void 0), children: /* @__PURE__ */ _.jsx(ad, {}) })
    ] })
  ] });
}
const OA = '@charset "UTF-8";:host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);--rvm-warning: var(--warning-color, #ffa600);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(var(--mode-count, 4),minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.editor-section{margin:0 0 10px;border:1px solid var(--rvm-border);border-radius:14px}.editor-section>summary{display:flex;align-items:center;min-height:48px;padding:0 16px;cursor:pointer;list-style:none}.editor-section>summary::-webkit-details-marker{display:none}.editor-section>summary:after{content:"▸";margin-left:auto;color:var(--rvm-muted);transition:transform .15s}.editor-section[open]>summary:after{transform:rotate(90deg)}.editor-section>summary h3{margin:0;font-size:15px}.editor-section-body{display:grid;gap:10px;padding:0 16px 16px}.entity-group{display:grid;gap:8px;margin:0;padding:10px 12px;border:1px solid var(--rvm-border);border-radius:12px}.entity-group legend{padding:0 6px;font-weight:600}.entity-fields{display:grid;gap:8px}.entity-field label>span{display:flex;align-items:center;gap:8px}.entity-badge{padding:1px 8px;border-radius:9px;font-size:11px;background:var(--rvm-surface-2);color:var(--rvm-muted)}.entity-badge.manual{color:var(--rvm-warning)}.link-button{padding:2px 0;border:0;background:none;color:var(--rvm-accent);font-size:12px;cursor:pointer;text-align:left}.consumable-list{margin:0;padding-left:18px;font-size:13px}.helper-provisioner{display:grid;gap:8px}.editor-toolbar{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}.editor-toolbar button{display:inline-flex;align-items:center;gap:6px}.setup-wizard{display:grid;gap:14px}.setup-wizard header small{color:var(--rvm-muted)}.setup-wizard h2{margin:2px 0 0}.wizard-step{display:grid;gap:12px}.wizard-nav{display:flex;justify-content:space-between;gap:10px;padding-top:12px;border-top:1px solid var(--rvm-border)}.wizard-verdict{display:grid;gap:4px;padding:12px 14px;border-radius:14px;background:var(--rvm-surface-2)}.wizard-verdict.verdict-supported{border-left:4px solid var(--success-color, #2e7d32)}.wizard-verdict.verdict-limited{border-left:4px solid var(--rvm-warning)}.wizard-verdict.verdict-unsupported{border-left:4px solid var(--rvm-danger)}.wizard-verdict p{margin:0;color:var(--rvm-muted);font-size:13px}.wizard-facts{display:grid;grid-template-columns:max-content 1fr;gap:6px 14px;margin:0;font-size:13px}.wizard-facts dt{color:var(--rvm-muted)}.wizard-facts dd{margin:0}.wizard-warning{color:var(--rvm-warning)}.room-editor.unmapped{border-left:3px solid var(--rvm-warning)}.yaml-preview{max-height:360px;overflow:auto;margin:0;padding:12px;border-radius:12px;background:var(--rvm-surface-2);font-size:12px;white-space:pre}.redetect-changes{display:grid;gap:6px;margin:8px 0 12px;padding:0;list-style:none}.preset-scripts{display:grid;gap:8px;margin-top:14px}.preset-script-row{display:flex;flex-wrap:wrap;align-items:center;gap:10px}.preset-script-row>span{flex:1;font-weight:600}.preset-script-row .yaml-preview{flex-basis:100%}.setup-state-body{padding:22px 24px}.setup-state-body h1{display:flex;align-items:center;gap:10px;margin:0 0 6px;font-size:20px}.setup-state-body h1 svg{color:var(--rvm-warning)}.setup-state-body>p{margin:0 0 14px;color:var(--rvm-muted)}.setup-checks{display:grid;gap:8px;margin:0 0 14px;padding:0;list-style:none}.setup-checks li{display:flex;align-items:center;gap:10px}.setup-checks li span{flex:1}.setup-checks .ok svg{color:var(--success-color, #2e7d32)}.setup-checks .missing svg{color:var(--rvm-danger)}.setup-checks .optional svg{color:var(--rvm-warning)}.setup-checks a{color:var(--rvm-accent);font-weight:600}.setup-problem{margin:0 0 12px;font-size:13px}.setup-problem ul{margin:4px 0 0;padding-left:18px}.setup-next{margin:0;font-weight:600}.health-notice{margin:0 16px 12px;padding:10px 14px;border:1px solid color-mix(in srgb,var(--rvm-warning) 50%,transparent);border-radius:14px;background:color-mix(in srgb,var(--rvm-warning) 10%,transparent);font-size:13px}.health-notice summary{display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:600}.health-notice summary svg{width:18px;height:18px;color:var(--rvm-warning)}.health-notice ul{margin:8px 0;padding-left:20px}.health-notice button{min-height:32px;padding:4px 12px}.preflight{margin:0 24px 12px;padding:12px 16px;border-radius:14px;font-size:13px}.preflight ul{margin:6px 0 0;padding-left:18px}.preflight.blocking{color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent)}.preflight.warning{background:color-mix(in srgb,var(--rvm-warning) 12%,transparent)}.maintenance-badge{display:inline-grid;place-items:center;min-width:18px;height:18px;margin-left:4px;padding:0 5px;border-radius:9px;color:#fff;background:var(--rvm-danger);font-size:11px;font-weight:700}.maintenance-row{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.maintenance-row>span:first-child{flex:1;font-weight:600}.maintenance-value{display:grid;justify-items:end}.maintenance-value small{color:var(--rvm-muted)}.maintenance-row.level-due .maintenance-value small{color:var(--rvm-warning)}.maintenance-row.level-overdue .maintenance-value small{color:var(--rvm-danger);font-weight:600}.maintenance-row button{min-height:34px;padding:4px 12px}.maintenance-hint{margin:0;padding:10px 16px 14px;border-top:1px solid var(--rvm-border);color:var(--rvm-muted);font-size:12px}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-hint{margin:-4px 0 12px;color:var(--rvm-muted);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', NA = "0.9.0-dev";
let Dh = !1;
function DA() {
  Dh || (Dh = !0, console.warn(
    "roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead."
  ));
}
class sv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const a = this.attachShadow({ mode: "open" }), o = document.createElement("style");
    o.textContent = OA, a.append(o), this.container = document.createElement("div"), a.append(this.container);
  }
  renderReact(a) {
    this.root ??= Mb.createRoot(this.container), this.root.render(a);
  }
}
class RA extends sv {
  config;
  configErrors = [];
  language;
  homeAssistant;
  setConfig(a) {
    this.language = a?.language, this.configErrors = md(a), this.config = this.configErrors.length === 0 ? zz(a) : void 0, this.config?.vacuum_mode_fallback && DA(), this.render();
  }
  set hass(a) {
    this.homeAssistant = a, this.render();
  }
  render() {
    const a = this.homeAssistant;
    if (a) {
      if (!this.config || !a.states[this.config.entity]) {
        this.renderReact(/* @__PURE__ */ _.jsx(p2, { hass: a, language: this.language, errors: this.configErrors, missingVacuum: this.config?.entity }));
        return;
      }
      this.renderReact(/* @__PURE__ */ _.jsx(MA, { hass: a, config: this.config }));
    }
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
  /**
   * "Add card" starts from a discovered config for the first Roborock vacuum. Home
   * Assistant awaits this and passes `hass`; without a vacuum the plain stub is used.
   */
  static async getStubConfig(a) {
    const o = a ? _d(a)[0] : void 0;
    if (!a || !o || !a.entities) return xy();
    const [r, l] = await Promise.all([yd(a, o), jd(a, o)]);
    return al(a, o, r, l).config;
  }
}
class ZA extends sv {
  config = xy();
  homeAssistant;
  setConfig(a) {
    this.config = structuredClone(a), this.render();
  }
  set hass(a) {
    this.homeAssistant = a, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ _.jsx(
        f2,
        {
          hass: this.homeAssistant,
          config: this.config,
          onChange: (a) => {
            this.config = a, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: a }, bubbles: !0, composed: !0 })), this.render();
          }
        }
      )
    );
  }
}
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", RA);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", ZA);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${NA} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  RA as RoborockVacuumMapCard,
  ZA as RoborockVacuumMapCardEditor
};
