function A_(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var yc = { exports: {} }, Co = {};
var gh;
function sb() {
  if (gh) return Co;
  gh = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(l, s, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      d = {};
      for (var m in s)
        m !== "key" && (d[m] = s[m]);
    } else d = s;
    return s = d.ref, {
      $$typeof: n,
      type: l,
      key: f,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Co.Fragment = a, Co.jsx = o, Co.jsxs = o, Co;
}
var bh;
function ub() {
  return bh || (bh = 1, yc.exports = sb()), yc.exports;
}
var p = ub(), gc = { exports: {} }, Oo = {}, bc = { exports: {} }, Sc = {};
var Sh;
function cb() {
  return Sh || (Sh = 1, (function(n) {
    function a(A, L) {
      var ee = A.length;
      A.push(L);
      e: for (; 0 < ee; ) {
        var me = ee - 1 >>> 1, ye = A[me];
        if (0 < s(ye, L))
          A[me] = L, A[ee] = ye, ee = me;
        else break e;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function l(A) {
      if (A.length === 0) return null;
      var L = A[0], ee = A.pop();
      if (ee !== L) {
        A[0] = ee;
        e: for (var me = 0, ye = A.length, x = ye >>> 1; me < x; ) {
          var $ = 2 * (me + 1) - 1, W = A[$], ne = $ + 1, _e = A[ne];
          if (0 > s(W, ee))
            ne < ye && 0 > s(_e, W) ? (A[me] = _e, A[ne] = ee, me = ne) : (A[me] = W, A[$] = ee, me = $);
          else if (ne < ye && 0 > s(_e, ee))
            A[me] = _e, A[ne] = ee, me = ne;
          else break e;
        }
      }
      return L;
    }
    function s(A, L) {
      var ee = A.sortIndex - L.sortIndex;
      return ee !== 0 ? ee : A.id - L.id;
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
    var h = [], v = [], g = 1, b = null, S = 3, w = !1, z = !1, R = !1, O = !1, X = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function Q(A) {
      for (var L = o(v); L !== null; ) {
        if (L.callback === null) l(v);
        else if (L.startTime <= A)
          l(v), L.sortIndex = L.expirationTime, a(h, L);
        else break;
        L = o(v);
      }
    }
    function K(A) {
      if (R = !1, Q(A), !z)
        if (o(h) !== null)
          z = !0, J || (J = !0, ce());
        else {
          var L = o(v);
          L !== null && ae(K, L.startTime - A);
        }
    }
    var J = !1, G = -1, oe = 5, Z = -1;
    function P() {
      return O ? !0 : !(n.unstable_now() - Z < oe);
    }
    function ie() {
      if (O = !1, J) {
        var A = n.unstable_now();
        Z = A;
        var L = !0;
        try {
          e: {
            z = !1, R && (R = !1, I(G), G = -1), w = !0;
            var ee = S;
            try {
              t: {
                for (Q(A), b = o(h); b !== null && !(b.expirationTime > A && P()); ) {
                  var me = b.callback;
                  if (typeof me == "function") {
                    b.callback = null, S = b.priorityLevel;
                    var ye = me(
                      b.expirationTime <= A
                    );
                    if (A = n.unstable_now(), typeof ye == "function") {
                      b.callback = ye, Q(A), L = !0;
                      break t;
                    }
                    b === o(h) && l(h), Q(A);
                  } else l(h);
                  b = o(h);
                }
                if (b !== null) L = !0;
                else {
                  var x = o(v);
                  x !== null && ae(
                    K,
                    x.startTime - A
                  ), L = !1;
                }
              }
              break e;
            } finally {
              b = null, S = ee, w = !1;
            }
            L = void 0;
          }
        } finally {
          L ? ce() : J = !1;
        }
      }
    }
    var ce;
    if (typeof q == "function")
      ce = function() {
        q(ie);
      };
    else if (typeof MessageChannel < "u") {
      var Ce = new MessageChannel(), te = Ce.port2;
      Ce.port1.onmessage = ie, ce = function() {
        te.postMessage(null);
      };
    } else
      ce = function() {
        X(ie, 0);
      };
    function ae(A, L) {
      G = X(function() {
        A(n.unstable_now());
      }, L);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, n.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < A ? Math.floor(1e3 / A) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_next = function(A) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = S;
      }
      var ee = S;
      S = L;
      try {
        return A();
      } finally {
        S = ee;
      }
    }, n.unstable_requestPaint = function() {
      O = !0;
    }, n.unstable_runWithPriority = function(A, L) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var ee = S;
      S = A;
      try {
        return L();
      } finally {
        S = ee;
      }
    }, n.unstable_scheduleCallback = function(A, L, ee) {
      var me = n.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? me + ee : me) : ee = me, A) {
        case 1:
          var ye = -1;
          break;
        case 2:
          ye = 250;
          break;
        case 5:
          ye = 1073741823;
          break;
        case 4:
          ye = 1e4;
          break;
        default:
          ye = 5e3;
      }
      return ye = ee + ye, A = {
        id: g++,
        callback: L,
        priorityLevel: A,
        startTime: ee,
        expirationTime: ye,
        sortIndex: -1
      }, ee > me ? (A.sortIndex = ee, a(v, A), o(h) === null && A === o(v) && (R ? (I(G), G = -1) : R = !0, ae(K, ee - me))) : (A.sortIndex = ye, a(h, A), z || w || (z = !0, J || (J = !0, ce()))), A;
    }, n.unstable_shouldYield = P, n.unstable_wrapCallback = function(A) {
      var L = S;
      return function() {
        var ee = S;
        S = L;
        try {
          return A.apply(this, arguments);
        } finally {
          S = ee;
        }
      };
    };
  })(Sc)), Sc;
}
var wh;
function db() {
  return wh || (wh = 1, bc.exports = cb()), bc.exports;
}
var wc = { exports: {} }, ve = {};
var kh;
function fb() {
  if (kh) return ve;
  kh = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function w(x) {
    return x === null || typeof x != "object" ? null : (x = S && x[S] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, O = {};
  function X(x, $, W) {
    this.props = x, this.context = $, this.refs = O, this.updater = W || z;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(x, $) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, $, "setState");
  }, X.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function I() {
  }
  I.prototype = X.prototype;
  function q(x, $, W) {
    this.props = x, this.context = $, this.refs = O, this.updater = W || z;
  }
  var Q = q.prototype = new I();
  Q.constructor = q, R(Q, X.prototype), Q.isPureReactComponent = !0;
  var K = Array.isArray;
  function J() {
  }
  var G = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function Z(x, $, W) {
    var ne = W.ref;
    return {
      $$typeof: n,
      type: x,
      key: $,
      ref: ne !== void 0 ? ne : null,
      props: W
    };
  }
  function P(x, $) {
    return Z(x.type, $, x.props);
  }
  function ie(x) {
    return typeof x == "object" && x !== null && x.$$typeof === n;
  }
  function ce(x) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(W) {
      return $[W];
    });
  }
  var Ce = /\/+/g;
  function te(x, $) {
    return typeof x == "object" && x !== null && x.key != null ? ce("" + x.key) : $.toString(36);
  }
  function ae(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(J, J) : (x.status = "pending", x.then(
          function($) {
            x.status === "pending" && (x.status = "fulfilled", x.value = $);
          },
          function($) {
            x.status === "pending" && (x.status = "rejected", x.reason = $);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function A(x, $, W, ne, _e) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var Se = !1;
    if (x === null) Se = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case n:
            case a:
              Se = !0;
              break;
            case g:
              return Se = x._init, A(
                Se(x._payload),
                $,
                W,
                ne,
                _e
              );
          }
      }
    if (Se)
      return _e = _e(x), Se = ne === "" ? "." + te(x, 0) : ne, K(_e) ? (W = "", Se != null && (W = Se.replace(Ce, "$&/") + "/"), A(_e, $, W, "", function(Bt) {
        return Bt;
      })) : _e != null && (ie(_e) && (_e = P(
        _e,
        W + (_e.key == null || x && x.key === _e.key ? "" : ("" + _e.key).replace(
          Ce,
          "$&/"
        ) + "/") + Se
      )), $.push(_e)), 1;
    Se = 0;
    var $e = ne === "" ? "." : ne + ":";
    if (K(x))
      for (var Ye = 0; Ye < x.length; Ye++)
        ne = x[Ye], pe = $e + te(ne, Ye), Se += A(
          ne,
          $,
          W,
          pe,
          _e
        );
    else if (Ye = w(x), typeof Ye == "function")
      for (x = Ye.call(x), Ye = 0; !(ne = x.next()).done; )
        ne = ne.value, pe = $e + te(ne, Ye++), Se += A(
          ne,
          $,
          W,
          pe,
          _e
        );
    else if (pe === "object") {
      if (typeof x.then == "function")
        return A(
          ae(x),
          $,
          W,
          ne,
          _e
        );
      throw $ = String(x), Error(
        "Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function L(x, $, W) {
    if (x == null) return x;
    var ne = [], _e = 0;
    return A(x, ne, "", "", function(pe) {
      return $.call(W, pe, _e++);
    }), ne;
  }
  function ee(x) {
    if (x._status === -1) {
      var $ = x._result;
      $ = $(), $.then(
        function(W) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = W);
        },
        function(W) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = W);
        }
      ), x._status === -1 && (x._status = 0, x._result = $);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var me = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var $ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent($)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, ye = {
    map: L,
    forEach: function(x, $, W) {
      L(
        x,
        function() {
          $.apply(this, arguments);
        },
        W
      );
    },
    count: function(x) {
      var $ = 0;
      return L(x, function() {
        $++;
      }), $;
    },
    toArray: function(x) {
      return L(x, function($) {
        return $;
      }) || [];
    },
    only: function(x) {
      if (!ie(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return ve.Activity = b, ve.Children = ye, ve.Component = X, ve.Fragment = o, ve.Profiler = s, ve.PureComponent = q, ve.StrictMode = l, ve.Suspense = h, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return G.H.useMemoCache(x);
    }
  }, ve.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(x, $, W) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var ne = R({}, x.props), _e = x.key;
    if ($ != null)
      for (pe in $.key !== void 0 && (_e = "" + $.key), $)
        !oe.call($, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && $.ref === void 0 || (ne[pe] = $[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) ne.children = W;
    else if (1 < pe) {
      for (var Se = Array(pe), $e = 0; $e < pe; $e++)
        Se[$e] = arguments[$e + 2];
      ne.children = Se;
    }
    return Z(x.type, _e, ne);
  }, ve.createContext = function(x) {
    return x = {
      $$typeof: f,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: d,
      _context: x
    }, x;
  }, ve.createElement = function(x, $, W) {
    var ne, _e = {}, pe = null;
    if ($ != null)
      for (ne in $.key !== void 0 && (pe = "" + $.key), $)
        oe.call($, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (_e[ne] = $[ne]);
    var Se = arguments.length - 2;
    if (Se === 1) _e.children = W;
    else if (1 < Se) {
      for (var $e = Array(Se), Ye = 0; Ye < Se; Ye++)
        $e[Ye] = arguments[Ye + 2];
      _e.children = $e;
    }
    if (x && x.defaultProps)
      for (ne in Se = x.defaultProps, Se)
        _e[ne] === void 0 && (_e[ne] = Se[ne]);
    return Z(x, pe, _e);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, ve.isValidElement = ie, ve.lazy = function(x) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: x },
      _init: ee
    };
  }, ve.memo = function(x, $) {
    return {
      $$typeof: v,
      type: x,
      compare: $ === void 0 ? null : $
    };
  }, ve.startTransition = function(x) {
    var $ = G.T, W = {};
    G.T = W;
    try {
      var ne = x(), _e = G.S;
      _e !== null && _e(W, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(J, me);
    } catch (pe) {
      me(pe);
    } finally {
      $ !== null && W.types !== null && ($.types = W.types), G.T = $;
    }
  }, ve.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, ve.use = function(x) {
    return G.H.use(x);
  }, ve.useActionState = function(x, $, W) {
    return G.H.useActionState(x, $, W);
  }, ve.useCallback = function(x, $) {
    return G.H.useCallback(x, $);
  }, ve.useContext = function(x) {
    return G.H.useContext(x);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(x, $) {
    return G.H.useDeferredValue(x, $);
  }, ve.useEffect = function(x, $) {
    return G.H.useEffect(x, $);
  }, ve.useEffectEvent = function(x) {
    return G.H.useEffectEvent(x);
  }, ve.useId = function() {
    return G.H.useId();
  }, ve.useImperativeHandle = function(x, $, W) {
    return G.H.useImperativeHandle(x, $, W);
  }, ve.useInsertionEffect = function(x, $) {
    return G.H.useInsertionEffect(x, $);
  }, ve.useLayoutEffect = function(x, $) {
    return G.H.useLayoutEffect(x, $);
  }, ve.useMemo = function(x, $) {
    return G.H.useMemo(x, $);
  }, ve.useOptimistic = function(x, $) {
    return G.H.useOptimistic(x, $);
  }, ve.useReducer = function(x, $, W) {
    return G.H.useReducer(x, $, W);
  }, ve.useRef = function(x) {
    return G.H.useRef(x);
  }, ve.useState = function(x) {
    return G.H.useState(x);
  }, ve.useSyncExternalStore = function(x, $, W) {
    return G.H.useSyncExternalStore(
      x,
      $,
      W
    );
  }, ve.useTransition = function() {
    return G.H.useTransition();
  }, ve.version = "19.2.8", ve;
}
var xh;
function Fc() {
  return xh || (xh = 1, wc.exports = fb()), wc.exports;
}
var kc = { exports: {} }, bt = {};
var zh;
function mb() {
  if (zh) return bt;
  zh = 1;
  var n = Fc();
  function a(h) {
    var v = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var l = {
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
  return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, bt.createPortal = function(h, v) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(a(299));
    return d(h, v, null, g);
  }, bt.flushSync = function(h) {
    var v = f.T, g = l.p;
    try {
      if (f.T = null, l.p = 2, h) return h();
    } finally {
      f.T = v, l.p = g, l.d.f();
    }
  }, bt.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, l.d.C(h, v));
  }, bt.prefetchDNS = function(h) {
    typeof h == "string" && l.d.D(h);
  }, bt.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var g = v.as, b = m(g, v.crossOrigin), S = typeof v.integrity == "string" ? v.integrity : void 0, w = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      g === "style" ? l.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: S,
          fetchPriority: w
        }
      ) : g === "script" && l.d.X(h, {
        crossOrigin: b,
        integrity: S,
        fetchPriority: w,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, bt.preinitModule = function(h, v) {
    if (typeof h == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var g = m(
            v.as,
            v.crossOrigin
          );
          l.d.M(h, {
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && l.d.M(h);
  }, bt.preload = function(h, v) {
    if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var g = v.as, b = m(g, v.crossOrigin);
      l.d.L(h, g, {
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
  }, bt.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var g = m(v.as, v.crossOrigin);
        l.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: g,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else l.d.m(h);
  }, bt.requestFormReset = function(h) {
    l.d.r(h);
  }, bt.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, bt.useFormState = function(h, v, g) {
    return f.H.useFormState(h, v, g);
  }, bt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, bt.version = "19.2.8", bt;
}
var jh;
function pb() {
  if (jh) return kc.exports;
  jh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), kc.exports = mb(), kc.exports;
}
var Th;
function hb() {
  if (Th) return Oo;
  Th = 1;
  var n = db(), a = Fc(), o = pb();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
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
      throw Error(l(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var i = e, r = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (r = u.return, r !== null) {
          i = r;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === i) return h(u), e;
          if (c === r) return h(u), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== r.return) i = u, r = c;
      else {
        for (var _ = !1, y = u.child; y; ) {
          if (y === i) {
            _ = !0, i = u, r = c;
            break;
          }
          if (y === r) {
            _ = !0, r = u, i = c;
            break;
          }
          y = y.sibling;
        }
        if (!_) {
          for (y = c.child; y; ) {
            if (y === i) {
              _ = !0, i = c, r = u;
              break;
            }
            if (y === r) {
              _ = !0, r = c, i = u;
              break;
            }
            y = y.sibling;
          }
          if (!_) throw Error(l(189));
        }
      }
      if (i.alternate !== r) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : t;
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
  var b = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), P = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ce = /* @__PURE__ */ Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case X:
        return "Profiler";
      case O:
        return "StrictMode";
      case K:
        return "Suspense";
      case J:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
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
  var ae = Array.isArray, A = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], ye = -1;
  function x(e) {
    return { current: e };
  }
  function $(e) {
    0 > ye || (e.current = me[ye], me[ye] = null, ye--);
  }
  function W(e, t) {
    ye++, me[ye] = e.current, e.current = t;
  }
  var ne = x(null), _e = x(null), pe = x(null), Se = x(null);
  function $e(e, t) {
    switch (W(pe, t), W(_e, e), W(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Xp(t), e = qp(t, e);
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
    $(ne), W(ne, e);
  }
  function Ye() {
    $(ne), $(_e), $(pe);
  }
  function Bt(e) {
    e.memoizedState !== null && W(Se, e);
    var t = ne.current, i = qp(t, e.type);
    t !== i && (W(_e, e), W(ne, i));
  }
  function It(e) {
    _e.current === e && ($(ne), $(_e)), Se.current === e && ($(Se), To._currentValue = ee);
  }
  var Cn, rn;
  function gt(e) {
    if (Cn === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Cn = t && t[1] || "", rn = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Cn + e + rn;
  }
  var Zi = !1;
  function Za(e, t) {
    if (!e || Zi) return "";
    Zi = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (N) {
                  var C = N;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (N) {
                  C = N;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                C = N;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (N) {
            if (N && C && typeof N.stack == "string")
              return [N.stack, C.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = r.DetermineComponentFrameRoot(), _ = c[0], y = c[1];
      if (_ && y) {
        var k = _.split(`
`), M = y.split(`
`);
        for (u = r = 0; r < k.length && !k[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; u < M.length && !M[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (r === k.length || u === M.length)
          for (r = k.length - 1, u = M.length - 1; 1 <= r && 0 <= u && k[r] !== M[u]; )
            u--;
        for (; 1 <= r && 0 <= u; r--, u--)
          if (k[r] !== M[u]) {
            if (r !== 1 || u !== 1)
              do
                if (r--, u--, 0 > u || k[r] !== M[u]) {
                  var U = `
` + k[r].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                }
              while (1 <= r && 0 <= u);
            break;
          }
      }
    } finally {
      Zi = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? gt(i) : "";
  }
  function Ua(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gt(e.type);
      case 16:
        return gt("Lazy");
      case 13:
        return e.child !== t && t !== null ? gt("Suspense Fallback") : gt("Suspense");
      case 19:
        return gt("SuspenseList");
      case 0:
      case 15:
        return Za(e.type, !1);
      case 11:
        return Za(e.type.render, !1);
      case 1:
        return Za(e.type, !0);
      case 31:
        return gt("Activity");
      default:
        return "";
    }
  }
  function $a(e) {
    try {
      var t = "", i = null;
      do
        t += Ua(e, i), i = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var Ya = Object.prototype.hasOwnProperty, la = n.unstable_scheduleCallback, Ui = n.unstable_cancelCallback, es = n.unstable_shouldYield, tr = n.unstable_requestPaint, St = n.unstable_now, nr = n.unstable_getCurrentPriorityLevel, $i = n.unstable_ImmediatePriority, ar = n.unstable_UserBlockingPriority, Ba = n.unstable_NormalPriority, sa = n.unstable_LowPriority, ir = n.unstable_IdlePriority, ts = n.log, ns = n.unstable_setDisableYieldValue, ua = null, wt = null;
  function ln(e) {
    if (typeof ts == "function" && ns(e), wt && typeof wt.setStrictMode == "function")
      try {
        wt.setStrictMode(ua, e);
      } catch {
      }
  }
  var ut = Math.clz32 ? Math.clz32 : os, as = Math.log, is = Math.LN2;
  function os(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (as(e) / is | 0) | 0;
  }
  var Ha = 256, V = 262144, ue = 4194304;
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
  function et(e, t, i) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var u = 0, c = e.suspendedLanes, _ = e.pingedLanes;
    e = e.warmLanes;
    var y = r & 134217727;
    return y !== 0 ? (r = y & ~c, r !== 0 ? u = re(r) : (_ &= y, _ !== 0 ? u = re(_) : i || (i = y & ~e, i !== 0 && (u = re(i))))) : (y = r & ~c, y !== 0 ? u = re(y) : _ !== 0 ? u = re(_) : i || (i = r & ~e, i !== 0 && (u = re(i)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, i = t & -t, c >= i || c === 32 && (i & 4194048) !== 0) ? t : u;
  }
  function Yi(e, t) {
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
  function wd() {
    var e = ue;
    return ue <<= 1, (ue & 62914560) === 0 && (ue = 4194304), e;
  }
  function rs(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Pv(e, t, i, r, u, c) {
    var _ = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var y = e.entanglements, k = e.expirationTimes, M = e.hiddenUpdates;
    for (i = _ & ~i; 0 < i; ) {
      var U = 31 - ut(i), H = 1 << U;
      y[U] = 0, k[U] = -1;
      var C = M[U];
      if (C !== null)
        for (M[U] = null, U = 0; U < C.length; U++) {
          var N = C[U];
          N !== null && (N.lane &= -536870913);
        }
      i &= ~H;
    }
    r !== 0 && kd(e, r, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(_ & ~t));
  }
  function kd(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - ut(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | i & 261930;
  }
  function xd(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var r = 31 - ut(i), u = 1 << r;
      u & t | e[r] & t && (e[r] |= t), i &= ~u;
    }
  }
  function zd(e, t) {
    var i = t & -t;
    return i = (i & 42) !== 0 ? 1 : ls(i), (i & (e.suspendedLanes | t)) !== 0 ? 0 : i;
  }
  function ls(e) {
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
  function ss(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jd() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fh(e.type));
  }
  function Td(e, t) {
    var i = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = i;
    }
  }
  var On = Math.random().toString(36).slice(2), ft = "__reactFiber$" + On, zt = "__reactProps$" + On, Xa = "__reactContainer$" + On, us = "__reactEvents$" + On, Wv = "__reactListeners$" + On, Fv = "__reactHandles$" + On, Ad = "__reactResources$" + On, Hi = "__reactMarker$" + On;
  function cs(e) {
    delete e[ft], delete e[zt], delete e[us], delete e[Wv], delete e[Fv];
  }
  function qa(e) {
    var t = e[ft];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Xa] || i[ft]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = Pp(e); e !== null; ) {
            if (i = e[ft]) return i;
            e = Pp(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function La(e) {
    if (e = e[ft] || e[Xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Xi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Va(e) {
    var t = e[Ad];
    return t || (t = e[Ad] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[Hi] = !0;
  }
  var Ed = /* @__PURE__ */ new Set(), Md = {};
  function ca(e, t) {
    Ga(e, t), Ga(e + "Capture", t);
  }
  function Ga(e, t) {
    for (Md[e] = t, e = 0; e < t.length; e++)
      Ed.add(t[e]);
  }
  var Iv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cd = {}, Od = {};
  function ey(e) {
    return Ya.call(Od, e) ? !0 : Ya.call(Cd, e) ? !1 : Iv.test(e) ? Od[e] = !0 : (Cd[e] = !0, !1);
  }
  function or(e, t, i) {
    if (ey(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function rr(e, t, i) {
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
  function fn(e, t, i, r) {
    if (r === null) e.removeAttribute(i);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + r);
    }
  }
  function Ht(e) {
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
  function Nd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ty(e, t, i) {
    var r = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var u = r.get, c = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(_) {
          i = "" + _, c.call(this, _);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return i;
        },
        setValue: function(_) {
          i = "" + _;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ds(e) {
    if (!e._valueTracker) {
      var t = Nd(e) ? "checked" : "value";
      e._valueTracker = ty(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Dd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), r = "";
    return e && (r = Nd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== i ? (t.setValue(e), !0) : !1;
  }
  function lr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ny = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      ny,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function fs(e, t, i, r, u, c, _, y) {
    e.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.type = _ : e.removeAttribute("type"), t != null ? _ === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ht(t)) : e.value !== "" + Ht(t) && (e.value = "" + Ht(t)) : _ !== "submit" && _ !== "reset" || e.removeAttribute("value"), t != null ? ms(e, _, Ht(t)) : i != null ? ms(e, _, Ht(i)) : r != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ht(y) : e.removeAttribute("name");
  }
  function Rd(e, t, i, r, u, c, _, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || i != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        ds(e);
        return;
      }
      i = i != null ? "" + Ht(i) : "", t = t != null ? "" + Ht(t) : i, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? u, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = y ? e.checked : !!r, e.defaultChecked = !!r, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (e.name = _), ds(e);
  }
  function ms(e, t, i) {
    t === "number" && lr(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Qa(e, t, i, r) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < i.length; u++)
        t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && r && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Ht(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          e[u].selected = !0, r && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zd(e, t, i) {
    if (t != null && (t = "" + Ht(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + Ht(i) : "";
  }
  function Ud(e, t, i, r) {
    if (t == null) {
      if (r != null) {
        if (i != null) throw Error(l(92));
        if (ae(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        i = r;
      }
      i == null && (i = ""), t = i;
    }
    i = Ht(t), e.defaultValue = i, r = e.textContent, r === i && r !== "" && r !== null && (e.value = r), ds(e);
  }
  function Ka(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
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
  function $d(e, t, i) {
    var r = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, i) : typeof i != "number" || i === 0 || ay.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function Yd(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, i != null) {
      for (var r in i)
        !i.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var u in t)
        r = t[u], t.hasOwnProperty(u) && i[u] !== r && $d(e, u, r);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && $d(e, c, t[c]);
  }
  function ps(e) {
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
  ]), oy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sr(e) {
    return oy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function mn() {
  }
  var hs = null;
  function _s(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ja = null, Pa = null;
  function Bd(e) {
    var t = La(e);
    if (t && (e = t.stateNode)) {
      var i = e[zt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (fs(
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
              var r = i[t];
              if (r !== e && r.form === e.form) {
                var u = r[zt] || null;
                if (!u) throw Error(l(90));
                fs(
                  r,
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
              r = i[t], r.form === e.form && Dd(r);
          }
          break e;
        case "textarea":
          Zd(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && Qa(e, !!i.multiple, t, !1);
      }
    }
  }
  var vs = !1;
  function Hd(e, t, i) {
    if (vs) return e(t, i);
    vs = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (vs = !1, (Ja !== null || Pa !== null) && (Jr(), Ja && (t = Ja, e = Pa, Pa = Ja = null, Bd(t), e)))
        for (t = 0; t < e.length; t++) Bd(e[t]);
    }
  }
  function qi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var r = i[zt] || null;
    if (r === null) return null;
    i = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        l(231, t, typeof i)
      );
    return i;
  }
  var pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ys = !1;
  if (pn)
    try {
      var Li = {};
      Object.defineProperty(Li, "passive", {
        get: function() {
          ys = !0;
        }
      }), window.addEventListener("test", Li, Li), window.removeEventListener("test", Li, Li);
    } catch {
      ys = !1;
    }
  var Nn = null, gs = null, ur = null;
  function Xd() {
    if (ur) return ur;
    var e, t = gs, i = t.length, r, u = "value" in Nn ? Nn.value : Nn.textContent, c = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++) ;
    var _ = i - e;
    for (r = 1; r <= _ && t[i - r] === u[c - r]; r++) ;
    return ur = u.slice(e, 1 < r ? 1 - r : void 0);
  }
  function cr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function dr() {
    return !0;
  }
  function qd() {
    return !1;
  }
  function jt(e) {
    function t(i, r, u, c, _) {
      this._reactName = i, this._targetInst = u, this.type = r, this.nativeEvent = c, this.target = _, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (i = e[y], this[y] = i ? i(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? dr : qd, this.isPropagationStopped = qd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = dr);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = dr);
      },
      persist: function() {
      },
      isPersistent: dr
    }), t;
  }
  var da = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, fr = jt(da), Vi = b({}, da, { view: 0, detail: 0 }), ry = jt(Vi), bs, Ss, Gi, mr = b({}, Vi, {
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
    getModifierState: ks,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (bs = e.screenX - Gi.screenX, Ss = e.screenY - Gi.screenY) : Ss = bs = 0, Gi = e), bs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ss;
    }
  }), Ld = jt(mr), ly = b({}, mr, { dataTransfer: 0 }), sy = jt(ly), uy = b({}, Vi, { relatedTarget: 0 }), ws = jt(uy), cy = b({}, da, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dy = jt(cy), fy = b({}, da, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), my = jt(fy), py = b({}, da, { data: 0 }), Vd = jt(py), hy = {
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
  }, _y = {
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
  }, vy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function yy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vy[e]) ? !!t[e] : !1;
  }
  function ks() {
    return yy;
  }
  var gy = b({}, Vi, {
    key: function(e) {
      if (e.key) {
        var t = hy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _y[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ks,
    charCode: function(e) {
      return e.type === "keypress" ? cr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), by = jt(gy), Sy = b({}, mr, {
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
  }), Gd = jt(Sy), wy = b({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ks
  }), ky = jt(wy), xy = b({}, da, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zy = jt(xy), jy = b({}, mr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ty = jt(jy), Ay = b({}, da, {
    newState: 0,
    oldState: 0
  }), Ey = jt(Ay), My = [9, 13, 27, 32], xs = pn && "CompositionEvent" in window, Qi = null;
  pn && "documentMode" in document && (Qi = document.documentMode);
  var Cy = pn && "TextEvent" in window && !Qi, Qd = pn && (!xs || Qi && 8 < Qi && 11 >= Qi), Kd = " ", Jd = !1;
  function Pd(e, t) {
    switch (e) {
      case "keyup":
        return My.indexOf(t.keyCode) !== -1;
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
  function Wd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Wa = !1;
  function Oy(e, t) {
    switch (e) {
      case "compositionend":
        return Wd(t);
      case "keypress":
        return t.which !== 32 ? null : (Jd = !0, Kd);
      case "textInput":
        return e = t.data, e === Kd && Jd ? null : e;
      default:
        return null;
    }
  }
  function Ny(e, t) {
    if (Wa)
      return e === "compositionend" || !xs && Pd(e, t) ? (e = Xd(), ur = gs = Nn = null, Wa = !1, e) : null;
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
        return Qd && t.locale !== "ko" ? null : t.data;
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
  function Fd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dy[e.type] : t === "textarea";
  }
  function Id(e, t, i, r) {
    Ja ? Pa ? Pa.push(r) : Pa = [r] : Ja = r, t = nl(t, "onChange"), 0 < t.length && (i = new fr(
      "onChange",
      "change",
      null,
      i,
      r
    ), e.push({ event: i, listeners: t }));
  }
  var Ki = null, Ji = null;
  function Ry(e) {
    Zp(e, 0);
  }
  function pr(e) {
    var t = Xi(e);
    if (Dd(t)) return e;
  }
  function ef(e, t) {
    if (e === "change") return t;
  }
  var tf = !1;
  if (pn) {
    var zs;
    if (pn) {
      var js = "oninput" in document;
      if (!js) {
        var nf = document.createElement("div");
        nf.setAttribute("oninput", "return;"), js = typeof nf.oninput == "function";
      }
      zs = js;
    } else zs = !1;
    tf = zs && (!document.documentMode || 9 < document.documentMode);
  }
  function af() {
    Ki && (Ki.detachEvent("onpropertychange", of), Ji = Ki = null);
  }
  function of(e) {
    if (e.propertyName === "value" && pr(Ji)) {
      var t = [];
      Id(
        t,
        Ji,
        e,
        _s(e)
      ), Hd(Ry, t);
    }
  }
  function Zy(e, t, i) {
    e === "focusin" ? (af(), Ki = t, Ji = i, Ki.attachEvent("onpropertychange", of)) : e === "focusout" && af();
  }
  function Uy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return pr(Ji);
  }
  function $y(e, t) {
    if (e === "click") return pr(t);
  }
  function Yy(e, t) {
    if (e === "input" || e === "change")
      return pr(t);
  }
  function By(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : By;
  function Pi(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), r = Object.keys(t);
    if (i.length !== r.length) return !1;
    for (r = 0; r < i.length; r++) {
      var u = i[r];
      if (!Ya.call(t, u) || !Nt(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function rf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function lf(e, t) {
    var i = rf(e);
    e = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (r = e + i.textContent.length, e <= t && r >= t)
          return { node: i, offset: t - e };
        e = r;
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
      i = rf(i);
    }
  }
  function sf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function uf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = lr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = lr(e.document);
    }
    return t;
  }
  function Ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Hy = pn && "documentMode" in document && 11 >= document.documentMode, Fa = null, As = null, Wi = null, Es = !1;
  function cf(e, t, i) {
    var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Es || Fa == null || Fa !== lr(r) || (r = Fa, "selectionStart" in r && Ts(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Wi && Pi(Wi, r) || (Wi = r, r = nl(As, "onSelect"), 0 < r.length && (t = new fr(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: r }), t.target = Fa)));
  }
  function fa(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Ia = {
    animationend: fa("Animation", "AnimationEnd"),
    animationiteration: fa("Animation", "AnimationIteration"),
    animationstart: fa("Animation", "AnimationStart"),
    transitionrun: fa("Transition", "TransitionRun"),
    transitionstart: fa("Transition", "TransitionStart"),
    transitioncancel: fa("Transition", "TransitionCancel"),
    transitionend: fa("Transition", "TransitionEnd")
  }, Ms = {}, df = {};
  pn && (df = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function ma(e) {
    if (Ms[e]) return Ms[e];
    if (!Ia[e]) return e;
    var t = Ia[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in df)
        return Ms[e] = t[i];
    return e;
  }
  var ff = ma("animationend"), mf = ma("animationiteration"), pf = ma("animationstart"), Xy = ma("transitionrun"), qy = ma("transitionstart"), Ly = ma("transitioncancel"), hf = ma("transitionend"), _f = /* @__PURE__ */ new Map(), Cs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Cs.push("scrollEnd");
  function en(e, t) {
    _f.set(e, t), ca(t, [e]);
  }
  var hr = typeof reportError == "function" ? reportError : function(e) {
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
  }, qt = [], ei = 0, Os = 0;
  function _r() {
    for (var e = ei, t = Os = ei = 0; t < e; ) {
      var i = qt[t];
      qt[t++] = null;
      var r = qt[t];
      qt[t++] = null;
      var u = qt[t];
      qt[t++] = null;
      var c = qt[t];
      if (qt[t++] = null, r !== null && u !== null) {
        var _ = r.pending;
        _ === null ? u.next = u : (u.next = _.next, _.next = u), r.pending = u;
      }
      c !== 0 && vf(i, u, c);
    }
  }
  function vr(e, t, i, r) {
    qt[ei++] = e, qt[ei++] = t, qt[ei++] = i, qt[ei++] = r, Os |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function Ns(e, t, i, r) {
    return vr(e, t, i, r), yr(e);
  }
  function pa(e, t) {
    return vr(e, null, null, t), yr(e);
  }
  function vf(e, t, i) {
    e.lanes |= i;
    var r = e.alternate;
    r !== null && (r.lanes |= i);
    for (var u = !1, c = e.return; c !== null; )
      c.childLanes |= i, r = c.alternate, r !== null && (r.childLanes |= i), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - ut(i), e = c.hiddenUpdates, r = e[u], r === null ? e[u] = [t] : r.push(t), t.lane = i | 536870912), c) : null;
  }
  function yr(e) {
    if (50 < bo)
      throw bo = 0, Xu = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function Vy(e, t, i, r) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, i, r) {
    return new Vy(e, t, i, r);
  }
  function Ds(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hn(e, t) {
    var i = e.alternate;
    return i === null ? (i = Dt(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function yf(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function gr(e, t, i, r, u, c) {
    var _ = 0;
    if (r = e, typeof e == "function") Ds(e) && (_ = 1);
    else if (typeof e == "string")
      _ = Pg(
        e,
        i,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return e = Dt(31, i, t, u), e.elementType = Z, e.lanes = c, e;
        case R:
          return ha(i.children, u, c, t);
        case O:
          _ = 8, u |= 24;
          break;
        case X:
          return e = Dt(12, i, t, u | 2), e.elementType = X, e.lanes = c, e;
        case K:
          return e = Dt(13, i, t, u), e.elementType = K, e.lanes = c, e;
        case J:
          return e = Dt(19, i, t, u), e.elementType = J, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                _ = 10;
                break e;
              case I:
                _ = 9;
                break e;
              case Q:
                _ = 11;
                break e;
              case G:
                _ = 14;
                break e;
              case oe:
                _ = 16, r = null;
                break e;
            }
          _ = 29, i = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = Dt(_, i, t, u), t.elementType = e, t.type = r, t.lanes = c, t;
  }
  function ha(e, t, i, r) {
    return e = Dt(7, e, r, t), e.lanes = i, e;
  }
  function Rs(e, t, i) {
    return e = Dt(6, e, null, t), e.lanes = i, e;
  }
  function gf(e) {
    var t = Dt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Zs(e, t, i) {
    return t = Dt(
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
  var bf = /* @__PURE__ */ new WeakMap();
  function Lt(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = bf.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: $a(t)
      }, bf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: $a(t)
    };
  }
  var ni = [], ai = 0, br = null, Fi = 0, Vt = [], Gt = 0, Dn = null, sn = 1, un = "";
  function _n(e, t) {
    ni[ai++] = Fi, ni[ai++] = br, br = e, Fi = t;
  }
  function Sf(e, t, i) {
    Vt[Gt++] = sn, Vt[Gt++] = un, Vt[Gt++] = Dn, Dn = e;
    var r = sn;
    e = un;
    var u = 32 - ut(r) - 1;
    r &= ~(1 << u), i += 1;
    var c = 32 - ut(t) + u;
    if (30 < c) {
      var _ = u - u % 5;
      c = (r & (1 << _) - 1).toString(32), r >>= _, u -= _, sn = 1 << 32 - ut(t) + u | i << u | r, un = c + e;
    } else
      sn = 1 << c | i << u | r, un = e;
  }
  function Us(e) {
    e.return !== null && (_n(e, 1), Sf(e, 1, 0));
  }
  function $s(e) {
    for (; e === br; )
      br = ni[--ai], ni[ai] = null, Fi = ni[--ai], ni[ai] = null;
    for (; e === Dn; )
      Dn = Vt[--Gt], Vt[Gt] = null, un = Vt[--Gt], Vt[Gt] = null, sn = Vt[--Gt], Vt[Gt] = null;
  }
  function wf(e, t) {
    Vt[Gt++] = sn, Vt[Gt++] = un, Vt[Gt++] = Dn, sn = t.id, un = t.overflow, Dn = e;
  }
  var mt = null, Ve = null, Ee = !1, Rn = null, Qt = !1, Ys = Error(l(519));
  function Zn(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ii(Lt(t, e)), Ys;
  }
  function kf(e) {
    var t = e.stateNode, i = e.type, r = e.memoizedProps;
    switch (t[ft] = e, t[zt] = r, i) {
      case "dialog":
        ke("cancel", t), ke("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ke("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < wo.length; i++)
          ke(wo[i], t);
        break;
      case "source":
        ke("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ke("error", t), ke("load", t);
        break;
      case "details":
        ke("toggle", t);
        break;
      case "input":
        ke("invalid", t), Rd(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        );
        break;
      case "select":
        ke("invalid", t);
        break;
      case "textarea":
        ke("invalid", t), Ud(t, r.value, r.defaultValue, r.children);
    }
    i = r.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || r.suppressHydrationWarning === !0 || Bp(t.textContent, i) ? (r.popover != null && (ke("beforetoggle", t), ke("toggle", t)), r.onScroll != null && ke("scroll", t), r.onScrollEnd != null && ke("scrollend", t), r.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || Zn(e, !0);
  }
  function xf(e) {
    for (mt = e.return; mt; )
      switch (mt.tag) {
        case 5:
        case 31:
        case 13:
          Qt = !1;
          return;
        case 27:
        case 3:
          Qt = !0;
          return;
        default:
          mt = mt.return;
      }
  }
  function ii(e) {
    if (e !== mt) return !1;
    if (!Ee) return xf(e), Ee = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || ac(e.type, e.memoizedProps)), i = !i), i && Ve && Zn(e), xf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Jp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ve = Jp(e);
    } else
      t === 27 ? (t = Ve, Pn(e.type) ? (e = sc, sc = null, Ve = e) : Ve = t) : Ve = mt ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    Ve = mt = null, Ee = !1;
  }
  function Bs() {
    var e = Rn;
    return e !== null && (Mt === null ? Mt = e : Mt.push.apply(
      Mt,
      e
    ), Rn = null), e;
  }
  function Ii(e) {
    Rn === null ? Rn = [e] : Rn.push(e);
  }
  var Hs = x(null), va = null, vn = null;
  function Un(e, t, i) {
    W(Hs, t._currentValue), t._currentValue = i;
  }
  function yn(e) {
    e._currentValue = Hs.current, $(Hs);
  }
  function Xs(e, t, i) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function qs(e, t, i, r) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var _ = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = u;
          for (var k = 0; k < t.length; k++)
            if (y.context === t[k]) {
              c.lanes |= i, y = c.alternate, y !== null && (y.lanes |= i), Xs(
                c.return,
                i,
                e
              ), r || (_ = null);
              break e;
            }
          c = y.next;
        }
      } else if (u.tag === 18) {
        if (_ = u.return, _ === null) throw Error(l(341));
        _.lanes |= i, c = _.alternate, c !== null && (c.lanes |= i), Xs(_, i, e), _ = null;
      } else _ = u.child;
      if (_ !== null) _.return = u;
      else
        for (_ = u; _ !== null; ) {
          if (_ === e) {
            _ = null;
            break;
          }
          if (u = _.sibling, u !== null) {
            u.return = _.return, _ = u;
            break;
          }
          _ = _.return;
        }
      u = _;
    }
  }
  function oi(e, t, i, r) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var _ = u.alternate;
        if (_ === null) throw Error(l(387));
        if (_ = _.memoizedProps, _ !== null) {
          var y = u.type;
          Nt(u.pendingProps.value, _.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (u === Se.current) {
        if (_ = u.alternate, _ === null) throw Error(l(387));
        _.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(To) : e = [To]);
      }
      u = u.return;
    }
    e !== null && qs(
      t,
      e,
      i,
      r
    ), t.flags |= 262144;
  }
  function Sr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ya(e) {
    va = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return zf(va, e);
  }
  function wr(e, t) {
    return va === null && ya(e), zf(e, t);
  }
  function zf(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, vn === null) {
      if (e === null) throw Error(l(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return i;
  }
  var Gy = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(i, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Qy = n.unstable_scheduleCallback, Ky = n.unstable_NormalPriority, it = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ls() {
    return {
      controller: new Gy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function eo(e) {
    e.refCount--, e.refCount === 0 && Qy(Ky, function() {
      e.controller.abort();
    });
  }
  var to = null, Vs = 0, ri = 0, li = null;
  function Jy(e, t) {
    if (to === null) {
      var i = to = [];
      Vs = 0, ri = Ku(), li = {
        status: "pending",
        value: void 0,
        then: function(r) {
          i.push(r);
        }
      };
    }
    return Vs++, t.then(jf, jf), t;
  }
  function jf() {
    if (--Vs === 0 && to !== null) {
      li !== null && (li.status = "fulfilled");
      var e = to;
      to = null, ri = 0, li = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Py(e, t) {
    var i = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        i.push(u);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var u = 0; u < i.length; u++) (0, i[u])(t);
      },
      function(u) {
        for (r.status = "rejected", r.reason = u, u = 0; u < i.length; u++)
          (0, i[u])(void 0);
      }
    ), r;
  }
  var Tf = A.S;
  A.S = function(e, t) {
    cp = St(), typeof t == "object" && t !== null && typeof t.then == "function" && Jy(e, t), Tf !== null && Tf(e, t);
  };
  var ga = x(null);
  function Gs() {
    var e = ga.current;
    return e !== null ? e : Le.pooledCache;
  }
  function kr(e, t) {
    t === null ? W(ga, ga.current) : W(ga, t.pool);
  }
  function Af() {
    var e = Gs();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var si = Error(l(460)), Qs = Error(l(474)), xr = Error(l(542)), zr = { then: function() {
  } };
  function Ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mf(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(mn, mn), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Of(e), e;
      default:
        if (typeof t.status == "string") t.then(mn, mn);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Of(e), e;
        }
        throw Sa = t, si;
    }
  }
  function ba(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Sa = i, si) : i;
    }
  }
  var Sa = null;
  function Cf() {
    if (Sa === null) throw Error(l(459));
    var e = Sa;
    return Sa = null, e;
  }
  function Of(e) {
    if (e === si || e === xr)
      throw Error(l(483));
  }
  var ui = null, no = 0;
  function jr(e) {
    var t = no;
    return no += 1, ui === null && (ui = []), Mf(ui, e, t);
  }
  function ao(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Tr(e, t) {
    throw t.$$typeof === S ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Nf(e) {
    function t(T, j) {
      if (e) {
        var E = T.deletions;
        E === null ? (T.deletions = [j], T.flags |= 16) : E.push(j);
      }
    }
    function i(T, j) {
      if (!e) return null;
      for (; j !== null; )
        t(T, j), j = j.sibling;
      return null;
    }
    function r(T) {
      for (var j = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? j.set(T.key, T) : j.set(T.index, T), T = T.sibling;
      return j;
    }
    function u(T, j) {
      return T = hn(T, j), T.index = 0, T.sibling = null, T;
    }
    function c(T, j, E) {
      return T.index = E, e ? (E = T.alternate, E !== null ? (E = E.index, E < j ? (T.flags |= 67108866, j) : E) : (T.flags |= 67108866, j)) : (T.flags |= 1048576, j);
    }
    function _(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, j, E, Y) {
      return j === null || j.tag !== 6 ? (j = Rs(E, T.mode, Y), j.return = T, j) : (j = u(j, E), j.return = T, j);
    }
    function k(T, j, E, Y) {
      var de = E.type;
      return de === R ? U(
        T,
        j,
        E.props.children,
        Y,
        E.key
      ) : j !== null && (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && ba(de) === j.type) ? (j = u(j, E.props), ao(j, E), j.return = T, j) : (j = gr(
        E.type,
        E.key,
        E.props,
        null,
        T.mode,
        Y
      ), ao(j, E), j.return = T, j);
    }
    function M(T, j, E, Y) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== E.containerInfo || j.stateNode.implementation !== E.implementation ? (j = Zs(E, T.mode, Y), j.return = T, j) : (j = u(j, E.children || []), j.return = T, j);
    }
    function U(T, j, E, Y, de) {
      return j === null || j.tag !== 7 ? (j = ha(
        E,
        T.mode,
        Y,
        de
      ), j.return = T, j) : (j = u(j, E), j.return = T, j);
    }
    function H(T, j, E) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Rs(
          "" + j,
          T.mode,
          E
        ), j.return = T, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            return E = gr(
              j.type,
              j.key,
              j.props,
              null,
              T.mode,
              E
            ), ao(E, j), E.return = T, E;
          case z:
            return j = Zs(
              j,
              T.mode,
              E
            ), j.return = T, j;
          case oe:
            return j = ba(j), H(T, j, E);
        }
        if (ae(j) || ce(j))
          return j = ha(
            j,
            T.mode,
            E,
            null
          ), j.return = T, j;
        if (typeof j.then == "function")
          return H(T, jr(j), E);
        if (j.$$typeof === q)
          return H(
            T,
            wr(T, j),
            E
          );
        Tr(T, j);
      }
      return null;
    }
    function C(T, j, E, Y) {
      var de = j !== null ? j.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return de !== null ? null : y(T, j, "" + E, Y);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            return E.key === de ? k(T, j, E, Y) : null;
          case z:
            return E.key === de ? M(T, j, E, Y) : null;
          case oe:
            return E = ba(E), C(T, j, E, Y);
        }
        if (ae(E) || ce(E))
          return de !== null ? null : U(T, j, E, Y, null);
        if (typeof E.then == "function")
          return C(
            T,
            j,
            jr(E),
            Y
          );
        if (E.$$typeof === q)
          return C(
            T,
            j,
            wr(T, E),
            Y
          );
        Tr(T, E);
      }
      return null;
    }
    function N(T, j, E, Y, de) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return T = T.get(E) || null, y(j, T, "" + Y, de);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case w:
            return T = T.get(
              Y.key === null ? E : Y.key
            ) || null, k(j, T, Y, de);
          case z:
            return T = T.get(
              Y.key === null ? E : Y.key
            ) || null, M(j, T, Y, de);
          case oe:
            return Y = ba(Y), N(
              T,
              j,
              E,
              Y,
              de
            );
        }
        if (ae(Y) || ce(Y))
          return T = T.get(E) || null, U(j, T, Y, de, null);
        if (typeof Y.then == "function")
          return N(
            T,
            j,
            E,
            jr(Y),
            de
          );
        if (Y.$$typeof === q)
          return N(
            T,
            j,
            E,
            wr(j, Y),
            de
          );
        Tr(j, Y);
      }
      return null;
    }
    function le(T, j, E, Y) {
      for (var de = null, Oe = null, se = j, be = j = 0, je = null; se !== null && be < E.length; be++) {
        se.index > be ? (je = se, se = null) : je = se.sibling;
        var Ne = C(
          T,
          se,
          E[be],
          Y
        );
        if (Ne === null) {
          se === null && (se = je);
          break;
        }
        e && se && Ne.alternate === null && t(T, se), j = c(Ne, j, be), Oe === null ? de = Ne : Oe.sibling = Ne, Oe = Ne, se = je;
      }
      if (be === E.length)
        return i(T, se), Ee && _n(T, be), de;
      if (se === null) {
        for (; be < E.length; be++)
          se = H(T, E[be], Y), se !== null && (j = c(
            se,
            j,
            be
          ), Oe === null ? de = se : Oe.sibling = se, Oe = se);
        return Ee && _n(T, be), de;
      }
      for (se = r(se); be < E.length; be++)
        je = N(
          se,
          T,
          be,
          E[be],
          Y
        ), je !== null && (e && je.alternate !== null && se.delete(
          je.key === null ? be : je.key
        ), j = c(
          je,
          j,
          be
        ), Oe === null ? de = je : Oe.sibling = je, Oe = je);
      return e && se.forEach(function(ta) {
        return t(T, ta);
      }), Ee && _n(T, be), de;
    }
    function he(T, j, E, Y) {
      if (E == null) throw Error(l(151));
      for (var de = null, Oe = null, se = j, be = j = 0, je = null, Ne = E.next(); se !== null && !Ne.done; be++, Ne = E.next()) {
        se.index > be ? (je = se, se = null) : je = se.sibling;
        var ta = C(T, se, Ne.value, Y);
        if (ta === null) {
          se === null && (se = je);
          break;
        }
        e && se && ta.alternate === null && t(T, se), j = c(ta, j, be), Oe === null ? de = ta : Oe.sibling = ta, Oe = ta, se = je;
      }
      if (Ne.done)
        return i(T, se), Ee && _n(T, be), de;
      if (se === null) {
        for (; !Ne.done; be++, Ne = E.next())
          Ne = H(T, Ne.value, Y), Ne !== null && (j = c(Ne, j, be), Oe === null ? de = Ne : Oe.sibling = Ne, Oe = Ne);
        return Ee && _n(T, be), de;
      }
      for (se = r(se); !Ne.done; be++, Ne = E.next())
        Ne = N(se, T, be, Ne.value, Y), Ne !== null && (e && Ne.alternate !== null && se.delete(Ne.key === null ? be : Ne.key), j = c(Ne, j, be), Oe === null ? de = Ne : Oe.sibling = Ne, Oe = Ne);
      return e && se.forEach(function(lb) {
        return t(T, lb);
      }), Ee && _n(T, be), de;
    }
    function Xe(T, j, E, Y) {
      if (typeof E == "object" && E !== null && E.type === R && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            e: {
              for (var de = E.key; j !== null; ) {
                if (j.key === de) {
                  if (de = E.type, de === R) {
                    if (j.tag === 7) {
                      i(
                        T,
                        j.sibling
                      ), Y = u(
                        j,
                        E.props.children
                      ), Y.return = T, T = Y;
                      break e;
                    }
                  } else if (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && ba(de) === j.type) {
                    i(
                      T,
                      j.sibling
                    ), Y = u(j, E.props), ao(Y, E), Y.return = T, T = Y;
                    break e;
                  }
                  i(T, j);
                  break;
                } else t(T, j);
                j = j.sibling;
              }
              E.type === R ? (Y = ha(
                E.props.children,
                T.mode,
                Y,
                E.key
              ), Y.return = T, T = Y) : (Y = gr(
                E.type,
                E.key,
                E.props,
                null,
                T.mode,
                Y
              ), ao(Y, E), Y.return = T, T = Y);
            }
            return _(T);
          case z:
            e: {
              for (de = E.key; j !== null; ) {
                if (j.key === de)
                  if (j.tag === 4 && j.stateNode.containerInfo === E.containerInfo && j.stateNode.implementation === E.implementation) {
                    i(
                      T,
                      j.sibling
                    ), Y = u(j, E.children || []), Y.return = T, T = Y;
                    break e;
                  } else {
                    i(T, j);
                    break;
                  }
                else t(T, j);
                j = j.sibling;
              }
              Y = Zs(E, T.mode, Y), Y.return = T, T = Y;
            }
            return _(T);
          case oe:
            return E = ba(E), Xe(
              T,
              j,
              E,
              Y
            );
        }
        if (ae(E))
          return le(
            T,
            j,
            E,
            Y
          );
        if (ce(E)) {
          if (de = ce(E), typeof de != "function") throw Error(l(150));
          return E = de.call(E), he(
            T,
            j,
            E,
            Y
          );
        }
        if (typeof E.then == "function")
          return Xe(
            T,
            j,
            jr(E),
            Y
          );
        if (E.$$typeof === q)
          return Xe(
            T,
            j,
            wr(T, E),
            Y
          );
        Tr(T, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, j !== null && j.tag === 6 ? (i(T, j.sibling), Y = u(j, E), Y.return = T, T = Y) : (i(T, j), Y = Rs(E, T.mode, Y), Y.return = T, T = Y), _(T)) : i(T, j);
    }
    return function(T, j, E, Y) {
      try {
        no = 0;
        var de = Xe(
          T,
          j,
          E,
          Y
        );
        return ui = null, de;
      } catch (se) {
        if (se === si || se === xr) throw se;
        var Oe = Dt(29, se, null, T.mode);
        return Oe.lanes = Y, Oe.return = T, Oe;
      }
    };
  }
  var wa = Nf(!0), Df = Nf(!1), $n = !1;
  function Ks(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Js(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Yn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Bn(e, t, i) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Re & 2) !== 0) {
      var u = r.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), r.pending = t, t = yr(e), vf(e, null, i), t;
    }
    return vr(e, r, t, i), yr(e);
  }
  function io(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, i |= r, t.lanes = i, xd(e, i);
    }
  }
  function Ps(e, t) {
    var i = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, i === r)) {
      var u = null, c = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var _ = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = _ : c = c.next = _, i = i.next;
        } while (i !== null);
        c === null ? u = c = t : c = c.next = t;
      } else u = c = t;
      i = {
        baseState: r.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var Ws = !1;
  function oo() {
    if (Ws) {
      var e = li;
      if (e !== null) throw e;
    }
  }
  function ro(e, t, i, r) {
    Ws = !1;
    var u = e.updateQueue;
    $n = !1;
    var c = u.firstBaseUpdate, _ = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var k = y, M = k.next;
      k.next = null, _ === null ? c = M : _.next = M, _ = k;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, y = U.lastBaseUpdate, y !== _ && (y === null ? U.firstBaseUpdate = M : y.next = M, U.lastBaseUpdate = k));
    }
    if (c !== null) {
      var H = u.baseState;
      _ = 0, U = M = k = null, y = c;
      do {
        var C = y.lane & -536870913, N = C !== y.lane;
        if (N ? (ze & C) === C : (r & C) === C) {
          C !== 0 && C === ri && (Ws = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var le = e, he = y;
            C = t;
            var Xe = i;
            switch (he.tag) {
              case 1:
                if (le = he.payload, typeof le == "function") {
                  H = le.call(Xe, H, C);
                  break e;
                }
                H = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = he.payload, C = typeof le == "function" ? le.call(Xe, H, C) : le, C == null) break e;
                H = b({}, H, C);
                break e;
              case 2:
                $n = !0;
            }
          }
          C = y.callback, C !== null && (e.flags |= 64, N && (e.flags |= 8192), N = u.callbacks, N === null ? u.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, U === null ? (M = U = N, k = H) : U = U.next = N, _ |= C;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          N = y, y = N.next, N.next = null, u.lastBaseUpdate = N, u.shared.pending = null;
        }
      } while (!0);
      U === null && (k = H), u.baseState = k, u.firstBaseUpdate = M, u.lastBaseUpdate = U, c === null && (u.shared.lanes = 0), Vn |= _, e.lanes = _, e.memoizedState = H;
    }
  }
  function Rf(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function Zf(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Rf(i[e], t);
  }
  var ci = x(null), Ar = x(0);
  function Uf(e, t) {
    e = Tn, W(Ar, e), W(ci, t), Tn = e | t.baseLanes;
  }
  function Fs() {
    W(Ar, Tn), W(ci, ci.current);
  }
  function Is() {
    Tn = Ar.current, $(ci), $(Ar);
  }
  var Rt = x(null), Kt = null;
  function Hn(e) {
    var t = e.alternate;
    W(tt, tt.current & 1), W(Rt, e), Kt === null && (t === null || ci.current !== null || t.memoizedState !== null) && (Kt = e);
  }
  function eu(e) {
    W(tt, tt.current), W(Rt, e), Kt === null && (Kt = e);
  }
  function $f(e) {
    e.tag === 22 ? (W(tt, tt.current), W(Rt, e), Kt === null && (Kt = e)) : Xn();
  }
  function Xn() {
    W(tt, tt.current), W(Rt, Rt.current);
  }
  function Zt(e) {
    $(Rt), Kt === e && (Kt = null), $(tt);
  }
  var tt = x(0);
  function Er(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || rc(i) || lc(i)))
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
  var gn = 0, ge = null, Be = null, ot = null, Mr = !1, di = !1, ka = !1, Cr = 0, lo = 0, fi = null, Wy = 0;
  function Pe() {
    throw Error(l(321));
  }
  function tu(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Nt(e[i], t[i])) return !1;
    return !0;
  }
  function nu(e, t, i, r, u, c) {
    return gn = c, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = e === null || e.memoizedState === null ? Sm : vu, ka = !1, c = i(r, u), ka = !1, di && (c = Bf(
      t,
      i,
      r,
      u
    )), Yf(e), c;
  }
  function Yf(e) {
    A.H = co;
    var t = Be !== null && Be.next !== null;
    if (gn = 0, ot = Be = ge = null, Mr = !1, lo = 0, fi = null, t) throw Error(l(300));
    e === null || rt || (e = e.dependencies, e !== null && Sr(e) && (rt = !0));
  }
  function Bf(e, t, i, r) {
    ge = e;
    var u = 0;
    do {
      if (di && (fi = null), lo = 0, di = !1, 25 <= u) throw Error(l(301));
      if (u += 1, ot = Be = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      A.H = wm, c = t(i, r);
    } while (di);
    return c;
  }
  function Fy() {
    var e = A.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? so(t) : t, e = e.useState()[0], (Be !== null ? Be.memoizedState : null) !== e && (ge.flags |= 1024), t;
  }
  function au() {
    var e = Cr !== 0;
    return Cr = 0, e;
  }
  function iu(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function ou(e) {
    if (Mr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Mr = !1;
    }
    gn = 0, ot = Be = ge = null, di = !1, lo = Cr = 0, fi = null;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ot === null ? ge.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function nt() {
    if (Be === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = ot === null ? ge.memoizedState : ot.next;
    if (t !== null)
      ot = t, Be = e;
    else {
      if (e === null)
        throw ge.alternate === null ? Error(l(467)) : Error(l(310));
      Be = e, e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null
      }, ot === null ? ge.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Or() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function so(e) {
    var t = lo;
    return lo += 1, fi === null && (fi = []), e = Mf(fi, e, t), t = ge, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? Sm : vu), e;
  }
  function Nr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return so(e);
      if (e.$$typeof === q) return pt(e);
    }
    throw Error(l(438, String(e)));
  }
  function ru(e) {
    var t = null, i = ge.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var r = ge.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = Or(), ge.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), r = 0; r < e; r++)
        i[r] = P;
    return t.index++, i;
  }
  function bn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dr(e) {
    var t = nt();
    return lu(t, Be, e);
  }
  function lu(e, t, i) {
    var r = e.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = i;
    var u = e.baseQueue, c = r.pending;
    if (c !== null) {
      if (u !== null) {
        var _ = u.next;
        u.next = c.next, c.next = _;
      }
      t.baseQueue = u = c, r.pending = null;
    }
    if (c = e.baseState, u === null) e.memoizedState = c;
    else {
      t = u.next;
      var y = _ = null, k = null, M = t, U = !1;
      do {
        var H = M.lane & -536870913;
        if (H !== M.lane ? (ze & H) === H : (gn & H) === H) {
          var C = M.revertLane;
          if (C === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), H === ri && (U = !0);
          else if ((gn & C) === C) {
            M = M.next, C === ri && (U = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, k === null ? (y = k = H, _ = c) : k = k.next = H, ge.lanes |= C, Vn |= C;
          H = M.action, ka && i(c, H), c = M.hasEagerState ? M.eagerState : i(c, H);
        } else
          C = {
            lane: H,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, k === null ? (y = k = C, _ = c) : k = k.next = C, ge.lanes |= H, Vn |= H;
        M = M.next;
      } while (M !== null && M !== t);
      if (k === null ? _ = c : k.next = y, !Nt(c, e.memoizedState) && (rt = !0, U && (i = li, i !== null)))
        throw i;
      e.memoizedState = c, e.baseState = _, e.baseQueue = k, r.lastRenderedState = c;
    }
    return u === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function su(e) {
    var t = nt(), i = t.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var r = i.dispatch, u = i.pending, c = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var _ = u = u.next;
      do
        c = e(c, _.action), _ = _.next;
      while (_ !== u);
      Nt(c, t.memoizedState) || (rt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), i.lastRenderedState = c;
    }
    return [c, r];
  }
  function Hf(e, t, i) {
    var r = ge, u = nt(), c = Ee;
    if (c) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = t();
    var _ = !Nt(
      (Be || u).memoizedState,
      i
    );
    if (_ && (u.memoizedState = i, rt = !0), u = u.queue, du(Lf.bind(null, r, u, e), [
      e
    ]), u.getSnapshot !== t || _ || ot !== null && ot.memoizedState.tag & 1) {
      if (r.flags |= 2048, mi(
        9,
        { destroy: void 0 },
        qf.bind(
          null,
          r,
          u,
          i,
          t
        ),
        null
      ), Le === null) throw Error(l(349));
      c || (gn & 127) !== 0 || Xf(r, t, i);
    }
    return i;
  }
  function Xf(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = ge.updateQueue, t === null ? (t = Or(), ge.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function qf(e, t, i, r) {
    t.value = i, t.getSnapshot = r, Vf(t) && Gf(e);
  }
  function Lf(e, t, i) {
    return i(function() {
      Vf(t) && Gf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Nt(e, i);
    } catch {
      return !0;
    }
  }
  function Gf(e) {
    var t = pa(e, 2);
    t !== null && Ct(t, e, 2);
  }
  function uu(e) {
    var t = kt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), ka) {
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
      lastRenderedReducer: bn,
      lastRenderedState: e
    }, t;
  }
  function Qf(e, t, i, r) {
    return e.baseState = i, lu(
      e,
      Be,
      typeof r == "function" ? r : bn
    );
  }
  function Iy(e, t, i, r, u) {
    if (Ur(e)) throw Error(l(485));
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
        then: function(_) {
          c.listeners.push(_);
        }
      };
      A.T !== null ? i(!0) : c.isTransition = !1, r(c), i = t.pending, i === null ? (c.next = t.pending = c, Kf(t, c)) : (c.next = i.next, t.pending = i.next = c);
    }
  }
  function Kf(e, t) {
    var i = t.action, r = t.payload, u = e.state;
    if (t.isTransition) {
      var c = A.T, _ = {};
      A.T = _;
      try {
        var y = i(u, r), k = A.S;
        k !== null && k(_, y), Jf(e, t, y);
      } catch (M) {
        cu(e, t, M);
      } finally {
        c !== null && _.types !== null && (c.types = _.types), A.T = c;
      }
    } else
      try {
        c = i(u, r), Jf(e, t, c);
      } catch (M) {
        cu(e, t, M);
      }
  }
  function Jf(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(r) {
        Pf(e, t, r);
      },
      function(r) {
        return cu(e, t, r);
      }
    ) : Pf(e, t, i);
  }
  function Pf(e, t, i) {
    t.status = "fulfilled", t.value = i, Wf(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, Kf(e, i)));
  }
  function cu(e, t, i) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = i, Wf(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function Wf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ff(e, t) {
    return t;
  }
  function If(e, t) {
    if (Ee) {
      var i = Le.formState;
      if (i !== null) {
        e: {
          var r = ge;
          if (Ee) {
            if (Ve) {
              t: {
                for (var u = Ve, c = Qt; u.nodeType !== 8; ) {
                  if (!c) {
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
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                Ve = Jt(
                  u.nextSibling
                ), r = u.data === "F!";
                break e;
              }
            }
            Zn(r);
          }
          r = !1;
        }
        r && (t = i[0]);
      }
    }
    return i = kt(), i.memoizedState = i.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ff,
      lastRenderedState: t
    }, i.queue = r, i = ym.bind(
      null,
      ge,
      r
    ), r.dispatch = i, r = uu(!1), c = _u.bind(
      null,
      ge,
      !1,
      r.queue
    ), r = kt(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = u, i = Iy.bind(
      null,
      ge,
      u,
      c,
      i
    ), u.dispatch = i, r.memoizedState = e, [t, i, !1];
  }
  function em(e) {
    var t = nt();
    return tm(t, Be, e);
  }
  function tm(e, t, i) {
    if (t = lu(
      e,
      t,
      Ff
    )[0], e = Dr(bn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = so(t);
      } catch (_) {
        throw _ === si ? xr : _;
      }
    else r = t;
    t = nt();
    var u = t.queue, c = u.dispatch;
    return i !== t.memoizedState && (ge.flags |= 2048, mi(
      9,
      { destroy: void 0 },
      eg.bind(null, u, i),
      null
    )), [r, c, e];
  }
  function eg(e, t) {
    e.action = t;
  }
  function nm(e) {
    var t = nt(), i = Be;
    if (i !== null)
      return tm(t, i, e);
    nt(), t = t.memoizedState, i = nt();
    var r = i.queue.dispatch;
    return i.memoizedState = e, [t, r, !1];
  }
  function mi(e, t, i, r) {
    return e = { tag: e, create: i, deps: r, inst: t, next: null }, t = ge.updateQueue, t === null && (t = Or(), ge.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (r = i.next, i.next = e, e.next = r, t.lastEffect = e), e;
  }
  function am() {
    return nt().memoizedState;
  }
  function Rr(e, t, i, r) {
    var u = kt();
    ge.flags |= e, u.memoizedState = mi(
      1 | t,
      { destroy: void 0 },
      i,
      r === void 0 ? null : r
    );
  }
  function Zr(e, t, i, r) {
    var u = nt();
    r = r === void 0 ? null : r;
    var c = u.memoizedState.inst;
    Be !== null && r !== null && tu(r, Be.memoizedState.deps) ? u.memoizedState = mi(t, c, i, r) : (ge.flags |= e, u.memoizedState = mi(
      1 | t,
      c,
      i,
      r
    ));
  }
  function im(e, t) {
    Rr(8390656, 8, e, t);
  }
  function du(e, t) {
    Zr(2048, 8, e, t);
  }
  function tg(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null)
      t = Or(), ge.updateQueue = t, t.events = [e];
    else {
      var i = t.events;
      i === null ? t.events = [e] : i.push(e);
    }
  }
  function om(e) {
    var t = nt().memoizedState;
    return tg({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function rm(e, t) {
    return Zr(4, 2, e, t);
  }
  function lm(e, t) {
    return Zr(4, 4, e, t);
  }
  function sm(e, t) {
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
  function um(e, t, i) {
    i = i != null ? i.concat([e]) : null, Zr(4, 4, sm.bind(null, t, e), i);
  }
  function fu() {
  }
  function cm(e, t) {
    var i = nt();
    t = t === void 0 ? null : t;
    var r = i.memoizedState;
    return t !== null && tu(t, r[1]) ? r[0] : (i.memoizedState = [e, t], e);
  }
  function dm(e, t) {
    var i = nt();
    t = t === void 0 ? null : t;
    var r = i.memoizedState;
    if (t !== null && tu(t, r[1]))
      return r[0];
    if (r = e(), ka) {
      ln(!0);
      try {
        e();
      } finally {
        ln(!1);
      }
    }
    return i.memoizedState = [r, t], r;
  }
  function mu(e, t, i) {
    return i === void 0 || (gn & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i, e = fp(), ge.lanes |= e, Vn |= e, i);
  }
  function fm(e, t, i, r) {
    return Nt(i, t) ? i : ci.current !== null ? (e = mu(e, i, r), Nt(e, t) || (rt = !0), e) : (gn & 42) === 0 || (gn & 1073741824) !== 0 && (ze & 261930) === 0 ? (rt = !0, e.memoizedState = i) : (e = fp(), ge.lanes |= e, Vn |= e, t);
  }
  function mm(e, t, i, r, u) {
    var c = L.p;
    L.p = c !== 0 && 8 > c ? c : 8;
    var _ = A.T, y = {};
    A.T = y, _u(e, !1, t, i);
    try {
      var k = u(), M = A.S;
      if (M !== null && M(y, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var U = Py(
          k,
          r
        );
        uo(
          e,
          t,
          U,
          Yt(e)
        );
      } else
        uo(
          e,
          t,
          r,
          Yt(e)
        );
    } catch (H) {
      uo(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Yt()
      );
    } finally {
      L.p = c, _ !== null && y.types !== null && (_.types = y.types), A.T = _;
    }
  }
  function ng() {
  }
  function pu(e, t, i, r) {
    if (e.tag !== 5) throw Error(l(476));
    var u = pm(e).queue;
    mm(
      e,
      u,
      t,
      ee,
      i === null ? ng : function() {
        return hm(e), i(r);
      }
    );
  }
  function pm(e) {
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
        lastRenderedReducer: bn,
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
        lastRenderedReducer: bn,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function hm(e) {
    var t = pm(e);
    t.next === null && (t = e.alternate.memoizedState), uo(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function hu() {
    return pt(To);
  }
  function _m() {
    return nt().memoizedState;
  }
  function vm() {
    return nt().memoizedState;
  }
  function ag(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = Yt();
          e = Yn(i);
          var r = Bn(t, e, i);
          r !== null && (Ct(r, t, i), io(r, t, i)), t = { cache: Ls() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ig(e, t, i) {
    var r = Yt();
    i = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e) ? gm(t, i) : (i = Ns(e, t, i, r), i !== null && (Ct(i, e, r), bm(i, t, r)));
  }
  function ym(e, t, i) {
    var r = Yt();
    uo(e, t, i, r);
  }
  function uo(e, t, i, r) {
    var u = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ur(e)) gm(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var _ = t.lastRenderedState, y = c(_, i);
          if (u.hasEagerState = !0, u.eagerState = y, Nt(y, _))
            return vr(e, t, u, 0), Le === null && _r(), !1;
        } catch {
        }
      if (i = Ns(e, t, u, r), i !== null)
        return Ct(i, e, r), bm(i, t, r), !0;
    }
    return !1;
  }
  function _u(e, t, i, r) {
    if (r = {
      lane: 2,
      revertLane: Ku(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e)) {
      if (t) throw Error(l(479));
    } else
      t = Ns(
        e,
        i,
        r,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function Ur(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function gm(e, t) {
    di = Mr = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function bm(e, t, i) {
    if ((i & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, i |= r, t.lanes = i, xd(e, i);
    }
  }
  var co = {
    readContext: pt,
    use: Nr,
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
  co.useEffectEvent = Pe;
  var Sm = {
    readContext: pt,
    use: Nr,
    useCallback: function(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: im,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, Rr(
        4194308,
        4,
        sm.bind(null, t, e),
        i
      );
    },
    useLayoutEffect: function(e, t) {
      return Rr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Rr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var i = kt();
      t = t === void 0 ? null : t;
      var r = e();
      if (ka) {
        ln(!0);
        try {
          e();
        } finally {
          ln(!1);
        }
      }
      return i.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, i) {
      var r = kt();
      if (i !== void 0) {
        var u = i(t);
        if (ka) {
          ln(!0);
          try {
            i(t);
          } finally {
            ln(!1);
          }
        }
      } else u = t;
      return r.memoizedState = r.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, r.queue = e, e = e.dispatch = ig.bind(
        null,
        ge,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = uu(e);
      var t = e.queue, i = ym.bind(null, ge, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: fu,
    useDeferredValue: function(e, t) {
      var i = kt();
      return mu(i, e, t);
    },
    useTransition: function() {
      var e = uu(!1);
      return e = mm.bind(
        null,
        ge,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var r = ge, u = kt();
      if (Ee) {
        if (i === void 0)
          throw Error(l(407));
        i = i();
      } else {
        if (i = t(), Le === null)
          throw Error(l(349));
        (ze & 127) !== 0 || Xf(r, t, i);
      }
      u.memoizedState = i;
      var c = { value: i, getSnapshot: t };
      return u.queue = c, im(Lf.bind(null, r, c, e), [
        e
      ]), r.flags |= 2048, mi(
        9,
        { destroy: void 0 },
        qf.bind(
          null,
          r,
          c,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = kt(), t = Le.identifierPrefix;
      if (Ee) {
        var i = un, r = sn;
        i = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + i, t = "_" + t + "R_" + i, i = Cr++, 0 < i && (t += "H" + i.toString(32)), t += "_";
      } else
        i = Wy++, t = "_" + t + "r_" + i.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: hu,
    useFormState: If,
    useActionState: If,
    useOptimistic: function(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = _u.bind(
        null,
        ge,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: ru,
    useCacheRefresh: function() {
      return kt().memoizedState = ag.bind(
        null,
        ge
      );
    },
    useEffectEvent: function(e) {
      var t = kt(), i = { impl: e };
      return t.memoizedState = i, function() {
        if ((Re & 2) !== 0)
          throw Error(l(440));
        return i.impl.apply(void 0, arguments);
      };
    }
  }, vu = {
    readContext: pt,
    use: Nr,
    useCallback: cm,
    useContext: pt,
    useEffect: du,
    useImperativeHandle: um,
    useInsertionEffect: rm,
    useLayoutEffect: lm,
    useMemo: dm,
    useReducer: Dr,
    useRef: am,
    useState: function() {
      return Dr(bn);
    },
    useDebugValue: fu,
    useDeferredValue: function(e, t) {
      var i = nt();
      return fm(
        i,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Dr(bn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : so(e),
        t
      ];
    },
    useSyncExternalStore: Hf,
    useId: _m,
    useHostTransitionStatus: hu,
    useFormState: em,
    useActionState: em,
    useOptimistic: function(e, t) {
      var i = nt();
      return Qf(i, Be, e, t);
    },
    useMemoCache: ru,
    useCacheRefresh: vm
  };
  vu.useEffectEvent = om;
  var wm = {
    readContext: pt,
    use: Nr,
    useCallback: cm,
    useContext: pt,
    useEffect: du,
    useImperativeHandle: um,
    useInsertionEffect: rm,
    useLayoutEffect: lm,
    useMemo: dm,
    useReducer: su,
    useRef: am,
    useState: function() {
      return su(bn);
    },
    useDebugValue: fu,
    useDeferredValue: function(e, t) {
      var i = nt();
      return Be === null ? mu(i, e, t) : fm(
        i,
        Be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = su(bn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : so(e),
        t
      ];
    },
    useSyncExternalStore: Hf,
    useId: _m,
    useHostTransitionStatus: hu,
    useFormState: nm,
    useActionState: nm,
    useOptimistic: function(e, t) {
      var i = nt();
      return Be !== null ? Qf(i, Be, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: ru,
    useCacheRefresh: vm
  };
  wm.useEffectEvent = om;
  function yu(e, t, i, r) {
    t = e.memoizedState, i = i(r, t), i = i == null ? t : b({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var gu = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var r = Yt(), u = Yn(r);
      u.payload = t, i != null && (u.callback = i), t = Bn(e, u, r), t !== null && (Ct(t, e, r), io(t, e, r));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var r = Yt(), u = Yn(r);
      u.tag = 1, u.payload = t, i != null && (u.callback = i), t = Bn(e, u, r), t !== null && (Ct(t, e, r), io(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = Yt(), r = Yn(i);
      r.tag = 2, t != null && (r.callback = t), t = Bn(e, r, i), t !== null && (Ct(t, e, i), io(t, e, i));
    }
  };
  function km(e, t, i, r, u, c, _) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, _) : t.prototype && t.prototype.isPureReactComponent ? !Pi(i, r) || !Pi(u, c) : !0;
  }
  function xm(e, t, i, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, r), t.state !== e && gu.enqueueReplaceState(t, t.state, null);
  }
  function xa(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var r in t)
        r !== "ref" && (i[r] = t[r]);
    }
    if (e = e.defaultProps) {
      i === t && (i = b({}, i));
      for (var u in e)
        i[u] === void 0 && (i[u] = e[u]);
    }
    return i;
  }
  function zm(e) {
    hr(e);
  }
  function jm(e) {
    console.error(e);
  }
  function Tm(e) {
    hr(e);
  }
  function $r(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Am(e, t, i) {
    try {
      var r = e.onCaughtError;
      r(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function bu(e, t, i) {
    return i = Yn(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      $r(e, t);
    }, i;
  }
  function Em(e) {
    return e = Yn(e), e.tag = 3, e;
  }
  function Mm(e, t, i, r) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      e.payload = function() {
        return u(c);
      }, e.callback = function() {
        Am(t, i, r);
      };
    }
    var _ = i.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (e.callback = function() {
      Am(t, i, r), typeof u != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function og(e, t, i, r, u) {
    if (i.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = i.alternate, t !== null && oi(
        t,
        i,
        u,
        !0
      ), i = Rt.current, i !== null) {
        switch (i.tag) {
          case 31:
          case 13:
            return Kt === null ? Pr() : i.alternate === null && We === 0 && (We = 3), i.flags &= -257, i.flags |= 65536, i.lanes = u, r === zr ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Vu(e, r, u)), !1;
          case 22:
            return i.flags |= 65536, r === zr ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : i.add(r)), Vu(e, r, u)), !1;
        }
        throw Error(l(435, i.tag));
      }
      return Vu(e, r, u), Pr(), !1;
    }
    if (Ee)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, r !== Ys && (e = Error(l(422), { cause: r }), Ii(Lt(e, i)))) : (r !== Ys && (t = Error(l(423), {
        cause: r
      }), Ii(
        Lt(t, i)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, r = Lt(r, i), u = bu(
        e.stateNode,
        r,
        u
      ), Ps(e, u), We !== 4 && (We = 2)), !1;
    var c = Error(l(520), { cause: r });
    if (c = Lt(c, i), go === null ? go = [c] : go.push(c), We !== 4 && (We = 2), t === null) return !0;
    r = Lt(r, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = u & -u, i.lanes |= e, e = bu(i.stateNode, r, e), Ps(i, e), !1;
        case 1:
          if (t = i.type, c = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Gn === null || !Gn.has(c))))
            return i.flags |= 65536, u &= -u, i.lanes |= u, u = Em(u), Mm(
              u,
              e,
              i,
              r
            ), Ps(i, u), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Su = Error(l(461)), rt = !1;
  function ht(e, t, i, r) {
    t.child = e === null ? Df(t, null, i, r) : wa(
      t,
      e.child,
      i,
      r
    );
  }
  function Cm(e, t, i, r, u) {
    i = i.render;
    var c = t.ref;
    if ("ref" in r) {
      var _ = {};
      for (var y in r)
        y !== "ref" && (_[y] = r[y]);
    } else _ = r;
    return ya(t), r = nu(
      e,
      t,
      i,
      _,
      c,
      u
    ), y = au(), e !== null && !rt ? (iu(e, t, u), Sn(e, t, u)) : (Ee && y && Us(t), t.flags |= 1, ht(e, t, r, u), t.child);
  }
  function Om(e, t, i, r, u) {
    if (e === null) {
      var c = i.type;
      return typeof c == "function" && !Ds(c) && c.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = c, Nm(
        e,
        t,
        c,
        r,
        u
      )) : (e = gr(
        i.type,
        null,
        r,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Eu(e, u)) {
      var _ = c.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Pi, i(_, r) && e.ref === t.ref)
        return Sn(e, t, u);
    }
    return t.flags |= 1, e = hn(c, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nm(e, t, i, r, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Pi(c, r) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = r = c, Eu(e, u))
          (e.flags & 131072) !== 0 && (rt = !0);
        else
          return t.lanes = e.lanes, Sn(e, t, u);
    }
    return wu(
      e,
      t,
      i,
      r,
      u
    );
  }
  function Dm(e, t, i, r) {
    var u = r.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | i : i, e !== null) {
          for (r = t.child = e.child, u = 0; r !== null; )
            u = u | r.lanes | r.childLanes, r = r.sibling;
          r = u & ~c;
        } else r = 0, t.child = null;
        return Rm(
          e,
          t,
          c,
          i,
          r
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && kr(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Uf(t, c) : Fs(), $f(t);
      else
        return r = t.lanes = 536870912, Rm(
          e,
          t,
          c !== null ? c.baseLanes | i : i,
          i,
          r
        );
    } else
      c !== null ? (kr(t, c.cachePool), Uf(t, c), Xn(), t.memoizedState = null) : (e !== null && kr(t, null), Fs(), Xn());
    return ht(e, t, u, i), t.child;
  }
  function fo(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Rm(e, t, i, r, u) {
    var c = Gs();
    return c = c === null ? null : { parent: it._currentValue, pool: c }, t.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && kr(t, null), Fs(), $f(t), e !== null && oi(e, t, r, !0), t.childLanes = u, null;
  }
  function Yr(e, t) {
    return t = Hr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Zm(e, t, i) {
    return wa(t, e.child, null, i), e = Yr(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
  }
  function rg(e, t, i) {
    var r = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ee) {
        if (r.mode === "hidden")
          return e = Yr(t, r), t.lanes = 536870912, fo(null, e);
        if (eu(t), (e = Ve) ? (e = Kp(
          e,
          Qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Dn !== null ? { id: sn, overflow: un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = gf(e), i.return = t, t.child = i, mt = t, Ve = null)) : e = null, e === null) throw Zn(t);
        return t.lanes = 536870912, null;
      }
      return Yr(t, r);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var _ = c.dehydrated;
      if (eu(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Zm(
            e,
            t,
            i
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (rt || oi(e, t, i, !1), u = (i & e.childLanes) !== 0, rt || u) {
        if (r = Le, r !== null && (_ = zd(r, i), _ !== 0 && _ !== c.retryLane))
          throw c.retryLane = _, pa(e, _), Ct(r, e, _), Su;
        Pr(), t = Zm(
          e,
          t,
          i
        );
      } else
        e = c.treeContext, Ve = Jt(_.nextSibling), mt = t, Ee = !0, Rn = null, Qt = !1, e !== null && wf(t, e), t = Yr(t, r), t.flags |= 4096;
      return t;
    }
    return e = hn(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Br(e, t) {
    var i = t.ref;
    if (i === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(l(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function wu(e, t, i, r, u) {
    return ya(t), i = nu(
      e,
      t,
      i,
      r,
      void 0,
      u
    ), r = au(), e !== null && !rt ? (iu(e, t, u), Sn(e, t, u)) : (Ee && r && Us(t), t.flags |= 1, ht(e, t, i, u), t.child);
  }
  function Um(e, t, i, r, u, c) {
    return ya(t), t.updateQueue = null, i = Bf(
      t,
      r,
      i,
      u
    ), Yf(e), r = au(), e !== null && !rt ? (iu(e, t, c), Sn(e, t, c)) : (Ee && r && Us(t), t.flags |= 1, ht(e, t, i, c), t.child);
  }
  function $m(e, t, i, r, u) {
    if (ya(t), t.stateNode === null) {
      var c = ti, _ = i.contextType;
      typeof _ == "object" && _ !== null && (c = pt(_)), c = new i(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = gu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, Ks(t), _ = i.contextType, c.context = typeof _ == "object" && _ !== null ? pt(_) : ti, c.state = t.memoizedState, _ = i.getDerivedStateFromProps, typeof _ == "function" && (yu(
        t,
        i,
        _,
        r
      ), c.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (_ = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), _ !== c.state && gu.enqueueReplaceState(c, c.state, null), ro(t, r, c, u), oo(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, k = xa(i, y);
      c.props = k;
      var M = c.context, U = i.contextType;
      _ = ti, typeof U == "object" && U !== null && (_ = pt(U));
      var H = i.getDerivedStateFromProps;
      U = typeof H == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, U || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || M !== _) && xm(
        t,
        c,
        r,
        _
      ), $n = !1;
      var C = t.memoizedState;
      c.state = C, ro(t, r, c, u), oo(), M = t.memoizedState, y || C !== M || $n ? (typeof H == "function" && (yu(
        t,
        i,
        H,
        r
      ), M = t.memoizedState), (k = $n || km(
        t,
        i,
        k,
        r,
        C,
        M,
        _
      )) ? (U || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = M), c.props = r, c.state = M, c.context = _, r = k) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Js(e, t), _ = t.memoizedProps, U = xa(i, _), c.props = U, H = t.pendingProps, C = c.context, M = i.contextType, k = ti, typeof M == "object" && M !== null && (k = pt(M)), y = i.getDerivedStateFromProps, (M = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (_ !== H || C !== k) && xm(
        t,
        c,
        r,
        k
      ), $n = !1, C = t.memoizedState, c.state = C, ro(t, r, c, u), oo();
      var N = t.memoizedState;
      _ !== H || C !== N || $n || e !== null && e.dependencies !== null && Sr(e.dependencies) ? (typeof y == "function" && (yu(
        t,
        i,
        y,
        r
      ), N = t.memoizedState), (U = $n || km(
        t,
        i,
        U,
        r,
        C,
        N,
        k
      ) || e !== null && e.dependencies !== null && Sr(e.dependencies)) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, N, k), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        r,
        N,
        k
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || _ === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), c.props = r, c.state = N, c.context = k, r = U) : (typeof c.componentDidUpdate != "function" || _ === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return c = r, Br(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, i = r && typeof i.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = wa(
      t,
      e.child,
      null,
      u
    ), t.child = wa(
      t,
      null,
      i,
      u
    )) : ht(e, t, i, u), t.memoizedState = c.state, e = t.child) : e = Sn(
      e,
      t,
      u
    ), e;
  }
  function Ym(e, t, i, r) {
    return _a(), t.flags |= 256, ht(e, t, i, r), t.child;
  }
  var ku = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xu(e) {
    return { baseLanes: e, cachePool: Af() };
  }
  function zu(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= $t), e;
  }
  function Bm(e, t, i) {
    var r = t.pendingProps, u = !1, c = (t.flags & 128) !== 0, _;
    if ((_ = c) || (_ = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), _ && (u = !0, t.flags &= -129), _ = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ee) {
        if (u ? Hn(t) : Xn(), (e = Ve) ? (e = Kp(
          e,
          Qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Dn !== null ? { id: sn, overflow: un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = gf(e), i.return = t, t.child = i, mt = t, Ve = null)) : e = null, e === null) throw Zn(t);
        return lc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = r.children;
      return r = r.fallback, u ? (Xn(), u = t.mode, y = Hr(
        { mode: "hidden", children: y },
        u
      ), r = ha(
        r,
        u,
        i,
        null
      ), y.return = t, r.return = t, y.sibling = r, t.child = y, r = t.child, r.memoizedState = xu(i), r.childLanes = zu(
        e,
        _,
        i
      ), t.memoizedState = ku, fo(null, r)) : (Hn(t), ju(t, y));
    }
    var k = e.memoizedState;
    if (k !== null && (y = k.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Hn(t), t.flags &= -257, t = Tu(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Xn(), t.child = e.child, t.flags |= 128, t = null) : (Xn(), y = r.fallback, u = t.mode, r = Hr(
          { mode: "visible", children: r.children },
          u
        ), y = ha(
          y,
          u,
          i,
          null
        ), y.flags |= 2, r.return = t, y.return = t, r.sibling = y, t.child = r, wa(
          t,
          e.child,
          null,
          i
        ), r = t.child, r.memoizedState = xu(i), r.childLanes = zu(
          e,
          _,
          i
        ), t.memoizedState = ku, t = fo(null, r));
      else if (Hn(t), lc(y)) {
        if (_ = y.nextSibling && y.nextSibling.dataset, _) var M = _.dgst;
        _ = M, r = Error(l(419)), r.stack = "", r.digest = _, Ii({ value: r, source: null, stack: null }), t = Tu(
          e,
          t,
          i
        );
      } else if (rt || oi(e, t, i, !1), _ = (i & e.childLanes) !== 0, rt || _) {
        if (_ = Le, _ !== null && (r = zd(_, i), r !== 0 && r !== k.retryLane))
          throw k.retryLane = r, pa(e, r), Ct(_, e, r), Su;
        rc(y) || Pr(), t = Tu(
          e,
          t,
          i
        );
      } else
        rc(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, Ve = Jt(
          y.nextSibling
        ), mt = t, Ee = !0, Rn = null, Qt = !1, e !== null && wf(t, e), t = ju(
          t,
          r.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Xn(), y = r.fallback, u = t.mode, k = e.child, M = k.sibling, r = hn(k, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = k.subtreeFlags & 65011712, M !== null ? y = hn(
      M,
      y
    ) : (y = ha(
      y,
      u,
      i,
      null
    ), y.flags |= 2), y.return = t, r.return = t, r.sibling = y, t.child = r, fo(null, r), r = t.child, y = e.child.memoizedState, y === null ? y = xu(i) : (u = y.cachePool, u !== null ? (k = it._currentValue, u = u.parent !== k ? { parent: k, pool: k } : u) : u = Af(), y = {
      baseLanes: y.baseLanes | i,
      cachePool: u
    }), r.memoizedState = y, r.childLanes = zu(
      e,
      _,
      i
    ), t.memoizedState = ku, fo(e.child, r)) : (Hn(t), i = e.child, e = i.sibling, i = hn(i, {
      mode: "visible",
      children: r.children
    }), i.return = t, i.sibling = null, e !== null && (_ = t.deletions, _ === null ? (t.deletions = [e], t.flags |= 16) : _.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function ju(e, t) {
    return t = Hr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Hr(e, t) {
    return e = Dt(22, e, null, t), e.lanes = 0, e;
  }
  function Tu(e, t, i) {
    return wa(t, e.child, null, i), e = ju(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hm(e, t, i) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Xs(e.return, t, i);
  }
  function Au(e, t, i, r, u, c) {
    var _ = e.memoizedState;
    _ === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: i,
      tailMode: u,
      treeForkCount: c
    } : (_.isBackwards = t, _.rendering = null, _.renderingStartTime = 0, _.last = r, _.tail = i, _.tailMode = u, _.treeForkCount = c);
  }
  function Xm(e, t, i) {
    var r = t.pendingProps, u = r.revealOrder, c = r.tail;
    r = r.children;
    var _ = tt.current, y = (_ & 2) !== 0;
    if (y ? (_ = _ & 1 | 2, t.flags |= 128) : _ &= 1, W(tt, _), ht(e, t, r, i), r = Ee ? Fi : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Hm(e, i, t);
        else if (e.tag === 19)
          Hm(e, i, t);
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
          e = i.alternate, e !== null && Er(e) === null && (u = i), i = i.sibling;
        i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), Au(
          t,
          !1,
          u,
          i,
          c,
          r
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Er(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = i, i = u, u = e;
        }
        Au(
          t,
          !0,
          i,
          null,
          c,
          r
        );
        break;
      case "together":
        Au(
          t,
          !1,
          null,
          null,
          void 0,
          r
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Sn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (i & t.childLanes) === 0)
      if (e !== null) {
        if (oi(
          e,
          t,
          i,
          !1
        ), (i & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, i = hn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        e = e.sibling, i = i.sibling = hn(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function Eu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Sr(e)));
  }
  function lg(e, t, i) {
    switch (t.tag) {
      case 3:
        $e(t, t.stateNode.containerInfo), Un(t, it, e.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        Bt(t);
        break;
      case 4:
        $e(t, t.stateNode.containerInfo);
        break;
      case 10:
        Un(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, eu(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null ? (Hn(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Bm(e, t, i) : (Hn(t), e = Sn(
            e,
            t,
            i
          ), e !== null ? e.sibling : null);
        Hn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (r = (i & t.childLanes) !== 0, r || (oi(
          e,
          t,
          i,
          !1
        ), r = (i & t.childLanes) !== 0), u) {
          if (r)
            return Xm(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), W(tt, tt.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, Dm(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        Un(t, it, e.memoizedState.cache);
    }
    return Sn(e, t, i);
  }
  function qm(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        rt = !0;
      else {
        if (!Eu(e, i) && (t.flags & 128) === 0)
          return rt = !1, lg(
            e,
            t,
            i
          );
        rt = (e.flags & 131072) !== 0;
      }
    else
      rt = !1, Ee && (t.flags & 1048576) !== 0 && Sf(t, Fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = ba(t.elementType), t.type = e, typeof e == "function")
            Ds(e) ? (r = xa(e, r), t.tag = 1, t = $m(
              null,
              t,
              e,
              r,
              i
            )) : (t.tag = 0, t = wu(
              null,
              t,
              e,
              r,
              i
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === Q) {
                t.tag = 11, t = Cm(
                  null,
                  t,
                  e,
                  r,
                  i
                );
                break e;
              } else if (u === G) {
                t.tag = 14, t = Om(
                  null,
                  t,
                  e,
                  r,
                  i
                );
                break e;
              }
            }
            throw t = te(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return wu(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return r = t.type, u = xa(
          r,
          t.pendingProps
        ), $m(
          e,
          t,
          r,
          u,
          i
        );
      case 3:
        e: {
          if ($e(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          r = t.pendingProps;
          var c = t.memoizedState;
          u = c.element, Js(e, t), ro(t, r, null, i);
          var _ = t.memoizedState;
          if (r = _.cache, Un(t, it, r), r !== c.cache && qs(
            t,
            [it],
            i,
            !0
          ), oo(), r = _.element, c.isDehydrated)
            if (c = {
              element: r,
              isDehydrated: !1,
              cache: _.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Ym(
                e,
                t,
                r,
                i
              );
              break e;
            } else if (r !== u) {
              u = Lt(
                Error(l(424)),
                t
              ), Ii(u), t = Ym(
                e,
                t,
                r,
                i
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = Jt(e.firstChild), mt = t, Ee = !0, Rn = null, Qt = !0, i = Df(
                t,
                null,
                r,
                i
              ), t.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (_a(), r === u) {
              t = Sn(
                e,
                t,
                i
              );
              break e;
            }
            ht(e, t, r, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Br(e, t), e === null ? (i = eh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : Ee || (i = t.type, e = t.pendingProps, r = al(
          pe.current
        ).createElement(i), r[ft] = t, r[zt] = e, _t(r, i, e), ct(r), t.stateNode = r) : t.memoizedState = eh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Bt(t), e === null && Ee && (r = t.stateNode = Wp(
          t.type,
          t.pendingProps,
          pe.current
        ), mt = t, Qt = !0, u = Ve, Pn(t.type) ? (sc = u, Ve = Jt(r.firstChild)) : Ve = u), ht(
          e,
          t,
          t.pendingProps.children,
          i
        ), Br(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ee && ((u = r = Ve) && (r = Ug(
          r,
          t.type,
          t.pendingProps,
          Qt
        ), r !== null ? (t.stateNode = r, mt = t, Ve = Jt(r.firstChild), Qt = !1, u = !0) : u = !1), u || Zn(t)), Bt(t), u = t.type, c = t.pendingProps, _ = e !== null ? e.memoizedProps : null, r = c.children, ac(u, c) ? r = null : _ !== null && ac(u, _) && (t.flags |= 32), t.memoizedState !== null && (u = nu(
          e,
          t,
          Fy,
          null,
          null,
          i
        ), To._currentValue = u), Br(e, t), ht(e, t, r, i), t.child;
      case 6:
        return e === null && Ee && ((e = i = Ve) && (i = $g(
          i,
          t.pendingProps,
          Qt
        ), i !== null ? (t.stateNode = i, mt = t, Ve = null, e = !0) : e = !1), e || Zn(t)), null;
      case 13:
        return Bm(e, t, i);
      case 4:
        return $e(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = wa(
          t,
          null,
          r,
          i
        ) : ht(e, t, r, i), t.child;
      case 11:
        return Cm(
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
        return r = t.pendingProps, Un(t, t.type, r.value), ht(e, t, r.children, i), t.child;
      case 9:
        return u = t.type._context, r = t.pendingProps.children, ya(t), u = pt(u), r = r(u), t.flags |= 1, ht(e, t, r, i), t.child;
      case 14:
        return Om(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return Nm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return Xm(e, t, i);
      case 31:
        return rg(e, t, i);
      case 22:
        return Dm(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        return ya(t), r = pt(it), e === null ? (u = Gs(), u === null && (u = Le, c = Ls(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= i), u = c), t.memoizedState = { parent: r, cache: u }, Ks(t), Un(t, it, u)) : ((e.lanes & i) !== 0 && (Js(e, t), ro(t, null, null, i), oo()), u = e.memoizedState, c = t.memoizedState, u.parent !== r ? (u = { parent: r, cache: r }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Un(t, it, r)) : (r = c.cache, Un(t, it, r), r !== u.cache && qs(
          t,
          [it],
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
    throw Error(l(156, t.tag));
  }
  function wn(e) {
    e.flags |= 4;
  }
  function Mu(e, t, i, r, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (_p()) e.flags |= 8192;
        else
          throw Sa = zr, Qs;
    } else e.flags &= -16777217;
  }
  function Lm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !oh(t))
      if (_p()) e.flags |= 8192;
      else
        throw Sa = zr, Qs;
  }
  function Xr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? wd() : 536870912, e.lanes |= t, vi |= t);
  }
  function mo(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), t = t.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var r = null; i !== null; )
            i.alternate !== null && (r = i), i = i.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, r = 0;
    if (t)
      for (var u = e.child; u !== null; )
        i |= u.lanes | u.childLanes, r |= u.subtreeFlags & 65011712, r |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        i |= u.lanes | u.childLanes, r |= u.subtreeFlags, r |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= r, e.childLanes = i, t;
  }
  function sg(e, t, i) {
    var r = t.pendingProps;
    switch ($s(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return i = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), yn(it), Ye(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ii(t) ? wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bs())), Ge(t), null;
      case 26:
        var u = t.type, c = t.memoizedState;
        return e === null ? (wn(t), c !== null ? (Ge(t), Lm(t, c)) : (Ge(t), Mu(
          t,
          u,
          null,
          r,
          i
        ))) : c ? c !== e.memoizedState ? (wn(t), Ge(t), Lm(t, c)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && wn(t), Ge(t), Mu(
          t,
          u,
          e,
          r,
          i
        )), null;
      case 27:
        if (It(t), i = pe.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && wn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ge(t), null;
          }
          e = ne.current, ii(t) ? kf(t) : (e = Wp(u, r, i), t.stateNode = e, wn(t));
        }
        return Ge(t), null;
      case 5:
        if (It(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && wn(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Ge(t), null;
          }
          if (c = ne.current, ii(t))
            kf(t);
          else {
            var _ = al(
              pe.current
            );
            switch (c) {
              case 1:
                c = _.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                c = _.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    c = _.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    c = _.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    c = _.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof r.is == "string" ? _.createElement("select", {
                      is: r.is
                    }) : _.createElement("select"), r.multiple ? c.multiple = !0 : r.size && (c.size = r.size);
                    break;
                  default:
                    c = typeof r.is == "string" ? _.createElement(u, { is: r.is }) : _.createElement(u);
                }
            }
            c[ft] = t, c[zt] = r;
            e: for (_ = t.child; _ !== null; ) {
              if (_.tag === 5 || _.tag === 6)
                c.appendChild(_.stateNode);
              else if (_.tag !== 4 && _.tag !== 27 && _.child !== null) {
                _.child.return = _, _ = _.child;
                continue;
              }
              if (_ === t) break e;
              for (; _.sibling === null; ) {
                if (_.return === null || _.return === t)
                  break e;
                _ = _.return;
              }
              _.sibling.return = _.return, _ = _.sibling;
            }
            t.stateNode = c;
            e: switch (_t(c, u, r), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && wn(t);
          }
        }
        return Ge(t), Mu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          i
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && wn(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = pe.current, ii(t)) {
            if (e = t.stateNode, i = t.memoizedProps, r = null, u = mt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === i || r !== null && r.suppressHydrationWarning === !0 || Bp(e.nodeValue, i)), e || Zn(t, !0);
          } else
            e = al(e).createTextNode(
              r
            ), e[ft] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (i = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = ii(t), i !== null) {
            if (e === null) {
              if (!r) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[ft] = t;
            } else
              _a(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = !1;
          } else
            i = Bs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), e = !0;
          if (!e)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Ge(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = ii(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[ft] = t;
            } else
              _a(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), u = !1;
          } else
            u = Bs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = i, t) : (i = r !== null, e = e !== null && e.memoizedState !== null, i && (r = t.child, u = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (u = r.alternate.memoizedState.cachePool.pool), c = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== u && (r.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), Xr(t, t.updateQueue), Ge(t), null);
      case 4:
        return Ye(), e === null && Fu(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return yn(t.type), Ge(t), null;
      case 19:
        if ($(tt), r = t.memoizedState, r === null) return Ge(t), null;
        if (u = (t.flags & 128) !== 0, c = r.rendering, c === null)
          if (u) mo(r, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Er(e), c !== null) {
                  for (t.flags |= 128, mo(r, !1), e = c.updateQueue, t.updateQueue = e, Xr(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    yf(i, e), i = i.sibling;
                  return W(
                    tt,
                    tt.current & 1 | 2
                  ), Ee && _n(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && St() > Qr && (t.flags |= 128, u = !0, mo(r, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Er(c), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Xr(t, e), mo(r, !0), r.tail === null && r.tailMode === "hidden" && !c.alternate && !Ee)
                return Ge(t), null;
            } else
              2 * St() - r.renderingStartTime > Qr && i !== 536870912 && (t.flags |= 128, u = !0, mo(r, !1), t.lanes = 4194304);
          r.isBackwards ? (c.sibling = t.child, t.child = c) : (e = r.last, e !== null ? e.sibling = c : t.child = c, r.last = c);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = St(), e.sibling = null, i = tt.current, W(
          tt,
          u ? i & 1 | 2 : i & 1
        ), Ee && _n(t, r.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return Zt(t), Is(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), i = t.updateQueue, i !== null && Xr(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== i && (t.flags |= 2048), e !== null && $(ga), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), yn(it), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function ug(e, t) {
    switch ($s(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return yn(it), Ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return It(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Zt(t), t.alternate === null)
            throw Error(l(340));
          _a();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          _a();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return $(tt), null;
      case 4:
        return Ye(), null;
      case 10:
        return yn(t.type), null;
      case 22:
      case 23:
        return Zt(t), Is(), e !== null && $(ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return yn(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vm(e, t) {
    switch ($s(t), t.tag) {
      case 3:
        yn(it), Ye();
        break;
      case 26:
      case 27:
      case 5:
        It(t);
        break;
      case 4:
        Ye();
        break;
      case 31:
        t.memoizedState !== null && Zt(t);
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        $(tt);
        break;
      case 10:
        yn(t.type);
        break;
      case 22:
      case 23:
        Zt(t), Is(), e !== null && $(ga);
        break;
      case 24:
        yn(it);
    }
  }
  function po(e, t) {
    try {
      var i = t.updateQueue, r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            r = void 0;
            var c = i.create, _ = i.inst;
            r = c(), _.destroy = r;
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (y) {
      Ue(t, t.return, y);
    }
  }
  function qn(e, t, i) {
    try {
      var r = t.updateQueue, u = r !== null ? r.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            var _ = r.inst, y = _.destroy;
            if (y !== void 0) {
              _.destroy = void 0, u = t;
              var k = i, M = y;
              try {
                M();
              } catch (U) {
                Ue(
                  u,
                  k,
                  U
                );
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (U) {
      Ue(t, t.return, U);
    }
  }
  function Gm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        Zf(t, i);
      } catch (r) {
        Ue(e, e.return, r);
      }
    }
  }
  function Qm(e, t, i) {
    i.props = xa(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  function ho(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(r) : i.current = r;
      }
    } catch (u) {
      Ue(e, t, u);
    }
  }
  function cn(e, t) {
    var i = e.ref, r = e.refCleanup;
    if (i !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (u) {
          Ue(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          Ue(e, t, u);
        }
      else i.current = null;
  }
  function Km(e) {
    var t = e.type, i = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && r.focus();
          break e;
        case "img":
          i.src ? r.src = i.src : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function Cu(e, t, i) {
    try {
      var r = e.stateNode;
      Cg(r, e.type, i, t), r[zt] = t;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  function Jm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Pn(e.type) || e.tag === 4;
  }
  function Ou(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Pn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Nu(e, t, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = mn));
    else if (r !== 4 && (r === 27 && Pn(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (Nu(e, t, i), e = e.sibling; e !== null; )
        Nu(e, t, i), e = e.sibling;
  }
  function qr(e, t, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (r !== 4 && (r === 27 && Pn(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (qr(e, t, i), e = e.sibling; e !== null; )
        qr(e, t, i), e = e.sibling;
  }
  function Pm(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var r = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      _t(t, r, i), t[ft] = e, t[zt] = i;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  var kn = !1, lt = !1, Du = !1, Wm = typeof WeakSet == "function" ? WeakSet : Set, dt = null;
  function cg(e, t) {
    if (e = e.containerInfo, tc = cl, e = uf(e), Ts(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var r = i.getSelection && i.getSelection();
          if (r && r.rangeCount !== 0) {
            i = r.anchorNode;
            var u = r.anchorOffset, c = r.focusNode;
            r = r.focusOffset;
            try {
              i.nodeType, c.nodeType;
            } catch {
              i = null;
              break e;
            }
            var _ = 0, y = -1, k = -1, M = 0, U = 0, H = e, C = null;
            t: for (; ; ) {
              for (var N; H !== i || u !== 0 && H.nodeType !== 3 || (y = _ + u), H !== c || r !== 0 && H.nodeType !== 3 || (k = _ + r), H.nodeType === 3 && (_ += H.nodeValue.length), (N = H.firstChild) !== null; )
                C = H, H = N;
              for (; ; ) {
                if (H === e) break t;
                if (C === i && ++M === u && (y = _), C === c && ++U === r && (k = _), (N = H.nextSibling) !== null) break;
                H = C, C = H.parentNode;
              }
              H = N;
            }
            i = y === -1 || k === -1 ? null : { start: y, end: k };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (nc = { focusedElem: e, selectionRange: i }, cl = !1, dt = t; dt !== null; )
      if (t = dt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, dt = e;
      else
        for (; dt !== null; ) {
          switch (t = dt, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (i = 0; i < e.length; i++)
                  u = e[i], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, i = t, u = c.memoizedProps, c = c.memoizedState, r = i.stateNode;
                try {
                  var le = xa(
                    i.type,
                    u
                  );
                  e = r.getSnapshotBeforeUpdate(
                    le,
                    c
                  ), r.__reactInternalSnapshotBeforeUpdate = e;
                } catch (he) {
                  Ue(
                    i,
                    i.return,
                    he
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  oc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      oc(e);
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
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, dt = e;
            break;
          }
          dt = t.return;
        }
  }
  function Fm(e, t, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        zn(e, i), r & 4 && po(5, i);
        break;
      case 1:
        if (zn(e, i), r & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (_) {
              Ue(i, i.return, _);
            }
          else {
            var u = xa(
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
            } catch (_) {
              Ue(
                i,
                i.return,
                _
              );
            }
          }
        r & 64 && Gm(i), r & 512 && ho(i, i.return);
        break;
      case 3:
        if (zn(e, i), r & 64 && (e = i.updateQueue, e !== null)) {
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
            Zf(e, t);
          } catch (_) {
            Ue(i, i.return, _);
          }
        }
        break;
      case 27:
        t === null && r & 4 && Pm(i);
      case 26:
      case 5:
        zn(e, i), t === null && r & 4 && Km(i), r & 512 && ho(i, i.return);
        break;
      case 12:
        zn(e, i);
        break;
      case 31:
        zn(e, i), r & 4 && tp(e, i);
        break;
      case 13:
        zn(e, i), r & 4 && np(e, i), r & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = gg.bind(
          null,
          i
        ), Yg(e, i))));
        break;
      case 22:
        if (r = i.memoizedState !== null || kn, !r) {
          t = t !== null && t.memoizedState !== null || lt, u = kn;
          var c = lt;
          kn = r, (lt = t) && !c ? jn(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : zn(e, i), kn = u, lt = c;
        }
        break;
      case 30:
        break;
      default:
        zn(e, i);
    }
  }
  function Im(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Im(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && cs(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, Tt = !1;
  function xn(e, t, i) {
    for (i = i.child; i !== null; )
      ep(e, t, i), i = i.sibling;
  }
  function ep(e, t, i) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(ua, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        lt || cn(i, t), xn(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        lt || cn(i, t);
        var r = Qe, u = Tt;
        Pn(i.type) && (Qe = i.stateNode, Tt = !1), xn(
          e,
          t,
          i
        ), xo(i.stateNode), Qe = r, Tt = u;
        break;
      case 5:
        lt || cn(i, t);
      case 6:
        if (r = Qe, u = Tt, Qe = null, xn(
          e,
          t,
          i
        ), Qe = r, Tt = u, Qe !== null)
          if (Tt)
            try {
              (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(i.stateNode);
            } catch (c) {
              Ue(
                i,
                t,
                c
              );
            }
          else
            try {
              Qe.removeChild(i.stateNode);
            } catch (c) {
              Ue(
                i,
                t,
                c
              );
            }
        break;
      case 18:
        Qe !== null && (Tt ? (e = Qe, Gp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), zi(e)) : Gp(Qe, i.stateNode));
        break;
      case 4:
        r = Qe, u = Tt, Qe = i.stateNode.containerInfo, Tt = !0, xn(
          e,
          t,
          i
        ), Qe = r, Tt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qn(2, i, t), lt || qn(4, i, t), xn(
          e,
          t,
          i
        );
        break;
      case 1:
        lt || (cn(i, t), r = i.stateNode, typeof r.componentWillUnmount == "function" && Qm(
          i,
          t,
          r
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
        lt = (r = lt) || i.memoizedState !== null, xn(
          e,
          t,
          i
        ), lt = r;
        break;
      default:
        xn(
          e,
          t,
          i
        );
    }
  }
  function tp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        zi(e);
      } catch (i) {
        Ue(t, t.return, i);
      }
    }
  }
  function np(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zi(e);
      } catch (i) {
        Ue(t, t.return, i);
      }
  }
  function dg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Wm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Wm()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Lr(e, t) {
    var i = dg(e);
    t.forEach(function(r) {
      if (!i.has(r)) {
        i.add(r);
        var u = bg.bind(null, e, r);
        r.then(u, u);
      }
    });
  }
  function At(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var r = 0; r < i.length; r++) {
        var u = i[r], c = e, _ = t, y = _;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Pn(y.type)) {
                Qe = y.stateNode, Tt = !1;
                break e;
              }
              break;
            case 5:
              Qe = y.stateNode, Tt = !1;
              break e;
            case 3:
            case 4:
              Qe = y.stateNode.containerInfo, Tt = !0;
              break e;
          }
          y = y.return;
        }
        if (Qe === null) throw Error(l(160));
        ep(c, _, u), Qe = null, Tt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ap(t, e), t = t.sibling;
  }
  var tn = null;
  function ap(e, t) {
    var i = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        At(t, e), Et(e), r & 4 && (qn(3, e, e.return), po(3, e), qn(5, e, e.return));
        break;
      case 1:
        At(t, e), Et(e), r & 512 && (lt || i === null || cn(i, i.return)), r & 64 && kn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? r : i.concat(r))));
        break;
      case 26:
        var u = tn;
        if (At(t, e), Et(e), r & 512 && (lt || i === null || cn(i, i.return)), r & 4) {
          var c = i !== null ? i.memoizedState : null;
          if (r = e.memoizedState, i === null)
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  r = e.type, i = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (r) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Hi] || c[ft] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(r), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), _t(c, r, i), c[ft] = e, ct(c), r = c;
                      break e;
                    case "link":
                      var _ = ah(
                        "link",
                        "href",
                        u
                      ).get(r + (i.href || ""));
                      if (_) {
                        for (var y = 0; y < _.length; y++)
                          if (c = _[y], c.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && c.getAttribute("rel") === (i.rel == null ? null : i.rel) && c.getAttribute("title") === (i.title == null ? null : i.title) && c.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            _.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(r), _t(c, r, i), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (_ = ah(
                        "meta",
                        "content",
                        u
                      ).get(r + (i.content || ""))) {
                        for (y = 0; y < _.length; y++)
                          if (c = _[y], c.getAttribute("content") === (i.content == null ? null : "" + i.content) && c.getAttribute("name") === (i.name == null ? null : i.name) && c.getAttribute("property") === (i.property == null ? null : i.property) && c.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && c.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            _.splice(y, 1);
                            break t;
                          }
                      }
                      c = u.createElement(r), _t(c, r, i), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(l(468, r));
                  }
                  c[ft] = e, ct(c), r = c;
                }
                e.stateNode = r;
              } else
                ih(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = nh(
                u,
                r,
                e.memoizedProps
              );
          else
            c !== r ? (c === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : c.count--, r === null ? ih(
              u,
              e.type,
              e.stateNode
            ) : nh(
              u,
              r,
              e.memoizedProps
            )) : r === null && e.stateNode !== null && Cu(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        At(t, e), Et(e), r & 512 && (lt || i === null || cn(i, i.return)), i !== null && r & 4 && Cu(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (At(t, e), Et(e), r & 512 && (lt || i === null || cn(i, i.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ka(u, "");
          } catch (le) {
            Ue(e, e.return, le);
          }
        }
        r & 4 && e.stateNode != null && (u = e.memoizedProps, Cu(
          e,
          u,
          i !== null ? i.memoizedProps : u
        )), r & 1024 && (Du = !0);
        break;
      case 6:
        if (At(t, e), Et(e), r & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          r = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = r;
          } catch (le) {
            Ue(e, e.return, le);
          }
        }
        break;
      case 3:
        if (rl = null, u = tn, tn = il(t.containerInfo), At(t, e), tn = u, Et(e), r & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            zi(t.containerInfo);
          } catch (le) {
            Ue(e, e.return, le);
          }
        Du && (Du = !1, ip(e));
        break;
      case 4:
        r = tn, tn = il(
          e.stateNode.containerInfo
        ), At(t, e), Et(e), tn = r;
        break;
      case 12:
        At(t, e), Et(e);
        break;
      case 31:
        At(t, e), Et(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Lr(e, r)));
        break;
      case 13:
        At(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Gr = St()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Lr(e, r)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var k = i !== null && i.memoizedState !== null, M = kn, U = lt;
        if (kn = M || u, lt = U || k, At(t, e), lt = U, kn = M, Et(e), r & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (i === null || k || kn || lt || za(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                k = i = t;
                try {
                  if (c = k.stateNode, u)
                    _ = c.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    y = k.stateNode;
                    var H = k.memoizedProps.style, C = H != null && H.hasOwnProperty("display") ? H.display : null;
                    y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (le) {
                  Ue(k, k.return, le);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = u ? "" : k.memoizedProps;
                } catch (le) {
                  Ue(k, k.return, le);
                }
              }
            } else if (t.tag === 18) {
              if (i === null) {
                k = t;
                try {
                  var N = k.stateNode;
                  u ? Qp(N, !0) : Qp(k.stateNode, !1);
                } catch (le) {
                  Ue(k, k.return, le);
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
        r & 4 && (r = e.updateQueue, r !== null && (i = r.retryQueue, i !== null && (r.retryQueue = null, Lr(e, i))));
        break;
      case 19:
        At(t, e), Et(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Lr(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        At(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, r = e.return; r !== null; ) {
          if (Jm(r)) {
            i = r;
            break;
          }
          r = r.return;
        }
        if (i == null) throw Error(l(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode, c = Ou(e);
            qr(e, c, u);
            break;
          case 5:
            var _ = i.stateNode;
            i.flags & 32 && (Ka(_, ""), i.flags &= -33);
            var y = Ou(e);
            qr(e, y, _);
            break;
          case 3:
          case 4:
            var k = i.stateNode.containerInfo, M = Ou(e);
            Nu(
              e,
              M,
              k
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (U) {
        Ue(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ip(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ip(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function zn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Fm(e, t.alternate, t), t = t.sibling;
  }
  function za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qn(4, t, t.return), za(t);
          break;
        case 1:
          cn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && Qm(
            t,
            t.return,
            i
          ), za(t);
          break;
        case 27:
          xo(t.stateNode);
        case 26:
        case 5:
          cn(t, t.return), za(t);
          break;
        case 22:
          t.memoizedState === null && za(t);
          break;
        case 30:
          za(t);
          break;
        default:
          za(t);
      }
      e = e.sibling;
    }
  }
  function jn(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate, u = e, c = t, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          jn(
            u,
            c,
            i
          ), po(4, c);
          break;
        case 1:
          if (jn(
            u,
            c,
            i
          ), r = c, u = r.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (M) {
              Ue(r, r.return, M);
            }
          if (r = c, u = r.updateQueue, u !== null) {
            var y = r.stateNode;
            try {
              var k = u.shared.hiddenCallbacks;
              if (k !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < k.length; u++)
                  Rf(k[u], y);
            } catch (M) {
              Ue(r, r.return, M);
            }
          }
          i && _ & 64 && Gm(c), ho(c, c.return);
          break;
        case 27:
          Pm(c);
        case 26:
        case 5:
          jn(
            u,
            c,
            i
          ), i && r === null && _ & 4 && Km(c), ho(c, c.return);
          break;
        case 12:
          jn(
            u,
            c,
            i
          );
          break;
        case 31:
          jn(
            u,
            c,
            i
          ), i && _ & 4 && tp(u, c);
          break;
        case 13:
          jn(
            u,
            c,
            i
          ), i && _ & 4 && np(u, c);
          break;
        case 22:
          c.memoizedState === null && jn(
            u,
            c,
            i
          ), ho(c, c.return);
          break;
        case 30:
          break;
        default:
          jn(
            u,
            c,
            i
          );
      }
      t = t.sibling;
    }
  }
  function Ru(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && eo(i));
  }
  function Zu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && eo(e));
  }
  function nn(e, t, i, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        op(
          e,
          t,
          i,
          r
        ), t = t.sibling;
  }
  function op(e, t, i, r) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nn(
          e,
          t,
          i,
          r
        ), u & 2048 && po(9, t);
        break;
      case 1:
        nn(
          e,
          t,
          i,
          r
        );
        break;
      case 3:
        nn(
          e,
          t,
          i,
          r
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && eo(e)));
        break;
      case 12:
        if (u & 2048) {
          nn(
            e,
            t,
            i,
            r
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, _ = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              _,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Ue(t, t.return, k);
          }
        } else
          nn(
            e,
            t,
            i,
            r
          );
        break;
      case 31:
        nn(
          e,
          t,
          i,
          r
        );
        break;
      case 13:
        nn(
          e,
          t,
          i,
          r
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, _ = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? nn(
          e,
          t,
          i,
          r
        ) : _o(e, t) : c._visibility & 2 ? nn(
          e,
          t,
          i,
          r
        ) : (c._visibility |= 2, pi(
          e,
          t,
          i,
          r,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ru(_, t);
        break;
      case 24:
        nn(
          e,
          t,
          i,
          r
        ), u & 2048 && Zu(t.alternate, t);
        break;
      default:
        nn(
          e,
          t,
          i,
          r
        );
    }
  }
  function pi(e, t, i, r, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, _ = t, y = i, k = r, M = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          pi(
            c,
            _,
            y,
            k,
            u
          ), po(8, _);
          break;
        case 23:
          break;
        case 22:
          var U = _.stateNode;
          _.memoizedState !== null ? U._visibility & 2 ? pi(
            c,
            _,
            y,
            k,
            u
          ) : _o(
            c,
            _
          ) : (U._visibility |= 2, pi(
            c,
            _,
            y,
            k,
            u
          )), u && M & 2048 && Ru(
            _.alternate,
            _
          );
          break;
        case 24:
          pi(
            c,
            _,
            y,
            k,
            u
          ), u && M & 2048 && Zu(_.alternate, _);
          break;
        default:
          pi(
            c,
            _,
            y,
            k,
            u
          );
      }
      t = t.sibling;
    }
  }
  function _o(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, r = t, u = r.flags;
        switch (r.tag) {
          case 22:
            _o(i, r), u & 2048 && Ru(
              r.alternate,
              r
            );
            break;
          case 24:
            _o(i, r), u & 2048 && Zu(r.alternate, r);
            break;
          default:
            _o(i, r);
        }
        t = t.sibling;
      }
  }
  var vo = 8192;
  function hi(e, t, i) {
    if (e.subtreeFlags & vo)
      for (e = e.child; e !== null; )
        rp(
          e,
          t,
          i
        ), e = e.sibling;
  }
  function rp(e, t, i) {
    switch (e.tag) {
      case 26:
        hi(
          e,
          t,
          i
        ), e.flags & vo && e.memoizedState !== null && Wg(
          i,
          tn,
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
        var r = tn;
        tn = il(e.stateNode.containerInfo), hi(
          e,
          t,
          i
        ), tn = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = vo, vo = 16777216, hi(
          e,
          t,
          i
        ), vo = r) : hi(
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
  function lp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function yo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          dt = r, up(
            r,
            e
          );
        }
      lp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        sp(e), e = e.sibling;
  }
  function sp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yo(e), e.flags & 2048 && qn(9, e, e.return);
        break;
      case 3:
        yo(e);
        break;
      case 12:
        yo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Vr(e)) : yo(e);
        break;
      default:
        yo(e);
    }
  }
  function Vr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          dt = r, up(
            r,
            e
          );
        }
      lp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, t, t.return), Vr(t);
          break;
        case 22:
          i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, Vr(t));
          break;
        default:
          Vr(t);
      }
      e = e.sibling;
    }
  }
  function up(e, t) {
    for (; dt !== null; ) {
      var i = dt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          eo(i.memoizedState.cache);
      }
      if (r = i.child, r !== null) r.return = i, dt = r;
      else
        e: for (i = e; dt !== null; ) {
          r = dt;
          var u = r.sibling, c = r.return;
          if (Im(r), r === i) {
            dt = null;
            break e;
          }
          if (u !== null) {
            u.return = c, dt = u;
            break e;
          }
          dt = c;
        }
    }
  }
  var fg = {
    getCacheForType: function(e) {
      var t = pt(it), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    },
    cacheSignal: function() {
      return pt(it).controller.signal;
    }
  }, mg = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, Le = null, we = null, ze = 0, Ze = 0, Ut = null, Ln = !1, _i = !1, Uu = !1, Tn = 0, We = 0, Vn = 0, ja = 0, $u = 0, $t = 0, vi = 0, go = null, Mt = null, Yu = !1, Gr = 0, cp = 0, Qr = 1 / 0, Kr = null, Gn = null, st = 0, Qn = null, yi = null, An = 0, Bu = 0, Hu = null, dp = null, bo = 0, Xu = null;
  function Yt() {
    return (Re & 2) !== 0 && ze !== 0 ? ze & -ze : A.T !== null ? Ku() : jd();
  }
  function fp() {
    if ($t === 0)
      if ((ze & 536870912) === 0 || Ee) {
        var e = V;
        V <<= 1, (V & 3932160) === 0 && (V = 262144), $t = e;
      } else $t = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), $t;
  }
  function Ct(e, t, i) {
    (e === Le && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (gi(e, 0), Kn(
      e,
      ze,
      $t,
      !1
    )), Bi(e, i), ((Re & 2) === 0 || e !== Le) && (e === Le && ((Re & 2) === 0 && (ja |= i), We === 4 && Kn(
      e,
      ze,
      $t,
      !1
    )), dn(e));
  }
  function mp(e, t, i) {
    if ((Re & 6) !== 0) throw Error(l(327));
    var r = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Yi(e, t), u = r ? _g(e, t) : Lu(e, t, !0), c = r;
    do {
      if (u === 0) {
        _i && !r && Kn(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, c && !pg(i)) {
          u = Lu(e, t, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var _ = 0;
          else
            _ = e.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            t = _;
            e: {
              var y = e;
              u = go;
              var k = y.current.memoizedState.isDehydrated;
              if (k && (gi(y, _).flags |= 256), _ = Lu(
                y,
                _,
                !1
              ), _ !== 2) {
                if (Uu && !k) {
                  y.errorRecoveryDisabledLanes |= c, ja |= c, u = 4;
                  break e;
                }
                c = Mt, Mt = u, c !== null && (Mt === null ? Mt = c : Mt.push.apply(
                  Mt,
                  c
                ));
              }
              u = _;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          gi(e, 0), Kn(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, c = u, c) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Kn(
                r,
                t,
                $t,
                !Ln
              );
              break e;
            case 2:
              Mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (u = Gr + 300 - St(), 10 < u)) {
            if (Kn(
              r,
              t,
              $t,
              !Ln
            ), et(r, 0, !0) !== 0) break e;
            An = t, r.timeoutHandle = Lp(
              pp.bind(
                null,
                r,
                i,
                Mt,
                Kr,
                Yu,
                t,
                $t,
                ja,
                vi,
                Ln,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          pp(
            r,
            i,
            Mt,
            Kr,
            Yu,
            t,
            $t,
            ja,
            vi,
            Ln,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    dn(e);
  }
  function pp(e, t, i, r, u, c, _, y, k, M, U, H, C, N) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, rp(
        t,
        c,
        H
      );
      var le = (c & 62914560) === c ? Gr - St() : (c & 4194048) === c ? cp - St() : 0;
      if (le = Fg(
        H,
        le
      ), le !== null) {
        An = c, e.cancelPendingCommit = le(
          wp.bind(
            null,
            e,
            t,
            c,
            i,
            r,
            u,
            _,
            y,
            k,
            U,
            H,
            null,
            C,
            N
          )
        ), Kn(e, c, _, !M);
        return;
      }
    }
    wp(
      e,
      t,
      c,
      i,
      r,
      u,
      _,
      y,
      k
    );
  }
  function pg(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var r = 0; r < i.length; r++) {
          var u = i[r], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Nt(c(), u)) return !1;
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
  function Kn(e, t, i, r) {
    t &= ~$u, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var c = 31 - ut(u), _ = 1 << c;
      r[c] = -1, u &= ~_;
    }
    i !== 0 && kd(e, i, t);
  }
  function Jr() {
    return (Re & 6) === 0 ? (So(0), !1) : !0;
  }
  function qu() {
    if (we !== null) {
      if (Ze === 0)
        var e = we.return;
      else
        e = we, vn = va = null, ou(e), ui = null, no = 0, e = we;
      for (; e !== null; )
        Vm(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function gi(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, Dg(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), An = 0, qu(), Le = e, we = i = hn(e.current, null), ze = t, Ze = 0, Ut = null, Ln = !1, _i = Yi(e, t), Uu = !1, vi = $t = $u = ja = Vn = We = 0, Mt = go = null, Yu = !1, (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var u = 31 - ut(r), c = 1 << u;
        t |= e[u], r &= ~c;
      }
    return Tn = t, _r(), i;
  }
  function hp(e, t) {
    ge = null, A.H = co, t === si || t === xr ? (t = Cf(), Ze = 3) : t === Qs ? (t = Cf(), Ze = 4) : Ze = t === Su ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ut = t, we === null && (We = 1, $r(
      e,
      Lt(t, e.current)
    ));
  }
  function _p() {
    var e = Rt.current;
    return e === null ? !0 : (ze & 4194048) === ze ? Kt === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === Kt : !1;
  }
  function vp() {
    var e = A.H;
    return A.H = co, e === null ? co : e;
  }
  function yp() {
    var e = A.A;
    return A.A = fg, e;
  }
  function Pr() {
    We = 4, Ln || (ze & 4194048) !== ze && Rt.current !== null || (_i = !0), (Vn & 134217727) === 0 && (ja & 134217727) === 0 || Le === null || Kn(
      Le,
      ze,
      $t,
      !1
    );
  }
  function Lu(e, t, i) {
    var r = Re;
    Re |= 2;
    var u = vp(), c = yp();
    (Le !== e || ze !== t) && (Kr = null, gi(e, t)), t = !1;
    var _ = We;
    e: do
      try {
        if (Ze !== 0 && we !== null) {
          var y = we, k = Ut;
          switch (Ze) {
            case 8:
              qu(), _ = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var M = Ze;
              if (Ze = 0, Ut = null, bi(e, y, k, M), i && _i) {
                _ = 0;
                break e;
              }
              break;
            default:
              M = Ze, Ze = 0, Ut = null, bi(e, y, k, M);
          }
        }
        hg(), _ = We;
        break;
      } catch (U) {
        hp(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = va = null, Re = r, A.H = u, A.A = c, we === null && (Le = null, ze = 0, _r()), _;
  }
  function hg() {
    for (; we !== null; ) gp(we);
  }
  function _g(e, t) {
    var i = Re;
    Re |= 2;
    var r = vp(), u = yp();
    Le !== e || ze !== t ? (Kr = null, Qr = St() + 500, gi(e, t)) : _i = Yi(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && we !== null) {
          t = we;
          var c = Ut;
          t: switch (Ze) {
            case 1:
              Ze = 0, Ut = null, bi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Ef(c)) {
                Ze = 0, Ut = null, bp(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || Le !== e || (Ze = 7), dn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              Ef(c) ? (Ze = 0, Ut = null, bp(t)) : (Ze = 0, Ut = null, bi(e, t, c, 7));
              break;
            case 5:
              var _ = null;
              switch (we.tag) {
                case 26:
                  _ = we.memoizedState;
                case 5:
                case 27:
                  var y = we;
                  if (_ ? oh(_) : y.stateNode.complete) {
                    Ze = 0, Ut = null;
                    var k = y.sibling;
                    if (k !== null) we = k;
                    else {
                      var M = y.return;
                      M !== null ? (we = M, Wr(M)) : we = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Ut = null, bi(e, t, c, 5);
              break;
            case 6:
              Ze = 0, Ut = null, bi(e, t, c, 6);
              break;
            case 8:
              qu(), We = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        vg();
        break;
      } catch (U) {
        hp(e, U);
      }
    while (!0);
    return vn = va = null, A.H = r, A.A = u, Re = i, we !== null ? 0 : (Le = null, ze = 0, _r(), We);
  }
  function vg() {
    for (; we !== null && !es(); )
      gp(we);
  }
  function gp(e) {
    var t = qm(e.alternate, e, Tn);
    e.memoizedProps = e.pendingProps, t === null ? Wr(e) : we = t;
  }
  function bp(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Um(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = Um(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        ou(t);
      default:
        Vm(i, t), t = we = yf(t, Tn), t = qm(i, t, Tn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Wr(e) : we = t;
  }
  function bi(e, t, i, r) {
    vn = va = null, ou(t), ui = null, no = 0;
    var u = t.return;
    try {
      if (og(
        e,
        u,
        t,
        i,
        ze
      )) {
        We = 1, $r(
          e,
          Lt(i, e.current)
        ), we = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw we = u, c;
      We = 1, $r(
        e,
        Lt(i, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Ee || r === 1 ? e = !0 : _i || (ze & 536870912) !== 0 ? e = !1 : (Ln = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Rt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Sp(t, e)) : Wr(t);
  }
  function Wr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sp(
          t,
          Ln
        );
        return;
      }
      e = t.return;
      var i = sg(
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
    We === 0 && (We = 5);
  }
  function Sp(e, t) {
    do {
      var i = ug(e.alternate, e);
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
    We = 6, we = null;
  }
  function wp(e, t, i, r, u, c, _, y, k) {
    e.cancelPendingCommit = null;
    do
      Fr();
    while (st !== 0);
    if ((Re & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (c = t.lanes | t.childLanes, c |= Os, Pv(
        e,
        i,
        c,
        _,
        y,
        k
      ), e === Le && (we = Le = null, ze = 0), yi = t, Qn = e, An = i, Bu = c, Hu = u, dp = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sg(Ba, function() {
        return Tp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
        r = A.T, A.T = null, u = L.p, L.p = 2, _ = Re, Re |= 4;
        try {
          cg(e, t, i);
        } finally {
          Re = _, L.p = u, A.T = r;
        }
      }
      st = 1, kp(), xp(), zp();
    }
  }
  function kp() {
    if (st === 1) {
      st = 0;
      var e = Qn, t = yi, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = A.T, A.T = null;
        var r = L.p;
        L.p = 2;
        var u = Re;
        Re |= 4;
        try {
          ap(t, e);
          var c = nc, _ = uf(e.containerInfo), y = c.focusedElem, k = c.selectionRange;
          if (_ !== y && y && y.ownerDocument && sf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (k !== null && Ts(y)) {
              var M = k.start, U = k.end;
              if (U === void 0 && (U = M), "selectionStart" in y)
                y.selectionStart = M, y.selectionEnd = Math.min(
                  U,
                  y.value.length
                );
              else {
                var H = y.ownerDocument || document, C = H && H.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), le = y.textContent.length, he = Math.min(k.start, le), Xe = k.end === void 0 ? he : Math.min(k.end, le);
                  !N.extend && he > Xe && (_ = Xe, Xe = he, he = _);
                  var T = lf(
                    y,
                    he
                  ), j = lf(
                    y,
                    Xe
                  );
                  if (T && j && (N.rangeCount !== 1 || N.anchorNode !== T.node || N.anchorOffset !== T.offset || N.focusNode !== j.node || N.focusOffset !== j.offset)) {
                    var E = H.createRange();
                    E.setStart(T.node, T.offset), N.removeAllRanges(), he > Xe ? (N.addRange(E), N.extend(j.node, j.offset)) : (E.setEnd(j.node, j.offset), N.addRange(E));
                  }
                }
              }
            }
            for (H = [], N = y; N = N.parentNode; )
              N.nodeType === 1 && H.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < H.length; y++) {
              var Y = H[y];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          cl = !!tc, nc = tc = null;
        } finally {
          Re = u, L.p = r, A.T = i;
        }
      }
      e.current = t, st = 2;
    }
  }
  function xp() {
    if (st === 2) {
      st = 0;
      var e = Qn, t = yi, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = A.T, A.T = null;
        var r = L.p;
        L.p = 2;
        var u = Re;
        Re |= 4;
        try {
          Fm(e, t.alternate, t);
        } finally {
          Re = u, L.p = r, A.T = i;
        }
      }
      st = 3;
    }
  }
  function zp() {
    if (st === 4 || st === 3) {
      st = 0, tr();
      var e = Qn, t = yi, i = An, r = dp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, yi = Qn = null, jp(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Gn = null), ss(i), t = t.stateNode, wt && typeof wt.onCommitFiberRoot == "function")
        try {
          wt.onCommitFiberRoot(
            ua,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        t = A.T, u = L.p, L.p = 2, A.T = null;
        try {
          for (var c = e.onRecoverableError, _ = 0; _ < r.length; _++) {
            var y = r[_];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          A.T = t, L.p = u;
        }
      }
      (An & 3) !== 0 && Fr(), dn(e), u = e.pendingLanes, (i & 261930) !== 0 && (u & 42) !== 0 ? e === Xu ? bo++ : (bo = 0, Xu = e) : bo = 0, So(0);
    }
  }
  function jp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, eo(t)));
  }
  function Fr() {
    return kp(), xp(), zp(), Tp();
  }
  function Tp() {
    if (st !== 5) return !1;
    var e = Qn, t = Bu;
    Bu = 0;
    var i = ss(An), r = A.T, u = L.p;
    try {
      L.p = 32 > i ? 32 : i, A.T = null, i = Hu, Hu = null;
      var c = Qn, _ = An;
      if (st = 0, yi = Qn = null, An = 0, (Re & 6) !== 0) throw Error(l(331));
      var y = Re;
      if (Re |= 4, sp(c.current), op(
        c,
        c.current,
        _,
        i
      ), Re = y, So(0, !1), wt && typeof wt.onPostCommitFiberRoot == "function")
        try {
          wt.onPostCommitFiberRoot(ua, c);
        } catch {
        }
      return !0;
    } finally {
      L.p = u, A.T = r, jp(e, t);
    }
  }
  function Ap(e, t, i) {
    t = Lt(i, t), t = bu(e.stateNode, t, 2), e = Bn(e, t, 2), e !== null && (Bi(e, 2), dn(e));
  }
  function Ue(e, t, i) {
    if (e.tag === 3)
      Ap(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ap(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
            e = Lt(i, e), i = Em(2), r = Bn(t, i, 2), r !== null && (Mm(
              i,
              r,
              t,
              e
            ), Bi(r, 2), dn(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vu(e, t, i) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mg();
      var u = /* @__PURE__ */ new Set();
      r.set(t, u);
    } else
      u = r.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), r.set(t, u));
    u.has(i) || (Uu = !0, u.add(i), e = yg.bind(null, e, t, i), t.then(e, e));
  }
  function yg(e, t, i) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, Le === e && (ze & i) === i && (We === 4 || We === 3 && (ze & 62914560) === ze && 300 > St() - Gr ? (Re & 2) === 0 && gi(e, 0) : $u |= i, vi === ze && (vi = 0)), dn(e);
  }
  function Ep(e, t) {
    t === 0 && (t = wd()), e = pa(e, t), e !== null && (Bi(e, t), dn(e));
  }
  function gg(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Ep(e, i);
  }
  function bg(e, t) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), Ep(e, i);
  }
  function Sg(e, t) {
    return la(e, t);
  }
  var Ir = null, Si = null, Gu = !1, el = !1, Qu = !1, Jn = 0;
  function dn(e) {
    e !== Si && e.next === null && (Si === null ? Ir = Si = e : Si = Si.next = e), el = !0, Gu || (Gu = !0, kg());
  }
  function So(e, t) {
    if (!Qu && el) {
      Qu = !0;
      do
        for (var i = !1, r = Ir; r !== null; ) {
          if (e !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var _ = r.suspendedLanes, y = r.pingedLanes;
              c = (1 << 31 - ut(42 | e) + 1) - 1, c &= u & ~(_ & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (i = !0, Np(r, c));
          } else
            c = ze, c = et(
              r,
              r === Le ? c : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (c & 3) === 0 || Yi(r, c) || (i = !0, Np(r, c));
          r = r.next;
        }
      while (i);
      Qu = !1;
    }
  }
  function wg() {
    Mp();
  }
  function Mp() {
    el = Gu = !1;
    var e = 0;
    Jn !== 0 && Ng() && (e = Jn);
    for (var t = St(), i = null, r = Ir; r !== null; ) {
      var u = r.next, c = Cp(r, t);
      c === 0 ? (r.next = null, i === null ? Ir = u : i.next = u, u === null && (Si = i)) : (i = r, (e !== 0 || (c & 3) !== 0) && (el = !0)), r = u;
    }
    st !== 0 && st !== 5 || So(e), Jn !== 0 && (Jn = 0);
  }
  function Cp(e, t) {
    for (var i = e.suspendedLanes, r = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var _ = 31 - ut(c), y = 1 << _, k = u[_];
      k === -1 ? ((y & i) === 0 || (y & r) !== 0) && (u[_] = Jv(y, t)) : k <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = Le, i = ze, i = et(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, i === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && Ui(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Yi(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (r !== null && Ui(r), ss(i)) {
        case 2:
        case 8:
          i = ar;
          break;
        case 32:
          i = Ba;
          break;
        case 268435456:
          i = ir;
          break;
        default:
          i = Ba;
      }
      return r = Op.bind(null, e), i = la(i, r), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return r !== null && r !== null && Ui(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Op(e, t) {
    if (st !== 0 && st !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (Fr() && e.callbackNode !== i)
      return null;
    var r = ze;
    return r = et(
      e,
      e === Le ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (mp(e, r, t), Cp(e, St()), e.callbackNode != null && e.callbackNode === i ? Op.bind(null, e) : null);
  }
  function Np(e, t) {
    if (Fr()) return null;
    mp(e, t, !0);
  }
  function kg() {
    Rg(function() {
      (Re & 6) !== 0 ? la(
        $i,
        wg
      ) : Mp();
    });
  }
  function Ku() {
    if (Jn === 0) {
      var e = ri;
      e === 0 && (e = Ha, Ha <<= 1, (Ha & 261888) === 0 && (Ha = 256)), Jn = e;
    }
    return Jn;
  }
  function Dp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : sr("" + e);
  }
  function Rp(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function xg(e, t, i, r, u) {
    if (t === "submit" && i && i.stateNode === u) {
      var c = Dp(
        (u[zt] || null).action
      ), _ = r.submitter;
      _ && (t = (t = _[zt] || null) ? Dp(t.formAction) : _.getAttribute("formAction"), t !== null && (c = t, _ = null));
      var y = new fr(
        "action",
        "action",
        null,
        r,
        u
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Jn !== 0) {
                  var k = _ ? Rp(u, _) : new FormData(u);
                  pu(
                    i,
                    {
                      pending: !0,
                      data: k,
                      method: u.method,
                      action: c
                    },
                    null,
                    k
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), k = _ ? Rp(u, _) : new FormData(u), pu(
                  i,
                  {
                    pending: !0,
                    data: k,
                    method: u.method,
                    action: c
                  },
                  c,
                  k
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Ju = 0; Ju < Cs.length; Ju++) {
    var Pu = Cs[Ju], zg = Pu.toLowerCase(), jg = Pu[0].toUpperCase() + Pu.slice(1);
    en(
      zg,
      "on" + jg
    );
  }
  en(ff, "onAnimationEnd"), en(mf, "onAnimationIteration"), en(pf, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(Xy, "onTransitionRun"), en(qy, "onTransitionStart"), en(Ly, "onTransitionCancel"), en(hf, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var wo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo)
  );
  function Zp(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var r = e[i], u = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var _ = r.length - 1; 0 <= _; _--) {
            var y = r[_], k = y.instance, M = y.currentTarget;
            if (y = y.listener, k !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = M;
            try {
              c(u);
            } catch (U) {
              hr(U);
            }
            u.currentTarget = null, c = k;
          }
        else
          for (_ = 0; _ < r.length; _++) {
            if (y = r[_], k = y.instance, M = y.currentTarget, y = y.listener, k !== c && u.isPropagationStopped())
              break e;
            c = y, u.currentTarget = M;
            try {
              c(u);
            } catch (U) {
              hr(U);
            }
            u.currentTarget = null, c = k;
          }
      }
    }
  }
  function ke(e, t) {
    var i = t[us];
    i === void 0 && (i = t[us] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    i.has(r) || (Up(t, e, 2, !1), i.add(r));
  }
  function Wu(e, t, i) {
    var r = 0;
    t && (r |= 4), Up(
      i,
      e,
      r,
      t
    );
  }
  var tl = "_reactListening" + Math.random().toString(36).slice(2);
  function Fu(e) {
    if (!e[tl]) {
      e[tl] = !0, Ed.forEach(function(i) {
        i !== "selectionchange" && (Tg.has(i) || Wu(i, !1, e), Wu(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tl] || (t[tl] = !0, Wu("selectionchange", !1, t));
    }
  }
  function Up(e, t, i, r) {
    switch (fh(t)) {
      case 2:
        var u = tb;
        break;
      case 8:
        u = nb;
        break;
      default:
        u = mc;
    }
    i = u.bind(
      null,
      t,
      i,
      e
    ), u = void 0, !ys || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), r ? u !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
      passive: u
    }) : e.addEventListener(t, i, !1);
  }
  function Iu(e, t, i, r, u) {
    var c = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var _ = r.tag;
        if (_ === 3 || _ === 4) {
          var y = r.stateNode.containerInfo;
          if (y === u) break;
          if (_ === 4)
            for (_ = r.return; _ !== null; ) {
              var k = _.tag;
              if ((k === 3 || k === 4) && _.stateNode.containerInfo === u)
                return;
              _ = _.return;
            }
          for (; y !== null; ) {
            if (_ = qa(y), _ === null) return;
            if (k = _.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              r = c = _;
              continue e;
            }
            y = y.parentNode;
          }
        }
        r = r.return;
      }
    Hd(function() {
      var M = c, U = _s(i), H = [];
      e: {
        var C = _f.get(e);
        if (C !== void 0) {
          var N = fr, le = e;
          switch (e) {
            case "keypress":
              if (cr(i) === 0) break e;
            case "keydown":
            case "keyup":
              N = by;
              break;
            case "focusin":
              le = "focus", N = ws;
              break;
            case "focusout":
              le = "blur", N = ws;
              break;
            case "beforeblur":
            case "afterblur":
              N = ws;
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
              N = Ld;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = sy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = ky;
              break;
            case ff:
            case mf:
            case pf:
              N = dy;
              break;
            case hf:
              N = zy;
              break;
            case "scroll":
            case "scrollend":
              N = ry;
              break;
            case "wheel":
              N = Ty;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = my;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Gd;
              break;
            case "toggle":
            case "beforetoggle":
              N = Ey;
          }
          var he = (t & 4) !== 0, Xe = !he && (e === "scroll" || e === "scrollend"), T = he ? C !== null ? C + "Capture" : null : C;
          he = [];
          for (var j = M, E; j !== null; ) {
            var Y = j;
            if (E = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || E === null || T === null || (Y = qi(j, T), Y != null && he.push(
              ko(j, Y, E)
            )), Xe) break;
            j = j.return;
          }
          0 < he.length && (C = new N(
            C,
            le,
            null,
            i,
            U
          ), H.push({ event: C, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", C && i !== hs && (le = i.relatedTarget || i.fromElement) && (qa(le) || le[Xa]))
            break e;
          if ((N || C) && (C = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, N ? (le = i.relatedTarget || i.toElement, N = M, le = le ? qa(le) : null, le !== null && (Xe = d(le), he = le.tag, le !== Xe || he !== 5 && he !== 27 && he !== 6) && (le = null)) : (N = null, le = M), N !== le)) {
            if (he = Ld, Y = "onMouseLeave", T = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (he = Gd, Y = "onPointerLeave", T = "onPointerEnter", j = "pointer"), Xe = N == null ? C : Xi(N), E = le == null ? C : Xi(le), C = new he(
              Y,
              j + "leave",
              N,
              i,
              U
            ), C.target = Xe, C.relatedTarget = E, Y = null, qa(U) === M && (he = new he(
              T,
              j + "enter",
              le,
              i,
              U
            ), he.target = E, he.relatedTarget = Xe, Y = he), Xe = Y, N && le)
              t: {
                for (he = Ag, T = N, j = le, E = 0, Y = T; Y; Y = he(Y))
                  E++;
                Y = 0;
                for (var de = j; de; de = he(de))
                  Y++;
                for (; 0 < E - Y; )
                  T = he(T), E--;
                for (; 0 < Y - E; )
                  j = he(j), Y--;
                for (; E--; ) {
                  if (T === j || j !== null && T === j.alternate) {
                    he = T;
                    break t;
                  }
                  T = he(T), j = he(j);
                }
                he = null;
              }
            else he = null;
            N !== null && $p(
              H,
              C,
              N,
              he,
              !1
            ), le !== null && Xe !== null && $p(
              H,
              Xe,
              le,
              he,
              !0
            );
          }
        }
        e: {
          if (C = M ? Xi(M) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var Oe = ef;
          else if (Fd(C))
            if (tf)
              Oe = Yy;
            else {
              Oe = Uy;
              var se = Zy;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && ps(M.elementType) && (Oe = ef) : Oe = $y;
          if (Oe && (Oe = Oe(e, M))) {
            Id(
              H,
              Oe,
              i,
              U
            );
            break e;
          }
          se && se(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && ms(C, "number", C.value);
        }
        switch (se = M ? Xi(M) : window, e) {
          case "focusin":
            (Fd(se) || se.contentEditable === "true") && (Fa = se, As = M, Wi = null);
            break;
          case "focusout":
            Wi = As = Fa = null;
            break;
          case "mousedown":
            Es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Es = !1, cf(H, i, U);
            break;
          case "selectionchange":
            if (Hy) break;
          case "keydown":
          case "keyup":
            cf(H, i, U);
        }
        var be;
        if (xs)
          e: {
            switch (e) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          Wa ? Pd(e, i) && (je = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (je = "onCompositionStart");
        je && (Qd && i.locale !== "ko" && (Wa || je !== "onCompositionStart" ? je === "onCompositionEnd" && Wa && (be = Xd()) : (Nn = U, gs = "value" in Nn ? Nn.value : Nn.textContent, Wa = !0)), se = nl(M, je), 0 < se.length && (je = new Vd(
          je,
          e,
          null,
          i,
          U
        ), H.push({ event: je, listeners: se }), be ? je.data = be : (be = Wd(i), be !== null && (je.data = be)))), (be = Cy ? Oy(e, i) : Ny(e, i)) && (je = nl(M, "onBeforeInput"), 0 < je.length && (se = new Vd(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          U
        ), H.push({
          event: se,
          listeners: je
        }), se.data = be)), xg(
          H,
          e,
          M,
          i,
          U
        );
      }
      Zp(H, t);
    });
  }
  function ko(e, t, i) {
    return {
      instance: e,
      listener: t,
      currentTarget: i
    };
  }
  function nl(e, t) {
    for (var i = t + "Capture", r = []; e !== null; ) {
      var u = e, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = qi(e, i), u != null && r.unshift(
        ko(e, u, c)
      ), u = qi(e, t), u != null && r.push(
        ko(e, u, c)
      )), e.tag === 3) return r;
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
  function $p(e, t, i, r, u) {
    for (var c = t._reactName, _ = []; i !== null && i !== r; ) {
      var y = i, k = y.alternate, M = y.stateNode;
      if (y = y.tag, k !== null && k === r) break;
      y !== 5 && y !== 26 && y !== 27 || M === null || (k = M, u ? (M = qi(i, c), M != null && _.unshift(
        ko(i, M, k)
      )) : u || (M = qi(i, c), M != null && _.push(
        ko(i, M, k)
      ))), i = i.return;
    }
    _.length !== 0 && e.push({ event: t, listeners: _ });
  }
  var Eg = /\r\n?/g, Mg = /\u0000|\uFFFD/g;
  function Yp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Eg, `
`).replace(Mg, "");
  }
  function Bp(e, t) {
    return t = Yp(t), Yp(e) === t;
  }
  function He(e, t, i, r, u, c) {
    switch (i) {
      case "children":
        typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ka(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ka(e, "" + r);
        break;
      case "className":
        rr(e, "class", r);
        break;
      case "tabIndex":
        rr(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rr(e, i, r);
        break;
      case "style":
        Yd(e, r, c);
        break;
      case "data":
        if (t !== "object") {
          rr(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(i);
          break;
        }
        r = sr("" + r), e.setAttribute(i, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (i === "formAction" ? (t !== "input" && He(e, t, "name", u.name, u, null), He(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), He(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), He(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (He(e, t, "encType", u.encType, u, null), He(e, t, "method", u.method, u, null), He(e, t, "target", u.target, u, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(i);
          break;
        }
        r = sr("" + r), e.setAttribute(i, r);
        break;
      case "onClick":
        r != null && (e.onclick = mn);
        break;
      case "onScroll":
        r != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ke("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (i = r.__html, i != null) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = sr("" + r), e.setAttributeNS(
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
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, "" + r) : e.removeAttribute(i);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(i, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(i, r) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(i, r) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(i) : e.setAttribute(i, r);
        break;
      case "popover":
        ke("beforetoggle", e), ke("toggle", e), or(e, "popover", r);
        break;
      case "xlinkActuate":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        or(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = iy.get(i) || i, or(e, i, r));
    }
  }
  function ec(e, t, i, r, u, c) {
    switch (i) {
      case "style":
        Yd(e, r, c);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(l(61));
          if (i = r.__html, i != null) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Ka(e, r) : (typeof r == "number" || typeof r == "bigint") && Ka(e, "" + r);
        break;
      case "onScroll":
        r != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ke("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = mn);
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
        if (!Md.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (u = i.endsWith("Capture"), t = i.slice(2, u ? i.length - 7 : void 0), c = e[zt] || null, c = c != null ? c[i] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof r == "function")) {
              typeof c != "function" && c !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, r, u);
              break e;
            }
            i in e ? e[i] = r : r === !0 ? e.setAttribute(i, "") : or(e, i, r);
          }
    }
  }
  function _t(e, t, i) {
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
        ke("error", e), ke("load", e);
        var r = !1, u = !1, c;
        for (c in i)
          if (i.hasOwnProperty(c)) {
            var _ = i[c];
            if (_ != null)
              switch (c) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  He(e, t, c, _, i, null);
              }
          }
        u && He(e, t, "srcSet", i.srcSet, i, null), r && He(e, t, "src", i.src, i, null);
        return;
      case "input":
        ke("invalid", e);
        var y = c = _ = u = null, k = null, M = null;
        for (r in i)
          if (i.hasOwnProperty(r)) {
            var U = i[r];
            if (U != null)
              switch (r) {
                case "name":
                  u = U;
                  break;
                case "type":
                  _ = U;
                  break;
                case "checked":
                  k = U;
                  break;
                case "defaultChecked":
                  M = U;
                  break;
                case "value":
                  c = U;
                  break;
                case "defaultValue":
                  y = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(l(137, t));
                  break;
                default:
                  He(e, t, r, U, i, null);
              }
          }
        Rd(
          e,
          c,
          y,
          k,
          M,
          _,
          u,
          !1
        );
        return;
      case "select":
        ke("invalid", e), r = _ = c = null;
        for (u in i)
          if (i.hasOwnProperty(u) && (y = i[u], y != null))
            switch (u) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                _ = y;
                break;
              case "multiple":
                r = y;
              default:
                He(e, t, u, y, i, null);
            }
        t = c, i = _, e.multiple = !!r, t != null ? Qa(e, !!r, t, !1) : i != null && Qa(e, !!r, i, !0);
        return;
      case "textarea":
        ke("invalid", e), c = u = r = null;
        for (_ in i)
          if (i.hasOwnProperty(_) && (y = i[_], y != null))
            switch (_) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(l(91));
                break;
              default:
                He(e, t, _, y, i, null);
            }
        Ud(e, r, u, c);
        return;
      case "option":
        for (k in i)
          i.hasOwnProperty(k) && (r = i[k], r != null) && (k === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : He(e, t, k, r, i, null));
        return;
      case "dialog":
        ke("beforetoggle", e), ke("toggle", e), ke("cancel", e), ke("close", e);
        break;
      case "iframe":
      case "object":
        ke("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < wo.length; r++)
          ke(wo[r], e);
        break;
      case "image":
        ke("error", e), ke("load", e);
        break;
      case "details":
        ke("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ke("error", e), ke("load", e);
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
        for (M in i)
          if (i.hasOwnProperty(M) && (r = i[M], r != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                He(e, t, M, r, i, null);
            }
        return;
      default:
        if (ps(t)) {
          for (U in i)
            i.hasOwnProperty(U) && (r = i[U], r !== void 0 && ec(
              e,
              t,
              U,
              r,
              i,
              void 0
            ));
          return;
        }
    }
    for (y in i)
      i.hasOwnProperty(y) && (r = i[y], r != null && He(e, t, y, r, i, null));
  }
  function Cg(e, t, i, r) {
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
        var u = null, c = null, _ = null, y = null, k = null, M = null, U = null;
        for (N in i) {
          var H = i[N];
          if (i.hasOwnProperty(N) && H != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = H;
              default:
                r.hasOwnProperty(N) || He(e, t, N, null, r, H);
            }
        }
        for (var C in r) {
          var N = r[C];
          if (H = i[C], r.hasOwnProperty(C) && (N != null || H != null))
            switch (C) {
              case "type":
                c = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                M = N;
                break;
              case "defaultChecked":
                U = N;
                break;
              case "value":
                _ = N;
                break;
              case "defaultValue":
                y = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(l(137, t));
                break;
              default:
                N !== H && He(
                  e,
                  t,
                  C,
                  N,
                  r,
                  H
                );
            }
        }
        fs(
          e,
          _,
          y,
          k,
          M,
          U,
          c,
          u
        );
        return;
      case "select":
        N = _ = y = C = null;
        for (c in i)
          if (k = i[c], i.hasOwnProperty(c) && k != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                N = k;
              default:
                r.hasOwnProperty(c) || He(
                  e,
                  t,
                  c,
                  null,
                  r,
                  k
                );
            }
        for (u in r)
          if (c = r[u], k = i[u], r.hasOwnProperty(u) && (c != null || k != null))
            switch (u) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                _ = c;
              default:
                c !== k && He(
                  e,
                  t,
                  u,
                  c,
                  r,
                  k
                );
            }
        t = y, i = _, r = N, C != null ? Qa(e, !!i, C, !1) : !!r != !!i && (t != null ? Qa(e, !!i, t, !0) : Qa(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (y in i)
          if (u = i[y], i.hasOwnProperty(y) && u != null && !r.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(e, t, y, null, r, u);
            }
        for (_ in r)
          if (u = r[_], c = i[_], r.hasOwnProperty(_) && (u != null || c != null))
            switch (_) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                N = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(l(91));
                break;
              default:
                u !== c && He(e, t, _, u, r, c);
            }
        Zd(e, C, N);
        return;
      case "option":
        for (var le in i)
          C = i[le], i.hasOwnProperty(le) && C != null && !r.hasOwnProperty(le) && (le === "selected" ? e.selected = !1 : He(
            e,
            t,
            le,
            null,
            r,
            C
          ));
        for (k in r)
          C = r[k], N = i[k], r.hasOwnProperty(k) && C !== N && (C != null || N != null) && (k === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : He(
            e,
            t,
            k,
            C,
            r,
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
        for (var he in i)
          C = i[he], i.hasOwnProperty(he) && C != null && !r.hasOwnProperty(he) && He(e, t, he, null, r, C);
        for (M in r)
          if (C = r[M], N = i[M], r.hasOwnProperty(M) && C !== N && (C != null || N != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(l(137, t));
                break;
              default:
                He(
                  e,
                  t,
                  M,
                  C,
                  r,
                  N
                );
            }
        return;
      default:
        if (ps(t)) {
          for (var Xe in i)
            C = i[Xe], i.hasOwnProperty(Xe) && C !== void 0 && !r.hasOwnProperty(Xe) && ec(
              e,
              t,
              Xe,
              void 0,
              r,
              C
            );
          for (U in r)
            C = r[U], N = i[U], !r.hasOwnProperty(U) || C === N || C === void 0 && N === void 0 || ec(
              e,
              t,
              U,
              C,
              r,
              N
            );
          return;
        }
    }
    for (var T in i)
      C = i[T], i.hasOwnProperty(T) && C != null && !r.hasOwnProperty(T) && He(e, t, T, null, r, C);
    for (H in r)
      C = r[H], N = i[H], !r.hasOwnProperty(H) || C === N || C == null && N == null || He(e, t, H, C, r, N);
  }
  function Hp(e) {
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
  function Og() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), r = 0; r < i.length; r++) {
        var u = i[r], c = u.transferSize, _ = u.initiatorType, y = u.duration;
        if (c && y && Hp(_)) {
          for (_ = 0, y = u.responseEnd, r += 1; r < i.length; r++) {
            var k = i[r], M = k.startTime;
            if (M > y) break;
            var U = k.transferSize, H = k.initiatorType;
            U && Hp(H) && (k = k.responseEnd, _ += U * (k < y ? 1 : (y - M) / (k - M)));
          }
          if (--r, t += 8 * (c + _) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var tc = null, nc = null;
  function al(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qp(e, t) {
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
  function ac(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ic = null;
  function Ng() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ic ? !1 : (ic = e, !0) : (ic = null, !1);
  }
  var Lp = typeof setTimeout == "function" ? setTimeout : void 0, Dg = typeof clearTimeout == "function" ? clearTimeout : void 0, Vp = typeof Promise == "function" ? Promise : void 0, Rg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vp < "u" ? function(e) {
    return Vp.resolve(null).then(e).catch(Zg);
  } : Lp;
  function Zg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Pn(e) {
    return e === "head";
  }
  function Gp(e, t) {
    var i = t, r = 0;
    do {
      var u = i.nextSibling;
      if (e.removeChild(i), u && u.nodeType === 8)
        if (i = u.data, i === "/$" || i === "/&") {
          if (r === 0) {
            e.removeChild(u), zi(t);
            return;
          }
          r--;
        } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
          r++;
        else if (i === "html")
          xo(e.ownerDocument.documentElement);
        else if (i === "head") {
          i = e.ownerDocument.head, xo(i);
          for (var c = i.firstChild; c; ) {
            var _ = c.nextSibling, y = c.nodeName;
            c[Hi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || i.removeChild(c), c = _;
          }
        } else
          i === "body" && xo(e.ownerDocument.body);
      i = u;
    } while (i);
    zi(t);
  }
  function Qp(e, t) {
    var i = e;
    e = 0;
    do {
      var r = i.nextSibling;
      if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), r && r.nodeType === 8)
        if (i = r.data, i === "/$") {
          if (e === 0) break;
          e--;
        } else
          i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
      i = r;
    } while (i);
  }
  function oc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oc(i), cs(i);
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
  function Ug(e, t, i, r) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[Hi])
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
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function $g(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Kp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function rc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function lc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Yg(e, t) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || i.readyState !== "loading")
      t();
    else {
      var r = function() {
        t(), i.removeEventListener("DOMContentLoaded", r);
      };
      i.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
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
  var sc = null;
  function Jp(e) {
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
  function Pp(e) {
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
  function Wp(e, t, i) {
    switch (t = al(i), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function xo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    cs(e);
  }
  var Pt = /* @__PURE__ */ new Map(), Fp = /* @__PURE__ */ new Set();
  function il(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var En = L.d;
  L.d = {
    f: Bg,
    r: Hg,
    D: Xg,
    C: qg,
    L: Lg,
    m: Vg,
    X: Qg,
    S: Gg,
    M: Kg
  };
  function Bg() {
    var e = En.f(), t = Jr();
    return e || t;
  }
  function Hg(e) {
    var t = La(e);
    t !== null && t.tag === 5 && t.type === "form" ? hm(t) : En.r(e);
  }
  var wi = typeof document > "u" ? null : document;
  function Ip(e, t, i) {
    var r = wi;
    if (r && typeof t == "string" && t) {
      var u = Xt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof i == "string" && (u += '[crossorigin="' + i + '"]'), Fp.has(u) || (Fp.add(u), e = { rel: e, crossOrigin: i, href: t }, r.querySelector(u) === null && (t = r.createElement("link"), _t(t, "link", e), ct(t), r.head.appendChild(t)));
    }
  }
  function Xg(e) {
    En.D(e), Ip("dns-prefetch", e, null);
  }
  function qg(e, t) {
    En.C(e, t), Ip("preconnect", e, t);
  }
  function Lg(e, t, i) {
    En.L(e, t, i);
    var r = wi;
    if (r && e && t) {
      var u = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (u += '[imagesrcset="' + Xt(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (u += '[imagesizes="' + Xt(
        i.imageSizes
      ) + '"]')) : u += '[href="' + Xt(e) + '"]';
      var c = u;
      switch (t) {
        case "style":
          c = ki(e);
          break;
        case "script":
          c = xi(e);
      }
      Pt.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), Pt.set(c, e), r.querySelector(u) !== null || t === "style" && r.querySelector(zo(c)) || t === "script" && r.querySelector(jo(c)) || (t = r.createElement("link"), _t(t, "link", e), ct(t), r.head.appendChild(t)));
    }
  }
  function Vg(e, t) {
    En.m(e, t);
    var i = wi;
    if (i && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Xt(r) + '"][href="' + Xt(e) + '"]', c = u;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = xi(e);
      }
      if (!Pt.has(c) && (e = b({ rel: "modulepreload", href: e }, t), Pt.set(c, e), i.querySelector(u) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(jo(c)))
              return;
        }
        r = i.createElement("link"), _t(r, "link", e), ct(r), i.head.appendChild(r);
      }
    }
  }
  function Gg(e, t, i) {
    En.S(e, t, i);
    var r = wi;
    if (r && e) {
      var u = Va(r).hoistableStyles, c = ki(e);
      t = t || "default";
      var _ = u.get(c);
      if (!_) {
        var y = { loading: 0, preload: null };
        if (_ = r.querySelector(
          zo(c)
        ))
          y.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = Pt.get(c)) && uc(e, i);
          var k = _ = r.createElement("link");
          ct(k), _t(k, "link", e), k._p = new Promise(function(M, U) {
            k.onload = M, k.onerror = U;
          }), k.addEventListener("load", function() {
            y.loading |= 1;
          }), k.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, ol(_, t, r);
        }
        _ = {
          type: "stylesheet",
          instance: _,
          count: 1,
          state: y
        }, u.set(c, _);
      }
    }
  }
  function Qg(e, t) {
    En.X(e, t);
    var i = wi;
    if (i && e) {
      var r = Va(i).hoistableScripts, u = xi(e), c = r.get(u);
      c || (c = i.querySelector(jo(u)), c || (e = b({ src: e, async: !0 }, t), (t = Pt.get(u)) && cc(e, t), c = i.createElement("script"), ct(c), _t(c, "link", e), i.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function Kg(e, t) {
    En.M(e, t);
    var i = wi;
    if (i && e) {
      var r = Va(i).hoistableScripts, u = xi(e), c = r.get(u);
      c || (c = i.querySelector(jo(u)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = Pt.get(u)) && cc(e, t), c = i.createElement("script"), ct(c), _t(c, "link", e), i.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, r.set(u, c));
    }
  }
  function eh(e, t, i, r) {
    var u = (u = pe.current) ? il(u) : null;
    if (!u) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = ki(i.href), i = Va(
          u
        ).hoistableStyles, r = i.get(t), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = ki(i.href);
          var c = Va(
            u
          ).hoistableStyles, _ = c.get(e);
          if (_ || (u = u.ownerDocument || u, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, _), (c = u.querySelector(
            zo(e)
          )) && !c._p && (_.instance = c, _.state.loading = 5), Pt.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Pt.set(e, i), c || Jg(
            u,
            e,
            i,
            _.state
          ))), t && r === null)
            throw Error(l(528, ""));
          return _;
        }
        if (t && r !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(i), i = Va(
          u
        ).hoistableScripts, r = i.get(t), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function ki(e) {
    return 'href="' + Xt(e) + '"';
  }
  function zo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function th(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Jg(e, t, i, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    }), _t(t, "link", i), ct(t), e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function jo(e) {
    return "script[async]" + e;
  }
  function nh(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + Xt(i.href) + '"]'
          );
          if (r)
            return t.instance = r, ct(r), r;
          var u = b({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), ct(r), _t(r, "style", u), ol(r, i.precedence, e), t.instance = r;
        case "stylesheet":
          u = ki(i.href);
          var c = e.querySelector(
            zo(u)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ct(c), c;
          r = th(i), (u = Pt.get(u)) && uc(r, u), c = (e.ownerDocument || e).createElement("link"), ct(c);
          var _ = c;
          return _._p = new Promise(function(y, k) {
            _.onload = y, _.onerror = k;
          }), _t(c, "link", r), t.state.loading |= 4, ol(c, i.precedence, e), t.instance = c;
        case "script":
          return c = xi(i.src), (u = e.querySelector(
            jo(c)
          )) ? (t.instance = u, ct(u), u) : (r = i, (u = Pt.get(c)) && (r = b({}, i), cc(r, u)), e = e.ownerDocument || e, u = e.createElement("script"), ct(u), _t(u, "link", r), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, ol(r, i.precedence, e));
    return t.instance;
  }
  function ol(e, t, i) {
    for (var r = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = r.length ? r[r.length - 1] : null, c = u, _ = 0; _ < r.length; _++) {
      var y = r[_];
      if (y.dataset.precedence === t) c = y;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function uc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function cc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var rl = null;
  function ah(e, t, i) {
    if (rl === null) {
      var r = /* @__PURE__ */ new Map(), u = rl = /* @__PURE__ */ new Map();
      u.set(i, r);
    } else
      u = rl, r = u.get(i), r || (r = /* @__PURE__ */ new Map(), u.set(i, r));
    if (r.has(e)) return r;
    for (r.set(e, null), i = i.getElementsByTagName(e), u = 0; u < i.length; u++) {
      var c = i[u];
      if (!(c[Hi] || c[ft] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = c.getAttribute(t) || "";
        _ = e + _;
        var y = r.get(_);
        y ? y.push(c) : r.set(_, [c]);
      }
    }
    return r;
  }
  function ih(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Pg(e, t, i) {
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
  function oh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wg(e, t, i, r) {
    if (i.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (i.state.loading & 4) === 0) {
      if (i.instance === null) {
        var u = ki(r.href), c = t.querySelector(
          zo(u)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ll.bind(e), t.then(e, e)), i.state.loading |= 4, i.instance = c, ct(c);
          return;
        }
        c = t.ownerDocument || t, r = th(r), (u = Pt.get(u)) && uc(r, u), c = c.createElement("link"), ct(c);
        var _ = c;
        _._p = new Promise(function(y, k) {
          _.onload = y, _.onerror = k;
        }), _t(c, "link", r), i.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(i, t), (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++, i = ll.bind(e), t.addEventListener("load", i), t.addEventListener("error", i));
    }
  }
  var dc = 0;
  function Fg(e, t) {
    return e.stylesheets && e.count === 0 && ul(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(i) {
      var r = setTimeout(function() {
        if (e.stylesheets && ul(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && dc === 0 && (dc = 62500 * Og());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ul(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > dc ? 50 : 800) + t
      );
      return e.unsuspend = i, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(u);
      };
    } : null;
  }
  function ll() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ul(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var sl = null;
  function ul(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, sl = /* @__PURE__ */ new Map(), t.forEach(Ig, e), sl = null, ll.call(e));
  }
  function Ig(e, t) {
    if (!(t.state.loading & 4)) {
      var i = sl.get(e);
      if (i) var r = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), sl.set(e, i);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var _ = u[c];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (i.set(_.dataset.precedence, _), r = _);
        }
        r && i.set(null, r);
      }
      u = t.instance, _ = u.getAttribute("data-precedence"), c = i.get(_) || r, c === r && i.set(null, u), i.set(_, u), this.count++, r = ll.bind(this), u.addEventListener("load", r), u.addEventListener("error", r), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var To = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function eb(e, t, i, r, u, c, _, y, k) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = rs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rs(0), this.hiddenUpdates = rs(null), this.identifierPrefix = r, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rh(e, t, i, r, u, c, _, y, k, M, U, H) {
    return e = new eb(
      e,
      t,
      i,
      _,
      k,
      M,
      U,
      H,
      y
    ), t = 1, c === !0 && (t |= 24), c = Dt(3, null, null, t), e.current = c, c.stateNode = e, t = Ls(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: r,
      isDehydrated: i,
      cache: t
    }, Ks(c), e;
  }
  function lh(e) {
    return e ? (e = ti, e) : ti;
  }
  function sh(e, t, i, r, u, c) {
    u = lh(u), r.context === null ? r.context = u : r.pendingContext = u, r = Yn(t), r.payload = { element: i }, c = c === void 0 ? null : c, c !== null && (r.callback = c), i = Bn(e, r, t), i !== null && (Ct(i, e, t), io(i, e, t));
  }
  function uh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function fc(e, t) {
    uh(e, t), (e = e.alternate) && uh(e, t);
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = pa(e, 67108864);
      t !== null && Ct(t, e, 67108864), fc(e, 67108864);
    }
  }
  function dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = ls(t);
      var i = pa(e, t);
      i !== null && Ct(i, e, t), fc(e, t);
    }
  }
  var cl = !0;
  function tb(e, t, i, r) {
    var u = A.T;
    A.T = null;
    var c = L.p;
    try {
      L.p = 2, mc(e, t, i, r);
    } finally {
      L.p = c, A.T = u;
    }
  }
  function nb(e, t, i, r) {
    var u = A.T;
    A.T = null;
    var c = L.p;
    try {
      L.p = 8, mc(e, t, i, r);
    } finally {
      L.p = c, A.T = u;
    }
  }
  function mc(e, t, i, r) {
    if (cl) {
      var u = pc(r);
      if (u === null)
        Iu(
          e,
          t,
          r,
          dl,
          i
        ), mh(e, r);
      else if (ib(
        u,
        e,
        t,
        i,
        r
      ))
        r.stopPropagation();
      else if (mh(e, r), t & 4 && -1 < ab.indexOf(e)) {
        for (; u !== null; ) {
          var c = La(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var _ = re(c.pendingLanes);
                  if (_ !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; _; ) {
                      var k = 1 << 31 - ut(_);
                      y.entanglements[1] |= k, _ &= ~k;
                    }
                    dn(c), (Re & 6) === 0 && (Qr = St() + 500, So(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = pa(c, 2), y !== null && Ct(y, c, 2), Jr(), fc(c, 2);
            }
          if (c = pc(r), c === null && Iu(
            e,
            t,
            r,
            dl,
            i
          ), c === u) break;
          u = c;
        }
        u !== null && r.stopPropagation();
      } else
        Iu(
          e,
          t,
          r,
          null,
          i
        );
    }
  }
  function pc(e) {
    return e = _s(e), hc(e);
  }
  var dl = null;
  function hc(e) {
    if (dl = null, e = qa(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (i === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return dl = e, null;
  }
  function fh(e) {
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
        switch (nr()) {
          case $i:
            return 2;
          case ar:
            return 8;
          case Ba:
          case sa:
            return 32;
          case ir:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _c = !1, Wn = null, Fn = null, In = null, Ao = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), ea = [], ab = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function mh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        Ao.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eo.delete(t.pointerId);
    }
  }
  function Mo(e, t, i, r, u, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: r,
      nativeEvent: c,
      targetContainers: [u]
    }, t !== null && (t = La(t), t !== null && ch(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function ib(e, t, i, r, u) {
    switch (t) {
      case "focusin":
        return Wn = Mo(
          Wn,
          e,
          t,
          i,
          r,
          u
        ), !0;
      case "dragenter":
        return Fn = Mo(
          Fn,
          e,
          t,
          i,
          r,
          u
        ), !0;
      case "mouseover":
        return In = Mo(
          In,
          e,
          t,
          i,
          r,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return Ao.set(
          c,
          Mo(
            Ao.get(c) || null,
            e,
            t,
            i,
            r,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Eo.set(
          c,
          Mo(
            Eo.get(c) || null,
            e,
            t,
            i,
            r,
            u
          )
        ), !0;
    }
    return !1;
  }
  function ph(e) {
    var t = qa(e.target);
    if (t !== null) {
      var i = d(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = f(i), t !== null) {
            e.blockedOn = t, Td(e.priority, function() {
              dh(i);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(i), t !== null) {
            e.blockedOn = t, Td(e.priority, function() {
              dh(i);
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
  function fl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = pc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var r = new i.constructor(
          i.type,
          i
        );
        hs = r, i.target.dispatchEvent(r), hs = null;
      } else
        return t = La(i), t !== null && ch(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function hh(e, t, i) {
    fl(e) && i.delete(t);
  }
  function ob() {
    _c = !1, Wn !== null && fl(Wn) && (Wn = null), Fn !== null && fl(Fn) && (Fn = null), In !== null && fl(In) && (In = null), Ao.forEach(hh), Eo.forEach(hh);
  }
  function ml(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _c || (_c = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      ob
    )));
  }
  var pl = null;
  function _h(e) {
    pl !== e && (pl = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        pl === e && (pl = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], r = e[t + 1], u = e[t + 2];
          if (typeof r != "function") {
            if (hc(r || i) === null)
              continue;
            break;
          }
          var c = La(i);
          c !== null && (e.splice(t, 3), t -= 3, pu(
            c,
            {
              pending: !0,
              data: u,
              method: i.method,
              action: r
            },
            r,
            u
          ));
        }
      }
    ));
  }
  function zi(e) {
    function t(k) {
      return ml(k, e);
    }
    Wn !== null && ml(Wn, e), Fn !== null && ml(Fn, e), In !== null && ml(In, e), Ao.forEach(t), Eo.forEach(t);
    for (var i = 0; i < ea.length; i++) {
      var r = ea[i];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ea.length && (i = ea[0], i.blockedOn === null); )
      ph(i), i.blockedOn === null && ea.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (r = 0; r < i.length; r += 3) {
        var u = i[r], c = i[r + 1], _ = u[zt] || null;
        if (typeof c == "function")
          _ || _h(i);
        else if (_) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, _ = c[zt] || null)
              y = _.formAction;
            else if (hc(u) !== null) continue;
          } else y = _.action;
          typeof y == "function" ? i[r + 1] = y : (i.splice(r, 3), r -= 3), _h(i);
        }
      }
  }
  function vh() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(_) {
            return u = _;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), r || setTimeout(i, 20);
    }
    function i() {
      if (!r && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(i, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function vc(e) {
    this._internalRoot = e;
  }
  hl.prototype.render = vc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var i = t.current, r = Yt();
    sh(i, r, e, t, null, null);
  }, hl.prototype.unmount = vc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      sh(e.current, 2, null, e, null, null), Jr(), t[Xa] = null;
    }
  };
  function hl(e) {
    this._internalRoot = e;
  }
  hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = jd();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < ea.length && t !== 0 && t < ea[i].priority; i++) ;
      ea.splice(i, 0, e), i === 0 && ph(e);
    }
  };
  var yh = a.version;
  if (yh !== "19.2.8")
    throw Error(
      l(
        527,
        yh,
        "19.2.8"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = v(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rb = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_l.isDisabled && _l.supportsFiber)
      try {
        ua = _l.inject(
          rb
        ), wt = _l;
      } catch {
      }
  }
  return Oo.createRoot = function(e, t) {
    if (!s(e)) throw Error(l(299));
    var i = !1, r = "", u = zm, c = jm, _ = Tm;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (_ = t.onRecoverableError)), t = rh(
      e,
      1,
      !1,
      null,
      null,
      i,
      r,
      null,
      u,
      c,
      _,
      vh
    ), e[Xa] = t.current, Fu(e), new vc(t);
  }, Oo.hydrateRoot = function(e, t, i) {
    if (!s(e)) throw Error(l(299));
    var r = !1, u = "", c = zm, _ = jm, y = Tm, k = null;
    return i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (u = i.identifierPrefix), i.onUncaughtError !== void 0 && (c = i.onUncaughtError), i.onCaughtError !== void 0 && (_ = i.onCaughtError), i.onRecoverableError !== void 0 && (y = i.onRecoverableError), i.formState !== void 0 && (k = i.formState)), t = rh(
      e,
      1,
      !0,
      t,
      i ?? null,
      r,
      u,
      k,
      c,
      _,
      y,
      vh
    ), t.context = lh(null), i = t.current, r = Yt(), r = ls(r), u = Yn(r), u.callback = null, Bn(i, u, r), i = r, t.current.lanes = i, Bi(t, i), dn(t), e[Xa] = t.current, Fu(e), new hl(t);
  }, Oo.version = "19.2.8", Oo;
}
var Ah;
function _b() {
  if (Ah) return gc.exports;
  Ah = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), gc.exports = hb(), gc.exports;
}
var vb = _b();
const yb = /* @__PURE__ */ A_(vb);
var F = Fc();
const Gl = /* @__PURE__ */ A_(F);
const E_ = (...n) => n.filter((a, o, l) => !!a && a.trim() !== "" && l.indexOf(a) === o).join(" ").trim();
const gb = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const bb = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, o, l) => l ? l.toUpperCase() : o.toLowerCase()
);
const Eh = (n) => {
  const a = bb(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var Sb = {
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
const wb = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
};
const kb = F.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: l,
    className: s = "",
    children: d,
    iconNode: f,
    ...m
  }, h) => F.createElement(
    "svg",
    {
      ref: h,
      ...Sb,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: l ? Number(o) * 24 / Number(a) : o,
      className: E_("lucide", s),
      ...!d && !wb(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([v, g]) => F.createElement(v, g)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
const Ae = (n, a) => {
  const o = F.forwardRef(
    ({ className: l, ...s }, d) => F.createElement(kb, {
      ref: d,
      iconNode: a,
      className: E_(
        `lucide-${gb(Eh(n))}`,
        `lucide-${n}`,
        l
      ),
      ...s
    })
  );
  return o.displayName = Eh(n), o;
};
const xb = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], M_ = Ae("arrow-down-to-line", xb);
const zb = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Mh = Ae("arrow-down", zb);
const jb = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Tb = Ae("arrow-up-from-line", jb);
const Ab = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ch = Ae("arrow-up", Ab);
const Eb = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Mb = Ae("battery", Eb);
const Cb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ob = Ae("check", Cb);
const Nb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], C_ = Ae("circle-check", Nb);
const Db = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], O_ = Ae("circle-x", Db);
const Rb = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Zb = Ae("clock-3", Rb);
const Ub = [
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
], $b = Ae("droplets", Ub);
const Yb = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], Bb = Ae("eraser", Yb);
const Hb = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Xb = Ae("history", Hb);
const qb = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Oh = Ae("house", qb);
const Lb = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Nh = Ae("loader-circle", Lb);
const Vb = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], Gb = Ae("lock-open", Vb);
const Qb = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], N_ = Ae("lock", Qb);
const Kb = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], Jb = Ae("map-pin", Kb);
const Pb = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Wb = Ae("pause", Pb);
const Fb = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], D_ = Ae("play", Fb);
const Ib = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Dh = Ae("plus", Ib);
const e0 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], t0 = Ae("refresh-cw", e0);
const n0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Ic = Ae("rotate-ccw", n0);
const a0 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], i0 = Ae("scan-line", a0);
const o0 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], r0 = Ae("sliders-horizontal", o0);
const l0 = [
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
], Yc = Ae("sparkles", l0);
const s0 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], u0 = Ae("square", s0);
const c0 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], d0 = Ae("timer", c0);
const f0 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Rl = Ae("trash-2", f0);
const m0 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], R_ = Ae("triangle-alert", m0);
const p0 = [
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
], h0 = Ae("wand-sparkles", p0);
const _0 = [
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
], Rh = Ae("waves", _0);
const v0 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Zh = Ae("wind", v0);
const y0 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], g0 = Ae("wrench", y0);
const b0 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ed = Ae("x", b0);
const S0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], w0 = Ae("zoom-in", S0);
const k0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], x0 = Ae("zoom-out", k0), z0 = "https://github.com/domidyon/roborock-vacuum-map-card/blob/beta/blueprints/script/roborock_vacuum_map_card", Bc = {
  vacuum_then_mop: { file: "vacuum_then_mop.yaml", label: "Vac followed by Mop" },
  assisted_carry_prepare: { file: "assisted_carry_prepare.yaml", label: "Assisted carry: prepare" },
  assisted_carry_start: { file: "assisted_carry_start.yaml", label: "Assisted carry: start" },
  assisted_carry_finish: { file: "assisted_carry_finish.yaml", label: "Assisted carry: finish" }
};
function Z_(n) {
  return `https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=${encodeURIComponent(`${z0}/${n}`)}`;
}
const Uh = "python-roborock SUPPORTED_FEATURES.md (v7.13.0, Apache-2.0)", j0 = [
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
    sources: [Uh, "Real-device test by @infy1995 (PR #4)"],
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
    sources: [Uh, "Issue #2 (S7+, Home Assistant core integration)"],
    notes: "No cleaning-count setting, so two-pass room jobs use the per-segment repeat. Awaiting hardware confirmation (issue #2)."
    // Kept for its status and notes; the cleaning count, SmartPlan and routes come from
    // the catalog flags (no is_clean_count_setting_supported or is_smart_clean_mode_set_supported).
  }
];
function T0(n, a) {
  const o = n.entities?.[a]?.device_id, l = o ? n.devices?.[o] : void 0;
  return l?.model_id ?? l?.model ?? void 0;
}
function Ql(n) {
  return n ? j0.find((a) => a.models.includes(n)) : void 0;
}
function A0(n) {
  return n.replace(new RegExp("(?<=[a-z0-9])([A-Z])", "g"), "_$1").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-zA-Z])([0-9]+)/g, "$1_$2").toLowerCase();
}
function E0(n) {
  return new Set(Object.entries(n).filter(([, a]) => a === !0).map(([a]) => A0(a)));
}
function M0(n) {
  const a = (l) => n.has(l);
  if (!a("is_clean_route_setting_supported")) return [];
  if (a("is_none_pure_clean_mop_with_max_plus")) return ["fast", "standard"];
  const o = ["standard"];
  return a("is_clean_efficiency_supported") || o.push("deep"), a("is_careful_slow_mop_supported") && o.push("deep_plus"), a("is_clean_route_fast_mode_supported") && o.push("fast"), o;
}
function Zl(n) {
  const a = (o) => n.has(o);
  return {
    // Without the cleaning-count setting the app sends the repeat with the segments (issue #2).
    repeat: a("is_clean_count_setting_supported") ? "set_clean_repeat_times" : "app_segment_clean",
    smartplan: a("is_smart_clean_mode_set_supported"),
    mop_routes: M0(n),
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
const C0 = /* @__PURE__ */ JSON.parse('[{"model":"roborock.vacuum.a01","names":["E4"]},{"model":"roborock.vacuum.a05","family":"RubySLite"},{"model":"roborock.vacuum.a08","names":["S6 Pure"],"family":"RubySC"},{"model":"roborock.vacuum.a09","family":"TanosV"},{"model":"roborock.vacuum.a10","names":["S6 MaxV"],"family":"TanosV","protocol":"1.0","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.a100","family":"PearlS"},{"model":"roborock.vacuum.a101","names":["Qrevo Pro"],"family":"PearlS"},{"model":"roborock.vacuum.a103","family":"PearlC"},{"model":"roborock.vacuum.a104","names":["Qrevo S"],"family":"PearlC"},{"model":"roborock.vacuum.a11","names":["T7"],"family":"TanosE"},{"model":"roborock.vacuum.a116","family":"PearlPlusS"},{"model":"roborock.vacuum.a117","names":["Qrevo Master"],"family":"PearlPlusS","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a122","family":"PearlSLite"},{"model":"roborock.vacuum.a123","family":"PearlSLite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_back_charge_auto_wash_supported"]},{"model":"roborock.vacuum.a124","family":"UltronSE"},{"model":"roborock.vacuum.a125","names":["Q5 Max+"],"family":"UltronSE","protocol":"1.0","features":["is_clean_route_setting_supported","is_none_pure_clean_mop_with_max_plus","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a134","family":"Vivian"},{"model":"roborock.vacuum.a135","names":["Qrevo Curv"],"family":"Vivian"},{"model":"roborock.vacuum.a136","family":"PearlPlusS"},{"model":"roborock.vacuum.a139","family":"UltronSE"},{"model":"roborock.vacuum.a14","names":["T7S"],"family":"TanosS"},{"model":"roborock.vacuum.a140","family":"UltronSE"},{"model":"roborock.vacuum.a143","family":"CoralPro"},{"model":"roborock.vacuum.a144","names":["Saros 10R"],"family":"CoralPro","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a146","family":"Verdelite"},{"model":"roborock.vacuum.a147","names":["Saros 10"],"family":"Verdelite","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a15","names":["S7"],"family":"TanosS","protocol":"1.0","features":["is_clean_route_setting_supported","is_careful_slow_mop_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_multi_floor_supported","is_mop_shake_module_supported"]},{"model":"roborock.vacuum.a155","family":"Vivian"},{"model":"roborock.vacuum.a156","family":"Vivian"},{"model":"roborock.vacuum.a158","family":"VivianC"},{"model":"roborock.vacuum.a159","family":"VivianC"},{"model":"roborock.vacuum.a167","family":"PearlE"},{"model":"roborock.vacuum.a168","family":"PearlE"},{"model":"roborock.vacuum.a169","family":"PearlELite"},{"model":"roborock.vacuum.a170","family":"PearlELite"},{"model":"roborock.vacuum.a187","names":["Qrevo Edge Series"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a19","names":["S4 Max"],"family":"RubySE"},{"model":"roborock.vacuum.a20","family":"Coral"},{"model":"roborock.vacuum.a21","family":"Coral"},{"model":"roborock.vacuum.a23","names":["T7S+"],"family":"TanosSPlus"},{"model":"roborock.vacuum.a24","family":"TanosSPlus"},{"model":"roborock.vacuum.a26","names":["G10S Pro"],"family":"TopazSV"},{"model":"roborock.vacuum.a27","names":["S7 MaxV"],"family":"TopazSV","protocol":"1.0"},{"model":"roborock.vacuum.a288","names":["Saros 20"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a29","names":["G10"],"family":"TopazS"},{"model":"roborock.vacuum.a30","family":"TopazS"},{"model":"roborock.vacuum.a306","names":["P30 Pro"],"protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_clean_efficiency_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_clean_then_mop_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_water_slide_mode_supported"]},{"model":"roborock.vacuum.a33","family":"TanosSE"},{"model":"roborock.vacuum.a34","names":["Q5"],"family":"TanosSE"},{"model":"roborock.vacuum.a37","family":"TanosSLite"},{"model":"roborock.vacuum.a38","names":["Q7 Max"],"family":"TanosSLite"},{"model":"roborock.vacuum.a39","family":"TanosSC"},{"model":"roborock.vacuum.a40","names":["Q7","Q7+"],"family":"TanosSC"},{"model":"roborock.vacuum.a46","names":["G10S"],"family":"TopazSPlus"},{"model":"roborock.vacuum.a47","family":"TopazSPlus"},{"model":"roborock.vacuum.a50","family":"Ultron"},{"model":"roborock.vacuum.a51","names":["S8"],"family":"Ultron"},{"model":"roborock.vacuum.a52","family":"TanosSMax"},{"model":"roborock.vacuum.a62","names":["S7 Pro Ultra"],"family":"TopazSPower"},{"model":"roborock.vacuum.a64","family":"TopazSC"},{"model":"roborock.vacuum.a65","names":["S7 MaxV Ultra"],"family":"TopazSC"},{"model":"roborock.vacuum.a66","family":"TopazSPlus"},{"model":"roborock.vacuum.a68","family":"UltronSPlus"},{"model":"roborock.vacuum.a69","family":"UltronSPlus"},{"model":"roborock.vacuum.a70","names":["S8 Pro Ultra"],"family":"UltronSPlus"},{"model":"roborock.vacuum.a72","names":["Q5 Pro"],"family":"UltronE"},{"model":"roborock.vacuum.a73","names":["Q8 Max"],"family":"UltronLite"},{"model":"roborock.vacuum.a74","family":"Pearl"},{"model":"roborock.vacuum.a75","names":["P10"],"family":"Pearl","protocol":"1.0","features":["is_clean_count_setting_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported"]},{"model":"roborock.vacuum.a76","family":"TopazS"},{"model":"roborock.vacuum.a84","family":"UltronE"},{"model":"roborock.vacuum.a85","family":"UltronLite"},{"model":"roborock.vacuum.a86","family":"PearlPlus"},{"model":"roborock.vacuum.a87","names":["Qrevo MaxV"],"family":"PearlPlus","protocol":"1.0","features":["is_clean_count_setting_supported","is_smart_clean_mode_set_supported","is_clean_route_setting_supported","is_careful_slow_mop_supported","is_clean_route_fast_mode_supported","is_supported_drying","is_hot_wash_towel_supported","is_collect_dust_mode_supported","is_dust_collection_setting_supported","is_back_charge_auto_wash_supported","is_wash_then_charge_cmd_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.a94","family":"UltronSC"},{"model":"roborock.vacuum.a95","family":"UltronSC"},{"model":"roborock.vacuum.a96","family":"UltronSV"},{"model":"roborock.vacuum.a97","names":["S8 MaxV Ultra"],"family":"UltronSV"},{"model":"roborock.vacuum.c1","names":["C1"]},{"model":"roborock.vacuum.e2","names":["E2"]},{"model":"roborock.vacuum.m1s","names":["1S"]},{"model":"roborock.vacuum.p5","family":"RubySC"},{"model":"roborock.vacuum.p6","family":"RubySLite"},{"model":"roborock.vacuum.s4","names":["S4"],"family":"RubyPlus"},{"model":"roborock.vacuum.s5","names":["S5"]},{"model":"roborock.vacuum.s5e","names":["S5 Max"],"family":"RubySLite","protocol":"1.0","features":["is_collect_dust_mode_supported","is_multi_floor_supported"]},{"model":"roborock.vacuum.s6","names":["S6"],"family":"Tanos"},{"model":"roborock.vacuum.sc01","names":["Q7 Series"],"protocol":"B01","features":["is_collect_dust_mode_supported"]},{"model":"roborock.vacuum.sc05","names":["Q7 Series"],"protocol":"B01"},{"model":"roborock.vacuum.ss07","names":["Q10"],"protocol":"B01"},{"model":"roborock.vacuum.t4","family":"RubyPlus"},{"model":"roborock.vacuum.t6","names":["T6"],"family":"Tanos"},{"model":"roborock.vacuum.t7","family":"TanosE"},{"model":"roborock.vacuum.t7p","family":"TanosV"},{"model":"roborock.wetdryvac.a107","names":["Dyad Air"]},{"model":"roborock.wetdryvac.a56","names":["Dyad Pro"]},{"model":"roborock.wetdryvac.a83","names":["Dyad Pro Combo"]},{"model":"roborock.wm.a102","names":["Zeo One"],"protocol":"A01","features":["is_collect_dust_mode_supported"]}]'), O0 = {
  models: C0
}, N0 = O0.models;
function Qo(n) {
  return n ? N0.find((a) => a.model === n) : void 0;
}
function Hc(n) {
  return Ql(n)?.label ?? Qo(n)?.names?.join(" / ");
}
function U_(n, a) {
  const o = Ql(n), l = Qo(n)?.features, s = [];
  a && s.push(["device", a]), l && s.push(["catalog", new Set(l)]);
  const d = s[0] ? { source: s[0][0], caps: Zl(s[0][1]) } : void 0, f = { sources: {}, profile: o }, m = (v, g, b) => {
    g !== void 0 ? (f[v] = g, f.sources[v] = "profile") : b !== void 0 && d && (f[v] = b, f.sources[v] = d.source);
  };
  m("repeat", o?.repeat, d?.caps.repeat), m("smartplan", o?.smartplan, d?.caps.smartplan), m("mop_only", o?.mop_only);
  const h = d?.caps.mop_routes;
  return m("mop_routes", o?.mop_routes, h && h.length > 0 ? { vacuum_and_mop: h, mop: h } : void 0), f;
}
const Ai = [2026, 8];
function D0(n) {
  if (!n) return !1;
  const [a, o] = n.split(".").map(Number);
  return !Number.isFinite(a) || !Number.isFinite(o) ? !1 : a < Ai[0] || a === Ai[0] && o < Ai[1];
}
function $_(n) {
  const a = Qo(n.model), o = n.protocol ?? a?.protocol, l = [];
  return n.model && !n.model.startsWith("roborock.vacuum.") && l.push("not_a_robot_vacuum"), o && o !== "1.0" && l.push("protocol_unsupported"), D0(n.haVersion) && l.push("home_assistant_too_old"), l.length > 0 ? { verdict: "unsupported", reasons: l, name: Hc(n.model), protocol: o } : (n.hasCustomMap === !1 && l.push("custom_map_missing"), !Ql(n.model) && !a?.features && !n.hasDeviceFlags && l.push("unknown_model"), {
    verdict: l.length > 0 ? "limited" : "supported",
    reasons: l,
    name: Hc(n.model),
    protocol: o
  });
}
function Y_(n, a) {
  if (a) return Zl(a).dock;
  const o = Ql(n)?.dock;
  if (o) return o;
  const l = Qo(n)?.features;
  return l ? Zl(new Set(l)).dock : void 0;
}
const vl = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function yl(n, a) {
  if (!a) return [];
  const o = n.states[a];
  return !o || o.state === "unavailable" ? [] : Array.isArray(o.attributes.options) ? o.attributes.options.map(String) : [];
}
function Da(n, a) {
  const o = n.states[a.entity], l = Number(o?.attributes.supported_features ?? 0), s = Array.isArray(o?.attributes.fan_speed_list) ? o.attributes.fan_speed_list.map(String) : [], d = yl(n, a.entities?.map_select), f = yl(n, a.entities?.cleaning_mode), m = yl(n, a.entities?.mop_mode), h = yl(n, a.entities?.mop_intensity), v = T0(n, a.entity), g = U_(v), b = g.profile, S = s.includes("smart_mode") && m.includes("smart_mode"), w = S || h.some((z) => ["slight", "moderate", "extreme"].includes(z)) ? "set_clean_repeat_times" : "app_segment_clean";
  return {
    fanSpeeds: s,
    mapOptions: d,
    cleaningModes: f,
    mopModes: m,
    mopIntensities: h,
    canStart: !!(l & vl.start),
    canPause: !!(l & vl.pause),
    canStop: !!(l & vl.stop),
    canDock: !!(l & vl.returnHome),
    hasMapSelect: d.length > 0,
    hasCleaningMode: f.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: h.length > 0,
    hasSmartPlan: a.enable_smartplan ?? g.smartplan ?? S,
    roomRepeatStrategy: a.cleaning_count_command ?? g.repeat ?? w,
    mopRoutes: a.mop_routes ?? g.mop_routes,
    profile: b ? { label: b.label, status: b.status } : void 0,
    model: v
  };
}
function R0(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function Z0(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
var $h;
function B(n, a, o) {
  function l(m, h) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: h,
        constr: f,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n))
      return;
    m._zod.traits.add(n), a(m, h);
    const v = f.prototype, g = Object.keys(v);
    for (let b = 0; b < g.length; b++) {
      const S = g[b];
      S in m || (m[S] = v[S].bind(m));
    }
  }
  const s = o?.Parent ?? Object;
  class d extends s {
  }
  Object.defineProperty(d, "name", { value: n });
  function f(m) {
    var h;
    const v = o?.Parent ? new d() : this;
    l(v, m), (h = v._zod).deferred ?? (h.deferred = []);
    for (const g of v._zod.deferred)
      g();
    return v;
  }
  return Object.defineProperty(f, "init", { value: l }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Ei extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class B_ extends Error {
  constructor(a) {
    super(`Encountered unidirectional transform during encode: ${a}`), this.name = "ZodEncodeError";
  }
}
($h = globalThis).__zod_globalConfig ?? ($h.__zod_globalConfig = {});
const td = globalThis.__zod_globalConfig;
function Oa(n) {
  return td;
}
function H_(n) {
  const a = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, s]) => a.indexOf(+l) === -1).map(([l, s]) => s);
}
function Xc(n, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function nd(n) {
  return {
    get value() {
      {
        const a = n();
        return Object.defineProperty(this, "value", { value: a }), a;
      }
    }
  };
}
function ad(n) {
  return n == null;
}
function id(n) {
  const a = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(a, o);
}
function U0(n, a) {
  const o = n / a, l = Math.round(o), s = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - l) < s ? 0 : o - l;
}
const Yh = /* @__PURE__ */ Symbol("evaluating");
function qe(n, a, o) {
  let l;
  Object.defineProperty(n, a, {
    get() {
      if (l !== Yh)
        return l === void 0 && (l = Yh, l = o()), l;
    },
    set(s) {
      Object.defineProperty(n, a, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ra(n, a, o) {
  Object.defineProperty(n, a, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ia(...n) {
  const a = {};
  for (const o of n) {
    const l = Object.getOwnPropertyDescriptors(o);
    Object.assign(a, l);
  }
  return Object.defineProperties({}, a);
}
function Bh(n) {
  return JSON.stringify(n);
}
function $0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const X_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Ul(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const Y0 = /* @__PURE__ */ nd(() => {
  if (td.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Xo(n) {
  if (Ul(n) === !1)
    return !1;
  const a = n.constructor;
  if (a === void 0 || typeof a != "function")
    return !0;
  const o = a.prototype;
  return !(Ul(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function q_(n) {
  return Xo(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const B0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Oi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function oa(n, a, o) {
  const l = new n._zod.constr(a ?? n._zod.def);
  return (!a || o?.parent) && (l._zod.parent = n), l;
}
function fe(n) {
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
function H0(n) {
  return Object.keys(n).filter((a) => n[a]._zod.optin === "optional" && n[a]._zod.optout === "optional");
}
const X0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function q0(n, a) {
  const o = n._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const d = ia(n._zod.def, {
    get shape() {
      const f = {};
      for (const m in a) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        a[m] && (f[m] = o.shape[m]);
      }
      return Ra(this, "shape", f), f;
    },
    checks: []
  });
  return oa(n, d);
}
function L0(n, a) {
  const o = n._zod.def, l = o.checks;
  if (l && l.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const d = ia(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape };
      for (const m in a) {
        if (!(m in o.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        a[m] && delete f[m];
      }
      return Ra(this, "shape", f), f;
    },
    checks: []
  });
  return oa(n, d);
}
function V0(n, a) {
  if (!Xo(a))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const d = n._zod.def.shape;
    for (const f in a)
      if (Object.getOwnPropertyDescriptor(d, f) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = ia(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape, ...a };
      return Ra(this, "shape", d), d;
    }
  });
  return oa(n, s);
}
function G0(n, a) {
  if (!Xo(a))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = ia(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...a };
      return Ra(this, "shape", l), l;
    }
  });
  return oa(n, o);
}
function Q0(n, a) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const o = ia(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...a._zod.def.shape };
      return Ra(this, "shape", l), l;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: a._zod.def.checks ?? []
  });
  return oa(n, o);
}
function K0(n, a, o) {
  const s = a._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const f = ia(a._zod.def, {
    get shape() {
      const m = a._zod.def.shape, h = { ...m };
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
      return Ra(this, "shape", h), h;
    },
    checks: []
  });
  return oa(a, f);
}
function J0(n, a, o) {
  const l = ia(a._zod.def, {
    get shape() {
      const s = a._zod.def.shape, d = { ...s };
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
      return Ra(this, "shape", d), d;
    }
  });
  return oa(a, l);
}
function ji(n, a = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = a; o < n.issues.length; o++)
    if (n.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function P0(n, a = 0) {
  if (n.aborted === !0)
    return !0;
  for (let o = a; o < n.issues.length; o++)
    if (n.issues[o]?.continue === !1)
      return !0;
  return !1;
}
function L_(n, a) {
  return a.map((o) => {
    var l;
    return (l = o).path ?? (l.path = []), o.path.unshift(n), o;
  });
}
function gl(n) {
  return typeof n == "string" ? n : n?.message;
}
function Na(n, a, o) {
  const l = n.message ? n.message : gl(n.inst?._zod.def?.error?.(n)) ?? gl(a?.error?.(n)) ?? gl(o.customError?.(n)) ?? gl(o.localeError?.(n)) ?? "Invalid input", { inst: s, continue: d, input: f, ...m } = n;
  return m.path ?? (m.path = []), m.message = l, a?.reportInput && (m.input = f), m;
}
function od(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function qo(...n) {
  const [a, o, l] = n;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: o,
    inst: l
  } : { ...a };
}
const V_ = (n, a) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: a,
    enumerable: !1
  }), n.message = JSON.stringify(a, Xc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, G_ = B("$ZodError", V_), Q_ = B("$ZodError", V_, { Parent: Error });
function W0(n, a = (o) => o.message) {
  const o = {}, l = [];
  for (const s of n.issues)
    s.path.length > 0 ? (o[s.path[0]] = o[s.path[0]] || [], o[s.path[0]].push(a(s))) : l.push(a(s));
  return { formErrors: l, fieldErrors: o };
}
function F0(n, a = (o) => o.message) {
  const o = { _errors: [] }, l = (s, d = []) => {
    for (const f of s.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((m) => l({ issues: m }, [...d, ...f.path]));
      else if (f.code === "invalid_key")
        l({ issues: f.issues }, [...d, ...f.path]);
      else if (f.code === "invalid_element")
        l({ issues: f.issues }, [...d, ...f.path]);
      else {
        const m = [...d, ...f.path];
        if (m.length === 0)
          o._errors.push(a(f));
        else {
          let h = o, v = 0;
          for (; v < m.length; ) {
            const g = m[v];
            v === m.length - 1 ? (h[g] = h[g] || { _errors: [] }, h[g]._errors.push(a(f))) : h[g] = h[g] || { _errors: [] }, h = h[g], v++;
          }
        }
      }
  };
  return l(n), o;
}
const rd = (n) => (a, o, l, s) => {
  const d = l ? { ...l, async: !1 } : { async: !1 }, f = a._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise)
    throw new Ei();
  if (f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Na(h, d, Oa())));
    throw X_(m, s?.callee), m;
  }
  return f.value;
}, ld = (n) => async (a, o, l, s) => {
  const d = l ? { ...l, async: !0 } : { async: !0 };
  let f = a._zod.run({ value: o, issues: [] }, d);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (s?.Err ?? n)(f.issues.map((h) => Na(h, d, Oa())));
    throw X_(m, s?.callee), m;
  }
  return f.value;
}, Kl = (n) => (a, o, l) => {
  const s = l ? { ...l, async: !1 } : { async: !1 }, d = a._zod.run({ value: o, issues: [] }, s);
  if (d instanceof Promise)
    throw new Ei();
  return d.issues.length ? {
    success: !1,
    error: new (n ?? G_)(d.issues.map((f) => Na(f, s, Oa())))
  } : { success: !0, data: d.value };
}, I0 = /* @__PURE__ */ Kl(Q_), Jl = (n) => async (a, o, l) => {
  const s = l ? { ...l, async: !0 } : { async: !0 };
  let d = a._zod.run({ value: o, issues: [] }, s);
  return d instanceof Promise && (d = await d), d.issues.length ? {
    success: !1,
    error: new n(d.issues.map((f) => Na(f, s, Oa())))
  } : { success: !0, data: d.value };
}, e1 = /* @__PURE__ */ Jl(Q_), t1 = (n) => (a, o, l) => {
  const s = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return rd(n)(a, o, s);
}, n1 = (n) => (a, o, l) => rd(n)(a, o, l), a1 = (n) => async (a, o, l) => {
  const s = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return ld(n)(a, o, s);
}, i1 = (n) => async (a, o, l) => ld(n)(a, o, l), o1 = (n) => (a, o, l) => {
  const s = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Kl(n)(a, o, s);
}, r1 = (n) => (a, o, l) => Kl(n)(a, o, l), l1 = (n) => async (a, o, l) => {
  const s = l ? { ...l, direction: "backward" } : { direction: "backward" };
  return Jl(n)(a, o, s);
}, s1 = (n) => async (a, o, l) => Jl(n)(a, o, l), u1 = /^[cC][0-9a-z]{6,}$/, c1 = /^[0-9a-z]+$/, d1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, f1 = /^[0-9a-vA-V]{20}$/, m1 = /^[A-Za-z0-9]{27}$/, p1 = /^[a-zA-Z0-9_-]{21}$/, h1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, _1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Hh = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, v1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, y1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function g1() {
  return new RegExp(y1, "u");
}
const b1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, S1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, w1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, k1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, x1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, K_ = /^[A-Za-z0-9_-]*$/, z1 = /^https?$/, j1 = /^\+[1-9]\d{6,14}$/, J_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", T1 = /* @__PURE__ */ new RegExp(`^${J_}$`);
function P_(n) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${a}` : n.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${n.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function A1(n) {
  return new RegExp(`^${P_(n)}$`);
}
function E1(n) {
  const a = P_({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${a}(?:${o.join("|")})`;
  return new RegExp(`^${J_}T(?:${l})$`);
}
const M1 = (n) => {
  const a = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, C1 = /^-?\d+$/, O1 = /^-?\d+(?:\.\d+)?$/, N1 = /^(?:true|false)$/i, D1 = /^[^A-Z]*$/, R1 = /^[^a-z]*$/, Ot = /* @__PURE__ */ B("$ZodCheck", (n, a) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = a, (o = n._zod).onattach ?? (o.onattach = []);
}), W_ = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, F_ = /* @__PURE__ */ B("$ZodCheckLessThan", (n, a) => {
  Ot.init(n, a);
  const o = W_[typeof a.value];
  n._zod.onattach.push((l) => {
    const s = l._zod.bag, d = (a.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    a.value < d && (a.inclusive ? s.maximum = a.value : s.exclusiveMaximum = a.value);
  }), n._zod.check = (l) => {
    (a.inclusive ? l.value <= a.value : l.value < a.value) || l.issues.push({
      origin: o,
      code: "too_big",
      maximum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), I_ = /* @__PURE__ */ B("$ZodCheckGreaterThan", (n, a) => {
  Ot.init(n, a);
  const o = W_[typeof a.value];
  n._zod.onattach.push((l) => {
    const s = l._zod.bag, d = (a.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    a.value > d && (a.inclusive ? s.minimum = a.value : s.exclusiveMinimum = a.value);
  }), n._zod.check = (l) => {
    (a.inclusive ? l.value >= a.value : l.value > a.value) || l.issues.push({
      origin: o,
      code: "too_small",
      minimum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), Z1 = /* @__PURE__ */ B("$ZodCheckMultipleOf", (n, a) => {
  Ot.init(n, a), n._zod.onattach.push((o) => {
    var l;
    (l = o._zod.bag).multipleOf ?? (l.multipleOf = a.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof a.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % a.value === BigInt(0) : U0(o.value, a.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), U1 = /* @__PURE__ */ B("$ZodCheckNumberFormat", (n, a) => {
  Ot.init(n, a), a.format = a.format || "float64";
  const o = a.format?.includes("int"), l = o ? "int" : "number", [s, d] = X0[a.format];
  n._zod.onattach.push((f) => {
    const m = f._zod.bag;
    m.format = a.format, m.minimum = s, m.maximum = d, o && (m.pattern = C1);
  }), n._zod.check = (f) => {
    const m = f.value;
    if (o) {
      if (!Number.isInteger(m)) {
        f.issues.push({
          expected: l,
          format: a.format,
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
          origin: l,
          inclusive: !0,
          continue: !a.abort
        }) : f.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: l,
          inclusive: !0,
          continue: !a.abort
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
      continue: !a.abort
    }), m > d && f.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: d,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    });
  };
}), $1 = /* @__PURE__ */ B("$ZodCheckMaxLength", (n, a) => {
  var o;
  Ot.init(n, a), (o = n._zod.def).when ?? (o.when = (l) => {
    const s = l.value;
    return !ad(s) && s.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const s = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < s && (l._zod.bag.maximum = a.maximum);
  }), n._zod.check = (l) => {
    const s = l.value;
    if (s.length <= a.maximum)
      return;
    const f = od(s);
    l.issues.push({
      origin: f,
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !a.abort
    });
  };
}), Y1 = /* @__PURE__ */ B("$ZodCheckMinLength", (n, a) => {
  var o;
  Ot.init(n, a), (o = n._zod.def).when ?? (o.when = (l) => {
    const s = l.value;
    return !ad(s) && s.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const s = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > s && (l._zod.bag.minimum = a.minimum);
  }), n._zod.check = (l) => {
    const s = l.value;
    if (s.length >= a.minimum)
      return;
    const f = od(s);
    l.issues.push({
      origin: f,
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !a.abort
    });
  };
}), B1 = /* @__PURE__ */ B("$ZodCheckLengthEquals", (n, a) => {
  var o;
  Ot.init(n, a), (o = n._zod.def).when ?? (o.when = (l) => {
    const s = l.value;
    return !ad(s) && s.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const s = l._zod.bag;
    s.minimum = a.length, s.maximum = a.length, s.length = a.length;
  }), n._zod.check = (l) => {
    const s = l.value, d = s.length;
    if (d === a.length)
      return;
    const f = od(s), m = d > a.length;
    l.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: a.length } : { code: "too_small", minimum: a.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: n,
      continue: !a.abort
    });
  };
}), Pl = /* @__PURE__ */ B("$ZodCheckStringFormat", (n, a) => {
  var o, l;
  Ot.init(n, a), n._zod.onattach.push((s) => {
    const d = s._zod.bag;
    d.format = a.format, a.pattern && (d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(a.pattern));
  }), a.pattern ? (o = n._zod).check ?? (o.check = (s) => {
    a.pattern.lastIndex = 0, !a.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: a.format,
      input: s.value,
      ...a.pattern ? { pattern: a.pattern.toString() } : {},
      inst: n,
      continue: !a.abort
    });
  }) : (l = n._zod).check ?? (l.check = () => {
  });
}), H1 = /* @__PURE__ */ B("$ZodCheckRegex", (n, a) => {
  Pl.init(n, a), n._zod.check = (o) => {
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
}), X1 = /* @__PURE__ */ B("$ZodCheckLowerCase", (n, a) => {
  a.pattern ?? (a.pattern = D1), Pl.init(n, a);
}), q1 = /* @__PURE__ */ B("$ZodCheckUpperCase", (n, a) => {
  a.pattern ?? (a.pattern = R1), Pl.init(n, a);
}), L1 = /* @__PURE__ */ B("$ZodCheckIncludes", (n, a) => {
  Ot.init(n, a);
  const o = Oi(a.includes), l = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${o}` : o);
  a.pattern = l, n._zod.onattach.push((s) => {
    const d = s._zod.bag;
    d.patterns ?? (d.patterns = /* @__PURE__ */ new Set()), d.patterns.add(l);
  }), n._zod.check = (s) => {
    s.value.includes(a.includes, a.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: a.includes,
      input: s.value,
      inst: n,
      continue: !a.abort
    });
  };
}), V1 = /* @__PURE__ */ B("$ZodCheckStartsWith", (n, a) => {
  Ot.init(n, a);
  const o = new RegExp(`^${Oi(a.prefix)}.*`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((l) => {
    const s = l._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), n._zod.check = (l) => {
    l.value.startsWith(a.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: a.prefix,
      input: l.value,
      inst: n,
      continue: !a.abort
    });
  };
}), G1 = /* @__PURE__ */ B("$ZodCheckEndsWith", (n, a) => {
  Ot.init(n, a);
  const o = new RegExp(`.*${Oi(a.suffix)}$`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((l) => {
    const s = l._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), n._zod.check = (l) => {
    l.value.endsWith(a.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: a.suffix,
      input: l.value,
      inst: n,
      continue: !a.abort
    });
  };
}), Q1 = /* @__PURE__ */ B("$ZodCheckOverwrite", (n, a) => {
  Ot.init(n, a), n._zod.check = (o) => {
    o.value = a.tx(o.value);
  };
});
class K1 {
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
    const l = a.split(`
`).filter((f) => f), s = Math.min(...l.map((f) => f.length - f.trimStart().length)), d = l.map((f) => f.slice(s)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of d)
      this.content.push(f);
  }
  compile() {
    const a = Function, o = this?.args, s = [...(this?.content ?? [""]).map((d) => `  ${d}`)];
    return new a(...o, s.join(`
`));
  }
}
const J1 = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ B("$ZodType", (n, a) => {
  var o;
  n ?? (n = {}), n._zod.def = a, n._zod.bag = n._zod.bag || {}, n._zod.version = J1;
  const l = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && l.unshift(n);
  for (const s of l)
    for (const d of s._zod.onattach)
      d(n);
  if (l.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const s = (f, m, h) => {
      let v = ji(f), g;
      for (const b of m) {
        if (b._zod.def.when) {
          if (P0(f) || !b._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const S = f.issues.length, w = b._zod.check(f);
        if (w instanceof Promise && h?.async === !1)
          throw new Ei();
        if (g || w instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await w, f.issues.length !== S && (v || (v = ji(f, S)));
          });
        else {
          if (f.issues.length === S)
            continue;
          v || (v = ji(f, S));
        }
      }
      return g ? g.then(() => f) : f;
    }, d = (f, m, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const v = s(m, l, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new Ei();
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
          throw new Ei();
        return h.then((v) => s(v, l, m));
      }
      return s(h, l, m);
    };
  }
  qe(n, "~standard", () => ({
    validate: (s) => {
      try {
        const d = I0(n, s);
        return d.success ? { value: d.data } : { issues: d.error?.issues };
      } catch {
        return e1(n, s).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), sd = /* @__PURE__ */ B("$ZodString", (n, a) => {
  Fe.init(n, a), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? M1(n._zod.bag), n._zod.parse = (o, l) => {
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
}), Ke = /* @__PURE__ */ B("$ZodStringFormat", (n, a) => {
  Pl.init(n, a), sd.init(n, a);
}), P1 = /* @__PURE__ */ B("$ZodGUID", (n, a) => {
  a.pattern ?? (a.pattern = _1), Ke.init(n, a);
}), W1 = /* @__PURE__ */ B("$ZodUUID", (n, a) => {
  if (a.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[a.version];
    if (l === void 0)
      throw new Error(`Invalid UUID version: "${a.version}"`);
    a.pattern ?? (a.pattern = Hh(l));
  } else
    a.pattern ?? (a.pattern = Hh());
  Ke.init(n, a);
}), F1 = /* @__PURE__ */ B("$ZodEmail", (n, a) => {
  a.pattern ?? (a.pattern = v1), Ke.init(n, a);
}), I1 = /* @__PURE__ */ B("$ZodURL", (n, a) => {
  Ke.init(n, a), n._zod.check = (o) => {
    try {
      const l = o.value.trim();
      if (!a.normalize && a.protocol?.source === z1.source && !/^https?:\/\//i.test(l)) {
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
      const s = new URL(l);
      a.hostname && (a.hostname.lastIndex = 0, a.hostname.test(s.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: a.hostname.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.protocol && (a.protocol.lastIndex = 0, a.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: a.protocol.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.normalize ? o.value = s.href : o.value = l;
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
}), eS = /* @__PURE__ */ B("$ZodEmoji", (n, a) => {
  a.pattern ?? (a.pattern = g1()), Ke.init(n, a);
}), tS = /* @__PURE__ */ B("$ZodNanoID", (n, a) => {
  a.pattern ?? (a.pattern = p1), Ke.init(n, a);
}), nS = /* @__PURE__ */ B("$ZodCUID", (n, a) => {
  a.pattern ?? (a.pattern = u1), Ke.init(n, a);
}), aS = /* @__PURE__ */ B("$ZodCUID2", (n, a) => {
  a.pattern ?? (a.pattern = c1), Ke.init(n, a);
}), iS = /* @__PURE__ */ B("$ZodULID", (n, a) => {
  a.pattern ?? (a.pattern = d1), Ke.init(n, a);
}), oS = /* @__PURE__ */ B("$ZodXID", (n, a) => {
  a.pattern ?? (a.pattern = f1), Ke.init(n, a);
}), rS = /* @__PURE__ */ B("$ZodKSUID", (n, a) => {
  a.pattern ?? (a.pattern = m1), Ke.init(n, a);
}), lS = /* @__PURE__ */ B("$ZodISODateTime", (n, a) => {
  a.pattern ?? (a.pattern = E1(a)), Ke.init(n, a);
}), sS = /* @__PURE__ */ B("$ZodISODate", (n, a) => {
  a.pattern ?? (a.pattern = T1), Ke.init(n, a);
}), uS = /* @__PURE__ */ B("$ZodISOTime", (n, a) => {
  a.pattern ?? (a.pattern = A1(a)), Ke.init(n, a);
}), cS = /* @__PURE__ */ B("$ZodISODuration", (n, a) => {
  a.pattern ?? (a.pattern = h1), Ke.init(n, a);
}), dS = /* @__PURE__ */ B("$ZodIPv4", (n, a) => {
  a.pattern ?? (a.pattern = b1), Ke.init(n, a), n._zod.bag.format = "ipv4";
}), fS = /* @__PURE__ */ B("$ZodIPv6", (n, a) => {
  a.pattern ?? (a.pattern = S1), Ke.init(n, a), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
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
}), mS = /* @__PURE__ */ B("$ZodCIDRv4", (n, a) => {
  a.pattern ?? (a.pattern = w1), Ke.init(n, a);
}), pS = /* @__PURE__ */ B("$ZodCIDRv6", (n, a) => {
  a.pattern ?? (a.pattern = k1), Ke.init(n, a), n._zod.check = (o) => {
    const l = o.value.split("/");
    try {
      if (l.length !== 2)
        throw new Error();
      const [s, d] = l;
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
        continue: !a.abort
      });
    }
  };
});
function ev(n) {
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
const hS = /* @__PURE__ */ B("$ZodBase64", (n, a) => {
  a.pattern ?? (a.pattern = x1), Ke.init(n, a), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    ev(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
});
function _S(n) {
  if (!K_.test(n))
    return !1;
  const a = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), o = a.padEnd(Math.ceil(a.length / 4) * 4, "=");
  return ev(o);
}
const vS = /* @__PURE__ */ B("$ZodBase64URL", (n, a) => {
  a.pattern ?? (a.pattern = K_), Ke.init(n, a), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    _S(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), yS = /* @__PURE__ */ B("$ZodE164", (n, a) => {
  a.pattern ?? (a.pattern = j1), Ke.init(n, a);
});
function gS(n, a = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3)
      return !1;
    const [l] = o;
    if (!l)
      return !1;
    const s = JSON.parse(atob(l));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || a && (!("alg" in s) || s.alg !== a));
  } catch {
    return !1;
  }
}
const bS = /* @__PURE__ */ B("$ZodJWT", (n, a) => {
  Ke.init(n, a), n._zod.check = (o) => {
    gS(o.value, a.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), tv = /* @__PURE__ */ B("$ZodNumber", (n, a) => {
  Fe.init(n, a), n._zod.pattern = n._zod.bag.pattern ?? O1, n._zod.parse = (o, l) => {
    if (a.coerce)
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
}), SS = /* @__PURE__ */ B("$ZodNumberFormat", (n, a) => {
  U1.init(n, a), tv.init(n, a);
}), wS = /* @__PURE__ */ B("$ZodBoolean", (n, a) => {
  Fe.init(n, a), n._zod.pattern = N1, n._zod.parse = (o, l) => {
    if (a.coerce)
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
}), kS = /* @__PURE__ */ B("$ZodUnknown", (n, a) => {
  Fe.init(n, a), n._zod.parse = (o) => o;
}), xS = /* @__PURE__ */ B("$ZodNever", (n, a) => {
  Fe.init(n, a), n._zod.parse = (o, l) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
});
function Xh(n, a, o) {
  n.issues.length && a.issues.push(...L_(o, n.issues)), a.value[o] = n.value;
}
const zS = /* @__PURE__ */ B("$ZodArray", (n, a) => {
  Fe.init(n, a), n._zod.parse = (o, l) => {
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
      const m = s[f], h = a.element._zod.run({
        value: m,
        issues: []
      }, l);
      h instanceof Promise ? d.push(h.then((v) => Xh(v, o, f))) : Xh(h, o, f);
    }
    return d.length ? Promise.all(d).then(() => o) : o;
  };
});
function $l(n, a, o, l, s, d) {
  const f = o in l;
  if (n.issues.length) {
    if (s && d && !f)
      return;
    a.issues.push(...L_(o, n.issues));
  }
  if (!f && !s) {
    n.issues.length || a.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [o]
    });
    return;
  }
  n.value === void 0 ? f && (a.value[o] = void 0) : a.value[o] = n.value;
}
function nv(n) {
  const a = Object.keys(n.shape);
  for (const l of a)
    if (!n.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const o = H0(n.shape);
  return {
    ...n,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(o)
  };
}
function av(n, a, o, l, s, d) {
  const f = [], m = s.keySet, h = s.catchall._zod, v = h.def.type, g = h.optin === "optional", b = h.optout === "optional";
  for (const S in a) {
    if (S === "__proto__" || m.has(S))
      continue;
    if (v === "never") {
      f.push(S);
      continue;
    }
    const w = h.run({ value: a[S], issues: [] }, l);
    w instanceof Promise ? n.push(w.then((z) => $l(z, o, S, a, g, b))) : $l(w, o, S, a, g, b);
  }
  return f.length && o.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: a,
    inst: d
  }), n.length ? Promise.all(n).then(() => o) : o;
}
const jS = /* @__PURE__ */ B("$ZodObject", (n, a) => {
  if (Fe.init(n, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const m = a.shape;
    Object.defineProperty(a, "shape", {
      get: () => {
        const h = { ...m };
        return Object.defineProperty(a, "shape", {
          value: h
        }), h;
      }
    });
  }
  const l = nd(() => nv(a));
  qe(n._zod, "propValues", () => {
    const m = a.shape, h = {};
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
  const s = Ul, d = a.catchall;
  let f;
  n._zod.parse = (m, h) => {
    f ?? (f = l.value);
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
    for (const S of f.keys) {
      const w = b[S], z = w._zod.optin === "optional", R = w._zod.optout === "optional", O = w._zod.run({ value: v[S], issues: [] }, h);
      O instanceof Promise ? g.push(O.then((X) => $l(X, m, S, v, z, R))) : $l(O, m, S, v, z, R);
    }
    return d ? av(g, v, m, h, l.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), TS = /* @__PURE__ */ B("$ZodObjectJIT", (n, a) => {
  jS.init(n, a);
  const o = n._zod.parse, l = nd(() => nv(a)), s = (S) => {
    const w = new K1(["shape", "payload", "ctx"]), z = l.value, R = (q) => {
      const Q = Bh(q);
      return `shape[${Q}]._zod.run({ value: input[${Q}], issues: [] }, ctx)`;
    };
    w.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let X = 0;
    for (const q of z.keys)
      O[q] = `key_${X++}`;
    w.write("const newResult = {};");
    for (const q of z.keys) {
      const Q = O[q], K = Bh(q), J = S[q], G = J?._zod?.optin === "optional", oe = J?._zod?.optout === "optional";
      w.write(`const ${Q} = ${R(q)};`), G && oe ? w.write(`
        if (${Q}.issues.length) {
          if (${K} in input) {
            payload.issues = payload.issues.concat(${Q}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${K}, ...iss.path] : [${K}]
            })));
          }
        }
        
        if (${Q}.value === undefined) {
          if (${K} in input) {
            newResult[${K}] = undefined;
          }
        } else {
          newResult[${K}] = ${Q}.value;
        }
        
      `) : G ? w.write(`
        if (${Q}.issues.length) {
          payload.issues = payload.issues.concat(${Q}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K}, ...iss.path] : [${K}]
          })));
        }
        
        if (${Q}.value === undefined) {
          if (${K} in input) {
            newResult[${K}] = undefined;
          }
        } else {
          newResult[${K}] = ${Q}.value;
        }
        
      `) : w.write(`
        const ${Q}_present = ${K} in input;
        if (${Q}.issues.length) {
          payload.issues = payload.issues.concat(${Q}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K}, ...iss.path] : [${K}]
          })));
        }
        if (!${Q}_present && !${Q}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${K}]
          });
        }

        if (${Q}_present) {
          if (${Q}.value === undefined) {
            newResult[${K}] = undefined;
          } else {
            newResult[${K}] = ${Q}.value;
          }
        }

      `);
    }
    w.write("payload.value = newResult;"), w.write("return payload;");
    const I = w.compile();
    return (q, Q) => I(S, q, Q);
  };
  let d;
  const f = Ul, m = !td.jitless, v = m && Y0.value, g = a.catchall;
  let b;
  n._zod.parse = (S, w) => {
    b ?? (b = l.value);
    const z = S.value;
    return f(z) ? m && v && w?.async === !1 && w.jitless !== !0 ? (d || (d = s(a.shape)), S = d(S, w), g ? av([], z, S, w, b, n) : S) : o(S, w) : (S.issues.push({
      expected: "object",
      code: "invalid_type",
      input: z,
      inst: n
    }), S);
  };
});
function qh(n, a, o, l) {
  for (const d of n)
    if (d.issues.length === 0)
      return a.value = d.value, a;
  const s = n.filter((d) => !ji(d));
  return s.length === 1 ? (a.value = s[0].value, s[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((d) => d.issues.map((f) => Na(f, l, Oa())))
  }), a);
}
const AS = /* @__PURE__ */ B("$ZodUnion", (n, a) => {
  Fe.init(n, a), qe(n._zod, "optin", () => a.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), qe(n._zod, "optout", () => a.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), qe(n._zod, "values", () => {
    if (a.options.every((l) => l._zod.values))
      return new Set(a.options.flatMap((l) => Array.from(l._zod.values)));
  }), qe(n._zod, "pattern", () => {
    if (a.options.every((l) => l._zod.pattern)) {
      const l = a.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${l.map((s) => id(s.source)).join("|")})$`);
    }
  });
  const o = a.options.length === 1 ? a.options[0]._zod.run : null;
  n._zod.parse = (l, s) => {
    if (o)
      return o(l, s);
    let d = !1;
    const f = [];
    for (const m of a.options) {
      const h = m._zod.run({
        value: l.value,
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
    return d ? Promise.all(f).then((m) => qh(m, l, n, s)) : qh(f, l, n, s);
  };
}), ES = /* @__PURE__ */ B("$ZodIntersection", (n, a) => {
  Fe.init(n, a), n._zod.parse = (o, l) => {
    const s = o.value, d = a.left._zod.run({ value: s, issues: [] }, l), f = a.right._zod.run({ value: s, issues: [] }, l);
    return d instanceof Promise || f instanceof Promise ? Promise.all([d, f]).then(([h, v]) => Lh(o, h, v)) : Lh(o, d, f);
  };
});
function qc(n, a) {
  if (n === a)
    return { valid: !0, data: n };
  if (n instanceof Date && a instanceof Date && +n == +a)
    return { valid: !0, data: n };
  if (Xo(n) && Xo(a)) {
    const o = Object.keys(a), l = Object.keys(n).filter((d) => o.indexOf(d) !== -1), s = { ...n, ...a };
    for (const d of l) {
      const f = qc(n[d], a[d]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [d, ...f.mergeErrorPath]
        };
      s[d] = f.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(n) && Array.isArray(a)) {
    if (n.length !== a.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let l = 0; l < n.length; l++) {
      const s = n[l], d = a[l], f = qc(s, d);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ...f.mergeErrorPath]
        };
      o.push(f.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Lh(n, a, o) {
  const l = /* @__PURE__ */ new Map();
  let s;
  for (const m of a.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const h of m.keys)
        l.has(h) || l.set(h, {}), l.get(h).l = !0;
    } else
      n.issues.push(m);
  for (const m of o.issues)
    if (m.code === "unrecognized_keys")
      for (const h of m.keys)
        l.has(h) || l.set(h, {}), l.get(h).r = !0;
    else
      n.issues.push(m);
  const d = [...l].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (d.length && s && n.issues.push({ ...s, keys: d }), ji(n))
    return n;
  const f = qc(a.value, o.value);
  if (!f.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
  return n.value = f.data, n;
}
const MS = /* @__PURE__ */ B("$ZodEnum", (n, a) => {
  Fe.init(n, a);
  const o = H_(a.entries), l = new Set(o);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${o.filter((s) => B0.has(typeof s)).map((s) => typeof s == "string" ? Oi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, d) => {
    const f = s.value;
    return l.has(f) || s.issues.push({
      code: "invalid_value",
      values: o,
      input: f,
      inst: n
    }), s;
  };
}), CS = /* @__PURE__ */ B("$ZodLiteral", (n, a) => {
  if (Fe.init(n, a), a.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(a.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${a.values.map((l) => typeof l == "string" ? Oi(l) : l ? Oi(l.toString()) : String(l)).join("|")})$`), n._zod.parse = (l, s) => {
    const d = l.value;
    return o.has(d) || l.issues.push({
      code: "invalid_value",
      values: a.values,
      input: d,
      inst: n
    }), l;
  };
}), OS = /* @__PURE__ */ B("$ZodTransform", (n, a) => {
  Fe.init(n, a), n._zod.optin = "optional", n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new B_(n.constructor.name);
    const s = a.transform(o.value, o);
    if (l.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (o.value = f, o.fallback = !0, o));
    if (s instanceof Promise)
      throw new Ei();
    return o.value = s, o.fallback = !0, o;
  };
});
function Vh(n, a) {
  return a === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const iv = /* @__PURE__ */ B("$ZodOptional", (n, a) => {
  Fe.init(n, a), n._zod.optin = "optional", n._zod.optout = "optional", qe(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), qe(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${id(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, l) => {
    if (a.innerType._zod.optin === "optional") {
      const s = o.value, d = a.innerType._zod.run(o, l);
      return d instanceof Promise ? d.then((f) => Vh(f, s)) : Vh(d, s);
    }
    return o.value === void 0 ? o : a.innerType._zod.run(o, l);
  };
}), NS = /* @__PURE__ */ B("$ZodExactOptional", (n, a) => {
  iv.init(n, a), qe(n._zod, "values", () => a.innerType._zod.values), qe(n._zod, "pattern", () => a.innerType._zod.pattern), n._zod.parse = (o, l) => a.innerType._zod.run(o, l);
}), DS = /* @__PURE__ */ B("$ZodNullable", (n, a) => {
  Fe.init(n, a), qe(n._zod, "optin", () => a.innerType._zod.optin), qe(n._zod, "optout", () => a.innerType._zod.optout), qe(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${id(o.source)}|null)$`) : void 0;
  }), qe(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), n._zod.parse = (o, l) => o.value === null ? o : a.innerType._zod.run(o, l);
}), RS = /* @__PURE__ */ B("$ZodDefault", (n, a) => {
  Fe.init(n, a), n._zod.optin = "optional", qe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return a.innerType._zod.run(o, l);
    if (o.value === void 0)
      return o.value = a.defaultValue, o;
    const s = a.innerType._zod.run(o, l);
    return s instanceof Promise ? s.then((d) => Gh(d, a)) : Gh(s, a);
  };
});
function Gh(n, a) {
  return n.value === void 0 && (n.value = a.defaultValue), n;
}
const ZS = /* @__PURE__ */ B("$ZodPrefault", (n, a) => {
  Fe.init(n, a), n._zod.optin = "optional", qe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, l) => (l.direction === "backward" || o.value === void 0 && (o.value = a.defaultValue), a.innerType._zod.run(o, l));
}), US = /* @__PURE__ */ B("$ZodNonOptional", (n, a) => {
  Fe.init(n, a), qe(n._zod, "values", () => {
    const o = a.innerType._zod.values;
    return o ? new Set([...o].filter((l) => l !== void 0)) : void 0;
  }), n._zod.parse = (o, l) => {
    const s = a.innerType._zod.run(o, l);
    return s instanceof Promise ? s.then((d) => Qh(d, n)) : Qh(s, n);
  };
});
function Qh(n, a) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: a
  }), n;
}
const $S = /* @__PURE__ */ B("$ZodCatch", (n, a) => {
  Fe.init(n, a), n._zod.optin = "optional", qe(n._zod, "optout", () => a.innerType._zod.optout), qe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return a.innerType._zod.run(o, l);
    const s = a.innerType._zod.run(o, l);
    return s instanceof Promise ? s.then((d) => (o.value = d.value, d.issues.length && (o.value = a.catchValue({
      ...o,
      error: {
        issues: d.issues.map((f) => Na(f, l, Oa()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = s.value, s.issues.length && (o.value = a.catchValue({
      ...o,
      error: {
        issues: s.issues.map((d) => Na(d, l, Oa()))
      },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), YS = /* @__PURE__ */ B("$ZodPipe", (n, a) => {
  Fe.init(n, a), qe(n._zod, "values", () => a.in._zod.values), qe(n._zod, "optin", () => a.in._zod.optin), qe(n._zod, "optout", () => a.out._zod.optout), qe(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, l) => {
    if (l.direction === "backward") {
      const d = a.out._zod.run(o, l);
      return d instanceof Promise ? d.then((f) => bl(f, a.in, l)) : bl(d, a.in, l);
    }
    const s = a.in._zod.run(o, l);
    return s instanceof Promise ? s.then((d) => bl(d, a.out, l)) : bl(s, a.out, l);
  };
});
function bl(n, a, o) {
  return n.issues.length ? (n.aborted = !0, n) : a._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, o);
}
const BS = /* @__PURE__ */ B("$ZodReadonly", (n, a) => {
  Fe.init(n, a), qe(n._zod, "propValues", () => a.innerType._zod.propValues), qe(n._zod, "values", () => a.innerType._zod.values), qe(n._zod, "optin", () => a.innerType?._zod?.optin), qe(n._zod, "optout", () => a.innerType?._zod?.optout), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      return a.innerType._zod.run(o, l);
    const s = a.innerType._zod.run(o, l);
    return s instanceof Promise ? s.then(Kh) : Kh(s);
  };
});
function Kh(n) {
  return n.value = Object.freeze(n.value), n;
}
const HS = /* @__PURE__ */ B("$ZodCustom", (n, a) => {
  Ot.init(n, a), Fe.init(n, a), n._zod.parse = (o, l) => o, n._zod.check = (o) => {
    const l = o.value, s = a.fn(l);
    if (s instanceof Promise)
      return s.then((d) => Jh(d, o, l, n));
    Jh(s, o, l, n);
  };
});
function Jh(n, a, o, l) {
  if (!n) {
    const s = {
      code: "custom",
      input: o,
      inst: l,
      // incorporates params.error into issue reporting
      path: [...l._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !l._zod.def.abort
      // params: inst._zod.def.params,
    };
    l._zod.def.params && (s.params = l._zod.def.params), a.issues.push(qo(s));
  }
}
var Ph;
class XS {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(a, ...o) {
    const l = o[0];
    return this._map.set(a, l), l && typeof l == "object" && "id" in l && this._idmap.set(l.id, a), this;
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
      const l = { ...this.get(o) ?? {} };
      delete l.id;
      const s = { ...l, ...this._map.get(a) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(a);
  }
  has(a) {
    return this._map.has(a);
  }
}
function qS() {
  return new XS();
}
(Ph = globalThis).__zod_globalRegistry ?? (Ph.__zod_globalRegistry = qS());
const Zo = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function LS(n, a) {
  return new n({
    type: "string",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function VS(n, a) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Wh(n, a) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function GS(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function QS(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function KS(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function JS(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function PS(n, a) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function WS(n, a) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function FS(n, a) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function IS(n, a) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ew(n, a) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function tw(n, a) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function nw(n, a) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function aw(n, a) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function iw(n, a) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ow(n, a) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function rw(n, a) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function lw(n, a) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function sw(n, a) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function uw(n, a) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function cw(n, a) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function dw(n, a) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...fe(a)
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
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function mw(n, a) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function pw(n, a) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function hw(n, a) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function _w(n, a) {
  return new n({
    type: "number",
    checks: [],
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function vw(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function yw(n, a) {
  return new n({
    type: "boolean",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function gw(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function bw(n, a) {
  return new n({
    type: "never",
    ...fe(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Fh(n, a) {
  return new F_({
    check: "less_than",
    ...fe(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function xc(n, a) {
  return new F_({
    check: "less_than",
    ...fe(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ih(n, a) {
  return new I_({
    check: "greater_than",
    ...fe(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function zc(n, a) {
  return new I_({
    check: "greater_than",
    ...fe(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function e_(n, a) {
  return new Z1({
    check: "multiple_of",
    ...fe(a),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function ov(n, a) {
  return new $1({
    check: "max_length",
    ...fe(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Yl(n, a) {
  return new Y1({
    check: "min_length",
    ...fe(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function rv(n, a) {
  return new B1({
    check: "length_equals",
    ...fe(a),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function Sw(n, a) {
  return new H1({
    check: "string_format",
    format: "regex",
    ...fe(a),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function ww(n) {
  return new X1({
    check: "string_format",
    format: "lowercase",
    ...fe(n)
  });
}
// @__NO_SIDE_EFFECTS__
function kw(n) {
  return new q1({
    check: "string_format",
    format: "uppercase",
    ...fe(n)
  });
}
// @__NO_SIDE_EFFECTS__
function xw(n, a) {
  return new L1({
    check: "string_format",
    format: "includes",
    ...fe(a),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function zw(n, a) {
  return new V1({
    check: "string_format",
    format: "starts_with",
    ...fe(a),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function jw(n, a) {
  return new G1({
    check: "string_format",
    format: "ends_with",
    ...fe(a),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ri(n) {
  return new Q1({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function Tw(n) {
  return /* @__PURE__ */ Ri((a) => a.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function Aw() {
  return /* @__PURE__ */ Ri((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function Ew() {
  return /* @__PURE__ */ Ri((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Mw() {
  return /* @__PURE__ */ Ri((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Cw() {
  return /* @__PURE__ */ Ri((n) => $0(n));
}
// @__NO_SIDE_EFFECTS__
function Ow(n, a, o) {
  return new n({
    type: "array",
    element: a,
    // get element() {
    //   return element;
    // },
    ...fe(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Nw(n, a, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...fe(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Dw(n, a) {
  const o = /* @__PURE__ */ Rw((l) => (l.addIssue = (s) => {
    if (typeof s == "string")
      l.issues.push(qo(s, l.value, o._zod.def));
    else {
      const d = s;
      d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = l.value), d.inst ?? (d.inst = o), d.continue ?? (d.continue = !o._zod.def.abort), l.issues.push(qo(d));
    }
  }, n(l.value, l)), a);
  return o;
}
// @__NO_SIDE_EFFECTS__
function Rw(n, a) {
  const o = new Ot({
    check: "custom",
    ...fe(a)
  });
  return o._zod.check = n, o;
}
function lv(n) {
  let a = n?.target ?? "draft-2020-12";
  return a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? Zo,
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
function yt(n, a, o = { path: [], schemaPath: [] }) {
  var l;
  const s = n._zod.def, d = a.seen.get(n);
  if (d)
    return d.count++, o.schemaPath.includes(n) && (d.cycle = o.path), d.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: o.path };
  a.seen.set(n, f);
  const m = n._zod.toJSONSchema?.();
  if (m)
    f.schema = m;
  else {
    const g = {
      ...o,
      schemaPath: [...o.schemaPath, n],
      path: o.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(a, f.schema, g);
    else {
      const S = f.schema, w = a.processors[s.type];
      if (!w)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      w(n, a, S, g);
    }
    const b = n._zod.parent;
    b && (f.ref || (f.ref = b), yt(b, a, g), a.seen.get(b).isParent = !0);
  }
  const h = a.metadataRegistry.get(n);
  return h && Object.assign(f.schema, h), a.io === "input" && xt(n) && (delete f.schema.examples, delete f.schema.default), a.io === "input" && "_prefault" in f.schema && ((l = f.schema).default ?? (l.default = f.schema._prefault)), delete f.schema._prefault, a.seen.get(n).schema;
}
function sv(n, a) {
  const o = n.seen.get(a);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = /* @__PURE__ */ new Map();
  for (const f of n.seen.entries()) {
    const m = n.metadataRegistry.get(f[0])?.id;
    if (m) {
      const h = l.get(m);
      if (h && h !== f[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      l.set(m, f[0]);
    }
  }
  const s = (f) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const b = n.external.registry.get(f[0])?.id, S = n.external.uri ?? ((z) => z);
      if (b)
        return { ref: S(b) };
      const w = f[1].defId ?? f[1].schema.id ?? `schema${n.counter++}`;
      return f[1].defId = w, { defId: w, ref: `${S("__shared")}#/${m}/${w}` };
    }
    if (f[1] === o)
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
    if (a === f[0]) {
      d(f);
      continue;
    }
    if (n.external) {
      const v = n.external.registry.get(f[0])?.id;
      if (a !== f[0] && v) {
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
function uv(n, a) {
  const o = n.seen.get(a);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const l = (m) => {
    const h = n.seen.get(m);
    if (h.ref === null)
      return;
    const v = h.def ?? h.schema, g = { ...v }, b = h.ref;
    if (h.ref = null, b) {
      l(b);
      const w = n.seen.get(b), z = w.schema;
      if (z.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(z)) : Object.assign(v, z), Object.assign(v, g), m._zod.parent === b)
        for (const O in v)
          O === "$ref" || O === "allOf" || O in g || delete v[O];
      if (z.$ref && w.def)
        for (const O in v)
          O === "$ref" || O === "allOf" || O in w.def && JSON.stringify(v[O]) === JSON.stringify(w.def[O]) && delete v[O];
    }
    const S = m._zod.parent;
    if (S && S !== b) {
      l(S);
      const w = n.seen.get(S);
      if (w?.schema.$ref && (v.$ref = w.schema.$ref, w.def))
        for (const z in v)
          z === "$ref" || z === "allOf" || z in w.def && JSON.stringify(v[z]) === JSON.stringify(w.def[z]) && delete v[z];
    }
    n.override({
      zodSchema: m,
      jsonSchema: v,
      path: h.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse())
    l(m[0]);
  const s = {};
  if (n.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(a)?.id;
    if (!m)
      throw new Error("Schema is missing an `id` property");
    s.$id = n.external.uri(m);
  }
  Object.assign(s, o.def ?? o.schema);
  const d = n.metadataRegistry.get(a)?.id;
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
        ...a["~standard"],
        jsonSchema: {
          input: Bl(a, "input", n.processors),
          output: Bl(a, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function xt(n, a) {
  const o = a ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n))
    return !1;
  o.seen.add(n);
  const l = n._zod.def;
  if (l.type === "transform")
    return !0;
  if (l.type === "array")
    return xt(l.element, o);
  if (l.type === "set")
    return xt(l.valueType, o);
  if (l.type === "lazy")
    return xt(l.getter(), o);
  if (l.type === "promise" || l.type === "optional" || l.type === "nonoptional" || l.type === "nullable" || l.type === "readonly" || l.type === "default" || l.type === "prefault")
    return xt(l.innerType, o);
  if (l.type === "intersection")
    return xt(l.left, o) || xt(l.right, o);
  if (l.type === "record" || l.type === "map")
    return xt(l.keyType, o) || xt(l.valueType, o);
  if (l.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : xt(l.in, o) || xt(l.out, o);
  if (l.type === "object") {
    for (const s in l.shape)
      if (xt(l.shape[s], o))
        return !0;
    return !1;
  }
  if (l.type === "union") {
    for (const s of l.options)
      if (xt(s, o))
        return !0;
    return !1;
  }
  if (l.type === "tuple") {
    for (const s of l.items)
      if (xt(s, o))
        return !0;
    return !!(l.rest && xt(l.rest, o));
  }
  return !1;
}
const Zw = (n, a = {}) => (o) => {
  const l = lv({ ...o, processors: a });
  return yt(n, l), sv(l, n), uv(l, n);
}, Bl = (n, a, o = {}) => (l) => {
  const { libraryOptions: s, target: d } = l ?? {}, f = lv({ ...s ?? {}, target: d, io: a, processors: o });
  return yt(n, f), sv(f, n), uv(f, n);
}, Uw = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, $w = (n, a, o, l) => {
  const s = o;
  s.type = "string";
  const { minimum: d, maximum: f, format: m, patterns: h, contentEncoding: v } = n._zod.bag;
  if (typeof d == "number" && (s.minLength = d), typeof f == "number" && (s.maxLength = f), m && (s.format = Uw[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), v && (s.contentEncoding = v), h && h.size > 0) {
    const g = [...h];
    g.length === 1 ? s.pattern = g[0].source : g.length > 1 && (s.allOf = [
      ...g.map((b) => ({
        ...a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: b.source
      }))
    ]);
  }
}, Yw = (n, a, o, l) => {
  const s = o, { minimum: d, maximum: f, format: m, multipleOf: h, exclusiveMaximum: v, exclusiveMinimum: g } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const b = typeof g == "number" && g >= (d ?? Number.NEGATIVE_INFINITY), S = typeof v == "number" && v <= (f ?? Number.POSITIVE_INFINITY), w = a.target === "draft-04" || a.target === "openapi-3.0";
  b ? w ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof d == "number" && (s.minimum = d), S ? w ? (s.maximum = v, s.exclusiveMaximum = !0) : s.exclusiveMaximum = v : typeof f == "number" && (s.maximum = f), typeof h == "number" && (s.multipleOf = h);
}, Bw = (n, a, o, l) => {
  o.type = "boolean";
}, Hw = (n, a, o, l) => {
  o.not = {};
}, Xw = (n, a, o, l) => {
}, qw = (n, a, o, l) => {
  const s = n._zod.def, d = H_(s.entries);
  d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), o.enum = d;
}, Lw = (n, a, o, l) => {
  const s = n._zod.def, d = [];
  for (const f of s.values)
    if (f === void 0) {
      if (a.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof f == "bigint") {
      if (a.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      d.push(Number(f));
    } else
      d.push(f);
  if (d.length !== 0) if (d.length === 1) {
    const f = d[0];
    o.type = f === null ? "null" : typeof f, a.target === "draft-04" || a.target === "openapi-3.0" ? o.enum = [f] : o.const = f;
  } else
    d.every((f) => typeof f == "number") && (o.type = "number"), d.every((f) => typeof f == "string") && (o.type = "string"), d.every((f) => typeof f == "boolean") && (o.type = "boolean"), d.every((f) => f === null) && (o.type = "null"), o.enum = d;
}, Vw = (n, a, o, l) => {
  if (a.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Gw = (n, a, o, l) => {
  if (a.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Qw = (n, a, o, l) => {
  const s = o, d = n._zod.def, { minimum: f, maximum: m } = n._zod.bag;
  typeof f == "number" && (s.minItems = f), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = yt(d.element, a, {
    ...l,
    path: [...l.path, "items"]
  });
}, Kw = (n, a, o, l) => {
  const s = o, d = n._zod.def;
  s.type = "object", s.properties = {};
  const f = d.shape;
  for (const v in f)
    s.properties[v] = yt(f[v], a, {
      ...l,
      path: [...l.path, "properties", v]
    });
  const m = new Set(Object.keys(f)), h = new Set([...m].filter((v) => {
    const g = d.shape[v]._zod;
    return a.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  h.size > 0 && (s.required = Array.from(h)), d.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : d.catchall ? d.catchall && (s.additionalProperties = yt(d.catchall, a, {
    ...l,
    path: [...l.path, "additionalProperties"]
  })) : a.io === "output" && (s.additionalProperties = !1);
}, Jw = (n, a, o, l) => {
  const s = n._zod.def, d = s.inclusive === !1, f = s.options.map((m, h) => yt(m, a, {
    ...l,
    path: [...l.path, d ? "oneOf" : "anyOf", h]
  }));
  d ? o.oneOf = f : o.anyOf = f;
}, Pw = (n, a, o, l) => {
  const s = n._zod.def, d = yt(s.left, a, {
    ...l,
    path: [...l.path, "allOf", 0]
  }), f = yt(s.right, a, {
    ...l,
    path: [...l.path, "allOf", 1]
  }), m = (v) => "allOf" in v && Object.keys(v).length === 1, h = [
    ...m(d) ? d.allOf : [d],
    ...m(f) ? f.allOf : [f]
  ];
  o.allOf = h;
}, Ww = (n, a, o, l) => {
  const s = n._zod.def, d = yt(s.innerType, a, l), f = a.seen.get(n);
  a.target === "openapi-3.0" ? (f.ref = s.innerType, o.nullable = !0) : o.anyOf = [d, { type: "null" }];
}, Fw = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType;
}, Iw = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType, o.default = JSON.parse(JSON.stringify(s.defaultValue));
}, ek = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType, a.io === "input" && (o._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, tk = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = f;
}, nk = (n, a, o, l) => {
  const s = n._zod.def, d = s.in._zod.traits.has("$ZodTransform"), f = a.io === "input" ? d ? s.out : s.in : s.out;
  yt(f, a, l);
  const m = a.seen.get(n);
  m.ref = f;
}, ak = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType, o.readOnly = !0;
}, cv = (n, a, o, l) => {
  const s = n._zod.def;
  yt(s.innerType, a, l);
  const d = a.seen.get(n);
  d.ref = s.innerType;
}, ik = /* @__PURE__ */ B("ZodISODateTime", (n, a) => {
  lS.init(n, a), Je.init(n, a);
});
function ok(n) {
  return /* @__PURE__ */ fw(ik, n);
}
const rk = /* @__PURE__ */ B("ZodISODate", (n, a) => {
  sS.init(n, a), Je.init(n, a);
});
function lk(n) {
  return /* @__PURE__ */ mw(rk, n);
}
const sk = /* @__PURE__ */ B("ZodISOTime", (n, a) => {
  uS.init(n, a), Je.init(n, a);
});
function uk(n) {
  return /* @__PURE__ */ pw(sk, n);
}
const ck = /* @__PURE__ */ B("ZodISODuration", (n, a) => {
  cS.init(n, a), Je.init(n, a);
});
function dk(n) {
  return /* @__PURE__ */ hw(ck, n);
}
const fk = (n, a) => {
  G_.init(n, a), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (o) => F0(n, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => W0(n, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        n.issues.push(o), n.message = JSON.stringify(n.issues, Xc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        n.issues.push(...o), n.message = JSON.stringify(n.issues, Xc, 2);
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
}, Ft = /* @__PURE__ */ B("ZodError", fk, {
  Parent: Error
}), mk = /* @__PURE__ */ rd(Ft), pk = /* @__PURE__ */ ld(Ft), hk = /* @__PURE__ */ Kl(Ft), _k = /* @__PURE__ */ Jl(Ft), vk = /* @__PURE__ */ t1(Ft), yk = /* @__PURE__ */ n1(Ft), gk = /* @__PURE__ */ a1(Ft), bk = /* @__PURE__ */ i1(Ft), Sk = /* @__PURE__ */ o1(Ft), wk = /* @__PURE__ */ r1(Ft), kk = /* @__PURE__ */ l1(Ft), xk = /* @__PURE__ */ s1(Ft), t_ = /* @__PURE__ */ new WeakMap();
function Ko(n, a, o) {
  const l = Object.getPrototypeOf(n);
  let s = t_.get(l);
  if (s || (s = /* @__PURE__ */ new Set(), t_.set(l, s)), !s.has(a)) {
    s.add(a);
    for (const d in o) {
      const f = o[d];
      Object.defineProperty(l, d, {
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
const Ie = /* @__PURE__ */ B("ZodType", (n, a) => (Fe.init(n, a), Object.assign(n["~standard"], {
  jsonSchema: {
    input: Bl(n, "input"),
    output: Bl(n, "output")
  }
}), n.toJSONSchema = Zw(n, {}), n.def = a, n.type = a.type, Object.defineProperty(n, "_def", { value: a }), n.parse = (o, l) => mk(n, o, l, { callee: n.parse }), n.safeParse = (o, l) => hk(n, o, l), n.parseAsync = async (o, l) => pk(n, o, l, { callee: n.parseAsync }), n.safeParseAsync = async (o, l) => _k(n, o, l), n.spa = n.safeParseAsync, n.encode = (o, l) => vk(n, o, l), n.decode = (o, l) => yk(n, o, l), n.encodeAsync = async (o, l) => gk(n, o, l), n.decodeAsync = async (o, l) => bk(n, o, l), n.safeEncode = (o, l) => Sk(n, o, l), n.safeDecode = (o, l) => wk(n, o, l), n.safeEncodeAsync = async (o, l) => kk(n, o, l), n.safeDecodeAsync = async (o, l) => xk(n, o, l), Ko(n, "ZodType", {
  check(...o) {
    const l = this.def;
    return this.clone(ia(l, {
      checks: [
        ...l.checks ?? [],
        ...o.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, l) {
    return oa(this, o, l);
  },
  brand() {
    return this;
  },
  register(o, l) {
    return o.add(this, l), this;
  },
  refine(o, l) {
    return this.check(_2(o, l));
  },
  superRefine(o, l) {
    return this.check(v2(o, l));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ Ri(o));
  },
  optional() {
    return o_(this);
  },
  exactOptional() {
    return a2(this);
  },
  nullable() {
    return r_(this);
  },
  nullish() {
    return o_(r_(this));
  },
  nonoptional(o) {
    return u2(this, o);
  },
  array() {
    return Aa(this);
  },
  or(o) {
    return pv([this, o]);
  },
  and(o) {
    return Fk(this, o);
  },
  transform(o) {
    return l_(this, t2(o));
  },
  default(o) {
    return r2(this, o);
  },
  prefault(o) {
    return s2(this, o);
  },
  catch(o) {
    return d2(this, o);
  },
  pipe(o) {
    return l_(this, o);
  },
  readonly() {
    return p2(this);
  },
  describe(o) {
    const l = this.clone();
    return Zo.add(l, { description: o }), l;
  },
  meta(...o) {
    if (o.length === 0)
      return Zo.get(this);
    const l = this.clone();
    return Zo.add(l, o[0]), l;
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
    return Zo.get(n)?.description;
  },
  configurable: !0
}), n)), dv = /* @__PURE__ */ B("_ZodString", (n, a) => {
  sd.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (l, s, d) => $w(n, l, s);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Ko(n, "_ZodString", {
    regex(...l) {
      return this.check(/* @__PURE__ */ Sw(...l));
    },
    includes(...l) {
      return this.check(/* @__PURE__ */ xw(...l));
    },
    startsWith(...l) {
      return this.check(/* @__PURE__ */ zw(...l));
    },
    endsWith(...l) {
      return this.check(/* @__PURE__ */ jw(...l));
    },
    min(...l) {
      return this.check(/* @__PURE__ */ Yl(...l));
    },
    max(...l) {
      return this.check(/* @__PURE__ */ ov(...l));
    },
    length(...l) {
      return this.check(/* @__PURE__ */ rv(...l));
    },
    nonempty(...l) {
      return this.check(/* @__PURE__ */ Yl(1, ...l));
    },
    lowercase(l) {
      return this.check(/* @__PURE__ */ ww(l));
    },
    uppercase(l) {
      return this.check(/* @__PURE__ */ kw(l));
    },
    trim() {
      return this.check(/* @__PURE__ */ Aw());
    },
    normalize(...l) {
      return this.check(/* @__PURE__ */ Tw(...l));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Ew());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Mw());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Cw());
    }
  });
}), zk = /* @__PURE__ */ B("ZodString", (n, a) => {
  sd.init(n, a), dv.init(n, a), n.email = (o) => n.check(/* @__PURE__ */ VS(jk, o)), n.url = (o) => n.check(/* @__PURE__ */ PS(Tk, o)), n.jwt = (o) => n.check(/* @__PURE__ */ dw(Xk, o)), n.emoji = (o) => n.check(/* @__PURE__ */ WS(Ak, o)), n.guid = (o) => n.check(/* @__PURE__ */ Wh(n_, o)), n.uuid = (o) => n.check(/* @__PURE__ */ GS(Sl, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ QS(Sl, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ KS(Sl, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ JS(Sl, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ FS(Ek, o)), n.guid = (o) => n.check(/* @__PURE__ */ Wh(n_, o)), n.cuid = (o) => n.check(/* @__PURE__ */ IS(Mk, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ ew(Ck, o)), n.ulid = (o) => n.check(/* @__PURE__ */ tw(Ok, o)), n.base64 = (o) => n.check(/* @__PURE__ */ sw(Yk, o)), n.base64url = (o) => n.check(/* @__PURE__ */ uw(Bk, o)), n.xid = (o) => n.check(/* @__PURE__ */ nw(Nk, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ aw(Dk, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ iw(Rk, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ ow(Zk, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ rw(Uk, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ lw($k, o)), n.e164 = (o) => n.check(/* @__PURE__ */ cw(Hk, o)), n.datetime = (o) => n.check(ok(o)), n.date = (o) => n.check(lk(o)), n.time = (o) => n.check(uk(o)), n.duration = (o) => n.check(dk(o));
});
function vt(n) {
  return /* @__PURE__ */ LS(zk, n);
}
const Je = /* @__PURE__ */ B("ZodStringFormat", (n, a) => {
  Ke.init(n, a), dv.init(n, a);
}), jk = /* @__PURE__ */ B("ZodEmail", (n, a) => {
  F1.init(n, a), Je.init(n, a);
}), n_ = /* @__PURE__ */ B("ZodGUID", (n, a) => {
  P1.init(n, a), Je.init(n, a);
}), Sl = /* @__PURE__ */ B("ZodUUID", (n, a) => {
  W1.init(n, a), Je.init(n, a);
}), Tk = /* @__PURE__ */ B("ZodURL", (n, a) => {
  I1.init(n, a), Je.init(n, a);
}), Ak = /* @__PURE__ */ B("ZodEmoji", (n, a) => {
  eS.init(n, a), Je.init(n, a);
}), Ek = /* @__PURE__ */ B("ZodNanoID", (n, a) => {
  tS.init(n, a), Je.init(n, a);
}), Mk = /* @__PURE__ */ B("ZodCUID", (n, a) => {
  nS.init(n, a), Je.init(n, a);
}), Ck = /* @__PURE__ */ B("ZodCUID2", (n, a) => {
  aS.init(n, a), Je.init(n, a);
}), Ok = /* @__PURE__ */ B("ZodULID", (n, a) => {
  iS.init(n, a), Je.init(n, a);
}), Nk = /* @__PURE__ */ B("ZodXID", (n, a) => {
  oS.init(n, a), Je.init(n, a);
}), Dk = /* @__PURE__ */ B("ZodKSUID", (n, a) => {
  rS.init(n, a), Je.init(n, a);
}), Rk = /* @__PURE__ */ B("ZodIPv4", (n, a) => {
  dS.init(n, a), Je.init(n, a);
}), Zk = /* @__PURE__ */ B("ZodIPv6", (n, a) => {
  fS.init(n, a), Je.init(n, a);
}), Uk = /* @__PURE__ */ B("ZodCIDRv4", (n, a) => {
  mS.init(n, a), Je.init(n, a);
}), $k = /* @__PURE__ */ B("ZodCIDRv6", (n, a) => {
  pS.init(n, a), Je.init(n, a);
}), Yk = /* @__PURE__ */ B("ZodBase64", (n, a) => {
  hS.init(n, a), Je.init(n, a);
}), Bk = /* @__PURE__ */ B("ZodBase64URL", (n, a) => {
  vS.init(n, a), Je.init(n, a);
}), Hk = /* @__PURE__ */ B("ZodE164", (n, a) => {
  yS.init(n, a), Je.init(n, a);
}), Xk = /* @__PURE__ */ B("ZodJWT", (n, a) => {
  bS.init(n, a), Je.init(n, a);
}), fv = /* @__PURE__ */ B("ZodNumber", (n, a) => {
  tv.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (l, s, d) => Yw(n, l, s), Ko(n, "ZodNumber", {
    gt(l, s) {
      return this.check(/* @__PURE__ */ Ih(l, s));
    },
    gte(l, s) {
      return this.check(/* @__PURE__ */ zc(l, s));
    },
    min(l, s) {
      return this.check(/* @__PURE__ */ zc(l, s));
    },
    lt(l, s) {
      return this.check(/* @__PURE__ */ Fh(l, s));
    },
    lte(l, s) {
      return this.check(/* @__PURE__ */ xc(l, s));
    },
    max(l, s) {
      return this.check(/* @__PURE__ */ xc(l, s));
    },
    int(l) {
      return this.check(a_(l));
    },
    safe(l) {
      return this.check(a_(l));
    },
    positive(l) {
      return this.check(/* @__PURE__ */ Ih(0, l));
    },
    nonnegative(l) {
      return this.check(/* @__PURE__ */ zc(0, l));
    },
    negative(l) {
      return this.check(/* @__PURE__ */ Fh(0, l));
    },
    nonpositive(l) {
      return this.check(/* @__PURE__ */ xc(0, l));
    },
    multipleOf(l, s) {
      return this.check(/* @__PURE__ */ e_(l, s));
    },
    step(l, s) {
      return this.check(/* @__PURE__ */ e_(l, s));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function mv(n) {
  return /* @__PURE__ */ _w(fv, n);
}
const qk = /* @__PURE__ */ B("ZodNumberFormat", (n, a) => {
  SS.init(n, a), fv.init(n, a);
});
function a_(n) {
  return /* @__PURE__ */ vw(qk, n);
}
const Lk = /* @__PURE__ */ B("ZodBoolean", (n, a) => {
  wS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Bw(n, o, l);
});
function Hl(n) {
  return /* @__PURE__ */ yw(Lk, n);
}
const Vk = /* @__PURE__ */ B("ZodUnknown", (n, a) => {
  kS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Xw();
});
function i_() {
  return /* @__PURE__ */ gw(Vk);
}
const Gk = /* @__PURE__ */ B("ZodNever", (n, a) => {
  xS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Hw(n, o, l);
});
function Qk(n) {
  return /* @__PURE__ */ bw(Gk, n);
}
const Kk = /* @__PURE__ */ B("ZodArray", (n, a) => {
  zS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Qw(n, o, l, s), n.element = a.element, Ko(n, "ZodArray", {
    min(o, l) {
      return this.check(/* @__PURE__ */ Yl(o, l));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ Yl(1, o));
    },
    max(o, l) {
      return this.check(/* @__PURE__ */ ov(o, l));
    },
    length(o, l) {
      return this.check(/* @__PURE__ */ rv(o, l));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Aa(n, a) {
  return /* @__PURE__ */ Ow(Kk, n, a);
}
const Jk = /* @__PURE__ */ B("ZodObject", (n, a) => {
  TS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Kw(n, o, l, s), qe(n, "shape", () => a.shape), Ko(n, "ZodObject", {
    keyof() {
      return Mi(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({ ...this._zod.def, catchall: o });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: i_() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: i_() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: Qk() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(o) {
      return V0(this, o);
    },
    safeExtend(o) {
      return G0(this, o);
    },
    merge(o) {
      return Q0(this, o);
    },
    pick(o) {
      return q0(this, o);
    },
    omit(o) {
      return L0(this, o);
    },
    partial(...o) {
      return K0(hv, this, o[0]);
    },
    required(...o) {
      return J0(_v, this, o[0]);
    }
  });
});
function Ma(n, a) {
  const o = {
    type: "object",
    shape: n ?? {},
    ...fe(a)
  };
  return new Jk(o);
}
const Pk = /* @__PURE__ */ B("ZodUnion", (n, a) => {
  AS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Jw(n, o, l, s), n.options = a.options;
});
function pv(n, a) {
  return new Pk({
    type: "union",
    options: n,
    ...fe(a)
  });
}
const Wk = /* @__PURE__ */ B("ZodIntersection", (n, a) => {
  ES.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Pw(n, o, l, s);
});
function Fk(n, a) {
  return new Wk({
    type: "intersection",
    left: n,
    right: a
  });
}
const Lc = /* @__PURE__ */ B("ZodEnum", (n, a) => {
  MS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (l, s, d) => qw(n, l, s), n.enum = a.entries, n.options = Object.values(a.entries);
  const o = new Set(Object.keys(a.entries));
  n.extract = (l, s) => {
    const d = {};
    for (const f of l)
      if (o.has(f))
        d[f] = a.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Lc({
      ...a,
      checks: [],
      ...fe(s),
      entries: d
    });
  }, n.exclude = (l, s) => {
    const d = { ...a.entries };
    for (const f of l)
      if (o.has(f))
        delete d[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Lc({
      ...a,
      checks: [],
      ...fe(s),
      entries: d
    });
  };
});
function Mi(n, a) {
  const o = Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n;
  return new Lc({
    type: "enum",
    entries: o,
    ...fe(a)
  });
}
const Ik = /* @__PURE__ */ B("ZodLiteral", (n, a) => {
  CS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Lw(n, o, l), n.values = new Set(a.values), Object.defineProperty(n, "value", {
    get() {
      if (a.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return a.values[0];
    }
  });
});
function Xl(n, a) {
  return new Ik({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...fe(a)
  });
}
const e2 = /* @__PURE__ */ B("ZodTransform", (n, a) => {
  OS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Gw(n, o), n._zod.parse = (o, l) => {
    if (l.direction === "backward")
      throw new B_(n.constructor.name);
    o.addIssue = (d) => {
      if (typeof d == "string")
        o.issues.push(qo(d, o.value, a));
      else {
        const f = d;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = o.value), f.inst ?? (f.inst = n), o.issues.push(qo(f));
      }
    };
    const s = a.transform(o.value, o);
    return s instanceof Promise ? s.then((d) => (o.value = d, o.fallback = !0, o)) : (o.value = s, o.fallback = !0, o);
  };
});
function t2(n) {
  return new e2({
    type: "transform",
    transform: n
  });
}
const hv = /* @__PURE__ */ B("ZodOptional", (n, a) => {
  iv.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => cv(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function o_(n) {
  return new hv({
    type: "optional",
    innerType: n
  });
}
const n2 = /* @__PURE__ */ B("ZodExactOptional", (n, a) => {
  NS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => cv(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function a2(n) {
  return new n2({
    type: "optional",
    innerType: n
  });
}
const i2 = /* @__PURE__ */ B("ZodNullable", (n, a) => {
  DS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Ww(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function r_(n) {
  return new i2({
    type: "nullable",
    innerType: n
  });
}
const o2 = /* @__PURE__ */ B("ZodDefault", (n, a) => {
  RS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Iw(n, o, l, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function r2(n, a) {
  return new o2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : q_(a);
    }
  });
}
const l2 = /* @__PURE__ */ B("ZodPrefault", (n, a) => {
  ZS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => ek(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function s2(n, a) {
  return new l2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : q_(a);
    }
  });
}
const _v = /* @__PURE__ */ B("ZodNonOptional", (n, a) => {
  US.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Fw(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function u2(n, a) {
  return new _v({
    type: "nonoptional",
    innerType: n,
    ...fe(a)
  });
}
const c2 = /* @__PURE__ */ B("ZodCatch", (n, a) => {
  $S.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => tk(n, o, l, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function d2(n, a) {
  return new c2({
    type: "catch",
    innerType: n,
    catchValue: typeof a == "function" ? a : () => a
  });
}
const f2 = /* @__PURE__ */ B("ZodPipe", (n, a) => {
  YS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => nk(n, o, l, s), n.in = a.in, n.out = a.out;
});
function l_(n, a) {
  return new f2({
    type: "pipe",
    in: n,
    out: a
    // ...util.normalizeParams(params),
  });
}
const m2 = /* @__PURE__ */ B("ZodReadonly", (n, a) => {
  BS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => ak(n, o, l, s), n.unwrap = () => n._zod.def.innerType;
});
function p2(n) {
  return new m2({
    type: "readonly",
    innerType: n
  });
}
const h2 = /* @__PURE__ */ B("ZodCustom", (n, a) => {
  HS.init(n, a), Ie.init(n, a), n._zod.processJSONSchema = (o, l, s) => Vw(n, o);
});
function _2(n, a = {}) {
  return /* @__PURE__ */ Nw(h2, n, a);
}
function v2(n, a) {
  return /* @__PURE__ */ Dw(n, a);
}
const Ci = vt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), xe = Ci.optional(), y2 = Ma({
  segment_id: mv().int().nonnegative(),
  area_id: vt().min(1).optional(),
  name: vt().min(1),
  icon: vt().optional(),
  include_in_floor_clean: Hl().optional().default(!0)
}).passthrough(), g2 = Ma({
  id: vt().min(1),
  name: vt().min(1),
  map_entity: Ci,
  map_select_option: vt().min(1).optional(),
  vacuum_then_mop_routine: Ci.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: Hl().optional().default(!1),
  rooms: Aa(y2).min(1)
}).passthrough(), b2 = Ma({
  id: vt().min(1),
  name: vt().min(1),
  icon: vt().optional(),
  strategy: Mi(["custom", "smartplan"]),
  cleaning_type: Mi(["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: vt().optional(),
  mop_mode: vt().optional(),
  mop_intensity: vt().optional(),
  cleaning_count: pv([Xl(1), Xl(2)]).optional()
}).passthrough(), vv = Ma({
  type: Xl("custom:roborock-vacuum-map-card").optional(),
  config_version: mv().int().positive().optional(),
  entity: Ci.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: vt().optional(),
  language: Mi(["en", "nl", "pl", "tr"]).optional().default("en"),
  entities: Ma({
    map_select: xe,
    cleaning_mode: xe,
    vacuum_then_mop_script: xe,
    mop_mode: xe,
    mop_intensity: xe,
    dock_mop_drying: xe,
    dock_mop_drying_remaining_time: xe,
    dock_child_lock: xe,
    dock_mop_wash_frequency: xe,
    dock_wash_mode: xe,
    dock_wash_temperature: xe,
    dock_auto_empty: xe,
    dock_empty_mode: xe,
    dock_auto_dry: xe,
    dock_dry_duration: xe,
    assisted_carry_stage: xe,
    assisted_carry_job: xe,
    assisted_carry_prepare_script: xe,
    assisted_carry_start_script: xe,
    assisted_carry_finish_script: xe,
    water_shortage: xe,
    mop_attached: xe,
    water_box_attached: xe,
    do_not_disturb: xe,
    battery: xe,
    current_room: xe,
    cleaning_area: xe,
    cleaning_time: xe,
    cleaning_progress: xe,
    status: xe,
    error: xe,
    last_clean_end: xe,
    dock_clean_water_empty: xe,
    dock_dirty_water_full: xe,
    dock_error: xe,
    dock_clean_fluid_empty: xe,
    dock_detergent_empty: xe
  }).passthrough().optional().default({}),
  floors: Aa(g2).min(1),
  presets: Aa(b2).optional().default([]),
  default_preset: vt().optional().default("vacuum_only"),
  vacuum_mode_fallback: Xl("set_clean_motor_mode").optional(),
  enable_mop_only: Hl().optional().default(!1),
  mop_routes: Ma({
    vacuum_and_mop: Aa(vt().min(1)).min(1).optional(),
    mop: Aa(vt().min(1)).min(1).optional()
  }).optional(),
  consumables: Aa(
    Ma({
      kind: Mi(["main_brush", "side_brush", "filter", "sensors", "strainer", "mop", "roller", "cleaning_brush"]),
      sensor: Ci,
      reset_button: Ci.refine((n) => n.startsWith("button."), "Reset must be a button entity").optional()
    })
  ).optional(),
  enable_smartplan: Hl().optional(),
  cleaning_count_command: Mi(["set_clean_repeat_times", "app_segment_clean"]).optional()
}).passthrough().superRefine((n, a) => {
  if (n.floors.length > 1 && !n.entities.map_select && a.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" }), n.floors.filter((d) => d.assisted_carry).length > 0) {
    const d = [
      "assisted_carry_stage",
      "assisted_carry_job",
      "assisted_carry_prepare_script",
      "assisted_carry_start_script",
      "assisted_carry_finish_script"
    ];
    for (const f of d)
      n.entities[f] || a.addIssue({ code: "custom", path: ["entities", f], message: "Assisted carry requires this entity" });
  }
  const l = /* @__PURE__ */ new Set();
  for (const [d, f] of n.floors.entries()) {
    l.has(f.id) && a.addIssue({ code: "custom", path: ["floors", d, "id"], message: "Floor IDs must be unique" }), l.add(f.id);
    const m = /* @__PURE__ */ new Set();
    for (const [h, v] of f.rooms.entries())
      m.has(v.segment_id) && a.addIssue({
        code: "custom",
        path: ["floors", d, "rooms", h, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(v.segment_id);
  }
  const s = /* @__PURE__ */ new Set(["vacuum_only", "mop_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [d, f] of n.presets.entries())
    s.has(f.id) && a.addIssue({ code: "custom", path: ["presets", d, "id"], message: "Preset IDs must be unique" }), s.add(f.id);
  n.default_preset && !s.has(n.default_preset) && a.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
}), S2 = 1, w2 = [];
function yv(n, a = w2) {
  if (!n || typeof n != "object") return { config: n, migrated: !1 };
  let o = n;
  const l = typeof o.config_version == "number" ? o.config_version : 1;
  for (let s = l; Number.isInteger(s) && s >= 1 && s - 1 < a.length; s += 1)
    o = { ...a[s - 1](structuredClone(o)), config_version: s + 1 };
  return { config: o, migrated: o !== n };
}
function k2(n) {
  return vv.parse(yv(n).config);
}
function ud(n) {
  const a = vv.safeParse(yv(n).config);
  return a.success ? [] : a.error.issues.map((o) => `${o.path.join(".") || "config"}: ${o.message}`);
}
function gv() {
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
function wl(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function Wl(n) {
  const a = n?.attributes.calibration_points;
  return Array.isArray(a) ? a.flatMap((o) => {
    const l = o;
    return !wl(l.vacuum?.x) || !wl(l.vacuum?.y) || !wl(l.map?.x) || !wl(l.map?.y) ? [] : [l];
  }) : [];
}
function cd(n) {
  const a = n?.attributes.rooms;
  return a ? (Array.isArray(a) ? a.map((l, s) => [String(s), l]) : typeof a == "object" ? Object.entries(a) : []).flatMap(([l, s]) => {
    if (!s || typeof s != "object") return [];
    const d = s, f = d.number ?? d.room_id ?? d.segment_id ?? l, m = Number(f), h = Number(d.x0), v = Number(d.y0), g = Number(d.x1), b = Number(d.y1);
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
function Uo(n, a, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [l, s, d] = o, f = s.vacuum.x - l.vacuum.x, m = s.vacuum.y - l.vacuum.y, h = d.vacuum.x - l.vacuum.x, v = d.vacuum.y - l.vacuum.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - l.vacuum.x, S = a - l.vacuum.y, w = (b * v - S * h) / g, z = (f * S - m * b) / g;
  return {
    x: l.map.x + w * (s.map.x - l.map.x) + z * (d.map.x - l.map.x),
    y: l.map.y + w * (s.map.y - l.map.y) + z * (d.map.y - l.map.y)
  };
}
function kl(n, a, o) {
  if (o.length < 3) throw new Error("At least three calibration points are required");
  const [l, s, d] = o, f = s.map.x - l.map.x, m = s.map.y - l.map.y, h = d.map.x - l.map.x, v = d.map.y - l.map.y, g = f * v - m * h;
  if (g === 0) throw new Error("Calibration points are degenerate");
  const b = n - l.map.x, S = a - l.map.y, w = (b * v - S * h) / g, z = (f * S - m * b) / g;
  return {
    x: l.vacuum.x + w * (s.vacuum.x - l.vacuum.x) + z * (d.vacuum.x - l.vacuum.x),
    y: l.vacuum.y + w * (s.vacuum.y - l.vacuum.y) + z * (d.vacuum.y - l.vacuum.y)
  };
}
function Bo(n) {
  return {
    x1: Math.min(n.x1, n.x2),
    y1: Math.min(n.y1, n.y2),
    x2: Math.max(n.x1, n.x2),
    y2: Math.max(n.y1, n.y2)
  };
}
function Vc(n, a, o) {
  const l = Bo(n), s = l.x2 - l.x1, d = l.y2 - l.y1, f = Math.min(Math.max(0, l.x1), Math.max(0, a - s)), m = Math.min(Math.max(0, l.y1), Math.max(0, o - d));
  return { x1: f, y1: m, x2: f + s, y2: m + d };
}
function x2(n, a) {
  const o = Bo(n), l = [
    kl(o.x1, o.y1, a),
    kl(o.x2, o.y1, a),
    kl(o.x2, o.y2, a),
    kl(o.x1, o.y2, a)
  ], s = l.map(({ x: f }) => f), d = l.map(({ y: f }) => f);
  return {
    x1: Math.round(Math.min(...s)),
    y1: Math.round(Math.min(...d)),
    x2: Math.round(Math.max(...s)),
    y2: Math.round(Math.max(...d))
  };
}
function z2(n, a) {
  return `${[
    Uo(n.x0, n.y0, a),
    Uo(n.x1, n.y0, a),
    Uo(n.x1, n.y1, a),
    Uo(n.x0, n.y1, a)
  ].map((l, s) => `${s === 0 ? "M" : "L"} ${l.x} ${l.y}`).join(" ")} Z`;
}
function j2(n, a) {
  return Uo((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, a);
}
function T2(n) {
  return new Map(n.rooms.map((a) => [a.segment_id, a]));
}
function A2(n, a) {
  const o = typeof a == "string" ? [a] : a;
  return Object.keys(n.states).filter((l) => o.includes(l.split(".")[0])).sort();
}
function xl({
  hass: n,
  domain: a,
  value: o,
  optional: l,
  onChange: s
}) {
  const d = A2(n, a);
  return /* @__PURE__ */ p.jsxs("select", { value: o ?? "", onChange: (f) => s(f.target.value || void 0), children: [
    /* @__PURE__ */ p.jsx("option", { value: "", children: l ? "Not configured" : `Select ${typeof a == "string" ? a : a.join(" / ")}` }),
    d.map((f) => /* @__PURE__ */ p.jsx("option", { children: f }, f)),
    o && !d.includes(o) && /* @__PURE__ */ p.jsx("option", { value: o, children: o })
  ] });
}
function bv({
  areas: n,
  value: a,
  onChange: o
}) {
  const l = F.useRef(null), [s, d] = F.useState(() => !!customElements.get("ha-area-picker"));
  return F.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => d(!0));
  }, [s]), F.useEffect(() => {
    const f = l.current;
    if (!f) return;
    f.value = a, f.noAdd = !0;
    const m = (h) => o(h.detail.value || void 0);
    return f.addEventListener("value-changed", m), () => f.removeEventListener("value-changed", m);
  }, [s, o, a]), s ? /* @__PURE__ */ p.jsx("ha-area-picker", { ref: l, value: a ?? "", "no-add": !0 }) : /* @__PURE__ */ p.jsxs("select", { value: a ?? "", onChange: (f) => o(f.target.value || void 0), children: [
    /* @__PURE__ */ p.jsx("option", { value: "", children: "Unmapped" }),
    n.map((f) => /* @__PURE__ */ p.jsxs("option", { value: f.area_id, children: [
      f.name,
      " (",
      f.area_id,
      ")"
    ] }, f.area_id)),
    a && !n.some((f) => f.area_id === a) && /* @__PURE__ */ p.jsx("option", { value: a, children: a })
  ] });
}
const dd = "roborock", Sv = "roborock_custom_map";
function ql(n) {
  return n.split(".")[0];
}
function s_(n) {
  return new Set((n.identifiers ?? []).map(([, a]) => a));
}
function fd(n) {
  return n.entities ? Object.values(n.entities).filter((a) => a.platform === dd && !a.hidden && ql(a.entity_id) === "vacuum").map((a) => a.entity_id).sort() : Object.keys(n.states).filter((a) => ql(a) === "vacuum").sort();
}
function E2(n, a) {
  const o = n.entities?.[a]?.device_id, l = o ? n.devices?.[o] : void 0;
  if (!l) return { vacuum: a, companions: [] };
  const s = s_(l), d = Object.values(n.devices ?? {}).filter((h) => h.id !== l.id), f = d.find((h) => (h.identifiers ?? []).some(([, v]) => v.endsWith("_dock") && s.has(v.slice(0, -5)))) ?? d.find((h) => h.via_device_id === l.id && /\sDock$/.test(h.model ?? h.name ?? "")) ?? d.find((h) => l.name && h.name === `${l.name} Dock`) ?? d.find((h) => l.model && h.model === `${l.model} Dock`), m = d.filter((h) => h !== f && [...s_(h)].some((v) => s.has(v)));
  return { vacuum: a, robot: l, dock: f, companions: m };
}
function Jo(n, a) {
  const o = new Set(a.filter(Boolean));
  return Object.values(n.entities ?? {}).filter((l) => !l.hidden && l.device_id && o.has(l.device_id));
}
function Ll(n, a, o) {
  return a.find((l) => l.platform !== dd || ql(l.entity_id) !== o.domain ? !1 : o.translation_key ? l.translation_key === o.translation_key : n.states[l.entity_id]?.attributes.device_class === o.device_class)?.entity_id;
}
function M2(n, a) {
  return Jo(n, [a.robot?.id]).filter((o) => o.platform === dd && ql(o.entity_id) === "button" && !o.translation_key).map((o) => ({ entity_id: o.entity_id, name: o.name ?? String(n.states[o.entity_id]?.attributes.friendly_name ?? o.entity_id) }));
}
const jc = {
  home_assistant_version: "https://my.home-assistant.io/redirect/updates/",
  roborock_integration: "https://my.home-assistant.io/redirect/config_flow_start/?domain=roborock",
  custom_map: "https://my.home-assistant.io/redirect/hacs_repository/?owner=Python-roborock&repository=RoborockCustomMap&category=integration"
};
function C2(n) {
  if (!n) return;
  const [a, o] = n.split(".").map(Number);
  if (!(!Number.isFinite(a) || !Number.isFinite(o)))
    return a > Ai[0] || a === Ai[0] && o >= Ai[1];
}
function wv(n) {
  const o = !!n.entities ? Object.values(n.entities ?? {}).some((l) => l.platform === Sv) : Object.keys(n.states).some((l) => l.startsWith("image.") && l.endsWith("_custom"));
  return [
    { id: "home_assistant_version", ok: C2(n.config?.version) ?? !0, blocking: !0, fix_url: jc.home_assistant_version },
    { id: "roborock_integration", ok: fd(n).length > 0, blocking: !0, fix_url: jc.roborock_integration },
    { id: "custom_map", ok: o, blocking: !0, fix_url: jc.custom_map },
    // Needed for Home Assistant's room-to-area mapping and creating helpers; setup works without.
    { id: "administrator", ok: n.user?.is_admin !== !1, blocking: !1 }
  ];
}
function O2(n) {
  return n.every((a) => a.ok || !a.blocking);
}
function N2(n, a) {
  return !n.states[a.entity] || !a.floors.some((o) => o.map_entity && n.states[o.map_entity]);
}
const u_ = /* @__PURE__ */ new WeakMap();
function md(n, a) {
  const o = n.devices ?? n, l = u_.get(o) ?? /* @__PURE__ */ new Map();
  u_.set(o, l);
  const s = l.get(a);
  if (s) return s;
  const d = D2(n, a).catch(() => {
  });
  return l.set(a, d), d;
}
async function D2(n, a) {
  const o = n.entities?.[a]?.device_id, l = o ? n.devices?.[o] : void 0;
  if (!l || !n.callApi || n.user?.is_admin === !1) return;
  const s = new Set((l.identifiers ?? []).filter(([f]) => f === "roborock").map(([, f]) => f)), d = l.model_id ?? l.model ?? void 0;
  for (const f of l.config_entries ?? []) {
    const m = await n.callApi(
      "GET",
      `diagnostics/config_entry/${f}`
    ).catch(() => {
    }), h = Object.values(m?.data?.coordinators ?? {}), v = h.filter((S) => S.product?.model === d), g = h.find((S) => s.has(String(S.device?.duid))) ?? (v.length === 1 ? v[0] : void 0), b = g?.traits?.device_features;
    if (!(!g || !b))
      return {
        model: typeof g.product?.model == "string" ? g.product.model : d,
        protocol: typeof g.device?.pv == "string" ? g.device.pv : void 0,
        flags: E0(b)
      };
  }
}
const R2 = {
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
}, Z2 = [
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
], U2 = {
  dust_collection_mode: { domain: "select", translation_key: "dust_collection_mode" },
  dust_emptying: { domain: "switch", translation_key: "dust_emptying" },
  mop_washing: { domain: "switch", translation_key: "mop_washing" },
  mop_drying: { domain: "switch", translation_key: "mop_drying" }
}, $2 = /_custom$/i;
function at(n) {
  return n.normalize("NFD").replace(new RegExp("\\p{Diacritic}", "gu"), "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function Y2(n) {
  return at(n).replace(/ /g, "_") || "floor";
}
function B2(n, a) {
  const o = a.robot?.name_by_user ?? a.robot?.name ?? "";
  return Jo(n, a.companions.map((l) => l.id)).filter((l) => l.platform === Sv && l.entity_id.startsWith("image.")).map((l) => {
    const s = n.states[l.entity_id], d = String(s?.attributes.friendly_name ?? ""), f = o && d.startsWith(`${o} `) ? d.slice(o.length + 1) : d;
    return {
      entity_id: l.entity_id,
      map_name: (l.name ?? f ?? l.entity_id).replace($2, ""),
      rooms: cd(s),
      calibrated: Wl(s).length >= 3
    };
  }).sort((l, s) => l.entity_id.localeCompare(s.entity_id));
}
function H2(n) {
  const a = /^(\d+)_(\d+)$/.exec(n);
  return a ? { map_flag: Number(a[1]), segment_id: Number(a[2]) } : void 0;
}
function X2(n) {
  return (n?.last_seen_segments ?? []).flatMap((a) => {
    const o = H2(a.id);
    return o ? [{ ...o, name: a.name, group: a.group || void 0 }] : [];
  });
}
function q2(n, a) {
  const o = /* @__PURE__ */ new Map(), l = [...new Set(n.map((d) => d.map_flag))].sort((d, f) => d - f);
  for (const d of l) {
    const f = n.find((m) => m.map_flag === d && m.group)?.group;
    f && o.set(d, f);
  }
  if (![...o].every(([d, f]) => at(a[d] ?? "") === at(f))) return o;
  for (const d of l)
    !o.has(d) && a[d] && o.set(d, a[d]);
  return o;
}
function L2(n, a, o) {
  const l = a === void 0 ? [] : o.filter((s) => s.map_flag === a);
  return l.length > 0 ? { rooms: l.map((s) => ({ segment_id: s.segment_id, name: s.name })).sort((s, d) => s.segment_id - d.segment_id), source: "segments" } : { rooms: n.rooms.map((s) => ({ segment_id: s.segment_id, name: s.source_name })), source: "image" };
}
function V2(n, a, o, l) {
  if (o?.area_mapping) {
    if (a === void 0) return;
    const f = `${a}_${n.segment_id}`, m = Object.entries(o.area_mapping).find(([, h]) => h.includes(f))?.[0];
    return m ? { area_id: m, source: "mapping" } : void 0;
  }
  const s = at(n.name), d = l.find((f) => at(f.name) === s);
  return d ? { area_id: d.area_id, source: "name" } : void 0;
}
const G2 = ["en", "nl", "pl", "tr"];
async function pd(n, a) {
  if (n.callWS)
    try {
      return (await n.callWS({ type: "config/entity_registry/get", entity_id: a })).options?.vacuum;
    } catch {
      return;
    }
}
function Q2(n, a) {
  const o = Jo(n, [a.robot?.id, a.dock?.id]), l = {};
  for (const [s, d] of Object.entries(R2)) {
    const f = d?.map((m) => Ll(n, o, m)).find(Boolean);
    f && (l[s] = f);
  }
  return l;
}
function K2(n, a) {
  const o = Jo(n, [a.robot?.id, a.dock?.id]), l = [];
  for (const s of Z2) {
    if (l.some((m) => m.kind === s.kind)) continue;
    const d = Ll(n, o, { domain: "sensor", translation_key: s.sensor });
    if (!d) continue;
    const f = s.reset ? Ll(n, o, { domain: "button", translation_key: s.reset }) : void 0;
    l.push({ kind: s.kind, sensor: d, ...f ? { reset_button: f } : {} });
  }
  return l;
}
function J2(n, a) {
  const o = Jo(n, [a.dock?.id]);
  return Object.fromEntries(Object.entries(U2).flatMap(([l, s]) => {
    const d = Ll(n, o, s);
    return d ? [[l, d]] : [];
  }));
}
function P2(n, a) {
  return a.find((o) => o === n) ?? a.find((o) => at(o) === at(n));
}
function W2(n, a) {
  const o = at(n);
  return a.find((l) => {
    const s = at(l.name);
    return s.includes(o) && /vac.*mop/.test(s.replace(/ /g, ""));
  })?.entity_id;
}
function F2(n, a) {
  let o = n;
  for (let l = 2; a.has(o); l += 1) o = `${n}_${l}`;
  return a.add(o), o;
}
function hd(n, a, o, l) {
  const s = E2(n, a), d = [];
  s.robot || d.push({ code: "robot_device_missing" });
  const f = Q2(n, s), m = f.map_select ? (n.states[f.map_select]?.attributes.options ?? []).map(String) : [], h = B2(n, s);
  s.robot && h.length === 0 && d.push({ code: "custom_map_missing" }), o?.area_mapping || d.push({ code: "segment_mapping_unavailable" });
  const v = X2(o), g = q2(v, m), b = new Map([...g].map(([P, ie]) => [at(ie), P])), S = M2(n, s), w = Object.values(n.areas ?? {}), z = [
    ...m.flatMap((P) => h.filter((ie) => at(ie.map_name) === at(P))),
    ...h.filter((P) => !m.some((ie) => at(ie) === at(P.map_name)))
  ];
  for (const P of m)
    h.some((ie) => at(ie.map_name) === at(P)) || d.push({ code: "map_without_image", map_name: P });
  const R = /* @__PURE__ */ new Set(), O = [], X = z.map((P) => {
    P.calibrated || d.push({ code: "map_not_calibrated", entity_id: P.entity_id });
    const ie = F2(Y2(P.map_name), R), ce = b.get(at(P.map_name)), Ce = L2(P, ce, v);
    Ce.source === "image" && d.push({ code: "rooms_from_image", floor_id: ie });
    const te = Ce.rooms.map((L) => {
      const ee = V2(L, ce, o, w);
      ee || d.push({ code: "room_unmapped", floor_id: ie, segment_id: L.segment_id, name: L.name });
      const me = ee ? n.areas?.[ee.area_id]?.icon ?? void 0 : void 0;
      return {
        segment_id: L.segment_id,
        ...ee ? { area_id: ee.area_id } : {},
        name: L.name,
        ...me ? { icon: me } : {},
        include_in_floor_clean: !!ee
      };
    }), ae = W2(P.map_name, S), A = P2(P.map_name, m);
    return O.push({ floor_id: ie, map_entity: P.entity_id, map_name: P.map_name, ...ae ? { routine: ae } : {} }), {
      id: ie,
      name: P.map_name,
      map_entity: P.entity_id,
      ...A ? { map_select_option: A } : {},
      ...ae ? { vacuum_then_mop_routine: ae } : {},
      rooms: te
    };
  }), I = s.robot?.model_id ?? s.robot?.model ?? void 0, q = U_(I, l?.flags), Q = q.profile, K = (P) => q.sources[P] === "profile" || q.sources[P] === "device", J = $_({
    model: I,
    protocol: l?.protocol,
    haVersion: n.config?.version,
    hasCustomMap: s.robot ? h.length > 0 : void 0,
    hasDeviceFlags: !!l
  });
  s.robot && J.reasons.includes("unknown_model") && d.push({ code: "unknown_model", model: I }), J.verdict === "unsupported" && d.push({ code: "unsupported", reasons: J.reasons });
  const G = K2(n, s), oe = n.locale?.language?.split("-")[0];
  return {
    config: {
      type: "custom:roborock-vacuum-map-card",
      config_version: S2,
      entity: a,
      ...oe && G2.includes(oe) && oe !== "en" ? { language: oe } : {},
      entities: f,
      floors: X,
      default_preset: "vacuum_only",
      ...G.length > 0 ? { consumables: G } : {},
      ...q.mop_only ? { enable_mop_only: !0 } : {},
      ...q.mop_routes && K("mop_routes") ? { mop_routes: structuredClone(q.mop_routes) } : {},
      ...q.repeat && q.sources.repeat === "device" ? { cleaning_count_command: q.repeat } : {},
      ...q.smartplan !== void 0 && q.sources.smartplan === "device" ? { enable_smartplan: q.smartplan } : {}
    },
    report: {
      vacuum: a,
      model: I,
      profile: Q,
      compatibility: J,
      fact_sources: q.sources,
      devices: s,
      entities: f,
      floors: O,
      routines: S,
      native_dock: J2(n, s),
      area_source: o?.area_mapping ? "mapping" : "name",
      issues: d
    }
  };
}
const I2 = /^[A-Za-z_][\w./\- ]*$/, ex = /^(?:true|false|yes|no|on|off|null|~|y|n)$/i;
function zl(n) {
  if (n == null) return "null";
  if (typeof n == "number" || typeof n == "boolean") return String(n);
  const a = String(n);
  return I2.test(a) && !ex.test(a) && !a.endsWith(" ") && !a.includes(": ") ? a : JSON.stringify(a);
}
function Tc(n) {
  return Array.isArray(n) && n.length === 0 || typeof n == "object" && n !== null && !Array.isArray(n) && Object.keys(n).length === 0;
}
function Gc(n, a) {
  return Array.isArray(n) ? n.flatMap((o) => {
    if (typeof o == "object" && o !== null && !Tc(o)) {
      const [l, ...s] = Gc(o, `${a}  `);
      return [`${a}- ${l.trimStart()}`, ...s];
    }
    return [`${a}- ${Tc(o) ? Array.isArray(o) ? "[]" : "{}" : zl(o)}`];
  }) : typeof n == "object" && n !== null ? Object.entries(n).filter(([, o]) => o !== void 0).flatMap(([o, l]) => {
    const s = zl(o);
    return Tc(l) ? [`${a}${s}: ${Array.isArray(l) ? "[]" : "{}"}`] : typeof l == "object" && l !== null ? [`${a}${s}:`, ...Gc(l, Array.isArray(l) ? a : `${a}  `)] : [`${a}${s}: ${zl(l)}`];
  }) : [`${a}${zl(n)}`];
}
function kv(n) {
  return `${Gc(n, "").join(`
`)}
`;
}
const Qc = [
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
], tx = ["medium", "standard", "mild", "low", "intense", "high", "slight", "moderate", "extreme"];
function nx(n, a) {
  if (n.cleaning_type === "vacuum" || !n.mop_intensity || a.mopIntensities.includes(n.mop_intensity))
    return n;
  const o = tx.find((l) => a.mopIntensities.includes(l));
  return o ? { ...n, mop_intensity: o } : n;
}
function ax(n, a, o, l) {
  if (o.strategy === "smartplan" && !a.hasSmartPlan) return "SmartPlan";
  const s = a.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (o.cleaning_type === "vacuum" && !s)
    return "cleaning mode “vacuum”";
  if (o.cleaning_type === "mop" && !n.enable_mop_only)
    return "Mop only (set enable_mop_only: true)";
  if (o.cleaning_type === "mop" && !a.cleaningModes.includes("mop"))
    return "cleaning mode “mop”";
  if (o.cleaning_type === "vacuum_then_mop") {
    if (l?.vacuum_then_mop_routine || l?.assisted_carry && n.entities?.assisted_carry_start_script) return;
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
function Fl(n, a, o) {
  return [...(n.enable_mop_only ? Qc : Qc.filter((s) => s.cleaning_type !== "mop")).map((s) => nx(s, a)), ...n.presets ?? []].map((s) => {
    const d = ax(n, a, s, o);
    return {
      preset: s,
      available: !d,
      reason: d ? `Unsupported ${d}` : void 0
    };
  });
}
function Ho(n) {
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
const xv = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, zv = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, _d = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, ix = [
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
], ox = [
  { setting: "mop_wash_frequency", label: "mop wash frequency", icon: "mdi:timer-sand", needs: "mop_wash" },
  { setting: "wash_mode", label: "washing mode", icon: "mdi:washing-machine", needs: "mop_wash" },
  { setting: "wash_temperature", label: "wash temperature", icon: "mdi:thermometer-water", needs: "hot_water" },
  { setting: "auto_empty", label: "auto-empty", icon: "mdi:delete-restore", needs: "auto_empty" },
  { setting: "empty_mode", label: "empty mode", icon: "mdi:delete-variant", needs: "auto_empty" },
  { setting: "auto_dry", label: "auto-drying", icon: "mdi:fan", needs: "mop_dry" },
  { setting: "dry_duration", label: "drying duration", icon: "mdi:timer-outline", needs: "mop_dry" }
];
function Ac(n, a) {
  return `rvmc_${n.split(".")[1]}_${a}`;
}
function rx(n, a, o = {}) {
  const l = ox.filter(({ needs: s }) => o.dock?.[s] !== !1).map(({ setting: s, label: d, icon: f }) => {
    const m = _d[s], h = s !== "auto_empty" && s !== "auto_dry";
    return {
      key: m,
      domain: h ? "input_select" : "input_boolean",
      object_id: Ac(n, m),
      name: `${a} dock ${d}`,
      icon: f,
      ...h ? { options: [...xv[s]] } : {},
      start: zv[s]
    };
  });
  return o.assistedCarry && l.push(
    { key: "assisted_carry_stage", domain: "input_select", object_id: Ac(n, "assisted_carry_stage"), name: `${a} assisted carry stage`, icon: "mdi:stairs", options: [...ix], start: "idle" },
    { key: "assisted_carry_job", domain: "input_text", object_id: Ac(n, "assisted_carry_job"), name: `${a} assisted carry job`, icon: "mdi:clipboard-text-outline", max: 255 }
  ), l;
}
function lx(n, a, o) {
  const l = { create: [], existing: {}, mismatched: [] };
  for (const s of o) {
    const m = [a.entities?.[s.key], `${s.domain}.${s.object_id}`].filter((v) => !!v).find((v) => n.states[v]);
    if (!m) {
      l.create.push(s);
      continue;
    }
    l.existing[s.key] = m;
    const h = n.states[m].attributes.options;
    if (s.options && Array.isArray(h)) {
      const v = s.options.filter((g) => !h.map(String).includes(g));
      v.length > 0 && l.mismatched.push({ key: s.key, entity_id: m, missing: v });
    }
  }
  return l;
}
class sx extends Error {
}
async function ux(n, a) {
  if (!n.callWS || n.user?.is_admin === !1) throw new sx("Creating helpers needs a Home Assistant administrator");
  const o = {};
  for (const l of a.create) {
    const s = {
      icon: l.icon,
      ...l.options ? { options: l.options } : {},
      ...l.max ? { max: l.max } : {}
    }, d = await n.callWS({ type: `${l.domain}/create`, name: l.object_id, ...s });
    await n.callWS({ type: `${l.domain}/update`, [`${l.domain}_id`]: d.id, name: l.name, ...s });
    const f = `${l.domain}.${d.id}`;
    typeof l.start == "string" ? await n.callService("input_select", "select_option", { option: l.start }, { entity_id: f }) : l.start !== void 0 && await n.callService("input_boolean", l.start ? "turn_on" : "turn_off", {}, { entity_id: f }), o[l.key] = f;
  }
  return { ...a.existing, ...o };
}
function cx(n) {
  const a = [];
  for (const o of ["input_select", "input_boolean", "input_text"]) {
    const l = n.filter((s) => s.domain === o);
    if (l.length !== 0) {
      a.push(`${o}:`);
      for (const s of l)
        a.push(`  ${s.object_id}:`, `    name: ${s.name}`, `    icon: ${s.icon}`), s.options && a.push(`    options: [${s.options.join(", ")}]`), s.max && a.push(`    max: ${s.max}`);
    }
  }
  return `${a.join(`
`)}
`;
}
const Ec = { id: "evening", name: "Evening", icon: "mdi:weather-night", strategy: "custom", cleaning_type: "vacuum", fan_speed: "quiet", cleaning_count: 1 };
function dx({ hass: n, draft: a, result: o, deviceFlags: l, onDraft: s }) {
  const d = String(n.states[a.entity]?.attributes.friendly_name ?? a.name ?? "Roborock"), f = a.floors.some((O) => O.assisted_carry), m = F.useMemo(
    () => rx(a.entity, d, { dock: Y_(o.report.model, l?.flags), assistedCarry: f }),
    [a.entity, d, o.report.model, l, f]
  ), h = lx(n, a, m), [v, g] = F.useState(), [b, S] = F.useState(!1), w = n.user?.is_admin !== !1 && !!n.callWS, z = JSON.stringify(h.existing);
  F.useEffect(() => {
    const O = Object.entries(h.existing).filter(([X]) => !a.entities?.[X]);
    O.length > 0 && s({ ...a, entities: { ...a.entities, ...Object.fromEntries(O) } });
  }, [z]);
  const R = async () => {
    S(!0);
    try {
      const O = await ux(n, h);
      s({ ...a, entities: { ...a.entities, ...O } }), g(`Created ${h.create.length} helpers.`);
    } catch (O) {
      g(`Could not create helpers: ${O instanceof Error ? O.message : String(O)}`);
    } finally {
      S(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ p.jsx("p", { children: "Home Assistant can't read most dock settings back from the robot, so the card remembers the last accepted setting in helpers. They are optional: without them, the dock panel starts from Roborock's defaults." }),
    h.create.length === 0 ? /* @__PURE__ */ p.jsxs("p", { children: [
      "All ",
      m.length,
      " helpers are in place."
    ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsxs("p", { children: [
        h.create.length,
        " helpers are missing: ",
        h.create.map((O) => O.name).join(", "),
        "."
      ] }),
      w ? /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", disabled: b, onClick: R, children: [
        "Create ",
        h.create.length,
        " helpers"
      ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          "Ask an administrator to create them, or add this to ",
          /* @__PURE__ */ p.jsx("code", { children: "configuration.yaml" }),
          ":"
        ] }),
        /* @__PURE__ */ p.jsx("pre", { className: "yaml-preview", children: cx(h.create) })
      ] })
    ] }),
    h.mismatched.map((O) => /* @__PURE__ */ p.jsxs("p", { className: "wizard-warning", children: [
      O.entity_id,
      " is missing the options ",
      O.missing.join(", "),
      "."
    ] }, O.key)),
    v && /* @__PURE__ */ p.jsx("p", { role: "status", children: v }),
    Object.keys(o.report.native_dock).length > 0 && /* @__PURE__ */ p.jsx("p", { className: "editor-hint", children: "The dock's own Empty, Wash and Dry controls were found; the card's dock panel uses the same actions." }),
    f && /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
      "Assisted carry also needs three scripts. Create them from the blueprints:",
      " ",
      ["assisted_carry_prepare", "assisted_carry_start", "assisted_carry_finish"].map((O, X) => /* @__PURE__ */ p.jsxs("span", { children: [
        X > 0 && " · ",
        /* @__PURE__ */ p.jsx("a", { href: Z_(Bc[O].file), target: "_blank", rel: "noreferrer", children: Bc[O].label })
      ] }, O))
    ] })
  ] });
}
function fx({ hass: n, draft: a, onDraft: o }) {
  const l = Da(n, a), s = Fl(a, l).filter((m) => m.available), d = a.presets?.some((m) => m.id === Ec.id) ?? !1, f = l.fanSpeeds.includes("quiet");
  return /* @__PURE__ */ p.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ p.jsxs("label", { children: [
      "Mode selected when the job sheet opens",
      /* @__PURE__ */ p.jsx("select", { value: a.default_preset ?? "vacuum_only", onChange: (m) => o({ ...a, default_preset: m.target.value }), children: s.map(({ preset: m }) => /* @__PURE__ */ p.jsx("option", { value: m.id, children: m.name }, m.id)) })
    ] }),
    f && /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "checkbox",
          checked: d,
          onChange: (m) => o({
            ...a,
            presets: m.target.checked ? [...a.presets ?? [], Ec] : (a.presets ?? []).filter((h) => h.id !== Ec.id)
          })
        }
      ),
      "Add an Evening preset (quiet vacuum)"
    ] }),
    /* @__PURE__ */ p.jsx("p", { className: "editor-hint", children: "Presets can be turned into Home Assistant scripts from the editor, for automations and voice assistants." })
  ] });
}
function Ol(n, a, o) {
  n.onDraft({ ...n.draft, floors: n.draft.floors.map((l) => l.id === a ? { ...l, ...o } : l) });
}
function mx(n) {
  const { draft: a, result: o } = n, l = o.config.floors, s = (f, m) => {
    const h = a.floors.filter((g) => g.id !== f.id), v = m ? l.flatMap((g) => g.id === f.id ? [f] : h.filter((b) => b.id === g.id)) : h;
    n.onDraft({ ...a, floors: v });
  }, d = o.report.issues.flatMap((f) => f.code === "map_without_image" ? [f.map_name] : []);
  return /* @__PURE__ */ p.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ p.jsx("p", { children: "Each Roborock map becomes a floor. Untick maps you don't want on the card." }),
    l.map((f) => {
      const m = a.floors.find((v) => v.id === f.id), h = o.report.issues.some((v) => v.code === "map_not_calibrated" && v.entity_id === f.map_entity);
      return /* @__PURE__ */ p.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: !!m, onChange: (v) => s(f, v.target.checked) }),
          /* @__PURE__ */ p.jsx("strong", { children: f.map_select_option ?? f.name }),
          " · ",
          f.rooms.length,
          " rooms",
          h && /* @__PURE__ */ p.jsx("span", { className: "wizard-warning", children: " · not calibrated" })
        ] }),
        m && /* @__PURE__ */ p.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ p.jsx("input", { value: m.name, onChange: (v) => Ol(n, m.id, { name: v.target.value }) })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ p.jsxs("select", { value: m.vacuum_then_mop_routine ?? "", onChange: (v) => Ol(n, m.id, { vacuum_then_mop_routine: v.target.value || void 0 }), children: [
              /* @__PURE__ */ p.jsx("option", { value: "", children: "None" }),
              o.report.routines.map((v) => /* @__PURE__ */ p.jsx("option", { value: v.entity_id, children: v.name }, v.entity_id))
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: m.assisted_carry === !0, onChange: (v) => Ol(n, m.id, { assisted_carry: v.target.checked || void 0 }) }),
            "This floor has no dock (assisted carry)"
          ] })
        ] })
      ] }, f.id);
    }),
    d.length > 0 && /* @__PURE__ */ p.jsxs("p", { className: "wizard-warning", children: [
      "No Roborock Custom Map image for: ",
      d.join(", "),
      ". Reload Roborock Custom Map after switching to that map once."
    ] })
  ] });
}
function px(n) {
  const { hass: a, draft: o } = n, l = Object.values(a.areas ?? {}).sort((d, f) => d.name.localeCompare(f.name)), s = (d, f, m) => Ol(n, d.id, { rooms: d.rooms.map((h) => h.segment_id === f ? { ...h, ...m } : h) });
  return /* @__PURE__ */ p.jsxs("div", { className: "wizard-step", children: [
    /* @__PURE__ */ p.jsx("p", { children: "Rooms need a Home Assistant area to be cleaned. Areas come from your Roborock settings in Home Assistant where possible." }),
    o.floors.map((d) => /* @__PURE__ */ p.jsxs("article", { className: "editor-card", children: [
      /* @__PURE__ */ p.jsx("strong", { children: d.name }),
      /* @__PURE__ */ p.jsx("div", { className: "room-editor-list", children: d.rooms.map((f) => /* @__PURE__ */ p.jsxs("div", { className: `room-editor ${f.area_id ? "" : "unmapped"}`, children: [
        /* @__PURE__ */ p.jsxs("label", { children: [
          "Name",
          /* @__PURE__ */ p.jsx("input", { value: f.name, onChange: (m) => s(d, f.segment_id, { name: m.target.value }) })
        ] }),
        /* @__PURE__ */ p.jsxs("label", { children: [
          "Area",
          /* @__PURE__ */ p.jsx(bv, { areas: l, value: f.area_id, onChange: (m) => s(d, f.segment_id, { area_id: m, include_in_floor_clean: m ? f.include_in_floor_clean ?? !0 : !1 }) })
        ] }),
        /* @__PURE__ */ p.jsxs("label", { children: [
          "Icon",
          /* @__PURE__ */ p.jsx("input", { value: f.icon ?? "", placeholder: a.areas?.[f.area_id ?? ""]?.icon ?? "mdi:floor-plan", onChange: (m) => s(d, f.segment_id, { icon: m.target.value || void 0 }) })
        ] }),
        /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
          /* @__PURE__ */ p.jsx("input", { type: "checkbox", disabled: !f.area_id, checked: f.include_in_floor_clean !== !1 && !!f.area_id, onChange: (m) => s(d, f.segment_id, { include_in_floor_clean: m.target.checked }) }),
          "Include in Entire floor"
        ] })
      ] }, f.segment_id)) })
    ] }, d.id))
  ] });
}
const hx = {
  not_a_robot_vacuum: "This device is not a robot vacuum.",
  protocol_unsupported: "This model uses a Roborock protocol the card does not support.",
  home_assistant_too_old: "Home Assistant 2026.8 or newer is needed.",
  custom_map_missing: "No Roborock Custom Map images were found for this vacuum.",
  unknown_model: "This model is new to the card. Options are detected from Home Assistant; please send a model report."
}, c_ = (n) => n === void 0 ? "unknown" : n ? "yes" : "no";
function _x({ hass: n, draft: a, result: o, deviceFlags: l, onDraft: s, vacuums: d, vacuum: f, onVacuum: m }) {
  const { compatibility: h, model: v, profile: g } = o.report, b = Da(n, a), S = Y_(v, l?.flags), w = l ? Zl(l.flags) : void 0, z = b.mopRoutes?.vacuum_and_mop ?? b.mopModes.filter((R) => ["fast", "standard", "deep", "deep_plus"].includes(R));
  return /* @__PURE__ */ p.jsxs("div", { className: "wizard-step", children: [
    d.length > 1 && /* @__PURE__ */ p.jsxs("label", { children: [
      "Vacuum",
      /* @__PURE__ */ p.jsx("select", { value: f, onChange: (R) => m(R.target.value), children: d.map((R) => /* @__PURE__ */ p.jsx("option", { value: R, children: String(n.states[R]?.attributes.friendly_name ?? R) }, R)) })
    ] }),
    /* @__PURE__ */ p.jsxs("article", { className: `wizard-verdict verdict-${h.verdict}`, children: [
      /* @__PURE__ */ p.jsx("strong", { children: Hc(v) ?? v ?? a.entity }),
      /* @__PURE__ */ p.jsxs("span", { children: [
        h.verdict === "supported" ? "Supported" : h.verdict === "limited" ? "Supported with limits" : "Not supported",
        g && ` · ${g.status} profile`
      ] }),
      h.reasons.map((R) => /* @__PURE__ */ p.jsx("p", { children: hx[R] ?? R }, R))
    ] }),
    /* @__PURE__ */ p.jsxs("dl", { className: "wizard-facts", children: [
      /* @__PURE__ */ p.jsx("dt", { children: "AI SmartPlan" }),
      /* @__PURE__ */ p.jsx("dd", { children: c_(b.hasSmartPlan) }),
      /* @__PURE__ */ p.jsx("dt", { children: "Mop routes" }),
      /* @__PURE__ */ p.jsx("dd", { children: z.length > 0 ? z.join(", ") : "none" }),
      /* @__PURE__ */ p.jsx("dt", { children: "Two passes" }),
      /* @__PURE__ */ p.jsx("dd", { children: b.roomRepeatStrategy === "app_segment_clean" ? "per room segment" : "cleaning-count setting" }),
      /* @__PURE__ */ p.jsx("dt", { children: "Native Vac followed by Mop" }),
      /* @__PURE__ */ p.jsx("dd", { children: c_(w?.vac_then_mop) }),
      /* @__PURE__ */ p.jsx("dt", { children: "Dock" }),
      /* @__PURE__ */ p.jsx("dd", { children: S ? Object.entries(S).filter(([, R]) => R).map(([R]) => R.replace("_", " ")).join(", ") || "basic" : "unknown" }),
      /* @__PURE__ */ p.jsx("dt", { children: "Facts read from the robot" }),
      /* @__PURE__ */ p.jsx("dd", { children: l ? "yes" : "no (needs an administrator)" })
    ] }),
    /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
      /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: a.enable_mop_only === !0, onChange: (R) => s({ ...a, enable_mop_only: R.target.checked || void 0 }) }),
      "Show Mop only (only if your Roborock app offers it)"
    ] })
  ] });
}
const jl = ["check", "robot", "floors", "rooms", "dock", "presets", "review"], vx = {
  check: "Before you start",
  robot: "Your robot",
  floors: "Floors",
  rooms: "Rooms",
  dock: "Dock and helpers",
  presets: "Presets",
  review: "Review and save"
}, yx = {
  home_assistant_version: "Home Assistant 2026.8 or newer",
  roborock_integration: "The Roborock integration with at least one vacuum",
  custom_map: "Roborock Custom Map, for calibrated maps with rooms",
  administrator: "An administrator account, to read room areas and create helpers"
};
function gx(n, a) {
  if (a.entity !== n.entity) return n;
  const o = Object.fromEntries(["name", "language", "presets", "default_preset"].flatMap((l) => a[l] !== void 0 ? [[l, a[l]]] : []));
  return { ...n, ...o };
}
function bx({ hass: n, current: a, onFinish: o, onCancel: l }) {
  const s = F.useMemo(() => fd(n), [n]), d = F.useMemo(() => wv(n), [n]), [f, m] = F.useState("check"), [h, v] = F.useState(() => s.includes(a.entity) ? a.entity : s[0]), [g, b] = F.useState(), [S, w] = F.useState(), z = !!h && g?.vacuum !== h, R = g?.result, O = g?.deviceFlags;
  F.useEffect(() => {
    if (!h) return;
    let K = !0;
    return Promise.all([pd(n, h), md(n, h)]).then(([J, G]) => {
      if (!K) return;
      const oe = hd(n, h, J, G);
      b({ vacuum: h, result: oe, deviceFlags: G }), w(gx(oe.config, a));
    }), () => {
      K = !1;
    };
  }, [h]);
  const X = jl.indexOf(f), I = S ? ud(S) : [], q = f === "check" ? !O2(d) : !S || !R || z, Q = S && R ? { hass: n, draft: S, result: R, deviceFlags: O, onDraft: w } : void 0;
  return /* @__PURE__ */ p.jsxs("div", { className: "setup-wizard", children: [
    /* @__PURE__ */ p.jsxs("header", { className: "editor-heading", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsxs("small", { children: [
          "Setup assistant · step ",
          X + 1,
          " of ",
          jl.length
        ] }),
        /* @__PURE__ */ p.jsx("h2", { children: vx[f] })
      ] }),
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", onClick: l, children: "Close" })
    ] }),
    f === "check" && /* @__PURE__ */ p.jsx("ul", { className: "setup-checks", children: d.map((K) => /* @__PURE__ */ p.jsxs("li", { className: K.ok ? "ok" : K.blocking ? "missing" : "optional", children: [
      K.ok ? /* @__PURE__ */ p.jsx(C_, {}) : /* @__PURE__ */ p.jsx(O_, {}),
      /* @__PURE__ */ p.jsx("span", { children: yx[K.id] }),
      !K.ok && K.fix_url && /* @__PURE__ */ p.jsx("a", { href: K.fix_url, target: "_blank", rel: "noreferrer", children: "Fix" })
    ] }, K.id)) }),
    f !== "check" && z && /* @__PURE__ */ p.jsx("p", { role: "status", children: "Looking at your Roborock devices…" }),
    f === "robot" && Q && /* @__PURE__ */ p.jsx(_x, { ...Q, vacuums: s, vacuum: h, onVacuum: v }),
    f === "floors" && Q && /* @__PURE__ */ p.jsx(mx, { ...Q }),
    f === "rooms" && Q && /* @__PURE__ */ p.jsx(px, { ...Q }),
    f === "dock" && Q && /* @__PURE__ */ p.jsx(dx, { ...Q }),
    f === "presets" && Q && /* @__PURE__ */ p.jsx(fx, { ...Q }),
    f === "review" && S && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      I.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "editor-errors", role: "alert", children: I.map((K) => /* @__PURE__ */ p.jsx("div", { children: K }, K)) }),
      /* @__PURE__ */ p.jsx("p", { children: "This is the card configuration the assistant will save. You can change everything later in the editor." }),
      /* @__PURE__ */ p.jsx("pre", { className: "yaml-preview", children: kv(S) })
    ] }),
    /* @__PURE__ */ p.jsxs("footer", { className: "wizard-nav", children: [
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", disabled: X === 0, onClick: () => m(jl[X - 1]), children: "Back" }),
      f === "review" ? /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", disabled: !S || I.length > 0, onClick: () => S && o(S), children: "Save card" }) : /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", disabled: q, onClick: () => m(jl[X + 1]), children: "Next" })
    ] })
  ] });
}
function Po(n, a) {
  return !!(a.area_id && n.areas && !n.areas[a.area_id]);
}
function Nl(n, a) {
  return !!a.area_id && !Po(n, a);
}
function Sx(n, a) {
  const o = [], l = (f) => !!n.states[f];
  l(a.entity) || o.push({ code: "entity_missing", key: "entity", entity_id: a.entity });
  for (const [f, m] of Object.entries(a.entities ?? {}))
    typeof m == "string" && !l(m) && o.push({ code: "entity_missing", key: `entities.${f}`, entity_id: m });
  for (const f of a.consumables ?? [])
    l(f.sensor) || o.push({ code: "entity_missing", key: `consumables.${f.kind}`, entity_id: f.sensor });
  const s = a.entities?.map_select ? n.states[a.entities.map_select] : void 0, d = Array.isArray(s?.attributes.options) ? s.attributes.options.map(String) : void 0;
  for (const f of a.floors) {
    l(f.map_entity) ? Wl(n.states[f.map_entity]).length < 3 && o.push({ code: "map_uncalibrated", floor_id: f.id, entity_id: f.map_entity }) : o.push({ code: "entity_missing", key: `floors.${f.id}.map_entity`, entity_id: f.map_entity }), f.vacuum_then_mop_routine && !l(f.vacuum_then_mop_routine) && o.push({ code: "entity_missing", key: `floors.${f.id}.vacuum_then_mop_routine`, entity_id: f.vacuum_then_mop_routine }), f.map_select_option && d && !d.includes(f.map_select_option) && o.push({ code: "map_option_missing", floor_id: f.id, option: f.map_select_option });
    for (const m of f.rooms)
      m.area_id && Po(n, m) && o.push({ code: "area_missing", floor_id: f.id, segment_id: m.segment_id, room: m.name, area_id: m.area_id });
  }
  return o;
}
const wx = { vacuum: "vacuum", mop: "mop", vacuum_and_mop: "vac_and_mop", vacuum_then_mop: "vac_and_mop" }, kx = "00:01:30", xx = new Set(Qc.map((n) => n.id));
class Dl extends Error {
}
function Mc(n, a, o) {
  return { action: "vacuum.send_command", target: { entity_id: n }, data: { command: a, params: o } };
}
function Tl(n, a) {
  return { action: "select.select_option", target: { entity_id: n }, data: { option: a } };
}
function zx(n, a, o) {
  const l = Da(n, a), s = xx.has(o.id) ? a : { ...a, presets: [...(a.presets ?? []).filter((O) => O.id !== o.id), o] }, d = Fl(s, l).find((O) => O.preset.id === o.id);
  if (!d?.available) throw new Dl(d?.reason ?? `Preset ${o.id} is not available`);
  const f = o.cleaning_type ?? "vacuum_and_mop", m = a.entity, h = a.entities?.map_select, v = f === "vacuum_then_mop", g = l.roomRepeatStrategy === "app_segment_clean", b = o.strategy === "smartplan" || v ? 1 : o.cleaning_count ?? 1, S = Object.fromEntries(a.floors.map((O) => {
    const X = O.rooms.filter((I) => I.include_in_floor_clean !== !1 && Nl(n, I));
    return [O.id, {
      option: O.map_select_option ?? "",
      routine: O.vacuum_then_mop_routine ?? "",
      areas: [...new Set(X.map((I) => I.area_id))],
      whole_map: X.length === O.rooms.length,
      segments: Object.fromEntries(X.map((I) => [I.area_id, I.segment_id]))
    }];
  }));
  if (v && !a.floors.some((O) => O.vacuum_then_mop_routine))
    throw new Dl("Vac followed by Mop presets need a floor with a native Roborock routine");
  const w = [];
  if (h && w.push({
    alias: "Select the floor map",
    if: [`{{ info.option != '' and not is_state('${h}', info.option) }}`],
    then: [
      { action: "select.select_option", target: { entity_id: h }, data: { option: "{{ info.option }}" } },
      { wait_template: `{{ is_state('${h}', info.option) }}`, timeout: kx, continue_on_timeout: !0 },
      { if: ["{{ not wait.completed }}"], then: [{ stop: "The floor map did not become active.", error: !0 }] }
    ]
  }), v)
    return w.push(
      { if: ["{{ info.routine == '' }}"], then: [{ stop: "This floor has no Vac followed by Mop routine.", error: !0 }] },
      { alias: "Run the saved Roborock routine", action: "button.press", target: { entity_id: "{{ info.routine }}" } }
    ), R();
  if (o.strategy === "smartplan")
    w.push({ alias: "AI SmartPlan", ...Mc(m, "set_clean_motor_mode", [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }]) });
  else {
    const O = a.entities?.cleaning_mode;
    if (!O) throw new Dl("Exporting presets needs the Cleaning mode entity");
    w.push({ alias: "Cleaning mode", ...Tl(O, wx[f]) });
    const X = a.entities?.mop_mode;
    f !== "vacuum" && o.mop_mode && X && w.push(
      { alias: "Leave SmartPlan routes", if: [{ condition: "state", entity_id: X, state: "smart_mode" }], then: [Tl(X, "custom")] },
      { alias: "Mop route", ...Tl(X, o.mop_mode) }
    ), f !== "vacuum" && o.mop_intensity && a.entities?.mop_intensity && w.push({ alias: "Water flow", ...Tl(a.entities.mop_intensity, o.mop_intensity) }), o.fan_speed && f !== "mop" && w.push({ alias: "Suction", action: "vacuum.set_fan_speed", target: { entity_id: m }, data: { fan_speed: o.fan_speed } });
  }
  g || w.push({ alias: "Cleaning count", ...Mc(m, "set_clean_repeat_times", { repeat: b }) });
  const z = [
    { conditions: ["{{ whole_floor and info.whole_map }}"], sequence: [{ action: "vacuum.start", target: { entity_id: m } }] },
    { conditions: ["{{ true }}"], sequence: [{ action: "vacuum.clean_area", target: { entity_id: m }, data: { cleaning_area_id: "{{ target_areas }}" } }] }
  ];
  return g && b === 2 && z.unshift({
    conditions: ["{{ true }}"],
    sequence: [Mc(m, "app_segment_clean", [{ segments: '{{ target_areas | map("extract", info.segments) | list }}', repeat: 2 }])]
  }), w.push({ alias: "Start cleaning", choose: z }), R();
  function R() {
    return {
      id: `rvmc_${m.split(".")[1]}_${o.id}`,
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
            selector: { select: { options: a.floors.map((O) => ({ value: O.id, label: O.name })) } }
          },
          ...v ? {} : { areas: { name: "Areas", description: "Leave empty to clean the whole floor.", required: !1, selector: { area: { multiple: !0 } } } }
        },
        variables: {
          floors: S,
          info: "{{ floors[floor] }}",
          ...v ? {} : { whole_floor: "{{ not areas }}", target_areas: "{{ areas if areas else info.areas }}" }
        },
        sequence: w
      }
    };
  }
}
async function jx(n, a) {
  if (!n.callApi || n.user?.is_admin === !1) throw new Dl("Creating scripts needs a Home Assistant administrator");
  return await n.callApi("POST", `config/script/config/${a.id}`, a.config), `script.${a.id}`;
}
function Tx({ hass: n, config: a }) {
  const [o, l] = F.useState({}), [s, d] = F.useState(), f = n.user?.is_admin !== !1 && !!n.callApi, m = Fl(a, Da(n, a)).filter((v) => v.available), h = async (v) => {
    try {
      const g = zx(n, a, v);
      if (n.states[`script.${g.id}`] && !window.confirm(`script.${g.id} already exists. Replace it?`)) return;
      if (f) {
        const b = await jx(n, g);
        l({ ...o, [v.id]: `Created ${b}` });
      } else
        d({ id: v.id, text: kv({ [g.id]: g.config }) });
    } catch (g) {
      l({ ...o, [v.id]: g instanceof Error ? g.message : String(g) });
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "preset-scripts", children: [
    /* @__PURE__ */ p.jsx("h4", { children: "Presets as scripts" }),
    /* @__PURE__ */ p.jsx("p", { className: "editor-hint", children: "A script runs a preset on a floor or chosen areas, so automations, schedules and voice assistants can use it. Scripts are snapshots: create them again after changing a preset." }),
    m.map(({ preset: v }) => /* @__PURE__ */ p.jsxs("div", { className: "preset-script-row", children: [
      /* @__PURE__ */ p.jsx("span", { children: v.name }),
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", onClick: () => h(v), children: f ? "Create script" : "Show YAML" }),
      o[v.id] && /* @__PURE__ */ p.jsx("small", { role: "status", children: o[v.id] }),
      s?.id === v.id && /* @__PURE__ */ p.jsx("pre", { className: "yaml-preview", children: s.text })
    ] }, v.id))
  ] });
}
const Ax = {
  enable_mop_only: "mop_only",
  mop_routes: "mop_routes",
  cleaning_count_command: "repeat",
  enable_smartplan: "smartplan"
};
function Ex(n, a) {
  return a.find((o) => o.map_entity === n.map_entity) ?? a.find((o) => n.map_select_option && at(o.map_select_option ?? "") === at(n.map_select_option)) ?? a.find((o) => at(o.name) === at(n.name));
}
function Mx(n, a, o) {
  const l = [], s = (f) => !!(f && n.states[f]);
  for (const [f, m] of Object.entries(o.config.entities ?? {})) {
    const h = a.entities?.[f];
    m && h !== m && !s(h) && l.push({ id: `entity:${f}`, kind: "entity", key: f, from: h, to: m });
  }
  const d = /* @__PURE__ */ new Set();
  for (const f of a.floors) {
    const m = Ex(f, o.config.floors);
    if (!m) continue;
    d.add(m), m.map_entity !== f.map_entity && !s(f.map_entity) && l.push({ id: `floor_map:${f.id}`, kind: "floor_map", floor_id: f.id, from: f.map_entity, to: m.map_entity });
    const h = a.entities?.map_select ? n.states[a.entities.map_select]?.attributes.options : void 0, v = f.map_select_option && Array.isArray(h) && h.includes(f.map_select_option);
    m.map_select_option && m.map_select_option !== f.map_select_option && !v && l.push({ id: `floor_option:${f.id}`, kind: "floor_option", floor_id: f.id, from: f.map_select_option, to: m.map_select_option });
    for (const g of m.rooms) {
      const b = f.rooms.find((S) => S.segment_id === g.segment_id);
      b ? g.area_id && g.area_id !== b.area_id && (!b.area_id || Po(n, b)) && l.push({ id: `room_area:${f.id}:${g.segment_id}`, kind: "room_area", floor_id: f.id, segment_id: g.segment_id, room: b.name, from: b.area_id, to: g.area_id }) : l.push({ id: `room_added:${f.id}:${g.segment_id}`, kind: "room_added", floor_id: f.id, room: g });
    }
  }
  for (const f of o.config.floors)
    d.has(f) || l.push({ id: `floor_added:${f.id}`, kind: "floor_added", floor: f });
  !a.consumables?.length && o.config.consumables?.length && l.push({ id: "consumables", kind: "consumables", to: o.config.consumables });
  for (const [f, m] of Object.entries(Ax)) {
    const h = o.config[f];
    h !== void 0 && a[f] === void 0 && o.report.fact_sources[m] === "device" && l.push({ id: `fact:${f}`, kind: "model_fact", key: f, to: h });
  }
  return o.config.config_version && a.config_version === void 0 && l.push({ id: "config_version", kind: "config_version", to: o.config.config_version }), l;
}
function Cx(n, a) {
  const o = structuredClone(n), l = (s) => o.floors.find((d) => d.id === s);
  for (const s of a)
    switch (s.kind) {
      case "entity":
        o.entities = { ...o.entities, [s.key]: s.to };
        break;
      case "floor_added":
        o.floors.push(structuredClone(s.floor));
        break;
      case "floor_map": {
        const d = l(s.floor_id);
        d && (d.map_entity = s.to);
        break;
      }
      case "floor_option": {
        const d = l(s.floor_id);
        d && (d.map_select_option = s.to);
        break;
      }
      case "room_area": {
        const d = l(s.floor_id)?.rooms.find((f) => f.segment_id === s.segment_id);
        d && (d.area_id = s.to);
        break;
      }
      case "room_added": {
        const d = l(s.floor_id);
        d && (d.rooms = [...d.rooms, structuredClone(s.room)].sort((f, m) => f.segment_id - m.segment_id));
        break;
      }
      case "consumables":
        o.consumables = structuredClone(s.to);
        break;
      case "model_fact":
        o[s.key] = structuredClone(s.to);
        break;
      case "config_version":
        o.config_version = s.to;
        break;
    }
  return o;
}
function Ox(n) {
  switch (n.kind) {
    case "entity":
      return n.from ? `Replace missing ${n.key} ${n.from} with ${n.to}` : `Add ${n.key}: ${n.to}`;
    case "floor_added":
      return `Add floor ${n.floor.name} (${n.floor.rooms.length} rooms)`;
    case "floor_map":
      return `Floor ${n.floor_id}: map image ${n.from} → ${n.to}`;
    case "floor_option":
      return `Floor ${n.floor_id}: map ${n.from ?? "(none)"} → ${n.to}`;
    case "room_area":
      return `Room ${n.room}: area ${n.from ?? "(none)"} → ${n.to}`;
    case "room_added":
      return `Add room ${n.room.name} to floor ${n.floor_id}${n.room.area_id ? "" : " (no area yet)"}`;
    case "consumables":
      return `Show ${n.to.length} parts in the maintenance view`;
    case "model_fact":
      return `Set ${n.key} from the robot's own feature flags`;
    case "config_version":
      return `Record config format version ${n.to}`;
  }
}
function Nx({ hass: n, config: a, onApply: o, onClose: l }) {
  const [s, d] = F.useState(), [f, m] = F.useState(/* @__PURE__ */ new Set()), [h, v] = F.useState(!1), g = async () => {
    v(!0);
    const [b, S] = await Promise.all([pd(n, a.entity), md(n, a.entity)]), w = Mx(n, a, hd(n, a.entity, b, S));
    d(w), m(new Set(w.map((z) => z.id))), v(!1);
  };
  return /* @__PURE__ */ p.jsxs("section", { className: "editor-card redetect-panel", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "editor-heading", children: [
      /* @__PURE__ */ p.jsx("strong", { children: "Re-detect" }),
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", onClick: l, children: "Close" })
    ] }),
    !s && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("p", { children: "Looks for new entities, maps, rooms and areas, and for values that no longer exist. Nothing changes until you apply it." }),
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "primary", disabled: h, onClick: g, children: h ? "Checking…" : "Check now" })
    ] }),
    s?.length === 0 && /* @__PURE__ */ p.jsx("p", { role: "status", children: "Everything is up to date." }),
    s && s.length > 0 && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("ul", { className: "redetect-changes", children: s.map((b) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            type: "checkbox",
            checked: f.has(b.id),
            onChange: (S) => {
              const w = new Set(f);
              S.target.checked ? w.add(b.id) : w.delete(b.id), m(w);
            }
          }
        ),
        Ox(b)
      ] }) }, b.id)) }),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          disabled: f.size === 0,
          onClick: () => o(Cx(a, s.filter((b) => f.has(b.id)))),
          children: [
            "Apply ",
            f.size,
            " changes"
          ]
        }
      )
    ] })
  ] });
}
const Dx = "https://github.com/domidyon/roborock-vacuum-map-card/issues/new?template=model_report.yml", Rx = { tested: "tested", community: "community-tested", experimental: "experimental, please report results" };
function Zx({ hass: n, config: a }) {
  const { profile: o, model: l } = Da(n, a);
  if (o) return /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
    "Model profile: ",
    o.label,
    " (",
    Rx[o.status],
    ")."
  ] });
  if (!l) return null;
  const { verdict: s, name: d, protocol: f } = $_({ model: l });
  return s === "unsupported" ? /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
    d ?? l,
    " is not supported by this card",
    f ? ` (${f} protocol)` : "",
    "."
  ] }) : Qo(l)?.features ? /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
    "Recognised model: ",
    d ?? l,
    " (feature data from python-roborock)."
  ] }) : /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
    "No profile for ",
    d ?? l,
    " yet; options are detected from Home Assistant. ",
    /* @__PURE__ */ p.jsx("a", { href: Dx, target: "_blank", rel: "noreferrer", children: "Report your model" })
  ] });
}
function Al(n, a, o) {
  const l = [...n], [s] = l.splice(a, 1);
  return l.splice(o, 0, s), l;
}
function Ux({ hass: n, config: a, onChange: o }) {
  const [l, s] = F.useState(() => N2(n, a)), [d, f] = F.useState(!1), m = ud(a), h = (b, S) => {
    const w = [...a.floors];
    w[b] = S, o({ ...a, floors: w });
  }, v = a.entities?.map_select ? n.states[a.entities.map_select]?.attributes.options ?? [] : [], g = Object.values(n.areas ?? {}).sort((b, S) => b.name.localeCompare(S.name));
  return l ? /* @__PURE__ */ p.jsx("div", { className: "editor", children: /* @__PURE__ */ p.jsx(bx, { hass: n, current: a, onCancel: () => s(!1), onFinish: (b) => {
    o(b), s(!1);
  } }) }) : /* @__PURE__ */ p.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ p.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ p.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    /* @__PURE__ */ p.jsxs("div", { className: "editor-toolbar", children: [
      /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => s(!0), children: [
        /* @__PURE__ */ p.jsx(h0, {}),
        " Setup assistant"
      ] }),
      /* @__PURE__ */ p.jsxs("button", { type: "button", disabled: !n.states[a.entity], onClick: () => f(!0), children: [
        /* @__PURE__ */ p.jsx(t0, {}),
        " Re-detect"
      ] })
    ] }),
    d && /* @__PURE__ */ p.jsx(Nx, { hass: n, config: a, onApply: (b) => {
      o(b), f(!1);
    }, onClose: () => f(!1) }),
    m.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "editor-errors", role: "alert", children: m.map((b) => /* @__PURE__ */ p.jsx("div", { children: b }, b)) }),
    /* @__PURE__ */ p.jsxs("section", { children: [
      /* @__PURE__ */ p.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ p.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ p.jsx("input", { value: a.name ?? "", placeholder: "Use vacuum name", onChange: (b) => o({ ...a, name: b.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ p.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ p.jsxs("select", { value: a.language ?? "en", onChange: (b) => o({ ...a, language: b.target.value }), children: [
          /* @__PURE__ */ p.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ p.jsx("option", { value: "nl", children: "Nederlands" }),
          /* @__PURE__ */ p.jsx("option", { value: "pl", children: "Polski" }),
          /* @__PURE__ */ p.jsx("option", { value: "tr", children: "Türkçe" })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ p.jsx(xl, { hass: n, domain: "vacuum", value: a.entity, onChange: (b) => b && o({ ...a, entity: b }) })
      ] }),
      /* @__PURE__ */ p.jsx(Zx, { hass: n, config: a })
    ] }),
    /* @__PURE__ */ p.jsxs("section", { children: [
      /* @__PURE__ */ p.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["vacuum_then_mop_script", "script", "Legacy Vac followed by Mop script"],
        ["mop_mode", "select", "Mop mode"],
        ["mop_intensity", "select", "Mop intensity"],
        ["dock_mop_drying", ["switch", "binary_sensor"], "Dock mop drying"],
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
        ["last_clean_end", "sensor", "Last clean end"],
        ["dock_clean_water_empty", "binary_sensor", "Dock clean water empty"],
        ["dock_dirty_water_full", "binary_sensor", "Dock dirty water full"],
        ["dock_error", "sensor", "Dock error"],
        ["dock_clean_fluid_empty", "binary_sensor", "Dock cleaning fluid empty"],
        ["dock_detergent_empty", "binary_sensor", "Dock detergent empty"]
      ].map(([b, S, w]) => /* @__PURE__ */ p.jsxs("label", { children: [
        w,
        /* @__PURE__ */ p.jsx(xl, { hass: n, domain: S, optional: !0, value: a.entities?.[b], onChange: (z) => o({ ...a, entities: { ...a.entities, [b]: z } }) })
      ] }, b)),
      /* @__PURE__ */ p.jsxs("p", { className: "editor-hint", children: [
        "Create the Vac followed by Mop and assisted-carry scripts from blueprints:",
        " ",
        Object.values(Bc).map((b, S) => /* @__PURE__ */ p.jsxs("span", { children: [
          S > 0 && " · ",
          /* @__PURE__ */ p.jsx("a", { href: Z_(b.file), target: "_blank", rel: "noreferrer", children: b.label })
        ] }, b.file))
      ] }),
      a.vacuum_mode_fallback && /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: a.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (b) => o({ ...a, vacuum_mode_fallback: b.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use deprecated Vacuum-mode fallback (Home Assistant 2026.7 and older; untick to remove)"
      ] }),
      /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: a.enable_mop_only === !0, onChange: (b) => o({ ...a, enable_mop_only: b.target.checked || void 0 }) }),
        " Enable Mop only (only for models whose Roborock app offers it, e.g. Saros 10R)"
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("section", { children: [
      /* @__PURE__ */ p.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ p.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => o({ ...a, floors: [...a.floors, { id: `floor_${a.floors.length + 1}`, name: `Floor ${a.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ p.jsx(Dh, {}),
          " Add floor"
        ] })
      ] }),
      a.floors.map((b, S) => /* @__PURE__ */ p.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ p.jsx("strong", { children: b.name || `Floor ${S + 1}` }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: S === 0, onClick: () => o({ ...a, floors: Al(a.floors, S, S - 1) }), children: /* @__PURE__ */ p.jsx(Ch, {}) }),
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: S === a.floors.length - 1, onClick: () => o({ ...a, floors: Al(a.floors, S, S + 1) }), children: /* @__PURE__ */ p.jsx(Mh, {}) }),
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: a.floors.length === 1, onClick: () => o({ ...a, floors: a.floors.filter((w, z) => z !== S) }), children: /* @__PURE__ */ p.jsx(Rl, {}) })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "editor-grid", children: [
          /* @__PURE__ */ p.jsxs("label", { children: [
            "ID",
            /* @__PURE__ */ p.jsx("input", { value: b.id, onChange: (w) => h(S, { ...b, id: w.target.value }) })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ p.jsx("input", { value: b.name, onChange: (w) => h(S, { ...b, name: w.target.value }) })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Custom map",
            /* @__PURE__ */ p.jsx(xl, { hass: n, domain: "image", value: b.map_entity, onChange: (w) => {
              if (!w) return;
              const z = cd(n.states[w]), R = new Map(b.rooms.map((X) => [X.segment_id, X])), O = z.map((X) => ({
                ...R.get(X.segment_id),
                segment_id: X.segment_id,
                name: R.get(X.segment_id)?.name ?? X.source_name,
                include_in_floor_clean: R.get(X.segment_id)?.include_in_floor_clean ?? !0
              }));
              h(S, { ...b, map_entity: w, rooms: O });
            } })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ p.jsxs("select", { value: b.map_select_option ?? "", onChange: (w) => h(S, { ...b, map_select_option: w.target.value || void 0 }), children: [
              /* @__PURE__ */ p.jsx("option", { value: "", children: "Not configured" }),
              v.map((w) => /* @__PURE__ */ p.jsx("option", { children: w }, w))
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ p.jsx(xl, { hass: n, domain: "button", optional: !0, value: b.vacuum_then_mop_routine, onChange: (w) => h(S, { ...b, vacuum_then_mop_routine: w }) })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: b.assisted_carry === !0, onChange: (w) => h(S, { ...b, assisted_carry: w.target.checked }) }),
            " Guide this floor without its dock"
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("h4", { children: "Discovered rooms" }),
        b.rooms.length === 0 ? /* @__PURE__ */ p.jsx("p", { children: "Select a calibrated custom-map image to discover rooms." }) : /* @__PURE__ */ p.jsx("div", { className: "room-editor-list", children: b.rooms.map((w, z) => /* @__PURE__ */ p.jsxs("div", { className: "room-editor", children: [
          /* @__PURE__ */ p.jsxs("strong", { children: [
            "Segment ",
            w.segment_id
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ p.jsx("input", { value: w.name, onChange: (R) => {
              const O = [...b.rooms];
              O[z] = { ...w, name: R.target.value }, h(S, { ...b, rooms: O });
            } })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ p.jsx(bv, { areas: g, value: w.area_id, onChange: (R) => {
              const O = [...b.rooms];
              O[z] = { ...w, area_id: R }, h(S, { ...b, rooms: O });
            } })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ p.jsx("input", { value: w.icon ?? "", placeholder: "mdi:floor-plan", onChange: (R) => {
              const O = [...b.rooms];
              O[z] = { ...w, icon: R.target.value || void 0 }, h(S, { ...b, rooms: O });
            } })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: w.include_in_floor_clean !== !1, onChange: (R) => {
              const O = [...b.rooms];
              O[z] = { ...w, include_in_floor_clean: R.target.checked }, h(S, { ...b, rooms: O });
            } }),
            " Include in Entire floor"
          ] })
        ] }, w.segment_id)) })
      ] }, `${b.id}-${S}`))
    ] }),
    /* @__PURE__ */ p.jsxs("section", { children: [
      /* @__PURE__ */ p.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ p.jsx("h3", { children: "Additional presets" }),
        /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => {
          const b = { id: `preset_${(a.presets?.length ?? 0) + 1}`, name: "New preset", icon: "mdi:tune", strategy: "custom", cleaning_type: "vacuum_and_mop", cleaning_count: 1 };
          o({ ...a, presets: [...a.presets ?? [], b] });
        }, children: [
          /* @__PURE__ */ p.jsx(Dh, {}),
          " Add preset"
        ] })
      ] }),
      (a.presets ?? []).map((b, S) => /* @__PURE__ */ p.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ p.jsx("strong", { children: b.name }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: S === 0, onClick: () => o({ ...a, presets: Al(a.presets ?? [], S, S - 1) }), children: /* @__PURE__ */ p.jsx(Ch, {}) }),
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: S === (a.presets?.length ?? 0) - 1, onClick: () => o({ ...a, presets: Al(a.presets ?? [], S, S + 1) }), children: /* @__PURE__ */ p.jsx(Mh, {}) }),
            /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => o({ ...a, presets: (a.presets ?? []).filter((w, z) => z !== S) }), children: /* @__PURE__ */ p.jsx(Rl, {}) })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((w) => /* @__PURE__ */ p.jsxs("label", { children: [
            w.replaceAll("_", " "),
            /* @__PURE__ */ p.jsx("input", { value: b[w] ?? "", onChange: (z) => {
              const R = [...a.presets ?? []];
              R[S] = { ...b, [w]: z.target.value || void 0 }, o({ ...a, presets: R });
            } })
          ] }, w)),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ p.jsxs("select", { value: b.strategy, onChange: (w) => {
              const z = [...a.presets ?? []];
              z[S] = { ...b, strategy: w.target.value }, o({ ...a, presets: z });
            }, children: [
              /* @__PURE__ */ p.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ p.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ p.jsxs("select", { value: b.cleaning_type ?? "vacuum_and_mop", onChange: (w) => {
              const z = [...a.presets ?? []];
              z[S] = { ...b, cleaning_type: w.target.value }, o({ ...a, presets: z });
            }, children: [
              /* @__PURE__ */ p.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ p.jsx("option", { value: "mop", children: "Mop only" }),
              /* @__PURE__ */ p.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ p.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ p.jsxs("select", { value: b.cleaning_count ?? 1, onChange: (w) => {
              const z = [...a.presets ?? []];
              z[S] = { ...b, cleaning_count: Number(w.target.value) }, o({ ...a, presets: z });
            }, children: [
              /* @__PURE__ */ p.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ p.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${b.id}-${S}`)),
      /* @__PURE__ */ p.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ p.jsxs("select", { value: a.default_preset ?? "vacuum_only", onChange: (b) => o({ ...a, default_preset: b.target.value }), children: [
          /* @__PURE__ */ p.jsx("option", { value: "smartplan", children: "SmartPlan" }),
          /* @__PURE__ */ p.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" }),
          /* @__PURE__ */ p.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
          /* @__PURE__ */ p.jsx("option", { value: "vacuum_only", children: "Vacuum only" }),
          (a.presets ?? []).map((b) => /* @__PURE__ */ p.jsx("option", { value: b.id, children: b.name }, b.id))
        ] })
      ] }),
      /* @__PURE__ */ p.jsx(Tx, { hass: n, config: a })
    ] })
  ] });
}
const $x = {
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
}, Yx = {
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
}, Bx = {
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
}, Hx = {
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
function El(n, a, o) {
  return D(n, a).replace(/\{(\w+)\}/g, (l, s) => o[s] ?? l);
}
function D(n, a) {
  return n === "nl" ? Yx[a] : n === "pl" ? Hx[a] : n === "tr" ? Bx[a] : $x[a];
}
const d_ = {
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
function jv(n, a) {
  return d_[n ?? "en"]?.[a] ?? d_.en?.[a] ?? a.replaceAll("_", " ").replace(/\b\w/g, (o) => o.toUpperCase());
}
function Xx({ hass: n, language: a, errors: o = [], missingVacuum: l }) {
  const s = wv(n);
  return /* @__PURE__ */ p.jsx("ha-card", { className: "roborock-card setup-state", children: /* @__PURE__ */ p.jsxs("div", { className: "setup-state-body", children: [
    /* @__PURE__ */ p.jsxs("h1", { children: [
      /* @__PURE__ */ p.jsx(R_, {}),
      D(a, "setupTitle")
    ] }),
    /* @__PURE__ */ p.jsx("p", { children: D(a, "setupIntro") }),
    /* @__PURE__ */ p.jsx("ul", { className: "setup-checks", children: s.map((d) => /* @__PURE__ */ p.jsxs("li", { className: d.ok ? "ok" : d.blocking ? "missing" : "optional", children: [
      d.ok ? /* @__PURE__ */ p.jsx(C_, { "aria-label": "OK" }) : /* @__PURE__ */ p.jsx(O_, { "aria-label": "Missing" }),
      /* @__PURE__ */ p.jsx("span", { children: D(a, `prereq_${d.id}`) }),
      !d.ok && d.fix_url && /* @__PURE__ */ p.jsx("a", { href: d.fix_url, target: "_blank", rel: "noreferrer", children: D(a, "setupFix") })
    ] }, d.id)) }),
    l && /* @__PURE__ */ p.jsxs("p", { className: "setup-problem", children: [
      D(a, "setupVacuumMissing"),
      " ",
      /* @__PURE__ */ p.jsx("code", { children: l })
    ] }),
    o.length > 0 && /* @__PURE__ */ p.jsxs("div", { className: "setup-problem", children: [
      /* @__PURE__ */ p.jsx("p", { children: D(a, "setupConfigErrors") }),
      /* @__PURE__ */ p.jsx("ul", { children: o.map((d) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("code", { children: d }) }, d)) })
    ] }),
    /* @__PURE__ */ p.jsx("p", { className: "setup-next", children: D(a, "setupOpenEditor") })
  ] }) });
}
const qx = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Lo extends Error {
  constructor(a, o, l) {
    super(o, l), this.operation = a, this.name = "AssistedCarryError";
  }
  operation;
}
function Lx(n, a) {
  return n.floors.find((o) => o.assisted_carry && o.id === a?.floor_id) ?? n.floors.find((o) => o.assisted_carry);
}
function Vx(n, a) {
  const o = a.entities?.assisted_carry_stage, l = o ? n.states[o]?.state : void 0;
  return l && qx.has(l) ? l : "idle";
}
function Gx(n) {
  return !["idle", "complete", "error"].includes(n);
}
function Qx(n, a, o) {
  const l = o.cleaning_type === "vacuum_then_mop", s = o.cleaning_type === "mop";
  if (o.strategy !== "smartplan" && !l && !s && !o.fan_speed)
    throw new Lo("prepare", "Suction is required");
  if (o.strategy !== "smartplan" && !l && o.cleaning_type !== "vacuum" && (!o.mop_mode || !o.mop_intensity))
    throw new Lo("prepare", "Water flow and route are required");
  const d = [...new Set(a)], f = n.rooms.filter((h) => d.includes(h.segment_id)), m = n.rooms.filter((h) => h.include_in_floor_clean !== !1 && h.area_id).map((h) => h.segment_id);
  return {
    segment_ids: d,
    floor_id: n.id,
    map_select_option: n.map_select_option,
    area_ids: f.map((h) => h.area_id).filter((h) => !!h),
    whole_floor: d.length === m.length && m.every((h) => d.includes(h)),
    vacuum_then_mop_routine: n.vacuum_then_mop_routine,
    strategy: o.strategy,
    cleaning_type: o.cleaning_type,
    fan_speed: o.strategy === "smartplan" || l || s ? void 0 : o.fan_speed,
    mop_mode: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || l ? void 0 : o.mop_mode,
    mop_intensity: o.strategy === "smartplan" || o.cleaning_type === "vacuum" || l ? void 0 : o.mop_intensity,
    cleaning_count: o.strategy === "smartplan" || o.cleaning_type === "vacuum_then_mop" ? 1 : o.cleaning_count
  };
}
function Kx(n) {
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
function Jx(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const a = JSON.parse(n);
      if (!Array.isArray(a.s) || !a.s.every((h) => Number.isInteger(h)) || ![1, 2].includes(Number(a.c))) return;
      const o = a.g === void 0 ? "custom" : a.g, l = a.t === void 0 ? "vacuum_and_mop" : a.t;
      if (!["custom", "smartplan"].includes(String(o)) || !["vacuum", "mop", "vacuum_and_mop", "vacuum_then_mop"].includes(String(l))) return;
      const s = typeof a.f == "string" ? a.f : void 0, d = typeof a.m == "string" ? a.m : void 0, f = typeof a.w == "string" ? a.w : void 0, m = l === "vacuum_then_mop";
      return o === "custom" && !m && l !== "mop" && !s || o === "custom" && !m && l !== "vacuum" && (!d || !f) ? void 0 : {
        segment_ids: a.s,
        floor_id: typeof a.d == "string" ? a.d : void 0,
        map_select_option: typeof a.o == "string" ? a.o : void 0,
        area_ids: Array.isArray(a.a) && a.a.every((h) => typeof h == "string") ? a.a : void 0,
        whole_floor: a.e === 1,
        vacuum_then_mop_routine: typeof a.r == "string" ? a.r : void 0,
        strategy: o,
        cleaning_type: l,
        fan_speed: s,
        mop_mode: d,
        mop_intensity: f,
        cleaning_count: Number(a.c)
      };
    } catch {
      return;
    }
}
function Ni(n, a, o) {
  if (!a || !n.states[a] || n.states[a].state === "unavailable")
    throw new Lo(o, `${a ?? "entity"} is unavailable`);
  return a;
}
async function Ti(n, a, o) {
  const l = Ni(n, a.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: o }, { entity_id: l });
}
async function Px(n, a, o) {
  const l = Ni(n, a.entities?.assisted_carry_job, "save_job"), s = Ni(n, a.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: Kx(o) }, { entity_id: l }), await Ti(n, a, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function Wx(n, a, o, l) {
  const s = Ni(n, a.entities?.assisted_carry_start_script, "start_upstairs"), d = o.rooms.filter((m) => l.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (d.length === 0) throw new Lo("start_upstairs", "No mapped rooms were saved");
  const f = {
    cleaning_area_id: d,
    strategy: l.strategy,
    cleaning_type: l.cleaning_type,
    cleaning_count: l.cleaning_count
  };
  l.fan_speed && (f.fan_speed = l.fan_speed), l.mop_mode && (f.mop_mode = l.mop_mode), l.mop_intensity && (f.mop_intensity = l.mop_intensity), await n.callService("script", "turn_on", {
    variables: f
  }, { entity_id: s });
}
async function Fx(n, a) {
  const o = Ni(n, a.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: o });
}
async function f_(n, a) {
  await Ti(n, a, "idle");
  const o = Ni(n, a.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: o });
}
const Ix = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, ez = {
  normal: 0,
  warm: 1,
  hot: 2
}, tz = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, nz = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class Mn extends Error {
  constructor(a, o, l) {
    super(o, l), this.operation = a, this.name = "DockExecutionError";
  }
  operation;
}
async function an(n, a, o, l) {
  const s = { command: o };
  l !== void 0 && (s.params = l), await n.callService("vacuum", "send_command", s, { entity_id: a.entity });
}
function Ml(n, a, o) {
  const l = n[a];
  if (l === void 0) throw new Mn(o, `Unsupported value: ${a}`);
  return l;
}
function az(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const a = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(a))
    throw new Mn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: a * 60 };
}
async function iz(n, a, o, l) {
  const s = a.entities?.[_d[o]];
  if (!s) return;
  const d = s.split(".")[0];
  if (typeof l == "boolean") {
    if (!["input_boolean", "switch"].includes(d))
      throw new Mn(o, `${s} is not a boolean helper`);
    await n.callService(d, l ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(d))
    throw new Mn(o, `${s} is not a select helper`);
  await n.callService(d, "select_option", { option: l }, { entity_id: s });
}
async function oz(n, a, o, l) {
  try {
    switch (o) {
      case "mop_wash_frequency":
        await an(n, a, "set_smart_wash_params", az(String(l)));
        break;
      case "wash_mode":
        await an(n, a, "set_wash_towel_mode", {
          wash_mode: Ml(Ix, String(l), o)
        });
        break;
      case "wash_temperature":
        await an(n, a, "set_wash_water_temperature", {
          values: Ml(ez, String(l), o)
        });
        break;
      case "auto_empty":
        await an(n, a, "set_dust_collection_switch_status", { status: l ? 1 : 0 });
        break;
      case "empty_mode":
        await an(n, a, "set_dust_collection_mode", {
          mode: Ml(tz, String(l), o)
        });
        break;
      case "auto_dry":
        await an(n, a, "app_set_dryer_setting", { status: l ? 1 : 0 });
        break;
      case "dry_duration":
        await an(n, a, "app_set_dryer_setting", {
          on: { dry_time: Ml(nz, String(l), o) }
        });
        break;
    }
    await iz(n, a, o, l);
  } catch (s) {
    throw s instanceof Mn ? s : new Mn(o, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function Cc(n, a, o, l = !1) {
  const s = `${l ? "stop" : "start"}_${o}`;
  try {
    o === "empty" && await an(n, a, l ? "app_stop_collect_dust" : "app_start_collect_dust"), o === "wash" && await an(n, a, l ? "app_stop_wash" : "app_start_wash"), o === "dry" && await an(n, a, "app_set_dryer_status", { status: l ? 0 : 1 }), o === "drain" && await an(n, a, "app_empty_rinse_tank_water");
  } catch (d) {
    throw new Mn(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
const rz = {
  main_brush: 300,
  side_brush: 200,
  filter: 150,
  sensors: 30
}, m_ = 10;
function lz(n, a) {
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
function sz(n, a) {
  const o = n.states[a.sensor], l = a.reset_button ? n.states[a.reset_button] : void 0, s = !!(l && l.state !== "unavailable"), d = Number(o?.state);
  if (!o || o.state === "" || !Number.isFinite(d)) return { ...a, level: "unknown", can_reset: s };
  if (o.attributes.unit_of_measurement === "%") {
    const g = d <= 0 ? "overdue" : d < m_ ? "due" : "ok";
    return { ...a, remaining: d, unit: "%", percent: d, level: g, can_reset: s };
  }
  const f = lz(o, d);
  if (f === void 0) return { ...a, level: "unknown", can_reset: s };
  const m = rz[a.kind], h = m ? Math.max(0, f / m * 100) : void 0, v = f <= 0 ? "overdue" : h !== void 0 && h < m_ ? "due" : "ok";
  return { ...a, remaining: f, unit: "h", ...h !== void 0 ? { percent: h } : {}, level: v, can_reset: s };
}
function Tv(n, a) {
  return (a.consumables ?? []).map((o) => sz(n, o));
}
function Av(n) {
  return n.filter((a) => a.level === "overdue").length;
}
const uz = 20, cz = /* @__PURE__ */ new Set(["ok", "none", "unknown", "unavailable", ""]);
function dz(n) {
  return n.strategy === "smartplan" || n.cleaning_type !== "vacuum";
}
function Ev(n, a, o) {
  const l = { blocking: [], warnings: [] }, s = (v) => {
    const g = a.entities?.[v];
    return g ? { id: g, state: n.states[g]?.state } : void 0;
  }, d = (v, g, b, S) => {
    const w = s(v);
    w?.state === g && S.push({ code: b, entity_id: w.id });
  };
  dz(o) && (d("dock_clean_water_empty", "on", "clean_water_empty", l.blocking), d("water_shortage", "on", "water_shortage", l.blocking), d("mop_attached", "off", "mop_detached", l.blocking), d("water_box_attached", "off", "water_box_detached", l.blocking), d("dock_dirty_water_full", "on", "dirty_water_full", l.warnings));
  const f = s("dock_error");
  f?.state !== void 0 && !cz.has(f.state) && l.warnings.push({ code: "dock_error", entity_id: f.id, detail: f.state });
  const m = s("battery");
  m?.state !== void 0 && m.state !== "" && Number(m.state) < uz && l.warnings.push({ code: "low_battery", entity_id: m.id, detail: m.state });
  const h = Av(Tv(n, a));
  return h > 0 && l.warnings.push({ code: "maintenance_overdue", detail: String(h) }), l;
}
const fz = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]), Kc = /* @__PURE__ */ new Set(["vacuum", "mop", "vacuum_and_mop"]), mz = {
  vacuum: "vacuum",
  mop: "mop",
  vacuum_and_mop: "vac_and_mop",
  vacuum_then_mop: "vac_and_mop"
};
class Te extends Error {
  constructor(a, o, l) {
    super(o, l), this.operation = a, this.name = "JobExecutionError";
  }
  operation;
}
async function pz(n, a, o, l, s, d) {
  const f = Date.now();
  for (; Date.now() - f < l; ) {
    if (n().states[a]?.state === o) return;
    await d(s);
  }
  throw new Te("wait_for_state", `${a} did not become “${o}” within ${l / 1e3}s`);
}
function $o(n, a, o, l) {
  const s = n.states[a];
  if (!s || s.state === "unavailable") throw new Te(l, `${a} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(o)) throw new Te(l, `${a} does not support “${o}”`);
}
async function No(n, a, o, l, s, d, f, m = !0) {
  const h = n();
  if ($o(h, a, o, l), h.states[a]?.state !== o)
    try {
      if (await h.callService("select", "select_option", { option: o }, { entity_id: a }), !m) return;
      await pz(n, a, o, s, d, f);
    } catch (v) {
      throw v instanceof Te ? new Te(l, v.message, { cause: v }) : new Te(l, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function hz(n, a) {
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
  } catch (l) {
    throw new Te("set_cleaning_mode", l instanceof Error ? l.message : String(l), { cause: l });
  }
}
async function vd(n, a, o, l, s) {
  try {
    await n.callService("vacuum", "send_command", { command: o, params: l }, { entity_id: a.entity });
  } catch (d) {
    throw new Te(s, d instanceof Error ? d.message : String(d), { cause: d });
  }
}
async function p_(n, a, o) {
  await vd(n, a, "set_clean_repeat_times", { repeat: o }, "set_cleaning_count");
}
async function _z(n, a) {
  await vd(
    n,
    a,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function h_(n, a, o) {
  const l = n.states[a]?.attributes.fan_speed_list;
  if (!(Array.isArray(l) ? l.map(String) : []).includes(o))
    throw new Te("set_fan_speed", `${a} does not support “${o}”`);
}
async function vz({
  getHass: n,
  config: a,
  floor: o,
  rooms: l,
  draft: s,
  zone: d,
  timeoutMs: f = 1e4,
  pollMs: m = 150,
  sleep: h = (v) => new Promise((g) => setTimeout(g, v))
}) {
  const v = n(), g = Da(v, a), b = v.states[a.entity];
  if (!b || b.state === "unavailable") throw new Te("preflight", `${a.entity} is unavailable`);
  if (R0(b.state)) throw new Te("preflight", `Vacuum is ${b.state}`);
  const S = a.entities?.error ? v.states[a.entities.error] : void 0;
  if (S && !["none", "unknown", "unavailable", ""].includes(S.state))
    throw new Te("preflight", `Vacuum error: ${S.state}`);
  const w = [...new Set(l.map((J) => J.area_id).filter((J) => !!J))];
  if (!d && w.length === 0) throw new Te("preflight", "Select at least one room mapped to a Home Assistant area");
  if (s.cleaning_type === "mop" && !a.enable_mop_only)
    throw new Te("preflight", "Mop only is disabled; set enable_mop_only: true for models that support it");
  const z = s.cleaning_type === "mop" ? "mop" : s.cleaning_type === "vacuum_and_mop" ? "vacuum_and_mop" : void 0, R = z ? g.mopRoutes?.[z] : void 0;
  if (s.mop_mode && R && !R.includes(s.mop_mode))
    throw new Te("preflight", `Mop route “${s.mop_mode}” is not allowed for ${z}`);
  const O = Ev(v, a, s).blocking;
  if (O.length > 0)
    throw new Te("preflight", `Not ready to clean: ${O.map((J) => J.code).join(", ")}`);
  if (l.some((J) => Po(v, J)))
    throw new Te("preflight", "A selected room uses an area that no longer exists");
  if (s.strategy === "smartplan" && !g.hasSmartPlan)
    throw new Te("preflight", "This model does not offer AI SmartPlan");
  if (d && (s.strategy !== "custom" || !Kc.has(s.cleaning_type)))
    throw new Te("preflight", "Zone cleaning supports only Vacuum, Mop and Vac & Mop");
  if (d && (![d.x1, d.y1, d.x2, d.y2].every(Number.isFinite) || d.x2 <= d.x1 || d.y2 <= d.y1))
    throw new Te("preflight", "The selected zone is invalid");
  const X = a.entities?.map_select, I = async () => {
    if (!(a.floors.length <= 1)) {
      if (!X || !o.map_select_option) throw new Te("select_floor", "This floor has no map selector mapping");
      if (await No(n, X, o.map_select_option, "select_floor", f, m, h), m > 0 && await h(m), n().states[X]?.state !== o.map_select_option)
        throw new Te("select_floor", `${X} did not stay on “${o.map_select_option}”`);
    }
  };
  if (await I(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const J = o.vacuum_then_mop_routine;
    if (J) {
      const P = n().states[J];
      if (!P || P.state === "unavailable")
        throw new Te("start_vacuum_then_mop", `${J} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: J });
      } catch (ie) {
        throw new Te("start_vacuum_then_mop", ie instanceof Error ? ie.message : String(ie), { cause: ie });
      }
      return o.rooms.filter((ie) => ie.include_in_floor_clean !== !1).map((ie) => ie.area_id).filter((ie) => !!ie);
    }
    const G = a.entities?.vacuum_then_mop_script, oe = G ? n().states[G] : void 0;
    if (!G || !oe || oe.state === "unavailable")
      throw new Te("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const Z = a.entities?.cleaning_mode;
    if (!Z)
      throw new Te("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if ($o(n(), Z, "vacuum", "set_cleaning_mode"), $o(n(), Z, "mop", "set_cleaning_mode"), s.mop_mode) {
      const P = a.entities?.mop_mode;
      if (!P) throw new Te("set_mop_mode", "The selected profile requires a mop-mode entity");
      $o(n(), P, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const P = a.entities?.mop_intensity;
      if (!P) throw new Te("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      $o(n(), P, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && h_(n(), a.entity, s.fan_speed), await I();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: w,
            fan_speed: s.fan_speed,
            mop_mode: s.mop_mode,
            mop_intensity: s.mop_intensity
          }
        },
        { entity_id: G }
      );
    } catch (P) {
      throw new Te("start_vacuum_then_mop", P instanceof Error ? P.message : String(P), { cause: P });
    }
    return w;
  }
  if (s.strategy === "smartplan")
    await _z(n(), a), g.roomRepeatStrategy === "set_clean_repeat_times" && await p_(n(), a, 1);
  else {
    const J = a.entities?.cleaning_mode, G = mz[s.cleaning_type], oe = J && n().states[J]?.attributes.options;
    if (J && Array.isArray(oe) && oe.map(String).includes(G))
      await No(
        n,
        J,
        G,
        "set_cleaning_mode",
        f,
        m,
        h,
        G === "vacuum"
      );
    else if (s.cleaning_type === "vacuum" && a.vacuum_mode_fallback === "set_clean_motor_mode")
      await hz(n(), a);
    else {
      if (s.cleaning_type === "vacuum")
        throw new Te("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
      if (s.cleaning_type === "mop")
        throw new Te("set_cleaning_mode", "Mop-only requires a cleaning-mode entity with the “mop” option");
    }
    const Z = a.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!Z) throw new Te("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[Z]?.state === "smart_mode" && fz.has(s.mop_mode) && await No(n, Z, "custom", "leave_smartplan", f, m, h), await No(n, Z, s.mop_mode, "set_mop_mode", f, m, h);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const P = a.entities?.mop_intensity;
      if (!P) throw new Te("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await No(n, P, s.mop_intensity, "set_mop_intensity", f, m, h);
    }
    if (s.fan_speed && s.cleaning_type !== "mop") {
      const P = n();
      h_(P, a.entity, s.fan_speed);
      try {
        await P.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: a.entity });
      } catch (ie) {
        throw new Te("set_fan_speed", ie instanceof Error ? ie.message : String(ie), { cause: ie });
      }
    }
    !d && g.roomRepeatStrategy === "set_clean_repeat_times" && await p_(n(), a, s.cleaning_count);
  }
  await I();
  const q = new Set(l.map((J) => J.segment_id)), Q = l.length === o.rooms.length && o.rooms.every((J) => q.has(J.segment_id)), K = !d && s.cleaning_count === 2 && g.roomRepeatStrategy === "app_segment_clean";
  try {
    d ? await n().callService(
      "roborock",
      "set_vacuum_zoned_cleaning",
      { ...d, repeats: s.cleaning_count },
      { entity_id: a.entity }
    ) : K ? await vd(
      n(),
      a,
      "app_segment_clean",
      [{ segments: l.map((J) => J.segment_id), repeat: s.cleaning_count }],
      "clean_segments"
    ) : Q ? await n().callService("vacuum", "start", void 0, { entity_id: a.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: w },
      { entity_id: a.entity }
    );
  } catch (J) {
    const G = d ? "clean_zone" : K ? "clean_segments" : Q ? "start_floor" : "clean_area";
    throw new Te(G, J instanceof Error ? J.message : String(J), { cause: J });
  }
  return w;
}
function yz(n, a) {
  const o = D(n, `check_${a.code}`);
  return a.code === "dock_error" ? `${o} ${a.detail?.replaceAll("_", " ")}` : a.code === "low_battery" ? `${o} ${a.detail}%` : a.code === "maintenance_overdue" ? `${o} ${a.detail}` : o;
}
function gz(n, a) {
  switch (a.code) {
    case "area_missing":
      return El(n, "health_area_missing", { room: a.room, area: a.area_id });
    case "entity_missing":
      return El(n, "health_entity_missing", { entity: a.entity_id });
    case "map_option_missing":
      return El(n, "health_map_option_missing", { option: a.option });
    case "map_uncalibrated":
      return El(n, "health_map_uncalibrated", { entity: a.entity_id });
  }
}
function bz(n, a) {
  return a.remaining === void 0 ? D(n, "maintenanceUnknown") : a.unit === "%" ? `${Math.max(0, Math.round(a.remaining))}%` : a.remaining <= 0 ? `0 ${D(n, "hourShort")}` : a.remaining < 1 ? `${Math.round(a.remaining * 60)} ${D(n, "minuteShort")}` : `${Math.round(a.remaining)} ${D(n, "hourShort")}`;
}
const Sz = {
  ok: "maintenanceOk",
  due: "maintenanceDue",
  overdue: "maintenanceOverdue",
  unknown: "maintenanceUnknown"
};
function wz(n, a) {
  return D(n, Sz[a.level]);
}
function Ta(n, a, o) {
  const l = a.entities?.[_d[o]], s = l ? n.states[l]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? zv[o] : o === "auto_empty" || o === "auto_dry" ? s === "on" : s;
}
function Yo(n, a) {
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
    return `${a.replace("_min", "")} ${D(n, "minuteShort")}`;
  const l = n === "nl" ? 1 : n === "tr" ? 2 : n === "pl" ? 3 : 0;
  return o[a]?.[l] ?? a;
}
function Do({
  label: n,
  setting: a,
  value: o,
  language: l,
  disabled: s,
  onChange: d
}) {
  return /* @__PURE__ */ p.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ p.jsx("span", { children: n }),
    /* @__PURE__ */ p.jsx("select", { "aria-label": n, value: o, disabled: s, onChange: (f) => d(f.target.value), children: xv[a].map((f) => /* @__PURE__ */ p.jsx("option", { value: f, children: Yo(l, f) }, f)) })
  ] });
}
function Oc({
  label: n,
  checked: a,
  disabled: o,
  onChange: l
}) {
  return /* @__PURE__ */ p.jsxs("div", { className: "dock-setting-row", children: [
    /* @__PURE__ */ p.jsx("span", { children: n }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-label": n,
        "aria-checked": a,
        className: `dock-toggle ${a ? "active" : ""}`,
        disabled: o,
        onClick: () => l(!a),
        children: /* @__PURE__ */ p.jsx("span", {})
      }
    )
  ] });
}
function kz({
  hass: n,
  config: a,
  language: o,
  washing: l,
  emptying: s,
  drying: d,
  dryingRemaining: f,
  pending: m,
  onClose: h,
  onAction: v,
  onSetting: g,
  onChildLock: b,
  maintenance: S = [],
  onResetConsumable: w
}) {
  const z = !!m, R = a.entities?.dock_child_lock, O = R ? n.states[R]?.state === "on" : !1, X = String(Ta(n, a, "mop_wash_frequency")), I = String(Ta(n, a, "wash_mode")), q = String(Ta(n, a, "wash_temperature")), Q = !!Ta(n, a, "auto_empty"), K = String(Ta(n, a, "empty_mode")), J = !!Ta(n, a, "auto_dry"), G = String(Ta(n, a, "dry_duration")), oe = [
    { action: "empty", label: D(o, "empty"), active: s, icon: /* @__PURE__ */ p.jsx(Rl, {}), detail: Yo(o, K) },
    { action: "wash", label: D(o, "wash"), active: l, icon: /* @__PURE__ */ p.jsx(Rh, {}), detail: `${Yo(o, I)} · ${Yo(o, q)}` },
    { action: "dry", label: D(o, "dry"), active: d, icon: /* @__PURE__ */ p.jsx(Zh, {}), detail: d ? f : Yo(o, G) }
  ];
  return /* @__PURE__ */ p.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ p.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": D(o, "close"), onClick: h }),
    /* @__PURE__ */ p.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ p.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ p.jsxs("header", { children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("h2", { id: "dock-sheet-title", children: D(o, "dockStation") }),
          /* @__PURE__ */ p.jsx("p", { children: D(o, "dockOverview") })
        ] }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "icon-button", "aria-label": D(o, "close"), onClick: h, children: /* @__PURE__ */ p.jsx(ed, {}) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ p.jsx("div", { className: "dock-actions", children: oe.map((Z) => /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            className: Z.active ? "active" : "",
            disabled: z,
            onClick: () => v(Z.action, Z.active),
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "dock-action-icon", children: Z.icon }),
              /* @__PURE__ */ p.jsx("strong", { children: Z.active ? D(o, "stop") : Z.label }),
              /* @__PURE__ */ p.jsx("small", { children: Z.active ? D(o, "active") : Z.detail })
            ]
          },
          Z.action
        )) }),
        /* @__PURE__ */ p.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ p.jsxs("h3", { children: [
            /* @__PURE__ */ p.jsx(Rh, {}),
            D(o, "dockSettings")
          ] }),
          /* @__PURE__ */ p.jsx(Do, { label: D(o, "mopWashFrequency"), setting: "mop_wash_frequency", value: X, language: o, disabled: z, onChange: (Z) => g("mop_wash_frequency", Z) }),
          /* @__PURE__ */ p.jsx(Do, { label: D(o, "washingMode"), setting: "wash_mode", value: I, language: o, disabled: z, onChange: (Z) => g("wash_mode", Z) }),
          /* @__PURE__ */ p.jsx(Do, { label: D(o, "washTemperature"), setting: "wash_temperature", value: q, language: o, disabled: z, onChange: (Z) => g("wash_temperature", Z) })
        ] }),
        /* @__PURE__ */ p.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ p.jsxs("h3", { children: [
            /* @__PURE__ */ p.jsx(Rl, {}),
            D(o, "dustbin")
          ] }),
          /* @__PURE__ */ p.jsx(Oc, { label: D(o, "autoEmpty"), checked: Q, disabled: z, onChange: (Z) => g("auto_empty", Z) }),
          /* @__PURE__ */ p.jsx(Do, { label: D(o, "emptyMode"), setting: "empty_mode", value: K, language: o, disabled: z, onChange: (Z) => g("empty_mode", Z) })
        ] }),
        /* @__PURE__ */ p.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ p.jsxs("h3", { children: [
            /* @__PURE__ */ p.jsx(Zh, {}),
            D(o, "drying")
          ] }),
          /* @__PURE__ */ p.jsx(Oc, { label: D(o, "autoDry"), checked: J, disabled: z, onChange: (Z) => g("auto_dry", Z) }),
          /* @__PURE__ */ p.jsx(Do, { label: D(o, "dryDuration"), setting: "dry_duration", value: G, language: o, disabled: z, onChange: (Z) => g("dry_duration", Z) })
        ] }),
        S.length > 0 && /* @__PURE__ */ p.jsxs("section", { className: "dock-settings-group maintenance-group", children: [
          /* @__PURE__ */ p.jsxs("h3", { children: [
            /* @__PURE__ */ p.jsx(g0, {}),
            D(o, "maintenance")
          ] }),
          S.map((Z) => /* @__PURE__ */ p.jsxs("div", { className: `maintenance-row level-${Z.level}`, children: [
            /* @__PURE__ */ p.jsx("span", { children: D(o, `consumable_${Z.kind}`) }),
            /* @__PURE__ */ p.jsxs("span", { className: "maintenance-value", children: [
              /* @__PURE__ */ p.jsx("strong", { children: bz(o, Z) }),
              /* @__PURE__ */ p.jsx("small", { children: wz(o, Z) })
            ] }),
            Z.can_reset && w && /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", disabled: z, onClick: () => w(Z), children: D(o, "resetConsumable") })
          ] }, Z.kind)),
          S.some((Z) => !Z.can_reset) && /* @__PURE__ */ p.jsx("p", { className: "maintenance-hint", children: D(o, "enableResetHint") })
        ] }),
        /* @__PURE__ */ p.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ p.jsxs("h3", { children: [
            /* @__PURE__ */ p.jsx(N_, {}),
            D(o, "safetyMaintenance")
          ] }),
          R && /* @__PURE__ */ p.jsx(Oc, { label: D(o, "childLock"), checked: O, disabled: z, onChange: b }),
          /* @__PURE__ */ p.jsxs("button", { type: "button", className: "drain-button", disabled: !0, children: [
            /* @__PURE__ */ p.jsx($b, {}),
            /* @__PURE__ */ p.jsxs("span", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: D(o, "drainWaterTank") }),
              /* @__PURE__ */ p.jsx("small", { children: D(o, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ p.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function Jc({ icon: n, className: a }) {
  return n ? F.createElement("ha-icon", { icon: n, class: a, "aria-hidden": "true" }) : null;
}
const __ = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only", "mop_only"], xz = ["vacuum_only", "vacuum_and_mop", "mop_only"], zz = ["quiet", "balanced", "turbo", "max", "max_plus"], jz = ["quiet", "balanced", "turbo", "max"], Tz = ["fast", "standard", "deep"], Az = ["mild", "standard", "intense", "slight", "low", "medium", "moderate", "high", "extreme"], Ez = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 }, Mz = {
  smartplan: "smartPlan",
  vacuum_then_mop: "vacuumThenMop",
  vacuum_and_mop: "vacuumAndMop",
  vacuum_only: "vacuumOnly",
  mop_only: "mopOnly"
};
function Nc({
  value: n,
  options: a,
  onChange: o,
  title: l,
  language: s
}) {
  return a.length === 0 ? null : /* @__PURE__ */ p.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ p.jsx("span", { children: l }),
    /* @__PURE__ */ p.jsx("div", { className: "option-strip", children: a.map((d) => /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        className: n === d ? "active" : "",
        onClick: () => o(d),
        children: jv(s, d)
      },
      d
    )) })
  ] });
}
function v_(n, a) {
  return a === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : a === "vacuum_only" ? n.cleaning_type === "vacuum" : a === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : a === "mop_only" ? n.cleaning_type === "mop" : n.cleaning_type === "vacuum_then_mop";
}
function Cz({
  language: n,
  draft: a,
  capabilities: o,
  presets: l,
  selectedRoomNames: s,
  submitting: d,
  assistedCarry: f = !1,
  zoneCleaning: m = !1,
  mopRoutes: h,
  checks: v,
  onDraftChange: g,
  onClose: b,
  onStart: S
}) {
  const z = (m ? xz : __).map((Z) => l.find(({ preset: P }) => P.id === Z)).filter((Z) => !!Z).filter(({ preset: Z, available: P }) => Z.id !== "smartplan" || P), R = l.filter(
    ({ preset: Z }) => !__.includes(Z.id) && (!m || Z.strategy === "custom" && ["vacuum", "mop", "vacuum_and_mop"].includes(Z.cleaning_type ?? "vacuum"))
  ), X = (a.cleaning_type === "vacuum" ? zz : jz).filter((Z) => o.fanSpeeds.includes(Z)), q = ((a.cleaning_type === "mop" ? h?.mop : h?.vacuum_and_mop) ?? Tz).filter((Z) => o.mopModes.includes(Z)), Q = q.includes(a.mop_mode ?? "") ? a.mop_mode : q[0], K = Az.filter((Z) => o.mopIntensities.includes(Z)), J = Math.max(0, K.indexOf(a.mop_intensity ?? "medium")), G = Ez[K[J]], oe = a.strategy === "smartplan" ? D(n, "smartPlanDescription") : a.cleaning_type === "vacuum" ? D(n, "vacuumDescription") : a.cleaning_type === "mop" ? D(n, "mopOnlyDescription") : a.cleaning_type === "vacuum_then_mop" ? D(n, "vacuumThenMopDescription") : D(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ p.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ p.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": D(n, "close"), onClick: b }),
    /* @__PURE__ */ p.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ p.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ p.jsxs("header", { children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("h2", { id: "job-sheet-title", children: f ? D(n, "assistedCarryTitle") : D(n, "configureTitle") }),
          /* @__PURE__ */ p.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "icon-button", "aria-label": D(n, "close"), onClick: b, children: /* @__PURE__ */ p.jsx(ed, {}) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "cleaning-mode-tabs",
            role: "tablist",
            "aria-label": D(n, "cleaningType"),
            style: { "--mode-count": Math.min(z.length, 4) },
            children: z.map(({ preset: Z, available: P, reason: ie }) => /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": v_(a, Z.id),
                className: v_(a, Z.id) ? "active" : "",
                disabled: !P || d,
                title: ie,
                onClick: () => g(Ho(Z)),
                children: [
                  /* @__PURE__ */ p.jsx(Jc, { icon: Z.icon }),
                  /* @__PURE__ */ p.jsx("span", { children: D(n, Mz[Z.id]) })
                ]
              },
              Z.id
            ))
          }
        ),
        /* @__PURE__ */ p.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ p.jsx("p", { className: "mode-description", children: oe }),
          a.strategy !== "smartplan" && a.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            a.cleaning_type !== "mop" && /* @__PURE__ */ p.jsx(
              Nc,
              {
                language: n,
                title: D(n, "suction"),
                value: a.fan_speed,
                options: X,
                onChange: (Z) => g({ ...a, preset_id: "custom_draft", fan_speed: Z })
              }
            ),
            a.cleaning_type !== "vacuum" && K.length > 0 && /* @__PURE__ */ p.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ p.jsx("span", { children: D(n, "waterFlow") }),
              /* @__PURE__ */ p.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ p.jsx("strong", { children: jv(n, K[J]) }),
                G !== void 0 && /* @__PURE__ */ p.jsx("output", { children: G })
              ] }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: K.length - 1,
                  step: "1",
                  value: J,
                  "aria-label": D(n, "waterFlow"),
                  onChange: (Z) => g({
                    ...a,
                    preset_id: "custom_draft",
                    mop_intensity: K[Number(Z.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ p.jsx(
              Nc,
              {
                language: n,
                title: D(n, "cleaningCount"),
                value: String(a.cleaning_count),
                options: ["1", "2"],
                onChange: (Z) => g({
                  ...a,
                  preset_id: "custom_draft",
                  cleaning_count: Number(Z)
                })
              }
            ),
            /* @__PURE__ */ p.jsx(
              Nc,
              {
                language: n,
                title: D(n, "mopRoute"),
                value: Q,
                options: q,
                onChange: (Z) => g({ ...a, preset_id: "custom_draft", mop_mode: Z })
              }
            )
          ] })
        ] }),
        !f && R.length > 0 && /* @__PURE__ */ p.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ p.jsx("span", { children: D(n, "savedProfiles") }),
          /* @__PURE__ */ p.jsx("div", { children: R.map(({ preset: Z, available: P, reason: ie }) => /* @__PURE__ */ p.jsxs(
            "button",
            {
              type: "button",
              disabled: !P || d,
              title: ie,
              className: a.preset_id === Z.id ? "active" : "",
              onClick: () => g(Ho(Z)),
              children: [
                /* @__PURE__ */ p.jsx(Jc, { icon: Z.icon }),
                " ",
                Z.name
              ]
            },
            Z.id
          )) })
        ] })
      ] }),
      v && (v.blocking.length > 0 || v.warnings.length > 0) && /* @__PURE__ */ p.jsxs("div", { className: `preflight ${v.blocking.length > 0 ? "blocking" : "warning"}`, role: "alert", children: [
        /* @__PURE__ */ p.jsx("strong", { children: D(n, v.blocking.length > 0 ? "preflightBlocked" : "preflightWarnings") }),
        /* @__PURE__ */ p.jsx("ul", { children: [...v.blocking, ...v.warnings].map((Z) => /* @__PURE__ */ p.jsx("li", { children: yz(n, Z) }, Z.code)) })
      ] }),
      /* @__PURE__ */ p.jsxs("footer", { children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", disabled: d, onClick: b, children: D(n, "cancel") }),
        /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "button",
            className: "primary",
            disabled: d || (v?.blocking.length ?? 0) > 0,
            onClick: () => S(Q && a.strategy === "custom" && ["mop", "vacuum_and_mop"].includes(a.cleaning_type) ? { ...a, mop_mode: Q } : a),
            children: d ? f ? D(n, "preparingUpstairs") : D(n, "starting") : f ? D(n, "prepareUpstairs") : (v?.warnings.length ?? 0) > 0 ? D(n, "startAnyway") : D(n, "start")
          }
        )
      ] })
    ] })
  ] });
}
var Ca = function(n, a) {
  return Number(n.toFixed(a));
}, Oz = function(n, a) {
  return a;
}, De = function(n, a, o) {
  o && typeof o == "function" && o(n, a);
}, Nz = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, Dz = function(n) {
  return n;
}, Rz = function(n) {
  return n * n;
}, Zz = function(n) {
  return n * (2 - n);
}, Uz = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, $z = function(n) {
  return n * n * n;
}, Yz = function(n) {
  return --n * n * n + 1;
}, Bz = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, Hz = function(n) {
  return n * n * n * n;
}, Xz = function(n) {
  return 1 - --n * n * n * n;
}, qz = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, Lz = function(n) {
  return n * n * n * n * n;
}, Vz = function(n) {
  return 1 + --n * n * n * n * n;
}, Gz = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, Mv = {
  easeOut: Nz,
  linear: Dz,
  easeInQuad: Rz,
  easeOutQuad: Zz,
  easeInOutQuad: Uz,
  easeInCubic: $z,
  easeOutCubic: Yz,
  easeInOutCubic: Bz,
  easeInQuart: Hz,
  easeOutQuart: Xz,
  easeInOutQuart: qz,
  easeInQuint: Lz,
  easeOutQuint: Vz,
  easeInOutQuint: Gz
}, Cv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, on = function(n) {
  n.mounted && (Cv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function Ov(n, a, o, l) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), d = 1;
    on(n), n.animation = function() {
      if (!n.mounted)
        return Cv(n.animation);
      var f = (/* @__PURE__ */ new Date()).getTime() - s, m = f / o, h = Mv[a], v = h(m);
      f >= o ? (l(d), n.animation = null) : n.animation && (l(v), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function Qz(n) {
  var a = n.scale, o = n.positionX, l = n.positionY;
  return !(Number.isNaN(a) || Number.isNaN(o) || Number.isNaN(l));
}
function ra(n, a, o, l) {
  var s = Qz(a);
  if (!(!n.mounted || !s)) {
    var d = n.setState, f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = a.scale - m, b = a.positionX - h, S = a.positionY - v;
    o === 0 ? d(a.scale, a.positionX, a.positionY) : Ov(n, l, o, function(w) {
      w !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var z = m + g * w, R = h + b * w, O = v + S * w;
      d(z, R, O);
    });
  }
}
function Kz(n, a, o) {
  var l = n.offsetWidth, s = n.offsetHeight, d = a.offsetWidth, f = a.offsetHeight, m = d * o, h = f * o, v = l - m, g = s - h;
  return {
    wrapperWidth: l,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: v,
    newContentHeight: h,
    newDiffHeight: g
  };
}
var Jz = function(n, a, o, l, s, d, f) {
  var m = n > a ? o * (f ? 0.5 : 1) : 0, h = l > s ? d * (f ? 0.5 : 1) : 0, v = n - a - m, g = m, b = l - s - h, S = h;
  return {
    minPositionX: v,
    maxPositionX: g,
    minPositionY: b,
    maxPositionY: S,
    scaleWidthFactor: m,
    scaleHeightFactor: h
  };
}, yd = function(n, a) {
  var o = n.wrapperComponent, l = n.contentComponent, s = n.setup, d = s.centerZoomedOut, f = s.disablePadding;
  if (!o || !l)
    throw new Error("Components are not mounted");
  var m = Kz(o, l, a), h = m.wrapperWidth, v = m.wrapperHeight, g = m.newContentWidth, b = m.newContentHeight, S = m.newDiffWidth, w = m.newDiffHeight, z = Jz(h, g, S, v, b, w, !!d), R = h >= g && v >= b;
  f && R && !d && (z.minPositionX = 0, z.maxPositionX = 0, z.minPositionY = 0, z.maxPositionY = 0);
  var O = n.setup, X = O.minPositionX, I = O.maxPositionX, q = O.minPositionY, Q = O.maxPositionY;
  return X != null && (z.minPositionX = h * (1 - a) + X * a), I != null && (z.maxPositionX = I * a), q != null && (z.minPositionY = v * (1 - a) + q * a), Q != null && (z.maxPositionY = Q * a), z;
}, Vo = function(n, a, o, l) {
  return l ? n < a ? Ca(a, 2) : n > o ? Ca(o, 2) : Ca(n, 2) : Ca(n, 2);
}, Di = function(n, a) {
  var o = yd(n, a);
  return n.bounds = o, o;
};
function Wo(n, a, o, l, s, d, f) {
  var m = o.minPositionX, h = o.minPositionY, v = o.maxPositionX, g = o.maxPositionY, b = 0, S = 0;
  f && (b = s, S = d);
  var w = Vo(n, m - b, v + b, l), z = Vo(a, h - S, g + S, l);
  return { x: w, y: z };
}
function Il(n, a, o, l, s, d) {
  var f = n.state, m = f.scale, h = f.positionX, v = f.positionY, g = l - m;
  if (typeof a != "number" || typeof o != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: h, y: v };
  var b = h - a * g, S = v - o * g, w = Wo(b, S, s, d, 0, 0, null);
  return w;
}
var y_ = 1e-7;
function Fo(n, a, o, l, s) {
  var d = s ? l : 0, f = Math.max(a - d, y_), m = o + d;
  return !Number.isNaN(o) && n >= m ? m : !Number.isNaN(a) && n <= f ? f : Math.max(n, y_);
}
var g_ = function(n, a) {
  var o = n.setup.panning.excluded, l = n.isInitialized, s = n.wrapperComponent, d = a.target, f = "shadowRoot" in d && "composedPath" in a, m = f ? a.composedPath().some(function(g) {
    return g instanceof Element ? s?.contains(g) : !1;
  }) : s?.contains(d), h = l && d && m;
  if (!h)
    return !1;
  var v = Io(d, o);
  return !(v || d.getAttribute("draggable") === "true" || d.getAttribute("contenteditable") === "true" || d.isContentEditable);
}, b_ = function(n) {
  var a = n.isInitialized, o = n.isPanning, l = n.setup, s = l.panning.disabled, d = a && o && !s;
  return !!d;
}, Pz = function(n, a) {
  var o = n.state, l = o.positionX, s = o.positionY;
  n.isPanning = !0;
  var d = a.clientX, f = a.clientY;
  n.startCoords = { x: d - l, y: f - s };
}, Wz = function(n, a) {
  var o = a.touches, l = n.state, s = l.positionX, d = l.positionY;
  n.isPanning = !0;
  var f = o.length === 1;
  if (f) {
    var m = o[0].clientX, h = o[0].clientY;
    n.startCoords = { x: m - s, y: h - d };
  }
};
function Fz(n) {
  var a = n.state, o = a.positionX, l = a.positionY, s = a.scale, d = n.setup, f = d.disabled, m = d.limitToBounds, h = d.centerZoomedOut, v = n.wrapperComponent;
  if (!(f || !v || !n.bounds)) {
    var g = n.bounds, b = g.maxPositionX, S = g.minPositionX, w = g.maxPositionY, z = g.minPositionY, R = o > b || o < S, O = l > w || l < z, X = o > b ? v.offsetWidth : n.setup.minPositionX || 0, I = l > w ? v.offsetHeight : n.setup.minPositionY || 0, q = Il(n, X, I, s, n.bounds, m || h), Q = q.x, K = q.y;
    return {
      scale: s,
      positionX: R ? Q : o,
      positionY: O ? K : l
    };
  }
}
function Nv(n, a, o, l, s) {
  var d = n.setup.limitToBounds, f = n.wrapperComponent, m = n.bounds, h = n.state, v = h.scale, g = h.positionX, b = h.positionY;
  if (!(f === null || m === null || a === g && o === b)) {
    var S = Wo(a, o, m, d, l, s, f), w = S.x, z = S.y;
    n.setState(v, w, z);
  }
}
var Iz = function(n, a, o) {
  var l = n.startCoords, s = n.state, d = n.setup.panning, f = d.lockAxisX, m = d.lockAxisY, h = s.positionX, v = s.positionY;
  if (!l)
    return { x: h, y: v };
  var g = a - l.x, b = o - l.y, S = f ? h : g, w = m ? v : b;
  return { x: S, y: w };
}, aa = function(n, a, o) {
  var l = n.setup, s = n.state, d = l.minScale, f = l.disablePadding, m = l.centerZoomedOut, h = o ?? s.scale;
  return a > 0 && h >= d && !f && !m ? a : 0;
}, na;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(na || (na = {}));
var ej = function(n) {
  var a = n.mounted, o = n.wrapperComponent, l = n.contentComponent, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = s.limitToBounds, h = n.state.scale, v = f.disabled;
  if (v || d || !a || !o || !l)
    return !1;
  if (!m)
    return !0;
  var g = o.offsetWidth < l.offsetWidth * h || o.offsetHeight < l.offsetHeight * h;
  return g;
}, tj = function(n) {
  var a = n.mounted, o = n.velocity, l = n.bounds, s = n.setup, d = s.disabled, f = s.velocityAnimation, m = f.disabled, h = !m && !d && a;
  return !(!h || !o || !l);
};
function nj(n, a) {
  var o = n.setup.velocityAnimation, l = o.animationTime, s = o.maxAnimationTime, d = o.inertia;
  return Math.min(l * Math.max(1, Math.abs(a / d)), s);
}
function S_(n, a, o, l, s, d, f, m, h, v) {
  if (s) {
    if (a > f && o > f) {
      var g = f + (n - f) * v;
      return g > h ? h : g < f ? f : g;
    }
    if (a < d && o < d) {
      var g = d + (n - d) * v;
      return g < m ? m : g > d ? d : g;
    }
  }
  return l ? a : Vo(n, d, f, s);
}
function aj(n) {
  var a = 1, o = n.offsetWidth / window.innerWidth;
  return Number.isNaN(o) ? a : Math.min(a, o);
}
var Dc = function(n, a, o) {
  var l = 0, s = n * o;
  return Number.isNaN(s) ? l : n < 0 ? Math.max(s, -a) : Math.min(s, a);
};
function ij(n, a, o) {
  var l, s, d = ej(n);
  if (d) {
    var f = n.lastMousePosition, m = n.velocityTime, h = n.setup, v = n.wrapperComponent, g = h.velocityAnimation, b = g.maxStrengthMouse, S = g.maxStrengthTouch, w = g.sensitivityTouch, z = g.sensitivityMouse, R = Date.now();
    if (f && m && v) {
      var O = aj(v), X = (l = {}, l[na.TOUCH] = w, l[na.MOUSE] = z, l)[o], I = (s = {}, s[na.TOUCH] = S, s[na.MOUSE] = b, s)[o], q = a.x - f.x, Q = a.y - f.y, K = Dc(q / O, I, X), J = Dc(Q / O, I, X), G = R - m, oe = q * q + Q * Q, Z = Dc(Math.sqrt(oe) / G, I, X);
      n.velocity = { velocityX: K, velocityY: J, total: Z };
    }
    n.lastMousePosition = a, n.velocityTime = R;
  }
}
function oj(n) {
  var a = n.velocity, o = n.bounds, l = n.setup, s = n.wrapperComponent, d = tj(n);
  if (!(!d || !a || !o || !s)) {
    var f = a.velocityX, m = a.velocityY, h = a.total, v = o.maxPositionX, g = o.minPositionX, b = o.maxPositionY, S = o.minPositionY, w = l.limitToBounds, z = l.autoAlignment, R = l.zoomAnimation, O = l.panning, X = O.lockAxisY, I = O.lockAxisX, q = R.animationType, Q = z.sizeX, K = z.sizeY, J = z.velocityAlignmentTime, G = J, oe = nj(n, h), Z = Math.max(oe, G), P = aa(n, Q), ie = aa(n, K), ce = P * s.offsetWidth / 100, Ce = ie * s.offsetHeight / 100, te = v + ce, ae = g - ce, A = b + Ce, L = S - Ce, ee = n.state, me = (/* @__PURE__ */ new Date()).getTime();
    Ov(n, q, Z, function(ye) {
      var x = n.state, $ = x.scale, W = x.positionX, ne = x.positionY, _e = (/* @__PURE__ */ new Date()).getTime() - me, pe = _e / G, Se = Mv[z.animationType], $e = 1 - Se(Math.min(1, pe)), Ye = 1 - ye, Bt = W + f * Ye, It = ne + m * Ye, Cn = S_(Bt, ee.positionX, W, I, w, g, v, ae, te, $e), rn = S_(It, ee.positionY, ne, X, w, S, b, L, A, $e);
      if (W !== Bt || ne !== It) {
        n.setState($, Cn, rn);
        var gt = n.props.onPanning;
        gt && gt(Me(n), {});
      }
    });
  }
}
function w_(n, a) {
  var o = n.state, l = o.scale, s = o.positionX, d = o.positionY;
  n.panStartPosition = { x: s, y: d }, on(n), Di(n, l), window.TouchEvent !== void 0 && a instanceof TouchEvent ? Wz(n, a) : Pz(n, a);
}
function Dv(n, a) {
  var o = n.state.scale, l = n.setup, s = l.minScale, d = l.autoAlignment, f = d.disabled, m = d.sizeX, h = d.sizeY, v = d.animationTime, g = d.animationType, b = f || o < s || !m && !h;
  if (!b) {
    var S = Fz(n);
    S && ra(n, S, v, g);
  }
}
function k_(n, a, o, l) {
  var s = n.startCoords, d = n.setup, f = d.autoAlignment, m = f.sizeX, h = f.sizeY;
  if (s) {
    var v = Iz(n, a, o), g = v.x, b = v.y, S = aa(n, m), w = aa(n, h);
    ij(n, { x: g, y: b }, l), Nv(n, g, b, S, w);
  }
}
function rj(n, a) {
  if (n.isPanning) {
    var o = n.velocity, l = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var d = n.state, f = d.positionX, m = d.positionY, h = d.scale, v = n.panStartPosition;
    if (n.panStartPosition = null, v) {
      var g = f - v.x, b = m - v.y;
      if (g * g + b * b <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var S = l?.offsetWidth || 0, w = l?.offsetHeight || 0, z = (s?.offsetWidth || 0) * h, R = (s?.offsetHeight || 0) * h, O = !n.setup.limitToBounds || S < z || w < R, X = !a && o && o.total > 0.1 && O;
    X ? oj(n) : Dv(n);
  }
}
function gd(n, a, o, l) {
  var s = n.setup, d = s.minScale, f = s.maxScale, m = s.limitToBounds, h = Fo(Ca(a, 2), d, f, 0, !1), v = Di(n, h), g = Il(n, o, l, h, v, m), b = g.x, S = g.y;
  return { scale: h, positionX: b, positionY: S };
}
function bd(n, a, o) {
  var l = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.minScale, m = d.maxScale, h = d.limitToBounds, v = d.zoomAnimation, g = v.disabled, b = v.animationTime, S = v.animationType, w = l >= f && l <= m, z = g || w;
  if ((l >= 1 || h) && Dv(n), !(z || !s || !n.mounted)) {
    var R = a || s.offsetWidth / 2, O = o || s.offsetHeight / 2, X = l < f ? f : m, I = gd(n, X, R, O);
    I && ra(n, I, b, S);
  }
}
var Wt = function() {
  return Wt = Object.assign || function(a) {
    for (var o, l = 1, s = arguments.length; l < s; l++) {
      o = arguments[l];
      for (var d in o) Object.prototype.hasOwnProperty.call(o, d) && (a[d] = o[d]);
    }
    return a;
  }, Wt.apply(this, arguments);
};
function x_(n, a, o) {
  for (var l = 0, s = a.length, d; l < s; l++)
    (d || !(l in a)) && (d || (d = Array.prototype.slice.call(a, 0, l)), d[l] = a[l]);
  return n.concat(d || Array.prototype.slice.call(a));
}
var Rc = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, Ea = {
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
}, Pc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, Rv = function(n) {
  var a, o, l, s, d, f, m, h, v, g = Math.max((a = n.minScale) !== null && a !== void 0 ? a : Ea.minScale, 1e-7), b = (o = n.maxScale) !== null && o !== void 0 ? o : Ea.maxScale, S = (l = n.initialScale) !== null && l !== void 0 ? l : Rc.scale, w = Math.min(Math.max(S, g), b), z = Vo((s = n.initialPositionX) !== null && s !== void 0 ? s : Rc.positionX, (d = n.minPositionX) !== null && d !== void 0 ? d : -1 / 0, (f = n.maxPositionX) !== null && f !== void 0 ? f : 1 / 0, n.minPositionX != null || n.maxPositionX != null), R = Vo((m = n.initialPositionY) !== null && m !== void 0 ? m : Rc.positionY, (h = n.minPositionY) !== null && h !== void 0 ? h : -1 / 0, (v = n.maxPositionY) !== null && v !== void 0 ? v : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: w,
    scale: w,
    positionX: z,
    positionY: R
  };
}, z_ = function(n) {
  var a = Wt({}, Ea);
  return Object.keys(n).forEach(function(o) {
    var l = o, s = typeof n[l] < "u", d = typeof Ea[l] < "u";
    if (d && s) {
      var f = Object.prototype.toString.call(Ea[l]), m = f === "[object Object]", h = f === "[object Array]";
      m ? a[l] = Wt(Wt({}, Ea[l]), n[l]) : h ? a[l] = x_(x_([], Ea[l], !0), n[l]) : a[l] = n[l];
    }
  }), a.minScale <= 0 && (a.minScale = 1e-7), a;
}, Zv = function(n, a, o) {
  var l = n.state.scale, s = n.wrapperComponent, d = n.setup, f = d.maxScale, m = d.minScale, h = d.zoomAnimation, v = d.smooth, g = h.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var b = v ? l * Math.exp(a * o) : l + a * o, S = Fo(Ca(b, 3), m, f, g, !1);
  return S;
};
function Uv(n, a, o, l, s) {
  var d, f, m = n.wrapperComponent, h = n.state, v = h.scale, g = h.positionX, b = h.positionY, S = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var w = S.disabled ? 0 : l, z = m.offsetWidth, R = m.offsetHeight, O = (z / 2 - g) / v, X = (R / 2 - b) / v, I = Zv(n, a, o), q = gd(n, I, O, X);
  if (!q)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var Q = n.props, K = Q.onZoomStart, J = Q.onZoom, G = Q.onZoomStop, oe = new MouseEvent("mousemove", { bubbles: !0 }), Z = Me(n);
  De(Z, oe, K), De(Z, oe, J), ra(n, q, w, s);
  var P = (f = (d = m.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
  P && P.setTimeout(function() {
    n.mounted && De(Me(n), oe, G);
  }, w);
}
function $v(n, a, o, l) {
  var s, d, f = n.setup, m = n.wrapperComponent, h = n.contentComponent, v = f.limitToBounds, g = f.centerOnInit, b = Rv(n.props), S = n.state, w = S.scale, z = S.positionX, R = S.positionY;
  if (m) {
    var O = b.positionX, X = b.positionY;
    if (g && h) {
      var I = Sd(b.scale, m, h);
      O = I.positionX, X = I.positionY;
    }
    var q = yd(n, b.scale), Q = Wo(O, X, q, v, 0, 0, m), K = {
      scale: b.scale,
      positionX: Q.x,
      positionY: Q.y
    };
    if (!(w === b.scale && z === b.positionX && R === b.positionY)) {
      l?.();
      var J = n.props, G = J.onZoomStart, oe = J.onZoom, Z = J.onZoomStop, P = new MouseEvent("mousemove", { bubbles: !0 }), ie = Me(n);
      De(ie, P, G), De(ie, P, oe), ra(n, K, a, o);
      var ce = (d = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
      ce && ce.setTimeout(function() {
        n.mounted && De(Me(n), P, Z);
      }, a);
    }
  }
}
function lj(n, a, o, l) {
  var s = n.getBoundingClientRect(), d = a.getBoundingClientRect(), f = o.getBoundingClientRect(), m = d.x * l.scale, h = d.y * l.scale;
  return {
    x: (s.x - f.x + m) / l.scale,
    y: (s.y - f.y + h) / l.scale
  };
}
function sj(n, a, o, l, s) {
  l === void 0 && (l = 0), s === void 0 && (s = 0);
  var d = n.wrapperComponent, f = n.contentComponent, m = n.state, h = n.setup, v = h.limitToBounds, g = h.minScale, b = h.maxScale;
  if (!d || !f)
    return m;
  var S = d.getBoundingClientRect(), w = a.getBoundingClientRect(), z = lj(a, d, f, m), R = z.x, O = z.y, X = w.width / m.scale, I = w.height / m.scale, q = d.offsetWidth / X, Q = d.offsetHeight / I, K = Fo(o || Math.min(q, Q), g, b, 0, !1), J = (S.width - X * K) / 2, G = (S.height - I * K) / 2, oe = (S.left - R) * K + J + l, Z = (S.top - O) * K + G + s, P = yd(n, K), ie = Wo(oe, Z, P, v, 0, 0, d), ce = ie.x, Ce = ie.y;
  return { positionX: ce, positionY: Ce, scale: K };
}
var uj = function(n) {
  return function(a, o, l) {
    a === void 0 && (a = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Uv(n, 1, a, o, l);
  };
}, cj = function(n) {
  return function(a, o, l) {
    a === void 0 && (a = 0.5), o === void 0 && (o = 300), l === void 0 && (l = "easeOut"), Uv(n, -1, a, o, l);
  };
}, dj = function(n) {
  return function(a, o, l, s, d) {
    s === void 0 && (s = 300), d === void 0 && (d = "easeOut");
    var f = n.state, m = f.positionX, h = f.positionY, v = f.scale, g = n.wrapperComponent, b = n.contentComponent, S = n.setup.disabled;
    if (!(S || !g || !b)) {
      var w = {
        positionX: Number.isNaN(a) ? m : a,
        positionY: Number.isNaN(o) ? h : o,
        scale: Number.isNaN(l) ? v : l
      };
      ra(n, w, s, d);
    }
  };
}, fj = function(n) {
  return function(a, o) {
    a === void 0 && (a = 200), o === void 0 && (o = "easeOut"), $v(n, a, o);
  };
}, mj = function(n) {
  return function(a, o, l) {
    o === void 0 && (o = 200), l === void 0 && (l = "easeOut");
    var s = n.state, d = n.wrapperComponent, f = n.contentComponent;
    if (d && f) {
      var m = Sd(a || s.scale, d, f);
      ra(n, m, o, l);
    }
  };
}, pj = function(n) {
  return function(a, o, l, s, d, f) {
    l === void 0 && (l = 600), s === void 0 && (s = "easeOut"), d === void 0 && (d = 0), f === void 0 && (f = 0), on(n);
    var m = n.wrapperComponent, h = typeof a == "string" ? document.getElementById(a) : a;
    if (m && h && m.contains(h)) {
      var v = sj(n, h, o, d, f);
      ra(n, v, l, s);
    }
  };
}, Vl = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: uj(n),
    zoomOut: cj(n),
    setTransform: dj(n),
    resetTransform: fj(n),
    centerView: mj(n),
    zoomToElement: pj(n)
  };
}, hj = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, Me = function(n) {
  var a = {};
  return Object.assign(a, hj(n)), Object.assign(a, Vl(n)), a;
}, Zc = !1;
function Uc() {
  try {
    var n = {
      get passive() {
        return Zc = !0, !1;
      }
    };
    return n;
  } catch {
    return Zc = !1, Zc;
  }
}
var Cl = ".".concat(Pc.wrapperClass), Io = function(n, a) {
  return a.some(function(o) {
    return n.matches("".concat(Cl, " ").concat(o, ", ").concat(Cl, " .").concat(o, ", ").concat(Cl, " ").concat(o, " *, ").concat(Cl, " .").concat(o, " *"));
  });
}, Go = function(n) {
  n && clearTimeout(n);
}, _j = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, Yv = function(n, a, o) {
  var l = _j(o);
  return "translate(".concat(n, "px, ").concat(a, "px) scale(").concat(l, ")");
}, Sd = function(n, a, o) {
  var l = o.offsetWidth * n, s = o.offsetHeight * n, d = (a.offsetWidth - l) / 2, f = (a.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: d,
    positionY: f
  };
};
function vj(n, a) {
  n != null && (typeof n == "function" ? n(a) : n.current = a);
}
function yj(n) {
  return function(a) {
    n.forEach(function(o) {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var Bv = function(n, a) {
  var o = n.setup.wheel, l = o.disabled, s = o.wheelDisabled, d = o.touchPadDisabled, f = o.excluded, m = n.isInitialized, h = n.isPanning, v = a.target, g = m && !h && !l && v;
  if (!g || s && !a.ctrlKey || d && a.ctrlKey)
    return !1;
  var b = Io(v, f);
  if (b)
    return !1;
  var S = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!S;
}, gj = function(n, a) {
  var o = n.setup, l = o.disabled, s = o.trackPadPanning, d = s.activationKeys, f = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || l || s.disabled || a.ctrlKey)
    return !1;
  var m = Bv(n, a);
  if (m)
    return !1;
  var h = a.target, v = Io(h, f);
  if (v)
    return !1;
  var g = n.isPressingKeys(d);
  return !!g;
}, bj = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Sj(n, a) {
  var o = bj(n), l = Oz(a, o);
  return l;
}
function Hv(n, a, o) {
  var l = a.getBoundingClientRect(), s = 0, d = 0;
  if ("clientX" in n)
    s = (n.clientX - l.left) / o, d = (n.clientY - l.top) / o;
  else {
    var f = n.touches[0];
    s = (f.clientX - l.left) / o, d = (f.clientY - l.top) / o;
  }
  return (Number.isNaN(s) || Number.isNaN(d)) && console.error("No mouse or touch offset found"), {
    x: s,
    y: d
  };
}
var wj = function(n, a, o, l, s) {
  var d = n.state.scale, f = n.wrapperComponent, m = n.setup, h = m.maxScale, v = m.minScale, g = m.zoomAnimation, b = m.disablePadding, S = g.size, w = g.disabled;
  if (!f)
    throw new Error("Wrapper is not mounted");
  var z = d + a * o, R = l ? !1 : !w, O = Fo(z, v, h, S, R && !b);
  return O;
}, Xv = function(n, a) {
  var o = n.previousWheelEvent, l = n.state.scale, s = n.setup, d = s.maxScale, f = s.minScale;
  return o ? l < d || l > f || Math.sign(o.deltaY) !== Math.sign(a.deltaY) || o.deltaY > 0 && o.deltaY < a.deltaY || o.deltaY < 0 && o.deltaY > a.deltaY || Math.sign(o.deltaY) !== Math.sign(a.deltaY) : !1;
}, kj = function(n, a) {
  var o = n.setup.pinch, l = o.disabled, s = o.excluded, d = n.isInitialized, f = a.target, m = d && !l && f;
  if (!m)
    return !1;
  var h = Io(f, s);
  return !h;
}, xj = function(n) {
  var a = n.setup.pinch.disabled, o = n.isInitialized, l = n.pinchStartDistance, s = o && !a && l !== null;
  return !!s;
}, zj = function(n, a, o) {
  var l = o.getBoundingClientRect(), s = n.touches, d = s[0].clientX - l.left, f = s[0].clientY - l.top, m = s[1].clientX - l.left, h = s[1].clientY - l.top;
  return {
    x: (d + m) / 2 / a,
    y: (f + h) / 2 / a
  };
}, qv = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, jj = 5, Tj = function(n, a) {
  var o = n.pinchStartScale, l = n.pinchStartDistance, s = n.setup, d = s.maxScale, f = s.minScale, m = s.zoomAnimation, h = s.disablePadding, v = s.pinch, g = m.size, b = m.disabled, S = v.step;
  if (!o || l === null)
    throw new Error("Pinch touches distance was not provided");
  if (a < 0)
    return n.state.scale;
  var w = a / l, z = w * o, R = (z - o) * (S / jj), O = o + R, X = O === 1 / 0 ? 0 : Ca(O, 10);
  return Fo(X, f, d, g, !b && !h);
}, Lv = 160, Vv = 100, Aj = function(n, a) {
  var o = n.props, l = o.onWheelStart, s = o.onZoomStart;
  n.wheelStopEventTimer || (on(n), De(Me(n), a, l), De(Me(n), a, s));
}, Ej = function(n, a) {
  var o = n.props, l = o.onWheel, s = o.onZoom, d = n.contentComponent, f = n.setup, m = n.state, h = m.scale, v = f.limitToBounds, g = f.centerZoomedOut, b = f.zoomAnimation, S = f.wheel, w = f.disablePadding, z = f.smooth, R = b.size, O = b.disabled, X = S.step;
  if (!d)
    throw new Error("Component not mounted");
  a.preventDefault(), a.stopPropagation();
  var I = Sj(a, null), q = z ? X * Math.abs(a.deltaY) : X, Q = wj(n, I, q, !a.ctrlKey);
  if (h !== Q) {
    var K = Di(n, Q), J = Hv(a, d, h), G = O || R === 0 || g || w, oe = v && G, Z = Il(n, J.x, J.y, Q, K, oe), P = Z.x, ie = Z.y;
    n.previousWheelEvent = a, n.setState(Q, P, ie), De(Me(n), a, l), De(Me(n), a, s);
  }
}, Mj = function(n, a) {
  var o = n.props, l = o.onWheelStop, s = o.onZoomStop;
  Go(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (bd(n, a.x, a.y), n.wheelAnimationTimer = null);
  }, Vv);
  var d = Xv(n, a);
  d && (Go(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, De(Me(n), a, l), De(Me(n), a, s));
  }, Lv));
}, Cj = function(n, a) {
  var o = n.props, l = o.onWheelStart, s = o.onPanningStart;
  n.wheelStopEventTimer || (on(n), De(Me(n), a, l), De(Me(n), a, s));
}, Oj = function(n, a) {
  var o = n.props, l = o.onWheelStop, s = o.onPanningStop;
  Go(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (bd(n, a.x, a.y), n.wheelAnimationTimer = null);
  }, Vv);
  var d = Xv(n, a);
  d && (Go(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, De(Me(n), a, l), De(Me(n), a, s));
  }, Lv));
}, Gv = function(n) {
  for (var a = 0, o = 0, l = 0; l < 2; l += 1)
    a += n.touches[l].clientX, o += n.touches[l].clientY;
  var s = a / 2, d = o / 2;
  return { x: s, y: d };
}, Nj = function(n, a) {
  var o = qv(a);
  n.pinchStartDistance = o, n.lastDistance = o, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Gv(a), on(n);
}, Dj = function(n, a) {
  var o = n.contentComponent, l = n.pinchStartDistance, s = n.wrapperComponent, d = n.pinchPreviousCenter, f = n.state.scale, m = n.setup, h = m.limitToBounds, v = m.centerZoomedOut, g = m.zoomAnimation, b = m.autoAlignment, S = m.pinch, w = m.panning, z = g.disabled, R = g.size, O = S.allowPanning;
  if (!(l === null || !o)) {
    var X = zj(a, f, o);
    if (!(!Number.isFinite(X.x) || !Number.isFinite(X.y))) {
      var I = qv(a), q = Tj(n, I), Q = Gv(a), K = f / q, J = (Q.x - (d?.x || 0)) * K, G = (Q.y - (d?.y || 0)) * K;
      if (!(q === f && J === 0 && G === 0)) {
        n.pinchPreviousCenter = Q;
        var oe = Di(n, q), Z = z || R === 0 || v, P = h && Z, ie = Il(n, X.x, X.y, q, oe, P), ce = ie.x, Ce = ie.y;
        if (n.pinchMidpoint = X, n.lastDistance = I, w.disabled || !O)
          n.setState(q, ce, Ce);
        else {
          var te = b.sizeX, ae = b.sizeY, A = aa(n, te, q), L = aa(n, ae, q), ee = ce + J, me = Ce + G, ye = Wo(ee, me, oe, h, A, L, s), x = ye.x, $ = ye.y;
          n.setState(q, x, $);
        }
      }
    }
  }
}, Rj = function(n) {
  var a = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, bd(n, a?.x, a?.y);
}, Qv = function(n, a) {
  var o = n.props.onZoomStop, l = n.setup.doubleClick.animationTime;
  Go(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, De(Me(n), a, o);
  }, l);
}, Zj = function(n, a) {
  var o = n.props, l = o.onZoomStart, s = o.onZoom, d = n.setup.doubleClick, f = d.animationTime, m = d.animationType;
  De(Me(n), a, l), $v(n, f, m, function() {
    return De(Me(n), a, s);
  }), Qv(n, a);
};
function Uj(n, a) {
  return n === "toggle" ? a === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function $j(n, a) {
  var o = n.setup, l = n.doubleClickStopEventTimer, s = n.state, d = n.contentComponent, f = s.scale, m = n.props, h = m.onZoomStart, v = m.onZoom, g = o.doubleClick, b = g.disabled, S = g.mode, w = g.step, z = g.animationTime, R = g.animationType;
  if (!b && !l) {
    if (S === "reset")
      return Zj(n, a);
    if (!d)
      return console.error("No ContentComponent found");
    var O = Uj(S, n.state.scale), X = Zv(n, O, w);
    if (f !== X) {
      De(Me(n), a, h);
      var I = Hv(a, d, f), q = gd(n, X, I.x, I.y);
      if (!q)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      De(Me(n), a, v), ra(n, q, z, R), Qv(n, a);
    }
  }
}
var Yj = function(n, a) {
  var o = n.isInitialized, l = n.setup, s = n.wrapperComponent, d = l.doubleClick, f = d.disabled, m = d.excluded, h = a.target, v = s?.contains(h), g = o && h && v && !f;
  if (!g)
    return !1;
  var b = Io(h, m);
  return !b;
}, Bj = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(a) {
      var o = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        o.initializeWindowEvents();
      }, this.unmount = function() {
        o.cleanupWindowEvents();
      }, this.update = function(l) {
        o.props = l, o.wrapperComponent && o.contentComponent && Di(o, o.state.scale), o.setup = z_(l);
      }, this.initializeWindowEvents = function() {
        var l, s, d, f, m = Uc(), h = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, v = h?.defaultView;
        (s = o.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", o.onWheelPanning, m), (d = o.wrapperComponent) === null || d === void 0 || d.addEventListener("keyup", o.setKeyUnPressed, m), (f = o.wrapperComponent) === null || f === void 0 || f.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("mousedown", o.onPanningStart, m), v?.addEventListener("mousemove", o.onPanning, m), v?.addEventListener("mouseup", o.onPanningStop, m), h?.addEventListener("mouseleave", o.clearPanning, m), v?.addEventListener("keyup", o.setKeyUnPressed, m), v?.addEventListener("keydown", o.setKeyPressed, m), v?.addEventListener("blur", o.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var l, s, d, f, m, h = Uc(), v = (l = o.wrapperComponent) === null || l === void 0 ? void 0 : l.ownerDocument, g = v?.defaultView;
        g?.removeEventListener("mousedown", o.onPanningStart, h), g?.removeEventListener("mousemove", o.onPanning, h), g?.removeEventListener("mouseup", o.onPanningStop, h), v?.removeEventListener("mouseleave", o.clearPanning, h), g?.removeEventListener("keyup", o.setKeyUnPressed, h), g?.removeEventListener("keydown", o.setKeyPressed, h), g?.removeEventListener("blur", o.handleWindowBlur), document.removeEventListener("mouseleave", o.clearPanning, h), (s = o.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", o.onWheelPanning, h), (d = o.wrapperComponent) === null || d === void 0 || d.removeEventListener("keyup", o.setKeyUnPressed, h), (f = o.wrapperComponent) === null || f === void 0 || f.removeEventListener("keydown", o.setKeyPressed, h), on(o), (m = o.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(l) {
        var s = Uc();
        l.addEventListener("wheel", o.onWheelZoom, s), l.addEventListener("dblclick", o.onDoubleClick, s), l.addEventListener("touchstart", o.onTouchPanningStart, s), l.addEventListener("touchmove", o.onTouchPanning, s), l.addEventListener("touchend", o.onTouchPanningStop, s);
      }, this.handleInitialize = function(l) {
        var s = o.setup.centerOnInit;
        o.applyTransformation(), o.onInitCallbacks.forEach(function(d) {
          return d(Me(o));
        }), s && (o.setCenter(), o.observer = new ResizeObserver(function() {
          var d, f = l.offsetWidth, m = l.offsetHeight;
          (f > 0 || m > 0) && (o.onInitCallbacks.forEach(function(h) {
            return h(Me(o));
          }), o.setCenter(), (d = o.observer) === null || d === void 0 || d.disconnect());
        }), setTimeout(function() {
          var d;
          (d = o.observer) === null || d === void 0 || d.disconnect();
        }, 5e3), o.observer.observe(l));
      }, this.onWheelZoom = function(l) {
        var s = o.setup.disabled;
        if (!s) {
          o.syncModifierKeys(l);
          var d = Bv(o, l);
          d && (Aj(o, l), Ej(o, l), Mj(o, l));
        }
      }, this.onWheelPanning = function(l) {
        var s = o.props.onPanning, d = o.setup.trackPadPanning, f = d.lockAxisX, m = d.lockAxisY;
        o.syncModifierKeys(l);
        var h = gj(o, l);
        if (h) {
          l.preventDefault(), l.stopPropagation();
          var v = o.state, g = v.positionX, b = v.positionY, S = g - l.deltaX, w = b - l.deltaY, z = f ? g : S, R = m ? b : w, O = o.setup.autoAlignment, X = O.sizeX, I = O.sizeY, q = aa(o, X), Q = aa(o, I);
          z === g && R === b || (Cj(o, l), Nv(o, z, R, q, Q), De(Me(o), l, s), Oj(o, l));
        }
      }, this.onPanningStart = function(l) {
        var s = o.setup.disabled, d = o.props.onPanningStart;
        if (!s) {
          o.syncModifierKeys(l);
          var f = g_(o, l);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.button === 0 && !o.setup.panning.allowLeftClickPan || l.button === 1 && !o.setup.panning.allowMiddleClickPan || l.button === 2 && !o.setup.panning.allowRightClickPan || (l.preventDefault(), l.stopPropagation(), on(o), w_(o, l), De(Me(o), l, d)));
          }
        }
      }, this.onPanning = function(l) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (!s) {
          if (o.syncModifierKeys(l), o.isPanning && l.buttons === 0) {
            o.clearPanning(l);
            return;
          }
          var f = b_(o);
          if (f) {
            var m = o.isPressingKeys(o.setup.panning.activationKeys);
            m && (l.preventDefault(), l.stopPropagation(), k_(o, l.clientX, l.clientY, na.MOUSE), De(Me(o), l, d));
          }
        }
      }, this.onPanningStop = function(l) {
        var s = o.setup.panning.velocityDisabled, d = o.props.onPanningStop;
        o.isPanning && (rj(o, s), De(Me(o), l, d));
      }, this.onPinchStart = function(l) {
        var s = o.setup.disabled, d = o.props.onPinchStart;
        if (!s) {
          var f = kj(o, l);
          f && (Nj(o, l), on(o), De(Me(o), l, d));
        }
      }, this.onPinch = function(l) {
        var s = o.setup.disabled, d = o.props.onPinch;
        if (!s) {
          var f = xj(o);
          f && (l.preventDefault(), l.stopPropagation(), Dj(o, l), De(Me(o), l, d));
        }
      }, this.onPinchStop = function(l) {
        var s = o.props.onPinchStop;
        o.pinchStartScale && (Rj(o), De(Me(o), l, s));
      }, this.onTouchPanningStart = function(l) {
        var s = o.setup, d = s.disabled, f = s.doubleClick, m = o.props.onPanningStart;
        if (!d) {
          var h = !f?.disabled, v = o.lastTouch && +/* @__PURE__ */ new Date() - o.lastTouch < 200;
          if (h && v && l.touches.length === 1)
            o.onDoubleClick(l);
          else {
            o.lastTouch = +/* @__PURE__ */ new Date(), on(o);
            var g = l.touches, b = g.length === 1, S = g.length === 2, w = g_(o, l);
            if (b) {
              if (!w)
                return;
              on(o), w_(o, l), De(Me(o), l, m);
            }
            S && o.onPinchStart(l);
          }
        }
      }, this.onTouchPanning = function(l) {
        var s = o.setup.disabled, d = o.props.onPanning;
        if (o.isPanning && l.touches.length === 1) {
          if (s)
            return;
          var f = b_(o);
          if (!f)
            return;
          l.cancelable && l.preventDefault(), l.stopPropagation();
          var m = l.touches[0];
          k_(o, m.clientX, m.clientY, na.TOUCH), De(Me(o), l, d);
        } else l.touches.length > 1 && o.onPinch(l);
      }, this.onTouchPanningStop = function(l) {
        o.onPanningStop(l), o.onPinchStop(l);
      }, this.onDoubleClick = function(l) {
        var s = o.setup.disabled;
        if (!s) {
          var d = Yj(o, l);
          d && $j(o, l);
        }
      }, this.clearPanning = function(l) {
        o.isPanning && o.onPanningStop(l);
      }, this.handleWindowBlur = function() {
        o.pressedKeys = {}, o.isPanning && (o.isPanning = !1, o.startCoords = null);
      }, this.syncModifierKeys = function(l) {
        var s = l.ctrlKey, d = l.metaKey, f = l.shiftKey, m = l.altKey;
        typeof s == "boolean" && (o.pressedKeys.Control = s), typeof d == "boolean" && (o.pressedKeys.Meta = d), typeof f == "boolean" && (o.pressedKeys.Shift = f), typeof m == "boolean" && (o.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(l) {
        o.pressedKeys[l.key] = !0;
      }, this.setKeyUnPressed = function(l) {
        o.pressedKeys[l.key] = !1;
      }, this.isPressingKeys = function(l) {
        return typeof l == "function" ? l(Object.entries(o.pressedKeys).filter(function(s) {
          var d = s[1];
          return d;
        }).map(function(s) {
          var d = s[0];
          return d;
        })) : l.length ? !!l.every(function(s) {
          return o.pressedKeys[s];
        }) : !0;
      }, this.setCenter = function() {
        if (o.wrapperComponent && o.contentComponent) {
          var l = Sd(o.state.scale, o.wrapperComponent, o.contentComponent);
          o.setState(l.scale, l.positionX, l.positionY);
        }
      }, this.handleTransformStyles = function(l, s, d) {
        return o.props.customTransform ? o.props.customTransform(l, s, d) : Yv(l, s, d);
      }, this.getContext = function() {
        return Me(o);
      }, this.applyTransformation = function() {
        if (!(!o.mounted || !o.contentComponent)) {
          var l = o.state, s = l.scale, d = l.positionX, f = l.positionY, m = o.handleTransformStyles(d, f, s);
          o.props.detached || (o.contentComponent.style.transform = m), o.onTransformCallbacks.forEach(function(h) {
            return h({
              scale: s,
              positionX: d,
              positionY: f,
              previousScale: o.state.previousScale,
              ref: Me(o)
            });
          });
        }
      }, this.setState = function(l, s, d) {
        var f = o.props.onTransform;
        if (!Number.isNaN(l) && !Number.isNaN(s) && !Number.isNaN(d)) {
          var m = Math.max(l, 1e-7);
          m !== o.state.scale && (o.state.previousScale = o.state.scale, o.state.scale = m), o.state.positionX = s, o.state.positionY = d, o.applyTransformation();
          var h = Me(o);
          o.onChangeCallbacks.forEach(function(v) {
            return v(h);
          }), De(h, { scale: o.state.scale, positionX: s, positionY: d }, f);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(l) {
        return o.onTransformCallbacks.has(l) || o.onTransformCallbacks.add(l), function() {
          o.onTransformCallbacks.delete(l);
        };
      }, this.onChange = function(l) {
        return o.onChangeCallbacks.has(l) || o.onChangeCallbacks.add(l), function() {
          o.onChangeCallbacks.delete(l);
        };
      }, this.onInit = function(l) {
        return o.onInitCallbacks.has(l) || o.onInitCallbacks.add(l), function() {
          o.onInitCallbacks.delete(l);
        };
      }, this.init = function(l, s) {
        o.cleanupWindowEvents(), o.wrapperComponent = l, o.contentComponent = s, Di(o, o.state.scale), o.handleInitializeWrapperEvents(l), o.handleInitialize(s), o.initializeWindowEvents(), o.isInitialized = !0;
        var d = Me(o);
        De(d, void 0, o.props.onInit), vj(o.props.ref, d);
      }, this.props = a, this.setup = z_(this.props), this.state = Rv(this.props);
    }
    return n;
  })()
), er = Gl.createContext(null), Hj = function(n, a) {
  return typeof n == "function" ? n(a) : n;
}, Xj = Gl.forwardRef(function(n, a) {
  var o = F.useRef(new Bj(n)).current, l = Hj(n.children, Vl(o));
  return F.useImperativeHandle(a, function() {
    return Vl(o);
  }, [o]), F.useEffect(function() {
    o.update(n);
  }, [o, n]), p.jsx(er.Provider, Wt({ value: o }, { children: l }));
});
Gl.forwardRef(function(n, a) {
  var o = F.useRef(null), l = F.useContext(er);
  return F.useEffect(function() {
    return l.onChange(function(s) {
      if (o.current) {
        var d = 0, f = 0;
        o.current.style.transform = l.handleTransformStyles(d, f, 1 / s.instance.state.scale);
      }
    });
  }, [l]), p.jsx("div", Wt({}, n, { ref: yj([o, a]) }));
});
function qj(n, a) {
  a === void 0 && (a = {});
  var o = a.insertAt;
  if (!(typeof document > "u")) {
    var l = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && l.firstChild ? l.insertBefore(s, l.firstChild) : l.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var Lj = `.transform-component-module_wrapper__SPB86 {
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
`, $c = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
qj(Lj);
var Vj = function(n) {
  var a = n.children, o = n.wrapperClass, l = o === void 0 ? "" : o, s = n.contentClass, d = s === void 0 ? "" : s, f = n.wrapperStyle, m = n.contentStyle, h = n.wrapperProps, v = h === void 0 ? {} : h, g = n.contentProps, b = g === void 0 ? {} : g, S = n.infinite, w = S === void 0 ? !1 : S, z = F.useContext(er), R = z.init, O = z.cleanupWindowEvents, X = F.useRef(null), I = F.useRef(null), q = F.useRef(null);
  return F.useEffect(function() {
    var Q = X.current, K = I.current;
    return Q !== null && K !== null && R && R?.(Q, K), function() {
      O?.();
    };
  }, []), F.useEffect(function() {
    if (w) {
      var Q = q.current;
      if (Q) {
        var K = function() {
          var J = z.state, G = J.positionX, oe = J.positionY;
          Q.style.backgroundPosition = "".concat(G, "px ").concat(oe, "px");
        };
        return K(), z.onChange(K);
      }
    }
  }, [w, z]), p.jsxs("div", Wt({}, v, { ref: X, className: "".concat(Pc.wrapperClass, " ").concat($c.wrapper, " ").concat(l), style: f }, { children: [w && p.jsx("div", { ref: q, className: $c.infiniteGrid, "aria-hidden": !0 }), p.jsx("div", Wt({}, b, { ref: I, className: "".concat(Pc.contentClass, " ").concat($c.content, " ").concat(d), style: Wt(Wt({}, m), { transform: Yv(z.state.positionX, z.state.positionY, z.state.scale) }) }, { children: a }))] }));
};
function Gj(n, a) {
  var o = Math.max(0, Math.min(n.x + n.width, a.x + a.width) - Math.max(n.x, a.x)), l = Math.max(0, Math.min(n.y + n.height, a.y + a.height) - Math.max(n.y, a.y));
  return o * l;
}
function Qj(n) {
  var a = n.elementX, o = n.elementY, l = n.elementWidth, s = n.elementHeight, d = n.scale, f = n.positionX, m = n.positionY, h = n.viewportWidth, v = n.viewportHeight, g = n.margin, b = g === void 0 ? 0 : g, S = n.threshold, w = S === void 0 ? 0 : S, z = {
    x: -b,
    y: -b,
    width: h + 2 * b,
    height: v + 2 * b
  }, R = {
    x: a * d + f,
    y: o * d + m,
    width: l * d,
    height: s * d
  };
  if (w <= 0) {
    var O = R.x < z.x + z.width && R.x + R.width > z.x, X = R.y < z.y + z.height && R.y + R.height > z.y;
    return O && X;
  }
  var I = R.width * R.height;
  if (I <= 0)
    return !1;
  var q = Gj(z, R);
  return q / I >= w;
}
Gl.forwardRef(function(n, a) {
  var o = n.x, l = n.y, s = n.width, d = n.height, f = n.margin, m = f === void 0 ? 0 : f, h = n.threshold, v = h === void 0 ? 0 : h, g = n.placeholder, b = g === void 0 ? null : g, S = n.onShow, w = n.onHide, z = n.children, R = n.className, O = n.style, X = F.useContext(er), I = F.useState(!1), q = I[0], Q = I[1], K = F.useRef(!1), J = F.useRef(S), G = F.useRef(w);
  return J.current = S, G.current = w, F.useEffect(function() {
    var oe = function() {
      var ie, ce, Ce = X.wrapperComponent;
      if (Ce) {
        var te = Qj({
          elementX: o,
          elementY: l,
          elementWidth: s,
          elementHeight: d,
          scale: X.state.scale,
          positionX: X.state.positionX,
          positionY: X.state.positionY,
          viewportWidth: Ce.offsetWidth,
          viewportHeight: Ce.offsetHeight,
          margin: m,
          threshold: v
        });
        te !== K.current && (K.current = te, Q(te), te ? (ie = J.current) === null || ie === void 0 || ie.call(J) : (ce = G.current) === null || ce === void 0 || ce.call(G));
      }
    };
    oe();
    var Z = X.onChange(oe), P;
    return X.wrapperComponent || (P = X.onInit(function() {
      return oe();
    })), function() {
      Z(), P?.();
    };
  }, [X, o, l, s, d, m, v]), q ? p.jsx("div", Wt({ ref: a, className: R, style: O }, { children: z })) : b ? p.jsx(p.Fragment, { children: b }) : null;
});
var Kj = function() {
  var n = F.useContext(er);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, Jj = function() {
  var n = Kj();
  return Vl(n);
};
const Wc = 24;
function Pj({ locked: n, zoneMode: a, hasZone: o, disabled: l, clearZoneLabel: s, onToggleLock: d, onClearZone: f }) {
  const { zoomIn: m, zoomOut: h, resetTransform: v } = Jj();
  return /* @__PURE__ */ p.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => m(), disabled: n || a, children: /* @__PURE__ */ p.jsx(w0, {}) }),
    /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => h(), disabled: n || a, children: /* @__PURE__ */ p.jsx(x0, {}) }),
    /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => v(), children: /* @__PURE__ */ p.jsx(Ic, {}) }),
    a ? /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": s, onClick: f, disabled: !o || l, children: /* @__PURE__ */ p.jsx(Bb, {}) }) : /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: d, children: n ? /* @__PURE__ */ p.jsx(N_, {}) : /* @__PURE__ */ p.jsx(Gb, {}) })
  ] });
}
function Wj(n, a, o) {
  const l = Math.min(Math.min(a, o), Math.max(Wc, Math.min(a, o) * 0.22));
  return Vc({
    x1: n.x - l / 2,
    y1: n.y - l / 2,
    x2: n.x + l / 2,
    y2: n.y + l / 2
  }, a, o);
}
function Fj({
  hass: n,
  floor: a,
  language: o,
  selected: l,
  launched: s,
  active: d,
  disabled: f,
  selectionMode: m,
  zone: h,
  zoneLaunched: v,
  onToggle: g,
  onZoneChange: b
}) {
  const [S, w] = F.useState(!0), [z, R] = F.useState({ width: 0, height: 0 }), [O, X] = F.useState({ width: 0, height: 0 }), [I, q] = F.useState(0), Q = F.useRef(null), K = F.useRef(void 0), J = F.useRef(h), G = n.states[a.map_entity], oe = F.useMemo(() => cd(G), [G]), Z = F.useMemo(() => Wl(G), [G]), P = F.useMemo(() => T2(a), [a]), ie = typeof G?.attributes.entity_picture == "string" ? G.attributes.entity_picture : void 0, ce = h ? Bo(h) : void 0;
  F.useEffect(() => {
    J.current = h;
  }, [h]), F.useEffect(() => {
    if (!d) return;
    const te = setInterval(() => q((ae) => ae + 1), 5e3);
    return () => {
      clearInterval(te), q(0);
    };
  }, [d]), F.useEffect(() => {
    const te = Q.current;
    if (!te) return;
    const ae = new ResizeObserver(([A]) => {
      X({ width: A.contentRect.width, height: A.contentRect.height });
    });
    return ae.observe(te), () => ae.disconnect();
  }, []);
  let Ce;
  return !G || G.state === "unavailable" ? Ce = D(o, "mapMissing") : ie ? Z.length < 3 ? Ce = D(o, "calibrationMissing") : m === "rooms" && oe.length === 0 && (Ce = D(o, "roomsMissing")) : Ce = D(o, "imageMissing"), Ce ? /* @__PURE__ */ p.jsx("div", { className: "map-error", role: "alert", children: Ce }) : /* @__PURE__ */ p.jsx("div", { className: `map-shell ${m === "zone" ? "zone-mode" : ""}`, ref: Q, children: /* @__PURE__ */ p.jsxs(
    Xj,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: S || m === "zone", step: 0.08 },
      pinch: { disabled: S || m === "zone" },
      panning: { disabled: S || m === "zone", excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ p.jsx(
          Pj,
          {
            locked: S,
            zoneMode: m === "zone",
            hasZone: !!h,
            disabled: f,
            clearZoneLabel: D(o, "clearZone"),
            onToggleLock: () => w((te) => !te),
            onClearZone: () => b(void 0)
          }
        ),
        /* @__PURE__ */ p.jsx(Vj, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!z.width || !z.height || !O.width || !O.height) return;
              const te = Math.min(O.width / z.width, O.height / z.height);
              return { width: z.width * te, height: z.height * te };
            })(),
            children: [
              /* @__PURE__ */ p.jsx(
                "img",
                {
                  src: (() => {
                    const te = n.hassUrl(ie);
                    if (te.startsWith("data:")) return te;
                    const ae = te.includes("?") ? "&" : "?", A = G?.last_updated ?? G?.state ?? "";
                    return `${te}${ae}v=${encodeURIComponent(A)}${d ? `&r=${I}` : ""}`;
                  })(),
                  alt: `${a.name} vacuum map`,
                  draggable: !1,
                  onLoad: (te) => R({ width: te.currentTarget.naturalWidth, height: te.currentTarget.naturalHeight })
                }
              ),
              z.width > 0 && z.height > 0 && /* @__PURE__ */ p.jsxs(
                "svg",
                {
                  className: `room-overlay ${m === "zone" ? "drawing-zone" : ""}`,
                  viewBox: `0 0 ${z.width} ${z.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": m === "zone" ? `${a.name} zone map` : `${a.name} rooms`,
                  onPointerDown: (te) => {
                    if (m !== "zone" || f) return;
                    const ae = te.currentTarget.getBoundingClientRect();
                    if (!ae.width || !ae.height) return;
                    const A = {
                      x: Math.min(z.width, Math.max(0, (te.clientX - ae.left) / ae.width * z.width)),
                      y: Math.min(z.height, Math.max(0, (te.clientY - ae.top) / ae.height * z.height))
                    }, L = te.target, ee = L.dataset.zoneHandle, me = ee ? "resize" : L.dataset.zoneMove === "true" && h ? "move" : "create";
                    if (K.current = { pointerId: te.pointerId, kind: me, origin: A, initial: h, handle: ee }, te.currentTarget.setPointerCapture?.(te.pointerId), me === "create") {
                      const ye = { x1: A.x, y1: A.y, x2: A.x, y2: A.y };
                      J.current = ye, b(ye);
                    }
                    te.preventDefault();
                  },
                  onPointerMove: (te) => {
                    const ae = K.current;
                    if (!ae || ae.pointerId !== te.pointerId || f) return;
                    const A = te.currentTarget.getBoundingClientRect();
                    if (!A.width || !A.height) return;
                    const L = {
                      x: Math.min(z.width, Math.max(0, (te.clientX - A.left) / A.width * z.width)),
                      y: Math.min(z.height, Math.max(0, (te.clientY - A.top) / A.height * z.height))
                    };
                    let ee;
                    if (ae.kind === "create")
                      ee = Bo({ x1: ae.origin.x, y1: ae.origin.y, x2: L.x, y2: L.y });
                    else if (ae.kind === "move" && ae.initial) {
                      const me = L.x - ae.origin.x, ye = L.y - ae.origin.y;
                      ee = Vc({
                        x1: ae.initial.x1 + me,
                        y1: ae.initial.y1 + ye,
                        x2: ae.initial.x2 + me,
                        y2: ae.initial.y2 + ye
                      }, z.width, z.height);
                    } else if (ae.initial && ae.handle)
                      ee = { ...ae.initial }, ae.handle.includes("w") && (ee.x1 = L.x), ae.handle.includes("e") && (ee.x2 = L.x), ae.handle.includes("n") && (ee.y1 = L.y), ae.handle.includes("s") && (ee.y2 = L.y), ee = Vc(ee, z.width, z.height);
                    else return;
                    J.current = ee, b(ee), te.preventDefault();
                  },
                  onPointerUp: (te) => {
                    const ae = K.current;
                    if (!ae || ae.pointerId !== te.pointerId) return;
                    const A = J.current && Bo(J.current);
                    if (ae.kind === "create" && A && (A.x2 - A.x1 < Wc || A.y2 - A.y1 < Wc)) {
                      const L = Wj(ae.origin, z.width, z.height);
                      J.current = L, b(L);
                    }
                    K.current = void 0, te.currentTarget.releasePointerCapture?.(te.pointerId), te.preventDefault();
                  },
                  onPointerCancel: (te) => {
                    K.current = void 0, te.currentTarget.releasePointerCapture?.(te.pointerId);
                  },
                  children: [
                    oe.map((te) => {
                      const ae = P.get(te.segment_id), A = ae ? Po(n, ae) : !1, L = !!ae?.area_id && !A, ee = A ? D(o, "roomAreaMissing") : D(o, "roomUnmapped"), me = l.has(te.segment_id), ye = s.has(te.segment_id), x = j2(te, Z), $ = ae?.name || te.source_name, W = f || m === "zone" || !L;
                      return /* @__PURE__ */ p.jsxs("g", { className: `room ${me ? "selected" : ""} ${ye ? "launched" : ""} ${L ? "" : "unmapped"}`, children: [
                        /* @__PURE__ */ p.jsx(
                          "path",
                          {
                            className: "room-hitbox",
                            d: z2(te, Z),
                            role: "button",
                            tabIndex: W ? -1 : 0,
                            "aria-label": `${$}${L ? "" : ` — ${ee}`}`,
                            "aria-pressed": me,
                            "aria-disabled": W,
                            onClick: () => !W && g(te.segment_id),
                            onKeyDown: (ne) => {
                              !W && (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), g(te.segment_id));
                            },
                            children: /* @__PURE__ */ p.jsx("title", { children: L ? $ : `${$}: ${ee}` })
                          }
                        ),
                        /* @__PURE__ */ p.jsxs("g", { className: "room-label", transform: `translate(${x.x} ${x.y})`, pointerEvents: "none", children: [
                          /* @__PURE__ */ p.jsx("circle", { r: "23" }),
                          /* @__PURE__ */ p.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ p.jsx(Jc, { icon: ae?.icon || "mdi:floor-plan" }) }),
                          /* @__PURE__ */ p.jsx("text", { y: "39", textAnchor: "middle", children: $ })
                        ] })
                      ] }, te.segment_id);
                    }),
                    m === "zone" && ce && /* @__PURE__ */ p.jsxs("g", { className: `zone-selection ${v ? "launched" : ""}`, children: [
                      /* @__PURE__ */ p.jsx(
                        "rect",
                        {
                          className: "zone-rectangle",
                          "data-zone-move": "true",
                          x: ce.x1,
                          y: ce.y1,
                          width: ce.x2 - ce.x1,
                          height: ce.y2 - ce.y1,
                          role: "img",
                          "aria-label": D(o, "selectedZone")
                        }
                      ),
                      [
                        ["nw", ce.x1, ce.y1],
                        ["ne", ce.x2, ce.y1],
                        ["se", ce.x2, ce.y2],
                        ["sw", ce.x1, ce.y2]
                      ].map(([te, ae, A]) => /* @__PURE__ */ p.jsx(
                        "circle",
                        {
                          className: "zone-handle",
                          "data-zone-handle": te,
                          cx: ae,
                          cy: A,
                          r: "12",
                          "aria-label": `${D(o, "resizeZone")} ${te}`
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
const Ij = {
  preparing: /* @__PURE__ */ p.jsx(Nh, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ p.jsx(Tb, {}),
  cleaning_upstairs: /* @__PURE__ */ p.jsx(Yc, {}),
  carry_downstairs: /* @__PURE__ */ p.jsx(M_, {}),
  finishing: /* @__PURE__ */ p.jsx(Nh, { className: "spin" }),
  complete: /* @__PURE__ */ p.jsx(Ob, {}),
  error: /* @__PURE__ */ p.jsx(Ic, {}),
  idle: /* @__PURE__ */ p.jsx(Yc, {})
}, j_ = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function eT({
  language: n,
  stage: a,
  roomNames: o,
  pending: l,
  onStart: s,
  onFinish: d,
  onReset: f,
  onCancel: m
}) {
  if (a === "idle") return null;
  const h = D(n, j_[a].title), v = D(n, j_[a].description), g = !["complete", "error"].includes(a);
  return /* @__PURE__ */ p.jsxs("section", { className: `assisted-panel assisted-${a}`, "aria-live": "polite", children: [
    /* @__PURE__ */ p.jsx("div", { className: "assisted-icon", children: Ij[a] }),
    /* @__PURE__ */ p.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ p.jsx("strong", { children: h }),
      /* @__PURE__ */ p.jsx("p", { children: v }),
      o.length > 0 && /* @__PURE__ */ p.jsx("small", { children: o.join(" · ") })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "assisted-actions", children: [
      a === "carry_upstairs" && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", disabled: l, onClick: s, children: [
        /* @__PURE__ */ p.jsx(D_, {}),
        D(n, "startUpstairs")
      ] }),
      a === "carry_downstairs" && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "primary", disabled: l, onClick: d, children: [
        /* @__PURE__ */ p.jsx(M_, {}),
        D(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(a) && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "secondary", disabled: l, onClick: f, children: [
        /* @__PURE__ */ p.jsx(Ic, {}),
        D(n, "newUpstairsJob")
      ] }),
      g && /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", disabled: l, onClick: m, children: D(n, "cancel") })
    ] })
  ] });
}
function Ro(n, a) {
  if (!a) return;
  const o = n.states[a];
  return !o || ["unknown", "unavailable"].includes(o.state) ? void 0 : `${o.attributes.device_class === "duration" && !isNaN(Number(o.state)) ? String(Math.round(Number(o.state))) : o.state}${o.attributes.unit_of_measurement ? ` ${o.attributes.unit_of_measurement}` : ""}`;
}
function tT(n, a, o) {
  if (!a) return;
  const l = n.states[a];
  if (!l || ["unknown", "unavailable"].includes(l.state)) return;
  const s = Number(l.state);
  if (!Number.isFinite(s) || s < 0) return;
  const d = String(l.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[d];
  if (m === void 0) return;
  const h = s * m, v = Math.max(0, Math.round(h)), g = Math.floor(v / 60), b = v % 60;
  return `${[
    g > 0 ? `${g} ${D(o, "hourShort")}` : void 0,
    b > 0 || g === 0 ? `${b} ${D(o, "minuteShort")}` : void 0
  ].filter(Boolean).join(" ")} ${D(o, "remaining")}`;
}
function nT(n, a) {
  if (a === "washing_the_mop") return D(n, "washingMop");
}
function aT(n, a) {
  const o = new Date(n);
  if (isNaN(o.getTime())) return;
  const l = Date.now() - o.getTime();
  if (l < 0) return;
  const s = Math.floor(l / 6e4);
  if (s < 1) return D(a, "justNow");
  if (s < 60) return `${s} ${D(a, "minuteShort")} ${D(a, "ago")}`;
  const d = Math.floor(s / 60);
  if (d < 24) return `${d} ${D(a, "hourShort")} ${D(a, "ago")}`;
  const f = Math.floor(d / 24);
  return f === 1 ? D(a, "yesterday") : `${f} ${D(a, "daysAgo")}`;
}
function iT(n, a) {
  const o = n.entities?.map_select ? a.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((l) => l.map_select_option === o) ?? n.floors[0];
}
function oT({ hass: n, config: a }) {
  const o = F.useRef(n), l = F.useRef(!1), s = a.language, [d, f] = F.useState(() => iT(a, n).id), m = a.floors.find((V) => V.id === d) ?? a.floors[0], [h, v] = F.useState("rooms"), [g, b] = F.useState(/* @__PURE__ */ new Set()), [S, w] = F.useState(), [z, R] = F.useState(!1), [O, X] = F.useState(!1), [I, q] = F.useState(!1), [Q, K] = F.useState(!1), [J, G] = F.useState(), [oe, Z] = F.useState(), [P, ie] = F.useState({ phase: "idle" }), ce = F.useMemo(() => Da(n, a), [n, a]), Ce = F.useMemo(() => Tv(n, a), [n, a]), te = Av(Ce), ae = F.useMemo(() => Sx(n, a), [n, a]), A = JSON.stringify(ae), [L, ee] = F.useState(), me = F.useMemo(() => Fl(a, ce, m), [a, ce, m]), ye = me.find(({ preset: V, available: ue }) => V.id === a.default_preset && ue)?.preset ?? me.find(({ available: V }) => V)?.preset, [x, $] = F.useState(
    () => Ho(ye ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), W = n.states[a.entity], ne = Vx(n, a), _e = a.entities?.assisted_carry_job ? n.states[a.entities.assisted_carry_job]?.state : void 0, pe = F.useMemo(() => Jx(_e), [_e]), Se = Lx(a, pe), $e = Gx(ne), Ye = a.entities?.map_select ? n.states[a.entities.map_select]?.state : void 0;
  F.useEffect(() => {
    o.current = n;
  }, [n]), F.useEffect(() => {
    !$e || !Se || !pe || (f(Se.id), v("rooms"), w(void 0), b(new Set(pe.segment_ids)), $({
      preset_id: "assisted_carry",
      strategy: pe.strategy,
      cleaning_type: pe.cleaning_type,
      fan_speed: pe.fan_speed,
      mop_mode: pe.mop_mode,
      mop_intensity: pe.mop_intensity,
      cleaning_count: pe.cleaning_count
    }));
  }, [$e, Se, pe]), F.useEffect(() => {
    if ($e || !Ye) return;
    const V = a.floors.find((ue) => ue.map_select_option === Ye);
    V && (f(V.id), b(/* @__PURE__ */ new Set()), w(void 0), V.assisted_carry && v("rooms"), R(!1));
  }, [$e, a.floors, Ye]);
  const Bt = a.entities?.status ? n.states[a.entities.status]?.state : void 0, It = ["washing_the_mop", "washing_the_mop_2"].includes(Bt ?? ""), Cn = [W?.state, Bt].includes("emptying_the_bin"), rn = Z0(W?.state) || It, gt = $e || ["submitting", "starting", "active"].includes(P.phase);
  F.useEffect(() => {
    P.phase === "starting" && rn ? ie((V) => ({ ...V, phase: "active" })) : P.phase === "active" && !rn && (ie({ phase: "idle" }), b(/* @__PURE__ */ new Set()), w(void 0));
  }, [P.phase, rn]), F.useEffect(() => {
    if (!oe) return;
    const V = setTimeout(() => Z(void 0), 5e3);
    return () => clearTimeout(V);
  }, [oe]);
  const Zi = new Set(P.floor_id === m.id ? P.segment_ids ?? [] : []), Za = m.rooms.filter((V) => g.has(V.segment_id)), Ua = Za.map((V) => V.name), $a = a.entities?.dock_mop_drying ? n.states[a.entities.dock_mop_drying]?.state === "on" : !1, Ya = $a ? tT(n, a.entities?.dock_mop_drying_remaining_time, s) : void 0, la = a.entities?.last_clean_end ? n.states[a.entities.last_clean_end]?.state : void 0, Ui = !rn && la && !["unknown", "unavailable"].includes(la) ? aT(la, s) : void 0, es = [
    nT(s, Bt),
    $a ? D(s, "dryingMop") : void 0,
    Ya
  ].filter((V) => !!V), tr = [
    { icon: /* @__PURE__ */ p.jsx(Mb, {}), label: D(s, "battery"), value: Ro(n, a.entities?.battery) },
    { icon: /* @__PURE__ */ p.jsx(Jb, {}), label: D(s, "room"), value: Ro(n, a.entities?.current_room) },
    { icon: /* @__PURE__ */ p.jsx(i0, {}), label: D(s, "area"), value: Ro(n, a.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ p.jsx(Zb, {}), label: D(s, "duration"), value: Ro(n, a.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ p.jsx(d0, {}), label: D(s, "progress"), value: Ro(n, a.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ p.jsx(Xb, {}), label: D(s, "lastClean"), value: Ui }
  ].filter((V) => V.value), St = (V) => {
    if ($e) return;
    const ue = a.floors.find((re) => re.id === V);
    f(V), b(/* @__PURE__ */ new Set()), w(void 0), ue?.assisted_carry && v("rooms"), R(!1);
  }, nr = (V) => {
    V === "zone" && m.assisted_carry || (v(V), b(/* @__PURE__ */ new Set()), w(void 0), R(!1));
  }, $i = (V) => {
    if (V) {
      const ue = me.find(({ preset: re, available: et }) => re.id === a.default_preset && et)?.preset ?? me.find(({ preset: re, available: et }) => re.id === "vacuum_only" && et)?.preset ?? me.find(({ available: re }) => re)?.preset;
      if (!ue) {
        Z(D(s, "unsupported"));
        return;
      }
      $(Ho(ue));
    }
    if (h === "zone" && (x.strategy !== "custom" || !Kc.has(x.cleaning_type))) {
      const ue = me.find(({ preset: re, available: et }) => re.id === "vacuum_only" && et)?.preset ?? me.find(({ preset: re, available: et }) => re.id === "vacuum_and_mop" && et)?.preset ?? me.find(({ preset: re, available: et }) => et && re.strategy === "custom" && Kc.has(re.cleaning_type ?? "vacuum"))?.preset;
      if (!ue) {
        Z(D(s, "unsupported"));
        return;
      }
      $(Ho(ue));
    }
    if (!V && x.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((re) => re.include_in_floor_clean !== !1 && Nl(n, re)).map((re) => re.segment_id);
      b(new Set(ue));
    }
    X(V), R(!0);
  }, ar = () => {
    const V = m.rooms.filter((ue) => ue.include_in_floor_clean !== !1 && Nl(n, ue)).map((ue) => ue.segment_id);
    b(new Set(V)), $i(!!m.assisted_carry);
  }, Ba = (V) => {
    if (V.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ue = m.rooms.filter((re) => re.include_in_floor_clean !== !1 && Nl(n, re)).map((re) => re.segment_id);
      b(new Set(ue));
    }
    $(V);
  }, sa = (V) => V instanceof Lo ? `${V.operation}: ${V.message}` : V instanceof Error ? V.message : String(V), ir = async (V = x) => {
    if (!l.current) {
      l.current = !0, q(!0);
      try {
        const ue = Qx(m, [...g], V);
        await Px(o.current, a, ue), R(!1), Z(D(s, "preparingUpstairs"));
      } catch (ue) {
        Z(sa(ue));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        l.current = !1, q(!1);
      }
    }
  }, ts = async () => {
    if (!(l.current || !Se || !pe)) {
      l.current = !0, q(!0);
      try {
        await Wx(o.current, a, Se, pe);
      } catch (V) {
        Z(sa(V));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        l.current = !1, q(!1);
      }
    }
  }, ns = async () => {
    if (!l.current) {
      l.current = !0, q(!0);
      try {
        await Fx(o.current, a);
      } catch (V) {
        Z(sa(V));
        try {
          await Ti(o.current, a, "error");
        } catch {
        }
      } finally {
        l.current = !1, q(!1);
      }
    }
  }, ua = async () => {
    if (!I) {
      q(!0);
      try {
        await f_(o.current, a), b(/* @__PURE__ */ new Set());
      } catch (V) {
        Z(sa(V));
      } finally {
        q(!1);
      }
    }
  }, wt = async () => {
    if (!I) {
      q(!0);
      try {
        const V = [
          a.entities?.assisted_carry_prepare_script,
          a.entities?.assisted_carry_start_script,
          a.entities?.assisted_carry_finish_script
        ].filter((ue) => !!(ue && o.current.states[ue]));
        V.length > 0 && await o.current.callService("script", "turn_off", {}, { entity_id: V }), ne === "cleaning_upstairs" && await o.current.callService("vacuum", "stop", {}, { entity_id: a.entity }), It && await Cc(o.current, a, "wash", !0), Cn && await Cc(o.current, a, "empty", !0), await f_(o.current, a), b(/* @__PURE__ */ new Set());
      } catch (V) {
        Z(sa(V));
      } finally {
        q(!1);
      }
    }
  }, ln = async (V = x) => {
    if (O) {
      await ir(V);
      return;
    }
    if (l.current) return;
    l.current = !0;
    const ue = {
      floor_id: m.id,
      segment_ids: h === "rooms" ? [...g] : void 0,
      selection_mode: h,
      zone: h === "zone" ? S : void 0
    };
    ie({ phase: "submitting", ...ue });
    try {
      const re = h === "zone" && S ? x2(S, Wl(o.current.states[m.map_entity])) : void 0;
      await vz({
        getHass: () => o.current,
        config: a,
        floor: m,
        rooms: h === "rooms" ? Za : [],
        draft: V,
        zone: re
      }), ie({ phase: "starting", ...ue }), R(!1), Z(D(s, "launched"));
    } catch (re) {
      const et = re instanceof Te ? `${re.operation}: ${re.message}` : String(re);
      ie({ phase: "failed", ...ue, error: et }), Z(et);
    } finally {
      l.current = !1;
    }
  }, ut = async (V) => {
    try {
      if (V === "stop" || V === "return_to_base") {
        const ue = a.entities?.vacuum_then_mop_script;
        ue && o.current.states[ue] && o.current.states[ue].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: ue });
        const re = a.entities?.assisted_carry_start_script;
        $e && re && o.current.states[re] && o.current.states[re].state !== "unavailable" && await o.current.callService("script", "turn_off", {}, { entity_id: re });
      }
      await o.current.callService("vacuum", V, {}, { entity_id: a.entity }), V === "stop" && ne === "cleaning_upstairs" && await Ti(o.current, a, "carry_downstairs");
    } catch (ue) {
      Z(`${V}: ${ue instanceof Error ? ue.message : String(ue)}`);
    }
  }, as = async (V, ue) => {
    if (!J) {
      G(D(s, "settingSaved"));
      try {
        await oz(o.current, a, V, ue), Z(D(s, "settingSaved"));
      } catch (re) {
        const et = re instanceof Mn ? `${re.operation}: ${re.message}` : String(re);
        Z(et);
      } finally {
        G(void 0);
      }
    }
  }, is = async (V) => {
    if (!(J || !V.reset_button) && window.confirm(D(s, "confirmResetConsumable"))) {
      G(D(s, "dockActionSent"));
      try {
        await o.current.callService("button", "press", {}, { entity_id: V.reset_button }), Z(D(s, "dockActionSent"));
      } catch (ue) {
        Z(`reset_${V.kind}: ${ue instanceof Error ? ue.message : String(ue)}`);
      } finally {
        G(void 0);
      }
    }
  }, os = async (V, ue) => {
    if (!J) {
      if (!ue) {
        const re = V === "empty" ? D(s, "confirmEmpty") : V === "wash" ? D(s, "confirmWash") : V === "dry" ? D(s, "confirmDry") : D(s, "confirmDrain");
        if (!window.confirm(re)) return;
      }
      G(D(s, "dockActionSent"));
      try {
        await Cc(o.current, a, V, ue), Z(D(s, "dockActionSent"));
      } catch (re) {
        const et = V === "drain" ? D(s, "drainRejected") : re instanceof Mn ? `${re.operation}: ${re.message}` : String(re);
        Z(et);
      } finally {
        G(void 0);
      }
    }
  }, Ha = async (V) => {
    const ue = a.entities?.dock_child_lock;
    if (!(!ue || J)) {
      G(D(s, "settingSaved"));
      try {
        await o.current.callService("switch", V ? "turn_on" : "turn_off", {}, { entity_id: ue }), Z(D(s, "settingSaved"));
      } catch (re) {
        Z(`child_lock: ${re instanceof Error ? re.message : String(re)}`);
      } finally {
        G(void 0);
      }
    }
  };
  return /* @__PURE__ */ p.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("h1", { children: a.name ?? W?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ p.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ p.jsx("span", { className: `state-dot state-${W?.state ?? "unavailable"}` }),
          /* @__PURE__ */ p.jsx("span", { children: W?.state?.replaceAll("_", " ") ?? "unavailable" }),
          es.map((V) => /* @__PURE__ */ p.jsx("span", { className: "state-detail", children: ` · ${V}` }, V))
        ] })
      ] }),
      tr.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "status-strip", children: tr.map((V) => /* @__PURE__ */ p.jsxs("div", { title: V.label, children: [
        V.icon,
        /* @__PURE__ */ p.jsx("strong", { children: V.value })
      ] }, V.label)) })
    ] }),
    ae.length > 0 && L !== A && /* @__PURE__ */ p.jsxs("details", { className: "health-notice", children: [
      /* @__PURE__ */ p.jsxs("summary", { children: [
        /* @__PURE__ */ p.jsx(R_, {}),
        D(s, "setupAttention"),
        " (",
        ae.length,
        ")"
      ] }),
      /* @__PURE__ */ p.jsx("ul", { children: ae.map((V) => /* @__PURE__ */ p.jsx("li", { children: gz(s, V) }, JSON.stringify(V))) }),
      /* @__PURE__ */ p.jsx("button", { type: "button", className: "secondary", onClick: () => ee(A), children: D(s, "dismiss") })
    ] }),
    a.floors.length > 1 && /* @__PURE__ */ p.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": D(s, "floor"), children: a.floors.map((V) => /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === V.id,
        className: m.id === V.id ? "active" : "",
        disabled: $e && m.id !== V.id,
        onClick: () => St(V.id),
        children: V.name
      },
      V.id
    )) }),
    !m.assisted_carry && /* @__PURE__ */ p.jsxs("div", { className: "selection-mode-tabs", role: "tablist", "aria-label": D(s, "selectionMode"), children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "rooms",
          className: h === "rooms" ? "active" : "",
          disabled: gt,
          onClick: () => nr("rooms"),
          children: D(s, "rooms")
        }
      ),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": h === "zone",
          className: h === "zone" ? "active" : "",
          disabled: gt,
          onClick: () => nr("zone"),
          children: D(s, "zone")
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Fj,
      {
        hass: n,
        floor: m,
        language: s,
        selected: g,
        launched: Zi,
        active: rn,
        disabled: gt,
        selectionMode: h,
        zone: S,
        zoneLaunched: P.floor_id === m.id && P.selection_mode === "zone" && ["starting", "active"].includes(P.phase),
        onToggle: (V) => b((ue) => {
          const re = new Set(ue);
          return re.has(V) ? re.delete(V) : re.add(V), re;
        }),
        onZoneChange: w
      }
    ),
    m.assisted_carry && /* @__PURE__ */ p.jsx(
      eT,
      {
        language: s,
        stage: ne,
        roomNames: Ua,
        pending: I,
        onStart: ts,
        onFinish: ns,
        onReset: ua,
        onCancel: wt
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("strong", { children: h === "zone" ? D(s, "selectedZone") : D(s, "selectedRooms") }),
        /* @__PURE__ */ p.jsx("span", { children: h === "zone" ? S ? D(s, "zoneReady") : D(s, "noZoneSelected") : Ua.length ? Ua.join(" · ") : D(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ p.jsx("span", { className: "selection-count", children: h === "zone" ? +!!S : g.size })
    ] }),
    !$e && /* @__PURE__ */ p.jsxs("div", { className: "primary-actions", children: [
      h === "rooms" && /* @__PURE__ */ p.jsxs("button", { type: "button", className: "secondary", onClick: ar, disabled: gt, children: [
        /* @__PURE__ */ p.jsx(Oh, {}),
        " ",
        D(s, "entireFloor")
      ] }),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: "primary",
          onClick: () => $i(!!m.assisted_carry),
          disabled: (h === "zone" ? !S : g.size === 0) || gt,
          children: [
            m.assisted_carry && /* @__PURE__ */ p.jsx(Yc, {}),
            m.assisted_carry ? D(s, "prepareUpstairs") : D(s, "configureJob")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      W?.state === "paused" && ce.canStart && /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => ut("start"), children: [
        /* @__PURE__ */ p.jsx(D_, {}),
        D(s, "resume")
      ] }),
      W?.state === "cleaning" && ce.canPause && /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => ut("pause"), children: [
        /* @__PURE__ */ p.jsx(Wb, {}),
        D(s, "pause")
      ] }),
      ce.canStop && /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => ut("stop"), children: [
        /* @__PURE__ */ p.jsx(u0, {}),
        D(s, "stop")
      ] }),
      ce.canDock && /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => ut("return_to_base"), children: [
        /* @__PURE__ */ p.jsx(Oh, {}),
        D(s, "dock")
      ] }),
      /* @__PURE__ */ p.jsxs("button", { type: "button", onClick: () => K(!0), children: [
        /* @__PURE__ */ p.jsx(r0, {}),
        D(s, "dockStation"),
        te > 0 && /* @__PURE__ */ p.jsx("span", { className: "maintenance-badge", title: D(s, "maintenanceBadge"), "aria-label": D(s, "maintenanceBadge"), children: te })
      ] })
    ] }),
    z && /* @__PURE__ */ p.jsx(
      Cz,
      {
        language: s,
        draft: x,
        capabilities: ce,
        presets: me,
        selectedRoomNames: h === "zone" ? [D(s, "customZone")] : Ua,
        submitting: P.phase === "submitting" || I,
        assistedCarry: O,
        zoneCleaning: h === "zone",
        mopRoutes: ce.mopRoutes,
        checks: O ? void 0 : Ev(n, a, x),
        onDraftChange: Ba,
        onClose: () => P.phase !== "submitting" && !I && R(!1),
        onStart: ln
      }
    ),
    Q && /* @__PURE__ */ p.jsx(
      kz,
      {
        hass: n,
        config: a,
        language: s,
        washing: It,
        emptying: Cn,
        drying: $a,
        dryingRemaining: Ya,
        pending: J,
        onClose: () => !J && K(!1),
        onAction: os,
        onSetting: as,
        onChildLock: Ha,
        maintenance: Ce,
        onResetConsumable: is
      }
    ),
    oe && /* @__PURE__ */ p.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ p.jsx("span", { children: oe }),
      /* @__PURE__ */ p.jsx("button", { type: "button", "aria-label": D(s, "close"), onClick: () => Z(void 0), children: /* @__PURE__ */ p.jsx(ed, {}) })
    ] })
  ] });
}
const rT = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);--rvm-warning: var(--warning-color, #ffa600);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented,.selection-mode-tabs{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button,.selection-mode-tabs button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active,.selection-mode-tabs button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.selection-mode-tabs{margin-bottom:10px}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-shell.zone-mode{touch-action:none}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-overlay.drawing-zone{cursor:crosshair;touch-action:none}.room-overlay.drawing-zone .room{pointer-events:none}.room-overlay.drawing-zone .room-label{opacity:.42}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.zone-rectangle{fill:color-mix(in srgb,var(--rvm-accent) 28%,transparent);stroke:var(--rvm-accent);stroke-width:3;stroke-dasharray:10 6;vector-effect:non-scaling-stroke;cursor:move}.zone-selection.launched .zone-rectangle{fill:color-mix(in srgb,#35a854 28%,transparent);stroke:#35a854}.zone-handle{fill:var(--rvm-surface);stroke:var(--rvm-accent);stroke-width:4;vector-effect:non-scaling-stroke}.zone-handle[data-zone-handle=nw],.zone-handle[data-zone-handle=se]{cursor:nwse-resize}.zone-handle[data-zone-handle=ne],.zone-handle[data-zone-handle=sw]{cursor:nesw-resize}.zone-selection.launched .zone-handle{stroke:#35a854}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}.primary-actions>:only-child{grid-column:1/-1}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(var(--mode-count, 4),minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.editor-toolbar{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}.editor-toolbar button{display:inline-flex;align-items:center;gap:6px}.setup-wizard{display:grid;gap:14px}.setup-wizard header small{color:var(--rvm-muted)}.setup-wizard h2{margin:2px 0 0}.wizard-step{display:grid;gap:12px}.wizard-nav{display:flex;justify-content:space-between;gap:10px;padding-top:12px;border-top:1px solid var(--rvm-border)}.wizard-verdict{display:grid;gap:4px;padding:12px 14px;border-radius:14px;background:var(--rvm-surface-2)}.wizard-verdict.verdict-supported{border-left:4px solid var(--success-color, #2e7d32)}.wizard-verdict.verdict-limited{border-left:4px solid var(--rvm-warning)}.wizard-verdict.verdict-unsupported{border-left:4px solid var(--rvm-danger)}.wizard-verdict p{margin:0;color:var(--rvm-muted);font-size:13px}.wizard-facts{display:grid;grid-template-columns:max-content 1fr;gap:6px 14px;margin:0;font-size:13px}.wizard-facts dt{color:var(--rvm-muted)}.wizard-facts dd{margin:0}.wizard-warning{color:var(--rvm-warning)}.room-editor.unmapped{border-left:3px solid var(--rvm-warning)}.yaml-preview{max-height:360px;overflow:auto;margin:0;padding:12px;border-radius:12px;background:var(--rvm-surface-2);font-size:12px;white-space:pre}.redetect-changes{display:grid;gap:6px;margin:8px 0 12px;padding:0;list-style:none}.preset-scripts{display:grid;gap:8px;margin-top:14px}.preset-script-row{display:flex;flex-wrap:wrap;align-items:center;gap:10px}.preset-script-row>span{flex:1;font-weight:600}.preset-script-row .yaml-preview{flex-basis:100%}.setup-state-body{padding:22px 24px}.setup-state-body h1{display:flex;align-items:center;gap:10px;margin:0 0 6px;font-size:20px}.setup-state-body h1 svg{color:var(--rvm-warning)}.setup-state-body>p{margin:0 0 14px;color:var(--rvm-muted)}.setup-checks{display:grid;gap:8px;margin:0 0 14px;padding:0;list-style:none}.setup-checks li{display:flex;align-items:center;gap:10px}.setup-checks li span{flex:1}.setup-checks .ok svg{color:var(--success-color, #2e7d32)}.setup-checks .missing svg{color:var(--rvm-danger)}.setup-checks .optional svg{color:var(--rvm-warning)}.setup-checks a{color:var(--rvm-accent);font-weight:600}.setup-problem{margin:0 0 12px;font-size:13px}.setup-problem ul{margin:4px 0 0;padding-left:18px}.setup-next{margin:0;font-weight:600}.health-notice{margin:0 16px 12px;padding:10px 14px;border:1px solid color-mix(in srgb,var(--rvm-warning) 50%,transparent);border-radius:14px;background:color-mix(in srgb,var(--rvm-warning) 10%,transparent);font-size:13px}.health-notice summary{display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:600}.health-notice summary svg{width:18px;height:18px;color:var(--rvm-warning)}.health-notice ul{margin:8px 0;padding-left:20px}.health-notice button{min-height:32px;padding:4px 12px}.preflight{margin:0 24px 12px;padding:12px 16px;border-radius:14px;font-size:13px}.preflight ul{margin:6px 0 0;padding-left:18px}.preflight.blocking{color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent)}.preflight.warning{background:color-mix(in srgb,var(--rvm-warning) 12%,transparent)}.maintenance-badge{display:inline-grid;place-items:center;min-width:18px;height:18px;margin-left:4px;padding:0 5px;border-radius:9px;color:#fff;background:var(--rvm-danger);font-size:11px;font-weight:700}.maintenance-row{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.maintenance-row>span:first-child{flex:1;font-weight:600}.maintenance-value{display:grid;justify-items:end}.maintenance-value small{color:var(--rvm-muted)}.maintenance-row.level-due .maintenance-value small{color:var(--rvm-warning)}.maintenance-row.level-overdue .maintenance-value small{color:var(--rvm-danger);font-weight:600}.maintenance-row button{min-height:34px;padding:4px 12px}.maintenance-hint{margin:0;padding:10px 16px 14px;border-top:1px solid var(--rvm-border);color:var(--rvm-muted);font-size:12px}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-hint{margin:-4px 0 12px;color:var(--rvm-muted);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', lT = "0.9.0-dev";
let T_ = !1;
function sT() {
  T_ || (T_ = !0, console.warn(
    "roborock-vacuum-map-card: `vacuum_mode_fallback` is deprecated. Home Assistant 2026.8+ provides the Cleaning mode select; configure `entities.cleaning_mode` instead."
  ));
}
class Kv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const a = this.attachShadow({ mode: "open" }), o = document.createElement("style");
    o.textContent = rT, a.append(o), this.container = document.createElement("div"), a.append(this.container);
  }
  renderReact(a) {
    this.root ??= yb.createRoot(this.container), this.root.render(a);
  }
}
class uT extends Kv {
  config;
  configErrors = [];
  language;
  homeAssistant;
  setConfig(a) {
    this.language = a?.language, this.configErrors = ud(a), this.config = this.configErrors.length === 0 ? k2(a) : void 0, this.config?.vacuum_mode_fallback && sT(), this.render();
  }
  set hass(a) {
    this.homeAssistant = a, this.render();
  }
  render() {
    const a = this.homeAssistant;
    if (a) {
      if (!this.config || !a.states[this.config.entity]) {
        this.renderReact(/* @__PURE__ */ p.jsx(Xx, { hass: a, language: this.language, errors: this.configErrors, missingVacuum: this.config?.entity }));
        return;
      }
      this.renderReact(/* @__PURE__ */ p.jsx(oT, { hass: a, config: this.config }));
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
    const o = a ? fd(a)[0] : void 0;
    if (!a || !o || !a.entities) return gv();
    const [l, s] = await Promise.all([pd(a, o), md(a, o)]);
    return hd(a, o, l, s).config;
  }
}
class cT extends Kv {
  config = gv();
  homeAssistant;
  setConfig(a) {
    this.config = structuredClone(a), this.render();
  }
  set hass(a) {
    this.homeAssistant = a, this.render();
  }
  render() {
    this.homeAssistant && this.renderReact(
      /* @__PURE__ */ p.jsx(
        Ux,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", uT);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", cT);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${lT} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  uT as RoborockVacuumMapCard,
  cT as RoborockVacuumMapCardEditor
};
