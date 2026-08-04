function Ah(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Vs = { exports: {} }, _l = {};
var Tp;
function Pg() {
  if (Tp) return _l;
  Tp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(u, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: u,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return _l.Fragment = i, _l.jsx = r, _l.jsxs = r, _l;
}
var Ep;
function Fg() {
  return Ep || (Ep = 1, Vs.exports = Pg()), Vs.exports;
}
var g = Fg(), Gs = { exports: {} }, bl = {}, Qs = { exports: {} }, Ks = {};
var Ap;
function Ig() {
  return Ap || (Ap = 1, (function(n) {
    function i(M, K) {
      var I = M.length;
      M.push(K);
      e: for (; 0 < I; ) {
        var ye = I - 1 >>> 1, ge = M[ye];
        if (0 < s(ge, K))
          M[ye] = K, M[I] = ge, I = ye;
        else break e;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function u(M) {
      if (M.length === 0) return null;
      var K = M[0], I = M.pop();
      if (I !== K) {
        M[0] = I;
        e: for (var ye = 0, ge = M.length, w = ge >>> 1; ye < w; ) {
          var D = 2 * (ye + 1) - 1, J = M[D], W = D + 1, re = M[W];
          if (0 > s(J, I))
            W < ge && 0 > s(re, J) ? (M[ye] = re, M[W] = I, ye = W) : (M[ye] = J, M[D] = I, ye = D);
          else if (W < ge && 0 > s(re, I))
            M[ye] = re, M[W] = I, ye = W;
          else break e;
        }
      }
      return K;
    }
    function s(M, K) {
      var I = M.sortIndex - K.sortIndex;
      return I !== 0 ? I : M.id - K.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var v = [], h = [], _ = 1, S = null, x = 3, k = !1, j = !1, q = !1, X = !1, L = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function H(M) {
      for (var K = r(h); K !== null; ) {
        if (K.callback === null) u(h);
        else if (K.startTime <= M)
          u(h), K.sortIndex = K.expirationTime, i(v, K);
        else break;
        K = r(h);
      }
    }
    function $(M) {
      if (q = !1, H(M), !j)
        if (r(v) !== null)
          j = !0, F || (F = !0, ve());
        else {
          var K = r(h);
          K !== null && Ve($, K.startTime - M);
        }
    }
    var F = !1, U = -1, ne = 5, ue = -1;
    function Oe() {
      return X ? !0 : !(n.unstable_now() - ue < ne);
    }
    function xe() {
      if (X = !1, F) {
        var M = n.unstable_now();
        ue = M;
        var K = !0;
        try {
          e: {
            j = !1, q && (q = !1, B(U), U = -1), k = !0;
            var I = x;
            try {
              t: {
                for (H(M), S = r(v); S !== null && !(S.expirationTime > M && Oe()); ) {
                  var ye = S.callback;
                  if (typeof ye == "function") {
                    S.callback = null, x = S.priorityLevel;
                    var ge = ye(
                      S.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof ge == "function") {
                      S.callback = ge, H(M), K = !0;
                      break t;
                    }
                    S === r(v) && u(v), H(M);
                  } else u(v);
                  S = r(v);
                }
                if (S !== null) K = !0;
                else {
                  var w = r(h);
                  w !== null && Ve(
                    $,
                    w.startTime - M
                  ), K = !1;
                }
              }
              break e;
            } finally {
              S = null, x = I, k = !1;
            }
            K = void 0;
          }
        } finally {
          K ? ve() : F = !1;
        }
      }
    }
    var ve;
    if (typeof V == "function")
      ve = function() {
        V(xe);
      };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), Me = Te.port2;
      Te.port1.onmessage = xe, ve = function() {
        Me.postMessage(null);
      };
    } else
      ve = function() {
        L(xe, 0);
      };
    function Ve(M, K) {
      U = L(function() {
        M(n.unstable_now());
      }, K);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ne = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(M) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = x;
      }
      var I = x;
      x = K;
      try {
        return M();
      } finally {
        x = I;
      }
    }, n.unstable_requestPaint = function() {
      X = !0;
    }, n.unstable_runWithPriority = function(M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var I = x;
      x = M;
      try {
        return K();
      } finally {
        x = I;
      }
    }, n.unstable_scheduleCallback = function(M, K, I) {
      var ye = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ye + I : ye) : I = ye, M) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = I + ge, M = {
        id: _++,
        callback: K,
        priorityLevel: M,
        startTime: I,
        expirationTime: ge,
        sortIndex: -1
      }, I > ye ? (M.sortIndex = I, i(h, M), r(v) === null && M === r(h) && (q ? (B(U), U = -1) : q = !0, Ve($, I - ye))) : (M.sortIndex = ge, i(v, M), j || k || (j = !0, F || (F = !0, ve()))), M;
    }, n.unstable_shouldYield = Oe, n.unstable_wrapCallback = function(M) {
      var K = x;
      return function() {
        var I = x;
        x = K;
        try {
          return M.apply(this, arguments);
        } finally {
          x = I;
        }
      };
    };
  })(Ks)), Ks;
}
var kp;
function e_() {
  return kp || (kp = 1, Qs.exports = Ig()), Qs.exports;
}
var Js = { exports: {} }, oe = {};
var Cp;
function t_() {
  if (Cp) return oe;
  Cp = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function k(w) {
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
  }, q = Object.assign, X = {};
  function L(w, D, J) {
    this.props = w, this.context = D, this.refs = X, this.updater = J || j;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(w, D) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, D, "setState");
  }, L.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function B() {
  }
  B.prototype = L.prototype;
  function V(w, D, J) {
    this.props = w, this.context = D, this.refs = X, this.updater = J || j;
  }
  var H = V.prototype = new B();
  H.constructor = V, q(H, L.prototype), H.isPureReactComponent = !0;
  var $ = Array.isArray;
  function F() {
  }
  var U = { H: null, A: null, T: null, S: null }, ne = Object.prototype.hasOwnProperty;
  function ue(w, D, J) {
    var W = J.ref;
    return {
      $$typeof: n,
      type: w,
      key: D,
      ref: W !== void 0 ? W : null,
      props: J
    };
  }
  function Oe(w, D) {
    return ue(w.type, D, w.props);
  }
  function xe(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function ve(w) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(J) {
      return D[J];
    });
  }
  var Te = /\/+/g;
  function Me(w, D) {
    return typeof w == "object" && w !== null && w.key != null ? ve("" + w.key) : D.toString(36);
  }
  function Ve(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(F, F) : (w.status = "pending", w.then(
          function(D) {
            w.status === "pending" && (w.status = "fulfilled", w.value = D);
          },
          function(D) {
            w.status === "pending" && (w.status = "rejected", w.reason = D);
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
  function M(w, D, J, W, re) {
    var se = typeof w;
    (se === "undefined" || se === "boolean") && (w = null);
    var Se = !1;
    if (w === null) Se = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          Se = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case i:
              Se = !0;
              break;
            case _:
              return Se = w._init, M(
                Se(w._payload),
                D,
                J,
                W,
                re
              );
          }
      }
    if (Se)
      return re = re(w), Se = W === "" ? "." + Me(w, 0) : W, $(re) ? (J = "", Se != null && (J = Se.replace(Te, "$&/") + "/"), M(re, D, J, "", function(tn) {
        return tn;
      })) : re != null && (xe(re) && (re = Oe(
        re,
        J + (re.key == null || w && w.key === re.key ? "" : ("" + re.key).replace(
          Te,
          "$&/"
        ) + "/") + Se
      )), D.push(re)), 1;
    Se = 0;
    var Je = W === "" ? "." : W + ":";
    if ($(w))
      for (var qe = 0; qe < w.length; qe++)
        W = w[qe], se = Je + Me(W, qe), Se += M(
          W,
          D,
          J,
          se,
          re
        );
    else if (qe = k(w), typeof qe == "function")
      for (w = qe.call(w), qe = 0; !(W = w.next()).done; )
        W = W.value, se = Je + Me(W, qe++), Se += M(
          W,
          D,
          J,
          se,
          re
        );
    else if (se === "object") {
      if (typeof w.then == "function")
        return M(
          Ve(w),
          D,
          J,
          W,
          re
        );
      throw D = String(w), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Se;
  }
  function K(w, D, J) {
    if (w == null) return w;
    var W = [], re = 0;
    return M(w, W, "", "", function(se) {
      return D.call(J, se, re++);
    }), W;
  }
  function I(w) {
    if (w._status === -1) {
      var D = w._result;
      D = D(), D.then(
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = J);
        },
        function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = J);
        }
      ), w._status === -1 && (w._status = 0, w._result = D);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ye = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, ge = {
    map: K,
    forEach: function(w, D, J) {
      K(
        w,
        function() {
          D.apply(this, arguments);
        },
        J
      );
    },
    count: function(w) {
      var D = 0;
      return K(w, function() {
        D++;
      }), D;
    },
    toArray: function(w) {
      return K(w, function(D) {
        return D;
      }) || [];
    },
    only: function(w) {
      if (!xe(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return oe.Activity = S, oe.Children = ge, oe.Component = L, oe.Fragment = r, oe.Profiler = s, oe.PureComponent = V, oe.StrictMode = u, oe.Suspense = v, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return U.H.useMemoCache(w);
    }
  }, oe.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, oe.cacheSignal = function() {
    return null;
  }, oe.cloneElement = function(w, D, J) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var W = q({}, w.props), re = w.key;
    if (D != null)
      for (se in D.key !== void 0 && (re = "" + D.key), D)
        !ne.call(D, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && D.ref === void 0 || (W[se] = D[se]);
    var se = arguments.length - 2;
    if (se === 1) W.children = J;
    else if (1 < se) {
      for (var Se = Array(se), Je = 0; Je < se; Je++)
        Se[Je] = arguments[Je + 2];
      W.children = Se;
    }
    return ue(w.type, re, W);
  }, oe.createContext = function(w) {
    return w = {
      $$typeof: d,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: f,
      _context: w
    }, w;
  }, oe.createElement = function(w, D, J) {
    var W, re = {}, se = null;
    if (D != null)
      for (W in D.key !== void 0 && (se = "" + D.key), D)
        ne.call(D, W) && W !== "key" && W !== "__self" && W !== "__source" && (re[W] = D[W]);
    var Se = arguments.length - 2;
    if (Se === 1) re.children = J;
    else if (1 < Se) {
      for (var Je = Array(Se), qe = 0; qe < Se; qe++)
        Je[qe] = arguments[qe + 2];
      re.children = Je;
    }
    if (w && w.defaultProps)
      for (W in Se = w.defaultProps, Se)
        re[W] === void 0 && (re[W] = Se[W]);
    return ue(w, se, re);
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, oe.isValidElement = xe, oe.lazy = function(w) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: w },
      _init: I
    };
  }, oe.memo = function(w, D) {
    return {
      $$typeof: h,
      type: w,
      compare: D === void 0 ? null : D
    };
  }, oe.startTransition = function(w) {
    var D = U.T, J = {};
    U.T = J;
    try {
      var W = w(), re = U.S;
      re !== null && re(J, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(F, ye);
    } catch (se) {
      ye(se);
    } finally {
      D !== null && J.types !== null && (D.types = J.types), U.T = D;
    }
  }, oe.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, oe.use = function(w) {
    return U.H.use(w);
  }, oe.useActionState = function(w, D, J) {
    return U.H.useActionState(w, D, J);
  }, oe.useCallback = function(w, D) {
    return U.H.useCallback(w, D);
  }, oe.useContext = function(w) {
    return U.H.useContext(w);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(w, D) {
    return U.H.useDeferredValue(w, D);
  }, oe.useEffect = function(w, D) {
    return U.H.useEffect(w, D);
  }, oe.useEffectEvent = function(w) {
    return U.H.useEffectEvent(w);
  }, oe.useId = function() {
    return U.H.useId();
  }, oe.useImperativeHandle = function(w, D, J) {
    return U.H.useImperativeHandle(w, D, J);
  }, oe.useInsertionEffect = function(w, D) {
    return U.H.useInsertionEffect(w, D);
  }, oe.useLayoutEffect = function(w, D) {
    return U.H.useLayoutEffect(w, D);
  }, oe.useMemo = function(w, D) {
    return U.H.useMemo(w, D);
  }, oe.useOptimistic = function(w, D) {
    return U.H.useOptimistic(w, D);
  }, oe.useReducer = function(w, D, J) {
    return U.H.useReducer(w, D, J);
  }, oe.useRef = function(w) {
    return U.H.useRef(w);
  }, oe.useState = function(w) {
    return U.H.useState(w);
  }, oe.useSyncExternalStore = function(w, D, J) {
    return U.H.useSyncExternalStore(
      w,
      D,
      J
    );
  }, oe.useTransition = function() {
    return U.H.useTransition();
  }, oe.version = "19.2.8", oe;
}
var Op;
function mc() {
  return Op || (Op = 1, Js.exports = t_()), Js.exports;
}
var Ws = { exports: {} }, ht = {};
var jp;
function n_() {
  if (jp) return ht;
  jp = 1;
  var n = mc();
  function i(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        h += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(v, h, _) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : "" + S,
      children: v,
      containerInfo: h,
      implementation: _
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(v, h) {
    if (v === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ht.createPortal = function(v, h) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(i(299));
    return f(v, h, null, _);
  }, ht.flushSync = function(v) {
    var h = d.T, _ = u.p;
    try {
      if (d.T = null, u.p = 2, v) return v();
    } finally {
      d.T = h, u.p = _, u.d.f();
    }
  }, ht.preconnect = function(v, h) {
    typeof v == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(v, h));
  }, ht.prefetchDNS = function(v) {
    typeof v == "string" && u.d.D(v);
  }, ht.preinit = function(v, h) {
    if (typeof v == "string" && h && typeof h.as == "string") {
      var _ = h.as, S = m(_, h.crossOrigin), x = typeof h.integrity == "string" ? h.integrity : void 0, k = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      _ === "style" ? u.d.S(
        v,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: S,
          integrity: x,
          fetchPriority: k
        }
      ) : _ === "script" && u.d.X(v, {
        crossOrigin: S,
        integrity: x,
        fetchPriority: k,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, ht.preinitModule = function(v, h) {
    if (typeof v == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var _ = m(
            h.as,
            h.crossOrigin
          );
          u.d.M(v, {
            crossOrigin: _,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && u.d.M(v);
  }, ht.preload = function(v, h) {
    if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var _ = h.as, S = m(_, h.crossOrigin);
      u.d.L(v, _, {
        crossOrigin: S,
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
  }, ht.preloadModule = function(v, h) {
    if (typeof v == "string")
      if (h) {
        var _ = m(h.as, h.crossOrigin);
        u.d.m(v, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: _,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else u.d.m(v);
  }, ht.requestFormReset = function(v) {
    u.d.r(v);
  }, ht.unstable_batchedUpdates = function(v, h) {
    return v(h);
  }, ht.useFormState = function(v, h, _) {
    return d.H.useFormState(v, h, _);
  }, ht.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, ht.version = "19.2.8", ht;
}
var Mp;
function a_() {
  if (Mp) return Ws.exports;
  Mp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Ws.exports = n_(), Ws.exports;
}
var Np;
function i_() {
  if (Np) return bl;
  Np = 1;
  var n = e_(), i = mc(), r = a_();
  function u(e) {
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
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (f(e) !== e)
      throw Error(u(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var o = a.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (l = o.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === a) return v(o), e;
          if (c === l) return v(o), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== l.return) a = o, l = c;
      else {
        for (var p = !1, y = o.child; y; ) {
          if (y === a) {
            p = !0, a = o, l = c;
            break;
          }
          if (y === l) {
            p = !0, l = o, a = c;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = c.child; y; ) {
            if (y === a) {
              p = !0, a = c, l = o;
              break;
            }
            if (y === l) {
              p = !0, l = c, a = o;
              break;
            }
            y = y.sibling;
          }
          if (!p) throw Error(u(189));
        }
      }
      if (a.alternate !== l) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
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
  var S = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), B = /* @__PURE__ */ Symbol.for("react.consumer"), V = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), U = /* @__PURE__ */ Symbol.for("react.memo"), ne = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.activity"), Oe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), xe = Symbol.iterator;
  function ve(e) {
    return e === null || typeof e != "object" ? null : (e = xe && e[xe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Te ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case L:
        return "Profiler";
      case X:
        return "StrictMode";
      case $:
        return "Suspense";
      case F:
        return "SuspenseList";
      case ue:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case B:
          return (e._context.displayName || "Context") + ".Consumer";
        case H:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case U:
          return t = e.displayName || null, t !== null ? t : Me(e.type) || "Memo";
        case ne:
          t = e._payload, e = e._init;
          try {
            return Me(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ve = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ye = [], ge = -1;
  function w(e) {
    return { current: e };
  }
  function D(e) {
    0 > ge || (e.current = ye[ge], ye[ge] = null, ge--);
  }
  function J(e, t) {
    ge++, ye[ge] = e.current, e.current = t;
  }
  var W = w(null), re = w(null), se = w(null), Se = w(null);
  function Je(e, t) {
    switch (J(se, t), J(re, e), J(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Km(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Km(t), e = Jm(t, e);
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
    D(W), J(W, e);
  }
  function qe() {
    D(W), D(re), D(se);
  }
  function tn(e) {
    e.memoizedState !== null && J(Se, e);
    var t = W.current, a = Jm(t, e.type);
    t !== a && (J(re, e), J(W, a));
  }
  function nn(e) {
    re.current === e && (D(W), D(re)), Se.current === e && (D(Se), hl._currentValue = I);
  }
  var la, ra;
  function Ut(e) {
    if (la === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        la = t && t[1] || "", ra = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + la + e + ra;
  }
  var zi = !1;
  function sn(e, t) {
    if (!e || zi) return "";
    zi = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                } catch (O) {
                  var C = O;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (O) {
                  C = O;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                C = O;
              }
              (Y = e()) && typeof Y.catch == "function" && Y.catch(function() {
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
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), p = c[0], y = c[1];
      if (p && y) {
        var b = p.split(`
`), A = y.split(`
`);
        for (o = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; o < A.length && !A[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (l === b.length || o === A.length)
          for (l = b.length - 1, o = A.length - 1; 1 <= l && 0 <= o && b[l] !== A[o]; )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (b[l] !== A[o]) {
            if (l !== 1 || o !== 1)
              do
                if (l--, o--, 0 > o || b[l] !== A[o]) {
                  var N = `
` + b[l].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      zi = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ut(a) : "";
  }
  function Cu(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ut(e.type);
      case 16:
        return Ut("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ut("Suspense Fallback") : Ut("Suspense");
      case 19:
        return Ut("SuspenseList");
      case 0:
      case 15:
        return sn(e.type, !1);
      case 11:
        return sn(e.type.render, !1);
      case 1:
        return sn(e.type, !0);
      case 31:
        return Ut("Activity");
      default:
        return "";
    }
  }
  function Xl(e) {
    try {
      var t = "", a = null;
      do
        t += Cu(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var xi = Object.prototype.hasOwnProperty, Ti = n.unstable_scheduleCallback, Ei = n.unstable_cancelCallback, Ou = n.unstable_shouldYield, ja = n.unstable_requestPaint, vt = n.unstable_now, ju = n.unstable_getCurrentPriorityLevel, Hl = n.unstable_ImmediatePriority, Q = n.unstable_UserBlockingPriority, ce = n.unstable_NormalPriority, fe = n.unstable_LowPriority, an = n.unstable_IdlePriority, Nv = n.log, Dv = n.unstable_setDisableYieldValue, Ai = null, kt = null;
  function Cn(e) {
    if (typeof Nv == "function" && Dv(e), kt && typeof kt.setStrictMode == "function")
      try {
        kt.setStrictMode(Ai, e);
      } catch {
      }
  }
  var Ct = Math.clz32 ? Math.clz32 : Uv, Zv = Math.log, Rv = Math.LN2;
  function Uv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zv(e) / Rv | 0) | 0;
  }
  var Bl = 256, ql = 262144, $l = 4194304;
  function ua(e) {
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
  function Ll(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~c, l !== 0 ? o = ua(l) : (p &= y, p !== 0 ? o = ua(p) : a || (a = y & ~e, a !== 0 && (o = ua(a))))) : (y = l & ~c, y !== 0 ? o = ua(y) : p !== 0 ? o = ua(p) : a || (a = l & ~e, a !== 0 && (o = ua(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : o;
  }
  function ki(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yv(e, t) {
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
  function kc() {
    var e = $l;
    return $l <<= 1, ($l & 62914560) === 0 && ($l = 4194304), e;
  }
  function Mu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ci(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Xv(e, t, a, l, o, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, b = e.expirationTimes, A = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var N = 31 - Ct(a), Y = 1 << N;
      y[N] = 0, b[N] = -1;
      var C = A[N];
      if (C !== null)
        for (A[N] = null, N = 0; N < C.length; N++) {
          var O = C[N];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~Y;
    }
    l !== 0 && Cc(e, l, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Cc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ct(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Oc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ct(a), o = 1 << l;
      o & t | e[l] & t && (e[l] |= t), a &= ~o;
    }
  }
  function jc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Nu(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Nu(e) {
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
  function Du(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Mc() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gp(e.type));
  }
  function Nc(e, t) {
    var a = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = a;
    }
  }
  var On = Math.random().toString(36).slice(2), st = "__reactFiber$" + On, bt = "__reactProps$" + On, Ma = "__reactContainer$" + On, Zu = "__reactEvents$" + On, Hv = "__reactListeners$" + On, Bv = "__reactHandles$" + On, Dc = "__reactResources$" + On, Oi = "__reactMarker$" + On;
  function Ru(e) {
    delete e[st], delete e[bt], delete e[Zu], delete e[Hv], delete e[Bv];
  }
  function Na(e) {
    var t = e[st];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ma] || a[st]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = np(e); e !== null; ) {
            if (a = e[st]) return a;
            e = np(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Da(e) {
    if (e = e[st] || e[Ma]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ji(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Za(e) {
    var t = e[Dc];
    return t || (t = e[Dc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Oi] = !0;
  }
  var Zc = /* @__PURE__ */ new Set(), Rc = {};
  function oa(e, t) {
    Ra(e, t), Ra(e + "Capture", t);
  }
  function Ra(e, t) {
    for (Rc[e] = t, e = 0; e < t.length; e++)
      Zc.add(t[e]);
  }
  var qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Uc = {}, Yc = {};
  function $v(e) {
    return xi.call(Yc, e) ? !0 : xi.call(Uc, e) ? !1 : qv.test(e) ? Yc[e] = !0 : (Uc[e] = !0, !1);
  }
  function Vl(e, t, a) {
    if ($v(t))
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
  function Gl(e, t, a) {
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
  function cn(e, t, a, l) {
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
  function Xc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Lv(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var o = l.get, c = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
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
  function Uu(e) {
    if (!e._valueTracker) {
      var t = Xc(e) ? "checked" : "value";
      e._valueTracker = Lv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Hc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Xc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Ql(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vv = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      Vv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yu(e, t, a, l, o, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Xu(e, p, Yt(t)) : a != null ? Xu(e, p, Yt(a)) : l != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Yt(y) : e.removeAttribute("name");
  }
  function Bc(e, t, a, l, o, c, p, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Uu(e);
        return;
      }
      a = a != null ? "" + Yt(a) : "", t = t != null ? "" + Yt(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? o, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Uu(e);
  }
  function Xu(e, t, a) {
    t === "number" && Ql(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ua(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < a.length; o++)
        t["$" + a[o]] = !0;
      for (a = 0; a < e.length; a++)
        o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Yt(a), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === a) {
          e[o].selected = !0, l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qc(e, t, a) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function $c(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(u(92));
        if (Ve(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Yt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Uu(e);
  }
  function Ya(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lc(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Gv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Vc(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var o in t)
        l = t[o], t.hasOwnProperty(o) && a[o] !== l && Lc(e, o, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && Lc(e, c, t[c]);
  }
  function Hu(e) {
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
  var Qv = /* @__PURE__ */ new Map([
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
  ]), Kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Kl(e) {
    return Kv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function fn() {
  }
  var Bu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, Ha = null;
  function Gc(e) {
    var t = Da(e);
    if (t && (e = t.stateNode)) {
      var a = e[bt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Yu(
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
              'input[name="' + Xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var o = l[bt] || null;
                if (!o) throw Error(u(90));
                Yu(
                  l,
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
              l = a[t], l.form === e.form && Hc(l);
          }
          break e;
        case "textarea":
          qc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ua(e, !!a.multiple, t, !1);
      }
    }
  }
  var $u = !1;
  function Qc(e, t, a) {
    if ($u) return e(t, a);
    $u = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if ($u = !1, (Xa !== null || Ha !== null) && (Zr(), Xa && (t = Xa, e = Ha, Ha = Xa = null, Gc(t), e)))
        for (t = 0; t < e.length; t++) Gc(e[t]);
    }
  }
  function Mi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[bt] || null;
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
        u(231, t, typeof a)
      );
    return a;
  }
  var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lu = !1;
  if (dn)
    try {
      var Ni = {};
      Object.defineProperty(Ni, "passive", {
        get: function() {
          Lu = !0;
        }
      }), window.addEventListener("test", Ni, Ni), window.removeEventListener("test", Ni, Ni);
    } catch {
      Lu = !1;
    }
  var jn = null, Vu = null, Jl = null;
  function Kc() {
    if (Jl) return Jl;
    var e, t = Vu, a = t.length, l, o = "value" in jn ? jn.value : jn.textContent, c = o.length;
    for (e = 0; e < a && t[e] === o[e]; e++) ;
    var p = a - e;
    for (l = 1; l <= p && t[a - l] === o[c - l]; l++) ;
    return Jl = o.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pl() {
    return !0;
  }
  function Jc() {
    return !1;
  }
  function St(e) {
    function t(a, l, o, c, p) {
      this._reactName = a, this._targetInst = o, this.type = l, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Pl : Jc, this.isPropagationStopped = Jc, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Pl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Pl);
      },
      persist: function() {
      },
      isPersistent: Pl
    }), t;
  }
  var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fl = St(sa), Di = S({}, sa, { view: 0, detail: 0 }), Jv = St(Di), Gu, Qu, Zi, Il = S({}, Di, {
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
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? (Gu = e.screenX - Zi.screenX, Qu = e.screenY - Zi.screenY) : Qu = Gu = 0, Zi = e), Gu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qu;
    }
  }), Wc = St(Il), Wv = S({}, Il, { dataTransfer: 0 }), Pv = St(Wv), Fv = S({}, Di, { relatedTarget: 0 }), Ku = St(Fv), Iv = S({}, sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = St(Iv), ty = S({}, sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ny = St(ty), ay = S({}, sa, { data: 0 }), Pc = St(ay), iy = {
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
  }, ly = {
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
  }, ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
  }
  function Ju() {
    return uy;
  }
  var oy = S({}, Di, {
    key: function(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ly[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function(e) {
      return e.type === "keypress" ? Wl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), sy = St(oy), cy = S({}, Il, {
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
  }), Fc = St(cy), fy = S({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), dy = St(fy), my = S({}, sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), py = St(my), hy = S({}, Il, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vy = St(hy), yy = S({}, sa, {
    newState: 0,
    oldState: 0
  }), gy = St(yy), _y = [9, 13, 27, 32], Wu = dn && "CompositionEvent" in window, Ri = null;
  dn && "documentMode" in document && (Ri = document.documentMode);
  var by = dn && "TextEvent" in window && !Ri, Ic = dn && (!Wu || Ri && 8 < Ri && 11 >= Ri), ef = " ", tf = !1;
  function nf(e, t) {
    switch (e) {
      case "keyup":
        return _y.indexOf(t.keyCode) !== -1;
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
  function af(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ba = !1;
  function Sy(e, t) {
    switch (e) {
      case "compositionend":
        return af(t);
      case "keypress":
        return t.which !== 32 ? null : (tf = !0, ef);
      case "textInput":
        return e = t.data, e === ef && tf ? null : e;
      default:
        return null;
    }
  }
  function wy(e, t) {
    if (Ba)
      return e === "compositionend" || !Wu && nf(e, t) ? (e = Kc(), Jl = Vu = jn = null, Ba = !1, e) : null;
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
        return Ic && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zy = {
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
  function lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zy[e.type] : t === "textarea";
  }
  function rf(e, t, a, l) {
    Xa ? Ha ? Ha.push(l) : Ha = [l] : Xa = l, t = qr(t, "onChange"), 0 < t.length && (a = new Fl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Ui = null, Yi = null;
  function xy(e) {
    qm(e, 0);
  }
  function er(e) {
    var t = ji(e);
    if (Hc(t)) return e;
  }
  function uf(e, t) {
    if (e === "change") return t;
  }
  var of = !1;
  if (dn) {
    var Pu;
    if (dn) {
      var Fu = "oninput" in document;
      if (!Fu) {
        var sf = document.createElement("div");
        sf.setAttribute("oninput", "return;"), Fu = typeof sf.oninput == "function";
      }
      Pu = Fu;
    } else Pu = !1;
    of = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function cf() {
    Ui && (Ui.detachEvent("onpropertychange", ff), Yi = Ui = null);
  }
  function ff(e) {
    if (e.propertyName === "value" && er(Yi)) {
      var t = [];
      rf(
        t,
        Yi,
        e,
        qu(e)
      ), Qc(xy, t);
    }
  }
  function Ty(e, t, a) {
    e === "focusin" ? (cf(), Ui = t, Yi = a, Ui.attachEvent("onpropertychange", ff)) : e === "focusout" && cf();
  }
  function Ey(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return er(Yi);
  }
  function Ay(e, t) {
    if (e === "click") return er(t);
  }
  function ky(e, t) {
    if (e === "input" || e === "change")
      return er(t);
  }
  function Cy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : Cy;
  function Xi(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var o = a[l];
      if (!xi.call(t, o) || !Ot(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function df(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mf(e, t) {
    var a = df(e);
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
      a = df(a);
    }
  }
  function pf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function hf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ql(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ql(e.document);
    }
    return t;
  }
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Oy = dn && "documentMode" in document && 11 >= document.documentMode, qa = null, eo = null, Hi = null, to = !1;
  function vf(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    to || qa == null || qa !== Ql(l) || (l = qa, "selectionStart" in l && Iu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Hi && Xi(Hi, l) || (Hi = l, l = qr(eo, "onSelect"), 0 < l.length && (t = new Fl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = qa)));
  }
  function ca(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var $a = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, no = {}, yf = {};
  dn && (yf = document.createElement("div").style, "AnimationEvent" in window || (delete $a.animationend.animation, delete $a.animationiteration.animation, delete $a.animationstart.animation), "TransitionEvent" in window || delete $a.transitionend.transition);
  function fa(e) {
    if (no[e]) return no[e];
    if (!$a[e]) return e;
    var t = $a[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in yf)
        return no[e] = t[a];
    return e;
  }
  var gf = fa("animationend"), _f = fa("animationiteration"), bf = fa("animationstart"), jy = fa("transitionrun"), My = fa("transitionstart"), Ny = fa("transitioncancel"), Sf = fa("transitionend"), wf = /* @__PURE__ */ new Map(), ao = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ao.push("scrollEnd");
  function Wt(e, t) {
    wf.set(e, t), oa(t, [e]);
  }
  var tr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ht = [], La = 0, io = 0;
  function nr() {
    for (var e = La, t = io = La = 0; t < e; ) {
      var a = Ht[t];
      Ht[t++] = null;
      var l = Ht[t];
      Ht[t++] = null;
      var o = Ht[t];
      Ht[t++] = null;
      var c = Ht[t];
      if (Ht[t++] = null, l !== null && o !== null) {
        var p = l.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), l.pending = o;
      }
      c !== 0 && zf(a, o, c);
    }
  }
  function ar(e, t, a, l) {
    Ht[La++] = e, Ht[La++] = t, Ht[La++] = a, Ht[La++] = l, io |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function lo(e, t, a, l) {
    return ar(e, t, a, l), ir(e);
  }
  function da(e, t) {
    return ar(e, null, null, t), ir(e);
  }
  function zf(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - Ct(a), e = c.hiddenUpdates, l = e[o], l === null ? e[o] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function ir(e) {
    if (50 < ol)
      throw ol = 0, hs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Va = {};
  function Dy(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, a, l) {
    return new Dy(e, t, a, l);
  }
  function ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function mn(e, t) {
    var a = e.alternate;
    return a === null ? (a = jt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function xf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function lr(e, t, a, l, o, c) {
    var p = 0;
    if (l = e, typeof e == "function") ro(e) && (p = 1);
    else if (typeof e == "string")
      p = Xg(
        e,
        a,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ue:
          return e = jt(31, a, t, o), e.elementType = ue, e.lanes = c, e;
        case q:
          return ma(a.children, o, c, t);
        case X:
          p = 8, o |= 24;
          break;
        case L:
          return e = jt(12, a, t, o | 2), e.elementType = L, e.lanes = c, e;
        case $:
          return e = jt(13, a, t, o), e.elementType = $, e.lanes = c, e;
        case F:
          return e = jt(19, a, t, o), e.elementType = F, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                p = 10;
                break e;
              case B:
                p = 9;
                break e;
              case H:
                p = 11;
                break e;
              case U:
                p = 14;
                break e;
              case ne:
                p = 16, l = null;
                break e;
            }
          p = 29, a = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = jt(p, a, t, o), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function ma(e, t, a, l) {
    return e = jt(7, e, l, t), e.lanes = a, e;
  }
  function uo(e, t, a) {
    return e = jt(6, e, null, t), e.lanes = a, e;
  }
  function Tf(e) {
    var t = jt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function oo(e, t, a) {
    return t = jt(
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
  var Ef = /* @__PURE__ */ new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Ef.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Xl(t)
      }, Ef.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Xl(t)
    };
  }
  var Ga = [], Qa = 0, rr = null, Bi = 0, qt = [], $t = 0, Mn = null, ln = 1, rn = "";
  function pn(e, t) {
    Ga[Qa++] = Bi, Ga[Qa++] = rr, rr = e, Bi = t;
  }
  function Af(e, t, a) {
    qt[$t++] = ln, qt[$t++] = rn, qt[$t++] = Mn, Mn = e;
    var l = ln;
    e = rn;
    var o = 32 - Ct(l) - 1;
    l &= ~(1 << o), a += 1;
    var c = 32 - Ct(t) + o;
    if (30 < c) {
      var p = o - o % 5;
      c = (l & (1 << p) - 1).toString(32), l >>= p, o -= p, ln = 1 << 32 - Ct(t) + o | a << o | l, rn = c + e;
    } else
      ln = 1 << c | a << o | l, rn = e;
  }
  function so(e) {
    e.return !== null && (pn(e, 1), Af(e, 1, 0));
  }
  function co(e) {
    for (; e === rr; )
      rr = Ga[--Qa], Ga[Qa] = null, Bi = Ga[--Qa], Ga[Qa] = null;
    for (; e === Mn; )
      Mn = qt[--$t], qt[$t] = null, rn = qt[--$t], qt[$t] = null, ln = qt[--$t], qt[$t] = null;
  }
  function kf(e, t) {
    qt[$t++] = ln, qt[$t++] = rn, qt[$t++] = Mn, ln = t.id, rn = t.overflow, Mn = e;
  }
  var ct = null, $e = null, we = !1, Nn = null, Lt = !1, fo = Error(u(519));
  function Dn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw qi(Bt(t, e)), fo;
  }
  function Cf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[st] = e, t[bt] = l, a) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < cl.length; a++)
          he(cl[a], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t), Bc(
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
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), $c(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Gm(t.textContent, a) ? (l.popover != null && (he("beforetoggle", t), he("toggle", t)), l.onScroll != null && he("scroll", t), l.onScrollEnd != null && he("scrollend", t), l.onClick != null && (t.onclick = fn), t = !0) : t = !1, t || Dn(e, !0);
  }
  function Of(e) {
    for (ct = e.return; ct; )
      switch (ct.tag) {
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
          ct = ct.return;
      }
  }
  function Ka(e) {
    if (e !== ct) return !1;
    if (!we) return Of(e), we = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Os(e.type, e.memoizedProps)), a = !a), a && $e && Dn(e), Of(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      $e = tp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      $e = tp(e);
    } else
      t === 27 ? (t = $e, Kn(e.type) ? (e = Zs, Zs = null, $e = e) : $e = t) : $e = ct ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pa() {
    $e = ct = null, we = !1;
  }
  function mo() {
    var e = Nn;
    return e !== null && (Tt === null ? Tt = e : Tt.push.apply(
      Tt,
      e
    ), Nn = null), e;
  }
  function qi(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  var po = w(null), ha = null, hn = null;
  function Zn(e, t, a) {
    J(po, t._currentValue), t._currentValue = a;
  }
  function vn(e) {
    e._currentValue = po.current, D(po);
  }
  function ho(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function vo(e, t, a, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var p = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = o;
          for (var b = 0; b < t.length; b++)
            if (y.context === t[b]) {
              c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), ho(
                c.return,
                a,
                e
              ), l || (p = null);
              break e;
            }
          c = y.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(u(341));
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), ho(p, a, e), p = null;
      } else p = o.child;
      if (p !== null) p.return = o;
      else
        for (p = o; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (o = p.sibling, o !== null) {
            o.return = p.return, p = o;
            break;
          }
          p = p.return;
        }
      o = p;
    }
  }
  function Ja(e, t, a, l) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(u(387));
        if (p = p.memoizedProps, p !== null) {
          var y = o.type;
          Ot(o.pendingProps.value, p.value) || (e !== null ? e.push(y) : e = [y]);
        }
      } else if (o === Se.current) {
        if (p = o.alternate, p === null) throw Error(u(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(hl) : e = [hl]);
      }
      o = o.return;
    }
    e !== null && vo(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function ur(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ha = e, hn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return jf(ha, e);
  }
  function or(e, t) {
    return ha === null && va(e), jf(e, t);
  }
  function jf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, hn === null) {
      if (e === null) throw Error(u(308));
      hn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else hn = hn.next = t;
    return a;
  }
  var Zy = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ry = n.unstable_scheduleCallback, Uy = n.unstable_NormalPriority, nt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yo() {
    return {
      controller: new Zy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $i(e) {
    e.refCount--, e.refCount === 0 && Ry(Uy, function() {
      e.controller.abort();
    });
  }
  var Li = null, go = 0, Wa = 0, Pa = null;
  function Yy(e, t) {
    if (Li === null) {
      var a = Li = [];
      go = 0, Wa = Ss(), Pa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return go++, t.then(Mf, Mf), t;
  }
  function Mf() {
    if (--go === 0 && Li !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var e = Li;
      Li = null, Wa = 0, Pa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Xy(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        a.push(o);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var o = 0; o < a.length; o++) (0, a[o])(t);
      },
      function(o) {
        for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++)
          (0, a[o])(void 0);
      }
    ), l;
  }
  var Nf = M.S;
  M.S = function(e, t) {
    vm = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && Yy(e, t), Nf !== null && Nf(e, t);
  };
  var ya = w(null);
  function _o() {
    var e = ya.current;
    return e !== null ? e : Be.pooledCache;
  }
  function sr(e, t) {
    t === null ? J(ya, ya.current) : J(ya, t.pool);
  }
  function Df() {
    var e = _o();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Fa = Error(u(460)), bo = Error(u(474)), cr = Error(u(542)), fr = { then: function() {
  } };
  function Zf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Rf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(fn, fn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Yf(e), e;
      default:
        if (typeof t.status == "string") t.then(fn, fn);
        else {
          if (e = Be, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Yf(e), e;
        }
        throw _a = t, Fa;
    }
  }
  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (_a = a, Fa) : a;
    }
  }
  var _a = null;
  function Uf() {
    if (_a === null) throw Error(u(459));
    var e = _a;
    return _a = null, e;
  }
  function Yf(e) {
    if (e === Fa || e === cr)
      throw Error(u(483));
  }
  var Ia = null, Vi = 0;
  function dr(e) {
    var t = Vi;
    return Vi += 1, Ia === null && (Ia = []), Rf(Ia, e, t);
  }
  function Gi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function mr(e, t) {
    throw t.$$typeof === x ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Xf(e) {
    function t(T, z) {
      if (e) {
        var E = T.deletions;
        E === null ? (T.deletions = [z], T.flags |= 16) : E.push(z);
      }
    }
    function a(T, z) {
      if (!e) return null;
      for (; z !== null; )
        t(T, z), z = z.sibling;
      return null;
    }
    function l(T) {
      for (var z = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? z.set(T.key, T) : z.set(T.index, T), T = T.sibling;
      return z;
    }
    function o(T, z) {
      return T = mn(T, z), T.index = 0, T.sibling = null, T;
    }
    function c(T, z, E) {
      return T.index = E, e ? (E = T.alternate, E !== null ? (E = E.index, E < z ? (T.flags |= 67108866, z) : E) : (T.flags |= 67108866, z)) : (T.flags |= 1048576, z);
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, z, E, Z) {
      return z === null || z.tag !== 6 ? (z = uo(E, T.mode, Z), z.return = T, z) : (z = o(z, E), z.return = T, z);
    }
    function b(T, z, E, Z) {
      var ae = E.type;
      return ae === q ? N(
        T,
        z,
        E.props.children,
        Z,
        E.key
      ) : z !== null && (z.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ne && ga(ae) === z.type) ? (z = o(z, E.props), Gi(z, E), z.return = T, z) : (z = lr(
        E.type,
        E.key,
        E.props,
        null,
        T.mode,
        Z
      ), Gi(z, E), z.return = T, z);
    }
    function A(T, z, E, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== E.containerInfo || z.stateNode.implementation !== E.implementation ? (z = oo(E, T.mode, Z), z.return = T, z) : (z = o(z, E.children || []), z.return = T, z);
    }
    function N(T, z, E, Z, ae) {
      return z === null || z.tag !== 7 ? (z = ma(
        E,
        T.mode,
        Z,
        ae
      ), z.return = T, z) : (z = o(z, E), z.return = T, z);
    }
    function Y(T, z, E) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = uo(
          "" + z,
          T.mode,
          E
        ), z.return = T, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case k:
            return E = lr(
              z.type,
              z.key,
              z.props,
              null,
              T.mode,
              E
            ), Gi(E, z), E.return = T, E;
          case j:
            return z = oo(
              z,
              T.mode,
              E
            ), z.return = T, z;
          case ne:
            return z = ga(z), Y(T, z, E);
        }
        if (Ve(z) || ve(z))
          return z = ma(
            z,
            T.mode,
            E,
            null
          ), z.return = T, z;
        if (typeof z.then == "function")
          return Y(T, dr(z), E);
        if (z.$$typeof === V)
          return Y(
            T,
            or(T, z),
            E
          );
        mr(T, z);
      }
      return null;
    }
    function C(T, z, E, Z) {
      var ae = z !== null ? z.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return ae !== null ? null : y(T, z, "" + E, Z);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            return E.key === ae ? b(T, z, E, Z) : null;
          case j:
            return E.key === ae ? A(T, z, E, Z) : null;
          case ne:
            return E = ga(E), C(T, z, E, Z);
        }
        if (Ve(E) || ve(E))
          return ae !== null ? null : N(T, z, E, Z, null);
        if (typeof E.then == "function")
          return C(
            T,
            z,
            dr(E),
            Z
          );
        if (E.$$typeof === V)
          return C(
            T,
            z,
            or(T, E),
            Z
          );
        mr(T, E);
      }
      return null;
    }
    function O(T, z, E, Z, ae) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return T = T.get(E) || null, y(z, T, "" + Z, ae);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case k:
            return T = T.get(
              Z.key === null ? E : Z.key
            ) || null, b(z, T, Z, ae);
          case j:
            return T = T.get(
              Z.key === null ? E : Z.key
            ) || null, A(z, T, Z, ae);
          case ne:
            return Z = ga(Z), O(
              T,
              z,
              E,
              Z,
              ae
            );
        }
        if (Ve(Z) || ve(Z))
          return T = T.get(E) || null, N(z, T, Z, ae, null);
        if (typeof Z.then == "function")
          return O(
            T,
            z,
            E,
            dr(Z),
            ae
          );
        if (Z.$$typeof === V)
          return O(
            T,
            z,
            E,
            or(z, Z),
            ae
          );
        mr(z, Z);
      }
      return null;
    }
    function P(T, z, E, Z) {
      for (var ae = null, Ee = null, ee = z, me = z = 0, be = null; ee !== null && me < E.length; me++) {
        ee.index > me ? (be = ee, ee = null) : be = ee.sibling;
        var Ae = C(
          T,
          ee,
          E[me],
          Z
        );
        if (Ae === null) {
          ee === null && (ee = be);
          break;
        }
        e && ee && Ae.alternate === null && t(T, ee), z = c(Ae, z, me), Ee === null ? ae = Ae : Ee.sibling = Ae, Ee = Ae, ee = be;
      }
      if (me === E.length)
        return a(T, ee), we && pn(T, me), ae;
      if (ee === null) {
        for (; me < E.length; me++)
          ee = Y(T, E[me], Z), ee !== null && (z = c(
            ee,
            z,
            me
          ), Ee === null ? ae = ee : Ee.sibling = ee, Ee = ee);
        return we && pn(T, me), ae;
      }
      for (ee = l(ee); me < E.length; me++)
        be = O(
          ee,
          T,
          me,
          E[me],
          Z
        ), be !== null && (e && be.alternate !== null && ee.delete(
          be.key === null ? me : be.key
        ), z = c(
          be,
          z,
          me
        ), Ee === null ? ae = be : Ee.sibling = be, Ee = be);
      return e && ee.forEach(function(In) {
        return t(T, In);
      }), we && pn(T, me), ae;
    }
    function le(T, z, E, Z) {
      if (E == null) throw Error(u(151));
      for (var ae = null, Ee = null, ee = z, me = z = 0, be = null, Ae = E.next(); ee !== null && !Ae.done; me++, Ae = E.next()) {
        ee.index > me ? (be = ee, ee = null) : be = ee.sibling;
        var In = C(T, ee, Ae.value, Z);
        if (In === null) {
          ee === null && (ee = be);
          break;
        }
        e && ee && In.alternate === null && t(T, ee), z = c(In, z, me), Ee === null ? ae = In : Ee.sibling = In, Ee = In, ee = be;
      }
      if (Ae.done)
        return a(T, ee), we && pn(T, me), ae;
      if (ee === null) {
        for (; !Ae.done; me++, Ae = E.next())
          Ae = Y(T, Ae.value, Z), Ae !== null && (z = c(Ae, z, me), Ee === null ? ae = Ae : Ee.sibling = Ae, Ee = Ae);
        return we && pn(T, me), ae;
      }
      for (ee = l(ee); !Ae.done; me++, Ae = E.next())
        Ae = O(ee, T, me, Ae.value, Z), Ae !== null && (e && Ae.alternate !== null && ee.delete(Ae.key === null ? me : Ae.key), z = c(Ae, z, me), Ee === null ? ae = Ae : Ee.sibling = Ae, Ee = Ae);
      return e && ee.forEach(function(Wg) {
        return t(T, Wg);
      }), we && pn(T, me), ae;
    }
    function Ye(T, z, E, Z) {
      if (typeof E == "object" && E !== null && E.type === q && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            e: {
              for (var ae = E.key; z !== null; ) {
                if (z.key === ae) {
                  if (ae = E.type, ae === q) {
                    if (z.tag === 7) {
                      a(
                        T,
                        z.sibling
                      ), Z = o(
                        z,
                        E.props.children
                      ), Z.return = T, T = Z;
                      break e;
                    }
                  } else if (z.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ne && ga(ae) === z.type) {
                    a(
                      T,
                      z.sibling
                    ), Z = o(z, E.props), Gi(Z, E), Z.return = T, T = Z;
                    break e;
                  }
                  a(T, z);
                  break;
                } else t(T, z);
                z = z.sibling;
              }
              E.type === q ? (Z = ma(
                E.props.children,
                T.mode,
                Z,
                E.key
              ), Z.return = T, T = Z) : (Z = lr(
                E.type,
                E.key,
                E.props,
                null,
                T.mode,
                Z
              ), Gi(Z, E), Z.return = T, T = Z);
            }
            return p(T);
          case j:
            e: {
              for (ae = E.key; z !== null; ) {
                if (z.key === ae)
                  if (z.tag === 4 && z.stateNode.containerInfo === E.containerInfo && z.stateNode.implementation === E.implementation) {
                    a(
                      T,
                      z.sibling
                    ), Z = o(z, E.children || []), Z.return = T, T = Z;
                    break e;
                  } else {
                    a(T, z);
                    break;
                  }
                else t(T, z);
                z = z.sibling;
              }
              Z = oo(E, T.mode, Z), Z.return = T, T = Z;
            }
            return p(T);
          case ne:
            return E = ga(E), Ye(
              T,
              z,
              E,
              Z
            );
        }
        if (Ve(E))
          return P(
            T,
            z,
            E,
            Z
          );
        if (ve(E)) {
          if (ae = ve(E), typeof ae != "function") throw Error(u(150));
          return E = ae.call(E), le(
            T,
            z,
            E,
            Z
          );
        }
        if (typeof E.then == "function")
          return Ye(
            T,
            z,
            dr(E),
            Z
          );
        if (E.$$typeof === V)
          return Ye(
            T,
            z,
            or(T, E),
            Z
          );
        mr(T, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, z !== null && z.tag === 6 ? (a(T, z.sibling), Z = o(z, E), Z.return = T, T = Z) : (a(T, z), Z = uo(E, T.mode, Z), Z.return = T, T = Z), p(T)) : a(T, z);
    }
    return function(T, z, E, Z) {
      try {
        Vi = 0;
        var ae = Ye(
          T,
          z,
          E,
          Z
        );
        return Ia = null, ae;
      } catch (ee) {
        if (ee === Fa || ee === cr) throw ee;
        var Ee = jt(29, ee, null, T.mode);
        return Ee.lanes = Z, Ee.return = T, Ee;
      }
    };
  }
  var ba = Xf(!0), Hf = Xf(!1), Rn = !1;
  function So(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wo(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Un(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (je & 2) !== 0) {
      var o = l.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), l.pending = t, t = ir(e), zf(e, null, a), t;
    }
    return ar(e, l, t, a), ir(e);
  }
  function Qi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Oc(e, a);
    }
  }
  function zo(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var o = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = p : c = c.next = p, a = a.next;
        } while (a !== null);
        c === null ? o = c = t : c = c.next = t;
      } else o = c = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var xo = !1;
  function Ki() {
    if (xo) {
      var e = Pa;
      if (e !== null) throw e;
    }
  }
  function Ji(e, t, a, l) {
    xo = !1;
    var o = e.updateQueue;
    Rn = !1;
    var c = o.firstBaseUpdate, p = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var b = y, A = b.next;
      b.next = null, p === null ? c = A : p.next = A, p = b;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, y = N.lastBaseUpdate, y !== p && (y === null ? N.firstBaseUpdate = A : y.next = A, N.lastBaseUpdate = b));
    }
    if (c !== null) {
      var Y = o.baseState;
      p = 0, N = A = b = null, y = c;
      do {
        var C = y.lane & -536870913, O = C !== y.lane;
        if (O ? (_e & C) === C : (l & C) === C) {
          C !== 0 && C === Wa && (xo = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var P = e, le = y;
            C = t;
            var Ye = a;
            switch (le.tag) {
              case 1:
                if (P = le.payload, typeof P == "function") {
                  Y = P.call(Ye, Y, C);
                  break e;
                }
                Y = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = le.payload, C = typeof P == "function" ? P.call(Ye, Y, C) : P, C == null) break e;
                Y = S({}, Y, C);
                break e;
              case 2:
                Rn = !0;
            }
          }
          C = y.callback, C !== null && (e.flags |= 64, O && (e.flags |= 8192), O = o.callbacks, O === null ? o.callbacks = [C] : O.push(C));
        } else
          O = {
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, N === null ? (A = N = O, b = Y) : N = N.next = O, p |= C;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null)
            break;
          O = y, y = O.next, O.next = null, o.lastBaseUpdate = O, o.shared.pending = null;
        }
      } while (!0);
      N === null && (b = Y), o.baseState = b, o.firstBaseUpdate = A, o.lastBaseUpdate = N, c === null && (o.shared.lanes = 0), $n |= p, e.lanes = p, e.memoizedState = Y;
    }
  }
  function Bf(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function qf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Bf(a[e], t);
  }
  var ei = w(null), pr = w(0);
  function $f(e, t) {
    e = Tn, J(pr, e), J(ei, t), Tn = e | t.baseLanes;
  }
  function To() {
    J(pr, Tn), J(ei, ei.current);
  }
  function Eo() {
    Tn = pr.current, D(ei), D(pr);
  }
  var Mt = w(null), Vt = null;
  function Xn(e) {
    var t = e.alternate;
    J(et, et.current & 1), J(Mt, e), Vt === null && (t === null || ei.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function Ao(e) {
    J(et, et.current), J(Mt, e), Vt === null && (Vt = e);
  }
  function Lf(e) {
    e.tag === 22 ? (J(et, et.current), J(Mt, e), Vt === null && (Vt = e)) : Hn();
  }
  function Hn() {
    J(et, et.current), J(Mt, Mt.current);
  }
  function Nt(e) {
    D(Mt), Vt === e && (Vt = null), D(et);
  }
  var et = w(0);
  function hr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Ns(a) || Ds(a)))
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
  var yn = 0, de = null, Re = null, at = null, vr = !1, ti = !1, Sa = !1, yr = 0, Wi = 0, ni = null, Hy = 0;
  function We() {
    throw Error(u(321));
  }
  function ko(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function Co(e, t, a, l, o, c) {
    return yn = c, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Ad : Lo, Sa = !1, c = a(l, o), Sa = !1, ti && (c = Gf(
      t,
      a,
      l,
      o
    )), Vf(e), c;
  }
  function Vf(e) {
    M.H = Ii;
    var t = Re !== null && Re.next !== null;
    if (yn = 0, at = Re = de = null, vr = !1, Wi = 0, ni = null, t) throw Error(u(300));
    e === null || it || (e = e.dependencies, e !== null && ur(e) && (it = !0));
  }
  function Gf(e, t, a, l) {
    de = e;
    var o = 0;
    do {
      if (ti && (ni = null), Wi = 0, ti = !1, 25 <= o) throw Error(u(301));
      if (o += 1, at = Re = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      M.H = kd, c = t(a, l);
    } while (ti);
    return c;
  }
  function By() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Pi(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (de.flags |= 1024), t;
  }
  function Oo() {
    var e = yr !== 0;
    return yr = 0, e;
  }
  function jo(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Mo(e) {
    if (vr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      vr = !1;
    }
    yn = 0, at = Re = de = null, ti = !1, Wi = yr = 0, ni = null;
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? de.memoizedState = at = e : at = at.next = e, at;
  }
  function tt() {
    if (Re === null) {
      var e = de.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = at === null ? de.memoizedState : at.next;
    if (t !== null)
      at = t, Re = e;
    else {
      if (e === null)
        throw de.alternate === null ? Error(u(467)) : Error(u(310));
      Re = e, e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }, at === null ? de.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function gr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pi(e) {
    var t = Wi;
    return Wi += 1, ni === null && (ni = []), e = Rf(ni, e, t), t = de, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Ad : Lo), e;
  }
  function _r(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pi(e);
      if (e.$$typeof === V) return ft(e);
    }
    throw Error(u(438, String(e)));
  }
  function No(e) {
    var t = null, a = de.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = de.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = gr(), de.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = Oe;
    return t.index++, a;
  }
  function gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function br(e) {
    var t = tt();
    return Do(t, Re, e);
  }
  function Do(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = a;
    var o = e.baseQueue, c = l.pending;
    if (c !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = c.next, c.next = p;
      }
      t.baseQueue = o = c, l.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var y = p = null, b = null, A = t, N = !1;
      do {
        var Y = A.lane & -536870913;
        if (Y !== A.lane ? (_e & Y) === Y : (yn & Y) === Y) {
          var C = A.revertLane;
          if (C === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), Y === Wa && (N = !0);
          else if ((yn & C) === C) {
            A = A.next, C === Wa && (N = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, b === null ? (y = b = Y, p = c) : b = b.next = Y, de.lanes |= C, $n |= C;
          Y = A.action, Sa && a(c, Y), c = A.hasEagerState ? A.eagerState : a(c, Y);
        } else
          C = {
            lane: Y,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, b === null ? (y = b = C, p = c) : b = b.next = C, de.lanes |= Y, $n |= Y;
        A = A.next;
      } while (A !== null && A !== t);
      if (b === null ? p = c : b.next = y, !Ot(c, e.memoizedState) && (it = !0, N && (a = Pa, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = b, l.lastRenderedState = c;
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Zo(e) {
    var t = tt(), a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, o = a.pending, c = t.memoizedState;
    if (o !== null) {
      a.pending = null;
      var p = o = o.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== o);
      Ot(c, t.memoizedState) || (it = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
    }
    return [c, l];
  }
  function Qf(e, t, a) {
    var l = de, o = tt(), c = we;
    if (c) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var p = !Ot(
      (Re || o).memoizedState,
      a
    );
    if (p && (o.memoizedState = a, it = !0), o = o.queue, Yo(Wf.bind(null, l, o, e), [
      e
    ]), o.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, ai(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          l,
          o,
          a,
          t
        ),
        null
      ), Be === null) throw Error(u(349));
      c || (yn & 127) !== 0 || Kf(l, t, a);
    }
    return a;
  }
  function Kf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = de.updateQueue, t === null ? (t = gr(), de.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Jf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Pf(t) && Ff(e);
  }
  function Wf(e, t, a) {
    return a(function() {
      Pf(t) && Ff(e);
    });
  }
  function Pf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function Ff(e) {
    var t = da(e, 2);
    t !== null && Et(t, e, 2);
  }
  function Ro(e) {
    var t = yt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Sa) {
        Cn(!0);
        try {
          a();
        } finally {
          Cn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gn,
      lastRenderedState: e
    }, t;
  }
  function If(e, t, a, l) {
    return e.baseState = a, Do(
      e,
      Re,
      typeof l == "function" ? l : gn
    );
  }
  function qy(e, t, a, l, o) {
    if (zr(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: o,
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
      M.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, ed(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function ed(e, t) {
    var a = t.action, l = t.payload, o = e.state;
    if (t.isTransition) {
      var c = M.T, p = {};
      M.T = p;
      try {
        var y = a(o, l), b = M.S;
        b !== null && b(p, y), td(e, t, y);
      } catch (A) {
        Uo(e, t, A);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), M.T = c;
      }
    } else
      try {
        c = a(o, l), td(e, t, c);
      } catch (A) {
        Uo(e, t, A);
      }
  }
  function td(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        nd(e, t, l);
      },
      function(l) {
        return Uo(e, t, l);
      }
    ) : nd(e, t, a);
  }
  function nd(e, t, a) {
    t.status = "fulfilled", t.value = a, ad(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ed(e, a)));
  }
  function Uo(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, ad(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function ad(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function id(e, t) {
    return t;
  }
  function ld(e, t) {
    if (we) {
      var a = Be.formState;
      if (a !== null) {
        e: {
          var l = de;
          if (we) {
            if ($e) {
              t: {
                for (var o = $e, c = Lt; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = Gt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                $e = Gt(
                  o.nextSibling
                ), l = o.data === "F!";
                break e;
              }
            }
            Dn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = yt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: id,
      lastRenderedState: t
    }, a.queue = l, a = xd.bind(
      null,
      de,
      l
    ), l.dispatch = a, l = Ro(!1), c = $o.bind(
      null,
      de,
      !1,
      l.queue
    ), l = yt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = o, a = qy.bind(
      null,
      de,
      o,
      c,
      a
    ), o.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function rd(e) {
    var t = tt();
    return ud(t, Re, e);
  }
  function ud(e, t, a) {
    if (t = Do(
      e,
      t,
      id
    )[0], e = br(gn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Pi(t);
      } catch (p) {
        throw p === Fa ? cr : p;
      }
    else l = t;
    t = tt();
    var o = t.queue, c = o.dispatch;
    return a !== t.memoizedState && (de.flags |= 2048, ai(
      9,
      { destroy: void 0 },
      $y.bind(null, o, a),
      null
    )), [l, c, e];
  }
  function $y(e, t) {
    e.action = t;
  }
  function od(e) {
    var t = tt(), a = Re;
    if (a !== null)
      return ud(t, a, e);
    tt(), t = t.memoizedState, a = tt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ai(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = de.updateQueue, t === null && (t = gr(), de.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function sd() {
    return tt().memoizedState;
  }
  function Sr(e, t, a, l) {
    var o = yt();
    de.flags |= e, o.memoizedState = ai(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function wr(e, t, a, l) {
    var o = tt();
    l = l === void 0 ? null : l;
    var c = o.memoizedState.inst;
    Re !== null && l !== null && ko(l, Re.memoizedState.deps) ? o.memoizedState = ai(t, c, a, l) : (de.flags |= e, o.memoizedState = ai(
      1 | t,
      c,
      a,
      l
    ));
  }
  function cd(e, t) {
    Sr(8390656, 8, e, t);
  }
  function Yo(e, t) {
    wr(2048, 8, e, t);
  }
  function Ly(e) {
    de.flags |= 4;
    var t = de.updateQueue;
    if (t === null)
      t = gr(), de.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function fd(e) {
    var t = tt().memoizedState;
    return Ly({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function dd(e, t) {
    return wr(4, 2, e, t);
  }
  function md(e, t) {
    return wr(4, 4, e, t);
  }
  function pd(e, t) {
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
  function hd(e, t, a) {
    a = a != null ? a.concat([e]) : null, wr(4, 4, pd.bind(null, t, e), a);
  }
  function Xo() {
  }
  function vd(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && ko(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function yd(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && ko(t, l[1]))
      return l[0];
    if (l = e(), Sa) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Ho(e, t, a) {
    return a === void 0 || (yn & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = gm(), de.lanes |= e, $n |= e, a);
  }
  function gd(e, t, a, l) {
    return Ot(a, t) ? a : ei.current !== null ? (e = Ho(e, a, l), Ot(e, t) || (it = !0), e) : (yn & 42) === 0 || (yn & 1073741824) !== 0 && (_e & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = gm(), de.lanes |= e, $n |= e, t);
  }
  function _d(e, t, a, l, o) {
    var c = K.p;
    K.p = c !== 0 && 8 > c ? c : 8;
    var p = M.T, y = {};
    M.T = y, $o(e, !1, t, a);
    try {
      var b = o(), A = M.S;
      if (A !== null && A(y, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var N = Xy(
          b,
          l
        );
        Fi(
          e,
          t,
          N,
          Rt(e)
        );
      } else
        Fi(
          e,
          t,
          l,
          Rt(e)
        );
    } catch (Y) {
      Fi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Y },
        Rt()
      );
    } finally {
      K.p = c, p !== null && y.types !== null && (p.types = y.types), M.T = p;
    }
  }
  function Vy() {
  }
  function Bo(e, t, a, l) {
    if (e.tag !== 5) throw Error(u(476));
    var o = bd(e).queue;
    _d(
      e,
      o,
      t,
      I,
      a === null ? Vy : function() {
        return Sd(e), a(l);
      }
    );
  }
  function bd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: I
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
        lastRenderedReducer: gn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Sd(e) {
    var t = bd(e);
    t.next === null && (t = e.alternate.memoizedState), Fi(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function qo() {
    return ft(hl);
  }
  function wd() {
    return tt().memoizedState;
  }
  function zd() {
    return tt().memoizedState;
  }
  function Gy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Rt();
          e = Un(a);
          var l = Yn(t, e, a);
          l !== null && (Et(l, t, a), Qi(l, t, a)), t = { cache: yo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Qy(e, t, a) {
    var l = Rt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zr(e) ? Td(t, a) : (a = lo(e, t, a, l), a !== null && (Et(a, e, l), Ed(a, t, l)));
  }
  function xd(e, t, a) {
    var l = Rt();
    Fi(e, t, a, l);
  }
  function Fi(e, t, a, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (zr(e)) Td(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (o.hasEagerState = !0, o.eagerState = y, Ot(y, p))
            return ar(e, t, o, 0), Be === null && nr(), !1;
        } catch {
        }
      if (a = lo(e, t, o, l), a !== null)
        return Et(a, e, l), Ed(a, t, l), !0;
    }
    return !1;
  }
  function $o(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ss(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zr(e)) {
      if (t) throw Error(u(479));
    } else
      t = lo(
        e,
        a,
        l,
        2
      ), t !== null && Et(t, e, 2);
  }
  function zr(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de;
  }
  function Td(e, t) {
    ti = vr = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Ed(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Oc(e, a);
    }
  }
  var Ii = {
    readContext: ft,
    use: _r,
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
  Ii.useEffectEvent = We;
  var Ad = {
    readContext: ft,
    use: _r,
    useCallback: function(e, t) {
      return yt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: cd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Sr(
        4194308,
        4,
        pd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Sr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Sr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = yt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Sa) {
        Cn(!0);
        try {
          e();
        } finally {
          Cn(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = yt();
      if (a !== void 0) {
        var o = a(t);
        if (Sa) {
          Cn(!0);
          try {
            a(t);
          } finally {
            Cn(!1);
          }
        }
      } else o = t;
      return l.memoizedState = l.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, l.queue = e, e = e.dispatch = Qy.bind(
        null,
        de,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = yt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ro(e);
      var t = e.queue, a = xd.bind(null, de, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var a = yt();
      return Ho(a, e, t);
    },
    useTransition: function() {
      var e = Ro(!1);
      return e = _d.bind(
        null,
        de,
        e.queue,
        !0,
        !1
      ), yt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = de, o = yt();
      if (we) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = t(), Be === null)
          throw Error(u(349));
        (_e & 127) !== 0 || Kf(l, t, a);
      }
      o.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return o.queue = c, cd(Wf.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ai(
        9,
        { destroy: void 0 },
        Jf.bind(
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
      var e = yt(), t = Be.identifierPrefix;
      if (we) {
        var a = rn, l = ln;
        a = (l & ~(1 << 32 - Ct(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = yr++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Hy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: qo,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(e) {
      var t = yt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = $o.bind(
        null,
        de,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: No,
    useCacheRefresh: function() {
      return yt().memoizedState = Gy.bind(
        null,
        de
      );
    },
    useEffectEvent: function(e) {
      var t = yt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((je & 2) !== 0)
          throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Lo = {
    readContext: ft,
    use: _r,
    useCallback: vd,
    useContext: ft,
    useEffect: Yo,
    useImperativeHandle: hd,
    useInsertionEffect: dd,
    useLayoutEffect: md,
    useMemo: yd,
    useReducer: br,
    useRef: sd,
    useState: function() {
      return br(gn);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var a = tt();
      return gd(
        a,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = br(gn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Pi(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: wd,
    useHostTransitionStatus: qo,
    useFormState: rd,
    useActionState: rd,
    useOptimistic: function(e, t) {
      var a = tt();
      return If(a, Re, e, t);
    },
    useMemoCache: No,
    useCacheRefresh: zd
  };
  Lo.useEffectEvent = fd;
  var kd = {
    readContext: ft,
    use: _r,
    useCallback: vd,
    useContext: ft,
    useEffect: Yo,
    useImperativeHandle: hd,
    useInsertionEffect: dd,
    useLayoutEffect: md,
    useMemo: yd,
    useReducer: Zo,
    useRef: sd,
    useState: function() {
      return Zo(gn);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var a = tt();
      return Re === null ? Ho(a, e, t) : gd(
        a,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Zo(gn)[0], t = tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Pi(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: wd,
    useHostTransitionStatus: qo,
    useFormState: od,
    useActionState: od,
    useOptimistic: function(e, t) {
      var a = tt();
      return Re !== null ? If(a, Re, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: No,
    useCacheRefresh: zd
  };
  kd.useEffectEvent = fd;
  function Vo(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Go = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Rt(), o = Un(l);
      o.payload = t, a != null && (o.callback = a), t = Yn(e, o, l), t !== null && (Et(t, e, l), Qi(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Rt(), o = Un(l);
      o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Yn(e, o, l), t !== null && (Et(t, e, l), Qi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Rt(), l = Un(a);
      l.tag = 2, t != null && (l.callback = t), t = Yn(e, l, a), t !== null && (Et(t, e, a), Qi(t, e, a));
    }
  };
  function Cd(e, t, a, l, o, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, l) || !Xi(o, c) : !0;
  }
  function Od(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Go.enqueueReplaceState(t, t.state, null);
  }
  function wa(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = S({}, a));
      for (var o in e)
        a[o] === void 0 && (a[o] = e[o]);
    }
    return a;
  }
  function jd(e) {
    tr(e);
  }
  function Md(e) {
    console.error(e);
  }
  function Nd(e) {
    tr(e);
  }
  function xr(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Dd(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Qo(e, t, a) {
    return a = Un(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      xr(e, t);
    }, a;
  }
  function Zd(e) {
    return e = Un(e), e.tag = 3, e;
  }
  function Rd(e, t, a, l) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = l.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        Dd(t, a, l);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Dd(t, a, l), typeof o != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Ky(e, t, a, l, o) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Ja(
        t,
        a,
        o,
        !0
      ), a = Mt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? Rr() : a.alternate === null && Pe === 0 && (Pe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, l === fr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), gs(e, l, o)), !1;
          case 22:
            return a.flags |= 65536, l === fr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), gs(e, l, o)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return gs(e, l, o), Rr(), !1;
    }
    if (we)
      return t = Mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, l !== fo && (e = Error(u(422), { cause: l }), qi(Bt(e, a)))) : (l !== fo && (t = Error(u(423), {
        cause: l
      }), qi(
        Bt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, l = Bt(l, a), o = Qo(
        e.stateNode,
        l,
        o
      ), zo(e, o), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(u(520), { cause: l });
    if (c = Bt(c, a), ul === null ? ul = [c] : ul.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    l = Bt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Qo(a.stateNode, l, e), zo(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Ln === null || !Ln.has(c))))
            return a.flags |= 65536, o &= -o, a.lanes |= o, o = Zd(o), Rd(
              o,
              e,
              a,
              l
            ), zo(a, o), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ko = Error(u(461)), it = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? Hf(t, null, a, l) : ba(
      t,
      e.child,
      a,
      l
    );
  }
  function Ud(e, t, a, l, o) {
    a = a.render;
    var c = t.ref;
    if ("ref" in l) {
      var p = {};
      for (var y in l)
        y !== "ref" && (p[y] = l[y]);
    } else p = l;
    return va(t), l = Co(
      e,
      t,
      a,
      p,
      c,
      o
    ), y = Oo(), e !== null && !it ? (jo(e, t, o), _n(e, t, o)) : (we && y && so(t), t.flags |= 1, dt(e, t, l, o), t.child);
  }
  function Yd(e, t, a, l, o) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !ro(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Xd(
        e,
        t,
        c,
        l,
        o
      )) : (e = lr(
        a.type,
        null,
        l,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !ns(e, o)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(p, l) && e.ref === t.ref)
        return _n(e, t, o);
    }
    return t.flags |= 1, e = mn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xd(e, t, a, l, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Xi(c, l) && e.ref === t.ref)
        if (it = !1, t.pendingProps = l = c, ns(e, o))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, _n(e, t, o);
    }
    return Jo(
      e,
      t,
      a,
      l,
      o
    );
  }
  function Hd(e, t, a, l) {
    var o = l.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, o = 0; l !== null; )
            o = o | l.lanes | l.childLanes, l = l.sibling;
          l = o & ~c;
        } else l = 0, t.child = null;
        return Bd(
          e,
          t,
          c,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && sr(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? $f(t, c) : To(), Lf(t);
      else
        return l = t.lanes = 536870912, Bd(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          l
        );
    } else
      c !== null ? (sr(t, c.cachePool), $f(t, c), Hn(), t.memoizedState = null) : (e !== null && sr(t, null), To(), Hn());
    return dt(e, t, o, a), t.child;
  }
  function el(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Bd(e, t, a, l, o) {
    var c = _o();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && sr(t, null), To(), Lf(t), e !== null && Ja(e, t, l, !0), t.childLanes = o, null;
  }
  function Tr(e, t) {
    return t = Ar(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function qd(e, t, a) {
    return ba(t, e.child, null, a), e = Tr(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e;
  }
  function Jy(e, t, a) {
    var l = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (l.mode === "hidden")
          return e = Tr(t, l), t.lanes = 536870912, el(null, e);
        if (Ao(t), (e = $e) ? (e = ep(
          e,
          Lt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: ln, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Tf(e), a.return = t, t.child = a, ct = t, $e = null)) : e = null, e === null) throw Dn(t);
        return t.lanes = 536870912, null;
      }
      return Tr(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (Ao(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = qd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (it || Ja(e, t, a, !1), o = (a & e.childLanes) !== 0, it || o) {
        if (l = Be, l !== null && (p = jc(l, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, da(e, p), Et(l, e, p), Ko;
        Rr(), t = qd(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, $e = Gt(p.nextSibling), ct = t, we = !0, Nn = null, Lt = !1, e !== null && kf(t, e), t = Tr(t, l), t.flags |= 4096;
      return t;
    }
    return e = mn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Er(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Jo(e, t, a, l, o) {
    return va(t), a = Co(
      e,
      t,
      a,
      l,
      void 0,
      o
    ), l = Oo(), e !== null && !it ? (jo(e, t, o), _n(e, t, o)) : (we && l && so(t), t.flags |= 1, dt(e, t, a, o), t.child);
  }
  function $d(e, t, a, l, o, c) {
    return va(t), t.updateQueue = null, a = Gf(
      t,
      l,
      a,
      o
    ), Vf(e), l = Oo(), e !== null && !it ? (jo(e, t, c), _n(e, t, c)) : (we && l && so(t), t.flags |= 1, dt(e, t, a, c), t.child);
  }
  function Ld(e, t, a, l, o) {
    if (va(t), t.stateNode === null) {
      var c = Va, p = a.contextType;
      typeof p == "object" && p !== null && (c = ft(p)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Go, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, So(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? ft(p) : Va, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Vo(
        t,
        a,
        p,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Go.enqueueReplaceState(c, c.state, null), Ji(t, l, c, o), Ki(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, b = wa(a, y);
      c.props = b;
      var A = c.context, N = a.contextType;
      p = Va, typeof N == "object" && N !== null && (p = ft(N));
      var Y = a.getDerivedStateFromProps;
      N = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, N || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || A !== p) && Od(
        t,
        c,
        l,
        p
      ), Rn = !1;
      var C = t.memoizedState;
      c.state = C, Ji(t, l, c, o), Ki(), A = t.memoizedState, y || C !== A || Rn ? (typeof Y == "function" && (Vo(
        t,
        a,
        Y,
        l
      ), A = t.memoizedState), (b = Rn || Cd(
        t,
        a,
        b,
        l,
        C,
        A,
        p
      )) ? (N || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = A), c.props = l, c.state = A, c.context = p, l = b) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, wo(e, t), p = t.memoizedProps, N = wa(a, p), c.props = N, Y = t.pendingProps, C = c.context, A = a.contextType, b = Va, typeof A == "object" && A !== null && (b = ft(A)), y = a.getDerivedStateFromProps, (A = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== Y || C !== b) && Od(
        t,
        c,
        l,
        b
      ), Rn = !1, C = t.memoizedState, c.state = C, Ji(t, l, c, o), Ki();
      var O = t.memoizedState;
      p !== Y || C !== O || Rn || e !== null && e.dependencies !== null && ur(e.dependencies) ? (typeof y == "function" && (Vo(
        t,
        a,
        y,
        l
      ), O = t.memoizedState), (N = Rn || Cd(
        t,
        a,
        N,
        l,
        C,
        O,
        b
      ) || e !== null && e.dependencies !== null && ur(e.dependencies)) ? (A || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, O, b), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        O,
        b
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), c.props = l, c.state = O, c.context = b, l = N) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, Er(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = ba(
      t,
      e.child,
      null,
      o
    ), t.child = ba(
      t,
      null,
      a,
      o
    )) : dt(e, t, a, o), t.memoizedState = c.state, e = t.child) : e = _n(
      e,
      t,
      o
    ), e;
  }
  function Vd(e, t, a, l) {
    return pa(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var Wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Po(e) {
    return { baseLanes: e, cachePool: Df() };
  }
  function Fo(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Zt), e;
  }
  function Gd(e, t, a) {
    var l = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (o ? Xn(t) : Hn(), (e = $e) ? (e = ep(
          e,
          Lt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: ln, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Tf(e), a.return = t, t.child = a, ct = t, $e = null)) : e = null, e === null) throw Dn(t);
        return Ds(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, o ? (Hn(), o = t.mode, y = Ar(
        { mode: "hidden", children: y },
        o
      ), l = ma(
        l,
        o,
        a,
        null
      ), y.return = t, l.return = t, y.sibling = l, t.child = y, l = t.child, l.memoizedState = Po(a), l.childLanes = Fo(
        e,
        p,
        a
      ), t.memoizedState = Wo, el(null, l)) : (Xn(t), Io(t, y));
    }
    var b = e.memoizedState;
    if (b !== null && (y = b.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Xn(t), t.flags &= -257, t = es(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Hn(), t.child = e.child, t.flags |= 128, t = null) : (Hn(), y = l.fallback, o = t.mode, l = Ar(
          { mode: "visible", children: l.children },
          o
        ), y = ma(
          y,
          o,
          a,
          null
        ), y.flags |= 2, l.return = t, y.return = t, l.sibling = y, t.child = l, ba(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Po(a), l.childLanes = Fo(
          e,
          p,
          a
        ), t.memoizedState = Wo, t = el(null, l));
      else if (Xn(t), Ds(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var A = p.dgst;
        p = A, l = Error(u(419)), l.stack = "", l.digest = p, qi({ value: l, source: null, stack: null }), t = es(
          e,
          t,
          a
        );
      } else if (it || Ja(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = Be, p !== null && (l = jc(p, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, da(e, l), Et(p, e, l), Ko;
        Ns(y) || Rr(), t = es(
          e,
          t,
          a
        );
      } else
        Ns(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, $e = Gt(
          y.nextSibling
        ), ct = t, we = !0, Nn = null, Lt = !1, e !== null && kf(t, e), t = Io(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Hn(), y = l.fallback, o = t.mode, b = e.child, A = b.sibling, l = mn(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, A !== null ? y = mn(
      A,
      y
    ) : (y = ma(
      y,
      o,
      a,
      null
    ), y.flags |= 2), y.return = t, l.return = t, l.sibling = y, t.child = l, el(null, l), l = t.child, y = e.child.memoizedState, y === null ? y = Po(a) : (o = y.cachePool, o !== null ? (b = nt._currentValue, o = o.parent !== b ? { parent: b, pool: b } : o) : o = Df(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: o
    }), l.memoizedState = y, l.childLanes = Fo(
      e,
      p,
      a
    ), t.memoizedState = Wo, el(e.child, l)) : (Xn(t), a = e.child, e = a.sibling, a = mn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Io(e, t) {
    return t = Ar(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ar(e, t) {
    return e = jt(22, e, null, t), e.lanes = 0, e;
  }
  function es(e, t, a) {
    return ba(t, e.child, null, a), e = Io(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ho(e.return, t, a);
  }
  function ts(e, t, a, l, o, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: o,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = a, p.tailMode = o, p.treeForkCount = c);
  }
  function Kd(e, t, a) {
    var l = t.pendingProps, o = l.revealOrder, c = l.tail;
    l = l.children;
    var p = et.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, J(et, p), dt(e, t, l, a), l = we ? Bi : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Qd(e, a, t);
        else if (e.tag === 19)
          Qd(e, a, t);
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
          e = a.alternate, e !== null && hr(e) === null && (o = a), a = a.sibling;
        a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), ts(
          t,
          !1,
          o,
          a,
          c,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && hr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = a, a = o, o = e;
        }
        ts(
          t,
          !0,
          a,
          null,
          c,
          l
        );
        break;
      case "together":
        ts(
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
  function _n(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ja(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, a = mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = mn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ns(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ur(e)));
  }
  function Wy(e, t, a) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo), Zn(t, nt, e.memoizedState.cache), pa();
        break;
      case 27:
      case 5:
        tn(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        Zn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ao(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Xn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Gd(e, t, a) : (Xn(t), e = _n(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Xn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Ja(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), o) {
          if (l)
            return Kd(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(et, et.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Hd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Zn(t, nt, e.memoizedState.cache);
    }
    return _n(e, t, a);
  }
  function Jd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!ns(e, a) && (t.flags & 128) === 0)
          return it = !1, Wy(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, we && (t.flags & 1048576) !== 0 && Af(t, Bi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function")
            ro(e) ? (l = wa(e, l), t.tag = 1, t = Ld(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Jo(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === H) {
                t.tag = 11, t = Ud(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (o === U) {
                t.tag = 14, t = Yd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Me(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Jo(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, o = wa(
          l,
          t.pendingProps
        ), Ld(
          e,
          t,
          l,
          o,
          a
        );
      case 3:
        e: {
          if (Je(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, wo(e, t), Ji(t, l, null, a);
          var p = t.memoizedState;
          if (l = p.cache, Zn(t, nt, l), l !== c.cache && vo(
            t,
            [nt],
            a,
            !0
          ), Ki(), l = p.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Vd(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== o) {
              o = Bt(
                Error(u(424)),
                t
              ), qi(o), t = Vd(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, $e = Gt(e.firstChild), ct = t, we = !0, Nn = null, Lt = !0, a = Hf(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (pa(), l === o) {
              t = _n(
                e,
                t,
                a
              );
              break e;
            }
            dt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Er(e, t), e === null ? (a = rp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : we || (a = t.type, e = t.pendingProps, l = $r(
          se.current
        ).createElement(a), l[st] = t, l[bt] = e, mt(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = rp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return tn(t), e === null && we && (l = t.stateNode = ap(
          t.type,
          t.pendingProps,
          se.current
        ), ct = t, Lt = !0, o = $e, Kn(t.type) ? (Zs = o, $e = Gt(l.firstChild)) : $e = o), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Er(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((o = l = $e) && (l = Eg(
          l,
          t.type,
          t.pendingProps,
          Lt
        ), l !== null ? (t.stateNode = l, ct = t, $e = Gt(l.firstChild), Lt = !1, o = !0) : o = !1), o || Dn(t)), tn(t), o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = c.children, Os(o, c) ? l = null : p !== null && Os(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = Co(
          e,
          t,
          By,
          null,
          null,
          a
        ), hl._currentValue = o), Er(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && we && ((e = a = $e) && (a = Ag(
          a,
          t.pendingProps,
          Lt
        ), a !== null ? (t.stateNode = a, ct = t, $e = null, e = !0) : e = !1), e || Dn(t)), null;
      case 13:
        return Gd(e, t, a);
      case 4:
        return Je(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ba(
          t,
          null,
          l,
          a
        ) : dt(e, t, l, a), t.child;
      case 11:
        return Ud(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Zn(t, t.type, l.value), dt(e, t, l.children, a), t.child;
      case 9:
        return o = t.type._context, l = t.pendingProps.children, va(t), o = ft(o), l = l(o), t.flags |= 1, dt(e, t, l, a), t.child;
      case 14:
        return Yd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Xd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Kd(e, t, a);
      case 31:
        return Jy(e, t, a);
      case 22:
        return Hd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return va(t), l = ft(nt), e === null ? (o = _o(), o === null && (o = Be, c = yo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), t.memoizedState = { parent: l, cache: o }, So(t), Zn(t, nt, o)) : ((e.lanes & a) !== 0 && (wo(e, t), Ji(t, null, null, a), Ki()), o = e.memoizedState, c = t.memoizedState, o.parent !== l ? (o = { parent: l, cache: l }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Zn(t, nt, l)) : (l = c.cache, Zn(t, nt, l), l !== o.cache && vo(
          t,
          [nt],
          a,
          !0
        ))), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function bn(e) {
    e.flags |= 4;
  }
  function as(e, t, a, l, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (wm()) e.flags |= 8192;
        else
          throw _a = fr, bo;
    } else e.flags &= -16777217;
  }
  function Wd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !fp(t))
      if (wm()) e.flags |= 8192;
      else
        throw _a = fr, bo;
  }
  function kr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? kc() : 536870912, e.lanes |= t, ui |= t);
  }
  function tl(e, t) {
    if (!we)
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
      for (var o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, l |= o.subtreeFlags & 65011712, l |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Py(e, t, a) {
    var l = t.pendingProps;
    switch (co(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), vn(nt), qe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ka(t) ? bn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, mo())), Le(t), null;
      case 26:
        var o = t.type, c = t.memoizedState;
        return e === null ? (bn(t), c !== null ? (Le(t), Wd(t, c)) : (Le(t), as(
          t,
          o,
          null,
          l,
          a
        ))) : c ? c !== e.memoizedState ? (bn(t), Le(t), Wd(t, c)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && bn(t), Le(t), as(
          t,
          o,
          e,
          l,
          a
        )), null;
      case 27:
        if (nn(t), a = se.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && bn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Le(t), null;
          }
          e = W.current, Ka(t) ? Cf(t) : (e = ap(o, l, a), t.stateNode = e, bn(t));
        }
        return Le(t), null;
      case 5:
        if (nn(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && bn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Le(t), null;
          }
          if (c = W.current, Ka(t))
            Cf(t);
          else {
            var p = $r(
              se.current
            );
            switch (c) {
              case 1:
                c = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                c = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    c = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
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
                    c = typeof l.is == "string" ? p.createElement(o, { is: l.is }) : p.createElement(o);
                }
            }
            c[st] = t, c[bt] = l;
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
            e: switch (mt(c, o, l), o) {
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
            l && bn(t);
          }
        }
        return Le(t), as(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && bn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = se.current, Ka(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, o = ct, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            e[st] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Gm(e.nodeValue, a)), e || Dn(t, !0);
          } else
            e = $r(e).createTextNode(
              l
            ), e[st] = t, t.stateNode = e;
        }
        return Le(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ka(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[st] = t;
            } else
              pa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), e = !1;
          } else
            a = mo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Le(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ka(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[st] = t;
            } else
              pa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), o = !1;
          } else
            o = mo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
        }
        return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== o && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), kr(t, t.updateQueue), Le(t), null);
      case 4:
        return qe(), e === null && Ts(t.stateNode.containerInfo), Le(t), null;
      case 10:
        return vn(t.type), Le(t), null;
      case 19:
        if (D(et), l = t.memoizedState, l === null) return Le(t), null;
        if (o = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (o) tl(l, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = hr(e), c !== null) {
                  for (t.flags |= 128, tl(l, !1), e = c.updateQueue, t.updateQueue = e, kr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    xf(a, e), a = a.sibling;
                  return J(
                    et,
                    et.current & 1 | 2
                  ), we && pn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && vt() > Nr && (t.flags |= 128, o = !0, tl(l, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = hr(c), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, kr(t, e), tl(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !we)
                return Le(t), null;
            } else
              2 * vt() - l.renderingStartTime > Nr && a !== 536870912 && (t.flags |= 128, o = !0, tl(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = vt(), e.sibling = null, a = et.current, J(
          et,
          o ? a & 1 | 2 : a & 1
        ), we && pn(t, l.treeForkCount), e) : (Le(t), null);
      case 22:
      case 23:
        return Nt(t), Eo(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), a = t.updateQueue, a !== null && kr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && D(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vn(nt), Le(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Fy(e, t) {
    switch (co(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return vn(nt), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return nn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Nt(t), t.alternate === null)
            throw Error(u(340));
          pa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          pa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(et), null;
      case 4:
        return qe(), null;
      case 10:
        return vn(t.type), null;
      case 22:
      case 23:
        return Nt(t), Eo(), e !== null && D(ya), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return vn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Pd(e, t) {
    switch (co(t), t.tag) {
      case 3:
        vn(nt), qe();
        break;
      case 26:
      case 27:
      case 5:
        nn(t);
        break;
      case 4:
        qe();
        break;
      case 31:
        t.memoizedState !== null && Nt(t);
        break;
      case 13:
        Nt(t);
        break;
      case 19:
        D(et);
        break;
      case 10:
        vn(t.type);
        break;
      case 22:
      case 23:
        Nt(t), Eo(), e !== null && D(ya);
        break;
      case 24:
        vn(nt);
    }
  }
  function nl(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var c = a.create, p = a.inst;
            l = c(), p.destroy = l;
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (y) {
      De(t, t.return, y);
    }
  }
  function Bn(e, t, a) {
    try {
      var l = t.updateQueue, o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst, y = p.destroy;
            if (y !== void 0) {
              p.destroy = void 0, o = t;
              var b = a, A = y;
              try {
                A();
              } catch (N) {
                De(
                  o,
                  b,
                  N
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (N) {
      De(t, t.return, N);
    }
  }
  function Fd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        qf(t, a);
      } catch (l) {
        De(e, e.return, l);
      }
    }
  }
  function Id(e, t, a) {
    a.props = wa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      De(e, t, l);
    }
  }
  function al(e, t) {
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
    } catch (o) {
      De(e, t, o);
    }
  }
  function un(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          De(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          De(e, t, o);
        }
      else a.current = null;
  }
  function em(e) {
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
    } catch (o) {
      De(e, e.return, o);
    }
  }
  function is(e, t, a) {
    try {
      var l = e.stateNode;
      bg(l, e.type, a, t), l[bt] = t;
    } catch (o) {
      De(e, e.return, o);
    }
  }
  function tm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Kn(e.type) || e.tag === 4;
  }
  function ls(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Kn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = fn));
    else if (l !== 4 && (l === 27 && Kn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (rs(e, t, a), e = e.sibling; e !== null; )
        rs(e, t, a), e = e.sibling;
  }
  function Cr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Kn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Cr(e, t, a), e = e.sibling; e !== null; )
        Cr(e, t, a), e = e.sibling;
  }
  function nm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      mt(t, l, a), t[st] = e, t[bt] = a;
    } catch (c) {
      De(e, e.return, c);
    }
  }
  var Sn = !1, lt = !1, us = !1, am = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function Iy(e, t) {
    if (e = e.containerInfo, ks = Wr, e = hf(e), Iu(e)) {
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
            var o = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0, y = -1, b = -1, A = 0, N = 0, Y = e, C = null;
            t: for (; ; ) {
              for (var O; Y !== a || o !== 0 && Y.nodeType !== 3 || (y = p + o), Y !== c || l !== 0 && Y.nodeType !== 3 || (b = p + l), Y.nodeType === 3 && (p += Y.nodeValue.length), (O = Y.firstChild) !== null; )
                C = Y, Y = O;
              for (; ; ) {
                if (Y === e) break t;
                if (C === a && ++A === o && (y = p), C === c && ++N === l && (b = p), (O = Y.nextSibling) !== null) break;
                Y = C, C = Y.parentNode;
              }
              Y = O;
            }
            a = y === -1 || b === -1 ? null : { start: y, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Cs = { focusedElem: e, selectionRange: a }, Wr = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  o = e[a], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, a = t, o = c.memoizedProps, c = c.memoizedState, l = a.stateNode;
                try {
                  var P = wa(
                    a.type,
                    o
                  );
                  e = l.getSnapshotBeforeUpdate(
                    P,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  De(
                    a,
                    a.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Ms(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ms(e);
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function im(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        zn(e, a), l & 4 && nl(5, a);
        break;
      case 1:
        if (zn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              De(a, a.return, p);
            }
          else {
            var o = wa(
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
            } catch (p) {
              De(
                a,
                a.return,
                p
              );
            }
          }
        l & 64 && Fd(a), l & 512 && al(a, a.return);
        break;
      case 3:
        if (zn(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            qf(e, t);
          } catch (p) {
            De(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && nm(a);
      case 26:
      case 5:
        zn(e, a), t === null && l & 4 && em(a), l & 512 && al(a, a.return);
        break;
      case 12:
        zn(e, a);
        break;
      case 31:
        zn(e, a), l & 4 && um(e, a);
        break;
      case 13:
        zn(e, a), l & 4 && om(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = og.bind(
          null,
          a
        ), kg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Sn, !l) {
          t = t !== null && t.memoizedState !== null || lt, o = Sn;
          var c = lt;
          Sn = l, (lt = t) && !c ? xn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : zn(e, a), Sn = o, lt = c;
        }
        break;
      case 30:
        break;
      default:
        zn(e, a);
    }
  }
  function lm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, lm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ru(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, wt = !1;
  function wn(e, t, a) {
    for (a = a.child; a !== null; )
      rm(e, t, a), a = a.sibling;
  }
  function rm(e, t, a) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(Ai, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || un(a, t), wn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || un(a, t);
        var l = Ge, o = wt;
        Kn(a.type) && (Ge = a.stateNode, wt = !1), wn(
          e,
          t,
          a
        ), dl(a.stateNode), Ge = l, wt = o;
        break;
      case 5:
        lt || un(a, t);
      case 6:
        if (l = Ge, o = wt, Ge = null, wn(
          e,
          t,
          a
        ), Ge = l, wt = o, Ge !== null)
          if (wt)
            try {
              (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(a.stateNode);
            } catch (c) {
              De(
                a,
                t,
                c
              );
            }
          else
            try {
              Ge.removeChild(a.stateNode);
            } catch (c) {
              De(
                a,
                t,
                c
              );
            }
        break;
      case 18:
        Ge !== null && (wt ? (e = Ge, Fm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), hi(e)) : Fm(Ge, a.stateNode));
        break;
      case 4:
        l = Ge, o = wt, Ge = a.stateNode.containerInfo, wt = !0, wn(
          e,
          t,
          a
        ), Ge = l, wt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bn(2, a, t), lt || Bn(4, a, t), wn(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (un(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Id(
          a,
          t,
          l
        )), wn(
          e,
          t,
          a
        );
        break;
      case 21:
        wn(
          e,
          t,
          a
        );
        break;
      case 22:
        lt = (l = lt) || a.memoizedState !== null, wn(
          e,
          t,
          a
        ), lt = l;
        break;
      default:
        wn(
          e,
          t,
          a
        );
    }
  }
  function um(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        hi(e);
      } catch (a) {
        De(t, t.return, a);
      }
    }
  }
  function om(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        hi(e);
      } catch (a) {
        De(t, t.return, a);
      }
  }
  function eg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new am()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new am()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Or(e, t) {
    var a = eg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var o = sg.bind(null, e, l);
        l.then(o, o);
      }
    });
  }
  function zt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var o = a[l], c = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Kn(y.type)) {
                Ge = y.stateNode, wt = !1;
                break e;
              }
              break;
            case 5:
              Ge = y.stateNode, wt = !1;
              break e;
            case 3:
            case 4:
              Ge = y.stateNode.containerInfo, wt = !0;
              break e;
          }
          y = y.return;
        }
        if (Ge === null) throw Error(u(160));
        rm(c, p, o), Ge = null, wt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        sm(t, e), t = t.sibling;
  }
  var Pt = null;
  function sm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        zt(t, e), xt(e), l & 4 && (Bn(3, e, e.return), nl(3, e), Bn(5, e, e.return));
        break;
      case 1:
        zt(t, e), xt(e), l & 512 && (lt || a === null || un(a, a.return)), l & 64 && Sn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var o = Pt;
        if (zt(t, e), xt(e), l & 512 && (lt || a === null || un(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (l) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[Oi] || c[st] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(l), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), mt(c, l, a), c[st] = e, ut(c), l = c;
                      break e;
                    case "link":
                      var p = sp(
                        "link",
                        "href",
                        o
                      ).get(l + (a.href || ""));
                      if (p) {
                        for (var y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = o.createElement(l), mt(c, l, a), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = sp(
                        "meta",
                        "content",
                        o
                      ).get(l + (a.content || ""))) {
                        for (y = 0; y < p.length; y++)
                          if (c = p[y], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            p.splice(y, 1);
                            break t;
                          }
                      }
                      c = o.createElement(l), mt(c, l, a), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  c[st] = e, ut(c), l = c;
                }
                e.stateNode = l;
              } else
                cp(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = op(
                o,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? cp(
              o,
              e.type,
              e.stateNode
            ) : op(
              o,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && is(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        zt(t, e), xt(e), l & 512 && (lt || a === null || un(a, a.return)), a !== null && l & 4 && is(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (zt(t, e), xt(e), l & 512 && (lt || a === null || un(a, a.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Ya(o, "");
          } catch (P) {
            De(e, e.return, P);
          }
        }
        l & 4 && e.stateNode != null && (o = e.memoizedProps, is(
          e,
          o,
          a !== null ? a.memoizedProps : o
        )), l & 1024 && (us = !0);
        break;
      case 6:
        if (zt(t, e), xt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (P) {
            De(e, e.return, P);
          }
        }
        break;
      case 3:
        if (Gr = null, o = Pt, Pt = Lr(t.containerInfo), zt(t, e), Pt = o, xt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            hi(t.containerInfo);
          } catch (P) {
            De(e, e.return, P);
          }
        us && (us = !1, cm(e));
        break;
      case 4:
        l = Pt, Pt = Lr(
          e.stateNode.containerInfo
        ), zt(t, e), xt(e), Pt = l;
        break;
      case 12:
        zt(t, e), xt(e);
        break;
      case 31:
        zt(t, e), xt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Or(e, l)));
        break;
      case 13:
        zt(t, e), xt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Mr = vt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Or(e, l)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, A = Sn, N = lt;
        if (Sn = A || o, lt = N || b, zt(t, e), lt = N, Sn = A, xt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || b || Sn || lt || za(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
                try {
                  if (c = b.stateNode, o)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = b.stateNode;
                    var Y = b.memoizedProps.style, C = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                    y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  De(b, b.return, P);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = o ? "" : b.memoizedProps;
                } catch (P) {
                  De(b, b.return, P);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var O = b.stateNode;
                  o ? Im(O, !0) : Im(b.stateNode, !1);
                } catch (P) {
                  De(b, b.return, P);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Or(e, a))));
        break;
      case 19:
        zt(t, e), xt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Or(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        zt(t, e), xt(e);
    }
  }
  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (tm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode, c = ls(e);
            Cr(e, c, o);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ya(p, ""), a.flags &= -33);
            var y = ls(e);
            Cr(e, y, p);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, A = ls(e);
            rs(
              e,
              A,
              b
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (N) {
        De(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function cm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        cm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function zn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        im(e, t.alternate, t), t = t.sibling;
  }
  function za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bn(4, t, t.return), za(t);
          break;
        case 1:
          un(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Id(
            t,
            t.return,
            a
          ), za(t);
          break;
        case 27:
          dl(t.stateNode);
        case 26:
        case 5:
          un(t, t.return), za(t);
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
  function xn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, o = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            o,
            c,
            a
          ), nl(4, c);
          break;
        case 1:
          if (xn(
            o,
            c,
            a
          ), l = c, o = l.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (A) {
              De(l, l.return, A);
            }
          if (l = c, o = l.updateQueue, o !== null) {
            var y = l.stateNode;
            try {
              var b = o.shared.hiddenCallbacks;
              if (b !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < b.length; o++)
                  Bf(b[o], y);
            } catch (A) {
              De(l, l.return, A);
            }
          }
          a && p & 64 && Fd(c), al(c, c.return);
          break;
        case 27:
          nm(c);
        case 26:
        case 5:
          xn(
            o,
            c,
            a
          ), a && l === null && p & 4 && em(c), al(c, c.return);
          break;
        case 12:
          xn(
            o,
            c,
            a
          );
          break;
        case 31:
          xn(
            o,
            c,
            a
          ), a && p & 4 && um(o, c);
          break;
        case 13:
          xn(
            o,
            c,
            a
          ), a && p & 4 && om(o, c);
          break;
        case 22:
          c.memoizedState === null && xn(
            o,
            c,
            a
          ), al(c, c.return);
          break;
        case 30:
          break;
        default:
          xn(
            o,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function os(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && $i(a));
  }
  function ss(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e));
  }
  function Ft(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        fm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function fm(e, t, a, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ft(
          e,
          t,
          a,
          l
        ), o & 2048 && nl(9, t);
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
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $i(e)));
        break;
      case 12:
        if (o & 2048) {
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
            De(t, t.return, b);
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
        ) : il(e, t) : c._visibility & 2 ? Ft(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, ii(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && os(p, t);
        break;
      case 24:
        Ft(
          e,
          t,
          a,
          l
        ), o & 2048 && ss(t.alternate, t);
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
  function ii(e, t, a, l, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, b = l, A = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ii(
            c,
            p,
            y,
            b,
            o
          ), nl(8, p);
          break;
        case 23:
          break;
        case 22:
          var N = p.stateNode;
          p.memoizedState !== null ? N._visibility & 2 ? ii(
            c,
            p,
            y,
            b,
            o
          ) : il(
            c,
            p
          ) : (N._visibility |= 2, ii(
            c,
            p,
            y,
            b,
            o
          )), o && A & 2048 && os(
            p.alternate,
            p
          );
          break;
        case 24:
          ii(
            c,
            p,
            y,
            b,
            o
          ), o && A & 2048 && ss(p.alternate, p);
          break;
        default:
          ii(
            c,
            p,
            y,
            b,
            o
          );
      }
      t = t.sibling;
    }
  }
  function il(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, o = l.flags;
        switch (l.tag) {
          case 22:
            il(a, l), o & 2048 && os(
              l.alternate,
              l
            );
            break;
          case 24:
            il(a, l), o & 2048 && ss(l.alternate, l);
            break;
          default:
            il(a, l);
        }
        t = t.sibling;
      }
  }
  var ll = 8192;
  function li(e, t, a) {
    if (e.subtreeFlags & ll)
      for (e = e.child; e !== null; )
        dm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function dm(e, t, a) {
    switch (e.tag) {
      case 26:
        li(
          e,
          t,
          a
        ), e.flags & ll && e.memoizedState !== null && Hg(
          a,
          Pt,
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
        var l = Pt;
        Pt = Lr(e.stateNode.containerInfo), li(
          e,
          t,
          a
        ), Pt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ll, ll = 16777216, li(
          e,
          t,
          a
        ), ll = l) : li(
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
  function mm(e) {
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
          ot = l, hm(
            l,
            e
          );
        }
      mm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        pm(e), e = e.sibling;
  }
  function pm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        rl(e), e.flags & 2048 && Bn(9, e, e.return);
        break;
      case 3:
        rl(e);
        break;
      case 12:
        rl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, jr(e)) : rl(e);
        break;
      default:
        rl(e);
    }
  }
  function jr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ot = l, hm(
            l,
            e
          );
        }
      mm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, t, t.return), jr(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, jr(t));
          break;
        default:
          jr(t);
      }
      e = e.sibling;
    }
  }
  function hm(e, t) {
    for (; ot !== null; ) {
      var a = ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          $i(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ot = l;
      else
        e: for (a = e; ot !== null; ) {
          l = ot;
          var o = l.sibling, c = l.return;
          if (lm(l), l === a) {
            ot = null;
            break e;
          }
          if (o !== null) {
            o.return = c, ot = o;
            break e;
          }
          ot = c;
        }
    }
  }
  var tg = {
    getCacheForType: function(e) {
      var t = ft(nt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ft(nt).controller.signal;
    }
  }, ng = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Be = null, pe = null, _e = 0, Ne = 0, Dt = null, qn = !1, ri = !1, cs = !1, Tn = 0, Pe = 0, $n = 0, xa = 0, fs = 0, Zt = 0, ui = 0, ul = null, Tt = null, ds = !1, Mr = 0, vm = 0, Nr = 1 / 0, Dr = null, Ln = null, rt = 0, Vn = null, oi = null, En = 0, ms = 0, ps = null, ym = null, ol = 0, hs = null;
  function Rt() {
    return (je & 2) !== 0 && _e !== 0 ? _e & -_e : M.T !== null ? Ss() : Mc();
  }
  function gm() {
    if (Zt === 0)
      if ((_e & 536870912) === 0 || we) {
        var e = ql;
        ql <<= 1, (ql & 3932160) === 0 && (ql = 262144), Zt = e;
      } else Zt = 536870912;
    return e = Mt.current, e !== null && (e.flags |= 32), Zt;
  }
  function Et(e, t, a) {
    (e === Be && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (si(e, 0), Gn(
      e,
      _e,
      Zt,
      !1
    )), Ci(e, a), ((je & 2) === 0 || e !== Be) && (e === Be && ((je & 2) === 0 && (xa |= a), Pe === 4 && Gn(
      e,
      _e,
      Zt,
      !1
    )), on(e));
  }
  function _m(e, t, a) {
    if ((je & 6) !== 0) throw Error(u(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ki(e, t), o = l ? lg(e, t) : ys(e, t, !0), c = l;
    do {
      if (o === 0) {
        ri && !l && Gn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !ag(a)) {
          o = ys(e, t, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var y = e;
              o = ul;
              var b = y.current.memoizedState.isDehydrated;
              if (b && (si(y, p).flags |= 256), p = ys(
                y,
                p,
                !1
              ), p !== 2) {
                if (cs && !b) {
                  y.errorRecoveryDisabledLanes |= c, xa |= c, o = 4;
                  break e;
                }
                c = Tt, Tt = o, c !== null && (Tt === null ? Tt = c : Tt.push.apply(
                  Tt,
                  c
                ));
              }
              o = p;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          si(e, 0), Gn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Gn(
                l,
                t,
                Zt,
                !qn
              );
              break e;
            case 2:
              Tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = Mr + 300 - vt(), 10 < o)) {
            if (Gn(
              l,
              t,
              Zt,
              !qn
            ), Ll(l, 0, !0) !== 0) break e;
            En = t, l.timeoutHandle = Wm(
              bm.bind(
                null,
                l,
                a,
                Tt,
                Dr,
                ds,
                t,
                Zt,
                xa,
                ui,
                qn,
                c,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          bm(
            l,
            a,
            Tt,
            Dr,
            ds,
            t,
            Zt,
            xa,
            ui,
            qn,
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
  function bm(e, t, a, l, o, c, p, y, b, A, N, Y, C, O) {
    if (e.timeoutHandle = -1, Y = t.subtreeFlags, Y & 8192 || (Y & 16785408) === 16785408) {
      Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fn
      }, dm(
        t,
        c,
        Y
      );
      var P = (c & 62914560) === c ? Mr - vt() : (c & 4194048) === c ? vm - vt() : 0;
      if (P = Bg(
        Y,
        P
      ), P !== null) {
        En = c, e.cancelPendingCommit = P(
          km.bind(
            null,
            e,
            t,
            c,
            a,
            l,
            o,
            p,
            y,
            b,
            N,
            Y,
            null,
            C,
            O
          )
        ), Gn(e, c, p, !A);
        return;
      }
    }
    km(
      e,
      t,
      c,
      a,
      l,
      o,
      p,
      y,
      b
    );
  }
  function ag(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var o = a[l], c = o.getSnapshot;
          o = o.value;
          try {
            if (!Ot(c(), o)) return !1;
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
  function Gn(e, t, a, l) {
    t &= ~fs, t &= ~xa, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - Ct(o), p = 1 << c;
      l[c] = -1, o &= ~p;
    }
    a !== 0 && Cc(e, a, t);
  }
  function Zr() {
    return (je & 6) === 0 ? (sl(0), !1) : !0;
  }
  function vs() {
    if (pe !== null) {
      if (Ne === 0)
        var e = pe.return;
      else
        e = pe, hn = ha = null, Mo(e), Ia = null, Vi = 0, e = pe;
      for (; e !== null; )
        Pd(e.alternate, e), e = e.return;
      pe = null;
    }
  }
  function si(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), En = 0, vs(), Be = e, pe = a = mn(e.current, null), _e = t, Ne = 0, Dt = null, qn = !1, ri = ki(e, t), cs = !1, ui = Zt = fs = xa = $n = Pe = 0, Tt = ul = null, ds = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - Ct(l), c = 1 << o;
        t |= e[o], l &= ~c;
      }
    return Tn = t, nr(), a;
  }
  function Sm(e, t) {
    de = null, M.H = Ii, t === Fa || t === cr ? (t = Uf(), Ne = 3) : t === bo ? (t = Uf(), Ne = 4) : Ne = t === Ko ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Dt = t, pe === null && (Pe = 1, xr(
      e,
      Bt(t, e.current)
    ));
  }
  function wm() {
    var e = Mt.current;
    return e === null ? !0 : (_e & 4194048) === _e ? Vt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === Vt : !1;
  }
  function zm() {
    var e = M.H;
    return M.H = Ii, e === null ? Ii : e;
  }
  function xm() {
    var e = M.A;
    return M.A = tg, e;
  }
  function Rr() {
    Pe = 4, qn || (_e & 4194048) !== _e && Mt.current !== null || (ri = !0), ($n & 134217727) === 0 && (xa & 134217727) === 0 || Be === null || Gn(
      Be,
      _e,
      Zt,
      !1
    );
  }
  function ys(e, t, a) {
    var l = je;
    je |= 2;
    var o = zm(), c = xm();
    (Be !== e || _e !== t) && (Dr = null, si(e, t)), t = !1;
    var p = Pe;
    e: do
      try {
        if (Ne !== 0 && pe !== null) {
          var y = pe, b = Dt;
          switch (Ne) {
            case 8:
              vs(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mt.current === null && (t = !0);
              var A = Ne;
              if (Ne = 0, Dt = null, ci(e, y, b, A), a && ri) {
                p = 0;
                break e;
              }
              break;
            default:
              A = Ne, Ne = 0, Dt = null, ci(e, y, b, A);
          }
        }
        ig(), p = Pe;
        break;
      } catch (N) {
        Sm(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, hn = ha = null, je = l, M.H = o, M.A = c, pe === null && (Be = null, _e = 0, nr()), p;
  }
  function ig() {
    for (; pe !== null; ) Tm(pe);
  }
  function lg(e, t) {
    var a = je;
    je |= 2;
    var l = zm(), o = xm();
    Be !== e || _e !== t ? (Dr = null, Nr = vt() + 500, si(e, t)) : ri = ki(
      e,
      t
    );
    e: do
      try {
        if (Ne !== 0 && pe !== null) {
          t = pe;
          var c = Dt;
          t: switch (Ne) {
            case 1:
              Ne = 0, Dt = null, ci(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Zf(c)) {
                Ne = 0, Dt = null, Em(t);
                break;
              }
              t = function() {
                Ne !== 2 && Ne !== 9 || Be !== e || (Ne = 7), on(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Zf(c) ? (Ne = 0, Dt = null, Em(t)) : (Ne = 0, Dt = null, ci(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (pe.tag) {
                case 26:
                  p = pe.memoizedState;
                case 5:
                case 27:
                  var y = pe;
                  if (p ? fp(p) : y.stateNode.complete) {
                    Ne = 0, Dt = null;
                    var b = y.sibling;
                    if (b !== null) pe = b;
                    else {
                      var A = y.return;
                      A !== null ? (pe = A, Ur(A)) : pe = null;
                    }
                    break t;
                  }
              }
              Ne = 0, Dt = null, ci(e, t, c, 5);
              break;
            case 6:
              Ne = 0, Dt = null, ci(e, t, c, 6);
              break;
            case 8:
              vs(), Pe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        rg();
        break;
      } catch (N) {
        Sm(e, N);
      }
    while (!0);
    return hn = ha = null, M.H = l, M.A = o, je = a, pe !== null ? 0 : (Be = null, _e = 0, nr(), Pe);
  }
  function rg() {
    for (; pe !== null && !Ou(); )
      Tm(pe);
  }
  function Tm(e) {
    var t = Jd(e.alternate, e, Tn);
    e.memoizedProps = e.pendingProps, t === null ? Ur(e) : pe = t;
  }
  function Em(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = $d(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = $d(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        Mo(t);
      default:
        Pd(a, t), t = pe = xf(t, Tn), t = Jd(a, t, Tn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ur(e) : pe = t;
  }
  function ci(e, t, a, l) {
    hn = ha = null, Mo(t), Ia = null, Vi = 0;
    var o = t.return;
    try {
      if (Ky(
        e,
        o,
        t,
        a,
        _e
      )) {
        Pe = 1, xr(
          e,
          Bt(a, e.current)
        ), pe = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw pe = o, c;
      Pe = 1, xr(
        e,
        Bt(a, e.current)
      ), pe = null;
      return;
    }
    t.flags & 32768 ? (we || l === 1 ? e = !0 : ri || (_e & 536870912) !== 0 ? e = !1 : (qn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Mt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Am(t, e)) : Ur(t);
  }
  function Ur(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Am(
          t,
          qn
        );
        return;
      }
      e = t.return;
      var a = Py(
        t.alternate,
        t,
        Tn
      );
      if (a !== null) {
        pe = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Am(e, t) {
    do {
      var a = Fy(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, pe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        pe = e;
        return;
      }
      pe = e = a;
    } while (e !== null);
    Pe = 6, pe = null;
  }
  function km(e, t, a, l, o, c, p, y, b) {
    e.cancelPendingCommit = null;
    do
      Yr();
    while (rt !== 0);
    if ((je & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= io, Xv(
        e,
        a,
        c,
        p,
        y,
        b
      ), e === Be && (pe = Be = null, _e = 0), oi = t, Vn = e, En = a, ms = c, ps = o, ym = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cg(ce, function() {
        return Nm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, o = K.p, K.p = 2, p = je, je |= 4;
        try {
          Iy(e, t, a);
        } finally {
          je = p, K.p = o, M.T = l;
        }
      }
      rt = 1, Cm(), Om(), jm();
    }
  }
  function Cm() {
    if (rt === 1) {
      rt = 0;
      var e = Vn, t = oi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var l = K.p;
        K.p = 2;
        var o = je;
        je |= 4;
        try {
          sm(t, e);
          var c = Cs, p = hf(e.containerInfo), y = c.focusedElem, b = c.selectionRange;
          if (p !== y && y && y.ownerDocument && pf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (b !== null && Iu(y)) {
              var A = b.start, N = b.end;
              if (N === void 0 && (N = A), "selectionStart" in y)
                y.selectionStart = A, y.selectionEnd = Math.min(
                  N,
                  y.value.length
                );
              else {
                var Y = y.ownerDocument || document, C = Y && Y.defaultView || window;
                if (C.getSelection) {
                  var O = C.getSelection(), P = y.textContent.length, le = Math.min(b.start, P), Ye = b.end === void 0 ? le : Math.min(b.end, P);
                  !O.extend && le > Ye && (p = Ye, Ye = le, le = p);
                  var T = mf(
                    y,
                    le
                  ), z = mf(
                    y,
                    Ye
                  );
                  if (T && z && (O.rangeCount !== 1 || O.anchorNode !== T.node || O.anchorOffset !== T.offset || O.focusNode !== z.node || O.focusOffset !== z.offset)) {
                    var E = Y.createRange();
                    E.setStart(T.node, T.offset), O.removeAllRanges(), le > Ye ? (O.addRange(E), O.extend(z.node, z.offset)) : (E.setEnd(z.node, z.offset), O.addRange(E));
                  }
                }
              }
            }
            for (Y = [], O = y; O = O.parentNode; )
              O.nodeType === 1 && Y.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < Y.length; y++) {
              var Z = Y[y];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Wr = !!ks, Cs = ks = null;
        } finally {
          je = o, K.p = l, M.T = a;
        }
      }
      e.current = t, rt = 2;
    }
  }
  function Om() {
    if (rt === 2) {
      rt = 0;
      var e = Vn, t = oi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var l = K.p;
        K.p = 2;
        var o = je;
        je |= 4;
        try {
          im(e, t.alternate, t);
        } finally {
          je = o, K.p = l, M.T = a;
        }
      }
      rt = 3;
    }
  }
  function jm() {
    if (rt === 4 || rt === 3) {
      rt = 0, ja();
      var e = Vn, t = oi, a = En, l = ym;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, oi = Vn = null, Mm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Ln = null), Du(a), t = t.stateNode, kt && typeof kt.onCommitFiberRoot == "function")
        try {
          kt.onCommitFiberRoot(
            Ai,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, o = K.p, K.p = 2, M.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          M.T = t, K.p = o;
        }
      }
      (En & 3) !== 0 && Yr(), on(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === hs ? ol++ : (ol = 0, hs = e) : ol = 0, sl(0);
    }
  }
  function Mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $i(t)));
  }
  function Yr() {
    return Cm(), Om(), jm(), Nm();
  }
  function Nm() {
    if (rt !== 5) return !1;
    var e = Vn, t = ms;
    ms = 0;
    var a = Du(En), l = M.T, o = K.p;
    try {
      K.p = 32 > a ? 32 : a, M.T = null, a = ps, ps = null;
      var c = Vn, p = En;
      if (rt = 0, oi = Vn = null, En = 0, (je & 6) !== 0) throw Error(u(331));
      var y = je;
      if (je |= 4, pm(c.current), fm(
        c,
        c.current,
        p,
        a
      ), je = y, sl(0, !1), kt && typeof kt.onPostCommitFiberRoot == "function")
        try {
          kt.onPostCommitFiberRoot(Ai, c);
        } catch {
        }
      return !0;
    } finally {
      K.p = o, M.T = l, Mm(e, t);
    }
  }
  function Dm(e, t, a) {
    t = Bt(a, t), t = Qo(e.stateNode, t, 2), e = Yn(e, t, 2), e !== null && (Ci(e, 2), on(e));
  }
  function De(e, t, a) {
    if (e.tag === 3)
      Dm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Dm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ln === null || !Ln.has(l))) {
            e = Bt(a, e), a = Zd(2), l = Yn(t, a, 2), l !== null && (Rd(
              a,
              l,
              t,
              e
            ), Ci(l, 2), on(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function gs(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ng();
      var o = /* @__PURE__ */ new Set();
      l.set(t, o);
    } else
      o = l.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(t, o));
    o.has(a) || (cs = !0, o.add(a), e = ug.bind(null, e, t, a), t.then(e, e));
  }
  function ug(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Be === e && (_e & a) === a && (Pe === 4 || Pe === 3 && (_e & 62914560) === _e && 300 > vt() - Mr ? (je & 2) === 0 && si(e, 0) : fs |= a, ui === _e && (ui = 0)), on(e);
  }
  function Zm(e, t) {
    t === 0 && (t = kc()), e = da(e, t), e !== null && (Ci(e, t), on(e));
  }
  function og(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Zm(e, a);
  }
  function sg(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, o = e.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(t), Zm(e, a);
  }
  function cg(e, t) {
    return Ti(e, t);
  }
  var Xr = null, fi = null, _s = !1, Hr = !1, bs = !1, Qn = 0;
  function on(e) {
    e !== fi && e.next === null && (fi === null ? Xr = fi = e : fi = fi.next = e), Hr = !0, _s || (_s = !0, dg());
  }
  function sl(e, t) {
    if (!bs && Hr) {
      bs = !0;
      do
        for (var a = !1, l = Xr; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              c = (1 << 31 - Ct(42 | e) + 1) - 1, c &= o & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Xm(l, c));
          } else
            c = _e, c = Ll(
              l,
              l === Be ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || ki(l, c) || (a = !0, Xm(l, c));
          l = l.next;
        }
      while (a);
      bs = !1;
    }
  }
  function fg() {
    Rm();
  }
  function Rm() {
    Hr = _s = !1;
    var e = 0;
    Qn !== 0 && wg() && (e = Qn);
    for (var t = vt(), a = null, l = Xr; l !== null; ) {
      var o = l.next, c = Um(l, t);
      c === 0 ? (l.next = null, a === null ? Xr = o : a.next = o, o === null && (fi = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && (Hr = !0)), l = o;
    }
    rt !== 0 && rt !== 5 || sl(e), Qn !== 0 && (Qn = 0);
  }
  function Um(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - Ct(c), y = 1 << p, b = o[p];
      b === -1 ? ((y & a) === 0 || (y & l) !== 0) && (o[p] = Yv(y, t)) : b <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = Be, a = _e, a = Ll(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ei(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ki(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ei(l), Du(a)) {
        case 2:
        case 8:
          a = Q;
          break;
        case 32:
          a = ce;
          break;
        case 268435456:
          a = an;
          break;
        default:
          a = ce;
      }
      return l = Ym.bind(null, e), a = Ti(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ei(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ym(e, t) {
    if (rt !== 0 && rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Yr() && e.callbackNode !== a)
      return null;
    var l = _e;
    return l = Ll(
      e,
      e === Be ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (_m(e, l, t), Um(e, vt()), e.callbackNode != null && e.callbackNode === a ? Ym.bind(null, e) : null);
  }
  function Xm(e, t) {
    if (Yr()) return null;
    _m(e, t, !0);
  }
  function dg() {
    xg(function() {
      (je & 6) !== 0 ? Ti(
        Hl,
        fg
      ) : Rm();
    });
  }
  function Ss() {
    if (Qn === 0) {
      var e = Wa;
      e === 0 && (e = Bl, Bl <<= 1, (Bl & 261888) === 0 && (Bl = 256)), Qn = e;
    }
    return Qn;
  }
  function Hm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Kl("" + e);
  }
  function Bm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function mg(e, t, a, l, o) {
    if (t === "submit" && a && a.stateNode === o) {
      var c = Hm(
        (o[bt] || null).action
      ), p = l.submitter;
      p && (t = (t = p[bt] || null) ? Hm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new Fl(
        "action",
        "action",
        null,
        l,
        o
      );
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Qn !== 0) {
                  var b = p ? Bm(o, p) : new FormData(o);
                  Bo(
                    a,
                    {
                      pending: !0,
                      data: b,
                      method: o.method,
                      action: c
                    },
                    null,
                    b
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), b = p ? Bm(o, p) : new FormData(o), Bo(
                  a,
                  {
                    pending: !0,
                    data: b,
                    method: o.method,
                    action: c
                  },
                  c,
                  b
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var ws = 0; ws < ao.length; ws++) {
    var zs = ao[ws], pg = zs.toLowerCase(), hg = zs[0].toUpperCase() + zs.slice(1);
    Wt(
      pg,
      "on" + hg
    );
  }
  Wt(gf, "onAnimationEnd"), Wt(_f, "onAnimationIteration"), Wt(bf, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(jy, "onTransitionRun"), Wt(My, "onTransitionStart"), Wt(Ny, "onTransitionCancel"), Wt(Sf, "onTransitionEnd"), Ra("onMouseEnter", ["mouseout", "mouseover"]), Ra("onMouseLeave", ["mouseout", "mouseover"]), Ra("onPointerEnter", ["pointerout", "pointerover"]), Ra("onPointerLeave", ["pointerout", "pointerover"]), oa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), oa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), oa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), oa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var cl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl)
  );
  function qm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], o = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = l.length - 1; 0 <= p; p--) {
            var y = l[p], b = y.instance, A = y.currentTarget;
            if (y = y.listener, b !== c && o.isPropagationStopped())
              break e;
            c = y, o.currentTarget = A;
            try {
              c(o);
            } catch (N) {
              tr(N);
            }
            o.currentTarget = null, c = b;
          }
        else
          for (p = 0; p < l.length; p++) {
            if (y = l[p], b = y.instance, A = y.currentTarget, y = y.listener, b !== c && o.isPropagationStopped())
              break e;
            c = y, o.currentTarget = A;
            try {
              c(o);
            } catch (N) {
              tr(N);
            }
            o.currentTarget = null, c = b;
          }
      }
    }
  }
  function he(e, t) {
    var a = t[Zu];
    a === void 0 && (a = t[Zu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || ($m(t, e, 2, !1), a.add(l));
  }
  function xs(e, t, a) {
    var l = 0;
    t && (l |= 4), $m(
      a,
      e,
      l,
      t
    );
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(e) {
    if (!e[Br]) {
      e[Br] = !0, Zc.forEach(function(a) {
        a !== "selectionchange" && (vg.has(a) || xs(a, !1, e), xs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || (t[Br] = !0, xs("selectionchange", !1, t));
    }
  }
  function $m(e, t, a, l) {
    switch (gp(t)) {
      case 2:
        var o = Lg;
        break;
      case 8:
        o = Vg;
        break;
      default:
        o = Hs;
    }
    a = o.bind(
      null,
      t,
      a,
      e
    ), o = void 0, !Lu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), l ? o !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
      passive: o
    }) : e.addEventListener(t, a, !1);
  }
  function Es(e, t, a, l, o) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var y = l.stateNode.containerInfo;
          if (y === o) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var b = p.tag;
              if ((b === 3 || b === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; y !== null; ) {
            if (p = Na(y), p === null) return;
            if (b = p.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Qc(function() {
      var A = c, N = qu(a), Y = [];
      e: {
        var C = wf.get(e);
        if (C !== void 0) {
          var O = Fl, P = e;
          switch (e) {
            case "keypress":
              if (Wl(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = sy;
              break;
            case "focusin":
              P = "focus", O = Ku;
              break;
            case "focusout":
              P = "blur", O = Ku;
              break;
            case "beforeblur":
            case "afterblur":
              O = Ku;
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
              O = Wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Pv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = dy;
              break;
            case gf:
            case _f:
            case bf:
              O = ey;
              break;
            case Sf:
              O = py;
              break;
            case "scroll":
            case "scrollend":
              O = Jv;
              break;
            case "wheel":
              O = vy;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Fc;
              break;
            case "toggle":
            case "beforetoggle":
              O = gy;
          }
          var le = (t & 4) !== 0, Ye = !le && (e === "scroll" || e === "scrollend"), T = le ? C !== null ? C + "Capture" : null : C;
          le = [];
          for (var z = A, E; z !== null; ) {
            var Z = z;
            if (E = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || E === null || T === null || (Z = Mi(z, T), Z != null && le.push(
              fl(z, Z, E)
            )), Ye) break;
            z = z.return;
          }
          0 < le.length && (C = new O(
            C,
            P,
            null,
            a,
            N
          ), Y.push({ event: C, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", C && a !== Bu && (P = a.relatedTarget || a.fromElement) && (Na(P) || P[Ma]))
            break e;
          if ((O || C) && (C = N.window === N ? N : (C = N.ownerDocument) ? C.defaultView || C.parentWindow : window, O ? (P = a.relatedTarget || a.toElement, O = A, P = P ? Na(P) : null, P !== null && (Ye = f(P), le = P.tag, P !== Ye || le !== 5 && le !== 27 && le !== 6) && (P = null)) : (O = null, P = A), O !== P)) {
            if (le = Wc, Z = "onMouseLeave", T = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (le = Fc, Z = "onPointerLeave", T = "onPointerEnter", z = "pointer"), Ye = O == null ? C : ji(O), E = P == null ? C : ji(P), C = new le(
              Z,
              z + "leave",
              O,
              a,
              N
            ), C.target = Ye, C.relatedTarget = E, Z = null, Na(N) === A && (le = new le(
              T,
              z + "enter",
              P,
              a,
              N
            ), le.target = E, le.relatedTarget = Ye, Z = le), Ye = Z, O && P)
              t: {
                for (le = yg, T = O, z = P, E = 0, Z = T; Z; Z = le(Z))
                  E++;
                Z = 0;
                for (var ae = z; ae; ae = le(ae))
                  Z++;
                for (; 0 < E - Z; )
                  T = le(T), E--;
                for (; 0 < Z - E; )
                  z = le(z), Z--;
                for (; E--; ) {
                  if (T === z || z !== null && T === z.alternate) {
                    le = T;
                    break t;
                  }
                  T = le(T), z = le(z);
                }
                le = null;
              }
            else le = null;
            O !== null && Lm(
              Y,
              C,
              O,
              le,
              !1
            ), P !== null && Ye !== null && Lm(
              Y,
              Ye,
              P,
              le,
              !0
            );
          }
        }
        e: {
          if (C = A ? ji(A) : window, O = C.nodeName && C.nodeName.toLowerCase(), O === "select" || O === "input" && C.type === "file")
            var Ee = uf;
          else if (lf(C))
            if (of)
              Ee = ky;
            else {
              Ee = Ey;
              var ee = Ty;
            }
          else
            O = C.nodeName, !O || O.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? A && Hu(A.elementType) && (Ee = uf) : Ee = Ay;
          if (Ee && (Ee = Ee(e, A))) {
            rf(
              Y,
              Ee,
              a,
              N
            );
            break e;
          }
          ee && ee(e, C, A), e === "focusout" && A && C.type === "number" && A.memoizedProps.value != null && Xu(C, "number", C.value);
        }
        switch (ee = A ? ji(A) : window, e) {
          case "focusin":
            (lf(ee) || ee.contentEditable === "true") && (qa = ee, eo = A, Hi = null);
            break;
          case "focusout":
            Hi = eo = qa = null;
            break;
          case "mousedown":
            to = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            to = !1, vf(Y, a, N);
            break;
          case "selectionchange":
            if (Oy) break;
          case "keydown":
          case "keyup":
            vf(Y, a, N);
        }
        var me;
        if (Wu)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Ba ? nf(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (Ic && a.locale !== "ko" && (Ba || be !== "onCompositionStart" ? be === "onCompositionEnd" && Ba && (me = Kc()) : (jn = N, Vu = "value" in jn ? jn.value : jn.textContent, Ba = !0)), ee = qr(A, be), 0 < ee.length && (be = new Pc(
          be,
          e,
          null,
          a,
          N
        ), Y.push({ event: be, listeners: ee }), me ? be.data = me : (me = af(a), me !== null && (be.data = me)))), (me = by ? Sy(e, a) : wy(e, a)) && (be = qr(A, "onBeforeInput"), 0 < be.length && (ee = new Pc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          N
        ), Y.push({
          event: ee,
          listeners: be
        }), ee.data = me)), mg(
          Y,
          e,
          A,
          a,
          N
        );
      }
      qm(Y, t);
    });
  }
  function fl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function qr(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Mi(e, a), o != null && l.unshift(
        fl(e, o, c)
      ), o = Mi(e, t), o != null && l.push(
        fl(e, o, c)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function yg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Lm(e, t, a, l, o) {
    for (var c = t._reactName, p = []; a !== null && a !== l; ) {
      var y = a, b = y.alternate, A = y.stateNode;
      if (y = y.tag, b !== null && b === l) break;
      y !== 5 && y !== 26 && y !== 27 || A === null || (b = A, o ? (A = Mi(a, c), A != null && p.unshift(
        fl(a, A, b)
      )) : o || (A = Mi(a, c), A != null && p.push(
        fl(a, A, b)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var gg = /\r\n?/g, _g = /\u0000|\uFFFD/g;
  function Vm(e) {
    return (typeof e == "string" ? e : "" + e).replace(gg, `
`).replace(_g, "");
  }
  function Gm(e, t) {
    return t = Vm(t), Vm(e) === t;
  }
  function Ue(e, t, a, l, o, c) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ya(e, "" + l);
        break;
      case "className":
        Gl(e, "class", l);
        break;
      case "tabIndex":
        Gl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gl(e, a, l);
        break;
      case "style":
        Vc(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Gl(e, "data", l);
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
        l = Kl("" + l), e.setAttribute(a, l);
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
          typeof c == "function" && (a === "formAction" ? (t !== "input" && Ue(e, t, "name", o.name, o, null), Ue(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ue(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ue(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ue(e, t, "encType", o.encType, o, null), Ue(e, t, "method", o.method, o, null), Ue(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Kl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = fn);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(u(61));
          if (a = l.__html, a != null) {
            if (o.children != null) throw Error(u(60));
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
        a = Kl("" + l), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), Vl(e, "popover", l);
        break;
      case "xlinkActuate":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        cn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        cn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        cn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        cn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Vl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Qv.get(a) || a, Vl(e, a, l));
    }
  }
  function As(e, t, a, l, o, c) {
    switch (a) {
      case "style":
        Vc(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(u(61));
          if (a = l.__html, a != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && Ya(e, "" + l);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = fn);
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
        if (!Rc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), c = e[bt] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, o);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Vl(e, a, l);
          }
    }
  }
  function mt(e, t, a) {
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
        he("error", e), he("load", e);
        var l = !1, o = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var p = a[c];
            if (p != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ue(e, t, c, p, a, null);
              }
          }
        o && Ue(e, t, "srcSet", a.srcSet, a, null), l && Ue(e, t, "src", a.src, a, null);
        return;
      case "input":
        he("invalid", e);
        var y = c = p = o = null, b = null, A = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var N = a[l];
            if (N != null)
              switch (l) {
                case "name":
                  o = N;
                  break;
                case "type":
                  p = N;
                  break;
                case "checked":
                  b = N;
                  break;
                case "defaultChecked":
                  A = N;
                  break;
                case "value":
                  c = N;
                  break;
                case "defaultValue":
                  y = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ue(e, t, l, N, a, null);
              }
          }
        Bc(
          e,
          c,
          y,
          b,
          A,
          p,
          o,
          !1
        );
        return;
      case "select":
        he("invalid", e), l = p = c = null;
        for (o in a)
          if (a.hasOwnProperty(o) && (y = a[o], y != null))
            switch (o) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                p = y;
                break;
              case "multiple":
                l = y;
              default:
                Ue(e, t, o, y, a, null);
            }
        t = c, a = p, e.multiple = !!l, t != null ? Ua(e, !!l, t, !1) : a != null && Ua(e, !!l, a, !0);
        return;
      case "textarea":
        he("invalid", e), c = o = l = null;
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null))
            switch (p) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(u(91));
                break;
              default:
                Ue(e, t, p, y, a, null);
            }
        $c(e, l, o, c);
        return;
      case "option":
        for (b in a)
          a.hasOwnProperty(b) && (l = a[b], l != null) && (b === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ue(e, t, b, l, a, null));
        return;
      case "dialog":
        he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < cl.length; l++)
          he(cl[l], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
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
        for (A in a)
          if (a.hasOwnProperty(A) && (l = a[A], l != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ue(e, t, A, l, a, null);
            }
        return;
      default:
        if (Hu(t)) {
          for (N in a)
            a.hasOwnProperty(N) && (l = a[N], l !== void 0 && As(
              e,
              t,
              N,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && (l = a[y], l != null && Ue(e, t, y, l, a, null));
  }
  function bg(e, t, a, l) {
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
        var o = null, c = null, p = null, y = null, b = null, A = null, N = null;
        for (O in a) {
          var Y = a[O];
          if (a.hasOwnProperty(O) && Y != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Y;
              default:
                l.hasOwnProperty(O) || Ue(e, t, O, null, l, Y);
            }
        }
        for (var C in l) {
          var O = l[C];
          if (Y = a[C], l.hasOwnProperty(C) && (O != null || Y != null))
            switch (C) {
              case "type":
                c = O;
                break;
              case "name":
                o = O;
                break;
              case "checked":
                A = O;
                break;
              case "defaultChecked":
                N = O;
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
                  throw Error(u(137, t));
                break;
              default:
                O !== Y && Ue(
                  e,
                  t,
                  C,
                  O,
                  l,
                  Y
                );
            }
        }
        Yu(
          e,
          p,
          y,
          b,
          A,
          N,
          c,
          o
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
                l.hasOwnProperty(c) || Ue(
                  e,
                  t,
                  c,
                  null,
                  l,
                  b
                );
            }
        for (o in l)
          if (c = l[o], b = a[o], l.hasOwnProperty(o) && (c != null || b != null))
            switch (o) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== b && Ue(
                  e,
                  t,
                  o,
                  c,
                  l,
                  b
                );
            }
        t = y, a = p, l = O, C != null ? Ua(e, !!a, C, !1) : !!l != !!a && (t != null ? Ua(e, !!a, t, !0) : Ua(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (y in a)
          if (o = a[y], a.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, y, null, l, o);
            }
        for (p in l)
          if (o = l[p], c = a[p], l.hasOwnProperty(p) && (o != null || c != null))
            switch (p) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                O = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && Ue(e, t, p, o, l, c);
            }
        qc(e, C, O);
        return;
      case "option":
        for (var P in a)
          C = a[P], a.hasOwnProperty(P) && C != null && !l.hasOwnProperty(P) && (P === "selected" ? e.selected = !1 : Ue(
            e,
            t,
            P,
            null,
            l,
            C
          ));
        for (b in l)
          C = l[b], O = a[b], l.hasOwnProperty(b) && C !== O && (C != null || O != null) && (b === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : Ue(
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
        for (var le in a)
          C = a[le], a.hasOwnProperty(le) && C != null && !l.hasOwnProperty(le) && Ue(e, t, le, null, l, C);
        for (A in l)
          if (C = l[A], O = a[A], l.hasOwnProperty(A) && C !== O && (C != null || O != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(u(137, t));
                break;
              default:
                Ue(
                  e,
                  t,
                  A,
                  C,
                  l,
                  O
                );
            }
        return;
      default:
        if (Hu(t)) {
          for (var Ye in a)
            C = a[Ye], a.hasOwnProperty(Ye) && C !== void 0 && !l.hasOwnProperty(Ye) && As(
              e,
              t,
              Ye,
              void 0,
              l,
              C
            );
          for (N in l)
            C = l[N], O = a[N], !l.hasOwnProperty(N) || C === O || C === void 0 && O === void 0 || As(
              e,
              t,
              N,
              C,
              l,
              O
            );
          return;
        }
    }
    for (var T in a)
      C = a[T], a.hasOwnProperty(T) && C != null && !l.hasOwnProperty(T) && Ue(e, t, T, null, l, C);
    for (Y in l)
      C = l[Y], O = a[Y], !l.hasOwnProperty(Y) || C === O || C == null && O == null || Ue(e, t, Y, C, l, O);
  }
  function Qm(e) {
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
  function Sg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var o = a[l], c = o.transferSize, p = o.initiatorType, y = o.duration;
        if (c && y && Qm(p)) {
          for (p = 0, y = o.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], A = b.startTime;
            if (A > y) break;
            var N = b.transferSize, Y = b.initiatorType;
            N && Qm(Y) && (b = b.responseEnd, p += N * (b < y ? 1 : (y - A) / (b - A)));
          }
          if (--l, t += 8 * (c + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ks = null, Cs = null;
  function $r(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Km(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jm(e, t) {
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
  function Os(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var js = null;
  function wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === js ? !1 : (js = e, !0) : (js = null, !1);
  }
  var Wm = typeof setTimeout == "function" ? setTimeout : void 0, zg = typeof clearTimeout == "function" ? clearTimeout : void 0, Pm = typeof Promise == "function" ? Promise : void 0, xg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pm < "u" ? function(e) {
    return Pm.resolve(null).then(e).catch(Tg);
  } : Wm;
  function Tg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Kn(e) {
    return e === "head";
  }
  function Fm(e, t) {
    var a = t, l = 0;
    do {
      var o = a.nextSibling;
      if (e.removeChild(a), o && o.nodeType === 8)
        if (a = o.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(o), hi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          dl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, dl(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[Oi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && dl(e.ownerDocument.body);
      a = o;
    } while (a);
    hi(t);
  }
  function Im(e, t) {
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
  function Ms(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ms(a), Ru(a);
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
  function Eg(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var o = a;
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
              if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = Gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ag(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ep(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ns(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ds(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function kg(e, t) {
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
  var Zs = null;
  function tp(e) {
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
  function np(e) {
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
  function ap(e, t, a) {
    switch (t = $r(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function dl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ru(e);
  }
  var Qt = /* @__PURE__ */ new Map(), ip = /* @__PURE__ */ new Set();
  function Lr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var An = K.d;
  K.d = {
    f: Cg,
    r: Og,
    D: jg,
    C: Mg,
    L: Ng,
    m: Dg,
    X: Rg,
    S: Zg,
    M: Ug
  };
  function Cg() {
    var e = An.f(), t = Zr();
    return e || t;
  }
  function Og(e) {
    var t = Da(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sd(t) : An.r(e);
  }
  var di = typeof document > "u" ? null : document;
  function lp(e, t, a) {
    var l = di;
    if (l && typeof t == "string" && t) {
      var o = Xt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), ip.has(o) || (ip.add(o), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(o) === null && (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function jg(e) {
    An.D(e), lp("dns-prefetch", e, null);
  }
  function Mg(e, t) {
    An.C(e, t), lp("preconnect", e, t);
  }
  function Ng(e, t, a) {
    An.L(e, t, a);
    var l = di;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Xt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Xt(
        a.imageSizes
      ) + '"]')) : o += '[href="' + Xt(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = mi(e);
          break;
        case "script":
          c = pi(e);
      }
      Qt.has(c) || (e = S(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Qt.set(c, e), l.querySelector(o) !== null || t === "style" && l.querySelector(ml(c)) || t === "script" && l.querySelector(pl(c)) || (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Dg(e, t) {
    An.m(e, t);
    var a = di;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Xt(l) + '"][href="' + Xt(e) + '"]', c = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = pi(e);
      }
      if (!Qt.has(c) && (e = S({ rel: "modulepreload", href: e }, t), Qt.set(c, e), a.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(pl(c)))
              return;
        }
        l = a.createElement("link"), mt(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Zg(e, t, a) {
    An.S(e, t, a);
    var l = di;
    if (l && e) {
      var o = Za(l).hoistableStyles, c = mi(e);
      t = t || "default";
      var p = o.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          ml(c)
        ))
          y.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Qt.get(c)) && Rs(e, a);
          var b = p = l.createElement("link");
          ut(b), mt(b, "link", e), b._p = new Promise(function(A, N) {
            b.onload = A, b.onerror = N;
          }), b.addEventListener("load", function() {
            y.loading |= 1;
          }), b.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Vr(p, t, l);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: y
        }, o.set(c, p);
      }
    }
  }
  function Rg(e, t) {
    An.X(e, t);
    var a = di;
    if (a && e) {
      var l = Za(a).hoistableScripts, o = pi(e), c = l.get(o);
      c || (c = a.querySelector(pl(o)), c || (e = S({ src: e, async: !0 }, t), (t = Qt.get(o)) && Us(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(o, c));
    }
  }
  function Ug(e, t) {
    An.M(e, t);
    var a = di;
    if (a && e) {
      var l = Za(a).hoistableScripts, o = pi(e), c = l.get(o);
      c || (c = a.querySelector(pl(o)), c || (e = S({ src: e, async: !0, type: "module" }, t), (t = Qt.get(o)) && Us(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(o, c));
    }
  }
  function rp(e, t, a, l) {
    var o = (o = se.current) ? Lr(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = mi(a.href), a = Za(
          o
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = mi(a.href);
          var c = Za(
            o
          ).hoistableStyles, p = c.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = o.querySelector(
            ml(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Qt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Qt.set(e, a), c || Yg(
            o,
            e,
            a,
            p.state
          ))), t && l === null)
            throw Error(u(528, ""));
          return p;
        }
        if (t && l !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pi(a), a = Za(
          o
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function mi(e) {
    return 'href="' + Xt(e) + '"';
  }
  function ml(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function up(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Yg(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), mt(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function pi(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function pl(e) {
    return "script[async]" + e;
  }
  function op(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Xt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, ut(l), l;
          var o = S({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ut(l), mt(l, "style", o), Vr(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          o = mi(a.href);
          var c = e.querySelector(
            ml(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          l = up(a), (o = Qt.get(o)) && Rs(l, o), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var p = c;
          return p._p = new Promise(function(y, b) {
            p.onload = y, p.onerror = b;
          }), mt(c, "link", l), t.state.loading |= 4, Vr(c, a.precedence, e), t.instance = c;
        case "script":
          return c = pi(a.src), (o = e.querySelector(
            pl(c)
          )) ? (t.instance = o, ut(o), o) : (l = a, (o = Qt.get(c)) && (l = S({}, a), Us(l, o)), e = e.ownerDocument || e, o = e.createElement("script"), ut(o), mt(o, "link", l), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Vr(l, a.precedence, e));
    return t.instance;
  }
  function Vr(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = l.length ? l[l.length - 1] : null, c = o, p = 0; p < l.length; p++) {
      var y = l[p];
      if (y.dataset.precedence === t) c = y;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Rs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Us(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Gr = null;
  function sp(e, t, a) {
    if (Gr === null) {
      var l = /* @__PURE__ */ new Map(), o = Gr = /* @__PURE__ */ new Map();
      o.set(a, l);
    } else
      o = Gr, l = o.get(a), l || (l = /* @__PURE__ */ new Map(), o.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
      var c = a[o];
      if (!(c[Oi] || c[st] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(c) : l.set(p, [c]);
      }
    }
    return l;
  }
  function cp(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Xg(e, t, a) {
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
  function fp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Hg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = mi(l.href), c = t.querySelector(
          ml(o)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Qr.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ut(c);
          return;
        }
        c = t.ownerDocument || t, l = up(l), (o = Qt.get(o)) && Rs(l, o), c = c.createElement("link"), ut(c);
        var p = c;
        p._p = new Promise(function(y, b) {
          p.onload = y, p.onerror = b;
        }), mt(c, "link", l), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Qr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ys = 0;
  function Bg(e, t) {
    return e.stylesheets && e.count === 0 && Jr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Jr(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ys === 0 && (Ys = 62500 * Sg());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Jr(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Ys ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(o);
      };
    } : null;
  }
  function Qr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Kr = null;
  function Jr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Kr = /* @__PURE__ */ new Map(), t.forEach(qg, e), Kr = null, Qr.call(e));
  }
  function qg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Kr.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Kr.set(e, a);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var p = o[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), l = p);
        }
        l && a.set(null, l);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), c = a.get(p) || l, c === l && a.set(null, o), a.set(p, o), this.count++, l = Qr.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var hl = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function $g(e, t, a, l, o, c, p, y, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function dp(e, t, a, l, o, c, p, y, b, A, N, Y) {
    return e = new $g(
      e,
      t,
      a,
      p,
      b,
      A,
      N,
      Y,
      y
    ), t = 1, c === !0 && (t |= 24), c = jt(3, null, null, t), e.current = c, c.stateNode = e, t = yo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, So(c), e;
  }
  function mp(e) {
    return e ? (e = Va, e) : Va;
  }
  function pp(e, t, a, l, o, c) {
    o = mp(o), l.context === null ? l.context = o : l.pendingContext = o, l = Un(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Yn(e, l, t), a !== null && (Et(a, e, t), Qi(a, e, t));
  }
  function hp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Xs(e, t) {
    hp(e, t), (e = e.alternate) && hp(e, t);
  }
  function vp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = da(e, 67108864);
      t !== null && Et(t, e, 67108864), Xs(e, 67108864);
    }
  }
  function yp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = Nu(t);
      var a = da(e, t);
      a !== null && Et(a, e, t), Xs(e, t);
    }
  }
  var Wr = !0;
  function Lg(e, t, a, l) {
    var o = M.T;
    M.T = null;
    var c = K.p;
    try {
      K.p = 2, Hs(e, t, a, l);
    } finally {
      K.p = c, M.T = o;
    }
  }
  function Vg(e, t, a, l) {
    var o = M.T;
    M.T = null;
    var c = K.p;
    try {
      K.p = 8, Hs(e, t, a, l);
    } finally {
      K.p = c, M.T = o;
    }
  }
  function Hs(e, t, a, l) {
    if (Wr) {
      var o = Bs(l);
      if (o === null)
        Es(
          e,
          t,
          l,
          Pr,
          a
        ), _p(e, l);
      else if (Qg(
        o,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (_p(e, l), t & 4 && -1 < Gg.indexOf(e)) {
        for (; o !== null; ) {
          var c = Da(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = ua(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var b = 1 << 31 - Ct(p);
                      y.entanglements[1] |= b, p &= ~b;
                    }
                    on(c), (je & 6) === 0 && (Nr = vt() + 500, sl(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = da(c, 2), y !== null && Et(y, c, 2), Zr(), Xs(c, 2);
            }
          if (c = Bs(l), c === null && Es(
            e,
            t,
            l,
            Pr,
            a
          ), c === o) break;
          o = c;
        }
        o !== null && l.stopPropagation();
      } else
        Es(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Bs(e) {
    return e = qu(e), qs(e);
  }
  var Pr = null;
  function qs(e) {
    if (Pr = null, e = Na(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = d(t), e !== null) return e;
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
    return Pr = e, null;
  }
  function gp(e) {
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
        switch (ju()) {
          case Hl:
            return 2;
          case Q:
            return 8;
          case ce:
          case fe:
            return 32;
          case an:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $s = !1, Jn = null, Wn = null, Pn = null, vl = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), Fn = [], Gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _p(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        vl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(t.pointerId);
    }
  }
  function gl(e, t, a, l, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = Da(t), t !== null && vp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Qg(e, t, a, l, o) {
    switch (t) {
      case "focusin":
        return Jn = gl(
          Jn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "dragenter":
        return Wn = gl(
          Wn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "mouseover":
        return Pn = gl(
          Pn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return vl.set(
          c,
          gl(
            vl.get(c) || null,
            e,
            t,
            a,
            l,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, yl.set(
          c,
          gl(
            yl.get(c) || null,
            e,
            t,
            a,
            l,
            o
          )
        ), !0;
    }
    return !1;
  }
  function bp(e) {
    var t = Na(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, Nc(e.priority, function() {
              yp(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Nc(e.priority, function() {
              yp(a);
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
  function Fr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Bs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Bu = l, a.target.dispatchEvent(l), Bu = null;
      } else
        return t = Da(a), t !== null && vp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Sp(e, t, a) {
    Fr(e) && a.delete(t);
  }
  function Kg() {
    $s = !1, Jn !== null && Fr(Jn) && (Jn = null), Wn !== null && Fr(Wn) && (Wn = null), Pn !== null && Fr(Pn) && (Pn = null), vl.forEach(Sp), yl.forEach(Sp);
  }
  function Ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $s || ($s = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Kg
    )));
  }
  var eu = null;
  function wp(e) {
    eu !== e && (eu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        eu === e && (eu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], o = e[t + 2];
          if (typeof l != "function") {
            if (qs(l || a) === null)
              continue;
            break;
          }
          var c = Da(a);
          c !== null && (e.splice(t, 3), t -= 3, Bo(
            c,
            {
              pending: !0,
              data: o,
              method: a.method,
              action: l
            },
            l,
            o
          ));
        }
      }
    ));
  }
  function hi(e) {
    function t(b) {
      return Ir(b, e);
    }
    Jn !== null && Ir(Jn, e), Wn !== null && Ir(Wn, e), Pn !== null && Ir(Pn, e), vl.forEach(t), yl.forEach(t);
    for (var a = 0; a < Fn.length; a++) {
      var l = Fn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Fn.length && (a = Fn[0], a.blockedOn === null); )
      bp(a), a.blockedOn === null && Fn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var o = a[l], c = a[l + 1], p = o[bt] || null;
        if (typeof c == "function")
          p || wp(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, p = c[bt] || null)
              y = p.formAction;
            else if (qs(o) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), wp(a);
        }
      }
  }
  function zp() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(p) {
            return o = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), l || setTimeout(a, 20);
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
      var l = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Ls(e) {
    this._internalRoot = e;
  }
  tu.prototype.render = Ls.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var a = t.current, l = Rt();
    pp(a, l, e, t, null, null);
  }, tu.prototype.unmount = Ls.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      pp(e.current, 2, null, e, null, null), Zr(), t[Ma] = null;
    }
  };
  function tu(e) {
    this._internalRoot = e;
  }
  tu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Mc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Fn.length && t !== 0 && t < Fn[a].priority; a++) ;
      Fn.splice(a, 0, e), a === 0 && bp(e);
    }
  };
  var xp = i.version;
  if (xp !== "19.2.8")
    throw Error(
      u(
        527,
        xp,
        "19.2.8"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = h(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Jg = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nu.isDisabled && nu.supportsFiber)
      try {
        Ai = nu.inject(
          Jg
        ), kt = nu;
      } catch {
      }
  }
  return bl.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var a = !1, l = "", o = jd, c = Md, p = Nd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = dp(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      o,
      c,
      p,
      zp
    ), e[Ma] = t.current, Ts(e), new Ls(t);
  }, bl.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(u(299));
    var l = !1, o = "", c = jd, p = Md, y = Nd, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = dp(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      o,
      b,
      c,
      p,
      y,
      zp
    ), t.context = mp(null), a = t.current, l = Rt(), l = Nu(l), o = Un(l), o.callback = null, Yn(a, o, l), a = l, t.current.lanes = a, Ci(t, a), on(t), e[Ma] = t.current, Ts(e), new tu(t);
  }, bl.version = "19.2.8", bl;
}
var Dp;
function l_() {
  if (Dp) return Gs.exports;
  Dp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Gs.exports = i_(), Gs.exports;
}
var r_ = l_();
const u_ = /* @__PURE__ */ Ah(r_);
var te = mc();
const xu = /* @__PURE__ */ Ah(te);
const kh = (...n) => n.filter((i, r, u) => !!i && i.trim() !== "" && u.indexOf(i) === r).join(" ").trim();
const o_ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const s_ = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, u) => u ? u.toUpperCase() : r.toLowerCase()
);
const Zp = (n) => {
  const i = s_(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var c_ = {
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
const f_ = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
};
const d_ = te.forwardRef(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: u,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, v) => te.createElement(
    "svg",
    {
      ref: v,
      ...c_,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: u ? Number(r) * 24 / Number(i) : r,
      className: kh("lucide", s),
      ...!f && !f_(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([h, _]) => te.createElement(h, _)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const Ze = (n, i) => {
  const r = te.forwardRef(
    ({ className: u, ...s }, f) => te.createElement(d_, {
      ref: f,
      iconNode: i,
      className: kh(
        `lucide-${o_(Zp(n))}`,
        `lucide-${n}`,
        u
      ),
      ...s
    })
  );
  return r.displayName = Zp(n), r;
};
const m_ = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Ch = Ze("arrow-down-to-line", m_);
const p_ = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Rp = Ze("arrow-down", p_);
const h_ = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], v_ = Ze("arrow-up-from-line", h_);
const y_ = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Up = Ze("arrow-up", y_);
const g_ = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], __ = Ze("battery", g_);
const b_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], S_ = Ze("check", b_);
const w_ = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], z_ = Ze("clock-3", w_);
const x_ = [
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
], T_ = Ze("droplets", x_);
const E_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], A_ = Ze("history", E_);
const k_ = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Yp = Ze("house", k_);
const C_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Xp = Ze("loader-circle", C_);
const O_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], j_ = Ze("lock-open", O_);
const M_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Oh = Ze("lock", M_);
const N_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], D_ = Ze("map-pin", N_);
const Z_ = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], R_ = Ze("pause", Z_);
const U_ = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], jh = Ze("play", U_);
const Y_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hp = Ze("plus", Y_);
const X_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], pc = Ze("rotate-ccw", X_);
const H_ = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], B_ = Ze("scan-line", H_);
const q_ = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], $_ = Ze("sliders-horizontal", q_);
const L_ = [
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
], uc = Ze("sparkles", L_);
const V_ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], G_ = Ze("square", V_);
const Q_ = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], K_ = Ze("timer", Q_);
const J_ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], mu = Ze("trash-2", J_);
const W_ = [
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
], Bp = Ze("waves", W_);
const P_ = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], qp = Ze("wind", P_);
const F_ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], hc = Ze("x", F_);
const I_ = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], e0 = Ze("zoom-in", I_);
const t0 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], n0 = Ze("zoom-out", t0);
var $p;
function R(n, i, r) {
  function u(m, v) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: v,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n))
      return;
    m._zod.traits.add(n), i(m, v);
    const h = d.prototype, _ = Object.keys(h);
    for (let S = 0; S < _.length; S++) {
      const x = _[S];
      x in m || (m[x] = h[x].bind(m));
    }
  }
  const s = r?.Parent ?? Object;
  class f extends s {
  }
  Object.defineProperty(f, "name", { value: n });
  function d(m) {
    var v;
    const h = r?.Parent ? new f() : this;
    u(h, m), (v = h._zod).deferred ?? (v.deferred = []);
    for (const _ of h._zod.deferred)
      _();
    return h;
  }
  return Object.defineProperty(d, "init", { value: u }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (m) => r?.Parent && m instanceof r.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(d, "name", { value: n }), d;
}
class gi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Mh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
($p = globalThis).__zod_globalConfig ?? ($p.__zod_globalConfig = {});
const vc = globalThis.__zod_globalConfig;
function ka(n) {
  return vc;
}
function Nh(n) {
  const i = Object.values(n).filter((u) => typeof u == "number");
  return Object.entries(n).filter(([u, s]) => i.indexOf(+u) === -1).map(([u, s]) => s);
}
function oc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function yc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function gc(n) {
  return n == null;
}
function _c(n) {
  const i = n.startsWith("^") ? 1 : 0, r = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, r);
}
function a0(n, i) {
  const r = n / i, u = Math.round(r), s = Number.EPSILON * Math.max(Math.abs(r), 1);
  return Math.abs(r - u) < s ? 0 : r - u;
}
const Lp = /* @__PURE__ */ Symbol("evaluating");
function He(n, i, r) {
  let u;
  Object.defineProperty(n, i, {
    get() {
      if (u !== Lp)
        return u === void 0 && (u = Lp, u = r()), u;
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
function Oa(n, i, r) {
  Object.defineProperty(n, i, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function na(...n) {
  const i = {};
  for (const r of n) {
    const u = Object.getOwnPropertyDescriptors(r);
    Object.assign(i, u);
  }
  return Object.defineProperties({}, i);
}
function Vp(n) {
  return JSON.stringify(n);
}
function i0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Dh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function pu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const l0 = /* @__PURE__ */ yc(() => {
  if (vc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function kl(n) {
  if (pu(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const r = i.prototype;
  return !(pu(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Zh(n) {
  return kl(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const r0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function _i(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(n, i, r) {
  const u = new n._zod.constr(i ?? n._zod.def);
  return (!i || r?.parent) && (u._zod.parent = n), u;
}
function ie(n) {
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
function u0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const o0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function s0(n, i) {
  const r = n._zod.def, u = r.checks;
  if (u && u.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const f = na(n._zod.def, {
    get shape() {
      const d = {};
      for (const m in i) {
        if (!(m in r.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && (d[m] = r.shape[m]);
      }
      return Oa(this, "shape", d), d;
    },
    checks: []
  });
  return aa(n, f);
}
function c0(n, i) {
  const r = n._zod.def, u = r.checks;
  if (u && u.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const f = na(n._zod.def, {
    get shape() {
      const d = { ...n._zod.def.shape };
      for (const m in i) {
        if (!(m in r.shape))
          throw new Error(`Unrecognized key: "${m}"`);
        i[m] && delete d[m];
      }
      return Oa(this, "shape", d), d;
    },
    checks: []
  });
  return aa(n, f);
}
function f0(n, i) {
  if (!kl(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = n._zod.def.checks;
  if (r && r.length > 0) {
    const f = n._zod.def.shape;
    for (const d in i)
      if (Object.getOwnPropertyDescriptor(f, d) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = na(n._zod.def, {
    get shape() {
      const f = { ...n._zod.def.shape, ...i };
      return Oa(this, "shape", f), f;
    }
  });
  return aa(n, s);
}
function d0(n, i) {
  if (!kl(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = na(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape, ...i };
      return Oa(this, "shape", u), u;
    }
  });
  return aa(n, r);
}
function m0(n, i) {
  if (n._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const r = na(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape, ...i._zod.def.shape };
      return Oa(this, "shape", u), u;
    },
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return aa(n, r);
}
function p0(n, i, r) {
  const s = i._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const d = na(i._zod.def, {
    get shape() {
      const m = i._zod.def.shape, v = { ...m };
      if (r)
        for (const h in r) {
          if (!(h in m))
            throw new Error(`Unrecognized key: "${h}"`);
          r[h] && (v[h] = n ? new n({
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
      return Oa(this, "shape", v), v;
    },
    checks: []
  });
  return aa(i, d);
}
function h0(n, i, r) {
  const u = na(i._zod.def, {
    get shape() {
      const s = i._zod.def.shape, f = { ...s };
      if (r)
        for (const d in r) {
          if (!(d in f))
            throw new Error(`Unrecognized key: "${d}"`);
          r[d] && (f[d] = new n({
            type: "nonoptional",
            innerType: s[d]
          }));
        }
      else
        for (const d in s)
          f[d] = new n({
            type: "nonoptional",
            innerType: s[d]
          });
      return Oa(this, "shape", f), f;
    }
  });
  return aa(i, u);
}
function vi(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function v0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue === !1)
      return !0;
  return !1;
}
function Rh(n, i) {
  return i.map((r) => {
    var u;
    return (u = r).path ?? (u.path = []), r.path.unshift(n), r;
  });
}
function au(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ca(n, i, r) {
  const u = n.message ? n.message : au(n.inst?._zod.def?.error?.(n)) ?? au(i?.error?.(n)) ?? au(r.customError?.(n)) ?? au(r.localeError?.(n)) ?? "Invalid input", { inst: s, continue: f, input: d, ...m } = n;
  return m.path ?? (m.path = []), m.message = u, i?.reportInput && (m.input = d), m;
}
function bc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Cl(...n) {
  const [i, r, u] = n;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: r,
    inst: u
  } : { ...i };
}
const Uh = (n, i) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: i,
    enumerable: !1
  }), n.message = JSON.stringify(i, oc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Yh = R("$ZodError", Uh), Xh = R("$ZodError", Uh, { Parent: Error });
function y0(n, i = (r) => r.message) {
  const r = {}, u = [];
  for (const s of n.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(i(s))) : u.push(i(s));
  return { formErrors: u, fieldErrors: r };
}
function g0(n, i = (r) => r.message) {
  const r = { _errors: [] }, u = (s, f = []) => {
    for (const d of s.issues)
      if (d.code === "invalid_union" && d.errors.length)
        d.errors.map((m) => u({ issues: m }, [...f, ...d.path]));
      else if (d.code === "invalid_key")
        u({ issues: d.issues }, [...f, ...d.path]);
      else if (d.code === "invalid_element")
        u({ issues: d.issues }, [...f, ...d.path]);
      else {
        const m = [...f, ...d.path];
        if (m.length === 0)
          r._errors.push(i(d));
        else {
          let v = r, h = 0;
          for (; h < m.length; ) {
            const _ = m[h];
            h === m.length - 1 ? (v[_] = v[_] || { _errors: [] }, v[_]._errors.push(i(d))) : v[_] = v[_] || { _errors: [] }, v = v[_], h++;
          }
        }
      }
  };
  return u(n), r;
}
const Sc = (n) => (i, r, u, s) => {
  const f = u ? { ...u, async: !1 } : { async: !1 }, d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise)
    throw new gi();
  if (d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((v) => Ca(v, f, ka())));
    throw Dh(m, s?.callee), m;
  }
  return d.value;
}, wc = (n) => async (i, r, u, s) => {
  const f = u ? { ...u, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((v) => Ca(v, f, ka())));
    throw Dh(m, s?.callee), m;
  }
  return d.value;
}, Tu = (n) => (i, r, u) => {
  const s = u ? { ...u, async: !1 } : { async: !1 }, f = i._zod.run({ value: r, issues: [] }, s);
  if (f instanceof Promise)
    throw new gi();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? Yh)(f.issues.map((d) => Ca(d, s, ka())))
  } : { success: !0, data: f.value };
}, _0 = /* @__PURE__ */ Tu(Xh), Eu = (n) => async (i, r, u) => {
  const s = u ? { ...u, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: r, issues: [] }, s);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => Ca(d, s, ka())))
  } : { success: !0, data: f.value };
}, b0 = /* @__PURE__ */ Eu(Xh), S0 = (n) => (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return Sc(n)(i, r, s);
}, w0 = (n) => (i, r, u) => Sc(n)(i, r, u), z0 = (n) => async (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return wc(n)(i, r, s);
}, x0 = (n) => async (i, r, u) => wc(n)(i, r, u), T0 = (n) => (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return Tu(n)(i, r, s);
}, E0 = (n) => (i, r, u) => Tu(n)(i, r, u), A0 = (n) => async (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return Eu(n)(i, r, s);
}, k0 = (n) => async (i, r, u) => Eu(n)(i, r, u), C0 = /^[cC][0-9a-z]{6,}$/, O0 = /^[0-9a-z]+$/, j0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, M0 = /^[0-9a-vA-V]{20}$/, N0 = /^[A-Za-z0-9]{27}$/, D0 = /^[a-zA-Z0-9_-]{21}$/, Z0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, R0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Gp = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, U0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Y0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function X0() {
  return new RegExp(Y0, "u");
}
const H0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, B0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, q0 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, L0 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Hh = /^[A-Za-z0-9_-]*$/, V0 = /^https?$/, G0 = /^\+[1-9]\d{6,14}$/, Bh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Q0 = /* @__PURE__ */ new RegExp(`^${Bh}$`);
function qh(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function K0(n) {
  return new RegExp(`^${qh(n)}$`);
}
function J0(n) {
  const i = qh({ precision: n.precision }), r = ["Z"];
  n.local && r.push(""), n.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const u = `${i}(?:${r.join("|")})`;
  return new RegExp(`^${Bh}T(?:${u})$`);
}
const W0 = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, P0 = /^-?\d+$/, F0 = /^-?\d+(?:\.\d+)?$/, I0 = /^(?:true|false)$/i, eb = /^[^A-Z]*$/, tb = /^[^a-z]*$/, At = /* @__PURE__ */ R("$ZodCheck", (n, i) => {
  var r;
  n._zod ?? (n._zod = {}), n._zod.def = i, (r = n._zod).onattach ?? (r.onattach = []);
}), $h = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Lh = /* @__PURE__ */ R("$ZodCheckLessThan", (n, i) => {
  At.init(n, i);
  const r = $h[typeof i.value];
  n._zod.onattach.push((u) => {
    const s = u._zod.bag, f = (i.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < f && (i.inclusive ? s.maximum = i.value : s.exclusiveMaximum = i.value);
  }), n._zod.check = (u) => {
    (i.inclusive ? u.value <= i.value : u.value < i.value) || u.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: u.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), Vh = /* @__PURE__ */ R("$ZodCheckGreaterThan", (n, i) => {
  At.init(n, i);
  const r = $h[typeof i.value];
  n._zod.onattach.push((u) => {
    const s = u._zod.bag, f = (i.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > f && (i.inclusive ? s.minimum = i.value : s.exclusiveMinimum = i.value);
  }), n._zod.check = (u) => {
    (i.inclusive ? u.value >= i.value : u.value > i.value) || u.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: u.value,
      inclusive: i.inclusive,
      inst: n,
      continue: !i.abort
    });
  };
}), nb = /* @__PURE__ */ R("$ZodCheckMultipleOf", (n, i) => {
  At.init(n, i), n._zod.onattach.push((r) => {
    var u;
    (u = r._zod.bag).multipleOf ?? (u.multipleOf = i.value);
  }), n._zod.check = (r) => {
    if (typeof r.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % i.value === BigInt(0) : a0(r.value, i.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), ab = /* @__PURE__ */ R("$ZodCheckNumberFormat", (n, i) => {
  At.init(n, i), i.format = i.format || "float64";
  const r = i.format?.includes("int"), u = r ? "int" : "number", [s, f] = o0[i.format];
  n._zod.onattach.push((d) => {
    const m = d._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = f, r && (m.pattern = P0);
  }), n._zod.check = (d) => {
    const m = d.value;
    if (r) {
      if (!Number.isInteger(m)) {
        d.issues.push({
          expected: u,
          format: i.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? d.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: u,
          inclusive: !0,
          continue: !i.abort
        }) : d.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: u,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    m < s && d.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    }), m > f && d.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: f,
      inclusive: !0,
      inst: n,
      continue: !i.abort
    });
  };
}), ib = /* @__PURE__ */ R("$ZodCheckMaxLength", (n, i) => {
  var r;
  At.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !gc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < s && (u._zod.bag.maximum = i.maximum);
  }), n._zod.check = (u) => {
    const s = u.value;
    if (s.length <= i.maximum)
      return;
    const d = bc(s);
    u.issues.push({
      origin: d,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), lb = /* @__PURE__ */ R("$ZodCheckMinLength", (n, i) => {
  var r;
  At.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !gc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > s && (u._zod.bag.minimum = i.minimum);
  }), n._zod.check = (u) => {
    const s = u.value;
    if (s.length >= i.minimum)
      return;
    const d = bc(s);
    u.issues.push({
      origin: d,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: s,
      inst: n,
      continue: !i.abort
    });
  };
}), rb = /* @__PURE__ */ R("$ZodCheckLengthEquals", (n, i) => {
  var r;
  At.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !gc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag;
    s.minimum = i.length, s.maximum = i.length, s.length = i.length;
  }), n._zod.check = (u) => {
    const s = u.value, f = s.length;
    if (f === i.length)
      return;
    const d = bc(s), m = f > i.length;
    u.issues.push({
      origin: d,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Au = /* @__PURE__ */ R("$ZodCheckStringFormat", (n, i) => {
  var r, u;
  At.init(n, i), n._zod.onattach.push((s) => {
    const f = s._zod.bag;
    f.format = i.format, i.pattern && (f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(i.pattern));
  }), i.pattern ? (r = n._zod).check ?? (r.check = (s) => {
    i.pattern.lastIndex = 0, !i.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: s.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: n,
      continue: !i.abort
    });
  }) : (u = n._zod).check ?? (u.check = () => {
  });
}), ub = /* @__PURE__ */ R("$ZodCheckRegex", (n, i) => {
  Au.init(n, i), n._zod.check = (r) => {
    i.pattern.lastIndex = 0, !i.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: i.pattern.toString(),
      inst: n,
      continue: !i.abort
    });
  };
}), ob = /* @__PURE__ */ R("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = eb), Au.init(n, i);
}), sb = /* @__PURE__ */ R("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = tb), Au.init(n, i);
}), cb = /* @__PURE__ */ R("$ZodCheckIncludes", (n, i) => {
  At.init(n, i);
  const r = _i(i.includes), u = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${r}` : r);
  i.pattern = u, n._zod.onattach.push((s) => {
    const f = s._zod.bag;
    f.patterns ?? (f.patterns = /* @__PURE__ */ new Set()), f.patterns.add(u);
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
}), fb = /* @__PURE__ */ R("$ZodCheckStartsWith", (n, i) => {
  At.init(n, i);
  const r = new RegExp(`^${_i(i.prefix)}.*`);
  i.pattern ?? (i.pattern = r), n._zod.onattach.push((u) => {
    const s = u._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), n._zod.check = (u) => {
    u.value.startsWith(i.prefix) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), db = /* @__PURE__ */ R("$ZodCheckEndsWith", (n, i) => {
  At.init(n, i);
  const r = new RegExp(`.*${_i(i.suffix)}$`);
  i.pattern ?? (i.pattern = r), n._zod.onattach.push((u) => {
    const s = u._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), n._zod.check = (u) => {
    u.value.endsWith(i.suffix) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: u.value,
      inst: n,
      continue: !i.abort
    });
  };
}), mb = /* @__PURE__ */ R("$ZodCheckOverwrite", (n, i) => {
  At.init(n, i), n._zod.check = (r) => {
    r.value = i.tx(r.value);
  };
});
class pb {
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
    const u = i.split(`
`).filter((d) => d), s = Math.min(...u.map((d) => d.length - d.trimStart().length)), f = u.map((d) => d.slice(s)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of f)
      this.content.push(d);
  }
  compile() {
    const i = Function, r = this?.args, s = [...(this?.content ?? [""]).map((f) => `  ${f}`)];
    return new i(...r, s.join(`
`));
  }
}
const hb = {
  major: 4,
  minor: 4,
  patch: 3
}, Fe = /* @__PURE__ */ R("$ZodType", (n, i) => {
  var r;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = hb;
  const u = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && u.unshift(n);
  for (const s of u)
    for (const f of s._zod.onattach)
      f(n);
  if (u.length === 0)
    (r = n._zod).deferred ?? (r.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const s = (d, m, v) => {
      let h = vi(d), _;
      for (const S of m) {
        if (S._zod.def.when) {
          if (v0(d) || !S._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const x = d.issues.length, k = S._zod.check(d);
        if (k instanceof Promise && v?.async === !1)
          throw new gi();
        if (_ || k instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await k, d.issues.length !== x && (h || (h = vi(d, x)));
          });
        else {
          if (d.issues.length === x)
            continue;
          h || (h = vi(d, x));
        }
      }
      return _ ? _.then(() => d) : d;
    }, f = (d, m, v) => {
      if (vi(d))
        return d.aborted = !0, d;
      const h = s(m, u, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new gi();
        return h.then((_) => n._zod.parse(_, v));
      }
      return n._zod.parse(h, v);
    };
    n._zod.run = (d, m) => {
      if (m.skipChecks)
        return n._zod.parse(d, m);
      if (m.direction === "backward") {
        const h = n._zod.parse({ value: d.value, issues: [] }, { ...m, skipChecks: !0 });
        return h instanceof Promise ? h.then((_) => f(_, d, m)) : f(h, d, m);
      }
      const v = n._zod.parse(d, m);
      if (v instanceof Promise) {
        if (m.async === !1)
          throw new gi();
        return v.then((h) => s(h, u, m));
      }
      return s(v, u, m);
    };
  }
  He(n, "~standard", () => ({
    validate: (s) => {
      try {
        const f = _0(n, s);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return b0(n, s).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), zc = /* @__PURE__ */ R("$ZodString", (n, i) => {
  Fe.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? W0(n._zod.bag), n._zod.parse = (r, u) => {
    if (i.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: n
    }), r;
  };
}), Qe = /* @__PURE__ */ R("$ZodStringFormat", (n, i) => {
  Au.init(n, i), zc.init(n, i);
}), vb = /* @__PURE__ */ R("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = R0), Qe.init(n, i);
}), yb = /* @__PURE__ */ R("$ZodUUID", (n, i) => {
  if (i.version) {
    const u = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (u === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Gp(u));
  } else
    i.pattern ?? (i.pattern = Gp());
  Qe.init(n, i);
}), gb = /* @__PURE__ */ R("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = U0), Qe.init(n, i);
}), _b = /* @__PURE__ */ R("$ZodURL", (n, i) => {
  Qe.init(n, i), n._zod.check = (r) => {
    try {
      const u = r.value.trim();
      if (!i.normalize && i.protocol?.source === V0.source && !/^https?:\/\//i.test(u)) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: r.value,
          inst: n,
          continue: !i.abort
        });
        return;
      }
      const s = new URL(u);
      i.hostname && (i.hostname.lastIndex = 0, i.hostname.test(s.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: r.value,
        inst: n,
        continue: !i.abort
      })), i.protocol && (i.protocol.lastIndex = 0, i.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: r.value,
        inst: n,
        continue: !i.abort
      })), i.normalize ? r.value = s.href : r.value = u;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), bb = /* @__PURE__ */ R("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = X0()), Qe.init(n, i);
}), Sb = /* @__PURE__ */ R("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = D0), Qe.init(n, i);
}), wb = /* @__PURE__ */ R("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = C0), Qe.init(n, i);
}), zb = /* @__PURE__ */ R("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = O0), Qe.init(n, i);
}), xb = /* @__PURE__ */ R("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = j0), Qe.init(n, i);
}), Tb = /* @__PURE__ */ R("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = M0), Qe.init(n, i);
}), Eb = /* @__PURE__ */ R("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = N0), Qe.init(n, i);
}), Ab = /* @__PURE__ */ R("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = J0(i)), Qe.init(n, i);
}), kb = /* @__PURE__ */ R("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = Q0), Qe.init(n, i);
}), Cb = /* @__PURE__ */ R("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = K0(i)), Qe.init(n, i);
}), Ob = /* @__PURE__ */ R("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = Z0), Qe.init(n, i);
}), jb = /* @__PURE__ */ R("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = H0), Qe.init(n, i), n._zod.bag.format = "ipv4";
}), Mb = /* @__PURE__ */ R("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = B0), Qe.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
}), Nb = /* @__PURE__ */ R("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = q0), Qe.init(n, i);
}), Db = /* @__PURE__ */ R("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = $0), Qe.init(n, i), n._zod.check = (r) => {
    const u = r.value.split("/");
    try {
      if (u.length !== 2)
        throw new Error();
      const [s, f] = u;
      if (!f)
        throw new Error();
      const d = Number(f);
      if (`${d}` !== f)
        throw new Error();
      if (d < 0 || d > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: n,
        continue: !i.abort
      });
    }
  };
});
function Gh(n) {
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
const Zb = /* @__PURE__ */ R("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = L0), Qe.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (r) => {
    Gh(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function Rb(n) {
  if (!Hh.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (u) => u === "-" ? "+" : "/"), r = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Gh(r);
}
const Ub = /* @__PURE__ */ R("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = Hh), Qe.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (r) => {
    Rb(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Yb = /* @__PURE__ */ R("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = G0), Qe.init(n, i);
});
function Xb(n, i = null) {
  try {
    const r = n.split(".");
    if (r.length !== 3)
      return !1;
    const [u] = r;
    if (!u)
      return !1;
    const s = JSON.parse(atob(u));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const Hb = /* @__PURE__ */ R("$ZodJWT", (n, i) => {
  Qe.init(n, i), n._zod.check = (r) => {
    Xb(r.value, i.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Qh = /* @__PURE__ */ R("$ZodNumber", (n, i) => {
  Fe.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? F0, n._zod.parse = (r, u) => {
    if (i.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const s = r.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return r;
    const f = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: n,
      ...f ? { received: f } : {}
    }), r;
  };
}), Bb = /* @__PURE__ */ R("$ZodNumberFormat", (n, i) => {
  ab.init(n, i), Qh.init(n, i);
}), qb = /* @__PURE__ */ R("$ZodBoolean", (n, i) => {
  Fe.init(n, i), n._zod.pattern = I0, n._zod.parse = (r, u) => {
    if (i.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const s = r.value;
    return typeof s == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: n
    }), r;
  };
}), $b = /* @__PURE__ */ R("$ZodUnknown", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r) => r;
}), Lb = /* @__PURE__ */ R("$ZodNever", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, u) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: n
  }), r);
});
function Qp(n, i, r) {
  n.issues.length && i.issues.push(...Rh(r, n.issues)), i.value[r] = n.value;
}
const Vb = /* @__PURE__ */ R("$ZodArray", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, u) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: n
      }), r;
    r.value = Array(s.length);
    const f = [];
    for (let d = 0; d < s.length; d++) {
      const m = s[d], v = i.element._zod.run({
        value: m,
        issues: []
      }, u);
      v instanceof Promise ? f.push(v.then((h) => Qp(h, r, d))) : Qp(v, r, d);
    }
    return f.length ? Promise.all(f).then(() => r) : r;
  };
});
function hu(n, i, r, u, s, f) {
  const d = r in u;
  if (n.issues.length) {
    if (s && f && !d)
      return;
    i.issues.push(...Rh(r, n.issues));
  }
  if (!d && !s) {
    n.issues.length || i.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [r]
    });
    return;
  }
  n.value === void 0 ? d && (i.value[r] = void 0) : i.value[r] = n.value;
}
function Kh(n) {
  const i = Object.keys(n.shape);
  for (const u of i)
    if (!n.shape?.[u]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${u}": expected a Zod schema`);
  const r = u0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(r)
  };
}
function Jh(n, i, r, u, s, f) {
  const d = [], m = s.keySet, v = s.catchall._zod, h = v.def.type, _ = v.optin === "optional", S = v.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || m.has(x))
      continue;
    if (h === "never") {
      d.push(x);
      continue;
    }
    const k = v.run({ value: i[x], issues: [] }, u);
    k instanceof Promise ? n.push(k.then((j) => hu(j, r, x, i, _, S))) : hu(k, r, x, i, _, S);
  }
  return d.length && r.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: i,
    inst: f
  }), n.length ? Promise.all(n).then(() => r) : r;
}
const Gb = /* @__PURE__ */ R("$ZodObject", (n, i) => {
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
  const u = yc(() => Kh(i));
  He(n._zod, "propValues", () => {
    const m = i.shape, v = {};
    for (const h in m) {
      const _ = m[h]._zod;
      if (_.values) {
        v[h] ?? (v[h] = /* @__PURE__ */ new Set());
        for (const S of _.values)
          v[h].add(S);
      }
    }
    return v;
  });
  const s = pu, f = i.catchall;
  let d;
  n._zod.parse = (m, v) => {
    d ?? (d = u.value);
    const h = m.value;
    if (!s(h))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: h,
        inst: n
      }), m;
    m.value = {};
    const _ = [], S = d.shape;
    for (const x of d.keys) {
      const k = S[x], j = k._zod.optin === "optional", q = k._zod.optout === "optional", X = k._zod.run({ value: h[x], issues: [] }, v);
      X instanceof Promise ? _.push(X.then((L) => hu(L, m, x, h, j, q))) : hu(X, m, x, h, j, q);
    }
    return f ? Jh(_, h, m, v, u.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), Qb = /* @__PURE__ */ R("$ZodObjectJIT", (n, i) => {
  Gb.init(n, i);
  const r = n._zod.parse, u = yc(() => Kh(i)), s = (x) => {
    const k = new pb(["shape", "payload", "ctx"]), j = u.value, q = (V) => {
      const H = Vp(V);
      return `shape[${H}]._zod.run({ value: input[${H}], issues: [] }, ctx)`;
    };
    k.write("const input = payload.value;");
    const X = /* @__PURE__ */ Object.create(null);
    let L = 0;
    for (const V of j.keys)
      X[V] = `key_${L++}`;
    k.write("const newResult = {};");
    for (const V of j.keys) {
      const H = X[V], $ = Vp(V), F = x[V], U = F?._zod?.optin === "optional", ne = F?._zod?.optout === "optional";
      k.write(`const ${H} = ${q(V)};`), U && ne ? k.write(`
        if (${H}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${H}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${H}.value;
        }
        
      `) : U ? k.write(`
        if (${H}.issues.length) {
          payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${H}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${H}.value;
        }
        
      `) : k.write(`
        const ${H}_present = ${$} in input;
        if (${H}.issues.length) {
          payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        if (!${H}_present && !${H}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${$}]
          });
        }

        if (${H}_present) {
          if (${H}.value === undefined) {
            newResult[${$}] = undefined;
          } else {
            newResult[${$}] = ${H}.value;
          }
        }

      `);
    }
    k.write("payload.value = newResult;"), k.write("return payload;");
    const B = k.compile();
    return (V, H) => B(x, V, H);
  };
  let f;
  const d = pu, m = !vc.jitless, h = m && l0.value, _ = i.catchall;
  let S;
  n._zod.parse = (x, k) => {
    S ?? (S = u.value);
    const j = x.value;
    return d(j) ? m && h && k?.async === !1 && k.jitless !== !0 ? (f || (f = s(i.shape)), x = f(x, k), _ ? Jh([], j, x, k, S, n) : x) : r(x, k) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: n
    }), x);
  };
});
function Kp(n, i, r, u) {
  for (const f of n)
    if (f.issues.length === 0)
      return i.value = f.value, i;
  const s = n.filter((f) => !vi(f));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: r,
    errors: n.map((f) => f.issues.map((d) => Ca(d, u, ka())))
  }), i);
}
const Kb = /* @__PURE__ */ R("$ZodUnion", (n, i) => {
  Fe.init(n, i), He(n._zod, "optin", () => i.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), He(n._zod, "optout", () => i.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), He(n._zod, "values", () => {
    if (i.options.every((u) => u._zod.values))
      return new Set(i.options.flatMap((u) => Array.from(u._zod.values)));
  }), He(n._zod, "pattern", () => {
    if (i.options.every((u) => u._zod.pattern)) {
      const u = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${u.map((s) => _c(s.source)).join("|")})$`);
    }
  });
  const r = i.options.length === 1 ? i.options[0]._zod.run : null;
  n._zod.parse = (u, s) => {
    if (r)
      return r(u, s);
    let f = !1;
    const d = [];
    for (const m of i.options) {
      const v = m._zod.run({
        value: u.value,
        issues: []
      }, s);
      if (v instanceof Promise)
        d.push(v), f = !0;
      else {
        if (v.issues.length === 0)
          return v;
        d.push(v);
      }
    }
    return f ? Promise.all(d).then((m) => Kp(m, u, n, s)) : Kp(d, u, n, s);
  };
}), Jb = /* @__PURE__ */ R("$ZodIntersection", (n, i) => {
  Fe.init(n, i), n._zod.parse = (r, u) => {
    const s = r.value, f = i.left._zod.run({ value: s, issues: [] }, u), d = i.right._zod.run({ value: s, issues: [] }, u);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => Jp(r, v, h)) : Jp(r, f, d);
  };
});
function sc(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (kl(n) && kl(i)) {
    const r = Object.keys(i), u = Object.keys(n).filter((f) => r.indexOf(f) !== -1), s = { ...n, ...i };
    for (const f of u) {
      const d = sc(n[f], i[f]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [f, ...d.mergeErrorPath]
        };
      s[f] = d.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let u = 0; u < n.length; u++) {
      const s = n[u], f = i[u], d = sc(s, f);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...d.mergeErrorPath]
        };
      r.push(d.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Jp(n, i, r) {
  const u = /* @__PURE__ */ new Map();
  let s;
  for (const m of i.issues)
    if (m.code === "unrecognized_keys") {
      s ?? (s = m);
      for (const v of m.keys)
        u.has(v) || u.set(v, {}), u.get(v).l = !0;
    } else
      n.issues.push(m);
  for (const m of r.issues)
    if (m.code === "unrecognized_keys")
      for (const v of m.keys)
        u.has(v) || u.set(v, {}), u.get(v).r = !0;
    else
      n.issues.push(m);
  const f = [...u].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (f.length && s && n.issues.push({ ...s, keys: f }), vi(n))
    return n;
  const d = sc(i.value, r.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const Wb = /* @__PURE__ */ R("$ZodEnum", (n, i) => {
  Fe.init(n, i);
  const r = Nh(i.entries), u = new Set(r);
  n._zod.values = u, n._zod.pattern = new RegExp(`^(${r.filter((s) => r0.has(typeof s)).map((s) => typeof s == "string" ? _i(s) : s.toString()).join("|")})$`), n._zod.parse = (s, f) => {
    const d = s.value;
    return u.has(d) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: d,
      inst: n
    }), s;
  };
}), Pb = /* @__PURE__ */ R("$ZodLiteral", (n, i) => {
  if (Fe.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(i.values);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${i.values.map((u) => typeof u == "string" ? _i(u) : u ? _i(u.toString()) : String(u)).join("|")})$`), n._zod.parse = (u, s) => {
    const f = u.value;
    return r.has(f) || u.issues.push({
      code: "invalid_value",
      values: i.values,
      input: f,
      inst: n
    }), u;
  };
}), Fb = /* @__PURE__ */ R("$ZodTransform", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      throw new Mh(n.constructor.name);
    const s = i.transform(r.value, r);
    if (u.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((d) => (r.value = d, r.fallback = !0, r));
    if (s instanceof Promise)
      throw new gi();
    return r.value = s, r.fallback = !0, r;
  };
});
function Wp(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const Wh = /* @__PURE__ */ R("$ZodOptional", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", He(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), He(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${_c(r.source)})?$`) : void 0;
  }), n._zod.parse = (r, u) => {
    if (i.innerType._zod.optin === "optional") {
      const s = r.value, f = i.innerType._zod.run(r, u);
      return f instanceof Promise ? f.then((d) => Wp(d, s)) : Wp(f, s);
    }
    return r.value === void 0 ? r : i.innerType._zod.run(r, u);
  };
}), Ib = /* @__PURE__ */ R("$ZodExactOptional", (n, i) => {
  Wh.init(n, i), He(n._zod, "values", () => i.innerType._zod.values), He(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (r, u) => i.innerType._zod.run(r, u);
}), e1 = /* @__PURE__ */ R("$ZodNullable", (n, i) => {
  Fe.init(n, i), He(n._zod, "optin", () => i.innerType._zod.optin), He(n._zod, "optout", () => i.innerType._zod.optout), He(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${_c(r.source)}|null)$`) : void 0;
  }), He(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (r, u) => r.value === null ? r : i.innerType._zod.run(r, u);
}), t1 = /* @__PURE__ */ R("$ZodDefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", He(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    if (r.value === void 0)
      return r.value = i.defaultValue, r;
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => Pp(f, i)) : Pp(s, i);
  };
});
function Pp(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const n1 = /* @__PURE__ */ R("$ZodPrefault", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", He(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => (u.direction === "backward" || r.value === void 0 && (r.value = i.defaultValue), i.innerType._zod.run(r, u));
}), a1 = /* @__PURE__ */ R("$ZodNonOptional", (n, i) => {
  Fe.init(n, i), He(n._zod, "values", () => {
    const r = i.innerType._zod.values;
    return r ? new Set([...r].filter((u) => u !== void 0)) : void 0;
  }), n._zod.parse = (r, u) => {
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => Fp(f, n)) : Fp(s, n);
  };
});
function Fp(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const i1 = /* @__PURE__ */ R("$ZodCatch", (n, i) => {
  Fe.init(n, i), n._zod.optin = "optional", He(n._zod, "optout", () => i.innerType._zod.optout), He(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => (r.value = f.value, f.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: f.issues.map((d) => Ca(d, u, ka()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r)) : (r.value = s.value, s.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: s.issues.map((f) => Ca(f, u, ka()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r);
  };
}), l1 = /* @__PURE__ */ R("$ZodPipe", (n, i) => {
  Fe.init(n, i), He(n._zod, "values", () => i.in._zod.values), He(n._zod, "optin", () => i.in._zod.optin), He(n._zod, "optout", () => i.out._zod.optout), He(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (r, u) => {
    if (u.direction === "backward") {
      const f = i.out._zod.run(r, u);
      return f instanceof Promise ? f.then((d) => iu(d, i.in, u)) : iu(f, i.in, u);
    }
    const s = i.in._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => iu(f, i.out, u)) : iu(s, i.out, u);
  };
});
function iu(n, i, r) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, r);
}
const r1 = /* @__PURE__ */ R("$ZodReadonly", (n, i) => {
  Fe.init(n, i), He(n._zod, "propValues", () => i.innerType._zod.propValues), He(n._zod, "values", () => i.innerType._zod.values), He(n._zod, "optin", () => i.innerType?._zod?.optin), He(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then(Ip) : Ip(s);
  };
});
function Ip(n) {
  return n.value = Object.freeze(n.value), n;
}
const u1 = /* @__PURE__ */ R("$ZodCustom", (n, i) => {
  At.init(n, i), Fe.init(n, i), n._zod.parse = (r, u) => r, n._zod.check = (r) => {
    const u = r.value, s = i.fn(u);
    if (s instanceof Promise)
      return s.then((f) => eh(f, r, u, n));
    eh(s, r, u, n);
  };
});
function eh(n, i, r, u) {
  if (!n) {
    const s = {
      code: "custom",
      input: r,
      inst: u,
      // incorporates params.error into issue reporting
      path: [...u._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !u._zod.def.abort
      // params: inst._zod.def.params,
    };
    u._zod.def.params && (s.params = u._zod.def.params), i.issues.push(Cl(s));
  }
}
var th;
class o1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...r) {
    const u = r[0];
    return this._map.set(i, u), u && typeof u == "object" && "id" in u && this._idmap.set(u.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const r = this._map.get(i);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(i), this;
  }
  get(i) {
    const r = i._zod.parent;
    if (r) {
      const u = { ...this.get(r) ?? {} };
      delete u.id;
      const s = { ...u, ...this._map.get(i) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function s1() {
  return new o1();
}
(th = globalThis).__zod_globalRegistry ?? (th.__zod_globalRegistry = s1());
const xl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function c1(n, i) {
  return new n({
    type: "string",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function f1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nh(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function d1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function m1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function p1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function h1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function v1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function y1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function g1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function b1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function w1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function z1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function E1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function k1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(n, i) {
  return new n({
    type: "boolean",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function H1(n, i) {
  return new n({
    type: "never",
    ...ie(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ah(n, i) {
  return new Lh({
    check: "less_than",
    ...ie(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ps(n, i) {
  return new Lh({
    check: "less_than",
    ...ie(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function ih(n, i) {
  return new Vh({
    check: "greater_than",
    ...ie(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Fs(n, i) {
  return new Vh({
    check: "greater_than",
    ...ie(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function lh(n, i) {
  return new nb({
    check: "multiple_of",
    ...ie(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ph(n, i) {
  return new ib({
    check: "max_length",
    ...ie(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function vu(n, i) {
  return new lb({
    check: "min_length",
    ...ie(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Fh(n, i) {
  return new rb({
    check: "length_equals",
    ...ie(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function B1(n, i) {
  return new ub({
    check: "string_format",
    format: "regex",
    ...ie(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function q1(n) {
  return new ob({
    check: "string_format",
    format: "lowercase",
    ...ie(n)
  });
}
// @__NO_SIDE_EFFECTS__
function $1(n) {
  return new sb({
    check: "string_format",
    format: "uppercase",
    ...ie(n)
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new cb({
    check: "string_format",
    format: "includes",
    ...ie(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n, i) {
  return new fb({
    check: "string_format",
    format: "starts_with",
    ...ie(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function G1(n, i) {
  return new db({
    check: "string_format",
    format: "ends_with",
    ...ie(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function wi(n) {
  return new mb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function Q1(n) {
  return /* @__PURE__ */ wi((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function K1() {
  return /* @__PURE__ */ wi((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function J1() {
  return /* @__PURE__ */ wi((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function W1() {
  return /* @__PURE__ */ wi((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function P1() {
  return /* @__PURE__ */ wi((n) => i0(n));
}
// @__NO_SIDE_EFFECTS__
function F1(n, i, r) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ie(r)
  });
}
// @__NO_SIDE_EFFECTS__
function I1(n, i, r) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...ie(r)
  });
}
// @__NO_SIDE_EFFECTS__
function eS(n, i) {
  const r = /* @__PURE__ */ tS((u) => (u.addIssue = (s) => {
    if (typeof s == "string")
      u.issues.push(Cl(s, u.value, r._zod.def));
    else {
      const f = s;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = u.value), f.inst ?? (f.inst = r), f.continue ?? (f.continue = !r._zod.def.abort), u.issues.push(Cl(f));
    }
  }, n(u.value, u)), i);
  return r;
}
// @__NO_SIDE_EFFECTS__
function tS(n, i) {
  const r = new At({
    check: "custom",
    ...ie(i)
  });
  return r._zod.check = n, r;
}
function Ih(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? xl,
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
function pt(n, i, r = { path: [], schemaPath: [] }) {
  var u;
  const s = n._zod.def, f = i.seen.get(n);
  if (f)
    return f.count++, r.schemaPath.includes(n) && (f.cycle = r.path), f.schema;
  const d = { schema: {}, count: 1, cycle: void 0, path: r.path };
  i.seen.set(n, d);
  const m = n._zod.toJSONSchema?.();
  if (m)
    d.schema = m;
  else {
    const _ = {
      ...r,
      schemaPath: [...r.schemaPath, n],
      path: r.path
    };
    if (n._zod.processJSONSchema)
      n._zod.processJSONSchema(i, d.schema, _);
    else {
      const x = d.schema, k = i.processors[s.type];
      if (!k)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      k(n, i, x, _);
    }
    const S = n._zod.parent;
    S && (d.ref || (d.ref = S), pt(S, i, _), i.seen.get(S).isParent = !0);
  }
  const v = i.metadataRegistry.get(n);
  return v && Object.assign(d.schema, v), i.io === "input" && gt(n) && (delete d.schema.examples, delete d.schema.default), i.io === "input" && "_prefault" in d.schema && ((u = d.schema).default ?? (u.default = d.schema._prefault)), delete d.schema._prefault, i.seen.get(n).schema;
}
function ev(n, i) {
  const r = n.seen.get(i);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const u = /* @__PURE__ */ new Map();
  for (const d of n.seen.entries()) {
    const m = n.metadataRegistry.get(d[0])?.id;
    if (m) {
      const v = u.get(m);
      if (v && v !== d[0])
        throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      u.set(m, d[0]);
    }
  }
  const s = (d) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const S = n.external.registry.get(d[0])?.id, x = n.external.uri ?? ((j) => j);
      if (S)
        return { ref: x(S) };
      const k = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = k, { defId: k, ref: `${x("__shared")}#/${m}/${k}` };
    }
    if (d[1] === r)
      return { ref: "#" };
    const h = `#/${m}/`, _ = d[1].schema.id ?? `__schema${n.counter++}`;
    return { defId: _, ref: h + _ };
  }, f = (d) => {
    if (d[1].schema.$ref)
      return;
    const m = d[1], { ref: v, defId: h } = s(d);
    m.def = { ...m.schema }, h && (m.defId = h);
    const _ = m.schema;
    for (const S in _)
      delete _[S];
    _.$ref = v;
  };
  if (n.cycles === "throw")
    for (const d of n.seen.entries()) {
      const m = d[1];
      if (m.cycle)
        throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const d of n.seen.entries()) {
    const m = d[1];
    if (i === d[0]) {
      f(d);
      continue;
    }
    if (n.external) {
      const h = n.external.registry.get(d[0])?.id;
      if (i !== d[0] && h) {
        f(d);
        continue;
      }
    }
    if (n.metadataRegistry.get(d[0])?.id) {
      f(d);
      continue;
    }
    if (m.cycle) {
      f(d);
      continue;
    }
    if (m.count > 1 && n.reused === "ref") {
      f(d);
      continue;
    }
  }
}
function tv(n, i) {
  const r = n.seen.get(i);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const u = (m) => {
    const v = n.seen.get(m);
    if (v.ref === null)
      return;
    const h = v.def ?? v.schema, _ = { ...h }, S = v.ref;
    if (v.ref = null, S) {
      u(S);
      const k = n.seen.get(S), j = k.schema;
      if (j.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(j)) : Object.assign(h, j), Object.assign(h, _), m._zod.parent === S)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in _ || delete h[X];
      if (j.$ref && k.def)
        for (const X in h)
          X === "$ref" || X === "allOf" || X in k.def && JSON.stringify(h[X]) === JSON.stringify(k.def[X]) && delete h[X];
    }
    const x = m._zod.parent;
    if (x && x !== S) {
      u(x);
      const k = n.seen.get(x);
      if (k?.schema.$ref && (h.$ref = k.schema.$ref, k.def))
        for (const j in h)
          j === "$ref" || j === "allOf" || j in k.def && JSON.stringify(h[j]) === JSON.stringify(k.def[j]) && delete h[j];
    }
    n.override({
      zodSchema: m,
      jsonSchema: h,
      path: v.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse())
    u(m[0]);
  const s = {};
  if (n.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(i)?.id;
    if (!m)
      throw new Error("Schema is missing an `id` property");
    s.$id = n.external.uri(m);
  }
  Object.assign(s, r.def ?? r.schema);
  const f = n.metadataRegistry.get(i)?.id;
  f !== void 0 && s.id === f && delete s.id;
  const d = n.external?.defs ?? {};
  for (const m of n.seen.entries()) {
    const v = m[1];
    v.def && v.defId && (v.def.id === v.defId && delete v.def.id, d[v.defId] = v.def);
  }
  n.external || Object.keys(d).length > 0 && (n.target === "draft-2020-12" ? s.$defs = d : s.definitions = d);
  try {
    const m = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: yu(i, "input", n.processors),
          output: yu(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function gt(n, i) {
  const r = i ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(n))
    return !1;
  r.seen.add(n);
  const u = n._zod.def;
  if (u.type === "transform")
    return !0;
  if (u.type === "array")
    return gt(u.element, r);
  if (u.type === "set")
    return gt(u.valueType, r);
  if (u.type === "lazy")
    return gt(u.getter(), r);
  if (u.type === "promise" || u.type === "optional" || u.type === "nonoptional" || u.type === "nullable" || u.type === "readonly" || u.type === "default" || u.type === "prefault")
    return gt(u.innerType, r);
  if (u.type === "intersection")
    return gt(u.left, r) || gt(u.right, r);
  if (u.type === "record" || u.type === "map")
    return gt(u.keyType, r) || gt(u.valueType, r);
  if (u.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : gt(u.in, r) || gt(u.out, r);
  if (u.type === "object") {
    for (const s in u.shape)
      if (gt(u.shape[s], r))
        return !0;
    return !1;
  }
  if (u.type === "union") {
    for (const s of u.options)
      if (gt(s, r))
        return !0;
    return !1;
  }
  if (u.type === "tuple") {
    for (const s of u.items)
      if (gt(s, r))
        return !0;
    return !!(u.rest && gt(u.rest, r));
  }
  return !1;
}
const nS = (n, i = {}) => (r) => {
  const u = Ih({ ...r, processors: i });
  return pt(n, u), ev(u, n), tv(u, n);
}, yu = (n, i, r = {}) => (u) => {
  const { libraryOptions: s, target: f } = u ?? {}, d = Ih({ ...s ?? {}, target: f, io: i, processors: r });
  return pt(n, d), ev(d, n), tv(d, n);
}, aS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, iS = (n, i, r, u) => {
  const s = r;
  s.type = "string";
  const { minimum: f, maximum: d, format: m, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof f == "number" && (s.minLength = f), typeof d == "number" && (s.maxLength = d), m && (s.format = aS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), h && (s.contentEncoding = h), v && v.size > 0) {
    const _ = [...v];
    _.length === 1 ? s.pattern = _[0].source : _.length > 1 && (s.allOf = [
      ..._.map((S) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: S.source
      }))
    ]);
  }
}, lS = (n, i, r, u) => {
  const s = r, { minimum: f, maximum: d, format: m, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: _ } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const S = typeof _ == "number" && _ >= (f ?? Number.NEGATIVE_INFINITY), x = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), k = i.target === "draft-04" || i.target === "openapi-3.0";
  S ? k ? (s.minimum = _, s.exclusiveMinimum = !0) : s.exclusiveMinimum = _ : typeof f == "number" && (s.minimum = f), x ? k ? (s.maximum = h, s.exclusiveMaximum = !0) : s.exclusiveMaximum = h : typeof d == "number" && (s.maximum = d), typeof v == "number" && (s.multipleOf = v);
}, rS = (n, i, r, u) => {
  r.type = "boolean";
}, uS = (n, i, r, u) => {
  r.not = {};
}, oS = (n, i, r, u) => {
}, sS = (n, i, r, u) => {
  const s = n._zod.def, f = Nh(s.entries);
  f.every((d) => typeof d == "number") && (r.type = "number"), f.every((d) => typeof d == "string") && (r.type = "string"), r.enum = f;
}, cS = (n, i, r, u) => {
  const s = n._zod.def, f = [];
  for (const d of s.values)
    if (d === void 0) {
      if (i.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof d == "bigint") {
      if (i.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      f.push(Number(d));
    } else
      f.push(d);
  if (f.length !== 0) if (f.length === 1) {
    const d = f[0];
    r.type = d === null ? "null" : typeof d, i.target === "draft-04" || i.target === "openapi-3.0" ? r.enum = [d] : r.const = d;
  } else
    f.every((d) => typeof d == "number") && (r.type = "number"), f.every((d) => typeof d == "string") && (r.type = "string"), f.every((d) => typeof d == "boolean") && (r.type = "boolean"), f.every((d) => d === null) && (r.type = "null"), r.enum = f;
}, fS = (n, i, r, u) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, dS = (n, i, r, u) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, mS = (n, i, r, u) => {
  const s = r, f = n._zod.def, { minimum: d, maximum: m } = n._zod.bag;
  typeof d == "number" && (s.minItems = d), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = pt(f.element, i, {
    ...u,
    path: [...u.path, "items"]
  });
}, pS = (n, i, r, u) => {
  const s = r, f = n._zod.def;
  s.type = "object", s.properties = {};
  const d = f.shape;
  for (const h in d)
    s.properties[h] = pt(d[h], i, {
      ...u,
      path: [...u.path, "properties", h]
    });
  const m = new Set(Object.keys(d)), v = new Set([...m].filter((h) => {
    const _ = f.shape[h]._zod;
    return i.io === "input" ? _.optin === void 0 : _.optout === void 0;
  }));
  v.size > 0 && (s.required = Array.from(v)), f.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : f.catchall ? f.catchall && (s.additionalProperties = pt(f.catchall, i, {
    ...u,
    path: [...u.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, hS = (n, i, r, u) => {
  const s = n._zod.def, f = s.inclusive === !1, d = s.options.map((m, v) => pt(m, i, {
    ...u,
    path: [...u.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? r.oneOf = d : r.anyOf = d;
}, vS = (n, i, r, u) => {
  const s = n._zod.def, f = pt(s.left, i, {
    ...u,
    path: [...u.path, "allOf", 0]
  }), d = pt(s.right, i, {
    ...u,
    path: [...u.path, "allOf", 1]
  }), m = (h) => "allOf" in h && Object.keys(h).length === 1, v = [
    ...m(f) ? f.allOf : [f],
    ...m(d) ? d.allOf : [d]
  ];
  r.allOf = v;
}, yS = (n, i, r, u) => {
  const s = n._zod.def, f = pt(s.innerType, i, u), d = i.seen.get(n);
  i.target === "openapi-3.0" ? (d.ref = s.innerType, r.nullable = !0) : r.anyOf = [f, { type: "null" }];
}, gS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, _S = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
}, bS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, i.io === "input" && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, SS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType;
  let d;
  try {
    d = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = d;
}, wS = (n, i, r, u) => {
  const s = n._zod.def, f = s.in._zod.traits.has("$ZodTransform"), d = i.io === "input" ? f ? s.out : s.in : s.out;
  pt(d, i, u);
  const m = i.seen.get(n);
  m.ref = d;
}, zS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.readOnly = !0;
}, nv = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, xS = /* @__PURE__ */ R("ZodISODateTime", (n, i) => {
  Ab.init(n, i), Ke.init(n, i);
});
function TS(n) {
  return /* @__PURE__ */ M1(xS, n);
}
const ES = /* @__PURE__ */ R("ZodISODate", (n, i) => {
  kb.init(n, i), Ke.init(n, i);
});
function AS(n) {
  return /* @__PURE__ */ N1(ES, n);
}
const kS = /* @__PURE__ */ R("ZodISOTime", (n, i) => {
  Cb.init(n, i), Ke.init(n, i);
});
function CS(n) {
  return /* @__PURE__ */ D1(kS, n);
}
const OS = /* @__PURE__ */ R("ZodISODuration", (n, i) => {
  Ob.init(n, i), Ke.init(n, i);
});
function jS(n) {
  return /* @__PURE__ */ Z1(OS, n);
}
const MS = (n, i) => {
  Yh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (r) => g0(n, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => y0(n, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        n.issues.push(r), n.message = JSON.stringify(n.issues, oc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        n.issues.push(...r), n.message = JSON.stringify(n.issues, oc, 2);
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
}, Jt = /* @__PURE__ */ R("ZodError", MS, {
  Parent: Error
}), NS = /* @__PURE__ */ Sc(Jt), DS = /* @__PURE__ */ wc(Jt), ZS = /* @__PURE__ */ Tu(Jt), RS = /* @__PURE__ */ Eu(Jt), US = /* @__PURE__ */ S0(Jt), YS = /* @__PURE__ */ w0(Jt), XS = /* @__PURE__ */ z0(Jt), HS = /* @__PURE__ */ x0(Jt), BS = /* @__PURE__ */ T0(Jt), qS = /* @__PURE__ */ E0(Jt), $S = /* @__PURE__ */ A0(Jt), LS = /* @__PURE__ */ k0(Jt), rh = /* @__PURE__ */ new WeakMap();
function Dl(n, i, r) {
  const u = Object.getPrototypeOf(n);
  let s = rh.get(u);
  if (s || (s = /* @__PURE__ */ new Set(), rh.set(u, s)), !s.has(i)) {
    s.add(i);
    for (const f in r) {
      const d = r[f];
      Object.defineProperty(u, f, {
        configurable: !0,
        enumerable: !1,
        get() {
          const m = d.bind(this);
          return Object.defineProperty(this, f, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          }), m;
        },
        set(m) {
          Object.defineProperty(this, f, {
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
const Ie = /* @__PURE__ */ R("ZodType", (n, i) => (Fe.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: yu(n, "input"),
    output: yu(n, "output")
  }
}), n.toJSONSchema = nS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (r, u) => NS(n, r, u, { callee: n.parse }), n.safeParse = (r, u) => ZS(n, r, u), n.parseAsync = async (r, u) => DS(n, r, u, { callee: n.parseAsync }), n.safeParseAsync = async (r, u) => RS(n, r, u), n.spa = n.safeParseAsync, n.encode = (r, u) => US(n, r, u), n.decode = (r, u) => YS(n, r, u), n.encodeAsync = async (r, u) => XS(n, r, u), n.decodeAsync = async (r, u) => HS(n, r, u), n.safeEncode = (r, u) => BS(n, r, u), n.safeDecode = (r, u) => qS(n, r, u), n.safeEncodeAsync = async (r, u) => $S(n, r, u), n.safeDecodeAsync = async (r, u) => LS(n, r, u), Dl(n, "ZodType", {
  check(...r) {
    const u = this.def;
    return this.clone(na(u, {
      checks: [
        ...u.checks ?? [],
        ...r.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...r) {
    return this.check(...r);
  },
  clone(r, u) {
    return aa(this, r, u);
  },
  brand() {
    return this;
  },
  register(r, u) {
    return r.add(this, u), this;
  },
  refine(r, u) {
    return this.check(U2(r, u));
  },
  superRefine(r, u) {
    return this.check(Y2(r, u));
  },
  overwrite(r) {
    return this.check(/* @__PURE__ */ wi(r));
  },
  optional() {
    return ch(this);
  },
  exactOptional() {
    return x2(this);
  },
  nullable() {
    return fh(this);
  },
  nullish() {
    return ch(fh(this));
  },
  nonoptional(r) {
    return O2(this, r);
  },
  array() {
    return gu(this);
  },
  or(r) {
    return rv([this, r]);
  },
  and(r) {
    return _2(this, r);
  },
  transform(r) {
    return dh(this, w2(r));
  },
  default(r) {
    return A2(this, r);
  },
  prefault(r) {
    return C2(this, r);
  },
  catch(r) {
    return M2(this, r);
  },
  pipe(r) {
    return dh(this, r);
  },
  readonly() {
    return Z2(this);
  },
  describe(r) {
    const u = this.clone();
    return xl.add(u, { description: r }), u;
  },
  meta(...r) {
    if (r.length === 0)
      return xl.get(this);
    const u = this.clone();
    return xl.add(u, r[0]), u;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(r) {
    return r(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return xl.get(n)?.description;
  },
  configurable: !0
}), n)), av = /* @__PURE__ */ R("_ZodString", (n, i) => {
  zc.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (u, s, f) => iS(n, u, s);
  const r = n._zod.bag;
  n.format = r.format ?? null, n.minLength = r.minimum ?? null, n.maxLength = r.maximum ?? null, Dl(n, "_ZodString", {
    regex(...u) {
      return this.check(/* @__PURE__ */ B1(...u));
    },
    includes(...u) {
      return this.check(/* @__PURE__ */ L1(...u));
    },
    startsWith(...u) {
      return this.check(/* @__PURE__ */ V1(...u));
    },
    endsWith(...u) {
      return this.check(/* @__PURE__ */ G1(...u));
    },
    min(...u) {
      return this.check(/* @__PURE__ */ vu(...u));
    },
    max(...u) {
      return this.check(/* @__PURE__ */ Ph(...u));
    },
    length(...u) {
      return this.check(/* @__PURE__ */ Fh(...u));
    },
    nonempty(...u) {
      return this.check(/* @__PURE__ */ vu(1, ...u));
    },
    lowercase(u) {
      return this.check(/* @__PURE__ */ q1(u));
    },
    uppercase(u) {
      return this.check(/* @__PURE__ */ $1(u));
    },
    trim() {
      return this.check(/* @__PURE__ */ K1());
    },
    normalize(...u) {
      return this.check(/* @__PURE__ */ Q1(...u));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ J1());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ W1());
    },
    slugify() {
      return this.check(/* @__PURE__ */ P1());
    }
  });
}), VS = /* @__PURE__ */ R("ZodString", (n, i) => {
  zc.init(n, i), av.init(n, i), n.email = (r) => n.check(/* @__PURE__ */ f1(GS, r)), n.url = (r) => n.check(/* @__PURE__ */ v1(QS, r)), n.jwt = (r) => n.check(/* @__PURE__ */ j1(o2, r)), n.emoji = (r) => n.check(/* @__PURE__ */ y1(KS, r)), n.guid = (r) => n.check(/* @__PURE__ */ nh(uh, r)), n.uuid = (r) => n.check(/* @__PURE__ */ d1(lu, r)), n.uuidv4 = (r) => n.check(/* @__PURE__ */ m1(lu, r)), n.uuidv6 = (r) => n.check(/* @__PURE__ */ p1(lu, r)), n.uuidv7 = (r) => n.check(/* @__PURE__ */ h1(lu, r)), n.nanoid = (r) => n.check(/* @__PURE__ */ g1(JS, r)), n.guid = (r) => n.check(/* @__PURE__ */ nh(uh, r)), n.cuid = (r) => n.check(/* @__PURE__ */ _1(WS, r)), n.cuid2 = (r) => n.check(/* @__PURE__ */ b1(PS, r)), n.ulid = (r) => n.check(/* @__PURE__ */ S1(FS, r)), n.base64 = (r) => n.check(/* @__PURE__ */ k1(l2, r)), n.base64url = (r) => n.check(/* @__PURE__ */ C1(r2, r)), n.xid = (r) => n.check(/* @__PURE__ */ w1(IS, r)), n.ksuid = (r) => n.check(/* @__PURE__ */ z1(e2, r)), n.ipv4 = (r) => n.check(/* @__PURE__ */ x1(t2, r)), n.ipv6 = (r) => n.check(/* @__PURE__ */ T1(n2, r)), n.cidrv4 = (r) => n.check(/* @__PURE__ */ E1(a2, r)), n.cidrv6 = (r) => n.check(/* @__PURE__ */ A1(i2, r)), n.e164 = (r) => n.check(/* @__PURE__ */ O1(u2, r)), n.datetime = (r) => n.check(TS(r)), n.date = (r) => n.check(AS(r)), n.time = (r) => n.check(CS(r)), n.duration = (r) => n.check(jS(r));
});
function _t(n) {
  return /* @__PURE__ */ c1(VS, n);
}
const Ke = /* @__PURE__ */ R("ZodStringFormat", (n, i) => {
  Qe.init(n, i), av.init(n, i);
}), GS = /* @__PURE__ */ R("ZodEmail", (n, i) => {
  gb.init(n, i), Ke.init(n, i);
}), uh = /* @__PURE__ */ R("ZodGUID", (n, i) => {
  vb.init(n, i), Ke.init(n, i);
}), lu = /* @__PURE__ */ R("ZodUUID", (n, i) => {
  yb.init(n, i), Ke.init(n, i);
}), QS = /* @__PURE__ */ R("ZodURL", (n, i) => {
  _b.init(n, i), Ke.init(n, i);
}), KS = /* @__PURE__ */ R("ZodEmoji", (n, i) => {
  bb.init(n, i), Ke.init(n, i);
}), JS = /* @__PURE__ */ R("ZodNanoID", (n, i) => {
  Sb.init(n, i), Ke.init(n, i);
}), WS = /* @__PURE__ */ R("ZodCUID", (n, i) => {
  wb.init(n, i), Ke.init(n, i);
}), PS = /* @__PURE__ */ R("ZodCUID2", (n, i) => {
  zb.init(n, i), Ke.init(n, i);
}), FS = /* @__PURE__ */ R("ZodULID", (n, i) => {
  xb.init(n, i), Ke.init(n, i);
}), IS = /* @__PURE__ */ R("ZodXID", (n, i) => {
  Tb.init(n, i), Ke.init(n, i);
}), e2 = /* @__PURE__ */ R("ZodKSUID", (n, i) => {
  Eb.init(n, i), Ke.init(n, i);
}), t2 = /* @__PURE__ */ R("ZodIPv4", (n, i) => {
  jb.init(n, i), Ke.init(n, i);
}), n2 = /* @__PURE__ */ R("ZodIPv6", (n, i) => {
  Mb.init(n, i), Ke.init(n, i);
}), a2 = /* @__PURE__ */ R("ZodCIDRv4", (n, i) => {
  Nb.init(n, i), Ke.init(n, i);
}), i2 = /* @__PURE__ */ R("ZodCIDRv6", (n, i) => {
  Db.init(n, i), Ke.init(n, i);
}), l2 = /* @__PURE__ */ R("ZodBase64", (n, i) => {
  Zb.init(n, i), Ke.init(n, i);
}), r2 = /* @__PURE__ */ R("ZodBase64URL", (n, i) => {
  Ub.init(n, i), Ke.init(n, i);
}), u2 = /* @__PURE__ */ R("ZodE164", (n, i) => {
  Yb.init(n, i), Ke.init(n, i);
}), o2 = /* @__PURE__ */ R("ZodJWT", (n, i) => {
  Hb.init(n, i), Ke.init(n, i);
}), iv = /* @__PURE__ */ R("ZodNumber", (n, i) => {
  Qh.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (u, s, f) => lS(n, u, s), Dl(n, "ZodNumber", {
    gt(u, s) {
      return this.check(/* @__PURE__ */ ih(u, s));
    },
    gte(u, s) {
      return this.check(/* @__PURE__ */ Fs(u, s));
    },
    min(u, s) {
      return this.check(/* @__PURE__ */ Fs(u, s));
    },
    lt(u, s) {
      return this.check(/* @__PURE__ */ ah(u, s));
    },
    lte(u, s) {
      return this.check(/* @__PURE__ */ Ps(u, s));
    },
    max(u, s) {
      return this.check(/* @__PURE__ */ Ps(u, s));
    },
    int(u) {
      return this.check(oh(u));
    },
    safe(u) {
      return this.check(oh(u));
    },
    positive(u) {
      return this.check(/* @__PURE__ */ ih(0, u));
    },
    nonnegative(u) {
      return this.check(/* @__PURE__ */ Fs(0, u));
    },
    negative(u) {
      return this.check(/* @__PURE__ */ ah(0, u));
    },
    nonpositive(u) {
      return this.check(/* @__PURE__ */ Ps(0, u));
    },
    multipleOf(u, s) {
      return this.check(/* @__PURE__ */ lh(u, s));
    },
    step(u, s) {
      return this.check(/* @__PURE__ */ lh(u, s));
    },
    finite() {
      return this;
    }
  });
  const r = n._zod.bag;
  n.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), n.isFinite = !0, n.format = r.format ?? null;
});
function s2(n) {
  return /* @__PURE__ */ R1(iv, n);
}
const c2 = /* @__PURE__ */ R("ZodNumberFormat", (n, i) => {
  Bb.init(n, i), iv.init(n, i);
});
function oh(n) {
  return /* @__PURE__ */ U1(c2, n);
}
const f2 = /* @__PURE__ */ R("ZodBoolean", (n, i) => {
  qb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => rS(n, r, u);
});
function lv(n) {
  return /* @__PURE__ */ Y1(f2, n);
}
const d2 = /* @__PURE__ */ R("ZodUnknown", (n, i) => {
  $b.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => oS();
});
function sh() {
  return /* @__PURE__ */ X1(d2);
}
const m2 = /* @__PURE__ */ R("ZodNever", (n, i) => {
  Lb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => uS(n, r, u);
});
function p2(n) {
  return /* @__PURE__ */ H1(m2, n);
}
const h2 = /* @__PURE__ */ R("ZodArray", (n, i) => {
  Vb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => mS(n, r, u, s), n.element = i.element, Dl(n, "ZodArray", {
    min(r, u) {
      return this.check(/* @__PURE__ */ vu(r, u));
    },
    nonempty(r) {
      return this.check(/* @__PURE__ */ vu(1, r));
    },
    max(r, u) {
      return this.check(/* @__PURE__ */ Ph(r, u));
    },
    length(r, u) {
      return this.check(/* @__PURE__ */ Fh(r, u));
    },
    unwrap() {
      return this.element;
    }
  });
});
function gu(n, i) {
  return /* @__PURE__ */ F1(h2, n, i);
}
const v2 = /* @__PURE__ */ R("ZodObject", (n, i) => {
  Qb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => pS(n, r, u, s), He(n, "shape", () => i.shape), Dl(n, "ZodObject", {
    keyof() {
      return _u(Object.keys(this._zod.def.shape));
    },
    catchall(r) {
      return this.clone({ ...this._zod.def, catchall: r });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: sh() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: sh() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: p2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(r) {
      return f0(this, r);
    },
    safeExtend(r) {
      return d0(this, r);
    },
    merge(r) {
      return m0(this, r);
    },
    pick(r) {
      return s0(this, r);
    },
    omit(r) {
      return c0(this, r);
    },
    partial(...r) {
      return p0(uv, this, r[0]);
    },
    required(...r) {
      return h0(ov, this, r[0]);
    }
  });
});
function Ol(n, i) {
  const r = {
    type: "object",
    shape: n ?? {},
    ...ie(i)
  };
  return new v2(r);
}
const y2 = /* @__PURE__ */ R("ZodUnion", (n, i) => {
  Kb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => hS(n, r, u, s), n.options = i.options;
});
function rv(n, i) {
  return new y2({
    type: "union",
    options: n,
    ...ie(i)
  });
}
const g2 = /* @__PURE__ */ R("ZodIntersection", (n, i) => {
  Jb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => vS(n, r, u, s);
});
function _2(n, i) {
  return new g2({
    type: "intersection",
    left: n,
    right: i
  });
}
const cc = /* @__PURE__ */ R("ZodEnum", (n, i) => {
  Wb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (u, s, f) => sS(n, u, s), n.enum = i.entries, n.options = Object.values(i.entries);
  const r = new Set(Object.keys(i.entries));
  n.extract = (u, s) => {
    const f = {};
    for (const d of u)
      if (r.has(d))
        f[d] = i.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new cc({
      ...i,
      checks: [],
      ...ie(s),
      entries: f
    });
  }, n.exclude = (u, s) => {
    const f = { ...i.entries };
    for (const d of u)
      if (r.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new cc({
      ...i,
      checks: [],
      ...ie(s),
      entries: f
    });
  };
});
function _u(n, i) {
  const r = Array.isArray(n) ? Object.fromEntries(n.map((u) => [u, u])) : n;
  return new cc({
    type: "enum",
    entries: r,
    ...ie(i)
  });
}
const b2 = /* @__PURE__ */ R("ZodLiteral", (n, i) => {
  Pb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => cS(n, r, u), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function bu(n, i) {
  return new b2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...ie(i)
  });
}
const S2 = /* @__PURE__ */ R("ZodTransform", (n, i) => {
  Fb.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => dS(n, r), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      throw new Mh(n.constructor.name);
    r.addIssue = (f) => {
      if (typeof f == "string")
        r.issues.push(Cl(f, r.value, i));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = n), r.issues.push(Cl(d));
      }
    };
    const s = i.transform(r.value, r);
    return s instanceof Promise ? s.then((f) => (r.value = f, r.fallback = !0, r)) : (r.value = s, r.fallback = !0, r);
  };
});
function w2(n) {
  return new S2({
    type: "transform",
    transform: n
  });
}
const uv = /* @__PURE__ */ R("ZodOptional", (n, i) => {
  Wh.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => nv(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function ch(n) {
  return new uv({
    type: "optional",
    innerType: n
  });
}
const z2 = /* @__PURE__ */ R("ZodExactOptional", (n, i) => {
  Ib.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => nv(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function x2(n) {
  return new z2({
    type: "optional",
    innerType: n
  });
}
const T2 = /* @__PURE__ */ R("ZodNullable", (n, i) => {
  e1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => yS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function fh(n) {
  return new T2({
    type: "nullable",
    innerType: n
  });
}
const E2 = /* @__PURE__ */ R("ZodDefault", (n, i) => {
  t1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => _S(n, r, u, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function A2(n, i) {
  return new E2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Zh(i);
    }
  });
}
const k2 = /* @__PURE__ */ R("ZodPrefault", (n, i) => {
  n1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => bS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function C2(n, i) {
  return new k2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Zh(i);
    }
  });
}
const ov = /* @__PURE__ */ R("ZodNonOptional", (n, i) => {
  a1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => gS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function O2(n, i) {
  return new ov({
    type: "nonoptional",
    innerType: n,
    ...ie(i)
  });
}
const j2 = /* @__PURE__ */ R("ZodCatch", (n, i) => {
  i1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => SS(n, r, u, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function M2(n, i) {
  return new j2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const N2 = /* @__PURE__ */ R("ZodPipe", (n, i) => {
  l1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => wS(n, r, u, s), n.in = i.in, n.out = i.out;
});
function dh(n, i) {
  return new N2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const D2 = /* @__PURE__ */ R("ZodReadonly", (n, i) => {
  r1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => zS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function Z2(n) {
  return new D2({
    type: "readonly",
    innerType: n
  });
}
const R2 = /* @__PURE__ */ R("ZodCustom", (n, i) => {
  u1.init(n, i), Ie.init(n, i), n._zod.processJSONSchema = (r, u, s) => fS(n, r);
});
function U2(n, i = {}) {
  return /* @__PURE__ */ I1(R2, n, i);
}
function Y2(n, i) {
  return /* @__PURE__ */ eS(n, i);
}
const Su = _t().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), ke = Su.optional(), X2 = Ol({
  segment_id: s2().int().nonnegative(),
  area_id: _t().min(1).optional(),
  name: _t().min(1),
  icon: _t().optional(),
  include_in_floor_clean: lv().optional().default(!0)
}).passthrough(), H2 = Ol({
  id: _t().min(1),
  name: _t().min(1),
  map_entity: Su,
  map_select_option: _t().min(1).optional(),
  vacuum_then_mop_routine: Su.refine((n) => n.startsWith("button."), "Routine must be a button entity").optional(),
  assisted_carry: lv().optional().default(!1),
  rooms: gu(X2).min(1)
}).passthrough(), B2 = Ol({
  id: _t().min(1),
  name: _t().min(1),
  icon: _t().optional(),
  strategy: _u(["custom", "smartplan"]),
  cleaning_type: _u(["vacuum", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: _t().optional(),
  mop_mode: _t().optional(),
  mop_intensity: _t().optional(),
  cleaning_count: rv([bu(1), bu(2)]).optional()
}).passthrough(), sv = Ol({
  type: bu("custom:roborock-vacuum-map-card").optional(),
  entity: Su.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: _t().optional(),
  language: _u(["en", "nl"]).optional().default("en"),
  entities: Ol({
    map_select: ke,
    cleaning_mode: ke,
    vacuum_then_mop_script: ke,
    mop_mode: ke,
    mop_intensity: ke,
    dock_mop_drying: ke,
    dock_mop_drying_remaining_time: ke,
    dock_child_lock: ke,
    dock_mop_wash_frequency: ke,
    dock_wash_mode: ke,
    dock_wash_temperature: ke,
    dock_auto_empty: ke,
    dock_empty_mode: ke,
    dock_auto_dry: ke,
    dock_dry_duration: ke,
    assisted_carry_stage: ke,
    assisted_carry_job: ke,
    assisted_carry_prepare_script: ke,
    assisted_carry_start_script: ke,
    assisted_carry_finish_script: ke,
    water_shortage: ke,
    mop_attached: ke,
    water_box_attached: ke,
    do_not_disturb: ke,
    battery: ke,
    current_room: ke,
    cleaning_area: ke,
    cleaning_time: ke,
    cleaning_progress: ke,
    status: ke,
    error: ke,
    last_clean_end: ke
  }).passthrough().optional().default({}),
  floors: gu(H2).min(1),
  presets: gu(B2).optional().default([]),
  default_preset: _t().optional().default("vacuum_only"),
  vacuum_mode_fallback: bu("set_clean_motor_mode").optional()
}).passthrough().superRefine((n, i) => {
  n.floors.length > 1 && !n.entities.map_select && i.addIssue({ code: "custom", path: ["entities", "map_select"], message: "Multiple floors require a map-select entity" });
  const r = n.floors.filter((f) => f.assisted_carry);
  if (r.length > 1 && i.addIssue({ code: "custom", path: ["floors"], message: "Only one floor can use assisted carry" }), r.length === 1) {
    const f = [
      "assisted_carry_stage",
      "assisted_carry_job",
      "assisted_carry_prepare_script",
      "assisted_carry_start_script",
      "assisted_carry_finish_script"
    ];
    for (const d of f)
      n.entities[d] || i.addIssue({ code: "custom", path: ["entities", d], message: "Assisted carry requires this entity" });
  }
  const u = /* @__PURE__ */ new Set();
  for (const [f, d] of n.floors.entries()) {
    u.has(d.id) && i.addIssue({ code: "custom", path: ["floors", f, "id"], message: "Floor IDs must be unique" }), u.add(d.id);
    const m = /* @__PURE__ */ new Set();
    for (const [v, h] of d.rooms.entries())
      m.has(h.segment_id) && i.addIssue({
        code: "custom",
        path: ["floors", f, "rooms", v, "segment_id"],
        message: "Segment IDs must be unique within a floor"
      }), m.add(h.segment_id);
  }
  const s = /* @__PURE__ */ new Set(["vacuum_only", "vacuum_and_mop", "vacuum_then_mop", "smartplan"]);
  for (const [f, d] of n.presets.entries())
    s.has(d.id) && i.addIssue({ code: "custom", path: ["presets", f, "id"], message: "Preset IDs must be unique" }), s.add(d.id);
  n.default_preset && !s.has(n.default_preset) && i.addIssue({ code: "custom", path: ["default_preset"], message: "Default preset does not exist" });
});
function q2(n) {
  return sv.parse(n);
}
function $2(n) {
  const i = sv.safeParse(n);
  return i.success ? [] : i.error.issues.map((r) => `${r.path.join(".") || "config"}: ${r.message}`);
}
function cv() {
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
function ru(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function L2(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((r) => {
    const u = r;
    return !ru(u.vacuum?.x) || !ru(u.vacuum?.y) || !ru(u.map?.x) || !ru(u.map?.y) ? [] : [u];
  }) : [];
}
function fv(n) {
  const i = n?.attributes.rooms;
  return i ? (Array.isArray(i) ? i.map((u, s) => [String(s), u]) : typeof i == "object" ? Object.entries(i) : []).flatMap(([u, s]) => {
    if (!s || typeof s != "object") return [];
    const f = s, d = f.number ?? f.room_id ?? f.segment_id ?? u, m = Number(d), v = Number(f.x0), h = Number(f.y0), _ = Number(f.x1), S = Number(f.y1);
    return [m, v, h, _, S].every(Number.isFinite) ? [
      {
        segment_id: m,
        source_name: typeof f.name == "string" ? f.name : `Room ${m}`,
        x0: v,
        y0: h,
        x1: _,
        y1: S
      }
    ] : [];
  }) : [];
}
function Tl(n, i, r) {
  if (r.length < 3) throw new Error("At least three calibration points are required");
  const [u, s, f] = r, d = s.vacuum.x - u.vacuum.x, m = s.vacuum.y - u.vacuum.y, v = f.vacuum.x - u.vacuum.x, h = f.vacuum.y - u.vacuum.y, _ = d * h - m * v;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const S = n - u.vacuum.x, x = i - u.vacuum.y, k = (S * h - x * v) / _, j = (d * x - m * S) / _;
  return {
    x: u.map.x + k * (s.map.x - u.map.x) + j * (f.map.x - u.map.x),
    y: u.map.y + k * (s.map.y - u.map.y) + j * (f.map.y - u.map.y)
  };
}
function V2(n, i) {
  return `${[
    Tl(n.x0, n.y0, i),
    Tl(n.x1, n.y0, i),
    Tl(n.x1, n.y1, i),
    Tl(n.x0, n.y1, i)
  ].map((u, s) => `${s === 0 ? "M" : "L"} ${u.x} ${u.y}`).join(" ")} Z`;
}
function G2(n, i) {
  return Tl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function Q2(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function uu(n, i, r) {
  const u = [...n], [s] = u.splice(i, 1);
  return u.splice(r, 0, s), u;
}
function K2(n, i) {
  return Object.keys(n.states).filter((r) => r.startsWith(`${i}.`)).sort();
}
function ou({
  hass: n,
  domain: i,
  value: r,
  optional: u,
  onChange: s
}) {
  return /* @__PURE__ */ g.jsxs("select", { value: r ?? "", onChange: (f) => s(f.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: u ? "Not configured" : `Select ${i}` }),
    K2(n, i).map((f) => /* @__PURE__ */ g.jsx("option", { children: f }, f))
  ] });
}
function J2({
  areas: n,
  value: i,
  onChange: r
}) {
  const u = te.useRef(null), [s, f] = te.useState(() => !!customElements.get("ha-area-picker"));
  return te.useEffect(() => {
    s || customElements.whenDefined("ha-area-picker").then(() => f(!0));
  }, [s]), te.useEffect(() => {
    const d = u.current;
    if (!d) return;
    d.value = i, d.noAdd = !0;
    const m = (v) => r(v.detail.value || void 0);
    return d.addEventListener("value-changed", m), () => d.removeEventListener("value-changed", m);
  }, [s, r, i]), s ? /* @__PURE__ */ g.jsx("ha-area-picker", { ref: u, value: i ?? "", "no-add": !0 }) : /* @__PURE__ */ g.jsxs("select", { value: i ?? "", onChange: (d) => r(d.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: "Unmapped" }),
    n.map((d) => /* @__PURE__ */ g.jsxs("option", { value: d.area_id, children: [
      d.name,
      " (",
      d.area_id,
      ")"
    ] }, d.area_id)),
    i && !n.some((d) => d.area_id === i) && /* @__PURE__ */ g.jsx("option", { value: i, children: i })
  ] });
}
function W2({ hass: n, config: i, onChange: r }) {
  const u = $2(i), s = (m, v) => {
    const h = [...i.floors];
    h[m] = v, r({ ...i, floors: h });
  }, f = i.entities?.map_select ? n.states[i.entities.map_select]?.attributes.options ?? [] : [], d = Object.values(n.areas ?? {}).sort((m, v) => m.name.localeCompare(v.name));
  return /* @__PURE__ */ g.jsxs("div", { className: "editor", children: [
    /* @__PURE__ */ g.jsx("h2", { children: "Roborock Vacuum Map Card" }),
    /* @__PURE__ */ g.jsx("p", { children: "Configure the Roborock entities, calibrated maps, room mappings and job presets." }),
    u.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "editor-errors", role: "alert", children: u.map((m) => /* @__PURE__ */ g.jsx("div", { children: m }, m)) }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Card" }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Name",
        /* @__PURE__ */ g.jsx("input", { value: i.name ?? "", placeholder: "Use vacuum name", onChange: (m) => r({ ...i, name: m.target.value || void 0 }) })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Language",
        /* @__PURE__ */ g.jsxs("select", { value: i.language ?? "en", onChange: (m) => r({ ...i, language: m.target.value }), children: [
          /* @__PURE__ */ g.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ g.jsx("option", { value: "nl", children: "Nederlands" })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Vacuum",
        /* @__PURE__ */ g.jsx(ou, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && r({ ...i, entity: m }) })
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
        /* @__PURE__ */ g.jsx(ou, { hass: n, domain: v, optional: !0, value: i.entities?.[m], onChange: (_) => r({ ...i, entities: { ...i.entities, [m]: _ } }) })
      ] }, m)),
      /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
        /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: i.vacuum_mode_fallback === "set_clean_motor_mode", onChange: (m) => r({ ...i, vacuum_mode_fallback: m.target.checked ? "set_clean_motor_mode" : void 0 }) }),
        " Use atomic Vacuum-mode fallback (Home Assistant 2026.7 and older)"
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
        /* @__PURE__ */ g.jsx("h3", { children: "Floors" }),
        /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => r({ ...i, floors: [...i.floors, { id: `floor_${i.floors.length + 1}`, name: `Floor ${i.floors.length + 1}`, map_entity: "", rooms: [] }] }), children: [
          /* @__PURE__ */ g.jsx(Hp, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => r({ ...i, floors: uu(i.floors, v, v - 1) }), children: /* @__PURE__ */ g.jsx(Up, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === i.floors.length - 1, onClick: () => r({ ...i, floors: uu(i.floors, v, v + 1) }), children: /* @__PURE__ */ g.jsx(Rp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => r({ ...i, floors: i.floors.filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(mu, {}) })
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
            /* @__PURE__ */ g.jsx(ou, { hass: n, domain: "image", value: m.map_entity, onChange: (h) => {
              if (!h) return;
              const _ = fv(n.states[h]), S = new Map(m.rooms.map((k) => [k.segment_id, k])), x = _.map((k) => ({
                ...S.get(k.segment_id),
                segment_id: k.segment_id,
                name: S.get(k.segment_id)?.name ?? k.source_name,
                include_in_floor_clean: S.get(k.segment_id)?.include_in_floor_clean ?? !0
              }));
              s(v, { ...m, map_entity: h, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Selector option",
            /* @__PURE__ */ g.jsxs("select", { value: m.map_select_option ?? "", onChange: (h) => s(v, { ...m, map_select_option: h.target.value || void 0 }), children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "Not configured" }),
              f.map((h) => /* @__PURE__ */ g.jsx("option", { children: h }, h))
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Vac followed by Mop routine",
            /* @__PURE__ */ g.jsx(ou, { hass: n, domain: "button", optional: !0, value: m.vacuum_then_mop_routine, onChange: (h) => s(v, { ...m, vacuum_then_mop_routine: h }) })
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
            /* @__PURE__ */ g.jsx("input", { value: h.name, onChange: (S) => {
              const x = [...m.rooms];
              x[_] = { ...h, name: S.target.value }, s(v, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Area",
            /* @__PURE__ */ g.jsx(J2, { areas: d, value: h.area_id, onChange: (S) => {
              const x = [...m.rooms];
              x[_] = { ...h, area_id: S }, s(v, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Icon",
            /* @__PURE__ */ g.jsx("input", { value: h.icon ?? "", placeholder: "mdi:floor-plan", onChange: (S) => {
              const x = [...m.rooms];
              x[_] = { ...h, icon: S.target.value || void 0 }, s(v, { ...m, rooms: x });
            } })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { className: "checkbox", children: [
            /* @__PURE__ */ g.jsx("input", { type: "checkbox", checked: h.include_in_floor_clean !== !1, onChange: (S) => {
              const x = [...m.rooms];
              x[_] = { ...h, include_in_floor_clean: S.target.checked }, s(v, { ...m, rooms: x });
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
          r({ ...i, presets: [...i.presets ?? [], m] });
        }, children: [
          /* @__PURE__ */ g.jsx(Hp, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => r({ ...i, presets: uu(i.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ g.jsx(Up, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (i.presets?.length ?? 0) - 1, onClick: () => r({ ...i, presets: uu(i.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ g.jsx(Rp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => r({ ...i, presets: (i.presets ?? []).filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(mu, {}) })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "editor-grid", children: [
          ["id", "name", "icon", "fan_speed", "mop_mode", "mop_intensity"].map((h) => /* @__PURE__ */ g.jsxs("label", { children: [
            h.replaceAll("_", " "),
            /* @__PURE__ */ g.jsx("input", { value: m[h] ?? "", onChange: (_) => {
              const S = [...i.presets ?? []];
              S[v] = { ...m, [h]: _.target.value || void 0 }, r({ ...i, presets: S });
            } })
          ] }, h)),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Strategy",
            /* @__PURE__ */ g.jsxs("select", { value: m.strategy, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, strategy: h.target.value }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "custom", children: "Custom" }),
              /* @__PURE__ */ g.jsx("option", { value: "smartplan", children: "SmartPlan" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning type",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_type ?? "vacuum_and_mop", onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, cleaning_type: h.target.value }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "vacuum", children: "Vacuum only" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_and_mop", children: "Vacuum and mop" }),
              /* @__PURE__ */ g.jsx("option", { value: "vacuum_then_mop", children: "Vacuum followed by mop" })
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("label", { children: [
            "Cleaning count",
            /* @__PURE__ */ g.jsxs("select", { value: m.cleaning_count ?? 1, onChange: (h) => {
              const _ = [...i.presets ?? []];
              _[v] = { ...m, cleaning_count: Number(h.target.value) }, r({ ...i, presets: _ });
            }, children: [
              /* @__PURE__ */ g.jsx("option", { value: "1", children: "1" }),
              /* @__PURE__ */ g.jsx("option", { value: "2", children: "2" })
            ] })
          ] })
        ] })
      ] }, `${m.id}-${v}`)),
      /* @__PURE__ */ g.jsxs("label", { children: [
        "Default preset",
        /* @__PURE__ */ g.jsxs("select", { value: i.default_preset ?? "vacuum_only", onChange: (m) => r({ ...i, default_preset: m.target.value }), children: [
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
const P2 = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class jl extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function F2(n) {
  return n.floors.find((i) => i.assisted_carry);
}
function I2(n, i) {
  const r = i.entities?.assisted_carry_stage, u = r ? n.states[r]?.state : void 0;
  return u && P2.has(u) ? u : "idle";
}
function ew(n, i) {
  const r = i.cleaning_type === "vacuum_then_mop";
  if (i.strategy !== "smartplan" && !r && !i.fan_speed)
    throw new jl("prepare", "Suction is required");
  if (i.strategy !== "smartplan" && !r && i.cleaning_type !== "vacuum" && (!i.mop_mode || !i.mop_intensity))
    throw new jl("prepare", "Water flow and route are required");
  return {
    segment_ids: [...new Set(n)],
    strategy: i.strategy,
    cleaning_type: i.cleaning_type,
    fan_speed: i.strategy === "smartplan" || r ? void 0 : i.fan_speed,
    mop_mode: i.strategy === "smartplan" || i.cleaning_type === "vacuum" || r ? void 0 : i.mop_mode,
    mop_intensity: i.strategy === "smartplan" || i.cleaning_type === "vacuum" || r ? void 0 : i.mop_intensity,
    cleaning_count: i.strategy === "smartplan" || i.cleaning_type === "vacuum_then_mop" ? 1 : i.cleaning_count
  };
}
function tw(n) {
  return JSON.stringify({
    s: n.segment_ids,
    g: n.strategy,
    t: n.cleaning_type,
    f: n.fan_speed,
    m: n.mop_mode,
    w: n.mop_intensity,
    c: n.cleaning_count
  });
}
function nw(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((v) => Number.isInteger(v)) || ![1, 2].includes(Number(i.c))) return;
      const r = i.g === void 0 ? "custom" : i.g, u = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(r)) || !["vacuum", "vacuum_and_mop", "vacuum_then_mop"].includes(String(u))) return;
      const s = typeof i.f == "string" ? i.f : void 0, f = typeof i.m == "string" ? i.m : void 0, d = typeof i.w == "string" ? i.w : void 0, m = u === "vacuum_then_mop";
      return r === "custom" && !m && !s || r === "custom" && !m && u !== "vacuum" && (!f || !d) ? void 0 : {
        segment_ids: i.s,
        strategy: r,
        cleaning_type: u,
        fan_speed: s,
        mop_mode: f,
        mop_intensity: d,
        cleaning_count: Number(i.c)
      };
    } catch {
      return;
    }
}
function bi(n, i, r) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new jl(r, `${i ?? "entity"} is unavailable`);
  return i;
}
async function yi(n, i, r) {
  const u = bi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: r }, { entity_id: u });
}
async function aw(n, i, r) {
  const u = bi(n, i.entities?.assisted_carry_job, "save_job"), s = bi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: tw(r) }, { entity_id: u }), await yi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function iw(n, i, r, u) {
  const s = bi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), f = r.rooms.filter((m) => u.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (f.length === 0) throw new jl("start_upstairs", "No mapped rooms were saved");
  const d = {
    cleaning_area_id: f,
    strategy: u.strategy,
    cleaning_type: u.cleaning_type,
    cleaning_count: u.cleaning_count
  };
  u.fan_speed && (d.fan_speed = u.fan_speed), u.mop_mode && (d.mop_mode = u.mop_mode), u.mop_intensity && (d.mop_intensity = u.mop_intensity), await n.callService("script", "turn_on", {
    variables: d
  }, { entity_id: s });
}
async function lw(n, i) {
  const r = bi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: r });
}
async function mh(n, i) {
  await yi(n, i, "idle");
  const r = bi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: r });
}
const su = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function cu(n, i) {
  if (!i) return [];
  const r = n.states[i];
  return !r || r.state === "unavailable" ? [] : Array.isArray(r.attributes.options) ? r.attributes.options.map(String) : [];
}
function rw(n, i) {
  const r = n.states[i.entity], u = Number(r?.attributes.supported_features ?? 0), s = Array.isArray(r?.attributes.fan_speed_list) ? r.attributes.fan_speed_list.map(String) : [], f = cu(n, i.entities?.map_select), d = cu(n, i.entities?.cleaning_mode), m = cu(n, i.entities?.mop_mode), v = cu(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: s,
    mapOptions: f,
    cleaningModes: d,
    mopModes: m,
    mopIntensities: v,
    canStart: !!(u & su.start),
    canPause: !!(u & su.pause),
    canStop: !!(u & su.stop),
    canDock: !!(u & su.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function uw(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function ow(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const sw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, cw = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, fw = {
  normal: 0,
  warm: 1,
  hot: 2
}, dw = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, mw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class kn extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function It(n, i, r, u) {
  const s = { command: r };
  u !== void 0 && (s.params = u), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function fu(n, i, r) {
  const u = n[i];
  if (u === void 0) throw new kn(r, `Unsupported value: ${i}`);
  return u;
}
function pw(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new kn("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function hw(n, i, r, u) {
  const s = i.entities?.[sw[r]];
  if (!s) return;
  const f = s.split(".")[0];
  if (typeof u == "boolean") {
    if (!["input_boolean", "switch"].includes(f))
      throw new kn(r, `${s} is not a boolean helper`);
    await n.callService(f, u ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(f))
    throw new kn(r, `${s} is not a select helper`);
  await n.callService(f, "select_option", { option: u }, { entity_id: s });
}
async function vw(n, i, r, u) {
  try {
    switch (r) {
      case "mop_wash_frequency":
        await It(n, i, "set_smart_wash_params", pw(String(u)));
        break;
      case "wash_mode":
        await It(n, i, "set_wash_towel_mode", {
          wash_mode: fu(cw, String(u), r)
        });
        break;
      case "wash_temperature":
        await It(n, i, "set_wash_water_temperature", {
          values: fu(fw, String(u), r)
        });
        break;
      case "auto_empty":
        await It(n, i, "set_dust_collection_switch_status", { status: u ? 1 : 0 });
        break;
      case "empty_mode":
        await It(n, i, "set_dust_collection_mode", {
          mode: fu(dw, String(u), r)
        });
        break;
      case "auto_dry":
        await It(n, i, "app_set_dryer_setting", { status: u ? 1 : 0 });
        break;
      case "dry_duration":
        await It(n, i, "app_set_dryer_setting", {
          on: { dry_time: fu(mw, String(u), r) }
        });
        break;
    }
    await hw(n, i, r, u);
  } catch (s) {
    throw s instanceof kn ? s : new kn(r, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function Is(n, i, r, u = !1) {
  const s = `${u ? "stop" : "start"}_${r}`;
  try {
    r === "empty" && await It(n, i, u ? "app_stop_collect_dust" : "app_start_collect_dust"), r === "wash" && await It(n, i, u ? "app_stop_wash" : "app_start_wash"), r === "dry" && await It(n, i, "app_set_dryer_status", { status: u ? 0 : 1 }), r === "drain" && await It(n, i, "app_empty_rinse_tank_water");
  } catch (f) {
    throw new kn(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
const yw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class Xe extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function gw(n, i, r, u, s, f) {
  const d = Date.now();
  for (; Date.now() - d < u; ) {
    if (n().states[i]?.state === r) return;
    await f(s);
  }
  throw new Xe("wait_for_state", `${i} did not become “${r}” within ${u / 1e3}s`);
}
function El(n, i, r, u) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new Xe(u, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(r)) throw new Xe(u, `${i} does not support “${r}”`);
}
async function Sl(n, i, r, u, s, f, d, m = !0) {
  const v = n();
  if (El(v, i, r, u), v.states[i]?.state !== r)
    try {
      if (await v.callService("select", "select_option", { option: r }, { entity_id: i }), !m) return;
      await gw(n, i, r, s, f, d);
    } catch (h) {
      throw h instanceof Xe ? new Xe(u, h.message, { cause: h }) : new Xe(u, h instanceof Error ? h.message : String(h), { cause: h });
    }
}
async function _w(n, i) {
  const r = {
    fan_power: 102,
    water_box_mode: 200
  };
  i.entities?.mop_mode && (r.mop_mode = 300);
  try {
    await n.callService(
      "vacuum",
      "send_command",
      { command: "set_clean_motor_mode", params: [r] },
      { entity_id: i.entity }
    );
  } catch (u) {
    throw new Xe("set_cleaning_mode", u instanceof Error ? u.message : String(u), { cause: u });
  }
}
async function dv(n, i, r, u, s) {
  try {
    await n.callService("vacuum", "send_command", { command: r, params: u }, { entity_id: i.entity });
  } catch (f) {
    throw new Xe(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
async function ph(n, i, r) {
  await dv(n, i, "set_clean_repeat_times", { repeat: r }, "set_cleaning_count");
}
async function bw(n, i) {
  await dv(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function hh(n, i, r) {
  const u = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(u) ? u.map(String) : []).includes(r))
    throw new Xe("set_fan_speed", `${i} does not support “${r}”`);
}
async function Sw({
  getHass: n,
  config: i,
  floor: r,
  rooms: u,
  draft: s,
  timeoutMs: f = 1e4,
  pollMs: d = 150,
  sleep: m = (v) => new Promise((h) => setTimeout(h, v))
}) {
  const v = n(), h = v.states[i.entity];
  if (!h || h.state === "unavailable") throw new Xe("preflight", `${i.entity} is unavailable`);
  if (uw(h.state)) throw new Xe("preflight", `Vacuum is ${h.state}`);
  const _ = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (_ && !["none", "unknown", "unavailable", ""].includes(_.state))
    throw new Xe("preflight", `Vacuum error: ${_.state}`);
  const S = [...new Set(u.map((X) => X.area_id).filter((X) => !!X))];
  if (S.length === 0) throw new Xe("preflight", "Select at least one room mapped to a Home Assistant area");
  const x = i.entities?.map_select, k = async () => {
    if (!(i.floors.length <= 1)) {
      if (!x || !r.map_select_option) throw new Xe("select_floor", "This floor has no map selector mapping");
      if (await Sl(n, x, r.map_select_option, "select_floor", f, d, m), d > 0 && await m(d), n().states[x]?.state !== r.map_select_option)
        throw new Xe("select_floor", `${x} did not stay on “${r.map_select_option}”`);
    }
  };
  if (await k(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const X = r.vacuum_then_mop_routine;
    if (X) {
      const H = n().states[X];
      if (!H || H.state === "unavailable")
        throw new Xe("start_vacuum_then_mop", `${X} is unavailable`);
      try {
        await n().callService("button", "press", {}, { entity_id: X });
      } catch ($) {
        throw new Xe("start_vacuum_then_mop", $ instanceof Error ? $.message : String($), { cause: $ });
      }
      return r.rooms.filter(($) => $.include_in_floor_clean !== !1).map(($) => $.area_id).filter(($) => !!$);
    }
    const L = i.entities?.vacuum_then_mop_script, B = L ? n().states[L] : void 0;
    if (!L || !B || B.state === "unavailable")
      throw new Xe("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const V = i.entities?.cleaning_mode;
    if (!V)
      throw new Xe("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (El(n(), V, "vacuum", "set_cleaning_mode"), El(n(), V, "mop", "set_cleaning_mode"), s.mop_mode) {
      const H = i.entities?.mop_mode;
      if (!H) throw new Xe("set_mop_mode", "The selected profile requires a mop-mode entity");
      El(n(), H, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const H = i.entities?.mop_intensity;
      if (!H) throw new Xe("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      El(n(), H, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && hh(n(), i.entity, s.fan_speed), await k();
    try {
      await n().callService(
        "script",
        "turn_on",
        {
          variables: {
            cleaning_area_id: S,
            fan_speed: s.fan_speed,
            mop_mode: s.mop_mode,
            mop_intensity: s.mop_intensity
          }
        },
        { entity_id: L }
      );
    } catch (H) {
      throw new Xe("start_vacuum_then_mop", H instanceof Error ? H.message : String(H), { cause: H });
    }
    return S;
  }
  if (s.strategy === "smartplan")
    await bw(n(), i), await ph(n(), i, 1);
  else {
    const X = i.entities?.cleaning_mode, L = s.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop", B = X && n().states[X]?.attributes.options;
    if (X && Array.isArray(B) && B.map(String).includes(L))
      await Sl(
        n,
        X,
        L,
        "set_cleaning_mode",
        f,
        d,
        m,
        L !== "vac_and_mop"
      );
    else if (s.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await _w(n(), i);
    else if (s.cleaning_type === "vacuum")
      throw new Xe("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const V = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!V) throw new Xe("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[V]?.state === "smart_mode" && yw.has(s.mop_mode) && await Sl(n, V, "custom", "leave_smartplan", f, d, m), await Sl(n, V, s.mop_mode, "set_mop_mode", f, d, m);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const H = i.entities?.mop_intensity;
      if (!H) throw new Xe("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await Sl(n, H, s.mop_intensity, "set_mop_intensity", f, d, m);
    }
    if (s.fan_speed) {
      const H = n();
      hh(H, i.entity, s.fan_speed);
      try {
        await H.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch ($) {
        throw new Xe("set_fan_speed", $ instanceof Error ? $.message : String($), { cause: $ });
      }
    }
    await ph(n(), i, s.cleaning_count);
  }
  await k();
  const j = new Set(u.map((X) => X.segment_id)), q = u.length === r.rooms.length && r.rooms.every((X) => j.has(X.segment_id));
  try {
    q ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: S },
      { entity_id: i.entity }
    );
  } catch (X) {
    throw new Xe(q ? "start_floor" : "clean_area", X instanceof Error ? X.message : String(X), { cause: X });
  }
  return S;
}
const ww = {
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
  vacuumThenMop: "Vac followed by Mop",
  smartPlanDescription: "Roborock AI chooses suction, water flow, and route for every selected room.",
  vacuumDescription: "Vacuum only. The mop stays raised.",
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
  drainWaterTank: "Drain onboard water tank",
  drainWarning: "This runs the dock pump and drains the robot water tank.",
  confirmEmpty: "Start dock emptying? This will make noise.",
  confirmWash: "Start washing the mop? This will run the dock pump.",
  confirmDry: "Start drying the mop? This will run the dock fan.",
  confirmDrain: "Drain the onboard water tank now? This will run the dock pump.",
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
  daysAgo: "days ago"
}, zw = {
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
  vacuumThenMop: "Stofzuigen, daarna dweilen",
  smartPlanDescription: "Roborock AI kiest per geselecteerde kamer de zuigkracht, waterhoeveelheid en route.",
  vacuumDescription: "Alleen stofzuigen. De dweil blijft opgetild.",
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
  drainWaterTank: "Watertank in robot legen",
  drainWarning: "Dit activeert de dockpomp en leegt de watertank van de robot.",
  confirmEmpty: "Dock legen starten? Dit maakt geluid.",
  confirmWash: "Dweil wassen starten? Dit activeert de dockpomp.",
  confirmDry: "Dweil drogen starten? Dit activeert de dockventilator.",
  confirmDrain: "Watertank in de robot nu legen? Dit activeert de dockpomp.",
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
  daysAgo: "dagen geleden"
};
function G(n, i) {
  return (n === "nl" ? zw : ww)[i];
}
const xw = [
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
  }
];
function Tw(n, i, r, u) {
  const s = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (r.cleaning_type === "vacuum" && !s)
    return "cleaning mode “vacuum”";
  if (r.cleaning_type === "vacuum_then_mop") {
    if (u?.vacuum_then_mop_routine) return;
    if (!n.entities?.vacuum_then_mop_script) return "Vac followed by Mop script";
    if (!i.cleaningModes.includes("vacuum") || !i.cleaningModes.includes("mop"))
      return "cleaning modes “vacuum” and “mop”";
  }
  if (r.fan_speed && !i.fanSpeeds.includes(r.fan_speed)) return `fan speed “${r.fan_speed}”`;
  if (r.cleaning_type !== "vacuum" && r.mop_mode && !i.mopModes.includes(r.mop_mode))
    return `mop mode “${r.mop_mode}”`;
  if (r.cleaning_type !== "vacuum" && r.mop_intensity && !i.mopIntensities.includes(r.mop_intensity))
    return `mop intensity “${r.mop_intensity}”`;
}
function Ew(n, i, r) {
  return [...xw, ...n.presets ?? []].map((u) => {
    const s = Tw(n, i, u, r);
    return {
      preset: u,
      available: !s,
      reason: s ? `Unsupported ${s}` : void 0
    };
  });
}
function wu(n) {
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
const Aw = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, kw = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Cw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function Ta(n, i, r) {
  const u = i.entities?.[Cw[r]], s = u ? n.states[u]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? kw[r] : r === "auto_empty" || r === "auto_dry" ? s === "on" : s;
}
function Al(n, i) {
  const r = {
    smart: ["Smart", "Slim"],
    light: ["Light", "Licht"],
    balanced: ["Balanced", "Gebalanceerd"],
    deep: ["Deep", "Diep"],
    max: ["Max", "Max"],
    normal: ["Normal", "Normaal"],
    warm: ["Warm", "Warm"],
    hot: ["High temperature", "Hoge temperatuur"],
    "2h": ["2 hours", "2 uur"],
    "3h": ["3 hours · Standard", "3 uur · Standaard"],
    "4h": ["4 hours", "4 uur"]
  };
  return i.endsWith("_min") ? `${i.replace("_min", "")} min` : r[i]?.[n === "nl" ? 1 : 0] ?? i;
}
function wl({
  label: n,
  setting: i,
  value: r,
  language: u,
  disabled: s,
  onChange: f
}) {
  return /* @__PURE__ */ g.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx("select", { "aria-label": n, value: r, disabled: s, onChange: (d) => f(d.target.value), children: Aw[i].map((d) => /* @__PURE__ */ g.jsx("option", { value: d, children: Al(u, d) }, d)) })
  ] });
}
function ec({
  label: n,
  checked: i,
  disabled: r,
  onChange: u
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
        disabled: r,
        onClick: () => u(!i),
        children: /* @__PURE__ */ g.jsx("span", {})
      }
    )
  ] });
}
function Ow({
  hass: n,
  config: i,
  language: r,
  washing: u,
  emptying: s,
  drying: f,
  dryingRemaining: d,
  pending: m,
  onClose: v,
  onAction: h,
  onSetting: _,
  onChildLock: S
}) {
  const x = !!m, k = i.entities?.dock_child_lock, j = k ? n.states[k]?.state === "on" : !1, q = String(Ta(n, i, "mop_wash_frequency")), X = String(Ta(n, i, "wash_mode")), L = String(Ta(n, i, "wash_temperature")), B = !!Ta(n, i, "auto_empty"), V = String(Ta(n, i, "empty_mode")), H = !!Ta(n, i, "auto_dry"), $ = String(Ta(n, i, "dry_duration")), F = [
    { action: "empty", label: G(r, "empty"), active: s, icon: /* @__PURE__ */ g.jsx(mu, {}), detail: Al(r, V) },
    { action: "wash", label: G(r, "wash"), active: u, icon: /* @__PURE__ */ g.jsx(Bp, {}), detail: `${Al(r, X)} · ${Al(r, L)}` },
    { action: "dry", label: G(r, "dry"), active: f, icon: /* @__PURE__ */ g.jsx(qp, {}), detail: f ? d : Al(r, $) }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": G(r, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "dock-sheet-title", children: G(r, "dockStation") }),
          /* @__PURE__ */ g.jsx("p", { children: G(r, "dockOverview") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": G(r, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(hc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "dock-actions", children: F.map((U) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: U.active ? "active" : "",
            disabled: x,
            onClick: () => h(U.action, U.active),
            children: [
              /* @__PURE__ */ g.jsx("span", { className: "dock-action-icon", children: U.icon }),
              /* @__PURE__ */ g.jsx("strong", { children: U.active ? G(r, "stop") : U.label }),
              /* @__PURE__ */ g.jsx("small", { children: U.active ? G(r, "active") : U.detail })
            ]
          },
          U.action
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Bp, {}),
            G(r, "dockSettings")
          ] }),
          /* @__PURE__ */ g.jsx(wl, { label: G(r, "mopWashFrequency"), setting: "mop_wash_frequency", value: q, language: r, disabled: x, onChange: (U) => _("mop_wash_frequency", U) }),
          /* @__PURE__ */ g.jsx(wl, { label: G(r, "washingMode"), setting: "wash_mode", value: X, language: r, disabled: x, onChange: (U) => _("wash_mode", U) }),
          /* @__PURE__ */ g.jsx(wl, { label: G(r, "washTemperature"), setting: "wash_temperature", value: L, language: r, disabled: x, onChange: (U) => _("wash_temperature", U) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(mu, {}),
            G(r, "dustbin")
          ] }),
          /* @__PURE__ */ g.jsx(ec, { label: G(r, "autoEmpty"), checked: B, disabled: x, onChange: (U) => _("auto_empty", U) }),
          /* @__PURE__ */ g.jsx(wl, { label: G(r, "emptyMode"), setting: "empty_mode", value: V, language: r, disabled: x, onChange: (U) => _("empty_mode", U) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(qp, {}),
            G(r, "drying")
          ] }),
          /* @__PURE__ */ g.jsx(ec, { label: G(r, "autoDry"), checked: H, disabled: x, onChange: (U) => _("auto_dry", U) }),
          /* @__PURE__ */ g.jsx(wl, { label: G(r, "dryDuration"), setting: "dry_duration", value: $, language: r, disabled: x, onChange: (U) => _("dry_duration", U) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Oh, {}),
            G(r, "safetyMaintenance")
          ] }),
          k && /* @__PURE__ */ g.jsx(ec, { label: G(r, "childLock"), checked: j, disabled: x, onChange: S }),
          /* @__PURE__ */ g.jsxs("button", { type: "button", className: "drain-button", disabled: x, onClick: () => h("drain", !1), children: [
            /* @__PURE__ */ g.jsx(T_, {}),
            /* @__PURE__ */ g.jsxs("span", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: G(r, "drainWaterTank") }),
              /* @__PURE__ */ g.jsx("small", { children: G(r, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ g.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function fc({ icon: n, className: i }) {
  return n ? te.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const vh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only"], jw = ["quiet", "balanced", "turbo", "max", "max_plus"], Mw = ["quiet", "balanced", "turbo", "max"], Nw = ["fast", "standard", "deep"], Dw = ["slight", "low", "medium", "moderate", "high", "extreme"], Zw = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };
function mv(n) {
  return n.replaceAll("_", " ").replace(/\b\w/g, (i) => i.toUpperCase());
}
function tc({
  value: n,
  options: i,
  onChange: r,
  title: u
}) {
  return i.length === 0 ? null : /* @__PURE__ */ g.jsxs("div", { className: "field app-field", children: [
    /* @__PURE__ */ g.jsx("span", { children: u }),
    /* @__PURE__ */ g.jsx("div", { className: "option-strip", children: i.map((s) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        className: n === s ? "active" : "",
        onClick: () => r(s),
        children: mv(s)
      },
      s
    )) })
  ] });
}
function yh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : n.cleaning_type === "vacuum_then_mop";
}
function Rw({
  language: n,
  draft: i,
  capabilities: r,
  presets: u,
  selectedRoomNames: s,
  submitting: f,
  assistedCarry: d = !1,
  onDraftChange: m,
  onClose: v,
  onStart: h
}) {
  const _ = vh.map((B) => u.find(({ preset: V }) => V.id === B)).filter(
    (B) => !!B
  ), S = u.filter(({ preset: B }) => !vh.includes(B.id)), k = (i.cleaning_type === "vacuum" ? jw : Mw).filter((B) => r.fanSpeeds.includes(B)), j = Nw.filter((B) => r.mopModes.includes(B)), q = Dw.filter((B) => r.mopIntensities.includes(B)), X = Math.max(0, q.indexOf(i.mop_intensity ?? "medium")), L = i.strategy === "smartplan" ? G(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? G(n, "vacuumDescription") : i.cleaning_type === "vacuum_then_mop" ? G(n, "vacuumThenMopDescription") : G(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": G(n, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "job-sheet-title", children: d ? G(n, "assistedCarryTitle") : G(n, "configureTitle") }),
          /* @__PURE__ */ g.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": G(n, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(hc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": G(n, "cleaningType"), children: _.map(({ preset: B, available: V, reason: H }) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": yh(i, B.id),
            className: yh(i, B.id) ? "active" : "",
            disabled: !V || f,
            title: H,
            onClick: () => m(wu(B)),
            children: [
              /* @__PURE__ */ g.jsx(fc, { icon: B.icon }),
              /* @__PURE__ */ g.jsx("span", { children: B.id === "smartplan" ? "AI SmartPlan" : B.name })
            ]
          },
          B.id
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ g.jsx("p", { className: "mode-description", children: L }),
          i.strategy !== "smartplan" && i.cleaning_type !== "vacuum_then_mop" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx(
              tc,
              {
                title: G(n, "suction"),
                value: i.fan_speed,
                options: k,
                onChange: (B) => m({ ...i, preset_id: "custom_draft", fan_speed: B })
              }
            ),
            i.cleaning_type !== "vacuum" && q.length > 0 && /* @__PURE__ */ g.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ g.jsx("span", { children: G(n, "waterFlow") }),
              /* @__PURE__ */ g.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ g.jsx("strong", { children: mv(q[X]) }),
                /* @__PURE__ */ g.jsx("output", { children: Zw[q[X]] })
              ] }),
              /* @__PURE__ */ g.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: q.length - 1,
                  step: "1",
                  value: X,
                  "aria-label": G(n, "waterFlow"),
                  onChange: (B) => m({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: q[Number(B.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ g.jsx(
              tc,
              {
                title: G(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: ["1", "2"],
                onChange: (B) => m({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(B)
                })
              }
            ),
            /* @__PURE__ */ g.jsx(
              tc,
              {
                title: G(n, "mopRoute"),
                value: i.mop_mode,
                options: j,
                onChange: (B) => m({ ...i, preset_id: "custom_draft", mop_mode: B })
              }
            )
          ] })
        ] }),
        !d && S.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ g.jsx("span", { children: G(n, "savedProfiles") }),
          /* @__PURE__ */ g.jsx("div", { children: S.map(({ preset: B, available: V, reason: H }) => /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              disabled: !V || f,
              title: H,
              className: i.preset_id === B.id ? "active" : "",
              onClick: () => m(wu(B)),
              children: [
                /* @__PURE__ */ g.jsx(fc, { icon: B.icon }),
                " ",
                B.name
              ]
            },
            B.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("footer", { children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: v, children: G(n, "cancel") }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "primary", disabled: f, onClick: h, children: f ? d ? G(n, "preparingUpstairs") : G(n, "starting") : d ? G(n, "prepareUpstairs") : G(n, "start") })
      ] })
    ] })
  ] });
}
var Aa = function(n, i) {
  return Number(n.toFixed(i));
}, Uw = function(n, i) {
  return i;
}, Ce = function(n, i, r) {
  r && typeof r == "function" && r(n, i);
}, Yw = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, Xw = function(n) {
  return n;
}, Hw = function(n) {
  return n * n;
}, Bw = function(n) {
  return n * (2 - n);
}, qw = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, $w = function(n) {
  return n * n * n;
}, Lw = function(n) {
  return --n * n * n + 1;
}, Vw = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, Gw = function(n) {
  return n * n * n * n;
}, Qw = function(n) {
  return 1 - --n * n * n * n;
}, Kw = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, Jw = function(n) {
  return n * n * n * n * n;
}, Ww = function(n) {
  return 1 + --n * n * n * n * n;
}, Pw = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, pv = {
  easeOut: Yw,
  linear: Xw,
  easeInQuad: Hw,
  easeOutQuad: Bw,
  easeInOutQuad: qw,
  easeInCubic: $w,
  easeOutCubic: Lw,
  easeInOutCubic: Vw,
  easeInQuart: Gw,
  easeOutQuart: Qw,
  easeInOutQuart: Kw,
  easeInQuint: Jw,
  easeOutQuint: Ww,
  easeInOutQuint: Pw
}, hv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, en = function(n) {
  n.mounted && (hv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function vv(n, i, r, u) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    en(n), n.animation = function() {
      if (!n.mounted)
        return hv(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - s, m = d / r, v = pv[i], h = v(m);
      d >= r ? (u(f), n.animation = null) : n.animation && (u(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function Fw(n) {
  var i = n.scale, r = n.positionX, u = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(r) || Number.isNaN(u));
}
function ia(n, i, r, u) {
  var s = Fw(i);
  if (!(!n.mounted || !s)) {
    var f = n.setState, d = n.state, m = d.scale, v = d.positionX, h = d.positionY, _ = i.scale - m, S = i.positionX - v, x = i.positionY - h;
    r === 0 ? f(i.scale, i.positionX, i.positionY) : vv(n, u, r, function(k) {
      k !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var j = m + _ * k, q = v + S * k, X = h + x * k;
      f(j, q, X);
    });
  }
}
function Iw(n, i, r) {
  var u = n.offsetWidth, s = n.offsetHeight, f = i.offsetWidth, d = i.offsetHeight, m = f * r, v = d * r, h = u - m, _ = s - v;
  return {
    wrapperWidth: u,
    wrapperHeight: s,
    newContentWidth: m,
    newDiffWidth: h,
    newContentHeight: v,
    newDiffHeight: _
  };
}
var ez = function(n, i, r, u, s, f, d) {
  var m = n > i ? r * (d ? 0.5 : 1) : 0, v = u > s ? f * (d ? 0.5 : 1) : 0, h = n - i - m, _ = m, S = u - s - v, x = v;
  return {
    minPositionX: h,
    maxPositionX: _,
    minPositionY: S,
    maxPositionY: x,
    scaleWidthFactor: m,
    scaleHeightFactor: v
  };
}, xc = function(n, i) {
  var r = n.wrapperComponent, u = n.contentComponent, s = n.setup, f = s.centerZoomedOut, d = s.disablePadding;
  if (!r || !u)
    throw new Error("Components are not mounted");
  var m = Iw(r, u, i), v = m.wrapperWidth, h = m.wrapperHeight, _ = m.newContentWidth, S = m.newContentHeight, x = m.newDiffWidth, k = m.newDiffHeight, j = ez(v, _, x, h, S, k, !!f), q = v >= _ && h >= S;
  d && q && !f && (j.minPositionX = 0, j.maxPositionX = 0, j.minPositionY = 0, j.maxPositionY = 0);
  var X = n.setup, L = X.minPositionX, B = X.maxPositionX, V = X.minPositionY, H = X.maxPositionY;
  return L != null && (j.minPositionX = v * (1 - i) + L * i), B != null && (j.maxPositionX = B * i), V != null && (j.minPositionY = h * (1 - i) + V * i), H != null && (j.maxPositionY = H * i), j;
}, Ml = function(n, i, r, u) {
  return u ? n < i ? Aa(i, 2) : n > r ? Aa(r, 2) : Aa(n, 2) : Aa(n, 2);
}, Si = function(n, i) {
  var r = xc(n, i);
  return n.bounds = r, r;
};
function Zl(n, i, r, u, s, f, d) {
  var m = r.minPositionX, v = r.minPositionY, h = r.maxPositionX, _ = r.maxPositionY, S = 0, x = 0;
  d && (S = s, x = f);
  var k = Ml(n, m - S, h + S, u), j = Ml(i, v - x, _ + x, u);
  return { x: k, y: j };
}
function ku(n, i, r, u, s, f) {
  var d = n.state, m = d.scale, v = d.positionX, h = d.positionY, _ = u - m;
  if (typeof i != "number" || typeof r != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var S = v - i * _, x = h - r * _, k = Zl(S, x, s, f, 0, 0, null);
  return k;
}
var gh = 1e-7;
function Rl(n, i, r, u, s) {
  var f = s ? u : 0, d = Math.max(i - f, gh), m = r + f;
  return !Number.isNaN(r) && n >= m ? m : !Number.isNaN(i) && n <= d ? d : Math.max(n, gh);
}
var _h = function(n, i) {
  var r = n.setup.panning.excluded, u = n.isInitialized, s = n.wrapperComponent, f = i.target, d = "shadowRoot" in f && "composedPath" in i, m = d ? i.composedPath().some(function(_) {
    return _ instanceof Element ? s?.contains(_) : !1;
  }) : s?.contains(f), v = u && f && m;
  if (!v)
    return !1;
  var h = Ul(f, r);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, bh = function(n) {
  var i = n.isInitialized, r = n.isPanning, u = n.setup, s = u.panning.disabled, f = i && r && !s;
  return !!f;
}, tz = function(n, i) {
  var r = n.state, u = r.positionX, s = r.positionY;
  n.isPanning = !0;
  var f = i.clientX, d = i.clientY;
  n.startCoords = { x: f - u, y: d - s };
}, nz = function(n, i) {
  var r = i.touches, u = n.state, s = u.positionX, f = u.positionY;
  n.isPanning = !0;
  var d = r.length === 1;
  if (d) {
    var m = r[0].clientX, v = r[0].clientY;
    n.startCoords = { x: m - s, y: v - f };
  }
};
function az(n) {
  var i = n.state, r = i.positionX, u = i.positionY, s = i.scale, f = n.setup, d = f.disabled, m = f.limitToBounds, v = f.centerZoomedOut, h = n.wrapperComponent;
  if (!(d || !h || !n.bounds)) {
    var _ = n.bounds, S = _.maxPositionX, x = _.minPositionX, k = _.maxPositionY, j = _.minPositionY, q = r > S || r < x, X = u > k || u < j, L = r > S ? h.offsetWidth : n.setup.minPositionX || 0, B = u > k ? h.offsetHeight : n.setup.minPositionY || 0, V = ku(n, L, B, s, n.bounds, m || v), H = V.x, $ = V.y;
    return {
      scale: s,
      positionX: q ? H : r,
      positionY: X ? $ : u
    };
  }
}
function yv(n, i, r, u, s) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, m = n.bounds, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY;
  if (!(d === null || m === null || i === _ && r === S)) {
    var x = Zl(i, r, m, f, u, s, d), k = x.x, j = x.y;
    n.setState(h, k, j);
  }
}
var iz = function(n, i, r) {
  var u = n.startCoords, s = n.state, f = n.setup.panning, d = f.lockAxisX, m = f.lockAxisY, v = s.positionX, h = s.positionY;
  if (!u)
    return { x: v, y: h };
  var _ = i - u.x, S = r - u.y, x = d ? v : _, k = m ? h : S;
  return { x, y: k };
}, ta = function(n, i, r) {
  var u = n.setup, s = n.state, f = u.minScale, d = u.disablePadding, m = u.centerZoomedOut, v = r ?? s.scale;
  return i > 0 && v >= f && !d && !m ? i : 0;
}, ea;
(function(n) {
  n.TRACK_PAD = "track_pad", n.MOUSE = "mouse", n.TOUCH = "touch";
})(ea || (ea = {}));
var lz = function(n) {
  var i = n.mounted, r = n.wrapperComponent, u = n.contentComponent, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = s.limitToBounds, v = n.state.scale, h = d.disabled;
  if (h || f || !i || !r || !u)
    return !1;
  if (!m)
    return !0;
  var _ = r.offsetWidth < u.offsetWidth * v || r.offsetHeight < u.offsetHeight * v;
  return _;
}, rz = function(n) {
  var i = n.mounted, r = n.velocity, u = n.bounds, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = d.disabled, v = !m && !f && i;
  return !(!v || !r || !u);
};
function uz(n, i) {
  var r = n.setup.velocityAnimation, u = r.animationTime, s = r.maxAnimationTime, f = r.inertia;
  return Math.min(u * Math.max(1, Math.abs(i / f)), s);
}
function Sh(n, i, r, u, s, f, d, m, v, h) {
  if (s) {
    if (i > d && r > d) {
      var _ = d + (n - d) * h;
      return _ > v ? v : _ < d ? d : _;
    }
    if (i < f && r < f) {
      var _ = f + (n - f) * h;
      return _ < m ? m : _ > f ? f : _;
    }
  }
  return u ? i : Ml(n, f, d, s);
}
function oz(n) {
  var i = 1, r = n.offsetWidth / window.innerWidth;
  return Number.isNaN(r) ? i : Math.min(i, r);
}
var nc = function(n, i, r) {
  var u = 0, s = n * r;
  return Number.isNaN(s) ? u : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function sz(n, i, r) {
  var u, s, f = lz(n);
  if (f) {
    var d = n.lastMousePosition, m = n.velocityTime, v = n.setup, h = n.wrapperComponent, _ = v.velocityAnimation, S = _.maxStrengthMouse, x = _.maxStrengthTouch, k = _.sensitivityTouch, j = _.sensitivityMouse, q = Date.now();
    if (d && m && h) {
      var X = oz(h), L = (u = {}, u[ea.TOUCH] = k, u[ea.MOUSE] = j, u)[r], B = (s = {}, s[ea.TOUCH] = x, s[ea.MOUSE] = S, s)[r], V = i.x - d.x, H = i.y - d.y, $ = nc(V / X, B, L), F = nc(H / X, B, L), U = q - m, ne = V * V + H * H, ue = nc(Math.sqrt(ne) / U, B, L);
      n.velocity = { velocityX: $, velocityY: F, total: ue };
    }
    n.lastMousePosition = i, n.velocityTime = q;
  }
}
function cz(n) {
  var i = n.velocity, r = n.bounds, u = n.setup, s = n.wrapperComponent, f = rz(n);
  if (!(!f || !i || !r || !s)) {
    var d = i.velocityX, m = i.velocityY, v = i.total, h = r.maxPositionX, _ = r.minPositionX, S = r.maxPositionY, x = r.minPositionY, k = u.limitToBounds, j = u.autoAlignment, q = u.zoomAnimation, X = u.panning, L = X.lockAxisY, B = X.lockAxisX, V = q.animationType, H = j.sizeX, $ = j.sizeY, F = j.velocityAlignmentTime, U = F, ne = uz(n, v), ue = Math.max(ne, U), Oe = ta(n, H), xe = ta(n, $), ve = Oe * s.offsetWidth / 100, Te = xe * s.offsetHeight / 100, Me = h + ve, Ve = _ - ve, M = S + Te, K = x - Te, I = n.state, ye = (/* @__PURE__ */ new Date()).getTime();
    vv(n, V, ue, function(ge) {
      var w = n.state, D = w.scale, J = w.positionX, W = w.positionY, re = (/* @__PURE__ */ new Date()).getTime() - ye, se = re / U, Se = pv[j.animationType], Je = 1 - Se(Math.min(1, se)), qe = 1 - ge, tn = J + d * qe, nn = W + m * qe, la = Sh(tn, I.positionX, J, B, k, _, h, Ve, Me, Je), ra = Sh(nn, I.positionY, W, L, k, x, S, K, M, Je);
      if (J !== tn || W !== nn) {
        n.setState(D, la, ra);
        var Ut = n.props.onPanning;
        Ut && Ut(ze(n), {});
      }
    });
  }
}
function wh(n, i) {
  var r = n.state, u = r.scale, s = r.positionX, f = r.positionY;
  n.panStartPosition = { x: s, y: f }, en(n), Si(n, u), window.TouchEvent !== void 0 && i instanceof TouchEvent ? nz(n, i) : tz(n, i);
}
function gv(n, i) {
  var r = n.state.scale, u = n.setup, s = u.minScale, f = u.autoAlignment, d = f.disabled, m = f.sizeX, v = f.sizeY, h = f.animationTime, _ = f.animationType, S = d || r < s || !m && !v;
  if (!S) {
    var x = az(n);
    x && ia(n, x, h, _);
  }
}
function zh(n, i, r, u) {
  var s = n.startCoords, f = n.setup, d = f.autoAlignment, m = d.sizeX, v = d.sizeY;
  if (s) {
    var h = iz(n, i, r), _ = h.x, S = h.y, x = ta(n, m), k = ta(n, v);
    sz(n, { x: _, y: S }, u), yv(n, _, S, x, k);
  }
}
function fz(n, i) {
  if (n.isPanning) {
    var r = n.velocity, u = n.wrapperComponent, s = n.contentComponent;
    n.isPanning = !1;
    var f = n.state, d = f.positionX, m = f.positionY, v = f.scale, h = n.panStartPosition;
    if (n.panStartPosition = null, h) {
      var _ = d - h.x, S = m - h.y;
      if (_ * _ + S * S <= 25)
        return;
    }
    n.isAnimating = !1, n.animation = null;
    var x = u?.offsetWidth || 0, k = u?.offsetHeight || 0, j = (s?.offsetWidth || 0) * v, q = (s?.offsetHeight || 0) * v, X = !n.setup.limitToBounds || x < j || k < q, L = !i && r && r.total > 0.1 && X;
    L ? cz(n) : gv(n);
  }
}
function Tc(n, i, r, u) {
  var s = n.setup, f = s.minScale, d = s.maxScale, m = s.limitToBounds, v = Rl(Aa(i, 2), f, d, 0, !1), h = Si(n, v), _ = ku(n, r, u, v, h, m), S = _.x, x = _.y;
  return { scale: v, positionX: S, positionY: x };
}
function Ec(n, i, r) {
  var u = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.minScale, m = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, _ = h.disabled, S = h.animationTime, x = h.animationType, k = u >= d && u <= m, j = _ || k;
  if ((u >= 1 || v) && gv(n), !(j || !s || !n.mounted)) {
    var q = i || s.offsetWidth / 2, X = r || s.offsetHeight / 2, L = u < d ? d : m, B = Tc(n, L, q, X);
    B && ia(n, B, S, x);
  }
}
var Kt = function() {
  return Kt = Object.assign || function(i) {
    for (var r, u = 1, s = arguments.length; u < s; u++) {
      r = arguments[u];
      for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (i[f] = r[f]);
    }
    return i;
  }, Kt.apply(this, arguments);
};
function xh(n, i, r) {
  for (var u = 0, s = i.length, f; u < s; u++)
    (f || !(u in i)) && (f || (f = Array.prototype.slice.call(i, 0, u)), f[u] = i[u]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var ac = {
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
}, dc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, _v = function(n) {
  var i, r, u, s, f, d, m, v, h, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : Ea.minScale, 1e-7), S = (r = n.maxScale) !== null && r !== void 0 ? r : Ea.maxScale, x = (u = n.initialScale) !== null && u !== void 0 ? u : ac.scale, k = Math.min(Math.max(x, _), S), j = Ml((s = n.initialPositionX) !== null && s !== void 0 ? s : ac.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), q = Ml((m = n.initialPositionY) !== null && m !== void 0 ? m : ac.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: k,
    scale: k,
    positionX: j,
    positionY: q
  };
}, Th = function(n) {
  var i = Kt({}, Ea);
  return Object.keys(n).forEach(function(r) {
    var u = r, s = typeof n[u] < "u", f = typeof Ea[u] < "u";
    if (f && s) {
      var d = Object.prototype.toString.call(Ea[u]), m = d === "[object Object]", v = d === "[object Array]";
      m ? i[u] = Kt(Kt({}, Ea[u]), n[u]) : v ? i[u] = xh(xh([], Ea[u], !0), n[u]) : i[u] = n[u];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, bv = function(n, i, r) {
  var u = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.maxScale, m = f.minScale, v = f.zoomAnimation, h = f.smooth, _ = v.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var S = h ? u * Math.exp(i * r) : u + i * r, x = Rl(Aa(S, 3), m, d, _, !1);
  return x;
};
function Sv(n, i, r, u, s) {
  var f, d, m = n.wrapperComponent, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY, x = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var k = x.disabled ? 0 : u, j = m.offsetWidth, q = m.offsetHeight, X = (j / 2 - _) / h, L = (q / 2 - S) / h, B = bv(n, i, r), V = Tc(n, B, X, L);
  if (!V)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var H = n.props, $ = H.onZoomStart, F = H.onZoom, U = H.onZoomStop, ne = new MouseEvent("mousemove", { bubbles: !0 }), ue = ze(n);
  Ce(ue, ne, $), Ce(ue, ne, F), ia(n, V, k, s);
  var Oe = (d = (f = m.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  Oe && Oe.setTimeout(function() {
    n.mounted && Ce(ze(n), ne, U);
  }, k);
}
function wv(n, i, r, u) {
  var s, f, d = n.setup, m = n.wrapperComponent, v = n.contentComponent, h = d.limitToBounds, _ = d.centerOnInit, S = _v(n.props), x = n.state, k = x.scale, j = x.positionX, q = x.positionY;
  if (m) {
    var X = S.positionX, L = S.positionY;
    if (_ && v) {
      var B = Ac(S.scale, m, v);
      X = B.positionX, L = B.positionY;
    }
    var V = xc(n, S.scale), H = Zl(X, L, V, h, 0, 0, m), $ = {
      scale: S.scale,
      positionX: H.x,
      positionY: H.y
    };
    if (!(k === S.scale && j === S.positionX && q === S.positionY)) {
      u?.();
      var F = n.props, U = F.onZoomStart, ne = F.onZoom, ue = F.onZoomStop, Oe = new MouseEvent("mousemove", { bubbles: !0 }), xe = ze(n);
      Ce(xe, Oe, U), Ce(xe, Oe, ne), ia(n, $, i, r);
      var ve = (f = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      ve && ve.setTimeout(function() {
        n.mounted && Ce(ze(n), Oe, ue);
      }, i);
    }
  }
}
function dz(n, i, r, u) {
  var s = n.getBoundingClientRect(), f = i.getBoundingClientRect(), d = r.getBoundingClientRect(), m = f.x * u.scale, v = f.y * u.scale;
  return {
    x: (s.x - d.x + m) / u.scale,
    y: (s.y - d.y + v) / u.scale
  };
}
function mz(n, i, r, u, s) {
  u === void 0 && (u = 0), s === void 0 && (s = 0);
  var f = n.wrapperComponent, d = n.contentComponent, m = n.state, v = n.setup, h = v.limitToBounds, _ = v.minScale, S = v.maxScale;
  if (!f || !d)
    return m;
  var x = f.getBoundingClientRect(), k = i.getBoundingClientRect(), j = dz(i, f, d, m), q = j.x, X = j.y, L = k.width / m.scale, B = k.height / m.scale, V = f.offsetWidth / L, H = f.offsetHeight / B, $ = Rl(r || Math.min(V, H), _, S, 0, !1), F = (x.width - L * $) / 2, U = (x.height - B * $) / 2, ne = (x.left - q) * $ + F + u, ue = (x.top - X) * $ + U + s, Oe = xc(n, $), xe = Zl(ne, ue, Oe, h, 0, 0, f), ve = xe.x, Te = xe.y;
  return { positionX: ve, positionY: Te, scale: $ };
}
var pz = function(n) {
  return function(i, r, u) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), u === void 0 && (u = "easeOut"), Sv(n, 1, i, r, u);
  };
}, hz = function(n) {
  return function(i, r, u) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), u === void 0 && (u = "easeOut"), Sv(n, -1, i, r, u);
  };
}, vz = function(n) {
  return function(i, r, u, s, f) {
    s === void 0 && (s = 300), f === void 0 && (f = "easeOut");
    var d = n.state, m = d.positionX, v = d.positionY, h = d.scale, _ = n.wrapperComponent, S = n.contentComponent, x = n.setup.disabled;
    if (!(x || !_ || !S)) {
      var k = {
        positionX: Number.isNaN(i) ? m : i,
        positionY: Number.isNaN(r) ? v : r,
        scale: Number.isNaN(u) ? h : u
      };
      ia(n, k, s, f);
    }
  };
}, yz = function(n) {
  return function(i, r) {
    i === void 0 && (i = 200), r === void 0 && (r = "easeOut"), wv(n, i, r);
  };
}, gz = function(n) {
  return function(i, r, u) {
    r === void 0 && (r = 200), u === void 0 && (u = "easeOut");
    var s = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var m = Ac(i || s.scale, f, d);
      ia(n, m, r, u);
    }
  };
}, _z = function(n) {
  return function(i, r, u, s, f, d) {
    u === void 0 && (u = 600), s === void 0 && (s = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), en(n);
    var m = n.wrapperComponent, v = typeof i == "string" ? document.getElementById(i) : i;
    if (m && v && m.contains(v)) {
      var h = mz(n, v, r, f, d);
      ia(n, h, u, s);
    }
  };
}, zu = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: pz(n),
    zoomOut: hz(n),
    setTransform: vz(n),
    resetTransform: yz(n),
    centerView: gz(n),
    zoomToElement: _z(n)
  };
}, bz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, ze = function(n) {
  var i = {};
  return Object.assign(i, bz(n)), Object.assign(i, zu(n)), i;
}, ic = !1;
function lc() {
  try {
    var n = {
      get passive() {
        return ic = !0, !1;
      }
    };
    return n;
  } catch {
    return ic = !1, ic;
  }
}
var du = ".".concat(dc.wrapperClass), Ul = function(n, i) {
  return i.some(function(r) {
    return n.matches("".concat(du, " ").concat(r, ", ").concat(du, " .").concat(r, ", ").concat(du, " ").concat(r, " *, ").concat(du, " .").concat(r, " *"));
  });
}, Nl = function(n) {
  n && clearTimeout(n);
}, Sz = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, zv = function(n, i, r) {
  var u = Sz(r);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(u, ")");
}, Ac = function(n, i, r) {
  var u = r.offsetWidth * n, s = r.offsetHeight * n, f = (i.offsetWidth - u) / 2, d = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function wz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function zz(n) {
  return function(i) {
    n.forEach(function(r) {
      typeof r == "function" ? r(i) : r != null && (r.current = i);
    });
  };
}
var xv = function(n, i) {
  var r = n.setup.wheel, u = r.disabled, s = r.wheelDisabled, f = r.touchPadDisabled, d = r.excluded, m = n.isInitialized, v = n.isPanning, h = i.target, _ = m && !v && !u && h;
  if (!_ || s && !i.ctrlKey || f && i.ctrlKey)
    return !1;
  var S = Ul(h, d);
  if (S)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, xz = function(n, i) {
  var r = n.setup, u = r.disabled, s = r.trackPadPanning, f = s.activationKeys, d = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || u || s.disabled || i.ctrlKey)
    return !1;
  var m = xv(n, i);
  if (m)
    return !1;
  var v = i.target, h = Ul(v, d);
  if (h)
    return !1;
  var _ = n.isPressingKeys(f);
  return !!_;
}, Tz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function Ez(n, i) {
  var r = Tz(n), u = Uw(i, r);
  return u;
}
function Tv(n, i, r) {
  var u = i.getBoundingClientRect(), s = 0, f = 0;
  if ("clientX" in n)
    s = (n.clientX - u.left) / r, f = (n.clientY - u.top) / r;
  else {
    var d = n.touches[0];
    s = (d.clientX - u.left) / r, f = (d.clientY - u.top) / r;
  }
  return (Number.isNaN(s) || Number.isNaN(f)) && console.error("No mouse or touch offset found"), {
    x: s,
    y: f
  };
}
var Az = function(n, i, r, u, s) {
  var f = n.state.scale, d = n.wrapperComponent, m = n.setup, v = m.maxScale, h = m.minScale, _ = m.zoomAnimation, S = m.disablePadding, x = _.size, k = _.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var j = f + i * r, q = u ? !1 : !k, X = Rl(j, h, v, x, q && !S);
  return X;
}, Ev = function(n, i) {
  var r = n.previousWheelEvent, u = n.state.scale, s = n.setup, f = s.maxScale, d = s.minScale;
  return r ? u < f || u > d || Math.sign(r.deltaY) !== Math.sign(i.deltaY) || r.deltaY > 0 && r.deltaY < i.deltaY || r.deltaY < 0 && r.deltaY > i.deltaY || Math.sign(r.deltaY) !== Math.sign(i.deltaY) : !1;
}, kz = function(n, i) {
  var r = n.setup.pinch, u = r.disabled, s = r.excluded, f = n.isInitialized, d = i.target, m = f && !u && d;
  if (!m)
    return !1;
  var v = Ul(d, s);
  return !v;
}, Cz = function(n) {
  var i = n.setup.pinch.disabled, r = n.isInitialized, u = n.pinchStartDistance, s = r && !i && u !== null;
  return !!s;
}, Oz = function(n, i, r) {
  var u = r.getBoundingClientRect(), s = n.touches, f = s[0].clientX - u.left, d = s[0].clientY - u.top, m = s[1].clientX - u.left, v = s[1].clientY - u.top;
  return {
    x: (f + m) / 2 / i,
    y: (d + v) / 2 / i
  };
}, Av = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, jz = 5, Mz = function(n, i) {
  var r = n.pinchStartScale, u = n.pinchStartDistance, s = n.setup, f = s.maxScale, d = s.minScale, m = s.zoomAnimation, v = s.disablePadding, h = s.pinch, _ = m.size, S = m.disabled, x = h.step;
  if (!r || u === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var k = i / u, j = k * r, q = (j - r) * (x / jz), X = r + q, L = X === 1 / 0 ? 0 : Aa(X, 10);
  return Rl(L, d, f, _, !S && !v);
}, kv = 160, Cv = 100, Nz = function(n, i) {
  var r = n.props, u = r.onWheelStart, s = r.onZoomStart;
  n.wheelStopEventTimer || (en(n), Ce(ze(n), i, u), Ce(ze(n), i, s));
}, Dz = function(n, i) {
  var r = n.props, u = r.onWheel, s = r.onZoom, f = n.contentComponent, d = n.setup, m = n.state, v = m.scale, h = d.limitToBounds, _ = d.centerZoomedOut, S = d.zoomAnimation, x = d.wheel, k = d.disablePadding, j = d.smooth, q = S.size, X = S.disabled, L = x.step;
  if (!f)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var B = Ez(i, null), V = j ? L * Math.abs(i.deltaY) : L, H = Az(n, B, V, !i.ctrlKey);
  if (v !== H) {
    var $ = Si(n, H), F = Tv(i, f, v), U = X || q === 0 || _ || k, ne = h && U, ue = ku(n, F.x, F.y, H, $, ne), Oe = ue.x, xe = ue.y;
    n.previousWheelEvent = i, n.setState(H, Oe, xe), Ce(ze(n), i, u), Ce(ze(n), i, s);
  }
}, Zz = function(n, i) {
  var r = n.props, u = r.onWheelStop, s = r.onZoomStop;
  Nl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Ec(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Cv);
  var f = Ev(n, i);
  f && (Nl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ce(ze(n), i, u), Ce(ze(n), i, s));
  }, kv));
}, Rz = function(n, i) {
  var r = n.props, u = r.onWheelStart, s = r.onPanningStart;
  n.wheelStopEventTimer || (en(n), Ce(ze(n), i, u), Ce(ze(n), i, s));
}, Uz = function(n, i) {
  var r = n.props, u = r.onWheelStop, s = r.onPanningStop;
  Nl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (Ec(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, Cv);
  var f = Ev(n, i);
  f && (Nl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, Ce(ze(n), i, u), Ce(ze(n), i, s));
  }, kv));
}, Ov = function(n) {
  for (var i = 0, r = 0, u = 0; u < 2; u += 1)
    i += n.touches[u].clientX, r += n.touches[u].clientY;
  var s = i / 2, f = r / 2;
  return { x: s, y: f };
}, Yz = function(n, i) {
  var r = Av(i);
  n.pinchStartDistance = r, n.lastDistance = r, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Ov(i), en(n);
}, Xz = function(n, i) {
  var r = n.contentComponent, u = n.pinchStartDistance, s = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, m = n.setup, v = m.limitToBounds, h = m.centerZoomedOut, _ = m.zoomAnimation, S = m.autoAlignment, x = m.pinch, k = m.panning, j = _.disabled, q = _.size, X = x.allowPanning;
  if (!(u === null || !r)) {
    var L = Oz(i, d, r);
    if (!(!Number.isFinite(L.x) || !Number.isFinite(L.y))) {
      var B = Av(i), V = Mz(n, B), H = Ov(i), $ = d / V, F = (H.x - (f?.x || 0)) * $, U = (H.y - (f?.y || 0)) * $;
      if (!(V === d && F === 0 && U === 0)) {
        n.pinchPreviousCenter = H;
        var ne = Si(n, V), ue = j || q === 0 || h, Oe = v && ue, xe = ku(n, L.x, L.y, V, ne, Oe), ve = xe.x, Te = xe.y;
        if (n.pinchMidpoint = L, n.lastDistance = B, k.disabled || !X)
          n.setState(V, ve, Te);
        else {
          var Me = S.sizeX, Ve = S.sizeY, M = ta(n, Me, V), K = ta(n, Ve, V), I = ve + F, ye = Te + U, ge = Zl(I, ye, ne, v, M, K, s), w = ge.x, D = ge.y;
          n.setState(V, w, D);
        }
      }
    }
  }
}, Hz = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, Ec(n, i?.x, i?.y);
}, jv = function(n, i) {
  var r = n.props.onZoomStop, u = n.setup.doubleClick.animationTime;
  Nl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, Ce(ze(n), i, r);
  }, u);
}, Bz = function(n, i) {
  var r = n.props, u = r.onZoomStart, s = r.onZoom, f = n.setup.doubleClick, d = f.animationTime, m = f.animationType;
  Ce(ze(n), i, u), wv(n, d, m, function() {
    return Ce(ze(n), i, s);
  }), jv(n, i);
};
function qz(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function $z(n, i) {
  var r = n.setup, u = n.doubleClickStopEventTimer, s = n.state, f = n.contentComponent, d = s.scale, m = n.props, v = m.onZoomStart, h = m.onZoom, _ = r.doubleClick, S = _.disabled, x = _.mode, k = _.step, j = _.animationTime, q = _.animationType;
  if (!S && !u) {
    if (x === "reset")
      return Bz(n, i);
    if (!f)
      return console.error("No ContentComponent found");
    var X = qz(x, n.state.scale), L = bv(n, X, k);
    if (d !== L) {
      Ce(ze(n), i, v);
      var B = Tv(i, f, d), V = Tc(n, L, B.x, B.y);
      if (!V)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      Ce(ze(n), i, h), ia(n, V, j, q), jv(n, i);
    }
  }
}
var Lz = function(n, i) {
  var r = n.isInitialized, u = n.setup, s = n.wrapperComponent, f = u.doubleClick, d = f.disabled, m = f.excluded, v = i.target, h = s?.contains(v), _ = r && v && h && !d;
  if (!_)
    return !1;
  var S = Ul(v, m);
  return !S;
}, Vz = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var r = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        r.initializeWindowEvents();
      }, this.unmount = function() {
        r.cleanupWindowEvents();
      }, this.update = function(u) {
        r.props = u, r.wrapperComponent && r.contentComponent && Si(r, r.state.scale), r.setup = Th(u);
      }, this.initializeWindowEvents = function() {
        var u, s, f, d, m = lc(), v = (u = r.wrapperComponent) === null || u === void 0 ? void 0 : u.ownerDocument, h = v?.defaultView;
        (s = r.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", r.onWheelPanning, m), (f = r.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", r.setKeyUnPressed, m), (d = r.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", r.setKeyPressed, m), h?.addEventListener("mousedown", r.onPanningStart, m), h?.addEventListener("mousemove", r.onPanning, m), h?.addEventListener("mouseup", r.onPanningStop, m), v?.addEventListener("mouseleave", r.clearPanning, m), h?.addEventListener("keyup", r.setKeyUnPressed, m), h?.addEventListener("keydown", r.setKeyPressed, m), h?.addEventListener("blur", r.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var u, s, f, d, m, v = lc(), h = (u = r.wrapperComponent) === null || u === void 0 ? void 0 : u.ownerDocument, _ = h?.defaultView;
        _?.removeEventListener("mousedown", r.onPanningStart, v), _?.removeEventListener("mousemove", r.onPanning, v), _?.removeEventListener("mouseup", r.onPanningStop, v), h?.removeEventListener("mouseleave", r.clearPanning, v), _?.removeEventListener("keyup", r.setKeyUnPressed, v), _?.removeEventListener("keydown", r.setKeyPressed, v), _?.removeEventListener("blur", r.handleWindowBlur), document.removeEventListener("mouseleave", r.clearPanning, v), (s = r.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", r.onWheelPanning, v), (f = r.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", r.setKeyUnPressed, v), (d = r.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", r.setKeyPressed, v), en(r), (m = r.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(u) {
        var s = lc();
        u.addEventListener("wheel", r.onWheelZoom, s), u.addEventListener("dblclick", r.onDoubleClick, s), u.addEventListener("touchstart", r.onTouchPanningStart, s), u.addEventListener("touchmove", r.onTouchPanning, s), u.addEventListener("touchend", r.onTouchPanningStop, s);
      }, this.handleInitialize = function(u) {
        var s = r.setup.centerOnInit;
        r.applyTransformation(), r.onInitCallbacks.forEach(function(f) {
          return f(ze(r));
        }), s && (r.setCenter(), r.observer = new ResizeObserver(function() {
          var f, d = u.offsetWidth, m = u.offsetHeight;
          (d > 0 || m > 0) && (r.onInitCallbacks.forEach(function(v) {
            return v(ze(r));
          }), r.setCenter(), (f = r.observer) === null || f === void 0 || f.disconnect());
        }), setTimeout(function() {
          var f;
          (f = r.observer) === null || f === void 0 || f.disconnect();
        }, 5e3), r.observer.observe(u));
      }, this.onWheelZoom = function(u) {
        var s = r.setup.disabled;
        if (!s) {
          r.syncModifierKeys(u);
          var f = xv(r, u);
          f && (Nz(r, u), Dz(r, u), Zz(r, u));
        }
      }, this.onWheelPanning = function(u) {
        var s = r.props.onPanning, f = r.setup.trackPadPanning, d = f.lockAxisX, m = f.lockAxisY;
        r.syncModifierKeys(u);
        var v = xz(r, u);
        if (v) {
          u.preventDefault(), u.stopPropagation();
          var h = r.state, _ = h.positionX, S = h.positionY, x = _ - u.deltaX, k = S - u.deltaY, j = d ? _ : x, q = m ? S : k, X = r.setup.autoAlignment, L = X.sizeX, B = X.sizeY, V = ta(r, L), H = ta(r, B);
          j === _ && q === S || (Rz(r, u), yv(r, j, q, V, H), Ce(ze(r), u, s), Uz(r, u));
        }
      }, this.onPanningStart = function(u) {
        var s = r.setup.disabled, f = r.props.onPanningStart;
        if (!s) {
          r.syncModifierKeys(u);
          var d = _h(r, u);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (u.button === 0 && !r.setup.panning.allowLeftClickPan || u.button === 1 && !r.setup.panning.allowMiddleClickPan || u.button === 2 && !r.setup.panning.allowRightClickPan || (u.preventDefault(), u.stopPropagation(), en(r), wh(r, u), Ce(ze(r), u, f)));
          }
        }
      }, this.onPanning = function(u) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (!s) {
          if (r.syncModifierKeys(u), r.isPanning && u.buttons === 0) {
            r.clearPanning(u);
            return;
          }
          var d = bh(r);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (u.preventDefault(), u.stopPropagation(), zh(r, u.clientX, u.clientY, ea.MOUSE), Ce(ze(r), u, f));
          }
        }
      }, this.onPanningStop = function(u) {
        var s = r.setup.panning.velocityDisabled, f = r.props.onPanningStop;
        r.isPanning && (fz(r, s), Ce(ze(r), u, f));
      }, this.onPinchStart = function(u) {
        var s = r.setup.disabled, f = r.props.onPinchStart;
        if (!s) {
          var d = kz(r, u);
          d && (Yz(r, u), en(r), Ce(ze(r), u, f));
        }
      }, this.onPinch = function(u) {
        var s = r.setup.disabled, f = r.props.onPinch;
        if (!s) {
          var d = Cz(r);
          d && (u.preventDefault(), u.stopPropagation(), Xz(r, u), Ce(ze(r), u, f));
        }
      }, this.onPinchStop = function(u) {
        var s = r.props.onPinchStop;
        r.pinchStartScale && (Hz(r), Ce(ze(r), u, s));
      }, this.onTouchPanningStart = function(u) {
        var s = r.setup, f = s.disabled, d = s.doubleClick, m = r.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = r.lastTouch && +/* @__PURE__ */ new Date() - r.lastTouch < 200;
          if (v && h && u.touches.length === 1)
            r.onDoubleClick(u);
          else {
            r.lastTouch = +/* @__PURE__ */ new Date(), en(r);
            var _ = u.touches, S = _.length === 1, x = _.length === 2, k = _h(r, u);
            if (S) {
              if (!k)
                return;
              en(r), wh(r, u), Ce(ze(r), u, m);
            }
            x && r.onPinchStart(u);
          }
        }
      }, this.onTouchPanning = function(u) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (r.isPanning && u.touches.length === 1) {
          if (s)
            return;
          var d = bh(r);
          if (!d)
            return;
          u.cancelable && u.preventDefault(), u.stopPropagation();
          var m = u.touches[0];
          zh(r, m.clientX, m.clientY, ea.TOUCH), Ce(ze(r), u, f);
        } else u.touches.length > 1 && r.onPinch(u);
      }, this.onTouchPanningStop = function(u) {
        r.onPanningStop(u), r.onPinchStop(u);
      }, this.onDoubleClick = function(u) {
        var s = r.setup.disabled;
        if (!s) {
          var f = Lz(r, u);
          f && $z(r, u);
        }
      }, this.clearPanning = function(u) {
        r.isPanning && r.onPanningStop(u);
      }, this.handleWindowBlur = function() {
        r.pressedKeys = {}, r.isPanning && (r.isPanning = !1, r.startCoords = null);
      }, this.syncModifierKeys = function(u) {
        var s = u.ctrlKey, f = u.metaKey, d = u.shiftKey, m = u.altKey;
        typeof s == "boolean" && (r.pressedKeys.Control = s), typeof f == "boolean" && (r.pressedKeys.Meta = f), typeof d == "boolean" && (r.pressedKeys.Shift = d), typeof m == "boolean" && (r.pressedKeys.Alt = m);
      }, this.setKeyPressed = function(u) {
        r.pressedKeys[u.key] = !0;
      }, this.setKeyUnPressed = function(u) {
        r.pressedKeys[u.key] = !1;
      }, this.isPressingKeys = function(u) {
        return typeof u == "function" ? u(Object.entries(r.pressedKeys).filter(function(s) {
          var f = s[1];
          return f;
        }).map(function(s) {
          var f = s[0];
          return f;
        })) : u.length ? !!u.every(function(s) {
          return r.pressedKeys[s];
        }) : !0;
      }, this.setCenter = function() {
        if (r.wrapperComponent && r.contentComponent) {
          var u = Ac(r.state.scale, r.wrapperComponent, r.contentComponent);
          r.setState(u.scale, u.positionX, u.positionY);
        }
      }, this.handleTransformStyles = function(u, s, f) {
        return r.props.customTransform ? r.props.customTransform(u, s, f) : zv(u, s, f);
      }, this.getContext = function() {
        return ze(r);
      }, this.applyTransformation = function() {
        if (!(!r.mounted || !r.contentComponent)) {
          var u = r.state, s = u.scale, f = u.positionX, d = u.positionY, m = r.handleTransformStyles(f, d, s);
          r.props.detached || (r.contentComponent.style.transform = m), r.onTransformCallbacks.forEach(function(v) {
            return v({
              scale: s,
              positionX: f,
              positionY: d,
              previousScale: r.state.previousScale,
              ref: ze(r)
            });
          });
        }
      }, this.setState = function(u, s, f) {
        var d = r.props.onTransform;
        if (!Number.isNaN(u) && !Number.isNaN(s) && !Number.isNaN(f)) {
          var m = Math.max(u, 1e-7);
          m !== r.state.scale && (r.state.previousScale = r.state.scale, r.state.scale = m), r.state.positionX = s, r.state.positionY = f, r.applyTransformation();
          var v = ze(r);
          r.onChangeCallbacks.forEach(function(h) {
            return h(v);
          }), Ce(v, { scale: r.state.scale, positionX: s, positionY: f }, d);
        } else
          console.error("Detected NaN set state values");
      }, this.onTransform = function(u) {
        return r.onTransformCallbacks.has(u) || r.onTransformCallbacks.add(u), function() {
          r.onTransformCallbacks.delete(u);
        };
      }, this.onChange = function(u) {
        return r.onChangeCallbacks.has(u) || r.onChangeCallbacks.add(u), function() {
          r.onChangeCallbacks.delete(u);
        };
      }, this.onInit = function(u) {
        return r.onInitCallbacks.has(u) || r.onInitCallbacks.add(u), function() {
          r.onInitCallbacks.delete(u);
        };
      }, this.init = function(u, s) {
        r.cleanupWindowEvents(), r.wrapperComponent = u, r.contentComponent = s, Si(r, r.state.scale), r.handleInitializeWrapperEvents(u), r.handleInitialize(s), r.initializeWindowEvents(), r.isInitialized = !0;
        var f = ze(r);
        Ce(f, void 0, r.props.onInit), wz(r.props.ref, f);
      }, this.props = i, this.setup = Th(this.props), this.state = _v(this.props);
    }
    return n;
  })()
), Yl = xu.createContext(null), Gz = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, Qz = xu.forwardRef(function(n, i) {
  var r = te.useRef(new Vz(n)).current, u = Gz(n.children, zu(r));
  return te.useImperativeHandle(i, function() {
    return zu(r);
  }, [r]), te.useEffect(function() {
    r.update(n);
  }, [r, n]), g.jsx(Yl.Provider, Kt({ value: r }, { children: u }));
});
xu.forwardRef(function(n, i) {
  var r = te.useRef(null), u = te.useContext(Yl);
  return te.useEffect(function() {
    return u.onChange(function(s) {
      if (r.current) {
        var f = 0, d = 0;
        r.current.style.transform = u.handleTransformStyles(f, d, 1 / s.instance.state.scale);
      }
    });
  }, [u]), g.jsx("div", Kt({}, n, { ref: zz([r, i]) }));
});
function Kz(n, i) {
  i === void 0 && (i = {});
  var r = i.insertAt;
  if (!(typeof document > "u")) {
    var u = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", r === "top" && u.firstChild ? u.insertBefore(s, u.firstChild) : u.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var Jz = `.transform-component-module_wrapper__SPB86 {
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
`, rc = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
Kz(Jz);
var Wz = function(n) {
  var i = n.children, r = n.wrapperClass, u = r === void 0 ? "" : r, s = n.contentClass, f = s === void 0 ? "" : s, d = n.wrapperStyle, m = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, _ = n.contentProps, S = _ === void 0 ? {} : _, x = n.infinite, k = x === void 0 ? !1 : x, j = te.useContext(Yl), q = j.init, X = j.cleanupWindowEvents, L = te.useRef(null), B = te.useRef(null), V = te.useRef(null);
  return te.useEffect(function() {
    var H = L.current, $ = B.current;
    return H !== null && $ !== null && q && q?.(H, $), function() {
      X?.();
    };
  }, []), te.useEffect(function() {
    if (k) {
      var H = V.current;
      if (H) {
        var $ = function() {
          var F = j.state, U = F.positionX, ne = F.positionY;
          H.style.backgroundPosition = "".concat(U, "px ").concat(ne, "px");
        };
        return $(), j.onChange($);
      }
    }
  }, [k, j]), g.jsxs("div", Kt({}, h, { ref: L, className: "".concat(dc.wrapperClass, " ").concat(rc.wrapper, " ").concat(u), style: d }, { children: [k && g.jsx("div", { ref: V, className: rc.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", Kt({}, S, { ref: B, className: "".concat(dc.contentClass, " ").concat(rc.content, " ").concat(f), style: Kt(Kt({}, m), { transform: zv(j.state.positionX, j.state.positionY, j.state.scale) }) }, { children: i }))] }));
};
function Pz(n, i) {
  var r = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), u = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return r * u;
}
function Fz(n) {
  var i = n.elementX, r = n.elementY, u = n.elementWidth, s = n.elementHeight, f = n.scale, d = n.positionX, m = n.positionY, v = n.viewportWidth, h = n.viewportHeight, _ = n.margin, S = _ === void 0 ? 0 : _, x = n.threshold, k = x === void 0 ? 0 : x, j = {
    x: -S,
    y: -S,
    width: v + 2 * S,
    height: h + 2 * S
  }, q = {
    x: i * f + d,
    y: r * f + m,
    width: u * f,
    height: s * f
  };
  if (k <= 0) {
    var X = q.x < j.x + j.width && q.x + q.width > j.x, L = q.y < j.y + j.height && q.y + q.height > j.y;
    return X && L;
  }
  var B = q.width * q.height;
  if (B <= 0)
    return !1;
  var V = Pz(j, q);
  return V / B >= k;
}
xu.forwardRef(function(n, i) {
  var r = n.x, u = n.y, s = n.width, f = n.height, d = n.margin, m = d === void 0 ? 0 : d, v = n.threshold, h = v === void 0 ? 0 : v, _ = n.placeholder, S = _ === void 0 ? null : _, x = n.onShow, k = n.onHide, j = n.children, q = n.className, X = n.style, L = te.useContext(Yl), B = te.useState(!1), V = B[0], H = B[1], $ = te.useRef(!1), F = te.useRef(x), U = te.useRef(k);
  return F.current = x, U.current = k, te.useEffect(function() {
    var ne = function() {
      var xe, ve, Te = L.wrapperComponent;
      if (Te) {
        var Me = Fz({
          elementX: r,
          elementY: u,
          elementWidth: s,
          elementHeight: f,
          scale: L.state.scale,
          positionX: L.state.positionX,
          positionY: L.state.positionY,
          viewportWidth: Te.offsetWidth,
          viewportHeight: Te.offsetHeight,
          margin: m,
          threshold: h
        });
        Me !== $.current && ($.current = Me, H(Me), Me ? (xe = F.current) === null || xe === void 0 || xe.call(F) : (ve = U.current) === null || ve === void 0 || ve.call(U));
      }
    };
    ne();
    var ue = L.onChange(ne), Oe;
    return L.wrapperComponent || (Oe = L.onInit(function() {
      return ne();
    })), function() {
      ue(), Oe?.();
    };
  }, [L, r, u, s, f, m, h]), V ? g.jsx("div", Kt({ ref: i, className: q, style: X }, { children: j })) : S ? g.jsx(g.Fragment, { children: S }) : null;
});
var Iz = function() {
  var n = te.useContext(Yl);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, ex = function() {
  var n = Iz();
  return zu(n);
};
function tx({ locked: n, onToggleLock: i }) {
  const { zoomIn: r, zoomOut: u, resetTransform: s } = ex();
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => r(), disabled: n, children: /* @__PURE__ */ g.jsx(e0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => u(), disabled: n, children: /* @__PURE__ */ g.jsx(n0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => s(), children: /* @__PURE__ */ g.jsx(pc, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: i, children: n ? /* @__PURE__ */ g.jsx(Oh, {}) : /* @__PURE__ */ g.jsx(j_, {}) })
  ] });
}
function nx({ hass: n, floor: i, language: r, selected: u, launched: s, active: f, disabled: d, onToggle: m }) {
  const [v, h] = te.useState(!0), [_, S] = te.useState({ width: 0, height: 0 }), [x, k] = te.useState({ width: 0, height: 0 }), [j, q] = te.useState(0), X = te.useRef(null), L = n.states[i.map_entity], B = te.useMemo(() => fv(L), [L]), V = te.useMemo(() => L2(L), [L]), H = te.useMemo(() => Q2(i), [i]), $ = typeof L?.attributes.entity_picture == "string" ? L.attributes.entity_picture : void 0;
  te.useEffect(() => {
    if (!f) return;
    const U = setInterval(() => q((ne) => ne + 1), 5e3);
    return () => {
      clearInterval(U), q(0);
    };
  }, [f]), te.useEffect(() => {
    const U = X.current;
    if (!U) return;
    const ne = new ResizeObserver(([ue]) => {
      k({ width: ue.contentRect.width, height: ue.contentRect.height });
    });
    return ne.observe(U), () => ne.disconnect();
  }, []);
  let F;
  return !L || L.state === "unavailable" ? F = G(r, "mapMissing") : $ ? V.length < 3 ? F = G(r, "calibrationMissing") : B.length === 0 && (F = G(r, "roomsMissing")) : F = G(r, "imageMissing"), F ? /* @__PURE__ */ g.jsx("div", { className: "map-error", role: "alert", children: F }) : /* @__PURE__ */ g.jsx("div", { className: "map-shell", ref: X, children: /* @__PURE__ */ g.jsxs(
    Qz,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: v, step: 0.08 },
      pinch: { disabled: v },
      panning: { disabled: v, excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ g.jsx(tx, { locked: v, onToggleLock: () => h((U) => !U) }),
        /* @__PURE__ */ g.jsx(Wz, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!_.width || !_.height || !x.width || !x.height) return;
              const U = Math.min(x.width / _.width, x.height / _.height);
              return { width: _.width * U, height: _.height * U };
            })(),
            children: [
              /* @__PURE__ */ g.jsx(
                "img",
                {
                  src: (() => {
                    const U = n.hassUrl($), ne = U.includes("?") ? "&" : "?", ue = L?.last_updated ?? L?.state ?? "";
                    return `${U}${ne}v=${encodeURIComponent(ue)}${f ? `&r=${j}` : ""}`;
                  })(),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (U) => S({ width: U.currentTarget.naturalWidth, height: U.currentTarget.naturalHeight })
                }
              ),
              _.width > 0 && _.height > 0 && /* @__PURE__ */ g.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${_.width} ${_.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${i.name} rooms`,
                  children: B.map((U) => {
                    const ne = H.get(U.segment_id), ue = !!ne?.area_id, Oe = u.has(U.segment_id), xe = s.has(U.segment_id), ve = G2(U, V), Te = ne?.name || U.source_name, Me = d || !ue;
                    return /* @__PURE__ */ g.jsxs("g", { className: `room ${Oe ? "selected" : ""} ${xe ? "launched" : ""} ${ue ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ g.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: V2(U, V),
                          role: "button",
                          tabIndex: Me ? -1 : 0,
                          "aria-label": `${Te}${ue ? "" : ` — ${G(r, "roomUnmapped")}`}`,
                          "aria-pressed": Oe,
                          "aria-disabled": Me,
                          onClick: () => !Me && m(U.segment_id),
                          onKeyDown: (Ve) => {
                            !Me && (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), m(U.segment_id));
                          },
                          children: /* @__PURE__ */ g.jsx("title", { children: ue ? Te : `${Te}: ${G(r, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ g.jsxs("g", { className: "room-label", transform: `translate(${ve.x} ${ve.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ g.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ g.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ g.jsx(fc, { icon: ne?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ g.jsx("text", { y: "39", textAnchor: "middle", children: Te })
                      ] })
                    ] }, U.segment_id);
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
const ax = {
  preparing: /* @__PURE__ */ g.jsx(Xp, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ g.jsx(v_, {}),
  cleaning_upstairs: /* @__PURE__ */ g.jsx(uc, {}),
  carry_downstairs: /* @__PURE__ */ g.jsx(Ch, {}),
  finishing: /* @__PURE__ */ g.jsx(Xp, { className: "spin" }),
  complete: /* @__PURE__ */ g.jsx(S_, {}),
  error: /* @__PURE__ */ g.jsx(pc, {}),
  idle: /* @__PURE__ */ g.jsx(uc, {})
}, Eh = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function ix({
  language: n,
  stage: i,
  roomNames: r,
  pending: u,
  onStart: s,
  onFinish: f,
  onReset: d,
  onCancel: m
}) {
  if (i === "idle") return null;
  const v = G(n, Eh[i].title), h = G(n, Eh[i].description), _ = !["complete", "error"].includes(i);
  return /* @__PURE__ */ g.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ g.jsx("div", { className: "assisted-icon", children: ax[i] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ g.jsx("strong", { children: v }),
      /* @__PURE__ */ g.jsx("p", { children: h }),
      r.length > 0 && /* @__PURE__ */ g.jsx("small", { children: r.join(" · ") })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: u, onClick: s, children: [
        /* @__PURE__ */ g.jsx(jh, {}),
        G(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: u, onClick: f, children: [
        /* @__PURE__ */ g.jsx(Ch, {}),
        G(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", disabled: u, onClick: d, children: [
        /* @__PURE__ */ g.jsx(pc, {}),
        G(n, "newUpstairsJob")
      ] }),
      _ && /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: u, onClick: m, children: G(n, "cancel") })
    ] })
  ] });
}
function zl(n, i) {
  if (!i) return;
  const r = n.states[i];
  return !r || ["unknown", "unavailable"].includes(r.state) ? void 0 : `${r.attributes.device_class === "duration" && !isNaN(Number(r.state)) ? String(Math.round(Number(r.state))) : r.state}${r.attributes.unit_of_measurement ? ` ${r.attributes.unit_of_measurement}` : ""}`;
}
function lx(n, i, r) {
  if (!i) return;
  const u = n.states[i];
  if (!u || ["unknown", "unavailable"].includes(u.state)) return;
  const s = Number(u.state);
  if (!Number.isFinite(s) || s < 0) return;
  const f = String(u.attributes.unit_of_measurement ?? ""), m = { s: 1 / 60, min: 1, h: 60, d: 1440 }[f];
  if (m === void 0) return;
  const v = s * m, h = Math.max(0, Math.round(v)), _ = Math.floor(h / 60), S = h % 60;
  return `${[
    _ > 0 ? `${_} ${r === "nl" ? "u" : "h"}` : void 0,
    S > 0 || _ === 0 ? `${S} min` : void 0
  ].filter(Boolean).join(" ")} ${G(r, "remaining")}`;
}
function rx(n, i) {
  if (i === "washing_the_mop") return G(n, "washingMop");
}
function ux(n, i) {
  const r = new Date(n);
  if (isNaN(r.getTime())) return;
  const u = Date.now() - r.getTime();
  if (u < 0) return;
  const s = Math.floor(u / 6e4);
  if (s < 1) return G(i, "justNow");
  if (s < 60) return `${s} min ${G(i, "ago")}`;
  const f = Math.floor(s / 60);
  if (f < 24) return `${f}${i === "nl" ? " u" : "h"} ${G(i, "ago")}`;
  const d = Math.floor(f / 24);
  return d === 1 ? G(i, "yesterday") : `${d} ${G(i, "daysAgo")}`;
}
function ox(n, i) {
  const r = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((u) => u.map_select_option === r) ?? n.floors[0];
}
function sx({ hass: n, config: i }) {
  const r = te.useRef(n), u = te.useRef(!1), s = i.language, [f, d] = te.useState(() => ox(i, n).id), m = i.floors.find((Q) => Q.id === f) ?? i.floors[0], [v, h] = te.useState(/* @__PURE__ */ new Set()), [_, S] = te.useState(!1), [x, k] = te.useState(!1), [j, q] = te.useState(!1), [X, L] = te.useState(!1), [B, V] = te.useState(), [H, $] = te.useState(), [F, U] = te.useState({ phase: "idle" }), ne = te.useMemo(() => rw(n, i), [n, i]), ue = te.useMemo(() => Ew(i, ne, m), [i, ne, m]), Oe = ue.find(({ preset: Q, available: ce }) => Q.id === i.default_preset && ce)?.preset ?? ue.find(({ available: Q }) => Q)?.preset, [xe, ve] = te.useState(
    () => wu(Oe ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), Te = n.states[i.entity], Me = F2(i), Ve = I2(n, i), M = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, K = te.useMemo(() => nw(M), [M]), I = Ve !== "idle";
  te.useEffect(() => {
    r.current = n;
  }, [n]), te.useEffect(() => {
    !I || !Me || !K || (d(Me.id), h(new Set(K.segment_ids)), ve({
      preset_id: "assisted_carry",
      strategy: K.strategy,
      cleaning_type: K.cleaning_type,
      fan_speed: K.fan_speed,
      mop_mode: K.mop_mode,
      mop_intensity: K.mop_intensity,
      cleaning_count: K.cleaning_count
    }));
  }, [I, Me, K]);
  const ye = i.entities?.status ? n.states[i.entities.status]?.state : void 0, ge = ["washing_the_mop", "washing_the_mop_2"].includes(ye ?? ""), w = [Te?.state, ye].includes("emptying_the_bin"), D = ow(Te?.state) || ge;
  te.useEffect(() => {
    F.phase === "starting" && D ? U((Q) => ({ ...Q, phase: "active" })) : F.phase === "active" && !D && (U({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [F.phase, D]), te.useEffect(() => {
    if (!H) return;
    const Q = setTimeout(() => $(void 0), 5e3);
    return () => clearTimeout(Q);
  }, [H]);
  const J = new Set(F.floor_id === m.id ? F.segment_ids ?? [] : []), W = m.rooms.filter((Q) => v.has(Q.segment_id)), re = W.map((Q) => Q.name), se = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, Se = se ? lx(n, i.entities?.dock_mop_drying_remaining_time, s) : void 0, Je = i.entities?.last_clean_end ? n.states[i.entities.last_clean_end]?.state : void 0, qe = !D && Je && !["unknown", "unavailable"].includes(Je) ? ux(Je, s) : void 0, tn = [
    rx(s, ye),
    se ? G(s, "dryingMop") : void 0,
    Se
  ].filter((Q) => !!Q), nn = [
    { icon: /* @__PURE__ */ g.jsx(__, {}), label: G(s, "battery"), value: zl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ g.jsx(D_, {}), label: G(s, "room"), value: zl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ g.jsx(B_, {}), label: G(s, "area"), value: zl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ g.jsx(z_, {}), label: G(s, "duration"), value: zl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ g.jsx(K_, {}), label: G(s, "progress"), value: zl(n, i.entities?.cleaning_progress) },
    { icon: /* @__PURE__ */ g.jsx(A_, {}), label: G(s, "lastClean"), value: qe }
  ].filter((Q) => Q.value), la = (Q) => {
    I || (d(Q), h(/* @__PURE__ */ new Set()), S(!1));
  }, ra = (Q) => {
    if (Q) {
      const ce = ue.find(({ preset: fe, available: an }) => fe.id === i.default_preset && an)?.preset ?? ue.find(({ preset: fe, available: an }) => fe.id === "vacuum_only" && an)?.preset ?? ue.find(({ available: fe }) => fe)?.preset;
      if (!ce) {
        $(G(s, "unsupported"));
        return;
      }
      ve(wu(ce));
    }
    if (!Q && xe.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ce = m.rooms.filter((fe) => fe.include_in_floor_clean !== !1 && fe.area_id).map((fe) => fe.segment_id);
      h(new Set(ce));
    }
    k(Q), S(!0);
  }, Ut = () => {
    const Q = m.rooms.filter((ce) => ce.include_in_floor_clean !== !1 && ce.area_id).map((ce) => ce.segment_id);
    h(new Set(Q)), ra(!!m.assisted_carry);
  }, zi = (Q) => {
    if (Q.cleaning_type === "vacuum_then_mop" && m.vacuum_then_mop_routine) {
      const ce = m.rooms.filter((fe) => fe.include_in_floor_clean !== !1 && fe.area_id).map((fe) => fe.segment_id);
      h(new Set(ce));
    }
    ve(Q);
  }, sn = (Q) => Q instanceof jl ? `${Q.operation}: ${Q.message}` : Q instanceof Error ? Q.message : String(Q), Cu = async () => {
    if (!u.current) {
      u.current = !0, q(!0);
      try {
        const Q = ew([...v], xe);
        await aw(r.current, i, Q), S(!1), $(G(s, "preparingUpstairs"));
      } catch (Q) {
        $(sn(Q));
        try {
          await yi(r.current, i, "error");
        } catch {
        }
      } finally {
        u.current = !1, q(!1);
      }
    }
  }, Xl = async () => {
    if (!(u.current || !Me || !K)) {
      u.current = !0, q(!0);
      try {
        await iw(r.current, i, Me, K);
      } catch (Q) {
        $(sn(Q));
        try {
          await yi(r.current, i, "error");
        } catch {
        }
      } finally {
        u.current = !1, q(!1);
      }
    }
  }, xi = async () => {
    if (!u.current) {
      u.current = !0, q(!0);
      try {
        await lw(r.current, i);
      } catch (Q) {
        $(sn(Q));
        try {
          await yi(r.current, i, "error");
        } catch {
        }
      } finally {
        u.current = !1, q(!1);
      }
    }
  }, Ti = async () => {
    if (!j) {
      q(!0);
      try {
        await mh(r.current, i), h(/* @__PURE__ */ new Set());
      } catch (Q) {
        $(sn(Q));
      } finally {
        q(!1);
      }
    }
  }, Ei = async () => {
    if (!j) {
      q(!0);
      try {
        const Q = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((ce) => !!(ce && r.current.states[ce]));
        Q.length > 0 && await r.current.callService("script", "turn_off", {}, { entity_id: Q }), Ve === "cleaning_upstairs" && await r.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), ge && await Is(r.current, i, "wash", !0), w && await Is(r.current, i, "empty", !0), await mh(r.current, i), h(/* @__PURE__ */ new Set());
      } catch (Q) {
        $(sn(Q));
      } finally {
        q(!1);
      }
    }
  }, Ou = async () => {
    if (x) {
      await Cu();
      return;
    }
    if (!u.current) {
      u.current = !0, U({ phase: "submitting", floor_id: m.id, segment_ids: [...v] });
      try {
        await Sw({ getHass: () => r.current, config: i, floor: m, rooms: W, draft: xe }), U({ phase: "starting", floor_id: m.id, segment_ids: [...v] }), S(!1), $(G(s, "launched"));
      } catch (Q) {
        const ce = Q instanceof Xe ? `${Q.operation}: ${Q.message}` : String(Q);
        U({ phase: "failed", floor_id: m.id, segment_ids: [...v], error: ce }), $(ce);
      } finally {
        u.current = !1;
      }
    }
  }, ja = async (Q) => {
    try {
      if (Q === "stop" || Q === "return_to_base") {
        const ce = i.entities?.vacuum_then_mop_script;
        ce && r.current.states[ce] && r.current.states[ce].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: ce });
        const fe = i.entities?.assisted_carry_start_script;
        I && fe && r.current.states[fe] && r.current.states[fe].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: fe });
      }
      await r.current.callService("vacuum", Q, {}, { entity_id: i.entity }), Q === "stop" && Ve === "cleaning_upstairs" && await yi(r.current, i, "carry_downstairs");
    } catch (ce) {
      $(`${Q}: ${ce instanceof Error ? ce.message : String(ce)}`);
    }
  }, vt = async (Q, ce) => {
    if (!B) {
      V(G(s, "settingSaved"));
      try {
        await vw(r.current, i, Q, ce), $(G(s, "settingSaved"));
      } catch (fe) {
        const an = fe instanceof kn ? `${fe.operation}: ${fe.message}` : String(fe);
        $(an);
      } finally {
        V(void 0);
      }
    }
  }, ju = async (Q, ce) => {
    if (!B) {
      if (!ce) {
        const fe = Q === "empty" ? G(s, "confirmEmpty") : Q === "wash" ? G(s, "confirmWash") : Q === "dry" ? G(s, "confirmDry") : G(s, "confirmDrain");
        if (!window.confirm(fe)) return;
      }
      V(G(s, "dockActionSent"));
      try {
        await Is(r.current, i, Q, ce), $(G(s, "dockActionSent"));
      } catch (fe) {
        const an = fe instanceof kn ? `${fe.operation}: ${fe.message}` : String(fe);
        $(an);
      } finally {
        V(void 0);
      }
    }
  }, Hl = async (Q) => {
    const ce = i.entities?.dock_child_lock;
    if (!(!ce || B)) {
      V(G(s, "settingSaved"));
      try {
        await r.current.callService("switch", Q ? "turn_on" : "turn_off", {}, { entity_id: ce }), $(G(s, "settingSaved"));
      } catch (fe) {
        $(`child_lock: ${fe instanceof Error ? fe.message : String(fe)}`);
      } finally {
        V(void 0);
      }
    }
  };
  return /* @__PURE__ */ g.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("h1", { children: i.name ?? Te?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ g.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ g.jsx("span", { className: `state-dot state-${Te?.state ?? "unavailable"}` }),
          /* @__PURE__ */ g.jsx("span", { children: Te?.state?.replaceAll("_", " ") ?? "unavailable" }),
          tn.map((Q) => /* @__PURE__ */ g.jsx("span", { className: "state-detail", children: ` · ${Q}` }, Q))
        ] })
      ] }),
      nn.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "status-strip", children: nn.map((Q) => /* @__PURE__ */ g.jsxs("div", { title: Q.label, children: [
        Q.icon,
        /* @__PURE__ */ g.jsx("strong", { children: Q.value })
      ] }, Q.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": G(s, "floor"), children: i.floors.map((Q) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === Q.id,
        className: m.id === Q.id ? "active" : "",
        disabled: I && m.id !== Q.id,
        onClick: () => la(Q.id),
        children: Q.name
      },
      Q.id
    )) }),
    /* @__PURE__ */ g.jsx(
      nx,
      {
        hass: n,
        floor: m,
        language: s,
        selected: v,
        launched: J,
        active: D,
        disabled: I || F.phase === "submitting" || F.phase === "starting" || F.phase === "active",
        onToggle: (Q) => h((ce) => {
          const fe = new Set(ce);
          return fe.has(Q) ? fe.delete(Q) : fe.add(Q), fe;
        })
      }
    ),
    m.assisted_carry && /* @__PURE__ */ g.jsx(
      ix,
      {
        language: s,
        stage: Ve,
        roomNames: re,
        pending: j,
        onStart: Xl,
        onFinish: xi,
        onReset: Ti,
        onCancel: Ei
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("strong", { children: G(s, "selectedRooms") }),
        /* @__PURE__ */ g.jsx("span", { children: re.length ? re.join(" · ") : G(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    !I && /* @__PURE__ */ g.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", onClick: Ut, disabled: F.phase === "submitting", children: [
        /* @__PURE__ */ g.jsx(Yp, {}),
        " ",
        G(s, "entireFloor")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", onClick: () => ra(!!m.assisted_carry), disabled: v.size === 0 || F.phase === "submitting", children: [
        m.assisted_carry && /* @__PURE__ */ g.jsx(uc, {}),
        m.assisted_carry ? G(s, "prepareUpstairs") : G(s, "configureJob")
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      Te?.state === "paused" && ne.canStart && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ja("start"), children: [
        /* @__PURE__ */ g.jsx(jh, {}),
        G(s, "resume")
      ] }),
      Te?.state === "cleaning" && ne.canPause && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ja("pause"), children: [
        /* @__PURE__ */ g.jsx(R_, {}),
        G(s, "pause")
      ] }),
      ne.canStop && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ja("stop"), children: [
        /* @__PURE__ */ g.jsx(G_, {}),
        G(s, "stop")
      ] }),
      ne.canDock && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => ja("return_to_base"), children: [
        /* @__PURE__ */ g.jsx(Yp, {}),
        G(s, "dock")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => L(!0), children: [
        /* @__PURE__ */ g.jsx($_, {}),
        G(s, "dockStation")
      ] })
    ] }),
    _ && /* @__PURE__ */ g.jsx(
      Rw,
      {
        language: s,
        draft: xe,
        capabilities: ne,
        presets: ue,
        selectedRoomNames: re,
        submitting: F.phase === "submitting" || j,
        assistedCarry: x,
        onDraftChange: zi,
        onClose: () => F.phase !== "submitting" && !j && S(!1),
        onStart: Ou
      }
    ),
    X && /* @__PURE__ */ g.jsx(
      Ow,
      {
        hass: n,
        config: i,
        language: s,
        washing: ge,
        emptying: w,
        drying: se,
        dryingRemaining: Se,
        pending: B,
        onClose: () => !B && L(!1),
        onAction: ju,
        onSetting: vt,
        onChildLock: Hl
      }
    ),
    H && /* @__PURE__ */ g.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ g.jsx("span", { children: H }),
      /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": G(s, "close"), onClick: () => $(void 0), children: /* @__PURE__ */ g.jsx(hc, {}) })
    ] })
  ] });
}
const cx = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', fx = "0.6.1";
class Mv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), r = document.createElement("style");
    r.textContent = cx, i.append(r), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= u_.createRoot(this.container), this.root.render(i);
  }
}
class dx extends Mv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = q2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ g.jsx(sx, { hass: this.homeAssistant, config: this.config }));
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
    return cv();
  }
}
class mx extends Mv {
  config = cv();
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
        W2,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", dx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", mx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${fx} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  dx as RoborockVacuumMapCard,
  mx as RoborockVacuumMapCardEditor
};
