function Eh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Bs = { exports: {} }, yl = {};
var xp;
function Pg() {
  if (xp) return yl;
  xp = 1;
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
  return yl.Fragment = i, yl.jsx = r, yl.jsxs = r, yl;
}
var Tp;
function Fg() {
  return Tp || (Tp = 1, Bs.exports = Pg()), Bs.exports;
}
var g = Fg(), qs = { exports: {} }, gl = {}, $s = { exports: {} }, Ls = {};
var Ep;
function Ig() {
  return Ep || (Ep = 1, (function(n) {
    function i(M, G) {
      var I = M.length;
      M.push(G);
      e: for (; 0 < I; ) {
        var ve = I - 1 >>> 1, ye = M[ve];
        if (0 < s(ye, G))
          M[ve] = G, M[I] = ye, I = ve;
        else break e;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function u(M) {
      if (M.length === 0) return null;
      var G = M[0], I = M.pop();
      if (I !== G) {
        M[0] = I;
        e: for (var ve = 0, ye = M.length, w = ye >>> 1; ve < w; ) {
          var D = 2 * (ve + 1) - 1, J = M[D], W = D + 1, re = M[W];
          if (0 > s(J, I))
            W < ye && 0 > s(re, J) ? (M[ve] = re, M[W] = I, ve = W) : (M[ve] = J, M[D] = I, ve = D);
          else if (W < ye && 0 > s(re, I))
            M[ve] = re, M[W] = I, ve = W;
          else break e;
        }
      }
      return G;
    }
    function s(M, G) {
      var I = M.sortIndex - G.sortIndex;
      return I !== 0 ? I : M.id - G.id;
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
    var v = [], h = [], _ = 1, S = null, x = 3, k = !1, j = !1, q = !1, Y = !1, K = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function X(M) {
      for (var G = r(h); G !== null; ) {
        if (G.callback === null) u(h);
        else if (G.startTime <= M)
          u(h), G.sortIndex = G.expirationTime, i(v, G);
        else break;
        G = r(h);
      }
    }
    function V(M) {
      if (q = !1, X(M), !j)
        if (r(v) !== null)
          j = !0, P || (P = !0, de());
        else {
          var G = r(h);
          G !== null && et(V, G.startTime - M);
        }
    }
    var P = !1, L = -1, le = 5, fe = -1;
    function Te() {
      return Y ? !0 : !(n.unstable_now() - fe < le);
    }
    function he() {
      if (Y = !1, P) {
        var M = n.unstable_now();
        fe = M;
        var G = !0;
        try {
          e: {
            j = !1, q && (q = !1, B(L), L = -1), k = !0;
            var I = x;
            try {
              t: {
                for (X(M), S = r(v); S !== null && !(S.expirationTime > M && Te()); ) {
                  var ve = S.callback;
                  if (typeof ve == "function") {
                    S.callback = null, x = S.priorityLevel;
                    var ye = ve(
                      S.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof ye == "function") {
                      S.callback = ye, X(M), G = !0;
                      break t;
                    }
                    S === r(v) && u(v), X(M);
                  } else u(v);
                  S = r(v);
                }
                if (S !== null) G = !0;
                else {
                  var w = r(h);
                  w !== null && et(
                    V,
                    w.startTime - M
                  ), G = !1;
                }
              }
              break e;
            } finally {
              S = null, x = I, k = !1;
            }
            G = void 0;
          }
        } finally {
          G ? de() : P = !1;
        }
      }
    }
    var de;
    if (typeof H == "function")
      de = function() {
        H(he);
      };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), Le = Ye.port2;
      Ye.port1.onmessage = he, de = function() {
        Le.postMessage(null);
      };
    } else
      de = function() {
        K(he, 0);
      };
    function et(M, G) {
      L = K(function() {
        M(n.unstable_now());
      }, G);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : le = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(M) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = x;
      }
      var I = x;
      x = G;
      try {
        return M();
      } finally {
        x = I;
      }
    }, n.unstable_requestPaint = function() {
      Y = !0;
    }, n.unstable_runWithPriority = function(M, G) {
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
        return G();
      } finally {
        x = I;
      }
    }, n.unstable_scheduleCallback = function(M, G, I) {
      var ve = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ve + I : ve) : I = ve, M) {
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
      return ye = I + ye, M = {
        id: _++,
        callback: G,
        priorityLevel: M,
        startTime: I,
        expirationTime: ye,
        sortIndex: -1
      }, I > ve ? (M.sortIndex = I, i(h, M), r(v) === null && M === r(h) && (q ? (B(L), L = -1) : q = !0, et(V, I - ve))) : (M.sortIndex = ye, i(v, M), j || k || (j = !0, P || (P = !0, de()))), M;
    }, n.unstable_shouldYield = Te, n.unstable_wrapCallback = function(M) {
      var G = x;
      return function() {
        var I = x;
        x = G;
        try {
          return M.apply(this, arguments);
        } finally {
          x = I;
        }
      };
    };
  })(Ls)), Ls;
}
var Ap;
function e_() {
  return Ap || (Ap = 1, $s.exports = Ig()), $s.exports;
}
var Vs = { exports: {} }, ue = {};
var kp;
function t_() {
  if (kp) return ue;
  kp = 1;
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
  }, q = Object.assign, Y = {};
  function K(w, D, J) {
    this.props = w, this.context = D, this.refs = Y, this.updater = J || j;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(w, D) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, D, "setState");
  }, K.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function B() {
  }
  B.prototype = K.prototype;
  function H(w, D, J) {
    this.props = w, this.context = D, this.refs = Y, this.updater = J || j;
  }
  var X = H.prototype = new B();
  X.constructor = H, q(X, K.prototype), X.isPureReactComponent = !0;
  var V = Array.isArray;
  function P() {
  }
  var L = { H: null, A: null, T: null, S: null }, le = Object.prototype.hasOwnProperty;
  function fe(w, D, J) {
    var W = J.ref;
    return {
      $$typeof: n,
      type: w,
      key: D,
      ref: W !== void 0 ? W : null,
      props: J
    };
  }
  function Te(w, D) {
    return fe(w.type, D, w.props);
  }
  function he(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function de(w) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(J) {
      return D[J];
    });
  }
  var Ye = /\/+/g;
  function Le(w, D) {
    return typeof w == "object" && w !== null && w.key != null ? de("" + w.key) : D.toString(36);
  }
  function et(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(P, P) : (w.status = "pending", w.then(
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
    var oe = typeof w;
    (oe === "undefined" || oe === "boolean") && (w = null);
    var Se = !1;
    if (w === null) Se = !0;
    else
      switch (oe) {
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
      return re = re(w), Se = W === "" ? "." + Le(w, 0) : W, V(re) ? (J = "", Se != null && (J = Se.replace(Ye, "$&/") + "/"), M(re, D, J, "", function(en) {
        return en;
      })) : re != null && (he(re) && (re = Te(
        re,
        J + (re.key == null || w && w.key === re.key ? "" : ("" + re.key).replace(
          Ye,
          "$&/"
        ) + "/") + Se
      )), D.push(re)), 1;
    Se = 0;
    var tt = W === "" ? "." : W + ":";
    if (V(w))
      for (var Xe = 0; Xe < w.length; Xe++)
        W = w[Xe], oe = tt + Le(W, Xe), Se += M(
          W,
          D,
          J,
          oe,
          re
        );
    else if (Xe = k(w), typeof Xe == "function")
      for (w = Xe.call(w), Xe = 0; !(W = w.next()).done; )
        W = W.value, oe = tt + Le(W, Xe++), Se += M(
          W,
          D,
          J,
          oe,
          re
        );
    else if (oe === "object") {
      if (typeof w.then == "function")
        return M(
          et(w),
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
  function G(w, D, J) {
    if (w == null) return w;
    var W = [], re = 0;
    return M(w, W, "", "", function(oe) {
      return D.call(J, oe, re++);
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
  var ve = typeof reportError == "function" ? reportError : function(w) {
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
  }, ye = {
    map: G,
    forEach: function(w, D, J) {
      G(
        w,
        function() {
          D.apply(this, arguments);
        },
        J
      );
    },
    count: function(w) {
      var D = 0;
      return G(w, function() {
        D++;
      }), D;
    },
    toArray: function(w) {
      return G(w, function(D) {
        return D;
      }) || [];
    },
    only: function(w) {
      if (!he(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ue.Activity = S, ue.Children = ye, ue.Component = K, ue.Fragment = r, ue.Profiler = s, ue.PureComponent = H, ue.StrictMode = u, ue.Suspense = v, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return L.H.useMemoCache(w);
    }
  }, ue.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(w, D, J) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var W = q({}, w.props), re = w.key;
    if (D != null)
      for (oe in D.key !== void 0 && (re = "" + D.key), D)
        !le.call(D, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && D.ref === void 0 || (W[oe] = D[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) W.children = J;
    else if (1 < oe) {
      for (var Se = Array(oe), tt = 0; tt < oe; tt++)
        Se[tt] = arguments[tt + 2];
      W.children = Se;
    }
    return fe(w.type, re, W);
  }, ue.createContext = function(w) {
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
  }, ue.createElement = function(w, D, J) {
    var W, re = {}, oe = null;
    if (D != null)
      for (W in D.key !== void 0 && (oe = "" + D.key), D)
        le.call(D, W) && W !== "key" && W !== "__self" && W !== "__source" && (re[W] = D[W]);
    var Se = arguments.length - 2;
    if (Se === 1) re.children = J;
    else if (1 < Se) {
      for (var tt = Array(Se), Xe = 0; Xe < Se; Xe++)
        tt[Xe] = arguments[Xe + 2];
      re.children = tt;
    }
    if (w && w.defaultProps)
      for (W in Se = w.defaultProps, Se)
        re[W] === void 0 && (re[W] = Se[W]);
    return fe(w, oe, re);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, ue.isValidElement = he, ue.lazy = function(w) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: w },
      _init: I
    };
  }, ue.memo = function(w, D) {
    return {
      $$typeof: h,
      type: w,
      compare: D === void 0 ? null : D
    };
  }, ue.startTransition = function(w) {
    var D = L.T, J = {};
    L.T = J;
    try {
      var W = w(), re = L.S;
      re !== null && re(J, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(P, ve);
    } catch (oe) {
      ve(oe);
    } finally {
      D !== null && J.types !== null && (D.types = J.types), L.T = D;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, ue.use = function(w) {
    return L.H.use(w);
  }, ue.useActionState = function(w, D, J) {
    return L.H.useActionState(w, D, J);
  }, ue.useCallback = function(w, D) {
    return L.H.useCallback(w, D);
  }, ue.useContext = function(w) {
    return L.H.useContext(w);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(w, D) {
    return L.H.useDeferredValue(w, D);
  }, ue.useEffect = function(w, D) {
    return L.H.useEffect(w, D);
  }, ue.useEffectEvent = function(w) {
    return L.H.useEffectEvent(w);
  }, ue.useId = function() {
    return L.H.useId();
  }, ue.useImperativeHandle = function(w, D, J) {
    return L.H.useImperativeHandle(w, D, J);
  }, ue.useInsertionEffect = function(w, D) {
    return L.H.useInsertionEffect(w, D);
  }, ue.useLayoutEffect = function(w, D) {
    return L.H.useLayoutEffect(w, D);
  }, ue.useMemo = function(w, D) {
    return L.H.useMemo(w, D);
  }, ue.useOptimistic = function(w, D) {
    return L.H.useOptimistic(w, D);
  }, ue.useReducer = function(w, D, J) {
    return L.H.useReducer(w, D, J);
  }, ue.useRef = function(w) {
    return L.H.useRef(w);
  }, ue.useState = function(w) {
    return L.H.useState(w);
  }, ue.useSyncExternalStore = function(w, D, J) {
    return L.H.useSyncExternalStore(
      w,
      D,
      J
    );
  }, ue.useTransition = function() {
    return L.H.useTransition();
  }, ue.version = "19.2.8", ue;
}
var Op;
function cc() {
  return Op || (Op = 1, Vs.exports = t_()), Vs.exports;
}
var Gs = { exports: {} }, ht = {};
var Cp;
function n_() {
  if (Cp) return ht;
  Cp = 1;
  var n = cc();
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
var jp;
function a_() {
  if (jp) return Gs.exports;
  jp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Gs.exports = n_(), Gs.exports;
}
var Mp;
function i_() {
  if (Mp) return gl;
  Mp = 1;
  var n = e_(), i = cc(), r = a_();
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
  var S = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), B = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), L = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), Te = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), he = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = he && e[he] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ye = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Le(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case K:
        return "Profiler";
      case Y:
        return "StrictMode";
      case V:
        return "Suspense";
      case P:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case B:
          return (e._context.displayName || "Context") + ".Consumer";
        case X:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case L:
          return t = e.displayName || null, t !== null ? t : Le(e.type) || "Memo";
        case le:
          t = e._payload, e = e._init;
          try {
            return Le(e(t));
          } catch {
          }
      }
    return null;
  }
  var et = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], ye = -1;
  function w(e) {
    return { current: e };
  }
  function D(e) {
    0 > ye || (e.current = ve[ye], ve[ye] = null, ye--);
  }
  function J(e, t) {
    ye++, ve[ye] = e.current, e.current = t;
  }
  var W = w(null), re = w(null), oe = w(null), Se = w(null);
  function tt(e, t) {
    switch (J(oe, t), J(re, e), J(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Qm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Qm(t), e = Km(t, e);
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
  function Xe() {
    D(W), D(re), D(oe);
  }
  function en(e) {
    e.memoizedState !== null && J(Se, e);
    var t = W.current, a = Km(t, e.type);
    t !== a && (J(re, e), J(W, a));
  }
  function tn(e) {
    re.current === e && (D(W), D(re)), Se.current === e && (D(Se), ml._currentValue = I);
  }
  var la, nn;
  function Ut(e) {
    if (la === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        la = t && t[1] || "", nn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + la + e + nn;
  }
  var Si = !1;
  function wi(e, t) {
    if (!e || Si) return "";
    Si = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (C) {
                  var O = C;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (C) {
                  O = C;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                O = C;
              }
              (R = e()) && typeof R.catch == "function" && R.catch(function() {
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
      Si = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ut(a) : "";
  }
  function Tu(e, t) {
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
        return wi(e.type, !1);
      case 11:
        return wi(e.type.render, !1);
      case 1:
        return wi(e.type, !0);
      case 31:
        return Ut("Activity");
      default:
        return "";
    }
  }
  function Rl(e) {
    try {
      var t = "", a = null;
      do
        t += Tu(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var zi = Object.prototype.hasOwnProperty, kn = n.unstable_scheduleCallback, xi = n.unstable_cancelCallback, Eu = n.unstable_shouldYield, Au = n.unstable_requestPaint, $ = n.unstable_now, ge = n.unstable_getCurrentPriorityLevel, xe = n.unstable_ImmediatePriority, an = n.unstable_UserBlockingPriority, Yl = n.unstable_NormalPriority, Mv = n.unstable_LowPriority, Ec = n.unstable_IdlePriority, Nv = n.log, Dv = n.unstable_setDisableYieldValue, Ti = null, At = null;
  function On(e) {
    if (typeof Nv == "function" && Dv(e), At && typeof At.setStrictMode == "function")
      try {
        At.setStrictMode(Ti, e);
      } catch {
      }
  }
  var kt = Math.clz32 ? Math.clz32 : Rv, Zv = Math.log, Uv = Math.LN2;
  function Rv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zv(e) / Uv | 0) | 0;
  }
  var Xl = 256, Hl = 262144, Bl = 4194304;
  function ra(e) {
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
  function ql(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return y !== 0 ? (l = y & ~c, l !== 0 ? o = ra(l) : (p &= y, p !== 0 ? o = ra(p) : a || (a = y & ~e, a !== 0 && (o = ra(a))))) : (y = l & ~c, y !== 0 ? o = ra(y) : p !== 0 ? o = ra(p) : a || (a = l & ~e, a !== 0 && (o = ra(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : o;
  }
  function Ei(e, t) {
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
  function Ac() {
    var e = Bl;
    return Bl <<= 1, (Bl & 62914560) === 0 && (Bl = 4194304), e;
  }
  function ku(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ai(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Xv(e, t, a, l, o, c) {
    var p = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var y = e.entanglements, b = e.expirationTimes, A = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var N = 31 - kt(a), R = 1 << N;
      y[N] = 0, b[N] = -1;
      var O = A[N];
      if (O !== null)
        for (A[N] = null, N = 0; N < O.length; N++) {
          var C = O[N];
          C !== null && (C.lane &= -536870913);
        }
      a &= ~R;
    }
    l !== 0 && kc(e, l, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function kc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - kt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Oc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - kt(a), o = 1 << l;
      o & t | e[l] & t && (e[l] |= t), a &= ~o;
    }
  }
  function Cc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Ou(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Ou(e) {
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
  function Cu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jc() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : yp(e.type));
  }
  function Mc(e, t) {
    var a = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = a;
    }
  }
  var Cn = Math.random().toString(36).slice(2), st = "__reactFiber$" + Cn, _t = "__reactProps$" + Cn, Ca = "__reactContainer$" + Cn, ju = "__reactEvents$" + Cn, Hv = "__reactListeners$" + Cn, Bv = "__reactHandles$" + Cn, Nc = "__reactResources$" + Cn, ki = "__reactMarker$" + Cn;
  function Mu(e) {
    delete e[st], delete e[_t], delete e[ju], delete e[Hv], delete e[Bv];
  }
  function ja(e) {
    var t = e[st];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ca] || a[st]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = tp(e); e !== null; ) {
            if (a = e[st]) return a;
            e = tp(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ma(e) {
    if (e = e[st] || e[Ca]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Oi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Na(e) {
    var t = e[Nc];
    return t || (t = e[Nc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[ki] = !0;
  }
  var Dc = /* @__PURE__ */ new Set(), Zc = {};
  function ua(e, t) {
    Da(e, t), Da(e + "Capture", t);
  }
  function Da(e, t) {
    for (Zc[e] = t, e = 0; e < t.length; e++)
      Dc.add(t[e]);
  }
  var qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Uc = {}, Rc = {};
  function $v(e) {
    return zi.call(Rc, e) ? !0 : zi.call(Uc, e) ? !1 : qv.test(e) ? Rc[e] = !0 : (Uc[e] = !0, !1);
  }
  function $l(e, t, a) {
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
  function Ll(e, t, a) {
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
  function Rt(e) {
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
  function Yc(e) {
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
  function Nu(e) {
    if (!e._valueTracker) {
      var t = Yc(e) ? "checked" : "value";
      e._valueTracker = Lv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Xc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Yc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Vl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vv = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Vv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Du(e, t, a, l, o, c, p, y) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Rt(t)) : e.value !== "" + Rt(t) && (e.value = "" + Rt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Zu(e, p, Rt(t)) : a != null ? Zu(e, p, Rt(a)) : l != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Rt(y) : e.removeAttribute("name");
  }
  function Hc(e, t, a, l, o, c, p, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Nu(e);
        return;
      }
      a = a != null ? "" + Rt(a) : "", t = t != null ? "" + Rt(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? o, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Nu(e);
  }
  function Zu(e, t, a) {
    t === "number" && Vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Za(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < a.length; o++)
        t["$" + a[o]] = !0;
      for (a = 0; a < e.length; a++)
        o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Rt(a), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === a) {
          e[o].selected = !0, l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bc(e, t, a) {
    if (t != null && (t = "" + Rt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Rt(a) : "";
  }
  function qc(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(u(92));
        if (et(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = Rt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Nu(e);
  }
  function Ua(e, t) {
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
  function $c(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Gv.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Lc(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var o in t)
        l = t[o], t.hasOwnProperty(o) && a[o] !== l && $c(e, o, l);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && $c(e, c, t[c]);
  }
  function Uu(e) {
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
  function Gl(e) {
    return Kv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function cn() {
  }
  var Ru = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, Ya = null;
  function Vc(e) {
    var t = Ma(e);
    if (t && (e = t.stateNode)) {
      var a = e[_t] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Du(
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
              'input[name="' + Yt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var o = l[_t] || null;
                if (!o) throw Error(u(90));
                Du(
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
              l = a[t], l.form === e.form && Xc(l);
          }
          break e;
        case "textarea":
          Bc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Za(e, !!a.multiple, t, !1);
      }
    }
  }
  var Xu = !1;
  function Gc(e, t, a) {
    if (Xu) return e(t, a);
    Xu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Xu = !1, (Ra !== null || Ya !== null) && (Nr(), Ra && (t = Ra, e = Ya, Ya = Ra = null, Vc(t), e)))
        for (t = 0; t < e.length; t++) Vc(e[t]);
    }
  }
  function Ci(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[_t] || null;
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
  var fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hu = !1;
  if (fn)
    try {
      var ji = {};
      Object.defineProperty(ji, "passive", {
        get: function() {
          Hu = !0;
        }
      }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
    } catch {
      Hu = !1;
    }
  var jn = null, Bu = null, Ql = null;
  function Qc() {
    if (Ql) return Ql;
    var e, t = Bu, a = t.length, l, o = "value" in jn ? jn.value : jn.textContent, c = o.length;
    for (e = 0; e < a && t[e] === o[e]; e++) ;
    var p = a - e;
    for (l = 1; l <= p && t[a - l] === o[c - l]; l++) ;
    return Ql = o.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Kl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Jl() {
    return !0;
  }
  function Kc() {
    return !1;
  }
  function bt(e) {
    function t(a, l, o, c, p) {
      this._reactName = a, this._targetInst = o, this.type = l, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var y in e)
        e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Jl : Kc, this.isPropagationStopped = Kc, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Jl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Jl);
      },
      persist: function() {
      },
      isPersistent: Jl
    }), t;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wl = bt(oa), Mi = S({}, oa, { view: 0, detail: 0 }), Jv = bt(Mi), qu, $u, Ni, Pl = S({}, Mi, {
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
    getModifierState: Vu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ni && (Ni && e.type === "mousemove" ? (qu = e.screenX - Ni.screenX, $u = e.screenY - Ni.screenY) : $u = qu = 0, Ni = e), qu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $u;
    }
  }), Jc = bt(Pl), Wv = S({}, Pl, { dataTransfer: 0 }), Pv = bt(Wv), Fv = S({}, Mi, { relatedTarget: 0 }), Lu = bt(Fv), Iv = S({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = bt(Iv), ty = S({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ny = bt(ty), ay = S({}, oa, { data: 0 }), Wc = bt(ay), iy = {
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
  function Vu() {
    return uy;
  }
  var oy = S({}, Mi, {
    key: function(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ly[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vu,
    charCode: function(e) {
      return e.type === "keypress" ? Kl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), sy = bt(oy), cy = S({}, Pl, {
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
  }), Pc = bt(cy), fy = S({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vu
  }), dy = bt(fy), my = S({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), py = bt(my), hy = S({}, Pl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vy = bt(hy), yy = S({}, oa, {
    newState: 0,
    oldState: 0
  }), gy = bt(yy), _y = [9, 13, 27, 32], Gu = fn && "CompositionEvent" in window, Di = null;
  fn && "documentMode" in document && (Di = document.documentMode);
  var by = fn && "TextEvent" in window && !Di, Fc = fn && (!Gu || Di && 8 < Di && 11 >= Di), Ic = " ", ef = !1;
  function tf(e, t) {
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
  function nf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xa = !1;
  function Sy(e, t) {
    switch (e) {
      case "compositionend":
        return nf(t);
      case "keypress":
        return t.which !== 32 ? null : (ef = !0, Ic);
      case "textInput":
        return e = t.data, e === Ic && ef ? null : e;
      default:
        return null;
    }
  }
  function wy(e, t) {
    if (Xa)
      return e === "compositionend" || !Gu && tf(e, t) ? (e = Qc(), Ql = Bu = jn = null, Xa = !1, e) : null;
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
        return Fc && t.locale !== "ko" ? null : t.data;
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
  function af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zy[e.type] : t === "textarea";
  }
  function lf(e, t, a, l) {
    Ra ? Ya ? Ya.push(l) : Ya = [l] : Ra = l, t = Hr(t, "onChange"), 0 < t.length && (a = new Wl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Zi = null, Ui = null;
  function xy(e) {
    Bm(e, 0);
  }
  function Fl(e) {
    var t = Oi(e);
    if (Xc(t)) return e;
  }
  function rf(e, t) {
    if (e === "change") return t;
  }
  var uf = !1;
  if (fn) {
    var Qu;
    if (fn) {
      var Ku = "oninput" in document;
      if (!Ku) {
        var of = document.createElement("div");
        of.setAttribute("oninput", "return;"), Ku = typeof of.oninput == "function";
      }
      Qu = Ku;
    } else Qu = !1;
    uf = Qu && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    Zi && (Zi.detachEvent("onpropertychange", cf), Ui = Zi = null);
  }
  function cf(e) {
    if (e.propertyName === "value" && Fl(Ui)) {
      var t = [];
      lf(
        t,
        Ui,
        e,
        Yu(e)
      ), Gc(xy, t);
    }
  }
  function Ty(e, t, a) {
    e === "focusin" ? (sf(), Zi = t, Ui = a, Zi.attachEvent("onpropertychange", cf)) : e === "focusout" && sf();
  }
  function Ey(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fl(Ui);
  }
  function Ay(e, t) {
    if (e === "click") return Fl(t);
  }
  function ky(e, t) {
    if (e === "input" || e === "change")
      return Fl(t);
  }
  function Oy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : Oy;
  function Ri(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var o = a[l];
      if (!zi.call(t, o) || !Ot(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function ff(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function df(e, t) {
    var a = ff(e);
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
      a = ff(a);
    }
  }
  function mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function pf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Vl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Vl(e.document);
    }
    return t;
  }
  function Ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Cy = fn && "documentMode" in document && 11 >= document.documentMode, Ha = null, Wu = null, Yi = null, Pu = !1;
  function hf(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Pu || Ha == null || Ha !== Vl(l) || (l = Ha, "selectionStart" in l && Ju(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Yi && Ri(Yi, l) || (Yi = l, l = Hr(Wu, "onSelect"), 0 < l.length && (t = new Wl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Ha)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ba = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, Fu = {}, vf = {};
  fn && (vf = document.createElement("div").style, "AnimationEvent" in window || (delete Ba.animationend.animation, delete Ba.animationiteration.animation, delete Ba.animationstart.animation), "TransitionEvent" in window || delete Ba.transitionend.transition);
  function ca(e) {
    if (Fu[e]) return Fu[e];
    if (!Ba[e]) return e;
    var t = Ba[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in vf)
        return Fu[e] = t[a];
    return e;
  }
  var yf = ca("animationend"), gf = ca("animationiteration"), _f = ca("animationstart"), jy = ca("transitionrun"), My = ca("transitionstart"), Ny = ca("transitioncancel"), bf = ca("transitionend"), Sf = /* @__PURE__ */ new Map(), Iu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Iu.push("scrollEnd");
  function Jt(e, t) {
    Sf.set(e, t), ua(t, [e]);
  }
  var Il = typeof reportError == "function" ? reportError : function(e) {
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
  }, Xt = [], qa = 0, eo = 0;
  function er() {
    for (var e = qa, t = eo = qa = 0; t < e; ) {
      var a = Xt[t];
      Xt[t++] = null;
      var l = Xt[t];
      Xt[t++] = null;
      var o = Xt[t];
      Xt[t++] = null;
      var c = Xt[t];
      if (Xt[t++] = null, l !== null && o !== null) {
        var p = l.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), l.pending = o;
      }
      c !== 0 && wf(a, o, c);
    }
  }
  function tr(e, t, a, l) {
    Xt[qa++] = e, Xt[qa++] = t, Xt[qa++] = a, Xt[qa++] = l, eo |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function to(e, t, a, l) {
    return tr(e, t, a, l), nr(e);
  }
  function fa(e, t) {
    return tr(e, null, null, t), nr(e);
  }
  function wf(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= a, l = c.alternate, l !== null && (l.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - kt(a), e = c.hiddenUpdates, l = e[o], l === null ? e[o] = [t] : l.push(t), t.lane = a | 536870912), c) : null;
  }
  function nr(e) {
    if (50 < rl)
      throw rl = 0, fs = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $a = {};
  function Dy(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, a, l) {
    return new Dy(e, t, a, l);
  }
  function no(e) {
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
  function zf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ar(e, t, a, l, o, c) {
    var p = 0;
    if (l = e, typeof e == "function") no(e) && (p = 1);
    else if (typeof e == "string")
      p = Xg(
        e,
        a,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return e = Ct(31, a, t, o), e.elementType = fe, e.lanes = c, e;
        case q:
          return da(a.children, o, c, t);
        case Y:
          p = 8, o |= 24;
          break;
        case K:
          return e = Ct(12, a, t, o | 2), e.elementType = K, e.lanes = c, e;
        case V:
          return e = Ct(13, a, t, o), e.elementType = V, e.lanes = c, e;
        case P:
          return e = Ct(19, a, t, o), e.elementType = P, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
                p = 10;
                break e;
              case B:
                p = 9;
                break e;
              case X:
                p = 11;
                break e;
              case L:
                p = 14;
                break e;
              case le:
                p = 16, l = null;
                break e;
            }
          p = 29, a = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Ct(p, a, t, o), t.elementType = e, t.type = l, t.lanes = c, t;
  }
  function da(e, t, a, l) {
    return e = Ct(7, e, l, t), e.lanes = a, e;
  }
  function ao(e, t, a) {
    return e = Ct(6, e, null, t), e.lanes = a, e;
  }
  function xf(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function io(e, t, a) {
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
  var Tf = /* @__PURE__ */ new WeakMap();
  function Ht(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Tf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Rl(t)
      }, Tf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Rl(t)
    };
  }
  var La = [], Va = 0, ir = null, Xi = 0, Bt = [], qt = 0, Mn = null, ln = 1, rn = "";
  function mn(e, t) {
    La[Va++] = Xi, La[Va++] = ir, ir = e, Xi = t;
  }
  function Ef(e, t, a) {
    Bt[qt++] = ln, Bt[qt++] = rn, Bt[qt++] = Mn, Mn = e;
    var l = ln;
    e = rn;
    var o = 32 - kt(l) - 1;
    l &= ~(1 << o), a += 1;
    var c = 32 - kt(t) + o;
    if (30 < c) {
      var p = o - o % 5;
      c = (l & (1 << p) - 1).toString(32), l >>= p, o -= p, ln = 1 << 32 - kt(t) + o | a << o | l, rn = c + e;
    } else
      ln = 1 << c | a << o | l, rn = e;
  }
  function lo(e) {
    e.return !== null && (mn(e, 1), Ef(e, 1, 0));
  }
  function ro(e) {
    for (; e === ir; )
      ir = La[--Va], La[Va] = null, Xi = La[--Va], La[Va] = null;
    for (; e === Mn; )
      Mn = Bt[--qt], Bt[qt] = null, rn = Bt[--qt], Bt[qt] = null, ln = Bt[--qt], Bt[qt] = null;
  }
  function Af(e, t) {
    Bt[qt++] = ln, Bt[qt++] = rn, Bt[qt++] = Mn, ln = t.id, rn = t.overflow, Mn = e;
  }
  var ct = null, qe = null, we = !1, Nn = null, $t = !1, uo = Error(u(519));
  function Dn(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Hi(Ht(t, e)), uo;
  }
  function kf(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[st] = e, t[_t] = l, a) {
      case "dialog":
        pe("cancel", t), pe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ol.length; a++)
          pe(ol[a], t);
        break;
      case "source":
        pe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", t), pe("load", t);
        break;
      case "details":
        pe("toggle", t);
        break;
      case "input":
        pe("invalid", t), Hc(
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
        pe("invalid", t);
        break;
      case "textarea":
        pe("invalid", t), qc(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Vm(t.textContent, a) ? (l.popover != null && (pe("beforetoggle", t), pe("toggle", t)), l.onScroll != null && pe("scroll", t), l.onScrollEnd != null && pe("scrollend", t), l.onClick != null && (t.onclick = cn), t = !0) : t = !1, t || Dn(e, !0);
  }
  function Of(e) {
    for (ct = e.return; ct; )
      switch (ct.tag) {
        case 5:
        case 31:
        case 13:
          $t = !1;
          return;
        case 27:
        case 3:
          $t = !0;
          return;
        default:
          ct = ct.return;
      }
  }
  function Ga(e) {
    if (e !== ct) return !1;
    if (!we) return Of(e), we = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Es(e.type, e.memoizedProps)), a = !a), a && qe && Dn(e), Of(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      qe = ep(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      qe = ep(e);
    } else
      t === 27 ? (t = qe, Kn(e.type) ? (e = js, js = null, qe = e) : qe = t) : qe = ct ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ma() {
    qe = ct = null, we = !1;
  }
  function oo() {
    var e = Nn;
    return e !== null && (xt === null ? xt = e : xt.push.apply(
      xt,
      e
    ), Nn = null), e;
  }
  function Hi(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  var so = w(null), pa = null, pn = null;
  function Zn(e, t, a) {
    J(so, t._currentValue), t._currentValue = a;
  }
  function hn(e) {
    e._currentValue = so.current, D(so);
  }
  function co(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function fo(e, t, a, l) {
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
              c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), co(
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
        p.lanes |= a, c = p.alternate, c !== null && (c.lanes |= a), co(p, a, e), p = null;
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
  function Qa(e, t, a, l) {
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
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ml) : e = [ml]);
      }
      o = o.return;
    }
    e !== null && fo(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function lr(e) {
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
  function ha(e) {
    pa = e, pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ft(e) {
    return Cf(pa, e);
  }
  function rr(e, t) {
    return pa === null && ha(e), Cf(e, t);
  }
  function Cf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, pn === null) {
      if (e === null) throw Error(u(308));
      pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else pn = pn.next = t;
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
  }, Uy = n.unstable_scheduleCallback, Ry = n.unstable_NormalPriority, nt = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mo() {
    return {
      controller: new Zy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Bi(e) {
    e.refCount--, e.refCount === 0 && Uy(Ry, function() {
      e.controller.abort();
    });
  }
  var qi = null, po = 0, Ka = 0, Ja = null;
  function Yy(e, t) {
    if (qi === null) {
      var a = qi = [];
      po = 0, Ka = ys(), Ja = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return po++, t.then(jf, jf), t;
  }
  function jf() {
    if (--po === 0 && qi !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var e = qi;
      qi = null, Ka = 0, Ja = null;
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
  var Mf = M.S;
  M.S = function(e, t) {
    hm = $(), typeof t == "object" && t !== null && typeof t.then == "function" && Yy(e, t), Mf !== null && Mf(e, t);
  };
  var va = w(null);
  function ho() {
    var e = va.current;
    return e !== null ? e : He.pooledCache;
  }
  function ur(e, t) {
    t === null ? J(va, va.current) : J(va, t.pool);
  }
  function Nf() {
    var e = ho();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var Wa = Error(u(460)), vo = Error(u(474)), or = Error(u(542)), sr = { then: function() {
  } };
  function Df(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Zf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(cn, cn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rf(e), e;
      default:
        if (typeof t.status == "string") t.then(cn, cn);
        else {
          if (e = He, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Rf(e), e;
        }
        throw ga = t, Wa;
    }
  }
  function ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, Wa) : a;
    }
  }
  var ga = null;
  function Uf() {
    if (ga === null) throw Error(u(459));
    var e = ga;
    return ga = null, e;
  }
  function Rf(e) {
    if (e === Wa || e === or)
      throw Error(u(483));
  }
  var Pa = null, $i = 0;
  function cr(e) {
    var t = $i;
    return $i += 1, Pa === null && (Pa = []), Zf(Pa, e, t);
  }
  function Li(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function fr(e, t) {
    throw t.$$typeof === x ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Yf(e) {
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
      return T = dn(T, z), T.index = 0, T.sibling = null, T;
    }
    function c(T, z, E) {
      return T.index = E, e ? (E = T.alternate, E !== null ? (E = E.index, E < z ? (T.flags |= 67108866, z) : E) : (T.flags |= 67108866, z)) : (T.flags |= 1048576, z);
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, z, E, Z) {
      return z === null || z.tag !== 6 ? (z = ao(E, T.mode, Z), z.return = T, z) : (z = o(z, E), z.return = T, z);
    }
    function b(T, z, E, Z) {
      var ne = E.type;
      return ne === q ? N(
        T,
        z,
        E.props.children,
        Z,
        E.key
      ) : z !== null && (z.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === le && ya(ne) === z.type) ? (z = o(z, E.props), Li(z, E), z.return = T, z) : (z = ar(
        E.type,
        E.key,
        E.props,
        null,
        T.mode,
        Z
      ), Li(z, E), z.return = T, z);
    }
    function A(T, z, E, Z) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== E.containerInfo || z.stateNode.implementation !== E.implementation ? (z = io(E, T.mode, Z), z.return = T, z) : (z = o(z, E.children || []), z.return = T, z);
    }
    function N(T, z, E, Z, ne) {
      return z === null || z.tag !== 7 ? (z = da(
        E,
        T.mode,
        Z,
        ne
      ), z.return = T, z) : (z = o(z, E), z.return = T, z);
    }
    function R(T, z, E) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = ao(
          "" + z,
          T.mode,
          E
        ), z.return = T, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case k:
            return E = ar(
              z.type,
              z.key,
              z.props,
              null,
              T.mode,
              E
            ), Li(E, z), E.return = T, E;
          case j:
            return z = io(
              z,
              T.mode,
              E
            ), z.return = T, z;
          case le:
            return z = ya(z), R(T, z, E);
        }
        if (et(z) || de(z))
          return z = da(
            z,
            T.mode,
            E,
            null
          ), z.return = T, z;
        if (typeof z.then == "function")
          return R(T, cr(z), E);
        if (z.$$typeof === H)
          return R(
            T,
            rr(T, z),
            E
          );
        fr(T, z);
      }
      return null;
    }
    function O(T, z, E, Z) {
      var ne = z !== null ? z.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return ne !== null ? null : y(T, z, "" + E, Z);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            return E.key === ne ? b(T, z, E, Z) : null;
          case j:
            return E.key === ne ? A(T, z, E, Z) : null;
          case le:
            return E = ya(E), O(T, z, E, Z);
        }
        if (et(E) || de(E))
          return ne !== null ? null : N(T, z, E, Z, null);
        if (typeof E.then == "function")
          return O(
            T,
            z,
            cr(E),
            Z
          );
        if (E.$$typeof === H)
          return O(
            T,
            z,
            rr(T, E),
            Z
          );
        fr(T, E);
      }
      return null;
    }
    function C(T, z, E, Z, ne) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return T = T.get(E) || null, y(z, T, "" + Z, ne);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case k:
            return T = T.get(
              Z.key === null ? E : Z.key
            ) || null, b(z, T, Z, ne);
          case j:
            return T = T.get(
              Z.key === null ? E : Z.key
            ) || null, A(z, T, Z, ne);
          case le:
            return Z = ya(Z), C(
              T,
              z,
              E,
              Z,
              ne
            );
        }
        if (et(Z) || de(Z))
          return T = T.get(E) || null, N(z, T, Z, ne, null);
        if (typeof Z.then == "function")
          return C(
            T,
            z,
            E,
            cr(Z),
            ne
          );
        if (Z.$$typeof === H)
          return C(
            T,
            z,
            E,
            rr(z, Z),
            ne
          );
        fr(z, Z);
      }
      return null;
    }
    function F(T, z, E, Z) {
      for (var ne = null, Ee = null, ee = z, ce = z = 0, be = null; ee !== null && ce < E.length; ce++) {
        ee.index > ce ? (be = ee, ee = null) : be = ee.sibling;
        var Ae = O(
          T,
          ee,
          E[ce],
          Z
        );
        if (Ae === null) {
          ee === null && (ee = be);
          break;
        }
        e && ee && Ae.alternate === null && t(T, ee), z = c(Ae, z, ce), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae, ee = be;
      }
      if (ce === E.length)
        return a(T, ee), we && mn(T, ce), ne;
      if (ee === null) {
        for (; ce < E.length; ce++)
          ee = R(T, E[ce], Z), ee !== null && (z = c(
            ee,
            z,
            ce
          ), Ee === null ? ne = ee : Ee.sibling = ee, Ee = ee);
        return we && mn(T, ce), ne;
      }
      for (ee = l(ee); ce < E.length; ce++)
        be = C(
          ee,
          T,
          ce,
          E[ce],
          Z
        ), be !== null && (e && be.alternate !== null && ee.delete(
          be.key === null ? ce : be.key
        ), z = c(
          be,
          z,
          ce
        ), Ee === null ? ne = be : Ee.sibling = be, Ee = be);
      return e && ee.forEach(function(In) {
        return t(T, In);
      }), we && mn(T, ce), ne;
    }
    function ie(T, z, E, Z) {
      if (E == null) throw Error(u(151));
      for (var ne = null, Ee = null, ee = z, ce = z = 0, be = null, Ae = E.next(); ee !== null && !Ae.done; ce++, Ae = E.next()) {
        ee.index > ce ? (be = ee, ee = null) : be = ee.sibling;
        var In = O(T, ee, Ae.value, Z);
        if (In === null) {
          ee === null && (ee = be);
          break;
        }
        e && ee && In.alternate === null && t(T, ee), z = c(In, z, ce), Ee === null ? ne = In : Ee.sibling = In, Ee = In, ee = be;
      }
      if (Ae.done)
        return a(T, ee), we && mn(T, ce), ne;
      if (ee === null) {
        for (; !Ae.done; ce++, Ae = E.next())
          Ae = R(T, Ae.value, Z), Ae !== null && (z = c(Ae, z, ce), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae);
        return we && mn(T, ce), ne;
      }
      for (ee = l(ee); !Ae.done; ce++, Ae = E.next())
        Ae = C(ee, T, ce, Ae.value, Z), Ae !== null && (e && Ae.alternate !== null && ee.delete(Ae.key === null ? ce : Ae.key), z = c(Ae, z, ce), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae);
      return e && ee.forEach(function(Wg) {
        return t(T, Wg);
      }), we && mn(T, ce), ne;
    }
    function Ze(T, z, E, Z) {
      if (typeof E == "object" && E !== null && E.type === q && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case k:
            e: {
              for (var ne = E.key; z !== null; ) {
                if (z.key === ne) {
                  if (ne = E.type, ne === q) {
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
                  } else if (z.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === le && ya(ne) === z.type) {
                    a(
                      T,
                      z.sibling
                    ), Z = o(z, E.props), Li(Z, E), Z.return = T, T = Z;
                    break e;
                  }
                  a(T, z);
                  break;
                } else t(T, z);
                z = z.sibling;
              }
              E.type === q ? (Z = da(
                E.props.children,
                T.mode,
                Z,
                E.key
              ), Z.return = T, T = Z) : (Z = ar(
                E.type,
                E.key,
                E.props,
                null,
                T.mode,
                Z
              ), Li(Z, E), Z.return = T, T = Z);
            }
            return p(T);
          case j:
            e: {
              for (ne = E.key; z !== null; ) {
                if (z.key === ne)
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
              Z = io(E, T.mode, Z), Z.return = T, T = Z;
            }
            return p(T);
          case le:
            return E = ya(E), Ze(
              T,
              z,
              E,
              Z
            );
        }
        if (et(E))
          return F(
            T,
            z,
            E,
            Z
          );
        if (de(E)) {
          if (ne = de(E), typeof ne != "function") throw Error(u(150));
          return E = ne.call(E), ie(
            T,
            z,
            E,
            Z
          );
        }
        if (typeof E.then == "function")
          return Ze(
            T,
            z,
            cr(E),
            Z
          );
        if (E.$$typeof === H)
          return Ze(
            T,
            z,
            rr(T, E),
            Z
          );
        fr(T, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, z !== null && z.tag === 6 ? (a(T, z.sibling), Z = o(z, E), Z.return = T, T = Z) : (a(T, z), Z = ao(E, T.mode, Z), Z.return = T, T = Z), p(T)) : a(T, z);
    }
    return function(T, z, E, Z) {
      try {
        $i = 0;
        var ne = Ze(
          T,
          z,
          E,
          Z
        );
        return Pa = null, ne;
      } catch (ee) {
        if (ee === Wa || ee === or) throw ee;
        var Ee = Ct(29, ee, null, T.mode);
        return Ee.lanes = Z, Ee.return = T, Ee;
      }
    };
  }
  var _a = Yf(!0), Xf = Yf(!1), Un = !1;
  function yo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function go(e, t) {
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
  function Yn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Oe & 2) !== 0) {
      var o = l.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), l.pending = t, t = nr(e), wf(e, null, a), t;
    }
    return tr(e, l, t, a), nr(e);
  }
  function Vi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Oc(e, a);
    }
  }
  function _o(e, t) {
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
  var bo = !1;
  function Gi() {
    if (bo) {
      var e = Ja;
      if (e !== null) throw e;
    }
  }
  function Qi(e, t, a, l) {
    bo = !1;
    var o = e.updateQueue;
    Un = !1;
    var c = o.firstBaseUpdate, p = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var b = y, A = b.next;
      b.next = null, p === null ? c = A : p.next = A, p = b;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, y = N.lastBaseUpdate, y !== p && (y === null ? N.firstBaseUpdate = A : y.next = A, N.lastBaseUpdate = b));
    }
    if (c !== null) {
      var R = o.baseState;
      p = 0, N = A = b = null, y = c;
      do {
        var O = y.lane & -536870913, C = O !== y.lane;
        if (C ? (_e & O) === O : (l & O) === O) {
          O !== 0 && O === Ka && (bo = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, ie = y;
            O = t;
            var Ze = a;
            switch (ie.tag) {
              case 1:
                if (F = ie.payload, typeof F == "function") {
                  R = F.call(Ze, R, O);
                  break e;
                }
                R = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = ie.payload, O = typeof F == "function" ? F.call(Ze, R, O) : F, O == null) break e;
                R = S({}, R, O);
                break e;
              case 2:
                Un = !0;
            }
          }
          O = y.callback, O !== null && (e.flags |= 64, C && (e.flags |= 8192), C = o.callbacks, C === null ? o.callbacks = [O] : C.push(O));
        } else
          C = {
            lane: O,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, N === null ? (A = N = C, b = R) : N = N.next = C, p |= O;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null)
            break;
          C = y, y = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
        }
      } while (!0);
      N === null && (b = R), o.baseState = b, o.firstBaseUpdate = A, o.lastBaseUpdate = N, c === null && (o.shared.lanes = 0), $n |= p, e.lanes = p, e.memoizedState = R;
    }
  }
  function Hf(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function Bf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Hf(a[e], t);
  }
  var Fa = w(null), dr = w(0);
  function qf(e, t) {
    e = xn, J(dr, e), J(Fa, t), xn = e | t.baseLanes;
  }
  function So() {
    J(dr, xn), J(Fa, Fa.current);
  }
  function wo() {
    xn = dr.current, D(Fa), D(dr);
  }
  var jt = w(null), Lt = null;
  function Xn(e) {
    var t = e.alternate;
    J(Fe, Fe.current & 1), J(jt, e), Lt === null && (t === null || Fa.current !== null || t.memoizedState !== null) && (Lt = e);
  }
  function zo(e) {
    J(Fe, Fe.current), J(jt, e), Lt === null && (Lt = e);
  }
  function $f(e) {
    e.tag === 22 ? (J(Fe, Fe.current), J(jt, e), Lt === null && (Lt = e)) : Hn();
  }
  function Hn() {
    J(Fe, Fe.current), J(jt, jt.current);
  }
  function Mt(e) {
    D(jt), Lt === e && (Lt = null), D(Fe);
  }
  var Fe = w(0);
  function mr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Os(a) || Cs(a)))
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
  var vn = 0, se = null, Ne = null, at = null, pr = !1, Ia = !1, ba = !1, hr = 0, Ki = 0, ei = null, Hy = 0;
  function Ke() {
    throw Error(u(321));
  }
  function xo(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ot(e[a], t[a])) return !1;
    return !0;
  }
  function To(e, t, a, l, o, c) {
    return vn = c, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Ed : Ho, ba = !1, c = a(l, o), ba = !1, Ia && (c = Vf(
      t,
      a,
      l,
      o
    )), Lf(e), c;
  }
  function Lf(e) {
    M.H = Pi;
    var t = Ne !== null && Ne.next !== null;
    if (vn = 0, at = Ne = se = null, pr = !1, Ki = 0, ei = null, t) throw Error(u(300));
    e === null || it || (e = e.dependencies, e !== null && lr(e) && (it = !0));
  }
  function Vf(e, t, a, l) {
    se = e;
    var o = 0;
    do {
      if (Ia && (ei = null), Ki = 0, Ia = !1, 25 <= o) throw Error(u(301));
      if (o += 1, at = Ne = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      M.H = Ad, c = t(a, l);
    } while (Ia);
    return c;
  }
  function By() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ji(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (se.flags |= 1024), t;
  }
  function Eo() {
    var e = hr !== 0;
    return hr = 0, e;
  }
  function Ao(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function ko(e) {
    if (pr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      pr = !1;
    }
    vn = 0, at = Ne = se = null, Ia = !1, Ki = hr = 0, ei = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? se.memoizedState = at = e : at = at.next = e, at;
  }
  function Ie() {
    if (Ne === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = at === null ? se.memoizedState : at.next;
    if (t !== null)
      at = t, Ne = e;
    else {
      if (e === null)
        throw se.alternate === null ? Error(u(467)) : Error(u(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, at === null ? se.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function vr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ji(e) {
    var t = Ki;
    return Ki += 1, ei === null && (ei = []), e = Zf(ei, e, t), t = se, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Ed : Ho), e;
  }
  function yr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ji(e);
      if (e.$$typeof === H) return ft(e);
    }
    throw Error(u(438, String(e)));
  }
  function Oo(e) {
    var t = null, a = se.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = vr(), se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = Te;
    return t.index++, a;
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gr(e) {
    var t = Ie();
    return Co(t, Ne, e);
  }
  function Co(e, t, a) {
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
        var R = A.lane & -536870913;
        if (R !== A.lane ? (_e & R) === R : (vn & R) === R) {
          var O = A.revertLane;
          if (O === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), R === Ka && (N = !0);
          else if ((vn & O) === O) {
            A = A.next, O === Ka && (N = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, b === null ? (y = b = R, p = c) : b = b.next = R, se.lanes |= O, $n |= O;
          R = A.action, ba && a(c, R), c = A.hasEagerState ? A.eagerState : a(c, R);
        } else
          O = {
            lane: R,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, b === null ? (y = b = O, p = c) : b = b.next = O, se.lanes |= R, $n |= R;
        A = A.next;
      } while (A !== null && A !== t);
      if (b === null ? p = c : b.next = y, !Ot(c, e.memoizedState) && (it = !0, N && (a = Ja, a !== null)))
        throw a;
      e.memoizedState = c, e.baseState = p, e.baseQueue = b, l.lastRenderedState = c;
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jo(e) {
    var t = Ie(), a = t.queue;
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
  function Gf(e, t, a) {
    var l = se, o = Ie(), c = we;
    if (c) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var p = !Ot(
      (Ne || o).memoizedState,
      a
    );
    if (p && (o.memoizedState = a, it = !0), o = o.queue, Do(Jf.bind(null, l, o, e), [
      e
    ]), o.getSnapshot !== t || p || at !== null && at.memoizedState.tag & 1) {
      if (l.flags |= 2048, ti(
        9,
        { destroy: void 0 },
        Kf.bind(
          null,
          l,
          o,
          a,
          t
        ),
        null
      ), He === null) throw Error(u(349));
      c || (vn & 127) !== 0 || Qf(l, t, a);
    }
    return a;
  }
  function Qf(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = se.updateQueue, t === null ? (t = vr(), se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Kf(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Wf(t) && Pf(e);
  }
  function Jf(e, t, a) {
    return a(function() {
      Wf(t) && Pf(e);
    });
  }
  function Wf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return !0;
    }
  }
  function Pf(e) {
    var t = fa(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function Mo(e) {
    var t = vt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        On(!0);
        try {
          a();
        } finally {
          On(!1);
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
  function Ff(e, t, a, l) {
    return e.baseState = a, Co(
      e,
      Ne,
      typeof l == "function" ? l : yn
    );
  }
  function qy(e, t, a, l, o) {
    if (Sr(e)) throw Error(u(485));
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
      M.T !== null ? a(!0) : c.isTransition = !1, l(c), a = t.pending, a === null ? (c.next = t.pending = c, If(t, c)) : (c.next = a.next, t.pending = a.next = c);
    }
  }
  function If(e, t) {
    var a = t.action, l = t.payload, o = e.state;
    if (t.isTransition) {
      var c = M.T, p = {};
      M.T = p;
      try {
        var y = a(o, l), b = M.S;
        b !== null && b(p, y), ed(e, t, y);
      } catch (A) {
        No(e, t, A);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), M.T = c;
      }
    } else
      try {
        c = a(o, l), ed(e, t, c);
      } catch (A) {
        No(e, t, A);
      }
  }
  function ed(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        td(e, t, l);
      },
      function(l) {
        return No(e, t, l);
      }
    ) : td(e, t, a);
  }
  function td(e, t, a) {
    t.status = "fulfilled", t.value = a, nd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, If(e, a)));
  }
  function No(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, nd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function nd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ad(e, t) {
    return t;
  }
  function id(e, t) {
    if (we) {
      var a = He.formState;
      if (a !== null) {
        e: {
          var l = se;
          if (we) {
            if (qe) {
              t: {
                for (var o = qe, c = $t; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = Vt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                qe = Vt(
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
    return a = vt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ad,
      lastRenderedState: t
    }, a.queue = l, a = zd.bind(
      null,
      se,
      l
    ), l.dispatch = a, l = Mo(!1), c = Xo.bind(
      null,
      se,
      !1,
      l.queue
    ), l = vt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = o, a = qy.bind(
      null,
      se,
      o,
      c,
      a
    ), o.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function ld(e) {
    var t = Ie();
    return rd(t, Ne, e);
  }
  function rd(e, t, a) {
    if (t = Co(
      e,
      t,
      ad
    )[0], e = gr(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ji(t);
      } catch (p) {
        throw p === Wa ? or : p;
      }
    else l = t;
    t = Ie();
    var o = t.queue, c = o.dispatch;
    return a !== t.memoizedState && (se.flags |= 2048, ti(
      9,
      { destroy: void 0 },
      $y.bind(null, o, a),
      null
    )), [l, c, e];
  }
  function $y(e, t) {
    e.action = t;
  }
  function ud(e) {
    var t = Ie(), a = Ne;
    if (a !== null)
      return rd(t, a, e);
    Ie(), t = t.memoizedState, a = Ie();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ti(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = se.updateQueue, t === null && (t = vr(), se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function od() {
    return Ie().memoizedState;
  }
  function _r(e, t, a, l) {
    var o = vt();
    se.flags |= e, o.memoizedState = ti(
      1 | t,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function br(e, t, a, l) {
    var o = Ie();
    l = l === void 0 ? null : l;
    var c = o.memoizedState.inst;
    Ne !== null && l !== null && xo(l, Ne.memoizedState.deps) ? o.memoizedState = ti(t, c, a, l) : (se.flags |= e, o.memoizedState = ti(
      1 | t,
      c,
      a,
      l
    ));
  }
  function sd(e, t) {
    _r(8390656, 8, e, t);
  }
  function Do(e, t) {
    br(2048, 8, e, t);
  }
  function Ly(e) {
    se.flags |= 4;
    var t = se.updateQueue;
    if (t === null)
      t = vr(), se.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function cd(e) {
    var t = Ie().memoizedState;
    return Ly({ ref: t, nextImpl: e }), function() {
      if ((Oe & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fd(e, t) {
    return br(4, 2, e, t);
  }
  function dd(e, t) {
    return br(4, 4, e, t);
  }
  function md(e, t) {
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
  function pd(e, t, a) {
    a = a != null ? a.concat([e]) : null, br(4, 4, md.bind(null, t, e), a);
  }
  function Zo() {
  }
  function hd(e, t) {
    var a = Ie();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && xo(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function vd(e, t) {
    var a = Ie();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && xo(t, l[1]))
      return l[0];
    if (l = e(), ba) {
      On(!0);
      try {
        e();
      } finally {
        On(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Uo(e, t, a) {
    return a === void 0 || (vn & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = ym(), se.lanes |= e, $n |= e, a);
  }
  function yd(e, t, a, l) {
    return Ot(a, t) ? a : Fa.current !== null ? (e = Uo(e, a, l), Ot(e, t) || (it = !0), e) : (vn & 42) === 0 || (vn & 1073741824) !== 0 && (_e & 261930) === 0 ? (it = !0, e.memoizedState = a) : (e = ym(), se.lanes |= e, $n |= e, t);
  }
  function gd(e, t, a, l, o) {
    var c = G.p;
    G.p = c !== 0 && 8 > c ? c : 8;
    var p = M.T, y = {};
    M.T = y, Xo(e, !1, t, a);
    try {
      var b = o(), A = M.S;
      if (A !== null && A(y, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var N = Xy(
          b,
          l
        );
        Wi(
          e,
          t,
          N,
          Zt(e)
        );
      } else
        Wi(
          e,
          t,
          l,
          Zt(e)
        );
    } catch (R) {
      Wi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: R },
        Zt()
      );
    } finally {
      G.p = c, p !== null && y.types !== null && (p.types = y.types), M.T = p;
    }
  }
  function Vy() {
  }
  function Ro(e, t, a, l) {
    if (e.tag !== 5) throw Error(u(476));
    var o = _d(e).queue;
    gd(
      e,
      o,
      t,
      I,
      a === null ? Vy : function() {
        return bd(e), a(l);
      }
    );
  }
  function _d(e) {
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
        lastRenderedReducer: yn,
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
        lastRenderedReducer: yn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function bd(e) {
    var t = _d(e);
    t.next === null && (t = e.alternate.memoizedState), Wi(
      e,
      t.next.queue,
      {},
      Zt()
    );
  }
  function Yo() {
    return ft(ml);
  }
  function Sd() {
    return Ie().memoizedState;
  }
  function wd() {
    return Ie().memoizedState;
  }
  function Gy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Zt();
          e = Rn(a);
          var l = Yn(t, e, a);
          l !== null && (Tt(l, t, a), Vi(l, t, a)), t = { cache: mo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Qy(e, t, a) {
    var l = Zt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sr(e) ? xd(t, a) : (a = to(e, t, a, l), a !== null && (Tt(a, e, l), Td(a, t, l)));
  }
  function zd(e, t, a) {
    var l = Zt();
    Wi(e, t, a, l);
  }
  function Wi(e, t, a, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Sr(e)) xd(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, y = c(p, a);
          if (o.hasEagerState = !0, o.eagerState = y, Ot(y, p))
            return tr(e, t, o, 0), He === null && er(), !1;
        } catch {
        }
      if (a = to(e, t, o, l), a !== null)
        return Tt(a, e, l), Td(a, t, l), !0;
    }
    return !1;
  }
  function Xo(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: ys(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sr(e)) {
      if (t) throw Error(u(479));
    } else
      t = to(
        e,
        a,
        l,
        2
      ), t !== null && Tt(t, e, 2);
  }
  function Sr(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se;
  }
  function xd(e, t) {
    Ia = pr = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Td(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Oc(e, a);
    }
  }
  var Pi = {
    readContext: ft,
    use: yr,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useLayoutEffect: Ke,
    useInsertionEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    useHostTransitionStatus: Ke,
    useFormState: Ke,
    useActionState: Ke,
    useOptimistic: Ke,
    useMemoCache: Ke,
    useCacheRefresh: Ke
  };
  Pi.useEffectEvent = Ke;
  var Ed = {
    readContext: ft,
    use: yr,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ft,
    useEffect: sd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, _r(
        4194308,
        4,
        md.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      _r(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = vt();
      t = t === void 0 ? null : t;
      var l = e();
      if (ba) {
        On(!0);
        try {
          e();
        } finally {
          On(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = vt();
      if (a !== void 0) {
        var o = a(t);
        if (ba) {
          On(!0);
          try {
            a(t);
          } finally {
            On(!1);
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
        se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Mo(e);
      var t = e.queue, a = zd.bind(null, se, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Zo,
    useDeferredValue: function(e, t) {
      var a = vt();
      return Uo(a, e, t);
    },
    useTransition: function() {
      var e = Mo(!1);
      return e = gd.bind(
        null,
        se,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = se, o = vt();
      if (we) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = t(), He === null)
          throw Error(u(349));
        (_e & 127) !== 0 || Qf(l, t, a);
      }
      o.memoizedState = a;
      var c = { value: a, getSnapshot: t };
      return o.queue = c, sd(Jf.bind(null, l, c, e), [
        e
      ]), l.flags |= 2048, ti(
        9,
        { destroy: void 0 },
        Kf.bind(
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
      var e = vt(), t = He.identifierPrefix;
      if (we) {
        var a = rn, l = ln;
        a = (l & ~(1 << 32 - kt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hr++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Hy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Yo,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e) {
      var t = vt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Xo.bind(
        null,
        se,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Oo,
    useCacheRefresh: function() {
      return vt().memoizedState = Gy.bind(
        null,
        se
      );
    },
    useEffectEvent: function(e) {
      var t = vt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Oe & 2) !== 0)
          throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ho = {
    readContext: ft,
    use: yr,
    useCallback: hd,
    useContext: ft,
    useEffect: Do,
    useImperativeHandle: pd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: vd,
    useReducer: gr,
    useRef: od,
    useState: function() {
      return gr(yn);
    },
    useDebugValue: Zo,
    useDeferredValue: function(e, t) {
      var a = Ie();
      return yd(
        a,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = gr(yn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Ji(e),
        t
      ];
    },
    useSyncExternalStore: Gf,
    useId: Sd,
    useHostTransitionStatus: Yo,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(e, t) {
      var a = Ie();
      return Ff(a, Ne, e, t);
    },
    useMemoCache: Oo,
    useCacheRefresh: wd
  };
  Ho.useEffectEvent = cd;
  var Ad = {
    readContext: ft,
    use: yr,
    useCallback: hd,
    useContext: ft,
    useEffect: Do,
    useImperativeHandle: pd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: vd,
    useReducer: jo,
    useRef: od,
    useState: function() {
      return jo(yn);
    },
    useDebugValue: Zo,
    useDeferredValue: function(e, t) {
      var a = Ie();
      return Ne === null ? Uo(a, e, t) : yd(
        a,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = jo(yn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Ji(e),
        t
      ];
    },
    useSyncExternalStore: Gf,
    useId: Sd,
    useHostTransitionStatus: Yo,
    useFormState: ud,
    useActionState: ud,
    useOptimistic: function(e, t) {
      var a = Ie();
      return Ne !== null ? Ff(a, Ne, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Oo,
    useCacheRefresh: wd
  };
  Ad.useEffectEvent = cd;
  function Bo(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qo = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Zt(), o = Rn(l);
      o.payload = t, a != null && (o.callback = a), t = Yn(e, o, l), t !== null && (Tt(t, e, l), Vi(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Zt(), o = Rn(l);
      o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Yn(e, o, l), t !== null && (Tt(t, e, l), Vi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Zt(), l = Rn(a);
      l.tag = 2, t != null && (l.callback = t), t = Yn(e, l, a), t !== null && (Tt(t, e, a), Vi(t, e, a));
    }
  };
  function kd(e, t, a, l, o, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Ri(a, l) || !Ri(o, c) : !0;
  }
  function Od(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && qo.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
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
  function Cd(e) {
    Il(e);
  }
  function jd(e) {
    console.error(e);
  }
  function Md(e) {
    Il(e);
  }
  function wr(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Nd(e, t, a) {
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
  function $o(e, t, a) {
    return a = Rn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      wr(e, t);
    }, a;
  }
  function Dd(e) {
    return e = Rn(e), e.tag = 3, e;
  }
  function Zd(e, t, a, l) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = l.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        Nd(t, a, l);
      };
    }
    var p = a.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Nd(t, a, l), typeof o != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
      var y = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function Ky(e, t, a, l, o) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Qa(
        t,
        a,
        o,
        !0
      ), a = jt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Lt === null ? Dr() : a.alternate === null && Je === 0 && (Je = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, l === sr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), ps(e, l, o)), !1;
          case 22:
            return a.flags |= 65536, l === sr ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), ps(e, l, o)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return ps(e, l, o), Dr(), !1;
    }
    if (we)
      return t = jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, l !== uo && (e = Error(u(422), { cause: l }), Hi(Ht(e, a)))) : (l !== uo && (t = Error(u(423), {
        cause: l
      }), Hi(
        Ht(t, a)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, l = Ht(l, a), o = $o(
        e.stateNode,
        l,
        o
      ), _o(e, o), Je !== 4 && (Je = 2)), !1;
    var c = Error(u(520), { cause: l });
    if (c = Ht(c, a), ll === null ? ll = [c] : ll.push(c), Je !== 4 && (Je = 2), t === null) return !0;
    l = Ht(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = o & -o, a.lanes |= e, e = $o(a.stateNode, l, e), _o(a, e), !1;
        case 1:
          if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Ln === null || !Ln.has(c))))
            return a.flags |= 65536, o &= -o, a.lanes |= o, o = Dd(o), Zd(
              o,
              e,
              a,
              l
            ), _o(a, o), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Lo = Error(u(461)), it = !1;
  function dt(e, t, a, l) {
    t.child = e === null ? Xf(t, null, a, l) : _a(
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
    return ha(t), l = To(
      e,
      t,
      a,
      p,
      c,
      o
    ), y = Eo(), e !== null && !it ? (Ao(e, t, o), gn(e, t, o)) : (we && y && lo(t), t.flags |= 1, dt(e, t, l, o), t.child);
  }
  function Rd(e, t, a, l, o) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" && !no(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Yd(
        e,
        t,
        c,
        l,
        o
      )) : (e = ar(
        a.type,
        null,
        l,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Fo(e, o)) {
      var p = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ri, a(p, l) && e.ref === t.ref)
        return gn(e, t, o);
    }
    return t.flags |= 1, e = dn(c, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Yd(e, t, a, l, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ri(c, l) && e.ref === t.ref)
        if (it = !1, t.pendingProps = l = c, Fo(e, o))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, gn(e, t, o);
    }
    return Vo(
      e,
      t,
      a,
      l,
      o
    );
  }
  function Xd(e, t, a, l) {
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
        return Hd(
          e,
          t,
          c,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ur(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? qf(t, c) : So(), $f(t);
      else
        return l = t.lanes = 536870912, Hd(
          e,
          t,
          c !== null ? c.baseLanes | a : a,
          a,
          l
        );
    } else
      c !== null ? (ur(t, c.cachePool), qf(t, c), Hn(), t.memoizedState = null) : (e !== null && ur(t, null), So(), Hn());
    return dt(e, t, o, a), t.child;
  }
  function Fi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Hd(e, t, a, l, o) {
    var c = ho();
    return c = c === null ? null : { parent: nt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && ur(t, null), So(), $f(t), e !== null && Qa(e, t, l, !0), t.childLanes = o, null;
  }
  function zr(e, t) {
    return t = Tr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Bd(e, t, a) {
    return _a(t, e.child, null, a), e = zr(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function Jy(e, t, a) {
    var l = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (l.mode === "hidden")
          return e = zr(t, l), t.lanes = 536870912, Fi(null, e);
        if (zo(t), (e = qe) ? (e = Im(
          e,
          $t
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: ln, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = xf(e), a.return = t, t.child = a, ct = t, qe = null)) : e = null, e === null) throw Dn(t);
        return t.lanes = 536870912, null;
      }
      return zr(t, l);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (zo(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = Bd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (it || Qa(e, t, a, !1), o = (a & e.childLanes) !== 0, it || o) {
        if (l = He, l !== null && (p = Cc(l, a), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, fa(e, p), Tt(l, e, p), Lo;
        Dr(), t = Bd(
          e,
          t,
          a
        );
      } else
        e = c.treeContext, qe = Vt(p.nextSibling), ct = t, we = !0, Nn = null, $t = !1, e !== null && Af(t, e), t = zr(t, l), t.flags |= 4096;
      return t;
    }
    return e = dn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xr(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Vo(e, t, a, l, o) {
    return ha(t), a = To(
      e,
      t,
      a,
      l,
      void 0,
      o
    ), l = Eo(), e !== null && !it ? (Ao(e, t, o), gn(e, t, o)) : (we && l && lo(t), t.flags |= 1, dt(e, t, a, o), t.child);
  }
  function qd(e, t, a, l, o, c) {
    return ha(t), t.updateQueue = null, a = Vf(
      t,
      l,
      a,
      o
    ), Lf(e), l = Eo(), e !== null && !it ? (Ao(e, t, c), gn(e, t, c)) : (we && l && lo(t), t.flags |= 1, dt(e, t, a, c), t.child);
  }
  function $d(e, t, a, l, o) {
    if (ha(t), t.stateNode === null) {
      var c = $a, p = a.contextType;
      typeof p == "object" && p !== null && (c = ft(p)), c = new a(l, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = qo, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = l, c.state = t.memoizedState, c.refs = {}, yo(t), p = a.contextType, c.context = typeof p == "object" && p !== null ? ft(p) : $a, c.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Bo(
        t,
        a,
        p,
        l
      ), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && qo.enqueueReplaceState(c, c.state, null), Qi(t, l, c, o), Gi(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps, b = Sa(a, y);
      c.props = b;
      var A = c.context, N = a.contextType;
      p = $a, typeof N == "object" && N !== null && (p = ft(N));
      var R = a.getDerivedStateFromProps;
      N = typeof R == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, N || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || A !== p) && Od(
        t,
        c,
        l,
        p
      ), Un = !1;
      var O = t.memoizedState;
      c.state = O, Qi(t, l, c, o), Gi(), A = t.memoizedState, y || O !== A || Un ? (typeof R == "function" && (Bo(
        t,
        a,
        R,
        l
      ), A = t.memoizedState), (b = Un || kd(
        t,
        a,
        b,
        l,
        O,
        A,
        p
      )) ? (N || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = A), c.props = l, c.state = A, c.context = p, l = b) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      c = t.stateNode, go(e, t), p = t.memoizedProps, N = Sa(a, p), c.props = N, R = t.pendingProps, O = c.context, A = a.contextType, b = $a, typeof A == "object" && A !== null && (b = ft(A)), y = a.getDerivedStateFromProps, (A = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== R || O !== b) && Od(
        t,
        c,
        l,
        b
      ), Un = !1, O = t.memoizedState, c.state = O, Qi(t, l, c, o), Gi();
      var C = t.memoizedState;
      p !== R || O !== C || Un || e !== null && e.dependencies !== null && lr(e.dependencies) ? (typeof y == "function" && (Bo(
        t,
        a,
        y,
        l
      ), C = t.memoizedState), (N = Un || kd(
        t,
        a,
        N,
        l,
        O,
        C,
        b
      ) || e !== null && e.dependencies !== null && lr(e.dependencies)) ? (A || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, C, b), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        C,
        b
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = C), c.props = l, c.state = C, c.context = b, l = N) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return c = l, xr(e, t), l = (t.flags & 128) !== 0, c || l ? (c = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && l ? (t.child = _a(
      t,
      e.child,
      null,
      o
    ), t.child = _a(
      t,
      null,
      a,
      o
    )) : dt(e, t, a, o), t.memoizedState = c.state, e = t.child) : e = gn(
      e,
      t,
      o
    ), e;
  }
  function Ld(e, t, a, l) {
    return ma(), t.flags |= 256, dt(e, t, a, l), t.child;
  }
  var Go = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qo(e) {
    return { baseLanes: e, cachePool: Nf() };
  }
  function Ko(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Dt), e;
  }
  function Vd(e, t, a) {
    var l = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (o ? Xn(t) : Hn(), (e = qe) ? (e = Im(
          e,
          $t
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? { id: ln, overflow: rn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = xf(e), a.return = t, t.child = a, ct = t, qe = null)) : e = null, e === null) throw Dn(t);
        return Cs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var y = l.children;
      return l = l.fallback, o ? (Hn(), o = t.mode, y = Tr(
        { mode: "hidden", children: y },
        o
      ), l = da(
        l,
        o,
        a,
        null
      ), y.return = t, l.return = t, y.sibling = l, t.child = y, l = t.child, l.memoizedState = Qo(a), l.childLanes = Ko(
        e,
        p,
        a
      ), t.memoizedState = Go, Fi(null, l)) : (Xn(t), Jo(t, y));
    }
    var b = e.memoizedState;
    if (b !== null && (y = b.dehydrated, y !== null)) {
      if (c)
        t.flags & 256 ? (Xn(t), t.flags &= -257, t = Wo(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Hn(), t.child = e.child, t.flags |= 128, t = null) : (Hn(), y = l.fallback, o = t.mode, l = Tr(
          { mode: "visible", children: l.children },
          o
        ), y = da(
          y,
          o,
          a,
          null
        ), y.flags |= 2, l.return = t, y.return = t, l.sibling = y, t.child = l, _a(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Qo(a), l.childLanes = Ko(
          e,
          p,
          a
        ), t.memoizedState = Go, t = Fi(null, l));
      else if (Xn(t), Cs(y)) {
        if (p = y.nextSibling && y.nextSibling.dataset, p) var A = p.dgst;
        p = A, l = Error(u(419)), l.stack = "", l.digest = p, Hi({ value: l, source: null, stack: null }), t = Wo(
          e,
          t,
          a
        );
      } else if (it || Qa(e, t, a, !1), p = (a & e.childLanes) !== 0, it || p) {
        if (p = He, p !== null && (l = Cc(p, a), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, fa(e, l), Tt(p, e, l), Lo;
        Os(y) || Dr(), t = Wo(
          e,
          t,
          a
        );
      } else
        Os(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, qe = Vt(
          y.nextSibling
        ), ct = t, we = !0, Nn = null, $t = !1, e !== null && Af(t, e), t = Jo(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Hn(), y = l.fallback, o = t.mode, b = e.child, A = b.sibling, l = dn(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, A !== null ? y = dn(
      A,
      y
    ) : (y = da(
      y,
      o,
      a,
      null
    ), y.flags |= 2), y.return = t, l.return = t, l.sibling = y, t.child = l, Fi(null, l), l = t.child, y = e.child.memoizedState, y === null ? y = Qo(a) : (o = y.cachePool, o !== null ? (b = nt._currentValue, o = o.parent !== b ? { parent: b, pool: b } : o) : o = Nf(), y = {
      baseLanes: y.baseLanes | a,
      cachePool: o
    }), l.memoizedState = y, l.childLanes = Ko(
      e,
      p,
      a
    ), t.memoizedState = Go, Fi(e.child, l)) : (Xn(t), a = e.child, e = a.sibling, a = dn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Jo(e, t) {
    return t = Tr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Tr(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function Wo(e, t, a) {
    return _a(t, e.child, null, a), e = Jo(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Gd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), co(e.return, t, a);
  }
  function Po(e, t, a, l, o, c) {
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
  function Qd(e, t, a) {
    var l = t.pendingProps, o = l.revealOrder, c = l.tail;
    l = l.children;
    var p = Fe.current, y = (p & 2) !== 0;
    if (y ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, J(Fe, p), dt(e, t, l, a), l = we ? Xi : 0, !y && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Gd(e, a, t);
        else if (e.tag === 19)
          Gd(e, a, t);
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
          e = a.alternate, e !== null && mr(e) === null && (o = a), a = a.sibling;
        a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Po(
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
          if (e = o.alternate, e !== null && mr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = a, a = o, o = e;
        }
        Po(
          t,
          !0,
          a,
          null,
          c,
          l
        );
        break;
      case "together":
        Po(
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
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Qa(
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
      for (e = t.child, a = dn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = dn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Fo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && lr(e)));
  }
  function Wy(e, t, a) {
    switch (t.tag) {
      case 3:
        tt(t, t.stateNode.containerInfo), Zn(t, nt, e.memoizedState.cache), ma();
        break;
      case 27:
      case 5:
        en(t);
        break;
      case 4:
        tt(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, zo(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Xn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Vd(e, t, a) : (Xn(t), e = gn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Xn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Qa(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), o) {
          if (l)
            return Qd(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(Fe, Fe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Xd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Zn(t, nt, e.memoizedState.cache);
    }
    return gn(e, t, a);
  }
  function Kd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!Fo(e, a) && (t.flags & 128) === 0)
          return it = !1, Wy(
            e,
            t,
            a
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, we && (t.flags & 1048576) !== 0 && Ef(t, Xi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ya(t.elementType), t.type = e, typeof e == "function")
            no(e) ? (l = Sa(e, l), t.tag = 1, t = $d(
              null,
              t,
              e,
              l,
              a
            )) : (t.tag = 0, t = Vo(
              null,
              t,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === X) {
                t.tag = 11, t = Ud(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              } else if (o === L) {
                t.tag = 14, t = Rd(
                  null,
                  t,
                  e,
                  l,
                  a
                );
                break e;
              }
            }
            throw t = Le(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Vo(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, o = Sa(
          l,
          t.pendingProps
        ), $d(
          e,
          t,
          l,
          o,
          a
        );
      case 3:
        e: {
          if (tt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, go(e, t), Qi(t, l, null, a);
          var p = t.memoizedState;
          if (l = p.cache, Zn(t, nt, l), l !== c.cache && fo(
            t,
            [nt],
            a,
            !0
          ), Gi(), l = p.element, c.isDehydrated)
            if (c = {
              element: l,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Ld(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== o) {
              o = Ht(
                Error(u(424)),
                t
              ), Hi(o), t = Ld(
                e,
                t,
                l,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, qe = Vt(e.firstChild), ct = t, we = !0, Nn = null, $t = !0, a = Xf(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ma(), l === o) {
              t = gn(
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
        return xr(e, t), e === null ? (a = lp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : we || (a = t.type, e = t.pendingProps, l = Br(
          oe.current
        ).createElement(a), l[st] = t, l[_t] = e, mt(l, a, e), ut(l), t.stateNode = l) : t.memoizedState = lp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return en(t), e === null && we && (l = t.stateNode = np(
          t.type,
          t.pendingProps,
          oe.current
        ), ct = t, $t = !0, o = qe, Kn(t.type) ? (js = o, qe = Vt(l.firstChild)) : qe = o), dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), xr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((o = l = qe) && (l = Eg(
          l,
          t.type,
          t.pendingProps,
          $t
        ), l !== null ? (t.stateNode = l, ct = t, qe = Vt(l.firstChild), $t = !1, o = !0) : o = !1), o || Dn(t)), en(t), o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, l = c.children, Es(o, c) ? l = null : p !== null && Es(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = To(
          e,
          t,
          By,
          null,
          null,
          a
        ), ml._currentValue = o), xr(e, t), dt(e, t, l, a), t.child;
      case 6:
        return e === null && we && ((e = a = qe) && (a = Ag(
          a,
          t.pendingProps,
          $t
        ), a !== null ? (t.stateNode = a, ct = t, qe = null, e = !0) : e = !1), e || Dn(t)), null;
      case 13:
        return Vd(e, t, a);
      case 4:
        return tt(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = _a(
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
        return o = t.type._context, l = t.pendingProps.children, ha(t), o = ft(o), l = l(o), t.flags |= 1, dt(e, t, l, a), t.child;
      case 14:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Yd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Qd(e, t, a);
      case 31:
        return Jy(e, t, a);
      case 22:
        return Xd(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ha(t), l = ft(nt), e === null ? (o = ho(), o === null && (o = He, c = mo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), t.memoizedState = { parent: l, cache: o }, yo(t), Zn(t, nt, o)) : ((e.lanes & a) !== 0 && (go(e, t), Qi(t, null, null, a), Gi()), o = e.memoizedState, c = t.memoizedState, o.parent !== l ? (o = { parent: l, cache: l }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Zn(t, nt, l)) : (l = c.cache, Zn(t, nt, l), l !== o.cache && fo(
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
  function _n(e) {
    e.flags |= 4;
  }
  function Io(e, t, a, l, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Sm()) e.flags |= 8192;
        else
          throw ga = sr, vo;
    } else e.flags &= -16777217;
  }
  function Jd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !cp(t))
      if (Sm()) e.flags |= 8192;
      else
        throw ga = sr, vo;
  }
  function Er(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ac() : 536870912, e.lanes |= t, li |= t);
  }
  function Ii(e, t) {
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
  function $e(e) {
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
    switch (ro(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return $e(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), hn(nt), Xe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ga(t) ? _n(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, oo())), $e(t), null;
      case 26:
        var o = t.type, c = t.memoizedState;
        return e === null ? (_n(t), c !== null ? ($e(t), Jd(t, c)) : ($e(t), Io(
          t,
          o,
          null,
          l,
          a
        ))) : c ? c !== e.memoizedState ? (_n(t), $e(t), Jd(t, c)) : ($e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && _n(t), $e(t), Io(
          t,
          o,
          e,
          l,
          a
        )), null;
      case 27:
        if (tn(t), a = oe.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _n(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return $e(t), null;
          }
          e = W.current, Ga(t) ? kf(t) : (e = np(o, l, a), t.stateNode = e, _n(t));
        }
        return $e(t), null;
      case 5:
        if (tn(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && _n(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(u(166));
            return $e(t), null;
          }
          if (c = W.current, Ga(t))
            kf(t);
          else {
            var p = Br(
              oe.current
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
            c[st] = t, c[_t] = l;
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
            l && _n(t);
          }
        }
        return $e(t), Io(
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
            throw Error(u(166));
          if (e = oe.current, Ga(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, o = ct, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            e[st] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Vm(e.nodeValue, a)), e || Dn(t, !0);
          } else
            e = Br(e).createTextNode(
              l
            ), e[st] = t, t.stateNode = e;
        }
        return $e(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ga(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[st] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), e = !1;
          } else
            a = oo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return $e(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ga(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[st] = t;
            } else
              ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), o = !1;
          } else
            o = oo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool), c = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== o && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Er(t, t.updateQueue), $e(t), null);
      case 4:
        return Xe(), e === null && Ss(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return hn(t.type), $e(t), null;
      case 19:
        if (D(Fe), l = t.memoizedState, l === null) return $e(t), null;
        if (o = (t.flags & 128) !== 0, c = l.rendering, c === null)
          if (o) Ii(l, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = mr(e), c !== null) {
                  for (t.flags |= 128, Ii(l, !1), e = c.updateQueue, t.updateQueue = e, Er(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    zf(a, e), a = a.sibling;
                  return J(
                    Fe,
                    Fe.current & 1 | 2
                  ), we && mn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && $() > jr && (t.flags |= 128, o = !0, Ii(l, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = mr(c), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Er(t, e), Ii(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !we)
                return $e(t), null;
            } else
              2 * $() - l.renderingStartTime > jr && a !== 536870912 && (t.flags |= 128, o = !0, Ii(l, !1), t.lanes = 4194304);
          l.isBackwards ? (c.sibling = t.child, t.child = c) : (e = l.last, e !== null ? e.sibling = c : t.child = c, l.last = c);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = $(), e.sibling = null, a = Fe.current, J(
          Fe,
          o ? a & 1 | 2 : a & 1
        ), we && mn(t, l.treeForkCount), e) : ($e(t), null);
      case 22:
      case 23:
        return Mt(t), wo(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), a = t.updateQueue, a !== null && Er(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && D(va), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), hn(nt), $e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Fy(e, t) {
    switch (ro(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return hn(nt), Xe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return tn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(u(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return D(Fe), null;
      case 4:
        return Xe(), null;
      case 10:
        return hn(t.type), null;
      case 22:
      case 23:
        return Mt(t), wo(), e !== null && D(va), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return hn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wd(e, t) {
    switch (ro(t), t.tag) {
      case 3:
        hn(nt), Xe();
        break;
      case 26:
      case 27:
      case 5:
        tn(t);
        break;
      case 4:
        Xe();
        break;
      case 31:
        t.memoizedState !== null && Mt(t);
        break;
      case 13:
        Mt(t);
        break;
      case 19:
        D(Fe);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        Mt(t), wo(), e !== null && D(va);
        break;
      case 24:
        hn(nt);
    }
  }
  function el(e, t) {
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
      Me(t, t.return, y);
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
                Me(
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
      Me(t, t.return, N);
    }
  }
  function Pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Bf(t, a);
      } catch (l) {
        Me(e, e.return, l);
      }
    }
  }
  function Fd(e, t, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Me(e, t, l);
    }
  }
  function tl(e, t) {
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
      Me(e, t, o);
    }
  }
  function un(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Me(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Me(e, t, o);
        }
      else a.current = null;
  }
  function Id(e) {
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
      Me(e, e.return, o);
    }
  }
  function es(e, t, a) {
    try {
      var l = e.stateNode;
      bg(l, e.type, a, t), l[_t] = t;
    } catch (o) {
      Me(e, e.return, o);
    }
  }
  function em(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Kn(e.type) || e.tag === 4;
  }
  function ts(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || em(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Kn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ns(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = cn));
    else if (l !== 4 && (l === 27 && Kn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (ns(e, t, a), e = e.sibling; e !== null; )
        ns(e, t, a), e = e.sibling;
  }
  function Ar(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Kn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Ar(e, t, a), e = e.sibling; e !== null; )
        Ar(e, t, a), e = e.sibling;
  }
  function tm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      mt(t, l, a), t[st] = e, t[_t] = a;
    } catch (c) {
      Me(e, e.return, c);
    }
  }
  var bn = !1, lt = !1, as = !1, nm = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function Iy(e, t) {
    if (e = e.containerInfo, xs = Kr, e = pf(e), Ju(e)) {
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
            var p = 0, y = -1, b = -1, A = 0, N = 0, R = e, O = null;
            t: for (; ; ) {
              for (var C; R !== a || o !== 0 && R.nodeType !== 3 || (y = p + o), R !== c || l !== 0 && R.nodeType !== 3 || (b = p + l), R.nodeType === 3 && (p += R.nodeValue.length), (C = R.firstChild) !== null; )
                O = R, R = C;
              for (; ; ) {
                if (R === e) break t;
                if (O === a && ++A === o && (y = p), O === c && ++N === l && (b = p), (C = R.nextSibling) !== null) break;
                R = O, O = R.parentNode;
              }
              R = C;
            }
            a = y === -1 || b === -1 ? null : { start: y, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ts = { focusedElem: e, selectionRange: a }, Kr = !1, ot = t; ot !== null; )
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
                  var F = Sa(
                    a.type,
                    o
                  );
                  e = l.getSnapshotBeforeUpdate(
                    F,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ie) {
                  Me(
                    a,
                    a.return,
                    ie
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  ks(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ks(e);
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
  function am(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        wn(e, a), l & 4 && el(5, a);
        break;
      case 1:
        if (wn(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Me(a, a.return, p);
            }
          else {
            var o = Sa(
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
              Me(
                a,
                a.return,
                p
              );
            }
          }
        l & 64 && Pd(a), l & 512 && tl(a, a.return);
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
            Bf(e, t);
          } catch (p) {
            Me(a, a.return, p);
          }
        }
        break;
      case 27:
        t === null && l & 4 && tm(a);
      case 26:
      case 5:
        wn(e, a), t === null && l & 4 && Id(a), l & 512 && tl(a, a.return);
        break;
      case 12:
        wn(e, a);
        break;
      case 31:
        wn(e, a), l & 4 && rm(e, a);
        break;
      case 13:
        wn(e, a), l & 4 && um(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = og.bind(
          null,
          a
        ), kg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || bn, !l) {
          t = t !== null && t.memoizedState !== null || lt, o = bn;
          var c = lt;
          bn = l, (lt = t) && !c ? zn(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : wn(e, a), bn = o, lt = c;
        }
        break;
      case 30:
        break;
      default:
        wn(e, a);
    }
  }
  function im(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, im(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Mu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ve = null, St = !1;
  function Sn(e, t, a) {
    for (a = a.child; a !== null; )
      lm(e, t, a), a = a.sibling;
  }
  function lm(e, t, a) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(Ti, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        lt || un(a, t), Sn(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        lt || un(a, t);
        var l = Ve, o = St;
        Kn(a.type) && (Ve = a.stateNode, St = !1), Sn(
          e,
          t,
          a
        ), cl(a.stateNode), Ve = l, St = o;
        break;
      case 5:
        lt || un(a, t);
      case 6:
        if (l = Ve, o = St, Ve = null, Sn(
          e,
          t,
          a
        ), Ve = l, St = o, Ve !== null)
          if (St)
            try {
              (Ve.nodeType === 9 ? Ve.body : Ve.nodeName === "HTML" ? Ve.ownerDocument.body : Ve).removeChild(a.stateNode);
            } catch (c) {
              Me(
                a,
                t,
                c
              );
            }
          else
            try {
              Ve.removeChild(a.stateNode);
            } catch (c) {
              Me(
                a,
                t,
                c
              );
            }
        break;
      case 18:
        Ve !== null && (St ? (e = Ve, Pm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), mi(e)) : Pm(Ve, a.stateNode));
        break;
      case 4:
        l = Ve, o = St, Ve = a.stateNode.containerInfo, St = !0, Sn(
          e,
          t,
          a
        ), Ve = l, St = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bn(2, a, t), lt || Bn(4, a, t), Sn(
          e,
          t,
          a
        );
        break;
      case 1:
        lt || (un(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Fd(
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
  function rm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        mi(e);
      } catch (a) {
        Me(t, t.return, a);
      }
    }
  }
  function um(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        mi(e);
      } catch (a) {
        Me(t, t.return, a);
      }
  }
  function eg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new nm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new nm()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function kr(e, t) {
    var a = eg(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var o = sg.bind(null, e, l);
        l.then(o, o);
      }
    });
  }
  function wt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var o = a[l], c = e, p = t, y = p;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Kn(y.type)) {
                Ve = y.stateNode, St = !1;
                break e;
              }
              break;
            case 5:
              Ve = y.stateNode, St = !1;
              break e;
            case 3:
            case 4:
              Ve = y.stateNode.containerInfo, St = !0;
              break e;
          }
          y = y.return;
        }
        if (Ve === null) throw Error(u(160));
        lm(c, p, o), Ve = null, St = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        om(t, e), t = t.sibling;
  }
  var Wt = null;
  function om(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wt(t, e), zt(e), l & 4 && (Bn(3, e, e.return), el(3, e), Bn(5, e, e.return));
        break;
      case 1:
        wt(t, e), zt(e), l & 512 && (lt || a === null || un(a, a.return)), l & 64 && bn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var o = Wt;
        if (wt(t, e), zt(e), l & 512 && (lt || a === null || un(a, a.return)), l & 4) {
          var c = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (l) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[ki] || c[st] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(l), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), mt(c, l, a), c[st] = e, ut(c), l = c;
                      break e;
                    case "link":
                      var p = op(
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
                      if (p = op(
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
                sp(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = up(
                o,
                l,
                e.memoizedProps
              );
          else
            c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, l === null ? sp(
              o,
              e.type,
              e.stateNode
            ) : up(
              o,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && es(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        wt(t, e), zt(e), l & 512 && (lt || a === null || un(a, a.return)), a !== null && l & 4 && es(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (wt(t, e), zt(e), l & 512 && (lt || a === null || un(a, a.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Ua(o, "");
          } catch (F) {
            Me(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (o = e.memoizedProps, es(
          e,
          o,
          a !== null ? a.memoizedProps : o
        )), l & 1024 && (as = !0);
        break;
      case 6:
        if (wt(t, e), zt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (F) {
            Me(e, e.return, F);
          }
        }
        break;
      case 3:
        if (Lr = null, o = Wt, Wt = qr(t.containerInfo), wt(t, e), Wt = o, zt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            mi(t.containerInfo);
          } catch (F) {
            Me(e, e.return, F);
          }
        as && (as = !1, sm(e));
        break;
      case 4:
        l = Wt, Wt = qr(
          e.stateNode.containerInfo
        ), wt(t, e), zt(e), Wt = l;
        break;
      case 12:
        wt(t, e), zt(e);
        break;
      case 31:
        wt(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, kr(e, l)));
        break;
      case 13:
        wt(t, e), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Cr = $()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, kr(e, l)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null, A = bn, N = lt;
        if (bn = A || o, lt = N || b, wt(t, e), lt = N, bn = A, zt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || b || bn || lt || wa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
                try {
                  if (c = b.stateNode, o)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    y = b.stateNode;
                    var R = b.memoizedProps.style, O = R != null && R.hasOwnProperty("display") ? R.display : null;
                    y.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (F) {
                  Me(b, b.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = o ? "" : b.memoizedProps;
                } catch (F) {
                  Me(b, b.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                b = t;
                try {
                  var C = b.stateNode;
                  o ? Fm(C, !0) : Fm(b.stateNode, !1);
                } catch (F) {
                  Me(b, b.return, F);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, kr(e, a))));
        break;
      case 19:
        wt(t, e), zt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, kr(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wt(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (em(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode, c = ts(e);
            Ar(e, c, o);
            break;
          case 5:
            var p = a.stateNode;
            a.flags & 32 && (Ua(p, ""), a.flags &= -33);
            var y = ts(e);
            Ar(e, y, p);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, A = ts(e);
            ns(
              e,
              A,
              b
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (N) {
        Me(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        sm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function wn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        am(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bn(4, t, t.return), wa(t);
          break;
        case 1:
          un(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Fd(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          cl(t.stateNode);
        case 26:
        case 5:
          un(t, t.return), wa(t);
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
      var l = t.alternate, o = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            o,
            c,
            a
          ), el(4, c);
          break;
        case 1:
          if (zn(
            o,
            c,
            a
          ), l = c, o = l.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (A) {
              Me(l, l.return, A);
            }
          if (l = c, o = l.updateQueue, o !== null) {
            var y = l.stateNode;
            try {
              var b = o.shared.hiddenCallbacks;
              if (b !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < b.length; o++)
                  Hf(b[o], y);
            } catch (A) {
              Me(l, l.return, A);
            }
          }
          a && p & 64 && Pd(c), tl(c, c.return);
          break;
        case 27:
          tm(c);
        case 26:
        case 5:
          zn(
            o,
            c,
            a
          ), a && l === null && p & 4 && Id(c), tl(c, c.return);
          break;
        case 12:
          zn(
            o,
            c,
            a
          );
          break;
        case 31:
          zn(
            o,
            c,
            a
          ), a && p & 4 && rm(o, c);
          break;
        case 13:
          zn(
            o,
            c,
            a
          ), a && p & 4 && um(o, c);
          break;
        case 22:
          c.memoizedState === null && zn(
            o,
            c,
            a
          ), tl(c, c.return);
          break;
        case 30:
          break;
        default:
          zn(
            o,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function is(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Bi(a));
  }
  function ls(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bi(e));
  }
  function Pt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        cm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function cm(e, t, a, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          a,
          l
        ), o & 2048 && el(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Pt(
          e,
          t,
          a,
          l
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Bi(e)));
        break;
      case 12:
        if (o & 2048) {
          Pt(
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
            Me(t, t.return, b);
          }
        } else
          Pt(
            e,
            t,
            a,
            l
          );
        break;
      case 31:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 13:
        Pt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? Pt(
          e,
          t,
          a,
          l
        ) : nl(e, t) : c._visibility & 2 ? Pt(
          e,
          t,
          a,
          l
        ) : (c._visibility |= 2, ni(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && is(p, t);
        break;
      case 24:
        Pt(
          e,
          t,
          a,
          l
        ), o & 2048 && ls(t.alternate, t);
        break;
      default:
        Pt(
          e,
          t,
          a,
          l
        );
    }
  }
  function ni(e, t, a, l, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, y = a, b = l, A = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ni(
            c,
            p,
            y,
            b,
            o
          ), el(8, p);
          break;
        case 23:
          break;
        case 22:
          var N = p.stateNode;
          p.memoizedState !== null ? N._visibility & 2 ? ni(
            c,
            p,
            y,
            b,
            o
          ) : nl(
            c,
            p
          ) : (N._visibility |= 2, ni(
            c,
            p,
            y,
            b,
            o
          )), o && A & 2048 && is(
            p.alternate,
            p
          );
          break;
        case 24:
          ni(
            c,
            p,
            y,
            b,
            o
          ), o && A & 2048 && ls(p.alternate, p);
          break;
        default:
          ni(
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
  function nl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, o = l.flags;
        switch (l.tag) {
          case 22:
            nl(a, l), o & 2048 && is(
              l.alternate,
              l
            );
            break;
          case 24:
            nl(a, l), o & 2048 && ls(l.alternate, l);
            break;
          default:
            nl(a, l);
        }
        t = t.sibling;
      }
  }
  var al = 8192;
  function ai(e, t, a) {
    if (e.subtreeFlags & al)
      for (e = e.child; e !== null; )
        fm(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function fm(e, t, a) {
    switch (e.tag) {
      case 26:
        ai(
          e,
          t,
          a
        ), e.flags & al && e.memoizedState !== null && Hg(
          a,
          Wt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ai(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var l = Wt;
        Wt = qr(e.stateNode.containerInfo), ai(
          e,
          t,
          a
        ), Wt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = al, al = 16777216, ai(
          e,
          t,
          a
        ), al = l) : ai(
          e,
          t,
          a
        ));
        break;
      default:
        ai(
          e,
          t,
          a
        );
    }
  }
  function dm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function il(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ot = l, pm(
            l,
            e
          );
        }
      dm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        mm(e), e = e.sibling;
  }
  function mm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        il(e), e.flags & 2048 && Bn(9, e, e.return);
        break;
      case 3:
        il(e);
        break;
      case 12:
        il(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Or(e)) : il(e);
        break;
      default:
        il(e);
    }
  }
  function Or(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ot = l, pm(
            l,
            e
          );
        }
      dm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, t, t.return), Or(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Or(t));
          break;
        default:
          Or(t);
      }
      e = e.sibling;
    }
  }
  function pm(e, t) {
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
          Bi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ot = l;
      else
        e: for (a = e; ot !== null; ) {
          l = ot;
          var o = l.sibling, c = l.return;
          if (im(l), l === a) {
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
  }, ng = typeof WeakMap == "function" ? WeakMap : Map, Oe = 0, He = null, me = null, _e = 0, je = 0, Nt = null, qn = !1, ii = !1, rs = !1, xn = 0, Je = 0, $n = 0, za = 0, us = 0, Dt = 0, li = 0, ll = null, xt = null, os = !1, Cr = 0, hm = 0, jr = 1 / 0, Mr = null, Ln = null, rt = 0, Vn = null, ri = null, Tn = 0, ss = 0, cs = null, vm = null, rl = 0, fs = null;
  function Zt() {
    return (Oe & 2) !== 0 && _e !== 0 ? _e & -_e : M.T !== null ? ys() : jc();
  }
  function ym() {
    if (Dt === 0)
      if ((_e & 536870912) === 0 || we) {
        var e = Hl;
        Hl <<= 1, (Hl & 3932160) === 0 && (Hl = 262144), Dt = e;
      } else Dt = 536870912;
    return e = jt.current, e !== null && (e.flags |= 32), Dt;
  }
  function Tt(e, t, a) {
    (e === He && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (ui(e, 0), Gn(
      e,
      _e,
      Dt,
      !1
    )), Ai(e, a), ((Oe & 2) === 0 || e !== He) && (e === He && ((Oe & 2) === 0 && (za |= a), Je === 4 && Gn(
      e,
      _e,
      Dt,
      !1
    )), on(e));
  }
  function gm(e, t, a) {
    if ((Oe & 6) !== 0) throw Error(u(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ei(e, t), o = l ? lg(e, t) : ms(e, t, !0), c = l;
    do {
      if (o === 0) {
        ii && !l && Gn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, c && !ag(a)) {
          o = ms(e, t, !1), c = !1;
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
              o = ll;
              var b = y.current.memoizedState.isDehydrated;
              if (b && (ui(y, p).flags |= 256), p = ms(
                y,
                p,
                !1
              ), p !== 2) {
                if (rs && !b) {
                  y.errorRecoveryDisabledLanes |= c, za |= c, o = 4;
                  break e;
                }
                c = xt, xt = o, c !== null && (xt === null ? xt = c : xt.push.apply(
                  xt,
                  c
                ));
              }
              o = p;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          ui(e, 0), Gn(e, t, 0, !0);
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
                Dt,
                !qn
              );
              break e;
            case 2:
              xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = Cr + 300 - $(), 10 < o)) {
            if (Gn(
              l,
              t,
              Dt,
              !qn
            ), ql(l, 0, !0) !== 0) break e;
            Tn = t, l.timeoutHandle = Jm(
              _m.bind(
                null,
                l,
                a,
                xt,
                Mr,
                os,
                t,
                Dt,
                za,
                li,
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
          _m(
            l,
            a,
            xt,
            Mr,
            os,
            t,
            Dt,
            za,
            li,
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
  function _m(e, t, a, l, o, c, p, y, b, A, N, R, O, C) {
    if (e.timeoutHandle = -1, R = t.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
      R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: cn
      }, fm(
        t,
        c,
        R
      );
      var F = (c & 62914560) === c ? Cr - $() : (c & 4194048) === c ? hm - $() : 0;
      if (F = Bg(
        R,
        F
      ), F !== null) {
        Tn = c, e.cancelPendingCommit = F(
          Am.bind(
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
            R,
            null,
            O,
            C
          )
        ), Gn(e, c, p, !A);
        return;
      }
    }
    Am(
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
    t &= ~us, t &= ~za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - kt(o), p = 1 << c;
      l[c] = -1, o &= ~p;
    }
    a !== 0 && kc(e, a, t);
  }
  function Nr() {
    return (Oe & 6) === 0 ? (ul(0), !1) : !0;
  }
  function ds() {
    if (me !== null) {
      if (je === 0)
        var e = me.return;
      else
        e = me, pn = pa = null, ko(e), Pa = null, $i = 0, e = me;
      for (; e !== null; )
        Wd(e.alternate, e), e = e.return;
      me = null;
    }
  }
  function ui(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, zg(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Tn = 0, ds(), He = e, me = a = dn(e.current, null), _e = t, je = 0, Nt = null, qn = !1, ii = Ei(e, t), rs = !1, li = Dt = us = za = $n = Je = 0, xt = ll = null, os = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - kt(l), c = 1 << o;
        t |= e[o], l &= ~c;
      }
    return xn = t, er(), a;
  }
  function bm(e, t) {
    se = null, M.H = Pi, t === Wa || t === or ? (t = Uf(), je = 3) : t === vo ? (t = Uf(), je = 4) : je = t === Lo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Nt = t, me === null && (Je = 1, wr(
      e,
      Ht(t, e.current)
    ));
  }
  function Sm() {
    var e = jt.current;
    return e === null ? !0 : (_e & 4194048) === _e ? Lt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === Lt : !1;
  }
  function wm() {
    var e = M.H;
    return M.H = Pi, e === null ? Pi : e;
  }
  function zm() {
    var e = M.A;
    return M.A = tg, e;
  }
  function Dr() {
    Je = 4, qn || (_e & 4194048) !== _e && jt.current !== null || (ii = !0), ($n & 134217727) === 0 && (za & 134217727) === 0 || He === null || Gn(
      He,
      _e,
      Dt,
      !1
    );
  }
  function ms(e, t, a) {
    var l = Oe;
    Oe |= 2;
    var o = wm(), c = zm();
    (He !== e || _e !== t) && (Mr = null, ui(e, t)), t = !1;
    var p = Je;
    e: do
      try {
        if (je !== 0 && me !== null) {
          var y = me, b = Nt;
          switch (je) {
            case 8:
              ds(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jt.current === null && (t = !0);
              var A = je;
              if (je = 0, Nt = null, oi(e, y, b, A), a && ii) {
                p = 0;
                break e;
              }
              break;
            default:
              A = je, je = 0, Nt = null, oi(e, y, b, A);
          }
        }
        ig(), p = Je;
        break;
      } catch (N) {
        bm(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, pn = pa = null, Oe = l, M.H = o, M.A = c, me === null && (He = null, _e = 0, er()), p;
  }
  function ig() {
    for (; me !== null; ) xm(me);
  }
  function lg(e, t) {
    var a = Oe;
    Oe |= 2;
    var l = wm(), o = zm();
    He !== e || _e !== t ? (Mr = null, jr = $() + 500, ui(e, t)) : ii = Ei(
      e,
      t
    );
    e: do
      try {
        if (je !== 0 && me !== null) {
          t = me;
          var c = Nt;
          t: switch (je) {
            case 1:
              je = 0, Nt = null, oi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Df(c)) {
                je = 0, Nt = null, Tm(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || He !== e || (je = 7), on(e);
              }, c.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Df(c) ? (je = 0, Nt = null, Tm(t)) : (je = 0, Nt = null, oi(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (me.tag) {
                case 26:
                  p = me.memoizedState;
                case 5:
                case 27:
                  var y = me;
                  if (p ? cp(p) : y.stateNode.complete) {
                    je = 0, Nt = null;
                    var b = y.sibling;
                    if (b !== null) me = b;
                    else {
                      var A = y.return;
                      A !== null ? (me = A, Zr(A)) : me = null;
                    }
                    break t;
                  }
              }
              je = 0, Nt = null, oi(e, t, c, 5);
              break;
            case 6:
              je = 0, Nt = null, oi(e, t, c, 6);
              break;
            case 8:
              ds(), Je = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        rg();
        break;
      } catch (N) {
        bm(e, N);
      }
    while (!0);
    return pn = pa = null, M.H = l, M.A = o, Oe = a, me !== null ? 0 : (He = null, _e = 0, er(), Je);
  }
  function rg() {
    for (; me !== null && !Eu(); )
      xm(me);
  }
  function xm(e) {
    var t = Kd(e.alternate, e, xn);
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : me = t;
  }
  function Tm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          _e
        );
        break;
      case 11:
        t = qd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          _e
        );
        break;
      case 5:
        ko(t);
      default:
        Wd(a, t), t = me = zf(t, xn), t = Kd(a, t, xn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : me = t;
  }
  function oi(e, t, a, l) {
    pn = pa = null, ko(t), Pa = null, $i = 0;
    var o = t.return;
    try {
      if (Ky(
        e,
        o,
        t,
        a,
        _e
      )) {
        Je = 1, wr(
          e,
          Ht(a, e.current)
        ), me = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw me = o, c;
      Je = 1, wr(
        e,
        Ht(a, e.current)
      ), me = null;
      return;
    }
    t.flags & 32768 ? (we || l === 1 ? e = !0 : ii || (_e & 536870912) !== 0 ? e = !1 : (qn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = jt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Em(t, e)) : Zr(t);
  }
  function Zr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Em(
          t,
          qn
        );
        return;
      }
      e = t.return;
      var a = Py(
        t.alternate,
        t,
        xn
      );
      if (a !== null) {
        me = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function Em(e, t) {
    do {
      var a = Fy(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, me = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        me = e;
        return;
      }
      me = e = a;
    } while (e !== null);
    Je = 6, me = null;
  }
  function Am(e, t, a, l, o, c, p, y, b) {
    e.cancelPendingCommit = null;
    do
      Ur();
    while (rt !== 0);
    if ((Oe & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= eo, Xv(
        e,
        a,
        c,
        p,
        y,
        b
      ), e === He && (me = He = null, _e = 0), ri = t, Vn = e, Tn = a, ss = c, cs = o, vm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cg(Yl, function() {
        return Mm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, o = G.p, G.p = 2, p = Oe, Oe |= 4;
        try {
          Iy(e, t, a);
        } finally {
          Oe = p, G.p = o, M.T = l;
        }
      }
      rt = 1, km(), Om(), Cm();
    }
  }
  function km() {
    if (rt === 1) {
      rt = 0;
      var e = Vn, t = ri, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var l = G.p;
        G.p = 2;
        var o = Oe;
        Oe |= 4;
        try {
          om(t, e);
          var c = Ts, p = pf(e.containerInfo), y = c.focusedElem, b = c.selectionRange;
          if (p !== y && y && y.ownerDocument && mf(
            y.ownerDocument.documentElement,
            y
          )) {
            if (b !== null && Ju(y)) {
              var A = b.start, N = b.end;
              if (N === void 0 && (N = A), "selectionStart" in y)
                y.selectionStart = A, y.selectionEnd = Math.min(
                  N,
                  y.value.length
                );
              else {
                var R = y.ownerDocument || document, O = R && R.defaultView || window;
                if (O.getSelection) {
                  var C = O.getSelection(), F = y.textContent.length, ie = Math.min(b.start, F), Ze = b.end === void 0 ? ie : Math.min(b.end, F);
                  !C.extend && ie > Ze && (p = Ze, Ze = ie, ie = p);
                  var T = df(
                    y,
                    ie
                  ), z = df(
                    y,
                    Ze
                  );
                  if (T && z && (C.rangeCount !== 1 || C.anchorNode !== T.node || C.anchorOffset !== T.offset || C.focusNode !== z.node || C.focusOffset !== z.offset)) {
                    var E = R.createRange();
                    E.setStart(T.node, T.offset), C.removeAllRanges(), ie > Ze ? (C.addRange(E), C.extend(z.node, z.offset)) : (E.setEnd(z.node, z.offset), C.addRange(E));
                  }
                }
              }
            }
            for (R = [], C = y; C = C.parentNode; )
              C.nodeType === 1 && R.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < R.length; y++) {
              var Z = R[y];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Kr = !!xs, Ts = xs = null;
        } finally {
          Oe = o, G.p = l, M.T = a;
        }
      }
      e.current = t, rt = 2;
    }
  }
  function Om() {
    if (rt === 2) {
      rt = 0;
      var e = Vn, t = ri, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var l = G.p;
        G.p = 2;
        var o = Oe;
        Oe |= 4;
        try {
          am(e, t.alternate, t);
        } finally {
          Oe = o, G.p = l, M.T = a;
        }
      }
      rt = 3;
    }
  }
  function Cm() {
    if (rt === 4 || rt === 3) {
      rt = 0, Au();
      var e = Vn, t = ri, a = Tn, l = vm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, ri = Vn = null, jm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Ln = null), Cu(a), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(
            Ti,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, o = G.p, G.p = 2, M.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < l.length; p++) {
            var y = l[p];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          M.T = t, G.p = o;
        }
      }
      (Tn & 3) !== 0 && Ur(), on(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === fs ? rl++ : (rl = 0, fs = e) : rl = 0, ul(0);
    }
  }
  function jm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Bi(t)));
  }
  function Ur() {
    return km(), Om(), Cm(), Mm();
  }
  function Mm() {
    if (rt !== 5) return !1;
    var e = Vn, t = ss;
    ss = 0;
    var a = Cu(Tn), l = M.T, o = G.p;
    try {
      G.p = 32 > a ? 32 : a, M.T = null, a = cs, cs = null;
      var c = Vn, p = Tn;
      if (rt = 0, ri = Vn = null, Tn = 0, (Oe & 6) !== 0) throw Error(u(331));
      var y = Oe;
      if (Oe |= 4, mm(c.current), cm(
        c,
        c.current,
        p,
        a
      ), Oe = y, ul(0, !1), At && typeof At.onPostCommitFiberRoot == "function")
        try {
          At.onPostCommitFiberRoot(Ti, c);
        } catch {
        }
      return !0;
    } finally {
      G.p = o, M.T = l, jm(e, t);
    }
  }
  function Nm(e, t, a) {
    t = Ht(a, t), t = $o(e.stateNode, t, 2), e = Yn(e, t, 2), e !== null && (Ai(e, 2), on(e));
  }
  function Me(e, t, a) {
    if (e.tag === 3)
      Nm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ln === null || !Ln.has(l))) {
            e = Ht(a, e), a = Dd(2), l = Yn(t, a, 2), l !== null && (Zd(
              a,
              l,
              t,
              e
            ), Ai(l, 2), on(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function ps(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ng();
      var o = /* @__PURE__ */ new Set();
      l.set(t, o);
    } else
      o = l.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(t, o));
    o.has(a) || (rs = !0, o.add(a), e = ug.bind(null, e, t, a), t.then(e, e));
  }
  function ug(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, He === e && (_e & a) === a && (Je === 4 || Je === 3 && (_e & 62914560) === _e && 300 > $() - Cr ? (Oe & 2) === 0 && ui(e, 0) : us |= a, li === _e && (li = 0)), on(e);
  }
  function Dm(e, t) {
    t === 0 && (t = Ac()), e = fa(e, t), e !== null && (Ai(e, t), on(e));
  }
  function og(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Dm(e, a);
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
    l !== null && l.delete(t), Dm(e, a);
  }
  function cg(e, t) {
    return kn(e, t);
  }
  var Rr = null, si = null, hs = !1, Yr = !1, vs = !1, Qn = 0;
  function on(e) {
    e !== si && e.next === null && (si === null ? Rr = si = e : si = si.next = e), Yr = !0, hs || (hs = !0, dg());
  }
  function ul(e, t) {
    if (!vs && Yr) {
      vs = !0;
      do
        for (var a = !1, l = Rr; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var p = l.suspendedLanes, y = l.pingedLanes;
              c = (1 << 31 - kt(42 | e) + 1) - 1, c &= o & ~(p & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, Ym(l, c));
          } else
            c = _e, c = ql(
              l,
              l === He ? c : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (c & 3) === 0 || Ei(l, c) || (a = !0, Ym(l, c));
          l = l.next;
        }
      while (a);
      vs = !1;
    }
  }
  function fg() {
    Zm();
  }
  function Zm() {
    Yr = hs = !1;
    var e = 0;
    Qn !== 0 && wg() && (e = Qn);
    for (var t = $(), a = null, l = Rr; l !== null; ) {
      var o = l.next, c = Um(l, t);
      c === 0 ? (l.next = null, a === null ? Rr = o : a.next = o, o === null && (si = a)) : (a = l, (e !== 0 || (c & 3) !== 0) && (Yr = !0)), l = o;
    }
    rt !== 0 && rt !== 5 || ul(e), Qn !== 0 && (Qn = 0);
  }
  function Um(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - kt(c), y = 1 << p, b = o[p];
      b === -1 ? ((y & a) === 0 || (y & l) !== 0) && (o[p] = Yv(y, t)) : b <= t && (e.expiredLanes |= y), c &= ~y;
    }
    if (t = He, a = _e, a = ql(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && xi(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ei(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && xi(l), Cu(a)) {
        case 2:
        case 8:
          a = an;
          break;
        case 32:
          a = Yl;
          break;
        case 268435456:
          a = Ec;
          break;
        default:
          a = Yl;
      }
      return l = Rm.bind(null, e), a = kn(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && xi(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rm(e, t) {
    if (rt !== 0 && rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ur() && e.callbackNode !== a)
      return null;
    var l = _e;
    return l = ql(
      e,
      e === He ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (gm(e, l, t), Um(e, $()), e.callbackNode != null && e.callbackNode === a ? Rm.bind(null, e) : null);
  }
  function Ym(e, t) {
    if (Ur()) return null;
    gm(e, t, !0);
  }
  function dg() {
    xg(function() {
      (Oe & 6) !== 0 ? kn(
        xe,
        fg
      ) : Zm();
    });
  }
  function ys() {
    if (Qn === 0) {
      var e = Ka;
      e === 0 && (e = Xl, Xl <<= 1, (Xl & 261888) === 0 && (Xl = 256)), Qn = e;
    }
    return Qn;
  }
  function Xm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Gl("" + e);
  }
  function Hm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function mg(e, t, a, l, o) {
    if (t === "submit" && a && a.stateNode === o) {
      var c = Xm(
        (o[_t] || null).action
      ), p = l.submitter;
      p && (t = (t = p[_t] || null) ? Xm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var y = new Wl(
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
                  var b = p ? Hm(o, p) : new FormData(o);
                  Ro(
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
                typeof c == "function" && (y.preventDefault(), b = p ? Hm(o, p) : new FormData(o), Ro(
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
  for (var gs = 0; gs < Iu.length; gs++) {
    var _s = Iu[gs], pg = _s.toLowerCase(), hg = _s[0].toUpperCase() + _s.slice(1);
    Jt(
      pg,
      "on" + hg
    );
  }
  Jt(yf, "onAnimationEnd"), Jt(gf, "onAnimationIteration"), Jt(_f, "onAnimationStart"), Jt("dblclick", "onDoubleClick"), Jt("focusin", "onFocus"), Jt("focusout", "onBlur"), Jt(jy, "onTransitionRun"), Jt(My, "onTransitionStart"), Jt(Ny, "onTransitionCancel"), Jt(bf, "onTransitionEnd"), Da("onMouseEnter", ["mouseout", "mouseover"]), Da("onMouseLeave", ["mouseout", "mouseover"]), Da("onPointerEnter", ["pointerout", "pointerover"]), Da("onPointerLeave", ["pointerout", "pointerover"]), ua(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ua(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ua("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ua(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ua(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ua(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ol = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol)
  );
  function Bm(e, t) {
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
              Il(N);
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
              Il(N);
            }
            o.currentTarget = null, c = b;
          }
      }
    }
  }
  function pe(e, t) {
    var a = t[ju];
    a === void 0 && (a = t[ju] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (qm(t, e, 2, !1), a.add(l));
  }
  function bs(e, t, a) {
    var l = 0;
    t && (l |= 4), qm(
      a,
      e,
      l,
      t
    );
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ss(e) {
    if (!e[Xr]) {
      e[Xr] = !0, Dc.forEach(function(a) {
        a !== "selectionchange" && (vg.has(a) || bs(a, !1, e), bs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, bs("selectionchange", !1, t));
    }
  }
  function qm(e, t, a, l) {
    switch (yp(t)) {
      case 2:
        var o = Lg;
        break;
      case 8:
        o = Vg;
        break;
      default:
        o = Us;
    }
    a = o.bind(
      null,
      t,
      a,
      e
    ), o = void 0, !Hu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), l ? o !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
      passive: o
    }) : e.addEventListener(t, a, !1);
  }
  function ws(e, t, a, l, o) {
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
            if (p = ja(y), p === null) return;
            if (b = p.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = c = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Gc(function() {
      var A = c, N = Yu(a), R = [];
      e: {
        var O = Sf.get(e);
        if (O !== void 0) {
          var C = Wl, F = e;
          switch (e) {
            case "keypress":
              if (Kl(a) === 0) break e;
            case "keydown":
            case "keyup":
              C = sy;
              break;
            case "focusin":
              F = "focus", C = Lu;
              break;
            case "focusout":
              F = "blur", C = Lu;
              break;
            case "beforeblur":
            case "afterblur":
              C = Lu;
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
              C = Jc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Pv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = dy;
              break;
            case yf:
            case gf:
            case _f:
              C = ey;
              break;
            case bf:
              C = py;
              break;
            case "scroll":
            case "scrollend":
              C = Jv;
              break;
            case "wheel":
              C = vy;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Pc;
              break;
            case "toggle":
            case "beforetoggle":
              C = gy;
          }
          var ie = (t & 4) !== 0, Ze = !ie && (e === "scroll" || e === "scrollend"), T = ie ? O !== null ? O + "Capture" : null : O;
          ie = [];
          for (var z = A, E; z !== null; ) {
            var Z = z;
            if (E = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || E === null || T === null || (Z = Ci(z, T), Z != null && ie.push(
              sl(z, Z, E)
            )), Ze) break;
            z = z.return;
          }
          0 < ie.length && (O = new C(
            O,
            F,
            null,
            a,
            N
          ), R.push({ event: O, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", O && a !== Ru && (F = a.relatedTarget || a.fromElement) && (ja(F) || F[Ca]))
            break e;
          if ((C || O) && (O = N.window === N ? N : (O = N.ownerDocument) ? O.defaultView || O.parentWindow : window, C ? (F = a.relatedTarget || a.toElement, C = A, F = F ? ja(F) : null, F !== null && (Ze = f(F), ie = F.tag, F !== Ze || ie !== 5 && ie !== 27 && ie !== 6) && (F = null)) : (C = null, F = A), C !== F)) {
            if (ie = Jc, Z = "onMouseLeave", T = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ie = Pc, Z = "onPointerLeave", T = "onPointerEnter", z = "pointer"), Ze = C == null ? O : Oi(C), E = F == null ? O : Oi(F), O = new ie(
              Z,
              z + "leave",
              C,
              a,
              N
            ), O.target = Ze, O.relatedTarget = E, Z = null, ja(N) === A && (ie = new ie(
              T,
              z + "enter",
              F,
              a,
              N
            ), ie.target = E, ie.relatedTarget = Ze, Z = ie), Ze = Z, C && F)
              t: {
                for (ie = yg, T = C, z = F, E = 0, Z = T; Z; Z = ie(Z))
                  E++;
                Z = 0;
                for (var ne = z; ne; ne = ie(ne))
                  Z++;
                for (; 0 < E - Z; )
                  T = ie(T), E--;
                for (; 0 < Z - E; )
                  z = ie(z), Z--;
                for (; E--; ) {
                  if (T === z || z !== null && T === z.alternate) {
                    ie = T;
                    break t;
                  }
                  T = ie(T), z = ie(z);
                }
                ie = null;
              }
            else ie = null;
            C !== null && $m(
              R,
              O,
              C,
              ie,
              !1
            ), F !== null && Ze !== null && $m(
              R,
              Ze,
              F,
              ie,
              !0
            );
          }
        }
        e: {
          if (O = A ? Oi(A) : window, C = O.nodeName && O.nodeName.toLowerCase(), C === "select" || C === "input" && O.type === "file")
            var Ee = rf;
          else if (af(O))
            if (uf)
              Ee = ky;
            else {
              Ee = Ey;
              var ee = Ty;
            }
          else
            C = O.nodeName, !C || C.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? A && Uu(A.elementType) && (Ee = rf) : Ee = Ay;
          if (Ee && (Ee = Ee(e, A))) {
            lf(
              R,
              Ee,
              a,
              N
            );
            break e;
          }
          ee && ee(e, O, A), e === "focusout" && A && O.type === "number" && A.memoizedProps.value != null && Zu(O, "number", O.value);
        }
        switch (ee = A ? Oi(A) : window, e) {
          case "focusin":
            (af(ee) || ee.contentEditable === "true") && (Ha = ee, Wu = A, Yi = null);
            break;
          case "focusout":
            Yi = Wu = Ha = null;
            break;
          case "mousedown":
            Pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pu = !1, hf(R, a, N);
            break;
          case "selectionchange":
            if (Cy) break;
          case "keydown":
          case "keyup":
            hf(R, a, N);
        }
        var ce;
        if (Gu)
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
          Xa ? tf(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (Fc && a.locale !== "ko" && (Xa || be !== "onCompositionStart" ? be === "onCompositionEnd" && Xa && (ce = Qc()) : (jn = N, Bu = "value" in jn ? jn.value : jn.textContent, Xa = !0)), ee = Hr(A, be), 0 < ee.length && (be = new Wc(
          be,
          e,
          null,
          a,
          N
        ), R.push({ event: be, listeners: ee }), ce ? be.data = ce : (ce = nf(a), ce !== null && (be.data = ce)))), (ce = by ? Sy(e, a) : wy(e, a)) && (be = Hr(A, "onBeforeInput"), 0 < be.length && (ee = new Wc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          N
        ), R.push({
          event: ee,
          listeners: be
        }), ee.data = ce)), mg(
          R,
          e,
          A,
          a,
          N
        );
      }
      Bm(R, t);
    });
  }
  function sl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Hr(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Ci(e, a), o != null && l.unshift(
        sl(e, o, c)
      ), o = Ci(e, t), o != null && l.push(
        sl(e, o, c)
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
  function $m(e, t, a, l, o) {
    for (var c = t._reactName, p = []; a !== null && a !== l; ) {
      var y = a, b = y.alternate, A = y.stateNode;
      if (y = y.tag, b !== null && b === l) break;
      y !== 5 && y !== 26 && y !== 27 || A === null || (b = A, o ? (A = Ci(a, c), A != null && p.unshift(
        sl(a, A, b)
      )) : o || (A = Ci(a, c), A != null && p.push(
        sl(a, A, b)
      ))), a = a.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var gg = /\r\n?/g, _g = /\u0000|\uFFFD/g;
  function Lm(e) {
    return (typeof e == "string" ? e : "" + e).replace(gg, `
`).replace(_g, "");
  }
  function Vm(e, t) {
    return t = Lm(t), Lm(e) === t;
  }
  function De(e, t, a, l, o, c) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ua(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ua(e, "" + l);
        break;
      case "className":
        Ll(e, "class", l);
        break;
      case "tabIndex":
        Ll(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ll(e, a, l);
        break;
      case "style":
        Lc(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Ll(e, "data", l);
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
        l = Gl("" + l), e.setAttribute(a, l);
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
          typeof c == "function" && (a === "formAction" ? (t !== "input" && De(e, t, "name", o.name, o, null), De(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), De(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), De(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (De(e, t, "encType", o.encType, o, null), De(e, t, "method", o.method, o, null), De(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Gl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "onScroll":
        l != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && pe("scrollend", e);
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
        a = Gl("" + l), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), $l(e, "popover", l);
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
        $l(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Qv.get(a) || a, $l(e, a, l));
    }
  }
  function zs(e, t, a, l, o, c) {
    switch (a) {
      case "style":
        Lc(e, l, c);
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
        typeof l == "string" ? Ua(e, l) : (typeof l == "number" || typeof l == "bigint") && Ua(e, "" + l);
        break;
      case "onScroll":
        l != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && pe("scrollend", e);
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
        if (!Zc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), c = e[_t] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof l == "function")) {
              typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, o);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : $l(e, a, l);
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
        pe("error", e), pe("load", e);
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
                  De(e, t, c, p, a, null);
              }
          }
        o && De(e, t, "srcSet", a.srcSet, a, null), l && De(e, t, "src", a.src, a, null);
        return;
      case "input":
        pe("invalid", e);
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
                  De(e, t, l, N, a, null);
              }
          }
        Hc(
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
        pe("invalid", e), l = p = c = null;
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
                De(e, t, o, y, a, null);
            }
        t = c, a = p, e.multiple = !!l, t != null ? Za(e, !!l, t, !1) : a != null && Za(e, !!l, a, !0);
        return;
      case "textarea":
        pe("invalid", e), c = o = l = null;
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
                De(e, t, p, y, a, null);
            }
        qc(e, l, o, c);
        return;
      case "option":
        for (b in a)
          a.hasOwnProperty(b) && (l = a[b], l != null) && (b === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : De(e, t, b, l, a, null));
        return;
      case "dialog":
        pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
        break;
      case "iframe":
      case "object":
        pe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ol.length; l++)
          pe(ol[l], e);
        break;
      case "image":
        pe("error", e), pe("load", e);
        break;
      case "details":
        pe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", e), pe("load", e);
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
                De(e, t, A, l, a, null);
            }
        return;
      default:
        if (Uu(t)) {
          for (N in a)
            a.hasOwnProperty(N) && (l = a[N], l !== void 0 && zs(
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
      a.hasOwnProperty(y) && (l = a[y], l != null && De(e, t, y, l, a, null));
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
        for (C in a) {
          var R = a[C];
          if (a.hasOwnProperty(C) && R != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = R;
              default:
                l.hasOwnProperty(C) || De(e, t, C, null, l, R);
            }
        }
        for (var O in l) {
          var C = l[O];
          if (R = a[O], l.hasOwnProperty(O) && (C != null || R != null))
            switch (O) {
              case "type":
                c = C;
                break;
              case "name":
                o = C;
                break;
              case "checked":
                A = C;
                break;
              case "defaultChecked":
                N = C;
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
                  throw Error(u(137, t));
                break;
              default:
                C !== R && De(
                  e,
                  t,
                  O,
                  C,
                  l,
                  R
                );
            }
        }
        Du(
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
        C = p = y = O = null;
        for (c in a)
          if (b = a[c], a.hasOwnProperty(c) && b != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                C = b;
              default:
                l.hasOwnProperty(c) || De(
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
                O = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== b && De(
                  e,
                  t,
                  o,
                  c,
                  l,
                  b
                );
            }
        t = y, a = p, l = C, O != null ? Za(e, !!a, O, !1) : !!l != !!a && (t != null ? Za(e, !!a, t, !0) : Za(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        C = O = null;
        for (y in a)
          if (o = a[y], a.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, y, null, l, o);
            }
        for (p in l)
          if (o = l[p], c = a[p], l.hasOwnProperty(p) && (o != null || c != null))
            switch (p) {
              case "value":
                O = o;
                break;
              case "defaultValue":
                C = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && De(e, t, p, o, l, c);
            }
        Bc(e, O, C);
        return;
      case "option":
        for (var F in a)
          O = a[F], a.hasOwnProperty(F) && O != null && !l.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : De(
            e,
            t,
            F,
            null,
            l,
            O
          ));
        for (b in l)
          O = l[b], C = a[b], l.hasOwnProperty(b) && O !== C && (O != null || C != null) && (b === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : De(
            e,
            t,
            b,
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
        for (var ie in a)
          O = a[ie], a.hasOwnProperty(ie) && O != null && !l.hasOwnProperty(ie) && De(e, t, ie, null, l, O);
        for (A in l)
          if (O = l[A], C = a[A], l.hasOwnProperty(A) && O !== C && (O != null || C != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(u(137, t));
                break;
              default:
                De(
                  e,
                  t,
                  A,
                  O,
                  l,
                  C
                );
            }
        return;
      default:
        if (Uu(t)) {
          for (var Ze in a)
            O = a[Ze], a.hasOwnProperty(Ze) && O !== void 0 && !l.hasOwnProperty(Ze) && zs(
              e,
              t,
              Ze,
              void 0,
              l,
              O
            );
          for (N in l)
            O = l[N], C = a[N], !l.hasOwnProperty(N) || O === C || O === void 0 && C === void 0 || zs(
              e,
              t,
              N,
              O,
              l,
              C
            );
          return;
        }
    }
    for (var T in a)
      O = a[T], a.hasOwnProperty(T) && O != null && !l.hasOwnProperty(T) && De(e, t, T, null, l, O);
    for (R in l)
      O = l[R], C = a[R], !l.hasOwnProperty(R) || O === C || O == null && C == null || De(e, t, R, O, l, C);
  }
  function Gm(e) {
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
        if (c && y && Gm(p)) {
          for (p = 0, y = o.responseEnd, l += 1; l < a.length; l++) {
            var b = a[l], A = b.startTime;
            if (A > y) break;
            var N = b.transferSize, R = b.initiatorType;
            N && Gm(R) && (b = b.responseEnd, p += N * (b < y ? 1 : (y - A) / (b - A)));
          }
          if (--l, t += 8 * (c + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var xs = null, Ts = null;
  function Br(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Qm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Km(e, t) {
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
  function Es(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var As = null;
  function wg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === As ? !1 : (As = e, !0) : (As = null, !1);
  }
  var Jm = typeof setTimeout == "function" ? setTimeout : void 0, zg = typeof clearTimeout == "function" ? clearTimeout : void 0, Wm = typeof Promise == "function" ? Promise : void 0, xg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wm < "u" ? function(e) {
    return Wm.resolve(null).then(e).catch(Tg);
  } : Jm;
  function Tg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Kn(e) {
    return e === "head";
  }
  function Pm(e, t) {
    var a = t, l = 0;
    do {
      var o = a.nextSibling;
      if (e.removeChild(a), o && o.nodeType === 8)
        if (a = o.data, a === "/$" || a === "/&") {
          if (l === 0) {
            e.removeChild(o), mi(t);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          cl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, cl(a);
          for (var c = a.firstChild; c; ) {
            var p = c.nextSibling, y = c.nodeName;
            c[ki] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = p;
          }
        } else
          a === "body" && cl(e.ownerDocument.body);
      a = o;
    } while (a);
    mi(t);
  }
  function Fm(e, t) {
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
  function ks(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ks(a), Mu(a);
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
        if (!e[ki])
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
      if (e = Vt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ag(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Im(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Os(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Cs(e) {
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
  function Vt(e) {
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
  var js = null;
  function ep(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Vt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function tp(e) {
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
  function np(e, t, a) {
    switch (t = Br(a), e) {
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
  function cl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Mu(e);
  }
  var Gt = /* @__PURE__ */ new Map(), ap = /* @__PURE__ */ new Set();
  function qr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var En = G.d;
  G.d = {
    f: Og,
    r: Cg,
    D: jg,
    C: Mg,
    L: Ng,
    m: Dg,
    X: Ug,
    S: Zg,
    M: Rg
  };
  function Og() {
    var e = En.f(), t = Nr();
    return e || t;
  }
  function Cg(e) {
    var t = Ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? bd(t) : En.r(e);
  }
  var ci = typeof document > "u" ? null : document;
  function ip(e, t, a) {
    var l = ci;
    if (l && typeof t == "string" && t) {
      var o = Yt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), ap.has(o) || (ap.add(o), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(o) === null && (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function jg(e) {
    En.D(e), ip("dns-prefetch", e, null);
  }
  function Mg(e, t) {
    En.C(e, t), ip("preconnect", e, t);
  }
  function Ng(e, t, a) {
    En.L(e, t, a);
    var l = ci;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Yt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Yt(
        a.imageSizes
      ) + '"]')) : o += '[href="' + Yt(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = fi(e);
          break;
        case "script":
          c = di(e);
      }
      Gt.has(c) || (e = S(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Gt.set(c, e), l.querySelector(o) !== null || t === "style" && l.querySelector(fl(c)) || t === "script" && l.querySelector(dl(c)) || (t = l.createElement("link"), mt(t, "link", e), ut(t), l.head.appendChild(t)));
    }
  }
  function Dg(e, t) {
    En.m(e, t);
    var a = ci;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Yt(l) + '"][href="' + Yt(e) + '"]', c = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = di(e);
      }
      if (!Gt.has(c) && (e = S({ rel: "modulepreload", href: e }, t), Gt.set(c, e), a.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(dl(c)))
              return;
        }
        l = a.createElement("link"), mt(l, "link", e), ut(l), a.head.appendChild(l);
      }
    }
  }
  function Zg(e, t, a) {
    En.S(e, t, a);
    var l = ci;
    if (l && e) {
      var o = Na(l).hoistableStyles, c = fi(e);
      t = t || "default";
      var p = o.get(c);
      if (!p) {
        var y = { loading: 0, preload: null };
        if (p = l.querySelector(
          fl(c)
        ))
          y.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Gt.get(c)) && Ms(e, a);
          var b = p = l.createElement("link");
          ut(b), mt(b, "link", e), b._p = new Promise(function(A, N) {
            b.onload = A, b.onerror = N;
          }), b.addEventListener("load", function() {
            y.loading |= 1;
          }), b.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, $r(p, t, l);
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
  function Ug(e, t) {
    En.X(e, t);
    var a = ci;
    if (a && e) {
      var l = Na(a).hoistableScripts, o = di(e), c = l.get(o);
      c || (c = a.querySelector(dl(o)), c || (e = S({ src: e, async: !0 }, t), (t = Gt.get(o)) && Ns(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(o, c));
    }
  }
  function Rg(e, t) {
    En.M(e, t);
    var a = ci;
    if (a && e) {
      var l = Na(a).hoistableScripts, o = di(e), c = l.get(o);
      c || (c = a.querySelector(dl(o)), c || (e = S({ src: e, async: !0, type: "module" }, t), (t = Gt.get(o)) && Ns(e, t), c = a.createElement("script"), ut(c), mt(c, "link", e), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(o, c));
    }
  }
  function lp(e, t, a, l) {
    var o = (o = oe.current) ? qr(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = fi(a.href), a = Na(
          o
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = fi(a.href);
          var c = Na(
            o
          ).hoistableStyles, p = c.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = o.querySelector(
            fl(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), Gt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Gt.set(e, a), c || Yg(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = di(a), a = Na(
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
  function fi(e) {
    return 'href="' + Yt(e) + '"';
  }
  function fl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rp(e) {
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
  function di(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function dl(e) {
    return "script[async]" + e;
  }
  function up(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Yt(a.href) + '"]'
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
          ), ut(l), mt(l, "style", o), $r(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          o = fi(a.href);
          var c = e.querySelector(
            fl(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ut(c), c;
          l = rp(a), (o = Gt.get(o)) && Ms(l, o), c = (e.ownerDocument || e).createElement("link"), ut(c);
          var p = c;
          return p._p = new Promise(function(y, b) {
            p.onload = y, p.onerror = b;
          }), mt(c, "link", l), t.state.loading |= 4, $r(c, a.precedence, e), t.instance = c;
        case "script":
          return c = di(a.src), (o = e.querySelector(
            dl(c)
          )) ? (t.instance = o, ut(o), o) : (l = a, (o = Gt.get(c)) && (l = S({}, a), Ns(l, o)), e = e.ownerDocument || e, o = e.createElement("script"), ut(o), mt(o, "link", l), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, $r(l, a.precedence, e));
    return t.instance;
  }
  function $r(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = l.length ? l[l.length - 1] : null, c = o, p = 0; p < l.length; p++) {
      var y = l[p];
      if (y.dataset.precedence === t) c = y;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Ms(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ns(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Lr = null;
  function op(e, t, a) {
    if (Lr === null) {
      var l = /* @__PURE__ */ new Map(), o = Lr = /* @__PURE__ */ new Map();
      o.set(a, l);
    } else
      o = Lr, l = o.get(a), l || (l = /* @__PURE__ */ new Map(), o.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
      var c = a[o];
      if (!(c[ki] || c[st] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var y = l.get(p);
        y ? y.push(c) : l.set(p, [c]);
      }
    }
    return l;
  }
  function sp(e, t, a) {
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
  function cp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Hg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = fi(l.href), c = t.querySelector(
          fl(o)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Vr.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, ut(c);
          return;
        }
        c = t.ownerDocument || t, l = rp(l), (o = Gt.get(o)) && Ms(l, o), c = c.createElement("link"), ut(c);
        var p = c;
        p._p = new Promise(function(y, b) {
          p.onload = y, p.onerror = b;
        }), mt(c, "link", l), a.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Vr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ds = 0;
  function Bg(e, t) {
    return e.stylesheets && e.count === 0 && Qr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Qr(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ds === 0 && (Ds = 62500 * Sg());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qr(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Ds ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(o);
      };
    } : null;
  }
  function Vr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Gr = null;
  function Qr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Gr = /* @__PURE__ */ new Map(), t.forEach(qg, e), Gr = null, Vr.call(e));
  }
  function qg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Gr.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Gr.set(e, a);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var p = o[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), l = p);
        }
        l && a.set(null, l);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), c = a.get(p) || l, c === l && a.set(null, o), a.set(p, o), this.count++, l = Vr.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ml = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function $g(e, t, a, l, o, c, p, y, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ku(0), this.hiddenUpdates = ku(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fp(e, t, a, l, o, c, p, y, b, A, N, R) {
    return e = new $g(
      e,
      t,
      a,
      p,
      b,
      A,
      N,
      R,
      y
    ), t = 1, c === !0 && (t |= 24), c = Ct(3, null, null, t), e.current = c, c.stateNode = e, t = mo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, yo(c), e;
  }
  function dp(e) {
    return e ? (e = $a, e) : $a;
  }
  function mp(e, t, a, l, o, c) {
    o = dp(o), l.context === null ? l.context = o : l.pendingContext = o, l = Rn(t), l.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (l.callback = c), a = Yn(e, l, t), a !== null && (Tt(a, e, t), Vi(a, e, t));
  }
  function pp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Zs(e, t) {
    pp(e, t), (e = e.alternate) && pp(e, t);
  }
  function hp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = fa(e, 67108864);
      t !== null && Tt(t, e, 67108864), Zs(e, 67108864);
    }
  }
  function vp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zt();
      t = Ou(t);
      var a = fa(e, t);
      a !== null && Tt(a, e, t), Zs(e, t);
    }
  }
  var Kr = !0;
  function Lg(e, t, a, l) {
    var o = M.T;
    M.T = null;
    var c = G.p;
    try {
      G.p = 2, Us(e, t, a, l);
    } finally {
      G.p = c, M.T = o;
    }
  }
  function Vg(e, t, a, l) {
    var o = M.T;
    M.T = null;
    var c = G.p;
    try {
      G.p = 8, Us(e, t, a, l);
    } finally {
      G.p = c, M.T = o;
    }
  }
  function Us(e, t, a, l) {
    if (Kr) {
      var o = Rs(l);
      if (o === null)
        ws(
          e,
          t,
          l,
          Jr,
          a
        ), gp(e, l);
      else if (Qg(
        o,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (gp(e, l), t & 4 && -1 < Gg.indexOf(e)) {
        for (; o !== null; ) {
          var c = Ma(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = ra(c.pendingLanes);
                  if (p !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; p; ) {
                      var b = 1 << 31 - kt(p);
                      y.entanglements[1] |= b, p &= ~b;
                    }
                    on(c), (Oe & 6) === 0 && (jr = $() + 500, ul(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = fa(c, 2), y !== null && Tt(y, c, 2), Nr(), Zs(c, 2);
            }
          if (c = Rs(l), c === null && ws(
            e,
            t,
            l,
            Jr,
            a
          ), c === o) break;
          o = c;
        }
        o !== null && l.stopPropagation();
      } else
        ws(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Rs(e) {
    return e = Yu(e), Ys(e);
  }
  var Jr = null;
  function Ys(e) {
    if (Jr = null, e = ja(e), e !== null) {
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
    return Jr = e, null;
  }
  function yp(e) {
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
        switch (ge()) {
          case xe:
            return 2;
          case an:
            return 8;
          case Yl:
          case Mv:
            return 32;
          case Ec:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xs = !1, Jn = null, Wn = null, Pn = null, pl = /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ new Map(), Fn = [], Gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gp(e, t) {
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
        pl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hl.delete(t.pointerId);
    }
  }
  function vl(e, t, a, l, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = Ma(t), t !== null && hp(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Qg(e, t, a, l, o) {
    switch (t) {
      case "focusin":
        return Jn = vl(
          Jn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "dragenter":
        return Wn = vl(
          Wn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "mouseover":
        return Pn = vl(
          Pn,
          e,
          t,
          a,
          l,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return pl.set(
          c,
          vl(
            pl.get(c) || null,
            e,
            t,
            a,
            l,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, hl.set(
          c,
          vl(
            hl.get(c) || null,
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
  function _p(e) {
    var t = ja(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, Mc(e.priority, function() {
              vp(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, Mc(e.priority, function() {
              vp(a);
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
  function Wr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Rs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Ru = l, a.target.dispatchEvent(l), Ru = null;
      } else
        return t = Ma(a), t !== null && hp(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function bp(e, t, a) {
    Wr(e) && a.delete(t);
  }
  function Kg() {
    Xs = !1, Jn !== null && Wr(Jn) && (Jn = null), Wn !== null && Wr(Wn) && (Wn = null), Pn !== null && Wr(Pn) && (Pn = null), pl.forEach(bp), hl.forEach(bp);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      Kg
    )));
  }
  var Fr = null;
  function Sp(e) {
    Fr !== e && (Fr = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Fr === e && (Fr = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], o = e[t + 2];
          if (typeof l != "function") {
            if (Ys(l || a) === null)
              continue;
            break;
          }
          var c = Ma(a);
          c !== null && (e.splice(t, 3), t -= 3, Ro(
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
  function mi(e) {
    function t(b) {
      return Pr(b, e);
    }
    Jn !== null && Pr(Jn, e), Wn !== null && Pr(Wn, e), Pn !== null && Pr(Pn, e), pl.forEach(t), hl.forEach(t);
    for (var a = 0; a < Fn.length; a++) {
      var l = Fn[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Fn.length && (a = Fn[0], a.blockedOn === null); )
      _p(a), a.blockedOn === null && Fn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var o = a[l], c = a[l + 1], p = o[_t] || null;
        if (typeof c == "function")
          p || Sp(a);
        else if (p) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, p = c[_t] || null)
              y = p.formAction;
            else if (Ys(o) !== null) continue;
          } else y = p.action;
          typeof y == "function" ? a[l + 1] = y : (a.splice(l, 3), l -= 3), Sp(a);
        }
      }
  }
  function wp() {
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
  function Hs(e) {
    this._internalRoot = e;
  }
  Ir.prototype.render = Hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var a = t.current, l = Zt();
    mp(a, l, e, t, null, null);
  }, Ir.prototype.unmount = Hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      mp(e.current, 2, null, e, null, null), Nr(), t[Ca] = null;
    }
  };
  function Ir(e) {
    this._internalRoot = e;
  }
  Ir.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = jc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Fn.length && t !== 0 && t < Fn[a].priority; a++) ;
      Fn.splice(a, 0, e), a === 0 && _p(e);
    }
  };
  var zp = i.version;
  if (zp !== "19.2.8")
    throw Error(
      u(
        527,
        zp,
        "19.2.8"
      )
    );
  G.findDOMNode = function(e) {
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
    var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eu.isDisabled && eu.supportsFiber)
      try {
        Ti = eu.inject(
          Jg
        ), At = eu;
      } catch {
      }
  }
  return gl.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var a = !1, l = "", o = Cd, c = jd, p = Md;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = fp(
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
      wp
    ), e[Ca] = t.current, Ss(e), new Hs(t);
  }, gl.hydrateRoot = function(e, t, a) {
    if (!s(e)) throw Error(u(299));
    var l = !1, o = "", c = Cd, p = jd, y = Md, b = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (b = a.formState)), t = fp(
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
      wp
    ), t.context = dp(null), a = t.current, l = Zt(), l = Ou(l), o = Rn(l), o.callback = null, Yn(a, o, l), a = l, t.current.lanes = a, Ai(t, a), on(t), e[Ca] = t.current, Ss(e), new Ir(t);
  }, gl.version = "19.2.8", gl;
}
var Np;
function l_() {
  if (Np) return qs.exports;
  Np = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), qs.exports = i_(), qs.exports;
}
var r_ = l_();
const u_ = /* @__PURE__ */ Eh(r_);
var te = cc();
const bu = /* @__PURE__ */ Eh(te);
const Ah = (...n) => n.filter((i, r, u) => !!i && i.trim() !== "" && u.indexOf(i) === r).join(" ").trim();
const o_ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const s_ = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, u) => u ? u.toUpperCase() : r.toLowerCase()
);
const Dp = (n) => {
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
      className: Ah("lucide", s),
      ...!f && !f_(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([h, _]) => te.createElement(h, _)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const Re = (n, i) => {
  const r = te.forwardRef(
    ({ className: u, ...s }, f) => te.createElement(d_, {
      ref: f,
      iconNode: i,
      className: Ah(
        `lucide-${o_(Dp(n))}`,
        `lucide-${n}`,
        u
      ),
      ...s
    })
  );
  return r.displayName = Dp(n), r;
};
const m_ = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], kh = Re("arrow-down-to-line", m_);
const p_ = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Zp = Re("arrow-down", p_);
const h_ = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], v_ = Re("arrow-up-from-line", h_);
const y_ = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Up = Re("arrow-up", y_);
const g_ = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], __ = Re("battery", g_);
const b_ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], S_ = Re("check", b_);
const w_ = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], z_ = Re("clock-3", w_);
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
], T_ = Re("droplets", x_);
const E_ = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Rp = Re("house", E_);
const A_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Yp = Re("loader-circle", A_);
const k_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], O_ = Re("lock-open", k_);
const C_ = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Oh = Re("lock", C_);
const j_ = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], M_ = Re("map-pin", j_);
const N_ = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], D_ = Re("pause", N_);
const Z_ = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Ch = Re("play", Z_);
const U_ = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Xp = Re("plus", U_);
const R_ = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], fc = Re("rotate-ccw", R_);
const Y_ = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], X_ = Re("scan-line", Y_);
const H_ = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], B_ = Re("sliders-horizontal", H_);
const q_ = [
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
], ic = Re("sparkles", q_);
const $_ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], L_ = Re("square", $_);
const V_ = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], G_ = Re("timer", V_);
const Q_ = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], cu = Re("trash-2", Q_);
const K_ = [
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
], Hp = Re("waves", K_);
const J_ = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Bp = Re("wind", J_);
const W_ = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], dc = Re("x", W_);
const P_ = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], F_ = Re("zoom-in", P_);
const I_ = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], e0 = Re("zoom-out", I_);
var qp;
function U(n, i, r) {
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
class vi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class jh extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(qp = globalThis).__zod_globalConfig ?? (qp.__zod_globalConfig = {});
const mc = globalThis.__zod_globalConfig;
function Aa(n) {
  return mc;
}
function Mh(n) {
  const i = Object.values(n).filter((u) => typeof u == "number");
  return Object.entries(n).filter(([u, s]) => i.indexOf(+u) === -1).map(([u, s]) => s);
}
function lc(n, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function pc(n) {
  return {
    get value() {
      {
        const i = n();
        return Object.defineProperty(this, "value", { value: i }), i;
      }
    }
  };
}
function hc(n) {
  return n == null;
}
function vc(n) {
  const i = n.startsWith("^") ? 1 : 0, r = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(i, r);
}
function t0(n, i) {
  const r = n / i, u = Math.round(r), s = Number.EPSILON * Math.max(Math.abs(r), 1);
  return Math.abs(r - u) < s ? 0 : r - u;
}
const $p = /* @__PURE__ */ Symbol("evaluating");
function Ue(n, i, r) {
  let u;
  Object.defineProperty(n, i, {
    get() {
      if (u !== $p)
        return u === void 0 && (u = $p, u = r()), u;
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
function Lp(n) {
  return JSON.stringify(n);
}
function n0(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Nh = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function fu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const a0 = /* @__PURE__ */ pc(() => {
  if (mc.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function El(n) {
  if (fu(n) === !1)
    return !1;
  const i = n.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const r = i.prototype;
  return !(fu(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Dh(n) {
  return El(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
const i0 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function yi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(n, i, r) {
  const u = new n._zod.constr(i ?? n._zod.def);
  return (!i || r?.parent) && (u._zod.parent = n), u;
}
function ae(n) {
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
function l0(n) {
  return Object.keys(n).filter((i) => n[i]._zod.optin === "optional" && n[i]._zod.optout === "optional");
}
const r0 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function u0(n, i) {
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
function o0(n, i) {
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
function s0(n, i) {
  if (!El(i))
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
function c0(n, i) {
  if (!El(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = na(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape, ...i };
      return Oa(this, "shape", u), u;
    }
  });
  return aa(n, r);
}
function f0(n, i) {
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
function d0(n, i, r) {
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
function m0(n, i, r) {
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
function pi(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function p0(n, i = 0) {
  if (n.aborted === !0)
    return !0;
  for (let r = i; r < n.issues.length; r++)
    if (n.issues[r]?.continue === !1)
      return !0;
  return !1;
}
function Zh(n, i) {
  return i.map((r) => {
    var u;
    return (u = r).path ?? (u.path = []), r.path.unshift(n), r;
  });
}
function tu(n) {
  return typeof n == "string" ? n : n?.message;
}
function ka(n, i, r) {
  const u = n.message ? n.message : tu(n.inst?._zod.def?.error?.(n)) ?? tu(i?.error?.(n)) ?? tu(r.customError?.(n)) ?? tu(r.localeError?.(n)) ?? "Invalid input", { inst: s, continue: f, input: d, ...m } = n;
  return m.path ?? (m.path = []), m.message = u, i?.reportInput && (m.input = d), m;
}
function yc(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Al(...n) {
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
  }), n.message = JSON.stringify(i, lc, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Rh = U("$ZodError", Uh), Yh = U("$ZodError", Uh, { Parent: Error });
function h0(n, i = (r) => r.message) {
  const r = {}, u = [];
  for (const s of n.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(i(s))) : u.push(i(s));
  return { formErrors: u, fieldErrors: r };
}
function v0(n, i = (r) => r.message) {
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
const gc = (n) => (i, r, u, s) => {
  const f = u ? { ...u, async: !1 } : { async: !1 }, d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise)
    throw new vi();
  if (d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((v) => ka(v, f, Aa())));
    throw Nh(m, s?.callee), m;
  }
  return d.value;
}, _c = (n) => async (i, r, u, s) => {
  const f = u ? { ...u, async: !0 } : { async: !0 };
  let d = i._zod.run({ value: r, issues: [] }, f);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const m = new (s?.Err ?? n)(d.issues.map((v) => ka(v, f, Aa())));
    throw Nh(m, s?.callee), m;
  }
  return d.value;
}, Su = (n) => (i, r, u) => {
  const s = u ? { ...u, async: !1 } : { async: !1 }, f = i._zod.run({ value: r, issues: [] }, s);
  if (f instanceof Promise)
    throw new vi();
  return f.issues.length ? {
    success: !1,
    error: new (n ?? Rh)(f.issues.map((d) => ka(d, s, Aa())))
  } : { success: !0, data: f.value };
}, y0 = /* @__PURE__ */ Su(Yh), wu = (n) => async (i, r, u) => {
  const s = u ? { ...u, async: !0 } : { async: !0 };
  let f = i._zod.run({ value: r, issues: [] }, s);
  return f instanceof Promise && (f = await f), f.issues.length ? {
    success: !1,
    error: new n(f.issues.map((d) => ka(d, s, Aa())))
  } : { success: !0, data: f.value };
}, g0 = /* @__PURE__ */ wu(Yh), _0 = (n) => (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return gc(n)(i, r, s);
}, b0 = (n) => (i, r, u) => gc(n)(i, r, u), S0 = (n) => async (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return _c(n)(i, r, s);
}, w0 = (n) => async (i, r, u) => _c(n)(i, r, u), z0 = (n) => (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return Su(n)(i, r, s);
}, x0 = (n) => (i, r, u) => Su(n)(i, r, u), T0 = (n) => async (i, r, u) => {
  const s = u ? { ...u, direction: "backward" } : { direction: "backward" };
  return wu(n)(i, r, s);
}, E0 = (n) => async (i, r, u) => wu(n)(i, r, u), A0 = /^[cC][0-9a-z]{6,}$/, k0 = /^[0-9a-z]+$/, O0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, C0 = /^[0-9a-vA-V]{20}$/, j0 = /^[A-Za-z0-9]{27}$/, M0 = /^[a-zA-Z0-9_-]{21}$/, N0 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, D0 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Vp = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Z0 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, U0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function R0() {
  return new RegExp(U0, "u");
}
const Y0 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, X0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, H0 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, B0 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, q0 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Xh = /^[A-Za-z0-9_-]*$/, $0 = /^https?$/, L0 = /^\+[1-9]\d{6,14}$/, Hh = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", V0 = /* @__PURE__ */ new RegExp(`^${Hh}$`);
function Bh(n) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${i}` : n.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${n.precision}}` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function G0(n) {
  return new RegExp(`^${Bh(n)}$`);
}
function Q0(n) {
  const i = Bh({ precision: n.precision }), r = ["Z"];
  n.local && r.push(""), n.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const u = `${i}(?:${r.join("|")})`;
  return new RegExp(`^${Hh}T(?:${u})$`);
}
const K0 = (n) => {
  const i = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, J0 = /^-?\d+$/, W0 = /^-?\d+(?:\.\d+)?$/, P0 = /^(?:true|false)$/i, F0 = /^[^A-Z]*$/, I0 = /^[^a-z]*$/, Et = /* @__PURE__ */ U("$ZodCheck", (n, i) => {
  var r;
  n._zod ?? (n._zod = {}), n._zod.def = i, (r = n._zod).onattach ?? (r.onattach = []);
}), qh = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, $h = /* @__PURE__ */ U("$ZodCheckLessThan", (n, i) => {
  Et.init(n, i);
  const r = qh[typeof i.value];
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
}), Lh = /* @__PURE__ */ U("$ZodCheckGreaterThan", (n, i) => {
  Et.init(n, i);
  const r = qh[typeof i.value];
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
}), eb = /* @__PURE__ */ U("$ZodCheckMultipleOf", (n, i) => {
  Et.init(n, i), n._zod.onattach.push((r) => {
    var u;
    (u = r._zod.bag).multipleOf ?? (u.multipleOf = i.value);
  }), n._zod.check = (r) => {
    if (typeof r.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % i.value === BigInt(0) : t0(r.value, i.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), tb = /* @__PURE__ */ U("$ZodCheckNumberFormat", (n, i) => {
  Et.init(n, i), i.format = i.format || "float64";
  const r = i.format?.includes("int"), u = r ? "int" : "number", [s, f] = r0[i.format];
  n._zod.onattach.push((d) => {
    const m = d._zod.bag;
    m.format = i.format, m.minimum = s, m.maximum = f, r && (m.pattern = J0);
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
}), nb = /* @__PURE__ */ U("$ZodCheckMaxLength", (n, i) => {
  var r;
  Et.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !hc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < s && (u._zod.bag.maximum = i.maximum);
  }), n._zod.check = (u) => {
    const s = u.value;
    if (s.length <= i.maximum)
      return;
    const d = yc(s);
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
}), ab = /* @__PURE__ */ U("$ZodCheckMinLength", (n, i) => {
  var r;
  Et.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !hc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > s && (u._zod.bag.minimum = i.minimum);
  }), n._zod.check = (u) => {
    const s = u.value;
    if (s.length >= i.minimum)
      return;
    const d = yc(s);
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
}), ib = /* @__PURE__ */ U("$ZodCheckLengthEquals", (n, i) => {
  var r;
  Et.init(n, i), (r = n._zod.def).when ?? (r.when = (u) => {
    const s = u.value;
    return !hc(s) && s.length !== void 0;
  }), n._zod.onattach.push((u) => {
    const s = u._zod.bag;
    s.minimum = i.length, s.maximum = i.length, s.length = i.length;
  }), n._zod.check = (u) => {
    const s = u.value, f = s.length;
    if (f === i.length)
      return;
    const d = yc(s), m = f > i.length;
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
}), zu = /* @__PURE__ */ U("$ZodCheckStringFormat", (n, i) => {
  var r, u;
  Et.init(n, i), n._zod.onattach.push((s) => {
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
}), lb = /* @__PURE__ */ U("$ZodCheckRegex", (n, i) => {
  zu.init(n, i), n._zod.check = (r) => {
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
}), rb = /* @__PURE__ */ U("$ZodCheckLowerCase", (n, i) => {
  i.pattern ?? (i.pattern = F0), zu.init(n, i);
}), ub = /* @__PURE__ */ U("$ZodCheckUpperCase", (n, i) => {
  i.pattern ?? (i.pattern = I0), zu.init(n, i);
}), ob = /* @__PURE__ */ U("$ZodCheckIncludes", (n, i) => {
  Et.init(n, i);
  const r = yi(i.includes), u = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${r}` : r);
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
}), sb = /* @__PURE__ */ U("$ZodCheckStartsWith", (n, i) => {
  Et.init(n, i);
  const r = new RegExp(`^${yi(i.prefix)}.*`);
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
}), cb = /* @__PURE__ */ U("$ZodCheckEndsWith", (n, i) => {
  Et.init(n, i);
  const r = new RegExp(`.*${yi(i.suffix)}$`);
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
}), fb = /* @__PURE__ */ U("$ZodCheckOverwrite", (n, i) => {
  Et.init(n, i), n._zod.check = (r) => {
    r.value = i.tx(r.value);
  };
});
class db {
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
const mb = {
  major: 4,
  minor: 4,
  patch: 3
}, We = /* @__PURE__ */ U("$ZodType", (n, i) => {
  var r;
  n ?? (n = {}), n._zod.def = i, n._zod.bag = n._zod.bag || {}, n._zod.version = mb;
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
      let h = pi(d), _;
      for (const S of m) {
        if (S._zod.def.when) {
          if (p0(d) || !S._zod.def.when(d))
            continue;
        } else if (h)
          continue;
        const x = d.issues.length, k = S._zod.check(d);
        if (k instanceof Promise && v?.async === !1)
          throw new vi();
        if (_ || k instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await k, d.issues.length !== x && (h || (h = pi(d, x)));
          });
        else {
          if (d.issues.length === x)
            continue;
          h || (h = pi(d, x));
        }
      }
      return _ ? _.then(() => d) : d;
    }, f = (d, m, v) => {
      if (pi(d))
        return d.aborted = !0, d;
      const h = s(m, u, v);
      if (h instanceof Promise) {
        if (v.async === !1)
          throw new vi();
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
          throw new vi();
        return v.then((h) => s(h, u, m));
      }
      return s(v, u, m);
    };
  }
  Ue(n, "~standard", () => ({
    validate: (s) => {
      try {
        const f = y0(n, s);
        return f.success ? { value: f.data } : { issues: f.error?.issues };
      } catch {
        return g0(n, s).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), bc = /* @__PURE__ */ U("$ZodString", (n, i) => {
  We.init(n, i), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? K0(n._zod.bag), n._zod.parse = (r, u) => {
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
}), Ge = /* @__PURE__ */ U("$ZodStringFormat", (n, i) => {
  zu.init(n, i), bc.init(n, i);
}), pb = /* @__PURE__ */ U("$ZodGUID", (n, i) => {
  i.pattern ?? (i.pattern = D0), Ge.init(n, i);
}), hb = /* @__PURE__ */ U("$ZodUUID", (n, i) => {
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
    i.pattern ?? (i.pattern = Vp(u));
  } else
    i.pattern ?? (i.pattern = Vp());
  Ge.init(n, i);
}), vb = /* @__PURE__ */ U("$ZodEmail", (n, i) => {
  i.pattern ?? (i.pattern = Z0), Ge.init(n, i);
}), yb = /* @__PURE__ */ U("$ZodURL", (n, i) => {
  Ge.init(n, i), n._zod.check = (r) => {
    try {
      const u = r.value.trim();
      if (!i.normalize && i.protocol?.source === $0.source && !/^https?:\/\//i.test(u)) {
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
}), gb = /* @__PURE__ */ U("$ZodEmoji", (n, i) => {
  i.pattern ?? (i.pattern = R0()), Ge.init(n, i);
}), _b = /* @__PURE__ */ U("$ZodNanoID", (n, i) => {
  i.pattern ?? (i.pattern = M0), Ge.init(n, i);
}), bb = /* @__PURE__ */ U("$ZodCUID", (n, i) => {
  i.pattern ?? (i.pattern = A0), Ge.init(n, i);
}), Sb = /* @__PURE__ */ U("$ZodCUID2", (n, i) => {
  i.pattern ?? (i.pattern = k0), Ge.init(n, i);
}), wb = /* @__PURE__ */ U("$ZodULID", (n, i) => {
  i.pattern ?? (i.pattern = O0), Ge.init(n, i);
}), zb = /* @__PURE__ */ U("$ZodXID", (n, i) => {
  i.pattern ?? (i.pattern = C0), Ge.init(n, i);
}), xb = /* @__PURE__ */ U("$ZodKSUID", (n, i) => {
  i.pattern ?? (i.pattern = j0), Ge.init(n, i);
}), Tb = /* @__PURE__ */ U("$ZodISODateTime", (n, i) => {
  i.pattern ?? (i.pattern = Q0(i)), Ge.init(n, i);
}), Eb = /* @__PURE__ */ U("$ZodISODate", (n, i) => {
  i.pattern ?? (i.pattern = V0), Ge.init(n, i);
}), Ab = /* @__PURE__ */ U("$ZodISOTime", (n, i) => {
  i.pattern ?? (i.pattern = G0(i)), Ge.init(n, i);
}), kb = /* @__PURE__ */ U("$ZodISODuration", (n, i) => {
  i.pattern ?? (i.pattern = N0), Ge.init(n, i);
}), Ob = /* @__PURE__ */ U("$ZodIPv4", (n, i) => {
  i.pattern ?? (i.pattern = Y0), Ge.init(n, i), n._zod.bag.format = "ipv4";
}), Cb = /* @__PURE__ */ U("$ZodIPv6", (n, i) => {
  i.pattern ?? (i.pattern = X0), Ge.init(n, i), n._zod.bag.format = "ipv6", n._zod.check = (r) => {
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
}), jb = /* @__PURE__ */ U("$ZodCIDRv4", (n, i) => {
  i.pattern ?? (i.pattern = H0), Ge.init(n, i);
}), Mb = /* @__PURE__ */ U("$ZodCIDRv6", (n, i) => {
  i.pattern ?? (i.pattern = B0), Ge.init(n, i), n._zod.check = (r) => {
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
function Vh(n) {
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
const Nb = /* @__PURE__ */ U("$ZodBase64", (n, i) => {
  i.pattern ?? (i.pattern = q0), Ge.init(n, i), n._zod.bag.contentEncoding = "base64", n._zod.check = (r) => {
    Vh(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
});
function Db(n) {
  if (!Xh.test(n))
    return !1;
  const i = n.replace(/[-_]/g, (u) => u === "-" ? "+" : "/"), r = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Vh(r);
}
const Zb = /* @__PURE__ */ U("$ZodBase64URL", (n, i) => {
  i.pattern ?? (i.pattern = Xh), Ge.init(n, i), n._zod.bag.contentEncoding = "base64url", n._zod.check = (r) => {
    Db(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Ub = /* @__PURE__ */ U("$ZodE164", (n, i) => {
  i.pattern ?? (i.pattern = L0), Ge.init(n, i);
});
function Rb(n, i = null) {
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
const Yb = /* @__PURE__ */ U("$ZodJWT", (n, i) => {
  Ge.init(n, i), n._zod.check = (r) => {
    Rb(r.value, i.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: n,
      continue: !i.abort
    });
  };
}), Gh = /* @__PURE__ */ U("$ZodNumber", (n, i) => {
  We.init(n, i), n._zod.pattern = n._zod.bag.pattern ?? W0, n._zod.parse = (r, u) => {
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
}), Xb = /* @__PURE__ */ U("$ZodNumberFormat", (n, i) => {
  tb.init(n, i), Gh.init(n, i);
}), Hb = /* @__PURE__ */ U("$ZodBoolean", (n, i) => {
  We.init(n, i), n._zod.pattern = P0, n._zod.parse = (r, u) => {
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
}), Bb = /* @__PURE__ */ U("$ZodUnknown", (n, i) => {
  We.init(n, i), n._zod.parse = (r) => r;
}), qb = /* @__PURE__ */ U("$ZodNever", (n, i) => {
  We.init(n, i), n._zod.parse = (r, u) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: n
  }), r);
});
function Gp(n, i, r) {
  n.issues.length && i.issues.push(...Zh(r, n.issues)), i.value[r] = n.value;
}
const $b = /* @__PURE__ */ U("$ZodArray", (n, i) => {
  We.init(n, i), n._zod.parse = (r, u) => {
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
      v instanceof Promise ? f.push(v.then((h) => Gp(h, r, d))) : Gp(v, r, d);
    }
    return f.length ? Promise.all(f).then(() => r) : r;
  };
});
function du(n, i, r, u, s, f) {
  const d = r in u;
  if (n.issues.length) {
    if (s && f && !d)
      return;
    i.issues.push(...Zh(r, n.issues));
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
function Qh(n) {
  const i = Object.keys(n.shape);
  for (const u of i)
    if (!n.shape?.[u]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${u}": expected a Zod schema`);
  const r = l0(n.shape);
  return {
    ...n,
    keys: i,
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(r)
  };
}
function Kh(n, i, r, u, s, f) {
  const d = [], m = s.keySet, v = s.catchall._zod, h = v.def.type, _ = v.optin === "optional", S = v.optout === "optional";
  for (const x in i) {
    if (x === "__proto__" || m.has(x))
      continue;
    if (h === "never") {
      d.push(x);
      continue;
    }
    const k = v.run({ value: i[x], issues: [] }, u);
    k instanceof Promise ? n.push(k.then((j) => du(j, r, x, i, _, S))) : du(k, r, x, i, _, S);
  }
  return d.length && r.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: i,
    inst: f
  }), n.length ? Promise.all(n).then(() => r) : r;
}
const Lb = /* @__PURE__ */ U("$ZodObject", (n, i) => {
  if (We.init(n, i), !Object.getOwnPropertyDescriptor(i, "shape")?.get) {
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
  const u = pc(() => Qh(i));
  Ue(n._zod, "propValues", () => {
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
  const s = fu, f = i.catchall;
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
      const k = S[x], j = k._zod.optin === "optional", q = k._zod.optout === "optional", Y = k._zod.run({ value: h[x], issues: [] }, v);
      Y instanceof Promise ? _.push(Y.then((K) => du(K, m, x, h, j, q))) : du(Y, m, x, h, j, q);
    }
    return f ? Kh(_, h, m, v, u.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), Vb = /* @__PURE__ */ U("$ZodObjectJIT", (n, i) => {
  Lb.init(n, i);
  const r = n._zod.parse, u = pc(() => Qh(i)), s = (x) => {
    const k = new db(["shape", "payload", "ctx"]), j = u.value, q = (H) => {
      const X = Lp(H);
      return `shape[${X}]._zod.run({ value: input[${X}], issues: [] }, ctx)`;
    };
    k.write("const input = payload.value;");
    const Y = /* @__PURE__ */ Object.create(null);
    let K = 0;
    for (const H of j.keys)
      Y[H] = `key_${K++}`;
    k.write("const newResult = {};");
    for (const H of j.keys) {
      const X = Y[H], V = Lp(H), P = x[H], L = P?._zod?.optin === "optional", le = P?._zod?.optout === "optional";
      k.write(`const ${X} = ${q(H)};`), L && le ? k.write(`
        if (${X}.issues.length) {
          if (${V} in input) {
            payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${V}, ...iss.path] : [${V}]
            })));
          }
        }
        
        if (${X}.value === undefined) {
          if (${V} in input) {
            newResult[${V}] = undefined;
          }
        } else {
          newResult[${V}] = ${X}.value;
        }
        
      `) : L ? k.write(`
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${V}, ...iss.path] : [${V}]
          })));
        }
        
        if (${X}.value === undefined) {
          if (${V} in input) {
            newResult[${V}] = undefined;
          }
        } else {
          newResult[${V}] = ${X}.value;
        }
        
      `) : k.write(`
        const ${X}_present = ${V} in input;
        if (${X}.issues.length) {
          payload.issues = payload.issues.concat(${X}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${V}, ...iss.path] : [${V}]
          })));
        }
        if (!${X}_present && !${X}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${V}]
          });
        }

        if (${X}_present) {
          if (${X}.value === undefined) {
            newResult[${V}] = undefined;
          } else {
            newResult[${V}] = ${X}.value;
          }
        }

      `);
    }
    k.write("payload.value = newResult;"), k.write("return payload;");
    const B = k.compile();
    return (H, X) => B(x, H, X);
  };
  let f;
  const d = fu, m = !mc.jitless, h = m && a0.value, _ = i.catchall;
  let S;
  n._zod.parse = (x, k) => {
    S ?? (S = u.value);
    const j = x.value;
    return d(j) ? m && h && k?.async === !1 && k.jitless !== !0 ? (f || (f = s(i.shape)), x = f(x, k), _ ? Kh([], j, x, k, S, n) : x) : r(x, k) : (x.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: n
    }), x);
  };
});
function Qp(n, i, r, u) {
  for (const f of n)
    if (f.issues.length === 0)
      return i.value = f.value, i;
  const s = n.filter((f) => !pi(f));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: r,
    errors: n.map((f) => f.issues.map((d) => ka(d, u, Aa())))
  }), i);
}
const Gb = /* @__PURE__ */ U("$ZodUnion", (n, i) => {
  We.init(n, i), Ue(n._zod, "optin", () => i.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), Ue(n._zod, "optout", () => i.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), Ue(n._zod, "values", () => {
    if (i.options.every((u) => u._zod.values))
      return new Set(i.options.flatMap((u) => Array.from(u._zod.values)));
  }), Ue(n._zod, "pattern", () => {
    if (i.options.every((u) => u._zod.pattern)) {
      const u = i.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${u.map((s) => vc(s.source)).join("|")})$`);
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
    return f ? Promise.all(d).then((m) => Qp(m, u, n, s)) : Qp(d, u, n, s);
  };
}), Qb = /* @__PURE__ */ U("$ZodIntersection", (n, i) => {
  We.init(n, i), n._zod.parse = (r, u) => {
    const s = r.value, f = i.left._zod.run({ value: s, issues: [] }, u), d = i.right._zod.run({ value: s, issues: [] }, u);
    return f instanceof Promise || d instanceof Promise ? Promise.all([f, d]).then(([v, h]) => Kp(r, v, h)) : Kp(r, f, d);
  };
});
function rc(n, i) {
  if (n === i)
    return { valid: !0, data: n };
  if (n instanceof Date && i instanceof Date && +n == +i)
    return { valid: !0, data: n };
  if (El(n) && El(i)) {
    const r = Object.keys(i), u = Object.keys(n).filter((f) => r.indexOf(f) !== -1), s = { ...n, ...i };
    for (const f of u) {
      const d = rc(n[f], i[f]);
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
      const s = n[u], f = i[u], d = rc(s, f);
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
function Kp(n, i, r) {
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
  if (f.length && s && n.issues.push({ ...s, keys: f }), pi(n))
    return n;
  const d = rc(i.value, r.value);
  if (!d.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
const Kb = /* @__PURE__ */ U("$ZodEnum", (n, i) => {
  We.init(n, i);
  const r = Mh(i.entries), u = new Set(r);
  n._zod.values = u, n._zod.pattern = new RegExp(`^(${r.filter((s) => i0.has(typeof s)).map((s) => typeof s == "string" ? yi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, f) => {
    const d = s.value;
    return u.has(d) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: d,
      inst: n
    }), s;
  };
}), Jb = /* @__PURE__ */ U("$ZodLiteral", (n, i) => {
  if (We.init(n, i), i.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(i.values);
  n._zod.values = r, n._zod.pattern = new RegExp(`^(${i.values.map((u) => typeof u == "string" ? yi(u) : u ? yi(u.toString()) : String(u)).join("|")})$`), n._zod.parse = (u, s) => {
    const f = u.value;
    return r.has(f) || u.issues.push({
      code: "invalid_value",
      values: i.values,
      input: f,
      inst: n
    }), u;
  };
}), Wb = /* @__PURE__ */ U("$ZodTransform", (n, i) => {
  We.init(n, i), n._zod.optin = "optional", n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      throw new jh(n.constructor.name);
    const s = i.transform(r.value, r);
    if (u.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((d) => (r.value = d, r.fallback = !0, r));
    if (s instanceof Promise)
      throw new vi();
    return r.value = s, r.fallback = !0, r;
  };
});
function Jp(n, i) {
  return i === void 0 && (n.issues.length || n.fallback) ? { issues: [], value: void 0 } : n;
}
const Jh = /* @__PURE__ */ U("$ZodOptional", (n, i) => {
  We.init(n, i), n._zod.optin = "optional", n._zod.optout = "optional", Ue(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), Ue(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${vc(r.source)})?$`) : void 0;
  }), n._zod.parse = (r, u) => {
    if (i.innerType._zod.optin === "optional") {
      const s = r.value, f = i.innerType._zod.run(r, u);
      return f instanceof Promise ? f.then((d) => Jp(d, s)) : Jp(f, s);
    }
    return r.value === void 0 ? r : i.innerType._zod.run(r, u);
  };
}), Pb = /* @__PURE__ */ U("$ZodExactOptional", (n, i) => {
  Jh.init(n, i), Ue(n._zod, "values", () => i.innerType._zod.values), Ue(n._zod, "pattern", () => i.innerType._zod.pattern), n._zod.parse = (r, u) => i.innerType._zod.run(r, u);
}), Fb = /* @__PURE__ */ U("$ZodNullable", (n, i) => {
  We.init(n, i), Ue(n._zod, "optin", () => i.innerType._zod.optin), Ue(n._zod, "optout", () => i.innerType._zod.optout), Ue(n._zod, "pattern", () => {
    const r = i.innerType._zod.pattern;
    return r ? new RegExp(`^(${vc(r.source)}|null)$`) : void 0;
  }), Ue(n._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), n._zod.parse = (r, u) => r.value === null ? r : i.innerType._zod.run(r, u);
}), Ib = /* @__PURE__ */ U("$ZodDefault", (n, i) => {
  We.init(n, i), n._zod.optin = "optional", Ue(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    if (r.value === void 0)
      return r.value = i.defaultValue, r;
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => Wp(f, i)) : Wp(s, i);
  };
});
function Wp(n, i) {
  return n.value === void 0 && (n.value = i.defaultValue), n;
}
const e1 = /* @__PURE__ */ U("$ZodPrefault", (n, i) => {
  We.init(n, i), n._zod.optin = "optional", Ue(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => (u.direction === "backward" || r.value === void 0 && (r.value = i.defaultValue), i.innerType._zod.run(r, u));
}), t1 = /* @__PURE__ */ U("$ZodNonOptional", (n, i) => {
  We.init(n, i), Ue(n._zod, "values", () => {
    const r = i.innerType._zod.values;
    return r ? new Set([...r].filter((u) => u !== void 0)) : void 0;
  }), n._zod.parse = (r, u) => {
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => Pp(f, n)) : Pp(s, n);
  };
});
function Pp(n, i) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: i
  }), n;
}
const n1 = /* @__PURE__ */ U("$ZodCatch", (n, i) => {
  We.init(n, i), n._zod.optin = "optional", Ue(n._zod, "optout", () => i.innerType._zod.optout), Ue(n._zod, "values", () => i.innerType._zod.values), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => (r.value = f.value, f.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: f.issues.map((d) => ka(d, u, Aa()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r)) : (r.value = s.value, s.issues.length && (r.value = i.catchValue({
      ...r,
      error: {
        issues: s.issues.map((f) => ka(f, u, Aa()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r);
  };
}), a1 = /* @__PURE__ */ U("$ZodPipe", (n, i) => {
  We.init(n, i), Ue(n._zod, "values", () => i.in._zod.values), Ue(n._zod, "optin", () => i.in._zod.optin), Ue(n._zod, "optout", () => i.out._zod.optout), Ue(n._zod, "propValues", () => i.in._zod.propValues), n._zod.parse = (r, u) => {
    if (u.direction === "backward") {
      const f = i.out._zod.run(r, u);
      return f instanceof Promise ? f.then((d) => nu(d, i.in, u)) : nu(f, i.in, u);
    }
    const s = i.in._zod.run(r, u);
    return s instanceof Promise ? s.then((f) => nu(f, i.out, u)) : nu(s, i.out, u);
  };
});
function nu(n, i, r) {
  return n.issues.length ? (n.aborted = !0, n) : i._zod.run({ value: n.value, issues: n.issues, fallback: n.fallback }, r);
}
const i1 = /* @__PURE__ */ U("$ZodReadonly", (n, i) => {
  We.init(n, i), Ue(n._zod, "propValues", () => i.innerType._zod.propValues), Ue(n._zod, "values", () => i.innerType._zod.values), Ue(n._zod, "optin", () => i.innerType?._zod?.optin), Ue(n._zod, "optout", () => i.innerType?._zod?.optout), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      return i.innerType._zod.run(r, u);
    const s = i.innerType._zod.run(r, u);
    return s instanceof Promise ? s.then(Fp) : Fp(s);
  };
});
function Fp(n) {
  return n.value = Object.freeze(n.value), n;
}
const l1 = /* @__PURE__ */ U("$ZodCustom", (n, i) => {
  Et.init(n, i), We.init(n, i), n._zod.parse = (r, u) => r, n._zod.check = (r) => {
    const u = r.value, s = i.fn(u);
    if (s instanceof Promise)
      return s.then((f) => Ip(f, r, u, n));
    Ip(s, r, u, n);
  };
});
function Ip(n, i, r, u) {
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
    u._zod.def.params && (s.params = u._zod.def.params), i.issues.push(Al(s));
  }
}
var eh;
class r1 {
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
function u1() {
  return new r1();
}
(eh = globalThis).__zod_globalRegistry ?? (eh.__zod_globalRegistry = u1());
const wl = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function o1(n, i) {
  return new n({
    type: "string",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function s1(n, i) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function th(n, i) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function c1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function f1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function d1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function m1(n, i) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function p1(n, i) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function h1(n, i) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function v1(n, i) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function y1(n, i) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function g1(n, i) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _1(n, i) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function b1(n, i) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function S1(n, i) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function w1(n, i) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function z1(n, i) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function x1(n, i) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function T1(n, i) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function E1(n, i) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function A1(n, i) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function k1(n, i) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function O1(n, i) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function C1(n, i) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function j1(n, i) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function M1(n, i) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N1(n, i) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function D1(n, i) {
  return new n({
    type: "number",
    checks: [],
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z1(n, i) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function U1(n, i) {
  return new n({
    type: "boolean",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function R1(n) {
  return new n({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(n, i) {
  return new n({
    type: "never",
    ...ae(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nh(n, i) {
  return new $h({
    check: "less_than",
    ...ae(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Qs(n, i) {
  return new $h({
    check: "less_than",
    ...ae(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function ah(n, i) {
  return new Lh({
    check: "greater_than",
    ...ae(i),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ks(n, i) {
  return new Lh({
    check: "greater_than",
    ...ae(i),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function ih(n, i) {
  return new eb({
    check: "multiple_of",
    ...ae(i),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function Wh(n, i) {
  return new nb({
    check: "max_length",
    ...ae(i),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function mu(n, i) {
  return new ab({
    check: "min_length",
    ...ae(i),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ph(n, i) {
  return new ib({
    check: "length_equals",
    ...ae(i),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function X1(n, i) {
  return new lb({
    check: "string_format",
    format: "regex",
    ...ae(i),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function H1(n) {
  return new rb({
    check: "string_format",
    format: "lowercase",
    ...ae(n)
  });
}
// @__NO_SIDE_EFFECTS__
function B1(n) {
  return new ub({
    check: "string_format",
    format: "uppercase",
    ...ae(n)
  });
}
// @__NO_SIDE_EFFECTS__
function q1(n, i) {
  return new ob({
    check: "string_format",
    format: "includes",
    ...ae(i),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function $1(n, i) {
  return new sb({
    check: "string_format",
    format: "starts_with",
    ...ae(i),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function L1(n, i) {
  return new cb({
    check: "string_format",
    format: "ends_with",
    ...ae(i),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function bi(n) {
  return new fb({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function V1(n) {
  return /* @__PURE__ */ bi((i) => i.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function G1() {
  return /* @__PURE__ */ bi((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function Q1() {
  return /* @__PURE__ */ bi((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function K1() {
  return /* @__PURE__ */ bi((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function J1() {
  return /* @__PURE__ */ bi((n) => n0(n));
}
// @__NO_SIDE_EFFECTS__
function W1(n, i, r) {
  return new n({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ae(r)
  });
}
// @__NO_SIDE_EFFECTS__
function P1(n, i, r) {
  return new n({
    type: "custom",
    check: "custom",
    fn: i,
    ...ae(r)
  });
}
// @__NO_SIDE_EFFECTS__
function F1(n, i) {
  const r = /* @__PURE__ */ I1((u) => (u.addIssue = (s) => {
    if (typeof s == "string")
      u.issues.push(Al(s, u.value, r._zod.def));
    else {
      const f = s;
      f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = u.value), f.inst ?? (f.inst = r), f.continue ?? (f.continue = !r._zod.def.abort), u.issues.push(Al(f));
    }
  }, n(u.value, u)), i);
  return r;
}
// @__NO_SIDE_EFFECTS__
function I1(n, i) {
  const r = new Et({
    check: "custom",
    ...ae(i)
  });
  return r._zod.check = n, r;
}
function Fh(n) {
  let i = n?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? wl,
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
  return v && Object.assign(d.schema, v), i.io === "input" && yt(n) && (delete d.schema.examples, delete d.schema.default), i.io === "input" && "_prefault" in d.schema && ((u = d.schema).default ?? (u.default = d.schema._prefault)), delete d.schema._prefault, i.seen.get(n).schema;
}
function Ih(n, i) {
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
function ev(n, i) {
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
        for (const Y in h)
          Y === "$ref" || Y === "allOf" || Y in _ || delete h[Y];
      if (j.$ref && k.def)
        for (const Y in h)
          Y === "$ref" || Y === "allOf" || Y in k.def && JSON.stringify(h[Y]) === JSON.stringify(k.def[Y]) && delete h[Y];
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
          input: pu(i, "input", n.processors),
          output: pu(i, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function yt(n, i) {
  const r = i ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(n))
    return !1;
  r.seen.add(n);
  const u = n._zod.def;
  if (u.type === "transform")
    return !0;
  if (u.type === "array")
    return yt(u.element, r);
  if (u.type === "set")
    return yt(u.valueType, r);
  if (u.type === "lazy")
    return yt(u.getter(), r);
  if (u.type === "promise" || u.type === "optional" || u.type === "nonoptional" || u.type === "nullable" || u.type === "readonly" || u.type === "default" || u.type === "prefault")
    return yt(u.innerType, r);
  if (u.type === "intersection")
    return yt(u.left, r) || yt(u.right, r);
  if (u.type === "record" || u.type === "map")
    return yt(u.keyType, r) || yt(u.valueType, r);
  if (u.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : yt(u.in, r) || yt(u.out, r);
  if (u.type === "object") {
    for (const s in u.shape)
      if (yt(u.shape[s], r))
        return !0;
    return !1;
  }
  if (u.type === "union") {
    for (const s of u.options)
      if (yt(s, r))
        return !0;
    return !1;
  }
  if (u.type === "tuple") {
    for (const s of u.items)
      if (yt(s, r))
        return !0;
    return !!(u.rest && yt(u.rest, r));
  }
  return !1;
}
const eS = (n, i = {}) => (r) => {
  const u = Fh({ ...r, processors: i });
  return pt(n, u), Ih(u, n), ev(u, n);
}, pu = (n, i, r = {}) => (u) => {
  const { libraryOptions: s, target: f } = u ?? {}, d = Fh({ ...s ?? {}, target: f, io: i, processors: r });
  return pt(n, d), Ih(d, n), ev(d, n);
}, tS = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, nS = (n, i, r, u) => {
  const s = r;
  s.type = "string";
  const { minimum: f, maximum: d, format: m, patterns: v, contentEncoding: h } = n._zod.bag;
  if (typeof f == "number" && (s.minLength = f), typeof d == "number" && (s.maxLength = d), m && (s.format = tS[m] ?? m, s.format === "" && delete s.format, m === "time" && delete s.format), h && (s.contentEncoding = h), v && v.size > 0) {
    const _ = [...v];
    _.length === 1 ? s.pattern = _[0].source : _.length > 1 && (s.allOf = [
      ..._.map((S) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: S.source
      }))
    ]);
  }
}, aS = (n, i, r, u) => {
  const s = r, { minimum: f, maximum: d, format: m, multipleOf: v, exclusiveMaximum: h, exclusiveMinimum: _ } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? s.type = "integer" : s.type = "number";
  const S = typeof _ == "number" && _ >= (f ?? Number.NEGATIVE_INFINITY), x = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), k = i.target === "draft-04" || i.target === "openapi-3.0";
  S ? k ? (s.minimum = _, s.exclusiveMinimum = !0) : s.exclusiveMinimum = _ : typeof f == "number" && (s.minimum = f), x ? k ? (s.maximum = h, s.exclusiveMaximum = !0) : s.exclusiveMaximum = h : typeof d == "number" && (s.maximum = d), typeof v == "number" && (s.multipleOf = v);
}, iS = (n, i, r, u) => {
  r.type = "boolean";
}, lS = (n, i, r, u) => {
  r.not = {};
}, rS = (n, i, r, u) => {
}, uS = (n, i, r, u) => {
  const s = n._zod.def, f = Mh(s.entries);
  f.every((d) => typeof d == "number") && (r.type = "number"), f.every((d) => typeof d == "string") && (r.type = "string"), r.enum = f;
}, oS = (n, i, r, u) => {
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
}, sS = (n, i, r, u) => {
  if (i.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, cS = (n, i, r, u) => {
  if (i.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, fS = (n, i, r, u) => {
  const s = r, f = n._zod.def, { minimum: d, maximum: m } = n._zod.bag;
  typeof d == "number" && (s.minItems = d), typeof m == "number" && (s.maxItems = m), s.type = "array", s.items = pt(f.element, i, {
    ...u,
    path: [...u.path, "items"]
  });
}, dS = (n, i, r, u) => {
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
}, mS = (n, i, r, u) => {
  const s = n._zod.def, f = s.inclusive === !1, d = s.options.map((m, v) => pt(m, i, {
    ...u,
    path: [...u.path, f ? "oneOf" : "anyOf", v]
  }));
  f ? r.oneOf = d : r.anyOf = d;
}, pS = (n, i, r, u) => {
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
}, hS = (n, i, r, u) => {
  const s = n._zod.def, f = pt(s.innerType, i, u), d = i.seen.get(n);
  i.target === "openapi-3.0" ? (d.ref = s.innerType, r.nullable = !0) : r.anyOf = [f, { type: "null" }];
}, vS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, yS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
}, gS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, i.io === "input" && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, _S = (n, i, r, u) => {
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
}, bS = (n, i, r, u) => {
  const s = n._zod.def, f = s.in._zod.traits.has("$ZodTransform"), d = i.io === "input" ? f ? s.out : s.in : s.out;
  pt(d, i, u);
  const m = i.seen.get(n);
  m.ref = d;
}, SS = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType, r.readOnly = !0;
}, tv = (n, i, r, u) => {
  const s = n._zod.def;
  pt(s.innerType, i, u);
  const f = i.seen.get(n);
  f.ref = s.innerType;
}, wS = /* @__PURE__ */ U("ZodISODateTime", (n, i) => {
  Tb.init(n, i), Qe.init(n, i);
});
function zS(n) {
  return /* @__PURE__ */ C1(wS, n);
}
const xS = /* @__PURE__ */ U("ZodISODate", (n, i) => {
  Eb.init(n, i), Qe.init(n, i);
});
function TS(n) {
  return /* @__PURE__ */ j1(xS, n);
}
const ES = /* @__PURE__ */ U("ZodISOTime", (n, i) => {
  Ab.init(n, i), Qe.init(n, i);
});
function AS(n) {
  return /* @__PURE__ */ M1(ES, n);
}
const kS = /* @__PURE__ */ U("ZodISODuration", (n, i) => {
  kb.init(n, i), Qe.init(n, i);
});
function OS(n) {
  return /* @__PURE__ */ N1(kS, n);
}
const CS = (n, i) => {
  Rh.init(n, i), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (r) => v0(n, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => h0(n, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        n.issues.push(r), n.message = JSON.stringify(n.issues, lc, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        n.issues.push(...r), n.message = JSON.stringify(n.issues, lc, 2);
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
}, Kt = /* @__PURE__ */ U("ZodError", CS, {
  Parent: Error
}), jS = /* @__PURE__ */ gc(Kt), MS = /* @__PURE__ */ _c(Kt), NS = /* @__PURE__ */ Su(Kt), DS = /* @__PURE__ */ wu(Kt), ZS = /* @__PURE__ */ _0(Kt), US = /* @__PURE__ */ b0(Kt), RS = /* @__PURE__ */ S0(Kt), YS = /* @__PURE__ */ w0(Kt), XS = /* @__PURE__ */ z0(Kt), HS = /* @__PURE__ */ x0(Kt), BS = /* @__PURE__ */ T0(Kt), qS = /* @__PURE__ */ E0(Kt), lh = /* @__PURE__ */ new WeakMap();
function Ml(n, i, r) {
  const u = Object.getPrototypeOf(n);
  let s = lh.get(u);
  if (s || (s = /* @__PURE__ */ new Set(), lh.set(u, s)), !s.has(i)) {
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
const Pe = /* @__PURE__ */ U("ZodType", (n, i) => (We.init(n, i), Object.assign(n["~standard"], {
  jsonSchema: {
    input: pu(n, "input"),
    output: pu(n, "output")
  }
}), n.toJSONSchema = eS(n, {}), n.def = i, n.type = i.type, Object.defineProperty(n, "_def", { value: i }), n.parse = (r, u) => jS(n, r, u, { callee: n.parse }), n.safeParse = (r, u) => NS(n, r, u), n.parseAsync = async (r, u) => MS(n, r, u, { callee: n.parseAsync }), n.safeParseAsync = async (r, u) => DS(n, r, u), n.spa = n.safeParseAsync, n.encode = (r, u) => ZS(n, r, u), n.decode = (r, u) => US(n, r, u), n.encodeAsync = async (r, u) => RS(n, r, u), n.decodeAsync = async (r, u) => YS(n, r, u), n.safeEncode = (r, u) => XS(n, r, u), n.safeDecode = (r, u) => HS(n, r, u), n.safeEncodeAsync = async (r, u) => BS(n, r, u), n.safeDecodeAsync = async (r, u) => qS(n, r, u), Ml(n, "ZodType", {
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
    return this.check(Z2(r, u));
  },
  superRefine(r, u) {
    return this.check(U2(r, u));
  },
  overwrite(r) {
    return this.check(/* @__PURE__ */ bi(r));
  },
  optional() {
    return sh(this);
  },
  exactOptional() {
    return w2(this);
  },
  nullable() {
    return ch(this);
  },
  nullish() {
    return sh(ch(this));
  },
  nonoptional(r) {
    return k2(this, r);
  },
  array() {
    return hu(this);
  },
  or(r) {
    return lv([this, r]);
  },
  and(r) {
    return y2(this, r);
  },
  transform(r) {
    return fh(this, b2(r));
  },
  default(r) {
    return T2(this, r);
  },
  prefault(r) {
    return A2(this, r);
  },
  catch(r) {
    return C2(this, r);
  },
  pipe(r) {
    return fh(this, r);
  },
  readonly() {
    return N2(this);
  },
  describe(r) {
    const u = this.clone();
    return wl.add(u, { description: r }), u;
  },
  meta(...r) {
    if (r.length === 0)
      return wl.get(this);
    const u = this.clone();
    return wl.add(u, r[0]), u;
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
    return wl.get(n)?.description;
  },
  configurable: !0
}), n)), nv = /* @__PURE__ */ U("_ZodString", (n, i) => {
  bc.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (u, s, f) => nS(n, u, s);
  const r = n._zod.bag;
  n.format = r.format ?? null, n.minLength = r.minimum ?? null, n.maxLength = r.maximum ?? null, Ml(n, "_ZodString", {
    regex(...u) {
      return this.check(/* @__PURE__ */ X1(...u));
    },
    includes(...u) {
      return this.check(/* @__PURE__ */ q1(...u));
    },
    startsWith(...u) {
      return this.check(/* @__PURE__ */ $1(...u));
    },
    endsWith(...u) {
      return this.check(/* @__PURE__ */ L1(...u));
    },
    min(...u) {
      return this.check(/* @__PURE__ */ mu(...u));
    },
    max(...u) {
      return this.check(/* @__PURE__ */ Wh(...u));
    },
    length(...u) {
      return this.check(/* @__PURE__ */ Ph(...u));
    },
    nonempty(...u) {
      return this.check(/* @__PURE__ */ mu(1, ...u));
    },
    lowercase(u) {
      return this.check(/* @__PURE__ */ H1(u));
    },
    uppercase(u) {
      return this.check(/* @__PURE__ */ B1(u));
    },
    trim() {
      return this.check(/* @__PURE__ */ G1());
    },
    normalize(...u) {
      return this.check(/* @__PURE__ */ V1(...u));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Q1());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ K1());
    },
    slugify() {
      return this.check(/* @__PURE__ */ J1());
    }
  });
}), $S = /* @__PURE__ */ U("ZodString", (n, i) => {
  bc.init(n, i), nv.init(n, i), n.email = (r) => n.check(/* @__PURE__ */ s1(LS, r)), n.url = (r) => n.check(/* @__PURE__ */ p1(VS, r)), n.jwt = (r) => n.check(/* @__PURE__ */ O1(r2, r)), n.emoji = (r) => n.check(/* @__PURE__ */ h1(GS, r)), n.guid = (r) => n.check(/* @__PURE__ */ th(rh, r)), n.uuid = (r) => n.check(/* @__PURE__ */ c1(au, r)), n.uuidv4 = (r) => n.check(/* @__PURE__ */ f1(au, r)), n.uuidv6 = (r) => n.check(/* @__PURE__ */ d1(au, r)), n.uuidv7 = (r) => n.check(/* @__PURE__ */ m1(au, r)), n.nanoid = (r) => n.check(/* @__PURE__ */ v1(QS, r)), n.guid = (r) => n.check(/* @__PURE__ */ th(rh, r)), n.cuid = (r) => n.check(/* @__PURE__ */ y1(KS, r)), n.cuid2 = (r) => n.check(/* @__PURE__ */ g1(JS, r)), n.ulid = (r) => n.check(/* @__PURE__ */ _1(WS, r)), n.base64 = (r) => n.check(/* @__PURE__ */ E1(a2, r)), n.base64url = (r) => n.check(/* @__PURE__ */ A1(i2, r)), n.xid = (r) => n.check(/* @__PURE__ */ b1(PS, r)), n.ksuid = (r) => n.check(/* @__PURE__ */ S1(FS, r)), n.ipv4 = (r) => n.check(/* @__PURE__ */ w1(IS, r)), n.ipv6 = (r) => n.check(/* @__PURE__ */ z1(e2, r)), n.cidrv4 = (r) => n.check(/* @__PURE__ */ x1(t2, r)), n.cidrv6 = (r) => n.check(/* @__PURE__ */ T1(n2, r)), n.e164 = (r) => n.check(/* @__PURE__ */ k1(l2, r)), n.datetime = (r) => n.check(zS(r)), n.date = (r) => n.check(TS(r)), n.time = (r) => n.check(AS(r)), n.duration = (r) => n.check(OS(r));
});
function gt(n) {
  return /* @__PURE__ */ o1($S, n);
}
const Qe = /* @__PURE__ */ U("ZodStringFormat", (n, i) => {
  Ge.init(n, i), nv.init(n, i);
}), LS = /* @__PURE__ */ U("ZodEmail", (n, i) => {
  vb.init(n, i), Qe.init(n, i);
}), rh = /* @__PURE__ */ U("ZodGUID", (n, i) => {
  pb.init(n, i), Qe.init(n, i);
}), au = /* @__PURE__ */ U("ZodUUID", (n, i) => {
  hb.init(n, i), Qe.init(n, i);
}), VS = /* @__PURE__ */ U("ZodURL", (n, i) => {
  yb.init(n, i), Qe.init(n, i);
}), GS = /* @__PURE__ */ U("ZodEmoji", (n, i) => {
  gb.init(n, i), Qe.init(n, i);
}), QS = /* @__PURE__ */ U("ZodNanoID", (n, i) => {
  _b.init(n, i), Qe.init(n, i);
}), KS = /* @__PURE__ */ U("ZodCUID", (n, i) => {
  bb.init(n, i), Qe.init(n, i);
}), JS = /* @__PURE__ */ U("ZodCUID2", (n, i) => {
  Sb.init(n, i), Qe.init(n, i);
}), WS = /* @__PURE__ */ U("ZodULID", (n, i) => {
  wb.init(n, i), Qe.init(n, i);
}), PS = /* @__PURE__ */ U("ZodXID", (n, i) => {
  zb.init(n, i), Qe.init(n, i);
}), FS = /* @__PURE__ */ U("ZodKSUID", (n, i) => {
  xb.init(n, i), Qe.init(n, i);
}), IS = /* @__PURE__ */ U("ZodIPv4", (n, i) => {
  Ob.init(n, i), Qe.init(n, i);
}), e2 = /* @__PURE__ */ U("ZodIPv6", (n, i) => {
  Cb.init(n, i), Qe.init(n, i);
}), t2 = /* @__PURE__ */ U("ZodCIDRv4", (n, i) => {
  jb.init(n, i), Qe.init(n, i);
}), n2 = /* @__PURE__ */ U("ZodCIDRv6", (n, i) => {
  Mb.init(n, i), Qe.init(n, i);
}), a2 = /* @__PURE__ */ U("ZodBase64", (n, i) => {
  Nb.init(n, i), Qe.init(n, i);
}), i2 = /* @__PURE__ */ U("ZodBase64URL", (n, i) => {
  Zb.init(n, i), Qe.init(n, i);
}), l2 = /* @__PURE__ */ U("ZodE164", (n, i) => {
  Ub.init(n, i), Qe.init(n, i);
}), r2 = /* @__PURE__ */ U("ZodJWT", (n, i) => {
  Yb.init(n, i), Qe.init(n, i);
}), av = /* @__PURE__ */ U("ZodNumber", (n, i) => {
  Gh.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (u, s, f) => aS(n, u, s), Ml(n, "ZodNumber", {
    gt(u, s) {
      return this.check(/* @__PURE__ */ ah(u, s));
    },
    gte(u, s) {
      return this.check(/* @__PURE__ */ Ks(u, s));
    },
    min(u, s) {
      return this.check(/* @__PURE__ */ Ks(u, s));
    },
    lt(u, s) {
      return this.check(/* @__PURE__ */ nh(u, s));
    },
    lte(u, s) {
      return this.check(/* @__PURE__ */ Qs(u, s));
    },
    max(u, s) {
      return this.check(/* @__PURE__ */ Qs(u, s));
    },
    int(u) {
      return this.check(uh(u));
    },
    safe(u) {
      return this.check(uh(u));
    },
    positive(u) {
      return this.check(/* @__PURE__ */ ah(0, u));
    },
    nonnegative(u) {
      return this.check(/* @__PURE__ */ Ks(0, u));
    },
    negative(u) {
      return this.check(/* @__PURE__ */ nh(0, u));
    },
    nonpositive(u) {
      return this.check(/* @__PURE__ */ Qs(0, u));
    },
    multipleOf(u, s) {
      return this.check(/* @__PURE__ */ ih(u, s));
    },
    step(u, s) {
      return this.check(/* @__PURE__ */ ih(u, s));
    },
    finite() {
      return this;
    }
  });
  const r = n._zod.bag;
  n.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), n.isFinite = !0, n.format = r.format ?? null;
});
function u2(n) {
  return /* @__PURE__ */ D1(av, n);
}
const o2 = /* @__PURE__ */ U("ZodNumberFormat", (n, i) => {
  Xb.init(n, i), av.init(n, i);
});
function uh(n) {
  return /* @__PURE__ */ Z1(o2, n);
}
const s2 = /* @__PURE__ */ U("ZodBoolean", (n, i) => {
  Hb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => iS(n, r, u);
});
function iv(n) {
  return /* @__PURE__ */ U1(s2, n);
}
const c2 = /* @__PURE__ */ U("ZodUnknown", (n, i) => {
  Bb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => rS();
});
function oh() {
  return /* @__PURE__ */ R1(c2);
}
const f2 = /* @__PURE__ */ U("ZodNever", (n, i) => {
  qb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => lS(n, r, u);
});
function d2(n) {
  return /* @__PURE__ */ Y1(f2, n);
}
const m2 = /* @__PURE__ */ U("ZodArray", (n, i) => {
  $b.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => fS(n, r, u, s), n.element = i.element, Ml(n, "ZodArray", {
    min(r, u) {
      return this.check(/* @__PURE__ */ mu(r, u));
    },
    nonempty(r) {
      return this.check(/* @__PURE__ */ mu(1, r));
    },
    max(r, u) {
      return this.check(/* @__PURE__ */ Wh(r, u));
    },
    length(r, u) {
      return this.check(/* @__PURE__ */ Ph(r, u));
    },
    unwrap() {
      return this.element;
    }
  });
});
function hu(n, i) {
  return /* @__PURE__ */ W1(m2, n, i);
}
const p2 = /* @__PURE__ */ U("ZodObject", (n, i) => {
  Vb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => dS(n, r, u, s), Ue(n, "shape", () => i.shape), Ml(n, "ZodObject", {
    keyof() {
      return vu(Object.keys(this._zod.def.shape));
    },
    catchall(r) {
      return this.clone({ ...this._zod.def, catchall: r });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: oh() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: oh() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: d2() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(r) {
      return s0(this, r);
    },
    safeExtend(r) {
      return c0(this, r);
    },
    merge(r) {
      return f0(this, r);
    },
    pick(r) {
      return u0(this, r);
    },
    omit(r) {
      return o0(this, r);
    },
    partial(...r) {
      return d0(rv, this, r[0]);
    },
    required(...r) {
      return m0(uv, this, r[0]);
    }
  });
});
function kl(n, i) {
  const r = {
    type: "object",
    shape: n ?? {},
    ...ae(i)
  };
  return new p2(r);
}
const h2 = /* @__PURE__ */ U("ZodUnion", (n, i) => {
  Gb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => mS(n, r, u, s), n.options = i.options;
});
function lv(n, i) {
  return new h2({
    type: "union",
    options: n,
    ...ae(i)
  });
}
const v2 = /* @__PURE__ */ U("ZodIntersection", (n, i) => {
  Qb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => pS(n, r, u, s);
});
function y2(n, i) {
  return new v2({
    type: "intersection",
    left: n,
    right: i
  });
}
const uc = /* @__PURE__ */ U("ZodEnum", (n, i) => {
  Kb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (u, s, f) => uS(n, u, s), n.enum = i.entries, n.options = Object.values(i.entries);
  const r = new Set(Object.keys(i.entries));
  n.extract = (u, s) => {
    const f = {};
    for (const d of u)
      if (r.has(d))
        f[d] = i.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new uc({
      ...i,
      checks: [],
      ...ae(s),
      entries: f
    });
  }, n.exclude = (u, s) => {
    const f = { ...i.entries };
    for (const d of u)
      if (r.has(d))
        delete f[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new uc({
      ...i,
      checks: [],
      ...ae(s),
      entries: f
    });
  };
});
function vu(n, i) {
  const r = Array.isArray(n) ? Object.fromEntries(n.map((u) => [u, u])) : n;
  return new uc({
    type: "enum",
    entries: r,
    ...ae(i)
  });
}
const g2 = /* @__PURE__ */ U("ZodLiteral", (n, i) => {
  Jb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => oS(n, r, u), n.values = new Set(i.values), Object.defineProperty(n, "value", {
    get() {
      if (i.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return i.values[0];
    }
  });
});
function yu(n, i) {
  return new g2({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...ae(i)
  });
}
const _2 = /* @__PURE__ */ U("ZodTransform", (n, i) => {
  Wb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => cS(n, r), n._zod.parse = (r, u) => {
    if (u.direction === "backward")
      throw new jh(n.constructor.name);
    r.addIssue = (f) => {
      if (typeof f == "string")
        r.issues.push(Al(f, r.value, i));
      else {
        const d = f;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = n), r.issues.push(Al(d));
      }
    };
    const s = i.transform(r.value, r);
    return s instanceof Promise ? s.then((f) => (r.value = f, r.fallback = !0, r)) : (r.value = s, r.fallback = !0, r);
  };
});
function b2(n) {
  return new _2({
    type: "transform",
    transform: n
  });
}
const rv = /* @__PURE__ */ U("ZodOptional", (n, i) => {
  Jh.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => tv(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function sh(n) {
  return new rv({
    type: "optional",
    innerType: n
  });
}
const S2 = /* @__PURE__ */ U("ZodExactOptional", (n, i) => {
  Pb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => tv(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function w2(n) {
  return new S2({
    type: "optional",
    innerType: n
  });
}
const z2 = /* @__PURE__ */ U("ZodNullable", (n, i) => {
  Fb.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => hS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function ch(n) {
  return new z2({
    type: "nullable",
    innerType: n
  });
}
const x2 = /* @__PURE__ */ U("ZodDefault", (n, i) => {
  Ib.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => yS(n, r, u, s), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function T2(n, i) {
  return new x2({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Dh(i);
    }
  });
}
const E2 = /* @__PURE__ */ U("ZodPrefault", (n, i) => {
  e1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => gS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function A2(n, i) {
  return new E2({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof i == "function" ? i() : Dh(i);
    }
  });
}
const uv = /* @__PURE__ */ U("ZodNonOptional", (n, i) => {
  t1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => vS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function k2(n, i) {
  return new uv({
    type: "nonoptional",
    innerType: n,
    ...ae(i)
  });
}
const O2 = /* @__PURE__ */ U("ZodCatch", (n, i) => {
  n1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => _S(n, r, u, s), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function C2(n, i) {
  return new O2({
    type: "catch",
    innerType: n,
    catchValue: typeof i == "function" ? i : () => i
  });
}
const j2 = /* @__PURE__ */ U("ZodPipe", (n, i) => {
  a1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => bS(n, r, u, s), n.in = i.in, n.out = i.out;
});
function fh(n, i) {
  return new j2({
    type: "pipe",
    in: n,
    out: i
    // ...util.normalizeParams(params),
  });
}
const M2 = /* @__PURE__ */ U("ZodReadonly", (n, i) => {
  i1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => SS(n, r, u, s), n.unwrap = () => n._zod.def.innerType;
});
function N2(n) {
  return new M2({
    type: "readonly",
    innerType: n
  });
}
const D2 = /* @__PURE__ */ U("ZodCustom", (n, i) => {
  l1.init(n, i), Pe.init(n, i), n._zod.processJSONSchema = (r, u, s) => sS(n, r);
});
function Z2(n, i = {}) {
  return /* @__PURE__ */ P1(D2, n, i);
}
function U2(n, i) {
  return /* @__PURE__ */ F1(n, i);
}
const Sc = gt().regex(/^[a-z0-9_]+\.[a-z0-9_]+$/, "Must be a Home Assistant entity ID"), Ce = Sc.optional(), R2 = kl({
  segment_id: u2().int().nonnegative(),
  area_id: gt().min(1).optional(),
  name: gt().min(1),
  icon: gt().optional(),
  include_in_floor_clean: iv().optional().default(!0)
}).passthrough(), Y2 = kl({
  id: gt().min(1),
  name: gt().min(1),
  map_entity: Sc,
  map_select_option: gt().min(1).optional(),
  assisted_carry: iv().optional().default(!1),
  rooms: hu(R2).min(1)
}).passthrough(), X2 = kl({
  id: gt().min(1),
  name: gt().min(1),
  icon: gt().optional(),
  strategy: vu(["custom", "smartplan"]),
  cleaning_type: vu(["vacuum", "vacuum_and_mop", "vacuum_then_mop"]).optional(),
  fan_speed: gt().optional(),
  mop_mode: gt().optional(),
  mop_intensity: gt().optional(),
  cleaning_count: lv([yu(1), yu(2)]).optional()
}).passthrough(), ov = kl({
  type: yu("custom:roborock-vacuum-map-card").optional(),
  entity: Sc.refine((n) => n.startsWith("vacuum."), "Entity must be a vacuum"),
  name: gt().optional(),
  language: vu(["en", "nl"]).optional().default("en"),
  entities: kl({
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
    error: Ce
  }).passthrough().optional().default({}),
  floors: hu(Y2).min(1),
  presets: hu(X2).optional().default([]),
  default_preset: gt().optional().default("vacuum_only"),
  vacuum_mode_fallback: yu("set_clean_motor_mode").optional()
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
function H2(n) {
  return ov.parse(n);
}
function B2(n) {
  const i = ov.safeParse(n);
  return i.success ? [] : i.error.issues.map((r) => `${r.path.join(".") || "config"}: ${r.message}`);
}
function sv() {
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
function iu(n) {
  return typeof n == "number" && Number.isFinite(n);
}
function q2(n) {
  const i = n?.attributes.calibration_points;
  return Array.isArray(i) ? i.flatMap((r) => {
    const u = r;
    return !iu(u.vacuum?.x) || !iu(u.vacuum?.y) || !iu(u.map?.x) || !iu(u.map?.y) ? [] : [u];
  }) : [];
}
function cv(n) {
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
function zl(n, i, r) {
  if (r.length < 3) throw new Error("At least three calibration points are required");
  const [u, s, f] = r, d = s.vacuum.x - u.vacuum.x, m = s.vacuum.y - u.vacuum.y, v = f.vacuum.x - u.vacuum.x, h = f.vacuum.y - u.vacuum.y, _ = d * h - m * v;
  if (_ === 0) throw new Error("Calibration points are degenerate");
  const S = n - u.vacuum.x, x = i - u.vacuum.y, k = (S * h - x * v) / _, j = (d * x - m * S) / _;
  return {
    x: u.map.x + k * (s.map.x - u.map.x) + j * (f.map.x - u.map.x),
    y: u.map.y + k * (s.map.y - u.map.y) + j * (f.map.y - u.map.y)
  };
}
function $2(n, i) {
  return `${[
    zl(n.x0, n.y0, i),
    zl(n.x1, n.y0, i),
    zl(n.x1, n.y1, i),
    zl(n.x0, n.y1, i)
  ].map((u, s) => `${s === 0 ? "M" : "L"} ${u.x} ${u.y}`).join(" ")} Z`;
}
function L2(n, i) {
  return zl((n.x0 + n.x1) / 2, (n.y0 + n.y1) / 2, i);
}
function V2(n) {
  return new Map(n.rooms.map((i) => [i.segment_id, i]));
}
function lu(n, i, r) {
  const u = [...n], [s] = u.splice(i, 1);
  return u.splice(r, 0, s), u;
}
function G2(n, i) {
  return Object.keys(n.states).filter((r) => r.startsWith(`${i}.`)).sort();
}
function Js({
  hass: n,
  domain: i,
  value: r,
  optional: u,
  onChange: s
}) {
  return /* @__PURE__ */ g.jsxs("select", { value: r ?? "", onChange: (f) => s(f.target.value || void 0), children: [
    /* @__PURE__ */ g.jsx("option", { value: "", children: u ? "Not configured" : `Select ${i}` }),
    G2(n, i).map((f) => /* @__PURE__ */ g.jsx("option", { children: f }, f))
  ] });
}
function Q2({
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
function K2({ hass: n, config: i, onChange: r }) {
  const u = B2(i), s = (m, v) => {
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
        /* @__PURE__ */ g.jsx(Js, { hass: n, domain: "vacuum", value: i.entity, onChange: (m) => m && r({ ...i, entity: m }) })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("section", { children: [
      /* @__PURE__ */ g.jsx("h3", { children: "Entities" }),
      [
        ["map_select", "select", "Floor selector"],
        ["cleaning_mode", "select", "Cleaning mode"],
        ["vacuum_then_mop_script", "script", "Vac followed by Mop script"],
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
        ["error", "sensor", "Error"]
      ].map(([m, v, h]) => /* @__PURE__ */ g.jsxs("label", { children: [
        h,
        /* @__PURE__ */ g.jsx(Js, { hass: n, domain: v, optional: !0, value: i.entities?.[m], onChange: (_) => r({ ...i, entities: { ...i.entities, [m]: _ } }) })
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
          /* @__PURE__ */ g.jsx(Xp, {}),
          " Add floor"
        ] })
      ] }),
      i.floors.map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name || `Floor ${v + 1}` }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor up", disabled: v === 0, onClick: () => r({ ...i, floors: lu(i.floors, v, v - 1) }), children: /* @__PURE__ */ g.jsx(Up, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move floor down", disabled: v === i.floors.length - 1, onClick: () => r({ ...i, floors: lu(i.floors, v, v + 1) }), children: /* @__PURE__ */ g.jsx(Zp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove floor", disabled: i.floors.length === 1, onClick: () => r({ ...i, floors: i.floors.filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(cu, {}) })
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
            /* @__PURE__ */ g.jsx(Js, { hass: n, domain: "image", value: m.map_entity, onChange: (h) => {
              if (!h) return;
              const _ = cv(n.states[h]), S = new Map(m.rooms.map((k) => [k.segment_id, k])), x = _.map((k) => ({
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
            /* @__PURE__ */ g.jsx(Q2, { areas: d, value: h.area_id, onChange: (S) => {
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
          /* @__PURE__ */ g.jsx(Xp, {}),
          " Add preset"
        ] })
      ] }),
      (i.presets ?? []).map((m, v) => /* @__PURE__ */ g.jsxs("article", { className: "editor-card", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "editor-heading", children: [
          /* @__PURE__ */ g.jsx("strong", { children: m.name }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset up", disabled: v === 0, onClick: () => r({ ...i, presets: lu(i.presets ?? [], v, v - 1) }), children: /* @__PURE__ */ g.jsx(Up, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Move preset down", disabled: v === (i.presets?.length ?? 0) - 1, onClick: () => r({ ...i, presets: lu(i.presets ?? [], v, v + 1) }), children: /* @__PURE__ */ g.jsx(Zp, {}) }),
            /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Remove preset", onClick: () => r({ ...i, presets: (i.presets ?? []).filter((h, _) => _ !== v) }), children: /* @__PURE__ */ g.jsx(cu, {}) })
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
const J2 = /* @__PURE__ */ new Set([
  "idle",
  "preparing",
  "carry_upstairs",
  "cleaning_upstairs",
  "carry_downstairs",
  "finishing",
  "complete",
  "error"
]);
class Ol extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "AssistedCarryError";
  }
  operation;
}
function W2(n) {
  return n.floors.find((i) => i.assisted_carry);
}
function P2(n, i) {
  const r = i.entities?.assisted_carry_stage, u = r ? n.states[r]?.state : void 0;
  return u && J2.has(u) ? u : "idle";
}
function F2(n, i) {
  if (i.strategy !== "smartplan" && !i.fan_speed)
    throw new Ol("prepare", "Suction is required");
  if (i.strategy !== "smartplan" && i.cleaning_type !== "vacuum" && (!i.mop_mode || !i.mop_intensity))
    throw new Ol("prepare", "Water flow and route are required");
  return {
    segment_ids: [...new Set(n)],
    strategy: i.strategy,
    cleaning_type: i.cleaning_type,
    fan_speed: i.strategy === "smartplan" ? void 0 : i.fan_speed,
    mop_mode: i.strategy === "smartplan" || i.cleaning_type === "vacuum" ? void 0 : i.mop_mode,
    mop_intensity: i.strategy === "smartplan" || i.cleaning_type === "vacuum" ? void 0 : i.mop_intensity,
    cleaning_count: i.strategy === "smartplan" || i.cleaning_type === "vacuum_then_mop" ? 1 : i.cleaning_count
  };
}
function I2(n) {
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
function ew(n) {
  if (!(!n || ["unknown", "unavailable"].includes(n)))
    try {
      const i = JSON.parse(n);
      if (!Array.isArray(i.s) || !i.s.every((m) => Number.isInteger(m)) || ![1, 2].includes(Number(i.c))) return;
      const r = i.g === void 0 ? "custom" : i.g, u = i.t === void 0 ? "vacuum_and_mop" : i.t;
      if (!["custom", "smartplan"].includes(String(r)) || !["vacuum", "vacuum_and_mop", "vacuum_then_mop"].includes(String(u))) return;
      const s = typeof i.f == "string" ? i.f : void 0, f = typeof i.m == "string" ? i.m : void 0, d = typeof i.w == "string" ? i.w : void 0;
      return r === "custom" && !s || r === "custom" && u !== "vacuum" && (!f || !d) ? void 0 : {
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
function gi(n, i, r) {
  if (!i || !n.states[i] || n.states[i].state === "unavailable")
    throw new Ol(r, `${i ?? "entity"} is unavailable`);
  return i;
}
async function hi(n, i, r) {
  const u = gi(n, i.entities?.assisted_carry_stage, "set_stage");
  await n.callService("input_select", "select_option", { option: r }, { entity_id: u });
}
async function tw(n, i, r) {
  const u = gi(n, i.entities?.assisted_carry_job, "save_job"), s = gi(n, i.entities?.assisted_carry_prepare_script, "prepare");
  await n.callService("input_text", "set_value", { value: I2(r) }, { entity_id: u }), await hi(n, i, "preparing"), await n.callService("script", "turn_on", {}, { entity_id: s });
}
async function nw(n, i, r, u) {
  const s = gi(n, i.entities?.assisted_carry_start_script, "start_upstairs"), f = r.rooms.filter((m) => u.segment_ids.includes(m.segment_id)).map((m) => m.area_id).filter((m) => !!m);
  if (f.length === 0) throw new Ol("start_upstairs", "No mapped rooms were saved");
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
async function aw(n, i) {
  const r = gi(n, i.entities?.assisted_carry_finish_script, "finish");
  await n.callService("script", "turn_on", {}, { entity_id: r });
}
async function dh(n, i) {
  await hi(n, i, "idle");
  const r = gi(n, i.entities?.assisted_carry_job, "reset");
  await n.callService("input_text", "set_value", { value: "" }, { entity_id: r });
}
const ru = {
  pause: 4,
  stop: 8,
  returnHome: 16,
  start: 8192
};
function uu(n, i) {
  if (!i) return [];
  const r = n.states[i];
  return !r || r.state === "unavailable" ? [] : Array.isArray(r.attributes.options) ? r.attributes.options.map(String) : [];
}
function iw(n, i) {
  const r = n.states[i.entity], u = Number(r?.attributes.supported_features ?? 0), s = Array.isArray(r?.attributes.fan_speed_list) ? r.attributes.fan_speed_list.map(String) : [], f = uu(n, i.entities?.map_select), d = uu(n, i.entities?.cleaning_mode), m = uu(n, i.entities?.mop_mode), v = uu(n, i.entities?.mop_intensity);
  return {
    fanSpeeds: s,
    mapOptions: f,
    cleaningModes: d,
    mopModes: m,
    mopIntensities: v,
    canStart: !!(u & ru.start),
    canPause: !!(u & ru.pause),
    canStop: !!(u & ru.stop),
    canDock: !!(u & ru.returnHome),
    hasMapSelect: f.length > 0,
    hasCleaningMode: d.length > 0,
    hasMopMode: m.length > 0,
    hasMopIntensity: v.length > 0
  };
}
function lw(n) {
  return ["cleaning", "paused", "returning", "returning_home", "error", "unavailable"].includes(n ?? "unavailable");
}
function rw(n) {
  return ["cleaning", "paused", "returning", "returning_home"].includes(n ?? "");
}
const uw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
}, ow = {
  light: 0,
  balanced: 1,
  deep: 2,
  smart: 10
}, sw = {
  normal: 0,
  warm: 1,
  hot: 2
}, cw = {
  smart: 0,
  light: 1,
  balanced: 2,
  max: 4
}, fw = {
  "2h": 7200,
  "3h": 10800,
  "4h": 14400
};
class An extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "DockExecutionError";
  }
  operation;
}
async function Ft(n, i, r, u) {
  const s = { command: r };
  u !== void 0 && (s.params = u), await n.callService("vacuum", "send_command", s, { entity_id: i.entity });
}
function ou(n, i, r) {
  const u = n[i];
  if (u === void 0) throw new An(r, `Unsupported value: ${i}`);
  return u;
}
function dw(n) {
  if (n === "smart") return { smart_wash: 1, wash_interval: 1200 };
  const i = Number(n.replace("_min", ""));
  if (![10, 15, 20, 25, 30].includes(i))
    throw new An("mop_wash_frequency", `Unsupported value: ${n}`);
  return { smart_wash: 0, wash_interval: i * 60 };
}
async function mw(n, i, r, u) {
  const s = i.entities?.[uw[r]];
  if (!s) return;
  const f = s.split(".")[0];
  if (typeof u == "boolean") {
    if (!["input_boolean", "switch"].includes(f))
      throw new An(r, `${s} is not a boolean helper`);
    await n.callService(f, u ? "turn_on" : "turn_off", {}, { entity_id: s });
    return;
  }
  if (!["input_select", "select"].includes(f))
    throw new An(r, `${s} is not a select helper`);
  await n.callService(f, "select_option", { option: u }, { entity_id: s });
}
async function pw(n, i, r, u) {
  try {
    switch (r) {
      case "mop_wash_frequency":
        await Ft(n, i, "set_smart_wash_params", dw(String(u)));
        break;
      case "wash_mode":
        await Ft(n, i, "set_wash_towel_mode", {
          wash_mode: ou(ow, String(u), r)
        });
        break;
      case "wash_temperature":
        await Ft(n, i, "set_wash_water_temperature", {
          values: ou(sw, String(u), r)
        });
        break;
      case "auto_empty":
        await Ft(n, i, "set_dust_collection_switch_status", { status: u ? 1 : 0 });
        break;
      case "empty_mode":
        await Ft(n, i, "set_dust_collection_mode", {
          mode: ou(cw, String(u), r)
        });
        break;
      case "auto_dry":
        await Ft(n, i, "app_set_dryer_setting", { status: u ? 1 : 0 });
        break;
      case "dry_duration":
        await Ft(n, i, "app_set_dryer_setting", {
          on: { dry_time: ou(fw, String(u), r) }
        });
        break;
    }
    await mw(n, i, r, u);
  } catch (s) {
    throw s instanceof An ? s : new An(r, s instanceof Error ? s.message : String(s), { cause: s });
  }
}
async function Ws(n, i, r, u = !1) {
  const s = `${u ? "stop" : "start"}_${r}`;
  try {
    r === "empty" && await Ft(n, i, u ? "app_stop_collect_dust" : "app_start_collect_dust"), r === "wash" && await Ft(n, i, u ? "app_stop_wash" : "app_start_wash"), r === "dry" && await Ft(n, i, "app_set_dryer_status", { status: u ? 0 : 1 }), r === "drain" && await Ft(n, i, "app_empty_rinse_tank_water");
  } catch (f) {
    throw new An(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
const hw = /* @__PURE__ */ new Set(["standard", "deep", "deep_plus", "fast"]);
class Be extends Error {
  constructor(i, r, u) {
    super(r, u), this.operation = i, this.name = "JobExecutionError";
  }
  operation;
}
async function vw(n, i, r, u, s, f) {
  const d = Date.now();
  for (; Date.now() - d < u; ) {
    if (n().states[i]?.state === r) return;
    await f(s);
  }
  throw new Be("wait_for_state", `${i} did not become “${r}” within ${u / 1e3}s`);
}
function xl(n, i, r, u) {
  const s = n.states[i];
  if (!s || s.state === "unavailable") throw new Be(u, `${i} is unavailable`);
  if (!(Array.isArray(s.attributes.options) ? s.attributes.options.map(String) : []).includes(r)) throw new Be(u, `${i} does not support “${r}”`);
}
async function _l(n, i, r, u, s, f, d) {
  const m = n();
  if (xl(m, i, r, u), m.states[i]?.state !== r)
    try {
      await m.callService("select", "select_option", { option: r }, { entity_id: i }), await vw(n, i, r, s, f, d);
    } catch (v) {
      throw v instanceof Be ? new Be(u, v.message, { cause: v }) : new Be(u, v instanceof Error ? v.message : String(v), { cause: v });
    }
}
async function yw(n, i) {
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
    throw new Be("set_cleaning_mode", u instanceof Error ? u.message : String(u), { cause: u });
  }
}
async function fv(n, i, r, u, s) {
  try {
    await n.callService("vacuum", "send_command", { command: r, params: u }, { entity_id: i.entity });
  } catch (f) {
    throw new Be(s, f instanceof Error ? f.message : String(f), { cause: f });
  }
}
async function mh(n, i, r) {
  await fv(n, i, "set_clean_repeat_times", { repeat: r }, "set_cleaning_count");
}
async function gw(n, i) {
  await fv(
    n,
    i,
    "set_clean_motor_mode",
    [{ fan_power: 110, water_box_mode: 209, mop_mode: 306 }],
    "set_smartplan"
  );
}
function ph(n, i, r) {
  const u = n.states[i]?.attributes.fan_speed_list;
  if (!(Array.isArray(u) ? u.map(String) : []).includes(r))
    throw new Be("set_fan_speed", `${i} does not support “${r}”`);
}
async function _w({
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
  if (!h || h.state === "unavailable") throw new Be("preflight", `${i.entity} is unavailable`);
  if (lw(h.state)) throw new Be("preflight", `Vacuum is ${h.state}`);
  const _ = i.entities?.error ? v.states[i.entities.error] : void 0;
  if (_ && !["none", "unknown", "unavailable", ""].includes(_.state))
    throw new Be("preflight", `Vacuum error: ${_.state}`);
  const S = [...new Set(u.map((Y) => Y.area_id).filter((Y) => !!Y))];
  if (S.length === 0) throw new Be("preflight", "Select at least one room mapped to a Home Assistant area");
  const x = i.entities?.map_select, k = async () => {
    if (!(i.floors.length <= 1)) {
      if (!x || !r.map_select_option) throw new Be("select_floor", "This floor has no map selector mapping");
      if (await _l(n, x, r.map_select_option, "select_floor", f, d, m), d > 0 && await m(d), n().states[x]?.state !== r.map_select_option)
        throw new Be("select_floor", `${x} did not stay on “${r.map_select_option}”`);
    }
  };
  if (await k(), s.cleaning_type === "vacuum_then_mop" && s.strategy !== "smartplan") {
    const Y = i.entities?.vacuum_then_mop_script, K = Y ? n().states[Y] : void 0;
    if (!Y || !K || K.state === "unavailable")
      throw new Be("start_vacuum_then_mop", "Vac followed by Mop requires an available orchestration script");
    const B = i.entities?.cleaning_mode;
    if (!B)
      throw new Be("set_cleaning_mode", "Vac followed by Mop requires a cleaning-mode entity");
    if (xl(n(), B, "vacuum", "set_cleaning_mode"), xl(n(), B, "mop", "set_cleaning_mode"), s.mop_mode) {
      const H = i.entities?.mop_mode;
      if (!H) throw new Be("set_mop_mode", "The selected profile requires a mop-mode entity");
      xl(n(), H, s.mop_mode, "set_mop_mode");
    }
    if (s.mop_intensity) {
      const H = i.entities?.mop_intensity;
      if (!H) throw new Be("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      xl(n(), H, s.mop_intensity, "set_mop_intensity");
    }
    s.fan_speed && ph(n(), i.entity, s.fan_speed), await k();
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
        { entity_id: Y }
      );
    } catch (H) {
      throw new Be("start_vacuum_then_mop", H instanceof Error ? H.message : String(H), { cause: H });
    }
    return S;
  }
  if (s.strategy === "smartplan")
    await gw(n(), i), await mh(n(), i, 1);
  else {
    const Y = i.entities?.cleaning_mode, K = s.cleaning_type === "vacuum" ? "vacuum" : "vac_and_mop", B = Y && n().states[Y]?.attributes.options;
    if (Y && Array.isArray(B) && B.map(String).includes(K))
      await _l(n, Y, K, "set_cleaning_mode", f, d, m);
    else if (s.cleaning_type === "vacuum" && i.vacuum_mode_fallback === "set_clean_motor_mode")
      await yw(n(), i);
    else if (s.cleaning_type === "vacuum")
      throw new Be("set_cleaning_mode", "Vacuum-only requires a cleaning-mode entity");
    const H = i.entities?.mop_mode;
    if (s.cleaning_type !== "vacuum" && s.mop_mode) {
      if (!H) throw new Be("set_mop_mode", "The selected profile requires a mop-mode entity");
      n().states[H]?.state === "smart_mode" && hw.has(s.mop_mode) && await _l(n, H, "custom", "leave_smartplan", f, d, m), await _l(n, H, s.mop_mode, "set_mop_mode", f, d, m);
    }
    if (s.cleaning_type !== "vacuum" && s.mop_intensity) {
      const X = i.entities?.mop_intensity;
      if (!X) throw new Be("set_mop_intensity", "The selected profile requires a mop-intensity entity");
      await _l(n, X, s.mop_intensity, "set_mop_intensity", f, d, m);
    }
    if (s.fan_speed) {
      const X = n();
      ph(X, i.entity, s.fan_speed);
      try {
        await X.callService("vacuum", "set_fan_speed", { fan_speed: s.fan_speed }, { entity_id: i.entity });
      } catch (V) {
        throw new Be("set_fan_speed", V instanceof Error ? V.message : String(V), { cause: V });
      }
    }
    await mh(n(), i, s.cleaning_count);
  }
  await k();
  const j = new Set(u.map((Y) => Y.segment_id)), q = u.length === r.rooms.length && r.rooms.every((Y) => j.has(Y.segment_id));
  try {
    q ? await n().callService("vacuum", "start", void 0, { entity_id: i.entity }) : await n().callService(
      "vacuum",
      "clean_area",
      { cleaning_area_id: S },
      { entity_id: i.entity }
    );
  } catch (Y) {
    throw new Be(q ? "start_floor" : "clean_area", Y instanceof Error ? Y.message : String(Y), { cause: Y });
  }
  return S;
}
const bw = {
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
  vacuumThenMopDescription: "Vacuum first, then mop separately for better results.",
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
  assisted_error_description: "Check the robot and dock, then reset the workflow to try again."
}, Sw = {
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
  vacuumThenMopDescription: "Eerst stofzuigen en daarna apart dweilen voor een beter resultaat.",
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
  assisted_error_description: "Controleer de robot en het dock en reset daarna de workflow."
};
function Q(n, i) {
  return (n === "nl" ? Sw : bw)[i];
}
const ww = [
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
function zw(n, i, r) {
  const u = i.cleaningModes.includes("vacuum") || n.vacuum_mode_fallback === "set_clean_motor_mode";
  if (r.cleaning_type === "vacuum" && !u)
    return "cleaning mode “vacuum”";
  if (r.cleaning_type === "vacuum_then_mop") {
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
function xw(n, i) {
  return [...ww, ...n.presets ?? []].map((r) => {
    const u = zw(n, i, r);
    return {
      preset: r,
      available: !u,
      reason: u ? `Unsupported ${u}` : void 0
    };
  });
}
function gu(n) {
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
const Tw = {
  mop_wash_frequency: ["smart", "10_min", "15_min", "20_min", "25_min", "30_min"],
  wash_mode: ["smart", "light", "balanced", "deep"],
  wash_temperature: ["normal", "warm", "hot"],
  empty_mode: ["smart", "light", "balanced", "max"],
  dry_duration: ["2h", "3h", "4h"]
}, Ew = {
  mop_wash_frequency: "smart",
  wash_mode: "smart",
  wash_temperature: "hot",
  auto_empty: !1,
  empty_mode: "smart",
  auto_dry: !0,
  dry_duration: "3h"
}, Aw = {
  mop_wash_frequency: "dock_mop_wash_frequency",
  wash_mode: "dock_wash_mode",
  wash_temperature: "dock_wash_temperature",
  auto_empty: "dock_auto_empty",
  empty_mode: "dock_empty_mode",
  auto_dry: "dock_auto_dry",
  dry_duration: "dock_dry_duration"
};
function xa(n, i, r) {
  const u = i.entities?.[Aw[r]], s = u ? n.states[u]?.state : void 0;
  return !s || ["unknown", "unavailable"].includes(s) ? Ew[r] : r === "auto_empty" || r === "auto_dry" ? s === "on" : s;
}
function Tl(n, i) {
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
function bl({
  label: n,
  setting: i,
  value: r,
  language: u,
  disabled: s,
  onChange: f
}) {
  return /* @__PURE__ */ g.jsxs("label", { className: "dock-setting-row", children: [
    /* @__PURE__ */ g.jsx("span", { children: n }),
    /* @__PURE__ */ g.jsx("select", { "aria-label": n, value: r, disabled: s, onChange: (d) => f(d.target.value), children: Tw[i].map((d) => /* @__PURE__ */ g.jsx("option", { value: d, children: Tl(u, d) }, d)) })
  ] });
}
function Ps({
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
function kw({
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
  const x = !!m, k = i.entities?.dock_child_lock, j = k ? n.states[k]?.state === "on" : !1, q = String(xa(n, i, "mop_wash_frequency")), Y = String(xa(n, i, "wash_mode")), K = String(xa(n, i, "wash_temperature")), B = !!xa(n, i, "auto_empty"), H = String(xa(n, i, "empty_mode")), X = !!xa(n, i, "auto_dry"), V = String(xa(n, i, "dry_duration")), P = [
    { action: "empty", label: Q(r, "empty"), active: s, icon: /* @__PURE__ */ g.jsx(cu, {}), detail: Tl(r, H) },
    { action: "wash", label: Q(r, "wash"), active: u, icon: /* @__PURE__ */ g.jsx(Hp, {}), detail: `${Tl(r, Y)} · ${Tl(r, K)}` },
    { action: "dry", label: Q(r, "dry"), active: f, icon: /* @__PURE__ */ g.jsx(Bp, {}), detail: f ? d : Tl(r, V) }
  ];
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Q(r, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet dock-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "dock-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "dock-sheet-title", children: Q(r, "dockStation") }),
          /* @__PURE__ */ g.jsx("p", { children: Q(r, "dockOverview") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": Q(r, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(dc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body dock-sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "dock-actions", children: P.map((L) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: L.active ? "active" : "",
            disabled: x,
            onClick: () => h(L.action, L.active),
            children: [
              /* @__PURE__ */ g.jsx("span", { className: "dock-action-icon", children: L.icon }),
              /* @__PURE__ */ g.jsx("strong", { children: L.active ? Q(r, "stop") : L.label }),
              /* @__PURE__ */ g.jsx("small", { children: L.active ? Q(r, "active") : L.detail })
            ]
          },
          L.action
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Hp, {}),
            Q(r, "dockSettings")
          ] }),
          /* @__PURE__ */ g.jsx(bl, { label: Q(r, "mopWashFrequency"), setting: "mop_wash_frequency", value: q, language: r, disabled: x, onChange: (L) => _("mop_wash_frequency", L) }),
          /* @__PURE__ */ g.jsx(bl, { label: Q(r, "washingMode"), setting: "wash_mode", value: Y, language: r, disabled: x, onChange: (L) => _("wash_mode", L) }),
          /* @__PURE__ */ g.jsx(bl, { label: Q(r, "washTemperature"), setting: "wash_temperature", value: K, language: r, disabled: x, onChange: (L) => _("wash_temperature", L) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(cu, {}),
            Q(r, "dustbin")
          ] }),
          /* @__PURE__ */ g.jsx(Ps, { label: Q(r, "autoEmpty"), checked: B, disabled: x, onChange: (L) => _("auto_empty", L) }),
          /* @__PURE__ */ g.jsx(bl, { label: Q(r, "emptyMode"), setting: "empty_mode", value: H, language: r, disabled: x, onChange: (L) => _("empty_mode", L) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Bp, {}),
            Q(r, "drying")
          ] }),
          /* @__PURE__ */ g.jsx(Ps, { label: Q(r, "autoDry"), checked: X, disabled: x, onChange: (L) => _("auto_dry", L) }),
          /* @__PURE__ */ g.jsx(bl, { label: Q(r, "dryDuration"), setting: "dry_duration", value: V, language: r, disabled: x, onChange: (L) => _("dry_duration", L) })
        ] }),
        /* @__PURE__ */ g.jsxs("section", { className: "dock-settings-group", children: [
          /* @__PURE__ */ g.jsxs("h3", { children: [
            /* @__PURE__ */ g.jsx(Oh, {}),
            Q(r, "safetyMaintenance")
          ] }),
          k && /* @__PURE__ */ g.jsx(Ps, { label: Q(r, "childLock"), checked: j, disabled: x, onChange: S }),
          /* @__PURE__ */ g.jsxs("button", { type: "button", className: "drain-button", disabled: x, onClick: () => h("drain", !1), children: [
            /* @__PURE__ */ g.jsx(T_, {}),
            /* @__PURE__ */ g.jsxs("span", { children: [
              /* @__PURE__ */ g.jsx("strong", { children: Q(r, "drainWaterTank") }),
              /* @__PURE__ */ g.jsx("small", { children: Q(r, "drainWarning") })
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ g.jsx("p", { className: "dock-pending", role: "status", children: m })
      ] })
    ] })
  ] });
}
function oc({ icon: n, className: i }) {
  return n ? te.createElement("ha-icon", { icon: n, class: i, "aria-hidden": "true" }) : null;
}
const hh = ["smartplan", "vacuum_then_mop", "vacuum_and_mop", "vacuum_only"], Ow = ["quiet", "balanced", "turbo", "max", "max_plus"], Cw = ["quiet", "balanced", "turbo", "max"], jw = ["fast", "standard", "deep"], Mw = ["slight", "low", "medium", "moderate", "high", "extreme"], Nw = { slight: 1, low: 5, medium: 15, moderate: 25, high: 28, extreme: 30 };
function dv(n) {
  return n.replaceAll("_", " ").replace(/\b\w/g, (i) => i.toUpperCase());
}
function Fs({
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
        children: dv(s)
      },
      s
    )) })
  ] });
}
function vh(n, i) {
  return i === "smartplan" ? n.strategy === "smartplan" : n.strategy === "smartplan" ? !1 : i === "vacuum_only" ? n.cleaning_type === "vacuum" : i === "vacuum_and_mop" ? n.cleaning_type === "vacuum_and_mop" : n.cleaning_type === "vacuum_then_mop";
}
function Dw({
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
  const _ = hh.map((B) => u.find(({ preset: H }) => H.id === B)).filter(
    (B) => !!B
  ), S = u.filter(({ preset: B }) => !hh.includes(B.id)), k = (i.cleaning_type === "vacuum" ? Ow : Cw).filter((B) => r.fanSpeeds.includes(B)), j = jw.filter((B) => r.mopModes.includes(B)), q = Mw.filter((B) => r.mopIntensities.includes(B)), Y = Math.max(0, q.indexOf(i.mop_intensity ?? "medium")), K = i.strategy === "smartplan" ? Q(n, "smartPlanDescription") : i.cleaning_type === "vacuum" ? Q(n, "vacuumDescription") : i.cleaning_type === "vacuum_then_mop" ? Q(n, "vacuumThenMopDescription") : Q(n, "vacuumAndMopDescription");
  return /* @__PURE__ */ g.jsxs("div", { className: "sheet-layer", role: "presentation", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", className: "sheet-backdrop", "aria-label": Q(n, "close"), onClick: v }),
    /* @__PURE__ */ g.jsxs("section", { className: "job-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "job-sheet-title", children: [
      /* @__PURE__ */ g.jsx("div", { className: "sheet-handle" }),
      /* @__PURE__ */ g.jsxs("header", { children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h2", { id: "job-sheet-title", children: d ? Q(n, "assistedCarryTitle") : Q(n, "configureTitle") }),
          /* @__PURE__ */ g.jsx("p", { children: s.join(" · ") })
        ] }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "icon-button", "aria-label": Q(n, "close"), onClick: v, children: /* @__PURE__ */ g.jsx(dc, {}) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "sheet-body", children: [
        /* @__PURE__ */ g.jsx("div", { className: "cleaning-mode-tabs", role: "tablist", "aria-label": Q(n, "cleaningType"), children: _.map(({ preset: B, available: H, reason: X }) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": vh(i, B.id),
            className: vh(i, B.id) ? "active" : "",
            disabled: !H || f,
            title: X,
            onClick: () => m(gu(B)),
            children: [
              /* @__PURE__ */ g.jsx(oc, { icon: B.icon }),
              /* @__PURE__ */ g.jsx("span", { children: B.id === "smartplan" ? "AI SmartPlan" : B.name })
            ]
          },
          B.id
        )) }),
        /* @__PURE__ */ g.jsxs("section", { className: "mode-settings", children: [
          /* @__PURE__ */ g.jsx("p", { className: "mode-description", children: K }),
          i.strategy !== "smartplan" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx(
              Fs,
              {
                title: Q(n, "suction"),
                value: i.fan_speed,
                options: k,
                onChange: (B) => m({ ...i, preset_id: "custom_draft", fan_speed: B })
              }
            ),
            i.cleaning_type !== "vacuum" && q.length > 0 && /* @__PURE__ */ g.jsxs("label", { className: "field app-field water-flow", children: [
              /* @__PURE__ */ g.jsx("span", { children: Q(n, "waterFlow") }),
              /* @__PURE__ */ g.jsxs("div", { className: "range-heading", children: [
                /* @__PURE__ */ g.jsx("strong", { children: dv(q[Y]) }),
                /* @__PURE__ */ g.jsx("output", { children: Nw[q[Y]] })
              ] }),
              /* @__PURE__ */ g.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: q.length - 1,
                  step: "1",
                  value: Y,
                  "aria-label": Q(n, "waterFlow"),
                  onChange: (B) => m({
                    ...i,
                    preset_id: "custom_draft",
                    mop_intensity: q[Number(B.target.value)]
                  })
                }
              )
            ] }),
            /* @__PURE__ */ g.jsx(
              Fs,
              {
                title: Q(n, "cleaningCount"),
                value: String(i.cleaning_count),
                options: i.cleaning_type === "vacuum_then_mop" ? ["1"] : ["1", "2"],
                onChange: (B) => m({
                  ...i,
                  preset_id: "custom_draft",
                  cleaning_count: Number(B)
                })
              }
            ),
            /* @__PURE__ */ g.jsx(
              Fs,
              {
                title: Q(n, "mopRoute"),
                value: i.mop_mode,
                options: j,
                onChange: (B) => m({ ...i, preset_id: "custom_draft", mop_mode: B })
              }
            )
          ] })
        ] }),
        !d && S.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "saved-profiles", children: [
          /* @__PURE__ */ g.jsx("span", { children: Q(n, "savedProfiles") }),
          /* @__PURE__ */ g.jsx("div", { children: S.map(({ preset: B, available: H, reason: X }) => /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              disabled: !H || f,
              title: X,
              className: i.preset_id === B.id ? "active" : "",
              onClick: () => m(gu(B)),
              children: [
                /* @__PURE__ */ g.jsx(oc, { icon: B.icon }),
                " ",
                B.name
              ]
            },
            B.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("footer", { children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: f, onClick: v, children: Q(n, "cancel") }),
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "primary", disabled: f, onClick: h, children: f ? d ? Q(n, "preparingUpstairs") : Q(n, "starting") : d ? Q(n, "prepareUpstairs") : Q(n, "start") })
      ] })
    ] })
  ] });
}
var Ea = function(n, i) {
  return Number(n.toFixed(i));
}, Zw = function(n, i) {
  return i;
}, ke = function(n, i, r) {
  r && typeof r == "function" && r(n, i);
}, Uw = function(n) {
  return -Math.cos(n * Math.PI) / 2 + 0.5;
}, Rw = function(n) {
  return n;
}, Yw = function(n) {
  return n * n;
}, Xw = function(n) {
  return n * (2 - n);
}, Hw = function(n) {
  return n < 0.5 ? 2 * n * n : -1 + (4 - 2 * n) * n;
}, Bw = function(n) {
  return n * n * n;
}, qw = function(n) {
  return --n * n * n + 1;
}, $w = function(n) {
  return n < 0.5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1;
}, Lw = function(n) {
  return n * n * n * n;
}, Vw = function(n) {
  return 1 - --n * n * n * n;
}, Gw = function(n) {
  return n < 0.5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n;
}, Qw = function(n) {
  return n * n * n * n * n;
}, Kw = function(n) {
  return 1 + --n * n * n * n * n;
}, Jw = function(n) {
  return n < 0.5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n;
}, mv = {
  easeOut: Uw,
  linear: Rw,
  easeInQuad: Yw,
  easeOutQuad: Xw,
  easeInOutQuad: Hw,
  easeInCubic: Bw,
  easeOutCubic: qw,
  easeInOutCubic: $w,
  easeInQuart: Lw,
  easeOutQuart: Vw,
  easeInOutQuart: Gw,
  easeInQuint: Qw,
  easeOutQuint: Kw,
  easeInOutQuint: Jw
}, pv = function(n) {
  typeof n == "number" && cancelAnimationFrame(n);
}, It = function(n) {
  n.mounted && (pv(n.animation), n.isAnimating = !1, n.animation = null, n.velocity = null);
};
function hv(n, i, r, u) {
  if (n.mounted) {
    var s = (/* @__PURE__ */ new Date()).getTime(), f = 1;
    It(n), n.animation = function() {
      if (!n.mounted)
        return pv(n.animation);
      var d = (/* @__PURE__ */ new Date()).getTime() - s, m = d / r, v = mv[i], h = v(m);
      d >= r ? (u(f), n.animation = null) : n.animation && (u(h), requestAnimationFrame(n.animation));
    }, requestAnimationFrame(n.animation);
  }
}
function Ww(n) {
  var i = n.scale, r = n.positionX, u = n.positionY;
  return !(Number.isNaN(i) || Number.isNaN(r) || Number.isNaN(u));
}
function ia(n, i, r, u) {
  var s = Ww(i);
  if (!(!n.mounted || !s)) {
    var f = n.setState, d = n.state, m = d.scale, v = d.positionX, h = d.positionY, _ = i.scale - m, S = i.positionX - v, x = i.positionY - h;
    r === 0 ? f(i.scale, i.positionX, i.positionY) : hv(n, u, r, function(k) {
      k !== 1 ? n.isAnimating = !0 : n.isAnimating = !1;
      var j = m + _ * k, q = v + S * k, Y = h + x * k;
      f(j, q, Y);
    });
  }
}
function Pw(n, i, r) {
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
var Fw = function(n, i, r, u, s, f, d) {
  var m = n > i ? r * (d ? 0.5 : 1) : 0, v = u > s ? f * (d ? 0.5 : 1) : 0, h = n - i - m, _ = m, S = u - s - v, x = v;
  return {
    minPositionX: h,
    maxPositionX: _,
    minPositionY: S,
    maxPositionY: x,
    scaleWidthFactor: m,
    scaleHeightFactor: v
  };
}, wc = function(n, i) {
  var r = n.wrapperComponent, u = n.contentComponent, s = n.setup, f = s.centerZoomedOut, d = s.disablePadding;
  if (!r || !u)
    throw new Error("Components are not mounted");
  var m = Pw(r, u, i), v = m.wrapperWidth, h = m.wrapperHeight, _ = m.newContentWidth, S = m.newContentHeight, x = m.newDiffWidth, k = m.newDiffHeight, j = Fw(v, _, x, h, S, k, !!f), q = v >= _ && h >= S;
  d && q && !f && (j.minPositionX = 0, j.maxPositionX = 0, j.minPositionY = 0, j.maxPositionY = 0);
  var Y = n.setup, K = Y.minPositionX, B = Y.maxPositionX, H = Y.minPositionY, X = Y.maxPositionY;
  return K != null && (j.minPositionX = v * (1 - i) + K * i), B != null && (j.maxPositionX = B * i), H != null && (j.minPositionY = h * (1 - i) + H * i), X != null && (j.maxPositionY = X * i), j;
}, Cl = function(n, i, r, u) {
  return u ? n < i ? Ea(i, 2) : n > r ? Ea(r, 2) : Ea(n, 2) : Ea(n, 2);
}, _i = function(n, i) {
  var r = wc(n, i);
  return n.bounds = r, r;
};
function Nl(n, i, r, u, s, f, d) {
  var m = r.minPositionX, v = r.minPositionY, h = r.maxPositionX, _ = r.maxPositionY, S = 0, x = 0;
  d && (S = s, x = f);
  var k = Cl(n, m - S, h + S, u), j = Cl(i, v - x, _ + x, u);
  return { x: k, y: j };
}
function xu(n, i, r, u, s, f) {
  var d = n.state, m = d.scale, v = d.positionX, h = d.positionY, _ = u - m;
  if (typeof i != "number" || typeof r != "number")
    return console.error("Mouse X and Y position were not provided!"), { x: v, y: h };
  var S = v - i * _, x = h - r * _, k = Nl(S, x, s, f, 0, 0, null);
  return k;
}
var yh = 1e-7;
function Dl(n, i, r, u, s) {
  var f = s ? u : 0, d = Math.max(i - f, yh), m = r + f;
  return !Number.isNaN(r) && n >= m ? m : !Number.isNaN(i) && n <= d ? d : Math.max(n, yh);
}
var gh = function(n, i) {
  var r = n.setup.panning.excluded, u = n.isInitialized, s = n.wrapperComponent, f = i.target, d = "shadowRoot" in f && "composedPath" in i, m = d ? i.composedPath().some(function(_) {
    return _ instanceof Element ? s?.contains(_) : !1;
  }) : s?.contains(f), v = u && f && m;
  if (!v)
    return !1;
  var h = Zl(f, r);
  return !(h || f.getAttribute("draggable") === "true" || f.getAttribute("contenteditable") === "true" || f.isContentEditable);
}, _h = function(n) {
  var i = n.isInitialized, r = n.isPanning, u = n.setup, s = u.panning.disabled, f = i && r && !s;
  return !!f;
}, Iw = function(n, i) {
  var r = n.state, u = r.positionX, s = r.positionY;
  n.isPanning = !0;
  var f = i.clientX, d = i.clientY;
  n.startCoords = { x: f - u, y: d - s };
}, ez = function(n, i) {
  var r = i.touches, u = n.state, s = u.positionX, f = u.positionY;
  n.isPanning = !0;
  var d = r.length === 1;
  if (d) {
    var m = r[0].clientX, v = r[0].clientY;
    n.startCoords = { x: m - s, y: v - f };
  }
};
function tz(n) {
  var i = n.state, r = i.positionX, u = i.positionY, s = i.scale, f = n.setup, d = f.disabled, m = f.limitToBounds, v = f.centerZoomedOut, h = n.wrapperComponent;
  if (!(d || !h || !n.bounds)) {
    var _ = n.bounds, S = _.maxPositionX, x = _.minPositionX, k = _.maxPositionY, j = _.minPositionY, q = r > S || r < x, Y = u > k || u < j, K = r > S ? h.offsetWidth : n.setup.minPositionX || 0, B = u > k ? h.offsetHeight : n.setup.minPositionY || 0, H = xu(n, K, B, s, n.bounds, m || v), X = H.x, V = H.y;
    return {
      scale: s,
      positionX: q ? X : r,
      positionY: Y ? V : u
    };
  }
}
function vv(n, i, r, u, s) {
  var f = n.setup.limitToBounds, d = n.wrapperComponent, m = n.bounds, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY;
  if (!(d === null || m === null || i === _ && r === S)) {
    var x = Nl(i, r, m, f, u, s, d), k = x.x, j = x.y;
    n.setState(h, k, j);
  }
}
var nz = function(n, i, r) {
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
var az = function(n) {
  var i = n.mounted, r = n.wrapperComponent, u = n.contentComponent, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = s.limitToBounds, v = n.state.scale, h = d.disabled;
  if (h || f || !i || !r || !u)
    return !1;
  if (!m)
    return !0;
  var _ = r.offsetWidth < u.offsetWidth * v || r.offsetHeight < u.offsetHeight * v;
  return _;
}, iz = function(n) {
  var i = n.mounted, r = n.velocity, u = n.bounds, s = n.setup, f = s.disabled, d = s.velocityAnimation, m = d.disabled, v = !m && !f && i;
  return !(!v || !r || !u);
};
function lz(n, i) {
  var r = n.setup.velocityAnimation, u = r.animationTime, s = r.maxAnimationTime, f = r.inertia;
  return Math.min(u * Math.max(1, Math.abs(i / f)), s);
}
function bh(n, i, r, u, s, f, d, m, v, h) {
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
  return u ? i : Cl(n, f, d, s);
}
function rz(n) {
  var i = 1, r = n.offsetWidth / window.innerWidth;
  return Number.isNaN(r) ? i : Math.min(i, r);
}
var Is = function(n, i, r) {
  var u = 0, s = n * r;
  return Number.isNaN(s) ? u : n < 0 ? Math.max(s, -i) : Math.min(s, i);
};
function uz(n, i, r) {
  var u, s, f = az(n);
  if (f) {
    var d = n.lastMousePosition, m = n.velocityTime, v = n.setup, h = n.wrapperComponent, _ = v.velocityAnimation, S = _.maxStrengthMouse, x = _.maxStrengthTouch, k = _.sensitivityTouch, j = _.sensitivityMouse, q = Date.now();
    if (d && m && h) {
      var Y = rz(h), K = (u = {}, u[ea.TOUCH] = k, u[ea.MOUSE] = j, u)[r], B = (s = {}, s[ea.TOUCH] = x, s[ea.MOUSE] = S, s)[r], H = i.x - d.x, X = i.y - d.y, V = Is(H / Y, B, K), P = Is(X / Y, B, K), L = q - m, le = H * H + X * X, fe = Is(Math.sqrt(le) / L, B, K);
      n.velocity = { velocityX: V, velocityY: P, total: fe };
    }
    n.lastMousePosition = i, n.velocityTime = q;
  }
}
function oz(n) {
  var i = n.velocity, r = n.bounds, u = n.setup, s = n.wrapperComponent, f = iz(n);
  if (!(!f || !i || !r || !s)) {
    var d = i.velocityX, m = i.velocityY, v = i.total, h = r.maxPositionX, _ = r.minPositionX, S = r.maxPositionY, x = r.minPositionY, k = u.limitToBounds, j = u.autoAlignment, q = u.zoomAnimation, Y = u.panning, K = Y.lockAxisY, B = Y.lockAxisX, H = q.animationType, X = j.sizeX, V = j.sizeY, P = j.velocityAlignmentTime, L = P, le = lz(n, v), fe = Math.max(le, L), Te = ta(n, X), he = ta(n, V), de = Te * s.offsetWidth / 100, Ye = he * s.offsetHeight / 100, Le = h + de, et = _ - de, M = S + Ye, G = x - Ye, I = n.state, ve = (/* @__PURE__ */ new Date()).getTime();
    hv(n, H, fe, function(ye) {
      var w = n.state, D = w.scale, J = w.positionX, W = w.positionY, re = (/* @__PURE__ */ new Date()).getTime() - ve, oe = re / L, Se = mv[j.animationType], tt = 1 - Se(Math.min(1, oe)), Xe = 1 - ye, en = J + d * Xe, tn = W + m * Xe, la = bh(en, I.positionX, J, B, k, _, h, et, Le, tt), nn = bh(tn, I.positionY, W, K, k, x, S, G, M, tt);
      if (J !== en || W !== tn) {
        n.setState(D, la, nn);
        var Ut = n.props.onPanning;
        Ut && Ut(ze(n), {});
      }
    });
  }
}
function Sh(n, i) {
  var r = n.state, u = r.scale, s = r.positionX, f = r.positionY;
  n.panStartPosition = { x: s, y: f }, It(n), _i(n, u), window.TouchEvent !== void 0 && i instanceof TouchEvent ? ez(n, i) : Iw(n, i);
}
function yv(n, i) {
  var r = n.state.scale, u = n.setup, s = u.minScale, f = u.autoAlignment, d = f.disabled, m = f.sizeX, v = f.sizeY, h = f.animationTime, _ = f.animationType, S = d || r < s || !m && !v;
  if (!S) {
    var x = tz(n);
    x && ia(n, x, h, _);
  }
}
function wh(n, i, r, u) {
  var s = n.startCoords, f = n.setup, d = f.autoAlignment, m = d.sizeX, v = d.sizeY;
  if (s) {
    var h = nz(n, i, r), _ = h.x, S = h.y, x = ta(n, m), k = ta(n, v);
    uz(n, { x: _, y: S }, u), vv(n, _, S, x, k);
  }
}
function sz(n, i) {
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
    var x = u?.offsetWidth || 0, k = u?.offsetHeight || 0, j = (s?.offsetWidth || 0) * v, q = (s?.offsetHeight || 0) * v, Y = !n.setup.limitToBounds || x < j || k < q, K = !i && r && r.total > 0.1 && Y;
    K ? oz(n) : yv(n);
  }
}
function zc(n, i, r, u) {
  var s = n.setup, f = s.minScale, d = s.maxScale, m = s.limitToBounds, v = Dl(Ea(i, 2), f, d, 0, !1), h = _i(n, v), _ = xu(n, r, u, v, h, m), S = _.x, x = _.y;
  return { scale: v, positionX: S, positionY: x };
}
function xc(n, i, r) {
  var u = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.minScale, m = f.maxScale, v = f.limitToBounds, h = f.zoomAnimation, _ = h.disabled, S = h.animationTime, x = h.animationType, k = u >= d && u <= m, j = _ || k;
  if ((u >= 1 || v) && yv(n), !(j || !s || !n.mounted)) {
    var q = i || s.offsetWidth / 2, Y = r || s.offsetHeight / 2, K = u < d ? d : m, B = zc(n, K, q, Y);
    B && ia(n, B, S, x);
  }
}
var Qt = function() {
  return Qt = Object.assign || function(i) {
    for (var r, u = 1, s = arguments.length; u < s; u++) {
      r = arguments[u];
      for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (i[f] = r[f]);
    }
    return i;
  }, Qt.apply(this, arguments);
};
function zh(n, i, r) {
  for (var u = 0, s = i.length, f; u < s; u++)
    (f || !(u in i)) && (f || (f = Array.prototype.slice.call(i, 0, u)), f[u] = i[u]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var ec = {
  scale: 1,
  positionX: 0,
  positionY: 0
}, Ta = {
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
}, sc = {
  wrapperClass: "react-transform-wrapper",
  contentClass: "react-transform-component"
}, gv = function(n) {
  var i, r, u, s, f, d, m, v, h, _ = Math.max((i = n.minScale) !== null && i !== void 0 ? i : Ta.minScale, 1e-7), S = (r = n.maxScale) !== null && r !== void 0 ? r : Ta.maxScale, x = (u = n.initialScale) !== null && u !== void 0 ? u : ec.scale, k = Math.min(Math.max(x, _), S), j = Cl((s = n.initialPositionX) !== null && s !== void 0 ? s : ec.positionX, (f = n.minPositionX) !== null && f !== void 0 ? f : -1 / 0, (d = n.maxPositionX) !== null && d !== void 0 ? d : 1 / 0, n.minPositionX != null || n.maxPositionX != null), q = Cl((m = n.initialPositionY) !== null && m !== void 0 ? m : ec.positionY, (v = n.minPositionY) !== null && v !== void 0 ? v : -1 / 0, (h = n.maxPositionY) !== null && h !== void 0 ? h : 1 / 0, n.minPositionY != null || n.maxPositionY != null);
  return {
    previousScale: k,
    scale: k,
    positionX: j,
    positionY: q
  };
}, xh = function(n) {
  var i = Qt({}, Ta);
  return Object.keys(n).forEach(function(r) {
    var u = r, s = typeof n[u] < "u", f = typeof Ta[u] < "u";
    if (f && s) {
      var d = Object.prototype.toString.call(Ta[u]), m = d === "[object Object]", v = d === "[object Array]";
      m ? i[u] = Qt(Qt({}, Ta[u]), n[u]) : v ? i[u] = zh(zh([], Ta[u], !0), n[u]) : i[u] = n[u];
    }
  }), i.minScale <= 0 && (i.minScale = 1e-7), i;
}, _v = function(n, i, r) {
  var u = n.state.scale, s = n.wrapperComponent, f = n.setup, d = f.maxScale, m = f.minScale, v = f.zoomAnimation, h = f.smooth, _ = v.size;
  if (!s)
    throw new Error("Wrapper is not mounted");
  var S = h ? u * Math.exp(i * r) : u + i * r, x = Dl(Ea(S, 3), m, d, _, !1);
  return x;
};
function bv(n, i, r, u, s) {
  var f, d, m = n.wrapperComponent, v = n.state, h = v.scale, _ = v.positionX, S = v.positionY, x = n.setup.zoomAnimation;
  if (!m)
    return console.error("No WrapperComponent found");
  var k = x.disabled ? 0 : u, j = m.offsetWidth, q = m.offsetHeight, Y = (j / 2 - _) / h, K = (q / 2 - S) / h, B = _v(n, i, r), H = zc(n, B, Y, K);
  if (!H)
    return console.error("Error during zoom event. New transformation state was not calculated.");
  var X = n.props, V = X.onZoomStart, P = X.onZoom, L = X.onZoomStop, le = new MouseEvent("mousemove", { bubbles: !0 }), fe = ze(n);
  ke(fe, le, V), ke(fe, le, P), ia(n, H, k, s);
  var Te = (d = (f = m.ownerDocument) === null || f === void 0 ? void 0 : f.defaultView) !== null && d !== void 0 ? d : typeof window < "u" ? window : null;
  Te && Te.setTimeout(function() {
    n.mounted && ke(ze(n), le, L);
  }, k);
}
function Sv(n, i, r, u) {
  var s, f, d = n.setup, m = n.wrapperComponent, v = n.contentComponent, h = d.limitToBounds, _ = d.centerOnInit, S = gv(n.props), x = n.state, k = x.scale, j = x.positionX, q = x.positionY;
  if (m) {
    var Y = S.positionX, K = S.positionY;
    if (_ && v) {
      var B = Tc(S.scale, m, v);
      Y = B.positionX, K = B.positionY;
    }
    var H = wc(n, S.scale), X = Nl(Y, K, H, h, 0, 0, m), V = {
      scale: S.scale,
      positionX: X.x,
      positionY: X.y
    };
    if (!(k === S.scale && j === S.positionX && q === S.positionY)) {
      u?.();
      var P = n.props, L = P.onZoomStart, le = P.onZoom, fe = P.onZoomStop, Te = new MouseEvent("mousemove", { bubbles: !0 }), he = ze(n);
      ke(he, Te, L), ke(he, Te, le), ia(n, V, i, r);
      var de = (f = (s = m.ownerDocument) === null || s === void 0 ? void 0 : s.defaultView) !== null && f !== void 0 ? f : typeof window < "u" ? window : null;
      de && de.setTimeout(function() {
        n.mounted && ke(ze(n), Te, fe);
      }, i);
    }
  }
}
function cz(n, i, r, u) {
  var s = n.getBoundingClientRect(), f = i.getBoundingClientRect(), d = r.getBoundingClientRect(), m = f.x * u.scale, v = f.y * u.scale;
  return {
    x: (s.x - d.x + m) / u.scale,
    y: (s.y - d.y + v) / u.scale
  };
}
function fz(n, i, r, u, s) {
  u === void 0 && (u = 0), s === void 0 && (s = 0);
  var f = n.wrapperComponent, d = n.contentComponent, m = n.state, v = n.setup, h = v.limitToBounds, _ = v.minScale, S = v.maxScale;
  if (!f || !d)
    return m;
  var x = f.getBoundingClientRect(), k = i.getBoundingClientRect(), j = cz(i, f, d, m), q = j.x, Y = j.y, K = k.width / m.scale, B = k.height / m.scale, H = f.offsetWidth / K, X = f.offsetHeight / B, V = Dl(r || Math.min(H, X), _, S, 0, !1), P = (x.width - K * V) / 2, L = (x.height - B * V) / 2, le = (x.left - q) * V + P + u, fe = (x.top - Y) * V + L + s, Te = wc(n, V), he = Nl(le, fe, Te, h, 0, 0, f), de = he.x, Ye = he.y;
  return { positionX: de, positionY: Ye, scale: V };
}
var dz = function(n) {
  return function(i, r, u) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), u === void 0 && (u = "easeOut"), bv(n, 1, i, r, u);
  };
}, mz = function(n) {
  return function(i, r, u) {
    i === void 0 && (i = 0.5), r === void 0 && (r = 300), u === void 0 && (u = "easeOut"), bv(n, -1, i, r, u);
  };
}, pz = function(n) {
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
}, hz = function(n) {
  return function(i, r) {
    i === void 0 && (i = 200), r === void 0 && (r = "easeOut"), Sv(n, i, r);
  };
}, vz = function(n) {
  return function(i, r, u) {
    r === void 0 && (r = 200), u === void 0 && (u = "easeOut");
    var s = n.state, f = n.wrapperComponent, d = n.contentComponent;
    if (f && d) {
      var m = Tc(i || s.scale, f, d);
      ia(n, m, r, u);
    }
  };
}, yz = function(n) {
  return function(i, r, u, s, f, d) {
    u === void 0 && (u = 600), s === void 0 && (s = "easeOut"), f === void 0 && (f = 0), d === void 0 && (d = 0), It(n);
    var m = n.wrapperComponent, v = typeof i == "string" ? document.getElementById(i) : i;
    if (m && v && m.contains(v)) {
      var h = fz(n, v, r, f, d);
      ia(n, h, u, s);
    }
  };
}, _u = function(n) {
  return {
    instance: n,
    state: n.state,
    zoomIn: dz(n),
    zoomOut: mz(n),
    setTransform: pz(n),
    resetTransform: hz(n),
    centerView: vz(n),
    zoomToElement: yz(n)
  };
}, gz = function(n) {
  return {
    instance: n,
    state: n.state
  };
}, ze = function(n) {
  var i = {};
  return Object.assign(i, gz(n)), Object.assign(i, _u(n)), i;
}, tc = !1;
function nc() {
  try {
    var n = {
      get passive() {
        return tc = !0, !1;
      }
    };
    return n;
  } catch {
    return tc = !1, tc;
  }
}
var su = ".".concat(sc.wrapperClass), Zl = function(n, i) {
  return i.some(function(r) {
    return n.matches("".concat(su, " ").concat(r, ", ").concat(su, " .").concat(r, ", ").concat(su, " ").concat(r, " *, ").concat(su, " .").concat(r, " *"));
  });
}, jl = function(n) {
  n && clearTimeout(n);
}, _z = function(n) {
  return Number.parseFloat(n.toFixed(8));
}, wv = function(n, i, r) {
  var u = _z(r);
  return "translate(".concat(n, "px, ").concat(i, "px) scale(").concat(u, ")");
}, Tc = function(n, i, r) {
  var u = r.offsetWidth * n, s = r.offsetHeight * n, f = (i.offsetWidth - u) / 2, d = (i.offsetHeight - s) / 2;
  return {
    scale: n,
    positionX: f,
    positionY: d
  };
};
function bz(n, i) {
  n != null && (typeof n == "function" ? n(i) : n.current = i);
}
function Sz(n) {
  return function(i) {
    n.forEach(function(r) {
      typeof r == "function" ? r(i) : r != null && (r.current = i);
    });
  };
}
var zv = function(n, i) {
  var r = n.setup.wheel, u = r.disabled, s = r.wheelDisabled, f = r.touchPadDisabled, d = r.excluded, m = n.isInitialized, v = n.isPanning, h = i.target, _ = m && !v && !u && h;
  if (!_ || s && !i.ctrlKey || f && i.ctrlKey)
    return !1;
  var S = Zl(h, d);
  if (S)
    return !1;
  var x = n.isPressingKeys(n.setup.wheel.activationKeys);
  return !!x;
}, wz = function(n, i) {
  var r = n.setup, u = r.disabled, s = r.trackPadPanning, f = s.activationKeys, d = s.excluded;
  if (!n.wrapperComponent || !n.contentComponent || u || s.disabled || i.ctrlKey)
    return !1;
  var m = zv(n, i);
  if (m)
    return !1;
  var v = i.target, h = Zl(v, d);
  if (h)
    return !1;
  var _ = n.isPressingKeys(f);
  return !!_;
}, zz = function(n) {
  return n ? n.deltaY < 0 ? 1 : -1 : 0;
};
function xz(n, i) {
  var r = zz(n), u = Zw(i, r);
  return u;
}
function xv(n, i, r) {
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
var Tz = function(n, i, r, u, s) {
  var f = n.state.scale, d = n.wrapperComponent, m = n.setup, v = m.maxScale, h = m.minScale, _ = m.zoomAnimation, S = m.disablePadding, x = _.size, k = _.disabled;
  if (!d)
    throw new Error("Wrapper is not mounted");
  var j = f + i * r, q = u ? !1 : !k, Y = Dl(j, h, v, x, q && !S);
  return Y;
}, Tv = function(n, i) {
  var r = n.previousWheelEvent, u = n.state.scale, s = n.setup, f = s.maxScale, d = s.minScale;
  return r ? u < f || u > d || Math.sign(r.deltaY) !== Math.sign(i.deltaY) || r.deltaY > 0 && r.deltaY < i.deltaY || r.deltaY < 0 && r.deltaY > i.deltaY || Math.sign(r.deltaY) !== Math.sign(i.deltaY) : !1;
}, Ez = function(n, i) {
  var r = n.setup.pinch, u = r.disabled, s = r.excluded, f = n.isInitialized, d = i.target, m = f && !u && d;
  if (!m)
    return !1;
  var v = Zl(d, s);
  return !v;
}, Az = function(n) {
  var i = n.setup.pinch.disabled, r = n.isInitialized, u = n.pinchStartDistance, s = r && !i && u !== null;
  return !!s;
}, kz = function(n, i, r) {
  var u = r.getBoundingClientRect(), s = n.touches, f = s[0].clientX - u.left, d = s[0].clientY - u.top, m = s[1].clientX - u.left, v = s[1].clientY - u.top;
  return {
    x: (f + m) / 2 / i,
    y: (d + v) / 2 / i
  };
}, Ev = function(n) {
  return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2));
}, Oz = 5, Cz = function(n, i) {
  var r = n.pinchStartScale, u = n.pinchStartDistance, s = n.setup, f = s.maxScale, d = s.minScale, m = s.zoomAnimation, v = s.disablePadding, h = s.pinch, _ = m.size, S = m.disabled, x = h.step;
  if (!r || u === null)
    throw new Error("Pinch touches distance was not provided");
  if (i < 0)
    return n.state.scale;
  var k = i / u, j = k * r, q = (j - r) * (x / Oz), Y = r + q, K = Y === 1 / 0 ? 0 : Ea(Y, 10);
  return Dl(K, d, f, _, !S && !v);
}, Av = 160, kv = 100, jz = function(n, i) {
  var r = n.props, u = r.onWheelStart, s = r.onZoomStart;
  n.wheelStopEventTimer || (It(n), ke(ze(n), i, u), ke(ze(n), i, s));
}, Mz = function(n, i) {
  var r = n.props, u = r.onWheel, s = r.onZoom, f = n.contentComponent, d = n.setup, m = n.state, v = m.scale, h = d.limitToBounds, _ = d.centerZoomedOut, S = d.zoomAnimation, x = d.wheel, k = d.disablePadding, j = d.smooth, q = S.size, Y = S.disabled, K = x.step;
  if (!f)
    throw new Error("Component not mounted");
  i.preventDefault(), i.stopPropagation();
  var B = xz(i, null), H = j ? K * Math.abs(i.deltaY) : K, X = Tz(n, B, H, !i.ctrlKey);
  if (v !== X) {
    var V = _i(n, X), P = xv(i, f, v), L = Y || q === 0 || _ || k, le = h && L, fe = xu(n, P.x, P.y, X, V, le), Te = fe.x, he = fe.y;
    n.previousWheelEvent = i, n.setState(X, Te, he), ke(ze(n), i, u), ke(ze(n), i, s);
  }
}, Nz = function(n, i) {
  var r = n.props, u = r.onWheelStop, s = r.onZoomStop;
  jl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (xc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, kv);
  var f = Tv(n, i);
  f && (jl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, ke(ze(n), i, u), ke(ze(n), i, s));
  }, Av));
}, Dz = function(n, i) {
  var r = n.props, u = r.onWheelStart, s = r.onPanningStart;
  n.wheelStopEventTimer || (It(n), ke(ze(n), i, u), ke(ze(n), i, s));
}, Zz = function(n, i) {
  var r = n.props, u = r.onWheelStop, s = r.onPanningStop;
  jl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout(function() {
    n.mounted && (xc(n, i.x, i.y), n.wheelAnimationTimer = null);
  }, kv);
  var f = Tv(n, i);
  f && (jl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout(function() {
    n.mounted && (n.wheelStopEventTimer = null, ke(ze(n), i, u), ke(ze(n), i, s));
  }, Av));
}, Ov = function(n) {
  for (var i = 0, r = 0, u = 0; u < 2; u += 1)
    i += n.touches[u].clientX, r += n.touches[u].clientY;
  var s = i / 2, f = r / 2;
  return { x: s, y: f };
}, Uz = function(n, i) {
  var r = Ev(i);
  n.pinchStartDistance = r, n.lastDistance = r, n.pinchStartScale = n.state.scale, n.isPanning = !1, n.isPinching = !0, n.pinchPreviousCenter = Ov(i), It(n);
}, Rz = function(n, i) {
  var r = n.contentComponent, u = n.pinchStartDistance, s = n.wrapperComponent, f = n.pinchPreviousCenter, d = n.state.scale, m = n.setup, v = m.limitToBounds, h = m.centerZoomedOut, _ = m.zoomAnimation, S = m.autoAlignment, x = m.pinch, k = m.panning, j = _.disabled, q = _.size, Y = x.allowPanning;
  if (!(u === null || !r)) {
    var K = kz(i, d, r);
    if (!(!Number.isFinite(K.x) || !Number.isFinite(K.y))) {
      var B = Ev(i), H = Cz(n, B), X = Ov(i), V = d / H, P = (X.x - (f?.x || 0)) * V, L = (X.y - (f?.y || 0)) * V;
      if (!(H === d && P === 0 && L === 0)) {
        n.pinchPreviousCenter = X;
        var le = _i(n, H), fe = j || q === 0 || h, Te = v && fe, he = xu(n, K.x, K.y, H, le, Te), de = he.x, Ye = he.y;
        if (n.pinchMidpoint = K, n.lastDistance = B, k.disabled || !Y)
          n.setState(H, de, Ye);
        else {
          var Le = S.sizeX, et = S.sizeY, M = ta(n, Le, H), G = ta(n, et, H), I = de + P, ve = Ye + L, ye = Nl(I, ve, le, v, M, G, s), w = ye.x, D = ye.y;
          n.setState(H, w, D);
        }
      }
    }
  }
}, Yz = function(n) {
  var i = n.pinchMidpoint;
  n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, n.isPinching = !1, xc(n, i?.x, i?.y);
}, Cv = function(n, i) {
  var r = n.props.onZoomStop, u = n.setup.doubleClick.animationTime;
  jl(n.doubleClickStopEventTimer), n.doubleClickStopEventTimer = setTimeout(function() {
    n.doubleClickStopEventTimer = null, ke(ze(n), i, r);
  }, u);
}, Xz = function(n, i) {
  var r = n.props, u = r.onZoomStart, s = r.onZoom, f = n.setup.doubleClick, d = f.animationTime, m = f.animationType;
  ke(ze(n), i, u), Sv(n, d, m, function() {
    return ke(ze(n), i, s);
  }), Cv(n, i);
};
function Hz(n, i) {
  return n === "toggle" ? i === 1 ? 1 : -1 : n === "zoomOut" ? -1 : 1;
}
function Bz(n, i) {
  var r = n.setup, u = n.doubleClickStopEventTimer, s = n.state, f = n.contentComponent, d = s.scale, m = n.props, v = m.onZoomStart, h = m.onZoom, _ = r.doubleClick, S = _.disabled, x = _.mode, k = _.step, j = _.animationTime, q = _.animationType;
  if (!S && !u) {
    if (x === "reset")
      return Xz(n, i);
    if (!f)
      return console.error("No ContentComponent found");
    var Y = Hz(x, n.state.scale), K = _v(n, Y, k);
    if (d !== K) {
      ke(ze(n), i, v);
      var B = xv(i, f, d), H = zc(n, K, B.x, B.y);
      if (!H)
        return console.error("Error during zoom event. New transformation state was not calculated.");
      ke(ze(n), i, h), ia(n, H, j, q), Cv(n, i);
    }
  }
}
var qz = function(n, i) {
  var r = n.isInitialized, u = n.setup, s = n.wrapperComponent, f = u.doubleClick, d = f.disabled, m = f.excluded, v = i.target, h = s?.contains(v), _ = r && v && h && !d;
  if (!_)
    return !1;
  var S = Zl(v, m);
  return !S;
}, $z = (
  /** @class */
  /* @__PURE__ */ (function() {
    function n(i) {
      var r = this;
      this.mounted = !0, this.onChangeCallbacks = /* @__PURE__ */ new Set(), this.onInitCallbacks = /* @__PURE__ */ new Set(), this.onTransformCallbacks = /* @__PURE__ */ new Set(), this.wrapperComponent = null, this.contentComponent = null, this.isInitialized = !1, this.bounds = null, this.previousWheelEvent = null, this.wheelStopEventTimer = null, this.wheelAnimationTimer = null, this.isPanning = !1, this.isWheelPanning = !1, this.startCoords = null, this.panStartPosition = null, this.lastTouch = null, this.isPinching = !1, this.distance = null, this.lastDistance = null, this.pinchStartDistance = null, this.pinchStartScale = null, this.pinchMidpoint = null, this.pinchPreviousCenter = null, this.doubleClickStopEventTimer = null, this.velocity = null, this.velocityTime = null, this.lastMousePosition = null, this.isAnimating = !1, this.animation = null, this.pressedKeys = {}, this.mount = function() {
        r.initializeWindowEvents();
      }, this.unmount = function() {
        r.cleanupWindowEvents();
      }, this.update = function(u) {
        r.props = u, r.wrapperComponent && r.contentComponent && _i(r, r.state.scale), r.setup = xh(u);
      }, this.initializeWindowEvents = function() {
        var u, s, f, d, m = nc(), v = (u = r.wrapperComponent) === null || u === void 0 ? void 0 : u.ownerDocument, h = v?.defaultView;
        (s = r.wrapperComponent) === null || s === void 0 || s.addEventListener("wheel", r.onWheelPanning, m), (f = r.wrapperComponent) === null || f === void 0 || f.addEventListener("keyup", r.setKeyUnPressed, m), (d = r.wrapperComponent) === null || d === void 0 || d.addEventListener("keydown", r.setKeyPressed, m), h?.addEventListener("mousedown", r.onPanningStart, m), h?.addEventListener("mousemove", r.onPanning, m), h?.addEventListener("mouseup", r.onPanningStop, m), v?.addEventListener("mouseleave", r.clearPanning, m), h?.addEventListener("keyup", r.setKeyUnPressed, m), h?.addEventListener("keydown", r.setKeyPressed, m), h?.addEventListener("blur", r.handleWindowBlur);
      }, this.cleanupWindowEvents = function() {
        var u, s, f, d, m, v = nc(), h = (u = r.wrapperComponent) === null || u === void 0 ? void 0 : u.ownerDocument, _ = h?.defaultView;
        _?.removeEventListener("mousedown", r.onPanningStart, v), _?.removeEventListener("mousemove", r.onPanning, v), _?.removeEventListener("mouseup", r.onPanningStop, v), h?.removeEventListener("mouseleave", r.clearPanning, v), _?.removeEventListener("keyup", r.setKeyUnPressed, v), _?.removeEventListener("keydown", r.setKeyPressed, v), _?.removeEventListener("blur", r.handleWindowBlur), document.removeEventListener("mouseleave", r.clearPanning, v), (s = r.wrapperComponent) === null || s === void 0 || s.removeEventListener("wheel", r.onWheelPanning, v), (f = r.wrapperComponent) === null || f === void 0 || f.removeEventListener("keyup", r.setKeyUnPressed, v), (d = r.wrapperComponent) === null || d === void 0 || d.removeEventListener("keydown", r.setKeyPressed, v), It(r), (m = r.observer) === null || m === void 0 || m.disconnect();
      }, this.handleInitializeWrapperEvents = function(u) {
        var s = nc();
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
          var f = zv(r, u);
          f && (jz(r, u), Mz(r, u), Nz(r, u));
        }
      }, this.onWheelPanning = function(u) {
        var s = r.props.onPanning, f = r.setup.trackPadPanning, d = f.lockAxisX, m = f.lockAxisY;
        r.syncModifierKeys(u);
        var v = wz(r, u);
        if (v) {
          u.preventDefault(), u.stopPropagation();
          var h = r.state, _ = h.positionX, S = h.positionY, x = _ - u.deltaX, k = S - u.deltaY, j = d ? _ : x, q = m ? S : k, Y = r.setup.autoAlignment, K = Y.sizeX, B = Y.sizeY, H = ta(r, K), X = ta(r, B);
          j === _ && q === S || (Dz(r, u), vv(r, j, q, H, X), ke(ze(r), u, s), Zz(r, u));
        }
      }, this.onPanningStart = function(u) {
        var s = r.setup.disabled, f = r.props.onPanningStart;
        if (!s) {
          r.syncModifierKeys(u);
          var d = gh(r, u);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (u.button === 0 && !r.setup.panning.allowLeftClickPan || u.button === 1 && !r.setup.panning.allowMiddleClickPan || u.button === 2 && !r.setup.panning.allowRightClickPan || (u.preventDefault(), u.stopPropagation(), It(r), Sh(r, u), ke(ze(r), u, f)));
          }
        }
      }, this.onPanning = function(u) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (!s) {
          if (r.syncModifierKeys(u), r.isPanning && u.buttons === 0) {
            r.clearPanning(u);
            return;
          }
          var d = _h(r);
          if (d) {
            var m = r.isPressingKeys(r.setup.panning.activationKeys);
            m && (u.preventDefault(), u.stopPropagation(), wh(r, u.clientX, u.clientY, ea.MOUSE), ke(ze(r), u, f));
          }
        }
      }, this.onPanningStop = function(u) {
        var s = r.setup.panning.velocityDisabled, f = r.props.onPanningStop;
        r.isPanning && (sz(r, s), ke(ze(r), u, f));
      }, this.onPinchStart = function(u) {
        var s = r.setup.disabled, f = r.props.onPinchStart;
        if (!s) {
          var d = Ez(r, u);
          d && (Uz(r, u), It(r), ke(ze(r), u, f));
        }
      }, this.onPinch = function(u) {
        var s = r.setup.disabled, f = r.props.onPinch;
        if (!s) {
          var d = Az(r);
          d && (u.preventDefault(), u.stopPropagation(), Rz(r, u), ke(ze(r), u, f));
        }
      }, this.onPinchStop = function(u) {
        var s = r.props.onPinchStop;
        r.pinchStartScale && (Yz(r), ke(ze(r), u, s));
      }, this.onTouchPanningStart = function(u) {
        var s = r.setup, f = s.disabled, d = s.doubleClick, m = r.props.onPanningStart;
        if (!f) {
          var v = !d?.disabled, h = r.lastTouch && +/* @__PURE__ */ new Date() - r.lastTouch < 200;
          if (v && h && u.touches.length === 1)
            r.onDoubleClick(u);
          else {
            r.lastTouch = +/* @__PURE__ */ new Date(), It(r);
            var _ = u.touches, S = _.length === 1, x = _.length === 2, k = gh(r, u);
            if (S) {
              if (!k)
                return;
              It(r), Sh(r, u), ke(ze(r), u, m);
            }
            x && r.onPinchStart(u);
          }
        }
      }, this.onTouchPanning = function(u) {
        var s = r.setup.disabled, f = r.props.onPanning;
        if (r.isPanning && u.touches.length === 1) {
          if (s)
            return;
          var d = _h(r);
          if (!d)
            return;
          u.cancelable && u.preventDefault(), u.stopPropagation();
          var m = u.touches[0];
          wh(r, m.clientX, m.clientY, ea.TOUCH), ke(ze(r), u, f);
        } else u.touches.length > 1 && r.onPinch(u);
      }, this.onTouchPanningStop = function(u) {
        r.onPanningStop(u), r.onPinchStop(u);
      }, this.onDoubleClick = function(u) {
        var s = r.setup.disabled;
        if (!s) {
          var f = qz(r, u);
          f && Bz(r, u);
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
          var u = Tc(r.state.scale, r.wrapperComponent, r.contentComponent);
          r.setState(u.scale, u.positionX, u.positionY);
        }
      }, this.handleTransformStyles = function(u, s, f) {
        return r.props.customTransform ? r.props.customTransform(u, s, f) : wv(u, s, f);
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
          }), ke(v, { scale: r.state.scale, positionX: s, positionY: f }, d);
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
        r.cleanupWindowEvents(), r.wrapperComponent = u, r.contentComponent = s, _i(r, r.state.scale), r.handleInitializeWrapperEvents(u), r.handleInitialize(s), r.initializeWindowEvents(), r.isInitialized = !0;
        var f = ze(r);
        ke(f, void 0, r.props.onInit), bz(r.props.ref, f);
      }, this.props = i, this.setup = xh(this.props), this.state = gv(this.props);
    }
    return n;
  })()
), Ul = bu.createContext(null), Lz = function(n, i) {
  return typeof n == "function" ? n(i) : n;
}, Vz = bu.forwardRef(function(n, i) {
  var r = te.useRef(new $z(n)).current, u = Lz(n.children, _u(r));
  return te.useImperativeHandle(i, function() {
    return _u(r);
  }, [r]), te.useEffect(function() {
    r.update(n);
  }, [r, n]), g.jsx(Ul.Provider, Qt({ value: r }, { children: u }));
});
bu.forwardRef(function(n, i) {
  var r = te.useRef(null), u = te.useContext(Ul);
  return te.useEffect(function() {
    return u.onChange(function(s) {
      if (r.current) {
        var f = 0, d = 0;
        r.current.style.transform = u.handleTransformStyles(f, d, 1 / s.instance.state.scale);
      }
    });
  }, [u]), g.jsx("div", Qt({}, n, { ref: Sz([r, i]) }));
});
function Gz(n, i) {
  i === void 0 && (i = {});
  var r = i.insertAt;
  if (!(typeof document > "u")) {
    var u = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", r === "top" && u.firstChild ? u.insertBefore(s, u.firstChild) : u.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
  }
}
var Qz = `.transform-component-module_wrapper__SPB86 {
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
`, ac = { wrapper: "transform-component-module_wrapper__SPB86", content: "transform-component-module_content__FBWxo", infiniteGrid: "transform-component-module_infiniteGrid__Z-aP3" };
Gz(Qz);
var Kz = function(n) {
  var i = n.children, r = n.wrapperClass, u = r === void 0 ? "" : r, s = n.contentClass, f = s === void 0 ? "" : s, d = n.wrapperStyle, m = n.contentStyle, v = n.wrapperProps, h = v === void 0 ? {} : v, _ = n.contentProps, S = _ === void 0 ? {} : _, x = n.infinite, k = x === void 0 ? !1 : x, j = te.useContext(Ul), q = j.init, Y = j.cleanupWindowEvents, K = te.useRef(null), B = te.useRef(null), H = te.useRef(null);
  return te.useEffect(function() {
    var X = K.current, V = B.current;
    return X !== null && V !== null && q && q?.(X, V), function() {
      Y?.();
    };
  }, []), te.useEffect(function() {
    if (k) {
      var X = H.current;
      if (X) {
        var V = function() {
          var P = j.state, L = P.positionX, le = P.positionY;
          X.style.backgroundPosition = "".concat(L, "px ").concat(le, "px");
        };
        return V(), j.onChange(V);
      }
    }
  }, [k, j]), g.jsxs("div", Qt({}, h, { ref: K, className: "".concat(sc.wrapperClass, " ").concat(ac.wrapper, " ").concat(u), style: d }, { children: [k && g.jsx("div", { ref: H, className: ac.infiniteGrid, "aria-hidden": !0 }), g.jsx("div", Qt({}, S, { ref: B, className: "".concat(sc.contentClass, " ").concat(ac.content, " ").concat(f), style: Qt(Qt({}, m), { transform: wv(j.state.positionX, j.state.positionY, j.state.scale) }) }, { children: i }))] }));
};
function Jz(n, i) {
  var r = Math.max(0, Math.min(n.x + n.width, i.x + i.width) - Math.max(n.x, i.x)), u = Math.max(0, Math.min(n.y + n.height, i.y + i.height) - Math.max(n.y, i.y));
  return r * u;
}
function Wz(n) {
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
    var Y = q.x < j.x + j.width && q.x + q.width > j.x, K = q.y < j.y + j.height && q.y + q.height > j.y;
    return Y && K;
  }
  var B = q.width * q.height;
  if (B <= 0)
    return !1;
  var H = Jz(j, q);
  return H / B >= k;
}
bu.forwardRef(function(n, i) {
  var r = n.x, u = n.y, s = n.width, f = n.height, d = n.margin, m = d === void 0 ? 0 : d, v = n.threshold, h = v === void 0 ? 0 : v, _ = n.placeholder, S = _ === void 0 ? null : _, x = n.onShow, k = n.onHide, j = n.children, q = n.className, Y = n.style, K = te.useContext(Ul), B = te.useState(!1), H = B[0], X = B[1], V = te.useRef(!1), P = te.useRef(x), L = te.useRef(k);
  return P.current = x, L.current = k, te.useEffect(function() {
    var le = function() {
      var he, de, Ye = K.wrapperComponent;
      if (Ye) {
        var Le = Wz({
          elementX: r,
          elementY: u,
          elementWidth: s,
          elementHeight: f,
          scale: K.state.scale,
          positionX: K.state.positionX,
          positionY: K.state.positionY,
          viewportWidth: Ye.offsetWidth,
          viewportHeight: Ye.offsetHeight,
          margin: m,
          threshold: h
        });
        Le !== V.current && (V.current = Le, X(Le), Le ? (he = P.current) === null || he === void 0 || he.call(P) : (de = L.current) === null || de === void 0 || de.call(L));
      }
    };
    le();
    var fe = K.onChange(le), Te;
    return K.wrapperComponent || (Te = K.onInit(function() {
      return le();
    })), function() {
      fe(), Te?.();
    };
  }, [K, r, u, s, f, m, h]), H ? g.jsx("div", Qt({ ref: i, className: q, style: Y }, { children: j })) : S ? g.jsx(g.Fragment, { children: S }) : null;
});
var Pz = function() {
  var n = te.useContext(Ul);
  if (!n)
    throw new Error("Transform context must be placed inside TransformWrapper");
  return n;
}, Fz = function() {
  var n = Pz();
  return _u(n);
};
function Iz({ locked: n, onToggleLock: i }) {
  const { zoomIn: r, zoomOut: u, resetTransform: s } = Fz();
  return /* @__PURE__ */ g.jsxs("div", { className: "map-controls", children: [
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom in", onClick: () => r(), disabled: n, children: /* @__PURE__ */ g.jsx(F_, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Zoom out", onClick: () => u(), disabled: n, children: /* @__PURE__ */ g.jsx(e0, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": "Reset zoom", onClick: () => s(), children: /* @__PURE__ */ g.jsx(fc, {}) }),
    /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": n ? "Unlock map" : "Lock map", onClick: i, children: n ? /* @__PURE__ */ g.jsx(Oh, {}) : /* @__PURE__ */ g.jsx(O_, {}) })
  ] });
}
function ex({ hass: n, floor: i, language: r, selected: u, launched: s, disabled: f, onToggle: d }) {
  const [m, v] = te.useState(!0), [h, _] = te.useState({ width: 0, height: 0 }), [S, x] = te.useState({ width: 0, height: 0 }), k = te.useRef(null), j = n.states[i.map_entity], q = te.useMemo(() => cv(j), [j]), Y = te.useMemo(() => q2(j), [j]), K = te.useMemo(() => V2(i), [i]), B = typeof j?.attributes.entity_picture == "string" ? j.attributes.entity_picture : void 0;
  te.useEffect(() => {
    const X = k.current;
    if (!X) return;
    const V = new ResizeObserver(([P]) => {
      x({ width: P.contentRect.width, height: P.contentRect.height });
    });
    return V.observe(X), () => V.disconnect();
  }, []);
  let H;
  return !j || j.state === "unavailable" ? H = Q(r, "mapMissing") : B ? Y.length < 3 ? H = Q(r, "calibrationMissing") : q.length === 0 && (H = Q(r, "roomsMissing")) : H = Q(r, "imageMissing"), H ? /* @__PURE__ */ g.jsx("div", { className: "map-error", role: "alert", children: H }) : /* @__PURE__ */ g.jsx("div", { className: "map-shell", ref: k, children: /* @__PURE__ */ g.jsxs(
    Vz,
    {
      initialScale: 1,
      minScale: 0.75,
      maxScale: 4,
      centerOnInit: !0,
      wheel: { disabled: m, step: 0.08 },
      pinch: { disabled: m },
      panning: { disabled: m, excluded: ["room-hitbox"] },
      doubleClick: { disabled: !0 },
      children: [
        /* @__PURE__ */ g.jsx(Iz, { locked: m, onToggleLock: () => v((X) => !X) }),
        /* @__PURE__ */ g.jsx(Kz, { wrapperClass: "map-transform", contentClass: "map-content", children: /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: "map-image-wrap",
            style: (() => {
              if (!h.width || !h.height || !S.width || !S.height) return;
              const X = Math.min(S.width / h.width, S.height / h.height);
              return { width: h.width * X, height: h.height * X };
            })(),
            children: [
              /* @__PURE__ */ g.jsx(
                "img",
                {
                  src: n.hassUrl(B),
                  alt: `${i.name} vacuum map`,
                  draggable: !1,
                  onLoad: (X) => _({ width: X.currentTarget.naturalWidth, height: X.currentTarget.naturalHeight })
                }
              ),
              h.width > 0 && h.height > 0 && /* @__PURE__ */ g.jsx(
                "svg",
                {
                  className: "room-overlay",
                  viewBox: `0 0 ${h.width} ${h.height}`,
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-label": `${i.name} rooms`,
                  children: q.map((X) => {
                    const V = K.get(X.segment_id), P = !!V?.area_id, L = u.has(X.segment_id), le = s.has(X.segment_id), fe = L2(X, Y), Te = V?.name || X.source_name, he = f || !P;
                    return /* @__PURE__ */ g.jsxs("g", { className: `room ${L ? "selected" : ""} ${le ? "launched" : ""} ${P ? "" : "unmapped"}`, children: [
                      /* @__PURE__ */ g.jsx(
                        "path",
                        {
                          className: "room-hitbox",
                          d: $2(X, Y),
                          role: "button",
                          tabIndex: he ? -1 : 0,
                          "aria-label": `${Te}${P ? "" : ` — ${Q(r, "roomUnmapped")}`}`,
                          "aria-pressed": L,
                          "aria-disabled": he,
                          onClick: () => !he && d(X.segment_id),
                          onKeyDown: (de) => {
                            !he && (de.key === "Enter" || de.key === " ") && (de.preventDefault(), d(X.segment_id));
                          },
                          children: /* @__PURE__ */ g.jsx("title", { children: P ? Te : `${Te}: ${Q(r, "roomUnmapped")}` })
                        }
                      ),
                      /* @__PURE__ */ g.jsxs("g", { className: "room-label", transform: `translate(${fe.x} ${fe.y})`, pointerEvents: "none", children: [
                        /* @__PURE__ */ g.jsx("circle", { r: "23" }),
                        /* @__PURE__ */ g.jsx("foreignObject", { x: "-11", y: "-11", width: "22", height: "22", children: /* @__PURE__ */ g.jsx(oc, { icon: V?.icon || "mdi:floor-plan" }) }),
                        /* @__PURE__ */ g.jsx("text", { y: "39", textAnchor: "middle", children: Te })
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
const tx = {
  preparing: /* @__PURE__ */ g.jsx(Yp, { className: "spin" }),
  carry_upstairs: /* @__PURE__ */ g.jsx(v_, {}),
  cleaning_upstairs: /* @__PURE__ */ g.jsx(ic, {}),
  carry_downstairs: /* @__PURE__ */ g.jsx(kh, {}),
  finishing: /* @__PURE__ */ g.jsx(Yp, { className: "spin" }),
  complete: /* @__PURE__ */ g.jsx(S_, {}),
  error: /* @__PURE__ */ g.jsx(fc, {}),
  idle: /* @__PURE__ */ g.jsx(ic, {})
}, Th = {
  idle: { title: "assistedCarryTitle", description: "assistedCarryDescription" },
  preparing: { title: "assisted_preparing_title", description: "assisted_preparing_description" },
  carry_upstairs: { title: "assisted_carry_upstairs_title", description: "assisted_carry_upstairs_description" },
  cleaning_upstairs: { title: "assisted_cleaning_upstairs_title", description: "assisted_cleaning_upstairs_description" },
  carry_downstairs: { title: "assisted_carry_downstairs_title", description: "assisted_carry_downstairs_description" },
  finishing: { title: "assisted_finishing_title", description: "assisted_finishing_description" },
  complete: { title: "assisted_complete_title", description: "assisted_complete_description" },
  error: { title: "assisted_error_title", description: "assisted_error_description" }
};
function nx({
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
  const v = Q(n, Th[i].title), h = Q(n, Th[i].description), _ = !["complete", "error"].includes(i);
  return /* @__PURE__ */ g.jsxs("section", { className: `assisted-panel assisted-${i}`, "aria-live": "polite", children: [
    /* @__PURE__ */ g.jsx("div", { className: "assisted-icon", children: tx[i] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-copy", children: [
      /* @__PURE__ */ g.jsx("strong", { children: v }),
      /* @__PURE__ */ g.jsx("p", { children: h }),
      r.length > 0 && /* @__PURE__ */ g.jsx("small", { children: r.join(" · ") })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "assisted-actions", children: [
      i === "carry_upstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: u, onClick: s, children: [
        /* @__PURE__ */ g.jsx(Ch, {}),
        Q(n, "startUpstairs")
      ] }),
      i === "carry_downstairs" && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", disabled: u, onClick: f, children: [
        /* @__PURE__ */ g.jsx(kh, {}),
        Q(n, "dockAndFinish")
      ] }),
      ["complete", "error"].includes(i) && /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", disabled: u, onClick: d, children: [
        /* @__PURE__ */ g.jsx(fc, {}),
        Q(n, "newUpstairsJob")
      ] }),
      _ && /* @__PURE__ */ g.jsx("button", { type: "button", className: "secondary", disabled: u, onClick: m, children: Q(n, "cancel") })
    ] })
  ] });
}
function Sl(n, i) {
  if (!i) return;
  const r = n.states[i];
  if (!(!r || ["unknown", "unavailable"].includes(r.state)))
    return `${r.state}${r.attributes.unit_of_measurement ? ` ${r.attributes.unit_of_measurement}` : ""}`;
}
function ax(n, i, r) {
  if (!i) return;
  const u = n.states[i];
  if (!u || ["unknown", "unavailable"].includes(u.state)) return;
  const s = Number(u.state);
  if (!Number.isFinite(s) || s < 0) return;
  const f = String(u.attributes.unit_of_measurement ?? ""), d = f === "s" ? s / 60 : f === "min" ? s : f === "d" ? s * 24 * 60 : s * 60, m = Math.max(0, Math.round(d)), v = Math.floor(m / 60), h = m % 60;
  return `${[
    v > 0 ? `${v} ${r === "nl" ? "u" : "h"}` : void 0,
    h > 0 || v === 0 ? `${h} min` : void 0
  ].filter(Boolean).join(" ")} ${Q(r, "remaining")}`;
}
function ix(n, i) {
  if (i === "washing_the_mop") return Q(n, "washingMop");
}
function lx(n, i) {
  const r = n.entities?.map_select ? i.states[n.entities.map_select]?.state : void 0;
  return n.floors.find((u) => u.map_select_option === r) ?? n.floors[0];
}
function rx({ hass: n, config: i }) {
  const r = te.useRef(n), u = te.useRef(!1), s = i.language, [f, d] = te.useState(() => lx(i, n).id), m = i.floors.find(($) => $.id === f) ?? i.floors[0], [v, h] = te.useState(/* @__PURE__ */ new Set()), [_, S] = te.useState(!1), [x, k] = te.useState(!1), [j, q] = te.useState(!1), [Y, K] = te.useState(!1), [B, H] = te.useState(), [X, V] = te.useState(), [P, L] = te.useState({ phase: "idle" }), le = te.useMemo(() => iw(n, i), [n, i]), fe = te.useMemo(() => xw(i, le), [i, le]), Te = fe.find(({ preset: $, available: ge }) => $.id === i.default_preset && ge)?.preset ?? fe.find(({ available: $ }) => $)?.preset, [he, de] = te.useState(
    () => gu(Te ?? { id: "custom", strategy: "custom", cleaning_type: "vacuum" })
  ), Ye = n.states[i.entity], Le = W2(i), et = P2(n, i), M = i.entities?.assisted_carry_job ? n.states[i.entities.assisted_carry_job]?.state : void 0, G = te.useMemo(() => ew(M), [M]), I = et !== "idle";
  te.useEffect(() => {
    r.current = n;
  }, [n]), te.useEffect(() => {
    !I || !Le || !G || (d(Le.id), h(new Set(G.segment_ids)), de({
      preset_id: "assisted_carry",
      strategy: G.strategy,
      cleaning_type: G.cleaning_type,
      fan_speed: G.fan_speed,
      mop_mode: G.mop_mode,
      mop_intensity: G.mop_intensity,
      cleaning_count: G.cleaning_count
    }));
  }, [I, Le, G]);
  const ve = i.entities?.status ? n.states[i.entities.status]?.state : void 0, ye = ["washing_the_mop", "washing_the_mop_2"].includes(ve ?? ""), w = [Ye?.state, ve].includes("emptying_the_bin"), D = rw(Ye?.state) || ye;
  te.useEffect(() => {
    P.phase === "starting" && D ? L(($) => ({ ...$, phase: "active" })) : P.phase === "active" && !D && (L({ phase: "idle" }), h(/* @__PURE__ */ new Set()));
  }, [P.phase, D]);
  const J = new Set(P.floor_id === m.id ? P.segment_ids ?? [] : []), W = m.rooms.filter(($) => v.has($.segment_id)), re = W.map(($) => $.name), oe = i.entities?.dock_mop_drying ? n.states[i.entities.dock_mop_drying]?.state === "on" : !1, Se = oe ? ax(n, i.entities?.dock_mop_drying_remaining_time, s) : void 0, tt = [
    ix(s, ve),
    oe ? Q(s, "dryingMop") : void 0,
    Se
  ].filter(($) => !!$), Xe = [
    { icon: /* @__PURE__ */ g.jsx(__, {}), label: Q(s, "battery"), value: Sl(n, i.entities?.battery) },
    { icon: /* @__PURE__ */ g.jsx(M_, {}), label: Q(s, "room"), value: Sl(n, i.entities?.current_room) },
    { icon: /* @__PURE__ */ g.jsx(X_, {}), label: Q(s, "area"), value: Sl(n, i.entities?.cleaning_area) },
    { icon: /* @__PURE__ */ g.jsx(z_, {}), label: Q(s, "duration"), value: Sl(n, i.entities?.cleaning_time) },
    { icon: /* @__PURE__ */ g.jsx(G_, {}), label: Q(s, "progress"), value: Sl(n, i.entities?.cleaning_progress) }
  ].filter(($) => $.value), en = ($) => {
    I || (d($), h(/* @__PURE__ */ new Set()), S(!1));
  }, tn = ($) => {
    if ($) {
      const ge = fe.find(({ preset: xe, available: an }) => xe.id === i.default_preset && an)?.preset ?? fe.find(({ preset: xe, available: an }) => xe.id === "vacuum_only" && an)?.preset ?? fe.find(({ available: xe }) => xe)?.preset;
      if (!ge) {
        V(Q(s, "unsupported"));
        return;
      }
      de(gu(ge));
    }
    k($), S(!0);
  }, la = () => {
    const $ = m.rooms.filter((ge) => ge.include_in_floor_clean !== !1 && ge.area_id).map((ge) => ge.segment_id);
    h(new Set($)), tn(!!m.assisted_carry);
  }, nn = ($) => $ instanceof Ol ? `${$.operation}: ${$.message}` : $ instanceof Error ? $.message : String($), Ut = async () => {
    if (!u.current) {
      u.current = !0, q(!0);
      try {
        const $ = F2([...v], he);
        await tw(r.current, i, $), S(!1), V(Q(s, "preparingUpstairs"));
      } catch ($) {
        V(nn($));
        try {
          await hi(r.current, i, "error");
        } catch {
        }
      } finally {
        u.current = !1, q(!1);
      }
    }
  }, Si = async () => {
    if (!(j || !Le || !G)) {
      q(!0);
      try {
        await nw(r.current, i, Le, G);
      } catch ($) {
        V(nn($));
        try {
          await hi(r.current, i, "error");
        } catch {
        }
      } finally {
        q(!1);
      }
    }
  }, wi = async () => {
    if (!j) {
      q(!0);
      try {
        await aw(r.current, i);
      } catch ($) {
        V(nn($));
        try {
          await hi(r.current, i, "error");
        } catch {
        }
      } finally {
        q(!1);
      }
    }
  }, Tu = async () => {
    if (!j) {
      q(!0);
      try {
        await dh(r.current, i), h(/* @__PURE__ */ new Set());
      } catch ($) {
        V(nn($));
      } finally {
        q(!1);
      }
    }
  }, Rl = async () => {
    if (!j) {
      q(!0);
      try {
        const $ = [
          i.entities?.assisted_carry_prepare_script,
          i.entities?.assisted_carry_start_script,
          i.entities?.assisted_carry_finish_script
        ].filter((ge) => !!(ge && r.current.states[ge]));
        $.length > 0 && await r.current.callService("script", "turn_off", {}, { entity_id: $ }), et === "cleaning_upstairs" && await r.current.callService("vacuum", "stop", {}, { entity_id: i.entity }), ye && await Ws(r.current, i, "wash", !0), w && await Ws(r.current, i, "empty", !0), await dh(r.current, i), h(/* @__PURE__ */ new Set());
      } catch ($) {
        V(nn($));
      } finally {
        q(!1);
      }
    }
  }, zi = async () => {
    if (x) {
      await Ut();
      return;
    }
    if (!u.current) {
      u.current = !0, L({ phase: "submitting", floor_id: m.id, segment_ids: [...v] });
      try {
        await _w({ getHass: () => r.current, config: i, floor: m, rooms: W, draft: he }), L({ phase: "starting", floor_id: m.id, segment_ids: [...v] }), S(!1), V(Q(s, "launched"));
      } catch ($) {
        const ge = $ instanceof Be ? `${$.operation}: ${$.message}` : String($);
        L({ phase: "failed", floor_id: m.id, segment_ids: [...v], error: ge }), V(ge);
      } finally {
        u.current = !1;
      }
    }
  }, kn = async ($) => {
    try {
      if ($ === "stop" || $ === "return_to_base") {
        const ge = i.entities?.vacuum_then_mop_script;
        ge && r.current.states[ge] && r.current.states[ge].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: ge });
        const xe = i.entities?.assisted_carry_start_script;
        I && xe && r.current.states[xe] && r.current.states[xe].state !== "unavailable" && await r.current.callService("script", "turn_off", {}, { entity_id: xe });
      }
      await r.current.callService("vacuum", $, {}, { entity_id: i.entity }), $ === "stop" && et === "cleaning_upstairs" && await hi(r.current, i, "carry_downstairs");
    } catch (ge) {
      V(`${$}: ${ge instanceof Error ? ge.message : String(ge)}`);
    }
  }, xi = async ($, ge) => {
    if (!B) {
      H(Q(s, "settingSaved"));
      try {
        await pw(r.current, i, $, ge), V(Q(s, "settingSaved"));
      } catch (xe) {
        const an = xe instanceof An ? `${xe.operation}: ${xe.message}` : String(xe);
        V(an);
      } finally {
        H(void 0);
      }
    }
  }, Eu = async ($, ge) => {
    if (!B) {
      if (!ge) {
        const xe = $ === "empty" ? Q(s, "confirmEmpty") : $ === "wash" ? Q(s, "confirmWash") : $ === "dry" ? Q(s, "confirmDry") : Q(s, "confirmDrain");
        if (!window.confirm(xe)) return;
      }
      H(Q(s, "dockActionSent"));
      try {
        await Ws(r.current, i, $, ge), V(Q(s, "dockActionSent"));
      } catch (xe) {
        const an = xe instanceof An ? `${xe.operation}: ${xe.message}` : String(xe);
        V(an);
      } finally {
        H(void 0);
      }
    }
  }, Au = async ($) => {
    const ge = i.entities?.dock_child_lock;
    if (!(!ge || B)) {
      H(Q(s, "settingSaved"));
      try {
        await r.current.callService("switch", $ ? "turn_on" : "turn_off", {}, { entity_id: ge }), V(Q(s, "settingSaved"));
      } catch (xe) {
        V(`child_lock: ${xe instanceof Error ? xe.message : String(xe)}`);
      } finally {
        H(void 0);
      }
    }
  };
  return /* @__PURE__ */ g.jsxs("ha-card", { className: "roborock-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "card-header", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("h1", { children: i.name ?? Ye?.attributes.friendly_name ?? "Roborock" }),
        /* @__PURE__ */ g.jsxs("div", { className: "state-line", children: [
          /* @__PURE__ */ g.jsx("span", { className: `state-dot state-${Ye?.state ?? "unavailable"}` }),
          /* @__PURE__ */ g.jsx("span", { children: Ye?.state?.replaceAll("_", " ") ?? "unavailable" }),
          tt.map(($) => /* @__PURE__ */ g.jsx("span", { className: "state-detail", children: ` · ${$}` }, $))
        ] })
      ] }),
      Xe.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "status-strip", children: Xe.map(($) => /* @__PURE__ */ g.jsxs("div", { title: $.label, children: [
        $.icon,
        /* @__PURE__ */ g.jsx("strong", { children: $.value })
      ] }, $.label)) })
    ] }),
    i.floors.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "floor-tabs", role: "tablist", "aria-label": Q(s, "floor"), children: i.floors.map(($) => /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": m.id === $.id,
        className: m.id === $.id ? "active" : "",
        disabled: I && m.id !== $.id,
        onClick: () => en($.id),
        children: $.name
      },
      $.id
    )) }),
    /* @__PURE__ */ g.jsx(
      ex,
      {
        hass: n,
        floor: m,
        language: s,
        selected: v,
        launched: J,
        disabled: I || P.phase === "submitting" || P.phase === "starting" || P.phase === "active",
        onToggle: ($) => h((ge) => {
          const xe = new Set(ge);
          return xe.has($) ? xe.delete($) : xe.add($), xe;
        })
      }
    ),
    m.assisted_carry && /* @__PURE__ */ g.jsx(
      nx,
      {
        language: s,
        stage: et,
        roomNames: re,
        pending: j,
        onStart: Si,
        onFinish: wi,
        onReset: Tu,
        onCancel: Rl
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "selection-row", children: [
      /* @__PURE__ */ g.jsxs("div", { children: [
        /* @__PURE__ */ g.jsx("strong", { children: Q(s, "selectedRooms") }),
        /* @__PURE__ */ g.jsx("span", { children: re.length ? re.join(" · ") : Q(s, "noRoomsSelected") })
      ] }),
      /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: v.size })
    ] }),
    !I && /* @__PURE__ */ g.jsxs("div", { className: "primary-actions", children: [
      /* @__PURE__ */ g.jsxs("button", { type: "button", className: "secondary", onClick: la, disabled: P.phase === "submitting", children: [
        /* @__PURE__ */ g.jsx(Rp, {}),
        " ",
        Q(s, "entireFloor")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", className: "primary", onClick: () => tn(!!m.assisted_carry), disabled: v.size === 0 || P.phase === "submitting", children: [
        m.assisted_carry && /* @__PURE__ */ g.jsx(ic, {}),
        m.assisted_carry ? Q(s, "prepareUpstairs") : Q(s, "configureJob")
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "transport", "aria-label": "Vacuum controls", children: [
      Ye?.state === "paused" && le.canStart && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => kn("start"), children: [
        /* @__PURE__ */ g.jsx(Ch, {}),
        Q(s, "resume")
      ] }),
      Ye?.state === "cleaning" && le.canPause && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => kn("pause"), children: [
        /* @__PURE__ */ g.jsx(D_, {}),
        Q(s, "pause")
      ] }),
      le.canStop && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => kn("stop"), children: [
        /* @__PURE__ */ g.jsx(L_, {}),
        Q(s, "stop")
      ] }),
      le.canDock && /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => kn("return_to_base"), children: [
        /* @__PURE__ */ g.jsx(Rp, {}),
        Q(s, "dock")
      ] }),
      /* @__PURE__ */ g.jsxs("button", { type: "button", onClick: () => K(!0), children: [
        /* @__PURE__ */ g.jsx(B_, {}),
        Q(s, "dockStation")
      ] })
    ] }),
    _ && /* @__PURE__ */ g.jsx(
      Dw,
      {
        language: s,
        draft: he,
        capabilities: le,
        presets: fe,
        selectedRoomNames: re,
        submitting: P.phase === "submitting" || j,
        assistedCarry: x,
        onDraftChange: de,
        onClose: () => P.phase !== "submitting" && !j && S(!1),
        onStart: zi
      }
    ),
    Y && /* @__PURE__ */ g.jsx(
      kw,
      {
        hass: n,
        config: i,
        language: s,
        washing: ye,
        emptying: w,
        drying: oe,
        dryingRemaining: Se,
        pending: B,
        onClose: () => !B && K(!1),
        onAction: Eu,
        onSetting: xi,
        onChildLock: Au
      }
    ),
    X && /* @__PURE__ */ g.jsxs("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ g.jsx("span", { children: X }),
      /* @__PURE__ */ g.jsx("button", { type: "button", "aria-label": Q(s, "close"), onClick: () => V(void 0), children: /* @__PURE__ */ g.jsx(dc, {}) })
    ] })
  ] });
}
const ux = ':host{display:block;--rvm-accent: var(--primary-color, #5965f2);--rvm-on-accent: var(--text-primary-color, #fff);--rvm-surface: var(--card-background-color, #fff);--rvm-surface-2: var(--secondary-background-color, #f2f3f7);--rvm-text: var(--primary-text-color, #202124);--rvm-muted: var(--secondary-text-color, #6b7280);--rvm-border: var(--divider-color, rgba(0, 0, 0, .12));--rvm-danger: var(--error-color, #d32f2f);color:var(--rvm-text);font-family:var(--paper-font-body1_-_font-family, system-ui, sans-serif)}*{box-sizing:border-box}button,input,select{font:inherit}button{color:inherit}svg{width:20px;height:20px;stroke-width:2}.roborock-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius, 24px);background:var(--rvm-surface)}.card-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 20px 14px}.card-header h1{margin:0 0 4px;font-size:22px;line-height:1.2}.state-line{display:flex;flex-wrap:wrap;align-items:center;gap:7px;color:var(--rvm-muted);font-size:14px;text-transform:capitalize}.state-line .state-detail{text-transform:none}.state-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--rvm-muted)}.state-cleaning,.state-paused{background:var(--rvm-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--rvm-accent) 18%,transparent)}.state-error,.state-unavailable{background:var(--rvm-danger)}.status-strip{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.status-strip div{display:flex;align-items:center;gap:6px;min-height:36px;padding:7px 10px;border-radius:12px;background:var(--rvm-surface-2);font-size:13px}.status-strip svg{width:16px;height:16px;color:var(--rvm-accent)}.floor-tabs,.segmented{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;margin:0 20px 14px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.floor-tabs button,.segmented button{min-height:44px;padding:8px 14px;border:0;border-radius:11px;background:transparent;cursor:pointer;font-weight:600}.floor-tabs button.active,.segmented button.active{background:var(--rvm-surface);color:var(--rvm-accent);box-shadow:0 2px 8px #0000001a}.map-shell{position:relative;height:clamp(340px,54vh,620px);margin:0 12px;overflow:hidden;border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 75%,#7d91a8 25%);touch-action:pan-y}.map-transform{width:100%!important;height:100%!important}.map-content{width:100%!important;height:100%!important;display:flex;align-items:center;justify-content:center}.map-image-wrap{position:relative;flex:none;max-width:100%;max-height:100%}.map-image-wrap>img{display:block;width:100%;height:100%;object-fit:fill;-webkit-user-select:none;user-select:none}.room-overlay{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.room-hitbox{fill:transparent;stroke:#ffffff8c;stroke-width:3;vector-effect:non-scaling-stroke;cursor:pointer;transition:fill .15s ease,stroke .15s ease;outline:none}.room-hitbox:hover,.room-hitbox:focus-visible{fill:color-mix(in srgb,var(--rvm-accent) 18%,transparent);stroke:var(--rvm-accent)}.room.selected .room-hitbox{fill:color-mix(in srgb,var(--rvm-accent) 32%,transparent);stroke:var(--rvm-accent)}.room.launched .room-hitbox{fill:color-mix(in srgb,#35a854 30%,transparent);stroke:#35a854}.room.unmapped .room-hitbox{fill:#5a5a5a1f;stroke-dasharray:7 5;cursor:not-allowed}.room-label circle{fill:color-mix(in srgb,var(--rvm-surface) 92%,transparent);stroke:var(--rvm-border);stroke-width:2}.room-label text{fill:var(--rvm-text);paint-order:stroke;stroke:var(--rvm-surface);stroke-width:5px;stroke-linejoin:round;font-size:17px;font-weight:700}.room-label foreignObject{color:var(--rvm-accent)}.room-label ha-icon{display:block;width:22px;height:22px}.room.unmapped .room-label{opacity:.55}.map-controls{position:absolute;z-index:5;top:10px;right:10px;display:flex;gap:5px}.map-controls button,.map-controls .icon-button{display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--rvm-border);border-radius:13px;background:color-mix(in srgb,var(--rvm-surface) 92%,transparent);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.map-controls button:disabled{opacity:.35;cursor:not-allowed}.map-error{display:grid;place-items:center;min-height:260px;margin:0 12px;padding:30px;border:1px dashed var(--rvm-danger);border-radius:20px;color:var(--rvm-danger);text-align:center}.selection-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 20px 10px}.selection-row strong,.selection-row span{display:block}.selection-row strong{margin-bottom:3px;font-size:14px}.selection-row>div>span{color:var(--rvm-muted);font-size:13px}.selection-row .selection-count{display:grid;place-items:center;min-width:34px;height:34px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent);font-weight:700}.assisted-panel{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;margin:14px 20px 4px;padding:16px;border:1px solid color-mix(in srgb,var(--rvm-accent) 42%,var(--rvm-border));border-radius:18px;background:color-mix(in srgb,var(--rvm-accent) 9%,var(--rvm-surface))}.assisted-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;color:var(--rvm-on-accent);background:var(--rvm-accent)}.assisted-icon svg{width:23px;height:23px}.assisted-copy{min-width:0}.assisted-copy strong{display:block;margin-bottom:3px;font-size:15px}.assisted-copy p{margin:0;color:var(--rvm-muted);font-size:13px;line-height:1.4}.assisted-copy small{display:block;margin-top:6px;overflow:hidden;color:var(--rvm-accent);font-weight:650;text-overflow:ellipsis;white-space:nowrap}.assisted-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.assisted-actions button{min-height:44px}.assisted-complete{border-color:color-mix(in srgb,#35a854 55%,var(--rvm-border));background:color-mix(in srgb,#35a854 10%,var(--rvm-surface))}.assisted-complete .assisted-icon{background:#35a854}.assisted-error{border-color:color-mix(in srgb,var(--rvm-danger) 55%,var(--rvm-border));background:color-mix(in srgb,var(--rvm-danger) 9%,var(--rvm-surface))}.assisted-error .assisted-icon{background:var(--rvm-danger)}.spin{animation:rvm-spin 1.1s linear infinite}@keyframes rvm-spin{to{transform:rotate(360deg)}}.primary-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:8px 20px 14px}button.primary,button.secondary,.primary-actions button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 16px;border-radius:14px;cursor:pointer;font-weight:700}button.primary{border:1px solid var(--rvm-accent);color:var(--rvm-on-accent);background:var(--rvm-accent)}button.secondary{border:1px solid var(--rvm-border);background:var(--rvm-surface-2)}button:disabled{opacity:.45;cursor:not-allowed}.transport{display:flex;justify-content:center;gap:8px;padding:0 20px 20px}.transport button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:8px 13px;border:1px solid var(--rvm-border);border-radius:13px;background:transparent;cursor:pointer}.transport svg{width:18px;height:18px}.sheet-layer{position:fixed;z-index:999;inset:0;display:grid;place-items:center;padding:24px}.sheet-backdrop{position:absolute;inset:0;width:100%;height:100%;border:0;background:#0000007a;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.job-sheet{position:relative;display:flex;flex-direction:column;width:min(680px,100%);max-height:min(820px,100vh - 48px);overflow:hidden;border-radius:24px;background:var(--rvm-surface);box-shadow:0 22px 70px #00000052}.job-sheet header{display:flex;justify-content:space-between;gap:16px;padding:24px 24px 14px}.job-sheet h2,.job-sheet h3,.job-sheet p{margin:0}.job-sheet header p{margin-top:5px;color:var(--rvm-muted)}.job-sheet h3{margin-bottom:10px;font-size:15px}.job-sheet footer{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 22px;border-top:1px solid var(--rvm-border)}.job-sheet footer button{min-width:120px}.sheet-handle{display:none}.sheet-body{overflow:auto;padding:8px 24px 22px}.icon-button{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--rvm-surface-2);cursor:pointer}.cleaning-mode-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{position:relative;display:flex;align-items:center;justify-content:center;gap:7px;min-height:62px;padding:8px 7px 12px;border:0;color:var(--rvm-muted);background:transparent;cursor:pointer;font-weight:700}.cleaning-mode-tabs button:after{content:"";position:absolute;right:14%;bottom:-1px;left:14%;height:3px;border-radius:3px 3px 0 0;background:transparent}.cleaning-mode-tabs button.active{color:var(--rvm-accent)}.cleaning-mode-tabs button.active:after{background:var(--rvm-accent)}.cleaning-mode-tabs ha-icon{width:22px;height:22px}.mode-settings{margin-top:16px;padding:18px;border:1px solid var(--rvm-border);border-radius:20px;background:color-mix(in srgb,var(--rvm-surface-2) 45%,transparent)}.mode-description{margin:0 0 18px!important;color:var(--rvm-muted);line-height:1.45}.app-field+.app-field{margin-top:20px}.option-strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:3px;padding:4px;border-radius:14px;background:var(--rvm-surface-2)}.option-strip button{min-width:0;min-height:46px;padding:7px 6px;overflow:hidden;border:0;border-radius:11px;background:transparent;cursor:pointer;font-size:12px;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.option-strip button.active{color:var(--rvm-accent);background:var(--rvm-surface);box-shadow:0 2px 8px #0000001a}.range-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.range-heading strong{color:var(--rvm-accent)}.range-heading output{display:grid;place-items:center;min-width:42px;height:42px;border-radius:50%;background:var(--rvm-surface-2);font-weight:700}.water-flow input[type=range]{width:100%;min-height:34px;accent-color:var(--rvm-accent)}.saved-profiles{margin-top:16px}.saved-profiles>span{color:var(--rvm-muted);font-size:13px;font-weight:600}.saved-profiles>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.saved-profiles button{display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:7px 11px;border:1px solid var(--rvm-border);border-radius:12px;background:transparent}.saved-profiles button.active{border-color:var(--rvm-accent);color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 10%,transparent)}.dock-sheet{width:min(720px,100%)}.dock-sheet-body{display:block}.dock-sheet-body>*+*{margin-top:14px}.dock-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.dock-actions>button{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-items:center;gap:2px 10px;min-width:0;min-height:84px;padding:13px;border:1px solid var(--rvm-border);border-radius:16px;color:var(--rvm-text);background:var(--rvm-surface-2);cursor:pointer;text-align:left}.dock-actions>button.active{border-color:var(--rvm-accent);background:color-mix(in srgb,var(--rvm-accent) 12%,var(--rvm-surface))}.dock-actions strong,.dock-actions small{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dock-actions small{color:var(--rvm-muted)}.dock-action-icon{grid-row:1/3;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;color:var(--rvm-accent);background:var(--rvm-surface)}.dock-actions>button.active .dock-action-icon{color:var(--rvm-on-accent);background:var(--rvm-accent)}.dock-settings-group{overflow:hidden;border:1px solid var(--rvm-border);border-radius:18px;background:color-mix(in srgb,var(--rvm-surface-2) 44%,transparent)}.dock-settings-group h3{display:flex;align-items:center;gap:8px;margin:0;padding:14px 16px 10px;font-size:15px}.dock-settings-group h3 svg{width:18px;height:18px;color:var(--rvm-accent)}.dock-setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:55px;padding:8px 16px;border-top:1px solid var(--rvm-border)}.dock-setting-row>span{font-weight:600}.dock-setting-row select{width:min(250px,52%);min-height:38px;padding:7px 32px 7px 10px;border:1px solid var(--rvm-border);border-radius:10px;color:var(--rvm-text);background:var(--rvm-surface)}.dock-toggle{position:relative;flex:0 0 auto;width:48px;height:28px;padding:0;border:0;border-radius:14px;background:var(--rvm-border);cursor:pointer;transition:background .15s ease}.dock-toggle>span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--rvm-surface);box-shadow:0 1px 5px #00000040;transition:transform .15s ease}.dock-toggle.active{background:var(--rvm-accent)}.dock-toggle.active>span{transform:translate(20px)}.drain-button{display:flex;align-items:center;gap:12px;width:100%;min-height:62px;padding:11px 16px;border:0;border-top:1px solid var(--rvm-border);color:var(--rvm-danger);background:transparent;cursor:pointer;text-align:left}.drain-button>span{display:grid;gap:2px}.drain-button small{color:var(--rvm-muted);font-size:12px;font-weight:400}.dock-pending{position:sticky;bottom:0;padding:10px 12px;border-radius:12px;color:var(--rvm-on-accent);background:var(--rvm-accent);text-align:center}.field{display:flex;flex-direction:column;gap:7px;min-width:0}.field>span,.editor label{color:var(--rvm-muted);font-size:13px;font-weight:600}.field select,.editor input,.editor select{width:100%;min-height:44px;padding:9px 11px;border:1px solid var(--rvm-border);border-radius:11px;color:var(--rvm-text);background:var(--rvm-surface)}.field .segmented{margin:0}.toast{position:absolute;z-index:1000;right:16px;bottom:16px;display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:12px 12px 12px 16px;border-radius:14px;color:var(--rvm-text);background:var(--rvm-surface);box-shadow:0 8px 30px #0000003d}.toast button{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:var(--rvm-surface-2)}.editor{padding:8px 4px 32px;color:var(--rvm-text)}.editor>h2{margin:0 0 4px}.editor>p{margin:0 0 18px;color:var(--rvm-muted)}.editor section{margin:0 0 18px;padding:16px;border:1px solid var(--rvm-border);border-radius:16px;background:var(--rvm-surface)}.editor h3{margin:0 0 12px}.editor h4{margin:14px 0 8px}.editor label{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;text-transform:capitalize}.editor .checkbox{flex-direction:row;align-items:center}.editor .checkbox input{width:18px;min-height:auto}.editor-errors{margin-bottom:14px;padding:12px;border-radius:12px;color:var(--rvm-danger);background:color-mix(in srgb,var(--rvm-danger) 10%,transparent);font-size:12px}.editor-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.editor-heading>div{display:flex;gap:4px}.editor-heading button{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:36px;padding:6px 9px;border:1px solid var(--rvm-border);border-radius:9px;background:var(--rvm-surface-2)}.editor-heading button svg{width:16px;height:16px}.editor-card{margin-top:12px;padding:14px;border-radius:14px;background:var(--rvm-surface-2)}.editor-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px;margin-top:12px}.room-editor-list{display:grid;gap:8px}.room-editor{display:grid;grid-template-columns:100px 1fr 1.2fr 1fr 1.2fr;align-items:end;gap:8px;padding:10px;border:1px solid var(--rvm-border);border-radius:12px;background:var(--rvm-surface)}.room-editor label{margin:0}button:focus-visible,select:focus-visible,input:focus-visible,.room-hitbox:focus-visible{outline:3px solid color-mix(in srgb,var(--rvm-accent) 55%,transparent);outline-offset:2px}@media(max-width:700px){.card-header{align-items:flex-start;flex-direction:column}.status-strip{justify-content:flex-start}.map-shell{height:clamp(300px,48vh,480px);margin:0 8px}.room-label text{font-size:18px}.primary-actions{grid-template-columns:1fr}.assisted-panel{grid-template-columns:auto minmax(0,1fr);margin:12px 12px 4px}.assisted-actions{grid-column:1/-1;display:grid;grid-template-columns:1fr;width:100%}.assisted-actions button{width:100%}.transport{flex-wrap:wrap}.sheet-layer{align-items:end;padding:0}.job-sheet{width:100%;max-height:92vh;border-radius:24px 24px 0 0}.sheet-handle{display:block;width:42px;height:5px;margin:9px auto 0;border-radius:9px;background:var(--rvm-border)}.job-sheet header{padding-top:14px}.dock-actions{grid-template-columns:1fr}.dock-actions>button{min-height:68px}.dock-setting-row{align-items:flex-start;flex-direction:column;gap:7px}.dock-setting-row select{width:100%}.dock-setting-row:has(.dock-toggle){align-items:center;flex-direction:row}.cleaning-mode-tabs{grid-template-columns:repeat(2,1fr)}.cleaning-mode-tabs button:nth-child(-n+2){border-bottom:1px solid var(--rvm-border)}.cleaning-mode-tabs button{min-height:56px}.editor-grid{grid-template-columns:1fr}.room-editor{grid-template-columns:1fr 1fr}.room-editor>strong{grid-column:1/-1}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}', ox = "0.4.0";
class jv extends HTMLElement {
  root;
  container;
  constructor() {
    super();
    const i = this.attachShadow({ mode: "open" }), r = document.createElement("style");
    r.textContent = ux, i.append(r), this.container = document.createElement("div"), i.append(this.container);
  }
  renderReact(i) {
    this.root ??= u_.createRoot(this.container), this.root.render(i);
  }
}
class sx extends jv {
  config;
  homeAssistant;
  setConfig(i) {
    this.config = H2(i), this.render();
  }
  set hass(i) {
    this.homeAssistant = i, this.render();
  }
  render() {
    !this.config || !this.homeAssistant || this.renderReact(/* @__PURE__ */ g.jsx(rx, { hass: this.homeAssistant, config: this.config }));
  }
  getCardSize() {
    return 10;
  }
  getGridOptions() {
    return { columns: 12, rows: "auto", min_rows: 8 };
  }
  static getConfigElement() {
    return document.createElement("roborock-vacuum-map-card-editor");
  }
  static getStubConfig() {
    return sv();
  }
}
class cx extends jv {
  config = sv();
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
        K2,
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
customElements.get("roborock-vacuum-map-card") || customElements.define("roborock-vacuum-map-card", sx);
customElements.get("roborock-vacuum-map-card-editor") || customElements.define("roborock-vacuum-map-card-editor", cx);
window.customCards ??= [];
window.customCards.push({
  type: "roborock-vacuum-map-card",
  name: "Roborock Vacuum Map Card",
  description: "A Roborock-native room and whole-floor cleaning card",
  preview: !0,
  documentationURL: "https://github.com/domidyon/roborock-vacuum-map-card"
});
console.info(`%c ROBOROCK-VACUUM-MAP-CARD %c v${ox} `, "color:white;background:#5965f2;font-weight:700", "color:#5965f2;background:#eef0ff");
export {
  sx as RoborockVacuumMapCard,
  cx as RoborockVacuumMapCardEditor
};
